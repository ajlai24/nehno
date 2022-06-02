import { Avatar, AvatarGroup, Box, Typography } from '@mui/material';
import { format, parseISO } from 'date-fns';
import { GetPostAndMorePostsQuery } from 'lib/generated/graphql';
import NextImage from 'next/image';

interface PostHeaderProps {
  title: GetPostAndMorePostsQuery['post']['title'];
  coverImage: GetPostAndMorePostsQuery['post']['coverImage'];
  isoDate: GetPostAndMorePostsQuery['post']['date'];
  authors: GetPostAndMorePostsQuery['post']['authors'];
}

const PostHeader = (props: PostHeaderProps) => {
  const { title, coverImage, isoDate, authors } = props;

  const date = parseISO(isoDate);
  const lf = new Intl.ListFormat('en');
  const names = authors.map((author) => author.name);

  return (
    <Box>
      <Typography variant="h2">{title}</Typography>
      <Box my={4} display="flex" alignItems="center">
        <Box display="flex" alignItems="center">
          <AvatarGroup max={3}>
            {authors.map((author) => (
              <Avatar
                key={author.name}
                alt={author.name}
                src={author.picture.url}
                sx={{ width: 56, height: 56 }}
              />
            ))}
          </AvatarGroup>
          <Box sx={{ ml: 1 }}>
            <Typography variant="subtitle1">{lf.format(names)}</Typography>
            <Typography variant="subtitle2">{format(date, 'PPP')}</Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={{ boxShadow: 3 }}>
        <NextImage
          width={2000}
          height={1000}
          alt={`Cover Image for ${title}`}
          src={coverImage.url}
          layout="responsive"
        />
      </Box>
    </Box>
  );
};

export default PostHeader;
