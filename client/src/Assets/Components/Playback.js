
import React from "react";
import BtnWithTooltips from "./ButtonWithTooltips";
import * as faS from "@fortawesome/free-solid-svg-icons";

export default function Playback() {
    return(
        <section
        className="h-[10%] w-full box-border p-5 bg-black-100 text-white-100 border-2 border-white-100 flex flex-ow items-center justify-between"
        >

            <div>

                <div>
                    <div>

                    </div>
                    <div>
                        <a href="/#">Song Name</a>
                        <a href="/#">Artist Name</a>
                    </div>
                </div>

                <div>
                    <BtnWithTooltips icon={faS.faHeart} name="" tooltips="Save to your library" />
                    <BtnWithTooltips icon={faS.faHeart} name="" tooltips="Save to your library" />
                </div>

            </div>

            <div>
                <div></div>
                <div></div>
            </div>

            <div>
                features
            </div>

        </section>
    )
}