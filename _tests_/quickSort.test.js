'use strict';

const quickSort = require('./quickSort.js');

describe(quickSort, () => {
    it('A divide & conquer style sort algorythm that sorts an array of intergers starting from a pivot point.', () => {
    let str = quickSort([8,4,23,16,15]);
    expect(str).toBe([4,8,15,16,23]);
  }
    )});
