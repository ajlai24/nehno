import { Avatar, AvatarGroup, Box, Typography } from '@mui/material';
import { format, parseISO } from 'date-fns';
import { Author, Image } from 'interfaces';
import NextImage from 'next/image';

interface PostHeaderProps {
  title: string;
  coverImage: Image;
  isoDate: string;
  authors: Author[];
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
            <Typography variant="subtitle2">
              {format(date, 'PPP')}
            </Typography>
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
