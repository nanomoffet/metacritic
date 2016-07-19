/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { LessThanPipe } from './less-than.pipe';

describe('Pipe: LessThan', () => {
  it('create an instance', () => {
    let pipe = new LessThanPipe();
    expect(pipe).toBeTruthy();
  });
});
