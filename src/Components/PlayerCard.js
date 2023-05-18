import React, {useState} from "react"

function PlayerCard({player}) {

    const [toggle, setToggle] = useState(true)
    const [click, setClick] = useState(true)

    function togglePlayer() {
        setToggle(toggle => !toggle)
    }

    function clickLink() {
        setClick(click)
    }

    return (
        <div className="player-item">
            <h2 className="player-name">{player.name}</h2>
            {toggle ? <img onMouseEnter={togglePlayer} src = {player.image} alt = {player.name}/> 
            :
            <div onMouseLeave={togglePlayer} className="card-back">
            { player.position ? 
            <>
            <h3>Position: {player.position}</h3>
            <h3>Rush Yards: {player.rushyards}</h3>
            <h3>Receptions: {player.receptions}</h3>
            <h3>Receiving Yards: {player.receivingyards}</h3>
            <h3>2022 Finish: {player.finish}</h3>
            <h3><a className="link" href= {player.expertanalysis} target="_blank">See what the experts say: </a></h3>
            </> : <h3>Reason For Going #1: {player.reason}</h3>}
            </div>
    }    
        </div>)
}


export default PlayerCard
