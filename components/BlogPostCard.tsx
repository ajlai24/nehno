import {
  Avatar,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  Skeleton,
  Typography,
} from '@mui/material';
import { Post } from 'interfaces';
import Image from 'next/image';
import Link from 'next/link';

const BlogPostCard = ({
  authors,
  coverImage: { url },
  date,
  excerpt,
  slug,
  title,
}: Post) => {
  const firstAuthor = authors[0];
  const avatarSrc = firstAuthor.picture.url;
  const authorName = firstAuthor.name;
  const href = `/posts/${slug}`;

  return (
    <Link href={href} passHref>
      <Card sx={{ height: '100%' }}>
        <CardActionArea href={href}>
          <CardHeader
            avatar={
              firstAuthor ? (
                <Avatar alt={authorName} src={avatarSrc} />
              ) : (
                <Skeleton
                  animation="wave"
                  variant="circular"
                  width={40}
                  height={40}
                />
              )
            }
            title={title}
            subheader={date}
          />
          <Image
            height={190}
            width={360}
            alt={`Cover Image for ${title}`}
            layout="responsive"
            src={url}
          />
          <CardContent>
            <Typography>{excerpt}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};
export default BlogPostCard;
