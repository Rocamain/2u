import { useQuery } from 'react-query';

const getData = async (URL) => {
  const data = await fetch(URL)
    .then((data) => {
      const jsonData = data.json();
      return jsonData;
    })
    .then((parsedData) => {
      return parsedData;
    });

  return data;
};

export default function useDb(URL) {
  return useQuery(
    'posts',
    async () => {
      const data = await fetch(URL)
        .then((data) => {
          const jsonData = data.json();
          return jsonData;
        })
        .then((parsedData) => {
          return parsedData;
        });
      return data;
    },
    {
      // initialData: initialTodos,
      staleTime: 2000,
    }
  );

  // return useQuery(['getData', URL], getData(URL));
}
