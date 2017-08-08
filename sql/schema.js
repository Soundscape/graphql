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
    name: { type: Sequelize.STRING },
}, {
    timestamps: false,
    freezeTableName: true,
    tableName: 'CinemaChain'
})

const SiteModel = db.define('site', {
    name: { type: Sequelize.STRING },
    timezone: { type: Sequelize.STRING, field: 'timezoneId' },
}, {
    timestamps: false,
    freezeTableName: true,
    tableName: 'Site'
})

const Films = db.models.film
const Showtimes = db.models.showtime
const CinemaChains = db.models.cinemaChain
const Sites = db.models.site

module.exports = { Films, Showtimes, CinemaChains, Sites }
