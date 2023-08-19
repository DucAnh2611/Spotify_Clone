
import React, { useEffect, useState } from "react";

export default function LibraryLogin({listLibrary}) {

    const [listType, SetListType] = useState([]);
    const [filter, SetFilter] = useState({}); 
    const [listLib, SetListLib] = useState({});   


    const ConvertObjectToComponent = (type, values) => {
        switch(type) {
            case "artist":
                return (
                    values.map(e => (
                        <a href={e.external_urls.spotify}>

                            <p>{e.name}</p>

                        </a>
                    ))
                )
            case "playlist":
                return (
                    values.map(e => (
                        <a href={e.external_urls.spotify}>

                            <p>{e.name}</p>

                        </a>
                    ))
                )
            case "podcastAndShow":
                return (
                    values.map(e => (
                        <a href={e.show.external_urls.spotify}>

                            123

                        </a>
                    ))
                )
            default: return;
        }
    }

    useEffect(() => {
        Object.entries(listLibrary).forEach(e => {
            if(e[1].length !==0 ) {

                SetListLib(lib => ({
                    ...lib,
                    [e[0]]: e[1]
                }))

                SetListType(listType.push(e[0]));
            }
        })

    }, [listLibrary]);

    return (
        <div>

            <div>

            </div>


            <div className="flex flex-col">
                {
                    Object.entries(listLib).map(e => ConvertObjectToComponent(e[0], e[1]))
                }                
            </div>

        </div>
    )
}