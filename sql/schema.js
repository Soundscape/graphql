const Sequelize = require('sequelize')
const db = new Sequelize('gtp', 'lp', 'Rac12gat_sal!', {
    dialect: 'mssql',
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

//const ShowtimeModel = db.define('Showtime')

const Films = db.models.film
const Showtimes = db.models.showtime

module.exports = { Films, Showtimes }