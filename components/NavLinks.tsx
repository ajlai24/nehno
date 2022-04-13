import { Tab, Tabs } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Routes = {
  HOME: '/',
  TECH: '/tech',
  ABOUT: '/about',
};

const NavLinks = () => {
  // const [value, setValue] = useState(Routes.HOME);
  const router = useRouter();

  // const handleChange = (event: React.SyntheticEvent, newValue: string) => {
  //   setValue(newValue);
  //   router.push(newValue);
  // };

  return (
    <Tabs value={Object.values(Routes).indexOf(router.pathname)} aria-label="nav links">
      <Link href="/" passHref>
        <Tab value={Routes.HOME} label="Home" />
      </Link>
      <Link href="/tech" passHref>
        <Tab value={Routes.TECH} label="Tech" />
      </Link>
      <Link href="/about" passHref>
        <Tab value={Routes.ABOUT} label="About" />
      </Link>
    </Tabs>
    // <Tabs value={value} onChange={handleChange} aria-label="nav links">
    //   <Tab label="Home" value={Routes.HOME} />
    //   <Tab label="About" value={Routes.ABOUT} />
    // </Tabs>
  );
};

export default NavLinks;

