
import React from "react";

export default function EmptyLibrary({SetOpenRequireLogin, token}) {


    return (
        <>
            <div
            className="h-fit w-full bg-grey-500 rounded-xl box-border p-6 flex flex-col gap-4 text-white-100 text-base"
            >
                <p 
                className="font-bold w-full h-fit break-words"
                >Create your first playlist</p>
                <p 
                className="font-medium w-full h-fit text-sm break-words"
                >It's easy, we'ill help you</p>
                <button
                onClick = {() => token ? SetOpenRequireLogin(true) : null}
                className=" bg-white-100 text-black-100 font-bold text-sm py-2 px-4 rounded-full box-border w-fit h-fit"
                >Create playlist</button>

            </div>

            <div
            className="h-fit w-full bg-grey-500 rounded-xl box-border p-6 flex flex-col gap-4 text-white-100 text-base"
            >

                <p
                className="font-bold w-full h-fit break-words"
                >Let's find some podcasts to follow</p>
                <p
                className="font-medium w-full h-fit text-sm break-words"
                >We'll keep your updated on new episodes</p>
                <button
                className=" bg-white-100 text-black-100 font-bold text-sm py-2 px-4 rounded-full box-border w-fit h-fit"
                >Browse podcasts</button>

            </div>
        </>
    )
}