import { useContext } from 'react';
import Home from './pages/Home';

import Layout from './components/main/Layout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  NavigationProvider,
  NavigationContext,
} from './hooks/context/useNavigationContext';

function App() {
  const { allLinks } = useContext(NavigationContext);

  return (
    allLinks && (
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
            {allLinks.map((routePath, i) => {
              return i === 0 ? (
                <Route key={i} index element={<Home path={routePath} />} />
              ) : (
                <Route
                  key={i}
                  path={routePath}
                  element={<Home path="About_us" />}
                />
              );
            })}
          </Route>
        </Routes>
      </Router>
    )
  );
}

export default App;
