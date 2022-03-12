import { useEffect, useState, createContext } from 'react';
import { getPathsName, getNavbarLinks } from '../../utils/index';
import getData from '../custom/getData';
const NavigationContext = createContext();
NavigationContext.displayName = 'NavigationContext';

const NavigationProvider = (props) => {
  const data = getData('http://localhost:8000/navbar');
  const [navigationData, setNavigationData] = useState(null);
  useEffect(() => {
    if (data) {
      const allPaths = getPathsName(data);
      const allLinks = getNavbarLinks(data);
      setNavigationData({ data, allPaths, allLinks });
    }
  }, [data]);

  return (
    navigationData && (
      <NavigationContext.Provider value={navigationData}>
        {props.children}
      </NavigationContext.Provider>
    )
  );
};

export { NavigationProvider, NavigationContext };
