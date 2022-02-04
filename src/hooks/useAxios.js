import { useEffect, useState } from "react";
import axios from "axios";
axios.defaults.baseURL = "https://opentdb.com/";

const useAxios = ({ url }) => {
  // console.log("in useAxios",url);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = () => {
      console.log("in fetchData", url);
      axios
        .get(url)
        .then((res) => {
          setResponse(res.data);
        })
        .catch((err) => {
          setError(err);
        })
        .finally(() => {
          setLoading(false);
        });
    };
    fetchData();
  }, [url]);


  return { response, error, loading };



};

export default useAxios;
