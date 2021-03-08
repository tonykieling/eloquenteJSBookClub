import React, { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  
  async function fetchUrl() {
    const response = await fetch(url);
    const json = await response.json();
    setData(json);
    setLoading(false);
  }

  useEffect(() => {
    if (!loading) {
      console.table(data);
    } else {
      fetchUrl();
    }
  }, [loading]);

  return [data, loading, setLoading];
}

function FetchData() {
  const [data, loading, setLoading] = useFetch(
    "https://jsonplaceholder.typicode.com/todos"
  );

  return (
    <>
      <button onClick={() => setLoading(true)}>Load Data</button>
      <h1>Data</h1>
      {loading 
      ? (
        "Loading..."
        ) 
      : (
        <ul>
          {data.map(({ id, email, userId, title }) => (
            <li key={`id-${id}`}>
              [User_{id}] - {title}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default FetchData;