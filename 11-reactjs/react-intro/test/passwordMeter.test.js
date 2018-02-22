var expect = require('chai').expect
var getStrength = require('../lib/passwordMeter')

describe('passwordMeter', () => {
  it('should return weak by default', () => {
    expect(getStrength('')).to.be.equal('weak')
  })
})