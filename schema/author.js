const Author = `
    type Author {
        # The author's ID
        id: Int!
        # The author's first name
        firstName: String
        # The author's last name
        lastName: String
        # The author's posts
        posts: [Post]
    }
`

module.exports = Author