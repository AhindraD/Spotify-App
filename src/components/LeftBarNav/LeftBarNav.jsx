import React from 'react';
import "./LeftBarNav.css";
import spotify from "./spotify.png";
import profile from "./profile.svg"
import mic from "./mic.svg"
import music from "./music.svg"
import recents from "./recents.svg"
import playlist from "./playlist.svg"
import github from "./github.svg"
import { useNavigate } from 'react-router-dom';

import { useContext, useState } from 'react';
import userContext from "../../Context/UserContext";

export default function Sidebar() {
  const { userData, token } = useContext(userContext);
  const goTo = useNavigate();

  const navMap = {
    "prof": "/home",
    "artst": "/home/artists",
    "trac": "/home/tracks",
    "rcnt": "/home/activity",
    "plist": "/home/playlists",
  }

  let [prof, setProf] = useState("");
  let [artst, setArtst] = useState("");
  let [trac, setTrac] = useState("");
  let [rcnt, setRcnt] = useState("");
  let [plist, setPlist] = useState("");

  function handleClick(arg) {
    goTo(navMap[arg]);
    setProf("");
    setArtst("");
    setTrac("");
    setRcnt("");
    setPlist("");

    if (arg === "prof") {
      setProf("active");
    }
    else if (arg === "artst") {
      setArtst("active");
    }
    else if (arg === "trac") {
      setTrac("active");
    }
    else if (arg === "rcnt") {
      setRcnt("active");
    }
    else if (arg === "plist") {
      setPlist("active");
    }
  }

  return (
    <main className="bar-cont">
      <div className="logo" onClick={() => handleClick("prof")}>
        <img src={spotify} alt="spotify-logo" />
      </div>

      <section className="navs">

        <div className={`nav ${prof}`} onClick={() => handleClick("prof")}>
          <img src={profile} alt="profile-logo" />
          <p>Profile</p>
        </div>

        <div className={`nav ${artst}`} onClick={() => handleClick("artst")}>
          <img src={mic} alt="artists-logo" />
          <p>Top Artists</p>
        </div>

        <div className={`nav ${trac}`} onClick={() => handleClick("trac")}>
          <img src={music} alt="tracks-logo" />
          <p>Top Tracks</p>
        </div>

        <div className={`nav ${rcnt}`} onClick={() => handleClick("rcnt")}>
          <img src={recents} alt="recents-logo" />
          <p>Recents</p>
        </div>

        <div className={`nav ${plist}`} onClick={() => handleClick("plist")}>
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
