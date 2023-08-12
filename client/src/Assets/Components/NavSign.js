
import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import * as faB from "@fortawesome/free-brands-svg-icons";

export default function NavSignup() {
    return(
        <nav className="h-32 w-full py-5 px-16 box-border text-black-100 text-lg bg-white-100 flex items-center justify-center">

            <a className="h-full w-fit flex flex-row items-center gap-1" href="/">
                <span>
                    <FontAwesomeIcon icon={faB.faSpotify} className=" h-12"/>
                </span>
                <p className=" text-3xl font-bold">Spotify</p>
            </a>

        </nav>
    )
}