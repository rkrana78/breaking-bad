
import { useEffect, useState } from 'react';
import './App.css';
import Character from './components/Character/Character';
import Header from './components/Header/Header';
import Search from './components/Header/Search';

const  App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('')

  useEffect(() => {
    const url = `https://www.breakingbadapi.com/api/characters?name=${query}`
    fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setItems(data)
      setIsLoading(false)
    })
  }, [query])
  return (
    <div className="container">
      <Header/>
      <Search getQuery = {(q) => setQuery(q)}/>
      <Character isLoading={isLoading} items={items}/>
    </div>
  );
}

export default App;
