var request = require('request');
const Discord = require('discord.js');
const { ProductSKUs, BBYAPIKEY, webhookid,webhooktoken } = require('./config.json');
setInterval(function scrape(){
    ProductSKUs.forEach(sku => {
    const options = {
        'method': 'GET',
        'url': `https://api.bestbuy.com/v1/products/${sku}.json?apiKey=${BBYAPIKEY}&format=json`
    }
    request(options, (err, res) => {
        var date = new Date();
        console.log(`Request Sent Successfully at ${date}`);
        if(err) throw new Error(err);
        var itemdata = JSON.parse(res.body);
        if(itemdata["orderable"] != 'SoldOut' && itemdata["orderable"] != undefined){
            const embed = new Discord.MessageEmbed()
                            .setThumbnail(itemdata["image"])
                            .setFooter(`Restocked at ${itemdata["itemUpdateDate"]}`)
                            .setTitle(`${itemdata["name"]}`)
                            .setTimestamp()
                            .addField('SKU', sku, true)
                            .addField('Price',itemdata["regularPrice"], true)
                            .addField('Important Links',`**[ATC](${itemdata["addToCartUrl"]})** - **[Product](${itemdata['url']})**`);
            const hook = new Discord.WebhookClient(webhookid, webhooktoken);
            hook.send(embed);                
        }
        /*itemdata["name"];
        itemdata["orderable"];
        itemdata["itemUpdateDate"];
        itemdata["regularPrice"];
        itemdata["image"];
        itemdata["addToCartUrl"];*/
    })
    })
}, 3000);

    






