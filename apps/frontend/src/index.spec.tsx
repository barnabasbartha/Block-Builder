import { foo } from '@frontend/index';

describe('foo', () => {
  it('returns bar', () => {

    const result = foo();

    expect(result).toEqual('bar');
  });

});

