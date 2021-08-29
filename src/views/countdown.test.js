const countdown = require("./countdown")
// @ponicode
describe("handleSongFinishedPlaying", () => {
    let inst

    beforeEach(() => {
        inst = new countdown.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.handleSongFinishedPlaying()
        }
    
        expect(callFunction).not.toThrow()
    })
})
