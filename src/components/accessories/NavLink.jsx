import { ListItemButton, ListItemText, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function NavLink(props) {
  const { route, to, selected, handleListItemClick, index, subpath, main } =
    props;

  return (
    <ListItemButton
      dense
      selected={selected}
      onClick={() => handleListItemClick(index)}
      sx={{
        marginLeft: subpath ? '20px' : 0,
        width: '90%',
        display: 'block',
        backgroundColor: main ? '#00000008' : undefined,
      }}
    >
      <Link style={{ textDecoration: 'none' }} to={to === 'Home' ? '/' : to}>
        <ListItemText
          primary={<Typography variant="navbarLinks">{route}</Typography>}
          variant="navbarLinks"
        />
      </Link>
    </ListItemButton>
  );
}

export default NavLink;
