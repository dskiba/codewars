import { domainName } from './domainName';

describe('domainName', () => {
  it('domainName to get domain name from url with two slash', () => {
    const url = 'http://github.com/dskiba/'
    const res = 'github'
    expect(domainName(url)).toEqual(res)
  });

  it('can get domain name from www between com', () => {
    const url = 'http://www.zombie-bites.com'
    const res = 'zombie-bites'
    expect(domainName(url)).toEqual(res)
  });

  it('can get domain name from www between com', () => {
    const url = 'www.xakep.ru'
    const res = 'xakep'
    expect(domainName(url)).toEqual(res)
  });
});
