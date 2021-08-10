import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  useEffect(() => {
    fetch(url)
      .then((response) => {
        setLoading(true);
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
        setError(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
      });
  }, [url]);

  return {
    loading,
    data,
    error
  };
};
