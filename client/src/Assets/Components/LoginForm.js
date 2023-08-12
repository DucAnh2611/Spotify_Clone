
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as faR from "@fortawesome/free-regular-svg-icons";
import React, { useRef, useState } from "react";

export default function LoginForm() {

    const [hidePass, SetHidePass] = useState(false);
    const [rmbMe, SetRmbMe] = useState(false);

    const handleHidePass = (e) =>{
        e.preventDefault();
        SetHidePass(!hidePass);
    }

    return(
    <section 
    className="h-fit w-2/5 py-10 px-36 box-border bg-black-100 rounded-lg text-white-100">

        <div className="h-fit w-full py-14">
            <p className=" text-5xl font-bold  text-center">Log in to Spotify</p>
        </div>

        <div className="h-fit w-full py-8 border-t-grey-200 border-t-2 flex flex-col items-center">

            <div
            className="flex flex-col w-3/5 h-fit my-2 relative"
            >
                <label for="username"
                className=" text-sm font-semibold py-2"
                >
                Email or username
                </label>
                <input id="username" type="text" max={50} placeholder="Email or username"
                className="h-fit w-full box-border px-4 py-4 rounded-md outline-none bg-grey-300 text-base border-2 border-grey font-medium text-white-100
                placeholder:text-grey-100 hover:border-white-100"
                />
            </div>

            <div
            className="flex flex-col w-3/5 h-fit my-2 relative"
            >
                <label for="password"
                className=" text-sm font-semibold py-2"
                >
                Password
                </label>
                <input id="password" type={hidePass ? "text" : "password"} max={30} placeholder="Password"
                className="h-fit w-full box-border px-4 py-4 rounded-md outline-none bg-grey-300 text-base border-2 border-grey font-medium text-white-100
                 placeholder:text-grey-100 hover:border-white-100" 
                />
                <button     
                className="absolute bottom-0 right-0 h-12 w-12 grid place-items-center text-grey hover:text-white-100"
                onClick={handleHidePass}
                > <FontAwesomeIcon className="h-5" icon={!hidePass ? faR.faEye : faR.faEyeSlash} /> </button>
            </div>

            <div
            className="h-fit w-3/5 my-5 flex flex-row gap-2 items-center"
            >

                <div
                    className="h-5 w-9 relative"
                >   
                    <span
                    className={`h-full w-full absolute rounded-full ${rmbMe ? "bg-green-100" : "bg-grey"} z-0 border-2 border-black-100`}
                    />
                    <span
                    className={`h-3 w-3 rounded-full bg-black-100 absolute top-1/2 ${rmbMe ? "right-1" : "left-1"} -translate-y-1/2 `}
                    />
                    <button type="checkbox" id="r_m" checked={rmbMe} onClick={() => SetRmbMe(!rmbMe)}
                    className="h-full w-full absolute top-0 left-0 cursor-pointer"
                    />
                </div>

                <label className="text-sm font-semibold" for="r_m">Remember me</label>
            </div>

            <div className="h-fit w-3/5 block">
                <button
                className="h-12 w-full py-2 text-black-100 font-bold text-base bg-green-100 rounded-full my-6 hover:scale-110"
                >Log In</button>
                <a
                className="h-fit w-full block text-base text-white-100 underline text-center rounded-full my-2 hover:text-green-100"
                href="/">Forgot your password?</a>
            </div>

        </div>

        <div className="h-fit w-full py-8 border-t-grey-200 border-t-2 flex flex-row items-center justify-center gap-2 text-base">
            <p className="text-grey-100">Don't have an account?</p>
            <a 
            className="text-white-100 underline font-medium rounded-full my-2 hover:text-green-100"
            href="/signup">Sign up for Spotify</a>
        </div>

    </section>
    )
}