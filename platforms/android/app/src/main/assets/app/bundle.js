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

exports = module.exports = __webpack_require__("../node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
exports.i(__webpack_require__("../node_modules/css-loader/dist/cjs.js?!../node_modules/nativescript-theme-core/css/core.light.css"), "");

// Module
exports.push([module.i, "/*\r\nIn NativeScript, the app.css file is where you place CSS rules that\r\nyou would like to apply to your entire application. Check out\r\nhttp://docs.nativescript.org/ui/styling for a full list of the CSS\r\nselectors and properties you can use to style UI components.\r\n\r\n/*\r\nIn many cases you may want to use the NativeScript core theme instead\r\nof writing your own CSS rules. For a full list of class names in the theme\r\nrefer to http://docs.nativescript.org/ui/theme.\r\n*/\r\n\r\nLabel {\r\n\ttext-align: center;\r\n}", ""]);

;
    if (false) {}


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
/* harmony import */ var nativescript_image_cache_it_angular__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__("../node_modules/nativescript-image-cache-it/angular/index.js");
/* harmony import */ var nativescript_image_cache_it_angular__WEBPACK_IMPORTED_MODULE_59___default = /*#__PURE__*/__webpack_require__.n(nativescript_image_cache_it_angular__WEBPACK_IMPORTED_MODULE_59__);
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
Object(nativescript_angular_element_registry__WEBPACK_IMPORTED_MODULE_57__["registerElement"])('ImageZoom', function () { return __webpack_require__("../node_modules/nativescript-image-zoom/image-zoom.js").ImageZoom; });
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
                nativescript_masked_text_field_angular__WEBPACK_IMPORTED_MODULE_34__["MaskedTextFieldModule"],
                nativescript_image_cache_it_angular__WEBPACK_IMPORTED_MODULE_59__["TNSImageCacheItModule"]
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

module.exports = "/* Add mobile styles for the component here.  */\r\nLabel {\r\n\ttext-align: left;\r\n}\r\n\r\n.name-label {\r\n\tmargin-top: 16;\r\n\tmargin-left: 18;\r\n\tcolor: black;\r\n\tfont-weight: 700;\r\n\tfont-size: 17;\r\n}\r\n\r\n.info-label {\r\n\tmargin-top: 4;\r\n\tmargin-left: 18;\r\n\tmargin-bottom: 16;\r\n\tcolor: #696969;\r\n}\r\n\r\n.profile-picture {\r\n\theight: 60;\r\n\twidth: 60;\r\n\tborder-radius: 30;\r\n\tvertical-align: center;\r\n\tmargin-left: 16;\r\n\tmargin-top: 14;\r\n\tmargin-bottom: 14;\r\n}\r\n\r\n.message {\r\n\tborder-bottom-width: 1;\r\n\tborder-color: #f1f1f1;\r\n\tmargin-top: 50;\r\n\tmargin-bottom: 50;\r\n}\r\n\r\n.refresh {\r\n\tcolor: #ac00e6;\r\n}"

/***/ }),

/***/ "./app/chat-list/chat-list.component.html":
/***/ (function(module, exports) {

module.exports = "<Page.actionBar>\r\n    <ActionBar title=\"Messages\">\r\n    \t<NavigationButton text=\"Go Back\" android.systemIcon=\"ic_menu_back\" (tap)=\"onNavBtnTap()\"></NavigationButton>\r\n    </ActionBar>\r\n</Page.actionBar>\r\n\r\n<PullToRefresh (refresh)=\"refreshList($event)\" class=\"refresh\">\r\n\t<ListView [items]=\"messages\" (itemTap)=\"onItemTap($event)\" #listView id=\"listView\">\r\n\t    <ng-template let-item=\"item\" let-i=\"index\" let-odd=\"odd\" let-even=\"even\">\r\n\t        <StackLayout [class.odd]=\"odd\" [class.even]=\"even\" class=\"message\" orientation=\"horizontal\">\r\n\t        \t  \t<ImageCacheIt [src]=\"item.pfpSource\" class=\"profile-picture\" stretch=\"aspectFit\"></ImageCacheIt>\r\n\t        \t  \t<StackLayout>\r\n\t\t              \t<Label textWrap=\"true\" id=\"post-name\" class=\"name-label\" [text]=\"item.displayName\"></Label>\r\n\t\t              \t<Label textWrap=\"true\" id=\"post-info\" class=\"info-label\" [text]=\"item.message\"></Label>\r\n\t\t            </StackLayout>\r\n\t        </StackLayout>\r\n\t    </ng-template>\r\n\t</ListView>\r\n</PullToRefresh>"

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
                        if (lastMsg.imgSource !== "") {
                            lastMsg.message = "Sent a photo";
                        }
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

module.exports = "/* Add mobile styles for the component here.  */\r\nButton {\r\n    padding: 5;\r\n    margin: 5;\r\n    background-color: dodgerblue;\r\n    color: white;\r\n    height: 40;\r\n    border-radius: 5;\r\n}\r\n\r\n.chat-button {\r\n\tpadding-left: 5;\r\n\tpadding-right: 5;\r\n\tmargin: 5;\r\n\theight: 20;\r\n\twidth: 20;\r\n}\r\n\r\n.img-button {\r\n\tmargin: 5;\r\n\tmargin-left: 3;\r\n\tmargin-right: 7;\r\n\theight: 20;\r\n\twidth: 20;\r\n}\r\n\r\n.chat-text-field {\r\n    padding: 5; \r\n    /*background-color: white; */\r\n    /*border-radius: 4;*/\r\n    /*bottom-border-color: #696969;*/\r\n}\r\n\r\n.author-img {\r\n    margin: 0 5 5 5;\r\n    margin-bottom: 0;\r\n    width: 40;\r\n    height: 40;\r\n    border-radius: 20;\r\n    background-color: lightgray;\r\n}\r\n\r\n.img {\r\n\tmargin: 5;\r\n\tborder-radius: 10;\r\n\tbackground-color: lightgray;\r\n}\r\n\r\n.theirsImg {\r\n\tmargin: 5;\r\n\tmargin-left: 52;\r\n\tborder-radius: 10;\r\n\tbackground-color: lightgray;\r\n}\r\n\r\n.mine {\r\n    background-color: #ac00e6;\r\n    color: white;\r\n    padding: 8;\r\n    padding-left: 14;\r\n    padding-right: 14;\r\n    margin-right: 10;\r\n    border-radius: 15;\r\n    border-bottom-right-radius: 5;\r\n    border-bottom-left-radius: 15;\r\n    font-size: 16;\r\n    max-width: 60%;\r\n    text-align: left;\r\n    /*margin-bottom: 12;*/\r\n}\r\n\r\n.mineContinuation {\r\n\tmargin-bottom: 0;\r\n\tborder-bottom-right-radius: 15;\r\n}\r\n\r\n.mineContinuationGrid {\r\n\tfont-size: 14;\r\n    padding: 5;\r\n\tpadding-top: 0;\r\n\tpadding-bottom: 1;\r\n}\r\n\r\n.mineTime {\r\n\tmargin-right: 10;\r\n\tmargin-bottom: 5;\r\n}\r\n\r\n.theirsTime {\r\n\tmargin-left: 52;\r\n\tmargin-bottom: 5;\r\n}\r\n\r\n.time {\r\n\tvisibility: collapse;\r\n\tdisplay: none;\r\n}\r\n\r\n.theirs {\r\n    background-color: #e0e0e0;\r\n    color: #333;\r\n    padding: 7;\r\n    padding-left: 14;\r\n    padding-right: 14;\r\n    border-radius: 15;\r\n    border-bottom-left-radius: 5;\r\n    border-bottom-right-radius: 15;\r\n    margin-right: 40;\r\n    font-size: 16;\r\n    max-width: 60%;\r\n    text-align: left;\r\n    /*margin-bottom: 12;*/\r\n}\r\n\r\n.theirsContinuation {\r\n\tmargin-left: 52;\r\n\tmargin-bottom: 0;\r\n\tborder-bottom-left-radius: 15;\r\n}\r\n\r\n.theirsContinuationGrid {\r\n\tfont-size: 14;\r\n    padding: 5;\r\n\tpadding-top: 0;\r\n\tpadding-bottom: 1;\r\n}\r\n\r\n.grid {\r\n    font-size: 14;\r\n    padding: 5;\r\n    padding-top: 0;\r\n    padding-bottom: 8;\r\n}\r\n\r\n.chat-box-layout {\r\n\tborder-color: #f1f1f1;\r\n\tborder-top-width: 1;\r\n}\r\n\r\n.activity-indicator {\r\n  color: #ac00e6;\r\n}"

/***/ }),

/***/ "./app/chat/chat.component.html":
/***/ (function(module, exports) {

module.exports = "<Page.actionBar>\r\n    <ActionBar title=\"{{ chatName }}\" android:horizontalAlignment=\"center\" ios:horizontalAlignment=\"center\">\r\n    \t<NavigationButton text=\"Go Back\" android.systemIcon=\"ic_menu_back\" (tap)=\"onNavBtnTap()\"></NavigationButton>\r\n\t    <ActionItem (tap)=\"onLeave()\"\r\n\t      ios.systemIcon=\"9\" ios.position=\"right\"\r\n\t      text=\"Leave chat\" android.position=\"popup\"></ActionItem>\r\n    </ActionBar>\r\n</Page.actionBar>\r\n\r\n<GridLayout rows=\"*, auto\" #chatContainer>\r\n    <ListView margin-bottom=\"50\" padding=\"5\" #messageList [items]=\"messages\" separatorColor=\"transparent\" (itemLoading)=\"loadMoreData($event)\" (setupItemView)=\"setupItemView($event)\" row=\"0\">\r\n        <ng-template let-item=\"item\" let-i=\"index\" let-mine=\"mine\" let-theirs=\"theirs\" let-mineContinuation=\"mineContinuation\" let-theirsContinuation=\"theirsContinuation\" let-mineContinuationGrid=\"mineContinuationGrid\" let-theirsContinuationGrid=\"theirsContinuationGrid\" let-grid=\"grid\" let-mineTime=\"mineTime\" let-theirsTime=\"theirsTime\" let-time=\"time\" let-theirsImg=\"theirsImg\" let-img=\"img\">\r\n            <StackLayout width=\"80%\" [class.mineContinuationGrid]=\"mineContinuationGrid\" [class.theirsContinuationGrid]=\"theirsContinuationGrid\" [class.grid]=\"grid\">\r\n                <StackLayout orientation=\"horizontal\" [horizontalAlignment]=\"align(item)\">\r\n                    <ImageCacheIt [visibility]=\"item.visibility\" class=\"author-img\" stretch=\"aspectFill\" height=\"40\" width=\"40\" verticalAlignment=\"bottom\" [src]=\"item.chatMessage.pfpSource\" col=\"1\"></ImageCacheIt>\r\n                    <Label [visibility]=\"textVisibility(item)\" [text]='item.chatMessage.message' [class.mine]=\"mine\" [class.theirs]=\"theirs\" [class.mineContinuation]=\"mineContinuation\" [class.theirsContinuation]=\"theirsContinuation\" textWrap=\"true\" verticalAlignment=\"top\"></Label>\r\n                    <Image [visibility]=\"imgVisibility(item)\" [class.theirsImg]=\"theirsImg\" [class.img]=\"img\" stretch=\"none\" minWidth=\"200\" minHeight=\"200\" decodeWidth=\"200\" decodeHeight=\"200\" maxHeight=\"400\" verticalAlignment=\"bottom\" [src]=\"item.chatMessage.imgSource\" col=\"1\" (tap)=\"toViewImage(item.chatMessage.imgSource)\" loadMode=\"async\"></Image>\r\n                </StackLayout>\r\n                <Label [text]='item.formattedTime' [horizontalAlignment]=\"align(item)\" [class.mineTime]=\"mineTime\" [class.theirsTime]=\"theirsTime\" [class.time]=\"time\"></Label>\r\n            </StackLayout>\r\n        </ng-template>\r\n    </ListView>\r\n\r\n    <StackLayout #chatbox row=\"1\" class=\"chat-box-layout\">\r\n\t        <GridLayout columns=\"auto,*,auto\" style=\"padding: 10\">\r\n\t        \t<Image class=\"img-button\" row=\"0\" col=\"0\" src=\"~/img/img_icon_2.png\" (tap)=openImages()></Image>\r\n\t            <TextView #textfield height=\"auto\" maxHeight=\"100\" hint=\"Start a message\" class=\"chat-text-field\" row=\"0\" col=\"1\" autocorrect=\"true\" [(ngModel)]=\"message\" (tap)=\"onTextTap()\"></TextView>\r\n\t            <Image #btn class=\"chat-button\" row=\"0\" col=\"2\" src=\"~/img/send_message_icon_2.png\" (tap)=sendMessage()></Image>\r\n\t        </GridLayout>\r\n\r\n    </StackLayout>\r\n</GridLayout>\r\n\r\n<ActivityIndicator #activityIndicator busy=\"true\" width=\"40\" height=\"40\" class=\"activity-indicator\">\r\n</ActivityIndicator>"

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
        var chatContainer = this.cc.nativeElement;
        chatContainer.visibility = 'collapse';
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
            var messageDocument, docPromise, unsubscribe, activityIndicator, chatContainer;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        messageDocument = nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_2__["firestore"].collection('chats').doc(this.chatId);
                        return [4 /*yield*/, messageDocument.get().then(function (doc) { return __awaiter(_this, void 0, void 0, function () {
                                var data, i, chatName, i;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            data = doc.data();
                                            this.lastIndex = data.chats.length;
                                            this.messages.splice(0);
                                            this.allMessages.splice(0);
                                            i = 0;
                                            _a.label = 1;
                                        case 1:
                                            if (!(i < data.chats.length)) return [3 /*break*/, 6];
                                            if (!(data.chats[i].userId === this.userId)) return [3 /*break*/, 3];
                                            return [4 /*yield*/, this.updateContinuations(data, i, true, "collapse")];
                                        case 2:
                                            _a.sent();
                                            return [3 /*break*/, 5];
                                        case 3: return [4 /*yield*/, this.updateContinuations(data, i, false, "visible")];
                                        case 4:
                                            _a.sent();
                                            _a.label = 5;
                                        case 5:
                                            i++;
                                            return [3 /*break*/, 1];
                                        case 6:
                                            // this.list.scrollToIndex(data.chats.length - 1);
                                            if (data.users.length === 2) {
                                                if (data.users[0].uid === this.userId)
                                                    this.chatName = data.users[1].displayName;
                                                else {
                                                    this.chatName = data.users[0].displayName;
                                                }
                                            }
                                            else {
                                                chatName = 'You, ';
                                                for (i = 0; i < data.users.length; i++) {
                                                    if (data.users[i].id != this.userId) {
                                                        if (i === data.users.length - 1)
                                                            chatName += 'and ' + data.users[i].displayName;
                                                        else
                                                            chatName += data.users[i].displayName + ', ';
                                                    }
                                                }
                                                this.chatName = 'Group chat';
                                            }
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        docPromise = _a.sent();
                        unsubscribe = messageDocument.onSnapshot(function (doc) { return __awaiter(_this, void 0, void 0, function () {
                            var data, i;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        console.log('called');
                                        data = doc.data();
                                        i = this.lastIndex;
                                        _a.label = 1;
                                    case 1:
                                        if (!(i < data.chats.length)) return [3 /*break*/, 7];
                                        if (!(data.chats[i].userId === this.userId)) return [3 /*break*/, 3];
                                        return [4 /*yield*/, this.updateContinuations(data, i, true, "collapse")];
                                    case 2:
                                        _a.sent();
                                        this.list.scrollToIndex(this.messages.length - 1);
                                        return [3 /*break*/, 5];
                                    case 3: return [4 /*yield*/, this.updateContinuations(data, i, false, "visible")];
                                    case 4:
                                        _a.sent();
                                        _a.label = 5;
                                    case 5:
                                        this.numShown += 1;
                                        _a.label = 6;
                                    case 6:
                                        i++;
                                        return [3 /*break*/, 1];
                                    case 7:
                                        this.lastIndex = data.chats.length;
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        if (this.messages.length > this.numShown) {
                            this.messages.splice(0, this.messages.length - this.numShown);
                        }
                        activityIndicator = this.ai.nativeElement;
                        activityIndicator.busy = false;
                        chatContainer = this.cc.nativeElement;
                        chatContainer.visibility = 'visible';
                        this.list.scrollToIndex(this.messages.length - 1);
                        return [2 /*return*/];
                }
            });
        });
    };
    ChatComponent.prototype.updateContinuations = function (data, index, isMine, visibility) {
        return __awaiter(this, void 0, void 0, function () {
            var chatTime, dateSplit, timeSplit, formattedTime, hours, pfpPromise;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        chatTime = data.chats[index].time;
                        dateSplit = data.chats[index].date.split('/');
                        timeSplit = chatTime.split(':');
                        formattedTime = '';
                        if (timeSplit[1].length === 1) {
                            timeSplit[1] = '0' + timeSplit[1];
                        }
                        hours = parseInt(timeSplit[0]);
                        if (hours > 12) {
                            formattedTime = dateSplit[1] + '/' + dateSplit[2] + ', ' + (hours - 12) + ':' + timeSplit[1] + ' PM';
                        }
                        else {
                            if (hours === 0)
                                timeSplit[0] = '12';
                            formattedTime = dateSplit[1] + '/' + dateSplit[2] + ', ' + timeSplit[0] + ':' + timeSplit[1] + ' AM';
                        }
                        return [4 /*yield*/, nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_2__["firestore"].collection('users').doc(data.chats[index].userId).get().then(function (doc) {
                                data.chats[index].pfpSource = doc.data().profile_source;
                                //Push the message item
                                _this.messages.push(new ChatItem(data.chats[index], visibility, formattedTime, false, false));
                                _this.allMessages.push(new ChatItem(data.chats[index], visibility, formattedTime, false, false));
                                //Check for continuation messages and update items accordingly
                                var i = index - 1;
                                while (i >= 0 && data.chats[i].userId === data.chats[index].userId) {
                                    if (_this.isTimeOver(data.chats[i], data.chats[index]))
                                        return;
                                    if (i >= _this.messages.length) {
                                        var msg = _this.messages.getItem(_this.messages.length + i - data.chats.length);
                                        msg.visibility = 'collapse';
                                        if (isMine) {
                                            msg.mineContinuation = true;
                                        }
                                        else {
                                            msg.theirsContinuation = true;
                                        }
                                        _this.messages.setItem(_this.messages.length + i - data.chats.length, msg);
                                    }
                                    else {
                                        var msg = _this.messages.getItem(i);
                                        msg.visibility = 'collapse';
                                        if (isMine) {
                                            msg.mineContinuation = true;
                                        }
                                        else {
                                            msg.theirsContinuation = true;
                                        }
                                        _this.messages.setItem(i, msg);
                                    }
                                    _this.allMessages.setItem(i, msg);
                                    i = i - 1;
                                }
                            })
                            // this.list.scrollToIndex(this.messages.length - 1);
                        ];
                    case 1:
                        pfpPromise = _a.sent();
                        return [2 /*return*/];
                }
            });
        });
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
    ChatComponent.prototype.loadMoreData = function (args) {
        var _this = this;
        //On scroll to the top, load more chat messages
        setTimeout(function () {
            var listView = _this.lv.nativeElement;
            var num = _this.numShown;
            if (args.index === 0 && num < _this.allMessages.length) {
                for (var i = num; i < num + 10; i++) {
                    if (i < _this.allMessages.length) {
                        _this.messages.unshift(_this.allMessages.getItem(_this.allMessages.length - i - 1));
                        _this.numShown += 1;
                        listView.scrollToIndex(i - num);
                    }
                }
            }
        }, 500);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("messageList", { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ChatComponent.prototype, "lv", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("chatContainer", { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ChatComponent.prototype, "cc", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("activityIndicator", { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ChatComponent.prototype, "ai", void 0);
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

module.exports = "/*\r\nAdd your NativeScript specific styles here.\r\nTo learn more about styling in NativeScript see:\r\nhttps://docs.nativescript.org/angular/ui/styling\r\n*/\r\n\r\n.actionbar {\r\n\tfont-size: 22;\r\n\tfont-weight: 700;\r\n\ttext-align: left;\r\n\tcolor: black;\r\n}\r\n\r\nLabel {\r\n\ttext-align: left;\r\n}\r\n\r\n.name-label {\r\n\tmargin-top: 16;\r\n\tmargin-left: 18;\r\n\tcolor: black;\r\n\tfont-weight: 700;\r\n\tfont-size: 17;\r\n}\r\n\r\n.info-label {\r\n\tmargin-top: 4;\r\n\tmargin-left: 18;\r\n\tmargin-bottom: 16;\r\n\tcolor: black;\r\n}\r\n\r\n.post {\r\n\tborder-bottom-width: 1;\r\n\tborder-color: #f1f1f1;\r\n\tmargin-top: 150;\r\n\tmargin-bottom: 15;\r\n}\r\n\r\n.post:highlighted {\r\n\t/*background-color: #f1f1f1;*/\r\n}\r\n\r\n.posting-map {\r\n\tmargin-bottom: 16;\r\n\tborder-radius: 10;\r\n\theight: 220;\r\n\twidth: 340;\r\n}\r\n\r\n.profile-picture {\r\n\theight: 50;\r\n\twidth: 50;\r\n\tborder-radius: 25;\r\n\tvertical-align: top;\r\n\tmargin-left: 16;\r\n\tmargin-top: 20;\r\n}\r\n\r\n.refresh {\r\n\tcolor: #ac00e6;\r\n}"

/***/ }),

/***/ "./app/history/history.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <app-navigation></app-navigation> -->\r\n<PullToRefresh (refresh)=\"refreshList($event)\" class=\"refresh\">\r\n\t<ListView [items]=\"postings\" (itemTap)=\"onItemTap($event)\" #listView id=\"listView\">\r\n\t    <ng-template let-item=\"item\" let-i=\"index\" let-odd=\"odd\" let-even=\"even\">\r\n\t        <StackLayout [class.odd]=\"odd\" [class.even]=\"even\" class=\"post\">\r\n\t        \t  <StackLayout orientation=\"horizontal\">\r\n\t        \t  \t<ImageCacheIt [src]=\"item.profileSource\" class=\"profile-picture\" stretch=\"aspectFit\"></ImageCacheIt>\r\n\t        \t  \t<StackLayout>\r\n\t\t              \t<Label textWrap=\"true\" id=\"post-name\" class=\"name-label\" [text]=\"item.username\"></Label>\r\n\t\t              \t<Label textWrap=\"true\" id=\"post-info\" class=\"info-label\" [text]=\"item.info\"></Label>\r\n\t\t            </StackLayout>\r\n\t              </StackLayout>\r\n\t\t\t\t  <ImageCacheIt [src]=\"item.mapSource\" stretch=\"aspectFit\" class=\"posting-map\"></ImageCacheIt>\r\n\t        </StackLayout>\r\n\t    </ng-template>\r\n\t</ListView>\r\n</PullToRefresh>\r\n\r\n<!--\r\nOriginal Web template:\r\n\r\n<app-navigation></app-navigation>\r\n\r\n<div class=\"right-background\">\r\n\t<div class=\"user-card-right info\">\r\n\t\t<img src=\"src/img/sample_profile.jpg\" alt=\"Profile Photo\" id=\"profile_pic\">\r\n\t\t<div id=\"name_info\">\r\n\t\t\t<h3 id=\"username\">{{user.name}}</h3>\r\n\t\t\t<h3 id=\"user_university\">University of Virginia</h3>\r\n\t\t</div>\r\n\t\t<div class=\"userStats\">\r\n\t\t\t<span id=\"user_rides_given\" class=\"userData\">Rides Given: </span>\r\n\t\t\t<span id=\"num_rides_given\"></span>\r\n\t\t\t<span id=\"user_rides_received\" class=\"userData\">Rides Received: </span>\r\n\t\t\t<span id=\"num_rides_received\"></span>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<div id=\"history\" class=\"tabcontent\">\r\n\t<h3 align=\"center\">Your Rides</h3>\r\n\t<div id=\"bigfeed\" (window:resize)=\"onResize($event)\"></div>\r\n</div>\r\n-->"

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

module.exports = "/*\r\nAdd your NativeScript specific styles here.\r\nTo learn more about styling in NativeScript see:\r\nhttps://docs.nativescript.org/angular/ui/styling\r\n*/\r\n.refresh {\r\n\tcolor: #ac00e6;\r\n}\r\n\r\n.actionbar {\r\n\tfont-size: 22;\r\n\tfont-weight: 700;\r\n\ttext-align: left;\r\n\tcolor: black;\r\n}\r\n\r\n.add-btn-container {\r\n\t/*position: absolute;*/\r\n\t/*bottom: 0;*/\r\n\t/*right: 0;*/\r\n\tvertical-align: bottom;\r\n\tz-index: 1;\r\n}\r\n\r\n.fab-button {\r\n  height: 56;\r\n  width: 56;\r\n  margin: 15;\r\n  /*margin-bottom: 64;*/\r\n  background-color: #ac00e6;\r\n  /*float: right;*/\r\n  horizontal-align: right;\r\n  vertical-align: bottom;\r\n}\r\n\r\nLabel {\r\n\ttext-align: left;\r\n}\r\n\r\n.info-label {\r\n\tmargin-top: 4;\r\n\tmargin-left: 18;\r\n\tmargin-bottom: 16;\r\n\tcolor: black;\r\n\tfont-weight: 400;\r\n\tfont-size: 14;\r\n}\r\n.cap-label {\r\n\tmargin-top: 4;\r\n\tmargin-left: 18;\r\n\tmargin-bottom: 16;\r\n\tcolor: black;\r\n\tfont-weight: 400;\r\n\tfont-size: 14;\r\n\tmargin-right: 18;\r\n}\r\n\r\n.name-label {\r\n\tmargin-top: 16;\r\n\tmargin-left: 18;\r\n\tcolor: black;\r\n\tfont-weight: 700;\r\n\tfont-size: 17;\r\n}\r\n\r\n.price-label {\r\n\tmargin-top: 16;\r\n\tmargin-right: 18;\r\n\tcolor: green;\r\n\tfont-weight: 500;\r\n\tfont-size: 16;\r\n\tmargin-bottom: 5;\r\n}\r\n\r\n.post {\r\n\t/*border-bottom-width: 1;*/\r\n\tborder-color: #f1f1f1;\r\n}\r\n\r\n.post:highlighted {\r\n\t/*background-color: #f1f1f1;*/\r\n}\r\n\r\n.posting-map {\r\n\tmargin-bottom: 16;\r\n\tborder-radius: 10;\r\n\theight: 220;\r\n\twidth: 340;\r\n}\r\n\r\n.profile-picture {\r\n\theight: 50;\r\n\twidth: 50;\r\n\tborder-radius: 25;\r\n\tvertical-align: top;\r\n\tmargin-left: 16;\r\n\tmargin-top: 20;\r\n}\r\n\r\n.status-icon {\r\n\theight: 15;\r\n\twidth: 15;\r\n\t/* border-radius: 25; */\r\n\tvertical-align: top;\r\n\tmargin-top: 21;\r\n\tmargin-left: 7;\r\n\tbackground-color: white;\r\n}\r\n\r\n.activity-indicator {\r\n\tcolor: #ac00e6;\r\n}"

/***/ }),

/***/ "./app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <ActionBar title=\"Home\" class=\"actionbar\">\r\n\t<NavigationButton ios:visibility=\"collapsed\" icon=\"~/img/menu-icon.png\" (tap)=\"showSideDrawer()\" ></NavigationButton>\r\n<ActionItem android:visibility=\"collapsed\" icon=\"~/img/menu-icon.png\" ios.position=\"left\" (tap)=\"showSideDrawer()\" ></ActionItem>\r\n</ActionBar> -->\r\n\r\n<StackLayout class=\"add-btn-container\">\r\n\t<FAB (tap)=\"showModal()\" icon=\"res://ic_add_white_3x\" rippleColor=\"#f1f1f1\" class=\"fab-button\"></FAB>\r\n</StackLayout>\r\n\r\n<PullToRefresh (refresh)=\"refreshList($event)\" class=\"refresh\">\r\n\t<ListView [items]=\"postings\" (itemTap)=\"onItemTap($event)\" #listView id=\"listView\">\r\n\t\t<ng-template let-item=\"item\" let-i=\"index\" let-odd=\"odd\" let-even=\"even\">\r\n\t\t\t<StackLayout [class.odd]=\"odd\" [class.even]=\"even\" class=\"post\">\r\n\t\t\t\t<StackLayout orientation=\"horizontal\">\r\n\t\t\t\t\t<StackLayout>\r\n\t\t\t\t\t\t<ImageCacheIt [src]=\"item.profileSource\" class=\"profile-picture\" stretch=\"aspectFit\">\r\n\t\t\t\t\t\t</ImageCacheIt>\r\n\t\t\t\t\t\t<!-- <ImageCacheIt [src]=\"item.status\" class=\"status-icon\" stretch=\"aspectFill\"></ImageCacheIt> -->\r\n\t\t\t\t\t</StackLayout>\r\n\t\t\t\t\t<StackLayout>\r\n\t\t\t\t\t\t<GridLayout row=\"auto\" cols=\"*\">\r\n\t\t\t\t\t\t\t<StackLayout orientation=\"horizontal\">\r\n\t\t\t\t\t\t\t\t<Label textWrap=\"true\" row=0 id=\"post-name\" class=\"name-label\"\r\n\t\t\t\t\t\t\t\t\t[text]=\"item.username\"></Label>\r\n\t\t\t\t\t\t\t\t<ImageCacheIt [src]=\"item.status\" row=0 class=\"status-icon\" stretch=\"aspectFit\">\r\n\t\t\t\t\t\t\t\t</ImageCacheIt>\r\n\t\t\t\t\t\t\t</StackLayout>\r\n\t\t\t\t\t\t\t<Label textWrap=\"true\" row=0 horizontalAlignment=\"right\" class=\"price-label\"\r\n\t\t\t\t\t\t\t\t[text]=\"item.price\"></Label>\r\n\t\t\t\t\t\t</GridLayout>\r\n\t\t\t\t\t\t<GridLayout row=\"auto\" cols=\"*\">\r\n\t\t\t\t\t\t\t<Label textWrap=\"true\" row=\"0\" id=\"post-info\" class=\"info-label\" [text]=\"item.info\"></Label>\r\n\t\t\t\t\t\t\t<!-- <Label textWrap=\"true\" row=\"0\" id=\"post-info\" class=\"cap-label\" horizontalAlignment = \"right\" [text]=\"item.capacity\"></Label> -->\r\n\t\t\t\t\t\t</GridLayout>\r\n\t\t\t\t\t</StackLayout>\r\n\t\t\t\t</StackLayout>\r\n\t\t\t\t<ImageCacheIt [src]=\"item.mapSource\" stretch=\"aspectFit\" class=\"posting-map\"\r\n\t\t\t\t\t(tap)=\"toViewImage(item.mapSource)\"></ImageCacheIt>\r\n\t\t\t</StackLayout>\r\n\t\t</ng-template>\r\n\t</ListView>\r\n</PullToRefresh>\r\n<ActivityIndicator #activityIndicator busy=\"true\" width=\"40\" height=\"40\" class=\"activity-indicator\">\r\n</ActivityIndicator>"

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
    function PostItem(username, info, profileSource, mapSource, price, status, capacity) {
        this.username = username;
        this.info = info;
        this.profileSource = profileSource;
        this.mapSource = mapSource;
        this.price = price;
        this.status = status;
        this.capacity = capacity;
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
        // cache = new Cache();
        this.space = 1;
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
                _this.postings.push(new PostItem(posts[i].user, '', '', '~/img/gray_background.jpg', '', '', ''));
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
        var date = data.date.split(" ");
        date = date[1] + " " + date[2] + " " + date[3];
        var info_label = data.startAddress + " to " + data.endAddress + "\n" + date;
        var price;
        var type;
        var cap;
        // this.createPosting(this.p[i]._id, this.p[i].user, this.p[i].startadr, this.p[i].endadr, this.p[i].date, this.p[i].cost, this.p[i].capacity, this.p[i].comments);
        if (data.capacity != "-1") {
            // cap = "\nSeats: "+this.space+"/"+ data.capacity;
            info_label += ", " + this.space + "/" + data.capacity + " Seats Remaining";
            price = data.price;
            this.space++;
            type = '~/img/steering-wheel-2.png';
        }
        else {
            // info_label += "\nEnding At: " + data.endAddress + + "\nRiders: "+ data.capacity;
            // cap = "\nRiders: "+ "2";
            info_label += "," + " 2 " + "Riders";
            type = '~/img/passenger-2.png';
        }
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
                _this.postings.setItem(i, new PostItem(data.user, info_label, url, data.map_url, price, type, cap));
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
    HomeComponent.prototype.toViewImage = function (src) {
        this.transferService.setData(src);
        this.router.navigate(['view-image']);
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
        if (this.tabSelectedIndex === 0) {
            var listView = this.lv.nativeElement;
            listView.scrollToIndex(0);
        }
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
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('listView', { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], NavigationComponent.prototype, "lv", void 0);
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

module.exports = "/* Add mobile styles for the component here.  */\r\n.map-view {\r\n\theight: 100%;\r\n\twidth: 100%;\r\n\tvertical-align: bottom;\r\n}\r\n\r\n.profile-picture {\r\n\theight: 50;\r\n\twidth: 50;\r\n\tborder-radius: 25;\r\n\tvertical-align: top;\r\n\tmargin-left: 16;\r\n\tmargin-top: 20;\r\n}\r\n\r\n.name-label {\r\n\tmargin-top: 16;\r\n\tmargin-left: 18;\r\n\tcolor: black;\r\n\tfont-weight: 700;\r\n\tfont-size: 17;\r\n\ttext-align: left;\r\n}\r\n\r\n.info-label {\r\n\tmargin-top: 4;\r\n\tmargin-left: 18;\r\n\tmargin-bottom: 16;\r\n\tcolor: black;\r\n\ttext-align: left;\r\n}\r\n\r\n.label-container {\r\n\tvertical-align: middle;\r\n}\r\n\r\n.activity-indicator {\r\n\tcolor: #ac00e6;\r\n}"

/***/ }),

/***/ "./app/posting-info/posting-info.component.html":
/***/ (function(module, exports) {

module.exports = "<Page.actionBar>\r\n    <ActionBar title=\"Post\">\r\n    \t<NavigationButton text=\"Go Back\" android.systemIcon=\"ic_menu_back\" (tap)=\"onNavBtnTap()\"></NavigationButton>\r\n\t    <ActionItem (tap)=\"promptDelete()\"\r\n\t      ios.systemIcon=\"16\" ios.position=\"right\"\r\n\t      text=\"Delete\" android.position=\"popup\" #deleteItem></ActionItem>\r\n\t    <ActionItem (tap)=\"onReport()\"\r\n\t      ios.systemIcon=\"9\" ios.position=\"right\"\r\n\t      text=\"Report\" android.position=\"popup\"></ActionItem>\r\n    </ActionBar>\r\n</Page.actionBar>\r\n<GridLayout rows=\"2*,auto,10*\" #layout>\r\n\t<StackLayout orientation=\"horizontal\" row=\"0\" class=\"label-container\" #infoContainer>\r\n\t\t<ImageCacheIt src=\"{{ profileSource }}\" class=\"profile-picture\" stretch=\"aspectFit\"></ImageCacheIt>\r\n\t  \t<StackLayout>\r\n\t      \t<Label textWrap=\"true\" id=\"post-name\" class=\"name-label\" text=\"{{ username }}\"></Label>\r\n\t      \t<Label textWrap=\"true\" id=\"post-info\" class=\"info-label\" text=\"{{ info }}\"></Label>\r\n\t    </StackLayout>\r\n\t</StackLayout>\r\n\t<StackLayout class=\"btn-container\" #buttonContainer row=\"1\">\r\n\t\t<Button class=\"connect-btn\" (tap)=\"onConnectTap()\" text=\"{{ buttonText }}\"></Button>\r\n\t</StackLayout>\r\n\t<MapView (mapReady)=\"onMapReady($event)\" [latitude]=\"latitude\" [longitude]=\"longitude\" class=\"map-view\" row=\"2\" #mapView></MapView>\r\n</GridLayout>\r\n<ActivityIndicator #activityIndicator busy=\"true\" width=\"40\" height=\"40\" class=\"activity-indicator\"></ActivityIndicator>"

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

module.exports = "/*\r\nAdd your NativeScript specific styles here.\r\nTo learn more about styling in NativeScript see:\r\nhttps://docs.nativescript.org/angular/ui/styling\r\n*/\r\n\r\n#Header {\r\n    color:black;\r\n    font-size: 24;\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n}\r\n\r\n#listView {\r\n\tmargin-bottom: 20;\r\n}\r\n\r\n.update {\r\n    display: block;\r\n    color: #ac00e6;\r\n    border-width: 1;\r\n    border-color: #ac00e6;\r\n    border-radius: 5;\r\n    text-align: center;\r\n    float: center;\r\n    margin: auto; \r\n    font-weight: 700;\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n    margin-bottom: 15;\r\n    width: 200;\r\n    height: 40;\r\n}\r\n.update:highlighted {\r\n    background-color: #f9e6ff;\r\n}\r\n.payments {\r\n\tcolor: black;\r\n\tmargin-top: 12;\r\n\tmargin-bottom: 12;\r\n\tmargin-left: 18;\r\n    text-align: left;\r\n    font-size: 15;\r\n}\r\n.logout {\r\n\tcolor: #ac00e6;\r\n\tmargin-top: 12;\r\n\tmargin-bottom: 12;\r\n\tmargin-left: 18;\r\n\tfont-weight: 500;\r\n    text-align: left;\r\n    font-size: 15;\r\n}\r\n\r\n.btn-list-view {\r\n\tmargin-top: 36;\r\n\theight: 100;\r\n}\r\n\r\n.item-list-view {\r\n\theight: 275;\r\n}\r\n\r\n.profile-picture {\r\n\theight: 100;\r\n\twidth: 100;\r\n\tmargin-top: 10;\r\n\tmargin-bottom: 8;\r\n\t/*background-repeat: no-repeat;*/\r\n}\r\n\r\n.img-rounded {\r\n\tborder-radius: 50%;\r\n}\r\n\r\n.header-label {\r\n\tmargin-bottom: 5;\r\n\tfont-size: 15;\r\n\tcolor: #4285f4;\r\n}\r\n\r\n.bold {\r\n\tfont-weight: 500;\r\n}\r\n\r\n.activity-indicator {\r\n  color: #ac00e6;\r\n  margin: 25%;\r\n}\r\n\r\n.value-label {\r\n\tmargin-left: 18;\r\n\tmargin-bottom: 10;\r\n    color: black;\r\n    font-weight: 400;\r\n    font-size: 18;\r\n    text-align: left;\r\n}\r\n.title-label {\r\n\tmargin-top: 16;\r\n\tmargin-left: 18;\r\n\tcolor: #696969;\r\n    text-align: left;\r\n}\r\n\r\n.stack-layout{\r\n    height:100%\r\n}\r\n.activity-indicator{\r\n    height: 50%;\r\n}\r\nListView {\r\n    separator-color: transparent;\r\n}"

/***/ }),

/***/ "./app/settings/settings.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <app-navigation></app-navigation> -->\r\n<Stacklayout height=\"100%\">\r\n    <StackLayout #settingsContainer>\r\n      <!-- <Label id= \"Header\" text=\"Account Settings\" textWrap=\"true\"></Label> -->\r\n      <ImageCacheIt src=\"{{ profile }}\" stretch=\"aspectFit\" class=\"img-rounded profile-picture\" (tap)=\"uploadPfp()\"></ImageCacheIt>\r\n      <Label text=\"Change Photo\" class=\"header-label bold\" (tap)=\"uploadPfp()\"></Label>\r\n\r\n      <ListView [items]=\"fields\" #listView id=\"listView\" (itemTap)=\"showModal($event)\" class=\"item-list-view\">\r\n        <ng-template let-item=\"item\" let-i=\"index\" let-odd=\"odd\" let-even=\"even\">\r\n          <StackLayout class=\"stack-layout\">\r\n            <Label textWrap=\"true\" class=\"title-label\" [text]=\"item.label\"></Label>\r\n            <Label textWrap=\"true\" class=\"value-label\" [text]=\"item.value\"></Label>\r\n          </StackLayout>\r\n        </ng-template>\r\n      </ListView>\r\n      <!-- <RadDataForm tkExampleTitle tkToggleNavButton [source]=\"person\"></RadDataForm>   -->\r\n      <!-- <Button class=\"Update\"  text=\"Update Settings\"></Button> -->\r\n\r\n      <ListView [items]=\"buttons\" #listViewSecond (itemTap)=\"route($event)\" (setupItemView)=\"setupItemView($event)\" class=\"btn-list-view\">\r\n        <ng-template let-item=\"item\" let-i=\"index\" let-odd=\"odd\" let-even=\"even\" let-payments=\"payments\" let-logout=\"logout\">\r\n          <StackLayout class=\"stack-layout\">\r\n            <Label textWrap=\"true\" [text]=\"item\" [class.payments]=\"payments\" [class.logout]=\"logout\"></Label>\r\n          </StackLayout>\r\n        </ng-template>\r\n      </ListView>\r\n<!--       <StackLayout class=\"payments-container\" (tap)=\"toPayments()\">\r\n        <Label class=\"payments\" text=\"Payments\"></Label>\r\n      </StackLayout>\r\n      <StackLayout class=\"logout-container\" (tap)=\"logOut()\">\r\n        <Label class=\"logout\" text=\"Log out\"></Label>\r\n      </StackLayout> -->\r\n    </StackLayout>\r\n\r\n<ActivityIndicator #activityIndicator busy=\"true\" width=\"40\"  class=\"activity-indicator\">\r\n  </ActivityIndicator>\r\n</Stacklayout>"

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
            userDocument.update({
                first_name: this.value,
                last_name: this.secondValue
            });
            var postingsCollection = nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_3__["firestore"].collection('postings');
            var chatsCollection = nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_3__["firestore"].collection('chats');
            userDocument.get().then(function (doc) {
                var postIds = doc.data().posts;
                var chatIds = doc.data().chats;
                for (var i = 0; i < postIds.length; i++) {
                    postingsCollection.doc(postIds[i]).update({
                        user: _this.value + " " + _this.secondValue
                    });
                }
                for (var j = 0; j < chatIds.length; j++) {
                    chatsCollection.doc(chatIds[j]).get().then(function (doc) {
                        var users = doc.data().users;
                        for (var k = 0; k < users.length; k++) {
                            if (users[k].uid === _this.userId) {
                                users[k].displayName = _this.value + " " + _this.secondValue;
                            }
                        }
                        chatsCollection.doc(doc.id).update({
                            users: users
                        });
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

module.exports = "/* Add mobile styles for the component here.  */\r\n.img {\r\n\tbackground-color: black;\r\n}\r\n\r\n.activity-indicator {\r\n  color: #ac00e6;\r\n}"

/***/ }),

/***/ "./app/view-image/view-image.component.html":
/***/ (function(module, exports) {

module.exports = "<Page.actionBar>\r\n  <ActionBar title=\"\" backgroundColor=\"black\">\r\n  \t<NavigationButton text=\"Go Back\" android.systemIcon=\"ic_menu_back\" (tap)=\"onNavBtnTap()\"></NavigationButton>\r\n  </ActionBar>\r\n</Page.actionBar>\r\n<!-- <Image src=\"{{ imgSource }}\" class=\"img\"></Image> -->\r\n<ImageZoom src=\"{{ imgSource }}\" class=\"img\" (loaded)=\"onImageLoaded()\"></ImageZoom>\r\n\r\n<ActivityIndicator #activityIndicator busy=\"true\" width=\"40\"  class=\"activity-indicator\">\r\n</ActivityIndicator>"

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
    ViewImageComponent.prototype.onImageLoaded = function () {
        var activityIndicator = this.ai.nativeElement;
        activityIndicator.busy = false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("activityIndicator", { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ViewImageComponent.prototype, "ai", void 0);
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

module.exports = "/* Add mobile styles for the component here.  */\r\n.page {\r\n  align-items: center;\r\n  flex-direction: column;\r\n  visibility: collapse;\r\n}\r\n.form {\r\n  margin-left: 30;\r\n  margin-right: 30;\r\n  flex-grow: 2;\r\n  vertical-align: middle;\r\n  margin-top: 100;\r\n  margin-bottom: 50;\r\n}\r\n\r\n.logo {\r\n  /*margin-top: 15;*/\r\n  margin-bottom: 72;\r\n  height: 120;\r\n  font-weight: bold;\r\n}\r\n.header {\r\n  horizontal-align: center;\r\n  font-size: 25;\r\n  font-weight: 600;\r\n  margin-bottom: 70;\r\n  text-align: center;\r\n  color: #ac00e6;\r\n}\r\n\r\n.input-field {\r\n  margin-bottom: 25;\r\n}\r\n.input {\r\n  font-size: 18;\r\n  placeholder-color: #A8A8A8;\r\n}\r\n\r\n.btn-primary {\r\n  height: 50;\r\n  margin: 30 5 15 5;\r\n  background-color: #ac00e6;\r\n  border-radius: 5;\r\n  font-size: 20;\r\n  font-weight: 600;\r\n}\r\n\r\n.btn-fb {\r\n  height: 100;\r\n  margin: 0 5 15 5;\r\n  /*border-radius: 5;*/\r\n  font-size: 20;\r\n  font-weight: 600;\r\n}\r\n\r\n.login-label {\r\n  horizontal-align: center;\r\n  color: #A8A8A8;\r\n  font-size: 16;\r\n  /* margin-bottom: 20; */\r\n}\r\n.sign-up-label {\r\n  horizontal-align: center;\r\n  color: #A8A8A8;\r\n  font-size: 16;\r\n   margin-bottom: 20; \r\n}\r\n.bold {\r\n  color: #000000; \r\n}\r\n.activity-indicator {\r\n  color: #ac00e6;\r\n}\r\n\r\n/* @keyframes show {\r\n  from { opacity: 0; }\r\n  to { opacity: 1; }\r\n}\r\n\r\n.dialogOpen .form {\r\n  opacity: 0.15;\r\n}\r\n.dialogOpen .redirect {\r\n  opacity: 0.15;\r\n}\r\n\r\n.dialogOpen .dialog-wrapper {\r\n  visibility: visible;\r\n  animation-name: show;\r\n  animation-duration: 0.3s;\r\n  animation-fill-mode: forwards;\r\n}\r\n.dialog-wrapper {\r\n  visibility: collapse;\r\n  opacity: 0;\r\n  horizontal-align: center;\r\n  vertical-align: center;\r\n}\r\n\r\n.dialog {\r\n  border-width: 1px;\r\n  border-color: black;\r\n  background-color: white;\r\n  width: 70%;\r\n  margin: auto;\r\n  padding: 20; \r\n\r\n}\r\n.dialog Label {\r\n  margin: 0 15 15 15;\r\n  color: black;\r\n}\r\n.btn-close{\r\n  height: 50;\r\n  background-color: #696969;\r\n  border-radius: 5;\r\n  font-size: 18;\r\n  color: white;\r\n  font-weight: 400;\r\n}\r\n.btn-verify{\r\n  height: 50;\r\n  margin: 15 5 15 5;\r\n  background-color: #ac00e6;\r\n  color: white;\r\n  border-radius: 5;\r\n  font-size: 18;\r\n  font-weight: 400;\r\n} */"

/***/ }),

/***/ "./app/welcome/welcome.component.html":
/***/ (function(module, exports) {

module.exports = "<ScrollView>\r\n\t<GridLayout rows=\"*, auto\" #welcomeContainer visibility=\"collapse\">\r\n\t\t<!-- <GridLayout rows=\"630, auto\" [class.dialogOpen]=\"dialogOpen\"> -->\r\n\t\t<StackLayout class=\"form\" row=\"0\" height=\"100%\" #formLayout>\r\n\t\t\t<Image class=\"logo\" src=\"~/img/logo.png\"></Image>\r\n\t\t\t<!-- <Label class=\"header\" text=\"CollegePool\"></Label> -->\r\n\r\n\r\n\t\t\t<StackLayout *ngIf=\"!isLoggingIn\" class=\"input-field\">\r\n\t\t\t\t<TextField class=\"input\" hint=\"First name\" [(ngModel)]=\"firstName\" returnKeyType=\"next\" #fn>\r\n\t\t\t\t</TextField>\r\n\t\t\t\t<StackLayout class=\"hr-light\"></StackLayout>\r\n\t\t\t</StackLayout>\r\n\r\n\t\t\t<StackLayout *ngIf=\"!isLoggingIn\" class=\"input-field\">\r\n\t\t\t\t<TextField class=\"input\" hint=\"Last name\" [(ngModel)]=\"lastName\" returnKeyType=\"next\" #ln>\r\n\t\t\t\t</TextField>\r\n\t\t\t\t<StackLayout class=\"hr-light\"></StackLayout>\r\n\t\t\t</StackLayout>\r\n\r\n\t\t\t<StackLayout class=\"input-field\">\r\n\t\t\t\t<TextField class=\"input\" hint=\"Email\" keyboardType=\"email\" autocorrect=\"false\"\r\n\t\t\t\t\tautocapitalizationType=\"none\" [(ngModel)]=\"email\" returnKeyType=\"next\"\r\n\t\t\t\t\t(returnPress)=\"focusPassword()\" #em></TextField>\r\n\t\t\t\t<StackLayout class=\"hr-light\"></StackLayout>\r\n\t\t\t</StackLayout>\r\n\r\n\t\t\t<StackLayout class=\"input-field\">\r\n\t\t\t\t<TextField class=\"input\" hint=\"Password\" secure=\"true\" [(ngModel)]=\"password\"\r\n\t\t\t\t\t[returnKeyType]=\"isLoggingIn ? 'done' : 'next'\" (returnPress)=\"focusConfirmPassword()\" #pw>\r\n\t\t\t\t</TextField>\r\n\t\t\t\t<StackLayout class=\"hr-light\"></StackLayout>\r\n\t\t\t</StackLayout>\r\n\r\n\t\t\t<Button [text]=\"isLoggingIn ? 'Log In' : 'Sign Up'\" (tap)=\"submit()\"\r\n\t\t\t\tclass=\"btn btn-primary m-t-20\"></Button>\r\n\t\t\t<!-- <Button class=\"btn btn-primary\" text=\"Show Dialog\" (tap)=\"showDialog()\"></Button> -->\r\n\t\t\t<StackLayout>\r\n\t\t\t\t<FacebookLoginButton (tap)=\"fbLogin()\" class=\"btn-fb\"></FacebookLoginButton>\r\n\t\t\t</StackLayout>\r\n\t\t\t<Label *ngIf=\"isLoggingIn\" text=\"Forgot your password?\" class=\"login-label\"\r\n\t\t\t\t(tap)=\"forgotPassword()\"></Label>\r\n\t\t</StackLayout>\r\n\t\t<StackLayout row=\"1\" class=\"redirect\">\r\n\t\t\t<Label class=\"sign-up-label\" (tap)=\"toggleForm()\">\r\n\t\t\t\t<FormattedString>\r\n\t\t\t\t\t<Span [text]=\"isLoggingIn ? 'Don’t have an account? ' : 'Back to Login'\"></Span>\r\n\t\t\t\t\t<Span [text]=\"isLoggingIn ? 'Sign up' : ''\" class=\"bold\"></Span>\r\n\t\t\t\t</FormattedString>\r\n\t\t\t</Label>\r\n\t\t</StackLayout>\r\n\t\t<!-- <AbsoluteLayout class=\"dialog-wrapper\">\r\n\t\t\t\t<StackLayout class=\"dialog\">\r\n\t\t\t\t\t<Label textWrap=\"true\"\r\n\t\t\t\t\t\ttext=\"Your email has not been verified yet. Please check your email for a verification link. You may also resend the verification email.\"></Label>\r\n\t\t\t\t\t<Button class=\"btn btn-verify\" text=\"Resend Email\"\r\n\t\t\t\t\t\t(tap)=\"sendEmailVerification()\"></Button>\r\n\t\t\t\t\t<Button class= \"btn-close\" text=\"Close\" (tap)=\"closeDialog()\"></Button>\r\n\t\t\t\t</StackLayout>\r\n\t\t\t</AbsoluteLayout> -->\r\n\t</GridLayout>\r\n</ScrollView>\r\n<ActivityIndicator #activityIndicator busy=\"true\" width=\"40\" height=\"40\" class=\"activity-indicator\">\r\n</ActivityIndicator>"

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
        // dialogOpen = false;
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
        if (!this.isLoggingIn) {
            this.fl.nativeElement.style.marginTop = '35';
        }
        else {
            this.fl.nativeElement.style.marginTop = '100';
        }
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
    // showDialog() {
    //   this.dialogOpen = true;
    // }
    // closeDialog() {
    //   this.dialogOpen = false;
    // }
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
                tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_1__["confirm"]({
                    title: "Email Verification",
                    message: "Your email has not been verified yet. Please check your email for a verification link. You may also resend the verification email.",
                    okButtonText: "Resend Email",
                    cancelButtonText: "Close"
                }).then(function (result) {
                    console.log("Dialog result: " + result);
                    if (result) {
                        //Do action1
                        _this.sendEmailVerification();
                    }
                });
                // this.showDialog();
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
    WelcomeComponent.prototype.sendEmailVerification = function () {
        var _this = this;
        nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_4__["sendEmailVerification"]().then(function () {
            console.log("Email verification sent");
            _this.alert("An email verification link has been sent. Please check your email for the link.");
            // this.closeDialog();
        }).catch(function (err) {
            console.log("Error sending email verificatiodn: " + err);
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("formLayout", { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], WelcomeComponent.prototype, "fl", void 0);
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
            
            
        if (false) {}
        
            
        __webpack_require__("../node_modules/tns-core-modules/bundle-entry-points.js");
        // this import should be first in order to load some required settings (like globals and reflect-metadata)



Object(nativescript_angular_element_registry__WEBPACK_IMPORTED_MODULE_2__["registerElement"])("Ripple", function () { return __webpack_require__("../node_modules/nativescript-ripple/ripple.js").Ripple; });
// import Amplify from "@aws-amplify/core";
// require('nativescript-nodeify')
// import awsconfig from './aws-exports';
// Amplify.configure(awsconfig);
// A traditional NativeScript application starts by initializing global objects, setting up global CSS rules, creating, and navigating to the main page. 
// Angular applications need to take care of their own initialization: modules, components, directives, routes, DI providers. 
// A NativeScript Angular app needs to make both paradigms work together, so we provide a wrapper platform object, platformNativeScriptDynamic, 
// that sets up a NativeScript application and can bootstrap the Angular framework.
Object(nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0__["platformNativeScriptDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"]);

    
        
        
    
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./package.json":
/***/ (function(module) {

module.exports = {"android":{"v8Flags":"--expose_gc"},"main":"main.js","name":"migration-ng","version":"4.1.0"};

/***/ })

},[["./main.ts","runtime","vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vJF9sYXp5X3JvdXRlX3Jlc291cmNlIGxhenkgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9hcHAuY3NzIiwid2VicGFjazovLy8uL2FwcC9hZGQtY2FyZC1wYXltZW50L2FkZC1jYXJkLXBheW1lbnQuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvYWRkLWNhcmQtcGF5bWVudC9hZGQtY2FyZC1wYXltZW50LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9hZGQtY2FyZC1wYXltZW50L2FkZC1jYXJkLXBheW1lbnQuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9hZGQtbW9kYWwvYWRkLW1vZGFsLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2FkZC1tb2RhbC9hZGQtbW9kYWwuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2FkZC1tb2RhbC9hZGQtbW9kYWwuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9hZGQtcGF5bWVudC9hZGQtcGF5bWVudC5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC9hZGQtcGF5bWVudC9hZGQtcGF5bWVudC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvYWRkLXBheW1lbnQvYWRkLXBheW1lbnQuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9hcHAtcm91dGluZy5tb2R1bGUudG5zLnRzIiwid2VicGFjazovLy8uL2FwcC9hcHAuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2FwcC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2FwcC5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2F1dG8tZ2VuZXJhdGVkL2F1dG8tZ2VuZXJhdGVkLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2F1dG8tZ2VuZXJhdGVkL2F1dG8tZ2VuZXJhdGVkLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9hdXRvLWdlbmVyYXRlZC9hdXRvLWdlbmVyYXRlZC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NoYXQtbGlzdC9jaGF0LWxpc3QuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvY2hhdC1saXN0L2NoYXQtbGlzdC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvY2hhdC1saXN0L2NoYXQtbGlzdC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NoYXQvY2hhdC5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC9jaGF0L2NoYXQuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NoYXQvY2hhdC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbmZpcm1hdGlvbi9jb25maXJtYXRpb24uY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29uZmlybWF0aW9uL2NvbmZpcm1hdGlvbi5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvY29uZmlybWF0aW9uL2NvbmZpcm1hdGlvbi5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Nvbm5lY3QvY29ubmVjdC5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC9jb25uZWN0L2Nvbm5lY3QuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Nvbm5lY3QvY29ubmVjdC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2RhdGF0cmFuc2Zlci5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL2FwcC9kaWFsb2cvZGlhbG9nLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2RpYWxvZy9kaWFsb2cuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2RpYWxvZy9kaWFsb2cuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9keW5hbWljLWFkZC5zZXJ2aWNlLnRucy50cyIsIndlYnBhY2s6Ly8vLi9hcHAvZHluYW1pYy1hZGQuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvZmxvYXQtYnRuL2Zsb2F0LWJ0bi5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC9mbG9hdC1idG4vZmxvYXQtYnRuLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9mbG9hdC1idG4vZmxvYXQtYnRuLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvZm9yZ2V0LWZvcm0vZm9yZ2V0LWZvcm0uY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvZm9yZ2V0LWZvcm0vZm9yZ2V0LWZvcm0uY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2ZvcmdldC1mb3JtL2ZvcmdldC1mb3JtLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvZ29vZ2xlLW1hcHMuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvaGlzdG9yeS9oaXN0b3J5LmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2hpc3RvcnkvaGlzdG9yeS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvaGlzdG9yeS9oaXN0b3J5LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvaG9tZS5kaXJlY3RpdmUudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC9ob21lL2hvbWUuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2hvbWUvaG9tZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2xvY2F0aW9uL2xvY2F0aW9uLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2xvY2F0aW9uL2xvY2F0aW9uLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9sb2NhdGlvbi9sb2NhdGlvbi5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2xvZ2luLmRpcmVjdGl2ZS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvbG9naW5jaGVjay5zZXJ2aWNlLnRucy50cyIsIndlYnBhY2s6Ly8vLi9hcHAvbG9naW5jaGVjay5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL2FwcC9sb2dpbnJvdXRlL2xvZ2lucm91dGUuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvbG9naW5yb3V0ZS9sb2dpbnJvdXRlLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9sb2dpbnJvdXRlL2xvZ2lucm91dGUuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9tZXNzYWdlLW1vZGFsL21lc3NhZ2UtbW9kYWwuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvbWVzc2FnZS1tb2RhbC9tZXNzYWdlLW1vZGFsLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9tZXNzYWdlLW1vZGFsL21lc3NhZ2UtbW9kYWwuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LnRucy5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQudG5zLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3BheW1lbnQtaW5mby9wYXltZW50LWluZm8uY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvcGF5bWVudC1pbmZvL3BheW1lbnQtaW5mby5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvcGF5bWVudC1pbmZvL3BheW1lbnQtaW5mby5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3BheW1lbnQtbWV0aG9kL3BheW1lbnQtbWV0aG9kLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL3BheW1lbnQtbWV0aG9kL3BheW1lbnQtbWV0aG9kLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9wYXltZW50LW1ldGhvZC9wYXltZW50LW1ldGhvZC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3BheW1lbnQuc2VydmljZS50bnMudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3BheW1lbnQuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvcGF5bWVudHMvcGF5bWVudHMuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvcGF5bWVudHMvcGF5bWVudHMuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL3BheW1lbnRzL3BheW1lbnRzLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvcGxhY2VzLWF1dG9jb21wbGV0ZS5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL2FwcC9wb3N0aW5nLWluZm8vcG9zdGluZy1pbmZvLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL3Bvc3RpbmctaW5mby9wb3N0aW5nLWluZm8uY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL3Bvc3RpbmctaW5mby9wb3N0aW5nLWluZm8uY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9wb3N0aW5nLnNlcnZpY2UudG5zLnRzIiwid2VicGFjazovLy8uL2FwcC9wb3N0aW5nLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3Bvc3RpbmcvcG9zdGluZy5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC9wb3N0aW5nL3Bvc3RpbmcuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL3Bvc3RpbmcvcG9zdGluZy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3JlYXV0aC9yZWF1dGguY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvcmVhdXRoL3JlYXV0aC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvcmVhdXRoL3JlYXV0aC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NldHRpbmdzZm9ybS9zZXR0aW5nc2Zvcm0uY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvc2V0dGluZ3Nmb3JtL3NldHRpbmdzZm9ybS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvc2V0dGluZ3Nmb3JtL3NldHRpbmdzZm9ybS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3VwZGF0ZS91cGRhdGUuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvdXBkYXRlL3VwZGF0ZS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvdXBkYXRlL3VwZGF0ZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3VzZXIuc2VydmljZS50bnMudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3VzZXIuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvdmlldy1pbWFnZS92aWV3LWltYWdlLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL3ZpZXctaW1hZ2Uvdmlldy1pbWFnZS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvdmlldy1pbWFnZS92aWV3LWltYWdlLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvd2VsY29tZS93ZWxjb21lLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL3dlbGNvbWUvd2VsY29tZS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvd2VsY29tZS93ZWxjb21lLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsNENBQTRDLFdBQVc7QUFDdkQ7QUFDQTtBQUNBLHlFOzs7Ozs7O0FDWkEsMkJBQTJCLG1CQUFPLENBQUMsZ0RBQWdEO0FBQ25GO0FBQ0EsVUFBVSxtQkFBTyxDQUFDLG9HQUErRjs7QUFFakg7QUFDQSxjQUFjLFFBQVMsNGZBQTRmLHlCQUF5QixLQUFLOztBQUVqakI7QUFDQSxRQUFRLEtBQVUsRUFBRSxFQUtmOzs7Ozs7OztBQ2JMLDhFQUE4RSxpQkFBaUIsb0JBQW9CLGdCQUFnQixpQkFBaUIsS0FBSyxpQ0FBaUMseUJBQXlCLGNBQWMsS0FBSywrREFBK0QscUJBQXFCLHFCQUFxQixzQkFBc0Isa0NBQWtDLDJCQUEyQixrQkFBa0IsMkJBQTJCLGlEQUFpRCxLQUFLLHVCQUF1QixxQkFBcUIscUJBQXFCLHNCQUFzQixrQ0FBa0MsMkJBQTJCLGtCQUFrQiwyQkFBMkIsaURBQWlELHNCQUFzQixLQUFLLG9CQUFvQixxQkFBcUIscUJBQXFCLGtDQUFrQywyQkFBMkIsaUJBQWlCLGlEQUFpRCx5QkFBeUIsbUJBQW1CLEtBQUssc0JBQXNCLHFCQUFxQixxQkFBcUIsc0JBQXNCLGtDQUFrQywyQkFBMkIsaUJBQWlCLGlEQUFpRCx5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RSxDQUFDO2tDQUFLLHdEQUFVO2dEQUFDO0lBN0J0RCxnQkFBZ0I7UUFONUIsK0RBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLHFFQUF1Qzs7U0FFeEMsQ0FBQzt5Q0FxQjBCLDZEQUFJLEVBQWtCLDRFQUFnQixFQUE2Qix5RUFBaUIsRUFBMkIscUVBQWU7WUFDdEksb0RBQU0sRUFBaUIsMEZBQWtCLEVBQWlCLDhEQUFnQjtPQXBCakYsZ0JBQWdCLENBd1Q1QjtJQUFELHVCQUFDO0NBQUE7QUF4VDRCOzs7Ozs7Ozs7QUNuQjZFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQzFHLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxDQUFDLG1CQUFLLDhEQUFnQztBQUc1RSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDN0MsT0FBTyxFQUFDLDJFQUFzQixFQUF3QztBQUV0RSwyRUFBZ0MsRUFBdUM7QUFDdkUsU0FBMkM7QUFDVDtBQUNsQyxRQUF5QztBQUV6QywwR0FBZ0M7QUFFaEMsWUFBeUo7QUFDekosWUFBOEg7QUFDOUgscUIiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0KHJlcSkge1xuXHQvLyBIZXJlIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKSBpcyB1c2VkIGluc3RlYWQgb2YgbmV3IFByb21pc2UoKSB0byBwcmV2ZW50XG5cdC8vIHVuY2F1Z2h0IGV4Y2VwdGlvbiBwb3BwaW5nIHVwIGluIGRldnRvb2xzXG5cdHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uKCkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fSk7XG59XG53ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gW107IH07XG53ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dDtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0O1xud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LmlkID0gXCIuLi8kJF9sYXp5X3JvdXRlX3Jlc291cmNlIGxhenkgcmVjdXJzaXZlXCI7IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gSW1wb3J0c1xuZXhwb3J0cy5pKHJlcXVpcmUoXCItIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMSFuYXRpdmVzY3JpcHQtdGhlbWUtY29yZS9jc3MvY29yZS5saWdodC5jc3NcIiksIFwiXCIpO1xuXG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qXFxyXFxuSW4gTmF0aXZlU2NyaXB0LCB0aGUgYXBwLmNzcyBmaWxlIGlzIHdoZXJlIHlvdSBwbGFjZSBDU1MgcnVsZXMgdGhhdFxcclxcbnlvdSB3b3VsZCBsaWtlIHRvIGFwcGx5IHRvIHlvdXIgZW50aXJlIGFwcGxpY2F0aW9uLiBDaGVjayBvdXRcXHJcXG5odHRwOi8vZG9jcy5uYXRpdmVzY3JpcHQub3JnL3VpL3N0eWxpbmcgZm9yIGEgZnVsbCBsaXN0IG9mIHRoZSBDU1NcXHJcXG5zZWxlY3RvcnMgYW5kIHByb3BlcnRpZXMgeW91IGNhbiB1c2UgdG8gc3R5bGUgVUkgY29tcG9uZW50cy5cXHJcXG5cXHJcXG4vKlxcclxcbkluIG1hbnkgY2FzZXMgeW91IG1heSB3YW50IHRvIHVzZSB0aGUgTmF0aXZlU2NyaXB0IGNvcmUgdGhlbWUgaW5zdGVhZFxcclxcbm9mIHdyaXRpbmcgeW91ciBvd24gQ1NTIHJ1bGVzLiBGb3IgYSBmdWxsIGxpc3Qgb2YgY2xhc3MgbmFtZXMgaW4gdGhlIHRoZW1lXFxyXFxucmVmZXIgdG8gaHR0cDovL2RvY3MubmF0aXZlc2NyaXB0Lm9yZy91aS90aGVtZS5cXHJcXG4qL1xcclxcblxcclxcbkxhYmVsIHtcXHJcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVwiLCBcIlwiXSk7XG5cbjtcbiAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiAnc3R5bGUnLCBwYXRoOiAnLi9hcHAuY3NzJyB9KTtcbiAgICAgICAgfSlcbiAgICB9XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLyogQWRkIG1vYmlsZSBzdHlsZXMgZm9yIHRoZSBjb21wb25lbnQgaGVyZS4gICovXFxyXFxuLmNsb3NlIHtcXHJcXG5cXHRtYXJnaW46IDEwO1xcclxcblxcdGZvbnQtc2l6ZTogMjg7XFxyXFxuXFx0d2lkdGg6IDQ4O1xcclxcblxcdGhlaWdodDogNDg7XFxyXFxufVxcclxcblxcclxcbi5jbG9zZS1idXR0b24tY29udGFpbmVyIHtcXHJcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0bGVmdDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLyogc3R5bGVzIGZyb20gcGF5bWVudHMuY29tcG9uZW50LmNzcyAqL1xcclxcblxcclxcbiNmb3JtIHtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICB3aWR0aDogNjAwcHg7XFxyXFxuICAgIGhlaWdodDogNDAwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgdG9wOiAzMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDRweCAwIHJnYmEoMCwwLDAsMC4zNyk7XFxyXFxufVxcclxcblxcclxcbiNwYXltZW50LWZvcm0ge1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgIHdpZHRoOiA2MDBweDtcXHJcXG4gICAgaGVpZ2h0OiA0MDBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB0b3A6IDMwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAxcHggNHB4IDAgcmdiYSgwLDAsMCwwLjM3KTtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuI2NhcmQtZm9ybSB7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgd2lkdGg6IDQwMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTgwOTY4O1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHRvcDogMjUlO1xcclxcbiAgICBib3gtc2hhZG93OiAwIDFweCA0cHggMCByZ2JhKDAsMCwwLDAuMzcpO1xcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4jcGF5cGFsLWZvcm0ge1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgIHdpZHRoOiA0MDBweDtcXHJcXG4gICAgaGVpZ2h0OiAyMDBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB0b3A6IDI1JTtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAxcHggNHB4IDAgcmdiYSgwLDAsMCwwLjM3KTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuI3Zlbm1vLWZvcm0ge1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgIHdpZHRoOiA0MDBweDtcXHJcXG4gICAgaGVpZ2h0OiAyMDBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB0b3A6IDI1JTtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAxcHggNHB4IDAgcmdiYSgwLDAsMCwwLjM3KTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuI2Vycm9yLWZvcm0ge1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgIHdpZHRoOiA0MDBweDtcXHJcXG4gICAgaGVpZ2h0OiAyMDBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB0b3A6IDI1JTtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAxcHggNHB4IDAgcmdiYSgwLDAsMCwwLjM3KTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuI2VkaXQtZm9ybSB7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgd2lkdGg6IDQwMHB4O1xcclxcbiAgICBoZWlnaHQ6IDIwMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHRvcDogMjUlO1xcclxcbiAgICBib3gtc2hhZG93OiAwIDFweCA0cHggMCByZ2JhKDAsMCwwLDAuMzcpO1xcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4ucGF5bWVudC1tZXRob2RzIHtcXHJcXG5cXHRvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICB3aWR0aDogMzAwcHg7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDQwcHg7XFxyXFxufVxcclxcblxcclxcbiNtb2RhbC1wYXltZW50LW1ldGhvZHMge1xcclxcblxcdG1hcmdpbi1sZWZ0OiAyNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jcGF5cGFsLWhlYWRlci1jb250YWluZXIge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICM1ODA5Njg7XFxyXFxufVxcclxcblxcclxcbiNlcnJvci1oZWFkZXItY29udGFpbmVyIHtcXHJcXG5cXHRkaXNwbGF5OiBub25lO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICM4OTAwMDA7XFxyXFxufVxcclxcblxcclxcbiNlZGl0LWhlYWRlci1jb250YWluZXIge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICM1ODA5Njg7XFxyXFxufVxcclxcblxcclxcbi5jb2xvcmVkLWhlYWRlciB7XFxyXFxuXFx0Y29sb3I6IHdoaXRlO1xcclxcblxcdGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxufVxcclxcblxcclxcbiNtZXRob2QtaW5mb3JtYXRpb24tdGV4dCB7XFxyXFxuXFx0bWFyZ2luLWxlZnQ6IDQwcHg7XFxyXFxuXFx0bWFyZ2luLXRvcDogMzJweDtcXHJcXG5cXHRmb250LXNpemU6IDE2cHg7XFxyXFxufVxcclxcblxcclxcbi5wYXltZW50LWZvb3Rlci1idXR0b257XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXHJcXG4gICAgY29sb3I6ICNhYzAwZTY7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tbGVmdDogMzRweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4jcGF5cGFsLWJ1dHRvbiB7XFxyXFxuXFx0d2lkdGg6IDM1MHB4O1xcclxcblxcdG1hcmdpbjogYXV0bztcXHJcXG5cXHRtYXJnaW4tdG9wOiAzMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkLWNhcmQtYnV0dG9uIHtcXHJcXG5cXHRmbG9hdDogcmlnaHQ7XFxyXFxuXFx0bWFyZ2luLXJpZ2h0OiAzNHB4O1xcclxcblxcdGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiNyZW1vdmUtcGF5bWVudC1idXR0b24ge1xcclxcblxcdGZsb2F0OiByaWdodDtcXHJcXG5cXHRtYXJnaW4tcmlnaHQ6IDM0cHg7XFxyXFxufVxcclxcblxcclxcbi5wbHVzLXNpZ24ge1xcclxcblxcdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxuXFx0Zm9udC1zaXplOiAzMHB4O1xcclxcblxcdG1hcmdpbi1yaWdodDogN3B4O1xcclxcblxcdGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnBheW1lbnQtZm9vdGVyLXRleHQge1xcclxcblxcdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDQycHg7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDQwMDtcXHJcXG5cXHRmb250LXNpemU6IDEzcHg7XFxyXFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucGF5bWVudC1mb290ZXItdGV4dDpob3ZlciB7XFxyXFxuXFx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxufVxcclxcblxcclxcbi5wYXltZW50cy1ib3R0b20tYWRkLWNvbnRhaW5lciB7XFxyXFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdHdpZHRoOiAxMDAlO1xcclxcblxcdGJvdHRvbTogMDtcXHJcXG59XFxyXFxuXFxyXFxuLyogT3RoZXIgbW9kYWwgc3R5bGluZyBpbiBzdHlsZXMuY3NzICovXFxyXFxuLmNsb3NlLW1vZGFsIHtcXHJcXG5cXHRmb250LXNpemU6IDI0cHg7XFxyXFxuXFx0bWFyZ2luLXJpZ2h0OiAyMHB4O1xcclxcblxcdGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcblNoYXJlZCBWYXJpYWJsZXNcXHJcXG4tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxyXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbkdlbmVyYWxcXHJcXG4tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxyXFxuaHRtbCxcXHJcXG5ib2R5IHtcXHJcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGNvbG9yOiAjMjgyYzM3O1xcclxcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNFRUU7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYm9yZGVyOiAxZW0gc29saWQgI2ZmZjtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA0NzZweCkge1xcclxcbiAgLmZvcm0tY29udGFpbmVyIHtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uY2FyZGluZm8td3JhcHBlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxufVxcclxcblxcclxcbi5iZy1pbGx1c3RyYXRpb24ge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHotaW5kZXg6IDA7XFxyXFxufVxcclxcbi5iZy1pbGx1c3RyYXRpb24gc3ZnIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1zaGFwZSwgI215LXNhbXBsZS1mb3JtLnZpc2EsICNteS1zYW1wbGUtZm9ybS5tYXN0ZXItY2FyZCwgI215LXNhbXBsZS1mb3JtLm1hZXN0cm8sICNteS1zYW1wbGUtZm9ybS5hbWVyaWNhbi1leHByZXNzLCAjbXktc2FtcGxlLWZvcm0uZGlzY292ZXIsICNteS1zYW1wbGUtZm9ybS51bmlvbnBheSwgI215LXNhbXBsZS1mb3JtLmpjYiwgI215LXNhbXBsZS1mb3JtLmRpbmVycy1jbHViIHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG4gIHBhZGRpbmc6IDJlbSAyZW0gMWVtO1xcclxcbn1cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNDc2cHgpIHtcXHJcXG4gIC5jYXJkLXNoYXBlLCAjbXktc2FtcGxlLWZvcm0udmlzYSwgI215LXNhbXBsZS1mb3JtLm1hc3Rlci1jYXJkLCAjbXktc2FtcGxlLWZvcm0ubWFlc3RybywgI215LXNhbXBsZS1mb3JtLmFtZXJpY2FuLWV4cHJlc3MsICNteS1zYW1wbGUtZm9ybS5kaXNjb3ZlciwgI215LXNhbXBsZS1mb3JtLnVuaW9ucGF5LCAjbXktc2FtcGxlLWZvcm0uamNiLCAjbXktc2FtcGxlLWZvcm0uZGluZXJzLWNsdWIge1xcclxcbiAgICBwYWRkaW5nOiAyZW0gMS41ZW0gMWVtO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4jcGF5bWVudC1jYXJkLWZvcm0ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcXHJcXG4gIC8qYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7Ki9cXHJcXG4gIHBhZGRpbmc6IDFlbSAzZW0gM2VtO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMmVtO1xcclxcbi8qICB0cmFuc2l0aW9uOiBhbGwgNjAwbXMgY3ViaWMtYmV6aWVyKDAuMiwgMS4zLCAwLjcsIDEpO1xcclxcbiAgLXdlYmtpdC1hbmltYXRpb246IGNhcmRJbnRybyA1MDBtcyBjdWJpYy1iZXppZXIoMC4yLCAxLjMsIDAuNywgMSk7XFxyXFxuICAgICAgICAgIGFuaW1hdGlvbjogY2FyZEludHJvIDUwMG1zIGN1YmljLWJlemllcigwLjIsIDEuMywgMC43LCAxKTsqL1xcclxcbiAgLyp6LWluZGV4OiAxOyovXFxyXFxufVxcclxcbiNteS1zYW1wbGUtZm9ybTpob3ZlciB7XFxyXFxuICBib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjA2KTtcXHJcXG59XFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDQ3NnB4KSB7XFxyXFxuICAjbXktc2FtcGxlLWZvcm0ge1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBwYWRkaW5nOiA3ZW0gMmVtIDJlbTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICB9XFxyXFxufVxcclxcbiNteS1zYW1wbGUtZm9ybS52aXNhIHtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBENEFBMjtcXHJcXG59XFxyXFxuI215LXNhbXBsZS1mb3JtLm1hc3Rlci1jYXJkIHtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM2MzYzNjtcXHJcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMTVkZWcsICNkODIzMzIsICNkODIzMzIgNTAlLCAjZjFhZDNkIDUwJSwgI2YxYWQzZCk7XFxyXFxufVxcclxcbiNteS1zYW1wbGUtZm9ybS5tYWVzdHJvIHtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM2MzYzNjtcXHJcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMTVkZWcsICMwMDlkZGQsICMwMDlkZGQgNTAlLCAjZWQxYzJlIDUwJSwgI2VkMWMyZSk7XFxyXFxufVxcclxcbiNteS1zYW1wbGUtZm9ybS5hbWVyaWNhbi1leHByZXNzIHtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN0NDMztcXHJcXG59XFxyXFxuI215LXNhbXBsZS1mb3JtLmRpc2NvdmVyIHtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNjAwMDtcXHJcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjZDE0MzEwLCAjZjc5NjFlKTtcXHJcXG59XFxyXFxuI215LXNhbXBsZS1mb3JtLnVuaW9ucGF5LCAjbXktc2FtcGxlLWZvcm0uamNiLCAjbXktc2FtcGxlLWZvcm0uZGluZXJzLWNsdWIge1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzYzNjM2O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZGluZm8tbGFiZWwge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBmb250LXNpemU6IDExcHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxufVxcclxcblxcclxcbi5jYXJkaW5mby1leHAtZGF0ZSB7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDFlbTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZGluZm8tY3Z2IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZGluZm8tY2FyZC1udW1iZXIge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4jY2FyZEltYWdlIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMmVtO1xcclxcbiAgcmlnaHQ6IDFlbTtcXHJcXG4gIHdpZHRoOiA0NHB4O1xcclxcbiAgaGVpZ2h0OiAyOHB4O1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vczMtdXMtd2VzdC0yLmFtYXpvbmF3cy5jb20vcy5jZHBuLmlvLzM0Njk5NC9jYXJkX3Nwcml0ZS5wbmcpO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiA4NnB4IDQ1OHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTEwMHB4IDA7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xcclxcbn1cXHJcXG4jY2FyZEltYWdlLnZpc2Ege1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAtMzk4cHg7XFxyXFxufVxcclxcbiNjYXJkSW1hZ2UubWFzdGVyLWNhcmQge1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAtMjgxcHg7XFxyXFxufVxcclxcbiNjYXJkSW1hZ2UuYW1lcmljYW4tZXhwcmVzcyB7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIC0zNzBweDtcXHJcXG59XFxyXFxuI2NhcmRJbWFnZS5kaXNjb3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIC0xNjNweDtcXHJcXG59XFxyXFxuI2NhcmRJbWFnZS5tYWVzdHJvIHtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgLTI1MXB4O1xcclxcbn1cXHJcXG4jY2FyZEltYWdlLmpjYiB7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIC0yMjFweDtcXHJcXG59XFxyXFxuI2NhcmRJbWFnZS5kaW5lcnMtY2x1YiB7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIC0xMzNweDtcXHJcXG59XFxyXFxuXFxyXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbklucHV0cyBcXHJcXG4tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxyXFxuLmlucHV0LXdyYXBwZXIge1xcclxcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcclxcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg2KTtcXHJcXG4gIGhlaWdodDogMi43NWVtO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcXHJcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMDYpO1xcclxcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxZW07XFxyXFxufVxcclxcblxcclxcbi5jYXJkaW5mby1jYXJkLW51bWJlcixcXHJcXG4uY2FyZGluZm8tZXhwLWRhdGUsXFxyXFxuLmNhcmRpbmZvLWN2diB7XFxyXFxuICB0cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjNzO1xcclxcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3M7XFxyXFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcywgLXdlYmtpdC10cmFuc2Zvcm0gMC4zcztcXHJcXG59XFxyXFxuXFxyXFxuLmJyYWludHJlZS1ob3N0ZWQtZmllbGRzLWZvY3VzZWQge1xcclxcbiAgYm9yZGVyLWNvbG9yOiAjNWRiNmU4O1xcclxcbn1cXHJcXG5cXHJcXG4uYnJhaW50cmVlLWhvc3RlZC1maWVsZHMtaW52YWxpZCB7XFxyXFxuICBib3JkZXItY29sb3I6ICNFNTNBNDA7XFxyXFxuLyogIC13ZWJraXQtYW5pbWF0aW9uOiBzaGFrZSA1MDBtcyBjdWJpYy1iZXppZXIoMC4yLCAxLjMsIDAuNywgMSkgYm90aDtcXHJcXG4gICAgICAgICAgYW5pbWF0aW9uOiBzaGFrZSA1MDBtcyBjdWJpYy1iZXppZXIoMC4yLCAxLjMsIDAuNywgMSkgYm90aDsqL1xcclxcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcclxcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcclxcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxuICAgICAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG4gIC13ZWJraXQtcGVyc3BlY3RpdmU6IDEwMDBweDtcXHJcXG4gICAgICAgICAgcGVyc3BlY3RpdmU6IDEwMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmxvYWRlciB7XFxyXFxuICBib3JkZXI6IDE2cHggc29saWQgI2YzZjNmMzsgLyogTGlnaHQgZ3JleSAqL1xcclxcbiAgYm9yZGVyLXRvcDogMTZweCBzb2xpZCAjYWMwMGU2OyAvKiBQdXJwbGUgKi9cXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIHdpZHRoOiAxMjBweDtcXHJcXG4gIGhlaWdodDogMTIwcHg7XFxyXFxuICBhbmltYXRpb246IHNwaW4gMnMgbGluZWFyIGluZmluaXRlO1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4jbG9hZGluZy1jaXJjbGUge1xcclxcbiAgdG9wOiAxMiU7XFxyXFxuICBsZWZ0OiAzMCU7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxufVxcclxcblxcclxcbiNsaXN0LWxvYWRpbmctY2lyY2xlIHtcXHJcXG5cXHRtYXJnaW4tdG9wOiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuQW5pbWF0aW9uc1xcclxcbi0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXHJcXG5Aa2V5ZnJhbWVzIHNwaW4ge1xcclxcbiAgMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxcclxcbiAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cXHJcXG59XFxyXFxuXFxyXFxuQC13ZWJraXQta2V5ZnJhbWVzIHNoYWtlIHtcXHJcXG4gIDEwJSxcXHJcXG4gIDkwJSB7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMXB4LCAwLCAwKTtcXHJcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xcHgsIDAsIDApO1xcclxcbiAgfVxcclxcbiAgMjAlLFxcclxcbiAgODAlIHtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDFweCwgMCwgMCk7XFxyXFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxcHgsIDAsIDApO1xcclxcbiAgfVxcclxcbiAgMzAlLFxcclxcbiAgNTAlLFxcclxcbiAgNzAlIHtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0zcHgsIDAsIDApO1xcclxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTNweCwgMCwgMCk7XFxyXFxuICB9XFxyXFxuICA0MCUsXFxyXFxuICA2MCUge1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoM3B4LCAwLCAwKTtcXHJcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDNweCwgMCwgMCk7XFxyXFxuICB9XFxyXFxufVxcclxcbkBrZXlmcmFtZXMgc2hha2Uge1xcclxcbiAgMTAlLFxcclxcbiAgOTAlIHtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xcHgsIDAsIDApO1xcclxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTFweCwgMCwgMCk7XFxyXFxuICB9XFxyXFxuICAyMCUsXFxyXFxuICA4MCUge1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMXB4LCAwLCAwKTtcXHJcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDFweCwgMCwgMCk7XFxyXFxuICB9XFxyXFxuICAzMCUsXFxyXFxuICA1MCUsXFxyXFxuICA3MCUge1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTNweCwgMCwgMCk7XFxyXFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtM3B4LCAwLCAwKTtcXHJcXG4gIH1cXHJcXG4gIDQwJSxcXHJcXG4gIDYwJSB7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgzcHgsIDAsIDApO1xcclxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoM3B4LCAwLCAwKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPCEtLSA8bmd4LWJyYWludHJlZSBcXHJcXG4gIFtnZXRDbGllbnRUb2tlbl09XFxcImdldENsaWVudFRva2VuKClcXFwiIFxcclxcbiAgW2NyZWF0ZVB1cmNoYXNlXT1cXFwiY3JlYXRlUHVyY2hhc2VGdW5jdGlvblxcXCIgXFxyXFxuICAocGF5bWVudFN0YXR1cyk9XFxcIm9uUGF5bWVudFN0YXR1cygkZXZlbnQpXFxcIj5cXHJcXG48L25neC1icmFpbnRyZWU+IC0tPlxcclxcblxcclxcbjxTdGFja0xheW91dCAjZm9ybT5cXHJcXG5cXHQ8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImNsb3NlLWJ1dHRvbi1jb250YWluZXJcXFwiIG9yaWVudGF0aW9uPVxcXCJob3Jpem9udGFsXFxcIj5cXHJcXG5cXHRcXHQ8TGFiZWwgdGV4dD1cXFwiJnRpbWVzO1xcXCIgY2xhc3M9XFxcImNsb3NlXFxcIiAodGFwKT1cXFwiY2xvc2UoKVxcXCI+PC9MYWJlbD5cXHJcXG5cXHQ8L1N0YWNrTGF5b3V0PlxcclxcblxcclxcblxcdDxTdGFja0xheW91dCBjbGFzcz1cXFwiY2FyZGluZm8tY2FyZC1udW1iZXJcXFwiPlxcclxcblxcdFxcdDxMYWJlbCB0ZXh0PVxcXCJDYXJkIE51bWJlclxcXCIgY2xhc3M9XFxcImNhcmRpbmZvLWxhYmVsXFxcIj48L0xhYmVsPlxcclxcblxcdFxcdDxTdGFja0xheW91dCAjY2FyZE51bWJlciBjbGFzcz1cXFwiaW5wdXQtd3JhcHBlclxcXCI+PC9TdGFja0xheW91dD5cXHJcXG5cXHRcXHQ8U3RhY2tMYXlvdXQgI2NhcmRJbWFnZT48L1N0YWNrTGF5b3V0PlxcclxcblxcdDwvU3RhY2tMYXlvdXQ+XFxyXFxuXFxyXFxuXFx0PFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJjYXJkaW5mby13cmFwcGVyXFxcIj5cXHJcXG5cXHRcXHQ8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImNhcmRpbmZvLWV4cC1kYXRlXFxcIj5cXHJcXG5cXHRcXHRcXHQ8TGFiZWwgdGV4dD1cXFwiVmFsaWQgVGhydVxcXCIgY2xhc3M9XFxcImNhcmRpbmZvLWxhYmVsXFxcIj48L0xhYmVsPlxcclxcblxcdFxcdFxcdDxTdGFja0xheW91dCAjZXhwaXJhdGlvbkRhdGUgY2xhc3M9XFxcImlucHV0LXdyYXBwZXJcXFwiPjwvU3RhY2tMYXlvdXQ+XFxyXFxuXFx0XFx0PC9TdGFja0xheW91dD5cXHJcXG5cXHJcXG5cXHRcXHQ8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImNhcmRpbmZvLWN2dlxcXCI+XFxyXFxuXFx0XFx0XFx0PExhYmVsIHRleHQ9XFxcIkNWVlxcXCIgY2xhc3M9XFxcImNhcmRpbmZvLWxhYmVsXFxcIj48L0xhYmVsPlxcclxcblxcdFxcdFxcdDxTdGFja0xheW91dCAjY3Z2IGNsYXNzPVxcXCJpbnB1dC13cmFwcGVyXFxcIj48L1N0YWNrTGF5b3V0PlxcclxcblxcdFxcdDwvU3RhY2tMYXlvdXQ+XFxyXFxuXFx0PC9TdGFja0xheW91dD5cXHJcXG5cXHJcXG5cXHQ8QnV0dG9uIHRleHQ9XFxcIkFkZFxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgI3N1Ym1pdEJ1dHRvbj48L0J1dHRvbj5cXHJcXG48L1N0YWNrTGF5b3V0PlxcclxcbjwhLS0gXFx0XFx0PGZvcm0gaWQ9XFxcInBheW1lbnQtY2FyZC1mb3JtXFxcIiBjbGFzcz1cXFwic2NhbGUtZG93blxcXCI+XFxyXFxuXFx0ICAgIDxkaXYgY2xhc3M9XFxcImNhcmRpbmZvLWNhcmQtbnVtYmVyXFxcIj5cXHJcXG5cXHQgICAgICA8bGFiZWwgY2xhc3M9XFxcImNhcmRpbmZvLWxhYmVsXFxcIiBmb3I9XFxcImNhcmQtbnVtYmVyXFxcIj5DYXJkIE51bWJlcjwvbGFiZWw+XFxyXFxuXFx0ICAgICAgPGRpdiBjbGFzcz0naW5wdXQtd3JhcHBlcicgaWQ9XFxcImNhcmQtbnVtYmVyXFxcIj48L2Rpdj5cXHJcXG5cXHQgICAgICA8ZGl2IGlkPVxcXCJjYXJkLWltYWdlXFxcIj48L2Rpdj5cXHJcXG5cXHQgICAgPC9kaXY+XFxyXFxuXFxyXFxuXFx0ICAgIDxkaXYgY2xhc3M9XFxcImNhcmRpbmZvLXdyYXBwZXJcXFwiPlxcclxcblxcdCAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmRpbmZvLWV4cC1kYXRlXFxcIj5cXHJcXG5cXHQgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY2FyZGluZm8tbGFiZWxcXFwiIGZvcj1cXFwiZXhwaXJhdGlvbi1kYXRlXFxcIj5WYWxpZCBUaHJ1PC9sYWJlbD5cXHJcXG5cXHQgICAgICAgIDxkaXYgY2xhc3M9J2lucHV0LXdyYXBwZXInIGlkPVxcXCJleHBpcmF0aW9uLWRhdGVcXFwiPjwvZGl2PlxcclxcblxcdCAgICAgIDwvZGl2PlxcclxcblxcclxcblxcdCAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmRpbmZvLWN2dlxcXCI+XFxyXFxuXFx0ICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNhcmRpbmZvLWxhYmVsXFxcIiBmb3I9XFxcImN2dlxcXCI+Q1ZWPC9sYWJlbD5cXHJcXG5cXHQgICAgICAgIDxkaXYgY2xhc3M9J2lucHV0LXdyYXBwZXInIGlkPVxcXCJjdnZcXFwiPjwvZGl2PlxcclxcblxcdCAgICAgIDwvZGl2PlxcclxcblxcdCAgICA8L2Rpdj5cXHJcXG5cXHQgIDwvZm9ybT4gLS0+XCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgRWxlbWVudFJlZiwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCAqIGFzIGRyb3BpbiBmcm9tICdicmFpbnRyZWUtd2ViLWRyb3AtaW4nO1xyXG5pbXBvcnQgKiBhcyBicmFpbnRyZWUgZnJvbSAnYnJhaW50cmVlLXdlYic7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvYnV0dG9uJztcclxuaW1wb3J0IHsgVGV4dEZpZWxkIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS90ZXh0LWZpZWxkJztcclxuaW1wb3J0IHsgTW9kYWxEaWFsb2dQYXJhbXMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZGlyZWN0aXZlcy9kaWFsb2dzXCI7XHJcbmltcG9ydCB7IFBheW1lbnRTZXJ2aWNlIH0gZnJvbSAnLi4vcGF5bWVudC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU3RhY2tMYXlvdXQgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvc3RhY2stbGF5b3V0JztcclxuLy8gaW1wb3J0IHsgTmF0aXZlU2NyaXB0SHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHAtY2xpZW50JztcclxuLy8gaW1wb3J0IHsgTmd4QnJhaW50cmVlTW9kdWxlIH0gZnJvbSAnbmd4LWJyYWludHJlZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZSc7XHJcbmltcG9ydCB7IEJyYWludHJlZSwgQnJhaW5UcmVlT3B0aW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1icmFpbnRyZWUnO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcclxuXHJcbi8vIHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtbm9kZWlmeVwiKTtcclxuLy8gaW1wb3J0ICogYXMgTm9kZWlmeSBmcm9tICduYXRpdmVzY3JpcHQtbm9kZWlmeSc7XHJcbi8vIGNvbnN0IGJyYWludHJlZSA9IHJlcXVpcmUoJ2JyYWludHJlZS13ZWInKTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLWFkZC1jYXJkLXBheW1lbnQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9hZGQtY2FyZC1wYXltZW50LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9hZGQtY2FyZC1wYXltZW50LmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWRkQ2FyZFBheW1lbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhcmFtczogTW9kYWxEaWFsb2dQYXJhbXMsIHByaXZhdGUgcGF5bWVudFNlcnZpY2U6IFBheW1lbnRTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucykgeyB9XHJcblxyXG4gIC8vIEBWaWV3Q2hpbGQoXCJkcm9waW5Db250YWludGVyXCIpIGNvbnRhaW5lcjogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKFwic3VibWl0QnV0dG9uXCIsIHsgc3RhdGljOiB0cnVlIH0pIHNCOiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoXCJleHBpcmF0aW9uRGF0ZVwiLCB7IHN0YXRpYzogdHJ1ZSB9KSBleHBpcmF0aW9uVGV4dDogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKFwiY2FyZE51bWJlclwiLCB7IHN0YXRpYzogdHJ1ZSB9KSBudW1iZXJUZXh0OiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoXCJjdnZcIiwgeyBzdGF0aWM6IHRydWUgfSkgY3Z2VGV4dDogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKFwiZm9ybVwiLCB7IHN0YXRpYzogdHJ1ZSB9KSBmb3JtTGF5b3V0OiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoXCJjYXJkSW1hZ2VcIiwgeyBzdGF0aWM6IHRydWUgfSkgY2FyZExheW91dDogRWxlbWVudFJlZjtcclxuXHJcbiAgdXNlciA9IHtcclxuICBcdHBheW1lbnRfaWQ6ICc1MDczMDU3MDYnXHJcbiAgfVxyXG4gIG9wdHMgOkJyYWluVHJlZU9wdGlvbnMgPSB7XHJcblx0YW1vdW50OiBudWxsLFxyXG5cdGNvbGxlY3REZXZpY2VEYXRhOiB0cnVlLFxyXG5cdHJlcXVlc3RUaHJlZURTZWN1cmVWZXJpZmljYXRpb246IGZhbHNlLFxyXG4gIH1cclxuICBjbGllbnRUb2tlbiA9ICcnO1xyXG5cclxuICAvLyB0b2tlbiA9IHRoaXMucGF5bWVudFNlcnZpY2UuZ2V0SWRUb2tlbih0aGlzLnVzZXIucGF5bWVudF9pZCk7XHJcbiAgbmdPbkluaXQoKSB7XHJcbiAvLyAgXHRicmFpbnRyZWUuY2xpZW50LmNyZWF0ZSh7XHJcblx0Ly8gICBhdXRob3JpemF0aW9uOiAnc2FuZGJveF85cXNieXlxOF93bWMzdjg4cjM2Y2J4amp6J1xyXG5cdC8vIH0sIGZ1bmN0aW9uIChjbGllbnRFcnIsIGNsaWVudEluc3RhbmNlKSB7XHJcblx0Ly8gICAvLyBTdG9wIGlmIHRoZXJlIHdhcyBhIHByb2JsZW0gY3JlYXRpbmcgdGhlIGNsaWVudC5cclxuXHQvLyAgIC8vIFRoaXMgY291bGQgaGFwcGVuIGlmIHRoZXJlIGlzIGEgbmV0d29yayBlcnJvciBvciBpZiB0aGUgYXV0aG9yaXphdGlvblxyXG5cdC8vICAgLy8gaXMgaW52YWxpZC5cclxuXHQvLyAgIGlmIChjbGllbnRFcnIpIHtcclxuXHQvLyAgICAgY29uc29sZS5lcnJvcignRXJyb3IgY3JlYXRpbmcgY2xpZW50OicsIGNsaWVudEVycik7XHJcblx0Ly8gICAgIHJldHVybjtcclxuXHQvLyAgIH1cclxuXHQvLyB9KTtcclxuXHJcbiAgfVxyXG5cclxuICBjcmVhdGVWaWV3cygpIHtcclxuICBcdHZhciBmb3JtID0gPFN0YWNrTGF5b3V0PiB0aGlzLmZvcm1MYXlvdXQubmF0aXZlRWxlbWVudDtcclxuXHR2YXIgc3VibWl0ID0gPEJ1dHRvbj4gdGhpcy5zQi5uYXRpdmVFbGVtZW50O1xyXG5cdHZhciBleHBpcmF0aW9uRGF0ZSA9IDxTdGFja0xheW91dD4gdGhpcy5leHBpcmF0aW9uVGV4dC5uYXRpdmVFbGVtZW50O1xyXG5cdHZhciBjYXJkTnVtYmVyID0gPFN0YWNrTGF5b3V0PiB0aGlzLm51bWJlclRleHQubmF0aXZlRWxlbWVudDtcclxuXHR2YXIgY3Z2ID0gPFN0YWNrTGF5b3V0PiB0aGlzLmN2dlRleHQubmF0aXZlRWxlbWVudDtcclxuXHR2YXIgY2FyZEltYWdlID0gPFN0YWNrTGF5b3V0PiB0aGlzLmNhcmRMYXlvdXQubmF0aXZlRWxlbWVudDtcclxuXHJcblx0c3VibWl0LmlzRW5hYmxlZCA9IGZhbHNlO1xyXG5cclxuICB9XHJcblxyXG4gIGNsb3NlKCkge1xyXG4gIFx0dGhpcy5wYXJhbXMuY2xvc2VDYWxsYmFjaygpO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q2xpZW50VG9rZW4oKSB7XHJcbiAgXHRjb25zdCB0b2tlbiA9IG5ldyBPYnNlcnZhYmxlKCk7XHJcbiAgXHR0b2tlbi5zZXQoJ0F1dGhvcml6YXRpb24nLCAnc2FuZGJveF85cXNieXlxOF93bWMzdjg4cjM2Y2J4amp6Jyk7XHJcbiAgXHRyZXR1cm4gdG9rZW47XHJcbiAgfVxyXG5cclxuICBjcmVhdGVQdXJjaGFzZUZ1bmN0aW9uKG5vbmNlOiBzdHJpbmcsIGNoYXJnZUFtb3VudDogbnVtYmVyKSB7XHJcbiAgXHRyZXR1cm4gdGhpcy5wYXltZW50U2VydmljZS5hZGRQYXltZW50TWV0aG9kVG9Vc2VyKHRoaXMudXNlci5wYXltZW50X2lkLCBub25jZSk7XHJcbiAgfVxyXG5cclxuICBvblBheW1lbnRTdGF0dXMoZXZlbnQpIHtcclxuXHJcbiAgfVxyXG5cclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLyogQWRkIG1vYmlsZSBzdHlsZXMgZm9yIHRoZSBjb21wb25lbnQgaGVyZS4gICovXFxyXFxuLnBhZ2Uge1xcclxcbiAgLyphbGlnbi1pdGVtczogY2VudGVyOyovXFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybSB7XFxyXFxuICBtYXJnaW4tbGVmdDogMzA7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDMwO1xcclxcbiAgZmxleC1ncm93OiAyO1xcclxcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlIHtcXHJcXG5cXHRtYXJnaW46IDEwO1xcclxcblxcdGZvbnQtc2l6ZTogMjg7XFxyXFxuXFx0d2lkdGg6IDQ4O1xcclxcblxcdGhlaWdodDogNDg7XFxyXFxufVxcclxcblxcclxcbi5jbG9zZS1idXR0b24tY29udGFpbmVyIHtcXHJcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0bGVmdDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlci1sYWJlbCB7XFxyXFxuXFx0bWFyZ2luLXRvcDogNjA7XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTogMDtcXHJcXG5cXHRmb250LXNpemU6IDIwO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyLWxhYmVsLTIge1xcclxcblxcdGZvbnQtc2l6ZTogMjA7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXItbGFiZWwtMyB7XFxyXFxuXFx0bWFyZ2luLXRvcDogMTQ7XFxyXFxuXFx0bWFyZ2luLWxlZnQ6IDE2O1xcclxcblxcdG1hcmdpbi1yaWdodDogMTY7XFxyXFxuXFx0Zm9udC1zaXplOiAxODtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlci1sYWJlbC00IHtcXHJcXG5cXHRmb250LXNpemU6IDE4O1xcclxcblxcdG1hcmdpbi10b3A6IDE0O1xcclxcbn1cXHJcXG5cXHJcXG4ucmlkaW5nLWxhYmVsIHtcXHJcXG5cXHRmb250LXdlaWdodDogNzAwO1xcclxcblxcdGNvbG9yOiAjYWMwMGU2O1xcclxcbn1cXHJcXG5cXHJcXG4uZHJpdmluZy1sYWJlbCB7XFxyXFxuXFx0Y29sb3I6ICM1YzY4N2M7XFxyXFxufVxcclxcblxcclxcbi5zd2l0Y2gtY29udGFpbmVyIHtcXHJcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zd2l0Y2gge1xcclxcblxcdGNvbG9yOiAjYWMwMGU2O1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICNjZDk0ZTA7XFxyXFxufVxcclxcblxcclxcbi5zdWJtaXQtYnRuIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjYWMwMGU2O1xcclxcblxcdG1hcmdpbi10b3A6IDIwO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9sZCB7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDcwMDtcXHJcXG59XFxyXFxuXFxyXFxuLnN0YXJ0LWZpZWxkIHtcXHJcXG5cXHRtYXJnaW4tdG9wOiAxNDtcXHJcXG59XFxyXFxuXFxyXFxuLmFjdGl2aXR5LWluZGljYXRvciB7XFxyXFxuICBjb2xvcjogI2FjMDBlNjtcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XFxyXFxuICBtYXJnaW4tdG9wOiA0NyU7XFxyXFxufVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxTdGFja0xheW91dD5cXHJcXG5cXHQ8QWN0aXZpdHlJbmRpY2F0b3IgI2FjdGl2aXR5SW5kaWNhdG9yIGJ1c3k9XFxcInRydWVcXFwiIHdpZHRoPVxcXCI0MFxcXCIgaGVpZ2h0PVxcXCI0MFxcXCIgY2xhc3M9XFxcImFjdGl2aXR5LWluZGljYXRvclxcXCI+PC9BY3Rpdml0eUluZGljYXRvcj5cXHJcXG5cXHQ8U2Nyb2xsVmlldyBoZWlnaHQ9XFxcIjEwMCVcXFwiPlxcclxcblxcdDxGbGV4Ym94TGF5b3V0IGNsYXNzPVxcXCJwYWdlXFxcIiAjYWRkQ29udGFpbmVyPlxcclxcblxcdFxcdDxTdGFja0xheW91dCBjbGFzcz1cXFwiY2xvc2UtYnV0dG9uLWNvbnRhaW5lclxcXCIgb3JpZW50YXRpb249XFxcImhvcml6b250YWxcXFwiPlxcclxcblxcdFxcdFxcdDxMYWJlbCB0ZXh0PVxcXCImdGltZXM7XFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiICh0YXApPVxcXCJjbG9zZSgnY2FuY2VsJylcXFwiPjwvTGFiZWw+XFxyXFxuXFx0XFx0PC9TdGFja0xheW91dD5cXHJcXG5cXHJcXG5cXHJcXG5cXHRcXHQ8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImZvcm1cXFwiPlxcclxcblxcdFxcdFxcdDxMYWJlbCB0ZXh0PVxcXCJJIGFtLi4uXFxcIiBjbGFzcz1cXFwiaGVhZGVyLWxhYmVsLTIgYm9sZFxcXCI+PC9MYWJlbD5cXHJcXG5cXHJcXG5cXHRcXHQgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiaW5wdXQtZmllbGQgc3dpdGNoLWNvbnRhaW5lclxcXCIgb3JpZW50YXRpb249XFxcImhvcml6b250YWxcXFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCI+XFxyXFxuXFx0XFx0ICBcXHQ8TGFiZWwgdGV4dD1cXFwiRHJpdmluZ1xcXCIgY2xhc3M9XFxcImhlYWRlci1sYWJlbC0zIGRyaXZpbmctbGFiZWxcXFwiICNkcml2aW5nTGFiZWw+PC9MYWJlbD5cXHJcXG5cXHRcXHQgIFxcdDxTd2l0Y2ggY2hlY2tlZD1cXFwidHJ1ZVxcXCIgKGNoZWNrZWRDaGFuZ2UpPVxcXCJvbkNoZWNrZWRDaGFuZ2UoJGV2ZW50KVxcXCIgY2xhc3M9XFxcIm0tMTUgc3dpdGNoXFxcIj48L1N3aXRjaD5cXHJcXG5cXHRcXHQgIFxcdDxMYWJlbCB0ZXh0PVxcXCJSaWRpbmdcXFwiIGNsYXNzPVxcXCJoZWFkZXItbGFiZWwtMyByaWRpbmctbGFiZWxcXFwiICNyaWRpbmdMYWJlbD48L0xhYmVsPlxcclxcblxcdFxcdCAgPC9TdGFja0xheW91dD5cXHJcXG5cXHJcXG5cXHRcXHQgIDxMYWJlbCB0ZXh0PVxcXCJXaGVyZT9cXFwiIGNsYXNzPVxcXCJoZWFkZXItbGFiZWwgYm9sZFxcXCI+PC9MYWJlbD5cXHJcXG5cXHRcXHQgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiaW5wdXQtZmllbGQgc3RhcnQtZmllbGRcXFwiPlxcclxcbjwhLS0gXFx0XFx0ICAgIDxUZXh0RmllbGQgY2xhc3M9XFxcImlucHV0XFxcIiBhdXRvY29ycmVjdD1cXFwiZmFsc2VcXFwiIGhpbnQ9XFxcIldoZXJlIGZyb20/XFxcIiBbKG5nTW9kZWwpXT1cXFwic3RhcnRBZGRyZXNzXFxcIiAodGV4dENoYW5nZSk9XFxcInN0YXJ0QXV0b2NvbXBsZXRlKClcXFwiICh0YXApPVxcXCJzaG93TW9kYWwoJ3N0YXJ0JylcXFwiIHJlcXVpcmVkPjwvVGV4dEZpZWxkPiAtLT5cXHJcXG5cXHRcXHRcXHQ8TGFiZWwgdGV4dD1cXFwie3sgc3RhcnRMYWJlbCB9fVxcXCIgY2xhc3M9XFxcImhlYWRlci1sYWJlbC0zXFxcIiAodGFwKT1cXFwic2hvd01vZGFsKCdzdGFydCcpXFxcIj48L0xhYmVsPlxcclxcblxcdFxcdCAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImhyLWxpZ2h0XFxcIj48L1N0YWNrTGF5b3V0PlxcclxcblxcdFxcdCAgPC9TdGFja0xheW91dD5cXHJcXG5cXHJcXG5cXHRcXHQgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiaW5wdXQtZmllbGRcXFwiPlxcclxcbjwhLS0gXFx0XFx0ICAgIDxUZXh0RmllbGQgY2xhc3M9XFxcImlucHV0XFxcIiBhdXRvY29ycmVjdD1cXFwiZmFsc2VcXFwiIGhpbnQ9XFxcIldoZXJlIHRvP1xcXCIgWyhuZ01vZGVsKV09XFxcImVuZEFkZHJlc3NcXFwiICh0ZXh0Q2hhbmdlKT1cXFwiZW5kQXV0b2NvbXBsZXRlKClcXFwiICh0YXApPVxcXCJzaG93TW9kYWwoJ2VuZCcpXFxcIiByZXF1aXJlZD48L1RleHRGaWVsZD4gLS0+XFxyXFxuXFx0XFx0XFx0XFx0PExhYmVsIHRleHQ9XFxcInt7IGVuZExhYmVsIH19XFxcIiBjbGFzcz1cXFwiaGVhZGVyLWxhYmVsLTNcXFwiICh0YXApPVxcXCJzaG93TW9kYWwoJ2VuZCcpXFxcIj48L0xhYmVsPlxcclxcblxcdFxcdCAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImhyLWxpZ2h0XFxcIj48L1N0YWNrTGF5b3V0PlxcclxcblxcdFxcdCAgPC9TdGFja0xheW91dD5cXHJcXG5cXHJcXG5cXHQ8IS0tIFxcdCAgPERhdGVQaWNrZXIgKGxvYWRlZCk9XFxcIm9uUGlja2VyTG9hZGVkKCRldmVudClcXFwiIChkYXRlQ2hhbmdlKT1cXFwib25EYXRlQ2hhbmdlZCgkZXZlbnQpXFxcIiBcXHJcXG5cXHQoZGF5Q2hhbmdlKT1cXFwib25EYXlDaGFuZ2VkKCRldmVudClcXFwiIChtb250aENoYW5nZSk9XFxcIm9uTW9udGhDaGFuZ2VkKCRldmVudClcXFwiICh5ZWFyQ2hhbmdlKT1cXFwib25ZZWFyQ2hhbmdlZCgkZXZlbnQpXFxcIiB2ZXJ0aWNhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIj48L0RhdGVQaWNrZXI+IC0tPlxcclxcblxcdFxcdFxcdDxMYWJlbCB0ZXh0PVxcXCJXaGVuP1xcXCIgY2xhc3M9XFxcImhlYWRlci1sYWJlbCBib2xkXFxcIj48L0xhYmVsPlxcclxcblxcclxcblxcdFxcdCAgPERhdGVQaWNrZXIgKGxvYWRlZCk9XFxcIm9uUGlja2VyTG9hZGVkKCRldmVudClcXFwiIChkYXRlQ2hhbmdlKT1cXFwib25EYXRlQ2hhbmdlZCgkZXZlbnQpXFxcIiB2ZXJ0aWNhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIj48L0RhdGVQaWNrZXI+XFxyXFxuXFxyXFxuXFx0XFx0ICA8TGFiZWwgKm5nSWY9XFxcImlzRHJpdmluZ1xcXCIgdGV4dD1cXFwiSG93IG1hbnk/XFxcIiBjbGFzcz1cXFwiaGVhZGVyLWxhYmVsXFxcIj48L0xhYmVsPlxcclxcblxcdFxcdCAgPEdyaWRMYXlvdXQgKm5nSWY9XFxcImlzRHJpdmluZ1xcXCIgY2xhc3M9XFxcIm0tMTVcXFwiIHJvd3M9XFxcImF1dG9cXFwiIGNvbHVtbnM9XFxcIjUwICogNTBcXFwiPlxcclxcblxcdFxcdFxcdCAgICA8TGFiZWwgY2xhc3M9XFxcImgzXFxcIiB0ZXh0PVxcXCIxXFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgcm93PVxcXCIxMFxcXCIgY29sPVxcXCIwXFxcIj48L0xhYmVsPlxcclxcblxcdFxcdFxcdCAgICA8U2xpZGVyIG1pblZhbHVlPVxcXCIxXFxcIiBtYXhWYWx1ZT1cXFwiOFxcXCIgWyhuZ01vZGVsKV09XFxcImNhcGFjaXR5XFxcIiByb3c9XFxcIjBcXFwiXFxyXFxuXFx0XFx0XFx0ICAgICBjb2w9XFxcIjFcXFwiPjwvU2xpZGVyPlxcclxcblxcdFxcdFxcdCAgICA8TGFiZWwgY2xhc3M9XFxcImgzXFxcIiB0ZXh0PVxcXCI4XFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgcm93PVxcXCIwXFxcIiBjb2w9XFxcIjJcXFwiPjwvTGFiZWw+XFxyXFxuXFx0XFx0XFx0PC9HcmlkTGF5b3V0PlxcclxcblxcdFxcdCAgPExhYmVsICpuZ0lmPVxcXCJpc0RyaXZpbmdcXFwiIHRleHQ9XFxcInt7IGNhcGFjaXR5IH19XFxcIiBjbGFzcz1cXFwiaGVhZGVyLWxhYmVsLTJcXFwiPjwvTGFiZWw+XFxyXFxuXFxyXFxuXFx0XFx0ICA8QnV0dG9uIHRleHQ9XFxcIkFkZFxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeSBzdWJtaXQtYnRuXFxcIiAodGFwKT1cXFwiYWRkUG9zdGluZygpXFxcIj48L0J1dHRvbj5cXHJcXG5cXHRcXHQ8L1N0YWNrTGF5b3V0PlxcclxcblxcdDwvRmxleGJveExheW91dD5cXHJcXG5cXHQ8L1Njcm9sbFZpZXc+XFxyXFxuPC9TdGFja0xheW91dD5cXHJcXG5cXHJcXG5cXHJcXG5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTW9kYWxEaWFsb2dQYXJhbXMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZGlyZWN0aXZlcy9kaWFsb2dzXCI7XHJcbmltcG9ydCB7IE1vZGFsRGlhbG9nU2VydmljZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9kaXJlY3RpdmVzL2RpYWxvZ3NcIjtcclxuaW1wb3J0IHsgUG9zdGluZ1NlcnZpY2UgfSBmcm9tICcuLi9wb3N0aW5nLnNlcnZpY2UudG5zJztcclxuaW1wb3J0IHsgRGF0ZVBpY2tlciB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RhdGUtcGlja2VyXCI7XHJcbmltcG9ydCB7IFN3aXRjaCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3N3aXRjaFwiO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZVwiO1xyXG5pbXBvcnQgeyBMYWJlbCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xhYmVsXCI7XHJcbmltcG9ydCB7IENvbG9yIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvY29sb3JcIjtcclxuaW1wb3J0IHsgUGxhY2VzQXV0b2NvbXBsZXRlU2VydmljZSB9IGZyb20gJy4uL3BsYWNlcy1hdXRvY29tcGxldGUuc2VydmljZSc7XHJcbmltcG9ydCB7IHNldEludGVydmFsLCBjbGVhckludGVydmFsIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdGltZXJcIjtcclxuaW1wb3J0IHsgTG9jYXRpb25Db21wb25lbnQgfSBmcm9tICcuLi9sb2NhdGlvbi9sb2NhdGlvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUcmFuc2ZlclNlcnZpY2UgfSBmcm9tICcuLi9kYXRhdHJhbnNmZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IExvZ2luY2hlY2tTZXJ2aWNlIH0gZnJvbSAnLi4vbG9naW5jaGVjay5zZXJ2aWNlLnRucyc7XHJcbmltcG9ydCAqIGFzIGZpcmViYXNlIGZyb20gJ25hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2UnO1xyXG5pbXBvcnQgeyBEYXRlUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IENhY2hlIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9pbWFnZS1jYWNoZSc7XHJcbmltcG9ydCB7IEdvb2dsZU1hcHNTZXJ2aWNlIH0gZnJvbSAnLi4vZ29vZ2xlLW1hcHMuc2VydmljZSc7XHJcbmltcG9ydCB7SW1hZ2VTb3VyY2UsIGZyb21GaWxlLCBmcm9tUmVzb3VyY2UsIGZyb21CYXNlNjR9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2ltYWdlLXNvdXJjZVwiO1xyXG5pbXBvcnQge0ZvbGRlciwgcGF0aCwga25vd25Gb2xkZXJzfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9maWxlLXN5c3RlbVwiO1xyXG5pbXBvcnQgKiBhcyBmcyBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9maWxlLXN5c3RlbVwiO1xyXG5pbXBvcnQgeyBBY3Rpdml0eUluZGljYXRvciB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvYWN0aXZpdHktaW5kaWNhdG9yJztcclxuaW1wb3J0IHsgU2Nyb2xsVmlldyB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvc2Nyb2xsLXZpZXcnO1xyXG5pbXBvcnQgeyBGbGV4Ym94TGF5b3V0IH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9sYXlvdXRzL2ZsZXhib3gtbGF5b3V0JztcclxuaW1wb3J0IHsgU3RhY2tMYXlvdXQgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvc3RhY2stbGF5b3V0JztcclxuLy8gaW1wb3J0IHsgR29vZ2xlUGxhY2VzQXV0b2NvbXBsZXRlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWdvb2dsZS1wbGFjZXMtYXV0b2NvbXBsZXRlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLWFkZC1tb2RhbCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2FkZC1tb2RhbC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vYWRkLW1vZGFsLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWRkTW9kYWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhcmFtczogTW9kYWxEaWFsb2dQYXJhbXMsIHByaXZhdGUgcG9zdGluZ1NlcnZpY2U6IFBvc3RpbmdTZXJ2aWNlLCBwcml2YXRlIHBhZ2U6IFBhZ2UsIHByaXZhdGUgcGxhY2VzU2VydmljZTogUGxhY2VzQXV0b2NvbXBsZXRlU2VydmljZSxcclxuICAgIHByaXZhdGUgbW9kYWw6IE1vZGFsRGlhbG9nU2VydmljZSwgcHJpdmF0ZSB2Y1JlZjogVmlld0NvbnRhaW5lclJlZiwgcHJpdmF0ZSB0cmFuc2ZlclNlcnZpY2U6IFRyYW5zZmVyU2VydmljZSwgcHJpdmF0ZSBsb2dpbmNoZWNrU2VydmljZTogTG9naW5jaGVja1NlcnZpY2UsXHJcbiAgICBwcml2YXRlIGRhdGVQaXBlOiBEYXRlUGlwZSwgcHJpdmF0ZSBtYXBTZXJ2aWNlOiBHb29nbGVNYXBzU2VydmljZSkgeyB9XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ2RyaXZpbmdMYWJlbCcsIHsgc3RhdGljOiB0cnVlIH0pIGRsOiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoJ3JpZGluZ0xhYmVsJywgeyBzdGF0aWM6IHRydWUgfSkgcmw6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgnYWN0aXZpdHlJbmRpY2F0b3InLCB7IHN0YXRpYzogdHJ1ZSB9KSBhaTogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKCdhZGRDb250YWluZXInLCB7IHN0YXRpYzogdHJ1ZSB9KSBhYzogRWxlbWVudFJlZjtcclxuICAvLyBAVmlld0NoaWxkKCdzdGFydExhYmVsJykgc2w6IEVsZW1lbnRSZWY7XHJcbiAgLy8gQFZpZXdDaGlsZCgnZW5kTGFiZWwnKSBlbDogRWxlbWVudFJlZjtcclxuXHJcbiAgc3RhcnRTdWdnZXN0aW9uczogU3RyaW5nW107XHJcbiAgZW5kU3VnZ2VzdGlvbnM6IFN0cmluZ1tdO1xyXG4gIHN0YXJ0UGxhY2U7XHJcbiAgZW5kUGxhY2U7XHJcbiAgc3RhcnRBZGRyZXNzO1xyXG4gIGVuZEFkZHJlc3M7XHJcbiAgZm9ybWF0dGVkRGF0ZTtcclxuICBkYXRlID0gXCJub3dcIjtcclxuICBwcmljZSA9IFwiJDE1XCI7XHJcbiAgY2FwYWNpdHkgPSBcIi0xXCI7XHJcbiAgdXNlciA9IHtcclxuICBcdHVzZXJuYW1lOiBcIjIwMjJheWVlXCIsXHJcbiAgICBpZDogXCJcIlxyXG4gIH07XHJcbiAgc3RhcnRMYWJlbCA9IFwiUGljayBzdGFydCBsb2NhdGlvblwiO1xyXG4gIGVuZExhYmVsID0gXCJQaWNrIGVuZCBsb2NhdGlvblwiO1xyXG4gIHN0YXJ0TGF0O1xyXG4gIHN0YXJ0TG5nO1xyXG4gIGVuZExhdDtcclxuICBlbmRMbmc7XHJcblxyXG4gIGlzRHJpdmluZyA9IGZhbHNlO1xyXG4gIHN0YXJ0TG9jYXRpb25QaWNrZWQgPSBmYWxzZTtcclxuICBlbmRMb2NhdGlvblBpY2tlZCA9IGZhbHNlO1xyXG4gIGltYWdlU291cmNlID0gbmV3IEltYWdlU291cmNlKCk7XHJcblxyXG5cclxuICBBUElfS0VZID0gXCJBSXphU3lBSVR4UzFqbWY4UE10YXpSZ3VXY0FmV1F4VzFrUE9vWWdcIjtcclxuICAvLyBnb29nbGVQbGFjZXNBdXRvY29tcGxldGUgPSBuZXcgR29vZ2xlUGxhY2VzQXV0b2NvbXBsZXRlKHRoaXMuQVBJX0tFWSk7XHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICAvLyBsZXQgYWRkQ29udGFpbmVyID0gPEZsZXhib3hMYXlvdXQ+IHRoaXMuYWMubmF0aXZlRWxlbWVudDtcclxuICAgIC8vICAvLyBhY3Rpdml0eUluZGljYXRvci5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xyXG4gICAgLy8gYWRkQ29udGFpbmVyLnN0eWxlLnZpc2liaWxpdHkgPSAnY29sbGFwc2UnO1xyXG4gICAgbGV0IGFjdGl2aXR5SW5kaWNhdG9yID0gPEFjdGl2aXR5SW5kaWNhdG9yPiB0aGlzLmFpLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICBhY3Rpdml0eUluZGljYXRvci5zdHlsZS52aXNpYmlsaXR5ID0gJ2NvbGxhcHNlJ1xyXG4gICAgZmlyZWJhc2UuZ2V0Q3VycmVudFVzZXIoKS50aGVuKHVzZXIgPT4ge1xyXG4gICAgICB0aGlzLnVzZXIudXNlcm5hbWUgPSB1c2VyLmRpc3BsYXlOYW1lO1xyXG4gICAgICBpZih1c2VyLmRpc3BsYXlOYW1lID09IG51bGwgfHwgdXNlci5kaXNwbGF5TmFtZSA9PSAnJylcclxuICAgICAgICB0aGlzLnVzZXIudXNlcm5hbWUgPSB1c2VyLmVtYWlsO1xyXG4gICAgICB0aGlzLnVzZXIuaWQgPSB0aGlzLmxvZ2luY2hlY2tTZXJ2aWNlLmdldFVzZXIoKTtcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBzdGFydFNlbGVjdChldmVudDogRXZlbnQpIHtcclxuICAgIGNvbnNvbGUubG9nKGV2ZW50LnNyY0VsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgc2hvd01vZGFsKHR5cGUpIHtcclxuICAgIGxldCBvcHRpb25zID0ge1xyXG4gICAgICAgIGNvbnRleHQ6IHt9LFxyXG4gICAgICAgIGZ1bGxzY3JlZW46IHRydWUsXHJcbiAgICAgICAgdmlld0NvbnRhaW5lclJlZjogdGhpcy52Y1JlZlxyXG4gICAgICAgIC8vIGFuaW1hdGVkOiB0cnVlLFxyXG4gICAgICAgIC8vIHRyYW5zaXRpb246IHsgbmFtZTogXCJzbGlkZVRvcFwiIH1cclxuICAgIH07XHJcbiAgICB0aGlzLnRyYW5zZmVyU2VydmljZS5zZXREYXRhKHR5cGUpO1xyXG4gICAgdGhpcy5tb2RhbC5zaG93TW9kYWwoTG9jYXRpb25Db21wb25lbnQsIG9wdGlvbnMpLnRoZW4ocmVzID0+IHtcclxuICAgICAgICBpZihyZXMgIT0gbnVsbClcclxuICAgICAgICAgIGlmKHJlcy5zdGFydCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRMb2NhdGlvblBpY2tlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRMYWJlbCA9ICdTdGFydCBsb2NhdGlvbjogJyArIHJlcy5zdGFydDtcclxuICAgICAgICAgICAgdGhpcy5zdGFydFBsYWNlID0gcmVzLnN0YXJ0O1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0QWRkcmVzcyA9IHJlcy5hZGRyZXNzO1xyXG5cclxuICAgICAgICAgICAgLy8gbGV0IHNMYWJlbCA9IDxMYWJlbD4gdGhpcy5zbC5uYXRpdmVFbGVtZW50O1xyXG4gICAgICAgICAgICAvLyBzTGFiZWwuY2xhc3NOYW1lICs9ICdib2xkJztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2UgaWYocmVzLmVuZCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW5kTG9jYXRpb25QaWNrZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmVuZExhYmVsID0gJ0VuZCBsb2NhdGlvbjogJyArIHJlcy5lbmQ7XHJcbiAgICAgICAgICAgIHRoaXMuZW5kUGxhY2UgPSByZXMuZW5kO1xyXG4gICAgICAgICAgICB0aGlzLmVuZEFkZHJlc3MgPSByZXMuYWRkcmVzcztcclxuICAgICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIGlmKHR5cGUgPT0gJ3N0YXJ0Jykge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0TG9jYXRpb25QaWNrZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0TGFiZWwgPSAnUGljayBzdGFydCBsb2NhdGlvbic7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbHNlIGlmKHR5cGUgPT0gJ2VuZCcpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGFydExvY2F0aW9uUGlja2VkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRMYWJlbCA9ICdQaWNrIGVuZCBsb2NhdGlvbic7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjbG9zZShyZXMpIHtcclxuICBcdHRoaXMucGFyYW1zLmNsb3NlQ2FsbGJhY2socmVzKTtcclxuICAgfVxyXG5cclxuICAgYWRkUG9zdGluZygpIHtcclxuICAgICBsZXQgYWRkQ29udGFpbmVyID0gPEZsZXhib3hMYXlvdXQ+IHRoaXMuYWMubmF0aXZlRWxlbWVudDtcclxuICAgICBhZGRDb250YWluZXIuc3R5bGUudmlzaWJpbGl0eSA9ICdjb2xsYXBzZSc7XHJcbiAgICAgbGV0IGFjdGl2aXR5SW5kaWNhdG9yID0gPEFjdGl2aXR5SW5kaWNhdG9yPiB0aGlzLmFpLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICAgYWN0aXZpdHlJbmRpY2F0b3Iuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcclxuICAgICB0aGlzLm1hcFNlcnZpY2UuZ2V0R2VvY29kZVJlc3VsdHModGhpcy5zdGFydFBsYWNlICsgJyAnICsgdGhpcy5zdGFydEFkZHJlc3MpLnN1YnNjcmliZSgocmVzOiBhbnkpID0+IHtcclxuICAgICAgdGhpcy5zdGFydExhdCA9IHJlcy5yZXN1bHRzWzBdLmdlb21ldHJ5LmxvY2F0aW9uLmxhdDtcclxuICAgICAgdGhpcy5zdGFydExuZyA9IHJlcy5yZXN1bHRzWzBdLmdlb21ldHJ5LmxvY2F0aW9uLmxuZztcclxuICAgICAgdGhpcy5tYXBTZXJ2aWNlLmdldEdlb2NvZGVSZXN1bHRzKHRoaXMuZW5kUGxhY2UgKyAnICcgKyB0aGlzLmVuZEFkZHJlc3MpLnN1YnNjcmliZSgocmVzOiBhbnkpID0+IHtcclxuICAgICAgICB0aGlzLmVuZExhdCA9IHJlcy5yZXN1bHRzWzBdLmdlb21ldHJ5LmxvY2F0aW9uLmxhdDtcclxuICAgICAgICB0aGlzLmVuZExuZyA9IHJlcy5yZXN1bHRzWzBdLmdlb21ldHJ5LmxvY2F0aW9uLmxuZztcclxuXHJcbiAgICAgICAgaWYodGhpcy5zdGFydExvY2F0aW9uUGlja2VkICYmIHRoaXMuZW5kTG9jYXRpb25QaWNrZWQpIHtcclxuICAgICAgICAgdmFyIHBvc3RpbmdzQ29sbGVjdGlvbiA9IGZpcmViYXNlLmZpcmVzdG9yZS5jb2xsZWN0aW9uKCdwb3N0aW5ncycpO1xyXG4gICAgICAgICBwb3N0aW5nc0NvbGxlY3Rpb24uYWRkKHtcclxuICAgICAgICAgICB1aWQ6IHRoaXMudXNlci5pZCxcclxuICAgICAgICAgICB1c2VyOiB0aGlzLnVzZXIudXNlcm5hbWUsXHJcbiAgICAgICAgICAgc3RhcnRBZGRyZXNzOiB0aGlzLnN0YXJ0UGxhY2UsXHJcbiAgICAgICAgICAgZW5kQWRkcmVzczogdGhpcy5lbmRQbGFjZSxcclxuICAgICAgICAgICBzdGFydEZvcm1hdHRlZDogdGhpcy5zdGFydEFkZHJlc3MsXHJcbiAgICAgICAgICAgZW5kRm9ybWF0dGVkOiB0aGlzLmVuZEFkZHJlc3MsXHJcbiAgICAgICAgICAgZGF0ZTogdGhpcy5kYXRlLFxyXG4gICAgICAgICAgIHByaWNlOiB0aGlzLnByaWNlLFxyXG4gICAgICAgICAgIGNhcGFjaXR5OiB0aGlzLmNhcGFjaXR5LFxyXG4gICAgICAgICAgIGNvbW1lbnRzOiBcIlwiLFxyXG4gICAgICAgICAgIGZvcm1hdHRlZERhdGU6IHRoaXMuZm9ybWF0dGVkRGF0ZSxcclxuICAgICAgICAgICBzdGFydExhdDogdGhpcy5zdGFydExhdCxcclxuICAgICAgICAgICBlbmRMYXQ6IHRoaXMuZW5kTGF0LFxyXG4gICAgICAgICAgIHN0YXJ0TG5nOiB0aGlzLnN0YXJ0TG5nLFxyXG4gICAgICAgICAgIGVuZExuZzogdGhpcy5lbmRMbmdcclxuICAgICAgICAgfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcyk7XHJcblxyXG4gICAgICAgICAgIGZpcmViYXNlLmZpcmVzdG9yZS5jb2xsZWN0aW9uKCd1c2VycycpLmRvYyh0aGlzLnVzZXIuaWQpLmdldCgpLnRoZW4oZG9jID0+IHtcclxuICAgICAgICAgICAgIHZhciBwb3N0czogU3RyaW5nW10gPSBkb2MuZGF0YSgpLnBvc3RzO1xyXG4gICAgICAgICAgICAgcG9zdHMucHVzaChyZXMuaWQpO1xyXG4gICAgICAgICAgICAgZmlyZWJhc2UuZmlyZXN0b3JlLmNvbGxlY3Rpb24oJ3VzZXJzJykuZG9jKHRoaXMudXNlci5pZCkudXBkYXRlKHtcclxuICAgICAgICAgICAgICAgcG9zdHM6IHBvc3RzXHJcbiAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgdGhpcy51cGxvYWRNYXAocmVzLmlkLCAnc21hbGxfbWFwLnBuZycpO1xyXG4gICAgICAgICAgICAgdGhpcy51cGxvYWRNYXAocmVzLmlkLCAnbGFyZ2VfbWFwLnBuZycpO1xyXG4gICAgICAgICAgIH0pLmNhdGNoKChlcnIpID0+IHt9KVxyXG4gICAgICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7fSlcclxuICAgICAgIH1cclxuXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICAgIC8vIHRoaXMucG9zdGluZ1NlcnZpY2UuYWRkUG9zdGluZyh0aGlzLnVzZXIudXNlcm5hbWUsIHRoaXMuc3RhcnRQbGFjZSwgdGhpcy5lbmRQbGFjZSwgdGhpcy5kYXRlLCB0aGlzLnByaWNlLCB0aGlzLmNhcGFjaXR5LCBcIlwiKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAvLyAgIHRoaXMuY2xvc2UoJ3Bvc3RlZCcpO1xyXG4gICAgICAvLyB9KTtcclxuICB9XHJcblxyXG4gIHVwbG9hZE1hcChpZCwgdXBsb2FkTmFtZSkge1xyXG4gICAgY29uc3QgY2FjaGUgPSBuZXcgQ2FjaGUoKTtcclxuICAgIGNhY2hlLmVuYWJsZURvd25sb2FkKCk7XHJcbiAgICBsZXQgY2FjaGVkSW1hZ2VTb3VyY2U7XHJcbiAgICB2YXIgdXJsID0gdGhpcy5tYXBTZXJ2aWNlLmdldFN0YXRpY01hcCh0aGlzLnN0YXJ0UGxhY2UgKyBcIiBcIiArIHRoaXMuc3RhcnRBZGRyZXNzLCB0aGlzLmVuZFBsYWNlICsgXCIgXCIgKyB0aGlzLmVuZEFkZHJlc3MpO1xyXG4gICAgaWYodXBsb2FkTmFtZSA9PSAnbGFyZ2VfbWFwLnBuZycpXHJcbiAgICAgIHVybCA9IHRoaXMubWFwU2VydmljZS5nZXRTdGF0aWNNYXBMYXJnZSh0aGlzLnN0YXJ0UGxhY2UgKyBcIiBcIiArIHRoaXMuc3RhcnRBZGRyZXNzLCB0aGlzLmVuZFBsYWNlICsgXCIgXCIgKyB0aGlzLmVuZEFkZHJlc3MpO1xyXG4gICAgLy8gVHJ5IHRvIHJlYWQgdGhlIGltYWdlIGZyb20gdGhlIGNhY2hlXHJcbiAgICBjb25zdCBteUltYWdlID0gY2FjaGUuZ2V0KHVybCk7XHJcbiAgICBjYWNoZS5wdXNoKHtcclxuICAgIGtleTogdXJsLFxyXG4gICAgdXJsOiB1cmwsXHJcbiAgICBjb21wbGV0ZWQ6IChpbWFnZSwga2V5KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh1cmwgPT09IGtleSkge1xyXG4gICAgICAgICAgICAgICAgY2FjaGVkSW1hZ2VTb3VyY2UgPSB0aGlzLmltYWdlU291cmNlLnNldE5hdGl2ZVNvdXJjZShpbWFnZSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmb2xkZXJQYXRoOiBzdHJpbmcgPSBrbm93bkZvbGRlcnMuZG9jdW1lbnRzKCkucGF0aDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZpbGVOYW1lID0gdXBsb2FkTmFtZTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZpbGVQYXRoID0gcGF0aC5qb2luKGZvbGRlclBhdGgsIGZpbGVOYW1lKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNhdmVkOiBib29sZWFuID0gdGhpcy5pbWFnZVNvdXJjZS5zYXZlVG9GaWxlKGZpbGVQYXRoLCBcInBuZ1wiKTtcclxuICAgICAgICAgICAgICAgIGlmIChzYXZlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpcmViYXNlLnN0b3JhZ2UudXBsb2FkRmlsZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAvLyB0aGUgZnVsbCBwYXRoIG9mIHRoZSBmaWxlIGluIHlvdXIgRmlyZWJhc2Ugc3RvcmFnZSAoZm9sZGVycyB3aWxsIGJlIGNyZWF0ZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICByZW1vdGVGdWxsUGF0aDogJ3Bvc3RpbmdzLycgKyBpZCArICcvbWFwcy8nICsgdXBsb2FkTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgIC8vIG9wdGlvbiAxOiBhIGZpbGUtc3lzdGVtIG1vZHVsZSBGaWxlIG9iamVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgbG9jYWxGaWxlOiBmcy5GaWxlLmZyb21QYXRoKGZpbGVQYXRoKSxcclxuICAgICAgICAgICAgICAgICAgICAgIC8vIG9wdGlvbiAyOiBhIGZ1bGwgZmlsZSBwYXRoIChpZ25vcmVkIGlmICdsb2NhbEZpbGUnIGlzIHNldClcclxuICAgICAgICAgICAgICAgICAgICAgIGxvY2FsRnVsbFBhdGg6IGZpbGVQYXRoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgLy8gZ2V0IG5vdGlmaWVkIG9mIGZpbGUgdXBsb2FkIHByb2dyZXNzXHJcbiAgICAgICAgICAgICAgICAgICAgICBvblByb2dyZXNzOiAoc3RhdHVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVXBsb2FkZWQgZnJhY3Rpb246IFwiICsgc3RhdHVzLmZyYWN0aW9uQ29tcGxldGVkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJQZXJjZW50YWdlIGNvbXBsZXRlOiBcIiArIHN0YXR1cy5wZXJjZW50YWdlQ29tcGxldGVkKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KS50aGVuKCh1cGxvYWRlZEZpbGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIGlmKHVwbG9hZE5hbWUgPT0gJ3NtYWxsX21hcC5wbmcnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaXJlYmFzZS5zdG9yYWdlLmdldERvd25sb2FkVXJsKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdGVGdWxsUGF0aDogJ3Bvc3RpbmdzLycgKyBpZCArICcvbWFwcy9zbWFsbF9tYXAucG5nJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS50aGVuKCh1cmwpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBmaXJlYmFzZS5maXJlc3RvcmUuY29sbGVjdGlvbigncG9zdGluZ3MnKS5kb2MoaWQpLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXBfdXJsOiB1cmxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhY3Rpdml0eUluZGljYXRvciA9IDxBY3Rpdml0eUluZGljYXRvcj4gdGhpcy5haS5uYXRpdmVFbGVtZW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGFkZENvbnRhaW5lciA9IDxGbGV4Ym94TGF5b3V0PiB0aGlzLmFjLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpdml0eUluZGljYXRvci5zdHlsZS52aXNpYmlsaXR5ID0gJ2NvbGxhcHNlJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZENvbnRhaW5lci5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZSgncG9zdGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBvblBpY2tlckxvYWRlZChhcmdzKSB7XHJcbiAgXHRsZXQgZGF0ZVBpY2tlciA9IDxEYXRlUGlja2VyPmFyZ3Mub2JqZWN0O1xyXG5cclxuICBcdHZhciB0b2RheSA9IG5ldyBEYXRlKCk7XHJcblxyXG4gIFx0ZGF0ZVBpY2tlci5taW5EYXRlID0gbmV3IERhdGUoKTtcclxuXHJcbiAgXHR2YXIgbmV4dFllYXJEYXRlID0gbmV3IERhdGUodG9kYXkpO1xyXG4gIFx0bmV4dFllYXJEYXRlLnNldERhdGUobmV4dFllYXJEYXRlLmdldERhdGUoKSArIDM2NSk7XHJcbiAgXHRkYXRlUGlja2VyLm1heERhdGUgPSBuZXh0WWVhckRhdGU7XHJcbiAgfVxyXG5cclxuICBvbkRhdGVDaGFuZ2VkKGFyZ3MpIHtcclxuICBcdGxldCBkYXRlUGlja2VyID0gPERhdGVQaWNrZXI+YXJncy5vYmplY3Q7XHJcbiAgXHR2YXIgc2VsZWN0ZWREYXRlID0gZGF0ZVBpY2tlci5kYXRlO1xyXG4gICAgdGhpcy5mb3JtYXR0ZWREYXRlID0gdGhpcy5kYXRlUGlwZS50cmFuc2Zvcm0oc2VsZWN0ZWREYXRlLFwieXl5eS1NTS1kZFwiKVxyXG5cclxuICBcdC8vIGNvbnNvbGUubG9nKHNlbGVjdGVkRGF0ZS50b1N0cmluZygpLnN1YnN0cmluZygwLCAxNSkpO1xyXG4gIFx0dGhpcy5kYXRlID0gc2VsZWN0ZWREYXRlLnRvU3RyaW5nKCkuc3Vic3RyaW5nKDAsIDE1KTtcclxuICB9XHJcblxyXG4gIG9uQ2hlY2tlZENoYW5nZShhcmdzKSB7XHJcbiAgXHRsZXQgbXlTd2l0Y2ggPSBhcmdzLm9iamVjdCBhcyBTd2l0Y2g7XHJcbiAgICBsZXQgaXNDaGVja2VkID0gbXlTd2l0Y2guY2hlY2tlZDsgLy8gYm9vbGVhblxyXG5cclxuICAgIGxldCBkcml2aW5nTGFiZWwgPSA8TGFiZWw+IHRoaXMuZGwubmF0aXZlRWxlbWVudDtcclxuICAgIGxldCByaWRpbmdMYWJlbCA9IDxMYWJlbD4gdGhpcy5ybC5uYXRpdmVFbGVtZW50O1xyXG5cclxuICAgIGlmKGlzQ2hlY2tlZCkge1xyXG4gICAgXHRkcml2aW5nTGFiZWwuc3R5bGUuZm9udFdlaWdodCA9IFwiNDAwXCI7XHJcbiAgICBcdGRyaXZpbmdMYWJlbC5zdHlsZS5jb2xvciA9IG5ldyBDb2xvcihcIiM1YzY4N2NcIik7XHJcbiAgICBcdHJpZGluZ0xhYmVsLnN0eWxlLmZvbnRXZWlnaHQgPSBcIjcwMFwiO1xyXG4gICAgXHRyaWRpbmdMYWJlbC5zdHlsZS5jb2xvciA9IG5ldyBDb2xvcihcIiNhYzAwZTZcIik7XHJcbiAgICBcdHRoaXMuaXNEcml2aW5nID0gZmFsc2U7XHJcbiAgICBcdHRoaXMuY2FwYWNpdHkgPSBcIi0xXCI7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgIFx0ZHJpdmluZ0xhYmVsLnN0eWxlLmZvbnRXZWlnaHQgPSBcIjcwMFwiO1xyXG4gICAgXHRkcml2aW5nTGFiZWwuc3R5bGUuY29sb3IgPSBuZXcgQ29sb3IoXCIjYWMwMGU2XCIpO1xyXG4gICAgXHRyaWRpbmdMYWJlbC5zdHlsZS5mb250V2VpZ2h0ID0gXCI0MDBcIjtcclxuICAgIFx0cmlkaW5nTGFiZWwuc3R5bGUuY29sb3IgPSBuZXcgQ29sb3IoXCIjNWM2ODdjXCIpO1xyXG4gICAgXHR0aGlzLmlzRHJpdmluZyA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLyogQWRkIG1vYmlsZSBzdHlsZXMgZm9yIHRoZSBjb21wb25lbnQgaGVyZS4gICovXFxyXFxuLmNsb3NlIHtcXHJcXG5cXHRtYXJnaW46IDEwO1xcclxcblxcdGZvbnQtc2l6ZTogMjg7XFxyXFxuXFx0d2lkdGg6IDQ4O1xcclxcblxcdGhlaWdodDogNDg7XFxyXFxufVxcclxcblxcclxcbi5jbG9zZS1idXR0b24tY29udGFpbmVyIHtcXHJcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0bGVmdDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnBheW1lbnQtdHlwZS1pY29uIHtcXHJcXG5cXHRoZWlnaHQ6IDM0O1xcclxcblxcdHdpZHRoOiAzNDtcXHJcXG5cXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuXFx0bWFyZ2luLXRvcDogMTg7XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTogMTg7XFxyXFxuXFx0bWFyZ2luLWxlZnQ6IDM2O1xcclxcbn1cXHJcXG5cXHJcXG4ucGF5bWVudC1pbmZvLWxhYmVsIHtcXHJcXG5cXHRmb250LXNpemU6IDE2O1xcclxcblxcdC8qZm9udC13ZWlnaHQ6IDcwMDsqL1xcclxcblxcdHBhZGRpbmc6IDMwO1xcclxcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHRjb2xvcjogYmxhY2s7XFxyXFxufVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxTdGFja0xheW91dD5cXHJcXG5cXHQ8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImNsb3NlLWJ1dHRvbi1jb250YWluZXJcXFwiIG9yaWVudGF0aW9uPVxcXCJob3Jpem9udGFsXFxcIj5cXHJcXG5cXHRcXHQ8TGFiZWwgdGV4dD1cXFwiJnRpbWVzO1xcXCIgY2xhc3M9XFxcImNsb3NlXFxcIiAodGFwKT1cXFwiY2xvc2UoJ2NhbmNlbCcpXFxcIj48L0xhYmVsPlxcclxcblxcdDwvU3RhY2tMYXlvdXQ+XFxyXFxuXFxyXFxuXFx0PExpc3RWaWV3IFtpdGVtc109XFxcIm1ldGhvZHNcXFwiIHNlcGFyYXRvckNvbG9yPVxcXCJ0cmFuc3BhcmVudFxcXCIgKGl0ZW1UYXApPVxcXCJvblNlbGVjdCgkZXZlbnQpXFxcIj5cXHJcXG5cXHRcXHQ8bmctdGVtcGxhdGUgbGV0LWl0ZW09XFxcIml0ZW1cXFwiIGxldC1pPVxcXCJpbmRleFxcXCIgbGV0LW9kZD1cXFwib2RkXFxcIiBsZXQtZXZlbj1cXFwiZXZlblxcXCI+XFxyXFxuXFx0XFx0XFx0PFN0YWNrTGF5b3V0IFtjbGFzcy5vZGRdPVxcXCJvZGRcXFwiIFtjbGFzcy5ldmVuXT1cXFwiZXZlblxcXCIgb3JpZW50YXRpb249XFxcImhvcml6b250YWxcXFwiPlxcclxcblxcdFxcdFxcdFxcdDxJbWFnZSBbc3JjXT1cXFwiaXRlbS5wYXltZW50VHlwZVxcXCIgY2xhc3M9XFxcInBheW1lbnQtdHlwZS1pY29uXFxcIj48L0ltYWdlPlxcclxcblxcdFxcdFxcdFxcdDxMYWJlbCB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgW3RleHRdPVxcXCJpdGVtLmluZm9cXFwiIGNsYXNzPVxcXCJwYXltZW50LWluZm8tbGFiZWxcXFwiPjwvTGFiZWw+XFxyXFxuXFx0XFx0XFx0PC9TdGFja0xheW91dD5cXHJcXG5cXHRcXHQ8L25nLXRlbXBsYXRlPlxcclxcblxcdDwvTGlzdFZpZXc+XFxyXFxuPC9TdGFja0xheW91dD5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTW9kYWxEaWFsb2dQYXJhbXMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZGlyZWN0aXZlcy9kaWFsb2dzXCI7XHJcbmltcG9ydCB7IE1vZGFsRGlhbG9nU2VydmljZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9kaXJlY3RpdmVzL2RpYWxvZ3NcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZUFycmF5IH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUtYXJyYXknO1xyXG5pbXBvcnQgeyBBZGRDYXJkUGF5bWVudENvbXBvbmVudCB9IGZyb20gJy4uL2FkZC1jYXJkLXBheW1lbnQvYWRkLWNhcmQtcGF5bWVudC5jb21wb25lbnQnO1xyXG5cclxuXHJcbmNsYXNzIE1ldGhvZEl0ZW0ge1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXltZW50VHlwZTogc3RyaW5nLCBwdWJsaWMgaW5mbzogc3RyaW5nKSB7fVxyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1hZGQtcGF5bWVudCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2FkZC1wYXltZW50LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9hZGQtcGF5bWVudC5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEFkZFBheW1lbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHZjUmVmOiBWaWV3Q29udGFpbmVyUmVmLCBwcml2YXRlIG1vZGFsOiBNb2RhbERpYWxvZ1NlcnZpY2UsIHByaXZhdGUgcGFyYW1zOiBNb2RhbERpYWxvZ1BhcmFtcykgeyB9XHJcblxyXG4gIG1ldGhvZHMgPSBuZXcgT2JzZXJ2YWJsZUFycmF5PE1ldGhvZEl0ZW0+KCk7XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIFx0dGhpcy5hZGRNZXRob2RzKCk7XHJcbiAgfVxyXG5cclxuICBhZGRNZXRob2RzKCkge1xyXG4gIFx0dGhpcy5tZXRob2RzLnB1c2gobmV3IE1ldGhvZEl0ZW0oJ34vaW1nL2NyZWRpdC1jYXJkLWljb24ucG5nJywgJ0NyZWRpdCBvciBEZWJpdCBDYXJkJykpO1xyXG4gIFx0dGhpcy5tZXRob2RzLnB1c2gobmV3IE1ldGhvZEl0ZW0oJ34vaW1nL3BheXBhbC1pY29uLnBuZycsICdQYXlwYWwnKSk7XHJcbiAgXHR0aGlzLm1ldGhvZHMucHVzaChuZXcgTWV0aG9kSXRlbSgnfi9pbWcvdmVubW8taWNvbi5wbmcnLCAnVmVubW8nKSk7XHJcbiAgfVxyXG5cclxuICBvcGVuQ2FyZFBheW1lbnQoKSB7XHJcbiAgICBsZXQgb3B0aW9ucyA9IHtcclxuICAgICAgICBjb250ZXh0OiB7fSxcclxuICAgICAgICBmdWxsc2NyZWVuOiB0cnVlLFxyXG4gICAgICAgIHZpZXdDb250YWluZXJSZWY6IHRoaXMudmNSZWZcclxuICAgICAgICAvLyBhbmltYXRlZDogdHJ1ZSxcclxuICAgICAgICAvLyB0cmFuc2l0aW9uOiB7IG5hbWU6IFwic2xpZGVUb3BcIiB9XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMubW9kYWwuc2hvd01vZGFsKEFkZENhcmRQYXltZW50Q29tcG9uZW50LCBvcHRpb25zKS50aGVuKHJlcyA9PiB7XHJcblxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjbG9zZShyZXMpIHtcclxuICBcdHRoaXMucGFyYW1zLmNsb3NlQ2FsbGJhY2socmVzKTtcclxuICB9XHJcblxyXG4gIG9uU2VsZWN0KGV2ZW50KSB7XHJcbiAgXHQvL2V2ZW50LmluZGV4IHN0b3JlcyB3aGljaCBpbmRleCB3YXMgdGFwcGVkXHJcbiAgXHRpZihldmVudC5pbmRleCA9PSAwKVxyXG4gIFx0XHR0aGlzLm9wZW5DYXJkUGF5bWVudCgpO1xyXG4gIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gJy4vYXBwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IExvZ2luRGlyZWN0aXZlIH0gZnJvbSAnLi9sb2dpbi5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBMb2dpbkNvbXBvbmVudCB9IGZyb20gJy4vbG9naW4vbG9naW4uY29tcG9uZW50JztcclxuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gJy4vaG9tZS9ob21lLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEhvbWVEaXJlY3RpdmUgfSBmcm9tICcuL2hvbWUuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgSGlzdG9yeUNvbXBvbmVudCB9IGZyb20gJy4vaGlzdG9yeS9oaXN0b3J5LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFNldHRpbmdzQ29tcG9uZW50IH0gZnJvbSAnLi9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYW5pbWF0aW9ucyc7XHJcbmltcG9ydCB7IE5neFBheVBhbE1vZHVsZSB9IGZyb20gJ25neC1wYXlwYWwnO1xyXG5cclxuaW1wb3J0IHsgUG9zdGluZ1NlcnZpY2UgfSBmcm9tICcuL3Bvc3Rpbmcuc2VydmljZSc7XHJcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSAnLi91c2VyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBUcmFuc2ZlclNlcnZpY2UgfSBmcm9tICcuL2RhdGF0cmFuc2Zlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRHluYW1pY0FkZFNlcnZpY2UgfSBmcm9tICcuL2R5bmFtaWMtYWRkLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQYXltZW50U2VydmljZSB9IGZyb20gJy4vcGF5bWVudC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUG9zdGluZ0NvbXBvbmVudCB9IGZyb20gJy4vcG9zdGluZy9wb3N0aW5nLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFVwZGF0ZUNvbXBvbmVudCB9IGZyb20gJy4vdXBkYXRlL3VwZGF0ZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb25uZWN0Q29tcG9uZW50IH0gZnJvbSAnLi9jb25uZWN0L2Nvbm5lY3QuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSwgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7TWF0SW5wdXRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcclxuLy8gaW1wb3J0IHsgQW1wbGlmeUFuZ3VsYXJNb2R1bGUsIEFtcGxpZnlTZXJ2aWNlIH0gZnJvbSAnYXdzLWFtcGxpZnktYW5ndWxhcic7XHJcbmltcG9ydCB7IExvZ2lucm91dGVDb21wb25lbnQgfSBmcm9tICcuL2xvZ2lucm91dGUvbG9naW5yb3V0ZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEaWFsb2dDb21wb25lbnQgfSBmcm9tICcuL2RpYWxvZy9kaWFsb2cuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTmF2aWdhdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudCc7XHJcblxyXG5pbXBvcnQgeyBBdXRvR2VuZXJhdGVkQ29tcG9uZW50IH0gZnJvbSAnLi9hdXRvLWdlbmVyYXRlZC9hdXRvLWdlbmVyYXRlZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQYXltZW50c0NvbXBvbmVudCB9IGZyb20gJy4vcGF5bWVudHMvcGF5bWVudHMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGF5bWVudE1ldGhvZENvbXBvbmVudCB9IGZyb20gJy4vcGF5bWVudC1tZXRob2QvcGF5bWVudC1tZXRob2QuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU2VhcmNoQ29tcG9uZW50IH0gZnJvbSAnLi9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBheW1lbnRJbmZvQ29tcG9uZW50IH0gZnJvbSAnLi9wYXltZW50LWluZm8vcGF5bWVudC1pbmZvLmNvbXBvbmVudCdcclxuaW1wb3J0IHsgV2VsY29tZUNvbXBvbmVudCB9IGZyb20gJy4vd2VsY29tZS93ZWxjb21lLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBvc3RpbmdJbmZvQ29tcG9uZW50IH0gZnJvbSAnLi9wb3N0aW5nLWluZm8vcG9zdGluZy1pbmZvLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7U2V0dGluZ3Nmb3JtQ29tcG9uZW50fSBmcm9tICcuL3NldHRpbmdzZm9ybS9zZXR0aW5nc2Zvcm0uY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ2hhdENvbXBvbmVudCB9IGZyb20gJy4vY2hhdC9jaGF0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENoYXRMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9jaGF0LWxpc3QvY2hhdC1saXN0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFZpZXdJbWFnZUNvbXBvbmVudCB9IGZyb20gJy4vdmlldy1pbWFnZS92aWV3LWltYWdlLmNvbXBvbmVudCc7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHJvdXRlczogUm91dGVzID0gW1xyXG4gIHsgcGF0aDogJ2xvZ2luJywgY29tcG9uZW50OiBMb2dpbkNvbXBvbmVudCB9LFxyXG4gIHsgcGF0aDogJycsICAgcmVkaXJlY3RUbzogJy93ZWxjb21lJywgcGF0aE1hdGNoOiAnZnVsbCcgfSxcclxuICB7IHBhdGg6ICdob21lJywgY29tcG9uZW50OiBIb21lQ29tcG9uZW50IH0sXHJcbiAgeyBwYXRoOiAnaGlzdG9yeScsIGNvbXBvbmVudDogSGlzdG9yeUNvbXBvbmVudCB9LFxyXG4gIHsgcGF0aDogJ3NldHRpbmdzJywgY29tcG9uZW50OiBTZXR0aW5nc0NvbXBvbmVudCB9LFxyXG4gIHsgcGF0aDogJ3VwZGF0ZScsIGNvbXBvbmVudDogVXBkYXRlQ29tcG9uZW50IH0sXHJcbiAgeyBwYXRoOiAnY29ubmVjdCcsIGNvbXBvbmVudDogQ29ubmVjdENvbXBvbmVudCB9LFxyXG4gIHsgcGF0aDogJ2xvZ2lucm91dGUnLCBjb21wb25lbnQ6IExvZ2lucm91dGVDb21wb25lbnQgfSxcclxuICB7IHBhdGg6ICdwYXltZW50cycsIGNvbXBvbmVudDogUGF5bWVudHNDb21wb25lbnQgfSxcclxuICB7IHBhdGg6ICdzZWFyY2gnLCBjb21wb25lbnQ6IFNlYXJjaENvbXBvbmVudCB9LFxyXG4gIHsgcGF0aDogJ25hdmlnYXRpb24nLCBjb21wb25lbnQ6IE5hdmlnYXRpb25Db21wb25lbnQgfSxcclxuICB7IHBhdGg6ICdwYXltZW50aW5mbycsIGNvbXBvbmVudDogUGF5bWVudEluZm9Db21wb25lbnQgfSxcclxuICB7IHBhdGg6ICd3ZWxjb21lJywgY29tcG9uZW50OiBXZWxjb21lQ29tcG9uZW50IH0sXHJcbiAgeyBwYXRoOiAncG9zdGluZy1pbmZvJywgY29tcG9uZW50OiBQb3N0aW5nSW5mb0NvbXBvbmVudCB9LFxyXG4gIHsgcGF0aDogJ3NldHRpbmdzZm9ybScsIGNvbXBvbmVudDogU2V0dGluZ3Nmb3JtQ29tcG9uZW50IH0sXHJcbiAgeyBwYXRoOiAnY2hhdCcsIGNvbXBvbmVudDogQ2hhdENvbXBvbmVudCB9LFxyXG4gIHsgcGF0aDogJ2NoYXQtbGlzdCcsIGNvbXBvbmVudDogQ2hhdExpc3RDb21wb25lbnQgfSxcclxuICB7IHBhdGg6ICd2aWV3LWltYWdlJywgY29tcG9uZW50OiBWaWV3SW1hZ2VDb21wb25lbnQgfSxcclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyldLFxyXG4gIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBSb3V0aW5nTW9kdWxlIHsgfVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPCEtLSBodHRwczovL2RvY3MubmF0aXZlc2NyaXB0Lm9yZy9hbmd1bGFyL2NvcmUtY29uY2VwdHMvYW5ndWxhci1uYXZpZ2F0aW9uLmh0bWwjcGFnZS1yb3V0ZXItb3V0bGV0IC0tPlxcclxcblxcclxcbjxQYWdlPlxcclxcblxcdCAgICA8cGFnZS1yb3V0ZXItb3V0bGV0PjwvcGFnZS1yb3V0ZXItb3V0bGV0PlxcclxcbjwvUGFnZT5cIiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtcm9vdCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2FwcC5jb21wb25lbnQuaHRtbCcsXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHsgfVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlJztcclxuXHJcbmltcG9ydCB7IEFwcFJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL2FwcC1yb3V0aW5nLm1vZHVsZS50bnMnO1xyXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tICcuL2FwcC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBdXRvR2VuZXJhdGVkQ29tcG9uZW50IH0gZnJvbSAnLi9hdXRvLWdlbmVyYXRlZC9hdXRvLWdlbmVyYXRlZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQYXltZW50c0NvbXBvbmVudCB9IGZyb20gJy4vcGF5bWVudHMvcGF5bWVudHMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGF5bWVudE1ldGhvZENvbXBvbmVudCB9IGZyb20gJy4vcGF5bWVudC1tZXRob2QvcGF5bWVudC1tZXRob2QuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29ubmVjdENvbXBvbmVudCB9IGZyb20gJy4vY29ubmVjdC9jb25uZWN0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEhpc3RvcnlDb21wb25lbnQgfSBmcm9tICcuL2hpc3RvcnkvaGlzdG9yeS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSAnLi9ob21lL2hvbWUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTG9naW5Db21wb25lbnQgfSBmcm9tICcuL2xvZ2luL2xvZ2luLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IExvZ2lucm91dGVDb21wb25lbnQgfSBmcm9tICcuL2xvZ2lucm91dGUvbG9naW5yb3V0ZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOYXZpZ2F0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgUG9zdGluZ0NvbXBvbmVudCB9IGZyb20gJy4vcG9zdGluZy9wb3N0aW5nLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFNldHRpbmdzQ29tcG9uZW50IH0gZnJvbSAnLi9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBVcGRhdGVDb21wb25lbnQgfSBmcm9tICcuL3VwZGF0ZS91cGRhdGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi9kaWFsb2cvZGlhbG9nLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFNlYXJjaENvbXBvbmVudCB9IGZyb20gJy4vc2VhcmNoL3NlYXJjaC5jb21wb25lbnQnO1xyXG5cclxuaW1wb3J0IHsgTG9naW5EaXJlY3RpdmUgfSBmcm9tICcuL2xvZ2luLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IEhvbWVEaXJlY3RpdmUgfSBmcm9tICcuL2hvbWUuZGlyZWN0aXZlJztcclxuXHJcbmltcG9ydCB7IFBvc3RpbmdTZXJ2aWNlIH0gZnJvbSAnLi9wb3N0aW5nLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gJy4vdXNlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVHJhbnNmZXJTZXJ2aWNlIH0gZnJvbSAnLi9kYXRhdHJhbnNmZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IER5bmFtaWNBZGRTZXJ2aWNlIH0gZnJvbSAnLi9keW5hbWljLWFkZC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUGF5bWVudFNlcnZpY2UgfSBmcm9tICcuL3BheW1lbnQuc2VydmljZSc7XHJcbmltcG9ydCB7IFBsYWNlc0F1dG9jb21wbGV0ZVNlcnZpY2UgfSBmcm9tICcuL3BsYWNlcy1hdXRvY29tcGxldGUuc2VydmljZSc7XHJcbmltcG9ydCB7IEdvb2dsZU1hcHNTZXJ2aWNlIH0gZnJvbSAnLi9nb29nbGUtbWFwcy5zZXJ2aWNlJztcclxuXHJcbmltcG9ydCB7IE1vZGFsRGlhbG9nU2VydmljZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9tb2RhbC1kaWFsb2dcIjtcclxuXHJcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUsIEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQge01hdElucHV0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pbnB1dCc7XHJcbmltcG9ydCB7IEFnbUNvcmVNb2R1bGUgfSBmcm9tICdAYWdtL2NvcmUnO1xyXG5pbXBvcnQgeyBOZ3hQYXlQYWxNb2R1bGUgfSBmcm9tICduZ3gtcGF5cGFsJztcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlEYXRhRm9ybU1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktZGF0YWZvcm0vYW5ndWxhclwiO1xyXG5pbXBvcnQgeyBOZ3hCcmFpbnRyZWVNb2R1bGUgfSBmcm9tICduZ3gtYnJhaW50cmVlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgTWFza2VkVGV4dEZpZWxkTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1tYXNrZWQtdGV4dC1maWVsZC9hbmd1bGFyXCI7XHJcblxyXG4vLyBVbmNvbW1lbnQgYW5kIGFkZCB0byBOZ01vZHVsZSBpbXBvcnRzIGlmIHlvdSBuZWVkIHRvIHVzZSB0d28td2F5IGJpbmRpbmdcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtcyc7XHJcblxyXG4vLyBVbmNvbW1lbnQgYW5kIGFkZCB0byBOZ01vZHVsZSBpbXBvcnRzICBpZiB5b3UgbmVlZCB0byB1c2UgdGhlIEhUVFAgd3JhcHBlclxyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cC1jbGllbnQnO1xyXG5pbXBvcnQgeyBGbG9hdEJ0bkNvbXBvbmVudCB9IGZyb20gJy4vZmxvYXQtYnRuL2Zsb2F0LWJ0bi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBZGRNb2RhbENvbXBvbmVudCB9IGZyb20gJy4vYWRkLW1vZGFsL2FkZC1tb2RhbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBMb2NhdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vbG9jYXRpb24vbG9jYXRpb24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgQWRkUGF5bWVudENvbXBvbmVudCB9IGZyb20gJy4vYWRkLXBheW1lbnQvYWRkLXBheW1lbnQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQWRkQ2FyZFBheW1lbnRDb21wb25lbnQgfSBmcm9tICcuL2FkZC1jYXJkLXBheW1lbnQvYWRkLWNhcmQtcGF5bWVudC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQYXltZW50SW5mb0NvbXBvbmVudCB9IGZyb20gJy4vcGF5bWVudC1pbmZvL3BheW1lbnQtaW5mby5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb25maXJtYXRpb25Db21wb25lbnQgfSBmcm9tICcuL2NvbmZpcm1hdGlvbi9jb25maXJtYXRpb24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgTWVzc2FnZU1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi9tZXNzYWdlLW1vZGFsL21lc3NhZ2UtbW9kYWwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgV2VsY29tZUNvbXBvbmVudCB9IGZyb20gJy4vd2VsY29tZS93ZWxjb21lLmNvbXBvbmVudCc7XHJcbmltcG9ydCAqIGFzIGFwcGxpY2F0aW9uIGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb24nO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGYWNlYm9va01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtZmFjZWJvb2svYW5ndWxhclwiO1xyXG5pbXBvcnQgKiBhcyBuc0ZhY2Vib29rIGZyb20gJ25hdGl2ZXNjcmlwdC1mYWNlYm9vayc7XHJcbmltcG9ydCB7IERhdGVQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgUG9zdGluZ0luZm9Db21wb25lbnQgfSBmcm9tICcuL3Bvc3RpbmctaW5mby9wb3N0aW5nLWluZm8uY29tcG9uZW50JztcclxuaW1wb3J0IHsgaXNJT1MgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtJztcclxuZGVjbGFyZSB2YXIgR01TU2VydmljZXM6IGFueTtcclxuaW1wb3J0IHsgU2V0dGluZ3Nmb3JtQ29tcG9uZW50IH0gZnJvbSAnLi9zZXR0aW5nc2Zvcm0vc2V0dGluZ3Nmb3JtLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFJlYXV0aENvbXBvbmVudCB9IGZyb20gJy4vcmVhdXRoL3JlYXV0aC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDaGF0Q29tcG9uZW50IH0gZnJvbSAnLi9jaGF0L2NoYXQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ2hhdExpc3RDb21wb25lbnQgfSBmcm9tICcuL2NoYXQtbGlzdC9jaGF0LWxpc3QuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVmlld0ltYWdlQ29tcG9uZW50IH0gZnJvbSAnLi92aWV3LWltYWdlL3ZpZXctaW1hZ2UuY29tcG9uZW50JztcclxuaW1wb3J0IHsgcmVnaXN0ZXJFbGVtZW50IH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvZWxlbWVudC1yZWdpc3RyeSc7XHJcbmltcG9ydCB7IEZvcmdldEZvcm1Db21wb25lbnQgfSBmcm9tICcuL2ZvcmdldC1mb3JtL2ZvcmdldC1mb3JtLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFROU0ltYWdlQ2FjaGVJdE1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1pbWFnZS1jYWNoZS1pdC9hbmd1bGFyJztcclxuXHJcbnJlZ2lzdGVyRWxlbWVudCgnRmFiJywgKCkgPT4gcmVxdWlyZSgnQG5zdHVkaW8vbmF0aXZlc2NyaXB0LWZsb2F0aW5nYWN0aW9uYnV0dG9uJykuRmFiKTtcclxucmVnaXN0ZXJFbGVtZW50KFwiUHVsbFRvUmVmcmVzaFwiLCAoKSA9PiByZXF1aXJlKFwiQG5zdHVkaW8vbmF0aXZlc2NyaXB0LXB1bGx0b3JlZnJlc2hcIikuUHVsbFRvUmVmcmVzaCk7XHJcbnJlZ2lzdGVyRWxlbWVudCgnSW1hZ2Vab29tJywgKCkgPT4gcmVxdWlyZSgnbmF0aXZlc2NyaXB0LWltYWdlLXpvb20nKS5JbWFnZVpvb20pO1xyXG5cclxuXHJcblxyXG4vLyByZXF1aXJlKCduYXRpdmVzY3JpcHQtbm9kZWlmeScpXHJcbi8vIGltcG9ydCB7IEFtcGxpZnlBbmd1bGFyTW9kdWxlLCBBbXBsaWZ5U2VydmljZSB9IGZyb20gJ2F3cy1hbXBsaWZ5LWFuZ3VsYXInO1xyXG5cclxuLy8gaW1wb3J0IHsgQW5ndWxhckZpcmVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9maXJlJztcclxuLy8gaW1wb3J0IHsgQW5ndWxhckZpcmVzdG9yZU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2ZpcmUvZmlyZXN0b3JlJztcclxuLy8gaW1wb3J0IHsgQW5ndWxhckZpcmVTdG9yYWdlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZmlyZS9zdG9yYWdlJztcclxuLy8gaW1wb3J0IHsgQW5ndWxhckZpcmVBdXRoTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZmlyZS9hdXRoJztcclxuLy8gaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tICcuLi9lbnZpcm9ubWVudHMvZW52aXJvbm1lbnQnO1xyXG5pZiAoaXNJT1MpIHsgXHJcbiAgR01TU2VydmljZXMucHJvdmlkZUFQSUtleShcIkFJemFTeUFJVHhTMWptZjhQTXRhelJndVdjQWZXUXhXMWtQT29ZZ1wiKTtcclxufVxyXG5cclxuYXBwbGljYXRpb24ub24oYXBwbGljYXRpb24ubGF1bmNoRXZlbnQsIGZ1bmN0aW9uIChhcmdzKSB7XHJcbiAgICBuc0ZhY2Vib29rLmluaXQoXCIyMjcyMTI5NjQ5Njc3NzQ3XCIpO1xyXG59KTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBBcHBDb21wb25lbnQsXHJcbiAgICBMb2dpbkRpcmVjdGl2ZSxcclxuICAgIExvZ2luQ29tcG9uZW50LFxyXG4gICAgSG9tZUNvbXBvbmVudCxcclxuICAgIEhvbWVEaXJlY3RpdmUsXHJcbiAgICBIaXN0b3J5Q29tcG9uZW50LFxyXG4gICAgU2V0dGluZ3NDb21wb25lbnQsXHJcbiAgICBQb3N0aW5nQ29tcG9uZW50LFxyXG4gICAgVXBkYXRlQ29tcG9uZW50LFxyXG4gICAgQ29ubmVjdENvbXBvbmVudCxcclxuICAgIExvZ2lucm91dGVDb21wb25lbnQsXHJcbiAgICBEaWFsb2dDb21wb25lbnQsXHJcbiAgICBOYXZpZ2F0aW9uQ29tcG9uZW50LFxyXG4gICAgQXV0b0dlbmVyYXRlZENvbXBvbmVudCxcclxuICAgIFBheW1lbnRzQ29tcG9uZW50LFxyXG4gICAgUGF5bWVudE1ldGhvZENvbXBvbmVudCxcclxuICAgIFNlYXJjaENvbXBvbmVudCxcclxuICAgIEZsb2F0QnRuQ29tcG9uZW50LFxyXG4gICAgQWRkTW9kYWxDb21wb25lbnQsXHJcbiAgICBMb2NhdGlvbkNvbXBvbmVudCxcclxuICAgIEFkZFBheW1lbnRDb21wb25lbnQsXHJcbiAgICBBZGRDYXJkUGF5bWVudENvbXBvbmVudCxcclxuICAgIFBheW1lbnRJbmZvQ29tcG9uZW50LFxyXG4gICAgQ29uZmlybWF0aW9uQ29tcG9uZW50LFxyXG4gICAgTWVzc2FnZU1vZGFsQ29tcG9uZW50LFxyXG4gICAgV2VsY29tZUNvbXBvbmVudCxcclxuICAgIFBvc3RpbmdJbmZvQ29tcG9uZW50LFxyXG4gICAgU2V0dGluZ3Nmb3JtQ29tcG9uZW50LFxyXG4gICAgUmVhdXRoQ29tcG9uZW50LFxyXG4gICAgQ2hhdENvbXBvbmVudCxcclxuICAgIENoYXRMaXN0Q29tcG9uZW50LFxyXG4gICAgVmlld0ltYWdlQ29tcG9uZW50LFxyXG4gICAgRm9yZ2V0Rm9ybUNvbXBvbmVudCxcclxuICBdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcclxuICAgIEFwcFJvdXRpbmdNb2R1bGUsXHJcbiAgICBOYXRpdmVTY3JpcHRIdHRwQ2xpZW50TW9kdWxlLFxyXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcclxuICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxyXG4gICAgTWF0SW5wdXRNb2R1bGUsXHJcbiAgICBBZ21Db3JlTW9kdWxlLmZvclJvb3Qoe1xyXG4gICAgICBhcGlLZXk6ICdBSXphU3lBSVR4UzFqbWY4UE10YXpSZ3VXY0FmV1F4VzFrUE9vWWcnXHJcbiAgICB9KSxcclxuICAgIE5neFBheVBhbE1vZHVsZSxcclxuICAgIE5hdGl2ZVNjcmlwdFVJRGF0YUZvcm1Nb2R1bGUsXHJcbiAgICAvLyBOZ3hCcmFpbnRyZWVNb2R1bGUsXHJcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxyXG4gICAgTmF0aXZlU2NyaXB0RmFjZWJvb2tNb2R1bGUsXHJcbiAgICBNYXNrZWRUZXh0RmllbGRNb2R1bGUsXHJcbiAgICBUTlNJbWFnZUNhY2hlSXRNb2R1bGVcclxuICAgIC8vIEFuZ3VsYXJGaXJlTW9kdWxlLmluaXRpYWxpemVBcHAoZW52aXJvbm1lbnQuZmlyZWJhc2UpLFxyXG4gICAgLy8gQW5ndWxhckZpcmVzdG9yZU1vZHVsZSwgLy8gaW1wb3J0cyBmaXJlYmFzZS9maXJlc3RvcmUsIG9ubHkgbmVlZGVkIGZvciBkYXRhYmFzZSBmZWF0dXJlc1xyXG4gICAgLy8gQW5ndWxhckZpcmVBdXRoTW9kdWxlLCAvLyBpbXBvcnRzIGZpcmViYXNlL2F1dGgsIG9ubHkgbmVlZGVkIGZvciBhdXRoIGZlYXR1cmVzLFxyXG4gICAgLy8gQW5ndWxhckZpcmVTdG9yYWdlTW9kdWxlIC8vIGltcG9ydHMgZmlyZWJhc2Uvc3RvcmFnZSBvbmx5IG5lZWRlZCBmb3Igc3RvcmFnZSBmZWF0dXJlc1xyXG4gIF0sXHJcbiAgcHJvdmlkZXJzOiBbUG9zdGluZ1NlcnZpY2UsIFRyYW5zZmVyU2VydmljZSwgRHluYW1pY0FkZFNlcnZpY2UsIFVzZXJTZXJ2aWNlLCBQYXltZW50U2VydmljZSwgTW9kYWxEaWFsb2dTZXJ2aWNlLCBQbGFjZXNBdXRvY29tcGxldGVTZXJ2aWNlLCBcclxuICBEYXRlUGlwZSwgR29vZ2xlTWFwc1NlcnZpY2VdLFxyXG4gIGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF0sXHJcbiAgZW50cnlDb21wb25lbnRzOiBbUG9zdGluZ0NvbXBvbmVudCwgUGF5bWVudE1ldGhvZENvbXBvbmVudCwgQWRkTW9kYWxDb21wb25lbnQsIExvY2F0aW9uQ29tcG9uZW50LCBBZGRQYXltZW50Q29tcG9uZW50LCBBZGRDYXJkUGF5bWVudENvbXBvbmVudCwgXHJcbiAgUGF5bWVudEluZm9Db21wb25lbnQsIENvbmZpcm1hdGlvbkNvbXBvbmVudCwgU2V0dGluZ3Nmb3JtQ29tcG9uZW50LCBSZWF1dGhDb21wb25lbnQsIEZvcmdldEZvcm1Db21wb25lbnRdLFxyXG4gIHNjaGVtYXM6IFtOT19FUlJPUlNfU0NIRU1BXVxyXG59KVxyXG4vKlxyXG5QYXNzIHlvdXIgYXBwbGljYXRpb24gbW9kdWxlIHRvIHRoZSBib290c3RyYXBNb2R1bGUgZnVuY3Rpb24gbG9jYXRlZCBpbiBtYWluLnRzIHRvIHN0YXJ0IHlvdXIgYXBwXHJcbiovXHJcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCIvKiBBZGQgbW9iaWxlIHN0eWxlcyBmb3IgdGhlIGNvbXBvbmVudCBoZXJlLiAgKi9cXHJcXG5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8QnV0dG9uIHRleHQ9XFxcImF1dG8tZ2VuZXJhdGVkIHdvcmtzIVxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCI+PC9CdXR0b24+XCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtYXV0by1nZW5lcmF0ZWQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9hdXRvLWdlbmVyYXRlZC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vYXV0by1nZW5lcmF0ZWQuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBdXRvR2VuZXJhdGVkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG5cclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLyogQWRkIG1vYmlsZSBzdHlsZXMgZm9yIHRoZSBjb21wb25lbnQgaGVyZS4gICovXFxyXFxuTGFiZWwge1xcclxcblxcdHRleHQtYWxpZ246IGxlZnQ7XFxyXFxufVxcclxcblxcclxcbi5uYW1lLWxhYmVsIHtcXHJcXG5cXHRtYXJnaW4tdG9wOiAxNjtcXHJcXG5cXHRtYXJnaW4tbGVmdDogMTg7XFxyXFxuXFx0Y29sb3I6IGJsYWNrO1xcclxcblxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuXFx0Zm9udC1zaXplOiAxNztcXHJcXG59XFxyXFxuXFxyXFxuLmluZm8tbGFiZWwge1xcclxcblxcdG1hcmdpbi10b3A6IDQ7XFxyXFxuXFx0bWFyZ2luLWxlZnQ6IDE4O1xcclxcblxcdG1hcmdpbi1ib3R0b206IDE2O1xcclxcblxcdGNvbG9yOiAjNjk2OTY5O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvZmlsZS1waWN0dXJlIHtcXHJcXG5cXHRoZWlnaHQ6IDYwO1xcclxcblxcdHdpZHRoOiA2MDtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAzMDtcXHJcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xcclxcblxcdG1hcmdpbi1sZWZ0OiAxNjtcXHJcXG5cXHRtYXJnaW4tdG9wOiAxNDtcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiAxNDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lc3NhZ2Uge1xcclxcblxcdGJvcmRlci1ib3R0b20td2lkdGg6IDE7XFxyXFxuXFx0Ym9yZGVyLWNvbG9yOiAjZjFmMWYxO1xcclxcblxcdG1hcmdpbi10b3A6IDUwO1xcclxcblxcdG1hcmdpbi1ib3R0b206IDUwO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVmcmVzaCB7XFxyXFxuXFx0Y29sb3I6ICNhYzAwZTY7XFxyXFxufVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxQYWdlLmFjdGlvbkJhcj5cXHJcXG4gICAgPEFjdGlvbkJhciB0aXRsZT1cXFwiTWVzc2FnZXNcXFwiPlxcclxcbiAgICBcXHQ8TmF2aWdhdGlvbkJ1dHRvbiB0ZXh0PVxcXCJHbyBCYWNrXFxcIiBhbmRyb2lkLnN5c3RlbUljb249XFxcImljX21lbnVfYmFja1xcXCIgKHRhcCk9XFxcIm9uTmF2QnRuVGFwKClcXFwiPjwvTmF2aWdhdGlvbkJ1dHRvbj5cXHJcXG4gICAgPC9BY3Rpb25CYXI+XFxyXFxuPC9QYWdlLmFjdGlvbkJhcj5cXHJcXG5cXHJcXG48UHVsbFRvUmVmcmVzaCAocmVmcmVzaCk9XFxcInJlZnJlc2hMaXN0KCRldmVudClcXFwiIGNsYXNzPVxcXCJyZWZyZXNoXFxcIj5cXHJcXG5cXHQ8TGlzdFZpZXcgW2l0ZW1zXT1cXFwibWVzc2FnZXNcXFwiIChpdGVtVGFwKT1cXFwib25JdGVtVGFwKCRldmVudClcXFwiICNsaXN0VmlldyBpZD1cXFwibGlzdFZpZXdcXFwiPlxcclxcblxcdCAgICA8bmctdGVtcGxhdGUgbGV0LWl0ZW09XFxcIml0ZW1cXFwiIGxldC1pPVxcXCJpbmRleFxcXCIgbGV0LW9kZD1cXFwib2RkXFxcIiBsZXQtZXZlbj1cXFwiZXZlblxcXCI+XFxyXFxuXFx0ICAgICAgICA8U3RhY2tMYXlvdXQgW2NsYXNzLm9kZF09XFxcIm9kZFxcXCIgW2NsYXNzLmV2ZW5dPVxcXCJldmVuXFxcIiBjbGFzcz1cXFwibWVzc2FnZVxcXCIgb3JpZW50YXRpb249XFxcImhvcml6b250YWxcXFwiPlxcclxcblxcdCAgICAgICAgXFx0ICBcXHQ8SW1hZ2VDYWNoZUl0IFtzcmNdPVxcXCJpdGVtLnBmcFNvdXJjZVxcXCIgY2xhc3M9XFxcInByb2ZpbGUtcGljdHVyZVxcXCIgc3RyZXRjaD1cXFwiYXNwZWN0Rml0XFxcIj48L0ltYWdlQ2FjaGVJdD5cXHJcXG5cXHQgICAgICAgIFxcdCAgXFx0PFN0YWNrTGF5b3V0PlxcclxcblxcdFxcdCAgICAgICAgICAgICAgXFx0PExhYmVsIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiBpZD1cXFwicG9zdC1uYW1lXFxcIiBjbGFzcz1cXFwibmFtZS1sYWJlbFxcXCIgW3RleHRdPVxcXCJpdGVtLmRpc3BsYXlOYW1lXFxcIj48L0xhYmVsPlxcclxcblxcdFxcdCAgICAgICAgICAgICAgXFx0PExhYmVsIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiBpZD1cXFwicG9zdC1pbmZvXFxcIiBjbGFzcz1cXFwiaW5mby1sYWJlbFxcXCIgW3RleHRdPVxcXCJpdGVtLm1lc3NhZ2VcXFwiPjwvTGFiZWw+XFxyXFxuXFx0XFx0ICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXHJcXG5cXHQgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxyXFxuXFx0ICAgIDwvbmctdGVtcGxhdGU+XFxyXFxuXFx0PC9MaXN0Vmlldz5cXHJcXG48L1B1bGxUb1JlZnJlc2g+XCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgRWxlbWVudFJlZiwgVmlld0NoaWxkLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRyYW5zZmVyU2VydmljZSB9IGZyb20gJy4uL2RhdGF0cmFuc2Zlci5zZXJ2aWNlJztcclxuaW1wb3J0ICogYXMgZmlyZWJhc2UgZnJvbSAnbmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZSc7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBMb2dpbmNoZWNrU2VydmljZSB9IGZyb20gJy4uL2xvZ2luY2hlY2suc2VydmljZS50bnMnO1xyXG5pbXBvcnQgeyBDaGF0TWVzc2FnZSB9IGZyb20gJy4uL21vZGVscy9jaGF0LW1lc3NhZ2UubW9kZWwnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlQXJyYXkgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS1hcnJheSc7XHJcbmltcG9ydCB7IExpc3RWaWV3IH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9saXN0LXZpZXcnO1xyXG5cclxuY2xhc3MgTWVzc2FnZUl0ZW0ge1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBjaGF0TWVzc2FnZTogQ2hhdE1lc3NhZ2UsIHB1YmxpYyBsYXN0Q2hhdDogc3RyaW5nLCBwdWJsaWMgY2hhdElkOiBzdHJpbmcsIHB1YmxpYyBwZnBTb3VyY2U6IHN0cmluZywgXHJcbiAgICBwdWJsaWMgZGlzcGxheU5hbWU6IHN0cmluZywgcHVibGljIG1lc3NhZ2U6IHN0cmluZykge31cclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtY2hhdC1saXN0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY2hhdC1saXN0LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jaGF0LWxpc3QuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDaGF0TGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdHJhbnNmZXJTZXJ2aWNlOiBUcmFuc2ZlclNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zLCBwcml2YXRlIGxvZ2luY2hlY2tTZXJ2aWNlOiBMb2dpbmNoZWNrU2VydmljZSxcclxuICBcdHByaXZhdGUgdmNSZWY6IFZpZXdDb250YWluZXJSZWYpIHsgfVxyXG5cclxuICBtZXNzYWdlcyA9IG5ldyBPYnNlcnZhYmxlQXJyYXk8TWVzc2FnZUl0ZW0+KCk7XHJcbiAgcmVmcmVzaE1lc3NhZ2VzID0gbmV3IE9ic2VydmFibGVBcnJheTxNZXNzYWdlSXRlbT4oKTtcclxuICB1c2VySWQ6IHN0cmluZztcclxuICBjaGF0SWRzOiBbc3RyaW5nXTtcclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgXHR0aGlzLnVzZXJJZCA9IHRoaXMubG9naW5jaGVja1NlcnZpY2UuZ2V0VXNlcigpO1xyXG4gICAgdGhpcy5sb2FkTWVzc2FnZXMoKTtcclxuICB9XHJcblxyXG4gIGxvYWRNZXNzYWdlcyhhcmdzPW51bGwpIHtcclxuICBcdGZpcmViYXNlLmZpcmVzdG9yZS5jb2xsZWN0aW9uKCd1c2VycycpLmRvYyh0aGlzLnVzZXJJZCkuZ2V0KCkudGhlbigoZG9jKSA9PiB7XHJcbiAgXHRcdHRoaXMuY2hhdElkcyA9IGRvYy5kYXRhKCkuY2hhdHM7XHJcbiAgICB9KS50aGVuKGFzeW5jIChyZXMpID0+IHtcclxuICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHRoaXMuY2hhdElkcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IGNoYXRQcm9taXNlID0gYXdhaXQgZmlyZWJhc2UuZmlyZXN0b3JlLmNvbGxlY3Rpb24oJ2NoYXRzJykuZG9jKHRoaXMuY2hhdElkc1tpXSkuZ2V0KCkudGhlbihhc3luYyAoZG9jKSA9PiB7XHJcbiAgICAgICAgICBsZXQgZGF0YSA9IGRvYy5kYXRhKCk7XHJcbiAgICAgICAgICBsZXQgZG9jSWQgPSBkb2MuaWQ7XHJcbiAgICAgICAgICB2YXIgY2hhdE5hbWUgPSAnWW91LCAnO1xyXG4gICAgICAgICAgdmFyIG5vblVzZXJJbmRleCA9IDA7XHJcbiAgICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgZGF0YS51c2Vycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZihkYXRhLnVzZXJzW2ldLnVpZCAhPT10aGlzLnVzZXJJZCkge1xyXG4gICAgICAgICAgICAgIG5vblVzZXJJbmRleCA9IGk7XHJcbiAgICAgICAgICAgICAgaWYoaSA9PT0gZGF0YS51c2Vycy5sZW5ndGggLSAxKVxyXG4gICAgICAgICAgICAgICAgY2hhdE5hbWUgKz0gJ2FuZCAnICsgZGF0YS51c2Vyc1tpXS5kaXNwbGF5TmFtZTtcclxuICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICBjaGF0TmFtZSArPSBkYXRhLnVzZXJzW2ldLmRpc3BsYXlOYW1lICsgJywgJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYoZGF0YS5jaGF0c1swXSkge1xyXG4gICAgICAgICAgICBsZXQgbGFzdE1zZyA9IGRhdGEuY2hhdHNbZGF0YS5jaGF0cy5sZW5ndGggLSAxXTtcclxuICAgICAgICAgICAgY29uc3QgYWRkUHJvbWlzZSA9IGF3YWl0IHRoaXMuYWRkTWVzc2FnZShsYXN0TXNnLCBkYXRhLCBkb2NJZCwgY2hhdE5hbWUsIG5vblVzZXJJbmRleCk7IFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLy8gY29uc3QgdW5zdWJzY3JpYmUgPSBmaXJlYmFzZS5maXJlc3RvcmUuY29sbGVjdGlvbignY2hhdHMnKS5kb2ModGhpcy5jaGF0SWRzW2ldKS5vblNuYXBzaG90KHtpbmNsdWRlTWV0YWRhdGFDaGFuZ2VzOiB0cnVlfSwgZG9jID0+IHtcclxuICAgICAgICAvLyAgIHRoaXMucmVmcmVzaExpc3QobnVsbCk7XHJcbiAgICAgICAgLy8gfSlcclxuICAgICAgfVxyXG4gICAgICBpZihhcmdzICE9IG51bGwpXHJcbiAgICAgIHtcclxuICAgICAgICB2YXIgcHVsbFJlZnJlc2ggPSBhcmdzLm9iamVjdDtcclxuICAgICAgICBwdWxsUmVmcmVzaC5yZWZyZXNoaW5nID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5yZWZyZXNoTWVzc2FnZXMuc29ydChmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgICAgIGlmKGEubGFzdENoYXQgPiBiLmxhc3RDaGF0KVxyXG4gICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgIGVsc2UgaWYoYi5sYXN0Q2hhdCA8IGEubGFzdENoYXQpXHJcbiAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICByZXR1cm4gMDtcclxuICAgICAgfSlcclxuICAgICAgdGhpcy5tZXNzYWdlcy5zcGxpY2UoMCk7XHJcbiAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLnJlZnJlc2hNZXNzYWdlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHRoaXMubWVzc2FnZXMucHVzaCh0aGlzLnJlZnJlc2hNZXNzYWdlcy5nZXRJdGVtKGkpKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnJlZnJlc2hNZXNzYWdlcy5zcGxpY2UoMCk7XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgYWRkTWVzc2FnZShsYXN0TXNnLCBkYXRhLCBkb2NJZCwgY2hhdE5hbWUsIG5vblVzZXJJbmRleCkge1xyXG4gICAgaWYobGFzdE1zZy5pbWdTb3VyY2UgIT09IFwiXCIpIHtcclxuICAgICAgbGFzdE1zZy5tZXNzYWdlID0gXCJTZW50IGEgcGhvdG9cIjtcclxuICAgIH1cclxuICAgIGlmKGxhc3RNc2cudXNlcklkICE9PSB0aGlzLnVzZXJJZCkge1xyXG4gICAgICBjb25zdCB1c2VyUHJvbWlzZSA9IGF3YWl0IGZpcmViYXNlLmZpcmVzdG9yZS5jb2xsZWN0aW9uKCd1c2VycycpLmRvYyhsYXN0TXNnLnVzZXJJZCkuZ2V0KCkudGhlbigoZG9jKSA9PiB7XHJcbiAgICAgICAgbGV0IHByb2ZpbGVTb3VyY2UgPSBkb2MuZGF0YSgpLnByb2ZpbGVfc291cmNlO1xyXG4gICAgICAgIGlmKGRhdGEudXNlcnMubGVuZ3RoID09PSAyKVxyXG4gICAgICAgICAgdGhpcy5yZWZyZXNoTWVzc2FnZXMucHVzaChuZXcgTWVzc2FnZUl0ZW0obGFzdE1zZywgZGF0YS5sYXN0Q2hhdCwgZG9jSWQsIHByb2ZpbGVTb3VyY2UsIGxhc3RNc2cuZGlzcGxheU5hbWUsIGRvYy5kYXRhKCkuZmlyc3RfbmFtZSArICc6ICcgKyBsYXN0TXNnLm1lc3NhZ2UpKTtcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIHRoaXMucmVmcmVzaE1lc3NhZ2VzLnB1c2gobmV3IE1lc3NhZ2VJdGVtKGxhc3RNc2csIGRhdGEubGFzdENoYXQsIGRvY0lkLCBwcm9maWxlU291cmNlLCBjaGF0TmFtZSwgZG9jLmRhdGEoKS5maXJzdF9uYW1lICsgJzogJyArIGxhc3RNc2cubWVzc2FnZSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfSlcclxuICAgICAgcmV0dXJuIHRoaXMucmVmcmVzaE1lc3NhZ2VzO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIGNvbnN0IHVzZXJQcm9taXNlID0gYXdhaXQgZmlyZWJhc2UuZmlyZXN0b3JlLmNvbGxlY3Rpb24oJ3VzZXJzJykuZG9jKGRhdGEudXNlcnNbbm9uVXNlckluZGV4XS51aWQpLmdldCgpLnRoZW4oKGRvYykgPT4ge1xyXG4gICAgICAgIGxldCBwcm9maWxlU291cmNlID0gZG9jLmRhdGEoKS5wcm9maWxlX3NvdXJjZTtcclxuICAgICAgICBpZihkYXRhLnVzZXJzLmxlbmd0aCA9PT0gMilcclxuICAgICAgICAgIHRoaXMucmVmcmVzaE1lc3NhZ2VzLnB1c2gobmV3IE1lc3NhZ2VJdGVtKGxhc3RNc2csIGRhdGEubGFzdENoYXQsIGRvY0lkLCBwcm9maWxlU291cmNlLCBcclxuICAgICAgICAgICAgZG9jLmRhdGEoKS5maXJzdF9uYW1lICsgJyAnICsgZG9jLmRhdGEoKS5sYXN0X25hbWUsICdZb3U6ICcgKyBsYXN0TXNnLm1lc3NhZ2UpKTtcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIHRoaXMucmVmcmVzaE1lc3NhZ2VzLnB1c2gobmV3IE1lc3NhZ2VJdGVtKGxhc3RNc2csIGRhdGEubGFzdENoYXQsIGRvY0lkLCBwcm9maWxlU291cmNlLCBcclxuICAgICAgICAgICAgY2hhdE5hbWUsICdZb3U6ICcgKyBsYXN0TXNnLm1lc3NhZ2UpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH0pXHJcbiAgICAgIHJldHVybiB0aGlzLnJlZnJlc2hNZXNzYWdlcztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlZnJlc2hMaXN0KGFyZ3MpIHtcclxuICAgIHRoaXMubG9hZE1lc3NhZ2VzKGFyZ3MpO1xyXG4gIH1cclxuXHJcbiAgb25JdGVtVGFwKGFyZ3MpIHtcclxuICBcdGxldCBjaGF0SWQgPSB0aGlzLm1lc3NhZ2VzLmdldEl0ZW0oYXJncy5pbmRleCkuY2hhdElkO1xyXG4gIFx0dGhpcy50cmFuc2ZlclNlcnZpY2Uuc2V0RGF0YShjaGF0SWQpO1xyXG4gIFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUoWydjaGF0J10pXHJcbiAgfVxyXG5cclxuICBvbk5hdkJ0blRhcCgpIHtcclxuICAgIGlmKHRoaXMucm91dGVyLmNhbkdvQmFjaylcclxuICAgICAgdGhpcy5yb3V0ZXIuYmFjaygpO1xyXG4gICAgZWxzZVxyXG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ25hdmlnYXRpb24nXSwge2NsZWFySGlzdG9yeTogdHJ1ZX0pXHJcbiAgfVxyXG5cclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLyogQWRkIG1vYmlsZSBzdHlsZXMgZm9yIHRoZSBjb21wb25lbnQgaGVyZS4gICovXFxyXFxuQnV0dG9uIHtcXHJcXG4gICAgcGFkZGluZzogNTtcXHJcXG4gICAgbWFyZ2luOiA1O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkb2RnZXJibHVlO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGhlaWdodDogNDA7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDU7XFxyXFxufVxcclxcblxcclxcbi5jaGF0LWJ1dHRvbiB7XFxyXFxuXFx0cGFkZGluZy1sZWZ0OiA1O1xcclxcblxcdHBhZGRpbmctcmlnaHQ6IDU7XFxyXFxuXFx0bWFyZ2luOiA1O1xcclxcblxcdGhlaWdodDogMjA7XFxyXFxuXFx0d2lkdGg6IDIwO1xcclxcbn1cXHJcXG5cXHJcXG4uaW1nLWJ1dHRvbiB7XFxyXFxuXFx0bWFyZ2luOiA1O1xcclxcblxcdG1hcmdpbi1sZWZ0OiAzO1xcclxcblxcdG1hcmdpbi1yaWdodDogNztcXHJcXG5cXHRoZWlnaHQ6IDIwO1xcclxcblxcdHdpZHRoOiAyMDtcXHJcXG59XFxyXFxuXFxyXFxuLmNoYXQtdGV4dC1maWVsZCB7XFxyXFxuICAgIHBhZGRpbmc6IDU7IFxcclxcbiAgICAvKmJhY2tncm91bmQtY29sb3I6IHdoaXRlOyAqL1xcclxcbiAgICAvKmJvcmRlci1yYWRpdXM6IDQ7Ki9cXHJcXG4gICAgLypib3R0b20tYm9yZGVyLWNvbG9yOiAjNjk2OTY5OyovXFxyXFxufVxcclxcblxcclxcbi5hdXRob3ItaW1nIHtcXHJcXG4gICAgbWFyZ2luOiAwIDUgNSA1O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xcclxcbiAgICB3aWR0aDogNDA7XFxyXFxuICAgIGhlaWdodDogNDA7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDIwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxyXFxufVxcclxcblxcclxcbi5pbWcge1xcclxcblxcdG1hcmdpbjogNTtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAxMDtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxyXFxufVxcclxcblxcclxcbi50aGVpcnNJbWcge1xcclxcblxcdG1hcmdpbjogNTtcXHJcXG5cXHRtYXJnaW4tbGVmdDogNTI7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMTA7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcclxcbn1cXHJcXG5cXHJcXG4ubWluZSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhYzAwZTY7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgcGFkZGluZzogODtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAxNDtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMTQ7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMTA7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDE1O1xcclxcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNTtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTY7XFxyXFxuICAgIG1heC13aWR0aDogNjAlO1xcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgICAvKm1hcmdpbi1ib3R0b206IDEyOyovXFxyXFxufVxcclxcblxcclxcbi5taW5lQ29udGludWF0aW9uIHtcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiAwO1xcclxcblxcdGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxNTtcXHJcXG59XFxyXFxuXFxyXFxuLm1pbmVDb250aW51YXRpb25HcmlkIHtcXHJcXG5cXHRmb250LXNpemU6IDE0O1xcclxcbiAgICBwYWRkaW5nOiA1O1xcclxcblxcdHBhZGRpbmctdG9wOiAwO1xcclxcblxcdHBhZGRpbmctYm90dG9tOiAxO1xcclxcbn1cXHJcXG5cXHJcXG4ubWluZVRpbWUge1xcclxcblxcdG1hcmdpbi1yaWdodDogMTA7XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTogNTtcXHJcXG59XFxyXFxuXFxyXFxuLnRoZWlyc1RpbWUge1xcclxcblxcdG1hcmdpbi1sZWZ0OiA1MjtcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiA1O1xcclxcbn1cXHJcXG5cXHJcXG4udGltZSB7XFxyXFxuXFx0dmlzaWJpbGl0eTogY29sbGFwc2U7XFxyXFxuXFx0ZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRoZWlycyB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XFxyXFxuICAgIGNvbG9yOiAjMzMzO1xcclxcbiAgICBwYWRkaW5nOiA3O1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDE0O1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTU7XFxyXFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDU7XFxyXFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxNTtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiA0MDtcXHJcXG4gICAgZm9udC1zaXplOiAxNjtcXHJcXG4gICAgbWF4LXdpZHRoOiA2MCU7XFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICAgIC8qbWFyZ2luLWJvdHRvbTogMTI7Ki9cXHJcXG59XFxyXFxuXFxyXFxuLnRoZWlyc0NvbnRpbnVhdGlvbiB7XFxyXFxuXFx0bWFyZ2luLWxlZnQ6IDUyO1xcclxcblxcdG1hcmdpbi1ib3R0b206IDA7XFxyXFxuXFx0Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTU7XFxyXFxufVxcclxcblxcclxcbi50aGVpcnNDb250aW51YXRpb25HcmlkIHtcXHJcXG5cXHRmb250LXNpemU6IDE0O1xcclxcbiAgICBwYWRkaW5nOiA1O1xcclxcblxcdHBhZGRpbmctdG9wOiAwO1xcclxcblxcdHBhZGRpbmctYm90dG9tOiAxO1xcclxcbn1cXHJcXG5cXHJcXG4uZ3JpZCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTQ7XFxyXFxuICAgIHBhZGRpbmc6IDU7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAwO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogODtcXHJcXG59XFxyXFxuXFxyXFxuLmNoYXQtYm94LWxheW91dCB7XFxyXFxuXFx0Ym9yZGVyLWNvbG9yOiAjZjFmMWYxO1xcclxcblxcdGJvcmRlci10b3Atd2lkdGg6IDE7XFxyXFxufVxcclxcblxcclxcbi5hY3Rpdml0eS1pbmRpY2F0b3Ige1xcclxcbiAgY29sb3I6ICNhYzAwZTY7XFxyXFxufVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxQYWdlLmFjdGlvbkJhcj5cXHJcXG4gICAgPEFjdGlvbkJhciB0aXRsZT1cXFwie3sgY2hhdE5hbWUgfX1cXFwiIGFuZHJvaWQ6aG9yaXpvbnRhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIiBpb3M6aG9yaXpvbnRhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIj5cXHJcXG4gICAgXFx0PE5hdmlnYXRpb25CdXR0b24gdGV4dD1cXFwiR28gQmFja1xcXCIgYW5kcm9pZC5zeXN0ZW1JY29uPVxcXCJpY19tZW51X2JhY2tcXFwiICh0YXApPVxcXCJvbk5hdkJ0blRhcCgpXFxcIj48L05hdmlnYXRpb25CdXR0b24+XFxyXFxuXFx0ICAgIDxBY3Rpb25JdGVtICh0YXApPVxcXCJvbkxlYXZlKClcXFwiXFxyXFxuXFx0ICAgICAgaW9zLnN5c3RlbUljb249XFxcIjlcXFwiIGlvcy5wb3NpdGlvbj1cXFwicmlnaHRcXFwiXFxyXFxuXFx0ICAgICAgdGV4dD1cXFwiTGVhdmUgY2hhdFxcXCIgYW5kcm9pZC5wb3NpdGlvbj1cXFwicG9wdXBcXFwiPjwvQWN0aW9uSXRlbT5cXHJcXG4gICAgPC9BY3Rpb25CYXI+XFxyXFxuPC9QYWdlLmFjdGlvbkJhcj5cXHJcXG5cXHJcXG48R3JpZExheW91dCByb3dzPVxcXCIqLCBhdXRvXFxcIiAjY2hhdENvbnRhaW5lcj5cXHJcXG4gICAgPExpc3RWaWV3IG1hcmdpbi1ib3R0b209XFxcIjUwXFxcIiBwYWRkaW5nPVxcXCI1XFxcIiAjbWVzc2FnZUxpc3QgW2l0ZW1zXT1cXFwibWVzc2FnZXNcXFwiIHNlcGFyYXRvckNvbG9yPVxcXCJ0cmFuc3BhcmVudFxcXCIgKGl0ZW1Mb2FkaW5nKT1cXFwibG9hZE1vcmVEYXRhKCRldmVudClcXFwiIChzZXR1cEl0ZW1WaWV3KT1cXFwic2V0dXBJdGVtVmlldygkZXZlbnQpXFxcIiByb3c9XFxcIjBcXFwiPlxcclxcbiAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1pdGVtPVxcXCJpdGVtXFxcIiBsZXQtaT1cXFwiaW5kZXhcXFwiIGxldC1taW5lPVxcXCJtaW5lXFxcIiBsZXQtdGhlaXJzPVxcXCJ0aGVpcnNcXFwiIGxldC1taW5lQ29udGludWF0aW9uPVxcXCJtaW5lQ29udGludWF0aW9uXFxcIiBsZXQtdGhlaXJzQ29udGludWF0aW9uPVxcXCJ0aGVpcnNDb250aW51YXRpb25cXFwiIGxldC1taW5lQ29udGludWF0aW9uR3JpZD1cXFwibWluZUNvbnRpbnVhdGlvbkdyaWRcXFwiIGxldC10aGVpcnNDb250aW51YXRpb25HcmlkPVxcXCJ0aGVpcnNDb250aW51YXRpb25HcmlkXFxcIiBsZXQtZ3JpZD1cXFwiZ3JpZFxcXCIgbGV0LW1pbmVUaW1lPVxcXCJtaW5lVGltZVxcXCIgbGV0LXRoZWlyc1RpbWU9XFxcInRoZWlyc1RpbWVcXFwiIGxldC10aW1lPVxcXCJ0aW1lXFxcIiBsZXQtdGhlaXJzSW1nPVxcXCJ0aGVpcnNJbWdcXFwiIGxldC1pbWc9XFxcImltZ1xcXCI+XFxyXFxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0IHdpZHRoPVxcXCI4MCVcXFwiIFtjbGFzcy5taW5lQ29udGludWF0aW9uR3JpZF09XFxcIm1pbmVDb250aW51YXRpb25HcmlkXFxcIiBbY2xhc3MudGhlaXJzQ29udGludWF0aW9uR3JpZF09XFxcInRoZWlyc0NvbnRpbnVhdGlvbkdyaWRcXFwiIFtjbGFzcy5ncmlkXT1cXFwiZ3JpZFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cXFwiaG9yaXpvbnRhbFxcXCIgW2hvcml6b250YWxBbGlnbm1lbnRdPVxcXCJhbGlnbihpdGVtKVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2VDYWNoZUl0IFt2aXNpYmlsaXR5XT1cXFwiaXRlbS52aXNpYmlsaXR5XFxcIiBjbGFzcz1cXFwiYXV0aG9yLWltZ1xcXCIgc3RyZXRjaD1cXFwiYXNwZWN0RmlsbFxcXCIgaGVpZ2h0PVxcXCI0MFxcXCIgd2lkdGg9XFxcIjQwXFxcIiB2ZXJ0aWNhbEFsaWdubWVudD1cXFwiYm90dG9tXFxcIiBbc3JjXT1cXFwiaXRlbS5jaGF0TWVzc2FnZS5wZnBTb3VyY2VcXFwiIGNvbD1cXFwiMVxcXCI+PC9JbWFnZUNhY2hlSXQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgW3Zpc2liaWxpdHldPVxcXCJ0ZXh0VmlzaWJpbGl0eShpdGVtKVxcXCIgW3RleHRdPSdpdGVtLmNoYXRNZXNzYWdlLm1lc3NhZ2UnIFtjbGFzcy5taW5lXT1cXFwibWluZVxcXCIgW2NsYXNzLnRoZWlyc109XFxcInRoZWlyc1xcXCIgW2NsYXNzLm1pbmVDb250aW51YXRpb25dPVxcXCJtaW5lQ29udGludWF0aW9uXFxcIiBbY2xhc3MudGhlaXJzQ29udGludWF0aW9uXT1cXFwidGhlaXJzQ29udGludWF0aW9uXFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgdmVydGljYWxBbGlnbm1lbnQ9XFxcInRvcFxcXCI+PC9MYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSBbdmlzaWJpbGl0eV09XFxcImltZ1Zpc2liaWxpdHkoaXRlbSlcXFwiIFtjbGFzcy50aGVpcnNJbWddPVxcXCJ0aGVpcnNJbWdcXFwiIFtjbGFzcy5pbWddPVxcXCJpbWdcXFwiIHN0cmV0Y2g9XFxcIm5vbmVcXFwiIG1pbldpZHRoPVxcXCIyMDBcXFwiIG1pbkhlaWdodD1cXFwiMjAwXFxcIiBkZWNvZGVXaWR0aD1cXFwiMjAwXFxcIiBkZWNvZGVIZWlnaHQ9XFxcIjIwMFxcXCIgbWF4SGVpZ2h0PVxcXCI0MDBcXFwiIHZlcnRpY2FsQWxpZ25tZW50PVxcXCJib3R0b21cXFwiIFtzcmNdPVxcXCJpdGVtLmNoYXRNZXNzYWdlLmltZ1NvdXJjZVxcXCIgY29sPVxcXCIxXFxcIiAodGFwKT1cXFwidG9WaWV3SW1hZ2UoaXRlbS5jaGF0TWVzc2FnZS5pbWdTb3VyY2UpXFxcIiBsb2FkTW9kZT1cXFwiYXN5bmNcXFwiPjwvSW1hZ2U+XFxyXFxuICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxyXFxuICAgICAgICAgICAgICAgIDxMYWJlbCBbdGV4dF09J2l0ZW0uZm9ybWF0dGVkVGltZScgW2hvcml6b250YWxBbGlnbm1lbnRdPVxcXCJhbGlnbihpdGVtKVxcXCIgW2NsYXNzLm1pbmVUaW1lXT1cXFwibWluZVRpbWVcXFwiIFtjbGFzcy50aGVpcnNUaW1lXT1cXFwidGhlaXJzVGltZVxcXCIgW2NsYXNzLnRpbWVdPVxcXCJ0aW1lXFxcIj48L0xhYmVsPlxcclxcbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxyXFxuICAgICAgICA8L25nLXRlbXBsYXRlPlxcclxcbiAgICA8L0xpc3RWaWV3PlxcclxcblxcclxcbiAgICA8U3RhY2tMYXlvdXQgI2NoYXRib3ggcm93PVxcXCIxXFxcIiBjbGFzcz1cXFwiY2hhdC1ib3gtbGF5b3V0XFxcIj5cXHJcXG5cXHQgICAgICAgIDxHcmlkTGF5b3V0IGNvbHVtbnM9XFxcImF1dG8sKixhdXRvXFxcIiBzdHlsZT1cXFwicGFkZGluZzogMTBcXFwiPlxcclxcblxcdCAgICAgICAgXFx0PEltYWdlIGNsYXNzPVxcXCJpbWctYnV0dG9uXFxcIiByb3c9XFxcIjBcXFwiIGNvbD1cXFwiMFxcXCIgc3JjPVxcXCJ+L2ltZy9pbWdfaWNvbl8yLnBuZ1xcXCIgKHRhcCk9b3BlbkltYWdlcygpPjwvSW1hZ2U+XFxyXFxuXFx0ICAgICAgICAgICAgPFRleHRWaWV3ICN0ZXh0ZmllbGQgaGVpZ2h0PVxcXCJhdXRvXFxcIiBtYXhIZWlnaHQ9XFxcIjEwMFxcXCIgaGludD1cXFwiU3RhcnQgYSBtZXNzYWdlXFxcIiBjbGFzcz1cXFwiY2hhdC10ZXh0LWZpZWxkXFxcIiByb3c9XFxcIjBcXFwiIGNvbD1cXFwiMVxcXCIgYXV0b2NvcnJlY3Q9XFxcInRydWVcXFwiIFsobmdNb2RlbCldPVxcXCJtZXNzYWdlXFxcIiAodGFwKT1cXFwib25UZXh0VGFwKClcXFwiPjwvVGV4dFZpZXc+XFxyXFxuXFx0ICAgICAgICAgICAgPEltYWdlICNidG4gY2xhc3M9XFxcImNoYXQtYnV0dG9uXFxcIiByb3c9XFxcIjBcXFwiIGNvbD1cXFwiMlxcXCIgc3JjPVxcXCJ+L2ltZy9zZW5kX21lc3NhZ2VfaWNvbl8yLnBuZ1xcXCIgKHRhcCk9c2VuZE1lc3NhZ2UoKT48L0ltYWdlPlxcclxcblxcdCAgICAgICAgPC9HcmlkTGF5b3V0PlxcclxcblxcclxcbiAgICA8L1N0YWNrTGF5b3V0PlxcclxcbjwvR3JpZExheW91dD5cXHJcXG5cXHJcXG48QWN0aXZpdHlJbmRpY2F0b3IgI2FjdGl2aXR5SW5kaWNhdG9yIGJ1c3k9XFxcInRydWVcXFwiIHdpZHRoPVxcXCI0MFxcXCIgaGVpZ2h0PVxcXCI0MFxcXCIgY2xhc3M9XFxcImFjdGl2aXR5LWluZGljYXRvclxcXCI+XFxyXFxuPC9BY3Rpdml0eUluZGljYXRvcj5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVHJhbnNmZXJTZXJ2aWNlIH0gZnJvbSAnLi4vZGF0YXRyYW5zZmVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgKiBhcyBmaXJlYmFzZSBmcm9tICduYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlJztcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCAqIGFzIGltYWdlcGlja2VyIGZyb20gXCJuYXRpdmVzY3JpcHQtaW1hZ2VwaWNrZXJcIjtcclxuaW1wb3J0ICogYXMgaW1hZ2VTb3VyY2UgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvaW1hZ2Utc291cmNlXCI7XHJcbmltcG9ydCAqIGFzIGZzIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2ZpbGUtc3lzdGVtXCI7XHJcbmltcG9ydCB7IExvZ2luY2hlY2tTZXJ2aWNlIH0gZnJvbSAnLi4vbG9naW5jaGVjay5zZXJ2aWNlLnRucyc7XHJcbmltcG9ydCB7IENoYXRNZXNzYWdlIH0gZnJvbSAnLi4vbW9kZWxzL2NoYXQtbWVzc2FnZS5tb2RlbCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGVBcnJheSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlLWFycmF5JztcclxuaW1wb3J0IHsgTGlzdFZpZXcgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2xpc3Qtdmlldyc7XHJcbmltcG9ydCB7IGlzQW5kcm9pZCB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm0nO1xyXG5pbXBvcnQgeyBBY3Rpdml0eUluZGljYXRvciB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvYWN0aXZpdHktaW5kaWNhdG9yJztcclxuaW1wb3J0IHsgR3JpZExheW91dCB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvbGF5b3V0cy9ncmlkLWxheW91dCc7XHJcbmltcG9ydCAqIGFzIGFwcCBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiO1xyXG5kZWNsYXJlIHZhciBhbmRyb2lkOiBhbnk7XHJcblxyXG5cclxuY2xhc3MgQ2hhdEl0ZW0ge1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBjaGF0TWVzc2FnZTogQ2hhdE1lc3NhZ2UsIHB1YmxpYyB2aXNpYmlsaXR5OiBzdHJpbmcsIHB1YmxpYyBmb3JtYXR0ZWRUaW1lOiBzdHJpbmcsIHB1YmxpYyBtaW5lQ29udGludWF0aW9uOiBib29sZWFuLCBwdWJsaWMgdGhlaXJzQ29udGludWF0aW9uOiBib29sZWFuKSB7fVxyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1jaGF0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY2hhdC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY2hhdC5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIENoYXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRyYW5zZmVyU2VydmljZTogVHJhbnNmZXJTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSBsb2dpbmNoZWNrU2VydmljZTogTG9naW5jaGVja1NlcnZpY2UsXHJcbiAgXHRwcml2YXRlIHZjUmVmOiBWaWV3Q29udGFpbmVyUmVmKSB7IH1cclxuXHJcbiAgQFZpZXdDaGlsZChcIm1lc3NhZ2VMaXN0XCIsIHsgc3RhdGljOiB0cnVlIH0pIGx2OiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoXCJjaGF0Q29udGFpbmVyXCIsIHsgc3RhdGljOiB0cnVlIH0pIGNjOiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoXCJhY3Rpdml0eUluZGljYXRvclwiLCB7IHN0YXRpYzogdHJ1ZSB9KSBhaTogRWxlbWVudFJlZjtcclxuICBjaGF0SWQ6IHN0cmluZztcclxuICBtZXNzYWdlcyA9IG5ldyBPYnNlcnZhYmxlQXJyYXk8Q2hhdEl0ZW0+KCk7XHJcbiAgYWxsTWVzc2FnZXMgPSBuZXcgT2JzZXJ2YWJsZUFycmF5PENoYXRJdGVtPigpO1xyXG4gIG1lc3NhZ2U6IHN0cmluZyA9ICcnO1xyXG4gIHVzZXJJZDogc3RyaW5nO1xyXG4gIGNoYXROYW1lOiBzdHJpbmc7XHJcbiAgZGlzcGxheU5hbWU6IHN0cmluZztcclxuICBwZnBTb3VyY2U6IHN0cmluZztcclxuICBsaXN0OiBMaXN0VmlldztcclxuICBsYXN0SW5kZXg7XHJcbiAgY3VycmVudFVzZXI6IGFueTtcclxuICBudW1TaG93biA9IDIwO1xyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIGxldCBjaGF0Q29udGFpbmVyID0gPEdyaWRMYXlvdXQ+IHRoaXMuY2MubmF0aXZlRWxlbWVudDtcclxuICAgIGNoYXRDb250YWluZXIudmlzaWJpbGl0eSA9ICdjb2xsYXBzZSc7XHJcbiAgXHRpZihpc0FuZHJvaWQpIHtcclxuICBcdFx0dmFyIHdpbmRvdyA9IGFwcC5hbmRyb2lkLnN0YXJ0QWN0aXZpdHkuZ2V0V2luZG93KCk7XHJcbiAgICAgICAgd2luZG93LnNldFNvZnRJbnB1dE1vZGUoYW5kcm9pZC52aWV3LldpbmRvd01hbmFnZXIuTGF5b3V0UGFyYW1zLlNPRlRfSU5QVVRfQURKVVNUX1JFU0laRSk7XHJcbiAgXHR9XHJcbiAgXHR0aGlzLmxpc3QgPSB0aGlzLmx2Lm5hdGl2ZUVsZW1lbnQ7XHJcblxyXG4gIFx0dGhpcy5jaGF0SWQgPSB0aGlzLnRyYW5zZmVyU2VydmljZS5nZXREYXRhKCk7XHJcbiAgXHR0aGlzLnVzZXJJZCA9IHRoaXMubG9naW5jaGVja1NlcnZpY2UuZ2V0VXNlcigpO1xyXG4gIFx0ZmlyZWJhc2UuZ2V0Q3VycmVudFVzZXIoKS50aGVuKCh1c2VyKSA9PiB7XHJcbiAgXHRcdHRoaXMuZGlzcGxheU5hbWUgPSB1c2VyLmRpc3BsYXlOYW1lO1xyXG4gIFx0XHR0aGlzLnBmcFNvdXJjZSA9IHVzZXIucGhvdG9VUkw7XHJcbiAgXHR9KVxyXG4gIFx0dGhpcy5yZXRyaWV2ZUNoYXRzKCk7XHJcbiAgXHR0aGlzLmNoYXROYW1lID0gXCJKb2huIERvZVwiXHJcbiAgXHQvLyBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgLy8gICAgdGhpcy5saXN0LnNjcm9sbFRvSW5kZXgodGhpcy5tZXNzYWdlcy5sZW5ndGggLSAxKTtcclxuICAgLy8gIH0sIDEwMDApXHJcbiAgfVxyXG5cclxuICBhc3luYyBzZW5kTWVzc2FnZShpbWdTcmMgPSBudWxsKSB7XHJcbiAgICBpZih0aGlzLm1lc3NhZ2UucmVwbGFjZSgvXFxzKy9nLCAnJykubGVuZ3RoID09PSAwICYmICFpbWdTcmMpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIFx0dmFyIHRvZGF5ID0gbmV3IERhdGUoKTtcclxuICBcdHZhciBkYXRlID0gdG9kYXkuZ2V0RnVsbFllYXIoKSsnLycrKHRvZGF5LmdldE1vbnRoKCkrMSkrJy8nK3RvZGF5LmdldERhdGUoKTtcclxuICBcdHZhciB0aW1lID0gdG9kYXkuZ2V0SG91cnMoKSArIFwiOlwiICsgdG9kYXkuZ2V0VVRDTWludXRlcygpICsgXCI6XCIgKyB0b2RheS5nZXRTZWNvbmRzKCk7XHJcbiAgICB2YXIgY2hhdDogQ2hhdE1lc3NhZ2U7XHJcbiAgICBpZihpbWdTcmMpIHtcclxuICAgIFx0Y2hhdCA9IHtcclxuICAgIFx0XHR1c2VySWQ6IHRoaXMudXNlcklkLFxyXG4gICAgXHRcdGRpc3BsYXlOYW1lOiB0aGlzLmRpc3BsYXlOYW1lLFxyXG4gICAgXHRcdG1lc3NhZ2U6IFwiXCIsXHJcbiAgICBcdFx0cGZwU291cmNlOiB0aGlzLnBmcFNvdXJjZSxcclxuICAgIFx0XHRpbWdTb3VyY2U6IGltZ1NyYyxcclxuICAgIFx0XHR0aW1lOiB0aW1lLFxyXG4gICAgXHRcdGRhdGU6IGRhdGVcclxuICAgIFx0fVxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIGNoYXQgPSB7XHJcbiAgICAgICAgdXNlcklkOiB0aGlzLnVzZXJJZCxcclxuICAgICAgICBkaXNwbGF5TmFtZTogdGhpcy5kaXNwbGF5TmFtZSxcclxuICAgICAgICBtZXNzYWdlOiB0aGlzLm1lc3NhZ2UsXHJcbiAgICAgICAgcGZwU291cmNlOiB0aGlzLnBmcFNvdXJjZSxcclxuICAgICAgICBpbWdTb3VyY2U6IFwiXCIsXHJcbiAgICAgICAgdGltZTogdGltZSxcclxuICAgICAgICBkYXRlOiBkYXRlXHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcdGNvbnN0IG1lc3NhZ2VEb2N1bWVudCA9IGZpcmViYXNlLmZpcmVzdG9yZS5jb2xsZWN0aW9uKCdjaGF0cycpLmRvYyh0aGlzLmNoYXRJZCk7XHJcbiAgXHRjb25zdCBtZXNzYWdlUHJvbWlzZSA9IGF3YWl0IG1lc3NhZ2VEb2N1bWVudC5nZXQoKS50aGVuKChkb2MpID0+IHtcclxuICBcdFx0dmFyIHVwZGF0ZWRDaGF0cyA6IFtDaGF0TWVzc2FnZV0gPSBkb2MuZGF0YSgpLmNoYXRzO1xyXG4gIFx0XHR1cGRhdGVkQ2hhdHMucHVzaChjaGF0KTtcclxuICBcdFx0bWVzc2FnZURvY3VtZW50LnVwZGF0ZSh7XHJcbiAgXHRcdFx0Y2hhdHM6IHVwZGF0ZWRDaGF0cyxcclxuICBcdFx0XHRsYXN0Q2hhdDogZGF0ZSArICcgJyArIHRpbWVcclxuICBcdFx0fSlcclxuICBcdH0pXHJcbiAgXHR0aGlzLm1lc3NhZ2UgPSAnJztcclxuICB9XHJcblxyXG4gIGFzeW5jIHJldHJpZXZlQ2hhdHMoKSB7XHJcbiAgXHRjb25zdCBtZXNzYWdlRG9jdW1lbnQgPSBmaXJlYmFzZS5maXJlc3RvcmUuY29sbGVjdGlvbignY2hhdHMnKS5kb2ModGhpcy5jaGF0SWQpO1xyXG4gIFx0Y29uc3QgZG9jUHJvbWlzZSA9IGF3YWl0IG1lc3NhZ2VEb2N1bWVudC5nZXQoKS50aGVuKGFzeW5jIChkb2MpID0+IHtcclxuICBcdFx0bGV0IGRhdGEgPSBkb2MuZGF0YSgpO1xyXG4gIFx0XHR0aGlzLmxhc3RJbmRleCA9IGRhdGEuY2hhdHMubGVuZ3RoO1xyXG4gICAgICB0aGlzLm1lc3NhZ2VzLnNwbGljZSgwKTtcclxuICAgICAgdGhpcy5hbGxNZXNzYWdlcy5zcGxpY2UoMCk7XHJcbiAgXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkYXRhLmNoYXRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgXHRcdFx0aWYoZGF0YS5jaGF0c1tpXS51c2VySWQgPT09IHRoaXMudXNlcklkKSB7XHJcbiAgICAgICAgICBhd2FpdCB0aGlzLnVwZGF0ZUNvbnRpbnVhdGlvbnMoZGF0YSwgaSwgdHJ1ZSwgXCJjb2xsYXBzZVwiKTtcclxuICAgICAgICB9XHJcbiAgXHRcdFx0ZWxzZSB7XHJcbiAgICAgICAgICBhd2FpdCB0aGlzLnVwZGF0ZUNvbnRpbnVhdGlvbnMoZGF0YSwgaSwgZmFsc2UsIFwidmlzaWJsZVwiKTtcclxuICAgICAgICB9XHJcbiAgXHRcdH1cclxuICBcdFx0Ly8gdGhpcy5saXN0LnNjcm9sbFRvSW5kZXgoZGF0YS5jaGF0cy5sZW5ndGggLSAxKTtcclxuICBcdFx0aWYoZGF0YS51c2Vycy5sZW5ndGggPT09IDIpIHtcclxuICBcdFx0XHRpZihkYXRhLnVzZXJzWzBdLnVpZCA9PT0gdGhpcy51c2VySWQpXHJcbiAgXHRcdFx0XHR0aGlzLmNoYXROYW1lID0gZGF0YS51c2Vyc1sxXS5kaXNwbGF5TmFtZTtcclxuICBcdFx0XHRlbHNlIHtcclxuICAgICAgICAgIHRoaXMuY2hhdE5hbWUgPSBkYXRhLnVzZXJzWzBdLmRpc3BsYXlOYW1lO1xyXG4gICAgICAgIH1cclxuICBcdFx0fVxyXG4gIFx0XHRlbHNlIHtcclxuICAgICAgICB2YXIgY2hhdE5hbWUgPSAnWW91LCAnO1xyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBkYXRhLnVzZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICBpZihkYXRhLnVzZXJzW2ldLmlkICE9IHRoaXMudXNlcklkKSB7XHJcbiAgICAgICAgICAgIGlmKGkgPT09IGRhdGEudXNlcnMubGVuZ3RoIC0gMSlcclxuICAgICAgICAgICAgICBjaGF0TmFtZSArPSAnYW5kICcgKyBkYXRhLnVzZXJzW2ldLmRpc3BsYXlOYW1lO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgY2hhdE5hbWUgKz0gZGF0YS51c2Vyc1tpXS5kaXNwbGF5TmFtZSArICcsICc7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gIFx0XHRcdHRoaXMuY2hhdE5hbWUgPSAnR3JvdXAgY2hhdCc7XHJcbiAgXHRcdH1cclxuICBcdH0pXHJcblxyXG4gIFx0Y29uc3QgdW5zdWJzY3JpYmUgPSBtZXNzYWdlRG9jdW1lbnQub25TbmFwc2hvdChhc3luYyBkb2MgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZygnY2FsbGVkJylcclxuICBcdFx0bGV0IGRhdGEgPSBkb2MuZGF0YSgpO1xyXG4gIFx0XHRmb3IodmFyIGkgPSB0aGlzLmxhc3RJbmRleDsgaSA8IGRhdGEuY2hhdHMubGVuZ3RoOyBpKyspIHtcclxuICBcdFx0XHRpZihkYXRhLmNoYXRzW2ldLnVzZXJJZCA9PT0gdGhpcy51c2VySWQpIHtcclxuICAgICAgICAgIGF3YWl0IHRoaXMudXBkYXRlQ29udGludWF0aW9ucyhkYXRhLCBpLCB0cnVlLCBcImNvbGxhcHNlXCIpO1xyXG4gICAgICAgICAgdGhpcy5saXN0LnNjcm9sbFRvSW5kZXgodGhpcy5tZXNzYWdlcy5sZW5ndGggLSAxKTtcclxuICAgICAgICB9XHJcbiAgXHRcdFx0ZWxzZSB7XHJcbiAgICAgICAgICBhd2FpdCB0aGlzLnVwZGF0ZUNvbnRpbnVhdGlvbnMoZGF0YSwgaSwgZmFsc2UsIFwidmlzaWJsZVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5udW1TaG93biArPSAxO1xyXG4gIFx0XHR9XHJcbiAgXHRcdHRoaXMubGFzdEluZGV4ID0gZGF0YS5jaGF0cy5sZW5ndGg7XHJcbiAgXHR9KVxyXG4gICAgaWYodGhpcy5tZXNzYWdlcy5sZW5ndGggPiB0aGlzLm51bVNob3duKSB7XHJcbiAgICAgIHRoaXMubWVzc2FnZXMuc3BsaWNlKDAsIHRoaXMubWVzc2FnZXMubGVuZ3RoIC0gdGhpcy5udW1TaG93bik7XHJcbiAgICB9XHJcbiAgICBsZXQgYWN0aXZpdHlJbmRpY2F0b3IgPSA8QWN0aXZpdHlJbmRpY2F0b3I+IHRoaXMuYWkubmF0aXZlRWxlbWVudDtcclxuICAgIGFjdGl2aXR5SW5kaWNhdG9yLmJ1c3kgPSBmYWxzZTtcclxuICAgIGxldCBjaGF0Q29udGFpbmVyID0gPEdyaWRMYXlvdXQ+IHRoaXMuY2MubmF0aXZlRWxlbWVudDtcclxuICAgIGNoYXRDb250YWluZXIudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcclxuICAgIHRoaXMubGlzdC5zY3JvbGxUb0luZGV4KHRoaXMubWVzc2FnZXMubGVuZ3RoIC0gMSk7XHJcbiAgfVxyXG5cclxuICBhc3luYyB1cGRhdGVDb250aW51YXRpb25zKGRhdGEsIGluZGV4LCBpc01pbmUsIHZpc2liaWxpdHkpIHtcclxuICAgIC8vVXBkYXRlIHRpbWUgdG8gYSByZWFkYWJsZSBmb3JtYXQgZm9yIHRoZSB1c2VyXHJcbiAgICB2YXIgY2hhdFRpbWUgPSBkYXRhLmNoYXRzW2luZGV4XS50aW1lO1xyXG4gICAgdmFyIGRhdGVTcGxpdCA9IGRhdGEuY2hhdHNbaW5kZXhdLmRhdGUuc3BsaXQoJy8nKTtcclxuICAgIHZhciB0aW1lU3BsaXQgPSBjaGF0VGltZS5zcGxpdCgnOicpO1xyXG4gICAgdmFyIGZvcm1hdHRlZFRpbWUgPSAnJztcclxuICAgIGlmKHRpbWVTcGxpdFsxXS5sZW5ndGggPT09IDEpIHtcclxuICAgICAgdGltZVNwbGl0WzFdID0gJzAnICsgdGltZVNwbGl0WzFdO1xyXG4gICAgfVxyXG4gICAgdmFyIGhvdXJzID0gcGFyc2VJbnQodGltZVNwbGl0WzBdKTtcclxuICAgIGlmKGhvdXJzID4gMTIpIHtcclxuICAgICAgZm9ybWF0dGVkVGltZSA9IGRhdGVTcGxpdFsxXSArICcvJyArIGRhdGVTcGxpdFsyXSArICcsICcgKyAoaG91cnMgLSAxMikgKyAnOicgKyB0aW1lU3BsaXRbMV0gKyAnIFBNJztcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICBpZihob3VycyA9PT0gMClcclxuICAgICAgICB0aW1lU3BsaXRbMF0gPSAnMTInO1xyXG4gICAgICBmb3JtYXR0ZWRUaW1lID0gZGF0ZVNwbGl0WzFdICsgJy8nICsgZGF0ZVNwbGl0WzJdICsgJywgJyArIHRpbWVTcGxpdFswXSArICc6JyArIHRpbWVTcGxpdFsxXSArICcgQU0nO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHBmcFByb21pc2UgPSBhd2FpdCBmaXJlYmFzZS5maXJlc3RvcmUuY29sbGVjdGlvbigndXNlcnMnKS5kb2MoZGF0YS5jaGF0c1tpbmRleF0udXNlcklkKS5nZXQoKS50aGVuKChkb2MpID0+IHtcclxuICAgICAgZGF0YS5jaGF0c1tpbmRleF0ucGZwU291cmNlID0gZG9jLmRhdGEoKS5wcm9maWxlX3NvdXJjZTtcclxuXHJcbiAgICAgICAgLy9QdXNoIHRoZSBtZXNzYWdlIGl0ZW1cclxuICAgICAgdGhpcy5tZXNzYWdlcy5wdXNoKG5ldyBDaGF0SXRlbShkYXRhLmNoYXRzW2luZGV4XSwgdmlzaWJpbGl0eSwgZm9ybWF0dGVkVGltZSwgZmFsc2UsIGZhbHNlKSk7XHJcbiAgICAgIHRoaXMuYWxsTWVzc2FnZXMucHVzaChuZXcgQ2hhdEl0ZW0oZGF0YS5jaGF0c1tpbmRleF0sIHZpc2liaWxpdHksIGZvcm1hdHRlZFRpbWUsIGZhbHNlLCBmYWxzZSkpO1xyXG5cclxuICAgICAgLy9DaGVjayBmb3IgY29udGludWF0aW9uIG1lc3NhZ2VzIGFuZCB1cGRhdGUgaXRlbXMgYWNjb3JkaW5nbHlcclxuICAgICAgdmFyIGkgPSBpbmRleCAtIDE7XHJcbiAgICAgIHdoaWxlKGkgPj0gMCAmJiBkYXRhLmNoYXRzW2ldLnVzZXJJZCA9PT0gZGF0YS5jaGF0c1tpbmRleF0udXNlcklkKSB7XHJcbiAgICAgICAgaWYodGhpcy5pc1RpbWVPdmVyKGRhdGEuY2hhdHNbaV0sIGRhdGEuY2hhdHNbaW5kZXhdKSlcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICBpZihpID49IHRoaXMubWVzc2FnZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICB2YXIgbXNnID0gdGhpcy5tZXNzYWdlcy5nZXRJdGVtKHRoaXMubWVzc2FnZXMubGVuZ3RoICsgaSAtIGRhdGEuY2hhdHMubGVuZ3RoKTtcclxuICAgICAgICAgIG1zZy52aXNpYmlsaXR5ID0gJ2NvbGxhcHNlJztcclxuICAgICAgICAgIGlmKGlzTWluZSkge1xyXG4gICAgICAgICAgICBtc2cubWluZUNvbnRpbnVhdGlvbiA9IHRydWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbXNnLnRoZWlyc0NvbnRpbnVhdGlvbiA9IHRydWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0aGlzLm1lc3NhZ2VzLnNldEl0ZW0odGhpcy5tZXNzYWdlcy5sZW5ndGggKyBpIC0gZGF0YS5jaGF0cy5sZW5ndGgsIG1zZylcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICB2YXIgbXNnID0gdGhpcy5tZXNzYWdlcy5nZXRJdGVtKGkpO1xyXG4gICAgICAgICAgbXNnLnZpc2liaWxpdHkgPSAnY29sbGFwc2UnO1xyXG4gICAgICAgICAgaWYoaXNNaW5lKSB7XHJcbiAgICAgICAgICAgIG1zZy5taW5lQ29udGludWF0aW9uID0gdHJ1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBtc2cudGhlaXJzQ29udGludWF0aW9uID0gdHJ1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRoaXMubWVzc2FnZXMuc2V0SXRlbShpLCBtc2cpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5hbGxNZXNzYWdlcy5zZXRJdGVtKGksIG1zZyk7XHJcbiAgICAgICAgaSA9IGkgLSAxO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIFxyXG4gICAgLy8gdGhpcy5saXN0LnNjcm9sbFRvSW5kZXgodGhpcy5tZXNzYWdlcy5sZW5ndGggLSAxKTtcclxuICB9XHJcblxyXG4gIG9wZW5JbWFnZXMoKSB7XHJcbiAgICB2YXIgbG9jYWxQYXRoO1xyXG4gICAgdmFyIGNvdW50ZXIgPSAxO1xyXG4gICAgbGV0IGNvbnRleHQgPSBpbWFnZXBpY2tlci5jcmVhdGUoe1xyXG4gICAgICAgIG1vZGU6IFwic2luZ2xlXCIgLy8gdXNlIFwibXVsdGlwbGVcIiBmb3IgbXVsdGlwbGUgc2VsZWN0aW9uXHJcbiAgICB9KTtcclxuICAgIGNvbnRleHRcclxuICAgIC5hdXRob3JpemUoKVxyXG4gICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBjb250ZXh0LnByZXNlbnQoKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoc2VsZWN0aW9uKSA9PiB7XHJcbiAgICAgICAgc2VsZWN0aW9uLmZvckVhY2goKHNlbGVjdGVkKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIHByb2Nlc3MgdGhlIHNlbGVjdGVkIGltYWdlXHJcbiAgICAgICAgICAgIGxldCBpbWdTb3VyY2UgPSBuZXcgaW1hZ2VTb3VyY2UuSW1hZ2VTb3VyY2UoKTtcclxuICAgICAgICAgICAgaW1nU291cmNlLmZyb21Bc3NldChzZWxlY3RlZCkudGhlbigoc291cmNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgIGNvbnN0IGI2NCA9IHNvdXJjZS50b0Jhc2U2NFN0cmluZygnanBlZycsIDEwMCk7XHJcbiAgICAgICAgICAgICAgIGNvbnN0IGZpbGVTaXplID0gYjY0LnJlcGxhY2UoL1xcPS9nLCBcIlwiKS5sZW5ndGggKiAwLjc1O1xyXG4gICAgICAgICAgICAgICBpZiAoZmlsZVNpemUgPiA1KSB7XHJcbiAgICAgICAgICAgICAgICAgIC8vIElmIGZpbGUgaXMgZ3JlYXRlciB0aGFuIDEgTUJcclxuICAgICAgICAgICAgICAgICAgc291cmNlLmxvYWRGcm9tQmFzZTY0KGI2NCk7XHJcbiAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgIGNvbnN0IGltZ0hhc2ggPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKCkuc2xpY2UoMiwxMSk7XHJcbiAgICAgICAgICAgICAgIGxldCBmb2xkZXIgPSBmcy5rbm93bkZvbGRlcnMudGVtcCgpO1xyXG4gICAgICAgICAgICAgICB2YXIgcGF0aCA9IGZzLnBhdGguam9pbihmb2xkZXIucGF0aCwgaW1nSGFzaCArIFwiLnBuZ1wiKTtcclxuICAgICAgICAgICAgICAgbGV0IHNhdmVkID0gc291cmNlLnNhdmVUb0ZpbGUocGF0aCwgXCJqcGVnXCIsIDEwMCk7XHJcblxyXG4gICAgICAgICAgICAgICBmaXJlYmFzZS5zdG9yYWdlLnVwbG9hZEZpbGUoe1xyXG4gICAgICAgICAgICAgICAgICAvLyB0aGUgZnVsbCBwYXRoIG9mIHRoZSBmaWxlIGluIHlvdXIgRmlyZWJhc2Ugc3RvcmFnZSAoZm9sZGVycyB3aWxsIGJlIGNyZWF0ZWQpXHJcbiAgICAgICAgICAgICAgICAgIHJlbW90ZUZ1bGxQYXRoOiAnY2hhdHMvJyArIHRoaXMuY2hhdElkICsgJy9pbWFnZXMvJyArIHRoaXMudXNlcklkICsgJy9JTUdfJyArIGltZ0hhc2ggKyAnLnBuZycsXHJcbiAgICAgICAgICAgICAgICAgIC8vIG9wdGlvbiAxOiBhIGZpbGUtc3lzdGVtIG1vZHVsZSBGaWxlIG9iamVjdFxyXG4gICAgICAgICAgICAgICAgICBsb2NhbEZpbGU6IGZzLkZpbGUuZnJvbVBhdGgocGF0aCksXHJcbiAgICAgICAgICAgICAgICAgIC8vIG9wdGlvbiAyOiBhIGZ1bGwgZmlsZSBwYXRoIChpZ25vcmVkIGlmICdsb2NhbEZpbGUnIGlzIHNldClcclxuICAgICAgICAgICAgICAgICAgbG9jYWxGdWxsUGF0aDogcGF0aCxcclxuICAgICAgICAgICAgICAgICAgLy8gZ2V0IG5vdGlmaWVkIG9mIGZpbGUgdXBsb2FkIHByb2dyZXNzXHJcbiAgICAgICAgICAgICAgICAgIG9uUHJvZ3Jlc3M6IChzdGF0dXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlVwbG9hZGVkIGZyYWN0aW9uOiBcIiArIHN0YXR1cy5mcmFjdGlvbkNvbXBsZXRlZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJQZXJjZW50YWdlIGNvbXBsZXRlOiBcIiArIHN0YXR1cy5wZXJjZW50YWdlQ29tcGxldGVkKTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICB9KS50aGVuKCh1cGxvYWRlZEZpbGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJGaWxlIHVwbG9hZGVkOiBcIiArIEpTT04uc3RyaW5naWZ5KHVwbG9hZGVkRmlsZSkpO1xyXG4gICAgICAgICAgICAgICAgICBmaXJlYmFzZS5zdG9yYWdlLmdldERvd25sb2FkVXJsKHtcclxuICAgICAgICAgICAgICAgICAgICByZW1vdGVGdWxsUGF0aDogJ2NoYXRzLycgKyB0aGlzLmNoYXRJZCArICcvaW1hZ2VzLycgKyB0aGlzLnVzZXJJZCArICcvSU1HXycgKyBpbWdIYXNoICsgJy5wbmcnXHJcbiAgICAgICAgICAgICAgICAgIH0pLnRoZW4oKHVybCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VuZE1lc3NhZ2UodXJsKTtcclxuICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KS5jYXRjaCgoZSkgPT4ge1xyXG4gICAgICAgIC8vIHByb2Nlc3MgZXJyb3JcclxuICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaXNUaW1lT3ZlcihjaGF0MSwgY2hhdDIpIHtcclxuICAgIGNvbnN0IHRpbWUxID0gY2hhdDEudGltZTtcclxuICAgIGNvbnN0IHRpbWUyID0gY2hhdDIudGltZTtcclxuICAgIGNvbnN0IGRhdGUxID0gY2hhdDEuZGF0ZTtcclxuICAgIGNvbnN0IGRhdGUyID0gY2hhdDIuZGF0ZTtcclxuXHJcbiAgICBjb25zdCB0aW1lMVNwbGl0ID0gdGltZTEuc3BsaXQoJzonKTtcclxuICAgIGNvbnN0IHRpbWUyU3BsaXQgPSB0aW1lMi5zcGxpdCgnOicpO1xyXG5cclxuICAgIHZhciB0aW1lMVRvdGFsU2Vjb25kcyA9IHBhcnNlSW50KHRpbWUxU3BsaXRbMF0pICogMzYwMCArIHBhcnNlSW50KHRpbWUxU3BsaXRbMV0pICogNjAgKyBwYXJzZUludCh0aW1lMVNwbGl0WzJdKTtcclxuICAgIHZhciB0aW1lMlRvdGFsU2Vjb25kcyA9IHBhcnNlSW50KHRpbWUyU3BsaXRbMF0pICogMzYwMCArIHBhcnNlSW50KHRpbWUyU3BsaXRbMV0pICogNjAgKyBwYXJzZUludCh0aW1lMlNwbGl0WzJdKTtcclxuICAgIGlmKHRpbWUyVG90YWxTZWNvbmRzIC0gdGltZTFUb3RhbFNlY29uZHMgPiAoNjAgKiAzKSB8fCBkYXRlMiA+IGRhdGUxKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgYWxpZ24oaXRlbSkge1xyXG4gIFx0aWYoaXRlbS5jaGF0TWVzc2FnZS51c2VySWQgPT09IHRoaXMudXNlcklkKVxyXG4gIFx0XHRyZXR1cm4gXCJyaWdodFwiO1xyXG4gIFx0ZWxzZVxyXG4gIFx0XHRyZXR1cm4gXCJsZWZ0XCI7XHJcbiAgfVxyXG5cclxuICBhbGlnblJldmVyc2UoaXRlbSkge1xyXG4gICAgaWYoaXRlbS5jaGF0TWVzc2FnZS51c2VySWQgPT09IHRoaXMudXNlcklkKVxyXG4gICAgICByZXR1cm4gXCJsZWZ0XCI7XHJcbiAgICBlbHNlXHJcbiAgICAgIHJldHVybiBcInJpZ2h0XCI7XHJcbiAgfVxyXG5cclxuICB0ZXh0VmlzaWJpbGl0eShpdGVtKSB7XHJcbiAgICBpZihpdGVtLmNoYXRNZXNzYWdlLm1lc3NhZ2UgPT09IFwiXCIpIHtcclxuICAgICAgcmV0dXJuIFwiY29sbGFwc2VcIjtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICByZXR1cm4gXCJ2aXNpYmxlXCI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpbWdWaXNpYmlsaXR5KGl0ZW0pIHtcclxuICAgIGlmKGl0ZW0uY2hhdE1lc3NhZ2UuaW1nU291cmNlID09PSBcIlwiKSB7XHJcbiAgICAgIHJldHVybiBcImNvbGxhcHNlXCI7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgcmV0dXJuIFwidmlzaWJsZVwiO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0dXBJdGVtVmlldyhhcmdzKSB7XHJcbiAgXHRhcmdzLnZpZXcuY29udGV4dC5taW5lID0gKHRoaXMubWVzc2FnZXMuZ2V0SXRlbShhcmdzLmluZGV4KS5jaGF0TWVzc2FnZS51c2VySWQgPT09IHRoaXMudXNlcklkKTtcclxuICBcdGFyZ3Mudmlldy5jb250ZXh0LnRoZWlycyA9ICh0aGlzLm1lc3NhZ2VzLmdldEl0ZW0oYXJncy5pbmRleCkuY2hhdE1lc3NhZ2UudXNlcklkICE9PSB0aGlzLnVzZXJJZCk7XHJcbiAgICBhcmdzLnZpZXcuY29udGV4dC5taW5lQ29udGludWF0aW9uID0gKHRoaXMubWVzc2FnZXMuZ2V0SXRlbShhcmdzLmluZGV4KS5taW5lQ29udGludWF0aW9uKTtcclxuICAgIGFyZ3Mudmlldy5jb250ZXh0LnRoZWlyc0NvbnRpbnVhdGlvbiA9ICh0aGlzLm1lc3NhZ2VzLmdldEl0ZW0oYXJncy5pbmRleCkudGhlaXJzQ29udGludWF0aW9uKTtcclxuICAgIGFyZ3Mudmlldy5jb250ZXh0Lm1pbmVDb250aW51YXRpb25HcmlkID0gKHRoaXMubWVzc2FnZXMuZ2V0SXRlbShhcmdzLmluZGV4KS5taW5lQ29udGludWF0aW9uKTtcclxuICAgIGFyZ3Mudmlldy5jb250ZXh0LnRoZWlyc0NvbnRpbnVhdGlvbkdyaWQgPSAodGhpcy5tZXNzYWdlcy5nZXRJdGVtKGFyZ3MuaW5kZXgpLnRoZWlyc0NvbnRpbnVhdGlvbik7XHJcblxyXG4gICAgYXJncy52aWV3LmNvbnRleHQuZ3JpZCA9ICghYXJncy52aWV3LmNvbnRleHQudGhlaXJzQ29udGludWF0aW9uICYmICFhcmdzLnZpZXcuY29udGV4dC5taW5lQ29udGludWF0aW9uKTtcclxuICAgIGFyZ3Mudmlldy5jb250ZXh0Lm1pbmVUaW1lID0gKCFhcmdzLnZpZXcuY29udGV4dC5taW5lQ29udGludWF0aW9uICYmIGFyZ3Mudmlldy5jb250ZXh0Lm1pbmUpO1xyXG4gICAgYXJncy52aWV3LmNvbnRleHQudGhlaXJzVGltZSA9ICghYXJncy52aWV3LmNvbnRleHQudGhlaXJzQ29udGludWF0aW9uICYmIGFyZ3Mudmlldy5jb250ZXh0LnRoZWlycyk7XHJcblxyXG4gICAgYXJncy52aWV3LmNvbnRleHQudGhlaXJzSW1nID0gYXJncy52aWV3LmNvbnRleHQudGhlaXJzQ29udGludWF0aW9uO1xyXG4gICAgYXJncy52aWV3LmNvbnRleHQuaW1nID0gIWFyZ3Mudmlldy5jb250ZXh0LnRoZWlyc0ltZztcclxuICAgIFxyXG4gICAgYXJncy52aWV3LmNvbnRleHQudGltZSA9ICghYXJncy52aWV3LmNvbnRleHQubWluZVRpbWUgJiYgIWFyZ3Mudmlldy5jb250ZXh0LnRoZWlyc1RpbWUpICAgIFxyXG4gICAgYXJncy52aWV3LmNvbnRleHQuZXZlbiA9IChhcmdzLmluZGV4ICUgMiA9PT0gMCk7XHJcbiAgXHRhcmdzLnZpZXcuY29udGV4dC5vZGQgPSAoYXJncy5pbmRleCAlIDIgPT09IDEpO1xyXG4gIH1cclxuXHJcbiAgb25OYXZCdG5UYXAoKSB7XHJcbiAgXHRpZih0aGlzLnJvdXRlci5jYW5Hb0JhY2soKSlcclxuICBcdFx0dGhpcy5yb3V0ZXIuYmFjaygpO1xyXG4gIFx0ZWxzZVxyXG4gIFx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ2NoYXQtbGlzdCddLCB7Y2xlYXJIaXN0b3J5OiB0cnVlfSk7XHJcbiAgfVxyXG5cclxuICBvblRleHRUYXAoKSB7XHJcbiAgICB0aGlzLmxpc3Quc2Nyb2xsVG9JbmRleCh0aGlzLm1lc3NhZ2VzLmxlbmd0aCAtIDEpO1xyXG4gIH1cclxuXHJcbiAgdG9WaWV3SW1hZ2UoaW1nU291cmNlKSB7XHJcbiAgICB0aGlzLnRyYW5zZmVyU2VydmljZS5zZXREYXRhKGltZ1NvdXJjZSk7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ3ZpZXctaW1hZ2UnXSk7XHJcbiAgfVxyXG5cclxuICBsb2FkTW9yZURhdGEoYXJncykge1xyXG4gICAgLy9PbiBzY3JvbGwgdG8gdGhlIHRvcCwgbG9hZCBtb3JlIGNoYXQgbWVzc2FnZXNcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBsZXQgbGlzdFZpZXcgPSA8TGlzdFZpZXc+IHRoaXMubHYubmF0aXZlRWxlbWVudDtcclxuICAgICAgY29uc3QgbnVtID0gdGhpcy5udW1TaG93bjtcclxuICAgICAgaWYoYXJncy5pbmRleCA9PT0gMCAmJiBudW0gPCB0aGlzLmFsbE1lc3NhZ2VzLmxlbmd0aCkge1xyXG4gICAgICAgIGZvcih2YXIgaSA9IG51bTsgaSA8IG51bSArIDEwOyBpKyspIHtcclxuICAgICAgICAgIGlmKGkgPCB0aGlzLmFsbE1lc3NhZ2VzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2VzLnVuc2hpZnQodGhpcy5hbGxNZXNzYWdlcy5nZXRJdGVtKHRoaXMuYWxsTWVzc2FnZXMubGVuZ3RoIC0gaSAtIDEpKTtcclxuICAgICAgICAgICAgdGhpcy5udW1TaG93biArPSAxO1xyXG4gICAgICAgICAgICBsaXN0Vmlldy5zY3JvbGxUb0luZGV4KGkgLSBudW0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSwgNTAwKTtcclxuICAgIFxyXG4gIH1cclxuXHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi8qIEFkZCBtb2JpbGUgc3R5bGVzIGZvciB0aGUgY29tcG9uZW50IGhlcmUuICAqL1xcclxcbi5kZWxldGUtYnRuIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIGNvbG9yOiAjYWMwMGU2O1xcclxcbiAgICAvKnBhZGRpbmc6IDZweCAyNHB4OyovXFxyXFxuICAgIGJvcmRlci13aWR0aDogMTtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiAjYWMwMGU2O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGZsb2F0OiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbjogYXV0bzsgXFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiU2Vnb2UgVUlcXFwiLEFyaWFsLHNhbnMtc2VyaWY7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDE1O1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDE1O1xcclxcbiAgICB3aWR0aDogMTIwO1xcclxcbiAgICBoZWlnaHQ6IDQwO1xcclxcbiAgICBob3Jpem9udGFsLWFsaWduOnJpZ2h0O1xcclxcbn1cXHJcXG5cXHJcXG4uZGVsZXRlLWJ0bjpoaWdobGlnaHRlZCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWU2ZmY7XFxyXFxufVxcclxcblxcclxcbi5jYW5jZWwtYnRuIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIC8qY29sb3I6IHdoaXRlOyovXFxyXFxuICAgIC8qcGFkZGluZzogNnB4IDI0cHg7Ki9cXHJcXG4gICAgYm9yZGVyLXdpZHRoOiAxO1xcclxcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGZsb2F0OiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbjogYXV0bzsgXFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiU2Vnb2UgVUlcXFwiLEFyaWFsLHNhbnMtc2VyaWY7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDE1O1xcclxcbiAgICBtYXJnaW4tbGVmdDogMTU7XFxyXFxuICAgIHdpZHRoOiAxMjA7XFxyXFxuICAgIGhlaWdodDogNDA7XFxyXFxuICAgIGhvcml6b250YWwtYWxpZ246bGVmdDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhbmNlbC1idG46aGlnaGxpZ2h0ZWQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVsZXRlLWxhYmVsIHtcXHJcXG5cXHRmb250LXNpemU6IDIwO1xcclxcblxcdG1hcmdpbi10b3A6IDE4O1xcclxcblxcdG1hcmdpbi1ib3R0b206IDQ4O1xcclxcblxcdG1hcmdpbi1sZWZ0OiAxODtcXHJcXG5cXHRtYXJnaW4tcmlnaHQ6IDE4O1xcclxcblxcdGNvbG9yOiBibGFjaztcXHJcXG59XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPFN0YWNrTGF5b3V0PlxcclxcblxcdDxMYWJlbCB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgdGV4dD1cXFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZT9cXFwiIGNsYXNzPVxcXCJkZWxldGUtbGFiZWxcXFwiPjwvTGFiZWw+XFxyXFxuXFx0PEdyaWRMYXlvdXQgcm93cz1cXFwiYXV0b1xcXCIgY29sdW1ucz1cXFwiKlxcXCI+XFxyXFxuXFx0XFx0PEJ1dHRvbiByb3c9XFxcIjBcXFwiIHRleHQ9XFxcIkNhbmNlbFxcXCIgY2xhc3M9XFxcImNhbmNlbC1idG5cXFwiICh0YXApPVxcXCJjbG9zZSgnY2FuY2VsJylcXFwiPjwvQnV0dG9uPlxcclxcblxcdFxcdDxCdXR0b24gcm93PVxcXCIwXFxcIiB0ZXh0PVxcXCJEZWxldGVcXFwiIGNsYXNzPVxcXCJkZWxldGUtYnRuXFxcIiAodGFwKT1cXFwiY2xvc2UoJ2RlbGV0ZScpXFxcIj48L0J1dHRvbj5cXHJcXG5cXHQ8L0dyaWRMYXlvdXQ+XFxyXFxuPC9TdGFja0xheW91dD5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1vZGFsRGlhbG9nUGFyYW1zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2RpcmVjdGl2ZXMvZGlhbG9nc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtY29uZmlybWF0aW9uJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY29uZmlybWF0aW9uLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jb25maXJtYXRpb24uY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb25maXJtYXRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhcmFtczogTW9kYWxEaWFsb2dQYXJhbXMpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG4gIGNsb3NlKHJlcykge1xyXG4gIFx0dGhpcy5wYXJhbXMuY2xvc2VDYWxsYmFjayhyZXMpO1xyXG4gIH1cclxuXHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi8qXFxyXFxuQWRkIHlvdXIgTmF0aXZlU2NyaXB0IHNwZWNpZmljIHN0eWxlcyBoZXJlLlxcclxcblRvIGxlYXJuIG1vcmUgYWJvdXQgc3R5bGluZyBpbiBOYXRpdmVTY3JpcHQgc2VlOlxcclxcbmh0dHBzOi8vZG9jcy5uYXRpdmVzY3JpcHQub3JnL2FuZ3VsYXIvdWkvc3R5bGluZ1xcclxcbiovXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPFN0YWNrTGF5b3V0PlxcclxcbiAgPExhYmVsIHRleHQ9XFxcImNvbm5lY3Qgd29ya3NcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIj48L0xhYmVsPlxcclxcbiAgPExhYmVsIHRleHQ9XFxcIlRoaXMgaXMgYSBtaWdyYXRlZCBjb21wb25lbnRcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIj48L0xhYmVsPlxcclxcbiAgPExhYmVsIHRleHQ9XFxcIlVwZGF0ZSBpdCB0byBwcm92aWRlIHRoZSBVSSBlbGVtZW50cyByZXF1aXJlZCBpbiB5b3VyIG1vYmlsZSBhcHBcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIj48L0xhYmVsPlxcclxcbjwvU3RhY2tMYXlvdXQ+XFxyXFxuXFxyXFxuPCEtLVxcclxcbk9yaWdpbmFsIFdlYiB0ZW1wbGF0ZTpcXHJcXG5cXHJcXG48cD5cXHJcXG4gIGNvbm5lY3Qgd29ya3MhXFxyXFxuPC9wPlxcclxcblxcclxcbi0tPlwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTG9naW5jaGVja1NlcnZpY2UgfSBmcm9tICcuLi9sb2dpbmNoZWNrLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtY29ubmVjdCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2Nvbm5lY3QuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2Nvbm5lY3QuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb25uZWN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBsb2dpbmNoZWNrU2VydmljZTogTG9naW5jaGVja1NlcnZpY2UpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICBcdHRoaXMubG9naW5jaGVja1NlcnZpY2UubG9naW5DaGVjaygpO1xyXG4gIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVHJhbnNmZXJTZXJ2aWNlIHtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6Um91dGVyKSB7IH1cclxuXHJcbiAgcHJpdmF0ZSBkYXRhO1xyXG5cclxuICBzZXREYXRhKGRhdGEpe1xyXG4gICAgdGhpcy5kYXRhID0gZGF0YTtcclxuICB9XHJcblxyXG4gIGdldERhdGEoKXtcclxuICAgIGxldCB0ZW1wID0gdGhpcy5kYXRhO1xyXG4gICAgdGhpcy5jbGVhckRhdGEoKTtcclxuICAgIHJldHVybiB0ZW1wO1xyXG4gIH1cclxuXHJcbiAgY2xlYXJEYXRhKCl7XHJcbiAgICB0aGlzLmRhdGEgPSB1bmRlZmluZWQ7XHJcbiAgfVxyXG5cclxufSIsIm1vZHVsZS5leHBvcnRzID0gXCJwIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZDhjM2VjO1xcclxcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI2Nsb3NlLWRpYWxvZyB7XFxyXFxuXFx0ZmxvYXQ6IHJpZ2h0O1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2Uge1xcclxcblxcdGZvbnQtY29sb3I6IGJsYWNrO1xcclxcbiAgICBmbG9hdDogcmlnaHQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMC41ZW07XFxyXFxufVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxwIGlkPVxcXCJkaWFsb2dcXFwiPlxcclxcbiAgWW91ciBzZXR0aW5ncyBoYXZlIGJlZW4gdXBkYXRlZCFcXHJcXG4gIDxzcGFuIGNsYXNzPVxcXCJjbG9zZVxcXCIgaWQ9XFxcImNsb3NlLWRpYWxvZ1xcXCI+JnRpbWVzOzwvc3Bhbj5cXHJcXG48L3A+XFxyXFxuXCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtZGlhbG9nJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZGlhbG9nLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9kaWFsb2cuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEaWFsb2dDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICBcdFxyXG4gIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICAgIEluamVjdGFibGUsXHJcbiAgICBJbmplY3RvcixcclxuICAgIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuICAgIEVtYmVkZGVkVmlld1JlZixcclxuICAgIEFwcGxpY2F0aW9uUmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBQb3N0aW5nQ29tcG9uZW50IH0gZnJvbSAnLi9wb3N0aW5nL3Bvc3RpbmcuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGF5bWVudE1ldGhvZENvbXBvbmVudCB9IGZyb20gJy4vcGF5bWVudC1tZXRob2QvcGF5bWVudC1tZXRob2QuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVHJhbnNmZXJTZXJ2aWNlIH0gZnJvbSAnLi9kYXRhdHJhbnNmZXIuc2VydmljZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBEeW5hbWljQWRkU2VydmljZSB7XHJcbiAgXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICAgIHByaXZhdGUgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcbiAgICAgIHByaXZhdGUgYXBwUmVmOiBBcHBsaWNhdGlvblJlZixcclxuICAgICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsXHJcbiAgICAgIHByaXZhdGUgdHJhbnNmZXJTZXJ2aWNlOiBUcmFuc2ZlclNlcnZpY2UsXHJcbiAgKSB7IH1cclxuICBcclxuICBhcHBlbmRDb21wb25lbnRUb0JvZHkobGF5b3V0PW51bGwpIHtcclxuICAgIC8vIDEuIENyZWF0ZSBhIGNvbXBvbmVudCByZWZlcmVuY2UgZnJvbSB0aGUgY29tcG9uZW50IFxyXG4gICAgY29uc3QgY29tcG9uZW50UmVmID0gdGhpcy5jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXJcclxuICAgICAgLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KFBvc3RpbmdDb21wb25lbnQpXHJcbiAgICAgIC5jcmVhdGUodGhpcy5pbmplY3Rvcik7XHJcbiAgICAvLyAyLiBBdHRhY2ggY29tcG9uZW50IHRvIHRoZSBhcHBSZWYgc28gdGhhdCBpdCdzIGluc2lkZSB0aGUgbmcgY29tcG9uZW50IHRyZWVcclxuICAgIHRoaXMuYXBwUmVmLmF0dGFjaFZpZXcoY29tcG9uZW50UmVmLmhvc3RWaWV3KTtcclxuICAgIC8vIDMuIEdldCBET00gZWxlbWVudCBmcm9tIGNvbXBvbmVudFxyXG4gICAgY29uc3QgZG9tRWxlbSA9IChjb21wb25lbnRSZWYuaG9zdFZpZXcgYXMgRW1iZWRkZWRWaWV3UmVmPGFueT4pXHJcbiAgICAgIC5yb290Tm9kZXNbMF07XHJcbiAgICAvLyA0LiBBcHBlbmQgRE9NIGVsZW1lbnQgdG8gdGhlIGJvZHlcclxuICAgIGxheW91dC5hZGRDaGlsZChkb21FbGVtKVxyXG4gIH1cclxuXHJcbiAgYXBwZW5kUGF5bWVudE1ldGhvZChtZXRob2QsIGluZm8sIHN1cGVyYm9keSwgaXNBZGQsIHRva2VuKSB7XHJcblxyXG4gIH1cclxufSIsImltcG9ydCB7XHJcbiAgICBJbmplY3RhYmxlLFxyXG4gICAgSW5qZWN0b3IsXHJcbiAgICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcbiAgICBFbWJlZGRlZFZpZXdSZWYsXHJcbiAgICBBcHBsaWNhdGlvblJlZlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgUG9zdGluZ0NvbXBvbmVudCB9IGZyb20gJy4vcG9zdGluZy9wb3N0aW5nLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBheW1lbnRNZXRob2RDb21wb25lbnQgfSBmcm9tICcuL3BheW1lbnQtbWV0aG9kL3BheW1lbnQtbWV0aG9kLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRyYW5zZmVyU2VydmljZSB9IGZyb20gJy4vZGF0YXRyYW5zZmVyLnNlcnZpY2UnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRHluYW1pY0FkZFNlcnZpY2Uge1xyXG4gIFxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgICBwcml2YXRlIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG4gICAgICBwcml2YXRlIGFwcFJlZjogQXBwbGljYXRpb25SZWYsXHJcbiAgICAgIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yLFxyXG4gICAgICBwcml2YXRlIHRyYW5zZmVyU2VydmljZTogVHJhbnNmZXJTZXJ2aWNlLFxyXG4gICkgeyB9XHJcbiAgXHJcbiAgYXBwZW5kQ29tcG9uZW50VG9Cb2R5KGxheW91dD1udWxsKSB7XHJcbiAgICAvLyAxLiBDcmVhdGUgYSBjb21wb25lbnQgcmVmZXJlbmNlIGZyb20gdGhlIGNvbXBvbmVudCBcclxuICAgIGNvbnN0IGNvbXBvbmVudFJlZiA9IHRoaXMuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyXHJcbiAgICAgIC5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShQb3N0aW5nQ29tcG9uZW50KVxyXG4gICAgICAuY3JlYXRlKHRoaXMuaW5qZWN0b3IpO1xyXG4gICAgLy8gMi4gQXR0YWNoIGNvbXBvbmVudCB0byB0aGUgYXBwUmVmIHNvIHRoYXQgaXQncyBpbnNpZGUgdGhlIG5nIGNvbXBvbmVudCB0cmVlXHJcbiAgICB0aGlzLmFwcFJlZi5hdHRhY2hWaWV3KGNvbXBvbmVudFJlZi5ob3N0Vmlldyk7XHJcbiAgICAvLyAzLiBHZXQgRE9NIGVsZW1lbnQgZnJvbSBjb21wb25lbnRcclxuICAgIGNvbnN0IGRvbUVsZW0gPSAoY29tcG9uZW50UmVmLmhvc3RWaWV3IGFzIEVtYmVkZGVkVmlld1JlZjxhbnk+KVxyXG4gICAgICAucm9vdE5vZGVzWzBdO1xyXG4gICAgLy8gNC4gQXBwZW5kIERPTSBlbGVtZW50IHRvIHRoZSBib2R5XHJcbiAgICBsYXlvdXQuYWRkQ2hpbGQoZG9tRWxlbSlcclxuICB9XHJcblxyXG4gIGFwcGVuZFBheW1lbnRNZXRob2QobWV0aG9kLCBpbmZvLCBzdXBlcmJvZHksIGlzQWRkLCB0b2tlbikge1xyXG5cclxuICB9XHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLmZsb2F0LWJ0biB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2FjMDBlNjtcXHJcXG5cXHR3aWR0aDogNTY7XFxyXFxuXFx0aGVpZ2h0OiA1NjtcXHJcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxufVxcclxcblxcclxcbi5mbG9hdC1idG4tdGV4dCB7XFxyXFxuXFx0Y29sb3I6ICNmZmZmZmY7XFxyXFxuXFx0Zm9udC1zaXplOiAzNjtcXHJcXG5cXHQvKm1hcmdpbi10b3A6IC02OyovXFxyXFxufVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxTdGFja0xheW91dCBjbGFzcz1cXFwiZmxvYXQtYnRuXFxcIj5cXHJcXG5cXHQ8TGFiZWwgY2xhc3M9XFxcImZsb2F0LWJ0bi10ZXh0XFxcIiB0ZXh0PVxcXCIrXFxcIj48L0xhYmVsPlxcclxcbjwvU3RhY2tMYXlvdXQ+XCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtZmxvYXQtYnRuJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZmxvYXQtYnRuLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9mbG9hdC1idG4uY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGbG9hdEJ0bkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuXHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi8qIEFkZCBtb2JpbGUgc3R5bGVzIGZvciB0aGUgY29tcG9uZW50IGhlcmUuICAqL1xcclxcbi5oZWFkZXJ7XFxyXFxuICAgIG1hcmdpbi10b3A6IDUwO1xcclxcbiAgICBtYXJnaW4tbGVmdDogMjI7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMjI7XFxyXFxuXFx0Y29sb3I6IGJsYWNrO1xcclxcbiAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICBmb250LXNpemU6IDE4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zdWJtaXQtYnRue1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNhYzAwZTY7XFxyXFxuICAgIHdpZHRoOiA3NSU7XFxyXFxuICAgIGhlaWdodDogMTcwcHg7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiU2Vnb2UgVUlcXFwiLEFyaWFsLHNhbnMtc2VyaWY7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgbWFyZ2luLXRvcDogMjA7XFxyXFxufVxcclxcbi50ZXh0LWZpZWxke1xcclxcbiAgICB3aWR0aDogODUlO1xcclxcbiAgICBtYXJnaW4tdG9wOiAyMDtcXHJcXG4gICAgY29sb3I6IzY5Njk2OVxcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2UtYnV0dG9uLWNvbnRhaW5lciB7XFxyXFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdGxlZnQ6IDA7XFxyXFxufVxcclxcbi5jbG9zZSB7XFxyXFxuXFx0bWFyZ2luOiAxMDtcXHJcXG5cXHRmb250LXNpemU6IDQwO1xcclxcblxcdHdpZHRoOiA0ODtcXHJcXG4gICAgaGVpZ2h0OiA0ODtcXHJcXG4gICAgY29sb3I6IGJsYWNrXFxyXFxufVxcclxcblxcclxcbi5lcnJvci1tZXNzYWdlIHtcXHJcXG5cXHRjb2xvcjogcmVkO1xcclxcblxcdGZvbnQtc2l6ZTogMTY7XFxyXFxuXFx0dmlzaWJpbGl0eTogY29sbGFwc2U7XFxyXFxufVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxTdGFja2xheW91dD5cXHJcXG4gICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiY2xvc2UtYnV0dG9uLWNvbnRhaW5lclxcXCIgb3JpZW50YXRpb249XFxcImhvcml6b250YWxcXFwiPlxcclxcbiAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCImdGltZXM7XFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiICh0YXApPVxcXCJjbG9zZSgnY2FuY2VsJylcXFwiPjwvTGFiZWw+XFxyXFxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxcclxcbiAgICAgICAgPExhYmVsIGNsYXNzPVxcXCJoZWFkZXJcXFwiIHRleHQ9XFxcIkVudGVyIHRoZSBlbWFpbCBhZGRyZXNzIHlvdSB1c2VkIHRvIHJlZ2lzdGVyIGZvciBDb2xsZWdlUG9vbCB0byByZXNldCB5b3VyIHBhc3N3b3JkLlxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiPjwvTGFiZWw+XFxyXFxuICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImlucHV0LWZpZWxkXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZCBjbGFzcz1cXFwidGV4dC1maWVsZFxcXCIgaGludD1cXFwiRW1haWxcXFwiIGtleWJvYXJkVHlwZT1cXFwiZW1haWxcXFwiIGF1dG9jb3JyZWN0PVxcXCJmYWxzZVxcXCIgYXV0b2NhcGl0YWxpemF0aW9uVHlwZT1cXFwibm9uZVxcXCIgWyhuZ01vZGVsKV09XFxcImVtYWlsXFxcIiByZXR1cm5LZXlUeXBlPVxcXCJuZXh0XFxcIiAocmV0dXJuUHJlc3MpPVxcXCJmb2N1c1Bhc3N3b3JkKClcXFwiICNlbT48L1RleHRGaWVsZD5cXHJcXG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxyXFxuICAgICAgICA8TGFiZWwgdGV4dD1cXFwiTm8gYWNjb3VudCBjb3VsZCBiZSBmb3VuZCB3aXRoIHlvdXIgZW1haWxcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiBjbGFzcz1cXFwiZXJyb3ItbWVzc2FnZVxcXCIgI2Vycm9yTWVzc2FnZT48L0xhYmVsPlxcclxcbiAgICBcXHJcXG4gICAgICAgIDxCdXR0b24gdGV4dD1cXFwiU3VibWl0XFxcIiAodGFwKT1cXFwic3VibWl0KGVtYWlsKVxcXCIgY2xhc3M9XFxcInN1Ym1pdC1idG5cXFwiPjwvQnV0dG9uPlxcclxcbiAgICBcXHJcXG4gICAgPC9TdGFja2xheW91dD5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q29udGFpbmVyUmVmLCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTW9kYWxEaWFsb2dQYXJhbXMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZGlyZWN0aXZlcy9kaWFsb2dzXCI7XHJcbmltcG9ydCAqIGFzIGZpcmViYXNlIGZyb20gJ25hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2UnO1xyXG5pbXBvcnQgeyBMb2dpbmNoZWNrU2VydmljZSB9IGZyb20gJy4uL2xvZ2luY2hlY2suc2VydmljZS50bnMnO1xyXG5pbXBvcnQgeyBUcmFuc2ZlclNlcnZpY2UgfSBmcm9tICcuLi9kYXRhdHJhbnNmZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IE1vZGFsRGlhbG9nU2VydmljZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9kaXJlY3RpdmVzL2RpYWxvZ3NcIjtcclxuaW1wb3J0IHsgTGFiZWwgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2xhYmVsJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYXBwLWZvcmdldC1mb3JtJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9mb3JnZXQtZm9ybS5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9mb3JnZXQtZm9ybS5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEZvcmdldEZvcm1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFyYW1zOiBNb2RhbERpYWxvZ1BhcmFtcywgcHJpdmF0ZSB0cmFuc2ZlclNlcnZpY2U6IFRyYW5zZmVyU2VydmljZSwgcHJpdmF0ZSBsb2dpbmNoZWNrU2VydmljZTogTG9naW5jaGVja1NlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSB2Y1JlZjogVmlld0NvbnRhaW5lclJlZiwgcHJpdmF0ZSBtb2RhbDogTW9kYWxEaWFsb2dTZXJ2aWNlKSB7IH1cclxuXHJcbiAgICBAVmlld0NoaWxkKFwiZXJyb3JNZXNzYWdlXCIseyBzdGF0aWM6IHRydWUgfSkgZW06IEVsZW1lbnRSZWY7XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2UocmVzKSB7XHJcbiAgICAgICAgbGV0IGVycm9yTWVzc2FnZSA9IDxMYWJlbD50aGlzLmVtLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICAgICAgZXJyb3JNZXNzYWdlLnN0eWxlLnZpc2liaWxpdHkgPSAnY29sbGFwc2UnO1xyXG4gICAgICAgIHRoaXMucGFyYW1zLmNsb3NlQ2FsbGJhY2socmVzKTtcclxuICAgIH1cclxuXHJcbiAgICBzdWJtaXQoZW1haWwpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImVtYWlsXCIsIGVtYWlsKVxyXG4gICAgICAgIGZpcmViYXNlLnNlbmRQYXNzd29yZFJlc2V0RW1haWwoZW1haWwpLnRoZW4oXHJcbiAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWxlcnQoJ0FuIGVtYWlsIGhhcyBiZWVuIHNlbnQgdG8gJyArIGVtYWlsICsgJyB3aXRoIGRldGFpbHMgb2YgaG93IHRvIHJlY292ZXIgeW91ciBhY2NvdW50JylcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoJ2NhbmNlbCcpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGVycm9yTWVzc2FnZSA9IDxMYWJlbD4gdGhpcy5lbS5uYXRpdmVFbGVtZW50O1xyXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgYWxlcnQobWVzc2FnZTogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIGFsZXJ0KHtcclxuICAgICAgICAgICAgdGl0bGU6IFwiQ29sbGVnZVBvb2xcIixcclxuICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIkNsb3NlXCIsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEdvb2dsZU1hcHNTZXJ2aWNlIHtcclxuXHJcbiAgQVBJX0tFWSA9ICdBSXphU3lBSVR4UzFqbWY4UE10YXpSZ3VXY0FmV1F4VzFrUE9vWWcnO1xyXG4gIHN0YXRpY19tYXBzX3VyaSA9ICdodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvc3RhdGljbWFwP2tleT0nICsgdGhpcy5BUElfS0VZICsgJyZzaXplPTM0MHgyMjAmc2NhbGU9MiZtYXB0eXBlPXJvYWRtYXBcXCZtYXJrZXJzPXNpemU6c21hbGwlN0Njb2xvcjpyZWQlN0MnXHJcbiAgc3RhdGljX21hcHNfdXJpX2xhcmdlID0gJ2h0dHBzOi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9zdGF0aWNtYXA/a2V5PScgKyB0aGlzLkFQSV9LRVkgKyAnJnNpemU9NTEyeDUxMiZzY2FsZT0yJm1hcHR5cGU9cm9hZG1hcFxcJm1hcmtlcnM9c2l6ZTpzbWFsbCU3Q2NvbG9yOnJlZCU3QydcclxuICBcclxuICBnZW9jb2RlX3VyaSA9ICdodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvZ2VvY29kZS9qc29uP2tleT0nICsgdGhpcy5BUElfS0VZICsgJyZhZGRyZXNzPSdcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHBDbGllbnQ6IEh0dHBDbGllbnQpIHsgfVxyXG5cclxuICBnZXRTdGF0aWNNYXAoc3RhcnRhZHIsIGVuZGFkcikge1xyXG4gIFx0dmFyIGZvcm1hdHRlZF9zdGFydGFkciA9IHN0YXJ0YWRyLnNwbGl0KCcgJykuam9pbignKycpXHJcbiAgXHR2YXIgZm9ybWF0dGVkX3N0YXJ0YWRyID0gc3RhcnRhZHIuc3BsaXQoJyYnKS5qb2luKCdhbmQnKVxyXG4gIFx0dmFyIGZvcm1hdHRlZF9lbmRhZHIgPSBlbmRhZHIuc3BsaXQoJyAnKS5qb2luKCcrJylcclxuICBcdHZhciBmb3JtYXR0ZWRfZW5kYWRyID0gZW5kYWRyLnNwbGl0KCcmJykuam9pbignYW5kJylcclxuICBcdHJldHVybiB0aGlzLnN0YXRpY19tYXBzX3VyaSArIGZvcm1hdHRlZF9zdGFydGFkciArIFwiJm1hcmtlcnM9c2l6ZTptZWQlN0NcIiArIGZvcm1hdHRlZF9lbmRhZHI7XHJcbiAgfVxyXG5cclxuICBnZXRTdGF0aWNNYXBMYXJnZShzdGFydGFkciwgZW5kYWRyKSB7XHJcbiAgXHR2YXIgZm9ybWF0dGVkX3N0YXJ0YWRyID0gc3RhcnRhZHIuc3BsaXQoJyAnKS5qb2luKCcrJylcclxuICBcdHZhciBmb3JtYXR0ZWRfc3RhcnRhZHIgPSBzdGFydGFkci5zcGxpdCgnJicpLmpvaW4oJ2FuZCcpXHJcbiAgXHR2YXIgZm9ybWF0dGVkX2VuZGFkciA9IGVuZGFkci5zcGxpdCgnICcpLmpvaW4oJysnKVxyXG4gIFx0dmFyIGZvcm1hdHRlZF9lbmRhZHIgPSBlbmRhZHIuc3BsaXQoJyYnKS5qb2luKCdhbmQnKVxyXG4gIFx0cmV0dXJuIHRoaXMuc3RhdGljX21hcHNfdXJpX2xhcmdlICsgZm9ybWF0dGVkX3N0YXJ0YWRyICsgXCImbWFya2Vycz1zaXplOm1lZCU3Q1wiICsgZm9ybWF0dGVkX2VuZGFkcjtcclxuICB9XHJcblxyXG4gIGdldEdlb2NvZGVSZXN1bHRzKGFkZHJlc3MpIHtcclxuICBcdHZhciBmb3JtYXR0ZWRfYWRkcmVzcyA9IGFkZHJlc3Muc3BsaXQoJyAnKS5qb2luKCcrJylcclxuICBcdHZhciBmb3JtYXR0ZWRfYWRkcmVzcyA9IGFkZHJlc3Muc3BsaXQoJyYnKS5qb2luKCdhbmQnKVxyXG4gIFx0cmV0dXJuIHRoaXMuaHR0cENsaWVudC5nZXQoYCR7dGhpcy5nZW9jb2RlX3VyaX1gICsgZm9ybWF0dGVkX2FkZHJlc3MpO1xyXG4gIH1cclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLypcXHJcXG5BZGQgeW91ciBOYXRpdmVTY3JpcHQgc3BlY2lmaWMgc3R5bGVzIGhlcmUuXFxyXFxuVG8gbGVhcm4gbW9yZSBhYm91dCBzdHlsaW5nIGluIE5hdGl2ZVNjcmlwdCBzZWU6XFxyXFxuaHR0cHM6Ly9kb2NzLm5hdGl2ZXNjcmlwdC5vcmcvYW5ndWxhci91aS9zdHlsaW5nXFxyXFxuKi9cXHJcXG5cXHJcXG4uYWN0aW9uYmFyIHtcXHJcXG5cXHRmb250LXNpemU6IDIyO1xcclxcblxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuXFx0dGV4dC1hbGlnbjogbGVmdDtcXHJcXG5cXHRjb2xvcjogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbkxhYmVsIHtcXHJcXG5cXHR0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbn1cXHJcXG5cXHJcXG4ubmFtZS1sYWJlbCB7XFxyXFxuXFx0bWFyZ2luLXRvcDogMTY7XFxyXFxuXFx0bWFyZ2luLWxlZnQ6IDE4O1xcclxcblxcdGNvbG9yOiBibGFjaztcXHJcXG5cXHRmb250LXdlaWdodDogNzAwO1xcclxcblxcdGZvbnQtc2l6ZTogMTc7XFxyXFxufVxcclxcblxcclxcbi5pbmZvLWxhYmVsIHtcXHJcXG5cXHRtYXJnaW4tdG9wOiA0O1xcclxcblxcdG1hcmdpbi1sZWZ0OiAxODtcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiAxNjtcXHJcXG5cXHRjb2xvcjogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5wb3N0IHtcXHJcXG5cXHRib3JkZXItYm90dG9tLXdpZHRoOiAxO1xcclxcblxcdGJvcmRlci1jb2xvcjogI2YxZjFmMTtcXHJcXG5cXHRtYXJnaW4tdG9wOiAxNTA7XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTogMTU7XFxyXFxufVxcclxcblxcclxcbi5wb3N0OmhpZ2hsaWdodGVkIHtcXHJcXG5cXHQvKmJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7Ki9cXHJcXG59XFxyXFxuXFxyXFxuLnBvc3RpbmctbWFwIHtcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiAxNjtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAxMDtcXHJcXG5cXHRoZWlnaHQ6IDIyMDtcXHJcXG5cXHR3aWR0aDogMzQwO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvZmlsZS1waWN0dXJlIHtcXHJcXG5cXHRoZWlnaHQ6IDUwO1xcclxcblxcdHdpZHRoOiA1MDtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAyNTtcXHJcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcclxcblxcdG1hcmdpbi1sZWZ0OiAxNjtcXHJcXG5cXHRtYXJnaW4tdG9wOiAyMDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlZnJlc2gge1xcclxcblxcdGNvbG9yOiAjYWMwMGU2O1xcclxcbn1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8IS0tIDxhcHAtbmF2aWdhdGlvbj48L2FwcC1uYXZpZ2F0aW9uPiAtLT5cXHJcXG48UHVsbFRvUmVmcmVzaCAocmVmcmVzaCk9XFxcInJlZnJlc2hMaXN0KCRldmVudClcXFwiIGNsYXNzPVxcXCJyZWZyZXNoXFxcIj5cXHJcXG5cXHQ8TGlzdFZpZXcgW2l0ZW1zXT1cXFwicG9zdGluZ3NcXFwiIChpdGVtVGFwKT1cXFwib25JdGVtVGFwKCRldmVudClcXFwiICNsaXN0VmlldyBpZD1cXFwibGlzdFZpZXdcXFwiPlxcclxcblxcdCAgICA8bmctdGVtcGxhdGUgbGV0LWl0ZW09XFxcIml0ZW1cXFwiIGxldC1pPVxcXCJpbmRleFxcXCIgbGV0LW9kZD1cXFwib2RkXFxcIiBsZXQtZXZlbj1cXFwiZXZlblxcXCI+XFxyXFxuXFx0ICAgICAgICA8U3RhY2tMYXlvdXQgW2NsYXNzLm9kZF09XFxcIm9kZFxcXCIgW2NsYXNzLmV2ZW5dPVxcXCJldmVuXFxcIiBjbGFzcz1cXFwicG9zdFxcXCI+XFxyXFxuXFx0ICAgICAgICBcXHQgIDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cXFwiaG9yaXpvbnRhbFxcXCI+XFxyXFxuXFx0ICAgICAgICBcXHQgIFxcdDxJbWFnZUNhY2hlSXQgW3NyY109XFxcIml0ZW0ucHJvZmlsZVNvdXJjZVxcXCIgY2xhc3M9XFxcInByb2ZpbGUtcGljdHVyZVxcXCIgc3RyZXRjaD1cXFwiYXNwZWN0Rml0XFxcIj48L0ltYWdlQ2FjaGVJdD5cXHJcXG5cXHQgICAgICAgIFxcdCAgXFx0PFN0YWNrTGF5b3V0PlxcclxcblxcdFxcdCAgICAgICAgICAgICAgXFx0PExhYmVsIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiBpZD1cXFwicG9zdC1uYW1lXFxcIiBjbGFzcz1cXFwibmFtZS1sYWJlbFxcXCIgW3RleHRdPVxcXCJpdGVtLnVzZXJuYW1lXFxcIj48L0xhYmVsPlxcclxcblxcdFxcdCAgICAgICAgICAgICAgXFx0PExhYmVsIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiBpZD1cXFwicG9zdC1pbmZvXFxcIiBjbGFzcz1cXFwiaW5mby1sYWJlbFxcXCIgW3RleHRdPVxcXCJpdGVtLmluZm9cXFwiPjwvTGFiZWw+XFxyXFxuXFx0XFx0ICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXHJcXG5cXHQgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxyXFxuXFx0XFx0XFx0XFx0ICA8SW1hZ2VDYWNoZUl0IFtzcmNdPVxcXCJpdGVtLm1hcFNvdXJjZVxcXCIgc3RyZXRjaD1cXFwiYXNwZWN0Rml0XFxcIiBjbGFzcz1cXFwicG9zdGluZy1tYXBcXFwiPjwvSW1hZ2VDYWNoZUl0PlxcclxcblxcdCAgICAgICAgPC9TdGFja0xheW91dD5cXHJcXG5cXHQgICAgPC9uZy10ZW1wbGF0ZT5cXHJcXG5cXHQ8L0xpc3RWaWV3PlxcclxcbjwvUHVsbFRvUmVmcmVzaD5cXHJcXG5cXHJcXG48IS0tXFxyXFxuT3JpZ2luYWwgV2ViIHRlbXBsYXRlOlxcclxcblxcclxcbjxhcHAtbmF2aWdhdGlvbj48L2FwcC1uYXZpZ2F0aW9uPlxcclxcblxcclxcbjxkaXYgY2xhc3M9XFxcInJpZ2h0LWJhY2tncm91bmRcXFwiPlxcclxcblxcdDxkaXYgY2xhc3M9XFxcInVzZXItY2FyZC1yaWdodCBpbmZvXFxcIj5cXHJcXG5cXHRcXHQ8aW1nIHNyYz1cXFwic3JjL2ltZy9zYW1wbGVfcHJvZmlsZS5qcGdcXFwiIGFsdD1cXFwiUHJvZmlsZSBQaG90b1xcXCIgaWQ9XFxcInByb2ZpbGVfcGljXFxcIj5cXHJcXG5cXHRcXHQ8ZGl2IGlkPVxcXCJuYW1lX2luZm9cXFwiPlxcclxcblxcdFxcdFxcdDxoMyBpZD1cXFwidXNlcm5hbWVcXFwiPnt7dXNlci5uYW1lfX08L2gzPlxcclxcblxcdFxcdFxcdDxoMyBpZD1cXFwidXNlcl91bml2ZXJzaXR5XFxcIj5Vbml2ZXJzaXR5IG9mIFZpcmdpbmlhPC9oMz5cXHJcXG5cXHRcXHQ8L2Rpdj5cXHJcXG5cXHRcXHQ8ZGl2IGNsYXNzPVxcXCJ1c2VyU3RhdHNcXFwiPlxcclxcblxcdFxcdFxcdDxzcGFuIGlkPVxcXCJ1c2VyX3JpZGVzX2dpdmVuXFxcIiBjbGFzcz1cXFwidXNlckRhdGFcXFwiPlJpZGVzIEdpdmVuOiA8L3NwYW4+XFxyXFxuXFx0XFx0XFx0PHNwYW4gaWQ9XFxcIm51bV9yaWRlc19naXZlblxcXCI+PC9zcGFuPlxcclxcblxcdFxcdFxcdDxzcGFuIGlkPVxcXCJ1c2VyX3JpZGVzX3JlY2VpdmVkXFxcIiBjbGFzcz1cXFwidXNlckRhdGFcXFwiPlJpZGVzIFJlY2VpdmVkOiA8L3NwYW4+XFxyXFxuXFx0XFx0XFx0PHNwYW4gaWQ9XFxcIm51bV9yaWRlc19yZWNlaXZlZFxcXCI+PC9zcGFuPlxcclxcblxcdFxcdDwvZGl2PlxcclxcblxcdDwvZGl2PlxcclxcbjwvZGl2PlxcclxcbjxkaXYgaWQ9XFxcImhpc3RvcnlcXFwiIGNsYXNzPVxcXCJ0YWJjb250ZW50XFxcIj5cXHJcXG5cXHQ8aDMgYWxpZ249XFxcImNlbnRlclxcXCI+WW91ciBSaWRlczwvaDM+XFxyXFxuXFx0PGRpdiBpZD1cXFwiYmlnZmVlZFxcXCIgKHdpbmRvdzpyZXNpemUpPVxcXCJvblJlc2l6ZSgkZXZlbnQpXFxcIj48L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG4tLT5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVHJhbnNmZXJTZXJ2aWNlIH0gZnJvbSAnLi4vZGF0YXRyYW5zZmVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBQb3N0aW5nU2VydmljZSB9IGZyb20gJy4uL3Bvc3Rpbmcuc2VydmljZSc7XHJcbmltcG9ydCB7IFBvc3RpbmcgfSBmcm9tICcuLi9wb3N0aW5nLm1vZGVsJztcclxuaW1wb3J0IHsgRHluYW1pY0FkZFNlcnZpY2UgfSBmcm9tICcuLi9keW5hbWljLWFkZC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTG9naW5jaGVja1NlcnZpY2UgfSBmcm9tICcuLi9sb2dpbmNoZWNrLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlQXJyYXkgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS1hcnJheSc7XHJcbmltcG9ydCAqIGFzIGZpcmViYXNlIGZyb20gJ25hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2UnO1xyXG5pbXBvcnQgeyBMaXN0VmlldyB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvbGlzdC12aWV3JztcclxuaW1wb3J0IHsgSW1hZ2VTb3VyY2UsIGZyb21GaWxlLCBmcm9tUmVzb3VyY2UsIGZyb21CYXNlNjQsIGZyb21OYXRpdmVTb3VyY2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9pbWFnZS1zb3VyY2VcIjtcclxuaW1wb3J0IHsgRm9sZGVyLCBwYXRoLCBrbm93bkZvbGRlcnMgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9maWxlLXN5c3RlbVwiO1xyXG5pbXBvcnQgeyBDYWNoZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ltYWdlLWNhY2hlXCI7XHJcblxyXG5cclxuY2xhc3MgUG9zdEl0ZW0ge1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIHVzZXJuYW1lOiBTdHJpbmcsIHB1YmxpYyBpbmZvOiBzdHJpbmcsIHB1YmxpYyBwcm9maWxlU291cmNlOiBzdHJpbmcsIHB1YmxpYyBtYXBTb3VyY2U6IHN0cmluZykgeyB9XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLWhpc3RvcnknLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9oaXN0b3J5LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9oaXN0b3J5LmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSGlzdG9yeUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ2xpc3RWaWV3JywgeyBzdGF0aWM6IHRydWUgfSkgbHY6IEVsZW1lbnRSZWY7XHJcbiAgLy91c2VyID0gdGhpcy5sb2dpbmNoZWNrU2VydmljZS5nZXRVc2VyKCk7XHJcbiAgdXNlciA9ICcnO1xyXG4gIG5hbWUgPSBcIkFkYW0gWWVlXCI7XHJcbiAgYmxvY2tzID0gMDtcclxuICBwb3N0aW5ncyA9IG5ldyBPYnNlcnZhYmxlQXJyYXk8UG9zdEl0ZW0+KCk7XHJcbiAgcCA9IFtdO1xyXG4gIGlkcyA9IFtdO1xyXG4gIC8vIGNhY2hlID0gbmV3IENhY2hlKCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbG9naW5jaGVja1NlcnZpY2U6IExvZ2luY2hlY2tTZXJ2aWNlLCBwcml2YXRlIHRyYW5zZmVyU2VydmljZTogVHJhbnNmZXJTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHBvc3RpbmdTZXJ2aWNlOiBQb3N0aW5nU2VydmljZSwgcHJpdmF0ZSBhZGRTZXJ2aWNlOiBEeW5hbWljQWRkU2VydmljZSkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIFx0dGhpcy5sb2dpbmNoZWNrU2VydmljZS5sb2dpbkNoZWNrKCk7XHJcbiAgXHR0aGlzLnVzZXIgPSB0aGlzLmxvZ2luY2hlY2tTZXJ2aWNlLmdldFVzZXIoKVxyXG4gIFx0dGhpcy5sb2FkUG9zdGluZ3MoKTtcclxuICB9XHJcblxyXG4gIGxvYWRQb3N0aW5ncyhhcmdzPW51bGwpIHtcclxuICAgIHRoaXMucG9zdGluZ3Muc3BsaWNlKDApO1xyXG4gICAgdmFyIHBvc3RJZHMgPSBbXTtcclxuICAgIHZhciBwb3N0aW5nc0NvbGxlY3Rpb24gPSBmaXJlYmFzZS5maXJlc3RvcmUuY29sbGVjdGlvbigncG9zdGluZ3MnKTtcclxuICAgIHZhciB1c2Vyc0NvbGxlY3Rpb24gPSBmaXJlYmFzZS5maXJlc3RvcmUuY29sbGVjdGlvbigndXNlcnMnKS5kb2ModGhpcy51c2VyKTtcclxuICAgIHVzZXJzQ29sbGVjdGlvbi5nZXQoKS50aGVuKGRvYyA9PiB7XHJcbiAgICBcdHBvc3RJZHMgPSBkb2MuZGF0YSgpLnBvc3RzO1xyXG4gICAgXHRmb3IodmFyIGkgPSAwOyBpIDwgcG9zdElkcy5sZW5ndGg7IGkrKykge1xyXG4gICAgXHRcdHBvc3RpbmdzQ29sbGVjdGlvbi5kb2MocG9zdElkc1tpXSkuZ2V0KCkudGhlbihkb2MgPT4ge1xyXG4gICAgICAgICAgdGhpcy5jcmVhdGVQb3N0aW5nKGRvYy5kYXRhKCksIGRvYy5pZCk7XHJcbiAgICBcdFx0fSlcclxuICAgIFx0fVxyXG4gICAgXHRpZihhcmdzICE9IG51bGwpIHtcclxuXHQgICAgICAgIHZhciBwdWxsUmVmcmVzaCA9IGFyZ3Mub2JqZWN0O1xyXG5cdCAgICAgICAgcHVsbFJlZnJlc2gucmVmcmVzaGluZyA9IGZhbHNlO1xyXG5cdCAgICB9XHJcblx0ICAgIHZhciBsaXN0VmlldyA9IDxMaXN0Vmlldz4gdGhpcy5sdi5uYXRpdmVFbGVtZW50O1xyXG5cdCAgICBsaXN0Vmlldy5zY3JvbGxUb0luZGV4KHBvc3RJZHMubGVuZ3RoIC0gMSk7XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgY3JlYXRlUG9zdGluZyhkYXRhLCBpZCkge1xyXG4gICAgLy8gdGhpcy5jYWNoZS5wbGFjZWhvbGRlciA9IGZyb21GaWxlKFwifi9pbWcvZ3JheV9iYWNrZ3JvdW5kLmpwZ1wiKTtcclxuICAgIC8vIHRoaXMuY2FjaGUubWF4UmVxdWVzdHMgPSA1O1xyXG4gICAgbGV0IGluZm9fbGFiZWwgPSBcIlwiO1xyXG4gICAgaWYoZGF0YS5jYXBhY2l0eSAhPSBcIi0xXCIpXHJcbiAgICAgIGluZm9fbGFiZWwgPSBcIk9mZmVyaW5nIHJpZGUgbGVhdmluZyBcIiArIGRhdGEuZGF0ZSArIFwiIGZyb20gXCIgKyBkYXRhLnN0YXJ0QWRkcmVzcyArIFwiIHRvIFwiICsgZGF0YS5lbmRBZGRyZXNzICsgXCIgZm9yIFwiICsgZGF0YS5wcmljZTtcclxuICAgIGVsc2VcclxuICAgICAgaW5mb19sYWJlbCA9IFwiUmVxdWVzdGluZyByaWRlIGxlYXZpbmcgXCIgKyBkYXRhLmRhdGUgKyBcIiBmcm9tIFwiICsgZGF0YS5zdGFydEFkZHJlc3MgKyBcIiB0byBcIiArIGRhdGEuZW5kQWRkcmVzcztcclxuICAgIGNvbnN0IHVzZXJzQ29sbGVjdGlvbiA9IGZpcmViYXNlLmZpcmVzdG9yZS5jb2xsZWN0aW9uKCd1c2VycycpO1xyXG4gICAgdXNlcnNDb2xsZWN0aW9uLmRvYyhkYXRhLnVpZCkuZ2V0KCkudGhlbigoZG9jKSA9PiB7XHJcbiAgICAgIGlmKGRvYy5leGlzdHMpIHtcclxuICAgICAgICB2YXIgdXJsID0gZG9jLmRhdGEoKS5wcm9maWxlX3NvdXJjZTtcclxuICAgICAgICAvLyBpZih1cmwuc3Vic3RyaW5nKDAsIDI3KSA9PT0gJ2h0dHBzOi8vZ3JhcGguZmFjZWJvb2suY29tLycpXHJcbiAgICAgICAgLy8gICB1cmwgKz0gJz9oZWlnaHQ9MzAwJztcclxuICAgICAgICB0aGlzLnBvc3RpbmdzLnB1c2gobmV3IFBvc3RJdGVtKGRhdGEudXNlciwgaW5mb19sYWJlbCwgdXJsLCBkYXRhLm1hcF91cmwpKTtcclxuICAgICAgICB0aGlzLnAucHVzaChkYXRhKVxyXG4gICAgICAgIHRoaXMuaWRzLnB1c2goaWQpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICByZWZyZXNoTGlzdChhcmdzKSB7XHJcbiAgICB0aGlzLmxvYWRQb3N0aW5ncyhhcmdzKTtcclxuICB9XHJcblxyXG4gIC8vIGFkZENhY2hlKHVybCkge1xyXG4gIC8vICAgbGV0IGNhY2hlZEltYWdlU291cmNlO1xyXG4gIC8vICAgY29uc3QgbXlJbWFnZSA9IHRoaXMuY2FjaGUuZ2V0KHVybCk7XHJcbiAgLy8gICBpZiAobXlJbWFnZSkge1xyXG4gIC8vICAgICAgIC8vIElmIHByZXNlbnQgLS0gdXNlIGl0LlxyXG4gIC8vICAgICAgIGNhY2hlZEltYWdlU291cmNlID0gZnJvbU5hdGl2ZVNvdXJjZShteUltYWdlKTtcclxuICAvLyAgICAgICByZXR1cm4gY2FjaGVkSW1hZ2VTb3VyY2U7XHJcbiAgLy8gICB9IGVsc2Uge1xyXG4gIC8vICAgICAgIC8vIElmIG5vdCBwcmVzZW50IC0tIHJlcXVlc3QgaXRzIGRvd25sb2FkICsgcHV0IGl0IGluIHRoZSBjYWNoZS5cclxuICAvLyAgICAgICB0aGlzLmNhY2hlLnB1c2goe1xyXG4gIC8vICAgICAgICAgICBrZXk6IHVybCxcclxuICAvLyAgICAgICAgICAgdXJsOiB1cmwsXHJcbiAgLy8gICAgICAgICAgIGNvbXBsZXRlZDogKGltYWdlLCBrZXkpID0+IHtcclxuICAvLyAgICAgICAgICAgICAgIGlmICh1cmwgPT09IGtleSkge1xyXG4gIC8vICAgICAgICAgICAgICAgICAgIGNhY2hlZEltYWdlU291cmNlID0gZnJvbU5hdGl2ZVNvdXJjZShpbWFnZSk7XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgcmV0dXJuIGNhY2hlZEltYWdlU291cmNlO1xyXG4gIC8vICAgICAgICAgICAgICAgfVxyXG4gIC8vICAgICAgICAgICB9XHJcbiAgLy8gICAgICAgfSk7XHJcbiAgLy8gICB9XHJcbiAgLy8gfVxyXG5cclxuICBvbkl0ZW1UYXAoYXJncykge1xyXG4gICAgdGhpcy50cmFuc2ZlclNlcnZpY2Uuc2V0RGF0YSh7XHJcbiAgICAgIHBvc3RJbmZvOiB7aWQ6IHRoaXMuaWRzW2FyZ3MuaW5kZXhdLCBkYXRhOiB0aGlzLnBbYXJncy5pbmRleF19LFxyXG4gICAgICBwb3N0SXRlbTogdGhpcy5wb3N0aW5ncy5nZXRJdGVtKGFyZ3MuaW5kZXgpXHJcbiAgICB9KVxyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydwb3N0aW5nLWluZm8nXSlcclxuICB9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbYXBwSG9tZV0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIb21lRGlyZWN0aXZlIHtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi8qXFxyXFxuQWRkIHlvdXIgTmF0aXZlU2NyaXB0IHNwZWNpZmljIHN0eWxlcyBoZXJlLlxcclxcblRvIGxlYXJuIG1vcmUgYWJvdXQgc3R5bGluZyBpbiBOYXRpdmVTY3JpcHQgc2VlOlxcclxcbmh0dHBzOi8vZG9jcy5uYXRpdmVzY3JpcHQub3JnL2FuZ3VsYXIvdWkvc3R5bGluZ1xcclxcbiovXFxyXFxuLnJlZnJlc2gge1xcclxcblxcdGNvbG9yOiAjYWMwMGU2O1xcclxcbn1cXHJcXG5cXHJcXG4uYWN0aW9uYmFyIHtcXHJcXG5cXHRmb250LXNpemU6IDIyO1xcclxcblxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuXFx0dGV4dC1hbGlnbjogbGVmdDtcXHJcXG5cXHRjb2xvcjogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5hZGQtYnRuLWNvbnRhaW5lciB7XFxyXFxuXFx0Lypwb3NpdGlvbjogYWJzb2x1dGU7Ki9cXHJcXG5cXHQvKmJvdHRvbTogMDsqL1xcclxcblxcdC8qcmlnaHQ6IDA7Ki9cXHJcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xcclxcblxcdHotaW5kZXg6IDE7XFxyXFxufVxcclxcblxcclxcbi5mYWItYnV0dG9uIHtcXHJcXG4gIGhlaWdodDogNTY7XFxyXFxuICB3aWR0aDogNTY7XFxyXFxuICBtYXJnaW46IDE1O1xcclxcbiAgLyptYXJnaW4tYm90dG9tOiA2NDsqL1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FjMDBlNjtcXHJcXG4gIC8qZmxvYXQ6IHJpZ2h0OyovXFxyXFxuICBob3Jpem9udGFsLWFsaWduOiByaWdodDtcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XFxyXFxufVxcclxcblxcclxcbkxhYmVsIHtcXHJcXG5cXHR0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbn1cXHJcXG5cXHJcXG4uaW5mby1sYWJlbCB7XFxyXFxuXFx0bWFyZ2luLXRvcDogNDtcXHJcXG5cXHRtYXJnaW4tbGVmdDogMTg7XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTogMTY7XFxyXFxuXFx0Y29sb3I6IGJsYWNrO1xcclxcblxcdGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuXFx0Zm9udC1zaXplOiAxNDtcXHJcXG59XFxyXFxuLmNhcC1sYWJlbCB7XFxyXFxuXFx0bWFyZ2luLXRvcDogNDtcXHJcXG5cXHRtYXJnaW4tbGVmdDogMTg7XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTogMTY7XFxyXFxuXFx0Y29sb3I6IGJsYWNrO1xcclxcblxcdGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuXFx0Zm9udC1zaXplOiAxNDtcXHJcXG5cXHRtYXJnaW4tcmlnaHQ6IDE4O1xcclxcbn1cXHJcXG5cXHJcXG4ubmFtZS1sYWJlbCB7XFxyXFxuXFx0bWFyZ2luLXRvcDogMTY7XFxyXFxuXFx0bWFyZ2luLWxlZnQ6IDE4O1xcclxcblxcdGNvbG9yOiBibGFjaztcXHJcXG5cXHRmb250LXdlaWdodDogNzAwO1xcclxcblxcdGZvbnQtc2l6ZTogMTc7XFxyXFxufVxcclxcblxcclxcbi5wcmljZS1sYWJlbCB7XFxyXFxuXFx0bWFyZ2luLXRvcDogMTY7XFxyXFxuXFx0bWFyZ2luLXJpZ2h0OiAxODtcXHJcXG5cXHRjb2xvcjogZ3JlZW47XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDUwMDtcXHJcXG5cXHRmb250LXNpemU6IDE2O1xcclxcblxcdG1hcmdpbi1ib3R0b206IDU7XFxyXFxufVxcclxcblxcclxcbi5wb3N0IHtcXHJcXG5cXHQvKmJvcmRlci1ib3R0b20td2lkdGg6IDE7Ki9cXHJcXG5cXHRib3JkZXItY29sb3I6ICNmMWYxZjE7XFxyXFxufVxcclxcblxcclxcbi5wb3N0OmhpZ2hsaWdodGVkIHtcXHJcXG5cXHQvKmJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7Ki9cXHJcXG59XFxyXFxuXFxyXFxuLnBvc3RpbmctbWFwIHtcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiAxNjtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAxMDtcXHJcXG5cXHRoZWlnaHQ6IDIyMDtcXHJcXG5cXHR3aWR0aDogMzQwO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvZmlsZS1waWN0dXJlIHtcXHJcXG5cXHRoZWlnaHQ6IDUwO1xcclxcblxcdHdpZHRoOiA1MDtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAyNTtcXHJcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcclxcblxcdG1hcmdpbi1sZWZ0OiAxNjtcXHJcXG5cXHRtYXJnaW4tdG9wOiAyMDtcXHJcXG59XFxyXFxuXFxyXFxuLnN0YXR1cy1pY29uIHtcXHJcXG5cXHRoZWlnaHQ6IDE1O1xcclxcblxcdHdpZHRoOiAxNTtcXHJcXG5cXHQvKiBib3JkZXItcmFkaXVzOiAyNTsgKi9cXHJcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcclxcblxcdG1hcmdpbi10b3A6IDIxO1xcclxcblxcdG1hcmdpbi1sZWZ0OiA3O1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uYWN0aXZpdHktaW5kaWNhdG9yIHtcXHJcXG5cXHRjb2xvcjogI2FjMDBlNjtcXHJcXG59XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPCEtLSA8QWN0aW9uQmFyIHRpdGxlPVxcXCJIb21lXFxcIiBjbGFzcz1cXFwiYWN0aW9uYmFyXFxcIj5cXHJcXG5cXHQ8TmF2aWdhdGlvbkJ1dHRvbiBpb3M6dmlzaWJpbGl0eT1cXFwiY29sbGFwc2VkXFxcIiBpY29uPVxcXCJ+L2ltZy9tZW51LWljb24ucG5nXFxcIiAodGFwKT1cXFwic2hvd1NpZGVEcmF3ZXIoKVxcXCIgPjwvTmF2aWdhdGlvbkJ1dHRvbj5cXHJcXG48QWN0aW9uSXRlbSBhbmRyb2lkOnZpc2liaWxpdHk9XFxcImNvbGxhcHNlZFxcXCIgaWNvbj1cXFwifi9pbWcvbWVudS1pY29uLnBuZ1xcXCIgaW9zLnBvc2l0aW9uPVxcXCJsZWZ0XFxcIiAodGFwKT1cXFwic2hvd1NpZGVEcmF3ZXIoKVxcXCIgPjwvQWN0aW9uSXRlbT5cXHJcXG48L0FjdGlvbkJhcj4gLS0+XFxyXFxuXFxyXFxuPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJhZGQtYnRuLWNvbnRhaW5lclxcXCI+XFxyXFxuXFx0PEZBQiAodGFwKT1cXFwic2hvd01vZGFsKClcXFwiIGljb249XFxcInJlczovL2ljX2FkZF93aGl0ZV8zeFxcXCIgcmlwcGxlQ29sb3I9XFxcIiNmMWYxZjFcXFwiIGNsYXNzPVxcXCJmYWItYnV0dG9uXFxcIj48L0ZBQj5cXHJcXG48L1N0YWNrTGF5b3V0PlxcclxcblxcclxcbjxQdWxsVG9SZWZyZXNoIChyZWZyZXNoKT1cXFwicmVmcmVzaExpc3QoJGV2ZW50KVxcXCIgY2xhc3M9XFxcInJlZnJlc2hcXFwiPlxcclxcblxcdDxMaXN0VmlldyBbaXRlbXNdPVxcXCJwb3N0aW5nc1xcXCIgKGl0ZW1UYXApPVxcXCJvbkl0ZW1UYXAoJGV2ZW50KVxcXCIgI2xpc3RWaWV3IGlkPVxcXCJsaXN0Vmlld1xcXCI+XFxyXFxuXFx0XFx0PG5nLXRlbXBsYXRlIGxldC1pdGVtPVxcXCJpdGVtXFxcIiBsZXQtaT1cXFwiaW5kZXhcXFwiIGxldC1vZGQ9XFxcIm9kZFxcXCIgbGV0LWV2ZW49XFxcImV2ZW5cXFwiPlxcclxcblxcdFxcdFxcdDxTdGFja0xheW91dCBbY2xhc3Mub2RkXT1cXFwib2RkXFxcIiBbY2xhc3MuZXZlbl09XFxcImV2ZW5cXFwiIGNsYXNzPVxcXCJwb3N0XFxcIj5cXHJcXG5cXHRcXHRcXHRcXHQ8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XFxcImhvcml6b250YWxcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdDxTdGFja0xheW91dD5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8SW1hZ2VDYWNoZUl0IFtzcmNdPVxcXCJpdGVtLnByb2ZpbGVTb3VyY2VcXFwiIGNsYXNzPVxcXCJwcm9maWxlLXBpY3R1cmVcXFwiIHN0cmV0Y2g9XFxcImFzcGVjdEZpdFxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PC9JbWFnZUNhY2hlSXQ+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PCEtLSA8SW1hZ2VDYWNoZUl0IFtzcmNdPVxcXCJpdGVtLnN0YXR1c1xcXCIgY2xhc3M9XFxcInN0YXR1cy1pY29uXFxcIiBzdHJldGNoPVxcXCJhc3BlY3RGaWxsXFxcIj48L0ltYWdlQ2FjaGVJdD4gLS0+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PC9TdGFja0xheW91dD5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8U3RhY2tMYXlvdXQ+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PEdyaWRMYXlvdXQgcm93PVxcXCJhdXRvXFxcIiBjb2xzPVxcXCIqXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQ8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XFxcImhvcml6b250YWxcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDxMYWJlbCB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgcm93PTAgaWQ9XFxcInBvc3QtbmFtZVxcXCIgY2xhc3M9XFxcIm5hbWUtbGFiZWxcXFwiXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0W3RleHRdPVxcXCJpdGVtLnVzZXJuYW1lXFxcIj48L0xhYmVsPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDxJbWFnZUNhY2hlSXQgW3NyY109XFxcIml0ZW0uc3RhdHVzXFxcIiByb3c9MCBjbGFzcz1cXFwic3RhdHVzLWljb25cXFwiIHN0cmV0Y2g9XFxcImFzcGVjdEZpdFxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PC9JbWFnZUNhY2hlSXQ+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0PC9TdGFja0xheW91dD5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQ8TGFiZWwgdGV4dFdyYXA9XFxcInRydWVcXFwiIHJvdz0wIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcInJpZ2h0XFxcIiBjbGFzcz1cXFwicHJpY2UtbGFiZWxcXFwiXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0W3RleHRdPVxcXCJpdGVtLnByaWNlXFxcIj48L0xhYmVsPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDwvR3JpZExheW91dD5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8R3JpZExheW91dCByb3c9XFxcImF1dG9cXFwiIGNvbHM9XFxcIipcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdDxMYWJlbCB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgcm93PVxcXCIwXFxcIiBpZD1cXFwicG9zdC1pbmZvXFxcIiBjbGFzcz1cXFwiaW5mby1sYWJlbFxcXCIgW3RleHRdPVxcXCJpdGVtLmluZm9cXFwiPjwvTGFiZWw+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0PCEtLSA8TGFiZWwgdGV4dFdyYXA9XFxcInRydWVcXFwiIHJvdz1cXFwiMFxcXCIgaWQ9XFxcInBvc3QtaW5mb1xcXCIgY2xhc3M9XFxcImNhcC1sYWJlbFxcXCIgaG9yaXpvbnRhbEFsaWdubWVudCA9IFxcXCJyaWdodFxcXCIgW3RleHRdPVxcXCJpdGVtLmNhcGFjaXR5XFxcIj48L0xhYmVsPiAtLT5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8L0dyaWRMYXlvdXQ+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PC9TdGFja0xheW91dD5cXHJcXG5cXHRcXHRcXHRcXHQ8L1N0YWNrTGF5b3V0PlxcclxcblxcdFxcdFxcdFxcdDxJbWFnZUNhY2hlSXQgW3NyY109XFxcIml0ZW0ubWFwU291cmNlXFxcIiBzdHJldGNoPVxcXCJhc3BlY3RGaXRcXFwiIGNsYXNzPVxcXCJwb3N0aW5nLW1hcFxcXCJcXHJcXG5cXHRcXHRcXHRcXHRcXHQodGFwKT1cXFwidG9WaWV3SW1hZ2UoaXRlbS5tYXBTb3VyY2UpXFxcIj48L0ltYWdlQ2FjaGVJdD5cXHJcXG5cXHRcXHRcXHQ8L1N0YWNrTGF5b3V0PlxcclxcblxcdFxcdDwvbmctdGVtcGxhdGU+XFxyXFxuXFx0PC9MaXN0Vmlldz5cXHJcXG48L1B1bGxUb1JlZnJlc2g+XFxyXFxuPEFjdGl2aXR5SW5kaWNhdG9yICNhY3Rpdml0eUluZGljYXRvciBidXN5PVxcXCJ0cnVlXFxcIiB3aWR0aD1cXFwiNDBcXFwiIGhlaWdodD1cXFwiNDBcXFwiIGNsYXNzPVxcXCJhY3Rpdml0eS1pbmRpY2F0b3JcXFwiPlxcclxcbjwvQWN0aXZpdHlJbmRpY2F0b3I+XCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NvbnRhaW5lclJlZiwgVmlld1JlZiwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGVBcnJheSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlLWFycmF5JztcclxuXHJcbmltcG9ydCB7IFRyYW5zZmVyU2VydmljZSB9IGZyb20gJy4uL2RhdGF0cmFuc2Zlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRHluYW1pY0FkZFNlcnZpY2UgfSBmcm9tICcuLi9keW5hbWljLWFkZC5zZXJ2aWNlLnRucyc7XHJcbmltcG9ydCB7UGFnZX0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZVwiO1xyXG5pbXBvcnQgeyBnZXRGcmFtZUJ5SWQgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZVwiO1xyXG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gJy4uL3VzZXIuc2VydmljZS50bnMnO1xyXG5pbXBvcnQgeyBQb3N0aW5nU2VydmljZSB9IGZyb20gJy4uL3Bvc3Rpbmcuc2VydmljZS50bnMnO1xyXG5pbXBvcnQgeyBNb2RhbERpYWxvZ1NlcnZpY2UgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZGlyZWN0aXZlcy9kaWFsb2dzXCI7XHJcbmltcG9ydCB7IEdvb2dsZU1hcHNTZXJ2aWNlIH0gZnJvbSAnLi4vZ29vZ2xlLW1hcHMuc2VydmljZSc7XHJcbmltcG9ydCAqIGFzIGFwcGxpY2F0aW9uIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCI7XHJcbmltcG9ydCB7IEFjdGl2aXR5SW5kaWNhdG9yIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9hY3Rpdml0eS1pbmRpY2F0b3InO1xyXG5pbXBvcnQgeyBBbmRyb2lkQXBwbGljYXRpb24sIEFuZHJvaWRBY3Rpdml0eUJhY2tQcmVzc2VkRXZlbnREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIjtcclxuaW1wb3J0IHsgaXNBbmRyb2lkIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm1cIjtcclxuaW1wb3J0ICogYXMgZmlyZWJhc2UgZnJvbSAnbmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZSc7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBEYXRlUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5pbXBvcnQgeyBTdGFja0xheW91dCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvc3RhY2stbGF5b3V0XCI7XHJcbmltcG9ydCB7IExpc3RWaWV3IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGlzdC12aWV3XCI7XHJcblxyXG5pbXBvcnQgeyBQb3N0aW5nIH0gZnJvbSAnLi4vcG9zdGluZy5tb2RlbCc7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi91c2VyLm1vZGVsJztcclxuXHJcbmltcG9ydCB7IEFkZE1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi4vYWRkLW1vZGFsL2FkZC1tb2RhbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDYWNoZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ltYWdlLWNhY2hlXCI7XHJcbmltcG9ydCB7IEltYWdlU291cmNlLCBmcm9tRmlsZSwgZnJvbVJlc291cmNlLCBmcm9tQmFzZTY0LCBmcm9tTmF0aXZlU291cmNlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvaW1hZ2Utc291cmNlXCI7XHJcbmltcG9ydCB7IEZvbGRlciwgcGF0aCwga25vd25Gb2xkZXJzIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZmlsZS1zeXN0ZW1cIjtcclxuXHJcbmNsYXNzIFBvc3RJdGVtIHtcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB1c2VybmFtZTogU3RyaW5nLCBwdWJsaWMgaW5mbzogc3RyaW5nLCBwdWJsaWMgcHJvZmlsZVNvdXJjZTogc3RyaW5nLCBcclxuICAgICAgcHVibGljIG1hcFNvdXJjZTogc3RyaW5nLCBwdWJsaWMgcHJpY2U6IHN0cmluZywgcHVibGljIHN0YXR1czogc3RyaW5nLCBwdWJsaWMgY2FwYWNpdHk6IHN0cmluZykgeyB9XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLWhvbWUnLFxyXG4gIHByb3ZpZGVyczogW0R5bmFtaWNBZGRTZXJ2aWNlXSxcclxuICB0ZW1wbGF0ZVVybDogJy4vaG9tZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vaG9tZS5jb21wb25lbnQuY3NzJ11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgYmxvY2tzID0gMTtcclxuICBwIDogUG9zdGluZ1tdO1xyXG4gIHBvc3RpbmdzID0gbmV3IE9ic2VydmFibGVBcnJheTxQb3N0SXRlbT4oKTtcclxuICAvLyBjYWNoZSA9IG5ldyBDYWNoZSgpO1xyXG4gIHNwYWNlID0xO1xyXG5cclxuICBAVmlld0NoaWxkKCdsaXN0VmlldycsIHsgc3RhdGljOiB0cnVlIH0pIGx2OiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoJ2FjdGl2aXR5SW5kaWNhdG9yJywgeyBzdGF0aWM6IHRydWUgfSkgYWk6IEVsZW1lbnRSZWY7XHJcbiAgXHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdHJhbnNmZXJTZXJ2aWNlOiBUcmFuc2ZlclNlcnZpY2UsIHByaXZhdGUgYWRkU2VydmljZTogRHluYW1pY0FkZFNlcnZpY2UsIHByaXZhdGUgcGFnZTogUGFnZSwgXHJcbiAgXHRwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSwgcHJpdmF0ZSBwb3N0aW5nU2VydmljZTogUG9zdGluZ1NlcnZpY2UsIHByaXZhdGUgbW9kYWw6IE1vZGFsRGlhbG9nU2VydmljZSwgcHJpdmF0ZSB2Y1JlZjogVmlld0NvbnRhaW5lclJlZixcclxuICAgIHByaXZhdGUgbWFwU2VydmljZTogR29vZ2xlTWFwc1NlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zLCBwcml2YXRlIGRhdGVQaXBlOiBEYXRlUGlwZSkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIFx0dGhpcy5sb2FkUG9zdGluZ3MoKTtcclxuICB9XHJcblxyXG4gIG9uQmFja0J1dHRvblRhcCgpIHtcclxuICAgIGFwcGxpY2F0aW9uLmFuZHJvaWQuZm9yZWdyb3VuZEFjdGl2aXR5LmZpbmlzaCgpO1xyXG4gIH1cclxuXHJcbiAgc2hvd01vZGFsKCkge1xyXG4gICAgICAgIGxldCBvcHRpb25zID0ge1xyXG4gICAgICAgICAgICBjb250ZXh0OiB7fSxcclxuICAgICAgICAgICAgZnVsbHNjcmVlbjogdHJ1ZSxcclxuICAgICAgICAgICAgdmlld0NvbnRhaW5lclJlZjogdGhpcy52Y1JlZlxyXG4gICAgICAgICAgICAvLyBhbmltYXRlZDogdHJ1ZSxcclxuICAgICAgICAgICAgLy8gdHJhbnNpdGlvbjogeyBuYW1lOiBcInNsaWRlVG9wXCIgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5tb2RhbC5zaG93TW9kYWwoQWRkTW9kYWxDb21wb25lbnQsIG9wdGlvbnMpLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICAgICAgaWYocmVzID09ICdwb3N0ZWQnKVxyXG4gICAgICAgICAgICAgIHRoaXMubG9hZFBvc3RpbmdzKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgc2hvd1NpZGVEcmF3ZXIoKSB7XHJcbiAgXHQvL2NvbnN0IGRyYXdlciA9IDxSYWRTaWRlRHJhd2VyPnRoaXMuc2QubmF0aXZlVmlldztcclxuICBcdC8vY29uc29sZS5kaXIoZHJhd2VyKTtcclxuICBcdC8vY29uc29sZS5kaXIodGhpcy5wYWdlKTtcclxuICBcdC8vIGRyYXdlci5zaG93RHJhd2VyKCk7XHJcblxyXG4gIH1cclxuXHJcbiAgbG9hZFBvc3RpbmdzKGFyZ3M9bnVsbCkge1xyXG4gICAgLy8gbGV0IGxheW91dCA9IDxTdGFja0xheW91dD50aGlzLnBhZ2UuZ2V0Vmlld0J5SWQoJ2ZlZWQnKTtcclxuICAgIC8vIGxheW91dC5yZW1vdmVDaGlsZHJlbigpO1xyXG4gICAgLy8gdGhpcy5jYWNoZS5wbGFjZWhvbGRlciA9IGZyb21GaWxlKFwifi9pbWcvZ3JheV9iYWNrZ3JvdW5kLmpwZ1wiKTtcclxuICAgIC8vIHRoaXMuY2FjaGUubWF4UmVxdWVzdHMgPSA1O1xyXG5cclxuICAgIHRoaXMucG9zdGluZ3Muc3BsaWNlKDApO1xyXG4gICAgbGV0IGFjdGl2aXR5SW5kaWNhdG9yID0gPEFjdGl2aXR5SW5kaWNhdG9yPiB0aGlzLmFpLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICBhY3Rpdml0eUluZGljYXRvci5idXN5ID0gdHJ1ZTtcclxuXHJcbiAgICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XHJcblxyXG4gICAgdmFyIHBvc3RzID0gW107XHJcbiAgICB2YXIgcG9zdGluZ3NDb2xsZWN0aW9uID0gZmlyZWJhc2UuZmlyZXN0b3JlLmNvbGxlY3Rpb24oJ3Bvc3RpbmdzJyk7XHJcbiAgICBjb25zdCBxdWVyeSA9IHBvc3RpbmdzQ29sbGVjdGlvbi53aGVyZSgnZm9ybWF0dGVkRGF0ZScsICc+PScsIHRoaXMuZGF0ZVBpcGUudHJhbnNmb3JtKGN1cnJlbnREYXRlLCAneXl5eS1NTS1kZCcpKVxyXG4gICAgcXVlcnkub3JkZXJCeSgnZm9ybWF0dGVkRGF0ZScsICdhc2MnKS5nZXQoKS50aGVuKHF1ZXJ5U25hcHNob3QgPT4ge1xyXG4gICAgICBxdWVyeVNuYXBzaG90LmZvckVhY2goZG9jID0+IHtcclxuICAgICAgICBwb3N0cy5wdXNoKHtcclxuICAgICAgICAgIGlkOiBkb2MuaWQsXHJcbiAgICAgICAgICBkYXRhOiBkb2MuZGF0YSgpXHJcbiAgICAgICAgfSlcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMucCA9IHBvc3RzO1xyXG4gICAgICBmb3IodmFyIGkgPSAwOyBpIDwgcG9zdHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB0aGlzLnBvc3RpbmdzLnB1c2gobmV3IFBvc3RJdGVtKHBvc3RzW2ldLnVzZXIsICcnLCAnJywgJ34vaW1nL2dyYXlfYmFja2dyb3VuZC5qcGcnLCcnLCAnJywgJycpKTtcclxuICAgICAgICB0aGlzLmNyZWF0ZVBvc3RpbmcocG9zdHNbaV0uZGF0YSwgaSk7XHJcbiAgICAgIH1cclxuICAgICAgYWN0aXZpdHlJbmRpY2F0b3IuYnVzeSA9IGZhbHNlO1xyXG4gICAgICBpZihhcmdzICE9IG51bGwpXHJcbiAgICAgIHtcclxuICAgICAgICB2YXIgcHVsbFJlZnJlc2ggPSBhcmdzLm9iamVjdDtcclxuICAgICAgICBwdWxsUmVmcmVzaC5yZWZyZXNoaW5nID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICB9XHJcblxyXG4gLy8gIGNyZWF0ZVBvc3RpbmcoaWQsIHVzZXIsIHN0YXJ0YWRyLCBlbmRhZHIsIGRhdGUsIGNvc3QsIGNhcGFjaXR5LCBjb21tZW50cykge1xyXG5cdC8vIFx0dGhpcy50cmFuc2ZlclNlcnZpY2Uuc2V0RGF0YShbe1wiaW5kZXhcIjogdGhpcy5ibG9ja3MsIFwiaWRcIjogaWQsIFwidXNlclwiOiB1c2VyLCBcInN0YXJ0YWRyXCI6IHN0YXJ0YWRyLCBcImVuZGFkclwiOiBlbmRhZHIsIFwiZGF0ZVwiOiBkYXRlLCBcImNvc3RcIjogY29zdCwgXCJjYXBhY2l0eVwiOiBjYXBhY2l0eSwgXCJjb21tZW50c1wiOiBjb21tZW50cywgXCJidXR0b25UeXBlXCI6IFwiQ29ubmVjdFwifV0pO1xyXG5cdC8vIFx0dGhpcy5hZGRTZXJ2aWNlLmFwcGVuZENvbXBvbmVudFRvQm9keSh0aGlzLnBhZ2UuZ2V0Vmlld0J5SWQoJ2ZlZWQnKSk7XHJcblx0Ly8gICB0aGlzLmJsb2NrcysrO1xyXG5cdC8vIH1cclxuXHJcbiAgY3JlYXRlUG9zdGluZyhkYXRhLCBpOiBudW1iZXIpIHtcclxuICAgIGxldCBkYXRlID0gZGF0YS5kYXRlLnNwbGl0KFwiIFwiKVxyXG4gICAgZGF0ZSA9IGRhdGVbMV0rXCIgXCIrZGF0ZVsyXStcIiBcIitkYXRlWzNdO1xyXG4gICAgbGV0IGluZm9fbGFiZWwgPSBkYXRhLnN0YXJ0QWRkcmVzcyArIFwiIHRvIFwiICsgZGF0YS5lbmRBZGRyZXNzICtcIlxcblwiKyBkYXRlO1xyXG4gICAgbGV0IHByaWNlO1xyXG4gICAgbGV0IHR5cGU7XHJcbiAgICBsZXQgY2FwO1xyXG4gICAgLy8gdGhpcy5jcmVhdGVQb3N0aW5nKHRoaXMucFtpXS5faWQsIHRoaXMucFtpXS51c2VyLCB0aGlzLnBbaV0uc3RhcnRhZHIsIHRoaXMucFtpXS5lbmRhZHIsIHRoaXMucFtpXS5kYXRlLCB0aGlzLnBbaV0uY29zdCwgdGhpcy5wW2ldLmNhcGFjaXR5LCB0aGlzLnBbaV0uY29tbWVudHMpO1xyXG4gICAgaWYoZGF0YS5jYXBhY2l0eSAhPSBcIi0xXCIpe1xyXG4gICAgICAvLyBjYXAgPSBcIlxcblNlYXRzOiBcIit0aGlzLnNwYWNlK1wiL1wiKyBkYXRhLmNhcGFjaXR5O1xyXG4gICAgICBpbmZvX2xhYmVsKz0gXCIsIFwiK3RoaXMuc3BhY2UrXCIvXCIrIGRhdGEuY2FwYWNpdHkrXCIgU2VhdHMgUmVtYWluaW5nXCI7XHJcbiAgICAgIHByaWNlID0gZGF0YS5wcmljZVxyXG4gICAgICB0aGlzLnNwYWNlKys7XHJcbiAgICAgIHR5cGUgPSAnfi9pbWcvc3RlZXJpbmctd2hlZWwtMi5wbmcnXHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICAvLyBpbmZvX2xhYmVsICs9IFwiXFxuRW5kaW5nIEF0OiBcIiArIGRhdGEuZW5kQWRkcmVzcyArICsgXCJcXG5SaWRlcnM6IFwiKyBkYXRhLmNhcGFjaXR5O1xyXG4gICAgICAvLyBjYXAgPSBcIlxcblJpZGVyczogXCIrIFwiMlwiO1xyXG4gICAgICBpbmZvX2xhYmVsKz0gXCIsXCIrIFwiIDIgXCIrXCJSaWRlcnNcIjtcclxuICAgICAgdHlwZSA9ICd+L2ltZy9wYXNzZW5nZXItMi5wbmcnXHJcbiAgICB9XHJcbiAgICBjb25zdCB1c2Vyc0NvbGxlY3Rpb24gPSBmaXJlYmFzZS5maXJlc3RvcmUuY29sbGVjdGlvbigndXNlcnMnKTtcclxuICAgIHVzZXJzQ29sbGVjdGlvbi5kb2MoZGF0YS51aWQpLmdldCgpLnRoZW4oKGRvYykgPT4ge1xyXG4gICAgICBpZihkb2MuZXhpc3RzKSB7XHJcbiAgICAgICAgdmFyIHVybCA9IGRvYy5kYXRhKCkucHJvZmlsZV9zb3VyY2U7XHJcbiAgICAgICAgLy8gaWYodXJsLnN1YnN0cmluZygwLCAyNykgPT09ICdodHRwczovL2dyYXBoLmZhY2Vib29rLmNvbS8nKVxyXG4gICAgICAgIC8vICAgdXJsICs9ICc/aGVpZ2h0PTMwMCc7XHJcbiAgICAgICAgLy8gdmFyIG1hcFVybCA9IHRoaXMubWFwU2VydmljZS5nZXRTdGF0aWNNYXAoZGF0YS5zdGFydEFkZHJlc3MgKyBcIiBcIiArIGRhdGEuc3RhcnRGb3JtYXR0ZWQsIGRhdGEuZW5kQWRkcmVzcyArIFwiIFwiICsgZGF0YS5lbmRGb3JtYXR0ZWQpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKG1hcFVybClcclxuICAgICAgICAvLyB0aGlzLmFkZENhY2hlKHVybCwgJ3BmcCcsIGRhdGEudXNlciwgaW5mb19sYWJlbCwgdXJsLCBkYXRhLm1hcF91cmwsIGkpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIC8vICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICAgIC8vICAgdGhpcy5hZGRDYWNoZShkYXRhLm1hcF91cmwsICdtYXAnLCBkYXRhLnVzZXIsIGluZm9fbGFiZWwsIHVybCwgZGF0YS5tYXBfdXJsLCBpKS50aGVuKChyZXMpID0+e1xyXG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgLy8gICB9KVxyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgICAgIHRoaXMucG9zdGluZ3Muc2V0SXRlbShpLCBuZXcgUG9zdEl0ZW0oZGF0YS51c2VyLCBpbmZvX2xhYmVsLCB1cmwsIGRhdGEubWFwX3VybCwgcHJpY2UsIHR5cGUsIGNhcCkpO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgLy8gYWRkQ2FjaGUodXJsLCBpbWdfdHlwZSwgdXNlciwgaW5mbywgcGZwX3VybCwgbWFwX3VybCwgaSkge1xyXG4gIC8vICAgcmV0dXJuIG5ldyBQcm9taXNlPGFueT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gIC8vICAgICBsZXQgY2FjaGVkSW1hZ2VTb3VyY2U7XHJcbiAgLy8gICAgIGNvbnN0IG15SW1hZ2UgPSB0aGlzLmNhY2hlLmdldCh1cmwpO1xyXG4gIC8vICAgICBpZiAobXlJbWFnZSkge1xyXG4gIC8vICAgICAgIC8vIElmIHByZXNlbnQgLS0gdXNlIGl0LlxyXG4gIC8vICAgICAgIGNhY2hlZEltYWdlU291cmNlID0gZnJvbU5hdGl2ZVNvdXJjZShteUltYWdlKTtcclxuICAvLyAgICAgICBjb25zb2xlLmxvZyhteUltYWdlKVxyXG4gIC8vICAgICAgIGlmKGltZ190eXBlID09PSAncGZwJylcclxuICAvLyAgICAgICAgIHRoaXMucG9zdGluZ3Muc2V0SXRlbShpLCBuZXcgUG9zdEl0ZW0odXNlciwgaW5mbywgY2FjaGVkSW1hZ2VTb3VyY2UsIG1hcF91cmwpKTtcclxuICAvLyAgICAgICBlbHNlIGlmIChpbWdfdHlwZSA9PT0gJ21hcCcpXHJcbiAgLy8gICAgICAgICB0aGlzLnBvc3RpbmdzLnNldEl0ZW0oaSwgbmV3IFBvc3RJdGVtKHVzZXIsIGluZm8sIHRoaXMucG9zdGluZ3MuZ2V0SXRlbShpKS5wcm9maWxlU291cmNlLCBjYWNoZWRJbWFnZVNvdXJjZSkpO1xyXG4gIC8vICAgICAgIHJlc29sdmUoe21lc3NhZ2U6ICdSZXRyaWV2ZWQgZnJvbSBjYWNoZScsIGNhY2hlVVJMOiBjYWNoZWRJbWFnZVNvdXJjZX0pO1xyXG4gIC8vICAgICB9IFxyXG4gIC8vICAgICBlbHNlIHtcclxuICAvLyAgICAgICAvLyBJZiBub3QgcHJlc2VudCAtLSByZXF1ZXN0IGl0cyBkb3dubG9hZCArIHB1dCBpdCBpbiB0aGUgY2FjaGUuXHJcbiAgLy8gICAgICAgdGhpcy5jYWNoZS5wdXNoKHtcclxuICAvLyAgICAgICAgICAga2V5OiB1cmwsXHJcbiAgLy8gICAgICAgICAgIHVybDogdXJsLFxyXG4gIC8vICAgICAgICAgICBjb21wbGV0ZWQ6IChpbWFnZSwga2V5KSA9PiB7XHJcbiAgLy8gICAgICAgICAgICAgICBpZiAodXJsID09PSBrZXkpIHtcclxuICAvLyAgICAgICAgICAgICAgICAgICBjYWNoZWRJbWFnZVNvdXJjZSA9IGZyb21OYXRpdmVTb3VyY2UoaW1hZ2UpO1xyXG4gIC8vICAgICAgICAgICAgICAgICAgIGlmKGltZ190eXBlID09PSAncGZwJylcclxuICAvLyAgICAgICAgICAgICAgICAgICAgIHRoaXMucG9zdGluZ3Muc2V0SXRlbShpLCBuZXcgUG9zdEl0ZW0odXNlciwgaW5mbywgY2FjaGVkSW1hZ2VTb3VyY2UsIG1hcF91cmwpKTtcclxuICAvLyAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChpbWdfdHlwZSA9PT0gJ21hcCcpXHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc3RpbmdzLnNldEl0ZW0oaSwgbmV3IFBvc3RJdGVtKHVzZXIsIGluZm8sIHRoaXMucG9zdGluZ3MuZ2V0SXRlbShpKS5wcm9maWxlU291cmNlLCBjYWNoZWRJbWFnZVNvdXJjZSkpO1xyXG4gIC8vICAgICAgICAgICAgICAgfVxyXG4gIC8vICAgICAgICAgICAgICAgcmVzb2x2ZSh7bWVzc2FnZTogJ0FkZGVkIHRvIGNhY2hlJywgY2FjaGVVUkw6IGNhY2hlZEltYWdlU291cmNlfSk7XHJcbiAgLy8gICAgICAgICAgIH1cclxuICAvLyAgICAgICB9KTtcclxuICAvLyAgICAgfVxyXG4gIC8vICAgfSlcclxuICAvLyB9XHJcblxyXG4gIHJlZnJlc2hMaXN0KGFyZ3MpIHtcclxuICAgIHRoaXMubG9hZFBvc3RpbmdzKGFyZ3MpO1xyXG4gIH1cclxuXHJcbiAgdG9WaWV3SW1hZ2Uoc3JjKSB7XHJcbiAgICB0aGlzLnRyYW5zZmVyU2VydmljZS5zZXREYXRhKHNyYyk7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ3ZpZXctaW1hZ2UnXSk7XHJcbiAgfVxyXG5cclxuICBvbkl0ZW1UYXAoYXJncykge1xyXG4gICAgY29uc29sZS5sb2codGhpcy5wb3N0aW5ncy5nZXRJdGVtKGFyZ3MuaW5kZXgpKTtcclxuICAgIHRoaXMudHJhbnNmZXJTZXJ2aWNlLnNldERhdGEoe1xyXG4gICAgICBwb3N0SW5mbzogdGhpcy5wW2FyZ3MuaW5kZXhdLFxyXG4gICAgICBwb3N0SXRlbTogdGhpcy5wb3N0aW5ncy5nZXRJdGVtKGFyZ3MuaW5kZXgpXHJcbiAgICB9KVxyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydwb3N0aW5nLWluZm8nXSlcclxuICB9XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi8qIEFkZCBtb2JpbGUgc3R5bGVzIGZvciB0aGUgY29tcG9uZW50IGhlcmUuICAqL1xcclxcbi5jbG9zZSB7XFxyXFxuXFx0bWFyZ2luOiAxMDtcXHJcXG5cXHRmb250LXNpemU6IDI4O1xcclxcblxcdHdpZHRoOiA0ODtcXHJcXG5cXHRoZWlnaHQ6IDQ4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2UtYnV0dG9uLWNvbnRhaW5lciB7XFxyXFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdGxlZnQ6IDA7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXItbGFiZWwtMiB7XFxyXFxuXFx0Zm9udC1zaXplOiAxNjtcXHJcXG5cXHRtYXJnaW4tdG9wOiAxMjtcXHJcXG5cXHQvKm1hcmdpbi1ib3R0b206IDEyOyovXFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDcwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlci1sYWJlbC0zIHtcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiAxMjtcXHJcXG59XFxyXFxuXFxyXFxuLnBvc3Qge1xcclxcblxcdGJvcmRlci1jb2xvcjogI2YxZjFmMTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvc3Q6aGlnaGxpZ2h0ZWQge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XFxyXFxufVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxTY3JvbGxWaWV3PlxcclxcblxcdDxTdGFja0xheW91dCBoZWlnaHQ9XFxcIjEwMCVcXFwiPlxcclxcblxcdFxcdDxTdGFja0xheW91dCBjbGFzcz1cXFwiY2xvc2UtYnV0dG9uLWNvbnRhaW5lclxcXCIgb3JpZW50YXRpb249XFxcImhvcml6b250YWxcXFwiPlxcclxcblxcdFxcdFxcdDxMYWJlbCB0ZXh0PVxcXCImdGltZXM7XFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiICh0YXApPVxcXCJjbG9zZSgpXFxcIj48L0xhYmVsPlxcclxcblxcdFxcdDwvU3RhY2tMYXlvdXQ+XFxyXFxuXFxyXFxuXFx0XFx0PFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJpbnB1dC1maWVsZFxcXCI+XFxyXFxuPCEtLSBcXHRcXHRcXHQ8VGV4dEZpZWxkIGNsYXNzPVxcXCJpbnB1dFxcXCIgYXV0b2NvcnJlY3Q9XFxcImZhbHNlXFxcIiBoaW50PVxcXCJGaW5kIGEgbG9jYXRpb25cXFwiIFsobmdNb2RlbCldPVxcXCJhZGRyZXNzXFxcIiAodGV4dENoYW5nZSk9XFxcImF1dG9jb21wbGV0ZSgpXFxcIiAjc2VhcmNoTGFiZWwgaWQ9XFxcInNlYXJjaExhYmVsXFxcIiByZXF1aXJlZD48L1RleHRGaWVsZD4gLS0+XFxyXFxuXFx0XFx0XFx0PFNlYXJjaEJhciBoaW50PVxcXCJGaW5kIGEgbG9jYXRpb25cXFwiIFt0ZXh0XT1cXFwiYWRkcmVzc1xcXCIgKHRleHRDaGFuZ2UpPVxcXCJzZWFyY2goJGV2ZW50KVxcXCI+PC9TZWFyY2hCYXI+XFxyXFxuXFx0XFx0XFx0PFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJoci1saWdodFxcXCI+PC9TdGFja0xheW91dD5cXHJcXG5cXHRcXHQ8L1N0YWNrTGF5b3V0PlxcclxcblxcclxcblxcdFxcdDxMaXN0VmlldyBbaXRlbXNdPVxcXCJzdWdnZXN0aW9uc1xcXCIgaGVpZ2h0PVxcXCIxMDAlXFxcIj5cXHJcXG5cXHRcXHRcXHQ8bmctdGVtcGxhdGUgbGV0LWl0ZW09XFxcIml0ZW1cXFwiIGxldC1pPVxcXCJpbmRleFxcXCIgbGV0LW9kZD1cXFwib2RkXFxcIiBsZXQtZXZlbj1cXFwiZXZlblxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0PFN0YWNrTGF5b3V0IFtjbGFzcy5vZGRdPVxcXCJvZGRcXFwiIFtjbGFzcy5ldmVuXT1cXFwiZXZlblxcXCIgY2xhc3M9XFxcInBvc3RcXFwiICh0YXApPVxcXCJzZWxlY3RQbGFjZShpdGVtLnBsYWNlU3VnZ2VzdGlvbiwgaXRlbS5wbGFjZUFkZHJlc3MpXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8TGFiZWwgdGV4dFdyYXA9XFxcInRydWVcXFwiIFt0ZXh0XT1cXFwiaXRlbS5wbGFjZVN1Z2dlc3Rpb25cXFwiIGNsYXNzPVxcXCJoZWFkZXItbGFiZWwtMlxcXCI+PC9MYWJlbD5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8TGFiZWwgdGV4dFdyYXA9XFxcInRydWVcXFwiIFt0ZXh0XT1cXFwiaXRlbS5wbGFjZUFkZHJlc3NcXFwiIGNsYXNzPVxcXCJoZWFkZXItbGFiZWwtM1xcXCI+PC9MYWJlbD5cXHJcXG5cXHRcXHRcXHRcXHQ8L1N0YWNrTGF5b3V0PlxcclxcblxcdFxcdFxcdDwvbmctdGVtcGxhdGU+XFxyXFxuXFx0XFx0PC9MaXN0Vmlldz5cXHJcXG5cXHQ8L1N0YWNrTGF5b3V0PlxcclxcbjwvU2Nyb2xsVmlldz5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGxhY2VzQXV0b2NvbXBsZXRlU2VydmljZSB9IGZyb20gJy4uL3BsYWNlcy1hdXRvY29tcGxldGUuc2VydmljZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGVBcnJheSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlLWFycmF5JztcclxuaW1wb3J0IHsgTW9kYWxEaWFsb2dQYXJhbXMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZGlyZWN0aXZlcy9kaWFsb2dzXCI7XHJcbmltcG9ydCB7IFRyYW5zZmVyU2VydmljZSB9IGZyb20gJy4uL2RhdGF0cmFuc2Zlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU2VhcmNoQmFyIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9zZWFyY2gtYmFyJztcclxuXHJcbmNsYXNzIFN1Z2dlc3Rpb24ge1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwbGFjZVN1Z2dlc3Rpb246IHN0cmluZywgcHVibGljIHBsYWNlQWRkcmVzczogc3RyaW5nKSB7fVxyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1sb2NhdGlvbicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2xvY2F0aW9uLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9sb2NhdGlvbi5jb21wb25lbnQuY3NzJ11cclxufSlcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgTG9jYXRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhcmFtczogTW9kYWxEaWFsb2dQYXJhbXMsIHByaXZhdGUgcGxhY2VzU2VydmljZTogUGxhY2VzQXV0b2NvbXBsZXRlU2VydmljZSwgcHJpdmF0ZSB0cmFuc2ZlclNlcnZpY2U6IFRyYW5zZmVyU2VydmljZSkgeyB9XHJcblxyXG4gIEBWaWV3Q2hpbGQoXCJzZWFyY2hMYWJlbFwiLCB7IHN0YXRpYzogdHJ1ZSB9KSBzZWFyY2hMYWJlbDogRWxlbWVudFJlZjtcclxuICBhZGRyZXNzO1xyXG4gIHN1Z2dlc3Rpb25zID0gbmV3IE9ic2VydmFibGVBcnJheTxTdWdnZXN0aW9uPigpO1xyXG4gIHBsYWNlU3VnZ2VzdGlvbnMgPSBuZXcgT2JzZXJ2YWJsZUFycmF5PFN0cmluZz4oKTtcclxuICBwbGFjZUFkZHJlc3NlcyA9IG5ldyBPYnNlcnZhYmxlQXJyYXk8U3RyaW5nPigpO1xyXG4gIHR5cGUgPSB0aGlzLnRyYW5zZmVyU2VydmljZS5nZXREYXRhKCk7XHJcblxyXG4gIGlkcyA9IG5ldyBTZXQoKTtcclxuICBteVRpbWVyO1xyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICBcdC8vIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5zZWFyY2hMYWJlbC5uYXRpdmVFbGVtZW50LmZvY3VzKCksIDEwMCk7XHJcbiAgfVxyXG5cclxuICBjbG9zZSgpIHtcclxuICBcdHRoaXMucGFyYW1zLmNsb3NlQ2FsbGJhY2soKTtcclxuICAgfVxyXG5cclxuICAgc2VsZWN0UGxhY2UocGxhY2UsIGFkZHJlc3MpIHtcclxuICAgXHRpZih0aGlzLnR5cGUgPT0gJ3N0YXJ0JylcclxuICAgXHRcdHRoaXMucGFyYW1zLmNsb3NlQ2FsbGJhY2soeydzdGFydCc6IHBsYWNlLCAnYWRkcmVzcyc6IGFkZHJlc3N9KTtcclxuICAgXHRlbHNlXHJcbiAgIFx0XHR0aGlzLnBhcmFtcy5jbG9zZUNhbGxiYWNrKHsnZW5kJzogcGxhY2UsICdhZGRyZXNzJzogYWRkcmVzc30pO1xyXG4gICB9XHJcblxyXG4gIHNlYXJjaChhcmdzKSB7XHJcbiAgXHRjbGVhckludGVydmFsKHRoaXMubXlUaW1lcik7XHJcbiAgXHR0aGlzLm15VGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICBcdFx0bGV0IHNlYXJjaEJhciA9IDxTZWFyY2hCYXI+IGFyZ3Mub2JqZWN0O1xyXG5cdCAgICB0aGlzLmlkcy5jbGVhcigpO1xyXG5cdCAgICB0aGlzLnN1Z2dlc3Rpb25zLnNwbGljZSgwKTtcclxuXHQgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcblx0ICAgIHRoaXMucGxhY2VzU2VydmljZS5nZXRQbGFjZVJlc3VsdHMoc2VhcmNoQmFyLnRleHQpLnN1YnNjcmliZSgoZGF0YTogYW55KSA9PiB7XHJcblx0XHQgICAgZm9yKHZhciBpID0gMDsgaSA8IGRhdGEucmVzdWx0cy5sZW5ndGg7IGkrKykge1xyXG5cdFx0ICAgICAgXHRpZighdGhpcy5pZHMuaGFzKGRhdGEucmVzdWx0c1tpXS5wbGFjZV9pZCkpXHJcblx0XHQgICAgICBcdFx0dGhpcy5zdWdnZXN0aW9ucy5wdXNoKG5ldyBTdWdnZXN0aW9uKGRhdGEucmVzdWx0c1tpXS5uYW1lLCBkYXRhLnJlc3VsdHNbaV0uZm9ybWF0dGVkX2FkZHJlc3MpKTtcclxuXHRcdCAgICAgIFx0dGhpcy5pZHMuYWRkKGRhdGEucmVzdWx0c1tpXS5wbGFjZV9pZCk7XHJcblx0XHQgICAgfVxyXG5cdFx0ICB9KTtcclxuXHRcdH0sIDEwMCk7XHJcblx0XHR0aGlzLnBsYWNlc1NlcnZpY2UuZ2V0QXV0b2NvbXBsZXRlUmVzdWx0c0FkZHJlc3Moc2VhcmNoQmFyLnRleHQpLnN1YnNjcmliZSgoZGF0YTogYW55KSA9PiB7XHJcblx0XHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkYXRhLnByZWRpY3Rpb25zLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdCAgXHRpZighdGhpcy5pZHMuaGFzKGRhdGEucHJlZGljdGlvbnNbaV0ucGxhY2VfaWQpKVxyXG5cdFx0XHQgIFx0XHR0aGlzLnN1Z2dlc3Rpb25zLnB1c2gobmV3IFN1Z2dlc3Rpb24oZGF0YS5wcmVkaWN0aW9uc1tpXS5zdHJ1Y3R1cmVkX2Zvcm1hdHRpbmcubWFpbl90ZXh0LCBkYXRhLnByZWRpY3Rpb25zW2ldLnN0cnVjdHVyZWRfZm9ybWF0dGluZy5zZWNvbmRhcnlfdGV4dCkpO1xyXG5cdFx0XHQgIFx0dGhpcy5pZHMuYWRkKGRhdGEucHJlZGljdGlvbnNbaV0ucGxhY2VfaWQpO1xyXG5cdFx0ICBcdH1cclxuXHRcdH0pO1xyXG5cdFx0Ly8gdGhpcy5wbGFjZXNTZXJ2aWNlLmdldEF1dG9jb21wbGV0ZVJlc3VsdHNFc3RhYmxpc2htZW50KHNlYXJjaEJhci50ZXh0KS5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4ge1xyXG5cdFx0Ly8gXHQgIGZvcih2YXIgaSA9IDA7IGkgPCBkYXRhLnByZWRpY3Rpb25zLmxlbmd0aDsgaSsrKSB7XHJcblx0XHQvLyAgICAgXHRpZighdGhpcy5pZHMuaGFzKGRhdGEucHJlZGljdGlvbnNbaV0ucGxhY2VfaWQpKVxyXG5cdFx0Ly8gICAgIFx0XHR0aGlzLnN1Z2dlc3Rpb25zLnB1c2gobmV3IFN1Z2dlc3Rpb24oZGF0YS5wcmVkaWN0aW9uc1tpXS5zdHJ1Y3R1cmVkX2Zvcm1hdHRpbmcubWFpbl90ZXh0LCBkYXRhLnByZWRpY3Rpb25zW2ldLnN0cnVjdHVyZWRfZm9ybWF0dGluZy5zZWNvbmRhcnlfdGV4dCkpO1xyXG5cdFx0Ly8gICAgIFx0dGhpcy5pZHMuYWRkKGRhdGEucHJlZGljdGlvbnNbaV0ucGxhY2VfaWQpO1xyXG5cdFx0Ly8gICAgIH1cclxuXHRcdC8vIH0pO1xyXG5cdFx0dGhpcy5wbGFjZXNTZXJ2aWNlLmdldEF1dG9jb21wbGV0ZVJlc3VsdHNDaXR5KHNlYXJjaEJhci50ZXh0KS5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4ge1xyXG5cdFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGF0YS5wcmVkaWN0aW9ucy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHQgIFx0aWYoIXRoaXMuaWRzLmhhcyhkYXRhLnByZWRpY3Rpb25zW2ldLnBsYWNlX2lkKSlcclxuXHRcdFx0ICBcdFx0dGhpcy5zdWdnZXN0aW9ucy5wdXNoKG5ldyBTdWdnZXN0aW9uKGRhdGEucHJlZGljdGlvbnNbaV0uc3RydWN0dXJlZF9mb3JtYXR0aW5nLm1haW5fdGV4dCwgZGF0YS5wcmVkaWN0aW9uc1tpXS5zdHJ1Y3R1cmVkX2Zvcm1hdHRpbmcuc2Vjb25kYXJ5X3RleHQpKTtcclxuXHRcdFx0ICBcdHRoaXMuaWRzLmFkZChkYXRhLnByZWRpY3Rpb25zW2ldLnBsYWNlX2lkKTtcclxuXHRcdCAgXHR9XHJcblx0XHR9KTtcclxuICBcdH0sIDUwMCk7ICBcdFxyXG4gIH1cclxuXHJcbiAgYXV0b2NvbXBsZXRlKCkge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICBcdHRoaXMuaWRzLmNsZWFyKCk7XHJcbiAgICAgIHRoaXMuc3VnZ2VzdGlvbnMuc3BsaWNlKDApO1xyXG4gICAgICB0aGlzLnBsYWNlc1NlcnZpY2UuZ2V0UGxhY2VSZXN1bHRzKHRoaXMuYWRkcmVzcykuc3Vic2NyaWJlKChkYXRhOiBhbnkpID0+IHtcclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgZGF0YS5yZXN1bHRzLmxlbmd0aDsgaSsrKSB7XHJcblx0ICAgICAgXHRpZighdGhpcy5pZHMuaGFzKGRhdGEucmVzdWx0c1tpXS5wbGFjZV9pZCkpXHJcblx0ICAgICAgXHRcdHRoaXMuc3VnZ2VzdGlvbnMucHVzaChuZXcgU3VnZ2VzdGlvbihkYXRhLnJlc3VsdHNbaV0ubmFtZSwgZGF0YS5yZXN1bHRzW2ldLmZvcm1hdHRlZF9hZGRyZXNzKSk7XHJcblx0ICAgICAgXHR0aGlzLmlkcy5hZGQoZGF0YS5yZXN1bHRzW2ldLnBsYWNlX2lkKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuXHQgICAgICB0aGlzLnBsYWNlc1NlcnZpY2UuZ2V0QXV0b2NvbXBsZXRlUmVzdWx0c0FkZHJlc3ModGhpcy5hZGRyZXNzKS5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4ge1xyXG5cdCAgICAgIFx0ICBmb3IodmFyIGkgPSAwOyBpIDwgZGF0YS5wcmVkaWN0aW9ucy5sZW5ndGg7IGkrKykge1xyXG5cdCAgICAgICAgICBcdGlmKCF0aGlzLmlkcy5oYXMoZGF0YS5wcmVkaWN0aW9uc1tpXS5wbGFjZV9pZCkpXHJcblx0ICAgICAgICAgIFx0XHR0aGlzLnN1Z2dlc3Rpb25zLnB1c2gobmV3IFN1Z2dlc3Rpb24oZGF0YS5wcmVkaWN0aW9uc1tpXS5zdHJ1Y3R1cmVkX2Zvcm1hdHRpbmcubWFpbl90ZXh0LCBkYXRhLnByZWRpY3Rpb25zW2ldLnN0cnVjdHVyZWRfZm9ybWF0dGluZy5zZWNvbmRhcnlfdGV4dCkpO1xyXG5cdCAgICAgICAgICBcdHRoaXMuaWRzLmFkZChkYXRhLnByZWRpY3Rpb25zW2ldLnBsYWNlX2lkKTtcclxuXHQgICAgICAgICAgfVxyXG5cdCAgICAgIH0pO1xyXG5cdCAgICAgIC8vIHRoaXMucGxhY2VzU2VydmljZS5nZXRBdXRvY29tcGxldGVSZXN1bHRzRXN0YWJsaXNobWVudCh0aGlzLmFkZHJlc3MpLnN1YnNjcmliZSgoZGF0YTogYW55KSA9PiB7XHJcblx0ICAgICAgLy8gXHQgIGZvcih2YXIgaSA9IDA7IGkgPCBkYXRhLnByZWRpY3Rpb25zLmxlbmd0aDsgaSsrKSB7XHJcblx0ICAgICAgLy8gICAgIFx0aWYoIXRoaXMuaWRzLmhhcyhkYXRhLnByZWRpY3Rpb25zW2ldLnBsYWNlX2lkKSlcclxuXHQgICAgICAvLyAgICAgXHRcdHRoaXMuc3VnZ2VzdGlvbnMucHVzaChuZXcgU3VnZ2VzdGlvbihkYXRhLnByZWRpY3Rpb25zW2ldLnN0cnVjdHVyZWRfZm9ybWF0dGluZy5tYWluX3RleHQsIGRhdGEucHJlZGljdGlvbnNbaV0uc3RydWN0dXJlZF9mb3JtYXR0aW5nLnNlY29uZGFyeV90ZXh0KSk7XHJcblx0ICAgICAgLy8gICAgIFx0dGhpcy5pZHMuYWRkKGRhdGEucHJlZGljdGlvbnNbaV0ucGxhY2VfaWQpO1xyXG5cdCAgICAgIC8vICAgICB9XHJcblx0ICAgICAgLy8gfSk7XHJcblx0ICAgICAgdGhpcy5wbGFjZXNTZXJ2aWNlLmdldEF1dG9jb21wbGV0ZVJlc3VsdHNDaXR5KHRoaXMuYWRkcmVzcykuc3Vic2NyaWJlKChkYXRhOiBhbnkpID0+IHtcclxuXHQgICAgICBcdCAgZm9yKHZhciBpID0gMDsgaSA8IGRhdGEucHJlZGljdGlvbnMubGVuZ3RoOyBpKyspIHtcclxuXHQgICAgICAgICAgXHRpZighdGhpcy5pZHMuaGFzKGRhdGEucHJlZGljdGlvbnNbaV0ucGxhY2VfaWQpKVxyXG5cdCAgICAgICAgICBcdFx0dGhpcy5zdWdnZXN0aW9ucy5wdXNoKG5ldyBTdWdnZXN0aW9uKGRhdGEucHJlZGljdGlvbnNbaV0uc3RydWN0dXJlZF9mb3JtYXR0aW5nLm1haW5fdGV4dCwgZGF0YS5wcmVkaWN0aW9uc1tpXS5zdHJ1Y3R1cmVkX2Zvcm1hdHRpbmcuc2Vjb25kYXJ5X3RleHQpKTtcclxuXHQgICAgICAgICAgXHR0aGlzLmlkcy5hZGQoZGF0YS5wcmVkaWN0aW9uc1tpXS5wbGFjZV9pZCk7XHJcblx0ICAgICAgICAgIH1cclxuXHQgICAgICB9KTtcclxuICAgICAgfSwgMTAwKTtcclxuXHJcbiAgICB9LCA0MDApO1xyXG4gIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1thcHBMb2dpbl0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMb2dpbkRpcmVjdGl2ZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCIvKlxcclxcbkFkZCB5b3VyIE5hdGl2ZVNjcmlwdCBzcGVjaWZpYyBzdHlsZXMgaGVyZS5cXHJcXG5UbyBsZWFybiBtb3JlIGFib3V0IHN0eWxpbmcgaW4gTmF0aXZlU2NyaXB0IHNlZTpcXHJcXG5odHRwczovL2RvY3MubmF0aXZlc2NyaXB0Lm9yZy9hbmd1bGFyL3VpL3N0eWxpbmdcXHJcXG4qL1xcclxcblxcclxcbi5sb2dpbiB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBjb2xvcjogI2FjMDBlNjtcXHJcXG4gICAgLypwYWRkaW5nOiA2cHggMjRweDsqL1xcclxcbiAgICBib3JkZXItd2lkdGg6IDE7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogI2FjMDBlNjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmbG9hdDogY2VudGVyO1xcclxcbiAgICBtYXJnaW46IGF1dG87IFxcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICBmb250LWZhbWlseTogXFxcIlNlZ29lIFVJXFxcIixBcmlhbCxzYW5zLXNlcmlmO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxNTtcXHJcXG4gICAgd2lkdGg6IDEyMDtcXHJcXG4gICAgaGVpZ2h0OiA0MDtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ2luOmhpZ2hsaWdodGVkIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZTZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ2luLWluZm8ge1xcclxcblxcdG1hcmdpbi10b3A6IDEyMDtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWVzY3JlZW4tbG9nbyB7XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTogMjAwO1xcclxcbn1cXHJcXG5cXHJcXG4uaDEge1xcclxcblxcdGZvbnQtc2l6ZTogNTA7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDcwMDtcXHJcXG5cXHRjb2xvcjogI2FjMDBlNjtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ2luLXdyYXBwZXIge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XFxyXFxufVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxTdGFja0xheW91dCBjbGFzcz1cXFwibG9naW4td3JhcHBlclxcXCI+XFxyXFxuICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImxvZ2luLWluZm9cXFwiPlxcclxcbiAgICA8SW1hZ2Ugc3JjPVxcXCJ+L2ltZy9sb2dvLnBuZ1xcXCIgaGVpZ2h0PVxcXCIxODBcXFwiIHdpZHRoPVxcXCIxODBcXFwiIGNsYXNzPVxcXCJob21lc2NyZWVuLWxvZ29cXFwiPjwvSW1hZ2U+XFxyXFxuPCEtLSAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJzbG9nYW5zXFxcIj5cXHJcXG4gICAgICA8TGFiZWwgY2xhc3M9XFxcImgzXFxcIiB0ZXh0PVxcXCJGaW5kIFJpZGVzIEZhc3RcXFwiPjwvTGFiZWw+XFxyXFxuICAgICAgPExhYmVsIGNsYXNzPVxcXCJoM1xcXCIgdGV4dD1cXFwiQ29ubmVjdCB3aXRoIG90aGVyIHN0dWRlbnRzXFxcIj48L0xhYmVsPlxcclxcbiAgICA8L1N0YWNrTGF5b3V0PiAtLT5cXHJcXG4gIDwvU3RhY2tMYXlvdXQ+XFxyXFxuICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImxvZ2luX3dyYXBwZXJcXFwiPlxcclxcbiAgICA8QnV0dG9uIGNsYXNzPVxcXCJsb2dpblxcXCIgKHRhcCk9XFxcInRvTG9nSW4oKVxcXCIgdGV4dD1cXFwiTG9naW5cXFwiPjwvQnV0dG9uPlxcclxcbiAgICA8QnV0dG9uIGNsYXNzPVxcXCJsb2dpblxcXCIgKHRhcCk9XFxcInRvU2lnblVwKClcXFwiIHRleHQ9XFxcIlNpZ24gdXBcXFwiPjwvQnV0dG9uPlxcclxcbiAgPC9TdGFja0xheW91dD5cXHJcXG48L1N0YWNrTGF5b3V0PlxcclxcblxcclxcbjwhLS1cXHJcXG5PcmlnaW5hbCBXZWIgdGVtcGxhdGU6XFxyXFxuXFxyXFxuPGRpdiBjbGFzcz1cXFwiY29udGVudC1yaWdodFxcXCI+XFxyXFxuICA8ZGl2IGNsYXNzPVxcXCJsb2dpbl93cmFwcGVyXFxcIj5cXHJcXG4gICAgICA8aW5wdXQgdHlwZT1cXFwiYnV0dG9uXFxcIiB2YWx1ZT1cXFwiTG9naW5cXFwiIGNsYXNzPVxcXCJsb2dpblxcXCIgKGNsaWNrKT1cXFwidG9Mb2dJbigpXFxcIiAvPlxcclxcbiAgICAgIDxpbnB1dCB0eXBlPVxcXCJidXR0b25cXFwiIHZhbHVlPVxcXCJTaWduIHVwXFxcIiBjbGFzcz1cXFwibG9naW5cXFwiIGlkPVxcXCJsb2dpbjJcXFwiIChjbGljayk9XFxcInRvU2lnblVwKClcXFwiLz5cXHJcXG4gIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcblxcclxcbjxkaXYgY2xhc3M9XFxcImNvbnRlbnQtbGVmdFxcXCI+XFxyXFxuICA8ZGl2IGNsYXNzPVxcXCJsb2dpbl9pbmZvXFxcIj5cXHJcXG4gICAgPGgxPkNvbGxlZ2VQb29sPC9oMT5cXHJcXG4gICAgPGltZyBzcmM9XFxcInNyYy9pbWcvbG9nby5wbmdcXFwiIGFsdD1cXFwiTG9nb1xcXCIgaGVpZ2h0PVxcXCI5MFxcXCIgd2lkdGg9XFxcIjkwXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwic2xvZ2Fuc1xcXCI+XFxyXFxuICAgICAgPGgzPkZpbmQgUmlkZXMgRmFzdDxicj5cXHJcXG4gICAgICBDb25uZWN0IHdpdGggb3RoZXIgc3R1ZGVudHM8L2gzPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gIDwvZGl2PlxcclxcbjwvZGl2Plxcclxcbi0tPlwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XHJcbi8vIGltcG9ydCB7IENvZ25pdG9BdXRoIH0gZnJvbSAnYW1hem9uLWNvZ25pdG8tYXV0aC1qcy9kaXN0L2FtYXpvbi1jb2duaXRvLWF1dGgnO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZVwiO1xyXG4vLyBpbXBvcnQgQXV0aCBmcm9tICdAYXdzLWFtcGxpZnkvYXV0aCc7XHJcbi8vIGNvbnN0IGZpcmViYXNlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIik7XHJcbmltcG9ydCAqIGFzIGZpcmViYXNlIGZyb20gJ25hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2UnO1xyXG4vLyBpbXBvcnQgeyBBbmd1bGFyRmlyZUF1dGggfSBmcm9tICdAYW5ndWxhci9maXJlL2F1dGgnO1xyXG4vLyBpbXBvcnQgeyBhdXRoIH0gZnJvbSAnZmlyZWJhc2UvYXBwJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLWxvZ2luJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbG9naW4uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2xvZ2luLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSBwYWdlOiBQYWdlKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgXHR0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcclxuICAgIHZhciBmaXJlYmFzZUNvbmZpZyA9IHtcclxuICAgICAgYXBpS2V5OiBcIkFJemFTeUJHdWlZcE0xMzhRNmF5cURNUlVWV0pwMUNFOVdCMDlOd1wiLFxyXG4gICAgICBhdXRoRG9tYWluOiBcImNvbGxlZ2Vwb29sLTE1NTI3NDkxMTg2MTcuZmlyZWJhc2VhcHAuY29tXCIsXHJcbiAgICAgIGRhdGFiYXNlVVJMOiBcImh0dHBzOi8vY29sbGVnZXBvb2wtMTU1Mjc0OTExODYxNy5maXJlYmFzZWlvLmNvbVwiLFxyXG4gICAgICBwcm9qZWN0SWQ6IFwiY29sbGVnZXBvb2wtMTU1Mjc0OTExODYxN1wiLFxyXG4gICAgICBzdG9yYWdlQnVja2V0OiBcImNvbGxlZ2Vwb29sLTE1NTI3NDkxMTg2MTcuYXBwc3BvdC5jb21cIixcclxuICAgICAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiMzc1MjYzNjgwMTgzXCIsXHJcbiAgICAgIGFwcElEOiBcImNvbGxlZ2Vwb29sLTE1NTI3NDkxMTg2MTdcIixcclxuICAgIH07XHJcblxyXG4gICAgZmlyZWJhc2UuaW5pdChmaXJlYmFzZUNvbmZpZykudGhlbihcclxuICAgICAgKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZmlyZWJhc2UuaW5pdCBkb25lXCIpO1xyXG4gICAgICB9LFxyXG4gICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYGZpcmViYXNlLmluaXQgZXJyb3I6ICR7ZXJyb3J9YCk7XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgICAvLyBmaXJlYmFzZS5hdXRoKCkuY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkKCdhZG1pbicsICdreXZlcm4xMjMnKS5jYXRjaChmdW5jdGlvbihlcnJvcikge1xyXG4gICAgLy8gICAvLyBIYW5kbGUgRXJyb3JzIGhlcmUuXHJcbiAgICAvLyAgIHZhciBlcnJvckNvZGUgPSBlcnJvci5jb2RlO1xyXG4gICAgLy8gICB2YXIgZXJyb3JNZXNzYWdlID0gZXJyb3IubWVzc2FnZTtcclxuICAgIC8vICAgLy8gLi4uXHJcbiAgICAvLyB9KTtcclxuXHJcbiAgfVxyXG5cclxuICB0b0xvZ0luKCkge1xyXG4gICAgLy8gQXV0aC5zaWduSW4oXCJwaGlsbGltXCIsIFwiQ29sbGVnZXBvb2w2OSpcIilcclxuICAgIC8vIC50aGVuKHVzZXIgPT4ge1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKHVzZXIpXHJcbiAgICAvLyAgICAgY29uc29sZS5sb2coXCJyZWRpcmVjdGluZ1wiKVxyXG5cclxuICAgIC8vIH0pXHJcblxyXG4gICAgdmFyIGNyZWRlbnRpYWxzIDogZmlyZWJhc2UuTG9naW5PcHRpb25zID0ge1xyXG4gICAgICBwYXNzd29yZE9wdGlvbnM6IHtcclxuICAgICAgICBlbWFpbDogJ2FkYW0ueWVlQGdtYWlsLmNvbScsXHJcbiAgICAgICAgcGFzc3dvcmQ6ICdreXZlcm4xMjMnLFxyXG4gICAgICB9LFxyXG4gICAgICB0eXBlOiBmaXJlYmFzZS5Mb2dpblR5cGUuUEFTU1dPUkRcclxuICAgIH1cclxuICAgIGZpcmViYXNlLmxvZ2luKGNyZWRlbnRpYWxzKS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KVxyXG4gICAgZmlyZWJhc2UuZ2V0Q3VycmVudFVzZXIoKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgIH0pXHJcblxyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWyduYXZpZ2F0aW9uJ10pO1xyXG4gIFx0Ly8gd2luZG93LmxvY2F0aW9uLmhyZWY9J2h0dHBzOi8vY29sbGVnZXBvb2xpbmcuYXV0aC51cy1lYXN0LTIuYW1hem9uY29nbml0by5jb20vbG9naW4/cmVzcG9uc2VfdHlwZT10b2tlbiZjbGllbnRfaWQ9NHNzbG1tZ3Y5cG41bGI1MDg3YWFqNXI1OTkmcmVkaXJlY3RfdXJpPWh0dHA6Ly9sb2NhbGhvc3Q6NDIwMC9sb2dpbnJvdXRlJnN0YXRlPVNUQVRFJnNjb3BlPWF3cy5jb2duaXRvLnNpZ25pbi51c2VyLmFkbWluK29wZW5pZCc7XHJcbiAgfVxyXG5cclxuICB0b1NpZ25VcCgpe1xyXG4gICAgZmlyZWJhc2UuY3JlYXRlVXNlcih7XHJcbiAgICAgIGVtYWlsOiAnYWRhbS55ZWVAZ21haWwuY29tJyxcclxuICAgICAgcGFzc3dvcmQ6ICdreXZlcm4xMjMnXHJcbiAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KVxyXG4gICAgLy8gdGhpcy5hZkF1dGguYXV0aC5jcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQoJ2FkYW0ueWVlQGdtYWlsLmNvbScsICdreXZlcm4xMjMnKTtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnbmF2aWdhdGlvbiddKTtcclxuICBcdC8vIHdpbmRvdy5sb2NhdGlvbi5ocmVmPSdodHRwczovL2NvbGxlZ2Vwb29saW5nLmF1dGgudXMtZWFzdC0yLmFtYXpvbmNvZ25pdG8uY29tL3NpZ251cD9yZXNwb25zZV90eXBlPXRva2VuJmNsaWVudF9pZD00c3NsbW1ndjlwbjVsYjUwODdhYWo1cjU5OSZyZWRpcmVjdF91cmk9aHR0cDovL2xvY2FsaG9zdDo0MjAwL2xvZ2lucm91dGUmc3RhdGU9U1RBVEUmc2NvcGU9YXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4rb3BlbmlkJztcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBKd3RIZWxwZXJTZXJ2aWNlIH0gZnJvbSAnQGF1dGgwL2FuZ3VsYXItand0JztcclxuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tICcuL3VzZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuL3VzZXIubW9kZWwnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBQYXltZW50U2VydmljZSB9IGZyb20gJy4vcGF5bWVudC5zZXJ2aWNlJztcclxuaW1wb3J0ICogYXMgZmlyZWJhc2UgZnJvbSAnbmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZSc7XHJcbmltcG9ydCAqIGFzIGFwcFNldHRpbmdzIGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb24tc2V0dGluZ3MnO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIExvZ2luY2hlY2tTZXJ2aWNlIHtcclxuXHQvL215U3RvcmFnZSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2U7XHJcblx0bXlTdG9yYWdlID0gbnVsbDtcclxuXHQvL3VzZXIgZnJvbSBkYXRhYmFzZVxyXG5cdHVzZXI7XHJcblx0Ly9saXN0IG9mIGFsbCB1c2VycyBmcm9tIGRhdGFiYXNlXHJcblx0dXNlcnM7XHJcblx0Ly91c2VyIGluZm8gZnJvbSBjb2duaXRvXHJcblx0dXNlckluZm8gPSBudWxsO1xyXG5cdHVpZDtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSwgcHJpdmF0ZSBwYXltZW50U2VydmljZTogUGF5bWVudFNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zKSB7IH1cclxuXHJcbiAgYWRkVXNlclRvRmlyZXN0b3JlKHVpZCwgYWRkcmVzcywgYmlydGhkYXRlLCBlbWFpbCwgZmlyc3RfbmFtZSwgbGFzdF9uYW1lLCBnZW5kZXIsIHBob25lX251bWJlciwgcmlkZXNfZ2l2ZW4sIHJpZGVzX3JlY2VpdmVkLCBwcm9maWxlX3NvdXJjZSwgdG9rZW4pIHtcclxuICBcdGNvbnN0IHVzZXJzQ29sbGVjdGlvbiA9IGZpcmViYXNlLmZpcmVzdG9yZS5jb2xsZWN0aW9uKCd1c2VycycpO1xyXG4gIFx0dXNlcnNDb2xsZWN0aW9uLmRvYyh1aWQpLnNldCh7XHJcbiAgXHRcdGFkZHJlc3M6IGFkZHJlc3MsXHJcbiAgXHRcdGJpcnRoZGF0ZTogYmlydGhkYXRlLFxyXG4gIFx0XHRlbWFpbDogZW1haWwsXHJcbiAgXHRcdGZpcnN0X25hbWU6IGZpcnN0X25hbWUsXHJcbiAgXHRcdGxhc3RfbmFtZTogbGFzdF9uYW1lLFxyXG4gIFx0XHRnZW5kZXI6IGdlbmRlcixcclxuICBcdFx0cGhvbmVfbnVtYmVyOiBwaG9uZV9udW1iZXIsXHJcbiAgXHRcdHJpZGVzX2dpdmVuOiByaWRlc19naXZlbixcclxuICBcdFx0cmlkZXNfcmVjZWl2ZWQ6IHJpZGVzX3JlY2VpdmVkLFxyXG4gICAgICBwcm9maWxlX3NvdXJjZTogcHJvZmlsZV9zb3VyY2UsXHJcbiAgXHRcdHBvc3RzOiBbXSxcclxuICAgICAgY2hhdHM6IFtdLFxyXG4gICAgICB0b2tlbnM6IFt0b2tlbl1cclxuICBcdH0pO1xyXG4gIH1cclxuXHJcbiAgZGVjb2RlVG9rZW4odG9rZW4pIHtcclxuXHJcbiAgfVxyXG5cclxuICBjaGVja1VzZXIoKSB7XHJcblxyXG4gIH1cclxuXHJcbiAgY2xlYXJJbmZvKCkge1xyXG4gIFx0dGhpcy51c2VyID0gbnVsbDtcclxuICBcdHRoaXMudXNlckluZm8gPSBudWxsO1xyXG4gIFx0dGhpcy51c2VycyA9IG51bGw7XHJcbiAgXHR0aGlzLnVpZCA9IG51bGw7XHJcbiAgXHRhcHBTZXR0aW5ncy5jbGVhcigpO1xyXG4gIH1cclxuICBcclxuICBhZGRVc2VyVG9CcmFpbnRyZWUodXNlcm5hbWUsIG5hbWUsIGVtYWlsKSB7XHJcbiAgXHR0aGlzLnBheW1lbnRTZXJ2aWNlLmFkZFBheW1lbnRVc2VyKHRoaXMudWlkLCB1c2VybmFtZSwgbmFtZSwgZW1haWwpLnN1YnNjcmliZSgoZGF0YTogYW55KSA9PiB7XHJcbiAgXHRcdGZpcmViYXNlLmZpcmVzdG9yZS5jb2xsZWN0aW9uKCd1c2VycycpLmRvYyh0aGlzLnVpZCkudXBkYXRlKHtcclxuICBcdFx0XHRwYXltZW50X2lkOiBkYXRhLmN1c3RvbWVyLmlkXHJcbiAgXHRcdH0pXHJcbiAgXHR9KVxyXG4gIFx0Ly8gdGhpcy5wYXltZW50U2VydmljZS5nZXRQYXltZW50VXNlckJ5SWQoJzI1ODcwMzk1NicpLnN1YnNjcmliZSgoZGF0YTogYW55KSA9PiB7XHJcbiAgXHQvLyBcdGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gIFx0Ly8gfSlcclxuICBcdGNvbnNvbGUubG9nKCdhZGRlZCB0byBicmFpbnRyZWUnKTtcclxuICB9XHJcblxyXG4gIGxvZ2luVXNlcih1aWQpIHtcclxuICBcdGFwcFNldHRpbmdzLnNldFN0cmluZyhcInVpZFwiLCB1aWQpO1xyXG4gIFx0Y29uc29sZS5sb2codWlkKVxyXG4gIFx0dGhpcy51aWQgPSB1aWQ7XHJcbiAgfVxyXG5cclxuICBsb2dpbkNoZWNrKCkge1xyXG5cdGlmKHRoaXMuZ2V0VXNlciA9PSBudWxsKVxyXG5cdFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUoWyd3ZWxjb21lJ10sIHtjbGVhckhpc3Rvcnk6IHRydWV9KVxyXG4gIH1cclxuXHJcbiAgZ2V0VXNlckZyb21Mb2NhbFN0b3JhZ2UoKSB7XHJcblx0cmV0dXJuIGFwcFNldHRpbmdzLmdldFN0cmluZyhcInVpZFwiKTtcclxuICB9XHJcblxyXG4gIGdldFVzZXIoKSB7XHJcblx0dGhpcy51aWQgPSB0aGlzLmdldFVzZXJGcm9tTG9jYWxTdG9yYWdlKCk7XHJcblx0cmV0dXJuIHRoaXMudWlkO1xyXG4gIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBKd3RIZWxwZXJTZXJ2aWNlIH0gZnJvbSAnQGF1dGgwL2FuZ3VsYXItand0JztcclxuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tICcuL3VzZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuL3VzZXIubW9kZWwnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBQYXltZW50U2VydmljZSB9IGZyb20gJy4vcGF5bWVudC5zZXJ2aWNlJztcclxuaW1wb3J0ICogYXMgZmlyZWJhc2UgZnJvbSAnbmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZSc7XHJcbmltcG9ydCAqIGFzIGFwcFNldHRpbmdzIGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb24tc2V0dGluZ3MnO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIExvZ2luY2hlY2tTZXJ2aWNlIHtcclxuXHQvL215U3RvcmFnZSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2U7XHJcblx0bXlTdG9yYWdlID0gbnVsbDtcclxuXHQvL3VzZXIgZnJvbSBkYXRhYmFzZVxyXG5cdHVzZXI7XHJcblx0Ly9saXN0IG9mIGFsbCB1c2VycyBmcm9tIGRhdGFiYXNlXHJcblx0dXNlcnM7XHJcblx0Ly91c2VyIGluZm8gZnJvbSBjb2duaXRvXHJcblx0dXNlckluZm8gPSBudWxsO1xyXG5cdHVpZDtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSwgcHJpdmF0ZSBwYXltZW50U2VydmljZTogUGF5bWVudFNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zKSB7IH1cclxuXHJcbiAgYWRkVXNlclRvRmlyZXN0b3JlKHVpZCwgYWRkcmVzcywgYmlydGhkYXRlLCBlbWFpbCwgZmlyc3RfbmFtZSwgbGFzdF9uYW1lLCBnZW5kZXIsIHBob25lX251bWJlciwgcmlkZXNfZ2l2ZW4sIHJpZGVzX3JlY2VpdmVkLCBwcm9maWxlX3NvdXJjZSwgdG9rZW4pIHtcclxuICBcdGNvbnN0IHVzZXJzQ29sbGVjdGlvbiA9IGZpcmViYXNlLmZpcmVzdG9yZS5jb2xsZWN0aW9uKCd1c2VycycpO1xyXG4gIFx0dXNlcnNDb2xsZWN0aW9uLmRvYyh1aWQpLnNldCh7XHJcbiAgXHRcdGFkZHJlc3M6IGFkZHJlc3MsXHJcbiAgXHRcdGJpcnRoZGF0ZTogYmlydGhkYXRlLFxyXG4gIFx0XHRlbWFpbDogZW1haWwsXHJcbiAgXHRcdGZpcnN0X25hbWU6IGZpcnN0X25hbWUsXHJcbiAgXHRcdGxhc3RfbmFtZTogbGFzdF9uYW1lLFxyXG4gIFx0XHRnZW5kZXI6IGdlbmRlcixcclxuICBcdFx0cGhvbmVfbnVtYmVyOiBwaG9uZV9udW1iZXIsXHJcbiAgXHRcdHJpZGVzX2dpdmVuOiByaWRlc19naXZlbixcclxuICBcdFx0cmlkZXNfcmVjZWl2ZWQ6IHJpZGVzX3JlY2VpdmVkLFxyXG4gICAgICBwcm9maWxlX3NvdXJjZTogcHJvZmlsZV9zb3VyY2UsXHJcbiAgXHRcdHBvc3RzOiBbXSxcclxuICAgICAgY2hhdHM6IFtdLFxyXG4gICAgICB0b2tlbnM6IFt0b2tlbl1cclxuICBcdH0pO1xyXG4gIH1cclxuXHJcbiAgZGVjb2RlVG9rZW4odG9rZW4pIHtcclxuXHJcbiAgfVxyXG5cclxuICBjaGVja1VzZXIoKSB7XHJcblxyXG4gIH1cclxuXHJcbiAgY2xlYXJJbmZvKCkge1xyXG4gIFx0dGhpcy51c2VyID0gbnVsbDtcclxuICBcdHRoaXMudXNlckluZm8gPSBudWxsO1xyXG4gIFx0dGhpcy51c2VycyA9IG51bGw7XHJcbiAgXHR0aGlzLnVpZCA9IG51bGw7XHJcbiAgXHRhcHBTZXR0aW5ncy5jbGVhcigpO1xyXG4gIH1cclxuICBcclxuICBhZGRVc2VyVG9CcmFpbnRyZWUodXNlcm5hbWUsIG5hbWUsIGVtYWlsKSB7XHJcbiAgXHR0aGlzLnBheW1lbnRTZXJ2aWNlLmFkZFBheW1lbnRVc2VyKHRoaXMudWlkLCB1c2VybmFtZSwgbmFtZSwgZW1haWwpLnN1YnNjcmliZSgoZGF0YTogYW55KSA9PiB7XHJcbiAgXHRcdGZpcmViYXNlLmZpcmVzdG9yZS5jb2xsZWN0aW9uKCd1c2VycycpLmRvYyh0aGlzLnVpZCkudXBkYXRlKHtcclxuICBcdFx0XHRwYXltZW50X2lkOiBkYXRhLmN1c3RvbWVyLmlkXHJcbiAgXHRcdH0pXHJcbiAgXHR9KVxyXG4gIFx0Ly8gdGhpcy5wYXltZW50U2VydmljZS5nZXRQYXltZW50VXNlckJ5SWQoJzI1ODcwMzk1NicpLnN1YnNjcmliZSgoZGF0YTogYW55KSA9PiB7XHJcbiAgXHQvLyBcdGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gIFx0Ly8gfSlcclxuICBcdGNvbnNvbGUubG9nKCdhZGRlZCB0byBicmFpbnRyZWUnKTtcclxuICB9XHJcblxyXG4gIGxvZ2luVXNlcih1aWQpIHtcclxuICBcdGFwcFNldHRpbmdzLnNldFN0cmluZyhcInVpZFwiLCB1aWQpO1xyXG4gIFx0Y29uc29sZS5sb2codWlkKVxyXG4gIFx0dGhpcy51aWQgPSB1aWQ7XHJcbiAgfVxyXG5cclxuICBsb2dpbkNoZWNrKCkge1xyXG5cdGlmKHRoaXMuZ2V0VXNlciA9PSBudWxsKVxyXG5cdFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUoWyd3ZWxjb21lJ10sIHtjbGVhckhpc3Rvcnk6IHRydWV9KVxyXG4gIH1cclxuXHJcbiAgZ2V0VXNlckZyb21Mb2NhbFN0b3JhZ2UoKSB7XHJcblx0cmV0dXJuIGFwcFNldHRpbmdzLmdldFN0cmluZyhcInVpZFwiKTtcclxuICB9XHJcblxyXG4gIGdldFVzZXIoKSB7XHJcblx0dGhpcy51aWQgPSB0aGlzLmdldFVzZXJGcm9tTG9jYWxTdG9yYWdlKCk7XHJcblx0cmV0dXJuIHRoaXMudWlkO1xyXG4gIH1cclxuXHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi8qXFxyXFxuQWRkIHlvdXIgTmF0aXZlU2NyaXB0IHNwZWNpZmljIHN0eWxlcyBoZXJlLlxcclxcblRvIGxlYXJuIG1vcmUgYWJvdXQgc3R5bGluZyBpbiBOYXRpdmVTY3JpcHQgc2VlOlxcclxcbmh0dHBzOi8vZG9jcy5uYXRpdmVzY3JpcHQub3JnL2FuZ3VsYXIvdWkvc3R5bGluZ1xcclxcbiovXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPFN0YWNrTGF5b3V0PlxcclxcbiAgPExhYmVsIHRleHQ9XFxcImxvZ2lucm91dGUgd29ya3NcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIj48L0xhYmVsPlxcclxcbiAgPExhYmVsIHRleHQ9XFxcIlRoaXMgaXMgYSBtaWdyYXRlZCBjb21wb25lbnRcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIj48L0xhYmVsPlxcclxcbiAgPExhYmVsIHRleHQ9XFxcIlVwZGF0ZSBpdCB0byBwcm92aWRlIHRoZSBVSSBlbGVtZW50cyByZXF1aXJlZCBpbiB5b3VyIG1vYmlsZSBhcHBcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIj48L0xhYmVsPlxcclxcbjwvU3RhY2tMYXlvdXQ+XFxyXFxuXFxyXFxuPCEtLVxcclxcbk9yaWdpbmFsIFdlYiB0ZW1wbGF0ZTpcXHJcXG5cXHJcXG48cD5cXHJcXG4gIFJlZGlyZWN0aW5nLi4uXFxyXFxuPC9wPlxcclxcblxcclxcbi0tPlwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTG9naW5jaGVja1NlcnZpY2UgfSBmcm9tICcuLi9sb2dpbmNoZWNrLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBUcmFuc2ZlclNlcnZpY2UgfSBmcm9tICcuLi9kYXRhdHJhbnNmZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1sb2dpbnJvdXRlJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbG9naW5yb3V0ZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vbG9naW5yb3V0ZS5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIExvZ2lucm91dGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGxvZ2luY2hlY2tTZXJ2aWNlOiBMb2dpbmNoZWNrU2VydmljZSwgcHJpdmF0ZSB0cmFuc2ZlclNlcnZpY2U6IFRyYW5zZmVyU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikgeyB9XHJcbiAgaWRUb2tlbiA9IHRoaXMuZ2V0UGFyYW1ldGVyQnlOYW1lKFwiaWRfdG9rZW5cIik7XHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgXHRpZih0aGlzLmlkVG9rZW4gPT0gbnVsbCB8fCB0aGlzLmlkVG9rZW4gPT0gJycpXHJcbiAgXHRcdHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoJy9sb2dpbicpO1xyXG5cclxuICBcdHRoaXMubG9naW5jaGVja1NlcnZpY2UuZGVjb2RlVG9rZW4odGhpcy5pZFRva2VuKTtcclxuICBcdHRoaXMubG9naW5jaGVja1NlcnZpY2UuY2hlY2tVc2VyKCk7XHJcblxyXG4gIH1cclxuXHJcblx0Z2V0UGFyYW1ldGVyQnlOYW1lKG5hbWUpIHtcclxuXHQgICAgdmFyIHVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xyXG5cdCAgICBuYW1lID0gbmFtZS5yZXBsYWNlKC9bXFxbXFxdXS9nLCBcIlxcXFwkJlwiKTtcclxuXHQgICAgdmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cChcIls/JiNdXCIgKyBuYW1lICsgXCIoPShbXiYjXSopfCZ8I3wkKVwiKSxcclxuXHQgICAgICAgIHJlc3VsdHMgPSByZWdleC5leGVjKHVybCk7XHJcblx0ICAgIGlmICghcmVzdWx0cykgcmV0dXJuIG51bGw7XHJcblx0ICAgIGlmICghcmVzdWx0c1syXSkgcmV0dXJuICcnO1xyXG5cdCAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHJlc3VsdHNbMl0ucmVwbGFjZSgvXFwrL2csIFwiIFwiKSk7XHJcblx0fVxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCIvKiBBZGQgbW9iaWxlIHN0eWxlcyBmb3IgdGhlIGNvbXBvbmVudCBoZXJlLiAgKi9cXHJcXG5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8QnV0dG9uIHRleHQ9XFxcIm1lc3NhZ2UtbW9kYWwgd29ya3MhXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIj48L0J1dHRvbj5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1tZXNzYWdlLW1vZGFsJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbWVzc2FnZS1tb2RhbC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vbWVzc2FnZS1tb2RhbC5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIE1lc3NhZ2VNb2RhbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuXHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi8qXFxyXFxuQWRkIHlvdXIgTmF0aXZlU2NyaXB0IHNwZWNpZmljIHN0eWxlcyBoZXJlLlxcclxcblRvIGxlYXJuIG1vcmUgYWJvdXQgc3R5bGluZyBpbiBOYXRpdmVTY3JpcHQgc2VlOlxcclxcbmh0dHBzOi8vZG9jcy5uYXRpdmVzY3JpcHQub3JnL2FuZ3VsYXIvdWkvc3R5bGluZ1xcclxcbiovXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPFBhZ2UuYWN0aW9uQmFyPlxcclxcbiAgICA8QWN0aW9uQmFyIHRpdGxlPVxcXCJ7eyBhY3Rpb25CYXJUaXRsZSB9fVxcXCI+XFxyXFxuICAgIFxcdDxBY3Rpb25JdGVtICh0YXApPVxcXCJ0b01lc3NhZ2VzKClcXFwiIGljb249XFxcIn4vaW1nL3NlbmRfbWVzc2FnZV9pY29uLnBuZ1xcXCIgaW9zLnBvc2l0aW9uPVxcXCJyaWdodFxcXCIgd2lkdGg9XFxcIjIwXFxcIiBoZWlnaHQ9XFxcIjIwXFxcIiAjYWN0aW9uSXRlbT48L0FjdGlvbkl0ZW0+XFxyXFxuICAgIDwvQWN0aW9uQmFyPlxcclxcbjwvUGFnZS5hY3Rpb25CYXI+XFxyXFxuXFxyXFxuPFRhYlZpZXcgWyhuZ01vZGVsKV09XFxcInRhYlNlbGVjdGVkSW5kZXhcXFwiICh0YWJJdGVtVGFwKT1cXFwiaG9tZSgpXFxcIiAoc2VsZWN0ZWRJbmRleENoYW5nZWQpPVxcXCJvblNlbGVjdGVkSW5kZXhDaGFuZ2VkKCRldmVudClcXFwiIGFuZHJvaWRUYWJzUG9zaXRpb249XFxcImJvdHRvbVxcXCIgc2VsZWN0ZWRUYWJUZXh0Q29sb3I9XFxcIiNhYzAwZTZcXFwiICN0YWJWaWV3PlxcclxcbiAgICA8UGFnZSAqdGFiSXRlbT1cXFwiaG9tZVRhYlxcXCI+XFxyXFxuICAgIFxcdDxhcHAtaG9tZT48L2FwcC1ob21lPlxcclxcbiAgICA8L1BhZ2U+XFxyXFxuICAgIDxQYWdlICp0YWJJdGVtPVxcXCJzZWFyY2hUYWJcXFwiPlxcclxcbiAgICBcXHQ8YXBwLXNlYXJjaD48L2FwcC1zZWFyY2g+XFxyXFxuICAgIDwvUGFnZT5cXHJcXG4gICAgPFBhZ2UgKnRhYkl0ZW09XFxcImhpc3RvcnlUYWJcXFwiPlxcclxcbiAgICBcXHQ8YXBwLWhpc3Rvcnk+PC9hcHAtaGlzdG9yeT5cXHJcXG4gICAgPC9QYWdlPlxcclxcbiAgICA8UGFnZSAqdGFiSXRlbT1cXFwic2V0dGluZ3NUYWJcXFwiPlxcclxcbiAgICBcXHQ8YXBwLXNldHRpbmdzPjwvYXBwLXNldHRpbmdzPlxcclxcbiAgICA8L1BhZ2U+XFxyXFxuPC9UYWJWaWV3PlxcclxcblxcclxcblxcclxcblxcclxcbjwhLS1cXHJcXG5PcmlnaW5hbCBXZWIgdGVtcGxhdGU6XFxyXFxuXFxyXFxuPGRpdiBjbGFzcz1cXFwidG9wbmF2XFxcIj5cXHJcXG5cXHQ8ZGl2IGNsYXNzPVxcXCJuYXZidG5zXFxcIj5cXHJcXG5cXHRcXHQ8YSAoY2xpY2spPVxcXCJ0b0hvbWUoKVxcXCIgY2xhc3M9XFxcImFjdGl2ZSBuYXZpZ2F0aW9uXFxcIiBpZD1cXFwiaG9tZW5hdlxcXCI+SG9tZTwvYT5cXHJcXG5cXHRcXHQ8YSAoY2xpY2spPVxcXCJ0b0hpc3RvcnkoKVxcXCIgY2xhc3M9XFxcIm5hdmlnYXRpb25cXFwiIGlkPVxcXCJoaXN0b3J5bmF2XFxcIj5IaXN0b3J5PC9hPlxcclxcblxcdFxcdDxhIChjbGljayk9XFxcInRvUGF5bWVudHMoKVxcXCIgY2xhc3M9XFxcIm5hdmlnYXRpb25cXFwiIGlkPVxcXCJwYXltZW50c25hdlxcXCI+UGF5bWVudHM8L2E+XFxyXFxuXFx0XFx0PGEgKGNsaWNrKT1cXFwidG9TZXR0aW5ncygpXFxcIiBjbGFzcz1cXFwibmF2aWdhdGlvblxcXCIgaWQ9XFxcInNldHRpbmdzbmF2XFxcIj5TZXR0aW5nczwvYT5cXHJcXG5cXHRcXHQ8YSAoY2xpY2spPVxcXCJwb3N0KClcXFwiIGNsYXNzPVxcXCJuYXZpZ2F0aW9uXFxcIiBpZD1cXFwicG9zdG5hdlxcXCI+UG9zdDwvYT5cXHJcXG5cXHQ8L2Rpdj5cXHJcXG5cXHJcXG5cXHQ8ZGl2IGNsYXNzPVxcXCJpbWduYXZcXFwiPlxcclxcblxcdFxcdDxpbWcgc3JjPVxcXCJzcmMvaWNvbi5wbmdcXFwiIChjbGljayk9XFxcImRyb3BNZW51KClcXFwiPlxcclxcblxcdDwvZGl2PlxcclxcbjwvZGl2PlxcclxcblxcclxcbjxkaXYgY2xhc3M9XFxcImNhcmV0XFxcIiBpZD1cXFwiZHJvcGRvd24tY2FyZXRcXFwiPjwvZGl2PlxcclxcbjxkaXYgY2xhc3M9XFxcImRyb3Bkb3duXFxcIiBpZD1cXFwiZHJvcGRvd24tbWVudVxcXCI+XFxyXFxuXFx0PGRpdiBjbGFzcz1cXFwiZHJvcGRvd24tb3B0aW9uXFxcIiAoY2xpY2spPVxcXCJ0b0hvbWUoKVxcXCI+XFxyXFxuXFx0XFx0PHNwYW4+SG9tZTwvc3Bhbj5cXHJcXG5cXHQ8L2Rpdj5cXHJcXG5cXHQ8ZGl2IGNsYXNzPVxcXCJkcm9wZG93bi1vcHRpb25cXFwiIChjbGljayk9XFxcInRvU2V0dGluZ3MoKVxcXCI+XFxyXFxuXFx0XFx0PHNwYW4+U2V0dGluZ3M8L3NwYW4+XFxyXFxuXFx0PC9kaXY+XFxyXFxuXFx0PGRpdiBjbGFzcz1cXFwiZHJvcGRvd24tb3B0aW9uXFxcIiAoY2xpY2spPVxcXCJsb2dvdXQoKVxcXCI+XFxyXFxuXFx0XFx0PHNwYW4+TG9nb3V0PC9zcGFuPlxcclxcblxcdDwvZGl2PlxcclxcblxcdDxkaXYgY2xhc3M9XFxcImRyb3Bkb3duLW9wdGlvbiBncm91cC10d29cXFwiIChjbGljayk9XFxcImRyb3BNZW51KClcXFwiPlxcclxcblxcdFxcdDxzcGFuPkNsb3NlPC9zcGFuPlxcclxcblxcdDwvZGl2PlxcclxcbjwvZGl2Plxcclxcblxcclxcbi0tPlwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUcmFuc2ZlclNlcnZpY2UgfSBmcm9tICcuLi9kYXRhdHJhbnNmZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQge1BhZ2V9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvcGFnZSc7XHJcbmltcG9ydCB7IEFjdGlvbkJhciwgQWN0aW9uSXRlbSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvYWN0aW9uLWJhcic7XHJcbmltcG9ydCAqIGFzIGRvbSBmcm9tICduYXRpdmVzY3JpcHQtZG9tJztcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9idXR0b24nO1xyXG5pbXBvcnQgeyBUYWJWaWV3IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvdGFiLXZpZXdcIjtcclxuaW1wb3J0IHsgU2VsZWN0ZWRJbmRleENoYW5nZWRFdmVudERhdGEgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS90YWItdmlld1wiO1xyXG5pbXBvcnQgeyBMaXN0VmlldyB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xpc3Qtdmlld1wiO1xyXG5pbXBvcnQgKiBhcyBhcHBsaWNhdGlvbiBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiO1xyXG5pbXBvcnQgeyBBbmRyb2lkQXBwbGljYXRpb24sIEFuZHJvaWRBY3Rpdml0eUJhY2tQcmVzc2VkRXZlbnREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIjtcclxuaW1wb3J0IHsgaXNBbmRyb2lkIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm1cIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLW5hdmlnYXRpb24nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uYXZpZ2F0aW9uLmNvbXBvbmVudC50bnMuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vbmF2aWdhdGlvbi5jb21wb25lbnQudG5zLmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOYXZpZ2F0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0cmFuc2ZlclNlcnZpY2U6IFRyYW5zZmVyU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMsIHByaXZhdGUgcGFnZTogUGFnZSkgeyB9XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ3RhYlZpZXcnLCB7IHN0YXRpYzogdHJ1ZSB9KSB0djogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKCdhY3Rpb25CYXInLCB7IHN0YXRpYzogdHJ1ZSB9KSBhYjogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKCdhY3Rpb25JdGVtJywgeyBzdGF0aWM6IHRydWUgfSkgYWk6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgnbGlzdFZpZXcnLCB7IHN0YXRpYzogdHJ1ZSB9KSBsdjogRWxlbWVudFJlZjtcclxuICB1c2VyO1xyXG4gIGFjdGl2ZWJ0bjtcclxuICB0YWJTZWxlY3RlZEluZGV4ID0gMDtcclxuICBhY3Rpb25CYXJUaXRsZSA9ICdIb21lJztcclxuICBob21lVGFiID0ge2ljb25Tb3VyY2U6ICdyZXM6Ly9ob21lX2hpZ2hsaWdodGVkJ307XHJcbiAgc2VhcmNoVGFiID0ge2ljb25Tb3VyY2U6ICdyZXM6Ly9zZWFyY2gnfTtcclxuICBoaXN0b3J5VGFiID0ge2ljb25Tb3VyY2U6ICdyZXM6Ly9oaXN0b3J5J307XHJcbiAgc2V0dGluZ3NUYWIgPSB7aWNvblNvdXJjZTogJ3JlczovL3NldHRpbmdzJ307XHJcbiAgYWN0aW9uSXRlbSA6IEFjdGlvbkl0ZW07XHJcblxyXG4gIC8vIEBWaWV3Q2hpbGQoJ2xpc3RWaWV3JykgbHY6IEVsZW1lbnRSZWY7XHJcbiAgLy8gbGlzdFZpZXcgPSA8TGlzdFZpZXc+IHRoaXMubHYubmF0aXZlRWxlbWVudDtcclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmFjdGlvbkl0ZW0gPSA8QWN0aW9uSXRlbT4gdGhpcy5haS5uYXRpdmVFbGVtZW50O1xyXG5cclxuICBcdHRoaXMuYWN0aXZlYnRuID0gdGhpcy50cmFuc2ZlclNlcnZpY2UuZ2V0RGF0YSgpO1xyXG4gIFx0aWYodGhpcy5hY3RpdmVidG4gPT0gXCJob21lbmF2XCIpIHtcclxuICAgICAgdGhpcy5ob21lVGFiID0ge2ljb25Tb3VyY2U6ICdyZXM6Ly9ob21lX2hpZ2hsaWdodGVkJ307XHJcbiAgICAgIHRoaXMuc2VhcmNoVGFiID0ge2ljb25Tb3VyY2U6ICdyZXM6Ly9zZWFyY2gnfTtcclxuICAgICAgdGhpcy5oaXN0b3J5VGFiID0ge2ljb25Tb3VyY2U6ICdyZXM6Ly9oaXN0b3J5J307XHJcbiAgICAgIHRoaXMuc2V0dGluZ3NUYWIgPSB7aWNvblNvdXJjZTogJ3JlczovL3NldHRpbmdzJ307XHJcbiAgICAgIHRoaXMuYWN0aW9uSXRlbS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xyXG4gICAgICB0aGlzLnRhYlNlbGVjdGVkSW5kZXggPSAwO1xyXG4gIFx0fSBlbHNlIGlmKHRoaXMuYWN0aXZlYnRuID09IFwic2VhcmNobmF2XCIpIHtcclxuICAgICAgdGhpcy5ob21lVGFiID0ge2ljb25Tb3VyY2U6ICdyZXM6Ly9ob21lJ307XHJcbiAgICAgIHRoaXMuc2VhcmNoVGFiID0ge2ljb25Tb3VyY2U6ICdyZXM6Ly9zZWFyY2hfaGlnaGxpZ2h0ZWQnfTtcclxuICAgICAgdGhpcy5oaXN0b3J5VGFiID0ge2ljb25Tb3VyY2U6ICdyZXM6Ly9oaXN0b3J5J307XHJcbiAgICAgIHRoaXMuc2V0dGluZ3NUYWIgPSB7aWNvblNvdXJjZTogJ3JlczovL3NldHRpbmdzJ307XHJcbiAgICAgIHRoaXMuYWN0aW9uSXRlbS52aXNpYmlsaXR5ID0gJ2NvbGxhcHNlJztcclxuICAgICAgdGhpcy50YWJTZWxlY3RlZEluZGV4ID0gMTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYodGhpcy5hY3RpdmVidG4gPT0gXCJoaXN0b3J5bmF2XCIpIHtcclxuICAgICAgdGhpcy5ob21lVGFiID0ge2ljb25Tb3VyY2U6ICdyZXM6Ly9ob21lJ307XHJcbiAgICAgIHRoaXMuc2VhcmNoVGFiID0ge2ljb25Tb3VyY2U6ICdyZXM6Ly9zZWFyY2gnfTtcclxuICAgICAgdGhpcy5oaXN0b3J5VGFiID0ge2ljb25Tb3VyY2U6ICdyZXM6Ly9oaXN0b3J5X2hpZ2hsaWdodGVkJ307XHJcbiAgICAgIHRoaXMuc2V0dGluZ3NUYWIgPSB7aWNvblNvdXJjZTogJ3JlczovL3NldHRpbmdzJ307XHJcbiAgICAgIHRoaXMuYWN0aW9uSXRlbS52aXNpYmlsaXR5ID0gJ2NvbGxhcHNlJztcclxuICAgICAgdGhpcy50YWJTZWxlY3RlZEluZGV4ID0gMjtcclxuICAgIH1cclxuICAgIGVsc2UgaWYodGhpcy5hY3RpdmVidG4gPT0gXCJzZXR0aW5nc25hdlwiKSB7XHJcbiAgICAgIHRoaXMuaG9tZVRhYiA9IHtpY29uU291cmNlOiAncmVzOi8vaG9tZSd9O1xyXG4gICAgICB0aGlzLnNlYXJjaFRhYiA9IHtpY29uU291cmNlOiAncmVzOi8vc2VhcmNoJ307XHJcbiAgICAgIHRoaXMuaGlzdG9yeVRhYiA9IHtpY29uU291cmNlOiAncmVzOi8vaGlzdG9yeSd9O1xyXG4gICAgICB0aGlzLnNldHRpbmdzVGFiID0ge2ljb25Tb3VyY2U6ICdyZXM6Ly9zZXR0aW5nc19oaWdobGlnaHRlZCd9O1xyXG4gICAgICB0aGlzLmFjdGlvbkl0ZW0udmlzaWJpbGl0eSA9ICdjb2xsYXBzZSc7XHJcbiAgICAgIHRoaXMudGFiU2VsZWN0ZWRJbmRleCA9IDM7XHJcbiAgICB9XHJcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnRhYlNlbGVjdGVkSW5kZXgpXHJcblxyXG4gICAgLy8gdmFyIGp1c3RTZXQgPSBmYWxzZTtcclxuXHJcbiAgICAvLyBpZihpc0FuZHJvaWQpXHJcbiAgICAvLyAgIGFwcGxpY2F0aW9uLmFuZHJvaWQub24oQW5kcm9pZEFwcGxpY2F0aW9uLmFjdGl2aXR5QmFja1ByZXNzZWRFdmVudCwgKGRhdGE6IEFuZHJvaWRBY3Rpdml0eUJhY2tQcmVzc2VkRXZlbnREYXRhKSA9PiB7XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2codGhpcy50YWJTZWxlY3RlZEluZGV4KVxyXG4gICAgLy8gICBpZiAodGhpcy50YWJTZWxlY3RlZEluZGV4ID09PSAwICYmICFqdXN0U2V0KSB7XHJcbiAgICAvLyAgICAgYXBwbGljYXRpb24uYW5kcm9pZC5mb3JlZ3JvdW5kQWN0aXZpdHkuZmluaXNoKCk7XHJcbiAgICAvLyAgIH1cclxuICAgIC8vICAgZWxzZSB7XHJcbiAgICAvLyAgICAgdGhpcy50di5uYXRpdmVFbGVtZW50LnNlbGVjdGVkSW5kZXggPSAwO1xyXG4gICAgLy8gICAgIGp1c3RTZXQgPSB0cnVlO1xyXG4gICAgLy8gICAgIHNldFRpbWVvdXQoKCkgPT4ge2p1c3RTZXQgPSBmYWxzZX0sIDUwMCk7XHJcbiAgICAvLyAgIH1cclxuICAgIC8vIH0pO1xyXG4gIH1cclxuICBwYWludEFjdGl2ZShidG4pIHtcclxuICBcdGNvbnN0IG5hdmNvbnRlbnRzID0gZG9tLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25hdmlnYXRpb24nKVxyXG4gICAgZm9yKHZhciB4ID0gMDsgeCA8IG5hdmNvbnRlbnRzLmxlbmd0aDsgeCsrKVxyXG4gICAge1xyXG4gICAgICAgIG5hdmNvbnRlbnRzW3hdLmNsYXNzTmFtZSA9ICduYXZpZ2F0aW9uJztcclxuICAgIH1cclxuICAgIGNvbnN0IGJ1dHRvbiA9IDxCdXR0b24+dGhpcy5wYWdlLmdldFZpZXdCeUlkKGJ0bik7XHJcbiAgICBidXR0b24uY2xhc3NOYW1lICs9ICcgYWN0aXZlJztcclxuXHJcbiAgfVxyXG5cclxuICBvblNlbGVjdGVkSW5kZXhDaGFuZ2VkKGFyZ3M6IFNlbGVjdGVkSW5kZXhDaGFuZ2VkRXZlbnREYXRhKSB7XHJcbiAgICAgICAgaWYgKGFyZ3Mub2xkSW5kZXggIT09IC0xKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld0luZGV4ID0gYXJncy5uZXdJbmRleDtcclxuICAgICAgICAgICAgaWYgKG5ld0luZGV4ID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGlvbkJhclRpdGxlID0gJ0hvbWUnO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50b0hvbWUoKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChuZXdJbmRleCA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hY3Rpb25CYXJUaXRsZSA9ICdTZWFyY2gnO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50b1NlYXJjaCgpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG5ld0luZGV4ID09PSAyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGlvbkJhclRpdGxlID0gJ1lvdXIgUG9zdHMnO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50b0hpc3RvcnkoKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChuZXdJbmRleCA9PT0gMykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hY3Rpb25CYXJUaXRsZSA9ICdTZXR0aW5ncyc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvU2V0dGluZ3MoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgaG9tZSgpIHtcclxuICAgIGlmKHRoaXMudGFiU2VsZWN0ZWRJbmRleCA9PT0gMCkge1xyXG4gICAgICBsZXQgbGlzdFZpZXcgPSA8TGlzdFZpZXc+IHRoaXMubHYubmF0aXZlRWxlbWVudDtcclxuICAgICAgbGlzdFZpZXcuc2Nyb2xsVG9JbmRleCgwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRvSG9tZSgpIHtcclxuICBcdC8vIHRoaXMudHJhbnNmZXJTZXJ2aWNlLnNldERhdGEoJ2hvbWVuYXYnKTtcclxuXHQgIC8vIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnaG9tZSddKTtcclxuICAgIHRoaXMuaG9tZVRhYiA9IHtpY29uU291cmNlOiAncmVzOi8vaG9tZV9oaWdobGlnaHRlZCd9O1xyXG4gICAgdGhpcy5zZWFyY2hUYWIgPSB7aWNvblNvdXJjZTogJ3JlczovL3NlYXJjaCd9O1xyXG4gICAgdGhpcy5oaXN0b3J5VGFiID0ge2ljb25Tb3VyY2U6ICdyZXM6Ly9oaXN0b3J5J307XHJcbiAgICB0aGlzLnNldHRpbmdzVGFiID0ge2ljb25Tb3VyY2U6ICdyZXM6Ly9zZXR0aW5ncyd9O1xyXG4gICAgdGhpcy5hY3Rpb25JdGVtLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XHJcbiAgICB0aGlzLnRhYlNlbGVjdGVkSW5kZXggPSAwO1xyXG4gIH1cclxuXHJcbiAgdG9TZWFyY2goKVxyXG5cdHtcclxuXHRcdC8vIHRoaXMudHJhbnNmZXJTZXJ2aWNlLnNldERhdGEoJ2hpc3RvcnluYXYnKTtcclxuXHRcdC8vIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnaGlzdG9yeSddKTtcclxuICAgIHRoaXMuaG9tZVRhYiA9IHtpY29uU291cmNlOiAncmVzOi8vaG9tZSd9O1xyXG4gICAgdGhpcy5zZWFyY2hUYWIgPSB7aWNvblNvdXJjZTogJ3JlczovL3NlYXJjaF9oaWdobGlnaHRlZCd9O1xyXG4gICAgdGhpcy5oaXN0b3J5VGFiID0ge2ljb25Tb3VyY2U6ICdyZXM6Ly9oaXN0b3J5J307XHJcbiAgICB0aGlzLnNldHRpbmdzVGFiID0ge2ljb25Tb3VyY2U6ICdyZXM6Ly9zZXR0aW5ncyd9O1xyXG4gICAgdGhpcy5hY3Rpb25JdGVtLnZpc2liaWxpdHkgPSAnY29sbGFwc2UnO1xyXG4gICAgdGhpcy50YWJTZWxlY3RlZEluZGV4ID0gMTtcclxuXHR9XHJcblxyXG5cdHRvSGlzdG9yeSgpXHJcblx0e1xyXG5cdFx0Ly8gdGhpcy50cmFuc2ZlclNlcnZpY2Uuc2V0RGF0YSgnc2V0dGluZ3NuYXYnKTtcclxuXHRcdC8vIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnc2V0dGluZ3MnXSk7XHJcbiAgICB0aGlzLmhvbWVUYWIgPSB7aWNvblNvdXJjZTogJ3JlczovL2hvbWUnfTtcclxuICAgIHRoaXMuc2VhcmNoVGFiID0ge2ljb25Tb3VyY2U6ICdyZXM6Ly9zZWFyY2gnfTtcclxuICAgIHRoaXMuaGlzdG9yeVRhYiA9IHtpY29uU291cmNlOiAncmVzOi8vaGlzdG9yeV9oaWdobGlnaHRlZCd9O1xyXG4gICAgdGhpcy5zZXR0aW5nc1RhYiA9IHtpY29uU291cmNlOiAncmVzOi8vc2V0dGluZ3MnfTtcclxuICAgIHRoaXMuYWN0aW9uSXRlbS52aXNpYmlsaXR5ID0gJ2NvbGxhcHNlJztcclxuICAgIHRoaXMudGFiU2VsZWN0ZWRJbmRleCA9IDI7XHJcblx0fVxyXG5cclxuICB0b1NldHRpbmdzKClcclxuICB7XHJcbiAgICAvLyB0aGlzLnRyYW5zZmVyU2VydmljZS5zZXREYXRhKCdzZWFyY2huYXYnKTtcclxuICAgIC8vIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnc2VhcmNoJ10pO1xyXG4gICAgdGhpcy5ob21lVGFiID0ge2ljb25Tb3VyY2U6ICdyZXM6Ly9ob21lJ307XHJcbiAgICB0aGlzLnNlYXJjaFRhYiA9IHtpY29uU291cmNlOiAncmVzOi8vc2VhcmNoJ307XHJcbiAgICB0aGlzLmhpc3RvcnlUYWIgPSB7aWNvblNvdXJjZTogJ3JlczovL2hpc3RvcnknfTtcclxuICAgIHRoaXMuc2V0dGluZ3NUYWIgPSB7aWNvblNvdXJjZTogJ3JlczovL3NldHRpbmdzX2hpZ2hsaWdodGVkJ307XHJcbiAgICB0aGlzLmFjdGlvbkl0ZW0udmlzaWJpbGl0eSA9ICdjb2xsYXBzZSc7XHJcbiAgICB0aGlzLnRhYlNlbGVjdGVkSW5kZXggPSAzO1xyXG4gIH1cclxuXHJcbiAgdG9NZXNzYWdlcygpXHJcbiAge1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydjaGF0LWxpc3QnXSlcclxuICB9XHJcblxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCIvKiBBZGQgbW9iaWxlIHN0eWxlcyBmb3IgdGhlIGNvbXBvbmVudCBoZXJlLiAgKi9cXHJcXG4ucmVtb3ZlLXBheW1lbnQtbGFiZWwge1xcclxcblxcdGZvbnQtc2l6ZTogMTY7XFxyXFxuXFx0Y29sb3I6ICNhYzAwZTY7XFxyXFxuXFx0bWFyZ2luLWxlZnQ6IDE4O1xcclxcblxcdHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuXFx0cGFkZGluZzogMTg7XFxyXFxufVxcclxcblxcclxcbi5pbmZvLWxhYmVsIHtcXHJcXG5cXHRjb2xvcjogYmxhY2s7XFxyXFxuXFx0Zm9udC1zaXplOiAyNDtcXHJcXG5cXHR0ZXh0LWFsaWduOiBsZWZ0O1xcclxcblxcdG1hcmdpbi1sZWZ0OiAzNjtcXHJcXG5cXHRtYXJnaW4tdG9wOiAzNjtcXHJcXG59XFxyXFxuXFxyXFxuLmRldGFpbHMtbGFiZWwge1xcclxcblxcdGNvbG9yOiBibGFjaztcXHJcXG5cXHRmb250LXNpemU6IDE2O1xcclxcblxcdHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuXFx0bWFyZ2luLWxlZnQ6IDM2O1xcclxcblxcdG1hcmdpbi10b3A6IDE4O1xcclxcblxcdG1hcmdpbi1ib3R0b206IDcyO1xcclxcbn1cXHJcXG5cXHJcXG4uYWN0aXZpdHktaW5kaWNhdG9yIHtcXHJcXG5cXHRjb2xvcjogI2FjMDBlNjtcXHJcXG59XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPFBhZ2U+XFxyXFxuXFx0PFBhZ2UuYWN0aW9uQmFyPlxcclxcblxcdFxcdDxBY3Rpb25CYXIgdGl0bGU9XFxcIlBheW1lbnQgSW5mb1xcXCI+XFxyXFxuXFx0XFx0ICA8TmF2aWdhdGlvbkJ1dHRvbiB0ZXh0PVxcXCJHbyBCYWNrXFxcIiBhbmRyb2lkLnN5c3RlbUljb249XFxcImljX21lbnVfYmFja1xcXCIgKHRhcCk9XFxcIm9uTmF2QnRuVGFwKClcXFwiPjwvTmF2aWdhdGlvbkJ1dHRvbj5cXHJcXG5cXHRcXHQ8L0FjdGlvbkJhcj5cXHJcXG5cXHQ8L1BhZ2UuYWN0aW9uQmFyPlxcclxcblxcclxcblxcdDxTdGFja0xheW91dCAjaW5mb0NvbnRhaW5lcj5cXHJcXG5cXHRcXHQ8U3RhY2tMYXlvdXQ+XFxyXFxuXFx0XFx0XFx0PExhYmVsIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiB0ZXh0PVxcXCJ7eyBwYXltZW50SW5mby50eXBlIH19XFxcIiBjbGFzcz1cXFwiaW5mby1sYWJlbFxcXCI+PC9MYWJlbD5cXHJcXG5cXHRcXHRcXHQ8TGFiZWwgdGV4dFdyYXA9XFxcInRydWVcXFwiIHRleHQ9XFxcInt7IHBheW1lbnRJbmZvLmluZm8gfX1cXFwiIGNsYXNzPVxcXCJkZXRhaWxzLWxhYmVsXFxcIj48L0xhYmVsPlxcclxcblxcdFxcdDwvU3RhY2tMYXlvdXQ+XFxyXFxuXFx0XFx0PFN0YWNrTGF5b3V0ICh0YXApPVxcXCJyZW1vdmUoKVxcXCI+XFxyXFxuXFx0XFx0XFx0PExhYmVsIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiB0ZXh0PVxcXCJSZW1vdmVcXFwiIGNsYXNzPVxcXCJyZW1vdmUtcGF5bWVudC1sYWJlbFxcXCI+PC9MYWJlbD5cXHJcXG5cXHRcXHQ8L1N0YWNrTGF5b3V0PiAgXFxyXFxuXFx0PC9TdGFja0xheW91dD5cXHJcXG48L1BhZ2U+XFxyXFxuPEFjdGl2aXR5SW5kaWNhdG9yIHJvdz1cXFwiMVxcXCIgI2FjdGl2aXR5SW5kaWNhdG9yIGJ1c3k9XFxcImZhbHNlXFxcIiB3aWR0aD1cXFwiNDBcXFwiIGhlaWdodD1cXFwiNDBcXFwiIGNsYXNzPVxcXCJhY3Rpdml0eS1pbmRpY2F0b3JcXFwiPlxcclxcbjwvQWN0aXZpdHlJbmRpY2F0b3I+XCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRyYW5zZmVyU2VydmljZSB9IGZyb20gJy4uL2RhdGF0cmFuc2Zlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUGF5bWVudFNlcnZpY2UgfSBmcm9tICcuLi9wYXltZW50LnNlcnZpY2UudG5zJztcclxuXHJcbi8vIGltcG9ydCB7IE1vZGFsRGlhbG9nUGFyYW1zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2RpcmVjdGl2ZXMvZGlhbG9nc1wiO1xyXG5pbXBvcnQgeyBNb2RhbERpYWxvZ1NlcnZpY2UgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZGlyZWN0aXZlcy9kaWFsb2dzXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBDb25maXJtYXRpb25Db21wb25lbnQgfSBmcm9tICcuLi9jb25maXJtYXRpb24vY29uZmlybWF0aW9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IGlzQW5kcm9pZCwgaXNJT1MsIGRldmljZSwgc2NyZWVuIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybSc7XHJcbmltcG9ydCB7IGFuZHJvaWQgYXMgYW5kcm9pZEFwcCwgaW9zIGFzIGlvc0FwcCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCI7XHJcbmltcG9ydCB7IEFjdGl2aXR5SW5kaWNhdG9yIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9hY3Rpdml0eS1pbmRpY2F0b3InO1xyXG5pbXBvcnQgeyBTdGFja0xheW91dCB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvbGF5b3V0cy9zdGFjay1sYXlvdXQnO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLXBheW1lbnQtaW5mbycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3BheW1lbnQtaW5mby5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vcGF5bWVudC1pbmZvLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGF5bWVudEluZm9Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRyYW5zZmVyU2VydmljZTogVHJhbnNmZXJTZXJ2aWNlLCBwcml2YXRlIHBheW1lbnRTZXJ2aWNlOiBQYXltZW50U2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMsXHJcbiAgXHRwcml2YXRlIHZjUmVmOiBWaWV3Q29udGFpbmVyUmVmLCBwcml2YXRlIG1vZGFsOiBNb2RhbERpYWxvZ1NlcnZpY2UpIHsgfVxyXG5cclxuICBAVmlld0NoaWxkKCdhY3Rpdml0eUluZGljYXRvcicsIHsgc3RhdGljOiB0cnVlIH0pIGFJOiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoJ2luZm9Db250YWluZXInLCB7IHN0YXRpYzogdHJ1ZSB9KSBpQzogRWxlbWVudFJlZjtcclxuICBcclxuXHJcbiAgcGF5bWVudEluZm8gPSB7XHJcbiAgXHRwYXltZW50VHlwZTogXCJsb2FkaW5nXCIsXHJcbiAgXHRpbmZvOiBcImxvYWRpbmdcIixcclxuICBcdGlkVG9rZW46IFwibG9hZGluZ1wiLFxyXG4gIFx0dHlwZTogXCJsb2FkaW5nXCJcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIFx0dGhpcy5wYXltZW50SW5mbyA9IHRoaXMudHJhbnNmZXJTZXJ2aWNlLmdldERhdGEoKTtcclxuICBcdC8vIGNvbnNvbGUubG9nKHRoaXMucGF5bWVudEluZm8pO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlKCkge1xyXG4gIFx0bGV0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgY29udGV4dDoge30sXHJcbiAgICAgICAgZnVsbHNjcmVlbjogZmFsc2UsXHJcbiAgICAgICAgdmlld0NvbnRhaW5lclJlZjogdGhpcy52Y1JlZixcclxuICAgICAgICBhbmltYXRlZDogdHJ1ZSxcclxuICAgICAgICAvLyB0cmFuc2l0aW9uOiB7IG5hbWU6IFwic2xpZGVUb3BcIiB9XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICB0aGlzLm1vZGFsLnNob3dNb2RhbChDb25maXJtYXRpb25Db21wb25lbnQsIG9wdGlvbnMpLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgIFx0aWYocmVzdWx0ID09IFwiZGVsZXRlXCIpIHtcclxuICAgIFx0XHR2YXIgaW5mb0NvbnRhaW5lciA9IDxTdGFja0xheW91dD4gdGhpcy5pQy5uYXRpdmVFbGVtZW50O1xyXG4gICAgXHRcdGluZm9Db250YWluZXIuc3R5bGUudmlzaWJpbGl0eSA9IFwiY29sbGFwc2VcIjtcclxuICAgIFx0XHR0aGlzLnNob3dCdXN5KCk7XHJcbiAgICBcdFx0dGhpcy5wYXltZW50U2VydmljZS5yZW1vdmVQYXltZW50TWV0aG9kRnJvbVVzZXIodGhpcy5wYXltZW50SW5mby5pZFRva2VuKS5zdWJzY3JpYmUoKHJlcykgPT4ge1xyXG5cdFx0XHQgIFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUoWydwYXltZW50cyddKTtcclxuXHRcdCAgXHR9KTtcclxuICAgIFx0fVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBvbk5hdkJ0blRhcCgpIHtcclxuICBcdHRoaXMucm91dGVyLm5hdmlnYXRlKFsncGF5bWVudHMnXSk7XHJcbiAgfVxyXG5cclxuICBzaG93QnVzeSgpIHtcclxuICBcdHZhciBhY3Rpdml0eUluZGljYXRvciA9IDxBY3Rpdml0eUluZGljYXRvcj4gdGhpcy5hSS5uYXRpdmVFbGVtZW50O1xyXG4gIFx0YWN0aXZpdHlJbmRpY2F0b3IuYnVzeSA9IHRydWU7XHJcbiAgfVxyXG5cclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLypcXHJcXG5BZGQgeW91ciBOYXRpdmVTY3JpcHQgc3BlY2lmaWMgc3R5bGVzIGhlcmUuXFxyXFxuVG8gbGVhcm4gbW9yZSBhYm91dCBzdHlsaW5nIGluIE5hdGl2ZVNjcmlwdCBzZWU6XFxyXFxuaHR0cHM6Ly9kb2NzLm5hdGl2ZXNjcmlwdC5vcmcvYW5ndWxhci91aS9zdHlsaW5nXFxyXFxuKi9cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8U3RhY2tMYXlvdXQ+XFxyXFxuICA8TGFiZWwgdGV4dD1cXFwicGF5bWVudC1tZXRob2Qgd29ya3NcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIj48L0xhYmVsPlxcclxcbiAgPExhYmVsIHRleHQ9XFxcIlRoaXMgaXMgYSBtaWdyYXRlZCBjb21wb25lbnRcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIj48L0xhYmVsPlxcclxcbiAgPExhYmVsIHRleHQ9XFxcIlVwZGF0ZSBpdCB0byBwcm92aWRlIHRoZSBVSSBlbGVtZW50cyByZXF1aXJlZCBpbiB5b3VyIG1vYmlsZSBhcHBcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIj48L0xhYmVsPlxcclxcbjwvU3RhY2tMYXlvdXQ+XFxyXFxuXFxyXFxuPCEtLVxcclxcbk9yaWdpbmFsIFdlYiB0ZW1wbGF0ZTpcXHJcXG5cXHJcXG48ZGl2IGNsYXNzPVxcXCJwYXltZW50LW1ldGhvZFxcXCI+XFxyXFxuXFx0PHNwYW4gY2xhc3M9XFxcInBheW1lbnQtdHlwZS1pY29uXFxcIj48L3NwYW4+XFxyXFxuXFx0PHNwYW4gY2xhc3M9XFxcInBheW1lbnQtdHlwZS1kZXRhaWxzXFxcIj48L3NwYW4+XFxyXFxuPC9kaXY+XFxyXFxuLS0+XCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtcGF5bWVudC1tZXRob2QnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wYXltZW50LW1ldGhvZC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vcGF5bWVudC1tZXRob2QuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQYXltZW50TWV0aG9kQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQYXltZW50U2VydmljZSB7XHJcbiAgLy8gdXJpID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6NDAwMCc7XHJcbiAgLy9BZGFtJ3MgVGVzdGluZyBTZXJ2ZXJcclxuICAvLyB1cmkgPSAnaHR0cDovLzE5Mi4xNjguMS43OjQwMDAnO1xyXG4gIC8vUGhpbGxpcCdzIFRlc3RpbmcgU2VydmVyXHJcblx0Ly8gdXJpID0gJ2h0dHA6Ly8xOTIuMTY4LjEuMzo0MDAwJztcclxuICAvL0ZpcmViYXNlIGNsb3VkIGZ1bmN0aW9uc1xyXG4gIHVyaSA9ICdodHRwczovL3VzLWNlbnRyYWwxLWNvbGxlZ2Vwb29sLTE1NTI3NDkxMTg2MTcuY2xvdWRmdW5jdGlvbnMubmV0JztcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7IH1cclxuXHJcbiAgYWRkUGF5bWVudFVzZXIoaWQsIHVzZXJuYW1lLCBuYW1lLCBlbWFpbCkge1xyXG4gICAgLy8gY29uc29sZS5sb2coYCR7dGhpcy51cml9L2FkZEN1c3RvbWVyLyR7dXNlcm5hbWV9YClcclxuICBcdC8vIHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke3RoaXMudXJpfS9jdXN0b21lcnMvYWRkLyR7dXNlcm5hbWV9YCk7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldChgJHt0aGlzLnVyaX0vYWRkQ3VzdG9tZXI/dXNlcm5hbWU9JHt1c2VybmFtZX1gKTtcclxuICB9XHJcblxyXG4gIGdldFBheW1lbnRVc2VyQnlJZChpZCkge1xyXG4gICAgLy8gcmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy51cml9L2N1c3RvbWVycy8ke2lkfWApO1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy51cml9L2dldEN1c3RvbWVyP2lkPSR7aWR9YCk7XHJcbiAgfVxyXG5cclxuICBhZGRQYXltZW50TWV0aG9kVG9Vc2VyKGlkLCBub25jZSkge1xyXG4gIFx0Y29uc3QgYm9keSA9IHtcclxuICBcdFx0aWQ6IGlkLFxyXG4gIFx0XHRub25jZTogbm9uY2VcclxuICBcdH07XHJcbiAgXHQvLyByZXR1cm4gdGhpcy5odHRwLnBvc3QoYGh0dHA6Ly8xOTIuMTY4LjEuNzo0MDAwL2N1c3RvbWVycy9wYXltZW50L2AsIGJvZHkpO1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KGAke3RoaXMudXJpfS9hZGRQYXltZW50P2AsIGJvZHkpXHJcbiAgfVxyXG5cclxuICByZW1vdmVQYXltZW50TWV0aG9kRnJvbVVzZXIodG9rZW4pIHtcclxuICBcdHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke3RoaXMudXJpfS9yZW1vdmVQYXltZW50P3Rva2VuPSR7dG9rZW59YCk7XHJcbiAgfVxyXG5cclxuICBnZXRJZFRva2VuKGlkKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldChgJHt0aGlzLnVyaX0vZ2V0VG9rZW4/aWQ9JHtpZH1gKTtcclxuICB9XHJcbiAgXHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUGF5bWVudFNlcnZpY2Uge1xyXG4gIC8vIHVyaSA9ICdodHRwOi8vbG9jYWxob3N0OjQwMDAnO1xyXG4gIC8vQWRhbSdzIFRlc3RpbmcgU2VydmVyXHJcbiAgLy8gdXJpID0gJ2h0dHA6Ly8xOTIuMTY4LjEuNzo0MDAwJztcclxuICAvL1BoaWxsaXAncyBUZXN0aW5nIFNlcnZlclxyXG5cdC8vIHVyaSA9ICdodHRwOi8vMTkyLjE2OC4xLjM6NDAwMCc7XHJcbiAgLy9GaXJlYmFzZSBjbG91ZCBmdW5jdGlvbnNcclxuICB1cmkgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1jb2xsZWdlcG9vbC0xNTUyNzQ5MTE4NjE3LmNsb3VkZnVuY3Rpb25zLm5ldCc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkgeyB9XHJcblxyXG4gIGFkZFBheW1lbnRVc2VyKGlkLCB1c2VybmFtZSwgbmFtZSwgZW1haWwpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKGAke3RoaXMudXJpfS9hZGRDdXN0b21lci8ke3VzZXJuYW1lfWApXHJcbiAgXHQvLyByZXR1cm4gdGhpcy5odHRwLmdldChgJHt0aGlzLnVyaX0vY3VzdG9tZXJzL2FkZC8ke3VzZXJuYW1lfWApO1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy51cml9L2FkZEN1c3RvbWVyP3VzZXJuYW1lPSR7dXNlcm5hbWV9YCk7XHJcbiAgfVxyXG5cclxuICBnZXRQYXltZW50VXNlckJ5SWQoaWQpIHtcclxuICAgIC8vIHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke3RoaXMudXJpfS9jdXN0b21lcnMvJHtpZH1gKTtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke3RoaXMudXJpfS9nZXRDdXN0b21lcj9pZD0ke2lkfWApO1xyXG4gIH1cclxuXHJcbiAgYWRkUGF5bWVudE1ldGhvZFRvVXNlcihpZCwgbm9uY2UpIHtcclxuICBcdGNvbnN0IGJvZHkgPSB7XHJcbiAgXHRcdGlkOiBpZCxcclxuICBcdFx0bm9uY2U6IG5vbmNlXHJcbiAgXHR9O1xyXG4gIFx0Ly8gcmV0dXJuIHRoaXMuaHR0cC5wb3N0KGBodHRwOi8vMTkyLjE2OC4xLjc6NDAwMC9jdXN0b21lcnMvcGF5bWVudC9gLCBib2R5KTtcclxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChgJHt0aGlzLnVyaX0vYWRkUGF5bWVudD9gLCBib2R5KVxyXG4gIH1cclxuXHJcbiAgcmVtb3ZlUGF5bWVudE1ldGhvZEZyb21Vc2VyKHRva2VuKSB7XHJcbiAgXHRyZXR1cm4gdGhpcy5odHRwLmdldChgJHt0aGlzLnVyaX0vcmVtb3ZlUGF5bWVudD90b2tlbj0ke3Rva2VufWApO1xyXG4gIH1cclxuXHJcbiAgZ2V0SWRUb2tlbihpZCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy51cml9L2dldFRva2VuP2lkPSR7aWR9YCk7XHJcbiAgfVxyXG4gIFxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCIucGF5bWVudC10eXBlLWljb24ge1xcclxcblxcdGhlaWdodDogMzQ7XFxyXFxuXFx0d2lkdGg6IDM0O1xcclxcblxcdGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG5cXHRtYXJnaW4tdG9wOiAxODtcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiAxODtcXHJcXG5cXHRtYXJnaW4tbGVmdDogMzY7XFxyXFxufVxcclxcblxcclxcbi5wYXltZW50LWluZm8tbGFiZWwge1xcclxcblxcdGZvbnQtc2l6ZTogMTY7XFxyXFxuXFx0Lypmb250LXdlaWdodDogNzAwOyovXFxyXFxuXFx0cGFkZGluZzogMzA7XFxyXFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcdGNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1wYXltZW50LWxhYmVsIHtcXHJcXG5cXHRmb250LXNpemU6IDE2O1xcclxcblxcdGNvbG9yOiAjYWMwMGU2O1xcclxcblxcdG1hcmdpbi1sZWZ0OiAzNjtcXHJcXG5cXHR0ZXh0LWFsaWduOiBsZWZ0O1xcclxcblxcdHBhZGRpbmc6IDE4O1xcclxcbn1cXHJcXG5cXHJcXG4uY3JlZGl0LWNhcmQtaWNvbiB7XFxyXFxuXFx0Y29udGVudDogdXJsKFxcXCJ+L2ltZy9jcmVkaXQtY2FyZC1pY29uLnBuZ1xcXCIpO1xcclxcbn1cXHJcXG5cXHJcXG4ucGF5cGFsLWljb24ge1xcclxcblxcdGNvbnRlbnQ6IHVybChcXFwifi9pbWcvcGF5cGFsLWljb24ucG5nXFxcIik7XFxyXFxufVxcclxcblxcclxcbi52ZW5tby1pY29uIHtcXHJcXG5cXHRjb250ZW50OiB1cmwoXFxcIn4vaW1nL3Zlbm1vLWljb24ucG5nXFxcIik7XFxyXFxufVxcclxcblxcclxcbi5wb3N0IHtcXHJcXG5cXHJcXG5cXHRib3JkZXItY29sb3I6ICNmMWYxZjE7XFxyXFxufVxcclxcblxcclxcbi5wb3N0OmhpZ2hsaWdodGVkIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xcclxcbn1cXHJcXG5cXHJcXG4uYWN0aXZpdHktaW5kaWNhdG9yIHtcXHJcXG5cXHRjb2xvcjogI2FjMDBlNjtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1jb250YWluZXIge1xcclxcblxcdHZpc2liaWxpdHk6IGNvbGxhcHNlO1xcclxcbn1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8UGFnZT5cXHJcXG5cXHQ8UGFnZS5hY3Rpb25CYXI+XFxyXFxuXFx0XFx0PEFjdGlvbkJhciB0aXRsZT1cXFwiUGF5bWVudHNcXFwiPlxcclxcblxcdFxcdCAgPE5hdmlnYXRpb25CdXR0b24gdGV4dD1cXFwiR28gQmFja1xcXCIgYW5kcm9pZC5zeXN0ZW1JY29uPVxcXCJpY19tZW51X2JhY2tcXFwiICh0YXApPVxcXCJvbk5hdkJ0blRhcCgpXFxcIj48L05hdmlnYXRpb25CdXR0b24+XFxyXFxuXFx0XFx0PC9BY3Rpb25CYXI+XFxyXFxuXFx0PC9QYWdlLmFjdGlvbkJhcj5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHQ8U3RhY2tMYXlvdXQgI3BheW1lbnRzQ29udGFpbmVyPlxcclxcblxcdFxcdDxMaXN0VmlldyBbaXRlbXNdPVxcXCJwYXltZW50c1xcXCIgc2VwYXJhdG9yQ29sb3I9XFxcInRyYW5zcGFyZW50XFxcIiAoaXRlbVRhcCk9XFxcIm9uU2VsZWN0KCRldmVudClcXFwiPlxcclxcblxcdFxcdFxcdDxuZy10ZW1wbGF0ZSBsZXQtaXRlbT1cXFwiaXRlbVxcXCIgbGV0LWk9XFxcImluZGV4XFxcIiBsZXQtb2RkPVxcXCJvZGRcXFwiIGxldC1ldmVuPVxcXCJldmVuXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHQ8U3RhY2tMYXlvdXQgW2NsYXNzLm9kZF09XFxcIm9kZFxcXCIgW2NsYXNzLmV2ZW5dPVxcXCJldmVuXFxcIiBjbGFzcz1cXFwicG9zdFxcXCIgb3JpZW50YXRpb249XFxcImhvcml6b250YWxcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdDxJbWFnZSBbc3JjXT1cXFwiaXRlbS5wYXltZW50VHlwZVxcXCIgY2xhc3M9XFxcInBheW1lbnQtdHlwZS1pY29uXFxcIj48L0ltYWdlPlxcclxcblxcdFxcdFxcdFxcdFxcdDxMYWJlbCB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgW3RleHRdPVxcXCJpdGVtLmluZm9cXFwiIGNsYXNzPVxcXCJwYXltZW50LWluZm8tbGFiZWxcXFwiPjwvTGFiZWw+XFxyXFxuXFx0XFx0XFx0XFx0PC9TdGFja0xheW91dD5cXHJcXG5cXHRcXHRcXHQ8L25nLXRlbXBsYXRlPlxcclxcblxcdFxcdDwvTGlzdFZpZXc+XFxyXFxuXFxyXFxuXFx0XFx0PFN0YWNrTGF5b3V0ICh0YXApPVxcXCJzaG93TW9kYWwoKVxcXCIgI2FkZENvbnRhaW5lciBjbGFzcz1cXFwiYWRkLWNvbnRhaW5lclxcXCI+XFxyXFxuXFx0XFx0XFx0PExhYmVsIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiB0ZXh0PVxcXCJBZGQgcGF5bWVudCBtZXRob2RcXFwiIGNsYXNzPVxcXCJhZGQtcGF5bWVudC1sYWJlbFxcXCI+PC9MYWJlbD5cXHJcXG5cXHRcXHQ8L1N0YWNrTGF5b3V0PiAgXFxyXFxuXFx0PC9TdGFja0xheW91dD5cXHJcXG48L1BhZ2U+XFxyXFxuXFxyXFxuPEFjdGl2aXR5SW5kaWNhdG9yICNhY3Rpdml0eUluZGljYXRvciBidXN5PVxcXCJ0cnVlXFxcIiB3aWR0aD1cXFwiNDBcXFwiIGhlaWdodD1cXFwiNDBcXFwiIGNsYXNzPVxcXCJhY3Rpdml0eS1pbmRpY2F0b3JcXFwiPlxcclxcbjwvQWN0aXZpdHlJbmRpY2F0b3I+XCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGVBcnJheSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlLWFycmF5JztcclxuaW1wb3J0IHsgRHluYW1pY0FkZFNlcnZpY2UgfSBmcm9tICcuLi9keW5hbWljLWFkZC5zZXJ2aWNlJztcclxuaW1wb3J0ICogYXMgZHJvcGluIGZyb20gJ2JyYWludHJlZS13ZWItZHJvcC1pbic7XHJcbmltcG9ydCAqIGFzIGJyYWludHJlZSBmcm9tICdicmFpbnRyZWUtd2ViJztcclxuaW1wb3J0IHsgQnJhaW50cmVlLCBCcmFpblRyZWVPcHRpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWJyYWludHJlZSc7XHJcbmltcG9ydCB7IElQYXlQYWxDb25maWcgfSBmcm9tICduZ3gtcGF5cGFsJztcclxuaW1wb3J0IHsgTG9naW5jaGVja1NlcnZpY2UgfSBmcm9tICcuLi9sb2dpbmNoZWNrLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQYXltZW50U2VydmljZSB9IGZyb20gJy4uL3BheW1lbnQuc2VydmljZS50bnMnO1xyXG5pbXBvcnQgeyBUcmFuc2ZlclNlcnZpY2UgfSBmcm9tICcuLi9kYXRhdHJhbnNmZXIuc2VydmljZSc7XHJcblxyXG5pbXBvcnQgeyBNb2RhbERpYWxvZ1BhcmFtcyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9kaXJlY3RpdmVzL2RpYWxvZ3NcIjtcclxuaW1wb3J0IHsgTW9kYWxEaWFsb2dTZXJ2aWNlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2RpcmVjdGl2ZXMvZGlhbG9nc1wiO1xyXG5pbXBvcnQgeyBBZGRQYXltZW50Q29tcG9uZW50IH0gZnJvbSAnLi4vYWRkLXBheW1lbnQvYWRkLXBheW1lbnQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGF5bWVudEluZm9Db21wb25lbnQgfSBmcm9tICcuLi9wYXltZW50LWluZm8vcGF5bWVudC1pbmZvLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBBY3Rpdml0eUluZGljYXRvciB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvYWN0aXZpdHktaW5kaWNhdG9yJztcclxuaW1wb3J0IHsgU3RhY2tMYXlvdXQgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvc3RhY2stbGF5b3V0JztcclxuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCI7XHJcbmltcG9ydCAqIGFzIGZpcmViYXNlIGZyb20gJ25hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2UnO1xyXG5cclxuZGVjbGFyZSBsZXQgcGF5cGFsOiBhbnk7XHJcblxyXG5jbGFzcyBQYXltZW50SXRlbSB7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheW1lbnRUeXBlOiBzdHJpbmcsIHB1YmxpYyBpbmZvOiBzdHJpbmcsIHB1YmxpYyBpZFRva2VuOiBzdHJpbmcsIHB1YmxpYyB0eXBlOiBzdHJpbmcpIHt9XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLXBheW1lbnRzJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcGF5bWVudHMuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3BheW1lbnRzLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGF5bWVudHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBAVmlld0NoaWxkKCdhY3Rpdml0eUluZGljYXRvcicsIHsgc3RhdGljOiB0cnVlIH0pIGFJOiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoJ2FkZENvbnRhaW5lcicsIHsgc3RhdGljOiB0cnVlIH0pIGFDOiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoJ3BheW1lbnRzQ29udGFpbmVyJywgeyBzdGF0aWM6IHRydWUgfSkgcEM6IEVsZW1lbnRSZWY7XHJcbiAgdXNlciA9IHtcclxuICBcdHBheW1lbnRfaWQ6ICc1MDczMDU3MDYnXHJcbiAgfVxyXG4gIG9wdHMgOkJyYWluVHJlZU9wdGlvbnMgPSB7XHJcbiAgICBhbW91bnQ6IG51bGwsXHJcbiAgICBjb2xsZWN0RGV2aWNlRGF0YTogdHJ1ZSxcclxuICAgIHJlcXVlc3RUaHJlZURTZWN1cmVWZXJpZmljYXRpb246IGZhbHNlLFxyXG4gIH1cclxuICBjbGllbnRUb2tlbiA9ICcnO1xyXG4gIHBheW1lbnRDdXN0b21lcjtcclxuICBwYXltZW50SW5mbztcclxuICBwYXltZW50cyA9IG5ldyBPYnNlcnZhYmxlQXJyYXk8UGF5bWVudEl0ZW0+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYWRkU2VydmljZTogRHluYW1pY0FkZFNlcnZpY2UsIHByaXZhdGUgcGF5bWVudFNlcnZpY2U6IFBheW1lbnRTZXJ2aWNlLCBwcml2YXRlIGxvZ2luY2hlY2tTZXJ2aWNlOiBMb2dpbmNoZWNrU2VydmljZSwgcHJpdmF0ZSB0cmFuc2ZlclNlcnZpY2U6IFRyYW5zZmVyU2VydmljZSxcclxuICBcdHByaXZhdGUgdmNSZWY6IFZpZXdDb250YWluZXJSZWYsIHByaXZhdGUgbW9kYWw6IE1vZGFsRGlhbG9nU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIGZpcmViYXNlLmdldEN1cnJlbnRVc2VyKCkudGhlbih1c2VyID0+IHtcclxuICAgICAgZmlyZWJhc2UuZmlyZXN0b3JlLmNvbGxlY3Rpb24oJ3VzZXJzJykuZG9jKHVzZXIudWlkKS5nZXQoKS50aGVuKGRvYyA9PiB7XHJcbiAgICAgICAgdGhpcy51c2VyLnBheW1lbnRfaWQgPSBkb2MuZGF0YSgpLnBheW1lbnRfaWQ7XHJcbiAgICAgICAgdGhpcy5nZXRVc2VyKCk7XHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIFx0XHJcbiAgfVxyXG5cclxuICBzaG93TW9kYWwoKSB7XHJcbiAgICBsZXQgYnJhaW50cmVlID0gbmV3IEJyYWludHJlZSgpO1xyXG4gICAgLy8gdGhpcy5jcmVhdGVWaWV3cygpO1xyXG5cclxuICAgIGJyYWludHJlZS5zdGFydFBheW1lbnQodGhpcy5jbGllbnRUb2tlbiwgdGhpcy5vcHRzKTtcclxuXHJcbiAgICBicmFpbnRyZWUub24oXCJzdWNjZXNzXCIsIChyZXMpID0+IHtcclxuICAgICAgICBsZXQgb3V0cHV0ID0gcmVzLm9iamVjdC5nZXQoXCJvdXRwdXRcIik7XHJcbiAgICAgICAgLy8gY29uc29sZS5kaXIob3V0cHV0KTtcclxuXHJcbiAgICAgICAgdmFyIGFkZENvbnRhaW5lciA9IDxTdGFja0xheW91dD4gdGhpcy5hQy5uYXRpdmVFbGVtZW50O1xyXG4gICAgICAgIHZhciBwYXltZW50c0NvbnRhaW5lciA9IDxTdGFja0xheW91dD4gdGhpcy5wQy5uYXRpdmVFbGVtZW50O1xyXG4gICAgICAgIHZhciBhY3Rpdml0eUluZGljYXRvciA9IDxBY3Rpdml0eUluZGljYXRvcj4gdGhpcy5hSS5uYXRpdmVFbGVtZW50O1xyXG4gICAgICAgIHBheW1lbnRzQ29udGFpbmVyLnN0eWxlLnZpc2liaWxpdHkgPSAnY29sbGFwc2UnO1xyXG4gICAgICAgIGFkZENvbnRhaW5lci5zdHlsZS52aXNpYmlsaXR5ID0gJ2NvbGxhcHNlJztcclxuICAgICAgICBhY3Rpdml0eUluZGljYXRvci5idXN5ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgdGhpcy5wYXltZW50U2VydmljZS5hZGRQYXltZW50TWV0aG9kVG9Vc2VyKHRoaXMudXNlci5wYXltZW50X2lkLCBvdXRwdXQubm9uY2UpLnN1YnNjcmliZSgocmVzOiBhbnkpID0+IHtcclxuICAgICAgICAgIGlmKHJlcy5tZXNzYWdlID09ICdTdWNjZXNzJykge1xyXG4gICAgICAgICAgICBkaWFsb2dzLmFsZXJ0KHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIkFkZGVkIG1ldGhvZFwiLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJQYXltZW50IG1ldGhvZCBhZGRlZCBzdWNjZXNzZnVsbHlcIixcclxuICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJDbG9zZVwiXHJcbiAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZ2V0VXNlcigpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZWxzZSBpZihyZXMubWVzc2FnZSA9PSAnQWxyZWFkeSBleGlzdHMnKSB7XHJcbiAgICAgICAgICAgIGFkZENvbnRhaW5lci5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xyXG4gICAgICAgICAgICBwYXltZW50c0NvbnRhaW5lci5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xyXG4gICAgICAgICAgICBhY3Rpdml0eUluZGljYXRvci5idXN5ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRpYWxvZ3MuYWxlcnQoe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiQ291bGQgbm90IGFkZCBtZXRob2RcIixcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiUGF5bWVudCBtZXRob2QgYWxyZWFkeSBleGlzdHMsIHBsZWFzZSB0cnkgYW5vdGhlciBvbmUuXCIsXHJcbiAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiQ2xvc2VcIlxyXG4gICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAvLyB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ3BheW1lbnRzJ10pO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLy8gdGhpcy5wYXltZW50U2VydmljZS5hZGRQYXltZW50TWV0aG9kVG9Vc2VyKHRoaXMudXNlci5wYXltZW50X2lkLCBvdXRwdXQubm9uY2UpLnN1YnNjcmliZSgocmVzKSA9PiB7XHJcbiAgICAgICAgLy8gICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ3BheW1lbnRzJ10pO1xyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgfSlcclxuICAgICBcclxuICAgIGJyYWludHJlZS5vbihcImNhbmNlbFwiLCBmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgbGV0IG91dHB1dCA9IHJlcy5vYmplY3QuZ2V0KFwib3V0cHV0XCIpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUuZGlyKG91dHB1dCk7XHJcbiAgICB9KVxyXG4gICAgIFxyXG4gICAgYnJhaW50cmVlLm9uKFwiZXJyb3JcIiwgZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgIGxldCBvdXRwdXQgPSByZXMub2JqZWN0LmdldChcIm91dHB1dFwiKTtcclxuICAgICAgICAvLyBjb25zb2xlLmRpcihvdXRwdXQpO1xyXG4gICAgfSlcclxuICAgIC8vIGxldCBvcHRpb25zID0ge1xyXG4gICAgLy8gICAgIGNvbnRleHQ6IHt9LFxyXG4gICAgLy8gICAgIGZ1bGxzY3JlZW46IHRydWUsXHJcbiAgICAvLyAgICAgdmlld0NvbnRhaW5lclJlZjogdGhpcy52Y1JlZlxyXG4gICAgLy8gICAgIC8vIGFuaW1hdGVkOiB0cnVlLFxyXG4gICAgLy8gICAgIC8vIHRyYW5zaXRpb246IHsgbmFtZTogXCJzbGlkZVRvcFwiIH1cclxuICAgIC8vIH07XHJcbiAgICBcclxuICAgIC8vIHRoaXMubW9kYWwuc2hvd01vZGFsKEFkZFBheW1lbnRDb21wb25lbnQsIG9wdGlvbnMpLnRoZW4ocmVzID0+IHtcclxuXHJcbiAgICAvLyB9KTtcclxuICB9XHJcblxyXG4gIGdldFVzZXIoKSB7XHJcbiAgICB0aGlzLnBheW1lbnRzLnNwbGljZSgwKTtcclxuXHJcbiAgICB2YXIgYWRkQ29udGFpbmVyID0gPFN0YWNrTGF5b3V0PiB0aGlzLmFDLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICB2YXIgcGF5bWVudHNDb250YWluZXIgPSA8U3RhY2tMYXlvdXQ+IHRoaXMucEMubmF0aXZlRWxlbWVudDtcclxuICAgIGFkZENvbnRhaW5lci5zdHlsZS52aXNpYmlsaXR5ID0gJ2NvbGxhcHNlJztcclxuICAgIHBheW1lbnRzQ29udGFpbmVyLnN0eWxlLnZpc2liaWxpdHkgPSAnY29sbGFwc2UnO1xyXG5cclxuICBcdHRoaXMucGF5bWVudFNlcnZpY2UuZ2V0UGF5bWVudFVzZXJCeUlkKHRoaXMudXNlci5wYXltZW50X2lkKS5zdWJzY3JpYmUoKGRhdGEpID0+IHtcclxuICAgICAgdGhpcy5zZXR1cFZpZXdzKCk7XHJcblxyXG4gIFx0XHR0aGlzLnBheW1lbnRDdXN0b21lciA9IGRhdGE7XHJcbiAgXHRcdC8vIGNvbnNvbGUubG9nKHRoaXMucGF5bWVudEN1c3RvbWVyKVxyXG4gIFx0XHRpZih0aGlzLnBheW1lbnRDdXN0b21lci5jcmVkaXRDYXJkcyAhPSBudWxsKVxyXG5cdCAgXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLnBheW1lbnRDdXN0b21lci5jcmVkaXRDYXJkcy5sZW5ndGg7IGkrKykgXHJcblx0ICBcdFx0XHR0aGlzLnBheW1lbnRzLnB1c2gobmV3IFBheW1lbnRJdGVtKFwifi9pbWcvY3JlZGl0LWNhcmQtaWNvbi5wbmdcIiwgdGhpcy5wYXltZW50Q3VzdG9tZXIuY3JlZGl0Q2FyZHNbaV0uY2FyZFR5cGUgKyBcIiBlbmRpbmcgaW4gXCIgKyB0aGlzLnBheW1lbnRDdXN0b21lci5jcmVkaXRDYXJkc1tpXS5sYXN0NCwgdGhpcy5wYXltZW50Q3VzdG9tZXIuY3JlZGl0Q2FyZHNbaV0udG9rZW4sIFwiQ2FyZFwiKSk7XHJcbiAgXHRcdGlmKHRoaXMucGF5bWVudEN1c3RvbWVyLnBheXBhbEFjY291bnRzICE9IG51bGwpXHJcbiAgXHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMucGF5bWVudEN1c3RvbWVyLnBheXBhbEFjY291bnRzLmxlbmd0aDsgaSsrKVxyXG4gIFx0XHRcdFx0dGhpcy5wYXltZW50cy5wdXNoKG5ldyBQYXltZW50SXRlbShcIn4vaW1nL3BheXBhbC1pY29uLnBuZ1wiLCB0aGlzLnBheW1lbnRDdXN0b21lci5wYXlwYWxBY2NvdW50c1tpXS5lbWFpbCwgdGhpcy5wYXltZW50Q3VzdG9tZXIucGF5cGFsQWNjb3VudHNbaV0udG9rZW4sIFwiUGF5UGFsXCIpKVxyXG4gIFx0XHRpZih0aGlzLnBheW1lbnRDdXN0b21lci52ZW5tb0FjY291bnRzICE9IG51bGwpXHJcbiAgXHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMucGF5bWVudEN1c3RvbWVyLnZlbm1vQWNjb3VudHMubGVuZ3RoOyBpKyspXHJcbiAgXHRcdFx0XHR0aGlzLnBheW1lbnRzLnB1c2gobmV3IFBheW1lbnRJdGVtKFwifi9pbWcvdmVubW8taWNvbi5wbmdcIiwgdGhpcy5wYXltZW50Q3VzdG9tZXIudmVubW9BY2NvdW50c1tpXS52ZW5tb1VzZXJJZCwgdGhpcy5wYXltZW50Q3VzdG9tZXIudmVubW9BY2NvdW50c1tpXS50b2tlbiwgXCJWZW5tb1wiKSlcclxuICBcdFx0Ly8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpc3QtbG9hZGluZy1jaXJjbGUnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gIFx0fSk7XHJcbiAgICB0aGlzLnBheW1lbnRTZXJ2aWNlLmdldElkVG9rZW4odGhpcy51c2VyLnBheW1lbnRfaWQpLnN1YnNjcmliZSgocmVzOiBhbnkpID0+IHtcclxuICAgICAgdGhpcy5jbGllbnRUb2tlbiA9IHJlcy5jbGllbnRUb2tlbjtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2V0dXBWaWV3cygpIHtcclxuICAgIHZhciBhY3Rpdml0eUluZGljYXRvciA9IDxBY3Rpdml0eUluZGljYXRvcj4gdGhpcy5hSS5uYXRpdmVFbGVtZW50O1xyXG4gICAgYWN0aXZpdHlJbmRpY2F0b3IuYnVzeSA9IGZhbHNlO1xyXG5cclxuICAgIHZhciBhZGRDb250YWluZXIgPSA8U3RhY2tMYXlvdXQ+IHRoaXMuYUMubmF0aXZlRWxlbWVudDtcclxuICAgIGFkZENvbnRhaW5lci5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xyXG5cclxuICAgIHZhciBwYXltZW50c0NvbnRhaW5lciA9IDxTdGFja0xheW91dD4gdGhpcy5wQy5uYXRpdmVFbGVtZW50O1xyXG4gICAgcGF5bWVudHNDb250YWluZXIuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcclxuICB9XHJcblxyXG4gIHNlbGVjdFBheW1lbnQoKSB7XHJcblxyXG4gIH1cclxuXHJcbiAgb25TZWxlY3QoZXZlbnQpIHtcclxuICBcdC8vIGNvbnNvbGUubG9nKGV2ZW50LmluZGV4KTtcclxuICBcdGxldCBvcHRpb25zID0ge1xyXG4gICAgICAgIGNvbnRleHQ6IHt9LFxyXG4gICAgICAgIGZ1bGxzY3JlZW46IHRydWUsXHJcbiAgICAgICAgdmlld0NvbnRhaW5lclJlZjogdGhpcy52Y1JlZlxyXG4gICAgICAgIC8vIGFuaW1hdGVkOiB0cnVlLFxyXG4gICAgICAgIC8vIHRyYW5zaXRpb246IHsgbmFtZTogXCJzbGlkZVRvcFwiIH1cclxuICAgIH07XHJcblxyXG4gICAgdGhpcy50cmFuc2ZlclNlcnZpY2Uuc2V0RGF0YSh0aGlzLnBheW1lbnRzLmdldEl0ZW0oZXZlbnQuaW5kZXgpKTtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsncGF5bWVudGluZm8nXSk7XHJcbiAgICAvLyB0aGlzLm1vZGFsLnNob3dNb2RhbChQYXltZW50SW5mb0NvbXBvbmVudCwgb3B0aW9ucykudGhlbihyZXMgPT4ge1xyXG5cclxuICAgIC8vIH0pO1xyXG4gIH1cclxuXHJcbiAgb25OYXZCdG5UYXAoKSB7XHJcbiAgICB0aGlzLnJvdXRlci5iYWNrKCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFBsYWNlc0F1dG9jb21wbGV0ZVNlcnZpY2Uge1xyXG5cclxuICBwbGFjZXNfdXJpID0gJ2h0dHBzOi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9wbGFjZS90ZXh0c2VhcmNoL2pzb24/a2V5PUFJemFTeUFJVHhTMWptZjhQTXRhelJndVdjQWZXUXhXMWtQT29ZZyZxdWVyeT0nXHJcbiAgYXV0b2NvbXBsZXRlX3VyaSA9ICdodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvcGxhY2UvYXV0b2NvbXBsZXRlL2pzb24/a2V5PUFJemFTeUFJVHhTMWptZjhQTXRhelJndVdjQWZXUXhXMWtQT29ZZyZzZXNzaW9udG9rZW49MTIzNDU2Nzg5MCZpbnB1dD0nXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwQ2xpZW50OiBIdHRwQ2xpZW50KSB7IH1cclxuXHJcbiAgZ2V0QXV0b2NvbXBsZXRlUmVzdWx0cyhwbGFjZSkge1xyXG4gIFx0cmV0dXJuIHRoaXMuaHR0cENsaWVudC5nZXQoYCR7dGhpcy5hdXRvY29tcGxldGVfdXJpfWAgKyBwbGFjZSk7XHJcbiAgfVxyXG5cclxuICBnZXRQbGFjZVJlc3VsdHMocGxhY2UpIHtcclxuICBcdHJldHVybiB0aGlzLmh0dHBDbGllbnQuZ2V0KGAke3RoaXMucGxhY2VzX3VyaX1gICsgcGxhY2UpO1xyXG4gIH1cclxuXHJcbiAgZ2V0QXV0b2NvbXBsZXRlUmVzdWx0c0dlb2NvZGUocGxhY2UpIHtcclxuICBcdHJldHVybiB0aGlzLmh0dHBDbGllbnQuZ2V0KGAke3RoaXMuYXV0b2NvbXBsZXRlX3VyaX1gICsgcGxhY2UgKyBgJnR5cGVzPWdlb2NvZGVgKTtcclxuICB9XHJcbiAgZ2V0QXV0b2NvbXBsZXRlUmVzdWx0c0VzdGFibGlzaG1lbnQocGxhY2UpIHtcclxuICBcdHJldHVybiB0aGlzLmh0dHBDbGllbnQuZ2V0KGAke3RoaXMuYXV0b2NvbXBsZXRlX3VyaX1gICsgcGxhY2UgKyBgJnR5cGVzPWVzdGFibGlzaG1lbnRgKTtcclxuICB9XHJcbiAgZ2V0QXV0b2NvbXBsZXRlUmVzdWx0c0FkZHJlc3MocGxhY2UpIHtcclxuICBcdHJldHVybiB0aGlzLmh0dHBDbGllbnQuZ2V0KGAke3RoaXMuYXV0b2NvbXBsZXRlX3VyaX1gICsgcGxhY2UgKyBgJnR5cGVzPWFkZHJlc3NgKTtcclxuICB9XHJcbiAgZ2V0QXV0b2NvbXBsZXRlUmVzdWx0c0NpdHkocGxhY2UpIHtcclxuICBcdHJldHVybiB0aGlzLmh0dHBDbGllbnQuZ2V0KGAke3RoaXMuYXV0b2NvbXBsZXRlX3VyaX1gICsgcGxhY2UgKyBgJnR5cGVzPShjaXRpZXMpYCk7XHJcbiAgfVxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCIvKiBBZGQgbW9iaWxlIHN0eWxlcyBmb3IgdGhlIGNvbXBvbmVudCBoZXJlLiAgKi9cXHJcXG4ubWFwLXZpZXcge1xcclxcblxcdGhlaWdodDogMTAwJTtcXHJcXG5cXHR3aWR0aDogMTAwJTtcXHJcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvZmlsZS1waWN0dXJlIHtcXHJcXG5cXHRoZWlnaHQ6IDUwO1xcclxcblxcdHdpZHRoOiA1MDtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAyNTtcXHJcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcclxcblxcdG1hcmdpbi1sZWZ0OiAxNjtcXHJcXG5cXHRtYXJnaW4tdG9wOiAyMDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hbWUtbGFiZWwge1xcclxcblxcdG1hcmdpbi10b3A6IDE2O1xcclxcblxcdG1hcmdpbi1sZWZ0OiAxODtcXHJcXG5cXHRjb2xvcjogYmxhY2s7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDcwMDtcXHJcXG5cXHRmb250LXNpemU6IDE3O1xcclxcblxcdHRleHQtYWxpZ246IGxlZnQ7XFxyXFxufVxcclxcblxcclxcbi5pbmZvLWxhYmVsIHtcXHJcXG5cXHRtYXJnaW4tdG9wOiA0O1xcclxcblxcdG1hcmdpbi1sZWZ0OiAxODtcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiAxNjtcXHJcXG5cXHRjb2xvcjogYmxhY2s7XFxyXFxuXFx0dGV4dC1hbGlnbjogbGVmdDtcXHJcXG59XFxyXFxuXFxyXFxuLmxhYmVsLWNvbnRhaW5lciB7XFxyXFxuXFx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcXHJcXG59XFxyXFxuXFxyXFxuLmFjdGl2aXR5LWluZGljYXRvciB7XFxyXFxuXFx0Y29sb3I6ICNhYzAwZTY7XFxyXFxufVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxQYWdlLmFjdGlvbkJhcj5cXHJcXG4gICAgPEFjdGlvbkJhciB0aXRsZT1cXFwiUG9zdFxcXCI+XFxyXFxuICAgIFxcdDxOYXZpZ2F0aW9uQnV0dG9uIHRleHQ9XFxcIkdvIEJhY2tcXFwiIGFuZHJvaWQuc3lzdGVtSWNvbj1cXFwiaWNfbWVudV9iYWNrXFxcIiAodGFwKT1cXFwib25OYXZCdG5UYXAoKVxcXCI+PC9OYXZpZ2F0aW9uQnV0dG9uPlxcclxcblxcdCAgICA8QWN0aW9uSXRlbSAodGFwKT1cXFwicHJvbXB0RGVsZXRlKClcXFwiXFxyXFxuXFx0ICAgICAgaW9zLnN5c3RlbUljb249XFxcIjE2XFxcIiBpb3MucG9zaXRpb249XFxcInJpZ2h0XFxcIlxcclxcblxcdCAgICAgIHRleHQ9XFxcIkRlbGV0ZVxcXCIgYW5kcm9pZC5wb3NpdGlvbj1cXFwicG9wdXBcXFwiICNkZWxldGVJdGVtPjwvQWN0aW9uSXRlbT5cXHJcXG5cXHQgICAgPEFjdGlvbkl0ZW0gKHRhcCk9XFxcIm9uUmVwb3J0KClcXFwiXFxyXFxuXFx0ICAgICAgaW9zLnN5c3RlbUljb249XFxcIjlcXFwiIGlvcy5wb3NpdGlvbj1cXFwicmlnaHRcXFwiXFxyXFxuXFx0ICAgICAgdGV4dD1cXFwiUmVwb3J0XFxcIiBhbmRyb2lkLnBvc2l0aW9uPVxcXCJwb3B1cFxcXCI+PC9BY3Rpb25JdGVtPlxcclxcbiAgICA8L0FjdGlvbkJhcj5cXHJcXG48L1BhZ2UuYWN0aW9uQmFyPlxcclxcbjxHcmlkTGF5b3V0IHJvd3M9XFxcIjIqLGF1dG8sMTAqXFxcIiAjbGF5b3V0PlxcclxcblxcdDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cXFwiaG9yaXpvbnRhbFxcXCIgcm93PVxcXCIwXFxcIiBjbGFzcz1cXFwibGFiZWwtY29udGFpbmVyXFxcIiAjaW5mb0NvbnRhaW5lcj5cXHJcXG5cXHRcXHQ8SW1hZ2VDYWNoZUl0IHNyYz1cXFwie3sgcHJvZmlsZVNvdXJjZSB9fVxcXCIgY2xhc3M9XFxcInByb2ZpbGUtcGljdHVyZVxcXCIgc3RyZXRjaD1cXFwiYXNwZWN0Rml0XFxcIj48L0ltYWdlQ2FjaGVJdD5cXHJcXG5cXHQgIFxcdDxTdGFja0xheW91dD5cXHJcXG5cXHQgICAgICBcXHQ8TGFiZWwgdGV4dFdyYXA9XFxcInRydWVcXFwiIGlkPVxcXCJwb3N0LW5hbWVcXFwiIGNsYXNzPVxcXCJuYW1lLWxhYmVsXFxcIiB0ZXh0PVxcXCJ7eyB1c2VybmFtZSB9fVxcXCI+PC9MYWJlbD5cXHJcXG5cXHQgICAgICBcXHQ8TGFiZWwgdGV4dFdyYXA9XFxcInRydWVcXFwiIGlkPVxcXCJwb3N0LWluZm9cXFwiIGNsYXNzPVxcXCJpbmZvLWxhYmVsXFxcIiB0ZXh0PVxcXCJ7eyBpbmZvIH19XFxcIj48L0xhYmVsPlxcclxcblxcdCAgICA8L1N0YWNrTGF5b3V0PlxcclxcblxcdDwvU3RhY2tMYXlvdXQ+XFxyXFxuXFx0PFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJidG4tY29udGFpbmVyXFxcIiAjYnV0dG9uQ29udGFpbmVyIHJvdz1cXFwiMVxcXCI+XFxyXFxuXFx0XFx0PEJ1dHRvbiBjbGFzcz1cXFwiY29ubmVjdC1idG5cXFwiICh0YXApPVxcXCJvbkNvbm5lY3RUYXAoKVxcXCIgdGV4dD1cXFwie3sgYnV0dG9uVGV4dCB9fVxcXCI+PC9CdXR0b24+XFxyXFxuXFx0PC9TdGFja0xheW91dD5cXHJcXG5cXHQ8TWFwVmlldyAobWFwUmVhZHkpPVxcXCJvbk1hcFJlYWR5KCRldmVudClcXFwiIFtsYXRpdHVkZV09XFxcImxhdGl0dWRlXFxcIiBbbG9uZ2l0dWRlXT1cXFwibG9uZ2l0dWRlXFxcIiBjbGFzcz1cXFwibWFwLXZpZXdcXFwiIHJvdz1cXFwiMlxcXCIgI21hcFZpZXc+PC9NYXBWaWV3PlxcclxcbjwvR3JpZExheW91dD5cXHJcXG48QWN0aXZpdHlJbmRpY2F0b3IgI2FjdGl2aXR5SW5kaWNhdG9yIGJ1c3k9XFxcInRydWVcXFwiIHdpZHRoPVxcXCI0MFxcXCIgaGVpZ2h0PVxcXCI0MFxcXCIgY2xhc3M9XFxcImFjdGl2aXR5LWluZGljYXRvclxcXCI+PC9BY3Rpdml0eUluZGljYXRvcj5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q29udGFpbmVyUmVmLCBWaWV3UmVmLCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0ICogYXMgZmlyZWJhc2UgZnJvbSAnbmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZSc7XHJcbmltcG9ydCB7IEdvb2dsZU1hcHNTZXJ2aWNlIH0gZnJvbSAnLi4vZ29vZ2xlLW1hcHMuc2VydmljZSc7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBUcmFuc2ZlclNlcnZpY2UgfSBmcm9tICcuLi9kYXRhdHJhbnNmZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlXCI7XHJcbmltcG9ydCB7IEFjdGlvbkl0ZW0gfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2FjdGlvbi1iYXInO1xyXG5pbXBvcnQgeyBTdGFja0xheW91dCB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvbGF5b3V0cy9zdGFjay1sYXlvdXQnO1xyXG5pbXBvcnQgeyBHcmlkTGF5b3V0IH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9sYXlvdXRzL2dyaWQtbGF5b3V0JztcclxuaW1wb3J0IHsgQWN0aXZpdHlJbmRpY2F0b3IgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2FjdGl2aXR5LWluZGljYXRvcic7XHJcbmltcG9ydCB7cmVnaXN0ZXJFbGVtZW50fSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZWxlbWVudC1yZWdpc3RyeVwiO1xyXG5pbXBvcnQge2lzQW5kcm9pZCwgaXNJT1N9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtXCI7XHJcbmltcG9ydCB7IE1hcFZpZXcsIE1hcmtlciwgUG9zaXRpb24gfSBmcm9tICduYXRpdmVzY3JpcHQtZ29vZ2xlLW1hcHMtc2RrJztcclxuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCI7XHJcbmltcG9ydCB7IExvZ2luY2hlY2tTZXJ2aWNlIH0gZnJvbSAnLi4vbG9naW5jaGVjay5zZXJ2aWNlLnRucyc7XHJcbmltcG9ydCB7IENoYXRNZXNzYWdlIH0gZnJvbSAnLi4vbW9kZWxzL2NoYXQtbWVzc2FnZS5tb2RlbCc7XHJcblxyXG5yZWdpc3RlckVsZW1lbnQoXCJNYXBWaWV3XCIsICgpID0+IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtZ29vZ2xlLW1hcHMtc2RrXCIpLk1hcFZpZXcpO1xyXG5kZWNsYXJlIHZhciBjb206YW55O1xyXG5kZWNsYXJlIHZhciBHTVNDb29yZGluYXRlQm91bmRzOiBhbnk7XHJcbmRlY2xhcmUgdmFyIEdNU0NhbWVyYVVwZGF0ZTogYW55O1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtcG9zdGluZy1pbmZvJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcG9zdGluZy1pbmZvLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9wb3N0aW5nLWluZm8uY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQb3N0aW5nSW5mb0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIEBWaWV3Q2hpbGQoXCJkZWxldGVJdGVtXCIsIHsgc3RhdGljOiB0cnVlIH0pIGRlbGV0ZUl0ZW06IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZChcImJ1dHRvbkNvbnRhaW5lclwiLCB7IHN0YXRpYzogdHJ1ZSB9KSBidXR0b25Db250YWluZXI6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZChcImluZm9Db250YWluZXJcIiwgeyBzdGF0aWM6IHRydWUgfSkgaW5mb0NvbnRhaW5lcjogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKFwiYWN0aXZpdHlJbmRpY2F0b3JcIiwgeyBzdGF0aWM6IHRydWUgfSkgYWk6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZChcImxheW91dFwiLCB7IHN0YXRpYzogdHJ1ZSB9KSBsYXlvdXQ6IEVsZW1lbnRSZWY7XHJcbiAgbWFwVmlldzogTWFwVmlldztcclxuICBsYXRpdHVkZSA9ICAzNztcclxuICBsb25naXR1ZGUgPSAtMTIyO1xyXG5cclxuICBzdGFydExhdDtcclxuICBlbmRMYXQ7XHJcbiAgc3RhcnRMbmc7XHJcbiAgZW5kTG5nO1xyXG4gIGJvdW5kcztcclxuICBtYXBEYXRhO1xyXG4gIHVzZXJJZDtcclxuICBwcm9maWxlU291cmNlO1xyXG4gIGluZm87XHJcbiAgdXNlcm5hbWU7XHJcbiAgYnV0dG9uVGV4dDtcclxuICBjdXJyZW50VXNlck5hbWU7XHJcblxyXG4gIGNoYXRVc2VycyA9IFtdO1xyXG4gIGN1cnJlbnRVc2VyO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1hcFNlcnZpY2U6IEdvb2dsZU1hcHNTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSB0cmFuc2ZlclNlcnZpY2U6IFRyYW5zZmVyU2VydmljZSwgcHJpdmF0ZSBwYWdlOiBQYWdlLFxyXG4gICAgcHJpdmF0ZSBsb2dpbmNoZWNrU2VydmljZTogTG9naW5jaGVja1NlcnZpY2UpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICBcdHRoaXMubG9hZFZpZXdzKCk7XHJcbiAgfVxyXG5cclxuICBsb2FkVmlld3MoKSB7XHJcbiAgICBsZXQgYWN0aXZpdHlJbmRpY2F0b3IgPSA8QWN0aXZpdHlJbmRpY2F0b3I+IHRoaXMuYWkubmF0aXZlRWxlbWVudDtcclxuICAgIGxldCBpbmZvQ29udGFpbmVyID0gPFN0YWNrTGF5b3V0PiB0aGlzLmluZm9Db250YWluZXIubmF0aXZlRWxlbWVudDtcclxuICAgIGxldCBkZWxldGVCdXR0b24gPSA8QWN0aW9uSXRlbT4gdGhpcy5kZWxldGVJdGVtLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICBsZXQgY2hhdEJ1dHRvbiA9IDxTdGFja0xheW91dD4gdGhpcy5idXR0b25Db250YWluZXIubmF0aXZlRWxlbWVudDtcclxuXHJcbiAgICBpbmZvQ29udGFpbmVyLnZpc2liaWxpdHkgPSAnY29sbGFwc2UnO1xyXG4gICAgY2hhdEJ1dHRvbi52aXNpYmlsaXR5ID0gJ2NvbGxhcHNlJztcclxuICAgIHRoaXMudXNlcklkID0gdGhpcy5sb2dpbmNoZWNrU2VydmljZS5nZXRVc2VyKCk7XHJcbiAgICB0aGlzLm1hcERhdGEgPSB0aGlzLnRyYW5zZmVyU2VydmljZS5nZXREYXRhKCk7XHJcbiAgICBmaXJlYmFzZS5maXJlc3RvcmUuY29sbGVjdGlvbigndXNlcnMnKS5kb2ModGhpcy51c2VySWQpLmdldCgpLnRoZW4oKGRvYykgPT4ge1xyXG4gICAgICB0aGlzLmN1cnJlbnRVc2VyID0gZG9jLmRhdGEoKTtcclxuICAgICAgaWYoZG9jLmRhdGEoKS5jaGF0cy5pbmNsdWRlcyh0aGlzLm1hcERhdGEucG9zdEluZm8uaWQpKSB7XHJcbiAgICAgICAgdGhpcy5idXR0b25UZXh0ID0gJ1ZpZXcgY2hhdCc7XHJcbiAgICAgICAgYWN0aXZpdHlJbmRpY2F0b3IuYnVzeSA9IGZhbHNlO1xyXG4gICAgICAgIGluZm9Db250YWluZXIudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcclxuICAgICAgICBjaGF0QnV0dG9uLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgZmlyZWJhc2UuZmlyZXN0b3JlLmNvbGxlY3Rpb24oJ2NoYXRzJykuZG9jKHRoaXMubWFwRGF0YS5wb3N0SW5mby5kYXRhLnVpZCkuZ2V0KCkudGhlbigoZG9jKSA9PiB7XHJcbiAgICAgICAgICBpZighZG9jLmV4aXN0cyAmJiB0aGlzLnVzZXJJZCA9PT0gdGhpcy5tYXBEYXRhLnBvc3RJbmZvLmRhdGEudWlkKVxyXG4gICAgICAgICAgICBjaGF0QnV0dG9uLnZpc2liaWxpdHkgPSAnY29sbGFwc2UnO1xyXG4gICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICBjaGF0QnV0dG9uLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XHJcbiAgICAgICAgICBhY3Rpdml0eUluZGljYXRvci5idXN5ID0gZmFsc2U7XHJcbiAgICAgICAgICBpbmZvQ29udGFpbmVyLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLmJ1dHRvblRleHQgPSAnSm9pbiBjaGF0JztcclxuICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICBpZihpc0lPUykge1xyXG4gICAgICB0aGlzLmJvdW5kcyA9IEdNU0Nvb3JkaW5hdGVCb3VuZHMuYWxsb2MoKS5pbml0KCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHRoaXMuc3RhcnRMYXQgPSB0aGlzLm1hcERhdGEucG9zdEluZm8uZGF0YS5zdGFydExhdDtcclxuICAgIHRoaXMuZW5kTGF0ID0gdGhpcy5tYXBEYXRhLnBvc3RJbmZvLmRhdGEuZW5kTGF0O1xyXG4gICAgdGhpcy5zdGFydExuZyA9IHRoaXMubWFwRGF0YS5wb3N0SW5mby5kYXRhLnN0YXJ0TG5nO1xyXG4gICAgdGhpcy5lbmRMbmcgPSB0aGlzLm1hcERhdGEucG9zdEluZm8uZGF0YS5lbmRMbmc7XHJcbiAgICB0aGlzLmluZm8gPSB0aGlzLm1hcERhdGEucG9zdEl0ZW0uaW5mbztcclxuICAgIHRoaXMucHJvZmlsZVNvdXJjZSA9IHRoaXMubWFwRGF0YS5wb3N0SXRlbS5wcm9maWxlU291cmNlO1xyXG4gICAgdGhpcy51c2VybmFtZSA9IHRoaXMubWFwRGF0YS5wb3N0SXRlbS51c2VybmFtZTtcclxuXHJcbiAgICBcclxuICAgIGlmKHRoaXMudXNlcklkICE9PSB0aGlzLm1hcERhdGEucG9zdEluZm8uZGF0YS51aWQpIHtcclxuICAgICAgZGVsZXRlQnV0dG9uLnZpc2liaWxpdHkgPSAnY29sbGFwc2UnO1xyXG4gICAgfVxyXG5cclxuICAgIGZpcmViYXNlLmdldEN1cnJlbnRVc2VyKCkudGhlbigodXNlcikgPT4ge1xyXG4gICAgICB0aGlzLmN1cnJlbnRVc2VyTmFtZSA9IHVzZXIuZGlzcGxheU5hbWU7XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgb25NYXBSZWFkeShldmVudCkge1xyXG4gIFx0dGhpcy5tYXBWaWV3ID0gZXZlbnQub2JqZWN0O1xyXG5cclxuXHQvLyB0aGlzLmxhdGl0dWRlID0gKHRoaXMuc3RhcnRMYXQgKyB0aGlzLmVuZExhdCkgLyAyLjA7XHJcblx0Ly8gdGhpcy5sb25naXR1ZGUgPSAodGhpcy5zdGFydExuZyArIHRoaXMuZW5kTG5nKSAvIDIuMDtcclxuICBcdHRoaXMuYWRkTWFya2VyKHRoaXMuc3RhcnRMYXQsIHRoaXMuc3RhcnRMbmcsIHRoaXMubWFwRGF0YS5wb3N0SW5mby5kYXRhLnN0YXJ0QWRkcmVzcywgdGhpcy5tYXBEYXRhLnBvc3RJbmZvLmRhdGEuc3RhcnRGb3JtYXR0ZWQsIDApO1xyXG5cdCAgdGhpcy5hZGRNYXJrZXIodGhpcy5lbmRMYXQsIHRoaXMuZW5kTG5nLCB0aGlzLm1hcERhdGEucG9zdEluZm8uZGF0YS5lbmRBZGRyZXNzLCB0aGlzLm1hcERhdGEucG9zdEluZm8uZGF0YS5lbmRGb3JtYXR0ZWQsIDEpO1xyXG5cclxuICBcdGlmKGlzQW5kcm9pZCkge1xyXG4gICAgXHRcdHZhciBidWlsZGVyID0gbmV3IGNvbS5nb29nbGUuYW5kcm9pZC5nbXMubWFwcy5tb2RlbC5MYXRMbmdCb3VuZHMuQnVpbGRlcigpO1xyXG4gIFx0XHR0aGlzLm1hcFZpZXcuZmluZE1hcmtlcihmdW5jdGlvbiAobWFya2VyKSB7IGJ1aWxkZXIuaW5jbHVkZShtYXJrZXIuYW5kcm9pZC5nZXRQb3NpdGlvbigpKTsgcmV0dXJuIGZhbHNlfSk7XHJcbiAgXHRcdHZhciBib3VuZHMgPSBidWlsZGVyLmJ1aWxkKCk7XHJcbiAgXHRcdHZhciBjdSA9IGNvbS5nb29nbGUuYW5kcm9pZC5nbXMubWFwcy5DYW1lcmFVcGRhdGVGYWN0b3J5Lm5ld0xhdExuZ0JvdW5kcyhib3VuZHMsIDE1MCk7XHJcbiAgXHRcdHRoaXMubWFwVmlldy5nTWFwLmFuaW1hdGVDYW1lcmEoY3UpO1xyXG4gIFx0fVxyXG4gIFx0ZWxzZSBpZihpc0lPUykge1xyXG4gIFx0XHR2YXIgdXBkYXRlID0gR01TQ2FtZXJhVXBkYXRlLmZpdEJvdW5kc1dpdGhQYWRkaW5nKGJvdW5kcywgMTUwKTsgdGhpcy5tYXBWaWV3LmdNYXAubW92ZUNhbWVyYSh1cGRhdGUpO1xyXG4gIFx0fVxyXG5cclxuICB9XHJcblxyXG4gIGFkZE1hcmtlcihsYXQsIGxuZywgdGl0bGUsIHNuaXBwZXQsIGluZGV4KSB7XHJcbiAgXHR2YXIgbWFya2VyID0gbmV3IE1hcmtlcigpO1xyXG4gICAgbWFya2VyLnBvc2l0aW9uID0gUG9zaXRpb24ucG9zaXRpb25Gcm9tTGF0TG5nKGxhdCwgbG5nKTtcclxuICAgIG1hcmtlci50aXRsZSA9IHRpdGxlO1xyXG4gICAgbWFya2VyLnNuaXBwZXQgPSBzbmlwcGV0O1xyXG4gICAgbWFya2VyLnVzZXJEYXRhID0ge2luZGV4OiBpbmRleH07XHJcbiAgICB0aGlzLm1hcFZpZXcuYWRkTWFya2VyKG1hcmtlcik7XHJcbiAgICBpZihpc0lPUylcclxuICAgIFx0dGhpcy5ib3VuZHMgPSB0aGlzLmJvdW5kcy5pbmNsdWRpbmdDb29yZGluYXRlKG1hcmtlci5wb3NpdGlvbik7XHJcbiAgfVxyXG5cclxuICBvbk5hdkJ0blRhcCgpIHtcclxuICBcdHRoaXMucm91dGVyLm5hdmlnYXRlKFsnbmF2aWdhdGlvbiddLCB7Y2xlYXJIaXN0b3J5OiB0cnVlfSk7XHJcbiAgfVxyXG5cclxuICBkZWxldGVGaWxlcygpIHtcclxuICAgIGZpcmViYXNlLnN0b3JhZ2UuZGVsZXRlRmlsZSh7XHJcbiAgICAgIC8vIHRoZSBmdWxsIHBhdGggb2YgYW4gZXhpc3RpbmcgZmlsZSBpbiB5b3VyIEZpcmViYXNlIHN0b3JhZ2VcclxuICAgICAgcmVtb3RlRnVsbFBhdGg6ICdwb3N0aW5ncy8nICsgdGhpcy5tYXBEYXRhLnBvc3RJbmZvLmlkICsgJy9tYXBzL2xhcmdlX21hcC5wbmcnXHJcbiAgICB9KS50aGVuKFxyXG4gICAgICAgICgpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiRmlsZSBkZWxldGVkLlwiKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJGaWxlIGRlbGV0aW9uIEVycm9yOiBcIiArIGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICApO1xyXG4gICAgZmlyZWJhc2Uuc3RvcmFnZS5kZWxldGVGaWxlKHtcclxuICAgICAgLy8gdGhlIGZ1bGwgcGF0aCBvZiBhbiBleGlzdGluZyBmaWxlIGluIHlvdXIgRmlyZWJhc2Ugc3RvcmFnZVxyXG4gICAgICByZW1vdGVGdWxsUGF0aDogJ3Bvc3RpbmdzLycgKyB0aGlzLm1hcERhdGEucG9zdEluZm8uaWQgKyAnL21hcHMvc21hbGxfbWFwLnBuZydcclxuICAgIH0pLnRoZW4oXHJcbiAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJGaWxlIGRlbGV0ZWQuXCIpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkZpbGUgZGVsZXRpb24gRXJyb3I6IFwiICsgZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcm9tcHREZWxldGUoKSB7XHJcbiAgICBkaWFsb2dzLmNvbmZpcm0oe1xyXG4gICAgICAgIHRpdGxlOiBcIkNvbmZpcm0gZGVsZXRlXCIsXHJcbiAgICAgICAgbWVzc2FnZTogXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgcG9zdD9cIixcclxuICAgICAgICBva0J1dHRvblRleHQ6IFwiQ29uZmlybVwiLFxyXG4gICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiQ2FuY2VsXCIsXHJcbiAgICB9KS50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgLy8gcmVzdWx0IGFyZ3VtZW50IGlzIGJvb2xlYW5cclxuICAgICAgICBpZihyZXN1bHQpXHJcbiAgICAgICAgICB0aGlzLm9uRGVsZXRlKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG9uRGVsZXRlKCkge1xyXG4gICAgdmFyIHBvc3RpbmdEb2N1bWVudCA9IGZpcmViYXNlLmZpcmVzdG9yZS5jb2xsZWN0aW9uKCdwb3N0aW5ncycpLmRvYyh0aGlzLm1hcERhdGEucG9zdEluZm8uaWQpO1xyXG4gICAgdmFyIHVzZXJEb2N1bWVudCA9IGZpcmViYXNlLmZpcmVzdG9yZS5jb2xsZWN0aW9uKCd1c2VycycpLmRvYyh0aGlzLm1hcERhdGEucG9zdEluZm8uZGF0YS51aWQpO1xyXG4gICAgdmFyIGNoYXREb2N1bWVudCA9IGZpcmViYXNlLmZpcmVzdG9yZS5jb2xsZWN0aW9uKCdjaGF0cycpLmRvYyh0aGlzLm1hcERhdGEucG9zdEluZm8uaWQpO1xyXG4gICAgcG9zdGluZ0RvY3VtZW50LmRlbGV0ZSgpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICB1c2VyRG9jdW1lbnQuZ2V0KCkudGhlbigoZG9jKSA9PiB7XHJcbiAgICAgICAgbGV0IHVzZXJQb3N0cyA9IGRvYy5kYXRhKCkucG9zdHM7XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSB1c2VyUG9zdHMuaW5kZXhPZih0aGlzLm1hcERhdGEucG9zdEluZm8uaWQsIDApO1xyXG4gICAgICAgIGlmIChpbmRleCA+IC0xKSB7XHJcbiAgICAgICAgICAgdXNlclBvc3RzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB1c2VyRG9jdW1lbnQudXBkYXRlKHtcclxuICAgICAgICAgIHBvc3RzOiB1c2VyUG9zdHNcclxuICAgICAgICB9KS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgIC8vIGNoYXREb2N1bWVudC5nZXQoKS50aGVuKChkb2MpID0+IHtcclxuICAgICAgICAgIC8vICAgbGV0IGRhdGEgPSBkb2MuZGF0YSgpO1xyXG4gICAgICAgICAgLy8gICBpZihkYXRhKSB7XHJcbiAgICAgICAgICAvLyAgICAgZm9yKHZhciBpID0gMDsgaSA8IGRhdGEudXNlcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIC8vICAgICAgIC8vIHRoaXMuY2hhdFVzZXJzLnB1c2goZGF0YS51c2Vyc1tpXS51aWQpO1xyXG4gICAgICAgICAgLy8gICAgICAgZmlyZWJhc2UuZmlyZXN0b3JlLmNvbGxlY3Rpb24oJ3VzZXJzJykuZG9jKGRhdGEudXNlcnNbaV0udWlkKS5nZXQoKS50aGVuKChkb2MpID0+IHtcclxuICAgICAgICAgIC8vICAgICAgICAgY29uc3QgaWQgPSBkYXRhLnVzZXJzW2ldLnVpZDtcclxuICAgICAgICAgIC8vICAgICAgICAgbGV0IHVpZENoYXRzID0gZG9jLmRhdGEoKS5jaGF0cztcclxuICAgICAgICAgIC8vICAgICAgICAgbGV0IGluZGV4ID0gdWlkQ2hhdHMuaW5kZXhPZih0aGlzLm1hcERhdGEucG9zdEluZm8uaWQpO1xyXG4gICAgICAgICAgLy8gICAgICAgICBpZihpbmRleCA+IC0xKSB7XHJcbiAgICAgICAgICAvLyAgICAgICAgICAgdWlkQ2hhdHMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgIC8vICAgICAgICAgfVxyXG4gICAgICAgICAgLy8gICAgICAgICBmaXJlYmFzZS5maXJlc3RvcmUuY29sbGVjdGlvbigndXNlcnMnKS5kb2MoaWQpLnVwZGF0ZSh7XHJcbiAgICAgICAgICAvLyAgICAgICAgICAgY2hhdHM6IHVpZENoYXRzXHJcbiAgICAgICAgICAvLyAgICAgICAgIH0pXHJcbiAgICAgICAgICAvLyAgICAgICB9KVxyXG4gICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgIC8vICAgICBjaGF0RG9jdW1lbnQuZGVsZXRlKCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAvLyAgICAgICB0aGlzLmRlbGV0ZUZpbGVzKCk7XHJcbiAgICAgICAgICAvLyAgICAgICB0aGlzLm9uTmF2QnRuVGFwKCk7XHJcbiAgICAgICAgICAvLyAgICAgfSlcclxuICAgICAgICAgIC8vICAgfVxyXG4gICAgICAgICAgLy8gICBlbHNlIHtcclxuICAgICAgICAgIC8vICAgICB0aGlzLmRlbGV0ZUZpbGVzKCk7XHJcbiAgICAgICAgICAvLyAgICAgdGhpcy5vbk5hdkJ0blRhcCgpO1xyXG4gICAgICAgICAgLy8gICB9XHJcbiAgICAgICAgICAvLyB9KVxyXG4gICAgICAgICAgdGhpcy5kZWxldGVGaWxlcygpO1xyXG4gICAgICAgICAgdGhpcy5vbk5hdkJ0blRhcCgpO1xyXG4gICAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgfSlcclxuICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgIH0pXHJcbiAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgcmVtb3ZlQ2hhdChpbmRleCkge1xyXG4gICAgY29uc29sZS5sb2coaW5kZXgpO1xyXG4gICAgZmlyZWJhc2UuZmlyZXN0b3JlLmNvbGxlY3Rpb24oJ3VzZXJzJykuZG9jKHRoaXMuY2hhdFVzZXJzW2luZGV4XSkuZ2V0KCkudGhlbigoZG9jKSA9PiB7XHJcbiAgICAgIGxldCB1c2VyQ2hhdHMgPSBkb2MuZGF0YSgpLmNoYXRzO1xyXG4gICAgICBjb25zdCBpbmRleCA9IHVzZXJDaGF0cy5pbmRleE9mKHRoaXMubWFwRGF0YS5wb3N0SW5mby5pZCk7XHJcbiAgICAgIGlmIChpbmRleCA+IC0xKSB7XHJcbiAgICAgICAgIHVzZXJDaGF0cy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICB9XHJcbiAgICAgIGZpcmViYXNlLmZpcmVzdG9yZS5jb2xsZWN0aW9uKCd1c2VycycpLmRvYyh0aGlzLmNoYXRVc2Vyc1tpbmRleF0pLnVwZGF0ZSh7XHJcbiAgICAgICAgY2hhdHM6IHVzZXJDaGF0c1xyXG4gICAgICB9KS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBpZihpbmRleCA9PT0gdGhpcy5jaGF0VXNlcnNbaW5kZXhdLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgIHRoaXMuZGVsZXRlRmlsZXMoKTtcclxuICAgICAgICAgIHRoaXMub25OYXZCdG5UYXAoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgb25SZXBvcnQoKSB7XHJcblxyXG4gIH1cclxuXHJcbiAgb25Db25uZWN0VGFwKCkge1xyXG4gICAgbGV0IGdyaWRDb250YWluZXIgPSA8R3JpZExheW91dD4gdGhpcy5sYXlvdXQubmF0aXZlRWxlbWVudDtcclxuICAgIGxldCBhY3Rpdml0eUluZGljYXRvciA9IDxBY3Rpdml0eUluZGljYXRvcj4gdGhpcy5haS5uYXRpdmVFbGVtZW50O1xyXG5cclxuICAgIGdyaWRDb250YWluZXIudmlzaWJpbGl0eSA9ICdjb2xsYXBzZSc7XHJcbiAgICBhY3Rpdml0eUluZGljYXRvci5idXN5ID0gdHJ1ZTtcclxuXHJcbiAgICBpZih0aGlzLmJ1dHRvblRleHQgPT09ICdWaWV3IGNoYXQnKSB7XHJcbiAgICAgIHRoaXMudHJhbnNmZXJTZXJ2aWNlLnNldERhdGEodGhpcy5tYXBEYXRhLnBvc3RJbmZvLmlkKTtcclxuICAgICAgZ3JpZENvbnRhaW5lci52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xyXG4gICAgICBhY3Rpdml0eUluZGljYXRvci5idXN5ID0gZmFsc2U7XHJcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnY2hhdCddKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYodGhpcy5idXR0b25UZXh0ID09PSAnSm9pbiBjaGF0Jykge1xyXG4gICAgICBjb25zdCBjaGF0RG9jdW1lbnQgPSBmaXJlYmFzZS5maXJlc3RvcmUuY29sbGVjdGlvbignY2hhdHMnKS5kb2ModGhpcy5tYXBEYXRhLnBvc3RJbmZvLmlkKTtcclxuICAgICAgY29uc3QgdXNlckRvY3VtZW50ID0gZmlyZWJhc2UuZmlyZXN0b3JlLmNvbGxlY3Rpb24oJ3VzZXJzJykuZG9jKHRoaXMudXNlcklkKTtcclxuICAgICAgY2hhdERvY3VtZW50LmdldCgpLnRoZW4oKGRvYykgPT4ge1xyXG4gICAgICAgIGlmKGRvYy5leGlzdHMpIHtcclxuICAgICAgICAgIC8vY2hhdCBleGlzdHMsIHNvIGFkZCB1c2VyIHRvIHRoZSBjaGF0IHJvb20gYW5kIG5hdmlnYXRlIHRoZXJlXHJcbiAgICAgICAgICBsZXQgdG9rZW5zOiBbc3RyaW5nXSA9IGRvYy5kYXRhKCkudG9rZW5zO1xyXG4gICAgICAgICAgdmFyIHVzZXJzOiBbe3VpZDogc3RyaW5nLCBkaXNwbGF5TmFtZTogc3RyaW5nfV0gPSBkb2MuZGF0YSgpLnVzZXJzO1xyXG4gICAgICAgICAgdmFyIHVzZXJUb2tlbnM6IFtzdHJpbmddID0gdGhpcy5jdXJyZW50VXNlci50b2tlbnM7XHJcbiAgICAgICAgICB2YXIgbmV3VG9rZW5zID0gdG9rZW5zLmNvbmNhdCh1c2VyVG9rZW5zKTtcclxuICAgICAgICAgIHVzZXJzLnB1c2goe3VpZDogdGhpcy51c2VySWQsIGRpc3BsYXlOYW1lOiB0aGlzLmN1cnJlbnRVc2VyTmFtZX0pXHJcbiAgICAgICAgICBjaGF0RG9jdW1lbnQudXBkYXRlKHtcclxuICAgICAgICAgICAgdXNlcnM6IHVzZXJzLFxyXG4gICAgICAgICAgICB0b2tlbnM6IEFycmF5LmZyb20obmV3IFNldChuZXdUb2tlbnMpKVxyXG4gICAgICAgICAgfSkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIHVzZXJEb2N1bWVudC5nZXQoKS50aGVuKChkb2MpID0+IHtcclxuICAgICAgICAgICAgICB2YXIgdXNlckNoYXRzID0gZG9jLmRhdGEoKS5jaGF0cztcclxuICAgICAgICAgICAgICB1c2VyQ2hhdHMucHVzaCh0aGlzLm1hcERhdGEucG9zdEluZm8uaWQpO1xyXG4gICAgICAgICAgICAgIHVzZXJEb2N1bWVudC51cGRhdGUoe1xyXG4gICAgICAgICAgICAgICAgY2hhdHM6IHVzZXJDaGF0c1xyXG4gICAgICAgICAgICAgIH0pLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy9maW5hbGx5IGFmdGVyIGV2ZXJ5dGhpbmcgZWxzZSBoYXMgdXBkYXRlZCwgc2VuZCB1c2VyIHRvIGNoYXQgY29tcG9uZW50XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRyYW5zZmVyU2VydmljZS5zZXREYXRhKHRoaXMubWFwRGF0YS5wb3N0SW5mby5pZCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ1dHRvblRleHQgPSAnVmlldyBjaGF0JztcclxuICAgICAgICAgICAgICAgIGdyaWRDb250YWluZXIudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcclxuICAgICAgICAgICAgICAgIGFjdGl2aXR5SW5kaWNhdG9yLmJ1c3kgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnY2hhdCddKTtcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAvL2NoYXQgZG9lcyBub3QgZXhpc3QsIHNvIGNyZWF0ZSBhbmQgYWRkIGJvdGggcG9zdCB1c2VyIGFuZCBjdXJyZW50IHVzZXJcclxuICAgICAgICAgIGZpcmViYXNlLmZpcmVzdG9yZS5jb2xsZWN0aW9uKCdjaGF0cycpLmRvYyh0aGlzLm1hcERhdGEucG9zdEluZm8uaWQpLnNldCh7XHJcbiAgICAgICAgICAgIHVzZXJzOiBbe3VpZDogdGhpcy5tYXBEYXRhLnBvc3RJbmZvLmRhdGEudWlkLCBkaXNwbGF5TmFtZTogdGhpcy5tYXBEYXRhLnBvc3RJdGVtLnVzZXJuYW1lfSwge3VpZDogdGhpcy51c2VySWQsIGRpc3BsYXlOYW1lOiB0aGlzLmN1cnJlbnRVc2VyTmFtZX1dLFxyXG4gICAgICAgICAgICBjaGF0czogW10sXHJcbiAgICAgICAgICAgIGV4cGlyZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgfSkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIGZpcmViYXNlLmZpcmVzdG9yZS5jb2xsZWN0aW9uKCd1c2VycycpLmRvYyh0aGlzLm1hcERhdGEucG9zdEluZm8uZGF0YS51aWQpLmdldCgpLnRoZW4oKGRvYykgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnN0IHVzZXJUb2tlbnMgPSB0aGlzLmN1cnJlbnRVc2VyLnRva2VucztcclxuICAgICAgICAgICAgICBjb25zdCBvdGhlclVzZXJUb2tlbnMgPSBkb2MuZGF0YSgpLnRva2VucztcclxuICAgICAgICAgICAgICBjb25zdCBuZXdUb2tlbnMgPSB1c2VyVG9rZW5zLmNvbmNhdChvdGhlclVzZXJUb2tlbnMpO1xyXG4gICAgICAgICAgICAgIGZpcmViYXNlLmZpcmVzdG9yZS5jb2xsZWN0aW9uKCdjaGF0cycpLmRvYyh0aGlzLm1hcERhdGEucG9zdEluZm8uaWQpLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICB0b2tlbnM6IEFycmF5LmZyb20obmV3IFNldChuZXdUb2tlbnMpKVxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgdmFyIHVzZXJDaGF0cyA9IGRvYy5kYXRhKCkuY2hhdHM7XHJcbiAgICAgICAgICAgICAgdXNlckNoYXRzLnB1c2godGhpcy5tYXBEYXRhLnBvc3RJbmZvLmlkKTtcclxuICAgICAgICAgICAgICBmaXJlYmFzZS5maXJlc3RvcmUuY29sbGVjdGlvbigndXNlcnMnKS5kb2ModGhpcy5tYXBEYXRhLnBvc3RJbmZvLmRhdGEudWlkKS51cGRhdGUoe1xyXG4gICAgICAgICAgICAgICAgY2hhdHM6IHVzZXJDaGF0c1xyXG4gICAgICAgICAgICAgIH0pLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgdXNlckRvY3VtZW50LmdldCgpLnRoZW4oKGRvYykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICB2YXIgdXNlckNoYXRzID0gZG9jLmRhdGEoKS5jaGF0cztcclxuICAgICAgICAgICAgICAgICAgdXNlckNoYXRzLnB1c2godGhpcy5tYXBEYXRhLnBvc3RJbmZvLmlkKTtcclxuICAgICAgICAgICAgICAgICAgdXNlckRvY3VtZW50LnVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hhdHM6IHVzZXJDaGF0c1xyXG4gICAgICAgICAgICAgICAgICB9KS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvL2ZpbmFsbHkgYWZ0ZXIgZXZlcnl0aGluZyBlbHNlIGhhcyB1cGRhdGVkLCBzZW5kIHVzZXIgdG8gY2hhdCBjb21wb25lbnRcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRyYW5zZmVyU2VydmljZS5zZXREYXRhKHRoaXMubWFwRGF0YS5wb3N0SW5mby5pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5idXR0b25UZXh0ID0gJ1ZpZXcgY2hhdCc7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JpZENvbnRhaW5lci52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xyXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2aXR5SW5kaWNhdG9yLmJ1c3kgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ2NoYXQnXSk7XHJcbiAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUG9zdGluZ1NlcnZpY2Uge1xyXG5cdC8qKlxyXG5cdCogVG8gZ2V0IHRoZSBzZXJ2ZXIgdG8gcmVjb2duaXplIHlvdXIgbW9iaWxlIGRldmljZSwgZmluZCB5b3VyIGlwdjQgYWRkcmVzcyBieSBydW5uaW5nIGlwY29uZmlnIGluIGEgdGVybWluYWwgd2luZG93XHJcblx0KiBhbmQgYWRkIGEgbmV3IHVyaSBsaW5lIHdpdGggeW91ciBpcHY0IGFkZHJlc3MuIERvIHRoaXMgZm9yIG5ldHdvcmtfc2VjdXJpdHlfY29uZmlnLnhtbCwgdXNlci5zZXJ2aWNlcy50bnMudHMsIGFuZFxyXG5cdCogcG9zdGluZy5zZXJ2aWNlLnRucy50cy5cclxuXHQqL1xyXG5cdC8vIEFkYW0ncyB0ZXN0aW5nIHNlcnZlclxyXG5cdC8vIHVyaSA9ICdodHRwOi8vMTkyLjE2OC4xLjc6NDAwMCc7XHJcblx0Ly8gdXJpID0gJ2h0dHA6Ly8xMC41LjExLjI1OjQwMDAnO1xyXG5cdC8vIFBoaWxsaXAncyBUZXN0aW5nIHNlcnZlclxyXG5cdHVyaSA9ICdodHRwOi8vMTkyLjE2OC4xLjM6NDAwMCc7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7IH1cclxuXHJcbiAgZ2V0UG9zdGluZ3MoKSB7XHJcbiAgXHRyZXR1cm4gdGhpcy5odHRwLmdldChgJHt0aGlzLnVyaX0vcG9zdGluZ3NgKTtcclxuICB9XHJcblxyXG4gIGdldFBvc3RpbmdieUlkKGlkKSB7XHJcbiAgXHRyZXR1cm4gdGhpcy5odHRwLmdldChgJHt0aGlzLnVyaX0vcG9zdGluZ3MvJHtpZH1gKTtcclxuICB9XHJcblxyXG4gIGFkZFBvc3RpbmcodXNlciwgc3RhcnRhZHIsIGVuZGFkciwgZGF0ZSwgY29zdCwgY2FwYWNpdHksIGNvbW1lbnRzKSB7XHJcblxyXG4gICAgLy9jb25zdCBwcmljZSA9IHJlcSguLi8uLi9iYWNrZW5kL2RhdGEvcHJpY2luZykoe3N0YXJ0OiBzdGFydGFkciwgZW5kOiBlbmRhZHJ9KTtcclxuXHJcbiAgXHRjb25zdCBwb3N0aW5nID0ge1xyXG4gIFx0XHR1c2VyIDogdXNlcixcclxuICBcdFx0c3RhcnRhZHIgOiBzdGFydGFkcixcclxuICBcdFx0ZW5kYWRyIDogZW5kYWRyLFxyXG4gIFx0XHRkYXRlIDogZGF0ZSxcclxuICBcdFx0Y29zdCA6IGNvc3QsXHJcbiAgXHRcdGNhcGFjaXR5IDogY2FwYWNpdHksXHJcbiAgXHRcdGNvbW1lbnRzIDogY29tbWVudHNcclxuICBcdH07XHJcbiAgXHRyZXR1cm4gdGhpcy5odHRwLnBvc3QoYCR7dGhpcy51cml9L3Bvc3RpbmdzL2FkZC9gLCBwb3N0aW5nKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVBvc3RpbmcoaWQsIHVzZXIsIHN0YXJ0YWRyLCBlbmRhZHIsIGRhdGUsIGNvc3QsIGNhcGFjaXR5LCBjb21tZW50cykge1xyXG4gICAgLy9jb25zdCBwcmljZSA9IHJlcSguLi8uLi9iYWNrZW5kL2RhdGEvcHJpY2luZykoe3N0YXJ0OiBzdGFydGFkciwgZW5kOiBlbmRhZHJ9KTtcclxuICBcdGNvbnN0IHBvc3RpbmcgPSB7XHJcbiAgXHRcdHVzZXIgOiB1c2VyLFxyXG4gIFx0XHRzdGFydGFkciA6IHN0YXJ0YWRyLFxyXG4gIFx0XHRlbmRhZHIgOiBlbmRhZHIsXHJcbiAgXHRcdGRhdGUgOiBkYXRlLFxyXG4gIFx0XHRjb3N0IDogY29zdCxcclxuICBcdFx0Y2FwYWNpdHkgOiBjYXBhY2l0eSxcclxuICBcdFx0Y29tbWVudHMgOiBjb21tZW50c1xyXG4gIFx0fTtcclxuICBcdHJldHVybiB0aGlzLmh0dHAucG9zdChgJHt0aGlzLnVyaX0vcG9zdGluZ3MvdXBkYXRlLyR7aWR9YCwgcG9zdGluZyk7XHJcbiAgfVxyXG5cclxuICBkZWxldGVQb3N0aW5nKGlkKSB7XHJcbiAgXHRyZXR1cm4gdGhpcy5odHRwLmdldChgJHt0aGlzLnVyaX0vcG9zdGluZ3MvZGVsZXRlLyR7aWR9YCk7XHJcbiAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQb3N0aW5nU2VydmljZSB7XHJcblx0LyoqXHJcblx0KiBUbyBnZXQgdGhlIHNlcnZlciB0byByZWNvZ25pemUgeW91ciBtb2JpbGUgZGV2aWNlLCBmaW5kIHlvdXIgaXB2NCBhZGRyZXNzIGJ5IHJ1bm5pbmcgaXBjb25maWcgaW4gYSB0ZXJtaW5hbCB3aW5kb3dcclxuXHQqIGFuZCBhZGQgYSBuZXcgdXJpIGxpbmUgd2l0aCB5b3VyIGlwdjQgYWRkcmVzcy4gRG8gdGhpcyBmb3IgbmV0d29ya19zZWN1cml0eV9jb25maWcueG1sLCB1c2VyLnNlcnZpY2VzLnRucy50cywgYW5kXHJcblx0KiBwb3N0aW5nLnNlcnZpY2UudG5zLnRzLlxyXG5cdCovXHJcblx0Ly8gQWRhbSdzIHRlc3Rpbmcgc2VydmVyXHJcblx0Ly8gdXJpID0gJ2h0dHA6Ly8xOTIuMTY4LjEuNzo0MDAwJztcclxuXHQvLyB1cmkgPSAnaHR0cDovLzEwLjUuMTEuMjU6NDAwMCc7XHJcblx0Ly8gUGhpbGxpcCdzIFRlc3Rpbmcgc2VydmVyXHJcblx0dXJpID0gJ2h0dHA6Ly8xOTIuMTY4LjEuMzo0MDAwJztcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHsgfVxyXG5cclxuICBnZXRQb3N0aW5ncygpIHtcclxuICBcdHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke3RoaXMudXJpfS9wb3N0aW5nc2ApO1xyXG4gIH1cclxuXHJcbiAgZ2V0UG9zdGluZ2J5SWQoaWQpIHtcclxuICBcdHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke3RoaXMudXJpfS9wb3N0aW5ncy8ke2lkfWApO1xyXG4gIH1cclxuXHJcbiAgYWRkUG9zdGluZyh1c2VyLCBzdGFydGFkciwgZW5kYWRyLCBkYXRlLCBjb3N0LCBjYXBhY2l0eSwgY29tbWVudHMpIHtcclxuXHJcbiAgICAvL2NvbnN0IHByaWNlID0gcmVxKC4uLy4uL2JhY2tlbmQvZGF0YS9wcmljaW5nKSh7c3RhcnQ6IHN0YXJ0YWRyLCBlbmQ6IGVuZGFkcn0pO1xyXG5cclxuICBcdGNvbnN0IHBvc3RpbmcgPSB7XHJcbiAgXHRcdHVzZXIgOiB1c2VyLFxyXG4gIFx0XHRzdGFydGFkciA6IHN0YXJ0YWRyLFxyXG4gIFx0XHRlbmRhZHIgOiBlbmRhZHIsXHJcbiAgXHRcdGRhdGUgOiBkYXRlLFxyXG4gIFx0XHRjb3N0IDogY29zdCxcclxuICBcdFx0Y2FwYWNpdHkgOiBjYXBhY2l0eSxcclxuICBcdFx0Y29tbWVudHMgOiBjb21tZW50c1xyXG4gIFx0fTtcclxuICBcdHJldHVybiB0aGlzLmh0dHAucG9zdChgJHt0aGlzLnVyaX0vcG9zdGluZ3MvYWRkL2AsIHBvc3RpbmcpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlUG9zdGluZyhpZCwgdXNlciwgc3RhcnRhZHIsIGVuZGFkciwgZGF0ZSwgY29zdCwgY2FwYWNpdHksIGNvbW1lbnRzKSB7XHJcbiAgICAvL2NvbnN0IHByaWNlID0gcmVxKC4uLy4uL2JhY2tlbmQvZGF0YS9wcmljaW5nKSh7c3RhcnQ6IHN0YXJ0YWRyLCBlbmQ6IGVuZGFkcn0pO1xyXG4gIFx0Y29uc3QgcG9zdGluZyA9IHtcclxuICBcdFx0dXNlciA6IHVzZXIsXHJcbiAgXHRcdHN0YXJ0YWRyIDogc3RhcnRhZHIsXHJcbiAgXHRcdGVuZGFkciA6IGVuZGFkcixcclxuICBcdFx0ZGF0ZSA6IGRhdGUsXHJcbiAgXHRcdGNvc3QgOiBjb3N0LFxyXG4gIFx0XHRjYXBhY2l0eSA6IGNhcGFjaXR5LFxyXG4gIFx0XHRjb21tZW50cyA6IGNvbW1lbnRzXHJcbiAgXHR9O1xyXG4gIFx0cmV0dXJuIHRoaXMuaHR0cC5wb3N0KGAke3RoaXMudXJpfS9wb3N0aW5ncy91cGRhdGUvJHtpZH1gLCBwb3N0aW5nKTtcclxuICB9XHJcblxyXG4gIGRlbGV0ZVBvc3RpbmcoaWQpIHtcclxuICBcdHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke3RoaXMudXJpfS9wb3N0aW5ncy9kZWxldGUvJHtpZH1gKTtcclxuICB9XHJcblxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCIvKlxcclxcbkFkZCB5b3VyIE5hdGl2ZVNjcmlwdCBzcGVjaWZpYyBzdHlsZXMgaGVyZS5cXHJcXG5UbyBsZWFybiBtb3JlIGFib3V0IHN0eWxpbmcgaW4gTmF0aXZlU2NyaXB0IHNlZTpcXHJcXG5odHRwczovL2RvY3MubmF0aXZlc2NyaXB0Lm9yZy9hbmd1bGFyL3VpL3N0eWxpbmdcXHJcXG4qL1xcclxcblxcclxcbkxhYmVsIHtcXHJcXG5cXHR0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbn1cXHJcXG5cXHJcXG4ubmFtZS1sYWJlbCB7XFxyXFxuXFx0bWFyZ2luLXRvcDogMTY7XFxyXFxuXFx0bWFyZ2luLWxlZnQ6IDI0O1xcclxcblxcdGNvbG9yOiBibGFjaztcXHJcXG5cXHRmb250LXdlaWdodDogNzAwO1xcclxcblxcdGZvbnQtc2l6ZTogMTg7XFxyXFxufVxcclxcblxcclxcbi5pbmZvLWxhYmVsIHtcXHJcXG5cXHRtYXJnaW4tdG9wOiAxMjtcXHJcXG5cXHRtYXJnaW4tbGVmdDogMjQ7XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTogMTY7XFxyXFxuXFx0Y29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9zdCB7XFxyXFxuXFx0Ym9yZGVyLWJvdHRvbS13aWR0aDogMTtcXHJcXG5cXHRib3JkZXItY29sb3I6ICNmMWYxZjE7XFxyXFxufVxcclxcblxcclxcbi5wb3N0OmhpZ2hsaWdodGVkIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9zdGluZy1tYXAge1xcclxcblxcdG1hcmdpbi1ib3R0b206IDE2O1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDEwO1xcclxcblxcdC8qYWxpZ24tY29udGVudDogY2VudGVyOyovXFxyXFxufVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxTdGFja0xheW91dCBjbGFzcz1cXFwicG9zdFxcXCI+XFxyXFxuICA8TGFiZWwgdGV4dFdyYXA9XFxcInRydWVcXFwiIGlkPVxcXCJwb3N0LW5hbWVcXFwiIGNsYXNzPVxcXCJuYW1lLWxhYmVsXFxcIj48L0xhYmVsPlxcclxcbiAgPExhYmVsIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiBpZD1cXFwicG9zdC1pbmZvXFxcIiBjbGFzcz1cXFwiaW5mby1sYWJlbFxcXCI+PC9MYWJlbD5cXHJcXG4gIDxJbWFnZSBzcmM9XFxcIn4vaW1nL2N2aWxsZS1tYXAucG5nXFxcIiBzdHJldGNoPVxcXCJub25lXFxcIiBoZWlnaHQ9XFxcIjIyMFxcXCIgd2lkdGg9XFxcIjMwMFxcXCIgY2xhc3M9XFxcInBvc3RpbmctbWFwXFxcIj48L0ltYWdlPlxcclxcbjwvU3RhY2tMYXlvdXQ+XFxyXFxuXFxyXFxuPCEtLVxcclxcbk9yaWdpbmFsIFdlYiB0ZW1wbGF0ZTpcXHJcXG5cXHJcXG5cXHJcXG4tLT5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFRyYW5zZmVyU2VydmljZSB9IGZyb20gJy4uL2RhdGF0cmFuc2Zlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvcGFnZSc7XHJcbmltcG9ydCB7IExhYmVsIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9sYWJlbCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1wb3N0aW5nJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcG9zdGluZy5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vcG9zdGluZy5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFBvc3RpbmdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIGlkO1xyXG4gIGJ1dHRvblR5cGU7XHJcblxyXG4gIGluZm8gPSB0aGlzLnRyYW5zZmVyU2VydmljZS5nZXREYXRhKClbMF07XHJcblxyXG4gIGluZm9UZXh0ID0gXCJMZWF2aW5nIFwiICsgdGhpcy5pbmZvLmRhdGUgKyBcIiBmcm9tIFwiICsgdGhpcy5pbmZvLnN0YXJ0YWRyICsgXCIgdG8gXCIgKyB0aGlzLmluZm8uZW5kYWRyICsgXCIgZm9yIFwiICsgdGhpcy5pbmZvLmNvc3Q7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0cmFuc2ZlclNlcnZpY2U6IFRyYW5zZmVyU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBwYWdlOiBQYWdlKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICBcdHRoaXMuaWQgPSB0aGlzLmluZm8uaWQ7XHJcbiAgXHR0aGlzLmJ1dHRvblR5cGUgPSB0aGlzLmluZm8uYnV0dG9uVHlwZTtcclxuICAgIGNvbnN0IG5hbWVfbGFiZWwgPSA8TGFiZWw+dGhpcy5wYWdlLmdldFZpZXdCeUlkKCdwb3N0LW5hbWUnKTtcclxuICAgIG5hbWVfbGFiZWwudGV4dCA9IHRoaXMuaW5mby51c2VyO1xyXG4gICAgbmFtZV9sYWJlbC5pZCA9ICdwb3N0LW5hbWUnICsgdGhpcy5pbmZvLmluZGV4O1xyXG4gICAgY29uc3QgaW5mb19sYWJlbCA9IDxMYWJlbD50aGlzLnBhZ2UuZ2V0Vmlld0J5SWQoJ3Bvc3QtaW5mbycpO1xyXG4gICAgaWYodGhpcy5pbmZvLmNhcGFjaXR5ID4gMClcclxuICAgICAgaW5mb19sYWJlbC50ZXh0ID0gXCJPZmZlcmluZyByaWRlIGxlYXZpbmcgXCIgKyB0aGlzLmluZm8uZGF0ZSArIFwiIGZyb20gXCIgKyB0aGlzLmluZm8uc3RhcnRhZHIgKyBcIiB0byBcIiArIHRoaXMuaW5mby5lbmRhZHIgKyBcIiBmb3IgXCIgKyB0aGlzLmluZm8uY29zdDtcclxuICAgIGVsc2VcclxuICAgICAgaW5mb19sYWJlbC50ZXh0ID0gXCJSZXF1ZXN0aW5nIHJpZGUgbGVhdmluZyBcIiArIHRoaXMuaW5mby5kYXRlICsgXCIgZnJvbSBcIiArIHRoaXMuaW5mby5zdGFydGFkciArIFwiIHRvIFwiICsgdGhpcy5pbmZvLmVuZGFkcjtcclxuICAgIGluZm9fbGFiZWwuaWQgPSAncG9zdC1pbmZvJyArIHRoaXMuaW5mby5pbmRleDtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwiY3JlYXRlZCBwb3N0XCIpO1xyXG4gIFx0Ly8gdGhpcy5jcmVhdGUoKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZSgpIHtcclxuICBcdGNvbnNvbGUubG9nKHRoaXMuaW5mbyk7XHJcbiAgXHRjb25zb2xlLmxvZyh0aGlzLmluZm8uaW5kZXgpO1xyXG5cdCAgdmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBkaXYuaWQgPSBcImZlZWRcIisgdGhpcy5pbmZvLmluZGV4O1xyXG4gICAgZGl2LmNsYXNzTmFtZSA9IFwicG9zdGluZy1ibG9ja1wiO1xyXG4gICAgZGl2LnN0eWxlLmRpc3BsYXkgPSBcImFsbFwiO1xyXG4gICAgZGl2LnN0eWxlLm1hcmdpbiA9IFwiYXV0b1wiO1xyXG4gICAgZGl2LnN0eWxlLm1hcmdpblRvcCA9IFwiMC41ZW1cIjtcclxuICAgIGRpdi5zdHlsZS5tYXJnaW5Cb3R0b20gPSBcIjAuNWVtXCI7XHJcblxyXG4gICAgLy9kaXYuc3R5bGUucGFkZGluZ0xlZnQgPSBcIjIwJVwiO1xyXG4gICAgLy9kaXYuc3R5bGUud2lkdGggPSBcIjQwJVwiO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JpZ2ZlZWQnKS5hcHBlbmRDaGlsZChkaXYpO1xyXG4gICAgXHJcbiAgICB2YXIgZGl2dGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmVlZCcrIHRoaXMuaW5mby5pbmRleCkuYXBwZW5kQ2hpbGQoZGl2dGV4dCk7XHJcbiAgICBkaXZ0ZXh0LmlkID0gXCJ0ZXh0XCIrIHRoaXMuaW5mby5pbmRleDtcclxuICAgIFxyXG4gICAgdmFyIGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJJTUdcIik7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dCcrIHRoaXMuaW5mby5pbmRleCkuYXBwZW5kQ2hpbGQoaW1nKTtcclxuICAgIGltZy5pZCA9IFwicGZwXCIrIHRoaXMuaW5mby5pbmRleDtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGZwXCIpO1xyXG4gICAgaW1nLmNsYXNzTmFtZSA9IFwicGZwXCI7XHJcbiAgICAoaW1nIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnNyYyA9IFwic3JjL2ltZy9zYW1wbGVfcHJvZmlsZS5qcGdcIjtcclxuICAgIFxyXG4gICAgdmFyIGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0JysgdGhpcy5pbmZvLmluZGV4KS5hcHBlbmRDaGlsZChoZWFkZXIpO1xyXG4gICAgaGVhZGVyLmlkID0gXCJuYW1lXCIrIHRoaXMuaW5mby5pbmRleDtcclxuICAgIGhlYWRlci5pbm5lckhUTUwgPSB0aGlzLmluZm8udXNlcjtcclxuICAgIGhlYWRlci5jbGFzc05hbWUgPSBcImhlYWRlclwiO1xyXG4gICAgXHJcbiAgICB2YXIgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0JysgdGhpcy5pbmZvLmluZGV4KS5hcHBlbmRDaGlsZChwKTtcclxuICAgIHAuaWQgPSBcImRldGFpbHNcIisgdGhpcy5pbmZvLmluZGV4O1xyXG4gICAgcC5pbm5lckhUTUwgPSBcIkxlYXZpbmcgXCIgKyB0aGlzLmluZm8uZGF0ZSArIFwiIGZyb20gXCIgKyB0aGlzLmluZm8uc3RhcnRhZHIgKyBcIiB0byBcIiArIHRoaXMuaW5mby5lbmRhZHIgKyBcIiBmb3IgXCIgKyB0aGlzLmluZm8uY29zdDtcclxuICAgIHAuY2xhc3NOYW1lID0gXCJkZXRhaWxzXCI7XHJcbiAgICBcclxuICAgIHZhciBtYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiSU1HXCIpXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dCcrIHRoaXMuaW5mby5pbmRleCkuYXBwZW5kQ2hpbGQobWFwKTtcclxuICAgIG1hcC5pZCA9IFwibWFwXCIrIHRoaXMuaW5mby5pbmRleDtcclxuICAgIG1hcC5jbGFzc05hbWUgPSBcImRlc3RpbmF0aW9uXCI7XHJcbiAgICAobWFwIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnNyYyA9IFwic3JjL2ltZy92aXJnaW5pYV9tYXAuanBnXCI7XHJcbiAgICBcclxuICAgIHZhciBjb25uZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0JysgdGhpcy5pbmZvLmluZGV4KS5hcHBlbmRDaGlsZChjb25uZWN0KTtcclxuICAgIGNvbm5lY3QuaWQgPSB0aGlzLmJ1dHRvblR5cGUgKyB0aGlzLmluZm8uaW5kZXg7XHJcbiAgICBjb25uZWN0LmNsYXNzTmFtZSA9IFwicG9zdGluZy1idXR0b25cIjtcclxuICAgIGNvbm5lY3QuaW5uZXJIVE1MID0gdGhpcy5pbmZvLmJ1dHRvblR5cGU7XHJcbiAgICBjb25uZWN0LnN0eWxlLm1hcmdpblJpZ2h0ID0gXCIxZW1cIjtcclxuICAgIGNvbm5lY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlOkV2ZW50KSA9PiB0aGlzLmNsaWNrZWQodGhpcy5pbmZvLmJ1dHRvblR5cGUpKTtcclxuICB9XHJcbiAgY2xpY2tlZChidXR0b25UeXBlKXtcclxuICBcdHRoaXMudHJhbnNmZXJTZXJ2aWNlLnNldERhdGEodGhpcy5pbmZvKTtcclxuICBcdGlmKGJ1dHRvblR5cGUgPT0gXCJDb25uZWN0XCIpXHJcblx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKCcvY29ubmVjdCcpO1xyXG5cdGVsc2VcclxuXHRcdHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoJy91cGRhdGUnKTtcclxuICB9XHJcblxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCIvKiBBZGQgbW9iaWxlIHN0eWxlcyBmb3IgdGhlIGNvbXBvbmVudCBoZXJlLiAgKi9cXHJcXG4uaGVhZGVye1xcclxcbiAgICBtYXJnaW4tdG9wOiA1MDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDIyO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDIyO1xcclxcblxcdGNvbG9yOiBibGFjaztcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgZm9udC1zaXplOiAyNDtcXHJcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG59XFxyXFxuLnN1Ym1pdC1idG57XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6I2FjMDBlNjtcXHJcXG4gICAgd2lkdGg6IDc1JTtcXHJcXG4gICAgaGVpZ2h0OiAxNzBweDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJTZWdvZSBVSVxcXCIsQXJpYWwsc2Fucy1zZXJpZjtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBtYXJnaW4tdG9wOiAyMDtcXHJcXG59XFxyXFxuLnRleHQtZmllbGR7XFxyXFxuICAgIHdpZHRoOiA4NSU7XFxyXFxuICAgIG1hcmdpbi10b3A6IDIwO1xcclxcbiAgICBjb2xvcjojNjk2OTY5XFxyXFxufVxcclxcblxcclxcbi5jbG9zZS1idXR0b24tY29udGFpbmVyIHtcXHJcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0bGVmdDogMDtcXHJcXG59XFxyXFxuLmNsb3NlIHtcXHJcXG5cXHRtYXJnaW46IDEwO1xcclxcblxcdGZvbnQtc2l6ZTogNDA7XFxyXFxuXFx0d2lkdGg6IDQ4O1xcclxcbiAgICBoZWlnaHQ6IDQ4O1xcclxcbiAgICBjb2xvcjogYmxhY2tcXHJcXG59XFxyXFxuXFxyXFxuLmVycm9yLW1lc3NhZ2Uge1xcclxcblxcdGNvbG9yOiByZWQ7XFxyXFxuXFx0Zm9udC1zaXplOiAxNjtcXHJcXG5cXHR2aXNpYmlsaXR5OiBjb2xsYXBzZTtcXHJcXG59XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPFN0YWNrbGF5b3V0PlxcclxcbiAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImNsb3NlLWJ1dHRvbi1jb250YWluZXJcXFwiIG9yaWVudGF0aW9uPVxcXCJob3Jpem9udGFsXFxcIj5cXHJcXG4gICAgICAgIDxMYWJlbCB0ZXh0PVxcXCImdGltZXM7XFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiICh0YXApPVxcXCJjbG9zZSgnY2FuY2VsJylcXFwiPjwvTGFiZWw+XFxyXFxuICAgIDwvU3RhY2tMYXlvdXQ+XFxyXFxuICAgIDxMYWJlbCBjbGFzcz1cXFwiaGVhZGVyXFxcIiB0ZXh0PVxcXCJQbGVhc2UgcmUtZW50ZXIgeW91ciBwYXNzd29yZFxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiPjwvTGFiZWw+XFxyXFxuICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiaW5wdXQtZmllbGRcXFwiPlxcclxcbiAgICAgICAgPFRleHRGaWVsZCAjdmFsIFsobmdNb2RlbCldPVxcXCJwYXNzd29yZFxcXCIgc2VjdXJlPVxcXCJ0cnVlXFxcIiBhdXRvY29ycmVjdD1cXFwiZmFsc2VcXFwiIHJldHVybktleVR5cGU9XFxcImRvbmVcXFwiIGNsYXNzPVxcXCJ0ZXh0LWZpZWxkXFxcIj48L1RleHRGaWVsZD5cXHJcXG4gICAgPC9TdGFja0xheW91dD5cXHJcXG4gICAgPExhYmVsIHRleHQ9XFxcIlRoZSBwYXNzd29yZCB5b3UgZW50ZXJlZCB3YXMgaW5jb3JyZWN0XFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgY2xhc3M9XFxcImVycm9yLW1lc3NhZ2VcXFwiICNlcnJvck1lc3NhZ2U+PC9MYWJlbD5cXHJcXG5cXHJcXG4gICAgPEJ1dHRvbiB0ZXh0PVxcXCJTdWJtaXRcXFwiICh0YXApPVxcXCJzdWJtaXQocGFzc3dvcmQpXFxcIiBjbGFzcz1cXFwic3VibWl0LWJ0blxcXCI+PC9CdXR0b24+XFxyXFxuXFxyXFxuPC9TdGFja2xheW91dD5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q29udGFpbmVyUmVmLCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTW9kYWxEaWFsb2dQYXJhbXMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZGlyZWN0aXZlcy9kaWFsb2dzXCI7XHJcbmltcG9ydCAqIGFzIGZpcmViYXNlIGZyb20gJ25hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2UnO1xyXG5pbXBvcnQgeyBMb2dpbmNoZWNrU2VydmljZSB9IGZyb20gJy4uL2xvZ2luY2hlY2suc2VydmljZS50bnMnO1xyXG5pbXBvcnQgeyBUcmFuc2ZlclNlcnZpY2UgfSBmcm9tICcuLi9kYXRhdHJhbnNmZXIuc2VydmljZSc7XHJcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9nc1wiO1xyXG5pbXBvcnQgeyBTZXR0aW5nc2Zvcm1Db21wb25lbnQgfSBmcm9tICcuLi9zZXR0aW5nc2Zvcm0vc2V0dGluZ3Nmb3JtLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1vZGFsRGlhbG9nU2VydmljZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9kaXJlY3RpdmVzL2RpYWxvZ3NcIjtcclxuaW1wb3J0IHsgTGFiZWwgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2xhYmVsJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1yZWF1dGgnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9yZWF1dGguY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3JlYXV0aC5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFJlYXV0aENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFyYW1zOiBNb2RhbERpYWxvZ1BhcmFtcywgcHJpdmF0ZSB0cmFuc2ZlclNlcnZpY2U6IFRyYW5zZmVyU2VydmljZSwgcHJpdmF0ZSBsb2dpbmNoZWNrU2VydmljZTogTG9naW5jaGVja1NlcnZpY2UsIFxyXG4gIFx0cHJpdmF0ZSB2Y1JlZjogVmlld0NvbnRhaW5lclJlZiwgcHJpdmF0ZSBtb2RhbDogTW9kYWxEaWFsb2dTZXJ2aWNlKSB7IH1cclxuXHJcbiAgQFZpZXdDaGlsZChcImVycm9yTWVzc2FnZVwiLCB7IHN0YXRpYzogdHJ1ZSB9KSBlbTogRWxlbWVudFJlZjtcclxuICBmaWVsZDtcclxuICB1c2VySWQ7XHJcbiAgdXNlckVtYWlsO1xyXG4gIHBhc3N3b3JkO1xyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICBcdHRoaXMuZmllbGQgPSB0aGlzLnRyYW5zZmVyU2VydmljZS5nZXREYXRhKCk7XHJcbiAgXHR0aGlzLnVzZXJJZCA9IHRoaXMubG9naW5jaGVja1NlcnZpY2UuZ2V0VXNlcigpO1xyXG4gIFx0ZmlyZWJhc2UuZ2V0Q3VycmVudFVzZXIoKS50aGVuKCh1c2VyKSA9PiB7XHJcbiAgXHRcdHRoaXMudXNlckVtYWlsID0gdXNlci5lbWFpbDtcclxuICBcdH0pXHJcbiAgfVxyXG5cclxuICBjbG9zZShyZXMpIHtcclxuICBcdGxldCBlcnJvck1lc3NhZ2UgPSA8TGFiZWw+IHRoaXMuZW0ubmF0aXZlRWxlbWVudDtcclxuXHRlcnJvck1lc3NhZ2Uuc3R5bGUudmlzaWJpbGl0eSA9ICdjb2xsYXBzZSc7XHJcblx0dGhpcy5wYXNzd29yZCA9ICcnO1xyXG4gICAgdGhpcy5wYXJhbXMuY2xvc2VDYWxsYmFjayhyZXMpO1xyXG4gIH1cclxuXHJcbiAgc3VibWl0KHBhc3N3b3JkKSB7XHJcbiAgXHRmaXJlYmFzZS5yZWF1dGhlbnRpY2F0ZSh7XHJcblx0ICAgIHR5cGU6IGZpcmViYXNlLkxvZ2luVHlwZS5QQVNTV09SRCwgLy8gb3IgR09PR0xFIC8gRkFDRUJPT0tcclxuXHQgICAgLy8gdGhpcyBpcyBvbmx5IHJlcXVpcmVkIGluIHR5cGUgPT0gUEFTU1dPUkRcclxuXHQgICAgcGFzc3dvcmRPcHRpb25zOiB7XHJcblx0ICAgICAgZW1haWw6IHRoaXMudXNlckVtYWlsLFxyXG5cdCAgICAgIHBhc3N3b3JkOiB0aGlzLnBhc3N3b3JkXHJcblx0ICAgIH1cclxuXHQgIH0pLnRoZW4oXHJcblx0ICAgICAgKHJlc3VsdCkgPT4ge1xyXG5cdCAgICAgICAgLy8geW91IGNhbiBub3cgc2FmZWx5IGRlbGV0ZSB0aGUgYWNjb3VudCAvIGNoYW5nZSB0aGUgcGFzc3dvcmQsIGV0Y1xyXG5cdCAgICAgICAgbGV0IG9wdGlvbnMgPSB7XHJcblx0XHQgICAgICAgIGNvbnRleHQ6IHt9LFxyXG5cdFx0ICAgICAgICBmdWxsc2NyZWVuOiB0cnVlLFxyXG5cdFx0ICAgICAgICB2aWV3Q29udGFpbmVyUmVmOiB0aGlzLnZjUmVmXHJcblx0XHQgICAgICAgIC8vIGFuaW1hdGVkOiB0cnVlLFxyXG5cdFx0ICAgICAgICAvLyB0cmFuc2l0aW9uOiB7IG5hbWU6IFwic2xpZGVUb3BcIiB9XHJcblx0XHQgICAgfTtcclxuXHRcdCAgICBsZXQgZXJyb3JNZXNzYWdlID0gPExhYmVsPiB0aGlzLmVtLm5hdGl2ZUVsZW1lbnQ7XHJcblx0ICAgICAgICBlcnJvck1lc3NhZ2Uuc3R5bGUudmlzaWJpbGl0eSA9ICdjb2xsYXBzZSc7XHJcblx0XHQgICAgdGhpcy50cmFuc2ZlclNlcnZpY2Uuc2V0RGF0YSh0aGlzLmZpZWxkKTtcclxuXHRcdCAgICB0aGlzLnBhc3N3b3JkID0gJyc7XHJcblx0ICAgIFx0dGhpcy5tb2RhbC5zaG93TW9kYWwoU2V0dGluZ3Nmb3JtQ29tcG9uZW50LCBvcHRpb25zKS50aGVuKHJlcyA9PiB7XHJcblx0XHQgICAgXHRpZihyZXMgPT0gJ3VwZGF0ZScpIHtcclxuXHRcdCAgICBcdFx0dGhpcy5jbG9zZSgndXBkYXRlJyk7XHJcblx0XHQgICAgXHR9XHJcblx0XHQgICAgfSk7XHJcblx0ICAgICAgfSxcclxuXHQgICAgICAoZXJyb3IpID0+IHtcclxuXHQgICAgICAgIGxldCBlcnJvck1lc3NhZ2UgPSA8TGFiZWw+IHRoaXMuZW0ubmF0aXZlRWxlbWVudDtcclxuXHQgICAgICAgIGVycm9yTWVzc2FnZS5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xyXG5cdCAgICAgIH1cclxuXHQgICk7XHJcbiAgfVxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCIvKiBBZGQgbW9iaWxlIHN0eWxlcyBmb3IgdGhlIGNvbXBvbmVudCBoZXJlLiAgKi9cXHJcXG5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8IS0tIDxhcHAtbmF2aWdhdGlvbj48L2FwcC1uYXZpZ2F0aW9uPiAtLT5cXHJcXG48U3RhY2tMYXlvdXQ+XFxyXFxuICA8TGFiZWwgdGV4dD1cXFwic2VhcmNoIHdvcmtzXFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCI+PC9MYWJlbD5cXHJcXG4gIDxMYWJlbCB0ZXh0PVxcXCJUaGlzIGlzIGEgbWlncmF0ZWQgY29tcG9uZW50XFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCI+PC9MYWJlbD5cXHJcXG4gIDxMYWJlbCB0ZXh0PVxcXCJVcGRhdGUgaXQgdG8gcHJvdmlkZSB0aGUgVUkgZWxlbWVudHMgcmVxdWlyZWQgaW4geW91ciBtb2JpbGUgYXBwXFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCI+PC9MYWJlbD5cXHJcXG48L1N0YWNrTGF5b3V0PlwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLXNlYXJjaCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3NlYXJjaC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vc2VhcmNoLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2VhcmNoQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG5cclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLypcXHJcXG5BZGQgeW91ciBOYXRpdmVTY3JpcHQgc3BlY2lmaWMgc3R5bGVzIGhlcmUuXFxyXFxuVG8gbGVhcm4gbW9yZSBhYm91dCBzdHlsaW5nIGluIE5hdGl2ZVNjcmlwdCBzZWU6XFxyXFxuaHR0cHM6Ly9kb2NzLm5hdGl2ZXNjcmlwdC5vcmcvYW5ndWxhci91aS9zdHlsaW5nXFxyXFxuKi9cXHJcXG5cXHJcXG4jSGVhZGVyIHtcXHJcXG4gICAgY29sb3I6YmxhY2s7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjQ7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiU2Vnb2UgVUlcXFwiLEFyaWFsLHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbiNsaXN0VmlldyB7XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTogMjA7XFxyXFxufVxcclxcblxcclxcbi51cGRhdGUge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgY29sb3I6ICNhYzAwZTY7XFxyXFxuICAgIGJvcmRlci13aWR0aDogMTtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiAjYWMwMGU2O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGZsb2F0OiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbjogYXV0bzsgXFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiU2Vnb2UgVUlcXFwiLEFyaWFsLHNhbnMtc2VyaWY7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDE1O1xcclxcbiAgICB3aWR0aDogMjAwO1xcclxcbiAgICBoZWlnaHQ6IDQwO1xcclxcbn1cXHJcXG4udXBkYXRlOmhpZ2hsaWdodGVkIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZTZmZjtcXHJcXG59XFxyXFxuLnBheW1lbnRzIHtcXHJcXG5cXHRjb2xvcjogYmxhY2s7XFxyXFxuXFx0bWFyZ2luLXRvcDogMTI7XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTogMTI7XFxyXFxuXFx0bWFyZ2luLWxlZnQ6IDE4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgICBmb250LXNpemU6IDE1O1xcclxcbn1cXHJcXG4ubG9nb3V0IHtcXHJcXG5cXHRjb2xvcjogI2FjMDBlNjtcXHJcXG5cXHRtYXJnaW4tdG9wOiAxMjtcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiAxMjtcXHJcXG5cXHRtYXJnaW4tbGVmdDogMTg7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gICAgZm9udC1zaXplOiAxNTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi1saXN0LXZpZXcge1xcclxcblxcdG1hcmdpbi10b3A6IDM2O1xcclxcblxcdGhlaWdodDogMTAwO1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbS1saXN0LXZpZXcge1xcclxcblxcdGhlaWdodDogMjc1O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvZmlsZS1waWN0dXJlIHtcXHJcXG5cXHRoZWlnaHQ6IDEwMDtcXHJcXG5cXHR3aWR0aDogMTAwO1xcclxcblxcdG1hcmdpbi10b3A6IDEwO1xcclxcblxcdG1hcmdpbi1ib3R0b206IDg7XFxyXFxuXFx0LypiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyovXFxyXFxufVxcclxcblxcclxcbi5pbWctcm91bmRlZCB7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogNTAlO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyLWxhYmVsIHtcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiA1O1xcclxcblxcdGZvbnQtc2l6ZTogMTU7XFxyXFxuXFx0Y29sb3I6ICM0Mjg1ZjQ7XFxyXFxufVxcclxcblxcclxcbi5ib2xkIHtcXHJcXG5cXHRmb250LXdlaWdodDogNTAwO1xcclxcbn1cXHJcXG5cXHJcXG4uYWN0aXZpdHktaW5kaWNhdG9yIHtcXHJcXG4gIGNvbG9yOiAjYWMwMGU2O1xcclxcbiAgbWFyZ2luOiAyNSU7XFxyXFxufVxcclxcblxcclxcbi52YWx1ZS1sYWJlbCB7XFxyXFxuXFx0bWFyZ2luLWxlZnQ6IDE4O1xcclxcblxcdG1hcmdpbi1ib3R0b206IDEwO1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTg7XFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxufVxcclxcbi50aXRsZS1sYWJlbCB7XFxyXFxuXFx0bWFyZ2luLXRvcDogMTY7XFxyXFxuXFx0bWFyZ2luLWxlZnQ6IDE4O1xcclxcblxcdGNvbG9yOiAjNjk2OTY5O1xcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbn1cXHJcXG5cXHJcXG4uc3RhY2stbGF5b3V0e1xcclxcbiAgICBoZWlnaHQ6MTAwJVxcclxcbn1cXHJcXG4uYWN0aXZpdHktaW5kaWNhdG9ye1xcclxcbiAgICBoZWlnaHQ6IDUwJTtcXHJcXG59XFxyXFxuTGlzdFZpZXcge1xcclxcbiAgICBzZXBhcmF0b3ItY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbn1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8IS0tIDxhcHAtbmF2aWdhdGlvbj48L2FwcC1uYXZpZ2F0aW9uPiAtLT5cXHJcXG48U3RhY2tsYXlvdXQgaGVpZ2h0PVxcXCIxMDAlXFxcIj5cXHJcXG4gICAgPFN0YWNrTGF5b3V0ICNzZXR0aW5nc0NvbnRhaW5lcj5cXHJcXG4gICAgICA8IS0tIDxMYWJlbCBpZD0gXFxcIkhlYWRlclxcXCIgdGV4dD1cXFwiQWNjb3VudCBTZXR0aW5nc1xcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiPjwvTGFiZWw+IC0tPlxcclxcbiAgICAgIDxJbWFnZUNhY2hlSXQgc3JjPVxcXCJ7eyBwcm9maWxlIH19XFxcIiBzdHJldGNoPVxcXCJhc3BlY3RGaXRcXFwiIGNsYXNzPVxcXCJpbWctcm91bmRlZCBwcm9maWxlLXBpY3R1cmVcXFwiICh0YXApPVxcXCJ1cGxvYWRQZnAoKVxcXCI+PC9JbWFnZUNhY2hlSXQ+XFxyXFxuICAgICAgPExhYmVsIHRleHQ9XFxcIkNoYW5nZSBQaG90b1xcXCIgY2xhc3M9XFxcImhlYWRlci1sYWJlbCBib2xkXFxcIiAodGFwKT1cXFwidXBsb2FkUGZwKClcXFwiPjwvTGFiZWw+XFxyXFxuXFxyXFxuICAgICAgPExpc3RWaWV3IFtpdGVtc109XFxcImZpZWxkc1xcXCIgI2xpc3RWaWV3IGlkPVxcXCJsaXN0Vmlld1xcXCIgKGl0ZW1UYXApPVxcXCJzaG93TW9kYWwoJGV2ZW50KVxcXCIgY2xhc3M9XFxcIml0ZW0tbGlzdC12aWV3XFxcIj5cXHJcXG4gICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtaXRlbT1cXFwiaXRlbVxcXCIgbGV0LWk9XFxcImluZGV4XFxcIiBsZXQtb2RkPVxcXCJvZGRcXFwiIGxldC1ldmVuPVxcXCJldmVuXFxcIj5cXHJcXG4gICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJzdGFjay1sYXlvdXRcXFwiPlxcclxcbiAgICAgICAgICAgIDxMYWJlbCB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgY2xhc3M9XFxcInRpdGxlLWxhYmVsXFxcIiBbdGV4dF09XFxcIml0ZW0ubGFiZWxcXFwiPjwvTGFiZWw+XFxyXFxuICAgICAgICAgICAgPExhYmVsIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiBjbGFzcz1cXFwidmFsdWUtbGFiZWxcXFwiIFt0ZXh0XT1cXFwiaXRlbS52YWx1ZVxcXCI+PC9MYWJlbD5cXHJcXG4gICAgICAgICAgPC9TdGFja0xheW91dD5cXHJcXG4gICAgICAgIDwvbmctdGVtcGxhdGU+XFxyXFxuICAgICAgPC9MaXN0Vmlldz5cXHJcXG4gICAgICA8IS0tIDxSYWREYXRhRm9ybSB0a0V4YW1wbGVUaXRsZSB0a1RvZ2dsZU5hdkJ1dHRvbiBbc291cmNlXT1cXFwicGVyc29uXFxcIj48L1JhZERhdGFGb3JtPiAgIC0tPlxcclxcbiAgICAgIDwhLS0gPEJ1dHRvbiBjbGFzcz1cXFwiVXBkYXRlXFxcIiAgdGV4dD1cXFwiVXBkYXRlIFNldHRpbmdzXFxcIj48L0J1dHRvbj4gLS0+XFxyXFxuXFxyXFxuICAgICAgPExpc3RWaWV3IFtpdGVtc109XFxcImJ1dHRvbnNcXFwiICNsaXN0Vmlld1NlY29uZCAoaXRlbVRhcCk9XFxcInJvdXRlKCRldmVudClcXFwiIChzZXR1cEl0ZW1WaWV3KT1cXFwic2V0dXBJdGVtVmlldygkZXZlbnQpXFxcIiBjbGFzcz1cXFwiYnRuLWxpc3Qtdmlld1xcXCI+XFxyXFxuICAgICAgICA8bmctdGVtcGxhdGUgbGV0LWl0ZW09XFxcIml0ZW1cXFwiIGxldC1pPVxcXCJpbmRleFxcXCIgbGV0LW9kZD1cXFwib2RkXFxcIiBsZXQtZXZlbj1cXFwiZXZlblxcXCIgbGV0LXBheW1lbnRzPVxcXCJwYXltZW50c1xcXCIgbGV0LWxvZ291dD1cXFwibG9nb3V0XFxcIj5cXHJcXG4gICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJzdGFjay1sYXlvdXRcXFwiPlxcclxcbiAgICAgICAgICAgIDxMYWJlbCB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgW3RleHRdPVxcXCJpdGVtXFxcIiBbY2xhc3MucGF5bWVudHNdPVxcXCJwYXltZW50c1xcXCIgW2NsYXNzLmxvZ291dF09XFxcImxvZ291dFxcXCI+PC9MYWJlbD5cXHJcXG4gICAgICAgICAgPC9TdGFja0xheW91dD5cXHJcXG4gICAgICAgIDwvbmctdGVtcGxhdGU+XFxyXFxuICAgICAgPC9MaXN0Vmlldz5cXHJcXG48IS0tICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwicGF5bWVudHMtY29udGFpbmVyXFxcIiAodGFwKT1cXFwidG9QYXltZW50cygpXFxcIj5cXHJcXG4gICAgICAgIDxMYWJlbCBjbGFzcz1cXFwicGF5bWVudHNcXFwiIHRleHQ9XFxcIlBheW1lbnRzXFxcIj48L0xhYmVsPlxcclxcbiAgICAgIDwvU3RhY2tMYXlvdXQ+XFxyXFxuICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJsb2dvdXQtY29udGFpbmVyXFxcIiAodGFwKT1cXFwibG9nT3V0KClcXFwiPlxcclxcbiAgICAgICAgPExhYmVsIGNsYXNzPVxcXCJsb2dvdXRcXFwiIHRleHQ9XFxcIkxvZyBvdXRcXFwiPjwvTGFiZWw+XFxyXFxuICAgICAgPC9TdGFja0xheW91dD4gLS0+XFxyXFxuICAgIDwvU3RhY2tMYXlvdXQ+XFxyXFxuXFxyXFxuPEFjdGl2aXR5SW5kaWNhdG9yICNhY3Rpdml0eUluZGljYXRvciBidXN5PVxcXCJ0cnVlXFxcIiB3aWR0aD1cXFwiNDBcXFwiICBjbGFzcz1cXFwiYWN0aXZpdHktaW5kaWNhdG9yXFxcIj5cXHJcXG4gIDwvQWN0aXZpdHlJbmRpY2F0b3I+XFxyXFxuPC9TdGFja2xheW91dD5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuLy8gaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2VcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IExvZ2luY2hlY2tTZXJ2aWNlIH0gZnJvbSAnLi4vbG9naW5jaGVjay5zZXJ2aWNlLnRucyc7XHJcbmltcG9ydCAqIGFzIGZpcmViYXNlIGZyb20gJ25hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2UnO1xyXG5pbXBvcnQgeyBtZXNzYWdpbmcgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZS9tZXNzYWdpbmdcIjtcclxuaW1wb3J0IHsgbG9nb3V0IGFzIGZiTG9nb3V0IH0gZnJvbSAnbmF0aXZlc2NyaXB0LWZhY2Vib29rJztcclxuaW1wb3J0ICogYXMgaW1hZ2VwaWNrZXIgZnJvbSBcIm5hdGl2ZXNjcmlwdC1pbWFnZXBpY2tlclwiO1xyXG5pbXBvcnQgKiBhcyBmcyBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9maWxlLXN5c3RlbVwiO1xyXG5pbXBvcnQgeyBpc0FuZHJvaWQsIGlzSU9TLCBkZXZpY2UsIHNjcmVlbiB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtXCI7XHJcbmltcG9ydCAqIGFzIGJnaHR0cCBmcm9tICduYXRpdmVzY3JpcHQtYmFja2dyb3VuZC1odHRwJztcclxuaW1wb3J0IHsgSW1hZ2VDcm9wcGVyIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWltYWdlY3JvcHBlcic7XHJcbmltcG9ydCAqIGFzIGltYWdlU291cmNlIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2ltYWdlLXNvdXJjZVwiO1xyXG5pbXBvcnQgeyBBY3Rpdml0eUluZGljYXRvciB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvYWN0aXZpdHktaW5kaWNhdG9yJztcclxuaW1wb3J0IHsgU3RhY2tMYXlvdXQgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvc3RhY2stbGF5b3V0JztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZUFycmF5IH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUtYXJyYXknO1xyXG5pbXBvcnQgeyBUcmFuc2ZlclNlcnZpY2UgfSBmcm9tICcuLi9kYXRhdHJhbnNmZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IHBvc3QgfSBmcm9tICdzZWxlbml1bS13ZWJkcml2ZXIvaHR0cCc7XHJcbmltcG9ydCB7IE1vZGFsRGlhbG9nUGFyYW1zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2RpcmVjdGl2ZXMvZGlhbG9nc1wiO1xyXG5pbXBvcnQgeyBNb2RhbERpYWxvZ1NlcnZpY2UgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZGlyZWN0aXZlcy9kaWFsb2dzXCI7XHJcbmltcG9ydCB7IFNldHRpbmdzZm9ybUNvbXBvbmVudCB9IGZyb20gJy4uL3NldHRpbmdzZm9ybS9zZXR0aW5nc2Zvcm0uY29tcG9uZW50JztcclxuaW1wb3J0IHsgUmVhdXRoQ29tcG9uZW50IH0gZnJvbSAnLi4vcmVhdXRoL3JlYXV0aC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTZXR1cEl0ZW1WaWV3QXJncyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9kaXJlY3RpdmVzXCI7XHJcblxyXG5cclxuY2xhc3MgTGFiZWwge1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIGxhYmVsOiBTdHJpbmcsIHB1YmxpYyB2YWx1ZTogc3RyaW5nLCBwdWJsaWMgZmlyc3ROYW1lOiBzdHJpbmcsIHB1YmxpYyBsYXN0TmFtZTogc3RyaW5nKSB7IH1cclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHNlbGVjdG9yOiBcImFwcC1zZXR0aW5nc1wiLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9zZXR0aW5ncy5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vc2V0dGluZ3MuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgU2V0dGluZ3NDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSBwYWdlOiBQYWdlLCBwcml2YXRlIGxvZ2luY2hlY2tTZXJ2aWNlOiBMb2dpbmNoZWNrU2VydmljZSwgcHJpdmF0ZSB0cmFuc2ZlclNlcnZpY2U6IFRyYW5zZmVyU2VydmljZSxcclxuICBcdHByaXZhdGUgdmNSZWY6IFZpZXdDb250YWluZXJSZWYsIHByaXZhdGUgbW9kYWw6IE1vZGFsRGlhbG9nU2VydmljZSkgeyB9XHJcblxyXG4gIEBWaWV3Q2hpbGQoXCJhY3Rpdml0eUluZGljYXRvclwiLCB7IHN0YXRpYzogdHJ1ZSB9KSBhaTogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKFwic2V0dGluZ3NDb250YWluZXJcIiwgeyBzdGF0aWM6IHRydWUgfSkgc2M6IEVsZW1lbnRSZWY7XHJcblxyXG4gIHByb2ZpbGUgPSBcIn4vaW1nL3NhbXBsZV9wcm9maWxlLnBuZ1wiO1xyXG4gIHVzZXJJZDtcclxuICBmaWVsZHM7XHJcbiAgaW1hZ2VDcm9wcGVyOiBJbWFnZUNyb3BwZXI7XHJcbiAgaW1hZ2VTb3VyY2U6IGltYWdlU291cmNlLkltYWdlU291cmNlO1xyXG4gIGJ1dHRvbnM7XHJcbiAgcGF5bWVudExpc3Q7XHJcbiAgbG9nb3V0TGlzdDtcclxuICB1c2VyO1xyXG4gIHRva2VuO1xyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuXHR0aGlzLmltYWdlQ3JvcHBlciA9IG5ldyBJbWFnZUNyb3BwZXIoKTtcclxuXHR0aGlzLmxvYWRWaWV3cygpO1xyXG5cclxuXHRcdGxldCBhY3Rpdml0eUluZGljYXRvciA9IDxBY3Rpdml0eUluZGljYXRvcj4gdGhpcy5haS5uYXRpdmVFbGVtZW50O1xyXG5cdCAgICBhY3Rpdml0eUluZGljYXRvci5zdHlsZS52aXNpYmlsaXR5ID0gJ2NvbGxhcHNlJ1xyXG5cdH1cclxuXHJcblx0bG9hZFZpZXdzKCl7XHJcblx0XHR0aGlzLnBheW1lbnRMaXN0ID0gbmV3IE9ic2VydmFibGVBcnJheTxTdHJpbmc+KCk7XHJcblx0XHR0aGlzLnBheW1lbnRMaXN0LnB1c2goJ1BheW1lbnQgbWV0aG9kcycpO1xyXG5cdFx0dGhpcy5sb2dvdXRMaXN0ID0gbmV3IE9ic2VydmFibGVBcnJheTxTdHJpbmc+KCk7XHJcblx0XHR0aGlzLmxvZ291dExpc3QucHVzaCgnTG9nIG91dCcpO1xyXG5cdFx0dGhpcy5idXR0b25zID0gbmV3IE9ic2VydmFibGVBcnJheTxTdHJpbmc+KCk7XHJcblx0XHR0aGlzLmJ1dHRvbnMucHVzaCgnUGF5bWVudCBtZXRob2RzJyk7XHJcblx0XHR0aGlzLmJ1dHRvbnMucHVzaCgnTG9nIG91dCcpO1xyXG5cclxuXHRcdHRoaXMudXNlcklkID0gdGhpcy5sb2dpbmNoZWNrU2VydmljZS5nZXRVc2VyKCk7XHJcblx0XHRjb25zdCB1c2VyRG9jdW1lbnQgPSBmaXJlYmFzZS5maXJlc3RvcmUuY29sbGVjdGlvbigndXNlcnMnKS5kb2ModGhpcy51c2VySWQpO1xyXG5cdFx0dGhpcy5maWVsZHMgPSBuZXcgT2JzZXJ2YWJsZUFycmF5PExhYmVsPigpO1xyXG5cdFx0dGhpcy51cGRhdGVMaXN0VmlldygpO1xyXG5cdFx0ZmlyZWJhc2UuZ2V0Q3VycmVudFVzZXIoKS50aGVuKCh1c2VyKSA9PiB7XHJcblx0XHRcdHRoaXMudXNlciA9IHVzZXI7XHJcblx0XHRcdGlmKHVzZXIucGhvdG9VUkwgIT0gbnVsbCkge1xyXG5cdFx0XHRcdHRoaXMucHJvZmlsZSA9IHVzZXIucGhvdG9VUkw7XHJcblx0XHRcdFx0aWYodXNlci5waG90b1VSTC5zdWJzdHJpbmcoMCwgMjcpID09ICdodHRwczovL2dyYXBoLmZhY2Vib29rLmNvbS8nKVxyXG5cdFx0XHRcdFx0dGhpcy5wcm9maWxlICs9ICc/aGVpZ2h0PTMwMCc7XHJcblx0XHRcdH1cclxuXHRcdH0pXHJcblx0fVxyXG5cclxuXHRzZXR1cEl0ZW1WaWV3KGFyZ3M6IFNldHVwSXRlbVZpZXdBcmdzKSB7XHJcblx0XHRhcmdzLnZpZXcuY29udGV4dC5wYXltZW50cyA9IChhcmdzLmluZGV4ID09IDApO1xyXG5cdFx0YXJncy52aWV3LmNvbnRleHQubG9nb3V0ID0gKGFyZ3MuaW5kZXggPT0gMSk7XHJcblx0XHRhcmdzLnZpZXcuY29udGV4dC5ldmVuID0gKGFyZ3MuaW5kZXggJSAyID09PSAwKTtcclxuXHRcdGFyZ3Mudmlldy5jb250ZXh0Lm9kZCA9IChhcmdzLmluZGV4ICUgMiA9PT0gMSk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVMaXN0Vmlldygpe1xyXG5cdFx0dGhpcy5maWVsZHMuc3BsaWNlKDApO1xyXG5cdFx0Y29uc3QgdXNlckRvY3VtZW50ID0gZmlyZWJhc2UuZmlyZXN0b3JlLmNvbGxlY3Rpb24oJ3VzZXJzJykuZG9jKHRoaXMudXNlcklkKTtcclxuXHRcdHVzZXJEb2N1bWVudC5nZXQoKS50aGVuKGRvYyA9PiB7XHJcblx0XHRcdGxldCB2YWxzID0gZG9jLmRhdGEoKVxyXG5cdFx0XHQvLyBjb25zb2xlLmxvZyhcImZpZWxkc1wiLCB2YWxzKVxyXG5cdFx0XHR0aGlzLmZpZWxkcy5wdXNoKG5ldyBMYWJlbChcIk5hbWVcIiwgdmFscy5maXJzdF9uYW1lICsgXCIgXCIgKyB2YWxzLmxhc3RfbmFtZSwgdmFscy5maXJzdF9uYW1lLCB2YWxzLmxhc3RfbmFtZSkpO1xyXG5cdFx0XHR0aGlzLmZpZWxkcy5wdXNoKG5ldyBMYWJlbChcIkVtYWlsXCIsIHZhbHMuZW1haWwsIHZhbHMuZmlyc3RfbmFtZSwgdmFscy5sYXN0X25hbWUpKTtcclxuXHRcdFx0aWYodmFscy5waG9uZV9udW1iZXIgPT0gXCJcIiB8fCB2YWxzLnBob25lX251bWJlciA9PSBudWxsKXtcclxuXHRcdFx0XHR0aGlzLmZpZWxkcy5wdXNoKG5ldyBMYWJlbChcIlBob25lIE51bWJlclwiLCBcIk5vbmVcIiwgdmFscy5maXJzdF9uYW1lLCB2YWxzLmxhc3RfbmFtZSkpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2V7XHJcblx0XHRcdFx0dGhpcy5maWVsZHMucHVzaChuZXcgTGFiZWwoXCJQaG9uZSBOdW1iZXJcIiwgdmFscy5waG9uZV9udW1iZXIsIHZhbHMuZmlyc3RfbmFtZSwgdmFscy5sYXN0X25hbWUpKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZih0aGlzLnVzZXIucHJvdmlkZXJzWzFdLmlkID09ICdwYXNzd29yZCcpIHtcclxuXHRcdFx0XHR0aGlzLmZpZWxkcy5wdXNoKG5ldyBMYWJlbChcIlBhc3N3b3JkXCIsIFwiKioqKioqKipcIiwgdmFscy5maXJzdF9uYW1lLCB2YWxzLmxhc3RfbmFtZSkpXHJcblx0XHRcdH1cclxuXHRcdH0pXHJcblx0fVxyXG5cdHRvUGF5bWVudHMoKXtcclxuXHRcdHRoaXMucm91dGVyLm5hdmlnYXRlKFsncGF5bWVudHMnXSk7XHJcblx0fVxyXG5cclxuXHRzaG93TW9kYWwoYXJncykge1xyXG5cdFx0bGV0IGxhYmVsID0gdGhpcy5maWVsZHMuX2FycmF5W2FyZ3MuaW5kZXhdXHJcblx0XHR0aGlzLnRyYW5zZmVyU2VydmljZS5zZXREYXRhKGxhYmVsKTtcclxuXHRcdGxldCBvcHRpb25zID0ge1xyXG5cdCAgICAgICAgY29udGV4dDoge30sXHJcblx0ICAgICAgICBmdWxsc2NyZWVuOiB0cnVlLFxyXG5cdCAgICAgICAgdmlld0NvbnRhaW5lclJlZjogdGhpcy52Y1JlZlxyXG5cdCAgICAgICAgLy8gYW5pbWF0ZWQ6IHRydWUsXHJcblx0ICAgICAgICAvLyB0cmFuc2l0aW9uOiB7IG5hbWU6IFwic2xpZGVUb3BcIiB9XHJcblx0ICAgIH07XHJcblx0ICAgIGlmKGFyZ3MuaW5kZXggPT0gMykge1xyXG5cdCAgICBcdHRoaXMubW9kYWwuc2hvd01vZGFsKFJlYXV0aENvbXBvbmVudCwgb3B0aW9ucykudGhlbihyZXMgPT4ge1xyXG5cdFx0ICAgIFx0aWYocmVzID09ICd1cGRhdGUnKSB7XHJcblx0XHQgICAgXHRcdHRoaXMudXBkYXRlTGlzdFZpZXcoKTtcclxuXHRcdCAgICBcdH1cclxuXHRcdCAgICB9KTtcclxuXHQgICAgfVxyXG5cdCAgICBlbHNlIHtcclxuXHRcdCAgICB0aGlzLm1vZGFsLnNob3dNb2RhbChTZXR0aW5nc2Zvcm1Db21wb25lbnQsIG9wdGlvbnMpLnRoZW4ocmVzID0+IHtcclxuXHRcdCAgICBcdGlmKHJlcyA9PSAndXBkYXRlJykge1xyXG5cdFx0ICAgIFx0XHR0aGlzLnVwZGF0ZUxpc3RWaWV3KCk7XHJcblx0XHQgICAgXHR9XHJcblx0XHQgICAgfSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRyb3V0ZShhcmdzKSB7XHJcblx0XHRpZihhcmdzLmluZGV4ID09IDApIHtcclxuXHRcdFx0dGhpcy50b1BheW1lbnRzKCk7XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmKGFyZ3MuaW5kZXggPT0gMSkge1xyXG5cdFx0XHR0aGlzLmxvZ091dCgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0b25JdGVtVGFwKGFyZ3MpIHtcclxuXHRcdGxldCBsYWJlbCA9IHRoaXMuZmllbGRzLl9hcnJheVthcmdzLmluZGV4XVxyXG5cdFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUoWydzZXR0aW5nc2Zvcm0nXSk7XHJcblx0XHR0aGlzLnRyYW5zZmVyU2VydmljZS5zZXREYXRhKGxhYmVsKTtcclxuXHQgIH1cclxuXHJcblx0YXN5bmMgbG9nT3V0KCkge1xyXG5cdFx0dmFyIGFjdGl2aXR5SW5kaWNhdG9yID0gPEFjdGl2aXR5SW5kaWNhdG9yPiB0aGlzLmFpLm5hdGl2ZUVsZW1lbnQ7XHJcblx0XHRhY3Rpdml0eUluZGljYXRvci5idXN5ID0gdHJ1ZTtcclxuXHRcdGFjdGl2aXR5SW5kaWNhdG9yLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XHJcblx0XHR2YXIgc2V0dGluZ3NDb250YWluZXIgPSA8U3RhY2tMYXlvdXQ+IHRoaXMuc2MubmF0aXZlRWxlbWVudDtcclxuXHRcdHNldHRpbmdzQ29udGFpbmVyLnN0eWxlLnZpc2liaWxpdHkgPSAnY29sbGFwc2UnO1xyXG5cclxuXHRcdGNvbnN0IHRva2VuUHJvbWlzZSA9IGF3YWl0IG1lc3NhZ2luZy5nZXRDdXJyZW50UHVzaFRva2VuKCkudGhlbih0b2tlbiA9PiB7XHJcblx0XHRcdHRoaXMudG9rZW4gPSB0b2tlblxyXG5cdFx0XHRyZXR1cm4gdG9rZW47XHJcblx0XHR9KTtcclxuXHRcdGxldCB1c2VyRG9jID0gZmlyZWJhc2UuZmlyZXN0b3JlLmNvbGxlY3Rpb24oJ3VzZXJzJykuZG9jKHRoaXMudXNlcklkKTtcclxuXHRcdFxyXG5cdFx0dXNlckRvYy5nZXQoKS50aGVuKGFzeW5jIChkb2MpID0+IHtcclxuXHRcdFx0bGV0IGluZGV4ID0gZG9jLmRhdGEoKS50b2tlbnMuaW5kZXhPZih0aGlzLnRva2VuKTtcclxuXHRcdFx0aWYoaW5kZXggPiAtMSkge1xyXG5cdFx0XHRcdGNvbnN0IG5ld1Rva2VucyA9IGRvYy5kYXRhKCkudG9rZW5zO1xyXG5cdFx0XHRcdG5ld1Rva2Vucy5zcGxpY2UoaW5kZXgsIDEpO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKG5ld1Rva2VucylcclxuXHRcdFx0XHR1c2VyRG9jLnVwZGF0ZSh7dG9rZW5zOiBuZXdUb2tlbnN9KTtcclxuXHRcdFx0fVxyXG5cdFx0XHRjb25zdCBjaGF0UHJvbWlzZSA9IGF3YWl0IHRoaXMudXBkYXRlQ2hhdFRva2Vucyhkb2MuZGF0YSgpLmNoYXRzKTtcclxuXHRcdFx0ZmlyZWJhc2UubG9nb3V0KCk7XHJcblx0XHRcdGZiTG9nb3V0KCgpID0+IHtcclxuXHJcblx0XHRcdH0pO1xyXG5cdFx0XHR0aGlzLmxvZ2luY2hlY2tTZXJ2aWNlLmNsZWFySW5mbygpO1xyXG5cdFx0XHRhY3Rpdml0eUluZGljYXRvci5idXN5ID0gZmFsc2U7XHJcblx0XHRcdGFjdGl2aXR5SW5kaWNhdG9yLnN0eWxlLnZpc2liaWxpdHkgPSAnY29sbGFwc2UnO1xyXG5cdFx0XHRzZXR0aW5nc0NvbnRhaW5lci5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xyXG5cdFx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ3dlbGNvbWUnXSwge2NsZWFySGlzdG9yeTogdHJ1ZX0pO1xyXG5cdFx0fSlcclxuXHJcblx0fVxyXG5cclxuXHRhc3luYyB1cGRhdGVDaGF0VG9rZW5zKGNoYXRzKSB7XHJcblx0XHRsZXQgY2hhdENvbGxlY3Rpb24gPSBmaXJlYmFzZS5maXJlc3RvcmUuY29sbGVjdGlvbignY2hhdHMnKTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBjaGF0cy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRjb25zdCBjaGF0UHJvbWlzZSA9IGF3YWl0IGNoYXRDb2xsZWN0aW9uLmRvYyhjaGF0c1tpXSkuZ2V0KCkudGhlbihhc3luYyAoZG9jKSA9PiB7XHJcblx0XHRcdFx0bGV0IGluZGV4ID0gZG9jLmRhdGEoKS50b2tlbnMuaW5kZXhPZih0aGlzLnRva2VuKTtcclxuXHRcdFx0XHRpZihpbmRleCA+IC0xKSB7XHJcblx0XHRcdFx0XHRjb25zdCBuZXdUb2tlbnMgPSBkb2MuZGF0YSgpLnRva2VucztcclxuXHRcdFx0XHRcdG5ld1Rva2Vucy5zcGxpY2UoaW5kZXgsIDEpO1xyXG5cdFx0XHRcdFx0Y29uc3QgdXBkYXRlUHJvbWlzZSA9IGF3YWl0IGNoYXRDb2xsZWN0aW9uLmRvYyhjaGF0c1tpXSkudXBkYXRlKHt0b2tlbnM6IG5ld1Rva2Vuc30pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSlcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHVwbG9hZFBmcCgpIHtcclxuXHRcdHZhciBpbWFnZUNyb3BwZXIgPSBuZXcgSW1hZ2VDcm9wcGVyKCk7XHJcblx0XHRsZXQgY29udGV4dCA9IGltYWdlcGlja2VyLmNyZWF0ZSh7XHJcblx0XHQgICAgbW9kZTogXCJzaW5nbGVcIiAvLyB1c2UgXCJtdWx0aXBsZVwiIGZvciBtdWx0aXBsZSBzZWxlY3Rpb25cclxuXHRcdH0pO1xyXG5cdFx0Y29udGV4dFxyXG5cdCAgICAuYXV0aG9yaXplKClcclxuXHQgICAgLnRoZW4oZnVuY3Rpb24oKSB7XHJcblx0ICAgICAgICByZXR1cm4gY29udGV4dC5wcmVzZW50KCk7XHJcblx0ICAgIH0pXHJcblx0ICAgIC50aGVuKChzZWxlY3Rpb246IGFueSkgPT4ge1xyXG5cdCAgICBcdHNlbGVjdGlvbi5mb3JFYWNoKChzZWxlY3RlZCkgPT4ge1xyXG4gICAgICAgICAgICBcdGxldCBpbWdTb3VyY2UgPSBuZXcgaW1hZ2VTb3VyY2UuSW1hZ2VTb3VyY2UoKTtcclxuICAgICAgICAgICAgICAgIGltZ1NvdXJjZS5mcm9tQXNzZXQoc2VsZWN0ZWQpLnRoZW4oKHNvdXJjZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgXHR0aGlzLmltYWdlQ3JvcHBlclxyXG4gICAgICAgICAgICAgICAgICAgIC5zaG93KHNvdXJjZSwgeyB3aWR0aDogMzAwLCBoZWlnaHQ6IDMwMCB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGFyZ3MgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmRpcihhcmdzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFyZ3MuaW1hZ2UgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuY3JvcHBlZEltYWdlLmltYWdlU291cmNlID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBhcmdzLmltYWdlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZvbGRlciA9IGZzLmtub3duRm9sZGVycy50ZW1wKCk7XHJcblx0XHRcdFx0ICAgICAgICAgICAgdmFyIHBhdGggPSBmcy5wYXRoLmpvaW4oZm9sZGVyLnBhdGgsIFwicHJvZmlsZV9waWN0dXJlLnBuZ1wiKTtcclxuXHRcdFx0XHQgICAgICAgICAgICB2YXIgc2F2ZWQgPSBhcmdzLmltYWdlLnNhdmVUb0ZpbGUocGF0aCwncG5nJyk7XHJcblxyXG5cdFx0XHRcdCAgICAgICAgICAgIHZhciBhY3Rpdml0eUluZGljYXRvciA9IDxBY3Rpdml0eUluZGljYXRvcj4gdGhpcy5haS5uYXRpdmVFbGVtZW50O1xyXG5cdFx0XHRcdFx0XHRcdGFjdGl2aXR5SW5kaWNhdG9yLmJ1c3kgPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHRcdGFjdGl2aXR5SW5kaWNhdG9yLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XHJcbiAgICAgIFx0XHRcdFx0XHRcdHZhciBzZXR0aW5nc0NvbnRhaW5lciA9IDxTdGFja0xheW91dD4gdGhpcy5zYy5uYXRpdmVFbGVtZW50O1xyXG4gICAgICBcdFx0XHRcdFx0XHRzZXR0aW5nc0NvbnRhaW5lci5zdHlsZS52aXNpYmlsaXR5ID0gJ2NvbGxhcHNlJztcclxuXHJcblx0XHRcdFx0ICAgICAgICAgICAgZmlyZWJhc2Uuc3RvcmFnZS51cGxvYWRGaWxlKHtcclxuXHRcdFx0XHRcdFx0XHQgICAgLy8gdGhlIGZ1bGwgcGF0aCBvZiB0aGUgZmlsZSBpbiB5b3VyIEZpcmViYXNlIHN0b3JhZ2UgKGZvbGRlcnMgd2lsbCBiZSBjcmVhdGVkKVxyXG5cdFx0XHRcdFx0XHRcdCAgICByZW1vdGVGdWxsUGF0aDogJ3VzZXJzLycgKyB0aGlzLnVzZXJJZCArICcvdXBsb2Fkcy9wcm9maWxlX3BpY3R1cmUuanBnJyxcclxuXHRcdFx0XHRcdFx0XHQgICAgLy8gb3B0aW9uIDE6IGEgZmlsZS1zeXN0ZW0gbW9kdWxlIEZpbGUgb2JqZWN0XHJcblx0XHRcdFx0XHRcdFx0ICAgIGxvY2FsRmlsZTogZnMuRmlsZS5mcm9tUGF0aChwYXRoKSxcclxuXHRcdFx0XHRcdFx0XHQgICAgLy8gb3B0aW9uIDI6IGEgZnVsbCBmaWxlIHBhdGggKGlnbm9yZWQgaWYgJ2xvY2FsRmlsZScgaXMgc2V0KVxyXG5cdFx0XHRcdFx0XHRcdCAgICBsb2NhbEZ1bGxQYXRoOiBwYXRoLFxyXG5cdFx0XHRcdFx0XHRcdCAgICAvLyBnZXQgbm90aWZpZWQgb2YgZmlsZSB1cGxvYWQgcHJvZ3Jlc3NcclxuXHRcdFx0XHRcdFx0XHQgICAgb25Qcm9ncmVzczogKHN0YXR1cykgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdCAgICAgIGNvbnNvbGUubG9nKFwiVXBsb2FkZWQgZnJhY3Rpb246IFwiICsgc3RhdHVzLmZyYWN0aW9uQ29tcGxldGVkKTtcclxuXHRcdFx0XHRcdFx0XHQgICAgICBjb25zb2xlLmxvZyhcIlBlcmNlbnRhZ2UgY29tcGxldGU6IFwiICsgc3RhdHVzLnBlcmNlbnRhZ2VDb21wbGV0ZWQpO1xyXG5cdFx0XHRcdFx0XHRcdCAgICB9XHJcblx0XHRcdFx0XHRcdFx0ICB9KS50aGVuKFxyXG5cdFx0XHRcdFx0XHRcdCAgICAgICh1cGxvYWRlZEZpbGUpID0+IHtcclxuXHRcdFx0XHRcdFx0XHQgICAgICAgIGNvbnNvbGUubG9nKFwiRmlsZSB1cGxvYWRlZDogXCIgKyBKU09OLnN0cmluZ2lmeSh1cGxvYWRlZEZpbGUpKTtcclxuXHRcdFx0XHRcdFx0XHQgICAgICAgICAgXHRcdGZpcmViYXNlLnN0b3JhZ2UuZ2V0RG93bmxvYWRVcmwoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgIC8vIHRoZSBmdWxsIHBhdGggb2YgYW4gZXhpc3RpbmcgZmlsZSBpbiB5b3VyIEZpcmViYXNlIHN0b3JhZ2VcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgICByZW1vdGVGdWxsUGF0aDogJ3VzZXJzLycgKyB0aGlzLnVzZXJJZCArICcvdXBsb2Fkcy9wcm9maWxlX3BpY3R1cmUuanBnJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICB9KS50aGVuKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgICAgKHVybCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgICAgICBmaXJlYmFzZS51cGRhdGVQcm9maWxlKHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICAgcGhvdG9VUkw6IHVybFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgfSkudGhlbihcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICAgICAoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgICAgICAvLyBjYWxsZWQgd2hlbiB1cGRhdGUgcHJvZmlsZSB3YXMgc3VjY2Vzc2Z1bFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgICAgICAgYWN0aXZpdHlJbmRpY2F0b3IuYnVzeSA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzZXR0aW5nc0NvbnRhaW5lci5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhY3Rpdml0eUluZGljYXRvci5zdHlsZS52aXNpYmlsaXR5ID0gJ2NvbGxhcHNlJztcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICAgICAgIHRoaXMucHJvZmlsZSA9IHVybDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICAgICB9LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgICAgIChlcnJvck1lc3NhZ2UpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICAgICAgIGNvbnNvbGUubG9nKGVycm9yTWVzc2FnZSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgICAgfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgIGNvbnN0IHVzZXJEb2N1bWVudCA9IGZpcmViYXNlLmZpcmVzdG9yZS5jb2xsZWN0aW9uKCd1c2VycycpLmRvYyh0aGlzLnVzZXJJZCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICB1c2VyRG9jdW1lbnQudXBkYXRlKHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgIFx0cHJvZmlsZV9zb3VyY2U6IHVybFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgfSlcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgICAgIH0sXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICAgICBmdW5jdGlvbiAoZXJyb3IpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgICAgICAgY29uc29sZS5sb2coXCJFcnJvcjogXCIgKyBlcnJvcik7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICAgICB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICk7XHJcblx0XHRcdFx0XHRcdFx0ICAgICAgfSxcclxuXHRcdFx0XHRcdFx0XHQgICAgICAoZXJyb3IpID0+IHtcclxuXHRcdFx0XHRcdFx0XHQgICAgICAgIGNvbnNvbGUubG9nKFwiRmlsZSB1cGxvYWQgZXJyb3I6IFwiICsgZXJyb3IpO1xyXG5cdFx0XHRcdFx0XHRcdCAgICAgIH1cclxuXHRcdFx0XHRcdFx0XHRcdCkuY2F0Y2goKGVycikgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdCAgICAgICAgLy8gcHJvY2VzcyBlcnJvclxyXG5cdFx0XHRcdFx0XHRcdCAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuXHRcdFx0XHRcdFx0XHQgICAgfSk7XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cdCAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5kaXIoZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBcdGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG5cdCAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XHJcblx0ICAgIFx0Y29uc29sZS5sb2coZXJyKVxyXG5cdCAgICB9KVxyXG5cdH1cclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLyogQWRkIG1vYmlsZSBzdHlsZXMgZm9yIHRoZSBjb21wb25lbnQgaGVyZS4gICovXFxyXFxuLmhlYWRlcntcXHJcXG4gICAgbWFyZ2luLXRvcDogNTA7XFxyXFxuXFx0bWFyZ2luLWxlZnQ6IDMyO1xcclxcblxcdGNvbG9yOiBibGFjaztcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgZm9udC1zaXplOiAzMDtcXHJcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG59XFxyXFxuLnN1Ym1pdC1idG57XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6I2FjMDBlNjtcXHJcXG4gICAgd2lkdGg6IDc1JTtcXHJcXG4gICAgaGVpZ2h0OiAxNzBweDtcXHJcXG4vKiAgICBmb250LWZhbWlseTogXFxcIlNlZ29lIFVJXFxcIixBcmlhbCxzYW5zLXNlcmlmO1xcclxcbiovICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgbWFyZ2luLXRvcDogMjA7XFxyXFxufVxcclxcbi50ZXh0LWZpZWxke1xcclxcbiAgICB3aWR0aDogODUlO1xcclxcbiAgICBtYXJnaW4tdG9wOiAyMDtcXHJcXG4gICAgY29sb3I6IzY5Njk2OVxcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2UtYnV0dG9uLWNvbnRhaW5lciB7XFxyXFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdGxlZnQ6IDA7XFxyXFxufVxcclxcbi5jbG9zZSB7XFxyXFxuXFx0bWFyZ2luOiAxMDtcXHJcXG5cXHRmb250LXNpemU6IDQwO1xcclxcblxcdHdpZHRoOiA0ODtcXHJcXG4gICAgaGVpZ2h0OiA0ODtcXHJcXG4gICAgY29sb3I6IGJsYWNrXFxyXFxufVxcclxcblxcclxcbi5lcnJvci1tZXNzYWdlIHtcXHJcXG4gICAgY29sb3I6IHJlZDtcXHJcXG4gICAgZm9udC1zaXplOiAxNjtcXHJcXG4gICAgdmlzaWJpbGl0eTogY29sbGFwc2U7XFxyXFxufVxcclxcblxcclxcbi5zZWNvbmQtdmFsIHtcXHJcXG4gICAgdmlzaWJpbGl0eTogY29sbGFwc2U7XFxyXFxufVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxTdGFja2xheW91dD5cXHJcXG4gICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJjbG9zZS1idXR0b24tY29udGFpbmVyXFxcIiBvcmllbnRhdGlvbj1cXFwiaG9yaXpvbnRhbFxcXCI+XFxyXFxuICAgICAgICA8TGFiZWwgdGV4dD1cXFwiJnRpbWVzO1xcXCIgY2xhc3M9XFxcImNsb3NlXFxcIiAodGFwKT1cXFwiY2xvc2UoJ2NhbmNlbCcpXFxcIj48L0xhYmVsPlxcclxcbiAgICA8L1N0YWNrTGF5b3V0PlxcclxcbiAgICA8TGFiZWwgY2xhc3M9XFxcImhlYWRlclxcXCIgW3RleHRdPVxcXCJsYWJlbFxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiPjwvTGFiZWw+XFxyXFxuICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiaW5wdXQtZmllbGRcXFwiPlxcclxcbiAgICBcXHQ8IS0tIDxNYXNrZWRUZXh0RmllbGQgY2xhc3M9XFxcImlucHV0IGlucHV0LWJvcmRlclxcXCIgbWFzaz1cXFwiKDAwMCkgMDAwLTAwMDBcXFwiIFsobmdNb2RlbCldPVxcXCJ2YWx1ZVxcXCIga2V5Ym9hcmRUeXBlPVxcXCJwaG9uZVxcXCI+PC9NYXNrZWRUZXh0RmllbGQ+IC0tPlxcclxcbiAgICAgICAgPFRleHRGaWVsZCAjdmFsIFsobmdNb2RlbCldPVxcXCJ2YWx1ZVxcXCIgW2tleWJvYXJkVHlwZV0gPSBcXFwia2V5Ym9hcmRcXFwiIGF1dG9jb3JyZWN0PVxcXCJmYWxzZVxcXCIgcmV0dXJuS2V5VHlwZT1cXFwie3tyZXR1cm5LZXl9fVxcXCJcXHJcXG4gICAgICAgICBbbWF4TGVuZ3RoXT0gXFxcIm1heGxlbmd0aFxcXCIgY2xhc3M9XFxcInRleHQtZmllbGRcXFwiIHNlY3VyZT1cXFwie3tpc1NlY3VyZX19XFxcIiBoaW50PVxcXCJ7eyBoaW50IH19XFxcIj48L1RleHRGaWVsZD5cXHJcXG4gICAgICAgIDxUZXh0RmllbGQgI3NlY29uZFZhbCBbKG5nTW9kZWwpXT1cXFwic2Vjb25kVmFsdWVcXFwiIFtrZXlib2FyZFR5cGVdID0gXFxcImtleWJvYXJkXFxcIiBhdXRvY29ycmVjdD1cXFwiZmFsc2VcXFwiIHJldHVybktleVR5cGU9XFxcImRvbmVcXFwiXFxyXFxuICAgICAgICAgW21heExlbmd0aF09IFxcXCJtYXhsZW5ndGhcXFwiIGNsYXNzPVxcXCJ0ZXh0LWZpZWxkIHNlY29uZC12YWxcXFwiIHNlY3VyZT1cXFwie3tpc1NlY3VyZX19XFxcIiBoaW50PVxcXCJ7eyBzZWNvbmRIaW50IH19XFxcIj48L1RleHRGaWVsZD5cXHJcXG4gICAgPC9TdGFja0xheW91dD5cXHJcXG4gICAgPExhYmVsICNlcnJvck1lc3NhZ2UgdGV4dD1cXFwie3sgZXJyb3JUZXh0IH19XFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgY2xhc3M9XFxcImVycm9yLW1lc3NhZ2VcXFwiPjwvTGFiZWw+XFxyXFxuXFxyXFxuICAgIDxCdXR0b24gdGV4dD1cXFwiU2F2ZVxcXCIgKHRhcCk9XFxcInN1Ym1pdERhdGEodmFsLnRleHQpXFxcIiBjbGFzcz1cXFwic3VibWl0LWJ0blxcXCI+PC9CdXR0b24+XFxyXFxuXFxyXFxuPC9TdGFja2xheW91dD5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVHJhbnNmZXJTZXJ2aWNlIH0gZnJvbSAnLi4vZGF0YXRyYW5zZmVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZVwiO1xyXG4vLyBpbXBvcnQgeyBNb2RhbERpYWxvZ1BhcmFtcyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9kaXJlY3RpdmVzL2RpYWxvZ3NcIjtcclxuaW1wb3J0ICogYXMgZmlyZWJhc2UgZnJvbSAnbmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZSc7XHJcbmltcG9ydCB7IExvZ2luY2hlY2tTZXJ2aWNlIH0gZnJvbSAnLi4vbG9naW5jaGVjay5zZXJ2aWNlLnRucyc7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBNb2RhbERpYWxvZ1BhcmFtcyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9kaXJlY3RpdmVzL2RpYWxvZ3NcIjtcclxuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCI7XHJcbmltcG9ydCB7IExhYmVsIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9sYWJlbCc7XHJcbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvdGV4dC1maWVsZCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1zZXR0aW5nc2Zvcm0nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9zZXR0aW5nc2Zvcm0uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3NldHRpbmdzZm9ybS5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFNldHRpbmdzZm9ybUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdHJhbnNmZXJTZXJ2aWNlOiBUcmFuc2ZlclNlcnZpY2UsIHByaXZhdGUgbG9naW5jaGVja1NlcnZpY2U6IExvZ2luY2hlY2tTZXJ2aWNlLCBcclxuICAgIHByaXZhdGUgcGFnZTogUGFnZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMsIHByaXZhdGUgcGFyYW1zOiBNb2RhbERpYWxvZ1BhcmFtcykgeyB9XHJcblxyXG4gIEBWaWV3Q2hpbGQoXCJlcnJvck1lc3NhZ2VcIiwgeyBzdGF0aWM6IHRydWUgfSkgZW06IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZChcInNlY29uZFZhbFwiLCB7IHN0YXRpYzogdHJ1ZSB9KSBzdjogRWxlbWVudFJlZjtcclxuICB1c2VySWQ7XHJcbiAgZmllbGQ7XHJcbiAgbGFiZWw7XHJcbiAgdmFsdWU7XHJcbiAgc2Vjb25kVmFsdWU7XHJcbiAga2V5Ym9hcmQ7XHJcbiAgbWF4bGVuZ3RoO1xyXG4gIGlzU2VjdXJlID0gZmFsc2U7XHJcbiAgZXJyb3JUZXh0O1xyXG4gIHJldHVybktleSA9IFwiZG9uZVwiXHJcbiAgaGludDtcclxuICBzZWNvbmRIaW50O1xyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgLy8gdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XHJcbiAgICB0aGlzLmZpZWxkID0gdGhpcy50cmFuc2ZlclNlcnZpY2UuZ2V0RGF0YSgpO1xyXG4gICAgdGhpcy5sYWJlbCA9IHRoaXMuZmllbGQubGFiZWw7XHJcbiAgICB0aGlzLnZhbHVlID0gdGhpcy5maWVsZC52YWx1ZTtcclxuICAgIGlmKHRoaXMuZmllbGQudmFsdWUgPT0gXCJOb25lXCIpIHtcclxuICAgICAgdGhpcy52YWx1ZSA9ICcnO1xyXG4gICAgfVxyXG4gICAgaWYodGhpcy5sYWJlbD09XCJOYW1lXCIpe1xyXG4gICAgICAvLyB0aGlzLmtleWJvYXJkID0gXCJcIjtcclxuICAgICAgdGhpcy5tYXhsZW5ndGggPSAzMDtcclxuICAgICAgdGhpcy5yZXR1cm5LZXkgPSBcIm5leHRcIjtcclxuICAgICAgdGhpcy52YWx1ZSA9IHRoaXMuZmllbGQuZmlyc3ROYW1lO1xyXG4gICAgICB0aGlzLnNlY29uZFZhbHVlID0gdGhpcy5maWVsZC5sYXN0TmFtZTtcclxuICAgICAgdGhpcy5oaW50ID0gXCJGaXJzdCBuYW1lXCI7XHJcbiAgICAgIHRoaXMuc2Vjb25kSGludCA9IFwiTGFzdCBuYW1lXCI7XHJcbiAgICAgIGxldCBzZWNvbmRWYWx1ZSA9IDxUZXh0RmllbGQ+IHRoaXMuc3YubmF0aXZlRWxlbWVudDtcclxuICAgICAgc2Vjb25kVmFsdWUuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZih0aGlzLmxhYmVsPT1cIkVtYWlsXCIpe1xyXG4gICAgICB0aGlzLmtleWJvYXJkID0gXCJlbWFpbFwiO1xyXG4gICAgICB0aGlzLm1heGxlbmd0aCA9IDMwO1xyXG4gICAgICB0aGlzLmVycm9yVGV4dCA9IFwiSW52YWxpZCBlbWFpbFwiXHJcbiAgICAgIHRoaXMuaGludCA9IFwiRW1haWxcIlxyXG4gICAgfVxyXG4gICAgZWxzZSBpZih0aGlzLmxhYmVsPT1cIlBob25lIE51bWJlclwiKXtcclxuICAgICAgdGhpcy5rZXlib2FyZCA9IFwicGhvbmVcIjtcclxuICAgICAgdGhpcy5tYXhsZW5ndGggPSAxMDtcclxuICAgICAgdGhpcy5lcnJvclRleHQgPSBcIkludmFsaWQgcGhvbmUgbnVtYmVyXCJcclxuICAgICAgdGhpcy5oaW50ID0gXCJ4eHgteHh4LXh4eHhcIlxyXG4gICAgfVxyXG4gICAgZWxzZSBpZih0aGlzLmxhYmVsPT1cIlBhc3N3b3JkXCIpIHtcclxuICAgICAgdGhpcy52YWx1ZSA9ICcnO1xyXG4gICAgICB0aGlzLm1heGxlbmd0aCA9IDMwO1xyXG4gICAgICB0aGlzLmlzU2VjdXJlID0gdHJ1ZTtcclxuICAgICAgdGhpcy5sYWJlbCA9IFwiRW50ZXIgbmV3IHBhc3N3b3JkXCI7XHJcbiAgICAgIHRoaXMuaGludCA9IFwiTmV3IHBhc3N3b3JkXCI7XHJcbiAgICAgIHRoaXMuc2Vjb25kSGludCA9IFwiUmUtZW50ZXIgbmV3IHBhc3N3b3JkXCI7XHJcbiAgICAgIHRoaXMuZXJyb3JUZXh0ID0gXCJQYXNzd29yZCBtdXN0IGJlIGF0IGxlc3QgNiBjaGFyYWN0ZXJzIGxvbmdcIjtcclxuICAgICAgbGV0IHNlY29uZFZhbHVlID0gPFRleHRGaWVsZD4gdGhpcy5zdi5uYXRpdmVFbGVtZW50O1xyXG4gICAgICBzZWNvbmRWYWx1ZS5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdWJtaXREYXRhKHJlc3VsdCkge1xyXG4gICAgdGhpcy51c2VySWQgPSB0aGlzLmxvZ2luY2hlY2tTZXJ2aWNlLmdldFVzZXIoKTtcclxuICAgIGNvbnN0IHVzZXJEb2N1bWVudCA9IGZpcmViYXNlLmZpcmVzdG9yZS5jb2xsZWN0aW9uKCd1c2VycycpLmRvYyh0aGlzLnVzZXJJZCk7XHJcbiAgICBpZiAodGhpcy5sYWJlbCA9PSBcIk5hbWVcIikge1xyXG4gICAgICBmaXJlYmFzZS51cGRhdGVQcm9maWxlKHtcclxuICAgICAgICBkaXNwbGF5TmFtZTogdGhpcy52YWx1ZSArIFwiIFwiICsgdGhpcy5zZWNvbmRWYWx1ZVxyXG4gICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlByb2ZpbGUgdXBkYXRlZFwiKVxyXG4gICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgICB9KVxyXG5cclxuICAgICAgdXNlckRvY3VtZW50LnVwZGF0ZSh7XHJcbiAgICAgICAgZmlyc3RfbmFtZTogdGhpcy52YWx1ZSxcclxuICAgICAgICBsYXN0X25hbWU6IHRoaXMuc2Vjb25kVmFsdWVcclxuICAgICAgfSlcclxuXHJcbiAgICAgIHZhciBwb3N0aW5nc0NvbGxlY3Rpb24gPSBmaXJlYmFzZS5maXJlc3RvcmUuY29sbGVjdGlvbigncG9zdGluZ3MnKTtcclxuICAgICAgdmFyIGNoYXRzQ29sbGVjdGlvbiA9IGZpcmViYXNlLmZpcmVzdG9yZS5jb2xsZWN0aW9uKCdjaGF0cycpO1xyXG4gICAgICB1c2VyRG9jdW1lbnQuZ2V0KCkudGhlbihkb2MgPT4ge1xyXG4gICAgICAgIGxldCBwb3N0SWRzID0gZG9jLmRhdGEoKS5wb3N0cztcclxuICAgICAgICBsZXQgY2hhdElkcyA9IGRvYy5kYXRhKCkuY2hhdHM7XHJcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHBvc3RJZHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIHBvc3RpbmdzQ29sbGVjdGlvbi5kb2MocG9zdElkc1tpXSkudXBkYXRlKHtcclxuICAgICAgICAgICAgdXNlcjogdGhpcy52YWx1ZSArIFwiIFwiICsgdGhpcy5zZWNvbmRWYWx1ZVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvcih2YXIgaiA9IDA7IGogPCBjaGF0SWRzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICBjaGF0c0NvbGxlY3Rpb24uZG9jKGNoYXRJZHNbal0pLmdldCgpLnRoZW4oKGRvYykgPT4ge1xyXG4gICAgICAgICAgICBsZXQgdXNlcnMgPSBkb2MuZGF0YSgpLnVzZXJzO1xyXG4gICAgICAgICAgICBmb3IodmFyIGsgPSAwOyBrIDwgdXNlcnMubGVuZ3RoOyBrKyspIHtcclxuICAgICAgICAgICAgICBpZih1c2Vyc1trXS51aWQgPT09IHRoaXMudXNlcklkKSB7XHJcbiAgICAgICAgICAgICAgICB1c2Vyc1trXS5kaXNwbGF5TmFtZSA9IHRoaXMudmFsdWUgKyBcIiBcIiArIHRoaXMuc2Vjb25kVmFsdWU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNoYXRzQ29sbGVjdGlvbi5kb2MoZG9jLmlkKS51cGRhdGUoe1xyXG4gICAgICAgICAgICAgIHVzZXJzOiB1c2Vyc1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdGhpcy5wYXJhbXMuY2xvc2VDYWxsYmFjayhcInVwZGF0ZVwiKVxyXG4gICAgfVxyXG5cclxuICAgIGVsc2UgaWYodGhpcy5sYWJlbCA9PSBcIkVtYWlsXCIpIHtcclxuICAgICAgZmlyZWJhc2UudXBkYXRlRW1haWwocmVzdWx0KS50aGVuKCgpID0+IHtcclxuICAgICAgICB1c2VyRG9jdW1lbnQudXBkYXRlKHtcclxuICAgICAgICAgIGVtYWlsOiByZXN1bHQsXHJcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnBhcmFtcy5jbG9zZUNhbGxiYWNrKFwidXBkYXRlXCIpXHJcbiAgICAgICAgfSlcclxuICAgICAgfSkuY2F0Y2goXHJcbiAgICAgICAgICAoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zaG93RXJyb3IoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZih0aGlzLmxhYmVsID09IFwiUGhvbmUgTnVtYmVyXCIpIHtcclxuICAgICAgdXNlckRvY3VtZW50LnVwZGF0ZSh7XHJcbiAgICAgICAgcGhvbmVfbnVtYmVyOiByZXN1bHQsXHJcbiAgICAgIH0pLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIHRoaXMucGFyYW1zLmNsb3NlQ2FsbGJhY2soXCJ1cGRhdGVcIilcclxuICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIHRoaXMuc2hvd0Vycm9yKCk7XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBlbHNlIGlmKHRoaXMubGFiZWwgPT0gXCJFbnRlciBuZXcgcGFzc3dvcmRcIikge1xyXG4gICAgICBpZih0aGlzLnZhbHVlICE9IHRoaXMuc2Vjb25kVmFsdWUpIHtcclxuICAgICAgICB0aGlzLmVycm9yVGV4dCA9IFwiUGFzc3dvcmRzIGRvIG5vdCBtYXRjaFwiO1xyXG4gICAgICAgIHRoaXMuc2hvd0Vycm9yKCk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgZmlyZWJhc2UudXBkYXRlUGFzc3dvcmQodGhpcy52YWx1ZSkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnBhcmFtcy5jbG9zZUNhbGxiYWNrKFwidXBkYXRlXCIpXHJcbiAgICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgdGhpcy5lcnJvclRleHQgPSBcIlBhc3N3b3JkIG11c3QgYmUgYXQgbGVzdCA2IGNoYXJhY3RlcnMgbG9uZ1wiO1xyXG4gICAgICAgICAgdGhpcy5zaG93RXJyb3IoKTtcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjbG9zZShyZXMpIHtcclxuICAgIHRoaXMucGFyYW1zLmNsb3NlQ2FsbGJhY2socmVzKTtcclxuICB9XHJcblxyXG4gIHNob3dFcnJvcigpIHtcclxuICAgIGxldCBlcnJvck1lc3NhZ2UgPSA8TGFiZWw+IHRoaXMuZW0ubmF0aXZlRWxlbWVudDtcclxuICAgIGVycm9yTWVzc2FnZS5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XHJcbiAgfVxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCJcIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8cD5cXHJcXG4gIHVwZGF0ZSB3b3JrcyFcXHJcXG48L3A+XFxyXFxuXCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBMb2dpbmNoZWNrU2VydmljZSB9IGZyb20gJy4uL2xvZ2luY2hlY2suc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC11cGRhdGUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi91cGRhdGUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3VwZGF0ZS5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFVwZGF0ZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbG9naW5jaGVja1NlcnZpY2U6IExvZ2luY2hlY2tTZXJ2aWNlKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgXHR0aGlzLmxvZ2luY2hlY2tTZXJ2aWNlLmxvZ2luQ2hlY2soKTtcclxuICB9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFVzZXJTZXJ2aWNlIHtcclxuICBcdC8qKlxyXG5cdCogVG8gZ2V0IHRoZSBzZXJ2ZXIgdG8gcmVjb2duaXplIHlvdXIgbW9iaWxlIGRldmljZSwgZmluZCB5b3VyIGlwdjQgYWRkcmVzcyBieSBydW5uaW5nIGlwY29uZmlnIGluIGEgdGVybWluYWwgd2luZG93XHJcblx0KiBhbmQgYWRkIGEgbmV3IHVyaSBsaW5lIHdpdGggeW91ciBpcHY0IGFkZHJlc3MuIERvIHRoaXMgZm9yIG5ldHdvcmtfc2VjdXJpdHlfY29uZmlnLnhtbCwgdXNlci5zZXJ2aWNlcy50bnMudHMsIGFuZFxyXG5cdCogcG9zdGluZy5zZXJ2aWNlLnRucy50cy5cclxuXHQqL1xyXG5cdC8vIEFkYW0ncyB0ZXN0aW5nIHNlcnZlclxyXG5cdC8vIHVyaSA9ICdodHRwOi8vMTkyLjE2OC4xLjc6NDAwMCc7XHJcblx0Ly8gdXJpID0gJ2h0dHA6Ly8xMC41LjExLjI1OjQwMDAnO1xyXG5cdC8vIFBoaWxsaXAncyBUZXN0aW5nIHNlcnZlclxyXG5cdHVyaSA9ICdodHRwOi8vMTkyLjE2OC4xLjM6NDAwMCc7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7IH1cclxuXHJcbiAgZ2V0VXNlcnMoKSB7XHJcbiAgXHRyZXR1cm4gdGhpcy5odHRwLmdldChgJHt0aGlzLnVyaX0vdXNlcnNgKTtcclxuICB9XHJcblxyXG4gIGdldFVzZXJieUlkKGlkKSB7XHJcbiAgXHRyZXR1cm4gdGhpcy5odHRwLmdldChgJHt0aGlzLnVyaX0vdXNlcnMvJHtpZH1gKTtcclxuICB9XHJcblxyXG4gIGFkZFVzZXIobmFtZT0nJywgdXNlcm5hbWU9JycsIGFkZHJlc3M9JycsIGJpcnRoZGF0ZT0nJywgZW1haWw9JycsIGdlbmRlcj0nJywgcGhvbmVfbnVtYmVyPScnLCByaWRlc19naXZlbj1cIjBcIiwgcmlkZXNfcmVjZWl2ZWQ9XCIwXCIpIHtcclxuICBcdGNvbnN0IHVzZXIgPSB7XHJcbiAgXHRcdG5hbWU6IG5hbWUsXHJcbiAgICAgIHVzZXJuYW1lOiB1c2VybmFtZSxcclxuICAgICAgYWRkcmVzczogYWRkcmVzcyxcclxuICAgICAgYmlydGhkYXRlOiBiaXJ0aGRhdGUsXHJcbiAgICAgIGVtYWlsOiBlbWFpbCxcclxuICAgICAgZ2VuZGVyOiBnZW5kZXIsXHJcbiAgICAgIHBob25lX251bWJlcjogcGhvbmVfbnVtYmVyLFxyXG4gICAgICByaWRlc19naXZlbjogcmlkZXNfZ2l2ZW4sXHJcbiAgICAgIHJpZGVzX3JlY2VpdmVkOiByaWRlc19yZWNlaXZlZCxcclxuICAgICAgcGF5bWVudF9pZDogXCJcIlxyXG4gIFx0fTtcclxuICBcdHJldHVybiB0aGlzLmh0dHAucG9zdChgJHt0aGlzLnVyaX0vdXNlcnMvYWRkL2AsIHVzZXIpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlVXNlcihpZCwgbmFtZSwgdXNlcm5hbWUsIGFkZHJlc3MsIGJpcnRoZGF0ZSwgZW1haWwsIGdlbmRlciwgcGhvbmVfbnVtYmVyLCByaWRlc19naXZlbiwgcmlkZXNfcmVjZWl2ZWQsIHBheW1lbnRfaWQpIHtcclxuICBcdGNvbnN0IHVzZXIgPSB7XHJcbiAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgIHVzZXJuYW1lOiB1c2VybmFtZSxcclxuICAgICAgYWRkcmVzczogYWRkcmVzcyxcclxuICAgICAgYmlydGhkYXRlOiBiaXJ0aGRhdGUsXHJcbiAgICAgIGVtYWlsOiBlbWFpbCxcclxuICAgICAgZ2VuZGVyOiBnZW5kZXIsXHJcbiAgICAgIHBob25lX251bWJlcjogcGhvbmVfbnVtYmVyLFxyXG4gICAgICByaWRlc19naXZlbjogcmlkZXNfZ2l2ZW4sXHJcbiAgICAgIHJpZGVzX3JlY2VpdmVkOiByaWRlc19yZWNlaXZlZCxcclxuICAgICAgcGF5bWVudF9pZDogcGF5bWVudF9pZFxyXG4gICAgfTtcclxuICBcdHJldHVybiB0aGlzLmh0dHAucG9zdChgJHt0aGlzLnVyaX0vdXNlcnMvdXBkYXRlLyR7aWR9YCwgdXNlcik7XHJcbiAgfVxyXG5cclxuICBkZWxldGVVc2VyKGlkKSB7XHJcbiAgXHRyZXR1cm4gdGhpcy5odHRwLmdldChgJHt0aGlzLnVyaX0vdXNlcnMvZGVsZXRlLyR7aWR9YCk7XHJcbiAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBVc2VyU2VydmljZSB7XHJcbiAgXHQvKipcclxuXHQqIFRvIGdldCB0aGUgc2VydmVyIHRvIHJlY29nbml6ZSB5b3VyIG1vYmlsZSBkZXZpY2UsIGZpbmQgeW91ciBpcHY0IGFkZHJlc3MgYnkgcnVubmluZyBpcGNvbmZpZyBpbiBhIHRlcm1pbmFsIHdpbmRvd1xyXG5cdCogYW5kIGFkZCBhIG5ldyB1cmkgbGluZSB3aXRoIHlvdXIgaXB2NCBhZGRyZXNzLiBEbyB0aGlzIGZvciBuZXR3b3JrX3NlY3VyaXR5X2NvbmZpZy54bWwsIHVzZXIuc2VydmljZXMudG5zLnRzLCBhbmRcclxuXHQqIHBvc3Rpbmcuc2VydmljZS50bnMudHMuXHJcblx0Ki9cclxuXHQvLyBBZGFtJ3MgdGVzdGluZyBzZXJ2ZXJcclxuXHQvLyB1cmkgPSAnaHR0cDovLzE5Mi4xNjguMS43OjQwMDAnO1xyXG5cdC8vIHVyaSA9ICdodHRwOi8vMTAuNS4xMS4yNTo0MDAwJztcclxuXHQvLyBQaGlsbGlwJ3MgVGVzdGluZyBzZXJ2ZXJcclxuXHR1cmkgPSAnaHR0cDovLzE5Mi4xNjguMS4zOjQwMDAnO1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkgeyB9XHJcblxyXG4gIGdldFVzZXJzKCkge1xyXG4gIFx0cmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy51cml9L3VzZXJzYCk7XHJcbiAgfVxyXG5cclxuICBnZXRVc2VyYnlJZChpZCkge1xyXG4gIFx0cmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy51cml9L3VzZXJzLyR7aWR9YCk7XHJcbiAgfVxyXG5cclxuICBhZGRVc2VyKG5hbWU9JycsIHVzZXJuYW1lPScnLCBhZGRyZXNzPScnLCBiaXJ0aGRhdGU9JycsIGVtYWlsPScnLCBnZW5kZXI9JycsIHBob25lX251bWJlcj0nJywgcmlkZXNfZ2l2ZW49XCIwXCIsIHJpZGVzX3JlY2VpdmVkPVwiMFwiKSB7XHJcbiAgXHRjb25zdCB1c2VyID0ge1xyXG4gIFx0XHRuYW1lOiBuYW1lLFxyXG4gICAgICB1c2VybmFtZTogdXNlcm5hbWUsXHJcbiAgICAgIGFkZHJlc3M6IGFkZHJlc3MsXHJcbiAgICAgIGJpcnRoZGF0ZTogYmlydGhkYXRlLFxyXG4gICAgICBlbWFpbDogZW1haWwsXHJcbiAgICAgIGdlbmRlcjogZ2VuZGVyLFxyXG4gICAgICBwaG9uZV9udW1iZXI6IHBob25lX251bWJlcixcclxuICAgICAgcmlkZXNfZ2l2ZW46IHJpZGVzX2dpdmVuLFxyXG4gICAgICByaWRlc19yZWNlaXZlZDogcmlkZXNfcmVjZWl2ZWQsXHJcbiAgICAgIHBheW1lbnRfaWQ6IFwiXCJcclxuICBcdH07XHJcbiAgXHRyZXR1cm4gdGhpcy5odHRwLnBvc3QoYCR7dGhpcy51cml9L3VzZXJzL2FkZC9gLCB1c2VyKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVVzZXIoaWQsIG5hbWUsIHVzZXJuYW1lLCBhZGRyZXNzLCBiaXJ0aGRhdGUsIGVtYWlsLCBnZW5kZXIsIHBob25lX251bWJlciwgcmlkZXNfZ2l2ZW4sIHJpZGVzX3JlY2VpdmVkLCBwYXltZW50X2lkKSB7XHJcbiAgXHRjb25zdCB1c2VyID0ge1xyXG4gICAgICBuYW1lOiBuYW1lLFxyXG4gICAgICB1c2VybmFtZTogdXNlcm5hbWUsXHJcbiAgICAgIGFkZHJlc3M6IGFkZHJlc3MsXHJcbiAgICAgIGJpcnRoZGF0ZTogYmlydGhkYXRlLFxyXG4gICAgICBlbWFpbDogZW1haWwsXHJcbiAgICAgIGdlbmRlcjogZ2VuZGVyLFxyXG4gICAgICBwaG9uZV9udW1iZXI6IHBob25lX251bWJlcixcclxuICAgICAgcmlkZXNfZ2l2ZW46IHJpZGVzX2dpdmVuLFxyXG4gICAgICByaWRlc19yZWNlaXZlZDogcmlkZXNfcmVjZWl2ZWQsXHJcbiAgICAgIHBheW1lbnRfaWQ6IHBheW1lbnRfaWRcclxuICAgIH07XHJcbiAgXHRyZXR1cm4gdGhpcy5odHRwLnBvc3QoYCR7dGhpcy51cml9L3VzZXJzL3VwZGF0ZS8ke2lkfWAsIHVzZXIpO1xyXG4gIH1cclxuXHJcbiAgZGVsZXRlVXNlcihpZCkge1xyXG4gIFx0cmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy51cml9L3VzZXJzL2RlbGV0ZS8ke2lkfWApO1xyXG4gIH1cclxuXHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi8qIEFkZCBtb2JpbGUgc3R5bGVzIGZvciB0aGUgY29tcG9uZW50IGhlcmUuICAqL1xcclxcbi5pbWcge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4uYWN0aXZpdHktaW5kaWNhdG9yIHtcXHJcXG4gIGNvbG9yOiAjYWMwMGU2O1xcclxcbn1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8UGFnZS5hY3Rpb25CYXI+XFxyXFxuICA8QWN0aW9uQmFyIHRpdGxlPVxcXCJcXFwiIGJhY2tncm91bmRDb2xvcj1cXFwiYmxhY2tcXFwiPlxcclxcbiAgXFx0PE5hdmlnYXRpb25CdXR0b24gdGV4dD1cXFwiR28gQmFja1xcXCIgYW5kcm9pZC5zeXN0ZW1JY29uPVxcXCJpY19tZW51X2JhY2tcXFwiICh0YXApPVxcXCJvbk5hdkJ0blRhcCgpXFxcIj48L05hdmlnYXRpb25CdXR0b24+XFxyXFxuICA8L0FjdGlvbkJhcj5cXHJcXG48L1BhZ2UuYWN0aW9uQmFyPlxcclxcbjwhLS0gPEltYWdlIHNyYz1cXFwie3sgaW1nU291cmNlIH19XFxcIiBjbGFzcz1cXFwiaW1nXFxcIj48L0ltYWdlPiAtLT5cXHJcXG48SW1hZ2Vab29tIHNyYz1cXFwie3sgaW1nU291cmNlIH19XFxcIiBjbGFzcz1cXFwiaW1nXFxcIiAobG9hZGVkKT1cXFwib25JbWFnZUxvYWRlZCgpXFxcIj48L0ltYWdlWm9vbT5cXHJcXG5cXHJcXG48QWN0aXZpdHlJbmRpY2F0b3IgI2FjdGl2aXR5SW5kaWNhdG9yIGJ1c3k9XFxcInRydWVcXFwiIHdpZHRoPVxcXCI0MFxcXCIgIGNsYXNzPVxcXCJhY3Rpdml0eS1pbmRpY2F0b3JcXFwiPlxcclxcbjwvQWN0aXZpdHlJbmRpY2F0b3I+XCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRyYW5zZmVyU2VydmljZSB9IGZyb20gJy4uL2RhdGF0cmFuc2Zlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IEFjdGl2aXR5SW5kaWNhdG9yIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9hY3Rpdml0eS1pbmRpY2F0b3InO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtdmlldy1pbWFnZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3ZpZXctaW1hZ2UuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3ZpZXctaW1hZ2UuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBWaWV3SW1hZ2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRyYW5zZmVyU2VydmljZTogVHJhbnNmZXJTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucykgeyB9XHJcbiAgQFZpZXdDaGlsZChcImFjdGl2aXR5SW5kaWNhdG9yXCIsIHsgc3RhdGljOiB0cnVlIH0pIGFpOiBFbGVtZW50UmVmO1xyXG4gIGltZ1NvdXJjZTtcclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgXHR0aGlzLmltZ1NvdXJjZSA9IHRoaXMudHJhbnNmZXJTZXJ2aWNlLmdldERhdGEoKTtcclxuICBcdGNvbnNvbGUubG9nKHRoaXMuaW1nU291cmNlKTtcclxuICB9XHJcblxyXG4gIG9uTmF2QnRuVGFwKCkge1xyXG4gIFx0aWYodGhpcy5yb3V0ZXIuY2FuR29CYWNrKSB7XHJcbiAgXHRcdHRoaXMucm91dGVyLmJhY2soKTtcclxuICBcdH1cclxuICBcdGVsc2Uge1xyXG4gIFx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ25hdmlnYXRpb24nXSk7XHJcbiAgXHR9XHJcbiAgfVxyXG5cclxuICBvbkltYWdlTG9hZGVkKCkge1xyXG4gIFx0bGV0IGFjdGl2aXR5SW5kaWNhdG9yID0gPEFjdGl2aXR5SW5kaWNhdG9yPiB0aGlzLmFpLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgXHRhY3Rpdml0eUluZGljYXRvci5idXN5ID0gZmFsc2U7XHJcbiAgfVxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCIvKiBBZGQgbW9iaWxlIHN0eWxlcyBmb3IgdGhlIGNvbXBvbmVudCBoZXJlLiAgKi9cXHJcXG4ucGFnZSB7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHZpc2liaWxpdHk6IGNvbGxhcHNlO1xcclxcbn1cXHJcXG4uZm9ybSB7XFxyXFxuICBtYXJnaW4tbGVmdDogMzA7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDMwO1xcclxcbiAgZmxleC1ncm93OiAyO1xcclxcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXHJcXG4gIG1hcmdpbi10b3A6IDEwMDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDUwO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nbyB7XFxyXFxuICAvKm1hcmdpbi10b3A6IDE1OyovXFxyXFxuICBtYXJnaW4tYm90dG9tOiA3MjtcXHJcXG4gIGhlaWdodDogMTIwO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcbi5oZWFkZXIge1xcclxcbiAgaG9yaXpvbnRhbC1hbGlnbjogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAyNTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBtYXJnaW4tYm90dG9tOiA3MDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGNvbG9yOiAjYWMwMGU2O1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXQtZmllbGQge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMjU7XFxyXFxufVxcclxcbi5pbnB1dCB7XFxyXFxuICBmb250LXNpemU6IDE4O1xcclxcbiAgcGxhY2Vob2xkZXItY29sb3I6ICNBOEE4QTg7XFxyXFxufVxcclxcblxcclxcbi5idG4tcHJpbWFyeSB7XFxyXFxuICBoZWlnaHQ6IDUwO1xcclxcbiAgbWFyZ2luOiAzMCA1IDE1IDU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWMwMGU2O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTtcXHJcXG4gIGZvbnQtc2l6ZTogMjA7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLWZiIHtcXHJcXG4gIGhlaWdodDogMTAwO1xcclxcbiAgbWFyZ2luOiAwIDUgMTUgNTtcXHJcXG4gIC8qYm9yZGVyLXJhZGl1czogNTsqL1xcclxcbiAgZm9udC1zaXplOiAyMDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxufVxcclxcblxcclxcbi5sb2dpbi1sYWJlbCB7XFxyXFxuICBob3Jpem9udGFsLWFsaWduOiBjZW50ZXI7XFxyXFxuICBjb2xvcjogI0E4QThBODtcXHJcXG4gIGZvbnQtc2l6ZTogMTY7XFxyXFxuICAvKiBtYXJnaW4tYm90dG9tOiAyMDsgKi9cXHJcXG59XFxyXFxuLnNpZ24tdXAtbGFiZWwge1xcclxcbiAgaG9yaXpvbnRhbC1hbGlnbjogY2VudGVyO1xcclxcbiAgY29sb3I6ICNBOEE4QTg7XFxyXFxuICBmb250LXNpemU6IDE2O1xcclxcbiAgIG1hcmdpbi1ib3R0b206IDIwOyBcXHJcXG59XFxyXFxuLmJvbGQge1xcclxcbiAgY29sb3I6ICMwMDAwMDA7IFxcclxcbn1cXHJcXG4uYWN0aXZpdHktaW5kaWNhdG9yIHtcXHJcXG4gIGNvbG9yOiAjYWMwMGU2O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBAa2V5ZnJhbWVzIHNob3cge1xcclxcbiAgZnJvbSB7IG9wYWNpdHk6IDA7IH1cXHJcXG4gIHRvIHsgb3BhY2l0eTogMTsgfVxcclxcbn1cXHJcXG5cXHJcXG4uZGlhbG9nT3BlbiAuZm9ybSB7XFxyXFxuICBvcGFjaXR5OiAwLjE1O1xcclxcbn1cXHJcXG4uZGlhbG9nT3BlbiAucmVkaXJlY3Qge1xcclxcbiAgb3BhY2l0eTogMC4xNTtcXHJcXG59XFxyXFxuXFxyXFxuLmRpYWxvZ09wZW4gLmRpYWxvZy13cmFwcGVyIHtcXHJcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxyXFxuICBhbmltYXRpb24tbmFtZTogc2hvdztcXHJcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC4zcztcXHJcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcclxcbn1cXHJcXG4uZGlhbG9nLXdyYXBwZXIge1xcclxcbiAgdmlzaWJpbGl0eTogY29sbGFwc2U7XFxyXFxuICBvcGFjaXR5OiAwO1xcclxcbiAgaG9yaXpvbnRhbC1hbGlnbjogY2VudGVyO1xcclxcbiAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmRpYWxvZyB7XFxyXFxuICBib3JkZXItd2lkdGg6IDFweDtcXHJcXG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIHdpZHRoOiA3MCU7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuICBwYWRkaW5nOiAyMDsgXFxyXFxuXFxyXFxufVxcclxcbi5kaWFsb2cgTGFiZWwge1xcclxcbiAgbWFyZ2luOiAwIDE1IDE1IDE1O1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG4uYnRuLWNsb3Nle1xcclxcbiAgaGVpZ2h0OiA1MDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM2OTY5Njk7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1O1xcclxcbiAgZm9udC1zaXplOiAxODtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxufVxcclxcbi5idG4tdmVyaWZ5e1xcclxcbiAgaGVpZ2h0OiA1MDtcXHJcXG4gIG1hcmdpbjogMTUgNSAxNSA1O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FjMDBlNjtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDU7XFxyXFxuICBmb250LXNpemU6IDE4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG59ICovXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPFNjcm9sbFZpZXc+XFxyXFxuXFx0PEdyaWRMYXlvdXQgcm93cz1cXFwiKiwgYXV0b1xcXCIgI3dlbGNvbWVDb250YWluZXIgdmlzaWJpbGl0eT1cXFwiY29sbGFwc2VcXFwiPlxcclxcblxcdFxcdDwhLS0gPEdyaWRMYXlvdXQgcm93cz1cXFwiNjMwLCBhdXRvXFxcIiBbY2xhc3MuZGlhbG9nT3Blbl09XFxcImRpYWxvZ09wZW5cXFwiPiAtLT5cXHJcXG5cXHRcXHQ8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImZvcm1cXFwiIHJvdz1cXFwiMFxcXCIgaGVpZ2h0PVxcXCIxMDAlXFxcIiAjZm9ybUxheW91dD5cXHJcXG5cXHRcXHRcXHQ8SW1hZ2UgY2xhc3M9XFxcImxvZ29cXFwiIHNyYz1cXFwifi9pbWcvbG9nby5wbmdcXFwiPjwvSW1hZ2U+XFxyXFxuXFx0XFx0XFx0PCEtLSA8TGFiZWwgY2xhc3M9XFxcImhlYWRlclxcXCIgdGV4dD1cXFwiQ29sbGVnZVBvb2xcXFwiPjwvTGFiZWw+IC0tPlxcclxcblxcclxcblxcclxcblxcdFxcdFxcdDxTdGFja0xheW91dCAqbmdJZj1cXFwiIWlzTG9nZ2luZ0luXFxcIiBjbGFzcz1cXFwiaW5wdXQtZmllbGRcXFwiPlxcclxcblxcdFxcdFxcdFxcdDxUZXh0RmllbGQgY2xhc3M9XFxcImlucHV0XFxcIiBoaW50PVxcXCJGaXJzdCBuYW1lXFxcIiBbKG5nTW9kZWwpXT1cXFwiZmlyc3ROYW1lXFxcIiByZXR1cm5LZXlUeXBlPVxcXCJuZXh0XFxcIiAjZm4+XFxyXFxuXFx0XFx0XFx0XFx0PC9UZXh0RmllbGQ+XFxyXFxuXFx0XFx0XFx0XFx0PFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJoci1saWdodFxcXCI+PC9TdGFja0xheW91dD5cXHJcXG5cXHRcXHRcXHQ8L1N0YWNrTGF5b3V0PlxcclxcblxcclxcblxcdFxcdFxcdDxTdGFja0xheW91dCAqbmdJZj1cXFwiIWlzTG9nZ2luZ0luXFxcIiBjbGFzcz1cXFwiaW5wdXQtZmllbGRcXFwiPlxcclxcblxcdFxcdFxcdFxcdDxUZXh0RmllbGQgY2xhc3M9XFxcImlucHV0XFxcIiBoaW50PVxcXCJMYXN0IG5hbWVcXFwiIFsobmdNb2RlbCldPVxcXCJsYXN0TmFtZVxcXCIgcmV0dXJuS2V5VHlwZT1cXFwibmV4dFxcXCIgI2xuPlxcclxcblxcdFxcdFxcdFxcdDwvVGV4dEZpZWxkPlxcclxcblxcdFxcdFxcdFxcdDxTdGFja0xheW91dCBjbGFzcz1cXFwiaHItbGlnaHRcXFwiPjwvU3RhY2tMYXlvdXQ+XFxyXFxuXFx0XFx0XFx0PC9TdGFja0xheW91dD5cXHJcXG5cXHJcXG5cXHRcXHRcXHQ8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImlucHV0LWZpZWxkXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHQ8VGV4dEZpZWxkIGNsYXNzPVxcXCJpbnB1dFxcXCIgaGludD1cXFwiRW1haWxcXFwiIGtleWJvYXJkVHlwZT1cXFwiZW1haWxcXFwiIGF1dG9jb3JyZWN0PVxcXCJmYWxzZVxcXCJcXHJcXG5cXHRcXHRcXHRcXHRcXHRhdXRvY2FwaXRhbGl6YXRpb25UeXBlPVxcXCJub25lXFxcIiBbKG5nTW9kZWwpXT1cXFwiZW1haWxcXFwiIHJldHVybktleVR5cGU9XFxcIm5leHRcXFwiXFxyXFxuXFx0XFx0XFx0XFx0XFx0KHJldHVyblByZXNzKT1cXFwiZm9jdXNQYXNzd29yZCgpXFxcIiAjZW0+PC9UZXh0RmllbGQ+XFxyXFxuXFx0XFx0XFx0XFx0PFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJoci1saWdodFxcXCI+PC9TdGFja0xheW91dD5cXHJcXG5cXHRcXHRcXHQ8L1N0YWNrTGF5b3V0PlxcclxcblxcclxcblxcdFxcdFxcdDxTdGFja0xheW91dCBjbGFzcz1cXFwiaW5wdXQtZmllbGRcXFwiPlxcclxcblxcdFxcdFxcdFxcdDxUZXh0RmllbGQgY2xhc3M9XFxcImlucHV0XFxcIiBoaW50PVxcXCJQYXNzd29yZFxcXCIgc2VjdXJlPVxcXCJ0cnVlXFxcIiBbKG5nTW9kZWwpXT1cXFwicGFzc3dvcmRcXFwiXFxyXFxuXFx0XFx0XFx0XFx0XFx0W3JldHVybktleVR5cGVdPVxcXCJpc0xvZ2dpbmdJbiA/ICdkb25lJyA6ICduZXh0J1xcXCIgKHJldHVyblByZXNzKT1cXFwiZm9jdXNDb25maXJtUGFzc3dvcmQoKVxcXCIgI3B3PlxcclxcblxcdFxcdFxcdFxcdDwvVGV4dEZpZWxkPlxcclxcblxcdFxcdFxcdFxcdDxTdGFja0xheW91dCBjbGFzcz1cXFwiaHItbGlnaHRcXFwiPjwvU3RhY2tMYXlvdXQ+XFxyXFxuXFx0XFx0XFx0PC9TdGFja0xheW91dD5cXHJcXG5cXHJcXG5cXHRcXHRcXHQ8QnV0dG9uIFt0ZXh0XT1cXFwiaXNMb2dnaW5nSW4gPyAnTG9nIEluJyA6ICdTaWduIFVwJ1xcXCIgKHRhcCk9XFxcInN1Ym1pdCgpXFxcIlxcclxcblxcdFxcdFxcdFxcdGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnkgbS10LTIwXFxcIj48L0J1dHRvbj5cXHJcXG5cXHRcXHRcXHQ8IS0tIDxCdXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgdGV4dD1cXFwiU2hvdyBEaWFsb2dcXFwiICh0YXApPVxcXCJzaG93RGlhbG9nKClcXFwiPjwvQnV0dG9uPiAtLT5cXHJcXG5cXHRcXHRcXHQ8U3RhY2tMYXlvdXQ+XFxyXFxuXFx0XFx0XFx0XFx0PEZhY2Vib29rTG9naW5CdXR0b24gKHRhcCk9XFxcImZiTG9naW4oKVxcXCIgY2xhc3M9XFxcImJ0bi1mYlxcXCI+PC9GYWNlYm9va0xvZ2luQnV0dG9uPlxcclxcblxcdFxcdFxcdDwvU3RhY2tMYXlvdXQ+XFxyXFxuXFx0XFx0XFx0PExhYmVsICpuZ0lmPVxcXCJpc0xvZ2dpbmdJblxcXCIgdGV4dD1cXFwiRm9yZ290IHlvdXIgcGFzc3dvcmQ/XFxcIiBjbGFzcz1cXFwibG9naW4tbGFiZWxcXFwiXFxyXFxuXFx0XFx0XFx0XFx0KHRhcCk9XFxcImZvcmdvdFBhc3N3b3JkKClcXFwiPjwvTGFiZWw+XFxyXFxuXFx0XFx0PC9TdGFja0xheW91dD5cXHJcXG5cXHRcXHQ8U3RhY2tMYXlvdXQgcm93PVxcXCIxXFxcIiBjbGFzcz1cXFwicmVkaXJlY3RcXFwiPlxcclxcblxcdFxcdFxcdDxMYWJlbCBjbGFzcz1cXFwic2lnbi11cC1sYWJlbFxcXCIgKHRhcCk9XFxcInRvZ2dsZUZvcm0oKVxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0PEZvcm1hdHRlZFN0cmluZz5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8U3BhbiBbdGV4dF09XFxcImlzTG9nZ2luZ0luID8gJ0RvbuKAmXQgaGF2ZSBhbiBhY2NvdW50PyAnIDogJ0JhY2sgdG8gTG9naW4nXFxcIj48L1NwYW4+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PFNwYW4gW3RleHRdPVxcXCJpc0xvZ2dpbmdJbiA/ICdTaWduIHVwJyA6ICcnXFxcIiBjbGFzcz1cXFwiYm9sZFxcXCI+PC9TcGFuPlxcclxcblxcdFxcdFxcdFxcdDwvRm9ybWF0dGVkU3RyaW5nPlxcclxcblxcdFxcdFxcdDwvTGFiZWw+XFxyXFxuXFx0XFx0PC9TdGFja0xheW91dD5cXHJcXG5cXHRcXHQ8IS0tIDxBYnNvbHV0ZUxheW91dCBjbGFzcz1cXFwiZGlhbG9nLXdyYXBwZXJcXFwiPlxcclxcblxcdFxcdFxcdFxcdDxTdGFja0xheW91dCBjbGFzcz1cXFwiZGlhbG9nXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8TGFiZWwgdGV4dFdyYXA9XFxcInRydWVcXFwiXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0dGV4dD1cXFwiWW91ciBlbWFpbCBoYXMgbm90IGJlZW4gdmVyaWZpZWQgeWV0LiBQbGVhc2UgY2hlY2sgeW91ciBlbWFpbCBmb3IgYSB2ZXJpZmljYXRpb24gbGluay4gWW91IG1heSBhbHNvIHJlc2VuZCB0aGUgdmVyaWZpY2F0aW9uIGVtYWlsLlxcXCI+PC9MYWJlbD5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8QnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXZlcmlmeVxcXCIgdGV4dD1cXFwiUmVzZW5kIEVtYWlsXFxcIlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdCh0YXApPVxcXCJzZW5kRW1haWxWZXJpZmljYXRpb24oKVxcXCI+PC9CdXR0b24+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PEJ1dHRvbiBjbGFzcz0gXFxcImJ0bi1jbG9zZVxcXCIgdGV4dD1cXFwiQ2xvc2VcXFwiICh0YXApPVxcXCJjbG9zZURpYWxvZygpXFxcIj48L0J1dHRvbj5cXHJcXG5cXHRcXHRcXHRcXHQ8L1N0YWNrTGF5b3V0PlxcclxcblxcdFxcdFxcdDwvQWJzb2x1dGVMYXlvdXQ+IC0tPlxcclxcblxcdDwvR3JpZExheW91dD5cXHJcXG48L1Njcm9sbFZpZXc+XFxyXFxuPEFjdGl2aXR5SW5kaWNhdG9yICNhY3Rpdml0eUluZGljYXRvciBidXN5PVxcXCJ0cnVlXFxcIiB3aWR0aD1cXFwiNDBcXFwiIGhlaWdodD1cXFwiNDBcXFwiIGNsYXNzPVxcXCJhY3Rpdml0eS1pbmRpY2F0b3JcXFwiPlxcclxcbjwvQWN0aXZpdHlJbmRpY2F0b3I+XCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgRWxlbWVudFJlZiwgVmlld0NoaWxkLCBOZ1pvbmUsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgYWxlcnQsIHByb21wdCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3NcIjtcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvcGFnZSc7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgKiBhcyBmaXJlYmFzZSBmcm9tICduYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlJztcclxuaW1wb3J0IHsgbWVzc2FnaW5nLCBNZXNzYWdlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2UvbWVzc2FnaW5nXCI7XHJcbmltcG9ydCB7IExvZ2luY2hlY2tTZXJ2aWNlIH0gZnJvbSAnLi4vbG9naW5jaGVjay5zZXJ2aWNlLnRucyc7XHJcbmltcG9ydCB7IEFjdGl2aXR5SW5kaWNhdG9yIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9hY3Rpdml0eS1pbmRpY2F0b3InO1xyXG5pbXBvcnQgeyBUcmFuc2ZlclNlcnZpY2UgfSBmcm9tICcuLi9kYXRhdHJhbnNmZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IE1vZGFsRGlhbG9nU2VydmljZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9kaXJlY3RpdmVzL2RpYWxvZ3NcIjtcclxuaW1wb3J0IHsgRm9yZ2V0Rm9ybUNvbXBvbmVudCB9IGZyb20gJy4uL2ZvcmdldC1mb3JtL2ZvcmdldC1mb3JtLmNvbXBvbmVudCc7XHJcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9nc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtd2VsY29tZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3dlbGNvbWUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3dlbGNvbWUuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgV2VsY29tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgaXNMb2dnaW5nSW4gPSB0cnVlO1xyXG4gIGVtYWlsO1xyXG4gIHBhc3N3b3JkO1xyXG4gIGNvbmZpcm1QYXNzd29yZDtcclxuICBmaXJzdE5hbWU7XHJcbiAgbGFzdE5hbWU7XHJcbiAgZGV2aWNlVG9rZW47XHJcbiAgLy8gZGlhbG9nT3BlbiA9IGZhbHNlO1xyXG4gIGZpcmViYXNlQ29uZmlnID0ge1xyXG4gICAgYXBpS2V5OiBcIkFJemFTeUJHdWlZcE0xMzhRNmF5cURNUlVWV0pwMUNFOVdCMDlOd1wiLFxyXG4gICAgYXV0aERvbWFpbjogXCJjb2xsZWdlcG9vbC0xNTUyNzQ5MTE4NjE3LmZpcmViYXNlYXBwLmNvbVwiLFxyXG4gICAgZGF0YWJhc2VVUkw6IFwiaHR0cHM6Ly9jb2xsZWdlcG9vbC0xNTUyNzQ5MTE4NjE3LmZpcmViYXNlaW8uY29tXCIsXHJcbiAgICBwcm9qZWN0SWQ6IFwiY29sbGVnZXBvb2wtMTU1Mjc0OTExODYxN1wiLFxyXG4gICAgc3RvcmFnZUJ1Y2tldDogXCJnczovL2NvbGxlZ2Vwb29sLTE1NTI3NDkxMTg2MTcuYXBwc3BvdC5jb21cIixcclxuICAgIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjM3NTI2MzY4MDE4M1wiLFxyXG4gICAgYXBwSWQ6IFwiMTozNzUyNjM2ODAxODM6d2ViOmYyYWYzZjI4MzU2MzhkN2NcIixcclxuICB9O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2U6IFBhZ2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zLCBwcml2YXRlIGxvZ2luY2hlY2tTZXJ2aWNlOiBMb2dpbmNoZWNrU2VydmljZSwgcHJpdmF0ZSB0cmFuc2ZlclNlcnZpY2U6IFRyYW5zZmVyU2VydmljZSxcclxuICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsIHByaXZhdGUgbW9kYWw6IE1vZGFsRGlhbG9nU2VydmljZSwgcHJpdmF0ZSB2Y1JlZjogVmlld0NvbnRhaW5lclJlZikgeyB9XHJcblxyXG4gIEBWaWV3Q2hpbGQoXCJlbVwiLCB7IHN0YXRpYzogdHJ1ZSB9KSBlbTogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKFwicHdcIiwgeyBzdGF0aWM6IHRydWUgfSkgcHc6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZChcImNwd1wiLCB7IHN0YXRpYzogdHJ1ZSB9KSBjcHc6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZChcImZuXCIsIHsgc3RhdGljOiB0cnVlIH0pIGZuOiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoXCJsblwiLCB7IHN0YXRpYzogdHJ1ZSB9KSBsbjogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKFwid2VsY29tZUNvbnRhaW5lclwiLCB7IHN0YXRpYzogdHJ1ZSB9KSB3YzogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKFwiZm9ybUxheW91dFwiLCB7IHN0YXRpYzogdHJ1ZSB9KSBmbDogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKFwiYWN0aXZpdHlJbmRpY2F0b3JcIiwgeyBzdGF0aWM6IHRydWUgfSkgYWk6IEVsZW1lbnRSZWY7XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5yZWdpc3Rlck5vdGlmaWNhdGlvbnMoKTtcclxuICAgIHRoaXMuY3JlYXRlVmlld3MoKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGNyZWF0ZVZpZXdzKCkge1xyXG4gICAgYXdhaXQgZmlyZWJhc2UuaW5pdCh0aGlzLmZpcmViYXNlQ29uZmlnKS50aGVuKFxyXG4gICAgICAoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJmaXJlYmFzZS5pbml0IGRvbmVcIik7XHJcbiAgICAgIH0sXHJcbiAgICAgIGVycm9yID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgZmlyZWJhc2UuaW5pdCBlcnJvcjogJHtlcnJvcn1gKTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuICAgIGF3YWl0IGZpcmViYXNlLmFkZE9uTWVzc2FnZVJlY2VpdmVkQ2FsbGJhY2soYXN5bmMgKG1lc3NhZ2U6IGFueSkgPT4ge1xyXG4gICAgICBpZihtZXNzYWdlLnR5cGUgPT09IFwiTmV3IE1lc3NhZ2VcIikge1xyXG4gICAgICAgIHRoaXMudHJhbnNmZXJTZXJ2aWNlLnNldERhdGEobWVzc2FnZS5kYXRhLmNoYXRJZCk7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHt0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ2NoYXQnXSwge2NsZWFySGlzdG9yeTogdHJ1ZX0pfSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIGlmICh0aGlzLmxvZ2luY2hlY2tTZXJ2aWNlLmdldFVzZXJGcm9tTG9jYWxTdG9yYWdlKCkgIT0gbnVsbClcclxuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWyduYXZpZ2F0aW9uJ10sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xyXG4gICAgZWxzZSB7XHJcbiAgICAgIHZhciBhY3Rpdml0eUluZGljYXRvciA9IDxBY3Rpdml0eUluZGljYXRvcj50aGlzLmFpLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICAgIGFjdGl2aXR5SW5kaWNhdG9yLmJ1c3kgPSBmYWxzZTtcclxuICAgICAgdGhpcy53Yy5uYXRpdmVFbGVtZW50LnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XHJcbiAgICB9XHJcbiAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHRvZ2dsZUZvcm0oKSB7XHJcbiAgICB0aGlzLmlzTG9nZ2luZ0luID0gIXRoaXMuaXNMb2dnaW5nSW47XHJcbiAgICBpZighdGhpcy5pc0xvZ2dpbmdJbikge1xyXG4gICAgICB0aGlzLmZsLm5hdGl2ZUVsZW1lbnQuc3R5bGUubWFyZ2luVG9wID0gJzM1JztcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICB0aGlzLmZsLm5hdGl2ZUVsZW1lbnQuc3R5bGUubWFyZ2luVG9wID0gJzEwMCc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdWJtaXQoKSB7XHJcbiAgICBpZiAoIXRoaXMuZW1haWwgfHwgIXRoaXMucGFzc3dvcmQpIHtcclxuICAgICAgdGhpcy5hbGVydChcIlBsZWFzZSBwcm92aWRlIGJvdGggYW4gZW1haWwgYWRkcmVzcyBhbmQgcGFzc3dvcmRcIik7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5pc0xvZ2dpbmdJbikge1xyXG4gICAgICB0aGlzLmxvZ2luKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnJlZ2lzdGVyKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBzaG93RGlhbG9nKCkge1xyXG4gIC8vICAgdGhpcy5kaWFsb2dPcGVuID0gdHJ1ZTtcclxuICAvLyB9XHJcblxyXG4gIC8vIGNsb3NlRGlhbG9nKCkge1xyXG4gIC8vICAgdGhpcy5kaWFsb2dPcGVuID0gZmFsc2U7XHJcbiAgLy8gfVxyXG5cclxuICBsb2dpbigpIHtcclxuICAgIHZhciBjcmVkZW50aWFsczogZmlyZWJhc2UuTG9naW5PcHRpb25zID0ge1xyXG4gICAgICBwYXNzd29yZE9wdGlvbnM6IHtcclxuICAgICAgICBlbWFpbDogdGhpcy5lbWFpbCxcclxuICAgICAgICBwYXNzd29yZDogdGhpcy5wYXNzd29yZCxcclxuICAgICAgfSxcclxuICAgICAgdHlwZTogZmlyZWJhc2UuTG9naW5UeXBlLlBBU1NXT1JEXHJcbiAgICB9XHJcbiAgICBmaXJlYmFzZS5sb2dpbihjcmVkZW50aWFscykudGhlbigocmVzKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiRW1haWwgVmVyaWZpZWQgU3RhdHVzXCIsIHJlcy5lbWFpbFZlcmlmaWVkKVxyXG4gICAgICBpZiAocmVzLmVtYWlsVmVyaWZpZWQpIHtcclxuICAgICAgICB0aGlzLmxvZ2luY2hlY2tTZXJ2aWNlLmxvZ2luVXNlcihyZXMudWlkKVxyXG4gICAgICAgIGZpcmViYXNlLmZpcmVzdG9yZS5jb2xsZWN0aW9uKCd1c2VycycpLmRvYyhyZXMudWlkKS5nZXQoKS50aGVuKGRvYyA9PiB7XHJcbiAgICAgICAgICBpZiAoZG9jLmRhdGEoKS5wYXltZW50X2lkID09IG51bGwpXHJcbiAgICAgICAgICAgIHRoaXMubG9naW5jaGVja1NlcnZpY2UuYWRkVXNlclRvQnJhaW50cmVlKHJlcy5kaXNwbGF5TmFtZSwgcmVzLmRpc3BsYXlOYW1lLCByZXMuZW1haWwpXHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLnVwZGF0ZVRva2VucyhyZXMudWlkKTtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ25hdmlnYXRpb24nXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZXtcclxuICAgICAgICBkaWFsb2dzLmNvbmZpcm0oe1xyXG4gICAgICAgICAgdGl0bGU6IFwiRW1haWwgVmVyaWZpY2F0aW9uXCIsXHJcbiAgICAgICAgICBtZXNzYWdlOiBcIllvdXIgZW1haWwgaGFzIG5vdCBiZWVuIHZlcmlmaWVkIHlldC4gUGxlYXNlIGNoZWNrIHlvdXIgZW1haWwgZm9yIGEgdmVyaWZpY2F0aW9uIGxpbmsuIFlvdSBtYXkgYWxzbyByZXNlbmQgdGhlIHZlcmlmaWNhdGlvbiBlbWFpbC5cIixcclxuICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJSZXNlbmQgRW1haWxcIixcclxuICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiQ2xvc2VcIlxyXG4gICAgICB9KS50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkRpYWxvZyByZXN1bHQ6IFwiICsgcmVzdWx0KTtcclxuICAgICAgICAgIGlmKHJlc3VsdCl7XHJcbiAgICAgICAgICAgICAgLy9EbyBhY3Rpb24xXHJcbiAgICAgICAgICAgICAgdGhpcy5zZW5kRW1haWxWZXJpZmljYXRpb24oKTtcclxuICAgICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgICAgLy8gdGhpcy5zaG93RGlhbG9nKCk7XHJcbiAgICAgIH1cclxuICAgIH0pLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgdGhpcy5hbGVydChcIldlIGNvdWxkIG5vdCBmaW5kIGFuIGFjY291bnQgbWF0Y2hpbmcgeW91ciBlbWFpbCBvciBwYXNzd29yZC5cIik7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICByZWdpc3RlcigpIHtcclxuICAgIGlmICh0aGlzLnBhc3N3b3JkICE9IHRoaXMuY29uZmlybVBhc3N3b3JkKSB7XHJcbiAgICAgIHRoaXMuYWxlcnQoXCJZb3VyIHBhc3N3b3JkcyBkbyBub3QgbWF0Y2hcIik7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGZpcmViYXNlLmNyZWF0ZVVzZXIoe1xyXG4gICAgICBlbWFpbDogdGhpcy5lbWFpbCxcclxuICAgICAgcGFzc3dvcmQ6IHRoaXMucGFzc3dvcmQsXHJcbiAgICB9KS50aGVuKChyZXMpID0+IHtcclxuICAgICAgdGhpcy5sb2dpbmNoZWNrU2VydmljZS5hZGRVc2VyVG9GaXJlc3RvcmUocmVzLnVpZCwgbnVsbCwgbnVsbCwgcmVzLmVtYWlsLCB0aGlzLmZpcnN0TmFtZSwgdGhpcy5sYXN0TmFtZSwgbnVsbCwgbnVsbCwgMCwgMCwgJ34vaW1nL3NhbXBsZV9wcm9maWxlLnBuZycsIHRoaXMuZGV2aWNlVG9rZW4pXHJcbiAgICAgIGZpcmViYXNlLnVwZGF0ZVByb2ZpbGUoeyBkaXNwbGF5TmFtZTogdGhpcy5maXJzdE5hbWUgKyAnICcgKyB0aGlzLmxhc3ROYW1lIH0pLnRoZW4oKTtcclxuICAgICAgLy8gdGhpcy5sb2dpbmNoZWNrU2VydmljZS5sb2dpblVzZXIocmVzLnVpZClcclxuICAgICAgdGhpcy5sb2dpbmNoZWNrU2VydmljZS5hZGRVc2VyVG9CcmFpbnRyZWUoJ3Rlc3QnLCAndGVzdCB1c2VyJywgcmVzLmVtYWlsKVxyXG4gICAgICBmaXJlYmFzZS5zZW5kRW1haWxWZXJpZmljYXRpb24oKS50aGVuKFxyXG4gICAgICAgICgpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiRW1haWwgdmVyaWZpY2F0aW9uIHNlbnRcIik7XHJcbiAgICAgICAgICB0aGlzLmFsZXJ0KFwiQW4gZW1haWwgdmVyaWZpY2F0aW9uIGxpbmsgaGFzIGJlZW4gc2VudC4gUGxlYXNlIGNoZWNrIHlvdXIgZW1haWwgZm9yIHRoZSBsaW5rLlwiKVxyXG4gICAgICAgICAgdGhpcy50b2dnbGVGb3JtKCk7XHJcbiAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3Igc2VuZGluZyBlbWFpbCB2ZXJpZmljYXRpb2RuOiBcIiArIGVycik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGlmIChlcnIgPT0gJ0NyZWF0aW5nIGEgdXNlciBmYWlsZWQuIGNvbS5nb29nbGUuZmlyZWJhc2UuYXV0aC5GaXJlYmFzZUF1dGhVc2VyQ29sbGlzaW9uRXhjZXB0aW9uOiBUaGUgZW1haWwgYWRkcmVzcyBpcyBhbHJlYWR5IGluIHVzZSBieSBhbm90aGVyIGFjY291bnQuJylcclxuICAgICAgICB0aGlzLmFsZXJ0KCdUaGVyZSBpcyBhbHJlYWR5IGFuIGFjY291bnQgYXNzb2NpYXRlZCB3aXRoIHRoYXQgZW1haWwnKVxyXG4gICAgICBlbHNlIGlmIChlcnIgPT0gJ0NyZWF0aW5nIGEgdXNlciBmYWlsZWQuIFBhc3N3b3JkIHNob3VsZCBiZSBhdCBsZWFzdCA2IGNoYXJhY3RlcnMnKVxyXG4gICAgICAgIHRoaXMuYWxlcnQoJ1Bhc3N3b3JkIG11c3QgYmUgYXQgbGVhc3QgNiBjaGFyYWN0ZXJzJylcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHNlbmRFbWFpbFZlcmlmaWNhdGlvbigpIHtcclxuICAgIGZpcmViYXNlLnNlbmRFbWFpbFZlcmlmaWNhdGlvbigpLnRoZW4oXHJcbiAgICAgICgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkVtYWlsIHZlcmlmaWNhdGlvbiBzZW50XCIpO1xyXG4gICAgICAgIHRoaXMuYWxlcnQoXCJBbiBlbWFpbCB2ZXJpZmljYXRpb24gbGluayBoYXMgYmVlbiBzZW50LiBQbGVhc2UgY2hlY2sgeW91ciBlbWFpbCBmb3IgdGhlIGxpbmsuXCIpXHJcbiAgICAgICAgLy8gdGhpcy5jbG9zZURpYWxvZygpO1xyXG4gICAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3Igc2VuZGluZyBlbWFpbCB2ZXJpZmljYXRpb2RuOiBcIiArIGVycik7XHJcbiAgICAgIH1cclxuICAgICAgKTtcclxuICB9XHJcblxyXG4gIGZvcmdvdFBhc3N3b3JkKCkge1xyXG5cclxuICAgIGxldCBvcHRpb25zID0ge1xyXG4gICAgICBjb250ZXh0OiB7fSxcclxuICAgICAgZnVsbHNjcmVlbjogdHJ1ZSxcclxuICAgICAgdmlld0NvbnRhaW5lclJlZjogdGhpcy52Y1JlZlxyXG4gICAgICAvLyBhbmltYXRlZDogdHJ1ZSxcclxuICAgICAgLy8gdHJhbnNpdGlvbjogeyBuYW1lOiBcInNsaWRlVG9wXCIgfVxyXG4gIH07XHJcbiAgICB0aGlzLm1vZGFsLnNob3dNb2RhbChGb3JnZXRGb3JtQ29tcG9uZW50LCBvcHRpb25zKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgIGlmKHJlcyA9PSAndXBkYXRlJykge1xyXG4gICAgICAgIC8vIHRoaXMudXBkYXRlTGlzdFZpZXcoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck5vdGlmaWNhdGlvbnMoKSB7XHJcbiAgICBtZXNzYWdpbmcucmVnaXN0ZXJGb3JQdXNoTm90aWZpY2F0aW9ucyh7XHJcbiAgICAgIG9uUHVzaFRva2VuUmVjZWl2ZWRDYWxsYmFjazogKHRva2VuOiBzdHJpbmcpOiB2b2lkID0+IHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkZpcmViYXNlIHBsdWdpbiByZWNlaXZlZCBhIHB1c2ggdG9rZW46IFwiICsgdG9rZW4pO1xyXG4gICAgICAgIHRoaXMuZGV2aWNlVG9rZW4gPSB0b2tlbjtcclxuICAgICAgfSxcclxuXHJcbiAgICAgIG9uTWVzc2FnZVJlY2VpdmVkQ2FsbGJhY2s6IChtZXNzYWdlOiBNZXNzYWdlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJQdXNoIG1lc3NhZ2UgcmVjZWl2ZWQ6IFwiICsgbWVzc2FnZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJNZXNzYWdlIGRhdGE6IFwiICsgbWVzc2FnZS5kYXRhKTtcclxuICAgICAgfSxcclxuXHJcbiAgICAgIC8vIFdoZXRoZXIgeW91IHdhbnQgdGhpcyBwbHVnaW4gdG8gYXV0b21hdGljYWxseSBkaXNwbGF5IHRoZSBub3RpZmljYXRpb25zIG9yIGp1c3Qgbm90aWZ5IHRoZSBjYWxsYmFjay4gQ3VycmVudGx5IHVzZWQgb24gaU9TIG9ubHkuIERlZmF1bHQgdHJ1ZS5cclxuICAgICAgc2hvd05vdGlmaWNhdGlvbnM6IHRydWUsXHJcblxyXG4gICAgICAvLyBXaGV0aGVyIHlvdSB3YW50IHRoaXMgcGx1Z2luIHRvIGFsd2F5cyBoYW5kbGUgdGhlIG5vdGlmaWNhdGlvbnMgd2hlbiB0aGUgYXBwIGlzIGluIGZvcmVncm91bmQuIEN1cnJlbnRseSB1c2VkIG9uIGlPUyBvbmx5LiBEZWZhdWx0IGZhbHNlLlxyXG4gICAgICBzaG93Tm90aWZpY2F0aW9uc1doZW5JbkZvcmVncm91bmQ6IGZhbHNlXHJcbiAgICB9KS50aGVuKCgpID0+IGNvbnNvbGUubG9nKFwiUmVnaXN0ZXJlZCBmb3IgcHVzaFwiKSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVUb2tlbnModWlkKSB7XHJcbiAgICBjb25zdCB1c2VyRG9jdW1lbnQgPSBmaXJlYmFzZS5maXJlc3RvcmUuY29sbGVjdGlvbigndXNlcnMnKS5kb2ModWlkKTtcclxuICAgIHVzZXJEb2N1bWVudC5nZXQoKS50aGVuKGFzeW5jIChkb2MpID0+IHtcclxuICAgICAgbGV0IHRva2VucyA9IGRvYy5kYXRhKCkudG9rZW5zO1xyXG4gICAgICBpZiAodG9rZW5zKSB7XHJcbiAgICAgICAgdG9rZW5zLnB1c2godGhpcy5kZXZpY2VUb2tlbik7XHJcbiAgICAgICAgbGV0IHVwZGF0ZWRUb2tlbnMgPSBBcnJheS5mcm9tKG5ldyBTZXQodG9rZW5zKSk7XHJcbiAgICAgICAgdXNlckRvY3VtZW50LnVwZGF0ZSh7XHJcbiAgICAgICAgICB0b2tlbnM6IHVwZGF0ZWRUb2tlbnNcclxuICAgICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICB1c2VyRG9jdW1lbnQudXBkYXRlKHtcclxuICAgICAgICAgIHRva2VuczogW3RoaXMuZGV2aWNlVG9rZW5dXHJcbiAgICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgY2hhdFByb21pc2UgPSBhd2FpdCB0aGlzLnVwZGF0ZUNoYXRUb2tlbnMoZG9jLmRhdGEoKS5jaGF0cyk7XHJcbiAgICB9KS5jYXRjaCgoZXJyKSA9PiB7IGNvbnNvbGUubG9nKGVycikgfSlcclxuICB9XHJcblxyXG4gIGFzeW5jIHVwZGF0ZUNoYXRUb2tlbnMoY2hhdHMpIHtcclxuICAgIGxldCBjaGF0Q29sbGVjdGlvbiA9IGZpcmViYXNlLmZpcmVzdG9yZS5jb2xsZWN0aW9uKCdjaGF0cycpO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGF0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBjaGF0UHJvbWlzZSA9IGF3YWl0IGNoYXRDb2xsZWN0aW9uLmRvYyhjaGF0c1tpXSkuZ2V0KCkudGhlbihhc3luYyAoZG9jKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdG9rZW5zID0gZG9jLmRhdGEoKS50b2tlbnM7XHJcbiAgICAgICAgdG9rZW5zLnB1c2godGhpcy5kZXZpY2VUb2tlbik7XHJcbiAgICAgICAgY29uc3QgbmV3VG9rZW5zID0gQXJyYXkuZnJvbShuZXcgU2V0KHRva2VucykpO1xyXG4gICAgICAgIGNvbnN0IHVwZGF0ZVByb21pc2UgPSBhd2FpdCBjaGF0Q29sbGVjdGlvbi5kb2MoY2hhdHNbaV0pLnVwZGF0ZSh7IHRva2VuczogbmV3VG9rZW5zIH0pO1xyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZm9jdXNFbWFpbCgpIHtcclxuICAgIHRoaXMuZW0ubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG4gIH1cclxuXHJcbiAgZm9jdXNMYXN0TmFtZSgpIHtcclxuICAgIHRoaXMubG4ubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG4gIH1cclxuXHJcbiAgZm9jdXNQYXNzd29yZCgpIHtcclxuICAgIHRoaXMucHcubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG4gIH1cclxuXHJcbiAgZm9jdXNDb25maXJtUGFzc3dvcmQoKSB7XHJcbiAgICBpZiAoIXRoaXMuaXNMb2dnaW5nSW4gJiYgdGhpcy5jcHcpIHtcclxuICAgICAgdGhpcy5jcHcubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYWxlcnQobWVzc2FnZTogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gYWxlcnQoe1xyXG4gICAgICB0aXRsZTogXCJDb2xsZWdlUG9vbFwiLFxyXG4gICAgICBva0J1dHRvblRleHQ6IFwiQ2xvc2VcIixcclxuICAgICAgbWVzc2FnZTogbWVzc2FnZVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBmYkxvZ2luKCkge1xyXG4gICAgdGhpcy53Yy5uYXRpdmVFbGVtZW50LnN0eWxlLnZpc2liaWxpdHkgPSAnY29sbGFwc2UnO1xyXG4gICAgdmFyIGFjdGl2aXR5SW5kaWNhdG9yID0gPEFjdGl2aXR5SW5kaWNhdG9yPnRoaXMuYWkubmF0aXZlRWxlbWVudDtcclxuICAgIGFjdGl2aXR5SW5kaWNhdG9yLmJ1c3kgPSB0cnVlO1xyXG4gICAgZmlyZWJhc2UubG9naW4oe1xyXG4gICAgICB0eXBlOiBmaXJlYmFzZS5Mb2dpblR5cGUuRkFDRUJPT0ssXHJcbiAgICAgIC8vIE9wdGlvbmFsXHJcbiAgICAgIGZhY2Vib29rT3B0aW9uczoge1xyXG4gICAgICAgIC8vIGRlZmF1bHRzIHRvIFsncHVibGljX3Byb2ZpbGUnLCAnZW1haWwnXVxyXG4gICAgICAgIHNjb3BlczogWydwdWJsaWNfcHJvZmlsZScsICdlbWFpbCcsICd1c2VyX2JpcnRoZGF5JywgJ3VzZXJfZ2VuZGVyJ10gLy8gbm90ZTogdGhpcyBwcm9wZXJ0eSB3YXMgcmVuYW1lZCBmcm9tIFwic2NvcGVcIiBpbiA4LjQuMFxyXG4gICAgICB9XHJcbiAgICB9KS50aGVuKFxyXG4gICAgICAocmVzKSA9PiB7XHJcbiAgICAgICAgZmlyZWJhc2UuZmlyZXN0b3JlLmNvbGxlY3Rpb24oJ3VzZXJzJykuZG9jKHJlcy51aWQpLmdldCgpLnRoZW4oZG9jID0+IHtcclxuICAgICAgICAgIGlmIChkb2MuZXhpc3RzID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9naW5jaGVja1NlcnZpY2UuYWRkVXNlclRvRmlyZXN0b3JlKHJlcy51aWQsIG51bGwsIG51bGwsIHJlcy5lbWFpbCwgcmVzLmFkZGl0aW9uYWxVc2VySW5mby5wcm9maWxlWydmaXJzdF9uYW1lJ10sIHJlcy5hZGRpdGlvbmFsVXNlckluZm8ucHJvZmlsZVsnbGFzdF9uYW1lJ10sIG51bGwsIG51bGwsIDAsIDAsIHJlcy5waG90b1VSTCwgdGhpcy5kZXZpY2VUb2tlbik7XHJcbiAgICAgICAgICAgIHRoaXMubG9naW5jaGVja1NlcnZpY2UuYWRkVXNlclRvQnJhaW50cmVlKHJlcy5kaXNwbGF5TmFtZSwgcmVzLmRpc3BsYXlOYW1lLCByZXMuZW1haWwpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbHNlIGlmIChkb2MuZGF0YSgpLnBheW1lbnRfaWQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLmxvZ2luY2hlY2tTZXJ2aWNlLmFkZFVzZXJUb0JyYWludHJlZShyZXMuZGlzcGxheU5hbWUsIHJlcy5kaXNwbGF5TmFtZSwgcmVzLmVtYWlsKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVG9rZW5zKHJlcy51aWQpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5sb2dpbmNoZWNrU2VydmljZS5sb2dpblVzZXIocmVzLnVpZClcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ25hdmlnYXRpb24nXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIChlcnJvck1lc3NhZ2UpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvck1lc3NhZ2UpO1xyXG4gICAgICAgIHRoaXMud2MubmF0aXZlRWxlbWVudC5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG5cclxuICB9XHJcblxyXG59XHJcbiIsIi8vIHRoaXMgaW1wb3J0IHNob3VsZCBiZSBmaXJzdCBpbiBvcmRlciB0byBsb2FkIHNvbWUgcmVxdWlyZWQgc2V0dGluZ3MgKGxpa2UgZ2xvYmFscyBhbmQgcmVmbGVjdC1tZXRhZGF0YSlcclxuaW1wb3J0IHsgcGxhdGZvcm1OYXRpdmVTY3JpcHREeW5hbWljIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcGxhdGZvcm0nO1xyXG5cclxuXHJcbmltcG9ydCB7IEFwcE1vZHVsZSB9IGZyb20gJy4vYXBwL2FwcC5tb2R1bGUnO1xyXG5pbXBvcnQge3JlZ2lzdGVyRWxlbWVudH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2VsZW1lbnQtcmVnaXN0cnlcIjtcclxuXHJcbnJlZ2lzdGVyRWxlbWVudChcIlJpcHBsZVwiLCAoKSA9PiByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXJpcHBsZVwiKS5SaXBwbGUpO1xyXG4vLyBpbXBvcnQgQW1wbGlmeSBmcm9tIFwiQGF3cy1hbXBsaWZ5L2NvcmVcIjtcclxuLy8gcmVxdWlyZSgnbmF0aXZlc2NyaXB0LW5vZGVpZnknKVxyXG4vLyBpbXBvcnQgYXdzY29uZmlnIGZyb20gJy4vYXdzLWV4cG9ydHMnO1xyXG5cclxuLy8gQW1wbGlmeS5jb25maWd1cmUoYXdzY29uZmlnKTtcclxuXHJcbi8vIEEgdHJhZGl0aW9uYWwgTmF0aXZlU2NyaXB0IGFwcGxpY2F0aW9uIHN0YXJ0cyBieSBpbml0aWFsaXppbmcgZ2xvYmFsIG9iamVjdHMsIHNldHRpbmcgdXAgZ2xvYmFsIENTUyBydWxlcywgY3JlYXRpbmcsIGFuZCBuYXZpZ2F0aW5nIHRvIHRoZSBtYWluIHBhZ2UuIFxyXG4vLyBBbmd1bGFyIGFwcGxpY2F0aW9ucyBuZWVkIHRvIHRha2UgY2FyZSBvZiB0aGVpciBvd24gaW5pdGlhbGl6YXRpb246IG1vZHVsZXMsIGNvbXBvbmVudHMsIGRpcmVjdGl2ZXMsIHJvdXRlcywgREkgcHJvdmlkZXJzLiBcclxuLy8gQSBOYXRpdmVTY3JpcHQgQW5ndWxhciBhcHAgbmVlZHMgdG8gbWFrZSBib3RoIHBhcmFkaWdtcyB3b3JrIHRvZ2V0aGVyLCBzbyB3ZSBwcm92aWRlIGEgd3JhcHBlciBwbGF0Zm9ybSBvYmplY3QsIHBsYXRmb3JtTmF0aXZlU2NyaXB0RHluYW1pYywgXHJcbi8vIHRoYXQgc2V0cyB1cCBhIE5hdGl2ZVNjcmlwdCBhcHBsaWNhdGlvbiBhbmQgY2FuIGJvb3RzdHJhcCB0aGUgQW5ndWxhciBmcmFtZXdvcmsuXHJcbnBsYXRmb3JtTmF0aXZlU2NyaXB0RHluYW1pYygpLmJvb3RzdHJhcE1vZHVsZShBcHBNb2R1bGUpO1xyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=