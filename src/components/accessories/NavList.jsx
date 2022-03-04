import { useContext, useState } from 'react';
import NavLink from '../accessories/NavLink';

import { List } from '@mui/material';
import { NavigationContext } from '../../hooks/context/useNavigationContext';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { styled } from '@mui/material/styles';
import { Box, IconButton, Popover } from '@mui/material';

import ExpandMore from '@mui/icons-material/ExpandMore';
import ExpandLess from '@mui/icons-material/ExpandLess';

const StyledNavList = styled(List)(({ theme }) => ({
  width: '85vw',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: 'white',
  ariaLabel: 'navigation menu',
}));

function NavList() {
  const [selectedIndex, setSelectedIndex] = useState('Home');
  const { data, allPaths } = useContext(NavigationContext);

  const theme = useTheme();
  const matchesBigScreens = useMediaQuery(theme.breakpoints.up('md'), {
    noSsr: true,
  });

  const handleListItemClick = (index) => {
    setSelectedIndex(index);
  };

  return (
    <StyledNavList
      disablePadding
      dense
      component="ul"
      sx={{
        flexDirection: { md: 'row' },
        alignItems: { sm: 'flex-start', md: 'center' },
        justifyContent: 'flex-end',
        borderTop: {
          xs: '3px solid #2ea3f2',
          md: 'none',
        },
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
              matchesBigScreens
            />
          );
        }

        const mainPath = Object.keys(route)[0];

        if (matchesBigScreens) {
          const sectionsPaths = [
            ...route[mainPath].sectionsWithSameURL,
            ...route[mainPath].sectionsWithDiffURL,
          ];

          const list = (
            <>
              <NavLink
                key={mainPath}
                index={mainPath}
                to={allPaths[mainPath]}
                selected={selectedIndex === mainPath}
                route={mainPath}
                handleListItemClick={handleListItemClick}
                subpath={false}
                main={true}
                matchesBigScreens
              >
                <List sx={{ display: 'flex', flexDirection: 'column' }}>
                  {sectionsPaths.map((path, index) => (
                    <NavLink
                      key={path}
                      index={path}
                      to={allPaths[path]}
                      selected={selectedIndex === path}
                      route={path}
                      handleListItemClick={handleListItemClick}
                      subpath={true}
                      main={false}
                      matchesBigScreens
                    />
                  ))}
                </List>
              </NavLink>
            </>
          );
          return list;
        }

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
    </StyledNavList>
  );
}

export default NavList;
