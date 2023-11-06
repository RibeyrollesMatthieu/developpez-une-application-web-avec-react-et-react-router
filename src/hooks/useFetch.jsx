import { useEffect, useState } from 'react';

export const useFetch = (url, options) => {
  const [data, setData] = useState(null);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsFetching(true);

    fetch(url, options)
      .then((res) => res.json())
      .then((_data) => setData(_data))
      .catch((error) => setError(error))
      .finally(() => setIsFetching(false));
  }, [url, options]);

  return {
    data,
    isFetching,
    error,
  };
};
