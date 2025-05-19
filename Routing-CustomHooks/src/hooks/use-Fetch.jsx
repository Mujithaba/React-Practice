import React, { useEffect, useState } from "react";

// custom hook created
export default function useFetch(url, option = {}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchDataFromUrl() {
    setLoading(true);

    try {
      const response = await fetch(url, { ...option });
      if (!response.ok) throw new Error(`HTTP error! Status:${response.status}`);

      const result = await response.json();

      if (result) {
        setData(result);
        setError(null);
        setLoading(false);
      }
    } catch (error) {
      console.log(error, "useFetch custom hook url error");
      setLoading(false);
      setError(error);
    }
  }

  useEffect(() => {
    fetchDataFromUrl();
  }, [url]);

  return {
    data,
    error,
    loading,
  };
}
