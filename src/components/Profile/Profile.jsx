import React from 'react'
import "./Profile.css"
import avatar from "./avatar.svg"
import { useContext, useState } from 'react';
import userContext from "../../Context/UserContext";
import { useNavigate } from 'react-router-dom';

export default function Profile() {
    const navigate = useNavigate();
    const { userData, token, playlists, setToken, setUserData, setPlaylists, setArtists, setTracks, setRecent } = useContext(userContext);

    function logout() {
        setToken(null);
        setUserData(null);
        setArtists(null);
        setTracks(null);
        setPlaylists(null);
        setRecent(null);
        navigate("/");
    }


    return (
        <>
            {
                userData === null ? "" :
                    <div className='profile-cont'>
                        <div className="profile-top">
                            <div className="avatar">
                                <img src={userData.images.length > 0 ? userData.images[0].url : avatar} alt="" />
                            </div>
                            <p className="name">{userData.display_name}</p>
                            <div className="stats">
                                <section className='stat'>
                                    <p className="count">{userData.followers.total}</p>
                                    <p className="type">Followers</p>
                                </section>

                                <section className='stat'>
                                    <p className="count">{userData.followers.total}</p>
                                    <p className="type">Following</p>
                                </section>

                                <section className='stat'>
                                    <p className="count">{playlists.length}</p>
                                    <p className="type">Playlists</p>
                                </section>
                            </div>

                            <button className='logout' onClick={() => logout()}>Logout</button>
                        </div>


                        <div className="profile-bottom">


                        </div>
                    </div>
            }
        </>
    )
}
