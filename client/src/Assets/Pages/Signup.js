
import React from "react";
import { Helmet } from "react-helmet";
import SignupForm from "../Components/SignupForm";
import NavSignup from "../Components/NavSign";

export default function Signup() {

    return (
        <div className="h-screen w-screen bg-white-100 flex flex-col items-center">

            <NavSignup/>

            <Helmet>
                <link rel="icon" type="image/png" href="../Img/Spotify_App_Logo_Black.ico" />
                <title>Signup - Spotify</title>
            </Helmet>

            <SignupForm/>

        </div>
    )
}