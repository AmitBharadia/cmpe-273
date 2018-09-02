require('C:/Users/lenovo/node_modules/isomorphic-fetch');

fetch('https://data.cityofnewyork.us/api/views/kku6-nxdu/rows.json?accessType=DOWNLOAD')
.then(function(response) {
return response.json();
})
.then(function(myJson) {
console.log(JSON.stringify(myJson.data));
});