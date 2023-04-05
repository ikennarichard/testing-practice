const {stringLength, reverseString, capitalize} = require('./index');
const Calculator = require('./calculator');



describe('string length function', () => {
  test('return count if string length is between 1 nad 10 ', () => {
    const str = 'Microverse';
    const len = str.length;
    expect(stringLength(str)).toBe(len);
  });

  test('return error if less than 1 or greater than 10', () => {
    const test = '';
    const err = 'Error: str not between 1 and 10'
    expect(stringLength(test)).toBe(err);
  });
})

describe('reverse string function', () => {
  const str = 'Apple';

  test('returns reversed string', () => {
    const reversed = str.split('').reverse().join('');
    expect(reverseString(str)).toBe(reversed);
  });

  test('check if input is a string type', () => {
    expect(typeof reverseString(str) === 'string').toBeTruthy();
  });
})

describe('calculator class', () => {
  const operation = new Calculator(4, 20);

  describe('divide method', () => {
    test('returns correct value', () => {
      expect(operation.divide()).toBe(5);
    });
    test('returns correct value', () => {
      expect(operation.divide() !== 15).toBeTruthy();
    });
    test('returns false for incorrect value', () => {
      expect(operation.divide() === 4).toBeFalsy();
    });
  });

  describe('multiply method', () => {
		test('returns actual value', () => {
			expect(operation.multiply()).toBe(80);
		});
		test('returns actual value', () => {
			expect(operation.multiply() !== 40).toBeTruthy();
		});
		test('returns actual value', () => {
			expect(operation.multiply() === 20).toBeFalsy();
		});
	});

	describe('add method', () => {
		test('returns correct value', () => {
			expect(operation.add()).toBe(24);
		});
		test('returns correct value', () => {
			expect(operation.add() !== 2).toBeTruthy();
		});
		test('returns false for incorrect value', () => {
			expect(operation.add() === 25).toBeFalsy();
		})});

	describe('subtract method', () => {
		test('returns correct value', () => {
			expect(operation.subtract()).toBe(16);
		});
    test('returns correct value', () => {
			expect(operation.subtract() !== 4).toBeTruthy();
		});
		test('returns false for incorrect value', () => {
			expect(operation.subtract() === 20).toBeFalsy();
		});
	});
});

describe('capitalize string fuunction', () => {
  const str = 'apple'
	test('should capitalize the first character of a string', () => {
		expect(capitalize(str)).toBe('Apple');
	});
	test('return a string', () => {
		expect(typeof capitalize(str) === 'string').toBeTruthy();
	});
	test('should capitalize the first character of a string', () => {
		expect(capitalize(str)).not.toBe('APPle');
	});
});