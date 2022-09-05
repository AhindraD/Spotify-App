import React from 'react'
import { useContext, useState } from 'react';
import userContext from "../../Context/UserContext";

export default function Profile() {
    const { userData, token } = useContext(userContext);
    return (
        <div className='profile-cont'>

        </div>
    )
}
