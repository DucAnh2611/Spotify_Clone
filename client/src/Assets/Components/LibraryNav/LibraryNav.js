
import React, { useEffect, useMemo, useRef, useState } from "react";
import * as faS from "@fortawesome/free-solid-svg-icons";
import * as faR from "@fortawesome/free-regular-svg-icons";
import BtnWithTooltips from "../ButtonWithTooltips";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { loginUrl } from "../../API/spotify";
import LibraryLogin from "./LibraryLogin";
import EmptyLibrary from "./EmptyLibrary";
import { createPlaylist, getPlaylist } from "../../API/playlist";
import { getFollowArtist } from "../../API/artist";

export default function LibraryNav({...props}) {
    
    const [access_token, SetAccessToken] = useState(JSON.parse(localStorage.getItem("access_token")));
    const [listLib, SetListLib] = useState([]);
    const [lisArtist, SetListArtist] = useState([]);
    const [listPlaylist, SetListPlaylist] = useState([]);
    const [listPodcastAndShow, SetListPodCastAndShow]= useState([]);
    const [userInfo, SetUserInfo] = useState({});
    const openListRef = useRef(null);
    const openRequireLoginRef = useRef(null);
    const [openRequireLogin, SetOpenRequireLogin] = useState(false);
    const [openCreatePlayList, SetOpenCreatePlayList] = useState(false);

    const handleCreatePlaylist = async () => {
        let url = `https://api.spotify.com/v1/users/${userInfo.id}/playlists `
        let create = await createPlaylist(userInfo, access_token);
        console.log(create);
    }

    useEffect(() => {
        SetUserInfo(JSON.parse(sessionStorage.getItem("me_token")));
        SetListArtist(getFollowArtist(access_token));
        SetListPlaylist(getPlaylist(access_token))
        if(access_token) {
            SetAccessToken(access_token.access_token);
        }
        else SetAccessToken(null);

        const handleClickOpenCreate = document.addEventListener("mousedown", (e) =>{
            if(!openListRef.current || !openListRef.current.contains(e.target)) {
                SetOpenCreatePlayList(false);
            }
            if(!openRequireLoginRef.current || !openRequireLoginRef.current.contains(e.target)) {
                SetOpenRequireLogin(false);
            }
        })

        return document.removeEventListener("mousedown", handleClickOpenCreate);
    }, []);

    return (
        <div
        className="w-full h-full bg-grey-300 rounded-md text-grey-100 box-border px-2 py-2 relative"
        >

            <div
            className="w-full h-fit flex flex-row py-1 px-6 box-border"
            >
                <div
                className={`h-fit w-full py-3 flex flex-row items-center gap-5 cursor-pointer
                hover:text-white-100 text-grey-100`}
                >
                    <BtnWithTooltips icon={faS.faBook} name="Your library" tooltips="Collapse Your Library"/>                        
                </div>

                <div
                className={`h-fit w-fit py-3 flex flex-row items-center gap-5 cursor-pointer
                hover:text-white-100 text-grey-100`}
                >   
                    <div className="h-fit w-fit relative">
                        <BtnWithTooltips icon={faS.faPlus} name="" tooltips="Create playlist or folder" onClick={() => SetOpenCreatePlayList(true)}/>            

                        {openCreatePlayList && 
                        <div
                        ref={openListRef}
                        className="absolute left-0 -bottom-2 translate-y-full h-fit w-56 box-border p-1 bg-grey-200 rounded-md drop-shadow-lg text-white-100"
                        >

                            <div
                            onClick={() => {
                                SetOpenCreatePlayList(false);
                                if(!access_token) SetOpenRequireLogin(true)
                                else {
                                    handleCreatePlaylist();
                                }
                            }}
                            className="h-12 w-full hover:bg-grey-600 flex flex-row items-center rounded-sm gap-2 box-border py-2 px-3"
                            >
                                <span className="h-fit w-[10%] grid place-items-center"><FontAwesomeIcon icon={faR.faSquarePlus} className="h-5"/></span>
                                <p className="text-sm w-[90%]">Create a new playlist</p>
                            </div>

                            <div
                            className="h-12 w-full hover:bg-grey-600 flex flex-row items-center rounded-sm gap-2 box-border py-2 px-3"
                            >
                                <span className="h-fi w-[10%] grid place-items-center"><FontAwesomeIcon icon={faR.faFolderOpen} className="h-4"/></span>
                                <p className="text-sm w-[90%]">Create a playlist folder</p>
                            </div>

                        
                        </div>}          
                    </div>

                    {access_token && <div><BtnWithTooltips icon={faS.faArrowRight} name="" tooltips="Enlarge Your Library" /></div>}
                </div>
            </div>

            {
                access_token 
                ? (
                    <LibraryLogin/>
                )
                : (
                    <div className="
                    h-fit w-full flex flex-col gap-6
                    ">

                        <EmptyLibrary 
                        token={access_token} 
                        SetOpenCreatePlayList={SetOpenCreatePlayList}/>

                        {
                            openRequireLogin && (
                                <div
                                ref={openRequireLoginRef}
                                className="h-fit w-[400px] bg-blue-100 rounded-xl box-border p-6 flex flex-col gap-4 text-white-100 text-base absolute -right-2 translate-x-full"
                                >

                                    <p
                                    className="font-bold w-full h-fit break-words"
                                    >Create a playlist</p>
                                    <p
                                    className="font-medium w-full h-fit text-sm break-words"
                                    >Log in to create and share playlists.</p>

                                    <div
                                    className="h-fit w-full flex flex-row items-end justify-end"
                                    >
                                        <button
                                        onClick={() => {SetOpenRequireLogin(false)}}
                                        className=" bg-none text-grey-100 font-bold text-sm py-2 px-4 rounded-full box-border w-fit h-fit"
                                        >Not now</button>   

                                        <a
                                        href={loginUrl}
                                        className=" bg-white-100 text-black-100 font-bold text-sm py-2 px-4 rounded-full box-border w-fit h-fit"
                                        >Login</a>                                        
                                    </div>

                                </div>
                            )
                        }

                    </div>
                )
            }

        </div>
    )
}