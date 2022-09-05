import { CLIENT_ID, REDIRECT_URI, AUTH_ENDPOINT, RESPONSE_TYPE, SCOPE } from './spotify-config';
import { useEffect, useState } from "react";
import axios from "axios";
import HomePage from './components/HomePage';
import { Route, Routes, useNavigate } from "react-router-dom";
import Validate from './components/Validate';

import userContext from "./Context/UserContext";
// {AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}
function App() {
  const [searchKey, setSearchKey] = useState("");
  const [userData, setUserData] = useState(null);
  const [token, setToken] = useState("");

  const navigate = useNavigate();

  //!get user data from spotifyhttps://api.spotify.com/v1/browse/featured-playlists
  // https://api.spotify.com/v1/me
  // https://api.spotify.com/v1/me/playlists
  // https://api.spotify.com/v1/me/top/artists  !! no data
  // https://api.spotify.com/v1/me/top/tracks  !!no data
  // https://api.spotify.com/v1/browse/featured-playlists

  //href = {`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`}
  // const user_account = async (token) => {
  //   console.log(token);
  //   const user = await axios
  //     .get("https://api.spotify.com/v1/me", {
  //       headers: {
  //         'Authorization': `Bearer ${token}`,
  //       },
  //     })
  //     .then((response) => {
  //       // Return the full details of the user.
  //       //console.log(response);

  //       //setUserData(() => response.slice);
  //       //console.log(userData);
  //       return response;
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  //   console.log(user);
  //   return user;
  // };

  function goToProfile() {
    //setTimeout(() => {
    navigate("/validate");
    // }, 3000)
  }

  return (
    <userContext.Provider value={{ userData, setUserData, token, setToken }}>
      <Routes>
        <Route path="/" element={
          <div className='login-cont'>
            <p className="tittle">Spotify Profile</p>
            <a className="login-bttn" href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`} onClick={() => { goToProfile() }}>Log in to Spotify</a>
          </div>
        } />
        <Route path="/validate" element={<Validate />} />

        <Route path='/profile' element={<HomePage />} />
        <Route path='/top-artists' element={<HomePage />} />
        <Route path='/top-tracks' element={<HomePage />} />
        <Route path='/recent-activity' element={<HomePage />} />
        <Route path='/playlists' element={<HomePage />} />
      </Routes>
    </userContext.Provider>
  );
}

export default App;