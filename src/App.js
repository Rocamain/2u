import { useEffect, useState } from 'react';
import getData from './hooks/custom/getData';
import Home from './pages/Home';
import PlaceHolderComponent from './pages/PlaceHolderComponent';
import Layout from './components/main/Layout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavigationProvider } from './hooks/context/useNavigationContext';
import { getNavbarLinks } from './utils/index';

function App() {
  const [mainPathsArray, setMainPathsArray] = useState(null);
  const [isMounted, setIsMounted] = useState(false);
  const data = getData('http://localhost:8000/navbar');
  useEffect(() => {
    if (!isMounted && data) {
      const formattedPathArray = getNavbarLinks(data);
      setMainPathsArray(formattedPathArray);
    }
    setIsMounted(false);
  }, [data]);

  return (
    mainPathsArray && (
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <NavigationProvider>
                <Layout />
              </NavigationProvider>
            }
          >
            {mainPathsArray.map((routePath, i) =>
              i === 0 ? (
                <Route key={i} index element={<Home />} />
              ) : (
                <Route
                  key={i}
                  path={routePath}
                  element={<PlaceHolderComponent />}
                />
              )
            )}
          </Route>
        </Routes>
      </Router>
    )
  );
}

export default App;
