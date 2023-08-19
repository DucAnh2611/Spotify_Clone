
export const apiEndpoint = "https://api.spotify.com/v1";
export const authEnpoint = "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000/";

const clientId = "921313e4bf714675b17fcc11b9fde9c3";

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
    "playlist-modify-public",
    "playlist-modify-private",
    "playlist-read-collaborative",
    "playlist-read-private",
    "user-follow-modify",
    "user-follow-read",
    "user-read-playback-position",
    "user-library-modify"  ,
    "user-library-read" 
];

export const loginUrl = `${authEnpoint}?
client_id=${clientId}
&redirect_uri=${redirectUri}
&scope=${scopes.join("%20")}
&response_type=token
&show_dialog=true`;

export const getTokenFromUrl = () => {
    return window.location.hash.substring(1).split('&').reduce((initital, item) => {
        let part = item.split("=");
        initital[part[0]] = decodeURIComponent(part[1]);

        return initital;
    }, {})
}
