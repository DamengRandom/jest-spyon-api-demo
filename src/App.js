import React, {useState, useEffect} from 'react';
import './App.css';
import fetch from 'node-fetch';

const fetchData = () => fetch('https://jsonplaceholder.typicode.com/users');

export const fetchDataWrapper = async (setData) => {
  try {
    const res = await fetchData();
    const data = await res.json();
    console.log(data);
    setData(data);
    return data;
  } catch(e) {
    console.log("Error on: ", e);
    return e;
  }
}

function App() {
  const [theData, setData] = useState([]);
  useEffect(() => {
    fetchDataWrapper(setData);
  }, []);

  console.log('now: ', theData);
  return (
    <div className="App">
      <p>Test on Mock API !!! by using jest mock</p>
      {theData? theData.map(data => <p key={data.name}>{data.name}</p>) : <p>Not yet..</p>}
    </div>
  );
}

export default App;
