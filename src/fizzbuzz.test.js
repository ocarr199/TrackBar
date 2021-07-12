
import fizzbuzz from './fizzbuzz'


test('divisible by 15', () => {
    expect(fizzbuzz(15)).toBe('fizzbuzz');
})

test('divisible by 3', () => {
    expect(fizzbuzz(3)).toBe('fizz');
})
test('divisible by 5', () => {
    expect(fizzbuzz(5)).toBe('buzz');
})
test('divisible by none', () => {
    expect(fizzbuzz(7)).toBe(7);
})