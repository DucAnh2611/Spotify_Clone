
import React, { useEffect, useState } from "react";
import {Routes, Route, Outlet} from "react-router-dom";
import { getTokenFromUrl } from "../API/spotify";
import SpotifyWebApi from 'spotify-web-api-js';
import Home from "../Pages/Home";
import LeftNavHome from "../Components/LeftNavHome";
import Playback from "../Components/Playback";

const spotify = new SpotifyWebApi();

export default function AppRouter() {

    const [spotifyToken, SetSpotifyToken] = useState("");

    const WithNav = () => {
        return <div 
        className="h-screen w-screen flex flex-col"
        >
            <main className="h-[90%] box-border p-2 bg-black-100 flex flex-row gap-2">
                <LeftNavHome token={spotifyToken}/>
                <Outlet/>
            </main>
            <Playback/>
        </div>
    }

    useEffect(() => {
        const token = JSON.parse(localStorage.getItem("access_token"));
        if(token && new Date(token.to) > new Date()) {
            SetSpotifyToken(token);
        }
        else {
            const _spotifyToken = getTokenFromUrl();
            if(_spotifyToken) {
                localStorage.setItem("access_token", JSON.stringify({
                    ..._spotifyToken, 
                    to: new Date(new Date().getTime() + _spotifyToken.expires_in*1000)
                }));
                SetSpotifyToken(_spotifyToken);
                spotify.setAccessToken(_spotifyToken.access_token);
                spotify.getMe().then(me => {
                    sessionStorage.setItem("me_token", JSON.stringify(me))
                })                
            }
        }

    }, []);

    return (
        <Routes>

            <Route element={<WithNav/>}>
                <Route exact path="/*" element={<Home/>} />
            </Route>
            

        </Routes>
    )
}