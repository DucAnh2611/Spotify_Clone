
import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import * as faB from "@fortawesome/free-brands-svg-icons";

export default function NavLogin() {
    return(
        <nav className="h-28 w-full py-5 px-16 box-border bg-black-100 text-lg text-white-100">

            <a className="h-full w-1/4 flex flex-row items-center gap-1" href="/">
                <span>
                    <FontAwesomeIcon icon={faB.faSpotify} className=" h-10"/>
                </span>
                <p className=" text-2xl font-semibold">Spotify</p>
            </a>

        </nav>
    )
}