import { Link as MuiLink, styled } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';

// const lineStyle = {
//   //   backface-visibility: hidden;
//   border: `1px solid green`,
//   // bottom: 0,
//   content: "''",
//   display: 'block',
//   //   margin: 0 auto;
//   //   position: relative;
//   //   transition: all 280ms ease-in-out;
//   width: 0,
// };

const StyledLink = styled(MuiLink)(({ theme }) => ({
  // color: #fff;
  // cursor: pointer;
  // // display: block;
  // font-size:16px;
  // font-weight: 400;
  // line-height: 45px;
  // margin: 0 0 2em;
  // max-width: 160px; 
  // position: relative;
  // text-decoration: none;
  // text-transform: uppercase;
  // width: 100%; 
  transition: theme.transitions.create(['color'], { duration: theme.transitions.duration.complex }),
  ':hover': {
    color: theme.palette.primary.dark,
    // ':before': {
    //   bottom: 'auto',
    //   top: 0,
    //   width: '70 %',
    // },
    // ':after': {
    //   width: '70 %',
    // },
  },
  // ':before': lineStyle,
  // ':after': lineStyle,

  // .btn-2:after,
  // .btn-2:before {
  //   backface-visibility: hidden;
  //   border: 1px solid rgba(#fff, 0);
  //   bottom: 0px;
  //   content: " ";
  //   display: block;
  //   margin: 0 auto;
  //   position: relative;
  //   transition: all 280ms ease-in-out;
  //   width: 0;
  // }

  // .btn-2:hover:after,
  // .btn-2:hover:before {
  //   backface-visibility: hidden;
  //   border-color: #fff;
  //   transition: width 350ms ease-in-out;
  //   width: 70%;
  // }

  // .btn-2:hover:before {
  //   bottom: auto;
  //   top: 0;
  //   width: 70%;
  // }
}))

interface NavLinkProps {
  name: string;
  path: string;
  label: string;
}

const NavLink = ({ name, path, label }: NavLinkProps) => {
  const router = useRouter();

  return (
    <Link href={path} passHref key={name}>
      <StyledLink
        underline="none"
        fontWeight="fontWeightLight"
        color={router.pathname === path ? "primary" : "inherit"}
        mr={4}
      >
        {label}
      </StyledLink>
    </Link>
  );
};

export default NavLink;

