import { useState } from "react";
import axios from "axios";

const baseURL = "http://127.0.0.1:8000/";

const useApi = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const request = async (
    method,
    endpoint,
    {
      params = {},
      data = {},
      headers = {},
      contentType = "application/json",
    } = {}
  ) => {
    setLoading(true);
    setError(null);
    setData(null);

    try {
      const response = await axios({
        method,
        url: `${baseURL}${endpoint}`,
        params,
        data,
        headers: {
          "Content-Type": contentType,
          ...headers,
        },
        withCredentials: true,
      });
      setData(response.data);
      return response.data;
    } catch (err) {
      const errorMessage =
        err.response?.data?.message || err.message || "An error occurred.";
      setError(errorMessage); // Set the error state
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { request, loading, error, data };
};

export default useApi;
