require("./runtime.js");require("./vendor.js");module.exports =
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["bundle"],{

/***/ "../$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../backend/data/pricing.js":
/***/ (function(module, exports) {

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

/***/ }),

/***/ "./app.css":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports = module.exports = __webpack_require__("../node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
exports.i(__webpack_require__("../node_modules/css-loader/dist/cjs.js?!../node_modules/nativescript-theme-core/css/core.light.css"), "");

// Module
exports.push([module.i, "/*\nIn NativeScript, the app.css file is where you place CSS rules that\nyou would like to apply to your entire application. Check out\nhttp://docs.nativescript.org/ui/styling for a full list of the CSS\nselectors and properties you can use to style UI components.\n\n/*\nIn many cases you may want to use the NativeScript core theme instead\nof writing your own CSS rules. For a full list of class names in the theme\nrefer to http://docs.nativescript.org/ui/theme.\n*/\n\nLabel {\n\ttext-align: center;\n}", ""]);

;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './app.css' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./app/add-card-payment/add-card-payment.component.css":
/***/ (function(module, exports) {

module.exports = "/* Add mobile styles for the component here.  */\n.close {\n\tmargin: 10;\n\tfont-size: 28;\n\twidth: 48;\n\theight: 48;\n}\n\n.close-button-container {\n\tposition: absolute;\n\tleft: 0;\n}\n\n/* styles from payments.component.css */\n\n#form {\n    margin: auto;\n    width: 600px;\n    height: 400px;\n    background-color: #ffffff;\n    position: relative;\n    top: 30px;\n    border-radius: 4px;\n    box-shadow: 0 1px 4px 0 rgba(0,0,0,0.37);\n}\n\n#payment-form {\n    margin: auto;\n    width: 600px;\n    height: 400px;\n    background-color: #ffffff;\n    position: relative;\n    top: 30px;\n    border-radius: 4px;\n    box-shadow: 0 1px 4px 0 rgba(0,0,0,0.37);\n    display: none;\n}\n\n#card-form {\n    margin: auto;\n    width: 400px;\n    background-color: #580968;\n    position: relative;\n    top: 25%;\n    box-shadow: 0 1px 4px 0 rgba(0,0,0,0.37);\n    font-weight: 400;\n    z-index: 1;\n}\n\n#paypal-form {\n    margin: auto;\n    width: 400px;\n    height: 200px;\n    background-color: #ffffff;\n    position: relative;\n    top: 25%;\n    box-shadow: 0 1px 4px 0 rgba(0,0,0,0.37);\n    font-weight: 400;\n    z-index: 1;\n}\n\n#venmo-form {\n    margin: auto;\n    width: 400px;\n    height: 200px;\n    background-color: #ffffff;\n    position: relative;\n    top: 25%;\n    box-shadow: 0 1px 4px 0 rgba(0,0,0,0.37);\n    font-weight: 400;\n    z-index: 1;\n}\n\n#error-form {\n    margin: auto;\n    width: 400px;\n    height: 200px;\n    background-color: #ffffff;\n    position: relative;\n    top: 25%;\n    box-shadow: 0 1px 4px 0 rgba(0,0,0,0.37);\n    font-weight: 400;\n    z-index: 1;\n}\n\n#edit-form {\n    margin: auto;\n    width: 400px;\n    height: 200px;\n    background-color: #ffffff;\n    position: relative;\n    top: 25%;\n    box-shadow: 0 1px 4px 0 rgba(0,0,0,0.37);\n    font-weight: 400;\n    z-index: 1;\n}\n\n.payment-methods {\n\toverflow: hidden;\n    width: 300px;\n    margin: auto;\n    margin-left: 40px;\n}\n\n#modal-payment-methods {\n\tmargin-left: 24px;\n}\n\n#paypal-header-container {\n\tbackground-color: #580968;\n}\n\n#error-header-container {\n\tdisplay: none;\n\tbackground-color: #890000;\n}\n\n#edit-header-container {\n\tbackground-color: #580968;\n}\n\n.colored-header {\n\tcolor: white;\n\tfont-weight: 400;\n}\n\n#method-information-text {\n\tmargin-left: 40px;\n\tmargin-top: 32px;\n\tfont-size: 16px;\n}\n\n.payment-footer-button{\n    display: inline-block;\n    background-color: #ffffff;\n    color: #ac00e6;\n    border: none;\n    outline: none;\n    text-align: center;\n    margin-left: 34px;\n    margin-bottom: 5px;\n}\n\n#paypal-button {\n\twidth: 350px;\n\tmargin: auto;\n\tmargin-top: 32px;\n}\n\n#add-card-button {\n\tfloat: right;\n\tmargin-right: 34px;\n\tdisplay: none;\n}\n\n#remove-payment-button {\n\tfloat: right;\n\tmargin-right: 34px;\n}\n\n.plus-sign {\n\tvertical-align: middle;\n\tfont-size: 30px;\n\tmargin-right: 7px;\n\tcursor: pointer;\n}\n\n.payment-footer-text {\n\tvertical-align: middle;\n\tline-height: 42px;\n\tfont-weight: 400;\n\tfont-size: 13px;\n\tcursor: pointer;\n}\n\n.payment-footer-text:hover {\n\ttext-decoration: underline;\n}\n\n.payments-bottom-add-container {\n\tposition: absolute;\n\twidth: 100%;\n\tbottom: 0;\n}\n\n/* Other modal styling in styles.css */\n.close-modal {\n\tfont-size: 24px;\n\tmargin-right: 20px;\n\tcursor: pointer;\n}\n\n/*--------------------\nShared Variables\n--------------------*/\n/*--------------------\nGeneral\n--------------------*/\nhtml,\nbody {\n  font-size: 100%;\n  height: 100%;\n  color: #282c37;\n  font-family: sans-serif;\n  padding: 0;\n  margin: 0;\n}\n\n.form-container {\n  display: flex;\n  background-color: #EEE;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  flex-direction: column;\n  border: 1em solid #fff;\n  box-sizing: border-box;\n  position: relative;\n}\n@media (max-width: 476px) {\n  .form-container {\n    border: none;\n  }\n}\n\n.cardinfo-wrapper {\n  display: flex;\n  justify-content: space-around;\n}\n\n.bg-illustration {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  z-index: 0;\n}\n.bg-illustration svg {\n  width: 100%;\n}\n\n.card-shape, #my-sample-form.visa, #my-sample-form.master-card, #my-sample-form.maestro, #my-sample-form.american-express, #my-sample-form.discover, #my-sample-form.unionpay, #my-sample-form.jcb, #my-sample-form.diners-club {\n  border-radius: 6px;\n  padding: 2em 2em 1em;\n}\n@media (max-width: 476px) {\n  .card-shape, #my-sample-form.visa, #my-sample-form.master-card, #my-sample-form.maestro, #my-sample-form.american-express, #my-sample-form.discover, #my-sample-form.unionpay, #my-sample-form.jcb, #my-sample-form.diners-club {\n    padding: 2em 1.5em 1em;\n  }\n}\n\n#payment-card-form {\n  background-color: #FFF;\n  /*box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12);*/\n  padding: 1em 3em 3em;\n  margin-bottom: 2em;\n/*  transition: all 600ms cubic-bezier(0.2, 1.3, 0.7, 1);\n  -webkit-animation: cardIntro 500ms cubic-bezier(0.2, 1.3, 0.7, 1);\n          animation: cardIntro 500ms cubic-bezier(0.2, 1.3, 0.7, 1);*/\n  /*z-index: 1;*/\n}\n#my-sample-form:hover {\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.06);\n}\n@media (max-width: 476px) {\n  #my-sample-form {\n    box-sizing: border-box;\n    padding: 7em 2em 2em;\n    width: 100%;\n  }\n}\n#my-sample-form.visa {\n  color: #fff;\n  background-color: #0D4AA2;\n}\n#my-sample-form.master-card {\n  color: #fff;\n  background-color: #363636;\n  background: linear-gradient(115deg, #d82332, #d82332 50%, #f1ad3d 50%, #f1ad3d);\n}\n#my-sample-form.maestro {\n  color: #fff;\n  background-color: #363636;\n  background: linear-gradient(115deg, #009ddd, #009ddd 50%, #ed1c2e 50%, #ed1c2e);\n}\n#my-sample-form.american-express {\n  color: #fff;\n  background-color: #007CC3;\n}\n#my-sample-form.discover {\n  color: #fff;\n  background-color: #ff6000;\n  background: linear-gradient(#d14310, #f7961e);\n}\n#my-sample-form.unionpay, #my-sample-form.jcb, #my-sample-form.diners-club {\n  color: #fff;\n  background-color: #363636;\n}\n\n.cardinfo-label {\n  display: block;\n  font-size: 11px;\n  margin-bottom: 0.5em;\n  text-transform: uppercase;\n}\n\n.cardinfo-exp-date {\n  margin-right: 1em;\n  width: 100%;\n}\n\n.cardinfo-cvv {\n  width: 100%;\n}\n\n.cardinfo-card-number {\n  position: relative;\n}\n\n#cardImage {\n  position: absolute;\n  top: 2em;\n  right: 1em;\n  width: 44px;\n  height: 28px;\n  background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/346994/card_sprite.png);\n  background-size: 86px 458px;\n  border-radius: 4px;\n  background-position: -100px 0;\n  background-repeat: no-repeat;\n  margin-bottom: 1em;\n}\n#cardImage.visa {\n  background-position: 0 -398px;\n}\n#cardImage.master-card {\n  background-position: 0 -281px;\n}\n#cardImage.american-express {\n  background-position: 0 -370px;\n}\n#cardImage.discover {\n  background-position: 0 -163px;\n}\n#cardImage.maestro {\n  background-position: 0 -251px;\n}\n#cardImage.jcb {\n  background-position: 0 -221px;\n}\n#cardImage.diners-club {\n  background-position: 0 -133px;\n}\n\n/*--------------------\nInputs \n--------------------*/\n.input-wrapper {\n  border-radius: 2px;\n  background: rgba(255, 255, 255, 0.86);\n  height: 2.75em;\n  border: 1px solid #eee;\n  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.06);\n  padding: 5px 10px;\n  margin-bottom: 1em;\n}\n\n.cardinfo-card-number,\n.cardinfo-exp-date,\n.cardinfo-cvv {\n  transition: -webkit-transform 0.3s;\n  transition: transform 0.3s;\n  transition: transform 0.3s, -webkit-transform 0.3s;\n}\n\n.braintree-hosted-fields-focused {\n  border-color: #5db6e8;\n}\n\n.braintree-hosted-fields-invalid {\n  border-color: #E53A40;\n/*  -webkit-animation: shake 500ms cubic-bezier(0.2, 1.3, 0.7, 1) both;\n          animation: shake 500ms cubic-bezier(0.2, 1.3, 0.7, 1) both;*/\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  -webkit-perspective: 1000px;\n          perspective: 1000px;\n}\n\n.loader {\n  border: 16px solid #f3f3f3; /* Light grey */\n  border-top: 16px solid #ac00e6; /* Purple */\n  border-radius: 50%;\n  width: 120px;\n  height: 120px;\n  animation: spin 2s linear infinite;\n  margin: auto;\n}\n\n#loading-circle {\n  top: 12%;\n  left: 30%;\n  position: absolute;\n}\n\n#list-loading-circle {\n\tmargin-top: 50px;\n}\n\n/*--------------------\nAnimations\n--------------------*/\n@keyframes spin {\n  0% { transform: rotate(0deg); }\n  100% { transform: rotate(360deg); }\n}\n\n@-webkit-keyframes shake {\n  10%,\n  90% {\n    -webkit-transform: translate3d(-1px, 0, 0);\n            transform: translate3d(-1px, 0, 0);\n  }\n  20%,\n  80% {\n    -webkit-transform: translate3d(1px, 0, 0);\n            transform: translate3d(1px, 0, 0);\n  }\n  30%,\n  50%,\n  70% {\n    -webkit-transform: translate3d(-3px, 0, 0);\n            transform: translate3d(-3px, 0, 0);\n  }\n  40%,\n  60% {\n    -webkit-transform: translate3d(3px, 0, 0);\n            transform: translate3d(3px, 0, 0);\n  }\n}\n@keyframes shake {\n  10%,\n  90% {\n    -webkit-transform: translate3d(-1px, 0, 0);\n            transform: translate3d(-1px, 0, 0);\n  }\n  20%,\n  80% {\n    -webkit-transform: translate3d(1px, 0, 0);\n            transform: translate3d(1px, 0, 0);\n  }\n  30%,\n  50%,\n  70% {\n    -webkit-transform: translate3d(-3px, 0, 0);\n            transform: translate3d(-3px, 0, 0);\n  }\n  40%,\n  60% {\n    -webkit-transform: translate3d(3px, 0, 0);\n            transform: translate3d(3px, 0, 0);\n  }\n}\n\n"

/***/ }),

/***/ "./app/add-card-payment/add-card-payment.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <ngx-braintree \n  [getClientToken]=\"getClientToken()\" \n  [createPurchase]=\"createPurchaseFunction\" \n  (paymentStatus)=\"onPaymentStatus($event)\">\n</ngx-braintree> -->\n\n<StackLayout #form>\n\t<StackLayout class=\"close-button-container\" orientation=\"horizontal\">\n\t\t<Label text=\"&times;\" class=\"close\" (tap)=\"close()\"></Label>\n\t</StackLayout>\n\n\t<StackLayout class=\"cardinfo-card-number\">\n\t\t<Label text=\"Card Number\" class=\"cardinfo-label\"></Label>\n\t\t<StackLayout #cardNumber class=\"input-wrapper\"></StackLayout>\n\t\t<StackLayout #cardImage></StackLayout>\n\t</StackLayout>\n\n\t<StackLayout class=\"cardinfo-wrapper\">\n\t\t<StackLayout class=\"cardinfo-exp-date\">\n\t\t\t<Label text=\"Valid Thru\" class=\"cardinfo-label\"></Label>\n\t\t\t<StackLayout #expirationDate class=\"input-wrapper\"></StackLayout>\n\t\t</StackLayout>\n\n\t\t<StackLayout class=\"cardinfo-cvv\">\n\t\t\t<Label text=\"CVV\" class=\"cardinfo-label\"></Label>\n\t\t\t<StackLayout #cvv class=\"input-wrapper\"></StackLayout>\n\t\t</StackLayout>\n\t</StackLayout>\n\n\t<Button text=\"Add\" class=\"btn btn-primary\" #submitButton></Button>\n</StackLayout>\n<!-- \t\t<form id=\"payment-card-form\" class=\"scale-down\">\n\t    <div class=\"cardinfo-card-number\">\n\t      <label class=\"cardinfo-label\" for=\"card-number\">Card Number</label>\n\t      <div class='input-wrapper' id=\"card-number\"></div>\n\t      <div id=\"card-image\"></div>\n\t    </div>\n\n\t    <div class=\"cardinfo-wrapper\">\n\t      <div class=\"cardinfo-exp-date\">\n\t        <label class=\"cardinfo-label\" for=\"expiration-date\">Valid Thru</label>\n\t        <div class='input-wrapper' id=\"expiration-date\"></div>\n\t      </div>\n\n\t      <div class=\"cardinfo-cvv\">\n\t        <label class=\"cardinfo-label\" for=\"cvv\">CVV</label>\n\t        <div class='input-wrapper' id=\"cvv\"></div>\n\t      </div>\n\t    </div>\n\t  </form> -->"

/***/ }),

/***/ "./app/add-card-payment/add-card-payment.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCardPaymentComponent", function() { return AddCardPaymentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_angular_directives_dialogs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/nativescript-angular/directives/dialogs.js");
/* harmony import */ var nativescript_angular_directives_dialogs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_directives_dialogs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _payment_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/payment.service.ts");
/* harmony import */ var tns_core_modules_data_observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/tns-core-modules/data/observable/observable.js");
/* harmony import */ var tns_core_modules_data_observable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_data_observable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/nativescript-angular/router/index.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';
// import { NgxBraintreeModule } from 'ngx-braintree';


// require("nativescript-nodeify");
// import * as Nodeify from 'nativescript-nodeify';
// const braintree = require('braintree-web');
var AddCardPaymentComponent = /** @class */ (function () {
    function AddCardPaymentComponent(params, paymentService, router) {
        this.params = params;
        this.paymentService = paymentService;
        this.router = router;
        this.user = {
            payment_id: '507305706'
        };
        this.opts = {
            amount: null,
            collectDeviceData: true,
            requestThreeDSecureVerification: false,
        };
        this.clientToken = '';
    }
    // token = this.paymentService.getIdToken(this.user.payment_id);
    AddCardPaymentComponent.prototype.ngOnInit = function () {
        //  	braintree.client.create({
        //   authorization: 'sandbox_9qsbyyq8_wmc3v88r36cbxjjz'
        // }, function (clientErr, clientInstance) {
        //   // Stop if there was a problem creating the client.
        //   // This could happen if there is a network error or if the authorization
        //   // is invalid.
        //   if (clientErr) {
        //     console.error('Error creating client:', clientErr);
        //     return;
        //   }
        // });
    };
    AddCardPaymentComponent.prototype.createViews = function () {
        var form = this.formLayout.nativeElement;
        var submit = this.sB.nativeElement;
        var expirationDate = this.expirationText.nativeElement;
        var cardNumber = this.numberText.nativeElement;
        var cvv = this.cvvText.nativeElement;
        var cardImage = this.cardLayout.nativeElement;
        submit.isEnabled = false;
    };
    AddCardPaymentComponent.prototype.close = function () {
        this.params.closeCallback();
    };
    AddCardPaymentComponent.prototype.getClientToken = function () {
        var token = new tns_core_modules_data_observable__WEBPACK_IMPORTED_MODULE_3__["Observable"]();
        token.set('Authorization', 'sandbox_9qsbyyq8_wmc3v88r36cbxjjz');
        return token;
    };
    AddCardPaymentComponent.prototype.createPurchaseFunction = function (nonce, chargeAmount) {
        return this.paymentService.addPaymentMethodToUser(this.user.payment_id, nonce);
    };
    AddCardPaymentComponent.prototype.onPaymentStatus = function (event) {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("submitButton", { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], AddCardPaymentComponent.prototype, "sB", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("expirationDate", { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], AddCardPaymentComponent.prototype, "expirationText", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("cardNumber", { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], AddCardPaymentComponent.prototype, "numberText", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("cvv", { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], AddCardPaymentComponent.prototype, "cvvText", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("form", { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], AddCardPaymentComponent.prototype, "formLayout", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("cardImage", { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], AddCardPaymentComponent.prototype, "cardLayout", void 0);
    AddCardPaymentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-card-payment',
            template: __webpack_require__("./app/add-card-payment/add-card-payment.component.html"),
            styles: [__webpack_require__("./app/add-card-payment/add-card-payment.component.css")]
        }),
        __metadata("design:paramtypes", [nativescript_angular_directives_dialogs__WEBPACK_IMPORTED_MODULE_1__["ModalDialogParams"], _payment_service__WEBPACK_IMPORTED_MODULE_2__["PaymentService"], nativescript_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterExtensions"]])
    ], AddCardPaymentComponent);
    return AddCardPaymentComponent;
}());



/***/ }),

/***/ "./app/add-modal/add-modal.component.css":
/***/ (function(module, exports) {

module.exports = "/* Add mobile styles for the component here.  */\n.page {\n  /*align-items: center;*/\n  flex-direction: column;\n}\n\n.form {\n  margin-left: 30;\n  margin-right: 30;\n  flex-grow: 2;\n  vertical-align: middle;\n}\n\n.close {\n\tmargin: 10;\n\tfont-size: 28;\n\twidth: 48;\n\theight: 48;\n}\n\n.close-button-container {\n\tposition: absolute;\n\tleft: 0;\n}\n\n.header-label {\n\tmargin-top: 60;\n\tmargin-bottom: 0;\n\tfont-size: 20;\n}\n\n.header-label-2 {\n\tfont-size: 20;\n}\n\n.header-label-3 {\n\tmargin-top: 14;\n\tmargin-left: 16;\n\tmargin-right: 16;\n\tfont-size: 18;\n}\n\n.header-label-4 {\n\tfont-size: 18;\n\tmargin-top: 14;\n}\n\n.riding-label {\n\tfont-weight: 700;\n\tcolor: #ac00e6;\n}\n\n.driving-label {\n\tcolor: #5c687c;\n}\n\n.switch-container {\n\ttext-align: center;\n}\n\n.switch {\n\tcolor: #ac00e6;\n\tbackground-color: #cd94e0;\n}\n\n.submit-btn {\n\tbackground-color: #ac00e6;\n\tmargin-top: 20;\n}\n\n.bold {\n\tfont-weight: 700;\n}\n\n.start-field {\n\tmargin-top: 14;\n}\n\n.activity-indicator {\n  color: #ac00e6;\n  vertical-align: center;\n  margin-top: 47%;\n}"

/***/ }),

/***/ "./app/add-modal/add-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<StackLayout>\n\t<ActivityIndicator #activityIndicator busy=\"true\" width=\"40\" height=\"40\" class=\"activity-indicator\"></ActivityIndicator>\n\t<ScrollView height=\"100%\">\n\t<FlexboxLayout class=\"page\" #addContainer>\n\t\t<StackLayout class=\"close-button-container\" orientation=\"horizontal\">\n\t\t\t<Label text=\"&times;\" class=\"close\" (tap)=\"close('cancel')\"></Label>\n\t\t</StackLayout>\n\n\n\t\t<StackLayout class=\"form\">\n\t\t\t<Label text=\"I am...\" class=\"header-label-2 bold\"></Label>\n\n\t\t  <StackLayout class=\"input-field switch-container\" orientation=\"horizontal\" horizontalAlignment=\"center\">\n\t\t  \t<Label text=\"Driving\" class=\"header-label-3 driving-label\" #drivingLabel></Label>\n\t\t  \t<Switch checked=\"true\" (checkedChange)=\"onCheckedChange($event)\" class=\"m-15 switch\"></Switch>\n\t\t  \t<Label text=\"Riding\" class=\"header-label-3 riding-label\" #ridingLabel></Label>\n\t\t  </StackLayout>\n\n\t\t  <Label text=\"Where?\" class=\"header-label bold\"></Label>\n\t\t  <StackLayout class=\"input-field start-field\">\n<!-- \t\t    <TextField class=\"input\" autocorrect=\"false\" hint=\"Where from?\" [(ngModel)]=\"startAddress\" (textChange)=\"startAutocomplete()\" (tap)=\"showModal('start')\" required></TextField> -->\n\t\t\t<Label text=\"{{ startLabel }}\" class=\"header-label-3\" (tap)=\"showModal('start')\"></Label>\n\t\t    <StackLayout class=\"hr-light\"></StackLayout>\n\t\t  </StackLayout>\n\n\t\t  <StackLayout class=\"input-field\">\n<!-- \t\t    <TextField class=\"input\" autocorrect=\"false\" hint=\"Where to?\" [(ngModel)]=\"endAddress\" (textChange)=\"endAutocomplete()\" (tap)=\"showModal('end')\" required></TextField> -->\n\t\t\t\t<Label text=\"{{ endLabel }}\" class=\"header-label-3\" (tap)=\"showModal('end')\"></Label>\n\t\t    <StackLayout class=\"hr-light\"></StackLayout>\n\t\t  </StackLayout>\n\n\t<!-- \t  <DatePicker (loaded)=\"onPickerLoaded($event)\" (dateChange)=\"onDateChanged($event)\" \n\t(dayChange)=\"onDayChanged($event)\" (monthChange)=\"onMonthChanged($event)\" (yearChange)=\"onYearChanged($event)\" verticalAlignment=\"center\"></DatePicker> -->\n\t\t\t<Label text=\"When?\" class=\"header-label bold\"></Label>\n\n\t\t  <DatePicker (loaded)=\"onPickerLoaded($event)\" (dateChange)=\"onDateChanged($event)\" verticalAlignment=\"center\"></DatePicker>\n\n\t\t  <Label *ngIf=\"isDriving\" text=\"How many?\" class=\"header-label\"></Label>\n\t\t  <GridLayout *ngIf=\"isDriving\" class=\"m-15\" rows=\"auto\" columns=\"50 * 50\">\n\t\t\t    <Label class=\"h3\" text=\"1\" textWrap=\"true\" row=\"10\" col=\"0\"></Label>\n\t\t\t    <Slider minValue=\"1\" maxValue=\"8\" [(ngModel)]=\"capacity\" row=\"0\"\n\t\t\t     col=\"1\"></Slider>\n\t\t\t    <Label class=\"h3\" text=\"8\" textWrap=\"true\" row=\"0\" col=\"2\"></Label>\n\t\t\t</GridLayout>\n\t\t  <Label *ngIf=\"isDriving\" text=\"{{ capacity }}\" class=\"header-label-2\"></Label>\n\n\t\t  <Button text=\"Add\" class=\"btn btn-primary submit-btn\" (tap)=\"addPosting()\"></Button>\n\t\t</StackLayout>\n\t</FlexboxLayout>\n\t</ScrollView>\n</StackLayout>\n\n\n"

/***/ }),

/***/ "./app/add-modal/add-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddModalComponent", function() { return AddModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_angular_directives_dialogs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/nativescript-angular/directives/dialogs.js");
/* harmony import */ var nativescript_angular_directives_dialogs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_directives_dialogs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _posting_service_tns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/posting.service.tns.ts");
/* harmony import */ var tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/tns-core-modules/ui/page/page.js");
/* harmony import */ var tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var tns_core_modules_color__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/tns-core-modules/color/color.js");
/* harmony import */ var tns_core_modules_color__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_color__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _places_autocomplete_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./app/places-autocomplete.service.ts");
/* harmony import */ var _location_location_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./app/location/location.component.ts");
/* harmony import */ var _datatransfer_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./app/datatransfer.service.ts");
/* harmony import */ var _logincheck_service_tns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./app/logincheck.service.tns.ts");
/* harmony import */ var nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("../node_modules/nativescript-plugin-firebase/firebase.js");
/* harmony import */ var nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var tns_core_modules_ui_image_cache__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("../node_modules/tns-core-modules/ui/image-cache/image-cache.js");
/* harmony import */ var tns_core_modules_ui_image_cache__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_image_cache__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _google_maps_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./app/google-maps.service.ts");
/* harmony import */ var tns_core_modules_image_source__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("../node_modules/tns-core-modules/image-source/image-source.js");
/* harmony import */ var tns_core_modules_image_source__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_image_source__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var tns_core_modules_file_system__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("../node_modules/tns-core-modules/file-system/file-system.js");
/* harmony import */ var tns_core_modules_file_system__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_file_system__WEBPACK_IMPORTED_MODULE_14__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

















// import { GooglePlacesAutocomplete } from 'nativescript-google-places-autocomplete';
var AddModalComponent = /** @class */ (function () {
    function AddModalComponent(params, postingService, page, placesService, modal, vcRef, transferService, logincheckService, datePipe, mapService) {
        this.params = params;
        this.postingService = postingService;
        this.page = page;
        this.placesService = placesService;
        this.modal = modal;
        this.vcRef = vcRef;
        this.transferService = transferService;
        this.logincheckService = logincheckService;
        this.datePipe = datePipe;
        this.mapService = mapService;
        this.date = "now";
        this.price = "$15";
        this.capacity = "-1";
        this.user = {
            username: "2022ayee",
            id: ""
        };
        this.startLabel = "Pick start location";
        this.endLabel = "Pick end location";
        this.isDriving = false;
        this.startLocationPicked = false;
        this.endLocationPicked = false;
        this.imageSource = new tns_core_modules_image_source__WEBPACK_IMPORTED_MODULE_13__["ImageSource"]();
        this.API_KEY = "AIzaSyAITxS1jmf8PMtazRguWcAfWQxW1kPOoYg";
    }
    // googlePlacesAutocomplete = new GooglePlacesAutocomplete(this.API_KEY);
    AddModalComponent.prototype.ngOnInit = function () {
        var _this = this;
        // let addContainer = <FlexboxLayout> this.ac.nativeElement;
        //  // activityIndicator.style.visibility = 'visible';
        // addContainer.style.visibility = 'collapse';
        var activityIndicator = this.ai.nativeElement;
        activityIndicator.style.visibility = 'collapse';
        nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_9__["getCurrentUser"]().then(function (user) {
            _this.user.username = user.displayName;
            if (user.displayName == null || user.displayName == '')
                _this.user.username = user.email;
            _this.user.id = _this.logincheckService.getUser();
        });
    };
    AddModalComponent.prototype.startSelect = function (event) {
        console.log(event.srcElement);
    };
    AddModalComponent.prototype.showModal = function (type) {
        var _this = this;
        var options = {
            context: {},
            fullscreen: true,
            viewContainerRef: this.vcRef
            // animated: true,
            // transition: { name: "slideTop" }
        };
        this.transferService.setData(type);
        this.modal.showModal(_location_location_component__WEBPACK_IMPORTED_MODULE_6__["LocationComponent"], options).then(function (res) {
            if (res != null)
                if (res.start != null) {
                    _this.startLocationPicked = true;
                    _this.startLabel = 'Start location: ' + res.start;
                    _this.startPlace = res.start;
                    _this.startAddress = res.address;
                    // let sLabel = <Label> this.sl.nativeElement;
                    // sLabel.className += 'bold';
                }
                else if (res.end != null) {
                    _this.endLocationPicked = true;
                    _this.endLabel = 'End location: ' + res.end;
                    _this.endPlace = res.end;
                    _this.endAddress = res.address;
                }
                else {
                    if (type == 'start') {
                        _this.startLocationPicked = true;
                        _this.startLabel = 'Pick start location';
                    }
                    else if (type == 'end') {
                        _this.startLocationPicked = true;
                        _this.startLabel = 'Pick end location';
                    }
                }
        });
    };
    AddModalComponent.prototype.close = function (res) {
        this.params.closeCallback(res);
    };
    AddModalComponent.prototype.addPosting = function () {
        var _this = this;
        console.log("log success!");
        var addContainer = this.ac.nativeElement;
        addContainer.style.visibility = 'collapse';
        var activityIndicator = this.ai.nativeElement;
        activityIndicator.style.visibility = 'visible';
        this.mapService.getGeocodeResults(this.startPlace + ' ' + this.startAddress).subscribe(function (res) {
            _this.startLat = res.results[0].geometry.location.lat;
            _this.startLng = res.results[0].geometry.location.lng;
            _this.mapService.getGeocodeResults(_this.endPlace + ' ' + _this.endAddress).subscribe(function (res) {
                _this.endLat = res.results[0].geometry.location.lat;
                _this.endLng = res.results[0].geometry.location.lng;
                if (_this.startLocationPicked && _this.endLocationPicked) {
                    var postingsCollection = nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_9__["firestore"].collection('postings');
                    console.log(_this.startPlace);
                    console.log(_this.endPlace);
                    _this.price = __webpack_require__("../backend/data/pricing.js")({ start: _this.startPlace, end: _this.endPlace });
                    console.log(_this.price);
                    postingsCollection.add({
                        uid: _this.user.id,
                        user: _this.user.username,
                        startAddress: _this.startPlace,
                        endAddress: _this.endPlace,
                        startFormatted: _this.startAddress,
                        endFormatted: _this.endAddress,
                        date: _this.date,
                        price: _this.price,
                        capacity: _this.capacity,
                        comments: "",
                        formattedDate: _this.formattedDate,
                        startLat: _this.startLat,
                        endLat: _this.endLat,
                        startLng: _this.startLng,
                        endLng: _this.endLng
                    }).then(function (res) {
                        // console.log(res);
                        nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_9__["firestore"].collection('users').doc(_this.user.id).get().then(function (doc) {
                            var posts = doc.data().posts;
                            posts.push(res.id);
                            nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_9__["firestore"].collection('users').doc(_this.user.id).update({
                                posts: posts
                            });
                            _this.uploadMap(res.id, 'small_map.png');
                            _this.uploadMap(res.id, 'large_map.png');
                        }).catch(function (err) { });
                    }).catch(function (err) { });
                }
            });
        });
        // this.postingService.addPosting(this.user.username, this.startPlace, this.endPlace, this.date, this.price, this.capacity, "").subscribe(() => {
        //   this.close('posted');
        // });
    };
    AddModalComponent.prototype.uploadMap = function (id, uploadName) {
        var _this = this;
        var cache = new tns_core_modules_ui_image_cache__WEBPACK_IMPORTED_MODULE_11__["Cache"]();
        cache.enableDownload();
        var cachedImageSource;
        var url = this.mapService.getStaticMap(this.startPlace + " " + this.startAddress, this.endPlace + " " + this.endAddress);
        if (uploadName == 'large_map.png')
            url = this.mapService.getStaticMapLarge(this.startPlace + " " + this.startAddress, this.endPlace + " " + this.endAddress);
        // Try to read the image from the cache
        var myImage = cache.get(url);
        cache.push({
            key: url,
            url: url,
            completed: function (image, key) {
                if (url === key) {
                    cachedImageSource = _this.imageSource.setNativeSource(image);
                    var folderPath = tns_core_modules_file_system__WEBPACK_IMPORTED_MODULE_14__["knownFolders"].documents().path;
                    var fileName = uploadName;
                    var filePath = tns_core_modules_file_system__WEBPACK_IMPORTED_MODULE_14__["path"].join(folderPath, fileName);
                    var saved = _this.imageSource.saveToFile(filePath, "png");
                    if (saved) {
                        nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_9__["storage"].uploadFile({
                            // the full path of the file in your Firebase storage (folders will be created)
                            remoteFullPath: 'postings/' + id + '/maps/' + uploadName,
                            // option 1: a file-system module File object
                            localFile: tns_core_modules_file_system__WEBPACK_IMPORTED_MODULE_14__["File"].fromPath(filePath),
                            // option 2: a full file path (ignored if 'localFile' is set)
                            localFullPath: filePath,
                            // get notified of file upload progress
                            onProgress: function (status) {
                                console.log("Uploaded fraction: " + status.fractionCompleted);
                                console.log("Percentage complete: " + status.percentageCompleted);
                            }
                        }).then(function (uploadedFile) {
                            if (uploadName == 'small_map.png')
                                nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_9__["storage"].getDownloadUrl({
                                    remoteFullPath: 'postings/' + id + '/maps/small_map.png'
                                }).then(function (url) {
                                    nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_9__["firestore"].collection('postings').doc(id).update({
                                        map_url: url
                                    }).then(function () {
                                        var activityIndicator = _this.ai.nativeElement;
                                        var addContainer = _this.ac.nativeElement;
                                        activityIndicator.style.visibility = 'collapse';
                                        addContainer.style.visibility = 'visible';
                                        _this.close('posted');
                                    })
                                        .catch(function (err) {
                                    });
                                });
                        }).catch(function (err) {
                        });
                    }
                }
            }
        });
    };
    AddModalComponent.prototype.onPickerLoaded = function (args) {
        var datePicker = args.object;
        var today = new Date();
        datePicker.minDate = new Date();
        var nextYearDate = new Date(today);
        nextYearDate.setDate(nextYearDate.getDate() + 365);
        datePicker.maxDate = nextYearDate;
    };
    AddModalComponent.prototype.onDateChanged = function (args) {
        var datePicker = args.object;
        var selectedDate = datePicker.date;
        this.formattedDate = this.datePipe.transform(selectedDate, "yyyy-MM-dd");
        // console.log(selectedDate.toString().substring(0, 15));
        this.date = selectedDate.toString().substring(0, 15);
    };
    AddModalComponent.prototype.onCheckedChange = function (args) {
        var mySwitch = args.object;
        var isChecked = mySwitch.checked; // boolean
        var drivingLabel = this.dl.nativeElement;
        var ridingLabel = this.rl.nativeElement;
        if (isChecked) {
            drivingLabel.style.fontWeight = "400";
            drivingLabel.style.color = new tns_core_modules_color__WEBPACK_IMPORTED_MODULE_4__["Color"]("#5c687c");
            ridingLabel.style.fontWeight = "700";
            ridingLabel.style.color = new tns_core_modules_color__WEBPACK_IMPORTED_MODULE_4__["Color"]("#ac00e6");
            this.isDriving = false;
            this.capacity = "-1";
        }
        else {
            drivingLabel.style.fontWeight = "700";
            drivingLabel.style.color = new tns_core_modules_color__WEBPACK_IMPORTED_MODULE_4__["Color"]("#ac00e6");
            ridingLabel.style.fontWeight = "400";
            ridingLabel.style.color = new tns_core_modules_color__WEBPACK_IMPORTED_MODULE_4__["Color"]("#5c687c");
            this.isDriving = true;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('drivingLabel', { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], AddModalComponent.prototype, "dl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('ridingLabel', { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], AddModalComponent.prototype, "rl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('activityIndicator', { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], AddModalComponent.prototype, "ai", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('addContainer', { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], AddModalComponent.prototype, "ac", void 0);
    AddModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-modal',
            template: __webpack_require__("./app/add-modal/add-modal.component.html"),
            styles: [__webpack_require__("./app/add-modal/add-modal.component.css")]
        }),
        __metadata("design:paramtypes", [nativescript_angular_directives_dialogs__WEBPACK_IMPORTED_MODULE_1__["ModalDialogParams"], _posting_service_tns__WEBPACK_IMPORTED_MODULE_2__["PostingService"], tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_3__["Page"], _places_autocomplete_service__WEBPACK_IMPORTED_MODULE_5__["PlacesAutocompleteService"],
            nativescript_angular_directives_dialogs__WEBPACK_IMPORTED_MODULE_1__["ModalDialogService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _datatransfer_service__WEBPACK_IMPORTED_MODULE_7__["TransferService"], _logincheck_service_tns__WEBPACK_IMPORTED_MODULE_8__["LogincheckService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_10__["DatePipe"], _google_maps_service__WEBPACK_IMPORTED_MODULE_12__["GoogleMapsService"]])
    ], AddModalComponent);
    return AddModalComponent;
}());



/***/ }),

/***/ "./app/add-payment/add-payment.component.css":
/***/ (function(module, exports) {

module.exports = "/* Add mobile styles for the component here.  */\n.close {\n\tmargin: 10;\n\tfont-size: 28;\n\twidth: 48;\n\theight: 48;\n}\n\n.close-button-container {\n\tposition: absolute;\n\tleft: 0;\n}\n\n.payment-type-icon {\n\theight: 34;\n\twidth: 34;\n\tbackground-position: center;\n\tmargin-top: 18;\n\tmargin-bottom: 18;\n\tmargin-left: 36;\n}\n\n.payment-info-label {\n\tfont-size: 16;\n\t/*font-weight: 700;*/\n\tpadding: 30;\n\ttext-align: center;\n\tcolor: black;\n}"

/***/ }),

/***/ "./app/add-payment/add-payment.component.html":
/***/ (function(module, exports) {

module.exports = "<StackLayout>\n\t<StackLayout class=\"close-button-container\" orientation=\"horizontal\">\n\t\t<Label text=\"&times;\" class=\"close\" (tap)=\"close('cancel')\"></Label>\n\t</StackLayout>\n\n\t<ListView [items]=\"methods\" separatorColor=\"transparent\" (itemTap)=\"onSelect($event)\">\n\t\t<ng-template let-item=\"item\" let-i=\"index\" let-odd=\"odd\" let-even=\"even\">\n\t\t\t<StackLayout [class.odd]=\"odd\" [class.even]=\"even\" orientation=\"horizontal\">\n\t\t\t\t<Image [src]=\"item.paymentType\" class=\"payment-type-icon\"></Image>\n\t\t\t\t<Label textWrap=\"true\" [text]=\"item.info\" class=\"payment-info-label\"></Label>\n\t\t\t</StackLayout>\n\t\t</ng-template>\n\t</ListView>\n</StackLayout>"

/***/ }),

/***/ "./app/add-payment/add-payment.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPaymentComponent", function() { return AddPaymentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_angular_directives_dialogs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/nativescript-angular/directives/dialogs.js");
/* harmony import */ var nativescript_angular_directives_dialogs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_directives_dialogs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/tns-core-modules/data/observable-array/observable-array.js");
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _add_card_payment_add_card_payment_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/add-card-payment/add-card-payment.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MethodItem = /** @class */ (function () {
    function MethodItem(paymentType, info) {
        this.paymentType = paymentType;
        this.info = info;
    }
    return MethodItem;
}());
var AddPaymentComponent = /** @class */ (function () {
    function AddPaymentComponent(vcRef, modal, params) {
        this.vcRef = vcRef;
        this.modal = modal;
        this.params = params;
        this.methods = new tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_2__["ObservableArray"]();
    }
    AddPaymentComponent.prototype.ngOnInit = function () {
        this.addMethods();
    };
    AddPaymentComponent.prototype.addMethods = function () {
        this.methods.push(new MethodItem('~/img/credit-card-icon.png', 'Credit or Debit Card'));
        this.methods.push(new MethodItem('~/img/paypal-icon.png', 'Paypal'));
        this.methods.push(new MethodItem('~/img/venmo-icon.png', 'Venmo'));
    };
    AddPaymentComponent.prototype.openCardPayment = function () {
        var options = {
            context: {},
            fullscreen: true,
            viewContainerRef: this.vcRef
            // animated: true,
            // transition: { name: "slideTop" }
        };
        this.modal.showModal(_add_card_payment_add_card_payment_component__WEBPACK_IMPORTED_MODULE_3__["AddCardPaymentComponent"], options).then(function (res) {
        });
    };
    AddPaymentComponent.prototype.close = function (res) {
        this.params.closeCallback(res);
    };
    AddPaymentComponent.prototype.onSelect = function (event) {
        //event.index stores which index was tapped
        if (event.index == 0)
            this.openCardPayment();
    };
    AddPaymentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-payment',
            template: __webpack_require__("./app/add-payment/add-payment.component.html"),
            styles: [__webpack_require__("./app/add-payment/add-payment.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], nativescript_angular_directives_dialogs__WEBPACK_IMPORTED_MODULE_1__["ModalDialogService"], nativescript_angular_directives_dialogs__WEBPACK_IMPORTED_MODULE_1__["ModalDialogParams"]])
    ], AddPaymentComponent);
    return AddPaymentComponent;
}());



/***/ }),

/***/ "./app/app-routing.module.tns.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/nativescript-angular/router/index.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/login/login.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/home/home.component.ts");
/* harmony import */ var _history_history_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/history/history.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./app/settings/settings.component.ts");
/* harmony import */ var _update_update_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./app/update/update.component.ts");
/* harmony import */ var _connect_connect_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./app/connect/connect.component.ts");
/* harmony import */ var _loginroute_loginroute_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./app/loginroute/loginroute.component.ts");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./app/navigation/navigation.component.ts");
/* harmony import */ var _payments_payments_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./app/payments/payments.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./app/search/search.component.ts");
/* harmony import */ var _payment_info_payment_info_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./app/payment-info/payment-info.component.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./app/welcome/welcome.component.ts");
/* harmony import */ var _posting_info_posting_info_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./app/posting-info/posting-info.component.ts");
/* harmony import */ var _settingsform_settingsform_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./app/settingsform/settingsform.component.ts");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./app/chat/chat.component.ts");
/* harmony import */ var _chat_list_chat_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./app/chat-list/chat-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








// import { AmplifyAngularModule, AmplifyService } from 'aws-amplify-angular';










var routes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: '', redirectTo: '/welcome', pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'history', component: _history_history_component__WEBPACK_IMPORTED_MODULE_4__["HistoryComponent"] },
    { path: 'settings', component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_5__["SettingsComponent"] },
    { path: 'update', component: _update_update_component__WEBPACK_IMPORTED_MODULE_6__["UpdateComponent"] },
    { path: 'connect', component: _connect_connect_component__WEBPACK_IMPORTED_MODULE_7__["ConnectComponent"] },
    { path: 'loginroute', component: _loginroute_loginroute_component__WEBPACK_IMPORTED_MODULE_8__["LoginrouteComponent"] },
    { path: 'payments', component: _payments_payments_component__WEBPACK_IMPORTED_MODULE_10__["PaymentsComponent"] },
    { path: 'search', component: _search_search_component__WEBPACK_IMPORTED_MODULE_11__["SearchComponent"] },
    { path: 'navigation', component: _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_9__["NavigationComponent"] },
    { path: 'paymentinfo', component: _payment_info_payment_info_component__WEBPACK_IMPORTED_MODULE_12__["PaymentInfoComponent"] },
    { path: 'welcome', component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_13__["WelcomeComponent"] },
    { path: 'posting-info', component: _posting_info_posting_info_component__WEBPACK_IMPORTED_MODULE_14__["PostingInfoComponent"] },
    { path: 'settingsform', component: _settingsform_settingsform_component__WEBPACK_IMPORTED_MODULE_15__["SettingsformComponent"] },
    { path: 'chat', component: _chat_chat_component__WEBPACK_IMPORTED_MODULE_16__["ChatComponent"] },
    { path: 'chat-list', component: _chat_list_chat_list_component__WEBPACK_IMPORTED_MODULE_17__["ChatListComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"].forRoot(routes)],
            exports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- https://docs.nativescript.org/angular/core-concepts/angular-navigation.html#page-router-outlet -->\n\n<Page>\n\t    <page-router-outlet></page-router-outlet>\n</Page>"

/***/ }),

/***/ "./app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./app/app.component.html"),
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/nativescript-angular/nativescript.module.js");
/* harmony import */ var nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_routing_module_tns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/app-routing.module.tns.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/app.component.ts");
/* harmony import */ var _auto_generated_auto_generated_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/auto-generated/auto-generated.component.ts");
/* harmony import */ var _payments_payments_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./app/payments/payments.component.ts");
/* harmony import */ var _payment_method_payment_method_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./app/payment-method/payment-method.component.ts");
/* harmony import */ var _connect_connect_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./app/connect/connect.component.ts");
/* harmony import */ var _history_history_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./app/history/history.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./app/home/home.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./app/login/login.component.ts");
/* harmony import */ var _loginroute_loginroute_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./app/loginroute/loginroute.component.ts");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./app/navigation/navigation.component.ts");
/* harmony import */ var _posting_posting_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./app/posting/posting.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./app/settings/settings.component.ts");
/* harmony import */ var _update_update_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./app/update/update.component.ts");
/* harmony import */ var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./app/dialog/dialog.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./app/search/search.component.ts");
/* harmony import */ var _login_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./app/login.directive.ts");
/* harmony import */ var _home_directive__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./app/home.directive.ts");
/* harmony import */ var _posting_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./app/posting.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./app/user.service.ts");
/* harmony import */ var _datatransfer_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("./app/datatransfer.service.ts");
/* harmony import */ var _dynamic_add_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("./app/dynamic-add.service.ts");
/* harmony import */ var _payment_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__("./app/payment.service.ts");
/* harmony import */ var _places_autocomplete_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__("./app/places-autocomplete.service.ts");
/* harmony import */ var _google_maps_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__("./app/google-maps.service.ts");
/* harmony import */ var nativescript_angular_modal_dialog__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__("../node_modules/nativescript-angular/modal-dialog.js");
/* harmony import */ var nativescript_angular_modal_dialog__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_modal_dialog__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__("../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__("../node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__("../node_modules/@agm/core/index.js");
/* harmony import */ var ngx_paypal__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__("../node_modules/ngx-paypal/fesm5/ngx-paypal.js");
/* harmony import */ var nativescript_ui_dataform_angular__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__("../node_modules/nativescript-ui-dataform/angular/dataform-directives.js");
/* harmony import */ var nativescript_ui_dataform_angular__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_dataform_angular__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__("../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var nativescript_masked_text_field_angular__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__("../node_modules/nativescript-masked-text-field/angular/index.js");
/* harmony import */ var nativescript_masked_text_field_angular__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(nativescript_masked_text_field_angular__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__("../node_modules/nativescript-angular/forms/index.js");
/* harmony import */ var nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var nativescript_angular_http_client__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__("../node_modules/nativescript-angular/http-client/index.js");
/* harmony import */ var nativescript_angular_http_client__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_http_client__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var _float_btn_float_btn_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__("./app/float-btn/float-btn.component.ts");
/* harmony import */ var _add_modal_add_modal_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__("./app/add-modal/add-modal.component.ts");
/* harmony import */ var _location_location_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__("./app/location/location.component.ts");
/* harmony import */ var _add_payment_add_payment_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__("./app/add-payment/add-payment.component.ts");
/* harmony import */ var _add_card_payment_add_card_payment_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__("./app/add-card-payment/add-card-payment.component.ts");
/* harmony import */ var _payment_info_payment_info_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__("./app/payment-info/payment-info.component.ts");
/* harmony import */ var _confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__("./app/confirmation/confirmation.component.ts");
/* harmony import */ var _message_modal_message_modal_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__("./app/message-modal/message-modal.component.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__("./app/welcome/welcome.component.ts");
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__("../node_modules/tns-core-modules/application/application.js");
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_46___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_application__WEBPACK_IMPORTED_MODULE_46__);
/* harmony import */ var nativescript_facebook_angular__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__("../node_modules/nativescript-facebook/angular/index.js");
/* harmony import */ var nativescript_facebook_angular__WEBPACK_IMPORTED_MODULE_47___default = /*#__PURE__*/__webpack_require__.n(nativescript_facebook_angular__WEBPACK_IMPORTED_MODULE_47__);
/* harmony import */ var nativescript_facebook__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__("../node_modules/nativescript-facebook/index.js");
/* harmony import */ var nativescript_facebook__WEBPACK_IMPORTED_MODULE_48___default = /*#__PURE__*/__webpack_require__.n(nativescript_facebook__WEBPACK_IMPORTED_MODULE_48__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__("../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _posting_info_posting_info_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__("./app/posting-info/posting-info.component.ts");
/* harmony import */ var tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__("../node_modules/tns-core-modules/platform/platform.js");
/* harmony import */ var tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_51___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_51__);
/* harmony import */ var _settingsform_settingsform_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__("./app/settingsform/settingsform.component.ts");
/* harmony import */ var _reauth_reauth_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__("./app/reauth/reauth.component.ts");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__("./app/chat/chat.component.ts");
/* harmony import */ var _chat_list_chat_list_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__("./app/chat-list/chat-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



































// Uncomment and add to NgModule imports if you need to use two-way binding

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper




















// require('nativescript-nodeify')
// import { AmplifyAngularModule, AmplifyService } from 'aws-amplify-angular';
// import { AngularFireModule } from '@angular/fire';
// import { AngularFirestoreModule } from '@angular/fire/firestore';
// import { AngularFireStorageModule } from '@angular/fire/storage';
// import { AngularFireAuthModule } from '@angular/fire/auth';
// import { environment } from '../environments/environment';
if (tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_51__["isIOS"]) {
    GMSServices.provideAPIKey("AIzaSyAITxS1jmf8PMtazRguWcAfWQxW1kPOoYg");
}
tns_core_modules_application__WEBPACK_IMPORTED_MODULE_46__["on"](tns_core_modules_application__WEBPACK_IMPORTED_MODULE_46__["launchEvent"], function (args) {
    nativescript_facebook__WEBPACK_IMPORTED_MODULE_48__["init"]("2272129649677747");
});
var AppModule = /** @class */ (function () {
    /*
    Pass your application module to the bootstrapModule function located in main.ts to start your app
    */
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _login_directive__WEBPACK_IMPORTED_MODULE_18__["LoginDirective"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _home_directive__WEBPACK_IMPORTED_MODULE_19__["HomeDirective"],
                _history_history_component__WEBPACK_IMPORTED_MODULE_8__["HistoryComponent"],
                _settings_settings_component__WEBPACK_IMPORTED_MODULE_14__["SettingsComponent"],
                _posting_posting_component__WEBPACK_IMPORTED_MODULE_13__["PostingComponent"],
                _update_update_component__WEBPACK_IMPORTED_MODULE_15__["UpdateComponent"],
                _connect_connect_component__WEBPACK_IMPORTED_MODULE_7__["ConnectComponent"],
                _loginroute_loginroute_component__WEBPACK_IMPORTED_MODULE_11__["LoginrouteComponent"],
                _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_16__["DialogComponent"],
                _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_12__["NavigationComponent"],
                _auto_generated_auto_generated_component__WEBPACK_IMPORTED_MODULE_4__["AutoGeneratedComponent"],
                _payments_payments_component__WEBPACK_IMPORTED_MODULE_5__["PaymentsComponent"],
                _payment_method_payment_method_component__WEBPACK_IMPORTED_MODULE_6__["PaymentMethodComponent"],
                _search_search_component__WEBPACK_IMPORTED_MODULE_17__["SearchComponent"],
                _float_btn_float_btn_component__WEBPACK_IMPORTED_MODULE_37__["FloatBtnComponent"],
                _add_modal_add_modal_component__WEBPACK_IMPORTED_MODULE_38__["AddModalComponent"],
                _location_location_component__WEBPACK_IMPORTED_MODULE_39__["LocationComponent"],
                _add_payment_add_payment_component__WEBPACK_IMPORTED_MODULE_40__["AddPaymentComponent"],
                _add_card_payment_add_card_payment_component__WEBPACK_IMPORTED_MODULE_41__["AddCardPaymentComponent"],
                _payment_info_payment_info_component__WEBPACK_IMPORTED_MODULE_42__["PaymentInfoComponent"],
                _confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_43__["ConfirmationComponent"],
                _message_modal_message_modal_component__WEBPACK_IMPORTED_MODULE_44__["MessageModalComponent"],
                _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_45__["WelcomeComponent"],
                _posting_info_posting_info_component__WEBPACK_IMPORTED_MODULE_50__["PostingInfoComponent"],
                _settingsform_settingsform_component__WEBPACK_IMPORTED_MODULE_52__["SettingsformComponent"],
                _reauth_reauth_component__WEBPACK_IMPORTED_MODULE_53__["ReauthComponent"],
                _chat_chat_component__WEBPACK_IMPORTED_MODULE_54__["ChatComponent"],
                _chat_list_chat_list_component__WEBPACK_IMPORTED_MODULE_55__["ChatListComponent"],
            ],
            imports: [
                nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_1__["NativeScriptModule"],
                _app_routing_module_tns__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                nativescript_angular_http_client__WEBPACK_IMPORTED_MODULE_36__["NativeScriptHttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_28__["ReactiveFormsModule"],
                nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_35__["NativeScriptFormsModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_29__["MatInputModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_30__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyAITxS1jmf8PMtazRguWcAfWQxW1kPOoYg'
                }),
                ngx_paypal__WEBPACK_IMPORTED_MODULE_31__["NgxPayPalModule"],
                nativescript_ui_dataform_angular__WEBPACK_IMPORTED_MODULE_32__["NativeScriptUIDataFormModule"],
                // NgxBraintreeModule,
                _angular_common_http__WEBPACK_IMPORTED_MODULE_33__["HttpClientModule"],
                nativescript_facebook_angular__WEBPACK_IMPORTED_MODULE_47__["NativeScriptFacebookModule"],
                nativescript_masked_text_field_angular__WEBPACK_IMPORTED_MODULE_34__["MaskedTextFieldModule"]
                // AngularFireModule.initializeApp(environment.firebase),
                // AngularFirestoreModule, // imports firebase/firestore, only needed for database features
                // AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
                // AngularFireStorageModule // imports firebase/storage only needed for storage features
            ],
            providers: [_posting_service__WEBPACK_IMPORTED_MODULE_20__["PostingService"], _datatransfer_service__WEBPACK_IMPORTED_MODULE_22__["TransferService"], _dynamic_add_service__WEBPACK_IMPORTED_MODULE_23__["DynamicAddService"], _user_service__WEBPACK_IMPORTED_MODULE_21__["UserService"], _payment_service__WEBPACK_IMPORTED_MODULE_24__["PaymentService"], nativescript_angular_modal_dialog__WEBPACK_IMPORTED_MODULE_27__["ModalDialogService"], _places_autocomplete_service__WEBPACK_IMPORTED_MODULE_25__["PlacesAutocompleteService"],
                _angular_common__WEBPACK_IMPORTED_MODULE_49__["DatePipe"], _google_maps_service__WEBPACK_IMPORTED_MODULE_26__["GoogleMapsService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            entryComponents: [_posting_posting_component__WEBPACK_IMPORTED_MODULE_13__["PostingComponent"], _payment_method_payment_method_component__WEBPACK_IMPORTED_MODULE_6__["PaymentMethodComponent"], _add_modal_add_modal_component__WEBPACK_IMPORTED_MODULE_38__["AddModalComponent"], _location_location_component__WEBPACK_IMPORTED_MODULE_39__["LocationComponent"], _add_payment_add_payment_component__WEBPACK_IMPORTED_MODULE_40__["AddPaymentComponent"], _add_card_payment_add_card_payment_component__WEBPACK_IMPORTED_MODULE_41__["AddCardPaymentComponent"],
                _payment_info_payment_info_component__WEBPACK_IMPORTED_MODULE_42__["PaymentInfoComponent"], _confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_43__["ConfirmationComponent"], _settingsform_settingsform_component__WEBPACK_IMPORTED_MODULE_52__["SettingsformComponent"], _reauth_reauth_component__WEBPACK_IMPORTED_MODULE_53__["ReauthComponent"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]]
        })
        /*
        Pass your application module to the bootstrapModule function located in main.ts to start your app
        */
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./app/auto-generated/auto-generated.component.css":
/***/ (function(module, exports) {

module.exports = "/* Add mobile styles for the component here.  */\n"

/***/ }),

/***/ "./app/auto-generated/auto-generated.component.html":
/***/ (function(module, exports) {

module.exports = "<Button text=\"auto-generated works!\" class=\"btn btn-primary\"></Button>"

/***/ }),

/***/ "./app/auto-generated/auto-generated.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoGeneratedComponent", function() { return AutoGeneratedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AutoGeneratedComponent = /** @class */ (function () {
    function AutoGeneratedComponent() {
    }
    AutoGeneratedComponent.prototype.ngOnInit = function () {
    };
    AutoGeneratedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-auto-generated',
            template: __webpack_require__("./app/auto-generated/auto-generated.component.html"),
            styles: [__webpack_require__("./app/auto-generated/auto-generated.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AutoGeneratedComponent);
    return AutoGeneratedComponent;
}());



/***/ }),

/***/ "./app/chat-list/chat-list.component.css":
/***/ (function(module, exports) {

module.exports = "/* Add mobile styles for the component here.  */\nLabel {\n\ttext-align: left;\n}\n\n.name-label {\n\tmargin-top: 16;\n\tmargin-left: 18;\n\tcolor: black;\n\tfont-weight: 700;\n\tfont-size: 17;\n}\n\n.info-label {\n\tmargin-top: 4;\n\tmargin-left: 18;\n\tmargin-bottom: 16;\n\tcolor: #696969;\n}\n\n.profile-picture {\n\theight: 60;\n\twidth: 60;\n\tborder-radius: 100%;\n\tvertical-align: center;\n\tmargin-left: 16;\n\tmargin-top: 14;\n\tmargin-bottom: 14;\n}\n\n.message {\n\tborder-bottom-width: 1;\n\tborder-color: #f1f1f1;\n\tmargin-top: 50;\n\tmargin-bottom: 50;\n}\n\n.refresh {\n\tcolor: #ac00e6;\n}"

/***/ }),

/***/ "./app/chat-list/chat-list.component.html":
/***/ (function(module, exports) {

module.exports = "<Page.actionBar>\n    <ActionBar title=\"Messages\">\n    \t<NavigationButton text=\"Go Back\" android.systemIcon=\"ic_menu_back\" (tap)=\"onNavBtnTap()\"></NavigationButton>\n    </ActionBar>\n</Page.actionBar>\n\n<PullToRefresh (refresh)=\"refreshList($event)\" class=\"refresh\">\n\t<ListView [items]=\"messages\" (itemTap)=\"onItemTap($event)\" #listView id=\"listView\">\n\t    <ng-template let-item=\"item\" let-i=\"index\" let-odd=\"odd\" let-even=\"even\">\n\t        <StackLayout [class.odd]=\"odd\" [class.even]=\"even\" class=\"message\" orientation=\"horizontal\">\n\t        \t  \t<Image [src]=\"item.pfpSource\" class=\"profile-picture\" stretch=\"aspectFit\"></Image>\n\t        \t  \t<StackLayout>\n\t\t              \t<Label textWrap=\"true\" id=\"post-name\" class=\"name-label\" [text]=\"item.displayName\"></Label>\n\t\t              \t<Label textWrap=\"true\" id=\"post-info\" class=\"info-label\" [text]=\"item.message\"></Label>\n\t\t            </StackLayout>\n\t        </StackLayout>\n\t    </ng-template>\n\t</ListView>\n</PullToRefresh>"

/***/ }),

/***/ "./app/chat-list/chat-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatListComponent", function() { return ChatListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _datatransfer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/datatransfer.service.ts");
/* harmony import */ var nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/nativescript-plugin-firebase/firebase.js");
/* harmony import */ var nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/nativescript-angular/router/index.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _logincheck_service_tns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/logincheck.service.tns.ts");
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../node_modules/tns-core-modules/data/observable-array/observable-array.js");
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var MessageItem = /** @class */ (function () {
    function MessageItem(chatMessage, lastChat, chatId, pfpSource, displayName, message) {
        this.chatMessage = chatMessage;
        this.lastChat = lastChat;
        this.chatId = chatId;
        this.pfpSource = pfpSource;
        this.displayName = displayName;
        this.message = message;
    }
    return MessageItem;
}());
var ChatListComponent = /** @class */ (function () {
    function ChatListComponent(transferService, router, logincheckService, vcRef) {
        this.transferService = transferService;
        this.router = router;
        this.logincheckService = logincheckService;
        this.vcRef = vcRef;
        this.messages = new tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_5__["ObservableArray"]();
        this.refreshMessages = new tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_5__["ObservableArray"]();
    }
    ChatListComponent.prototype.ngOnInit = function () {
        this.userId = this.logincheckService.getUser();
        this.loadMessages();
    };
    ChatListComponent.prototype.loadMessages = function (args) {
        var _this = this;
        if (args === void 0) { args = null; }
        nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_2__["firestore"].collection('users').doc(this.userId).get().then(function (doc) {
            _this.chatIds = doc.data().chats;
        }).then(function (res) { return __awaiter(_this, void 0, void 0, function () {
            var i, chatPromise, pullRefresh, i;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < this.chatIds.length)) return [3 /*break*/, 4];
                        return [4 /*yield*/, nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_2__["firestore"].collection('chats').doc(this.chatIds[i]).get().then(function (doc) { return __awaiter(_this, void 0, void 0, function () {
                                var data, docId, chatName, nonUserIndex, i, lastMsg, addPromise;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            data = doc.data();
                                            docId = doc.id;
                                            chatName = 'You, ';
                                            nonUserIndex = 0;
                                            for (i = 0; i < data.users.length; i++) {
                                                if (data.users[i].uid !== this.userId) {
                                                    nonUserIndex = i;
                                                    if (i === data.users.length - 1)
                                                        chatName += 'and ' + data.users[i].displayName;
                                                    else
                                                        chatName += data.users[i].displayName + ', ';
                                                }
                                            }
                                            if (!data.chats[0]) return [3 /*break*/, 2];
                                            lastMsg = data.chats[data.chats.length - 1];
                                            return [4 /*yield*/, this.addMessage(lastMsg, data, docId, chatName, nonUserIndex)];
                                        case 1:
                                            addPromise = _a.sent();
                                            _a.label = 2;
                                        case 2: return [2 /*return*/];
                                    }
                                });
                            }); })
                            // const unsubscribe = firebase.firestore.collection('chats').doc(this.chatIds[i]).onSnapshot({includeMetadataChanges: true}, doc => {
                            //   this.refreshList(null);
                            // })
                        ];
                    case 2:
                        chatPromise = _a.sent();
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4:
                        if (args != null) {
                            pullRefresh = args.object;
                            pullRefresh.refreshing = false;
                        }
                        this.refreshMessages.sort(function (a, b) {
                            if (a.lastChat > b.lastChat)
                                return -1;
                            else if (b.lastChat < a.lastChat)
                                return 1;
                            return 0;
                        });
                        this.messages.splice(0);
                        for (i = 0; i < this.refreshMessages.length; i++) {
                            this.messages.push(this.refreshMessages.getItem(i));
                        }
                        this.refreshMessages.splice(0);
                        return [2 /*return*/];
                }
            });
        }); });
    };
    ChatListComponent.prototype.addMessage = function (lastMsg, data, docId, chatName, nonUserIndex) {
        return __awaiter(this, void 0, void 0, function () {
            var userPromise, userPromise;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(lastMsg.userId !== this.userId)) return [3 /*break*/, 2];
                        return [4 /*yield*/, nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_2__["firestore"].collection('users').doc(lastMsg.userId).get().then(function (doc) {
                                var profileSource = lastMsg.pfpSource;
                                if (profileSource.substring(0, 27) == 'https://graph.facebook.com/')
                                    profileSource += '?height=300';
                                if (data.users.length === 2)
                                    _this.refreshMessages.push(new MessageItem(lastMsg, data.lastChat, docId, profileSource, lastMsg.displayName, doc.data().first_name + ': ' + lastMsg.message));
                                else {
                                    _this.refreshMessages.push(new MessageItem(lastMsg, data.lastChat, docId, profileSource, chatName, doc.data().first_name + ': ' + lastMsg.message));
                                }
                                return true;
                            })];
                    case 1:
                        userPromise = _a.sent();
                        return [2 /*return*/, this.refreshMessages];
                    case 2: return [4 /*yield*/, nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_2__["firestore"].collection('users').doc(data.users[nonUserIndex].uid).get().then(function (doc) {
                            var profileSource = doc.data().profile_source;
                            if (profileSource.substring(0, 27) == 'https://graph.facebook.com/')
                                profileSource += '?height=300';
                            if (data.users.length === 2)
                                _this.refreshMessages.push(new MessageItem(lastMsg, data.lastChat, docId, profileSource, doc.data().first_name + ' ' + doc.data().last_name, 'You: ' + lastMsg.message));
                            else {
                                _this.refreshMessages.push(new MessageItem(lastMsg, data.lastChat, docId, profileSource, chatName, 'You: ' + lastMsg.message));
                            }
                            return true;
                        })];
                    case 3:
                        userPromise = _a.sent();
                        return [2 /*return*/, this.refreshMessages];
                }
            });
        });
    };
    ChatListComponent.prototype.refreshList = function (args) {
        this.loadMessages(args);
    };
    ChatListComponent.prototype.onItemTap = function (args) {
        var chatId = this.messages.getItem(args.index).chatId;
        this.transferService.setData(chatId);
        this.router.navigate(['chat']);
    };
    ChatListComponent.prototype.onNavBtnTap = function () {
        if (this.router.canGoBack)
            this.router.back();
        else
            this.router.navigate(['navigation'], { clearHistory: true });
    };
    ChatListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chat-list',
            template: __webpack_require__("./app/chat-list/chat-list.component.html"),
            styles: [__webpack_require__("./app/chat-list/chat-list.component.css")]
        }),
        __metadata("design:paramtypes", [_datatransfer_service__WEBPACK_IMPORTED_MODULE_1__["TransferService"], nativescript_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterExtensions"], _logincheck_service_tns__WEBPACK_IMPORTED_MODULE_4__["LogincheckService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]])
    ], ChatListComponent);
    return ChatListComponent;
}());



/***/ }),

/***/ "./app/chat/chat.component.css":
/***/ (function(module, exports) {

module.exports = "/* Add mobile styles for the component here.  */\nButton {\n    padding: 5;\n    margin: 5;\n    background-color: dodgerblue;\n    color: white;\n    height: 40;\n    border-radius: 5;\n}\n\n.chat-button {\n\tpadding-left: 5;\n\tpadding-right: 5;\n\tmargin: 5;\n\theight: 30;\n\twidth: 30;\n}\n\n.chat-text-field {\n    padding: 5; \n    /*background-color: white; */\n    /*border-radius: 4;*/\n    /*bottom-border-color: #696969;*/\n}\n\n.author-img {\n    margin: 0 5 5 5;\n    margin-bottom: 0;\n    width: 40;\n    height: 40;\n    border-radius: 20;\n}\n\n.mine {\n    background-color: #ac00e6;\n    color: white;\n    padding: 8;\n    padding-left: 14;\n    padding-right: 14;\n    margin-right: 10;\n    border-radius: 15;\n    border-bottom-right-radius: 5;\n    border-bottom-left-radius: 15;\n    font-size: 16;\n    max-width: 60%;\n    text-align: left;\n    /*margin-bottom: 12;*/\n}\n\n.mineContinuation {\n\tmargin-bottom: 0;\n\tborder-bottom-right-radius: 15;\n}\n\n.mineContinuationGrid {\n\tfont-size: 14;\n    padding: 5;\n\tpadding-top: 0;\n\tpadding-bottom: 1;\n}\n\n.mineTime {\n\tmargin-right: 10;\n\tmargin-bottom: 5;\n}\n\n.theirsTime {\n\tmargin-left: 52;\n\tmargin-bottom: 5;\n}\n\n.time {\n\tvisibility: collapse;\n\tdisplay: none;\n}\n\n.theirs {\n    background-color: #e0e0e0;\n    color: #333;\n    padding: 7;\n    padding-left: 14;\n    padding-right: 14;\n    border-radius: 15;\n    border-bottom-left-radius: 5;\n    border-bottom-right-radius: 15;\n    margin-right: 40;\n    font-size: 16;\n    max-width: 60%;\n    text-align: left;\n    /*margin-bottom: 12;*/\n}\n\n.theirsContinuation {\n\tmargin-left: 52;\n\tmargin-bottom: 0;\n\tborder-bottom-left-radius: 15;\n}\n\n.theirsContinuationGrid {\n\tfont-size: 14;\n    padding: 5;\n\tpadding-top: 0;\n\tpadding-bottom: 1;\n}\n\n.grid {\n    font-size: 14;\n    padding: 5;\n    padding-top: 0;\n    padding-bottom: 8;\n}\n\n.chat-box-layout {\n\tborder-color: #f1f1f1;\n\tborder-top-width: 1;\n}"

/***/ }),

/***/ "./app/chat/chat.component.html":
/***/ (function(module, exports) {

module.exports = "<Page.actionBar>\n    <ActionBar title=\"{{ chatName }}\" android:horizontalAlignment=\"center\" ios:horizontalAlignment=\"center\">\n    \t<NavigationButton text=\"Go Back\" android.systemIcon=\"ic_menu_back\" (tap)=\"onNavBtnTap()\"></NavigationButton>\n\t    <ActionItem (tap)=\"onLeave()\"\n\t      ios.systemIcon=\"9\" ios.position=\"right\"\n\t      text=\"Leave chat\" android.position=\"popup\"></ActionItem>\n    </ActionBar>\n</Page.actionBar>\n\n<GridLayout rows=\"*, auto\">\n    <ListView margin-bottom=\"50\" padding=\"5\" #messageList [items]=\"messages\" separatorColor=\"transparent\" (setupItemView)=\"setupItemView($event)\" row=\"0\" (loadMoreItems)=\"loadMoreData()\">\n        <ng-template let-item=\"item\" let-i=\"index\" let-mine=\"mine\" let-theirs=\"theirs\" let-mineContinuation=\"mineContinuation\" let-theirsContinuation=\"theirsContinuation\" let-mineContinuationGrid=\"mineContinuationGrid\" let-theirsContinuationGrid=\"theirsContinuationGrid\" let-grid=\"grid\" let-mineTime=\"mineTime\" let-theirsTime=\"theirsTime\" let-time=\"time\">\n            <StackLayout width=\"80%\" [class.mineContinuationGrid]=\"mineContinuationGrid\" [class.theirsContinuationGrid]=\"theirsContinuationGrid\" [class.grid]=\"grid\">\n                <StackLayout orientation=\"horizontal\" [horizontalAlignment]=\"align(item)\">\n                    <Image [visibility]=\"item.visibility\" class=\"author-img\" stretch=\"aspectFill\" height=\"40\" width=\"40\" verticalAlignment=\"bottom\" [src]=\"item.chatMessage.pfpSource\" col=\"1\"></Image>\n                    <Label [text]='item.chatMessage.message' [class.mine]=\"mine\" [class.theirs]=\"theirs\" [class.mineContinuation]=\"mineContinuation\" [class.theirsContinuation]=\"theirsContinuation\" textWrap=\"true\" verticalAlignment=\"top\"></Label>\n                </StackLayout>\n                <Label [text]='item.formattedTime' [horizontalAlignment]=\"align(item)\" [class.mineTime]=\"mineTime\" [class.theirsTime]=\"theirsTime\" [class.time]=\"time\"></Label>\n            </StackLayout>\n        </ng-template>\n    </ListView>\n\n    <StackLayout #chatbox row=\"1\" class=\"chat-box-layout\">\n\t        <GridLayout columns=\"*,auto\" style=\"padding: 10\">\n\t            <TextView #textfield height=\"auto\" maxHeight=\"100\" hint=\"Start a message\" class=\"chat-text-field\" row=\"0\" col=\"0\" autocorrect=\"true\" [(ngModel)]=\"message\" (tap)=\"onTextTap()\"></TextView>\n\t            <Image #btn class=\"chat-button\" row=\"0\" col=\"1\" src=\"~/img/send_message_icon_2.png\" (tap)=sendMessage()></Image>\n\t        </GridLayout>\n\n    </StackLayout>\n\n</GridLayout>"

/***/ }),

/***/ "./app/chat/chat.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _datatransfer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/datatransfer.service.ts");
/* harmony import */ var nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/nativescript-plugin-firebase/firebase.js");
/* harmony import */ var nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/nativescript-angular/router/index.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _logincheck_service_tns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/logincheck.service.tns.ts");
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../node_modules/tns-core-modules/data/observable-array/observable-array.js");
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../node_modules/tns-core-modules/platform/platform.js");
/* harmony import */ var tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../node_modules/tns-core-modules/application/application.js");
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_application__WEBPACK_IMPORTED_MODULE_7__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








var ChatItem = /** @class */ (function () {
    function ChatItem(chatMessage, visibility, formattedTime, mineContinuation, theirsContinuation) {
        this.chatMessage = chatMessage;
        this.visibility = visibility;
        this.formattedTime = formattedTime;
        this.mineContinuation = mineContinuation;
        this.theirsContinuation = theirsContinuation;
    }
    return ChatItem;
}());
var ChatComponent = /** @class */ (function () {
    function ChatComponent(transferService, router, logincheckService, vcRef) {
        this.transferService = transferService;
        this.router = router;
        this.logincheckService = logincheckService;
        this.vcRef = vcRef;
        this.messages = new tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_5__["ObservableArray"]();
        this.allMessages = new tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_5__["ObservableArray"]();
        this.message = '';
        this.numShown = 20;
    }
    ChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_6__["isAndroid"]) {
            var window = tns_core_modules_application__WEBPACK_IMPORTED_MODULE_7__["android"].startActivity.getWindow();
            window.setSoftInputMode(android.view.WindowManager.LayoutParams.SOFT_INPUT_ADJUST_RESIZE);
        }
        this.list = this.lv.nativeElement;
        this.chatId = this.transferService.getData();
        this.userId = this.logincheckService.getUser();
        nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_2__["getCurrentUser"]().then(function (user) {
            _this.displayName = user.displayName;
            _this.pfpSource = user.photoURL;
        });
        this.retrieveChats();
        this.chatName = "John Doe";
        // setTimeout(() => {
        //    this.list.scrollToIndex(this.messages.length - 1);
        //  }, 1000)
    };
    ChatComponent.prototype.sendMessage = function () {
        return __awaiter(this, void 0, void 0, function () {
            var today, date, time, chat, messageDocument, messagePromise;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.message.replace(/\s+/g, '').length === 0) {
                            return [2 /*return*/, false];
                        }
                        today = new Date();
                        date = today.getFullYear() + '/' + (today.getMonth() + 1) + '/' + today.getDate();
                        time = today.getHours() + ":" + today.getUTCMinutes() + ":" + today.getSeconds();
                        chat = {
                            userId: this.userId,
                            displayName: this.displayName,
                            message: this.message,
                            pfpSource: this.pfpSource,
                            imgSource: "",
                            time: time,
                            date: date
                        };
                        messageDocument = nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_2__["firestore"].collection('chats').doc(this.chatId);
                        return [4 /*yield*/, messageDocument.get().then(function (doc) {
                                var updatedChats = doc.data().chats;
                                updatedChats.push(chat);
                                messageDocument.update({
                                    chats: updatedChats,
                                    lastChat: date + ' ' + time
                                });
                            })];
                    case 1:
                        messagePromise = _a.sent();
                        this.message = '';
                        return [2 /*return*/];
                }
            });
        });
    };
    ChatComponent.prototype.retrieveChats = function () {
        return __awaiter(this, void 0, void 0, function () {
            var messageDocument, docPromise, unsubscribe;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        messageDocument = nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_2__["firestore"].collection('chats').doc(this.chatId);
                        return [4 /*yield*/, messageDocument.get().then(function (doc) {
                                var data = doc.data();
                                _this.lastIndex = data.chats.length;
                                _this.messages.splice(0);
                                _this.allMessages.splice(0);
                                for (var i = 0; i < data.chats.length; i++) {
                                    if (data.chats[i].userId === _this.userId) {
                                        _this.updateContinuations(data, i, true, "collapse");
                                    }
                                    else {
                                        _this.updateContinuations(data, i, false, "visible");
                                    }
                                }
                                // this.list.scrollToIndex(data.chats.length - 1);
                                if (data.users.length === 2) {
                                    if (data.users[0].uid === _this.userId)
                                        _this.chatName = data.users[1].displayName;
                                    else {
                                        _this.chatName = data.users[0].displayName;
                                    }
                                }
                                else {
                                    var chatName = 'You, ';
                                    for (var i = 0; i < data.users.length; i++) {
                                        if (data.users[i].id != _this.userId) {
                                            if (i === data.users.length - 1)
                                                chatName += 'and ' + data.users[i].displayName;
                                            else
                                                chatName += data.users[i].displayName + ', ';
                                        }
                                    }
                                    _this.chatName = 'Group chat';
                                }
                            })];
                    case 1:
                        docPromise = _a.sent();
                        unsubscribe = messageDocument.onSnapshot(function (doc) {
                            console.log('called');
                            var data = doc.data();
                            for (var i = _this.lastIndex; i < data.chats.length; i++) {
                                if (data.chats[i].userId === _this.userId) {
                                    _this.updateContinuations(data, i, true, "collapse");
                                    _this.list.scrollToIndex(_this.messages.length - 1);
                                }
                                else {
                                    _this.updateContinuations(data, i, false, "visible");
                                }
                                _this.numShown += 1;
                            }
                            _this.lastIndex = data.chats.length;
                        });
                        if (this.messages.length > this.numShown) {
                            this.messages.splice(0, this.messages.length - this.numShown);
                        }
                        this.list.scrollToIndex(this.messages.length - 1);
                        return [2 /*return*/];
                }
            });
        });
    };
    ChatComponent.prototype.updateContinuations = function (data, index, isMine, visibility) {
        //Update time to a readable format for the user
        var chatTime = data.chats[index].time;
        var dateSplit = data.chats[index].date.split('/');
        var timeSplit = chatTime.split(':');
        var formattedTime = '';
        if (timeSplit[1].length === 1) {
            timeSplit[1] = '0' + timeSplit[1];
        }
        var hours = parseInt(timeSplit[0]);
        if (hours > 12) {
            formattedTime = dateSplit[1] + '/' + dateSplit[2] + ', ' + (hours - 12) + ':' + timeSplit[1] + ' PM';
        }
        else {
            if (hours === 0)
                timeSplit[0] = '12';
            formattedTime = dateSplit[1] + '/' + dateSplit[2] + ', ' + timeSplit[0] + ':' + timeSplit[1] + ' AM';
        }
        //Push the message item
        this.messages.push(new ChatItem(data.chats[index], visibility, formattedTime, false, false));
        this.allMessages.push(new ChatItem(data.chats[index], visibility, formattedTime, false, false));
        //Check for continuation messages and update items accordingly
        var i = index - 1;
        while (i >= 0 && data.chats[i].userId === data.chats[index].userId) {
            if (this.isTimeOver(data.chats[i], data.chats[index]))
                return;
            if (i >= this.messages.length) {
                var msg = this.messages.getItem(this.messages.length + i - data.chats.length);
                msg.visibility = 'collapse';
                if (isMine) {
                    msg.mineContinuation = true;
                }
                else {
                    msg.theirsContinuation = true;
                }
                this.messages.setItem(this.messages.length + i - data.chats.length, msg);
            }
            else {
                var msg = this.messages.getItem(i);
                msg.visibility = 'collapse';
                if (isMine) {
                    msg.mineContinuation = true;
                }
                else {
                    msg.theirsContinuation = true;
                }
                this.messages.setItem(i, msg);
            }
            this.allMessages.setItem(i, msg);
            i = i - 1;
        }
        // this.list.scrollToIndex(this.messages.length - 1);
    };
    ChatComponent.prototype.isTimeOver = function (chat1, chat2) {
        var time1 = chat1.time;
        var time2 = chat2.time;
        var date1 = chat1.date;
        var date2 = chat2.date;
        var time1Split = time1.split(':');
        var time2Split = time2.split(':');
        var time1TotalSeconds = parseInt(time1Split[0]) * 3600 + parseInt(time1Split[1]) * 60 + parseInt(time1Split[2]);
        var time2TotalSeconds = parseInt(time2Split[0]) * 3600 + parseInt(time2Split[1]) * 60 + parseInt(time2Split[2]);
        if (time2TotalSeconds - time1TotalSeconds > (60 * 3) || date2 > date1) {
            return true;
        }
        return false;
    };
    ChatComponent.prototype.align = function (item) {
        if (item.chatMessage.userId === this.userId)
            return "right";
        else
            return "left";
    };
    ChatComponent.prototype.alignReverse = function (item) {
        if (item.chatMessage.userId === this.userId)
            return "left";
        else
            return "right";
    };
    ChatComponent.prototype.setupItemView = function (args) {
        args.view.context.mine = (this.messages.getItem(args.index).chatMessage.userId === this.userId);
        args.view.context.theirs = (this.messages.getItem(args.index).chatMessage.userId !== this.userId);
        args.view.context.mineContinuation = (this.messages.getItem(args.index).mineContinuation);
        args.view.context.theirsContinuation = (this.messages.getItem(args.index).theirsContinuation);
        args.view.context.mineContinuationGrid = (this.messages.getItem(args.index).mineContinuation);
        args.view.context.theirsContinuationGrid = (this.messages.getItem(args.index).theirsContinuation);
        args.view.context.grid = (!args.view.context.theirsContinuation && !args.view.context.mineContinuation);
        args.view.context.mineTime = (!args.view.context.mineContinuation && args.view.context.mine);
        args.view.context.theirsTime = (!args.view.context.theirsContinuation && args.view.context.theirs);
        args.view.context.time = (!args.view.context.mineTime && !args.view.context.theirsTime);
        args.view.context.even = (args.index % 2 === 0);
        args.view.context.odd = (args.index % 2 === 1);
    };
    ChatComponent.prototype.onNavBtnTap = function () {
        if (this.router.canGoBack())
            this.router.back();
        else
            this.router.navigate(['chat-list'], { clearHistory: true });
    };
    ChatComponent.prototype.onTextTap = function () {
        this.list.scrollToIndex(this.messages.length - 1);
    };
    ChatComponent.prototype.loadMoreData = function () {
        // console.log('Load more')
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("messageList", { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ChatComponent.prototype, "lv", void 0);
    ChatComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chat',
            template: __webpack_require__("./app/chat/chat.component.html"),
            styles: [__webpack_require__("./app/chat/chat.component.css")]
        }),
        __metadata("design:paramtypes", [_datatransfer_service__WEBPACK_IMPORTED_MODULE_1__["TransferService"], nativescript_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterExtensions"], _logincheck_service_tns__WEBPACK_IMPORTED_MODULE_4__["LogincheckService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]])
    ], ChatComponent);
    return ChatComponent;
}());



/***/ }),

/***/ "./app/confirmation/confirmation.component.css":
/***/ (function(module, exports) {

module.exports = "/* Add mobile styles for the component here.  */\n.delete-btn {\n    display: block;\n    color: #ac00e6;\n    /*padding: 6px 24px;*/\n    border-width: 1;\n    border-color: #ac00e6;\n    border-radius: 5;\n    text-align: center;\n    float: center;\n    margin: auto; \n    font-weight: 700;\n    font-family: \"Segoe UI\",Arial,sans-serif;\n    margin-bottom: 15;\n    margin-right: 15;\n    width: 120;\n    height: 40;\n    horizontal-align:right;\n}\n\n.delete-btn:highlighted {\n    background-color: #f9e6ff;\n}\n\n.cancel-btn {\n    display: block;\n    /*color: white;*/\n    /*padding: 6px 24px;*/\n    border-width: 1;\n    border-color: black;\n    border-radius: 5;\n    text-align: center;\n    float: center;\n    margin: auto; \n    font-weight: 700;\n    font-family: \"Segoe UI\",Arial,sans-serif;\n    margin-bottom: 15;\n    margin-left: 15;\n    width: 120;\n    height: 40;\n    horizontal-align:left;\n}\n\n.cancel-btn:highlighted {\n    background-color: #f1f1f1;\n}\n\n.delete-label {\n\tfont-size: 20;\n\tmargin-top: 18;\n\tmargin-bottom: 48;\n\tmargin-left: 18;\n\tmargin-right: 18;\n\tcolor: black;\n}"

/***/ }),

/***/ "./app/confirmation/confirmation.component.html":
/***/ (function(module, exports) {

module.exports = "<StackLayout>\n\t<Label textWrap=\"true\" text=\"Are you sure you want to delete?\" class=\"delete-label\"></Label>\n\t<GridLayout rows=\"auto\" columns=\"*\">\n\t\t<Button row=\"0\" text=\"Cancel\" class=\"cancel-btn\" (tap)=\"close('cancel')\"></Button>\n\t\t<Button row=\"0\" text=\"Delete\" class=\"delete-btn\" (tap)=\"close('delete')\"></Button>\n\t</GridLayout>\n</StackLayout>"

/***/ }),

/***/ "./app/confirmation/confirmation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationComponent", function() { return ConfirmationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_angular_directives_dialogs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/nativescript-angular/directives/dialogs.js");
/* harmony import */ var nativescript_angular_directives_dialogs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_directives_dialogs__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfirmationComponent = /** @class */ (function () {
    function ConfirmationComponent(params) {
        this.params = params;
    }
    ConfirmationComponent.prototype.ngOnInit = function () {
    };
    ConfirmationComponent.prototype.close = function (res) {
        this.params.closeCallback(res);
    };
    ConfirmationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-confirmation',
            template: __webpack_require__("./app/confirmation/confirmation.component.html"),
            styles: [__webpack_require__("./app/confirmation/confirmation.component.css")]
        }),
        __metadata("design:paramtypes", [nativescript_angular_directives_dialogs__WEBPACK_IMPORTED_MODULE_1__["ModalDialogParams"]])
    ], ConfirmationComponent);
    return ConfirmationComponent;
}());



/***/ }),

/***/ "./app/connect/connect.component.css":
/***/ (function(module, exports) {

module.exports = "/*\nAdd your NativeScript specific styles here.\nTo learn more about styling in NativeScript see:\nhttps://docs.nativescript.org/angular/ui/styling\n*/"

/***/ }),

/***/ "./app/connect/connect.component.html":
/***/ (function(module, exports) {

module.exports = "<StackLayout>\n  <Label text=\"connect works\" textWrap=\"true\"></Label>\n  <Label text=\"This is a migrated component\" textWrap=\"true\"></Label>\n  <Label text=\"Update it to provide the UI elements required in your mobile app\" textWrap=\"true\"></Label>\n</StackLayout>\n\n<!--\nOriginal Web template:\n\n<p>\n  connect works!\n</p>\n\n-->"

/***/ }),

/***/ "./app/connect/connect.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectComponent", function() { return ConnectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _logincheck_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/logincheck.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConnectComponent = /** @class */ (function () {
    function ConnectComponent(logincheckService) {
        this.logincheckService = logincheckService;
    }
    ConnectComponent.prototype.ngOnInit = function () {
        this.logincheckService.loginCheck();
    };
    ConnectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-connect',
            template: __webpack_require__("./app/connect/connect.component.html"),
            styles: [__webpack_require__("./app/connect/connect.component.css")]
        }),
        __metadata("design:paramtypes", [_logincheck_service__WEBPACK_IMPORTED_MODULE_1__["LogincheckService"]])
    ], ConnectComponent);
    return ConnectComponent;
}());



/***/ }),

/***/ "./app/datatransfer.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransferService", function() { return TransferService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TransferService = /** @class */ (function () {
    function TransferService(router) {
        this.router = router;
    }
    TransferService.prototype.setData = function (data) {
        this.data = data;
    };
    TransferService.prototype.getData = function () {
        var temp = this.data;
        this.clearData();
        return temp;
    };
    TransferService.prototype.clearData = function () {
        this.data = undefined;
    };
    TransferService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], TransferService);
    return TransferService;
}());



/***/ }),

/***/ "./app/dialog/dialog.component.css":
/***/ (function(module, exports) {

module.exports = "p {\n\tbackground-color: #d8c3ec;\n\ttext-align: center;\n}\n\n#close-dialog {\n\tfloat: right;\n}\n\n.close {\n\tfont-color: black;\n    float: right;\n    font-size: 16px;\n    font-weight: bold;\n    margin-right: 0.5em;\n}"

/***/ }),

/***/ "./app/dialog/dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<p id=\"dialog\">\n  Your settings have been updated!\n  <span class=\"close\" id=\"close-dialog\">&times;</span>\n</p>\n"

/***/ }),

/***/ "./app/dialog/dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogComponent", function() { return DialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DialogComponent = /** @class */ (function () {
    function DialogComponent() {
    }
    DialogComponent.prototype.ngOnInit = function () {
    };
    DialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dialog',
            template: __webpack_require__("./app/dialog/dialog.component.html"),
            styles: [__webpack_require__("./app/dialog/dialog.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DialogComponent);
    return DialogComponent;
}());



/***/ }),

/***/ "./app/dynamic-add.service.tns.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicAddService", function() { return DynamicAddService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _posting_posting_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/posting/posting.component.ts");
/* harmony import */ var _datatransfer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/datatransfer.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DynamicAddService = /** @class */ (function () {
    function DynamicAddService(componentFactoryResolver, appRef, injector, transferService) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.appRef = appRef;
        this.injector = injector;
        this.transferService = transferService;
    }
    DynamicAddService.prototype.appendComponentToBody = function (layout) {
        if (layout === void 0) { layout = null; }
        // 1. Create a component reference from the component 
        var componentRef = this.componentFactoryResolver
            .resolveComponentFactory(_posting_posting_component__WEBPACK_IMPORTED_MODULE_1__["PostingComponent"])
            .create(this.injector);
        // 2. Attach component to the appRef so that it's inside the ng component tree
        this.appRef.attachView(componentRef.hostView);
        // 3. Get DOM element from component
        var domElem = componentRef.hostView
            .rootNodes[0];
        // 4. Append DOM element to the body
        layout.addChild(domElem);
    };
    DynamicAddService.prototype.appendPaymentMethod = function (method, info, superbody, isAdd, token) {
    };
    DynamicAddService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"],
            _datatransfer_service__WEBPACK_IMPORTED_MODULE_2__["TransferService"]])
    ], DynamicAddService);
    return DynamicAddService;
}());



/***/ }),

/***/ "./app/dynamic-add.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicAddService", function() { return DynamicAddService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _posting_posting_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/posting/posting.component.ts");
/* harmony import */ var _datatransfer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/datatransfer.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DynamicAddService = /** @class */ (function () {
    function DynamicAddService(componentFactoryResolver, appRef, injector, transferService) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.appRef = appRef;
        this.injector = injector;
        this.transferService = transferService;
    }
    DynamicAddService.prototype.appendComponentToBody = function (layout) {
        if (layout === void 0) { layout = null; }
        // 1. Create a component reference from the component 
        var componentRef = this.componentFactoryResolver
            .resolveComponentFactory(_posting_posting_component__WEBPACK_IMPORTED_MODULE_1__["PostingComponent"])
            .create(this.injector);
        // 2. Attach component to the appRef so that it's inside the ng component tree
        this.appRef.attachView(componentRef.hostView);
        // 3. Get DOM element from component
        var domElem = componentRef.hostView
            .rootNodes[0];
        // 4. Append DOM element to the body
        layout.addChild(domElem);
    };
    DynamicAddService.prototype.appendPaymentMethod = function (method, info, superbody, isAdd, token) {
    };
    DynamicAddService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"],
            _datatransfer_service__WEBPACK_IMPORTED_MODULE_2__["TransferService"]])
    ], DynamicAddService);
    return DynamicAddService;
}());



/***/ }),

/***/ "./app/float-btn/float-btn.component.css":
/***/ (function(module, exports) {

module.exports = ".float-btn {\n\tbackground-color: #ac00e6;\n\twidth: 56;\n\theight: 56;\n\ttext-align: center;\n\tvertical-align: middle;\n\tborder-radius: 50%;\n}\n\n.float-btn-text {\n\tcolor: #ffffff;\n\tfont-size: 36;\n\t/*margin-top: -6;*/\n}"

/***/ }),

/***/ "./app/float-btn/float-btn.component.html":
/***/ (function(module, exports) {

module.exports = "<StackLayout class=\"float-btn\">\n\t<Label class=\"float-btn-text\" text=\"+\"></Label>\n</StackLayout>"

/***/ }),

/***/ "./app/float-btn/float-btn.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FloatBtnComponent", function() { return FloatBtnComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FloatBtnComponent = /** @class */ (function () {
    function FloatBtnComponent() {
    }
    FloatBtnComponent.prototype.ngOnInit = function () {
    };
    FloatBtnComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-float-btn',
            template: __webpack_require__("./app/float-btn/float-btn.component.html"),
            styles: [__webpack_require__("./app/float-btn/float-btn.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FloatBtnComponent);
    return FloatBtnComponent;
}());



/***/ }),

/***/ "./app/google-maps.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleMapsService", function() { return GoogleMapsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GoogleMapsService = /** @class */ (function () {
    function GoogleMapsService(httpClient) {
        this.httpClient = httpClient;
        this.API_KEY = 'AIzaSyAITxS1jmf8PMtazRguWcAfWQxW1kPOoYg';
        this.static_maps_uri = 'https://maps.googleapis.com/maps/api/staticmap?key=' + this.API_KEY + '&size=340x220&scale=2&maptype=roadmap\&markers=size:small%7Ccolor:red%7C';
        this.static_maps_uri_large = 'https://maps.googleapis.com/maps/api/staticmap?key=' + this.API_KEY + '&size=512x512&scale=2&maptype=roadmap\&markers=size:small%7Ccolor:red%7C';
        this.geocode_uri = 'https://maps.googleapis.com/maps/api/geocode/json?key=' + this.API_KEY + '&address=';
    }
    GoogleMapsService.prototype.getStaticMap = function (startadr, endadr) {
        var formatted_startadr = startadr.split(' ').join('+');
        var formatted_startadr = startadr.split('&').join('and');
        var formatted_endadr = endadr.split(' ').join('+');
        var formatted_endadr = endadr.split('&').join('and');
        return this.static_maps_uri + formatted_startadr + "&markers=size:med%7C" + formatted_endadr;
    };
    GoogleMapsService.prototype.getStaticMapLarge = function (startadr, endadr) {
        var formatted_startadr = startadr.split(' ').join('+');
        var formatted_startadr = startadr.split('&').join('and');
        var formatted_endadr = endadr.split(' ').join('+');
        var formatted_endadr = endadr.split('&').join('and');
        return this.static_maps_uri_large + formatted_startadr + "&markers=size:med%7C" + formatted_endadr;
    };
    GoogleMapsService.prototype.getGeocodeResults = function (address) {
        var formatted_address = address.split(' ').join('+');
        var formatted_address = address.split('&').join('and');
        return this.httpClient.get("" + this.geocode_uri + formatted_address);
    };
    GoogleMapsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], GoogleMapsService);
    return GoogleMapsService;
}());



/***/ }),

/***/ "./app/history/history.component.css":
/***/ (function(module, exports) {

module.exports = "/*\nAdd your NativeScript specific styles here.\nTo learn more about styling in NativeScript see:\nhttps://docs.nativescript.org/angular/ui/styling\n*/\n\n.actionbar {\n\tfont-size: 22;\n\tfont-weight: 700;\n\ttext-align: left;\n\tcolor: black;\n}\n\nLabel {\n\ttext-align: left;\n}\n\n.name-label {\n\tmargin-top: 16;\n\tmargin-left: 18;\n\tcolor: black;\n\tfont-weight: 700;\n\tfont-size: 17;\n}\n\n.info-label {\n\tmargin-top: 4;\n\tmargin-left: 18;\n\tmargin-bottom: 16;\n\tcolor: black;\n}\n\n.post {\n\tborder-bottom-width: 1;\n\tborder-color: #f1f1f1;\n\tmargin-top: 150;\n\tmargin-bottom: 15;\n}\n\n.post:highlighted {\n\t/*background-color: #f1f1f1;*/\n}\n\n.posting-map {\n\tmargin-bottom: 16;\n\tborder-radius: 10;\n\theight: 220;\n\twidth: 340;\n}\n\n.profile-picture {\n\theight: 50;\n\twidth: 50;\n\tborder-radius: 100%;\n\tvertical-align: top;\n\tmargin-left: 16;\n\tmargin-top: 20;\n}\n\n.refresh {\n\tcolor: #ac00e6;\n}"

/***/ }),

/***/ "./app/history/history.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <app-navigation></app-navigation> -->\n<PullToRefresh (refresh)=\"refreshList($event)\" class=\"refresh\">\n\t<ListView [items]=\"postings\" (itemTap)=\"onItemTap($event)\" #listView id=\"listView\">\n\t    <ng-template let-item=\"item\" let-i=\"index\" let-odd=\"odd\" let-even=\"even\">\n\t        <StackLayout [class.odd]=\"odd\" [class.even]=\"even\" class=\"post\">\n\t        \t  <StackLayout orientation=\"horizontal\">\n\t        \t  \t<Image [src]=\"item.profileSource\" class=\"profile-picture\" stretch=\"aspectFit\"></Image>\n\t        \t  \t<StackLayout>\n\t\t              \t<Label textWrap=\"true\" id=\"post-name\" class=\"name-label\" [text]=\"item.username\"></Label>\n\t\t              \t<Label textWrap=\"true\" id=\"post-info\" class=\"info-label\" [text]=\"item.info\"></Label>\n\t\t            </StackLayout>\n\t              </StackLayout>\n\t\t\t\t  <Image [src]=\"item.mapSource\" stretch=\"aspectFit\" class=\"posting-map\"></Image>\n\t        </StackLayout>\n\t    </ng-template>\n\t</ListView>\n</PullToRefresh>\n\n<!--\nOriginal Web template:\n\n<app-navigation></app-navigation>\n\n<div class=\"right-background\">\n\t<div class=\"user-card-right info\">\n\t\t<img src=\"src/img/sample_profile.jpg\" alt=\"Profile Photo\" id=\"profile_pic\">\n\t\t<div id=\"name_info\">\n\t\t\t<h3 id=\"username\">{{user.name}}</h3>\n\t\t\t<h3 id=\"user_university\">University of Virginia</h3>\n\t\t</div>\n\t\t<div class=\"userStats\">\n\t\t\t<span id=\"user_rides_given\" class=\"userData\">Rides Given: </span>\n\t\t\t<span id=\"num_rides_given\"></span>\n\t\t\t<span id=\"user_rides_received\" class=\"userData\">Rides Received: </span>\n\t\t\t<span id=\"num_rides_received\"></span>\n\t\t</div>\n\t</div>\n</div>\n<div id=\"history\" class=\"tabcontent\">\n\t<h3 align=\"center\">Your Rides</h3>\n\t<div id=\"bigfeed\" (window:resize)=\"onResize($event)\"></div>\n</div>\n-->"

/***/ }),

/***/ "./app/history/history.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryComponent", function() { return HistoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _datatransfer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/datatransfer.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _posting_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/posting.service.ts");
/* harmony import */ var _dynamic_add_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/dynamic-add.service.ts");
/* harmony import */ var _logincheck_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./app/logincheck.service.ts");
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../node_modules/tns-core-modules/data/observable-array/observable-array.js");
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../node_modules/nativescript-plugin-firebase/firebase.js");
/* harmony import */ var nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var tns_core_modules_image_source__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../node_modules/tns-core-modules/image-source/image-source.js");
/* harmony import */ var tns_core_modules_image_source__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_image_source__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var tns_core_modules_ui_image_cache__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("../node_modules/tns-core-modules/ui/image-cache/image-cache.js");
/* harmony import */ var tns_core_modules_ui_image_cache__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_image_cache__WEBPACK_IMPORTED_MODULE_9__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var PostItem = /** @class */ (function () {
    function PostItem(username, info, profileSource, mapSource) {
        this.username = username;
        this.info = info;
        this.profileSource = profileSource;
        this.mapSource = mapSource;
    }
    return PostItem;
}());
var HistoryComponent = /** @class */ (function () {
    function HistoryComponent(logincheckService, transferService, router, postingService, addService) {
        this.logincheckService = logincheckService;
        this.transferService = transferService;
        this.router = router;
        this.postingService = postingService;
        this.addService = addService;
        //user = this.logincheckService.getUser();
        this.user = '';
        this.name = "Adam Yee";
        this.blocks = 0;
        this.postings = new tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_6__["ObservableArray"]();
        this.p = [];
        this.ids = [];
        this.cache = new tns_core_modules_ui_image_cache__WEBPACK_IMPORTED_MODULE_9__["Cache"]();
    }
    HistoryComponent.prototype.ngOnInit = function () {
        this.logincheckService.loginCheck();
        this.user = this.logincheckService.getUser();
        this.loadPostings();
    };
    HistoryComponent.prototype.loadPostings = function (args) {
        var _this = this;
        if (args === void 0) { args = null; }
        this.postings.splice(0);
        var postIds = [];
        var postingsCollection = nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_7__["firestore"].collection('postings');
        var usersCollection = nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_7__["firestore"].collection('users').doc(this.user);
        usersCollection.get().then(function (doc) {
            postIds = doc.data().posts;
            for (var i = 0; i < postIds.length; i++) {
                postingsCollection.doc(postIds[i]).get().then(function (doc) {
                    _this.createPosting(doc.data(), doc.id);
                });
            }
            if (args != null) {
                var pullRefresh = args.object;
                pullRefresh.refreshing = false;
            }
            var listView = _this.lv.nativeElement;
            listView.scrollToIndex(postIds.length - 1);
        });
    };
    HistoryComponent.prototype.createPosting = function (data, id) {
        var _this = this;
        this.cache.placeholder = Object(tns_core_modules_image_source__WEBPACK_IMPORTED_MODULE_8__["fromFile"])("~/img/gray_background.jpg");
        this.cache.maxRequests = 5;
        var info_label = "";
        if (data.capacity != "-1")
            info_label = "Offering ride leaving " + data.date + " from " + data.startAddress + " to " + data.endAddress + " for " + data.price;
        else
            info_label = "Requesting ride leaving " + data.date + " from " + data.startAddress + " to " + data.endAddress;
        var usersCollection = nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_7__["firestore"].collection('users');
        usersCollection.doc(data.uid).get().then(function (doc) {
            if (doc.exists) {
                var url = doc.data().profile_source;
                if (url.substring(0, 27) === 'https://graph.facebook.com/')
                    url += '?height=300';
                _this.postings.push(new PostItem(data.user, info_label, url, data.map_url));
                _this.p.push(data);
                _this.ids.push(id);
            }
        });
    };
    HistoryComponent.prototype.refreshList = function (args) {
        this.loadPostings(args);
    };
    HistoryComponent.prototype.addCache = function (url) {
        var cachedImageSource;
        var myImage = this.cache.get(url);
        if (myImage) {
            // If present -- use it.
            cachedImageSource = Object(tns_core_modules_image_source__WEBPACK_IMPORTED_MODULE_8__["fromNativeSource"])(myImage);
            return cachedImageSource;
        }
        else {
            // If not present -- request its download + put it in the cache.
            this.cache.push({
                key: url,
                url: url,
                completed: function (image, key) {
                    if (url === key) {
                        cachedImageSource = Object(tns_core_modules_image_source__WEBPACK_IMPORTED_MODULE_8__["fromNativeSource"])(image);
                        return cachedImageSource;
                    }
                }
            });
        }
    };
    HistoryComponent.prototype.onItemTap = function (args) {
        this.transferService.setData({
            postInfo: { id: this.ids[args.index], data: this.p[args.index] },
            postItem: this.postings.getItem(args.index)
        });
        this.router.navigate(['posting-info']);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('listView', { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HistoryComponent.prototype, "lv", void 0);
    HistoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-history',
            template: __webpack_require__("./app/history/history.component.html"),
            styles: [__webpack_require__("./app/history/history.component.css")]
        }),
        __metadata("design:paramtypes", [_logincheck_service__WEBPACK_IMPORTED_MODULE_5__["LogincheckService"], _datatransfer_service__WEBPACK_IMPORTED_MODULE_1__["TransferService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _posting_service__WEBPACK_IMPORTED_MODULE_3__["PostingService"], _dynamic_add_service__WEBPACK_IMPORTED_MODULE_4__["DynamicAddService"]])
    ], HistoryComponent);
    return HistoryComponent;
}());



/***/ }),

/***/ "./app/home.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeDirective", function() { return HomeDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeDirective = /** @class */ (function () {
    function HomeDirective() {
    }
    HomeDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appHome]'
        }),
        __metadata("design:paramtypes", [])
    ], HomeDirective);
    return HomeDirective;
}());



/***/ }),

/***/ "./app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = "/*\nAdd your NativeScript specific styles here.\nTo learn more about styling in NativeScript see:\nhttps://docs.nativescript.org/angular/ui/styling\n*/\n.refresh {\n\tcolor: #ac00e6;\n}\n\n.actionbar {\n\tfont-size: 22;\n\tfont-weight: 700;\n\ttext-align: left;\n\tcolor: black;\n}\n\n.add-btn-container {\n\t/*position: absolute;*/\n\t/*bottom: 0;*/\n\t/*right: 0;*/\n\tvertical-align: bottom;\n\tz-index: 1;\n}\n\n.fab-button {\n  height: 56;\n  width: 56;\n  margin: 15;\n  /*margin-bottom: 64;*/\n  background-color: #ac00e6;\n  /*float: right;*/\n  horizontal-align: right;\n  vertical-align: bottom;\n}\n\nLabel {\n\ttext-align: left;\n}\n\n.name-label {\n\tmargin-top: 16;\n\tmargin-left: 18;\n\tcolor: black;\n\tfont-weight: 700;\n\tfont-size: 17;\n}\n\n.info-label {\n\tmargin-top: 4;\n\tmargin-left: 18;\n\tmargin-bottom: 16;\n\tcolor: black;\n}\n\n.post {\n\t/*border-bottom-width: 1;*/\n\tborder-color: #f1f1f1;\n}\n\n.post:highlighted {\n\t/*background-color: #f1f1f1;*/\n}\n\n.posting-map {\n\tmargin-bottom: 16;\n\tborder-radius: 10;\n\theight: 220;\n\twidth: 340;\n}\n\n.profile-picture {\n\theight: 50;\n\twidth: 50;\n\tborder-radius: 100%;\n\tvertical-align: top;\n\tmargin-left: 16;\n\tmargin-top: 20;\n}\n\n.activity-indicator {\n\tcolor: #ac00e6;\n}"

/***/ }),

/***/ "./app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <ActionBar title=\"Home\" class=\"actionbar\">\n\t<NavigationButton ios:visibility=\"collapsed\" icon=\"~/img/menu-icon.png\" (tap)=\"showSideDrawer()\" ></NavigationButton>\n<ActionItem android:visibility=\"collapsed\" icon=\"~/img/menu-icon.png\" ios.position=\"left\" (tap)=\"showSideDrawer()\" ></ActionItem>\n</ActionBar> -->\n\n    <StackLayout class=\"add-btn-container\">\n\t\t<FAB (tap)=\"showModal()\" icon=\"res://ic_add_white_3x\" rippleColor=\"#f1f1f1\" class=\"fab-button\"></FAB>\n\t</StackLayout>\n\n\t<PullToRefresh (refresh)=\"refreshList($event)\" class=\"refresh\">\n\t\t<ListView [items]=\"postings\" (itemTap)=\"onItemTap($event)\" #listView id=\"listView\">\n\t\t    <ng-template let-item=\"item\" let-i=\"index\" let-odd=\"odd\" let-even=\"even\">\n\t\t        <StackLayout [class.odd]=\"odd\" [class.even]=\"even\" class=\"post\">\n\t\t        \t  <StackLayout orientation=\"horizontal\">\n\t\t        \t  \t<Image [src]=\"item.profileSource\" class=\"profile-picture\" stretch=\"aspectFit\"></Image>\n\t\t        \t  \t<StackLayout>\n\t\t\t              \t<Label textWrap=\"true\" id=\"post-name\" class=\"name-label\" [text]=\"item.username\"></Label>\n\t\t\t              \t<Label textWrap=\"true\" id=\"post-info\" class=\"info-label\" [text]=\"item.info\"></Label>\n\t\t\t            </StackLayout>\n\t\t              </StackLayout>\n\t\t\t\t\t  <Image [src]=\"item.mapSource\" stretch=\"aspectFit\" class=\"posting-map\"></Image>\n\t\t        </StackLayout>\n\t\t    </ng-template>\n\t\t</ListView>\n\t</PullToRefresh>\n\t<ActivityIndicator #activityIndicator busy=\"true\" width=\"40\" height=\"40\" class=\"activity-indicator\">\n  </ActivityIndicator>"

/***/ }),

/***/ "./app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/tns-core-modules/data/observable-array/observable-array.js");
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _datatransfer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/datatransfer.service.ts");
/* harmony import */ var _dynamic_add_service_tns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/dynamic-add.service.tns.ts");
/* harmony import */ var tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/tns-core-modules/ui/page/page.js");
/* harmony import */ var tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _user_service_tns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./app/user.service.tns.ts");
/* harmony import */ var _posting_service_tns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./app/posting.service.tns.ts");
/* harmony import */ var nativescript_angular_directives_dialogs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../node_modules/nativescript-angular/directives/dialogs.js");
/* harmony import */ var nativescript_angular_directives_dialogs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_directives_dialogs__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _google_maps_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./app/google-maps.service.ts");
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("../node_modules/tns-core-modules/application/application.js");
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_application__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("../node_modules/nativescript-plugin-firebase/firebase.js");
/* harmony import */ var nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("../node_modules/nativescript-angular/router/index.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _add_modal_add_modal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./app/add-modal/add-modal.component.ts");
/* harmony import */ var tns_core_modules_ui_image_cache__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("../node_modules/tns-core-modules/ui/image-cache/image-cache.js");
/* harmony import */ var tns_core_modules_ui_image_cache__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_image_cache__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var tns_core_modules_image_source__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("../node_modules/tns-core-modules/image-source/image-source.js");
/* harmony import */ var tns_core_modules_image_source__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_image_source__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var nativescript_angular_element_registry__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("../node_modules/nativescript-angular/element-registry.js");
/* harmony import */ var nativescript_angular_element_registry__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_element_registry__WEBPACK_IMPORTED_MODULE_16__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

















Object(nativescript_angular_element_registry__WEBPACK_IMPORTED_MODULE_16__["registerElement"])('Fab', function () { return __webpack_require__("../node_modules/@nstudio/nativescript-floatingactionbutton/fab.js").Fab; });
Object(nativescript_angular_element_registry__WEBPACK_IMPORTED_MODULE_16__["registerElement"])("PullToRefresh", function () { return __webpack_require__("../node_modules/@nstudio/nativescript-pulltorefresh/pulltorefresh.js").PullToRefresh; });
var PostItem = /** @class */ (function () {
    function PostItem(username, info, profileSource, mapSource) {
        this.username = username;
        this.info = info;
        this.profileSource = profileSource;
        this.mapSource = mapSource;
    }
    return PostItem;
}());
var HomeComponent = /** @class */ (function () {
    function HomeComponent(transferService, addService, page, userService, postingService, modal, vcRef, mapService, router, datePipe) {
        this.transferService = transferService;
        this.addService = addService;
        this.page = page;
        this.userService = userService;
        this.postingService = postingService;
        this.modal = modal;
        this.vcRef = vcRef;
        this.mapService = mapService;
        this.router = router;
        this.datePipe = datePipe;
        this.blocks = 1;
        this.postings = new tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__["ObservableArray"]();
        this.cache = new tns_core_modules_ui_image_cache__WEBPACK_IMPORTED_MODULE_14__["Cache"]();
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.loadPostings();
    };
    HomeComponent.prototype.onBackButtonTap = function () {
        tns_core_modules_application__WEBPACK_IMPORTED_MODULE_9__["android"].foregroundActivity.finish();
    };
    HomeComponent.prototype.showModal = function () {
        var _this = this;
        var options = {
            context: {},
            fullscreen: true,
            viewContainerRef: this.vcRef
            // animated: true,
            // transition: { name: "slideTop" }
        };
        this.modal.showModal(_add_modal_add_modal_component__WEBPACK_IMPORTED_MODULE_13__["AddModalComponent"], options).then(function (res) {
            // console.log(res);
            if (res == 'posted')
                _this.loadPostings();
        });
    };
    HomeComponent.prototype.showSideDrawer = function () {
        //const drawer = <RadSideDrawer>this.sd.nativeView;
        //console.dir(drawer);
        //console.dir(this.page);
        // drawer.showDrawer();
    };
    HomeComponent.prototype.loadPostings = function (args) {
        var _this = this;
        if (args === void 0) { args = null; }
        // let layout = <StackLayout>this.page.getViewById('feed');
        // layout.removeChildren();
        this.cache.placeholder = Object(tns_core_modules_image_source__WEBPACK_IMPORTED_MODULE_15__["fromFile"])("~/img/gray_background.jpg");
        this.cache.maxRequests = 5;
        this.postings.splice(0);
        var activityIndicator = this.ai.nativeElement;
        activityIndicator.busy = true;
        var currentDate = new Date();
        var posts = [];
        var postingsCollection = nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_10__["firestore"].collection('postings');
        var query = postingsCollection.where('formattedDate', '>=', this.datePipe.transform(currentDate, 'yyyy-MM-dd'));
        query.orderBy('formattedDate', 'asc').get().then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                posts.push({
                    id: doc.id,
                    data: doc.data()
                });
            });
            _this.p = posts;
            for (var i = 0; i < posts.length; i++) {
                _this.postings.push(new PostItem(posts[i].user, '', '', '~/img/gray_background.jpg'));
                _this.createPosting(posts[i].data, i);
            }
            activityIndicator.busy = false;
            if (args != null) {
                var pullRefresh = args.object;
                pullRefresh.refreshing = false;
            }
        });
    };
    //  createPosting(id, user, startadr, endadr, date, cost, capacity, comments) {
    // 	this.transferService.setData([{"index": this.blocks, "id": id, "user": user, "startadr": startadr, "endadr": endadr, "date": date, "cost": cost, "capacity": capacity, "comments": comments, "buttonType": "Connect"}]);
    // 	this.addService.appendComponentToBody(this.page.getViewById('feed'));
    //   this.blocks++;
    // }
    HomeComponent.prototype.createPosting = function (data, i) {
        var _this = this;
        var info_label = "";
        // this.createPosting(this.p[i]._id, this.p[i].user, this.p[i].startadr, this.p[i].endadr, this.p[i].date, this.p[i].cost, this.p[i].capacity, this.p[i].comments);
        if (data.capacity != "-1")
            info_label = "Offering ride leaving " + data.date + " from " + data.startAddress + " to " + data.endAddress + " for " + data.price;
        else
            info_label = "Requesting ride leaving " + data.date + " from " + data.startAddress + " to " + data.endAddress;
        var usersCollection = nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_10__["firestore"].collection('users');
        usersCollection.doc(data.uid).get().then(function (doc) {
            if (doc.exists) {
                var url = doc.data().profile_source;
                if (url.substring(0, 27) === 'https://graph.facebook.com/')
                    url += '?height=300';
                // var mapUrl = this.mapService.getStaticMap(data.startAddress + " " + data.startFormatted, data.endAddress + " " + data.endFormatted);
                // console.log(mapUrl)
                // this.addCache(url, 'pfp', data.user, info_label, url, data.map_url, i).then((res) => {
                //   console.log(res)
                //   this.addCache(data.map_url, 'map', data.user, info_label, url, data.map_url, i).then((res) =>{
                //     console.log(res)
                //   })
                // });
                _this.postings.setItem(i, new PostItem(data.user, info_label, url, data.map_url));
            }
        });
    };
    HomeComponent.prototype.addCache = function (url, img_type, user, info, pfp_url, map_url, i) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var cachedImageSource;
            var myImage = _this.cache.get(url);
            if (myImage) {
                // If present -- use it.
                cachedImageSource = Object(tns_core_modules_image_source__WEBPACK_IMPORTED_MODULE_15__["fromNativeSource"])(myImage);
                console.log(myImage);
                if (img_type === 'pfp')
                    _this.postings.setItem(i, new PostItem(user, info, cachedImageSource, map_url));
                else if (img_type === 'map')
                    _this.postings.setItem(i, new PostItem(user, info, _this.postings.getItem(i).profileSource, cachedImageSource));
                resolve({ message: 'Retrieved from cache', cacheURL: cachedImageSource });
            }
            else {
                // If not present -- request its download + put it in the cache.
                _this.cache.push({
                    key: url,
                    url: url,
                    completed: function (image, key) {
                        if (url === key) {
                            cachedImageSource = Object(tns_core_modules_image_source__WEBPACK_IMPORTED_MODULE_15__["fromNativeSource"])(image);
                            if (img_type === 'pfp')
                                _this.postings.setItem(i, new PostItem(user, info, cachedImageSource, map_url));
                            else if (img_type === 'map')
                                _this.postings.setItem(i, new PostItem(user, info, _this.postings.getItem(i).profileSource, cachedImageSource));
                        }
                        resolve({ message: 'Added to cache', cacheURL: cachedImageSource });
                    }
                });
            }
        });
    };
    HomeComponent.prototype.refreshList = function (args) {
        this.loadPostings(args);
    };
    HomeComponent.prototype.onItemTap = function (args) {
        console.log(this.postings.getItem(args.index));
        this.transferService.setData({
            postInfo: this.p[args.index],
            postItem: this.postings.getItem(args.index)
        });
        this.router.navigate(['posting-info']);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('listView', { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HomeComponent.prototype, "lv", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('activityIndicator', { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HomeComponent.prototype, "ai", void 0);
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            providers: [_dynamic_add_service_tns__WEBPACK_IMPORTED_MODULE_3__["DynamicAddService"]],
            template: __webpack_require__("./app/home/home.component.html"),
            styles: [__webpack_require__("./app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_datatransfer_service__WEBPACK_IMPORTED_MODULE_2__["TransferService"], _dynamic_add_service_tns__WEBPACK_IMPORTED_MODULE_3__["DynamicAddService"], tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_4__["Page"],
            _user_service_tns__WEBPACK_IMPORTED_MODULE_5__["UserService"], _posting_service_tns__WEBPACK_IMPORTED_MODULE_6__["PostingService"], nativescript_angular_directives_dialogs__WEBPACK_IMPORTED_MODULE_7__["ModalDialogService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"],
            _google_maps_service__WEBPACK_IMPORTED_MODULE_8__["GoogleMapsService"], nativescript_angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterExtensions"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["DatePipe"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./app/location/location.component.css":
/***/ (function(module, exports) {

module.exports = "/* Add mobile styles for the component here.  */\n.close {\n\tmargin: 10;\n\tfont-size: 28;\n\twidth: 48;\n\theight: 48;\n}\n\n.close-button-container {\n\tposition: absolute;\n\tleft: 0;\n}\n\n.header-label-2 {\n\tfont-size: 16;\n\tmargin-top: 12;\n\t/*margin-bottom: 12;*/\n\tfont-weight: 700;\n}\n\n.header-label-3 {\n\tmargin-bottom: 12;\n}\n\n.post {\n\tborder-color: #f1f1f1;\n}\n\n.post:highlighted {\n\tbackground-color: #f1f1f1;\n}"

/***/ }),

/***/ "./app/location/location.component.html":
/***/ (function(module, exports) {

module.exports = "<ScrollView>\n\t<StackLayout height=\"100%\">\n\t\t<StackLayout class=\"close-button-container\" orientation=\"horizontal\">\n\t\t\t<Label text=\"&times;\" class=\"close\" (tap)=\"close()\"></Label>\n\t\t</StackLayout>\n\n\t\t<StackLayout class=\"input-field\">\n<!-- \t\t\t<TextField class=\"input\" autocorrect=\"false\" hint=\"Find a location\" [(ngModel)]=\"address\" (textChange)=\"autocomplete()\" #searchLabel id=\"searchLabel\" required></TextField> -->\n\t\t\t<SearchBar hint=\"Find a location\" [text]=\"address\" (textChange)=\"search($event)\"></SearchBar>\n\t\t\t<StackLayout class=\"hr-light\"></StackLayout>\n\t\t</StackLayout>\n\n\t\t<ListView [items]=\"suggestions\" height=\"100%\">\n\t\t\t<ng-template let-item=\"item\" let-i=\"index\" let-odd=\"odd\" let-even=\"even\">\n\t\t\t\t<StackLayout [class.odd]=\"odd\" [class.even]=\"even\" class=\"post\" (tap)=\"selectPlace(item.placeSuggestion, item.placeAddress)\">\n\t\t\t\t\t<Label textWrap=\"true\" [text]=\"item.placeSuggestion\" class=\"header-label-2\"></Label>\n\t\t\t\t\t<Label textWrap=\"true\" [text]=\"item.placeAddress\" class=\"header-label-3\"></Label>\n\t\t\t\t</StackLayout>\n\t\t\t</ng-template>\n\t\t</ListView>\n\t</StackLayout>\n</ScrollView>"

/***/ }),

/***/ "./app/location/location.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationComponent", function() { return LocationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _places_autocomplete_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/places-autocomplete.service.ts");
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/tns-core-modules/data/observable-array/observable-array.js");
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var nativescript_angular_directives_dialogs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/nativescript-angular/directives/dialogs.js");
/* harmony import */ var nativescript_angular_directives_dialogs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_directives_dialogs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _datatransfer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/datatransfer.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Suggestion = /** @class */ (function () {
    function Suggestion(placeSuggestion, placeAddress) {
        this.placeSuggestion = placeSuggestion;
        this.placeAddress = placeAddress;
    }
    return Suggestion;
}());
var LocationComponent = /** @class */ (function () {
    function LocationComponent(params, placesService, transferService) {
        this.params = params;
        this.placesService = placesService;
        this.transferService = transferService;
        this.suggestions = new tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_2__["ObservableArray"]();
        this.placeSuggestions = new tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_2__["ObservableArray"]();
        this.placeAddresses = new tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_2__["ObservableArray"]();
        this.type = this.transferService.getData();
        this.ids = new Set();
    }
    LocationComponent.prototype.ngOnInit = function () {
        // setTimeout(() => this.searchLabel.nativeElement.focus(), 100);
    };
    LocationComponent.prototype.close = function () {
        this.params.closeCallback();
    };
    LocationComponent.prototype.selectPlace = function (place, address) {
        if (this.type == 'start')
            this.params.closeCallback({ 'start': place, 'address': address });
        else
            this.params.closeCallback({ 'end': place, 'address': address });
    };
    LocationComponent.prototype.search = function (args) {
        var _this = this;
        clearInterval(this.myTimer);
        this.myTimer = setTimeout(function () {
            var searchBar = args.object;
            _this.ids.clear();
            _this.suggestions.splice(0);
            setTimeout(function () {
                _this.placesService.getPlaceResults(searchBar.text).subscribe(function (data) {
                    for (var i = 0; i < data.results.length; i++) {
                        if (!_this.ids.has(data.results[i].place_id))
                            _this.suggestions.push(new Suggestion(data.results[i].name, data.results[i].formatted_address));
                        _this.ids.add(data.results[i].place_id);
                    }
                });
            }, 100);
            _this.placesService.getAutocompleteResultsAddress(searchBar.text).subscribe(function (data) {
                for (var i = 0; i < data.predictions.length; i++) {
                    if (!_this.ids.has(data.predictions[i].place_id))
                        _this.suggestions.push(new Suggestion(data.predictions[i].structured_formatting.main_text, data.predictions[i].structured_formatting.secondary_text));
                    _this.ids.add(data.predictions[i].place_id);
                }
            });
            // this.placesService.getAutocompleteResultsEstablishment(searchBar.text).subscribe((data: any) => {
            // 	  for(var i = 0; i < data.predictions.length; i++) {
            //     	if(!this.ids.has(data.predictions[i].place_id))
            //     		this.suggestions.push(new Suggestion(data.predictions[i].structured_formatting.main_text, data.predictions[i].structured_formatting.secondary_text));
            //     	this.ids.add(data.predictions[i].place_id);
            //     }
            // });
            _this.placesService.getAutocompleteResultsCity(searchBar.text).subscribe(function (data) {
                for (var i = 0; i < data.predictions.length; i++) {
                    if (!_this.ids.has(data.predictions[i].place_id))
                        _this.suggestions.push(new Suggestion(data.predictions[i].structured_formatting.main_text, data.predictions[i].structured_formatting.secondary_text));
                    _this.ids.add(data.predictions[i].place_id);
                }
            });
        }, 500);
    };
    LocationComponent.prototype.autocomplete = function () {
        var _this = this;
        setTimeout(function () {
            _this.ids.clear();
            _this.suggestions.splice(0);
            _this.placesService.getPlaceResults(_this.address).subscribe(function (data) {
                for (var i = 0; i < data.results.length; i++) {
                    if (!_this.ids.has(data.results[i].place_id))
                        _this.suggestions.push(new Suggestion(data.results[i].name, data.results[i].formatted_address));
                    _this.ids.add(data.results[i].place_id);
                }
            });
            setTimeout(function () {
                _this.placesService.getAutocompleteResultsAddress(_this.address).subscribe(function (data) {
                    for (var i = 0; i < data.predictions.length; i++) {
                        if (!_this.ids.has(data.predictions[i].place_id))
                            _this.suggestions.push(new Suggestion(data.predictions[i].structured_formatting.main_text, data.predictions[i].structured_formatting.secondary_text));
                        _this.ids.add(data.predictions[i].place_id);
                    }
                });
                // this.placesService.getAutocompleteResultsEstablishment(this.address).subscribe((data: any) => {
                // 	  for(var i = 0; i < data.predictions.length; i++) {
                //     	if(!this.ids.has(data.predictions[i].place_id))
                //     		this.suggestions.push(new Suggestion(data.predictions[i].structured_formatting.main_text, data.predictions[i].structured_formatting.secondary_text));
                //     	this.ids.add(data.predictions[i].place_id);
                //     }
                // });
                _this.placesService.getAutocompleteResultsCity(_this.address).subscribe(function (data) {
                    for (var i = 0; i < data.predictions.length; i++) {
                        if (!_this.ids.has(data.predictions[i].place_id))
                            _this.suggestions.push(new Suggestion(data.predictions[i].structured_formatting.main_text, data.predictions[i].structured_formatting.secondary_text));
                        _this.ids.add(data.predictions[i].place_id);
                    }
                });
            }, 100);
        }, 400);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("searchLabel", { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], LocationComponent.prototype, "searchLabel", void 0);
    LocationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-location',
            template: __webpack_require__("./app/location/location.component.html"),
            styles: [__webpack_require__("./app/location/location.component.css")]
        }),
        __metadata("design:paramtypes", [nativescript_angular_directives_dialogs__WEBPACK_IMPORTED_MODULE_3__["ModalDialogParams"], _places_autocomplete_service__WEBPACK_IMPORTED_MODULE_1__["PlacesAutocompleteService"], _datatransfer_service__WEBPACK_IMPORTED_MODULE_4__["TransferService"]])
    ], LocationComponent);
    return LocationComponent;
}());



/***/ }),

/***/ "./app/login.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginDirective", function() { return LoginDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginDirective = /** @class */ (function () {
    function LoginDirective() {
    }
    LoginDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appLogin]'
        }),
        __metadata("design:paramtypes", [])
    ], LoginDirective);
    return LoginDirective;
}());



/***/ }),

/***/ "./app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = "/*\nAdd your NativeScript specific styles here.\nTo learn more about styling in NativeScript see:\nhttps://docs.nativescript.org/angular/ui/styling\n*/\n\n.login {\n    display: block;\n    color: #ac00e6;\n    /*padding: 6px 24px;*/\n    border-width: 1;\n    border-color: #ac00e6;\n    border-radius: 5;\n    text-align: center;\n    float: center;\n    margin: auto; \n    font-weight: 700;\n    font-family: \"Segoe UI\",Arial,sans-serif;\n    margin-bottom: 15;\n    width: 120;\n    height: 40;\n}\n\n.login:highlighted {\n    background-color: #f9e6ff;\n}\n\n.login-info {\n\tmargin-top: 120;\n}\n\n.homescreen-logo {\n\tmargin-bottom: 200;\n}\n\n.h1 {\n\tfont-size: 50;\n\tfont-weight: 700;\n\tcolor: #ac00e6;\n}\n\n.login-wrapper {\n\tbackground-color: #f1f1f1;\n}"

/***/ }),

/***/ "./app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<StackLayout class=\"login-wrapper\">\n  <StackLayout class=\"login-info\">\n    <Image src=\"~/img/logo.png\" height=\"180\" width=\"180\" class=\"homescreen-logo\"></Image>\n<!--     <StackLayout class=\"slogans\">\n      <Label class=\"h3\" text=\"Find Rides Fast\"></Label>\n      <Label class=\"h3\" text=\"Connect with other students\"></Label>\n    </StackLayout> -->\n  </StackLayout>\n  <StackLayout class=\"login_wrapper\">\n    <Button class=\"login\" (tap)=\"toLogIn()\" text=\"Login\"></Button>\n    <Button class=\"login\" (tap)=\"toSignUp()\" text=\"Sign up\"></Button>\n  </StackLayout>\n</StackLayout>\n\n<!--\nOriginal Web template:\n\n<div class=\"content-right\">\n  <div class=\"login_wrapper\">\n      <input type=\"button\" value=\"Login\" class=\"login\" (click)=\"toLogIn()\" />\n      <input type=\"button\" value=\"Sign up\" class=\"login\" id=\"login2\" (click)=\"toSignUp()\"/>\n  </div>\n</div>\n\n<div class=\"content-left\">\n  <div class=\"login_info\">\n    <h1>CollegePool</h1>\n    <img src=\"src/img/logo.png\" alt=\"Logo\" height=\"90\" width=\"90\">\n    <div class=\"slogans\">\n      <h3>Find Rides Fast<br>\n      Connect with other students</h3>\n    </div>\n  </div>\n</div>\n-->"

/***/ }),

/***/ "./app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/nativescript-angular/router/index.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/tns-core-modules/ui/page/page.js");
/* harmony import */ var tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/nativescript-plugin-firebase/firebase.js");
/* harmony import */ var nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { CognitoAuth } from 'amazon-cognito-auth-js/dist/amazon-cognito-auth';

// import Auth from '@aws-amplify/auth';
// const firebase = require("nativescript-plugin-firebase");

// import { AngularFireAuth } from '@angular/fire/auth';
// import { auth } from 'firebase/app';
var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, page) {
        this.router = router;
        this.page = page;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
        var firebaseConfig = {
            apiKey: "AIzaSyBGuiYpM138Q6ayqDMRUVWJp1CE9WB09Nw",
            authDomain: "collegepool-1552749118617.firebaseapp.com",
            databaseURL: "https://collegepool-1552749118617.firebaseio.com",
            projectId: "collegepool-1552749118617",
            storageBucket: "collegepool-1552749118617.appspot.com",
            messagingSenderId: "375263680183",
            appID: "collegepool-1552749118617",
        };
        nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_3__["init"](firebaseConfig).then(function () {
            console.log("firebase.init done");
        }, function (error) {
            console.log("firebase.init error: " + error);
        });
        // firebase.auth().createUserWithEmailAndPassword('admin', 'kyvern123').catch(function(error) {
        //   // Handle Errors here.
        //   var errorCode = error.code;
        //   var errorMessage = error.message;
        //   // ...
        // });
    };
    LoginComponent.prototype.toLogIn = function () {
        // Auth.signIn("phillim", "Collegepool69*")
        // .then(user => {
        //     console.log(user)
        //     console.log("redirecting")
        // })
        var credentials = {
            passwordOptions: {
                email: 'adam.yee@gmail.com',
                password: 'kyvern123',
            },
            type: nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_3__["LoginType"].PASSWORD
        };
        nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_3__["login"](credentials).catch(function (err) {
            console.log(err);
        });
        nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_3__["getCurrentUser"]().then(function (res) {
            console.log(res);
        });
        this.router.navigate(['navigation']);
        // window.location.href='https://collegepooling.auth.us-east-2.amazoncognito.com/login?response_type=token&client_id=4sslmmgv9pn5lb5087aaj5r599&redirect_uri=http://localhost:4200/loginroute&state=STATE&scope=aws.cognito.signin.user.admin+openid';
    };
    LoginComponent.prototype.toSignUp = function () {
        nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_3__["createUser"]({
            email: 'adam.yee@gmail.com',
            password: 'kyvern123'
        }).catch(function (err) {
            console.log(err);
        });
        // this.afAuth.auth.createUserWithEmailAndPassword('adam.yee@gmail.com', 'kyvern123');
        this.router.navigate(['navigation']);
        // window.location.href='https://collegepooling.auth.us-east-2.amazoncognito.com/signup?response_type=token&client_id=4sslmmgv9pn5lb5087aaj5r599&redirect_uri=http://localhost:4200/loginroute&state=STATE&scope=aws.cognito.signin.user.admin+openid';
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("./app/login/login.component.html"),
            styles: [__webpack_require__("./app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterExtensions"], tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_2__["Page"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./app/logincheck.service.tns.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogincheckService", function() { return LogincheckService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/user.service.ts");
/* harmony import */ var _payment_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/payment.service.ts");
/* harmony import */ var nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/nativescript-plugin-firebase/firebase.js");
/* harmony import */ var nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/tns-core-modules/application-settings/application-settings.js");
/* harmony import */ var tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../node_modules/nativescript-angular/router/index.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LogincheckService = /** @class */ (function () {
    function LogincheckService(userService, paymentService, router) {
        this.userService = userService;
        this.paymentService = paymentService;
        this.router = router;
        //myStorage = window.localStorage;
        this.myStorage = null;
        //user info from cognito
        this.userInfo = null;
    }
    LogincheckService.prototype.addUserToFirestore = function (uid, address, birthdate, email, first_name, last_name, gender, phone_number, rides_given, rides_received, profile_source, token) {
        var usersCollection = nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_3__["firestore"].collection('users');
        usersCollection.doc(uid).set({
            address: address,
            birthdate: birthdate,
            email: email,
            first_name: first_name,
            last_name: last_name,
            gender: gender,
            phone_number: phone_number,
            rides_given: rides_given,
            rides_received: rides_received,
            profile_source: profile_source,
            posts: [],
            chats: [],
            tokens: [token]
        });
    };
    LogincheckService.prototype.decodeToken = function (token) {
    };
    LogincheckService.prototype.checkUser = function () {
    };
    LogincheckService.prototype.clearInfo = function () {
        this.user = null;
        this.userInfo = null;
        this.users = null;
        this.uid = null;
        tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_4__["clear"]();
    };
    LogincheckService.prototype.addUserToBraintree = function (username, name, email) {
        var _this = this;
        this.paymentService.addPaymentUser(this.uid, username, name, email).subscribe(function (data) {
            nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_3__["firestore"].collection('users').doc(_this.uid).update({
                payment_id: data.customer.id
            });
        });
        // this.paymentService.getPaymentUserById('258703956').subscribe((data: any) => {
        // 	console.log(data);
        // })
        console.log('added to braintree');
    };
    LogincheckService.prototype.loginUser = function (uid) {
        tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_4__["setString"]("uid", uid);
        console.log(uid);
        this.uid = uid;
    };
    LogincheckService.prototype.loginCheck = function () {
        if (this.getUser == null)
            this.router.navigate(['welcome'], { clearHistory: true });
    };
    LogincheckService.prototype.getUserFromLocalStorage = function () {
        return tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_4__["getString"]("uid");
    };
    LogincheckService.prototype.getUser = function () {
        this.uid = this.getUserFromLocalStorage();
        return this.uid;
    };
    LogincheckService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _payment_service__WEBPACK_IMPORTED_MODULE_2__["PaymentService"], nativescript_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterExtensions"]])
    ], LogincheckService);
    return LogincheckService;
}());



/***/ }),

/***/ "./app/logincheck.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogincheckService", function() { return LogincheckService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/user.service.ts");
/* harmony import */ var _payment_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/payment.service.ts");
/* harmony import */ var nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/nativescript-plugin-firebase/firebase.js");
/* harmony import */ var nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/tns-core-modules/application-settings/application-settings.js");
/* harmony import */ var tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../node_modules/nativescript-angular/router/index.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LogincheckService = /** @class */ (function () {
    function LogincheckService(userService, paymentService, router) {
        this.userService = userService;
        this.paymentService = paymentService;
        this.router = router;
        //myStorage = window.localStorage;
        this.myStorage = null;
        //user info from cognito
        this.userInfo = null;
    }
    LogincheckService.prototype.addUserToFirestore = function (uid, address, birthdate, email, first_name, last_name, gender, phone_number, rides_given, rides_received, profile_source, token) {
        var usersCollection = nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_3__["firestore"].collection('users');
        usersCollection.doc(uid).set({
            address: address,
            birthdate: birthdate,
            email: email,
            first_name: first_name,
            last_name: last_name,
            gender: gender,
            phone_number: phone_number,
            rides_given: rides_given,
            rides_received: rides_received,
            profile_source: profile_source,
            posts: [],
            chats: [],
            tokens: [token]
        });
    };
    LogincheckService.prototype.decodeToken = function (token) {
    };
    LogincheckService.prototype.checkUser = function () {
    };
    LogincheckService.prototype.clearInfo = function () {
        this.user = null;
        this.userInfo = null;
        this.users = null;
        this.uid = null;
        tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_4__["clear"]();
    };
    LogincheckService.prototype.addUserToBraintree = function (username, name, email) {
        var _this = this;
        this.paymentService.addPaymentUser(this.uid, username, name, email).subscribe(function (data) {
            nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_3__["firestore"].collection('users').doc(_this.uid).update({
                payment_id: data.customer.id
            });
        });
        // this.paymentService.getPaymentUserById('258703956').subscribe((data: any) => {
        // 	console.log(data);
        // })
        console.log('added to braintree');
    };
    LogincheckService.prototype.loginUser = function (uid) {
        tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_4__["setString"]("uid", uid);
        console.log(uid);
        this.uid = uid;
    };
    LogincheckService.prototype.loginCheck = function () {
        if (this.getUser == null)
            this.router.navigate(['welcome'], { clearHistory: true });
    };
    LogincheckService.prototype.getUserFromLocalStorage = function () {
        return tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_4__["getString"]("uid");
    };
    LogincheckService.prototype.getUser = function () {
        this.uid = this.getUserFromLocalStorage();
        return this.uid;
    };
    LogincheckService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _payment_service__WEBPACK_IMPORTED_MODULE_2__["PaymentService"], nativescript_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterExtensions"]])
    ], LogincheckService);
    return LogincheckService;
}());



/***/ }),

/***/ "./app/loginroute/loginroute.component.css":
/***/ (function(module, exports) {

module.exports = "/*\nAdd your NativeScript specific styles here.\nTo learn more about styling in NativeScript see:\nhttps://docs.nativescript.org/angular/ui/styling\n*/"

/***/ }),

/***/ "./app/loginroute/loginroute.component.html":
/***/ (function(module, exports) {

module.exports = "<StackLayout>\n  <Label text=\"loginroute works\" textWrap=\"true\"></Label>\n  <Label text=\"This is a migrated component\" textWrap=\"true\"></Label>\n  <Label text=\"Update it to provide the UI elements required in your mobile app\" textWrap=\"true\"></Label>\n</StackLayout>\n\n<!--\nOriginal Web template:\n\n<p>\n  Redirecting...\n</p>\n\n-->"

/***/ }),

/***/ "./app/loginroute/loginroute.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginrouteComponent", function() { return LoginrouteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _logincheck_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/logincheck.service.ts");
/* harmony import */ var _datatransfer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/datatransfer.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginrouteComponent = /** @class */ (function () {
    function LoginrouteComponent(logincheckService, transferService, router) {
        this.logincheckService = logincheckService;
        this.transferService = transferService;
        this.router = router;
        this.idToken = this.getParameterByName("id_token");
    }
    LoginrouteComponent.prototype.ngOnInit = function () {
        if (this.idToken == null || this.idToken == '')
            this.router.navigateByUrl('/login');
        this.logincheckService.decodeToken(this.idToken);
        this.logincheckService.checkUser();
    };
    LoginrouteComponent.prototype.getParameterByName = function (name) {
        var url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&#]" + name + "(=([^&#]*)|&|#|$)"), results = regex.exec(url);
        if (!results)
            return null;
        if (!results[2])
            return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    };
    LoginrouteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-loginroute',
            template: __webpack_require__("./app/loginroute/loginroute.component.html"),
            styles: [__webpack_require__("./app/loginroute/loginroute.component.css")]
        }),
        __metadata("design:paramtypes", [_logincheck_service__WEBPACK_IMPORTED_MODULE_1__["LogincheckService"], _datatransfer_service__WEBPACK_IMPORTED_MODULE_2__["TransferService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginrouteComponent);
    return LoginrouteComponent;
}());



/***/ }),

/***/ "./app/message-modal/message-modal.component.css":
/***/ (function(module, exports) {

module.exports = "/* Add mobile styles for the component here.  */\n"

/***/ }),

/***/ "./app/message-modal/message-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<Button text=\"message-modal works!\" class=\"btn btn-primary\"></Button>"

/***/ }),

/***/ "./app/message-modal/message-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageModalComponent", function() { return MessageModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MessageModalComponent = /** @class */ (function () {
    function MessageModalComponent() {
    }
    MessageModalComponent.prototype.ngOnInit = function () {
    };
    MessageModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-message-modal',
            template: __webpack_require__("./app/message-modal/message-modal.component.html"),
            styles: [__webpack_require__("./app/message-modal/message-modal.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MessageModalComponent);
    return MessageModalComponent;
}());



/***/ }),

/***/ "./app/navigation/navigation.component.tns.css":
/***/ (function(module, exports) {

module.exports = "/*\nAdd your NativeScript specific styles here.\nTo learn more about styling in NativeScript see:\nhttps://docs.nativescript.org/angular/ui/styling\n*/"

/***/ }),

/***/ "./app/navigation/navigation.component.tns.html":
/***/ (function(module, exports) {

module.exports = "<Page.actionBar>\n    <ActionBar title=\"{{ actionBarTitle }}\">\n    \t<ActionItem (tap)=\"toMessages()\" icon=\"~/img/send_message_icon.png\" ios.position=\"right\" width=\"20\" height=\"20\" #actionItem></ActionItem>\n    </ActionBar>\n</Page.actionBar>\n\n<TabView [(ngModel)]=\"tabSelectedIndex\" (tabItemTap)=\"home()\" (selectedIndexChanged)=\"onSelectedIndexChanged($event)\" androidTabsPosition=\"bottom\" selectedTabTextColor=\"#ac00e6\" #tabView>\n    <Page *tabItem=\"homeTab\">\n    \t<app-home></app-home>\n    </Page>\n    <Page *tabItem=\"searchTab\">\n    \t<app-search></app-search>\n    </Page>\n    <Page *tabItem=\"historyTab\">\n    \t<app-history></app-history>\n    </Page>\n    <Page *tabItem=\"settingsTab\">\n    \t<app-settings></app-settings>\n    </Page>\n</TabView>\n\n\n\n<!--\nOriginal Web template:\n\n<div class=\"topnav\">\n\t<div class=\"navbtns\">\n\t\t<a (click)=\"toHome()\" class=\"active navigation\" id=\"homenav\">Home</a>\n\t\t<a (click)=\"toHistory()\" class=\"navigation\" id=\"historynav\">History</a>\n\t\t<a (click)=\"toPayments()\" class=\"navigation\" id=\"paymentsnav\">Payments</a>\n\t\t<a (click)=\"toSettings()\" class=\"navigation\" id=\"settingsnav\">Settings</a>\n\t\t<a (click)=\"post()\" class=\"navigation\" id=\"postnav\">Post</a>\n\t</div>\n\n\t<div class=\"imgnav\">\n\t\t<img src=\"src/icon.png\" (click)=\"dropMenu()\">\n\t</div>\n</div>\n\n<div class=\"caret\" id=\"dropdown-caret\"></div>\n<div class=\"dropdown\" id=\"dropdown-menu\">\n\t<div class=\"dropdown-option\" (click)=\"toHome()\">\n\t\t<span>Home</span>\n\t</div>\n\t<div class=\"dropdown-option\" (click)=\"toSettings()\">\n\t\t<span>Settings</span>\n\t</div>\n\t<div class=\"dropdown-option\" (click)=\"logout()\">\n\t\t<span>Logout</span>\n\t</div>\n\t<div class=\"dropdown-option group-two\" (click)=\"dropMenu()\">\n\t\t<span>Close</span>\n\t</div>\n</div>\n\n-->"

/***/ }),

/***/ "./app/navigation/navigation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _datatransfer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/datatransfer.service.ts");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/nativescript-angular/router/index.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/tns-core-modules/ui/page/page.js");
/* harmony import */ var tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var nativescript_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/nativescript-dom/dom.js");
/* harmony import */ var nativescript_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nativescript_dom__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NavigationComponent = /** @class */ (function () {
    function NavigationComponent(transferService, router, page) {
        this.transferService = transferService;
        this.router = router;
        this.page = page;
        this.tabSelectedIndex = 0;
        this.actionBarTitle = 'Home';
        this.homeTab = { iconSource: 'res://home_highlighted' };
        this.searchTab = { iconSource: 'res://search' };
        this.historyTab = { iconSource: 'res://history' };
        this.settingsTab = { iconSource: 'res://settings' };
    }
    // @ViewChild('listView') lv: ElementRef;
    // listView = <ListView> this.lv.nativeElement;
    NavigationComponent.prototype.ngOnInit = function () {
        this.actionItem = this.ai.nativeElement;
        this.activebtn = this.transferService.getData();
        if (this.activebtn == "homenav") {
            this.homeTab = { iconSource: 'res://home_highlighted' };
            this.searchTab = { iconSource: 'res://search' };
            this.historyTab = { iconSource: 'res://history' };
            this.settingsTab = { iconSource: 'res://settings' };
            this.actionItem.visibility = 'visible';
            this.tabSelectedIndex = 0;
        }
        else if (this.activebtn == "searchnav") {
            this.homeTab = { iconSource: 'res://home' };
            this.searchTab = { iconSource: 'res://search_highlighted' };
            this.historyTab = { iconSource: 'res://history' };
            this.settingsTab = { iconSource: 'res://settings' };
            this.actionItem.visibility = 'collapse';
            this.tabSelectedIndex = 1;
        }
        else if (this.activebtn == "historynav") {
            this.homeTab = { iconSource: 'res://home' };
            this.searchTab = { iconSource: 'res://search' };
            this.historyTab = { iconSource: 'res://history_highlighted' };
            this.settingsTab = { iconSource: 'res://settings' };
            this.actionItem.visibility = 'collapse';
            this.tabSelectedIndex = 2;
        }
        else if (this.activebtn == "settingsnav") {
            this.homeTab = { iconSource: 'res://home' };
            this.searchTab = { iconSource: 'res://search' };
            this.historyTab = { iconSource: 'res://history' };
            this.settingsTab = { iconSource: 'res://settings_highlighted' };
            this.actionItem.visibility = 'collapse';
            this.tabSelectedIndex = 3;
        }
        // console.log(this.tabSelectedIndex)
        // var justSet = false;
        // if(isAndroid)
        //   application.android.on(AndroidApplication.activityBackPressedEvent, (data: AndroidActivityBackPressedEventData) => {
        //     console.log(this.tabSelectedIndex)
        //   if (this.tabSelectedIndex === 0 && !justSet) {
        //     application.android.foregroundActivity.finish();
        //   }
        //   else {
        //     this.tv.nativeElement.selectedIndex = 0;
        //     justSet = true;
        //     setTimeout(() => {justSet = false}, 500);
        //   }
        // });
    };
    NavigationComponent.prototype.paintActive = function (btn) {
        var navcontents = nativescript_dom__WEBPACK_IMPORTED_MODULE_4__["getElementsByClassName"]('navigation');
        for (var x = 0; x < navcontents.length; x++) {
            navcontents[x].className = 'navigation';
        }
        var button = this.page.getViewById(btn);
        button.className += ' active';
    };
    NavigationComponent.prototype.onSelectedIndexChanged = function (args) {
        if (args.oldIndex !== -1) {
            var newIndex = args.newIndex;
            if (newIndex === 0) {
                this.actionBarTitle = 'Home';
                this.toHome();
            }
            else if (newIndex === 1) {
                this.actionBarTitle = 'Search';
                this.toSearch();
            }
            else if (newIndex === 2) {
                this.actionBarTitle = 'Your posts';
                this.toHistory();
            }
            else if (newIndex === 3) {
                this.actionBarTitle = 'Settings';
                this.toSettings();
            }
        }
    };
    NavigationComponent.prototype.home = function () {
        if (this.tabSelectedIndex == 0) {
            var listView = this.page.getViewById('listView');
            listView.scrollToIndex(0);
        }
        this.actionItem.visibility = 'collapse';
    };
    NavigationComponent.prototype.toHome = function () {
        // this.transferService.setData('homenav');
        // this.router.navigate(['home']);
        this.homeTab = { iconSource: 'res://home_highlighted' };
        this.searchTab = { iconSource: 'res://search' };
        this.historyTab = { iconSource: 'res://history' };
        this.settingsTab = { iconSource: 'res://settings' };
        this.actionItem.visibility = 'visible';
        this.tabSelectedIndex = 0;
    };
    NavigationComponent.prototype.toSearch = function () {
        // this.transferService.setData('historynav');
        // this.router.navigate(['history']);
        this.homeTab = { iconSource: 'res://home' };
        this.searchTab = { iconSource: 'res://search_highlighted' };
        this.historyTab = { iconSource: 'res://history' };
        this.settingsTab = { iconSource: 'res://settings' };
        this.actionItem.visibility = 'collapse';
        this.tabSelectedIndex = 1;
    };
    NavigationComponent.prototype.toHistory = function () {
        // this.transferService.setData('settingsnav');
        // this.router.navigate(['settings']);
        this.homeTab = { iconSource: 'res://home' };
        this.searchTab = { iconSource: 'res://search' };
        this.historyTab = { iconSource: 'res://history_highlighted' };
        this.settingsTab = { iconSource: 'res://settings' };
        this.actionItem.visibility = 'collapse';
        this.tabSelectedIndex = 2;
    };
    NavigationComponent.prototype.toSettings = function () {
        // this.transferService.setData('searchnav');
        // this.router.navigate(['search']);
        this.homeTab = { iconSource: 'res://home' };
        this.searchTab = { iconSource: 'res://search' };
        this.historyTab = { iconSource: 'res://history' };
        this.settingsTab = { iconSource: 'res://settings_highlighted' };
        this.actionItem.visibility = 'collapse';
        this.tabSelectedIndex = 3;
    };
    NavigationComponent.prototype.toMessages = function () {
        this.router.navigate(['chat-list']);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('tabView', { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], NavigationComponent.prototype, "tv", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('actionBar', { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], NavigationComponent.prototype, "ab", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('actionItem', { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], NavigationComponent.prototype, "ai", void 0);
    NavigationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__("./app/navigation/navigation.component.tns.html"),
            styles: [__webpack_require__("./app/navigation/navigation.component.tns.css")]
        }),
        __metadata("design:paramtypes", [_datatransfer_service__WEBPACK_IMPORTED_MODULE_1__["TransferService"], nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterExtensions"], tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_3__["Page"]])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./app/payment-info/payment-info.component.css":
/***/ (function(module, exports) {

module.exports = "/* Add mobile styles for the component here.  */\n.remove-payment-label {\n\tfont-size: 16;\n\tcolor: #ac00e6;\n\tmargin-left: 18;\n\ttext-align: left;\n\tpadding: 18;\n}\n\n.info-label {\n\tcolor: black;\n\tfont-size: 24;\n\ttext-align: left;\n\tmargin-left: 36;\n\tmargin-top: 36;\n}\n\n.details-label {\n\tcolor: black;\n\tfont-size: 16;\n\ttext-align: left;\n\tmargin-left: 36;\n\tmargin-top: 18;\n\tmargin-bottom: 72;\n}\n\n.activity-indicator {\n\tcolor: #ac00e6;\n}"

/***/ }),

/***/ "./app/payment-info/payment-info.component.html":
/***/ (function(module, exports) {

module.exports = "<Page>\n\t<Page.actionBar>\n\t\t<ActionBar title=\"Payment Info\">\n\t\t  <NavigationButton text=\"Go Back\" android.systemIcon=\"ic_menu_back\" (tap)=\"onNavBtnTap()\"></NavigationButton>\n\t\t</ActionBar>\n\t</Page.actionBar>\n\n\t<StackLayout #infoContainer>\n\t\t<StackLayout>\n\t\t\t<Label textWrap=\"true\" text=\"{{ paymentInfo.type }}\" class=\"info-label\"></Label>\n\t\t\t<Label textWrap=\"true\" text=\"{{ paymentInfo.info }}\" class=\"details-label\"></Label>\n\t\t</StackLayout>\n\t\t<StackLayout (tap)=\"remove()\">\n\t\t\t<Label textWrap=\"true\" text=\"Remove\" class=\"remove-payment-label\"></Label>\n\t\t</StackLayout>  \n\t</StackLayout>\n</Page>\n<ActivityIndicator row=\"1\" #activityIndicator busy=\"false\" width=\"40\" height=\"40\" class=\"activity-indicator\">\n</ActivityIndicator>"

/***/ }),

/***/ "./app/payment-info/payment-info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentInfoComponent", function() { return PaymentInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _datatransfer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/datatransfer.service.ts");
/* harmony import */ var _payment_service_tns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/payment.service.tns.ts");
/* harmony import */ var nativescript_angular_directives_dialogs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/nativescript-angular/directives/dialogs.js");
/* harmony import */ var nativescript_angular_directives_dialogs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_directives_dialogs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/nativescript-angular/router/index.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./app/confirmation/confirmation.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { ModalDialogParams } from "nativescript-angular/directives/dialogs";



var PaymentInfoComponent = /** @class */ (function () {
    function PaymentInfoComponent(transferService, paymentService, router, vcRef, modal) {
        this.transferService = transferService;
        this.paymentService = paymentService;
        this.router = router;
        this.vcRef = vcRef;
        this.modal = modal;
        this.paymentInfo = {
            paymentType: "loading",
            info: "loading",
            idToken: "loading",
            type: "loading"
        };
    }
    PaymentInfoComponent.prototype.ngOnInit = function () {
        this.paymentInfo = this.transferService.getData();
        // console.log(this.paymentInfo);
    };
    PaymentInfoComponent.prototype.remove = function () {
        var _this = this;
        var options = {
            context: {},
            fullscreen: false,
            viewContainerRef: this.vcRef,
            animated: true,
        };
        this.modal.showModal(_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmationComponent"], options).then(function (result) {
            if (result == "delete") {
                var infoContainer = _this.iC.nativeElement;
                infoContainer.style.visibility = "collapse";
                _this.showBusy();
                _this.paymentService.removePaymentMethodFromUser(_this.paymentInfo.idToken).subscribe(function (res) {
                    _this.router.navigate(['payments']);
                });
            }
        });
    };
    PaymentInfoComponent.prototype.onNavBtnTap = function () {
        this.router.navigate(['payments']);
    };
    PaymentInfoComponent.prototype.showBusy = function () {
        var activityIndicator = this.aI.nativeElement;
        activityIndicator.busy = true;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('activityIndicator', { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], PaymentInfoComponent.prototype, "aI", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('infoContainer', { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], PaymentInfoComponent.prototype, "iC", void 0);
    PaymentInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-payment-info',
            template: __webpack_require__("./app/payment-info/payment-info.component.html"),
            styles: [__webpack_require__("./app/payment-info/payment-info.component.css")]
        }),
        __metadata("design:paramtypes", [_datatransfer_service__WEBPACK_IMPORTED_MODULE_1__["TransferService"], _payment_service_tns__WEBPACK_IMPORTED_MODULE_2__["PaymentService"], nativescript_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterExtensions"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], nativescript_angular_directives_dialogs__WEBPACK_IMPORTED_MODULE_3__["ModalDialogService"]])
    ], PaymentInfoComponent);
    return PaymentInfoComponent;
}());



/***/ }),

/***/ "./app/payment-method/payment-method.component.css":
/***/ (function(module, exports) {

module.exports = "/*\nAdd your NativeScript specific styles here.\nTo learn more about styling in NativeScript see:\nhttps://docs.nativescript.org/angular/ui/styling\n*/"

/***/ }),

/***/ "./app/payment-method/payment-method.component.html":
/***/ (function(module, exports) {

module.exports = "<StackLayout>\n  <Label text=\"payment-method works\" textWrap=\"true\"></Label>\n  <Label text=\"This is a migrated component\" textWrap=\"true\"></Label>\n  <Label text=\"Update it to provide the UI elements required in your mobile app\" textWrap=\"true\"></Label>\n</StackLayout>\n\n<!--\nOriginal Web template:\n\n<div class=\"payment-method\">\n\t<span class=\"payment-type-icon\"></span>\n\t<span class=\"payment-type-details\"></span>\n</div>\n-->"

/***/ }),

/***/ "./app/payment-method/payment-method.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentMethodComponent", function() { return PaymentMethodComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PaymentMethodComponent = /** @class */ (function () {
    function PaymentMethodComponent() {
    }
    PaymentMethodComponent.prototype.ngOnInit = function () {
    };
    PaymentMethodComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-payment-method',
            template: __webpack_require__("./app/payment-method/payment-method.component.html"),
            styles: [__webpack_require__("./app/payment-method/payment-method.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PaymentMethodComponent);
    return PaymentMethodComponent;
}());



/***/ }),

/***/ "./app/payment.service.tns.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentService", function() { return PaymentService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PaymentService = /** @class */ (function () {
    function PaymentService(http) {
        this.http = http;
        // uri = 'http://localhost:4000';
        //Adam's Testing Server
        // uri = 'http://192.168.1.7:4000';
        //Phillip's Testing Server
        // uri = 'http://192.168.1.3:4000';
        //Firebase cloud functions
        this.uri = 'https://us-central1-collegepool-1552749118617.cloudfunctions.net';
    }
    PaymentService.prototype.addPaymentUser = function (id, username, name, email) {
        // console.log(`${this.uri}/addCustomer/${username}`)
        // return this.http.get(`${this.uri}/customers/add/${username}`);
        return this.http.get(this.uri + "/addCustomer?username=" + username);
    };
    PaymentService.prototype.getPaymentUserById = function (id) {
        // return this.http.get(`${this.uri}/customers/${id}`);
        return this.http.get(this.uri + "/getCustomer?id=" + id);
    };
    PaymentService.prototype.addPaymentMethodToUser = function (id, nonce) {
        var body = {
            id: id,
            nonce: nonce
        };
        // return this.http.post(`http://192.168.1.7:4000/customers/payment/`, body);
        return this.http.post(this.uri + "/addPayment?", body);
    };
    PaymentService.prototype.removePaymentMethodFromUser = function (token) {
        return this.http.get(this.uri + "/removePayment?token=" + token);
    };
    PaymentService.prototype.getIdToken = function (id) {
        return this.http.get(this.uri + "/getToken?id=" + id);
    };
    PaymentService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PaymentService);
    return PaymentService;
}());



/***/ }),

/***/ "./app/payment.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentService", function() { return PaymentService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PaymentService = /** @class */ (function () {
    function PaymentService(http) {
        this.http = http;
        // uri = 'http://localhost:4000';
        //Adam's Testing Server
        // uri = 'http://192.168.1.7:4000';
        //Phillip's Testing Server
        // uri = 'http://192.168.1.3:4000';
        //Firebase cloud functions
        this.uri = 'https://us-central1-collegepool-1552749118617.cloudfunctions.net';
    }
    PaymentService.prototype.addPaymentUser = function (id, username, name, email) {
        // console.log(`${this.uri}/addCustomer/${username}`)
        // return this.http.get(`${this.uri}/customers/add/${username}`);
        return this.http.get(this.uri + "/addCustomer?username=" + username);
    };
    PaymentService.prototype.getPaymentUserById = function (id) {
        // return this.http.get(`${this.uri}/customers/${id}`);
        return this.http.get(this.uri + "/getCustomer?id=" + id);
    };
    PaymentService.prototype.addPaymentMethodToUser = function (id, nonce) {
        var body = {
            id: id,
            nonce: nonce
        };
        // return this.http.post(`http://192.168.1.7:4000/customers/payment/`, body);
        return this.http.post(this.uri + "/addPayment?", body);
    };
    PaymentService.prototype.removePaymentMethodFromUser = function (token) {
        return this.http.get(this.uri + "/removePayment?token=" + token);
    };
    PaymentService.prototype.getIdToken = function (id) {
        return this.http.get(this.uri + "/getToken?id=" + id);
    };
    PaymentService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PaymentService);
    return PaymentService;
}());



/***/ }),

/***/ "./app/payments/payments.component.css":
/***/ (function(module, exports) {

module.exports = ".payment-type-icon {\n\theight: 34;\n\twidth: 34;\n\tbackground-position: center;\n\tmargin-top: 18;\n\tmargin-bottom: 18;\n\tmargin-left: 36;\n}\n\n.payment-info-label {\n\tfont-size: 16;\n\t/*font-weight: 700;*/\n\tpadding: 30;\n\ttext-align: center;\n\tcolor: black;\n}\n\n.add-payment-label {\n\tfont-size: 16;\n\tcolor: #ac00e6;\n\tmargin-left: 36;\n\ttext-align: left;\n\tpadding: 18;\n}\n\n.credit-card-icon {\n\tcontent: url(\"~/img/credit-card-icon.png\");\n}\n\n.paypal-icon {\n\tcontent: url(\"~/img/paypal-icon.png\");\n}\n\n.venmo-icon {\n\tcontent: url(\"~/img/venmo-icon.png\");\n}\n\n.post {\n\n\tborder-color: #f1f1f1;\n}\n\n.post:highlighted {\n\tbackground-color: #f1f1f1;\n}\n\n.activity-indicator {\n\tcolor: #ac00e6;\n}\n\n.add-container {\n\tvisibility: collapse;\n}"

/***/ }),

/***/ "./app/payments/payments.component.html":
/***/ (function(module, exports) {

module.exports = "<Page>\n\t<Page.actionBar>\n\t\t<ActionBar title=\"Payments\">\n\t\t  <NavigationButton text=\"Go Back\" android.systemIcon=\"ic_menu_back\" (tap)=\"onNavBtnTap()\"></NavigationButton>\n\t\t</ActionBar>\n\t</Page.actionBar>\n\n\n\n\t<StackLayout #paymentsContainer>\n\t\t<ListView [items]=\"payments\" separatorColor=\"transparent\" (itemTap)=\"onSelect($event)\">\n\t\t\t<ng-template let-item=\"item\" let-i=\"index\" let-odd=\"odd\" let-even=\"even\">\n\t\t\t\t<StackLayout [class.odd]=\"odd\" [class.even]=\"even\" class=\"post\" orientation=\"horizontal\">\n\t\t\t\t\t<Image [src]=\"item.paymentType\" class=\"payment-type-icon\"></Image>\n\t\t\t\t\t<Label textWrap=\"true\" [text]=\"item.info\" class=\"payment-info-label\"></Label>\n\t\t\t\t</StackLayout>\n\t\t\t</ng-template>\n\t\t</ListView>\n\n\t\t<StackLayout (tap)=\"showModal()\" #addContainer class=\"add-container\">\n\t\t\t<Label textWrap=\"true\" text=\"Add payment method\" class=\"add-payment-label\"></Label>\n\t\t</StackLayout>  \n\t</StackLayout>\n</Page>\n\n<ActivityIndicator #activityIndicator busy=\"true\" width=\"40\" height=\"40\" class=\"activity-indicator\">\n</ActivityIndicator>"

/***/ }),

/***/ "./app/payments/payments.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentsComponent", function() { return PaymentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/tns-core-modules/data/observable-array/observable-array.js");
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dynamic_add_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/dynamic-add.service.ts");
/* harmony import */ var nativescript_braintree__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/nativescript-braintree/braintree.js");
/* harmony import */ var nativescript_braintree__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nativescript_braintree__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _logincheck_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/logincheck.service.ts");
/* harmony import */ var _payment_service_tns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./app/payment.service.tns.ts");
/* harmony import */ var _datatransfer_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./app/datatransfer.service.ts");
/* harmony import */ var nativescript_angular_directives_dialogs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../node_modules/nativescript-angular/directives/dialogs.js");
/* harmony import */ var nativescript_angular_directives_dialogs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_directives_dialogs__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../node_modules/nativescript-angular/router/index.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("../node_modules/tns-core-modules/ui/dialogs/dialogs.js");
/* harmony import */ var tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("../node_modules/nativescript-plugin-firebase/firebase.js");
/* harmony import */ var nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_10__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var PaymentItem = /** @class */ (function () {
    function PaymentItem(paymentType, info, idToken, type) {
        this.paymentType = paymentType;
        this.info = info;
        this.idToken = idToken;
        this.type = type;
    }
    return PaymentItem;
}());
var PaymentsComponent = /** @class */ (function () {
    function PaymentsComponent(addService, paymentService, logincheckService, transferService, vcRef, modal, router) {
        this.addService = addService;
        this.paymentService = paymentService;
        this.logincheckService = logincheckService;
        this.transferService = transferService;
        this.vcRef = vcRef;
        this.modal = modal;
        this.router = router;
        this.user = {
            payment_id: '507305706'
        };
        this.opts = {
            amount: null,
            collectDeviceData: true,
            requestThreeDSecureVerification: false,
        };
        this.clientToken = '';
        this.payments = new tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__["ObservableArray"]();
    }
    PaymentsComponent.prototype.ngOnInit = function () {
        var _this = this;
        nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_10__["getCurrentUser"]().then(function (user) {
            nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_10__["firestore"].collection('users').doc(user.uid).get().then(function (doc) {
                _this.user.payment_id = doc.data().payment_id;
                _this.getUser();
            });
        });
    };
    PaymentsComponent.prototype.showModal = function () {
        var _this = this;
        var braintree = new nativescript_braintree__WEBPACK_IMPORTED_MODULE_3__["Braintree"]();
        // this.createViews();
        braintree.startPayment(this.clientToken, this.opts);
        braintree.on("success", function (res) {
            var output = res.object.get("output");
            // console.dir(output);
            var addContainer = _this.aC.nativeElement;
            var paymentsContainer = _this.pC.nativeElement;
            var activityIndicator = _this.aI.nativeElement;
            paymentsContainer.style.visibility = 'collapse';
            addContainer.style.visibility = 'collapse';
            activityIndicator.busy = true;
            _this.paymentService.addPaymentMethodToUser(_this.user.payment_id, output.nonce).subscribe(function (res) {
                if (res.message == 'Success') {
                    tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_9__["alert"]({
                        title: "Added method",
                        message: "Payment method added successfully",
                        okButtonText: "Close"
                    }).then(function () {
                    });
                    _this.getUser();
                }
                else if (res.message == 'Already exists') {
                    addContainer.style.visibility = 'visible';
                    paymentsContainer.style.visibility = 'visible';
                    activityIndicator.busy = false;
                    tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_9__["alert"]({
                        title: "Could not add method",
                        message: "Payment method already exists, please try another one.",
                        okButtonText: "Close"
                    }).then(function () {
                    });
                }
                // this.router.navigate(['payments']);
            });
            // this.paymentService.addPaymentMethodToUser(this.user.payment_id, output.nonce).subscribe((res) => {
            //   this.router.navigate(['payments']);
            // });
        });
        braintree.on("cancel", function (res) {
            var output = res.object.get("output");
            // console.dir(output);
        });
        braintree.on("error", function (res) {
            var output = res.object.get("output");
            // console.dir(output);
        });
        // let options = {
        //     context: {},
        //     fullscreen: true,
        //     viewContainerRef: this.vcRef
        //     // animated: true,
        //     // transition: { name: "slideTop" }
        // };
        // this.modal.showModal(AddPaymentComponent, options).then(res => {
        // });
    };
    PaymentsComponent.prototype.getUser = function () {
        var _this = this;
        this.payments.splice(0);
        var addContainer = this.aC.nativeElement;
        var paymentsContainer = this.pC.nativeElement;
        addContainer.style.visibility = 'collapse';
        paymentsContainer.style.visibility = 'collapse';
        this.paymentService.getPaymentUserById(this.user.payment_id).subscribe(function (data) {
            _this.setupViews();
            _this.paymentCustomer = data;
            // console.log(this.paymentCustomer)
            if (_this.paymentCustomer.creditCards != null)
                for (var i = 0; i < _this.paymentCustomer.creditCards.length; i++)
                    _this.payments.push(new PaymentItem("~/img/credit-card-icon.png", _this.paymentCustomer.creditCards[i].cardType + " ending in " + _this.paymentCustomer.creditCards[i].last4, _this.paymentCustomer.creditCards[i].token, "Card"));
            if (_this.paymentCustomer.paypalAccounts != null)
                for (var i = 0; i < _this.paymentCustomer.paypalAccounts.length; i++)
                    _this.payments.push(new PaymentItem("~/img/paypal-icon.png", _this.paymentCustomer.paypalAccounts[i].email, _this.paymentCustomer.paypalAccounts[i].token, "PayPal"));
            if (_this.paymentCustomer.venmoAccounts != null)
                for (var i = 0; i < _this.paymentCustomer.venmoAccounts.length; i++)
                    _this.payments.push(new PaymentItem("~/img/venmo-icon.png", _this.paymentCustomer.venmoAccounts[i].venmoUserId, _this.paymentCustomer.venmoAccounts[i].token, "Venmo"));
            // document.getElementById('list-loading-circle').style.display = 'none';
        });
        this.paymentService.getIdToken(this.user.payment_id).subscribe(function (res) {
            _this.clientToken = res.clientToken;
        });
    };
    PaymentsComponent.prototype.setupViews = function () {
        var activityIndicator = this.aI.nativeElement;
        activityIndicator.busy = false;
        var addContainer = this.aC.nativeElement;
        addContainer.style.visibility = 'visible';
        var paymentsContainer = this.pC.nativeElement;
        paymentsContainer.style.visibility = 'visible';
    };
    PaymentsComponent.prototype.selectPayment = function () {
    };
    PaymentsComponent.prototype.onSelect = function (event) {
        // console.log(event.index);
        var options = {
            context: {},
            fullscreen: true,
            viewContainerRef: this.vcRef
            // animated: true,
            // transition: { name: "slideTop" }
        };
        this.transferService.setData(this.payments.getItem(event.index));
        this.router.navigate(['paymentinfo']);
        // this.modal.showModal(PaymentInfoComponent, options).then(res => {
        // });
    };
    PaymentsComponent.prototype.onNavBtnTap = function () {
        this.router.navigate(['settings'], { clearHistory: true });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('activityIndicator', { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], PaymentsComponent.prototype, "aI", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('addContainer', { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], PaymentsComponent.prototype, "aC", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('paymentsContainer', { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], PaymentsComponent.prototype, "pC", void 0);
    PaymentsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-payments',
            template: __webpack_require__("./app/payments/payments.component.html"),
            styles: [__webpack_require__("./app/payments/payments.component.css")]
        }),
        __metadata("design:paramtypes", [_dynamic_add_service__WEBPACK_IMPORTED_MODULE_2__["DynamicAddService"], _payment_service_tns__WEBPACK_IMPORTED_MODULE_5__["PaymentService"], _logincheck_service__WEBPACK_IMPORTED_MODULE_4__["LogincheckService"], _datatransfer_service__WEBPACK_IMPORTED_MODULE_6__["TransferService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], nativescript_angular_directives_dialogs__WEBPACK_IMPORTED_MODULE_7__["ModalDialogService"], nativescript_angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterExtensions"]])
    ], PaymentsComponent);
    return PaymentsComponent;
}());



/***/ }),

/***/ "./app/places-autocomplete.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlacesAutocompleteService", function() { return PlacesAutocompleteService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PlacesAutocompleteService = /** @class */ (function () {
    function PlacesAutocompleteService(httpClient) {
        this.httpClient = httpClient;
        this.places_uri = 'https://maps.googleapis.com/maps/api/place/textsearch/json?key=AIzaSyAITxS1jmf8PMtazRguWcAfWQxW1kPOoYg&query=';
        this.autocomplete_uri = 'https://maps.googleapis.com/maps/api/place/autocomplete/json?key=AIzaSyAITxS1jmf8PMtazRguWcAfWQxW1kPOoYg&sessiontoken=1234567890&input=';
    }
    PlacesAutocompleteService.prototype.getAutocompleteResults = function (place) {
        return this.httpClient.get("" + this.autocomplete_uri + place);
    };
    PlacesAutocompleteService.prototype.getPlaceResults = function (place) {
        return this.httpClient.get("" + this.places_uri + place);
    };
    PlacesAutocompleteService.prototype.getAutocompleteResultsGeocode = function (place) {
        return this.httpClient.get("" + this.autocomplete_uri + place + "&types=geocode");
    };
    PlacesAutocompleteService.prototype.getAutocompleteResultsEstablishment = function (place) {
        return this.httpClient.get("" + this.autocomplete_uri + place + "&types=establishment");
    };
    PlacesAutocompleteService.prototype.getAutocompleteResultsAddress = function (place) {
        return this.httpClient.get("" + this.autocomplete_uri + place + "&types=address");
    };
    PlacesAutocompleteService.prototype.getAutocompleteResultsCity = function (place) {
        return this.httpClient.get("" + this.autocomplete_uri + place + "&types=(cities)");
    };
    PlacesAutocompleteService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PlacesAutocompleteService);
    return PlacesAutocompleteService;
}());



/***/ }),

/***/ "./app/posting-info/posting-info.component.css":
/***/ (function(module, exports) {

module.exports = "/* Add mobile styles for the component here.  */\n.map-view {\n\theight: 100%;\n\twidth: 100%;\n\tvertical-align: bottom;\n}\n\n.profile-picture {\n\theight: 50;\n\twidth: 50;\n\tborder-radius: 100%;\n\tvertical-align: top;\n\tmargin-left: 16;\n\tmargin-top: 20;\n}\n\n.name-label {\n\tmargin-top: 16;\n\tmargin-left: 18;\n\tcolor: black;\n\tfont-weight: 700;\n\tfont-size: 17;\n\ttext-align: left;\n}\n\n.info-label {\n\tmargin-top: 4;\n\tmargin-left: 18;\n\tmargin-bottom: 16;\n\tcolor: black;\n\ttext-align: left;\n}\n\n.label-container {\n\tvertical-align: middle;\n}\n\n.activity-indicator {\n\tcolor: #ac00e6;\n}"

/***/ }),

/***/ "./app/posting-info/posting-info.component.html":
/***/ (function(module, exports) {

module.exports = "<Page.actionBar>\n    <ActionBar title=\"Post\">\n    \t<NavigationButton text=\"Go Back\" android.systemIcon=\"ic_menu_back\" (tap)=\"onNavBtnTap()\"></NavigationButton>\n\t    <ActionItem (tap)=\"promptDelete()\"\n\t      ios.systemIcon=\"16\" ios.position=\"right\"\n\t      text=\"Delete\" android.position=\"popup\" #deleteItem></ActionItem>\n\t    <ActionItem (tap)=\"onReport()\"\n\t      ios.systemIcon=\"9\" ios.position=\"right\"\n\t      text=\"Report\" android.position=\"popup\"></ActionItem>\n    </ActionBar>\n</Page.actionBar>\n<GridLayout rows=\"2*,auto,10*\" #layout>\n\t<StackLayout orientation=\"horizontal\" row=\"0\" class=\"label-container\" #infoContainer>\n\t\t<Image src=\"{{ profileSource }}\" class=\"profile-picture\" stretch=\"aspectFit\"></Image>\n\t  \t<StackLayout>\n\t      \t<Label textWrap=\"true\" id=\"post-name\" class=\"name-label\" text=\"{{ username }}\"></Label>\n\t      \t<Label textWrap=\"true\" id=\"post-info\" class=\"info-label\" text=\"{{ info }}\"></Label>\n\t    </StackLayout>\n\t</StackLayout>\n\t<StackLayout class=\"btn-container\" #buttonContainer row=\"1\">\n\t\t<Button class=\"connect-btn\" (tap)=\"onConnectTap()\" text=\"{{ buttonText }}\"></Button>\n\t</StackLayout>\n\t<MapView (mapReady)=\"onMapReady($event)\" [latitude]=\"latitude\" [longitude]=\"longitude\" class=\"map-view\" row=\"2\" #mapView></MapView>\n</GridLayout>\n<ActivityIndicator #activityIndicator busy=\"true\" width=\"40\" height=\"40\" class=\"activity-indicator\"></ActivityIndicator>"

/***/ }),

/***/ "./app/posting-info/posting-info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostingInfoComponent", function() { return PostingInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/nativescript-plugin-firebase/firebase.js");
/* harmony import */ var nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _google_maps_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/google-maps.service.ts");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/nativescript-angular/router/index.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _datatransfer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/datatransfer.service.ts");
/* harmony import */ var tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../node_modules/tns-core-modules/ui/page/page.js");
/* harmony import */ var tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var nativescript_angular_element_registry__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../node_modules/nativescript-angular/element-registry.js");
/* harmony import */ var nativescript_angular_element_registry__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_element_registry__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../node_modules/tns-core-modules/platform/platform.js");
/* harmony import */ var tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var nativescript_google_maps_sdk__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../node_modules/nativescript-google-maps-sdk/map-view.js");
/* harmony import */ var nativescript_google_maps_sdk__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(nativescript_google_maps_sdk__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("../node_modules/tns-core-modules/ui/dialogs/dialogs.js");
/* harmony import */ var tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _logincheck_service_tns__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./app/logincheck.service.tns.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











Object(nativescript_angular_element_registry__WEBPACK_IMPORTED_MODULE_6__["registerElement"])("MapView", function () { return __webpack_require__("../node_modules/nativescript-google-maps-sdk/map-view.js").MapView; });
var PostingInfoComponent = /** @class */ (function () {
    function PostingInfoComponent(mapService, router, transferService, page, logincheckService) {
        this.mapService = mapService;
        this.router = router;
        this.transferService = transferService;
        this.page = page;
        this.logincheckService = logincheckService;
        this.latitude = 37;
        this.longitude = -122;
        this.chatUsers = [];
    }
    PostingInfoComponent.prototype.ngOnInit = function () {
        this.loadViews();
    };
    PostingInfoComponent.prototype.loadViews = function () {
        var _this = this;
        var activityIndicator = this.ai.nativeElement;
        var infoContainer = this.infoContainer.nativeElement;
        var deleteButton = this.deleteItem.nativeElement;
        var chatButton = this.buttonContainer.nativeElement;
        infoContainer.visibility = 'collapse';
        chatButton.visibility = 'collapse';
        this.userId = this.logincheckService.getUser();
        this.mapData = this.transferService.getData();
        nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_1__["firestore"].collection('users').doc(this.userId).get().then(function (doc) {
            _this.currentUser = doc.data();
            if (doc.data().chats.includes(_this.mapData.postInfo.id)) {
                _this.buttonText = 'View chat';
                activityIndicator.busy = false;
                infoContainer.visibility = 'visible';
                chatButton.visibility = 'visible';
            }
            else {
                nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_1__["firestore"].collection('chats').doc(_this.mapData.postInfo.data.uid).get().then(function (doc) {
                    if (!doc.exists && _this.userId === _this.mapData.postInfo.data.uid)
                        chatButton.visibility = 'collapse';
                    else
                        chatButton.visibility = 'visible';
                    activityIndicator.busy = false;
                    infoContainer.visibility = 'visible';
                });
                _this.buttonText = 'Join chat';
            }
        });
        if (tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_7__["isIOS"]) {
            this.bounds = GMSCoordinateBounds.alloc().init();
        }
        this.startLat = this.mapData.postInfo.data.startLat;
        this.endLat = this.mapData.postInfo.data.endLat;
        this.startLng = this.mapData.postInfo.data.startLng;
        this.endLng = this.mapData.postInfo.data.endLng;
        this.info = this.mapData.postItem.info;
        this.profileSource = this.mapData.postItem.profileSource;
        this.username = this.mapData.postItem.username;
        if (this.userId !== this.mapData.postInfo.data.uid) {
            deleteButton.visibility = 'collapse';
        }
        nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_1__["getCurrentUser"]().then(function (user) {
            _this.currentUserName = user.displayName;
        });
    };
    PostingInfoComponent.prototype.onMapReady = function (event) {
        this.mapView = event.object;
        // this.latitude = (this.startLat + this.endLat) / 2.0;
        // this.longitude = (this.startLng + this.endLng) / 2.0;
        this.addMarker(this.startLat, this.startLng, this.mapData.postInfo.data.startAddress, this.mapData.postInfo.data.startFormatted, 0);
        this.addMarker(this.endLat, this.endLng, this.mapData.postInfo.data.endAddress, this.mapData.postInfo.data.endFormatted, 1);
        if (tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_7__["isAndroid"]) {
            var builder = new com.google.android.gms.maps.model.LatLngBounds.Builder();
            this.mapView.findMarker(function (marker) { builder.include(marker.android.getPosition()); return false; });
            var bounds = builder.build();
            var cu = com.google.android.gms.maps.CameraUpdateFactory.newLatLngBounds(bounds, 150);
            this.mapView.gMap.animateCamera(cu);
        }
        else if (tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_7__["isIOS"]) {
            var update = GMSCameraUpdate.fitBoundsWithPadding(bounds, 150);
            this.mapView.gMap.moveCamera(update);
        }
    };
    PostingInfoComponent.prototype.addMarker = function (lat, lng, title, snippet, index) {
        var marker = new nativescript_google_maps_sdk__WEBPACK_IMPORTED_MODULE_8__["Marker"]();
        marker.position = nativescript_google_maps_sdk__WEBPACK_IMPORTED_MODULE_8__["Position"].positionFromLatLng(lat, lng);
        marker.title = title;
        marker.snippet = snippet;
        marker.userData = { index: index };
        this.mapView.addMarker(marker);
        if (tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_7__["isIOS"])
            this.bounds = this.bounds.includingCoordinate(marker.position);
    };
    PostingInfoComponent.prototype.onNavBtnTap = function () {
        this.router.navigate(['navigation'], { clearHistory: true });
    };
    PostingInfoComponent.prototype.deleteFiles = function () {
        nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_1__["storage"].deleteFile({
            // the full path of an existing file in your Firebase storage
            remoteFullPath: 'postings/' + this.mapData.postInfo.id + '/maps/large_map.png'
        }).then(function () {
            console.log("File deleted.");
        }, function (error) {
            console.log("File deletion Error: " + error);
        });
        nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_1__["storage"].deleteFile({
            // the full path of an existing file in your Firebase storage
            remoteFullPath: 'postings/' + this.mapData.postInfo.id + '/maps/small_map.png'
        }).then(function () {
            console.log("File deleted.");
        }, function (error) {
            console.log("File deletion Error: " + error);
        });
    };
    PostingInfoComponent.prototype.promptDelete = function () {
        var _this = this;
        tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_9__["confirm"]({
            title: "Confirm delete",
            message: "Are you sure you want to delete this post?",
            okButtonText: "Confirm",
            cancelButtonText: "Cancel",
        }).then(function (result) {
            // result argument is boolean
            if (result)
                _this.onDelete();
        });
    };
    PostingInfoComponent.prototype.onDelete = function () {
        var _this = this;
        var postingDocument = nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_1__["firestore"].collection('postings').doc(this.mapData.postInfo.id);
        var userDocument = nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_1__["firestore"].collection('users').doc(this.mapData.postInfo.data.uid);
        var chatDocument = nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_1__["firestore"].collection('chats').doc(this.mapData.postInfo.id);
        postingDocument.delete().then(function (res) {
            userDocument.get().then(function (doc) {
                var userPosts = doc.data().posts;
                var index = userPosts.indexOf(_this.mapData.postInfo.id, 0);
                if (index > -1) {
                    userPosts.splice(index, 1);
                }
                userDocument.update({
                    posts: userPosts
                }).then(function (res) {
                    // chatDocument.get().then((doc) => {
                    //   let data = doc.data();
                    //   if(data) {
                    //     for(var i = 0; i < data.users.length; i++) {
                    //       // this.chatUsers.push(data.users[i].uid);
                    //       firebase.firestore.collection('users').doc(data.users[i].uid).get().then((doc) => {
                    //         const id = data.users[i].uid;
                    //         let uidChats = doc.data().chats;
                    //         let index = uidChats.indexOf(this.mapData.postInfo.id);
                    //         if(index > -1) {
                    //           uidChats.splice(index, 1);
                    //         }
                    //         firebase.firestore.collection('users').doc(id).update({
                    //           chats: uidChats
                    //         })
                    //       })
                    //     }
                    //     chatDocument.delete().then((res) => {
                    //       this.deleteFiles();
                    //       this.onNavBtnTap();
                    //     })
                    //   }
                    //   else {
                    //     this.deleteFiles();
                    //     this.onNavBtnTap();
                    //   }
                    // })
                    _this.deleteFiles();
                    _this.onNavBtnTap();
                }).catch(function (err) {
                    console.log(err);
                });
            }).catch(function (err) {
                console.log(err);
            });
        }).catch(function (err) {
            console.log(err);
        });
    };
    PostingInfoComponent.prototype.removeChat = function (index) {
        var _this = this;
        console.log(index);
        nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_1__["firestore"].collection('users').doc(this.chatUsers[index]).get().then(function (doc) {
            var userChats = doc.data().chats;
            var index = userChats.indexOf(_this.mapData.postInfo.id);
            if (index > -1) {
                userChats.splice(index, 1);
            }
            nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_1__["firestore"].collection('users').doc(_this.chatUsers[index]).update({
                chats: userChats
            }).then(function (res) {
                if (index === _this.chatUsers[index].length - 1) {
                    _this.deleteFiles();
                    _this.onNavBtnTap();
                }
            });
        });
    };
    PostingInfoComponent.prototype.onReport = function () {
    };
    PostingInfoComponent.prototype.onConnectTap = function () {
        var _this = this;
        var gridContainer = this.layout.nativeElement;
        var activityIndicator = this.ai.nativeElement;
        gridContainer.visibility = 'collapse';
        activityIndicator.busy = true;
        if (this.buttonText === 'View chat') {
            this.transferService.setData(this.mapData.postInfo.id);
            gridContainer.visibility = 'visible';
            activityIndicator.busy = false;
            this.router.navigate(['chat']);
        }
        else if (this.buttonText === 'Join chat') {
            var chatDocument_1 = nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_1__["firestore"].collection('chats').doc(this.mapData.postInfo.id);
            var userDocument_1 = nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_1__["firestore"].collection('users').doc(this.userId);
            chatDocument_1.get().then(function (doc) {
                if (doc.exists) {
                    //chat exists, so add user to the chat room and navigate there
                    var tokens = doc.data().tokens;
                    var users = doc.data().users;
                    var userTokens = _this.currentUser.tokens;
                    var newTokens = tokens.concat(userTokens);
                    users.push({ uid: _this.userId, displayName: _this.currentUserName });
                    chatDocument_1.update({
                        users: users,
                        tokens: Array.from(new Set(newTokens))
                    }).then(function (res) {
                        userDocument_1.get().then(function (doc) {
                            var userChats = doc.data().chats;
                            userChats.push(_this.mapData.postInfo.id);
                            userDocument_1.update({
                                chats: userChats
                            }).then(function (res) {
                                //finally after everything else has updated, send user to chat component
                                _this.transferService.setData(_this.mapData.postInfo.id);
                                _this.buttonText = 'View chat';
                                gridContainer.visibility = 'visible';
                                activityIndicator.busy = false;
                                _this.router.navigate(['chat']);
                            });
                        });
                    });
                }
                else {
                    //chat does not exist, so create and add both post user and current user
                    nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_1__["firestore"].collection('chats').doc(_this.mapData.postInfo.id).set({
                        users: [{ uid: _this.mapData.postInfo.data.uid, displayName: _this.mapData.postItem.username }, { uid: _this.userId, displayName: _this.currentUserName }],
                        chats: [],
                        expired: false,
                    }).then(function (res) {
                        nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_1__["firestore"].collection('users').doc(_this.mapData.postInfo.data.uid).get().then(function (doc) {
                            var userTokens = _this.currentUser.tokens;
                            var otherUserTokens = doc.data().tokens;
                            var newTokens = userTokens.concat(otherUserTokens);
                            nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_1__["firestore"].collection('chats').doc(_this.mapData.postInfo.id).update({
                                tokens: Array.from(new Set(newTokens))
                            });
                            var userChats = doc.data().chats;
                            userChats.push(_this.mapData.postInfo.id);
                            nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_1__["firestore"].collection('users').doc(_this.mapData.postInfo.data.uid).update({
                                chats: userChats
                            }).then(function (res) {
                                userDocument_1.get().then(function (doc) {
                                    var userChats = doc.data().chats;
                                    userChats.push(_this.mapData.postInfo.id);
                                    userDocument_1.update({
                                        chats: userChats
                                    }).then(function (res) {
                                        //finally after everything else has updated, send user to chat component
                                        _this.transferService.setData(_this.mapData.postInfo.id);
                                        _this.buttonText = 'View chat';
                                        gridContainer.visibility = 'visible';
                                        activityIndicator.busy = false;
                                        _this.router.navigate(['chat']);
                                    });
                                });
                            });
                        });
                    });
                }
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("deleteItem", { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], PostingInfoComponent.prototype, "deleteItem", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("buttonContainer", { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], PostingInfoComponent.prototype, "buttonContainer", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("infoContainer", { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], PostingInfoComponent.prototype, "infoContainer", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("activityIndicator", { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], PostingInfoComponent.prototype, "ai", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("layout", { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], PostingInfoComponent.prototype, "layout", void 0);
    PostingInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-posting-info',
            template: __webpack_require__("./app/posting-info/posting-info.component.html"),
            styles: [__webpack_require__("./app/posting-info/posting-info.component.css")]
        }),
        __metadata("design:paramtypes", [_google_maps_service__WEBPACK_IMPORTED_MODULE_2__["GoogleMapsService"], nativescript_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterExtensions"], _datatransfer_service__WEBPACK_IMPORTED_MODULE_4__["TransferService"], tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_5__["Page"],
            _logincheck_service_tns__WEBPACK_IMPORTED_MODULE_10__["LogincheckService"]])
    ], PostingInfoComponent);
    return PostingInfoComponent;
}());



/***/ }),

/***/ "./app/posting.service.tns.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostingService", function() { return PostingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PostingService = /** @class */ (function () {
    function PostingService(http) {
        this.http = http;
        /**
        * To get the server to recognize your mobile device, find your ipv4 address by running ipconfig in a terminal window
        * and add a new uri line with your ipv4 address. Do this for network_security_config.xml, user.services.tns.ts, and
        * posting.service.tns.ts.
        */
        // Adam's testing server
        // uri = 'http://192.168.1.7:4000';
        // uri = 'http://10.5.11.25:4000';
        // Phillip's Testing server
        this.uri = 'http://192.168.1.3:4000';
    }
    PostingService.prototype.getPostings = function () {
        return this.http.get(this.uri + "/postings");
    };
    PostingService.prototype.getPostingbyId = function (id) {
        return this.http.get(this.uri + "/postings/" + id);
    };
    PostingService.prototype.addPosting = function (user, startadr, endadr, date, cost, capacity, comments) {
        //const price = req(../../backend/data/pricing)({start: startadr, end: endadr});
        var posting = {
            user: user,
            startadr: startadr,
            endadr: endadr,
            date: date,
            cost: cost,
            capacity: capacity,
            comments: comments
        };
        return this.http.post(this.uri + "/postings/add/", posting);
    };
    PostingService.prototype.updatePosting = function (id, user, startadr, endadr, date, cost, capacity, comments) {
        //const price = req(../../backend/data/pricing)({start: startadr, end: endadr});
        var posting = {
            user: user,
            startadr: startadr,
            endadr: endadr,
            date: date,
            cost: cost,
            capacity: capacity,
            comments: comments
        };
        return this.http.post(this.uri + "/postings/update/" + id, posting);
    };
    PostingService.prototype.deletePosting = function (id) {
        return this.http.get(this.uri + "/postings/delete/" + id);
    };
    PostingService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PostingService);
    return PostingService;
}());



/***/ }),

/***/ "./app/posting.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostingService", function() { return PostingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PostingService = /** @class */ (function () {
    function PostingService(http) {
        this.http = http;
        /**
        * To get the server to recognize your mobile device, find your ipv4 address by running ipconfig in a terminal window
        * and add a new uri line with your ipv4 address. Do this for network_security_config.xml, user.services.tns.ts, and
        * posting.service.tns.ts.
        */
        // Adam's testing server
        // uri = 'http://192.168.1.7:4000';
        // uri = 'http://10.5.11.25:4000';
        // Phillip's Testing server
        this.uri = 'http://192.168.1.3:4000';
    }
    PostingService.prototype.getPostings = function () {
        return this.http.get(this.uri + "/postings");
    };
    PostingService.prototype.getPostingbyId = function (id) {
        return this.http.get(this.uri + "/postings/" + id);
    };
    PostingService.prototype.addPosting = function (user, startadr, endadr, date, cost, capacity, comments) {
        //const price = req(../../backend/data/pricing)({start: startadr, end: endadr});
        var posting = {
            user: user,
            startadr: startadr,
            endadr: endadr,
            date: date,
            cost: cost,
            capacity: capacity,
            comments: comments
        };
        return this.http.post(this.uri + "/postings/add/", posting);
    };
    PostingService.prototype.updatePosting = function (id, user, startadr, endadr, date, cost, capacity, comments) {
        //const price = req(../../backend/data/pricing)({start: startadr, end: endadr});
        var posting = {
            user: user,
            startadr: startadr,
            endadr: endadr,
            date: date,
            cost: cost,
            capacity: capacity,
            comments: comments
        };
        return this.http.post(this.uri + "/postings/update/" + id, posting);
    };
    PostingService.prototype.deletePosting = function (id) {
        return this.http.get(this.uri + "/postings/delete/" + id);
    };
    PostingService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PostingService);
    return PostingService;
}());



/***/ }),

/***/ "./app/posting/posting.component.css":
/***/ (function(module, exports) {

module.exports = "/*\nAdd your NativeScript specific styles here.\nTo learn more about styling in NativeScript see:\nhttps://docs.nativescript.org/angular/ui/styling\n*/\n\nLabel {\n\ttext-align: left;\n}\n\n.name-label {\n\tmargin-top: 16;\n\tmargin-left: 24;\n\tcolor: black;\n\tfont-weight: 700;\n\tfont-size: 18;\n}\n\n.info-label {\n\tmargin-top: 12;\n\tmargin-left: 24;\n\tmargin-bottom: 16;\n\tcolor: black;\n}\n\n.post {\n\tborder-bottom-width: 1;\n\tborder-color: #f1f1f1;\n}\n\n.post:highlighted {\n\tbackground-color: #f1f1f1;\n}\n\n.posting-map {\n\tmargin-bottom: 16;\n\tborder-radius: 10;\n\t/*align-content: center;*/\n}"

/***/ }),

/***/ "./app/posting/posting.component.html":
/***/ (function(module, exports) {

module.exports = "<StackLayout class=\"post\">\n  <Label textWrap=\"true\" id=\"post-name\" class=\"name-label\"></Label>\n  <Label textWrap=\"true\" id=\"post-info\" class=\"info-label\"></Label>\n  <Image src=\"~/img/cville-map.png\" stretch=\"none\" height=\"220\" width=\"300\" class=\"posting-map\"></Image>\n</StackLayout>\n\n<!--\nOriginal Web template:\n\n\n-->"

/***/ }),

/***/ "./app/posting/posting.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostingComponent", function() { return PostingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _datatransfer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/datatransfer.service.ts");
/* harmony import */ var tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/tns-core-modules/ui/page/page.js");
/* harmony import */ var tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PostingComponent = /** @class */ (function () {
    function PostingComponent(transferService, router, page) {
        this.transferService = transferService;
        this.router = router;
        this.page = page;
        this.info = this.transferService.getData()[0];
        this.infoText = "Leaving " + this.info.date + " from " + this.info.startadr + " to " + this.info.endadr + " for " + this.info.cost;
    }
    PostingComponent.prototype.ngOnInit = function () {
        this.id = this.info.id;
        this.buttonType = this.info.buttonType;
        var name_label = this.page.getViewById('post-name');
        name_label.text = this.info.user;
        name_label.id = 'post-name' + this.info.index;
        var info_label = this.page.getViewById('post-info');
        if (this.info.capacity > 0)
            info_label.text = "Offering ride leaving " + this.info.date + " from " + this.info.startadr + " to " + this.info.endadr + " for " + this.info.cost;
        else
            info_label.text = "Requesting ride leaving " + this.info.date + " from " + this.info.startadr + " to " + this.info.endadr;
        info_label.id = 'post-info' + this.info.index;
        // console.log("created post");
        // this.create();
    };
    PostingComponent.prototype.create = function () {
        var _this = this;
        console.log(this.info);
        console.log(this.info.index);
        var div = document.createElement("div");
        div.id = "feed" + this.info.index;
        div.className = "posting-block";
        div.style.display = "all";
        div.style.margin = "auto";
        div.style.marginTop = "0.5em";
        div.style.marginBottom = "0.5em";
        //div.style.paddingLeft = "20%";
        //div.style.width = "40%";
        document.getElementById('bigfeed').appendChild(div);
        var divtext = document.createElement("div");
        document.getElementById('feed' + this.info.index).appendChild(divtext);
        divtext.id = "text" + this.info.index;
        var img = document.createElement("IMG");
        document.getElementById('text' + this.info.index).appendChild(img);
        img.id = "pfp" + this.info.index;
        document.getElementById("pfp");
        img.className = "pfp";
        img.src = "src/img/sample_profile.jpg";
        var header = document.createElement("h1");
        document.getElementById('text' + this.info.index).appendChild(header);
        header.id = "name" + this.info.index;
        header.innerHTML = this.info.user;
        header.className = "header";
        var p = document.createElement('p');
        document.getElementById('text' + this.info.index).appendChild(p);
        p.id = "details" + this.info.index;
        p.innerHTML = "Leaving " + this.info.date + " from " + this.info.startadr + " to " + this.info.endadr + " for " + this.info.cost;
        p.className = "details";
        var map = document.createElement("IMG");
        document.getElementById('text' + this.info.index).appendChild(map);
        map.id = "map" + this.info.index;
        map.className = "destination";
        map.src = "src/img/virginia_map.jpg";
        var connect = document.createElement("button");
        document.getElementById('text' + this.info.index).appendChild(connect);
        connect.id = this.buttonType + this.info.index;
        connect.className = "posting-button";
        connect.innerHTML = this.info.buttonType;
        connect.style.marginRight = "1em";
        connect.addEventListener("click", function (e) { return _this.clicked(_this.info.buttonType); });
    };
    PostingComponent.prototype.clicked = function (buttonType) {
        this.transferService.setData(this.info);
        if (buttonType == "Connect")
            this.router.navigateByUrl('/connect');
        else
            this.router.navigateByUrl('/update');
    };
    PostingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-posting',
            template: __webpack_require__("./app/posting/posting.component.html"),
            styles: [__webpack_require__("./app/posting/posting.component.css")]
        }),
        __metadata("design:paramtypes", [_datatransfer_service__WEBPACK_IMPORTED_MODULE_2__["TransferService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_3__["Page"]])
    ], PostingComponent);
    return PostingComponent;
}());



/***/ }),

/***/ "./app/reauth/reauth.component.css":
/***/ (function(module, exports) {

module.exports = "/* Add mobile styles for the component here.  */\n.header{\n    margin-top: 50;\n\tmargin-left: 32;\n\tcolor: black;\n    font-weight: 500;\n    font-size: 24;\n    text-align: left;\n}\n.submit-btn{\n    background-color:#ac00e6;\n    width: 75%;\n    height: 170px;\n    font-family: \"Segoe UI\",Arial,sans-serif;\n    color: white;\n    margin-top: 20;\n}\n.text-field{\n    width: 85%;\n    margin-top: 20;\n    color:#696969\n}\n\n.close-button-container {\n\tposition: absolute;\n\tleft: 0;\n}\n.close {\n\tmargin: 10;\n\tfont-size: 40;\n\twidth: 48;\n    height: 48;\n    color: black\n}\n\n.error-message {\n\tcolor: red;\n\tfont-size: 16;\n\tvisibility: collapse;\n}"

/***/ }),

/***/ "./app/reauth/reauth.component.html":
/***/ (function(module, exports) {

module.exports = "<Stacklayout>\n    <StackLayout class=\"close-button-container\" orientation=\"horizontal\">\n        <Label text=\"&times;\" class=\"close\" (tap)=\"close('cancel')\"></Label>\n    </StackLayout>\n    <Label class=\"header\" text=\"Please re-enter your password\" textWrap=\"true\"></Label>\n    <StackLayout class=\"input-field\">\n        <TextField #val [(ngModel)]=\"password\" secure=\"true\" autocorrect=\"false\" returnKeyType=\"done\" class=\"text-field\"></TextField>\n    </StackLayout>\n    <Label text=\"The password you entered was incorrect\" textWrap=\"true\" class=\"error-message\" #errorMessage></Label>\n\n    <Button text=\"Submit\" (tap)=\"submit(password)\" class=\"submit-btn\"></Button>\n\n</Stacklayout>"

/***/ }),

/***/ "./app/reauth/reauth.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReauthComponent", function() { return ReauthComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_angular_directives_dialogs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/nativescript-angular/directives/dialogs.js");
/* harmony import */ var nativescript_angular_directives_dialogs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_directives_dialogs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/nativescript-plugin-firebase/firebase.js");
/* harmony import */ var nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _logincheck_service_tns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/logincheck.service.tns.ts");
/* harmony import */ var _datatransfer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/datatransfer.service.ts");
/* harmony import */ var _settingsform_settingsform_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./app/settingsform/settingsform.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ReauthComponent = /** @class */ (function () {
    function ReauthComponent(params, transferService, logincheckService, vcRef, modal) {
        this.params = params;
        this.transferService = transferService;
        this.logincheckService = logincheckService;
        this.vcRef = vcRef;
        this.modal = modal;
    }
    ReauthComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.field = this.transferService.getData();
        this.userId = this.logincheckService.getUser();
        nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_2__["getCurrentUser"]().then(function (user) {
            _this.userEmail = user.email;
        });
    };
    ReauthComponent.prototype.close = function (res) {
        var errorMessage = this.em.nativeElement;
        errorMessage.style.visibility = 'collapse';
        this.password = '';
        this.params.closeCallback(res);
    };
    ReauthComponent.prototype.submit = function (password) {
        var _this = this;
        nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_2__["reauthenticate"]({
            type: nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_2__["LoginType"].PASSWORD,
            // this is only required in type == PASSWORD
            passwordOptions: {
                email: this.userEmail,
                password: this.password
            }
        }).then(function (result) {
            // you can now safely delete the account / change the password, etc
            var options = {
                context: {},
                fullscreen: true,
                viewContainerRef: _this.vcRef
                // animated: true,
                // transition: { name: "slideTop" }
            };
            var errorMessage = _this.em.nativeElement;
            errorMessage.style.visibility = 'collapse';
            _this.transferService.setData(_this.field);
            _this.password = '';
            _this.modal.showModal(_settingsform_settingsform_component__WEBPACK_IMPORTED_MODULE_5__["SettingsformComponent"], options).then(function (res) {
                if (res == 'update') {
                    _this.close('update');
                }
            });
        }, function (error) {
            var errorMessage = _this.em.nativeElement;
            errorMessage.style.visibility = 'visible';
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("errorMessage", { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ReauthComponent.prototype, "em", void 0);
    ReauthComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reauth',
            template: __webpack_require__("./app/reauth/reauth.component.html"),
            styles: [__webpack_require__("./app/reauth/reauth.component.css")]
        }),
        __metadata("design:paramtypes", [nativescript_angular_directives_dialogs__WEBPACK_IMPORTED_MODULE_1__["ModalDialogParams"], _datatransfer_service__WEBPACK_IMPORTED_MODULE_4__["TransferService"], _logincheck_service_tns__WEBPACK_IMPORTED_MODULE_3__["LogincheckService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], nativescript_angular_directives_dialogs__WEBPACK_IMPORTED_MODULE_1__["ModalDialogService"]])
    ], ReauthComponent);
    return ReauthComponent;
}());



/***/ }),

/***/ "./app/search/search.component.css":
/***/ (function(module, exports) {

module.exports = "/* Add mobile styles for the component here.  */\n"

/***/ }),

/***/ "./app/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <app-navigation></app-navigation> -->\n<StackLayout>\n  <Label text=\"search works\" textWrap=\"true\"></Label>\n  <Label text=\"This is a migrated component\" textWrap=\"true\"></Label>\n  <Label text=\"Update it to provide the UI elements required in your mobile app\" textWrap=\"true\"></Label>\n</StackLayout>"

/***/ }),

/***/ "./app/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchComponent = /** @class */ (function () {
    function SearchComponent() {
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search',
            template: __webpack_require__("./app/search/search.component.html"),
            styles: [__webpack_require__("./app/search/search.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./app/settings/settings.component.css":
/***/ (function(module, exports) {

module.exports = "/*\nAdd your NativeScript specific styles here.\nTo learn more about styling in NativeScript see:\nhttps://docs.nativescript.org/angular/ui/styling\n*/\n\n#Header {\n    color:black;\n    font-size: 24;\n    font-family: \"Segoe UI\",Arial,sans-serif;\n}\n\n#listView {\n\tmargin-bottom: 20;\n}\n\n.update {\n    display: block;\n    color: #ac00e6;\n    border-width: 1;\n    border-color: #ac00e6;\n    border-radius: 5;\n    text-align: center;\n    float: center;\n    margin: auto; \n    font-weight: 700;\n    font-family: \"Segoe UI\",Arial,sans-serif;\n    margin-bottom: 15;\n    width: 200;\n    height: 40;\n}\n.update:highlighted {\n    background-color: #f9e6ff;\n}\n.payments {\n\tcolor: black;\n\tmargin-top: 12;\n\tmargin-bottom: 12;\n\tmargin-left: 18;\n    text-align: left;\n    font-size: 15;\n}\n.logout {\n\tcolor: #ac00e6;\n\tmargin-top: 12;\n\tmargin-bottom: 12;\n\tmargin-left: 18;\n\tfont-weight: 500;\n    text-align: left;\n    font-size: 15;\n}\n\n.btn-list-view {\n\tmargin-top: 36;\n\theight: 100;\n}\n\n.item-list-view {\n\theight: 300;\n}\n\n.profile-picture {\n\theight: 100;\n\twidth: 100;\n\tmargin-top: 10;\n\tmargin-bottom: 8;\n\t/*background-repeat: no-repeat;*/\n}\n\n.img-rounded {\n\tborder-radius: 100%;\n}\n\n.header-label {\n\tmargin-bottom: 5;\n\tfont-size: 15;\n\tcolor: #4285f4;\n}\n\n.bold {\n\tfont-weight: 500;\n}\n\n.activity-indicator {\n  color: #ac00e6;\n  margin: 25%;\n}\n\n.value-label {\n\tmargin-left: 18;\n\tmargin-bottom: 10;\n    color: black;\n    font-weight: 400;\n    font-size: 18;\n    text-align: left;\n}\n.title-label {\n\tmargin-top: 16;\n\tmargin-left: 18;\n\tcolor: #696969;\n    text-align: left;\n}\n\n.stack-layout{\n    height:100%\n}\n.activity-indicator{\n    height: 50%;\n}\nListView {\n    separator-color: transparent;\n}"

/***/ }),

/***/ "./app/settings/settings.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <app-navigation></app-navigation> -->\n<Stacklayout height=\"100%\">\n    <StackLayout #settingsContainer>\n      <!-- <Label id= \"Header\" text=\"Account Settings\" textWrap=\"true\"></Label> -->\n      <Image src=\"{{ profile }}\" stretch=\"aspectFit\" class=\"img-rounded profile-picture\" (tap)=\"uploadPfp()\"></Image>\n      <Label text=\"Change Photo\" class=\"header-label bold\" (tap)=\"uploadPfp()\"></Label>\n\n      <ListView [items]=\"fields\" #listView id=\"listView\" (itemTap)=\"showModal($event)\" class=\"item-list-view\">\n        <ng-template let-item=\"item\" let-i=\"index\" let-odd=\"odd\" let-even=\"even\">\n          <StackLayout class=\"stack-layout\">\n            <Label textWrap=\"true\" class=\"title-label\" [text]=\"item.label\"></Label>\n            <Label textWrap=\"true\" class=\"value-label\" [text]=\"item.value\"></Label>\n          </StackLayout>\n        </ng-template>\n      </ListView>\n      <!-- <RadDataForm tkExampleTitle tkToggleNavButton [source]=\"person\"></RadDataForm>   -->\n      <!-- <Button class=\"Update\"  text=\"Update Settings\"></Button> -->\n\n      <ListView [items]=\"buttons\" #listViewSecond (itemTap)=\"route($event)\" (setupItemView)=\"setupItemView($event)\" class=\"btn-list-view\">\n        <ng-template let-item=\"item\" let-i=\"index\" let-odd=\"odd\" let-even=\"even\" let-payments=\"payments\" let-logout=\"logout\">\n          <StackLayout class=\"stack-layout\">\n            <Label textWrap=\"true\" [text]=\"item\" [class.payments]=\"payments\" [class.logout]=\"logout\"></Label>\n          </StackLayout>\n        </ng-template>\n      </ListView>\n<!--       <StackLayout class=\"payments-container\" (tap)=\"toPayments()\">\n        <Label class=\"payments\" text=\"Payments\"></Label>\n      </StackLayout>\n      <StackLayout class=\"logout-container\" (tap)=\"logOut()\">\n        <Label class=\"logout\" text=\"Log out\"></Label>\n      </StackLayout> -->\n    </StackLayout>\n\n<ActivityIndicator #activityIndicator busy=\"true\" width=\"40\"  class=\"activity-indicator\">\n  </ActivityIndicator>\n</Stacklayout>"

/***/ }),

/***/ "./app/settings/settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/tns-core-modules/ui/page/page.js");
/* harmony import */ var tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/nativescript-angular/router/index.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _logincheck_service_tns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/logincheck.service.tns.ts");
/* harmony import */ var nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/nativescript-plugin-firebase/firebase.js");
/* harmony import */ var nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var nativescript_plugin_firebase_messaging__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../node_modules/nativescript-plugin-firebase/messaging/index.js");
/* harmony import */ var nativescript_plugin_firebase_messaging__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nativescript_plugin_firebase_messaging__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var nativescript_facebook__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../node_modules/nativescript-facebook/index.js");
/* harmony import */ var nativescript_facebook__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(nativescript_facebook__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var nativescript_imagepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../node_modules/nativescript-imagepicker/imagepicker.js");
/* harmony import */ var nativescript_imagepicker__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(nativescript_imagepicker__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var tns_core_modules_file_system__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../node_modules/tns-core-modules/file-system/file-system.js");
/* harmony import */ var tns_core_modules_file_system__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_file_system__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var nativescript_imagecropper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("../node_modules/nativescript-imagecropper/imagecropper.js");
/* harmony import */ var nativescript_imagecropper__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(nativescript_imagecropper__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var tns_core_modules_image_source__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("../node_modules/tns-core-modules/image-source/image-source.js");
/* harmony import */ var tns_core_modules_image_source__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_image_source__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("../node_modules/tns-core-modules/data/observable-array/observable-array.js");
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _datatransfer_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./app/datatransfer.service.ts");
/* harmony import */ var nativescript_angular_directives_dialogs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("../node_modules/nativescript-angular/directives/dialogs.js");
/* harmony import */ var nativescript_angular_directives_dialogs__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_directives_dialogs__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _settingsform_settingsform_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./app/settingsform/settingsform.component.ts");
/* harmony import */ var _reauth_reauth_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./app/reauth/reauth.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

// import { Router } from '@angular/router';















var Label = /** @class */ (function () {
    function Label(label, value, firstName, lastName) {
        this.label = label;
        this.value = value;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return Label;
}());
var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(router, page, logincheckService, transferService, vcRef, modal) {
        this.router = router;
        this.page = page;
        this.logincheckService = logincheckService;
        this.transferService = transferService;
        this.vcRef = vcRef;
        this.modal = modal;
        this.profile = "~/img/sample_profile.png";
    }
    SettingsComponent.prototype.ngOnInit = function () {
        this.imageCropper = new nativescript_imagecropper__WEBPACK_IMPORTED_MODULE_9__["ImageCropper"]();
        this.loadViews();
        var activityIndicator = this.ai.nativeElement;
        activityIndicator.style.visibility = 'collapse';
    };
    SettingsComponent.prototype.loadViews = function () {
        var _this = this;
        this.paymentList = new tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_11__["ObservableArray"]();
        this.paymentList.push('Payment methods');
        this.logoutList = new tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_11__["ObservableArray"]();
        this.logoutList.push('Log out');
        this.buttons = new tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_11__["ObservableArray"]();
        this.buttons.push('Payment methods');
        this.buttons.push('Log out');
        this.userId = this.logincheckService.getUser();
        var userDocument = nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_4__["firestore"].collection('users').doc(this.userId);
        this.fields = new tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_11__["ObservableArray"]();
        this.updateListView();
        nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_4__["getCurrentUser"]().then(function (user) {
            _this.user = user;
            if (user.photoURL != null) {
                _this.profile = user.photoURL;
                if (user.photoURL.substring(0, 27) == 'https://graph.facebook.com/')
                    _this.profile += '?height=300';
            }
        });
    };
    SettingsComponent.prototype.setupItemView = function (args) {
        args.view.context.payments = (args.index == 0);
        args.view.context.logout = (args.index == 1);
        args.view.context.even = (args.index % 2 === 0);
        args.view.context.odd = (args.index % 2 === 1);
    };
    SettingsComponent.prototype.updateListView = function () {
        var _this = this;
        this.fields.splice(0);
        var userDocument = nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_4__["firestore"].collection('users').doc(this.userId);
        userDocument.get().then(function (doc) {
            var vals = doc.data();
            // console.log("fields", vals)
            _this.fields.push(new Label("Name", vals.first_name + " " + vals.last_name, vals.first_name, vals.last_name));
            _this.fields.push(new Label("Email", vals.email, vals.first_name, vals.last_name));
            if (vals.phone_number == "" || vals.phone_number == null) {
                _this.fields.push(new Label("Phone Number", "None", vals.first_name, vals.last_name));
            }
            else {
                _this.fields.push(new Label("Phone Number", vals.phone_number, vals.first_name, vals.last_name));
            }
            if (_this.user.providers[1].id == 'password') {
                _this.fields.push(new Label("Password", "********", vals.first_name, vals.last_name));
            }
        });
    };
    SettingsComponent.prototype.toPayments = function () {
        this.router.navigate(['payments']);
    };
    SettingsComponent.prototype.showModal = function (args) {
        var _this = this;
        var label = this.fields._array[args.index];
        this.transferService.setData(label);
        var options = {
            context: {},
            fullscreen: true,
            viewContainerRef: this.vcRef
            // animated: true,
            // transition: { name: "slideTop" }
        };
        if (args.index == 3) {
            this.modal.showModal(_reauth_reauth_component__WEBPACK_IMPORTED_MODULE_15__["ReauthComponent"], options).then(function (res) {
                if (res == 'update') {
                    _this.updateListView();
                }
            });
        }
        else {
            this.modal.showModal(_settingsform_settingsform_component__WEBPACK_IMPORTED_MODULE_14__["SettingsformComponent"], options).then(function (res) {
                if (res == 'update') {
                    _this.updateListView();
                }
            });
        }
    };
    SettingsComponent.prototype.route = function (args) {
        if (args.index == 0) {
            this.toPayments();
        }
        else if (args.index == 1) {
            this.logOut();
        }
    };
    SettingsComponent.prototype.onItemTap = function (args) {
        var label = this.fields._array[args.index];
        this.router.navigate(['settingsform']);
        this.transferService.setData(label);
    };
    SettingsComponent.prototype.logOut = function () {
        return __awaiter(this, void 0, void 0, function () {
            var activityIndicator, settingsContainer, tokenPromise, userDoc;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        activityIndicator = this.ai.nativeElement;
                        activityIndicator.busy = true;
                        activityIndicator.style.visibility = 'visible';
                        settingsContainer = this.sc.nativeElement;
                        settingsContainer.style.visibility = 'collapse';
                        return [4 /*yield*/, nativescript_plugin_firebase_messaging__WEBPACK_IMPORTED_MODULE_5__["messaging"].getCurrentPushToken().then(function (token) {
                                _this.token = token;
                                return token;
                            })];
                    case 1:
                        tokenPromise = _a.sent();
                        userDoc = nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_4__["firestore"].collection('users').doc(this.userId);
                        userDoc.get().then(function (doc) { return __awaiter(_this, void 0, void 0, function () {
                            var index, newTokens, chatPromise;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        index = doc.data().tokens.indexOf(this.token);
                                        if (index > -1) {
                                            newTokens = doc.data().tokens;
                                            newTokens.splice(index, 1);
                                            console.log(newTokens);
                                            userDoc.update({ tokens: newTokens });
                                        }
                                        return [4 /*yield*/, this.updateChatTokens(doc.data().chats)];
                                    case 1:
                                        chatPromise = _a.sent();
                                        nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_4__["logout"]();
                                        Object(nativescript_facebook__WEBPACK_IMPORTED_MODULE_6__["logout"])(function () {
                                        });
                                        this.logincheckService.clearInfo();
                                        activityIndicator.busy = false;
                                        activityIndicator.style.visibility = 'collapse';
                                        settingsContainer.style.visibility = 'visible';
                                        this.router.navigate(['welcome'], { clearHistory: true });
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        return [2 /*return*/];
                }
            });
        });
    };
    SettingsComponent.prototype.updateChatTokens = function (chats) {
        return __awaiter(this, void 0, void 0, function () {
            var chatCollection, i, chatPromise;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        chatCollection = nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_4__["firestore"].collection('chats');
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < chats.length)) return [3 /*break*/, 4];
                        return [4 /*yield*/, chatCollection.doc(chats[i]).get().then(function (doc) { return __awaiter(_this, void 0, void 0, function () {
                                var index, newTokens, updatePromise;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            index = doc.data().tokens.indexOf(this.token);
                                            if (!(index > -1)) return [3 /*break*/, 2];
                                            newTokens = doc.data().tokens;
                                            newTokens.splice(index, 1);
                                            return [4 /*yield*/, chatCollection.doc(chats[i]).update({ tokens: newTokens })];
                                        case 1:
                                            updatePromise = _a.sent();
                                            _a.label = 2;
                                        case 2: return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 2:
                        chatPromise = _a.sent();
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    SettingsComponent.prototype.uploadPfp = function () {
        var _this = this;
        var imageCropper = new nativescript_imagecropper__WEBPACK_IMPORTED_MODULE_9__["ImageCropper"]();
        var context = nativescript_imagepicker__WEBPACK_IMPORTED_MODULE_7__["create"]({
            mode: "single" // use "multiple" for multiple selection
        });
        context
            .authorize()
            .then(function () {
            return context.present();
        })
            .then(function (selection) {
            selection.forEach(function (selected) {
                var imgSource = new tns_core_modules_image_source__WEBPACK_IMPORTED_MODULE_10__["ImageSource"]();
                imgSource.fromAsset(selected).then(function (source) {
                    _this.imageCropper
                        .show(source, { width: 300, height: 300 })
                        .then(function (args) {
                        // console.dir(args);
                        if (args.image !== null) {
                            // this.croppedImage.imageSource =
                            //     args.image;
                            var folder = tns_core_modules_file_system__WEBPACK_IMPORTED_MODULE_8__["knownFolders"].temp();
                            var path = tns_core_modules_file_system__WEBPACK_IMPORTED_MODULE_8__["path"].join(folder.path, "profile_picture.png");
                            var saved = args.image.saveToFile(path, 'png');
                            var activityIndicator = _this.ai.nativeElement;
                            activityIndicator.busy = true;
                            activityIndicator.style.visibility = 'visible';
                            var settingsContainer = _this.sc.nativeElement;
                            settingsContainer.style.visibility = 'collapse';
                            nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_4__["storage"].uploadFile({
                                // the full path of the file in your Firebase storage (folders will be created)
                                remoteFullPath: 'users/' + _this.userId + '/uploads/profile_picture.jpg',
                                // option 1: a file-system module File object
                                localFile: tns_core_modules_file_system__WEBPACK_IMPORTED_MODULE_8__["File"].fromPath(path),
                                // option 2: a full file path (ignored if 'localFile' is set)
                                localFullPath: path,
                                // get notified of file upload progress
                                onProgress: function (status) {
                                    console.log("Uploaded fraction: " + status.fractionCompleted);
                                    console.log("Percentage complete: " + status.percentageCompleted);
                                }
                            }).then(function (uploadedFile) {
                                console.log("File uploaded: " + JSON.stringify(uploadedFile));
                                nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_4__["storage"].getDownloadUrl({
                                    // the full path of an existing file in your Firebase storage
                                    remoteFullPath: 'users/' + _this.userId + '/uploads/profile_picture.jpg'
                                }).then(function (url) {
                                    nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_4__["updateProfile"]({
                                        photoURL: url
                                    }).then(function () {
                                        // called when update profile was successful
                                        activityIndicator.busy = false;
                                        settingsContainer.style.visibility = 'visible';
                                        activityIndicator.style.visibility = 'collapse';
                                        _this.profile = url;
                                    }, function (errorMessage) {
                                        console.log(errorMessage);
                                    });
                                    var userDocument = nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_4__["firestore"].collection('users').doc(_this.userId);
                                    userDocument.update({
                                        profile_source: url
                                    });
                                }, function (error) {
                                    console.log("Error: " + error);
                                });
                            }, function (error) {
                                console.log("File upload error: " + error);
                            }).catch(function (err) {
                                // process error
                                console.log(err);
                            });
                        }
                    })
                        .catch(function (e) {
                        console.dir(e);
                    });
                }).catch(function (err) {
                    console.log(err);
                });
            });
        }).catch(function (err) {
            console.log(err);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("activityIndicator", { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], SettingsComponent.prototype, "ai", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("settingsContainer", { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], SettingsComponent.prototype, "sc", void 0);
    SettingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-settings",
            template: __webpack_require__("./app/settings/settings.component.html"),
            styles: [__webpack_require__("./app/settings/settings.component.css")]
        }),
        __metadata("design:paramtypes", [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterExtensions"], tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_1__["Page"], _logincheck_service_tns__WEBPACK_IMPORTED_MODULE_3__["LogincheckService"], _datatransfer_service__WEBPACK_IMPORTED_MODULE_12__["TransferService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], nativescript_angular_directives_dialogs__WEBPACK_IMPORTED_MODULE_13__["ModalDialogService"]])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./app/settingsform/settingsform.component.css":
/***/ (function(module, exports) {

module.exports = "/* Add mobile styles for the component here.  */\n.header{\n    margin-top: 50;\n\tmargin-left: 32;\n\tcolor: black;\n    font-weight: 500;\n    font-size: 30;\n    text-align: left;\n}\n.submit-btn{\n    background-color:#ac00e6;\n    width: 75%;\n    height: 170px;\n/*    font-family: \"Segoe UI\",Arial,sans-serif;\n*/    color: white;\n    margin-top: 20;\n}\n.text-field{\n    width: 85%;\n    margin-top: 20;\n    color:#696969\n}\n\n.close-button-container {\n\tposition: absolute;\n\tleft: 0;\n}\n.close {\n\tmargin: 10;\n\tfont-size: 40;\n\twidth: 48;\n    height: 48;\n    color: black\n}\n\n.error-message {\n    color: red;\n    font-size: 16;\n    visibility: collapse;\n}\n\n.second-val {\n    visibility: collapse;\n}"

/***/ }),

/***/ "./app/settingsform/settingsform.component.html":
/***/ (function(module, exports) {

module.exports = "<Stacklayout>\n    <StackLayout class=\"close-button-container\" orientation=\"horizontal\">\n        <Label text=\"&times;\" class=\"close\" (tap)=\"close('cancel')\"></Label>\n    </StackLayout>\n    <Label class=\"header\" [text]=\"label\" textWrap=\"true\"></Label>\n    <StackLayout class=\"input-field\">\n    \t<!-- <MaskedTextField class=\"input input-border\" mask=\"(000) 000-0000\" [(ngModel)]=\"value\" keyboardType=\"phone\"></MaskedTextField> -->\n        <TextField #val [(ngModel)]=\"value\" [keyboardType] = \"keyboard\" autocorrect=\"false\" returnKeyType=\"{{returnKey}}\"\n         [maxLength]= \"maxlength\" class=\"text-field\" secure=\"{{isSecure}}\" hint=\"{{ hint }}\"></TextField>\n        <TextField #secondVal [(ngModel)]=\"secondValue\" [keyboardType] = \"keyboard\" autocorrect=\"false\" returnKeyType=\"done\"\n         [maxLength]= \"maxlength\" class=\"text-field second-val\" secure=\"{{isSecure}}\" hint=\"{{ secondHint }}\"></TextField>\n    </StackLayout>\n    <Label #errorMessage text=\"{{ errorText }}\" textWrap=\"true\" class=\"error-message\"></Label>\n\n    <Button text=\"Save\" (tap)=\"submitData(val.text)\" class=\"submit-btn\"></Button>\n\n</Stacklayout>"

/***/ }),

/***/ "./app/settingsform/settingsform.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsformComponent", function() { return SettingsformComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _datatransfer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/datatransfer.service.ts");
/* harmony import */ var tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/tns-core-modules/ui/page/page.js");
/* harmony import */ var tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/nativescript-plugin-firebase/firebase.js");
/* harmony import */ var nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _logincheck_service_tns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/logincheck.service.tns.ts");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../node_modules/nativescript-angular/router/index.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var nativescript_angular_directives_dialogs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../node_modules/nativescript-angular/directives/dialogs.js");
/* harmony import */ var nativescript_angular_directives_dialogs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_directives_dialogs__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { ModalDialogParams } from "nativescript-angular/directives/dialogs";




var SettingsformComponent = /** @class */ (function () {
    function SettingsformComponent(transferService, logincheckService, page, router, params) {
        this.transferService = transferService;
        this.logincheckService = logincheckService;
        this.page = page;
        this.router = router;
        this.params = params;
        this.isSecure = false;
        this.returnKey = "done";
    }
    SettingsformComponent.prototype.ngOnInit = function () {
        // this.page.actionBarHidden = true;
        this.field = this.transferService.getData();
        this.label = this.field.label;
        this.value = this.field.value;
        if (this.field.value == "None") {
            this.value = '';
        }
        if (this.label == "Name") {
            // this.keyboard = "";
            this.maxlength = 30;
            this.returnKey = "next";
            this.value = this.field.firstName;
            this.secondValue = this.field.lastName;
            this.hint = "First name";
            this.secondHint = "Last name";
            var secondValue = this.sv.nativeElement;
            secondValue.style.visibility = "visible";
        }
        else if (this.label == "Email") {
            this.keyboard = "email";
            this.maxlength = 30;
            this.errorText = "Invalid email";
            this.hint = "Email";
        }
        else if (this.label == "Phone Number") {
            this.keyboard = "phone";
            this.maxlength = 10;
            this.errorText = "Invalid phone number";
            this.hint = "xxx-xxx-xxxx";
        }
        else if (this.label == "Password") {
            this.value = '';
            this.maxlength = 30;
            this.isSecure = true;
            this.label = "Enter new password";
            this.hint = "New password";
            this.secondHint = "Re-enter new password";
            this.errorText = "Password must be at lest 6 characters long";
            var secondValue = this.sv.nativeElement;
            secondValue.style.visibility = "visible";
        }
    };
    SettingsformComponent.prototype.submitData = function (result) {
        var _this = this;
        this.userId = this.logincheckService.getUser();
        var userDocument = nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_3__["firestore"].collection('users').doc(this.userId);
        if (this.label == "Name") {
            nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_3__["updateProfile"]({
                displayName: this.value + " " + this.secondValue
            }).then(function () {
                console.log("Profile updated");
            }).catch(function (err) {
                console.log(err);
            });
            // console.log("name", name)
            userDocument.update({
                first_name: this.value,
                last_name: this.secondValue
            });
            var postingsCollection = nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_3__["firestore"].collection('postings');
            userDocument.get().then(function (doc) {
                var postIds = doc.data().posts;
                // console.log("postids", postIds)
                for (var i = 0; i < postIds.length; i++) {
                    postingsCollection.doc(postIds[i]).update({
                        user: _this.value + " " + _this.secondValue
                    });
                }
            });
            this.params.closeCallback("update");
        }
        else if (this.label == "Email") {
            nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_3__["updateEmail"](result).then(function () {
                userDocument.update({
                    email: result,
                }).then(function () {
                    _this.params.closeCallback("update");
                });
            }).catch(function (error) {
                _this.showError();
            });
        }
        else if (this.label == "Phone Number") {
            userDocument.update({
                phone_number: result,
            }).then(function (res) {
                _this.params.closeCallback("update");
            }).catch(function (err) {
                _this.showError();
            });
        }
        else if (this.label == "Enter new password") {
            if (this.value != this.secondValue) {
                this.errorText = "Passwords do not match";
                this.showError();
            }
            else {
                nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_3__["updatePassword"](this.value).then(function (res) {
                    _this.params.closeCallback("update");
                }).catch(function (err) {
                    _this.errorText = "Password must be at lest 6 characters long";
                    _this.showError();
                });
            }
        }
    };
    SettingsformComponent.prototype.close = function (res) {
        this.params.closeCallback(res);
    };
    SettingsformComponent.prototype.showError = function () {
        var errorMessage = this.em.nativeElement;
        errorMessage.style.visibility = "visible";
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("errorMessage", { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], SettingsformComponent.prototype, "em", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("secondVal", { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], SettingsformComponent.prototype, "sv", void 0);
    SettingsformComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-settingsform',
            template: __webpack_require__("./app/settingsform/settingsform.component.html"),
            styles: [__webpack_require__("./app/settingsform/settingsform.component.css")]
        }),
        __metadata("design:paramtypes", [_datatransfer_service__WEBPACK_IMPORTED_MODULE_1__["TransferService"], _logincheck_service_tns__WEBPACK_IMPORTED_MODULE_4__["LogincheckService"],
            tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_2__["Page"], nativescript_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterExtensions"], nativescript_angular_directives_dialogs__WEBPACK_IMPORTED_MODULE_6__["ModalDialogParams"]])
    ], SettingsformComponent);
    return SettingsformComponent;
}());



/***/ }),

/***/ "./app/update/update.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./app/update/update.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  update works!\n</p>\n"

/***/ }),

/***/ "./app/update/update.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateComponent", function() { return UpdateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _logincheck_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/logincheck.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UpdateComponent = /** @class */ (function () {
    function UpdateComponent(logincheckService) {
        this.logincheckService = logincheckService;
    }
    UpdateComponent.prototype.ngOnInit = function () {
        this.logincheckService.loginCheck();
    };
    UpdateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-update',
            template: __webpack_require__("./app/update/update.component.html"),
            styles: [__webpack_require__("./app/update/update.component.css")]
        }),
        __metadata("design:paramtypes", [_logincheck_service__WEBPACK_IMPORTED_MODULE_1__["LogincheckService"]])
    ], UpdateComponent);
    return UpdateComponent;
}());



/***/ }),

/***/ "./app/user.service.tns.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        /**
        * To get the server to recognize your mobile device, find your ipv4 address by running ipconfig in a terminal window
        * and add a new uri line with your ipv4 address. Do this for network_security_config.xml, user.services.tns.ts, and
        * posting.service.tns.ts.
        */
        // Adam's testing server
        // uri = 'http://192.168.1.7:4000';
        // uri = 'http://10.5.11.25:4000';
        // Phillip's Testing server
        this.uri = 'http://192.168.1.3:4000';
    }
    UserService.prototype.getUsers = function () {
        return this.http.get(this.uri + "/users");
    };
    UserService.prototype.getUserbyId = function (id) {
        return this.http.get(this.uri + "/users/" + id);
    };
    UserService.prototype.addUser = function (name, username, address, birthdate, email, gender, phone_number, rides_given, rides_received) {
        if (name === void 0) { name = ''; }
        if (username === void 0) { username = ''; }
        if (address === void 0) { address = ''; }
        if (birthdate === void 0) { birthdate = ''; }
        if (email === void 0) { email = ''; }
        if (gender === void 0) { gender = ''; }
        if (phone_number === void 0) { phone_number = ''; }
        if (rides_given === void 0) { rides_given = "0"; }
        if (rides_received === void 0) { rides_received = "0"; }
        var user = {
            name: name,
            username: username,
            address: address,
            birthdate: birthdate,
            email: email,
            gender: gender,
            phone_number: phone_number,
            rides_given: rides_given,
            rides_received: rides_received,
            payment_id: ""
        };
        return this.http.post(this.uri + "/users/add/", user);
    };
    UserService.prototype.updateUser = function (id, name, username, address, birthdate, email, gender, phone_number, rides_given, rides_received, payment_id) {
        var user = {
            name: name,
            username: username,
            address: address,
            birthdate: birthdate,
            email: email,
            gender: gender,
            phone_number: phone_number,
            rides_given: rides_given,
            rides_received: rides_received,
            payment_id: payment_id
        };
        return this.http.post(this.uri + "/users/update/" + id, user);
    };
    UserService.prototype.deleteUser = function (id) {
        return this.http.get(this.uri + "/users/delete/" + id);
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./app/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        /**
        * To get the server to recognize your mobile device, find your ipv4 address by running ipconfig in a terminal window
        * and add a new uri line with your ipv4 address. Do this for network_security_config.xml, user.services.tns.ts, and
        * posting.service.tns.ts.
        */
        // Adam's testing server
        // uri = 'http://192.168.1.7:4000';
        // uri = 'http://10.5.11.25:4000';
        // Phillip's Testing server
        this.uri = 'http://192.168.1.3:4000';
    }
    UserService.prototype.getUsers = function () {
        return this.http.get(this.uri + "/users");
    };
    UserService.prototype.getUserbyId = function (id) {
        return this.http.get(this.uri + "/users/" + id);
    };
    UserService.prototype.addUser = function (name, username, address, birthdate, email, gender, phone_number, rides_given, rides_received) {
        if (name === void 0) { name = ''; }
        if (username === void 0) { username = ''; }
        if (address === void 0) { address = ''; }
        if (birthdate === void 0) { birthdate = ''; }
        if (email === void 0) { email = ''; }
        if (gender === void 0) { gender = ''; }
        if (phone_number === void 0) { phone_number = ''; }
        if (rides_given === void 0) { rides_given = "0"; }
        if (rides_received === void 0) { rides_received = "0"; }
        var user = {
            name: name,
            username: username,
            address: address,
            birthdate: birthdate,
            email: email,
            gender: gender,
            phone_number: phone_number,
            rides_given: rides_given,
            rides_received: rides_received,
            payment_id: ""
        };
        return this.http.post(this.uri + "/users/add/", user);
    };
    UserService.prototype.updateUser = function (id, name, username, address, birthdate, email, gender, phone_number, rides_given, rides_received, payment_id) {
        var user = {
            name: name,
            username: username,
            address: address,
            birthdate: birthdate,
            email: email,
            gender: gender,
            phone_number: phone_number,
            rides_given: rides_given,
            rides_received: rides_received,
            payment_id: payment_id
        };
        return this.http.post(this.uri + "/users/update/" + id, user);
    };
    UserService.prototype.deleteUser = function (id) {
        return this.http.get(this.uri + "/users/delete/" + id);
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./app/welcome/welcome.component.css":
/***/ (function(module, exports) {

module.exports = "/* Add mobile styles for the component here.  */\n.page {\n  align-items: center;\n  flex-direction: column;\n  visibility: collapse;\n}\n.form {\n  margin-left: 30;\n  margin-right: 30;\n  flex-grow: 2;\n  vertical-align: middle;\n}\n\n.logo {\n  margin-bottom: 72;\n  height: 120;\n  font-weight: bold;\n}\n.header {\n  horizontal-align: center;\n  font-size: 25;\n  font-weight: 600;\n  margin-bottom: 70;\n  text-align: center;\n  color: #ac00e6;\n}\n\n.input-field {\n  margin-bottom: 25;\n}\n.input {\n  font-size: 18;\n  placeholder-color: #A8A8A8;\n}\n\n.btn-primary {\n  height: 50;\n  margin: 30 5 15 5;\n  background-color: #ac00e6;\n  border-radius: 5;\n  font-size: 20;\n  font-weight: 600;\n}\n\n.btn-fb {\n  height: 100;\n  margin: 0 5 15 5;\n  /*border-radius: 5;*/\n  font-size: 20;\n  font-weight: 600;\n}\n\n.login-label {\n  horizontal-align: center;\n  color: #A8A8A8;\n  font-size: 16;\n}\n.sign-up-label {\n  margin-bottom: 20;\n}\n.bold {\n  color: #000000; \n}\n.activity-indicator {\n  color: #ac00e6;\n}"

/***/ }),

/***/ "./app/welcome/welcome.component.html":
/***/ (function(module, exports) {

module.exports = "<FlexboxLayout class=\"page\" #welcomeContainer>\n\t<StackLayout class=\"form\">\n\t\t<Image class=\"logo\" src=\"~/img/logo.png\"></Image>\n\t\t<!-- <Label class=\"header\" text=\"CollegePool\"></Label> -->\n\n\t\t<StackLayout *ngIf=\"!isLoggingIn\" class=\"input-field\">\n\t\t\t<TextField class=\"input\" hint=\"First name\" [(ngModel)]=\"firstName\" returnKeyType=\"next\" #fn></TextField>\n\t\t\t<StackLayout class=\"hr-light\"></StackLayout>\n\t\t</StackLayout>\n\n\t\t<StackLayout *ngIf=\"!isLoggingIn\" class=\"input-field\">\n\t\t\t<TextField class=\"input\" hint=\"Last name\" [(ngModel)]=\"lastName\" returnKeyType=\"next\" #ln></TextField>\n\t\t\t<StackLayout class=\"hr-light\"></StackLayout>\n\t\t</StackLayout>\n\n\t\t<StackLayout class=\"input-field\">\n\t\t\t<TextField class=\"input\" hint=\"Email\" keyboardType=\"email\" autocorrect=\"false\" autocapitalizationType=\"none\" [(ngModel)]=\"email\" returnKeyType=\"next\" (returnPress)=\"focusPassword()\" #em></TextField>\n\t\t\t<StackLayout class=\"hr-light\"></StackLayout>\n\t\t</StackLayout>\n\n\t\t<StackLayout class=\"input-field\">\n\t\t\t<TextField class=\"input\" hint=\"Password\" secure=\"true\" [(ngModel)]=\"password\" [returnKeyType]=\"isLoggingIn ? 'done' : 'next'\" (returnPress)=\"focusConfirmPassword()\" #pw></TextField>\n\t\t\t<StackLayout class=\"hr-light\"></StackLayout>\n\t\t</StackLayout>\n\n\t\t<StackLayout *ngIf=\"!isLoggingIn\" class=\"input-field\">\n\t\t\t<TextField class=\"input\" hint=\"Confirm password\" secure=\"true\" [(ngModel)]=\"confirmPassword\" returnKeyType=\"done\" #cpw></TextField>\n\t\t\t<StackLayout class=\"hr-light\"></StackLayout>\n\t\t</StackLayout>\n\n\t\t<Button [text]=\"isLoggingIn ? 'Log In' : 'Sign Up'\" (tap)=\"submit()\" class=\"btn btn-primary m-t-20\"></Button>\n\t\t<StackLayout>\n\t\t\t<FacebookLoginButton (tap)=\"fbLogin()\" class=\"btn-fb\"></FacebookLoginButton>\n\t\t</StackLayout>\n\t\t<Label *ngIf=\"isLoggingIn\" text=\"Forgot your password?\" class=\"login-label\" (tap)=\"forgotPassword()\"></Label>\n\t</StackLayout>\n\n\t<Label class=\"login-label sign-up-label\" (tap)=\"toggleForm()\">\n\t\t<FormattedString>\n\t\t\t<Span [text]=\"isLoggingIn ? 'Don’t have an account? ' : 'Back to Login'\"></Span>\n\t\t\t<Span [text]=\"isLoggingIn ? 'Sign up' : ''\" class=\"bold\"></Span>\n\t\t</FormattedString>\n\t</Label>\n</FlexboxLayout>\n\n<ActivityIndicator #activityIndicator busy=\"true\" width=\"40\" height=\"40\" class=\"activity-indicator\">\n</ActivityIndicator>"

/***/ }),

/***/ "./app/welcome/welcome.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/tns-core-modules/ui/dialogs/dialogs.js");
/* harmony import */ var tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/tns-core-modules/ui/page/page.js");
/* harmony import */ var tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/nativescript-angular/router/index.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/nativescript-plugin-firebase/firebase.js");
/* harmony import */ var nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var nativescript_plugin_firebase_messaging__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../node_modules/nativescript-plugin-firebase/messaging/index.js");
/* harmony import */ var nativescript_plugin_firebase_messaging__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nativescript_plugin_firebase_messaging__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _logincheck_service_tns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./app/logincheck.service.tns.ts");
/* harmony import */ var _datatransfer_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./app/datatransfer.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent(page, router, logincheckService, transferService, ngZone) {
        this.page = page;
        this.router = router;
        this.logincheckService = logincheckService;
        this.transferService = transferService;
        this.ngZone = ngZone;
        this.isLoggingIn = true;
        this.firebaseConfig = {
            apiKey: "AIzaSyBGuiYpM138Q6ayqDMRUVWJp1CE9WB09Nw",
            authDomain: "collegepool-1552749118617.firebaseapp.com",
            databaseURL: "https://collegepool-1552749118617.firebaseio.com",
            projectId: "collegepool-1552749118617",
            storageBucket: "gs://collegepool-1552749118617.appspot.com",
            messagingSenderId: "375263680183",
            appId: "1:375263680183:web:f2af3f2835638d7c",
        };
    }
    WelcomeComponent.prototype.ngOnInit = function () {
        this.registerNotifications();
        this.createViews();
    };
    WelcomeComponent.prototype.createViews = function () {
        return __awaiter(this, void 0, void 0, function () {
            var activityIndicator;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_4__["init"](this.firebaseConfig).then(function () {
                            console.log("firebase.init done");
                        }, function (error) {
                            console.log("firebase.init error: " + error);
                        })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_4__["addOnMessageReceivedCallback"](function (message) { return __awaiter(_this, void 0, void 0, function () {
                                var _this = this;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (!(message.type === "New Message")) return [3 /*break*/, 2];
                                            this.transferService.setData(message.data.chatId);
                                            return [4 /*yield*/, this.ngZone.run(function () { _this.router.navigate(['chat'], { clearHistory: true }); })];
                                        case 1:
                                            _a.sent();
                                            _a.label = 2;
                                        case 2: return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 2:
                        _a.sent();
                        if (this.logincheckService.getUserFromLocalStorage() != null)
                            this.router.navigate(['navigation'], { clearHistory: true });
                        else {
                            activityIndicator = this.ai.nativeElement;
                            activityIndicator.busy = false;
                            this.wc.nativeElement.style.visibility = 'visible';
                        }
                        this.page.actionBarHidden = true;
                        return [2 /*return*/];
                }
            });
        });
    };
    WelcomeComponent.prototype.toggleForm = function () {
        this.isLoggingIn = !this.isLoggingIn;
    };
    WelcomeComponent.prototype.submit = function () {
        if (!this.email || !this.password) {
            this.alert("Please provide both an email address and password");
            return;
        }
        if (this.isLoggingIn) {
            this.login();
        }
        else {
            this.register();
        }
    };
    WelcomeComponent.prototype.login = function () {
        var _this = this;
        var credentials = {
            passwordOptions: {
                email: this.email,
                password: this.password,
            },
            type: nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_4__["LoginType"].PASSWORD
        };
        nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_4__["login"](credentials).then(function (res) {
            console.log(res);
            _this.logincheckService.loginUser(res.uid);
            nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_4__["firestore"].collection('users').doc(res.uid).get().then(function (doc) {
                if (doc.data().payment_id == null)
                    _this.logincheckService.addUserToBraintree(res.displayName, res.displayName, res.email);
            });
            _this.updateTokens(res.uid);
            _this.router.navigate(['navigation'], { clearHistory: true });
        }).catch(function (err) {
            console.log(err);
            _this.alert("We could not find an account matching your email or password");
            return;
        });
    };
    WelcomeComponent.prototype.register = function () {
        var _this = this;
        if (this.password != this.confirmPassword) {
            this.alert("Your passwords do not match");
            return;
        }
        nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_4__["createUser"]({
            email: this.email,
            password: this.password,
        }).then(function (res) {
            _this.logincheckService.addUserToFirestore(res.uid, null, null, res.email, _this.firstName, _this.lastName, null, null, 0, 0, '~/img/sample_profile.png', _this.deviceToken);
            nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_4__["updateProfile"]({ displayName: _this.firstName + ' ' + _this.lastName }).then();
            _this.logincheckService.loginUser(res.uid);
            _this.logincheckService.addUserToBraintree('test', 'test user', res.email);
            _this.router.navigate(['navigation'], { clearHistory: true });
        }).catch(function (err) {
            if (err == 'Creating a user failed. com.google.firebase.auth.FirebaseAuthUserCollisionException: The email address is already in use by another account.')
                _this.alert('There is already an account associated with that email');
            else if (err == 'Creating a user failed. Password should be at least 6 characters')
                _this.alert('Password must be at least 6 characters');
            console.log(err);
            return;
        });
    };
    WelcomeComponent.prototype.forgotPassword = function () {
        var _this = this;
        Object(tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_1__["prompt"])({
            title: "Forgot Password",
            message: "Enter the email address you used to register for CollegePool to reset your password",
            inputType: "email",
            defaultText: "",
            okButtonText: "Ok",
            cancelButtonText: "Cancel"
        }).then(function (data) {
            if (data.result)
                nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_4__["sendPasswordResetEmail"](data.text).then(function () {
                    _this.alert('An email has been sent to ' + data.text + ' with details of how to recover your account');
                }, function (errorMessage) {
                    _this.alert('No account could be found with your email');
                });
        });
    };
    WelcomeComponent.prototype.registerNotifications = function () {
        var _this = this;
        nativescript_plugin_firebase_messaging__WEBPACK_IMPORTED_MODULE_5__["messaging"].registerForPushNotifications({
            onPushTokenReceivedCallback: function (token) {
                // console.log("Firebase plugin received a push token: " + token);
                _this.deviceToken = token;
            },
            onMessageReceivedCallback: function (message) {
                console.log("Push message received: " + message);
                console.log("Message data: " + message.data);
            },
            // Whether you want this plugin to automatically display the notifications or just notify the callback. Currently used on iOS only. Default true.
            showNotifications: true,
            // Whether you want this plugin to always handle the notifications when the app is in foreground. Currently used on iOS only. Default false.
            showNotificationsWhenInForeground: false
        }).then(function () { return console.log("Registered for push"); });
    };
    WelcomeComponent.prototype.updateTokens = function (uid) {
        var _this = this;
        var userDocument = nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_4__["firestore"].collection('users').doc(uid);
        userDocument.get().then(function (doc) { return __awaiter(_this, void 0, void 0, function () {
            var tokens, updatedTokens, chatPromise;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        tokens = doc.data().tokens;
                        if (tokens) {
                            tokens.push(this.deviceToken);
                            updatedTokens = Array.from(new Set(tokens));
                            userDocument.update({
                                tokens: updatedTokens
                            }).catch(function (err) {
                                console.log(err);
                            });
                        }
                        else {
                            userDocument.update({
                                tokens: [this.deviceToken]
                            }).catch(function (err) {
                                console.log(err);
                            });
                        }
                        return [4 /*yield*/, this.updateChatTokens(doc.data().chats)];
                    case 1:
                        chatPromise = _a.sent();
                        return [2 /*return*/];
                }
            });
        }); }).catch(function (err) { console.log(err); });
    };
    WelcomeComponent.prototype.updateChatTokens = function (chats) {
        return __awaiter(this, void 0, void 0, function () {
            var chatCollection, i, chatPromise;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        chatCollection = nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_4__["firestore"].collection('chats');
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < chats.length)) return [3 /*break*/, 4];
                        return [4 /*yield*/, chatCollection.doc(chats[i]).get().then(function (doc) { return __awaiter(_this, void 0, void 0, function () {
                                var tokens, newTokens, updatePromise;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            tokens = doc.data().tokens;
                                            tokens.push(this.deviceToken);
                                            newTokens = Array.from(new Set(tokens));
                                            return [4 /*yield*/, chatCollection.doc(chats[i]).update({ tokens: newTokens })];
                                        case 1:
                                            updatePromise = _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 2:
                        chatPromise = _a.sent();
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    WelcomeComponent.prototype.focusEmail = function () {
        this.em.nativeElement.focus();
    };
    WelcomeComponent.prototype.focusLastName = function () {
        this.ln.nativeElement.focus();
    };
    WelcomeComponent.prototype.focusPassword = function () {
        this.pw.nativeElement.focus();
    };
    WelcomeComponent.prototype.focusConfirmPassword = function () {
        if (!this.isLoggingIn) {
            this.cpw.nativeElement.focus();
        }
    };
    WelcomeComponent.prototype.alert = function (message) {
        return Object(tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_1__["alert"])({
            title: "CollegePool",
            okButtonText: "Close",
            message: message
        });
    };
    WelcomeComponent.prototype.fbLogin = function () {
        var _this = this;
        this.wc.nativeElement.style.visibility = 'collapse';
        var activityIndicator = this.ai.nativeElement;
        activityIndicator.busy = true;
        nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_4__["login"]({
            type: nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_4__["LoginType"].FACEBOOK,
            // Optional
            facebookOptions: {
                // defaults to ['public_profile', 'email']
                scopes: ['public_profile', 'email', 'user_birthday', 'user_gender'] // note: this property was renamed from "scope" in 8.4.0
            }
        }).then(function (res) {
            nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_4__["firestore"].collection('users').doc(res.uid).get().then(function (doc) {
                if (doc.exists == false) {
                    _this.logincheckService.addUserToFirestore(res.uid, null, null, res.email, res.additionalUserInfo.profile['first_name'], res.additionalUserInfo.profile['last_name'], null, null, 0, 0, res.photoURL, _this.deviceToken);
                    _this.logincheckService.addUserToBraintree(res.displayName, res.displayName, res.email);
                }
                else if (doc.data().payment_id == null) {
                    _this.logincheckService.addUserToBraintree(res.displayName, res.displayName, res.email);
                }
                else {
                    _this.updateTokens(res.uid);
                }
            });
            _this.logincheckService.loginUser(res.uid);
            _this.router.navigate(['navigation'], { clearHistory: true });
        }, function (errorMessage) {
            console.log(errorMessage);
            _this.wc.nativeElement.style.visibility = 'visible';
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("em", { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], WelcomeComponent.prototype, "em", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("pw", { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], WelcomeComponent.prototype, "pw", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("cpw", { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], WelcomeComponent.prototype, "cpw", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("fn", { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], WelcomeComponent.prototype, "fn", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("ln", { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], WelcomeComponent.prototype, "ln", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("welcomeContainer", { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], WelcomeComponent.prototype, "wc", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("activityIndicator", { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], WelcomeComponent.prototype, "ai", void 0);
    WelcomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-welcome',
            template: __webpack_require__("./app/welcome/welcome.component.html"),
            styles: [__webpack_require__("./app/welcome/welcome.component.css")]
        }),
        __metadata("design:paramtypes", [tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_2__["Page"], nativescript_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterExtensions"], _logincheck_service_tns__WEBPACK_IMPORTED_MODULE_6__["LogincheckService"], _datatransfer_service__WEBPACK_IMPORTED_MODULE_7__["TransferService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], WelcomeComponent);
    return WelcomeComponent;
}());



/***/ }),

/***/ "./main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-angular/platform.js");
/* harmony import */ var nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/app.module.ts");
/* harmony import */ var nativescript_angular_element_registry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/nativescript-angular/element-registry.js");
/* harmony import */ var nativescript_angular_element_registry__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_element_registry__WEBPACK_IMPORTED_MODULE_2__);

        let applicationCheckPlatform = __webpack_require__("../node_modules/tns-core-modules/application/application.js");
        if (applicationCheckPlatform.android && !global["__snapshot"]) {
            __webpack_require__("../node_modules/tns-core-modules/ui/frame/frame.js");
__webpack_require__("../node_modules/tns-core-modules/ui/frame/activity.js");
        }

        
            __webpack_require__("../node_modules/nativescript-dev-webpack/load-application-css-angular.js")();
            
            
        if (true) {
            const hmrUpdate = __webpack_require__("../node_modules/nativescript-dev-webpack/hmr/index.js").hmrUpdate;
            global.__initialHmrUpdate = true;
            global.__hmrSyncBackup = global.__onLiveSync;

            global.__onLiveSync = function () {
                hmrUpdate();
            };

            global.hmrRefresh = function({ type, path } = {}) {
                if (global.__initialHmrUpdate) {
                    return;
                }

                setTimeout(() => {
                    global.__hmrSyncBackup({ type, path });
                });
            };

            hmrUpdate().then(() => {
                global.__initialHmrUpdate = false;
            })
        }
        
            
        __webpack_require__("../node_modules/tns-core-modules/bundle-entry-points.js");
        


var options_Generated = {};

if (true) {
    options_Generated = {
        hmrOptions: {
            moduleTypeFactory: function () { return __webpack_require__("./app/app.module.ts").AppModule; },
            livesyncCallback: function (platformReboot) { setTimeout(platformReboot, 0); }
        }
    };
}

if (true) {
    module["hot"].accept(["./app/app.module.ts"], function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/app.module.ts");
(function () {
        global["hmrRefresh"]({});
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this));
}
Object(nativescript_angular_element_registry__WEBPACK_IMPORTED_MODULE_2__["registerElement"])("Ripple", function () { return __webpack_require__("../node_modules/nativescript-ripple/ripple.js").Ripple; });
// import Amplify from "@aws-amplify/core";
// require('nativescript-nodeify')
// import awsconfig from './aws-exports';
// Amplify.configure(awsconfig);
// A traditional NativeScript application starts by initializing global objects, setting up global CSS rules, creating, and navigating to the main page. 
// Angular applications need to take care of their own initialization: modules, components, directives, routes, DI providers. 
// A NativeScript Angular app needs to make both paradigms work together, so we provide a wrapper platform object, platformNativeScriptDynamic, 
// that sets up a NativeScript application and can bootstrap the Angular framework.
nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0__["platformNativeScriptDynamic"](Object.assign({}, options_Generated)).bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"]);

    
        
        
    
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./package.json":
/***/ (function(module) {

module.exports = {"android":{"v8Flags":"--expose_gc"},"main":"main.js","name":"migration-ng","version":"4.1.0"};

/***/ })

},[["./main.ts","runtime","vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vJF9sYXp5X3JvdXRlX3Jlc291cmNlIGxhenkgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi4vYmFja2VuZC9kYXRhL3ByaWNpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvYWRkLWNhcmQtcGF5bWVudC9hZGQtY2FyZC1wYXltZW50LmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2FkZC1jYXJkLXBheW1lbnQvYWRkLWNhcmQtcGF5bWVudC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvYWRkLWNhcmQtcGF5bWVudC9hZGQtY2FyZC1wYXltZW50LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvYWRkLW1vZGFsL2FkZC1tb2RhbC5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC9hZGQtbW9kYWwvYWRkLW1vZGFsLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9hZGQtbW9kYWwvYWRkLW1vZGFsLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvYWRkLXBheW1lbnQvYWRkLXBheW1lbnQuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvYWRkLXBheW1lbnQvYWRkLXBheW1lbnQuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2FkZC1wYXltZW50L2FkZC1wYXltZW50LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvYXBwLXJvdXRpbmcubW9kdWxlLnRucy50cyIsIndlYnBhY2s6Ly8vLi9hcHAvYXBwLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9hcHAuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9hcHAubW9kdWxlLnRzIiwid2VicGFjazovLy8uL2FwcC9hdXRvLWdlbmVyYXRlZC9hdXRvLWdlbmVyYXRlZC5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC9hdXRvLWdlbmVyYXRlZC9hdXRvLWdlbmVyYXRlZC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvYXV0by1nZW5lcmF0ZWQvYXV0by1nZW5lcmF0ZWQuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9jaGF0LWxpc3QvY2hhdC1saXN0LmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NoYXQtbGlzdC9jaGF0LWxpc3QuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NoYXQtbGlzdC9jaGF0LWxpc3QuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9jaGF0L2NoYXQuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvY2hhdC9jaGF0LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9jaGF0L2NoYXQuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9jb25maXJtYXRpb24vY29uZmlybWF0aW9uLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbmZpcm1hdGlvbi9jb25maXJtYXRpb24uY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbmZpcm1hdGlvbi9jb25maXJtYXRpb24uY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9jb25uZWN0L2Nvbm5lY3QuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29ubmVjdC9jb25uZWN0LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9jb25uZWN0L2Nvbm5lY3QuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9kYXRhdHJhbnNmZXIuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvZGlhbG9nL2RpYWxvZy5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC9kaWFsb2cvZGlhbG9nLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9kaWFsb2cvZGlhbG9nLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvZHluYW1pYy1hZGQuc2VydmljZS50bnMudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2R5bmFtaWMtYWRkLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Zsb2F0LWJ0bi9mbG9hdC1idG4uY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvZmxvYXQtYnRuL2Zsb2F0LWJ0bi5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvZmxvYXQtYnRuL2Zsb2F0LWJ0bi5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2dvb2dsZS1tYXBzLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2hpc3RvcnkvaGlzdG9yeS5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC9oaXN0b3J5L2hpc3RvcnkuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2hpc3RvcnkvaGlzdG9yeS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2hvbWUuZGlyZWN0aXZlLnRzIiwid2VicGFjazovLy8uL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9sb2NhdGlvbi9sb2NhdGlvbi5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC9sb2NhdGlvbi9sb2NhdGlvbi5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvbG9jYXRpb24vbG9jYXRpb24uY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9sb2dpbi5kaXJlY3RpdmUudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2xvZ2luY2hlY2suc2VydmljZS50bnMudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2xvZ2luY2hlY2suc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvbG9naW5yb3V0ZS9sb2dpbnJvdXRlLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2xvZ2lucm91dGUvbG9naW5yb3V0ZS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvbG9naW5yb3V0ZS9sb2dpbnJvdXRlLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvbWVzc2FnZS1tb2RhbC9tZXNzYWdlLW1vZGFsLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL21lc3NhZ2UtbW9kYWwvbWVzc2FnZS1tb2RhbC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvbWVzc2FnZS1tb2RhbC9tZXNzYWdlLW1vZGFsLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC50bnMuY3NzIiwid2VicGFjazovLy8uL2FwcC9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LnRucy5odG1sIiwid2VicGFjazovLy8uL2FwcC9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9wYXltZW50LWluZm8vcGF5bWVudC1pbmZvLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL3BheW1lbnQtaW5mby9wYXltZW50LWluZm8uY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL3BheW1lbnQtaW5mby9wYXltZW50LWluZm8uY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9wYXltZW50LW1ldGhvZC9wYXltZW50LW1ldGhvZC5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC9wYXltZW50LW1ldGhvZC9wYXltZW50LW1ldGhvZC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvcGF5bWVudC1tZXRob2QvcGF5bWVudC1tZXRob2QuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9wYXltZW50LnNlcnZpY2UudG5zLnRzIiwid2VicGFjazovLy8uL2FwcC9wYXltZW50LnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3BheW1lbnRzL3BheW1lbnRzLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL3BheW1lbnRzL3BheW1lbnRzLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9wYXltZW50cy9wYXltZW50cy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3BsYWNlcy1hdXRvY29tcGxldGUuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvcG9zdGluZy1pbmZvL3Bvc3RpbmctaW5mby5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC9wb3N0aW5nLWluZm8vcG9zdGluZy1pbmZvLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9wb3N0aW5nLWluZm8vcG9zdGluZy1pbmZvLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvcG9zdGluZy5zZXJ2aWNlLnRucy50cyIsIndlYnBhY2s6Ly8vLi9hcHAvcG9zdGluZy5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL2FwcC9wb3N0aW5nL3Bvc3RpbmcuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvcG9zdGluZy9wb3N0aW5nLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9wb3N0aW5nL3Bvc3RpbmcuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9yZWF1dGgvcmVhdXRoLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL3JlYXV0aC9yZWF1dGguY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL3JlYXV0aC9yZWF1dGguY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NlYXJjaC9zZWFyY2guY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9zZXR0aW5nc2Zvcm0vc2V0dGluZ3Nmb3JtLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NldHRpbmdzZm9ybS9zZXR0aW5nc2Zvcm0uY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NldHRpbmdzZm9ybS9zZXR0aW5nc2Zvcm0uY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC91cGRhdGUvdXBkYXRlLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL3VwZGF0ZS91cGRhdGUuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL3VwZGF0ZS91cGRhdGUuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC91c2VyLnNlcnZpY2UudG5zLnRzIiwid2VicGFjazovLy8uL2FwcC91c2VyLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3dlbGNvbWUvd2VsY29tZS5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC93ZWxjb21lL3dlbGNvbWUuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL3dlbGNvbWUvd2VsY29tZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vbWFpbi50cyJd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LCtEQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsYUFBYTtZQUN2QixxRUFBdUM7O1NBRXhDLENBQUM7eUNBb0IwQiw2REFBSSxFQUFrQiw0RUFBZ0IsRUFBNkIseUVBQWlCLEVBQTJCLHFFQUFlO1lBQ3RJLG9EQUFNO09BbkJiLGdCQUFnQixDQXVRNUI7SUFBRCx1QkFBQztDQUFBO0FBdlE0Qjs7Ozs7Ozs7Ozs7Ozs7OztBQ2I3QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0NBQW1CO0FBQzdDLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSx1Q0FBdUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQztBQUN2RSwyQ0FBMkM7QUFDM0Msa0NBQWtDO0FBQ2xDLDJCQUF5QztBQUV6QyxpQkFBZ0M7QUFFeUg7QUFDekosa0NBQThIO0FBQzlILDJEQUFnSjtBQUNoSixtQkFBbUY7QUFDbkYsY0FBeUQiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0KHJlcSkge1xuXHQvLyBIZXJlIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKSBpcyB1c2VkIGluc3RlYWQgb2YgbmV3IFByb21pc2UoKSB0byBwcmV2ZW50XG5cdC8vIHVuY2F1Z2h0IGV4Y2VwdGlvbiBwb3BwaW5nIHVwIGluIGRldnRvb2xzXG5cdHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uKCkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fSk7XG59XG53ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gW107IH07XG53ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dDtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0O1xud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LmlkID0gXCIuLi8kJF9sYXp5X3JvdXRlX3Jlc291cmNlIGxhenkgcmVjdXJzaXZlXCI7IiwiLy9jb25zdCByZXF1ZXN0ID0gcmVxdWlyZSgncmVxdWVzdCcpO1xuXG4vL2xldCBjaGVlcmlvID0gcmVxdWlyZSgnY2hlZXJpbycpO1xuLy9sZXQganNvbmZyYW1lID0gcmVxdWlyZSgnanNvbmZyYW1lLWNoZWVyaW8nKTtcblxuZnVuY3Rpb24gZ2V0X2dhc19wcmljZSgpXG57XG5cdC8vbGV0ICQgPSBjaGVlcmlvLmxvYWQoXCJodHRwczovL2dhc3ByaWNlcy5hYWEuY29tL3N0YXRlLWdhcy1wcmljZS1hdmVyYWdlcy9cIik7XG5cdC8vanNvbmZyYW1lKCQpIC8vIGFwcGx5IHRoZSBwbHVnaW4gdG8gdGhlIGN1cnJlbnQgQ2hlZXJpbyBpbnN0YW5jZVxuXHRcblx0Lypcblx0bGV0IGZyYW1lID0ge1xuXHRcdFwiY2xhc3NcIjogXCJudW1iXCIgLy8gQ1NTIHNlbGVjdG9yXG5cdH1cblx0Ki9cdFxuXHRyZXR1cm4gMTtcbn1cblxuZnVuY3Rpb24gcmF3X3ByaWNlKG9wdGlvbnMpIHtcblx0Y29uc3QgREVGQVVMVE1QRyA9IDI0Ljc7XG5cdC8qKioqXG5cdG9wdGlvbnMgPSB7XG5cdFx0c3RhcnQ6IHN0YXJ0YWRyLFxuXHRcdGVuZDogZW5kYWRyXG5cdH1cblx0KioqL1xuXHQvL3ZhciBzdGFydCA9IG9wdGlvbnMuc3RhcnQ7XG5cdC8vdmFyIGVuZCA9IG9wdGlvbnMuZW5kO1xuXHR2YXIgZGlzdCA9IDE7Ly9yZXEoXCIuL2Rpc3RhbmNlXCIpKG9wdGlvbnMpO1xuXHR2YXIgbXBnID0gREVGQVVMVE1QRzsgLy9mb3IgY29kaW5nIGluIGRpZmZlcmVudCBtcGcncyBpbiB0aGUgZnV0dXJlXG5cdHZhciByYXdfcHJpY2UgPSBkaXN0L2dldF9nYXNfcHJpY2UoKSoxLjAqbXBnO1xuXHRyZXR1cm4gcmF3X3ByaWNlO1xuXG5cbn1cblxuZnVuY3Rpb24gcHJpY2VfbW9kZWwob3B0aW9ucykge1xuXHQvKioqKioqKipcblx0SU5TRVJUIFBSSUNFIE1PREVMIEhFUkVcblx0KioqKioqKiovXG5cdHJldHVybiAocmF3X3ByaWNlKG9wdGlvbnMpICogMS4wKS50b1N0cmluZygpOyAvL0ZPUk1VTEFcblxufVxuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvcHRpb25zKSB7XG5cdGNvbnNvbGUubG9nKFwiZW50ZXIgcHJpY2luZy5qc1wiKTtcblx0cmV0dXJuIHByaWNlX21vZGVsKG9wdGlvbnMpO1xufSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIEltcG9ydHNcbmV4cG9ydHMuaShyZXF1aXJlKFwiLSEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTEhbmF0aXZlc2NyaXB0LXRoZW1lLWNvcmUvY3NzL2NvcmUubGlnaHQuY3NzXCIpLCBcIlwiKTtcblxuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKlxcbkluIE5hdGl2ZVNjcmlwdCwgdGhlIGFwcC5jc3MgZmlsZSBpcyB3aGVyZSB5b3UgcGxhY2UgQ1NTIHJ1bGVzIHRoYXRcXG55b3Ugd291bGQgbGlrZSB0byBhcHBseSB0byB5b3VyIGVudGlyZSBhcHBsaWNhdGlvbi4gQ2hlY2sgb3V0XFxuaHR0cDovL2RvY3MubmF0aXZlc2NyaXB0Lm9yZy91aS9zdHlsaW5nIGZvciBhIGZ1bGwgbGlzdCBvZiB0aGUgQ1NTXFxuc2VsZWN0b3JzIGFuZCBwcm9wZXJ0aWVzIHlvdSBjYW4gdXNlIHRvIHN0eWxlIFVJIGNvbXBvbmVudHMuXFxuXFxuLypcXG5JbiBtYW55IGNhc2VzIHlvdSBtYXkgd2FudCB0byB1c2UgdGhlIE5hdGl2ZVNjcmlwdCBjb3JlIHRoZW1lIGluc3RlYWRcXG5vZiB3cml0aW5nIHlvdXIgb3duIENTUyBydWxlcy4gRm9yIGEgZnVsbCBsaXN0IG9mIGNsYXNzIG5hbWVzIGluIHRoZSB0aGVtZVxcbnJlZmVyIHRvIGh0dHA6Ly9kb2NzLm5hdGl2ZXNjcmlwdC5vcmcvdWkvdGhlbWUuXFxuKi9cXG5cXG5MYWJlbCB7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcbn1cIiwgXCJcIl0pO1xuXG47XG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogJ3N0eWxlJywgcGF0aDogJy4vYXBwLmNzcycgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi8qIEFkZCBtb2JpbGUgc3R5bGVzIGZvciB0aGUgY29tcG9uZW50IGhlcmUuICAqL1xcbi5jbG9zZSB7XFxuXFx0bWFyZ2luOiAxMDtcXG5cXHRmb250LXNpemU6IDI4O1xcblxcdHdpZHRoOiA0ODtcXG5cXHRoZWlnaHQ6IDQ4O1xcbn1cXG5cXG4uY2xvc2UtYnV0dG9uLWNvbnRhaW5lciB7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdGxlZnQ6IDA7XFxufVxcblxcbi8qIHN0eWxlcyBmcm9tIHBheW1lbnRzLmNvbXBvbmVudC5jc3MgKi9cXG5cXG4jZm9ybSB7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgd2lkdGg6IDYwMHB4O1xcbiAgICBoZWlnaHQ6IDQwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogMzBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBib3gtc2hhZG93OiAwIDFweCA0cHggMCByZ2JhKDAsMCwwLDAuMzcpO1xcbn1cXG5cXG4jcGF5bWVudC1mb3JtIHtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICB3aWR0aDogNjAwcHg7XFxuICAgIGhlaWdodDogNDAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAzMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDRweCAwIHJnYmEoMCwwLDAsMC4zNyk7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbiNjYXJkLWZvcm0ge1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU4MDk2ODtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IDI1JTtcXG4gICAgYm94LXNoYWRvdzogMCAxcHggNHB4IDAgcmdiYSgwLDAsMCwwLjM3KTtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgei1pbmRleDogMTtcXG59XFxuXFxuI3BheXBhbC1mb3JtIHtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICB3aWR0aDogNDAwcHg7XFxuICAgIGhlaWdodDogMjAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAyNSU7XFxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDRweCAwIHJnYmEoMCwwLDAsMC4zNyk7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIHotaW5kZXg6IDE7XFxufVxcblxcbiN2ZW5tby1mb3JtIHtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICB3aWR0aDogNDAwcHg7XFxuICAgIGhlaWdodDogMjAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAyNSU7XFxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDRweCAwIHJnYmEoMCwwLDAsMC4zNyk7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIHotaW5kZXg6IDE7XFxufVxcblxcbiNlcnJvci1mb3JtIHtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICB3aWR0aDogNDAwcHg7XFxuICAgIGhlaWdodDogMjAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAyNSU7XFxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDRweCAwIHJnYmEoMCwwLDAsMC4zNyk7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIHotaW5kZXg6IDE7XFxufVxcblxcbiNlZGl0LWZvcm0ge1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IDI1JTtcXG4gICAgYm94LXNoYWRvdzogMCAxcHggNHB4IDAgcmdiYSgwLDAsMCwwLjM3KTtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgei1pbmRleDogMTtcXG59XFxuXFxuLnBheW1lbnQtbWV0aG9kcyB7XFxuXFx0b3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xcbn1cXG5cXG4jbW9kYWwtcGF5bWVudC1tZXRob2RzIHtcXG5cXHRtYXJnaW4tbGVmdDogMjRweDtcXG59XFxuXFxuI3BheXBhbC1oZWFkZXItY29udGFpbmVyIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNTgwOTY4O1xcbn1cXG5cXG4jZXJyb3ItaGVhZGVyLWNvbnRhaW5lciB7XFxuXFx0ZGlzcGxheTogbm9uZTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjODkwMDAwO1xcbn1cXG5cXG4jZWRpdC1oZWFkZXItY29udGFpbmVyIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNTgwOTY4O1xcbn1cXG5cXG4uY29sb3JlZC1oZWFkZXIge1xcblxcdGNvbG9yOiB3aGl0ZTtcXG5cXHRmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4jbWV0aG9kLWluZm9ybWF0aW9uLXRleHQge1xcblxcdG1hcmdpbi1sZWZ0OiA0MHB4O1xcblxcdG1hcmdpbi10b3A6IDMycHg7XFxuXFx0Zm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG4ucGF5bWVudC1mb290ZXItYnV0dG9ue1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICAgIGNvbG9yOiAjYWMwMGU2O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luLWxlZnQ6IDM0cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXG59XFxuXFxuI3BheXBhbC1idXR0b24ge1xcblxcdHdpZHRoOiAzNTBweDtcXG5cXHRtYXJnaW46IGF1dG87XFxuXFx0bWFyZ2luLXRvcDogMzJweDtcXG59XFxuXFxuI2FkZC1jYXJkLWJ1dHRvbiB7XFxuXFx0ZmxvYXQ6IHJpZ2h0O1xcblxcdG1hcmdpbi1yaWdodDogMzRweDtcXG5cXHRkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4jcmVtb3ZlLXBheW1lbnQtYnV0dG9uIHtcXG5cXHRmbG9hdDogcmlnaHQ7XFxuXFx0bWFyZ2luLXJpZ2h0OiAzNHB4O1xcbn1cXG5cXG4ucGx1cy1zaWduIHtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcblxcdGZvbnQtc2l6ZTogMzBweDtcXG5cXHRtYXJnaW4tcmlnaHQ6IDdweDtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wYXltZW50LWZvb3Rlci10ZXh0IHtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcblxcdGxpbmUtaGVpZ2h0OiA0MnB4O1xcblxcdGZvbnQtd2VpZ2h0OiA0MDA7XFxuXFx0Zm9udC1zaXplOiAxM3B4O1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnBheW1lbnQtZm9vdGVyLXRleHQ6aG92ZXIge1xcblxcdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4ucGF5bWVudHMtYm90dG9tLWFkZC1jb250YWluZXIge1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRib3R0b206IDA7XFxufVxcblxcbi8qIE90aGVyIG1vZGFsIHN0eWxpbmcgaW4gc3R5bGVzLmNzcyAqL1xcbi5jbG9zZS1tb2RhbCB7XFxuXFx0Zm9udC1zaXplOiAyNHB4O1xcblxcdG1hcmdpbi1yaWdodDogMjBweDtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS1cXG5TaGFyZWQgVmFyaWFibGVzXFxuLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS1cXG5HZW5lcmFsXFxuLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcbmh0bWwsXFxuYm9keSB7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBjb2xvcjogIzI4MmMzNztcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLmZvcm0tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJvcmRlcjogMWVtIHNvbGlkICNmZmY7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNDc2cHgpIHtcXG4gIC5mb3JtLWNvbnRhaW5lciB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gIH1cXG59XFxuXFxuLmNhcmRpbmZvLXdyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG4uYmctaWxsdXN0cmF0aW9uIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICB6LWluZGV4OiAwO1xcbn1cXG4uYmctaWxsdXN0cmF0aW9uIHN2ZyB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmNhcmQtc2hhcGUsICNteS1zYW1wbGUtZm9ybS52aXNhLCAjbXktc2FtcGxlLWZvcm0ubWFzdGVyLWNhcmQsICNteS1zYW1wbGUtZm9ybS5tYWVzdHJvLCAjbXktc2FtcGxlLWZvcm0uYW1lcmljYW4tZXhwcmVzcywgI215LXNhbXBsZS1mb3JtLmRpc2NvdmVyLCAjbXktc2FtcGxlLWZvcm0udW5pb25wYXksICNteS1zYW1wbGUtZm9ybS5qY2IsICNteS1zYW1wbGUtZm9ybS5kaW5lcnMtY2x1YiB7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICBwYWRkaW5nOiAyZW0gMmVtIDFlbTtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDQ3NnB4KSB7XFxuICAuY2FyZC1zaGFwZSwgI215LXNhbXBsZS1mb3JtLnZpc2EsICNteS1zYW1wbGUtZm9ybS5tYXN0ZXItY2FyZCwgI215LXNhbXBsZS1mb3JtLm1hZXN0cm8sICNteS1zYW1wbGUtZm9ybS5hbWVyaWNhbi1leHByZXNzLCAjbXktc2FtcGxlLWZvcm0uZGlzY292ZXIsICNteS1zYW1wbGUtZm9ybS51bmlvbnBheSwgI215LXNhbXBsZS1mb3JtLmpjYiwgI215LXNhbXBsZS1mb3JtLmRpbmVycy1jbHViIHtcXG4gICAgcGFkZGluZzogMmVtIDEuNWVtIDFlbTtcXG4gIH1cXG59XFxuXFxuI3BheW1lbnQtY2FyZC1mb3JtIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XFxuICAvKmJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMTIpOyovXFxuICBwYWRkaW5nOiAxZW0gM2VtIDNlbTtcXG4gIG1hcmdpbi1ib3R0b206IDJlbTtcXG4vKiAgdHJhbnNpdGlvbjogYWxsIDYwMG1zIGN1YmljLWJlemllcigwLjIsIDEuMywgMC43LCAxKTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBjYXJkSW50cm8gNTAwbXMgY3ViaWMtYmV6aWVyKDAuMiwgMS4zLCAwLjcsIDEpO1xcbiAgICAgICAgICBhbmltYXRpb246IGNhcmRJbnRybyA1MDBtcyBjdWJpYy1iZXppZXIoMC4yLCAxLjMsIDAuNywgMSk7Ki9cXG4gIC8qei1pbmRleDogMTsqL1xcbn1cXG4jbXktc2FtcGxlLWZvcm06aG92ZXIge1xcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4wNik7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA0NzZweCkge1xcbiAgI215LXNhbXBsZS1mb3JtIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcGFkZGluZzogN2VtIDJlbSAyZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbn1cXG4jbXktc2FtcGxlLWZvcm0udmlzYSB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwRDRBQTI7XFxufVxcbiNteS1zYW1wbGUtZm9ybS5tYXN0ZXItY2FyZCB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzNjM2MzY7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTE1ZGVnLCAjZDgyMzMyLCAjZDgyMzMyIDUwJSwgI2YxYWQzZCA1MCUsICNmMWFkM2QpO1xcbn1cXG4jbXktc2FtcGxlLWZvcm0ubWFlc3RybyB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzNjM2MzY7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTE1ZGVnLCAjMDA5ZGRkLCAjMDA5ZGRkIDUwJSwgI2VkMWMyZSA1MCUsICNlZDFjMmUpO1xcbn1cXG4jbXktc2FtcGxlLWZvcm0uYW1lcmljYW4tZXhwcmVzcyB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDdDQzM7XFxufVxcbiNteS1zYW1wbGUtZm9ybS5kaXNjb3ZlciB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjYwMDA7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoI2QxNDMxMCwgI2Y3OTYxZSk7XFxufVxcbiNteS1zYW1wbGUtZm9ybS51bmlvbnBheSwgI215LXNhbXBsZS1mb3JtLmpjYiwgI215LXNhbXBsZS1mb3JtLmRpbmVycy1jbHViIHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM2MzYzNjtcXG59XFxuXFxuLmNhcmRpbmZvLWxhYmVsIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgZm9udC1zaXplOiAxMXB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMC41ZW07XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbn1cXG5cXG4uY2FyZGluZm8tZXhwLWRhdGUge1xcbiAgbWFyZ2luLXJpZ2h0OiAxZW07XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmNhcmRpbmZvLWN2diB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmNhcmRpbmZvLWNhcmQtbnVtYmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuI2NhcmRJbWFnZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDJlbTtcXG4gIHJpZ2h0OiAxZW07XFxuICB3aWR0aDogNDRweDtcXG4gIGhlaWdodDogMjhweDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL3MzLXVzLXdlc3QtMi5hbWF6b25hd3MuY29tL3MuY2Rwbi5pby8zNDY5OTQvY2FyZF9zcHJpdGUucG5nKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogODZweCA0NThweDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xMDBweCAwO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIG1hcmdpbi1ib3R0b206IDFlbTtcXG59XFxuI2NhcmRJbWFnZS52aXNhIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgLTM5OHB4O1xcbn1cXG4jY2FyZEltYWdlLm1hc3Rlci1jYXJkIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgLTI4MXB4O1xcbn1cXG4jY2FyZEltYWdlLmFtZXJpY2FuLWV4cHJlc3Mge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAtMzcwcHg7XFxufVxcbiNjYXJkSW1hZ2UuZGlzY292ZXIge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAtMTYzcHg7XFxufVxcbiNjYXJkSW1hZ2UubWFlc3RybyB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIC0yNTFweDtcXG59XFxuI2NhcmRJbWFnZS5qY2Ige1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAtMjIxcHg7XFxufVxcbiNjYXJkSW1hZ2UuZGluZXJzLWNsdWIge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAtMTMzcHg7XFxufVxcblxcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS1cXG5JbnB1dHMgXFxuLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcbi5pbnB1dC13cmFwcGVyIHtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44Nik7XFxuICBoZWlnaHQ6IDIuNzVlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjA2KTtcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xcbn1cXG5cXG4uY2FyZGluZm8tY2FyZC1udW1iZXIsXFxuLmNhcmRpbmZvLWV4cC1kYXRlLFxcbi5jYXJkaW5mby1jdnYge1xcbiAgdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMC4zcztcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MsIC13ZWJraXQtdHJhbnNmb3JtIDAuM3M7XFxufVxcblxcbi5icmFpbnRyZWUtaG9zdGVkLWZpZWxkcy1mb2N1c2VkIHtcXG4gIGJvcmRlci1jb2xvcjogIzVkYjZlODtcXG59XFxuXFxuLmJyYWludHJlZS1ob3N0ZWQtZmllbGRzLWludmFsaWQge1xcbiAgYm9yZGVyLWNvbG9yOiAjRTUzQTQwO1xcbi8qICAtd2Via2l0LWFuaW1hdGlvbjogc2hha2UgNTAwbXMgY3ViaWMtYmV6aWVyKDAuMiwgMS4zLCAwLjcsIDEpIGJvdGg7XFxuICAgICAgICAgIGFuaW1hdGlvbjogc2hha2UgNTAwbXMgY3ViaWMtYmV6aWVyKDAuMiwgMS4zLCAwLjcsIDEpIGJvdGg7Ki9cXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICAgICAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxuICAtd2Via2l0LXBlcnNwZWN0aXZlOiAxMDAwcHg7XFxuICAgICAgICAgIHBlcnNwZWN0aXZlOiAxMDAwcHg7XFxufVxcblxcbi5sb2FkZXIge1xcbiAgYm9yZGVyOiAxNnB4IHNvbGlkICNmM2YzZjM7IC8qIExpZ2h0IGdyZXkgKi9cXG4gIGJvcmRlci10b3A6IDE2cHggc29saWQgI2FjMDBlNjsgLyogUHVycGxlICovXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICB3aWR0aDogMTIwcHg7XFxuICBoZWlnaHQ6IDEyMHB4O1xcbiAgYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZTtcXG4gIG1hcmdpbjogYXV0bztcXG59XFxuXFxuI2xvYWRpbmctY2lyY2xlIHtcXG4gIHRvcDogMTIlO1xcbiAgbGVmdDogMzAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4jbGlzdC1sb2FkaW5nLWNpcmNsZSB7XFxuXFx0bWFyZ2luLXRvcDogNTBweDtcXG59XFxuXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLVxcbkFuaW1hdGlvbnNcXG4tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxuQGtleWZyYW1lcyBzcGluIHtcXG4gIDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cXG4gIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XFxufVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBzaGFrZSB7XFxuICAxMCUsXFxuICA5MCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTFweCwgMCwgMCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMXB4LCAwLCAwKTtcXG4gIH1cXG4gIDIwJSxcXG4gIDgwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxcHgsIDAsIDApO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMXB4LCAwLCAwKTtcXG4gIH1cXG4gIDMwJSxcXG4gIDUwJSxcXG4gIDcwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtM3B4LCAwLCAwKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0zcHgsIDAsIDApO1xcbiAgfVxcbiAgNDAlLFxcbiAgNjAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDNweCwgMCwgMCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgzcHgsIDAsIDApO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIHNoYWtlIHtcXG4gIDEwJSxcXG4gIDkwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMXB4LCAwLCAwKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xcHgsIDAsIDApO1xcbiAgfVxcbiAgMjAlLFxcbiAgODAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDFweCwgMCwgMCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxcHgsIDAsIDApO1xcbiAgfVxcbiAgMzAlLFxcbiAgNTAlLFxcbiAgNzAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0zcHgsIDAsIDApO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTNweCwgMCwgMCk7XFxuICB9XFxuICA0MCUsXFxuICA2MCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoM3B4LCAwLCAwKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDNweCwgMCwgMCk7XFxuICB9XFxufVxcblxcblwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjwhLS0gPG5neC1icmFpbnRyZWUgXFxuICBbZ2V0Q2xpZW50VG9rZW5dPVxcXCJnZXRDbGllbnRUb2tlbigpXFxcIiBcXG4gIFtjcmVhdGVQdXJjaGFzZV09XFxcImNyZWF0ZVB1cmNoYXNlRnVuY3Rpb25cXFwiIFxcbiAgKHBheW1lbnRTdGF0dXMpPVxcXCJvblBheW1lbnRTdGF0dXMoJGV2ZW50KVxcXCI+XFxuPC9uZ3gtYnJhaW50cmVlPiAtLT5cXG5cXG48U3RhY2tMYXlvdXQgI2Zvcm0+XFxuXFx0PFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJjbG9zZS1idXR0b24tY29udGFpbmVyXFxcIiBvcmllbnRhdGlvbj1cXFwiaG9yaXpvbnRhbFxcXCI+XFxuXFx0XFx0PExhYmVsIHRleHQ9XFxcIiZ0aW1lcztcXFwiIGNsYXNzPVxcXCJjbG9zZVxcXCIgKHRhcCk9XFxcImNsb3NlKClcXFwiPjwvTGFiZWw+XFxuXFx0PC9TdGFja0xheW91dD5cXG5cXG5cXHQ8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImNhcmRpbmZvLWNhcmQtbnVtYmVyXFxcIj5cXG5cXHRcXHQ8TGFiZWwgdGV4dD1cXFwiQ2FyZCBOdW1iZXJcXFwiIGNsYXNzPVxcXCJjYXJkaW5mby1sYWJlbFxcXCI+PC9MYWJlbD5cXG5cXHRcXHQ8U3RhY2tMYXlvdXQgI2NhcmROdW1iZXIgY2xhc3M9XFxcImlucHV0LXdyYXBwZXJcXFwiPjwvU3RhY2tMYXlvdXQ+XFxuXFx0XFx0PFN0YWNrTGF5b3V0ICNjYXJkSW1hZ2U+PC9TdGFja0xheW91dD5cXG5cXHQ8L1N0YWNrTGF5b3V0PlxcblxcblxcdDxTdGFja0xheW91dCBjbGFzcz1cXFwiY2FyZGluZm8td3JhcHBlclxcXCI+XFxuXFx0XFx0PFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJjYXJkaW5mby1leHAtZGF0ZVxcXCI+XFxuXFx0XFx0XFx0PExhYmVsIHRleHQ9XFxcIlZhbGlkIFRocnVcXFwiIGNsYXNzPVxcXCJjYXJkaW5mby1sYWJlbFxcXCI+PC9MYWJlbD5cXG5cXHRcXHRcXHQ8U3RhY2tMYXlvdXQgI2V4cGlyYXRpb25EYXRlIGNsYXNzPVxcXCJpbnB1dC13cmFwcGVyXFxcIj48L1N0YWNrTGF5b3V0PlxcblxcdFxcdDwvU3RhY2tMYXlvdXQ+XFxuXFxuXFx0XFx0PFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJjYXJkaW5mby1jdnZcXFwiPlxcblxcdFxcdFxcdDxMYWJlbCB0ZXh0PVxcXCJDVlZcXFwiIGNsYXNzPVxcXCJjYXJkaW5mby1sYWJlbFxcXCI+PC9MYWJlbD5cXG5cXHRcXHRcXHQ8U3RhY2tMYXlvdXQgI2N2diBjbGFzcz1cXFwiaW5wdXQtd3JhcHBlclxcXCI+PC9TdGFja0xheW91dD5cXG5cXHRcXHQ8L1N0YWNrTGF5b3V0PlxcblxcdDwvU3RhY2tMYXlvdXQ+XFxuXFxuXFx0PEJ1dHRvbiB0ZXh0PVxcXCJBZGRcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiICNzdWJtaXRCdXR0b24+PC9CdXR0b24+XFxuPC9TdGFja0xheW91dD5cXG48IS0tIFxcdFxcdDxmb3JtIGlkPVxcXCJwYXltZW50LWNhcmQtZm9ybVxcXCIgY2xhc3M9XFxcInNjYWxlLWRvd25cXFwiPlxcblxcdCAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkaW5mby1jYXJkLW51bWJlclxcXCI+XFxuXFx0ICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjYXJkaW5mby1sYWJlbFxcXCIgZm9yPVxcXCJjYXJkLW51bWJlclxcXCI+Q2FyZCBOdW1iZXI8L2xhYmVsPlxcblxcdCAgICAgIDxkaXYgY2xhc3M9J2lucHV0LXdyYXBwZXInIGlkPVxcXCJjYXJkLW51bWJlclxcXCI+PC9kaXY+XFxuXFx0ICAgICAgPGRpdiBpZD1cXFwiY2FyZC1pbWFnZVxcXCI+PC9kaXY+XFxuXFx0ICAgIDwvZGl2PlxcblxcblxcdCAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkaW5mby13cmFwcGVyXFxcIj5cXG5cXHQgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkaW5mby1leHAtZGF0ZVxcXCI+XFxuXFx0ICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNhcmRpbmZvLWxhYmVsXFxcIiBmb3I9XFxcImV4cGlyYXRpb24tZGF0ZVxcXCI+VmFsaWQgVGhydTwvbGFiZWw+XFxuXFx0ICAgICAgICA8ZGl2IGNsYXNzPSdpbnB1dC13cmFwcGVyJyBpZD1cXFwiZXhwaXJhdGlvbi1kYXRlXFxcIj48L2Rpdj5cXG5cXHQgICAgICA8L2Rpdj5cXG5cXG5cXHQgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkaW5mby1jdnZcXFwiPlxcblxcdCAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjYXJkaW5mby1sYWJlbFxcXCIgZm9yPVxcXCJjdnZcXFwiPkNWVjwvbGFiZWw+XFxuXFx0ICAgICAgICA8ZGl2IGNsYXNzPSdpbnB1dC13cmFwcGVyJyBpZD1cXFwiY3Z2XFxcIj48L2Rpdj5cXG5cXHQgICAgICA8L2Rpdj5cXG5cXHQgICAgPC9kaXY+XFxuXFx0ICA8L2Zvcm0+IC0tPlwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgZHJvcGluIGZyb20gJ2JyYWludHJlZS13ZWItZHJvcC1pbic7XG5pbXBvcnQgKiBhcyBicmFpbnRyZWUgZnJvbSAnYnJhaW50cmVlLXdlYic7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2J1dHRvbic7XG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL3RleHQtZmllbGQnO1xuaW1wb3J0IHsgTW9kYWxEaWFsb2dQYXJhbXMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZGlyZWN0aXZlcy9kaWFsb2dzXCI7XG5pbXBvcnQgeyBQYXltZW50U2VydmljZSB9IGZyb20gJy4uL3BheW1lbnQuc2VydmljZSc7XG5pbXBvcnQgeyBTdGFja0xheW91dCB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvbGF5b3V0cy9zdGFjay1sYXlvdXQnO1xuLy8gaW1wb3J0IHsgTmF0aXZlU2NyaXB0SHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHAtY2xpZW50Jztcbi8vIGltcG9ydCB7IE5neEJyYWludHJlZU1vZHVsZSB9IGZyb20gJ25neC1icmFpbnRyZWUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlJztcbmltcG9ydCB7IEJyYWludHJlZSwgQnJhaW5UcmVlT3B0aW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1icmFpbnRyZWUnO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5cbi8vIHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtbm9kZWlmeVwiKTtcbi8vIGltcG9ydCAqIGFzIE5vZGVpZnkgZnJvbSAnbmF0aXZlc2NyaXB0LW5vZGVpZnknO1xuLy8gY29uc3QgYnJhaW50cmVlID0gcmVxdWlyZSgnYnJhaW50cmVlLXdlYicpO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtYWRkLWNhcmQtcGF5bWVudCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9hZGQtY2FyZC1wYXltZW50LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYWRkLWNhcmQtcGF5bWVudC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQWRkQ2FyZFBheW1lbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFyYW1zOiBNb2RhbERpYWxvZ1BhcmFtcywgcHJpdmF0ZSBwYXltZW50U2VydmljZTogUGF5bWVudFNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zKSB7IH1cblxuICAvLyBAVmlld0NoaWxkKFwiZHJvcGluQ29udGFpbnRlclwiKSBjb250YWluZXI6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoXCJzdWJtaXRCdXR0b25cIiwgeyBzdGF0aWM6IHRydWUgfSkgc0I6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoXCJleHBpcmF0aW9uRGF0ZVwiLCB7IHN0YXRpYzogdHJ1ZSB9KSBleHBpcmF0aW9uVGV4dDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZChcImNhcmROdW1iZXJcIiwgeyBzdGF0aWM6IHRydWUgfSkgbnVtYmVyVGV4dDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZChcImN2dlwiLCB7IHN0YXRpYzogdHJ1ZSB9KSBjdnZUZXh0OiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKFwiZm9ybVwiLCB7IHN0YXRpYzogdHJ1ZSB9KSBmb3JtTGF5b3V0OiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKFwiY2FyZEltYWdlXCIsIHsgc3RhdGljOiB0cnVlIH0pIGNhcmRMYXlvdXQ6IEVsZW1lbnRSZWY7XG5cbiAgdXNlciA9IHtcbiAgXHRwYXltZW50X2lkOiAnNTA3MzA1NzA2J1xuICB9XG4gIG9wdHMgOkJyYWluVHJlZU9wdGlvbnMgPSB7XG5cdGFtb3VudDogbnVsbCxcblx0Y29sbGVjdERldmljZURhdGE6IHRydWUsXG5cdHJlcXVlc3RUaHJlZURTZWN1cmVWZXJpZmljYXRpb246IGZhbHNlLFxuICB9XG4gIGNsaWVudFRva2VuID0gJyc7XG5cbiAgLy8gdG9rZW4gPSB0aGlzLnBheW1lbnRTZXJ2aWNlLmdldElkVG9rZW4odGhpcy51c2VyLnBheW1lbnRfaWQpO1xuICBuZ09uSW5pdCgpIHtcbiAvLyAgXHRicmFpbnRyZWUuY2xpZW50LmNyZWF0ZSh7XG5cdC8vICAgYXV0aG9yaXphdGlvbjogJ3NhbmRib3hfOXFzYnl5cThfd21jM3Y4OHIzNmNieGpqeidcblx0Ly8gfSwgZnVuY3Rpb24gKGNsaWVudEVyciwgY2xpZW50SW5zdGFuY2UpIHtcblx0Ly8gICAvLyBTdG9wIGlmIHRoZXJlIHdhcyBhIHByb2JsZW0gY3JlYXRpbmcgdGhlIGNsaWVudC5cblx0Ly8gICAvLyBUaGlzIGNvdWxkIGhhcHBlbiBpZiB0aGVyZSBpcyBhIG5ldHdvcmsgZXJyb3Igb3IgaWYgdGhlIGF1dGhvcml6YXRpb25cblx0Ly8gICAvLyBpcyBpbnZhbGlkLlxuXHQvLyAgIGlmIChjbGllbnRFcnIpIHtcblx0Ly8gICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNyZWF0aW5nIGNsaWVudDonLCBjbGllbnRFcnIpO1xuXHQvLyAgICAgcmV0dXJuO1xuXHQvLyAgIH1cblx0Ly8gfSk7XG5cbiAgfVxuXG4gIGNyZWF0ZVZpZXdzKCkge1xuICBcdHZhciBmb3JtID0gPFN0YWNrTGF5b3V0PiB0aGlzLmZvcm1MYXlvdXQubmF0aXZlRWxlbWVudDtcblx0dmFyIHN1Ym1pdCA9IDxCdXR0b24+IHRoaXMuc0IubmF0aXZlRWxlbWVudDtcblx0dmFyIGV4cGlyYXRpb25EYXRlID0gPFN0YWNrTGF5b3V0PiB0aGlzLmV4cGlyYXRpb25UZXh0Lm5hdGl2ZUVsZW1lbnQ7XG5cdHZhciBjYXJkTnVtYmVyID0gPFN0YWNrTGF5b3V0PiB0aGlzLm51bWJlclRleHQubmF0aXZlRWxlbWVudDtcblx0dmFyIGN2diA9IDxTdGFja0xheW91dD4gdGhpcy5jdnZUZXh0Lm5hdGl2ZUVsZW1lbnQ7XG5cdHZhciBjYXJkSW1hZ2UgPSA8U3RhY2tMYXlvdXQ+IHRoaXMuY2FyZExheW91dC5uYXRpdmVFbGVtZW50O1xuXG5cdHN1Ym1pdC5pc0VuYWJsZWQgPSBmYWxzZTtcblxuICB9XG5cbiAgY2xvc2UoKSB7XG4gIFx0dGhpcy5wYXJhbXMuY2xvc2VDYWxsYmFjaygpO1xuICB9XG5cbiAgZ2V0Q2xpZW50VG9rZW4oKSB7XG4gIFx0Y29uc3QgdG9rZW4gPSBuZXcgT2JzZXJ2YWJsZSgpO1xuICBcdHRva2VuLnNldCgnQXV0aG9yaXphdGlvbicsICdzYW5kYm94Xzlxc2J5eXE4X3dtYzN2ODhyMzZjYnhqanonKTtcbiAgXHRyZXR1cm4gdG9rZW47XG4gIH1cblxuICBjcmVhdGVQdXJjaGFzZUZ1bmN0aW9uKG5vbmNlOiBzdHJpbmcsIGNoYXJnZUFtb3VudDogbnVtYmVyKSB7XG4gIFx0cmV0dXJuIHRoaXMucGF5bWVudFNlcnZpY2UuYWRkUGF5bWVudE1ldGhvZFRvVXNlcih0aGlzLnVzZXIucGF5bWVudF9pZCwgbm9uY2UpO1xuICB9XG5cbiAgb25QYXltZW50U3RhdHVzKGV2ZW50KSB7XG5cbiAgfVxuXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLyogQWRkIG1vYmlsZSBzdHlsZXMgZm9yIHRoZSBjb21wb25lbnQgaGVyZS4gICovXFxuLnBhZ2Uge1xcbiAgLyphbGlnbi1pdGVtczogY2VudGVyOyovXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uZm9ybSB7XFxuICBtYXJnaW4tbGVmdDogMzA7XFxuICBtYXJnaW4tcmlnaHQ6IDMwO1xcbiAgZmxleC1ncm93OiAyO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuXFxuLmNsb3NlIHtcXG5cXHRtYXJnaW46IDEwO1xcblxcdGZvbnQtc2l6ZTogMjg7XFxuXFx0d2lkdGg6IDQ4O1xcblxcdGhlaWdodDogNDg7XFxufVxcblxcbi5jbG9zZS1idXR0b24tY29udGFpbmVyIHtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0bGVmdDogMDtcXG59XFxuXFxuLmhlYWRlci1sYWJlbCB7XFxuXFx0bWFyZ2luLXRvcDogNjA7XFxuXFx0bWFyZ2luLWJvdHRvbTogMDtcXG5cXHRmb250LXNpemU6IDIwO1xcbn1cXG5cXG4uaGVhZGVyLWxhYmVsLTIge1xcblxcdGZvbnQtc2l6ZTogMjA7XFxufVxcblxcbi5oZWFkZXItbGFiZWwtMyB7XFxuXFx0bWFyZ2luLXRvcDogMTQ7XFxuXFx0bWFyZ2luLWxlZnQ6IDE2O1xcblxcdG1hcmdpbi1yaWdodDogMTY7XFxuXFx0Zm9udC1zaXplOiAxODtcXG59XFxuXFxuLmhlYWRlci1sYWJlbC00IHtcXG5cXHRmb250LXNpemU6IDE4O1xcblxcdG1hcmdpbi10b3A6IDE0O1xcbn1cXG5cXG4ucmlkaW5nLWxhYmVsIHtcXG5cXHRmb250LXdlaWdodDogNzAwO1xcblxcdGNvbG9yOiAjYWMwMGU2O1xcbn1cXG5cXG4uZHJpdmluZy1sYWJlbCB7XFxuXFx0Y29sb3I6ICM1YzY4N2M7XFxufVxcblxcbi5zd2l0Y2gtY29udGFpbmVyIHtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5zd2l0Y2gge1xcblxcdGNvbG9yOiAjYWMwMGU2O1xcblxcdGJhY2tncm91bmQtY29sb3I6ICNjZDk0ZTA7XFxufVxcblxcbi5zdWJtaXQtYnRuIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjYWMwMGU2O1xcblxcdG1hcmdpbi10b3A6IDIwO1xcbn1cXG5cXG4uYm9sZCB7XFxuXFx0Zm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLnN0YXJ0LWZpZWxkIHtcXG5cXHRtYXJnaW4tdG9wOiAxNDtcXG59XFxuXFxuLmFjdGl2aXR5LWluZGljYXRvciB7XFxuICBjb2xvcjogI2FjMDBlNjtcXG4gIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiA0NyU7XFxufVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxTdGFja0xheW91dD5cXG5cXHQ8QWN0aXZpdHlJbmRpY2F0b3IgI2FjdGl2aXR5SW5kaWNhdG9yIGJ1c3k9XFxcInRydWVcXFwiIHdpZHRoPVxcXCI0MFxcXCIgaGVpZ2h0PVxcXCI0MFxcXCIgY2xhc3M9XFxcImFjdGl2aXR5LWluZGljYXRvclxcXCI+PC9BY3Rpdml0eUluZGljYXRvcj5cXG5cXHQ8U2Nyb2xsVmlldyBoZWlnaHQ9XFxcIjEwMCVcXFwiPlxcblxcdDxGbGV4Ym94TGF5b3V0IGNsYXNzPVxcXCJwYWdlXFxcIiAjYWRkQ29udGFpbmVyPlxcblxcdFxcdDxTdGFja0xheW91dCBjbGFzcz1cXFwiY2xvc2UtYnV0dG9uLWNvbnRhaW5lclxcXCIgb3JpZW50YXRpb249XFxcImhvcml6b250YWxcXFwiPlxcblxcdFxcdFxcdDxMYWJlbCB0ZXh0PVxcXCImdGltZXM7XFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiICh0YXApPVxcXCJjbG9zZSgnY2FuY2VsJylcXFwiPjwvTGFiZWw+XFxuXFx0XFx0PC9TdGFja0xheW91dD5cXG5cXG5cXG5cXHRcXHQ8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImZvcm1cXFwiPlxcblxcdFxcdFxcdDxMYWJlbCB0ZXh0PVxcXCJJIGFtLi4uXFxcIiBjbGFzcz1cXFwiaGVhZGVyLWxhYmVsLTIgYm9sZFxcXCI+PC9MYWJlbD5cXG5cXG5cXHRcXHQgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiaW5wdXQtZmllbGQgc3dpdGNoLWNvbnRhaW5lclxcXCIgb3JpZW50YXRpb249XFxcImhvcml6b250YWxcXFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCI+XFxuXFx0XFx0ICBcXHQ8TGFiZWwgdGV4dD1cXFwiRHJpdmluZ1xcXCIgY2xhc3M9XFxcImhlYWRlci1sYWJlbC0zIGRyaXZpbmctbGFiZWxcXFwiICNkcml2aW5nTGFiZWw+PC9MYWJlbD5cXG5cXHRcXHQgIFxcdDxTd2l0Y2ggY2hlY2tlZD1cXFwidHJ1ZVxcXCIgKGNoZWNrZWRDaGFuZ2UpPVxcXCJvbkNoZWNrZWRDaGFuZ2UoJGV2ZW50KVxcXCIgY2xhc3M9XFxcIm0tMTUgc3dpdGNoXFxcIj48L1N3aXRjaD5cXG5cXHRcXHQgIFxcdDxMYWJlbCB0ZXh0PVxcXCJSaWRpbmdcXFwiIGNsYXNzPVxcXCJoZWFkZXItbGFiZWwtMyByaWRpbmctbGFiZWxcXFwiICNyaWRpbmdMYWJlbD48L0xhYmVsPlxcblxcdFxcdCAgPC9TdGFja0xheW91dD5cXG5cXG5cXHRcXHQgIDxMYWJlbCB0ZXh0PVxcXCJXaGVyZT9cXFwiIGNsYXNzPVxcXCJoZWFkZXItbGFiZWwgYm9sZFxcXCI+PC9MYWJlbD5cXG5cXHRcXHQgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiaW5wdXQtZmllbGQgc3RhcnQtZmllbGRcXFwiPlxcbjwhLS0gXFx0XFx0ICAgIDxUZXh0RmllbGQgY2xhc3M9XFxcImlucHV0XFxcIiBhdXRvY29ycmVjdD1cXFwiZmFsc2VcXFwiIGhpbnQ9XFxcIldoZXJlIGZyb20/XFxcIiBbKG5nTW9kZWwpXT1cXFwic3RhcnRBZGRyZXNzXFxcIiAodGV4dENoYW5nZSk9XFxcInN0YXJ0QXV0b2NvbXBsZXRlKClcXFwiICh0YXApPVxcXCJzaG93TW9kYWwoJ3N0YXJ0JylcXFwiIHJlcXVpcmVkPjwvVGV4dEZpZWxkPiAtLT5cXG5cXHRcXHRcXHQ8TGFiZWwgdGV4dD1cXFwie3sgc3RhcnRMYWJlbCB9fVxcXCIgY2xhc3M9XFxcImhlYWRlci1sYWJlbC0zXFxcIiAodGFwKT1cXFwic2hvd01vZGFsKCdzdGFydCcpXFxcIj48L0xhYmVsPlxcblxcdFxcdCAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImhyLWxpZ2h0XFxcIj48L1N0YWNrTGF5b3V0PlxcblxcdFxcdCAgPC9TdGFja0xheW91dD5cXG5cXG5cXHRcXHQgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiaW5wdXQtZmllbGRcXFwiPlxcbjwhLS0gXFx0XFx0ICAgIDxUZXh0RmllbGQgY2xhc3M9XFxcImlucHV0XFxcIiBhdXRvY29ycmVjdD1cXFwiZmFsc2VcXFwiIGhpbnQ9XFxcIldoZXJlIHRvP1xcXCIgWyhuZ01vZGVsKV09XFxcImVuZEFkZHJlc3NcXFwiICh0ZXh0Q2hhbmdlKT1cXFwiZW5kQXV0b2NvbXBsZXRlKClcXFwiICh0YXApPVxcXCJzaG93TW9kYWwoJ2VuZCcpXFxcIiByZXF1aXJlZD48L1RleHRGaWVsZD4gLS0+XFxuXFx0XFx0XFx0XFx0PExhYmVsIHRleHQ9XFxcInt7IGVuZExhYmVsIH19XFxcIiBjbGFzcz1cXFwiaGVhZGVyLWxhYmVsLTNcXFwiICh0YXApPVxcXCJzaG93TW9kYWwoJ2VuZCcpXFxcIj48L0xhYmVsPlxcblxcdFxcdCAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImhyLWxpZ2h0XFxcIj48L1N0YWNrTGF5b3V0PlxcblxcdFxcdCAgPC9TdGFja0xheW91dD5cXG5cXG5cXHQ8IS0tIFxcdCAgPERhdGVQaWNrZXIgKGxvYWRlZCk9XFxcIm9uUGlja2VyTG9hZGVkKCRldmVudClcXFwiIChkYXRlQ2hhbmdlKT1cXFwib25EYXRlQ2hhbmdlZCgkZXZlbnQpXFxcIiBcXG5cXHQoZGF5Q2hhbmdlKT1cXFwib25EYXlDaGFuZ2VkKCRldmVudClcXFwiIChtb250aENoYW5nZSk9XFxcIm9uTW9udGhDaGFuZ2VkKCRldmVudClcXFwiICh5ZWFyQ2hhbmdlKT1cXFwib25ZZWFyQ2hhbmdlZCgkZXZlbnQpXFxcIiB2ZXJ0aWNhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIj48L0RhdGVQaWNrZXI+IC0tPlxcblxcdFxcdFxcdDxMYWJlbCB0ZXh0PVxcXCJXaGVuP1xcXCIgY2xhc3M9XFxcImhlYWRlci1sYWJlbCBib2xkXFxcIj48L0xhYmVsPlxcblxcblxcdFxcdCAgPERhdGVQaWNrZXIgKGxvYWRlZCk9XFxcIm9uUGlja2VyTG9hZGVkKCRldmVudClcXFwiIChkYXRlQ2hhbmdlKT1cXFwib25EYXRlQ2hhbmdlZCgkZXZlbnQpXFxcIiB2ZXJ0aWNhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIj48L0RhdGVQaWNrZXI+XFxuXFxuXFx0XFx0ICA8TGFiZWwgKm5nSWY9XFxcImlzRHJpdmluZ1xcXCIgdGV4dD1cXFwiSG93IG1hbnk/XFxcIiBjbGFzcz1cXFwiaGVhZGVyLWxhYmVsXFxcIj48L0xhYmVsPlxcblxcdFxcdCAgPEdyaWRMYXlvdXQgKm5nSWY9XFxcImlzRHJpdmluZ1xcXCIgY2xhc3M9XFxcIm0tMTVcXFwiIHJvd3M9XFxcImF1dG9cXFwiIGNvbHVtbnM9XFxcIjUwICogNTBcXFwiPlxcblxcdFxcdFxcdCAgICA8TGFiZWwgY2xhc3M9XFxcImgzXFxcIiB0ZXh0PVxcXCIxXFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgcm93PVxcXCIxMFxcXCIgY29sPVxcXCIwXFxcIj48L0xhYmVsPlxcblxcdFxcdFxcdCAgICA8U2xpZGVyIG1pblZhbHVlPVxcXCIxXFxcIiBtYXhWYWx1ZT1cXFwiOFxcXCIgWyhuZ01vZGVsKV09XFxcImNhcGFjaXR5XFxcIiByb3c9XFxcIjBcXFwiXFxuXFx0XFx0XFx0ICAgICBjb2w9XFxcIjFcXFwiPjwvU2xpZGVyPlxcblxcdFxcdFxcdCAgICA8TGFiZWwgY2xhc3M9XFxcImgzXFxcIiB0ZXh0PVxcXCI4XFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgcm93PVxcXCIwXFxcIiBjb2w9XFxcIjJcXFwiPjwvTGFiZWw+XFxuXFx0XFx0XFx0PC9HcmlkTGF5b3V0PlxcblxcdFxcdCAgPExhYmVsICpuZ0lmPVxcXCJpc0RyaXZpbmdcXFwiIHRleHQ9XFxcInt7IGNhcGFjaXR5IH19XFxcIiBjbGFzcz1cXFwiaGVhZGVyLWxhYmVsLTJcXFwiPjwvTGFiZWw+XFxuXFxuXFx0XFx0ICA8QnV0dG9uIHRleHQ9XFxcIkFkZFxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeSBzdWJtaXQtYnRuXFxcIiAodGFwKT1cXFwiYWRkUG9zdGluZygpXFxcIj48L0J1dHRvbj5cXG5cXHRcXHQ8L1N0YWNrTGF5b3V0PlxcblxcdDwvRmxleGJveExheW91dD5cXG5cXHQ8L1Njcm9sbFZpZXc+XFxuPC9TdGFja0xheW91dD5cXG5cXG5cXG5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1vZGFsRGlhbG9nUGFyYW1zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2RpcmVjdGl2ZXMvZGlhbG9nc1wiO1xuaW1wb3J0IHsgTW9kYWxEaWFsb2dTZXJ2aWNlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2RpcmVjdGl2ZXMvZGlhbG9nc1wiO1xuaW1wb3J0IHsgUG9zdGluZ1NlcnZpY2UgfSBmcm9tICcuLi9wb3N0aW5nLnNlcnZpY2UudG5zJztcbmltcG9ydCB7IERhdGVQaWNrZXIgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kYXRlLXBpY2tlclwiO1xuaW1wb3J0IHsgU3dpdGNoIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvc3dpdGNoXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZVwiO1xuaW1wb3J0IHsgTGFiZWwgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9sYWJlbFwiO1xuaW1wb3J0IHsgQ29sb3IgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9jb2xvclwiO1xuaW1wb3J0IHsgUGxhY2VzQXV0b2NvbXBsZXRlU2VydmljZSB9IGZyb20gJy4uL3BsYWNlcy1hdXRvY29tcGxldGUuc2VydmljZSc7XG5pbXBvcnQgeyBzZXRJbnRlcnZhbCwgY2xlYXJJbnRlcnZhbCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3RpbWVyXCI7XG5pbXBvcnQgeyBMb2NhdGlvbkNvbXBvbmVudCB9IGZyb20gJy4uL2xvY2F0aW9uL2xvY2F0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUcmFuc2ZlclNlcnZpY2UgfSBmcm9tICcuLi9kYXRhdHJhbnNmZXIuc2VydmljZSc7XG5pbXBvcnQgeyBMb2dpbmNoZWNrU2VydmljZSB9IGZyb20gJy4uL2xvZ2luY2hlY2suc2VydmljZS50bnMnO1xuaW1wb3J0ICogYXMgZmlyZWJhc2UgZnJvbSAnbmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZSc7XG5pbXBvcnQgeyBEYXRlUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBDYWNoZSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvaW1hZ2UtY2FjaGUnO1xuaW1wb3J0IHsgR29vZ2xlTWFwc1NlcnZpY2UgfSBmcm9tICcuLi9nb29nbGUtbWFwcy5zZXJ2aWNlJztcbmltcG9ydCB7SW1hZ2VTb3VyY2UsIGZyb21GaWxlLCBmcm9tUmVzb3VyY2UsIGZyb21CYXNlNjR9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2ltYWdlLXNvdXJjZVwiO1xuaW1wb3J0IHtGb2xkZXIsIHBhdGgsIGtub3duRm9sZGVyc30gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZmlsZS1zeXN0ZW1cIjtcbmltcG9ydCAqIGFzIGZzIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2ZpbGUtc3lzdGVtXCI7XG5pbXBvcnQgeyBBY3Rpdml0eUluZGljYXRvciB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvYWN0aXZpdHktaW5kaWNhdG9yJztcbmltcG9ydCB7IFNjcm9sbFZpZXcgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL3Njcm9sbC12aWV3JztcbmltcG9ydCB7IEZsZXhib3hMYXlvdXQgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvZmxleGJveC1sYXlvdXQnO1xuaW1wb3J0IHsgU3RhY2tMYXlvdXQgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvc3RhY2stbGF5b3V0Jztcbi8vIGltcG9ydCB7IEdvb2dsZVBsYWNlc0F1dG9jb21wbGV0ZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1nb29nbGUtcGxhY2VzLWF1dG9jb21wbGV0ZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1hZGQtbW9kYWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vYWRkLW1vZGFsLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYWRkLW1vZGFsLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBBZGRNb2RhbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwYXJhbXM6IE1vZGFsRGlhbG9nUGFyYW1zLCBwcml2YXRlIHBvc3RpbmdTZXJ2aWNlOiBQb3N0aW5nU2VydmljZSwgcHJpdmF0ZSBwYWdlOiBQYWdlLCBwcml2YXRlIHBsYWNlc1NlcnZpY2U6IFBsYWNlc0F1dG9jb21wbGV0ZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBtb2RhbDogTW9kYWxEaWFsb2dTZXJ2aWNlLCBwcml2YXRlIHZjUmVmOiBWaWV3Q29udGFpbmVyUmVmLCBwcml2YXRlIHRyYW5zZmVyU2VydmljZTogVHJhbnNmZXJTZXJ2aWNlLCBwcml2YXRlIGxvZ2luY2hlY2tTZXJ2aWNlOiBMb2dpbmNoZWNrU2VydmljZSxcbiAgICBwcml2YXRlIGRhdGVQaXBlOiBEYXRlUGlwZSwgcHJpdmF0ZSBtYXBTZXJ2aWNlOiBHb29nbGVNYXBzU2VydmljZSkgeyB9XG5cbiAgQFZpZXdDaGlsZCgnZHJpdmluZ0xhYmVsJywgeyBzdGF0aWM6IHRydWUgfSkgZGw6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ3JpZGluZ0xhYmVsJywgeyBzdGF0aWM6IHRydWUgfSkgcmw6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ2FjdGl2aXR5SW5kaWNhdG9yJywgeyBzdGF0aWM6IHRydWUgfSkgYWk6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ2FkZENvbnRhaW5lcicsIHsgc3RhdGljOiB0cnVlIH0pIGFjOiBFbGVtZW50UmVmO1xuICAvLyBAVmlld0NoaWxkKCdzdGFydExhYmVsJykgc2w6IEVsZW1lbnRSZWY7XG4gIC8vIEBWaWV3Q2hpbGQoJ2VuZExhYmVsJykgZWw6IEVsZW1lbnRSZWY7XG5cbiAgc3RhcnRTdWdnZXN0aW9uczogU3RyaW5nW107XG4gIGVuZFN1Z2dlc3Rpb25zOiBTdHJpbmdbXTtcbiAgc3RhcnRQbGFjZTtcbiAgZW5kUGxhY2U7XG4gIHN0YXJ0QWRkcmVzcztcbiAgZW5kQWRkcmVzcztcbiAgZm9ybWF0dGVkRGF0ZTtcbiAgZGF0ZSA9IFwibm93XCI7XG4gIHByaWNlID0gXCIkMTVcIjtcbiAgY2FwYWNpdHkgPSBcIi0xXCI7XG4gIHVzZXIgPSB7XG4gIFx0dXNlcm5hbWU6IFwiMjAyMmF5ZWVcIixcbiAgICBpZDogXCJcIlxuICB9O1xuICBzdGFydExhYmVsID0gXCJQaWNrIHN0YXJ0IGxvY2F0aW9uXCI7XG4gIGVuZExhYmVsID0gXCJQaWNrIGVuZCBsb2NhdGlvblwiO1xuICBzdGFydExhdDtcbiAgc3RhcnRMbmc7XG4gIGVuZExhdDtcbiAgZW5kTG5nO1xuXG4gIGlzRHJpdmluZyA9IGZhbHNlO1xuICBzdGFydExvY2F0aW9uUGlja2VkID0gZmFsc2U7XG4gIGVuZExvY2F0aW9uUGlja2VkID0gZmFsc2U7XG4gIGltYWdlU291cmNlID0gbmV3IEltYWdlU291cmNlKCk7XG5cblxuICBBUElfS0VZID0gXCJBSXphU3lBSVR4UzFqbWY4UE10YXpSZ3VXY0FmV1F4VzFrUE9vWWdcIjtcbiAgLy8gZ29vZ2xlUGxhY2VzQXV0b2NvbXBsZXRlID0gbmV3IEdvb2dsZVBsYWNlc0F1dG9jb21wbGV0ZSh0aGlzLkFQSV9LRVkpO1xuICBuZ09uSW5pdCgpIHtcbiAgICAvLyBsZXQgYWRkQ29udGFpbmVyID0gPEZsZXhib3hMYXlvdXQ+IHRoaXMuYWMubmF0aXZlRWxlbWVudDtcbiAgICAvLyAgLy8gYWN0aXZpdHlJbmRpY2F0b3Iuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICAvLyBhZGRDb250YWluZXIuc3R5bGUudmlzaWJpbGl0eSA9ICdjb2xsYXBzZSc7XG4gICAgbGV0IGFjdGl2aXR5SW5kaWNhdG9yID0gPEFjdGl2aXR5SW5kaWNhdG9yPiB0aGlzLmFpLm5hdGl2ZUVsZW1lbnQ7XG4gICAgYWN0aXZpdHlJbmRpY2F0b3Iuc3R5bGUudmlzaWJpbGl0eSA9ICdjb2xsYXBzZSdcbiAgICBmaXJlYmFzZS5nZXRDdXJyZW50VXNlcigpLnRoZW4odXNlciA9PiB7XG4gICAgICB0aGlzLnVzZXIudXNlcm5hbWUgPSB1c2VyLmRpc3BsYXlOYW1lO1xuICAgICAgaWYodXNlci5kaXNwbGF5TmFtZSA9PSBudWxsIHx8IHVzZXIuZGlzcGxheU5hbWUgPT0gJycpXG4gICAgICAgIHRoaXMudXNlci51c2VybmFtZSA9IHVzZXIuZW1haWw7XG4gICAgICB0aGlzLnVzZXIuaWQgPSB0aGlzLmxvZ2luY2hlY2tTZXJ2aWNlLmdldFVzZXIoKTtcbiAgICB9KVxuICB9XG5cbiAgc3RhcnRTZWxlY3QoZXZlbnQ6IEV2ZW50KSB7XG4gICAgY29uc29sZS5sb2coZXZlbnQuc3JjRWxlbWVudCk7XG4gIH1cblxuICBzaG93TW9kYWwodHlwZSkge1xuICAgIGxldCBvcHRpb25zID0ge1xuICAgICAgICBjb250ZXh0OiB7fSxcbiAgICAgICAgZnVsbHNjcmVlbjogdHJ1ZSxcbiAgICAgICAgdmlld0NvbnRhaW5lclJlZjogdGhpcy52Y1JlZlxuICAgICAgICAvLyBhbmltYXRlZDogdHJ1ZSxcbiAgICAgICAgLy8gdHJhbnNpdGlvbjogeyBuYW1lOiBcInNsaWRlVG9wXCIgfVxuICAgIH07XG4gICAgdGhpcy50cmFuc2ZlclNlcnZpY2Uuc2V0RGF0YSh0eXBlKTtcbiAgICB0aGlzLm1vZGFsLnNob3dNb2RhbChMb2NhdGlvbkNvbXBvbmVudCwgb3B0aW9ucykudGhlbihyZXMgPT4ge1xuICAgICAgICBpZihyZXMgIT0gbnVsbClcbiAgICAgICAgICBpZihyZXMuc3RhcnQgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5zdGFydExvY2F0aW9uUGlja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRMYWJlbCA9ICdTdGFydCBsb2NhdGlvbjogJyArIHJlcy5zdGFydDtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRQbGFjZSA9IHJlcy5zdGFydDtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRBZGRyZXNzID0gcmVzLmFkZHJlc3M7XG5cbiAgICAgICAgICAgIC8vIGxldCBzTGFiZWwgPSA8TGFiZWw+IHRoaXMuc2wubmF0aXZlRWxlbWVudDtcbiAgICAgICAgICAgIC8vIHNMYWJlbC5jbGFzc05hbWUgKz0gJ2JvbGQnO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIGlmKHJlcy5lbmQgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5lbmRMb2NhdGlvblBpY2tlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmVuZExhYmVsID0gJ0VuZCBsb2NhdGlvbjogJyArIHJlcy5lbmQ7XG4gICAgICAgICAgICB0aGlzLmVuZFBsYWNlID0gcmVzLmVuZDtcbiAgICAgICAgICAgIHRoaXMuZW5kQWRkcmVzcyA9IHJlcy5hZGRyZXNzO1xuICAgICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgaWYodHlwZSA9PSAnc3RhcnQnKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0TG9jYXRpb25QaWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5zdGFydExhYmVsID0gJ1BpY2sgc3RhcnQgbG9jYXRpb24nO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIGlmKHR5cGUgPT0gJ2VuZCcpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRMb2NhdGlvblBpY2tlZCA9IHRydWU7XG5cbiAgICAgICAgICAgIHRoaXMuc3RhcnRMYWJlbCA9ICdQaWNrIGVuZCBsb2NhdGlvbic7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBjbG9zZShyZXMpIHtcbiAgXHR0aGlzLnBhcmFtcy5jbG9zZUNhbGxiYWNrKHJlcyk7XG4gICB9XG5cbiAgIGFkZFBvc3RpbmcoKSB7XG4gICAgIGNvbnNvbGUubG9nKFwibG9nIHN1Y2Nlc3MhXCIpO1xuICAgICBsZXQgYWRkQ29udGFpbmVyID0gPEZsZXhib3hMYXlvdXQ+IHRoaXMuYWMubmF0aXZlRWxlbWVudDtcbiAgICAgYWRkQ29udGFpbmVyLnN0eWxlLnZpc2liaWxpdHkgPSAnY29sbGFwc2UnO1xuICAgICBsZXQgYWN0aXZpdHlJbmRpY2F0b3IgPSA8QWN0aXZpdHlJbmRpY2F0b3I+IHRoaXMuYWkubmF0aXZlRWxlbWVudDtcbiAgICAgYWN0aXZpdHlJbmRpY2F0b3Iuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICAgdGhpcy5tYXBTZXJ2aWNlLmdldEdlb2NvZGVSZXN1bHRzKHRoaXMuc3RhcnRQbGFjZSArICcgJyArIHRoaXMuc3RhcnRBZGRyZXNzKS5zdWJzY3JpYmUoKHJlczogYW55KSA9PiB7XG4gICAgICB0aGlzLnN0YXJ0TGF0ID0gcmVzLnJlc3VsdHNbMF0uZ2VvbWV0cnkubG9jYXRpb24ubGF0O1xuICAgICAgdGhpcy5zdGFydExuZyA9IHJlcy5yZXN1bHRzWzBdLmdlb21ldHJ5LmxvY2F0aW9uLmxuZztcbiAgICAgIHRoaXMubWFwU2VydmljZS5nZXRHZW9jb2RlUmVzdWx0cyh0aGlzLmVuZFBsYWNlICsgJyAnICsgdGhpcy5lbmRBZGRyZXNzKS5zdWJzY3JpYmUoKHJlczogYW55KSA9PiB7XG4gICAgICAgIHRoaXMuZW5kTGF0ID0gcmVzLnJlc3VsdHNbMF0uZ2VvbWV0cnkubG9jYXRpb24ubGF0O1xuICAgICAgICB0aGlzLmVuZExuZyA9IHJlcy5yZXN1bHRzWzBdLmdlb21ldHJ5LmxvY2F0aW9uLmxuZztcblxuICAgICAgICBpZih0aGlzLnN0YXJ0TG9jYXRpb25QaWNrZWQgJiYgdGhpcy5lbmRMb2NhdGlvblBpY2tlZCkge1xuICAgICAgICAgdmFyIHBvc3RpbmdzQ29sbGVjdGlvbiA9IGZpcmViYXNlLmZpcmVzdG9yZS5jb2xsZWN0aW9uKCdwb3N0aW5ncycpO1xuICAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGFydFBsYWNlKTtcbiAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZW5kUGxhY2UpO1xuICAgICAgICAgdGhpcy5wcmljZSA9IHJlcXVpcmUoJy4uLy4uLy4uL2JhY2tlbmQvZGF0YS9wcmljaW5nJykoe3N0YXJ0OiB0aGlzLnN0YXJ0UGxhY2UsIGVuZDogdGhpcy5lbmRQbGFjZX0pO1xuICAgICAgICAgY29uc29sZS5sb2codGhpcy5wcmljZSk7XG4gICAgICAgICBwb3N0aW5nc0NvbGxlY3Rpb24uYWRkKHtcbiAgICAgICAgICAgdWlkOiB0aGlzLnVzZXIuaWQsXG4gICAgICAgICAgIHVzZXI6IHRoaXMudXNlci51c2VybmFtZSxcbiAgICAgICAgICAgc3RhcnRBZGRyZXNzOiB0aGlzLnN0YXJ0UGxhY2UsXG4gICAgICAgICAgIGVuZEFkZHJlc3M6IHRoaXMuZW5kUGxhY2UsXG4gICAgICAgICAgIHN0YXJ0Rm9ybWF0dGVkOiB0aGlzLnN0YXJ0QWRkcmVzcyxcbiAgICAgICAgICAgZW5kRm9ybWF0dGVkOiB0aGlzLmVuZEFkZHJlc3MsXG4gICAgICAgICAgIGRhdGU6IHRoaXMuZGF0ZSxcbiAgICAgICAgICAgcHJpY2U6IHRoaXMucHJpY2UsXG4gICAgICAgICAgIGNhcGFjaXR5OiB0aGlzLmNhcGFjaXR5LFxuICAgICAgICAgICBjb21tZW50czogXCJcIixcbiAgICAgICAgICAgZm9ybWF0dGVkRGF0ZTogdGhpcy5mb3JtYXR0ZWREYXRlLFxuICAgICAgICAgICBzdGFydExhdDogdGhpcy5zdGFydExhdCxcbiAgICAgICAgICAgZW5kTGF0OiB0aGlzLmVuZExhdCxcbiAgICAgICAgICAgc3RhcnRMbmc6IHRoaXMuc3RhcnRMbmcsXG4gICAgICAgICAgIGVuZExuZzogdGhpcy5lbmRMbmdcbiAgICAgICAgIH0pLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzKTtcblxuICAgICAgICAgICBmaXJlYmFzZS5maXJlc3RvcmUuY29sbGVjdGlvbigndXNlcnMnKS5kb2ModGhpcy51c2VyLmlkKS5nZXQoKS50aGVuKGRvYyA9PiB7XG4gICAgICAgICAgICAgdmFyIHBvc3RzOiBTdHJpbmdbXSA9IGRvYy5kYXRhKCkucG9zdHM7XG4gICAgICAgICAgICAgcG9zdHMucHVzaChyZXMuaWQpO1xuICAgICAgICAgICAgIGZpcmViYXNlLmZpcmVzdG9yZS5jb2xsZWN0aW9uKCd1c2VycycpLmRvYyh0aGlzLnVzZXIuaWQpLnVwZGF0ZSh7XG4gICAgICAgICAgICAgICBwb3N0czogcG9zdHNcbiAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgIHRoaXMudXBsb2FkTWFwKHJlcy5pZCwgJ3NtYWxsX21hcC5wbmcnKTtcbiAgICAgICAgICAgICB0aGlzLnVwbG9hZE1hcChyZXMuaWQsICdsYXJnZV9tYXAucG5nJyk7XG4gICAgICAgICAgIH0pLmNhdGNoKChlcnIpID0+IHt9KVxuICAgICAgICAgfSkuY2F0Y2goKGVycikgPT4ge30pXG4gICAgICAgfVxuXG4gICAgICB9KTtcbiAgICB9KTtcbiAgICAgIC8vIHRoaXMucG9zdGluZ1NlcnZpY2UuYWRkUG9zdGluZyh0aGlzLnVzZXIudXNlcm5hbWUsIHRoaXMuc3RhcnRQbGFjZSwgdGhpcy5lbmRQbGFjZSwgdGhpcy5kYXRlLCB0aGlzLnByaWNlLCB0aGlzLmNhcGFjaXR5LCBcIlwiKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgLy8gICB0aGlzLmNsb3NlKCdwb3N0ZWQnKTtcbiAgICAgIC8vIH0pO1xuICB9XG5cbiAgdXBsb2FkTWFwKGlkLCB1cGxvYWROYW1lKSB7XG4gICAgY29uc3QgY2FjaGUgPSBuZXcgQ2FjaGUoKTtcbiAgICBjYWNoZS5lbmFibGVEb3dubG9hZCgpO1xuICAgIGxldCBjYWNoZWRJbWFnZVNvdXJjZTtcbiAgICB2YXIgdXJsID0gdGhpcy5tYXBTZXJ2aWNlLmdldFN0YXRpY01hcCh0aGlzLnN0YXJ0UGxhY2UgKyBcIiBcIiArIHRoaXMuc3RhcnRBZGRyZXNzLCB0aGlzLmVuZFBsYWNlICsgXCIgXCIgKyB0aGlzLmVuZEFkZHJlc3MpO1xuICAgIGlmKHVwbG9hZE5hbWUgPT0gJ2xhcmdlX21hcC5wbmcnKVxuICAgICAgdXJsID0gdGhpcy5tYXBTZXJ2aWNlLmdldFN0YXRpY01hcExhcmdlKHRoaXMuc3RhcnRQbGFjZSArIFwiIFwiICsgdGhpcy5zdGFydEFkZHJlc3MsIHRoaXMuZW5kUGxhY2UgKyBcIiBcIiArIHRoaXMuZW5kQWRkcmVzcyk7XG4gICAgLy8gVHJ5IHRvIHJlYWQgdGhlIGltYWdlIGZyb20gdGhlIGNhY2hlXG4gICAgY29uc3QgbXlJbWFnZSA9IGNhY2hlLmdldCh1cmwpO1xuICAgIGNhY2hlLnB1c2goe1xuICAgIGtleTogdXJsLFxuICAgIHVybDogdXJsLFxuICAgIGNvbXBsZXRlZDogKGltYWdlLCBrZXkpID0+IHtcbiAgICAgICAgICAgIGlmICh1cmwgPT09IGtleSkge1xuICAgICAgICAgICAgICAgIGNhY2hlZEltYWdlU291cmNlID0gdGhpcy5pbWFnZVNvdXJjZS5zZXROYXRpdmVTb3VyY2UoaW1hZ2UpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGZvbGRlclBhdGg6IHN0cmluZyA9IGtub3duRm9sZGVycy5kb2N1bWVudHMoKS5wYXRoO1xuICAgICAgICAgICAgICAgIGNvbnN0IGZpbGVOYW1lID0gdXBsb2FkTmFtZTtcbiAgICAgICAgICAgICAgICBjb25zdCBmaWxlUGF0aCA9IHBhdGguam9pbihmb2xkZXJQYXRoLCBmaWxlTmFtZSk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2F2ZWQ6IGJvb2xlYW4gPSB0aGlzLmltYWdlU291cmNlLnNhdmVUb0ZpbGUoZmlsZVBhdGgsIFwicG5nXCIpO1xuICAgICAgICAgICAgICAgIGlmIChzYXZlZCkge1xuICAgICAgICAgICAgICAgICAgICBmaXJlYmFzZS5zdG9yYWdlLnVwbG9hZEZpbGUoe1xuICAgICAgICAgICAgICAgICAgICAgIC8vIHRoZSBmdWxsIHBhdGggb2YgdGhlIGZpbGUgaW4geW91ciBGaXJlYmFzZSBzdG9yYWdlIChmb2xkZXJzIHdpbGwgYmUgY3JlYXRlZClcbiAgICAgICAgICAgICAgICAgICAgICByZW1vdGVGdWxsUGF0aDogJ3Bvc3RpbmdzLycgKyBpZCArICcvbWFwcy8nICsgdXBsb2FkTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAvLyBvcHRpb24gMTogYSBmaWxlLXN5c3RlbSBtb2R1bGUgRmlsZSBvYmplY3RcbiAgICAgICAgICAgICAgICAgICAgICBsb2NhbEZpbGU6IGZzLkZpbGUuZnJvbVBhdGgoZmlsZVBhdGgpLFxuICAgICAgICAgICAgICAgICAgICAgIC8vIG9wdGlvbiAyOiBhIGZ1bGwgZmlsZSBwYXRoIChpZ25vcmVkIGlmICdsb2NhbEZpbGUnIGlzIHNldClcbiAgICAgICAgICAgICAgICAgICAgICBsb2NhbEZ1bGxQYXRoOiBmaWxlUGF0aCxcbiAgICAgICAgICAgICAgICAgICAgICAvLyBnZXQgbm90aWZpZWQgb2YgZmlsZSB1cGxvYWQgcHJvZ3Jlc3NcbiAgICAgICAgICAgICAgICAgICAgICBvblByb2dyZXNzOiAoc3RhdHVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlVwbG9hZGVkIGZyYWN0aW9uOiBcIiArIHN0YXR1cy5mcmFjdGlvbkNvbXBsZXRlZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlBlcmNlbnRhZ2UgY29tcGxldGU6IFwiICsgc3RhdHVzLnBlcmNlbnRhZ2VDb21wbGV0ZWQpO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSkudGhlbigodXBsb2FkZWRGaWxlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgaWYodXBsb2FkTmFtZSA9PSAnc21hbGxfbWFwLnBuZycpXG4gICAgICAgICAgICAgICAgICAgICAgICBmaXJlYmFzZS5zdG9yYWdlLmdldERvd25sb2FkVXJsKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3RlRnVsbFBhdGg6ICdwb3N0aW5ncy8nICsgaWQgKyAnL21hcHMvc21hbGxfbWFwLnBuZydcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLnRoZW4oKHVybCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBmaXJlYmFzZS5maXJlc3RvcmUuY29sbGVjdGlvbigncG9zdGluZ3MnKS5kb2MoaWQpLnVwZGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFwX3VybDogdXJsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhY3Rpdml0eUluZGljYXRvciA9IDxBY3Rpdml0eUluZGljYXRvcj4gdGhpcy5haS5uYXRpdmVFbGVtZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhZGRDb250YWluZXIgPSA8RmxleGJveExheW91dD4gdGhpcy5hYy5uYXRpdmVFbGVtZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2aXR5SW5kaWNhdG9yLnN0eWxlLnZpc2liaWxpdHkgPSAnY29sbGFwc2UnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZENvbnRhaW5lci5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoJ3Bvc3RlZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgb25QaWNrZXJMb2FkZWQoYXJncykge1xuICBcdGxldCBkYXRlUGlja2VyID0gPERhdGVQaWNrZXI+YXJncy5vYmplY3Q7XG5cbiAgXHR2YXIgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuXG4gIFx0ZGF0ZVBpY2tlci5taW5EYXRlID0gbmV3IERhdGUoKTtcblxuICBcdHZhciBuZXh0WWVhckRhdGUgPSBuZXcgRGF0ZSh0b2RheSk7XG4gIFx0bmV4dFllYXJEYXRlLnNldERhdGUobmV4dFllYXJEYXRlLmdldERhdGUoKSArIDM2NSk7XG4gIFx0ZGF0ZVBpY2tlci5tYXhEYXRlID0gbmV4dFllYXJEYXRlO1xuICB9XG5cbiAgb25EYXRlQ2hhbmdlZChhcmdzKSB7XG4gIFx0bGV0IGRhdGVQaWNrZXIgPSA8RGF0ZVBpY2tlcj5hcmdzLm9iamVjdDtcbiAgXHR2YXIgc2VsZWN0ZWREYXRlID0gZGF0ZVBpY2tlci5kYXRlO1xuICAgIHRoaXMuZm9ybWF0dGVkRGF0ZSA9IHRoaXMuZGF0ZVBpcGUudHJhbnNmb3JtKHNlbGVjdGVkRGF0ZSxcInl5eXktTU0tZGRcIilcblxuICBcdC8vIGNvbnNvbGUubG9nKHNlbGVjdGVkRGF0ZS50b1N0cmluZygpLnN1YnN0cmluZygwLCAxNSkpO1xuICBcdHRoaXMuZGF0ZSA9IHNlbGVjdGVkRGF0ZS50b1N0cmluZygpLnN1YnN0cmluZygwLCAxNSk7XG4gIH1cblxuICBvbkNoZWNrZWRDaGFuZ2UoYXJncykge1xuICBcdGxldCBteVN3aXRjaCA9IGFyZ3Mub2JqZWN0IGFzIFN3aXRjaDtcbiAgICBsZXQgaXNDaGVja2VkID0gbXlTd2l0Y2guY2hlY2tlZDsgLy8gYm9vbGVhblxuXG4gICAgbGV0IGRyaXZpbmdMYWJlbCA9IDxMYWJlbD4gdGhpcy5kbC5uYXRpdmVFbGVtZW50O1xuICAgIGxldCByaWRpbmdMYWJlbCA9IDxMYWJlbD4gdGhpcy5ybC5uYXRpdmVFbGVtZW50O1xuXG4gICAgaWYoaXNDaGVja2VkKSB7XG4gICAgXHRkcml2aW5nTGFiZWwuc3R5bGUuZm9udFdlaWdodCA9IFwiNDAwXCI7XG4gICAgXHRkcml2aW5nTGFiZWwuc3R5bGUuY29sb3IgPSBuZXcgQ29sb3IoXCIjNWM2ODdjXCIpO1xuICAgIFx0cmlkaW5nTGFiZWwuc3R5bGUuZm9udFdlaWdodCA9IFwiNzAwXCI7XG4gICAgXHRyaWRpbmdMYWJlbC5zdHlsZS5jb2xvciA9IG5ldyBDb2xvcihcIiNhYzAwZTZcIik7XG4gICAgXHR0aGlzLmlzRHJpdmluZyA9IGZhbHNlO1xuICAgIFx0dGhpcy5jYXBhY2l0eSA9IFwiLTFcIjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgXHRkcml2aW5nTGFiZWwuc3R5bGUuZm9udFdlaWdodCA9IFwiNzAwXCI7XG4gICAgXHRkcml2aW5nTGFiZWwuc3R5bGUuY29sb3IgPSBuZXcgQ29sb3IoXCIjYWMwMGU2XCIpO1xuICAgIFx0cmlkaW5nTGFiZWwuc3R5bGUuZm9udFdlaWdodCA9IFwiNDAwXCI7XG4gICAgXHRyaWRpbmdMYWJlbC5zdHlsZS5jb2xvciA9IG5ldyBDb2xvcihcIiM1YzY4N2NcIik7XG4gICAgXHR0aGlzLmlzRHJpdmluZyA9IHRydWU7XG4gICAgfVxuICB9XG5cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gXCIvKiBBZGQgbW9iaWxlIHN0eWxlcyBmb3IgdGhlIGNvbXBvbmVudCBoZXJlLiAgKi9cXG4uY2xvc2Uge1xcblxcdG1hcmdpbjogMTA7XFxuXFx0Zm9udC1zaXplOiAyODtcXG5cXHR3aWR0aDogNDg7XFxuXFx0aGVpZ2h0OiA0ODtcXG59XFxuXFxuLmNsb3NlLWJ1dHRvbi1jb250YWluZXIge1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRsZWZ0OiAwO1xcbn1cXG5cXG4ucGF5bWVudC10eXBlLWljb24ge1xcblxcdGhlaWdodDogMzQ7XFxuXFx0d2lkdGg6IDM0O1xcblxcdGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG5cXHRtYXJnaW4tdG9wOiAxODtcXG5cXHRtYXJnaW4tYm90dG9tOiAxODtcXG5cXHRtYXJnaW4tbGVmdDogMzY7XFxufVxcblxcbi5wYXltZW50LWluZm8tbGFiZWwge1xcblxcdGZvbnQtc2l6ZTogMTY7XFxuXFx0Lypmb250LXdlaWdodDogNzAwOyovXFxuXFx0cGFkZGluZzogMzA7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdGNvbG9yOiBibGFjaztcXG59XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPFN0YWNrTGF5b3V0PlxcblxcdDxTdGFja0xheW91dCBjbGFzcz1cXFwiY2xvc2UtYnV0dG9uLWNvbnRhaW5lclxcXCIgb3JpZW50YXRpb249XFxcImhvcml6b250YWxcXFwiPlxcblxcdFxcdDxMYWJlbCB0ZXh0PVxcXCImdGltZXM7XFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiICh0YXApPVxcXCJjbG9zZSgnY2FuY2VsJylcXFwiPjwvTGFiZWw+XFxuXFx0PC9TdGFja0xheW91dD5cXG5cXG5cXHQ8TGlzdFZpZXcgW2l0ZW1zXT1cXFwibWV0aG9kc1xcXCIgc2VwYXJhdG9yQ29sb3I9XFxcInRyYW5zcGFyZW50XFxcIiAoaXRlbVRhcCk9XFxcIm9uU2VsZWN0KCRldmVudClcXFwiPlxcblxcdFxcdDxuZy10ZW1wbGF0ZSBsZXQtaXRlbT1cXFwiaXRlbVxcXCIgbGV0LWk9XFxcImluZGV4XFxcIiBsZXQtb2RkPVxcXCJvZGRcXFwiIGxldC1ldmVuPVxcXCJldmVuXFxcIj5cXG5cXHRcXHRcXHQ8U3RhY2tMYXlvdXQgW2NsYXNzLm9kZF09XFxcIm9kZFxcXCIgW2NsYXNzLmV2ZW5dPVxcXCJldmVuXFxcIiBvcmllbnRhdGlvbj1cXFwiaG9yaXpvbnRhbFxcXCI+XFxuXFx0XFx0XFx0XFx0PEltYWdlIFtzcmNdPVxcXCJpdGVtLnBheW1lbnRUeXBlXFxcIiBjbGFzcz1cXFwicGF5bWVudC10eXBlLWljb25cXFwiPjwvSW1hZ2U+XFxuXFx0XFx0XFx0XFx0PExhYmVsIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiBbdGV4dF09XFxcIml0ZW0uaW5mb1xcXCIgY2xhc3M9XFxcInBheW1lbnQtaW5mby1sYWJlbFxcXCI+PC9MYWJlbD5cXG5cXHRcXHRcXHQ8L1N0YWNrTGF5b3V0PlxcblxcdFxcdDwvbmctdGVtcGxhdGU+XFxuXFx0PC9MaXN0Vmlldz5cXG48L1N0YWNrTGF5b3V0PlwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTW9kYWxEaWFsb2dQYXJhbXMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZGlyZWN0aXZlcy9kaWFsb2dzXCI7XG5pbXBvcnQgeyBNb2RhbERpYWxvZ1NlcnZpY2UgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZGlyZWN0aXZlcy9kaWFsb2dzXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlQXJyYXkgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS1hcnJheSc7XG5pbXBvcnQgeyBBZGRDYXJkUGF5bWVudENvbXBvbmVudCB9IGZyb20gJy4uL2FkZC1jYXJkLXBheW1lbnQvYWRkLWNhcmQtcGF5bWVudC5jb21wb25lbnQnO1xuXG5cbmNsYXNzIE1ldGhvZEl0ZW0ge1xuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bWVudFR5cGU6IHN0cmluZywgcHVibGljIGluZm86IHN0cmluZykge31cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWFkZC1wYXltZW50JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FkZC1wYXltZW50LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYWRkLXBheW1lbnQuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEFkZFBheW1lbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdmNSZWY6IFZpZXdDb250YWluZXJSZWYsIHByaXZhdGUgbW9kYWw6IE1vZGFsRGlhbG9nU2VydmljZSwgcHJpdmF0ZSBwYXJhbXM6IE1vZGFsRGlhbG9nUGFyYW1zKSB7IH1cblxuICBtZXRob2RzID0gbmV3IE9ic2VydmFibGVBcnJheTxNZXRob2RJdGVtPigpO1xuXG4gIG5nT25Jbml0KCkge1xuICBcdHRoaXMuYWRkTWV0aG9kcygpO1xuICB9XG5cbiAgYWRkTWV0aG9kcygpIHtcbiAgXHR0aGlzLm1ldGhvZHMucHVzaChuZXcgTWV0aG9kSXRlbSgnfi9pbWcvY3JlZGl0LWNhcmQtaWNvbi5wbmcnLCAnQ3JlZGl0IG9yIERlYml0IENhcmQnKSk7XG4gIFx0dGhpcy5tZXRob2RzLnB1c2gobmV3IE1ldGhvZEl0ZW0oJ34vaW1nL3BheXBhbC1pY29uLnBuZycsICdQYXlwYWwnKSk7XG4gIFx0dGhpcy5tZXRob2RzLnB1c2gobmV3IE1ldGhvZEl0ZW0oJ34vaW1nL3Zlbm1vLWljb24ucG5nJywgJ1Zlbm1vJykpO1xuICB9XG5cbiAgb3BlbkNhcmRQYXltZW50KCkge1xuICAgIGxldCBvcHRpb25zID0ge1xuICAgICAgICBjb250ZXh0OiB7fSxcbiAgICAgICAgZnVsbHNjcmVlbjogdHJ1ZSxcbiAgICAgICAgdmlld0NvbnRhaW5lclJlZjogdGhpcy52Y1JlZlxuICAgICAgICAvLyBhbmltYXRlZDogdHJ1ZSxcbiAgICAgICAgLy8gdHJhbnNpdGlvbjogeyBuYW1lOiBcInNsaWRlVG9wXCIgfVxuICAgIH07XG5cbiAgICB0aGlzLm1vZGFsLnNob3dNb2RhbChBZGRDYXJkUGF5bWVudENvbXBvbmVudCwgb3B0aW9ucykudGhlbihyZXMgPT4ge1xuXG4gICAgfSk7XG4gIH1cblxuICBjbG9zZShyZXMpIHtcbiAgXHR0aGlzLnBhcmFtcy5jbG9zZUNhbGxiYWNrKHJlcyk7XG4gIH1cblxuICBvblNlbGVjdChldmVudCkge1xuICBcdC8vZXZlbnQuaW5kZXggc3RvcmVzIHdoaWNoIGluZGV4IHdhcyB0YXBwZWRcbiAgXHRpZihldmVudC5pbmRleCA9PSAwKVxuICBcdFx0dGhpcy5vcGVuQ2FyZFBheW1lbnQoKTtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gJy4vYXBwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMb2dpbkRpcmVjdGl2ZSB9IGZyb20gJy4vbG9naW4uZGlyZWN0aXZlJztcbmltcG9ydCB7IExvZ2luQ29tcG9uZW50IH0gZnJvbSAnLi9sb2dpbi9sb2dpbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gJy4vaG9tZS9ob21lLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBIb21lRGlyZWN0aXZlIH0gZnJvbSAnLi9ob21lLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBIaXN0b3J5Q29tcG9uZW50IH0gZnJvbSAnLi9oaXN0b3J5L2hpc3RvcnkuY29tcG9uZW50JztcbmltcG9ydCB7IFNldHRpbmdzQ29tcG9uZW50IH0gZnJvbSAnLi9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgTmd4UGF5UGFsTW9kdWxlIH0gZnJvbSAnbmd4LXBheXBhbCc7XG5cbmltcG9ydCB7IFBvc3RpbmdTZXJ2aWNlIH0gZnJvbSAnLi9wb3N0aW5nLnNlcnZpY2UnO1xuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tICcuL3VzZXIuc2VydmljZSc7XG5pbXBvcnQgeyBUcmFuc2ZlclNlcnZpY2UgfSBmcm9tICcuL2RhdGF0cmFuc2Zlci5zZXJ2aWNlJztcbmltcG9ydCB7IER5bmFtaWNBZGRTZXJ2aWNlIH0gZnJvbSAnLi9keW5hbWljLWFkZC5zZXJ2aWNlJztcbmltcG9ydCB7IFBheW1lbnRTZXJ2aWNlIH0gZnJvbSAnLi9wYXltZW50LnNlcnZpY2UnO1xuaW1wb3J0IHsgUG9zdGluZ0NvbXBvbmVudCB9IGZyb20gJy4vcG9zdGluZy9wb3N0aW5nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVcGRhdGVDb21wb25lbnQgfSBmcm9tICcuL3VwZGF0ZS91cGRhdGUuY29tcG9uZW50JztcbmltcG9ydCB7IENvbm5lY3RDb21wb25lbnQgfSBmcm9tICcuL2Nvbm5lY3QvY29ubmVjdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSwgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge01hdElucHV0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pbnB1dCc7XG4vLyBpbXBvcnQgeyBBbXBsaWZ5QW5ndWxhck1vZHVsZSwgQW1wbGlmeVNlcnZpY2UgfSBmcm9tICdhd3MtYW1wbGlmeS1hbmd1bGFyJztcbmltcG9ydCB7IExvZ2lucm91dGVDb21wb25lbnQgfSBmcm9tICcuL2xvZ2lucm91dGUvbG9naW5yb3V0ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi9kaWFsb2cvZGlhbG9nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50JztcblxuaW1wb3J0IHsgQXV0b0dlbmVyYXRlZENvbXBvbmVudCB9IGZyb20gJy4vYXV0by1nZW5lcmF0ZWQvYXV0by1nZW5lcmF0ZWQuY29tcG9uZW50JztcbmltcG9ydCB7IFBheW1lbnRzQ29tcG9uZW50IH0gZnJvbSAnLi9wYXltZW50cy9wYXltZW50cy5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGF5bWVudE1ldGhvZENvbXBvbmVudCB9IGZyb20gJy4vcGF5bWVudC1tZXRob2QvcGF5bWVudC1tZXRob2QuY29tcG9uZW50JztcbmltcG9ydCB7IFNlYXJjaENvbXBvbmVudCB9IGZyb20gJy4vc2VhcmNoL3NlYXJjaC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGF5bWVudEluZm9Db21wb25lbnQgfSBmcm9tICcuL3BheW1lbnQtaW5mby9wYXltZW50LWluZm8uY29tcG9uZW50J1xuaW1wb3J0IHsgV2VsY29tZUNvbXBvbmVudCB9IGZyb20gJy4vd2VsY29tZS93ZWxjb21lLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQb3N0aW5nSW5mb0NvbXBvbmVudCB9IGZyb20gJy4vcG9zdGluZy1pbmZvL3Bvc3RpbmctaW5mby5jb21wb25lbnQnO1xuaW1wb3J0IHtTZXR0aW5nc2Zvcm1Db21wb25lbnR9IGZyb20gJy4vc2V0dGluZ3Nmb3JtL3NldHRpbmdzZm9ybS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2hhdENvbXBvbmVudCB9IGZyb20gJy4vY2hhdC9jaGF0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDaGF0TGlzdENvbXBvbmVudCB9IGZyb20gJy4vY2hhdC1saXN0L2NoYXQtbGlzdC5jb21wb25lbnQnO1xuXG5cbmV4cG9ydCBjb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAgeyBwYXRoOiAnbG9naW4nLCBjb21wb25lbnQ6IExvZ2luQ29tcG9uZW50IH0sXG4gIHsgcGF0aDogJycsICAgcmVkaXJlY3RUbzogJy93ZWxjb21lJywgcGF0aE1hdGNoOiAnZnVsbCcgfSxcbiAgeyBwYXRoOiAnaG9tZScsIGNvbXBvbmVudDogSG9tZUNvbXBvbmVudCB9LFxuICB7IHBhdGg6ICdoaXN0b3J5JywgY29tcG9uZW50OiBIaXN0b3J5Q29tcG9uZW50IH0sXG4gIHsgcGF0aDogJ3NldHRpbmdzJywgY29tcG9uZW50OiBTZXR0aW5nc0NvbXBvbmVudCB9LFxuICB7IHBhdGg6ICd1cGRhdGUnLCBjb21wb25lbnQ6IFVwZGF0ZUNvbXBvbmVudCB9LFxuICB7IHBhdGg6ICdjb25uZWN0JywgY29tcG9uZW50OiBDb25uZWN0Q29tcG9uZW50IH0sXG4gIHsgcGF0aDogJ2xvZ2lucm91dGUnLCBjb21wb25lbnQ6IExvZ2lucm91dGVDb21wb25lbnQgfSxcbiAgeyBwYXRoOiAncGF5bWVudHMnLCBjb21wb25lbnQ6IFBheW1lbnRzQ29tcG9uZW50IH0sXG4gIHsgcGF0aDogJ3NlYXJjaCcsIGNvbXBvbmVudDogU2VhcmNoQ29tcG9uZW50IH0sXG4gIHsgcGF0aDogJ25hdmlnYXRpb24nLCBjb21wb25lbnQ6IE5hdmlnYXRpb25Db21wb25lbnQgfSxcbiAgeyBwYXRoOiAncGF5bWVudGluZm8nLCBjb21wb25lbnQ6IFBheW1lbnRJbmZvQ29tcG9uZW50IH0sXG4gIHsgcGF0aDogJ3dlbGNvbWUnLCBjb21wb25lbnQ6IFdlbGNvbWVDb21wb25lbnQgfSxcbiAgeyBwYXRoOiAncG9zdGluZy1pbmZvJywgY29tcG9uZW50OiBQb3N0aW5nSW5mb0NvbXBvbmVudCB9LFxuICB7IHBhdGg6ICdzZXR0aW5nc2Zvcm0nLCBjb21wb25lbnQ6IFNldHRpbmdzZm9ybUNvbXBvbmVudCB9LFxuICB7IHBhdGg6ICdjaGF0JywgY29tcG9uZW50OiBDaGF0Q29tcG9uZW50IH0sXG4gIHsgcGF0aDogJ2NoYXQtbGlzdCcsIGNvbXBvbmVudDogQ2hhdExpc3RDb21wb25lbnQgfSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpXSxcbiAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgQXBwUm91dGluZ01vZHVsZSB7IH1cbiIsIm1vZHVsZS5leHBvcnRzID0gXCI8IS0tIGh0dHBzOi8vZG9jcy5uYXRpdmVzY3JpcHQub3JnL2FuZ3VsYXIvY29yZS1jb25jZXB0cy9hbmd1bGFyLW5hdmlnYXRpb24uaHRtbCNwYWdlLXJvdXRlci1vdXRsZXQgLS0+XFxuXFxuPFBhZ2U+XFxuXFx0ICAgIDxwYWdlLXJvdXRlci1vdXRsZXQ+PC9wYWdlLXJvdXRlci1vdXRsZXQ+XFxuPC9QYWdlPlwiIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1yb290JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FwcC5jb21wb25lbnQuaHRtbCcsXG59KVxuXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHsgfVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGUnO1xuXG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9hcHAtcm91dGluZy5tb2R1bGUudG5zJztcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gJy4vYXBwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBdXRvR2VuZXJhdGVkQ29tcG9uZW50IH0gZnJvbSAnLi9hdXRvLWdlbmVyYXRlZC9hdXRvLWdlbmVyYXRlZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGF5bWVudHNDb21wb25lbnQgfSBmcm9tICcuL3BheW1lbnRzL3BheW1lbnRzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQYXltZW50TWV0aG9kQ29tcG9uZW50IH0gZnJvbSAnLi9wYXltZW50LW1ldGhvZC9wYXltZW50LW1ldGhvZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29ubmVjdENvbXBvbmVudCB9IGZyb20gJy4vY29ubmVjdC9jb25uZWN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBIaXN0b3J5Q29tcG9uZW50IH0gZnJvbSAnLi9oaXN0b3J5L2hpc3RvcnkuY29tcG9uZW50JztcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tICcuL2hvbWUvaG9tZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTG9naW5Db21wb25lbnQgfSBmcm9tICcuL2xvZ2luL2xvZ2luLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMb2dpbnJvdXRlQ29tcG9uZW50IH0gZnJvbSAnLi9sb2dpbnJvdXRlL2xvZ2lucm91dGUuY29tcG9uZW50JztcbmltcG9ydCB7IE5hdmlnYXRpb25Db21wb25lbnQgfSBmcm9tICcuL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgUG9zdGluZ0NvbXBvbmVudCB9IGZyb20gJy4vcG9zdGluZy9wb3N0aW5nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTZXR0aW5nc0NvbXBvbmVudCB9IGZyb20gJy4vc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50JztcbmltcG9ydCB7IFVwZGF0ZUNvbXBvbmVudCB9IGZyb20gJy4vdXBkYXRlL3VwZGF0ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi9kaWFsb2cvZGlhbG9nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTZWFyY2hDb21wb25lbnQgfSBmcm9tICcuL3NlYXJjaC9zZWFyY2guY29tcG9uZW50JztcblxuaW1wb3J0IHsgTG9naW5EaXJlY3RpdmUgfSBmcm9tICcuL2xvZ2luLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBIb21lRGlyZWN0aXZlIH0gZnJvbSAnLi9ob21lLmRpcmVjdGl2ZSc7XG5cbmltcG9ydCB7IFBvc3RpbmdTZXJ2aWNlIH0gZnJvbSAnLi9wb3N0aW5nLnNlcnZpY2UnO1xuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tICcuL3VzZXIuc2VydmljZSc7XG5pbXBvcnQgeyBUcmFuc2ZlclNlcnZpY2UgfSBmcm9tICcuL2RhdGF0cmFuc2Zlci5zZXJ2aWNlJztcbmltcG9ydCB7IER5bmFtaWNBZGRTZXJ2aWNlIH0gZnJvbSAnLi9keW5hbWljLWFkZC5zZXJ2aWNlJztcbmltcG9ydCB7IFBheW1lbnRTZXJ2aWNlIH0gZnJvbSAnLi9wYXltZW50LnNlcnZpY2UnO1xuaW1wb3J0IHsgUGxhY2VzQXV0b2NvbXBsZXRlU2VydmljZSB9IGZyb20gJy4vcGxhY2VzLWF1dG9jb21wbGV0ZS5zZXJ2aWNlJztcbmltcG9ydCB7IEdvb2dsZU1hcHNTZXJ2aWNlIH0gZnJvbSAnLi9nb29nbGUtbWFwcy5zZXJ2aWNlJztcblxuaW1wb3J0IHsgTW9kYWxEaWFsb2dTZXJ2aWNlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL21vZGFsLWRpYWxvZ1wiO1xuXG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlLCBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7TWF0SW5wdXRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcbmltcG9ydCB7IEFnbUNvcmVNb2R1bGUgfSBmcm9tICdAYWdtL2NvcmUnO1xuaW1wb3J0IHsgTmd4UGF5UGFsTW9kdWxlIH0gZnJvbSAnbmd4LXBheXBhbCc7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSURhdGFGb3JtTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1kYXRhZm9ybS9hbmd1bGFyXCI7XG5pbXBvcnQgeyBOZ3hCcmFpbnRyZWVNb2R1bGUgfSBmcm9tICduZ3gtYnJhaW50cmVlJztcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBNYXNrZWRUZXh0RmllbGRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LW1hc2tlZC10ZXh0LWZpZWxkL2FuZ3VsYXJcIjtcblxuLy8gVW5jb21tZW50IGFuZCBhZGQgdG8gTmdNb2R1bGUgaW1wb3J0cyBpZiB5b3UgbmVlZCB0byB1c2UgdHdvLXdheSBiaW5kaW5nXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zJztcblxuLy8gVW5jb21tZW50IGFuZCBhZGQgdG8gTmdNb2R1bGUgaW1wb3J0cyAgaWYgeW91IG5lZWQgdG8gdXNlIHRoZSBIVFRQIHdyYXBwZXJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9odHRwLWNsaWVudCc7XG5pbXBvcnQgeyBGbG9hdEJ0bkNvbXBvbmVudCB9IGZyb20gJy4vZmxvYXQtYnRuL2Zsb2F0LWJ0bi5jb21wb25lbnQnO1xuaW1wb3J0IHsgQWRkTW9kYWxDb21wb25lbnQgfSBmcm9tICcuL2FkZC1tb2RhbC9hZGQtbW9kYWwuY29tcG9uZW50JztcbmltcG9ydCB7IExvY2F0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9sb2NhdGlvbi9sb2NhdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgQWRkUGF5bWVudENvbXBvbmVudCB9IGZyb20gJy4vYWRkLXBheW1lbnQvYWRkLXBheW1lbnQuY29tcG9uZW50JztcbmltcG9ydCB7IEFkZENhcmRQYXltZW50Q29tcG9uZW50IH0gZnJvbSAnLi9hZGQtY2FyZC1wYXltZW50L2FkZC1jYXJkLXBheW1lbnQuY29tcG9uZW50JztcbmltcG9ydCB7IFBheW1lbnRJbmZvQ29tcG9uZW50IH0gZnJvbSAnLi9wYXltZW50LWluZm8vcGF5bWVudC1pbmZvLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb25maXJtYXRpb25Db21wb25lbnQgfSBmcm9tICcuL2NvbmZpcm1hdGlvbi9jb25maXJtYXRpb24uY29tcG9uZW50JztcbmltcG9ydCB7IE1lc3NhZ2VNb2RhbENvbXBvbmVudCB9IGZyb20gJy4vbWVzc2FnZS1tb2RhbC9tZXNzYWdlLW1vZGFsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBXZWxjb21lQ29tcG9uZW50IH0gZnJvbSAnLi93ZWxjb21lL3dlbGNvbWUuY29tcG9uZW50JztcbmltcG9ydCAqIGFzIGFwcGxpY2F0aW9uIGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb24nO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0RmFjZWJvb2tNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWZhY2Vib29rL2FuZ3VsYXJcIjtcbmltcG9ydCAqIGFzIG5zRmFjZWJvb2sgZnJvbSAnbmF0aXZlc2NyaXB0LWZhY2Vib29rJztcbmltcG9ydCB7IERhdGVQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFBvc3RpbmdJbmZvQ29tcG9uZW50IH0gZnJvbSAnLi9wb3N0aW5nLWluZm8vcG9zdGluZy1pbmZvLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBpc0lPUyB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm0nO1xuZGVjbGFyZSB2YXIgR01TU2VydmljZXM6IGFueTtcbmltcG9ydCB7IFNldHRpbmdzZm9ybUNvbXBvbmVudCB9IGZyb20gJy4vc2V0dGluZ3Nmb3JtL3NldHRpbmdzZm9ybS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUmVhdXRoQ29tcG9uZW50IH0gZnJvbSAnLi9yZWF1dGgvcmVhdXRoLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDaGF0Q29tcG9uZW50IH0gZnJvbSAnLi9jaGF0L2NoYXQuY29tcG9uZW50JztcbmltcG9ydCB7IENoYXRMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9jaGF0LWxpc3QvY2hhdC1saXN0LmNvbXBvbmVudCc7XG5cblxuLy8gcmVxdWlyZSgnbmF0aXZlc2NyaXB0LW5vZGVpZnknKVxuLy8gaW1wb3J0IHsgQW1wbGlmeUFuZ3VsYXJNb2R1bGUsIEFtcGxpZnlTZXJ2aWNlIH0gZnJvbSAnYXdzLWFtcGxpZnktYW5ndWxhcic7XG5cbi8vIGltcG9ydCB7IEFuZ3VsYXJGaXJlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZmlyZSc7XG4vLyBpbXBvcnQgeyBBbmd1bGFyRmlyZXN0b3JlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZmlyZS9maXJlc3RvcmUnO1xuLy8gaW1wb3J0IHsgQW5ndWxhckZpcmVTdG9yYWdlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZmlyZS9zdG9yYWdlJztcbi8vIGltcG9ydCB7IEFuZ3VsYXJGaXJlQXV0aE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2ZpcmUvYXV0aCc7XG4vLyBpbXBvcnQgeyBlbnZpcm9ubWVudCB9IGZyb20gJy4uL2Vudmlyb25tZW50cy9lbnZpcm9ubWVudCc7XG5pZiAoaXNJT1MpIHsgXG4gIEdNU1NlcnZpY2VzLnByb3ZpZGVBUElLZXkoXCJBSXphU3lBSVR4UzFqbWY4UE10YXpSZ3VXY0FmV1F4VzFrUE9vWWdcIik7XG59XG5cbmFwcGxpY2F0aW9uLm9uKGFwcGxpY2F0aW9uLmxhdW5jaEV2ZW50LCBmdW5jdGlvbiAoYXJncykge1xuICAgIG5zRmFjZWJvb2suaW5pdChcIjIyNzIxMjk2NDk2Nzc3NDdcIik7XG59KTtcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQXBwQ29tcG9uZW50LFxuICAgIExvZ2luRGlyZWN0aXZlLFxuICAgIExvZ2luQ29tcG9uZW50LFxuICAgIEhvbWVDb21wb25lbnQsXG4gICAgSG9tZURpcmVjdGl2ZSxcbiAgICBIaXN0b3J5Q29tcG9uZW50LFxuICAgIFNldHRpbmdzQ29tcG9uZW50LFxuICAgIFBvc3RpbmdDb21wb25lbnQsXG4gICAgVXBkYXRlQ29tcG9uZW50LFxuICAgIENvbm5lY3RDb21wb25lbnQsXG4gICAgTG9naW5yb3V0ZUNvbXBvbmVudCxcbiAgICBEaWFsb2dDb21wb25lbnQsXG4gICAgTmF2aWdhdGlvbkNvbXBvbmVudCxcbiAgICBBdXRvR2VuZXJhdGVkQ29tcG9uZW50LFxuICAgIFBheW1lbnRzQ29tcG9uZW50LFxuICAgIFBheW1lbnRNZXRob2RDb21wb25lbnQsXG4gICAgU2VhcmNoQ29tcG9uZW50LFxuICAgIEZsb2F0QnRuQ29tcG9uZW50LFxuICAgIEFkZE1vZGFsQ29tcG9uZW50LFxuICAgIExvY2F0aW9uQ29tcG9uZW50LFxuICAgIEFkZFBheW1lbnRDb21wb25lbnQsXG4gICAgQWRkQ2FyZFBheW1lbnRDb21wb25lbnQsXG4gICAgUGF5bWVudEluZm9Db21wb25lbnQsXG4gICAgQ29uZmlybWF0aW9uQ29tcG9uZW50LFxuICAgIE1lc3NhZ2VNb2RhbENvbXBvbmVudCxcbiAgICBXZWxjb21lQ29tcG9uZW50LFxuICAgIFBvc3RpbmdJbmZvQ29tcG9uZW50LFxuICAgIFNldHRpbmdzZm9ybUNvbXBvbmVudCxcbiAgICBSZWF1dGhDb21wb25lbnQsXG4gICAgQ2hhdENvbXBvbmVudCxcbiAgICBDaGF0TGlzdENvbXBvbmVudCxcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICBBcHBSb3V0aW5nTW9kdWxlLFxuICAgIE5hdGl2ZVNjcmlwdEh0dHBDbGllbnRNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcbiAgICBNYXRJbnB1dE1vZHVsZSxcbiAgICBBZ21Db3JlTW9kdWxlLmZvclJvb3Qoe1xuICAgICAgYXBpS2V5OiAnQUl6YVN5QUlUeFMxam1mOFBNdGF6Umd1V2NBZldReFcxa1BPb1lnJ1xuICAgIH0pLFxuICAgIE5neFBheVBhbE1vZHVsZSxcbiAgICBOYXRpdmVTY3JpcHRVSURhdGFGb3JtTW9kdWxlLFxuICAgIC8vIE5neEJyYWludHJlZU1vZHVsZSxcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxuICAgIE5hdGl2ZVNjcmlwdEZhY2Vib29rTW9kdWxlLFxuICAgIE1hc2tlZFRleHRGaWVsZE1vZHVsZVxuICAgIC8vIEFuZ3VsYXJGaXJlTW9kdWxlLmluaXRpYWxpemVBcHAoZW52aXJvbm1lbnQuZmlyZWJhc2UpLFxuICAgIC8vIEFuZ3VsYXJGaXJlc3RvcmVNb2R1bGUsIC8vIGltcG9ydHMgZmlyZWJhc2UvZmlyZXN0b3JlLCBvbmx5IG5lZWRlZCBmb3IgZGF0YWJhc2UgZmVhdHVyZXNcbiAgICAvLyBBbmd1bGFyRmlyZUF1dGhNb2R1bGUsIC8vIGltcG9ydHMgZmlyZWJhc2UvYXV0aCwgb25seSBuZWVkZWQgZm9yIGF1dGggZmVhdHVyZXMsXG4gICAgLy8gQW5ndWxhckZpcmVTdG9yYWdlTW9kdWxlIC8vIGltcG9ydHMgZmlyZWJhc2Uvc3RvcmFnZSBvbmx5IG5lZWRlZCBmb3Igc3RvcmFnZSBmZWF0dXJlc1xuICBdLFxuICBwcm92aWRlcnM6IFtQb3N0aW5nU2VydmljZSwgVHJhbnNmZXJTZXJ2aWNlLCBEeW5hbWljQWRkU2VydmljZSwgVXNlclNlcnZpY2UsIFBheW1lbnRTZXJ2aWNlLCBNb2RhbERpYWxvZ1NlcnZpY2UsIFBsYWNlc0F1dG9jb21wbGV0ZVNlcnZpY2UsIFxuICBEYXRlUGlwZSwgR29vZ2xlTWFwc1NlcnZpY2VdLFxuICBib290c3RyYXA6IFtBcHBDb21wb25lbnRdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtQb3N0aW5nQ29tcG9uZW50LCBQYXltZW50TWV0aG9kQ29tcG9uZW50LCBBZGRNb2RhbENvbXBvbmVudCwgTG9jYXRpb25Db21wb25lbnQsIEFkZFBheW1lbnRDb21wb25lbnQsIEFkZENhcmRQYXltZW50Q29tcG9uZW50LCBcbiAgUGF5bWVudEluZm9Db21wb25lbnQsIENvbmZpcm1hdGlvbkNvbXBvbmVudCwgU2V0dGluZ3Nmb3JtQ29tcG9uZW50LCBSZWF1dGhDb21wb25lbnRdLFxuICBzY2hlbWFzOiBbTk9fRVJST1JTX1NDSEVNQV1cbn0pXG4vKlxuUGFzcyB5b3VyIGFwcGxpY2F0aW9uIG1vZHVsZSB0byB0aGUgYm9vdHN0cmFwTW9kdWxlIGZ1bmN0aW9uIGxvY2F0ZWQgaW4gbWFpbi50cyB0byBzdGFydCB5b3VyIGFwcFxuKi9cbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLyogQWRkIG1vYmlsZSBzdHlsZXMgZm9yIHRoZSBjb21wb25lbnQgaGVyZS4gICovXFxuXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPEJ1dHRvbiB0ZXh0PVxcXCJhdXRvLWdlbmVyYXRlZCB3b3JrcyFcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiPjwvQnV0dG9uPlwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWF1dG8tZ2VuZXJhdGVkJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2F1dG8tZ2VuZXJhdGVkLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYXV0by1nZW5lcmF0ZWQuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEF1dG9HZW5lcmF0ZWRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi8qIEFkZCBtb2JpbGUgc3R5bGVzIGZvciB0aGUgY29tcG9uZW50IGhlcmUuICAqL1xcbkxhYmVsIHtcXG5cXHR0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG4ubmFtZS1sYWJlbCB7XFxuXFx0bWFyZ2luLXRvcDogMTY7XFxuXFx0bWFyZ2luLWxlZnQ6IDE4O1xcblxcdGNvbG9yOiBibGFjaztcXG5cXHRmb250LXdlaWdodDogNzAwO1xcblxcdGZvbnQtc2l6ZTogMTc7XFxufVxcblxcbi5pbmZvLWxhYmVsIHtcXG5cXHRtYXJnaW4tdG9wOiA0O1xcblxcdG1hcmdpbi1sZWZ0OiAxODtcXG5cXHRtYXJnaW4tYm90dG9tOiAxNjtcXG5cXHRjb2xvcjogIzY5Njk2OTtcXG59XFxuXFxuLnByb2ZpbGUtcGljdHVyZSB7XFxuXFx0aGVpZ2h0OiA2MDtcXG5cXHR3aWR0aDogNjA7XFxuXFx0Ym9yZGVyLXJhZGl1czogMTAwJTtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xcblxcdG1hcmdpbi1sZWZ0OiAxNjtcXG5cXHRtYXJnaW4tdG9wOiAxNDtcXG5cXHRtYXJnaW4tYm90dG9tOiAxNDtcXG59XFxuXFxuLm1lc3NhZ2Uge1xcblxcdGJvcmRlci1ib3R0b20td2lkdGg6IDE7XFxuXFx0Ym9yZGVyLWNvbG9yOiAjZjFmMWYxO1xcblxcdG1hcmdpbi10b3A6IDUwO1xcblxcdG1hcmdpbi1ib3R0b206IDUwO1xcbn1cXG5cXG4ucmVmcmVzaCB7XFxuXFx0Y29sb3I6ICNhYzAwZTY7XFxufVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxQYWdlLmFjdGlvbkJhcj5cXG4gICAgPEFjdGlvbkJhciB0aXRsZT1cXFwiTWVzc2FnZXNcXFwiPlxcbiAgICBcXHQ8TmF2aWdhdGlvbkJ1dHRvbiB0ZXh0PVxcXCJHbyBCYWNrXFxcIiBhbmRyb2lkLnN5c3RlbUljb249XFxcImljX21lbnVfYmFja1xcXCIgKHRhcCk9XFxcIm9uTmF2QnRuVGFwKClcXFwiPjwvTmF2aWdhdGlvbkJ1dHRvbj5cXG4gICAgPC9BY3Rpb25CYXI+XFxuPC9QYWdlLmFjdGlvbkJhcj5cXG5cXG48UHVsbFRvUmVmcmVzaCAocmVmcmVzaCk9XFxcInJlZnJlc2hMaXN0KCRldmVudClcXFwiIGNsYXNzPVxcXCJyZWZyZXNoXFxcIj5cXG5cXHQ8TGlzdFZpZXcgW2l0ZW1zXT1cXFwibWVzc2FnZXNcXFwiIChpdGVtVGFwKT1cXFwib25JdGVtVGFwKCRldmVudClcXFwiICNsaXN0VmlldyBpZD1cXFwibGlzdFZpZXdcXFwiPlxcblxcdCAgICA8bmctdGVtcGxhdGUgbGV0LWl0ZW09XFxcIml0ZW1cXFwiIGxldC1pPVxcXCJpbmRleFxcXCIgbGV0LW9kZD1cXFwib2RkXFxcIiBsZXQtZXZlbj1cXFwiZXZlblxcXCI+XFxuXFx0ICAgICAgICA8U3RhY2tMYXlvdXQgW2NsYXNzLm9kZF09XFxcIm9kZFxcXCIgW2NsYXNzLmV2ZW5dPVxcXCJldmVuXFxcIiBjbGFzcz1cXFwibWVzc2FnZVxcXCIgb3JpZW50YXRpb249XFxcImhvcml6b250YWxcXFwiPlxcblxcdCAgICAgICAgXFx0ICBcXHQ8SW1hZ2UgW3NyY109XFxcIml0ZW0ucGZwU291cmNlXFxcIiBjbGFzcz1cXFwicHJvZmlsZS1waWN0dXJlXFxcIiBzdHJldGNoPVxcXCJhc3BlY3RGaXRcXFwiPjwvSW1hZ2U+XFxuXFx0ICAgICAgICBcXHQgIFxcdDxTdGFja0xheW91dD5cXG5cXHRcXHQgICAgICAgICAgICAgIFxcdDxMYWJlbCB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgaWQ9XFxcInBvc3QtbmFtZVxcXCIgY2xhc3M9XFxcIm5hbWUtbGFiZWxcXFwiIFt0ZXh0XT1cXFwiaXRlbS5kaXNwbGF5TmFtZVxcXCI+PC9MYWJlbD5cXG5cXHRcXHQgICAgICAgICAgICAgIFxcdDxMYWJlbCB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgaWQ9XFxcInBvc3QtaW5mb1xcXCIgY2xhc3M9XFxcImluZm8tbGFiZWxcXFwiIFt0ZXh0XT1cXFwiaXRlbS5tZXNzYWdlXFxcIj48L0xhYmVsPlxcblxcdFxcdCAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuXFx0ICAgICAgICA8L1N0YWNrTGF5b3V0PlxcblxcdCAgICA8L25nLXRlbXBsYXRlPlxcblxcdDwvTGlzdFZpZXc+XFxuPC9QdWxsVG9SZWZyZXNoPlwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVHJhbnNmZXJTZXJ2aWNlIH0gZnJvbSAnLi4vZGF0YXRyYW5zZmVyLnNlcnZpY2UnO1xuaW1wb3J0ICogYXMgZmlyZWJhc2UgZnJvbSAnbmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZSc7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IExvZ2luY2hlY2tTZXJ2aWNlIH0gZnJvbSAnLi4vbG9naW5jaGVjay5zZXJ2aWNlLnRucyc7XG5pbXBvcnQgeyBDaGF0TWVzc2FnZSB9IGZyb20gJy4uL21vZGVscy9jaGF0LW1lc3NhZ2UubW9kZWwnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZUFycmF5IH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUtYXJyYXknO1xuaW1wb3J0IHsgTGlzdFZpZXcgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2xpc3Qtdmlldyc7XG5cbmNsYXNzIE1lc3NhZ2VJdGVtIHtcblx0Y29uc3RydWN0b3IocHVibGljIGNoYXRNZXNzYWdlOiBDaGF0TWVzc2FnZSwgcHVibGljIGxhc3RDaGF0OiBzdHJpbmcsIHB1YmxpYyBjaGF0SWQ6IHN0cmluZywgcHVibGljIHBmcFNvdXJjZTogc3RyaW5nLCBcbiAgICBwdWJsaWMgZGlzcGxheU5hbWU6IHN0cmluZywgcHVibGljIG1lc3NhZ2U6IHN0cmluZykge31cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWNoYXQtbGlzdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9jaGF0LWxpc3QuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jaGF0LWxpc3QuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIENoYXRMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRyYW5zZmVyU2VydmljZTogVHJhbnNmZXJTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSBsb2dpbmNoZWNrU2VydmljZTogTG9naW5jaGVja1NlcnZpY2UsXG4gIFx0cHJpdmF0ZSB2Y1JlZjogVmlld0NvbnRhaW5lclJlZikgeyB9XG5cbiAgbWVzc2FnZXMgPSBuZXcgT2JzZXJ2YWJsZUFycmF5PE1lc3NhZ2VJdGVtPigpO1xuICByZWZyZXNoTWVzc2FnZXMgPSBuZXcgT2JzZXJ2YWJsZUFycmF5PE1lc3NhZ2VJdGVtPigpO1xuICB1c2VySWQ6IHN0cmluZztcbiAgY2hhdElkczogW3N0cmluZ107XG5cbiAgbmdPbkluaXQoKSB7XG4gIFx0dGhpcy51c2VySWQgPSB0aGlzLmxvZ2luY2hlY2tTZXJ2aWNlLmdldFVzZXIoKTtcbiAgICB0aGlzLmxvYWRNZXNzYWdlcygpO1xuICB9XG5cbiAgbG9hZE1lc3NhZ2VzKGFyZ3M9bnVsbCkge1xuICBcdGZpcmViYXNlLmZpcmVzdG9yZS5jb2xsZWN0aW9uKCd1c2VycycpLmRvYyh0aGlzLnVzZXJJZCkuZ2V0KCkudGhlbigoZG9jKSA9PiB7XG4gIFx0XHR0aGlzLmNoYXRJZHMgPSBkb2MuZGF0YSgpLmNoYXRzO1xuICAgIH0pLnRoZW4oYXN5bmMgKHJlcykgPT4ge1xuICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHRoaXMuY2hhdElkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBjaGF0UHJvbWlzZSA9IGF3YWl0IGZpcmViYXNlLmZpcmVzdG9yZS5jb2xsZWN0aW9uKCdjaGF0cycpLmRvYyh0aGlzLmNoYXRJZHNbaV0pLmdldCgpLnRoZW4oYXN5bmMgKGRvYykgPT4ge1xuICAgICAgICAgIGxldCBkYXRhID0gZG9jLmRhdGEoKTtcbiAgICAgICAgICBsZXQgZG9jSWQgPSBkb2MuaWQ7XG4gICAgICAgICAgdmFyIGNoYXROYW1lID0gJ1lvdSwgJztcbiAgICAgICAgICB2YXIgbm9uVXNlckluZGV4ID0gMDtcbiAgICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgZGF0YS51c2Vycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYoZGF0YS51c2Vyc1tpXS51aWQgIT09dGhpcy51c2VySWQpIHtcbiAgICAgICAgICAgICAgbm9uVXNlckluZGV4ID0gaTtcbiAgICAgICAgICAgICAgaWYoaSA9PT0gZGF0YS51c2Vycy5sZW5ndGggLSAxKVxuICAgICAgICAgICAgICAgIGNoYXROYW1lICs9ICdhbmQgJyArIGRhdGEudXNlcnNbaV0uZGlzcGxheU5hbWU7XG4gICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBjaGF0TmFtZSArPSBkYXRhLnVzZXJzW2ldLmRpc3BsYXlOYW1lICsgJywgJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYoZGF0YS5jaGF0c1swXSkge1xuICAgICAgICAgICAgbGV0IGxhc3RNc2cgPSBkYXRhLmNoYXRzW2RhdGEuY2hhdHMubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICBjb25zdCBhZGRQcm9taXNlID0gYXdhaXQgdGhpcy5hZGRNZXNzYWdlKGxhc3RNc2csIGRhdGEsIGRvY0lkLCBjaGF0TmFtZSwgbm9uVXNlckluZGV4KTsgXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAvLyBjb25zdCB1bnN1YnNjcmliZSA9IGZpcmViYXNlLmZpcmVzdG9yZS5jb2xsZWN0aW9uKCdjaGF0cycpLmRvYyh0aGlzLmNoYXRJZHNbaV0pLm9uU25hcHNob3Qoe2luY2x1ZGVNZXRhZGF0YUNoYW5nZXM6IHRydWV9LCBkb2MgPT4ge1xuICAgICAgICAvLyAgIHRoaXMucmVmcmVzaExpc3QobnVsbCk7XG4gICAgICAgIC8vIH0pXG4gICAgICB9XG4gICAgICBpZihhcmdzICE9IG51bGwpXG4gICAgICB7XG4gICAgICAgIHZhciBwdWxsUmVmcmVzaCA9IGFyZ3Mub2JqZWN0O1xuICAgICAgICBwdWxsUmVmcmVzaC5yZWZyZXNoaW5nID0gZmFsc2U7XG4gICAgICB9XG4gICAgICB0aGlzLnJlZnJlc2hNZXNzYWdlcy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIGlmKGEubGFzdENoYXQgPiBiLmxhc3RDaGF0KVxuICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgZWxzZSBpZihiLmxhc3RDaGF0IDwgYS5sYXN0Q2hhdClcbiAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgICB9KVxuICAgICAgdGhpcy5tZXNzYWdlcy5zcGxpY2UoMCk7XG4gICAgICBmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5yZWZyZXNoTWVzc2FnZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGhpcy5tZXNzYWdlcy5wdXNoKHRoaXMucmVmcmVzaE1lc3NhZ2VzLmdldEl0ZW0oaSkpO1xuICAgICAgfVxuICAgICAgdGhpcy5yZWZyZXNoTWVzc2FnZXMuc3BsaWNlKDApO1xuICAgIH0pXG4gIH1cblxuICBhc3luYyBhZGRNZXNzYWdlKGxhc3RNc2csIGRhdGEsIGRvY0lkLCBjaGF0TmFtZSwgbm9uVXNlckluZGV4KSB7XG4gICAgaWYobGFzdE1zZy51c2VySWQgIT09IHRoaXMudXNlcklkKSB7XG4gICAgICBjb25zdCB1c2VyUHJvbWlzZSA9IGF3YWl0IGZpcmViYXNlLmZpcmVzdG9yZS5jb2xsZWN0aW9uKCd1c2VycycpLmRvYyhsYXN0TXNnLnVzZXJJZCkuZ2V0KCkudGhlbigoZG9jKSA9PiB7XG4gICAgICAgIGxldCBwcm9maWxlU291cmNlID0gbGFzdE1zZy5wZnBTb3VyY2U7XG4gICAgICAgIGlmKHByb2ZpbGVTb3VyY2Uuc3Vic3RyaW5nKDAsIDI3KSA9PSAnaHR0cHM6Ly9ncmFwaC5mYWNlYm9vay5jb20vJylcbiAgICAgICAgICBwcm9maWxlU291cmNlICs9ICc/aGVpZ2h0PTMwMCc7XG4gICAgICAgIGlmKGRhdGEudXNlcnMubGVuZ3RoID09PSAyKVxuICAgICAgICAgIHRoaXMucmVmcmVzaE1lc3NhZ2VzLnB1c2gobmV3IE1lc3NhZ2VJdGVtKGxhc3RNc2csIGRhdGEubGFzdENoYXQsIGRvY0lkLCBwcm9maWxlU291cmNlLCBsYXN0TXNnLmRpc3BsYXlOYW1lLCBkb2MuZGF0YSgpLmZpcnN0X25hbWUgKyAnOiAnICsgbGFzdE1zZy5tZXNzYWdlKSk7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHRoaXMucmVmcmVzaE1lc3NhZ2VzLnB1c2gobmV3IE1lc3NhZ2VJdGVtKGxhc3RNc2csIGRhdGEubGFzdENoYXQsIGRvY0lkLCBwcm9maWxlU291cmNlLCBjaGF0TmFtZSwgZG9jLmRhdGEoKS5maXJzdF9uYW1lICsgJzogJyArIGxhc3RNc2cubWVzc2FnZSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSlcbiAgICAgIHJldHVybiB0aGlzLnJlZnJlc2hNZXNzYWdlcztcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBjb25zdCB1c2VyUHJvbWlzZSA9IGF3YWl0IGZpcmViYXNlLmZpcmVzdG9yZS5jb2xsZWN0aW9uKCd1c2VycycpLmRvYyhkYXRhLnVzZXJzW25vblVzZXJJbmRleF0udWlkKS5nZXQoKS50aGVuKChkb2MpID0+IHtcbiAgICAgICAgbGV0IHByb2ZpbGVTb3VyY2UgPSBkb2MuZGF0YSgpLnByb2ZpbGVfc291cmNlO1xuICAgICAgICBpZihwcm9maWxlU291cmNlLnN1YnN0cmluZygwLCAyNykgPT0gJ2h0dHBzOi8vZ3JhcGguZmFjZWJvb2suY29tLycpXG4gICAgICAgICAgcHJvZmlsZVNvdXJjZSArPSAnP2hlaWdodD0zMDAnO1xuICAgICAgICBpZihkYXRhLnVzZXJzLmxlbmd0aCA9PT0gMilcbiAgICAgICAgICB0aGlzLnJlZnJlc2hNZXNzYWdlcy5wdXNoKG5ldyBNZXNzYWdlSXRlbShsYXN0TXNnLCBkYXRhLmxhc3RDaGF0LCBkb2NJZCwgcHJvZmlsZVNvdXJjZSwgXG4gICAgICAgICAgICBkb2MuZGF0YSgpLmZpcnN0X25hbWUgKyAnICcgKyBkb2MuZGF0YSgpLmxhc3RfbmFtZSwgJ1lvdTogJyArIGxhc3RNc2cubWVzc2FnZSkpO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICB0aGlzLnJlZnJlc2hNZXNzYWdlcy5wdXNoKG5ldyBNZXNzYWdlSXRlbShsYXN0TXNnLCBkYXRhLmxhc3RDaGF0LCBkb2NJZCwgcHJvZmlsZVNvdXJjZSwgXG4gICAgICAgICAgICBjaGF0TmFtZSwgJ1lvdTogJyArIGxhc3RNc2cubWVzc2FnZSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSlcbiAgICAgIHJldHVybiB0aGlzLnJlZnJlc2hNZXNzYWdlcztcbiAgICB9XG4gIH1cblxuICByZWZyZXNoTGlzdChhcmdzKSB7XG4gICAgdGhpcy5sb2FkTWVzc2FnZXMoYXJncyk7XG4gIH1cblxuICBvbkl0ZW1UYXAoYXJncykge1xuICBcdGxldCBjaGF0SWQgPSB0aGlzLm1lc3NhZ2VzLmdldEl0ZW0oYXJncy5pbmRleCkuY2hhdElkO1xuICBcdHRoaXMudHJhbnNmZXJTZXJ2aWNlLnNldERhdGEoY2hhdElkKTtcbiAgXHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ2NoYXQnXSlcbiAgfVxuXG4gIG9uTmF2QnRuVGFwKCkge1xuICAgIGlmKHRoaXMucm91dGVyLmNhbkdvQmFjaylcbiAgICAgIHRoaXMucm91dGVyLmJhY2soKTtcbiAgICBlbHNlXG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ25hdmlnYXRpb24nXSwge2NsZWFySGlzdG9yeTogdHJ1ZX0pXG4gIH1cblxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi8qIEFkZCBtb2JpbGUgc3R5bGVzIGZvciB0aGUgY29tcG9uZW50IGhlcmUuICAqL1xcbkJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IDU7XFxuICAgIG1hcmdpbjogNTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZG9kZ2VyYmx1ZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBoZWlnaHQ6IDQwO1xcbiAgICBib3JkZXItcmFkaXVzOiA1O1xcbn1cXG5cXG4uY2hhdC1idXR0b24ge1xcblxcdHBhZGRpbmctbGVmdDogNTtcXG5cXHRwYWRkaW5nLXJpZ2h0OiA1O1xcblxcdG1hcmdpbjogNTtcXG5cXHRoZWlnaHQ6IDMwO1xcblxcdHdpZHRoOiAzMDtcXG59XFxuXFxuLmNoYXQtdGV4dC1maWVsZCB7XFxuICAgIHBhZGRpbmc6IDU7IFxcbiAgICAvKmJhY2tncm91bmQtY29sb3I6IHdoaXRlOyAqL1xcbiAgICAvKmJvcmRlci1yYWRpdXM6IDQ7Ki9cXG4gICAgLypib3R0b20tYm9yZGVyLWNvbG9yOiAjNjk2OTY5OyovXFxufVxcblxcbi5hdXRob3ItaW1nIHtcXG4gICAgbWFyZ2luOiAwIDUgNSA1O1xcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgICB3aWR0aDogNDA7XFxuICAgIGhlaWdodDogNDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwO1xcbn1cXG5cXG4ubWluZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhYzAwZTY7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogODtcXG4gICAgcGFkZGluZy1sZWZ0OiAxNDtcXG4gICAgcGFkZGluZy1yaWdodDogMTQ7XFxuICAgIG1hcmdpbi1yaWdodDogMTA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1O1xcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNTtcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTU7XFxuICAgIGZvbnQtc2l6ZTogMTY7XFxuICAgIG1heC13aWR0aDogNjAlO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICAvKm1hcmdpbi1ib3R0b206IDEyOyovXFxufVxcblxcbi5taW5lQ29udGludWF0aW9uIHtcXG5cXHRtYXJnaW4tYm90dG9tOiAwO1xcblxcdGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxNTtcXG59XFxuXFxuLm1pbmVDb250aW51YXRpb25HcmlkIHtcXG5cXHRmb250LXNpemU6IDE0O1xcbiAgICBwYWRkaW5nOiA1O1xcblxcdHBhZGRpbmctdG9wOiAwO1xcblxcdHBhZGRpbmctYm90dG9tOiAxO1xcbn1cXG5cXG4ubWluZVRpbWUge1xcblxcdG1hcmdpbi1yaWdodDogMTA7XFxuXFx0bWFyZ2luLWJvdHRvbTogNTtcXG59XFxuXFxuLnRoZWlyc1RpbWUge1xcblxcdG1hcmdpbi1sZWZ0OiA1MjtcXG5cXHRtYXJnaW4tYm90dG9tOiA1O1xcbn1cXG5cXG4udGltZSB7XFxuXFx0dmlzaWJpbGl0eTogY29sbGFwc2U7XFxuXFx0ZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnRoZWlycyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XFxuICAgIGNvbG9yOiAjMzMzO1xcbiAgICBwYWRkaW5nOiA3O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDE0O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTU7XFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDU7XFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxNTtcXG4gICAgbWFyZ2luLXJpZ2h0OiA0MDtcXG4gICAgZm9udC1zaXplOiAxNjtcXG4gICAgbWF4LXdpZHRoOiA2MCU7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIC8qbWFyZ2luLWJvdHRvbTogMTI7Ki9cXG59XFxuXFxuLnRoZWlyc0NvbnRpbnVhdGlvbiB7XFxuXFx0bWFyZ2luLWxlZnQ6IDUyO1xcblxcdG1hcmdpbi1ib3R0b206IDA7XFxuXFx0Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTU7XFxufVxcblxcbi50aGVpcnNDb250aW51YXRpb25HcmlkIHtcXG5cXHRmb250LXNpemU6IDE0O1xcbiAgICBwYWRkaW5nOiA1O1xcblxcdHBhZGRpbmctdG9wOiAwO1xcblxcdHBhZGRpbmctYm90dG9tOiAxO1xcbn1cXG5cXG4uZ3JpZCB7XFxuICAgIGZvbnQtc2l6ZTogMTQ7XFxuICAgIHBhZGRpbmc6IDU7XFxuICAgIHBhZGRpbmctdG9wOiAwO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogODtcXG59XFxuXFxuLmNoYXQtYm94LWxheW91dCB7XFxuXFx0Ym9yZGVyLWNvbG9yOiAjZjFmMWYxO1xcblxcdGJvcmRlci10b3Atd2lkdGg6IDE7XFxufVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxQYWdlLmFjdGlvbkJhcj5cXG4gICAgPEFjdGlvbkJhciB0aXRsZT1cXFwie3sgY2hhdE5hbWUgfX1cXFwiIGFuZHJvaWQ6aG9yaXpvbnRhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIiBpb3M6aG9yaXpvbnRhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIj5cXG4gICAgXFx0PE5hdmlnYXRpb25CdXR0b24gdGV4dD1cXFwiR28gQmFja1xcXCIgYW5kcm9pZC5zeXN0ZW1JY29uPVxcXCJpY19tZW51X2JhY2tcXFwiICh0YXApPVxcXCJvbk5hdkJ0blRhcCgpXFxcIj48L05hdmlnYXRpb25CdXR0b24+XFxuXFx0ICAgIDxBY3Rpb25JdGVtICh0YXApPVxcXCJvbkxlYXZlKClcXFwiXFxuXFx0ICAgICAgaW9zLnN5c3RlbUljb249XFxcIjlcXFwiIGlvcy5wb3NpdGlvbj1cXFwicmlnaHRcXFwiXFxuXFx0ICAgICAgdGV4dD1cXFwiTGVhdmUgY2hhdFxcXCIgYW5kcm9pZC5wb3NpdGlvbj1cXFwicG9wdXBcXFwiPjwvQWN0aW9uSXRlbT5cXG4gICAgPC9BY3Rpb25CYXI+XFxuPC9QYWdlLmFjdGlvbkJhcj5cXG5cXG48R3JpZExheW91dCByb3dzPVxcXCIqLCBhdXRvXFxcIj5cXG4gICAgPExpc3RWaWV3IG1hcmdpbi1ib3R0b209XFxcIjUwXFxcIiBwYWRkaW5nPVxcXCI1XFxcIiAjbWVzc2FnZUxpc3QgW2l0ZW1zXT1cXFwibWVzc2FnZXNcXFwiIHNlcGFyYXRvckNvbG9yPVxcXCJ0cmFuc3BhcmVudFxcXCIgKHNldHVwSXRlbVZpZXcpPVxcXCJzZXR1cEl0ZW1WaWV3KCRldmVudClcXFwiIHJvdz1cXFwiMFxcXCIgKGxvYWRNb3JlSXRlbXMpPVxcXCJsb2FkTW9yZURhdGEoKVxcXCI+XFxuICAgICAgICA8bmctdGVtcGxhdGUgbGV0LWl0ZW09XFxcIml0ZW1cXFwiIGxldC1pPVxcXCJpbmRleFxcXCIgbGV0LW1pbmU9XFxcIm1pbmVcXFwiIGxldC10aGVpcnM9XFxcInRoZWlyc1xcXCIgbGV0LW1pbmVDb250aW51YXRpb249XFxcIm1pbmVDb250aW51YXRpb25cXFwiIGxldC10aGVpcnNDb250aW51YXRpb249XFxcInRoZWlyc0NvbnRpbnVhdGlvblxcXCIgbGV0LW1pbmVDb250aW51YXRpb25HcmlkPVxcXCJtaW5lQ29udGludWF0aW9uR3JpZFxcXCIgbGV0LXRoZWlyc0NvbnRpbnVhdGlvbkdyaWQ9XFxcInRoZWlyc0NvbnRpbnVhdGlvbkdyaWRcXFwiIGxldC1ncmlkPVxcXCJncmlkXFxcIiBsZXQtbWluZVRpbWU9XFxcIm1pbmVUaW1lXFxcIiBsZXQtdGhlaXJzVGltZT1cXFwidGhlaXJzVGltZVxcXCIgbGV0LXRpbWU9XFxcInRpbWVcXFwiPlxcbiAgICAgICAgICAgIDxTdGFja0xheW91dCB3aWR0aD1cXFwiODAlXFxcIiBbY2xhc3MubWluZUNvbnRpbnVhdGlvbkdyaWRdPVxcXCJtaW5lQ29udGludWF0aW9uR3JpZFxcXCIgW2NsYXNzLnRoZWlyc0NvbnRpbnVhdGlvbkdyaWRdPVxcXCJ0aGVpcnNDb250aW51YXRpb25HcmlkXFxcIiBbY2xhc3MuZ3JpZF09XFxcImdyaWRcXFwiPlxcbiAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XFxcImhvcml6b250YWxcXFwiIFtob3Jpem9udGFsQWxpZ25tZW50XT1cXFwiYWxpZ24oaXRlbSlcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPEltYWdlIFt2aXNpYmlsaXR5XT1cXFwiaXRlbS52aXNpYmlsaXR5XFxcIiBjbGFzcz1cXFwiYXV0aG9yLWltZ1xcXCIgc3RyZXRjaD1cXFwiYXNwZWN0RmlsbFxcXCIgaGVpZ2h0PVxcXCI0MFxcXCIgd2lkdGg9XFxcIjQwXFxcIiB2ZXJ0aWNhbEFsaWdubWVudD1cXFwiYm90dG9tXFxcIiBbc3JjXT1cXFwiaXRlbS5jaGF0TWVzc2FnZS5wZnBTb3VyY2VcXFwiIGNvbD1cXFwiMVxcXCI+PC9JbWFnZT5cXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCBbdGV4dF09J2l0ZW0uY2hhdE1lc3NhZ2UubWVzc2FnZScgW2NsYXNzLm1pbmVdPVxcXCJtaW5lXFxcIiBbY2xhc3MudGhlaXJzXT1cXFwidGhlaXJzXFxcIiBbY2xhc3MubWluZUNvbnRpbnVhdGlvbl09XFxcIm1pbmVDb250aW51YXRpb25cXFwiIFtjbGFzcy50aGVpcnNDb250aW51YXRpb25dPVxcXCJ0aGVpcnNDb250aW51YXRpb25cXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiB2ZXJ0aWNhbEFsaWdubWVudD1cXFwidG9wXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgW3RleHRdPSdpdGVtLmZvcm1hdHRlZFRpbWUnIFtob3Jpem9udGFsQWxpZ25tZW50XT1cXFwiYWxpZ24oaXRlbSlcXFwiIFtjbGFzcy5taW5lVGltZV09XFxcIm1pbmVUaW1lXFxcIiBbY2xhc3MudGhlaXJzVGltZV09XFxcInRoZWlyc1RpbWVcXFwiIFtjbGFzcy50aW1lXT1cXFwidGltZVxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXG4gICAgPC9MaXN0Vmlldz5cXG5cXG4gICAgPFN0YWNrTGF5b3V0ICNjaGF0Ym94IHJvdz1cXFwiMVxcXCIgY2xhc3M9XFxcImNoYXQtYm94LWxheW91dFxcXCI+XFxuXFx0ICAgICAgICA8R3JpZExheW91dCBjb2x1bW5zPVxcXCIqLGF1dG9cXFwiIHN0eWxlPVxcXCJwYWRkaW5nOiAxMFxcXCI+XFxuXFx0ICAgICAgICAgICAgPFRleHRWaWV3ICN0ZXh0ZmllbGQgaGVpZ2h0PVxcXCJhdXRvXFxcIiBtYXhIZWlnaHQ9XFxcIjEwMFxcXCIgaGludD1cXFwiU3RhcnQgYSBtZXNzYWdlXFxcIiBjbGFzcz1cXFwiY2hhdC10ZXh0LWZpZWxkXFxcIiByb3c9XFxcIjBcXFwiIGNvbD1cXFwiMFxcXCIgYXV0b2NvcnJlY3Q9XFxcInRydWVcXFwiIFsobmdNb2RlbCldPVxcXCJtZXNzYWdlXFxcIiAodGFwKT1cXFwib25UZXh0VGFwKClcXFwiPjwvVGV4dFZpZXc+XFxuXFx0ICAgICAgICAgICAgPEltYWdlICNidG4gY2xhc3M9XFxcImNoYXQtYnV0dG9uXFxcIiByb3c9XFxcIjBcXFwiIGNvbD1cXFwiMVxcXCIgc3JjPVxcXCJ+L2ltZy9zZW5kX21lc3NhZ2VfaWNvbl8yLnBuZ1xcXCIgKHRhcCk9c2VuZE1lc3NhZ2UoKT48L0ltYWdlPlxcblxcdCAgICAgICAgPC9HcmlkTGF5b3V0PlxcblxcbiAgICA8L1N0YWNrTGF5b3V0PlxcblxcbjwvR3JpZExheW91dD5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRyYW5zZmVyU2VydmljZSB9IGZyb20gJy4uL2RhdGF0cmFuc2Zlci5zZXJ2aWNlJztcbmltcG9ydCAqIGFzIGZpcmViYXNlIGZyb20gJ25hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2UnO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBMb2dpbmNoZWNrU2VydmljZSB9IGZyb20gJy4uL2xvZ2luY2hlY2suc2VydmljZS50bnMnO1xuaW1wb3J0IHsgQ2hhdE1lc3NhZ2UgfSBmcm9tICcuLi9tb2RlbHMvY2hhdC1tZXNzYWdlLm1vZGVsJztcbmltcG9ydCB7IE9ic2VydmFibGVBcnJheSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlLWFycmF5JztcbmltcG9ydCB7IExpc3RWaWV3IH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9saXN0LXZpZXcnO1xuaW1wb3J0IHsgaXNBbmRyb2lkIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybSc7XG5pbXBvcnQgKiBhcyBhcHAgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIjtcbmRlY2xhcmUgdmFyIGFuZHJvaWQ6IGFueTtcblxuXG5jbGFzcyBDaGF0SXRlbSB7XG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBjaGF0TWVzc2FnZTogQ2hhdE1lc3NhZ2UsIHB1YmxpYyB2aXNpYmlsaXR5OiBzdHJpbmcsIHB1YmxpYyBmb3JtYXR0ZWRUaW1lOiBzdHJpbmcsIHB1YmxpYyBtaW5lQ29udGludWF0aW9uOiBib29sZWFuLCBwdWJsaWMgdGhlaXJzQ29udGludWF0aW9uOiBib29sZWFuKSB7fVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtY2hhdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9jaGF0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2hhdC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ2hhdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0cmFuc2ZlclNlcnZpY2U6IFRyYW5zZmVyU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMsIHByaXZhdGUgbG9naW5jaGVja1NlcnZpY2U6IExvZ2luY2hlY2tTZXJ2aWNlLFxuICBcdHByaXZhdGUgdmNSZWY6IFZpZXdDb250YWluZXJSZWYpIHsgfVxuXG4gIEBWaWV3Q2hpbGQoXCJtZXNzYWdlTGlzdFwiLCB7IHN0YXRpYzogdHJ1ZSB9KSBsdjogRWxlbWVudFJlZjtcbiAgY2hhdElkOiBzdHJpbmc7XG4gIG1lc3NhZ2VzID0gbmV3IE9ic2VydmFibGVBcnJheTxDaGF0SXRlbT4oKTtcbiAgYWxsTWVzc2FnZXMgPSBuZXcgT2JzZXJ2YWJsZUFycmF5PENoYXRJdGVtPigpO1xuICBtZXNzYWdlOiBzdHJpbmcgPSAnJztcbiAgdXNlcklkOiBzdHJpbmc7XG4gIGNoYXROYW1lOiBzdHJpbmc7XG4gIGRpc3BsYXlOYW1lOiBzdHJpbmc7XG4gIHBmcFNvdXJjZTogc3RyaW5nO1xuICBsaXN0OiBMaXN0VmlldztcbiAgbGFzdEluZGV4O1xuICBjdXJyZW50VXNlcjogYW55O1xuICBudW1TaG93biA9IDIwO1xuXG4gIG5nT25Jbml0KCkge1xuICBcdGlmKGlzQW5kcm9pZCkge1xuICBcdFx0dmFyIHdpbmRvdyA9IGFwcC5hbmRyb2lkLnN0YXJ0QWN0aXZpdHkuZ2V0V2luZG93KCk7XG4gICAgICAgIHdpbmRvdy5zZXRTb2Z0SW5wdXRNb2RlKGFuZHJvaWQudmlldy5XaW5kb3dNYW5hZ2VyLkxheW91dFBhcmFtcy5TT0ZUX0lOUFVUX0FESlVTVF9SRVNJWkUpO1xuICBcdH1cbiAgXHR0aGlzLmxpc3QgPSB0aGlzLmx2Lm5hdGl2ZUVsZW1lbnQ7XG5cbiAgXHR0aGlzLmNoYXRJZCA9IHRoaXMudHJhbnNmZXJTZXJ2aWNlLmdldERhdGEoKTtcbiAgXHR0aGlzLnVzZXJJZCA9IHRoaXMubG9naW5jaGVja1NlcnZpY2UuZ2V0VXNlcigpO1xuICBcdGZpcmViYXNlLmdldEN1cnJlbnRVc2VyKCkudGhlbigodXNlcikgPT4ge1xuICBcdFx0dGhpcy5kaXNwbGF5TmFtZSA9IHVzZXIuZGlzcGxheU5hbWU7XG4gIFx0XHR0aGlzLnBmcFNvdXJjZSA9IHVzZXIucGhvdG9VUkw7XG4gIFx0fSlcbiAgXHR0aGlzLnJldHJpZXZlQ2hhdHMoKTtcbiAgXHR0aGlzLmNoYXROYW1lID0gXCJKb2huIERvZVwiXG4gIFx0Ly8gc2V0VGltZW91dCgoKSA9PiB7XG4gICAvLyAgICB0aGlzLmxpc3Quc2Nyb2xsVG9JbmRleCh0aGlzLm1lc3NhZ2VzLmxlbmd0aCAtIDEpO1xuICAgLy8gIH0sIDEwMDApXG4gIH1cblxuICBhc3luYyBzZW5kTWVzc2FnZSgpIHtcbiAgICBpZih0aGlzLm1lc3NhZ2UucmVwbGFjZSgvXFxzKy9nLCAnJykubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICBcdHZhciB0b2RheSA9IG5ldyBEYXRlKCk7XG4gIFx0dmFyIGRhdGUgPSB0b2RheS5nZXRGdWxsWWVhcigpKycvJysodG9kYXkuZ2V0TW9udGgoKSsxKSsnLycrdG9kYXkuZ2V0RGF0ZSgpO1xuICBcdHZhciB0aW1lID0gdG9kYXkuZ2V0SG91cnMoKSArIFwiOlwiICsgdG9kYXkuZ2V0VVRDTWludXRlcygpICsgXCI6XCIgKyB0b2RheS5nZXRTZWNvbmRzKCk7XG4gIFx0Y29uc3QgY2hhdCA6IENoYXRNZXNzYWdlID0ge1xuICBcdFx0dXNlcklkOiB0aGlzLnVzZXJJZCxcbiAgXHRcdGRpc3BsYXlOYW1lOiB0aGlzLmRpc3BsYXlOYW1lLFxuICBcdFx0bWVzc2FnZTogdGhpcy5tZXNzYWdlLFxuICBcdFx0cGZwU291cmNlOiB0aGlzLnBmcFNvdXJjZSxcbiAgXHRcdGltZ1NvdXJjZTogXCJcIixcbiAgXHRcdHRpbWU6IHRpbWUsXG4gIFx0XHRkYXRlOiBkYXRlXG4gIFx0fVxuICBcdGNvbnN0IG1lc3NhZ2VEb2N1bWVudCA9IGZpcmViYXNlLmZpcmVzdG9yZS5jb2xsZWN0aW9uKCdjaGF0cycpLmRvYyh0aGlzLmNoYXRJZCk7XG4gIFx0Y29uc3QgbWVzc2FnZVByb21pc2UgPSBhd2FpdCBtZXNzYWdlRG9jdW1lbnQuZ2V0KCkudGhlbigoZG9jKSA9PiB7XG4gIFx0XHR2YXIgdXBkYXRlZENoYXRzIDogW0NoYXRNZXNzYWdlXSA9IGRvYy5kYXRhKCkuY2hhdHM7XG4gIFx0XHR1cGRhdGVkQ2hhdHMucHVzaChjaGF0KTtcbiAgXHRcdG1lc3NhZ2VEb2N1bWVudC51cGRhdGUoe1xuICBcdFx0XHRjaGF0czogdXBkYXRlZENoYXRzLFxuICBcdFx0XHRsYXN0Q2hhdDogZGF0ZSArICcgJyArIHRpbWVcbiAgXHRcdH0pXG4gIFx0fSlcbiAgXHR0aGlzLm1lc3NhZ2UgPSAnJztcbiAgfVxuXG4gIGFzeW5jIHJldHJpZXZlQ2hhdHMoKSB7XG4gIFx0Y29uc3QgbWVzc2FnZURvY3VtZW50ID0gZmlyZWJhc2UuZmlyZXN0b3JlLmNvbGxlY3Rpb24oJ2NoYXRzJykuZG9jKHRoaXMuY2hhdElkKTtcbiAgXHRjb25zdCBkb2NQcm9taXNlID0gYXdhaXQgbWVzc2FnZURvY3VtZW50LmdldCgpLnRoZW4oKGRvYykgPT4ge1xuICBcdFx0bGV0IGRhdGEgPSBkb2MuZGF0YSgpO1xuICBcdFx0dGhpcy5sYXN0SW5kZXggPSBkYXRhLmNoYXRzLmxlbmd0aDtcbiAgICAgIHRoaXMubWVzc2FnZXMuc3BsaWNlKDApO1xuICAgICAgdGhpcy5hbGxNZXNzYWdlcy5zcGxpY2UoMCk7XG4gIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGF0YS5jaGF0cy5sZW5ndGg7IGkrKykge1xuICBcdFx0XHRpZihkYXRhLmNoYXRzW2ldLnVzZXJJZCA9PT0gdGhpcy51c2VySWQpIHtcbiAgICAgICAgICB0aGlzLnVwZGF0ZUNvbnRpbnVhdGlvbnMoZGF0YSwgaSwgdHJ1ZSwgXCJjb2xsYXBzZVwiKTtcbiAgICAgICAgfVxuICBcdFx0XHRlbHNlIHtcbiAgICAgICAgICB0aGlzLnVwZGF0ZUNvbnRpbnVhdGlvbnMoZGF0YSwgaSwgZmFsc2UsIFwidmlzaWJsZVwiKTtcbiAgICAgICAgfVxuICBcdFx0fVxuICBcdFx0Ly8gdGhpcy5saXN0LnNjcm9sbFRvSW5kZXgoZGF0YS5jaGF0cy5sZW5ndGggLSAxKTtcbiAgXHRcdGlmKGRhdGEudXNlcnMubGVuZ3RoID09PSAyKSB7XG4gIFx0XHRcdGlmKGRhdGEudXNlcnNbMF0udWlkID09PSB0aGlzLnVzZXJJZClcbiAgXHRcdFx0XHR0aGlzLmNoYXROYW1lID0gZGF0YS51c2Vyc1sxXS5kaXNwbGF5TmFtZTtcbiAgXHRcdFx0ZWxzZSB7XG4gICAgICAgICAgdGhpcy5jaGF0TmFtZSA9IGRhdGEudXNlcnNbMF0uZGlzcGxheU5hbWU7XG4gICAgICAgIH1cbiAgXHRcdH1cbiAgXHRcdGVsc2Uge1xuICAgICAgICB2YXIgY2hhdE5hbWUgPSAnWW91LCAnO1xuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgZGF0YS51c2Vycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmKGRhdGEudXNlcnNbaV0uaWQgIT0gdGhpcy51c2VySWQpIHtcbiAgICAgICAgICAgIGlmKGkgPT09IGRhdGEudXNlcnMubGVuZ3RoIC0gMSlcbiAgICAgICAgICAgICAgY2hhdE5hbWUgKz0gJ2FuZCAnICsgZGF0YS51c2Vyc1tpXS5kaXNwbGF5TmFtZTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgY2hhdE5hbWUgKz0gZGF0YS51c2Vyc1tpXS5kaXNwbGF5TmFtZSArICcsICc7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gIFx0XHRcdHRoaXMuY2hhdE5hbWUgPSAnR3JvdXAgY2hhdCc7XG4gIFx0XHR9XG4gIFx0fSlcblxuICBcdGNvbnN0IHVuc3Vic2NyaWJlID0gbWVzc2FnZURvY3VtZW50Lm9uU25hcHNob3QoZG9jID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdjYWxsZWQnKVxuICBcdFx0bGV0IGRhdGEgPSBkb2MuZGF0YSgpO1xuICBcdFx0Zm9yKHZhciBpID0gdGhpcy5sYXN0SW5kZXg7IGkgPCBkYXRhLmNoYXRzLmxlbmd0aDsgaSsrKSB7XG4gIFx0XHRcdGlmKGRhdGEuY2hhdHNbaV0udXNlcklkID09PSB0aGlzLnVzZXJJZCkge1xuICAgICAgICAgIHRoaXMudXBkYXRlQ29udGludWF0aW9ucyhkYXRhLCBpLCB0cnVlLCBcImNvbGxhcHNlXCIpO1xuICAgICAgICAgIHRoaXMubGlzdC5zY3JvbGxUb0luZGV4KHRoaXMubWVzc2FnZXMubGVuZ3RoIC0gMSk7XG4gICAgICAgIH1cbiAgXHRcdFx0ZWxzZSB7XG4gICAgICAgICAgdGhpcy51cGRhdGVDb250aW51YXRpb25zKGRhdGEsIGksIGZhbHNlLCBcInZpc2libGVcIik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5udW1TaG93biArPSAxO1xuICBcdFx0fVxuICBcdFx0dGhpcy5sYXN0SW5kZXggPSBkYXRhLmNoYXRzLmxlbmd0aDtcbiAgXHR9KVxuICAgIGlmKHRoaXMubWVzc2FnZXMubGVuZ3RoID4gdGhpcy5udW1TaG93bikge1xuICAgICAgdGhpcy5tZXNzYWdlcy5zcGxpY2UoMCwgdGhpcy5tZXNzYWdlcy5sZW5ndGggLSB0aGlzLm51bVNob3duKTtcbiAgICB9XG4gICAgdGhpcy5saXN0LnNjcm9sbFRvSW5kZXgodGhpcy5tZXNzYWdlcy5sZW5ndGggLSAxKTtcbiAgfVxuXG4gIHVwZGF0ZUNvbnRpbnVhdGlvbnMoZGF0YSwgaW5kZXgsIGlzTWluZSwgdmlzaWJpbGl0eSkge1xuICAgIC8vVXBkYXRlIHRpbWUgdG8gYSByZWFkYWJsZSBmb3JtYXQgZm9yIHRoZSB1c2VyXG4gICAgdmFyIGNoYXRUaW1lID0gZGF0YS5jaGF0c1tpbmRleF0udGltZTtcbiAgICB2YXIgZGF0ZVNwbGl0ID0gZGF0YS5jaGF0c1tpbmRleF0uZGF0ZS5zcGxpdCgnLycpO1xuICAgIHZhciB0aW1lU3BsaXQgPSBjaGF0VGltZS5zcGxpdCgnOicpO1xuICAgIHZhciBmb3JtYXR0ZWRUaW1lID0gJyc7XG4gICAgaWYodGltZVNwbGl0WzFdLmxlbmd0aCA9PT0gMSkge1xuICAgICAgdGltZVNwbGl0WzFdID0gJzAnICsgdGltZVNwbGl0WzFdO1xuICAgIH1cbiAgICB2YXIgaG91cnMgPSBwYXJzZUludCh0aW1lU3BsaXRbMF0pO1xuICAgIGlmKGhvdXJzID4gMTIpIHtcbiAgICAgIGZvcm1hdHRlZFRpbWUgPSBkYXRlU3BsaXRbMV0gKyAnLycgKyBkYXRlU3BsaXRbMl0gKyAnLCAnICsgKGhvdXJzIC0gMTIpICsgJzonICsgdGltZVNwbGl0WzFdICsgJyBQTSc7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgaWYoaG91cnMgPT09IDApXG4gICAgICAgIHRpbWVTcGxpdFswXSA9ICcxMic7XG4gICAgICBmb3JtYXR0ZWRUaW1lID0gZGF0ZVNwbGl0WzFdICsgJy8nICsgZGF0ZVNwbGl0WzJdICsgJywgJyArIHRpbWVTcGxpdFswXSArICc6JyArIHRpbWVTcGxpdFsxXSArICcgQU0nO1xuICAgIH1cbiAgICAvL1B1c2ggdGhlIG1lc3NhZ2UgaXRlbVxuICAgIHRoaXMubWVzc2FnZXMucHVzaChuZXcgQ2hhdEl0ZW0oZGF0YS5jaGF0c1tpbmRleF0sIHZpc2liaWxpdHksIGZvcm1hdHRlZFRpbWUsIGZhbHNlLCBmYWxzZSkpO1xuICAgIHRoaXMuYWxsTWVzc2FnZXMucHVzaChuZXcgQ2hhdEl0ZW0oZGF0YS5jaGF0c1tpbmRleF0sIHZpc2liaWxpdHksIGZvcm1hdHRlZFRpbWUsIGZhbHNlLCBmYWxzZSkpO1xuXG4gICAgLy9DaGVjayBmb3IgY29udGludWF0aW9uIG1lc3NhZ2VzIGFuZCB1cGRhdGUgaXRlbXMgYWNjb3JkaW5nbHlcbiAgICB2YXIgaSA9IGluZGV4IC0gMTtcbiAgICB3aGlsZShpID49IDAgJiYgZGF0YS5jaGF0c1tpXS51c2VySWQgPT09IGRhdGEuY2hhdHNbaW5kZXhdLnVzZXJJZCkge1xuICAgICAgaWYodGhpcy5pc1RpbWVPdmVyKGRhdGEuY2hhdHNbaV0sIGRhdGEuY2hhdHNbaW5kZXhdKSlcbiAgICAgICAgcmV0dXJuO1xuICAgICAgaWYoaSA+PSB0aGlzLm1lc3NhZ2VzLmxlbmd0aCkge1xuICAgICAgICB2YXIgbXNnID0gdGhpcy5tZXNzYWdlcy5nZXRJdGVtKHRoaXMubWVzc2FnZXMubGVuZ3RoICsgaSAtIGRhdGEuY2hhdHMubGVuZ3RoKTtcbiAgICAgICAgbXNnLnZpc2liaWxpdHkgPSAnY29sbGFwc2UnO1xuICAgICAgICBpZihpc01pbmUpIHtcbiAgICAgICAgICBtc2cubWluZUNvbnRpbnVhdGlvbiA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgbXNnLnRoZWlyc0NvbnRpbnVhdGlvbiA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tZXNzYWdlcy5zZXRJdGVtKHRoaXMubWVzc2FnZXMubGVuZ3RoICsgaSAtIGRhdGEuY2hhdHMubGVuZ3RoLCBtc2cpXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdmFyIG1zZyA9IHRoaXMubWVzc2FnZXMuZ2V0SXRlbShpKTtcbiAgICAgICAgbXNnLnZpc2liaWxpdHkgPSAnY29sbGFwc2UnO1xuICAgICAgICBpZihpc01pbmUpIHtcbiAgICAgICAgICBtc2cubWluZUNvbnRpbnVhdGlvbiA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgbXNnLnRoZWlyc0NvbnRpbnVhdGlvbiA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tZXNzYWdlcy5zZXRJdGVtKGksIG1zZyk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuYWxsTWVzc2FnZXMuc2V0SXRlbShpLCBtc2cpO1xuICAgICAgaSA9IGkgLSAxO1xuICAgIH1cbiAgICAvLyB0aGlzLmxpc3Quc2Nyb2xsVG9JbmRleCh0aGlzLm1lc3NhZ2VzLmxlbmd0aCAtIDEpO1xuICB9XG5cbiAgaXNUaW1lT3ZlcihjaGF0MSwgY2hhdDIpIHtcbiAgICBjb25zdCB0aW1lMSA9IGNoYXQxLnRpbWU7XG4gICAgY29uc3QgdGltZTIgPSBjaGF0Mi50aW1lO1xuICAgIGNvbnN0IGRhdGUxID0gY2hhdDEuZGF0ZTtcbiAgICBjb25zdCBkYXRlMiA9IGNoYXQyLmRhdGU7XG5cbiAgICBjb25zdCB0aW1lMVNwbGl0ID0gdGltZTEuc3BsaXQoJzonKTtcbiAgICBjb25zdCB0aW1lMlNwbGl0ID0gdGltZTIuc3BsaXQoJzonKTtcblxuICAgIHZhciB0aW1lMVRvdGFsU2Vjb25kcyA9IHBhcnNlSW50KHRpbWUxU3BsaXRbMF0pICogMzYwMCArIHBhcnNlSW50KHRpbWUxU3BsaXRbMV0pICogNjAgKyBwYXJzZUludCh0aW1lMVNwbGl0WzJdKTtcbiAgICB2YXIgdGltZTJUb3RhbFNlY29uZHMgPSBwYXJzZUludCh0aW1lMlNwbGl0WzBdKSAqIDM2MDAgKyBwYXJzZUludCh0aW1lMlNwbGl0WzFdKSAqIDYwICsgcGFyc2VJbnQodGltZTJTcGxpdFsyXSk7XG4gICAgaWYodGltZTJUb3RhbFNlY29uZHMgLSB0aW1lMVRvdGFsU2Vjb25kcyA+ICg2MCAqIDMpIHx8IGRhdGUyID4gZGF0ZTEpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBhbGlnbihpdGVtKSB7XG4gIFx0aWYoaXRlbS5jaGF0TWVzc2FnZS51c2VySWQgPT09IHRoaXMudXNlcklkKVxuICBcdFx0cmV0dXJuIFwicmlnaHRcIjtcbiAgXHRlbHNlXG4gIFx0XHRyZXR1cm4gXCJsZWZ0XCI7XG4gIH1cblxuICBhbGlnblJldmVyc2UoaXRlbSkge1xuICAgIGlmKGl0ZW0uY2hhdE1lc3NhZ2UudXNlcklkID09PSB0aGlzLnVzZXJJZClcbiAgICAgIHJldHVybiBcImxlZnRcIjtcbiAgICBlbHNlXG4gICAgICByZXR1cm4gXCJyaWdodFwiO1xuICB9XG5cbiAgc2V0dXBJdGVtVmlldyhhcmdzKSB7XG4gIFx0YXJncy52aWV3LmNvbnRleHQubWluZSA9ICh0aGlzLm1lc3NhZ2VzLmdldEl0ZW0oYXJncy5pbmRleCkuY2hhdE1lc3NhZ2UudXNlcklkID09PSB0aGlzLnVzZXJJZCk7XG4gIFx0YXJncy52aWV3LmNvbnRleHQudGhlaXJzID0gKHRoaXMubWVzc2FnZXMuZ2V0SXRlbShhcmdzLmluZGV4KS5jaGF0TWVzc2FnZS51c2VySWQgIT09IHRoaXMudXNlcklkKTtcbiAgICBhcmdzLnZpZXcuY29udGV4dC5taW5lQ29udGludWF0aW9uID0gKHRoaXMubWVzc2FnZXMuZ2V0SXRlbShhcmdzLmluZGV4KS5taW5lQ29udGludWF0aW9uKTtcbiAgICBhcmdzLnZpZXcuY29udGV4dC50aGVpcnNDb250aW51YXRpb24gPSAodGhpcy5tZXNzYWdlcy5nZXRJdGVtKGFyZ3MuaW5kZXgpLnRoZWlyc0NvbnRpbnVhdGlvbik7XG4gICAgYXJncy52aWV3LmNvbnRleHQubWluZUNvbnRpbnVhdGlvbkdyaWQgPSAodGhpcy5tZXNzYWdlcy5nZXRJdGVtKGFyZ3MuaW5kZXgpLm1pbmVDb250aW51YXRpb24pO1xuICAgIGFyZ3Mudmlldy5jb250ZXh0LnRoZWlyc0NvbnRpbnVhdGlvbkdyaWQgPSAodGhpcy5tZXNzYWdlcy5nZXRJdGVtKGFyZ3MuaW5kZXgpLnRoZWlyc0NvbnRpbnVhdGlvbik7XG5cbiAgICBhcmdzLnZpZXcuY29udGV4dC5ncmlkID0gKCFhcmdzLnZpZXcuY29udGV4dC50aGVpcnNDb250aW51YXRpb24gJiYgIWFyZ3Mudmlldy5jb250ZXh0Lm1pbmVDb250aW51YXRpb24pO1xuICAgIGFyZ3Mudmlldy5jb250ZXh0Lm1pbmVUaW1lID0gKCFhcmdzLnZpZXcuY29udGV4dC5taW5lQ29udGludWF0aW9uICYmIGFyZ3Mudmlldy5jb250ZXh0Lm1pbmUpO1xuICAgIGFyZ3Mudmlldy5jb250ZXh0LnRoZWlyc1RpbWUgPSAoIWFyZ3Mudmlldy5jb250ZXh0LnRoZWlyc0NvbnRpbnVhdGlvbiAmJiBhcmdzLnZpZXcuY29udGV4dC50aGVpcnMpO1xuICAgIFxuICAgIGFyZ3Mudmlldy5jb250ZXh0LnRpbWUgPSAoIWFyZ3Mudmlldy5jb250ZXh0Lm1pbmVUaW1lICYmICFhcmdzLnZpZXcuY29udGV4dC50aGVpcnNUaW1lKSAgICBcbiAgICBhcmdzLnZpZXcuY29udGV4dC5ldmVuID0gKGFyZ3MuaW5kZXggJSAyID09PSAwKTtcbiAgXHRhcmdzLnZpZXcuY29udGV4dC5vZGQgPSAoYXJncy5pbmRleCAlIDIgPT09IDEpO1xuICB9XG5cbiAgb25OYXZCdG5UYXAoKSB7XG4gIFx0aWYodGhpcy5yb3V0ZXIuY2FuR29CYWNrKCkpXG4gIFx0XHR0aGlzLnJvdXRlci5iYWNrKCk7XG4gIFx0ZWxzZVxuICBcdFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUoWydjaGF0LWxpc3QnXSwge2NsZWFySGlzdG9yeTogdHJ1ZX0pO1xuICB9XG5cbiAgb25UZXh0VGFwKCkge1xuICAgIHRoaXMubGlzdC5zY3JvbGxUb0luZGV4KHRoaXMubWVzc2FnZXMubGVuZ3RoIC0gMSk7XG4gIH1cblxuICBsb2FkTW9yZURhdGEoKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ0xvYWQgbW9yZScpXG4gIH1cblxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi8qIEFkZCBtb2JpbGUgc3R5bGVzIGZvciB0aGUgY29tcG9uZW50IGhlcmUuICAqL1xcbi5kZWxldGUtYnRuIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGNvbG9yOiAjYWMwMGU2O1xcbiAgICAvKnBhZGRpbmc6IDZweCAyNHB4OyovXFxuICAgIGJvcmRlci13aWR0aDogMTtcXG4gICAgYm9yZGVyLWNvbG9yOiAjYWMwMGU2O1xcbiAgICBib3JkZXItcmFkaXVzOiA1O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZsb2F0OiBjZW50ZXI7XFxuICAgIG1hcmdpbjogYXV0bzsgXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiU2Vnb2UgVUlcXFwiLEFyaWFsLHNhbnMtc2VyaWY7XFxuICAgIG1hcmdpbi1ib3R0b206IDE1O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDE1O1xcbiAgICB3aWR0aDogMTIwO1xcbiAgICBoZWlnaHQ6IDQwO1xcbiAgICBob3Jpem9udGFsLWFsaWduOnJpZ2h0O1xcbn1cXG5cXG4uZGVsZXRlLWJ0bjpoaWdobGlnaHRlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWU2ZmY7XFxufVxcblxcbi5jYW5jZWwtYnRuIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIC8qY29sb3I6IHdoaXRlOyovXFxuICAgIC8qcGFkZGluZzogNnB4IDI0cHg7Ki9cXG4gICAgYm9yZGVyLXdpZHRoOiAxO1xcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiA1O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZsb2F0OiBjZW50ZXI7XFxuICAgIG1hcmdpbjogYXV0bzsgXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiU2Vnb2UgVUlcXFwiLEFyaWFsLHNhbnMtc2VyaWY7XFxuICAgIG1hcmdpbi1ib3R0b206IDE1O1xcbiAgICBtYXJnaW4tbGVmdDogMTU7XFxuICAgIHdpZHRoOiAxMjA7XFxuICAgIGhlaWdodDogNDA7XFxuICAgIGhvcml6b250YWwtYWxpZ246bGVmdDtcXG59XFxuXFxuLmNhbmNlbC1idG46aGlnaGxpZ2h0ZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xcbn1cXG5cXG4uZGVsZXRlLWxhYmVsIHtcXG5cXHRmb250LXNpemU6IDIwO1xcblxcdG1hcmdpbi10b3A6IDE4O1xcblxcdG1hcmdpbi1ib3R0b206IDQ4O1xcblxcdG1hcmdpbi1sZWZ0OiAxODtcXG5cXHRtYXJnaW4tcmlnaHQ6IDE4O1xcblxcdGNvbG9yOiBibGFjaztcXG59XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPFN0YWNrTGF5b3V0PlxcblxcdDxMYWJlbCB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgdGV4dD1cXFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZT9cXFwiIGNsYXNzPVxcXCJkZWxldGUtbGFiZWxcXFwiPjwvTGFiZWw+XFxuXFx0PEdyaWRMYXlvdXQgcm93cz1cXFwiYXV0b1xcXCIgY29sdW1ucz1cXFwiKlxcXCI+XFxuXFx0XFx0PEJ1dHRvbiByb3c9XFxcIjBcXFwiIHRleHQ9XFxcIkNhbmNlbFxcXCIgY2xhc3M9XFxcImNhbmNlbC1idG5cXFwiICh0YXApPVxcXCJjbG9zZSgnY2FuY2VsJylcXFwiPjwvQnV0dG9uPlxcblxcdFxcdDxCdXR0b24gcm93PVxcXCIwXFxcIiB0ZXh0PVxcXCJEZWxldGVcXFwiIGNsYXNzPVxcXCJkZWxldGUtYnRuXFxcIiAodGFwKT1cXFwiY2xvc2UoJ2RlbGV0ZScpXFxcIj48L0J1dHRvbj5cXG5cXHQ8L0dyaWRMYXlvdXQ+XFxuPC9TdGFja0xheW91dD5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNb2RhbERpYWxvZ1BhcmFtcyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9kaXJlY3RpdmVzL2RpYWxvZ3NcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWNvbmZpcm1hdGlvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9jb25maXJtYXRpb24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jb25maXJtYXRpb24uY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIENvbmZpcm1hdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwYXJhbXM6IE1vZGFsRGlhbG9nUGFyYW1zKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIGNsb3NlKHJlcykge1xuICBcdHRoaXMucGFyYW1zLmNsb3NlQ2FsbGJhY2socmVzKTtcbiAgfVxuXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLypcXG5BZGQgeW91ciBOYXRpdmVTY3JpcHQgc3BlY2lmaWMgc3R5bGVzIGhlcmUuXFxuVG8gbGVhcm4gbW9yZSBhYm91dCBzdHlsaW5nIGluIE5hdGl2ZVNjcmlwdCBzZWU6XFxuaHR0cHM6Ly9kb2NzLm5hdGl2ZXNjcmlwdC5vcmcvYW5ndWxhci91aS9zdHlsaW5nXFxuKi9cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8U3RhY2tMYXlvdXQ+XFxuICA8TGFiZWwgdGV4dD1cXFwiY29ubmVjdCB3b3Jrc1xcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiPjwvTGFiZWw+XFxuICA8TGFiZWwgdGV4dD1cXFwiVGhpcyBpcyBhIG1pZ3JhdGVkIGNvbXBvbmVudFxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiPjwvTGFiZWw+XFxuICA8TGFiZWwgdGV4dD1cXFwiVXBkYXRlIGl0IHRvIHByb3ZpZGUgdGhlIFVJIGVsZW1lbnRzIHJlcXVpcmVkIGluIHlvdXIgbW9iaWxlIGFwcFxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiPjwvTGFiZWw+XFxuPC9TdGFja0xheW91dD5cXG5cXG48IS0tXFxuT3JpZ2luYWwgV2ViIHRlbXBsYXRlOlxcblxcbjxwPlxcbiAgY29ubmVjdCB3b3JrcyFcXG48L3A+XFxuXFxuLS0+XCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTG9naW5jaGVja1NlcnZpY2UgfSBmcm9tICcuLi9sb2dpbmNoZWNrLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtY29ubmVjdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9jb25uZWN0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY29ubmVjdC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ29ubmVjdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBsb2dpbmNoZWNrU2VydmljZTogTG9naW5jaGVja1NlcnZpY2UpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICBcdHRoaXMubG9naW5jaGVja1NlcnZpY2UubG9naW5DaGVjaygpO1xuICB9XG5cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBUcmFuc2ZlclNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOlJvdXRlcikgeyB9XG5cbiAgcHJpdmF0ZSBkYXRhO1xuXG4gIHNldERhdGEoZGF0YSl7XG4gICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgfVxuXG4gIGdldERhdGEoKXtcbiAgICBsZXQgdGVtcCA9IHRoaXMuZGF0YTtcbiAgICB0aGlzLmNsZWFyRGF0YSgpO1xuICAgIHJldHVybiB0ZW1wO1xuICB9XG5cbiAgY2xlYXJEYXRhKCl7XG4gICAgdGhpcy5kYXRhID0gdW5kZWZpbmVkO1xuICB9XG5cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IFwicCB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2Q4YzNlYztcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNjbG9zZS1kaWFsb2cge1xcblxcdGZsb2F0OiByaWdodDtcXG59XFxuXFxuLmNsb3NlIHtcXG5cXHRmb250LWNvbG9yOiBibGFjaztcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNWVtO1xcbn1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8cCBpZD1cXFwiZGlhbG9nXFxcIj5cXG4gIFlvdXIgc2V0dGluZ3MgaGF2ZSBiZWVuIHVwZGF0ZWQhXFxuICA8c3BhbiBjbGFzcz1cXFwiY2xvc2VcXFwiIGlkPVxcXCJjbG9zZS1kaWFsb2dcXFwiPiZ0aW1lczs8L3NwYW4+XFxuPC9wPlxcblwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWRpYWxvZycsXG4gIHRlbXBsYXRlVXJsOiAnLi9kaWFsb2cuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9kaWFsb2cuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIERpYWxvZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgXHRcbiAgfVxuXG59XG4iLCJpbXBvcnQge1xuICAgIEluamVjdGFibGUsXG4gICAgSW5qZWN0b3IsXG4gICAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgIEVtYmVkZGVkVmlld1JlZixcbiAgICBBcHBsaWNhdGlvblJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgUG9zdGluZ0NvbXBvbmVudCB9IGZyb20gJy4vcG9zdGluZy9wb3N0aW5nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQYXltZW50TWV0aG9kQ29tcG9uZW50IH0gZnJvbSAnLi9wYXltZW50LW1ldGhvZC9wYXltZW50LW1ldGhvZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVHJhbnNmZXJTZXJ2aWNlIH0gZnJvbSAnLi9kYXRhdHJhbnNmZXIuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEeW5hbWljQWRkU2VydmljZSB7XG4gIFxuICBjb25zdHJ1Y3RvcihcbiAgICAgIHByaXZhdGUgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgICBwcml2YXRlIGFwcFJlZjogQXBwbGljYXRpb25SZWYsXG4gICAgICBwcml2YXRlIGluamVjdG9yOiBJbmplY3RvcixcbiAgICAgIHByaXZhdGUgdHJhbnNmZXJTZXJ2aWNlOiBUcmFuc2ZlclNlcnZpY2UsXG4gICkgeyB9XG4gIFxuICBhcHBlbmRDb21wb25lbnRUb0JvZHkobGF5b3V0PW51bGwpIHtcbiAgICAvLyAxLiBDcmVhdGUgYSBjb21wb25lbnQgcmVmZXJlbmNlIGZyb20gdGhlIGNvbXBvbmVudCBcbiAgICBjb25zdCBjb21wb25lbnRSZWYgPSB0aGlzLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlclxuICAgICAgLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KFBvc3RpbmdDb21wb25lbnQpXG4gICAgICAuY3JlYXRlKHRoaXMuaW5qZWN0b3IpO1xuICAgIC8vIDIuIEF0dGFjaCBjb21wb25lbnQgdG8gdGhlIGFwcFJlZiBzbyB0aGF0IGl0J3MgaW5zaWRlIHRoZSBuZyBjb21wb25lbnQgdHJlZVxuICAgIHRoaXMuYXBwUmVmLmF0dGFjaFZpZXcoY29tcG9uZW50UmVmLmhvc3RWaWV3KTtcbiAgICAvLyAzLiBHZXQgRE9NIGVsZW1lbnQgZnJvbSBjb21wb25lbnRcbiAgICBjb25zdCBkb21FbGVtID0gKGNvbXBvbmVudFJlZi5ob3N0VmlldyBhcyBFbWJlZGRlZFZpZXdSZWY8YW55PilcbiAgICAgIC5yb290Tm9kZXNbMF07XG4gICAgLy8gNC4gQXBwZW5kIERPTSBlbGVtZW50IHRvIHRoZSBib2R5XG4gICAgbGF5b3V0LmFkZENoaWxkKGRvbUVsZW0pXG4gIH1cblxuICBhcHBlbmRQYXltZW50TWV0aG9kKG1ldGhvZCwgaW5mbywgc3VwZXJib2R5LCBpc0FkZCwgdG9rZW4pIHtcblxuICB9XG59IiwiaW1wb3J0IHtcbiAgICBJbmplY3RhYmxlLFxuICAgIEluamVjdG9yLFxuICAgIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICBFbWJlZGRlZFZpZXdSZWYsXG4gICAgQXBwbGljYXRpb25SZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFBvc3RpbmdDb21wb25lbnQgfSBmcm9tICcuL3Bvc3RpbmcvcG9zdGluZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGF5bWVudE1ldGhvZENvbXBvbmVudCB9IGZyb20gJy4vcGF5bWVudC1tZXRob2QvcGF5bWVudC1tZXRob2QuY29tcG9uZW50JztcbmltcG9ydCB7IFRyYW5zZmVyU2VydmljZSB9IGZyb20gJy4vZGF0YXRyYW5zZmVyLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRHluYW1pY0FkZFNlcnZpY2Uge1xuICBcbiAgY29uc3RydWN0b3IoXG4gICAgICBwcml2YXRlIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgICAgcHJpdmF0ZSBhcHBSZWY6IEFwcGxpY2F0aW9uUmVmLFxuICAgICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsXG4gICAgICBwcml2YXRlIHRyYW5zZmVyU2VydmljZTogVHJhbnNmZXJTZXJ2aWNlLFxuICApIHsgfVxuICBcbiAgYXBwZW5kQ29tcG9uZW50VG9Cb2R5KGxheW91dD1udWxsKSB7XG4gICAgLy8gMS4gQ3JlYXRlIGEgY29tcG9uZW50IHJlZmVyZW5jZSBmcm9tIHRoZSBjb21wb25lbnQgXG4gICAgY29uc3QgY29tcG9uZW50UmVmID0gdGhpcy5jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXJcbiAgICAgIC5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShQb3N0aW5nQ29tcG9uZW50KVxuICAgICAgLmNyZWF0ZSh0aGlzLmluamVjdG9yKTtcbiAgICAvLyAyLiBBdHRhY2ggY29tcG9uZW50IHRvIHRoZSBhcHBSZWYgc28gdGhhdCBpdCdzIGluc2lkZSB0aGUgbmcgY29tcG9uZW50IHRyZWVcbiAgICB0aGlzLmFwcFJlZi5hdHRhY2hWaWV3KGNvbXBvbmVudFJlZi5ob3N0Vmlldyk7XG4gICAgLy8gMy4gR2V0IERPTSBlbGVtZW50IGZyb20gY29tcG9uZW50XG4gICAgY29uc3QgZG9tRWxlbSA9IChjb21wb25lbnRSZWYuaG9zdFZpZXcgYXMgRW1iZWRkZWRWaWV3UmVmPGFueT4pXG4gICAgICAucm9vdE5vZGVzWzBdO1xuICAgIC8vIDQuIEFwcGVuZCBET00gZWxlbWVudCB0byB0aGUgYm9keVxuICAgIGxheW91dC5hZGRDaGlsZChkb21FbGVtKVxuICB9XG5cbiAgYXBwZW5kUGF5bWVudE1ldGhvZChtZXRob2QsIGluZm8sIHN1cGVyYm9keSwgaXNBZGQsIHRva2VuKSB7XG5cbiAgfVxufSIsIm1vZHVsZS5leHBvcnRzID0gXCIuZmxvYXQtYnRuIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjYWMwMGU2O1xcblxcdHdpZHRoOiA1NjtcXG5cXHRoZWlnaHQ6IDU2O1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcblxcdGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLmZsb2F0LWJ0bi10ZXh0IHtcXG5cXHRjb2xvcjogI2ZmZmZmZjtcXG5cXHRmb250LXNpemU6IDM2O1xcblxcdC8qbWFyZ2luLXRvcDogLTY7Ki9cXG59XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJmbG9hdC1idG5cXFwiPlxcblxcdDxMYWJlbCBjbGFzcz1cXFwiZmxvYXQtYnRuLXRleHRcXFwiIHRleHQ9XFxcIitcXFwiPjwvTGFiZWw+XFxuPC9TdGFja0xheW91dD5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1mbG9hdC1idG4nLFxuICB0ZW1wbGF0ZVVybDogJy4vZmxvYXQtYnRuLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZmxvYXQtYnRuLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBGbG9hdEJ0bkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBHb29nbGVNYXBzU2VydmljZSB7XG5cbiAgQVBJX0tFWSA9ICdBSXphU3lBSVR4UzFqbWY4UE10YXpSZ3VXY0FmV1F4VzFrUE9vWWcnO1xuICBzdGF0aWNfbWFwc191cmkgPSAnaHR0cHM6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL3N0YXRpY21hcD9rZXk9JyArIHRoaXMuQVBJX0tFWSArICcmc2l6ZT0zNDB4MjIwJnNjYWxlPTImbWFwdHlwZT1yb2FkbWFwXFwmbWFya2Vycz1zaXplOnNtYWxsJTdDY29sb3I6cmVkJTdDJ1xuICBzdGF0aWNfbWFwc191cmlfbGFyZ2UgPSAnaHR0cHM6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL3N0YXRpY21hcD9rZXk9JyArIHRoaXMuQVBJX0tFWSArICcmc2l6ZT01MTJ4NTEyJnNjYWxlPTImbWFwdHlwZT1yb2FkbWFwXFwmbWFya2Vycz1zaXplOnNtYWxsJTdDY29sb3I6cmVkJTdDJ1xuICBcbiAgZ2VvY29kZV91cmkgPSAnaHR0cHM6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL2dlb2NvZGUvanNvbj9rZXk9JyArIHRoaXMuQVBJX0tFWSArICcmYWRkcmVzcz0nXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cENsaWVudDogSHR0cENsaWVudCkgeyB9XG5cbiAgZ2V0U3RhdGljTWFwKHN0YXJ0YWRyLCBlbmRhZHIpIHtcbiAgXHR2YXIgZm9ybWF0dGVkX3N0YXJ0YWRyID0gc3RhcnRhZHIuc3BsaXQoJyAnKS5qb2luKCcrJylcbiAgXHR2YXIgZm9ybWF0dGVkX3N0YXJ0YWRyID0gc3RhcnRhZHIuc3BsaXQoJyYnKS5qb2luKCdhbmQnKVxuICBcdHZhciBmb3JtYXR0ZWRfZW5kYWRyID0gZW5kYWRyLnNwbGl0KCcgJykuam9pbignKycpXG4gIFx0dmFyIGZvcm1hdHRlZF9lbmRhZHIgPSBlbmRhZHIuc3BsaXQoJyYnKS5qb2luKCdhbmQnKVxuICBcdHJldHVybiB0aGlzLnN0YXRpY19tYXBzX3VyaSArIGZvcm1hdHRlZF9zdGFydGFkciArIFwiJm1hcmtlcnM9c2l6ZTptZWQlN0NcIiArIGZvcm1hdHRlZF9lbmRhZHI7XG4gIH1cblxuICBnZXRTdGF0aWNNYXBMYXJnZShzdGFydGFkciwgZW5kYWRyKSB7XG4gIFx0dmFyIGZvcm1hdHRlZF9zdGFydGFkciA9IHN0YXJ0YWRyLnNwbGl0KCcgJykuam9pbignKycpXG4gIFx0dmFyIGZvcm1hdHRlZF9zdGFydGFkciA9IHN0YXJ0YWRyLnNwbGl0KCcmJykuam9pbignYW5kJylcbiAgXHR2YXIgZm9ybWF0dGVkX2VuZGFkciA9IGVuZGFkci5zcGxpdCgnICcpLmpvaW4oJysnKVxuICBcdHZhciBmb3JtYXR0ZWRfZW5kYWRyID0gZW5kYWRyLnNwbGl0KCcmJykuam9pbignYW5kJylcbiAgXHRyZXR1cm4gdGhpcy5zdGF0aWNfbWFwc191cmlfbGFyZ2UgKyBmb3JtYXR0ZWRfc3RhcnRhZHIgKyBcIiZtYXJrZXJzPXNpemU6bWVkJTdDXCIgKyBmb3JtYXR0ZWRfZW5kYWRyO1xuICB9XG5cbiAgZ2V0R2VvY29kZVJlc3VsdHMoYWRkcmVzcykge1xuICBcdHZhciBmb3JtYXR0ZWRfYWRkcmVzcyA9IGFkZHJlc3Muc3BsaXQoJyAnKS5qb2luKCcrJylcbiAgXHR2YXIgZm9ybWF0dGVkX2FkZHJlc3MgPSBhZGRyZXNzLnNwbGl0KCcmJykuam9pbignYW5kJylcbiAgXHRyZXR1cm4gdGhpcy5odHRwQ2xpZW50LmdldChgJHt0aGlzLmdlb2NvZGVfdXJpfWAgKyBmb3JtYXR0ZWRfYWRkcmVzcyk7XG4gIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gXCIvKlxcbkFkZCB5b3VyIE5hdGl2ZVNjcmlwdCBzcGVjaWZpYyBzdHlsZXMgaGVyZS5cXG5UbyBsZWFybiBtb3JlIGFib3V0IHN0eWxpbmcgaW4gTmF0aXZlU2NyaXB0IHNlZTpcXG5odHRwczovL2RvY3MubmF0aXZlc2NyaXB0Lm9yZy9hbmd1bGFyL3VpL3N0eWxpbmdcXG4qL1xcblxcbi5hY3Rpb25iYXIge1xcblxcdGZvbnQtc2l6ZTogMjI7XFxuXFx0Zm9udC13ZWlnaHQ6IDcwMDtcXG5cXHR0ZXh0LWFsaWduOiBsZWZ0O1xcblxcdGNvbG9yOiBibGFjaztcXG59XFxuXFxuTGFiZWwge1xcblxcdHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblxcbi5uYW1lLWxhYmVsIHtcXG5cXHRtYXJnaW4tdG9wOiAxNjtcXG5cXHRtYXJnaW4tbGVmdDogMTg7XFxuXFx0Y29sb3I6IGJsYWNrO1xcblxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxuXFx0Zm9udC1zaXplOiAxNztcXG59XFxuXFxuLmluZm8tbGFiZWwge1xcblxcdG1hcmdpbi10b3A6IDQ7XFxuXFx0bWFyZ2luLWxlZnQ6IDE4O1xcblxcdG1hcmdpbi1ib3R0b206IDE2O1xcblxcdGNvbG9yOiBibGFjaztcXG59XFxuXFxuLnBvc3Qge1xcblxcdGJvcmRlci1ib3R0b20td2lkdGg6IDE7XFxuXFx0Ym9yZGVyLWNvbG9yOiAjZjFmMWYxO1xcblxcdG1hcmdpbi10b3A6IDE1MDtcXG5cXHRtYXJnaW4tYm90dG9tOiAxNTtcXG59XFxuXFxuLnBvc3Q6aGlnaGxpZ2h0ZWQge1xcblxcdC8qYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTsqL1xcbn1cXG5cXG4ucG9zdGluZy1tYXAge1xcblxcdG1hcmdpbi1ib3R0b206IDE2O1xcblxcdGJvcmRlci1yYWRpdXM6IDEwO1xcblxcdGhlaWdodDogMjIwO1xcblxcdHdpZHRoOiAzNDA7XFxufVxcblxcbi5wcm9maWxlLXBpY3R1cmUge1xcblxcdGhlaWdodDogNTA7XFxuXFx0d2lkdGg6IDUwO1xcblxcdGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuXFx0dmVydGljYWwtYWxpZ246IHRvcDtcXG5cXHRtYXJnaW4tbGVmdDogMTY7XFxuXFx0bWFyZ2luLXRvcDogMjA7XFxufVxcblxcbi5yZWZyZXNoIHtcXG5cXHRjb2xvcjogI2FjMDBlNjtcXG59XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPCEtLSA8YXBwLW5hdmlnYXRpb24+PC9hcHAtbmF2aWdhdGlvbj4gLS0+XFxuPFB1bGxUb1JlZnJlc2ggKHJlZnJlc2gpPVxcXCJyZWZyZXNoTGlzdCgkZXZlbnQpXFxcIiBjbGFzcz1cXFwicmVmcmVzaFxcXCI+XFxuXFx0PExpc3RWaWV3IFtpdGVtc109XFxcInBvc3RpbmdzXFxcIiAoaXRlbVRhcCk9XFxcIm9uSXRlbVRhcCgkZXZlbnQpXFxcIiAjbGlzdFZpZXcgaWQ9XFxcImxpc3RWaWV3XFxcIj5cXG5cXHQgICAgPG5nLXRlbXBsYXRlIGxldC1pdGVtPVxcXCJpdGVtXFxcIiBsZXQtaT1cXFwiaW5kZXhcXFwiIGxldC1vZGQ9XFxcIm9kZFxcXCIgbGV0LWV2ZW49XFxcImV2ZW5cXFwiPlxcblxcdCAgICAgICAgPFN0YWNrTGF5b3V0IFtjbGFzcy5vZGRdPVxcXCJvZGRcXFwiIFtjbGFzcy5ldmVuXT1cXFwiZXZlblxcXCIgY2xhc3M9XFxcInBvc3RcXFwiPlxcblxcdCAgICAgICAgXFx0ICA8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XFxcImhvcml6b250YWxcXFwiPlxcblxcdCAgICAgICAgXFx0ICBcXHQ8SW1hZ2UgW3NyY109XFxcIml0ZW0ucHJvZmlsZVNvdXJjZVxcXCIgY2xhc3M9XFxcInByb2ZpbGUtcGljdHVyZVxcXCIgc3RyZXRjaD1cXFwiYXNwZWN0Rml0XFxcIj48L0ltYWdlPlxcblxcdCAgICAgICAgXFx0ICBcXHQ8U3RhY2tMYXlvdXQ+XFxuXFx0XFx0ICAgICAgICAgICAgICBcXHQ8TGFiZWwgdGV4dFdyYXA9XFxcInRydWVcXFwiIGlkPVxcXCJwb3N0LW5hbWVcXFwiIGNsYXNzPVxcXCJuYW1lLWxhYmVsXFxcIiBbdGV4dF09XFxcIml0ZW0udXNlcm5hbWVcXFwiPjwvTGFiZWw+XFxuXFx0XFx0ICAgICAgICAgICAgICBcXHQ8TGFiZWwgdGV4dFdyYXA9XFxcInRydWVcXFwiIGlkPVxcXCJwb3N0LWluZm9cXFwiIGNsYXNzPVxcXCJpbmZvLWxhYmVsXFxcIiBbdGV4dF09XFxcIml0ZW0uaW5mb1xcXCI+PC9MYWJlbD5cXG5cXHRcXHQgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcblxcdCAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG5cXHRcXHRcXHRcXHQgIDxJbWFnZSBbc3JjXT1cXFwiaXRlbS5tYXBTb3VyY2VcXFwiIHN0cmV0Y2g9XFxcImFzcGVjdEZpdFxcXCIgY2xhc3M9XFxcInBvc3RpbmctbWFwXFxcIj48L0ltYWdlPlxcblxcdCAgICAgICAgPC9TdGFja0xheW91dD5cXG5cXHQgICAgPC9uZy10ZW1wbGF0ZT5cXG5cXHQ8L0xpc3RWaWV3PlxcbjwvUHVsbFRvUmVmcmVzaD5cXG5cXG48IS0tXFxuT3JpZ2luYWwgV2ViIHRlbXBsYXRlOlxcblxcbjxhcHAtbmF2aWdhdGlvbj48L2FwcC1uYXZpZ2F0aW9uPlxcblxcbjxkaXYgY2xhc3M9XFxcInJpZ2h0LWJhY2tncm91bmRcXFwiPlxcblxcdDxkaXYgY2xhc3M9XFxcInVzZXItY2FyZC1yaWdodCBpbmZvXFxcIj5cXG5cXHRcXHQ8aW1nIHNyYz1cXFwic3JjL2ltZy9zYW1wbGVfcHJvZmlsZS5qcGdcXFwiIGFsdD1cXFwiUHJvZmlsZSBQaG90b1xcXCIgaWQ9XFxcInByb2ZpbGVfcGljXFxcIj5cXG5cXHRcXHQ8ZGl2IGlkPVxcXCJuYW1lX2luZm9cXFwiPlxcblxcdFxcdFxcdDxoMyBpZD1cXFwidXNlcm5hbWVcXFwiPnt7dXNlci5uYW1lfX08L2gzPlxcblxcdFxcdFxcdDxoMyBpZD1cXFwidXNlcl91bml2ZXJzaXR5XFxcIj5Vbml2ZXJzaXR5IG9mIFZpcmdpbmlhPC9oMz5cXG5cXHRcXHQ8L2Rpdj5cXG5cXHRcXHQ8ZGl2IGNsYXNzPVxcXCJ1c2VyU3RhdHNcXFwiPlxcblxcdFxcdFxcdDxzcGFuIGlkPVxcXCJ1c2VyX3JpZGVzX2dpdmVuXFxcIiBjbGFzcz1cXFwidXNlckRhdGFcXFwiPlJpZGVzIEdpdmVuOiA8L3NwYW4+XFxuXFx0XFx0XFx0PHNwYW4gaWQ9XFxcIm51bV9yaWRlc19naXZlblxcXCI+PC9zcGFuPlxcblxcdFxcdFxcdDxzcGFuIGlkPVxcXCJ1c2VyX3JpZGVzX3JlY2VpdmVkXFxcIiBjbGFzcz1cXFwidXNlckRhdGFcXFwiPlJpZGVzIFJlY2VpdmVkOiA8L3NwYW4+XFxuXFx0XFx0XFx0PHNwYW4gaWQ9XFxcIm51bV9yaWRlc19yZWNlaXZlZFxcXCI+PC9zcGFuPlxcblxcdFxcdDwvZGl2PlxcblxcdDwvZGl2PlxcbjwvZGl2PlxcbjxkaXYgaWQ9XFxcImhpc3RvcnlcXFwiIGNsYXNzPVxcXCJ0YWJjb250ZW50XFxcIj5cXG5cXHQ8aDMgYWxpZ249XFxcImNlbnRlclxcXCI+WW91ciBSaWRlczwvaDM+XFxuXFx0PGRpdiBpZD1cXFwiYmlnZmVlZFxcXCIgKHdpbmRvdzpyZXNpemUpPVxcXCJvblJlc2l6ZSgkZXZlbnQpXFxcIj48L2Rpdj5cXG48L2Rpdj5cXG4tLT5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRyYW5zZmVyU2VydmljZSB9IGZyb20gJy4uL2RhdGF0cmFuc2Zlci5zZXJ2aWNlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBQb3N0aW5nU2VydmljZSB9IGZyb20gJy4uL3Bvc3Rpbmcuc2VydmljZSc7XG5pbXBvcnQgeyBQb3N0aW5nIH0gZnJvbSAnLi4vcG9zdGluZy5tb2RlbCc7XG5pbXBvcnQgeyBEeW5hbWljQWRkU2VydmljZSB9IGZyb20gJy4uL2R5bmFtaWMtYWRkLnNlcnZpY2UnO1xuaW1wb3J0IHsgTG9naW5jaGVja1NlcnZpY2UgfSBmcm9tICcuLi9sb2dpbmNoZWNrLnNlcnZpY2UnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZUFycmF5IH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUtYXJyYXknO1xuaW1wb3J0ICogYXMgZmlyZWJhc2UgZnJvbSAnbmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZSc7XG5pbXBvcnQgeyBMaXN0VmlldyB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvbGlzdC12aWV3JztcbmltcG9ydCB7IEltYWdlU291cmNlLCBmcm9tRmlsZSwgZnJvbVJlc291cmNlLCBmcm9tQmFzZTY0LCBmcm9tTmF0aXZlU291cmNlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvaW1hZ2Utc291cmNlXCI7XG5pbXBvcnQgeyBGb2xkZXIsIHBhdGgsIGtub3duRm9sZGVycyB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2ZpbGUtc3lzdGVtXCI7XG5pbXBvcnQgeyBDYWNoZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ltYWdlLWNhY2hlXCI7XG5cblxuY2xhc3MgUG9zdEl0ZW0ge1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB1c2VybmFtZTogU3RyaW5nLCBwdWJsaWMgaW5mbzogc3RyaW5nLCBwdWJsaWMgcHJvZmlsZVNvdXJjZTogc3RyaW5nLCBwdWJsaWMgbWFwU291cmNlOiBzdHJpbmcpIHsgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtaGlzdG9yeScsXG4gIHRlbXBsYXRlVXJsOiAnLi9oaXN0b3J5LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vaGlzdG9yeS5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgSGlzdG9yeUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQFZpZXdDaGlsZCgnbGlzdFZpZXcnLCB7IHN0YXRpYzogdHJ1ZSB9KSBsdjogRWxlbWVudFJlZjtcbiAgLy91c2VyID0gdGhpcy5sb2dpbmNoZWNrU2VydmljZS5nZXRVc2VyKCk7XG4gIHVzZXIgPSAnJztcbiAgbmFtZSA9IFwiQWRhbSBZZWVcIjtcbiAgYmxvY2tzID0gMDtcbiAgcG9zdGluZ3MgPSBuZXcgT2JzZXJ2YWJsZUFycmF5PFBvc3RJdGVtPigpO1xuICBwID0gW107XG4gIGlkcyA9IFtdO1xuICBjYWNoZSA9IG5ldyBDYWNoZSgpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbG9naW5jaGVja1NlcnZpY2U6IExvZ2luY2hlY2tTZXJ2aWNlLCBwcml2YXRlIHRyYW5zZmVyU2VydmljZTogVHJhbnNmZXJTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHBvc3RpbmdTZXJ2aWNlOiBQb3N0aW5nU2VydmljZSwgcHJpdmF0ZSBhZGRTZXJ2aWNlOiBEeW5hbWljQWRkU2VydmljZSkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIFx0dGhpcy5sb2dpbmNoZWNrU2VydmljZS5sb2dpbkNoZWNrKCk7XG4gIFx0dGhpcy51c2VyID0gdGhpcy5sb2dpbmNoZWNrU2VydmljZS5nZXRVc2VyKClcbiAgXHR0aGlzLmxvYWRQb3N0aW5ncygpO1xuICB9XG5cbiAgbG9hZFBvc3RpbmdzKGFyZ3M9bnVsbCkge1xuICAgIHRoaXMucG9zdGluZ3Muc3BsaWNlKDApO1xuICAgIHZhciBwb3N0SWRzID0gW107XG4gICAgdmFyIHBvc3RpbmdzQ29sbGVjdGlvbiA9IGZpcmViYXNlLmZpcmVzdG9yZS5jb2xsZWN0aW9uKCdwb3N0aW5ncycpO1xuICAgIHZhciB1c2Vyc0NvbGxlY3Rpb24gPSBmaXJlYmFzZS5maXJlc3RvcmUuY29sbGVjdGlvbigndXNlcnMnKS5kb2ModGhpcy51c2VyKTtcbiAgICB1c2Vyc0NvbGxlY3Rpb24uZ2V0KCkudGhlbihkb2MgPT4ge1xuICAgIFx0cG9zdElkcyA9IGRvYy5kYXRhKCkucG9zdHM7XG4gICAgXHRmb3IodmFyIGkgPSAwOyBpIDwgcG9zdElkcy5sZW5ndGg7IGkrKykge1xuICAgIFx0XHRwb3N0aW5nc0NvbGxlY3Rpb24uZG9jKHBvc3RJZHNbaV0pLmdldCgpLnRoZW4oZG9jID0+IHtcbiAgICAgICAgICB0aGlzLmNyZWF0ZVBvc3RpbmcoZG9jLmRhdGEoKSwgZG9jLmlkKTtcbiAgICBcdFx0fSlcbiAgICBcdH1cbiAgICBcdGlmKGFyZ3MgIT0gbnVsbCkge1xuXHQgICAgICAgIHZhciBwdWxsUmVmcmVzaCA9IGFyZ3Mub2JqZWN0O1xuXHQgICAgICAgIHB1bGxSZWZyZXNoLnJlZnJlc2hpbmcgPSBmYWxzZTtcblx0ICAgIH1cblx0ICAgIHZhciBsaXN0VmlldyA9IDxMaXN0Vmlldz4gdGhpcy5sdi5uYXRpdmVFbGVtZW50O1xuXHQgICAgbGlzdFZpZXcuc2Nyb2xsVG9JbmRleChwb3N0SWRzLmxlbmd0aCAtIDEpO1xuICAgIH0pXG4gIH1cblxuICBjcmVhdGVQb3N0aW5nKGRhdGEsIGlkKSB7XG4gICAgdGhpcy5jYWNoZS5wbGFjZWhvbGRlciA9IGZyb21GaWxlKFwifi9pbWcvZ3JheV9iYWNrZ3JvdW5kLmpwZ1wiKTtcbiAgICB0aGlzLmNhY2hlLm1heFJlcXVlc3RzID0gNTtcbiAgICBsZXQgaW5mb19sYWJlbCA9IFwiXCI7XG4gICAgaWYoZGF0YS5jYXBhY2l0eSAhPSBcIi0xXCIpXG4gICAgICBpbmZvX2xhYmVsID0gXCJPZmZlcmluZyByaWRlIGxlYXZpbmcgXCIgKyBkYXRhLmRhdGUgKyBcIiBmcm9tIFwiICsgZGF0YS5zdGFydEFkZHJlc3MgKyBcIiB0byBcIiArIGRhdGEuZW5kQWRkcmVzcyArIFwiIGZvciBcIiArIGRhdGEucHJpY2U7XG4gICAgZWxzZVxuICAgICAgaW5mb19sYWJlbCA9IFwiUmVxdWVzdGluZyByaWRlIGxlYXZpbmcgXCIgKyBkYXRhLmRhdGUgKyBcIiBmcm9tIFwiICsgZGF0YS5zdGFydEFkZHJlc3MgKyBcIiB0byBcIiArIGRhdGEuZW5kQWRkcmVzcztcbiAgICBjb25zdCB1c2Vyc0NvbGxlY3Rpb24gPSBmaXJlYmFzZS5maXJlc3RvcmUuY29sbGVjdGlvbigndXNlcnMnKTtcbiAgICB1c2Vyc0NvbGxlY3Rpb24uZG9jKGRhdGEudWlkKS5nZXQoKS50aGVuKChkb2MpID0+IHtcbiAgICAgIGlmKGRvYy5leGlzdHMpIHtcbiAgICAgICAgdmFyIHVybCA9IGRvYy5kYXRhKCkucHJvZmlsZV9zb3VyY2U7XG4gICAgICAgIGlmKHVybC5zdWJzdHJpbmcoMCwgMjcpID09PSAnaHR0cHM6Ly9ncmFwaC5mYWNlYm9vay5jb20vJylcbiAgICAgICAgICB1cmwgKz0gJz9oZWlnaHQ9MzAwJztcbiAgICAgICAgdGhpcy5wb3N0aW5ncy5wdXNoKG5ldyBQb3N0SXRlbShkYXRhLnVzZXIsIGluZm9fbGFiZWwsIHVybCwgZGF0YS5tYXBfdXJsKSk7XG4gICAgICAgIHRoaXMucC5wdXNoKGRhdGEpXG4gICAgICAgIHRoaXMuaWRzLnB1c2goaWQpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHJlZnJlc2hMaXN0KGFyZ3MpIHtcbiAgICB0aGlzLmxvYWRQb3N0aW5ncyhhcmdzKTtcbiAgfVxuXG4gIGFkZENhY2hlKHVybCkge1xuICAgIGxldCBjYWNoZWRJbWFnZVNvdXJjZTtcbiAgICBjb25zdCBteUltYWdlID0gdGhpcy5jYWNoZS5nZXQodXJsKTtcbiAgICBpZiAobXlJbWFnZSkge1xuICAgICAgICAvLyBJZiBwcmVzZW50IC0tIHVzZSBpdC5cbiAgICAgICAgY2FjaGVkSW1hZ2VTb3VyY2UgPSBmcm9tTmF0aXZlU291cmNlKG15SW1hZ2UpO1xuICAgICAgICByZXR1cm4gY2FjaGVkSW1hZ2VTb3VyY2U7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gSWYgbm90IHByZXNlbnQgLS0gcmVxdWVzdCBpdHMgZG93bmxvYWQgKyBwdXQgaXQgaW4gdGhlIGNhY2hlLlxuICAgICAgICB0aGlzLmNhY2hlLnB1c2goe1xuICAgICAgICAgICAga2V5OiB1cmwsXG4gICAgICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgICAgIGNvbXBsZXRlZDogKGltYWdlLCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodXJsID09PSBrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FjaGVkSW1hZ2VTb3VyY2UgPSBmcm9tTmF0aXZlU291cmNlKGltYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNhY2hlZEltYWdlU291cmNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgb25JdGVtVGFwKGFyZ3MpIHtcbiAgICB0aGlzLnRyYW5zZmVyU2VydmljZS5zZXREYXRhKHtcbiAgICAgIHBvc3RJbmZvOiB7aWQ6IHRoaXMuaWRzW2FyZ3MuaW5kZXhdLCBkYXRhOiB0aGlzLnBbYXJncy5pbmRleF19LFxuICAgICAgcG9zdEl0ZW06IHRoaXMucG9zdGluZ3MuZ2V0SXRlbShhcmdzLmluZGV4KVxuICAgIH0pXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydwb3N0aW5nLWluZm8nXSlcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2FwcEhvbWVdJ1xufSlcbmV4cG9ydCBjbGFzcyBIb21lRGlyZWN0aXZlIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLypcXG5BZGQgeW91ciBOYXRpdmVTY3JpcHQgc3BlY2lmaWMgc3R5bGVzIGhlcmUuXFxuVG8gbGVhcm4gbW9yZSBhYm91dCBzdHlsaW5nIGluIE5hdGl2ZVNjcmlwdCBzZWU6XFxuaHR0cHM6Ly9kb2NzLm5hdGl2ZXNjcmlwdC5vcmcvYW5ndWxhci91aS9zdHlsaW5nXFxuKi9cXG4ucmVmcmVzaCB7XFxuXFx0Y29sb3I6ICNhYzAwZTY7XFxufVxcblxcbi5hY3Rpb25iYXIge1xcblxcdGZvbnQtc2l6ZTogMjI7XFxuXFx0Zm9udC13ZWlnaHQ6IDcwMDtcXG5cXHR0ZXh0LWFsaWduOiBsZWZ0O1xcblxcdGNvbG9yOiBibGFjaztcXG59XFxuXFxuLmFkZC1idG4tY29udGFpbmVyIHtcXG5cXHQvKnBvc2l0aW9uOiBhYnNvbHV0ZTsqL1xcblxcdC8qYm90dG9tOiAwOyovXFxuXFx0LypyaWdodDogMDsqL1xcblxcdHZlcnRpY2FsLWFsaWduOiBib3R0b207XFxuXFx0ei1pbmRleDogMTtcXG59XFxuXFxuLmZhYi1idXR0b24ge1xcbiAgaGVpZ2h0OiA1NjtcXG4gIHdpZHRoOiA1NjtcXG4gIG1hcmdpbjogMTU7XFxuICAvKm1hcmdpbi1ib3R0b206IDY0OyovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWMwMGU2O1xcbiAgLypmbG9hdDogcmlnaHQ7Ki9cXG4gIGhvcml6b250YWwtYWxpZ246IHJpZ2h0O1xcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcXG59XFxuXFxuTGFiZWwge1xcblxcdHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblxcbi5uYW1lLWxhYmVsIHtcXG5cXHRtYXJnaW4tdG9wOiAxNjtcXG5cXHRtYXJnaW4tbGVmdDogMTg7XFxuXFx0Y29sb3I6IGJsYWNrO1xcblxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxuXFx0Zm9udC1zaXplOiAxNztcXG59XFxuXFxuLmluZm8tbGFiZWwge1xcblxcdG1hcmdpbi10b3A6IDQ7XFxuXFx0bWFyZ2luLWxlZnQ6IDE4O1xcblxcdG1hcmdpbi1ib3R0b206IDE2O1xcblxcdGNvbG9yOiBibGFjaztcXG59XFxuXFxuLnBvc3Qge1xcblxcdC8qYm9yZGVyLWJvdHRvbS13aWR0aDogMTsqL1xcblxcdGJvcmRlci1jb2xvcjogI2YxZjFmMTtcXG59XFxuXFxuLnBvc3Q6aGlnaGxpZ2h0ZWQge1xcblxcdC8qYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTsqL1xcbn1cXG5cXG4ucG9zdGluZy1tYXAge1xcblxcdG1hcmdpbi1ib3R0b206IDE2O1xcblxcdGJvcmRlci1yYWRpdXM6IDEwO1xcblxcdGhlaWdodDogMjIwO1xcblxcdHdpZHRoOiAzNDA7XFxufVxcblxcbi5wcm9maWxlLXBpY3R1cmUge1xcblxcdGhlaWdodDogNTA7XFxuXFx0d2lkdGg6IDUwO1xcblxcdGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuXFx0dmVydGljYWwtYWxpZ246IHRvcDtcXG5cXHRtYXJnaW4tbGVmdDogMTY7XFxuXFx0bWFyZ2luLXRvcDogMjA7XFxufVxcblxcbi5hY3Rpdml0eS1pbmRpY2F0b3Ige1xcblxcdGNvbG9yOiAjYWMwMGU2O1xcbn1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8IS0tIDxBY3Rpb25CYXIgdGl0bGU9XFxcIkhvbWVcXFwiIGNsYXNzPVxcXCJhY3Rpb25iYXJcXFwiPlxcblxcdDxOYXZpZ2F0aW9uQnV0dG9uIGlvczp2aXNpYmlsaXR5PVxcXCJjb2xsYXBzZWRcXFwiIGljb249XFxcIn4vaW1nL21lbnUtaWNvbi5wbmdcXFwiICh0YXApPVxcXCJzaG93U2lkZURyYXdlcigpXFxcIiA+PC9OYXZpZ2F0aW9uQnV0dG9uPlxcbjxBY3Rpb25JdGVtIGFuZHJvaWQ6dmlzaWJpbGl0eT1cXFwiY29sbGFwc2VkXFxcIiBpY29uPVxcXCJ+L2ltZy9tZW51LWljb24ucG5nXFxcIiBpb3MucG9zaXRpb249XFxcImxlZnRcXFwiICh0YXApPVxcXCJzaG93U2lkZURyYXdlcigpXFxcIiA+PC9BY3Rpb25JdGVtPlxcbjwvQWN0aW9uQmFyPiAtLT5cXG5cXG4gICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJhZGQtYnRuLWNvbnRhaW5lclxcXCI+XFxuXFx0XFx0PEZBQiAodGFwKT1cXFwic2hvd01vZGFsKClcXFwiIGljb249XFxcInJlczovL2ljX2FkZF93aGl0ZV8zeFxcXCIgcmlwcGxlQ29sb3I9XFxcIiNmMWYxZjFcXFwiIGNsYXNzPVxcXCJmYWItYnV0dG9uXFxcIj48L0ZBQj5cXG5cXHQ8L1N0YWNrTGF5b3V0PlxcblxcblxcdDxQdWxsVG9SZWZyZXNoIChyZWZyZXNoKT1cXFwicmVmcmVzaExpc3QoJGV2ZW50KVxcXCIgY2xhc3M9XFxcInJlZnJlc2hcXFwiPlxcblxcdFxcdDxMaXN0VmlldyBbaXRlbXNdPVxcXCJwb3N0aW5nc1xcXCIgKGl0ZW1UYXApPVxcXCJvbkl0ZW1UYXAoJGV2ZW50KVxcXCIgI2xpc3RWaWV3IGlkPVxcXCJsaXN0Vmlld1xcXCI+XFxuXFx0XFx0ICAgIDxuZy10ZW1wbGF0ZSBsZXQtaXRlbT1cXFwiaXRlbVxcXCIgbGV0LWk9XFxcImluZGV4XFxcIiBsZXQtb2RkPVxcXCJvZGRcXFwiIGxldC1ldmVuPVxcXCJldmVuXFxcIj5cXG5cXHRcXHQgICAgICAgIDxTdGFja0xheW91dCBbY2xhc3Mub2RkXT1cXFwib2RkXFxcIiBbY2xhc3MuZXZlbl09XFxcImV2ZW5cXFwiIGNsYXNzPVxcXCJwb3N0XFxcIj5cXG5cXHRcXHQgICAgICAgIFxcdCAgPFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVxcXCJob3Jpem9udGFsXFxcIj5cXG5cXHRcXHQgICAgICAgIFxcdCAgXFx0PEltYWdlIFtzcmNdPVxcXCJpdGVtLnByb2ZpbGVTb3VyY2VcXFwiIGNsYXNzPVxcXCJwcm9maWxlLXBpY3R1cmVcXFwiIHN0cmV0Y2g9XFxcImFzcGVjdEZpdFxcXCI+PC9JbWFnZT5cXG5cXHRcXHQgICAgICAgIFxcdCAgXFx0PFN0YWNrTGF5b3V0PlxcblxcdFxcdFxcdCAgICAgICAgICAgICAgXFx0PExhYmVsIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiBpZD1cXFwicG9zdC1uYW1lXFxcIiBjbGFzcz1cXFwibmFtZS1sYWJlbFxcXCIgW3RleHRdPVxcXCJpdGVtLnVzZXJuYW1lXFxcIj48L0xhYmVsPlxcblxcdFxcdFxcdCAgICAgICAgICAgICAgXFx0PExhYmVsIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiBpZD1cXFwicG9zdC1pbmZvXFxcIiBjbGFzcz1cXFwiaW5mby1sYWJlbFxcXCIgW3RleHRdPVxcXCJpdGVtLmluZm9cXFwiPjwvTGFiZWw+XFxuXFx0XFx0XFx0ICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG5cXHRcXHQgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuXFx0XFx0XFx0XFx0XFx0ICA8SW1hZ2UgW3NyY109XFxcIml0ZW0ubWFwU291cmNlXFxcIiBzdHJldGNoPVxcXCJhc3BlY3RGaXRcXFwiIGNsYXNzPVxcXCJwb3N0aW5nLW1hcFxcXCI+PC9JbWFnZT5cXG5cXHRcXHQgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuXFx0XFx0ICAgIDwvbmctdGVtcGxhdGU+XFxuXFx0XFx0PC9MaXN0Vmlldz5cXG5cXHQ8L1B1bGxUb1JlZnJlc2g+XFxuXFx0PEFjdGl2aXR5SW5kaWNhdG9yICNhY3Rpdml0eUluZGljYXRvciBidXN5PVxcXCJ0cnVlXFxcIiB3aWR0aD1cXFwiNDBcXFwiIGhlaWdodD1cXFwiNDBcXFwiIGNsYXNzPVxcXCJhY3Rpdml0eS1pbmRpY2F0b3JcXFwiPlxcbiAgPC9BY3Rpdml0eUluZGljYXRvcj5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q29udGFpbmVyUmVmLCBWaWV3UmVmLCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGVBcnJheSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlLWFycmF5JztcblxuaW1wb3J0IHsgVHJhbnNmZXJTZXJ2aWNlIH0gZnJvbSAnLi4vZGF0YXRyYW5zZmVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgRHluYW1pY0FkZFNlcnZpY2UgfSBmcm9tICcuLi9keW5hbWljLWFkZC5zZXJ2aWNlLnRucyc7XG5pbXBvcnQge1BhZ2V9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2VcIjtcbmltcG9ydCB7IGdldEZyYW1lQnlJZCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lXCI7XG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gJy4uL3VzZXIuc2VydmljZS50bnMnO1xuaW1wb3J0IHsgUG9zdGluZ1NlcnZpY2UgfSBmcm9tICcuLi9wb3N0aW5nLnNlcnZpY2UudG5zJztcbmltcG9ydCB7IE1vZGFsRGlhbG9nU2VydmljZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9kaXJlY3RpdmVzL2RpYWxvZ3NcIjtcbmltcG9ydCB7IEdvb2dsZU1hcHNTZXJ2aWNlIH0gZnJvbSAnLi4vZ29vZ2xlLW1hcHMuc2VydmljZSc7XG5pbXBvcnQgKiBhcyBhcHBsaWNhdGlvbiBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiO1xuaW1wb3J0IHsgQWN0aXZpdHlJbmRpY2F0b3IgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2FjdGl2aXR5LWluZGljYXRvcic7XG5pbXBvcnQgeyBBbmRyb2lkQXBwbGljYXRpb24sIEFuZHJvaWRBY3Rpdml0eUJhY2tQcmVzc2VkRXZlbnREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIjtcbmltcG9ydCB7IGlzQW5kcm9pZCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtXCI7XG5pbXBvcnQgKiBhcyBmaXJlYmFzZSBmcm9tICduYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlJztcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgRGF0ZVBpcGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBTdGFja0xheW91dCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvc3RhY2stbGF5b3V0XCI7XG5pbXBvcnQgeyBMaXN0VmlldyB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xpc3Qtdmlld1wiO1xuXG5pbXBvcnQgeyBQb3N0aW5nIH0gZnJvbSAnLi4vcG9zdGluZy5tb2RlbCc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vdXNlci5tb2RlbCc7XG5cbmltcG9ydCB7IEFkZE1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi4vYWRkLW1vZGFsL2FkZC1tb2RhbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2FjaGUgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9pbWFnZS1jYWNoZVwiO1xuaW1wb3J0IHsgSW1hZ2VTb3VyY2UsIGZyb21GaWxlLCBmcm9tUmVzb3VyY2UsIGZyb21CYXNlNjQsIGZyb21OYXRpdmVTb3VyY2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9pbWFnZS1zb3VyY2VcIjtcbmltcG9ydCB7IEZvbGRlciwgcGF0aCwga25vd25Gb2xkZXJzIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZmlsZS1zeXN0ZW1cIjtcblxuaW1wb3J0IHsgcmVnaXN0ZXJFbGVtZW50IH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvZWxlbWVudC1yZWdpc3RyeSc7XG5yZWdpc3RlckVsZW1lbnQoJ0ZhYicsICgpID0+IHJlcXVpcmUoJ0Buc3R1ZGlvL25hdGl2ZXNjcmlwdC1mbG9hdGluZ2FjdGlvbmJ1dHRvbicpLkZhYik7XG5yZWdpc3RlckVsZW1lbnQoXCJQdWxsVG9SZWZyZXNoXCIsICgpID0+IHJlcXVpcmUoXCJAbnN0dWRpby9uYXRpdmVzY3JpcHQtcHVsbHRvcmVmcmVzaFwiKS5QdWxsVG9SZWZyZXNoKTtcblxuY2xhc3MgUG9zdEl0ZW0ge1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB1c2VybmFtZTogU3RyaW5nLCBwdWJsaWMgaW5mbzogc3RyaW5nLCBwdWJsaWMgcHJvZmlsZVNvdXJjZTogc3RyaW5nLCBwdWJsaWMgbWFwU291cmNlOiBzdHJpbmcpIHsgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtaG9tZScsXG4gIHByb3ZpZGVyczogW0R5bmFtaWNBZGRTZXJ2aWNlXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2hvbWUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9ob21lLmNvbXBvbmVudC5jc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGJsb2NrcyA9IDE7XG4gIHAgOiBQb3N0aW5nW107XG4gIHBvc3RpbmdzID0gbmV3IE9ic2VydmFibGVBcnJheTxQb3N0SXRlbT4oKTtcbiAgY2FjaGUgPSBuZXcgQ2FjaGUoKTtcbiAgXG5cbiAgQFZpZXdDaGlsZCgnbGlzdFZpZXcnLCB7IHN0YXRpYzogdHJ1ZSB9KSBsdjogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnYWN0aXZpdHlJbmRpY2F0b3InLCB7IHN0YXRpYzogdHJ1ZSB9KSBhaTogRWxlbWVudFJlZjtcbiAgXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0cmFuc2ZlclNlcnZpY2U6IFRyYW5zZmVyU2VydmljZSwgcHJpdmF0ZSBhZGRTZXJ2aWNlOiBEeW5hbWljQWRkU2VydmljZSwgcHJpdmF0ZSBwYWdlOiBQYWdlLCBcbiAgXHRwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSwgcHJpdmF0ZSBwb3N0aW5nU2VydmljZTogUG9zdGluZ1NlcnZpY2UsIHByaXZhdGUgbW9kYWw6IE1vZGFsRGlhbG9nU2VydmljZSwgcHJpdmF0ZSB2Y1JlZjogVmlld0NvbnRhaW5lclJlZixcbiAgICBwcml2YXRlIG1hcFNlcnZpY2U6IEdvb2dsZU1hcHNTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSBkYXRlUGlwZTogRGF0ZVBpcGUpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICBcdHRoaXMubG9hZFBvc3RpbmdzKCk7XG4gIH1cblxuICBvbkJhY2tCdXR0b25UYXAoKSB7XG4gICAgYXBwbGljYXRpb24uYW5kcm9pZC5mb3JlZ3JvdW5kQWN0aXZpdHkuZmluaXNoKCk7XG4gIH1cblxuICBzaG93TW9kYWwoKSB7XG4gICAgICAgIGxldCBvcHRpb25zID0ge1xuICAgICAgICAgICAgY29udGV4dDoge30sXG4gICAgICAgICAgICBmdWxsc2NyZWVuOiB0cnVlLFxuICAgICAgICAgICAgdmlld0NvbnRhaW5lclJlZjogdGhpcy52Y1JlZlxuICAgICAgICAgICAgLy8gYW5pbWF0ZWQ6IHRydWUsXG4gICAgICAgICAgICAvLyB0cmFuc2l0aW9uOiB7IG5hbWU6IFwic2xpZGVUb3BcIiB9XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMubW9kYWwuc2hvd01vZGFsKEFkZE1vZGFsQ29tcG9uZW50LCBvcHRpb25zKS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgICAgICAgaWYocmVzID09ICdwb3N0ZWQnKVxuICAgICAgICAgICAgICB0aGlzLmxvYWRQb3N0aW5ncygpO1xuICAgICAgICB9KTtcbiAgICB9XG4gIHNob3dTaWRlRHJhd2VyKCkge1xuICBcdC8vY29uc3QgZHJhd2VyID0gPFJhZFNpZGVEcmF3ZXI+dGhpcy5zZC5uYXRpdmVWaWV3O1xuICBcdC8vY29uc29sZS5kaXIoZHJhd2VyKTtcbiAgXHQvL2NvbnNvbGUuZGlyKHRoaXMucGFnZSk7XG4gIFx0Ly8gZHJhd2VyLnNob3dEcmF3ZXIoKTtcblxuICB9XG5cbiAgbG9hZFBvc3RpbmdzKGFyZ3M9bnVsbCkge1xuICAgIC8vIGxldCBsYXlvdXQgPSA8U3RhY2tMYXlvdXQ+dGhpcy5wYWdlLmdldFZpZXdCeUlkKCdmZWVkJyk7XG4gICAgLy8gbGF5b3V0LnJlbW92ZUNoaWxkcmVuKCk7XG4gICAgdGhpcy5jYWNoZS5wbGFjZWhvbGRlciA9IGZyb21GaWxlKFwifi9pbWcvZ3JheV9iYWNrZ3JvdW5kLmpwZ1wiKTtcbiAgICB0aGlzLmNhY2hlLm1heFJlcXVlc3RzID0gNTtcblxuICAgIHRoaXMucG9zdGluZ3Muc3BsaWNlKDApO1xuICAgIGxldCBhY3Rpdml0eUluZGljYXRvciA9IDxBY3Rpdml0eUluZGljYXRvcj4gdGhpcy5haS5uYXRpdmVFbGVtZW50O1xuICAgIGFjdGl2aXR5SW5kaWNhdG9yLmJ1c3kgPSB0cnVlO1xuXG4gICAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xuXG4gICAgdmFyIHBvc3RzID0gW107XG4gICAgdmFyIHBvc3RpbmdzQ29sbGVjdGlvbiA9IGZpcmViYXNlLmZpcmVzdG9yZS5jb2xsZWN0aW9uKCdwb3N0aW5ncycpO1xuICAgIGNvbnN0IHF1ZXJ5ID0gcG9zdGluZ3NDb2xsZWN0aW9uLndoZXJlKCdmb3JtYXR0ZWREYXRlJywgJz49JywgdGhpcy5kYXRlUGlwZS50cmFuc2Zvcm0oY3VycmVudERhdGUsICd5eXl5LU1NLWRkJykpXG4gICAgcXVlcnkub3JkZXJCeSgnZm9ybWF0dGVkRGF0ZScsICdhc2MnKS5nZXQoKS50aGVuKHF1ZXJ5U25hcHNob3QgPT4ge1xuICAgICAgcXVlcnlTbmFwc2hvdC5mb3JFYWNoKGRvYyA9PiB7XG4gICAgICAgIHBvc3RzLnB1c2goe1xuICAgICAgICAgIGlkOiBkb2MuaWQsXG4gICAgICAgICAgZGF0YTogZG9jLmRhdGEoKVxuICAgICAgICB9KVxuICAgICAgfSk7XG4gICAgICB0aGlzLnAgPSBwb3N0cztcbiAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBwb3N0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICB0aGlzLnBvc3RpbmdzLnB1c2gobmV3IFBvc3RJdGVtKHBvc3RzW2ldLnVzZXIsICcnLCAnJywgJ34vaW1nL2dyYXlfYmFja2dyb3VuZC5qcGcnKSk7XG4gICAgICAgIHRoaXMuY3JlYXRlUG9zdGluZyhwb3N0c1tpXS5kYXRhLCBpKTtcbiAgICAgIH1cbiAgICAgIGFjdGl2aXR5SW5kaWNhdG9yLmJ1c3kgPSBmYWxzZTtcbiAgICAgIGlmKGFyZ3MgIT0gbnVsbClcbiAgICAgIHtcbiAgICAgICAgdmFyIHB1bGxSZWZyZXNoID0gYXJncy5vYmplY3Q7XG4gICAgICAgIHB1bGxSZWZyZXNoLnJlZnJlc2hpbmcgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICB9XG5cbiAvLyAgY3JlYXRlUG9zdGluZyhpZCwgdXNlciwgc3RhcnRhZHIsIGVuZGFkciwgZGF0ZSwgY29zdCwgY2FwYWNpdHksIGNvbW1lbnRzKSB7XG5cdC8vIFx0dGhpcy50cmFuc2ZlclNlcnZpY2Uuc2V0RGF0YShbe1wiaW5kZXhcIjogdGhpcy5ibG9ja3MsIFwiaWRcIjogaWQsIFwidXNlclwiOiB1c2VyLCBcInN0YXJ0YWRyXCI6IHN0YXJ0YWRyLCBcImVuZGFkclwiOiBlbmRhZHIsIFwiZGF0ZVwiOiBkYXRlLCBcImNvc3RcIjogY29zdCwgXCJjYXBhY2l0eVwiOiBjYXBhY2l0eSwgXCJjb21tZW50c1wiOiBjb21tZW50cywgXCJidXR0b25UeXBlXCI6IFwiQ29ubmVjdFwifV0pO1xuXHQvLyBcdHRoaXMuYWRkU2VydmljZS5hcHBlbmRDb21wb25lbnRUb0JvZHkodGhpcy5wYWdlLmdldFZpZXdCeUlkKCdmZWVkJykpO1xuXHQvLyAgIHRoaXMuYmxvY2tzKys7XG5cdC8vIH1cblxuICBjcmVhdGVQb3N0aW5nKGRhdGEsIGk6IG51bWJlcikge1xuICAgIGxldCBpbmZvX2xhYmVsID0gXCJcIjtcbiAgICAvLyB0aGlzLmNyZWF0ZVBvc3RpbmcodGhpcy5wW2ldLl9pZCwgdGhpcy5wW2ldLnVzZXIsIHRoaXMucFtpXS5zdGFydGFkciwgdGhpcy5wW2ldLmVuZGFkciwgdGhpcy5wW2ldLmRhdGUsIHRoaXMucFtpXS5jb3N0LCB0aGlzLnBbaV0uY2FwYWNpdHksIHRoaXMucFtpXS5jb21tZW50cyk7XG4gICAgaWYoZGF0YS5jYXBhY2l0eSAhPSBcIi0xXCIpXG4gICAgICBpbmZvX2xhYmVsID0gXCJPZmZlcmluZyByaWRlIGxlYXZpbmcgXCIgKyBkYXRhLmRhdGUgKyBcIiBmcm9tIFwiICsgZGF0YS5zdGFydEFkZHJlc3MgKyBcIiB0byBcIiArIGRhdGEuZW5kQWRkcmVzcyArIFwiIGZvciBcIiArIGRhdGEucHJpY2U7XG4gICAgZWxzZVxuICAgICAgaW5mb19sYWJlbCA9IFwiUmVxdWVzdGluZyByaWRlIGxlYXZpbmcgXCIgKyBkYXRhLmRhdGUgKyBcIiBmcm9tIFwiICsgZGF0YS5zdGFydEFkZHJlc3MgKyBcIiB0byBcIiArIGRhdGEuZW5kQWRkcmVzcztcbiAgICBjb25zdCB1c2Vyc0NvbGxlY3Rpb24gPSBmaXJlYmFzZS5maXJlc3RvcmUuY29sbGVjdGlvbigndXNlcnMnKTtcbiAgICB1c2Vyc0NvbGxlY3Rpb24uZG9jKGRhdGEudWlkKS5nZXQoKS50aGVuKChkb2MpID0+IHtcbiAgICAgIGlmKGRvYy5leGlzdHMpIHtcbiAgICAgICAgdmFyIHVybCA9IGRvYy5kYXRhKCkucHJvZmlsZV9zb3VyY2U7XG4gICAgICAgIGlmKHVybC5zdWJzdHJpbmcoMCwgMjcpID09PSAnaHR0cHM6Ly9ncmFwaC5mYWNlYm9vay5jb20vJylcbiAgICAgICAgICB1cmwgKz0gJz9oZWlnaHQ9MzAwJztcbiAgICAgICAgLy8gdmFyIG1hcFVybCA9IHRoaXMubWFwU2VydmljZS5nZXRTdGF0aWNNYXAoZGF0YS5zdGFydEFkZHJlc3MgKyBcIiBcIiArIGRhdGEuc3RhcnRGb3JtYXR0ZWQsIGRhdGEuZW5kQWRkcmVzcyArIFwiIFwiICsgZGF0YS5lbmRGb3JtYXR0ZWQpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhtYXBVcmwpXG4gICAgICAgIC8vIHRoaXMuYWRkQ2FjaGUodXJsLCAncGZwJywgZGF0YS51c2VyLCBpbmZvX2xhYmVsLCB1cmwsIGRhdGEubWFwX3VybCwgaSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgIC8vICAgY29uc29sZS5sb2cocmVzKVxuICAgICAgICAvLyAgIHRoaXMuYWRkQ2FjaGUoZGF0YS5tYXBfdXJsLCAnbWFwJywgZGF0YS51c2VyLCBpbmZvX2xhYmVsLCB1cmwsIGRhdGEubWFwX3VybCwgaSkudGhlbigocmVzKSA9PntcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKHJlcylcbiAgICAgICAgLy8gICB9KVxuICAgICAgICAvLyB9KTtcbiAgICAgICAgdGhpcy5wb3N0aW5ncy5zZXRJdGVtKGksIG5ldyBQb3N0SXRlbShkYXRhLnVzZXIsIGluZm9fbGFiZWwsIHVybCwgZGF0YS5tYXBfdXJsKSk7XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGFkZENhY2hlKHVybCwgaW1nX3R5cGUsIHVzZXIsIGluZm8sIHBmcF91cmwsIG1hcF91cmwsIGkpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8YW55PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBsZXQgY2FjaGVkSW1hZ2VTb3VyY2U7XG4gICAgICBjb25zdCBteUltYWdlID0gdGhpcy5jYWNoZS5nZXQodXJsKTtcbiAgICAgIGlmIChteUltYWdlKSB7XG4gICAgICAgIC8vIElmIHByZXNlbnQgLS0gdXNlIGl0LlxuICAgICAgICBjYWNoZWRJbWFnZVNvdXJjZSA9IGZyb21OYXRpdmVTb3VyY2UobXlJbWFnZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKG15SW1hZ2UpXG4gICAgICAgIGlmKGltZ190eXBlID09PSAncGZwJylcbiAgICAgICAgICB0aGlzLnBvc3RpbmdzLnNldEl0ZW0oaSwgbmV3IFBvc3RJdGVtKHVzZXIsIGluZm8sIGNhY2hlZEltYWdlU291cmNlLCBtYXBfdXJsKSk7XG4gICAgICAgIGVsc2UgaWYgKGltZ190eXBlID09PSAnbWFwJylcbiAgICAgICAgICB0aGlzLnBvc3RpbmdzLnNldEl0ZW0oaSwgbmV3IFBvc3RJdGVtKHVzZXIsIGluZm8sIHRoaXMucG9zdGluZ3MuZ2V0SXRlbShpKS5wcm9maWxlU291cmNlLCBjYWNoZWRJbWFnZVNvdXJjZSkpO1xuICAgICAgICByZXNvbHZlKHttZXNzYWdlOiAnUmV0cmlldmVkIGZyb20gY2FjaGUnLCBjYWNoZVVSTDogY2FjaGVkSW1hZ2VTb3VyY2V9KTtcbiAgICAgIH0gXG4gICAgICBlbHNlIHtcbiAgICAgICAgLy8gSWYgbm90IHByZXNlbnQgLS0gcmVxdWVzdCBpdHMgZG93bmxvYWQgKyBwdXQgaXQgaW4gdGhlIGNhY2hlLlxuICAgICAgICB0aGlzLmNhY2hlLnB1c2goe1xuICAgICAgICAgICAga2V5OiB1cmwsXG4gICAgICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgICAgIGNvbXBsZXRlZDogKGltYWdlLCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodXJsID09PSBrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FjaGVkSW1hZ2VTb3VyY2UgPSBmcm9tTmF0aXZlU291cmNlKGltYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYoaW1nX3R5cGUgPT09ICdwZnAnKVxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMucG9zdGluZ3Muc2V0SXRlbShpLCBuZXcgUG9zdEl0ZW0odXNlciwgaW5mbywgY2FjaGVkSW1hZ2VTb3VyY2UsIG1hcF91cmwpKTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoaW1nX3R5cGUgPT09ICdtYXAnKVxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMucG9zdGluZ3Muc2V0SXRlbShpLCBuZXcgUG9zdEl0ZW0odXNlciwgaW5mbywgdGhpcy5wb3N0aW5ncy5nZXRJdGVtKGkpLnByb2ZpbGVTb3VyY2UsIGNhY2hlZEltYWdlU291cmNlKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlc29sdmUoe21lc3NhZ2U6ICdBZGRlZCB0byBjYWNoZScsIGNhY2hlVVJMOiBjYWNoZWRJbWFnZVNvdXJjZX0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcmVmcmVzaExpc3QoYXJncykge1xuICAgIHRoaXMubG9hZFBvc3RpbmdzKGFyZ3MpO1xuICB9XG5cbiAgb25JdGVtVGFwKGFyZ3MpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnBvc3RpbmdzLmdldEl0ZW0oYXJncy5pbmRleCkpO1xuICAgIHRoaXMudHJhbnNmZXJTZXJ2aWNlLnNldERhdGEoe1xuICAgICAgcG9zdEluZm86IHRoaXMucFthcmdzLmluZGV4XSxcbiAgICAgIHBvc3RJdGVtOiB0aGlzLnBvc3RpbmdzLmdldEl0ZW0oYXJncy5pbmRleClcbiAgICB9KVxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsncG9zdGluZy1pbmZvJ10pXG4gIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gXCIvKiBBZGQgbW9iaWxlIHN0eWxlcyBmb3IgdGhlIGNvbXBvbmVudCBoZXJlLiAgKi9cXG4uY2xvc2Uge1xcblxcdG1hcmdpbjogMTA7XFxuXFx0Zm9udC1zaXplOiAyODtcXG5cXHR3aWR0aDogNDg7XFxuXFx0aGVpZ2h0OiA0ODtcXG59XFxuXFxuLmNsb3NlLWJ1dHRvbi1jb250YWluZXIge1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRsZWZ0OiAwO1xcbn1cXG5cXG4uaGVhZGVyLWxhYmVsLTIge1xcblxcdGZvbnQtc2l6ZTogMTY7XFxuXFx0bWFyZ2luLXRvcDogMTI7XFxuXFx0LyptYXJnaW4tYm90dG9tOiAxMjsqL1xcblxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi5oZWFkZXItbGFiZWwtMyB7XFxuXFx0bWFyZ2luLWJvdHRvbTogMTI7XFxufVxcblxcbi5wb3N0IHtcXG5cXHRib3JkZXItY29sb3I6ICNmMWYxZjE7XFxufVxcblxcbi5wb3N0OmhpZ2hsaWdodGVkIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xcbn1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8U2Nyb2xsVmlldz5cXG5cXHQ8U3RhY2tMYXlvdXQgaGVpZ2h0PVxcXCIxMDAlXFxcIj5cXG5cXHRcXHQ8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImNsb3NlLWJ1dHRvbi1jb250YWluZXJcXFwiIG9yaWVudGF0aW9uPVxcXCJob3Jpem9udGFsXFxcIj5cXG5cXHRcXHRcXHQ8TGFiZWwgdGV4dD1cXFwiJnRpbWVzO1xcXCIgY2xhc3M9XFxcImNsb3NlXFxcIiAodGFwKT1cXFwiY2xvc2UoKVxcXCI+PC9MYWJlbD5cXG5cXHRcXHQ8L1N0YWNrTGF5b3V0PlxcblxcblxcdFxcdDxTdGFja0xheW91dCBjbGFzcz1cXFwiaW5wdXQtZmllbGRcXFwiPlxcbjwhLS0gXFx0XFx0XFx0PFRleHRGaWVsZCBjbGFzcz1cXFwiaW5wdXRcXFwiIGF1dG9jb3JyZWN0PVxcXCJmYWxzZVxcXCIgaGludD1cXFwiRmluZCBhIGxvY2F0aW9uXFxcIiBbKG5nTW9kZWwpXT1cXFwiYWRkcmVzc1xcXCIgKHRleHRDaGFuZ2UpPVxcXCJhdXRvY29tcGxldGUoKVxcXCIgI3NlYXJjaExhYmVsIGlkPVxcXCJzZWFyY2hMYWJlbFxcXCIgcmVxdWlyZWQ+PC9UZXh0RmllbGQ+IC0tPlxcblxcdFxcdFxcdDxTZWFyY2hCYXIgaGludD1cXFwiRmluZCBhIGxvY2F0aW9uXFxcIiBbdGV4dF09XFxcImFkZHJlc3NcXFwiICh0ZXh0Q2hhbmdlKT1cXFwic2VhcmNoKCRldmVudClcXFwiPjwvU2VhcmNoQmFyPlxcblxcdFxcdFxcdDxTdGFja0xheW91dCBjbGFzcz1cXFwiaHItbGlnaHRcXFwiPjwvU3RhY2tMYXlvdXQ+XFxuXFx0XFx0PC9TdGFja0xheW91dD5cXG5cXG5cXHRcXHQ8TGlzdFZpZXcgW2l0ZW1zXT1cXFwic3VnZ2VzdGlvbnNcXFwiIGhlaWdodD1cXFwiMTAwJVxcXCI+XFxuXFx0XFx0XFx0PG5nLXRlbXBsYXRlIGxldC1pdGVtPVxcXCJpdGVtXFxcIiBsZXQtaT1cXFwiaW5kZXhcXFwiIGxldC1vZGQ9XFxcIm9kZFxcXCIgbGV0LWV2ZW49XFxcImV2ZW5cXFwiPlxcblxcdFxcdFxcdFxcdDxTdGFja0xheW91dCBbY2xhc3Mub2RkXT1cXFwib2RkXFxcIiBbY2xhc3MuZXZlbl09XFxcImV2ZW5cXFwiIGNsYXNzPVxcXCJwb3N0XFxcIiAodGFwKT1cXFwic2VsZWN0UGxhY2UoaXRlbS5wbGFjZVN1Z2dlc3Rpb24sIGl0ZW0ucGxhY2VBZGRyZXNzKVxcXCI+XFxuXFx0XFx0XFx0XFx0XFx0PExhYmVsIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiBbdGV4dF09XFxcIml0ZW0ucGxhY2VTdWdnZXN0aW9uXFxcIiBjbGFzcz1cXFwiaGVhZGVyLWxhYmVsLTJcXFwiPjwvTGFiZWw+XFxuXFx0XFx0XFx0XFx0XFx0PExhYmVsIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiBbdGV4dF09XFxcIml0ZW0ucGxhY2VBZGRyZXNzXFxcIiBjbGFzcz1cXFwiaGVhZGVyLWxhYmVsLTNcXFwiPjwvTGFiZWw+XFxuXFx0XFx0XFx0XFx0PC9TdGFja0xheW91dD5cXG5cXHRcXHRcXHQ8L25nLXRlbXBsYXRlPlxcblxcdFxcdDwvTGlzdFZpZXc+XFxuXFx0PC9TdGFja0xheW91dD5cXG48L1Njcm9sbFZpZXc+XCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgRWxlbWVudFJlZiwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQbGFjZXNBdXRvY29tcGxldGVTZXJ2aWNlIH0gZnJvbSAnLi4vcGxhY2VzLWF1dG9jb21wbGV0ZS5zZXJ2aWNlJztcbmltcG9ydCB7IE9ic2VydmFibGVBcnJheSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlLWFycmF5JztcbmltcG9ydCB7IE1vZGFsRGlhbG9nUGFyYW1zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2RpcmVjdGl2ZXMvZGlhbG9nc1wiO1xuaW1wb3J0IHsgVHJhbnNmZXJTZXJ2aWNlIH0gZnJvbSAnLi4vZGF0YXRyYW5zZmVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgU2VhcmNoQmFyIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9zZWFyY2gtYmFyJztcblxuY2xhc3MgU3VnZ2VzdGlvbiB7XG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwbGFjZVN1Z2dlc3Rpb246IHN0cmluZywgcHVibGljIHBsYWNlQWRkcmVzczogc3RyaW5nKSB7fVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtbG9jYXRpb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vbG9jYXRpb24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9sb2NhdGlvbi5jb21wb25lbnQuY3NzJ11cbn0pXG5cblxuZXhwb3J0IGNsYXNzIExvY2F0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhcmFtczogTW9kYWxEaWFsb2dQYXJhbXMsIHByaXZhdGUgcGxhY2VzU2VydmljZTogUGxhY2VzQXV0b2NvbXBsZXRlU2VydmljZSwgcHJpdmF0ZSB0cmFuc2ZlclNlcnZpY2U6IFRyYW5zZmVyU2VydmljZSkgeyB9XG5cbiAgQFZpZXdDaGlsZChcInNlYXJjaExhYmVsXCIsIHsgc3RhdGljOiB0cnVlIH0pIHNlYXJjaExhYmVsOiBFbGVtZW50UmVmO1xuICBhZGRyZXNzO1xuICBzdWdnZXN0aW9ucyA9IG5ldyBPYnNlcnZhYmxlQXJyYXk8U3VnZ2VzdGlvbj4oKTtcbiAgcGxhY2VTdWdnZXN0aW9ucyA9IG5ldyBPYnNlcnZhYmxlQXJyYXk8U3RyaW5nPigpO1xuICBwbGFjZUFkZHJlc3NlcyA9IG5ldyBPYnNlcnZhYmxlQXJyYXk8U3RyaW5nPigpO1xuICB0eXBlID0gdGhpcy50cmFuc2ZlclNlcnZpY2UuZ2V0RGF0YSgpO1xuXG4gIGlkcyA9IG5ldyBTZXQoKTtcbiAgbXlUaW1lcjtcblxuICBuZ09uSW5pdCgpIHtcbiAgXHQvLyBzZXRUaW1lb3V0KCgpID0+IHRoaXMuc2VhcmNoTGFiZWwubmF0aXZlRWxlbWVudC5mb2N1cygpLCAxMDApO1xuICB9XG5cbiAgY2xvc2UoKSB7XG4gIFx0dGhpcy5wYXJhbXMuY2xvc2VDYWxsYmFjaygpO1xuICAgfVxuXG4gICBzZWxlY3RQbGFjZShwbGFjZSwgYWRkcmVzcykge1xuICAgXHRpZih0aGlzLnR5cGUgPT0gJ3N0YXJ0JylcbiAgIFx0XHR0aGlzLnBhcmFtcy5jbG9zZUNhbGxiYWNrKHsnc3RhcnQnOiBwbGFjZSwgJ2FkZHJlc3MnOiBhZGRyZXNzfSk7XG4gICBcdGVsc2VcbiAgIFx0XHR0aGlzLnBhcmFtcy5jbG9zZUNhbGxiYWNrKHsnZW5kJzogcGxhY2UsICdhZGRyZXNzJzogYWRkcmVzc30pO1xuICAgfVxuXG4gIHNlYXJjaChhcmdzKSB7XG4gIFx0Y2xlYXJJbnRlcnZhbCh0aGlzLm15VGltZXIpO1xuICBcdHRoaXMubXlUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICBcdFx0bGV0IHNlYXJjaEJhciA9IDxTZWFyY2hCYXI+IGFyZ3Mub2JqZWN0O1xuXHQgICAgdGhpcy5pZHMuY2xlYXIoKTtcblx0ICAgIHRoaXMuc3VnZ2VzdGlvbnMuc3BsaWNlKDApO1xuXHQgICAgc2V0VGltZW91dCgoKSA9PiB7XG5cdCAgICB0aGlzLnBsYWNlc1NlcnZpY2UuZ2V0UGxhY2VSZXN1bHRzKHNlYXJjaEJhci50ZXh0KS5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4ge1xuXHRcdCAgICBmb3IodmFyIGkgPSAwOyBpIDwgZGF0YS5yZXN1bHRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0ICAgICAgXHRpZighdGhpcy5pZHMuaGFzKGRhdGEucmVzdWx0c1tpXS5wbGFjZV9pZCkpXG5cdFx0ICAgICAgXHRcdHRoaXMuc3VnZ2VzdGlvbnMucHVzaChuZXcgU3VnZ2VzdGlvbihkYXRhLnJlc3VsdHNbaV0ubmFtZSwgZGF0YS5yZXN1bHRzW2ldLmZvcm1hdHRlZF9hZGRyZXNzKSk7XG5cdFx0ICAgICAgXHR0aGlzLmlkcy5hZGQoZGF0YS5yZXN1bHRzW2ldLnBsYWNlX2lkKTtcblx0XHQgICAgfVxuXHRcdCAgfSk7XG5cdFx0fSwgMTAwKTtcblx0XHR0aGlzLnBsYWNlc1NlcnZpY2UuZ2V0QXV0b2NvbXBsZXRlUmVzdWx0c0FkZHJlc3Moc2VhcmNoQmFyLnRleHQpLnN1YnNjcmliZSgoZGF0YTogYW55KSA9PiB7XG5cdFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGF0YS5wcmVkaWN0aW9ucy5sZW5ndGg7IGkrKykge1xuXHRcdFx0ICBcdGlmKCF0aGlzLmlkcy5oYXMoZGF0YS5wcmVkaWN0aW9uc1tpXS5wbGFjZV9pZCkpXG5cdFx0XHQgIFx0XHR0aGlzLnN1Z2dlc3Rpb25zLnB1c2gobmV3IFN1Z2dlc3Rpb24oZGF0YS5wcmVkaWN0aW9uc1tpXS5zdHJ1Y3R1cmVkX2Zvcm1hdHRpbmcubWFpbl90ZXh0LCBkYXRhLnByZWRpY3Rpb25zW2ldLnN0cnVjdHVyZWRfZm9ybWF0dGluZy5zZWNvbmRhcnlfdGV4dCkpO1xuXHRcdFx0ICBcdHRoaXMuaWRzLmFkZChkYXRhLnByZWRpY3Rpb25zW2ldLnBsYWNlX2lkKTtcblx0XHQgIFx0fVxuXHRcdH0pO1xuXHRcdC8vIHRoaXMucGxhY2VzU2VydmljZS5nZXRBdXRvY29tcGxldGVSZXN1bHRzRXN0YWJsaXNobWVudChzZWFyY2hCYXIudGV4dCkuc3Vic2NyaWJlKChkYXRhOiBhbnkpID0+IHtcblx0XHQvLyBcdCAgZm9yKHZhciBpID0gMDsgaSA8IGRhdGEucHJlZGljdGlvbnMubGVuZ3RoOyBpKyspIHtcblx0XHQvLyAgICAgXHRpZighdGhpcy5pZHMuaGFzKGRhdGEucHJlZGljdGlvbnNbaV0ucGxhY2VfaWQpKVxuXHRcdC8vICAgICBcdFx0dGhpcy5zdWdnZXN0aW9ucy5wdXNoKG5ldyBTdWdnZXN0aW9uKGRhdGEucHJlZGljdGlvbnNbaV0uc3RydWN0dXJlZF9mb3JtYXR0aW5nLm1haW5fdGV4dCwgZGF0YS5wcmVkaWN0aW9uc1tpXS5zdHJ1Y3R1cmVkX2Zvcm1hdHRpbmcuc2Vjb25kYXJ5X3RleHQpKTtcblx0XHQvLyAgICAgXHR0aGlzLmlkcy5hZGQoZGF0YS5wcmVkaWN0aW9uc1tpXS5wbGFjZV9pZCk7XG5cdFx0Ly8gICAgIH1cblx0XHQvLyB9KTtcblx0XHR0aGlzLnBsYWNlc1NlcnZpY2UuZ2V0QXV0b2NvbXBsZXRlUmVzdWx0c0NpdHkoc2VhcmNoQmFyLnRleHQpLnN1YnNjcmliZSgoZGF0YTogYW55KSA9PiB7XG5cdFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGF0YS5wcmVkaWN0aW9ucy5sZW5ndGg7IGkrKykge1xuXHRcdFx0ICBcdGlmKCF0aGlzLmlkcy5oYXMoZGF0YS5wcmVkaWN0aW9uc1tpXS5wbGFjZV9pZCkpXG5cdFx0XHQgIFx0XHR0aGlzLnN1Z2dlc3Rpb25zLnB1c2gobmV3IFN1Z2dlc3Rpb24oZGF0YS5wcmVkaWN0aW9uc1tpXS5zdHJ1Y3R1cmVkX2Zvcm1hdHRpbmcubWFpbl90ZXh0LCBkYXRhLnByZWRpY3Rpb25zW2ldLnN0cnVjdHVyZWRfZm9ybWF0dGluZy5zZWNvbmRhcnlfdGV4dCkpO1xuXHRcdFx0ICBcdHRoaXMuaWRzLmFkZChkYXRhLnByZWRpY3Rpb25zW2ldLnBsYWNlX2lkKTtcblx0XHQgIFx0fVxuXHRcdH0pO1xuICBcdH0sIDUwMCk7ICBcdFxuICB9XG5cbiAgYXV0b2NvbXBsZXRlKCkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIFx0dGhpcy5pZHMuY2xlYXIoKTtcbiAgICAgIHRoaXMuc3VnZ2VzdGlvbnMuc3BsaWNlKDApO1xuICAgICAgdGhpcy5wbGFjZXNTZXJ2aWNlLmdldFBsYWNlUmVzdWx0cyh0aGlzLmFkZHJlc3MpLnN1YnNjcmliZSgoZGF0YTogYW55KSA9PiB7XG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBkYXRhLnJlc3VsdHMubGVuZ3RoOyBpKyspIHtcblx0ICAgICAgXHRpZighdGhpcy5pZHMuaGFzKGRhdGEucmVzdWx0c1tpXS5wbGFjZV9pZCkpXG5cdCAgICAgIFx0XHR0aGlzLnN1Z2dlc3Rpb25zLnB1c2gobmV3IFN1Z2dlc3Rpb24oZGF0YS5yZXN1bHRzW2ldLm5hbWUsIGRhdGEucmVzdWx0c1tpXS5mb3JtYXR0ZWRfYWRkcmVzcykpO1xuXHQgICAgICBcdHRoaXMuaWRzLmFkZChkYXRhLnJlc3VsdHNbaV0ucGxhY2VfaWQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuXHQgICAgICB0aGlzLnBsYWNlc1NlcnZpY2UuZ2V0QXV0b2NvbXBsZXRlUmVzdWx0c0FkZHJlc3ModGhpcy5hZGRyZXNzKS5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4ge1xuXHQgICAgICBcdCAgZm9yKHZhciBpID0gMDsgaSA8IGRhdGEucHJlZGljdGlvbnMubGVuZ3RoOyBpKyspIHtcblx0ICAgICAgICAgIFx0aWYoIXRoaXMuaWRzLmhhcyhkYXRhLnByZWRpY3Rpb25zW2ldLnBsYWNlX2lkKSlcblx0ICAgICAgICAgIFx0XHR0aGlzLnN1Z2dlc3Rpb25zLnB1c2gobmV3IFN1Z2dlc3Rpb24oZGF0YS5wcmVkaWN0aW9uc1tpXS5zdHJ1Y3R1cmVkX2Zvcm1hdHRpbmcubWFpbl90ZXh0LCBkYXRhLnByZWRpY3Rpb25zW2ldLnN0cnVjdHVyZWRfZm9ybWF0dGluZy5zZWNvbmRhcnlfdGV4dCkpO1xuXHQgICAgICAgICAgXHR0aGlzLmlkcy5hZGQoZGF0YS5wcmVkaWN0aW9uc1tpXS5wbGFjZV9pZCk7XG5cdCAgICAgICAgICB9XG5cdCAgICAgIH0pO1xuXHQgICAgICAvLyB0aGlzLnBsYWNlc1NlcnZpY2UuZ2V0QXV0b2NvbXBsZXRlUmVzdWx0c0VzdGFibGlzaG1lbnQodGhpcy5hZGRyZXNzKS5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4ge1xuXHQgICAgICAvLyBcdCAgZm9yKHZhciBpID0gMDsgaSA8IGRhdGEucHJlZGljdGlvbnMubGVuZ3RoOyBpKyspIHtcblx0ICAgICAgLy8gICAgIFx0aWYoIXRoaXMuaWRzLmhhcyhkYXRhLnByZWRpY3Rpb25zW2ldLnBsYWNlX2lkKSlcblx0ICAgICAgLy8gICAgIFx0XHR0aGlzLnN1Z2dlc3Rpb25zLnB1c2gobmV3IFN1Z2dlc3Rpb24oZGF0YS5wcmVkaWN0aW9uc1tpXS5zdHJ1Y3R1cmVkX2Zvcm1hdHRpbmcubWFpbl90ZXh0LCBkYXRhLnByZWRpY3Rpb25zW2ldLnN0cnVjdHVyZWRfZm9ybWF0dGluZy5zZWNvbmRhcnlfdGV4dCkpO1xuXHQgICAgICAvLyAgICAgXHR0aGlzLmlkcy5hZGQoZGF0YS5wcmVkaWN0aW9uc1tpXS5wbGFjZV9pZCk7XG5cdCAgICAgIC8vICAgICB9XG5cdCAgICAgIC8vIH0pO1xuXHQgICAgICB0aGlzLnBsYWNlc1NlcnZpY2UuZ2V0QXV0b2NvbXBsZXRlUmVzdWx0c0NpdHkodGhpcy5hZGRyZXNzKS5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4ge1xuXHQgICAgICBcdCAgZm9yKHZhciBpID0gMDsgaSA8IGRhdGEucHJlZGljdGlvbnMubGVuZ3RoOyBpKyspIHtcblx0ICAgICAgICAgIFx0aWYoIXRoaXMuaWRzLmhhcyhkYXRhLnByZWRpY3Rpb25zW2ldLnBsYWNlX2lkKSlcblx0ICAgICAgICAgIFx0XHR0aGlzLnN1Z2dlc3Rpb25zLnB1c2gobmV3IFN1Z2dlc3Rpb24oZGF0YS5wcmVkaWN0aW9uc1tpXS5zdHJ1Y3R1cmVkX2Zvcm1hdHRpbmcubWFpbl90ZXh0LCBkYXRhLnByZWRpY3Rpb25zW2ldLnN0cnVjdHVyZWRfZm9ybWF0dGluZy5zZWNvbmRhcnlfdGV4dCkpO1xuXHQgICAgICAgICAgXHR0aGlzLmlkcy5hZGQoZGF0YS5wcmVkaWN0aW9uc1tpXS5wbGFjZV9pZCk7XG5cdCAgICAgICAgICB9XG5cdCAgICAgIH0pO1xuICAgICAgfSwgMTAwKTtcblxuICAgIH0sIDQwMCk7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1thcHBMb2dpbl0nXG59KVxuZXhwb3J0IGNsYXNzIExvZ2luRGlyZWN0aXZlIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLypcXG5BZGQgeW91ciBOYXRpdmVTY3JpcHQgc3BlY2lmaWMgc3R5bGVzIGhlcmUuXFxuVG8gbGVhcm4gbW9yZSBhYm91dCBzdHlsaW5nIGluIE5hdGl2ZVNjcmlwdCBzZWU6XFxuaHR0cHM6Ly9kb2NzLm5hdGl2ZXNjcmlwdC5vcmcvYW5ndWxhci91aS9zdHlsaW5nXFxuKi9cXG5cXG4ubG9naW4ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgY29sb3I6ICNhYzAwZTY7XFxuICAgIC8qcGFkZGluZzogNnB4IDI0cHg7Ki9cXG4gICAgYm9yZGVyLXdpZHRoOiAxO1xcbiAgICBib3JkZXItY29sb3I6ICNhYzAwZTY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZmxvYXQ6IGNlbnRlcjtcXG4gICAgbWFyZ2luOiBhdXRvOyBcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJTZWdvZSBVSVxcXCIsQXJpYWwsc2Fucy1zZXJpZjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTU7XFxuICAgIHdpZHRoOiAxMjA7XFxuICAgIGhlaWdodDogNDA7XFxufVxcblxcbi5sb2dpbjpoaWdobGlnaHRlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWU2ZmY7XFxufVxcblxcbi5sb2dpbi1pbmZvIHtcXG5cXHRtYXJnaW4tdG9wOiAxMjA7XFxufVxcblxcbi5ob21lc2NyZWVuLWxvZ28ge1xcblxcdG1hcmdpbi1ib3R0b206IDIwMDtcXG59XFxuXFxuLmgxIHtcXG5cXHRmb250LXNpemU6IDUwO1xcblxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxuXFx0Y29sb3I6ICNhYzAwZTY7XFxufVxcblxcbi5sb2dpbi13cmFwcGVyIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xcbn1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImxvZ2luLXdyYXBwZXJcXFwiPlxcbiAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJsb2dpbi1pbmZvXFxcIj5cXG4gICAgPEltYWdlIHNyYz1cXFwifi9pbWcvbG9nby5wbmdcXFwiIGhlaWdodD1cXFwiMTgwXFxcIiB3aWR0aD1cXFwiMTgwXFxcIiBjbGFzcz1cXFwiaG9tZXNjcmVlbi1sb2dvXFxcIj48L0ltYWdlPlxcbjwhLS0gICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwic2xvZ2Fuc1xcXCI+XFxuICAgICAgPExhYmVsIGNsYXNzPVxcXCJoM1xcXCIgdGV4dD1cXFwiRmluZCBSaWRlcyBGYXN0XFxcIj48L0xhYmVsPlxcbiAgICAgIDxMYWJlbCBjbGFzcz1cXFwiaDNcXFwiIHRleHQ9XFxcIkNvbm5lY3Qgd2l0aCBvdGhlciBzdHVkZW50c1xcXCI+PC9MYWJlbD5cXG4gICAgPC9TdGFja0xheW91dD4gLS0+XFxuICA8L1N0YWNrTGF5b3V0PlxcbiAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJsb2dpbl93cmFwcGVyXFxcIj5cXG4gICAgPEJ1dHRvbiBjbGFzcz1cXFwibG9naW5cXFwiICh0YXApPVxcXCJ0b0xvZ0luKClcXFwiIHRleHQ9XFxcIkxvZ2luXFxcIj48L0J1dHRvbj5cXG4gICAgPEJ1dHRvbiBjbGFzcz1cXFwibG9naW5cXFwiICh0YXApPVxcXCJ0b1NpZ25VcCgpXFxcIiB0ZXh0PVxcXCJTaWduIHVwXFxcIj48L0J1dHRvbj5cXG4gIDwvU3RhY2tMYXlvdXQ+XFxuPC9TdGFja0xheW91dD5cXG5cXG48IS0tXFxuT3JpZ2luYWwgV2ViIHRlbXBsYXRlOlxcblxcbjxkaXYgY2xhc3M9XFxcImNvbnRlbnQtcmlnaHRcXFwiPlxcbiAgPGRpdiBjbGFzcz1cXFwibG9naW5fd3JhcHBlclxcXCI+XFxuICAgICAgPGlucHV0IHR5cGU9XFxcImJ1dHRvblxcXCIgdmFsdWU9XFxcIkxvZ2luXFxcIiBjbGFzcz1cXFwibG9naW5cXFwiIChjbGljayk9XFxcInRvTG9nSW4oKVxcXCIgLz5cXG4gICAgICA8aW5wdXQgdHlwZT1cXFwiYnV0dG9uXFxcIiB2YWx1ZT1cXFwiU2lnbiB1cFxcXCIgY2xhc3M9XFxcImxvZ2luXFxcIiBpZD1cXFwibG9naW4yXFxcIiAoY2xpY2spPVxcXCJ0b1NpZ25VcCgpXFxcIi8+XFxuICA8L2Rpdj5cXG48L2Rpdj5cXG5cXG48ZGl2IGNsYXNzPVxcXCJjb250ZW50LWxlZnRcXFwiPlxcbiAgPGRpdiBjbGFzcz1cXFwibG9naW5faW5mb1xcXCI+XFxuICAgIDxoMT5Db2xsZWdlUG9vbDwvaDE+XFxuICAgIDxpbWcgc3JjPVxcXCJzcmMvaW1nL2xvZ28ucG5nXFxcIiBhbHQ9XFxcIkxvZ29cXFwiIGhlaWdodD1cXFwiOTBcXFwiIHdpZHRoPVxcXCI5MFxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcInNsb2dhbnNcXFwiPlxcbiAgICAgIDxoMz5GaW5kIFJpZGVzIEZhc3Q8YnI+XFxuICAgICAgQ29ubmVjdCB3aXRoIG90aGVyIHN0dWRlbnRzPC9oMz5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG48L2Rpdj5cXG4tLT5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcbi8vIGltcG9ydCB7IENvZ25pdG9BdXRoIH0gZnJvbSAnYW1hem9uLWNvZ25pdG8tYXV0aC1qcy9kaXN0L2FtYXpvbi1jb2duaXRvLWF1dGgnO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2VcIjtcbi8vIGltcG9ydCBBdXRoIGZyb20gJ0Bhd3MtYW1wbGlmeS9hdXRoJztcbi8vIGNvbnN0IGZpcmViYXNlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIik7XG5pbXBvcnQgKiBhcyBmaXJlYmFzZSBmcm9tICduYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlJztcbi8vIGltcG9ydCB7IEFuZ3VsYXJGaXJlQXV0aCB9IGZyb20gJ0Bhbmd1bGFyL2ZpcmUvYXV0aCc7XG4vLyBpbXBvcnQgeyBhdXRoIH0gZnJvbSAnZmlyZWJhc2UvYXBwJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWxvZ2luJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xvZ2luLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbG9naW4uY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSBwYWdlOiBQYWdlKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgXHR0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcbiAgICB2YXIgZmlyZWJhc2VDb25maWcgPSB7XG4gICAgICBhcGlLZXk6IFwiQUl6YVN5Qkd1aVlwTTEzOFE2YXlxRE1SVVZXSnAxQ0U5V0IwOU53XCIsXG4gICAgICBhdXRoRG9tYWluOiBcImNvbGxlZ2Vwb29sLTE1NTI3NDkxMTg2MTcuZmlyZWJhc2VhcHAuY29tXCIsXG4gICAgICBkYXRhYmFzZVVSTDogXCJodHRwczovL2NvbGxlZ2Vwb29sLTE1NTI3NDkxMTg2MTcuZmlyZWJhc2Vpby5jb21cIixcbiAgICAgIHByb2plY3RJZDogXCJjb2xsZWdlcG9vbC0xNTUyNzQ5MTE4NjE3XCIsXG4gICAgICBzdG9yYWdlQnVja2V0OiBcImNvbGxlZ2Vwb29sLTE1NTI3NDkxMTg2MTcuYXBwc3BvdC5jb21cIixcbiAgICAgIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjM3NTI2MzY4MDE4M1wiLFxuICAgICAgYXBwSUQ6IFwiY29sbGVnZXBvb2wtMTU1Mjc0OTExODYxN1wiLFxuICAgIH07XG5cbiAgICBmaXJlYmFzZS5pbml0KGZpcmViYXNlQ29uZmlnKS50aGVuKFxuICAgICAgKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcImZpcmViYXNlLmluaXQgZG9uZVwiKTtcbiAgICAgIH0sXG4gICAgICBlcnJvciA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBmaXJlYmFzZS5pbml0IGVycm9yOiAke2Vycm9yfWApO1xuICAgICAgfVxuICAgICk7XG4gICAgLy8gZmlyZWJhc2UuYXV0aCgpLmNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCgnYWRtaW4nLCAna3l2ZXJuMTIzJykuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAvLyAgIC8vIEhhbmRsZSBFcnJvcnMgaGVyZS5cbiAgICAvLyAgIHZhciBlcnJvckNvZGUgPSBlcnJvci5jb2RlO1xuICAgIC8vICAgdmFyIGVycm9yTWVzc2FnZSA9IGVycm9yLm1lc3NhZ2U7XG4gICAgLy8gICAvLyAuLi5cbiAgICAvLyB9KTtcblxuICB9XG5cbiAgdG9Mb2dJbigpIHtcbiAgICAvLyBBdXRoLnNpZ25JbihcInBoaWxsaW1cIiwgXCJDb2xsZWdlcG9vbDY5KlwiKVxuICAgIC8vIC50aGVuKHVzZXIgPT4ge1xuICAgIC8vICAgICBjb25zb2xlLmxvZyh1c2VyKVxuICAgIC8vICAgICBjb25zb2xlLmxvZyhcInJlZGlyZWN0aW5nXCIpXG5cbiAgICAvLyB9KVxuXG4gICAgdmFyIGNyZWRlbnRpYWxzIDogZmlyZWJhc2UuTG9naW5PcHRpb25zID0ge1xuICAgICAgcGFzc3dvcmRPcHRpb25zOiB7XG4gICAgICAgIGVtYWlsOiAnYWRhbS55ZWVAZ21haWwuY29tJyxcbiAgICAgICAgcGFzc3dvcmQ6ICdreXZlcm4xMjMnLFxuICAgICAgfSxcbiAgICAgIHR5cGU6IGZpcmViYXNlLkxvZ2luVHlwZS5QQVNTV09SRFxuICAgIH1cbiAgICBmaXJlYmFzZS5sb2dpbihjcmVkZW50aWFscykuY2F0Y2goKGVycikgPT4ge1xuICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICB9KVxuICAgIGZpcmViYXNlLmdldEN1cnJlbnRVc2VyKCkudGhlbigocmVzKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgIH0pXG5cbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ25hdmlnYXRpb24nXSk7XG4gIFx0Ly8gd2luZG93LmxvY2F0aW9uLmhyZWY9J2h0dHBzOi8vY29sbGVnZXBvb2xpbmcuYXV0aC51cy1lYXN0LTIuYW1hem9uY29nbml0by5jb20vbG9naW4/cmVzcG9uc2VfdHlwZT10b2tlbiZjbGllbnRfaWQ9NHNzbG1tZ3Y5cG41bGI1MDg3YWFqNXI1OTkmcmVkaXJlY3RfdXJpPWh0dHA6Ly9sb2NhbGhvc3Q6NDIwMC9sb2dpbnJvdXRlJnN0YXRlPVNUQVRFJnNjb3BlPWF3cy5jb2duaXRvLnNpZ25pbi51c2VyLmFkbWluK29wZW5pZCc7XG4gIH1cblxuICB0b1NpZ25VcCgpe1xuICAgIGZpcmViYXNlLmNyZWF0ZVVzZXIoe1xuICAgICAgZW1haWw6ICdhZGFtLnllZUBnbWFpbC5jb20nLFxuICAgICAgcGFzc3dvcmQ6ICdreXZlcm4xMjMnXG4gICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICB9KVxuICAgIC8vIHRoaXMuYWZBdXRoLmF1dGguY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkKCdhZGFtLnllZUBnbWFpbC5jb20nLCAna3l2ZXJuMTIzJyk7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWyduYXZpZ2F0aW9uJ10pO1xuICBcdC8vIHdpbmRvdy5sb2NhdGlvbi5ocmVmPSdodHRwczovL2NvbGxlZ2Vwb29saW5nLmF1dGgudXMtZWFzdC0yLmFtYXpvbmNvZ25pdG8uY29tL3NpZ251cD9yZXNwb25zZV90eXBlPXRva2VuJmNsaWVudF9pZD00c3NsbW1ndjlwbjVsYjUwODdhYWo1cjU5OSZyZWRpcmVjdF91cmk9aHR0cDovL2xvY2FsaG9zdDo0MjAwL2xvZ2lucm91dGUmc3RhdGU9U1RBVEUmc2NvcGU9YXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4rb3BlbmlkJztcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSnd0SGVscGVyU2VydmljZSB9IGZyb20gJ0BhdXRoMC9hbmd1bGFyLWp3dCc7XG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gJy4vdXNlci5zZXJ2aWNlJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuL3VzZXIubW9kZWwnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFBheW1lbnRTZXJ2aWNlIH0gZnJvbSAnLi9wYXltZW50LnNlcnZpY2UnO1xuaW1wb3J0ICogYXMgZmlyZWJhc2UgZnJvbSAnbmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZSc7XG5pbXBvcnQgKiBhcyBhcHBTZXR0aW5ncyBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uLXNldHRpbmdzJztcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBMb2dpbmNoZWNrU2VydmljZSB7XG5cdC8vbXlTdG9yYWdlID0gd2luZG93LmxvY2FsU3RvcmFnZTtcblx0bXlTdG9yYWdlID0gbnVsbDtcblx0Ly91c2VyIGZyb20gZGF0YWJhc2Vcblx0dXNlcjtcblx0Ly9saXN0IG9mIGFsbCB1c2VycyBmcm9tIGRhdGFiYXNlXG5cdHVzZXJzO1xuXHQvL3VzZXIgaW5mbyBmcm9tIGNvZ25pdG9cblx0dXNlckluZm8gPSBudWxsO1xuXHR1aWQ7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlLCBwcml2YXRlIHBheW1lbnRTZXJ2aWNlOiBQYXltZW50U2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMpIHsgfVxuXG4gIGFkZFVzZXJUb0ZpcmVzdG9yZSh1aWQsIGFkZHJlc3MsIGJpcnRoZGF0ZSwgZW1haWwsIGZpcnN0X25hbWUsIGxhc3RfbmFtZSwgZ2VuZGVyLCBwaG9uZV9udW1iZXIsIHJpZGVzX2dpdmVuLCByaWRlc19yZWNlaXZlZCwgcHJvZmlsZV9zb3VyY2UsIHRva2VuKSB7XG4gIFx0Y29uc3QgdXNlcnNDb2xsZWN0aW9uID0gZmlyZWJhc2UuZmlyZXN0b3JlLmNvbGxlY3Rpb24oJ3VzZXJzJyk7XG4gIFx0dXNlcnNDb2xsZWN0aW9uLmRvYyh1aWQpLnNldCh7XG4gIFx0XHRhZGRyZXNzOiBhZGRyZXNzLFxuICBcdFx0YmlydGhkYXRlOiBiaXJ0aGRhdGUsXG4gIFx0XHRlbWFpbDogZW1haWwsXG4gIFx0XHRmaXJzdF9uYW1lOiBmaXJzdF9uYW1lLFxuICBcdFx0bGFzdF9uYW1lOiBsYXN0X25hbWUsXG4gIFx0XHRnZW5kZXI6IGdlbmRlcixcbiAgXHRcdHBob25lX251bWJlcjogcGhvbmVfbnVtYmVyLFxuICBcdFx0cmlkZXNfZ2l2ZW46IHJpZGVzX2dpdmVuLFxuICBcdFx0cmlkZXNfcmVjZWl2ZWQ6IHJpZGVzX3JlY2VpdmVkLFxuICAgICAgcHJvZmlsZV9zb3VyY2U6IHByb2ZpbGVfc291cmNlLFxuICBcdFx0cG9zdHM6IFtdLFxuICAgICAgY2hhdHM6IFtdLFxuICAgICAgdG9rZW5zOiBbdG9rZW5dXG4gIFx0fSk7XG4gIH1cblxuICBkZWNvZGVUb2tlbih0b2tlbikge1xuXG4gIH1cblxuICBjaGVja1VzZXIoKSB7XG5cbiAgfVxuXG4gIGNsZWFySW5mbygpIHtcbiAgXHR0aGlzLnVzZXIgPSBudWxsO1xuICBcdHRoaXMudXNlckluZm8gPSBudWxsO1xuICBcdHRoaXMudXNlcnMgPSBudWxsO1xuICBcdHRoaXMudWlkID0gbnVsbDtcbiAgXHRhcHBTZXR0aW5ncy5jbGVhcigpO1xuICB9XG4gIFxuICBhZGRVc2VyVG9CcmFpbnRyZWUodXNlcm5hbWUsIG5hbWUsIGVtYWlsKSB7XG4gIFx0dGhpcy5wYXltZW50U2VydmljZS5hZGRQYXltZW50VXNlcih0aGlzLnVpZCwgdXNlcm5hbWUsIG5hbWUsIGVtYWlsKS5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4ge1xuICBcdFx0ZmlyZWJhc2UuZmlyZXN0b3JlLmNvbGxlY3Rpb24oJ3VzZXJzJykuZG9jKHRoaXMudWlkKS51cGRhdGUoe1xuICBcdFx0XHRwYXltZW50X2lkOiBkYXRhLmN1c3RvbWVyLmlkXG4gIFx0XHR9KVxuICBcdH0pXG4gIFx0Ly8gdGhpcy5wYXltZW50U2VydmljZS5nZXRQYXltZW50VXNlckJ5SWQoJzI1ODcwMzk1NicpLnN1YnNjcmliZSgoZGF0YTogYW55KSA9PiB7XG4gIFx0Ly8gXHRjb25zb2xlLmxvZyhkYXRhKTtcbiAgXHQvLyB9KVxuICBcdGNvbnNvbGUubG9nKCdhZGRlZCB0byBicmFpbnRyZWUnKTtcbiAgfVxuXG4gIGxvZ2luVXNlcih1aWQpIHtcbiAgXHRhcHBTZXR0aW5ncy5zZXRTdHJpbmcoXCJ1aWRcIiwgdWlkKTtcbiAgXHRjb25zb2xlLmxvZyh1aWQpXG4gIFx0dGhpcy51aWQgPSB1aWQ7XG4gIH1cblxuICBsb2dpbkNoZWNrKCkge1xuXHRpZih0aGlzLmdldFVzZXIgPT0gbnVsbClcblx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ3dlbGNvbWUnXSwge2NsZWFySGlzdG9yeTogdHJ1ZX0pXG4gIH1cblxuICBnZXRVc2VyRnJvbUxvY2FsU3RvcmFnZSgpIHtcblx0cmV0dXJuIGFwcFNldHRpbmdzLmdldFN0cmluZyhcInVpZFwiKTtcbiAgfVxuXG4gIGdldFVzZXIoKSB7XG5cdHRoaXMudWlkID0gdGhpcy5nZXRVc2VyRnJvbUxvY2FsU3RvcmFnZSgpO1xuXHRyZXR1cm4gdGhpcy51aWQ7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSnd0SGVscGVyU2VydmljZSB9IGZyb20gJ0BhdXRoMC9hbmd1bGFyLWp3dCc7XG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gJy4vdXNlci5zZXJ2aWNlJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuL3VzZXIubW9kZWwnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFBheW1lbnRTZXJ2aWNlIH0gZnJvbSAnLi9wYXltZW50LnNlcnZpY2UnO1xuaW1wb3J0ICogYXMgZmlyZWJhc2UgZnJvbSAnbmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZSc7XG5pbXBvcnQgKiBhcyBhcHBTZXR0aW5ncyBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uLXNldHRpbmdzJztcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBMb2dpbmNoZWNrU2VydmljZSB7XG5cdC8vbXlTdG9yYWdlID0gd2luZG93LmxvY2FsU3RvcmFnZTtcblx0bXlTdG9yYWdlID0gbnVsbDtcblx0Ly91c2VyIGZyb20gZGF0YWJhc2Vcblx0dXNlcjtcblx0Ly9saXN0IG9mIGFsbCB1c2VycyBmcm9tIGRhdGFiYXNlXG5cdHVzZXJzO1xuXHQvL3VzZXIgaW5mbyBmcm9tIGNvZ25pdG9cblx0dXNlckluZm8gPSBudWxsO1xuXHR1aWQ7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlLCBwcml2YXRlIHBheW1lbnRTZXJ2aWNlOiBQYXltZW50U2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMpIHsgfVxuXG4gIGFkZFVzZXJUb0ZpcmVzdG9yZSh1aWQsIGFkZHJlc3MsIGJpcnRoZGF0ZSwgZW1haWwsIGZpcnN0X25hbWUsIGxhc3RfbmFtZSwgZ2VuZGVyLCBwaG9uZV9udW1iZXIsIHJpZGVzX2dpdmVuLCByaWRlc19yZWNlaXZlZCwgcHJvZmlsZV9zb3VyY2UsIHRva2VuKSB7XG4gIFx0Y29uc3QgdXNlcnNDb2xsZWN0aW9uID0gZmlyZWJhc2UuZmlyZXN0b3JlLmNvbGxlY3Rpb24oJ3VzZXJzJyk7XG4gIFx0dXNlcnNDb2xsZWN0aW9uLmRvYyh1aWQpLnNldCh7XG4gIFx0XHRhZGRyZXNzOiBhZGRyZXNzLFxuICBcdFx0YmlydGhkYXRlOiBiaXJ0aGRhdGUsXG4gIFx0XHRlbWFpbDogZW1haWwsXG4gIFx0XHRmaXJzdF9uYW1lOiBmaXJzdF9uYW1lLFxuICBcdFx0bGFzdF9uYW1lOiBsYXN0X25hbWUsXG4gIFx0XHRnZW5kZXI6IGdlbmRlcixcbiAgXHRcdHBob25lX251bWJlcjogcGhvbmVfbnVtYmVyLFxuICBcdFx0cmlkZXNfZ2l2ZW46IHJpZGVzX2dpdmVuLFxuICBcdFx0cmlkZXNfcmVjZWl2ZWQ6IHJpZGVzX3JlY2VpdmVkLFxuICAgICAgcHJvZmlsZV9zb3VyY2U6IHByb2ZpbGVfc291cmNlLFxuICBcdFx0cG9zdHM6IFtdLFxuICAgICAgY2hhdHM6IFtdLFxuICAgICAgdG9rZW5zOiBbdG9rZW5dXG4gIFx0fSk7XG4gIH1cblxuICBkZWNvZGVUb2tlbih0b2tlbikge1xuXG4gIH1cblxuICBjaGVja1VzZXIoKSB7XG5cbiAgfVxuXG4gIGNsZWFySW5mbygpIHtcbiAgXHR0aGlzLnVzZXIgPSBudWxsO1xuICBcdHRoaXMudXNlckluZm8gPSBudWxsO1xuICBcdHRoaXMudXNlcnMgPSBudWxsO1xuICBcdHRoaXMudWlkID0gbnVsbDtcbiAgXHRhcHBTZXR0aW5ncy5jbGVhcigpO1xuICB9XG4gIFxuICBhZGRVc2VyVG9CcmFpbnRyZWUodXNlcm5hbWUsIG5hbWUsIGVtYWlsKSB7XG4gIFx0dGhpcy5wYXltZW50U2VydmljZS5hZGRQYXltZW50VXNlcih0aGlzLnVpZCwgdXNlcm5hbWUsIG5hbWUsIGVtYWlsKS5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4ge1xuICBcdFx0ZmlyZWJhc2UuZmlyZXN0b3JlLmNvbGxlY3Rpb24oJ3VzZXJzJykuZG9jKHRoaXMudWlkKS51cGRhdGUoe1xuICBcdFx0XHRwYXltZW50X2lkOiBkYXRhLmN1c3RvbWVyLmlkXG4gIFx0XHR9KVxuICBcdH0pXG4gIFx0Ly8gdGhpcy5wYXltZW50U2VydmljZS5nZXRQYXltZW50VXNlckJ5SWQoJzI1ODcwMzk1NicpLnN1YnNjcmliZSgoZGF0YTogYW55KSA9PiB7XG4gIFx0Ly8gXHRjb25zb2xlLmxvZyhkYXRhKTtcbiAgXHQvLyB9KVxuICBcdGNvbnNvbGUubG9nKCdhZGRlZCB0byBicmFpbnRyZWUnKTtcbiAgfVxuXG4gIGxvZ2luVXNlcih1aWQpIHtcbiAgXHRhcHBTZXR0aW5ncy5zZXRTdHJpbmcoXCJ1aWRcIiwgdWlkKTtcbiAgXHRjb25zb2xlLmxvZyh1aWQpXG4gIFx0dGhpcy51aWQgPSB1aWQ7XG4gIH1cblxuICBsb2dpbkNoZWNrKCkge1xuXHRpZih0aGlzLmdldFVzZXIgPT0gbnVsbClcblx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ3dlbGNvbWUnXSwge2NsZWFySGlzdG9yeTogdHJ1ZX0pXG4gIH1cblxuICBnZXRVc2VyRnJvbUxvY2FsU3RvcmFnZSgpIHtcblx0cmV0dXJuIGFwcFNldHRpbmdzLmdldFN0cmluZyhcInVpZFwiKTtcbiAgfVxuXG4gIGdldFVzZXIoKSB7XG5cdHRoaXMudWlkID0gdGhpcy5nZXRVc2VyRnJvbUxvY2FsU3RvcmFnZSgpO1xuXHRyZXR1cm4gdGhpcy51aWQ7XG4gIH1cblxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi8qXFxuQWRkIHlvdXIgTmF0aXZlU2NyaXB0IHNwZWNpZmljIHN0eWxlcyBoZXJlLlxcblRvIGxlYXJuIG1vcmUgYWJvdXQgc3R5bGluZyBpbiBOYXRpdmVTY3JpcHQgc2VlOlxcbmh0dHBzOi8vZG9jcy5uYXRpdmVzY3JpcHQub3JnL2FuZ3VsYXIvdWkvc3R5bGluZ1xcbiovXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPFN0YWNrTGF5b3V0PlxcbiAgPExhYmVsIHRleHQ9XFxcImxvZ2lucm91dGUgd29ya3NcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIj48L0xhYmVsPlxcbiAgPExhYmVsIHRleHQ9XFxcIlRoaXMgaXMgYSBtaWdyYXRlZCBjb21wb25lbnRcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIj48L0xhYmVsPlxcbiAgPExhYmVsIHRleHQ9XFxcIlVwZGF0ZSBpdCB0byBwcm92aWRlIHRoZSBVSSBlbGVtZW50cyByZXF1aXJlZCBpbiB5b3VyIG1vYmlsZSBhcHBcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIj48L0xhYmVsPlxcbjwvU3RhY2tMYXlvdXQ+XFxuXFxuPCEtLVxcbk9yaWdpbmFsIFdlYiB0ZW1wbGF0ZTpcXG5cXG48cD5cXG4gIFJlZGlyZWN0aW5nLi4uXFxuPC9wPlxcblxcbi0tPlwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExvZ2luY2hlY2tTZXJ2aWNlIH0gZnJvbSAnLi4vbG9naW5jaGVjay5zZXJ2aWNlJztcbmltcG9ydCB7IFRyYW5zZmVyU2VydmljZSB9IGZyb20gJy4uL2RhdGF0cmFuc2Zlci5zZXJ2aWNlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1sb2dpbnJvdXRlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xvZ2lucm91dGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9sb2dpbnJvdXRlLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBMb2dpbnJvdXRlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGxvZ2luY2hlY2tTZXJ2aWNlOiBMb2dpbmNoZWNrU2VydmljZSwgcHJpdmF0ZSB0cmFuc2ZlclNlcnZpY2U6IFRyYW5zZmVyU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikgeyB9XG4gIGlkVG9rZW4gPSB0aGlzLmdldFBhcmFtZXRlckJ5TmFtZShcImlkX3Rva2VuXCIpO1xuICBuZ09uSW5pdCgpIHtcbiAgXHRpZih0aGlzLmlkVG9rZW4gPT0gbnVsbCB8fCB0aGlzLmlkVG9rZW4gPT0gJycpXG4gIFx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKCcvbG9naW4nKTtcblxuICBcdHRoaXMubG9naW5jaGVja1NlcnZpY2UuZGVjb2RlVG9rZW4odGhpcy5pZFRva2VuKTtcbiAgXHR0aGlzLmxvZ2luY2hlY2tTZXJ2aWNlLmNoZWNrVXNlcigpO1xuXG4gIH1cblxuXHRnZXRQYXJhbWV0ZXJCeU5hbWUobmFtZSkge1xuXHQgICAgdmFyIHVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuXHQgICAgbmFtZSA9IG5hbWUucmVwbGFjZSgvW1xcW1xcXV0vZywgXCJcXFxcJCZcIik7XG5cdCAgICB2YXIgcmVnZXggPSBuZXcgUmVnRXhwKFwiWz8mI11cIiArIG5hbWUgKyBcIig9KFteJiNdKil8JnwjfCQpXCIpLFxuXHQgICAgICAgIHJlc3VsdHMgPSByZWdleC5leGVjKHVybCk7XG5cdCAgICBpZiAoIXJlc3VsdHMpIHJldHVybiBudWxsO1xuXHQgICAgaWYgKCFyZXN1bHRzWzJdKSByZXR1cm4gJyc7XG5cdCAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHJlc3VsdHNbMl0ucmVwbGFjZSgvXFwrL2csIFwiIFwiKSk7XG5cdH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gXCIvKiBBZGQgbW9iaWxlIHN0eWxlcyBmb3IgdGhlIGNvbXBvbmVudCBoZXJlLiAgKi9cXG5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8QnV0dG9uIHRleHQ9XFxcIm1lc3NhZ2UtbW9kYWwgd29ya3MhXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIj48L0J1dHRvbj5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1tZXNzYWdlLW1vZGFsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL21lc3NhZ2UtbW9kYWwuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9tZXNzYWdlLW1vZGFsLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBNZXNzYWdlTW9kYWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi8qXFxuQWRkIHlvdXIgTmF0aXZlU2NyaXB0IHNwZWNpZmljIHN0eWxlcyBoZXJlLlxcblRvIGxlYXJuIG1vcmUgYWJvdXQgc3R5bGluZyBpbiBOYXRpdmVTY3JpcHQgc2VlOlxcbmh0dHBzOi8vZG9jcy5uYXRpdmVzY3JpcHQub3JnL2FuZ3VsYXIvdWkvc3R5bGluZ1xcbiovXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPFBhZ2UuYWN0aW9uQmFyPlxcbiAgICA8QWN0aW9uQmFyIHRpdGxlPVxcXCJ7eyBhY3Rpb25CYXJUaXRsZSB9fVxcXCI+XFxuICAgIFxcdDxBY3Rpb25JdGVtICh0YXApPVxcXCJ0b01lc3NhZ2VzKClcXFwiIGljb249XFxcIn4vaW1nL3NlbmRfbWVzc2FnZV9pY29uLnBuZ1xcXCIgaW9zLnBvc2l0aW9uPVxcXCJyaWdodFxcXCIgd2lkdGg9XFxcIjIwXFxcIiBoZWlnaHQ9XFxcIjIwXFxcIiAjYWN0aW9uSXRlbT48L0FjdGlvbkl0ZW0+XFxuICAgIDwvQWN0aW9uQmFyPlxcbjwvUGFnZS5hY3Rpb25CYXI+XFxuXFxuPFRhYlZpZXcgWyhuZ01vZGVsKV09XFxcInRhYlNlbGVjdGVkSW5kZXhcXFwiICh0YWJJdGVtVGFwKT1cXFwiaG9tZSgpXFxcIiAoc2VsZWN0ZWRJbmRleENoYW5nZWQpPVxcXCJvblNlbGVjdGVkSW5kZXhDaGFuZ2VkKCRldmVudClcXFwiIGFuZHJvaWRUYWJzUG9zaXRpb249XFxcImJvdHRvbVxcXCIgc2VsZWN0ZWRUYWJUZXh0Q29sb3I9XFxcIiNhYzAwZTZcXFwiICN0YWJWaWV3PlxcbiAgICA8UGFnZSAqdGFiSXRlbT1cXFwiaG9tZVRhYlxcXCI+XFxuICAgIFxcdDxhcHAtaG9tZT48L2FwcC1ob21lPlxcbiAgICA8L1BhZ2U+XFxuICAgIDxQYWdlICp0YWJJdGVtPVxcXCJzZWFyY2hUYWJcXFwiPlxcbiAgICBcXHQ8YXBwLXNlYXJjaD48L2FwcC1zZWFyY2g+XFxuICAgIDwvUGFnZT5cXG4gICAgPFBhZ2UgKnRhYkl0ZW09XFxcImhpc3RvcnlUYWJcXFwiPlxcbiAgICBcXHQ8YXBwLWhpc3Rvcnk+PC9hcHAtaGlzdG9yeT5cXG4gICAgPC9QYWdlPlxcbiAgICA8UGFnZSAqdGFiSXRlbT1cXFwic2V0dGluZ3NUYWJcXFwiPlxcbiAgICBcXHQ8YXBwLXNldHRpbmdzPjwvYXBwLXNldHRpbmdzPlxcbiAgICA8L1BhZ2U+XFxuPC9UYWJWaWV3PlxcblxcblxcblxcbjwhLS1cXG5PcmlnaW5hbCBXZWIgdGVtcGxhdGU6XFxuXFxuPGRpdiBjbGFzcz1cXFwidG9wbmF2XFxcIj5cXG5cXHQ8ZGl2IGNsYXNzPVxcXCJuYXZidG5zXFxcIj5cXG5cXHRcXHQ8YSAoY2xpY2spPVxcXCJ0b0hvbWUoKVxcXCIgY2xhc3M9XFxcImFjdGl2ZSBuYXZpZ2F0aW9uXFxcIiBpZD1cXFwiaG9tZW5hdlxcXCI+SG9tZTwvYT5cXG5cXHRcXHQ8YSAoY2xpY2spPVxcXCJ0b0hpc3RvcnkoKVxcXCIgY2xhc3M9XFxcIm5hdmlnYXRpb25cXFwiIGlkPVxcXCJoaXN0b3J5bmF2XFxcIj5IaXN0b3J5PC9hPlxcblxcdFxcdDxhIChjbGljayk9XFxcInRvUGF5bWVudHMoKVxcXCIgY2xhc3M9XFxcIm5hdmlnYXRpb25cXFwiIGlkPVxcXCJwYXltZW50c25hdlxcXCI+UGF5bWVudHM8L2E+XFxuXFx0XFx0PGEgKGNsaWNrKT1cXFwidG9TZXR0aW5ncygpXFxcIiBjbGFzcz1cXFwibmF2aWdhdGlvblxcXCIgaWQ9XFxcInNldHRpbmdzbmF2XFxcIj5TZXR0aW5nczwvYT5cXG5cXHRcXHQ8YSAoY2xpY2spPVxcXCJwb3N0KClcXFwiIGNsYXNzPVxcXCJuYXZpZ2F0aW9uXFxcIiBpZD1cXFwicG9zdG5hdlxcXCI+UG9zdDwvYT5cXG5cXHQ8L2Rpdj5cXG5cXG5cXHQ8ZGl2IGNsYXNzPVxcXCJpbWduYXZcXFwiPlxcblxcdFxcdDxpbWcgc3JjPVxcXCJzcmMvaWNvbi5wbmdcXFwiIChjbGljayk9XFxcImRyb3BNZW51KClcXFwiPlxcblxcdDwvZGl2PlxcbjwvZGl2PlxcblxcbjxkaXYgY2xhc3M9XFxcImNhcmV0XFxcIiBpZD1cXFwiZHJvcGRvd24tY2FyZXRcXFwiPjwvZGl2PlxcbjxkaXYgY2xhc3M9XFxcImRyb3Bkb3duXFxcIiBpZD1cXFwiZHJvcGRvd24tbWVudVxcXCI+XFxuXFx0PGRpdiBjbGFzcz1cXFwiZHJvcGRvd24tb3B0aW9uXFxcIiAoY2xpY2spPVxcXCJ0b0hvbWUoKVxcXCI+XFxuXFx0XFx0PHNwYW4+SG9tZTwvc3Bhbj5cXG5cXHQ8L2Rpdj5cXG5cXHQ8ZGl2IGNsYXNzPVxcXCJkcm9wZG93bi1vcHRpb25cXFwiIChjbGljayk9XFxcInRvU2V0dGluZ3MoKVxcXCI+XFxuXFx0XFx0PHNwYW4+U2V0dGluZ3M8L3NwYW4+XFxuXFx0PC9kaXY+XFxuXFx0PGRpdiBjbGFzcz1cXFwiZHJvcGRvd24tb3B0aW9uXFxcIiAoY2xpY2spPVxcXCJsb2dvdXQoKVxcXCI+XFxuXFx0XFx0PHNwYW4+TG9nb3V0PC9zcGFuPlxcblxcdDwvZGl2PlxcblxcdDxkaXYgY2xhc3M9XFxcImRyb3Bkb3duLW9wdGlvbiBncm91cC10d29cXFwiIChjbGljayk9XFxcImRyb3BNZW51KClcXFwiPlxcblxcdFxcdDxzcGFuPkNsb3NlPC9zcGFuPlxcblxcdDwvZGl2PlxcbjwvZGl2Plxcblxcbi0tPlwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVHJhbnNmZXJTZXJ2aWNlIH0gZnJvbSAnLi4vZGF0YXRyYW5zZmVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge1BhZ2V9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvcGFnZSc7XG5pbXBvcnQgeyBBY3Rpb25CYXIsIEFjdGlvbkl0ZW0gfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2FjdGlvbi1iYXInO1xuaW1wb3J0ICogYXMgZG9tIGZyb20gJ25hdGl2ZXNjcmlwdC1kb20nO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9idXR0b24nO1xuaW1wb3J0IHsgVGFiVmlldyB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3RhYi12aWV3XCI7XG5pbXBvcnQgeyBTZWxlY3RlZEluZGV4Q2hhbmdlZEV2ZW50RGF0YSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3RhYi12aWV3XCI7XG5pbXBvcnQgeyBMaXN0VmlldyB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xpc3Qtdmlld1wiO1xuaW1wb3J0ICogYXMgYXBwbGljYXRpb24gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIjtcbmltcG9ydCB7IEFuZHJvaWRBcHBsaWNhdGlvbiwgQW5kcm9pZEFjdGl2aXR5QmFja1ByZXNzZWRFdmVudERhdGEgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiO1xuaW1wb3J0IHsgaXNBbmRyb2lkIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm1cIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLW5hdmlnYXRpb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vbmF2aWdhdGlvbi5jb21wb25lbnQudG5zLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9uYXZpZ2F0aW9uLmNvbXBvbmVudC50bnMuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTmF2aWdhdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0cmFuc2ZlclNlcnZpY2U6IFRyYW5zZmVyU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMsIHByaXZhdGUgcGFnZTogUGFnZSkgeyB9XG5cbiAgQFZpZXdDaGlsZCgndGFiVmlldycsIHsgc3RhdGljOiB0cnVlIH0pIHR2OiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdhY3Rpb25CYXInLCB7IHN0YXRpYzogdHJ1ZSB9KSBhYjogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnYWN0aW9uSXRlbScsIHsgc3RhdGljOiB0cnVlIH0pIGFpOiBFbGVtZW50UmVmO1xuICB1c2VyO1xuICBhY3RpdmVidG47XG4gIHRhYlNlbGVjdGVkSW5kZXggPSAwO1xuICBhY3Rpb25CYXJUaXRsZSA9ICdIb21lJztcbiAgaG9tZVRhYiA9IHtpY29uU291cmNlOiAncmVzOi8vaG9tZV9oaWdobGlnaHRlZCd9O1xuICBzZWFyY2hUYWIgPSB7aWNvblNvdXJjZTogJ3JlczovL3NlYXJjaCd9O1xuICBoaXN0b3J5VGFiID0ge2ljb25Tb3VyY2U6ICdyZXM6Ly9oaXN0b3J5J307XG4gIHNldHRpbmdzVGFiID0ge2ljb25Tb3VyY2U6ICdyZXM6Ly9zZXR0aW5ncyd9O1xuICBhY3Rpb25JdGVtIDogQWN0aW9uSXRlbTtcblxuICAvLyBAVmlld0NoaWxkKCdsaXN0VmlldycpIGx2OiBFbGVtZW50UmVmO1xuICAvLyBsaXN0VmlldyA9IDxMaXN0Vmlldz4gdGhpcy5sdi5uYXRpdmVFbGVtZW50O1xuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuYWN0aW9uSXRlbSA9IDxBY3Rpb25JdGVtPiB0aGlzLmFpLm5hdGl2ZUVsZW1lbnQ7XG5cbiAgXHR0aGlzLmFjdGl2ZWJ0biA9IHRoaXMudHJhbnNmZXJTZXJ2aWNlLmdldERhdGEoKTtcbiAgXHRpZih0aGlzLmFjdGl2ZWJ0biA9PSBcImhvbWVuYXZcIikge1xuICAgICAgdGhpcy5ob21lVGFiID0ge2ljb25Tb3VyY2U6ICdyZXM6Ly9ob21lX2hpZ2hsaWdodGVkJ307XG4gICAgICB0aGlzLnNlYXJjaFRhYiA9IHtpY29uU291cmNlOiAncmVzOi8vc2VhcmNoJ307XG4gICAgICB0aGlzLmhpc3RvcnlUYWIgPSB7aWNvblNvdXJjZTogJ3JlczovL2hpc3RvcnknfTtcbiAgICAgIHRoaXMuc2V0dGluZ3NUYWIgPSB7aWNvblNvdXJjZTogJ3JlczovL3NldHRpbmdzJ307XG4gICAgICB0aGlzLmFjdGlvbkl0ZW0udmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICAgIHRoaXMudGFiU2VsZWN0ZWRJbmRleCA9IDA7XG4gIFx0fSBlbHNlIGlmKHRoaXMuYWN0aXZlYnRuID09IFwic2VhcmNobmF2XCIpIHtcbiAgICAgIHRoaXMuaG9tZVRhYiA9IHtpY29uU291cmNlOiAncmVzOi8vaG9tZSd9O1xuICAgICAgdGhpcy5zZWFyY2hUYWIgPSB7aWNvblNvdXJjZTogJ3JlczovL3NlYXJjaF9oaWdobGlnaHRlZCd9O1xuICAgICAgdGhpcy5oaXN0b3J5VGFiID0ge2ljb25Tb3VyY2U6ICdyZXM6Ly9oaXN0b3J5J307XG4gICAgICB0aGlzLnNldHRpbmdzVGFiID0ge2ljb25Tb3VyY2U6ICdyZXM6Ly9zZXR0aW5ncyd9O1xuICAgICAgdGhpcy5hY3Rpb25JdGVtLnZpc2liaWxpdHkgPSAnY29sbGFwc2UnO1xuICAgICAgdGhpcy50YWJTZWxlY3RlZEluZGV4ID0gMTtcbiAgICB9XG4gICAgZWxzZSBpZih0aGlzLmFjdGl2ZWJ0biA9PSBcImhpc3RvcnluYXZcIikge1xuICAgICAgdGhpcy5ob21lVGFiID0ge2ljb25Tb3VyY2U6ICdyZXM6Ly9ob21lJ307XG4gICAgICB0aGlzLnNlYXJjaFRhYiA9IHtpY29uU291cmNlOiAncmVzOi8vc2VhcmNoJ307XG4gICAgICB0aGlzLmhpc3RvcnlUYWIgPSB7aWNvblNvdXJjZTogJ3JlczovL2hpc3RvcnlfaGlnaGxpZ2h0ZWQnfTtcbiAgICAgIHRoaXMuc2V0dGluZ3NUYWIgPSB7aWNvblNvdXJjZTogJ3JlczovL3NldHRpbmdzJ307XG4gICAgICB0aGlzLmFjdGlvbkl0ZW0udmlzaWJpbGl0eSA9ICdjb2xsYXBzZSc7XG4gICAgICB0aGlzLnRhYlNlbGVjdGVkSW5kZXggPSAyO1xuICAgIH1cbiAgICBlbHNlIGlmKHRoaXMuYWN0aXZlYnRuID09IFwic2V0dGluZ3NuYXZcIikge1xuICAgICAgdGhpcy5ob21lVGFiID0ge2ljb25Tb3VyY2U6ICdyZXM6Ly9ob21lJ307XG4gICAgICB0aGlzLnNlYXJjaFRhYiA9IHtpY29uU291cmNlOiAncmVzOi8vc2VhcmNoJ307XG4gICAgICB0aGlzLmhpc3RvcnlUYWIgPSB7aWNvblNvdXJjZTogJ3JlczovL2hpc3RvcnknfTtcbiAgICAgIHRoaXMuc2V0dGluZ3NUYWIgPSB7aWNvblNvdXJjZTogJ3JlczovL3NldHRpbmdzX2hpZ2hsaWdodGVkJ307XG4gICAgICB0aGlzLmFjdGlvbkl0ZW0udmlzaWJpbGl0eSA9ICdjb2xsYXBzZSc7XG4gICAgICB0aGlzLnRhYlNlbGVjdGVkSW5kZXggPSAzO1xuICAgIH1cbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnRhYlNlbGVjdGVkSW5kZXgpXG5cbiAgICAvLyB2YXIganVzdFNldCA9IGZhbHNlO1xuXG4gICAgLy8gaWYoaXNBbmRyb2lkKVxuICAgIC8vICAgYXBwbGljYXRpb24uYW5kcm9pZC5vbihBbmRyb2lkQXBwbGljYXRpb24uYWN0aXZpdHlCYWNrUHJlc3NlZEV2ZW50LCAoZGF0YTogQW5kcm9pZEFjdGl2aXR5QmFja1ByZXNzZWRFdmVudERhdGEpID0+IHtcbiAgICAvLyAgICAgY29uc29sZS5sb2codGhpcy50YWJTZWxlY3RlZEluZGV4KVxuICAgIC8vICAgaWYgKHRoaXMudGFiU2VsZWN0ZWRJbmRleCA9PT0gMCAmJiAhanVzdFNldCkge1xuICAgIC8vICAgICBhcHBsaWNhdGlvbi5hbmRyb2lkLmZvcmVncm91bmRBY3Rpdml0eS5maW5pc2goKTtcbiAgICAvLyAgIH1cbiAgICAvLyAgIGVsc2Uge1xuICAgIC8vICAgICB0aGlzLnR2Lm5hdGl2ZUVsZW1lbnQuc2VsZWN0ZWRJbmRleCA9IDA7XG4gICAgLy8gICAgIGp1c3RTZXQgPSB0cnVlO1xuICAgIC8vICAgICBzZXRUaW1lb3V0KCgpID0+IHtqdXN0U2V0ID0gZmFsc2V9LCA1MDApO1xuICAgIC8vICAgfVxuICAgIC8vIH0pO1xuICB9XG4gIHBhaW50QWN0aXZlKGJ0bikge1xuICBcdGNvbnN0IG5hdmNvbnRlbnRzID0gZG9tLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25hdmlnYXRpb24nKVxuICAgIGZvcih2YXIgeCA9IDA7IHggPCBuYXZjb250ZW50cy5sZW5ndGg7IHgrKylcbiAgICB7XG4gICAgICAgIG5hdmNvbnRlbnRzW3hdLmNsYXNzTmFtZSA9ICduYXZpZ2F0aW9uJztcbiAgICB9XG4gICAgY29uc3QgYnV0dG9uID0gPEJ1dHRvbj50aGlzLnBhZ2UuZ2V0Vmlld0J5SWQoYnRuKTtcbiAgICBidXR0b24uY2xhc3NOYW1lICs9ICcgYWN0aXZlJztcblxuICB9XG5cbiAgb25TZWxlY3RlZEluZGV4Q2hhbmdlZChhcmdzOiBTZWxlY3RlZEluZGV4Q2hhbmdlZEV2ZW50RGF0YSkge1xuICAgICAgICBpZiAoYXJncy5vbGRJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgIGNvbnN0IG5ld0luZGV4ID0gYXJncy5uZXdJbmRleDtcbiAgICAgICAgICAgIGlmIChuZXdJbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuYWN0aW9uQmFyVGl0bGUgPSAnSG9tZSc7XG4gICAgICAgICAgICAgICAgdGhpcy50b0hvbWUoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobmV3SW5kZXggPT09IDEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGlvbkJhclRpdGxlID0gJ1NlYXJjaCc7XG4gICAgICAgICAgICAgICAgdGhpcy50b1NlYXJjaCgpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChuZXdJbmRleCA9PT0gMikge1xuICAgICAgICAgICAgICAgIHRoaXMuYWN0aW9uQmFyVGl0bGUgPSAnWW91ciBwb3N0cyc7XG4gICAgICAgICAgICAgICAgdGhpcy50b0hpc3RvcnkoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobmV3SW5kZXggPT09IDMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGlvbkJhclRpdGxlID0gJ1NldHRpbmdzJztcbiAgICAgICAgICAgICAgICB0aGlzLnRvU2V0dGluZ3MoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICBob21lKCkge1xuICAgIGlmKHRoaXMudGFiU2VsZWN0ZWRJbmRleCA9PSAwKVxuICAgIHtcbiAgICAgIGxldCBsaXN0VmlldyA9IDxMaXN0Vmlldz4gdGhpcy5wYWdlLmdldFZpZXdCeUlkKCdsaXN0VmlldycpO1xuICAgICAgbGlzdFZpZXcuc2Nyb2xsVG9JbmRleCgwKTtcbiAgICB9XG4gICAgdGhpcy5hY3Rpb25JdGVtLnZpc2liaWxpdHkgPSAnY29sbGFwc2UnO1xuICB9XG5cbiAgdG9Ib21lKCkge1xuICBcdC8vIHRoaXMudHJhbnNmZXJTZXJ2aWNlLnNldERhdGEoJ2hvbWVuYXYnKTtcblx0ICAvLyB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ2hvbWUnXSk7XG4gICAgdGhpcy5ob21lVGFiID0ge2ljb25Tb3VyY2U6ICdyZXM6Ly9ob21lX2hpZ2hsaWdodGVkJ307XG4gICAgdGhpcy5zZWFyY2hUYWIgPSB7aWNvblNvdXJjZTogJ3JlczovL3NlYXJjaCd9O1xuICAgIHRoaXMuaGlzdG9yeVRhYiA9IHtpY29uU291cmNlOiAncmVzOi8vaGlzdG9yeSd9O1xuICAgIHRoaXMuc2V0dGluZ3NUYWIgPSB7aWNvblNvdXJjZTogJ3JlczovL3NldHRpbmdzJ307XG4gICAgdGhpcy5hY3Rpb25JdGVtLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gICAgdGhpcy50YWJTZWxlY3RlZEluZGV4ID0gMDtcbiAgfVxuXG4gIHRvU2VhcmNoKClcblx0e1xuXHRcdC8vIHRoaXMudHJhbnNmZXJTZXJ2aWNlLnNldERhdGEoJ2hpc3RvcnluYXYnKTtcblx0XHQvLyB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ2hpc3RvcnknXSk7XG4gICAgdGhpcy5ob21lVGFiID0ge2ljb25Tb3VyY2U6ICdyZXM6Ly9ob21lJ307XG4gICAgdGhpcy5zZWFyY2hUYWIgPSB7aWNvblNvdXJjZTogJ3JlczovL3NlYXJjaF9oaWdobGlnaHRlZCd9O1xuICAgIHRoaXMuaGlzdG9yeVRhYiA9IHtpY29uU291cmNlOiAncmVzOi8vaGlzdG9yeSd9O1xuICAgIHRoaXMuc2V0dGluZ3NUYWIgPSB7aWNvblNvdXJjZTogJ3JlczovL3NldHRpbmdzJ307XG4gICAgdGhpcy5hY3Rpb25JdGVtLnZpc2liaWxpdHkgPSAnY29sbGFwc2UnO1xuICAgIHRoaXMudGFiU2VsZWN0ZWRJbmRleCA9IDE7XG5cdH1cblxuXHR0b0hpc3RvcnkoKVxuXHR7XG5cdFx0Ly8gdGhpcy50cmFuc2ZlclNlcnZpY2Uuc2V0RGF0YSgnc2V0dGluZ3NuYXYnKTtcblx0XHQvLyB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ3NldHRpbmdzJ10pO1xuICAgIHRoaXMuaG9tZVRhYiA9IHtpY29uU291cmNlOiAncmVzOi8vaG9tZSd9O1xuICAgIHRoaXMuc2VhcmNoVGFiID0ge2ljb25Tb3VyY2U6ICdyZXM6Ly9zZWFyY2gnfTtcbiAgICB0aGlzLmhpc3RvcnlUYWIgPSB7aWNvblNvdXJjZTogJ3JlczovL2hpc3RvcnlfaGlnaGxpZ2h0ZWQnfTtcbiAgICB0aGlzLnNldHRpbmdzVGFiID0ge2ljb25Tb3VyY2U6ICdyZXM6Ly9zZXR0aW5ncyd9O1xuICAgIHRoaXMuYWN0aW9uSXRlbS52aXNpYmlsaXR5ID0gJ2NvbGxhcHNlJztcbiAgICB0aGlzLnRhYlNlbGVjdGVkSW5kZXggPSAyO1xuXHR9XG5cbiAgdG9TZXR0aW5ncygpXG4gIHtcbiAgICAvLyB0aGlzLnRyYW5zZmVyU2VydmljZS5zZXREYXRhKCdzZWFyY2huYXYnKTtcbiAgICAvLyB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ3NlYXJjaCddKTtcbiAgICB0aGlzLmhvbWVUYWIgPSB7aWNvblNvdXJjZTogJ3JlczovL2hvbWUnfTtcbiAgICB0aGlzLnNlYXJjaFRhYiA9IHtpY29uU291cmNlOiAncmVzOi8vc2VhcmNoJ307XG4gICAgdGhpcy5oaXN0b3J5VGFiID0ge2ljb25Tb3VyY2U6ICdyZXM6Ly9oaXN0b3J5J307XG4gICAgdGhpcy5zZXR0aW5nc1RhYiA9IHtpY29uU291cmNlOiAncmVzOi8vc2V0dGluZ3NfaGlnaGxpZ2h0ZWQnfTtcbiAgICB0aGlzLmFjdGlvbkl0ZW0udmlzaWJpbGl0eSA9ICdjb2xsYXBzZSc7XG4gICAgdGhpcy50YWJTZWxlY3RlZEluZGV4ID0gMztcbiAgfVxuXG4gIHRvTWVzc2FnZXMoKVxuICB7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydjaGF0LWxpc3QnXSlcbiAgfVxuXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLyogQWRkIG1vYmlsZSBzdHlsZXMgZm9yIHRoZSBjb21wb25lbnQgaGVyZS4gICovXFxuLnJlbW92ZS1wYXltZW50LWxhYmVsIHtcXG5cXHRmb250LXNpemU6IDE2O1xcblxcdGNvbG9yOiAjYWMwMGU2O1xcblxcdG1hcmdpbi1sZWZ0OiAxODtcXG5cXHR0ZXh0LWFsaWduOiBsZWZ0O1xcblxcdHBhZGRpbmc6IDE4O1xcbn1cXG5cXG4uaW5mby1sYWJlbCB7XFxuXFx0Y29sb3I6IGJsYWNrO1xcblxcdGZvbnQtc2l6ZTogMjQ7XFxuXFx0dGV4dC1hbGlnbjogbGVmdDtcXG5cXHRtYXJnaW4tbGVmdDogMzY7XFxuXFx0bWFyZ2luLXRvcDogMzY7XFxufVxcblxcbi5kZXRhaWxzLWxhYmVsIHtcXG5cXHRjb2xvcjogYmxhY2s7XFxuXFx0Zm9udC1zaXplOiAxNjtcXG5cXHR0ZXh0LWFsaWduOiBsZWZ0O1xcblxcdG1hcmdpbi1sZWZ0OiAzNjtcXG5cXHRtYXJnaW4tdG9wOiAxODtcXG5cXHRtYXJnaW4tYm90dG9tOiA3MjtcXG59XFxuXFxuLmFjdGl2aXR5LWluZGljYXRvciB7XFxuXFx0Y29sb3I6ICNhYzAwZTY7XFxufVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxQYWdlPlxcblxcdDxQYWdlLmFjdGlvbkJhcj5cXG5cXHRcXHQ8QWN0aW9uQmFyIHRpdGxlPVxcXCJQYXltZW50IEluZm9cXFwiPlxcblxcdFxcdCAgPE5hdmlnYXRpb25CdXR0b24gdGV4dD1cXFwiR28gQmFja1xcXCIgYW5kcm9pZC5zeXN0ZW1JY29uPVxcXCJpY19tZW51X2JhY2tcXFwiICh0YXApPVxcXCJvbk5hdkJ0blRhcCgpXFxcIj48L05hdmlnYXRpb25CdXR0b24+XFxuXFx0XFx0PC9BY3Rpb25CYXI+XFxuXFx0PC9QYWdlLmFjdGlvbkJhcj5cXG5cXG5cXHQ8U3RhY2tMYXlvdXQgI2luZm9Db250YWluZXI+XFxuXFx0XFx0PFN0YWNrTGF5b3V0PlxcblxcdFxcdFxcdDxMYWJlbCB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgdGV4dD1cXFwie3sgcGF5bWVudEluZm8udHlwZSB9fVxcXCIgY2xhc3M9XFxcImluZm8tbGFiZWxcXFwiPjwvTGFiZWw+XFxuXFx0XFx0XFx0PExhYmVsIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiB0ZXh0PVxcXCJ7eyBwYXltZW50SW5mby5pbmZvIH19XFxcIiBjbGFzcz1cXFwiZGV0YWlscy1sYWJlbFxcXCI+PC9MYWJlbD5cXG5cXHRcXHQ8L1N0YWNrTGF5b3V0PlxcblxcdFxcdDxTdGFja0xheW91dCAodGFwKT1cXFwicmVtb3ZlKClcXFwiPlxcblxcdFxcdFxcdDxMYWJlbCB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgdGV4dD1cXFwiUmVtb3ZlXFxcIiBjbGFzcz1cXFwicmVtb3ZlLXBheW1lbnQtbGFiZWxcXFwiPjwvTGFiZWw+XFxuXFx0XFx0PC9TdGFja0xheW91dD4gIFxcblxcdDwvU3RhY2tMYXlvdXQ+XFxuPC9QYWdlPlxcbjxBY3Rpdml0eUluZGljYXRvciByb3c9XFxcIjFcXFwiICNhY3Rpdml0eUluZGljYXRvciBidXN5PVxcXCJmYWxzZVxcXCIgd2lkdGg9XFxcIjQwXFxcIiBoZWlnaHQ9XFxcIjQwXFxcIiBjbGFzcz1cXFwiYWN0aXZpdHktaW5kaWNhdG9yXFxcIj5cXG48L0FjdGl2aXR5SW5kaWNhdG9yPlwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVHJhbnNmZXJTZXJ2aWNlIH0gZnJvbSAnLi4vZGF0YXRyYW5zZmVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGF5bWVudFNlcnZpY2UgfSBmcm9tICcuLi9wYXltZW50LnNlcnZpY2UudG5zJztcblxuLy8gaW1wb3J0IHsgTW9kYWxEaWFsb2dQYXJhbXMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZGlyZWN0aXZlcy9kaWFsb2dzXCI7XG5pbXBvcnQgeyBNb2RhbERpYWxvZ1NlcnZpY2UgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZGlyZWN0aXZlcy9kaWFsb2dzXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IENvbmZpcm1hdGlvbkNvbXBvbmVudCB9IGZyb20gJy4uL2NvbmZpcm1hdGlvbi9jb25maXJtYXRpb24uY29tcG9uZW50JztcbmltcG9ydCB7IGlzQW5kcm9pZCwgaXNJT1MsIGRldmljZSwgc2NyZWVuIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybSc7XG5pbXBvcnQgeyBhbmRyb2lkIGFzIGFuZHJvaWRBcHAsIGlvcyBhcyBpb3NBcHAgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiO1xuaW1wb3J0IHsgQWN0aXZpdHlJbmRpY2F0b3IgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2FjdGl2aXR5LWluZGljYXRvcic7XG5pbXBvcnQgeyBTdGFja0xheW91dCB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvbGF5b3V0cy9zdGFjay1sYXlvdXQnO1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1wYXltZW50LWluZm8nLFxuICB0ZW1wbGF0ZVVybDogJy4vcGF5bWVudC1pbmZvLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcGF5bWVudC1pbmZvLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBQYXltZW50SW5mb0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0cmFuc2ZlclNlcnZpY2U6IFRyYW5zZmVyU2VydmljZSwgcHJpdmF0ZSBwYXltZW50U2VydmljZTogUGF5bWVudFNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zLFxuICBcdHByaXZhdGUgdmNSZWY6IFZpZXdDb250YWluZXJSZWYsIHByaXZhdGUgbW9kYWw6IE1vZGFsRGlhbG9nU2VydmljZSkgeyB9XG5cbiAgQFZpZXdDaGlsZCgnYWN0aXZpdHlJbmRpY2F0b3InLCB7IHN0YXRpYzogdHJ1ZSB9KSBhSTogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnaW5mb0NvbnRhaW5lcicsIHsgc3RhdGljOiB0cnVlIH0pIGlDOiBFbGVtZW50UmVmO1xuICBcblxuICBwYXltZW50SW5mbyA9IHtcbiAgXHRwYXltZW50VHlwZTogXCJsb2FkaW5nXCIsXG4gIFx0aW5mbzogXCJsb2FkaW5nXCIsXG4gIFx0aWRUb2tlbjogXCJsb2FkaW5nXCIsXG4gIFx0dHlwZTogXCJsb2FkaW5nXCJcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICBcdHRoaXMucGF5bWVudEluZm8gPSB0aGlzLnRyYW5zZmVyU2VydmljZS5nZXREYXRhKCk7XG4gIFx0Ly8gY29uc29sZS5sb2codGhpcy5wYXltZW50SW5mbyk7XG4gIH1cblxuICByZW1vdmUoKSB7XG4gIFx0bGV0IG9wdGlvbnMgPSB7XG4gICAgICAgIGNvbnRleHQ6IHt9LFxuICAgICAgICBmdWxsc2NyZWVuOiBmYWxzZSxcbiAgICAgICAgdmlld0NvbnRhaW5lclJlZjogdGhpcy52Y1JlZixcbiAgICAgICAgYW5pbWF0ZWQ6IHRydWUsXG4gICAgICAgIC8vIHRyYW5zaXRpb246IHsgbmFtZTogXCJzbGlkZVRvcFwiIH1cbiAgICB9O1xuICAgIFxuICAgIHRoaXMubW9kYWwuc2hvd01vZGFsKENvbmZpcm1hdGlvbkNvbXBvbmVudCwgb3B0aW9ucykudGhlbihyZXN1bHQgPT4ge1xuICAgIFx0aWYocmVzdWx0ID09IFwiZGVsZXRlXCIpIHtcbiAgICBcdFx0dmFyIGluZm9Db250YWluZXIgPSA8U3RhY2tMYXlvdXQ+IHRoaXMuaUMubmF0aXZlRWxlbWVudDtcbiAgICBcdFx0aW5mb0NvbnRhaW5lci5zdHlsZS52aXNpYmlsaXR5ID0gXCJjb2xsYXBzZVwiO1xuICAgIFx0XHR0aGlzLnNob3dCdXN5KCk7XG4gICAgXHRcdHRoaXMucGF5bWVudFNlcnZpY2UucmVtb3ZlUGF5bWVudE1ldGhvZEZyb21Vc2VyKHRoaXMucGF5bWVudEluZm8uaWRUb2tlbikuc3Vic2NyaWJlKChyZXMpID0+IHtcblx0XHRcdCAgXHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ3BheW1lbnRzJ10pO1xuXHRcdCAgXHR9KTtcbiAgICBcdH1cbiAgICB9KTtcbiAgfVxuXG4gIG9uTmF2QnRuVGFwKCkge1xuICBcdHRoaXMucm91dGVyLm5hdmlnYXRlKFsncGF5bWVudHMnXSk7XG4gIH1cblxuICBzaG93QnVzeSgpIHtcbiAgXHR2YXIgYWN0aXZpdHlJbmRpY2F0b3IgPSA8QWN0aXZpdHlJbmRpY2F0b3I+IHRoaXMuYUkubmF0aXZlRWxlbWVudDtcbiAgXHRhY3Rpdml0eUluZGljYXRvci5idXN5ID0gdHJ1ZTtcbiAgfVxuXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLypcXG5BZGQgeW91ciBOYXRpdmVTY3JpcHQgc3BlY2lmaWMgc3R5bGVzIGhlcmUuXFxuVG8gbGVhcm4gbW9yZSBhYm91dCBzdHlsaW5nIGluIE5hdGl2ZVNjcmlwdCBzZWU6XFxuaHR0cHM6Ly9kb2NzLm5hdGl2ZXNjcmlwdC5vcmcvYW5ndWxhci91aS9zdHlsaW5nXFxuKi9cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8U3RhY2tMYXlvdXQ+XFxuICA8TGFiZWwgdGV4dD1cXFwicGF5bWVudC1tZXRob2Qgd29ya3NcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIj48L0xhYmVsPlxcbiAgPExhYmVsIHRleHQ9XFxcIlRoaXMgaXMgYSBtaWdyYXRlZCBjb21wb25lbnRcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIj48L0xhYmVsPlxcbiAgPExhYmVsIHRleHQ9XFxcIlVwZGF0ZSBpdCB0byBwcm92aWRlIHRoZSBVSSBlbGVtZW50cyByZXF1aXJlZCBpbiB5b3VyIG1vYmlsZSBhcHBcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIj48L0xhYmVsPlxcbjwvU3RhY2tMYXlvdXQ+XFxuXFxuPCEtLVxcbk9yaWdpbmFsIFdlYiB0ZW1wbGF0ZTpcXG5cXG48ZGl2IGNsYXNzPVxcXCJwYXltZW50LW1ldGhvZFxcXCI+XFxuXFx0PHNwYW4gY2xhc3M9XFxcInBheW1lbnQtdHlwZS1pY29uXFxcIj48L3NwYW4+XFxuXFx0PHNwYW4gY2xhc3M9XFxcInBheW1lbnQtdHlwZS1kZXRhaWxzXFxcIj48L3NwYW4+XFxuPC9kaXY+XFxuLS0+XCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtcGF5bWVudC1tZXRob2QnLFxuICB0ZW1wbGF0ZVVybDogJy4vcGF5bWVudC1tZXRob2QuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9wYXltZW50LW1ldGhvZC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUGF5bWVudE1ldGhvZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBQYXltZW50U2VydmljZSB7XG4gIC8vIHVyaSA9ICdodHRwOi8vbG9jYWxob3N0OjQwMDAnO1xuICAvL0FkYW0ncyBUZXN0aW5nIFNlcnZlclxuICAvLyB1cmkgPSAnaHR0cDovLzE5Mi4xNjguMS43OjQwMDAnO1xuICAvL1BoaWxsaXAncyBUZXN0aW5nIFNlcnZlclxuXHQvLyB1cmkgPSAnaHR0cDovLzE5Mi4xNjguMS4zOjQwMDAnO1xuICAvL0ZpcmViYXNlIGNsb3VkIGZ1bmN0aW9uc1xuICB1cmkgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1jb2xsZWdlcG9vbC0xNTUyNzQ5MTE4NjE3LmNsb3VkZnVuY3Rpb25zLm5ldCc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7IH1cblxuICBhZGRQYXltZW50VXNlcihpZCwgdXNlcm5hbWUsIG5hbWUsIGVtYWlsKSB7XG4gICAgLy8gY29uc29sZS5sb2coYCR7dGhpcy51cml9L2FkZEN1c3RvbWVyLyR7dXNlcm5hbWV9YClcbiAgXHQvLyByZXR1cm4gdGhpcy5odHRwLmdldChgJHt0aGlzLnVyaX0vY3VzdG9tZXJzL2FkZC8ke3VzZXJuYW1lfWApO1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke3RoaXMudXJpfS9hZGRDdXN0b21lcj91c2VybmFtZT0ke3VzZXJuYW1lfWApO1xuICB9XG5cbiAgZ2V0UGF5bWVudFVzZXJCeUlkKGlkKSB7XG4gICAgLy8gcmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy51cml9L2N1c3RvbWVycy8ke2lkfWApO1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke3RoaXMudXJpfS9nZXRDdXN0b21lcj9pZD0ke2lkfWApO1xuICB9XG5cbiAgYWRkUGF5bWVudE1ldGhvZFRvVXNlcihpZCwgbm9uY2UpIHtcbiAgXHRjb25zdCBib2R5ID0ge1xuICBcdFx0aWQ6IGlkLFxuICBcdFx0bm9uY2U6IG5vbmNlXG4gIFx0fTtcbiAgXHQvLyByZXR1cm4gdGhpcy5odHRwLnBvc3QoYGh0dHA6Ly8xOTIuMTY4LjEuNzo0MDAwL2N1c3RvbWVycy9wYXltZW50L2AsIGJvZHkpO1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChgJHt0aGlzLnVyaX0vYWRkUGF5bWVudD9gLCBib2R5KVxuICB9XG5cbiAgcmVtb3ZlUGF5bWVudE1ldGhvZEZyb21Vc2VyKHRva2VuKSB7XG4gIFx0cmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy51cml9L3JlbW92ZVBheW1lbnQ/dG9rZW49JHt0b2tlbn1gKTtcbiAgfVxuXG4gIGdldElkVG9rZW4oaWQpIHtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldChgJHt0aGlzLnVyaX0vZ2V0VG9rZW4/aWQ9JHtpZH1gKTtcbiAgfVxuICBcbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFBheW1lbnRTZXJ2aWNlIHtcbiAgLy8gdXJpID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6NDAwMCc7XG4gIC8vQWRhbSdzIFRlc3RpbmcgU2VydmVyXG4gIC8vIHVyaSA9ICdodHRwOi8vMTkyLjE2OC4xLjc6NDAwMCc7XG4gIC8vUGhpbGxpcCdzIFRlc3RpbmcgU2VydmVyXG5cdC8vIHVyaSA9ICdodHRwOi8vMTkyLjE2OC4xLjM6NDAwMCc7XG4gIC8vRmlyZWJhc2UgY2xvdWQgZnVuY3Rpb25zXG4gIHVyaSA9ICdodHRwczovL3VzLWNlbnRyYWwxLWNvbGxlZ2Vwb29sLTE1NTI3NDkxMTg2MTcuY2xvdWRmdW5jdGlvbnMubmV0JztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHsgfVxuXG4gIGFkZFBheW1lbnRVc2VyKGlkLCB1c2VybmFtZSwgbmFtZSwgZW1haWwpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhgJHt0aGlzLnVyaX0vYWRkQ3VzdG9tZXIvJHt1c2VybmFtZX1gKVxuICBcdC8vIHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke3RoaXMudXJpfS9jdXN0b21lcnMvYWRkLyR7dXNlcm5hbWV9YCk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy51cml9L2FkZEN1c3RvbWVyP3VzZXJuYW1lPSR7dXNlcm5hbWV9YCk7XG4gIH1cblxuICBnZXRQYXltZW50VXNlckJ5SWQoaWQpIHtcbiAgICAvLyByZXR1cm4gdGhpcy5odHRwLmdldChgJHt0aGlzLnVyaX0vY3VzdG9tZXJzLyR7aWR9YCk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy51cml9L2dldEN1c3RvbWVyP2lkPSR7aWR9YCk7XG4gIH1cblxuICBhZGRQYXltZW50TWV0aG9kVG9Vc2VyKGlkLCBub25jZSkge1xuICBcdGNvbnN0IGJvZHkgPSB7XG4gIFx0XHRpZDogaWQsXG4gIFx0XHRub25jZTogbm9uY2VcbiAgXHR9O1xuICBcdC8vIHJldHVybiB0aGlzLmh0dHAucG9zdChgaHR0cDovLzE5Mi4xNjguMS43OjQwMDAvY3VzdG9tZXJzL3BheW1lbnQvYCwgYm9keSk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KGAke3RoaXMudXJpfS9hZGRQYXltZW50P2AsIGJvZHkpXG4gIH1cblxuICByZW1vdmVQYXltZW50TWV0aG9kRnJvbVVzZXIodG9rZW4pIHtcbiAgXHRyZXR1cm4gdGhpcy5odHRwLmdldChgJHt0aGlzLnVyaX0vcmVtb3ZlUGF5bWVudD90b2tlbj0ke3Rva2VufWApO1xuICB9XG5cbiAgZ2V0SWRUb2tlbihpZCkge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke3RoaXMudXJpfS9nZXRUb2tlbj9pZD0ke2lkfWApO1xuICB9XG4gIFxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi5wYXltZW50LXR5cGUtaWNvbiB7XFxuXFx0aGVpZ2h0OiAzNDtcXG5cXHR3aWR0aDogMzQ7XFxuXFx0YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcblxcdG1hcmdpbi10b3A6IDE4O1xcblxcdG1hcmdpbi1ib3R0b206IDE4O1xcblxcdG1hcmdpbi1sZWZ0OiAzNjtcXG59XFxuXFxuLnBheW1lbnQtaW5mby1sYWJlbCB7XFxuXFx0Zm9udC1zaXplOiAxNjtcXG5cXHQvKmZvbnQtd2VpZ2h0OiA3MDA7Ki9cXG5cXHRwYWRkaW5nOiAzMDtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0Y29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uYWRkLXBheW1lbnQtbGFiZWwge1xcblxcdGZvbnQtc2l6ZTogMTY7XFxuXFx0Y29sb3I6ICNhYzAwZTY7XFxuXFx0bWFyZ2luLWxlZnQ6IDM2O1xcblxcdHRleHQtYWxpZ246IGxlZnQ7XFxuXFx0cGFkZGluZzogMTg7XFxufVxcblxcbi5jcmVkaXQtY2FyZC1pY29uIHtcXG5cXHRjb250ZW50OiB1cmwoXFxcIn4vaW1nL2NyZWRpdC1jYXJkLWljb24ucG5nXFxcIik7XFxufVxcblxcbi5wYXlwYWwtaWNvbiB7XFxuXFx0Y29udGVudDogdXJsKFxcXCJ+L2ltZy9wYXlwYWwtaWNvbi5wbmdcXFwiKTtcXG59XFxuXFxuLnZlbm1vLWljb24ge1xcblxcdGNvbnRlbnQ6IHVybChcXFwifi9pbWcvdmVubW8taWNvbi5wbmdcXFwiKTtcXG59XFxuXFxuLnBvc3Qge1xcblxcblxcdGJvcmRlci1jb2xvcjogI2YxZjFmMTtcXG59XFxuXFxuLnBvc3Q6aGlnaGxpZ2h0ZWQge1xcblxcdGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XFxufVxcblxcbi5hY3Rpdml0eS1pbmRpY2F0b3Ige1xcblxcdGNvbG9yOiAjYWMwMGU2O1xcbn1cXG5cXG4uYWRkLWNvbnRhaW5lciB7XFxuXFx0dmlzaWJpbGl0eTogY29sbGFwc2U7XFxufVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxQYWdlPlxcblxcdDxQYWdlLmFjdGlvbkJhcj5cXG5cXHRcXHQ8QWN0aW9uQmFyIHRpdGxlPVxcXCJQYXltZW50c1xcXCI+XFxuXFx0XFx0ICA8TmF2aWdhdGlvbkJ1dHRvbiB0ZXh0PVxcXCJHbyBCYWNrXFxcIiBhbmRyb2lkLnN5c3RlbUljb249XFxcImljX21lbnVfYmFja1xcXCIgKHRhcCk9XFxcIm9uTmF2QnRuVGFwKClcXFwiPjwvTmF2aWdhdGlvbkJ1dHRvbj5cXG5cXHRcXHQ8L0FjdGlvbkJhcj5cXG5cXHQ8L1BhZ2UuYWN0aW9uQmFyPlxcblxcblxcblxcblxcdDxTdGFja0xheW91dCAjcGF5bWVudHNDb250YWluZXI+XFxuXFx0XFx0PExpc3RWaWV3IFtpdGVtc109XFxcInBheW1lbnRzXFxcIiBzZXBhcmF0b3JDb2xvcj1cXFwidHJhbnNwYXJlbnRcXFwiIChpdGVtVGFwKT1cXFwib25TZWxlY3QoJGV2ZW50KVxcXCI+XFxuXFx0XFx0XFx0PG5nLXRlbXBsYXRlIGxldC1pdGVtPVxcXCJpdGVtXFxcIiBsZXQtaT1cXFwiaW5kZXhcXFwiIGxldC1vZGQ9XFxcIm9kZFxcXCIgbGV0LWV2ZW49XFxcImV2ZW5cXFwiPlxcblxcdFxcdFxcdFxcdDxTdGFja0xheW91dCBbY2xhc3Mub2RkXT1cXFwib2RkXFxcIiBbY2xhc3MuZXZlbl09XFxcImV2ZW5cXFwiIGNsYXNzPVxcXCJwb3N0XFxcIiBvcmllbnRhdGlvbj1cXFwiaG9yaXpvbnRhbFxcXCI+XFxuXFx0XFx0XFx0XFx0XFx0PEltYWdlIFtzcmNdPVxcXCJpdGVtLnBheW1lbnRUeXBlXFxcIiBjbGFzcz1cXFwicGF5bWVudC10eXBlLWljb25cXFwiPjwvSW1hZ2U+XFxuXFx0XFx0XFx0XFx0XFx0PExhYmVsIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiBbdGV4dF09XFxcIml0ZW0uaW5mb1xcXCIgY2xhc3M9XFxcInBheW1lbnQtaW5mby1sYWJlbFxcXCI+PC9MYWJlbD5cXG5cXHRcXHRcXHRcXHQ8L1N0YWNrTGF5b3V0PlxcblxcdFxcdFxcdDwvbmctdGVtcGxhdGU+XFxuXFx0XFx0PC9MaXN0Vmlldz5cXG5cXG5cXHRcXHQ8U3RhY2tMYXlvdXQgKHRhcCk9XFxcInNob3dNb2RhbCgpXFxcIiAjYWRkQ29udGFpbmVyIGNsYXNzPVxcXCJhZGQtY29udGFpbmVyXFxcIj5cXG5cXHRcXHRcXHQ8TGFiZWwgdGV4dFdyYXA9XFxcInRydWVcXFwiIHRleHQ9XFxcIkFkZCBwYXltZW50IG1ldGhvZFxcXCIgY2xhc3M9XFxcImFkZC1wYXltZW50LWxhYmVsXFxcIj48L0xhYmVsPlxcblxcdFxcdDwvU3RhY2tMYXlvdXQ+ICBcXG5cXHQ8L1N0YWNrTGF5b3V0PlxcbjwvUGFnZT5cXG5cXG48QWN0aXZpdHlJbmRpY2F0b3IgI2FjdGl2aXR5SW5kaWNhdG9yIGJ1c3k9XFxcInRydWVcXFwiIHdpZHRoPVxcXCI0MFxcXCIgaGVpZ2h0PVxcXCI0MFxcXCIgY2xhc3M9XFxcImFjdGl2aXR5LWluZGljYXRvclxcXCI+XFxuPC9BY3Rpdml0eUluZGljYXRvcj5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGVBcnJheSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlLWFycmF5JztcbmltcG9ydCB7IER5bmFtaWNBZGRTZXJ2aWNlIH0gZnJvbSAnLi4vZHluYW1pYy1hZGQuc2VydmljZSc7XG5pbXBvcnQgKiBhcyBkcm9waW4gZnJvbSAnYnJhaW50cmVlLXdlYi1kcm9wLWluJztcbmltcG9ydCAqIGFzIGJyYWludHJlZSBmcm9tICdicmFpbnRyZWUtd2ViJztcbmltcG9ydCB7IEJyYWludHJlZSwgQnJhaW5UcmVlT3B0aW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1icmFpbnRyZWUnO1xuaW1wb3J0IHsgSVBheVBhbENvbmZpZyB9IGZyb20gJ25neC1wYXlwYWwnO1xuaW1wb3J0IHsgTG9naW5jaGVja1NlcnZpY2UgfSBmcm9tICcuLi9sb2dpbmNoZWNrLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGF5bWVudFNlcnZpY2UgfSBmcm9tICcuLi9wYXltZW50LnNlcnZpY2UudG5zJztcbmltcG9ydCB7IFRyYW5zZmVyU2VydmljZSB9IGZyb20gJy4uL2RhdGF0cmFuc2Zlci5zZXJ2aWNlJztcblxuaW1wb3J0IHsgTW9kYWxEaWFsb2dQYXJhbXMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZGlyZWN0aXZlcy9kaWFsb2dzXCI7XG5pbXBvcnQgeyBNb2RhbERpYWxvZ1NlcnZpY2UgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZGlyZWN0aXZlcy9kaWFsb2dzXCI7XG5pbXBvcnQgeyBBZGRQYXltZW50Q29tcG9uZW50IH0gZnJvbSAnLi4vYWRkLXBheW1lbnQvYWRkLXBheW1lbnQuY29tcG9uZW50JztcbmltcG9ydCB7IFBheW1lbnRJbmZvQ29tcG9uZW50IH0gZnJvbSAnLi4vcGF5bWVudC1pbmZvL3BheW1lbnQtaW5mby5jb21wb25lbnQnO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBBY3Rpdml0eUluZGljYXRvciB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvYWN0aXZpdHktaW5kaWNhdG9yJztcbmltcG9ydCB7IFN0YWNrTGF5b3V0IH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9sYXlvdXRzL3N0YWNrLWxheW91dCc7XG5pbXBvcnQgKiBhcyBkaWFsb2dzIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3NcIjtcbmltcG9ydCAqIGFzIGZpcmViYXNlIGZyb20gJ25hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2UnO1xuXG5kZWNsYXJlIGxldCBwYXlwYWw6IGFueTtcblxuY2xhc3MgUGF5bWVudEl0ZW0ge1xuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bWVudFR5cGU6IHN0cmluZywgcHVibGljIGluZm86IHN0cmluZywgcHVibGljIGlkVG9rZW46IHN0cmluZywgcHVibGljIHR5cGU6IHN0cmluZykge31cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXBheW1lbnRzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3BheW1lbnRzLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcGF5bWVudHMuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFBheW1lbnRzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBAVmlld0NoaWxkKCdhY3Rpdml0eUluZGljYXRvcicsIHsgc3RhdGljOiB0cnVlIH0pIGFJOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdhZGRDb250YWluZXInLCB7IHN0YXRpYzogdHJ1ZSB9KSBhQzogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgncGF5bWVudHNDb250YWluZXInLCB7IHN0YXRpYzogdHJ1ZSB9KSBwQzogRWxlbWVudFJlZjtcbiAgdXNlciA9IHtcbiAgXHRwYXltZW50X2lkOiAnNTA3MzA1NzA2J1xuICB9XG4gIG9wdHMgOkJyYWluVHJlZU9wdGlvbnMgPSB7XG4gICAgYW1vdW50OiBudWxsLFxuICAgIGNvbGxlY3REZXZpY2VEYXRhOiB0cnVlLFxuICAgIHJlcXVlc3RUaHJlZURTZWN1cmVWZXJpZmljYXRpb246IGZhbHNlLFxuICB9XG4gIGNsaWVudFRva2VuID0gJyc7XG4gIHBheW1lbnRDdXN0b21lcjtcbiAgcGF5bWVudEluZm87XG4gIHBheW1lbnRzID0gbmV3IE9ic2VydmFibGVBcnJheTxQYXltZW50SXRlbT4oKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFkZFNlcnZpY2U6IER5bmFtaWNBZGRTZXJ2aWNlLCBwcml2YXRlIHBheW1lbnRTZXJ2aWNlOiBQYXltZW50U2VydmljZSwgcHJpdmF0ZSBsb2dpbmNoZWNrU2VydmljZTogTG9naW5jaGVja1NlcnZpY2UsIHByaXZhdGUgdHJhbnNmZXJTZXJ2aWNlOiBUcmFuc2ZlclNlcnZpY2UsXG4gIFx0cHJpdmF0ZSB2Y1JlZjogVmlld0NvbnRhaW5lclJlZiwgcHJpdmF0ZSBtb2RhbDogTW9kYWxEaWFsb2dTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucykgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgZmlyZWJhc2UuZ2V0Q3VycmVudFVzZXIoKS50aGVuKHVzZXIgPT4ge1xuICAgICAgZmlyZWJhc2UuZmlyZXN0b3JlLmNvbGxlY3Rpb24oJ3VzZXJzJykuZG9jKHVzZXIudWlkKS5nZXQoKS50aGVuKGRvYyA9PiB7XG4gICAgICAgIHRoaXMudXNlci5wYXltZW50X2lkID0gZG9jLmRhdGEoKS5wYXltZW50X2lkO1xuICAgICAgICB0aGlzLmdldFVzZXIoKTtcbiAgICAgIH0pXG4gICAgfSlcbiAgXHRcbiAgfVxuXG4gIHNob3dNb2RhbCgpIHtcbiAgICBsZXQgYnJhaW50cmVlID0gbmV3IEJyYWludHJlZSgpO1xuICAgIC8vIHRoaXMuY3JlYXRlVmlld3MoKTtcblxuICAgIGJyYWludHJlZS5zdGFydFBheW1lbnQodGhpcy5jbGllbnRUb2tlbiwgdGhpcy5vcHRzKTtcblxuICAgIGJyYWludHJlZS5vbihcInN1Y2Nlc3NcIiwgKHJlcykgPT4ge1xuICAgICAgICBsZXQgb3V0cHV0ID0gcmVzLm9iamVjdC5nZXQoXCJvdXRwdXRcIik7XG4gICAgICAgIC8vIGNvbnNvbGUuZGlyKG91dHB1dCk7XG5cbiAgICAgICAgdmFyIGFkZENvbnRhaW5lciA9IDxTdGFja0xheW91dD4gdGhpcy5hQy5uYXRpdmVFbGVtZW50O1xuICAgICAgICB2YXIgcGF5bWVudHNDb250YWluZXIgPSA8U3RhY2tMYXlvdXQ+IHRoaXMucEMubmF0aXZlRWxlbWVudDtcbiAgICAgICAgdmFyIGFjdGl2aXR5SW5kaWNhdG9yID0gPEFjdGl2aXR5SW5kaWNhdG9yPiB0aGlzLmFJLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIHBheW1lbnRzQ29udGFpbmVyLnN0eWxlLnZpc2liaWxpdHkgPSAnY29sbGFwc2UnO1xuICAgICAgICBhZGRDb250YWluZXIuc3R5bGUudmlzaWJpbGl0eSA9ICdjb2xsYXBzZSc7XG4gICAgICAgIGFjdGl2aXR5SW5kaWNhdG9yLmJ1c3kgPSB0cnVlO1xuXG4gICAgICAgIHRoaXMucGF5bWVudFNlcnZpY2UuYWRkUGF5bWVudE1ldGhvZFRvVXNlcih0aGlzLnVzZXIucGF5bWVudF9pZCwgb3V0cHV0Lm5vbmNlKS5zdWJzY3JpYmUoKHJlczogYW55KSA9PiB7XG4gICAgICAgICAgaWYocmVzLm1lc3NhZ2UgPT0gJ1N1Y2Nlc3MnKSB7XG4gICAgICAgICAgICBkaWFsb2dzLmFsZXJ0KHtcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJBZGRlZCBtZXRob2RcIixcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIlBheW1lbnQgbWV0aG9kIGFkZGVkIHN1Y2Nlc3NmdWxseVwiLFxuICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJDbG9zZVwiXG4gICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aGlzLmdldFVzZXIoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSBpZihyZXMubWVzc2FnZSA9PSAnQWxyZWFkeSBleGlzdHMnKSB7XG4gICAgICAgICAgICBhZGRDb250YWluZXIuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICAgICAgICAgIHBheW1lbnRzQ29udGFpbmVyLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gICAgICAgICAgICBhY3Rpdml0eUluZGljYXRvci5idXN5ID0gZmFsc2U7XG4gICAgICAgICAgICBkaWFsb2dzLmFsZXJ0KHtcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJDb3VsZCBub3QgYWRkIG1ldGhvZFwiLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiUGF5bWVudCBtZXRob2QgYWxyZWFkeSBleGlzdHMsIHBsZWFzZSB0cnkgYW5vdGhlciBvbmUuXCIsXG4gICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIkNsb3NlXCJcbiAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIHRoaXMucm91dGVyLm5hdmlnYXRlKFsncGF5bWVudHMnXSk7XG4gICAgICAgIH0pXG4gICAgICAgIC8vIHRoaXMucGF5bWVudFNlcnZpY2UuYWRkUGF5bWVudE1ldGhvZFRvVXNlcih0aGlzLnVzZXIucGF5bWVudF9pZCwgb3V0cHV0Lm5vbmNlKS5zdWJzY3JpYmUoKHJlcykgPT4ge1xuICAgICAgICAvLyAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsncGF5bWVudHMnXSk7XG4gICAgICAgIC8vIH0pO1xuICAgIH0pXG4gICAgIFxuICAgIGJyYWludHJlZS5vbihcImNhbmNlbFwiLCBmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgIGxldCBvdXRwdXQgPSByZXMub2JqZWN0LmdldChcIm91dHB1dFwiKTtcbiAgICAgICAgLy8gY29uc29sZS5kaXIob3V0cHV0KTtcbiAgICB9KVxuICAgICBcbiAgICBicmFpbnRyZWUub24oXCJlcnJvclwiLCBmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgIGxldCBvdXRwdXQgPSByZXMub2JqZWN0LmdldChcIm91dHB1dFwiKTtcbiAgICAgICAgLy8gY29uc29sZS5kaXIob3V0cHV0KTtcbiAgICB9KVxuICAgIC8vIGxldCBvcHRpb25zID0ge1xuICAgIC8vICAgICBjb250ZXh0OiB7fSxcbiAgICAvLyAgICAgZnVsbHNjcmVlbjogdHJ1ZSxcbiAgICAvLyAgICAgdmlld0NvbnRhaW5lclJlZjogdGhpcy52Y1JlZlxuICAgIC8vICAgICAvLyBhbmltYXRlZDogdHJ1ZSxcbiAgICAvLyAgICAgLy8gdHJhbnNpdGlvbjogeyBuYW1lOiBcInNsaWRlVG9wXCIgfVxuICAgIC8vIH07XG4gICAgXG4gICAgLy8gdGhpcy5tb2RhbC5zaG93TW9kYWwoQWRkUGF5bWVudENvbXBvbmVudCwgb3B0aW9ucykudGhlbihyZXMgPT4ge1xuXG4gICAgLy8gfSk7XG4gIH1cblxuICBnZXRVc2VyKCkge1xuICAgIHRoaXMucGF5bWVudHMuc3BsaWNlKDApO1xuXG4gICAgdmFyIGFkZENvbnRhaW5lciA9IDxTdGFja0xheW91dD4gdGhpcy5hQy5uYXRpdmVFbGVtZW50O1xuICAgIHZhciBwYXltZW50c0NvbnRhaW5lciA9IDxTdGFja0xheW91dD4gdGhpcy5wQy5uYXRpdmVFbGVtZW50O1xuICAgIGFkZENvbnRhaW5lci5zdHlsZS52aXNpYmlsaXR5ID0gJ2NvbGxhcHNlJztcbiAgICBwYXltZW50c0NvbnRhaW5lci5zdHlsZS52aXNpYmlsaXR5ID0gJ2NvbGxhcHNlJztcblxuICBcdHRoaXMucGF5bWVudFNlcnZpY2UuZ2V0UGF5bWVudFVzZXJCeUlkKHRoaXMudXNlci5wYXltZW50X2lkKS5zdWJzY3JpYmUoKGRhdGEpID0+IHtcbiAgICAgIHRoaXMuc2V0dXBWaWV3cygpO1xuXG4gIFx0XHR0aGlzLnBheW1lbnRDdXN0b21lciA9IGRhdGE7XG4gIFx0XHQvLyBjb25zb2xlLmxvZyh0aGlzLnBheW1lbnRDdXN0b21lcilcbiAgXHRcdGlmKHRoaXMucGF5bWVudEN1c3RvbWVyLmNyZWRpdENhcmRzICE9IG51bGwpXG5cdCAgXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLnBheW1lbnRDdXN0b21lci5jcmVkaXRDYXJkcy5sZW5ndGg7IGkrKykgXG5cdCAgXHRcdFx0dGhpcy5wYXltZW50cy5wdXNoKG5ldyBQYXltZW50SXRlbShcIn4vaW1nL2NyZWRpdC1jYXJkLWljb24ucG5nXCIsIHRoaXMucGF5bWVudEN1c3RvbWVyLmNyZWRpdENhcmRzW2ldLmNhcmRUeXBlICsgXCIgZW5kaW5nIGluIFwiICsgdGhpcy5wYXltZW50Q3VzdG9tZXIuY3JlZGl0Q2FyZHNbaV0ubGFzdDQsIHRoaXMucGF5bWVudEN1c3RvbWVyLmNyZWRpdENhcmRzW2ldLnRva2VuLCBcIkNhcmRcIikpO1xuICBcdFx0aWYodGhpcy5wYXltZW50Q3VzdG9tZXIucGF5cGFsQWNjb3VudHMgIT0gbnVsbClcbiAgXHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMucGF5bWVudEN1c3RvbWVyLnBheXBhbEFjY291bnRzLmxlbmd0aDsgaSsrKVxuICBcdFx0XHRcdHRoaXMucGF5bWVudHMucHVzaChuZXcgUGF5bWVudEl0ZW0oXCJ+L2ltZy9wYXlwYWwtaWNvbi5wbmdcIiwgdGhpcy5wYXltZW50Q3VzdG9tZXIucGF5cGFsQWNjb3VudHNbaV0uZW1haWwsIHRoaXMucGF5bWVudEN1c3RvbWVyLnBheXBhbEFjY291bnRzW2ldLnRva2VuLCBcIlBheVBhbFwiKSlcbiAgXHRcdGlmKHRoaXMucGF5bWVudEN1c3RvbWVyLnZlbm1vQWNjb3VudHMgIT0gbnVsbClcbiAgXHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMucGF5bWVudEN1c3RvbWVyLnZlbm1vQWNjb3VudHMubGVuZ3RoOyBpKyspXG4gIFx0XHRcdFx0dGhpcy5wYXltZW50cy5wdXNoKG5ldyBQYXltZW50SXRlbShcIn4vaW1nL3Zlbm1vLWljb24ucG5nXCIsIHRoaXMucGF5bWVudEN1c3RvbWVyLnZlbm1vQWNjb3VudHNbaV0udmVubW9Vc2VySWQsIHRoaXMucGF5bWVudEN1c3RvbWVyLnZlbm1vQWNjb3VudHNbaV0udG9rZW4sIFwiVmVubW9cIikpXG4gIFx0XHQvLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGlzdC1sb2FkaW5nLWNpcmNsZScpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIFx0fSk7XG4gICAgdGhpcy5wYXltZW50U2VydmljZS5nZXRJZFRva2VuKHRoaXMudXNlci5wYXltZW50X2lkKS5zdWJzY3JpYmUoKHJlczogYW55KSA9PiB7XG4gICAgICB0aGlzLmNsaWVudFRva2VuID0gcmVzLmNsaWVudFRva2VuO1xuICAgIH0pO1xuICB9XG5cbiAgc2V0dXBWaWV3cygpIHtcbiAgICB2YXIgYWN0aXZpdHlJbmRpY2F0b3IgPSA8QWN0aXZpdHlJbmRpY2F0b3I+IHRoaXMuYUkubmF0aXZlRWxlbWVudDtcbiAgICBhY3Rpdml0eUluZGljYXRvci5idXN5ID0gZmFsc2U7XG5cbiAgICB2YXIgYWRkQ29udGFpbmVyID0gPFN0YWNrTGF5b3V0PiB0aGlzLmFDLm5hdGl2ZUVsZW1lbnQ7XG4gICAgYWRkQ29udGFpbmVyLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG5cbiAgICB2YXIgcGF5bWVudHNDb250YWluZXIgPSA8U3RhY2tMYXlvdXQ+IHRoaXMucEMubmF0aXZlRWxlbWVudDtcbiAgICBwYXltZW50c0NvbnRhaW5lci5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICB9XG5cbiAgc2VsZWN0UGF5bWVudCgpIHtcblxuICB9XG5cbiAgb25TZWxlY3QoZXZlbnQpIHtcbiAgXHQvLyBjb25zb2xlLmxvZyhldmVudC5pbmRleCk7XG4gIFx0bGV0IG9wdGlvbnMgPSB7XG4gICAgICAgIGNvbnRleHQ6IHt9LFxuICAgICAgICBmdWxsc2NyZWVuOiB0cnVlLFxuICAgICAgICB2aWV3Q29udGFpbmVyUmVmOiB0aGlzLnZjUmVmXG4gICAgICAgIC8vIGFuaW1hdGVkOiB0cnVlLFxuICAgICAgICAvLyB0cmFuc2l0aW9uOiB7IG5hbWU6IFwic2xpZGVUb3BcIiB9XG4gICAgfTtcblxuICAgIHRoaXMudHJhbnNmZXJTZXJ2aWNlLnNldERhdGEodGhpcy5wYXltZW50cy5nZXRJdGVtKGV2ZW50LmluZGV4KSk7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydwYXltZW50aW5mbyddKTtcbiAgICAvLyB0aGlzLm1vZGFsLnNob3dNb2RhbChQYXltZW50SW5mb0NvbXBvbmVudCwgb3B0aW9ucykudGhlbihyZXMgPT4ge1xuXG4gICAgLy8gfSk7XG4gIH1cblxuICBvbk5hdkJ0blRhcCgpIHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ3NldHRpbmdzJ10sIHtjbGVhckhpc3Rvcnk6IHRydWV9KTtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBQbGFjZXNBdXRvY29tcGxldGVTZXJ2aWNlIHtcblxuICBwbGFjZXNfdXJpID0gJ2h0dHBzOi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9wbGFjZS90ZXh0c2VhcmNoL2pzb24/a2V5PUFJemFTeUFJVHhTMWptZjhQTXRhelJndVdjQWZXUXhXMWtQT29ZZyZxdWVyeT0nXG4gIGF1dG9jb21wbGV0ZV91cmkgPSAnaHR0cHM6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL3BsYWNlL2F1dG9jb21wbGV0ZS9qc29uP2tleT1BSXphU3lBSVR4UzFqbWY4UE10YXpSZ3VXY0FmV1F4VzFrUE9vWWcmc2Vzc2lvbnRva2VuPTEyMzQ1Njc4OTAmaW5wdXQ9J1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHBDbGllbnQ6IEh0dHBDbGllbnQpIHsgfVxuXG4gIGdldEF1dG9jb21wbGV0ZVJlc3VsdHMocGxhY2UpIHtcbiAgXHRyZXR1cm4gdGhpcy5odHRwQ2xpZW50LmdldChgJHt0aGlzLmF1dG9jb21wbGV0ZV91cml9YCArIHBsYWNlKTtcbiAgfVxuXG4gIGdldFBsYWNlUmVzdWx0cyhwbGFjZSkge1xuICBcdHJldHVybiB0aGlzLmh0dHBDbGllbnQuZ2V0KGAke3RoaXMucGxhY2VzX3VyaX1gICsgcGxhY2UpO1xuICB9XG5cbiAgZ2V0QXV0b2NvbXBsZXRlUmVzdWx0c0dlb2NvZGUocGxhY2UpIHtcbiAgXHRyZXR1cm4gdGhpcy5odHRwQ2xpZW50LmdldChgJHt0aGlzLmF1dG9jb21wbGV0ZV91cml9YCArIHBsYWNlICsgYCZ0eXBlcz1nZW9jb2RlYCk7XG4gIH1cbiAgZ2V0QXV0b2NvbXBsZXRlUmVzdWx0c0VzdGFibGlzaG1lbnQocGxhY2UpIHtcbiAgXHRyZXR1cm4gdGhpcy5odHRwQ2xpZW50LmdldChgJHt0aGlzLmF1dG9jb21wbGV0ZV91cml9YCArIHBsYWNlICsgYCZ0eXBlcz1lc3RhYmxpc2htZW50YCk7XG4gIH1cbiAgZ2V0QXV0b2NvbXBsZXRlUmVzdWx0c0FkZHJlc3MocGxhY2UpIHtcbiAgXHRyZXR1cm4gdGhpcy5odHRwQ2xpZW50LmdldChgJHt0aGlzLmF1dG9jb21wbGV0ZV91cml9YCArIHBsYWNlICsgYCZ0eXBlcz1hZGRyZXNzYCk7XG4gIH1cbiAgZ2V0QXV0b2NvbXBsZXRlUmVzdWx0c0NpdHkocGxhY2UpIHtcbiAgXHRyZXR1cm4gdGhpcy5odHRwQ2xpZW50LmdldChgJHt0aGlzLmF1dG9jb21wbGV0ZV91cml9YCArIHBsYWNlICsgYCZ0eXBlcz0oY2l0aWVzKWApO1xuICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLyogQWRkIG1vYmlsZSBzdHlsZXMgZm9yIHRoZSBjb21wb25lbnQgaGVyZS4gICovXFxuLm1hcC12aWV3IHtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0dmVydGljYWwtYWxpZ246IGJvdHRvbTtcXG59XFxuXFxuLnByb2ZpbGUtcGljdHVyZSB7XFxuXFx0aGVpZ2h0OiA1MDtcXG5cXHR3aWR0aDogNTA7XFxuXFx0Ym9yZGVyLXJhZGl1czogMTAwJTtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcblxcdG1hcmdpbi1sZWZ0OiAxNjtcXG5cXHRtYXJnaW4tdG9wOiAyMDtcXG59XFxuXFxuLm5hbWUtbGFiZWwge1xcblxcdG1hcmdpbi10b3A6IDE2O1xcblxcdG1hcmdpbi1sZWZ0OiAxODtcXG5cXHRjb2xvcjogYmxhY2s7XFxuXFx0Zm9udC13ZWlnaHQ6IDcwMDtcXG5cXHRmb250LXNpemU6IDE3O1xcblxcdHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblxcbi5pbmZvLWxhYmVsIHtcXG5cXHRtYXJnaW4tdG9wOiA0O1xcblxcdG1hcmdpbi1sZWZ0OiAxODtcXG5cXHRtYXJnaW4tYm90dG9tOiAxNjtcXG5cXHRjb2xvcjogYmxhY2s7XFxuXFx0dGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXFxuLmxhYmVsLWNvbnRhaW5lciB7XFxuXFx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuXFxuLmFjdGl2aXR5LWluZGljYXRvciB7XFxuXFx0Y29sb3I6ICNhYzAwZTY7XFxufVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxQYWdlLmFjdGlvbkJhcj5cXG4gICAgPEFjdGlvbkJhciB0aXRsZT1cXFwiUG9zdFxcXCI+XFxuICAgIFxcdDxOYXZpZ2F0aW9uQnV0dG9uIHRleHQ9XFxcIkdvIEJhY2tcXFwiIGFuZHJvaWQuc3lzdGVtSWNvbj1cXFwiaWNfbWVudV9iYWNrXFxcIiAodGFwKT1cXFwib25OYXZCdG5UYXAoKVxcXCI+PC9OYXZpZ2F0aW9uQnV0dG9uPlxcblxcdCAgICA8QWN0aW9uSXRlbSAodGFwKT1cXFwicHJvbXB0RGVsZXRlKClcXFwiXFxuXFx0ICAgICAgaW9zLnN5c3RlbUljb249XFxcIjE2XFxcIiBpb3MucG9zaXRpb249XFxcInJpZ2h0XFxcIlxcblxcdCAgICAgIHRleHQ9XFxcIkRlbGV0ZVxcXCIgYW5kcm9pZC5wb3NpdGlvbj1cXFwicG9wdXBcXFwiICNkZWxldGVJdGVtPjwvQWN0aW9uSXRlbT5cXG5cXHQgICAgPEFjdGlvbkl0ZW0gKHRhcCk9XFxcIm9uUmVwb3J0KClcXFwiXFxuXFx0ICAgICAgaW9zLnN5c3RlbUljb249XFxcIjlcXFwiIGlvcy5wb3NpdGlvbj1cXFwicmlnaHRcXFwiXFxuXFx0ICAgICAgdGV4dD1cXFwiUmVwb3J0XFxcIiBhbmRyb2lkLnBvc2l0aW9uPVxcXCJwb3B1cFxcXCI+PC9BY3Rpb25JdGVtPlxcbiAgICA8L0FjdGlvbkJhcj5cXG48L1BhZ2UuYWN0aW9uQmFyPlxcbjxHcmlkTGF5b3V0IHJvd3M9XFxcIjIqLGF1dG8sMTAqXFxcIiAjbGF5b3V0PlxcblxcdDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cXFwiaG9yaXpvbnRhbFxcXCIgcm93PVxcXCIwXFxcIiBjbGFzcz1cXFwibGFiZWwtY29udGFpbmVyXFxcIiAjaW5mb0NvbnRhaW5lcj5cXG5cXHRcXHQ8SW1hZ2Ugc3JjPVxcXCJ7eyBwcm9maWxlU291cmNlIH19XFxcIiBjbGFzcz1cXFwicHJvZmlsZS1waWN0dXJlXFxcIiBzdHJldGNoPVxcXCJhc3BlY3RGaXRcXFwiPjwvSW1hZ2U+XFxuXFx0ICBcXHQ8U3RhY2tMYXlvdXQ+XFxuXFx0ICAgICAgXFx0PExhYmVsIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiBpZD1cXFwicG9zdC1uYW1lXFxcIiBjbGFzcz1cXFwibmFtZS1sYWJlbFxcXCIgdGV4dD1cXFwie3sgdXNlcm5hbWUgfX1cXFwiPjwvTGFiZWw+XFxuXFx0ICAgICAgXFx0PExhYmVsIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiBpZD1cXFwicG9zdC1pbmZvXFxcIiBjbGFzcz1cXFwiaW5mby1sYWJlbFxcXCIgdGV4dD1cXFwie3sgaW5mbyB9fVxcXCI+PC9MYWJlbD5cXG5cXHQgICAgPC9TdGFja0xheW91dD5cXG5cXHQ8L1N0YWNrTGF5b3V0PlxcblxcdDxTdGFja0xheW91dCBjbGFzcz1cXFwiYnRuLWNvbnRhaW5lclxcXCIgI2J1dHRvbkNvbnRhaW5lciByb3c9XFxcIjFcXFwiPlxcblxcdFxcdDxCdXR0b24gY2xhc3M9XFxcImNvbm5lY3QtYnRuXFxcIiAodGFwKT1cXFwib25Db25uZWN0VGFwKClcXFwiIHRleHQ9XFxcInt7IGJ1dHRvblRleHQgfX1cXFwiPjwvQnV0dG9uPlxcblxcdDwvU3RhY2tMYXlvdXQ+XFxuXFx0PE1hcFZpZXcgKG1hcFJlYWR5KT1cXFwib25NYXBSZWFkeSgkZXZlbnQpXFxcIiBbbGF0aXR1ZGVdPVxcXCJsYXRpdHVkZVxcXCIgW2xvbmdpdHVkZV09XFxcImxvbmdpdHVkZVxcXCIgY2xhc3M9XFxcIm1hcC12aWV3XFxcIiByb3c9XFxcIjJcXFwiICNtYXBWaWV3PjwvTWFwVmlldz5cXG48L0dyaWRMYXlvdXQ+XFxuPEFjdGl2aXR5SW5kaWNhdG9yICNhY3Rpdml0eUluZGljYXRvciBidXN5PVxcXCJ0cnVlXFxcIiB3aWR0aD1cXFwiNDBcXFwiIGhlaWdodD1cXFwiNDBcXFwiIGNsYXNzPVxcXCJhY3Rpdml0eS1pbmRpY2F0b3JcXFwiPjwvQWN0aXZpdHlJbmRpY2F0b3I+XCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NvbnRhaW5lclJlZiwgVmlld1JlZiwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBmaXJlYmFzZSBmcm9tICduYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlJztcbmltcG9ydCB7IEdvb2dsZU1hcHNTZXJ2aWNlIH0gZnJvbSAnLi4vZ29vZ2xlLW1hcHMuc2VydmljZSc7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFRyYW5zZmVyU2VydmljZSB9IGZyb20gJy4uL2RhdGF0cmFuc2Zlci5zZXJ2aWNlJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlXCI7XG5pbXBvcnQgeyBBY3Rpb25JdGVtIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9hY3Rpb24tYmFyJztcbmltcG9ydCB7IFN0YWNrTGF5b3V0IH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9sYXlvdXRzL3N0YWNrLWxheW91dCc7XG5pbXBvcnQgeyBHcmlkTGF5b3V0IH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9sYXlvdXRzL2dyaWQtbGF5b3V0JztcbmltcG9ydCB7IEFjdGl2aXR5SW5kaWNhdG9yIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9hY3Rpdml0eS1pbmRpY2F0b3InO1xuaW1wb3J0IHtyZWdpc3RlckVsZW1lbnR9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9lbGVtZW50LXJlZ2lzdHJ5XCI7XG5pbXBvcnQge2lzQW5kcm9pZCwgaXNJT1N9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtXCI7XG5pbXBvcnQgeyBNYXBWaWV3LCBNYXJrZXIsIFBvc2l0aW9uIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWdvb2dsZS1tYXBzLXNkayc7XG5pbXBvcnQgKiBhcyBkaWFsb2dzIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3NcIjtcbmltcG9ydCB7IExvZ2luY2hlY2tTZXJ2aWNlIH0gZnJvbSAnLi4vbG9naW5jaGVjay5zZXJ2aWNlLnRucyc7XG5pbXBvcnQgeyBDaGF0TWVzc2FnZSB9IGZyb20gJy4uL21vZGVscy9jaGF0LW1lc3NhZ2UubW9kZWwnO1xuXG5yZWdpc3RlckVsZW1lbnQoXCJNYXBWaWV3XCIsICgpID0+IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtZ29vZ2xlLW1hcHMtc2RrXCIpLk1hcFZpZXcpO1xuZGVjbGFyZSB2YXIgY29tOmFueTtcbmRlY2xhcmUgdmFyIEdNU0Nvb3JkaW5hdGVCb3VuZHM6IGFueTtcbmRlY2xhcmUgdmFyIEdNU0NhbWVyYVVwZGF0ZTogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtcG9zdGluZy1pbmZvJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Bvc3RpbmctaW5mby5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3Bvc3RpbmctaW5mby5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUG9zdGluZ0luZm9Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBWaWV3Q2hpbGQoXCJkZWxldGVJdGVtXCIsIHsgc3RhdGljOiB0cnVlIH0pIGRlbGV0ZUl0ZW06IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoXCJidXR0b25Db250YWluZXJcIiwgeyBzdGF0aWM6IHRydWUgfSkgYnV0dG9uQ29udGFpbmVyOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKFwiaW5mb0NvbnRhaW5lclwiLCB7IHN0YXRpYzogdHJ1ZSB9KSBpbmZvQ29udGFpbmVyOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKFwiYWN0aXZpdHlJbmRpY2F0b3JcIiwgeyBzdGF0aWM6IHRydWUgfSkgYWk6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoXCJsYXlvdXRcIiwgeyBzdGF0aWM6IHRydWUgfSkgbGF5b3V0OiBFbGVtZW50UmVmO1xuICBtYXBWaWV3OiBNYXBWaWV3O1xuICBsYXRpdHVkZSA9ICAzNztcbiAgbG9uZ2l0dWRlID0gLTEyMjtcblxuICBzdGFydExhdDtcbiAgZW5kTGF0O1xuICBzdGFydExuZztcbiAgZW5kTG5nO1xuICBib3VuZHM7XG4gIG1hcERhdGE7XG4gIHVzZXJJZDtcbiAgcHJvZmlsZVNvdXJjZTtcbiAgaW5mbztcbiAgdXNlcm5hbWU7XG4gIGJ1dHRvblRleHQ7XG4gIGN1cnJlbnRVc2VyTmFtZTtcblxuICBjaGF0VXNlcnMgPSBbXTtcbiAgY3VycmVudFVzZXI7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtYXBTZXJ2aWNlOiBHb29nbGVNYXBzU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMsIHByaXZhdGUgdHJhbnNmZXJTZXJ2aWNlOiBUcmFuc2ZlclNlcnZpY2UsIHByaXZhdGUgcGFnZTogUGFnZSxcbiAgICBwcml2YXRlIGxvZ2luY2hlY2tTZXJ2aWNlOiBMb2dpbmNoZWNrU2VydmljZSkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIFx0dGhpcy5sb2FkVmlld3MoKTtcbiAgfVxuXG4gIGxvYWRWaWV3cygpIHtcbiAgICBsZXQgYWN0aXZpdHlJbmRpY2F0b3IgPSA8QWN0aXZpdHlJbmRpY2F0b3I+IHRoaXMuYWkubmF0aXZlRWxlbWVudDtcbiAgICBsZXQgaW5mb0NvbnRhaW5lciA9IDxTdGFja0xheW91dD4gdGhpcy5pbmZvQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQ7XG4gICAgbGV0IGRlbGV0ZUJ1dHRvbiA9IDxBY3Rpb25JdGVtPiB0aGlzLmRlbGV0ZUl0ZW0ubmF0aXZlRWxlbWVudDtcbiAgICBsZXQgY2hhdEJ1dHRvbiA9IDxTdGFja0xheW91dD4gdGhpcy5idXR0b25Db250YWluZXIubmF0aXZlRWxlbWVudDtcblxuICAgIGluZm9Db250YWluZXIudmlzaWJpbGl0eSA9ICdjb2xsYXBzZSc7XG4gICAgY2hhdEJ1dHRvbi52aXNpYmlsaXR5ID0gJ2NvbGxhcHNlJztcbiAgICB0aGlzLnVzZXJJZCA9IHRoaXMubG9naW5jaGVja1NlcnZpY2UuZ2V0VXNlcigpO1xuICAgIHRoaXMubWFwRGF0YSA9IHRoaXMudHJhbnNmZXJTZXJ2aWNlLmdldERhdGEoKTtcbiAgICBmaXJlYmFzZS5maXJlc3RvcmUuY29sbGVjdGlvbigndXNlcnMnKS5kb2ModGhpcy51c2VySWQpLmdldCgpLnRoZW4oKGRvYykgPT4ge1xuICAgICAgdGhpcy5jdXJyZW50VXNlciA9IGRvYy5kYXRhKCk7XG4gICAgICBpZihkb2MuZGF0YSgpLmNoYXRzLmluY2x1ZGVzKHRoaXMubWFwRGF0YS5wb3N0SW5mby5pZCkpIHtcbiAgICAgICAgdGhpcy5idXR0b25UZXh0ID0gJ1ZpZXcgY2hhdCc7XG4gICAgICAgIGFjdGl2aXR5SW5kaWNhdG9yLmJ1c3kgPSBmYWxzZTtcbiAgICAgICAgaW5mb0NvbnRhaW5lci52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgICAgICBjaGF0QnV0dG9uLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgZmlyZWJhc2UuZmlyZXN0b3JlLmNvbGxlY3Rpb24oJ2NoYXRzJykuZG9jKHRoaXMubWFwRGF0YS5wb3N0SW5mby5kYXRhLnVpZCkuZ2V0KCkudGhlbigoZG9jKSA9PiB7XG4gICAgICAgICAgaWYoIWRvYy5leGlzdHMgJiYgdGhpcy51c2VySWQgPT09IHRoaXMubWFwRGF0YS5wb3N0SW5mby5kYXRhLnVpZClcbiAgICAgICAgICAgIGNoYXRCdXR0b24udmlzaWJpbGl0eSA9ICdjb2xsYXBzZSc7XG4gICAgICAgICAgZWxzZVxuICAgICAgICAgICAgY2hhdEJ1dHRvbi52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgICAgICAgIGFjdGl2aXR5SW5kaWNhdG9yLmJ1c3kgPSBmYWxzZTtcbiAgICAgICAgICBpbmZvQ29udGFpbmVyLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMuYnV0dG9uVGV4dCA9ICdKb2luIGNoYXQnO1xuICAgICAgfVxuICAgIH0pXG5cbiAgICBpZihpc0lPUykge1xuICAgICAgdGhpcy5ib3VuZHMgPSBHTVNDb29yZGluYXRlQm91bmRzLmFsbG9jKCkuaW5pdCgpO1xuICAgIH1cbiAgICBcbiAgICB0aGlzLnN0YXJ0TGF0ID0gdGhpcy5tYXBEYXRhLnBvc3RJbmZvLmRhdGEuc3RhcnRMYXQ7XG4gICAgdGhpcy5lbmRMYXQgPSB0aGlzLm1hcERhdGEucG9zdEluZm8uZGF0YS5lbmRMYXQ7XG4gICAgdGhpcy5zdGFydExuZyA9IHRoaXMubWFwRGF0YS5wb3N0SW5mby5kYXRhLnN0YXJ0TG5nO1xuICAgIHRoaXMuZW5kTG5nID0gdGhpcy5tYXBEYXRhLnBvc3RJbmZvLmRhdGEuZW5kTG5nO1xuICAgIHRoaXMuaW5mbyA9IHRoaXMubWFwRGF0YS5wb3N0SXRlbS5pbmZvO1xuICAgIHRoaXMucHJvZmlsZVNvdXJjZSA9IHRoaXMubWFwRGF0YS5wb3N0SXRlbS5wcm9maWxlU291cmNlO1xuICAgIHRoaXMudXNlcm5hbWUgPSB0aGlzLm1hcERhdGEucG9zdEl0ZW0udXNlcm5hbWU7XG5cbiAgICBcbiAgICBpZih0aGlzLnVzZXJJZCAhPT0gdGhpcy5tYXBEYXRhLnBvc3RJbmZvLmRhdGEudWlkKSB7XG4gICAgICBkZWxldGVCdXR0b24udmlzaWJpbGl0eSA9ICdjb2xsYXBzZSc7XG4gICAgfVxuXG4gICAgZmlyZWJhc2UuZ2V0Q3VycmVudFVzZXIoKS50aGVuKCh1c2VyKSA9PiB7XG4gICAgICB0aGlzLmN1cnJlbnRVc2VyTmFtZSA9IHVzZXIuZGlzcGxheU5hbWU7XG4gICAgfSlcbiAgfVxuXG4gIG9uTWFwUmVhZHkoZXZlbnQpIHtcbiAgXHR0aGlzLm1hcFZpZXcgPSBldmVudC5vYmplY3Q7XG5cblx0Ly8gdGhpcy5sYXRpdHVkZSA9ICh0aGlzLnN0YXJ0TGF0ICsgdGhpcy5lbmRMYXQpIC8gMi4wO1xuXHQvLyB0aGlzLmxvbmdpdHVkZSA9ICh0aGlzLnN0YXJ0TG5nICsgdGhpcy5lbmRMbmcpIC8gMi4wO1xuICBcdHRoaXMuYWRkTWFya2VyKHRoaXMuc3RhcnRMYXQsIHRoaXMuc3RhcnRMbmcsIHRoaXMubWFwRGF0YS5wb3N0SW5mby5kYXRhLnN0YXJ0QWRkcmVzcywgdGhpcy5tYXBEYXRhLnBvc3RJbmZvLmRhdGEuc3RhcnRGb3JtYXR0ZWQsIDApO1xuXHQgIHRoaXMuYWRkTWFya2VyKHRoaXMuZW5kTGF0LCB0aGlzLmVuZExuZywgdGhpcy5tYXBEYXRhLnBvc3RJbmZvLmRhdGEuZW5kQWRkcmVzcywgdGhpcy5tYXBEYXRhLnBvc3RJbmZvLmRhdGEuZW5kRm9ybWF0dGVkLCAxKTtcblxuICBcdGlmKGlzQW5kcm9pZCkge1xuICAgIFx0XHR2YXIgYnVpbGRlciA9IG5ldyBjb20uZ29vZ2xlLmFuZHJvaWQuZ21zLm1hcHMubW9kZWwuTGF0TG5nQm91bmRzLkJ1aWxkZXIoKTtcbiAgXHRcdHRoaXMubWFwVmlldy5maW5kTWFya2VyKGZ1bmN0aW9uIChtYXJrZXIpIHsgYnVpbGRlci5pbmNsdWRlKG1hcmtlci5hbmRyb2lkLmdldFBvc2l0aW9uKCkpOyByZXR1cm4gZmFsc2V9KTtcbiAgXHRcdHZhciBib3VuZHMgPSBidWlsZGVyLmJ1aWxkKCk7XG4gIFx0XHR2YXIgY3UgPSBjb20uZ29vZ2xlLmFuZHJvaWQuZ21zLm1hcHMuQ2FtZXJhVXBkYXRlRmFjdG9yeS5uZXdMYXRMbmdCb3VuZHMoYm91bmRzLCAxNTApO1xuICBcdFx0dGhpcy5tYXBWaWV3LmdNYXAuYW5pbWF0ZUNhbWVyYShjdSk7XG4gIFx0fVxuICBcdGVsc2UgaWYoaXNJT1MpIHtcbiAgXHRcdHZhciB1cGRhdGUgPSBHTVNDYW1lcmFVcGRhdGUuZml0Qm91bmRzV2l0aFBhZGRpbmcoYm91bmRzLCAxNTApOyB0aGlzLm1hcFZpZXcuZ01hcC5tb3ZlQ2FtZXJhKHVwZGF0ZSk7XG4gIFx0fVxuXG4gIH1cblxuICBhZGRNYXJrZXIobGF0LCBsbmcsIHRpdGxlLCBzbmlwcGV0LCBpbmRleCkge1xuICBcdHZhciBtYXJrZXIgPSBuZXcgTWFya2VyKCk7XG4gICAgbWFya2VyLnBvc2l0aW9uID0gUG9zaXRpb24ucG9zaXRpb25Gcm9tTGF0TG5nKGxhdCwgbG5nKTtcbiAgICBtYXJrZXIudGl0bGUgPSB0aXRsZTtcbiAgICBtYXJrZXIuc25pcHBldCA9IHNuaXBwZXQ7XG4gICAgbWFya2VyLnVzZXJEYXRhID0ge2luZGV4OiBpbmRleH07XG4gICAgdGhpcy5tYXBWaWV3LmFkZE1hcmtlcihtYXJrZXIpO1xuICAgIGlmKGlzSU9TKVxuICAgIFx0dGhpcy5ib3VuZHMgPSB0aGlzLmJvdW5kcy5pbmNsdWRpbmdDb29yZGluYXRlKG1hcmtlci5wb3NpdGlvbik7XG4gIH1cblxuICBvbk5hdkJ0blRhcCgpIHtcbiAgXHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ25hdmlnYXRpb24nXSwge2NsZWFySGlzdG9yeTogdHJ1ZX0pO1xuICB9XG5cbiAgZGVsZXRlRmlsZXMoKSB7XG4gICAgZmlyZWJhc2Uuc3RvcmFnZS5kZWxldGVGaWxlKHtcbiAgICAgIC8vIHRoZSBmdWxsIHBhdGggb2YgYW4gZXhpc3RpbmcgZmlsZSBpbiB5b3VyIEZpcmViYXNlIHN0b3JhZ2VcbiAgICAgIHJlbW90ZUZ1bGxQYXRoOiAncG9zdGluZ3MvJyArIHRoaXMubWFwRGF0YS5wb3N0SW5mby5pZCArICcvbWFwcy9sYXJnZV9tYXAucG5nJ1xuICAgIH0pLnRoZW4oXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkZpbGUgZGVsZXRlZC5cIik7XG4gICAgICAgIH0sXG4gICAgICAgIChlcnJvcikgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiRmlsZSBkZWxldGlvbiBFcnJvcjogXCIgKyBlcnJvcik7XG4gICAgICAgIH1cbiAgICApO1xuICAgIGZpcmViYXNlLnN0b3JhZ2UuZGVsZXRlRmlsZSh7XG4gICAgICAvLyB0aGUgZnVsbCBwYXRoIG9mIGFuIGV4aXN0aW5nIGZpbGUgaW4geW91ciBGaXJlYmFzZSBzdG9yYWdlXG4gICAgICByZW1vdGVGdWxsUGF0aDogJ3Bvc3RpbmdzLycgKyB0aGlzLm1hcERhdGEucG9zdEluZm8uaWQgKyAnL21hcHMvc21hbGxfbWFwLnBuZydcbiAgICB9KS50aGVuKFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJGaWxlIGRlbGV0ZWQuXCIpO1xuICAgICAgICB9LFxuICAgICAgICAoZXJyb3IpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkZpbGUgZGVsZXRpb24gRXJyb3I6IFwiICsgZXJyb3IpO1xuICAgICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIHByb21wdERlbGV0ZSgpIHtcbiAgICBkaWFsb2dzLmNvbmZpcm0oe1xuICAgICAgICB0aXRsZTogXCJDb25maXJtIGRlbGV0ZVwiLFxuICAgICAgICBtZXNzYWdlOiBcIkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBwb3N0P1wiLFxuICAgICAgICBva0J1dHRvblRleHQ6IFwiQ29uZmlybVwiLFxuICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIkNhbmNlbFwiLFxuICAgIH0pLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgLy8gcmVzdWx0IGFyZ3VtZW50IGlzIGJvb2xlYW5cbiAgICAgICAgaWYocmVzdWx0KVxuICAgICAgICAgIHRoaXMub25EZWxldGUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIG9uRGVsZXRlKCkge1xuICAgIHZhciBwb3N0aW5nRG9jdW1lbnQgPSBmaXJlYmFzZS5maXJlc3RvcmUuY29sbGVjdGlvbigncG9zdGluZ3MnKS5kb2ModGhpcy5tYXBEYXRhLnBvc3RJbmZvLmlkKTtcbiAgICB2YXIgdXNlckRvY3VtZW50ID0gZmlyZWJhc2UuZmlyZXN0b3JlLmNvbGxlY3Rpb24oJ3VzZXJzJykuZG9jKHRoaXMubWFwRGF0YS5wb3N0SW5mby5kYXRhLnVpZCk7XG4gICAgdmFyIGNoYXREb2N1bWVudCA9IGZpcmViYXNlLmZpcmVzdG9yZS5jb2xsZWN0aW9uKCdjaGF0cycpLmRvYyh0aGlzLm1hcERhdGEucG9zdEluZm8uaWQpO1xuICAgIHBvc3RpbmdEb2N1bWVudC5kZWxldGUoKS50aGVuKChyZXMpID0+IHtcbiAgICAgIHVzZXJEb2N1bWVudC5nZXQoKS50aGVuKChkb2MpID0+IHtcbiAgICAgICAgbGV0IHVzZXJQb3N0cyA9IGRvYy5kYXRhKCkucG9zdHM7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdXNlclBvc3RzLmluZGV4T2YodGhpcy5tYXBEYXRhLnBvc3RJbmZvLmlkLCAwKTtcbiAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgdXNlclBvc3RzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH1cblxuICAgICAgICB1c2VyRG9jdW1lbnQudXBkYXRlKHtcbiAgICAgICAgICBwb3N0czogdXNlclBvc3RzXG4gICAgICAgIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgIC8vIGNoYXREb2N1bWVudC5nZXQoKS50aGVuKChkb2MpID0+IHtcbiAgICAgICAgICAvLyAgIGxldCBkYXRhID0gZG9jLmRhdGEoKTtcbiAgICAgICAgICAvLyAgIGlmKGRhdGEpIHtcbiAgICAgICAgICAvLyAgICAgZm9yKHZhciBpID0gMDsgaSA8IGRhdGEudXNlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAvLyAgICAgICAvLyB0aGlzLmNoYXRVc2Vycy5wdXNoKGRhdGEudXNlcnNbaV0udWlkKTtcbiAgICAgICAgICAvLyAgICAgICBmaXJlYmFzZS5maXJlc3RvcmUuY29sbGVjdGlvbigndXNlcnMnKS5kb2MoZGF0YS51c2Vyc1tpXS51aWQpLmdldCgpLnRoZW4oKGRvYykgPT4ge1xuICAgICAgICAgIC8vICAgICAgICAgY29uc3QgaWQgPSBkYXRhLnVzZXJzW2ldLnVpZDtcbiAgICAgICAgICAvLyAgICAgICAgIGxldCB1aWRDaGF0cyA9IGRvYy5kYXRhKCkuY2hhdHM7XG4gICAgICAgICAgLy8gICAgICAgICBsZXQgaW5kZXggPSB1aWRDaGF0cy5pbmRleE9mKHRoaXMubWFwRGF0YS5wb3N0SW5mby5pZCk7XG4gICAgICAgICAgLy8gICAgICAgICBpZihpbmRleCA+IC0xKSB7XG4gICAgICAgICAgLy8gICAgICAgICAgIHVpZENoYXRzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgICAgLy8gICAgICAgICBmaXJlYmFzZS5maXJlc3RvcmUuY29sbGVjdGlvbigndXNlcnMnKS5kb2MoaWQpLnVwZGF0ZSh7XG4gICAgICAgICAgLy8gICAgICAgICAgIGNoYXRzOiB1aWRDaGF0c1xuICAgICAgICAgIC8vICAgICAgICAgfSlcbiAgICAgICAgICAvLyAgICAgICB9KVxuICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgLy8gICAgIGNoYXREb2N1bWVudC5kZWxldGUoKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAvLyAgICAgICB0aGlzLmRlbGV0ZUZpbGVzKCk7XG4gICAgICAgICAgLy8gICAgICAgdGhpcy5vbk5hdkJ0blRhcCgpO1xuICAgICAgICAgIC8vICAgICB9KVxuICAgICAgICAgIC8vICAgfVxuICAgICAgICAgIC8vICAgZWxzZSB7XG4gICAgICAgICAgLy8gICAgIHRoaXMuZGVsZXRlRmlsZXMoKTtcbiAgICAgICAgICAvLyAgICAgdGhpcy5vbk5hdkJ0blRhcCgpO1xuICAgICAgICAgIC8vICAgfVxuICAgICAgICAgIC8vIH0pXG4gICAgICAgICAgdGhpcy5kZWxldGVGaWxlcygpO1xuICAgICAgICAgIHRoaXMub25OYXZCdG5UYXAoKTtcbiAgICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgIH0pXG4gICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICB9KVxuICAgIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgfSlcbiAgfVxuXG4gIHJlbW92ZUNoYXQoaW5kZXgpIHtcbiAgICBjb25zb2xlLmxvZyhpbmRleCk7XG4gICAgZmlyZWJhc2UuZmlyZXN0b3JlLmNvbGxlY3Rpb24oJ3VzZXJzJykuZG9jKHRoaXMuY2hhdFVzZXJzW2luZGV4XSkuZ2V0KCkudGhlbigoZG9jKSA9PiB7XG4gICAgICBsZXQgdXNlckNoYXRzID0gZG9jLmRhdGEoKS5jaGF0cztcbiAgICAgIGNvbnN0IGluZGV4ID0gdXNlckNoYXRzLmluZGV4T2YodGhpcy5tYXBEYXRhLnBvc3RJbmZvLmlkKTtcbiAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICB1c2VyQ2hhdHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIH1cbiAgICAgIGZpcmViYXNlLmZpcmVzdG9yZS5jb2xsZWN0aW9uKCd1c2VycycpLmRvYyh0aGlzLmNoYXRVc2Vyc1tpbmRleF0pLnVwZGF0ZSh7XG4gICAgICAgIGNoYXRzOiB1c2VyQ2hhdHNcbiAgICAgIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBpZihpbmRleCA9PT0gdGhpcy5jaGF0VXNlcnNbaW5kZXhdLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICB0aGlzLmRlbGV0ZUZpbGVzKCk7XG4gICAgICAgICAgdGhpcy5vbk5hdkJ0blRhcCgpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBvblJlcG9ydCgpIHtcblxuICB9XG5cbiAgb25Db25uZWN0VGFwKCkge1xuICAgIGxldCBncmlkQ29udGFpbmVyID0gPEdyaWRMYXlvdXQ+IHRoaXMubGF5b3V0Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgbGV0IGFjdGl2aXR5SW5kaWNhdG9yID0gPEFjdGl2aXR5SW5kaWNhdG9yPiB0aGlzLmFpLm5hdGl2ZUVsZW1lbnQ7XG5cbiAgICBncmlkQ29udGFpbmVyLnZpc2liaWxpdHkgPSAnY29sbGFwc2UnO1xuICAgIGFjdGl2aXR5SW5kaWNhdG9yLmJ1c3kgPSB0cnVlO1xuXG4gICAgaWYodGhpcy5idXR0b25UZXh0ID09PSAnVmlldyBjaGF0Jykge1xuICAgICAgdGhpcy50cmFuc2ZlclNlcnZpY2Uuc2V0RGF0YSh0aGlzLm1hcERhdGEucG9zdEluZm8uaWQpO1xuICAgICAgZ3JpZENvbnRhaW5lci52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgICAgYWN0aXZpdHlJbmRpY2F0b3IuYnVzeSA9IGZhbHNlO1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydjaGF0J10pO1xuICAgIH1cbiAgICBlbHNlIGlmKHRoaXMuYnV0dG9uVGV4dCA9PT0gJ0pvaW4gY2hhdCcpIHtcbiAgICAgIGNvbnN0IGNoYXREb2N1bWVudCA9IGZpcmViYXNlLmZpcmVzdG9yZS5jb2xsZWN0aW9uKCdjaGF0cycpLmRvYyh0aGlzLm1hcERhdGEucG9zdEluZm8uaWQpO1xuICAgICAgY29uc3QgdXNlckRvY3VtZW50ID0gZmlyZWJhc2UuZmlyZXN0b3JlLmNvbGxlY3Rpb24oJ3VzZXJzJykuZG9jKHRoaXMudXNlcklkKTtcbiAgICAgIGNoYXREb2N1bWVudC5nZXQoKS50aGVuKChkb2MpID0+IHtcbiAgICAgICAgaWYoZG9jLmV4aXN0cykge1xuICAgICAgICAgIC8vY2hhdCBleGlzdHMsIHNvIGFkZCB1c2VyIHRvIHRoZSBjaGF0IHJvb20gYW5kIG5hdmlnYXRlIHRoZXJlXG4gICAgICAgICAgbGV0IHRva2VuczogW3N0cmluZ10gPSBkb2MuZGF0YSgpLnRva2VucztcbiAgICAgICAgICB2YXIgdXNlcnM6IFt7dWlkOiBzdHJpbmcsIGRpc3BsYXlOYW1lOiBzdHJpbmd9XSA9IGRvYy5kYXRhKCkudXNlcnM7XG4gICAgICAgICAgdmFyIHVzZXJUb2tlbnM6IFtzdHJpbmddID0gdGhpcy5jdXJyZW50VXNlci50b2tlbnM7XG4gICAgICAgICAgdmFyIG5ld1Rva2VucyA9IHRva2Vucy5jb25jYXQodXNlclRva2Vucyk7XG4gICAgICAgICAgdXNlcnMucHVzaCh7dWlkOiB0aGlzLnVzZXJJZCwgZGlzcGxheU5hbWU6IHRoaXMuY3VycmVudFVzZXJOYW1lfSlcbiAgICAgICAgICBjaGF0RG9jdW1lbnQudXBkYXRlKHtcbiAgICAgICAgICAgIHVzZXJzOiB1c2VycyxcbiAgICAgICAgICAgIHRva2VuczogQXJyYXkuZnJvbShuZXcgU2V0KG5ld1Rva2VucykpXG4gICAgICAgICAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICB1c2VyRG9jdW1lbnQuZ2V0KCkudGhlbigoZG9jKSA9PiB7XG4gICAgICAgICAgICAgIHZhciB1c2VyQ2hhdHMgPSBkb2MuZGF0YSgpLmNoYXRzO1xuICAgICAgICAgICAgICB1c2VyQ2hhdHMucHVzaCh0aGlzLm1hcERhdGEucG9zdEluZm8uaWQpO1xuICAgICAgICAgICAgICB1c2VyRG9jdW1lbnQudXBkYXRlKHtcbiAgICAgICAgICAgICAgICBjaGF0czogdXNlckNoYXRzXG4gICAgICAgICAgICAgIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgIC8vZmluYWxseSBhZnRlciBldmVyeXRoaW5nIGVsc2UgaGFzIHVwZGF0ZWQsIHNlbmQgdXNlciB0byBjaGF0IGNvbXBvbmVudFxuICAgICAgICAgICAgICAgIHRoaXMudHJhbnNmZXJTZXJ2aWNlLnNldERhdGEodGhpcy5tYXBEYXRhLnBvc3RJbmZvLmlkKTtcbiAgICAgICAgICAgICAgICB0aGlzLmJ1dHRvblRleHQgPSAnVmlldyBjaGF0JztcbiAgICAgICAgICAgICAgICBncmlkQ29udGFpbmVyLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gICAgICAgICAgICAgICAgYWN0aXZpdHlJbmRpY2F0b3IuYnVzeSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnY2hhdCddKTtcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAvL2NoYXQgZG9lcyBub3QgZXhpc3QsIHNvIGNyZWF0ZSBhbmQgYWRkIGJvdGggcG9zdCB1c2VyIGFuZCBjdXJyZW50IHVzZXJcbiAgICAgICAgICBmaXJlYmFzZS5maXJlc3RvcmUuY29sbGVjdGlvbignY2hhdHMnKS5kb2ModGhpcy5tYXBEYXRhLnBvc3RJbmZvLmlkKS5zZXQoe1xuICAgICAgICAgICAgdXNlcnM6IFt7dWlkOiB0aGlzLm1hcERhdGEucG9zdEluZm8uZGF0YS51aWQsIGRpc3BsYXlOYW1lOiB0aGlzLm1hcERhdGEucG9zdEl0ZW0udXNlcm5hbWV9LCB7dWlkOiB0aGlzLnVzZXJJZCwgZGlzcGxheU5hbWU6IHRoaXMuY3VycmVudFVzZXJOYW1lfV0sXG4gICAgICAgICAgICBjaGF0czogW10sXG4gICAgICAgICAgICBleHBpcmVkOiBmYWxzZSxcbiAgICAgICAgICB9KS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgIGZpcmViYXNlLmZpcmVzdG9yZS5jb2xsZWN0aW9uKCd1c2VycycpLmRvYyh0aGlzLm1hcERhdGEucG9zdEluZm8uZGF0YS51aWQpLmdldCgpLnRoZW4oKGRvYykgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB1c2VyVG9rZW5zID0gdGhpcy5jdXJyZW50VXNlci50b2tlbnM7XG4gICAgICAgICAgICAgIGNvbnN0IG90aGVyVXNlclRva2VucyA9IGRvYy5kYXRhKCkudG9rZW5zO1xuICAgICAgICAgICAgICBjb25zdCBuZXdUb2tlbnMgPSB1c2VyVG9rZW5zLmNvbmNhdChvdGhlclVzZXJUb2tlbnMpO1xuICAgICAgICAgICAgICBmaXJlYmFzZS5maXJlc3RvcmUuY29sbGVjdGlvbignY2hhdHMnKS5kb2ModGhpcy5tYXBEYXRhLnBvc3RJbmZvLmlkKS51cGRhdGUoe1xuICAgICAgICAgICAgICAgIHRva2VuczogQXJyYXkuZnJvbShuZXcgU2V0KG5ld1Rva2VucykpXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIHZhciB1c2VyQ2hhdHMgPSBkb2MuZGF0YSgpLmNoYXRzO1xuICAgICAgICAgICAgICB1c2VyQ2hhdHMucHVzaCh0aGlzLm1hcERhdGEucG9zdEluZm8uaWQpO1xuICAgICAgICAgICAgICBmaXJlYmFzZS5maXJlc3RvcmUuY29sbGVjdGlvbigndXNlcnMnKS5kb2ModGhpcy5tYXBEYXRhLnBvc3RJbmZvLmRhdGEudWlkKS51cGRhdGUoe1xuICAgICAgICAgICAgICAgIGNoYXRzOiB1c2VyQ2hhdHNcbiAgICAgICAgICAgICAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgdXNlckRvY3VtZW50LmdldCgpLnRoZW4oKGRvYykgPT4ge1xuICAgICAgICAgICAgICAgICAgdmFyIHVzZXJDaGF0cyA9IGRvYy5kYXRhKCkuY2hhdHM7XG4gICAgICAgICAgICAgICAgICB1c2VyQ2hhdHMucHVzaCh0aGlzLm1hcERhdGEucG9zdEluZm8uaWQpO1xuICAgICAgICAgICAgICAgICAgdXNlckRvY3VtZW50LnVwZGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIGNoYXRzOiB1c2VyQ2hhdHNcbiAgICAgICAgICAgICAgICAgIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvL2ZpbmFsbHkgYWZ0ZXIgZXZlcnl0aGluZyBlbHNlIGhhcyB1cGRhdGVkLCBzZW5kIHVzZXIgdG8gY2hhdCBjb21wb25lbnRcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50cmFuc2ZlclNlcnZpY2Uuc2V0RGF0YSh0aGlzLm1hcERhdGEucG9zdEluZm8uaWQpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJ1dHRvblRleHQgPSAnVmlldyBjaGF0JztcbiAgICAgICAgICAgICAgICAgICAgZ3JpZENvbnRhaW5lci52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgICAgICAgICAgICAgICAgICBhY3Rpdml0eUluZGljYXRvci5idXN5ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnY2hhdCddKTtcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFBvc3RpbmdTZXJ2aWNlIHtcblx0LyoqXG5cdCogVG8gZ2V0IHRoZSBzZXJ2ZXIgdG8gcmVjb2duaXplIHlvdXIgbW9iaWxlIGRldmljZSwgZmluZCB5b3VyIGlwdjQgYWRkcmVzcyBieSBydW5uaW5nIGlwY29uZmlnIGluIGEgdGVybWluYWwgd2luZG93XG5cdCogYW5kIGFkZCBhIG5ldyB1cmkgbGluZSB3aXRoIHlvdXIgaXB2NCBhZGRyZXNzLiBEbyB0aGlzIGZvciBuZXR3b3JrX3NlY3VyaXR5X2NvbmZpZy54bWwsIHVzZXIuc2VydmljZXMudG5zLnRzLCBhbmRcblx0KiBwb3N0aW5nLnNlcnZpY2UudG5zLnRzLlxuXHQqL1xuXHQvLyBBZGFtJ3MgdGVzdGluZyBzZXJ2ZXJcblx0Ly8gdXJpID0gJ2h0dHA6Ly8xOTIuMTY4LjEuNzo0MDAwJztcblx0Ly8gdXJpID0gJ2h0dHA6Ly8xMC41LjExLjI1OjQwMDAnO1xuXHQvLyBQaGlsbGlwJ3MgVGVzdGluZyBzZXJ2ZXJcblx0dXJpID0gJ2h0dHA6Ly8xOTIuMTY4LjEuMzo0MDAwJztcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7IH1cblxuICBnZXRQb3N0aW5ncygpIHtcbiAgXHRyZXR1cm4gdGhpcy5odHRwLmdldChgJHt0aGlzLnVyaX0vcG9zdGluZ3NgKTtcbiAgfVxuXG4gIGdldFBvc3RpbmdieUlkKGlkKSB7XG4gIFx0cmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy51cml9L3Bvc3RpbmdzLyR7aWR9YCk7XG4gIH1cblxuICBhZGRQb3N0aW5nKHVzZXIsIHN0YXJ0YWRyLCBlbmRhZHIsIGRhdGUsIGNvc3QsIGNhcGFjaXR5LCBjb21tZW50cykge1xuXG4gICAgLy9jb25zdCBwcmljZSA9IHJlcSguLi8uLi9iYWNrZW5kL2RhdGEvcHJpY2luZykoe3N0YXJ0OiBzdGFydGFkciwgZW5kOiBlbmRhZHJ9KTtcblxuICBcdGNvbnN0IHBvc3RpbmcgPSB7XG4gIFx0XHR1c2VyIDogdXNlcixcbiAgXHRcdHN0YXJ0YWRyIDogc3RhcnRhZHIsXG4gIFx0XHRlbmRhZHIgOiBlbmRhZHIsXG4gIFx0XHRkYXRlIDogZGF0ZSxcbiAgXHRcdGNvc3QgOiBjb3N0LFxuICBcdFx0Y2FwYWNpdHkgOiBjYXBhY2l0eSxcbiAgXHRcdGNvbW1lbnRzIDogY29tbWVudHNcbiAgXHR9O1xuICBcdHJldHVybiB0aGlzLmh0dHAucG9zdChgJHt0aGlzLnVyaX0vcG9zdGluZ3MvYWRkL2AsIHBvc3RpbmcpO1xuICB9XG5cbiAgdXBkYXRlUG9zdGluZyhpZCwgdXNlciwgc3RhcnRhZHIsIGVuZGFkciwgZGF0ZSwgY29zdCwgY2FwYWNpdHksIGNvbW1lbnRzKSB7XG4gICAgLy9jb25zdCBwcmljZSA9IHJlcSguLi8uLi9iYWNrZW5kL2RhdGEvcHJpY2luZykoe3N0YXJ0OiBzdGFydGFkciwgZW5kOiBlbmRhZHJ9KTtcbiAgXHRjb25zdCBwb3N0aW5nID0ge1xuICBcdFx0dXNlciA6IHVzZXIsXG4gIFx0XHRzdGFydGFkciA6IHN0YXJ0YWRyLFxuICBcdFx0ZW5kYWRyIDogZW5kYWRyLFxuICBcdFx0ZGF0ZSA6IGRhdGUsXG4gIFx0XHRjb3N0IDogY29zdCxcbiAgXHRcdGNhcGFjaXR5IDogY2FwYWNpdHksXG4gIFx0XHRjb21tZW50cyA6IGNvbW1lbnRzXG4gIFx0fTtcbiAgXHRyZXR1cm4gdGhpcy5odHRwLnBvc3QoYCR7dGhpcy51cml9L3Bvc3RpbmdzL3VwZGF0ZS8ke2lkfWAsIHBvc3RpbmcpO1xuICB9XG5cbiAgZGVsZXRlUG9zdGluZyhpZCkge1xuICBcdHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke3RoaXMudXJpfS9wb3N0aW5ncy9kZWxldGUvJHtpZH1gKTtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBQb3N0aW5nU2VydmljZSB7XG5cdC8qKlxuXHQqIFRvIGdldCB0aGUgc2VydmVyIHRvIHJlY29nbml6ZSB5b3VyIG1vYmlsZSBkZXZpY2UsIGZpbmQgeW91ciBpcHY0IGFkZHJlc3MgYnkgcnVubmluZyBpcGNvbmZpZyBpbiBhIHRlcm1pbmFsIHdpbmRvd1xuXHQqIGFuZCBhZGQgYSBuZXcgdXJpIGxpbmUgd2l0aCB5b3VyIGlwdjQgYWRkcmVzcy4gRG8gdGhpcyBmb3IgbmV0d29ya19zZWN1cml0eV9jb25maWcueG1sLCB1c2VyLnNlcnZpY2VzLnRucy50cywgYW5kXG5cdCogcG9zdGluZy5zZXJ2aWNlLnRucy50cy5cblx0Ki9cblx0Ly8gQWRhbSdzIHRlc3Rpbmcgc2VydmVyXG5cdC8vIHVyaSA9ICdodHRwOi8vMTkyLjE2OC4xLjc6NDAwMCc7XG5cdC8vIHVyaSA9ICdodHRwOi8vMTAuNS4xMS4yNTo0MDAwJztcblx0Ly8gUGhpbGxpcCdzIFRlc3Rpbmcgc2VydmVyXG5cdHVyaSA9ICdodHRwOi8vMTkyLjE2OC4xLjM6NDAwMCc7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkgeyB9XG5cbiAgZ2V0UG9zdGluZ3MoKSB7XG4gIFx0cmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy51cml9L3Bvc3RpbmdzYCk7XG4gIH1cblxuICBnZXRQb3N0aW5nYnlJZChpZCkge1xuICBcdHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke3RoaXMudXJpfS9wb3N0aW5ncy8ke2lkfWApO1xuICB9XG5cbiAgYWRkUG9zdGluZyh1c2VyLCBzdGFydGFkciwgZW5kYWRyLCBkYXRlLCBjb3N0LCBjYXBhY2l0eSwgY29tbWVudHMpIHtcblxuICAgIC8vY29uc3QgcHJpY2UgPSByZXEoLi4vLi4vYmFja2VuZC9kYXRhL3ByaWNpbmcpKHtzdGFydDogc3RhcnRhZHIsIGVuZDogZW5kYWRyfSk7XG5cbiAgXHRjb25zdCBwb3N0aW5nID0ge1xuICBcdFx0dXNlciA6IHVzZXIsXG4gIFx0XHRzdGFydGFkciA6IHN0YXJ0YWRyLFxuICBcdFx0ZW5kYWRyIDogZW5kYWRyLFxuICBcdFx0ZGF0ZSA6IGRhdGUsXG4gIFx0XHRjb3N0IDogY29zdCxcbiAgXHRcdGNhcGFjaXR5IDogY2FwYWNpdHksXG4gIFx0XHRjb21tZW50cyA6IGNvbW1lbnRzXG4gIFx0fTtcbiAgXHRyZXR1cm4gdGhpcy5odHRwLnBvc3QoYCR7dGhpcy51cml9L3Bvc3RpbmdzL2FkZC9gLCBwb3N0aW5nKTtcbiAgfVxuXG4gIHVwZGF0ZVBvc3RpbmcoaWQsIHVzZXIsIHN0YXJ0YWRyLCBlbmRhZHIsIGRhdGUsIGNvc3QsIGNhcGFjaXR5LCBjb21tZW50cykge1xuICAgIC8vY29uc3QgcHJpY2UgPSByZXEoLi4vLi4vYmFja2VuZC9kYXRhL3ByaWNpbmcpKHtzdGFydDogc3RhcnRhZHIsIGVuZDogZW5kYWRyfSk7XG4gIFx0Y29uc3QgcG9zdGluZyA9IHtcbiAgXHRcdHVzZXIgOiB1c2VyLFxuICBcdFx0c3RhcnRhZHIgOiBzdGFydGFkcixcbiAgXHRcdGVuZGFkciA6IGVuZGFkcixcbiAgXHRcdGRhdGUgOiBkYXRlLFxuICBcdFx0Y29zdCA6IGNvc3QsXG4gIFx0XHRjYXBhY2l0eSA6IGNhcGFjaXR5LFxuICBcdFx0Y29tbWVudHMgOiBjb21tZW50c1xuICBcdH07XG4gIFx0cmV0dXJuIHRoaXMuaHR0cC5wb3N0KGAke3RoaXMudXJpfS9wb3N0aW5ncy91cGRhdGUvJHtpZH1gLCBwb3N0aW5nKTtcbiAgfVxuXG4gIGRlbGV0ZVBvc3RpbmcoaWQpIHtcbiAgXHRyZXR1cm4gdGhpcy5odHRwLmdldChgJHt0aGlzLnVyaX0vcG9zdGluZ3MvZGVsZXRlLyR7aWR9YCk7XG4gIH1cblxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi8qXFxuQWRkIHlvdXIgTmF0aXZlU2NyaXB0IHNwZWNpZmljIHN0eWxlcyBoZXJlLlxcblRvIGxlYXJuIG1vcmUgYWJvdXQgc3R5bGluZyBpbiBOYXRpdmVTY3JpcHQgc2VlOlxcbmh0dHBzOi8vZG9jcy5uYXRpdmVzY3JpcHQub3JnL2FuZ3VsYXIvdWkvc3R5bGluZ1xcbiovXFxuXFxuTGFiZWwge1xcblxcdHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblxcbi5uYW1lLWxhYmVsIHtcXG5cXHRtYXJnaW4tdG9wOiAxNjtcXG5cXHRtYXJnaW4tbGVmdDogMjQ7XFxuXFx0Y29sb3I6IGJsYWNrO1xcblxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxuXFx0Zm9udC1zaXplOiAxODtcXG59XFxuXFxuLmluZm8tbGFiZWwge1xcblxcdG1hcmdpbi10b3A6IDEyO1xcblxcdG1hcmdpbi1sZWZ0OiAyNDtcXG5cXHRtYXJnaW4tYm90dG9tOiAxNjtcXG5cXHRjb2xvcjogYmxhY2s7XFxufVxcblxcbi5wb3N0IHtcXG5cXHRib3JkZXItYm90dG9tLXdpZHRoOiAxO1xcblxcdGJvcmRlci1jb2xvcjogI2YxZjFmMTtcXG59XFxuXFxuLnBvc3Q6aGlnaGxpZ2h0ZWQge1xcblxcdGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XFxufVxcblxcbi5wb3N0aW5nLW1hcCB7XFxuXFx0bWFyZ2luLWJvdHRvbTogMTY7XFxuXFx0Ym9yZGVyLXJhZGl1czogMTA7XFxuXFx0LyphbGlnbi1jb250ZW50OiBjZW50ZXI7Ki9cXG59XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJwb3N0XFxcIj5cXG4gIDxMYWJlbCB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgaWQ9XFxcInBvc3QtbmFtZVxcXCIgY2xhc3M9XFxcIm5hbWUtbGFiZWxcXFwiPjwvTGFiZWw+XFxuICA8TGFiZWwgdGV4dFdyYXA9XFxcInRydWVcXFwiIGlkPVxcXCJwb3N0LWluZm9cXFwiIGNsYXNzPVxcXCJpbmZvLWxhYmVsXFxcIj48L0xhYmVsPlxcbiAgPEltYWdlIHNyYz1cXFwifi9pbWcvY3ZpbGxlLW1hcC5wbmdcXFwiIHN0cmV0Y2g9XFxcIm5vbmVcXFwiIGhlaWdodD1cXFwiMjIwXFxcIiB3aWR0aD1cXFwiMzAwXFxcIiBjbGFzcz1cXFwicG9zdGluZy1tYXBcXFwiPjwvSW1hZ2U+XFxuPC9TdGFja0xheW91dD5cXG5cXG48IS0tXFxuT3JpZ2luYWwgV2ViIHRlbXBsYXRlOlxcblxcblxcbi0tPlwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBUcmFuc2ZlclNlcnZpY2UgfSBmcm9tICcuLi9kYXRhdHJhbnNmZXIuc2VydmljZSc7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlJztcbmltcG9ydCB7IExhYmVsIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9sYWJlbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1wb3N0aW5nJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Bvc3RpbmcuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9wb3N0aW5nLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBQb3N0aW5nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgaWQ7XG4gIGJ1dHRvblR5cGU7XG5cbiAgaW5mbyA9IHRoaXMudHJhbnNmZXJTZXJ2aWNlLmdldERhdGEoKVswXTtcblxuICBpbmZvVGV4dCA9IFwiTGVhdmluZyBcIiArIHRoaXMuaW5mby5kYXRlICsgXCIgZnJvbSBcIiArIHRoaXMuaW5mby5zdGFydGFkciArIFwiIHRvIFwiICsgdGhpcy5pbmZvLmVuZGFkciArIFwiIGZvciBcIiArIHRoaXMuaW5mby5jb3N0O1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRyYW5zZmVyU2VydmljZTogVHJhbnNmZXJTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHBhZ2U6IFBhZ2UpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICBcdHRoaXMuaWQgPSB0aGlzLmluZm8uaWQ7XG4gIFx0dGhpcy5idXR0b25UeXBlID0gdGhpcy5pbmZvLmJ1dHRvblR5cGU7XG4gICAgY29uc3QgbmFtZV9sYWJlbCA9IDxMYWJlbD50aGlzLnBhZ2UuZ2V0Vmlld0J5SWQoJ3Bvc3QtbmFtZScpO1xuICAgIG5hbWVfbGFiZWwudGV4dCA9IHRoaXMuaW5mby51c2VyO1xuICAgIG5hbWVfbGFiZWwuaWQgPSAncG9zdC1uYW1lJyArIHRoaXMuaW5mby5pbmRleDtcbiAgICBjb25zdCBpbmZvX2xhYmVsID0gPExhYmVsPnRoaXMucGFnZS5nZXRWaWV3QnlJZCgncG9zdC1pbmZvJyk7XG4gICAgaWYodGhpcy5pbmZvLmNhcGFjaXR5ID4gMClcbiAgICAgIGluZm9fbGFiZWwudGV4dCA9IFwiT2ZmZXJpbmcgcmlkZSBsZWF2aW5nIFwiICsgdGhpcy5pbmZvLmRhdGUgKyBcIiBmcm9tIFwiICsgdGhpcy5pbmZvLnN0YXJ0YWRyICsgXCIgdG8gXCIgKyB0aGlzLmluZm8uZW5kYWRyICsgXCIgZm9yIFwiICsgdGhpcy5pbmZvLmNvc3Q7XG4gICAgZWxzZVxuICAgICAgaW5mb19sYWJlbC50ZXh0ID0gXCJSZXF1ZXN0aW5nIHJpZGUgbGVhdmluZyBcIiArIHRoaXMuaW5mby5kYXRlICsgXCIgZnJvbSBcIiArIHRoaXMuaW5mby5zdGFydGFkciArIFwiIHRvIFwiICsgdGhpcy5pbmZvLmVuZGFkcjtcbiAgICBpbmZvX2xhYmVsLmlkID0gJ3Bvc3QtaW5mbycgKyB0aGlzLmluZm8uaW5kZXg7XG4gICAgLy8gY29uc29sZS5sb2coXCJjcmVhdGVkIHBvc3RcIik7XG4gIFx0Ly8gdGhpcy5jcmVhdGUoKTtcbiAgfVxuXG4gIGNyZWF0ZSgpIHtcbiAgXHRjb25zb2xlLmxvZyh0aGlzLmluZm8pO1xuICBcdGNvbnNvbGUubG9nKHRoaXMuaW5mby5pbmRleCk7XG5cdCAgdmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2LmlkID0gXCJmZWVkXCIrIHRoaXMuaW5mby5pbmRleDtcbiAgICBkaXYuY2xhc3NOYW1lID0gXCJwb3N0aW5nLWJsb2NrXCI7XG4gICAgZGl2LnN0eWxlLmRpc3BsYXkgPSBcImFsbFwiO1xuICAgIGRpdi5zdHlsZS5tYXJnaW4gPSBcImF1dG9cIjtcbiAgICBkaXYuc3R5bGUubWFyZ2luVG9wID0gXCIwLjVlbVwiO1xuICAgIGRpdi5zdHlsZS5tYXJnaW5Cb3R0b20gPSBcIjAuNWVtXCI7XG5cbiAgICAvL2Rpdi5zdHlsZS5wYWRkaW5nTGVmdCA9IFwiMjAlXCI7XG4gICAgLy9kaXYuc3R5bGUud2lkdGggPSBcIjQwJVwiO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiaWdmZWVkJykuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICBcbiAgICB2YXIgZGl2dGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZlZWQnKyB0aGlzLmluZm8uaW5kZXgpLmFwcGVuZENoaWxkKGRpdnRleHQpO1xuICAgIGRpdnRleHQuaWQgPSBcInRleHRcIisgdGhpcy5pbmZvLmluZGV4O1xuICAgIFxuICAgIHZhciBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiSU1HXCIpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0JysgdGhpcy5pbmZvLmluZGV4KS5hcHBlbmRDaGlsZChpbWcpO1xuICAgIGltZy5pZCA9IFwicGZwXCIrIHRoaXMuaW5mby5pbmRleDtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBmcFwiKTtcbiAgICBpbWcuY2xhc3NOYW1lID0gXCJwZnBcIjtcbiAgICAoaW1nIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnNyYyA9IFwic3JjL2ltZy9zYW1wbGVfcHJvZmlsZS5qcGdcIjtcbiAgICBcbiAgICB2YXIgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0JysgdGhpcy5pbmZvLmluZGV4KS5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIGhlYWRlci5pZCA9IFwibmFtZVwiKyB0aGlzLmluZm8uaW5kZXg7XG4gICAgaGVhZGVyLmlubmVySFRNTCA9IHRoaXMuaW5mby51c2VyO1xuICAgIGhlYWRlci5jbGFzc05hbWUgPSBcImhlYWRlclwiO1xuICAgIFxuICAgIHZhciBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0JysgdGhpcy5pbmZvLmluZGV4KS5hcHBlbmRDaGlsZChwKTtcbiAgICBwLmlkID0gXCJkZXRhaWxzXCIrIHRoaXMuaW5mby5pbmRleDtcbiAgICBwLmlubmVySFRNTCA9IFwiTGVhdmluZyBcIiArIHRoaXMuaW5mby5kYXRlICsgXCIgZnJvbSBcIiArIHRoaXMuaW5mby5zdGFydGFkciArIFwiIHRvIFwiICsgdGhpcy5pbmZvLmVuZGFkciArIFwiIGZvciBcIiArIHRoaXMuaW5mby5jb3N0O1xuICAgIHAuY2xhc3NOYW1lID0gXCJkZXRhaWxzXCI7XG4gICAgXG4gICAgdmFyIG1hcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJJTUdcIilcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dCcrIHRoaXMuaW5mby5pbmRleCkuYXBwZW5kQ2hpbGQobWFwKTtcbiAgICBtYXAuaWQgPSBcIm1hcFwiKyB0aGlzLmluZm8uaW5kZXg7XG4gICAgbWFwLmNsYXNzTmFtZSA9IFwiZGVzdGluYXRpb25cIjtcbiAgICAobWFwIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnNyYyA9IFwic3JjL2ltZy92aXJnaW5pYV9tYXAuanBnXCI7XG4gICAgXG4gICAgdmFyIGNvbm5lY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0JysgdGhpcy5pbmZvLmluZGV4KS5hcHBlbmRDaGlsZChjb25uZWN0KTtcbiAgICBjb25uZWN0LmlkID0gdGhpcy5idXR0b25UeXBlICsgdGhpcy5pbmZvLmluZGV4O1xuICAgIGNvbm5lY3QuY2xhc3NOYW1lID0gXCJwb3N0aW5nLWJ1dHRvblwiO1xuICAgIGNvbm5lY3QuaW5uZXJIVE1MID0gdGhpcy5pbmZvLmJ1dHRvblR5cGU7XG4gICAgY29ubmVjdC5zdHlsZS5tYXJnaW5SaWdodCA9IFwiMWVtXCI7XG4gICAgY29ubmVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGU6RXZlbnQpID0+IHRoaXMuY2xpY2tlZCh0aGlzLmluZm8uYnV0dG9uVHlwZSkpO1xuICB9XG4gIGNsaWNrZWQoYnV0dG9uVHlwZSl7XG4gIFx0dGhpcy50cmFuc2ZlclNlcnZpY2Uuc2V0RGF0YSh0aGlzLmluZm8pO1xuICBcdGlmKGJ1dHRvblR5cGUgPT0gXCJDb25uZWN0XCIpXG5cdFx0dGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCgnL2Nvbm5lY3QnKTtcblx0ZWxzZVxuXHRcdHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoJy91cGRhdGUnKTtcbiAgfVxuXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLyogQWRkIG1vYmlsZSBzdHlsZXMgZm9yIHRoZSBjb21wb25lbnQgaGVyZS4gICovXFxuLmhlYWRlcntcXG4gICAgbWFyZ2luLXRvcDogNTA7XFxuXFx0bWFyZ2luLWxlZnQ6IDMyO1xcblxcdGNvbG9yOiBibGFjaztcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgZm9udC1zaXplOiAyNDtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuLnN1Ym1pdC1idG57XFxuICAgIGJhY2tncm91bmQtY29sb3I6I2FjMDBlNjtcXG4gICAgd2lkdGg6IDc1JTtcXG4gICAgaGVpZ2h0OiAxNzBweDtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJTZWdvZSBVSVxcXCIsQXJpYWwsc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBtYXJnaW4tdG9wOiAyMDtcXG59XFxuLnRleHQtZmllbGR7XFxuICAgIHdpZHRoOiA4NSU7XFxuICAgIG1hcmdpbi10b3A6IDIwO1xcbiAgICBjb2xvcjojNjk2OTY5XFxufVxcblxcbi5jbG9zZS1idXR0b24tY29udGFpbmVyIHtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0bGVmdDogMDtcXG59XFxuLmNsb3NlIHtcXG5cXHRtYXJnaW46IDEwO1xcblxcdGZvbnQtc2l6ZTogNDA7XFxuXFx0d2lkdGg6IDQ4O1xcbiAgICBoZWlnaHQ6IDQ4O1xcbiAgICBjb2xvcjogYmxhY2tcXG59XFxuXFxuLmVycm9yLW1lc3NhZ2Uge1xcblxcdGNvbG9yOiByZWQ7XFxuXFx0Zm9udC1zaXplOiAxNjtcXG5cXHR2aXNpYmlsaXR5OiBjb2xsYXBzZTtcXG59XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPFN0YWNrbGF5b3V0PlxcbiAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImNsb3NlLWJ1dHRvbi1jb250YWluZXJcXFwiIG9yaWVudGF0aW9uPVxcXCJob3Jpem9udGFsXFxcIj5cXG4gICAgICAgIDxMYWJlbCB0ZXh0PVxcXCImdGltZXM7XFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiICh0YXApPVxcXCJjbG9zZSgnY2FuY2VsJylcXFwiPjwvTGFiZWw+XFxuICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgIDxMYWJlbCBjbGFzcz1cXFwiaGVhZGVyXFxcIiB0ZXh0PVxcXCJQbGVhc2UgcmUtZW50ZXIgeW91ciBwYXNzd29yZFxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiPjwvTGFiZWw+XFxuICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiaW5wdXQtZmllbGRcXFwiPlxcbiAgICAgICAgPFRleHRGaWVsZCAjdmFsIFsobmdNb2RlbCldPVxcXCJwYXNzd29yZFxcXCIgc2VjdXJlPVxcXCJ0cnVlXFxcIiBhdXRvY29ycmVjdD1cXFwiZmFsc2VcXFwiIHJldHVybktleVR5cGU9XFxcImRvbmVcXFwiIGNsYXNzPVxcXCJ0ZXh0LWZpZWxkXFxcIj48L1RleHRGaWVsZD5cXG4gICAgPC9TdGFja0xheW91dD5cXG4gICAgPExhYmVsIHRleHQ9XFxcIlRoZSBwYXNzd29yZCB5b3UgZW50ZXJlZCB3YXMgaW5jb3JyZWN0XFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgY2xhc3M9XFxcImVycm9yLW1lc3NhZ2VcXFwiICNlcnJvck1lc3NhZ2U+PC9MYWJlbD5cXG5cXG4gICAgPEJ1dHRvbiB0ZXh0PVxcXCJTdWJtaXRcXFwiICh0YXApPVxcXCJzdWJtaXQocGFzc3dvcmQpXFxcIiBjbGFzcz1cXFwic3VibWl0LWJ0blxcXCI+PC9CdXR0b24+XFxuXFxuPC9TdGFja2xheW91dD5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q29udGFpbmVyUmVmLCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1vZGFsRGlhbG9nUGFyYW1zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2RpcmVjdGl2ZXMvZGlhbG9nc1wiO1xuaW1wb3J0ICogYXMgZmlyZWJhc2UgZnJvbSAnbmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZSc7XG5pbXBvcnQgeyBMb2dpbmNoZWNrU2VydmljZSB9IGZyb20gJy4uL2xvZ2luY2hlY2suc2VydmljZS50bnMnO1xuaW1wb3J0IHsgVHJhbnNmZXJTZXJ2aWNlIH0gZnJvbSAnLi4vZGF0YXRyYW5zZmVyLnNlcnZpY2UnO1xuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCI7XG5pbXBvcnQgeyBTZXR0aW5nc2Zvcm1Db21wb25lbnQgfSBmcm9tICcuLi9zZXR0aW5nc2Zvcm0vc2V0dGluZ3Nmb3JtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNb2RhbERpYWxvZ1NlcnZpY2UgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZGlyZWN0aXZlcy9kaWFsb2dzXCI7XG5pbXBvcnQgeyBMYWJlbCB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvbGFiZWwnO1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1yZWF1dGgnLFxuICB0ZW1wbGF0ZVVybDogJy4vcmVhdXRoLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcmVhdXRoLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBSZWF1dGhDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFyYW1zOiBNb2RhbERpYWxvZ1BhcmFtcywgcHJpdmF0ZSB0cmFuc2ZlclNlcnZpY2U6IFRyYW5zZmVyU2VydmljZSwgcHJpdmF0ZSBsb2dpbmNoZWNrU2VydmljZTogTG9naW5jaGVja1NlcnZpY2UsIFxuICBcdHByaXZhdGUgdmNSZWY6IFZpZXdDb250YWluZXJSZWYsIHByaXZhdGUgbW9kYWw6IE1vZGFsRGlhbG9nU2VydmljZSkgeyB9XG5cbiAgQFZpZXdDaGlsZChcImVycm9yTWVzc2FnZVwiLCB7IHN0YXRpYzogdHJ1ZSB9KSBlbTogRWxlbWVudFJlZjtcbiAgZmllbGQ7XG4gIHVzZXJJZDtcbiAgdXNlckVtYWlsO1xuICBwYXNzd29yZDtcblxuICBuZ09uSW5pdCgpIHtcbiAgXHR0aGlzLmZpZWxkID0gdGhpcy50cmFuc2ZlclNlcnZpY2UuZ2V0RGF0YSgpO1xuICBcdHRoaXMudXNlcklkID0gdGhpcy5sb2dpbmNoZWNrU2VydmljZS5nZXRVc2VyKCk7XG4gIFx0ZmlyZWJhc2UuZ2V0Q3VycmVudFVzZXIoKS50aGVuKCh1c2VyKSA9PiB7XG4gIFx0XHR0aGlzLnVzZXJFbWFpbCA9IHVzZXIuZW1haWw7XG4gIFx0fSlcbiAgfVxuXG4gIGNsb3NlKHJlcykge1xuICBcdGxldCBlcnJvck1lc3NhZ2UgPSA8TGFiZWw+IHRoaXMuZW0ubmF0aXZlRWxlbWVudDtcblx0ZXJyb3JNZXNzYWdlLnN0eWxlLnZpc2liaWxpdHkgPSAnY29sbGFwc2UnO1xuXHR0aGlzLnBhc3N3b3JkID0gJyc7XG4gICAgdGhpcy5wYXJhbXMuY2xvc2VDYWxsYmFjayhyZXMpO1xuICB9XG5cbiAgc3VibWl0KHBhc3N3b3JkKSB7XG4gIFx0ZmlyZWJhc2UucmVhdXRoZW50aWNhdGUoe1xuXHQgICAgdHlwZTogZmlyZWJhc2UuTG9naW5UeXBlLlBBU1NXT1JELCAvLyBvciBHT09HTEUgLyBGQUNFQk9PS1xuXHQgICAgLy8gdGhpcyBpcyBvbmx5IHJlcXVpcmVkIGluIHR5cGUgPT0gUEFTU1dPUkRcblx0ICAgIHBhc3N3b3JkT3B0aW9uczoge1xuXHQgICAgICBlbWFpbDogdGhpcy51c2VyRW1haWwsXG5cdCAgICAgIHBhc3N3b3JkOiB0aGlzLnBhc3N3b3JkXG5cdCAgICB9XG5cdCAgfSkudGhlbihcblx0ICAgICAgKHJlc3VsdCkgPT4ge1xuXHQgICAgICAgIC8vIHlvdSBjYW4gbm93IHNhZmVseSBkZWxldGUgdGhlIGFjY291bnQgLyBjaGFuZ2UgdGhlIHBhc3N3b3JkLCBldGNcblx0ICAgICAgICBsZXQgb3B0aW9ucyA9IHtcblx0XHQgICAgICAgIGNvbnRleHQ6IHt9LFxuXHRcdCAgICAgICAgZnVsbHNjcmVlbjogdHJ1ZSxcblx0XHQgICAgICAgIHZpZXdDb250YWluZXJSZWY6IHRoaXMudmNSZWZcblx0XHQgICAgICAgIC8vIGFuaW1hdGVkOiB0cnVlLFxuXHRcdCAgICAgICAgLy8gdHJhbnNpdGlvbjogeyBuYW1lOiBcInNsaWRlVG9wXCIgfVxuXHRcdCAgICB9O1xuXHRcdCAgICBsZXQgZXJyb3JNZXNzYWdlID0gPExhYmVsPiB0aGlzLmVtLm5hdGl2ZUVsZW1lbnQ7XG5cdCAgICAgICAgZXJyb3JNZXNzYWdlLnN0eWxlLnZpc2liaWxpdHkgPSAnY29sbGFwc2UnO1xuXHRcdCAgICB0aGlzLnRyYW5zZmVyU2VydmljZS5zZXREYXRhKHRoaXMuZmllbGQpO1xuXHRcdCAgICB0aGlzLnBhc3N3b3JkID0gJyc7XG5cdCAgICBcdHRoaXMubW9kYWwuc2hvd01vZGFsKFNldHRpbmdzZm9ybUNvbXBvbmVudCwgb3B0aW9ucykudGhlbihyZXMgPT4ge1xuXHRcdCAgICBcdGlmKHJlcyA9PSAndXBkYXRlJykge1xuXHRcdCAgICBcdFx0dGhpcy5jbG9zZSgndXBkYXRlJyk7XG5cdFx0ICAgIFx0fVxuXHRcdCAgICB9KTtcblx0ICAgICAgfSxcblx0ICAgICAgKGVycm9yKSA9PiB7XG5cdCAgICAgICAgbGV0IGVycm9yTWVzc2FnZSA9IDxMYWJlbD4gdGhpcy5lbS5uYXRpdmVFbGVtZW50O1xuXHQgICAgICAgIGVycm9yTWVzc2FnZS5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuXHQgICAgICB9XG5cdCAgKTtcbiAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi8qIEFkZCBtb2JpbGUgc3R5bGVzIGZvciB0aGUgY29tcG9uZW50IGhlcmUuICAqL1xcblwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjwhLS0gPGFwcC1uYXZpZ2F0aW9uPjwvYXBwLW5hdmlnYXRpb24+IC0tPlxcbjxTdGFja0xheW91dD5cXG4gIDxMYWJlbCB0ZXh0PVxcXCJzZWFyY2ggd29ya3NcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIj48L0xhYmVsPlxcbiAgPExhYmVsIHRleHQ9XFxcIlRoaXMgaXMgYSBtaWdyYXRlZCBjb21wb25lbnRcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIj48L0xhYmVsPlxcbiAgPExhYmVsIHRleHQ9XFxcIlVwZGF0ZSBpdCB0byBwcm92aWRlIHRoZSBVSSBlbGVtZW50cyByZXF1aXJlZCBpbiB5b3VyIG1vYmlsZSBhcHBcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIj48L0xhYmVsPlxcbjwvU3RhY2tMYXlvdXQ+XCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtc2VhcmNoJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NlYXJjaC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3NlYXJjaC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU2VhcmNoQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gXCIvKlxcbkFkZCB5b3VyIE5hdGl2ZVNjcmlwdCBzcGVjaWZpYyBzdHlsZXMgaGVyZS5cXG5UbyBsZWFybiBtb3JlIGFib3V0IHN0eWxpbmcgaW4gTmF0aXZlU2NyaXB0IHNlZTpcXG5odHRwczovL2RvY3MubmF0aXZlc2NyaXB0Lm9yZy9hbmd1bGFyL3VpL3N0eWxpbmdcXG4qL1xcblxcbiNIZWFkZXIge1xcbiAgICBjb2xvcjpibGFjaztcXG4gICAgZm9udC1zaXplOiAyNDtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJTZWdvZSBVSVxcXCIsQXJpYWwsc2Fucy1zZXJpZjtcXG59XFxuXFxuI2xpc3RWaWV3IHtcXG5cXHRtYXJnaW4tYm90dG9tOiAyMDtcXG59XFxuXFxuLnVwZGF0ZSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBjb2xvcjogI2FjMDBlNjtcXG4gICAgYm9yZGVyLXdpZHRoOiAxO1xcbiAgICBib3JkZXItY29sb3I6ICNhYzAwZTY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZmxvYXQ6IGNlbnRlcjtcXG4gICAgbWFyZ2luOiBhdXRvOyBcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJTZWdvZSBVSVxcXCIsQXJpYWwsc2Fucy1zZXJpZjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTU7XFxuICAgIHdpZHRoOiAyMDA7XFxuICAgIGhlaWdodDogNDA7XFxufVxcbi51cGRhdGU6aGlnaGxpZ2h0ZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjllNmZmO1xcbn1cXG4ucGF5bWVudHMge1xcblxcdGNvbG9yOiBibGFjaztcXG5cXHRtYXJnaW4tdG9wOiAxMjtcXG5cXHRtYXJnaW4tYm90dG9tOiAxMjtcXG5cXHRtYXJnaW4tbGVmdDogMTg7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIGZvbnQtc2l6ZTogMTU7XFxufVxcbi5sb2dvdXQge1xcblxcdGNvbG9yOiAjYWMwMGU2O1xcblxcdG1hcmdpbi10b3A6IDEyO1xcblxcdG1hcmdpbi1ib3R0b206IDEyO1xcblxcdG1hcmdpbi1sZWZ0OiAxODtcXG5cXHRmb250LXdlaWdodDogNTAwO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBmb250LXNpemU6IDE1O1xcbn1cXG5cXG4uYnRuLWxpc3QtdmlldyB7XFxuXFx0bWFyZ2luLXRvcDogMzY7XFxuXFx0aGVpZ2h0OiAxMDA7XFxufVxcblxcbi5pdGVtLWxpc3QtdmlldyB7XFxuXFx0aGVpZ2h0OiAzMDA7XFxufVxcblxcbi5wcm9maWxlLXBpY3R1cmUge1xcblxcdGhlaWdodDogMTAwO1xcblxcdHdpZHRoOiAxMDA7XFxuXFx0bWFyZ2luLXRvcDogMTA7XFxuXFx0bWFyZ2luLWJvdHRvbTogODtcXG5cXHQvKmJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7Ki9cXG59XFxuXFxuLmltZy1yb3VuZGVkIHtcXG5cXHRib3JkZXItcmFkaXVzOiAxMDAlO1xcbn1cXG5cXG4uaGVhZGVyLWxhYmVsIHtcXG5cXHRtYXJnaW4tYm90dG9tOiA1O1xcblxcdGZvbnQtc2l6ZTogMTU7XFxuXFx0Y29sb3I6ICM0Mjg1ZjQ7XFxufVxcblxcbi5ib2xkIHtcXG5cXHRmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4uYWN0aXZpdHktaW5kaWNhdG9yIHtcXG4gIGNvbG9yOiAjYWMwMGU2O1xcbiAgbWFyZ2luOiAyNSU7XFxufVxcblxcbi52YWx1ZS1sYWJlbCB7XFxuXFx0bWFyZ2luLWxlZnQ6IDE4O1xcblxcdG1hcmdpbi1ib3R0b206IDEwO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGZvbnQtc2l6ZTogMTg7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcbi50aXRsZS1sYWJlbCB7XFxuXFx0bWFyZ2luLXRvcDogMTY7XFxuXFx0bWFyZ2luLWxlZnQ6IDE4O1xcblxcdGNvbG9yOiAjNjk2OTY5O1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG4uc3RhY2stbGF5b3V0e1xcbiAgICBoZWlnaHQ6MTAwJVxcbn1cXG4uYWN0aXZpdHktaW5kaWNhdG9ye1xcbiAgICBoZWlnaHQ6IDUwJTtcXG59XFxuTGlzdFZpZXcge1xcbiAgICBzZXBhcmF0b3ItY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8IS0tIDxhcHAtbmF2aWdhdGlvbj48L2FwcC1uYXZpZ2F0aW9uPiAtLT5cXG48U3RhY2tsYXlvdXQgaGVpZ2h0PVxcXCIxMDAlXFxcIj5cXG4gICAgPFN0YWNrTGF5b3V0ICNzZXR0aW5nc0NvbnRhaW5lcj5cXG4gICAgICA8IS0tIDxMYWJlbCBpZD0gXFxcIkhlYWRlclxcXCIgdGV4dD1cXFwiQWNjb3VudCBTZXR0aW5nc1xcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiPjwvTGFiZWw+IC0tPlxcbiAgICAgIDxJbWFnZSBzcmM9XFxcInt7IHByb2ZpbGUgfX1cXFwiIHN0cmV0Y2g9XFxcImFzcGVjdEZpdFxcXCIgY2xhc3M9XFxcImltZy1yb3VuZGVkIHByb2ZpbGUtcGljdHVyZVxcXCIgKHRhcCk9XFxcInVwbG9hZFBmcCgpXFxcIj48L0ltYWdlPlxcbiAgICAgIDxMYWJlbCB0ZXh0PVxcXCJDaGFuZ2UgUGhvdG9cXFwiIGNsYXNzPVxcXCJoZWFkZXItbGFiZWwgYm9sZFxcXCIgKHRhcCk9XFxcInVwbG9hZFBmcCgpXFxcIj48L0xhYmVsPlxcblxcbiAgICAgIDxMaXN0VmlldyBbaXRlbXNdPVxcXCJmaWVsZHNcXFwiICNsaXN0VmlldyBpZD1cXFwibGlzdFZpZXdcXFwiIChpdGVtVGFwKT1cXFwic2hvd01vZGFsKCRldmVudClcXFwiIGNsYXNzPVxcXCJpdGVtLWxpc3Qtdmlld1xcXCI+XFxuICAgICAgICA8bmctdGVtcGxhdGUgbGV0LWl0ZW09XFxcIml0ZW1cXFwiIGxldC1pPVxcXCJpbmRleFxcXCIgbGV0LW9kZD1cXFwib2RkXFxcIiBsZXQtZXZlbj1cXFwiZXZlblxcXCI+XFxuICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwic3RhY2stbGF5b3V0XFxcIj5cXG4gICAgICAgICAgICA8TGFiZWwgdGV4dFdyYXA9XFxcInRydWVcXFwiIGNsYXNzPVxcXCJ0aXRsZS1sYWJlbFxcXCIgW3RleHRdPVxcXCJpdGVtLmxhYmVsXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgIDxMYWJlbCB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgY2xhc3M9XFxcInZhbHVlLWxhYmVsXFxcIiBbdGV4dF09XFxcIml0ZW0udmFsdWVcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICA8L25nLXRlbXBsYXRlPlxcbiAgICAgIDwvTGlzdFZpZXc+XFxuICAgICAgPCEtLSA8UmFkRGF0YUZvcm0gdGtFeGFtcGxlVGl0bGUgdGtUb2dnbGVOYXZCdXR0b24gW3NvdXJjZV09XFxcInBlcnNvblxcXCI+PC9SYWREYXRhRm9ybT4gICAtLT5cXG4gICAgICA8IS0tIDxCdXR0b24gY2xhc3M9XFxcIlVwZGF0ZVxcXCIgIHRleHQ9XFxcIlVwZGF0ZSBTZXR0aW5nc1xcXCI+PC9CdXR0b24+IC0tPlxcblxcbiAgICAgIDxMaXN0VmlldyBbaXRlbXNdPVxcXCJidXR0b25zXFxcIiAjbGlzdFZpZXdTZWNvbmQgKGl0ZW1UYXApPVxcXCJyb3V0ZSgkZXZlbnQpXFxcIiAoc2V0dXBJdGVtVmlldyk9XFxcInNldHVwSXRlbVZpZXcoJGV2ZW50KVxcXCIgY2xhc3M9XFxcImJ0bi1saXN0LXZpZXdcXFwiPlxcbiAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1pdGVtPVxcXCJpdGVtXFxcIiBsZXQtaT1cXFwiaW5kZXhcXFwiIGxldC1vZGQ9XFxcIm9kZFxcXCIgbGV0LWV2ZW49XFxcImV2ZW5cXFwiIGxldC1wYXltZW50cz1cXFwicGF5bWVudHNcXFwiIGxldC1sb2dvdXQ9XFxcImxvZ291dFxcXCI+XFxuICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwic3RhY2stbGF5b3V0XFxcIj5cXG4gICAgICAgICAgICA8TGFiZWwgdGV4dFdyYXA9XFxcInRydWVcXFwiIFt0ZXh0XT1cXFwiaXRlbVxcXCIgW2NsYXNzLnBheW1lbnRzXT1cXFwicGF5bWVudHNcXFwiIFtjbGFzcy5sb2dvdXRdPVxcXCJsb2dvdXRcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICA8L25nLXRlbXBsYXRlPlxcbiAgICAgIDwvTGlzdFZpZXc+XFxuPCEtLSAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcInBheW1lbnRzLWNvbnRhaW5lclxcXCIgKHRhcCk9XFxcInRvUGF5bWVudHMoKVxcXCI+XFxuICAgICAgICA8TGFiZWwgY2xhc3M9XFxcInBheW1lbnRzXFxcIiB0ZXh0PVxcXCJQYXltZW50c1xcXCI+PC9MYWJlbD5cXG4gICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwibG9nb3V0LWNvbnRhaW5lclxcXCIgKHRhcCk9XFxcImxvZ091dCgpXFxcIj5cXG4gICAgICAgIDxMYWJlbCBjbGFzcz1cXFwibG9nb3V0XFxcIiB0ZXh0PVxcXCJMb2cgb3V0XFxcIj48L0xhYmVsPlxcbiAgICAgIDwvU3RhY2tMYXlvdXQ+IC0tPlxcbiAgICA8L1N0YWNrTGF5b3V0PlxcblxcbjxBY3Rpdml0eUluZGljYXRvciAjYWN0aXZpdHlJbmRpY2F0b3IgYnVzeT1cXFwidHJ1ZVxcXCIgd2lkdGg9XFxcIjQwXFxcIiAgY2xhc3M9XFxcImFjdGl2aXR5LWluZGljYXRvclxcXCI+XFxuICA8L0FjdGl2aXR5SW5kaWNhdG9yPlxcbjwvU3RhY2tsYXlvdXQ+XCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgRWxlbWVudFJlZiwgVmlld0NoaWxkLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBpbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2VcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgTG9naW5jaGVja1NlcnZpY2UgfSBmcm9tICcuLi9sb2dpbmNoZWNrLnNlcnZpY2UudG5zJztcbmltcG9ydCAqIGFzIGZpcmViYXNlIGZyb20gJ25hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2UnO1xuaW1wb3J0IHsgbWVzc2FnaW5nIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2UvbWVzc2FnaW5nXCI7XG5pbXBvcnQgeyBsb2dvdXQgYXMgZmJMb2dvdXQgfSBmcm9tICduYXRpdmVzY3JpcHQtZmFjZWJvb2snO1xuaW1wb3J0ICogYXMgaW1hZ2VwaWNrZXIgZnJvbSBcIm5hdGl2ZXNjcmlwdC1pbWFnZXBpY2tlclwiO1xuaW1wb3J0ICogYXMgZnMgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZmlsZS1zeXN0ZW1cIjtcbmltcG9ydCB7IGlzQW5kcm9pZCwgaXNJT1MsIGRldmljZSwgc2NyZWVuIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm1cIjtcbmltcG9ydCAqIGFzIGJnaHR0cCBmcm9tICduYXRpdmVzY3JpcHQtYmFja2dyb3VuZC1odHRwJztcbmltcG9ydCB7IEltYWdlQ3JvcHBlciB9IGZyb20gJ25hdGl2ZXNjcmlwdC1pbWFnZWNyb3BwZXInO1xuaW1wb3J0ICogYXMgaW1hZ2VTb3VyY2UgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvaW1hZ2Utc291cmNlXCI7XG5pbXBvcnQgeyBBY3Rpdml0eUluZGljYXRvciB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvYWN0aXZpdHktaW5kaWNhdG9yJztcbmltcG9ydCB7IFN0YWNrTGF5b3V0IH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9sYXlvdXRzL3N0YWNrLWxheW91dCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlQXJyYXkgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS1hcnJheSc7XG5pbXBvcnQgeyBUcmFuc2ZlclNlcnZpY2UgfSBmcm9tICcuLi9kYXRhdHJhbnNmZXIuc2VydmljZSc7XG5pbXBvcnQgeyBwb3N0IH0gZnJvbSAnc2VsZW5pdW0td2ViZHJpdmVyL2h0dHAnO1xuaW1wb3J0IHsgTW9kYWxEaWFsb2dQYXJhbXMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZGlyZWN0aXZlcy9kaWFsb2dzXCI7XG5pbXBvcnQgeyBNb2RhbERpYWxvZ1NlcnZpY2UgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZGlyZWN0aXZlcy9kaWFsb2dzXCI7XG5pbXBvcnQgeyBTZXR0aW5nc2Zvcm1Db21wb25lbnQgfSBmcm9tICcuLi9zZXR0aW5nc2Zvcm0vc2V0dGluZ3Nmb3JtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSZWF1dGhDb21wb25lbnQgfSBmcm9tICcuLi9yZWF1dGgvcmVhdXRoLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTZXR1cEl0ZW1WaWV3QXJncyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9kaXJlY3RpdmVzXCI7XG5cblxuY2xhc3MgTGFiZWwge1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBsYWJlbDogU3RyaW5nLCBwdWJsaWMgdmFsdWU6IHN0cmluZywgcHVibGljIGZpcnN0TmFtZTogc3RyaW5nLCBwdWJsaWMgbGFzdE5hbWU6IHN0cmluZykgeyB9XG59XG5cbkBDb21wb25lbnQoe1xuXHRtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiBcImFwcC1zZXR0aW5nc1wiLFxuICB0ZW1wbGF0ZVVybDogJy4vc2V0dGluZ3MuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zZXR0aW5ncy5jb21wb25lbnQuY3NzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBTZXR0aW5nc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMsIHByaXZhdGUgcGFnZTogUGFnZSwgcHJpdmF0ZSBsb2dpbmNoZWNrU2VydmljZTogTG9naW5jaGVja1NlcnZpY2UsIHByaXZhdGUgdHJhbnNmZXJTZXJ2aWNlOiBUcmFuc2ZlclNlcnZpY2UsXG4gIFx0cHJpdmF0ZSB2Y1JlZjogVmlld0NvbnRhaW5lclJlZiwgcHJpdmF0ZSBtb2RhbDogTW9kYWxEaWFsb2dTZXJ2aWNlKSB7IH1cblxuICBAVmlld0NoaWxkKFwiYWN0aXZpdHlJbmRpY2F0b3JcIiwgeyBzdGF0aWM6IHRydWUgfSkgYWk6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoXCJzZXR0aW5nc0NvbnRhaW5lclwiLCB7IHN0YXRpYzogdHJ1ZSB9KSBzYzogRWxlbWVudFJlZjtcblxuICBwcm9maWxlID0gXCJ+L2ltZy9zYW1wbGVfcHJvZmlsZS5wbmdcIjtcbiAgdXNlcklkO1xuICBmaWVsZHM7XG4gIGltYWdlQ3JvcHBlcjogSW1hZ2VDcm9wcGVyO1xuICBpbWFnZVNvdXJjZTogaW1hZ2VTb3VyY2UuSW1hZ2VTb3VyY2U7XG4gIGJ1dHRvbnM7XG4gIHBheW1lbnRMaXN0O1xuICBsb2dvdXRMaXN0O1xuICB1c2VyO1xuICB0b2tlbjtcblxuICBuZ09uSW5pdCgpIHtcblx0dGhpcy5pbWFnZUNyb3BwZXIgPSBuZXcgSW1hZ2VDcm9wcGVyKCk7XG5cdHRoaXMubG9hZFZpZXdzKCk7XG5cblx0XHRsZXQgYWN0aXZpdHlJbmRpY2F0b3IgPSA8QWN0aXZpdHlJbmRpY2F0b3I+IHRoaXMuYWkubmF0aXZlRWxlbWVudDtcblx0ICAgIGFjdGl2aXR5SW5kaWNhdG9yLnN0eWxlLnZpc2liaWxpdHkgPSAnY29sbGFwc2UnXG5cdH1cblxuXHRsb2FkVmlld3MoKXtcblx0XHR0aGlzLnBheW1lbnRMaXN0ID0gbmV3IE9ic2VydmFibGVBcnJheTxTdHJpbmc+KCk7XG5cdFx0dGhpcy5wYXltZW50TGlzdC5wdXNoKCdQYXltZW50IG1ldGhvZHMnKTtcblx0XHR0aGlzLmxvZ291dExpc3QgPSBuZXcgT2JzZXJ2YWJsZUFycmF5PFN0cmluZz4oKTtcblx0XHR0aGlzLmxvZ291dExpc3QucHVzaCgnTG9nIG91dCcpO1xuXHRcdHRoaXMuYnV0dG9ucyA9IG5ldyBPYnNlcnZhYmxlQXJyYXk8U3RyaW5nPigpO1xuXHRcdHRoaXMuYnV0dG9ucy5wdXNoKCdQYXltZW50IG1ldGhvZHMnKTtcblx0XHR0aGlzLmJ1dHRvbnMucHVzaCgnTG9nIG91dCcpO1xuXG5cdFx0dGhpcy51c2VySWQgPSB0aGlzLmxvZ2luY2hlY2tTZXJ2aWNlLmdldFVzZXIoKTtcblx0XHRjb25zdCB1c2VyRG9jdW1lbnQgPSBmaXJlYmFzZS5maXJlc3RvcmUuY29sbGVjdGlvbigndXNlcnMnKS5kb2ModGhpcy51c2VySWQpO1xuXHRcdHRoaXMuZmllbGRzID0gbmV3IE9ic2VydmFibGVBcnJheTxMYWJlbD4oKTtcblx0XHR0aGlzLnVwZGF0ZUxpc3RWaWV3KCk7XG5cdFx0ZmlyZWJhc2UuZ2V0Q3VycmVudFVzZXIoKS50aGVuKCh1c2VyKSA9PiB7XG5cdFx0XHR0aGlzLnVzZXIgPSB1c2VyO1xuXHRcdFx0aWYodXNlci5waG90b1VSTCAhPSBudWxsKSB7XG5cdFx0XHRcdHRoaXMucHJvZmlsZSA9IHVzZXIucGhvdG9VUkw7XG5cdFx0XHRcdGlmKHVzZXIucGhvdG9VUkwuc3Vic3RyaW5nKDAsIDI3KSA9PSAnaHR0cHM6Ly9ncmFwaC5mYWNlYm9vay5jb20vJylcblx0XHRcdFx0XHR0aGlzLnByb2ZpbGUgKz0gJz9oZWlnaHQ9MzAwJztcblx0XHRcdH1cblx0XHR9KVxuXHR9XG5cblx0c2V0dXBJdGVtVmlldyhhcmdzOiBTZXR1cEl0ZW1WaWV3QXJncykge1xuXHRcdGFyZ3Mudmlldy5jb250ZXh0LnBheW1lbnRzID0gKGFyZ3MuaW5kZXggPT0gMCk7XG5cdFx0YXJncy52aWV3LmNvbnRleHQubG9nb3V0ID0gKGFyZ3MuaW5kZXggPT0gMSk7XG5cdFx0YXJncy52aWV3LmNvbnRleHQuZXZlbiA9IChhcmdzLmluZGV4ICUgMiA9PT0gMCk7XG5cdFx0YXJncy52aWV3LmNvbnRleHQub2RkID0gKGFyZ3MuaW5kZXggJSAyID09PSAxKTtcblx0fVxuXG5cdHVwZGF0ZUxpc3RWaWV3KCl7XG5cdFx0dGhpcy5maWVsZHMuc3BsaWNlKDApO1xuXHRcdGNvbnN0IHVzZXJEb2N1bWVudCA9IGZpcmViYXNlLmZpcmVzdG9yZS5jb2xsZWN0aW9uKCd1c2VycycpLmRvYyh0aGlzLnVzZXJJZCk7XG5cdFx0dXNlckRvY3VtZW50LmdldCgpLnRoZW4oZG9jID0+IHtcblx0XHRcdGxldCB2YWxzID0gZG9jLmRhdGEoKVxuXHRcdFx0Ly8gY29uc29sZS5sb2coXCJmaWVsZHNcIiwgdmFscylcblx0XHRcdHRoaXMuZmllbGRzLnB1c2gobmV3IExhYmVsKFwiTmFtZVwiLCB2YWxzLmZpcnN0X25hbWUgKyBcIiBcIiArIHZhbHMubGFzdF9uYW1lLCB2YWxzLmZpcnN0X25hbWUsIHZhbHMubGFzdF9uYW1lKSk7XG5cdFx0XHR0aGlzLmZpZWxkcy5wdXNoKG5ldyBMYWJlbChcIkVtYWlsXCIsIHZhbHMuZW1haWwsIHZhbHMuZmlyc3RfbmFtZSwgdmFscy5sYXN0X25hbWUpKTtcblx0XHRcdGlmKHZhbHMucGhvbmVfbnVtYmVyID09IFwiXCIgfHwgdmFscy5waG9uZV9udW1iZXIgPT0gbnVsbCl7XG5cdFx0XHRcdHRoaXMuZmllbGRzLnB1c2gobmV3IExhYmVsKFwiUGhvbmUgTnVtYmVyXCIsIFwiTm9uZVwiLCB2YWxzLmZpcnN0X25hbWUsIHZhbHMubGFzdF9uYW1lKSk7XG5cdFx0XHR9XG5cdFx0XHRlbHNle1xuXHRcdFx0XHR0aGlzLmZpZWxkcy5wdXNoKG5ldyBMYWJlbChcIlBob25lIE51bWJlclwiLCB2YWxzLnBob25lX251bWJlciwgdmFscy5maXJzdF9uYW1lLCB2YWxzLmxhc3RfbmFtZSkpO1xuXHRcdFx0fVxuXHRcdFx0aWYodGhpcy51c2VyLnByb3ZpZGVyc1sxXS5pZCA9PSAncGFzc3dvcmQnKSB7XG5cdFx0XHRcdHRoaXMuZmllbGRzLnB1c2gobmV3IExhYmVsKFwiUGFzc3dvcmRcIiwgXCIqKioqKioqKlwiLCB2YWxzLmZpcnN0X25hbWUsIHZhbHMubGFzdF9uYW1lKSlcblx0XHRcdH1cblx0XHR9KVxuXHR9XG5cdHRvUGF5bWVudHMoKXtcblx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ3BheW1lbnRzJ10pO1xuXHR9XG5cblx0c2hvd01vZGFsKGFyZ3MpIHtcblx0XHRsZXQgbGFiZWwgPSB0aGlzLmZpZWxkcy5fYXJyYXlbYXJncy5pbmRleF1cblx0XHR0aGlzLnRyYW5zZmVyU2VydmljZS5zZXREYXRhKGxhYmVsKTtcblx0XHRsZXQgb3B0aW9ucyA9IHtcblx0ICAgICAgICBjb250ZXh0OiB7fSxcblx0ICAgICAgICBmdWxsc2NyZWVuOiB0cnVlLFxuXHQgICAgICAgIHZpZXdDb250YWluZXJSZWY6IHRoaXMudmNSZWZcblx0ICAgICAgICAvLyBhbmltYXRlZDogdHJ1ZSxcblx0ICAgICAgICAvLyB0cmFuc2l0aW9uOiB7IG5hbWU6IFwic2xpZGVUb3BcIiB9XG5cdCAgICB9O1xuXHQgICAgaWYoYXJncy5pbmRleCA9PSAzKSB7XG5cdCAgICBcdHRoaXMubW9kYWwuc2hvd01vZGFsKFJlYXV0aENvbXBvbmVudCwgb3B0aW9ucykudGhlbihyZXMgPT4ge1xuXHRcdCAgICBcdGlmKHJlcyA9PSAndXBkYXRlJykge1xuXHRcdCAgICBcdFx0dGhpcy51cGRhdGVMaXN0VmlldygpO1xuXHRcdCAgICBcdH1cblx0XHQgICAgfSk7XG5cdCAgICB9XG5cdCAgICBlbHNlIHtcblx0XHQgICAgdGhpcy5tb2RhbC5zaG93TW9kYWwoU2V0dGluZ3Nmb3JtQ29tcG9uZW50LCBvcHRpb25zKS50aGVuKHJlcyA9PiB7XG5cdFx0ICAgIFx0aWYocmVzID09ICd1cGRhdGUnKSB7XG5cdFx0ICAgIFx0XHR0aGlzLnVwZGF0ZUxpc3RWaWV3KCk7XG5cdFx0ICAgIFx0fVxuXHRcdCAgICB9KTtcblx0XHR9XG5cdH1cblxuXHRyb3V0ZShhcmdzKSB7XG5cdFx0aWYoYXJncy5pbmRleCA9PSAwKSB7XG5cdFx0XHR0aGlzLnRvUGF5bWVudHMoKTtcblx0XHR9XG5cdFx0ZWxzZSBpZihhcmdzLmluZGV4ID09IDEpIHtcblx0XHRcdHRoaXMubG9nT3V0KCk7XG5cdFx0fVxuXHR9XG5cblx0b25JdGVtVGFwKGFyZ3MpIHtcblx0XHRsZXQgbGFiZWwgPSB0aGlzLmZpZWxkcy5fYXJyYXlbYXJncy5pbmRleF1cblx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ3NldHRpbmdzZm9ybSddKTtcblx0XHR0aGlzLnRyYW5zZmVyU2VydmljZS5zZXREYXRhKGxhYmVsKTtcblx0ICB9XG5cblx0YXN5bmMgbG9nT3V0KCkge1xuXHRcdHZhciBhY3Rpdml0eUluZGljYXRvciA9IDxBY3Rpdml0eUluZGljYXRvcj4gdGhpcy5haS5uYXRpdmVFbGVtZW50O1xuXHRcdGFjdGl2aXR5SW5kaWNhdG9yLmJ1c3kgPSB0cnVlO1xuXHRcdGFjdGl2aXR5SW5kaWNhdG9yLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG5cdFx0dmFyIHNldHRpbmdzQ29udGFpbmVyID0gPFN0YWNrTGF5b3V0PiB0aGlzLnNjLm5hdGl2ZUVsZW1lbnQ7XG5cdFx0c2V0dGluZ3NDb250YWluZXIuc3R5bGUudmlzaWJpbGl0eSA9ICdjb2xsYXBzZSc7XG5cblx0XHRjb25zdCB0b2tlblByb21pc2UgPSBhd2FpdCBtZXNzYWdpbmcuZ2V0Q3VycmVudFB1c2hUb2tlbigpLnRoZW4odG9rZW4gPT4ge1xuXHRcdFx0dGhpcy50b2tlbiA9IHRva2VuXG5cdFx0XHRyZXR1cm4gdG9rZW47XG5cdFx0fSk7XG5cdFx0bGV0IHVzZXJEb2MgPSBmaXJlYmFzZS5maXJlc3RvcmUuY29sbGVjdGlvbigndXNlcnMnKS5kb2ModGhpcy51c2VySWQpO1xuXHRcdFxuXHRcdHVzZXJEb2MuZ2V0KCkudGhlbihhc3luYyAoZG9jKSA9PiB7XG5cdFx0XHRsZXQgaW5kZXggPSBkb2MuZGF0YSgpLnRva2Vucy5pbmRleE9mKHRoaXMudG9rZW4pO1xuXHRcdFx0aWYoaW5kZXggPiAtMSkge1xuXHRcdFx0XHRjb25zdCBuZXdUb2tlbnMgPSBkb2MuZGF0YSgpLnRva2Vucztcblx0XHRcdFx0bmV3VG9rZW5zLnNwbGljZShpbmRleCwgMSk7XG5cdFx0XHRcdGNvbnNvbGUubG9nKG5ld1Rva2Vucylcblx0XHRcdFx0dXNlckRvYy51cGRhdGUoe3Rva2VuczogbmV3VG9rZW5zfSk7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBjaGF0UHJvbWlzZSA9IGF3YWl0IHRoaXMudXBkYXRlQ2hhdFRva2Vucyhkb2MuZGF0YSgpLmNoYXRzKTtcblx0XHRcdGZpcmViYXNlLmxvZ291dCgpO1xuXHRcdFx0ZmJMb2dvdXQoKCkgPT4ge1xuXG5cdFx0XHR9KTtcblx0XHRcdHRoaXMubG9naW5jaGVja1NlcnZpY2UuY2xlYXJJbmZvKCk7XG5cdFx0XHRhY3Rpdml0eUluZGljYXRvci5idXN5ID0gZmFsc2U7XG5cdFx0XHRhY3Rpdml0eUluZGljYXRvci5zdHlsZS52aXNpYmlsaXR5ID0gJ2NvbGxhcHNlJztcblx0XHRcdHNldHRpbmdzQ29udGFpbmVyLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG5cdFx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ3dlbGNvbWUnXSwge2NsZWFySGlzdG9yeTogdHJ1ZX0pO1xuXHRcdH0pXG5cblx0fVxuXG5cdGFzeW5jIHVwZGF0ZUNoYXRUb2tlbnMoY2hhdHMpIHtcblx0XHRsZXQgY2hhdENvbGxlY3Rpb24gPSBmaXJlYmFzZS5maXJlc3RvcmUuY29sbGVjdGlvbignY2hhdHMnKTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgY2hhdHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGNvbnN0IGNoYXRQcm9taXNlID0gYXdhaXQgY2hhdENvbGxlY3Rpb24uZG9jKGNoYXRzW2ldKS5nZXQoKS50aGVuKGFzeW5jIChkb2MpID0+IHtcblx0XHRcdFx0bGV0IGluZGV4ID0gZG9jLmRhdGEoKS50b2tlbnMuaW5kZXhPZih0aGlzLnRva2VuKTtcblx0XHRcdFx0aWYoaW5kZXggPiAtMSkge1xuXHRcdFx0XHRcdGNvbnN0IG5ld1Rva2VucyA9IGRvYy5kYXRhKCkudG9rZW5zO1xuXHRcdFx0XHRcdG5ld1Rva2Vucy5zcGxpY2UoaW5kZXgsIDEpO1xuXHRcdFx0XHRcdGNvbnN0IHVwZGF0ZVByb21pc2UgPSBhd2FpdCBjaGF0Q29sbGVjdGlvbi5kb2MoY2hhdHNbaV0pLnVwZGF0ZSh7dG9rZW5zOiBuZXdUb2tlbnN9KTtcblx0XHRcdFx0fVxuXHRcdFx0fSlcblx0XHR9XG5cdH1cblxuXHR1cGxvYWRQZnAoKSB7XG5cdFx0dmFyIGltYWdlQ3JvcHBlciA9IG5ldyBJbWFnZUNyb3BwZXIoKTtcblx0XHRsZXQgY29udGV4dCA9IGltYWdlcGlja2VyLmNyZWF0ZSh7XG5cdFx0ICAgIG1vZGU6IFwic2luZ2xlXCIgLy8gdXNlIFwibXVsdGlwbGVcIiBmb3IgbXVsdGlwbGUgc2VsZWN0aW9uXG5cdFx0fSk7XG5cdFx0Y29udGV4dFxuXHQgICAgLmF1dGhvcml6ZSgpXG5cdCAgICAudGhlbihmdW5jdGlvbigpIHtcblx0ICAgICAgICByZXR1cm4gY29udGV4dC5wcmVzZW50KCk7XG5cdCAgICB9KVxuXHQgICAgLnRoZW4oKHNlbGVjdGlvbjogYW55KSA9PiB7XG5cdCAgICBcdHNlbGVjdGlvbi5mb3JFYWNoKChzZWxlY3RlZCkgPT4ge1xuICAgICAgICAgICAgXHRsZXQgaW1nU291cmNlID0gbmV3IGltYWdlU291cmNlLkltYWdlU291cmNlKCk7XG4gICAgICAgICAgICAgICAgaW1nU291cmNlLmZyb21Bc3NldChzZWxlY3RlZCkudGhlbigoc291cmNlKSA9PiB7XG4gICAgICAgICAgICAgICAgXHR0aGlzLmltYWdlQ3JvcHBlclxuICAgICAgICAgICAgICAgICAgICAuc2hvdyhzb3VyY2UsIHsgd2lkdGg6IDMwMCwgaGVpZ2h0OiAzMDAgfSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oYXJncyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmRpcihhcmdzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhcmdzLmltYWdlICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5jcm9wcGVkSW1hZ2UuaW1hZ2VTb3VyY2UgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBhcmdzLmltYWdlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmb2xkZXIgPSBmcy5rbm93bkZvbGRlcnMudGVtcCgpO1xuXHRcdFx0XHQgICAgICAgICAgICB2YXIgcGF0aCA9IGZzLnBhdGguam9pbihmb2xkZXIucGF0aCwgXCJwcm9maWxlX3BpY3R1cmUucG5nXCIpO1xuXHRcdFx0XHQgICAgICAgICAgICB2YXIgc2F2ZWQgPSBhcmdzLmltYWdlLnNhdmVUb0ZpbGUocGF0aCwncG5nJyk7XG5cblx0XHRcdFx0ICAgICAgICAgICAgdmFyIGFjdGl2aXR5SW5kaWNhdG9yID0gPEFjdGl2aXR5SW5kaWNhdG9yPiB0aGlzLmFpLm5hdGl2ZUVsZW1lbnQ7XG5cdFx0XHRcdFx0XHRcdGFjdGl2aXR5SW5kaWNhdG9yLmJ1c3kgPSB0cnVlO1xuXHRcdFx0XHRcdFx0XHRhY3Rpdml0eUluZGljYXRvci5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgICAgXHRcdFx0XHRcdFx0dmFyIHNldHRpbmdzQ29udGFpbmVyID0gPFN0YWNrTGF5b3V0PiB0aGlzLnNjLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICBcdFx0XHRcdFx0XHRzZXR0aW5nc0NvbnRhaW5lci5zdHlsZS52aXNpYmlsaXR5ID0gJ2NvbGxhcHNlJztcblxuXHRcdFx0XHQgICAgICAgICAgICBmaXJlYmFzZS5zdG9yYWdlLnVwbG9hZEZpbGUoe1xuXHRcdFx0XHRcdFx0XHQgICAgLy8gdGhlIGZ1bGwgcGF0aCBvZiB0aGUgZmlsZSBpbiB5b3VyIEZpcmViYXNlIHN0b3JhZ2UgKGZvbGRlcnMgd2lsbCBiZSBjcmVhdGVkKVxuXHRcdFx0XHRcdFx0XHQgICAgcmVtb3RlRnVsbFBhdGg6ICd1c2Vycy8nICsgdGhpcy51c2VySWQgKyAnL3VwbG9hZHMvcHJvZmlsZV9waWN0dXJlLmpwZycsXG5cdFx0XHRcdFx0XHRcdCAgICAvLyBvcHRpb24gMTogYSBmaWxlLXN5c3RlbSBtb2R1bGUgRmlsZSBvYmplY3Rcblx0XHRcdFx0XHRcdFx0ICAgIGxvY2FsRmlsZTogZnMuRmlsZS5mcm9tUGF0aChwYXRoKSxcblx0XHRcdFx0XHRcdFx0ICAgIC8vIG9wdGlvbiAyOiBhIGZ1bGwgZmlsZSBwYXRoIChpZ25vcmVkIGlmICdsb2NhbEZpbGUnIGlzIHNldClcblx0XHRcdFx0XHRcdFx0ICAgIGxvY2FsRnVsbFBhdGg6IHBhdGgsXG5cdFx0XHRcdFx0XHRcdCAgICAvLyBnZXQgbm90aWZpZWQgb2YgZmlsZSB1cGxvYWQgcHJvZ3Jlc3Ncblx0XHRcdFx0XHRcdFx0ICAgIG9uUHJvZ3Jlc3M6IChzdGF0dXMpID0+IHtcblx0XHRcdFx0XHRcdFx0ICAgICAgY29uc29sZS5sb2coXCJVcGxvYWRlZCBmcmFjdGlvbjogXCIgKyBzdGF0dXMuZnJhY3Rpb25Db21wbGV0ZWQpO1xuXHRcdFx0XHRcdFx0XHQgICAgICBjb25zb2xlLmxvZyhcIlBlcmNlbnRhZ2UgY29tcGxldGU6IFwiICsgc3RhdHVzLnBlcmNlbnRhZ2VDb21wbGV0ZWQpO1xuXHRcdFx0XHRcdFx0XHQgICAgfVxuXHRcdFx0XHRcdFx0XHQgIH0pLnRoZW4oXG5cdFx0XHRcdFx0XHRcdCAgICAgICh1cGxvYWRlZEZpbGUpID0+IHtcblx0XHRcdFx0XHRcdFx0ICAgICAgICBjb25zb2xlLmxvZyhcIkZpbGUgdXBsb2FkZWQ6IFwiICsgSlNPTi5zdHJpbmdpZnkodXBsb2FkZWRGaWxlKSk7XG5cdFx0XHRcdFx0XHRcdCAgICAgICAgICBcdFx0ZmlyZWJhc2Uuc3RvcmFnZS5nZXREb3dubG9hZFVybCh7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgIC8vIHRoZSBmdWxsIHBhdGggb2YgYW4gZXhpc3RpbmcgZmlsZSBpbiB5b3VyIEZpcmViYXNlIHN0b3JhZ2Vcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICAgcmVtb3RlRnVsbFBhdGg6ICd1c2Vycy8nICsgdGhpcy51c2VySWQgKyAnL3VwbG9hZHMvcHJvZmlsZV9waWN0dXJlLmpwZydcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgIH0pLnRoZW4oXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgICAgKHVybCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgICAgICAgZmlyZWJhc2UudXBkYXRlUHJvZmlsZSh7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgICBwaG90b1VSTDogdXJsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgfSkudGhlbihcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgICAgKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICAgICAgIC8vIGNhbGxlZCB3aGVuIHVwZGF0ZSBwcm9maWxlIHdhcyBzdWNjZXNzZnVsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgICAgICAgYWN0aXZpdHlJbmRpY2F0b3IuYnVzeSA9IGZhbHNlO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0dGluZ3NDb250YWluZXIuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFjdGl2aXR5SW5kaWNhdG9yLnN0eWxlLnZpc2liaWxpdHkgPSAnY29sbGFwc2UnO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICAgICAgIHRoaXMucHJvZmlsZSA9IHVybDtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgICAgfSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgICAgKGVycm9yTWVzc2FnZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICAgICAgIGNvbnNvbGUubG9nKGVycm9yTWVzc2FnZSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgICAgIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICApO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgIGNvbnN0IHVzZXJEb2N1bWVudCA9IGZpcmViYXNlLmZpcmVzdG9yZS5jb2xsZWN0aW9uKCd1c2VycycpLmRvYyh0aGlzLnVzZXJJZCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgdXNlckRvY3VtZW50LnVwZGF0ZSh7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgXHRwcm9maWxlX3NvdXJjZTogdXJsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgfSlcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICAgICB9LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgICAgIGZ1bmN0aW9uIChlcnJvcikge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgICAgICAgY29uc29sZS5sb2coXCJFcnJvcjogXCIgKyBlcnJvcik7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgICAgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgKTtcblx0XHRcdFx0XHRcdFx0ICAgICAgfSxcblx0XHRcdFx0XHRcdFx0ICAgICAgKGVycm9yKSA9PiB7XG5cdFx0XHRcdFx0XHRcdCAgICAgICAgY29uc29sZS5sb2coXCJGaWxlIHVwbG9hZCBlcnJvcjogXCIgKyBlcnJvcik7XG5cdFx0XHRcdFx0XHRcdCAgICAgIH1cblx0XHRcdFx0XHRcdFx0XHQpLmNhdGNoKChlcnIpID0+IHtcblx0XHRcdFx0XHRcdFx0ICAgICAgICAvLyBwcm9jZXNzIGVycm9yXG5cdFx0XHRcdFx0XHRcdCAgICAgICAgY29uc29sZS5sb2coZXJyKTtcblx0XHRcdFx0XHRcdFx0ICAgIH0pO1xuXHQgICAgICAgICAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmRpcihlKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgICAgIFx0Y29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcblx0ICAgIH0pLmNhdGNoKChlcnIpID0+IHtcblx0ICAgIFx0Y29uc29sZS5sb2coZXJyKVxuXHQgICAgfSlcblx0fVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi8qIEFkZCBtb2JpbGUgc3R5bGVzIGZvciB0aGUgY29tcG9uZW50IGhlcmUuICAqL1xcbi5oZWFkZXJ7XFxuICAgIG1hcmdpbi10b3A6IDUwO1xcblxcdG1hcmdpbi1sZWZ0OiAzMjtcXG5cXHRjb2xvcjogYmxhY2s7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIGZvbnQtc2l6ZTogMzA7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcbi5zdWJtaXQtYnRue1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNhYzAwZTY7XFxuICAgIHdpZHRoOiA3NSU7XFxuICAgIGhlaWdodDogMTcwcHg7XFxuLyogICAgZm9udC1mYW1pbHk6IFxcXCJTZWdvZSBVSVxcXCIsQXJpYWwsc2Fucy1zZXJpZjtcXG4qLyAgICBjb2xvcjogd2hpdGU7XFxuICAgIG1hcmdpbi10b3A6IDIwO1xcbn1cXG4udGV4dC1maWVsZHtcXG4gICAgd2lkdGg6IDg1JTtcXG4gICAgbWFyZ2luLXRvcDogMjA7XFxuICAgIGNvbG9yOiM2OTY5NjlcXG59XFxuXFxuLmNsb3NlLWJ1dHRvbi1jb250YWluZXIge1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRsZWZ0OiAwO1xcbn1cXG4uY2xvc2Uge1xcblxcdG1hcmdpbjogMTA7XFxuXFx0Zm9udC1zaXplOiA0MDtcXG5cXHR3aWR0aDogNDg7XFxuICAgIGhlaWdodDogNDg7XFxuICAgIGNvbG9yOiBibGFja1xcbn1cXG5cXG4uZXJyb3ItbWVzc2FnZSB7XFxuICAgIGNvbG9yOiByZWQ7XFxuICAgIGZvbnQtc2l6ZTogMTY7XFxuICAgIHZpc2liaWxpdHk6IGNvbGxhcHNlO1xcbn1cXG5cXG4uc2Vjb25kLXZhbCB7XFxuICAgIHZpc2liaWxpdHk6IGNvbGxhcHNlO1xcbn1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8U3RhY2tsYXlvdXQ+XFxuICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiY2xvc2UtYnV0dG9uLWNvbnRhaW5lclxcXCIgb3JpZW50YXRpb249XFxcImhvcml6b250YWxcXFwiPlxcbiAgICAgICAgPExhYmVsIHRleHQ9XFxcIiZ0aW1lcztcXFwiIGNsYXNzPVxcXCJjbG9zZVxcXCIgKHRhcCk9XFxcImNsb3NlKCdjYW5jZWwnKVxcXCI+PC9MYWJlbD5cXG4gICAgPC9TdGFja0xheW91dD5cXG4gICAgPExhYmVsIGNsYXNzPVxcXCJoZWFkZXJcXFwiIFt0ZXh0XT1cXFwibGFiZWxcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIj48L0xhYmVsPlxcbiAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImlucHV0LWZpZWxkXFxcIj5cXG4gICAgXFx0PCEtLSA8TWFza2VkVGV4dEZpZWxkIGNsYXNzPVxcXCJpbnB1dCBpbnB1dC1ib3JkZXJcXFwiIG1hc2s9XFxcIigwMDApIDAwMC0wMDAwXFxcIiBbKG5nTW9kZWwpXT1cXFwidmFsdWVcXFwiIGtleWJvYXJkVHlwZT1cXFwicGhvbmVcXFwiPjwvTWFza2VkVGV4dEZpZWxkPiAtLT5cXG4gICAgICAgIDxUZXh0RmllbGQgI3ZhbCBbKG5nTW9kZWwpXT1cXFwidmFsdWVcXFwiIFtrZXlib2FyZFR5cGVdID0gXFxcImtleWJvYXJkXFxcIiBhdXRvY29ycmVjdD1cXFwiZmFsc2VcXFwiIHJldHVybktleVR5cGU9XFxcInt7cmV0dXJuS2V5fX1cXFwiXFxuICAgICAgICAgW21heExlbmd0aF09IFxcXCJtYXhsZW5ndGhcXFwiIGNsYXNzPVxcXCJ0ZXh0LWZpZWxkXFxcIiBzZWN1cmU9XFxcInt7aXNTZWN1cmV9fVxcXCIgaGludD1cXFwie3sgaGludCB9fVxcXCI+PC9UZXh0RmllbGQ+XFxuICAgICAgICA8VGV4dEZpZWxkICNzZWNvbmRWYWwgWyhuZ01vZGVsKV09XFxcInNlY29uZFZhbHVlXFxcIiBba2V5Ym9hcmRUeXBlXSA9IFxcXCJrZXlib2FyZFxcXCIgYXV0b2NvcnJlY3Q9XFxcImZhbHNlXFxcIiByZXR1cm5LZXlUeXBlPVxcXCJkb25lXFxcIlxcbiAgICAgICAgIFttYXhMZW5ndGhdPSBcXFwibWF4bGVuZ3RoXFxcIiBjbGFzcz1cXFwidGV4dC1maWVsZCBzZWNvbmQtdmFsXFxcIiBzZWN1cmU9XFxcInt7aXNTZWN1cmV9fVxcXCIgaGludD1cXFwie3sgc2Vjb25kSGludCB9fVxcXCI+PC9UZXh0RmllbGQ+XFxuICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgIDxMYWJlbCAjZXJyb3JNZXNzYWdlIHRleHQ9XFxcInt7IGVycm9yVGV4dCB9fVxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiIGNsYXNzPVxcXCJlcnJvci1tZXNzYWdlXFxcIj48L0xhYmVsPlxcblxcbiAgICA8QnV0dG9uIHRleHQ9XFxcIlNhdmVcXFwiICh0YXApPVxcXCJzdWJtaXREYXRhKHZhbC50ZXh0KVxcXCIgY2xhc3M9XFxcInN1Ym1pdC1idG5cXFwiPjwvQnV0dG9uPlxcblxcbjwvU3RhY2tsYXlvdXQ+XCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUcmFuc2ZlclNlcnZpY2UgfSBmcm9tICcuLi9kYXRhdHJhbnNmZXIuc2VydmljZSc7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZVwiO1xuLy8gaW1wb3J0IHsgTW9kYWxEaWFsb2dQYXJhbXMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZGlyZWN0aXZlcy9kaWFsb2dzXCI7XG5pbXBvcnQgKiBhcyBmaXJlYmFzZSBmcm9tICduYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlJztcbmltcG9ydCB7IExvZ2luY2hlY2tTZXJ2aWNlIH0gZnJvbSAnLi4vbG9naW5jaGVjay5zZXJ2aWNlLnRucyc7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE1vZGFsRGlhbG9nUGFyYW1zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2RpcmVjdGl2ZXMvZGlhbG9nc1wiO1xuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCI7XG5pbXBvcnQgeyBMYWJlbCB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvbGFiZWwnO1xuaW1wb3J0IHsgVGV4dEZpZWxkIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS90ZXh0LWZpZWxkJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXNldHRpbmdzZm9ybScsXG4gIHRlbXBsYXRlVXJsOiAnLi9zZXR0aW5nc2Zvcm0uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zZXR0aW5nc2Zvcm0uY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFNldHRpbmdzZm9ybUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0cmFuc2ZlclNlcnZpY2U6IFRyYW5zZmVyU2VydmljZSwgcHJpdmF0ZSBsb2dpbmNoZWNrU2VydmljZTogTG9naW5jaGVja1NlcnZpY2UsIFxuICAgIHByaXZhdGUgcGFnZTogUGFnZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMsIHByaXZhdGUgcGFyYW1zOiBNb2RhbERpYWxvZ1BhcmFtcykgeyB9XG5cbiAgQFZpZXdDaGlsZChcImVycm9yTWVzc2FnZVwiLCB7IHN0YXRpYzogdHJ1ZSB9KSBlbTogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZChcInNlY29uZFZhbFwiLCB7IHN0YXRpYzogdHJ1ZSB9KSBzdjogRWxlbWVudFJlZjtcbiAgdXNlcklkO1xuICBmaWVsZDtcbiAgbGFiZWw7XG4gIHZhbHVlO1xuICBzZWNvbmRWYWx1ZTtcbiAga2V5Ym9hcmQ7XG4gIG1heGxlbmd0aDtcbiAgaXNTZWN1cmUgPSBmYWxzZTtcbiAgZXJyb3JUZXh0O1xuICByZXR1cm5LZXkgPSBcImRvbmVcIlxuICBoaW50O1xuICBzZWNvbmRIaW50O1xuICBuZ09uSW5pdCgpIHtcbiAgICAvLyB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcbiAgICB0aGlzLmZpZWxkID0gdGhpcy50cmFuc2ZlclNlcnZpY2UuZ2V0RGF0YSgpO1xuICAgIHRoaXMubGFiZWwgPSB0aGlzLmZpZWxkLmxhYmVsO1xuICAgIHRoaXMudmFsdWUgPSB0aGlzLmZpZWxkLnZhbHVlO1xuICAgIGlmKHRoaXMuZmllbGQudmFsdWUgPT0gXCJOb25lXCIpIHtcbiAgICAgIHRoaXMudmFsdWUgPSAnJztcbiAgICB9XG4gICAgaWYodGhpcy5sYWJlbD09XCJOYW1lXCIpe1xuICAgICAgLy8gdGhpcy5rZXlib2FyZCA9IFwiXCI7XG4gICAgICB0aGlzLm1heGxlbmd0aCA9IDMwO1xuICAgICAgdGhpcy5yZXR1cm5LZXkgPSBcIm5leHRcIjtcbiAgICAgIHRoaXMudmFsdWUgPSB0aGlzLmZpZWxkLmZpcnN0TmFtZTtcbiAgICAgIHRoaXMuc2Vjb25kVmFsdWUgPSB0aGlzLmZpZWxkLmxhc3ROYW1lO1xuICAgICAgdGhpcy5oaW50ID0gXCJGaXJzdCBuYW1lXCI7XG4gICAgICB0aGlzLnNlY29uZEhpbnQgPSBcIkxhc3QgbmFtZVwiO1xuICAgICAgbGV0IHNlY29uZFZhbHVlID0gPFRleHRGaWVsZD4gdGhpcy5zdi5uYXRpdmVFbGVtZW50O1xuICAgICAgc2Vjb25kVmFsdWUuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuICAgIH1cbiAgICBlbHNlIGlmKHRoaXMubGFiZWw9PVwiRW1haWxcIil7XG4gICAgICB0aGlzLmtleWJvYXJkID0gXCJlbWFpbFwiO1xuICAgICAgdGhpcy5tYXhsZW5ndGggPSAzMDtcbiAgICAgIHRoaXMuZXJyb3JUZXh0ID0gXCJJbnZhbGlkIGVtYWlsXCJcbiAgICAgIHRoaXMuaGludCA9IFwiRW1haWxcIlxuICAgIH1cbiAgICBlbHNlIGlmKHRoaXMubGFiZWw9PVwiUGhvbmUgTnVtYmVyXCIpe1xuICAgICAgdGhpcy5rZXlib2FyZCA9IFwicGhvbmVcIjtcbiAgICAgIHRoaXMubWF4bGVuZ3RoID0gMTA7XG4gICAgICB0aGlzLmVycm9yVGV4dCA9IFwiSW52YWxpZCBwaG9uZSBudW1iZXJcIlxuICAgICAgdGhpcy5oaW50ID0gXCJ4eHgteHh4LXh4eHhcIlxuICAgIH1cbiAgICBlbHNlIGlmKHRoaXMubGFiZWw9PVwiUGFzc3dvcmRcIikge1xuICAgICAgdGhpcy52YWx1ZSA9ICcnO1xuICAgICAgdGhpcy5tYXhsZW5ndGggPSAzMDtcbiAgICAgIHRoaXMuaXNTZWN1cmUgPSB0cnVlO1xuICAgICAgdGhpcy5sYWJlbCA9IFwiRW50ZXIgbmV3IHBhc3N3b3JkXCI7XG4gICAgICB0aGlzLmhpbnQgPSBcIk5ldyBwYXNzd29yZFwiO1xuICAgICAgdGhpcy5zZWNvbmRIaW50ID0gXCJSZS1lbnRlciBuZXcgcGFzc3dvcmRcIjtcbiAgICAgIHRoaXMuZXJyb3JUZXh0ID0gXCJQYXNzd29yZCBtdXN0IGJlIGF0IGxlc3QgNiBjaGFyYWN0ZXJzIGxvbmdcIjtcbiAgICAgIGxldCBzZWNvbmRWYWx1ZSA9IDxUZXh0RmllbGQ+IHRoaXMuc3YubmF0aXZlRWxlbWVudDtcbiAgICAgIHNlY29uZFZhbHVlLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcbiAgICB9XG4gIH1cblxuICBzdWJtaXREYXRhKHJlc3VsdCkge1xuICAgIHRoaXMudXNlcklkID0gdGhpcy5sb2dpbmNoZWNrU2VydmljZS5nZXRVc2VyKCk7XG4gICAgY29uc3QgdXNlckRvY3VtZW50ID0gZmlyZWJhc2UuZmlyZXN0b3JlLmNvbGxlY3Rpb24oJ3VzZXJzJykuZG9jKHRoaXMudXNlcklkKTtcbiAgICBpZiAodGhpcy5sYWJlbCA9PSBcIk5hbWVcIikge1xuICAgICAgZmlyZWJhc2UudXBkYXRlUHJvZmlsZSh7XG4gICAgICAgIGRpc3BsYXlOYW1lOiB0aGlzLnZhbHVlICsgXCIgXCIgKyB0aGlzLnNlY29uZFZhbHVlXG4gICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJQcm9maWxlIHVwZGF0ZWRcIilcbiAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgfSlcblxuICAgICAgLy8gY29uc29sZS5sb2coXCJuYW1lXCIsIG5hbWUpXG4gICAgICB1c2VyRG9jdW1lbnQudXBkYXRlKHtcbiAgICAgICAgZmlyc3RfbmFtZTogdGhpcy52YWx1ZSxcbiAgICAgICAgbGFzdF9uYW1lOiB0aGlzLnNlY29uZFZhbHVlXG4gICAgICB9KVxuXG4gICAgICB2YXIgcG9zdGluZ3NDb2xsZWN0aW9uID0gZmlyZWJhc2UuZmlyZXN0b3JlLmNvbGxlY3Rpb24oJ3Bvc3RpbmdzJyk7XG4gICAgICB1c2VyRG9jdW1lbnQuZ2V0KCkudGhlbihkb2MgPT4ge1xuICAgICAgICBsZXQgcG9zdElkcyA9IGRvYy5kYXRhKCkucG9zdHM7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwicG9zdGlkc1wiLCBwb3N0SWRzKVxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgcG9zdElkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHBvc3RpbmdzQ29sbGVjdGlvbi5kb2MocG9zdElkc1tpXSkudXBkYXRlKHtcbiAgICAgICAgICAgIHVzZXI6IHRoaXMudmFsdWUgKyBcIiBcIiArIHRoaXMuc2Vjb25kVmFsdWVcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgfSk7XG4gICAgICB0aGlzLnBhcmFtcy5jbG9zZUNhbGxiYWNrKFwidXBkYXRlXCIpXG4gICAgfVxuXG4gICAgZWxzZSBpZih0aGlzLmxhYmVsID09IFwiRW1haWxcIikge1xuICAgICAgZmlyZWJhc2UudXBkYXRlRW1haWwocmVzdWx0KS50aGVuKCgpID0+IHtcbiAgICAgICAgdXNlckRvY3VtZW50LnVwZGF0ZSh7XG4gICAgICAgICAgZW1haWw6IHJlc3VsdCxcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgdGhpcy5wYXJhbXMuY2xvc2VDYWxsYmFjayhcInVwZGF0ZVwiKVxuICAgICAgICB9KVxuICAgICAgfSkuY2F0Y2goXG4gICAgICAgICAgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNob3dFcnJvcigpO1xuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG4gICAgZWxzZSBpZih0aGlzLmxhYmVsID09IFwiUGhvbmUgTnVtYmVyXCIpIHtcbiAgICAgIHVzZXJEb2N1bWVudC51cGRhdGUoe1xuICAgICAgICBwaG9uZV9udW1iZXI6IHJlc3VsdCxcbiAgICAgIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICB0aGlzLnBhcmFtcy5jbG9zZUNhbGxiYWNrKFwidXBkYXRlXCIpXG4gICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIHRoaXMuc2hvd0Vycm9yKCk7XG4gICAgICB9KVxuICAgIH1cbiAgICBlbHNlIGlmKHRoaXMubGFiZWwgPT0gXCJFbnRlciBuZXcgcGFzc3dvcmRcIikge1xuICAgICAgaWYodGhpcy52YWx1ZSAhPSB0aGlzLnNlY29uZFZhbHVlKSB7XG4gICAgICAgIHRoaXMuZXJyb3JUZXh0ID0gXCJQYXNzd29yZHMgZG8gbm90IG1hdGNoXCI7XG4gICAgICAgIHRoaXMuc2hvd0Vycm9yKCk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgZmlyZWJhc2UudXBkYXRlUGFzc3dvcmQodGhpcy52YWx1ZSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgdGhpcy5wYXJhbXMuY2xvc2VDYWxsYmFjayhcInVwZGF0ZVwiKVxuICAgICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgdGhpcy5lcnJvclRleHQgPSBcIlBhc3N3b3JkIG11c3QgYmUgYXQgbGVzdCA2IGNoYXJhY3RlcnMgbG9uZ1wiO1xuICAgICAgICAgIHRoaXMuc2hvd0Vycm9yKCk7XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY2xvc2UocmVzKSB7XG4gICAgdGhpcy5wYXJhbXMuY2xvc2VDYWxsYmFjayhyZXMpO1xuICB9XG5cbiAgc2hvd0Vycm9yKCkge1xuICAgIGxldCBlcnJvck1lc3NhZ2UgPSA8TGFiZWw+IHRoaXMuZW0ubmF0aXZlRWxlbWVudDtcbiAgICBlcnJvck1lc3NhZ2Uuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHA+XFxuICB1cGRhdGUgd29ya3MhXFxuPC9wPlxcblwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExvZ2luY2hlY2tTZXJ2aWNlIH0gZnJvbSAnLi4vbG9naW5jaGVjay5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXVwZGF0ZScsXG4gIHRlbXBsYXRlVXJsOiAnLi91cGRhdGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi91cGRhdGUuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFVwZGF0ZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBsb2dpbmNoZWNrU2VydmljZTogTG9naW5jaGVja1NlcnZpY2UpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICBcdHRoaXMubG9naW5jaGVja1NlcnZpY2UubG9naW5DaGVjaygpO1xuICB9XG5cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFVzZXJTZXJ2aWNlIHtcbiAgXHQvKipcblx0KiBUbyBnZXQgdGhlIHNlcnZlciB0byByZWNvZ25pemUgeW91ciBtb2JpbGUgZGV2aWNlLCBmaW5kIHlvdXIgaXB2NCBhZGRyZXNzIGJ5IHJ1bm5pbmcgaXBjb25maWcgaW4gYSB0ZXJtaW5hbCB3aW5kb3dcblx0KiBhbmQgYWRkIGEgbmV3IHVyaSBsaW5lIHdpdGggeW91ciBpcHY0IGFkZHJlc3MuIERvIHRoaXMgZm9yIG5ldHdvcmtfc2VjdXJpdHlfY29uZmlnLnhtbCwgdXNlci5zZXJ2aWNlcy50bnMudHMsIGFuZFxuXHQqIHBvc3Rpbmcuc2VydmljZS50bnMudHMuXG5cdCovXG5cdC8vIEFkYW0ncyB0ZXN0aW5nIHNlcnZlclxuXHQvLyB1cmkgPSAnaHR0cDovLzE5Mi4xNjguMS43OjQwMDAnO1xuXHQvLyB1cmkgPSAnaHR0cDovLzEwLjUuMTEuMjU6NDAwMCc7XG5cdC8vIFBoaWxsaXAncyBUZXN0aW5nIHNlcnZlclxuXHR1cmkgPSAnaHR0cDovLzE5Mi4xNjguMS4zOjQwMDAnO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHsgfVxuXG4gIGdldFVzZXJzKCkge1xuICBcdHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke3RoaXMudXJpfS91c2Vyc2ApO1xuICB9XG5cbiAgZ2V0VXNlcmJ5SWQoaWQpIHtcbiAgXHRyZXR1cm4gdGhpcy5odHRwLmdldChgJHt0aGlzLnVyaX0vdXNlcnMvJHtpZH1gKTtcbiAgfVxuXG4gIGFkZFVzZXIobmFtZT0nJywgdXNlcm5hbWU9JycsIGFkZHJlc3M9JycsIGJpcnRoZGF0ZT0nJywgZW1haWw9JycsIGdlbmRlcj0nJywgcGhvbmVfbnVtYmVyPScnLCByaWRlc19naXZlbj1cIjBcIiwgcmlkZXNfcmVjZWl2ZWQ9XCIwXCIpIHtcbiAgXHRjb25zdCB1c2VyID0ge1xuICBcdFx0bmFtZTogbmFtZSxcbiAgICAgIHVzZXJuYW1lOiB1c2VybmFtZSxcbiAgICAgIGFkZHJlc3M6IGFkZHJlc3MsXG4gICAgICBiaXJ0aGRhdGU6IGJpcnRoZGF0ZSxcbiAgICAgIGVtYWlsOiBlbWFpbCxcbiAgICAgIGdlbmRlcjogZ2VuZGVyLFxuICAgICAgcGhvbmVfbnVtYmVyOiBwaG9uZV9udW1iZXIsXG4gICAgICByaWRlc19naXZlbjogcmlkZXNfZ2l2ZW4sXG4gICAgICByaWRlc19yZWNlaXZlZDogcmlkZXNfcmVjZWl2ZWQsXG4gICAgICBwYXltZW50X2lkOiBcIlwiXG4gIFx0fTtcbiAgXHRyZXR1cm4gdGhpcy5odHRwLnBvc3QoYCR7dGhpcy51cml9L3VzZXJzL2FkZC9gLCB1c2VyKTtcbiAgfVxuXG4gIHVwZGF0ZVVzZXIoaWQsIG5hbWUsIHVzZXJuYW1lLCBhZGRyZXNzLCBiaXJ0aGRhdGUsIGVtYWlsLCBnZW5kZXIsIHBob25lX251bWJlciwgcmlkZXNfZ2l2ZW4sIHJpZGVzX3JlY2VpdmVkLCBwYXltZW50X2lkKSB7XG4gIFx0Y29uc3QgdXNlciA9IHtcbiAgICAgIG5hbWU6IG5hbWUsXG4gICAgICB1c2VybmFtZTogdXNlcm5hbWUsXG4gICAgICBhZGRyZXNzOiBhZGRyZXNzLFxuICAgICAgYmlydGhkYXRlOiBiaXJ0aGRhdGUsXG4gICAgICBlbWFpbDogZW1haWwsXG4gICAgICBnZW5kZXI6IGdlbmRlcixcbiAgICAgIHBob25lX251bWJlcjogcGhvbmVfbnVtYmVyLFxuICAgICAgcmlkZXNfZ2l2ZW46IHJpZGVzX2dpdmVuLFxuICAgICAgcmlkZXNfcmVjZWl2ZWQ6IHJpZGVzX3JlY2VpdmVkLFxuICAgICAgcGF5bWVudF9pZDogcGF5bWVudF9pZFxuICAgIH07XG4gIFx0cmV0dXJuIHRoaXMuaHR0cC5wb3N0KGAke3RoaXMudXJpfS91c2Vycy91cGRhdGUvJHtpZH1gLCB1c2VyKTtcbiAgfVxuXG4gIGRlbGV0ZVVzZXIoaWQpIHtcbiAgXHRyZXR1cm4gdGhpcy5odHRwLmdldChgJHt0aGlzLnVyaX0vdXNlcnMvZGVsZXRlLyR7aWR9YCk7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgVXNlclNlcnZpY2Uge1xuICBcdC8qKlxuXHQqIFRvIGdldCB0aGUgc2VydmVyIHRvIHJlY29nbml6ZSB5b3VyIG1vYmlsZSBkZXZpY2UsIGZpbmQgeW91ciBpcHY0IGFkZHJlc3MgYnkgcnVubmluZyBpcGNvbmZpZyBpbiBhIHRlcm1pbmFsIHdpbmRvd1xuXHQqIGFuZCBhZGQgYSBuZXcgdXJpIGxpbmUgd2l0aCB5b3VyIGlwdjQgYWRkcmVzcy4gRG8gdGhpcyBmb3IgbmV0d29ya19zZWN1cml0eV9jb25maWcueG1sLCB1c2VyLnNlcnZpY2VzLnRucy50cywgYW5kXG5cdCogcG9zdGluZy5zZXJ2aWNlLnRucy50cy5cblx0Ki9cblx0Ly8gQWRhbSdzIHRlc3Rpbmcgc2VydmVyXG5cdC8vIHVyaSA9ICdodHRwOi8vMTkyLjE2OC4xLjc6NDAwMCc7XG5cdC8vIHVyaSA9ICdodHRwOi8vMTAuNS4xMS4yNTo0MDAwJztcblx0Ly8gUGhpbGxpcCdzIFRlc3Rpbmcgc2VydmVyXG5cdHVyaSA9ICdodHRwOi8vMTkyLjE2OC4xLjM6NDAwMCc7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkgeyB9XG5cbiAgZ2V0VXNlcnMoKSB7XG4gIFx0cmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy51cml9L3VzZXJzYCk7XG4gIH1cblxuICBnZXRVc2VyYnlJZChpZCkge1xuICBcdHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke3RoaXMudXJpfS91c2Vycy8ke2lkfWApO1xuICB9XG5cbiAgYWRkVXNlcihuYW1lPScnLCB1c2VybmFtZT0nJywgYWRkcmVzcz0nJywgYmlydGhkYXRlPScnLCBlbWFpbD0nJywgZ2VuZGVyPScnLCBwaG9uZV9udW1iZXI9JycsIHJpZGVzX2dpdmVuPVwiMFwiLCByaWRlc19yZWNlaXZlZD1cIjBcIikge1xuICBcdGNvbnN0IHVzZXIgPSB7XG4gIFx0XHRuYW1lOiBuYW1lLFxuICAgICAgdXNlcm5hbWU6IHVzZXJuYW1lLFxuICAgICAgYWRkcmVzczogYWRkcmVzcyxcbiAgICAgIGJpcnRoZGF0ZTogYmlydGhkYXRlLFxuICAgICAgZW1haWw6IGVtYWlsLFxuICAgICAgZ2VuZGVyOiBnZW5kZXIsXG4gICAgICBwaG9uZV9udW1iZXI6IHBob25lX251bWJlcixcbiAgICAgIHJpZGVzX2dpdmVuOiByaWRlc19naXZlbixcbiAgICAgIHJpZGVzX3JlY2VpdmVkOiByaWRlc19yZWNlaXZlZCxcbiAgICAgIHBheW1lbnRfaWQ6IFwiXCJcbiAgXHR9O1xuICBcdHJldHVybiB0aGlzLmh0dHAucG9zdChgJHt0aGlzLnVyaX0vdXNlcnMvYWRkL2AsIHVzZXIpO1xuICB9XG5cbiAgdXBkYXRlVXNlcihpZCwgbmFtZSwgdXNlcm5hbWUsIGFkZHJlc3MsIGJpcnRoZGF0ZSwgZW1haWwsIGdlbmRlciwgcGhvbmVfbnVtYmVyLCByaWRlc19naXZlbiwgcmlkZXNfcmVjZWl2ZWQsIHBheW1lbnRfaWQpIHtcbiAgXHRjb25zdCB1c2VyID0ge1xuICAgICAgbmFtZTogbmFtZSxcbiAgICAgIHVzZXJuYW1lOiB1c2VybmFtZSxcbiAgICAgIGFkZHJlc3M6IGFkZHJlc3MsXG4gICAgICBiaXJ0aGRhdGU6IGJpcnRoZGF0ZSxcbiAgICAgIGVtYWlsOiBlbWFpbCxcbiAgICAgIGdlbmRlcjogZ2VuZGVyLFxuICAgICAgcGhvbmVfbnVtYmVyOiBwaG9uZV9udW1iZXIsXG4gICAgICByaWRlc19naXZlbjogcmlkZXNfZ2l2ZW4sXG4gICAgICByaWRlc19yZWNlaXZlZDogcmlkZXNfcmVjZWl2ZWQsXG4gICAgICBwYXltZW50X2lkOiBwYXltZW50X2lkXG4gICAgfTtcbiAgXHRyZXR1cm4gdGhpcy5odHRwLnBvc3QoYCR7dGhpcy51cml9L3VzZXJzL3VwZGF0ZS8ke2lkfWAsIHVzZXIpO1xuICB9XG5cbiAgZGVsZXRlVXNlcihpZCkge1xuICBcdHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke3RoaXMudXJpfS91c2Vycy9kZWxldGUvJHtpZH1gKTtcbiAgfVxuXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLyogQWRkIG1vYmlsZSBzdHlsZXMgZm9yIHRoZSBjb21wb25lbnQgaGVyZS4gICovXFxuLnBhZ2Uge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB2aXNpYmlsaXR5OiBjb2xsYXBzZTtcXG59XFxuLmZvcm0ge1xcbiAgbWFyZ2luLWxlZnQ6IDMwO1xcbiAgbWFyZ2luLXJpZ2h0OiAzMDtcXG4gIGZsZXgtZ3JvdzogMjtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcblxcbi5sb2dvIHtcXG4gIG1hcmdpbi1ib3R0b206IDcyO1xcbiAgaGVpZ2h0OiAxMjA7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuLmhlYWRlciB7XFxuICBob3Jpem9udGFsLWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDI1O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIG1hcmdpbi1ib3R0b206IDcwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6ICNhYzAwZTY7XFxufVxcblxcbi5pbnB1dC1maWVsZCB7XFxuICBtYXJnaW4tYm90dG9tOiAyNTtcXG59XFxuLmlucHV0IHtcXG4gIGZvbnQtc2l6ZTogMTg7XFxuICBwbGFjZWhvbGRlci1jb2xvcjogI0E4QThBODtcXG59XFxuXFxuLmJ0bi1wcmltYXJ5IHtcXG4gIGhlaWdodDogNTA7XFxuICBtYXJnaW46IDMwIDUgMTUgNTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhYzAwZTY7XFxuICBib3JkZXItcmFkaXVzOiA1O1xcbiAgZm9udC1zaXplOiAyMDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5idG4tZmIge1xcbiAgaGVpZ2h0OiAxMDA7XFxuICBtYXJnaW46IDAgNSAxNSA1O1xcbiAgLypib3JkZXItcmFkaXVzOiA1OyovXFxuICBmb250LXNpemU6IDIwO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLmxvZ2luLWxhYmVsIHtcXG4gIGhvcml6b250YWwtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiAjQThBOEE4O1xcbiAgZm9udC1zaXplOiAxNjtcXG59XFxuLnNpZ24tdXAtbGFiZWwge1xcbiAgbWFyZ2luLWJvdHRvbTogMjA7XFxufVxcbi5ib2xkIHtcXG4gIGNvbG9yOiAjMDAwMDAwOyBcXG59XFxuLmFjdGl2aXR5LWluZGljYXRvciB7XFxuICBjb2xvcjogI2FjMDBlNjtcXG59XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPEZsZXhib3hMYXlvdXQgY2xhc3M9XFxcInBhZ2VcXFwiICN3ZWxjb21lQ29udGFpbmVyPlxcblxcdDxTdGFja0xheW91dCBjbGFzcz1cXFwiZm9ybVxcXCI+XFxuXFx0XFx0PEltYWdlIGNsYXNzPVxcXCJsb2dvXFxcIiBzcmM9XFxcIn4vaW1nL2xvZ28ucG5nXFxcIj48L0ltYWdlPlxcblxcdFxcdDwhLS0gPExhYmVsIGNsYXNzPVxcXCJoZWFkZXJcXFwiIHRleHQ9XFxcIkNvbGxlZ2VQb29sXFxcIj48L0xhYmVsPiAtLT5cXG5cXG5cXHRcXHQ8U3RhY2tMYXlvdXQgKm5nSWY9XFxcIiFpc0xvZ2dpbmdJblxcXCIgY2xhc3M9XFxcImlucHV0LWZpZWxkXFxcIj5cXG5cXHRcXHRcXHQ8VGV4dEZpZWxkIGNsYXNzPVxcXCJpbnB1dFxcXCIgaGludD1cXFwiRmlyc3QgbmFtZVxcXCIgWyhuZ01vZGVsKV09XFxcImZpcnN0TmFtZVxcXCIgcmV0dXJuS2V5VHlwZT1cXFwibmV4dFxcXCIgI2ZuPjwvVGV4dEZpZWxkPlxcblxcdFxcdFxcdDxTdGFja0xheW91dCBjbGFzcz1cXFwiaHItbGlnaHRcXFwiPjwvU3RhY2tMYXlvdXQ+XFxuXFx0XFx0PC9TdGFja0xheW91dD5cXG5cXG5cXHRcXHQ8U3RhY2tMYXlvdXQgKm5nSWY9XFxcIiFpc0xvZ2dpbmdJblxcXCIgY2xhc3M9XFxcImlucHV0LWZpZWxkXFxcIj5cXG5cXHRcXHRcXHQ8VGV4dEZpZWxkIGNsYXNzPVxcXCJpbnB1dFxcXCIgaGludD1cXFwiTGFzdCBuYW1lXFxcIiBbKG5nTW9kZWwpXT1cXFwibGFzdE5hbWVcXFwiIHJldHVybktleVR5cGU9XFxcIm5leHRcXFwiICNsbj48L1RleHRGaWVsZD5cXG5cXHRcXHRcXHQ8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImhyLWxpZ2h0XFxcIj48L1N0YWNrTGF5b3V0PlxcblxcdFxcdDwvU3RhY2tMYXlvdXQ+XFxuXFxuXFx0XFx0PFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJpbnB1dC1maWVsZFxcXCI+XFxuXFx0XFx0XFx0PFRleHRGaWVsZCBjbGFzcz1cXFwiaW5wdXRcXFwiIGhpbnQ9XFxcIkVtYWlsXFxcIiBrZXlib2FyZFR5cGU9XFxcImVtYWlsXFxcIiBhdXRvY29ycmVjdD1cXFwiZmFsc2VcXFwiIGF1dG9jYXBpdGFsaXphdGlvblR5cGU9XFxcIm5vbmVcXFwiIFsobmdNb2RlbCldPVxcXCJlbWFpbFxcXCIgcmV0dXJuS2V5VHlwZT1cXFwibmV4dFxcXCIgKHJldHVyblByZXNzKT1cXFwiZm9jdXNQYXNzd29yZCgpXFxcIiAjZW0+PC9UZXh0RmllbGQ+XFxuXFx0XFx0XFx0PFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJoci1saWdodFxcXCI+PC9TdGFja0xheW91dD5cXG5cXHRcXHQ8L1N0YWNrTGF5b3V0PlxcblxcblxcdFxcdDxTdGFja0xheW91dCBjbGFzcz1cXFwiaW5wdXQtZmllbGRcXFwiPlxcblxcdFxcdFxcdDxUZXh0RmllbGQgY2xhc3M9XFxcImlucHV0XFxcIiBoaW50PVxcXCJQYXNzd29yZFxcXCIgc2VjdXJlPVxcXCJ0cnVlXFxcIiBbKG5nTW9kZWwpXT1cXFwicGFzc3dvcmRcXFwiIFtyZXR1cm5LZXlUeXBlXT1cXFwiaXNMb2dnaW5nSW4gPyAnZG9uZScgOiAnbmV4dCdcXFwiIChyZXR1cm5QcmVzcyk9XFxcImZvY3VzQ29uZmlybVBhc3N3b3JkKClcXFwiICNwdz48L1RleHRGaWVsZD5cXG5cXHRcXHRcXHQ8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImhyLWxpZ2h0XFxcIj48L1N0YWNrTGF5b3V0PlxcblxcdFxcdDwvU3RhY2tMYXlvdXQ+XFxuXFxuXFx0XFx0PFN0YWNrTGF5b3V0ICpuZ0lmPVxcXCIhaXNMb2dnaW5nSW5cXFwiIGNsYXNzPVxcXCJpbnB1dC1maWVsZFxcXCI+XFxuXFx0XFx0XFx0PFRleHRGaWVsZCBjbGFzcz1cXFwiaW5wdXRcXFwiIGhpbnQ9XFxcIkNvbmZpcm0gcGFzc3dvcmRcXFwiIHNlY3VyZT1cXFwidHJ1ZVxcXCIgWyhuZ01vZGVsKV09XFxcImNvbmZpcm1QYXNzd29yZFxcXCIgcmV0dXJuS2V5VHlwZT1cXFwiZG9uZVxcXCIgI2Nwdz48L1RleHRGaWVsZD5cXG5cXHRcXHRcXHQ8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImhyLWxpZ2h0XFxcIj48L1N0YWNrTGF5b3V0PlxcblxcdFxcdDwvU3RhY2tMYXlvdXQ+XFxuXFxuXFx0XFx0PEJ1dHRvbiBbdGV4dF09XFxcImlzTG9nZ2luZ0luID8gJ0xvZyBJbicgOiAnU2lnbiBVcCdcXFwiICh0YXApPVxcXCJzdWJtaXQoKVxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeSBtLXQtMjBcXFwiPjwvQnV0dG9uPlxcblxcdFxcdDxTdGFja0xheW91dD5cXG5cXHRcXHRcXHQ8RmFjZWJvb2tMb2dpbkJ1dHRvbiAodGFwKT1cXFwiZmJMb2dpbigpXFxcIiBjbGFzcz1cXFwiYnRuLWZiXFxcIj48L0ZhY2Vib29rTG9naW5CdXR0b24+XFxuXFx0XFx0PC9TdGFja0xheW91dD5cXG5cXHRcXHQ8TGFiZWwgKm5nSWY9XFxcImlzTG9nZ2luZ0luXFxcIiB0ZXh0PVxcXCJGb3Jnb3QgeW91ciBwYXNzd29yZD9cXFwiIGNsYXNzPVxcXCJsb2dpbi1sYWJlbFxcXCIgKHRhcCk9XFxcImZvcmdvdFBhc3N3b3JkKClcXFwiPjwvTGFiZWw+XFxuXFx0PC9TdGFja0xheW91dD5cXG5cXG5cXHQ8TGFiZWwgY2xhc3M9XFxcImxvZ2luLWxhYmVsIHNpZ24tdXAtbGFiZWxcXFwiICh0YXApPVxcXCJ0b2dnbGVGb3JtKClcXFwiPlxcblxcdFxcdDxGb3JtYXR0ZWRTdHJpbmc+XFxuXFx0XFx0XFx0PFNwYW4gW3RleHRdPVxcXCJpc0xvZ2dpbmdJbiA/ICdEb27igJl0IGhhdmUgYW4gYWNjb3VudD8gJyA6ICdCYWNrIHRvIExvZ2luJ1xcXCI+PC9TcGFuPlxcblxcdFxcdFxcdDxTcGFuIFt0ZXh0XT1cXFwiaXNMb2dnaW5nSW4gPyAnU2lnbiB1cCcgOiAnJ1xcXCIgY2xhc3M9XFxcImJvbGRcXFwiPjwvU3Bhbj5cXG5cXHRcXHQ8L0Zvcm1hdHRlZFN0cmluZz5cXG5cXHQ8L0xhYmVsPlxcbjwvRmxleGJveExheW91dD5cXG5cXG48QWN0aXZpdHlJbmRpY2F0b3IgI2FjdGl2aXR5SW5kaWNhdG9yIGJ1c3k9XFxcInRydWVcXFwiIHdpZHRoPVxcXCI0MFxcXCIgaGVpZ2h0PVxcXCI0MFxcXCIgY2xhc3M9XFxcImFjdGl2aXR5LWluZGljYXRvclxcXCI+XFxuPC9BY3Rpdml0eUluZGljYXRvcj5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQsIE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgYWxlcnQsIHByb21wdCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3NcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2UnO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgKiBhcyBmaXJlYmFzZSBmcm9tICduYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlJztcbmltcG9ydCB7IG1lc3NhZ2luZywgTWVzc2FnZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlL21lc3NhZ2luZ1wiO1xuaW1wb3J0IHsgTG9naW5jaGVja1NlcnZpY2UgfSBmcm9tICcuLi9sb2dpbmNoZWNrLnNlcnZpY2UudG5zJztcbmltcG9ydCB7IEFjdGl2aXR5SW5kaWNhdG9yIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9hY3Rpdml0eS1pbmRpY2F0b3InO1xuaW1wb3J0IHsgVHJhbnNmZXJTZXJ2aWNlIH0gZnJvbSAnLi4vZGF0YXRyYW5zZmVyLnNlcnZpY2UnO1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC13ZWxjb21lJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3dlbGNvbWUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi93ZWxjb21lLmNvbXBvbmVudC5jc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIFdlbGNvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBpc0xvZ2dpbmdJbiA9IHRydWU7XG4gIGVtYWlsO1xuICBwYXNzd29yZDtcbiAgY29uZmlybVBhc3N3b3JkO1xuICBmaXJzdE5hbWU7XG4gIGxhc3ROYW1lO1xuICBkZXZpY2VUb2tlbjtcbiAgZmlyZWJhc2VDb25maWcgPSB7XG4gICAgYXBpS2V5OiBcIkFJemFTeUJHdWlZcE0xMzhRNmF5cURNUlVWV0pwMUNFOVdCMDlOd1wiLFxuICBcdGF1dGhEb21haW46IFwiY29sbGVnZXBvb2wtMTU1Mjc0OTExODYxNy5maXJlYmFzZWFwcC5jb21cIixcbiAgXHRkYXRhYmFzZVVSTDogXCJodHRwczovL2NvbGxlZ2Vwb29sLTE1NTI3NDkxMTg2MTcuZmlyZWJhc2Vpby5jb21cIixcbiAgXHRwcm9qZWN0SWQ6IFwiY29sbGVnZXBvb2wtMTU1Mjc0OTExODYxN1wiLFxuICBcdHN0b3JhZ2VCdWNrZXQ6IFwiZ3M6Ly9jb2xsZWdlcG9vbC0xNTUyNzQ5MTE4NjE3LmFwcHNwb3QuY29tXCIsXG4gIFx0bWVzc2FnaW5nU2VuZGVySWQ6IFwiMzc1MjYzNjgwMTgzXCIsXG4gIFx0YXBwSWQ6IFwiMTozNzUyNjM2ODAxODM6d2ViOmYyYWYzZjI4MzU2MzhkN2NcIixcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2U6IFBhZ2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zLCBwcml2YXRlIGxvZ2luY2hlY2tTZXJ2aWNlOiBMb2dpbmNoZWNrU2VydmljZSwgcHJpdmF0ZSB0cmFuc2ZlclNlcnZpY2U6IFRyYW5zZmVyU2VydmljZSxcbiAgICBwcml2YXRlIG5nWm9uZTogTmdab25lKSB7IH1cblxuICBAVmlld0NoaWxkKFwiZW1cIiwgeyBzdGF0aWM6IHRydWUgfSkgZW06IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoXCJwd1wiLCB7IHN0YXRpYzogdHJ1ZSB9KSBwdzogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZChcImNwd1wiLCB7IHN0YXRpYzogdHJ1ZSB9KSBjcHc6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoXCJmblwiLCB7IHN0YXRpYzogdHJ1ZSB9KSBmbjogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZChcImxuXCIsIHsgc3RhdGljOiB0cnVlIH0pIGxuOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKFwid2VsY29tZUNvbnRhaW5lclwiLCB7IHN0YXRpYzogdHJ1ZSB9KSB3YzogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZChcImFjdGl2aXR5SW5kaWNhdG9yXCIsIHsgc3RhdGljOiB0cnVlIH0pIGFpOiBFbGVtZW50UmVmO1xuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucmVnaXN0ZXJOb3RpZmljYXRpb25zKCk7XG4gICAgdGhpcy5jcmVhdGVWaWV3cygpO1xuICB9XG5cbiAgYXN5bmMgY3JlYXRlVmlld3MoKSB7XG4gICAgYXdhaXQgZmlyZWJhc2UuaW5pdCh0aGlzLmZpcmViYXNlQ29uZmlnKS50aGVuKFxuICAgICAgKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcImZpcmViYXNlLmluaXQgZG9uZVwiKTtcbiAgICAgIH0sXG4gICAgICBlcnJvciA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBmaXJlYmFzZS5pbml0IGVycm9yOiAke2Vycm9yfWApO1xuICAgICAgfVxuICAgICk7XG4gICAgYXdhaXQgZmlyZWJhc2UuYWRkT25NZXNzYWdlUmVjZWl2ZWRDYWxsYmFjayhhc3luYyAobWVzc2FnZTogYW55KSA9PiB7XG4gICAgICBpZihtZXNzYWdlLnR5cGUgPT09IFwiTmV3IE1lc3NhZ2VcIikge1xuICAgICAgICB0aGlzLnRyYW5zZmVyU2VydmljZS5zZXREYXRhKG1lc3NhZ2UuZGF0YS5jaGF0SWQpO1xuICAgICAgICBhd2FpdCB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge3RoaXMucm91dGVyLm5hdmlnYXRlKFsnY2hhdCddLCB7Y2xlYXJIaXN0b3J5OiB0cnVlfSl9KVxuICAgICAgfVxuICAgIH0pXG4gICAgaWYgKHRoaXMubG9naW5jaGVja1NlcnZpY2UuZ2V0VXNlckZyb21Mb2NhbFN0b3JhZ2UoKSAhPSBudWxsKVxuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWyduYXZpZ2F0aW9uJ10sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xuICAgIGVsc2Uge1xuICAgICAgdmFyIGFjdGl2aXR5SW5kaWNhdG9yID0gPEFjdGl2aXR5SW5kaWNhdG9yPnRoaXMuYWkubmF0aXZlRWxlbWVudDtcbiAgICAgIGFjdGl2aXR5SW5kaWNhdG9yLmJ1c3kgPSBmYWxzZTtcbiAgICAgIHRoaXMud2MubmF0aXZlRWxlbWVudC5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgIH1cbiAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcbiAgfVxuXG4gIHRvZ2dsZUZvcm0oKSB7XG4gICAgdGhpcy5pc0xvZ2dpbmdJbiA9ICF0aGlzLmlzTG9nZ2luZ0luO1xuICB9XG5cbiAgc3VibWl0KCkge1xuICAgIGlmICghdGhpcy5lbWFpbCB8fCAhdGhpcy5wYXNzd29yZCkge1xuICAgICAgdGhpcy5hbGVydChcIlBsZWFzZSBwcm92aWRlIGJvdGggYW4gZW1haWwgYWRkcmVzcyBhbmQgcGFzc3dvcmRcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaXNMb2dnaW5nSW4pIHtcbiAgICAgIHRoaXMubG9naW4oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZWdpc3RlcigpO1xuICAgIH1cbiAgfVxuXG4gIGxvZ2luKCkge1xuICAgIHZhciBjcmVkZW50aWFsczogZmlyZWJhc2UuTG9naW5PcHRpb25zID0ge1xuICAgICAgcGFzc3dvcmRPcHRpb25zOiB7XG4gICAgICAgIGVtYWlsOiB0aGlzLmVtYWlsLFxuICAgICAgICBwYXNzd29yZDogdGhpcy5wYXNzd29yZCxcbiAgICAgIH0sXG4gICAgICB0eXBlOiBmaXJlYmFzZS5Mb2dpblR5cGUuUEFTU1dPUkRcbiAgICB9XG4gICAgZmlyZWJhc2UubG9naW4oY3JlZGVudGlhbHMpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgY29uc29sZS5sb2cocmVzKTtcbiAgICAgIHRoaXMubG9naW5jaGVja1NlcnZpY2UubG9naW5Vc2VyKHJlcy51aWQpXG4gICAgICBmaXJlYmFzZS5maXJlc3RvcmUuY29sbGVjdGlvbigndXNlcnMnKS5kb2MocmVzLnVpZCkuZ2V0KCkudGhlbihkb2MgPT4ge1xuICAgICAgICBpZiAoZG9jLmRhdGEoKS5wYXltZW50X2lkID09IG51bGwpXG4gICAgICAgICAgdGhpcy5sb2dpbmNoZWNrU2VydmljZS5hZGRVc2VyVG9CcmFpbnRyZWUocmVzLmRpc3BsYXlOYW1lLCByZXMuZGlzcGxheU5hbWUsIHJlcy5lbWFpbClcbiAgICAgIH0pXG4gICAgICB0aGlzLnVwZGF0ZVRva2VucyhyZXMudWlkKTtcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnbmF2aWdhdGlvbiddLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcbiAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgdGhpcy5hbGVydChcIldlIGNvdWxkIG5vdCBmaW5kIGFuIGFjY291bnQgbWF0Y2hpbmcgeW91ciBlbWFpbCBvciBwYXNzd29yZFwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9KVxuICB9XG5cbiAgcmVnaXN0ZXIoKSB7XG5cdCAgaWYgKHRoaXMucGFzc3dvcmQgIT0gdGhpcy5jb25maXJtUGFzc3dvcmQpIHtcblx0ICAgIHRoaXMuYWxlcnQoXCJZb3VyIHBhc3N3b3JkcyBkbyBub3QgbWF0Y2hcIik7XG5cdCAgICByZXR1cm47XG4gIFx0fVxuICBcdGZpcmViYXNlLmNyZWF0ZVVzZXIoe1xuICBcdFx0ZW1haWw6IHRoaXMuZW1haWwsXG4gIFx0XHRwYXNzd29yZDogdGhpcy5wYXNzd29yZCxcbiAgXHR9KS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgdGhpcy5sb2dpbmNoZWNrU2VydmljZS5hZGRVc2VyVG9GaXJlc3RvcmUocmVzLnVpZCwgbnVsbCwgbnVsbCwgcmVzLmVtYWlsLCB0aGlzLmZpcnN0TmFtZSwgdGhpcy5sYXN0TmFtZSwgbnVsbCwgbnVsbCwgMCwgMCwgJ34vaW1nL3NhbXBsZV9wcm9maWxlLnBuZycsIHRoaXMuZGV2aWNlVG9rZW4pXG4gICAgICAgIGZpcmViYXNlLnVwZGF0ZVByb2ZpbGUoe2Rpc3BsYXlOYW1lOiB0aGlzLmZpcnN0TmFtZSArICcgJyArIHRoaXMubGFzdE5hbWV9KS50aGVuKCk7XG4gICAgICAgIHRoaXMubG9naW5jaGVja1NlcnZpY2UubG9naW5Vc2VyKHJlcy51aWQpXG4gICAgICAgIHRoaXMubG9naW5jaGVja1NlcnZpY2UuYWRkVXNlclRvQnJhaW50cmVlKCd0ZXN0JywgJ3Rlc3QgdXNlcicsIHJlcy5lbWFpbClcbiAgICAgIFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUoWyduYXZpZ2F0aW9uJ10sIHtjbGVhckhpc3Rvcnk6IHRydWV9KTtcbiAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgaWYoZXJyID09ICdDcmVhdGluZyBhIHVzZXIgZmFpbGVkLiBjb20uZ29vZ2xlLmZpcmViYXNlLmF1dGguRmlyZWJhc2VBdXRoVXNlckNvbGxpc2lvbkV4Y2VwdGlvbjogVGhlIGVtYWlsIGFkZHJlc3MgaXMgYWxyZWFkeSBpbiB1c2UgYnkgYW5vdGhlciBhY2NvdW50LicpXG4gICAgICAgICAgdGhpcy5hbGVydCgnVGhlcmUgaXMgYWxyZWFkeSBhbiBhY2NvdW50IGFzc29jaWF0ZWQgd2l0aCB0aGF0IGVtYWlsJylcbiAgICAgICAgZWxzZSBpZiAoZXJyID09ICdDcmVhdGluZyBhIHVzZXIgZmFpbGVkLiBQYXNzd29yZCBzaG91bGQgYmUgYXQgbGVhc3QgNiBjaGFyYWN0ZXJzJylcbiAgICAgICAgICB0aGlzLmFsZXJ0KCdQYXNzd29yZCBtdXN0IGJlIGF0IGxlYXN0IDYgY2hhcmFjdGVycycpXG4gIFx0XHRjb25zb2xlLmxvZyhlcnIpO1xuICBcdFx0cmV0dXJuO1xuICAgICAgfSlcbiAgfVxuXG4gIGZvcmdvdFBhc3N3b3JkKCkge1xuICAgIHByb21wdCh7XG4gICAgICB0aXRsZTogXCJGb3Jnb3QgUGFzc3dvcmRcIixcbiAgICAgIG1lc3NhZ2U6IFwiRW50ZXIgdGhlIGVtYWlsIGFkZHJlc3MgeW91IHVzZWQgdG8gcmVnaXN0ZXIgZm9yIENvbGxlZ2VQb29sIHRvIHJlc2V0IHlvdXIgcGFzc3dvcmRcIixcbiAgICAgIGlucHV0VHlwZTogXCJlbWFpbFwiLFxuICAgICAgZGVmYXVsdFRleHQ6IFwiXCIsXG4gICAgICBva0J1dHRvblRleHQ6IFwiT2tcIixcbiAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiQ2FuY2VsXCJcbiAgICB9KS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBpZiAoZGF0YS5yZXN1bHQpXG4gICAgICAgIGZpcmViYXNlLnNlbmRQYXNzd29yZFJlc2V0RW1haWwoZGF0YS50ZXh0KS50aGVuKFxuICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYWxlcnQoJ0FuIGVtYWlsIGhhcyBiZWVuIHNlbnQgdG8gJyArIGRhdGEudGV4dCArICcgd2l0aCBkZXRhaWxzIG9mIGhvdyB0byByZWNvdmVyIHlvdXIgYWNjb3VudCcpXG4gICAgICAgICAgfSxcbiAgICAgICAgICAoZXJyb3JNZXNzYWdlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmFsZXJ0KCdObyBhY2NvdW50IGNvdWxkIGJlIGZvdW5kIHdpdGggeW91ciBlbWFpbCcpXG4gICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgcmVnaXN0ZXJOb3RpZmljYXRpb25zKCkge1xuICAgIG1lc3NhZ2luZy5yZWdpc3RlckZvclB1c2hOb3RpZmljYXRpb25zKHtcbiAgICAgIG9uUHVzaFRva2VuUmVjZWl2ZWRDYWxsYmFjazogKHRva2VuOiBzdHJpbmcpOiB2b2lkID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJGaXJlYmFzZSBwbHVnaW4gcmVjZWl2ZWQgYSBwdXNoIHRva2VuOiBcIiArIHRva2VuKTtcbiAgICAgICAgdGhpcy5kZXZpY2VUb2tlbiA9IHRva2VuO1xuICAgICAgfSxcblxuICAgICAgb25NZXNzYWdlUmVjZWl2ZWRDYWxsYmFjazogKG1lc3NhZ2U6IE1lc3NhZ2UpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJQdXNoIG1lc3NhZ2UgcmVjZWl2ZWQ6IFwiICsgbWVzc2FnZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTWVzc2FnZSBkYXRhOiBcIiArIG1lc3NhZ2UuZGF0YSk7XG4gICAgICB9LFxuXG4gICAgICAvLyBXaGV0aGVyIHlvdSB3YW50IHRoaXMgcGx1Z2luIHRvIGF1dG9tYXRpY2FsbHkgZGlzcGxheSB0aGUgbm90aWZpY2F0aW9ucyBvciBqdXN0IG5vdGlmeSB0aGUgY2FsbGJhY2suIEN1cnJlbnRseSB1c2VkIG9uIGlPUyBvbmx5LiBEZWZhdWx0IHRydWUuXG4gICAgICBzaG93Tm90aWZpY2F0aW9uczogdHJ1ZSxcblxuICAgICAgLy8gV2hldGhlciB5b3Ugd2FudCB0aGlzIHBsdWdpbiB0byBhbHdheXMgaGFuZGxlIHRoZSBub3RpZmljYXRpb25zIHdoZW4gdGhlIGFwcCBpcyBpbiBmb3JlZ3JvdW5kLiBDdXJyZW50bHkgdXNlZCBvbiBpT1Mgb25seS4gRGVmYXVsdCBmYWxzZS5cbiAgICAgIHNob3dOb3RpZmljYXRpb25zV2hlbkluRm9yZWdyb3VuZDogZmFsc2VcbiAgICB9KS50aGVuKCgpID0+IGNvbnNvbGUubG9nKFwiUmVnaXN0ZXJlZCBmb3IgcHVzaFwiKSk7XG4gIH1cblxuICB1cGRhdGVUb2tlbnModWlkKSB7XG4gICAgY29uc3QgdXNlckRvY3VtZW50ID0gZmlyZWJhc2UuZmlyZXN0b3JlLmNvbGxlY3Rpb24oJ3VzZXJzJykuZG9jKHVpZCk7XG4gICAgdXNlckRvY3VtZW50LmdldCgpLnRoZW4oYXN5bmMgKGRvYykgPT4ge1xuICAgICAgbGV0IHRva2VucyA9IGRvYy5kYXRhKCkudG9rZW5zO1xuICAgICAgaWYodG9rZW5zKSB7XG4gICAgICAgIHRva2Vucy5wdXNoKHRoaXMuZGV2aWNlVG9rZW4pO1xuICAgICAgICBsZXQgdXBkYXRlZFRva2VucyA9IEFycmF5LmZyb20obmV3IFNldCh0b2tlbnMpKTtcbiAgICAgICAgdXNlckRvY3VtZW50LnVwZGF0ZSh7XG4gICAgICAgICAgdG9rZW5zOiB1cGRhdGVkVG9rZW5zXG4gICAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdXNlckRvY3VtZW50LnVwZGF0ZSh7XG4gICAgICAgICAgdG9rZW5zOiBbdGhpcy5kZXZpY2VUb2tlbl1cbiAgICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIGNvbnN0IGNoYXRQcm9taXNlID0gYXdhaXQgdGhpcy51cGRhdGVDaGF0VG9rZW5zKGRvYy5kYXRhKCkuY2hhdHMpO1xuICAgIH0pLmNhdGNoKChlcnIpID0+IHsgY29uc29sZS5sb2coZXJyKSB9KVxuICB9XG5cbiAgYXN5bmMgdXBkYXRlQ2hhdFRva2VucyhjaGF0cykge1xuICAgIGxldCBjaGF0Q29sbGVjdGlvbiA9IGZpcmViYXNlLmZpcmVzdG9yZS5jb2xsZWN0aW9uKCdjaGF0cycpO1xuICAgIGZvcih2YXIgaSA9IDA7IGkgPCBjaGF0cy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgY2hhdFByb21pc2UgPSBhd2FpdCBjaGF0Q29sbGVjdGlvbi5kb2MoY2hhdHNbaV0pLmdldCgpLnRoZW4oYXN5bmMgKGRvYykgPT4ge1xuICAgICAgICBjb25zdCB0b2tlbnMgPSBkb2MuZGF0YSgpLnRva2VucztcbiAgICAgICAgdG9rZW5zLnB1c2godGhpcy5kZXZpY2VUb2tlbik7XG4gICAgICAgIGNvbnN0IG5ld1Rva2VucyA9IEFycmF5LmZyb20obmV3IFNldCh0b2tlbnMpKTtcbiAgICAgICAgY29uc3QgdXBkYXRlUHJvbWlzZSA9IGF3YWl0IGNoYXRDb2xsZWN0aW9uLmRvYyhjaGF0c1tpXSkudXBkYXRlKHt0b2tlbnM6IG5ld1Rva2Vuc30pO1xuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBmb2N1c0VtYWlsKCkge1xuICAgIHRoaXMuZW0ubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICB9XG5cbiAgZm9jdXNMYXN0TmFtZSgpIHtcbiAgICB0aGlzLmxuLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgfVxuXG4gIGZvY3VzUGFzc3dvcmQoKSB7XG4gICAgdGhpcy5wdy5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gIH1cblxuICBmb2N1c0NvbmZpcm1QYXNzd29yZCgpIHtcbiAgICBpZiAoIXRoaXMuaXNMb2dnaW5nSW4pIHtcbiAgICAgIHRoaXMuY3B3Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICBhbGVydChtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gYWxlcnQoe1xuICAgICAgdGl0bGU6IFwiQ29sbGVnZVBvb2xcIixcbiAgICAgIG9rQnV0dG9uVGV4dDogXCJDbG9zZVwiLFxuICAgICAgbWVzc2FnZTogbWVzc2FnZVxuICAgIH0pO1xuICB9XG5cbiAgZmJMb2dpbigpIHtcbiAgICB0aGlzLndjLm5hdGl2ZUVsZW1lbnQuc3R5bGUudmlzaWJpbGl0eSA9ICdjb2xsYXBzZSc7XG4gICAgdmFyIGFjdGl2aXR5SW5kaWNhdG9yID0gPEFjdGl2aXR5SW5kaWNhdG9yPnRoaXMuYWkubmF0aXZlRWxlbWVudDtcbiAgICBhY3Rpdml0eUluZGljYXRvci5idXN5ID0gdHJ1ZTtcbiAgICBmaXJlYmFzZS5sb2dpbih7XG4gICAgICB0eXBlOiBmaXJlYmFzZS5Mb2dpblR5cGUuRkFDRUJPT0ssXG4gICAgICAvLyBPcHRpb25hbFxuICAgICAgZmFjZWJvb2tPcHRpb25zOiB7XG4gICAgICAgIC8vIGRlZmF1bHRzIHRvIFsncHVibGljX3Byb2ZpbGUnLCAnZW1haWwnXVxuICAgICAgICBzY29wZXM6IFsncHVibGljX3Byb2ZpbGUnLCAnZW1haWwnLCAndXNlcl9iaXJ0aGRheScsICd1c2VyX2dlbmRlciddIC8vIG5vdGU6IHRoaXMgcHJvcGVydHkgd2FzIHJlbmFtZWQgZnJvbSBcInNjb3BlXCIgaW4gOC40LjBcbiAgICAgIH1cbiAgICB9KS50aGVuKFxuICAgICAgICAocmVzKSA9PiB7XG4gICAgICAgICAgZmlyZWJhc2UuZmlyZXN0b3JlLmNvbGxlY3Rpb24oJ3VzZXJzJykuZG9jKHJlcy51aWQpLmdldCgpLnRoZW4oZG9jID0+IHtcbiAgICAgICAgICAgIGlmKGRvYy5leGlzdHMgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgdGhpcy5sb2dpbmNoZWNrU2VydmljZS5hZGRVc2VyVG9GaXJlc3RvcmUocmVzLnVpZCwgbnVsbCwgbnVsbCwgcmVzLmVtYWlsLCByZXMuYWRkaXRpb25hbFVzZXJJbmZvLnByb2ZpbGVbJ2ZpcnN0X25hbWUnXSwgcmVzLmFkZGl0aW9uYWxVc2VySW5mby5wcm9maWxlWydsYXN0X25hbWUnXSwgbnVsbCwgbnVsbCwgMCwgMCwgcmVzLnBob3RvVVJMLCB0aGlzLmRldmljZVRva2VuKTtcbiAgICAgICAgICAgICAgdGhpcy5sb2dpbmNoZWNrU2VydmljZS5hZGRVc2VyVG9CcmFpbnRyZWUocmVzLmRpc3BsYXlOYW1lLCByZXMuZGlzcGxheU5hbWUsIHJlcy5lbWFpbClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYoZG9jLmRhdGEoKS5wYXltZW50X2lkID09IG51bGwpIHtcbiAgICAgICAgICAgICAgdGhpcy5sb2dpbmNoZWNrU2VydmljZS5hZGRVc2VyVG9CcmFpbnRyZWUocmVzLmRpc3BsYXlOYW1lLCByZXMuZGlzcGxheU5hbWUsIHJlcy5lbWFpbClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVRva2VucyhyZXMudWlkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICAgIHRoaXMubG9naW5jaGVja1NlcnZpY2UubG9naW5Vc2VyKHJlcy51aWQpXG4gICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWyduYXZpZ2F0aW9uJ10sIHtjbGVhckhpc3Rvcnk6IHRydWV9KTtcbiAgICAgICAgfSxcbiAgICAgICAgKGVycm9yTWVzc2FnZSkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yTWVzc2FnZSk7XG4gICAgICAgICAgdGhpcy53Yy5uYXRpdmVFbGVtZW50LnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gICAgICAgIH1cbiAgICApO1xuXG4gIH1cblxufVxuIiwiLy8gdGhpcyBpbXBvcnQgc2hvdWxkIGJlIGZpcnN0IGluIG9yZGVyIHRvIGxvYWQgc29tZSByZXF1aXJlZCBzZXR0aW5ncyAobGlrZSBnbG9iYWxzIGFuZCByZWZsZWN0LW1ldGFkYXRhKVxuaW1wb3J0IHsgcGxhdGZvcm1OYXRpdmVTY3JpcHREeW5hbWljIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcGxhdGZvcm0nO1xuXG5cbmltcG9ydCB7IEFwcE1vZHVsZSB9IGZyb20gJy4vYXBwL2FwcC5tb2R1bGUnO1xuaW1wb3J0IHtyZWdpc3RlckVsZW1lbnR9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9lbGVtZW50LXJlZ2lzdHJ5XCI7XG5cbnJlZ2lzdGVyRWxlbWVudChcIlJpcHBsZVwiLCAoKSA9PiByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXJpcHBsZVwiKS5SaXBwbGUpO1xuLy8gaW1wb3J0IEFtcGxpZnkgZnJvbSBcIkBhd3MtYW1wbGlmeS9jb3JlXCI7XG4vLyByZXF1aXJlKCduYXRpdmVzY3JpcHQtbm9kZWlmeScpXG4vLyBpbXBvcnQgYXdzY29uZmlnIGZyb20gJy4vYXdzLWV4cG9ydHMnO1xuXG4vLyBBbXBsaWZ5LmNvbmZpZ3VyZShhd3Njb25maWcpO1xuXG4vLyBBIHRyYWRpdGlvbmFsIE5hdGl2ZVNjcmlwdCBhcHBsaWNhdGlvbiBzdGFydHMgYnkgaW5pdGlhbGl6aW5nIGdsb2JhbCBvYmplY3RzLCBzZXR0aW5nIHVwIGdsb2JhbCBDU1MgcnVsZXMsIGNyZWF0aW5nLCBhbmQgbmF2aWdhdGluZyB0byB0aGUgbWFpbiBwYWdlLiBcbi8vIEFuZ3VsYXIgYXBwbGljYXRpb25zIG5lZWQgdG8gdGFrZSBjYXJlIG9mIHRoZWlyIG93biBpbml0aWFsaXphdGlvbjogbW9kdWxlcywgY29tcG9uZW50cywgZGlyZWN0aXZlcywgcm91dGVzLCBESSBwcm92aWRlcnMuIFxuLy8gQSBOYXRpdmVTY3JpcHQgQW5ndWxhciBhcHAgbmVlZHMgdG8gbWFrZSBib3RoIHBhcmFkaWdtcyB3b3JrIHRvZ2V0aGVyLCBzbyB3ZSBwcm92aWRlIGEgd3JhcHBlciBwbGF0Zm9ybSBvYmplY3QsIHBsYXRmb3JtTmF0aXZlU2NyaXB0RHluYW1pYywgXG4vLyB0aGF0IHNldHMgdXAgYSBOYXRpdmVTY3JpcHQgYXBwbGljYXRpb24gYW5kIGNhbiBib290c3RyYXAgdGhlIEFuZ3VsYXIgZnJhbWV3b3JrLlxucGxhdGZvcm1OYXRpdmVTY3JpcHREeW5hbWljKCkuYm9vdHN0cmFwTW9kdWxlKEFwcE1vZHVsZSk7XG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==