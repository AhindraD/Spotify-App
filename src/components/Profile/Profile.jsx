import React from 'react'
import { useContext, useState } from 'react';
import userContext from "../../Context/UserContext";

export default function Profile() {
    const { userData, token } = useContext(userContext);
    return (
        <div className='profile-cont'>
            <div className="profile-top">
                <div className="avatar">
                    <img src={userData !== null ? userData.images[0].url : ""} alt="" />
                </div>
                <p className="name">{userData !== null ? userData.display_name : ""}</p>
            </div>


            <div className="profile-bottom"></div>
        </div>
    )
}
