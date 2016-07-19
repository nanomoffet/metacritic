/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { GroupByPipe } from './group-by.pipe';

describe('Pipe: GroupBy', () => {
  it('create an instance', () => {
    let pipe = new GroupByPipe();
    expect(pipe).toBeTruthy();
  });
});
