import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4qnsvby00bg01yy8kpseqce/master',
  cache: new InMemoryCache()
})