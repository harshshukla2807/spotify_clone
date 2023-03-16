import { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';
import { useDataLayerValue } from './DataLayer';

const spotify= new SpotifyWebApi();


function App() {
  
  // getting user form return of reducer
  const [{user,token},dispatch] = useDataLayerValue();
  
  useEffect(()=>{
    const hash=getTokenFromUrl()
    window.location.hash='';
    const _token=hash.access_token;
    // console.log(_token)
    
    if(_token)
    {
      dispatch({
        type: "SET_TOKEN",
        token:_token
      })
    }
    
    spotify.setAccessToken(_token)
    
    spotify.getMe().then((user)=>{
      // console.log(user)
      
      // setting up user with dispatch to dataLayer passing it to reducer
      dispatch({
        type: "SET_USER",
        user: user
      })
    })
    
    async function fetchPlaylists(){
      const playlists= await spotify.getUserPlaylists()
      console.log(playlists)
      dispatch({
        type: "SET_PLAYLISTS",
        playlists: playlists
      })
    }
    fetchPlaylists()
  },[])
  
  
  return (
// BEM 
    <div className="app">
     {token? 
      <Player spotify={spotify}/>
      :<Login/>}
    </div>
  );
}

export default App;
