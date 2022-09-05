import React from 'react';
import "./LeftBarNav.css";
import spotify from "./spotify.png";
import profile from "./profile.svg"
import mic from "./mic.svg"
import music from "./music.svg"
import recents from "./recents.svg"
import playlist from "./playlist.svg"
import github from "./github.svg"
import { Link, useNavigate } from 'react-router-dom';

import { useContext } from 'react';
import userContext from "../../Context/UserContext";

export default function Sidebar() {
  const { userData, token } = useContext(userContext);

  return (
    <main className="bar-cont">
      <div className="logo">
        <img src={spotify} alt="spotify-logo" />
      </div>

      <section className="navs">

        <div className="nav prof">
          <img src={profile} alt="profile-logo" />
          <p>Profile</p>
        </div>

        <div className="nav art">
          <img src={mic} alt="artists-logo" />
          <p>Top Artists</p>
        </div>

        <div className="nav trac">
          <img src={music} alt="tracks-logo" />
          <p>Top Tracks</p>
        </div>

        <div className="nav rect">
          <img src={recents} alt="recents-logo" />
          <p>Recents</p>
        </div>

        <div className="nav plist">
          <img src={playlist} alt="playlists-logo" />
          <p>Playlists</p>
        </div>

      </section>


      <div className="github">
        <a href="https://github.com/AhindraD">
          <img src={github} alt="github-logo" />
        </a>
      </div>
    </main>
  )
}
