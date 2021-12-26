const assert = require('assert');
const { raindrops } = require('../index');

describe('Raindrops', () => {
  it("multiples of 3 should return 'Pling'", () => {
    const input = 3;
    const expected = 'Pling';
    const result = raindrops(input);
    assert.strictEqual(result, expected);
  });

  it("multiples of 5 should return 'Plang'", () => {
    const input = 5;
    const expected = 'Plang';
    const result = raindrops(input);
    assert.strictEqual(result, expected);
  });

  it("multiples of 7 should return 'Plong'", () => {
    const input = 7;
    const expected = 'Plong';
    const result = raindrops(input);
    assert.strictEqual(result, expected);
  });

  it("multiples of 3 and 5 should return 'PlingPlang'", () => {
    const input = 15;
    const expected = 'PlingPlang';
    const result = raindrops(input);
    assert.strictEqual(result, expected);
  });

  it("multiples of 3 and 7 should return 'PlingPlong'", () => {
    const input = 21;
    const expected = 'PlingPlong';
    const result = raindrops(input);
    assert.strictEqual(result, expected);
  });

  it("multiples of 5 and 7 should return 'PlangPlong'", () => {
    const input = 35;
    const expected = 'PlangPlong';
    const result = raindrops(input);
    assert.strictEqual(result, expected);
  });

  it("multiples of 3, 5 and 7 should return 'PlingPlangPlong'", () => {
    const input = 105;
    const expected = 'PlingPlangPlong';
    const result = raindrops(input);
    assert.strictEqual(result, expected);
  });

  it('should return the number as a string if no it is not a multiple of 3, 5 or 7', () => {
    const input = 4;
    const expected = '4';
    const result = raindrops(input);
    assert.strictEqual(result, expected);
  });

  it("should return '0' when passed 0", () => {
    const input = 0;
    const expected = '0';
    const result = raindrops(input);
    assert.strictEqual(result, expected);
  });
});
