import React from 'react'
import "./Profile.css"
import avatar from "./avatar.svg"
import { useContext, useState } from 'react';
import userContext from "../../Context/UserContext";

export default function Profile() {
    const { userData, token, playlists, setPlaylists } = useContext(userContext);



    
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

                            <button className='logout'>Logout</button>
                        </div>


                        <div className="profile-bottom"></div>
                    </div>
            }
        </>
    )
}
