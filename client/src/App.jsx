import React, { useEffect, useState } from "react";
import api from "./api/axios";

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    api.get("/test").then((res) => {
      setData(res.data.message);
    });
  }, []);

  return <h1>{data}</h1>;
}

export default App;
