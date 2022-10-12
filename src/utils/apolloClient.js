import { HttpLink, InMemoryCache, ApolloClient } from "@apollo/client";
import { createPersistedQueryLink } from "@apollo/client/link/persisted-queries";
import { sha256 } from 'crypto-hash';

const httpLink = new HttpLink({ uri: `${process.env.REACT_APP_BACKEND_URL}/graphql` });
const persistedQueriesLink = createPersistedQueryLink({ sha256 });
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: persistedQueriesLink.concat(httpLink)
});
export default client;
