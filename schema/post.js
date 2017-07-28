const Author = require('./author')

const Post = `
    type Post {
        # The post's ID
        id: Int!
        # the title of the post
        title: String
        # The post's author
        author: Author
        # The number of votes
        votes: Int
    }
`

module.exports = [Post, Author]