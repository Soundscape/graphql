const _ = require('lodash');

// example data
const authors = [
  { id: 1, firstName: 'Tom', lastName: 'Coleman' },
  { id: 2, firstName: 'Sashko', lastName: 'Stubailo' },
  { id: 3, firstName: 'Mikhail', lastName: 'Novikov' },
];
const posts = [
  { id: 1, authorId: 1, title: 'Introduction to GraphQL', votes: 2 },
  { id: 2, authorId: 2, title: 'Welcome to Meteor', votes: 3 },
  { id: 3, authorId: 2, title: 'Advanced GraphQL', votes: 1 },
  { id: 4, authorId: 3, title: 'Launchpad is Cool', votes: 7 },
];

const connectors = require('../sql/schema')

const resolvers = {
  Query: {
    showtimes: (obj, { limit, offest }) => connectors.Showtimes.findAll({ offset: offest, limit: limit }),
    films: (obj, { limit, offest }) => connectors.Films.findAll({ offset: offest, limit: limit }),
    cinemachains: (obj, { limit, offest }) => connectors.CinemaChains.findAll({ offset: offest, limit: limit }),
    posts: () => posts,
    post: (obj, { id }) => _.find(posts, { id: id }),
    authors: () => authors,
    author: (obj, { id }) => _.find(authors, { id: id })
  },
  Author: {
    posts: (author) => _.filter(posts, { authorId: author.id })
  },
  Post: {
    author: (post) => _.find(authors, { id: post.authorId })
  }
};

module.exports = resolvers
