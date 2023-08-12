
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as faR from "@fortawesome/free-regular-svg-icons";
import React, { useRef, useState } from "react";

export default function SignupForm() {

    const [hidePass, SetHidePass] = useState(false);

    const handleHidePass = (e) =>{
        e.preventDefault();
        SetHidePass(!hidePass);
    }

    return(
    <section 
    className="h-fit w-[550px] p-5 box-border text-black-100">

        <div className="h-fit w-full py-5">
            <p className=" text-3xl font-bold text-center">Sign up for free to listening.</p>
        </div>

        <div className="h-fit w-full py-2 flex flex-col items-center">

            <div
            className="flex flex-col w-full h-fit my-2 relative"
            >
                <label for="username"
                className=" text-sm font-bold py-2"
                >
                What's your email address?
                </label>
                <input id="username" type="text" max={50} placeholder="Enter your email."
                className="h-fit w-full box-border px-3 py-[14px] rounded outline-none bg-none text-base border-2 border-grey font-medium text-black-100
                placeholder:text-grey hover:border-black-100"
                />
                <a 
                className="text-green-200 underline font-medium text-sm rounded-full my-2"
                href="/login/phone"
                >Use phone number instead</a>
            </div>

            <div
            className="flex flex-col w-full h-fit my-2 relative"
            >
                <label for="password"
                className=" text-sm font-bold py-2"
                >
                Create a password
                </label>
                <input id="password" type={hidePass ? "text" : "password"} max={30} placeholder="Create a password."
                className="h-fit w-full box-border px-3 py-[14px] rounded outline-none bg-none text-base border-2 border-grey font-medium text-black-100
                placeholder:text-grey hover:border-black-100"
                />
                <button     
                className="absolute bottom-0 right-0 h-14 w-14 grid place-items-center text-grey hover:text-black-100"
                onClick={handleHidePass}
                > <FontAwesomeIcon className="h-5" icon={!hidePass ? faR.faEye : faR.faEyeSlash} /> </button>
            </div>

            <div
            className="flex flex-col w-full h-fit my-2 relative"
            >
                <label for="name"
                className=" text-sm font-bold py-2"
                >
                What should we call you?
                </label>
                <input id="name" type="text" max={50} placeholder="Enter a profile name."
                className="h-fit w-full box-border px-3 py-[14px] rounded outline-none bg-none text-base border-2 border-grey font-medium text-black-100
                placeholder:text-grey hover:border-black-100"
                />
                <p className="text-black-200 font-medium text-sm rounded-full my-2">This appears on your profile.</p>
            </div>

            <div
            className="flex flex-col w-full h-fit my-2 relative"
            >
                <p
                className="w-full text-sm font-bold py-2"
                >
                What's your date of birth?
                </p>

                <div className="h-fit w-full flex flex-row gap-6">
                    <div className="flex flex-col h-fit flex-[1]">
                        <label for="dateB">Date</label>
                        <input id="dateB" type="text" maxLength={2} placeholder="DD"
                        className="h-fit w-full box-border px-3 py-[14px] rounded outline-none bg-none text-base border-2 border-grey font-medium text-black-100
                        placeholder:text-grey hover:border-black-100"
                        />
                    </div>

                    <div className="flex flex-col h-fit flex-[3]">
                    <label for="monthB">Month</label>
                        <select id="monthB" type="text" defaultValue={0}
                        className="h-fit w-full box-border px-3 py-[14px] rounded outline-none bg-none text-base border-2 border-grey font-medium text-black-100
                        placeholder:text-grey hover:border-black-100"
                        >
                            <option value={0} disabled={true}>
                                Month
                            </option>
                        </select>
                    </div>

                    <div className="flex flex-col h-fit flex-[2]">
                    <label for="yearB">Year</label>
                        <input id="yearB" type="text" maxLength={4} placeholder="YYYY"
                        className="h-fit w-full box-border px-3 py-[14px] rounded outline-none bg-none text-base border-2 border-grey font-medium text-black-100
                        placeholder:text-grey hover:border-black-100"
                        />
                    </div>                    
                </div>

            </div>

            <div
            className="flex flex-col w-full h-fit my-2 relative"
            >
                <p
                className="h-fit w-full text-sm font-bold py-2"
                >
                What's your date of birth?
                </p>

                <div className="h-full w-full flex flex-row gap-3 flex-wrap items-center">

                    <div className="h-full w-fit py-1">
                        <input
                        className="h-full font-bold text-2xl"
                        id="male" type="radio"/>
                        <label className="mx-2 text-base font-medium" for="male">Male</label>
                    </div>

                    <div className="h-full w-fit py-1">
                        <input
                        className="h-full font-bold text-2xl" id="female" type="radio"/>
                        <label className="mx-2 text-base font-medium" for="female">Female</label>
                    </div>

                    <div className="h-full w-fit py-1">
                        <input
                        className="h-full font-bold text-2xl" id="n-b" type="radio"/>
                        <label className="mx-2 text-base font-medium"  for="n-b">Non-binary</label>
                    </div>

                    <div className="h-full w-fit py-1">
                        <input
                        className="h-full font-bold text-2xl" id="other" type="radio"/>
                        <label className="mx-2 text-base font-medium"  for="other">Other</label>
                    </div>

                    <div className="h-full w-fit py-1">
                        <input
                        className="h-full font-bold text-2xl" id="nts" type="radio"/>
                        <label className="mx-2 text-base font-medium"  for="nts">Prefer not to say</label>
                    </div>

                </div>
            </div>

            <div className="h-fit w-full block">
                <div className="h-full w-fit py-1 my-5">
                    <input
                    className="h-full font-bold text-2xl"
                    id="con1" type="checkbox"/>
                    <label className="mx-2 text-base font-medium" for="con1">I would prefer not to receive marketing messages from Spotify</label>
                </div>

                <div className="h-full w-fit py-1 my-5">
                    <input
                    className="h-full font-bold text-2xl"
                    id="con2" type="checkbox"/>
                    <label className="mx-2 text-base font-medium" for="con2">Share my registration data with Spotify's content providers for marketing purposes.
                    </label>
                </div>
            </div>

            <div className="h-fit w-full block">
                <p className="text-center text-xs my-2 font-semibold">
                    By clicking on 'Sign up', you agree to Spotify's
                    <a className="text-green-200 underline font-medium rounded-full mx-2 hover:text-green-100"
                    href="/">Terms and Conditions of Use.</a>
                </p>
                <p className="text-center text-xs my-2 font-semibold">
                To learn more about how Spotify collects, uses, shares and protects your personal data, please see
                    <a className="text-green-200 underline font-medium rounded-full mx-2 hover:text-green-100"
                     href="/">Spotify's Privacy Policy.</a>
                </p>
            </div>

            <div className="h-fit w-full grid place-items-center">
                <button
                className="h-fit w-fit py-4 px-12 text-black-100 font-bold text-lg bg-green-100 rounded-full my-6 hover:scale-110"
                >Sign up</button>
            </div>

        </div>

        <div className="h-fit w-full flex flex-row items-center justify-center gap-2 text-base">
            <p className="text-black-100">Have an account?</p>
            <a 
            className="text-green-200 underline font-medium rounded-full my-2 hover:text-green-100"
            href="/login">Login</a>
        </div>

    </section>
    )
}