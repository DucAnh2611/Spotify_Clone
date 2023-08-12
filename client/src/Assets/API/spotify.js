
export const authEnpoint = "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000";

const clientId = "921313e4bf714675b17fcc11b9fde9c3";

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state"
];

export const loginUrl = `${authEnpoint}?
client_id=${clientId}
&redirect-uri=${redirectUri}
&scope=${scopes.join("%20")}
&response_type=token
&show_dialog=true`;