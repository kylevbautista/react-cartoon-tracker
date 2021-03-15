import React from 'react';
import '../cardComponents/Cards.css';
import Countdown from '../Countdown.js';
import RemoveFromWatch from './RemovefromWatch.js';

function WatchListShow(props){
    if(props.list===true){
        console.log("props.list:", props.list);
        return(
            <h1>WatchList component</h1>
        );
    }


    const monthNames = ["January", "February", "March", "April", "May", "June",
                        "July", "August", "September", "October", "November", "December"];
    const dayNames = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const getMonth = (iso)=>{
        let date = new Date(iso);
        let month = monthNames[date.getMonth()];
        let dayName = dayNames[date.getDay()];
        let day = date.getDate();
        let year = date.getFullYear();
        const info = [];
        info.push(month);
        info.push(day);
        info.push(year);
        info.push(dayName);
        return info;
    }
    
    let anime = props.data;
    return(
        <div key={anime.mal_id} className="card border-dark mb-3" style={{width: "20rem",}}>
            <img className="card-img-top cbimage" src={anime.image_url}  alt=""></img>
            <div className="card-body">
                <h5 className="card-title cbtext">{anime.title}</h5>

                <input type="hidden" id={anime.title} value="{{anime[i]['iso']}}"></input>
                <img style={{display: "none",}} src="" alt =""></img>
                {/* <small className = "cbtext" id={anime.title}>Live Countdown Component</small> */}
                <Countdown startDate = {anime.aired.from} continuing = {anime.continuing} episodes={anime.episodes}></Countdown>
                <br></br>
                <small className = "cbtext">Starts: {getMonth(anime.aired.from)[3]} {getMonth(anime.aired.from)[0]}, {getMonth(anime.aired.from)[1]}, {getMonth(anime.aired.from)[2]}</small>
                <br></br>
                <small className = "cbtext">Score: {anime.score}</small>
                <br></br>
                <small className = "cbtext">Members: {anime.members}</small>
                <br></br>
                <small className = "cbtext">Genre:    
                {anime.genres.map((genre)=>{
                    return(
                    <p className="genres" key={genre.name}> {genre.name}, </p>
                    );
                })}
                </small>
                <p className="card-text cbtext">{anime.synopsis}</p>
                <a href="#home" className="btn btn-primary"
                style= {{
                    display:"inline",
                    position: "absolute",
                    left: "10px",
                    bottom: "10px",
                    }} >More Info</a>
                {/* <a href="#home" className="btn btn-primary"
                style={{
                    display:"inline",
                    position: "absolute",
                    right: "10px",
                    bottom: "10px",
                    }}>MAL</a> */}
                <div className="removeinfo" style={{
                    display:"inline",
                    position: "absolute",
                    right: "10px",
                    bottom: "10px",
                    }}>
                <RemoveFromWatch postId={props.postId}/>
                </div>
            </div>
        </div> 
        ); 
}
export default WatchListShow;