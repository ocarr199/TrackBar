// add two integers
// add decimals
// add negative
// add string
// One Number?
// string "ten"?
import sum from './add.js'



test('add 2 integers', () => {
    expect(sum(1,2)).toBe(3);
})

test('add 2 decimals', () => {
    expect(sum(.6,.8)).toBe(1.4);
})
test('add Negatives', () => {
    expect(sum(-1,3)).toBe(2);
})

// test('add strings', () => {
//     expect(sum('1','3')).toBe(4);
// })

// test('add One', () => {
//     expect(sum(1)).toBe(1);
// })

// test('add 2 integers', () => {
//     expect(sum('ten',1)).toBe(NaN);
// })