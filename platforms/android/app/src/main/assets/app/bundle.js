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

/***/ "./app.css":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports = module.exports = __webpack_require__("../node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
exports.i(__webpack_require__("../node_modules/css-loader/dist/cjs.js?!../node_modules/nativescript-theme-core/css/core.light.css"), "");

// Module
exports.push([module.i, "/*\r\nIn NativeScript, the app.css file is where you place CSS rules that\r\nyou would like to apply to your entire application. Check out\r\nhttp://docs.nativescript.org/ui/styling for a full list of the CSS\r\nselectors and properties you can use to style UI components.\r\n\r\n/*\r\nIn many cases you may want to use the NativeScript core theme instead\r\nof writing your own CSS rules. For a full list of class names in the theme\r\nrefer to http://docs.nativescript.org/ui/theme.\r\n*/\r\n\r\nLabel {\r\n\ttext-align: center;\r\n}", ""]);

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

module.exports = "/* Add mobile styles for the component here.  */\r\n.close {\r\n\tmargin: 10;\r\n\tfont-size: 28;\r\n\twidth: 48;\r\n\theight: 48;\r\n}\r\n\r\n.close-button-container {\r\n\tposition: absolute;\r\n\tleft: 0;\r\n}\r\n\r\n/* styles from payments.component.css */\r\n\r\n#form {\r\n    margin: auto;\r\n    width: 600px;\r\n    height: 400px;\r\n    background-color: #ffffff;\r\n    position: relative;\r\n    top: 30px;\r\n    border-radius: 4px;\r\n    box-shadow: 0 1px 4px 0 rgba(0,0,0,0.37);\r\n}\r\n\r\n#payment-form {\r\n    margin: auto;\r\n    width: 600px;\r\n    height: 400px;\r\n    background-color: #ffffff;\r\n    position: relative;\r\n    top: 30px;\r\n    border-radius: 4px;\r\n    box-shadow: 0 1px 4px 0 rgba(0,0,0,0.37);\r\n    display: none;\r\n}\r\n\r\n#card-form {\r\n    margin: auto;\r\n    width: 400px;\r\n    background-color: #580968;\r\n    position: relative;\r\n    top: 25%;\r\n    box-shadow: 0 1px 4px 0 rgba(0,0,0,0.37);\r\n    font-weight: 400;\r\n    z-index: 1;\r\n}\r\n\r\n#paypal-form {\r\n    margin: auto;\r\n    width: 400px;\r\n    height: 200px;\r\n    background-color: #ffffff;\r\n    position: relative;\r\n    top: 25%;\r\n    box-shadow: 0 1px 4px 0 rgba(0,0,0,0.37);\r\n    font-weight: 400;\r\n    z-index: 1;\r\n}\r\n\r\n#venmo-form {\r\n    margin: auto;\r\n    width: 400px;\r\n    height: 200px;\r\n    background-color: #ffffff;\r\n    position: relative;\r\n    top: 25%;\r\n    box-shadow: 0 1px 4px 0 rgba(0,0,0,0.37);\r\n    font-weight: 400;\r\n    z-index: 1;\r\n}\r\n\r\n#error-form {\r\n    margin: auto;\r\n    width: 400px;\r\n    height: 200px;\r\n    background-color: #ffffff;\r\n    position: relative;\r\n    top: 25%;\r\n    box-shadow: 0 1px 4px 0 rgba(0,0,0,0.37);\r\n    font-weight: 400;\r\n    z-index: 1;\r\n}\r\n\r\n#edit-form {\r\n    margin: auto;\r\n    width: 400px;\r\n    height: 200px;\r\n    background-color: #ffffff;\r\n    position: relative;\r\n    top: 25%;\r\n    box-shadow: 0 1px 4px 0 rgba(0,0,0,0.37);\r\n    font-weight: 400;\r\n    z-index: 1;\r\n}\r\n\r\n.payment-methods {\r\n\toverflow: hidden;\r\n    width: 300px;\r\n    margin: auto;\r\n    margin-left: 40px;\r\n}\r\n\r\n#modal-payment-methods {\r\n\tmargin-left: 24px;\r\n}\r\n\r\n#paypal-header-container {\r\n\tbackground-color: #580968;\r\n}\r\n\r\n#error-header-container {\r\n\tdisplay: none;\r\n\tbackground-color: #890000;\r\n}\r\n\r\n#edit-header-container {\r\n\tbackground-color: #580968;\r\n}\r\n\r\n.colored-header {\r\n\tcolor: white;\r\n\tfont-weight: 400;\r\n}\r\n\r\n#method-information-text {\r\n\tmargin-left: 40px;\r\n\tmargin-top: 32px;\r\n\tfont-size: 16px;\r\n}\r\n\r\n.payment-footer-button{\r\n    display: inline-block;\r\n    background-color: #ffffff;\r\n    color: #ac00e6;\r\n    border: none;\r\n    outline: none;\r\n    text-align: center;\r\n    margin-left: 34px;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n#paypal-button {\r\n\twidth: 350px;\r\n\tmargin: auto;\r\n\tmargin-top: 32px;\r\n}\r\n\r\n#add-card-button {\r\n\tfloat: right;\r\n\tmargin-right: 34px;\r\n\tdisplay: none;\r\n}\r\n\r\n#remove-payment-button {\r\n\tfloat: right;\r\n\tmargin-right: 34px;\r\n}\r\n\r\n.plus-sign {\r\n\tvertical-align: middle;\r\n\tfont-size: 30px;\r\n\tmargin-right: 7px;\r\n\tcursor: pointer;\r\n}\r\n\r\n.payment-footer-text {\r\n\tvertical-align: middle;\r\n\tline-height: 42px;\r\n\tfont-weight: 400;\r\n\tfont-size: 13px;\r\n\tcursor: pointer;\r\n}\r\n\r\n.payment-footer-text:hover {\r\n\ttext-decoration: underline;\r\n}\r\n\r\n.payments-bottom-add-container {\r\n\tposition: absolute;\r\n\twidth: 100%;\r\n\tbottom: 0;\r\n}\r\n\r\n/* Other modal styling in styles.css */\r\n.close-modal {\r\n\tfont-size: 24px;\r\n\tmargin-right: 20px;\r\n\tcursor: pointer;\r\n}\r\n\r\n/*--------------------\r\nShared Variables\r\n--------------------*/\r\n/*--------------------\r\nGeneral\r\n--------------------*/\r\nhtml,\r\nbody {\r\n  font-size: 100%;\r\n  height: 100%;\r\n  color: #282c37;\r\n  font-family: sans-serif;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n.form-container {\r\n  display: flex;\r\n  background-color: #EEE;\r\n  justify-content: center;\r\n  align-items: center;\r\n  height: 100%;\r\n  flex-direction: column;\r\n  border: 1em solid #fff;\r\n  box-sizing: border-box;\r\n  position: relative;\r\n}\r\n@media (max-width: 476px) {\r\n  .form-container {\r\n    border: none;\r\n  }\r\n}\r\n\r\n.cardinfo-wrapper {\r\n  display: flex;\r\n  justify-content: space-around;\r\n}\r\n\r\n.bg-illustration {\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 0;\r\n  z-index: 0;\r\n}\r\n.bg-illustration svg {\r\n  width: 100%;\r\n}\r\n\r\n.card-shape, #my-sample-form.visa, #my-sample-form.master-card, #my-sample-form.maestro, #my-sample-form.american-express, #my-sample-form.discover, #my-sample-form.unionpay, #my-sample-form.jcb, #my-sample-form.diners-club {\r\n  border-radius: 6px;\r\n  padding: 2em 2em 1em;\r\n}\r\n@media (max-width: 476px) {\r\n  .card-shape, #my-sample-form.visa, #my-sample-form.master-card, #my-sample-form.maestro, #my-sample-form.american-express, #my-sample-form.discover, #my-sample-form.unionpay, #my-sample-form.jcb, #my-sample-form.diners-club {\r\n    padding: 2em 1.5em 1em;\r\n  }\r\n}\r\n\r\n#payment-card-form {\r\n  background-color: #FFF;\r\n  /*box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12);*/\r\n  padding: 1em 3em 3em;\r\n  margin-bottom: 2em;\r\n/*  transition: all 600ms cubic-bezier(0.2, 1.3, 0.7, 1);\r\n  -webkit-animation: cardIntro 500ms cubic-bezier(0.2, 1.3, 0.7, 1);\r\n          animation: cardIntro 500ms cubic-bezier(0.2, 1.3, 0.7, 1);*/\r\n  /*z-index: 1;*/\r\n}\r\n#my-sample-form:hover {\r\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.06);\r\n}\r\n@media (max-width: 476px) {\r\n  #my-sample-form {\r\n    box-sizing: border-box;\r\n    padding: 7em 2em 2em;\r\n    width: 100%;\r\n  }\r\n}\r\n#my-sample-form.visa {\r\n  color: #fff;\r\n  background-color: #0D4AA2;\r\n}\r\n#my-sample-form.master-card {\r\n  color: #fff;\r\n  background-color: #363636;\r\n  background: linear-gradient(115deg, #d82332, #d82332 50%, #f1ad3d 50%, #f1ad3d);\r\n}\r\n#my-sample-form.maestro {\r\n  color: #fff;\r\n  background-color: #363636;\r\n  background: linear-gradient(115deg, #009ddd, #009ddd 50%, #ed1c2e 50%, #ed1c2e);\r\n}\r\n#my-sample-form.american-express {\r\n  color: #fff;\r\n  background-color: #007CC3;\r\n}\r\n#my-sample-form.discover {\r\n  color: #fff;\r\n  background-color: #ff6000;\r\n  background: linear-gradient(#d14310, #f7961e);\r\n}\r\n#my-sample-form.unionpay, #my-sample-form.jcb, #my-sample-form.diners-club {\r\n  color: #fff;\r\n  background-color: #363636;\r\n}\r\n\r\n.cardinfo-label {\r\n  display: block;\r\n  font-size: 11px;\r\n  margin-bottom: 0.5em;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.cardinfo-exp-date {\r\n  margin-right: 1em;\r\n  width: 100%;\r\n}\r\n\r\n.cardinfo-cvv {\r\n  width: 100%;\r\n}\r\n\r\n.cardinfo-card-number {\r\n  position: relative;\r\n}\r\n\r\n#cardImage {\r\n  position: absolute;\r\n  top: 2em;\r\n  right: 1em;\r\n  width: 44px;\r\n  height: 28px;\r\n  background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/346994/card_sprite.png);\r\n  background-size: 86px 458px;\r\n  border-radius: 4px;\r\n  background-position: -100px 0;\r\n  background-repeat: no-repeat;\r\n  margin-bottom: 1em;\r\n}\r\n#cardImage.visa {\r\n  background-position: 0 -398px;\r\n}\r\n#cardImage.master-card {\r\n  background-position: 0 -281px;\r\n}\r\n#cardImage.american-express {\r\n  background-position: 0 -370px;\r\n}\r\n#cardImage.discover {\r\n  background-position: 0 -163px;\r\n}\r\n#cardImage.maestro {\r\n  background-position: 0 -251px;\r\n}\r\n#cardImage.jcb {\r\n  background-position: 0 -221px;\r\n}\r\n#cardImage.diners-club {\r\n  background-position: 0 -133px;\r\n}\r\n\r\n/*--------------------\r\nInputs \r\n--------------------*/\r\n.input-wrapper {\r\n  border-radius: 2px;\r\n  background: rgba(255, 255, 255, 0.86);\r\n  height: 2.75em;\r\n  border: 1px solid #eee;\r\n  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.06);\r\n  padding: 5px 10px;\r\n  margin-bottom: 1em;\r\n}\r\n\r\n.cardinfo-card-number,\r\n.cardinfo-exp-date,\r\n.cardinfo-cvv {\r\n  transition: -webkit-transform 0.3s;\r\n  transition: transform 0.3s;\r\n  transition: transform 0.3s, -webkit-transform 0.3s;\r\n}\r\n\r\n.braintree-hosted-fields-focused {\r\n  border-color: #5db6e8;\r\n}\r\n\r\n.braintree-hosted-fields-invalid {\r\n  border-color: #E53A40;\r\n/*  -webkit-animation: shake 500ms cubic-bezier(0.2, 1.3, 0.7, 1) both;\r\n          animation: shake 500ms cubic-bezier(0.2, 1.3, 0.7, 1) both;*/\r\n  -webkit-transform: translate3d(0, 0, 0);\r\n          transform: translate3d(0, 0, 0);\r\n  -webkit-backface-visibility: hidden;\r\n          backface-visibility: hidden;\r\n  -webkit-perspective: 1000px;\r\n          perspective: 1000px;\r\n}\r\n\r\n.loader {\r\n  border: 16px solid #f3f3f3; /* Light grey */\r\n  border-top: 16px solid #ac00e6; /* Purple */\r\n  border-radius: 50%;\r\n  width: 120px;\r\n  height: 120px;\r\n  animation: spin 2s linear infinite;\r\n  margin: auto;\r\n}\r\n\r\n#loading-circle {\r\n  top: 12%;\r\n  left: 30%;\r\n  position: absolute;\r\n}\r\n\r\n#list-loading-circle {\r\n\tmargin-top: 50px;\r\n}\r\n\r\n/*--------------------\r\nAnimations\r\n--------------------*/\r\n@keyframes spin {\r\n  0% { transform: rotate(0deg); }\r\n  100% { transform: rotate(360deg); }\r\n}\r\n\r\n@-webkit-keyframes shake {\r\n  10%,\r\n  90% {\r\n    -webkit-transform: translate3d(-1px, 0, 0);\r\n            transform: translate3d(-1px, 0, 0);\r\n  }\r\n  20%,\r\n  80% {\r\n    -webkit-transform: translate3d(1px, 0, 0);\r\n            transform: translate3d(1px, 0, 0);\r\n  }\r\n  30%,\r\n  50%,\r\n  70% {\r\n    -webkit-transform: translate3d(-3px, 0, 0);\r\n            transform: translate3d(-3px, 0, 0);\r\n  }\r\n  40%,\r\n  60% {\r\n    -webkit-transform: translate3d(3px, 0, 0);\r\n            transform: translate3d(3px, 0, 0);\r\n  }\r\n}\r\n@keyframes shake {\r\n  10%,\r\n  90% {\r\n    -webkit-transform: translate3d(-1px, 0, 0);\r\n            transform: translate3d(-1px, 0, 0);\r\n  }\r\n  20%,\r\n  80% {\r\n    -webkit-transform: translate3d(1px, 0, 0);\r\n            transform: translate3d(1px, 0, 0);\r\n  }\r\n  30%,\r\n  50%,\r\n  70% {\r\n    -webkit-transform: translate3d(-3px, 0, 0);\r\n            transform: translate3d(-3px, 0, 0);\r\n  }\r\n  40%,\r\n  60% {\r\n    -webkit-transform: translate3d(3px, 0, 0);\r\n            transform: translate3d(3px, 0, 0);\r\n  }\r\n}\r\n\r\n"

/***/ }),

/***/ "./app/add-card-payment/add-card-payment.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <ngx-braintree \r\n  [getClientToken]=\"getClientToken()\" \r\n  [createPurchase]=\"createPurchaseFunction\" \r\n  (paymentStatus)=\"onPaymentStatus($event)\">\r\n</ngx-braintree> -->\r\n\r\n<StackLayout #form>\r\n\t<StackLayout class=\"close-button-container\" orientation=\"horizontal\">\r\n\t\t<Label text=\"&times;\" class=\"close\" (tap)=\"close()\"></Label>\r\n\t</StackLayout>\r\n\r\n\t<StackLayout class=\"cardinfo-card-number\">\r\n\t\t<Label text=\"Card Number\" class=\"cardinfo-label\"></Label>\r\n\t\t<StackLayout #cardNumber class=\"input-wrapper\"></StackLayout>\r\n\t\t<StackLayout #cardImage></StackLayout>\r\n\t</StackLayout>\r\n\r\n\t<StackLayout class=\"cardinfo-wrapper\">\r\n\t\t<StackLayout class=\"cardinfo-exp-date\">\r\n\t\t\t<Label text=\"Valid Thru\" class=\"cardinfo-label\"></Label>\r\n\t\t\t<StackLayout #expirationDate class=\"input-wrapper\"></StackLayout>\r\n\t\t</StackLayout>\r\n\r\n\t\t<StackLayout class=\"cardinfo-cvv\">\r\n\t\t\t<Label text=\"CVV\" class=\"cardinfo-label\"></Label>\r\n\t\t\t<StackLayout #cvv class=\"input-wrapper\"></StackLayout>\r\n\t\t</StackLayout>\r\n\t</StackLayout>\r\n\r\n\t<Button text=\"Add\" class=\"btn btn-primary\" #submitButton></Button>\r\n</StackLayout>\r\n<!-- \t\t<form id=\"payment-card-form\" class=\"scale-down\">\r\n\t    <div class=\"cardinfo-card-number\">\r\n\t      <label class=\"cardinfo-label\" for=\"card-number\">Card Number</label>\r\n\t      <div class='input-wrapper' id=\"card-number\"></div>\r\n\t      <div id=\"card-image\"></div>\r\n\t    </div>\r\n\r\n\t    <div class=\"cardinfo-wrapper\">\r\n\t      <div class=\"cardinfo-exp-date\">\r\n\t        <label class=\"cardinfo-label\" for=\"expiration-date\">Valid Thru</label>\r\n\t        <div class='input-wrapper' id=\"expiration-date\"></div>\r\n\t      </div>\r\n\r\n\t      <div class=\"cardinfo-cvv\">\r\n\t        <label class=\"cardinfo-label\" for=\"cvv\">CVV</label>\r\n\t        <div class='input-wrapper' id=\"cvv\"></div>\r\n\t      </div>\r\n\t    </div>\r\n\t  </form> -->"

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

module.exports = "/* Add mobile styles for the component here.  */\r\n.page {\r\n  /*align-items: center;*/\r\n  flex-direction: column;\r\n}\r\n\r\n.form {\r\n  margin-left: 30;\r\n  margin-right: 30;\r\n  flex-grow: 2;\r\n  vertical-align: middle;\r\n}\r\n\r\n.close {\r\n\tmargin: 10;\r\n\tfont-size: 28;\r\n\twidth: 48;\r\n\theight: 48;\r\n}\r\n\r\n.close-button-container {\r\n\tposition: absolute;\r\n\tleft: 0;\r\n}\r\n\r\n.header-label {\r\n\tmargin-top: 60;\r\n\tmargin-bottom: 0;\r\n\tfont-size: 20;\r\n}\r\n\r\n.header-label-2 {\r\n\tfont-size: 20;\r\n}\r\n\r\n.header-label-3 {\r\n\tmargin-top: 14;\r\n\tmargin-left: 16;\r\n\tmargin-right: 16;\r\n\tfont-size: 18;\r\n}\r\n\r\n.header-label-4 {\r\n\tfont-size: 18;\r\n\tmargin-top: 14;\r\n}\r\n\r\n.riding-label {\r\n\tfont-weight: 700;\r\n\tcolor: #ac00e6;\r\n}\r\n\r\n.driving-label {\r\n\tcolor: #5c687c;\r\n}\r\n\r\n.switch-container {\r\n\ttext-align: center;\r\n}\r\n\r\n.switch {\r\n\tcolor: #ac00e6;\r\n\tbackground-color: #cd94e0;\r\n}\r\n\r\n.submit-btn {\r\n\tbackground-color: #ac00e6;\r\n\tmargin-top: 20;\r\n}\r\n\r\n.bold {\r\n\tfont-weight: 700;\r\n}\r\n\r\n.start-field {\r\n\tmargin-top: 14;\r\n}\r\n\r\n.activity-indicator {\r\n  color: #ac00e6;\r\n  vertical-align: center;\r\n  margin-top: 47%;\r\n}"

/***/ }),

/***/ "./app/add-modal/add-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<StackLayout>\r\n\t<ActivityIndicator #activityIndicator busy=\"true\" width=\"40\" height=\"40\" class=\"activity-indicator\"></ActivityIndicator>\r\n\t<ScrollView height=\"100%\">\r\n\t<FlexboxLayout class=\"page\" #addContainer>\r\n\t\t<StackLayout class=\"close-button-container\" orientation=\"horizontal\">\r\n\t\t\t<Label text=\"&times;\" class=\"close\" (tap)=\"close('cancel')\"></Label>\r\n\t\t</StackLayout>\r\n\r\n\r\n\t\t<StackLayout class=\"form\">\r\n\t\t\t<Label text=\"I am...\" class=\"header-label-2 bold\"></Label>\r\n\r\n\t\t  <StackLayout class=\"input-field switch-container\" orientation=\"horizontal\" horizontalAlignment=\"center\">\r\n\t\t  \t<Label text=\"Driving\" class=\"header-label-3 driving-label\" #drivingLabel></Label>\r\n\t\t  \t<Switch checked=\"true\" (checkedChange)=\"onCheckedChange($event)\" class=\"m-15 switch\"></Switch>\r\n\t\t  \t<Label text=\"Riding\" class=\"header-label-3 riding-label\" #ridingLabel></Label>\r\n\t\t  </StackLayout>\r\n\r\n\t\t  <Label text=\"Where?\" class=\"header-label bold\"></Label>\r\n\t\t  <StackLayout class=\"input-field start-field\">\r\n<!-- \t\t    <TextField class=\"input\" autocorrect=\"false\" hint=\"Where from?\" [(ngModel)]=\"startAddress\" (textChange)=\"startAutocomplete()\" (tap)=\"showModal('start')\" required></TextField> -->\r\n\t\t\t<Label text=\"{{ startLabel }}\" class=\"header-label-3\" (tap)=\"showModal('start')\"></Label>\r\n\t\t    <StackLayout class=\"hr-light\"></StackLayout>\r\n\t\t  </StackLayout>\r\n\r\n\t\t  <StackLayout class=\"input-field\">\r\n<!-- \t\t    <TextField class=\"input\" autocorrect=\"false\" hint=\"Where to?\" [(ngModel)]=\"endAddress\" (textChange)=\"endAutocomplete()\" (tap)=\"showModal('end')\" required></TextField> -->\r\n\t\t\t\t<Label text=\"{{ endLabel }}\" class=\"header-label-3\" (tap)=\"showModal('end')\"></Label>\r\n\t\t    <StackLayout class=\"hr-light\"></StackLayout>\r\n\t\t  </StackLayout>\r\n\r\n\t<!-- \t  <DatePicker (loaded)=\"onPickerLoaded($event)\" (dateChange)=\"onDateChanged($event)\" \r\n\t(dayChange)=\"onDayChanged($event)\" (monthChange)=\"onMonthChanged($event)\" (yearChange)=\"onYearChanged($event)\" verticalAlignment=\"center\"></DatePicker> -->\r\n\t\t\t<Label text=\"When?\" class=\"header-label bold\"></Label>\r\n\r\n\t\t  <DatePicker (loaded)=\"onPickerLoaded($event)\" (dateChange)=\"onDateChanged($event)\" verticalAlignment=\"center\"></DatePicker>\r\n\r\n\t\t  <Label *ngIf=\"isDriving\" text=\"How many?\" class=\"header-label\"></Label>\r\n\t\t  <GridLayout *ngIf=\"isDriving\" class=\"m-15\" rows=\"auto\" columns=\"50 * 50\">\r\n\t\t\t    <Label class=\"h3\" text=\"1\" textWrap=\"true\" row=\"10\" col=\"0\"></Label>\r\n\t\t\t    <Slider minValue=\"1\" maxValue=\"8\" [(ngModel)]=\"capacity\" row=\"0\"\r\n\t\t\t     col=\"1\"></Slider>\r\n\t\t\t    <Label class=\"h3\" text=\"8\" textWrap=\"true\" row=\"0\" col=\"2\"></Label>\r\n\t\t\t</GridLayout>\r\n\t\t  <Label *ngIf=\"isDriving\" text=\"{{ capacity }}\" class=\"header-label-2\"></Label>\r\n\r\n\t\t  <Button text=\"Add\" class=\"btn btn-primary submit-btn\" (tap)=\"addPosting()\"></Button>\r\n\t\t</StackLayout>\r\n\t</FlexboxLayout>\r\n\t</ScrollView>\r\n</StackLayout>\r\n\r\n\r\n"

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

module.exports = "/* Add mobile styles for the component here.  */\r\n.close {\r\n\tmargin: 10;\r\n\tfont-size: 28;\r\n\twidth: 48;\r\n\theight: 48;\r\n}\r\n\r\n.close-button-container {\r\n\tposition: absolute;\r\n\tleft: 0;\r\n}\r\n\r\n.payment-type-icon {\r\n\theight: 34;\r\n\twidth: 34;\r\n\tbackground-position: center;\r\n\tmargin-top: 18;\r\n\tmargin-bottom: 18;\r\n\tmargin-left: 36;\r\n}\r\n\r\n.payment-info-label {\r\n\tfont-size: 16;\r\n\t/*font-weight: 700;*/\r\n\tpadding: 30;\r\n\ttext-align: center;\r\n\tcolor: black;\r\n}"

/***/ }),

/***/ "./app/add-payment/add-payment.component.html":
/***/ (function(module, exports) {

module.exports = "<StackLayout>\r\n\t<StackLayout class=\"close-button-container\" orientation=\"horizontal\">\r\n\t\t<Label text=\"&times;\" class=\"close\" (tap)=\"close('cancel')\"></Label>\r\n\t</StackLayout>\r\n\r\n\t<ListView [items]=\"methods\" separatorColor=\"transparent\" (itemTap)=\"onSelect($event)\">\r\n\t\t<ng-template let-item=\"item\" let-i=\"index\" let-odd=\"odd\" let-even=\"even\">\r\n\t\t\t<StackLayout [class.odd]=\"odd\" [class.even]=\"even\" orientation=\"horizontal\">\r\n\t\t\t\t<Image [src]=\"item.paymentType\" class=\"payment-type-icon\"></Image>\r\n\t\t\t\t<Label textWrap=\"true\" [text]=\"item.info\" class=\"payment-info-label\"></Label>\r\n\t\t\t</StackLayout>\r\n\t\t</ng-template>\r\n\t</ListView>\r\n</StackLayout>"

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
/* harmony import */ var _view_image_view_image_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./app/view-image/view-image.component.ts");
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
    { path: 'view-image', component: _view_image_view_image_component__WEBPACK_IMPORTED_MODULE_18__["ViewImageComponent"] },
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

module.exports = "<!-- https://docs.nativescript.org/angular/core-concepts/angular-navigation.html#page-router-outlet -->\r\n\r\n<Page>\r\n\t    <page-router-outlet></page-router-outlet>\r\n</Page>"

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
/* harmony import */ var _view_image_view_image_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__("./app/view-image/view-image.component.ts");
/* harmony import */ var nativescript_angular_element_registry__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__("../node_modules/nativescript-angular/element-registry.js");
/* harmony import */ var nativescript_angular_element_registry__WEBPACK_IMPORTED_MODULE_57___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_element_registry__WEBPACK_IMPORTED_MODULE_57__);
/* harmony import */ var _forget_form_forget_form_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__("./app/forget-form/forget-form.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



































// Uncomment and add to NgModule imports if you need to use two-way binding

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper






















Object(nativescript_angular_element_registry__WEBPACK_IMPORTED_MODULE_57__["registerElement"])('Fab', function () { return __webpack_require__("../node_modules/@nstudio/nativescript-floatingactionbutton/fab.js").Fab; });
Object(nativescript_angular_element_registry__WEBPACK_IMPORTED_MODULE_57__["registerElement"])("PullToRefresh", function () { return __webpack_require__("../node_modules/@nstudio/nativescript-pulltorefresh/pulltorefresh.js").PullToRefresh; });

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
                _view_image_view_image_component__WEBPACK_IMPORTED_MODULE_56__["ViewImageComponent"],
                _forget_form_forget_form_component__WEBPACK_IMPORTED_MODULE_58__["ForgetFormComponent"],
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
                _payment_info_payment_info_component__WEBPACK_IMPORTED_MODULE_42__["PaymentInfoComponent"], _confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_43__["ConfirmationComponent"], _settingsform_settingsform_component__WEBPACK_IMPORTED_MODULE_52__["SettingsformComponent"], _reauth_reauth_component__WEBPACK_IMPORTED_MODULE_53__["ReauthComponent"], _forget_form_forget_form_component__WEBPACK_IMPORTED_MODULE_58__["ForgetFormComponent"]],
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

module.exports = "/* Add mobile styles for the component here.  */\r\n"

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

module.exports = "/* Add mobile styles for the component here.  */\r\nLabel {\r\n\ttext-align: left;\r\n}\r\n\r\n.name-label {\r\n\tmargin-top: 16;\r\n\tmargin-left: 18;\r\n\tcolor: black;\r\n\tfont-weight: 700;\r\n\tfont-size: 17;\r\n}\r\n\r\n.info-label {\r\n\tmargin-top: 4;\r\n\tmargin-left: 18;\r\n\tmargin-bottom: 16;\r\n\tcolor: #696969;\r\n}\r\n\r\n.profile-picture {\r\n\theight: 60;\r\n\twidth: 60;\r\n\tborder-radius: 100%;\r\n\tvertical-align: center;\r\n\tmargin-left: 16;\r\n\tmargin-top: 14;\r\n\tmargin-bottom: 14;\r\n}\r\n\r\n.message {\r\n\tborder-bottom-width: 1;\r\n\tborder-color: #f1f1f1;\r\n\tmargin-top: 50;\r\n\tmargin-bottom: 50;\r\n}\r\n\r\n.refresh {\r\n\tcolor: #ac00e6;\r\n}"

/***/ }),

/***/ "./app/chat-list/chat-list.component.html":
/***/ (function(module, exports) {

module.exports = "<Page.actionBar>\r\n    <ActionBar title=\"Messages\">\r\n    \t<NavigationButton text=\"Go Back\" android.systemIcon=\"ic_menu_back\" (tap)=\"onNavBtnTap()\"></NavigationButton>\r\n    </ActionBar>\r\n</Page.actionBar>\r\n\r\n<PullToRefresh (refresh)=\"refreshList($event)\" class=\"refresh\">\r\n\t<ListView [items]=\"messages\" (itemTap)=\"onItemTap($event)\" #listView id=\"listView\">\r\n\t    <ng-template let-item=\"item\" let-i=\"index\" let-odd=\"odd\" let-even=\"even\">\r\n\t        <StackLayout [class.odd]=\"odd\" [class.even]=\"even\" class=\"message\" orientation=\"horizontal\">\r\n\t        \t  \t<Image [src]=\"item.pfpSource\" class=\"profile-picture\" stretch=\"aspectFit\"></Image>\r\n\t        \t  \t<StackLayout>\r\n\t\t              \t<Label textWrap=\"true\" id=\"post-name\" class=\"name-label\" [text]=\"item.displayName\"></Label>\r\n\t\t              \t<Label textWrap=\"true\" id=\"post-info\" class=\"info-label\" [text]=\"item.message\"></Label>\r\n\t\t            </StackLayout>\r\n\t        </StackLayout>\r\n\t    </ng-template>\r\n\t</ListView>\r\n</PullToRefresh>"

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
                                var profileSource = doc.data().profile_source;
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

module.exports = "/* Add mobile styles for the component here.  */\r\nButton {\r\n    padding: 5;\r\n    margin: 5;\r\n    background-color: dodgerblue;\r\n    color: white;\r\n    height: 40;\r\n    border-radius: 5;\r\n}\r\n\r\n.chat-button {\r\n\tpadding-left: 5;\r\n\tpadding-right: 5;\r\n\tmargin: 5;\r\n\theight: 20;\r\n\twidth: 20;\r\n}\r\n\r\n.img-button {\r\n\tmargin: 5;\r\n\tmargin-left: 3;\r\n\tmargin-right: 7;\r\n\theight: 20;\r\n\twidth: 20;\r\n}\r\n\r\n.chat-text-field {\r\n    padding: 5; \r\n    /*background-color: white; */\r\n    /*border-radius: 4;*/\r\n    /*bottom-border-color: #696969;*/\r\n}\r\n\r\n.author-img {\r\n    margin: 0 5 5 5;\r\n    margin-bottom: 0;\r\n    width: 40;\r\n    height: 40;\r\n    border-radius: 20;\r\n    background-color: lightgray;\r\n}\r\n\r\n.img {\r\n\tmargin: 5;\r\n\tborder-radius: 10;\r\n\tbackground-color: lightgray;\r\n}\r\n\r\n.theirsImg {\r\n\tmargin: 5;\r\n\tmargin-left: 52;\r\n\tborder-radius: 10;\r\n\tbackground-color: lightgray;\r\n}\r\n\r\n.mine {\r\n    background-color: #ac00e6;\r\n    color: white;\r\n    padding: 8;\r\n    padding-left: 14;\r\n    padding-right: 14;\r\n    margin-right: 10;\r\n    border-radius: 15;\r\n    border-bottom-right-radius: 5;\r\n    border-bottom-left-radius: 15;\r\n    font-size: 16;\r\n    max-width: 60%;\r\n    text-align: left;\r\n    /*margin-bottom: 12;*/\r\n}\r\n\r\n.mineContinuation {\r\n\tmargin-bottom: 0;\r\n\tborder-bottom-right-radius: 15;\r\n}\r\n\r\n.mineContinuationGrid {\r\n\tfont-size: 14;\r\n    padding: 5;\r\n\tpadding-top: 0;\r\n\tpadding-bottom: 1;\r\n}\r\n\r\n.mineTime {\r\n\tmargin-right: 10;\r\n\tmargin-bottom: 5;\r\n}\r\n\r\n.theirsTime {\r\n\tmargin-left: 52;\r\n\tmargin-bottom: 5;\r\n}\r\n\r\n.time {\r\n\tvisibility: collapse;\r\n\tdisplay: none;\r\n}\r\n\r\n.theirs {\r\n    background-color: #e0e0e0;\r\n    color: #333;\r\n    padding: 7;\r\n    padding-left: 14;\r\n    padding-right: 14;\r\n    border-radius: 15;\r\n    border-bottom-left-radius: 5;\r\n    border-bottom-right-radius: 15;\r\n    margin-right: 40;\r\n    font-size: 16;\r\n    max-width: 60%;\r\n    text-align: left;\r\n    /*margin-bottom: 12;*/\r\n}\r\n\r\n.theirsContinuation {\r\n\tmargin-left: 52;\r\n\tmargin-bottom: 0;\r\n\tborder-bottom-left-radius: 15;\r\n}\r\n\r\n.theirsContinuationGrid {\r\n\tfont-size: 14;\r\n    padding: 5;\r\n\tpadding-top: 0;\r\n\tpadding-bottom: 1;\r\n}\r\n\r\n.grid {\r\n    font-size: 14;\r\n    padding: 5;\r\n    padding-top: 0;\r\n    padding-bottom: 8;\r\n}\r\n\r\n.chat-box-layout {\r\n\tborder-color: #f1f1f1;\r\n\tborder-top-width: 1;\r\n}"

/***/ }),

/***/ "./app/chat/chat.component.html":
/***/ (function(module, exports) {

module.exports = "<Page.actionBar>\r\n    <ActionBar title=\"{{ chatName }}\" android:horizontalAlignment=\"center\" ios:horizontalAlignment=\"center\">\r\n    \t<NavigationButton text=\"Go Back\" android.systemIcon=\"ic_menu_back\" (tap)=\"onNavBtnTap()\"></NavigationButton>\r\n\t    <ActionItem (tap)=\"onLeave()\"\r\n\t      ios.systemIcon=\"9\" ios.position=\"right\"\r\n\t      text=\"Leave chat\" android.position=\"popup\"></ActionItem>\r\n    </ActionBar>\r\n</Page.actionBar>\r\n\r\n<GridLayout rows=\"*, auto\">\r\n    <ListView margin-bottom=\"50\" padding=\"5\" #messageList [items]=\"messages\" separatorColor=\"transparent\" (setupItemView)=\"setupItemView($event)\" row=\"0\" (loadMoreItems)=\"loadMoreData()\">\r\n        <ng-template let-item=\"item\" let-i=\"index\" let-mine=\"mine\" let-theirs=\"theirs\" let-mineContinuation=\"mineContinuation\" let-theirsContinuation=\"theirsContinuation\" let-mineContinuationGrid=\"mineContinuationGrid\" let-theirsContinuationGrid=\"theirsContinuationGrid\" let-grid=\"grid\" let-mineTime=\"mineTime\" let-theirsTime=\"theirsTime\" let-time=\"time\" let-theirsImg=\"theirsImg\" let-img=\"img\">\r\n            <StackLayout width=\"80%\" [class.mineContinuationGrid]=\"mineContinuationGrid\" [class.theirsContinuationGrid]=\"theirsContinuationGrid\" [class.grid]=\"grid\">\r\n                <StackLayout orientation=\"horizontal\" [horizontalAlignment]=\"align(item)\">\r\n                    <Image [visibility]=\"item.visibility\" class=\"author-img\" stretch=\"aspectFill\" height=\"40\" width=\"40\" verticalAlignment=\"bottom\" [src]=\"item.chatMessage.pfpSource\" col=\"1\"></Image>\r\n                    <Label [visibility]=\"textVisibility(item)\" [text]='item.chatMessage.message' [class.mine]=\"mine\" [class.theirs]=\"theirs\" [class.mineContinuation]=\"mineContinuation\" [class.theirsContinuation]=\"theirsContinuation\" textWrap=\"true\" verticalAlignment=\"top\"></Label>\r\n                    <Image [visibility]=\"imgVisibility(item)\" [class.theirsImg]=\"theirsImg\" [class.img]=\"img\" stretch=\"none\" minWidth=\"360\" minHeight=\"200\" decodeWidth=\"360\" decodeHeight=\"200\" verticalAlignment=\"bottom\" [src]=\"item.chatMessage.imgSource\" col=\"1\" (tap)=\"toViewImage(item.chatMessage.imgSource)\"></Image>\r\n                </StackLayout>\r\n                <Label [text]='item.formattedTime' [horizontalAlignment]=\"align(item)\" [class.mineTime]=\"mineTime\" [class.theirsTime]=\"theirsTime\" [class.time]=\"time\"></Label>\r\n            </StackLayout>\r\n        </ng-template>\r\n    </ListView>\r\n\r\n    <StackLayout #chatbox row=\"1\" class=\"chat-box-layout\">\r\n\t        <GridLayout columns=\"auto,*,auto\" style=\"padding: 10\">\r\n\t        \t<Image class=\"img-button\" row=\"0\" col=\"0\" src=\"~/img/img_icon_2.png\" (tap)=openImages()></Image>\r\n\t            <TextView #textfield height=\"auto\" maxHeight=\"100\" hint=\"Start a message\" class=\"chat-text-field\" row=\"0\" col=\"1\" autocorrect=\"true\" [(ngModel)]=\"message\" (tap)=\"onTextTap()\"></TextView>\r\n\t            <Image #btn class=\"chat-button\" row=\"0\" col=\"2\" src=\"~/img/send_message_icon_2.png\" (tap)=sendMessage()></Image>\r\n\t        </GridLayout>\r\n\r\n    </StackLayout>\r\n\r\n</GridLayout>"

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
/* harmony import */ var nativescript_imagepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/nativescript-imagepicker/imagepicker.js");
/* harmony import */ var nativescript_imagepicker__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nativescript_imagepicker__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var tns_core_modules_image_source__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../node_modules/tns-core-modules/image-source/image-source.js");
/* harmony import */ var tns_core_modules_image_source__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_image_source__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var tns_core_modules_file_system__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../node_modules/tns-core-modules/file-system/file-system.js");
/* harmony import */ var tns_core_modules_file_system__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_file_system__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _logincheck_service_tns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./app/logincheck.service.tns.ts");
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../node_modules/tns-core-modules/data/observable-array/observable-array.js");
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("../node_modules/tns-core-modules/platform/platform.js");
/* harmony import */ var tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("../node_modules/tns-core-modules/application/application.js");
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_application__WEBPACK_IMPORTED_MODULE_10__);
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
        this.messages = new tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_8__["ObservableArray"]();
        this.allMessages = new tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_8__["ObservableArray"]();
        this.message = '';
        this.numShown = 20;
    }
    ChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_9__["isAndroid"]) {
            var window = tns_core_modules_application__WEBPACK_IMPORTED_MODULE_10__["android"].startActivity.getWindow();
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
    ChatComponent.prototype.sendMessage = function (imgSrc) {
        if (imgSrc === void 0) { imgSrc = null; }
        return __awaiter(this, void 0, void 0, function () {
            var today, date, time, chat, messageDocument, messagePromise;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.message.replace(/\s+/g, '').length === 0 && !imgSrc) {
                            return [2 /*return*/, false];
                        }
                        today = new Date();
                        date = today.getFullYear() + '/' + (today.getMonth() + 1) + '/' + today.getDate();
                        time = today.getHours() + ":" + today.getUTCMinutes() + ":" + today.getSeconds();
                        if (imgSrc) {
                            chat = {
                                userId: this.userId,
                                displayName: this.displayName,
                                message: "",
                                pfpSource: this.pfpSource,
                                imgSource: imgSrc,
                                time: time,
                                date: date
                            };
                        }
                        else {
                            chat = {
                                userId: this.userId,
                                displayName: this.displayName,
                                message: this.message,
                                pfpSource: this.pfpSource,
                                imgSource: "",
                                time: time,
                                date: date
                            };
                        }
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
        var pfpPromise = nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_2__["firestore"].collection('users').doc(data.chats[index].userId).get().then(function (doc) {
            data.chats[index].pfpSource = doc.data().profile_source;
        });
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
    ChatComponent.prototype.openImages = function () {
        var _this = this;
        var localPath;
        var counter = 1;
        var context = nativescript_imagepicker__WEBPACK_IMPORTED_MODULE_4__["create"]({
            mode: "single" // use "multiple" for multiple selection
        });
        context
            .authorize()
            .then(function () {
            return context.present();
        })
            .then(function (selection) {
            selection.forEach(function (selected) {
                // process the selected image
                var imgSource = new tns_core_modules_image_source__WEBPACK_IMPORTED_MODULE_5__["ImageSource"]();
                imgSource.fromAsset(selected).then(function (source) {
                    var b64 = source.toBase64String('jpeg', 100);
                    var fileSize = b64.replace(/\=/g, "").length * 0.75;
                    if (fileSize > 5) {
                        // If file is greater than 1 MB
                        source.loadFromBase64(b64);
                    }
                    var imgHash = Math.random().toString().slice(2, 11);
                    var folder = tns_core_modules_file_system__WEBPACK_IMPORTED_MODULE_6__["knownFolders"].temp();
                    var path = tns_core_modules_file_system__WEBPACK_IMPORTED_MODULE_6__["path"].join(folder.path, imgHash + ".png");
                    var saved = source.saveToFile(path, "jpeg", 100);
                    nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_2__["storage"].uploadFile({
                        // the full path of the file in your Firebase storage (folders will be created)
                        remoteFullPath: 'chats/' + _this.chatId + '/images/' + _this.userId + '/IMG_' + imgHash + '.png',
                        // option 1: a file-system module File object
                        localFile: tns_core_modules_file_system__WEBPACK_IMPORTED_MODULE_6__["File"].fromPath(path),
                        // option 2: a full file path (ignored if 'localFile' is set)
                        localFullPath: path,
                        // get notified of file upload progress
                        onProgress: function (status) {
                            console.log("Uploaded fraction: " + status.fractionCompleted);
                            console.log("Percentage complete: " + status.percentageCompleted);
                        }
                    }).then(function (uploadedFile) {
                        console.log("File uploaded: " + JSON.stringify(uploadedFile));
                        nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_2__["storage"].getDownloadUrl({
                            remoteFullPath: 'chats/' + _this.chatId + '/images/' + _this.userId + '/IMG_' + imgHash + '.png'
                        }).then(function (url) {
                            _this.sendMessage(url);
                        });
                    });
                });
            });
        }).catch(function (e) {
            // process error
            console.log(e);
        });
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
    ChatComponent.prototype.textVisibility = function (item) {
        if (item.chatMessage.message === "") {
            return "collapse";
        }
        else {
            return "visible";
        }
    };
    ChatComponent.prototype.imgVisibility = function (item) {
        if (item.chatMessage.imgSource === "") {
            return "collapse";
        }
        else {
            return "visible";
        }
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
        args.view.context.theirsImg = args.view.context.theirsContinuation;
        args.view.context.img = !args.view.context.theirsImg;
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
    ChatComponent.prototype.toViewImage = function (imgSource) {
        this.transferService.setData(imgSource);
        this.router.navigate(['view-image']);
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
        __metadata("design:paramtypes", [_datatransfer_service__WEBPACK_IMPORTED_MODULE_1__["TransferService"], nativescript_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterExtensions"], _logincheck_service_tns__WEBPACK_IMPORTED_MODULE_7__["LogincheckService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]])
    ], ChatComponent);
    return ChatComponent;
}());



/***/ }),

/***/ "./app/confirmation/confirmation.component.css":
/***/ (function(module, exports) {

module.exports = "/* Add mobile styles for the component here.  */\r\n.delete-btn {\r\n    display: block;\r\n    color: #ac00e6;\r\n    /*padding: 6px 24px;*/\r\n    border-width: 1;\r\n    border-color: #ac00e6;\r\n    border-radius: 5;\r\n    text-align: center;\r\n    float: center;\r\n    margin: auto; \r\n    font-weight: 700;\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n    margin-bottom: 15;\r\n    margin-right: 15;\r\n    width: 120;\r\n    height: 40;\r\n    horizontal-align:right;\r\n}\r\n\r\n.delete-btn:highlighted {\r\n    background-color: #f9e6ff;\r\n}\r\n\r\n.cancel-btn {\r\n    display: block;\r\n    /*color: white;*/\r\n    /*padding: 6px 24px;*/\r\n    border-width: 1;\r\n    border-color: black;\r\n    border-radius: 5;\r\n    text-align: center;\r\n    float: center;\r\n    margin: auto; \r\n    font-weight: 700;\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n    margin-bottom: 15;\r\n    margin-left: 15;\r\n    width: 120;\r\n    height: 40;\r\n    horizontal-align:left;\r\n}\r\n\r\n.cancel-btn:highlighted {\r\n    background-color: #f1f1f1;\r\n}\r\n\r\n.delete-label {\r\n\tfont-size: 20;\r\n\tmargin-top: 18;\r\n\tmargin-bottom: 48;\r\n\tmargin-left: 18;\r\n\tmargin-right: 18;\r\n\tcolor: black;\r\n}"

/***/ }),

/***/ "./app/confirmation/confirmation.component.html":
/***/ (function(module, exports) {

module.exports = "<StackLayout>\r\n\t<Label textWrap=\"true\" text=\"Are you sure you want to delete?\" class=\"delete-label\"></Label>\r\n\t<GridLayout rows=\"auto\" columns=\"*\">\r\n\t\t<Button row=\"0\" text=\"Cancel\" class=\"cancel-btn\" (tap)=\"close('cancel')\"></Button>\r\n\t\t<Button row=\"0\" text=\"Delete\" class=\"delete-btn\" (tap)=\"close('delete')\"></Button>\r\n\t</GridLayout>\r\n</StackLayout>"

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

module.exports = "/*\r\nAdd your NativeScript specific styles here.\r\nTo learn more about styling in NativeScript see:\r\nhttps://docs.nativescript.org/angular/ui/styling\r\n*/"

/***/ }),

/***/ "./app/connect/connect.component.html":
/***/ (function(module, exports) {

module.exports = "<StackLayout>\r\n  <Label text=\"connect works\" textWrap=\"true\"></Label>\r\n  <Label text=\"This is a migrated component\" textWrap=\"true\"></Label>\r\n  <Label text=\"Update it to provide the UI elements required in your mobile app\" textWrap=\"true\"></Label>\r\n</StackLayout>\r\n\r\n<!--\r\nOriginal Web template:\r\n\r\n<p>\r\n  connect works!\r\n</p>\r\n\r\n-->"

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

module.exports = "p {\r\n\tbackground-color: #d8c3ec;\r\n\ttext-align: center;\r\n}\r\n\r\n#close-dialog {\r\n\tfloat: right;\r\n}\r\n\r\n.close {\r\n\tfont-color: black;\r\n    float: right;\r\n    font-size: 16px;\r\n    font-weight: bold;\r\n    margin-right: 0.5em;\r\n}"

/***/ }),

/***/ "./app/dialog/dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<p id=\"dialog\">\r\n  Your settings have been updated!\r\n  <span class=\"close\" id=\"close-dialog\">&times;</span>\r\n</p>\r\n"

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

module.exports = ".float-btn {\r\n\tbackground-color: #ac00e6;\r\n\twidth: 56;\r\n\theight: 56;\r\n\ttext-align: center;\r\n\tvertical-align: middle;\r\n\tborder-radius: 50%;\r\n}\r\n\r\n.float-btn-text {\r\n\tcolor: #ffffff;\r\n\tfont-size: 36;\r\n\t/*margin-top: -6;*/\r\n}"

/***/ }),

/***/ "./app/float-btn/float-btn.component.html":
/***/ (function(module, exports) {

module.exports = "<StackLayout class=\"float-btn\">\r\n\t<Label class=\"float-btn-text\" text=\"+\"></Label>\r\n</StackLayout>"

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

/***/ "./app/forget-form/forget-form.component.css":
/***/ (function(module, exports) {

module.exports = "/* Add mobile styles for the component here.  */\r\n.header{\r\n    margin-top: 50;\r\n    margin-left: 22;\r\n    margin-right: 22;\r\n\tcolor: black;\r\n    font-weight: 500;\r\n    font-size: 18;\r\n    text-align: center;\r\n}\r\n\r\n.submit-btn{\r\n    background-color:#ac00e6;\r\n    width: 75%;\r\n    height: 170px;\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n    color: white;\r\n    margin-top: 20;\r\n}\r\n.text-field{\r\n    width: 85%;\r\n    margin-top: 20;\r\n    color:#696969\r\n}\r\n\r\n.close-button-container {\r\n\tposition: absolute;\r\n\tleft: 0;\r\n}\r\n.close {\r\n\tmargin: 10;\r\n\tfont-size: 40;\r\n\twidth: 48;\r\n    height: 48;\r\n    color: black\r\n}\r\n\r\n.error-message {\r\n\tcolor: red;\r\n\tfont-size: 16;\r\n\tvisibility: collapse;\r\n}"

/***/ }),

/***/ "./app/forget-form/forget-form.component.html":
/***/ (function(module, exports) {

module.exports = "<Stacklayout>\r\n        <StackLayout class=\"close-button-container\" orientation=\"horizontal\">\r\n            <Label text=\"&times;\" class=\"close\" (tap)=\"close('cancel')\"></Label>\r\n        </StackLayout>\r\n        <Label class=\"header\" text=\"Enter the email address you used to register for CollegePool to reset your password.\" textWrap=\"true\"></Label>\r\n        <StackLayout class=\"input-field\">\r\n                <TextField class=\"text-field\" hint=\"Email\" keyboardType=\"email\" autocorrect=\"false\" autocapitalizationType=\"none\" [(ngModel)]=\"email\" returnKeyType=\"next\" (returnPress)=\"focusPassword()\" #em></TextField>\r\n        </StackLayout>\r\n        <Label text=\"No account could be found with your email\" textWrap=\"true\" class=\"error-message\" #errorMessage></Label>\r\n    \r\n        <Button text=\"Submit\" (tap)=\"submit(email)\" class=\"submit-btn\"></Button>\r\n    \r\n    </Stacklayout>"

/***/ }),

/***/ "./app/forget-form/forget-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgetFormComponent", function() { return ForgetFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_angular_directives_dialogs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/nativescript-angular/directives/dialogs.js");
/* harmony import */ var nativescript_angular_directives_dialogs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_directives_dialogs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/nativescript-plugin-firebase/firebase.js");
/* harmony import */ var nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _logincheck_service_tns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/logincheck.service.tns.ts");
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






var ForgetFormComponent = /** @class */ (function () {
    function ForgetFormComponent(params, transferService, logincheckService, vcRef, modal) {
        this.params = params;
        this.transferService = transferService;
        this.logincheckService = logincheckService;
        this.vcRef = vcRef;
        this.modal = modal;
    }
    ForgetFormComponent.prototype.ngOnInit = function () {
    };
    ForgetFormComponent.prototype.close = function (res) {
        var errorMessage = this.em.nativeElement;
        errorMessage.style.visibility = 'collapse';
        this.params.closeCallback(res);
    };
    ForgetFormComponent.prototype.submit = function (email) {
        var _this = this;
        console.log("email", email);
        nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_2__["sendPasswordResetEmail"](email).then(function () {
            _this.alert('An email has been sent to ' + email + ' with details of how to recover your account');
            _this.close('cancel');
        }, function (error) {
            var errorMessage = _this.em.nativeElement;
            errorMessage.style.visibility = 'visible';
        });
    };
    ForgetFormComponent.prototype.alert = function (message) {
        return alert({
            title: "CollegePool",
            okButtonText: "Close",
            message: message
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("errorMessage", { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ForgetFormComponent.prototype, "em", void 0);
    ForgetFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forget-form',
            template: __webpack_require__("./app/forget-form/forget-form.component.html"),
            styles: [__webpack_require__("./app/forget-form/forget-form.component.css")]
        }),
        __metadata("design:paramtypes", [nativescript_angular_directives_dialogs__WEBPACK_IMPORTED_MODULE_1__["ModalDialogParams"], _datatransfer_service__WEBPACK_IMPORTED_MODULE_4__["TransferService"], _logincheck_service_tns__WEBPACK_IMPORTED_MODULE_3__["LogincheckService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], nativescript_angular_directives_dialogs__WEBPACK_IMPORTED_MODULE_1__["ModalDialogService"]])
    ], ForgetFormComponent);
    return ForgetFormComponent;
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

module.exports = "/*\r\nAdd your NativeScript specific styles here.\r\nTo learn more about styling in NativeScript see:\r\nhttps://docs.nativescript.org/angular/ui/styling\r\n*/\r\n\r\n.actionbar {\r\n\tfont-size: 22;\r\n\tfont-weight: 700;\r\n\ttext-align: left;\r\n\tcolor: black;\r\n}\r\n\r\nLabel {\r\n\ttext-align: left;\r\n}\r\n\r\n.name-label {\r\n\tmargin-top: 16;\r\n\tmargin-left: 18;\r\n\tcolor: black;\r\n\tfont-weight: 700;\r\n\tfont-size: 17;\r\n}\r\n\r\n.info-label {\r\n\tmargin-top: 4;\r\n\tmargin-left: 18;\r\n\tmargin-bottom: 16;\r\n\tcolor: black;\r\n}\r\n\r\n.post {\r\n\tborder-bottom-width: 1;\r\n\tborder-color: #f1f1f1;\r\n\tmargin-top: 150;\r\n\tmargin-bottom: 15;\r\n}\r\n\r\n.post:highlighted {\r\n\t/*background-color: #f1f1f1;*/\r\n}\r\n\r\n.posting-map {\r\n\tmargin-bottom: 16;\r\n\tborder-radius: 10;\r\n\theight: 220;\r\n\twidth: 340;\r\n}\r\n\r\n.profile-picture {\r\n\theight: 50;\r\n\twidth: 50;\r\n\tborder-radius: 100%;\r\n\tvertical-align: top;\r\n\tmargin-left: 16;\r\n\tmargin-top: 20;\r\n}\r\n\r\n.refresh {\r\n\tcolor: #ac00e6;\r\n}"

/***/ }),

/***/ "./app/history/history.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <app-navigation></app-navigation> -->\r\n<PullToRefresh (refresh)=\"refreshList($event)\" class=\"refresh\">\r\n\t<ListView [items]=\"postings\" (itemTap)=\"onItemTap($event)\" #listView id=\"listView\">\r\n\t    <ng-template let-item=\"item\" let-i=\"index\" let-odd=\"odd\" let-even=\"even\">\r\n\t        <StackLayout [class.odd]=\"odd\" [class.even]=\"even\" class=\"post\">\r\n\t        \t  <StackLayout orientation=\"horizontal\">\r\n\t        \t  \t<Image [src]=\"item.profileSource\" class=\"profile-picture\" stretch=\"aspectFit\"></Image>\r\n\t        \t  \t<StackLayout>\r\n\t\t              \t<Label textWrap=\"true\" id=\"post-name\" class=\"name-label\" [text]=\"item.username\"></Label>\r\n\t\t              \t<Label textWrap=\"true\" id=\"post-info\" class=\"info-label\" [text]=\"item.info\"></Label>\r\n\t\t            </StackLayout>\r\n\t              </StackLayout>\r\n\t\t\t\t  <Image [src]=\"item.mapSource\" stretch=\"aspectFit\" class=\"posting-map\"></Image>\r\n\t        </StackLayout>\r\n\t    </ng-template>\r\n\t</ListView>\r\n</PullToRefresh>\r\n\r\n<!--\r\nOriginal Web template:\r\n\r\n<app-navigation></app-navigation>\r\n\r\n<div class=\"right-background\">\r\n\t<div class=\"user-card-right info\">\r\n\t\t<img src=\"src/img/sample_profile.jpg\" alt=\"Profile Photo\" id=\"profile_pic\">\r\n\t\t<div id=\"name_info\">\r\n\t\t\t<h3 id=\"username\">{{user.name}}</h3>\r\n\t\t\t<h3 id=\"user_university\">University of Virginia</h3>\r\n\t\t</div>\r\n\t\t<div class=\"userStats\">\r\n\t\t\t<span id=\"user_rides_given\" class=\"userData\">Rides Given: </span>\r\n\t\t\t<span id=\"num_rides_given\"></span>\r\n\t\t\t<span id=\"user_rides_received\" class=\"userData\">Rides Received: </span>\r\n\t\t\t<span id=\"num_rides_received\"></span>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<div id=\"history\" class=\"tabcontent\">\r\n\t<h3 align=\"center\">Your Rides</h3>\r\n\t<div id=\"bigfeed\" (window:resize)=\"onResize($event)\"></div>\r\n</div>\r\n-->"

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
    // cache = new Cache();
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
        // this.cache.placeholder = fromFile("~/img/gray_background.jpg");
        // this.cache.maxRequests = 5;
        var info_label = "";
        if (data.capacity != "-1")
            info_label = "Offering ride leaving " + data.date + " from " + data.startAddress + " to " + data.endAddress + " for " + data.price;
        else
            info_label = "Requesting ride leaving " + data.date + " from " + data.startAddress + " to " + data.endAddress;
        var usersCollection = nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_7__["firestore"].collection('users');
        usersCollection.doc(data.uid).get().then(function (doc) {
            if (doc.exists) {
                var url = doc.data().profile_source;
                // if(url.substring(0, 27) === 'https://graph.facebook.com/')
                //   url += '?height=300';
                _this.postings.push(new PostItem(data.user, info_label, url, data.map_url));
                _this.p.push(data);
                _this.ids.push(id);
            }
        });
    };
    HistoryComponent.prototype.refreshList = function (args) {
        this.loadPostings(args);
    };
    // addCache(url) {
    //   let cachedImageSource;
    //   const myImage = this.cache.get(url);
    //   if (myImage) {
    //       // If present -- use it.
    //       cachedImageSource = fromNativeSource(myImage);
    //       return cachedImageSource;
    //   } else {
    //       // If not present -- request its download + put it in the cache.
    //       this.cache.push({
    //           key: url,
    //           url: url,
    //           completed: (image, key) => {
    //               if (url === key) {
    //                   cachedImageSource = fromNativeSource(image);
    //                   return cachedImageSource;
    //               }
    //           }
    //       });
    //   }
    // }
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

module.exports = "/*\r\nAdd your NativeScript specific styles here.\r\nTo learn more about styling in NativeScript see:\r\nhttps://docs.nativescript.org/angular/ui/styling\r\n*/\r\n.refresh {\r\n\tcolor: #ac00e6;\r\n}\r\n\r\n.actionbar {\r\n\tfont-size: 22;\r\n\tfont-weight: 700;\r\n\ttext-align: left;\r\n\tcolor: black;\r\n}\r\n\r\n.add-btn-container {\r\n\t/*position: absolute;*/\r\n\t/*bottom: 0;*/\r\n\t/*right: 0;*/\r\n\tvertical-align: bottom;\r\n\tz-index: 1;\r\n}\r\n\r\n.fab-button {\r\n  height: 56;\r\n  width: 56;\r\n  margin: 15;\r\n  /*margin-bottom: 64;*/\r\n  background-color: #ac00e6;\r\n  /*float: right;*/\r\n  horizontal-align: right;\r\n  vertical-align: bottom;\r\n}\r\n\r\nLabel {\r\n\ttext-align: left;\r\n}\r\n\r\n.name-label {\r\n\tmargin-top: 16;\r\n\tmargin-left: 18;\r\n\tcolor: black;\r\n\tfont-weight: 700;\r\n\tfont-size: 17;\r\n}\r\n\r\n.info-label {\r\n\tmargin-top: 4;\r\n\tmargin-left: 18;\r\n\tmargin-bottom: 16;\r\n\tcolor: black;\r\n}\r\n\r\n.post {\r\n\t/*border-bottom-width: 1;*/\r\n\tborder-color: #f1f1f1;\r\n}\r\n\r\n.post:highlighted {\r\n\t/*background-color: #f1f1f1;*/\r\n}\r\n\r\n.posting-map {\r\n\tmargin-bottom: 16;\r\n\tborder-radius: 10;\r\n\theight: 220;\r\n\twidth: 340;\r\n}\r\n\r\n.profile-picture {\r\n\theight: 50;\r\n\twidth: 50;\r\n\tborder-radius: 100%;\r\n\tvertical-align: top;\r\n\tmargin-left: 16;\r\n\tmargin-top: 20;\r\n}\r\n\r\n.activity-indicator {\r\n\tcolor: #ac00e6;\r\n}"

/***/ }),

/***/ "./app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <ActionBar title=\"Home\" class=\"actionbar\">\r\n\t<NavigationButton ios:visibility=\"collapsed\" icon=\"~/img/menu-icon.png\" (tap)=\"showSideDrawer()\" ></NavigationButton>\r\n<ActionItem android:visibility=\"collapsed\" icon=\"~/img/menu-icon.png\" ios.position=\"left\" (tap)=\"showSideDrawer()\" ></ActionItem>\r\n</ActionBar> -->\r\n\r\n    <StackLayout class=\"add-btn-container\">\r\n\t\t<FAB (tap)=\"showModal()\" icon=\"res://ic_add_white_3x\" rippleColor=\"#f1f1f1\" class=\"fab-button\"></FAB>\r\n\t</StackLayout>\r\n\r\n\t<PullToRefresh (refresh)=\"refreshList($event)\" class=\"refresh\">\r\n\t\t<ListView [items]=\"postings\" (itemTap)=\"onItemTap($event)\" #listView id=\"listView\">\r\n\t\t    <ng-template let-item=\"item\" let-i=\"index\" let-odd=\"odd\" let-even=\"even\">\r\n\t\t        <StackLayout [class.odd]=\"odd\" [class.even]=\"even\" class=\"post\">\r\n\t\t        \t  <StackLayout orientation=\"horizontal\">\r\n\t\t        \t  \t<Image [src]=\"item.profileSource\" class=\"profile-picture\" stretch=\"aspectFit\"></Image>\r\n\t\t        \t  \t<StackLayout>\r\n\t\t\t              \t<Label textWrap=\"true\" id=\"post-name\" class=\"name-label\" [text]=\"item.username\"></Label>\r\n\t\t\t              \t<Label textWrap=\"true\" id=\"post-info\" class=\"info-label\" [text]=\"item.info\"></Label>\r\n\t\t\t            </StackLayout>\r\n\t\t              </StackLayout>\r\n\t\t\t\t\t  <Image [src]=\"item.mapSource\" stretch=\"aspectFit\" class=\"posting-map\"></Image>\r\n\t\t        </StackLayout>\r\n\t\t    </ng-template>\r\n\t\t</ListView>\r\n\t</PullToRefresh>\r\n\t<ActivityIndicator #activityIndicator busy=\"true\" width=\"40\" height=\"40\" class=\"activity-indicator\">\r\n  </ActivityIndicator>"

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
        // let layout = <StackLayout>this.page.getViewById('feed');
        // layout.removeChildren();
        // this.cache.placeholder = fromFile("~/img/gray_background.jpg");
        // this.cache.maxRequests = 5;
        var _this = this;
        if (args === void 0) { args = null; }
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
                // if(url.substring(0, 27) === 'https://graph.facebook.com/')
                //   url += '?height=300';
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
    // addCache(url, img_type, user, info, pfp_url, map_url, i) {
    //   return new Promise<any>((resolve, reject) => {
    //     let cachedImageSource;
    //     const myImage = this.cache.get(url);
    //     if (myImage) {
    //       // If present -- use it.
    //       cachedImageSource = fromNativeSource(myImage);
    //       console.log(myImage)
    //       if(img_type === 'pfp')
    //         this.postings.setItem(i, new PostItem(user, info, cachedImageSource, map_url));
    //       else if (img_type === 'map')
    //         this.postings.setItem(i, new PostItem(user, info, this.postings.getItem(i).profileSource, cachedImageSource));
    //       resolve({message: 'Retrieved from cache', cacheURL: cachedImageSource});
    //     } 
    //     else {
    //       // If not present -- request its download + put it in the cache.
    //       this.cache.push({
    //           key: url,
    //           url: url,
    //           completed: (image, key) => {
    //               if (url === key) {
    //                   cachedImageSource = fromNativeSource(image);
    //                   if(img_type === 'pfp')
    //                     this.postings.setItem(i, new PostItem(user, info, cachedImageSource, map_url));
    //                   else if (img_type === 'map')
    //                     this.postings.setItem(i, new PostItem(user, info, this.postings.getItem(i).profileSource, cachedImageSource));
    //               }
    //               resolve({message: 'Added to cache', cacheURL: cachedImageSource});
    //           }
    //       });
    //     }
    //   })
    // }
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

module.exports = "/* Add mobile styles for the component here.  */\r\n.close {\r\n\tmargin: 10;\r\n\tfont-size: 28;\r\n\twidth: 48;\r\n\theight: 48;\r\n}\r\n\r\n.close-button-container {\r\n\tposition: absolute;\r\n\tleft: 0;\r\n}\r\n\r\n.header-label-2 {\r\n\tfont-size: 16;\r\n\tmargin-top: 12;\r\n\t/*margin-bottom: 12;*/\r\n\tfont-weight: 700;\r\n}\r\n\r\n.header-label-3 {\r\n\tmargin-bottom: 12;\r\n}\r\n\r\n.post {\r\n\tborder-color: #f1f1f1;\r\n}\r\n\r\n.post:highlighted {\r\n\tbackground-color: #f1f1f1;\r\n}"

/***/ }),

/***/ "./app/location/location.component.html":
/***/ (function(module, exports) {

module.exports = "<ScrollView>\r\n\t<StackLayout height=\"100%\">\r\n\t\t<StackLayout class=\"close-button-container\" orientation=\"horizontal\">\r\n\t\t\t<Label text=\"&times;\" class=\"close\" (tap)=\"close()\"></Label>\r\n\t\t</StackLayout>\r\n\r\n\t\t<StackLayout class=\"input-field\">\r\n<!-- \t\t\t<TextField class=\"input\" autocorrect=\"false\" hint=\"Find a location\" [(ngModel)]=\"address\" (textChange)=\"autocomplete()\" #searchLabel id=\"searchLabel\" required></TextField> -->\r\n\t\t\t<SearchBar hint=\"Find a location\" [text]=\"address\" (textChange)=\"search($event)\"></SearchBar>\r\n\t\t\t<StackLayout class=\"hr-light\"></StackLayout>\r\n\t\t</StackLayout>\r\n\r\n\t\t<ListView [items]=\"suggestions\" height=\"100%\">\r\n\t\t\t<ng-template let-item=\"item\" let-i=\"index\" let-odd=\"odd\" let-even=\"even\">\r\n\t\t\t\t<StackLayout [class.odd]=\"odd\" [class.even]=\"even\" class=\"post\" (tap)=\"selectPlace(item.placeSuggestion, item.placeAddress)\">\r\n\t\t\t\t\t<Label textWrap=\"true\" [text]=\"item.placeSuggestion\" class=\"header-label-2\"></Label>\r\n\t\t\t\t\t<Label textWrap=\"true\" [text]=\"item.placeAddress\" class=\"header-label-3\"></Label>\r\n\t\t\t\t</StackLayout>\r\n\t\t\t</ng-template>\r\n\t\t</ListView>\r\n\t</StackLayout>\r\n</ScrollView>"

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

module.exports = "/*\r\nAdd your NativeScript specific styles here.\r\nTo learn more about styling in NativeScript see:\r\nhttps://docs.nativescript.org/angular/ui/styling\r\n*/\r\n\r\n.login {\r\n    display: block;\r\n    color: #ac00e6;\r\n    /*padding: 6px 24px;*/\r\n    border-width: 1;\r\n    border-color: #ac00e6;\r\n    border-radius: 5;\r\n    text-align: center;\r\n    float: center;\r\n    margin: auto; \r\n    font-weight: 700;\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n    margin-bottom: 15;\r\n    width: 120;\r\n    height: 40;\r\n}\r\n\r\n.login:highlighted {\r\n    background-color: #f9e6ff;\r\n}\r\n\r\n.login-info {\r\n\tmargin-top: 120;\r\n}\r\n\r\n.homescreen-logo {\r\n\tmargin-bottom: 200;\r\n}\r\n\r\n.h1 {\r\n\tfont-size: 50;\r\n\tfont-weight: 700;\r\n\tcolor: #ac00e6;\r\n}\r\n\r\n.login-wrapper {\r\n\tbackground-color: #f1f1f1;\r\n}"

/***/ }),

/***/ "./app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<StackLayout class=\"login-wrapper\">\r\n  <StackLayout class=\"login-info\">\r\n    <Image src=\"~/img/logo.png\" height=\"180\" width=\"180\" class=\"homescreen-logo\"></Image>\r\n<!--     <StackLayout class=\"slogans\">\r\n      <Label class=\"h3\" text=\"Find Rides Fast\"></Label>\r\n      <Label class=\"h3\" text=\"Connect with other students\"></Label>\r\n    </StackLayout> -->\r\n  </StackLayout>\r\n  <StackLayout class=\"login_wrapper\">\r\n    <Button class=\"login\" (tap)=\"toLogIn()\" text=\"Login\"></Button>\r\n    <Button class=\"login\" (tap)=\"toSignUp()\" text=\"Sign up\"></Button>\r\n  </StackLayout>\r\n</StackLayout>\r\n\r\n<!--\r\nOriginal Web template:\r\n\r\n<div class=\"content-right\">\r\n  <div class=\"login_wrapper\">\r\n      <input type=\"button\" value=\"Login\" class=\"login\" (click)=\"toLogIn()\" />\r\n      <input type=\"button\" value=\"Sign up\" class=\"login\" id=\"login2\" (click)=\"toSignUp()\"/>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"content-left\">\r\n  <div class=\"login_info\">\r\n    <h1>CollegePool</h1>\r\n    <img src=\"src/img/logo.png\" alt=\"Logo\" height=\"90\" width=\"90\">\r\n    <div class=\"slogans\">\r\n      <h3>Find Rides Fast<br>\r\n      Connect with other students</h3>\r\n    </div>\r\n  </div>\r\n</div>\r\n-->"

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

module.exports = "/*\r\nAdd your NativeScript specific styles here.\r\nTo learn more about styling in NativeScript see:\r\nhttps://docs.nativescript.org/angular/ui/styling\r\n*/"

/***/ }),

/***/ "./app/loginroute/loginroute.component.html":
/***/ (function(module, exports) {

module.exports = "<StackLayout>\r\n  <Label text=\"loginroute works\" textWrap=\"true\"></Label>\r\n  <Label text=\"This is a migrated component\" textWrap=\"true\"></Label>\r\n  <Label text=\"Update it to provide the UI elements required in your mobile app\" textWrap=\"true\"></Label>\r\n</StackLayout>\r\n\r\n<!--\r\nOriginal Web template:\r\n\r\n<p>\r\n  Redirecting...\r\n</p>\r\n\r\n-->"

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

module.exports = "/* Add mobile styles for the component here.  */\r\n"

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

module.exports = "/*\r\nAdd your NativeScript specific styles here.\r\nTo learn more about styling in NativeScript see:\r\nhttps://docs.nativescript.org/angular/ui/styling\r\n*/"

/***/ }),

/***/ "./app/navigation/navigation.component.tns.html":
/***/ (function(module, exports) {

module.exports = "<Page.actionBar>\r\n    <ActionBar title=\"{{ actionBarTitle }}\">\r\n    \t<ActionItem (tap)=\"toMessages()\" icon=\"~/img/send_message_icon.png\" ios.position=\"right\" width=\"20\" height=\"20\" #actionItem></ActionItem>\r\n    </ActionBar>\r\n</Page.actionBar>\r\n\r\n<TabView [(ngModel)]=\"tabSelectedIndex\" (tabItemTap)=\"home()\" (selectedIndexChanged)=\"onSelectedIndexChanged($event)\" androidTabsPosition=\"bottom\" selectedTabTextColor=\"#ac00e6\" #tabView>\r\n    <Page *tabItem=\"homeTab\">\r\n    \t<app-home></app-home>\r\n    </Page>\r\n    <Page *tabItem=\"searchTab\">\r\n    \t<app-search></app-search>\r\n    </Page>\r\n    <Page *tabItem=\"historyTab\">\r\n    \t<app-history></app-history>\r\n    </Page>\r\n    <Page *tabItem=\"settingsTab\">\r\n    \t<app-settings></app-settings>\r\n    </Page>\r\n</TabView>\r\n\r\n\r\n\r\n<!--\r\nOriginal Web template:\r\n\r\n<div class=\"topnav\">\r\n\t<div class=\"navbtns\">\r\n\t\t<a (click)=\"toHome()\" class=\"active navigation\" id=\"homenav\">Home</a>\r\n\t\t<a (click)=\"toHistory()\" class=\"navigation\" id=\"historynav\">History</a>\r\n\t\t<a (click)=\"toPayments()\" class=\"navigation\" id=\"paymentsnav\">Payments</a>\r\n\t\t<a (click)=\"toSettings()\" class=\"navigation\" id=\"settingsnav\">Settings</a>\r\n\t\t<a (click)=\"post()\" class=\"navigation\" id=\"postnav\">Post</a>\r\n\t</div>\r\n\r\n\t<div class=\"imgnav\">\r\n\t\t<img src=\"src/icon.png\" (click)=\"dropMenu()\">\r\n\t</div>\r\n</div>\r\n\r\n<div class=\"caret\" id=\"dropdown-caret\"></div>\r\n<div class=\"dropdown\" id=\"dropdown-menu\">\r\n\t<div class=\"dropdown-option\" (click)=\"toHome()\">\r\n\t\t<span>Home</span>\r\n\t</div>\r\n\t<div class=\"dropdown-option\" (click)=\"toSettings()\">\r\n\t\t<span>Settings</span>\r\n\t</div>\r\n\t<div class=\"dropdown-option\" (click)=\"logout()\">\r\n\t\t<span>Logout</span>\r\n\t</div>\r\n\t<div class=\"dropdown-option group-two\" (click)=\"dropMenu()\">\r\n\t\t<span>Close</span>\r\n\t</div>\r\n</div>\r\n\r\n-->"

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
                this.actionBarTitle = 'Your Posts';
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

module.exports = "/* Add mobile styles for the component here.  */\r\n.remove-payment-label {\r\n\tfont-size: 16;\r\n\tcolor: #ac00e6;\r\n\tmargin-left: 18;\r\n\ttext-align: left;\r\n\tpadding: 18;\r\n}\r\n\r\n.info-label {\r\n\tcolor: black;\r\n\tfont-size: 24;\r\n\ttext-align: left;\r\n\tmargin-left: 36;\r\n\tmargin-top: 36;\r\n}\r\n\r\n.details-label {\r\n\tcolor: black;\r\n\tfont-size: 16;\r\n\ttext-align: left;\r\n\tmargin-left: 36;\r\n\tmargin-top: 18;\r\n\tmargin-bottom: 72;\r\n}\r\n\r\n.activity-indicator {\r\n\tcolor: #ac00e6;\r\n}"

/***/ }),

/***/ "./app/payment-info/payment-info.component.html":
/***/ (function(module, exports) {

module.exports = "<Page>\r\n\t<Page.actionBar>\r\n\t\t<ActionBar title=\"Payment Info\">\r\n\t\t  <NavigationButton text=\"Go Back\" android.systemIcon=\"ic_menu_back\" (tap)=\"onNavBtnTap()\"></NavigationButton>\r\n\t\t</ActionBar>\r\n\t</Page.actionBar>\r\n\r\n\t<StackLayout #infoContainer>\r\n\t\t<StackLayout>\r\n\t\t\t<Label textWrap=\"true\" text=\"{{ paymentInfo.type }}\" class=\"info-label\"></Label>\r\n\t\t\t<Label textWrap=\"true\" text=\"{{ paymentInfo.info }}\" class=\"details-label\"></Label>\r\n\t\t</StackLayout>\r\n\t\t<StackLayout (tap)=\"remove()\">\r\n\t\t\t<Label textWrap=\"true\" text=\"Remove\" class=\"remove-payment-label\"></Label>\r\n\t\t</StackLayout>  \r\n\t</StackLayout>\r\n</Page>\r\n<ActivityIndicator row=\"1\" #activityIndicator busy=\"false\" width=\"40\" height=\"40\" class=\"activity-indicator\">\r\n</ActivityIndicator>"

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

module.exports = "/*\r\nAdd your NativeScript specific styles here.\r\nTo learn more about styling in NativeScript see:\r\nhttps://docs.nativescript.org/angular/ui/styling\r\n*/"

/***/ }),

/***/ "./app/payment-method/payment-method.component.html":
/***/ (function(module, exports) {

module.exports = "<StackLayout>\r\n  <Label text=\"payment-method works\" textWrap=\"true\"></Label>\r\n  <Label text=\"This is a migrated component\" textWrap=\"true\"></Label>\r\n  <Label text=\"Update it to provide the UI elements required in your mobile app\" textWrap=\"true\"></Label>\r\n</StackLayout>\r\n\r\n<!--\r\nOriginal Web template:\r\n\r\n<div class=\"payment-method\">\r\n\t<span class=\"payment-type-icon\"></span>\r\n\t<span class=\"payment-type-details\"></span>\r\n</div>\r\n-->"

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

module.exports = ".payment-type-icon {\r\n\theight: 34;\r\n\twidth: 34;\r\n\tbackground-position: center;\r\n\tmargin-top: 18;\r\n\tmargin-bottom: 18;\r\n\tmargin-left: 36;\r\n}\r\n\r\n.payment-info-label {\r\n\tfont-size: 16;\r\n\t/*font-weight: 700;*/\r\n\tpadding: 30;\r\n\ttext-align: center;\r\n\tcolor: black;\r\n}\r\n\r\n.add-payment-label {\r\n\tfont-size: 16;\r\n\tcolor: #ac00e6;\r\n\tmargin-left: 36;\r\n\ttext-align: left;\r\n\tpadding: 18;\r\n}\r\n\r\n.credit-card-icon {\r\n\tcontent: url(\"~/img/credit-card-icon.png\");\r\n}\r\n\r\n.paypal-icon {\r\n\tcontent: url(\"~/img/paypal-icon.png\");\r\n}\r\n\r\n.venmo-icon {\r\n\tcontent: url(\"~/img/venmo-icon.png\");\r\n}\r\n\r\n.post {\r\n\r\n\tborder-color: #f1f1f1;\r\n}\r\n\r\n.post:highlighted {\r\n\tbackground-color: #f1f1f1;\r\n}\r\n\r\n.activity-indicator {\r\n\tcolor: #ac00e6;\r\n}\r\n\r\n.add-container {\r\n\tvisibility: collapse;\r\n}"

/***/ }),

/***/ "./app/payments/payments.component.html":
/***/ (function(module, exports) {

module.exports = "<Page>\r\n\t<Page.actionBar>\r\n\t\t<ActionBar title=\"Payments\">\r\n\t\t  <NavigationButton text=\"Go Back\" android.systemIcon=\"ic_menu_back\" (tap)=\"onNavBtnTap()\"></NavigationButton>\r\n\t\t</ActionBar>\r\n\t</Page.actionBar>\r\n\r\n\r\n\r\n\t<StackLayout #paymentsContainer>\r\n\t\t<ListView [items]=\"payments\" separatorColor=\"transparent\" (itemTap)=\"onSelect($event)\">\r\n\t\t\t<ng-template let-item=\"item\" let-i=\"index\" let-odd=\"odd\" let-even=\"even\">\r\n\t\t\t\t<StackLayout [class.odd]=\"odd\" [class.even]=\"even\" class=\"post\" orientation=\"horizontal\">\r\n\t\t\t\t\t<Image [src]=\"item.paymentType\" class=\"payment-type-icon\"></Image>\r\n\t\t\t\t\t<Label textWrap=\"true\" [text]=\"item.info\" class=\"payment-info-label\"></Label>\r\n\t\t\t\t</StackLayout>\r\n\t\t\t</ng-template>\r\n\t\t</ListView>\r\n\r\n\t\t<StackLayout (tap)=\"showModal()\" #addContainer class=\"add-container\">\r\n\t\t\t<Label textWrap=\"true\" text=\"Add payment method\" class=\"add-payment-label\"></Label>\r\n\t\t</StackLayout>  \r\n\t</StackLayout>\r\n</Page>\r\n\r\n<ActivityIndicator #activityIndicator busy=\"true\" width=\"40\" height=\"40\" class=\"activity-indicator\">\r\n</ActivityIndicator>"

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
        this.router.back();
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

module.exports = "/* Add mobile styles for the component here.  */\r\n.map-view {\r\n\theight: 100%;\r\n\twidth: 100%;\r\n\tvertical-align: bottom;\r\n}\r\n\r\n.profile-picture {\r\n\theight: 50;\r\n\twidth: 50;\r\n\tborder-radius: 100%;\r\n\tvertical-align: top;\r\n\tmargin-left: 16;\r\n\tmargin-top: 20;\r\n}\r\n\r\n.name-label {\r\n\tmargin-top: 16;\r\n\tmargin-left: 18;\r\n\tcolor: black;\r\n\tfont-weight: 700;\r\n\tfont-size: 17;\r\n\ttext-align: left;\r\n}\r\n\r\n.info-label {\r\n\tmargin-top: 4;\r\n\tmargin-left: 18;\r\n\tmargin-bottom: 16;\r\n\tcolor: black;\r\n\ttext-align: left;\r\n}\r\n\r\n.label-container {\r\n\tvertical-align: middle;\r\n}\r\n\r\n.activity-indicator {\r\n\tcolor: #ac00e6;\r\n}"

/***/ }),

/***/ "./app/posting-info/posting-info.component.html":
/***/ (function(module, exports) {

module.exports = "<Page.actionBar>\r\n    <ActionBar title=\"Post\">\r\n    \t<NavigationButton text=\"Go Back\" android.systemIcon=\"ic_menu_back\" (tap)=\"onNavBtnTap()\"></NavigationButton>\r\n\t    <ActionItem (tap)=\"promptDelete()\"\r\n\t      ios.systemIcon=\"16\" ios.position=\"right\"\r\n\t      text=\"Delete\" android.position=\"popup\" #deleteItem></ActionItem>\r\n\t    <ActionItem (tap)=\"onReport()\"\r\n\t      ios.systemIcon=\"9\" ios.position=\"right\"\r\n\t      text=\"Report\" android.position=\"popup\"></ActionItem>\r\n    </ActionBar>\r\n</Page.actionBar>\r\n<GridLayout rows=\"2*,auto,10*\" #layout>\r\n\t<StackLayout orientation=\"horizontal\" row=\"0\" class=\"label-container\" #infoContainer>\r\n\t\t<Image src=\"{{ profileSource }}\" class=\"profile-picture\" stretch=\"aspectFit\"></Image>\r\n\t  \t<StackLayout>\r\n\t      \t<Label textWrap=\"true\" id=\"post-name\" class=\"name-label\" text=\"{{ username }}\"></Label>\r\n\t      \t<Label textWrap=\"true\" id=\"post-info\" class=\"info-label\" text=\"{{ info }}\"></Label>\r\n\t    </StackLayout>\r\n\t</StackLayout>\r\n\t<StackLayout class=\"btn-container\" #buttonContainer row=\"1\">\r\n\t\t<Button class=\"connect-btn\" (tap)=\"onConnectTap()\" text=\"{{ buttonText }}\"></Button>\r\n\t</StackLayout>\r\n\t<MapView (mapReady)=\"onMapReady($event)\" [latitude]=\"latitude\" [longitude]=\"longitude\" class=\"map-view\" row=\"2\" #mapView></MapView>\r\n</GridLayout>\r\n<ActivityIndicator #activityIndicator busy=\"true\" width=\"40\" height=\"40\" class=\"activity-indicator\"></ActivityIndicator>"

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

module.exports = "/*\r\nAdd your NativeScript specific styles here.\r\nTo learn more about styling in NativeScript see:\r\nhttps://docs.nativescript.org/angular/ui/styling\r\n*/\r\n\r\nLabel {\r\n\ttext-align: left;\r\n}\r\n\r\n.name-label {\r\n\tmargin-top: 16;\r\n\tmargin-left: 24;\r\n\tcolor: black;\r\n\tfont-weight: 700;\r\n\tfont-size: 18;\r\n}\r\n\r\n.info-label {\r\n\tmargin-top: 12;\r\n\tmargin-left: 24;\r\n\tmargin-bottom: 16;\r\n\tcolor: black;\r\n}\r\n\r\n.post {\r\n\tborder-bottom-width: 1;\r\n\tborder-color: #f1f1f1;\r\n}\r\n\r\n.post:highlighted {\r\n\tbackground-color: #f1f1f1;\r\n}\r\n\r\n.posting-map {\r\n\tmargin-bottom: 16;\r\n\tborder-radius: 10;\r\n\t/*align-content: center;*/\r\n}"

/***/ }),

/***/ "./app/posting/posting.component.html":
/***/ (function(module, exports) {

module.exports = "<StackLayout class=\"post\">\r\n  <Label textWrap=\"true\" id=\"post-name\" class=\"name-label\"></Label>\r\n  <Label textWrap=\"true\" id=\"post-info\" class=\"info-label\"></Label>\r\n  <Image src=\"~/img/cville-map.png\" stretch=\"none\" height=\"220\" width=\"300\" class=\"posting-map\"></Image>\r\n</StackLayout>\r\n\r\n<!--\r\nOriginal Web template:\r\n\r\n\r\n-->"

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

module.exports = "/* Add mobile styles for the component here.  */\r\n.header{\r\n    margin-top: 50;\r\n    margin-left: 22;\r\n    margin-right: 22;\r\n\tcolor: black;\r\n    font-weight: 500;\r\n    font-size: 24;\r\n    text-align: left;\r\n}\r\n.submit-btn{\r\n    background-color:#ac00e6;\r\n    width: 75%;\r\n    height: 170px;\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n    color: white;\r\n    margin-top: 20;\r\n}\r\n.text-field{\r\n    width: 85%;\r\n    margin-top: 20;\r\n    color:#696969\r\n}\r\n\r\n.close-button-container {\r\n\tposition: absolute;\r\n\tleft: 0;\r\n}\r\n.close {\r\n\tmargin: 10;\r\n\tfont-size: 40;\r\n\twidth: 48;\r\n    height: 48;\r\n    color: black\r\n}\r\n\r\n.error-message {\r\n\tcolor: red;\r\n\tfont-size: 16;\r\n\tvisibility: collapse;\r\n}"

/***/ }),

/***/ "./app/reauth/reauth.component.html":
/***/ (function(module, exports) {

module.exports = "<Stacklayout>\r\n    <StackLayout class=\"close-button-container\" orientation=\"horizontal\">\r\n        <Label text=\"&times;\" class=\"close\" (tap)=\"close('cancel')\"></Label>\r\n    </StackLayout>\r\n    <Label class=\"header\" text=\"Please re-enter your password\" textWrap=\"true\"></Label>\r\n    <StackLayout class=\"input-field\">\r\n        <TextField #val [(ngModel)]=\"password\" secure=\"true\" autocorrect=\"false\" returnKeyType=\"done\" class=\"text-field\"></TextField>\r\n    </StackLayout>\r\n    <Label text=\"The password you entered was incorrect\" textWrap=\"true\" class=\"error-message\" #errorMessage></Label>\r\n\r\n    <Button text=\"Submit\" (tap)=\"submit(password)\" class=\"submit-btn\"></Button>\r\n\r\n</Stacklayout>"

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

module.exports = "/* Add mobile styles for the component here.  */\r\n"

/***/ }),

/***/ "./app/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <app-navigation></app-navigation> -->\r\n<StackLayout>\r\n  <Label text=\"search works\" textWrap=\"true\"></Label>\r\n  <Label text=\"This is a migrated component\" textWrap=\"true\"></Label>\r\n  <Label text=\"Update it to provide the UI elements required in your mobile app\" textWrap=\"true\"></Label>\r\n</StackLayout>"

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

module.exports = "/*\r\nAdd your NativeScript specific styles here.\r\nTo learn more about styling in NativeScript see:\r\nhttps://docs.nativescript.org/angular/ui/styling\r\n*/\r\n\r\n#Header {\r\n    color:black;\r\n    font-size: 24;\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n}\r\n\r\n#listView {\r\n\tmargin-bottom: 20;\r\n}\r\n\r\n.update {\r\n    display: block;\r\n    color: #ac00e6;\r\n    border-width: 1;\r\n    border-color: #ac00e6;\r\n    border-radius: 5;\r\n    text-align: center;\r\n    float: center;\r\n    margin: auto; \r\n    font-weight: 700;\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n    margin-bottom: 15;\r\n    width: 200;\r\n    height: 40;\r\n}\r\n.update:highlighted {\r\n    background-color: #f9e6ff;\r\n}\r\n.payments {\r\n\tcolor: black;\r\n\tmargin-top: 12;\r\n\tmargin-bottom: 12;\r\n\tmargin-left: 18;\r\n    text-align: left;\r\n    font-size: 15;\r\n}\r\n.logout {\r\n\tcolor: #ac00e6;\r\n\tmargin-top: 12;\r\n\tmargin-bottom: 12;\r\n\tmargin-left: 18;\r\n\tfont-weight: 500;\r\n    text-align: left;\r\n    font-size: 15;\r\n}\r\n\r\n.btn-list-view {\r\n\tmargin-top: 36;\r\n\theight: 100;\r\n}\r\n\r\n.item-list-view {\r\n\theight: 275;\r\n}\r\n\r\n.profile-picture {\r\n\theight: 100;\r\n\twidth: 100;\r\n\tmargin-top: 10;\r\n\tmargin-bottom: 8;\r\n\t/*background-repeat: no-repeat;*/\r\n}\r\n\r\n.img-rounded {\r\n\tborder-radius: 100%;\r\n}\r\n\r\n.header-label {\r\n\tmargin-bottom: 5;\r\n\tfont-size: 15;\r\n\tcolor: #4285f4;\r\n}\r\n\r\n.bold {\r\n\tfont-weight: 500;\r\n}\r\n\r\n.activity-indicator {\r\n  color: #ac00e6;\r\n  margin: 25%;\r\n}\r\n\r\n.value-label {\r\n\tmargin-left: 18;\r\n\tmargin-bottom: 10;\r\n    color: black;\r\n    font-weight: 400;\r\n    font-size: 18;\r\n    text-align: left;\r\n}\r\n.title-label {\r\n\tmargin-top: 16;\r\n\tmargin-left: 18;\r\n\tcolor: #696969;\r\n    text-align: left;\r\n}\r\n\r\n.stack-layout{\r\n    height:100%\r\n}\r\n.activity-indicator{\r\n    height: 50%;\r\n}\r\nListView {\r\n    separator-color: transparent;\r\n}"

/***/ }),

/***/ "./app/settings/settings.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <app-navigation></app-navigation> -->\r\n<Stacklayout height=\"100%\">\r\n    <StackLayout #settingsContainer>\r\n      <!-- <Label id= \"Header\" text=\"Account Settings\" textWrap=\"true\"></Label> -->\r\n      <Image src=\"{{ profile }}\" stretch=\"aspectFit\" class=\"img-rounded profile-picture\" (tap)=\"uploadPfp()\"></Image>\r\n      <Label text=\"Change Photo\" class=\"header-label bold\" (tap)=\"uploadPfp()\"></Label>\r\n\r\n      <ListView [items]=\"fields\" #listView id=\"listView\" (itemTap)=\"showModal($event)\" class=\"item-list-view\">\r\n        <ng-template let-item=\"item\" let-i=\"index\" let-odd=\"odd\" let-even=\"even\">\r\n          <StackLayout class=\"stack-layout\">\r\n            <Label textWrap=\"true\" class=\"title-label\" [text]=\"item.label\"></Label>\r\n            <Label textWrap=\"true\" class=\"value-label\" [text]=\"item.value\"></Label>\r\n          </StackLayout>\r\n        </ng-template>\r\n      </ListView>\r\n      <!-- <RadDataForm tkExampleTitle tkToggleNavButton [source]=\"person\"></RadDataForm>   -->\r\n      <!-- <Button class=\"Update\"  text=\"Update Settings\"></Button> -->\r\n\r\n      <ListView [items]=\"buttons\" #listViewSecond (itemTap)=\"route($event)\" (setupItemView)=\"setupItemView($event)\" class=\"btn-list-view\">\r\n        <ng-template let-item=\"item\" let-i=\"index\" let-odd=\"odd\" let-even=\"even\" let-payments=\"payments\" let-logout=\"logout\">\r\n          <StackLayout class=\"stack-layout\">\r\n            <Label textWrap=\"true\" [text]=\"item\" [class.payments]=\"payments\" [class.logout]=\"logout\"></Label>\r\n          </StackLayout>\r\n        </ng-template>\r\n      </ListView>\r\n<!--       <StackLayout class=\"payments-container\" (tap)=\"toPayments()\">\r\n        <Label class=\"payments\" text=\"Payments\"></Label>\r\n      </StackLayout>\r\n      <StackLayout class=\"logout-container\" (tap)=\"logOut()\">\r\n        <Label class=\"logout\" text=\"Log out\"></Label>\r\n      </StackLayout> -->\r\n    </StackLayout>\r\n\r\n<ActivityIndicator #activityIndicator busy=\"true\" width=\"40\"  class=\"activity-indicator\">\r\n  </ActivityIndicator>\r\n</Stacklayout>"

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

module.exports = "/* Add mobile styles for the component here.  */\r\n.header{\r\n    margin-top: 50;\r\n\tmargin-left: 32;\r\n\tcolor: black;\r\n    font-weight: 500;\r\n    font-size: 30;\r\n    text-align: left;\r\n}\r\n.submit-btn{\r\n    background-color:#ac00e6;\r\n    width: 75%;\r\n    height: 170px;\r\n/*    font-family: \"Segoe UI\",Arial,sans-serif;\r\n*/    color: white;\r\n    margin-top: 20;\r\n}\r\n.text-field{\r\n    width: 85%;\r\n    margin-top: 20;\r\n    color:#696969\r\n}\r\n\r\n.close-button-container {\r\n\tposition: absolute;\r\n\tleft: 0;\r\n}\r\n.close {\r\n\tmargin: 10;\r\n\tfont-size: 40;\r\n\twidth: 48;\r\n    height: 48;\r\n    color: black\r\n}\r\n\r\n.error-message {\r\n    color: red;\r\n    font-size: 16;\r\n    visibility: collapse;\r\n}\r\n\r\n.second-val {\r\n    visibility: collapse;\r\n}"

/***/ }),

/***/ "./app/settingsform/settingsform.component.html":
/***/ (function(module, exports) {

module.exports = "<Stacklayout>\r\n    <StackLayout class=\"close-button-container\" orientation=\"horizontal\">\r\n        <Label text=\"&times;\" class=\"close\" (tap)=\"close('cancel')\"></Label>\r\n    </StackLayout>\r\n    <Label class=\"header\" [text]=\"label\" textWrap=\"true\"></Label>\r\n    <StackLayout class=\"input-field\">\r\n    \t<!-- <MaskedTextField class=\"input input-border\" mask=\"(000) 000-0000\" [(ngModel)]=\"value\" keyboardType=\"phone\"></MaskedTextField> -->\r\n        <TextField #val [(ngModel)]=\"value\" [keyboardType] = \"keyboard\" autocorrect=\"false\" returnKeyType=\"{{returnKey}}\"\r\n         [maxLength]= \"maxlength\" class=\"text-field\" secure=\"{{isSecure}}\" hint=\"{{ hint }}\"></TextField>\r\n        <TextField #secondVal [(ngModel)]=\"secondValue\" [keyboardType] = \"keyboard\" autocorrect=\"false\" returnKeyType=\"done\"\r\n         [maxLength]= \"maxlength\" class=\"text-field second-val\" secure=\"{{isSecure}}\" hint=\"{{ secondHint }}\"></TextField>\r\n    </StackLayout>\r\n    <Label #errorMessage text=\"{{ errorText }}\" textWrap=\"true\" class=\"error-message\"></Label>\r\n\r\n    <Button text=\"Save\" (tap)=\"submitData(val.text)\" class=\"submit-btn\"></Button>\r\n\r\n</Stacklayout>"

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

module.exports = "<p>\r\n  update works!\r\n</p>\r\n"

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

/***/ "./app/view-image/view-image.component.css":
/***/ (function(module, exports) {

module.exports = "/* Add mobile styles for the component here.  */\r\n.img {\r\n\tbackground-color: black;\r\n}"

/***/ }),

/***/ "./app/view-image/view-image.component.html":
/***/ (function(module, exports) {

module.exports = "<Page.actionBar>\r\n  <ActionBar title=\"\" backgroundColor=\"black\">\r\n  \t<NavigationButton text=\"Go Back\" android.systemIcon=\"ic_menu_back\" (tap)=\"onNavBtnTap()\"></NavigationButton>\r\n  </ActionBar>\r\n</Page.actionBar>\r\n<Image src=\"{{ imgSource }}\" class=\"img\"></Image>"

/***/ }),

/***/ "./app/view-image/view-image.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewImageComponent", function() { return ViewImageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _datatransfer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/datatransfer.service.ts");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/nativescript-angular/router/index.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ViewImageComponent = /** @class */ (function () {
    function ViewImageComponent(transferService, router) {
        this.transferService = transferService;
        this.router = router;
    }
    ViewImageComponent.prototype.ngOnInit = function () {
        this.imgSource = this.transferService.getData();
        console.log(this.imgSource);
    };
    ViewImageComponent.prototype.onNavBtnTap = function () {
        if (this.router.canGoBack) {
            this.router.back();
        }
        else {
            this.router.navigate(['navigation']);
        }
    };
    ViewImageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-image',
            template: __webpack_require__("./app/view-image/view-image.component.html"),
            styles: [__webpack_require__("./app/view-image/view-image.component.css")]
        }),
        __metadata("design:paramtypes", [_datatransfer_service__WEBPACK_IMPORTED_MODULE_1__["TransferService"], nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterExtensions"]])
    ], ViewImageComponent);
    return ViewImageComponent;
}());



/***/ }),

/***/ "./app/welcome/welcome.component.css":
/***/ (function(module, exports) {

module.exports = "/* Add mobile styles for the component here.  */\r\n.page {\r\n  align-items: center;\r\n  flex-direction: column;\r\n  visibility: collapse;\r\n}\r\n.form {\r\n  margin-left: 30;\r\n  margin-right: 30;\r\n  flex-grow: 2;\r\n  vertical-align: middle;\r\n}\r\n\r\n.logo {\r\n  margin-top: 15;\r\n  margin-bottom: 72;\r\n  height: 120;\r\n  font-weight: bold;\r\n}\r\n.header {\r\n  horizontal-align: center;\r\n  font-size: 25;\r\n  font-weight: 600;\r\n  margin-bottom: 70;\r\n  text-align: center;\r\n  color: #ac00e6;\r\n}\r\n\r\n.input-field {\r\n  margin-bottom: 25;\r\n}\r\n.input {\r\n  font-size: 18;\r\n  placeholder-color: #A8A8A8;\r\n}\r\n\r\n.btn-primary {\r\n  height: 50;\r\n  margin: 30 5 15 5;\r\n  background-color: #ac00e6;\r\n  border-radius: 5;\r\n  font-size: 20;\r\n  font-weight: 600;\r\n}\r\n\r\n.btn-fb {\r\n  height: 100;\r\n  margin: 0 5 15 5;\r\n  /*border-radius: 5;*/\r\n  font-size: 20;\r\n  font-weight: 600;\r\n}\r\n\r\n.login-label {\r\n  horizontal-align: center;\r\n  color: #A8A8A8;\r\n  font-size: 16;\r\n  /* margin-bottom: 20; */\r\n}\r\n.sign-up-label {\r\n  horizontal-align: center;\r\n  color: #A8A8A8;\r\n  font-size: 16;\r\n  /* margin-bottom: 20; */\r\n}\r\n.bold {\r\n  color: #000000; \r\n}\r\n.activity-indicator {\r\n  color: #ac00e6;\r\n}"

/***/ }),

/***/ "./app/welcome/welcome.component.html":
/***/ (function(module, exports) {

module.exports = "<ScrollView>\r\n\t<FlexboxLayout class=\"page\" #welcomeContainer>\r\n\t\t<!-- <GridLayout rows=\"630, auto\"> -->\r\n\t\t<GridLayout rows=\"*, auto\">\r\n\t\t\t<StackLayout class=\"form\" row=0>\r\n\t\t\t\t<Image class=\"logo\" src=\"~/img/logo.png\"></Image>\r\n\t\t\t\t<!-- <Label class=\"header\" text=\"CollegePool\"></Label> -->\r\n\r\n\t\t\t\t<StackLayout *ngIf=\"!isLoggingIn\" class=\"input-field\">\r\n\t\t\t\t\t<TextField class=\"input\" hint=\"First name\" [(ngModel)]=\"firstName\" returnKeyType=\"next\" #fn>\r\n\t\t\t\t\t</TextField>\r\n\t\t\t\t\t<StackLayout class=\"hr-light\"></StackLayout>\r\n\t\t\t\t</StackLayout>\r\n\r\n\t\t\t\t<StackLayout *ngIf=\"!isLoggingIn\" class=\"input-field\">\r\n\t\t\t\t\t<TextField class=\"input\" hint=\"Last name\" [(ngModel)]=\"lastName\" returnKeyType=\"next\" #ln>\r\n\t\t\t\t\t</TextField>\r\n\t\t\t\t\t<StackLayout class=\"hr-light\"></StackLayout>\r\n\t\t\t\t</StackLayout>\r\n\r\n\t\t\t\t<StackLayout class=\"input-field\">\r\n\t\t\t\t\t<TextField class=\"input\" hint=\"Email\" keyboardType=\"email\" autocorrect=\"false\"\r\n\t\t\t\t\t\tautocapitalizationType=\"none\" [(ngModel)]=\"email\" returnKeyType=\"next\"\r\n\t\t\t\t\t\t(returnPress)=\"focusPassword()\" #em></TextField>\r\n\t\t\t\t\t<StackLayout class=\"hr-light\"></StackLayout>\r\n\t\t\t\t</StackLayout>\r\n\r\n\t\t\t\t<StackLayout class=\"input-field\">\r\n\t\t\t\t\t<TextField class=\"input\" hint=\"Password\" secure=\"true\" [(ngModel)]=\"password\"\r\n\t\t\t\t\t\t[returnKeyType]=\"isLoggingIn ? 'done' : 'next'\" (returnPress)=\"focusConfirmPassword()\" #pw>\r\n\t\t\t\t\t</TextField>\r\n\t\t\t\t\t<StackLayout class=\"hr-light\"></StackLayout>\r\n\t\t\t\t</StackLayout>\r\n\r\n\t\t\t\t<StackLayout *ngIf=\"!isLoggingIn\" class=\"input-field\">\r\n\t\t\t\t\t<TextField class=\"input\" hint=\"Confirm password\" secure=\"true\" [(ngModel)]=\"confirmPassword\"\r\n\t\t\t\t\t\treturnKeyType=\"done\" #cpw></TextField>\r\n\t\t\t\t\t<StackLayout class=\"hr-light\"></StackLayout>\r\n\t\t\t\t</StackLayout>\r\n\r\n\t\t\t\t<Button [text]=\"isLoggingIn ? 'Log In' : 'Sign Up'\" (tap)=\"submit()\"\r\n\t\t\t\t\tclass=\"btn btn-primary m-t-20\"></Button>\r\n\t\t\t\t<StackLayout>\r\n\t\t\t\t\t<FacebookLoginButton (tap)=\"fbLogin()\" class=\"btn-fb\"></FacebookLoginButton>\r\n\t\t\t\t</StackLayout>\r\n\t\t\t\t<Label *ngIf=\"isLoggingIn\" text=\"Forgot your password?\" class=\"login-label\"\r\n\t\t\t\t\t(tap)=\"forgotPassword()\"></Label>\r\n\t\t\t</StackLayout>\r\n\t\t\t<StackLayout row=1>\r\n\t\t\t\t<Label class=\"sign-up-label\" (tap)=\"toggleForm()\">\r\n\t\t\t\t\t<FormattedString>\r\n\t\t\t\t\t\t<Span [text]=\"isLoggingIn ? 'Don’t have an account? ' : 'Back to Login'\"></Span>\r\n\t\t\t\t\t\t<Span [text]=\"isLoggingIn ? 'Sign up' : ''\" class=\"bold\"></Span>\r\n\t\t\t\t\t</FormattedString>\r\n\t\t\t\t</Label>\r\n\t\t\t</StackLayout>\r\n\t\t</GridLayout>\r\n\t</FlexboxLayout>\r\n</ScrollView>\r\n<ActivityIndicator #activityIndicator busy=\"true\" width=\"40\" height=\"40\" class=\"activity-indicator\">\r\n</ActivityIndicator>"

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
/* harmony import */ var nativescript_angular_directives_dialogs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../node_modules/nativescript-angular/directives/dialogs.js");
/* harmony import */ var nativescript_angular_directives_dialogs__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_directives_dialogs__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _forget_form_forget_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./app/forget-form/forget-form.component.ts");
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
    function WelcomeComponent(page, router, logincheckService, transferService, ngZone, modal, vcRef) {
        this.page = page;
        this.router = router;
        this.logincheckService = logincheckService;
        this.transferService = transferService;
        this.ngZone = ngZone;
        this.modal = modal;
        this.vcRef = vcRef;
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
            console.log("Email Verified Status", res.emailVerified);
            if (res.emailVerified) {
                _this.logincheckService.loginUser(res.uid);
                nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_4__["firestore"].collection('users').doc(res.uid).get().then(function (doc) {
                    if (doc.data().payment_id == null)
                        _this.logincheckService.addUserToBraintree(res.displayName, res.displayName, res.email);
                });
                _this.updateTokens(res.uid);
                _this.router.navigate(['navigation'], { clearHistory: true });
            }
            else {
                _this.alert("Your email has not been verified yet. Please check your email for a verification link.");
            }
        }).catch(function (err) {
            console.log(err);
            _this.alert("We could not find an account matching your email or password.");
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
            // this.logincheckService.loginUser(res.uid)
            _this.logincheckService.addUserToBraintree('test', 'test user', res.email);
            nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_4__["sendEmailVerification"]().then(function () {
                console.log("Email verification sent");
                _this.alert("An email verification link has been sent. Please check your email for the link.");
                _this.toggleForm();
            }).catch(function (err) {
                console.log("Error sending email verificatiodn: " + err);
            });
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
        var options = {
            context: {},
            fullscreen: true,
            viewContainerRef: this.vcRef
            // animated: true,
            // transition: { name: "slideTop" }
        };
        this.modal.showModal(_forget_form_forget_form_component__WEBPACK_IMPORTED_MODULE_9__["ForgetFormComponent"], options).then(function (res) {
            if (res == 'update') {
                // this.updateListView();
            }
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
        if (!this.isLoggingIn && this.cpw) {
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
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], nativescript_angular_directives_dialogs__WEBPACK_IMPORTED_MODULE_8__["ModalDialogService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]])
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vJF9sYXp5X3JvdXRlX3Jlc291cmNlIGxhenkgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9hcHAuY3NzIiwid2VicGFjazovLy8uL2FwcC9hZGQtY2FyZC1wYXltZW50L2FkZC1jYXJkLXBheW1lbnQuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvYWRkLWNhcmQtcGF5bWVudC9hZGQtY2FyZC1wYXltZW50LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9hZGQtY2FyZC1wYXltZW50L2FkZC1jYXJkLXBheW1lbnQuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9hZGQtbW9kYWwvYWRkLW1vZGFsLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2FkZC1tb2RhbC9hZGQtbW9kYWwuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2FkZC1tb2RhbC9hZGQtbW9kYWwuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9hZGQtcGF5bWVudC9hZGQtcGF5bWVudC5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC9hZGQtcGF5bWVudC9hZGQtcGF5bWVudC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvYWRkLXBheW1lbnQvYWRkLXBheW1lbnQuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9hcHAtcm91dGluZy5tb2R1bGUudG5zLnRzIiwid2VicGFjazovLy8uL2FwcC9hcHAuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2FwcC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2FwcC5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2F1dG8tZ2VuZXJhdGVkL2F1dG8tZ2VuZXJhdGVkLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2F1dG8tZ2VuZXJhdGVkL2F1dG8tZ2VuZXJhdGVkLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9hdXRvLWdlbmVyYXRlZC9hdXRvLWdlbmVyYXRlZC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NoYXQtbGlzdC9jaGF0LWxpc3QuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvY2hhdC1saXN0L2NoYXQtbGlzdC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvY2hhdC1saXN0L2NoYXQtbGlzdC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NoYXQvY2hhdC5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC9jaGF0L2NoYXQuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NoYXQvY2hhdC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbmZpcm1hdGlvbi9jb25maXJtYXRpb24uY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29uZmlybWF0aW9uL2NvbmZpcm1hdGlvbi5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvY29uZmlybWF0aW9uL2NvbmZpcm1hdGlvbi5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Nvbm5lY3QvY29ubmVjdC5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC9jb25uZWN0L2Nvbm5lY3QuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Nvbm5lY3QvY29ubmVjdC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2RhdGF0cmFuc2Zlci5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL2FwcC9kaWFsb2cvZGlhbG9nLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2RpYWxvZy9kaWFsb2cuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2RpYWxvZy9kaWFsb2cuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9keW5hbWljLWFkZC5zZXJ2aWNlLnRucy50cyIsIndlYnBhY2s6Ly8vLi9hcHAvZHluYW1pYy1hZGQuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvZmxvYXQtYnRuL2Zsb2F0LWJ0bi5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC9mbG9hdC1idG4vZmxvYXQtYnRuLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9mbG9hdC1idG4vZmxvYXQtYnRuLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvZm9yZ2V0LWZvcm0vZm9yZ2V0LWZvcm0uY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvZm9yZ2V0LWZvcm0vZm9yZ2V0LWZvcm0uY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2ZvcmdldC1mb3JtL2ZvcmdldC1mb3JtLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvZ29vZ2xlLW1hcHMuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvaGlzdG9yeS9oaXN0b3J5LmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2hpc3RvcnkvaGlzdG9yeS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvaGlzdG9yeS9oaXN0b3J5LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvaG9tZS5kaXJlY3RpdmUudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC9ob21lL2hvbWUuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2hvbWUvaG9tZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2xvY2F0aW9uL2xvY2F0aW9uLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2xvY2F0aW9uL2xvY2F0aW9uLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9sb2NhdGlvbi9sb2NhdGlvbi5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2xvZ2luLmRpcmVjdGl2ZS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvbG9naW5jaGVjay5zZXJ2aWNlLnRucy50cyIsIndlYnBhY2s6Ly8vLi9hcHAvbG9naW5jaGVjay5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL2FwcC9sb2dpbnJvdXRlL2xvZ2lucm91dGUuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvbG9naW5yb3V0ZS9sb2dpbnJvdXRlLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9sb2dpbnJvdXRlL2xvZ2lucm91dGUuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9tZXNzYWdlLW1vZGFsL21lc3NhZ2UtbW9kYWwuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvbWVzc2FnZS1tb2RhbC9tZXNzYWdlLW1vZGFsLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9tZXNzYWdlLW1vZGFsL21lc3NhZ2UtbW9kYWwuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LnRucy5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQudG5zLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3BheW1lbnQtaW5mby9wYXltZW50LWluZm8uY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvcGF5bWVudC1pbmZvL3BheW1lbnQtaW5mby5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvcGF5bWVudC1pbmZvL3BheW1lbnQtaW5mby5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3BheW1lbnQtbWV0aG9kL3BheW1lbnQtbWV0aG9kLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL3BheW1lbnQtbWV0aG9kL3BheW1lbnQtbWV0aG9kLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9wYXltZW50LW1ldGhvZC9wYXltZW50LW1ldGhvZC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3BheW1lbnQuc2VydmljZS50bnMudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3BheW1lbnQuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvcGF5bWVudHMvcGF5bWVudHMuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvcGF5bWVudHMvcGF5bWVudHMuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL3BheW1lbnRzL3BheW1lbnRzLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvcGxhY2VzLWF1dG9jb21wbGV0ZS5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL2FwcC9wb3N0aW5nLWluZm8vcG9zdGluZy1pbmZvLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL3Bvc3RpbmctaW5mby9wb3N0aW5nLWluZm8uY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL3Bvc3RpbmctaW5mby9wb3N0aW5nLWluZm8uY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9wb3N0aW5nLnNlcnZpY2UudG5zLnRzIiwid2VicGFjazovLy8uL2FwcC9wb3N0aW5nLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3Bvc3RpbmcvcG9zdGluZy5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC9wb3N0aW5nL3Bvc3RpbmcuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL3Bvc3RpbmcvcG9zdGluZy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3JlYXV0aC9yZWF1dGguY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvcmVhdXRoL3JlYXV0aC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvcmVhdXRoL3JlYXV0aC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NldHRpbmdzZm9ybS9zZXR0aW5nc2Zvcm0uY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvc2V0dGluZ3Nmb3JtL3NldHRpbmdzZm9ybS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvc2V0dGluZ3Nmb3JtL3NldHRpbmdzZm9ybS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3VwZGF0ZS91cGRhdGUuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvdXBkYXRlL3VwZGF0ZS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvdXBkYXRlL3VwZGF0ZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3VzZXIuc2VydmljZS50bnMudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3VzZXIuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvdmlldy1pbWFnZS92aWV3LWltYWdlLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL3ZpZXctaW1hZ2Uvdmlldy1pbWFnZS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvdmlldy1pbWFnZS92aWV3LWltYWdlLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvd2VsY29tZS93ZWxjb21lLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL3dlbGNvbWUvd2VsY29tZS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvd2VsY29tZS93ZWxjb21lLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsNENBQTRDLFdBQVc7QUFDdkQ7QUFDQTtBQUNBLHlFOzs7Ozs7O0FDWkEseUVBQTJCLG1CQUFPLENBQUMsZ0RBQWdEO0FBQ25GO0FBQ0EsVUFBVSxtQkFBTyxDQUFDLG9HQUErRjs7QUFFakg7QUFDQSxjQUFjLFFBQVMsNGZBQTRmLHlCQUF5QixLQUFLOztBQUVqakI7QUFDQSxRQUFRLElBQVU7QUFDbEI7QUFDQTtBQUNBLCtCQUErQixtQ0FBbUM7QUFDbEUsU0FBUztBQUNUOzs7Ozs7Ozs7QUNiQSw4RUFBOEUsaUJBQWlCLG9CQUFvQixnQkFBZ0IsaUJBQWlCLEtBQUssaUNBQWlDLHlCQUF5QixjQUFjLEtBQUssK0RBQStELHFCQUFxQixxQkFBcUIsc0JBQXNCLGtDQUFrQywyQkFBMkIsa0JBQWtCLDJCQUEyQixpREFBaUQsS0FBSyx1QkFBdUIscUJBQXFCLHFCQUFxQixzQkFBc0Isa0NBQWtDLDJCQUEyQixrQkFBa0IsMkJBQTJCLGlEQUFpRCxzQkFBc0IsS0FBSyxvQkFBb0IscUJBQXFCLHFCQUFxQixrQ0FBa0MsMkJBQTJCLGlCQUFpQixpREFBaUQseUJBQXlCLG1CQUFtQixLQUFLLHNCQUFzQixxQkFBcUIscUJBQXFC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QUM7a0NBQUssd0RBQVU7Z0RBQUM7SUFDRDtRQUFoRCwrREFBUyxDQUFDLGtCQUFrQixFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDO2tDQUFLLHdEQUFVO2dEQUFDO0lBQ2Q7UUFBakQsK0RBQVMsQ0FBQyxtQkFBbUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQztrQ0FBSyx3REFBVTtnREFBQztJQTNCdEQsZ0JBQWdCO1FBTjVCLCtEQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsYUFBYTtZQUN2QixxRUFBdUM7O1NBRXhDLENBQUM7eUNBb0IwQiw2REFBSSxFQUFrQiw0RUFBZ0IsRUFBNkIseUVBQWlCLEVBQTJCLHFFQUFlO1lBQ3RJLG9EQUFNLEVBQWlCLDBGQUFrQixFQUFpQiw4REFBZ0I7T0FuQmpGLGdCQUFnQixDQWdSNUI7SUFBRCx1QkFBQztDQUFBO0FBaFI0Qjs7Ozs7Ozs7Ozs7Ozs7OztBQ2Q3QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0NBQW1CO0FBQzdDLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSx1Q0FBdUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQztBQUN2RSwyQ0FBMkM7QUFDM0Msa0NBQWtDO0FBQ2xDLDJCQUF5QztBQUV6QyxpQkFBZ0M7QUFFeUg7QUFDekosa0NBQThIO0FBQzlILDJEQUFnSjtBQUNoSixtQkFBbUY7QUFDbkYsY0FBeUQiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0KHJlcSkge1xuXHQvLyBIZXJlIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKSBpcyB1c2VkIGluc3RlYWQgb2YgbmV3IFByb21pc2UoKSB0byBwcmV2ZW50XG5cdC8vIHVuY2F1Z2h0IGV4Y2VwdGlvbiBwb3BwaW5nIHVwIGluIGRldnRvb2xzXG5cdHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uKCkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fSk7XG59XG53ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gW107IH07XG53ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dDtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0O1xud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LmlkID0gXCIuLi8kJF9sYXp5X3JvdXRlX3Jlc291cmNlIGxhenkgcmVjdXJzaXZlXCI7IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gSW1wb3J0c1xuZXhwb3J0cy5pKHJlcXVpcmUoXCItIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMSFuYXRpdmVzY3JpcHQtdGhlbWUtY29yZS9jc3MvY29yZS5saWdodC5jc3NcIiksIFwiXCIpO1xuXG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qXFxyXFxuSW4gTmF0aXZlU2NyaXB0LCB0aGUgYXBwLmNzcyBmaWxlIGlzIHdoZXJlIHlvdSBwbGFjZSBDU1MgcnVsZXMgdGhhdFxcclxcbnlvdSB3b3VsZCBsaWtlIHRvIGFwcGx5IHRvIHlvdXIgZW50aXJlIGFwcGxpY2F0aW9uLiBDaGVjayBvdXRcXHJcXG5odHRwOi8vZG9jcy5uYXRpdmVzY3JpcHQub3JnL3VpL3N0eWxpbmcgZm9yIGEgZnVsbCBsaXN0IG9mIHRoZSBDU1NcXHJcXG5zZWxlY3RvcnMgYW5kIHByb3BlcnRpZXMgeW91IGNhbiB1c2UgdG8gc3R5bGUgVUkgY29tcG9uZW50cy5cXHJcXG5cXHJcXG4vKlxcclxcbkluIG1hbnkgY2FzZXMgeW91IG1heSB3YW50IHRvIHVzZSB0aGUgTmF0aXZlU2NyaXB0IGNvcmUgdGhlbWUgaW5zdGVhZFxcclxcbm9mIHdyaXRpbmcgeW91ciBvd24gQ1NTIHJ1bGVzLiBGb3IgYSBmdWxsIGxpc3Qgb2YgY2xhc3MgbmFtZXMgaW4gdGhlIHRoZW1lXFxyXFxucmVmZXIgdG8gaHR0cDovL2RvY3MubmF0aXZlc2NyaXB0Lm9yZy91aS90aGVtZS5cXHJcXG4qL1xcclxcblxcclxcbkxhYmVsIHtcXHJcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVwiLCBcIlwiXSk7XG5cbjtcbiAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiAnc3R5bGUnLCBwYXRoOiAnLi9hcHAuY3NzJyB9KTtcbiAgICAgICAgfSlcbiAgICB9XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLyogQWRkIG1vYmlsZSBzdHlsZXMgZm9yIHRoZSBjb21wb25lbnQgaGVyZS4gICovXFxyXFxuLmNsb3NlIHtcXHJcXG5cXHRtYXJnaW46IDEwO1xcclxcblxcdGZvbnQtc2l6ZTogMjg7XFxyXFxuXFx0d2lkdGg6IDQ4O1xcclxcblxcdGhlaWdodDogNDg7XFxyXFxufVxcclxcblxcclxcbi5jbG9zZS1idXR0b24tY29udGFpbmVyIHtcXHJcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0bGVmdDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLyogc3R5bGVzIGZyb20gcGF5bWVudHMuY29tcG9uZW50LmNzcyAqL1xcclxcblxcclxcbiNmb3JtIHtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICB3aWR0aDogNjAwcHg7XFxyXFxuICAgIGhlaWdodDogNDAwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgdG9wOiAzMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDRweCAwIHJnYmEoMCwwLDAsMC4zNyk7XFxyXFxufVxcclxcblxcclxcbiNwYXltZW50LWZvcm0ge1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgIHdpZHRoOiA2MDBweDtcXHJcXG4gICAgaGVpZ2h0OiA0MDBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB0b3A6IDMwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAxcHggNHB4IDAgcmdiYSgwLDAsMCwwLjM3KTtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuI2NhcmQtZm9ybSB7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgd2lkdGg6IDQwMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTgwOTY4O1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHRvcDogMjUlO1xcclxcbiAgICBib3gtc2hhZG93OiAwIDFweCA0cHggMCByZ2JhKDAsMCwwLDAuMzcpO1xcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4jcGF5cGFsLWZvcm0ge1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgIHdpZHRoOiA0MDBweDtcXHJcXG4gICAgaGVpZ2h0OiAyMDBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB0b3A6IDI1JTtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAxcHggNHB4IDAgcmdiYSgwLDAsMCwwLjM3KTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuI3Zlbm1vLWZvcm0ge1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgIHdpZHRoOiA0MDBweDtcXHJcXG4gICAgaGVpZ2h0OiAyMDBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB0b3A6IDI1JTtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAxcHggNHB4IDAgcmdiYSgwLDAsMCwwLjM3KTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuI2Vycm9yLWZvcm0ge1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgIHdpZHRoOiA0MDBweDtcXHJcXG4gICAgaGVpZ2h0OiAyMDBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB0b3A6IDI1JTtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAxcHggNHB4IDAgcmdiYSgwLDAsMCwwLjM3KTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuI2VkaXQtZm9ybSB7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgd2lkdGg6IDQwMHB4O1xcclxcbiAgICBoZWlnaHQ6IDIwMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHRvcDogMjUlO1xcclxcbiAgICBib3gtc2hhZG93OiAwIDFweCA0cHggMCByZ2JhKDAsMCwwLDAuMzcpO1xcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4ucGF5bWVudC1tZXRob2RzIHtcXHJcXG5cXHRvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICB3aWR0aDogMzAwcHg7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDQwcHg7XFxyXFxufVxcclxcblxcclxcbiNtb2RhbC1wYXltZW50LW1ldGhvZHMge1xcclxcblxcdG1hcmdpbi1sZWZ0OiAyNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jcGF5cGFsLWhlYWRlci1jb250YWluZXIge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICM1ODA5Njg7XFxyXFxufVxcclxcblxcclxcbiNlcnJvci1oZWFkZXItY29udGFpbmVyIHtcXHJcXG5cXHRkaXNwbGF5OiBub25lO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICM4OTAwMDA7XFxyXFxufVxcclxcblxcclxcbiNlZGl0LWhlYWRlci1jb250YWluZXIge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICM1ODA5Njg7XFxyXFxufVxcclxcblxcclxcbi5jb2xvcmVkLWhlYWRlciB7XFxyXFxuXFx0Y29sb3I6IHdoaXRlO1xcclxcblxcdGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxufVxcclxcblxcclxcbiNtZXRob2QtaW5mb3JtYXRpb24tdGV4dCB7XFxyXFxuXFx0bWFyZ2luLWxlZnQ6IDQwcHg7XFxyXFxuXFx0bWFyZ2luLXRvcDogMzJweDtcXHJcXG5cXHRmb250LXNpemU6IDE2cHg7XFxyXFxufVxcclxcblxcclxcbi5wYXltZW50LWZvb3Rlci1idXR0b257XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXHJcXG4gICAgY29sb3I6ICNhYzAwZTY7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tbGVmdDogMzRweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4jcGF5cGFsLWJ1dHRvbiB7XFxyXFxuXFx0d2lkdGg6IDM1MHB4O1xcclxcblxcdG1hcmdpbjogYXV0bztcXHJcXG5cXHRtYXJnaW4tdG9wOiAzMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkLWNhcmQtYnV0dG9uIHtcXHJcXG5cXHRmbG9hdDogcmlnaHQ7XFxyXFxuXFx0bWFyZ2luLXJpZ2h0OiAzNHB4O1xcclxcblxcdGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiNyZW1vdmUtcGF5bWVudC1idXR0b24ge1xcclxcblxcdGZsb2F0OiByaWdodDtcXHJcXG5cXHRtYXJnaW4tcmlnaHQ6IDM0cHg7XFxyXFxufVxcclxcblxcclxcbi5wbHVzLXNpZ24ge1xcclxcblxcdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxuXFx0Zm9udC1zaXplOiAzMHB4O1xcclxcblxcdG1hcmdpbi1yaWdodDogN3B4O1xcclxcblxcdGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnBheW1lbnQtZm9vdGVyLXRleHQge1xcclxcblxcdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDQycHg7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDQwMDtcXHJcXG5cXHRmb250LXNpemU6IDEzcHg7XFxyXFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucGF5bWVudC1mb290ZXItdGV4dDpob3ZlciB7XFxyXFxuXFx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxufVxcclxcblxcclxcbi5wYXltZW50cy1ib3R0b20tYWRkLWNvbnRhaW5lciB7XFxyXFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdHdpZHRoOiAxMDAlO1xcclxcblxcdGJvdHRvbTogMDtcXHJcXG59XFxyXFxuXFxyXFxuLyogT3RoZXIgbW9kYWwgc3R5bGluZyBpbiBzdHlsZXMuY3NzICovXFxyXFxuLmNsb3NlLW1vZGFsIHtcXHJcXG5cXHRmb250LXNpemU6IDI0cHg7XFxyXFxuXFx0bWFyZ2luLXJpZ2h0OiAyMHB4O1xcclxcblxcdGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcblNoYXJlZCBWYXJpYWJsZXNcXHJcXG4tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxyXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbkdlbmVyYWxcXHJcXG4tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxyXFxuaHRtbCxcXHJcXG5ib2R5IHtcXHJcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGNvbG9yOiAjMjgyYzM3O1xcclxcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNFRUU7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYm9yZGVyOiAxZW0gc29saWQgI2ZmZjtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA0NzZweCkge1xcclxcbiAgLmZvcm0tY29udGFpbmVyIHtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uY2FyZGluZm8td3JhcHBlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxufVxcclxcblxcclxcbi5iZy1pbGx1c3RyYXRpb24ge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHotaW5kZXg6IDA7XFxyXFxufVxcclxcbi5iZy1pbGx1c3RyYXRpb24gc3ZnIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1zaGFwZSwgI215LXNhbXBsZS1mb3JtLnZpc2EsICNteS1zYW1wbGUtZm9ybS5tYXN0ZXItY2FyZCwgI215LXNhbXBsZS1mb3JtLm1hZXN0cm8sICNteS1zYW1wbGUtZm9ybS5hbWVyaWNhbi1leHByZXNzLCAjbXktc2FtcGxlLWZvcm0uZGlzY292ZXIsICNteS1zYW1wbGUtZm9ybS51bmlvbnBheSwgI215LXNhbXBsZS1mb3JtLmpjYiwgI215LXNhbXBsZS1mb3JtLmRpbmVycy1jbHViIHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG4gIHBhZGRpbmc6IDJlbSAyZW0gMWVtO1xcclxcbn1cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNDc2cHgpIHtcXHJcXG4gIC5jYXJkLXNoYXBlLCAjbXktc2FtcGxlLWZvcm0udmlzYSwgI215LXNhbXBsZS1mb3JtLm1hc3Rlci1jYXJkLCAjbXktc2FtcGxlLWZvcm0ubWFlc3RybywgI215LXNhbXBsZS1mb3JtLmFtZXJpY2FuLWV4cHJlc3MsICNteS1zYW1wbGUtZm9ybS5kaXNjb3ZlciwgI215LXNhbXBsZS1mb3JtLnVuaW9ucGF5LCAjbXktc2FtcGxlLWZvcm0uamNiLCAjbXktc2FtcGxlLWZvcm0uZGluZXJzLWNsdWIge1xcclxcbiAgICBwYWRkaW5nOiAyZW0gMS41ZW0gMWVtO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4jcGF5bWVudC1jYXJkLWZvcm0ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcXHJcXG4gIC8qYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7Ki9cXHJcXG4gIHBhZGRpbmc6IDFlbSAzZW0gM2VtO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMmVtO1xcclxcbi8qICB0cmFuc2l0aW9uOiBhbGwgNjAwbXMgY3ViaWMtYmV6aWVyKDAuMiwgMS4zLCAwLjcsIDEpO1xcclxcbiAgLXdlYmtpdC1hbmltYXRpb246IGNhcmRJbnRybyA1MDBtcyBjdWJpYy1iZXppZXIoMC4yLCAxLjMsIDAuNywgMSk7XFxyXFxuICAgICAgICAgIGFuaW1hdGlvbjogY2FyZEludHJvIDUwMG1zIGN1YmljLWJlemllcigwLjIsIDEuMywgMC43LCAxKTsqL1xcclxcbiAgLyp6LWluZGV4OiAxOyovXFxyXFxufVxcclxcbiNteS1zYW1wbGUtZm9ybTpob3ZlciB7XFxyXFxuICBib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjA2KTtcXHJcXG59XFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDQ3NnB4KSB7XFxyXFxuICAjbXktc2FtcGxlLWZvcm0ge1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBwYWRkaW5nOiA3ZW0gMmVtIDJlbTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICB9XFxyXFxufVxcclxcbiNteS1zYW1wbGUtZm9ybS52aXNhIHtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBENEFBMjtcXHJcXG59XFxyXFxuI215LXNhbXBsZS1mb3JtLm1hc3Rlci1jYXJkIHtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM2MzYzNjtcXHJcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMTVkZWcsICNkODIzMzIsICNkODIzMzIgNTAlLCAjZjFhZDNkIDUwJSwgI2YxYWQzZCk7XFxyXFxufVxcclxcbiNteS1zYW1wbGUtZm9ybS5tYWVzdHJvIHtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM2MzYzNjtcXHJcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMTVkZWcsICMwMDlkZGQsICMwMDlkZGQgNTAlLCAjZWQxYzJlIDUwJSwgI2VkMWMyZSk7XFxyXFxufVxcclxcbiNteS1zYW1wbGUtZm9ybS5hbWVyaWNhbi1leHByZXNzIHtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN0NDMztcXHJcXG59XFxyXFxuI215LXNhbXBsZS1mb3JtLmRpc2NvdmVyIHtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNjAwMDtcXHJcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjZDE0MzEwLCAjZjc5NjFlKTtcXHJcXG59XFxyXFxuI215LXNhbXBsZS1mb3JtLnVuaW9ucGF5LCAjbXktc2FtcGxlLWZvcm0uamNiLCAjbXktc2FtcGxlLWZvcm0uZGluZXJzLWNsdWIge1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzYzNjM2O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZGluZm8tbGFiZWwge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBmb250LXNpemU6IDExcHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxufVxcclxcblxcclxcbi5jYXJkaW5mby1leHAtZGF0ZSB7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDFlbTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZGluZm8tY3Z2IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZGluZm8tY2FyZC1udW1iZXIge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4jY2FyZEltYWdlIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMmVtO1xcclxcbiAgcmlnaHQ6IDFlbTtcXHJcXG4gIHdpZHRoOiA0NHB4O1xcclxcbiAgaGVpZ2h0OiAyOHB4O1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vczMtdXMtd2VzdC0yLmFtYXpvbmF3cy5jb20vcy5jZHBuLmlvLzM0Njk5NC9jYXJkX3Nwcml0ZS5wbmcpO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiA4NnB4IDQ1OHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTEwMHB4IDA7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xcclxcbn1cXHJcXG4jY2FyZEltYWdlLnZpc2Ege1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAtMzk4cHg7XFxyXFxufVxcclxcbiNjYXJkSW1hZ2UubWFzdGVyLWNhcmQge1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAtMjgxcHg7XFxyXFxufVxcclxcbiNjYXJkSW1hZ2UuYW1lcmljYW4tZXhwcmVzcyB7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIC0zNzBweDtcXHJcXG59XFxyXFxuI2NhcmRJbWFnZS5kaXNjb3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIC0xNjNweDtcXHJcXG59XFxyXFxuI2NhcmRJbWFnZS5tYWVzdHJvIHtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgLTI1MXB4O1xcclxcbn1cXHJcXG4jY2FyZEltYWdlLmpjYiB7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIC0yMjFweDtcXHJcXG59XFxyXFxuI2NhcmRJbWFnZS5kaW5lcnMtY2x1YiB7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIC0xMzNweDtcXHJcXG59XFxyXFxuXFxyXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbklucHV0cyBcXHJcXG4tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxyXFxuLmlucHV0LXdyYXBwZXIge1xcclxcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcclxcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg2KTtcXHJcXG4gIGhlaWdodDogMi43NWVtO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcXHJcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMDYpO1xcclxcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxZW07XFxyXFxufVxcclxcblxcclxcbi5jYXJkaW5mby1jYXJkLW51bWJlcixcXHJcXG4uY2FyZGluZm8tZXhwLWRhdGUsXFxyXFxuLmNhcmRpbmZvLWN2diB7XFxyXFxuICB0cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjNzO1xcclxcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3M7XFxyXFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcywgLXdlYmtpdC10cmFuc2Zvcm0gMC4zcztcXHJcXG59XFxyXFxuXFxyXFxuLmJyYWludHJlZS1ob3N0ZWQtZmllbGRzLWZvY3VzZWQge1xcclxcbiAgYm9yZGVyLWNvbG9yOiAjNWRiNmU4O1xcclxcbn1cXHJcXG5cXHJcXG4uYnJhaW50cmVlLWhvc3RlZC1maWVsZHMtaW52YWxpZCB7XFxyXFxuICBib3JkZXItY29sb3I6ICNFNTNBNDA7XFxyXFxuLyogIC13ZWJraXQtYW5pbWF0aW9uOiBzaGFrZSA1MDBtcyBjdWJpYy1iZXppZXIoMC4yLCAxLjMsIDAuNywgMSkgYm90aDtcXHJcXG4gICAgICAgICAgYW5pbWF0aW9uOiBzaGFrZSA1MDBtcyBjdWJpYy1iZXppZXIoMC4yLCAxLjMsIDAuNywgMSkgYm90aDsqL1xcclxcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcclxcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcclxcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxuICAgICAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG4gIC13ZWJraXQtcGVyc3BlY3RpdmU6IDEwMDBweDtcXHJcXG4gICAgICAgICAgcGVyc3BlY3RpdmU6IDEwMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmxvYWRlciB7XFxyXFxuICBib3JkZXI6IDE2cHggc29saWQgI2YzZjNmMzsgLyogTGlnaHQgZ3JleSAqL1xcclxcbiAgYm9yZGVyLXRvcDogMTZweCBzb2xpZCAjYWMwMGU2OyAvKiBQdXJwbGUgKi9cXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIHdpZHRoOiAxMjBweDtcXHJcXG4gIGhlaWdodDogMTIwcHg7XFxyXFxuICBhbmltYXRpb246IHNwaW4gMnMgbGluZWFyIGluZmluaXRlO1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4jbG9hZGluZy1jaXJjbGUge1xcclxcbiAgdG9wOiAxMiU7XFxyXFxuICBsZWZ0OiAzMCU7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxufVxcclxcblxcclxcbiNsaXN0LWxvYWRpbmctY2lyY2xlIHtcXHJcXG5cXHRtYXJnaW4tdG9wOiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuQW5pbWF0aW9uc1xcclxcbi0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXHJcXG5Aa2V5ZnJhbWVzIHNwaW4ge1xcclxcbiAgMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxcclxcbiAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cXHJcXG59XFxyXFxuXFxyXFxuQC13ZWJraXQta2V5ZnJhbWVzIHNoYWtlIHtcXHJcXG4gIDEwJSxcXHJcXG4gIDkwJSB7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMXB4LCAwLCAwKTtcXHJcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xcHgsIDAsIDApO1xcclxcbiAgfVxcclxcbiAgMjAlLFxcclxcbiAgODAlIHtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDFweCwgMCwgMCk7XFxyXFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxcHgsIDAsIDApO1xcclxcbiAgfVxcclxcbiAgMzAlLFxcclxcbiAgNTAlLFxcclxcbiAgNzAlIHtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0zcHgsIDAsIDApO1xcclxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTNweCwgMCwgMCk7XFxyXFxuICB9XFxyXFxuICA0MCUsXFxyXFxuICA2MCUge1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoM3B4LCAwLCAwKTtcXHJcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDNweCwgMCwgMCk7XFxyXFxuICB9XFxyXFxufVxcclxcbkBrZXlmcmFtZXMgc2hha2Uge1xcclxcbiAgMTAlLFxcclxcbiAgOTAlIHtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xcHgsIDAsIDApO1xcclxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTFweCwgMCwgMCk7XFxyXFxuICB9XFxyXFxuICAyMCUsXFxyXFxuICA4MCUge1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMXB4LCAwLCAwKTtcXHJcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDFweCwgMCwgMCk7XFxyXFxuICB9XFxyXFxuICAzMCUsXFxyXFxuICA1MCUsXFxyXFxuICA3MCUge1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTNweCwgMCwgMCk7XFxyXFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtM3B4LCAwLCAwKTtcXHJcXG4gIH1cXHJcXG4gIDQwJSxcXHJcXG4gIDYwJSB7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgzcHgsIDAsIDApO1xcclxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoM3B4LCAwLCAwKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPCEtLSA8bmd4LWJyYWludHJlZSBcXHJcXG4gIFtnZXRDbGllbnRUb2tlbl09XFxcImdldENsaWVudFRva2VuKClcXFwiIFxcclxcbiAgW2NyZWF0ZVB1cmNoYXNlXT1cXFwiY3JlYXRlUHVyY2hhc2VGdW5jdGlvblxcXCIgXFxyXFxuICAocGF5bWVudFN0YXR1cyk9XFxcIm9uUGF5bWVudFN0YXR1cygkZXZlbnQpXFxcIj5cXHJcXG48L25neC1icmFpbnRyZWU+IC0tPlxcclxcblxcclxcbjxTdGFja0xheW91dCAjZm9ybT5cXHJcXG5cXHQ8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImNsb3NlLWJ1dHRvbi1jb250YWluZXJcXFwiIG9yaWVudGF0aW9uPVxcXCJob3Jpem9udGFsXFxcIj5cXHJcXG5cXHRcXHQ8TGFiZWwgdGV4dD1cXFwiJnRpbWVzO1xcXCIgY2xhc3M9XFxcImNsb3NlXFxcIiAodGFwKT1cXFwiY2xvc2UoKVxcXCI+PC9MYWJlbD5cXHJcXG5cXHQ8L1N0YWNrTGF5b3V0PlxcclxcblxcclxcblxcdDxTdGFja0xheW91dCBjbGFzcz1cXFwiY2FyZGluZm8tY2FyZC1udW1iZXJcXFwiPlxcclxcblxcdFxcdDxMYWJlbCB0ZXh0PVxcXCJDYXJkIE51bWJlclxcXCIgY2xhc3M9XFxcImNhcmRpbmZvLWxhYmVsXFxcIj48L0xhYmVsPlxcclxcblxcdFxcdDxTdGFja0xheW91dCAjY2FyZE51bWJlciBjbGFzcz1cXFwiaW5wdXQtd3JhcHBlclxcXCI+PC9TdGFja0xheW91dD5cXHJcXG5cXHRcXHQ8U3RhY2tMYXlvdXQgI2NhcmRJbWFnZT48L1N0YWNrTGF5b3V0PlxcclxcblxcdDwvU3RhY2tMYXlvdXQ+XFxyXFxuXFxyXFxuXFx0PFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJjYXJkaW5mby13cmFwcGVyXFxcIj5cXHJcXG5cXHRcXHQ8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImNhcmRpbmZvLWV4cC1kYXRlXFxcIj5cXHJcXG5cXHRcXHRcXHQ8TGFiZWwgdGV4dD1cXFwiVmFsaWQgVGhydVxcXCIgY2xhc3M9XFxcImNhcmRpbmZvLWxhYmVsXFxcIj48L0xhYmVsPlxcclxcblxcdFxcdFxcdDxTdGFja0xheW91dCAjZXhwaXJhdGlvbkRhdGUgY2xhc3M9XFxcImlucHV0LXdyYXBwZXJcXFwiPjwvU3RhY2tMYXlvdXQ+XFxyXFxuXFx0XFx0PC9TdGFja0xheW91dD5cXHJcXG5cXHJcXG5cXHRcXHQ8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImNhcmRpbmZvLWN2dlxcXCI+XFxyXFxuXFx0XFx0XFx0PExhYmVsIHRleHQ9XFxcIkNWVlxcXCIgY2xhc3M9XFxcImNhcmRpbmZvLWxhYmVsXFxcIj48L0xhYmVsPlxcclxcblxcdFxcdFxcdDxTdGFja0xheW91dCAjY3Z2IGNsYXNzPVxcXCJpbnB1dC13cmFwcGVyXFxcIj48L1N0YWNrTGF5b3V0PlxcclxcblxcdFxcdDwvU3RhY2tMYXlvdXQ+XFxyXFxuXFx0PC9TdGFja0xheW91dD5cXHJcXG5cXHJcXG5cXHQ8QnV0dG9uIHRleHQ9XFxcIkFkZFxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgI3N1Ym1pdEJ1dHRvbj48L0J1dHRvbj5cXHJcXG48L1N0YWNrTGF5b3V0PlxcclxcbjwhLS0gXFx0XFx0PGZvcm0gaWQ9XFxcInBheW1lbnQtY2FyZC1mb3JtXFxcIiBjbGFzcz1cXFwic2NhbGUtZG93blxcXCI+XFxyXFxuXFx0ICAgIDxkaXYgY2xhc3M9XFxcImNhcmRpbmZvLWNhcmQtbnVtYmVyXFxcIj5cXHJcXG5cXHQgICAgICA8bGFiZWwgY2xhc3M9XFxcImNhcmRpbmZvLWxhYmVsXFxcIiBmb3I9XFxcImNhcmQtbnVtYmVyXFxcIj5DYXJkIE51bWJlcjwvbGFiZWw+XFxyXFxuXFx0ICAgICAgPGRpdiBjbGFzcz0naW5wdXQtd3JhcHBlcicgaWQ9XFxcImNhcmQtbnVtYmVyXFxcIj48L2Rpdj5cXHJcXG5cXHQgICAgICA8ZGl2IGlkPVxcXCJjYXJkLWltYWdlXFxcIj48L2Rpdj5cXHJcXG5cXHQgICAgPC9kaXY+XFxyXFxuXFxyXFxuXFx0ICAgIDxkaXYgY2xhc3M9XFxcImNhcmRpbmZvLXdyYXBwZXJcXFwiPlxcclxcblxcdCAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmRpbmZvLWV4cC1kYXRlXFxcIj5cXHJcXG5cXHQgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY2FyZGluZm8tbGFiZWxcXFwiIGZvcj1cXFwiZXhwaXJhdGlvbi1kYXRlXFxcIj5WYWxpZCBUaHJ1PC9sYWJlbD5cXHJcXG5cXHQgICAgICAgIDxkaXYgY2xhc3M9J2lucHV0LXdyYXBwZXInIGlkPVxcXCJleHBpcmF0aW9uLWRhdGVcXFwiPjwvZGl2PlxcclxcblxcdCAgICAgIDwvZGl2PlxcclxcblxcclxcblxcdCAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmRpbmZvLWN2dlxcXCI+XFxyXFxuXFx0ICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNhcmRpbmZvLWxhYmVsXFxcIiBmb3I9XFxcImN2dlxcXCI+Q1ZWPC9sYWJlbD5cXHJcXG5cXHQgICAgICAgIDxkaXYgY2xhc3M9J2lucHV0LXdyYXBwZXInIGlkPVxcXCJjdnZcXFwiPjwvZGl2PlxcclxcblxcdCAgICAgIDwvZGl2PlxcclxcblxcdCAgICA8L2Rpdj5cXHJcXG5cXHQgIDwvZm9ybT4gLS0+XCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgRWxlbWVudFJlZiwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCAqIGFzIGRyb3BpbiBmcm9tICdicmFpbnRyZWUtd2ViLWRyb3AtaW4nO1xyXG5pbXBvcnQgKiBhcyBicmFpbnRyZWUgZnJvbSAnYnJhaW50cmVlLXdlYic7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvYnV0dG9uJztcclxuaW1wb3J0IHsgVGV4dEZpZWxkIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS90ZXh0LWZpZWxkJztcclxuaW1wb3J0IHsgTW9kYWxEaWFsb2dQYXJhbXMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZGlyZWN0aXZlcy9kaWFsb2dzXCI7XHJcbmltcG9ydCB7IFBheW1lbnRTZXJ2aWNlIH0gZnJvbSAnLi4vcGF5bWVudC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU3RhY2tMYXlvdXQgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvc3RhY2stbGF5b3V0JztcclxuLy8gaW1wb3J0IHsgTmF0aXZlU2NyaXB0SHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHAtY2xpZW50JztcclxuLy8gaW1wb3J0IHsgTmd4QnJhaW50cmVlTW9kdWxlIH0gZnJvbSAnbmd4LWJyYWludHJlZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZSc7XHJcbmltcG9ydCB7IEJyYWludHJlZSwgQnJhaW5UcmVlT3B0aW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1icmFpbnRyZWUnO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcclxuXHJcbi8vIHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtbm9kZWlmeVwiKTtcclxuLy8gaW1wb3J0ICogYXMgTm9kZWlmeSBmcm9tICduYXRpdmVzY3JpcHQtbm9kZWlmeSc7XHJcbi8vIGNvbnN0IGJyYWludHJlZSA9IHJlcXVpcmUoJ2JyYWludHJlZS13ZWInKTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLWFkZC1jYXJkLXBheW1lbnQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9hZGQtY2FyZC1wYXltZW50LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9hZGQtY2FyZC1wYXltZW50LmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWRkQ2FyZFBheW1lbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhcmFtczogTW9kYWxEaWFsb2dQYXJhbXMsIHByaXZhdGUgcGF5bWVudFNlcnZpY2U6IFBheW1lbnRTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucykgeyB9XHJcblxyXG4gIC8vIEBWaWV3Q2hpbGQoXCJkcm9waW5Db250YWludGVyXCIpIGNvbnRhaW5lcjogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKFwic3VibWl0QnV0dG9uXCIsIHsgc3RhdGljOiB0cnVlIH0pIHNCOiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoXCJleHBpcmF0aW9uRGF0ZVwiLCB7IHN0YXRpYzogdHJ1ZSB9KSBleHBpcmF0aW9uVGV4dDogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKFwiY2FyZE51bWJlclwiLCB7IHN0YXRpYzogdHJ1ZSB9KSBudW1iZXJUZXh0OiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoXCJjdnZcIiwgeyBzdGF0aWM6IHRydWUgfSkgY3Z2VGV4dDogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKFwiZm9ybVwiLCB7IHN0YXRpYzogdHJ1ZSB9KSBmb3JtTGF5b3V0OiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoXCJjYXJkSW1hZ2VcIiwgeyBzdGF0aWM6IHRydWUgfSkgY2FyZExheW91dDogRWxlbWVudFJlZjtcclxuXHJcbiAgdXNlciA9IHtcclxuICBcdHBheW1lbnRfaWQ6ICc1MDczMDU3MDYnXHJcbiAgfVxyXG4gIG9wdHMgOkJyYWluVHJlZU9wdGlvbnMgPSB7XHJcblx0YW1vdW50OiBudWxsLFxyXG5cdGNvbGxlY3REZXZpY2VEYXRhOiB0cnVlLFxyXG5cdHJlcXVlc3RUaHJlZURTZWN1cmVWZXJpZmljYXRpb246IGZhbHNlLFxyXG4gIH1cclxuICBjbGllbnRUb2tlbiA9ICcnO1xyXG5cclxuICAvLyB0b2tlbiA9IHRoaXMucGF5bWVudFNlcnZpY2UuZ2V0SWRUb2tlbih0aGlzLnVzZXIucGF5bWVudF9pZCk7XHJcbiAgbmdPbkluaXQoKSB7XHJcbiAvLyAgXHRicmFpbnRyZWUuY2xpZW50LmNyZWF0ZSh7XHJcblx0Ly8gICBhdXRob3JpemF0aW9uOiAnc2FuZGJveF85cXNieXlxOF93bWMzdjg4cjM2Y2J4amp6J1xyXG5cdC8vIH0sIGZ1bmN0aW9uIChjbGllbnRFcnIsIGNsaWVudEluc3RhbmNlKSB7XHJcblx0Ly8gICAvLyBTdG9wIGlmIHRoZXJlIHdhcyBhIHByb2JsZW0gY3JlYXRpbmcgdGhlIGNsaWVudC5cclxuXHQvLyAgIC8vIFRoaXMgY291bGQgaGFwcGVuIGlmIHRoZXJlIGlzIGEgbmV0d29yayBlcnJvciBvciBpZiB0aGUgYXV0aG9yaXphdGlvblxyXG5cdC8vICAgLy8gaXMgaW52YWxpZC5cclxuXHQvLyAgIGlmIChjbGllbnRFcnIpIHtcclxuXHQvLyAgICAgY29uc29sZS5lcnJvcignRXJyb3IgY3JlYXRpbmcgY2xpZW50OicsIGNsaWVudEVycik7XHJcblx0Ly8gICAgIHJldHVybjtcclxuXHQvLyAgIH1cclxuXHQvLyB9KTtcclxuXHJcbiAgfVxyXG5cclxuICBjcmVhdGVWaWV3cygpIHtcclxuICBcdHZhciBmb3JtID0gPFN0YWNrTGF5b3V0PiB0aGlzLmZvcm1MYXlvdXQubmF0aXZlRWxlbWVudDtcclxuXHR2YXIgc3VibWl0ID0gPEJ1dHRvbj4gdGhpcy5zQi5uYXRpdmVFbGVtZW50O1xyXG5cdHZhciBleHBpcmF0aW9uRGF0ZSA9IDxTdGFja0xheW91dD4gdGhpcy5leHBpcmF0aW9uVGV4dC5uYXRpdmVFbGVtZW50O1xyXG5cdHZhciBjYXJkTnVtYmVyID0gPFN0YWNrTGF5b3V0PiB0aGlzLm51bWJlclRleHQubmF0aXZlRWxlbWVudDtcclxuXHR2YXIgY3Z2ID0gPFN0YWNrTGF5b3V0PiB0aGlzLmN2dlRleHQubmF0aXZlRWxlbWVudDtcclxuXHR2YXIgY2FyZEltYWdlID0gPFN0YWNrTGF5b3V0PiB0aGlzLmNhcmRMYXlvdXQubmF0aXZlRWxlbWVudDtcclxuXHJcblx0c3VibWl0LmlzRW5hYmxlZCA9IGZhbHNlO1xyXG5cclxuICB9XHJcblxyXG4gIGNsb3NlKCkge1xyXG4gIFx0dGhpcy5wYXJhbXMuY2xvc2VDYWxsYmFjaygpO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q2xpZW50VG9rZW4oKSB7XHJcbiAgXHRjb25zdCB0b2tlbiA9IG5ldyBPYnNlcnZhYmxlKCk7XHJcbiAgXHR0b2tlbi5zZXQoJ0F1dGhvcml6YXRpb24nLCAnc2FuZGJveF85cXNieXlxOF93bWMzdjg4cjM2Y2J4amp6Jyk7XHJcbiAgXHRyZXR1cm4gdG9rZW47XHJcbiAgfVxyXG5cclxuICBjcmVhdGVQdXJjaGFzZUZ1bmN0aW9uKG5vbmNlOiBzdHJpbmcsIGNoYXJnZUFtb3VudDogbnVtYmVyKSB7XHJcbiAgXHRyZXR1cm4gdGhpcy5wYXltZW50U2VydmljZS5hZGRQYXltZW50TWV0aG9kVG9Vc2VyKHRoaXMudXNlci5wYXltZW50X2lkLCBub25jZSk7XHJcbiAgfVxyXG5cclxuICBvblBheW1lbnRTdGF0dXMoZXZlbnQpIHtcclxuXHJcbiAgfVxyXG5cclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLyogQWRkIG1vYmlsZSBzdHlsZXMgZm9yIHRoZSBjb21wb25lbnQgaGVyZS4gICovXFxyXFxuLnBhZ2Uge1xcclxcbiAgLyphbGlnbi1pdGVtczogY2VudGVyOyovXFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybSB7XFxyXFxuICBtYXJnaW4tbGVmdDogMzA7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDMwO1xcclxcbiAgZmxleC1ncm93OiAyO1xcclxcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlIHtcXHJcXG5cXHRtYXJnaW46IDEwO1xcclxcblxcdGZvbnQtc2l6ZTogMjg7XFxyXFxuXFx0d2lkdGg6IDQ4O1xcclxcblxcdGhlaWdodDogNDg7XFxyXFxufVxcclxcblxcclxcbi5jbG9zZS1idXR0b24tY29udGFpbmVyIHtcXHJcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0bGVmdDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlci1sYWJlbCB7XFxyXFxuXFx0bWFyZ2luLXRvcDogNjA7XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTogMDtcXHJcXG5cXHRmb250LXNpemU6IDIwO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyLWxhYmVsLTIge1xcclxcblxcdGZvbnQtc2l6ZTogMjA7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXItbGFiZWwtMyB7XFxyXFxuXFx0bWFyZ2luLXRvcDogMTQ7XFxyXFxuXFx0bWFyZ2luLWxlZnQ6IDE2O1xcclxcblxcdG1hcmdpbi1yaWdodDogMTY7XFxyXFxuXFx0Zm9udC1zaXplOiAxODtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlci1sYWJlbC00IHtcXHJcXG5cXHRmb250LXNpemU6IDE4O1xcclxcblxcdG1hcmdpbi10b3A6IDE0O1xcclxcbn1cXHJcXG5cXHJcXG4ucmlkaW5nLWxhYmVsIHtcXHJcXG5cXHRmb250LXdlaWdodDogNzAwO1xcclxcblxcdGNvbG9yOiAjYWMwMGU2O1xcclxcbn1cXHJcXG5cXHJcXG4uZHJpdmluZy1sYWJlbCB7XFxyXFxuXFx0Y29sb3I6ICM1YzY4N2M7XFxyXFxufVxcclxcblxcclxcbi5zd2l0Y2gtY29udGFpbmVyIHtcXHJcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zd2l0Y2gge1xcclxcblxcdGNvbG9yOiAjYWMwMGU2O1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICNjZDk0ZTA7XFxyXFxufVxcclxcblxcclxcbi5zdWJtaXQtYnRuIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjYWMwMGU2O1xcclxcblxcdG1hcmdpbi10b3A6IDIwO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9sZCB7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDcwMDtcXHJcXG59XFxyXFxuXFxyXFxuLnN0YXJ0LWZpZWxkIHtcXHJcXG5cXHRtYXJnaW4tdG9wOiAxNDtcXHJcXG59XFxyXFxuXFxyXFxuLmFjdGl2aXR5LWluZGljYXRvciB7XFxyXFxuICBjb2xvcjogI2FjMDBlNjtcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XFxyXFxuICBtYXJnaW4tdG9wOiA0NyU7XFxyXFxufVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxTdGFja0xheW91dD5cXHJcXG5cXHQ8QWN0aXZpdHlJbmRpY2F0b3IgI2FjdGl2aXR5SW5kaWNhdG9yIGJ1c3k9XFxcInRydWVcXFwiIHdpZHRoPVxcXCI0MFxcXCIgaGVpZ2h0PVxcXCI0MFxcXCIgY2xhc3M9XFxcImFjdGl2aXR5LWluZGljYXRvclxcXCI+PC9BY3Rpdml0eUluZGljYXRvcj5cXHJcXG5cXHQ8U2Nyb2xsVmlldyBoZWlnaHQ9XFxcIjEwMCVcXFwiPlxcclxcblxcdDxGbGV4Ym94TGF5b3V0IGNsYXNzPVxcXCJwYWdlXFxcIiAjYWRkQ29udGFpbmVyPlxcclxcblxcdFxcdDxTdGFja0xheW91dCBjbGFzcz1cXFwiY2xvc2UtYnV0dG9uLWNvbnRhaW5lclxcXCIgb3JpZW50YXRpb249XFxcImhvcml6b250YWxcXFwiPlxcclxcblxcdFxcdFxcdDxMYWJlbCB0ZXh0PVxcXCImdGltZXM7XFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiICh0YXApPVxcXCJjbG9zZSgnY2FuY2VsJylcXFwiPjwvTGFiZWw+XFxyXFxuXFx0XFx0PC9TdGFja0xheW91dD5cXHJcXG5cXHJcXG5cXHJcXG5cXHRcXHQ8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImZvcm1cXFwiPlxcclxcblxcdFxcdFxcdDxMYWJlbCB0ZXh0PVxcXCJJIGFtLi4uXFxcIiBjbGFzcz1cXFwiaGVhZGVyLWxhYmVsLTIgYm9sZFxcXCI+PC9MYWJlbD5cXHJcXG5cXHJcXG5cXHRcXHQgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiaW5wdXQtZmllbGQgc3dpdGNoLWNvbnRhaW5lclxcXCIgb3JpZW50YXRpb249XFxcImhvcml6b250YWxcXFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCI+XFxyXFxuXFx0XFx0ICBcXHQ8TGFiZWwgdGV4dD1cXFwiRHJpdmluZ1xcXCIgY2xhc3M9XFxcImhlYWRlci1sYWJlbC0zIGRyaXZpbmctbGFiZWxcXFwiICNkcml2aW5nTGFiZWw+PC9MYWJlbD5cXHJcXG5cXHRcXHQgIFxcdDxTd2l0Y2ggY2hlY2tlZD1cXFwidHJ1ZVxcXCIgKGNoZWNrZWRDaGFuZ2UpPVxcXCJvbkNoZWNrZWRDaGFuZ2UoJGV2ZW50KVxcXCIgY2xhc3M9XFxcIm0tMTUgc3dpdGNoXFxcIj48L1N3aXRjaD5cXHJcXG5cXHRcXHQgIFxcdDxMYWJlbCB0ZXh0PVxcXCJSaWRpbmdcXFwiIGNsYXNzPVxcXCJoZWFkZXItbGFiZWwtMyByaWRpbmctbGFiZWxcXFwiICNyaWRpbmdMYWJlbD48L0xhYmVsPlxcclxcblxcdFxcdCAgPC9TdGFja0xheW91dD5cXHJcXG5cXHJcXG5cXHRcXHQgIDxMYWJlbCB0ZXh0PVxcXCJXaGVyZT9cXFwiIGNsYXNzPVxcXCJoZWFkZXItbGFiZWwgYm9sZFxcXCI+PC9MYWJlbD5cXHJcXG5cXHRcXHQgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiaW5wdXQtZmllbGQgc3RhcnQtZmllbGRcXFwiPlxcclxcbjwhLS0gXFx0XFx0ICAgIDxUZXh0RmllbGQgY2xhc3M9XFxcImlucHV0XFxcIiBhdXRvY29ycmVjdD1cXFwiZmFsc2VcXFwiIGhpbnQ9XFxcIldoZXJlIGZyb20/XFxcIiBbKG5nTW9kZWwpXT1cXFwic3RhcnRBZGRyZXNzXFxcIiAodGV4dENoYW5nZSk9XFxcInN0YXJ0QXV0b2NvbXBsZXRlKClcXFwiICh0YXApPVxcXCJzaG93TW9kYWwoJ3N0YXJ0JylcXFwiIHJlcXVpcmVkPjwvVGV4dEZpZWxkPiAtLT5cXHJcXG5cXHRcXHRcXHQ8TGFiZWwgdGV4dD1cXFwie3sgc3RhcnRMYWJlbCB9fVxcXCIgY2xhc3M9XFxcImhlYWRlci1sYWJlbC0zXFxcIiAodGFwKT1cXFwic2hvd01vZGFsKCdzdGFydCcpXFxcIj48L0xhYmVsPlxcclxcblxcdFxcdCAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImhyLWxpZ2h0XFxcIj48L1N0YWNrTGF5b3V0PlxcclxcblxcdFxcdCAgPC9TdGFja0xheW91dD5cXHJcXG5cXHJcXG5cXHRcXHQgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiaW5wdXQtZmllbGRcXFwiPlxcclxcbjwhLS0gXFx0XFx0ICAgIDxUZXh0RmllbGQgY2xhc3M9XFxcImlucHV0XFxcIiBhdXRvY29ycmVjdD1cXFwiZmFsc2VcXFwiIGhpbnQ9XFxcIldoZXJlIHRvP1xcXCIgWyhuZ01vZGVsKV09XFxcImVuZEFkZHJlc3NcXFwiICh0ZXh0Q2hhbmdlKT1cXFwiZW5kQXV0b2NvbXBsZXRlKClcXFwiICh0YXApPVxcXCJzaG93TW9kYWwoJ2VuZCcpXFxcIiByZXF1aXJlZD48L1RleHRGaWVsZD4gLS0+XFxyXFxuXFx0XFx0XFx0XFx0PExhYmVsIHRleHQ9XFxcInt7IGVuZExhYmVsIH19XFxcIiBjbGFzcz1cXFwiaGVhZGVyLWxhYmVsLTNcXFwiICh0YXApPVxcXCJzaG93TW9kYWwoJ2VuZCcpXFxcIj48L0xhYmVsPlxcclxcblxcdFxcdCAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImhyLWxpZ2h0XFxcIj48L1N0YWNrTGF5b3V0PlxcclxcblxcdFxcdCAgPC9TdGFja0xheW91dD5cXHJcXG5cXHJcXG5cXHQ8IS0tIFxcdCAgPERhdGVQaWNrZXIgKGxvYWRlZCk9XFxcIm9uUGlja2VyTG9hZGVkKCRldmVudClcXFwiIChkYXRlQ2hhbmdlKT1cXFwib25EYXRlQ2hhbmdlZCgkZXZlbnQpXFxcIiBcXHJcXG5cXHQoZGF5Q2hhbmdlKT1cXFwib25EYXlDaGFuZ2VkKCRldmVudClcXFwiIChtb250aENoYW5nZSk9XFxcIm9uTW9udGhDaGFuZ2VkKCRldmVudClcXFwiICh5ZWFyQ2hhbmdlKT1cXFwib25ZZWFyQ2hhbmdlZCgkZXZlbnQpXFxcIiB2ZXJ0aWNhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIj48L0RhdGVQaWNrZXI+IC0tPlxcclxcblxcdFxcdFxcdDxMYWJlbCB0ZXh0PVxcXCJXaGVuP1xcXCIgY2xhc3M9XFxcImhlYWRlci1sYWJlbCBib2xkXFxcIj48L0xhYmVsPlxcclxcblxcclxcblxcdFxcdCAgPERhdGVQaWNrZXIgKGxvYWRlZCk9XFxcIm9uUGlja2VyTG9hZGVkKCRldmVudClcXFwiIChkYXRlQ2hhbmdlKT1cXFwib25EYXRlQ2hhbmdlZCgkZXZlbnQpXFxcIiB2ZXJ0aWNhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIj48L0RhdGVQaWNrZXI+XFxyXFxuXFxyXFxuXFx0XFx0ICA8TGFiZWwgKm5nSWY9XFxcImlzRHJpdmluZ1xcXCIgdGV4dD1cXFwiSG93IG1hbnk/XFxcIiBjbGFzcz1cXFwiaGVhZGVyLWxhYmVsXFxcIj48L0xhYmVsPlxcclxcblxcdFxcdCAgPEdyaWRMYXlvdXQgKm5nSWY9XFxcImlzRHJpdmluZ1xcXCIgY2xhc3M9XFxcIm0tMTVcXFwiIHJvd3M9XFxcImF1dG9cXFwiIGNvbHVtbnM9XFxcIjUwICogNTBcXFwiPlxcclxcblxcdFxcdFxcdCAgICA8TGFiZWwgY2xhc3M9XFxcImgzXFxcIiB0ZXh0PVxcXCIxXFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgcm93PVxcXCIxMFxcXCIgY29sPVxcXCIwXFxcIj48L0xhYmVsPlxcclxcblxcdFxcdFxcdCAgICA8U2xpZGVyIG1pblZhbHVlPVxcXCIxXFxcIiBtYXhWYWx1ZT1cXFwiOFxcXCIgWyhuZ01vZGVsKV09XFxcImNhcGFjaXR5XFxcIiByb3c9XFxcIjBcXFwiXFxyXFxuXFx0XFx0XFx0ICAgICBjb2w9XFxcIjFcXFwiPjwvU2xpZGVyPlxcclxcblxcdFxcdFxcdCAgICA8TGFiZWwgY2xhc3M9XFxcImgzXFxcIiB0ZXh0PVxcXCI4XFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgcm93PVxcXCIwXFxcIiBjb2w9XFxcIjJcXFwiPjwvTGFiZWw+XFxyXFxuXFx0XFx0XFx0PC9HcmlkTGF5b3V0PlxcclxcblxcdFxcdCAgPExhYmVsICpuZ0lmPVxcXCJpc0RyaXZpbmdcXFwiIHRleHQ9XFxcInt7IGNhcGFjaXR5IH19XFxcIiBjbGFzcz1cXFwiaGVhZGVyLWxhYmVsLTJcXFwiPjwvTGFiZWw+XFxyXFxuXFxyXFxuXFx0XFx0ICA8QnV0dG9uIHRleHQ9XFxcIkFkZFxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeSBzdWJtaXQtYnRuXFxcIiAodGFwKT1cXFwiYWRkUG9zdGluZygpXFxcIj48L0J1dHRvbj5cXHJcXG5cXHRcXHQ8L1N0YWNrTGF5b3V0PlxcclxcblxcdDwvRmxleGJveExheW91dD5cXHJcXG5cXHQ8L1Njcm9sbFZpZXc+XFxyXFxuPC9TdGFja0xheW91dD5cXHJcXG5cXHJcXG5cXHJcXG5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTW9kYWxEaWFsb2dQYXJhbXMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZGlyZWN0aXZlcy9kaWFsb2dzXCI7XHJcbmltcG9ydCB7IE1vZGFsRGlhbG9nU2VydmljZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9kaXJlY3RpdmVzL2RpYWxvZ3NcIjtcclxuaW1wb3J0IHsgUG9zdGluZ1NlcnZpY2UgfSBmcm9tICcuLi9wb3N0aW5nLnNlcnZpY2UudG5zJztcclxuaW1wb3J0IHsgRGF0ZVBpY2tlciB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RhdGUtcGlja2VyXCI7XHJcbmltcG9ydCB7IFN3aXRjaCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3N3aXRjaFwiO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZVwiO1xyXG5pbXBvcnQgeyBMYWJlbCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xhYmVsXCI7XHJcbmltcG9ydCB7IENvbG9yIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvY29sb3JcIjtcclxuaW1wb3J0IHsgUGxhY2VzQXV0b2NvbXBsZXRlU2VydmljZSB9IGZyb20gJy4uL3BsYWNlcy1hdXRvY29tcGxldGUuc2VydmljZSc7XHJcbmltcG9ydCB7IHNldEludGVydmFsLCBjbGVhckludGVydmFsIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdGltZXJcIjtcclxuaW1wb3J0IHsgTG9jYXRpb25Db21wb25lbnQgfSBmcm9tICcuLi9sb2NhdGlvbi9sb2NhdGlvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUcmFuc2ZlclNlcnZpY2UgfSBmcm9tICcuLi9kYXRhdHJhbnNmZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IExvZ2luY2hlY2tTZXJ2aWNlIH0gZnJvbSAnLi4vbG9naW5jaGVjay5zZXJ2aWNlLnRucyc7XHJcbmltcG9ydCAqIGFzIGZpcmViYXNlIGZyb20gJ25hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2UnO1xyXG5pbXBvcnQgeyBEYXRlUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IENhY2hlIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9pbWFnZS1jYWNoZSc7XHJcbmltcG9ydCB7IEdvb2dsZU1hcHNTZXJ2aWNlIH0gZnJvbSAnLi4vZ29vZ2xlLW1hcHMuc2VydmljZSc7XHJcbmltcG9ydCB7SW1hZ2VTb3VyY2UsIGZyb21GaWxlLCBmcm9tUmVzb3VyY2UsIGZyb21CYXNlNjR9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2ltYWdlLXNvdXJjZVwiO1xyXG5pbXBvcnQge0ZvbGRlciwgcGF0aCwga25vd25Gb2xkZXJzfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9maWxlLXN5c3RlbVwiO1xyXG5pbXBvcnQgKiBhcyBmcyBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9maWxlLXN5c3RlbVwiO1xyXG5pbXBvcnQgeyBBY3Rpdml0eUluZGljYXRvciB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvYWN0aXZpdHktaW5kaWNhdG9yJztcclxuaW1wb3J0IHsgU2Nyb2xsVmlldyB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvc2Nyb2xsLXZpZXcnO1xyXG5pbXBvcnQgeyBGbGV4Ym94TGF5b3V0IH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9sYXlvdXRzL2ZsZXhib3gtbGF5b3V0JztcclxuaW1wb3J0IHsgU3RhY2tMYXlvdXQgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvc3RhY2stbGF5b3V0JztcclxuLy8gaW1wb3J0IHsgR29vZ2xlUGxhY2VzQXV0b2NvbXBsZXRlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWdvb2dsZS1wbGFjZXMtYXV0b2NvbXBsZXRlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLWFkZC1tb2RhbCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2FkZC1tb2RhbC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vYWRkLW1vZGFsLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWRkTW9kYWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhcmFtczogTW9kYWxEaWFsb2dQYXJhbXMsIHByaXZhdGUgcG9zdGluZ1NlcnZpY2U6IFBvc3RpbmdTZXJ2aWNlLCBwcml2YXRlIHBhZ2U6IFBhZ2UsIHByaXZhdGUgcGxhY2VzU2VydmljZTogUGxhY2VzQXV0b2NvbXBsZXRlU2VydmljZSxcclxuICAgIHByaXZhdGUgbW9kYWw6IE1vZGFsRGlhbG9nU2VydmljZSwgcHJpdmF0ZSB2Y1JlZjogVmlld0NvbnRhaW5lclJlZiwgcHJpdmF0ZSB0cmFuc2ZlclNlcnZpY2U6IFRyYW5zZmVyU2VydmljZSwgcHJpdmF0ZSBsb2dpbmNoZWNrU2VydmljZTogTG9naW5jaGVja1NlcnZpY2UsXHJcbiAgICBwcml2YXRlIGRhdGVQaXBlOiBEYXRlUGlwZSwgcHJpdmF0ZSBtYXBTZXJ2aWNlOiBHb29nbGVNYXBzU2VydmljZSkgeyB9XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ2RyaXZpbmdMYWJlbCcsIHsgc3RhdGljOiB0cnVlIH0pIGRsOiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoJ3JpZGluZ0xhYmVsJywgeyBzdGF0aWM6IHRydWUgfSkgcmw6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgnYWN0aXZpdHlJbmRpY2F0b3InLCB7IHN0YXRpYzogdHJ1ZSB9KSBhaTogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKCdhZGRDb250YWluZXInLCB7IHN0YXRpYzogdHJ1ZSB9KSBhYzogRWxlbWVudFJlZjtcclxuICAvLyBAVmlld0NoaWxkKCdzdGFydExhYmVsJykgc2w6IEVsZW1lbnRSZWY7XHJcbiAgLy8gQFZpZXdDaGlsZCgnZW5kTGFiZWwnKSBlbDogRWxlbWVudFJlZjtcclxuXHJcbiAgc3RhcnRTdWdnZXN0aW9uczogU3RyaW5nW107XHJcbiAgZW5kU3VnZ2VzdGlvbnM6IFN0cmluZ1tdO1xyXG4gIHN0YXJ0UGxhY2U7XHJcbiAgZW5kUGxhY2U7XHJcbiAgc3RhcnRBZGRyZXNzO1xyXG4gIGVuZEFkZHJlc3M7XHJcbiAgZm9ybWF0dGVkRGF0ZTtcclxuICBkYXRlID0gXCJub3dcIjtcclxuICBwcmljZSA9IFwiJDE1XCI7XHJcbiAgY2FwYWNpdHkgPSBcIi0xXCI7XHJcbiAgdXNlciA9IHtcclxuICBcdHVzZXJuYW1lOiBcIjIwMjJheWVlXCIsXHJcbiAgICBpZDogXCJcIlxyXG4gIH07XHJcbiAgc3RhcnRMYWJlbCA9IFwiUGljayBzdGFydCBsb2NhdGlvblwiO1xyXG4gIGVuZExhYmVsID0gXCJQaWNrIGVuZCBsb2NhdGlvblwiO1xyXG4gIHN0YXJ0TGF0O1xyXG4gIHN0YXJ0TG5nO1xyXG4gIGVuZExhdDtcclxuICBlbmRMbmc7XHJcblxyXG4gIGlzRHJpdmluZyA9IGZhbHNlO1xyXG4gIHN0YXJ0TG9jYXRpb25QaWNrZWQgPSBmYWxzZTtcclxuICBlbmRMb2NhdGlvblBpY2tlZCA9IGZhbHNlO1xyXG4gIGltYWdlU291cmNlID0gbmV3IEltYWdlU291cmNlKCk7XHJcblxyXG5cclxuICBBUElfS0VZID0gXCJBSXphU3lBSVR4UzFqbWY4UE10YXpSZ3VXY0FmV1F4VzFrUE9vWWdcIjtcclxuICAvLyBnb29nbGVQbGFjZXNBdXRvY29tcGxldGUgPSBuZXcgR29vZ2xlUGxhY2VzQXV0b2NvbXBsZXRlKHRoaXMuQVBJX0tFWSk7XHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICAvLyBsZXQgYWRkQ29udGFpbmVyID0gPEZsZXhib3hMYXlvdXQ+IHRoaXMuYWMubmF0aXZlRWxlbWVudDtcclxuICAgIC8vICAvLyBhY3Rpdml0eUluZGljYXRvci5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xyXG4gICAgLy8gYWRkQ29udGFpbmVyLnN0eWxlLnZpc2liaWxpdHkgPSAnY29sbGFwc2UnO1xyXG4gICAgbGV0IGFjdGl2aXR5SW5kaWNhdG9yID0gPEFjdGl2aXR5SW5kaWNhdG9yPiB0aGlzLmFpLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICBhY3Rpdml0eUluZGljYXRvci5zdHlsZS52aXNpYmlsaXR5ID0gJ2NvbGxhcHNlJ1xyXG4gICAgZmlyZWJhc2UuZ2V0Q3VycmVudFVzZXIoKS50aGVuKHVzZXIgPT4ge1xyXG4gICAgICB0aGlzLnVzZXIudXNlcm5hbWUgPSB1c2VyLmRpc3BsYXlOYW1lO1xyXG4gICAgICBpZih1c2VyLmRpc3BsYXlOYW1lID09IG51bGwgfHwgdXNlci5kaXNwbGF5TmFtZSA9PSAnJylcclxuICAgICAgICB0aGlzLnVzZXIudXNlcm5hbWUgPSB1c2VyLmVtYWlsO1xyXG4gICAgICB0aGlzLnVzZXIuaWQgPSB0aGlzLmxvZ2luY2hlY2tTZXJ2aWNlLmdldFVzZXIoKTtcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBzdGFydFNlbGVjdChldmVudDogRXZlbnQpIHtcclxuICAgIGNvbnNvbGUubG9nKGV2ZW50LnNyY0VsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgc2hvd01vZGFsKHR5cGUpIHtcclxuICAgIGxldCBvcHRpb25zID0ge1xyXG4gICAgICAgIGNvbnRleHQ6IHt9LFxyXG4gICAgICAgIGZ1bGxzY3JlZW46IHRydWUsXHJcbiAgICAgICAgdmlld0NvbnRhaW5lclJlZjogdGhpcy52Y1JlZlxyXG4gICAgICAgIC8vIGFuaW1hdGVkOiB0cnVlLFxyXG4gICAgICAgIC8vIHRyYW5zaXRpb246IHsgbmFtZTogXCJzbGlkZVRvcFwiIH1cclxuICAgIH07XHJcbiAgICB0aGlzLnRyYW5zZmVyU2VydmljZS5zZXREYXRhKHR5cGUpO1xyXG4gICAgdGhpcy5tb2RhbC5zaG93TW9kYWwoTG9jYXRpb25Db21wb25lbnQsIG9wdGlvbnMpLnRoZW4ocmVzID0+IHtcclxuICAgICAgICBpZihyZXMgIT0gbnVsbClcclxuICAgICAgICAgIGlmKHJlcy5zdGFydCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRMb2NhdGlvblBpY2tlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRMYWJlbCA9ICdTdGFydCBsb2NhdGlvbjogJyArIHJlcy5zdGFydDtcclxuICAgICAgICAgICAgdGhpcy5zdGFydFBsYWNlID0gcmVzLnN0YXJ0O1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0QWRkcmVzcyA9IHJlcy5hZGRyZXNzO1xyXG5cclxuICAgICAgICAgICAgLy8gbGV0IHNMYWJlbCA9IDxMYWJlbD4gdGhpcy5zbC5uYXRpdmVFbGVtZW50O1xyXG4gICAgICAgICAgICAvLyBzTGFiZWwuY2xhc3NOYW1lICs9ICdib2xkJztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2UgaWYocmVzLmVuZCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW5kTG9jYXRpb25QaWNrZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmVuZExhYmVsID0gJ0VuZCBsb2NhdGlvbjogJyArIHJlcy5lbmQ7XHJcbiAgICAgICAgICAgIHRoaXMuZW5kUGxhY2UgPSByZXMuZW5kO1xyXG4gICAgICAgICAgICB0aGlzLmVuZEFkZHJlc3MgPSByZXMuYWRkcmVzcztcclxuICAgICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIGlmKHR5cGUgPT0gJ3N0YXJ0Jykge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0TG9jYXRpb25QaWNrZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0TGFiZWwgPSAnUGljayBzdGFydCBsb2NhdGlvbic7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbHNlIGlmKHR5cGUgPT0gJ2VuZCcpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGFydExvY2F0aW9uUGlja2VkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRMYWJlbCA9ICdQaWNrIGVuZCBsb2NhdGlvbic7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjbG9zZShyZXMpIHtcclxuICBcdHRoaXMucGFyYW1zLmNsb3NlQ2FsbGJhY2socmVzKTtcclxuICAgfVxyXG5cclxuICAgYWRkUG9zdGluZygpIHtcclxuICAgICBsZXQgYWRkQ29udGFpbmVyID0gPEZsZXhib3hMYXlvdXQ+IHRoaXMuYWMubmF0aXZlRWxlbWVudDtcclxuICAgICBhZGRDb250YWluZXIuc3R5bGUudmlzaWJpbGl0eSA9ICdjb2xsYXBzZSc7XHJcbiAgICAgbGV0IGFjdGl2aXR5SW5kaWNhdG9yID0gPEFjdGl2aXR5SW5kaWNhdG9yPiB0aGlzLmFpLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICAgYWN0aXZpdHlJbmRpY2F0b3Iuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcclxuICAgICB0aGlzLm1hcFNlcnZpY2UuZ2V0R2VvY29kZVJlc3VsdHModGhpcy5zdGFydFBsYWNlICsgJyAnICsgdGhpcy5zdGFydEFkZHJlc3MpLnN1YnNjcmliZSgocmVzOiBhbnkpID0+IHtcclxuICAgICAgdGhpcy5zdGFydExhdCA9IHJlcy5yZXN1bHRzWzBdLmdlb21ldHJ5LmxvY2F0aW9uLmxhdDtcclxuICAgICAgdGhpcy5zdGFydExuZyA9IHJlcy5yZXN1bHRzWzBdLmdlb21ldHJ5LmxvY2F0aW9uLmxuZztcclxuICAgICAgdGhpcy5tYXBTZXJ2aWNlLmdldEdlb2NvZGVSZXN1bHRzKHRoaXMuZW5kUGxhY2UgKyAnICcgKyB0aGlzLmVuZEFkZHJlc3MpLnN1YnNjcmliZSgocmVzOiBhbnkpID0+IHtcclxuICAgICAgICB0aGlzLmVuZExhdCA9IHJlcy5yZXN1bHRzWzBdLmdlb21ldHJ5LmxvY2F0aW9uLmxhdDtcclxuICAgICAgICB0aGlzLmVuZExuZyA9IHJlcy5yZXN1bHRzWzBdLmdlb21ldHJ5LmxvY2F0aW9uLmxuZztcclxuXHJcbiAgICAgICAgaWYodGhpcy5zdGFydExvY2F0aW9uUGlja2VkICYmIHRoaXMuZW5kTG9jYXRpb25QaWNrZWQpIHtcclxuICAgICAgICAgdmFyIHBvc3RpbmdzQ29sbGVjdGlvbiA9IGZpcmViYXNlLmZpcmVzdG9yZS5jb2xsZWN0aW9uKCdwb3N0aW5ncycpO1xyXG4gICAgICAgICBwb3N0aW5nc0NvbGxlY3Rpb24uYWRkKHtcclxuICAgICAgICAgICB1aWQ6IHRoaXMudXNlci5pZCxcclxuICAgICAgICAgICB1c2VyOiB0aGlzLnVzZXIudXNlcm5hbWUsXHJcbiAgICAgICAgICAgc3RhcnRBZGRyZXNzOiB0aGlzLnN0YXJ0UGxhY2UsXHJcbiAgICAgICAgICAgZW5kQWRkcmVzczogdGhpcy5lbmRQbGFjZSxcclxuICAgICAgICAgICBzdGFydEZvcm1hdHRlZDogdGhpcy5zdGFydEFkZHJlc3MsXHJcbiAgICAgICAgICAgZW5kRm9ybWF0dGVkOiB0aGlzLmVuZEFkZHJlc3MsXHJcbiAgICAgICAgICAgZGF0ZTogdGhpcy5kYXRlLFxyXG4gICAgICAgICAgIHByaWNlOiB0aGlzLnByaWNlLFxyXG4gICAgICAgICAgIGNhcGFjaXR5OiB0aGlzLmNhcGFjaXR5LFxyXG4gICAgICAgICAgIGNvbW1lbnRzOiBcIlwiLFxyXG4gICAgICAgICAgIGZvcm1hdHRlZERhdGU6IHRoaXMuZm9ybWF0dGVkRGF0ZSxcclxuICAgICAgICAgICBzdGFydExhdDogdGhpcy5zdGFydExhdCxcclxuICAgICAgICAgICBlbmRMYXQ6IHRoaXMuZW5kTGF0LFxyXG4gICAgICAgICAgIHN0YXJ0TG5nOiB0aGlzLnN0YXJ0TG5nLFxyXG4gICAgICAgICAgIGVuZExuZzogdGhpcy5lbmRMbmdcclxuICAgICAgICAgfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcyk7XHJcblxyXG4gICAgICAgICAgIGZpcmViYXNlLmZpcmVzdG9yZS5jb2xsZWN0aW9uKCd1c2VycycpLmRvYyh0aGlzLnVzZXIuaWQpLmdldCgpLnRoZW4oZG9jID0+IHtcclxuICAgICAgICAgICAgIHZhciBwb3N0czogU3RyaW5nW10gPSBkb2MuZGF0YSgpLnBvc3RzO1xyXG4gICAgICAgICAgICAgcG9zdHMucHVzaChyZXMuaWQpO1xyXG4gICAgICAgICAgICAgZmlyZWJhc2UuZmlyZXN0b3JlLmNvbGxlY3Rpb24oJ3VzZXJzJykuZG9jKHRoaXMudXNlci5pZCkudXBkYXRlKHtcclxuICAgICAgICAgICAgICAgcG9zdHM6IHBvc3RzXHJcbiAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgdGhpcy51cGxvYWRNYXAocmVzLmlkLCAnc21hbGxfbWFwLnBuZycpO1xyXG4gICAgICAgICAgICAgdGhpcy51cGxvYWRNYXAocmVzLmlkLCAnbGFyZ2VfbWFwLnBuZycpO1xyXG4gICAgICAgICAgIH0pLmNhdGNoKChlcnIpID0+IHt9KVxyXG4gICAgICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7fSlcclxuICAgICAgIH1cclxuXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICAgIC8vIHRoaXMucG9zdGluZ1NlcnZpY2UuYWRkUG9zdGluZyh0aGlzLnVzZXIudXNlcm5hbWUsIHRoaXMuc3RhcnRQbGFjZSwgdGhpcy5lbmRQbGFjZSwgdGhpcy5kYXRlLCB0aGlzLnByaWNlLCB0aGlzLmNhcGFjaXR5LCBcIlwiKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAvLyAgIHRoaXMuY2xvc2UoJ3Bvc3RlZCcpO1xyXG4gICAgICAvLyB9KTtcclxuICB9XHJcblxyXG4gIHVwbG9hZE1hcChpZCwgdXBsb2FkTmFtZSkge1xyXG4gICAgY29uc3QgY2FjaGUgPSBuZXcgQ2FjaGUoKTtcclxuICAgIGNhY2hlLmVuYWJsZURvd25sb2FkKCk7XHJcbiAgICBsZXQgY2FjaGVkSW1hZ2VTb3VyY2U7XHJcbiAgICB2YXIgdXJsID0gdGhpcy5tYXBTZXJ2aWNlLmdldFN0YXRpY01hcCh0aGlzLnN0YXJ0UGxhY2UgKyBcIiBcIiArIHRoaXMuc3RhcnRBZGRyZXNzLCB0aGlzLmVuZFBsYWNlICsgXCIgXCIgKyB0aGlzLmVuZEFkZHJlc3MpO1xyXG4gICAgaWYodXBsb2FkTmFtZSA9PSAnbGFyZ2VfbWFwLnBuZycpXHJcbiAgICAgIHVybCA9IHRoaXMubWFwU2VydmljZS5nZXRTdGF0aWNNYXBMYXJnZSh0aGlzLnN0YXJ0UGxhY2UgKyBcIiBcIiArIHRoaXMuc3RhcnRBZGRyZXNzLCB0aGlzLmVuZFBsYWNlICsgXCIgXCIgKyB0aGlzLmVuZEFkZHJlc3MpO1xyXG4gICAgLy8gVHJ5IHRvIHJlYWQgdGhlIGltYWdlIGZyb20gdGhlIGNhY2hlXHJcbiAgICBjb25zdCBteUltYWdlID0gY2FjaGUuZ2V0KHVybCk7XHJcbiAgICBjYWNoZS5wdXNoKHtcclxuICAgIGtleTogdXJsLFxyXG4gICAgdXJsOiB1cmwsXHJcbiAgICBjb21wbGV0ZWQ6IChpbWFnZSwga2V5KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh1cmwgPT09IGtleSkge1xyXG4gICAgICAgICAgICAgICAgY2FjaGVkSW1hZ2VTb3VyY2UgPSB0aGlzLmltYWdlU291cmNlLnNldE5hdGl2ZVNvdXJjZShpbWFnZSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmb2xkZXJQYXRoOiBzdHJpbmcgPSBrbm93bkZvbGRlcnMuZG9jdW1lbnRzKCkucGF0aDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZpbGVOYW1lID0gdXBsb2FkTmFtZTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZpbGVQYXRoID0gcGF0aC5qb2luKGZvbGRlclBhdGgsIGZpbGVOYW1lKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNhdmVkOiBib29sZWFuID0gdGhpcy5pbWFnZVNvdXJjZS5zYXZlVG9GaWxlKGZpbGVQYXRoLCBcInBuZ1wiKTtcclxuICAgICAgICAgICAgICAgIGlmIChzYXZlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpcmViYXNlLnN0b3JhZ2UudXBsb2FkRmlsZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAvLyB0aGUgZnVsbCBwYXRoIG9mIHRoZSBmaWxlIGluIHlvdXIgRmlyZWJhc2Ugc3RvcmFnZSAoZm9sZGVycyB3aWxsIGJlIGNyZWF0ZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICByZW1vdGVGdWxsUGF0aDogJ3Bvc3RpbmdzLycgKyBpZCArICcvbWFwcy8nICsgdXBsb2FkTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgIC8vIG9wdGlvbiAxOiBhIGZpbGUtc3lzdGVtIG1vZHVsZSBGaWxlIG9iamVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgbG9jYWxGaWxlOiBmcy5GaWxlLmZyb21QYXRoKGZpbGVQYXRoKSxcclxuICAgICAgICAgICAgICAgICAgICAgIC8vIG9wdGlvbiAyOiBhIGZ1bGwgZmlsZSBwYXRoIChpZ25vcmVkIGlmICdsb2NhbEZpbGUnIGlzIHNldClcclxuICAgICAgICAgICAgICAgICAgICAgIGxvY2FsRnVsbFBhdGg6IGZpbGVQYXRoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgLy8gZ2V0IG5vdGlmaWVkIG9mIGZpbGUgdXBsb2FkIHByb2dyZXNzXHJcbiAgICAgICAgICAgICAgICAgICAgICBvblByb2dyZXNzOiAoc3RhdHVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVXBsb2FkZWQgZnJhY3Rpb246IFwiICsgc3RhdHVzLmZyYWN0aW9uQ29tcGxldGVkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJQZXJjZW50YWdlIGNvbXBsZXRlOiBcIiArIHN0YXR1cy5wZXJjZW50YWdlQ29tcGxldGVkKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KS50aGVuKCh1cGxvYWRlZEZpbGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIGlmKHVwbG9hZE5hbWUgPT0gJ3NtYWxsX21hcC5wbmcnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaXJlYmFzZS5zdG9yYWdlLmdldERvd25sb2FkVXJsKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdGVGdWxsUGF0aDogJ3Bvc3RpbmdzLycgKyBpZCArICcvbWFwcy9zbWFsbF9tYXAucG5nJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS50aGVuKCh1cmwpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBmaXJlYmFzZS5maXJlc3RvcmUuY29sbGVjdGlvbigncG9zdGluZ3MnKS5kb2MoaWQpLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXBfdXJsOiB1cmxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhY3Rpdml0eUluZGljYXRvciA9IDxBY3Rpdml0eUluZGljYXRvcj4gdGhpcy5haS5uYXRpdmVFbGVtZW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGFkZENvbnRhaW5lciA9IDxGbGV4Ym94TGF5b3V0PiB0aGlzLmFjLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpdml0eUluZGljYXRvci5zdHlsZS52aXNpYmlsaXR5ID0gJ2NvbGxhcHNlJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZENvbnRhaW5lci5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZSgncG9zdGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBvblBpY2tlckxvYWRlZChhcmdzKSB7XHJcbiAgXHRsZXQgZGF0ZVBpY2tlciA9IDxEYXRlUGlja2VyPmFyZ3Mub2JqZWN0O1xyXG5cclxuICBcdHZhciB0b2RheSA9IG5ldyBEYXRlKCk7XHJcblxyXG4gIFx0ZGF0ZVBpY2tlci5taW5EYXRlID0gbmV3IERhdGUoKTtcclxuXHJcbiAgXHR2YXIgbmV4dFllYXJEYXRlID0gbmV3IERhdGUodG9kYXkpO1xyXG4gIFx0bmV4dFllYXJEYXRlLnNldERhdGUobmV4dFllYXJEYXRlLmdldERhdGUoKSArIDM2NSk7XHJcbiAgXHRkYXRlUGlja2VyLm1heERhdGUgPSBuZXh0WWVhckRhdGU7XHJcbiAgfVxyXG5cclxuICBvbkRhdGVDaGFuZ2VkKGFyZ3MpIHtcclxuICBcdGxldCBkYXRlUGlja2VyID0gPERhdGVQaWNrZXI+YXJncy5vYmplY3Q7XHJcbiAgXHR2YXIgc2VsZWN0ZWREYXRlID0gZGF0ZVBpY2tlci5kYXRlO1xyXG4gICAgdGhpcy5mb3JtYXR0ZWREYXRlID0gdGhpcy5kYXRlUGlwZS50cmFuc2Zvcm0oc2VsZWN0ZWREYXRlLFwieXl5eS1NTS1kZFwiKVxyXG5cclxuICBcdC8vIGNvbnNvbGUubG9nKHNlbGVjdGVkRGF0ZS50b1N0cmluZygpLnN1YnN0cmluZygwLCAxNSkpO1xyXG4gIFx0dGhpcy5kYXRlID0gc2VsZWN0ZWREYXRlLnRvU3RyaW5nKCkuc3Vic3RyaW5nKDAsIDE1KTtcclxuICB9XHJcblxyXG4gIG9uQ2hlY2tlZENoYW5nZShhcmdzKSB7XHJcbiAgXHRsZXQgbXlTd2l0Y2ggPSBhcmdzLm9iamVjdCBhcyBTd2l0Y2g7XHJcbiAgICBsZXQgaXNDaGVja2VkID0gbXlTd2l0Y2guY2hlY2tlZDsgLy8gYm9vbGVhblxyXG5cclxuICAgIGxldCBkcml2aW5nTGFiZWwgPSA8TGFiZWw+IHRoaXMuZGwubmF0aXZlRWxlbWVudDtcclxuICAgIGxldCByaWRpbmdMYWJlbCA9IDxMYWJlbD4gdGhpcy5ybC5uYXRpdmVFbGVtZW50O1xyXG5cclxuICAgIGlmKGlzQ2hlY2tlZCkge1xyXG4gICAgXHRkcml2aW5nTGFiZWwuc3R5bGUuZm9udFdlaWdodCA9IFwiNDAwXCI7XHJcbiAgICBcdGRyaXZpbmdMYWJlbC5zdHlsZS5jb2xvciA9IG5ldyBDb2xvcihcIiM1YzY4N2NcIik7XHJcbiAgICBcdHJpZGluZ0xhYmVsLnN0eWxlLmZvbnRXZWlnaHQgPSBcIjcwMFwiO1xyXG4gICAgXHRyaWRpbmdMYWJlbC5zdHlsZS5jb2xvciA9IG5ldyBDb2xvcihcIiNhYzAwZTZcIik7XHJcbiAgICBcdHRoaXMuaXNEcml2aW5nID0gZmFsc2U7XHJcbiAgICBcdHRoaXMuY2FwYWNpdHkgPSBcIi0xXCI7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgIFx0ZHJpdmluZ0xhYmVsLnN0eWxlLmZvbnRXZWlnaHQgPSBcIjcwMFwiO1xyXG4gICAgXHRkcml2aW5nTGFiZWwuc3R5bGUuY29sb3IgPSBuZXcgQ29sb3IoXCIjYWMwMGU2XCIpO1xyXG4gICAgXHRyaWRpbmdMYWJlbC5zdHlsZS5mb250V2VpZ2h0ID0gXCI0MDBcIjtcclxuICAgIFx0cmlkaW5nTGFiZWwuc3R5bGUuY29sb3IgPSBuZXcgQ29sb3IoXCIjNWM2ODdjXCIpO1xyXG4gICAgXHR0aGlzLmlzRHJpdmluZyA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLyogQWRkIG1vYmlsZSBzdHlsZXMgZm9yIHRoZSBjb21wb25lbnQgaGVyZS4gICovXFxyXFxuLmNsb3NlIHtcXHJcXG5cXHRtYXJnaW46IDEwO1xcclxcblxcdGZvbnQtc2l6ZTogMjg7XFxyXFxuXFx0d2lkdGg6IDQ4O1xcclxcblxcdGhlaWdodDogNDg7XFxyXFxufVxcclxcblxcclxcbi5jbG9zZS1idXR0b24tY29udGFpbmVyIHtcXHJcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0bGVmdDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnBheW1lbnQtdHlwZS1pY29uIHtcXHJcXG5cXHRoZWlnaHQ6IDM0O1xcclxcblxcdHdpZHRoOiAzNDtcXHJcXG5cXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuXFx0bWFyZ2luLXRvcDogMTg7XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTogMTg7XFxyXFxuXFx0bWFyZ2luLWxlZnQ6IDM2O1xcclxcbn1cXHJcXG5cXHJcXG4ucGF5bWVudC1pbmZvLWxhYmVsIHtcXHJcXG5cXHRmb250LXNpemU6IDE2O1xcclxcblxcdC8qZm9udC13ZWlnaHQ6IDcwMDsqL1xcclxcblxcdHBhZGRpbmc6IDMwO1xcclxcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHRjb2xvcjogYmxhY2s7XFxyXFxufVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxTdGFja0xheW91dD5cXHJcXG5cXHQ8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImNsb3NlLWJ1dHRvbi1jb250YWluZXJcXFwiIG9yaWVudGF0aW9uPVxcXCJob3Jpem9udGFsXFxcIj5cXHJcXG5cXHRcXHQ8TGFiZWwgdGV4dD1cXFwiJnRpbWVzO1xcXCIgY2xhc3M9XFxcImNsb3NlXFxcIiAodGFwKT1cXFwiY2xvc2UoJ2NhbmNlbCcpXFxcIj48L0xhYmVsPlxcclxcblxcdDwvU3RhY2tMYXlvdXQ+XFxyXFxuXFxyXFxuXFx0PExpc3RWaWV3IFtpdGVtc109XFxcIm1ldGhvZHNcXFwiIHNlcGFyYXRvckNvbG9yPVxcXCJ0cmFuc3BhcmVudFxcXCIgKGl0ZW1UYXApPVxcXCJvblNlbGVjdCgkZXZlbnQpXFxcIj5cXHJcXG5cXHRcXHQ8bmctdGVtcGxhdGUgbGV0LWl0ZW09XFxcIml0ZW1cXFwiIGxldC1pPVxcXCJpbmRleFxcXCIgbGV0LW9kZD1cXFwib2RkXFxcIiBsZXQtZXZlbj1cXFwiZXZlblxcXCI+XFxyXFxuXFx0XFx0XFx0PFN0YWNrTGF5b3V0IFtjbGFzcy5vZGRdPVxcXCJvZGRcXFwiIFtjbGFzcy5ldmVuXT1cXFwiZXZlblxcXCIgb3JpZW50YXRpb249XFxcImhvcml6b250YWxcXFwiPlxcclxcblxcdFxcdFxcdFxcdDxJbWFnZSBbc3JjXT1cXFwiaXRlbS5wYXltZW50VHlwZVxcXCIgY2xhc3M9XFxcInBheW1lbnQtdHlwZS1pY29uXFxcIj48L0ltYWdlPlxcclxcblxcdFxcdFxcdFxcdDxMYWJlbCB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgW3RleHRdPVxcXCJpdGVtLmluZm9cXFwiIGNsYXNzPVxcXCJwYXltZW50LWluZm8tbGFiZWxcXFwiPjwvTGFiZWw+XFxyXFxuXFx0XFx0XFx0PC9TdGFja0xheW91dD5cXHJcXG5cXHRcXHQ8L25nLXRlbXBsYXRlPlxcclxcblxcdDwvTGlzdFZpZXc+XFxyXFxuPC9TdGFja0xheW91dD5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTW9kYWxEaWFsb2dQYXJhbXMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZGlyZWN0aXZlcy9kaWFsb2dzXCI7XHJcbmltcG9ydCB7IE1vZGFsRGlhbG9nU2VydmljZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9kaXJlY3RpdmVzL2RpYWxvZ3NcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZUFycmF5IH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUtYXJyYXknO1xyXG5pbXBvcnQgeyBBZGRDYXJkUGF5bWVudENvbXBvbmVudCB9IGZyb20gJy4uL2FkZC1jYXJkLXBheW1lbnQvYWRkLWNhcmQtcGF5bWVudC5jb21wb25lbnQnO1xyXG5cclxuXHJcbmNsYXNzIE1ldGhvZEl0ZW0ge1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXltZW50VHlwZTogc3RyaW5nLCBwdWJsaWMgaW5mbzogc3RyaW5nKSB7fVxyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1hZGQtcGF5bWVudCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2FkZC1wYXltZW50LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9hZGQtcGF5bWVudC5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEFkZFBheW1lbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHZjUmVmOiBWaWV3Q29udGFpbmVyUmVmLCBwcml2YXRlIG1vZGFsOiBNb2RhbERpYWxvZ1NlcnZpY2UsIHByaXZhdGUgcGFyYW1zOiBNb2RhbERpYWxvZ1BhcmFtcykgeyB9XHJcblxyXG4gIG1ldGhvZHMgPSBuZXcgT2JzZXJ2YWJsZUFycmF5PE1ldGhvZEl0ZW0+KCk7XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIFx0dGhpcy5hZGRNZXRob2RzKCk7XHJcbiAgfVxyXG5cclxuICBhZGRNZXRob2RzKCkge1xyXG4gIFx0dGhpcy5tZXRob2RzLnB1c2gobmV3IE1ldGhvZEl0ZW0oJ34vaW1nL2NyZWRpdC1jYXJkLWljb24ucG5nJywgJ0NyZWRpdCBvciBEZWJpdCBDYXJkJykpO1xyXG4gIFx0dGhpcy5tZXRob2RzLnB1c2gobmV3IE1ldGhvZEl0ZW0oJ34vaW1nL3BheXBhbC1pY29uLnBuZycsICdQYXlwYWwnKSk7XHJcbiAgXHR0aGlzLm1ldGhvZHMucHVzaChuZXcgTWV0aG9kSXRlbSgnfi9pbWcvdmVubW8taWNvbi5wbmcnLCAnVmVubW8nKSk7XHJcbiAgfVxyXG5cclxuICBvcGVuQ2FyZFBheW1lbnQoKSB7XHJcbiAgICBsZXQgb3B0aW9ucyA9IHtcclxuICAgICAgICBjb250ZXh0OiB7fSxcclxuICAgICAgICBmdWxsc2NyZWVuOiB0cnVlLFxyXG4gICAgICAgIHZpZXdDb250YWluZXJSZWY6IHRoaXMudmNSZWZcclxuICAgICAgICAvLyBhbmltYXRlZDogdHJ1ZSxcclxuICAgICAgICAvLyB0cmFuc2l0aW9uOiB7IG5hbWU6IFwic2xpZGVUb3BcIiB9XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMubW9kYWwuc2hvd01vZGFsKEFkZENhcmRQYXltZW50Q29tcG9uZW50LCBvcHRpb25zKS50aGVuKHJlcyA9PiB7XHJcblxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjbG9zZShyZXMpIHtcclxuICBcdHRoaXMucGFyYW1zLmNsb3NlQ2FsbGJhY2socmVzKTtcclxuICB9XHJcblxyXG4gIG9uU2VsZWN0KGV2ZW50KSB7XHJcbiAgXHQvL2V2ZW50LmluZGV4IHN0b3JlcyB3aGljaCBpbmRleCB3YXMgdGFwcGVkXHJcbiAgXHRpZihldmVudC5pbmRleCA9PSAwKVxyXG4gIFx0XHR0aGlzLm9wZW5DYXJkUGF5bWVudCgpO1xyXG4gIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gJy4vYXBwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IExvZ2luRGlyZWN0aXZlIH0gZnJvbSAnLi9sb2dpbi5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBMb2dpbkNvbXBvbmVudCB9IGZyb20gJy4vbG9naW4vbG9naW4uY29tcG9uZW50JztcclxuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gJy4vaG9tZS9ob21lLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEhvbWVEaXJlY3RpdmUgfSBmcm9tICcuL2hvbWUuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgSGlzdG9yeUNvbXBvbmVudCB9IGZyb20gJy4vaGlzdG9yeS9oaXN0b3J5LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFNldHRpbmdzQ29tcG9uZW50IH0gZnJvbSAnLi9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYW5pbWF0aW9ucyc7XHJcbmltcG9ydCB7IE5neFBheVBhbE1vZHVsZSB9IGZyb20gJ25neC1wYXlwYWwnO1xyXG5cclxuaW1wb3J0IHsgUG9zdGluZ1NlcnZpY2UgfSBmcm9tICcuL3Bvc3Rpbmcuc2VydmljZSc7XHJcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSAnLi91c2VyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBUcmFuc2ZlclNlcnZpY2UgfSBmcm9tICcuL2RhdGF0cmFuc2Zlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRHluYW1pY0FkZFNlcnZpY2UgfSBmcm9tICcuL2R5bmFtaWMtYWRkLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQYXltZW50U2VydmljZSB9IGZyb20gJy4vcGF5bWVudC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUG9zdGluZ0NvbXBvbmVudCB9IGZyb20gJy4vcG9zdGluZy9wb3N0aW5nLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFVwZGF0ZUNvbXBvbmVudCB9IGZyb20gJy4vdXBkYXRlL3VwZGF0ZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb25uZWN0Q29tcG9uZW50IH0gZnJvbSAnLi9jb25uZWN0L2Nvbm5lY3QuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSwgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7TWF0SW5wdXRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcclxuLy8gaW1wb3J0IHsgQW1wbGlmeUFuZ3VsYXJNb2R1bGUsIEFtcGxpZnlTZXJ2aWNlIH0gZnJvbSAnYXdzLWFtcGxpZnktYW5ndWxhcic7XHJcbmltcG9ydCB7IExvZ2lucm91dGVDb21wb25lbnQgfSBmcm9tICcuL2xvZ2lucm91dGUvbG9naW5yb3V0ZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEaWFsb2dDb21wb25lbnQgfSBmcm9tICcuL2RpYWxvZy9kaWFsb2cuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTmF2aWdhdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudCc7XHJcblxyXG5pbXBvcnQgeyBBdXRvR2VuZXJhdGVkQ29tcG9uZW50IH0gZnJvbSAnLi9hdXRvLWdlbmVyYXRlZC9hdXRvLWdlbmVyYXRlZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQYXltZW50c0NvbXBvbmVudCB9IGZyb20gJy4vcGF5bWVudHMvcGF5bWVudHMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGF5bWVudE1ldGhvZENvbXBvbmVudCB9IGZyb20gJy4vcGF5bWVudC1tZXRob2QvcGF5bWVudC1tZXRob2QuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU2VhcmNoQ29tcG9uZW50IH0gZnJvbSAnLi9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBheW1lbnRJbmZvQ29tcG9uZW50IH0gZnJvbSAnLi9wYXltZW50LWluZm8vcGF5bWVudC1pbmZvLmNvbXBvbmVudCdcclxuaW1wb3J0IHsgV2VsY29tZUNvbXBvbmVudCB9IGZyb20gJy4vd2VsY29tZS93ZWxjb21lLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBvc3RpbmdJbmZvQ29tcG9uZW50IH0gZnJvbSAnLi9wb3N0aW5nLWluZm8vcG9zdGluZy1pbmZvLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7U2V0dGluZ3Nmb3JtQ29tcG9uZW50fSBmcm9tICcuL3NldHRpbmdzZm9ybS9zZXR0aW5nc2Zvcm0uY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ2hhdENvbXBvbmVudCB9IGZyb20gJy4vY2hhdC9jaGF0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENoYXRMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9jaGF0LWxpc3QvY2hhdC1saXN0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFZpZXdJbWFnZUNvbXBvbmVudCB9IGZyb20gJy4vdmlldy1pbWFnZS92aWV3LWltYWdlLmNvbXBvbmVudCc7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHJvdXRlczogUm91dGVzID0gW1xyXG4gIHsgcGF0aDogJ2xvZ2luJywgY29tcG9uZW50OiBMb2dpbkNvbXBvbmVudCB9LFxyXG4gIHsgcGF0aDogJycsICAgcmVkaXJlY3RUbzogJy93ZWxjb21lJywgcGF0aE1hdGNoOiAnZnVsbCcgfSxcclxuICB7IHBhdGg6ICdob21lJywgY29tcG9uZW50OiBIb21lQ29tcG9uZW50IH0sXHJcbiAgeyBwYXRoOiAnaGlzdG9yeScsIGNvbXBvbmVudDogSGlzdG9yeUNvbXBvbmVudCB9LFxyXG4gIHsgcGF0aDogJ3NldHRpbmdzJywgY29tcG9uZW50OiBTZXR0aW5nc0NvbXBvbmVudCB9LFxyXG4gIHsgcGF0aDogJ3VwZGF0ZScsIGNvbXBvbmVudDogVXBkYXRlQ29tcG9uZW50IH0sXHJcbiAgeyBwYXRoOiAnY29ubmVjdCcsIGNvbXBvbmVudDogQ29ubmVjdENvbXBvbmVudCB9LFxyXG4gIHsgcGF0aDogJ2xvZ2lucm91dGUnLCBjb21wb25lbnQ6IExvZ2lucm91dGVDb21wb25lbnQgfSxcclxuICB7IHBhdGg6ICdwYXltZW50cycsIGNvbXBvbmVudDogUGF5bWVudHNDb21wb25lbnQgfSxcclxuICB7IHBhdGg6ICdzZWFyY2gnLCBjb21wb25lbnQ6IFNlYXJjaENvbXBvbmVudCB9LFxyXG4gIHsgcGF0aDogJ25hdmlnYXRpb24nLCBjb21wb25lbnQ6IE5hdmlnYXRpb25Db21wb25lbnQgfSxcclxuICB7IHBhdGg6ICdwYXltZW50aW5mbycsIGNvbXBvbmVudDogUGF5bWVudEluZm9Db21wb25lbnQgfSxcclxuICB7IHBhdGg6ICd3ZWxjb21lJywgY29tcG9uZW50OiBXZWxjb21lQ29tcG9uZW50IH0sXHJcbiAgeyBwYXRoOiAncG9zdGluZy1pbmZvJywgY29tcG9uZW50OiBQb3N0aW5nSW5mb0NvbXBvbmVudCB9LFxyXG4gIHsgcGF0aDogJ3NldHRpbmdzZm9ybScsIGNvbXBvbmVudDogU2V0dGluZ3Nmb3JtQ29tcG9uZW50IH0sXHJcbiAgeyBwYXRoOiAnY2hhdCcsIGNvbXBvbmVudDogQ2hhdENvbXBvbmVudCB9LFxyXG4gIHsgcGF0aDogJ2NoYXQtbGlzdCcsIGNvbXBvbmVudDogQ2hhdExpc3RDb21wb25lbnQgfSxcclxuICB7IHBhdGg6ICd2aWV3LWltYWdlJywgY29tcG9uZW50OiBWaWV3SW1hZ2VDb21wb25lbnQgfSxcclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyldLFxyXG4gIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBSb3V0aW5nTW9kdWxlIHsgfVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPCEtLSBodHRwczovL2RvY3MubmF0aXZlc2NyaXB0Lm9yZy9hbmd1bGFyL2NvcmUtY29uY2VwdHMvYW5ndWxhci1uYXZpZ2F0aW9uLmh0bWwjcGFnZS1yb3V0ZXItb3V0bGV0IC0tPlxcclxcblxcclxcbjxQYWdlPlxcclxcblxcdCAgICA8cGFnZS1yb3V0ZXItb3V0bGV0PjwvcGFnZS1yb3V0ZXItb3V0bGV0PlxcclxcbjwvUGFnZT5cIiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtcm9vdCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2FwcC5jb21wb25lbnQuaHRtbCcsXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHsgfVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlJztcclxuXHJcbmltcG9ydCB7IEFwcFJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL2FwcC1yb3V0aW5nLm1vZHVsZS50bnMnO1xyXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tICcuL2FwcC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBdXRvR2VuZXJhdGVkQ29tcG9uZW50IH0gZnJvbSAnLi9hdXRvLWdlbmVyYXRlZC9hdXRvLWdlbmVyYXRlZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQYXltZW50c0NvbXBvbmVudCB9IGZyb20gJy4vcGF5bWVudHMvcGF5bWVudHMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGF5bWVudE1ldGhvZENvbXBvbmVudCB9IGZyb20gJy4vcGF5bWVudC1tZXRob2QvcGF5bWVudC1tZXRob2QuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29ubmVjdENvbXBvbmVudCB9IGZyb20gJy4vY29ubmVjdC9jb25uZWN0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEhpc3RvcnlDb21wb25lbnQgfSBmcm9tICcuL2hpc3RvcnkvaGlzdG9yeS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSAnLi9ob21lL2hvbWUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTG9naW5Db21wb25lbnQgfSBmcm9tICcuL2xvZ2luL2xvZ2luLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IExvZ2lucm91dGVDb21wb25lbnQgfSBmcm9tICcuL2xvZ2lucm91dGUvbG9naW5yb3V0ZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOYXZpZ2F0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgUG9zdGluZ0NvbXBvbmVudCB9IGZyb20gJy4vcG9zdGluZy9wb3N0aW5nLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFNldHRpbmdzQ29tcG9uZW50IH0gZnJvbSAnLi9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBVcGRhdGVDb21wb25lbnQgfSBmcm9tICcuL3VwZGF0ZS91cGRhdGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi9kaWFsb2cvZGlhbG9nLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFNlYXJjaENvbXBvbmVudCB9IGZyb20gJy4vc2VhcmNoL3NlYXJjaC5jb21wb25lbnQnO1xyXG5cclxuaW1wb3J0IHsgTG9naW5EaXJlY3RpdmUgfSBmcm9tICcuL2xvZ2luLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IEhvbWVEaXJlY3RpdmUgfSBmcm9tICcuL2hvbWUuZGlyZWN0aXZlJztcclxuXHJcbmltcG9ydCB7IFBvc3RpbmdTZXJ2aWNlIH0gZnJvbSAnLi9wb3N0aW5nLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gJy4vdXNlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVHJhbnNmZXJTZXJ2aWNlIH0gZnJvbSAnLi9kYXRhdHJhbnNmZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IER5bmFtaWNBZGRTZXJ2aWNlIH0gZnJvbSAnLi9keW5hbWljLWFkZC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUGF5bWVudFNlcnZpY2UgfSBmcm9tICcuL3BheW1lbnQuc2VydmljZSc7XHJcbmltcG9ydCB7IFBsYWNlc0F1dG9jb21wbGV0ZVNlcnZpY2UgfSBmcm9tICcuL3BsYWNlcy1hdXRvY29tcGxldGUuc2VydmljZSc7XHJcbmltcG9ydCB7IEdvb2dsZU1hcHNTZXJ2aWNlIH0gZnJvbSAnLi9nb29nbGUtbWFwcy5zZXJ2aWNlJztcclxuXHJcbmltcG9ydCB7IE1vZGFsRGlhbG9nU2VydmljZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9tb2RhbC1kaWFsb2dcIjtcclxuXHJcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUsIEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQge01hdElucHV0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pbnB1dCc7XHJcbmltcG9ydCB7IEFnbUNvcmVNb2R1bGUgfSBmcm9tICdAYWdtL2NvcmUnO1xyXG5pbXBvcnQgeyBOZ3hQYXlQYWxNb2R1bGUgfSBmcm9tICduZ3gtcGF5cGFsJztcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlEYXRhRm9ybU1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktZGF0YWZvcm0vYW5ndWxhclwiO1xyXG5pbXBvcnQgeyBOZ3hCcmFpbnRyZWVNb2R1bGUgfSBmcm9tICduZ3gtYnJhaW50cmVlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgTWFza2VkVGV4dEZpZWxkTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1tYXNrZWQtdGV4dC1maWVsZC9hbmd1bGFyXCI7XHJcblxyXG4vLyBVbmNvbW1lbnQgYW5kIGFkZCB0byBOZ01vZHVsZSBpbXBvcnRzIGlmIHlvdSBuZWVkIHRvIHVzZSB0d28td2F5IGJpbmRpbmdcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtcyc7XHJcblxyXG4vLyBVbmNvbW1lbnQgYW5kIGFkZCB0byBOZ01vZHVsZSBpbXBvcnRzICBpZiB5b3UgbmVlZCB0byB1c2UgdGhlIEhUVFAgd3JhcHBlclxyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cC1jbGllbnQnO1xyXG5pbXBvcnQgeyBGbG9hdEJ0bkNvbXBvbmVudCB9IGZyb20gJy4vZmxvYXQtYnRuL2Zsb2F0LWJ0bi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBZGRNb2RhbENvbXBvbmVudCB9IGZyb20gJy4vYWRkLW1vZGFsL2FkZC1tb2RhbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBMb2NhdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vbG9jYXRpb24vbG9jYXRpb24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgQWRkUGF5bWVudENvbXBvbmVudCB9IGZyb20gJy4vYWRkLXBheW1lbnQvYWRkLXBheW1lbnQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQWRkQ2FyZFBheW1lbnRDb21wb25lbnQgfSBmcm9tICcuL2FkZC1jYXJkLXBheW1lbnQvYWRkLWNhcmQtcGF5bWVudC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQYXltZW50SW5mb0NvbXBvbmVudCB9IGZyb20gJy4vcGF5bWVudC1pbmZvL3BheW1lbnQtaW5mby5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb25maXJtYXRpb25Db21wb25lbnQgfSBmcm9tICcuL2NvbmZpcm1hdGlvbi9jb25maXJtYXRpb24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgTWVzc2FnZU1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi9tZXNzYWdlLW1vZGFsL21lc3NhZ2UtbW9kYWwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgV2VsY29tZUNvbXBvbmVudCB9IGZyb20gJy4vd2VsY29tZS93ZWxjb21lLmNvbXBvbmVudCc7XHJcbmltcG9ydCAqIGFzIGFwcGxpY2F0aW9uIGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb24nO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGYWNlYm9va01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtZmFjZWJvb2svYW5ndWxhclwiO1xyXG5pbXBvcnQgKiBhcyBuc0ZhY2Vib29rIGZyb20gJ25hdGl2ZXNjcmlwdC1mYWNlYm9vayc7XHJcbmltcG9ydCB7IERhdGVQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgUG9zdGluZ0luZm9Db21wb25lbnQgfSBmcm9tICcuL3Bvc3RpbmctaW5mby9wb3N0aW5nLWluZm8uY29tcG9uZW50JztcclxuaW1wb3J0IHsgaXNJT1MgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtJztcclxuZGVjbGFyZSB2YXIgR01TU2VydmljZXM6IGFueTtcclxuaW1wb3J0IHsgU2V0dGluZ3Nmb3JtQ29tcG9uZW50IH0gZnJvbSAnLi9zZXR0aW5nc2Zvcm0vc2V0dGluZ3Nmb3JtLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFJlYXV0aENvbXBvbmVudCB9IGZyb20gJy4vcmVhdXRoL3JlYXV0aC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDaGF0Q29tcG9uZW50IH0gZnJvbSAnLi9jaGF0L2NoYXQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ2hhdExpc3RDb21wb25lbnQgfSBmcm9tICcuL2NoYXQtbGlzdC9jaGF0LWxpc3QuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVmlld0ltYWdlQ29tcG9uZW50IH0gZnJvbSAnLi92aWV3LWltYWdlL3ZpZXctaW1hZ2UuY29tcG9uZW50JztcclxuaW1wb3J0IHsgcmVnaXN0ZXJFbGVtZW50IH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvZWxlbWVudC1yZWdpc3RyeSc7XHJcbnJlZ2lzdGVyRWxlbWVudCgnRmFiJywgKCkgPT4gcmVxdWlyZSgnQG5zdHVkaW8vbmF0aXZlc2NyaXB0LWZsb2F0aW5nYWN0aW9uYnV0dG9uJykuRmFiKTtcclxucmVnaXN0ZXJFbGVtZW50KFwiUHVsbFRvUmVmcmVzaFwiLCAoKSA9PiByZXF1aXJlKFwiQG5zdHVkaW8vbmF0aXZlc2NyaXB0LXB1bGx0b3JlZnJlc2hcIikuUHVsbFRvUmVmcmVzaCk7XHJcbmltcG9ydCB7IEZvcmdldEZvcm1Db21wb25lbnQgfSBmcm9tICcuL2ZvcmdldC1mb3JtL2ZvcmdldC1mb3JtLmNvbXBvbmVudCc7XHJcblxyXG5cclxuLy8gcmVxdWlyZSgnbmF0aXZlc2NyaXB0LW5vZGVpZnknKVxyXG4vLyBpbXBvcnQgeyBBbXBsaWZ5QW5ndWxhck1vZHVsZSwgQW1wbGlmeVNlcnZpY2UgfSBmcm9tICdhd3MtYW1wbGlmeS1hbmd1bGFyJztcclxuXHJcbi8vIGltcG9ydCB7IEFuZ3VsYXJGaXJlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZmlyZSc7XHJcbi8vIGltcG9ydCB7IEFuZ3VsYXJGaXJlc3RvcmVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9maXJlL2ZpcmVzdG9yZSc7XHJcbi8vIGltcG9ydCB7IEFuZ3VsYXJGaXJlU3RvcmFnZU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2ZpcmUvc3RvcmFnZSc7XHJcbi8vIGltcG9ydCB7IEFuZ3VsYXJGaXJlQXV0aE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2ZpcmUvYXV0aCc7XHJcbi8vIGltcG9ydCB7IGVudmlyb25tZW50IH0gZnJvbSAnLi4vZW52aXJvbm1lbnRzL2Vudmlyb25tZW50JztcclxuaWYgKGlzSU9TKSB7IFxyXG4gIEdNU1NlcnZpY2VzLnByb3ZpZGVBUElLZXkoXCJBSXphU3lBSVR4UzFqbWY4UE10YXpSZ3VXY0FmV1F4VzFrUE9vWWdcIik7XHJcbn1cclxuXHJcbmFwcGxpY2F0aW9uLm9uKGFwcGxpY2F0aW9uLmxhdW5jaEV2ZW50LCBmdW5jdGlvbiAoYXJncykge1xyXG4gICAgbnNGYWNlYm9vay5pbml0KFwiMjI3MjEyOTY0OTY3Nzc0N1wiKTtcclxufSk7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgQXBwQ29tcG9uZW50LFxyXG4gICAgTG9naW5EaXJlY3RpdmUsXHJcbiAgICBMb2dpbkNvbXBvbmVudCxcclxuICAgIEhvbWVDb21wb25lbnQsXHJcbiAgICBIb21lRGlyZWN0aXZlLFxyXG4gICAgSGlzdG9yeUNvbXBvbmVudCxcclxuICAgIFNldHRpbmdzQ29tcG9uZW50LFxyXG4gICAgUG9zdGluZ0NvbXBvbmVudCxcclxuICAgIFVwZGF0ZUNvbXBvbmVudCxcclxuICAgIENvbm5lY3RDb21wb25lbnQsXHJcbiAgICBMb2dpbnJvdXRlQ29tcG9uZW50LFxyXG4gICAgRGlhbG9nQ29tcG9uZW50LFxyXG4gICAgTmF2aWdhdGlvbkNvbXBvbmVudCxcclxuICAgIEF1dG9HZW5lcmF0ZWRDb21wb25lbnQsXHJcbiAgICBQYXltZW50c0NvbXBvbmVudCxcclxuICAgIFBheW1lbnRNZXRob2RDb21wb25lbnQsXHJcbiAgICBTZWFyY2hDb21wb25lbnQsXHJcbiAgICBGbG9hdEJ0bkNvbXBvbmVudCxcclxuICAgIEFkZE1vZGFsQ29tcG9uZW50LFxyXG4gICAgTG9jYXRpb25Db21wb25lbnQsXHJcbiAgICBBZGRQYXltZW50Q29tcG9uZW50LFxyXG4gICAgQWRkQ2FyZFBheW1lbnRDb21wb25lbnQsXHJcbiAgICBQYXltZW50SW5mb0NvbXBvbmVudCxcclxuICAgIENvbmZpcm1hdGlvbkNvbXBvbmVudCxcclxuICAgIE1lc3NhZ2VNb2RhbENvbXBvbmVudCxcclxuICAgIFdlbGNvbWVDb21wb25lbnQsXHJcbiAgICBQb3N0aW5nSW5mb0NvbXBvbmVudCxcclxuICAgIFNldHRpbmdzZm9ybUNvbXBvbmVudCxcclxuICAgIFJlYXV0aENvbXBvbmVudCxcclxuICAgIENoYXRDb21wb25lbnQsXHJcbiAgICBDaGF0TGlzdENvbXBvbmVudCxcclxuICAgIFZpZXdJbWFnZUNvbXBvbmVudCxcclxuICAgIEZvcmdldEZvcm1Db21wb25lbnQsXHJcbiAgXSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXHJcbiAgICBBcHBSb3V0aW5nTW9kdWxlLFxyXG4gICAgTmF0aXZlU2NyaXB0SHR0cENsaWVudE1vZHVsZSxcclxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXHJcbiAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcclxuICAgIE1hdElucHV0TW9kdWxlLFxyXG4gICAgQWdtQ29yZU1vZHVsZS5mb3JSb290KHtcclxuICAgICAgYXBpS2V5OiAnQUl6YVN5QUlUeFMxam1mOFBNdGF6Umd1V2NBZldReFcxa1BPb1lnJ1xyXG4gICAgfSksXHJcbiAgICBOZ3hQYXlQYWxNb2R1bGUsXHJcbiAgICBOYXRpdmVTY3JpcHRVSURhdGFGb3JtTW9kdWxlLFxyXG4gICAgLy8gTmd4QnJhaW50cmVlTW9kdWxlLFxyXG4gICAgSHR0cENsaWVudE1vZHVsZSxcclxuICAgIE5hdGl2ZVNjcmlwdEZhY2Vib29rTW9kdWxlLFxyXG4gICAgTWFza2VkVGV4dEZpZWxkTW9kdWxlXHJcbiAgICAvLyBBbmd1bGFyRmlyZU1vZHVsZS5pbml0aWFsaXplQXBwKGVudmlyb25tZW50LmZpcmViYXNlKSxcclxuICAgIC8vIEFuZ3VsYXJGaXJlc3RvcmVNb2R1bGUsIC8vIGltcG9ydHMgZmlyZWJhc2UvZmlyZXN0b3JlLCBvbmx5IG5lZWRlZCBmb3IgZGF0YWJhc2UgZmVhdHVyZXNcclxuICAgIC8vIEFuZ3VsYXJGaXJlQXV0aE1vZHVsZSwgLy8gaW1wb3J0cyBmaXJlYmFzZS9hdXRoLCBvbmx5IG5lZWRlZCBmb3IgYXV0aCBmZWF0dXJlcyxcclxuICAgIC8vIEFuZ3VsYXJGaXJlU3RvcmFnZU1vZHVsZSAvLyBpbXBvcnRzIGZpcmViYXNlL3N0b3JhZ2Ugb25seSBuZWVkZWQgZm9yIHN0b3JhZ2UgZmVhdHVyZXNcclxuICBdLFxyXG4gIHByb3ZpZGVyczogW1Bvc3RpbmdTZXJ2aWNlLCBUcmFuc2ZlclNlcnZpY2UsIER5bmFtaWNBZGRTZXJ2aWNlLCBVc2VyU2VydmljZSwgUGF5bWVudFNlcnZpY2UsIE1vZGFsRGlhbG9nU2VydmljZSwgUGxhY2VzQXV0b2NvbXBsZXRlU2VydmljZSwgXHJcbiAgRGF0ZVBpcGUsIEdvb2dsZU1hcHNTZXJ2aWNlXSxcclxuICBib290c3RyYXA6IFtBcHBDb21wb25lbnRdLFxyXG4gIGVudHJ5Q29tcG9uZW50czogW1Bvc3RpbmdDb21wb25lbnQsIFBheW1lbnRNZXRob2RDb21wb25lbnQsIEFkZE1vZGFsQ29tcG9uZW50LCBMb2NhdGlvbkNvbXBvbmVudCwgQWRkUGF5bWVudENvbXBvbmVudCwgQWRkQ2FyZFBheW1lbnRDb21wb25lbnQsIFxyXG4gIFBheW1lbnRJbmZvQ29tcG9uZW50LCBDb25maXJtYXRpb25Db21wb25lbnQsIFNldHRpbmdzZm9ybUNvbXBvbmVudCwgUmVhdXRoQ29tcG9uZW50LCBGb3JnZXRGb3JtQ29tcG9uZW50XSxcclxuICBzY2hlbWFzOiBbTk9fRVJST1JTX1NDSEVNQV1cclxufSlcclxuLypcclxuUGFzcyB5b3VyIGFwcGxpY2F0aW9uIG1vZHVsZSB0byB0aGUgYm9vdHN0cmFwTW9kdWxlIGZ1bmN0aW9uIGxvY2F0ZWQgaW4gbWFpbi50cyB0byBzdGFydCB5b3VyIGFwcFxyXG4qL1xyXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLyogQWRkIG1vYmlsZSBzdHlsZXMgZm9yIHRoZSBjb21wb25lbnQgaGVyZS4gICovXFxyXFxuXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPEJ1dHRvbiB0ZXh0PVxcXCJhdXRvLWdlbmVyYXRlZCB3b3JrcyFcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiPjwvQnV0dG9uPlwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLWF1dG8tZ2VuZXJhdGVkJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vYXV0by1nZW5lcmF0ZWQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2F1dG8tZ2VuZXJhdGVkLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXV0b0dlbmVyYXRlZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuXHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi8qIEFkZCBtb2JpbGUgc3R5bGVzIGZvciB0aGUgY29tcG9uZW50IGhlcmUuICAqL1xcclxcbkxhYmVsIHtcXHJcXG5cXHR0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbn1cXHJcXG5cXHJcXG4ubmFtZS1sYWJlbCB7XFxyXFxuXFx0bWFyZ2luLXRvcDogMTY7XFxyXFxuXFx0bWFyZ2luLWxlZnQ6IDE4O1xcclxcblxcdGNvbG9yOiBibGFjaztcXHJcXG5cXHRmb250LXdlaWdodDogNzAwO1xcclxcblxcdGZvbnQtc2l6ZTogMTc7XFxyXFxufVxcclxcblxcclxcbi5pbmZvLWxhYmVsIHtcXHJcXG5cXHRtYXJnaW4tdG9wOiA0O1xcclxcblxcdG1hcmdpbi1sZWZ0OiAxODtcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiAxNjtcXHJcXG5cXHRjb2xvcjogIzY5Njk2OTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2ZpbGUtcGljdHVyZSB7XFxyXFxuXFx0aGVpZ2h0OiA2MDtcXHJcXG5cXHR3aWR0aDogNjA7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMTAwJTtcXHJcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xcclxcblxcdG1hcmdpbi1sZWZ0OiAxNjtcXHJcXG5cXHRtYXJnaW4tdG9wOiAxNDtcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiAxNDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lc3NhZ2Uge1xcclxcblxcdGJvcmRlci1ib3R0b20td2lkdGg6IDE7XFxyXFxuXFx0Ym9yZGVyLWNvbG9yOiAjZjFmMWYxO1xcclxcblxcdG1hcmdpbi10b3A6IDUwO1xcclxcblxcdG1hcmdpbi1ib3R0b206IDUwO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVmcmVzaCB7XFxyXFxuXFx0Y29sb3I6ICNhYzAwZTY7XFxyXFxufVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxQYWdlLmFjdGlvbkJhcj5cXHJcXG4gICAgPEFjdGlvbkJhciB0aXRsZT1cXFwiTWVzc2FnZXNcXFwiPlxcclxcbiAgICBcXHQ8TmF2aWdhdGlvbkJ1dHRvbiB0ZXh0PVxcXCJHbyBCYWNrXFxcIiBhbmRyb2lkLnN5c3RlbUljb249XFxcImljX21lbnVfYmFja1xcXCIgKHRhcCk9XFxcIm9uTmF2QnRuVGFwKClcXFwiPjwvTmF2aWdhdGlvbkJ1dHRvbj5cXHJcXG4gICAgPC9BY3Rpb25CYXI+XFxyXFxuPC9QYWdlLmFjdGlvbkJhcj5cXHJcXG5cXHJcXG48UHVsbFRvUmVmcmVzaCAocmVmcmVzaCk9XFxcInJlZnJlc2hMaXN0KCRldmVudClcXFwiIGNsYXNzPVxcXCJyZWZyZXNoXFxcIj5cXHJcXG5cXHQ8TGlzdFZpZXcgW2l0ZW1zXT1cXFwibWVzc2FnZXNcXFwiIChpdGVtVGFwKT1cXFwib25JdGVtVGFwKCRldmVudClcXFwiICNsaXN0VmlldyBpZD1cXFwibGlzdFZpZXdcXFwiPlxcclxcblxcdCAgICA8bmctdGVtcGxhdGUgbGV0LWl0ZW09XFxcIml0ZW1cXFwiIGxldC1pPVxcXCJpbmRleFxcXCIgbGV0LW9kZD1cXFwib2RkXFxcIiBsZXQtZXZlbj1cXFwiZXZlblxcXCI+XFxyXFxuXFx0ICAgICAgICA8U3RhY2tMYXlvdXQgW2NsYXNzLm9kZF09XFxcIm9kZFxcXCIgW2NsYXNzLmV2ZW5dPVxcXCJldmVuXFxcIiBjbGFzcz1cXFwibWVzc2FnZVxcXCIgb3JpZW50YXRpb249XFxcImhvcml6b250YWxcXFwiPlxcclxcblxcdCAgICAgICAgXFx0ICBcXHQ8SW1hZ2UgW3NyY109XFxcIml0ZW0ucGZwU291cmNlXFxcIiBjbGFzcz1cXFwicHJvZmlsZS1waWN0dXJlXFxcIiBzdHJldGNoPVxcXCJhc3BlY3RGaXRcXFwiPjwvSW1hZ2U+XFxyXFxuXFx0ICAgICAgICBcXHQgIFxcdDxTdGFja0xheW91dD5cXHJcXG5cXHRcXHQgICAgICAgICAgICAgIFxcdDxMYWJlbCB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgaWQ9XFxcInBvc3QtbmFtZVxcXCIgY2xhc3M9XFxcIm5hbWUtbGFiZWxcXFwiIFt0ZXh0XT1cXFwiaXRlbS5kaXNwbGF5TmFtZVxcXCI+PC9MYWJlbD5cXHJcXG5cXHRcXHQgICAgICAgICAgICAgIFxcdDxMYWJlbCB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgaWQ9XFxcInBvc3QtaW5mb1xcXCIgY2xhc3M9XFxcImluZm8tbGFiZWxcXFwiIFt0ZXh0XT1cXFwiaXRlbS5tZXNzYWdlXFxcIj48L0xhYmVsPlxcclxcblxcdFxcdCAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxyXFxuXFx0ICAgICAgICA8L1N0YWNrTGF5b3V0PlxcclxcblxcdCAgICA8L25nLXRlbXBsYXRlPlxcclxcblxcdDwvTGlzdFZpZXc+XFxyXFxuPC9QdWxsVG9SZWZyZXNoPlwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUcmFuc2ZlclNlcnZpY2UgfSBmcm9tICcuLi9kYXRhdHJhbnNmZXIuc2VydmljZSc7XHJcbmltcG9ydCAqIGFzIGZpcmViYXNlIGZyb20gJ25hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2UnO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgTG9naW5jaGVja1NlcnZpY2UgfSBmcm9tICcuLi9sb2dpbmNoZWNrLnNlcnZpY2UudG5zJztcclxuaW1wb3J0IHsgQ2hhdE1lc3NhZ2UgfSBmcm9tICcuLi9tb2RlbHMvY2hhdC1tZXNzYWdlLm1vZGVsJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZUFycmF5IH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUtYXJyYXknO1xyXG5pbXBvcnQgeyBMaXN0VmlldyB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvbGlzdC12aWV3JztcclxuXHJcbmNsYXNzIE1lc3NhZ2VJdGVtIHtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgY2hhdE1lc3NhZ2U6IENoYXRNZXNzYWdlLCBwdWJsaWMgbGFzdENoYXQ6IHN0cmluZywgcHVibGljIGNoYXRJZDogc3RyaW5nLCBwdWJsaWMgcGZwU291cmNlOiBzdHJpbmcsIFxyXG4gICAgcHVibGljIGRpc3BsYXlOYW1lOiBzdHJpbmcsIHB1YmxpYyBtZXNzYWdlOiBzdHJpbmcpIHt9XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLWNoYXQtbGlzdCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NoYXQtbGlzdC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY2hhdC1saXN0LmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2hhdExpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRyYW5zZmVyU2VydmljZTogVHJhbnNmZXJTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSBsb2dpbmNoZWNrU2VydmljZTogTG9naW5jaGVja1NlcnZpY2UsXHJcbiAgXHRwcml2YXRlIHZjUmVmOiBWaWV3Q29udGFpbmVyUmVmKSB7IH1cclxuXHJcbiAgbWVzc2FnZXMgPSBuZXcgT2JzZXJ2YWJsZUFycmF5PE1lc3NhZ2VJdGVtPigpO1xyXG4gIHJlZnJlc2hNZXNzYWdlcyA9IG5ldyBPYnNlcnZhYmxlQXJyYXk8TWVzc2FnZUl0ZW0+KCk7XHJcbiAgdXNlcklkOiBzdHJpbmc7XHJcbiAgY2hhdElkczogW3N0cmluZ107XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIFx0dGhpcy51c2VySWQgPSB0aGlzLmxvZ2luY2hlY2tTZXJ2aWNlLmdldFVzZXIoKTtcclxuICAgIHRoaXMubG9hZE1lc3NhZ2VzKCk7XHJcbiAgfVxyXG5cclxuICBsb2FkTWVzc2FnZXMoYXJncz1udWxsKSB7XHJcbiAgXHRmaXJlYmFzZS5maXJlc3RvcmUuY29sbGVjdGlvbigndXNlcnMnKS5kb2ModGhpcy51c2VySWQpLmdldCgpLnRoZW4oKGRvYykgPT4ge1xyXG4gIFx0XHR0aGlzLmNoYXRJZHMgPSBkb2MuZGF0YSgpLmNoYXRzO1xyXG4gICAgfSkudGhlbihhc3luYyAocmVzKSA9PiB7XHJcbiAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmNoYXRJZHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCBjaGF0UHJvbWlzZSA9IGF3YWl0IGZpcmViYXNlLmZpcmVzdG9yZS5jb2xsZWN0aW9uKCdjaGF0cycpLmRvYyh0aGlzLmNoYXRJZHNbaV0pLmdldCgpLnRoZW4oYXN5bmMgKGRvYykgPT4ge1xyXG4gICAgICAgICAgbGV0IGRhdGEgPSBkb2MuZGF0YSgpO1xyXG4gICAgICAgICAgbGV0IGRvY0lkID0gZG9jLmlkO1xyXG4gICAgICAgICAgdmFyIGNoYXROYW1lID0gJ1lvdSwgJztcclxuICAgICAgICAgIHZhciBub25Vc2VySW5kZXggPSAwO1xyXG4gICAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGRhdGEudXNlcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYoZGF0YS51c2Vyc1tpXS51aWQgIT09dGhpcy51c2VySWQpIHtcclxuICAgICAgICAgICAgICBub25Vc2VySW5kZXggPSBpO1xyXG4gICAgICAgICAgICAgIGlmKGkgPT09IGRhdGEudXNlcnMubGVuZ3RoIC0gMSlcclxuICAgICAgICAgICAgICAgIGNoYXROYW1lICs9ICdhbmQgJyArIGRhdGEudXNlcnNbaV0uZGlzcGxheU5hbWU7XHJcbiAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgY2hhdE5hbWUgKz0gZGF0YS51c2Vyc1tpXS5kaXNwbGF5TmFtZSArICcsICc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmKGRhdGEuY2hhdHNbMF0pIHtcclxuICAgICAgICAgICAgbGV0IGxhc3RNc2cgPSBkYXRhLmNoYXRzW2RhdGEuY2hhdHMubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgICAgIGNvbnN0IGFkZFByb21pc2UgPSBhd2FpdCB0aGlzLmFkZE1lc3NhZ2UobGFzdE1zZywgZGF0YSwgZG9jSWQsIGNoYXROYW1lLCBub25Vc2VySW5kZXgpOyBcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC8vIGNvbnN0IHVuc3Vic2NyaWJlID0gZmlyZWJhc2UuZmlyZXN0b3JlLmNvbGxlY3Rpb24oJ2NoYXRzJykuZG9jKHRoaXMuY2hhdElkc1tpXSkub25TbmFwc2hvdCh7aW5jbHVkZU1ldGFkYXRhQ2hhbmdlczogdHJ1ZX0sIGRvYyA9PiB7XHJcbiAgICAgICAgLy8gICB0aGlzLnJlZnJlc2hMaXN0KG51bGwpO1xyXG4gICAgICAgIC8vIH0pXHJcbiAgICAgIH1cclxuICAgICAgaWYoYXJncyAhPSBudWxsKVxyXG4gICAgICB7XHJcbiAgICAgICAgdmFyIHB1bGxSZWZyZXNoID0gYXJncy5vYmplY3Q7XHJcbiAgICAgICAgcHVsbFJlZnJlc2gucmVmcmVzaGluZyA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMucmVmcmVzaE1lc3NhZ2VzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcclxuICAgICAgICBpZihhLmxhc3RDaGF0ID4gYi5sYXN0Q2hhdClcclxuICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICBlbHNlIGlmKGIubGFzdENoYXQgPCBhLmxhc3RDaGF0KVxyXG4gICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgIH0pXHJcbiAgICAgIHRoaXMubWVzc2FnZXMuc3BsaWNlKDApO1xyXG4gICAgICBmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5yZWZyZXNoTWVzc2FnZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB0aGlzLm1lc3NhZ2VzLnB1c2godGhpcy5yZWZyZXNoTWVzc2FnZXMuZ2V0SXRlbShpKSk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5yZWZyZXNoTWVzc2FnZXMuc3BsaWNlKDApO1xyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGFzeW5jIGFkZE1lc3NhZ2UobGFzdE1zZywgZGF0YSwgZG9jSWQsIGNoYXROYW1lLCBub25Vc2VySW5kZXgpIHtcclxuICAgIGlmKGxhc3RNc2cudXNlcklkICE9PSB0aGlzLnVzZXJJZCkge1xyXG4gICAgICBjb25zdCB1c2VyUHJvbWlzZSA9IGF3YWl0IGZpcmViYXNlLmZpcmVzdG9yZS5jb2xsZWN0aW9uKCd1c2VycycpLmRvYyhsYXN0TXNnLnVzZXJJZCkuZ2V0KCkudGhlbigoZG9jKSA9PiB7XHJcbiAgICAgICAgbGV0IHByb2ZpbGVTb3VyY2UgPSBkb2MuZGF0YSgpLnByb2ZpbGVfc291cmNlO1xyXG4gICAgICAgIGlmKGRhdGEudXNlcnMubGVuZ3RoID09PSAyKVxyXG4gICAgICAgICAgdGhpcy5yZWZyZXNoTWVzc2FnZXMucHVzaChuZXcgTWVzc2FnZUl0ZW0obGFzdE1zZywgZGF0YS5sYXN0Q2hhdCwgZG9jSWQsIHByb2ZpbGVTb3VyY2UsIGxhc3RNc2cuZGlzcGxheU5hbWUsIGRvYy5kYXRhKCkuZmlyc3RfbmFtZSArICc6ICcgKyBsYXN0TXNnLm1lc3NhZ2UpKTtcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIHRoaXMucmVmcmVzaE1lc3NhZ2VzLnB1c2gobmV3IE1lc3NhZ2VJdGVtKGxhc3RNc2csIGRhdGEubGFzdENoYXQsIGRvY0lkLCBwcm9maWxlU291cmNlLCBjaGF0TmFtZSwgZG9jLmRhdGEoKS5maXJzdF9uYW1lICsgJzogJyArIGxhc3RNc2cubWVzc2FnZSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfSlcclxuICAgICAgcmV0dXJuIHRoaXMucmVmcmVzaE1lc3NhZ2VzO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIGNvbnN0IHVzZXJQcm9taXNlID0gYXdhaXQgZmlyZWJhc2UuZmlyZXN0b3JlLmNvbGxlY3Rpb24oJ3VzZXJzJykuZG9jKGRhdGEudXNlcnNbbm9uVXNlckluZGV4XS51aWQpLmdldCgpLnRoZW4oKGRvYykgPT4ge1xyXG4gICAgICAgIGxldCBwcm9maWxlU291cmNlID0gZG9jLmRhdGEoKS5wcm9maWxlX3NvdXJjZTtcclxuICAgICAgICBpZihkYXRhLnVzZXJzLmxlbmd0aCA9PT0gMilcclxuICAgICAgICAgIHRoaXMucmVmcmVzaE1lc3NhZ2VzLnB1c2gobmV3IE1lc3NhZ2VJdGVtKGxhc3RNc2csIGRhdGEubGFzdENoYXQsIGRvY0lkLCBwcm9maWxlU291cmNlLCBcclxuICAgICAgICAgICAgZG9jLmRhdGEoKS5maXJzdF9uYW1lICsgJyAnICsgZG9jLmRhdGEoKS5sYXN0X25hbWUsICdZb3U6ICcgKyBsYXN0TXNnLm1lc3NhZ2UpKTtcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIHRoaXMucmVmcmVzaE1lc3NhZ2VzLnB1c2gobmV3IE1lc3NhZ2VJdGVtKGxhc3RNc2csIGRhdGEubGFzdENoYXQsIGRvY0lkLCBwcm9maWxlU291cmNlLCBcclxuICAgICAgICAgICAgY2hhdE5hbWUsICdZb3U6ICcgKyBsYXN0TXNnLm1lc3NhZ2UpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH0pXHJcbiAgICAgIHJldHVybiB0aGlzLnJlZnJlc2hNZXNzYWdlcztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlZnJlc2hMaXN0KGFyZ3MpIHtcclxuICAgIHRoaXMubG9hZE1lc3NhZ2VzKGFyZ3MpO1xyXG4gIH1cclxuXHJcbiAgb25JdGVtVGFwKGFyZ3MpIHtcclxuICBcdGxldCBjaGF0SWQgPSB0aGlzLm1lc3NhZ2VzLmdldEl0ZW0oYXJncy5pbmRleCkuY2hhdElkO1xyXG4gIFx0dGhpcy50cmFuc2ZlclNlcnZpY2Uuc2V0RGF0YShjaGF0SWQpO1xyXG4gIFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUoWydjaGF0J10pXHJcbiAgfVxyXG5cclxuICBvbk5hdkJ0blRhcCgpIHtcclxuICAgIGlmKHRoaXMucm91dGVyLmNhbkdvQmFjaylcclxuICAgICAgdGhpcy5yb3V0ZXIuYmFjaygpO1xyXG4gICAgZWxzZVxyXG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ25hdmlnYXRpb24nXSwge2NsZWFySGlzdG9yeTogdHJ1ZX0pXHJcbiAgfVxyXG5cclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLyogQWRkIG1vYmlsZSBzdHlsZXMgZm9yIHRoZSBjb21wb25lbnQgaGVyZS4gICovXFxyXFxuQnV0dG9uIHtcXHJcXG4gICAgcGFkZGluZzogNTtcXHJcXG4gICAgbWFyZ2luOiA1O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkb2RnZXJibHVlO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGhlaWdodDogNDA7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDU7XFxyXFxufVxcclxcblxcclxcbi5jaGF0LWJ1dHRvbiB7XFxyXFxuXFx0cGFkZGluZy1sZWZ0OiA1O1xcclxcblxcdHBhZGRpbmctcmlnaHQ6IDU7XFxyXFxuXFx0bWFyZ2luOiA1O1xcclxcblxcdGhlaWdodDogMjA7XFxyXFxuXFx0d2lkdGg6IDIwO1xcclxcbn1cXHJcXG5cXHJcXG4uaW1nLWJ1dHRvbiB7XFxyXFxuXFx0bWFyZ2luOiA1O1xcclxcblxcdG1hcmdpbi1sZWZ0OiAzO1xcclxcblxcdG1hcmdpbi1yaWdodDogNztcXHJcXG5cXHRoZWlnaHQ6IDIwO1xcclxcblxcdHdpZHRoOiAyMDtcXHJcXG59XFxyXFxuXFxyXFxuLmNoYXQtdGV4dC1maWVsZCB7XFxyXFxuICAgIHBhZGRpbmc6IDU7IFxcclxcbiAgICAvKmJhY2tncm91bmQtY29sb3I6IHdoaXRlOyAqL1xcclxcbiAgICAvKmJvcmRlci1yYWRpdXM6IDQ7Ki9cXHJcXG4gICAgLypib3R0b20tYm9yZGVyLWNvbG9yOiAjNjk2OTY5OyovXFxyXFxufVxcclxcblxcclxcbi5hdXRob3ItaW1nIHtcXHJcXG4gICAgbWFyZ2luOiAwIDUgNSA1O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xcclxcbiAgICB3aWR0aDogNDA7XFxyXFxuICAgIGhlaWdodDogNDA7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDIwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxyXFxufVxcclxcblxcclxcbi5pbWcge1xcclxcblxcdG1hcmdpbjogNTtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAxMDtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxyXFxufVxcclxcblxcclxcbi50aGVpcnNJbWcge1xcclxcblxcdG1hcmdpbjogNTtcXHJcXG5cXHRtYXJnaW4tbGVmdDogNTI7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMTA7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcclxcbn1cXHJcXG5cXHJcXG4ubWluZSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhYzAwZTY7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgcGFkZGluZzogODtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAxNDtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMTQ7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMTA7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDE1O1xcclxcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNTtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTY7XFxyXFxuICAgIG1heC13aWR0aDogNjAlO1xcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgICAvKm1hcmdpbi1ib3R0b206IDEyOyovXFxyXFxufVxcclxcblxcclxcbi5taW5lQ29udGludWF0aW9uIHtcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiAwO1xcclxcblxcdGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxNTtcXHJcXG59XFxyXFxuXFxyXFxuLm1pbmVDb250aW51YXRpb25HcmlkIHtcXHJcXG5cXHRmb250LXNpemU6IDE0O1xcclxcbiAgICBwYWRkaW5nOiA1O1xcclxcblxcdHBhZGRpbmctdG9wOiAwO1xcclxcblxcdHBhZGRpbmctYm90dG9tOiAxO1xcclxcbn1cXHJcXG5cXHJcXG4ubWluZVRpbWUge1xcclxcblxcdG1hcmdpbi1yaWdodDogMTA7XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTogNTtcXHJcXG59XFxyXFxuXFxyXFxuLnRoZWlyc1RpbWUge1xcclxcblxcdG1hcmdpbi1sZWZ0OiA1MjtcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiA1O1xcclxcbn1cXHJcXG5cXHJcXG4udGltZSB7XFxyXFxuXFx0dmlzaWJpbGl0eTogY29sbGFwc2U7XFxyXFxuXFx0ZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRoZWlycyB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XFxyXFxuICAgIGNvbG9yOiAjMzMzO1xcclxcbiAgICBwYWRkaW5nOiA3O1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDE0O1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTU7XFxyXFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDU7XFxyXFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxNTtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiA0MDtcXHJcXG4gICAgZm9udC1zaXplOiAxNjtcXHJcXG4gICAgbWF4LXdpZHRoOiA2MCU7XFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICAgIC8qbWFyZ2luLWJvdHRvbTogMTI7Ki9cXHJcXG59XFxyXFxuXFxyXFxuLnRoZWlyc0NvbnRpbnVhdGlvbiB7XFxyXFxuXFx0bWFyZ2luLWxlZnQ6IDUyO1xcclxcblxcdG1hcmdpbi1ib3R0b206IDA7XFxyXFxuXFx0Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTU7XFxyXFxufVxcclxcblxcclxcbi50aGVpcnNDb250aW51YXRpb25HcmlkIHtcXHJcXG5cXHRmb250LXNpemU6IDE0O1xcclxcbiAgICBwYWRkaW5nOiA1O1xcclxcblxcdHBhZGRpbmctdG9wOiAwO1xcclxcblxcdHBhZGRpbmctYm90dG9tOiAxO1xcclxcbn1cXHJcXG5cXHJcXG4uZ3JpZCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTQ7XFxyXFxuICAgIHBhZGRpbmc6IDU7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAwO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogODtcXHJcXG59XFxyXFxuXFxyXFxuLmNoYXQtYm94LWxheW91dCB7XFxyXFxuXFx0Ym9yZGVyLWNvbG9yOiAjZjFmMWYxO1xcclxcblxcdGJvcmRlci10b3Atd2lkdGg6IDE7XFxyXFxufVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxQYWdlLmFjdGlvbkJhcj5cXHJcXG4gICAgPEFjdGlvbkJhciB0aXRsZT1cXFwie3sgY2hhdE5hbWUgfX1cXFwiIGFuZHJvaWQ6aG9yaXpvbnRhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIiBpb3M6aG9yaXpvbnRhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIj5cXHJcXG4gICAgXFx0PE5hdmlnYXRpb25CdXR0b24gdGV4dD1cXFwiR28gQmFja1xcXCIgYW5kcm9pZC5zeXN0ZW1JY29uPVxcXCJpY19tZW51X2JhY2tcXFwiICh0YXApPVxcXCJvbk5hdkJ0blRhcCgpXFxcIj48L05hdmlnYXRpb25CdXR0b24+XFxyXFxuXFx0ICAgIDxBY3Rpb25JdGVtICh0YXApPVxcXCJvbkxlYXZlKClcXFwiXFxyXFxuXFx0ICAgICAgaW9zLnN5c3RlbUljb249XFxcIjlcXFwiIGlvcy5wb3NpdGlvbj1cXFwicmlnaHRcXFwiXFxyXFxuXFx0ICAgICAgdGV4dD1cXFwiTGVhdmUgY2hhdFxcXCIgYW5kcm9pZC5wb3NpdGlvbj1cXFwicG9wdXBcXFwiPjwvQWN0aW9uSXRlbT5cXHJcXG4gICAgPC9BY3Rpb25CYXI+XFxyXFxuPC9QYWdlLmFjdGlvbkJhcj5cXHJcXG5cXHJcXG48R3JpZExheW91dCByb3dzPVxcXCIqLCBhdXRvXFxcIj5cXHJcXG4gICAgPExpc3RWaWV3IG1hcmdpbi1ib3R0b209XFxcIjUwXFxcIiBwYWRkaW5nPVxcXCI1XFxcIiAjbWVzc2FnZUxpc3QgW2l0ZW1zXT1cXFwibWVzc2FnZXNcXFwiIHNlcGFyYXRvckNvbG9yPVxcXCJ0cmFuc3BhcmVudFxcXCIgKHNldHVwSXRlbVZpZXcpPVxcXCJzZXR1cEl0ZW1WaWV3KCRldmVudClcXFwiIHJvdz1cXFwiMFxcXCIgKGxvYWRNb3JlSXRlbXMpPVxcXCJsb2FkTW9yZURhdGEoKVxcXCI+XFxyXFxuICAgICAgICA8bmctdGVtcGxhdGUgbGV0LWl0ZW09XFxcIml0ZW1cXFwiIGxldC1pPVxcXCJpbmRleFxcXCIgbGV0LW1pbmU9XFxcIm1pbmVcXFwiIGxldC10aGVpcnM9XFxcInRoZWlyc1xcXCIgbGV0LW1pbmVDb250aW51YXRpb249XFxcIm1pbmVDb250aW51YXRpb25cXFwiIGxldC10aGVpcnNDb250aW51YXRpb249XFxcInRoZWlyc0NvbnRpbnVhdGlvblxcXCIgbGV0LW1pbmVDb250aW51YXRpb25HcmlkPVxcXCJtaW5lQ29udGludWF0aW9uR3JpZFxcXCIgbGV0LXRoZWlyc0NvbnRpbnVhdGlvbkdyaWQ9XFxcInRoZWlyc0NvbnRpbnVhdGlvbkdyaWRcXFwiIGxldC1ncmlkPVxcXCJncmlkXFxcIiBsZXQtbWluZVRpbWU9XFxcIm1pbmVUaW1lXFxcIiBsZXQtdGhlaXJzVGltZT1cXFwidGhlaXJzVGltZVxcXCIgbGV0LXRpbWU9XFxcInRpbWVcXFwiIGxldC10aGVpcnNJbWc9XFxcInRoZWlyc0ltZ1xcXCIgbGV0LWltZz1cXFwiaW1nXFxcIj5cXHJcXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgd2lkdGg9XFxcIjgwJVxcXCIgW2NsYXNzLm1pbmVDb250aW51YXRpb25HcmlkXT1cXFwibWluZUNvbnRpbnVhdGlvbkdyaWRcXFwiIFtjbGFzcy50aGVpcnNDb250aW51YXRpb25HcmlkXT1cXFwidGhlaXJzQ29udGludWF0aW9uR3JpZFxcXCIgW2NsYXNzLmdyaWRdPVxcXCJncmlkXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVxcXCJob3Jpem9udGFsXFxcIiBbaG9yaXpvbnRhbEFsaWdubWVudF09XFxcImFsaWduKGl0ZW0pXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSBbdmlzaWJpbGl0eV09XFxcIml0ZW0udmlzaWJpbGl0eVxcXCIgY2xhc3M9XFxcImF1dGhvci1pbWdcXFwiIHN0cmV0Y2g9XFxcImFzcGVjdEZpbGxcXFwiIGhlaWdodD1cXFwiNDBcXFwiIHdpZHRoPVxcXCI0MFxcXCIgdmVydGljYWxBbGlnbm1lbnQ9XFxcImJvdHRvbVxcXCIgW3NyY109XFxcIml0ZW0uY2hhdE1lc3NhZ2UucGZwU291cmNlXFxcIiBjb2w9XFxcIjFcXFwiPjwvSW1hZ2U+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgW3Zpc2liaWxpdHldPVxcXCJ0ZXh0VmlzaWJpbGl0eShpdGVtKVxcXCIgW3RleHRdPSdpdGVtLmNoYXRNZXNzYWdlLm1lc3NhZ2UnIFtjbGFzcy5taW5lXT1cXFwibWluZVxcXCIgW2NsYXNzLnRoZWlyc109XFxcInRoZWlyc1xcXCIgW2NsYXNzLm1pbmVDb250aW51YXRpb25dPVxcXCJtaW5lQ29udGludWF0aW9uXFxcIiBbY2xhc3MudGhlaXJzQ29udGludWF0aW9uXT1cXFwidGhlaXJzQ29udGludWF0aW9uXFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgdmVydGljYWxBbGlnbm1lbnQ9XFxcInRvcFxcXCI+PC9MYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSBbdmlzaWJpbGl0eV09XFxcImltZ1Zpc2liaWxpdHkoaXRlbSlcXFwiIFtjbGFzcy50aGVpcnNJbWddPVxcXCJ0aGVpcnNJbWdcXFwiIFtjbGFzcy5pbWddPVxcXCJpbWdcXFwiIHN0cmV0Y2g9XFxcIm5vbmVcXFwiIG1pbldpZHRoPVxcXCIzNjBcXFwiIG1pbkhlaWdodD1cXFwiMjAwXFxcIiBkZWNvZGVXaWR0aD1cXFwiMzYwXFxcIiBkZWNvZGVIZWlnaHQ9XFxcIjIwMFxcXCIgdmVydGljYWxBbGlnbm1lbnQ9XFxcImJvdHRvbVxcXCIgW3NyY109XFxcIml0ZW0uY2hhdE1lc3NhZ2UuaW1nU291cmNlXFxcIiBjb2w9XFxcIjFcXFwiICh0YXApPVxcXCJ0b1ZpZXdJbWFnZShpdGVtLmNoYXRNZXNzYWdlLmltZ1NvdXJjZSlcXFwiPjwvSW1hZ2U+XFxyXFxuICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxyXFxuICAgICAgICAgICAgICAgIDxMYWJlbCBbdGV4dF09J2l0ZW0uZm9ybWF0dGVkVGltZScgW2hvcml6b250YWxBbGlnbm1lbnRdPVxcXCJhbGlnbihpdGVtKVxcXCIgW2NsYXNzLm1pbmVUaW1lXT1cXFwibWluZVRpbWVcXFwiIFtjbGFzcy50aGVpcnNUaW1lXT1cXFwidGhlaXJzVGltZVxcXCIgW2NsYXNzLnRpbWVdPVxcXCJ0aW1lXFxcIj48L0xhYmVsPlxcclxcbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxyXFxuICAgICAgICA8L25nLXRlbXBsYXRlPlxcclxcbiAgICA8L0xpc3RWaWV3PlxcclxcblxcclxcbiAgICA8U3RhY2tMYXlvdXQgI2NoYXRib3ggcm93PVxcXCIxXFxcIiBjbGFzcz1cXFwiY2hhdC1ib3gtbGF5b3V0XFxcIj5cXHJcXG5cXHQgICAgICAgIDxHcmlkTGF5b3V0IGNvbHVtbnM9XFxcImF1dG8sKixhdXRvXFxcIiBzdHlsZT1cXFwicGFkZGluZzogMTBcXFwiPlxcclxcblxcdCAgICAgICAgXFx0PEltYWdlIGNsYXNzPVxcXCJpbWctYnV0dG9uXFxcIiByb3c9XFxcIjBcXFwiIGNvbD1cXFwiMFxcXCIgc3JjPVxcXCJ+L2ltZy9pbWdfaWNvbl8yLnBuZ1xcXCIgKHRhcCk9b3BlbkltYWdlcygpPjwvSW1hZ2U+XFxyXFxuXFx0ICAgICAgICAgICAgPFRleHRWaWV3ICN0ZXh0ZmllbGQgaGVpZ2h0PVxcXCJhdXRvXFxcIiBtYXhIZWlnaHQ9XFxcIjEwMFxcXCIgaGludD1cXFwiU3RhcnQgYSBtZXNzYWdlXFxcIiBjbGFzcz1cXFwiY2hhdC10ZXh0LWZpZWxkXFxcIiByb3c9XFxcIjBcXFwiIGNvbD1cXFwiMVxcXCIgYXV0b2NvcnJlY3Q9XFxcInRydWVcXFwiIFsobmdNb2RlbCldPVxcXCJtZXNzYWdlXFxcIiAodGFwKT1cXFwib25UZXh0VGFwKClcXFwiPjwvVGV4dFZpZXc+XFxyXFxuXFx0ICAgICAgICAgICAgPEltYWdlICNidG4gY2xhc3M9XFxcImNoYXQtYnV0dG9uXFxcIiByb3c9XFxcIjBcXFwiIGNvbD1cXFwiMlxcXCIgc3JjPVxcXCJ+L2ltZy9zZW5kX21lc3NhZ2VfaWNvbl8yLnBuZ1xcXCIgKHRhcCk9c2VuZE1lc3NhZ2UoKT48L0ltYWdlPlxcclxcblxcdCAgICAgICAgPC9HcmlkTGF5b3V0PlxcclxcblxcclxcbiAgICA8L1N0YWNrTGF5b3V0PlxcclxcblxcclxcbjwvR3JpZExheW91dD5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVHJhbnNmZXJTZXJ2aWNlIH0gZnJvbSAnLi4vZGF0YXRyYW5zZmVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgKiBhcyBmaXJlYmFzZSBmcm9tICduYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlJztcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCAqIGFzIGltYWdlcGlja2VyIGZyb20gXCJuYXRpdmVzY3JpcHQtaW1hZ2VwaWNrZXJcIjtcclxuaW1wb3J0ICogYXMgaW1hZ2VTb3VyY2UgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvaW1hZ2Utc291cmNlXCI7XHJcbmltcG9ydCAqIGFzIGZzIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2ZpbGUtc3lzdGVtXCI7XHJcbmltcG9ydCB7IExvZ2luY2hlY2tTZXJ2aWNlIH0gZnJvbSAnLi4vbG9naW5jaGVjay5zZXJ2aWNlLnRucyc7XHJcbmltcG9ydCB7IENoYXRNZXNzYWdlIH0gZnJvbSAnLi4vbW9kZWxzL2NoYXQtbWVzc2FnZS5tb2RlbCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGVBcnJheSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlLWFycmF5JztcclxuaW1wb3J0IHsgTGlzdFZpZXcgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2xpc3Qtdmlldyc7XHJcbmltcG9ydCB7IGlzQW5kcm9pZCB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm0nO1xyXG5pbXBvcnQgKiBhcyBhcHAgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIjtcclxuZGVjbGFyZSB2YXIgYW5kcm9pZDogYW55O1xyXG5cclxuXHJcbmNsYXNzIENoYXRJdGVtIHtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgY2hhdE1lc3NhZ2U6IENoYXRNZXNzYWdlLCBwdWJsaWMgdmlzaWJpbGl0eTogc3RyaW5nLCBwdWJsaWMgZm9ybWF0dGVkVGltZTogc3RyaW5nLCBwdWJsaWMgbWluZUNvbnRpbnVhdGlvbjogYm9vbGVhbiwgcHVibGljIHRoZWlyc0NvbnRpbnVhdGlvbjogYm9vbGVhbikge31cclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtY2hhdCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NoYXQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2NoYXQuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDaGF0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0cmFuc2ZlclNlcnZpY2U6IFRyYW5zZmVyU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMsIHByaXZhdGUgbG9naW5jaGVja1NlcnZpY2U6IExvZ2luY2hlY2tTZXJ2aWNlLFxyXG4gIFx0cHJpdmF0ZSB2Y1JlZjogVmlld0NvbnRhaW5lclJlZikgeyB9XHJcblxyXG4gIEBWaWV3Q2hpbGQoXCJtZXNzYWdlTGlzdFwiLCB7IHN0YXRpYzogdHJ1ZSB9KSBsdjogRWxlbWVudFJlZjtcclxuICBjaGF0SWQ6IHN0cmluZztcclxuICBtZXNzYWdlcyA9IG5ldyBPYnNlcnZhYmxlQXJyYXk8Q2hhdEl0ZW0+KCk7XHJcbiAgYWxsTWVzc2FnZXMgPSBuZXcgT2JzZXJ2YWJsZUFycmF5PENoYXRJdGVtPigpO1xyXG4gIG1lc3NhZ2U6IHN0cmluZyA9ICcnO1xyXG4gIHVzZXJJZDogc3RyaW5nO1xyXG4gIGNoYXROYW1lOiBzdHJpbmc7XHJcbiAgZGlzcGxheU5hbWU6IHN0cmluZztcclxuICBwZnBTb3VyY2U6IHN0cmluZztcclxuICBsaXN0OiBMaXN0VmlldztcclxuICBsYXN0SW5kZXg7XHJcbiAgY3VycmVudFVzZXI6IGFueTtcclxuICBudW1TaG93biA9IDIwO1xyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICBcdGlmKGlzQW5kcm9pZCkge1xyXG4gIFx0XHR2YXIgd2luZG93ID0gYXBwLmFuZHJvaWQuc3RhcnRBY3Rpdml0eS5nZXRXaW5kb3coKTtcclxuICAgICAgICB3aW5kb3cuc2V0U29mdElucHV0TW9kZShhbmRyb2lkLnZpZXcuV2luZG93TWFuYWdlci5MYXlvdXRQYXJhbXMuU09GVF9JTlBVVF9BREpVU1RfUkVTSVpFKTtcclxuICBcdH1cclxuICBcdHRoaXMubGlzdCA9IHRoaXMubHYubmF0aXZlRWxlbWVudDtcclxuXHJcbiAgXHR0aGlzLmNoYXRJZCA9IHRoaXMudHJhbnNmZXJTZXJ2aWNlLmdldERhdGEoKTtcclxuICBcdHRoaXMudXNlcklkID0gdGhpcy5sb2dpbmNoZWNrU2VydmljZS5nZXRVc2VyKCk7XHJcbiAgXHRmaXJlYmFzZS5nZXRDdXJyZW50VXNlcigpLnRoZW4oKHVzZXIpID0+IHtcclxuICBcdFx0dGhpcy5kaXNwbGF5TmFtZSA9IHVzZXIuZGlzcGxheU5hbWU7XHJcbiAgXHRcdHRoaXMucGZwU291cmNlID0gdXNlci5waG90b1VSTDtcclxuICBcdH0pXHJcbiAgXHR0aGlzLnJldHJpZXZlQ2hhdHMoKTtcclxuICBcdHRoaXMuY2hhdE5hbWUgPSBcIkpvaG4gRG9lXCJcclxuICBcdC8vIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAvLyAgICB0aGlzLmxpc3Quc2Nyb2xsVG9JbmRleCh0aGlzLm1lc3NhZ2VzLmxlbmd0aCAtIDEpO1xyXG4gICAvLyAgfSwgMTAwMClcclxuICB9XHJcblxyXG4gIGFzeW5jIHNlbmRNZXNzYWdlKGltZ1NyYyA9IG51bGwpIHtcclxuICAgIGlmKHRoaXMubWVzc2FnZS5yZXBsYWNlKC9cXHMrL2csICcnKS5sZW5ndGggPT09IDAgJiYgIWltZ1NyYykge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgXHR2YXIgdG9kYXkgPSBuZXcgRGF0ZSgpO1xyXG4gIFx0dmFyIGRhdGUgPSB0b2RheS5nZXRGdWxsWWVhcigpKycvJysodG9kYXkuZ2V0TW9udGgoKSsxKSsnLycrdG9kYXkuZ2V0RGF0ZSgpO1xyXG4gIFx0dmFyIHRpbWUgPSB0b2RheS5nZXRIb3VycygpICsgXCI6XCIgKyB0b2RheS5nZXRVVENNaW51dGVzKCkgKyBcIjpcIiArIHRvZGF5LmdldFNlY29uZHMoKTtcclxuICAgIHZhciBjaGF0OiBDaGF0TWVzc2FnZTtcclxuICAgIGlmKGltZ1NyYykge1xyXG4gICAgXHRjaGF0ID0ge1xyXG4gICAgXHRcdHVzZXJJZDogdGhpcy51c2VySWQsXHJcbiAgICBcdFx0ZGlzcGxheU5hbWU6IHRoaXMuZGlzcGxheU5hbWUsXHJcbiAgICBcdFx0bWVzc2FnZTogXCJcIixcclxuICAgIFx0XHRwZnBTb3VyY2U6IHRoaXMucGZwU291cmNlLFxyXG4gICAgXHRcdGltZ1NvdXJjZTogaW1nU3JjLFxyXG4gICAgXHRcdHRpbWU6IHRpbWUsXHJcbiAgICBcdFx0ZGF0ZTogZGF0ZVxyXG4gICAgXHR9XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgY2hhdCA9IHtcclxuICAgICAgICB1c2VySWQ6IHRoaXMudXNlcklkLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiB0aGlzLmRpc3BsYXlOYW1lLFxyXG4gICAgICAgIG1lc3NhZ2U6IHRoaXMubWVzc2FnZSxcclxuICAgICAgICBwZnBTb3VyY2U6IHRoaXMucGZwU291cmNlLFxyXG4gICAgICAgIGltZ1NvdXJjZTogXCJcIixcclxuICAgICAgICB0aW1lOiB0aW1lLFxyXG4gICAgICAgIGRhdGU6IGRhdGVcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFx0Y29uc3QgbWVzc2FnZURvY3VtZW50ID0gZmlyZWJhc2UuZmlyZXN0b3JlLmNvbGxlY3Rpb24oJ2NoYXRzJykuZG9jKHRoaXMuY2hhdElkKTtcclxuICBcdGNvbnN0IG1lc3NhZ2VQcm9taXNlID0gYXdhaXQgbWVzc2FnZURvY3VtZW50LmdldCgpLnRoZW4oKGRvYykgPT4ge1xyXG4gIFx0XHR2YXIgdXBkYXRlZENoYXRzIDogW0NoYXRNZXNzYWdlXSA9IGRvYy5kYXRhKCkuY2hhdHM7XHJcbiAgXHRcdHVwZGF0ZWRDaGF0cy5wdXNoKGNoYXQpO1xyXG4gIFx0XHRtZXNzYWdlRG9jdW1lbnQudXBkYXRlKHtcclxuICBcdFx0XHRjaGF0czogdXBkYXRlZENoYXRzLFxyXG4gIFx0XHRcdGxhc3RDaGF0OiBkYXRlICsgJyAnICsgdGltZVxyXG4gIFx0XHR9KVxyXG4gIFx0fSlcclxuICBcdHRoaXMubWVzc2FnZSA9ICcnO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgcmV0cmlldmVDaGF0cygpIHtcclxuICBcdGNvbnN0IG1lc3NhZ2VEb2N1bWVudCA9IGZpcmViYXNlLmZpcmVzdG9yZS5jb2xsZWN0aW9uKCdjaGF0cycpLmRvYyh0aGlzLmNoYXRJZCk7XHJcbiAgXHRjb25zdCBkb2NQcm9taXNlID0gYXdhaXQgbWVzc2FnZURvY3VtZW50LmdldCgpLnRoZW4oKGRvYykgPT4ge1xyXG4gIFx0XHRsZXQgZGF0YSA9IGRvYy5kYXRhKCk7XHJcbiAgXHRcdHRoaXMubGFzdEluZGV4ID0gZGF0YS5jaGF0cy5sZW5ndGg7XHJcbiAgICAgIHRoaXMubWVzc2FnZXMuc3BsaWNlKDApO1xyXG4gICAgICB0aGlzLmFsbE1lc3NhZ2VzLnNwbGljZSgwKTtcclxuICBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRhdGEuY2hhdHMubGVuZ3RoOyBpKyspIHtcclxuICBcdFx0XHRpZihkYXRhLmNoYXRzW2ldLnVzZXJJZCA9PT0gdGhpcy51c2VySWQpIHtcclxuICAgICAgICAgIHRoaXMudXBkYXRlQ29udGludWF0aW9ucyhkYXRhLCBpLCB0cnVlLCBcImNvbGxhcHNlXCIpO1xyXG4gICAgICAgIH1cclxuICBcdFx0XHRlbHNlIHtcclxuICAgICAgICAgIHRoaXMudXBkYXRlQ29udGludWF0aW9ucyhkYXRhLCBpLCBmYWxzZSwgXCJ2aXNpYmxlXCIpO1xyXG4gICAgICAgIH1cclxuICBcdFx0fVxyXG4gIFx0XHQvLyB0aGlzLmxpc3Quc2Nyb2xsVG9JbmRleChkYXRhLmNoYXRzLmxlbmd0aCAtIDEpO1xyXG4gIFx0XHRpZihkYXRhLnVzZXJzLmxlbmd0aCA9PT0gMikge1xyXG4gIFx0XHRcdGlmKGRhdGEudXNlcnNbMF0udWlkID09PSB0aGlzLnVzZXJJZClcclxuICBcdFx0XHRcdHRoaXMuY2hhdE5hbWUgPSBkYXRhLnVzZXJzWzFdLmRpc3BsYXlOYW1lO1xyXG4gIFx0XHRcdGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5jaGF0TmFtZSA9IGRhdGEudXNlcnNbMF0uZGlzcGxheU5hbWU7XHJcbiAgICAgICAgfVxyXG4gIFx0XHR9XHJcbiAgXHRcdGVsc2Uge1xyXG4gICAgICAgIHZhciBjaGF0TmFtZSA9ICdZb3UsICc7XHJcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGRhdGEudXNlcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIGlmKGRhdGEudXNlcnNbaV0uaWQgIT0gdGhpcy51c2VySWQpIHtcclxuICAgICAgICAgICAgaWYoaSA9PT0gZGF0YS51c2Vycy5sZW5ndGggLSAxKVxyXG4gICAgICAgICAgICAgIGNoYXROYW1lICs9ICdhbmQgJyArIGRhdGEudXNlcnNbaV0uZGlzcGxheU5hbWU7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICBjaGF0TmFtZSArPSBkYXRhLnVzZXJzW2ldLmRpc3BsYXlOYW1lICsgJywgJztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgXHRcdFx0dGhpcy5jaGF0TmFtZSA9ICdHcm91cCBjaGF0JztcclxuICBcdFx0fVxyXG4gIFx0fSlcclxuXHJcbiAgXHRjb25zdCB1bnN1YnNjcmliZSA9IG1lc3NhZ2VEb2N1bWVudC5vblNuYXBzaG90KGRvYyA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdjYWxsZWQnKVxyXG4gIFx0XHRsZXQgZGF0YSA9IGRvYy5kYXRhKCk7XHJcbiAgXHRcdGZvcih2YXIgaSA9IHRoaXMubGFzdEluZGV4OyBpIDwgZGF0YS5jaGF0cy5sZW5ndGg7IGkrKykge1xyXG4gIFx0XHRcdGlmKGRhdGEuY2hhdHNbaV0udXNlcklkID09PSB0aGlzLnVzZXJJZCkge1xyXG4gICAgICAgICAgdGhpcy51cGRhdGVDb250aW51YXRpb25zKGRhdGEsIGksIHRydWUsIFwiY29sbGFwc2VcIik7XHJcbiAgICAgICAgICB0aGlzLmxpc3Quc2Nyb2xsVG9JbmRleCh0aGlzLm1lc3NhZ2VzLmxlbmd0aCAtIDEpO1xyXG4gICAgICAgIH1cclxuICBcdFx0XHRlbHNlIHtcclxuICAgICAgICAgIHRoaXMudXBkYXRlQ29udGludWF0aW9ucyhkYXRhLCBpLCBmYWxzZSwgXCJ2aXNpYmxlXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm51bVNob3duICs9IDE7XHJcbiAgXHRcdH1cclxuICBcdFx0dGhpcy5sYXN0SW5kZXggPSBkYXRhLmNoYXRzLmxlbmd0aDtcclxuICBcdH0pXHJcbiAgICBpZih0aGlzLm1lc3NhZ2VzLmxlbmd0aCA+IHRoaXMubnVtU2hvd24pIHtcclxuICAgICAgdGhpcy5tZXNzYWdlcy5zcGxpY2UoMCwgdGhpcy5tZXNzYWdlcy5sZW5ndGggLSB0aGlzLm51bVNob3duKTtcclxuICAgIH1cclxuICAgIHRoaXMubGlzdC5zY3JvbGxUb0luZGV4KHRoaXMubWVzc2FnZXMubGVuZ3RoIC0gMSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVDb250aW51YXRpb25zKGRhdGEsIGluZGV4LCBpc01pbmUsIHZpc2liaWxpdHkpIHtcclxuICAgIC8vVXBkYXRlIHRpbWUgdG8gYSByZWFkYWJsZSBmb3JtYXQgZm9yIHRoZSB1c2VyXHJcbiAgICB2YXIgY2hhdFRpbWUgPSBkYXRhLmNoYXRzW2luZGV4XS50aW1lO1xyXG4gICAgdmFyIGRhdGVTcGxpdCA9IGRhdGEuY2hhdHNbaW5kZXhdLmRhdGUuc3BsaXQoJy8nKTtcclxuICAgIHZhciB0aW1lU3BsaXQgPSBjaGF0VGltZS5zcGxpdCgnOicpO1xyXG4gICAgdmFyIGZvcm1hdHRlZFRpbWUgPSAnJztcclxuICAgIGlmKHRpbWVTcGxpdFsxXS5sZW5ndGggPT09IDEpIHtcclxuICAgICAgdGltZVNwbGl0WzFdID0gJzAnICsgdGltZVNwbGl0WzFdO1xyXG4gICAgfVxyXG4gICAgdmFyIGhvdXJzID0gcGFyc2VJbnQodGltZVNwbGl0WzBdKTtcclxuICAgIGlmKGhvdXJzID4gMTIpIHtcclxuICAgICAgZm9ybWF0dGVkVGltZSA9IGRhdGVTcGxpdFsxXSArICcvJyArIGRhdGVTcGxpdFsyXSArICcsICcgKyAoaG91cnMgLSAxMikgKyAnOicgKyB0aW1lU3BsaXRbMV0gKyAnIFBNJztcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICBpZihob3VycyA9PT0gMClcclxuICAgICAgICB0aW1lU3BsaXRbMF0gPSAnMTInO1xyXG4gICAgICBmb3JtYXR0ZWRUaW1lID0gZGF0ZVNwbGl0WzFdICsgJy8nICsgZGF0ZVNwbGl0WzJdICsgJywgJyArIHRpbWVTcGxpdFswXSArICc6JyArIHRpbWVTcGxpdFsxXSArICcgQU0nO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHBmcFByb21pc2UgPSBmaXJlYmFzZS5maXJlc3RvcmUuY29sbGVjdGlvbigndXNlcnMnKS5kb2MoZGF0YS5jaGF0c1tpbmRleF0udXNlcklkKS5nZXQoKS50aGVuKChkb2MpID0+IHtcclxuICAgICAgZGF0YS5jaGF0c1tpbmRleF0ucGZwU291cmNlID0gZG9jLmRhdGEoKS5wcm9maWxlX3NvdXJjZTtcclxuICAgIH0pXHJcblxyXG4gICAgLy9QdXNoIHRoZSBtZXNzYWdlIGl0ZW1cclxuICAgIHRoaXMubWVzc2FnZXMucHVzaChuZXcgQ2hhdEl0ZW0oZGF0YS5jaGF0c1tpbmRleF0sIHZpc2liaWxpdHksIGZvcm1hdHRlZFRpbWUsIGZhbHNlLCBmYWxzZSkpO1xyXG4gICAgdGhpcy5hbGxNZXNzYWdlcy5wdXNoKG5ldyBDaGF0SXRlbShkYXRhLmNoYXRzW2luZGV4XSwgdmlzaWJpbGl0eSwgZm9ybWF0dGVkVGltZSwgZmFsc2UsIGZhbHNlKSk7XHJcblxyXG4gICAgLy9DaGVjayBmb3IgY29udGludWF0aW9uIG1lc3NhZ2VzIGFuZCB1cGRhdGUgaXRlbXMgYWNjb3JkaW5nbHlcclxuICAgIHZhciBpID0gaW5kZXggLSAxO1xyXG4gICAgd2hpbGUoaSA+PSAwICYmIGRhdGEuY2hhdHNbaV0udXNlcklkID09PSBkYXRhLmNoYXRzW2luZGV4XS51c2VySWQpIHtcclxuICAgICAgaWYodGhpcy5pc1RpbWVPdmVyKGRhdGEuY2hhdHNbaV0sIGRhdGEuY2hhdHNbaW5kZXhdKSlcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIGlmKGkgPj0gdGhpcy5tZXNzYWdlcy5sZW5ndGgpIHtcclxuICAgICAgICB2YXIgbXNnID0gdGhpcy5tZXNzYWdlcy5nZXRJdGVtKHRoaXMubWVzc2FnZXMubGVuZ3RoICsgaSAtIGRhdGEuY2hhdHMubGVuZ3RoKTtcclxuICAgICAgICBtc2cudmlzaWJpbGl0eSA9ICdjb2xsYXBzZSc7XHJcbiAgICAgICAgaWYoaXNNaW5lKSB7XHJcbiAgICAgICAgICBtc2cubWluZUNvbnRpbnVhdGlvbiA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgbXNnLnRoZWlyc0NvbnRpbnVhdGlvbiA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubWVzc2FnZXMuc2V0SXRlbSh0aGlzLm1lc3NhZ2VzLmxlbmd0aCArIGkgLSBkYXRhLmNoYXRzLmxlbmd0aCwgbXNnKVxyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIHZhciBtc2cgPSB0aGlzLm1lc3NhZ2VzLmdldEl0ZW0oaSk7XHJcbiAgICAgICAgbXNnLnZpc2liaWxpdHkgPSAnY29sbGFwc2UnO1xyXG4gICAgICAgIGlmKGlzTWluZSkge1xyXG4gICAgICAgICAgbXNnLm1pbmVDb250aW51YXRpb24gPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIG1zZy50aGVpcnNDb250aW51YXRpb24gPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm1lc3NhZ2VzLnNldEl0ZW0oaSwgbXNnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5hbGxNZXNzYWdlcy5zZXRJdGVtKGksIG1zZyk7XHJcbiAgICAgIGkgPSBpIC0gMTtcclxuICAgIH1cclxuICAgIC8vIHRoaXMubGlzdC5zY3JvbGxUb0luZGV4KHRoaXMubWVzc2FnZXMubGVuZ3RoIC0gMSk7XHJcbiAgfVxyXG5cclxuICBvcGVuSW1hZ2VzKCkge1xyXG4gICAgdmFyIGxvY2FsUGF0aDtcclxuICAgIHZhciBjb3VudGVyID0gMTtcclxuICAgIGxldCBjb250ZXh0ID0gaW1hZ2VwaWNrZXIuY3JlYXRlKHtcclxuICAgICAgICBtb2RlOiBcInNpbmdsZVwiIC8vIHVzZSBcIm11bHRpcGxlXCIgZm9yIG11bHRpcGxlIHNlbGVjdGlvblxyXG4gICAgfSk7XHJcbiAgICBjb250ZXh0XHJcbiAgICAuYXV0aG9yaXplKClcclxuICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICByZXR1cm4gY29udGV4dC5wcmVzZW50KCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKHNlbGVjdGlvbikgPT4ge1xyXG4gICAgICAgIHNlbGVjdGlvbi5mb3JFYWNoKChzZWxlY3RlZCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBwcm9jZXNzIHRoZSBzZWxlY3RlZCBpbWFnZVxyXG4gICAgICAgICAgICBsZXQgaW1nU291cmNlID0gbmV3IGltYWdlU291cmNlLkltYWdlU291cmNlKCk7XHJcbiAgICAgICAgICAgIGltZ1NvdXJjZS5mcm9tQXNzZXQoc2VsZWN0ZWQpLnRoZW4oKHNvdXJjZSkgPT4ge1xyXG4gICAgICAgICAgICAgICBjb25zdCBiNjQgPSBzb3VyY2UudG9CYXNlNjRTdHJpbmcoJ2pwZWcnLCAxMDApO1xyXG4gICAgICAgICAgICAgICBjb25zdCBmaWxlU2l6ZSA9IGI2NC5yZXBsYWNlKC9cXD0vZywgXCJcIikubGVuZ3RoICogMC43NTtcclxuICAgICAgICAgICAgICAgaWYgKGZpbGVTaXplID4gNSkge1xyXG4gICAgICAgICAgICAgICAgICAvLyBJZiBmaWxlIGlzIGdyZWF0ZXIgdGhhbiAxIE1CXHJcbiAgICAgICAgICAgICAgICAgIHNvdXJjZS5sb2FkRnJvbUJhc2U2NChiNjQpO1xyXG4gICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICBjb25zdCBpbWdIYXNoID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygpLnNsaWNlKDIsMTEpO1xyXG4gICAgICAgICAgICAgICBsZXQgZm9sZGVyID0gZnMua25vd25Gb2xkZXJzLnRlbXAoKTtcclxuICAgICAgICAgICAgICAgdmFyIHBhdGggPSBmcy5wYXRoLmpvaW4oZm9sZGVyLnBhdGgsIGltZ0hhc2ggKyBcIi5wbmdcIik7XHJcbiAgICAgICAgICAgICAgIGxldCBzYXZlZCA9IHNvdXJjZS5zYXZlVG9GaWxlKHBhdGgsIFwianBlZ1wiLCAxMDApO1xyXG5cclxuICAgICAgICAgICAgICAgZmlyZWJhc2Uuc3RvcmFnZS51cGxvYWRGaWxlKHtcclxuICAgICAgICAgICAgICAgICAgLy8gdGhlIGZ1bGwgcGF0aCBvZiB0aGUgZmlsZSBpbiB5b3VyIEZpcmViYXNlIHN0b3JhZ2UgKGZvbGRlcnMgd2lsbCBiZSBjcmVhdGVkKVxyXG4gICAgICAgICAgICAgICAgICByZW1vdGVGdWxsUGF0aDogJ2NoYXRzLycgKyB0aGlzLmNoYXRJZCArICcvaW1hZ2VzLycgKyB0aGlzLnVzZXJJZCArICcvSU1HXycgKyBpbWdIYXNoICsgJy5wbmcnLFxyXG4gICAgICAgICAgICAgICAgICAvLyBvcHRpb24gMTogYSBmaWxlLXN5c3RlbSBtb2R1bGUgRmlsZSBvYmplY3RcclxuICAgICAgICAgICAgICAgICAgbG9jYWxGaWxlOiBmcy5GaWxlLmZyb21QYXRoKHBhdGgpLFxyXG4gICAgICAgICAgICAgICAgICAvLyBvcHRpb24gMjogYSBmdWxsIGZpbGUgcGF0aCAoaWdub3JlZCBpZiAnbG9jYWxGaWxlJyBpcyBzZXQpXHJcbiAgICAgICAgICAgICAgICAgIGxvY2FsRnVsbFBhdGg6IHBhdGgsXHJcbiAgICAgICAgICAgICAgICAgIC8vIGdldCBub3RpZmllZCBvZiBmaWxlIHVwbG9hZCBwcm9ncmVzc1xyXG4gICAgICAgICAgICAgICAgICBvblByb2dyZXNzOiAoc3RhdHVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJVcGxvYWRlZCBmcmFjdGlvbjogXCIgKyBzdGF0dXMuZnJhY3Rpb25Db21wbGV0ZWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUGVyY2VudGFnZSBjb21wbGV0ZTogXCIgKyBzdGF0dXMucGVyY2VudGFnZUNvbXBsZXRlZCk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgfSkudGhlbigodXBsb2FkZWRGaWxlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRmlsZSB1cGxvYWRlZDogXCIgKyBKU09OLnN0cmluZ2lmeSh1cGxvYWRlZEZpbGUpKTtcclxuICAgICAgICAgICAgICAgICAgZmlyZWJhc2Uuc3RvcmFnZS5nZXREb3dubG9hZFVybCh7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVtb3RlRnVsbFBhdGg6ICdjaGF0cy8nICsgdGhpcy5jaGF0SWQgKyAnL2ltYWdlcy8nICsgdGhpcy51c2VySWQgKyAnL0lNR18nICsgaW1nSGFzaCArICcucG5nJ1xyXG4gICAgICAgICAgICAgICAgICB9KS50aGVuKCh1cmwpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbmRNZXNzYWdlKHVybCk7XHJcbiAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSkuY2F0Y2goKGUpID0+IHtcclxuICAgICAgICAvLyBwcm9jZXNzIGVycm9yXHJcbiAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGlzVGltZU92ZXIoY2hhdDEsIGNoYXQyKSB7XHJcbiAgICBjb25zdCB0aW1lMSA9IGNoYXQxLnRpbWU7XHJcbiAgICBjb25zdCB0aW1lMiA9IGNoYXQyLnRpbWU7XHJcbiAgICBjb25zdCBkYXRlMSA9IGNoYXQxLmRhdGU7XHJcbiAgICBjb25zdCBkYXRlMiA9IGNoYXQyLmRhdGU7XHJcblxyXG4gICAgY29uc3QgdGltZTFTcGxpdCA9IHRpbWUxLnNwbGl0KCc6Jyk7XHJcbiAgICBjb25zdCB0aW1lMlNwbGl0ID0gdGltZTIuc3BsaXQoJzonKTtcclxuXHJcbiAgICB2YXIgdGltZTFUb3RhbFNlY29uZHMgPSBwYXJzZUludCh0aW1lMVNwbGl0WzBdKSAqIDM2MDAgKyBwYXJzZUludCh0aW1lMVNwbGl0WzFdKSAqIDYwICsgcGFyc2VJbnQodGltZTFTcGxpdFsyXSk7XHJcbiAgICB2YXIgdGltZTJUb3RhbFNlY29uZHMgPSBwYXJzZUludCh0aW1lMlNwbGl0WzBdKSAqIDM2MDAgKyBwYXJzZUludCh0aW1lMlNwbGl0WzFdKSAqIDYwICsgcGFyc2VJbnQodGltZTJTcGxpdFsyXSk7XHJcbiAgICBpZih0aW1lMlRvdGFsU2Vjb25kcyAtIHRpbWUxVG90YWxTZWNvbmRzID4gKDYwICogMykgfHwgZGF0ZTIgPiBkYXRlMSkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIGFsaWduKGl0ZW0pIHtcclxuICBcdGlmKGl0ZW0uY2hhdE1lc3NhZ2UudXNlcklkID09PSB0aGlzLnVzZXJJZClcclxuICBcdFx0cmV0dXJuIFwicmlnaHRcIjtcclxuICBcdGVsc2VcclxuICBcdFx0cmV0dXJuIFwibGVmdFwiO1xyXG4gIH1cclxuXHJcbiAgYWxpZ25SZXZlcnNlKGl0ZW0pIHtcclxuICAgIGlmKGl0ZW0uY2hhdE1lc3NhZ2UudXNlcklkID09PSB0aGlzLnVzZXJJZClcclxuICAgICAgcmV0dXJuIFwibGVmdFwiO1xyXG4gICAgZWxzZVxyXG4gICAgICByZXR1cm4gXCJyaWdodFwiO1xyXG4gIH1cclxuXHJcbiAgdGV4dFZpc2liaWxpdHkoaXRlbSkge1xyXG4gICAgaWYoaXRlbS5jaGF0TWVzc2FnZS5tZXNzYWdlID09PSBcIlwiKSB7XHJcbiAgICAgIHJldHVybiBcImNvbGxhcHNlXCI7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgcmV0dXJuIFwidmlzaWJsZVwiO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaW1nVmlzaWJpbGl0eShpdGVtKSB7XHJcbiAgICBpZihpdGVtLmNoYXRNZXNzYWdlLmltZ1NvdXJjZSA9PT0gXCJcIikge1xyXG4gICAgICByZXR1cm4gXCJjb2xsYXBzZVwiO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHJldHVybiBcInZpc2libGVcIjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldHVwSXRlbVZpZXcoYXJncykge1xyXG4gIFx0YXJncy52aWV3LmNvbnRleHQubWluZSA9ICh0aGlzLm1lc3NhZ2VzLmdldEl0ZW0oYXJncy5pbmRleCkuY2hhdE1lc3NhZ2UudXNlcklkID09PSB0aGlzLnVzZXJJZCk7XHJcbiAgXHRhcmdzLnZpZXcuY29udGV4dC50aGVpcnMgPSAodGhpcy5tZXNzYWdlcy5nZXRJdGVtKGFyZ3MuaW5kZXgpLmNoYXRNZXNzYWdlLnVzZXJJZCAhPT0gdGhpcy51c2VySWQpO1xyXG4gICAgYXJncy52aWV3LmNvbnRleHQubWluZUNvbnRpbnVhdGlvbiA9ICh0aGlzLm1lc3NhZ2VzLmdldEl0ZW0oYXJncy5pbmRleCkubWluZUNvbnRpbnVhdGlvbik7XHJcbiAgICBhcmdzLnZpZXcuY29udGV4dC50aGVpcnNDb250aW51YXRpb24gPSAodGhpcy5tZXNzYWdlcy5nZXRJdGVtKGFyZ3MuaW5kZXgpLnRoZWlyc0NvbnRpbnVhdGlvbik7XHJcbiAgICBhcmdzLnZpZXcuY29udGV4dC5taW5lQ29udGludWF0aW9uR3JpZCA9ICh0aGlzLm1lc3NhZ2VzLmdldEl0ZW0oYXJncy5pbmRleCkubWluZUNvbnRpbnVhdGlvbik7XHJcbiAgICBhcmdzLnZpZXcuY29udGV4dC50aGVpcnNDb250aW51YXRpb25HcmlkID0gKHRoaXMubWVzc2FnZXMuZ2V0SXRlbShhcmdzLmluZGV4KS50aGVpcnNDb250aW51YXRpb24pO1xyXG5cclxuICAgIGFyZ3Mudmlldy5jb250ZXh0LmdyaWQgPSAoIWFyZ3Mudmlldy5jb250ZXh0LnRoZWlyc0NvbnRpbnVhdGlvbiAmJiAhYXJncy52aWV3LmNvbnRleHQubWluZUNvbnRpbnVhdGlvbik7XHJcbiAgICBhcmdzLnZpZXcuY29udGV4dC5taW5lVGltZSA9ICghYXJncy52aWV3LmNvbnRleHQubWluZUNvbnRpbnVhdGlvbiAmJiBhcmdzLnZpZXcuY29udGV4dC5taW5lKTtcclxuICAgIGFyZ3Mudmlldy5jb250ZXh0LnRoZWlyc1RpbWUgPSAoIWFyZ3Mudmlldy5jb250ZXh0LnRoZWlyc0NvbnRpbnVhdGlvbiAmJiBhcmdzLnZpZXcuY29udGV4dC50aGVpcnMpO1xyXG5cclxuICAgIGFyZ3Mudmlldy5jb250ZXh0LnRoZWlyc0ltZyA9IGFyZ3Mudmlldy5jb250ZXh0LnRoZWlyc0NvbnRpbnVhdGlvbjtcclxuICAgIGFyZ3Mudmlldy5jb250ZXh0LmltZyA9ICFhcmdzLnZpZXcuY29udGV4dC50aGVpcnNJbWc7XHJcbiAgICBcclxuICAgIGFyZ3Mudmlldy5jb250ZXh0LnRpbWUgPSAoIWFyZ3Mudmlldy5jb250ZXh0Lm1pbmVUaW1lICYmICFhcmdzLnZpZXcuY29udGV4dC50aGVpcnNUaW1lKSAgICBcclxuICAgIGFyZ3Mudmlldy5jb250ZXh0LmV2ZW4gPSAoYXJncy5pbmRleCAlIDIgPT09IDApO1xyXG4gIFx0YXJncy52aWV3LmNvbnRleHQub2RkID0gKGFyZ3MuaW5kZXggJSAyID09PSAxKTtcclxuICB9XHJcblxyXG4gIG9uTmF2QnRuVGFwKCkge1xyXG4gIFx0aWYodGhpcy5yb3V0ZXIuY2FuR29CYWNrKCkpXHJcbiAgXHRcdHRoaXMucm91dGVyLmJhY2soKTtcclxuICBcdGVsc2VcclxuICBcdFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUoWydjaGF0LWxpc3QnXSwge2NsZWFySGlzdG9yeTogdHJ1ZX0pO1xyXG4gIH1cclxuXHJcbiAgb25UZXh0VGFwKCkge1xyXG4gICAgdGhpcy5saXN0LnNjcm9sbFRvSW5kZXgodGhpcy5tZXNzYWdlcy5sZW5ndGggLSAxKTtcclxuICB9XHJcblxyXG4gIHRvVmlld0ltYWdlKGltZ1NvdXJjZSkge1xyXG4gICAgdGhpcy50cmFuc2ZlclNlcnZpY2Uuc2V0RGF0YShpbWdTb3VyY2UpO1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWyd2aWV3LWltYWdlJ10pO1xyXG4gIH1cclxuXHJcbiAgbG9hZE1vcmVEYXRhKCkge1xyXG4gICAgLy8gY29uc29sZS5sb2coJ0xvYWQgbW9yZScpXHJcbiAgfVxyXG5cclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLyogQWRkIG1vYmlsZSBzdHlsZXMgZm9yIHRoZSBjb21wb25lbnQgaGVyZS4gICovXFxyXFxuLmRlbGV0ZS1idG4ge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgY29sb3I6ICNhYzAwZTY7XFxyXFxuICAgIC8qcGFkZGluZzogNnB4IDI0cHg7Ki9cXHJcXG4gICAgYm9yZGVyLXdpZHRoOiAxO1xcclxcbiAgICBib3JkZXItY29sb3I6ICNhYzAwZTY7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDU7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZmxvYXQ6IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luOiBhdXRvOyBcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJTZWdvZSBVSVxcXCIsQXJpYWwsc2Fucy1zZXJpZjtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTU7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMTU7XFxyXFxuICAgIHdpZHRoOiAxMjA7XFxyXFxuICAgIGhlaWdodDogNDA7XFxyXFxuICAgIGhvcml6b250YWwtYWxpZ246cmlnaHQ7XFxyXFxufVxcclxcblxcclxcbi5kZWxldGUtYnRuOmhpZ2hsaWdodGVkIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZTZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLmNhbmNlbC1idG4ge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgLypjb2xvcjogd2hpdGU7Ki9cXHJcXG4gICAgLypwYWRkaW5nOiA2cHggMjRweDsqL1xcclxcbiAgICBib3JkZXItd2lkdGg6IDE7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDU7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZmxvYXQ6IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luOiBhdXRvOyBcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJTZWdvZSBVSVxcXCIsQXJpYWwsc2Fucy1zZXJpZjtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTU7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxNTtcXHJcXG4gICAgd2lkdGg6IDEyMDtcXHJcXG4gICAgaGVpZ2h0OiA0MDtcXHJcXG4gICAgaG9yaXpvbnRhbC1hbGlnbjpsZWZ0O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FuY2VsLWJ0bjpoaWdobGlnaHRlZCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XFxyXFxufVxcclxcblxcclxcbi5kZWxldGUtbGFiZWwge1xcclxcblxcdGZvbnQtc2l6ZTogMjA7XFxyXFxuXFx0bWFyZ2luLXRvcDogMTg7XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTogNDg7XFxyXFxuXFx0bWFyZ2luLWxlZnQ6IDE4O1xcclxcblxcdG1hcmdpbi1yaWdodDogMTg7XFxyXFxuXFx0Y29sb3I6IGJsYWNrO1xcclxcbn1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8U3RhY2tMYXlvdXQ+XFxyXFxuXFx0PExhYmVsIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiB0ZXh0PVxcXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlP1xcXCIgY2xhc3M9XFxcImRlbGV0ZS1sYWJlbFxcXCI+PC9MYWJlbD5cXHJcXG5cXHQ8R3JpZExheW91dCByb3dzPVxcXCJhdXRvXFxcIiBjb2x1bW5zPVxcXCIqXFxcIj5cXHJcXG5cXHRcXHQ8QnV0dG9uIHJvdz1cXFwiMFxcXCIgdGV4dD1cXFwiQ2FuY2VsXFxcIiBjbGFzcz1cXFwiY2FuY2VsLWJ0blxcXCIgKHRhcCk9XFxcImNsb3NlKCdjYW5jZWwnKVxcXCI+PC9CdXR0b24+XFxyXFxuXFx0XFx0PEJ1dHRvbiByb3c9XFxcIjBcXFwiIHRleHQ9XFxcIkRlbGV0ZVxcXCIgY2xhc3M9XFxcImRlbGV0ZS1idG5cXFwiICh0YXApPVxcXCJjbG9zZSgnZGVsZXRlJylcXFwiPjwvQnV0dG9uPlxcclxcblxcdDwvR3JpZExheW91dD5cXHJcXG48L1N0YWNrTGF5b3V0PlwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTW9kYWxEaWFsb2dQYXJhbXMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZGlyZWN0aXZlcy9kaWFsb2dzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1jb25maXJtYXRpb24nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jb25maXJtYXRpb24uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2NvbmZpcm1hdGlvbi5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIENvbmZpcm1hdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFyYW1zOiBNb2RhbERpYWxvZ1BhcmFtcykgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuXHJcbiAgY2xvc2UocmVzKSB7XHJcbiAgXHR0aGlzLnBhcmFtcy5jbG9zZUNhbGxiYWNrKHJlcyk7XHJcbiAgfVxyXG5cclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLypcXHJcXG5BZGQgeW91ciBOYXRpdmVTY3JpcHQgc3BlY2lmaWMgc3R5bGVzIGhlcmUuXFxyXFxuVG8gbGVhcm4gbW9yZSBhYm91dCBzdHlsaW5nIGluIE5hdGl2ZVNjcmlwdCBzZWU6XFxyXFxuaHR0cHM6Ly9kb2NzLm5hdGl2ZXNjcmlwdC5vcmcvYW5ndWxhci91aS9zdHlsaW5nXFxyXFxuKi9cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8U3RhY2tMYXlvdXQ+XFxyXFxuICA8TGFiZWwgdGV4dD1cXFwiY29ubmVjdCB3b3Jrc1xcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiPjwvTGFiZWw+XFxyXFxuICA8TGFiZWwgdGV4dD1cXFwiVGhpcyBpcyBhIG1pZ3JhdGVkIGNvbXBvbmVudFxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiPjwvTGFiZWw+XFxyXFxuICA8TGFiZWwgdGV4dD1cXFwiVXBkYXRlIGl0IHRvIHByb3ZpZGUgdGhlIFVJIGVsZW1lbnRzIHJlcXVpcmVkIGluIHlvdXIgbW9iaWxlIGFwcFxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiPjwvTGFiZWw+XFxyXFxuPC9TdGFja0xheW91dD5cXHJcXG5cXHJcXG48IS0tXFxyXFxuT3JpZ2luYWwgV2ViIHRlbXBsYXRlOlxcclxcblxcclxcbjxwPlxcclxcbiAgY29ubmVjdCB3b3JrcyFcXHJcXG48L3A+XFxyXFxuXFxyXFxuLS0+XCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBMb2dpbmNoZWNrU2VydmljZSB9IGZyb20gJy4uL2xvZ2luY2hlY2suc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1jb25uZWN0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY29ubmVjdC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY29ubmVjdC5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIENvbm5lY3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGxvZ2luY2hlY2tTZXJ2aWNlOiBMb2dpbmNoZWNrU2VydmljZSkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIFx0dGhpcy5sb2dpbmNoZWNrU2VydmljZS5sb2dpbkNoZWNrKCk7XHJcbiAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBUcmFuc2ZlclNlcnZpY2Uge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjpSb3V0ZXIpIHsgfVxyXG5cclxuICBwcml2YXRlIGRhdGE7XHJcblxyXG4gIHNldERhdGEoZGF0YSl7XHJcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xyXG4gIH1cclxuXHJcbiAgZ2V0RGF0YSgpe1xyXG4gICAgbGV0IHRlbXAgPSB0aGlzLmRhdGE7XHJcbiAgICB0aGlzLmNsZWFyRGF0YSgpO1xyXG4gICAgcmV0dXJuIHRlbXA7XHJcbiAgfVxyXG5cclxuICBjbGVhckRhdGEoKXtcclxuICAgIHRoaXMuZGF0YSA9IHVuZGVmaW5lZDtcclxuICB9XHJcblxyXG59IiwibW9kdWxlLmV4cG9ydHMgPSBcInAge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICNkOGMzZWM7XFxyXFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jY2xvc2UtZGlhbG9nIHtcXHJcXG5cXHRmbG9hdDogcmlnaHQ7XFxyXFxufVxcclxcblxcclxcbi5jbG9zZSB7XFxyXFxuXFx0Zm9udC1jb2xvcjogYmxhY2s7XFxyXFxuICAgIGZsb2F0OiByaWdodDtcXHJcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVlbTtcXHJcXG59XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHAgaWQ9XFxcImRpYWxvZ1xcXCI+XFxyXFxuICBZb3VyIHNldHRpbmdzIGhhdmUgYmVlbiB1cGRhdGVkIVxcclxcbiAgPHNwYW4gY2xhc3M9XFxcImNsb3NlXFxcIiBpZD1cXFwiY2xvc2UtZGlhbG9nXFxcIj4mdGltZXM7PC9zcGFuPlxcclxcbjwvcD5cXHJcXG5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1kaWFsb2cnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9kaWFsb2cuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2RpYWxvZy5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIERpYWxvZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIFx0XHJcbiAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQge1xyXG4gICAgSW5qZWN0YWJsZSxcclxuICAgIEluamVjdG9yLFxyXG4gICAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG4gICAgRW1iZWRkZWRWaWV3UmVmLFxyXG4gICAgQXBwbGljYXRpb25SZWZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IFBvc3RpbmdDb21wb25lbnQgfSBmcm9tICcuL3Bvc3RpbmcvcG9zdGluZy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQYXltZW50TWV0aG9kQ29tcG9uZW50IH0gZnJvbSAnLi9wYXltZW50LW1ldGhvZC9wYXltZW50LW1ldGhvZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUcmFuc2ZlclNlcnZpY2UgfSBmcm9tICcuL2RhdGF0cmFuc2Zlci5zZXJ2aWNlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIER5bmFtaWNBZGRTZXJ2aWNlIHtcclxuICBcclxuICBjb25zdHJ1Y3RvcihcclxuICAgICAgcHJpdmF0ZSBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuICAgICAgcHJpdmF0ZSBhcHBSZWY6IEFwcGxpY2F0aW9uUmVmLFxyXG4gICAgICBwcml2YXRlIGluamVjdG9yOiBJbmplY3RvcixcclxuICAgICAgcHJpdmF0ZSB0cmFuc2ZlclNlcnZpY2U6IFRyYW5zZmVyU2VydmljZSxcclxuICApIHsgfVxyXG4gIFxyXG4gIGFwcGVuZENvbXBvbmVudFRvQm9keShsYXlvdXQ9bnVsbCkge1xyXG4gICAgLy8gMS4gQ3JlYXRlIGEgY29tcG9uZW50IHJlZmVyZW5jZSBmcm9tIHRoZSBjb21wb25lbnQgXHJcbiAgICBjb25zdCBjb21wb25lbnRSZWYgPSB0aGlzLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlclxyXG4gICAgICAucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoUG9zdGluZ0NvbXBvbmVudClcclxuICAgICAgLmNyZWF0ZSh0aGlzLmluamVjdG9yKTtcclxuICAgIC8vIDIuIEF0dGFjaCBjb21wb25lbnQgdG8gdGhlIGFwcFJlZiBzbyB0aGF0IGl0J3MgaW5zaWRlIHRoZSBuZyBjb21wb25lbnQgdHJlZVxyXG4gICAgdGhpcy5hcHBSZWYuYXR0YWNoVmlldyhjb21wb25lbnRSZWYuaG9zdFZpZXcpO1xyXG4gICAgLy8gMy4gR2V0IERPTSBlbGVtZW50IGZyb20gY29tcG9uZW50XHJcbiAgICBjb25zdCBkb21FbGVtID0gKGNvbXBvbmVudFJlZi5ob3N0VmlldyBhcyBFbWJlZGRlZFZpZXdSZWY8YW55PilcclxuICAgICAgLnJvb3ROb2Rlc1swXTtcclxuICAgIC8vIDQuIEFwcGVuZCBET00gZWxlbWVudCB0byB0aGUgYm9keVxyXG4gICAgbGF5b3V0LmFkZENoaWxkKGRvbUVsZW0pXHJcbiAgfVxyXG5cclxuICBhcHBlbmRQYXltZW50TWV0aG9kKG1ldGhvZCwgaW5mbywgc3VwZXJib2R5LCBpc0FkZCwgdG9rZW4pIHtcclxuXHJcbiAgfVxyXG59IiwiaW1wb3J0IHtcclxuICAgIEluamVjdGFibGUsXHJcbiAgICBJbmplY3RvcixcclxuICAgIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuICAgIEVtYmVkZGVkVmlld1JlZixcclxuICAgIEFwcGxpY2F0aW9uUmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBQb3N0aW5nQ29tcG9uZW50IH0gZnJvbSAnLi9wb3N0aW5nL3Bvc3RpbmcuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGF5bWVudE1ldGhvZENvbXBvbmVudCB9IGZyb20gJy4vcGF5bWVudC1tZXRob2QvcGF5bWVudC1tZXRob2QuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVHJhbnNmZXJTZXJ2aWNlIH0gZnJvbSAnLi9kYXRhdHJhbnNmZXIuc2VydmljZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBEeW5hbWljQWRkU2VydmljZSB7XHJcbiAgXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICAgIHByaXZhdGUgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcbiAgICAgIHByaXZhdGUgYXBwUmVmOiBBcHBsaWNhdGlvblJlZixcclxuICAgICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsXHJcbiAgICAgIHByaXZhdGUgdHJhbnNmZXJTZXJ2aWNlOiBUcmFuc2ZlclNlcnZpY2UsXHJcbiAgKSB7IH1cclxuICBcclxuICBhcHBlbmRDb21wb25lbnRUb0JvZHkobGF5b3V0PW51bGwpIHtcclxuICAgIC8vIDEuIENyZWF0ZSBhIGNvbXBvbmVudCByZWZlcmVuY2UgZnJvbSB0aGUgY29tcG9uZW50IFxyXG4gICAgY29uc3QgY29tcG9uZW50UmVmID0gdGhpcy5jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXJcclxuICAgICAgLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KFBvc3RpbmdDb21wb25lbnQpXHJcbiAgICAgIC5jcmVhdGUodGhpcy5pbmplY3Rvcik7XHJcbiAgICAvLyAyLiBBdHRhY2ggY29tcG9uZW50IHRvIHRoZSBhcHBSZWYgc28gdGhhdCBpdCdzIGluc2lkZSB0aGUgbmcgY29tcG9uZW50IHRyZWVcclxuICAgIHRoaXMuYXBwUmVmLmF0dGFjaFZpZXcoY29tcG9uZW50UmVmLmhvc3RWaWV3KTtcclxuICAgIC8vIDMuIEdldCBET00gZWxlbWVudCBmcm9tIGNvbXBvbmVudFxyXG4gICAgY29uc3QgZG9tRWxlbSA9IChjb21wb25lbnRSZWYuaG9zdFZpZXcgYXMgRW1iZWRkZWRWaWV3UmVmPGFueT4pXHJcbiAgICAgIC5yb290Tm9kZXNbMF07XHJcbiAgICAvLyA0LiBBcHBlbmQgRE9NIGVsZW1lbnQgdG8gdGhlIGJvZHlcclxuICAgIGxheW91dC5hZGRDaGlsZChkb21FbGVtKVxyXG4gIH1cclxuXHJcbiAgYXBwZW5kUGF5bWVudE1ldGhvZChtZXRob2QsIGluZm8sIHN1cGVyYm9keSwgaXNBZGQsIHRva2VuKSB7XHJcblxyXG4gIH1cclxufSIsIm1vZHVsZS5leHBvcnRzID0gXCIuZmxvYXQtYnRuIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjYWMwMGU2O1xcclxcblxcdHdpZHRoOiA1NjtcXHJcXG5cXHRoZWlnaHQ6IDU2O1xcclxcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmZsb2F0LWJ0bi10ZXh0IHtcXHJcXG5cXHRjb2xvcjogI2ZmZmZmZjtcXHJcXG5cXHRmb250LXNpemU6IDM2O1xcclxcblxcdC8qbWFyZ2luLXRvcDogLTY7Ki9cXHJcXG59XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJmbG9hdC1idG5cXFwiPlxcclxcblxcdDxMYWJlbCBjbGFzcz1cXFwiZmxvYXQtYnRuLXRleHRcXFwiIHRleHQ9XFxcIitcXFwiPjwvTGFiZWw+XFxyXFxuPC9TdGFja0xheW91dD5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1mbG9hdC1idG4nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9mbG9hdC1idG4uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2Zsb2F0LWJ0bi5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEZsb2F0QnRuQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG5cclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLyogQWRkIG1vYmlsZSBzdHlsZXMgZm9yIHRoZSBjb21wb25lbnQgaGVyZS4gICovXFxyXFxuLmhlYWRlcntcXHJcXG4gICAgbWFyZ2luLXRvcDogNTA7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAyMjtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAyMjtcXHJcXG5cXHRjb2xvcjogYmxhY2s7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnN1Ym1pdC1idG57XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6I2FjMDBlNjtcXHJcXG4gICAgd2lkdGg6IDc1JTtcXHJcXG4gICAgaGVpZ2h0OiAxNzBweDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJTZWdvZSBVSVxcXCIsQXJpYWwsc2Fucy1zZXJpZjtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBtYXJnaW4tdG9wOiAyMDtcXHJcXG59XFxyXFxuLnRleHQtZmllbGR7XFxyXFxuICAgIHdpZHRoOiA4NSU7XFxyXFxuICAgIG1hcmdpbi10b3A6IDIwO1xcclxcbiAgICBjb2xvcjojNjk2OTY5XFxyXFxufVxcclxcblxcclxcbi5jbG9zZS1idXR0b24tY29udGFpbmVyIHtcXHJcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0bGVmdDogMDtcXHJcXG59XFxyXFxuLmNsb3NlIHtcXHJcXG5cXHRtYXJnaW46IDEwO1xcclxcblxcdGZvbnQtc2l6ZTogNDA7XFxyXFxuXFx0d2lkdGg6IDQ4O1xcclxcbiAgICBoZWlnaHQ6IDQ4O1xcclxcbiAgICBjb2xvcjogYmxhY2tcXHJcXG59XFxyXFxuXFxyXFxuLmVycm9yLW1lc3NhZ2Uge1xcclxcblxcdGNvbG9yOiByZWQ7XFxyXFxuXFx0Zm9udC1zaXplOiAxNjtcXHJcXG5cXHR2aXNpYmlsaXR5OiBjb2xsYXBzZTtcXHJcXG59XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPFN0YWNrbGF5b3V0PlxcclxcbiAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJjbG9zZS1idXR0b24tY29udGFpbmVyXFxcIiBvcmllbnRhdGlvbj1cXFwiaG9yaXpvbnRhbFxcXCI+XFxyXFxuICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIiZ0aW1lcztcXFwiIGNsYXNzPVxcXCJjbG9zZVxcXCIgKHRhcCk9XFxcImNsb3NlKCdjYW5jZWwnKVxcXCI+PC9MYWJlbD5cXHJcXG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxyXFxuICAgICAgICA8TGFiZWwgY2xhc3M9XFxcImhlYWRlclxcXCIgdGV4dD1cXFwiRW50ZXIgdGhlIGVtYWlsIGFkZHJlc3MgeW91IHVzZWQgdG8gcmVnaXN0ZXIgZm9yIENvbGxlZ2VQb29sIHRvIHJlc2V0IHlvdXIgcGFzc3dvcmQuXFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCI+PC9MYWJlbD5cXHJcXG4gICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiaW5wdXQtZmllbGRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIGNsYXNzPVxcXCJ0ZXh0LWZpZWxkXFxcIiBoaW50PVxcXCJFbWFpbFxcXCIga2V5Ym9hcmRUeXBlPVxcXCJlbWFpbFxcXCIgYXV0b2NvcnJlY3Q9XFxcImZhbHNlXFxcIiBhdXRvY2FwaXRhbGl6YXRpb25UeXBlPVxcXCJub25lXFxcIiBbKG5nTW9kZWwpXT1cXFwiZW1haWxcXFwiIHJldHVybktleVR5cGU9XFxcIm5leHRcXFwiIChyZXR1cm5QcmVzcyk9XFxcImZvY3VzUGFzc3dvcmQoKVxcXCIgI2VtPjwvVGV4dEZpZWxkPlxcclxcbiAgICAgICAgPC9TdGFja0xheW91dD5cXHJcXG4gICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJObyBhY2NvdW50IGNvdWxkIGJlIGZvdW5kIHdpdGggeW91ciBlbWFpbFxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiIGNsYXNzPVxcXCJlcnJvci1tZXNzYWdlXFxcIiAjZXJyb3JNZXNzYWdlPjwvTGFiZWw+XFxyXFxuICAgIFxcclxcbiAgICAgICAgPEJ1dHRvbiB0ZXh0PVxcXCJTdWJtaXRcXFwiICh0YXApPVxcXCJzdWJtaXQoZW1haWwpXFxcIiBjbGFzcz1cXFwic3VibWl0LWJ0blxcXCI+PC9CdXR0b24+XFxyXFxuICAgIFxcclxcbiAgICA8L1N0YWNrbGF5b3V0PlwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDb250YWluZXJSZWYsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNb2RhbERpYWxvZ1BhcmFtcyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9kaXJlY3RpdmVzL2RpYWxvZ3NcIjtcclxuaW1wb3J0ICogYXMgZmlyZWJhc2UgZnJvbSAnbmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZSc7XHJcbmltcG9ydCB7IExvZ2luY2hlY2tTZXJ2aWNlIH0gZnJvbSAnLi4vbG9naW5jaGVjay5zZXJ2aWNlLnRucyc7XHJcbmltcG9ydCB7IFRyYW5zZmVyU2VydmljZSB9IGZyb20gJy4uL2RhdGF0cmFuc2Zlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTW9kYWxEaWFsb2dTZXJ2aWNlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2RpcmVjdGl2ZXMvZGlhbG9nc1wiO1xyXG5pbXBvcnQgeyBMYWJlbCB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvbGFiZWwnO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdhcHAtZm9yZ2V0LWZvcm0nLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL2ZvcmdldC1mb3JtLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL2ZvcmdldC1mb3JtLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRm9yZ2V0Rm9ybUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwYXJhbXM6IE1vZGFsRGlhbG9nUGFyYW1zLCBwcml2YXRlIHRyYW5zZmVyU2VydmljZTogVHJhbnNmZXJTZXJ2aWNlLCBwcml2YXRlIGxvZ2luY2hlY2tTZXJ2aWNlOiBMb2dpbmNoZWNrU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIHZjUmVmOiBWaWV3Q29udGFpbmVyUmVmLCBwcml2YXRlIG1vZGFsOiBNb2RhbERpYWxvZ1NlcnZpY2UpIHsgfVxyXG5cclxuICAgIEBWaWV3Q2hpbGQoXCJlcnJvck1lc3NhZ2VcIix7IHN0YXRpYzogdHJ1ZSB9KSBlbTogRWxlbWVudFJlZjtcclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgIH1cclxuXHJcbiAgICBjbG9zZShyZXMpIHtcclxuICAgICAgICBsZXQgZXJyb3JNZXNzYWdlID0gPExhYmVsPnRoaXMuZW0ubmF0aXZlRWxlbWVudDtcclxuICAgICAgICBlcnJvck1lc3NhZ2Uuc3R5bGUudmlzaWJpbGl0eSA9ICdjb2xsYXBzZSc7XHJcbiAgICAgICAgdGhpcy5wYXJhbXMuY2xvc2VDYWxsYmFjayhyZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHN1Ym1pdChlbWFpbCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZW1haWxcIiwgZW1haWwpXHJcbiAgICAgICAgZmlyZWJhc2Uuc2VuZFBhc3N3b3JkUmVzZXRFbWFpbChlbWFpbCkudGhlbihcclxuICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbGVydCgnQW4gZW1haWwgaGFzIGJlZW4gc2VudCB0byAnICsgZW1haWwgKyAnIHdpdGggZGV0YWlscyBvZiBob3cgdG8gcmVjb3ZlciB5b3VyIGFjY291bnQnKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZSgnY2FuY2VsJylcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZXJyb3JNZXNzYWdlID0gPExhYmVsPiB0aGlzLmVtLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2Uuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBhbGVydChtZXNzYWdlOiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gYWxlcnQoe1xyXG4gICAgICAgICAgICB0aXRsZTogXCJDb2xsZWdlUG9vbFwiLFxyXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiQ2xvc2VcIixcclxuICAgICAgICAgICAgbWVzc2FnZTogbWVzc2FnZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgR29vZ2xlTWFwc1NlcnZpY2Uge1xyXG5cclxuICBBUElfS0VZID0gJ0FJemFTeUFJVHhTMWptZjhQTXRhelJndVdjQWZXUXhXMWtQT29ZZyc7XHJcbiAgc3RhdGljX21hcHNfdXJpID0gJ2h0dHBzOi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9zdGF0aWNtYXA/a2V5PScgKyB0aGlzLkFQSV9LRVkgKyAnJnNpemU9MzQweDIyMCZzY2FsZT0yJm1hcHR5cGU9cm9hZG1hcFxcJm1hcmtlcnM9c2l6ZTpzbWFsbCU3Q2NvbG9yOnJlZCU3QydcclxuICBzdGF0aWNfbWFwc191cmlfbGFyZ2UgPSAnaHR0cHM6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL3N0YXRpY21hcD9rZXk9JyArIHRoaXMuQVBJX0tFWSArICcmc2l6ZT01MTJ4NTEyJnNjYWxlPTImbWFwdHlwZT1yb2FkbWFwXFwmbWFya2Vycz1zaXplOnNtYWxsJTdDY29sb3I6cmVkJTdDJ1xyXG4gIFxyXG4gIGdlb2NvZGVfdXJpID0gJ2h0dHBzOi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9nZW9jb2RlL2pzb24/a2V5PScgKyB0aGlzLkFQSV9LRVkgKyAnJmFkZHJlc3M9J1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cENsaWVudDogSHR0cENsaWVudCkgeyB9XHJcblxyXG4gIGdldFN0YXRpY01hcChzdGFydGFkciwgZW5kYWRyKSB7XHJcbiAgXHR2YXIgZm9ybWF0dGVkX3N0YXJ0YWRyID0gc3RhcnRhZHIuc3BsaXQoJyAnKS5qb2luKCcrJylcclxuICBcdHZhciBmb3JtYXR0ZWRfc3RhcnRhZHIgPSBzdGFydGFkci5zcGxpdCgnJicpLmpvaW4oJ2FuZCcpXHJcbiAgXHR2YXIgZm9ybWF0dGVkX2VuZGFkciA9IGVuZGFkci5zcGxpdCgnICcpLmpvaW4oJysnKVxyXG4gIFx0dmFyIGZvcm1hdHRlZF9lbmRhZHIgPSBlbmRhZHIuc3BsaXQoJyYnKS5qb2luKCdhbmQnKVxyXG4gIFx0cmV0dXJuIHRoaXMuc3RhdGljX21hcHNfdXJpICsgZm9ybWF0dGVkX3N0YXJ0YWRyICsgXCImbWFya2Vycz1zaXplOm1lZCU3Q1wiICsgZm9ybWF0dGVkX2VuZGFkcjtcclxuICB9XHJcblxyXG4gIGdldFN0YXRpY01hcExhcmdlKHN0YXJ0YWRyLCBlbmRhZHIpIHtcclxuICBcdHZhciBmb3JtYXR0ZWRfc3RhcnRhZHIgPSBzdGFydGFkci5zcGxpdCgnICcpLmpvaW4oJysnKVxyXG4gIFx0dmFyIGZvcm1hdHRlZF9zdGFydGFkciA9IHN0YXJ0YWRyLnNwbGl0KCcmJykuam9pbignYW5kJylcclxuICBcdHZhciBmb3JtYXR0ZWRfZW5kYWRyID0gZW5kYWRyLnNwbGl0KCcgJykuam9pbignKycpXHJcbiAgXHR2YXIgZm9ybWF0dGVkX2VuZGFkciA9IGVuZGFkci5zcGxpdCgnJicpLmpvaW4oJ2FuZCcpXHJcbiAgXHRyZXR1cm4gdGhpcy5zdGF0aWNfbWFwc191cmlfbGFyZ2UgKyBmb3JtYXR0ZWRfc3RhcnRhZHIgKyBcIiZtYXJrZXJzPXNpemU6bWVkJTdDXCIgKyBmb3JtYXR0ZWRfZW5kYWRyO1xyXG4gIH1cclxuXHJcbiAgZ2V0R2VvY29kZVJlc3VsdHMoYWRkcmVzcykge1xyXG4gIFx0dmFyIGZvcm1hdHRlZF9hZGRyZXNzID0gYWRkcmVzcy5zcGxpdCgnICcpLmpvaW4oJysnKVxyXG4gIFx0dmFyIGZvcm1hdHRlZF9hZGRyZXNzID0gYWRkcmVzcy5zcGxpdCgnJicpLmpvaW4oJ2FuZCcpXHJcbiAgXHRyZXR1cm4gdGhpcy5odHRwQ2xpZW50LmdldChgJHt0aGlzLmdlb2NvZGVfdXJpfWAgKyBmb3JtYXR0ZWRfYWRkcmVzcyk7XHJcbiAgfVxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCIvKlxcclxcbkFkZCB5b3VyIE5hdGl2ZVNjcmlwdCBzcGVjaWZpYyBzdHlsZXMgaGVyZS5cXHJcXG5UbyBsZWFybiBtb3JlIGFib3V0IHN0eWxpbmcgaW4gTmF0aXZlU2NyaXB0IHNlZTpcXHJcXG5odHRwczovL2RvY3MubmF0aXZlc2NyaXB0Lm9yZy9hbmd1bGFyL3VpL3N0eWxpbmdcXHJcXG4qL1xcclxcblxcclxcbi5hY3Rpb25iYXIge1xcclxcblxcdGZvbnQtc2l6ZTogMjI7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDcwMDtcXHJcXG5cXHR0ZXh0LWFsaWduOiBsZWZ0O1xcclxcblxcdGNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuTGFiZWwge1xcclxcblxcdHRleHQtYWxpZ246IGxlZnQ7XFxyXFxufVxcclxcblxcclxcbi5uYW1lLWxhYmVsIHtcXHJcXG5cXHRtYXJnaW4tdG9wOiAxNjtcXHJcXG5cXHRtYXJnaW4tbGVmdDogMTg7XFxyXFxuXFx0Y29sb3I6IGJsYWNrO1xcclxcblxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuXFx0Zm9udC1zaXplOiAxNztcXHJcXG59XFxyXFxuXFxyXFxuLmluZm8tbGFiZWwge1xcclxcblxcdG1hcmdpbi10b3A6IDQ7XFxyXFxuXFx0bWFyZ2luLWxlZnQ6IDE4O1xcclxcblxcdG1hcmdpbi1ib3R0b206IDE2O1xcclxcblxcdGNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLnBvc3Qge1xcclxcblxcdGJvcmRlci1ib3R0b20td2lkdGg6IDE7XFxyXFxuXFx0Ym9yZGVyLWNvbG9yOiAjZjFmMWYxO1xcclxcblxcdG1hcmdpbi10b3A6IDE1MDtcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiAxNTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvc3Q6aGlnaGxpZ2h0ZWQge1xcclxcblxcdC8qYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTsqL1xcclxcbn1cXHJcXG5cXHJcXG4ucG9zdGluZy1tYXAge1xcclxcblxcdG1hcmdpbi1ib3R0b206IDE2O1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDEwO1xcclxcblxcdGhlaWdodDogMjIwO1xcclxcblxcdHdpZHRoOiAzNDA7XFxyXFxufVxcclxcblxcclxcbi5wcm9maWxlLXBpY3R1cmUge1xcclxcblxcdGhlaWdodDogNTA7XFxyXFxuXFx0d2lkdGg6IDUwO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDEwMCU7XFxyXFxuXFx0dmVydGljYWwtYWxpZ246IHRvcDtcXHJcXG5cXHRtYXJnaW4tbGVmdDogMTY7XFxyXFxuXFx0bWFyZ2luLXRvcDogMjA7XFxyXFxufVxcclxcblxcclxcbi5yZWZyZXNoIHtcXHJcXG5cXHRjb2xvcjogI2FjMDBlNjtcXHJcXG59XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPCEtLSA8YXBwLW5hdmlnYXRpb24+PC9hcHAtbmF2aWdhdGlvbj4gLS0+XFxyXFxuPFB1bGxUb1JlZnJlc2ggKHJlZnJlc2gpPVxcXCJyZWZyZXNoTGlzdCgkZXZlbnQpXFxcIiBjbGFzcz1cXFwicmVmcmVzaFxcXCI+XFxyXFxuXFx0PExpc3RWaWV3IFtpdGVtc109XFxcInBvc3RpbmdzXFxcIiAoaXRlbVRhcCk9XFxcIm9uSXRlbVRhcCgkZXZlbnQpXFxcIiAjbGlzdFZpZXcgaWQ9XFxcImxpc3RWaWV3XFxcIj5cXHJcXG5cXHQgICAgPG5nLXRlbXBsYXRlIGxldC1pdGVtPVxcXCJpdGVtXFxcIiBsZXQtaT1cXFwiaW5kZXhcXFwiIGxldC1vZGQ9XFxcIm9kZFxcXCIgbGV0LWV2ZW49XFxcImV2ZW5cXFwiPlxcclxcblxcdCAgICAgICAgPFN0YWNrTGF5b3V0IFtjbGFzcy5vZGRdPVxcXCJvZGRcXFwiIFtjbGFzcy5ldmVuXT1cXFwiZXZlblxcXCIgY2xhc3M9XFxcInBvc3RcXFwiPlxcclxcblxcdCAgICAgICAgXFx0ICA8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XFxcImhvcml6b250YWxcXFwiPlxcclxcblxcdCAgICAgICAgXFx0ICBcXHQ8SW1hZ2UgW3NyY109XFxcIml0ZW0ucHJvZmlsZVNvdXJjZVxcXCIgY2xhc3M9XFxcInByb2ZpbGUtcGljdHVyZVxcXCIgc3RyZXRjaD1cXFwiYXNwZWN0Rml0XFxcIj48L0ltYWdlPlxcclxcblxcdCAgICAgICAgXFx0ICBcXHQ8U3RhY2tMYXlvdXQ+XFxyXFxuXFx0XFx0ICAgICAgICAgICAgICBcXHQ8TGFiZWwgdGV4dFdyYXA9XFxcInRydWVcXFwiIGlkPVxcXCJwb3N0LW5hbWVcXFwiIGNsYXNzPVxcXCJuYW1lLWxhYmVsXFxcIiBbdGV4dF09XFxcIml0ZW0udXNlcm5hbWVcXFwiPjwvTGFiZWw+XFxyXFxuXFx0XFx0ICAgICAgICAgICAgICBcXHQ8TGFiZWwgdGV4dFdyYXA9XFxcInRydWVcXFwiIGlkPVxcXCJwb3N0LWluZm9cXFwiIGNsYXNzPVxcXCJpbmZvLWxhYmVsXFxcIiBbdGV4dF09XFxcIml0ZW0uaW5mb1xcXCI+PC9MYWJlbD5cXHJcXG5cXHRcXHQgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcclxcblxcdCAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXHJcXG5cXHRcXHRcXHRcXHQgIDxJbWFnZSBbc3JjXT1cXFwiaXRlbS5tYXBTb3VyY2VcXFwiIHN0cmV0Y2g9XFxcImFzcGVjdEZpdFxcXCIgY2xhc3M9XFxcInBvc3RpbmctbWFwXFxcIj48L0ltYWdlPlxcclxcblxcdCAgICAgICAgPC9TdGFja0xheW91dD5cXHJcXG5cXHQgICAgPC9uZy10ZW1wbGF0ZT5cXHJcXG5cXHQ8L0xpc3RWaWV3PlxcclxcbjwvUHVsbFRvUmVmcmVzaD5cXHJcXG5cXHJcXG48IS0tXFxyXFxuT3JpZ2luYWwgV2ViIHRlbXBsYXRlOlxcclxcblxcclxcbjxhcHAtbmF2aWdhdGlvbj48L2FwcC1uYXZpZ2F0aW9uPlxcclxcblxcclxcbjxkaXYgY2xhc3M9XFxcInJpZ2h0LWJhY2tncm91bmRcXFwiPlxcclxcblxcdDxkaXYgY2xhc3M9XFxcInVzZXItY2FyZC1yaWdodCBpbmZvXFxcIj5cXHJcXG5cXHRcXHQ8aW1nIHNyYz1cXFwic3JjL2ltZy9zYW1wbGVfcHJvZmlsZS5qcGdcXFwiIGFsdD1cXFwiUHJvZmlsZSBQaG90b1xcXCIgaWQ9XFxcInByb2ZpbGVfcGljXFxcIj5cXHJcXG5cXHRcXHQ8ZGl2IGlkPVxcXCJuYW1lX2luZm9cXFwiPlxcclxcblxcdFxcdFxcdDxoMyBpZD1cXFwidXNlcm5hbWVcXFwiPnt7dXNlci5uYW1lfX08L2gzPlxcclxcblxcdFxcdFxcdDxoMyBpZD1cXFwidXNlcl91bml2ZXJzaXR5XFxcIj5Vbml2ZXJzaXR5IG9mIFZpcmdpbmlhPC9oMz5cXHJcXG5cXHRcXHQ8L2Rpdj5cXHJcXG5cXHRcXHQ8ZGl2IGNsYXNzPVxcXCJ1c2VyU3RhdHNcXFwiPlxcclxcblxcdFxcdFxcdDxzcGFuIGlkPVxcXCJ1c2VyX3JpZGVzX2dpdmVuXFxcIiBjbGFzcz1cXFwidXNlckRhdGFcXFwiPlJpZGVzIEdpdmVuOiA8L3NwYW4+XFxyXFxuXFx0XFx0XFx0PHNwYW4gaWQ9XFxcIm51bV9yaWRlc19naXZlblxcXCI+PC9zcGFuPlxcclxcblxcdFxcdFxcdDxzcGFuIGlkPVxcXCJ1c2VyX3JpZGVzX3JlY2VpdmVkXFxcIiBjbGFzcz1cXFwidXNlckRhdGFcXFwiPlJpZGVzIFJlY2VpdmVkOiA8L3NwYW4+XFxyXFxuXFx0XFx0XFx0PHNwYW4gaWQ9XFxcIm51bV9yaWRlc19yZWNlaXZlZFxcXCI+PC9zcGFuPlxcclxcblxcdFxcdDwvZGl2PlxcclxcblxcdDwvZGl2PlxcclxcbjwvZGl2PlxcclxcbjxkaXYgaWQ9XFxcImhpc3RvcnlcXFwiIGNsYXNzPVxcXCJ0YWJjb250ZW50XFxcIj5cXHJcXG5cXHQ8aDMgYWxpZ249XFxcImNlbnRlclxcXCI+WW91ciBSaWRlczwvaDM+XFxyXFxuXFx0PGRpdiBpZD1cXFwiYmlnZmVlZFxcXCIgKHdpbmRvdzpyZXNpemUpPVxcXCJvblJlc2l6ZSgkZXZlbnQpXFxcIj48L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG4tLT5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVHJhbnNmZXJTZXJ2aWNlIH0gZnJvbSAnLi4vZGF0YXRyYW5zZmVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBQb3N0aW5nU2VydmljZSB9IGZyb20gJy4uL3Bvc3Rpbmcuc2VydmljZSc7XHJcbmltcG9ydCB7IFBvc3RpbmcgfSBmcm9tICcuLi9wb3N0aW5nLm1vZGVsJztcclxuaW1wb3J0IHsgRHluYW1pY0FkZFNlcnZpY2UgfSBmcm9tICcuLi9keW5hbWljLWFkZC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTG9naW5jaGVja1NlcnZpY2UgfSBmcm9tICcuLi9sb2dpbmNoZWNrLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlQXJyYXkgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS1hcnJheSc7XHJcbmltcG9ydCAqIGFzIGZpcmViYXNlIGZyb20gJ25hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2UnO1xyXG5pbXBvcnQgeyBMaXN0VmlldyB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvbGlzdC12aWV3JztcclxuaW1wb3J0IHsgSW1hZ2VTb3VyY2UsIGZyb21GaWxlLCBmcm9tUmVzb3VyY2UsIGZyb21CYXNlNjQsIGZyb21OYXRpdmVTb3VyY2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9pbWFnZS1zb3VyY2VcIjtcclxuaW1wb3J0IHsgRm9sZGVyLCBwYXRoLCBrbm93bkZvbGRlcnMgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9maWxlLXN5c3RlbVwiO1xyXG5pbXBvcnQgeyBDYWNoZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ltYWdlLWNhY2hlXCI7XHJcblxyXG5cclxuY2xhc3MgUG9zdEl0ZW0ge1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIHVzZXJuYW1lOiBTdHJpbmcsIHB1YmxpYyBpbmZvOiBzdHJpbmcsIHB1YmxpYyBwcm9maWxlU291cmNlOiBzdHJpbmcsIHB1YmxpYyBtYXBTb3VyY2U6IHN0cmluZykgeyB9XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLWhpc3RvcnknLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9oaXN0b3J5LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9oaXN0b3J5LmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSGlzdG9yeUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ2xpc3RWaWV3JywgeyBzdGF0aWM6IHRydWUgfSkgbHY6IEVsZW1lbnRSZWY7XHJcbiAgLy91c2VyID0gdGhpcy5sb2dpbmNoZWNrU2VydmljZS5nZXRVc2VyKCk7XHJcbiAgdXNlciA9ICcnO1xyXG4gIG5hbWUgPSBcIkFkYW0gWWVlXCI7XHJcbiAgYmxvY2tzID0gMDtcclxuICBwb3N0aW5ncyA9IG5ldyBPYnNlcnZhYmxlQXJyYXk8UG9zdEl0ZW0+KCk7XHJcbiAgcCA9IFtdO1xyXG4gIGlkcyA9IFtdO1xyXG4gIC8vIGNhY2hlID0gbmV3IENhY2hlKCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbG9naW5jaGVja1NlcnZpY2U6IExvZ2luY2hlY2tTZXJ2aWNlLCBwcml2YXRlIHRyYW5zZmVyU2VydmljZTogVHJhbnNmZXJTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHBvc3RpbmdTZXJ2aWNlOiBQb3N0aW5nU2VydmljZSwgcHJpdmF0ZSBhZGRTZXJ2aWNlOiBEeW5hbWljQWRkU2VydmljZSkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIFx0dGhpcy5sb2dpbmNoZWNrU2VydmljZS5sb2dpbkNoZWNrKCk7XHJcbiAgXHR0aGlzLnVzZXIgPSB0aGlzLmxvZ2luY2hlY2tTZXJ2aWNlLmdldFVzZXIoKVxyXG4gIFx0dGhpcy5sb2FkUG9zdGluZ3MoKTtcclxuICB9XHJcblxyXG4gIGxvYWRQb3N0aW5ncyhhcmdzPW51bGwpIHtcclxuICAgIHRoaXMucG9zdGluZ3Muc3BsaWNlKDApO1xyXG4gICAgdmFyIHBvc3RJZHMgPSBbXTtcclxuICAgIHZhciBwb3N0aW5nc0NvbGxlY3Rpb24gPSBmaXJlYmFzZS5maXJlc3RvcmUuY29sbGVjdGlvbigncG9zdGluZ3MnKTtcclxuICAgIHZhciB1c2Vyc0NvbGxlY3Rpb24gPSBmaXJlYmFzZS5maXJlc3RvcmUuY29sbGVjdGlvbigndXNlcnMnKS5kb2ModGhpcy51c2VyKTtcclxuICAgIHVzZXJzQ29sbGVjdGlvbi5nZXQoKS50aGVuKGRvYyA9PiB7XHJcbiAgICBcdHBvc3RJZHMgPSBkb2MuZGF0YSgpLnBvc3RzO1xyXG4gICAgXHRmb3IodmFyIGkgPSAwOyBpIDwgcG9zdElkcy5sZW5ndGg7IGkrKykge1xyXG4gICAgXHRcdHBvc3RpbmdzQ29sbGVjdGlvbi5kb2MocG9zdElkc1tpXSkuZ2V0KCkudGhlbihkb2MgPT4ge1xyXG4gICAgICAgICAgdGhpcy5jcmVhdGVQb3N0aW5nKGRvYy5kYXRhKCksIGRvYy5pZCk7XHJcbiAgICBcdFx0fSlcclxuICAgIFx0fVxyXG4gICAgXHRpZihhcmdzICE9IG51bGwpIHtcclxuXHQgICAgICAgIHZhciBwdWxsUmVmcmVzaCA9IGFyZ3Mub2JqZWN0O1xyXG5cdCAgICAgICAgcHVsbFJlZnJlc2gucmVmcmVzaGluZyA9IGZhbHNlO1xyXG5cdCAgICB9XHJcblx0ICAgIHZhciBsaXN0VmlldyA9IDxMaXN0Vmlldz4gdGhpcy5sdi5uYXRpdmVFbGVtZW50O1xyXG5cdCAgICBsaXN0Vmlldy5zY3JvbGxUb0luZGV4KHBvc3RJZHMubGVuZ3RoIC0gMSk7XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgY3JlYXRlUG9zdGluZyhkYXRhLCBpZCkge1xyXG4gICAgLy8gdGhpcy5jYWNoZS5wbGFjZWhvbGRlciA9IGZyb21GaWxlKFwifi9pbWcvZ3JheV9iYWNrZ3JvdW5kLmpwZ1wiKTtcclxuICAgIC8vIHRoaXMuY2FjaGUubWF4UmVxdWVzdHMgPSA1O1xyXG4gICAgbGV0IGluZm9fbGFiZWwgPSBcIlwiO1xyXG4gICAgaWYoZGF0YS5jYXBhY2l0eSAhPSBcIi0xXCIpXHJcbiAgICAgIGluZm9fbGFiZWwgPSBcIk9mZmVyaW5nIHJpZGUgbGVhdmluZyBcIiArIGRhdGEuZGF0ZSArIFwiIGZyb20gXCIgKyBkYXRhLnN0YXJ0QWRkcmVzcyArIFwiIHRvIFwiICsgZGF0YS5lbmRBZGRyZXNzICsgXCIgZm9yIFwiICsgZGF0YS5wcmljZTtcclxuICAgIGVsc2VcclxuICAgICAgaW5mb19sYWJlbCA9IFwiUmVxdWVzdGluZyByaWRlIGxlYXZpbmcgXCIgKyBkYXRhLmRhdGUgKyBcIiBmcm9tIFwiICsgZGF0YS5zdGFydEFkZHJlc3MgKyBcIiB0byBcIiArIGRhdGEuZW5kQWRkcmVzcztcclxuICAgIGNvbnN0IHVzZXJzQ29sbGVjdGlvbiA9IGZpcmViYXNlLmZpcmVzdG9yZS5jb2xsZWN0aW9uKCd1c2VycycpO1xyXG4gICAgdXNlcnNDb2xsZWN0aW9uLmRvYyhkYXRhLnVpZCkuZ2V0KCkudGhlbigoZG9jKSA9PiB7XHJcbiAgICAgIGlmKGRvYy5leGlzdHMpIHtcclxuICAgICAgICB2YXIgdXJsID0gZG9jLmRhdGEoKS5wcm9maWxlX3NvdXJjZTtcclxuICAgICAgICAvLyBpZih1cmwuc3Vic3RyaW5nKDAsIDI3KSA9PT0gJ2h0dHBzOi8vZ3JhcGguZmFjZWJvb2suY29tLycpXHJcbiAgICAgICAgLy8gICB1cmwgKz0gJz9oZWlnaHQ9MzAwJztcclxuICAgICAgICB0aGlzLnBvc3RpbmdzLnB1c2gobmV3IFBvc3RJdGVtKGRhdGEudXNlciwgaW5mb19sYWJlbCwgdXJsLCBkYXRhLm1hcF91cmwpKTtcclxuICAgICAgICB0aGlzLnAucHVzaChkYXRhKVxyXG4gICAgICAgIHRoaXMuaWRzLnB1c2goaWQpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICByZWZyZXNoTGlzdChhcmdzKSB7XHJcbiAgICB0aGlzLmxvYWRQb3N0aW5ncyhhcmdzKTtcclxuICB9XHJcblxyXG4gIC8vIGFkZENhY2hlKHVybCkge1xyXG4gIC8vICAgbGV0IGNhY2hlZEltYWdlU291cmNlO1xyXG4gIC8vICAgY29uc3QgbXlJbWFnZSA9IHRoaXMuY2FjaGUuZ2V0KHVybCk7XHJcbiAgLy8gICBpZiAobXlJbWFnZSkge1xyXG4gIC8vICAgICAgIC8vIElmIHByZXNlbnQgLS0gdXNlIGl0LlxyXG4gIC8vICAgICAgIGNhY2hlZEltYWdlU291cmNlID0gZnJvbU5hdGl2ZVNvdXJjZShteUltYWdlKTtcclxuICAvLyAgICAgICByZXR1cm4gY2FjaGVkSW1hZ2VTb3VyY2U7XHJcbiAgLy8gICB9IGVsc2Uge1xyXG4gIC8vICAgICAgIC8vIElmIG5vdCBwcmVzZW50IC0tIHJlcXVlc3QgaXRzIGRvd25sb2FkICsgcHV0IGl0IGluIHRoZSBjYWNoZS5cclxuICAvLyAgICAgICB0aGlzLmNhY2hlLnB1c2goe1xyXG4gIC8vICAgICAgICAgICBrZXk6IHVybCxcclxuICAvLyAgICAgICAgICAgdXJsOiB1cmwsXHJcbiAgLy8gICAgICAgICAgIGNvbXBsZXRlZDogKGltYWdlLCBrZXkpID0+IHtcclxuICAvLyAgICAgICAgICAgICAgIGlmICh1cmwgPT09IGtleSkge1xyXG4gIC8vICAgICAgICAgICAgICAgICAgIGNhY2hlZEltYWdlU291cmNlID0gZnJvbU5hdGl2ZVNvdXJjZShpbWFnZSk7XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgcmV0dXJuIGNhY2hlZEltYWdlU291cmNlO1xyXG4gIC8vICAgICAgICAgICAgICAgfVxyXG4gIC8vICAgICAgICAgICB9XHJcbiAgLy8gICAgICAgfSk7XHJcbiAgLy8gICB9XHJcbiAgLy8gfVxyXG5cclxuICBvbkl0ZW1UYXAoYXJncykge1xyXG4gICAgdGhpcy50cmFuc2ZlclNlcnZpY2Uuc2V0RGF0YSh7XHJcbiAgICAgIHBvc3RJbmZvOiB7aWQ6IHRoaXMuaWRzW2FyZ3MuaW5kZXhdLCBkYXRhOiB0aGlzLnBbYXJncy5pbmRleF19LFxyXG4gICAgICBwb3N0SXRlbTogdGhpcy5wb3N0aW5ncy5nZXRJdGVtKGFyZ3MuaW5kZXgpXHJcbiAgICB9KVxyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydwb3N0aW5nLWluZm8nXSlcclxuICB9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbYXBwSG9tZV0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIb21lRGlyZWN0aXZlIHtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi8qXFxyXFxuQWRkIHlvdXIgTmF0aXZlU2NyaXB0IHNwZWNpZmljIHN0eWxlcyBoZXJlLlxcclxcblRvIGxlYXJuIG1vcmUgYWJvdXQgc3R5bGluZyBpbiBOYXRpdmVTY3JpcHQgc2VlOlxcclxcbmh0dHBzOi8vZG9jcy5uYXRpdmVzY3JpcHQub3JnL2FuZ3VsYXIvdWkvc3R5bGluZ1xcclxcbiovXFxyXFxuLnJlZnJlc2gge1xcclxcblxcdGNvbG9yOiAjYWMwMGU2O1xcclxcbn1cXHJcXG5cXHJcXG4uYWN0aW9uYmFyIHtcXHJcXG5cXHRmb250LXNpemU6IDIyO1xcclxcblxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuXFx0dGV4dC1hbGlnbjogbGVmdDtcXHJcXG5cXHRjb2xvcjogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5hZGQtYnRuLWNvbnRhaW5lciB7XFxyXFxuXFx0Lypwb3NpdGlvbjogYWJzb2x1dGU7Ki9cXHJcXG5cXHQvKmJvdHRvbTogMDsqL1xcclxcblxcdC8qcmlnaHQ6IDA7Ki9cXHJcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xcclxcblxcdHotaW5kZXg6IDE7XFxyXFxufVxcclxcblxcclxcbi5mYWItYnV0dG9uIHtcXHJcXG4gIGhlaWdodDogNTY7XFxyXFxuICB3aWR0aDogNTY7XFxyXFxuICBtYXJnaW46IDE1O1xcclxcbiAgLyptYXJnaW4tYm90dG9tOiA2NDsqL1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FjMDBlNjtcXHJcXG4gIC8qZmxvYXQ6IHJpZ2h0OyovXFxyXFxuICBob3Jpem9udGFsLWFsaWduOiByaWdodDtcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XFxyXFxufVxcclxcblxcclxcbkxhYmVsIHtcXHJcXG5cXHR0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbn1cXHJcXG5cXHJcXG4ubmFtZS1sYWJlbCB7XFxyXFxuXFx0bWFyZ2luLXRvcDogMTY7XFxyXFxuXFx0bWFyZ2luLWxlZnQ6IDE4O1xcclxcblxcdGNvbG9yOiBibGFjaztcXHJcXG5cXHRmb250LXdlaWdodDogNzAwO1xcclxcblxcdGZvbnQtc2l6ZTogMTc7XFxyXFxufVxcclxcblxcclxcbi5pbmZvLWxhYmVsIHtcXHJcXG5cXHRtYXJnaW4tdG9wOiA0O1xcclxcblxcdG1hcmdpbi1sZWZ0OiAxODtcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiAxNjtcXHJcXG5cXHRjb2xvcjogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5wb3N0IHtcXHJcXG5cXHQvKmJvcmRlci1ib3R0b20td2lkdGg6IDE7Ki9cXHJcXG5cXHRib3JkZXItY29sb3I6ICNmMWYxZjE7XFxyXFxufVxcclxcblxcclxcbi5wb3N0OmhpZ2hsaWdodGVkIHtcXHJcXG5cXHQvKmJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7Ki9cXHJcXG59XFxyXFxuXFxyXFxuLnBvc3RpbmctbWFwIHtcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiAxNjtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAxMDtcXHJcXG5cXHRoZWlnaHQ6IDIyMDtcXHJcXG5cXHR3aWR0aDogMzQwO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvZmlsZS1waWN0dXJlIHtcXHJcXG5cXHRoZWlnaHQ6IDUwO1xcclxcblxcdHdpZHRoOiA1MDtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAxMDAlO1xcclxcblxcdHZlcnRpY2FsLWFsaWduOiB0b3A7XFxyXFxuXFx0bWFyZ2luLWxlZnQ6IDE2O1xcclxcblxcdG1hcmdpbi10b3A6IDIwO1xcclxcbn1cXHJcXG5cXHJcXG4uYWN0aXZpdHktaW5kaWNhdG9yIHtcXHJcXG5cXHRjb2xvcjogI2FjMDBlNjtcXHJcXG59XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPCEtLSA8QWN0aW9uQmFyIHRpdGxlPVxcXCJIb21lXFxcIiBjbGFzcz1cXFwiYWN0aW9uYmFyXFxcIj5cXHJcXG5cXHQ8TmF2aWdhdGlvbkJ1dHRvbiBpb3M6dmlzaWJpbGl0eT1cXFwiY29sbGFwc2VkXFxcIiBpY29uPVxcXCJ+L2ltZy9tZW51LWljb24ucG5nXFxcIiAodGFwKT1cXFwic2hvd1NpZGVEcmF3ZXIoKVxcXCIgPjwvTmF2aWdhdGlvbkJ1dHRvbj5cXHJcXG48QWN0aW9uSXRlbSBhbmRyb2lkOnZpc2liaWxpdHk9XFxcImNvbGxhcHNlZFxcXCIgaWNvbj1cXFwifi9pbWcvbWVudS1pY29uLnBuZ1xcXCIgaW9zLnBvc2l0aW9uPVxcXCJsZWZ0XFxcIiAodGFwKT1cXFwic2hvd1NpZGVEcmF3ZXIoKVxcXCIgPjwvQWN0aW9uSXRlbT5cXHJcXG48L0FjdGlvbkJhcj4gLS0+XFxyXFxuXFxyXFxuICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiYWRkLWJ0bi1jb250YWluZXJcXFwiPlxcclxcblxcdFxcdDxGQUIgKHRhcCk9XFxcInNob3dNb2RhbCgpXFxcIiBpY29uPVxcXCJyZXM6Ly9pY19hZGRfd2hpdGVfM3hcXFwiIHJpcHBsZUNvbG9yPVxcXCIjZjFmMWYxXFxcIiBjbGFzcz1cXFwiZmFiLWJ1dHRvblxcXCI+PC9GQUI+XFxyXFxuXFx0PC9TdGFja0xheW91dD5cXHJcXG5cXHJcXG5cXHQ8UHVsbFRvUmVmcmVzaCAocmVmcmVzaCk9XFxcInJlZnJlc2hMaXN0KCRldmVudClcXFwiIGNsYXNzPVxcXCJyZWZyZXNoXFxcIj5cXHJcXG5cXHRcXHQ8TGlzdFZpZXcgW2l0ZW1zXT1cXFwicG9zdGluZ3NcXFwiIChpdGVtVGFwKT1cXFwib25JdGVtVGFwKCRldmVudClcXFwiICNsaXN0VmlldyBpZD1cXFwibGlzdFZpZXdcXFwiPlxcclxcblxcdFxcdCAgICA8bmctdGVtcGxhdGUgbGV0LWl0ZW09XFxcIml0ZW1cXFwiIGxldC1pPVxcXCJpbmRleFxcXCIgbGV0LW9kZD1cXFwib2RkXFxcIiBsZXQtZXZlbj1cXFwiZXZlblxcXCI+XFxyXFxuXFx0XFx0ICAgICAgICA8U3RhY2tMYXlvdXQgW2NsYXNzLm9kZF09XFxcIm9kZFxcXCIgW2NsYXNzLmV2ZW5dPVxcXCJldmVuXFxcIiBjbGFzcz1cXFwicG9zdFxcXCI+XFxyXFxuXFx0XFx0ICAgICAgICBcXHQgIDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cXFwiaG9yaXpvbnRhbFxcXCI+XFxyXFxuXFx0XFx0ICAgICAgICBcXHQgIFxcdDxJbWFnZSBbc3JjXT1cXFwiaXRlbS5wcm9maWxlU291cmNlXFxcIiBjbGFzcz1cXFwicHJvZmlsZS1waWN0dXJlXFxcIiBzdHJldGNoPVxcXCJhc3BlY3RGaXRcXFwiPjwvSW1hZ2U+XFxyXFxuXFx0XFx0ICAgICAgICBcXHQgIFxcdDxTdGFja0xheW91dD5cXHJcXG5cXHRcXHRcXHQgICAgICAgICAgICAgIFxcdDxMYWJlbCB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgaWQ9XFxcInBvc3QtbmFtZVxcXCIgY2xhc3M9XFxcIm5hbWUtbGFiZWxcXFwiIFt0ZXh0XT1cXFwiaXRlbS51c2VybmFtZVxcXCI+PC9MYWJlbD5cXHJcXG5cXHRcXHRcXHQgICAgICAgICAgICAgIFxcdDxMYWJlbCB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgaWQ9XFxcInBvc3QtaW5mb1xcXCIgY2xhc3M9XFxcImluZm8tbGFiZWxcXFwiIFt0ZXh0XT1cXFwiaXRlbS5pbmZvXFxcIj48L0xhYmVsPlxcclxcblxcdFxcdFxcdCAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxyXFxuXFx0XFx0ICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcclxcblxcdFxcdFxcdFxcdFxcdCAgPEltYWdlIFtzcmNdPVxcXCJpdGVtLm1hcFNvdXJjZVxcXCIgc3RyZXRjaD1cXFwiYXNwZWN0Rml0XFxcIiBjbGFzcz1cXFwicG9zdGluZy1tYXBcXFwiPjwvSW1hZ2U+XFxyXFxuXFx0XFx0ICAgICAgICA8L1N0YWNrTGF5b3V0PlxcclxcblxcdFxcdCAgICA8L25nLXRlbXBsYXRlPlxcclxcblxcdFxcdDwvTGlzdFZpZXc+XFxyXFxuXFx0PC9QdWxsVG9SZWZyZXNoPlxcclxcblxcdDxBY3Rpdml0eUluZGljYXRvciAjYWN0aXZpdHlJbmRpY2F0b3IgYnVzeT1cXFwidHJ1ZVxcXCIgd2lkdGg9XFxcIjQwXFxcIiBoZWlnaHQ9XFxcIjQwXFxcIiBjbGFzcz1cXFwiYWN0aXZpdHktaW5kaWNhdG9yXFxcIj5cXHJcXG4gIDwvQWN0aXZpdHlJbmRpY2F0b3I+XCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NvbnRhaW5lclJlZiwgVmlld1JlZiwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGVBcnJheSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlLWFycmF5JztcclxuXHJcbmltcG9ydCB7IFRyYW5zZmVyU2VydmljZSB9IGZyb20gJy4uL2RhdGF0cmFuc2Zlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRHluYW1pY0FkZFNlcnZpY2UgfSBmcm9tICcuLi9keW5hbWljLWFkZC5zZXJ2aWNlLnRucyc7XHJcbmltcG9ydCB7UGFnZX0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZVwiO1xyXG5pbXBvcnQgeyBnZXRGcmFtZUJ5SWQgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZVwiO1xyXG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gJy4uL3VzZXIuc2VydmljZS50bnMnO1xyXG5pbXBvcnQgeyBQb3N0aW5nU2VydmljZSB9IGZyb20gJy4uL3Bvc3Rpbmcuc2VydmljZS50bnMnO1xyXG5pbXBvcnQgeyBNb2RhbERpYWxvZ1NlcnZpY2UgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZGlyZWN0aXZlcy9kaWFsb2dzXCI7XHJcbmltcG9ydCB7IEdvb2dsZU1hcHNTZXJ2aWNlIH0gZnJvbSAnLi4vZ29vZ2xlLW1hcHMuc2VydmljZSc7XHJcbmltcG9ydCAqIGFzIGFwcGxpY2F0aW9uIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCI7XHJcbmltcG9ydCB7IEFjdGl2aXR5SW5kaWNhdG9yIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9hY3Rpdml0eS1pbmRpY2F0b3InO1xyXG5pbXBvcnQgeyBBbmRyb2lkQXBwbGljYXRpb24sIEFuZHJvaWRBY3Rpdml0eUJhY2tQcmVzc2VkRXZlbnREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIjtcclxuaW1wb3J0IHsgaXNBbmRyb2lkIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm1cIjtcclxuaW1wb3J0ICogYXMgZmlyZWJhc2UgZnJvbSAnbmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZSc7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBEYXRlUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5pbXBvcnQgeyBTdGFja0xheW91dCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvc3RhY2stbGF5b3V0XCI7XHJcbmltcG9ydCB7IExpc3RWaWV3IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGlzdC12aWV3XCI7XHJcblxyXG5pbXBvcnQgeyBQb3N0aW5nIH0gZnJvbSAnLi4vcG9zdGluZy5tb2RlbCc7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi91c2VyLm1vZGVsJztcclxuXHJcbmltcG9ydCB7IEFkZE1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi4vYWRkLW1vZGFsL2FkZC1tb2RhbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDYWNoZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ltYWdlLWNhY2hlXCI7XHJcbmltcG9ydCB7IEltYWdlU291cmNlLCBmcm9tRmlsZSwgZnJvbVJlc291cmNlLCBmcm9tQmFzZTY0LCBmcm9tTmF0aXZlU291cmNlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvaW1hZ2Utc291cmNlXCI7XHJcbmltcG9ydCB7IEZvbGRlciwgcGF0aCwga25vd25Gb2xkZXJzIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZmlsZS1zeXN0ZW1cIjtcclxuXHJcbmNsYXNzIFBvc3RJdGVtIHtcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB1c2VybmFtZTogU3RyaW5nLCBwdWJsaWMgaW5mbzogc3RyaW5nLCBwdWJsaWMgcHJvZmlsZVNvdXJjZTogc3RyaW5nLCBwdWJsaWMgbWFwU291cmNlOiBzdHJpbmcpIHsgfVxyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1ob21lJyxcclxuICBwcm92aWRlcnM6IFtEeW5hbWljQWRkU2VydmljZV0sXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2hvbWUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2hvbWUuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIGJsb2NrcyA9IDE7XHJcbiAgcCA6IFBvc3RpbmdbXTtcclxuICBwb3N0aW5ncyA9IG5ldyBPYnNlcnZhYmxlQXJyYXk8UG9zdEl0ZW0+KCk7XHJcbiAgLy8gY2FjaGUgPSBuZXcgQ2FjaGUoKTtcclxuICBcclxuXHJcbiAgQFZpZXdDaGlsZCgnbGlzdFZpZXcnLCB7IHN0YXRpYzogdHJ1ZSB9KSBsdjogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKCdhY3Rpdml0eUluZGljYXRvcicsIHsgc3RhdGljOiB0cnVlIH0pIGFpOiBFbGVtZW50UmVmO1xyXG4gIFxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRyYW5zZmVyU2VydmljZTogVHJhbnNmZXJTZXJ2aWNlLCBwcml2YXRlIGFkZFNlcnZpY2U6IER5bmFtaWNBZGRTZXJ2aWNlLCBwcml2YXRlIHBhZ2U6IFBhZ2UsIFxyXG4gIFx0cHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsIHByaXZhdGUgcG9zdGluZ1NlcnZpY2U6IFBvc3RpbmdTZXJ2aWNlLCBwcml2YXRlIG1vZGFsOiBNb2RhbERpYWxvZ1NlcnZpY2UsIHByaXZhdGUgdmNSZWY6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICBwcml2YXRlIG1hcFNlcnZpY2U6IEdvb2dsZU1hcHNTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSBkYXRlUGlwZTogRGF0ZVBpcGUpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICBcdHRoaXMubG9hZFBvc3RpbmdzKCk7XHJcbiAgfVxyXG5cclxuICBvbkJhY2tCdXR0b25UYXAoKSB7XHJcbiAgICBhcHBsaWNhdGlvbi5hbmRyb2lkLmZvcmVncm91bmRBY3Rpdml0eS5maW5pc2goKTtcclxuICB9XHJcblxyXG4gIHNob3dNb2RhbCgpIHtcclxuICAgICAgICBsZXQgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgY29udGV4dDoge30sXHJcbiAgICAgICAgICAgIGZ1bGxzY3JlZW46IHRydWUsXHJcbiAgICAgICAgICAgIHZpZXdDb250YWluZXJSZWY6IHRoaXMudmNSZWZcclxuICAgICAgICAgICAgLy8gYW5pbWF0ZWQ6IHRydWUsXHJcbiAgICAgICAgICAgIC8vIHRyYW5zaXRpb246IHsgbmFtZTogXCJzbGlkZVRvcFwiIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMubW9kYWwuc2hvd01vZGFsKEFkZE1vZGFsQ29tcG9uZW50LCBvcHRpb25zKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgICAgIGlmKHJlcyA9PSAncG9zdGVkJylcclxuICAgICAgICAgICAgICB0aGlzLmxvYWRQb3N0aW5ncygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIHNob3dTaWRlRHJhd2VyKCkge1xyXG4gIFx0Ly9jb25zdCBkcmF3ZXIgPSA8UmFkU2lkZURyYXdlcj50aGlzLnNkLm5hdGl2ZVZpZXc7XHJcbiAgXHQvL2NvbnNvbGUuZGlyKGRyYXdlcik7XHJcbiAgXHQvL2NvbnNvbGUuZGlyKHRoaXMucGFnZSk7XHJcbiAgXHQvLyBkcmF3ZXIuc2hvd0RyYXdlcigpO1xyXG5cclxuICB9XHJcblxyXG4gIGxvYWRQb3N0aW5ncyhhcmdzPW51bGwpIHtcclxuICAgIC8vIGxldCBsYXlvdXQgPSA8U3RhY2tMYXlvdXQ+dGhpcy5wYWdlLmdldFZpZXdCeUlkKCdmZWVkJyk7XHJcbiAgICAvLyBsYXlvdXQucmVtb3ZlQ2hpbGRyZW4oKTtcclxuICAgIC8vIHRoaXMuY2FjaGUucGxhY2Vob2xkZXIgPSBmcm9tRmlsZShcIn4vaW1nL2dyYXlfYmFja2dyb3VuZC5qcGdcIik7XHJcbiAgICAvLyB0aGlzLmNhY2hlLm1heFJlcXVlc3RzID0gNTtcclxuXHJcbiAgICB0aGlzLnBvc3RpbmdzLnNwbGljZSgwKTtcclxuICAgIGxldCBhY3Rpdml0eUluZGljYXRvciA9IDxBY3Rpdml0eUluZGljYXRvcj4gdGhpcy5haS5uYXRpdmVFbGVtZW50O1xyXG4gICAgYWN0aXZpdHlJbmRpY2F0b3IuYnVzeSA9IHRydWU7XHJcblxyXG4gICAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xyXG5cclxuICAgIHZhciBwb3N0cyA9IFtdO1xyXG4gICAgdmFyIHBvc3RpbmdzQ29sbGVjdGlvbiA9IGZpcmViYXNlLmZpcmVzdG9yZS5jb2xsZWN0aW9uKCdwb3N0aW5ncycpO1xyXG4gICAgY29uc3QgcXVlcnkgPSBwb3N0aW5nc0NvbGxlY3Rpb24ud2hlcmUoJ2Zvcm1hdHRlZERhdGUnLCAnPj0nLCB0aGlzLmRhdGVQaXBlLnRyYW5zZm9ybShjdXJyZW50RGF0ZSwgJ3l5eXktTU0tZGQnKSlcclxuICAgIHF1ZXJ5Lm9yZGVyQnkoJ2Zvcm1hdHRlZERhdGUnLCAnYXNjJykuZ2V0KCkudGhlbihxdWVyeVNuYXBzaG90ID0+IHtcclxuICAgICAgcXVlcnlTbmFwc2hvdC5mb3JFYWNoKGRvYyA9PiB7XHJcbiAgICAgICAgcG9zdHMucHVzaCh7XHJcbiAgICAgICAgICBpZDogZG9jLmlkLFxyXG4gICAgICAgICAgZGF0YTogZG9jLmRhdGEoKVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLnAgPSBwb3N0cztcclxuICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHBvc3RzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdGhpcy5wb3N0aW5ncy5wdXNoKG5ldyBQb3N0SXRlbShwb3N0c1tpXS51c2VyLCAnJywgJycsICd+L2ltZy9ncmF5X2JhY2tncm91bmQuanBnJykpO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlUG9zdGluZyhwb3N0c1tpXS5kYXRhLCBpKTtcclxuICAgICAgfVxyXG4gICAgICBhY3Rpdml0eUluZGljYXRvci5idXN5ID0gZmFsc2U7XHJcbiAgICAgIGlmKGFyZ3MgIT0gbnVsbClcclxuICAgICAge1xyXG4gICAgICAgIHZhciBwdWxsUmVmcmVzaCA9IGFyZ3Mub2JqZWN0O1xyXG4gICAgICAgIHB1bGxSZWZyZXNoLnJlZnJlc2hpbmcgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gIH1cclxuXHJcbiAvLyAgY3JlYXRlUG9zdGluZyhpZCwgdXNlciwgc3RhcnRhZHIsIGVuZGFkciwgZGF0ZSwgY29zdCwgY2FwYWNpdHksIGNvbW1lbnRzKSB7XHJcblx0Ly8gXHR0aGlzLnRyYW5zZmVyU2VydmljZS5zZXREYXRhKFt7XCJpbmRleFwiOiB0aGlzLmJsb2NrcywgXCJpZFwiOiBpZCwgXCJ1c2VyXCI6IHVzZXIsIFwic3RhcnRhZHJcIjogc3RhcnRhZHIsIFwiZW5kYWRyXCI6IGVuZGFkciwgXCJkYXRlXCI6IGRhdGUsIFwiY29zdFwiOiBjb3N0LCBcImNhcGFjaXR5XCI6IGNhcGFjaXR5LCBcImNvbW1lbnRzXCI6IGNvbW1lbnRzLCBcImJ1dHRvblR5cGVcIjogXCJDb25uZWN0XCJ9XSk7XHJcblx0Ly8gXHR0aGlzLmFkZFNlcnZpY2UuYXBwZW5kQ29tcG9uZW50VG9Cb2R5KHRoaXMucGFnZS5nZXRWaWV3QnlJZCgnZmVlZCcpKTtcclxuXHQvLyAgIHRoaXMuYmxvY2tzKys7XHJcblx0Ly8gfVxyXG5cclxuICBjcmVhdGVQb3N0aW5nKGRhdGEsIGk6IG51bWJlcikge1xyXG4gICAgbGV0IGluZm9fbGFiZWwgPSBcIlwiO1xyXG4gICAgLy8gdGhpcy5jcmVhdGVQb3N0aW5nKHRoaXMucFtpXS5faWQsIHRoaXMucFtpXS51c2VyLCB0aGlzLnBbaV0uc3RhcnRhZHIsIHRoaXMucFtpXS5lbmRhZHIsIHRoaXMucFtpXS5kYXRlLCB0aGlzLnBbaV0uY29zdCwgdGhpcy5wW2ldLmNhcGFjaXR5LCB0aGlzLnBbaV0uY29tbWVudHMpO1xyXG4gICAgaWYoZGF0YS5jYXBhY2l0eSAhPSBcIi0xXCIpXHJcbiAgICAgIGluZm9fbGFiZWwgPSBcIk9mZmVyaW5nIHJpZGUgbGVhdmluZyBcIiArIGRhdGEuZGF0ZSArIFwiIGZyb20gXCIgKyBkYXRhLnN0YXJ0QWRkcmVzcyArIFwiIHRvIFwiICsgZGF0YS5lbmRBZGRyZXNzICsgXCIgZm9yIFwiICsgZGF0YS5wcmljZTtcclxuICAgIGVsc2VcclxuICAgICAgaW5mb19sYWJlbCA9IFwiUmVxdWVzdGluZyByaWRlIGxlYXZpbmcgXCIgKyBkYXRhLmRhdGUgKyBcIiBmcm9tIFwiICsgZGF0YS5zdGFydEFkZHJlc3MgKyBcIiB0byBcIiArIGRhdGEuZW5kQWRkcmVzcztcclxuICAgIGNvbnN0IHVzZXJzQ29sbGVjdGlvbiA9IGZpcmViYXNlLmZpcmVzdG9yZS5jb2xsZWN0aW9uKCd1c2VycycpO1xyXG4gICAgdXNlcnNDb2xsZWN0aW9uLmRvYyhkYXRhLnVpZCkuZ2V0KCkudGhlbigoZG9jKSA9PiB7XHJcbiAgICAgIGlmKGRvYy5leGlzdHMpIHtcclxuICAgICAgICB2YXIgdXJsID0gZG9jLmRhdGEoKS5wcm9maWxlX3NvdXJjZTtcclxuICAgICAgICAvLyBpZih1cmwuc3Vic3RyaW5nKDAsIDI3KSA9PT0gJ2h0dHBzOi8vZ3JhcGguZmFjZWJvb2suY29tLycpXHJcbiAgICAgICAgLy8gICB1cmwgKz0gJz9oZWlnaHQ9MzAwJztcclxuICAgICAgICAvLyB2YXIgbWFwVXJsID0gdGhpcy5tYXBTZXJ2aWNlLmdldFN0YXRpY01hcChkYXRhLnN0YXJ0QWRkcmVzcyArIFwiIFwiICsgZGF0YS5zdGFydEZvcm1hdHRlZCwgZGF0YS5lbmRBZGRyZXNzICsgXCIgXCIgKyBkYXRhLmVuZEZvcm1hdHRlZCk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2cobWFwVXJsKVxyXG4gICAgICAgIC8vIHRoaXMuYWRkQ2FjaGUodXJsLCAncGZwJywgZGF0YS51c2VyLCBpbmZvX2xhYmVsLCB1cmwsIGRhdGEubWFwX3VybCwgaSkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgLy8gICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgLy8gICB0aGlzLmFkZENhY2hlKGRhdGEubWFwX3VybCwgJ21hcCcsIGRhdGEudXNlciwgaW5mb19sYWJlbCwgdXJsLCBkYXRhLm1hcF91cmwsIGkpLnRoZW4oKHJlcykgPT57XHJcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgICAvLyAgIH0pXHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgdGhpcy5wb3N0aW5ncy5zZXRJdGVtKGksIG5ldyBQb3N0SXRlbShkYXRhLnVzZXIsIGluZm9fbGFiZWwsIHVybCwgZGF0YS5tYXBfdXJsKSk7XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICAvLyBhZGRDYWNoZSh1cmwsIGltZ190eXBlLCB1c2VyLCBpbmZvLCBwZnBfdXJsLCBtYXBfdXJsLCBpKSB7XHJcbiAgLy8gICByZXR1cm4gbmV3IFByb21pc2U8YW55PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgLy8gICAgIGxldCBjYWNoZWRJbWFnZVNvdXJjZTtcclxuICAvLyAgICAgY29uc3QgbXlJbWFnZSA9IHRoaXMuY2FjaGUuZ2V0KHVybCk7XHJcbiAgLy8gICAgIGlmIChteUltYWdlKSB7XHJcbiAgLy8gICAgICAgLy8gSWYgcHJlc2VudCAtLSB1c2UgaXQuXHJcbiAgLy8gICAgICAgY2FjaGVkSW1hZ2VTb3VyY2UgPSBmcm9tTmF0aXZlU291cmNlKG15SW1hZ2UpO1xyXG4gIC8vICAgICAgIGNvbnNvbGUubG9nKG15SW1hZ2UpXHJcbiAgLy8gICAgICAgaWYoaW1nX3R5cGUgPT09ICdwZnAnKVxyXG4gIC8vICAgICAgICAgdGhpcy5wb3N0aW5ncy5zZXRJdGVtKGksIG5ldyBQb3N0SXRlbSh1c2VyLCBpbmZvLCBjYWNoZWRJbWFnZVNvdXJjZSwgbWFwX3VybCkpO1xyXG4gIC8vICAgICAgIGVsc2UgaWYgKGltZ190eXBlID09PSAnbWFwJylcclxuICAvLyAgICAgICAgIHRoaXMucG9zdGluZ3Muc2V0SXRlbShpLCBuZXcgUG9zdEl0ZW0odXNlciwgaW5mbywgdGhpcy5wb3N0aW5ncy5nZXRJdGVtKGkpLnByb2ZpbGVTb3VyY2UsIGNhY2hlZEltYWdlU291cmNlKSk7XHJcbiAgLy8gICAgICAgcmVzb2x2ZSh7bWVzc2FnZTogJ1JldHJpZXZlZCBmcm9tIGNhY2hlJywgY2FjaGVVUkw6IGNhY2hlZEltYWdlU291cmNlfSk7XHJcbiAgLy8gICAgIH0gXHJcbiAgLy8gICAgIGVsc2Uge1xyXG4gIC8vICAgICAgIC8vIElmIG5vdCBwcmVzZW50IC0tIHJlcXVlc3QgaXRzIGRvd25sb2FkICsgcHV0IGl0IGluIHRoZSBjYWNoZS5cclxuICAvLyAgICAgICB0aGlzLmNhY2hlLnB1c2goe1xyXG4gIC8vICAgICAgICAgICBrZXk6IHVybCxcclxuICAvLyAgICAgICAgICAgdXJsOiB1cmwsXHJcbiAgLy8gICAgICAgICAgIGNvbXBsZXRlZDogKGltYWdlLCBrZXkpID0+IHtcclxuICAvLyAgICAgICAgICAgICAgIGlmICh1cmwgPT09IGtleSkge1xyXG4gIC8vICAgICAgICAgICAgICAgICAgIGNhY2hlZEltYWdlU291cmNlID0gZnJvbU5hdGl2ZVNvdXJjZShpbWFnZSk7XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgaWYoaW1nX3R5cGUgPT09ICdwZnAnKVxyXG4gIC8vICAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3N0aW5ncy5zZXRJdGVtKGksIG5ldyBQb3N0SXRlbSh1c2VyLCBpbmZvLCBjYWNoZWRJbWFnZVNvdXJjZSwgbWFwX3VybCkpO1xyXG4gIC8vICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGltZ190eXBlID09PSAnbWFwJylcclxuICAvLyAgICAgICAgICAgICAgICAgICAgIHRoaXMucG9zdGluZ3Muc2V0SXRlbShpLCBuZXcgUG9zdEl0ZW0odXNlciwgaW5mbywgdGhpcy5wb3N0aW5ncy5nZXRJdGVtKGkpLnByb2ZpbGVTb3VyY2UsIGNhY2hlZEltYWdlU291cmNlKSk7XHJcbiAgLy8gICAgICAgICAgICAgICB9XHJcbiAgLy8gICAgICAgICAgICAgICByZXNvbHZlKHttZXNzYWdlOiAnQWRkZWQgdG8gY2FjaGUnLCBjYWNoZVVSTDogY2FjaGVkSW1hZ2VTb3VyY2V9KTtcclxuICAvLyAgICAgICAgICAgfVxyXG4gIC8vICAgICAgIH0pO1xyXG4gIC8vICAgICB9XHJcbiAgLy8gICB9KVxyXG4gIC8vIH1cclxuXHJcbiAgcmVmcmVzaExpc3QoYXJncykge1xyXG4gICAgdGhpcy5sb2FkUG9zdGluZ3MoYXJncyk7XHJcbiAgfVxyXG5cclxuICBvbkl0ZW1UYXAoYXJncykge1xyXG4gICAgY29uc29sZS5sb2codGhpcy5wb3N0aW5ncy5nZXRJdGVtKGFyZ3MuaW5kZXgpKTtcclxuICAgIHRoaXMudHJhbnNmZXJTZXJ2aWNlLnNldERhdGEoe1xyXG4gICAgICBwb3N0SW5mbzogdGhpcy5wW2FyZ3MuaW5kZXhdLFxyXG4gICAgICBwb3N0SXRlbTogdGhpcy5wb3N0aW5ncy5nZXRJdGVtKGFyZ3MuaW5kZXgpXHJcbiAgICB9KVxyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydwb3N0aW5nLWluZm8nXSlcclxuICB9XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi8qIEFkZCBtb2JpbGUgc3R5bGVzIGZvciB0aGUgY29tcG9uZW50IGhlcmUuICAqL1xcclxcbi5jbG9zZSB7XFxyXFxuXFx0bWFyZ2luOiAxMDtcXHJcXG5cXHRmb250LXNpemU6IDI4O1xcclxcblxcdHdpZHRoOiA0ODtcXHJcXG5cXHRoZWlnaHQ6IDQ4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2UtYnV0dG9uLWNvbnRhaW5lciB7XFxyXFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdGxlZnQ6IDA7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXItbGFiZWwtMiB7XFxyXFxuXFx0Zm9udC1zaXplOiAxNjtcXHJcXG5cXHRtYXJnaW4tdG9wOiAxMjtcXHJcXG5cXHQvKm1hcmdpbi1ib3R0b206IDEyOyovXFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDcwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlci1sYWJlbC0zIHtcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiAxMjtcXHJcXG59XFxyXFxuXFxyXFxuLnBvc3Qge1xcclxcblxcdGJvcmRlci1jb2xvcjogI2YxZjFmMTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvc3Q6aGlnaGxpZ2h0ZWQge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XFxyXFxufVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxTY3JvbGxWaWV3PlxcclxcblxcdDxTdGFja0xheW91dCBoZWlnaHQ9XFxcIjEwMCVcXFwiPlxcclxcblxcdFxcdDxTdGFja0xheW91dCBjbGFzcz1cXFwiY2xvc2UtYnV0dG9uLWNvbnRhaW5lclxcXCIgb3JpZW50YXRpb249XFxcImhvcml6b250YWxcXFwiPlxcclxcblxcdFxcdFxcdDxMYWJlbCB0ZXh0PVxcXCImdGltZXM7XFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiICh0YXApPVxcXCJjbG9zZSgpXFxcIj48L0xhYmVsPlxcclxcblxcdFxcdDwvU3RhY2tMYXlvdXQ+XFxyXFxuXFxyXFxuXFx0XFx0PFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJpbnB1dC1maWVsZFxcXCI+XFxyXFxuPCEtLSBcXHRcXHRcXHQ8VGV4dEZpZWxkIGNsYXNzPVxcXCJpbnB1dFxcXCIgYXV0b2NvcnJlY3Q9XFxcImZhbHNlXFxcIiBoaW50PVxcXCJGaW5kIGEgbG9jYXRpb25cXFwiIFsobmdNb2RlbCldPVxcXCJhZGRyZXNzXFxcIiAodGV4dENoYW5nZSk9XFxcImF1dG9jb21wbGV0ZSgpXFxcIiAjc2VhcmNoTGFiZWwgaWQ9XFxcInNlYXJjaExhYmVsXFxcIiByZXF1aXJlZD48L1RleHRGaWVsZD4gLS0+XFxyXFxuXFx0XFx0XFx0PFNlYXJjaEJhciBoaW50PVxcXCJGaW5kIGEgbG9jYXRpb25cXFwiIFt0ZXh0XT1cXFwiYWRkcmVzc1xcXCIgKHRleHRDaGFuZ2UpPVxcXCJzZWFyY2goJGV2ZW50KVxcXCI+PC9TZWFyY2hCYXI+XFxyXFxuXFx0XFx0XFx0PFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJoci1saWdodFxcXCI+PC9TdGFja0xheW91dD5cXHJcXG5cXHRcXHQ8L1N0YWNrTGF5b3V0PlxcclxcblxcclxcblxcdFxcdDxMaXN0VmlldyBbaXRlbXNdPVxcXCJzdWdnZXN0aW9uc1xcXCIgaGVpZ2h0PVxcXCIxMDAlXFxcIj5cXHJcXG5cXHRcXHRcXHQ8bmctdGVtcGxhdGUgbGV0LWl0ZW09XFxcIml0ZW1cXFwiIGxldC1pPVxcXCJpbmRleFxcXCIgbGV0LW9kZD1cXFwib2RkXFxcIiBsZXQtZXZlbj1cXFwiZXZlblxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0PFN0YWNrTGF5b3V0IFtjbGFzcy5vZGRdPVxcXCJvZGRcXFwiIFtjbGFzcy5ldmVuXT1cXFwiZXZlblxcXCIgY2xhc3M9XFxcInBvc3RcXFwiICh0YXApPVxcXCJzZWxlY3RQbGFjZShpdGVtLnBsYWNlU3VnZ2VzdGlvbiwgaXRlbS5wbGFjZUFkZHJlc3MpXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8TGFiZWwgdGV4dFdyYXA9XFxcInRydWVcXFwiIFt0ZXh0XT1cXFwiaXRlbS5wbGFjZVN1Z2dlc3Rpb25cXFwiIGNsYXNzPVxcXCJoZWFkZXItbGFiZWwtMlxcXCI+PC9MYWJlbD5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8TGFiZWwgdGV4dFdyYXA9XFxcInRydWVcXFwiIFt0ZXh0XT1cXFwiaXRlbS5wbGFjZUFkZHJlc3NcXFwiIGNsYXNzPVxcXCJoZWFkZXItbGFiZWwtM1xcXCI+PC9MYWJlbD5cXHJcXG5cXHRcXHRcXHRcXHQ8L1N0YWNrTGF5b3V0PlxcclxcblxcdFxcdFxcdDwvbmctdGVtcGxhdGU+XFxyXFxuXFx0XFx0PC9MaXN0Vmlldz5cXHJcXG5cXHQ8L1N0YWNrTGF5b3V0PlxcclxcbjwvU2Nyb2xsVmlldz5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGxhY2VzQXV0b2NvbXBsZXRlU2VydmljZSB9IGZyb20gJy4uL3BsYWNlcy1hdXRvY29tcGxldGUuc2VydmljZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGVBcnJheSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlLWFycmF5JztcclxuaW1wb3J0IHsgTW9kYWxEaWFsb2dQYXJhbXMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZGlyZWN0aXZlcy9kaWFsb2dzXCI7XHJcbmltcG9ydCB7IFRyYW5zZmVyU2VydmljZSB9IGZyb20gJy4uL2RhdGF0cmFuc2Zlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU2VhcmNoQmFyIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9zZWFyY2gtYmFyJztcclxuXHJcbmNsYXNzIFN1Z2dlc3Rpb24ge1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwbGFjZVN1Z2dlc3Rpb246IHN0cmluZywgcHVibGljIHBsYWNlQWRkcmVzczogc3RyaW5nKSB7fVxyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1sb2NhdGlvbicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2xvY2F0aW9uLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9sb2NhdGlvbi5jb21wb25lbnQuY3NzJ11cclxufSlcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgTG9jYXRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhcmFtczogTW9kYWxEaWFsb2dQYXJhbXMsIHByaXZhdGUgcGxhY2VzU2VydmljZTogUGxhY2VzQXV0b2NvbXBsZXRlU2VydmljZSwgcHJpdmF0ZSB0cmFuc2ZlclNlcnZpY2U6IFRyYW5zZmVyU2VydmljZSkgeyB9XHJcblxyXG4gIEBWaWV3Q2hpbGQoXCJzZWFyY2hMYWJlbFwiLCB7IHN0YXRpYzogdHJ1ZSB9KSBzZWFyY2hMYWJlbDogRWxlbWVudFJlZjtcclxuICBhZGRyZXNzO1xyXG4gIHN1Z2dlc3Rpb25zID0gbmV3IE9ic2VydmFibGVBcnJheTxTdWdnZXN0aW9uPigpO1xyXG4gIHBsYWNlU3VnZ2VzdGlvbnMgPSBuZXcgT2JzZXJ2YWJsZUFycmF5PFN0cmluZz4oKTtcclxuICBwbGFjZUFkZHJlc3NlcyA9IG5ldyBPYnNlcnZhYmxlQXJyYXk8U3RyaW5nPigpO1xyXG4gIHR5cGUgPSB0aGlzLnRyYW5zZmVyU2VydmljZS5nZXREYXRhKCk7XHJcblxyXG4gIGlkcyA9IG5ldyBTZXQoKTtcclxuICBteVRpbWVyO1xyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICBcdC8vIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5zZWFyY2hMYWJlbC5uYXRpdmVFbGVtZW50LmZvY3VzKCksIDEwMCk7XHJcbiAgfVxyXG5cclxuICBjbG9zZSgpIHtcclxuICBcdHRoaXMucGFyYW1zLmNsb3NlQ2FsbGJhY2soKTtcclxuICAgfVxyXG5cclxuICAgc2VsZWN0UGxhY2UocGxhY2UsIGFkZHJlc3MpIHtcclxuICAgXHRpZih0aGlzLnR5cGUgPT0gJ3N0YXJ0JylcclxuICAgXHRcdHRoaXMucGFyYW1zLmNsb3NlQ2FsbGJhY2soeydzdGFydCc6IHBsYWNlLCAnYWRkcmVzcyc6IGFkZHJlc3N9KTtcclxuICAgXHRlbHNlXHJcbiAgIFx0XHR0aGlzLnBhcmFtcy5jbG9zZUNhbGxiYWNrKHsnZW5kJzogcGxhY2UsICdhZGRyZXNzJzogYWRkcmVzc30pO1xyXG4gICB9XHJcblxyXG4gIHNlYXJjaChhcmdzKSB7XHJcbiAgXHRjbGVhckludGVydmFsKHRoaXMubXlUaW1lcik7XHJcbiAgXHR0aGlzLm15VGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICBcdFx0bGV0IHNlYXJjaEJhciA9IDxTZWFyY2hCYXI+IGFyZ3Mub2JqZWN0O1xyXG5cdCAgICB0aGlzLmlkcy5jbGVhcigpO1xyXG5cdCAgICB0aGlzLnN1Z2dlc3Rpb25zLnNwbGljZSgwKTtcclxuXHQgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcblx0ICAgIHRoaXMucGxhY2VzU2VydmljZS5nZXRQbGFjZVJlc3VsdHMoc2VhcmNoQmFyLnRleHQpLnN1YnNjcmliZSgoZGF0YTogYW55KSA9PiB7XHJcblx0XHQgICAgZm9yKHZhciBpID0gMDsgaSA8IGRhdGEucmVzdWx0cy5sZW5ndGg7IGkrKykge1xyXG5cdFx0ICAgICAgXHRpZighdGhpcy5pZHMuaGFzKGRhdGEucmVzdWx0c1tpXS5wbGFjZV9pZCkpXHJcblx0XHQgICAgICBcdFx0dGhpcy5zdWdnZXN0aW9ucy5wdXNoKG5ldyBTdWdnZXN0aW9uKGRhdGEucmVzdWx0c1tpXS5uYW1lLCBkYXRhLnJlc3VsdHNbaV0uZm9ybWF0dGVkX2FkZHJlc3MpKTtcclxuXHRcdCAgICAgIFx0dGhpcy5pZHMuYWRkKGRhdGEucmVzdWx0c1tpXS5wbGFjZV9pZCk7XHJcblx0XHQgICAgfVxyXG5cdFx0ICB9KTtcclxuXHRcdH0sIDEwMCk7XHJcblx0XHR0aGlzLnBsYWNlc1NlcnZpY2UuZ2V0QXV0b2NvbXBsZXRlUmVzdWx0c0FkZHJlc3Moc2VhcmNoQmFyLnRleHQpLnN1YnNjcmliZSgoZGF0YTogYW55KSA9PiB7XHJcblx0XHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkYXRhLnByZWRpY3Rpb25zLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdCAgXHRpZighdGhpcy5pZHMuaGFzKGRhdGEucHJlZGljdGlvbnNbaV0ucGxhY2VfaWQpKVxyXG5cdFx0XHQgIFx0XHR0aGlzLnN1Z2dlc3Rpb25zLnB1c2gobmV3IFN1Z2dlc3Rpb24oZGF0YS5wcmVkaWN0aW9uc1tpXS5zdHJ1Y3R1cmVkX2Zvcm1hdHRpbmcubWFpbl90ZXh0LCBkYXRhLnByZWRpY3Rpb25zW2ldLnN0cnVjdHVyZWRfZm9ybWF0dGluZy5zZWNvbmRhcnlfdGV4dCkpO1xyXG5cdFx0XHQgIFx0dGhpcy5pZHMuYWRkKGRhdGEucHJlZGljdGlvbnNbaV0ucGxhY2VfaWQpO1xyXG5cdFx0ICBcdH1cclxuXHRcdH0pO1xyXG5cdFx0Ly8gdGhpcy5wbGFjZXNTZXJ2aWNlLmdldEF1dG9jb21wbGV0ZVJlc3VsdHNFc3RhYmxpc2htZW50KHNlYXJjaEJhci50ZXh0KS5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4ge1xyXG5cdFx0Ly8gXHQgIGZvcih2YXIgaSA9IDA7IGkgPCBkYXRhLnByZWRpY3Rpb25zLmxlbmd0aDsgaSsrKSB7XHJcblx0XHQvLyAgICAgXHRpZighdGhpcy5pZHMuaGFzKGRhdGEucHJlZGljdGlvbnNbaV0ucGxhY2VfaWQpKVxyXG5cdFx0Ly8gICAgIFx0XHR0aGlzLnN1Z2dlc3Rpb25zLnB1c2gobmV3IFN1Z2dlc3Rpb24oZGF0YS5wcmVkaWN0aW9uc1tpXS5zdHJ1Y3R1cmVkX2Zvcm1hdHRpbmcubWFpbl90ZXh0LCBkYXRhLnByZWRpY3Rpb25zW2ldLnN0cnVjdHVyZWRfZm9ybWF0dGluZy5zZWNvbmRhcnlfdGV4dCkpO1xyXG5cdFx0Ly8gICAgIFx0dGhpcy5pZHMuYWRkKGRhdGEucHJlZGljdGlvbnNbaV0ucGxhY2VfaWQpO1xyXG5cdFx0Ly8gICAgIH1cclxuXHRcdC8vIH0pO1xyXG5cdFx0dGhpcy5wbGFjZXNTZXJ2aWNlLmdldEF1dG9jb21wbGV0ZVJlc3VsdHNDaXR5KHNlYXJjaEJhci50ZXh0KS5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4ge1xyXG5cdFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGF0YS5wcmVkaWN0aW9ucy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHQgIFx0aWYoIXRoaXMuaWRzLmhhcyhkYXRhLnByZWRpY3Rpb25zW2ldLnBsYWNlX2lkKSlcclxuXHRcdFx0ICBcdFx0dGhpcy5zdWdnZXN0aW9ucy5wdXNoKG5ldyBTdWdnZXN0aW9uKGRhdGEucHJlZGljdGlvbnNbaV0uc3RydWN0dXJlZF9mb3JtYXR0aW5nLm1haW5fdGV4dCwgZGF0YS5wcmVkaWN0aW9uc1tpXS5zdHJ1Y3R1cmVkX2Zvcm1hdHRpbmcuc2Vjb25kYXJ5X3RleHQpKTtcclxuXHRcdFx0ICBcdHRoaXMuaWRzLmFkZChkYXRhLnByZWRpY3Rpb25zW2ldLnBsYWNlX2lkKTtcclxuXHRcdCAgXHR9XHJcblx0XHR9KTtcclxuICBcdH0sIDUwMCk7ICBcdFxyXG4gIH1cclxuXHJcbiAgYXV0b2NvbXBsZXRlKCkge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICBcdHRoaXMuaWRzLmNsZWFyKCk7XHJcbiAgICAgIHRoaXMuc3VnZ2VzdGlvbnMuc3BsaWNlKDApO1xyXG4gICAgICB0aGlzLnBsYWNlc1NlcnZpY2UuZ2V0UGxhY2VSZXN1bHRzKHRoaXMuYWRkcmVzcykuc3Vic2NyaWJlKChkYXRhOiBhbnkpID0+IHtcclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgZGF0YS5yZXN1bHRzLmxlbmd0aDsgaSsrKSB7XHJcblx0ICAgICAgXHRpZighdGhpcy5pZHMuaGFzKGRhdGEucmVzdWx0c1tpXS5wbGFjZV9pZCkpXHJcblx0ICAgICAgXHRcdHRoaXMuc3VnZ2VzdGlvbnMucHVzaChuZXcgU3VnZ2VzdGlvbihkYXRhLnJlc3VsdHNbaV0ubmFtZSwgZGF0YS5yZXN1bHRzW2ldLmZvcm1hdHRlZF9hZGRyZXNzKSk7XHJcblx0ICAgICAgXHR0aGlzLmlkcy5hZGQoZGF0YS5yZXN1bHRzW2ldLnBsYWNlX2lkKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuXHQgICAgICB0aGlzLnBsYWNlc1NlcnZpY2UuZ2V0QXV0b2NvbXBsZXRlUmVzdWx0c0FkZHJlc3ModGhpcy5hZGRyZXNzKS5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4ge1xyXG5cdCAgICAgIFx0ICBmb3IodmFyIGkgPSAwOyBpIDwgZGF0YS5wcmVkaWN0aW9ucy5sZW5ndGg7IGkrKykge1xyXG5cdCAgICAgICAgICBcdGlmKCF0aGlzLmlkcy5oYXMoZGF0YS5wcmVkaWN0aW9uc1tpXS5wbGFjZV9pZCkpXHJcblx0ICAgICAgICAgIFx0XHR0aGlzLnN1Z2dlc3Rpb25zLnB1c2gobmV3IFN1Z2dlc3Rpb24oZGF0YS5wcmVkaWN0aW9uc1tpXS5zdHJ1Y3R1cmVkX2Zvcm1hdHRpbmcubWFpbl90ZXh0LCBkYXRhLnByZWRpY3Rpb25zW2ldLnN0cnVjdHVyZWRfZm9ybWF0dGluZy5zZWNvbmRhcnlfdGV4dCkpO1xyXG5cdCAgICAgICAgICBcdHRoaXMuaWRzLmFkZChkYXRhLnByZWRpY3Rpb25zW2ldLnBsYWNlX2lkKTtcclxuXHQgICAgICAgICAgfVxyXG5cdCAgICAgIH0pO1xyXG5cdCAgICAgIC8vIHRoaXMucGxhY2VzU2VydmljZS5nZXRBdXRvY29tcGxldGVSZXN1bHRzRXN0YWJsaXNobWVudCh0aGlzLmFkZHJlc3MpLnN1YnNjcmliZSgoZGF0YTogYW55KSA9PiB7XHJcblx0ICAgICAgLy8gXHQgIGZvcih2YXIgaSA9IDA7IGkgPCBkYXRhLnByZWRpY3Rpb25zLmxlbmd0aDsgaSsrKSB7XHJcblx0ICAgICAgLy8gICAgIFx0aWYoIXRoaXMuaWRzLmhhcyhkYXRhLnByZWRpY3Rpb25zW2ldLnBsYWNlX2lkKSlcclxuXHQgICAgICAvLyAgICAgXHRcdHRoaXMuc3VnZ2VzdGlvbnMucHVzaChuZXcgU3VnZ2VzdGlvbihkYXRhLnByZWRpY3Rpb25zW2ldLnN0cnVjdHVyZWRfZm9ybWF0dGluZy5tYWluX3RleHQsIGRhdGEucHJlZGljdGlvbnNbaV0uc3RydWN0dXJlZF9mb3JtYXR0aW5nLnNlY29uZGFyeV90ZXh0KSk7XHJcblx0ICAgICAgLy8gICAgIFx0dGhpcy5pZHMuYWRkKGRhdGEucHJlZGljdGlvbnNbaV0ucGxhY2VfaWQpO1xyXG5cdCAgICAgIC8vICAgICB9XHJcblx0ICAgICAgLy8gfSk7XHJcblx0ICAgICAgdGhpcy5wbGFjZXNTZXJ2aWNlLmdldEF1dG9jb21wbGV0ZVJlc3VsdHNDaXR5KHRoaXMuYWRkcmVzcykuc3Vic2NyaWJlKChkYXRhOiBhbnkpID0+IHtcclxuXHQgICAgICBcdCAgZm9yKHZhciBpID0gMDsgaSA8IGRhdGEucHJlZGljdGlvbnMubGVuZ3RoOyBpKyspIHtcclxuXHQgICAgICAgICAgXHRpZighdGhpcy5pZHMuaGFzKGRhdGEucHJlZGljdGlvbnNbaV0ucGxhY2VfaWQpKVxyXG5cdCAgICAgICAgICBcdFx0dGhpcy5zdWdnZXN0aW9ucy5wdXNoKG5ldyBTdWdnZXN0aW9uKGRhdGEucHJlZGljdGlvbnNbaV0uc3RydWN0dXJlZF9mb3JtYXR0aW5nLm1haW5fdGV4dCwgZGF0YS5wcmVkaWN0aW9uc1tpXS5zdHJ1Y3R1cmVkX2Zvcm1hdHRpbmcuc2Vjb25kYXJ5X3RleHQpKTtcclxuXHQgICAgICAgICAgXHR0aGlzLmlkcy5hZGQoZGF0YS5wcmVkaWN0aW9uc1tpXS5wbGFjZV9pZCk7XHJcblx0ICAgICAgICAgIH1cclxuXHQgICAgICB9KTtcclxuICAgICAgfSwgMTAwKTtcclxuXHJcbiAgICB9LCA0MDApO1xyXG4gIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1thcHBMb2dpbl0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMb2dpbkRpcmVjdGl2ZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCIvKlxcclxcbkFkZCB5b3VyIE5hdGl2ZVNjcmlwdCBzcGVjaWZpYyBzdHlsZXMgaGVyZS5cXHJcXG5UbyBsZWFybiBtb3JlIGFib3V0IHN0eWxpbmcgaW4gTmF0aXZlU2NyaXB0IHNlZTpcXHJcXG5odHRwczovL2RvY3MubmF0aXZlc2NyaXB0Lm9yZy9hbmd1bGFyL3VpL3N0eWxpbmdcXHJcXG4qL1xcclxcblxcclxcbi5sb2dpbiB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBjb2xvcjogI2FjMDBlNjtcXHJcXG4gICAgLypwYWRkaW5nOiA2cHggMjRweDsqL1xcclxcbiAgICBib3JkZXItd2lkdGg6IDE7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogI2FjMDBlNjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmbG9hdDogY2VudGVyO1xcclxcbiAgICBtYXJnaW46IGF1dG87IFxcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICBmb250LWZhbWlseTogXFxcIlNlZ29lIFVJXFxcIixBcmlhbCxzYW5zLXNlcmlmO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxNTtcXHJcXG4gICAgd2lkdGg6IDEyMDtcXHJcXG4gICAgaGVpZ2h0OiA0MDtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ2luOmhpZ2hsaWdodGVkIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZTZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ2luLWluZm8ge1xcclxcblxcdG1hcmdpbi10b3A6IDEyMDtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWVzY3JlZW4tbG9nbyB7XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTogMjAwO1xcclxcbn1cXHJcXG5cXHJcXG4uaDEge1xcclxcblxcdGZvbnQtc2l6ZTogNTA7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDcwMDtcXHJcXG5cXHRjb2xvcjogI2FjMDBlNjtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ2luLXdyYXBwZXIge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XFxyXFxufVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxTdGFja0xheW91dCBjbGFzcz1cXFwibG9naW4td3JhcHBlclxcXCI+XFxyXFxuICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImxvZ2luLWluZm9cXFwiPlxcclxcbiAgICA8SW1hZ2Ugc3JjPVxcXCJ+L2ltZy9sb2dvLnBuZ1xcXCIgaGVpZ2h0PVxcXCIxODBcXFwiIHdpZHRoPVxcXCIxODBcXFwiIGNsYXNzPVxcXCJob21lc2NyZWVuLWxvZ29cXFwiPjwvSW1hZ2U+XFxyXFxuPCEtLSAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJzbG9nYW5zXFxcIj5cXHJcXG4gICAgICA8TGFiZWwgY2xhc3M9XFxcImgzXFxcIiB0ZXh0PVxcXCJGaW5kIFJpZGVzIEZhc3RcXFwiPjwvTGFiZWw+XFxyXFxuICAgICAgPExhYmVsIGNsYXNzPVxcXCJoM1xcXCIgdGV4dD1cXFwiQ29ubmVjdCB3aXRoIG90aGVyIHN0dWRlbnRzXFxcIj48L0xhYmVsPlxcclxcbiAgICA8L1N0YWNrTGF5b3V0PiAtLT5cXHJcXG4gIDwvU3RhY2tMYXlvdXQ+XFxyXFxuICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImxvZ2luX3dyYXBwZXJcXFwiPlxcclxcbiAgICA8QnV0dG9uIGNsYXNzPVxcXCJsb2dpblxcXCIgKHRhcCk9XFxcInRvTG9nSW4oKVxcXCIgdGV4dD1cXFwiTG9naW5cXFwiPjwvQnV0dG9uPlxcclxcbiAgICA8QnV0dG9uIGNsYXNzPVxcXCJsb2dpblxcXCIgKHRhcCk9XFxcInRvU2lnblVwKClcXFwiIHRleHQ9XFxcIlNpZ24gdXBcXFwiPjwvQnV0dG9uPlxcclxcbiAgPC9TdGFja0xheW91dD5cXHJcXG48L1N0YWNrTGF5b3V0PlxcclxcblxcclxcbjwhLS1cXHJcXG5PcmlnaW5hbCBXZWIgdGVtcGxhdGU6XFxyXFxuXFxyXFxuPGRpdiBjbGFzcz1cXFwiY29udGVudC1yaWdodFxcXCI+XFxyXFxuICA8ZGl2IGNsYXNzPVxcXCJsb2dpbl93cmFwcGVyXFxcIj5cXHJcXG4gICAgICA8aW5wdXQgdHlwZT1cXFwiYnV0dG9uXFxcIiB2YWx1ZT1cXFwiTG9naW5cXFwiIGNsYXNzPVxcXCJsb2dpblxcXCIgKGNsaWNrKT1cXFwidG9Mb2dJbigpXFxcIiAvPlxcclxcbiAgICAgIDxpbnB1dCB0eXBlPVxcXCJidXR0b25cXFwiIHZhbHVlPVxcXCJTaWduIHVwXFxcIiBjbGFzcz1cXFwibG9naW5cXFwiIGlkPVxcXCJsb2dpbjJcXFwiIChjbGljayk9XFxcInRvU2lnblVwKClcXFwiLz5cXHJcXG4gIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcblxcclxcbjxkaXYgY2xhc3M9XFxcImNvbnRlbnQtbGVmdFxcXCI+XFxyXFxuICA8ZGl2IGNsYXNzPVxcXCJsb2dpbl9pbmZvXFxcIj5cXHJcXG4gICAgPGgxPkNvbGxlZ2VQb29sPC9oMT5cXHJcXG4gICAgPGltZyBzcmM9XFxcInNyYy9pbWcvbG9nby5wbmdcXFwiIGFsdD1cXFwiTG9nb1xcXCIgaGVpZ2h0PVxcXCI5MFxcXCIgd2lkdGg9XFxcIjkwXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwic2xvZ2Fuc1xcXCI+XFxyXFxuICAgICAgPGgzPkZpbmQgUmlkZXMgRmFzdDxicj5cXHJcXG4gICAgICBDb25uZWN0IHdpdGggb3RoZXIgc3R1ZGVudHM8L2gzPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gIDwvZGl2PlxcclxcbjwvZGl2Plxcclxcbi0tPlwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XHJcbi8vIGltcG9ydCB7IENvZ25pdG9BdXRoIH0gZnJvbSAnYW1hem9uLWNvZ25pdG8tYXV0aC1qcy9kaXN0L2FtYXpvbi1jb2duaXRvLWF1dGgnO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZVwiO1xyXG4vLyBpbXBvcnQgQXV0aCBmcm9tICdAYXdzLWFtcGxpZnkvYXV0aCc7XHJcbi8vIGNvbnN0IGZpcmViYXNlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIik7XHJcbmltcG9ydCAqIGFzIGZpcmViYXNlIGZyb20gJ25hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2UnO1xyXG4vLyBpbXBvcnQgeyBBbmd1bGFyRmlyZUF1dGggfSBmcm9tICdAYW5ndWxhci9maXJlL2F1dGgnO1xyXG4vLyBpbXBvcnQgeyBhdXRoIH0gZnJvbSAnZmlyZWJhc2UvYXBwJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLWxvZ2luJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbG9naW4uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2xvZ2luLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSBwYWdlOiBQYWdlKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgXHR0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcclxuICAgIHZhciBmaXJlYmFzZUNvbmZpZyA9IHtcclxuICAgICAgYXBpS2V5OiBcIkFJemFTeUJHdWlZcE0xMzhRNmF5cURNUlVWV0pwMUNFOVdCMDlOd1wiLFxyXG4gICAgICBhdXRoRG9tYWluOiBcImNvbGxlZ2Vwb29sLTE1NTI3NDkxMTg2MTcuZmlyZWJhc2VhcHAuY29tXCIsXHJcbiAgICAgIGRhdGFiYXNlVVJMOiBcImh0dHBzOi8vY29sbGVnZXBvb2wtMTU1Mjc0OTExODYxNy5maXJlYmFzZWlvLmNvbVwiLFxyXG4gICAgICBwcm9qZWN0SWQ6IFwiY29sbGVnZXBvb2wtMTU1Mjc0OTExODYxN1wiLFxyXG4gICAgICBzdG9yYWdlQnVja2V0OiBcImNvbGxlZ2Vwb29sLTE1NTI3NDkxMTg2MTcuYXBwc3BvdC5jb21cIixcclxuICAgICAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiMzc1MjYzNjgwMTgzXCIsXHJcbiAgICAgIGFwcElEOiBcImNvbGxlZ2Vwb29sLTE1NTI3NDkxMTg2MTdcIixcclxuICAgIH07XHJcblxyXG4gICAgZmlyZWJhc2UuaW5pdChmaXJlYmFzZUNvbmZpZykudGhlbihcclxuICAgICAgKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZmlyZWJhc2UuaW5pdCBkb25lXCIpO1xyXG4gICAgICB9LFxyXG4gICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYGZpcmViYXNlLmluaXQgZXJyb3I6ICR7ZXJyb3J9YCk7XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgICAvLyBmaXJlYmFzZS5hdXRoKCkuY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkKCdhZG1pbicsICdreXZlcm4xMjMnKS5jYXRjaChmdW5jdGlvbihlcnJvcikge1xyXG4gICAgLy8gICAvLyBIYW5kbGUgRXJyb3JzIGhlcmUuXHJcbiAgICAvLyAgIHZhciBlcnJvckNvZGUgPSBlcnJvci5jb2RlO1xyXG4gICAgLy8gICB2YXIgZXJyb3JNZXNzYWdlID0gZXJyb3IubWVzc2FnZTtcclxuICAgIC8vICAgLy8gLi4uXHJcbiAgICAvLyB9KTtcclxuXHJcbiAgfVxyXG5cclxuICB0b0xvZ0luKCkge1xyXG4gICAgLy8gQXV0aC5zaWduSW4oXCJwaGlsbGltXCIsIFwiQ29sbGVnZXBvb2w2OSpcIilcclxuICAgIC8vIC50aGVuKHVzZXIgPT4ge1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKHVzZXIpXHJcbiAgICAvLyAgICAgY29uc29sZS5sb2coXCJyZWRpcmVjdGluZ1wiKVxyXG5cclxuICAgIC8vIH0pXHJcblxyXG4gICAgdmFyIGNyZWRlbnRpYWxzIDogZmlyZWJhc2UuTG9naW5PcHRpb25zID0ge1xyXG4gICAgICBwYXNzd29yZE9wdGlvbnM6IHtcclxuICAgICAgICBlbWFpbDogJ2FkYW0ueWVlQGdtYWlsLmNvbScsXHJcbiAgICAgICAgcGFzc3dvcmQ6ICdreXZlcm4xMjMnLFxyXG4gICAgICB9LFxyXG4gICAgICB0eXBlOiBmaXJlYmFzZS5Mb2dpblR5cGUuUEFTU1dPUkRcclxuICAgIH1cclxuICAgIGZpcmViYXNlLmxvZ2luKGNyZWRlbnRpYWxzKS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KVxyXG4gICAgZmlyZWJhc2UuZ2V0Q3VycmVudFVzZXIoKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgIH0pXHJcblxyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWyduYXZpZ2F0aW9uJ10pO1xyXG4gIFx0Ly8gd2luZG93LmxvY2F0aW9uLmhyZWY9J2h0dHBzOi8vY29sbGVnZXBvb2xpbmcuYXV0aC51cy1lYXN0LTIuYW1hem9uY29nbml0by5jb20vbG9naW4/cmVzcG9uc2VfdHlwZT10b2tlbiZjbGllbnRfaWQ9NHNzbG1tZ3Y5cG41bGI1MDg3YWFqNXI1OTkmcmVkaXJlY3RfdXJpPWh0dHA6Ly9sb2NhbGhvc3Q6NDIwMC9sb2dpbnJvdXRlJnN0YXRlPVNUQVRFJnNjb3BlPWF3cy5jb2duaXRvLnNpZ25pbi51c2VyLmFkbWluK29wZW5pZCc7XHJcbiAgfVxyXG5cclxuICB0b1NpZ25VcCgpe1xyXG4gICAgZmlyZWJhc2UuY3JlYXRlVXNlcih7XHJcbiAgICAgIGVtYWlsOiAnYWRhbS55ZWVAZ21haWwuY29tJyxcclxuICAgICAgcGFzc3dvcmQ6ICdreXZlcm4xMjMnXHJcbiAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KVxyXG4gICAgLy8gdGhpcy5hZkF1dGguYXV0aC5jcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQoJ2FkYW0ueWVlQGdtYWlsLmNvbScsICdreXZlcm4xMjMnKTtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnbmF2aWdhdGlvbiddKTtcclxuICBcdC8vIHdpbmRvdy5sb2NhdGlvbi5ocmVmPSdodHRwczovL2NvbGxlZ2Vwb29saW5nLmF1dGgudXMtZWFzdC0yLmFtYXpvbmNvZ25pdG8uY29tL3NpZ251cD9yZXNwb25zZV90eXBlPXRva2VuJmNsaWVudF9pZD00c3NsbW1ndjlwbjVsYjUwODdhYWo1cjU5OSZyZWRpcmVjdF91cmk9aHR0cDovL2xvY2FsaG9zdDo0MjAwL2xvZ2lucm91dGUmc3RhdGU9U1RBVEUmc2NvcGU9YXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4rb3BlbmlkJztcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBKd3RIZWxwZXJTZXJ2aWNlIH0gZnJvbSAnQGF1dGgwL2FuZ3VsYXItand0JztcclxuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tICcuL3VzZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuL3VzZXIubW9kZWwnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBQYXltZW50U2VydmljZSB9IGZyb20gJy4vcGF5bWVudC5zZXJ2aWNlJztcclxuaW1wb3J0ICogYXMgZmlyZWJhc2UgZnJvbSAnbmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZSc7XHJcbmltcG9ydCAqIGFzIGFwcFNldHRpbmdzIGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb24tc2V0dGluZ3MnO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIExvZ2luY2hlY2tTZXJ2aWNlIHtcclxuXHQvL215U3RvcmFnZSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2U7XHJcblx0bXlTdG9yYWdlID0gbnVsbDtcclxuXHQvL3VzZXIgZnJvbSBkYXRhYmFzZVxyXG5cdHVzZXI7XHJcblx0Ly9saXN0IG9mIGFsbCB1c2VycyBmcm9tIGRhdGFiYXNlXHJcblx0dXNlcnM7XHJcblx0Ly91c2VyIGluZm8gZnJvbSBjb2duaXRvXHJcblx0dXNlckluZm8gPSBudWxsO1xyXG5cdHVpZDtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSwgcHJpdmF0ZSBwYXltZW50U2VydmljZTogUGF5bWVudFNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zKSB7IH1cclxuXHJcbiAgYWRkVXNlclRvRmlyZXN0b3JlKHVpZCwgYWRkcmVzcywgYmlydGhkYXRlLCBlbWFpbCwgZmlyc3RfbmFtZSwgbGFzdF9uYW1lLCBnZW5kZXIsIHBob25lX251bWJlciwgcmlkZXNfZ2l2ZW4sIHJpZGVzX3JlY2VpdmVkLCBwcm9maWxlX3NvdXJjZSwgdG9rZW4pIHtcclxuICBcdGNvbnN0IHVzZXJzQ29sbGVjdGlvbiA9IGZpcmViYXNlLmZpcmVzdG9yZS5jb2xsZWN0aW9uKCd1c2VycycpO1xyXG4gIFx0dXNlcnNDb2xsZWN0aW9uLmRvYyh1aWQpLnNldCh7XHJcbiAgXHRcdGFkZHJlc3M6IGFkZHJlc3MsXHJcbiAgXHRcdGJpcnRoZGF0ZTogYmlydGhkYXRlLFxyXG4gIFx0XHRlbWFpbDogZW1haWwsXHJcbiAgXHRcdGZpcnN0X25hbWU6IGZpcnN0X25hbWUsXHJcbiAgXHRcdGxhc3RfbmFtZTogbGFzdF9uYW1lLFxyXG4gIFx0XHRnZW5kZXI6IGdlbmRlcixcclxuICBcdFx0cGhvbmVfbnVtYmVyOiBwaG9uZV9udW1iZXIsXHJcbiAgXHRcdHJpZGVzX2dpdmVuOiByaWRlc19naXZlbixcclxuICBcdFx0cmlkZXNfcmVjZWl2ZWQ6IHJpZGVzX3JlY2VpdmVkLFxyXG4gICAgICBwcm9maWxlX3NvdXJjZTogcHJvZmlsZV9zb3VyY2UsXHJcbiAgXHRcdHBvc3RzOiBbXSxcclxuICAgICAgY2hhdHM6IFtdLFxyXG4gICAgICB0b2tlbnM6IFt0b2tlbl1cclxuICBcdH0pO1xyXG4gIH1cclxuXHJcbiAgZGVjb2RlVG9rZW4odG9rZW4pIHtcclxuXHJcbiAgfVxyXG5cclxuICBjaGVja1VzZXIoKSB7XHJcblxyXG4gIH1cclxuXHJcbiAgY2xlYXJJbmZvKCkge1xyXG4gIFx0dGhpcy51c2VyID0gbnVsbDtcclxuICBcdHRoaXMudXNlckluZm8gPSBudWxsO1xyXG4gIFx0dGhpcy51c2VycyA9IG51bGw7XHJcbiAgXHR0aGlzLnVpZCA9IG51bGw7XHJcbiAgXHRhcHBTZXR0aW5ncy5jbGVhcigpO1xyXG4gIH1cclxuICBcclxuICBhZGRVc2VyVG9CcmFpbnRyZWUodXNlcm5hbWUsIG5hbWUsIGVtYWlsKSB7XHJcbiAgXHR0aGlzLnBheW1lbnRTZXJ2aWNlLmFkZFBheW1lbnRVc2VyKHRoaXMudWlkLCB1c2VybmFtZSwgbmFtZSwgZW1haWwpLnN1YnNjcmliZSgoZGF0YTogYW55KSA9PiB7XHJcbiAgXHRcdGZpcmViYXNlLmZpcmVzdG9yZS5jb2xsZWN0aW9uKCd1c2VycycpLmRvYyh0aGlzLnVpZCkudXBkYXRlKHtcclxuICBcdFx0XHRwYXltZW50X2lkOiBkYXRhLmN1c3RvbWVyLmlkXHJcbiAgXHRcdH0pXHJcbiAgXHR9KVxyXG4gIFx0Ly8gdGhpcy5wYXltZW50U2VydmljZS5nZXRQYXltZW50VXNlckJ5SWQoJzI1ODcwMzk1NicpLnN1YnNjcmliZSgoZGF0YTogYW55KSA9PiB7XHJcbiAgXHQvLyBcdGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gIFx0Ly8gfSlcclxuICBcdGNvbnNvbGUubG9nKCdhZGRlZCB0byBicmFpbnRyZWUnKTtcclxuICB9XHJcblxyXG4gIGxvZ2luVXNlcih1aWQpIHtcclxuICBcdGFwcFNldHRpbmdzLnNldFN0cmluZyhcInVpZFwiLCB1aWQpO1xyXG4gIFx0Y29uc29sZS5sb2codWlkKVxyXG4gIFx0dGhpcy51aWQgPSB1aWQ7XHJcbiAgfVxyXG5cclxuICBsb2dpbkNoZWNrKCkge1xyXG5cdGlmKHRoaXMuZ2V0VXNlciA9PSBudWxsKVxyXG5cdFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUoWyd3ZWxjb21lJ10sIHtjbGVhckhpc3Rvcnk6IHRydWV9KVxyXG4gIH1cclxuXHJcbiAgZ2V0VXNlckZyb21Mb2NhbFN0b3JhZ2UoKSB7XHJcblx0cmV0dXJuIGFwcFNldHRpbmdzLmdldFN0cmluZyhcInVpZFwiKTtcclxuICB9XHJcblxyXG4gIGdldFVzZXIoKSB7XHJcblx0dGhpcy51aWQgPSB0aGlzLmdldFVzZXJGcm9tTG9jYWxTdG9yYWdlKCk7XHJcblx0cmV0dXJuIHRoaXMudWlkO1xyXG4gIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBKd3RIZWxwZXJTZXJ2aWNlIH0gZnJvbSAnQGF1dGgwL2FuZ3VsYXItand0JztcclxuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tICcuL3VzZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuL3VzZXIubW9kZWwnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBQYXltZW50U2VydmljZSB9IGZyb20gJy4vcGF5bWVudC5zZXJ2aWNlJztcclxuaW1wb3J0ICogYXMgZmlyZWJhc2UgZnJvbSAnbmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZSc7XHJcbmltcG9ydCAqIGFzIGFwcFNldHRpbmdzIGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb24tc2V0dGluZ3MnO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIExvZ2luY2hlY2tTZXJ2aWNlIHtcclxuXHQvL215U3RvcmFnZSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2U7XHJcblx0bXlTdG9yYWdlID0gbnVsbDtcclxuXHQvL3VzZXIgZnJvbSBkYXRhYmFzZVxyXG5cdHVzZXI7XHJcblx0Ly9saXN0IG9mIGFsbCB1c2VycyBmcm9tIGRhdGFiYXNlXHJcblx0dXNlcnM7XHJcblx0Ly91c2VyIGluZm8gZnJvbSBjb2duaXRvXHJcblx0dXNlckluZm8gPSBudWxsO1xyXG5cdHVpZDtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSwgcHJpdmF0ZSBwYXltZW50U2VydmljZTogUGF5bWVudFNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zKSB7IH1cclxuXHJcbiAgYWRkVXNlclRvRmlyZXN0b3JlKHVpZCwgYWRkcmVzcywgYmlydGhkYXRlLCBlbWFpbCwgZmlyc3RfbmFtZSwgbGFzdF9uYW1lLCBnZW5kZXIsIHBob25lX251bWJlciwgcmlkZXNfZ2l2ZW4sIHJpZGVzX3JlY2VpdmVkLCBwcm9maWxlX3NvdXJjZSwgdG9rZW4pIHtcclxuICBcdGNvbnN0IHVzZXJzQ29sbGVjdGlvbiA9IGZpcmViYXNlLmZpcmVzdG9yZS5jb2xsZWN0aW9uKCd1c2VycycpO1xyXG4gIFx0dXNlcnNDb2xsZWN0aW9uLmRvYyh1aWQpLnNldCh7XHJcbiAgXHRcdGFkZHJlc3M6IGFkZHJlc3MsXHJcbiAgXHRcdGJpcnRoZGF0ZTogYmlydGhkYXRlLFxyXG4gIFx0XHRlbWFpbDogZW1haWwsXHJcbiAgXHRcdGZpcnN0X25hbWU6IGZpcnN0X25hbWUsXHJcbiAgXHRcdGxhc3RfbmFtZTogbGFzdF9uYW1lLFxyXG4gIFx0XHRnZW5kZXI6IGdlbmRlcixcclxuICBcdFx0cGhvbmVfbnVtYmVyOiBwaG9uZV9udW1iZXIsXHJcbiAgXHRcdHJpZGVzX2dpdmVuOiByaWRlc19naXZlbixcclxuICBcdFx0cmlkZXNfcmVjZWl2ZWQ6IHJpZGVzX3JlY2VpdmVkLFxyXG4gICAgICBwcm9maWxlX3NvdXJjZTogcHJvZmlsZV9zb3VyY2UsXHJcbiAgXHRcdHBvc3RzOiBbXSxcclxuICAgICAgY2hhdHM6IFtdLFxyXG4gICAgICB0b2tlbnM6IFt0b2tlbl1cclxuICBcdH0pO1xyXG4gIH1cclxuXHJcbiAgZGVjb2RlVG9rZW4odG9rZW4pIHtcclxuXHJcbiAgfVxyXG5cclxuICBjaGVja1VzZXIoKSB7XHJcblxyXG4gIH1cclxuXHJcbiAgY2xlYXJJbmZvKCkge1xyXG4gIFx0dGhpcy51c2VyID0gbnVsbDtcclxuICBcdHRoaXMudXNlckluZm8gPSBudWxsO1xyXG4gIFx0dGhpcy51c2VycyA9IG51bGw7XHJcbiAgXHR0aGlzLnVpZCA9IG51bGw7XHJcbiAgXHRhcHBTZXR0aW5ncy5jbGVhcigpO1xyXG4gIH1cclxuICBcclxuICBhZGRVc2VyVG9CcmFpbnRyZWUodXNlcm5hbWUsIG5hbWUsIGVtYWlsKSB7XHJcbiAgXHR0aGlzLnBheW1lbnRTZXJ2aWNlLmFkZFBheW1lbnRVc2VyKHRoaXMudWlkLCB1c2VybmFtZSwgbmFtZSwgZW1haWwpLnN1YnNjcmliZSgoZGF0YTogYW55KSA9PiB7XHJcbiAgXHRcdGZpcmViYXNlLmZpcmVzdG9yZS5jb2xsZWN0aW9uKCd1c2VycycpLmRvYyh0aGlzLnVpZCkudXBkYXRlKHtcclxuICBcdFx0XHRwYXltZW50X2lkOiBkYXRhLmN1c3RvbWVyLmlkXHJcbiAgXHRcdH0pXHJcbiAgXHR9KVxyXG4gIFx0Ly8gdGhpcy5wYXltZW50U2VydmljZS5nZXRQYXltZW50VXNlckJ5SWQoJzI1ODcwMzk1NicpLnN1YnNjcmliZSgoZGF0YTogYW55KSA9PiB7XHJcbiAgXHQvLyBcdGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gIFx0Ly8gfSlcclxuICBcdGNvbnNvbGUubG9nKCdhZGRlZCB0byBicmFpbnRyZWUnKTtcclxuICB9XHJcblxyXG4gIGxvZ2luVXNlcih1aWQpIHtcclxuICBcdGFwcFNldHRpbmdzLnNldFN0cmluZyhcInVpZFwiLCB1aWQpO1xyXG4gIFx0Y29uc29sZS5sb2codWlkKVxyXG4gIFx0dGhpcy51aWQgPSB1aWQ7XHJcbiAgfVxyXG5cclxuICBsb2dpbkNoZWNrKCkge1xyXG5cdGlmKHRoaXMuZ2V0VXNlciA9PSBudWxsKVxyXG5cdFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUoWyd3ZWxjb21lJ10sIHtjbGVhckhpc3Rvcnk6IHRydWV9KVxyXG4gIH1cclxuXHJcbiAgZ2V0VXNlckZyb21Mb2NhbFN0b3JhZ2UoKSB7XHJcblx0cmV0dXJuIGFwcFNldHRpbmdzLmdldFN0cmluZyhcInVpZFwiKTtcclxuICB9XHJcblxyXG4gIGdldFVzZXIoKSB7XHJcblx0dGhpcy51aWQgPSB0aGlzLmdldFVzZXJGcm9tTG9jYWxTdG9yYWdlKCk7XHJcblx0cmV0dXJuIHRoaXMudWlkO1xyXG4gIH1cclxuXHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi8qXFxyXFxuQWRkIHlvdXIgTmF0aXZlU2NyaXB0IHNwZWNpZmljIHN0eWxlcyBoZXJlLlxcclxcblRvIGxlYXJuIG1vcmUgYWJvdXQgc3R5bGluZyBpbiBOYXRpdmVTY3JpcHQgc2VlOlxcclxcbmh0dHBzOi8vZG9jcy5uYXRpdmVzY3JpcHQub3JnL2FuZ3VsYXIvdWkvc3R5bGluZ1xcclxcbiovXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPFN0YWNrTGF5b3V0PlxcclxcbiAgPExhYmVsIHRleHQ9XFxcImxvZ2lucm91dGUgd29ya3NcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIj48L0xhYmVsPlxcclxcbiAgPExhYmVsIHRleHQ9XFxcIlRoaXMgaXMgYSBtaWdyYXRlZCBjb21wb25lbnRcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIj48L0xhYmVsPlxcclxcbiAgPExhYmVsIHRleHQ9XFxcIlVwZGF0ZSBpdCB0byBwcm92aWRlIHRoZSBVSSBlbGVtZW50cyByZXF1aXJlZCBpbiB5b3VyIG1vYmlsZSBhcHBcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIj48L0xhYmVsPlxcclxcbjwvU3RhY2tMYXlvdXQ+XFxyXFxuXFxyXFxuPCEtLVxcclxcbk9yaWdpbmFsIFdlYiB0ZW1wbGF0ZTpcXHJcXG5cXHJcXG48cD5cXHJcXG4gIFJlZGlyZWN0aW5nLi4uXFxyXFxuPC9wPlxcclxcblxcclxcbi0tPlwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTG9naW5jaGVja1NlcnZpY2UgfSBmcm9tICcuLi9sb2dpbmNoZWNrLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBUcmFuc2ZlclNlcnZpY2UgfSBmcm9tICcuLi9kYXRhdHJhbnNmZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1sb2dpbnJvdXRlJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbG9naW5yb3V0ZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vbG9naW5yb3V0ZS5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIExvZ2lucm91dGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGxvZ2luY2hlY2tTZXJ2aWNlOiBMb2dpbmNoZWNrU2VydmljZSwgcHJpdmF0ZSB0cmFuc2ZlclNlcnZpY2U6IFRyYW5zZmVyU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikgeyB9XHJcbiAgaWRUb2tlbiA9IHRoaXMuZ2V0UGFyYW1ldGVyQnlOYW1lKFwiaWRfdG9rZW5cIik7XHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgXHRpZih0aGlzLmlkVG9rZW4gPT0gbnVsbCB8fCB0aGlzLmlkVG9rZW4gPT0gJycpXHJcbiAgXHRcdHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoJy9sb2dpbicpO1xyXG5cclxuICBcdHRoaXMubG9naW5jaGVja1NlcnZpY2UuZGVjb2RlVG9rZW4odGhpcy5pZFRva2VuKTtcclxuICBcdHRoaXMubG9naW5jaGVja1NlcnZpY2UuY2hlY2tVc2VyKCk7XHJcblxyXG4gIH1cclxuXHJcblx0Z2V0UGFyYW1ldGVyQnlOYW1lKG5hbWUpIHtcclxuXHQgICAgdmFyIHVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xyXG5cdCAgICBuYW1lID0gbmFtZS5yZXBsYWNlKC9bXFxbXFxdXS9nLCBcIlxcXFwkJlwiKTtcclxuXHQgICAgdmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cChcIls/JiNdXCIgKyBuYW1lICsgXCIoPShbXiYjXSopfCZ8I3wkKVwiKSxcclxuXHQgICAgICAgIHJlc3VsdHMgPSByZWdleC5leGVjKHVybCk7XHJcblx0ICAgIGlmICghcmVzdWx0cykgcmV0dXJuIG51bGw7XHJcblx0ICAgIGlmICghcmVzdWx0c1syXSkgcmV0dXJuICcnO1xyXG5cdCAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHJlc3VsdHNbMl0ucmVwbGFjZSgvXFwrL2csIFwiIFwiKSk7XHJcblx0fVxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCIvKiBBZGQgbW9iaWxlIHN0eWxlcyBmb3IgdGhlIGNvbXBvbmVudCBoZXJlLiAgKi9cXHJcXG5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8QnV0dG9uIHRleHQ9XFxcIm1lc3NhZ2UtbW9kYWwgd29ya3MhXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIj48L0J1dHRvbj5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1tZXNzYWdlLW1vZGFsJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbWVzc2FnZS1tb2RhbC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vbWVzc2FnZS1tb2RhbC5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIE1lc3NhZ2VNb2RhbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuXHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi8qXFxyXFxuQWRkIHlvdXIgTmF0aXZlU2NyaXB0IHNwZWNpZmljIHN0eWxlcyBoZXJlLlxcclxcblRvIGxlYXJuIG1vcmUgYWJvdXQgc3R5bGluZyBpbiBOYXRpdmVTY3JpcHQgc2VlOlxcclxcbmh0dHBzOi8vZG9jcy5uYXRpdmVzY3JpcHQub3JnL2FuZ3VsYXIvdWkvc3R5bGluZ1xcclxcbiovXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPFBhZ2UuYWN0aW9uQmFyPlxcclxcbiAgICA8QWN0aW9uQmFyIHRpdGxlPVxcXCJ7eyBhY3Rpb25CYXJUaXRsZSB9fVxcXCI+XFxyXFxuICAgIFxcdDxBY3Rpb25JdGVtICh0YXApPVxcXCJ0b01lc3NhZ2VzKClcXFwiIGljb249XFxcIn4vaW1nL3NlbmRfbWVzc2FnZV9pY29uLnBuZ1xcXCIgaW9zLnBvc2l0aW9uPVxcXCJyaWdodFxcXCIgd2lkdGg9XFxcIjIwXFxcIiBoZWlnaHQ9XFxcIjIwXFxcIiAjYWN0aW9uSXRlbT48L0FjdGlvbkl0ZW0+XFxyXFxuICAgIDwvQWN0aW9uQmFyPlxcclxcbjwvUGFnZS5hY3Rpb25CYXI+XFxyXFxuXFxyXFxuPFRhYlZpZXcgWyhuZ01vZGVsKV09XFxcInRhYlNlbGVjdGVkSW5kZXhcXFwiICh0YWJJdGVtVGFwKT1cXFwiaG9tZSgpXFxcIiAoc2VsZWN0ZWRJbmRleENoYW5nZWQpPVxcXCJvblNlbGVjdGVkSW5kZXhDaGFuZ2VkKCRldmVudClcXFwiIGFuZHJvaWRUYWJzUG9zaXRpb249XFxcImJvdHRvbVxcXCIgc2VsZWN0ZWRUYWJUZXh0Q29sb3I9XFxcIiNhYzAwZTZcXFwiICN0YWJWaWV3PlxcclxcbiAgICA8UGFnZSAqdGFiSXRlbT1cXFwiaG9tZVRhYlxcXCI+XFxyXFxuICAgIFxcdDxhcHAtaG9tZT48L2FwcC1ob21lPlxcclxcbiAgICA8L1BhZ2U+XFxyXFxuICAgIDxQYWdlICp0YWJJdGVtPVxcXCJzZWFyY2hUYWJcXFwiPlxcclxcbiAgICBcXHQ8YXBwLXNlYXJjaD48L2FwcC1zZWFyY2g+XFxyXFxuICAgIDwvUGFnZT5cXHJcXG4gICAgPFBhZ2UgKnRhYkl0ZW09XFxcImhpc3RvcnlUYWJcXFwiPlxcclxcbiAgICBcXHQ8YXBwLWhpc3Rvcnk+PC9hcHAtaGlzdG9yeT5cXHJcXG4gICAgPC9QYWdlPlxcclxcbiAgICA8UGFnZSAqdGFiSXRlbT1cXFwic2V0dGluZ3NUYWJcXFwiPlxcclxcbiAgICBcXHQ8YXBwLXNldHRpbmdzPjwvYXBwLXNldHRpbmdzPlxcclxcbiAgICA8L1BhZ2U+XFxyXFxuPC9UYWJWaWV3PlxcclxcblxcclxcblxcclxcblxcclxcbjwhLS1cXHJcXG5PcmlnaW5hbCBXZWIgdGVtcGxhdGU6XFxyXFxuXFxyXFxuPGRpdiBjbGFzcz1cXFwidG9wbmF2XFxcIj5cXHJcXG5cXHQ8ZGl2IGNsYXNzPVxcXCJuYXZidG5zXFxcIj5cXHJcXG5cXHRcXHQ8YSAoY2xpY2spPVxcXCJ0b0hvbWUoKVxcXCIgY2xhc3M9XFxcImFjdGl2ZSBuYXZpZ2F0aW9uXFxcIiBpZD1cXFwiaG9tZW5hdlxcXCI+SG9tZTwvYT5cXHJcXG5cXHRcXHQ8YSAoY2xpY2spPVxcXCJ0b0hpc3RvcnkoKVxcXCIgY2xhc3M9XFxcIm5hdmlnYXRpb25cXFwiIGlkPVxcXCJoaXN0b3J5bmF2XFxcIj5IaXN0b3J5PC9hPlxcclxcblxcdFxcdDxhIChjbGljayk9XFxcInRvUGF5bWVudHMoKVxcXCIgY2xhc3M9XFxcIm5hdmlnYXRpb25cXFwiIGlkPVxcXCJwYXltZW50c25hdlxcXCI+UGF5bWVudHM8L2E+XFxyXFxuXFx0XFx0PGEgKGNsaWNrKT1cXFwidG9TZXR0aW5ncygpXFxcIiBjbGFzcz1cXFwibmF2aWdhdGlvblxcXCIgaWQ9XFxcInNldHRpbmdzbmF2XFxcIj5TZXR0aW5nczwvYT5cXHJcXG5cXHRcXHQ8YSAoY2xpY2spPVxcXCJwb3N0KClcXFwiIGNsYXNzPVxcXCJuYXZpZ2F0aW9uXFxcIiBpZD1cXFwicG9zdG5hdlxcXCI+UG9zdDwvYT5cXHJcXG5cXHQ8L2Rpdj5cXHJcXG5cXHJcXG5cXHQ8ZGl2IGNsYXNzPVxcXCJpbWduYXZcXFwiPlxcclxcblxcdFxcdDxpbWcgc3JjPVxcXCJzcmMvaWNvbi5wbmdcXFwiIChjbGljayk9XFxcImRyb3BNZW51KClcXFwiPlxcclxcblxcdDwvZGl2PlxcclxcbjwvZGl2PlxcclxcblxcclxcbjxkaXYgY2xhc3M9XFxcImNhcmV0XFxcIiBpZD1cXFwiZHJvcGRvd24tY2FyZXRcXFwiPjwvZGl2PlxcclxcbjxkaXYgY2xhc3M9XFxcImRyb3Bkb3duXFxcIiBpZD1cXFwiZHJvcGRvd24tbWVudVxcXCI+XFxyXFxuXFx0PGRpdiBjbGFzcz1cXFwiZHJvcGRvd24tb3B0aW9uXFxcIiAoY2xpY2spPVxcXCJ0b0hvbWUoKVxcXCI+XFxyXFxuXFx0XFx0PHNwYW4+SG9tZTwvc3Bhbj5cXHJcXG5cXHQ8L2Rpdj5cXHJcXG5cXHQ8ZGl2IGNsYXNzPVxcXCJkcm9wZG93bi1vcHRpb25cXFwiIChjbGljayk9XFxcInRvU2V0dGluZ3MoKVxcXCI+XFxyXFxuXFx0XFx0PHNwYW4+U2V0dGluZ3M8L3NwYW4+XFxyXFxuXFx0PC9kaXY+XFxyXFxuXFx0PGRpdiBjbGFzcz1cXFwiZHJvcGRvd24tb3B0aW9uXFxcIiAoY2xpY2spPVxcXCJsb2dvdXQoKVxcXCI+XFxyXFxuXFx0XFx0PHNwYW4+TG9nb3V0PC9zcGFuPlxcclxcblxcdDwvZGl2PlxcclxcblxcdDxkaXYgY2xhc3M9XFxcImRyb3Bkb3duLW9wdGlvbiBncm91cC10d29cXFwiIChjbGljayk9XFxcImRyb3BNZW51KClcXFwiPlxcclxcblxcdFxcdDxzcGFuPkNsb3NlPC9zcGFuPlxcclxcblxcdDwvZGl2PlxcclxcbjwvZGl2Plxcclxcblxcclxcbi0tPlwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUcmFuc2ZlclNlcnZpY2UgfSBmcm9tICcuLi9kYXRhdHJhbnNmZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQge1BhZ2V9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvcGFnZSc7XHJcbmltcG9ydCB7IEFjdGlvbkJhciwgQWN0aW9uSXRlbSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvYWN0aW9uLWJhcic7XHJcbmltcG9ydCAqIGFzIGRvbSBmcm9tICduYXRpdmVzY3JpcHQtZG9tJztcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9idXR0b24nO1xyXG5pbXBvcnQgeyBUYWJWaWV3IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvdGFiLXZpZXdcIjtcclxuaW1wb3J0IHsgU2VsZWN0ZWRJbmRleENoYW5nZWRFdmVudERhdGEgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS90YWItdmlld1wiO1xyXG5pbXBvcnQgeyBMaXN0VmlldyB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xpc3Qtdmlld1wiO1xyXG5pbXBvcnQgKiBhcyBhcHBsaWNhdGlvbiBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiO1xyXG5pbXBvcnQgeyBBbmRyb2lkQXBwbGljYXRpb24sIEFuZHJvaWRBY3Rpdml0eUJhY2tQcmVzc2VkRXZlbnREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIjtcclxuaW1wb3J0IHsgaXNBbmRyb2lkIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm1cIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLW5hdmlnYXRpb24nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uYXZpZ2F0aW9uLmNvbXBvbmVudC50bnMuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vbmF2aWdhdGlvbi5jb21wb25lbnQudG5zLmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOYXZpZ2F0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0cmFuc2ZlclNlcnZpY2U6IFRyYW5zZmVyU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMsIHByaXZhdGUgcGFnZTogUGFnZSkgeyB9XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ3RhYlZpZXcnLCB7IHN0YXRpYzogdHJ1ZSB9KSB0djogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKCdhY3Rpb25CYXInLCB7IHN0YXRpYzogdHJ1ZSB9KSBhYjogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKCdhY3Rpb25JdGVtJywgeyBzdGF0aWM6IHRydWUgfSkgYWk6IEVsZW1lbnRSZWY7XHJcbiAgdXNlcjtcclxuICBhY3RpdmVidG47XHJcbiAgdGFiU2VsZWN0ZWRJbmRleCA9IDA7XHJcbiAgYWN0aW9uQmFyVGl0bGUgPSAnSG9tZSc7XHJcbiAgaG9tZVRhYiA9IHtpY29uU291cmNlOiAncmVzOi8vaG9tZV9oaWdobGlnaHRlZCd9O1xyXG4gIHNlYXJjaFRhYiA9IHtpY29uU291cmNlOiAncmVzOi8vc2VhcmNoJ307XHJcbiAgaGlzdG9yeVRhYiA9IHtpY29uU291cmNlOiAncmVzOi8vaGlzdG9yeSd9O1xyXG4gIHNldHRpbmdzVGFiID0ge2ljb25Tb3VyY2U6ICdyZXM6Ly9zZXR0aW5ncyd9O1xyXG4gIGFjdGlvbkl0ZW0gOiBBY3Rpb25JdGVtO1xyXG5cclxuICAvLyBAVmlld0NoaWxkKCdsaXN0VmlldycpIGx2OiBFbGVtZW50UmVmO1xyXG4gIC8vIGxpc3RWaWV3ID0gPExpc3RWaWV3PiB0aGlzLmx2Lm5hdGl2ZUVsZW1lbnQ7XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5hY3Rpb25JdGVtID0gPEFjdGlvbkl0ZW0+IHRoaXMuYWkubmF0aXZlRWxlbWVudDtcclxuXHJcbiAgXHR0aGlzLmFjdGl2ZWJ0biA9IHRoaXMudHJhbnNmZXJTZXJ2aWNlLmdldERhdGEoKTtcclxuICBcdGlmKHRoaXMuYWN0aXZlYnRuID09IFwiaG9tZW5hdlwiKSB7XHJcbiAgICAgIHRoaXMuaG9tZVRhYiA9IHtpY29uU291cmNlOiAncmVzOi8vaG9tZV9oaWdobGlnaHRlZCd9O1xyXG4gICAgICB0aGlzLnNlYXJjaFRhYiA9IHtpY29uU291cmNlOiAncmVzOi8vc2VhcmNoJ307XHJcbiAgICAgIHRoaXMuaGlzdG9yeVRhYiA9IHtpY29uU291cmNlOiAncmVzOi8vaGlzdG9yeSd9O1xyXG4gICAgICB0aGlzLnNldHRpbmdzVGFiID0ge2ljb25Tb3VyY2U6ICdyZXM6Ly9zZXR0aW5ncyd9O1xyXG4gICAgICB0aGlzLmFjdGlvbkl0ZW0udmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcclxuICAgICAgdGhpcy50YWJTZWxlY3RlZEluZGV4ID0gMDtcclxuICBcdH0gZWxzZSBpZih0aGlzLmFjdGl2ZWJ0biA9PSBcInNlYXJjaG5hdlwiKSB7XHJcbiAgICAgIHRoaXMuaG9tZVRhYiA9IHtpY29uU291cmNlOiAncmVzOi8vaG9tZSd9O1xyXG4gICAgICB0aGlzLnNlYXJjaFRhYiA9IHtpY29uU291cmNlOiAncmVzOi8vc2VhcmNoX2hpZ2hsaWdodGVkJ307XHJcbiAgICAgIHRoaXMuaGlzdG9yeVRhYiA9IHtpY29uU291cmNlOiAncmVzOi8vaGlzdG9yeSd9O1xyXG4gICAgICB0aGlzLnNldHRpbmdzVGFiID0ge2ljb25Tb3VyY2U6ICdyZXM6Ly9zZXR0aW5ncyd9O1xyXG4gICAgICB0aGlzLmFjdGlvbkl0ZW0udmlzaWJpbGl0eSA9ICdjb2xsYXBzZSc7XHJcbiAgICAgIHRoaXMudGFiU2VsZWN0ZWRJbmRleCA9IDE7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmKHRoaXMuYWN0aXZlYnRuID09IFwiaGlzdG9yeW5hdlwiKSB7XHJcbiAgICAgIHRoaXMuaG9tZVRhYiA9IHtpY29uU291cmNlOiAncmVzOi8vaG9tZSd9O1xyXG4gICAgICB0aGlzLnNlYXJjaFRhYiA9IHtpY29uU291cmNlOiAncmVzOi8vc2VhcmNoJ307XHJcbiAgICAgIHRoaXMuaGlzdG9yeVRhYiA9IHtpY29uU291cmNlOiAncmVzOi8vaGlzdG9yeV9oaWdobGlnaHRlZCd9O1xyXG4gICAgICB0aGlzLnNldHRpbmdzVGFiID0ge2ljb25Tb3VyY2U6ICdyZXM6Ly9zZXR0aW5ncyd9O1xyXG4gICAgICB0aGlzLmFjdGlvbkl0ZW0udmlzaWJpbGl0eSA9ICdjb2xsYXBzZSc7XHJcbiAgICAgIHRoaXMudGFiU2VsZWN0ZWRJbmRleCA9IDI7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmKHRoaXMuYWN0aXZlYnRuID09IFwic2V0dGluZ3NuYXZcIikge1xyXG4gICAgICB0aGlzLmhvbWVUYWIgPSB7aWNvblNvdXJjZTogJ3JlczovL2hvbWUnfTtcclxuICAgICAgdGhpcy5zZWFyY2hUYWIgPSB7aWNvblNvdXJjZTogJ3JlczovL3NlYXJjaCd9O1xyXG4gICAgICB0aGlzLmhpc3RvcnlUYWIgPSB7aWNvblNvdXJjZTogJ3JlczovL2hpc3RvcnknfTtcclxuICAgICAgdGhpcy5zZXR0aW5nc1RhYiA9IHtpY29uU291cmNlOiAncmVzOi8vc2V0dGluZ3NfaGlnaGxpZ2h0ZWQnfTtcclxuICAgICAgdGhpcy5hY3Rpb25JdGVtLnZpc2liaWxpdHkgPSAnY29sbGFwc2UnO1xyXG4gICAgICB0aGlzLnRhYlNlbGVjdGVkSW5kZXggPSAzO1xyXG4gICAgfVxyXG4gICAgLy8gY29uc29sZS5sb2codGhpcy50YWJTZWxlY3RlZEluZGV4KVxyXG5cclxuICAgIC8vIHZhciBqdXN0U2V0ID0gZmFsc2U7XHJcblxyXG4gICAgLy8gaWYoaXNBbmRyb2lkKVxyXG4gICAgLy8gICBhcHBsaWNhdGlvbi5hbmRyb2lkLm9uKEFuZHJvaWRBcHBsaWNhdGlvbi5hY3Rpdml0eUJhY2tQcmVzc2VkRXZlbnQsIChkYXRhOiBBbmRyb2lkQWN0aXZpdHlCYWNrUHJlc3NlZEV2ZW50RGF0YSkgPT4ge1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKHRoaXMudGFiU2VsZWN0ZWRJbmRleClcclxuICAgIC8vICAgaWYgKHRoaXMudGFiU2VsZWN0ZWRJbmRleCA9PT0gMCAmJiAhanVzdFNldCkge1xyXG4gICAgLy8gICAgIGFwcGxpY2F0aW9uLmFuZHJvaWQuZm9yZWdyb3VuZEFjdGl2aXR5LmZpbmlzaCgpO1xyXG4gICAgLy8gICB9XHJcbiAgICAvLyAgIGVsc2Uge1xyXG4gICAgLy8gICAgIHRoaXMudHYubmF0aXZlRWxlbWVudC5zZWxlY3RlZEluZGV4ID0gMDtcclxuICAgIC8vICAgICBqdXN0U2V0ID0gdHJ1ZTtcclxuICAgIC8vICAgICBzZXRUaW1lb3V0KCgpID0+IHtqdXN0U2V0ID0gZmFsc2V9LCA1MDApO1xyXG4gICAgLy8gICB9XHJcbiAgICAvLyB9KTtcclxuICB9XHJcbiAgcGFpbnRBY3RpdmUoYnRuKSB7XHJcbiAgXHRjb25zdCBuYXZjb250ZW50cyA9IGRvbS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduYXZpZ2F0aW9uJylcclxuICAgIGZvcih2YXIgeCA9IDA7IHggPCBuYXZjb250ZW50cy5sZW5ndGg7IHgrKylcclxuICAgIHtcclxuICAgICAgICBuYXZjb250ZW50c1t4XS5jbGFzc05hbWUgPSAnbmF2aWdhdGlvbic7XHJcbiAgICB9XHJcbiAgICBjb25zdCBidXR0b24gPSA8QnV0dG9uPnRoaXMucGFnZS5nZXRWaWV3QnlJZChidG4pO1xyXG4gICAgYnV0dG9uLmNsYXNzTmFtZSArPSAnIGFjdGl2ZSc7XHJcblxyXG4gIH1cclxuXHJcbiAgb25TZWxlY3RlZEluZGV4Q2hhbmdlZChhcmdzOiBTZWxlY3RlZEluZGV4Q2hhbmdlZEV2ZW50RGF0YSkge1xyXG4gICAgICAgIGlmIChhcmdzLm9sZEluZGV4ICE9PSAtMSkge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdJbmRleCA9IGFyZ3MubmV3SW5kZXg7XHJcbiAgICAgICAgICAgIGlmIChuZXdJbmRleCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hY3Rpb25CYXJUaXRsZSA9ICdIb21lJztcclxuICAgICAgICAgICAgICAgIHRoaXMudG9Ib21lKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobmV3SW5kZXggPT09IDEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWN0aW9uQmFyVGl0bGUgPSAnU2VhcmNoJztcclxuICAgICAgICAgICAgICAgIHRoaXMudG9TZWFyY2goKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChuZXdJbmRleCA9PT0gMikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hY3Rpb25CYXJUaXRsZSA9ICdZb3VyIFBvc3RzJztcclxuICAgICAgICAgICAgICAgIHRoaXMudG9IaXN0b3J5KCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobmV3SW5kZXggPT09IDMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWN0aW9uQmFyVGl0bGUgPSAnU2V0dGluZ3MnO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50b1NldHRpbmdzKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gIGhvbWUoKSB7XHJcbiAgICBpZih0aGlzLnRhYlNlbGVjdGVkSW5kZXggPT0gMClcclxuICAgIHtcclxuICAgICAgbGV0IGxpc3RWaWV3ID0gPExpc3RWaWV3PiB0aGlzLnBhZ2UuZ2V0Vmlld0J5SWQoJ2xpc3RWaWV3Jyk7XHJcbiAgICAgIGxpc3RWaWV3LnNjcm9sbFRvSW5kZXgoMCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmFjdGlvbkl0ZW0udmlzaWJpbGl0eSA9ICdjb2xsYXBzZSc7XHJcbiAgfVxyXG5cclxuICB0b0hvbWUoKSB7XHJcbiAgXHQvLyB0aGlzLnRyYW5zZmVyU2VydmljZS5zZXREYXRhKCdob21lbmF2Jyk7XHJcblx0ICAvLyB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ2hvbWUnXSk7XHJcbiAgICB0aGlzLmhvbWVUYWIgPSB7aWNvblNvdXJjZTogJ3JlczovL2hvbWVfaGlnaGxpZ2h0ZWQnfTtcclxuICAgIHRoaXMuc2VhcmNoVGFiID0ge2ljb25Tb3VyY2U6ICdyZXM6Ly9zZWFyY2gnfTtcclxuICAgIHRoaXMuaGlzdG9yeVRhYiA9IHtpY29uU291cmNlOiAncmVzOi8vaGlzdG9yeSd9O1xyXG4gICAgdGhpcy5zZXR0aW5nc1RhYiA9IHtpY29uU291cmNlOiAncmVzOi8vc2V0dGluZ3MnfTtcclxuICAgIHRoaXMuYWN0aW9uSXRlbS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xyXG4gICAgdGhpcy50YWJTZWxlY3RlZEluZGV4ID0gMDtcclxuICB9XHJcblxyXG4gIHRvU2VhcmNoKClcclxuXHR7XHJcblx0XHQvLyB0aGlzLnRyYW5zZmVyU2VydmljZS5zZXREYXRhKCdoaXN0b3J5bmF2Jyk7XHJcblx0XHQvLyB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ2hpc3RvcnknXSk7XHJcbiAgICB0aGlzLmhvbWVUYWIgPSB7aWNvblNvdXJjZTogJ3JlczovL2hvbWUnfTtcclxuICAgIHRoaXMuc2VhcmNoVGFiID0ge2ljb25Tb3VyY2U6ICdyZXM6Ly9zZWFyY2hfaGlnaGxpZ2h0ZWQnfTtcclxuICAgIHRoaXMuaGlzdG9yeVRhYiA9IHtpY29uU291cmNlOiAncmVzOi8vaGlzdG9yeSd9O1xyXG4gICAgdGhpcy5zZXR0aW5nc1RhYiA9IHtpY29uU291cmNlOiAncmVzOi8vc2V0dGluZ3MnfTtcclxuICAgIHRoaXMuYWN0aW9uSXRlbS52aXNpYmlsaXR5ID0gJ2NvbGxhcHNlJztcclxuICAgIHRoaXMudGFiU2VsZWN0ZWRJbmRleCA9IDE7XHJcblx0fVxyXG5cclxuXHR0b0hpc3RvcnkoKVxyXG5cdHtcclxuXHRcdC8vIHRoaXMudHJhbnNmZXJTZXJ2aWNlLnNldERhdGEoJ3NldHRpbmdzbmF2Jyk7XHJcblx0XHQvLyB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ3NldHRpbmdzJ10pO1xyXG4gICAgdGhpcy5ob21lVGFiID0ge2ljb25Tb3VyY2U6ICdyZXM6Ly9ob21lJ307XHJcbiAgICB0aGlzLnNlYXJjaFRhYiA9IHtpY29uU291cmNlOiAncmVzOi8vc2VhcmNoJ307XHJcbiAgICB0aGlzLmhpc3RvcnlUYWIgPSB7aWNvblNvdXJjZTogJ3JlczovL2hpc3RvcnlfaGlnaGxpZ2h0ZWQnfTtcclxuICAgIHRoaXMuc2V0dGluZ3NUYWIgPSB7aWNvblNvdXJjZTogJ3JlczovL3NldHRpbmdzJ307XHJcbiAgICB0aGlzLmFjdGlvbkl0ZW0udmlzaWJpbGl0eSA9ICdjb2xsYXBzZSc7XHJcbiAgICB0aGlzLnRhYlNlbGVjdGVkSW5kZXggPSAyO1xyXG5cdH1cclxuXHJcbiAgdG9TZXR0aW5ncygpXHJcbiAge1xyXG4gICAgLy8gdGhpcy50cmFuc2ZlclNlcnZpY2Uuc2V0RGF0YSgnc2VhcmNobmF2Jyk7XHJcbiAgICAvLyB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ3NlYXJjaCddKTtcclxuICAgIHRoaXMuaG9tZVRhYiA9IHtpY29uU291cmNlOiAncmVzOi8vaG9tZSd9O1xyXG4gICAgdGhpcy5zZWFyY2hUYWIgPSB7aWNvblNvdXJjZTogJ3JlczovL3NlYXJjaCd9O1xyXG4gICAgdGhpcy5oaXN0b3J5VGFiID0ge2ljb25Tb3VyY2U6ICdyZXM6Ly9oaXN0b3J5J307XHJcbiAgICB0aGlzLnNldHRpbmdzVGFiID0ge2ljb25Tb3VyY2U6ICdyZXM6Ly9zZXR0aW5nc19oaWdobGlnaHRlZCd9O1xyXG4gICAgdGhpcy5hY3Rpb25JdGVtLnZpc2liaWxpdHkgPSAnY29sbGFwc2UnO1xyXG4gICAgdGhpcy50YWJTZWxlY3RlZEluZGV4ID0gMztcclxuICB9XHJcblxyXG4gIHRvTWVzc2FnZXMoKVxyXG4gIHtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnY2hhdC1saXN0J10pXHJcbiAgfVxyXG5cclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLyogQWRkIG1vYmlsZSBzdHlsZXMgZm9yIHRoZSBjb21wb25lbnQgaGVyZS4gICovXFxyXFxuLnJlbW92ZS1wYXltZW50LWxhYmVsIHtcXHJcXG5cXHRmb250LXNpemU6IDE2O1xcclxcblxcdGNvbG9yOiAjYWMwMGU2O1xcclxcblxcdG1hcmdpbi1sZWZ0OiAxODtcXHJcXG5cXHR0ZXh0LWFsaWduOiBsZWZ0O1xcclxcblxcdHBhZGRpbmc6IDE4O1xcclxcbn1cXHJcXG5cXHJcXG4uaW5mby1sYWJlbCB7XFxyXFxuXFx0Y29sb3I6IGJsYWNrO1xcclxcblxcdGZvbnQtc2l6ZTogMjQ7XFxyXFxuXFx0dGV4dC1hbGlnbjogbGVmdDtcXHJcXG5cXHRtYXJnaW4tbGVmdDogMzY7XFxyXFxuXFx0bWFyZ2luLXRvcDogMzY7XFxyXFxufVxcclxcblxcclxcbi5kZXRhaWxzLWxhYmVsIHtcXHJcXG5cXHRjb2xvcjogYmxhY2s7XFxyXFxuXFx0Zm9udC1zaXplOiAxNjtcXHJcXG5cXHR0ZXh0LWFsaWduOiBsZWZ0O1xcclxcblxcdG1hcmdpbi1sZWZ0OiAzNjtcXHJcXG5cXHRtYXJnaW4tdG9wOiAxODtcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiA3MjtcXHJcXG59XFxyXFxuXFxyXFxuLmFjdGl2aXR5LWluZGljYXRvciB7XFxyXFxuXFx0Y29sb3I6ICNhYzAwZTY7XFxyXFxufVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxQYWdlPlxcclxcblxcdDxQYWdlLmFjdGlvbkJhcj5cXHJcXG5cXHRcXHQ8QWN0aW9uQmFyIHRpdGxlPVxcXCJQYXltZW50IEluZm9cXFwiPlxcclxcblxcdFxcdCAgPE5hdmlnYXRpb25CdXR0b24gdGV4dD1cXFwiR28gQmFja1xcXCIgYW5kcm9pZC5zeXN0ZW1JY29uPVxcXCJpY19tZW51X2JhY2tcXFwiICh0YXApPVxcXCJvbk5hdkJ0blRhcCgpXFxcIj48L05hdmlnYXRpb25CdXR0b24+XFxyXFxuXFx0XFx0PC9BY3Rpb25CYXI+XFxyXFxuXFx0PC9QYWdlLmFjdGlvbkJhcj5cXHJcXG5cXHJcXG5cXHQ8U3RhY2tMYXlvdXQgI2luZm9Db250YWluZXI+XFxyXFxuXFx0XFx0PFN0YWNrTGF5b3V0PlxcclxcblxcdFxcdFxcdDxMYWJlbCB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgdGV4dD1cXFwie3sgcGF5bWVudEluZm8udHlwZSB9fVxcXCIgY2xhc3M9XFxcImluZm8tbGFiZWxcXFwiPjwvTGFiZWw+XFxyXFxuXFx0XFx0XFx0PExhYmVsIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiB0ZXh0PVxcXCJ7eyBwYXltZW50SW5mby5pbmZvIH19XFxcIiBjbGFzcz1cXFwiZGV0YWlscy1sYWJlbFxcXCI+PC9MYWJlbD5cXHJcXG5cXHRcXHQ8L1N0YWNrTGF5b3V0PlxcclxcblxcdFxcdDxTdGFja0xheW91dCAodGFwKT1cXFwicmVtb3ZlKClcXFwiPlxcclxcblxcdFxcdFxcdDxMYWJlbCB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgdGV4dD1cXFwiUmVtb3ZlXFxcIiBjbGFzcz1cXFwicmVtb3ZlLXBheW1lbnQtbGFiZWxcXFwiPjwvTGFiZWw+XFxyXFxuXFx0XFx0PC9TdGFja0xheW91dD4gIFxcclxcblxcdDwvU3RhY2tMYXlvdXQ+XFxyXFxuPC9QYWdlPlxcclxcbjxBY3Rpdml0eUluZGljYXRvciByb3c9XFxcIjFcXFwiICNhY3Rpdml0eUluZGljYXRvciBidXN5PVxcXCJmYWxzZVxcXCIgd2lkdGg9XFxcIjQwXFxcIiBoZWlnaHQ9XFxcIjQwXFxcIiBjbGFzcz1cXFwiYWN0aXZpdHktaW5kaWNhdG9yXFxcIj5cXHJcXG48L0FjdGl2aXR5SW5kaWNhdG9yPlwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUcmFuc2ZlclNlcnZpY2UgfSBmcm9tICcuLi9kYXRhdHJhbnNmZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IFBheW1lbnRTZXJ2aWNlIH0gZnJvbSAnLi4vcGF5bWVudC5zZXJ2aWNlLnRucyc7XHJcblxyXG4vLyBpbXBvcnQgeyBNb2RhbERpYWxvZ1BhcmFtcyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9kaXJlY3RpdmVzL2RpYWxvZ3NcIjtcclxuaW1wb3J0IHsgTW9kYWxEaWFsb2dTZXJ2aWNlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2RpcmVjdGl2ZXMvZGlhbG9nc1wiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgQ29uZmlybWF0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi4vY29uZmlybWF0aW9uL2NvbmZpcm1hdGlvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBpc0FuZHJvaWQsIGlzSU9TLCBkZXZpY2UsIHNjcmVlbiB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm0nO1xyXG5pbXBvcnQgeyBhbmRyb2lkIGFzIGFuZHJvaWRBcHAsIGlvcyBhcyBpb3NBcHAgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiO1xyXG5pbXBvcnQgeyBBY3Rpdml0eUluZGljYXRvciB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvYWN0aXZpdHktaW5kaWNhdG9yJztcclxuaW1wb3J0IHsgU3RhY2tMYXlvdXQgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvc3RhY2stbGF5b3V0JztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1wYXltZW50LWluZm8nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wYXltZW50LWluZm8uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3BheW1lbnQtaW5mby5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFBheW1lbnRJbmZvQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0cmFuc2ZlclNlcnZpY2U6IFRyYW5zZmVyU2VydmljZSwgcHJpdmF0ZSBwYXltZW50U2VydmljZTogUGF5bWVudFNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zLFxyXG4gIFx0cHJpdmF0ZSB2Y1JlZjogVmlld0NvbnRhaW5lclJlZiwgcHJpdmF0ZSBtb2RhbDogTW9kYWxEaWFsb2dTZXJ2aWNlKSB7IH1cclxuXHJcbiAgQFZpZXdDaGlsZCgnYWN0aXZpdHlJbmRpY2F0b3InLCB7IHN0YXRpYzogdHJ1ZSB9KSBhSTogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKCdpbmZvQ29udGFpbmVyJywgeyBzdGF0aWM6IHRydWUgfSkgaUM6IEVsZW1lbnRSZWY7XHJcbiAgXHJcblxyXG4gIHBheW1lbnRJbmZvID0ge1xyXG4gIFx0cGF5bWVudFR5cGU6IFwibG9hZGluZ1wiLFxyXG4gIFx0aW5mbzogXCJsb2FkaW5nXCIsXHJcbiAgXHRpZFRva2VuOiBcImxvYWRpbmdcIixcclxuICBcdHR5cGU6IFwibG9hZGluZ1wiXHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICBcdHRoaXMucGF5bWVudEluZm8gPSB0aGlzLnRyYW5zZmVyU2VydmljZS5nZXREYXRhKCk7XHJcbiAgXHQvLyBjb25zb2xlLmxvZyh0aGlzLnBheW1lbnRJbmZvKTtcclxuICB9XHJcblxyXG4gIHJlbW92ZSgpIHtcclxuICBcdGxldCBvcHRpb25zID0ge1xyXG4gICAgICAgIGNvbnRleHQ6IHt9LFxyXG4gICAgICAgIGZ1bGxzY3JlZW46IGZhbHNlLFxyXG4gICAgICAgIHZpZXdDb250YWluZXJSZWY6IHRoaXMudmNSZWYsXHJcbiAgICAgICAgYW5pbWF0ZWQ6IHRydWUsXHJcbiAgICAgICAgLy8gdHJhbnNpdGlvbjogeyBuYW1lOiBcInNsaWRlVG9wXCIgfVxyXG4gICAgfTtcclxuICAgIFxyXG4gICAgdGhpcy5tb2RhbC5zaG93TW9kYWwoQ29uZmlybWF0aW9uQ29tcG9uZW50LCBvcHRpb25zKS50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICBcdGlmKHJlc3VsdCA9PSBcImRlbGV0ZVwiKSB7XHJcbiAgICBcdFx0dmFyIGluZm9Db250YWluZXIgPSA8U3RhY2tMYXlvdXQ+IHRoaXMuaUMubmF0aXZlRWxlbWVudDtcclxuICAgIFx0XHRpbmZvQ29udGFpbmVyLnN0eWxlLnZpc2liaWxpdHkgPSBcImNvbGxhcHNlXCI7XHJcbiAgICBcdFx0dGhpcy5zaG93QnVzeSgpO1xyXG4gICAgXHRcdHRoaXMucGF5bWVudFNlcnZpY2UucmVtb3ZlUGF5bWVudE1ldGhvZEZyb21Vc2VyKHRoaXMucGF5bWVudEluZm8uaWRUb2tlbikuc3Vic2NyaWJlKChyZXMpID0+IHtcclxuXHRcdFx0ICBcdHRoaXMucm91dGVyLm5hdmlnYXRlKFsncGF5bWVudHMnXSk7XHJcblx0XHQgIFx0fSk7XHJcbiAgICBcdH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb25OYXZCdG5UYXAoKSB7XHJcbiAgXHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ3BheW1lbnRzJ10pO1xyXG4gIH1cclxuXHJcbiAgc2hvd0J1c3koKSB7XHJcbiAgXHR2YXIgYWN0aXZpdHlJbmRpY2F0b3IgPSA8QWN0aXZpdHlJbmRpY2F0b3I+IHRoaXMuYUkubmF0aXZlRWxlbWVudDtcclxuICBcdGFjdGl2aXR5SW5kaWNhdG9yLmJ1c3kgPSB0cnVlO1xyXG4gIH1cclxuXHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi8qXFxyXFxuQWRkIHlvdXIgTmF0aXZlU2NyaXB0IHNwZWNpZmljIHN0eWxlcyBoZXJlLlxcclxcblRvIGxlYXJuIG1vcmUgYWJvdXQgc3R5bGluZyBpbiBOYXRpdmVTY3JpcHQgc2VlOlxcclxcbmh0dHBzOi8vZG9jcy5uYXRpdmVzY3JpcHQub3JnL2FuZ3VsYXIvdWkvc3R5bGluZ1xcclxcbiovXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPFN0YWNrTGF5b3V0PlxcclxcbiAgPExhYmVsIHRleHQ9XFxcInBheW1lbnQtbWV0aG9kIHdvcmtzXFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCI+PC9MYWJlbD5cXHJcXG4gIDxMYWJlbCB0ZXh0PVxcXCJUaGlzIGlzIGEgbWlncmF0ZWQgY29tcG9uZW50XFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCI+PC9MYWJlbD5cXHJcXG4gIDxMYWJlbCB0ZXh0PVxcXCJVcGRhdGUgaXQgdG8gcHJvdmlkZSB0aGUgVUkgZWxlbWVudHMgcmVxdWlyZWQgaW4geW91ciBtb2JpbGUgYXBwXFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCI+PC9MYWJlbD5cXHJcXG48L1N0YWNrTGF5b3V0PlxcclxcblxcclxcbjwhLS1cXHJcXG5PcmlnaW5hbCBXZWIgdGVtcGxhdGU6XFxyXFxuXFxyXFxuPGRpdiBjbGFzcz1cXFwicGF5bWVudC1tZXRob2RcXFwiPlxcclxcblxcdDxzcGFuIGNsYXNzPVxcXCJwYXltZW50LXR5cGUtaWNvblxcXCI+PC9zcGFuPlxcclxcblxcdDxzcGFuIGNsYXNzPVxcXCJwYXltZW50LXR5cGUtZGV0YWlsc1xcXCI+PC9zcGFuPlxcclxcbjwvZGl2Plxcclxcbi0tPlwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLXBheW1lbnQtbWV0aG9kJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcGF5bWVudC1tZXRob2QuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3BheW1lbnQtbWV0aG9kLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGF5bWVudE1ldGhvZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUGF5bWVudFNlcnZpY2Uge1xyXG4gIC8vIHVyaSA9ICdodHRwOi8vbG9jYWxob3N0OjQwMDAnO1xyXG4gIC8vQWRhbSdzIFRlc3RpbmcgU2VydmVyXHJcbiAgLy8gdXJpID0gJ2h0dHA6Ly8xOTIuMTY4LjEuNzo0MDAwJztcclxuICAvL1BoaWxsaXAncyBUZXN0aW5nIFNlcnZlclxyXG5cdC8vIHVyaSA9ICdodHRwOi8vMTkyLjE2OC4xLjM6NDAwMCc7XHJcbiAgLy9GaXJlYmFzZSBjbG91ZCBmdW5jdGlvbnNcclxuICB1cmkgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1jb2xsZWdlcG9vbC0xNTUyNzQ5MTE4NjE3LmNsb3VkZnVuY3Rpb25zLm5ldCc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkgeyB9XHJcblxyXG4gIGFkZFBheW1lbnRVc2VyKGlkLCB1c2VybmFtZSwgbmFtZSwgZW1haWwpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKGAke3RoaXMudXJpfS9hZGRDdXN0b21lci8ke3VzZXJuYW1lfWApXHJcbiAgXHQvLyByZXR1cm4gdGhpcy5odHRwLmdldChgJHt0aGlzLnVyaX0vY3VzdG9tZXJzL2FkZC8ke3VzZXJuYW1lfWApO1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy51cml9L2FkZEN1c3RvbWVyP3VzZXJuYW1lPSR7dXNlcm5hbWV9YCk7XHJcbiAgfVxyXG5cclxuICBnZXRQYXltZW50VXNlckJ5SWQoaWQpIHtcclxuICAgIC8vIHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke3RoaXMudXJpfS9jdXN0b21lcnMvJHtpZH1gKTtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke3RoaXMudXJpfS9nZXRDdXN0b21lcj9pZD0ke2lkfWApO1xyXG4gIH1cclxuXHJcbiAgYWRkUGF5bWVudE1ldGhvZFRvVXNlcihpZCwgbm9uY2UpIHtcclxuICBcdGNvbnN0IGJvZHkgPSB7XHJcbiAgXHRcdGlkOiBpZCxcclxuICBcdFx0bm9uY2U6IG5vbmNlXHJcbiAgXHR9O1xyXG4gIFx0Ly8gcmV0dXJuIHRoaXMuaHR0cC5wb3N0KGBodHRwOi8vMTkyLjE2OC4xLjc6NDAwMC9jdXN0b21lcnMvcGF5bWVudC9gLCBib2R5KTtcclxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChgJHt0aGlzLnVyaX0vYWRkUGF5bWVudD9gLCBib2R5KVxyXG4gIH1cclxuXHJcbiAgcmVtb3ZlUGF5bWVudE1ldGhvZEZyb21Vc2VyKHRva2VuKSB7XHJcbiAgXHRyZXR1cm4gdGhpcy5odHRwLmdldChgJHt0aGlzLnVyaX0vcmVtb3ZlUGF5bWVudD90b2tlbj0ke3Rva2VufWApO1xyXG4gIH1cclxuXHJcbiAgZ2V0SWRUb2tlbihpZCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy51cml9L2dldFRva2VuP2lkPSR7aWR9YCk7XHJcbiAgfVxyXG4gIFxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFBheW1lbnRTZXJ2aWNlIHtcclxuICAvLyB1cmkgPSAnaHR0cDovL2xvY2FsaG9zdDo0MDAwJztcclxuICAvL0FkYW0ncyBUZXN0aW5nIFNlcnZlclxyXG4gIC8vIHVyaSA9ICdodHRwOi8vMTkyLjE2OC4xLjc6NDAwMCc7XHJcbiAgLy9QaGlsbGlwJ3MgVGVzdGluZyBTZXJ2ZXJcclxuXHQvLyB1cmkgPSAnaHR0cDovLzE5Mi4xNjguMS4zOjQwMDAnO1xyXG4gIC8vRmlyZWJhc2UgY2xvdWQgZnVuY3Rpb25zXHJcbiAgdXJpID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtY29sbGVnZXBvb2wtMTU1Mjc0OTExODYxNy5jbG91ZGZ1bmN0aW9ucy5uZXQnO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHsgfVxyXG5cclxuICBhZGRQYXltZW50VXNlcihpZCwgdXNlcm5hbWUsIG5hbWUsIGVtYWlsKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhgJHt0aGlzLnVyaX0vYWRkQ3VzdG9tZXIvJHt1c2VybmFtZX1gKVxyXG4gIFx0Ly8gcmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy51cml9L2N1c3RvbWVycy9hZGQvJHt1c2VybmFtZX1gKTtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke3RoaXMudXJpfS9hZGRDdXN0b21lcj91c2VybmFtZT0ke3VzZXJuYW1lfWApO1xyXG4gIH1cclxuXHJcbiAgZ2V0UGF5bWVudFVzZXJCeUlkKGlkKSB7XHJcbiAgICAvLyByZXR1cm4gdGhpcy5odHRwLmdldChgJHt0aGlzLnVyaX0vY3VzdG9tZXJzLyR7aWR9YCk7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldChgJHt0aGlzLnVyaX0vZ2V0Q3VzdG9tZXI/aWQ9JHtpZH1gKTtcclxuICB9XHJcblxyXG4gIGFkZFBheW1lbnRNZXRob2RUb1VzZXIoaWQsIG5vbmNlKSB7XHJcbiAgXHRjb25zdCBib2R5ID0ge1xyXG4gIFx0XHRpZDogaWQsXHJcbiAgXHRcdG5vbmNlOiBub25jZVxyXG4gIFx0fTtcclxuICBcdC8vIHJldHVybiB0aGlzLmh0dHAucG9zdChgaHR0cDovLzE5Mi4xNjguMS43OjQwMDAvY3VzdG9tZXJzL3BheW1lbnQvYCwgYm9keSk7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoYCR7dGhpcy51cml9L2FkZFBheW1lbnQ/YCwgYm9keSlcclxuICB9XHJcblxyXG4gIHJlbW92ZVBheW1lbnRNZXRob2RGcm9tVXNlcih0b2tlbikge1xyXG4gIFx0cmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy51cml9L3JlbW92ZVBheW1lbnQ/dG9rZW49JHt0b2tlbn1gKTtcclxuICB9XHJcblxyXG4gIGdldElkVG9rZW4oaWQpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke3RoaXMudXJpfS9nZXRUb2tlbj9pZD0ke2lkfWApO1xyXG4gIH1cclxuICBcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLnBheW1lbnQtdHlwZS1pY29uIHtcXHJcXG5cXHRoZWlnaHQ6IDM0O1xcclxcblxcdHdpZHRoOiAzNDtcXHJcXG5cXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuXFx0bWFyZ2luLXRvcDogMTg7XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTogMTg7XFxyXFxuXFx0bWFyZ2luLWxlZnQ6IDM2O1xcclxcbn1cXHJcXG5cXHJcXG4ucGF5bWVudC1pbmZvLWxhYmVsIHtcXHJcXG5cXHRmb250LXNpemU6IDE2O1xcclxcblxcdC8qZm9udC13ZWlnaHQ6IDcwMDsqL1xcclxcblxcdHBhZGRpbmc6IDMwO1xcclxcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHRjb2xvcjogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5hZGQtcGF5bWVudC1sYWJlbCB7XFxyXFxuXFx0Zm9udC1zaXplOiAxNjtcXHJcXG5cXHRjb2xvcjogI2FjMDBlNjtcXHJcXG5cXHRtYXJnaW4tbGVmdDogMzY7XFxyXFxuXFx0dGV4dC1hbGlnbjogbGVmdDtcXHJcXG5cXHRwYWRkaW5nOiAxODtcXHJcXG59XFxyXFxuXFxyXFxuLmNyZWRpdC1jYXJkLWljb24ge1xcclxcblxcdGNvbnRlbnQ6IHVybChcXFwifi9pbWcvY3JlZGl0LWNhcmQtaWNvbi5wbmdcXFwiKTtcXHJcXG59XFxyXFxuXFxyXFxuLnBheXBhbC1pY29uIHtcXHJcXG5cXHRjb250ZW50OiB1cmwoXFxcIn4vaW1nL3BheXBhbC1pY29uLnBuZ1xcXCIpO1xcclxcbn1cXHJcXG5cXHJcXG4udmVubW8taWNvbiB7XFxyXFxuXFx0Y29udGVudDogdXJsKFxcXCJ+L2ltZy92ZW5tby1pY29uLnBuZ1xcXCIpO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9zdCB7XFxyXFxuXFxyXFxuXFx0Ym9yZGVyLWNvbG9yOiAjZjFmMWYxO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9zdDpoaWdobGlnaHRlZCB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcXHJcXG59XFxyXFxuXFxyXFxuLmFjdGl2aXR5LWluZGljYXRvciB7XFxyXFxuXFx0Y29sb3I6ICNhYzAwZTY7XFxyXFxufVxcclxcblxcclxcbi5hZGQtY29udGFpbmVyIHtcXHJcXG5cXHR2aXNpYmlsaXR5OiBjb2xsYXBzZTtcXHJcXG59XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPFBhZ2U+XFxyXFxuXFx0PFBhZ2UuYWN0aW9uQmFyPlxcclxcblxcdFxcdDxBY3Rpb25CYXIgdGl0bGU9XFxcIlBheW1lbnRzXFxcIj5cXHJcXG5cXHRcXHQgIDxOYXZpZ2F0aW9uQnV0dG9uIHRleHQ9XFxcIkdvIEJhY2tcXFwiIGFuZHJvaWQuc3lzdGVtSWNvbj1cXFwiaWNfbWVudV9iYWNrXFxcIiAodGFwKT1cXFwib25OYXZCdG5UYXAoKVxcXCI+PC9OYXZpZ2F0aW9uQnV0dG9uPlxcclxcblxcdFxcdDwvQWN0aW9uQmFyPlxcclxcblxcdDwvUGFnZS5hY3Rpb25CYXI+XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFx0PFN0YWNrTGF5b3V0ICNwYXltZW50c0NvbnRhaW5lcj5cXHJcXG5cXHRcXHQ8TGlzdFZpZXcgW2l0ZW1zXT1cXFwicGF5bWVudHNcXFwiIHNlcGFyYXRvckNvbG9yPVxcXCJ0cmFuc3BhcmVudFxcXCIgKGl0ZW1UYXApPVxcXCJvblNlbGVjdCgkZXZlbnQpXFxcIj5cXHJcXG5cXHRcXHRcXHQ8bmctdGVtcGxhdGUgbGV0LWl0ZW09XFxcIml0ZW1cXFwiIGxldC1pPVxcXCJpbmRleFxcXCIgbGV0LW9kZD1cXFwib2RkXFxcIiBsZXQtZXZlbj1cXFwiZXZlblxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0PFN0YWNrTGF5b3V0IFtjbGFzcy5vZGRdPVxcXCJvZGRcXFwiIFtjbGFzcy5ldmVuXT1cXFwiZXZlblxcXCIgY2xhc3M9XFxcInBvc3RcXFwiIG9yaWVudGF0aW9uPVxcXCJob3Jpem9udGFsXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8SW1hZ2UgW3NyY109XFxcIml0ZW0ucGF5bWVudFR5cGVcXFwiIGNsYXNzPVxcXCJwYXltZW50LXR5cGUtaWNvblxcXCI+PC9JbWFnZT5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8TGFiZWwgdGV4dFdyYXA9XFxcInRydWVcXFwiIFt0ZXh0XT1cXFwiaXRlbS5pbmZvXFxcIiBjbGFzcz1cXFwicGF5bWVudC1pbmZvLWxhYmVsXFxcIj48L0xhYmVsPlxcclxcblxcdFxcdFxcdFxcdDwvU3RhY2tMYXlvdXQ+XFxyXFxuXFx0XFx0XFx0PC9uZy10ZW1wbGF0ZT5cXHJcXG5cXHRcXHQ8L0xpc3RWaWV3PlxcclxcblxcclxcblxcdFxcdDxTdGFja0xheW91dCAodGFwKT1cXFwic2hvd01vZGFsKClcXFwiICNhZGRDb250YWluZXIgY2xhc3M9XFxcImFkZC1jb250YWluZXJcXFwiPlxcclxcblxcdFxcdFxcdDxMYWJlbCB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgdGV4dD1cXFwiQWRkIHBheW1lbnQgbWV0aG9kXFxcIiBjbGFzcz1cXFwiYWRkLXBheW1lbnQtbGFiZWxcXFwiPjwvTGFiZWw+XFxyXFxuXFx0XFx0PC9TdGFja0xheW91dD4gIFxcclxcblxcdDwvU3RhY2tMYXlvdXQ+XFxyXFxuPC9QYWdlPlxcclxcblxcclxcbjxBY3Rpdml0eUluZGljYXRvciAjYWN0aXZpdHlJbmRpY2F0b3IgYnVzeT1cXFwidHJ1ZVxcXCIgd2lkdGg9XFxcIjQwXFxcIiBoZWlnaHQ9XFxcIjQwXFxcIiBjbGFzcz1cXFwiYWN0aXZpdHktaW5kaWNhdG9yXFxcIj5cXHJcXG48L0FjdGl2aXR5SW5kaWNhdG9yPlwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlQXJyYXkgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS1hcnJheSc7XHJcbmltcG9ydCB7IER5bmFtaWNBZGRTZXJ2aWNlIH0gZnJvbSAnLi4vZHluYW1pYy1hZGQuc2VydmljZSc7XHJcbmltcG9ydCAqIGFzIGRyb3BpbiBmcm9tICdicmFpbnRyZWUtd2ViLWRyb3AtaW4nO1xyXG5pbXBvcnQgKiBhcyBicmFpbnRyZWUgZnJvbSAnYnJhaW50cmVlLXdlYic7XHJcbmltcG9ydCB7IEJyYWludHJlZSwgQnJhaW5UcmVlT3B0aW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1icmFpbnRyZWUnO1xyXG5pbXBvcnQgeyBJUGF5UGFsQ29uZmlnIH0gZnJvbSAnbmd4LXBheXBhbCc7XHJcbmltcG9ydCB7IExvZ2luY2hlY2tTZXJ2aWNlIH0gZnJvbSAnLi4vbG9naW5jaGVjay5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUGF5bWVudFNlcnZpY2UgfSBmcm9tICcuLi9wYXltZW50LnNlcnZpY2UudG5zJztcclxuaW1wb3J0IHsgVHJhbnNmZXJTZXJ2aWNlIH0gZnJvbSAnLi4vZGF0YXRyYW5zZmVyLnNlcnZpY2UnO1xyXG5cclxuaW1wb3J0IHsgTW9kYWxEaWFsb2dQYXJhbXMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZGlyZWN0aXZlcy9kaWFsb2dzXCI7XHJcbmltcG9ydCB7IE1vZGFsRGlhbG9nU2VydmljZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9kaXJlY3RpdmVzL2RpYWxvZ3NcIjtcclxuaW1wb3J0IHsgQWRkUGF5bWVudENvbXBvbmVudCB9IGZyb20gJy4uL2FkZC1wYXltZW50L2FkZC1wYXltZW50LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBheW1lbnRJbmZvQ29tcG9uZW50IH0gZnJvbSAnLi4vcGF5bWVudC1pbmZvL3BheW1lbnQtaW5mby5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgQWN0aXZpdHlJbmRpY2F0b3IgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2FjdGl2aXR5LWluZGljYXRvcic7XHJcbmltcG9ydCB7IFN0YWNrTGF5b3V0IH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9sYXlvdXRzL3N0YWNrLWxheW91dCc7XHJcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9nc1wiO1xyXG5pbXBvcnQgKiBhcyBmaXJlYmFzZSBmcm9tICduYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlJztcclxuXHJcbmRlY2xhcmUgbGV0IHBheXBhbDogYW55O1xyXG5cclxuY2xhc3MgUGF5bWVudEl0ZW0ge1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXltZW50VHlwZTogc3RyaW5nLCBwdWJsaWMgaW5mbzogc3RyaW5nLCBwdWJsaWMgaWRUb2tlbjogc3RyaW5nLCBwdWJsaWMgdHlwZTogc3RyaW5nKSB7fVxyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1wYXltZW50cycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3BheW1lbnRzLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9wYXltZW50cy5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFBheW1lbnRzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgQFZpZXdDaGlsZCgnYWN0aXZpdHlJbmRpY2F0b3InLCB7IHN0YXRpYzogdHJ1ZSB9KSBhSTogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKCdhZGRDb250YWluZXInLCB7IHN0YXRpYzogdHJ1ZSB9KSBhQzogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKCdwYXltZW50c0NvbnRhaW5lcicsIHsgc3RhdGljOiB0cnVlIH0pIHBDOiBFbGVtZW50UmVmO1xyXG4gIHVzZXIgPSB7XHJcbiAgXHRwYXltZW50X2lkOiAnNTA3MzA1NzA2J1xyXG4gIH1cclxuICBvcHRzIDpCcmFpblRyZWVPcHRpb25zID0ge1xyXG4gICAgYW1vdW50OiBudWxsLFxyXG4gICAgY29sbGVjdERldmljZURhdGE6IHRydWUsXHJcbiAgICByZXF1ZXN0VGhyZWVEU2VjdXJlVmVyaWZpY2F0aW9uOiBmYWxzZSxcclxuICB9XHJcbiAgY2xpZW50VG9rZW4gPSAnJztcclxuICBwYXltZW50Q3VzdG9tZXI7XHJcbiAgcGF5bWVudEluZm87XHJcbiAgcGF5bWVudHMgPSBuZXcgT2JzZXJ2YWJsZUFycmF5PFBheW1lbnRJdGVtPigpO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFkZFNlcnZpY2U6IER5bmFtaWNBZGRTZXJ2aWNlLCBwcml2YXRlIHBheW1lbnRTZXJ2aWNlOiBQYXltZW50U2VydmljZSwgcHJpdmF0ZSBsb2dpbmNoZWNrU2VydmljZTogTG9naW5jaGVja1NlcnZpY2UsIHByaXZhdGUgdHJhbnNmZXJTZXJ2aWNlOiBUcmFuc2ZlclNlcnZpY2UsXHJcbiAgXHRwcml2YXRlIHZjUmVmOiBWaWV3Q29udGFpbmVyUmVmLCBwcml2YXRlIG1vZGFsOiBNb2RhbERpYWxvZ1NlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBmaXJlYmFzZS5nZXRDdXJyZW50VXNlcigpLnRoZW4odXNlciA9PiB7XHJcbiAgICAgIGZpcmViYXNlLmZpcmVzdG9yZS5jb2xsZWN0aW9uKCd1c2VycycpLmRvYyh1c2VyLnVpZCkuZ2V0KCkudGhlbihkb2MgPT4ge1xyXG4gICAgICAgIHRoaXMudXNlci5wYXltZW50X2lkID0gZG9jLmRhdGEoKS5wYXltZW50X2lkO1xyXG4gICAgICAgIHRoaXMuZ2V0VXNlcigpO1xyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICBcdFxyXG4gIH1cclxuXHJcbiAgc2hvd01vZGFsKCkge1xyXG4gICAgbGV0IGJyYWludHJlZSA9IG5ldyBCcmFpbnRyZWUoKTtcclxuICAgIC8vIHRoaXMuY3JlYXRlVmlld3MoKTtcclxuXHJcbiAgICBicmFpbnRyZWUuc3RhcnRQYXltZW50KHRoaXMuY2xpZW50VG9rZW4sIHRoaXMub3B0cyk7XHJcblxyXG4gICAgYnJhaW50cmVlLm9uKFwic3VjY2Vzc1wiLCAocmVzKSA9PiB7XHJcbiAgICAgICAgbGV0IG91dHB1dCA9IHJlcy5vYmplY3QuZ2V0KFwib3V0cHV0XCIpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUuZGlyKG91dHB1dCk7XHJcblxyXG4gICAgICAgIHZhciBhZGRDb250YWluZXIgPSA8U3RhY2tMYXlvdXQ+IHRoaXMuYUMubmF0aXZlRWxlbWVudDtcclxuICAgICAgICB2YXIgcGF5bWVudHNDb250YWluZXIgPSA8U3RhY2tMYXlvdXQ+IHRoaXMucEMubmF0aXZlRWxlbWVudDtcclxuICAgICAgICB2YXIgYWN0aXZpdHlJbmRpY2F0b3IgPSA8QWN0aXZpdHlJbmRpY2F0b3I+IHRoaXMuYUkubmF0aXZlRWxlbWVudDtcclxuICAgICAgICBwYXltZW50c0NvbnRhaW5lci5zdHlsZS52aXNpYmlsaXR5ID0gJ2NvbGxhcHNlJztcclxuICAgICAgICBhZGRDb250YWluZXIuc3R5bGUudmlzaWJpbGl0eSA9ICdjb2xsYXBzZSc7XHJcbiAgICAgICAgYWN0aXZpdHlJbmRpY2F0b3IuYnVzeSA9IHRydWU7XHJcblxyXG4gICAgICAgIHRoaXMucGF5bWVudFNlcnZpY2UuYWRkUGF5bWVudE1ldGhvZFRvVXNlcih0aGlzLnVzZXIucGF5bWVudF9pZCwgb3V0cHV0Lm5vbmNlKS5zdWJzY3JpYmUoKHJlczogYW55KSA9PiB7XHJcbiAgICAgICAgICBpZihyZXMubWVzc2FnZSA9PSAnU3VjY2VzcycpIHtcclxuICAgICAgICAgICAgZGlhbG9ncy5hbGVydCh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJBZGRlZCBtZXRob2RcIixcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiUGF5bWVudCBtZXRob2QgYWRkZWQgc3VjY2Vzc2Z1bGx5XCIsXHJcbiAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiQ2xvc2VcIlxyXG4gICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmdldFVzZXIoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2UgaWYocmVzLm1lc3NhZ2UgPT0gJ0FscmVhZHkgZXhpc3RzJykge1xyXG4gICAgICAgICAgICBhZGRDb250YWluZXIuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcclxuICAgICAgICAgICAgcGF5bWVudHNDb250YWluZXIuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcclxuICAgICAgICAgICAgYWN0aXZpdHlJbmRpY2F0b3IuYnVzeSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkaWFsb2dzLmFsZXJ0KHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIkNvdWxkIG5vdCBhZGQgbWV0aG9kXCIsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIlBheW1lbnQgbWV0aG9kIGFscmVhZHkgZXhpc3RzLCBwbGVhc2UgdHJ5IGFub3RoZXIgb25lLlwiLFxyXG4gICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIkNsb3NlXCJcclxuICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLy8gdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydwYXltZW50cyddKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC8vIHRoaXMucGF5bWVudFNlcnZpY2UuYWRkUGF5bWVudE1ldGhvZFRvVXNlcih0aGlzLnVzZXIucGF5bWVudF9pZCwgb3V0cHV0Lm5vbmNlKS5zdWJzY3JpYmUoKHJlcykgPT4ge1xyXG4gICAgICAgIC8vICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydwYXltZW50cyddKTtcclxuICAgICAgICAvLyB9KTtcclxuICAgIH0pXHJcbiAgICAgXHJcbiAgICBicmFpbnRyZWUub24oXCJjYW5jZWxcIiwgZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgIGxldCBvdXRwdXQgPSByZXMub2JqZWN0LmdldChcIm91dHB1dFwiKTtcclxuICAgICAgICAvLyBjb25zb2xlLmRpcihvdXRwdXQpO1xyXG4gICAgfSlcclxuICAgICBcclxuICAgIGJyYWludHJlZS5vbihcImVycm9yXCIsIGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICBsZXQgb3V0cHV0ID0gcmVzLm9iamVjdC5nZXQoXCJvdXRwdXRcIik7XHJcbiAgICAgICAgLy8gY29uc29sZS5kaXIob3V0cHV0KTtcclxuICAgIH0pXHJcbiAgICAvLyBsZXQgb3B0aW9ucyA9IHtcclxuICAgIC8vICAgICBjb250ZXh0OiB7fSxcclxuICAgIC8vICAgICBmdWxsc2NyZWVuOiB0cnVlLFxyXG4gICAgLy8gICAgIHZpZXdDb250YWluZXJSZWY6IHRoaXMudmNSZWZcclxuICAgIC8vICAgICAvLyBhbmltYXRlZDogdHJ1ZSxcclxuICAgIC8vICAgICAvLyB0cmFuc2l0aW9uOiB7IG5hbWU6IFwic2xpZGVUb3BcIiB9XHJcbiAgICAvLyB9O1xyXG4gICAgXHJcbiAgICAvLyB0aGlzLm1vZGFsLnNob3dNb2RhbChBZGRQYXltZW50Q29tcG9uZW50LCBvcHRpb25zKS50aGVuKHJlcyA9PiB7XHJcblxyXG4gICAgLy8gfSk7XHJcbiAgfVxyXG5cclxuICBnZXRVc2VyKCkge1xyXG4gICAgdGhpcy5wYXltZW50cy5zcGxpY2UoMCk7XHJcblxyXG4gICAgdmFyIGFkZENvbnRhaW5lciA9IDxTdGFja0xheW91dD4gdGhpcy5hQy5uYXRpdmVFbGVtZW50O1xyXG4gICAgdmFyIHBheW1lbnRzQ29udGFpbmVyID0gPFN0YWNrTGF5b3V0PiB0aGlzLnBDLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICBhZGRDb250YWluZXIuc3R5bGUudmlzaWJpbGl0eSA9ICdjb2xsYXBzZSc7XHJcbiAgICBwYXltZW50c0NvbnRhaW5lci5zdHlsZS52aXNpYmlsaXR5ID0gJ2NvbGxhcHNlJztcclxuXHJcbiAgXHR0aGlzLnBheW1lbnRTZXJ2aWNlLmdldFBheW1lbnRVc2VyQnlJZCh0aGlzLnVzZXIucGF5bWVudF9pZCkuc3Vic2NyaWJlKChkYXRhKSA9PiB7XHJcbiAgICAgIHRoaXMuc2V0dXBWaWV3cygpO1xyXG5cclxuICBcdFx0dGhpcy5wYXltZW50Q3VzdG9tZXIgPSBkYXRhO1xyXG4gIFx0XHQvLyBjb25zb2xlLmxvZyh0aGlzLnBheW1lbnRDdXN0b21lcilcclxuICBcdFx0aWYodGhpcy5wYXltZW50Q3VzdG9tZXIuY3JlZGl0Q2FyZHMgIT0gbnVsbClcclxuXHQgIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5wYXltZW50Q3VzdG9tZXIuY3JlZGl0Q2FyZHMubGVuZ3RoOyBpKyspIFxyXG5cdCAgXHRcdFx0dGhpcy5wYXltZW50cy5wdXNoKG5ldyBQYXltZW50SXRlbShcIn4vaW1nL2NyZWRpdC1jYXJkLWljb24ucG5nXCIsIHRoaXMucGF5bWVudEN1c3RvbWVyLmNyZWRpdENhcmRzW2ldLmNhcmRUeXBlICsgXCIgZW5kaW5nIGluIFwiICsgdGhpcy5wYXltZW50Q3VzdG9tZXIuY3JlZGl0Q2FyZHNbaV0ubGFzdDQsIHRoaXMucGF5bWVudEN1c3RvbWVyLmNyZWRpdENhcmRzW2ldLnRva2VuLCBcIkNhcmRcIikpO1xyXG4gIFx0XHRpZih0aGlzLnBheW1lbnRDdXN0b21lci5wYXlwYWxBY2NvdW50cyAhPSBudWxsKVxyXG4gIFx0XHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLnBheW1lbnRDdXN0b21lci5wYXlwYWxBY2NvdW50cy5sZW5ndGg7IGkrKylcclxuICBcdFx0XHRcdHRoaXMucGF5bWVudHMucHVzaChuZXcgUGF5bWVudEl0ZW0oXCJ+L2ltZy9wYXlwYWwtaWNvbi5wbmdcIiwgdGhpcy5wYXltZW50Q3VzdG9tZXIucGF5cGFsQWNjb3VudHNbaV0uZW1haWwsIHRoaXMucGF5bWVudEN1c3RvbWVyLnBheXBhbEFjY291bnRzW2ldLnRva2VuLCBcIlBheVBhbFwiKSlcclxuICBcdFx0aWYodGhpcy5wYXltZW50Q3VzdG9tZXIudmVubW9BY2NvdW50cyAhPSBudWxsKVxyXG4gIFx0XHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLnBheW1lbnRDdXN0b21lci52ZW5tb0FjY291bnRzLmxlbmd0aDsgaSsrKVxyXG4gIFx0XHRcdFx0dGhpcy5wYXltZW50cy5wdXNoKG5ldyBQYXltZW50SXRlbShcIn4vaW1nL3Zlbm1vLWljb24ucG5nXCIsIHRoaXMucGF5bWVudEN1c3RvbWVyLnZlbm1vQWNjb3VudHNbaV0udmVubW9Vc2VySWQsIHRoaXMucGF5bWVudEN1c3RvbWVyLnZlbm1vQWNjb3VudHNbaV0udG9rZW4sIFwiVmVubW9cIikpXHJcbiAgXHRcdC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaXN0LWxvYWRpbmctY2lyY2xlJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICBcdH0pO1xyXG4gICAgdGhpcy5wYXltZW50U2VydmljZS5nZXRJZFRva2VuKHRoaXMudXNlci5wYXltZW50X2lkKS5zdWJzY3JpYmUoKHJlczogYW55KSA9PiB7XHJcbiAgICAgIHRoaXMuY2xpZW50VG9rZW4gPSByZXMuY2xpZW50VG9rZW47XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNldHVwVmlld3MoKSB7XHJcbiAgICB2YXIgYWN0aXZpdHlJbmRpY2F0b3IgPSA8QWN0aXZpdHlJbmRpY2F0b3I+IHRoaXMuYUkubmF0aXZlRWxlbWVudDtcclxuICAgIGFjdGl2aXR5SW5kaWNhdG9yLmJ1c3kgPSBmYWxzZTtcclxuXHJcbiAgICB2YXIgYWRkQ29udGFpbmVyID0gPFN0YWNrTGF5b3V0PiB0aGlzLmFDLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICBhZGRDb250YWluZXIuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcclxuXHJcbiAgICB2YXIgcGF5bWVudHNDb250YWluZXIgPSA8U3RhY2tMYXlvdXQ+IHRoaXMucEMubmF0aXZlRWxlbWVudDtcclxuICAgIHBheW1lbnRzQ29udGFpbmVyLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XHJcbiAgfVxyXG5cclxuICBzZWxlY3RQYXltZW50KCkge1xyXG5cclxuICB9XHJcblxyXG4gIG9uU2VsZWN0KGV2ZW50KSB7XHJcbiAgXHQvLyBjb25zb2xlLmxvZyhldmVudC5pbmRleCk7XHJcbiAgXHRsZXQgb3B0aW9ucyA9IHtcclxuICAgICAgICBjb250ZXh0OiB7fSxcclxuICAgICAgICBmdWxsc2NyZWVuOiB0cnVlLFxyXG4gICAgICAgIHZpZXdDb250YWluZXJSZWY6IHRoaXMudmNSZWZcclxuICAgICAgICAvLyBhbmltYXRlZDogdHJ1ZSxcclxuICAgICAgICAvLyB0cmFuc2l0aW9uOiB7IG5hbWU6IFwic2xpZGVUb3BcIiB9XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMudHJhbnNmZXJTZXJ2aWNlLnNldERhdGEodGhpcy5wYXltZW50cy5nZXRJdGVtKGV2ZW50LmluZGV4KSk7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ3BheW1lbnRpbmZvJ10pO1xyXG4gICAgLy8gdGhpcy5tb2RhbC5zaG93TW9kYWwoUGF5bWVudEluZm9Db21wb25lbnQsIG9wdGlvbnMpLnRoZW4ocmVzID0+IHtcclxuXHJcbiAgICAvLyB9KTtcclxuICB9XHJcblxyXG4gIG9uTmF2QnRuVGFwKCkge1xyXG4gICAgdGhpcy5yb3V0ZXIuYmFjaygpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQbGFjZXNBdXRvY29tcGxldGVTZXJ2aWNlIHtcclxuXHJcbiAgcGxhY2VzX3VyaSA9ICdodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvcGxhY2UvdGV4dHNlYXJjaC9qc29uP2tleT1BSXphU3lBSVR4UzFqbWY4UE10YXpSZ3VXY0FmV1F4VzFrUE9vWWcmcXVlcnk9J1xyXG4gIGF1dG9jb21wbGV0ZV91cmkgPSAnaHR0cHM6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL3BsYWNlL2F1dG9jb21wbGV0ZS9qc29uP2tleT1BSXphU3lBSVR4UzFqbWY4UE10YXpSZ3VXY0FmV1F4VzFrUE9vWWcmc2Vzc2lvbnRva2VuPTEyMzQ1Njc4OTAmaW5wdXQ9J1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cENsaWVudDogSHR0cENsaWVudCkgeyB9XHJcblxyXG4gIGdldEF1dG9jb21wbGV0ZVJlc3VsdHMocGxhY2UpIHtcclxuICBcdHJldHVybiB0aGlzLmh0dHBDbGllbnQuZ2V0KGAke3RoaXMuYXV0b2NvbXBsZXRlX3VyaX1gICsgcGxhY2UpO1xyXG4gIH1cclxuXHJcbiAgZ2V0UGxhY2VSZXN1bHRzKHBsYWNlKSB7XHJcbiAgXHRyZXR1cm4gdGhpcy5odHRwQ2xpZW50LmdldChgJHt0aGlzLnBsYWNlc191cml9YCArIHBsYWNlKTtcclxuICB9XHJcblxyXG4gIGdldEF1dG9jb21wbGV0ZVJlc3VsdHNHZW9jb2RlKHBsYWNlKSB7XHJcbiAgXHRyZXR1cm4gdGhpcy5odHRwQ2xpZW50LmdldChgJHt0aGlzLmF1dG9jb21wbGV0ZV91cml9YCArIHBsYWNlICsgYCZ0eXBlcz1nZW9jb2RlYCk7XHJcbiAgfVxyXG4gIGdldEF1dG9jb21wbGV0ZVJlc3VsdHNFc3RhYmxpc2htZW50KHBsYWNlKSB7XHJcbiAgXHRyZXR1cm4gdGhpcy5odHRwQ2xpZW50LmdldChgJHt0aGlzLmF1dG9jb21wbGV0ZV91cml9YCArIHBsYWNlICsgYCZ0eXBlcz1lc3RhYmxpc2htZW50YCk7XHJcbiAgfVxyXG4gIGdldEF1dG9jb21wbGV0ZVJlc3VsdHNBZGRyZXNzKHBsYWNlKSB7XHJcbiAgXHRyZXR1cm4gdGhpcy5odHRwQ2xpZW50LmdldChgJHt0aGlzLmF1dG9jb21wbGV0ZV91cml9YCArIHBsYWNlICsgYCZ0eXBlcz1hZGRyZXNzYCk7XHJcbiAgfVxyXG4gIGdldEF1dG9jb21wbGV0ZVJlc3VsdHNDaXR5KHBsYWNlKSB7XHJcbiAgXHRyZXR1cm4gdGhpcy5odHRwQ2xpZW50LmdldChgJHt0aGlzLmF1dG9jb21wbGV0ZV91cml9YCArIHBsYWNlICsgYCZ0eXBlcz0oY2l0aWVzKWApO1xyXG4gIH1cclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLyogQWRkIG1vYmlsZSBzdHlsZXMgZm9yIHRoZSBjb21wb25lbnQgaGVyZS4gICovXFxyXFxuLm1hcC12aWV3IHtcXHJcXG5cXHRoZWlnaHQ6IDEwMCU7XFxyXFxuXFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0dmVydGljYWwtYWxpZ246IGJvdHRvbTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2ZpbGUtcGljdHVyZSB7XFxyXFxuXFx0aGVpZ2h0OiA1MDtcXHJcXG5cXHR3aWR0aDogNTA7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMTAwJTtcXHJcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcclxcblxcdG1hcmdpbi1sZWZ0OiAxNjtcXHJcXG5cXHRtYXJnaW4tdG9wOiAyMDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hbWUtbGFiZWwge1xcclxcblxcdG1hcmdpbi10b3A6IDE2O1xcclxcblxcdG1hcmdpbi1sZWZ0OiAxODtcXHJcXG5cXHRjb2xvcjogYmxhY2s7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDcwMDtcXHJcXG5cXHRmb250LXNpemU6IDE3O1xcclxcblxcdHRleHQtYWxpZ246IGxlZnQ7XFxyXFxufVxcclxcblxcclxcbi5pbmZvLWxhYmVsIHtcXHJcXG5cXHRtYXJnaW4tdG9wOiA0O1xcclxcblxcdG1hcmdpbi1sZWZ0OiAxODtcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiAxNjtcXHJcXG5cXHRjb2xvcjogYmxhY2s7XFxyXFxuXFx0dGV4dC1hbGlnbjogbGVmdDtcXHJcXG59XFxyXFxuXFxyXFxuLmxhYmVsLWNvbnRhaW5lciB7XFxyXFxuXFx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcXHJcXG59XFxyXFxuXFxyXFxuLmFjdGl2aXR5LWluZGljYXRvciB7XFxyXFxuXFx0Y29sb3I6ICNhYzAwZTY7XFxyXFxufVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxQYWdlLmFjdGlvbkJhcj5cXHJcXG4gICAgPEFjdGlvbkJhciB0aXRsZT1cXFwiUG9zdFxcXCI+XFxyXFxuICAgIFxcdDxOYXZpZ2F0aW9uQnV0dG9uIHRleHQ9XFxcIkdvIEJhY2tcXFwiIGFuZHJvaWQuc3lzdGVtSWNvbj1cXFwiaWNfbWVudV9iYWNrXFxcIiAodGFwKT1cXFwib25OYXZCdG5UYXAoKVxcXCI+PC9OYXZpZ2F0aW9uQnV0dG9uPlxcclxcblxcdCAgICA8QWN0aW9uSXRlbSAodGFwKT1cXFwicHJvbXB0RGVsZXRlKClcXFwiXFxyXFxuXFx0ICAgICAgaW9zLnN5c3RlbUljb249XFxcIjE2XFxcIiBpb3MucG9zaXRpb249XFxcInJpZ2h0XFxcIlxcclxcblxcdCAgICAgIHRleHQ9XFxcIkRlbGV0ZVxcXCIgYW5kcm9pZC5wb3NpdGlvbj1cXFwicG9wdXBcXFwiICNkZWxldGVJdGVtPjwvQWN0aW9uSXRlbT5cXHJcXG5cXHQgICAgPEFjdGlvbkl0ZW0gKHRhcCk9XFxcIm9uUmVwb3J0KClcXFwiXFxyXFxuXFx0ICAgICAgaW9zLnN5c3RlbUljb249XFxcIjlcXFwiIGlvcy5wb3NpdGlvbj1cXFwicmlnaHRcXFwiXFxyXFxuXFx0ICAgICAgdGV4dD1cXFwiUmVwb3J0XFxcIiBhbmRyb2lkLnBvc2l0aW9uPVxcXCJwb3B1cFxcXCI+PC9BY3Rpb25JdGVtPlxcclxcbiAgICA8L0FjdGlvbkJhcj5cXHJcXG48L1BhZ2UuYWN0aW9uQmFyPlxcclxcbjxHcmlkTGF5b3V0IHJvd3M9XFxcIjIqLGF1dG8sMTAqXFxcIiAjbGF5b3V0PlxcclxcblxcdDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cXFwiaG9yaXpvbnRhbFxcXCIgcm93PVxcXCIwXFxcIiBjbGFzcz1cXFwibGFiZWwtY29udGFpbmVyXFxcIiAjaW5mb0NvbnRhaW5lcj5cXHJcXG5cXHRcXHQ8SW1hZ2Ugc3JjPVxcXCJ7eyBwcm9maWxlU291cmNlIH19XFxcIiBjbGFzcz1cXFwicHJvZmlsZS1waWN0dXJlXFxcIiBzdHJldGNoPVxcXCJhc3BlY3RGaXRcXFwiPjwvSW1hZ2U+XFxyXFxuXFx0ICBcXHQ8U3RhY2tMYXlvdXQ+XFxyXFxuXFx0ICAgICAgXFx0PExhYmVsIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiBpZD1cXFwicG9zdC1uYW1lXFxcIiBjbGFzcz1cXFwibmFtZS1sYWJlbFxcXCIgdGV4dD1cXFwie3sgdXNlcm5hbWUgfX1cXFwiPjwvTGFiZWw+XFxyXFxuXFx0ICAgICAgXFx0PExhYmVsIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiBpZD1cXFwicG9zdC1pbmZvXFxcIiBjbGFzcz1cXFwiaW5mby1sYWJlbFxcXCIgdGV4dD1cXFwie3sgaW5mbyB9fVxcXCI+PC9MYWJlbD5cXHJcXG5cXHQgICAgPC9TdGFja0xheW91dD5cXHJcXG5cXHQ8L1N0YWNrTGF5b3V0PlxcclxcblxcdDxTdGFja0xheW91dCBjbGFzcz1cXFwiYnRuLWNvbnRhaW5lclxcXCIgI2J1dHRvbkNvbnRhaW5lciByb3c9XFxcIjFcXFwiPlxcclxcblxcdFxcdDxCdXR0b24gY2xhc3M9XFxcImNvbm5lY3QtYnRuXFxcIiAodGFwKT1cXFwib25Db25uZWN0VGFwKClcXFwiIHRleHQ9XFxcInt7IGJ1dHRvblRleHQgfX1cXFwiPjwvQnV0dG9uPlxcclxcblxcdDwvU3RhY2tMYXlvdXQ+XFxyXFxuXFx0PE1hcFZpZXcgKG1hcFJlYWR5KT1cXFwib25NYXBSZWFkeSgkZXZlbnQpXFxcIiBbbGF0aXR1ZGVdPVxcXCJsYXRpdHVkZVxcXCIgW2xvbmdpdHVkZV09XFxcImxvbmdpdHVkZVxcXCIgY2xhc3M9XFxcIm1hcC12aWV3XFxcIiByb3c9XFxcIjJcXFwiICNtYXBWaWV3PjwvTWFwVmlldz5cXHJcXG48L0dyaWRMYXlvdXQ+XFxyXFxuPEFjdGl2aXR5SW5kaWNhdG9yICNhY3Rpdml0eUluZGljYXRvciBidXN5PVxcXCJ0cnVlXFxcIiB3aWR0aD1cXFwiNDBcXFwiIGhlaWdodD1cXFwiNDBcXFwiIGNsYXNzPVxcXCJhY3Rpdml0eS1pbmRpY2F0b3JcXFwiPjwvQWN0aXZpdHlJbmRpY2F0b3I+XCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NvbnRhaW5lclJlZiwgVmlld1JlZiwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCAqIGFzIGZpcmViYXNlIGZyb20gJ25hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2UnO1xyXG5pbXBvcnQgeyBHb29nbGVNYXBzU2VydmljZSB9IGZyb20gJy4uL2dvb2dsZS1tYXBzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgVHJhbnNmZXJTZXJ2aWNlIH0gZnJvbSAnLi4vZGF0YXRyYW5zZmVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb25JdGVtIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9hY3Rpb24tYmFyJztcclxuaW1wb3J0IHsgU3RhY2tMYXlvdXQgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvc3RhY2stbGF5b3V0JztcclxuaW1wb3J0IHsgR3JpZExheW91dCB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvbGF5b3V0cy9ncmlkLWxheW91dCc7XHJcbmltcG9ydCB7IEFjdGl2aXR5SW5kaWNhdG9yIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9hY3Rpdml0eS1pbmRpY2F0b3InO1xyXG5pbXBvcnQge3JlZ2lzdGVyRWxlbWVudH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2VsZW1lbnQtcmVnaXN0cnlcIjtcclxuaW1wb3J0IHtpc0FuZHJvaWQsIGlzSU9TfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybVwiO1xyXG5pbXBvcnQgeyBNYXBWaWV3LCBNYXJrZXIsIFBvc2l0aW9uIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWdvb2dsZS1tYXBzLXNkayc7XHJcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9nc1wiO1xyXG5pbXBvcnQgeyBMb2dpbmNoZWNrU2VydmljZSB9IGZyb20gJy4uL2xvZ2luY2hlY2suc2VydmljZS50bnMnO1xyXG5pbXBvcnQgeyBDaGF0TWVzc2FnZSB9IGZyb20gJy4uL21vZGVscy9jaGF0LW1lc3NhZ2UubW9kZWwnO1xyXG5cclxucmVnaXN0ZXJFbGVtZW50KFwiTWFwVmlld1wiLCAoKSA9PiByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWdvb2dsZS1tYXBzLXNka1wiKS5NYXBWaWV3KTtcclxuZGVjbGFyZSB2YXIgY29tOmFueTtcclxuZGVjbGFyZSB2YXIgR01TQ29vcmRpbmF0ZUJvdW5kczogYW55O1xyXG5kZWNsYXJlIHZhciBHTVNDYW1lcmFVcGRhdGU6IGFueTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLXBvc3RpbmctaW5mbycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3Bvc3RpbmctaW5mby5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vcG9zdGluZy1pbmZvLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUG9zdGluZ0luZm9Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBAVmlld0NoaWxkKFwiZGVsZXRlSXRlbVwiLCB7IHN0YXRpYzogdHJ1ZSB9KSBkZWxldGVJdGVtOiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoXCJidXR0b25Db250YWluZXJcIiwgeyBzdGF0aWM6IHRydWUgfSkgYnV0dG9uQ29udGFpbmVyOiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoXCJpbmZvQ29udGFpbmVyXCIsIHsgc3RhdGljOiB0cnVlIH0pIGluZm9Db250YWluZXI6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZChcImFjdGl2aXR5SW5kaWNhdG9yXCIsIHsgc3RhdGljOiB0cnVlIH0pIGFpOiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoXCJsYXlvdXRcIiwgeyBzdGF0aWM6IHRydWUgfSkgbGF5b3V0OiBFbGVtZW50UmVmO1xyXG4gIG1hcFZpZXc6IE1hcFZpZXc7XHJcbiAgbGF0aXR1ZGUgPSAgMzc7XHJcbiAgbG9uZ2l0dWRlID0gLTEyMjtcclxuXHJcbiAgc3RhcnRMYXQ7XHJcbiAgZW5kTGF0O1xyXG4gIHN0YXJ0TG5nO1xyXG4gIGVuZExuZztcclxuICBib3VuZHM7XHJcbiAgbWFwRGF0YTtcclxuICB1c2VySWQ7XHJcbiAgcHJvZmlsZVNvdXJjZTtcclxuICBpbmZvO1xyXG4gIHVzZXJuYW1lO1xyXG4gIGJ1dHRvblRleHQ7XHJcbiAgY3VycmVudFVzZXJOYW1lO1xyXG5cclxuICBjaGF0VXNlcnMgPSBbXTtcclxuICBjdXJyZW50VXNlcjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtYXBTZXJ2aWNlOiBHb29nbGVNYXBzU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMsIHByaXZhdGUgdHJhbnNmZXJTZXJ2aWNlOiBUcmFuc2ZlclNlcnZpY2UsIHByaXZhdGUgcGFnZTogUGFnZSxcclxuICAgIHByaXZhdGUgbG9naW5jaGVja1NlcnZpY2U6IExvZ2luY2hlY2tTZXJ2aWNlKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgXHR0aGlzLmxvYWRWaWV3cygpO1xyXG4gIH1cclxuXHJcbiAgbG9hZFZpZXdzKCkge1xyXG4gICAgbGV0IGFjdGl2aXR5SW5kaWNhdG9yID0gPEFjdGl2aXR5SW5kaWNhdG9yPiB0aGlzLmFpLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICBsZXQgaW5mb0NvbnRhaW5lciA9IDxTdGFja0xheW91dD4gdGhpcy5pbmZvQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICBsZXQgZGVsZXRlQnV0dG9uID0gPEFjdGlvbkl0ZW0+IHRoaXMuZGVsZXRlSXRlbS5uYXRpdmVFbGVtZW50O1xyXG4gICAgbGV0IGNoYXRCdXR0b24gPSA8U3RhY2tMYXlvdXQ+IHRoaXMuYnV0dG9uQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQ7XHJcblxyXG4gICAgaW5mb0NvbnRhaW5lci52aXNpYmlsaXR5ID0gJ2NvbGxhcHNlJztcclxuICAgIGNoYXRCdXR0b24udmlzaWJpbGl0eSA9ICdjb2xsYXBzZSc7XHJcbiAgICB0aGlzLnVzZXJJZCA9IHRoaXMubG9naW5jaGVja1NlcnZpY2UuZ2V0VXNlcigpO1xyXG4gICAgdGhpcy5tYXBEYXRhID0gdGhpcy50cmFuc2ZlclNlcnZpY2UuZ2V0RGF0YSgpO1xyXG4gICAgZmlyZWJhc2UuZmlyZXN0b3JlLmNvbGxlY3Rpb24oJ3VzZXJzJykuZG9jKHRoaXMudXNlcklkKS5nZXQoKS50aGVuKChkb2MpID0+IHtcclxuICAgICAgdGhpcy5jdXJyZW50VXNlciA9IGRvYy5kYXRhKCk7XHJcbiAgICAgIGlmKGRvYy5kYXRhKCkuY2hhdHMuaW5jbHVkZXModGhpcy5tYXBEYXRhLnBvc3RJbmZvLmlkKSkge1xyXG4gICAgICAgIHRoaXMuYnV0dG9uVGV4dCA9ICdWaWV3IGNoYXQnO1xyXG4gICAgICAgIGFjdGl2aXR5SW5kaWNhdG9yLmJ1c3kgPSBmYWxzZTtcclxuICAgICAgICBpbmZvQ29udGFpbmVyLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XHJcbiAgICAgICAgY2hhdEJ1dHRvbi52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIGZpcmViYXNlLmZpcmVzdG9yZS5jb2xsZWN0aW9uKCdjaGF0cycpLmRvYyh0aGlzLm1hcERhdGEucG9zdEluZm8uZGF0YS51aWQpLmdldCgpLnRoZW4oKGRvYykgPT4ge1xyXG4gICAgICAgICAgaWYoIWRvYy5leGlzdHMgJiYgdGhpcy51c2VySWQgPT09IHRoaXMubWFwRGF0YS5wb3N0SW5mby5kYXRhLnVpZClcclxuICAgICAgICAgICAgY2hhdEJ1dHRvbi52aXNpYmlsaXR5ID0gJ2NvbGxhcHNlJztcclxuICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgY2hhdEJ1dHRvbi52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xyXG4gICAgICAgICAgYWN0aXZpdHlJbmRpY2F0b3IuYnVzeSA9IGZhbHNlO1xyXG4gICAgICAgICAgaW5mb0NvbnRhaW5lci52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5idXR0b25UZXh0ID0gJ0pvaW4gY2hhdCc7XHJcbiAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgaWYoaXNJT1MpIHtcclxuICAgICAgdGhpcy5ib3VuZHMgPSBHTVNDb29yZGluYXRlQm91bmRzLmFsbG9jKCkuaW5pdCgpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICB0aGlzLnN0YXJ0TGF0ID0gdGhpcy5tYXBEYXRhLnBvc3RJbmZvLmRhdGEuc3RhcnRMYXQ7XHJcbiAgICB0aGlzLmVuZExhdCA9IHRoaXMubWFwRGF0YS5wb3N0SW5mby5kYXRhLmVuZExhdDtcclxuICAgIHRoaXMuc3RhcnRMbmcgPSB0aGlzLm1hcERhdGEucG9zdEluZm8uZGF0YS5zdGFydExuZztcclxuICAgIHRoaXMuZW5kTG5nID0gdGhpcy5tYXBEYXRhLnBvc3RJbmZvLmRhdGEuZW5kTG5nO1xyXG4gICAgdGhpcy5pbmZvID0gdGhpcy5tYXBEYXRhLnBvc3RJdGVtLmluZm87XHJcbiAgICB0aGlzLnByb2ZpbGVTb3VyY2UgPSB0aGlzLm1hcERhdGEucG9zdEl0ZW0ucHJvZmlsZVNvdXJjZTtcclxuICAgIHRoaXMudXNlcm5hbWUgPSB0aGlzLm1hcERhdGEucG9zdEl0ZW0udXNlcm5hbWU7XHJcblxyXG4gICAgXHJcbiAgICBpZih0aGlzLnVzZXJJZCAhPT0gdGhpcy5tYXBEYXRhLnBvc3RJbmZvLmRhdGEudWlkKSB7XHJcbiAgICAgIGRlbGV0ZUJ1dHRvbi52aXNpYmlsaXR5ID0gJ2NvbGxhcHNlJztcclxuICAgIH1cclxuXHJcbiAgICBmaXJlYmFzZS5nZXRDdXJyZW50VXNlcigpLnRoZW4oKHVzZXIpID0+IHtcclxuICAgICAgdGhpcy5jdXJyZW50VXNlck5hbWUgPSB1c2VyLmRpc3BsYXlOYW1lO1xyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIG9uTWFwUmVhZHkoZXZlbnQpIHtcclxuICBcdHRoaXMubWFwVmlldyA9IGV2ZW50Lm9iamVjdDtcclxuXHJcblx0Ly8gdGhpcy5sYXRpdHVkZSA9ICh0aGlzLnN0YXJ0TGF0ICsgdGhpcy5lbmRMYXQpIC8gMi4wO1xyXG5cdC8vIHRoaXMubG9uZ2l0dWRlID0gKHRoaXMuc3RhcnRMbmcgKyB0aGlzLmVuZExuZykgLyAyLjA7XHJcbiAgXHR0aGlzLmFkZE1hcmtlcih0aGlzLnN0YXJ0TGF0LCB0aGlzLnN0YXJ0TG5nLCB0aGlzLm1hcERhdGEucG9zdEluZm8uZGF0YS5zdGFydEFkZHJlc3MsIHRoaXMubWFwRGF0YS5wb3N0SW5mby5kYXRhLnN0YXJ0Rm9ybWF0dGVkLCAwKTtcclxuXHQgIHRoaXMuYWRkTWFya2VyKHRoaXMuZW5kTGF0LCB0aGlzLmVuZExuZywgdGhpcy5tYXBEYXRhLnBvc3RJbmZvLmRhdGEuZW5kQWRkcmVzcywgdGhpcy5tYXBEYXRhLnBvc3RJbmZvLmRhdGEuZW5kRm9ybWF0dGVkLCAxKTtcclxuXHJcbiAgXHRpZihpc0FuZHJvaWQpIHtcclxuICAgIFx0XHR2YXIgYnVpbGRlciA9IG5ldyBjb20uZ29vZ2xlLmFuZHJvaWQuZ21zLm1hcHMubW9kZWwuTGF0TG5nQm91bmRzLkJ1aWxkZXIoKTtcclxuICBcdFx0dGhpcy5tYXBWaWV3LmZpbmRNYXJrZXIoZnVuY3Rpb24gKG1hcmtlcikgeyBidWlsZGVyLmluY2x1ZGUobWFya2VyLmFuZHJvaWQuZ2V0UG9zaXRpb24oKSk7IHJldHVybiBmYWxzZX0pO1xyXG4gIFx0XHR2YXIgYm91bmRzID0gYnVpbGRlci5idWlsZCgpO1xyXG4gIFx0XHR2YXIgY3UgPSBjb20uZ29vZ2xlLmFuZHJvaWQuZ21zLm1hcHMuQ2FtZXJhVXBkYXRlRmFjdG9yeS5uZXdMYXRMbmdCb3VuZHMoYm91bmRzLCAxNTApO1xyXG4gIFx0XHR0aGlzLm1hcFZpZXcuZ01hcC5hbmltYXRlQ2FtZXJhKGN1KTtcclxuICBcdH1cclxuICBcdGVsc2UgaWYoaXNJT1MpIHtcclxuICBcdFx0dmFyIHVwZGF0ZSA9IEdNU0NhbWVyYVVwZGF0ZS5maXRCb3VuZHNXaXRoUGFkZGluZyhib3VuZHMsIDE1MCk7IHRoaXMubWFwVmlldy5nTWFwLm1vdmVDYW1lcmEodXBkYXRlKTtcclxuICBcdH1cclxuXHJcbiAgfVxyXG5cclxuICBhZGRNYXJrZXIobGF0LCBsbmcsIHRpdGxlLCBzbmlwcGV0LCBpbmRleCkge1xyXG4gIFx0dmFyIG1hcmtlciA9IG5ldyBNYXJrZXIoKTtcclxuICAgIG1hcmtlci5wb3NpdGlvbiA9IFBvc2l0aW9uLnBvc2l0aW9uRnJvbUxhdExuZyhsYXQsIGxuZyk7XHJcbiAgICBtYXJrZXIudGl0bGUgPSB0aXRsZTtcclxuICAgIG1hcmtlci5zbmlwcGV0ID0gc25pcHBldDtcclxuICAgIG1hcmtlci51c2VyRGF0YSA9IHtpbmRleDogaW5kZXh9O1xyXG4gICAgdGhpcy5tYXBWaWV3LmFkZE1hcmtlcihtYXJrZXIpO1xyXG4gICAgaWYoaXNJT1MpXHJcbiAgICBcdHRoaXMuYm91bmRzID0gdGhpcy5ib3VuZHMuaW5jbHVkaW5nQ29vcmRpbmF0ZShtYXJrZXIucG9zaXRpb24pO1xyXG4gIH1cclxuXHJcbiAgb25OYXZCdG5UYXAoKSB7XHJcbiAgXHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ25hdmlnYXRpb24nXSwge2NsZWFySGlzdG9yeTogdHJ1ZX0pO1xyXG4gIH1cclxuXHJcbiAgZGVsZXRlRmlsZXMoKSB7XHJcbiAgICBmaXJlYmFzZS5zdG9yYWdlLmRlbGV0ZUZpbGUoe1xyXG4gICAgICAvLyB0aGUgZnVsbCBwYXRoIG9mIGFuIGV4aXN0aW5nIGZpbGUgaW4geW91ciBGaXJlYmFzZSBzdG9yYWdlXHJcbiAgICAgIHJlbW90ZUZ1bGxQYXRoOiAncG9zdGluZ3MvJyArIHRoaXMubWFwRGF0YS5wb3N0SW5mby5pZCArICcvbWFwcy9sYXJnZV9tYXAucG5nJ1xyXG4gICAgfSkudGhlbihcclxuICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkZpbGUgZGVsZXRlZC5cIik7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAoZXJyb3IpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiRmlsZSBkZWxldGlvbiBFcnJvcjogXCIgKyBlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgKTtcclxuICAgIGZpcmViYXNlLnN0b3JhZ2UuZGVsZXRlRmlsZSh7XHJcbiAgICAgIC8vIHRoZSBmdWxsIHBhdGggb2YgYW4gZXhpc3RpbmcgZmlsZSBpbiB5b3VyIEZpcmViYXNlIHN0b3JhZ2VcclxuICAgICAgcmVtb3RlRnVsbFBhdGg6ICdwb3N0aW5ncy8nICsgdGhpcy5tYXBEYXRhLnBvc3RJbmZvLmlkICsgJy9tYXBzL3NtYWxsX21hcC5wbmcnXHJcbiAgICB9KS50aGVuKFxyXG4gICAgICAgICgpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiRmlsZSBkZWxldGVkLlwiKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJGaWxlIGRlbGV0aW9uIEVycm9yOiBcIiArIGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJvbXB0RGVsZXRlKCkge1xyXG4gICAgZGlhbG9ncy5jb25maXJtKHtcclxuICAgICAgICB0aXRsZTogXCJDb25maXJtIGRlbGV0ZVwiLFxyXG4gICAgICAgIG1lc3NhZ2U6IFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIHBvc3Q/XCIsXHJcbiAgICAgICAgb2tCdXR0b25UZXh0OiBcIkNvbmZpcm1cIixcclxuICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIkNhbmNlbFwiLFxyXG4gICAgfSkudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgIC8vIHJlc3VsdCBhcmd1bWVudCBpcyBib29sZWFuXHJcbiAgICAgICAgaWYocmVzdWx0KVxyXG4gICAgICAgICAgdGhpcy5vbkRlbGV0ZSgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBvbkRlbGV0ZSgpIHtcclxuICAgIHZhciBwb3N0aW5nRG9jdW1lbnQgPSBmaXJlYmFzZS5maXJlc3RvcmUuY29sbGVjdGlvbigncG9zdGluZ3MnKS5kb2ModGhpcy5tYXBEYXRhLnBvc3RJbmZvLmlkKTtcclxuICAgIHZhciB1c2VyRG9jdW1lbnQgPSBmaXJlYmFzZS5maXJlc3RvcmUuY29sbGVjdGlvbigndXNlcnMnKS5kb2ModGhpcy5tYXBEYXRhLnBvc3RJbmZvLmRhdGEudWlkKTtcclxuICAgIHZhciBjaGF0RG9jdW1lbnQgPSBmaXJlYmFzZS5maXJlc3RvcmUuY29sbGVjdGlvbignY2hhdHMnKS5kb2ModGhpcy5tYXBEYXRhLnBvc3RJbmZvLmlkKTtcclxuICAgIHBvc3RpbmdEb2N1bWVudC5kZWxldGUoKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgdXNlckRvY3VtZW50LmdldCgpLnRoZW4oKGRvYykgPT4ge1xyXG4gICAgICAgIGxldCB1c2VyUG9zdHMgPSBkb2MuZGF0YSgpLnBvc3RzO1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gdXNlclBvc3RzLmluZGV4T2YodGhpcy5tYXBEYXRhLnBvc3RJbmZvLmlkLCAwKTtcclxuICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xyXG4gICAgICAgICAgIHVzZXJQb3N0cy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdXNlckRvY3VtZW50LnVwZGF0ZSh7XHJcbiAgICAgICAgICBwb3N0czogdXNlclBvc3RzXHJcbiAgICAgICAgfSkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAvLyBjaGF0RG9jdW1lbnQuZ2V0KCkudGhlbigoZG9jKSA9PiB7XHJcbiAgICAgICAgICAvLyAgIGxldCBkYXRhID0gZG9jLmRhdGEoKTtcclxuICAgICAgICAgIC8vICAgaWYoZGF0YSkge1xyXG4gICAgICAgICAgLy8gICAgIGZvcih2YXIgaSA9IDA7IGkgPCBkYXRhLnVzZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAvLyAgICAgICAvLyB0aGlzLmNoYXRVc2Vycy5wdXNoKGRhdGEudXNlcnNbaV0udWlkKTtcclxuICAgICAgICAgIC8vICAgICAgIGZpcmViYXNlLmZpcmVzdG9yZS5jb2xsZWN0aW9uKCd1c2VycycpLmRvYyhkYXRhLnVzZXJzW2ldLnVpZCkuZ2V0KCkudGhlbigoZG9jKSA9PiB7XHJcbiAgICAgICAgICAvLyAgICAgICAgIGNvbnN0IGlkID0gZGF0YS51c2Vyc1tpXS51aWQ7XHJcbiAgICAgICAgICAvLyAgICAgICAgIGxldCB1aWRDaGF0cyA9IGRvYy5kYXRhKCkuY2hhdHM7XHJcbiAgICAgICAgICAvLyAgICAgICAgIGxldCBpbmRleCA9IHVpZENoYXRzLmluZGV4T2YodGhpcy5tYXBEYXRhLnBvc3RJbmZvLmlkKTtcclxuICAgICAgICAgIC8vICAgICAgICAgaWYoaW5kZXggPiAtMSkge1xyXG4gICAgICAgICAgLy8gICAgICAgICAgIHVpZENoYXRzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAgIC8vICAgICAgICAgZmlyZWJhc2UuZmlyZXN0b3JlLmNvbGxlY3Rpb24oJ3VzZXJzJykuZG9jKGlkKS51cGRhdGUoe1xyXG4gICAgICAgICAgLy8gICAgICAgICAgIGNoYXRzOiB1aWRDaGF0c1xyXG4gICAgICAgICAgLy8gICAgICAgICB9KVxyXG4gICAgICAgICAgLy8gICAgICAgfSlcclxuICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAvLyAgICAgY2hhdERvY3VtZW50LmRlbGV0ZSgpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgLy8gICAgICAgdGhpcy5kZWxldGVGaWxlcygpO1xyXG4gICAgICAgICAgLy8gICAgICAgdGhpcy5vbk5hdkJ0blRhcCgpO1xyXG4gICAgICAgICAgLy8gICAgIH0pXHJcbiAgICAgICAgICAvLyAgIH1cclxuICAgICAgICAgIC8vICAgZWxzZSB7XHJcbiAgICAgICAgICAvLyAgICAgdGhpcy5kZWxldGVGaWxlcygpO1xyXG4gICAgICAgICAgLy8gICAgIHRoaXMub25OYXZCdG5UYXAoKTtcclxuICAgICAgICAgIC8vICAgfVxyXG4gICAgICAgICAgLy8gfSlcclxuICAgICAgICAgIHRoaXMuZGVsZXRlRmlsZXMoKTtcclxuICAgICAgICAgIHRoaXMub25OYXZCdG5UYXAoKTtcclxuICAgICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICB9KVxyXG4gICAgfSkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHJlbW92ZUNoYXQoaW5kZXgpIHtcclxuICAgIGNvbnNvbGUubG9nKGluZGV4KTtcclxuICAgIGZpcmViYXNlLmZpcmVzdG9yZS5jb2xsZWN0aW9uKCd1c2VycycpLmRvYyh0aGlzLmNoYXRVc2Vyc1tpbmRleF0pLmdldCgpLnRoZW4oKGRvYykgPT4ge1xyXG4gICAgICBsZXQgdXNlckNoYXRzID0gZG9jLmRhdGEoKS5jaGF0cztcclxuICAgICAgY29uc3QgaW5kZXggPSB1c2VyQ2hhdHMuaW5kZXhPZih0aGlzLm1hcERhdGEucG9zdEluZm8uaWQpO1xyXG4gICAgICBpZiAoaW5kZXggPiAtMSkge1xyXG4gICAgICAgICB1c2VyQ2hhdHMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgfVxyXG4gICAgICBmaXJlYmFzZS5maXJlc3RvcmUuY29sbGVjdGlvbigndXNlcnMnKS5kb2ModGhpcy5jaGF0VXNlcnNbaW5kZXhdKS51cGRhdGUoe1xyXG4gICAgICAgIGNoYXRzOiB1c2VyQ2hhdHNcclxuICAgICAgfSkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgaWYoaW5kZXggPT09IHRoaXMuY2hhdFVzZXJzW2luZGV4XS5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICB0aGlzLmRlbGV0ZUZpbGVzKCk7XHJcbiAgICAgICAgICB0aGlzLm9uTmF2QnRuVGFwKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIG9uUmVwb3J0KCkge1xyXG5cclxuICB9XHJcblxyXG4gIG9uQ29ubmVjdFRhcCgpIHtcclxuICAgIGxldCBncmlkQ29udGFpbmVyID0gPEdyaWRMYXlvdXQ+IHRoaXMubGF5b3V0Lm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICBsZXQgYWN0aXZpdHlJbmRpY2F0b3IgPSA8QWN0aXZpdHlJbmRpY2F0b3I+IHRoaXMuYWkubmF0aXZlRWxlbWVudDtcclxuXHJcbiAgICBncmlkQ29udGFpbmVyLnZpc2liaWxpdHkgPSAnY29sbGFwc2UnO1xyXG4gICAgYWN0aXZpdHlJbmRpY2F0b3IuYnVzeSA9IHRydWU7XHJcblxyXG4gICAgaWYodGhpcy5idXR0b25UZXh0ID09PSAnVmlldyBjaGF0Jykge1xyXG4gICAgICB0aGlzLnRyYW5zZmVyU2VydmljZS5zZXREYXRhKHRoaXMubWFwRGF0YS5wb3N0SW5mby5pZCk7XHJcbiAgICAgIGdyaWRDb250YWluZXIudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcclxuICAgICAgYWN0aXZpdHlJbmRpY2F0b3IuYnVzeSA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ2NoYXQnXSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmKHRoaXMuYnV0dG9uVGV4dCA9PT0gJ0pvaW4gY2hhdCcpIHtcclxuICAgICAgY29uc3QgY2hhdERvY3VtZW50ID0gZmlyZWJhc2UuZmlyZXN0b3JlLmNvbGxlY3Rpb24oJ2NoYXRzJykuZG9jKHRoaXMubWFwRGF0YS5wb3N0SW5mby5pZCk7XHJcbiAgICAgIGNvbnN0IHVzZXJEb2N1bWVudCA9IGZpcmViYXNlLmZpcmVzdG9yZS5jb2xsZWN0aW9uKCd1c2VycycpLmRvYyh0aGlzLnVzZXJJZCk7XHJcbiAgICAgIGNoYXREb2N1bWVudC5nZXQoKS50aGVuKChkb2MpID0+IHtcclxuICAgICAgICBpZihkb2MuZXhpc3RzKSB7XHJcbiAgICAgICAgICAvL2NoYXQgZXhpc3RzLCBzbyBhZGQgdXNlciB0byB0aGUgY2hhdCByb29tIGFuZCBuYXZpZ2F0ZSB0aGVyZVxyXG4gICAgICAgICAgbGV0IHRva2VuczogW3N0cmluZ10gPSBkb2MuZGF0YSgpLnRva2VucztcclxuICAgICAgICAgIHZhciB1c2VyczogW3t1aWQ6IHN0cmluZywgZGlzcGxheU5hbWU6IHN0cmluZ31dID0gZG9jLmRhdGEoKS51c2VycztcclxuICAgICAgICAgIHZhciB1c2VyVG9rZW5zOiBbc3RyaW5nXSA9IHRoaXMuY3VycmVudFVzZXIudG9rZW5zO1xyXG4gICAgICAgICAgdmFyIG5ld1Rva2VucyA9IHRva2Vucy5jb25jYXQodXNlclRva2Vucyk7XHJcbiAgICAgICAgICB1c2Vycy5wdXNoKHt1aWQ6IHRoaXMudXNlcklkLCBkaXNwbGF5TmFtZTogdGhpcy5jdXJyZW50VXNlck5hbWV9KVxyXG4gICAgICAgICAgY2hhdERvY3VtZW50LnVwZGF0ZSh7XHJcbiAgICAgICAgICAgIHVzZXJzOiB1c2VycyxcclxuICAgICAgICAgICAgdG9rZW5zOiBBcnJheS5mcm9tKG5ldyBTZXQobmV3VG9rZW5zKSlcclxuICAgICAgICAgIH0pLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICB1c2VyRG9jdW1lbnQuZ2V0KCkudGhlbigoZG9jKSA9PiB7XHJcbiAgICAgICAgICAgICAgdmFyIHVzZXJDaGF0cyA9IGRvYy5kYXRhKCkuY2hhdHM7XHJcbiAgICAgICAgICAgICAgdXNlckNoYXRzLnB1c2godGhpcy5tYXBEYXRhLnBvc3RJbmZvLmlkKTtcclxuICAgICAgICAgICAgICB1c2VyRG9jdW1lbnQudXBkYXRlKHtcclxuICAgICAgICAgICAgICAgIGNoYXRzOiB1c2VyQ2hhdHNcclxuICAgICAgICAgICAgICB9KS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vZmluYWxseSBhZnRlciBldmVyeXRoaW5nIGVsc2UgaGFzIHVwZGF0ZWQsIHNlbmQgdXNlciB0byBjaGF0IGNvbXBvbmVudFxyXG4gICAgICAgICAgICAgICAgdGhpcy50cmFuc2ZlclNlcnZpY2Uuc2V0RGF0YSh0aGlzLm1hcERhdGEucG9zdEluZm8uaWQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5idXR0b25UZXh0ID0gJ1ZpZXcgY2hhdCc7XHJcbiAgICAgICAgICAgICAgICBncmlkQ29udGFpbmVyLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XHJcbiAgICAgICAgICAgICAgICBhY3Rpdml0eUluZGljYXRvci5idXN5ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ2NoYXQnXSk7XHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgLy9jaGF0IGRvZXMgbm90IGV4aXN0LCBzbyBjcmVhdGUgYW5kIGFkZCBib3RoIHBvc3QgdXNlciBhbmQgY3VycmVudCB1c2VyXHJcbiAgICAgICAgICBmaXJlYmFzZS5maXJlc3RvcmUuY29sbGVjdGlvbignY2hhdHMnKS5kb2ModGhpcy5tYXBEYXRhLnBvc3RJbmZvLmlkKS5zZXQoe1xyXG4gICAgICAgICAgICB1c2VyczogW3t1aWQ6IHRoaXMubWFwRGF0YS5wb3N0SW5mby5kYXRhLnVpZCwgZGlzcGxheU5hbWU6IHRoaXMubWFwRGF0YS5wb3N0SXRlbS51c2VybmFtZX0sIHt1aWQ6IHRoaXMudXNlcklkLCBkaXNwbGF5TmFtZTogdGhpcy5jdXJyZW50VXNlck5hbWV9XSxcclxuICAgICAgICAgICAgY2hhdHM6IFtdLFxyXG4gICAgICAgICAgICBleHBpcmVkOiBmYWxzZSxcclxuICAgICAgICAgIH0pLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICBmaXJlYmFzZS5maXJlc3RvcmUuY29sbGVjdGlvbigndXNlcnMnKS5kb2ModGhpcy5tYXBEYXRhLnBvc3RJbmZvLmRhdGEudWlkKS5nZXQoKS50aGVuKChkb2MpID0+IHtcclxuICAgICAgICAgICAgICBjb25zdCB1c2VyVG9rZW5zID0gdGhpcy5jdXJyZW50VXNlci50b2tlbnM7XHJcbiAgICAgICAgICAgICAgY29uc3Qgb3RoZXJVc2VyVG9rZW5zID0gZG9jLmRhdGEoKS50b2tlbnM7XHJcbiAgICAgICAgICAgICAgY29uc3QgbmV3VG9rZW5zID0gdXNlclRva2Vucy5jb25jYXQob3RoZXJVc2VyVG9rZW5zKTtcclxuICAgICAgICAgICAgICBmaXJlYmFzZS5maXJlc3RvcmUuY29sbGVjdGlvbignY2hhdHMnKS5kb2ModGhpcy5tYXBEYXRhLnBvc3RJbmZvLmlkKS51cGRhdGUoe1xyXG4gICAgICAgICAgICAgICAgdG9rZW5zOiBBcnJheS5mcm9tKG5ldyBTZXQobmV3VG9rZW5zKSlcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIHZhciB1c2VyQ2hhdHMgPSBkb2MuZGF0YSgpLmNoYXRzO1xyXG4gICAgICAgICAgICAgIHVzZXJDaGF0cy5wdXNoKHRoaXMubWFwRGF0YS5wb3N0SW5mby5pZCk7XHJcbiAgICAgICAgICAgICAgZmlyZWJhc2UuZmlyZXN0b3JlLmNvbGxlY3Rpb24oJ3VzZXJzJykuZG9jKHRoaXMubWFwRGF0YS5wb3N0SW5mby5kYXRhLnVpZCkudXBkYXRlKHtcclxuICAgICAgICAgICAgICAgIGNoYXRzOiB1c2VyQ2hhdHNcclxuICAgICAgICAgICAgICB9KS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgIHVzZXJEb2N1bWVudC5nZXQoKS50aGVuKChkb2MpID0+IHtcclxuICAgICAgICAgICAgICAgICAgdmFyIHVzZXJDaGF0cyA9IGRvYy5kYXRhKCkuY2hhdHM7XHJcbiAgICAgICAgICAgICAgICAgIHVzZXJDaGF0cy5wdXNoKHRoaXMubWFwRGF0YS5wb3N0SW5mby5pZCk7XHJcbiAgICAgICAgICAgICAgICAgIHVzZXJEb2N1bWVudC51cGRhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGNoYXRzOiB1c2VyQ2hhdHNcclxuICAgICAgICAgICAgICAgICAgfSkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9maW5hbGx5IGFmdGVyIGV2ZXJ5dGhpbmcgZWxzZSBoYXMgdXBkYXRlZCwgc2VuZCB1c2VyIHRvIGNoYXQgY29tcG9uZW50XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50cmFuc2ZlclNlcnZpY2Uuc2V0RGF0YSh0aGlzLm1hcERhdGEucG9zdEluZm8uaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYnV0dG9uVGV4dCA9ICdWaWV3IGNoYXQnO1xyXG4gICAgICAgICAgICAgICAgICAgIGdyaWRDb250YWluZXIudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpdml0eUluZGljYXRvci5idXN5ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydjaGF0J10pO1xyXG4gICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFBvc3RpbmdTZXJ2aWNlIHtcclxuXHQvKipcclxuXHQqIFRvIGdldCB0aGUgc2VydmVyIHRvIHJlY29nbml6ZSB5b3VyIG1vYmlsZSBkZXZpY2UsIGZpbmQgeW91ciBpcHY0IGFkZHJlc3MgYnkgcnVubmluZyBpcGNvbmZpZyBpbiBhIHRlcm1pbmFsIHdpbmRvd1xyXG5cdCogYW5kIGFkZCBhIG5ldyB1cmkgbGluZSB3aXRoIHlvdXIgaXB2NCBhZGRyZXNzLiBEbyB0aGlzIGZvciBuZXR3b3JrX3NlY3VyaXR5X2NvbmZpZy54bWwsIHVzZXIuc2VydmljZXMudG5zLnRzLCBhbmRcclxuXHQqIHBvc3Rpbmcuc2VydmljZS50bnMudHMuXHJcblx0Ki9cclxuXHQvLyBBZGFtJ3MgdGVzdGluZyBzZXJ2ZXJcclxuXHQvLyB1cmkgPSAnaHR0cDovLzE5Mi4xNjguMS43OjQwMDAnO1xyXG5cdC8vIHVyaSA9ICdodHRwOi8vMTAuNS4xMS4yNTo0MDAwJztcclxuXHQvLyBQaGlsbGlwJ3MgVGVzdGluZyBzZXJ2ZXJcclxuXHR1cmkgPSAnaHR0cDovLzE5Mi4xNjguMS4zOjQwMDAnO1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkgeyB9XHJcblxyXG4gIGdldFBvc3RpbmdzKCkge1xyXG4gIFx0cmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy51cml9L3Bvc3RpbmdzYCk7XHJcbiAgfVxyXG5cclxuICBnZXRQb3N0aW5nYnlJZChpZCkge1xyXG4gIFx0cmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy51cml9L3Bvc3RpbmdzLyR7aWR9YCk7XHJcbiAgfVxyXG5cclxuICBhZGRQb3N0aW5nKHVzZXIsIHN0YXJ0YWRyLCBlbmRhZHIsIGRhdGUsIGNvc3QsIGNhcGFjaXR5LCBjb21tZW50cykge1xyXG5cclxuICAgIC8vY29uc3QgcHJpY2UgPSByZXEoLi4vLi4vYmFja2VuZC9kYXRhL3ByaWNpbmcpKHtzdGFydDogc3RhcnRhZHIsIGVuZDogZW5kYWRyfSk7XHJcblxyXG4gIFx0Y29uc3QgcG9zdGluZyA9IHtcclxuICBcdFx0dXNlciA6IHVzZXIsXHJcbiAgXHRcdHN0YXJ0YWRyIDogc3RhcnRhZHIsXHJcbiAgXHRcdGVuZGFkciA6IGVuZGFkcixcclxuICBcdFx0ZGF0ZSA6IGRhdGUsXHJcbiAgXHRcdGNvc3QgOiBjb3N0LFxyXG4gIFx0XHRjYXBhY2l0eSA6IGNhcGFjaXR5LFxyXG4gIFx0XHRjb21tZW50cyA6IGNvbW1lbnRzXHJcbiAgXHR9O1xyXG4gIFx0cmV0dXJuIHRoaXMuaHR0cC5wb3N0KGAke3RoaXMudXJpfS9wb3N0aW5ncy9hZGQvYCwgcG9zdGluZyk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVQb3N0aW5nKGlkLCB1c2VyLCBzdGFydGFkciwgZW5kYWRyLCBkYXRlLCBjb3N0LCBjYXBhY2l0eSwgY29tbWVudHMpIHtcclxuICAgIC8vY29uc3QgcHJpY2UgPSByZXEoLi4vLi4vYmFja2VuZC9kYXRhL3ByaWNpbmcpKHtzdGFydDogc3RhcnRhZHIsIGVuZDogZW5kYWRyfSk7XHJcbiAgXHRjb25zdCBwb3N0aW5nID0ge1xyXG4gIFx0XHR1c2VyIDogdXNlcixcclxuICBcdFx0c3RhcnRhZHIgOiBzdGFydGFkcixcclxuICBcdFx0ZW5kYWRyIDogZW5kYWRyLFxyXG4gIFx0XHRkYXRlIDogZGF0ZSxcclxuICBcdFx0Y29zdCA6IGNvc3QsXHJcbiAgXHRcdGNhcGFjaXR5IDogY2FwYWNpdHksXHJcbiAgXHRcdGNvbW1lbnRzIDogY29tbWVudHNcclxuICBcdH07XHJcbiAgXHRyZXR1cm4gdGhpcy5odHRwLnBvc3QoYCR7dGhpcy51cml9L3Bvc3RpbmdzL3VwZGF0ZS8ke2lkfWAsIHBvc3RpbmcpO1xyXG4gIH1cclxuXHJcbiAgZGVsZXRlUG9zdGluZyhpZCkge1xyXG4gIFx0cmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy51cml9L3Bvc3RpbmdzL2RlbGV0ZS8ke2lkfWApO1xyXG4gIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUG9zdGluZ1NlcnZpY2Uge1xyXG5cdC8qKlxyXG5cdCogVG8gZ2V0IHRoZSBzZXJ2ZXIgdG8gcmVjb2duaXplIHlvdXIgbW9iaWxlIGRldmljZSwgZmluZCB5b3VyIGlwdjQgYWRkcmVzcyBieSBydW5uaW5nIGlwY29uZmlnIGluIGEgdGVybWluYWwgd2luZG93XHJcblx0KiBhbmQgYWRkIGEgbmV3IHVyaSBsaW5lIHdpdGggeW91ciBpcHY0IGFkZHJlc3MuIERvIHRoaXMgZm9yIG5ldHdvcmtfc2VjdXJpdHlfY29uZmlnLnhtbCwgdXNlci5zZXJ2aWNlcy50bnMudHMsIGFuZFxyXG5cdCogcG9zdGluZy5zZXJ2aWNlLnRucy50cy5cclxuXHQqL1xyXG5cdC8vIEFkYW0ncyB0ZXN0aW5nIHNlcnZlclxyXG5cdC8vIHVyaSA9ICdodHRwOi8vMTkyLjE2OC4xLjc6NDAwMCc7XHJcblx0Ly8gdXJpID0gJ2h0dHA6Ly8xMC41LjExLjI1OjQwMDAnO1xyXG5cdC8vIFBoaWxsaXAncyBUZXN0aW5nIHNlcnZlclxyXG5cdHVyaSA9ICdodHRwOi8vMTkyLjE2OC4xLjM6NDAwMCc7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7IH1cclxuXHJcbiAgZ2V0UG9zdGluZ3MoKSB7XHJcbiAgXHRyZXR1cm4gdGhpcy5odHRwLmdldChgJHt0aGlzLnVyaX0vcG9zdGluZ3NgKTtcclxuICB9XHJcblxyXG4gIGdldFBvc3RpbmdieUlkKGlkKSB7XHJcbiAgXHRyZXR1cm4gdGhpcy5odHRwLmdldChgJHt0aGlzLnVyaX0vcG9zdGluZ3MvJHtpZH1gKTtcclxuICB9XHJcblxyXG4gIGFkZFBvc3RpbmcodXNlciwgc3RhcnRhZHIsIGVuZGFkciwgZGF0ZSwgY29zdCwgY2FwYWNpdHksIGNvbW1lbnRzKSB7XHJcblxyXG4gICAgLy9jb25zdCBwcmljZSA9IHJlcSguLi8uLi9iYWNrZW5kL2RhdGEvcHJpY2luZykoe3N0YXJ0OiBzdGFydGFkciwgZW5kOiBlbmRhZHJ9KTtcclxuXHJcbiAgXHRjb25zdCBwb3N0aW5nID0ge1xyXG4gIFx0XHR1c2VyIDogdXNlcixcclxuICBcdFx0c3RhcnRhZHIgOiBzdGFydGFkcixcclxuICBcdFx0ZW5kYWRyIDogZW5kYWRyLFxyXG4gIFx0XHRkYXRlIDogZGF0ZSxcclxuICBcdFx0Y29zdCA6IGNvc3QsXHJcbiAgXHRcdGNhcGFjaXR5IDogY2FwYWNpdHksXHJcbiAgXHRcdGNvbW1lbnRzIDogY29tbWVudHNcclxuICBcdH07XHJcbiAgXHRyZXR1cm4gdGhpcy5odHRwLnBvc3QoYCR7dGhpcy51cml9L3Bvc3RpbmdzL2FkZC9gLCBwb3N0aW5nKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVBvc3RpbmcoaWQsIHVzZXIsIHN0YXJ0YWRyLCBlbmRhZHIsIGRhdGUsIGNvc3QsIGNhcGFjaXR5LCBjb21tZW50cykge1xyXG4gICAgLy9jb25zdCBwcmljZSA9IHJlcSguLi8uLi9iYWNrZW5kL2RhdGEvcHJpY2luZykoe3N0YXJ0OiBzdGFydGFkciwgZW5kOiBlbmRhZHJ9KTtcclxuICBcdGNvbnN0IHBvc3RpbmcgPSB7XHJcbiAgXHRcdHVzZXIgOiB1c2VyLFxyXG4gIFx0XHRzdGFydGFkciA6IHN0YXJ0YWRyLFxyXG4gIFx0XHRlbmRhZHIgOiBlbmRhZHIsXHJcbiAgXHRcdGRhdGUgOiBkYXRlLFxyXG4gIFx0XHRjb3N0IDogY29zdCxcclxuICBcdFx0Y2FwYWNpdHkgOiBjYXBhY2l0eSxcclxuICBcdFx0Y29tbWVudHMgOiBjb21tZW50c1xyXG4gIFx0fTtcclxuICBcdHJldHVybiB0aGlzLmh0dHAucG9zdChgJHt0aGlzLnVyaX0vcG9zdGluZ3MvdXBkYXRlLyR7aWR9YCwgcG9zdGluZyk7XHJcbiAgfVxyXG5cclxuICBkZWxldGVQb3N0aW5nKGlkKSB7XHJcbiAgXHRyZXR1cm4gdGhpcy5odHRwLmdldChgJHt0aGlzLnVyaX0vcG9zdGluZ3MvZGVsZXRlLyR7aWR9YCk7XHJcbiAgfVxyXG5cclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLypcXHJcXG5BZGQgeW91ciBOYXRpdmVTY3JpcHQgc3BlY2lmaWMgc3R5bGVzIGhlcmUuXFxyXFxuVG8gbGVhcm4gbW9yZSBhYm91dCBzdHlsaW5nIGluIE5hdGl2ZVNjcmlwdCBzZWU6XFxyXFxuaHR0cHM6Ly9kb2NzLm5hdGl2ZXNjcmlwdC5vcmcvYW5ndWxhci91aS9zdHlsaW5nXFxyXFxuKi9cXHJcXG5cXHJcXG5MYWJlbCB7XFxyXFxuXFx0dGV4dC1hbGlnbjogbGVmdDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hbWUtbGFiZWwge1xcclxcblxcdG1hcmdpbi10b3A6IDE2O1xcclxcblxcdG1hcmdpbi1sZWZ0OiAyNDtcXHJcXG5cXHRjb2xvcjogYmxhY2s7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDcwMDtcXHJcXG5cXHRmb250LXNpemU6IDE4O1xcclxcbn1cXHJcXG5cXHJcXG4uaW5mby1sYWJlbCB7XFxyXFxuXFx0bWFyZ2luLXRvcDogMTI7XFxyXFxuXFx0bWFyZ2luLWxlZnQ6IDI0O1xcclxcblxcdG1hcmdpbi1ib3R0b206IDE2O1xcclxcblxcdGNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLnBvc3Qge1xcclxcblxcdGJvcmRlci1ib3R0b20td2lkdGg6IDE7XFxyXFxuXFx0Ym9yZGVyLWNvbG9yOiAjZjFmMWYxO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9zdDpoaWdobGlnaHRlZCB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvc3RpbmctbWFwIHtcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiAxNjtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAxMDtcXHJcXG5cXHQvKmFsaWduLWNvbnRlbnQ6IGNlbnRlcjsqL1xcclxcbn1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8U3RhY2tMYXlvdXQgY2xhc3M9XFxcInBvc3RcXFwiPlxcclxcbiAgPExhYmVsIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiBpZD1cXFwicG9zdC1uYW1lXFxcIiBjbGFzcz1cXFwibmFtZS1sYWJlbFxcXCI+PC9MYWJlbD5cXHJcXG4gIDxMYWJlbCB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgaWQ9XFxcInBvc3QtaW5mb1xcXCIgY2xhc3M9XFxcImluZm8tbGFiZWxcXFwiPjwvTGFiZWw+XFxyXFxuICA8SW1hZ2Ugc3JjPVxcXCJ+L2ltZy9jdmlsbGUtbWFwLnBuZ1xcXCIgc3RyZXRjaD1cXFwibm9uZVxcXCIgaGVpZ2h0PVxcXCIyMjBcXFwiIHdpZHRoPVxcXCIzMDBcXFwiIGNsYXNzPVxcXCJwb3N0aW5nLW1hcFxcXCI+PC9JbWFnZT5cXHJcXG48L1N0YWNrTGF5b3V0PlxcclxcblxcclxcbjwhLS1cXHJcXG5PcmlnaW5hbCBXZWIgdGVtcGxhdGU6XFxyXFxuXFxyXFxuXFxyXFxuLS0+XCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBUcmFuc2ZlclNlcnZpY2UgfSBmcm9tICcuLi9kYXRhdHJhbnNmZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2UnO1xyXG5pbXBvcnQgeyBMYWJlbCB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvbGFiZWwnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtcG9zdGluZycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3Bvc3RpbmcuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3Bvc3RpbmcuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQb3N0aW5nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBpZDtcclxuICBidXR0b25UeXBlO1xyXG5cclxuICBpbmZvID0gdGhpcy50cmFuc2ZlclNlcnZpY2UuZ2V0RGF0YSgpWzBdO1xyXG5cclxuICBpbmZvVGV4dCA9IFwiTGVhdmluZyBcIiArIHRoaXMuaW5mby5kYXRlICsgXCIgZnJvbSBcIiArIHRoaXMuaW5mby5zdGFydGFkciArIFwiIHRvIFwiICsgdGhpcy5pbmZvLmVuZGFkciArIFwiIGZvciBcIiArIHRoaXMuaW5mby5jb3N0O1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdHJhbnNmZXJTZXJ2aWNlOiBUcmFuc2ZlclNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgcGFnZTogUGFnZSkge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgXHR0aGlzLmlkID0gdGhpcy5pbmZvLmlkO1xyXG4gIFx0dGhpcy5idXR0b25UeXBlID0gdGhpcy5pbmZvLmJ1dHRvblR5cGU7XHJcbiAgICBjb25zdCBuYW1lX2xhYmVsID0gPExhYmVsPnRoaXMucGFnZS5nZXRWaWV3QnlJZCgncG9zdC1uYW1lJyk7XHJcbiAgICBuYW1lX2xhYmVsLnRleHQgPSB0aGlzLmluZm8udXNlcjtcclxuICAgIG5hbWVfbGFiZWwuaWQgPSAncG9zdC1uYW1lJyArIHRoaXMuaW5mby5pbmRleDtcclxuICAgIGNvbnN0IGluZm9fbGFiZWwgPSA8TGFiZWw+dGhpcy5wYWdlLmdldFZpZXdCeUlkKCdwb3N0LWluZm8nKTtcclxuICAgIGlmKHRoaXMuaW5mby5jYXBhY2l0eSA+IDApXHJcbiAgICAgIGluZm9fbGFiZWwudGV4dCA9IFwiT2ZmZXJpbmcgcmlkZSBsZWF2aW5nIFwiICsgdGhpcy5pbmZvLmRhdGUgKyBcIiBmcm9tIFwiICsgdGhpcy5pbmZvLnN0YXJ0YWRyICsgXCIgdG8gXCIgKyB0aGlzLmluZm8uZW5kYWRyICsgXCIgZm9yIFwiICsgdGhpcy5pbmZvLmNvc3Q7XHJcbiAgICBlbHNlXHJcbiAgICAgIGluZm9fbGFiZWwudGV4dCA9IFwiUmVxdWVzdGluZyByaWRlIGxlYXZpbmcgXCIgKyB0aGlzLmluZm8uZGF0ZSArIFwiIGZyb20gXCIgKyB0aGlzLmluZm8uc3RhcnRhZHIgKyBcIiB0byBcIiArIHRoaXMuaW5mby5lbmRhZHI7XHJcbiAgICBpbmZvX2xhYmVsLmlkID0gJ3Bvc3QtaW5mbycgKyB0aGlzLmluZm8uaW5kZXg7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcImNyZWF0ZWQgcG9zdFwiKTtcclxuICBcdC8vIHRoaXMuY3JlYXRlKCk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGUoKSB7XHJcbiAgXHRjb25zb2xlLmxvZyh0aGlzLmluZm8pO1xyXG4gIFx0Y29uc29sZS5sb2codGhpcy5pbmZvLmluZGV4KTtcclxuXHQgIHZhciBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgZGl2LmlkID0gXCJmZWVkXCIrIHRoaXMuaW5mby5pbmRleDtcclxuICAgIGRpdi5jbGFzc05hbWUgPSBcInBvc3RpbmctYmxvY2tcIjtcclxuICAgIGRpdi5zdHlsZS5kaXNwbGF5ID0gXCJhbGxcIjtcclxuICAgIGRpdi5zdHlsZS5tYXJnaW4gPSBcImF1dG9cIjtcclxuICAgIGRpdi5zdHlsZS5tYXJnaW5Ub3AgPSBcIjAuNWVtXCI7XHJcbiAgICBkaXYuc3R5bGUubWFyZ2luQm90dG9tID0gXCIwLjVlbVwiO1xyXG5cclxuICAgIC8vZGl2LnN0eWxlLnBhZGRpbmdMZWZ0ID0gXCIyMCVcIjtcclxuICAgIC8vZGl2LnN0eWxlLndpZHRoID0gXCI0MCVcIjtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiaWdmZWVkJykuYXBwZW5kQ2hpbGQoZGl2KTtcclxuICAgIFxyXG4gICAgdmFyIGRpdnRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZlZWQnKyB0aGlzLmluZm8uaW5kZXgpLmFwcGVuZENoaWxkKGRpdnRleHQpO1xyXG4gICAgZGl2dGV4dC5pZCA9IFwidGV4dFwiKyB0aGlzLmluZm8uaW5kZXg7XHJcbiAgICBcclxuICAgIHZhciBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiSU1HXCIpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHQnKyB0aGlzLmluZm8uaW5kZXgpLmFwcGVuZENoaWxkKGltZyk7XHJcbiAgICBpbWcuaWQgPSBcInBmcFwiKyB0aGlzLmluZm8uaW5kZXg7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBmcFwiKTtcclxuICAgIGltZy5jbGFzc05hbWUgPSBcInBmcFwiO1xyXG4gICAgKGltZyBhcyBIVE1MSW5wdXRFbGVtZW50KS5zcmMgPSBcInNyYy9pbWcvc2FtcGxlX3Byb2ZpbGUuanBnXCI7XHJcbiAgICBcclxuICAgIHZhciBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dCcrIHRoaXMuaW5mby5pbmRleCkuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxuICAgIGhlYWRlci5pZCA9IFwibmFtZVwiKyB0aGlzLmluZm8uaW5kZXg7XHJcbiAgICBoZWFkZXIuaW5uZXJIVE1MID0gdGhpcy5pbmZvLnVzZXI7XHJcbiAgICBoZWFkZXIuY2xhc3NOYW1lID0gXCJoZWFkZXJcIjtcclxuICAgIFxyXG4gICAgdmFyIHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dCcrIHRoaXMuaW5mby5pbmRleCkuYXBwZW5kQ2hpbGQocCk7XHJcbiAgICBwLmlkID0gXCJkZXRhaWxzXCIrIHRoaXMuaW5mby5pbmRleDtcclxuICAgIHAuaW5uZXJIVE1MID0gXCJMZWF2aW5nIFwiICsgdGhpcy5pbmZvLmRhdGUgKyBcIiBmcm9tIFwiICsgdGhpcy5pbmZvLnN0YXJ0YWRyICsgXCIgdG8gXCIgKyB0aGlzLmluZm8uZW5kYWRyICsgXCIgZm9yIFwiICsgdGhpcy5pbmZvLmNvc3Q7XHJcbiAgICBwLmNsYXNzTmFtZSA9IFwiZGV0YWlsc1wiO1xyXG4gICAgXHJcbiAgICB2YXIgbWFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIklNR1wiKVxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHQnKyB0aGlzLmluZm8uaW5kZXgpLmFwcGVuZENoaWxkKG1hcCk7XHJcbiAgICBtYXAuaWQgPSBcIm1hcFwiKyB0aGlzLmluZm8uaW5kZXg7XHJcbiAgICBtYXAuY2xhc3NOYW1lID0gXCJkZXN0aW5hdGlvblwiO1xyXG4gICAgKG1hcCBhcyBIVE1MSW5wdXRFbGVtZW50KS5zcmMgPSBcInNyYy9pbWcvdmlyZ2luaWFfbWFwLmpwZ1wiO1xyXG4gICAgXHJcbiAgICB2YXIgY29ubmVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dCcrIHRoaXMuaW5mby5pbmRleCkuYXBwZW5kQ2hpbGQoY29ubmVjdCk7XHJcbiAgICBjb25uZWN0LmlkID0gdGhpcy5idXR0b25UeXBlICsgdGhpcy5pbmZvLmluZGV4O1xyXG4gICAgY29ubmVjdC5jbGFzc05hbWUgPSBcInBvc3RpbmctYnV0dG9uXCI7XHJcbiAgICBjb25uZWN0LmlubmVySFRNTCA9IHRoaXMuaW5mby5idXR0b25UeXBlO1xyXG4gICAgY29ubmVjdC5zdHlsZS5tYXJnaW5SaWdodCA9IFwiMWVtXCI7XHJcbiAgICBjb25uZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZTpFdmVudCkgPT4gdGhpcy5jbGlja2VkKHRoaXMuaW5mby5idXR0b25UeXBlKSk7XHJcbiAgfVxyXG4gIGNsaWNrZWQoYnV0dG9uVHlwZSl7XHJcbiAgXHR0aGlzLnRyYW5zZmVyU2VydmljZS5zZXREYXRhKHRoaXMuaW5mbyk7XHJcbiAgXHRpZihidXR0b25UeXBlID09IFwiQ29ubmVjdFwiKVxyXG5cdFx0dGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCgnL2Nvbm5lY3QnKTtcclxuXHRlbHNlXHJcblx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKCcvdXBkYXRlJyk7XHJcbiAgfVxyXG5cclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLyogQWRkIG1vYmlsZSBzdHlsZXMgZm9yIHRoZSBjb21wb25lbnQgaGVyZS4gICovXFxyXFxuLmhlYWRlcntcXHJcXG4gICAgbWFyZ2luLXRvcDogNTA7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAyMjtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAyMjtcXHJcXG5cXHRjb2xvcjogYmxhY2s7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjQ7XFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxufVxcclxcbi5zdWJtaXQtYnRue1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNhYzAwZTY7XFxyXFxuICAgIHdpZHRoOiA3NSU7XFxyXFxuICAgIGhlaWdodDogMTcwcHg7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiU2Vnb2UgVUlcXFwiLEFyaWFsLHNhbnMtc2VyaWY7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgbWFyZ2luLXRvcDogMjA7XFxyXFxufVxcclxcbi50ZXh0LWZpZWxke1xcclxcbiAgICB3aWR0aDogODUlO1xcclxcbiAgICBtYXJnaW4tdG9wOiAyMDtcXHJcXG4gICAgY29sb3I6IzY5Njk2OVxcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2UtYnV0dG9uLWNvbnRhaW5lciB7XFxyXFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdGxlZnQ6IDA7XFxyXFxufVxcclxcbi5jbG9zZSB7XFxyXFxuXFx0bWFyZ2luOiAxMDtcXHJcXG5cXHRmb250LXNpemU6IDQwO1xcclxcblxcdHdpZHRoOiA0ODtcXHJcXG4gICAgaGVpZ2h0OiA0ODtcXHJcXG4gICAgY29sb3I6IGJsYWNrXFxyXFxufVxcclxcblxcclxcbi5lcnJvci1tZXNzYWdlIHtcXHJcXG5cXHRjb2xvcjogcmVkO1xcclxcblxcdGZvbnQtc2l6ZTogMTY7XFxyXFxuXFx0dmlzaWJpbGl0eTogY29sbGFwc2U7XFxyXFxufVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxTdGFja2xheW91dD5cXHJcXG4gICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJjbG9zZS1idXR0b24tY29udGFpbmVyXFxcIiBvcmllbnRhdGlvbj1cXFwiaG9yaXpvbnRhbFxcXCI+XFxyXFxuICAgICAgICA8TGFiZWwgdGV4dD1cXFwiJnRpbWVzO1xcXCIgY2xhc3M9XFxcImNsb3NlXFxcIiAodGFwKT1cXFwiY2xvc2UoJ2NhbmNlbCcpXFxcIj48L0xhYmVsPlxcclxcbiAgICA8L1N0YWNrTGF5b3V0PlxcclxcbiAgICA8TGFiZWwgY2xhc3M9XFxcImhlYWRlclxcXCIgdGV4dD1cXFwiUGxlYXNlIHJlLWVudGVyIHlvdXIgcGFzc3dvcmRcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIj48L0xhYmVsPlxcclxcbiAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImlucHV0LWZpZWxkXFxcIj5cXHJcXG4gICAgICAgIDxUZXh0RmllbGQgI3ZhbCBbKG5nTW9kZWwpXT1cXFwicGFzc3dvcmRcXFwiIHNlY3VyZT1cXFwidHJ1ZVxcXCIgYXV0b2NvcnJlY3Q9XFxcImZhbHNlXFxcIiByZXR1cm5LZXlUeXBlPVxcXCJkb25lXFxcIiBjbGFzcz1cXFwidGV4dC1maWVsZFxcXCI+PC9UZXh0RmllbGQ+XFxyXFxuICAgIDwvU3RhY2tMYXlvdXQ+XFxyXFxuICAgIDxMYWJlbCB0ZXh0PVxcXCJUaGUgcGFzc3dvcmQgeW91IGVudGVyZWQgd2FzIGluY29ycmVjdFxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiIGNsYXNzPVxcXCJlcnJvci1tZXNzYWdlXFxcIiAjZXJyb3JNZXNzYWdlPjwvTGFiZWw+XFxyXFxuXFxyXFxuICAgIDxCdXR0b24gdGV4dD1cXFwiU3VibWl0XFxcIiAodGFwKT1cXFwic3VibWl0KHBhc3N3b3JkKVxcXCIgY2xhc3M9XFxcInN1Ym1pdC1idG5cXFwiPjwvQnV0dG9uPlxcclxcblxcclxcbjwvU3RhY2tsYXlvdXQ+XCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NvbnRhaW5lclJlZiwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1vZGFsRGlhbG9nUGFyYW1zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2RpcmVjdGl2ZXMvZGlhbG9nc1wiO1xyXG5pbXBvcnQgKiBhcyBmaXJlYmFzZSBmcm9tICduYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlJztcclxuaW1wb3J0IHsgTG9naW5jaGVja1NlcnZpY2UgfSBmcm9tICcuLi9sb2dpbmNoZWNrLnNlcnZpY2UudG5zJztcclxuaW1wb3J0IHsgVHJhbnNmZXJTZXJ2aWNlIH0gZnJvbSAnLi4vZGF0YXRyYW5zZmVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgKiBhcyBkaWFsb2dzIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3NcIjtcclxuaW1wb3J0IHsgU2V0dGluZ3Nmb3JtQ29tcG9uZW50IH0gZnJvbSAnLi4vc2V0dGluZ3Nmb3JtL3NldHRpbmdzZm9ybS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNb2RhbERpYWxvZ1NlcnZpY2UgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZGlyZWN0aXZlcy9kaWFsb2dzXCI7XHJcbmltcG9ydCB7IExhYmVsIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9sYWJlbCc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtcmVhdXRoJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcmVhdXRoLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9yZWF1dGguY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSZWF1dGhDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhcmFtczogTW9kYWxEaWFsb2dQYXJhbXMsIHByaXZhdGUgdHJhbnNmZXJTZXJ2aWNlOiBUcmFuc2ZlclNlcnZpY2UsIHByaXZhdGUgbG9naW5jaGVja1NlcnZpY2U6IExvZ2luY2hlY2tTZXJ2aWNlLCBcclxuICBcdHByaXZhdGUgdmNSZWY6IFZpZXdDb250YWluZXJSZWYsIHByaXZhdGUgbW9kYWw6IE1vZGFsRGlhbG9nU2VydmljZSkgeyB9XHJcblxyXG4gIEBWaWV3Q2hpbGQoXCJlcnJvck1lc3NhZ2VcIiwgeyBzdGF0aWM6IHRydWUgfSkgZW06IEVsZW1lbnRSZWY7XHJcbiAgZmllbGQ7XHJcbiAgdXNlcklkO1xyXG4gIHVzZXJFbWFpbDtcclxuICBwYXNzd29yZDtcclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgXHR0aGlzLmZpZWxkID0gdGhpcy50cmFuc2ZlclNlcnZpY2UuZ2V0RGF0YSgpO1xyXG4gIFx0dGhpcy51c2VySWQgPSB0aGlzLmxvZ2luY2hlY2tTZXJ2aWNlLmdldFVzZXIoKTtcclxuICBcdGZpcmViYXNlLmdldEN1cnJlbnRVc2VyKCkudGhlbigodXNlcikgPT4ge1xyXG4gIFx0XHR0aGlzLnVzZXJFbWFpbCA9IHVzZXIuZW1haWw7XHJcbiAgXHR9KVxyXG4gIH1cclxuXHJcbiAgY2xvc2UocmVzKSB7XHJcbiAgXHRsZXQgZXJyb3JNZXNzYWdlID0gPExhYmVsPiB0aGlzLmVtLm5hdGl2ZUVsZW1lbnQ7XHJcblx0ZXJyb3JNZXNzYWdlLnN0eWxlLnZpc2liaWxpdHkgPSAnY29sbGFwc2UnO1xyXG5cdHRoaXMucGFzc3dvcmQgPSAnJztcclxuICAgIHRoaXMucGFyYW1zLmNsb3NlQ2FsbGJhY2socmVzKTtcclxuICB9XHJcblxyXG4gIHN1Ym1pdChwYXNzd29yZCkge1xyXG4gIFx0ZmlyZWJhc2UucmVhdXRoZW50aWNhdGUoe1xyXG5cdCAgICB0eXBlOiBmaXJlYmFzZS5Mb2dpblR5cGUuUEFTU1dPUkQsIC8vIG9yIEdPT0dMRSAvIEZBQ0VCT09LXHJcblx0ICAgIC8vIHRoaXMgaXMgb25seSByZXF1aXJlZCBpbiB0eXBlID09IFBBU1NXT1JEXHJcblx0ICAgIHBhc3N3b3JkT3B0aW9uczoge1xyXG5cdCAgICAgIGVtYWlsOiB0aGlzLnVzZXJFbWFpbCxcclxuXHQgICAgICBwYXNzd29yZDogdGhpcy5wYXNzd29yZFxyXG5cdCAgICB9XHJcblx0ICB9KS50aGVuKFxyXG5cdCAgICAgIChyZXN1bHQpID0+IHtcclxuXHQgICAgICAgIC8vIHlvdSBjYW4gbm93IHNhZmVseSBkZWxldGUgdGhlIGFjY291bnQgLyBjaGFuZ2UgdGhlIHBhc3N3b3JkLCBldGNcclxuXHQgICAgICAgIGxldCBvcHRpb25zID0ge1xyXG5cdFx0ICAgICAgICBjb250ZXh0OiB7fSxcclxuXHRcdCAgICAgICAgZnVsbHNjcmVlbjogdHJ1ZSxcclxuXHRcdCAgICAgICAgdmlld0NvbnRhaW5lclJlZjogdGhpcy52Y1JlZlxyXG5cdFx0ICAgICAgICAvLyBhbmltYXRlZDogdHJ1ZSxcclxuXHRcdCAgICAgICAgLy8gdHJhbnNpdGlvbjogeyBuYW1lOiBcInNsaWRlVG9wXCIgfVxyXG5cdFx0ICAgIH07XHJcblx0XHQgICAgbGV0IGVycm9yTWVzc2FnZSA9IDxMYWJlbD4gdGhpcy5lbS5uYXRpdmVFbGVtZW50O1xyXG5cdCAgICAgICAgZXJyb3JNZXNzYWdlLnN0eWxlLnZpc2liaWxpdHkgPSAnY29sbGFwc2UnO1xyXG5cdFx0ICAgIHRoaXMudHJhbnNmZXJTZXJ2aWNlLnNldERhdGEodGhpcy5maWVsZCk7XHJcblx0XHQgICAgdGhpcy5wYXNzd29yZCA9ICcnO1xyXG5cdCAgICBcdHRoaXMubW9kYWwuc2hvd01vZGFsKFNldHRpbmdzZm9ybUNvbXBvbmVudCwgb3B0aW9ucykudGhlbihyZXMgPT4ge1xyXG5cdFx0ICAgIFx0aWYocmVzID09ICd1cGRhdGUnKSB7XHJcblx0XHQgICAgXHRcdHRoaXMuY2xvc2UoJ3VwZGF0ZScpO1xyXG5cdFx0ICAgIFx0fVxyXG5cdFx0ICAgIH0pO1xyXG5cdCAgICAgIH0sXHJcblx0ICAgICAgKGVycm9yKSA9PiB7XHJcblx0ICAgICAgICBsZXQgZXJyb3JNZXNzYWdlID0gPExhYmVsPiB0aGlzLmVtLm5hdGl2ZUVsZW1lbnQ7XHJcblx0ICAgICAgICBlcnJvck1lc3NhZ2Uuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcclxuXHQgICAgICB9XHJcblx0ICApO1xyXG4gIH1cclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLyogQWRkIG1vYmlsZSBzdHlsZXMgZm9yIHRoZSBjb21wb25lbnQgaGVyZS4gICovXFxyXFxuXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPCEtLSA8YXBwLW5hdmlnYXRpb24+PC9hcHAtbmF2aWdhdGlvbj4gLS0+XFxyXFxuPFN0YWNrTGF5b3V0PlxcclxcbiAgPExhYmVsIHRleHQ9XFxcInNlYXJjaCB3b3Jrc1xcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiPjwvTGFiZWw+XFxyXFxuICA8TGFiZWwgdGV4dD1cXFwiVGhpcyBpcyBhIG1pZ3JhdGVkIGNvbXBvbmVudFxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiPjwvTGFiZWw+XFxyXFxuICA8TGFiZWwgdGV4dD1cXFwiVXBkYXRlIGl0IHRvIHByb3ZpZGUgdGhlIFVJIGVsZW1lbnRzIHJlcXVpcmVkIGluIHlvdXIgbW9iaWxlIGFwcFxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiPjwvTGFiZWw+XFxyXFxuPC9TdGFja0xheW91dD5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1zZWFyY2gnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9zZWFyY2guY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3NlYXJjaC5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFNlYXJjaENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuXHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi8qXFxyXFxuQWRkIHlvdXIgTmF0aXZlU2NyaXB0IHNwZWNpZmljIHN0eWxlcyBoZXJlLlxcclxcblRvIGxlYXJuIG1vcmUgYWJvdXQgc3R5bGluZyBpbiBOYXRpdmVTY3JpcHQgc2VlOlxcclxcbmh0dHBzOi8vZG9jcy5uYXRpdmVzY3JpcHQub3JnL2FuZ3VsYXIvdWkvc3R5bGluZ1xcclxcbiovXFxyXFxuXFxyXFxuI0hlYWRlciB7XFxyXFxuICAgIGNvbG9yOmJsYWNrO1xcclxcbiAgICBmb250LXNpemU6IDI0O1xcclxcbiAgICBmb250LWZhbWlseTogXFxcIlNlZ29lIFVJXFxcIixBcmlhbCxzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4jbGlzdFZpZXcge1xcclxcblxcdG1hcmdpbi1ib3R0b206IDIwO1xcclxcbn1cXHJcXG5cXHJcXG4udXBkYXRlIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIGNvbG9yOiAjYWMwMGU2O1xcclxcbiAgICBib3JkZXItd2lkdGg6IDE7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogI2FjMDBlNjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmbG9hdDogY2VudGVyO1xcclxcbiAgICBtYXJnaW46IGF1dG87IFxcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICBmb250LWZhbWlseTogXFxcIlNlZ29lIFVJXFxcIixBcmlhbCxzYW5zLXNlcmlmO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxNTtcXHJcXG4gICAgd2lkdGg6IDIwMDtcXHJcXG4gICAgaGVpZ2h0OiA0MDtcXHJcXG59XFxyXFxuLnVwZGF0ZTpoaWdobGlnaHRlZCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWU2ZmY7XFxyXFxufVxcclxcbi5wYXltZW50cyB7XFxyXFxuXFx0Y29sb3I6IGJsYWNrO1xcclxcblxcdG1hcmdpbi10b3A6IDEyO1xcclxcblxcdG1hcmdpbi1ib3R0b206IDEyO1xcclxcblxcdG1hcmdpbi1sZWZ0OiAxODtcXHJcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gICAgZm9udC1zaXplOiAxNTtcXHJcXG59XFxyXFxuLmxvZ291dCB7XFxyXFxuXFx0Y29sb3I6ICNhYzAwZTY7XFxyXFxuXFx0bWFyZ2luLXRvcDogMTI7XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTogMTI7XFxyXFxuXFx0bWFyZ2luLWxlZnQ6IDE4O1xcclxcblxcdGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTU7XFxyXFxufVxcclxcblxcclxcbi5idG4tbGlzdC12aWV3IHtcXHJcXG5cXHRtYXJnaW4tdG9wOiAzNjtcXHJcXG5cXHRoZWlnaHQ6IDEwMDtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW0tbGlzdC12aWV3IHtcXHJcXG5cXHRoZWlnaHQ6IDI3NTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2ZpbGUtcGljdHVyZSB7XFxyXFxuXFx0aGVpZ2h0OiAxMDA7XFxyXFxuXFx0d2lkdGg6IDEwMDtcXHJcXG5cXHRtYXJnaW4tdG9wOiAxMDtcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiA4O1xcclxcblxcdC8qYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsqL1xcclxcbn1cXHJcXG5cXHJcXG4uaW1nLXJvdW5kZWQge1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXItbGFiZWwge1xcclxcblxcdG1hcmdpbi1ib3R0b206IDU7XFxyXFxuXFx0Zm9udC1zaXplOiAxNTtcXHJcXG5cXHRjb2xvcjogIzQyODVmNDtcXHJcXG59XFxyXFxuXFxyXFxuLmJvbGQge1xcclxcblxcdGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxufVxcclxcblxcclxcbi5hY3Rpdml0eS1pbmRpY2F0b3Ige1xcclxcbiAgY29sb3I6ICNhYzAwZTY7XFxyXFxuICBtYXJnaW46IDI1JTtcXHJcXG59XFxyXFxuXFxyXFxuLnZhbHVlLWxhYmVsIHtcXHJcXG5cXHRtYXJnaW4tbGVmdDogMTg7XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTogMTA7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgZm9udC1zaXplOiAxODtcXHJcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG59XFxyXFxuLnRpdGxlLWxhYmVsIHtcXHJcXG5cXHRtYXJnaW4tdG9wOiAxNjtcXHJcXG5cXHRtYXJnaW4tbGVmdDogMTg7XFxyXFxuXFx0Y29sb3I6ICM2OTY5Njk7XFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxufVxcclxcblxcclxcbi5zdGFjay1sYXlvdXR7XFxyXFxuICAgIGhlaWdodDoxMDAlXFxyXFxufVxcclxcbi5hY3Rpdml0eS1pbmRpY2F0b3J7XFxyXFxuICAgIGhlaWdodDogNTAlO1xcclxcbn1cXHJcXG5MaXN0VmlldyB7XFxyXFxuICAgIHNlcGFyYXRvci1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxufVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjwhLS0gPGFwcC1uYXZpZ2F0aW9uPjwvYXBwLW5hdmlnYXRpb24+IC0tPlxcclxcbjxTdGFja2xheW91dCBoZWlnaHQ9XFxcIjEwMCVcXFwiPlxcclxcbiAgICA8U3RhY2tMYXlvdXQgI3NldHRpbmdzQ29udGFpbmVyPlxcclxcbiAgICAgIDwhLS0gPExhYmVsIGlkPSBcXFwiSGVhZGVyXFxcIiB0ZXh0PVxcXCJBY2NvdW50IFNldHRpbmdzXFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCI+PC9MYWJlbD4gLS0+XFxyXFxuICAgICAgPEltYWdlIHNyYz1cXFwie3sgcHJvZmlsZSB9fVxcXCIgc3RyZXRjaD1cXFwiYXNwZWN0Rml0XFxcIiBjbGFzcz1cXFwiaW1nLXJvdW5kZWQgcHJvZmlsZS1waWN0dXJlXFxcIiAodGFwKT1cXFwidXBsb2FkUGZwKClcXFwiPjwvSW1hZ2U+XFxyXFxuICAgICAgPExhYmVsIHRleHQ9XFxcIkNoYW5nZSBQaG90b1xcXCIgY2xhc3M9XFxcImhlYWRlci1sYWJlbCBib2xkXFxcIiAodGFwKT1cXFwidXBsb2FkUGZwKClcXFwiPjwvTGFiZWw+XFxyXFxuXFxyXFxuICAgICAgPExpc3RWaWV3IFtpdGVtc109XFxcImZpZWxkc1xcXCIgI2xpc3RWaWV3IGlkPVxcXCJsaXN0Vmlld1xcXCIgKGl0ZW1UYXApPVxcXCJzaG93TW9kYWwoJGV2ZW50KVxcXCIgY2xhc3M9XFxcIml0ZW0tbGlzdC12aWV3XFxcIj5cXHJcXG4gICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtaXRlbT1cXFwiaXRlbVxcXCIgbGV0LWk9XFxcImluZGV4XFxcIiBsZXQtb2RkPVxcXCJvZGRcXFwiIGxldC1ldmVuPVxcXCJldmVuXFxcIj5cXHJcXG4gICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJzdGFjay1sYXlvdXRcXFwiPlxcclxcbiAgICAgICAgICAgIDxMYWJlbCB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgY2xhc3M9XFxcInRpdGxlLWxhYmVsXFxcIiBbdGV4dF09XFxcIml0ZW0ubGFiZWxcXFwiPjwvTGFiZWw+XFxyXFxuICAgICAgICAgICAgPExhYmVsIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiBjbGFzcz1cXFwidmFsdWUtbGFiZWxcXFwiIFt0ZXh0XT1cXFwiaXRlbS52YWx1ZVxcXCI+PC9MYWJlbD5cXHJcXG4gICAgICAgICAgPC9TdGFja0xheW91dD5cXHJcXG4gICAgICAgIDwvbmctdGVtcGxhdGU+XFxyXFxuICAgICAgPC9MaXN0Vmlldz5cXHJcXG4gICAgICA8IS0tIDxSYWREYXRhRm9ybSB0a0V4YW1wbGVUaXRsZSB0a1RvZ2dsZU5hdkJ1dHRvbiBbc291cmNlXT1cXFwicGVyc29uXFxcIj48L1JhZERhdGFGb3JtPiAgIC0tPlxcclxcbiAgICAgIDwhLS0gPEJ1dHRvbiBjbGFzcz1cXFwiVXBkYXRlXFxcIiAgdGV4dD1cXFwiVXBkYXRlIFNldHRpbmdzXFxcIj48L0J1dHRvbj4gLS0+XFxyXFxuXFxyXFxuICAgICAgPExpc3RWaWV3IFtpdGVtc109XFxcImJ1dHRvbnNcXFwiICNsaXN0Vmlld1NlY29uZCAoaXRlbVRhcCk9XFxcInJvdXRlKCRldmVudClcXFwiIChzZXR1cEl0ZW1WaWV3KT1cXFwic2V0dXBJdGVtVmlldygkZXZlbnQpXFxcIiBjbGFzcz1cXFwiYnRuLWxpc3Qtdmlld1xcXCI+XFxyXFxuICAgICAgICA8bmctdGVtcGxhdGUgbGV0LWl0ZW09XFxcIml0ZW1cXFwiIGxldC1pPVxcXCJpbmRleFxcXCIgbGV0LW9kZD1cXFwib2RkXFxcIiBsZXQtZXZlbj1cXFwiZXZlblxcXCIgbGV0LXBheW1lbnRzPVxcXCJwYXltZW50c1xcXCIgbGV0LWxvZ291dD1cXFwibG9nb3V0XFxcIj5cXHJcXG4gICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJzdGFjay1sYXlvdXRcXFwiPlxcclxcbiAgICAgICAgICAgIDxMYWJlbCB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgW3RleHRdPVxcXCJpdGVtXFxcIiBbY2xhc3MucGF5bWVudHNdPVxcXCJwYXltZW50c1xcXCIgW2NsYXNzLmxvZ291dF09XFxcImxvZ291dFxcXCI+PC9MYWJlbD5cXHJcXG4gICAgICAgICAgPC9TdGFja0xheW91dD5cXHJcXG4gICAgICAgIDwvbmctdGVtcGxhdGU+XFxyXFxuICAgICAgPC9MaXN0Vmlldz5cXHJcXG48IS0tICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwicGF5bWVudHMtY29udGFpbmVyXFxcIiAodGFwKT1cXFwidG9QYXltZW50cygpXFxcIj5cXHJcXG4gICAgICAgIDxMYWJlbCBjbGFzcz1cXFwicGF5bWVudHNcXFwiIHRleHQ9XFxcIlBheW1lbnRzXFxcIj48L0xhYmVsPlxcclxcbiAgICAgIDwvU3RhY2tMYXlvdXQ+XFxyXFxuICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJsb2dvdXQtY29udGFpbmVyXFxcIiAodGFwKT1cXFwibG9nT3V0KClcXFwiPlxcclxcbiAgICAgICAgPExhYmVsIGNsYXNzPVxcXCJsb2dvdXRcXFwiIHRleHQ9XFxcIkxvZyBvdXRcXFwiPjwvTGFiZWw+XFxyXFxuICAgICAgPC9TdGFja0xheW91dD4gLS0+XFxyXFxuICAgIDwvU3RhY2tMYXlvdXQ+XFxyXFxuXFxyXFxuPEFjdGl2aXR5SW5kaWNhdG9yICNhY3Rpdml0eUluZGljYXRvciBidXN5PVxcXCJ0cnVlXFxcIiB3aWR0aD1cXFwiNDBcXFwiICBjbGFzcz1cXFwiYWN0aXZpdHktaW5kaWNhdG9yXFxcIj5cXHJcXG4gIDwvQWN0aXZpdHlJbmRpY2F0b3I+XFxyXFxuPC9TdGFja2xheW91dD5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuLy8gaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2VcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IExvZ2luY2hlY2tTZXJ2aWNlIH0gZnJvbSAnLi4vbG9naW5jaGVjay5zZXJ2aWNlLnRucyc7XHJcbmltcG9ydCAqIGFzIGZpcmViYXNlIGZyb20gJ25hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2UnO1xyXG5pbXBvcnQgeyBtZXNzYWdpbmcgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZS9tZXNzYWdpbmdcIjtcclxuaW1wb3J0IHsgbG9nb3V0IGFzIGZiTG9nb3V0IH0gZnJvbSAnbmF0aXZlc2NyaXB0LWZhY2Vib29rJztcclxuaW1wb3J0ICogYXMgaW1hZ2VwaWNrZXIgZnJvbSBcIm5hdGl2ZXNjcmlwdC1pbWFnZXBpY2tlclwiO1xyXG5pbXBvcnQgKiBhcyBmcyBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9maWxlLXN5c3RlbVwiO1xyXG5pbXBvcnQgeyBpc0FuZHJvaWQsIGlzSU9TLCBkZXZpY2UsIHNjcmVlbiB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtXCI7XHJcbmltcG9ydCAqIGFzIGJnaHR0cCBmcm9tICduYXRpdmVzY3JpcHQtYmFja2dyb3VuZC1odHRwJztcclxuaW1wb3J0IHsgSW1hZ2VDcm9wcGVyIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWltYWdlY3JvcHBlcic7XHJcbmltcG9ydCAqIGFzIGltYWdlU291cmNlIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2ltYWdlLXNvdXJjZVwiO1xyXG5pbXBvcnQgeyBBY3Rpdml0eUluZGljYXRvciB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvYWN0aXZpdHktaW5kaWNhdG9yJztcclxuaW1wb3J0IHsgU3RhY2tMYXlvdXQgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvc3RhY2stbGF5b3V0JztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZUFycmF5IH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUtYXJyYXknO1xyXG5pbXBvcnQgeyBUcmFuc2ZlclNlcnZpY2UgfSBmcm9tICcuLi9kYXRhdHJhbnNmZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IHBvc3QgfSBmcm9tICdzZWxlbml1bS13ZWJkcml2ZXIvaHR0cCc7XHJcbmltcG9ydCB7IE1vZGFsRGlhbG9nUGFyYW1zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2RpcmVjdGl2ZXMvZGlhbG9nc1wiO1xyXG5pbXBvcnQgeyBNb2RhbERpYWxvZ1NlcnZpY2UgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZGlyZWN0aXZlcy9kaWFsb2dzXCI7XHJcbmltcG9ydCB7IFNldHRpbmdzZm9ybUNvbXBvbmVudCB9IGZyb20gJy4uL3NldHRpbmdzZm9ybS9zZXR0aW5nc2Zvcm0uY29tcG9uZW50JztcclxuaW1wb3J0IHsgUmVhdXRoQ29tcG9uZW50IH0gZnJvbSAnLi4vcmVhdXRoL3JlYXV0aC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTZXR1cEl0ZW1WaWV3QXJncyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9kaXJlY3RpdmVzXCI7XHJcblxyXG5cclxuY2xhc3MgTGFiZWwge1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIGxhYmVsOiBTdHJpbmcsIHB1YmxpYyB2YWx1ZTogc3RyaW5nLCBwdWJsaWMgZmlyc3ROYW1lOiBzdHJpbmcsIHB1YmxpYyBsYXN0TmFtZTogc3RyaW5nKSB7IH1cclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHNlbGVjdG9yOiBcImFwcC1zZXR0aW5nc1wiLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9zZXR0aW5ncy5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vc2V0dGluZ3MuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgU2V0dGluZ3NDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSBwYWdlOiBQYWdlLCBwcml2YXRlIGxvZ2luY2hlY2tTZXJ2aWNlOiBMb2dpbmNoZWNrU2VydmljZSwgcHJpdmF0ZSB0cmFuc2ZlclNlcnZpY2U6IFRyYW5zZmVyU2VydmljZSxcclxuICBcdHByaXZhdGUgdmNSZWY6IFZpZXdDb250YWluZXJSZWYsIHByaXZhdGUgbW9kYWw6IE1vZGFsRGlhbG9nU2VydmljZSkgeyB9XHJcblxyXG4gIEBWaWV3Q2hpbGQoXCJhY3Rpdml0eUluZGljYXRvclwiLCB7IHN0YXRpYzogdHJ1ZSB9KSBhaTogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKFwic2V0dGluZ3NDb250YWluZXJcIiwgeyBzdGF0aWM6IHRydWUgfSkgc2M6IEVsZW1lbnRSZWY7XHJcblxyXG4gIHByb2ZpbGUgPSBcIn4vaW1nL3NhbXBsZV9wcm9maWxlLnBuZ1wiO1xyXG4gIHVzZXJJZDtcclxuICBmaWVsZHM7XHJcbiAgaW1hZ2VDcm9wcGVyOiBJbWFnZUNyb3BwZXI7XHJcbiAgaW1hZ2VTb3VyY2U6IGltYWdlU291cmNlLkltYWdlU291cmNlO1xyXG4gIGJ1dHRvbnM7XHJcbiAgcGF5bWVudExpc3Q7XHJcbiAgbG9nb3V0TGlzdDtcclxuICB1c2VyO1xyXG4gIHRva2VuO1xyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuXHR0aGlzLmltYWdlQ3JvcHBlciA9IG5ldyBJbWFnZUNyb3BwZXIoKTtcclxuXHR0aGlzLmxvYWRWaWV3cygpO1xyXG5cclxuXHRcdGxldCBhY3Rpdml0eUluZGljYXRvciA9IDxBY3Rpdml0eUluZGljYXRvcj4gdGhpcy5haS5uYXRpdmVFbGVtZW50O1xyXG5cdCAgICBhY3Rpdml0eUluZGljYXRvci5zdHlsZS52aXNpYmlsaXR5ID0gJ2NvbGxhcHNlJ1xyXG5cdH1cclxuXHJcblx0bG9hZFZpZXdzKCl7XHJcblx0XHR0aGlzLnBheW1lbnRMaXN0ID0gbmV3IE9ic2VydmFibGVBcnJheTxTdHJpbmc+KCk7XHJcblx0XHR0aGlzLnBheW1lbnRMaXN0LnB1c2goJ1BheW1lbnQgbWV0aG9kcycpO1xyXG5cdFx0dGhpcy5sb2dvdXRMaXN0ID0gbmV3IE9ic2VydmFibGVBcnJheTxTdHJpbmc+KCk7XHJcblx0XHR0aGlzLmxvZ291dExpc3QucHVzaCgnTG9nIG91dCcpO1xyXG5cdFx0dGhpcy5idXR0b25zID0gbmV3IE9ic2VydmFibGVBcnJheTxTdHJpbmc+KCk7XHJcblx0XHR0aGlzLmJ1dHRvbnMucHVzaCgnUGF5bWVudCBtZXRob2RzJyk7XHJcblx0XHR0aGlzLmJ1dHRvbnMucHVzaCgnTG9nIG91dCcpO1xyXG5cclxuXHRcdHRoaXMudXNlcklkID0gdGhpcy5sb2dpbmNoZWNrU2VydmljZS5nZXRVc2VyKCk7XHJcblx0XHRjb25zdCB1c2VyRG9jdW1lbnQgPSBmaXJlYmFzZS5maXJlc3RvcmUuY29sbGVjdGlvbigndXNlcnMnKS5kb2ModGhpcy51c2VySWQpO1xyXG5cdFx0dGhpcy5maWVsZHMgPSBuZXcgT2JzZXJ2YWJsZUFycmF5PExhYmVsPigpO1xyXG5cdFx0dGhpcy51cGRhdGVMaXN0VmlldygpO1xyXG5cdFx0ZmlyZWJhc2UuZ2V0Q3VycmVudFVzZXIoKS50aGVuKCh1c2VyKSA9PiB7XHJcblx0XHRcdHRoaXMudXNlciA9IHVzZXI7XHJcblx0XHRcdGlmKHVzZXIucGhvdG9VUkwgIT0gbnVsbCkge1xyXG5cdFx0XHRcdHRoaXMucHJvZmlsZSA9IHVzZXIucGhvdG9VUkw7XHJcblx0XHRcdFx0aWYodXNlci5waG90b1VSTC5zdWJzdHJpbmcoMCwgMjcpID09ICdodHRwczovL2dyYXBoLmZhY2Vib29rLmNvbS8nKVxyXG5cdFx0XHRcdFx0dGhpcy5wcm9maWxlICs9ICc/aGVpZ2h0PTMwMCc7XHJcblx0XHRcdH1cclxuXHRcdH0pXHJcblx0fVxyXG5cclxuXHRzZXR1cEl0ZW1WaWV3KGFyZ3M6IFNldHVwSXRlbVZpZXdBcmdzKSB7XHJcblx0XHRhcmdzLnZpZXcuY29udGV4dC5wYXltZW50cyA9IChhcmdzLmluZGV4ID09IDApO1xyXG5cdFx0YXJncy52aWV3LmNvbnRleHQubG9nb3V0ID0gKGFyZ3MuaW5kZXggPT0gMSk7XHJcblx0XHRhcmdzLnZpZXcuY29udGV4dC5ldmVuID0gKGFyZ3MuaW5kZXggJSAyID09PSAwKTtcclxuXHRcdGFyZ3Mudmlldy5jb250ZXh0Lm9kZCA9IChhcmdzLmluZGV4ICUgMiA9PT0gMSk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVMaXN0Vmlldygpe1xyXG5cdFx0dGhpcy5maWVsZHMuc3BsaWNlKDApO1xyXG5cdFx0Y29uc3QgdXNlckRvY3VtZW50ID0gZmlyZWJhc2UuZmlyZXN0b3JlLmNvbGxlY3Rpb24oJ3VzZXJzJykuZG9jKHRoaXMudXNlcklkKTtcclxuXHRcdHVzZXJEb2N1bWVudC5nZXQoKS50aGVuKGRvYyA9PiB7XHJcblx0XHRcdGxldCB2YWxzID0gZG9jLmRhdGEoKVxyXG5cdFx0XHQvLyBjb25zb2xlLmxvZyhcImZpZWxkc1wiLCB2YWxzKVxyXG5cdFx0XHR0aGlzLmZpZWxkcy5wdXNoKG5ldyBMYWJlbChcIk5hbWVcIiwgdmFscy5maXJzdF9uYW1lICsgXCIgXCIgKyB2YWxzLmxhc3RfbmFtZSwgdmFscy5maXJzdF9uYW1lLCB2YWxzLmxhc3RfbmFtZSkpO1xyXG5cdFx0XHR0aGlzLmZpZWxkcy5wdXNoKG5ldyBMYWJlbChcIkVtYWlsXCIsIHZhbHMuZW1haWwsIHZhbHMuZmlyc3RfbmFtZSwgdmFscy5sYXN0X25hbWUpKTtcclxuXHRcdFx0aWYodmFscy5waG9uZV9udW1iZXIgPT0gXCJcIiB8fCB2YWxzLnBob25lX251bWJlciA9PSBudWxsKXtcclxuXHRcdFx0XHR0aGlzLmZpZWxkcy5wdXNoKG5ldyBMYWJlbChcIlBob25lIE51bWJlclwiLCBcIk5vbmVcIiwgdmFscy5maXJzdF9uYW1lLCB2YWxzLmxhc3RfbmFtZSkpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2V7XHJcblx0XHRcdFx0dGhpcy5maWVsZHMucHVzaChuZXcgTGFiZWwoXCJQaG9uZSBOdW1iZXJcIiwgdmFscy5waG9uZV9udW1iZXIsIHZhbHMuZmlyc3RfbmFtZSwgdmFscy5sYXN0X25hbWUpKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZih0aGlzLnVzZXIucHJvdmlkZXJzWzFdLmlkID09ICdwYXNzd29yZCcpIHtcclxuXHRcdFx0XHR0aGlzLmZpZWxkcy5wdXNoKG5ldyBMYWJlbChcIlBhc3N3b3JkXCIsIFwiKioqKioqKipcIiwgdmFscy5maXJzdF9uYW1lLCB2YWxzLmxhc3RfbmFtZSkpXHJcblx0XHRcdH1cclxuXHRcdH0pXHJcblx0fVxyXG5cdHRvUGF5bWVudHMoKXtcclxuXHRcdHRoaXMucm91dGVyLm5hdmlnYXRlKFsncGF5bWVudHMnXSk7XHJcblx0fVxyXG5cclxuXHRzaG93TW9kYWwoYXJncykge1xyXG5cdFx0bGV0IGxhYmVsID0gdGhpcy5maWVsZHMuX2FycmF5W2FyZ3MuaW5kZXhdXHJcblx0XHR0aGlzLnRyYW5zZmVyU2VydmljZS5zZXREYXRhKGxhYmVsKTtcclxuXHRcdGxldCBvcHRpb25zID0ge1xyXG5cdCAgICAgICAgY29udGV4dDoge30sXHJcblx0ICAgICAgICBmdWxsc2NyZWVuOiB0cnVlLFxyXG5cdCAgICAgICAgdmlld0NvbnRhaW5lclJlZjogdGhpcy52Y1JlZlxyXG5cdCAgICAgICAgLy8gYW5pbWF0ZWQ6IHRydWUsXHJcblx0ICAgICAgICAvLyB0cmFuc2l0aW9uOiB7IG5hbWU6IFwic2xpZGVUb3BcIiB9XHJcblx0ICAgIH07XHJcblx0ICAgIGlmKGFyZ3MuaW5kZXggPT0gMykge1xyXG5cdCAgICBcdHRoaXMubW9kYWwuc2hvd01vZGFsKFJlYXV0aENvbXBvbmVudCwgb3B0aW9ucykudGhlbihyZXMgPT4ge1xyXG5cdFx0ICAgIFx0aWYocmVzID09ICd1cGRhdGUnKSB7XHJcblx0XHQgICAgXHRcdHRoaXMudXBkYXRlTGlzdFZpZXcoKTtcclxuXHRcdCAgICBcdH1cclxuXHRcdCAgICB9KTtcclxuXHQgICAgfVxyXG5cdCAgICBlbHNlIHtcclxuXHRcdCAgICB0aGlzLm1vZGFsLnNob3dNb2RhbChTZXR0aW5nc2Zvcm1Db21wb25lbnQsIG9wdGlvbnMpLnRoZW4ocmVzID0+IHtcclxuXHRcdCAgICBcdGlmKHJlcyA9PSAndXBkYXRlJykge1xyXG5cdFx0ICAgIFx0XHR0aGlzLnVwZGF0ZUxpc3RWaWV3KCk7XHJcblx0XHQgICAgXHR9XHJcblx0XHQgICAgfSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRyb3V0ZShhcmdzKSB7XHJcblx0XHRpZihhcmdzLmluZGV4ID09IDApIHtcclxuXHRcdFx0dGhpcy50b1BheW1lbnRzKCk7XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmKGFyZ3MuaW5kZXggPT0gMSkge1xyXG5cdFx0XHR0aGlzLmxvZ091dCgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0b25JdGVtVGFwKGFyZ3MpIHtcclxuXHRcdGxldCBsYWJlbCA9IHRoaXMuZmllbGRzLl9hcnJheVthcmdzLmluZGV4XVxyXG5cdFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUoWydzZXR0aW5nc2Zvcm0nXSk7XHJcblx0XHR0aGlzLnRyYW5zZmVyU2VydmljZS5zZXREYXRhKGxhYmVsKTtcclxuXHQgIH1cclxuXHJcblx0YXN5bmMgbG9nT3V0KCkge1xyXG5cdFx0dmFyIGFjdGl2aXR5SW5kaWNhdG9yID0gPEFjdGl2aXR5SW5kaWNhdG9yPiB0aGlzLmFpLm5hdGl2ZUVsZW1lbnQ7XHJcblx0XHRhY3Rpdml0eUluZGljYXRvci5idXN5ID0gdHJ1ZTtcclxuXHRcdGFjdGl2aXR5SW5kaWNhdG9yLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XHJcblx0XHR2YXIgc2V0dGluZ3NDb250YWluZXIgPSA8U3RhY2tMYXlvdXQ+IHRoaXMuc2MubmF0aXZlRWxlbWVudDtcclxuXHRcdHNldHRpbmdzQ29udGFpbmVyLnN0eWxlLnZpc2liaWxpdHkgPSAnY29sbGFwc2UnO1xyXG5cclxuXHRcdGNvbnN0IHRva2VuUHJvbWlzZSA9IGF3YWl0IG1lc3NhZ2luZy5nZXRDdXJyZW50UHVzaFRva2VuKCkudGhlbih0b2tlbiA9PiB7XHJcblx0XHRcdHRoaXMudG9rZW4gPSB0b2tlblxyXG5cdFx0XHRyZXR1cm4gdG9rZW47XHJcblx0XHR9KTtcclxuXHRcdGxldCB1c2VyRG9jID0gZmlyZWJhc2UuZmlyZXN0b3JlLmNvbGxlY3Rpb24oJ3VzZXJzJykuZG9jKHRoaXMudXNlcklkKTtcclxuXHRcdFxyXG5cdFx0dXNlckRvYy5nZXQoKS50aGVuKGFzeW5jIChkb2MpID0+IHtcclxuXHRcdFx0bGV0IGluZGV4ID0gZG9jLmRhdGEoKS50b2tlbnMuaW5kZXhPZih0aGlzLnRva2VuKTtcclxuXHRcdFx0aWYoaW5kZXggPiAtMSkge1xyXG5cdFx0XHRcdGNvbnN0IG5ld1Rva2VucyA9IGRvYy5kYXRhKCkudG9rZW5zO1xyXG5cdFx0XHRcdG5ld1Rva2Vucy5zcGxpY2UoaW5kZXgsIDEpO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKG5ld1Rva2VucylcclxuXHRcdFx0XHR1c2VyRG9jLnVwZGF0ZSh7dG9rZW5zOiBuZXdUb2tlbnN9KTtcclxuXHRcdFx0fVxyXG5cdFx0XHRjb25zdCBjaGF0UHJvbWlzZSA9IGF3YWl0IHRoaXMudXBkYXRlQ2hhdFRva2Vucyhkb2MuZGF0YSgpLmNoYXRzKTtcclxuXHRcdFx0ZmlyZWJhc2UubG9nb3V0KCk7XHJcblx0XHRcdGZiTG9nb3V0KCgpID0+IHtcclxuXHJcblx0XHRcdH0pO1xyXG5cdFx0XHR0aGlzLmxvZ2luY2hlY2tTZXJ2aWNlLmNsZWFySW5mbygpO1xyXG5cdFx0XHRhY3Rpdml0eUluZGljYXRvci5idXN5ID0gZmFsc2U7XHJcblx0XHRcdGFjdGl2aXR5SW5kaWNhdG9yLnN0eWxlLnZpc2liaWxpdHkgPSAnY29sbGFwc2UnO1xyXG5cdFx0XHRzZXR0aW5nc0NvbnRhaW5lci5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xyXG5cdFx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ3dlbGNvbWUnXSwge2NsZWFySGlzdG9yeTogdHJ1ZX0pO1xyXG5cdFx0fSlcclxuXHJcblx0fVxyXG5cclxuXHRhc3luYyB1cGRhdGVDaGF0VG9rZW5zKGNoYXRzKSB7XHJcblx0XHRsZXQgY2hhdENvbGxlY3Rpb24gPSBmaXJlYmFzZS5maXJlc3RvcmUuY29sbGVjdGlvbignY2hhdHMnKTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBjaGF0cy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRjb25zdCBjaGF0UHJvbWlzZSA9IGF3YWl0IGNoYXRDb2xsZWN0aW9uLmRvYyhjaGF0c1tpXSkuZ2V0KCkudGhlbihhc3luYyAoZG9jKSA9PiB7XHJcblx0XHRcdFx0bGV0IGluZGV4ID0gZG9jLmRhdGEoKS50b2tlbnMuaW5kZXhPZih0aGlzLnRva2VuKTtcclxuXHRcdFx0XHRpZihpbmRleCA+IC0xKSB7XHJcblx0XHRcdFx0XHRjb25zdCBuZXdUb2tlbnMgPSBkb2MuZGF0YSgpLnRva2VucztcclxuXHRcdFx0XHRcdG5ld1Rva2Vucy5zcGxpY2UoaW5kZXgsIDEpO1xyXG5cdFx0XHRcdFx0Y29uc3QgdXBkYXRlUHJvbWlzZSA9IGF3YWl0IGNoYXRDb2xsZWN0aW9uLmRvYyhjaGF0c1tpXSkudXBkYXRlKHt0b2tlbnM6IG5ld1Rva2Vuc30pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSlcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHVwbG9hZFBmcCgpIHtcclxuXHRcdHZhciBpbWFnZUNyb3BwZXIgPSBuZXcgSW1hZ2VDcm9wcGVyKCk7XHJcblx0XHRsZXQgY29udGV4dCA9IGltYWdlcGlja2VyLmNyZWF0ZSh7XHJcblx0XHQgICAgbW9kZTogXCJzaW5nbGVcIiAvLyB1c2UgXCJtdWx0aXBsZVwiIGZvciBtdWx0aXBsZSBzZWxlY3Rpb25cclxuXHRcdH0pO1xyXG5cdFx0Y29udGV4dFxyXG5cdCAgICAuYXV0aG9yaXplKClcclxuXHQgICAgLnRoZW4oZnVuY3Rpb24oKSB7XHJcblx0ICAgICAgICByZXR1cm4gY29udGV4dC5wcmVzZW50KCk7XHJcblx0ICAgIH0pXHJcblx0ICAgIC50aGVuKChzZWxlY3Rpb246IGFueSkgPT4ge1xyXG5cdCAgICBcdHNlbGVjdGlvbi5mb3JFYWNoKChzZWxlY3RlZCkgPT4ge1xyXG4gICAgICAgICAgICBcdGxldCBpbWdTb3VyY2UgPSBuZXcgaW1hZ2VTb3VyY2UuSW1hZ2VTb3VyY2UoKTtcclxuICAgICAgICAgICAgICAgIGltZ1NvdXJjZS5mcm9tQXNzZXQoc2VsZWN0ZWQpLnRoZW4oKHNvdXJjZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgXHR0aGlzLmltYWdlQ3JvcHBlclxyXG4gICAgICAgICAgICAgICAgICAgIC5zaG93KHNvdXJjZSwgeyB3aWR0aDogMzAwLCBoZWlnaHQ6IDMwMCB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGFyZ3MgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmRpcihhcmdzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFyZ3MuaW1hZ2UgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuY3JvcHBlZEltYWdlLmltYWdlU291cmNlID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBhcmdzLmltYWdlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZvbGRlciA9IGZzLmtub3duRm9sZGVycy50ZW1wKCk7XHJcblx0XHRcdFx0ICAgICAgICAgICAgdmFyIHBhdGggPSBmcy5wYXRoLmpvaW4oZm9sZGVyLnBhdGgsIFwicHJvZmlsZV9waWN0dXJlLnBuZ1wiKTtcclxuXHRcdFx0XHQgICAgICAgICAgICB2YXIgc2F2ZWQgPSBhcmdzLmltYWdlLnNhdmVUb0ZpbGUocGF0aCwncG5nJyk7XHJcblxyXG5cdFx0XHRcdCAgICAgICAgICAgIHZhciBhY3Rpdml0eUluZGljYXRvciA9IDxBY3Rpdml0eUluZGljYXRvcj4gdGhpcy5haS5uYXRpdmVFbGVtZW50O1xyXG5cdFx0XHRcdFx0XHRcdGFjdGl2aXR5SW5kaWNhdG9yLmJ1c3kgPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHRcdGFjdGl2aXR5SW5kaWNhdG9yLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XHJcbiAgICAgIFx0XHRcdFx0XHRcdHZhciBzZXR0aW5nc0NvbnRhaW5lciA9IDxTdGFja0xheW91dD4gdGhpcy5zYy5uYXRpdmVFbGVtZW50O1xyXG4gICAgICBcdFx0XHRcdFx0XHRzZXR0aW5nc0NvbnRhaW5lci5zdHlsZS52aXNpYmlsaXR5ID0gJ2NvbGxhcHNlJztcclxuXHJcblx0XHRcdFx0ICAgICAgICAgICAgZmlyZWJhc2Uuc3RvcmFnZS51cGxvYWRGaWxlKHtcclxuXHRcdFx0XHRcdFx0XHQgICAgLy8gdGhlIGZ1bGwgcGF0aCBvZiB0aGUgZmlsZSBpbiB5b3VyIEZpcmViYXNlIHN0b3JhZ2UgKGZvbGRlcnMgd2lsbCBiZSBjcmVhdGVkKVxyXG5cdFx0XHRcdFx0XHRcdCAgICByZW1vdGVGdWxsUGF0aDogJ3VzZXJzLycgKyB0aGlzLnVzZXJJZCArICcvdXBsb2Fkcy9wcm9maWxlX3BpY3R1cmUuanBnJyxcclxuXHRcdFx0XHRcdFx0XHQgICAgLy8gb3B0aW9uIDE6IGEgZmlsZS1zeXN0ZW0gbW9kdWxlIEZpbGUgb2JqZWN0XHJcblx0XHRcdFx0XHRcdFx0ICAgIGxvY2FsRmlsZTogZnMuRmlsZS5mcm9tUGF0aChwYXRoKSxcclxuXHRcdFx0XHRcdFx0XHQgICAgLy8gb3B0aW9uIDI6IGEgZnVsbCBmaWxlIHBhdGggKGlnbm9yZWQgaWYgJ2xvY2FsRmlsZScgaXMgc2V0KVxyXG5cdFx0XHRcdFx0XHRcdCAgICBsb2NhbEZ1bGxQYXRoOiBwYXRoLFxyXG5cdFx0XHRcdFx0XHRcdCAgICAvLyBnZXQgbm90aWZpZWQgb2YgZmlsZSB1cGxvYWQgcHJvZ3Jlc3NcclxuXHRcdFx0XHRcdFx0XHQgICAgb25Qcm9ncmVzczogKHN0YXR1cykgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdCAgICAgIGNvbnNvbGUubG9nKFwiVXBsb2FkZWQgZnJhY3Rpb246IFwiICsgc3RhdHVzLmZyYWN0aW9uQ29tcGxldGVkKTtcclxuXHRcdFx0XHRcdFx0XHQgICAgICBjb25zb2xlLmxvZyhcIlBlcmNlbnRhZ2UgY29tcGxldGU6IFwiICsgc3RhdHVzLnBlcmNlbnRhZ2VDb21wbGV0ZWQpO1xyXG5cdFx0XHRcdFx0XHRcdCAgICB9XHJcblx0XHRcdFx0XHRcdFx0ICB9KS50aGVuKFxyXG5cdFx0XHRcdFx0XHRcdCAgICAgICh1cGxvYWRlZEZpbGUpID0+IHtcclxuXHRcdFx0XHRcdFx0XHQgICAgICAgIGNvbnNvbGUubG9nKFwiRmlsZSB1cGxvYWRlZDogXCIgKyBKU09OLnN0cmluZ2lmeSh1cGxvYWRlZEZpbGUpKTtcclxuXHRcdFx0XHRcdFx0XHQgICAgICAgICAgXHRcdGZpcmViYXNlLnN0b3JhZ2UuZ2V0RG93bmxvYWRVcmwoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgIC8vIHRoZSBmdWxsIHBhdGggb2YgYW4gZXhpc3RpbmcgZmlsZSBpbiB5b3VyIEZpcmViYXNlIHN0b3JhZ2VcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgICByZW1vdGVGdWxsUGF0aDogJ3VzZXJzLycgKyB0aGlzLnVzZXJJZCArICcvdXBsb2Fkcy9wcm9maWxlX3BpY3R1cmUuanBnJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICB9KS50aGVuKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgICAgKHVybCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgICAgICBmaXJlYmFzZS51cGRhdGVQcm9maWxlKHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICAgcGhvdG9VUkw6IHVybFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgfSkudGhlbihcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICAgICAoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgICAgICAvLyBjYWxsZWQgd2hlbiB1cGRhdGUgcHJvZmlsZSB3YXMgc3VjY2Vzc2Z1bFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgICAgICAgYWN0aXZpdHlJbmRpY2F0b3IuYnVzeSA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzZXR0aW5nc0NvbnRhaW5lci5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhY3Rpdml0eUluZGljYXRvci5zdHlsZS52aXNpYmlsaXR5ID0gJ2NvbGxhcHNlJztcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICAgICAgIHRoaXMucHJvZmlsZSA9IHVybDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICAgICB9LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgICAgIChlcnJvck1lc3NhZ2UpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICAgICAgIGNvbnNvbGUubG9nKGVycm9yTWVzc2FnZSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgICAgfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgIGNvbnN0IHVzZXJEb2N1bWVudCA9IGZpcmViYXNlLmZpcmVzdG9yZS5jb2xsZWN0aW9uKCd1c2VycycpLmRvYyh0aGlzLnVzZXJJZCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICB1c2VyRG9jdW1lbnQudXBkYXRlKHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgIFx0cHJvZmlsZV9zb3VyY2U6IHVybFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgfSlcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgICAgIH0sXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICAgICBmdW5jdGlvbiAoZXJyb3IpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgICAgICAgY29uc29sZS5sb2coXCJFcnJvcjogXCIgKyBlcnJvcik7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICAgICB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICk7XHJcblx0XHRcdFx0XHRcdFx0ICAgICAgfSxcclxuXHRcdFx0XHRcdFx0XHQgICAgICAoZXJyb3IpID0+IHtcclxuXHRcdFx0XHRcdFx0XHQgICAgICAgIGNvbnNvbGUubG9nKFwiRmlsZSB1cGxvYWQgZXJyb3I6IFwiICsgZXJyb3IpO1xyXG5cdFx0XHRcdFx0XHRcdCAgICAgIH1cclxuXHRcdFx0XHRcdFx0XHRcdCkuY2F0Y2goKGVycikgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdCAgICAgICAgLy8gcHJvY2VzcyBlcnJvclxyXG5cdFx0XHRcdFx0XHRcdCAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuXHRcdFx0XHRcdFx0XHQgICAgfSk7XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cdCAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5kaXIoZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBcdGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG5cdCAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XHJcblx0ICAgIFx0Y29uc29sZS5sb2coZXJyKVxyXG5cdCAgICB9KVxyXG5cdH1cclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLyogQWRkIG1vYmlsZSBzdHlsZXMgZm9yIHRoZSBjb21wb25lbnQgaGVyZS4gICovXFxyXFxuLmhlYWRlcntcXHJcXG4gICAgbWFyZ2luLXRvcDogNTA7XFxyXFxuXFx0bWFyZ2luLWxlZnQ6IDMyO1xcclxcblxcdGNvbG9yOiBibGFjaztcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgZm9udC1zaXplOiAzMDtcXHJcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG59XFxyXFxuLnN1Ym1pdC1idG57XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6I2FjMDBlNjtcXHJcXG4gICAgd2lkdGg6IDc1JTtcXHJcXG4gICAgaGVpZ2h0OiAxNzBweDtcXHJcXG4vKiAgICBmb250LWZhbWlseTogXFxcIlNlZ29lIFVJXFxcIixBcmlhbCxzYW5zLXNlcmlmO1xcclxcbiovICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgbWFyZ2luLXRvcDogMjA7XFxyXFxufVxcclxcbi50ZXh0LWZpZWxke1xcclxcbiAgICB3aWR0aDogODUlO1xcclxcbiAgICBtYXJnaW4tdG9wOiAyMDtcXHJcXG4gICAgY29sb3I6IzY5Njk2OVxcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2UtYnV0dG9uLWNvbnRhaW5lciB7XFxyXFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdGxlZnQ6IDA7XFxyXFxufVxcclxcbi5jbG9zZSB7XFxyXFxuXFx0bWFyZ2luOiAxMDtcXHJcXG5cXHRmb250LXNpemU6IDQwO1xcclxcblxcdHdpZHRoOiA0ODtcXHJcXG4gICAgaGVpZ2h0OiA0ODtcXHJcXG4gICAgY29sb3I6IGJsYWNrXFxyXFxufVxcclxcblxcclxcbi5lcnJvci1tZXNzYWdlIHtcXHJcXG4gICAgY29sb3I6IHJlZDtcXHJcXG4gICAgZm9udC1zaXplOiAxNjtcXHJcXG4gICAgdmlzaWJpbGl0eTogY29sbGFwc2U7XFxyXFxufVxcclxcblxcclxcbi5zZWNvbmQtdmFsIHtcXHJcXG4gICAgdmlzaWJpbGl0eTogY29sbGFwc2U7XFxyXFxufVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxTdGFja2xheW91dD5cXHJcXG4gICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJjbG9zZS1idXR0b24tY29udGFpbmVyXFxcIiBvcmllbnRhdGlvbj1cXFwiaG9yaXpvbnRhbFxcXCI+XFxyXFxuICAgICAgICA8TGFiZWwgdGV4dD1cXFwiJnRpbWVzO1xcXCIgY2xhc3M9XFxcImNsb3NlXFxcIiAodGFwKT1cXFwiY2xvc2UoJ2NhbmNlbCcpXFxcIj48L0xhYmVsPlxcclxcbiAgICA8L1N0YWNrTGF5b3V0PlxcclxcbiAgICA8TGFiZWwgY2xhc3M9XFxcImhlYWRlclxcXCIgW3RleHRdPVxcXCJsYWJlbFxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiPjwvTGFiZWw+XFxyXFxuICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiaW5wdXQtZmllbGRcXFwiPlxcclxcbiAgICBcXHQ8IS0tIDxNYXNrZWRUZXh0RmllbGQgY2xhc3M9XFxcImlucHV0IGlucHV0LWJvcmRlclxcXCIgbWFzaz1cXFwiKDAwMCkgMDAwLTAwMDBcXFwiIFsobmdNb2RlbCldPVxcXCJ2YWx1ZVxcXCIga2V5Ym9hcmRUeXBlPVxcXCJwaG9uZVxcXCI+PC9NYXNrZWRUZXh0RmllbGQ+IC0tPlxcclxcbiAgICAgICAgPFRleHRGaWVsZCAjdmFsIFsobmdNb2RlbCldPVxcXCJ2YWx1ZVxcXCIgW2tleWJvYXJkVHlwZV0gPSBcXFwia2V5Ym9hcmRcXFwiIGF1dG9jb3JyZWN0PVxcXCJmYWxzZVxcXCIgcmV0dXJuS2V5VHlwZT1cXFwie3tyZXR1cm5LZXl9fVxcXCJcXHJcXG4gICAgICAgICBbbWF4TGVuZ3RoXT0gXFxcIm1heGxlbmd0aFxcXCIgY2xhc3M9XFxcInRleHQtZmllbGRcXFwiIHNlY3VyZT1cXFwie3tpc1NlY3VyZX19XFxcIiBoaW50PVxcXCJ7eyBoaW50IH19XFxcIj48L1RleHRGaWVsZD5cXHJcXG4gICAgICAgIDxUZXh0RmllbGQgI3NlY29uZFZhbCBbKG5nTW9kZWwpXT1cXFwic2Vjb25kVmFsdWVcXFwiIFtrZXlib2FyZFR5cGVdID0gXFxcImtleWJvYXJkXFxcIiBhdXRvY29ycmVjdD1cXFwiZmFsc2VcXFwiIHJldHVybktleVR5cGU9XFxcImRvbmVcXFwiXFxyXFxuICAgICAgICAgW21heExlbmd0aF09IFxcXCJtYXhsZW5ndGhcXFwiIGNsYXNzPVxcXCJ0ZXh0LWZpZWxkIHNlY29uZC12YWxcXFwiIHNlY3VyZT1cXFwie3tpc1NlY3VyZX19XFxcIiBoaW50PVxcXCJ7eyBzZWNvbmRIaW50IH19XFxcIj48L1RleHRGaWVsZD5cXHJcXG4gICAgPC9TdGFja0xheW91dD5cXHJcXG4gICAgPExhYmVsICNlcnJvck1lc3NhZ2UgdGV4dD1cXFwie3sgZXJyb3JUZXh0IH19XFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgY2xhc3M9XFxcImVycm9yLW1lc3NhZ2VcXFwiPjwvTGFiZWw+XFxyXFxuXFxyXFxuICAgIDxCdXR0b24gdGV4dD1cXFwiU2F2ZVxcXCIgKHRhcCk9XFxcInN1Ym1pdERhdGEodmFsLnRleHQpXFxcIiBjbGFzcz1cXFwic3VibWl0LWJ0blxcXCI+PC9CdXR0b24+XFxyXFxuXFxyXFxuPC9TdGFja2xheW91dD5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVHJhbnNmZXJTZXJ2aWNlIH0gZnJvbSAnLi4vZGF0YXRyYW5zZmVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZVwiO1xyXG4vLyBpbXBvcnQgeyBNb2RhbERpYWxvZ1BhcmFtcyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9kaXJlY3RpdmVzL2RpYWxvZ3NcIjtcclxuaW1wb3J0ICogYXMgZmlyZWJhc2UgZnJvbSAnbmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZSc7XHJcbmltcG9ydCB7IExvZ2luY2hlY2tTZXJ2aWNlIH0gZnJvbSAnLi4vbG9naW5jaGVjay5zZXJ2aWNlLnRucyc7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBNb2RhbERpYWxvZ1BhcmFtcyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9kaXJlY3RpdmVzL2RpYWxvZ3NcIjtcclxuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCI7XHJcbmltcG9ydCB7IExhYmVsIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9sYWJlbCc7XHJcbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvdGV4dC1maWVsZCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1zZXR0aW5nc2Zvcm0nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9zZXR0aW5nc2Zvcm0uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3NldHRpbmdzZm9ybS5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFNldHRpbmdzZm9ybUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdHJhbnNmZXJTZXJ2aWNlOiBUcmFuc2ZlclNlcnZpY2UsIHByaXZhdGUgbG9naW5jaGVja1NlcnZpY2U6IExvZ2luY2hlY2tTZXJ2aWNlLCBcclxuICAgIHByaXZhdGUgcGFnZTogUGFnZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMsIHByaXZhdGUgcGFyYW1zOiBNb2RhbERpYWxvZ1BhcmFtcykgeyB9XHJcblxyXG4gIEBWaWV3Q2hpbGQoXCJlcnJvck1lc3NhZ2VcIiwgeyBzdGF0aWM6IHRydWUgfSkgZW06IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZChcInNlY29uZFZhbFwiLCB7IHN0YXRpYzogdHJ1ZSB9KSBzdjogRWxlbWVudFJlZjtcclxuICB1c2VySWQ7XHJcbiAgZmllbGQ7XHJcbiAgbGFiZWw7XHJcbiAgdmFsdWU7XHJcbiAgc2Vjb25kVmFsdWU7XHJcbiAga2V5Ym9hcmQ7XHJcbiAgbWF4bGVuZ3RoO1xyXG4gIGlzU2VjdXJlID0gZmFsc2U7XHJcbiAgZXJyb3JUZXh0O1xyXG4gIHJldHVybktleSA9IFwiZG9uZVwiXHJcbiAgaGludDtcclxuICBzZWNvbmRIaW50O1xyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgLy8gdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XHJcbiAgICB0aGlzLmZpZWxkID0gdGhpcy50cmFuc2ZlclNlcnZpY2UuZ2V0RGF0YSgpO1xyXG4gICAgdGhpcy5sYWJlbCA9IHRoaXMuZmllbGQubGFiZWw7XHJcbiAgICB0aGlzLnZhbHVlID0gdGhpcy5maWVsZC52YWx1ZTtcclxuICAgIGlmKHRoaXMuZmllbGQudmFsdWUgPT0gXCJOb25lXCIpIHtcclxuICAgICAgdGhpcy52YWx1ZSA9ICcnO1xyXG4gICAgfVxyXG4gICAgaWYodGhpcy5sYWJlbD09XCJOYW1lXCIpe1xyXG4gICAgICAvLyB0aGlzLmtleWJvYXJkID0gXCJcIjtcclxuICAgICAgdGhpcy5tYXhsZW5ndGggPSAzMDtcclxuICAgICAgdGhpcy5yZXR1cm5LZXkgPSBcIm5leHRcIjtcclxuICAgICAgdGhpcy52YWx1ZSA9IHRoaXMuZmllbGQuZmlyc3ROYW1lO1xyXG4gICAgICB0aGlzLnNlY29uZFZhbHVlID0gdGhpcy5maWVsZC5sYXN0TmFtZTtcclxuICAgICAgdGhpcy5oaW50ID0gXCJGaXJzdCBuYW1lXCI7XHJcbiAgICAgIHRoaXMuc2Vjb25kSGludCA9IFwiTGFzdCBuYW1lXCI7XHJcbiAgICAgIGxldCBzZWNvbmRWYWx1ZSA9IDxUZXh0RmllbGQ+IHRoaXMuc3YubmF0aXZlRWxlbWVudDtcclxuICAgICAgc2Vjb25kVmFsdWUuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZih0aGlzLmxhYmVsPT1cIkVtYWlsXCIpe1xyXG4gICAgICB0aGlzLmtleWJvYXJkID0gXCJlbWFpbFwiO1xyXG4gICAgICB0aGlzLm1heGxlbmd0aCA9IDMwO1xyXG4gICAgICB0aGlzLmVycm9yVGV4dCA9IFwiSW52YWxpZCBlbWFpbFwiXHJcbiAgICAgIHRoaXMuaGludCA9IFwiRW1haWxcIlxyXG4gICAgfVxyXG4gICAgZWxzZSBpZih0aGlzLmxhYmVsPT1cIlBob25lIE51bWJlclwiKXtcclxuICAgICAgdGhpcy5rZXlib2FyZCA9IFwicGhvbmVcIjtcclxuICAgICAgdGhpcy5tYXhsZW5ndGggPSAxMDtcclxuICAgICAgdGhpcy5lcnJvclRleHQgPSBcIkludmFsaWQgcGhvbmUgbnVtYmVyXCJcclxuICAgICAgdGhpcy5oaW50ID0gXCJ4eHgteHh4LXh4eHhcIlxyXG4gICAgfVxyXG4gICAgZWxzZSBpZih0aGlzLmxhYmVsPT1cIlBhc3N3b3JkXCIpIHtcclxuICAgICAgdGhpcy52YWx1ZSA9ICcnO1xyXG4gICAgICB0aGlzLm1heGxlbmd0aCA9IDMwO1xyXG4gICAgICB0aGlzLmlzU2VjdXJlID0gdHJ1ZTtcclxuICAgICAgdGhpcy5sYWJlbCA9IFwiRW50ZXIgbmV3IHBhc3N3b3JkXCI7XHJcbiAgICAgIHRoaXMuaGludCA9IFwiTmV3IHBhc3N3b3JkXCI7XHJcbiAgICAgIHRoaXMuc2Vjb25kSGludCA9IFwiUmUtZW50ZXIgbmV3IHBhc3N3b3JkXCI7XHJcbiAgICAgIHRoaXMuZXJyb3JUZXh0ID0gXCJQYXNzd29yZCBtdXN0IGJlIGF0IGxlc3QgNiBjaGFyYWN0ZXJzIGxvbmdcIjtcclxuICAgICAgbGV0IHNlY29uZFZhbHVlID0gPFRleHRGaWVsZD4gdGhpcy5zdi5uYXRpdmVFbGVtZW50O1xyXG4gICAgICBzZWNvbmRWYWx1ZS5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdWJtaXREYXRhKHJlc3VsdCkge1xyXG4gICAgdGhpcy51c2VySWQgPSB0aGlzLmxvZ2luY2hlY2tTZXJ2aWNlLmdldFVzZXIoKTtcclxuICAgIGNvbnN0IHVzZXJEb2N1bWVudCA9IGZpcmViYXNlLmZpcmVzdG9yZS5jb2xsZWN0aW9uKCd1c2VycycpLmRvYyh0aGlzLnVzZXJJZCk7XHJcbiAgICBpZiAodGhpcy5sYWJlbCA9PSBcIk5hbWVcIikge1xyXG4gICAgICBmaXJlYmFzZS51cGRhdGVQcm9maWxlKHtcclxuICAgICAgICBkaXNwbGF5TmFtZTogdGhpcy52YWx1ZSArIFwiIFwiICsgdGhpcy5zZWNvbmRWYWx1ZVxyXG4gICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlByb2ZpbGUgdXBkYXRlZFwiKVxyXG4gICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgICB9KVxyXG5cclxuICAgICAgLy8gY29uc29sZS5sb2coXCJuYW1lXCIsIG5hbWUpXHJcbiAgICAgIHVzZXJEb2N1bWVudC51cGRhdGUoe1xyXG4gICAgICAgIGZpcnN0X25hbWU6IHRoaXMudmFsdWUsXHJcbiAgICAgICAgbGFzdF9uYW1lOiB0aGlzLnNlY29uZFZhbHVlXHJcbiAgICAgIH0pXHJcblxyXG4gICAgICB2YXIgcG9zdGluZ3NDb2xsZWN0aW9uID0gZmlyZWJhc2UuZmlyZXN0b3JlLmNvbGxlY3Rpb24oJ3Bvc3RpbmdzJyk7XHJcbiAgICAgIHVzZXJEb2N1bWVudC5nZXQoKS50aGVuKGRvYyA9PiB7XHJcbiAgICAgICAgbGV0IHBvc3RJZHMgPSBkb2MuZGF0YSgpLnBvc3RzO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwicG9zdGlkc1wiLCBwb3N0SWRzKVxyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBwb3N0SWRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICBwb3N0aW5nc0NvbGxlY3Rpb24uZG9jKHBvc3RJZHNbaV0pLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgIHVzZXI6IHRoaXMudmFsdWUgKyBcIiBcIiArIHRoaXMuc2Vjb25kVmFsdWVcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5wYXJhbXMuY2xvc2VDYWxsYmFjayhcInVwZGF0ZVwiKVxyXG4gICAgfVxyXG5cclxuICAgIGVsc2UgaWYodGhpcy5sYWJlbCA9PSBcIkVtYWlsXCIpIHtcclxuICAgICAgZmlyZWJhc2UudXBkYXRlRW1haWwocmVzdWx0KS50aGVuKCgpID0+IHtcclxuICAgICAgICB1c2VyRG9jdW1lbnQudXBkYXRlKHtcclxuICAgICAgICAgIGVtYWlsOiByZXN1bHQsXHJcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnBhcmFtcy5jbG9zZUNhbGxiYWNrKFwidXBkYXRlXCIpXHJcbiAgICAgICAgfSlcclxuICAgICAgfSkuY2F0Y2goXHJcbiAgICAgICAgICAoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zaG93RXJyb3IoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZih0aGlzLmxhYmVsID09IFwiUGhvbmUgTnVtYmVyXCIpIHtcclxuICAgICAgdXNlckRvY3VtZW50LnVwZGF0ZSh7XHJcbiAgICAgICAgcGhvbmVfbnVtYmVyOiByZXN1bHQsXHJcbiAgICAgIH0pLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIHRoaXMucGFyYW1zLmNsb3NlQ2FsbGJhY2soXCJ1cGRhdGVcIilcclxuICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIHRoaXMuc2hvd0Vycm9yKCk7XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBlbHNlIGlmKHRoaXMubGFiZWwgPT0gXCJFbnRlciBuZXcgcGFzc3dvcmRcIikge1xyXG4gICAgICBpZih0aGlzLnZhbHVlICE9IHRoaXMuc2Vjb25kVmFsdWUpIHtcclxuICAgICAgICB0aGlzLmVycm9yVGV4dCA9IFwiUGFzc3dvcmRzIGRvIG5vdCBtYXRjaFwiO1xyXG4gICAgICAgIHRoaXMuc2hvd0Vycm9yKCk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgZmlyZWJhc2UudXBkYXRlUGFzc3dvcmQodGhpcy52YWx1ZSkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnBhcmFtcy5jbG9zZUNhbGxiYWNrKFwidXBkYXRlXCIpXHJcbiAgICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgdGhpcy5lcnJvclRleHQgPSBcIlBhc3N3b3JkIG11c3QgYmUgYXQgbGVzdCA2IGNoYXJhY3RlcnMgbG9uZ1wiO1xyXG4gICAgICAgICAgdGhpcy5zaG93RXJyb3IoKTtcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjbG9zZShyZXMpIHtcclxuICAgIHRoaXMucGFyYW1zLmNsb3NlQ2FsbGJhY2socmVzKTtcclxuICB9XHJcblxyXG4gIHNob3dFcnJvcigpIHtcclxuICAgIGxldCBlcnJvck1lc3NhZ2UgPSA8TGFiZWw+IHRoaXMuZW0ubmF0aXZlRWxlbWVudDtcclxuICAgIGVycm9yTWVzc2FnZS5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XHJcbiAgfVxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCJcIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8cD5cXHJcXG4gIHVwZGF0ZSB3b3JrcyFcXHJcXG48L3A+XFxyXFxuXCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBMb2dpbmNoZWNrU2VydmljZSB9IGZyb20gJy4uL2xvZ2luY2hlY2suc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC11cGRhdGUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi91cGRhdGUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3VwZGF0ZS5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFVwZGF0ZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbG9naW5jaGVja1NlcnZpY2U6IExvZ2luY2hlY2tTZXJ2aWNlKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgXHR0aGlzLmxvZ2luY2hlY2tTZXJ2aWNlLmxvZ2luQ2hlY2soKTtcclxuICB9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFVzZXJTZXJ2aWNlIHtcclxuICBcdC8qKlxyXG5cdCogVG8gZ2V0IHRoZSBzZXJ2ZXIgdG8gcmVjb2duaXplIHlvdXIgbW9iaWxlIGRldmljZSwgZmluZCB5b3VyIGlwdjQgYWRkcmVzcyBieSBydW5uaW5nIGlwY29uZmlnIGluIGEgdGVybWluYWwgd2luZG93XHJcblx0KiBhbmQgYWRkIGEgbmV3IHVyaSBsaW5lIHdpdGggeW91ciBpcHY0IGFkZHJlc3MuIERvIHRoaXMgZm9yIG5ldHdvcmtfc2VjdXJpdHlfY29uZmlnLnhtbCwgdXNlci5zZXJ2aWNlcy50bnMudHMsIGFuZFxyXG5cdCogcG9zdGluZy5zZXJ2aWNlLnRucy50cy5cclxuXHQqL1xyXG5cdC8vIEFkYW0ncyB0ZXN0aW5nIHNlcnZlclxyXG5cdC8vIHVyaSA9ICdodHRwOi8vMTkyLjE2OC4xLjc6NDAwMCc7XHJcblx0Ly8gdXJpID0gJ2h0dHA6Ly8xMC41LjExLjI1OjQwMDAnO1xyXG5cdC8vIFBoaWxsaXAncyBUZXN0aW5nIHNlcnZlclxyXG5cdHVyaSA9ICdodHRwOi8vMTkyLjE2OC4xLjM6NDAwMCc7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7IH1cclxuXHJcbiAgZ2V0VXNlcnMoKSB7XHJcbiAgXHRyZXR1cm4gdGhpcy5odHRwLmdldChgJHt0aGlzLnVyaX0vdXNlcnNgKTtcclxuICB9XHJcblxyXG4gIGdldFVzZXJieUlkKGlkKSB7XHJcbiAgXHRyZXR1cm4gdGhpcy5odHRwLmdldChgJHt0aGlzLnVyaX0vdXNlcnMvJHtpZH1gKTtcclxuICB9XHJcblxyXG4gIGFkZFVzZXIobmFtZT0nJywgdXNlcm5hbWU9JycsIGFkZHJlc3M9JycsIGJpcnRoZGF0ZT0nJywgZW1haWw9JycsIGdlbmRlcj0nJywgcGhvbmVfbnVtYmVyPScnLCByaWRlc19naXZlbj1cIjBcIiwgcmlkZXNfcmVjZWl2ZWQ9XCIwXCIpIHtcclxuICBcdGNvbnN0IHVzZXIgPSB7XHJcbiAgXHRcdG5hbWU6IG5hbWUsXHJcbiAgICAgIHVzZXJuYW1lOiB1c2VybmFtZSxcclxuICAgICAgYWRkcmVzczogYWRkcmVzcyxcclxuICAgICAgYmlydGhkYXRlOiBiaXJ0aGRhdGUsXHJcbiAgICAgIGVtYWlsOiBlbWFpbCxcclxuICAgICAgZ2VuZGVyOiBnZW5kZXIsXHJcbiAgICAgIHBob25lX251bWJlcjogcGhvbmVfbnVtYmVyLFxyXG4gICAgICByaWRlc19naXZlbjogcmlkZXNfZ2l2ZW4sXHJcbiAgICAgIHJpZGVzX3JlY2VpdmVkOiByaWRlc19yZWNlaXZlZCxcclxuICAgICAgcGF5bWVudF9pZDogXCJcIlxyXG4gIFx0fTtcclxuICBcdHJldHVybiB0aGlzLmh0dHAucG9zdChgJHt0aGlzLnVyaX0vdXNlcnMvYWRkL2AsIHVzZXIpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlVXNlcihpZCwgbmFtZSwgdXNlcm5hbWUsIGFkZHJlc3MsIGJpcnRoZGF0ZSwgZW1haWwsIGdlbmRlciwgcGhvbmVfbnVtYmVyLCByaWRlc19naXZlbiwgcmlkZXNfcmVjZWl2ZWQsIHBheW1lbnRfaWQpIHtcclxuICBcdGNvbnN0IHVzZXIgPSB7XHJcbiAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgIHVzZXJuYW1lOiB1c2VybmFtZSxcclxuICAgICAgYWRkcmVzczogYWRkcmVzcyxcclxuICAgICAgYmlydGhkYXRlOiBiaXJ0aGRhdGUsXHJcbiAgICAgIGVtYWlsOiBlbWFpbCxcclxuICAgICAgZ2VuZGVyOiBnZW5kZXIsXHJcbiAgICAgIHBob25lX251bWJlcjogcGhvbmVfbnVtYmVyLFxyXG4gICAgICByaWRlc19naXZlbjogcmlkZXNfZ2l2ZW4sXHJcbiAgICAgIHJpZGVzX3JlY2VpdmVkOiByaWRlc19yZWNlaXZlZCxcclxuICAgICAgcGF5bWVudF9pZDogcGF5bWVudF9pZFxyXG4gICAgfTtcclxuICBcdHJldHVybiB0aGlzLmh0dHAucG9zdChgJHt0aGlzLnVyaX0vdXNlcnMvdXBkYXRlLyR7aWR9YCwgdXNlcik7XHJcbiAgfVxyXG5cclxuICBkZWxldGVVc2VyKGlkKSB7XHJcbiAgXHRyZXR1cm4gdGhpcy5odHRwLmdldChgJHt0aGlzLnVyaX0vdXNlcnMvZGVsZXRlLyR7aWR9YCk7XHJcbiAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBVc2VyU2VydmljZSB7XHJcbiAgXHQvKipcclxuXHQqIFRvIGdldCB0aGUgc2VydmVyIHRvIHJlY29nbml6ZSB5b3VyIG1vYmlsZSBkZXZpY2UsIGZpbmQgeW91ciBpcHY0IGFkZHJlc3MgYnkgcnVubmluZyBpcGNvbmZpZyBpbiBhIHRlcm1pbmFsIHdpbmRvd1xyXG5cdCogYW5kIGFkZCBhIG5ldyB1cmkgbGluZSB3aXRoIHlvdXIgaXB2NCBhZGRyZXNzLiBEbyB0aGlzIGZvciBuZXR3b3JrX3NlY3VyaXR5X2NvbmZpZy54bWwsIHVzZXIuc2VydmljZXMudG5zLnRzLCBhbmRcclxuXHQqIHBvc3Rpbmcuc2VydmljZS50bnMudHMuXHJcblx0Ki9cclxuXHQvLyBBZGFtJ3MgdGVzdGluZyBzZXJ2ZXJcclxuXHQvLyB1cmkgPSAnaHR0cDovLzE5Mi4xNjguMS43OjQwMDAnO1xyXG5cdC8vIHVyaSA9ICdodHRwOi8vMTAuNS4xMS4yNTo0MDAwJztcclxuXHQvLyBQaGlsbGlwJ3MgVGVzdGluZyBzZXJ2ZXJcclxuXHR1cmkgPSAnaHR0cDovLzE5Mi4xNjguMS4zOjQwMDAnO1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkgeyB9XHJcblxyXG4gIGdldFVzZXJzKCkge1xyXG4gIFx0cmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy51cml9L3VzZXJzYCk7XHJcbiAgfVxyXG5cclxuICBnZXRVc2VyYnlJZChpZCkge1xyXG4gIFx0cmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy51cml9L3VzZXJzLyR7aWR9YCk7XHJcbiAgfVxyXG5cclxuICBhZGRVc2VyKG5hbWU9JycsIHVzZXJuYW1lPScnLCBhZGRyZXNzPScnLCBiaXJ0aGRhdGU9JycsIGVtYWlsPScnLCBnZW5kZXI9JycsIHBob25lX251bWJlcj0nJywgcmlkZXNfZ2l2ZW49XCIwXCIsIHJpZGVzX3JlY2VpdmVkPVwiMFwiKSB7XHJcbiAgXHRjb25zdCB1c2VyID0ge1xyXG4gIFx0XHRuYW1lOiBuYW1lLFxyXG4gICAgICB1c2VybmFtZTogdXNlcm5hbWUsXHJcbiAgICAgIGFkZHJlc3M6IGFkZHJlc3MsXHJcbiAgICAgIGJpcnRoZGF0ZTogYmlydGhkYXRlLFxyXG4gICAgICBlbWFpbDogZW1haWwsXHJcbiAgICAgIGdlbmRlcjogZ2VuZGVyLFxyXG4gICAgICBwaG9uZV9udW1iZXI6IHBob25lX251bWJlcixcclxuICAgICAgcmlkZXNfZ2l2ZW46IHJpZGVzX2dpdmVuLFxyXG4gICAgICByaWRlc19yZWNlaXZlZDogcmlkZXNfcmVjZWl2ZWQsXHJcbiAgICAgIHBheW1lbnRfaWQ6IFwiXCJcclxuICBcdH07XHJcbiAgXHRyZXR1cm4gdGhpcy5odHRwLnBvc3QoYCR7dGhpcy51cml9L3VzZXJzL2FkZC9gLCB1c2VyKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVVzZXIoaWQsIG5hbWUsIHVzZXJuYW1lLCBhZGRyZXNzLCBiaXJ0aGRhdGUsIGVtYWlsLCBnZW5kZXIsIHBob25lX251bWJlciwgcmlkZXNfZ2l2ZW4sIHJpZGVzX3JlY2VpdmVkLCBwYXltZW50X2lkKSB7XHJcbiAgXHRjb25zdCB1c2VyID0ge1xyXG4gICAgICBuYW1lOiBuYW1lLFxyXG4gICAgICB1c2VybmFtZTogdXNlcm5hbWUsXHJcbiAgICAgIGFkZHJlc3M6IGFkZHJlc3MsXHJcbiAgICAgIGJpcnRoZGF0ZTogYmlydGhkYXRlLFxyXG4gICAgICBlbWFpbDogZW1haWwsXHJcbiAgICAgIGdlbmRlcjogZ2VuZGVyLFxyXG4gICAgICBwaG9uZV9udW1iZXI6IHBob25lX251bWJlcixcclxuICAgICAgcmlkZXNfZ2l2ZW46IHJpZGVzX2dpdmVuLFxyXG4gICAgICByaWRlc19yZWNlaXZlZDogcmlkZXNfcmVjZWl2ZWQsXHJcbiAgICAgIHBheW1lbnRfaWQ6IHBheW1lbnRfaWRcclxuICAgIH07XHJcbiAgXHRyZXR1cm4gdGhpcy5odHRwLnBvc3QoYCR7dGhpcy51cml9L3VzZXJzL3VwZGF0ZS8ke2lkfWAsIHVzZXIpO1xyXG4gIH1cclxuXHJcbiAgZGVsZXRlVXNlcihpZCkge1xyXG4gIFx0cmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy51cml9L3VzZXJzL2RlbGV0ZS8ke2lkfWApO1xyXG4gIH1cclxuXHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi8qIEFkZCBtb2JpbGUgc3R5bGVzIGZvciB0aGUgY29tcG9uZW50IGhlcmUuICAqL1xcclxcbi5pbWcge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbn1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8UGFnZS5hY3Rpb25CYXI+XFxyXFxuICA8QWN0aW9uQmFyIHRpdGxlPVxcXCJcXFwiIGJhY2tncm91bmRDb2xvcj1cXFwiYmxhY2tcXFwiPlxcclxcbiAgXFx0PE5hdmlnYXRpb25CdXR0b24gdGV4dD1cXFwiR28gQmFja1xcXCIgYW5kcm9pZC5zeXN0ZW1JY29uPVxcXCJpY19tZW51X2JhY2tcXFwiICh0YXApPVxcXCJvbk5hdkJ0blRhcCgpXFxcIj48L05hdmlnYXRpb25CdXR0b24+XFxyXFxuICA8L0FjdGlvbkJhcj5cXHJcXG48L1BhZ2UuYWN0aW9uQmFyPlxcclxcbjxJbWFnZSBzcmM9XFxcInt7IGltZ1NvdXJjZSB9fVxcXCIgY2xhc3M9XFxcImltZ1xcXCI+PC9JbWFnZT5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRyYW5zZmVyU2VydmljZSB9IGZyb20gJy4uL2RhdGF0cmFuc2Zlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC12aWV3LWltYWdlJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vdmlldy1pbWFnZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vdmlldy1pbWFnZS5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFZpZXdJbWFnZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdHJhbnNmZXJTZXJ2aWNlOiBUcmFuc2ZlclNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zKSB7IH1cclxuXHJcbiAgaW1nU291cmNlO1xyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICBcdHRoaXMuaW1nU291cmNlID0gdGhpcy50cmFuc2ZlclNlcnZpY2UuZ2V0RGF0YSgpO1xyXG4gIFx0Y29uc29sZS5sb2codGhpcy5pbWdTb3VyY2UpO1xyXG4gIH1cclxuXHJcbiAgb25OYXZCdG5UYXAoKSB7XHJcbiAgXHRpZih0aGlzLnJvdXRlci5jYW5Hb0JhY2spIHtcclxuICBcdFx0dGhpcy5yb3V0ZXIuYmFjaygpO1xyXG4gIFx0fVxyXG4gIFx0ZWxzZSB7XHJcbiAgXHRcdHRoaXMucm91dGVyLm5hdmlnYXRlKFsnbmF2aWdhdGlvbiddKTtcclxuICBcdH1cclxuICB9XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi8qIEFkZCBtb2JpbGUgc3R5bGVzIGZvciB0aGUgY29tcG9uZW50IGhlcmUuICAqL1xcclxcbi5wYWdlIHtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgdmlzaWJpbGl0eTogY29sbGFwc2U7XFxyXFxufVxcclxcbi5mb3JtIHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAzMDtcXHJcXG4gIG1hcmdpbi1yaWdodDogMzA7XFxyXFxuICBmbGV4LWdyb3c6IDI7XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nbyB7XFxyXFxuICBtYXJnaW4tdG9wOiAxNTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDcyO1xcclxcbiAgaGVpZ2h0OiAxMjA7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuLmhlYWRlciB7XFxyXFxuICBob3Jpem9udGFsLWFsaWduOiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDI1O1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDcwO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgY29sb3I6ICNhYzAwZTY7XFxyXFxufVxcclxcblxcclxcbi5pbnB1dC1maWVsZCB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAyNTtcXHJcXG59XFxyXFxuLmlucHV0IHtcXHJcXG4gIGZvbnQtc2l6ZTogMTg7XFxyXFxuICBwbGFjZWhvbGRlci1jb2xvcjogI0E4QThBODtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi1wcmltYXJ5IHtcXHJcXG4gIGhlaWdodDogNTA7XFxyXFxuICBtYXJnaW46IDMwIDUgMTUgNTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhYzAwZTY7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1O1xcclxcbiAgZm9udC1zaXplOiAyMDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxufVxcclxcblxcclxcbi5idG4tZmIge1xcclxcbiAgaGVpZ2h0OiAxMDA7XFxyXFxuICBtYXJnaW46IDAgNSAxNSA1O1xcclxcbiAgLypib3JkZXItcmFkaXVzOiA1OyovXFxyXFxuICBmb250LXNpemU6IDIwO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ2luLWxhYmVsIHtcXHJcXG4gIGhvcml6b250YWwtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGNvbG9yOiAjQThBOEE4O1xcclxcbiAgZm9udC1zaXplOiAxNjtcXHJcXG4gIC8qIG1hcmdpbi1ib3R0b206IDIwOyAqL1xcclxcbn1cXHJcXG4uc2lnbi11cC1sYWJlbCB7XFxyXFxuICBob3Jpem9udGFsLWFsaWduOiBjZW50ZXI7XFxyXFxuICBjb2xvcjogI0E4QThBODtcXHJcXG4gIGZvbnQtc2l6ZTogMTY7XFxyXFxuICAvKiBtYXJnaW4tYm90dG9tOiAyMDsgKi9cXHJcXG59XFxyXFxuLmJvbGQge1xcclxcbiAgY29sb3I6ICMwMDAwMDA7IFxcclxcbn1cXHJcXG4uYWN0aXZpdHktaW5kaWNhdG9yIHtcXHJcXG4gIGNvbG9yOiAjYWMwMGU2O1xcclxcbn1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8U2Nyb2xsVmlldz5cXHJcXG5cXHQ8RmxleGJveExheW91dCBjbGFzcz1cXFwicGFnZVxcXCIgI3dlbGNvbWVDb250YWluZXI+XFxyXFxuXFx0XFx0PCEtLSA8R3JpZExheW91dCByb3dzPVxcXCI2MzAsIGF1dG9cXFwiPiAtLT5cXHJcXG5cXHRcXHQ8R3JpZExheW91dCByb3dzPVxcXCIqLCBhdXRvXFxcIj5cXHJcXG5cXHRcXHRcXHQ8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImZvcm1cXFwiIHJvdz0wPlxcclxcblxcdFxcdFxcdFxcdDxJbWFnZSBjbGFzcz1cXFwibG9nb1xcXCIgc3JjPVxcXCJ+L2ltZy9sb2dvLnBuZ1xcXCI+PC9JbWFnZT5cXHJcXG5cXHRcXHRcXHRcXHQ8IS0tIDxMYWJlbCBjbGFzcz1cXFwiaGVhZGVyXFxcIiB0ZXh0PVxcXCJDb2xsZWdlUG9vbFxcXCI+PC9MYWJlbD4gLS0+XFxyXFxuXFxyXFxuXFx0XFx0XFx0XFx0PFN0YWNrTGF5b3V0ICpuZ0lmPVxcXCIhaXNMb2dnaW5nSW5cXFwiIGNsYXNzPVxcXCJpbnB1dC1maWVsZFxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PFRleHRGaWVsZCBjbGFzcz1cXFwiaW5wdXRcXFwiIGhpbnQ9XFxcIkZpcnN0IG5hbWVcXFwiIFsobmdNb2RlbCldPVxcXCJmaXJzdE5hbWVcXFwiIHJldHVybktleVR5cGU9XFxcIm5leHRcXFwiICNmbj5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8L1RleHRGaWVsZD5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImhyLWxpZ2h0XFxcIj48L1N0YWNrTGF5b3V0PlxcclxcblxcdFxcdFxcdFxcdDwvU3RhY2tMYXlvdXQ+XFxyXFxuXFxyXFxuXFx0XFx0XFx0XFx0PFN0YWNrTGF5b3V0ICpuZ0lmPVxcXCIhaXNMb2dnaW5nSW5cXFwiIGNsYXNzPVxcXCJpbnB1dC1maWVsZFxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PFRleHRGaWVsZCBjbGFzcz1cXFwiaW5wdXRcXFwiIGhpbnQ9XFxcIkxhc3QgbmFtZVxcXCIgWyhuZ01vZGVsKV09XFxcImxhc3ROYW1lXFxcIiByZXR1cm5LZXlUeXBlPVxcXCJuZXh0XFxcIiAjbG4+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PC9UZXh0RmllbGQ+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJoci1saWdodFxcXCI+PC9TdGFja0xheW91dD5cXHJcXG5cXHRcXHRcXHRcXHQ8L1N0YWNrTGF5b3V0PlxcclxcblxcclxcblxcdFxcdFxcdFxcdDxTdGFja0xheW91dCBjbGFzcz1cXFwiaW5wdXQtZmllbGRcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdDxUZXh0RmllbGQgY2xhc3M9XFxcImlucHV0XFxcIiBoaW50PVxcXCJFbWFpbFxcXCIga2V5Ym9hcmRUeXBlPVxcXCJlbWFpbFxcXCIgYXV0b2NvcnJlY3Q9XFxcImZhbHNlXFxcIlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdGF1dG9jYXBpdGFsaXphdGlvblR5cGU9XFxcIm5vbmVcXFwiIFsobmdNb2RlbCldPVxcXCJlbWFpbFxcXCIgcmV0dXJuS2V5VHlwZT1cXFwibmV4dFxcXCJcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQocmV0dXJuUHJlc3MpPVxcXCJmb2N1c1Bhc3N3b3JkKClcXFwiICNlbT48L1RleHRGaWVsZD5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImhyLWxpZ2h0XFxcIj48L1N0YWNrTGF5b3V0PlxcclxcblxcdFxcdFxcdFxcdDwvU3RhY2tMYXlvdXQ+XFxyXFxuXFxyXFxuXFx0XFx0XFx0XFx0PFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJpbnB1dC1maWVsZFxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PFRleHRGaWVsZCBjbGFzcz1cXFwiaW5wdXRcXFwiIGhpbnQ9XFxcIlBhc3N3b3JkXFxcIiBzZWN1cmU9XFxcInRydWVcXFwiIFsobmdNb2RlbCldPVxcXCJwYXNzd29yZFxcXCJcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRbcmV0dXJuS2V5VHlwZV09XFxcImlzTG9nZ2luZ0luID8gJ2RvbmUnIDogJ25leHQnXFxcIiAocmV0dXJuUHJlc3MpPVxcXCJmb2N1c0NvbmZpcm1QYXNzd29yZCgpXFxcIiAjcHc+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PC9UZXh0RmllbGQ+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJoci1saWdodFxcXCI+PC9TdGFja0xheW91dD5cXHJcXG5cXHRcXHRcXHRcXHQ8L1N0YWNrTGF5b3V0PlxcclxcblxcclxcblxcdFxcdFxcdFxcdDxTdGFja0xheW91dCAqbmdJZj1cXFwiIWlzTG9nZ2luZ0luXFxcIiBjbGFzcz1cXFwiaW5wdXQtZmllbGRcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdDxUZXh0RmllbGQgY2xhc3M9XFxcImlucHV0XFxcIiBoaW50PVxcXCJDb25maXJtIHBhc3N3b3JkXFxcIiBzZWN1cmU9XFxcInRydWVcXFwiIFsobmdNb2RlbCldPVxcXCJjb25maXJtUGFzc3dvcmRcXFwiXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0cmV0dXJuS2V5VHlwZT1cXFwiZG9uZVxcXCIgI2Nwdz48L1RleHRGaWVsZD5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImhyLWxpZ2h0XFxcIj48L1N0YWNrTGF5b3V0PlxcclxcblxcdFxcdFxcdFxcdDwvU3RhY2tMYXlvdXQ+XFxyXFxuXFxyXFxuXFx0XFx0XFx0XFx0PEJ1dHRvbiBbdGV4dF09XFxcImlzTG9nZ2luZ0luID8gJ0xvZyBJbicgOiAnU2lnbiBVcCdcXFwiICh0YXApPVxcXCJzdWJtaXQoKVxcXCJcXHJcXG5cXHRcXHRcXHRcXHRcXHRjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5IG0tdC0yMFxcXCI+PC9CdXR0b24+XFxyXFxuXFx0XFx0XFx0XFx0PFN0YWNrTGF5b3V0PlxcclxcblxcdFxcdFxcdFxcdFxcdDxGYWNlYm9va0xvZ2luQnV0dG9uICh0YXApPVxcXCJmYkxvZ2luKClcXFwiIGNsYXNzPVxcXCJidG4tZmJcXFwiPjwvRmFjZWJvb2tMb2dpbkJ1dHRvbj5cXHJcXG5cXHRcXHRcXHRcXHQ8L1N0YWNrTGF5b3V0PlxcclxcblxcdFxcdFxcdFxcdDxMYWJlbCAqbmdJZj1cXFwiaXNMb2dnaW5nSW5cXFwiIHRleHQ9XFxcIkZvcmdvdCB5b3VyIHBhc3N3b3JkP1xcXCIgY2xhc3M9XFxcImxvZ2luLWxhYmVsXFxcIlxcclxcblxcdFxcdFxcdFxcdFxcdCh0YXApPVxcXCJmb3Jnb3RQYXNzd29yZCgpXFxcIj48L0xhYmVsPlxcclxcblxcdFxcdFxcdDwvU3RhY2tMYXlvdXQ+XFxyXFxuXFx0XFx0XFx0PFN0YWNrTGF5b3V0IHJvdz0xPlxcclxcblxcdFxcdFxcdFxcdDxMYWJlbCBjbGFzcz1cXFwic2lnbi11cC1sYWJlbFxcXCIgKHRhcCk9XFxcInRvZ2dsZUZvcm0oKVxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PEZvcm1hdHRlZFN0cmluZz5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8U3BhbiBbdGV4dF09XFxcImlzTG9nZ2luZ0luID8gJ0RvbuKAmXQgaGF2ZSBhbiBhY2NvdW50PyAnIDogJ0JhY2sgdG8gTG9naW4nXFxcIj48L1NwYW4+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PFNwYW4gW3RleHRdPVxcXCJpc0xvZ2dpbmdJbiA/ICdTaWduIHVwJyA6ICcnXFxcIiBjbGFzcz1cXFwiYm9sZFxcXCI+PC9TcGFuPlxcclxcblxcdFxcdFxcdFxcdFxcdDwvRm9ybWF0dGVkU3RyaW5nPlxcclxcblxcdFxcdFxcdFxcdDwvTGFiZWw+XFxyXFxuXFx0XFx0XFx0PC9TdGFja0xheW91dD5cXHJcXG5cXHRcXHQ8L0dyaWRMYXlvdXQ+XFxyXFxuXFx0PC9GbGV4Ym94TGF5b3V0PlxcclxcbjwvU2Nyb2xsVmlldz5cXHJcXG48QWN0aXZpdHlJbmRpY2F0b3IgI2FjdGl2aXR5SW5kaWNhdG9yIGJ1c3k9XFxcInRydWVcXFwiIHdpZHRoPVxcXCI0MFxcXCIgaGVpZ2h0PVxcXCI0MFxcXCIgY2xhc3M9XFxcImFjdGl2aXR5LWluZGljYXRvclxcXCI+XFxyXFxuPC9BY3Rpdml0eUluZGljYXRvcj5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQsIE5nWm9uZSwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBhbGVydCwgcHJvbXB0IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9nc1wiO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlJztcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCAqIGFzIGZpcmViYXNlIGZyb20gJ25hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2UnO1xyXG5pbXBvcnQgeyBtZXNzYWdpbmcsIE1lc3NhZ2UgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZS9tZXNzYWdpbmdcIjtcclxuaW1wb3J0IHsgTG9naW5jaGVja1NlcnZpY2UgfSBmcm9tICcuLi9sb2dpbmNoZWNrLnNlcnZpY2UudG5zJztcclxuaW1wb3J0IHsgQWN0aXZpdHlJbmRpY2F0b3IgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2FjdGl2aXR5LWluZGljYXRvcic7XHJcbmltcG9ydCB7IFRyYW5zZmVyU2VydmljZSB9IGZyb20gJy4uL2RhdGF0cmFuc2Zlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTW9kYWxEaWFsb2dTZXJ2aWNlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2RpcmVjdGl2ZXMvZGlhbG9nc1wiO1xyXG5pbXBvcnQgeyBGb3JnZXRGb3JtQ29tcG9uZW50IH0gZnJvbSAnLi4vZm9yZ2V0LWZvcm0vZm9yZ2V0LWZvcm0uY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLXdlbGNvbWUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi93ZWxjb21lLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi93ZWxjb21lLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFdlbGNvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIGlzTG9nZ2luZ0luID0gdHJ1ZTtcclxuICBlbWFpbDtcclxuICBwYXNzd29yZDtcclxuICBjb25maXJtUGFzc3dvcmQ7XHJcbiAgZmlyc3ROYW1lO1xyXG4gIGxhc3ROYW1lO1xyXG4gIGRldmljZVRva2VuO1xyXG4gIGZpcmViYXNlQ29uZmlnID0ge1xyXG4gICAgYXBpS2V5OiBcIkFJemFTeUJHdWlZcE0xMzhRNmF5cURNUlVWV0pwMUNFOVdCMDlOd1wiLFxyXG4gICAgYXV0aERvbWFpbjogXCJjb2xsZWdlcG9vbC0xNTUyNzQ5MTE4NjE3LmZpcmViYXNlYXBwLmNvbVwiLFxyXG4gICAgZGF0YWJhc2VVUkw6IFwiaHR0cHM6Ly9jb2xsZWdlcG9vbC0xNTUyNzQ5MTE4NjE3LmZpcmViYXNlaW8uY29tXCIsXHJcbiAgICBwcm9qZWN0SWQ6IFwiY29sbGVnZXBvb2wtMTU1Mjc0OTExODYxN1wiLFxyXG4gICAgc3RvcmFnZUJ1Y2tldDogXCJnczovL2NvbGxlZ2Vwb29sLTE1NTI3NDkxMTg2MTcuYXBwc3BvdC5jb21cIixcclxuICAgIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjM3NTI2MzY4MDE4M1wiLFxyXG4gICAgYXBwSWQ6IFwiMTozNzUyNjM2ODAxODM6d2ViOmYyYWYzZjI4MzU2MzhkN2NcIixcclxuICB9O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2U6IFBhZ2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zLCBwcml2YXRlIGxvZ2luY2hlY2tTZXJ2aWNlOiBMb2dpbmNoZWNrU2VydmljZSwgcHJpdmF0ZSB0cmFuc2ZlclNlcnZpY2U6IFRyYW5zZmVyU2VydmljZSxcclxuICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsIHByaXZhdGUgbW9kYWw6IE1vZGFsRGlhbG9nU2VydmljZSwgcHJpdmF0ZSB2Y1JlZjogVmlld0NvbnRhaW5lclJlZikgeyB9XHJcblxyXG4gIEBWaWV3Q2hpbGQoXCJlbVwiLCB7IHN0YXRpYzogdHJ1ZSB9KSBlbTogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKFwicHdcIiwgeyBzdGF0aWM6IHRydWUgfSkgcHc6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZChcImNwd1wiLCB7IHN0YXRpYzogdHJ1ZSB9KSBjcHc6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZChcImZuXCIsIHsgc3RhdGljOiB0cnVlIH0pIGZuOiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoXCJsblwiLCB7IHN0YXRpYzogdHJ1ZSB9KSBsbjogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKFwid2VsY29tZUNvbnRhaW5lclwiLCB7IHN0YXRpYzogdHJ1ZSB9KSB3YzogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKFwiYWN0aXZpdHlJbmRpY2F0b3JcIiwgeyBzdGF0aWM6IHRydWUgfSkgYWk6IEVsZW1lbnRSZWY7XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5yZWdpc3Rlck5vdGlmaWNhdGlvbnMoKTtcclxuICAgIHRoaXMuY3JlYXRlVmlld3MoKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGNyZWF0ZVZpZXdzKCkge1xyXG4gICAgYXdhaXQgZmlyZWJhc2UuaW5pdCh0aGlzLmZpcmViYXNlQ29uZmlnKS50aGVuKFxyXG4gICAgICAoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJmaXJlYmFzZS5pbml0IGRvbmVcIik7XHJcbiAgICAgIH0sXHJcbiAgICAgIGVycm9yID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgZmlyZWJhc2UuaW5pdCBlcnJvcjogJHtlcnJvcn1gKTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuICAgIGF3YWl0IGZpcmViYXNlLmFkZE9uTWVzc2FnZVJlY2VpdmVkQ2FsbGJhY2soYXN5bmMgKG1lc3NhZ2U6IGFueSkgPT4ge1xyXG4gICAgICBpZihtZXNzYWdlLnR5cGUgPT09IFwiTmV3IE1lc3NhZ2VcIikge1xyXG4gICAgICAgIHRoaXMudHJhbnNmZXJTZXJ2aWNlLnNldERhdGEobWVzc2FnZS5kYXRhLmNoYXRJZCk7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHt0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ2NoYXQnXSwge2NsZWFySGlzdG9yeTogdHJ1ZX0pfSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIGlmICh0aGlzLmxvZ2luY2hlY2tTZXJ2aWNlLmdldFVzZXJGcm9tTG9jYWxTdG9yYWdlKCkgIT0gbnVsbClcclxuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWyduYXZpZ2F0aW9uJ10sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xyXG4gICAgZWxzZSB7XHJcbiAgICAgIHZhciBhY3Rpdml0eUluZGljYXRvciA9IDxBY3Rpdml0eUluZGljYXRvcj50aGlzLmFpLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICAgIGFjdGl2aXR5SW5kaWNhdG9yLmJ1c3kgPSBmYWxzZTtcclxuICAgICAgdGhpcy53Yy5uYXRpdmVFbGVtZW50LnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XHJcbiAgICB9XHJcbiAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHRvZ2dsZUZvcm0oKSB7XHJcbiAgICB0aGlzLmlzTG9nZ2luZ0luID0gIXRoaXMuaXNMb2dnaW5nSW47XHJcbiAgfVxyXG5cclxuICBzdWJtaXQoKSB7XHJcbiAgICBpZiAoIXRoaXMuZW1haWwgfHwgIXRoaXMucGFzc3dvcmQpIHtcclxuICAgICAgdGhpcy5hbGVydChcIlBsZWFzZSBwcm92aWRlIGJvdGggYW4gZW1haWwgYWRkcmVzcyBhbmQgcGFzc3dvcmRcIik7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5pc0xvZ2dpbmdJbikge1xyXG4gICAgICB0aGlzLmxvZ2luKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnJlZ2lzdGVyKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBsb2dpbigpIHtcclxuICAgIHZhciBjcmVkZW50aWFsczogZmlyZWJhc2UuTG9naW5PcHRpb25zID0ge1xyXG4gICAgICBwYXNzd29yZE9wdGlvbnM6IHtcclxuICAgICAgICBlbWFpbDogdGhpcy5lbWFpbCxcclxuICAgICAgICBwYXNzd29yZDogdGhpcy5wYXNzd29yZCxcclxuICAgICAgfSxcclxuICAgICAgdHlwZTogZmlyZWJhc2UuTG9naW5UeXBlLlBBU1NXT1JEXHJcbiAgICB9XHJcbiAgICBmaXJlYmFzZS5sb2dpbihjcmVkZW50aWFscykudGhlbigocmVzKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiRW1haWwgVmVyaWZpZWQgU3RhdHVzXCIsIHJlcy5lbWFpbFZlcmlmaWVkKVxyXG4gICAgICBpZiAocmVzLmVtYWlsVmVyaWZpZWQpIHtcclxuICAgICAgICB0aGlzLmxvZ2luY2hlY2tTZXJ2aWNlLmxvZ2luVXNlcihyZXMudWlkKVxyXG4gICAgICAgIGZpcmViYXNlLmZpcmVzdG9yZS5jb2xsZWN0aW9uKCd1c2VycycpLmRvYyhyZXMudWlkKS5nZXQoKS50aGVuKGRvYyA9PiB7XHJcbiAgICAgICAgICBpZiAoZG9jLmRhdGEoKS5wYXltZW50X2lkID09IG51bGwpXHJcbiAgICAgICAgICAgIHRoaXMubG9naW5jaGVja1NlcnZpY2UuYWRkVXNlclRvQnJhaW50cmVlKHJlcy5kaXNwbGF5TmFtZSwgcmVzLmRpc3BsYXlOYW1lLCByZXMuZW1haWwpXHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLnVwZGF0ZVRva2VucyhyZXMudWlkKTtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ25hdmlnYXRpb24nXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZXtcclxuICAgICAgICB0aGlzLmFsZXJ0KFwiWW91ciBlbWFpbCBoYXMgbm90IGJlZW4gdmVyaWZpZWQgeWV0LiBQbGVhc2UgY2hlY2sgeW91ciBlbWFpbCBmb3IgYSB2ZXJpZmljYXRpb24gbGluay5cIilcclxuICAgICAgfVxyXG4gICAgfSkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICB0aGlzLmFsZXJ0KFwiV2UgY291bGQgbm90IGZpbmQgYW4gYWNjb3VudCBtYXRjaGluZyB5b3VyIGVtYWlsIG9yIHBhc3N3b3JkLlwiKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyKCkge1xyXG4gICAgaWYgKHRoaXMucGFzc3dvcmQgIT0gdGhpcy5jb25maXJtUGFzc3dvcmQpIHtcclxuICAgICAgdGhpcy5hbGVydChcIllvdXIgcGFzc3dvcmRzIGRvIG5vdCBtYXRjaFwiKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgZmlyZWJhc2UuY3JlYXRlVXNlcih7XHJcbiAgICAgIGVtYWlsOiB0aGlzLmVtYWlsLFxyXG4gICAgICBwYXNzd29yZDogdGhpcy5wYXNzd29yZCxcclxuICAgIH0pLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICB0aGlzLmxvZ2luY2hlY2tTZXJ2aWNlLmFkZFVzZXJUb0ZpcmVzdG9yZShyZXMudWlkLCBudWxsLCBudWxsLCByZXMuZW1haWwsIHRoaXMuZmlyc3ROYW1lLCB0aGlzLmxhc3ROYW1lLCBudWxsLCBudWxsLCAwLCAwLCAnfi9pbWcvc2FtcGxlX3Byb2ZpbGUucG5nJywgdGhpcy5kZXZpY2VUb2tlbilcclxuICAgICAgZmlyZWJhc2UudXBkYXRlUHJvZmlsZSh7IGRpc3BsYXlOYW1lOiB0aGlzLmZpcnN0TmFtZSArICcgJyArIHRoaXMubGFzdE5hbWUgfSkudGhlbigpO1xyXG4gICAgICAvLyB0aGlzLmxvZ2luY2hlY2tTZXJ2aWNlLmxvZ2luVXNlcihyZXMudWlkKVxyXG4gICAgICB0aGlzLmxvZ2luY2hlY2tTZXJ2aWNlLmFkZFVzZXJUb0JyYWludHJlZSgndGVzdCcsICd0ZXN0IHVzZXInLCByZXMuZW1haWwpXHJcbiAgICAgIGZpcmViYXNlLnNlbmRFbWFpbFZlcmlmaWNhdGlvbigpLnRoZW4oXHJcbiAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJFbWFpbCB2ZXJpZmljYXRpb24gc2VudFwiKTtcclxuICAgICAgICAgIHRoaXMuYWxlcnQoXCJBbiBlbWFpbCB2ZXJpZmljYXRpb24gbGluayBoYXMgYmVlbiBzZW50LiBQbGVhc2UgY2hlY2sgeW91ciBlbWFpbCBmb3IgdGhlIGxpbmsuXCIpXHJcbiAgICAgICAgICB0aGlzLnRvZ2dsZUZvcm0oKTtcclxuICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciBzZW5kaW5nIGVtYWlsIHZlcmlmaWNhdGlvZG46IFwiICsgZXJyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH0pLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgaWYgKGVyciA9PSAnQ3JlYXRpbmcgYSB1c2VyIGZhaWxlZC4gY29tLmdvb2dsZS5maXJlYmFzZS5hdXRoLkZpcmViYXNlQXV0aFVzZXJDb2xsaXNpb25FeGNlcHRpb246IFRoZSBlbWFpbCBhZGRyZXNzIGlzIGFscmVhZHkgaW4gdXNlIGJ5IGFub3RoZXIgYWNjb3VudC4nKVxyXG4gICAgICAgIHRoaXMuYWxlcnQoJ1RoZXJlIGlzIGFscmVhZHkgYW4gYWNjb3VudCBhc3NvY2lhdGVkIHdpdGggdGhhdCBlbWFpbCcpXHJcbiAgICAgIGVsc2UgaWYgKGVyciA9PSAnQ3JlYXRpbmcgYSB1c2VyIGZhaWxlZC4gUGFzc3dvcmQgc2hvdWxkIGJlIGF0IGxlYXN0IDYgY2hhcmFjdGVycycpXHJcbiAgICAgICAgdGhpcy5hbGVydCgnUGFzc3dvcmQgbXVzdCBiZSBhdCBsZWFzdCA2IGNoYXJhY3RlcnMnKVxyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgZm9yZ290UGFzc3dvcmQoKSB7XHJcblxyXG4gICAgbGV0IG9wdGlvbnMgPSB7XHJcbiAgICAgIGNvbnRleHQ6IHt9LFxyXG4gICAgICBmdWxsc2NyZWVuOiB0cnVlLFxyXG4gICAgICB2aWV3Q29udGFpbmVyUmVmOiB0aGlzLnZjUmVmXHJcbiAgICAgIC8vIGFuaW1hdGVkOiB0cnVlLFxyXG4gICAgICAvLyB0cmFuc2l0aW9uOiB7IG5hbWU6IFwic2xpZGVUb3BcIiB9XHJcbiAgfTtcclxuICAgIHRoaXMubW9kYWwuc2hvd01vZGFsKEZvcmdldEZvcm1Db21wb25lbnQsIG9wdGlvbnMpLnRoZW4ocmVzID0+IHtcclxuICAgICAgaWYocmVzID09ICd1cGRhdGUnKSB7XHJcbiAgICAgICAgLy8gdGhpcy51cGRhdGVMaXN0VmlldygpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyTm90aWZpY2F0aW9ucygpIHtcclxuICAgIG1lc3NhZ2luZy5yZWdpc3RlckZvclB1c2hOb3RpZmljYXRpb25zKHtcclxuICAgICAgb25QdXNoVG9rZW5SZWNlaXZlZENhbGxiYWNrOiAodG9rZW46IHN0cmluZyk6IHZvaWQgPT4ge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiRmlyZWJhc2UgcGx1Z2luIHJlY2VpdmVkIGEgcHVzaCB0b2tlbjogXCIgKyB0b2tlbik7XHJcbiAgICAgICAgdGhpcy5kZXZpY2VUb2tlbiA9IHRva2VuO1xyXG4gICAgICB9LFxyXG5cclxuICAgICAgb25NZXNzYWdlUmVjZWl2ZWRDYWxsYmFjazogKG1lc3NhZ2U6IE1lc3NhZ2UpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlB1c2ggbWVzc2FnZSByZWNlaXZlZDogXCIgKyBtZXNzYWdlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIk1lc3NhZ2UgZGF0YTogXCIgKyBtZXNzYWdlLmRhdGEpO1xyXG4gICAgICB9LFxyXG5cclxuICAgICAgLy8gV2hldGhlciB5b3Ugd2FudCB0aGlzIHBsdWdpbiB0byBhdXRvbWF0aWNhbGx5IGRpc3BsYXkgdGhlIG5vdGlmaWNhdGlvbnMgb3IganVzdCBub3RpZnkgdGhlIGNhbGxiYWNrLiBDdXJyZW50bHkgdXNlZCBvbiBpT1Mgb25seS4gRGVmYXVsdCB0cnVlLlxyXG4gICAgICBzaG93Tm90aWZpY2F0aW9uczogdHJ1ZSxcclxuXHJcbiAgICAgIC8vIFdoZXRoZXIgeW91IHdhbnQgdGhpcyBwbHVnaW4gdG8gYWx3YXlzIGhhbmRsZSB0aGUgbm90aWZpY2F0aW9ucyB3aGVuIHRoZSBhcHAgaXMgaW4gZm9yZWdyb3VuZC4gQ3VycmVudGx5IHVzZWQgb24gaU9TIG9ubHkuIERlZmF1bHQgZmFsc2UuXHJcbiAgICAgIHNob3dOb3RpZmljYXRpb25zV2hlbkluRm9yZWdyb3VuZDogZmFsc2VcclxuICAgIH0pLnRoZW4oKCkgPT4gY29uc29sZS5sb2coXCJSZWdpc3RlcmVkIGZvciBwdXNoXCIpKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVRva2Vucyh1aWQpIHtcclxuICAgIGNvbnN0IHVzZXJEb2N1bWVudCA9IGZpcmViYXNlLmZpcmVzdG9yZS5jb2xsZWN0aW9uKCd1c2VycycpLmRvYyh1aWQpO1xyXG4gICAgdXNlckRvY3VtZW50LmdldCgpLnRoZW4oYXN5bmMgKGRvYykgPT4ge1xyXG4gICAgICBsZXQgdG9rZW5zID0gZG9jLmRhdGEoKS50b2tlbnM7XHJcbiAgICAgIGlmICh0b2tlbnMpIHtcclxuICAgICAgICB0b2tlbnMucHVzaCh0aGlzLmRldmljZVRva2VuKTtcclxuICAgICAgICBsZXQgdXBkYXRlZFRva2VucyA9IEFycmF5LmZyb20obmV3IFNldCh0b2tlbnMpKTtcclxuICAgICAgICB1c2VyRG9jdW1lbnQudXBkYXRlKHtcclxuICAgICAgICAgIHRva2VuczogdXBkYXRlZFRva2Vuc1xyXG4gICAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIHVzZXJEb2N1bWVudC51cGRhdGUoe1xyXG4gICAgICAgICAgdG9rZW5zOiBbdGhpcy5kZXZpY2VUb2tlbl1cclxuICAgICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBjaGF0UHJvbWlzZSA9IGF3YWl0IHRoaXMudXBkYXRlQ2hhdFRva2Vucyhkb2MuZGF0YSgpLmNoYXRzKTtcclxuICAgIH0pLmNhdGNoKChlcnIpID0+IHsgY29uc29sZS5sb2coZXJyKSB9KVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgdXBkYXRlQ2hhdFRva2VucyhjaGF0cykge1xyXG4gICAgbGV0IGNoYXRDb2xsZWN0aW9uID0gZmlyZWJhc2UuZmlyZXN0b3JlLmNvbGxlY3Rpb24oJ2NoYXRzJyk7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoYXRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGNoYXRQcm9taXNlID0gYXdhaXQgY2hhdENvbGxlY3Rpb24uZG9jKGNoYXRzW2ldKS5nZXQoKS50aGVuKGFzeW5jIChkb2MpID0+IHtcclxuICAgICAgICBjb25zdCB0b2tlbnMgPSBkb2MuZGF0YSgpLnRva2VucztcclxuICAgICAgICB0b2tlbnMucHVzaCh0aGlzLmRldmljZVRva2VuKTtcclxuICAgICAgICBjb25zdCBuZXdUb2tlbnMgPSBBcnJheS5mcm9tKG5ldyBTZXQodG9rZW5zKSk7XHJcbiAgICAgICAgY29uc3QgdXBkYXRlUHJvbWlzZSA9IGF3YWl0IGNoYXRDb2xsZWN0aW9uLmRvYyhjaGF0c1tpXSkudXBkYXRlKHsgdG9rZW5zOiBuZXdUb2tlbnMgfSk7XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmb2N1c0VtYWlsKCkge1xyXG4gICAgdGhpcy5lbS5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XHJcbiAgfVxyXG5cclxuICBmb2N1c0xhc3ROYW1lKCkge1xyXG4gICAgdGhpcy5sbi5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XHJcbiAgfVxyXG5cclxuICBmb2N1c1Bhc3N3b3JkKCkge1xyXG4gICAgdGhpcy5wdy5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XHJcbiAgfVxyXG5cclxuICBmb2N1c0NvbmZpcm1QYXNzd29yZCgpIHtcclxuICAgIGlmICghdGhpcy5pc0xvZ2dpbmdJbiAmJiB0aGlzLmNwdykge1xyXG4gICAgICB0aGlzLmNwdy5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhbGVydChtZXNzYWdlOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiBhbGVydCh7XHJcbiAgICAgIHRpdGxlOiBcIkNvbGxlZ2VQb29sXCIsXHJcbiAgICAgIG9rQnV0dG9uVGV4dDogXCJDbG9zZVwiLFxyXG4gICAgICBtZXNzYWdlOiBtZXNzYWdlXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGZiTG9naW4oKSB7XHJcbiAgICB0aGlzLndjLm5hdGl2ZUVsZW1lbnQuc3R5bGUudmlzaWJpbGl0eSA9ICdjb2xsYXBzZSc7XHJcbiAgICB2YXIgYWN0aXZpdHlJbmRpY2F0b3IgPSA8QWN0aXZpdHlJbmRpY2F0b3I+dGhpcy5haS5uYXRpdmVFbGVtZW50O1xyXG4gICAgYWN0aXZpdHlJbmRpY2F0b3IuYnVzeSA9IHRydWU7XHJcbiAgICBmaXJlYmFzZS5sb2dpbih7XHJcbiAgICAgIHR5cGU6IGZpcmViYXNlLkxvZ2luVHlwZS5GQUNFQk9PSyxcclxuICAgICAgLy8gT3B0aW9uYWxcclxuICAgICAgZmFjZWJvb2tPcHRpb25zOiB7XHJcbiAgICAgICAgLy8gZGVmYXVsdHMgdG8gWydwdWJsaWNfcHJvZmlsZScsICdlbWFpbCddXHJcbiAgICAgICAgc2NvcGVzOiBbJ3B1YmxpY19wcm9maWxlJywgJ2VtYWlsJywgJ3VzZXJfYmlydGhkYXknLCAndXNlcl9nZW5kZXInXSAvLyBub3RlOiB0aGlzIHByb3BlcnR5IHdhcyByZW5hbWVkIGZyb20gXCJzY29wZVwiIGluIDguNC4wXHJcbiAgICAgIH1cclxuICAgIH0pLnRoZW4oXHJcbiAgICAgIChyZXMpID0+IHtcclxuICAgICAgICBmaXJlYmFzZS5maXJlc3RvcmUuY29sbGVjdGlvbigndXNlcnMnKS5kb2MocmVzLnVpZCkuZ2V0KCkudGhlbihkb2MgPT4ge1xyXG4gICAgICAgICAgaWYgKGRvYy5leGlzdHMgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgdGhpcy5sb2dpbmNoZWNrU2VydmljZS5hZGRVc2VyVG9GaXJlc3RvcmUocmVzLnVpZCwgbnVsbCwgbnVsbCwgcmVzLmVtYWlsLCByZXMuYWRkaXRpb25hbFVzZXJJbmZvLnByb2ZpbGVbJ2ZpcnN0X25hbWUnXSwgcmVzLmFkZGl0aW9uYWxVc2VySW5mby5wcm9maWxlWydsYXN0X25hbWUnXSwgbnVsbCwgbnVsbCwgMCwgMCwgcmVzLnBob3RvVVJMLCB0aGlzLmRldmljZVRva2VuKTtcclxuICAgICAgICAgICAgdGhpcy5sb2dpbmNoZWNrU2VydmljZS5hZGRVc2VyVG9CcmFpbnRyZWUocmVzLmRpc3BsYXlOYW1lLCByZXMuZGlzcGxheU5hbWUsIHJlcy5lbWFpbClcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2UgaWYgKGRvYy5kYXRhKCkucGF5bWVudF9pZCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9naW5jaGVja1NlcnZpY2UuYWRkVXNlclRvQnJhaW50cmVlKHJlcy5kaXNwbGF5TmFtZSwgcmVzLmRpc3BsYXlOYW1lLCByZXMuZW1haWwpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVUb2tlbnMocmVzLnVpZCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLmxvZ2luY2hlY2tTZXJ2aWNlLmxvZ2luVXNlcihyZXMudWlkKVxyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnbmF2aWdhdGlvbiddLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcclxuICAgICAgfSxcclxuICAgICAgKGVycm9yTWVzc2FnZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yTWVzc2FnZSk7XHJcbiAgICAgICAgdGhpcy53Yy5uYXRpdmVFbGVtZW50LnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XHJcbiAgICAgIH1cclxuICAgICk7XHJcblxyXG4gIH1cclxuXHJcbn1cclxuIiwiLy8gdGhpcyBpbXBvcnQgc2hvdWxkIGJlIGZpcnN0IGluIG9yZGVyIHRvIGxvYWQgc29tZSByZXF1aXJlZCBzZXR0aW5ncyAobGlrZSBnbG9iYWxzIGFuZCByZWZsZWN0LW1ldGFkYXRhKVxyXG5pbXBvcnQgeyBwbGF0Zm9ybU5hdGl2ZVNjcmlwdER5bmFtaWMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9wbGF0Zm9ybSc7XHJcblxyXG5cclxuaW1wb3J0IHsgQXBwTW9kdWxlIH0gZnJvbSAnLi9hcHAvYXBwLm1vZHVsZSc7XHJcbmltcG9ydCB7cmVnaXN0ZXJFbGVtZW50fSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZWxlbWVudC1yZWdpc3RyeVwiO1xyXG5cclxucmVnaXN0ZXJFbGVtZW50KFwiUmlwcGxlXCIsICgpID0+IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcmlwcGxlXCIpLlJpcHBsZSk7XHJcbi8vIGltcG9ydCBBbXBsaWZ5IGZyb20gXCJAYXdzLWFtcGxpZnkvY29yZVwiO1xyXG4vLyByZXF1aXJlKCduYXRpdmVzY3JpcHQtbm9kZWlmeScpXHJcbi8vIGltcG9ydCBhd3Njb25maWcgZnJvbSAnLi9hd3MtZXhwb3J0cyc7XHJcblxyXG4vLyBBbXBsaWZ5LmNvbmZpZ3VyZShhd3Njb25maWcpO1xyXG5cclxuLy8gQSB0cmFkaXRpb25hbCBOYXRpdmVTY3JpcHQgYXBwbGljYXRpb24gc3RhcnRzIGJ5IGluaXRpYWxpemluZyBnbG9iYWwgb2JqZWN0cywgc2V0dGluZyB1cCBnbG9iYWwgQ1NTIHJ1bGVzLCBjcmVhdGluZywgYW5kIG5hdmlnYXRpbmcgdG8gdGhlIG1haW4gcGFnZS4gXHJcbi8vIEFuZ3VsYXIgYXBwbGljYXRpb25zIG5lZWQgdG8gdGFrZSBjYXJlIG9mIHRoZWlyIG93biBpbml0aWFsaXphdGlvbjogbW9kdWxlcywgY29tcG9uZW50cywgZGlyZWN0aXZlcywgcm91dGVzLCBESSBwcm92aWRlcnMuIFxyXG4vLyBBIE5hdGl2ZVNjcmlwdCBBbmd1bGFyIGFwcCBuZWVkcyB0byBtYWtlIGJvdGggcGFyYWRpZ21zIHdvcmsgdG9nZXRoZXIsIHNvIHdlIHByb3ZpZGUgYSB3cmFwcGVyIHBsYXRmb3JtIG9iamVjdCwgcGxhdGZvcm1OYXRpdmVTY3JpcHREeW5hbWljLCBcclxuLy8gdGhhdCBzZXRzIHVwIGEgTmF0aXZlU2NyaXB0IGFwcGxpY2F0aW9uIGFuZCBjYW4gYm9vdHN0cmFwIHRoZSBBbmd1bGFyIGZyYW1ld29yay5cclxucGxhdGZvcm1OYXRpdmVTY3JpcHREeW5hbWljKCkuYm9vdHN0cmFwTW9kdWxlKEFwcE1vZHVsZSk7XHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==