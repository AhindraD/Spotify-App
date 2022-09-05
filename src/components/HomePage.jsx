import React from 'react'
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import userContext from '../Context/UserContext';

export default function HomePage() {
    const { userData, setUserData, token, setToken } = useContext(userContext);
    return (
        <div className='home'>H-O-M-E</div>
    )
}
