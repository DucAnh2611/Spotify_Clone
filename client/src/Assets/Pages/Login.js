
import React from "react";
import { Helmet } from "react-helmet";
import NavLogin from "../Components/NavLog";
import LoginForm from "../Components/LoginForm";

export default function Login() {

    return (
        <div className="h-screen w-screen bg-gradient-to-b from-grey-200 to-black-100 flex flex-col items-center gap-9">

            <NavLogin/>

            <Helmet>
                <link rel="icon" type="image/png" href="../Img/Spotify_App_Logo_Black.ico" />
                <title>Login - Spotify</title>
            </Helmet>

            <LoginForm/>

        </div>
    )
}