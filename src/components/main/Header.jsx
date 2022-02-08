import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, IconButton } from '@mui/material';

// styles
const NavBar = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  height: '4em',
  alignItems: 'center',
  margin: '0 auto',
}));

export default function Header() {
  return (
    <NavBar component="nav">
      <img
        src={require('./logo.png')}
        alt="clickable company logo "
        style={{ width: '110px' }}
      />
      <IconButton aria-label="menu">
        <MenuIcon sx={{ fontSize: '1.6rem' }} />
      </IconButton>
    </NavBar>
  );
}
