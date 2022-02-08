import { useState, useEffect } from 'react';

// useDb :is hook to get data for Db. url to get the data from as parameter.

export default function useDb(URL) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(URL)
      .then((data) => {
        const jsonData = data.json();
        return jsonData;
      })
      .then((parsedData) => {
        setData(parsedData);
      });
  }, [URL]);

  return data;
}
