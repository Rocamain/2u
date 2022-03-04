import { useContext, useState } from 'react';
import NavLink from '../accessories/NavLink';
import NavList from '../accessories/NavList';
import { List } from '@mui/material';
import { NavigationContext } from '../../hooks/context/useNavigationContext';

export default function MenuDrawer(props) {
  const [selectedIndex, setSelectedIndex] = useState('Home');
  const { data, allPaths } = useContext(NavigationContext);

  const handleListItemClick = (index) => {
    setSelectedIndex(index);
  };

  return data && <NavList />;
}
