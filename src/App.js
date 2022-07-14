import React from 'react'
import Onlypage from './components/Onlypage/Onlypage';
import './sass/main.css';
import {
  ApolloClient, 
  ApolloProvider, 
  InMemoryCache, 
  HttpLink, 
  from
} from '@apollo/client';
import {onError} from '@apollo/client/link/error';

const errorLink = onError(({ graphqlErrors, networkError }) =>{
  if (graphqlErrors){
    graphqlErrors.map(({message, location, path}) => {return alert(`Graphql error ${message} ${location}`)})
  }
})

const link =  from([
  errorLink,
  new HttpLink({ uri: "http://localhost:5000/graphql", fetchOptions: {
    mode: 'no-cors'
} }),
  
])

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link
})


const App = () => {
  return (
    <ApolloProvider client={client}>
      <Onlypage />
    </ApolloProvider>
  )
}

export default App