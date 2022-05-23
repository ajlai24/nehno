type Variables = {
  stage?: 'DRAFT' | 'PUBLISHED';
  slug?: string;
};

type Options = {
  variables?: Variables;
  preview?: boolean;
};

async function fetchAPI(query, options: Options = {}) {
  const { variables, preview = false } = options;

  const res = await fetch(process.env.GRAPHCMS_PROJECT_API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${
        preview
          ? process.env.GRAPHCMS_DEV_AUTH_TOKEN
          : process.env.GRAPHCMS_PROD_AUTH_TOKEN
      }`,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });
  const json = await res.json();

  if (json.errors) {
    console.log(process.env.NEXT_EXAMPLE_CMS_GCMS_PROJECT_ID);
    console.error(json.errors);
    throw new Error('Failed to fetch API');
  }

  return json.data;
}

// /**
//  * GraphQL query
//  * @param query
//  * @param options
//  * @returns
//  */
// async function fetchAPI(query: string, options: Options = {}) {
//   const { variables, preview = false } = options;

//   const requestHeaders = {
//     'Content-Type': 'application/json',
//     Authorization: `Bearer ${
//       preview
//         ? process.env.GRAPHCMS_DEV_AUTH_TOKEN
//         : process.env.GRAPHCMS_PROD_AUTH_TOKEN
//     }`,
//   };

//   try {
//     const data = await graphcms.request(query, variables, requestHeaders);
//     return data;
//   } catch (error) {
//     console.error(JSON.stringify(error, undefined, 2));
//     process.exit(1);
//   }
// }

export async function getPreviewPostBySlug(slug) {
  const data = await fetchAPI(
    `
    query PostBySlug($slug: String!, $stage: Stage!) {
      post(where: {slug: $slug}, stage: $stage) {
        slug
      }
    }`,
    {
      preview: true,
      variables: {
        stage: 'DRAFT',
        slug,
      },
    }
  );
  return data.post;
}

/**
 * Get All posts
 * @returns
 */
export async function getAllPostsWithSlug() {
  return fetchAPI(`
  {
    posts {
      slug
    }
  }
`);
}

/**
 * Get posts for blog page
 * @param preview
 * @returns
 */
export async function getAllPostsForBlogPage(preview) {
  const data = await fetchAPI(
    `
  {
    posts(orderBy: date_DESC, first: 20) {
      authors {
        name
        picture {
          url(transformation: {image: {resize: {fit: clip, height: 40, width: 40}}})
        }
      }
      coverImage {
        url(transformation: {image: {resize: {fit: clip, height: 190, width: 360}}})
      }
      date
      excerpt
      title
      slug            
    }
  }
`,
    { preview }
  );
  return data.posts;
}

export async function getPostAndMorePosts(slug, preview) {
  const data = await fetchAPI(
    `
    query PostBySlug($slug: String!, $stage: Stage!) {
      post(stage: $stage, where: {slug: $slug}) {
        date
        excerpt
        title
        slug
        content {
          raw
        }
        coverImage {
          url(transformation: {image: {resize: {fit: clip, height: 1000, width: 2000}}})
        }
        ogImage: coverImage {
          url(transformation: {image: {resize: {fit: crop, width: 1200, height: 630}}})
        }
        authors {
          name
          picture {
            url(transformation: {image: {resize: {fit: clip, height: 80, width: 80}}})
          }
        }
      }
      morePosts: posts(orderBy: date_DESC, first: 2, where: {slug_not_in: [$slug]}) {
        title
        slug
        excerpt
        date
      }
    }
  `,
    {
      preview,
      variables: {
        stage: preview ? 'DRAFT' : 'PUBLISHED',
        slug,
      },
    }
  );
  return data;
}
