import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Tours from './Tours';
const url = 'https://course-api.com/react-tours-project';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  const removeTour = (id) => {
    const newData = data.filter((tour) => tour.id !== id);
    setData(newData);
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
      setIsLoading(false);
      console.log(data);
    } catch (error) {
      setIsLoading(false);
      return error;
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div style={{ marginTop: '50px' }}>
        <Loading />
      </div>
    );
  }
  if (data.length === 0) {
    return (
      <main className='title'>
        <h2>No Tours Available</h2>
        <button className='btn' onClick={() => fetchData()}>
          Refersh
        </button>
      </main>
    );
  }
  return <Tours tours={data} removeTour={removeTour} />;
}

export default App;
