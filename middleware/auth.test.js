const auth = require("./auth")
// @ponicode
describe("auth", () => {
    test("0", () => {
        let callFunction = () => {
            auth({ user: "user name", header: () => "http://www.example.com/route/123?foo=bar" }, { status: () => 429 }, () => " ")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            auth({ user: "user123", header: () => "ponicode.com" }, { status: () => 429 }, () => " ")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            auth({ user: "user123", header: () => "Www.GooGle.com" }, { status: () => 400 }, () => " ")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            auth({ user: 123, header: () => "Www.GooGle.com" }, { status: () => 500 }, () => " ")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            auth({ user: "user-name", header: () => "http://www.croplands.org/account/confirm?t=" }, { status: () => 404 }, () => " ")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            auth(undefined, undefined, () => "")
        }
    
        expect(callFunction).not.toThrow()
    })
})
