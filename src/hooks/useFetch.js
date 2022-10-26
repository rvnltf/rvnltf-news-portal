import { useState, useEffect, useCallback } from "react";
import axios from "axios";

function useFetch(type, query, page) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  const sendQuery = useCallback(async () => {
    try {
      setLoading(true);
      setError(false);
      const res = await axios.get(
        `https://api.thenewsapi.com/v1/news/all?api_token=${process.env.REACT_APP_NEWS_KEY}&${type}=${query}&page=${page}`
      );
      setList((prev) => [...prev, ...res.data.data]);
      setLoading(false);
    } catch (err) {
      setError(err);
    }
  }, [type, query, page]);

  useEffect(() => {
    sendQuery();
  }, [sendQuery]);

  return { loading, error, list };
}

export default useFetch;
