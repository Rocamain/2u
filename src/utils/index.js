// returns an array of paths (strings) for the each route to created

exports.getNavbarLinks = (navbarArray) => {
  const allRoutes = navbarArray.reduce((prevRoute, route) => {
    const hasMorePaths = route instanceof Object;

    if (hasMorePaths) {
      const mainPath = Object.keys(route)[0];
      const mainPathLink = underScorePath(mainPath);
      const restLinks = underScorePath(route[mainPath].sectionsWithDiffURL);

      return [...prevRoute, mainPathLink, ...restLinks];
    }
    return [...prevRoute, underScorePath(route)];
  }, []);
  return allRoutes;
};

exports.getPathsName = (navbarArray) => {
  const allPaths = navbarArray.reduce((prevRoute, path) => {
    const hasMorePaths = path instanceof Object;
    if (hasMorePaths) {
      const mainPath = Object.keys(path)[0];
      const mainPathLink = underScorePath(mainPath);

      const sameURLLinks = path[mainPath].sectionsWithSameURL;
      const diffURLLinks = path[mainPath].sectionsWithDiffURL;

      const fetchSameURLLinks = getRestLinks(sameURLLinks, mainPathLink);
      const fetchDiffURLLinks = getRestLinks(diffURLLinks, mainPathLink);

      const sectionLinks = {
        [mainPath]: mainPathLink,
        ...fetchSameURLLinks,
        ...fetchDiffURLLinks,
      };

      return { ...prevRoute, ...sectionLinks };
    }
    const pathLink = underScorePath(path);

    return { ...prevRoute, [path]: pathLink };
  }, {});
  return allPaths;
};

// return blank spaces to "_"
const underScorePath = (pathURL, mainPath) => {
  const putUnderScorePath = (path) => path.replaceAll(' ', '_');
  if (Array.isArray(pathURL)) {
    return pathURL.map((path) => putUnderScorePath(path));
  }
  return mainPath
    ? mainPath + '#' + putUnderScorePath(pathURL)
    : putUnderScorePath(pathURL);
};

const getRestLinks = (restLinks, mainPathLink) =>
  restLinks.reduce((prevLinks, link) => {
    return { ...prevLinks, [link]: underScorePath(link, mainPathLink) };
  }, {});
