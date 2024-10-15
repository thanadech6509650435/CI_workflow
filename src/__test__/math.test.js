const math = require("../math.js");
describe("addition", () => {
    test("expect 5 + 3 = 8", () => {
        expect(math.add(5, 3)).toBe(8);
    })
})

describe("subtract", () => {
    test("expect 5 - 1 = 4", () => {
        expect(math.subtract(5, 1)).toBe(4);
    })
})

describe("multiply", () => {
    test("expect 2 * 3 = 6", () => {
        expect(math.multiply(2, 3)).toBe(6);
    })
})
