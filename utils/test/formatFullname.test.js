const formatFullname = require('../formatFullname')
const expect = require('chai').expect

describe('FormatFullname', () => {
	it('should return an error if "fullName" arg is not a string', () => {
		expect(formatFullname(20)).to.equal('Error')
		expect(formatFullname(undefined)).to.equal('Error')
		expect(formatFullname({})).to.equal('Error')
		expect(formatFullname([])).to.equal('Error')
		expect(formatFullname(function () {})).to.equal('Error')
	})

	it('should return an error if there is no "fullName" arg', () => {
		expect(formatFullname('')).to.equal('Error')
	})
	it('should return an error if "fullName" is different  than <firstname> <lastname>', () => {
		expect(formatFullname('justek test test check')).to.equal('Error')
		expect(formatFullname('test test check')).to.equal('Error')
		expect(formatFullname('Alice')).to.equal('Error')
	})
})

