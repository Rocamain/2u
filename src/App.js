import { useContext } from 'react';
import PageComponent from './pages/PageComponent';

import Layout from './components/main/Layout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavigationContext } from './context/useNavigationContext';

function App() {
  const { allLinks } = useContext(NavigationContext);

  return (
    allLinks && (
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            {allLinks.map((routePath, i) => {
              return i === 0 ? (
                <Route
                  key={i}
                  index
                  element={<PageComponent key={i} path={routePath} />}
                />
              ) : (
                <Route
                  key={i}
                  path={routePath}
                  element={<PageComponent key={i} path={routePath} />}
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
