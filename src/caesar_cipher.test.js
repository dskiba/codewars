import { caesar_cipher } from './caesar_cipher';


describe('caesar_cipher', () => {
  it('caesar_cipher cipher string', () => {
    const u = 'I should have known that you would have a perfect answer for me!!!'
    const v = ['J vltasl rlhr ', 'zdfog odxr ypw', ' atasl rlhr p ', 'gwkzzyq zntyhv', ' lvz wp!!!']
    expect(caesar_cipher(u, 1)).toEqual(v)
  });
});
