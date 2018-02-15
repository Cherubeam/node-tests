const expect = require('expect');

const utils = require('./utils');

describe('Utils', () => {

	describe('#add', () => {
		it('should add two numbers', () => {
			let res = utils.add(33, 11);

			expect(res).toBe(44).toBeA('number');
			// if (res !== 44) {
			// 	throw new Error(`Expected 44, but got ${res}.`);
			// }
		});

		it('should async add two numbers', (done) => {
			utils.asyncAdd(4, 3, (sum) => {
				expect(sum).toBe(7).toBeA('number');
				done();
			});
		});
	});

	describe('#square', () => {
		it('should square a number', () => {
			let res = utils.square(7);

			expect(res).toBe(49).toBeA('number');
			// if (res !== 49) {
			// 	throw new Error(`Expected 49, but got ${res}.`);
			// }
		});

		it('should async square a number', (done) => {
			utils.asyncSquare(3, (sum) => {
				expect(sum).toBe(9).toBeA('number');
				done();
			});
		});
	});
});

it('should verify first and last names are set', () => {
	let user = {
		age: 32,
		location: 'Berlin'
	};
	let res = utils.setName(user, 'Marco Braun');

	expect(res).toInclude({
		firstName: 'Marco',
		lastName: 'Braun'
	});
});

// it('should expect some values', () => {
// 	// expect(12).toNotBe(11);
// 	// expect({name: 'Marco'}).toEqual({name: 'Marco'});
// 	// expect([2,3,4]).toInclude(2);
// 	expect({
// 		name: 'Marco',
// 		age: 32,
// 		location: 'Berlin'
// 	}).toInclude({
// 		age: 32
// 	})
// });
