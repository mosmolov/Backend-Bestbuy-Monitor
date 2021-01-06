#  Backend BestBuy Monitor

###  Setup: 

* Download the code from this repository: 
  * Method 1: Click the green `Code` button and click `Download Zip`  
  * Method 2: Cloning the Github repository. 
 * Once installed, navigate to the folder with the code in your terminal and install these packages: 
	* Discord: `npm i discord.js`
	* Requests: `npm i request`
	* *If you do not have node installed, click [here]()!*
* Once everything is installed head over to the `config.json` file and input all the missing fields. 
	* Product SKUs: The numerical ID of the product you want to monitor 
		* This can be found at the end of the product's URL - ex: https://www.bestbuy.com/site/apple-10-2-inch-ipad-latest-model-with-wi-fi-32gb-space-gray/5199701.p?skuId=5199701 - The SKU you would use is the number following the `?skuId=` in the URL. 
	* BestBuy API Key: To obtain an API key, please go to this [website](https://developers.bestbuy.com/) and sign up to recieve a key. 
	* Webhook ID and Token: Use this [reference](https://github.com/Akizo96/de.isekaidev.discord.wbbBridge/wiki/How-to-get-Webhook-ID-&-Token) if you need help to obtain your ID and token. 
* Once everything is in place, in your terminal run the command `node .` to start the monitor! 

---

###### For any help/concerns, you can reach me on Discord - *mozzy#1000* or @cardecline on [Twitter!](https://twitter.com/cardecline)
