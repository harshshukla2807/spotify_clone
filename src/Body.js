import React from "react";
import "./Body.css";
import { useDataLayerValue } from "./DataLayer";
import Header from "./Header";
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SongRow from "./SongRow";


function Body({ spotify }) {
  const [{discover_weekly},dispatch]=useDataLayerValue();
  // console.log(di)
  return (
    <div className="body">
      <Header spotify={spotify} />

      <div className="body__info">
        <img
          src={discover_weekly?.images[0].url}
          alt=""
        />
        <div className="body__infoText">
          <strong>Playlist</strong>
          <h2>{discover_weekly?.name}</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      
      </div>
      
      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilledIcon className="body__shuffle" />
          <FavoriteIcon fontSize="large"/>        
          <MoreHorizIcon/>
        </div>  
        
        {
          discover_weekly?.tracks.items.map((item)=>(
           <SongRow key={item.track.id} track={item.track}/>
          ))
          }
        </div>
      </div>
   
  );
}

export default Body;
