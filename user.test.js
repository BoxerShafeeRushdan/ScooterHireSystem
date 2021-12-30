const User = require('./user')
const ActiveUser = require('./user')

describe('User Requirements', () => {
    const testUser = new User('Bruce Wayne', 25)
    const testActiveUser = new ActiveUser()
    
    test('Has a name', () => {
        expect(testUser.name).toBe('Bruce Wayne')
    })
    test('User is 18+', () => {
        expect(testUser.age).toBe(25)
    })

    test('Active User is 18+', () => {
        expect(testActiveUser.age). toBe(25)
    })
    test('Active User has correct name', () => {
        expect(testActiveUser.name).toBe('Bruce Wayne')
    })
})
