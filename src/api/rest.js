import { mande } from "mande";

const endpoint = '/api';

export const getRestApi = (resource) => {
    const client = mande(endpoint + '/' + resource);
    const token = localStorage.getItem('token');

    if (token) {
        client.options.headers.Authorization = `Bearer ${token}`;
    }

    return client;
};