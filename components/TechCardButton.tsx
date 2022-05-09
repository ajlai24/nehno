import { Avatar, Box, styled, Typography } from '@mui/material';
import CardButton from './CardButton';

interface CardButtonProps {
  header: string;
  subheader: string;
  url: string;
  avatarSrc?: string;
}

const StyledAvatar = styled(Avatar)({
  '.MuiAvatar-img': { objectFit: 'scale-down' },
});

const TechCardButton = (props: CardButtonProps) => {
  const { header, subheader, url, avatarSrc } = props;
  return (
    <CardButton
      variant="outlined"
      component="a"
      href={url}
      target="_blank"
      rel="sponsored noopener"
    >
      <StyledAvatar
        alt={header}
        src={avatarSrc}
        srcSet={avatarSrc}
        variant="square"
      />
      <Box ml={2.5}>
        <Typography variant="body2" fontWeight="bold">
          {header}
        </Typography>
        <Typography variant="body2">{subheader}</Typography>
      </Box>
    </CardButton>
  );
};

export default TechCardButton;
