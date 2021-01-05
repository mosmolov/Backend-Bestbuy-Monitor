var request = require('request');

const { bottoken, ProductSKUs, BBYAPIKEY } = require('./config.json');
var options = {
    'method': 'GET',
    'url': `https://api.bestbuy.com/v1/products/${sku1}.json?apiKey=${apikey}&format=json-pretty`,
}
request(options, (err, res) => {
    let productinfo = JSON.parse(res.body); 
    console.dir(productinfo)
})
  
