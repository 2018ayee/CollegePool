//const request = require('request');

//let cheerio = require('cheerio');
//let jsonframe = require('jsonframe-cheerio');

function get_gas_price()
{
	//let $ = cheerio.load("https://gasprices.aaa.com/state-gas-price-averages/");
	//jsonframe($) // apply the plugin to the current Cheerio instance
	
	/*
	let frame = {
		"class": "numb" // CSS selector
	}
	*/	
	return 2.5;
}

function raw_price(options) {
	const DEFAULTMPG = 24.7;
	const DEFAULTCARPRICE = 20000;
	const LIFESPAN = 150000;
	const OPP_COST = 10;
	const TRAFFICADJUST = 1.2;
	/****
	options = {
		"distance": distance,
		"capacity": capacity,
		"duration": duration
	}
	//duration in seconds
	***/
	var dist = options['distance'];
	var dur = options['duration'];
	var mpg = DEFAULTMPG; //for coding in different mpg's in the future
	var car_price = DEFAULTCARPRICE; // for coding in different car prices in the future
	var gas_price = 1.0*dist/mpg*get_gas_price();
	var depreciation = 1.0*car_price/LIFESPAN*dist;
	var labor = 1.0*OPP_COST/3600*dur*TRAFFICADJUST;
	console.log(gas_price+"+"+depreciation+"+"+labor);
	return (gas_price+depreciation+labor);
	//return raw_price;


}

function price_model(options) {
	/********
	INSERT PRICE MODEL HERE
	********/
	var capacity = options['capacity']
	var true_cost = 1.0*raw_price(options)/capacity;
	var max_cost = 1/6*options['distance'];
	/*
	if(max_cost<true_cost)
		true_cost = max_cost;
	*/
	return ("$"+(true_cost).toFixed(2)); //FORMULA

}



module.exports = function(options) {
	console.log("enter pricing.js");
	return price_model(options);
}