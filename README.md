[![Build Status](https://travis-ci.org/MarkPollmann/react-trello.svg?branch=master)](https://travis-ci.org/MarkPollmann/react-trello)

## React Trello

![`board`](http://g.recordit.co/jEHkR4C7BJ.gif)
A [Trello](trello.com) clone, written with React. Authentication handled by AWS cognito.

### Why

I use this project to play around with some technologies. Namely, [TailwindCSS](https://tailwindcss.com/), [AWS Amplify](https://github.com/aws-amplify/amplify-cli), [Apollo Hooks](https://www.apollographql.com/docs/react/api/react-hooks/), [Cypress](https://www.cypress.io/) and [Storybook](https://storybook.js.org/).

### Usage

This project uses AWS Amplify for the database and GraphQL layer. Install the CLI and mock the API:

> `yarn add -g @aws-amplify/cli`

> `amplify mock`

Then run 

> `yarn && yarn start`