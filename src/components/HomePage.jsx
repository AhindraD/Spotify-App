import React from 'react'
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import userContext from '../Context/UserContext';

import LeftBarNav from "./LeftBarNav/LeftBarNav"

export default function HomePage() {
    const { userData, setUserData, token, setToken } = useContext(userContext);

    async function user_account(token) {
        console.log(token);
        const user = await axios
            .get("https://api.spotify.com/v1/me", {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            })
            .then((response) => {
                // Return the full details of the user.
                //console.log(response);

                //setUserData(() => response.slice);
                //console.log(userData);
                return response;
            })
            .catch((err) => {
                console.log(err);
            });
        console.log(user);
        setUserData(() => user)
    };

    useEffect(() => {
        user_account(token);
    }, [])



    return (
        <div className='home-cont'>
            <LeftBarNav />
            <div className='subpages-cont'>
                <Routes>
                    <Route path='/' element={<AllAdHome />} />
                    <Route path='/myads' element={<MyAd />} />
                    <Route path='/myfavs' element={<MyFavs />} />
                    <Route path='/mysold' element={<MySold />} />
                </Routes>
            </div>
        </div>
    )
}
