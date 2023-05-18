import './App.css';
import React, {useEffect, useState} from "react"
import PlayerList from './PlayerList'
import PlayerSearch from "./PlayerSearch"
import PlayerForm from "./PlayerForm"
import Header from "./Header"
import {Route, Switch} from "react-router-dom"
import NavBar from "./NavBar"

function App() {

  const [players, setPlayers] = useState([])
  const [search, setSearch] = useState("")
  const [formData, setNewPlayer] = useState({
    name: "",
    image: "",
    reason: ""
  })

  function addPlayer(e) {
    e.preventDefault()
    fetch("http://localhost:3001/players", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(response=> response.json())
    .then(newPlayer=> setPlayers([...players, newPlayer]))
  }

  function playerDetails(e) {
    setNewPlayer({...formData, [e.target.name]: e.target.value})
  }

  function searchPlayer(e) {
    setSearch(e.target.value)
  }

  const filterPlayer = players.filter(player => {
    if (search==="") {
      return true
    }
    return player.name.toLowerCase().includes(search.toLowerCase())
  })
  
  useEffect(() => {
    fetch("http://localhost:3001/players")
    .then(response=> response.json())
    .then(data => setPlayers(data))
  }, [])

  return (
    <div className="App">
      <div className='header'>
        <NavBar />
        <Header />
      </div>
      <Switch>
        <Route path="/search">
        <PlayerSearch searchPlayer={searchPlayer} search={search}/>
        <PlayerList players={filterPlayer} />
        </Route>
        <Route path="/add_player">
        <PlayerForm addPlayer={addPlayer} playerDetails={playerDetails}/>
        </Route>
        <Route exact path="/">
        <PlayerList players={players} />
        </Route>
      </Switch>
      <video id="background-video" autoPlay loop muted><source src="https://i.gifer.com/DuXi.mp4" type="video/mp4"/></video>
  
    </div>
  );
}

export default App;



