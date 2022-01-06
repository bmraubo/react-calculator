import Calculate from "./calculate";
const calculate = new Calculate();

describe ("Testing Calculate functions", () => {
    it("adding 2 and 2 should equal 4", () => {
        expect(calculate.add(2,2)).toBe(4);
    });

    it("subtracting 2 from 4 should equal 2", () => {
        expect(calculate.subtract(4,2)).toBe(2);
    });

    it("multiplying 2 by 5 should equal 10", () => {
        expect(calculate.multiply(2,5)).toBe(10);
    });

    it("dividing 10 by 2 should equal 5", () => {
        expect(calculate.divide(10,2)).toBe(5);
    });

    it("given multiply, it will multiply 3 and 4, returning 12", () => {
        expect(calculate.calculate(3, 4, calculate.multiply)).toBe(12);
    })
})
