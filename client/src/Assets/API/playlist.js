import { apiEndpoint } from "./spotify";

export const getPlaylist = async (token, limit, offset) => {
    let endpoint = `/me/playlists`;
    let url = `${apiEndpoint}${endpoint}?limit=${limit || 20}&offset=${offset || 0}`;

    let playlist = await fetch(url, {
        method:"GET",
        headers:{ 
            'Authorization': `${token.token_type} ${token.access_token}`
        }
    })
    return playlist.json();
}

export const createPlaylist = async (user, token) => {
    let endpoint = `/users/${user.id}/playlists`;
    let url = `${apiEndpoint}${endpoint}`;

    let playlist = await fetch(url, {
        method: "POST",
        headers:{ 
            "Content-Type": "application/json",
            'Authorization': `${token.token_type} ${token.access_token}`
        },
        body: JSON.stringify({
            "name": "New Playlist",
            "description": "New playlist description",
            "public": false
        })
    })
    return playlist.json();
}