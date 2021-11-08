const calculator = require('./calculator');

test('does calculator works', () => {
    expect(calculator.add(1,2)).toBe(3)
    expect(calculator.subtract(5,2)).toBe(3)
    expect(calculator.multiply(5,2)).toBe(10)
    expect(calculator.divide(6,2)).toBe(3)
    expect(calculator.divide(10,0)).toBe('task failed successfully')
})