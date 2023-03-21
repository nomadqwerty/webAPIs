// connection
// console.log(window.navigator.connection);

// // cookie enabled
// console.log(window.navigator.cookieEnabled);

// add cookie
// add cooking from document object. the cookie property represents a cookie store where data is stored for a time beign.
// create cookie,
document.cookie = "key=value; expires=60*60*24*30; path=/; secure:false;  ";
document.cookie = "name=text; expires=60*60*24*30; path=/; secure:false; ";

// get cookie
console.log(document.cookie.split(";"));

const previousDay = Date.now() - 151200000;
console.log(previousDay);
// delete cookie:
document.cookie = `name=; expires=Thu, 01 Jan 1970T00:00:00Z; path=/; secure:false; `;
console.log(document.cookie);
///// experimental cookie store.!!!
// execute this with axios, to set jwt sent from node server.
// window.cookieStore.onchange = (e) => {
//   console.log(e);
// };

// window.cookieStore
//   .set({
//     name: "nameOfCookie",
//     value: "dat the key holds",
//     expires: "Thu, 01 Jan 1970 00:00:00 GMT",
//     domain: "127.0.0.1",
//   })
//   .then(() => {
//     console.log("cookie set");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// window.cookieStore.get("nameOfCookie").then((val) => console.log(val));

// // get all cookies set
// window.cookieStore.getAll().then((cookies) => {
//   console.log(cookies);
// });
