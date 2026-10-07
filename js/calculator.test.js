const { divide, multiply } = require("./calculator");

test("divide 10 by 2", () => {
    expect(divide(10, 2)).toBe(5);
});

test("divide 20 by 4", () => {
    expect(divide(20, 4)).toBe(5);
});

test("multiply 5 by 2", () => {
    expect(multiply(5, 2)).toBe(10);
});

test("multiply 6 by 3", () => {
    expect(multiply(6, 3)).toBe(18);
});