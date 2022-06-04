# nehno

![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/ajlai24/nehno)
![GitHub branch checks state](https://img.shields.io/github/checks-status/ajlai24/nehno/main)
![GitHub top language](https://img.shields.io/github/languages/top/ajlai24/nehno)

This is an example repository using Next.js, MUI, Typescript, GraphCMS, and Framer Motion that was deployed with [Vercel](https://vercel.com/) [(Documentation)](https://nextjs.org/docs/deployment). Feel free to take a look around!

## Demo
Live: [https://nehno.com/](https://nehno.com/)


## Configuration

### Step 1. Create an account and a project in GraphCMS

First, [create an account in GraphCMS](https://app.graphcms.com).

### Step 2. Create a new GraphCMS project

After creating an account, create a new project from the **Developer Portfolio & Blog** template - be sure to include the example content.

### Step 3. Set up environment variables

Create a `.env.local` file at the root folder (which will be ignored by Git):

Inside your project dashboard, navigate to **Settings > API Access page**.

Then set each variable in `.env.local`:

- `GRAPHCMS_PROJECT_API`: Set it to the API endpoint under **Endpoints**, at the top of the page.
- `GRAPHCMS_PROD_AUTH_TOKEN`: Copy the `NEXT_EXAMPLE_CMS_GCMS_PROD_AUTH_TOKEN` token under **Existing tokens**, at the bottom of the page. This will only query content that is published.
- `GRAPHCMS_DEV_AUTH_TOKEN`: Copy the `NEXT_EXAMPLE_CMS_GCMS_DEV_AUTH_TOKEN` token under **Existing tokens**, at the bottom of the page. This will only query content that is in draft.
- `GRAPHCMS_PREVIEW_SECRET` can be any random string (but avoid spaces), like `MY_SECRET` - this is used for [Preview Mode](https://nextjs.org/docs/advanced-features/preview-mode).

Create a `.env` file at the root folder (which will be ignored by Git as set up in .gitignore). This is for the @graphql-codegen to generate the types

Set this variable in `.env`
- `GRAPHCMS_PROJECT_API`: Set it to the API endpoint under **Endpoints**, at the top of the page.


### Step 4. Run Next.js in development mode

```bash
npm install
npm run codegen
npm run dev
```

Your app should be up and running on [http://localhost:3000](http://localhost:3000)!