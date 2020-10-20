import React, {useState, useEffect} from 'react';
import './App.css';

import Newsarticles from './Components/Newsarticles'

function App() {
  const [data, setData] = useState([])

  function handleFetchArticles () {
    fetch('https://mock-data-api.firebaseio.com/news/articles.json')
    .then(res => res.json())
    .then(result => {
      console.log(result);
      setData(result)
    })
  }

  useEffect(() => {
    handleFetchArticles()
  }, [])

  return (
    <div className="container-fluid bg-dark">
      <div className="container">
        <h1 className="text-light text-center">News Articles</h1>
      <Newsarticles articles={data}/>
      </div>
      
    </div>
  );
}

export default App;
