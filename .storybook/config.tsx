import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'

import 'semantic-ui-css/semantic.min.css'
import '../src/styles/tailwind.css'

const client = new ApolloClient()

addDecorator(storyFn => (
  <ApolloProvider client={client}>
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {storyFn()}
    </div>
  </ApolloProvider>
))

// automatically import all files ending in *.stories.js
configure(require.context('../src/stories', true, /\.stories\.tsx$/), module)
