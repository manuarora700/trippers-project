/* eslint-disable */

const locations = JSON.parse(document.getElementById('map').dataset.locations);
console.log('Hello from the client side bruh');
//  Doing this without the ajax api calls to the database (fetch) because we have the tour object in tour.pug, lets take location from there into a string and use it. Simple.

mapboxgl.accessToken =
  'pk.eyJ1IjoibWFudWFyb3JhIiwiYSI6ImNrYmF1OHc0MzByY2wyeG84aW9ibGhkaWEifQ.QyJLhgpHCc3fTXX_o9MWuQ';
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/manuarora/ckbaudevn00w51itat43mxmag',
  scrollZoom: false
  // center: [75.7873, 26.9124],
  // zoom: 4
});

const bounds = new mapboxgl.LngLatBounds();

locations.forEach(loc => {
  // Create marker
  const el = document.createElement('div');
  el.className = 'marker';

  // Add marker
  new mapboxgl.Marker({
    element: el,
    anchor: 'bottom'
  })
    .setLngLat(loc.coordinates)
    .addTo(map);
  // Add popup

  new mapboxgl.Popup({
    offset: 30
  })
    .setLngLat(loc.coordinates)
    .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
    .addTo(map);

  // Extends map bounds to include the current locatrion
  bounds.extend(loc.coordinates);
});

map.fitBounds(bounds, {
  padding: {
    top: 200,
    bottom: 150,
    left: 100,
    right: 100
  }
});
