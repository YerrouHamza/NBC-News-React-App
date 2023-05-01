import Home from './pages/home/home'
import { Dna } from  'react-loader-spinner'

import { useState, useEffect } from 'react';
import axios from 'axios';


function App() {

 const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const loadAsyncStuff = async () => {
      try {
        const response = await fetch(`https://newsapi.org/v2/everything?q=tesla&from=2023-04-01&sortBy=publishedAt&apiKey=afe532d07ba148329362cacae6343b5e`);
        const data = await response.json();
        setData(data.articles);
      } catch (error) {
        setError(error);
      } finally {
        setTimeout(() => {
          setLoaded(true);
        }, 2000);
      }
    };

    loadAsyncStuff();
  }, []);

console.log('news', data)
  
  return (
    <>
      {
      loaded ? <Home /> :  <div className="loader-icon">
        <Dna
          width="80"
          height="80"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
      </div>
      
      }      
    </>
  )
}

export default App
