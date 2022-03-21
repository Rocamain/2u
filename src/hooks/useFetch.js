import { getPathsName, getNavbarLinks } from '../utils/index';

import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    let controller = new AbortController();
    const fetchData = async (url) => {
      try {
        const res = await fetch(url, { signal: controller.signal });
        const data = await res.json();
        const isNavbar = url.includes('navbar');

        isNavbar
          ? setData({
              data,
              allPaths: getPathsName(data),
              allLinks: getNavbarLinks(data),
            })
          : setData(data);
        controller = null;
      } catch (err) {
        console.log('err', err);
      }
    };
    fetchData(url);
    return () => controller?.abort();
  }, [url]);
  console.log(data);
  return data;
};

export default useFetch;
