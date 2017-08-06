const Sequelize = require('sequelize')

const db = new Sequelize('gtp', 'root', 'masterkey', {
    dialect: 'mysql',
    host: 'localhost'
})

const FilmModel = db.define('film', {
    title: { type: Sequelize.STRING },
}, {
    timestamps: false,
    freezeTableName: true,
    tableName: 'MasterFilm'
})

const ShowtimeModel = db.define('showtime', {
}, {
    timestamps: false,
    freezeTableName: true,
    tableName: 'Showtime'
})

const CinemaChainModel = db.define('cinemaChain', {
}, {
    timestamps: false,
    freezeTableName: true,
    tableName: 'CinemaChain'
})

//const ShowtimeModel = db.define('Showtime')

const Films = db.models.film
const Showtimes = db.models.showtime
const CinemaChains = db.models.cinemaChain

module.exports = { Films, Showtimes, CinemaChains }
