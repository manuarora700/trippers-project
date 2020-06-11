/* eslint-disable */

console.log('Hello from the client side bruh');
//  Doing this without the ajax api calls to the database (fetch) because we have the tour object in tour.pug, lets take location from there into a string and use it. Simple.

const locations = JSON.parse(document.getElementById('map').dataset.locations);
console.log(locations);
