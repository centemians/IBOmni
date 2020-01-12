// const APIBASE = 'https://jsonplaceholder.typicode.com';
const APIBASE = 'https://c238e302.ngrok.io';

function apiEndpoint(path) {
  return `${APIBASE}${path}`;
}

export async function apiRequest(method, path) {
  const response = await fetch(apiEndpoint(path), {method});
  const json = await response.json();
  return json;
}

// // const APIBASE = 'https://jsonplaceholder.typicode.com';
// const APIBASE = 'https://c238e302.ngrok.io';

// function apiEndpoint(path) {
//   return `${APIBASE}${path}`;
// }

// export async function apiRequest(method, path, body) {
//   const response = await fetch(apiEndpoint(path), {
//     method,
//     body: JSON.stringify(body),
//   });
//   const json = await response.json();
//   return json;
// }
