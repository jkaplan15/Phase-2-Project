import React from "react"
import PlayerCard from "./PlayerCard"


function PlayerList({players}) {
    return (
        <div className="background">
            
            <h1 className="title">Who Should Go #1 Overall In Your 2023 Fantasy Football Draft? </h1>
             <div className="flex-container">
            {players.map((player) => {
                return <PlayerCard key={player.name} player={player}/>
            })}
        </div>
        </div>)
        
}

export default PlayerList