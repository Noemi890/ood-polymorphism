const Plane = require('./Plane')
const Car = require('./Car')
const Skateboard = require('./Skateboard')

class Vehicle {

    move200(vehicle) {
        if (vehicle === undefined) {
            throw new Error('There is no vehicle here!')
        }

        return vehicle.move(200)
    }
}

module.exports = Vehicle