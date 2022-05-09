import { Paper, styled } from '@mui/material';

const CardButton = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2.5),
  display: 'flex',
  height: '100%',
  textDecoration: 'none',
  ':hover': {
    boxShadow: '0px 4px 20px rgb(170 180 190 / 30%)',
  },
})) as typeof Paper;

export default CardButton;

// interface CardButtonProps {
//   header: string;
//   subheader: string;
//   url: string;
//   avatarSrc?: string;
// }

// const StyledAvatar = styled(Avatar)({
//   '.MuiAvatar-img': { objectFit: 'scale-down' },
// });

// const CardButton = (props: CardButtonProps) => {
//   const { header, subheader, url, avatarSrc } = props;
//   return (
//     <StyledPaper
//       variant="outlined"
//       component="a"
//       href={url}
//       target="_blank"
//       rel="sponsored noopener"
//     >
//       <StyledAvatar
//         alt={header}
//         src={avatarSrc}
//         srcSet={avatarSrc}
//         variant="square"
//       />
//       <Box ml={2.5}>
//         <Typography variant="body2" fontWeight="bold">
//           {header}
//         </Typography>
//         <Typography variant="body2">{subheader}</Typography>
//       </Box>
//     </StyledPaper>
//   );
// };

// export default CardButton;
