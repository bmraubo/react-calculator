import Calculate from "./calculate";
const calculate = new Calculate();

describe ("Testing Calculate functions", () => {
    it("adding 2 and 2 should equal 4", () => {
        expect(calculate.add(2,2)).toBe(4);
    });
})
