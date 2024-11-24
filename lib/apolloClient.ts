import { ApolloClient, InMemoryCache, HttpLink, from } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { RetryLink } from '@apollo/client/link/retry';
import { LocalStorageWrapper } from 'apollo3-cache-persist/lib/storageWrappers';
import { persistCacheSync } from 'apollo3-cache-persist/lib/persistCacheSync';

const GITHUB_BASE_URL = 'https://api.github.com/graphql';

const httpLink = new HttpLink({
  uri: GITHUB_BASE_URL,
  headers: {
    authorization: `Bearer ${process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN}`,
  },
});

const errorLink = onError(({ graphQLErrors, networkError}) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.error(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`),
    );
  }

  if (networkError) {
    console.error(`[Network error]: ${networkError}`);
  }
})

const retryLink = new RetryLink();
const cache = new InMemoryCache();

persistCacheSync({
  cache,
  storage: new LocalStorageWrapper(window.localStorage),
});

export const client = new ApolloClient({
  link: from([errorLink, retryLink, httpLink]),
  cache: cache,
});
