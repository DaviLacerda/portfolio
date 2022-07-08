import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: process.env.NEXT_API_URL,
    cache: new InMemoryCache(),
    headers:{
        "authorization": `Bearer ${process.env.NEXT_API_KEY}`
    }
})