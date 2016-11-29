import * as chai from 'chai';
import { HelloWorld } from '../main';

let expect = chai.expect;

describe("Testing hello world", () => {

  it('should return a string', () => {
    expect( HelloWorld("TypeScript") ).is.a('string');
  });

});

