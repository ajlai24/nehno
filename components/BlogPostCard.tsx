import {
  Avatar,
  AvatarGroup,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  Skeleton,
  Typography
} from '@mui/material';
import { format, parseISO } from 'date-fns';
import { Post } from 'interfaces';
import Image from 'next/image';
import Link from 'next/link';

const BlogPostCard = ({
  authors,
  coverImage: { url },
  date: isoDate,
  excerpt,
  slug,
  title,
}: Post) => {
  const href = `/posts/${slug}`;
  const date = parseISO(isoDate);

  return (
    <Link href={href} passHref>
      <Card sx={{ height: '100%' }}>
        <CardActionArea href={href} sx={{ height: '100%' }}>
          <CardHeader
            avatar={
              authors?.length > 0 ? (
                // <Avatar alt={authorName} src={avatarSrc} />
                <AvatarGroup max={2}>
                  {authors.map((author) => (
                    <Avatar
                      key={author.name}
                      alt={author.name}
                      src={author.picture.url}
                    />
                  ))}
                </AvatarGroup>
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
            subheader={format(date, 'PP')}
          />
          <Image
            height={190}
            width={360}
            alt={`Cover Image for ${title}`}
            layout="responsive"
            src={url}
          />
          {excerpt && (
            <CardContent>
              <Typography>{excerpt}</Typography>
            </CardContent>
          )}
        </CardActionArea>
      </Card>
    </Link>
  );
};
export default BlogPostCard;
