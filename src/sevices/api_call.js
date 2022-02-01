import axios from 'axios';

export const api_call = async (_url) => {
    let data = await axios.get(_url);
    return data;
}