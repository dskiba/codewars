// Write a function that when given a URL as a string,
// parses out just the domain name and returns it as a string.
// For example:
//
// domainName("http://github.com/carbonfive/raygun") == "github"
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") == "cnet"

/**
 * @param {string} url
 */
export const domainName = (url) => {
  const urlParts = url
    .replace('http://', '')
    .replace('https://', '')
    .replace('www.', '')
    .split('.');
  return urlParts[0]
}
