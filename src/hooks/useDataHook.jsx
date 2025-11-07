import axios from "axios";
import React, { useEffect, useState } from "react";

export const useDataHook = () => {
  let [data, setData] = useState([]);
  let [loading, setLoadin] = useState(true);
  let [error, setError] = useState(null);

  useEffect(() => {
    axios("/Fetchdata.json")
      .then((myData) => setData(myData))
      .catch((error) => setError(error))
      .finally(() => setLoadin(false));
  }, []);
  return {
    data,
    loading,
    error,
  };
};
