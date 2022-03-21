import { createContext } from 'react';

import useFetch from '../hooks/useFetch';
const NavigationContext = createContext();
NavigationContext.displayName = 'NavigationContext';

const NavigationProvider = (props) => {
  const data = useFetch('http://localhost:8000/navbar');

  return (
    data && (
      <NavigationContext.Provider value={data}>
        {props.children}
      </NavigationContext.Provider>
    )
  );
};

export { NavigationProvider, NavigationContext };
