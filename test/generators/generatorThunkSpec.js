import '../test-helper/testUtils';
import { expect } from 'chai';
import sinon from 'sinon';
import { generatorThunk } from '../../src/FactoryGirl';
import DummyFactoryGirl from '../test-helper/DummyFactoryGirl';
import DummyGenerator from '../test-helper/DummyGenerator';
import asyncFunction from '../test-helper/asyncFunction';

describe('generatorThunk', function () {
  it('returns a function', function () {
    const generatorFunc = generatorThunk({}, DummyGenerator);
    expect(generatorFunc).to.be.a('function');
  });

  describe('returned function', function () {
    const factory = new DummyFactoryGirl();
    const generatorFunc = sinon.spy(generatorThunk(factory, DummyGenerator));

    it(
      'passes arguments to Generator',
      asyncFunction(async function () {
        await generatorFunc(1, 2, 3);
        expect(generatorFunc).to.have.been.calledWith(1, 2, 3);
      }),
    );

    it(
      'resolves to generator#generate value',
      asyncFunction(async function () {
        const valueFunction = await generatorFunc();
        const value = valueFunction();
        expect(value).to.be.equal('hello');
      }),
    );
  });
});
