import { useState } from "react";
import axios from "axios";
import { useAppSnackbar } from "../Components/Basic-Components/snackbar/snackbar";

// const baseURL = import.meta.env.VITE_BACKEND_API_URL;
const baseURL = "http://127.0.0.1:8000";
console.log("Backend URL:", baseURL);

const useApi = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const { showSnackbar } = useAppSnackbar();

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
      showSnackbar(response.data.message, "success");
      return response.data;
    } catch (err) {
      showSnackbar(`${err}`, "error");
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { request, loading, error, data };
};

export default useApi;
