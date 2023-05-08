const mongoose = require('mongoose');

// module.exports = mongoose
class Database {
    static #instance;

    constructor() {
        this.connect()
    }

    connect(type = 'MongoDB') {
        mongoose.connect('mongodb://localhost:27017')
            .then(r => {
                console.log(`Connect MongoDB success with : ${this.numConnect()} connections !`)
            })
            .catch(e => {
                console.log('FAIL Connect MongoDB !')
            });
        mongoose.set('debug', true)
    }

    numConnect() {
        return mongoose.connections.length
    }

    static getInstance() {
        if (!this.#instance) {
            this.#instance = new Database();
        }
        return this.#instance
    }
}

module.exports = Database.getInstance();
