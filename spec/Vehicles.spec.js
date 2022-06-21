const Plane = require('../src/Plane')
const Car = require('../src/Car')
const Skateboard = require('../src/Skateboard')
const Vehicle = require('../src/Vehicles')

describe('Vehicles', () => {
    let vehicles

    beforeEach(() => {
        vehicles = new Vehicle()
    })

    it('returns true if there is a vehicle', () => {
        const plane = new Plane()
        expect(vehicles.move200(plane)).toEqual(true)
    })

    it("returns an error if there isn't a vehicle", () => {
        expect(() => vehicles.move200()).toThrow(new Error('There is no vehicle here!'))
    })
})