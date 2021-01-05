var request = require('request');
const discord = require('discord.js');
const client = new discord.Client();
const { bottoken, ProductSKUs, BBYAPIKEY } = require('./config.json');

var itemconfig = {
    "Product Name": "",
    "SKU": "",
    "Availability": "",
    "Price": "",
    "Time of Restock": "",
    "ATC Link": "",
    "Product Image": ""
}
var items = [];
function sleep() {
    return new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
  }
async function delay() {
    await sleep(3000);
}
ProductSKUs.forEach(sku => {
    var options = {
        'method': 'GET',
        'url': `https://api.bestbuy.com/v1/products/${sku}.json?apiKey=${BBYAPIKEY}&format=json`
    }
    request(options, (err, res) => {
        if(err) ;
        var itemdata = JSON.parse(res.body);
        itemconfig["Product Name"] = itemdata["name"];
        itemconfig["SKU"] = sku;
        itemconfig["Availability"] = itemdata["orderable"];
        itemconfig["Time of Restock"] = itemdata["itemUpdateDate"];
        itemconfig["Price"] = itemdata["regularPrice"];
        itemconfig["Product Image"] = itemdata["image"];
        itemconfig["ATC Link"] = itemdata["addToCartUrl"];
        console.log(itemconfig);
    })
    delay();
});






