import url from 'url';

const urlString = 'https://www.google.com/search?q=hello+world';

//URL Object
const urlObj = new URL(urlString);

console.log(urlObj.pathname);

//format()
console.log(url.format(urlObj));

//import.meta.url
console.log(import.meta.url);

//fileURLToPath()
console.log(url.fileURLToPath(import.meta.url));

console.log(urlObj.search);

const params = new URLSearchParams(urlObj.search);
console.log(params.get('q'));
params.append('limit', 5);
console.log(params);
params.delete('limit');
console.log(params);