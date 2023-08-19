
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

export default function BtnWithTooltips({icon, name, tooltips, onClick, ...props}) {

    const [x, SetX] = useState("left-1/2 -translate-x-1/2");
    const [y, SetY] = useState("top-0 translate-y-full")

    const handleMouseOverBtn = (e) => {
        if(e.currentTarget.offsetLeft <= 50) {
            SetX("left-0");
        }
        else if(e.currentTarget.offsetLeft >= document.documentElement.clientWidth - 10) {
            SetX("right-0")
        }
        else {
            SetX("left-1/2 -translate-x-1/2")
        }

        if(e.currentTarget.offsetTop <= 100) {
            SetY("bottom-0")
        }
        else {
            SetY("-top-2 -translate-y-full")
        }
    }

    return (
        <div
        onMouseOver={(e) => {
            handleMouseOverBtn(e);
        }}
        onClick={onClick}
        className="group h-fit w-fit bg-none text-grey relative"
        >
            <button 
            className="h-fit w-fit flex flex-row items-center bh-none gap-3 group-hover:text-white-100 font-semibold"
            >
               <span
                className="h-6 w-6 group-hover:scale-105"
               ><FontAwesomeIcon className="h-6" icon={icon}/></span>
               {name.length !== 0 && <p className="h-fit w-fit text-lg font-bold">{name}</p>}
            </button>
            {/* <p className={`hidden w-[350px] h-fit text-center bg-grey-50 rounded-lg py-2 px-2 text-sm font-semibold 
            absolute ${x} ${y} text-white-100 group-hover:block`}>{tooltips}</p> */}
        </div>
    )
}