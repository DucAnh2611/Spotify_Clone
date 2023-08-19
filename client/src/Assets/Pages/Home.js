
import React from "react";
import { loginUrl } from "../API/spotify";
import LeftNavHome from "../Components/LeftNavHome";

export default function Home() {
    return(

        <section
        className="w-[80%] h-full bg-grey-300 rounded-lg text-grey-100"
        >

            <div>
                <a href={loginUrl} id="LoginBtn">Sign up</a>
                <a href={loginUrl} id="LoginBtn">Log in</a>
            </div>
            <div>

            </div>
        </section>
    )
}