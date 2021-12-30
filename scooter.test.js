const Scooter = require('./scooter')
const ActiveScooter = require('./scooter')

describe('Scooter Requirements', () => {
    const testScooter = new Scooter('Baltimore', 100, 32,'Good')
    const testActiveScooter = new ActiveScooter()

    test('Has correct range', () =>{
        expect(testScooter.range).toBe(32)
    })
    test('From corret charging station', () => {
        expect(testScooter.location).toBe('Baltimore')
    })
    test('Battery at 100%', () => {
        expect(testScooter.battery).toBe(100)
    })
    test('In good condition', () => {
        expect(testScooter.condition).toBe('Good')
    }) 


    test('Active scooter has correct range', () => {
        expect(testActiveScooter.range).toBe(32)
    })
    test('Active Scooter is from the correct charging station', () => {
        expect(testActiveScooter.location).toBe('Baltimore')
    })
    test('Active Scooter battery is at 100%', () => {
        expect(testActiveScooter.battery).toBe(100)
    })
    test('Active scooter in good condition', () => {
        expect(testActiveScooter.condition).toBe('Good')
    })

})