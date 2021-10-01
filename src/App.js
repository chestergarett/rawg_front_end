import {useState, useEffect} from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import GameIndex from './components/GameIndex/GameIndex';

function App() {
  
  const [games, setGames] = useState([])
  const [genres, setGenres] = useState([])
  const [platforms, setPlatforms] = useState([])
  const [tags, setTags] = useState([])

  useEffect(
    () => {
        axios.get('https://chestergarett-rawg.herokuapp.com/api/list-games')
        .then(res => {
          setGames(res.data.data.results)
          console.log(res.data.data.results)
        })
        .catch(err => console.err)
    }, []
  )

  useEffect(
    () => {
        axios.get('https://chestergarett-rawg.herokuapp.com/api/games-genre')
        .then(res => {
          setGenres(res.data.data.results)
        })
        .catch(err => console.err)
    }, []
  )

  useEffect(
    () => {
        axios.get('https://chestergarett-rawg.herokuapp.com/api/games-platforms')
        .then(res => {
          setPlatforms(res.data.data.results)
          console.log(res.data.data.results)
        })
        .catch(err => console.err)
    }, []
  )

  useEffect(
    () => {
        axios.get('https://chestergarett-rawg.herokuapp.com/api/games-tags')
        .then(res => {
          setTags(res.data.data.results)
          console.log(res.data.data.results)
        })
        .catch(err => console.err)
    }, []
  )

  return (
    <div className="main-layout">
      <div className="main-header">
        <Header/>      
      </div>
      <div className="main-body">
        <div className="main-sidebar">
          <Sidebar genres={genres} platforms={platforms} tags={tags}/>
        </div>
        <div className="main-content">
          <GameIndex games={games}/>
        </div>
      </div>
    </div>
  );
}

export default App;
