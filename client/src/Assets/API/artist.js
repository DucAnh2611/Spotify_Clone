import { apiEndpoint } from "./spotify";

export const getFollowArtist = async (token, type, limit, after) => {
    if(token) {
        let endpoint = `/me/following`;
        let url = `${apiEndpoint}${endpoint}?limit=${limit || 10}${after ? "&after="+ after :""}&type=${type|| "artist"}`;

        let following = await fetch(url, {
            method:"GET",
            headers:{ 
                'Authorization': `${token.token_type} ${token.access_token}`
            }
        })
        return following.json();        
    }
    return null
}