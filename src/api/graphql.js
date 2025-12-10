import { GraphQLClient, gql } from 'graphql-request';

const endpoint = typeof window !== 'undefined'
    ? `${window.location.origin}/api/graphql`
    : '/api/graphql';

export const getGraphQLClient = () => {
    const client = new GraphQLClient(endpoint);
    const token = localStorage.getItem('token');

    if (token) {
        client.setHeader('Authorization', `Bearer ${token}`);
    }

    return client;
};

export const graphQLRequest = (query, variables = {}) => {
    const client = getGraphQLClient();
    return client.request(query, variables);
};

export { gql };