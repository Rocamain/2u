import { useContext, useState } from 'react';
import NavLink from '../accessories/NavLink';
import PopoverLink from '../accessories/PopoverLink';
import { List } from '@mui/material';
import { NavigationContext } from '../../hooks/context/useNavigationContext';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { styled } from '@mui/material/styles';

const StyledNavList = styled(List)(({ theme }) => ({
  width: '85vw',
  margin: '0 auto',

  ariaLabel: 'navigation menu',
  [theme.breakpoints.up('md')]: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: 'auto',
  },
}));

function NavList(props) {
  const { onClose } = props;
  const [selectedIndex, setSelectedIndex] = useState('Home');
  const { data, allPaths } = useContext(NavigationContext);
  const theme = useTheme();

  const matchesBigScreens = useMediaQuery(theme.breakpoints.up('md'), {
    noSsr: true,
  });

  const handleListItemClick = (index) => {
    if (onClose) {
      onClose();
    }
    setSelectedIndex(index);
  };

  return (
    <StyledNavList
      disablePadding
      dense
      component="ul"
      sx={{
        alignItems: { sm: 'flex-start', md: 'center' },
        justifyContent: 'flex-end',
        borderTop: {
          xs: '3px solid #2ea3f2',
          md: 'none',
        },
      }}
    >
      {data.map((route) => {
        if (typeof route === 'string') {
          return (
            <NavLink
              key={allPaths[route]}
              to={allPaths[route]}
              selected={selectedIndex === route}
              route={route}
              handleListItemClick={handleListItemClick}
              subpath={false}
              main={false}
              matchesBigScreens={matchesBigScreens}
            />
          );
        }

        const mainPath = Object.keys(route)[0];

        if (matchesBigScreens) {
          const sectionsPaths = [
            ...route[mainPath].sectionsWithSameURL,
            ...route[mainPath].sectionsWithDiffURL,
          ];

          return (
            <PopoverLink
              key={allPaths[mainPath]}
              to={allPaths[mainPath]}
              mainPath={mainPath}
              sectionsPaths={sectionsPaths}
              handleListItemClick={handleListItemClick}
              allPaths={allPaths}
              selectedIndex={selectedIndex}
              matchesBigScreens={matchesBigScreens}
            />
          );
        }

        const restOfPaths = [
          mainPath,
          ...route[mainPath].sectionsWithSameURL,
          ...route[mainPath].sectionsWithDiffURL,
        ];
        const restOfPathsLink = restOfPaths.map((path, index) => {
          return (
            <NavLink
              key={allPaths[path]}
              to={allPaths[path]}
              selected={selectedIndex === path}
              route={path}
              handleListItemClick={handleListItemClick}
              subpath={index !== 0}
              main={index === 0}
              matchesBigScreens={matchesBigScreens}
            />
          );
        });

        return restOfPathsLink;
      })}
    </StyledNavList>
  );
}

export default NavList;
