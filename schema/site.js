const Site = `
    type Site {
        # The site's ID
        id: String!
        # The site's name
        name: String!
        # The site's timezone
        timezone: String!
        # The site's cinema chain
        cinemaChain: CinemaChain!
    }
`

module.exports = Site