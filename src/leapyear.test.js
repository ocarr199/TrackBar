import leapyear from './leapyear'


test('divisible by 400', () => {
    expect(leapyear(1200)).toBe(true);
})

test('divisible by 100', () => {
    expect(leapyear(200)).toBe(false);
})
test('divisible by 4', () => {
    expect(leapyear(12)).toBe(true);
})
test('divisible by none', () => {
    expect(leapyear(3)).toBe(false);
})