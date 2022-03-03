// useDb :is hook to get data for Db. url to get the data from as parameter.

import { useEffect, useState } from 'react';

const getData = async (URL) => {
  return fetch(URL).then((response) => response.json());
};

export default function useDb(URL) {
  const [data, setData] = useState(null);

  useEffect(() => {
    getData(URL).then((parsedData) => {
      setData(parsedData);
    });
  }, [URL]);

  return data;
}
