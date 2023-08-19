
import React, { useEffect, useRef, useState } from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import * as faS from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";
import BtnWithTooltips from "./ButtonWithTooltips";
import LibraryNav from "./LibraryNav/LibraryNav";

export default function LeftNavHome({token, ...props}) {

    let location = useLocation();
    let createNewListRef = useRef(null);
    let [openCreateNewList, SetOpenCreateNewList] = useState(false);

    const handleClickNavItem = (item) => {
        SetNavContent(prev => prev.map(e => (
            {
                ...e,
                isSelected: e.name === item.name ? true : false
            }
        )))
        window.history.pushState(null, "", item.path);
    }

    let [navContent, SetNavContent] =useState([
        {
            "name": "Home",
            "icon": faS.faHomeAlt,
            "path": "/",
            "isSelected": true,
        },
        {
            "name": "Search",
            "icon": faS.faSearch,
            "path": "/search",
            "isSelected": false,
        }
    ]);

    useEffect(()=> {

        let handleClickNew = document.addEventListener("mousedown", (e) => {
            if(!createNewListRef.current || !createNewListRef.current.includes(e.target)) {
                SetOpenCreateNewList(false);
            }
        })

    }, []);

    return(
        <nav
        className="w-[20%] h-full bg-none rounded-lg flex flex-col gap-2"
        >

            <div
            className="w-full h-fit bg-grey-300 rounded-lg text-grey-100 box-border px-8 py-2"
            >   

                {navContent.map(e => (
                <div
                onClick={() => handleClickNavItem(e)}
                className={`h-fit w-full py-3 flex flex-row items-center gap-5 cursor-pointer
                hover:text-white-100 ${e.isSelected ? "text-white-100" : "text-grey-100"}`}
                >
                    <span className="w-[8%]"><FontAwesomeIcon icon={e.icon} className="h-6"/></span>
                    <p className="text-lg font-semibold w-[92%]">{e.name}</p>
                </div>                        
                ))}

            </div>

            <LibraryNav token={token}/>

        </nav>
    )
}