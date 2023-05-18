import React from "react"


function PlayerSearch({searchPlayer, search}) {
    return (
        <div className="search-background">
            <input onChange= {searchPlayer} className= "search-bar" value={search}/>

        </div>
    )
}

export default PlayerSearch