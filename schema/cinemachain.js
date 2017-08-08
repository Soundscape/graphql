const CinemaChain = `
    type CinemaChain {
        # The cinema chain's ID
        id: String!
        # The cinema chain's name
        name: String!,
        # The cinema chain's sites
        sites: [Site]
    }
`

module.exports = CinemaChain
