"use strict";

import { average } from '../src/js/average.js';

describe('average function', () => {
    it('should return the average when given an array of non-negative numbers', () => {
      const array = [1, 2, 3, 4, 5];
      const result = average(array);
      expect(result).toStrictEqual(3);
    });

    // Falsy when the array is not an array
    it("should falsy when array is not an array", () => {
        const array = 6;
        const result = average(array);
        expect(result).toBeFalsy();
    });

    // Falsy if the array is empty.
    it('should falsy when given an empty array', () => {
        const array = [];
        const result = average(array);
        expect(result).toBeFalsy();
    });

    // Falsy when the array contains non-numeric elements
    it('should falsy when the array contains non-numeric elements', () => {
        const array = [1, 2, '3', 4, 5];
        const result = average(array);
        expect(result).toBeFalsy();
    });

    // Falsy when the array contains negative number
    it('should falsy when the array contains negative number', () => {
        const array = [1, 2, -3, 4, 5];
        const result = average(array);
        expect(result).toBeFalsy();
    });
});