import { useContext, useState, useEffect } from 'react';
import NavLink from '../accessories/NavLink';

import { List } from '@mui/material';
import { NavigationContext } from '../../hooks/context/useNavigationContext';

export default function MenuDrawer(props) {
  const [selectedIndex, setSelectedIndex] = useState('Home');
  const { data, allPaths } = useContext(NavigationContext);

  const handleListItemClick = (index) => {
    setSelectedIndex(index);
  };

  return (
    data && (
      <List
        // disablePadding
        dense
        component="nav"
        aria-label="navigation menu"
        sx={{
          width: '85vw',
          mx: 'auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: 'white',
          borderTop: '3px solid #2ea3f2',
        }}
      >
        {data.map((route, index) => {
          if (typeof route === 'string') {
            return (
              <NavLink
                key={route}
                index={route}
                to={allPaths[route]}
                selected={selectedIndex === route}
                route={route}
                handleListItemClick={handleListItemClick}
                subpath={false}
                main={false}
              />
            );
          }

          const mainPath = Object.keys(route)[0];

          const restOfPaths = [
            mainPath,
            ...route[mainPath].sectionsWithSameURL,
            ...route[mainPath].sectionsWithDiffURL,
          ];
          const restOfPathsLink = restOfPaths.map((path, index) => (
            <NavLink
              key={path}
              index={path}
              to={allPaths[path]}
              selected={selectedIndex === path}
              route={path}
              handleListItemClick={handleListItemClick}
              subpath={index !== 0}
              main={index === 0}
            />
          ));

          return restOfPathsLink;
        })}
      </List>
    )
  );
}
