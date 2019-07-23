const request = require('request');

const DEFAULTMPG = 24.7;
function get_gas_price()
{
	return 1;
}

function raw_price(options) {
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
	return raw_price


}

function price_model(raw_price) {
	/********
	INSERT PRICE MODEL HERE
	********/
	return raw_price * 1.0; //FORMULA

}



module.exports = function(options) {
	return price_model(options);
}