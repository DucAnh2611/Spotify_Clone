import { apiEndpoint } from "./spotify";

export const getShow = async (token, limit, offset) => {
    let endpoint = `/me/shows`;
    let url = `${apiEndpoint}${endpoint}?limit=${limit || 20}&offset=${offset || 0}`;

    let show = await fetch(url, {
        method:"GET",
        headers:{ 
            'Authorization': `${token.token_type} ${token.access_token}`
        }
    })
    
    return show.json();
}
