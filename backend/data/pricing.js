//const request = require('request');

let cheerio = require('cheerio');
let jsonframe = require('jsonframe-cheerio');

function get_gas_price()
{
	//let $ = cheerio.load("https://gasprices.aaa.com/state-gas-price-averages/");
	//jsonframe($) // apply the plugin to the current Cheerio instance
	
	/*
	let frame = {
		"class": "numb" // CSS selector
	}
	*/	
	return 1;
}

function raw_price(options) {
	const DEFAULTMPG = 24.7;
	/****
	options = {
		start: startadr,
		end: endadr
	}
	***/
	//var start = options.start;
	//var end = options.end;
	var dist = 1;//req("./distance")(options);
	var mpg = DEFAULTMPG; //for coding in different mpg's in the future
	var raw_price = dist/get_gas_price()*1.0*mpg;
	return raw_price;


}

function price_model(options) {
	/********
	INSERT PRICE MODEL HERE
	********/
	return (raw_price(options) * 1.0).toString(); //FORMULA

}



module.exports = function(options) {
	console.log("enter pricing.js");
	return price_model(options);
}