'use strict';
const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber type == SUM', () => {
  it('checks the output', () => {
    assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
    assert.strictEqual(calculateNumber('SUM', 1, 3.7), 5);
    assert.strictEqual(calculateNumber('SUM', 3.7, 1), 5);
    assert.strictEqual(calculateNumber('SUM', 0.0, 0), 0);
    assert.strictEqual(calculateNumber('SUM', -1, 1), 0);
    assert.strictEqual(calculateNumber('SUM', 1, -1), 0);
    assert.strictEqual(calculateNumber('SUM', -1, -1), -2);
  });
});

describe('calculateNumber type == SUBTRACT', () => {
  it('checks the output', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 5, 3), 2);
    assert.strictEqual(calculateNumber('SUBTRACT', 3.1, 2.5), 0);
    assert.strictEqual(calculateNumber('SUBTRACT', 4.5, 2), 3);
    assert.strictEqual(calculateNumber('SUBTRACT', -1, 1), -2);
    assert.strictEqual(calculateNumber('SUBTRACT', -1.5, 0), -1);
  });
});

describe('calculateNumber type == DIVIDE', () => {
  it('check the output', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 2, 2.5), 0.6666666666666666);
    assert.strictEqual(calculateNumber('DIVIDE', 0.0, 2), 0);
    assert.strictEqual(calculateNumber('DIVIDE', 1, 0), 'Error');
  });
});
