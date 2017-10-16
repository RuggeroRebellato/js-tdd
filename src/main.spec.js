/* eslint-disable */

const { expect } = require('chai');
const main = require('./main');

describe('Main', () => {
  it('should be an object', () => {
    expect(main).to.be.an('object');
  });
  it('should add 2 + 2 returning 4', () => {
    expect(main.add(2, 2)).to.be.equal(4);
  });
  it('should subtract 4-2 returning 2', () => {
    expect(main.minus(4, 2)).to.be.equal(2);
  });
  it('should multiply 2 * 2 returning 4', () => {
    expect(main.mult(2, 2)).to.be.equal(4);
  });
  it('should divide 10 / 2 returning 5', () => {
    expect(main.div(10, 2)).to.be.equal(5);
  });
});
