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

module.exports = "/* Add mobile styles for the component here.  */\n.close {\n\tmargin: 10;\n\tfont-size: 28;\n\twidth: 48;\n\theight: 48;\n}\n\n.close-button-container {\n\tposition: absolute;\n\tleft: 0;\n}\n\n/* styles from payments.component.css */\n\n#form {\n    margin: auto;\n    width: 600px;\n    height: 400px;\n    background-color: #ffffff;\n    position: relative;\n    top: 30px;\n    border-radius: 4px;\n    box-shadow: 0 1px 4px 0 rgba(0,0,0,0.37);\n}\n\n#payment-form {\n    margin: auto;\n    width: 600px;\n    height: 400px;\n    background-color: #ffffff;\n    position: relative;\n    top: 30px;\n    border-radius: 4px;\n    box-shadow: 0 1px 4px 0 rgba(0,0,0,0.37);\n    display: none;\n}\n\n#card-form {\n    margin: auto;\n    width: 400px;\n    background-color: #580968;\n    position: relative;\n    top: 25%;\n    box-shadow: 0 1px 4px 0 rgba(0,0,0,0.37);\n    font-weight: 400;\n    z-index: 1;\n}\n\n#paypal-form {\n    margin: auto;\n    width: 400px;\n    height: 200px;\n    background-color: #ffffff;\n    position: relative;\n    top: 25%;\n    box-shadow: 0 1px 4px 0 rgba(0,0,0,0.37);\n    font-weight: 400;\n    z-index: 1;\n}\n\n#venmo-form {\n    margin: auto;\n    width: 400px;\n    height: 200px;\n    background-color: #ffffff;\n    position: relative;\n    top: 25%;\n    box-shadow: 0 1px 4px 0 rgba(0,0,0,0.37);\n    font-weight: 400;\n    z-index: 1;\n}\n\n#error-form {\n    margin: auto;\n    width: 400px;\n    height: 200px;\n    background-color: #ffffff;\n    position: relative;\n    top: 25%;\n    box-shadow: 0 1px 4px 0 rgba(0,0,0,0.37);\n    font-weight: 400;\n    z-index: 1;\n}\n\n#edit-form {\n    margin: auto;\n    width: 400px;\n    height: 200px;\n    background-color: #ffffff;\n    position: relative;\n    top: 25%;\n    box-shadow: 0 1px 4px 0 rgba(0,0,0,0.37);\n    font-weight: 400;\n    z-index: 1;\n}\n\n.payment-methods {\n\toverflow: hidden;\n    width: 300px;\n    margin: auto;\n    margin-left: 40px;\n}\n\n#modal-payment-methods {\n\tmargin-left: 24px;\n}\n\n#paypal-header-container {\n\tbackground-color: #580968;\n}\n\n#error-header-container {\n\tdisplay: none;\n\tbackground-color: #890000;\n}\n\n#edit-header-container {\n\tbackground-color: #580968;\n}\n\n.colored-header {\n\tcolor: white;\n\tfont-weight: 400;\n}\n\n#method-information-text {\n\tmargin-left: 40px;\n\tmargin-top: 32px;\n\tfont-size: 16px;\n}\n\n.payment-footer-button{\n    display: inline-block;\n    background-color: #ffffff;\n    color: #ac00e6;\n    border: none;\n    outline: none;\n    text-align: center;\n    margin-left: 34px;\n    margin-bottom: 5px;\n}\n\n#paypal-button {\n\twidth: 350px;\n\tmargin: auto;\n\tmargin-top: 32px;\n}\n\n#add-card-button {\n\tfloat: right;\n\tmargin-right: 34px;\n\tdisplay: none;\n}\n\n#remove-payment-button {\n\tfloat: right;\n\tmargin-right: 34px;\n}\n\n.plus-sign {\n\tvertical-align: middle;\n\tfont-size: 30px;\n\tmargin-right: 7px;\n\tcursor: pointer;\n}\n\n.payment-footer-text {\n\tvertical-align: middle;\n\tline-height: 42px;\n\tfont-weight: 400;\n\tfont-size: 13px;\n\tcursor: pointer;\n}\n\n.payment-footer-text:hover {\n\ttext-decoration: underline;\n}\n\n.payments-bottom-add-container {\n\tposition: absolute;\n\twidth: 100%;\n\tbottom: 0;\n}\n\n/* Other modal styling in styles.css */\n.close-modal {\n\tfont-size: 24px;\n\tmargin-right: 20px;\n\tcursor: pointer;\n}\n\n/*--------------------\nShared Variables\n--------------------*/\n/*--------------------\nGeneral\n--------------------*/\nhtml,\nbody {\n  font-size: 100%;\n  height: 100%;\n  color: #282c37;\n  font-family: sans-serif;\n  padding: 0;\n  margin: 0;\n}\n\n.form-container {\n  display: flex;\n  background-color: #EEE;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  flex-direction: column;\n  border: 1em solid #fff;\n  box-sizing: border-box;\n  position: relative;\n}\n@media (max-width: 476px) {\n  .form-container {\n    border: none;\n  }\n}\n\n.cardinfo-wrapper {\n  display: flex;\n  justify-content: space-around;\n}\n\n.bg-illustration {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  z-index: 0;\n}\n.bg-illustration svg {\n  width: 100%;\n}\n\n.card-shape, #my-sample-form.visa, #my-sample-form.master-card, #my-sample-form.maestro, #my-sample-form.american-express, #my-sample-form.discover, #my-sample-form.unionpay, #my-sample-form.jcb, #my-sample-form.diners-club {\n  border-radius: 6px;\n  padding: 2em 2em 1em;\n}\n@media (max-width: 476px) {\n  .card-shape, #my-sample-form.visa, #my-sample-form.master-card, #my-sample-form.maestro, #my-sample-form.american-express, #my-sample-form.discover, #my-sample-form.unionpay, #my-sample-form.jcb, #my-sample-form.diners-club {\n    padding: 2em 1.5em 1em;\n  }\n}\n\n#payment-card-form {\n  background-color: #FFF;\n  /*box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12);*/\n  padding: 1em 3em 3em;\n  margin-bottom: 2em;\n/*  transition: all 600ms cubic-bezier(0.2, 1.3, 0.7, 1);\n  -webkit-animation: cardIntro 500ms cubic-bezier(0.2, 1.3, 0.7, 1);\n          animation: cardIntro 500ms cubic-bezier(0.2, 1.3, 0.7, 1);*/\n  /*z-index: 1;*/\n}\n#my-sample-form:hover {\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.06);\n}\n@media (max-width: 476px) {\n  #my-sample-form {\n    box-sizing: border-box;\n    padding: 7em 2em 2em;\n    width: 100%;\n  }\n}\n#my-sample-form.visa {\n  color: #fff;\n  background-color: #0D4AA2;\n}\n#my-sample-form.master-card {\n  color: #fff;\n  background-color: #363636;\n  background: linear-gradient(115deg, #d82332, #d82332 50%, #f1ad3d 50%, #f1ad3d);\n}\n#my-sample-form.maestro {\n  color: #fff;\n  background-color: #363636;\n  background: linear-gradient(115deg, #009ddd, #009ddd 50%, #ed1c2e 50%, #ed1c2e);\n}\n#my-sample-form.american-express {\n  color: #fff;\n  background-color: #007CC3;\n}\n#my-sample-form.discover {\n  color: #fff;\n  background-color: #ff6000;\n  background: linear-gradient(#d14310, #f7961e);\n}\n#my-sample-form.unionpay, #my-sample-form.jcb, #my-sample-form.diners-club {\n  color: #fff;\n  background-color: #363636;\n}\n\n.cardinfo-label {\n  display: block;\n  font-size: 11px;\n  margin-bottom: 0.5em;\n  text-transform: uppercase;\n}\n\n.cardinfo-exp-date {\n  margin-right: 1em;\n  width: 100%;\n}\n\n.cardinfo-cvv {\n  width: 100%;\n}\n\n.cardinfo-card-number {\n  position: relative;\n}\n\n#cardImage {\n  position: absolute;\n  top: 2em;\n  right: 1em;\n  width: 44px;\n  height: 28px;\n  background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/346994/card_sprite.png);\n  background-size: 86px 458px;\n  border-radius: 4px;\n  background-position: -100px 0;\n  background-repeat: no-repeat;\n  margin-bottom: 1em;\n}\n#cardImage.visa {\n  background-position: 0 -398px;\n}\n#cardImage.master-card {\n  background-position: 0 -281px;\n}\n#cardImage.american-express {\n  background-position: 0 -370px;\n}\n#cardImage.discover {\n  background-position: 0 -163px;\n}\n#cardImage.maestro {\n  background-position: 0 -251px;\n}\n#cardImage.jcb {\n  background-position: 0 -221px;\n}\n#cardImage.diners-club {\n  background-position: 0 -133px;\n}\n\n/*--------------------\nInputs \n--------------------*/\n.input-wrapper {\n  border-radius: 2px;\n  background: rgba(255, 255, 255, 0.86);\n  height: 2.75em;\n  border: 1px solid #eee;\n  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.06);\n  padding: 5px 10px;\n  margin-bottom: 1em;\n}\n\n.cardinfo-card-number,\n.cardinfo-exp-date,\n.cardinfo-cvv {\n  transition: -webkit-transform 0.3s;\n  transition: transform 0.3s;\n  transition: transform 0.3s, -webkit-transform 0.3s;\n}\n\n.braintree-hosted-fields-focused {\n  border-color: #5db6e8;\n}\n\n.braintree-hosted-fields-invalid {\n  border-color: #E53A40;\n/*  -webkit-animation: shake 500ms cubic-bezier(0.2, 1.3, 0.7, 1) both;\n          animation: shake 500ms cubic-bezier(0.2, 1.3, 0.7, 1) both;*/\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  -webkit-perspective: 1000px;\n          perspective: 1000px;\n}\n\n.loader {\n  border: 16px solid #f3f3f3; /* Light grey */\n  border-top: 16px solid #ac00e6; /* Purple */\n  border-radius: 50%;\n  width: 120px;\n  height: 120px;\n  animation: spin 2s linear infinite;\n  margin: auto;\n}\n\n#loading-circle {\n  top: 12%;\n  left: 30%;\n  position: absolute;\n}\n\n#list-loading-circle {\n\tmargin-top: 50px;\n}\n\n/*--------------------\nAnimations\n--------------------*/\n@keyframes spin {\n  0% { transform: rotate(0deg); }\n  100% { transform: rotate(360deg); }\n}\n\n@-webkit-keyframes shake {\n  10%,\n  90% {\n    -webkit-transform: translate3d(-1px, 0, 0);\n            transform: translate3d(-1px, 0, 0);\n  }\n  20%,\n  80% {\n    -webkit-transform: translate3d(1px, 0, 0);\n            transform: translate3d(1px, 0, 0);\n  }\n  30%,\n  50%,\n  70% {\n    -webkit-transform: translate3d(-3px, 0, 0);\n            transform: translate3d(-3px, 0, 0);\n  }\n  40%,\n  60% {\n    -webkit-transform: translate3d(3px, 0, 0);\n            transform: translate3d(3px, 0, 0);\n  }\n}\n@keyframes shake {\n  10%,\n  90% {\n    -webkit-transform: translate3d(-1px, 0, 0);\n            transform: translate3d(-1px, 0, 0);\n  }\n  20%,\n  80% {\n    -webkit-transform: translate3d(1px, 0, 0);\n            transform: translate3d(1px, 0, 0);\n  }\n  30%,\n  50%,\n  70% {\n    -webkit-transform: translate3d(-3px, 0, 0);\n            transform: translate3d(-3px, 0, 0);\n  }\n  40%,\n  60% {\n    -webkit-transform: translate3d(3px, 0, 0);\n            transform: translate3d(3px, 0, 0);\n  }\n}\n\n"

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

module.exports = "/* Add mobile styles for the component here.  */\n.close {\n\tmargin: 10;\n\tfont-size: 28;\n\twidth: 48;\n\theight: 48;\n}\n\n.close-button-container {\n\tposition: absolute;\n\tleft: 0;\n}\n\n.payment-type-icon {\n\theight: 34;\n\twidth: 34;\n\tbackground-position: center;\n\tmargin-top: 18;\n\tmargin-bottom: 18;\n\tmargin-left: 36;\n}\n\n.payment-info-label {\n\tfont-size: 16;\n\t/*font-weight: 700;*/\n\tpadding: 30;\n\ttext-align: center;\n\tcolor: black;\n}"

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

module.exports = "/* Add mobile styles for the component here.  */\nLabel {\n\ttext-align: left;\n}\n\n.name-label {\n\tmargin-top: 16;\n\tmargin-left: 18;\n\tcolor: black;\n\tfont-weight: 700;\n\tfont-size: 17;\n}\n\n.info-label {\n\tmargin-top: 4;\n\tmargin-left: 18;\n\tmargin-bottom: 16;\n\tcolor: #696969;\n}\n\n.profile-picture {\n\theight: 60;\n\twidth: 60;\n\tborder-radius: 100%;\n\tvertical-align: center;\n\tmargin-left: 16;\n\tmargin-top: 14;\n\tmargin-bottom: 14;\n}\n\n.message {\n\tborder-bottom-width: 1;\n\tborder-color: #f1f1f1;\n\tmargin-top: 50;\n\tmargin-bottom: 50;\n}\n\n.refresh {\n\tcolor: #ac00e6;\n}"

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

module.exports = "/* Add mobile styles for the component here.  */\nButton {\n    padding: 5;\n    margin: 5;\n    background-color: dodgerblue;\n    color: white;\n    height: 40;\n    border-radius: 5;\n}\n\n.chat-button {\n\tpadding-left: 5;\n\tpadding-right: 5;\n\tmargin: 5;\n\theight: 20;\n\twidth: 20;\n}\n\n.img-button {\n\tmargin: 5;\n\tmargin-left: 3;\n\tmargin-right: 7;\n\theight: 20;\n\twidth: 20;\n}\n\n.chat-text-field {\n    padding: 5; \n    /*background-color: white; */\n    /*border-radius: 4;*/\n    /*bottom-border-color: #696969;*/\n}\n\n.author-img {\n    margin: 0 5 5 5;\n    margin-bottom: 0;\n    width: 40;\n    height: 40;\n    border-radius: 20;\n    background-color: lightgray;\n}\n\n.img {\n\tmargin: 5;\n\tborder-radius: 10;\n\tbackground-color: lightgray;\n}\n\n.theirsImg {\n\tmargin: 5;\n\tmargin-left: 52;\n\tborder-radius: 10;\n\tbackground-color: lightgray;\n}\n\n.mine {\n    background-color: #ac00e6;\n    color: white;\n    padding: 8;\n    padding-left: 14;\n    padding-right: 14;\n    margin-right: 10;\n    border-radius: 15;\n    border-bottom-right-radius: 5;\n    border-bottom-left-radius: 15;\n    font-size: 16;\n    max-width: 60%;\n    text-align: left;\n    /*margin-bottom: 12;*/\n}\n\n.mineContinuation {\n\tmargin-bottom: 0;\n\tborder-bottom-right-radius: 15;\n}\n\n.mineContinuationGrid {\n\tfont-size: 14;\n    padding: 5;\n\tpadding-top: 0;\n\tpadding-bottom: 1;\n}\n\n.mineTime {\n\tmargin-right: 10;\n\tmargin-bottom: 5;\n}\n\n.theirsTime {\n\tmargin-left: 52;\n\tmargin-bottom: 5;\n}\n\n.time {\n\tvisibility: collapse;\n\tdisplay: none;\n}\n\n.theirs {\n    background-color: #e0e0e0;\n    color: #333;\n    padding: 7;\n    padding-left: 14;\n    padding-right: 14;\n    border-radius: 15;\n    border-bottom-left-radius: 5;\n    border-bottom-right-radius: 15;\n    margin-right: 40;\n    font-size: 16;\n    max-width: 60%;\n    text-align: left;\n    /*margin-bottom: 12;*/\n}\n\n.theirsContinuation {\n\tmargin-left: 52;\n\tmargin-bottom: 0;\n\tborder-bottom-left-radius: 15;\n}\n\n.theirsContinuationGrid {\n\tfont-size: 14;\n    padding: 5;\n\tpadding-top: 0;\n\tpadding-bottom: 1;\n}\n\n.grid {\n    font-size: 14;\n    padding: 5;\n    padding-top: 0;\n    padding-bottom: 8;\n}\n\n.chat-box-layout {\n\tborder-color: #f1f1f1;\n\tborder-top-width: 1;\n}\n\n.activity-indicator {\n  color: #ac00e6;\n}"

/***/ }),

/***/ "./app/chat/chat.component.html":
/***/ (function(module, exports) {

module.exports = "<Page.actionBar>\r\n    <ActionBar title=\"{{ chatName }}\" android:horizontalAlignment=\"center\" ios:horizontalAlignment=\"center\">\r\n    \t<NavigationButton text=\"Go Back\" android.systemIcon=\"ic_menu_back\" (tap)=\"onNavBtnTap()\"></NavigationButton>\r\n\t    <ActionItem (tap)=\"onLeave()\"\r\n\t      ios.systemIcon=\"9\" ios.position=\"right\"\r\n\t      text=\"Leave chat\" android.position=\"popup\"></ActionItem>\r\n    </ActionBar>\r\n</Page.actionBar>\r\n\r\n<GridLayout rows=\"*, auto\" #chatContainer>\r\n    <ListView margin-bottom=\"50\" padding=\"5\" #messageList [items]=\"messages\" separatorColor=\"transparent\" (itemLoading)=\"loadMoreData($event)\" (setupItemView)=\"setupItemView($event)\" row=\"0\">\r\n        <ng-template let-item=\"item\" let-i=\"index\" let-mine=\"mine\" let-theirs=\"theirs\" let-mineContinuation=\"mineContinuation\" let-theirsContinuation=\"theirsContinuation\" let-mineContinuationGrid=\"mineContinuationGrid\" let-theirsContinuationGrid=\"theirsContinuationGrid\" let-grid=\"grid\" let-mineTime=\"mineTime\" let-theirsTime=\"theirsTime\" let-time=\"time\" let-theirsImg=\"theirsImg\" let-img=\"img\">\r\n            <StackLayout width=\"80%\" [class.mineContinuationGrid]=\"mineContinuationGrid\" [class.theirsContinuationGrid]=\"theirsContinuationGrid\" [class.grid]=\"grid\">\r\n                <StackLayout orientation=\"horizontal\" [horizontalAlignment]=\"align(item)\">\r\n                    <Image [visibility]=\"item.visibility\" class=\"author-img\" stretch=\"aspectFill\" height=\"40\" width=\"40\" verticalAlignment=\"bottom\" [src]=\"item.chatMessage.pfpSource\" col=\"1\"></Image>\r\n                    <Label [visibility]=\"textVisibility(item)\" [text]='item.chatMessage.message' [class.mine]=\"mine\" [class.theirs]=\"theirs\" [class.mineContinuation]=\"mineContinuation\" [class.theirsContinuation]=\"theirsContinuation\" textWrap=\"true\" verticalAlignment=\"top\"></Label>\r\n                    <Image [visibility]=\"imgVisibility(item)\" [class.theirsImg]=\"theirsImg\" [class.img]=\"img\" stretch=\"none\" minWidth=\"360\" minHeight=\"200\" decodeWidth=\"360\" decodeHeight=\"200\" maxHeight=\"400\" verticalAlignment=\"bottom\" [src]=\"item.chatMessage.imgSource\" col=\"1\" (tap)=\"toViewImage(item.chatMessage.imgSource)\"></Image>\r\n                </StackLayout>\r\n                <Label [text]='item.formattedTime' [horizontalAlignment]=\"align(item)\" [class.mineTime]=\"mineTime\" [class.theirsTime]=\"theirsTime\" [class.time]=\"time\"></Label>\r\n            </StackLayout>\r\n        </ng-template>\r\n    </ListView>\r\n\r\n    <StackLayout #chatbox row=\"1\" class=\"chat-box-layout\">\r\n\t        <GridLayout columns=\"auto,*,auto\" style=\"padding: 10\">\r\n\t        \t<Image class=\"img-button\" row=\"0\" col=\"0\" src=\"~/img/img_icon_2.png\" (tap)=openImages()></Image>\r\n\t            <TextView #textfield height=\"auto\" maxHeight=\"100\" hint=\"Start a message\" class=\"chat-text-field\" row=\"0\" col=\"1\" autocorrect=\"true\" [(ngModel)]=\"message\" (tap)=\"onTextTap()\"></TextView>\r\n\t            <Image #btn class=\"chat-button\" row=\"0\" col=\"2\" src=\"~/img/send_message_icon_2.png\" (tap)=sendMessage()></Image>\r\n\t        </GridLayout>\r\n\r\n    </StackLayout>\r\n</GridLayout>\r\n\r\n<ActivityIndicator #activityIndicator busy=\"true\" width=\"40\" height=\"40\" class=\"activity-indicator\">\r\n</ActivityIndicator>"

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

module.exports = "/* Add mobile styles for the component here.  */\n.delete-btn {\n    display: block;\n    color: #ac00e6;\n    /*padding: 6px 24px;*/\n    border-width: 1;\n    border-color: #ac00e6;\n    border-radius: 5;\n    text-align: center;\n    float: center;\n    margin: auto; \n    font-weight: 700;\n    font-family: \"Segoe UI\",Arial,sans-serif;\n    margin-bottom: 15;\n    margin-right: 15;\n    width: 120;\n    height: 40;\n    horizontal-align:right;\n}\n\n.delete-btn:highlighted {\n    background-color: #f9e6ff;\n}\n\n.cancel-btn {\n    display: block;\n    /*color: white;*/\n    /*padding: 6px 24px;*/\n    border-width: 1;\n    border-color: black;\n    border-radius: 5;\n    text-align: center;\n    float: center;\n    margin: auto; \n    font-weight: 700;\n    font-family: \"Segoe UI\",Arial,sans-serif;\n    margin-bottom: 15;\n    margin-left: 15;\n    width: 120;\n    height: 40;\n    horizontal-align:left;\n}\n\n.cancel-btn:highlighted {\n    background-color: #f1f1f1;\n}\n\n.delete-label {\n\tfont-size: 20;\n\tmargin-top: 18;\n\tmargin-bottom: 48;\n\tmargin-left: 18;\n\tmargin-right: 18;\n\tcolor: black;\n}"

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

module.exports = "/*\nAdd your NativeScript specific styles here.\nTo learn more about styling in NativeScript see:\nhttps://docs.nativescript.org/angular/ui/styling\n*/"

/***/ }),

/***/ "./app/connect/connect.component.html":
/***/ (function(module, exports) {

module.exports = "<StackLayout>\n  <Label text=\"connect works\" textWrap=\"true\"></Label>\n  <Label text=\"This is a migrated component\" textWrap=\"true\"></Label>\n  <Label text=\"Update it to provide the UI elements required in your mobile app\" textWrap=\"true\"></Label>\n</StackLayout>\n\n<!--\nOriginal Web template:\n\n<p>\r\n  connect works!\r\n</p>\r\n\n-->"

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

module.exports = "/*\nAdd your NativeScript specific styles here.\nTo learn more about styling in NativeScript see:\nhttps://docs.nativescript.org/angular/ui/styling\n*/\n\n.actionbar {\n\tfont-size: 22;\n\tfont-weight: 700;\n\ttext-align: left;\n\tcolor: black;\n}\n\nLabel {\n\ttext-align: left;\n}\n\n.name-label {\n\tmargin-top: 16;\n\tmargin-left: 18;\n\tcolor: black;\n\tfont-weight: 700;\n\tfont-size: 17;\n}\n\n.info-label {\n\tmargin-top: 4;\n\tmargin-left: 18;\n\tmargin-bottom: 16;\n\tcolor: black;\n}\n\n.post {\n\tborder-bottom-width: 1;\n\tborder-color: #f1f1f1;\n\tmargin-top: 150;\n\tmargin-bottom: 15;\n}\n\n.post:highlighted {\n\t/*background-color: #f1f1f1;*/\n}\n\n.posting-map {\n\tmargin-bottom: 16;\n\tborder-radius: 10;\n\theight: 220;\n\twidth: 340;\n}\n\n.profile-picture {\n\theight: 50;\n\twidth: 50;\n\tborder-radius: 100%;\n\tvertical-align: top;\n\tmargin-left: 16;\n\tmargin-top: 20;\n}\n\n.refresh {\n\tcolor: #ac00e6;\n}"

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

module.exports = "<!-- <ActionBar title=\"Home\" class=\"actionbar\">\r\n\t<NavigationButton ios:visibility=\"collapsed\" icon=\"~/img/menu-icon.png\" (tap)=\"showSideDrawer()\" ></NavigationButton>\r\n<ActionItem android:visibility=\"collapsed\" icon=\"~/img/menu-icon.png\" ios.position=\"left\" (tap)=\"showSideDrawer()\" ></ActionItem>\r\n</ActionBar> -->\r\n\r\n    <StackLayout class=\"add-btn-container\">\r\n\t\t<FAB (tap)=\"showModal()\" icon=\"res://ic_add_white_3x\" rippleColor=\"#f1f1f1\" class=\"fab-button\"></FAB>\r\n\t</StackLayout>\r\n\r\n\t<PullToRefresh (refresh)=\"refreshList($event)\" class=\"refresh\">\r\n\t\t<ListView [items]=\"postings\" (itemTap)=\"onItemTap($event)\" #listView id=\"listView\">\r\n\t\t    <ng-template let-item=\"item\" let-i=\"index\" let-odd=\"odd\" let-even=\"even\">\r\n\t\t        <StackLayout [class.odd]=\"odd\" [class.even]=\"even\" class=\"post\">\r\n\t\t        \t  <StackLayout orientation=\"horizontal\">\r\n\t\t        \t  \t<Image [src]=\"item.profileSource\" class=\"profile-picture\" stretch=\"aspectFit\"></Image>\r\n\t\t        \t  \t<StackLayout>\r\n\t\t\t              \t<Label textWrap=\"true\" id=\"post-name\" class=\"name-label\" [text]=\"item.username\"></Label>\r\n\t\t\t              \t<Label textWrap=\"true\" id=\"post-info\" class=\"info-label\" [text]=\"item.info\"></Label>\r\n\t\t\t            </StackLayout>\r\n\t\t              </StackLayout>\r\n\t\t\t\t\t  <Image [src]=\"item.mapSource\" stretch=\"aspectFit\" class=\"posting-map\" (tap)=\"toViewImage(item.mapSource)\"></Image>\r\n\t\t        </StackLayout>\r\n\t\t    </ng-template>\r\n\t\t</ListView>\r\n\t</PullToRefresh>\r\n\t<ActivityIndicator #activityIndicator busy=\"true\" width=\"40\" height=\"40\" class=\"activity-indicator\">\r\n  </ActivityIndicator>"

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

module.exports = "/*\nAdd your NativeScript specific styles here.\nTo learn more about styling in NativeScript see:\nhttps://docs.nativescript.org/angular/ui/styling\n*/\n\n.login {\n    display: block;\n    color: #ac00e6;\n    /*padding: 6px 24px;*/\n    border-width: 1;\n    border-color: #ac00e6;\n    border-radius: 5;\n    text-align: center;\n    float: center;\n    margin: auto; \n    font-weight: 700;\n    font-family: \"Segoe UI\",Arial,sans-serif;\n    margin-bottom: 15;\n    width: 120;\n    height: 40;\n}\n\n.login:highlighted {\n    background-color: #f9e6ff;\n}\n\n.login-info {\n\tmargin-top: 120;\n}\n\n.homescreen-logo {\n\tmargin-bottom: 200;\n}\n\n.h1 {\n\tfont-size: 50;\n\tfont-weight: 700;\n\tcolor: #ac00e6;\n}\n\n.login-wrapper {\n\tbackground-color: #f1f1f1;\n}"

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

module.exports = "/* Add mobile styles for the component here.  */\n.remove-payment-label {\n\tfont-size: 16;\n\tcolor: #ac00e6;\n\tmargin-left: 18;\n\ttext-align: left;\n\tpadding: 18;\n}\n\n.info-label {\n\tcolor: black;\n\tfont-size: 24;\n\ttext-align: left;\n\tmargin-left: 36;\n\tmargin-top: 36;\n}\n\n.details-label {\n\tcolor: black;\n\tfont-size: 16;\n\ttext-align: left;\n\tmargin-left: 36;\n\tmargin-top: 18;\n\tmargin-bottom: 72;\n}\n\n.activity-indicator {\n\tcolor: #ac00e6;\n}"

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

module.exports = "/*\nAdd your NativeScript specific styles here.\nTo learn more about styling in NativeScript see:\nhttps://docs.nativescript.org/angular/ui/styling\n*/"

/***/ }),

/***/ "./app/payment-method/payment-method.component.html":
/***/ (function(module, exports) {

module.exports = "<StackLayout>\n  <Label text=\"payment-method works\" textWrap=\"true\"></Label>\n  <Label text=\"This is a migrated component\" textWrap=\"true\"></Label>\n  <Label text=\"Update it to provide the UI elements required in your mobile app\" textWrap=\"true\"></Label>\n</StackLayout>\n\n<!--\nOriginal Web template:\n\n<div class=\"payment-method\">\r\n\t<span class=\"payment-type-icon\"></span>\r\n\t<span class=\"payment-type-details\"></span>\r\n</div>\n-->"

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

module.exports = "/* Add mobile styles for the component here.  */\n"

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
            var chatsCollection = nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_3__["firestore"].collection('chats');
            userDocument.get().then(function (doc) {
                var postIds = doc.data().posts;
                var chatIds = doc.data().chats;
                // console.log("postids", postIds)
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
                        chatsCollection.doc(chatIds[j]).update({
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

module.exports = "/* Add mobile styles for the component here.  */\n.img {\n\tbackground-color: black;\n}\n\n.activity-indicator {\n  color: #ac00e6;\n}"

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

module.exports = "/* Add mobile styles for the component here.  */\r\n.page {\r\n  align-items: center;\r\n  flex-direction: column;\r\n  visibility: collapse;\r\n}\r\n.form {\r\n  margin-left: 30;\r\n  margin-right: 30;\r\n  flex-grow: 2;\r\n  vertical-align: middle;\r\n  margin-top: 100;\r\n  margin-bottom: 50;\r\n}\r\n\r\n.logo {\r\n  /*margin-top: 15;*/\r\n  margin-bottom: 72;\r\n  height: 120;\r\n  font-weight: bold;\r\n}\r\n.header {\r\n  horizontal-align: center;\r\n  font-size: 25;\r\n  font-weight: 600;\r\n  margin-bottom: 70;\r\n  text-align: center;\r\n  color: #ac00e6;\r\n}\r\n\r\n.input-field {\r\n  margin-bottom: 25;\r\n}\r\n.input {\r\n  font-size: 18;\r\n  placeholder-color: #A8A8A8;\r\n}\r\n\r\n.btn-primary {\r\n  height: 50;\r\n  margin: 30 5 15 5;\r\n  background-color: #ac00e6;\r\n  border-radius: 5;\r\n  font-size: 20;\r\n  font-weight: 600;\r\n}\r\n\r\n.btn-fb {\r\n  height: 100;\r\n  margin: 0 5 15 5;\r\n  /*border-radius: 5;*/\r\n  font-size: 20;\r\n  font-weight: 600;\r\n}\r\n\r\n.login-label {\r\n  horizontal-align: center;\r\n  color: #A8A8A8;\r\n  font-size: 16;\r\n  /* margin-bottom: 20; */\r\n}\r\n.sign-up-label {\r\n  horizontal-align: center;\r\n  color: #A8A8A8;\r\n  font-size: 16;\r\n   margin-bottom: 20; \r\n}\r\n.bold {\r\n  color: #000000; \r\n}\r\n.activity-indicator {\r\n  color: #ac00e6;\r\n}"

/***/ }),

/***/ "./app/welcome/welcome.component.html":
/***/ (function(module, exports) {

module.exports = "<ScrollView>\r\n\t<GridLayout rows=\"*, auto\" #welcomeContainer>\r\n\t\t<StackLayout class=\"form\" row=\"0\" height=\"100%\" #formLayout>\r\n\t\t\t<Image class=\"logo\" src=\"~/img/logo.png\"></Image>\r\n\t\t\t<!-- <Label class=\"header\" text=\"CollegePool\"></Label> -->\r\n\r\n\t\t\t<StackLayout *ngIf=\"!isLoggingIn\" class=\"input-field\">\r\n\t\t\t\t<TextField class=\"input\" hint=\"First name\" [(ngModel)]=\"firstName\" returnKeyType=\"next\" #fn>\r\n\t\t\t\t</TextField>\r\n\t\t\t\t<StackLayout class=\"hr-light\"></StackLayout>\r\n\t\t\t</StackLayout>\r\n\r\n\t\t\t<StackLayout *ngIf=\"!isLoggingIn\" class=\"input-field\">\r\n\t\t\t\t<TextField class=\"input\" hint=\"Last name\" [(ngModel)]=\"lastName\" returnKeyType=\"next\" #ln>\r\n\t\t\t\t</TextField>\r\n\t\t\t\t<StackLayout class=\"hr-light\"></StackLayout>\r\n\t\t\t</StackLayout>\r\n\r\n\t\t\t<StackLayout class=\"input-field\">\r\n\t\t\t\t<TextField class=\"input\" hint=\"Email\" keyboardType=\"email\" autocorrect=\"false\"\r\n\t\t\t\t\tautocapitalizationType=\"none\" [(ngModel)]=\"email\" returnKeyType=\"next\"\r\n\t\t\t\t\t(returnPress)=\"focusPassword()\" #em></TextField>\r\n\t\t\t\t<StackLayout class=\"hr-light\"></StackLayout>\r\n\t\t\t</StackLayout>\r\n\r\n\t\t\t<StackLayout class=\"input-field\">\r\n\t\t\t\t<TextField class=\"input\" hint=\"Password\" secure=\"true\" [(ngModel)]=\"password\"\r\n\t\t\t\t\t[returnKeyType]=\"isLoggingIn ? 'done' : 'next'\" (returnPress)=\"focusConfirmPassword()\" #pw>\r\n\t\t\t\t</TextField>\r\n\t\t\t\t<StackLayout class=\"hr-light\"></StackLayout>\r\n\t\t\t</StackLayout>\r\n\r\n\t\t\t<StackLayout *ngIf=\"!isLoggingIn\" class=\"input-field\">\r\n\t\t\t\t<TextField class=\"input\" hint=\"Confirm password\" secure=\"true\" [(ngModel)]=\"confirmPassword\"\r\n\t\t\t\t\treturnKeyType=\"done\" #cpw></TextField>\r\n\t\t\t\t<StackLayout class=\"hr-light\"></StackLayout>\r\n\t\t\t</StackLayout>\r\n\r\n\t\t\t<Button [text]=\"isLoggingIn ? 'Log In' : 'Sign Up'\" (tap)=\"submit()\"\r\n\t\t\t\tclass=\"btn btn-primary m-t-20\"></Button>\r\n\t\t\t<StackLayout>\r\n\t\t\t\t<FacebookLoginButton (tap)=\"fbLogin()\" class=\"btn-fb\"></FacebookLoginButton>\r\n\t\t\t</StackLayout>\r\n\t\t\t<Label *ngIf=\"isLoggingIn\" text=\"Forgot your password?\" class=\"login-label\"\r\n\t\t\t\t(tap)=\"forgotPassword()\"></Label>\r\n\t\t</StackLayout>\r\n\t\t<StackLayout row=\"1\">\r\n\t\t\t<Label class=\"sign-up-label\" (tap)=\"toggleForm()\">\r\n\t\t\t\t<FormattedString>\r\n\t\t\t\t\t<Span [text]=\"isLoggingIn ? 'Don’t have an account? ' : 'Back to Login'\"></Span>\r\n\t\t\t\t\t<Span [text]=\"isLoggingIn ? 'Sign up' : ''\" class=\"bold\"></Span>\r\n\t\t\t\t</FormattedString>\r\n\t\t\t</Label>\r\n\t\t</StackLayout>\r\n\t</GridLayout>\r\n</ScrollView>\r\n<ActivityIndicator #activityIndicator busy=\"true\" width=\"40\" height=\"40\" class=\"activity-indicator\">\r\n</ActivityIndicator>"

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
                nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_4__["sendEmailVerification"]();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vJF9sYXp5X3JvdXRlX3Jlc291cmNlIGxhenkgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9hcHAuY3NzIiwid2VicGFjazovLy8uL2FwcC9hZGQtY2FyZC1wYXltZW50L2FkZC1jYXJkLXBheW1lbnQuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvYWRkLWNhcmQtcGF5bWVudC9hZGQtY2FyZC1wYXltZW50LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9hZGQtY2FyZC1wYXltZW50L2FkZC1jYXJkLXBheW1lbnQuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9hZGQtbW9kYWwvYWRkLW1vZGFsLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2FkZC1tb2RhbC9hZGQtbW9kYWwuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2FkZC1tb2RhbC9hZGQtbW9kYWwuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9hZGQtcGF5bWVudC9hZGQtcGF5bWVudC5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC9hZGQtcGF5bWVudC9hZGQtcGF5bWVudC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvYWRkLXBheW1lbnQvYWRkLXBheW1lbnQuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9hcHAtcm91dGluZy5tb2R1bGUudG5zLnRzIiwid2VicGFjazovLy8uL2FwcC9hcHAuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2FwcC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2FwcC5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2F1dG8tZ2VuZXJhdGVkL2F1dG8tZ2VuZXJhdGVkLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2F1dG8tZ2VuZXJhdGVkL2F1dG8tZ2VuZXJhdGVkLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9hdXRvLWdlbmVyYXRlZC9hdXRvLWdlbmVyYXRlZC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NoYXQtbGlzdC9jaGF0LWxpc3QuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvY2hhdC1saXN0L2NoYXQtbGlzdC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvY2hhdC1saXN0L2NoYXQtbGlzdC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NoYXQvY2hhdC5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC9jaGF0L2NoYXQuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NoYXQvY2hhdC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbmZpcm1hdGlvbi9jb25maXJtYXRpb24uY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29uZmlybWF0aW9uL2NvbmZpcm1hdGlvbi5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvY29uZmlybWF0aW9uL2NvbmZpcm1hdGlvbi5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Nvbm5lY3QvY29ubmVjdC5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC9jb25uZWN0L2Nvbm5lY3QuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Nvbm5lY3QvY29ubmVjdC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2RhdGF0cmFuc2Zlci5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL2FwcC9kaWFsb2cvZGlhbG9nLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2RpYWxvZy9kaWFsb2cuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2RpYWxvZy9kaWFsb2cuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9keW5hbWljLWFkZC5zZXJ2aWNlLnRucy50cyIsIndlYnBhY2s6Ly8vLi9hcHAvZHluYW1pYy1hZGQuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvZmxvYXQtYnRuL2Zsb2F0LWJ0bi5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC9mbG9hdC1idG4vZmxvYXQtYnRuLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9mbG9hdC1idG4vZmxvYXQtYnRuLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvZm9yZ2V0LWZvcm0vZm9yZ2V0LWZvcm0uY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvZm9yZ2V0LWZvcm0vZm9yZ2V0LWZvcm0uY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2ZvcmdldC1mb3JtL2ZvcmdldC1mb3JtLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvZ29vZ2xlLW1hcHMuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvaGlzdG9yeS9oaXN0b3J5LmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2hpc3RvcnkvaGlzdG9yeS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvaGlzdG9yeS9oaXN0b3J5LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvaG9tZS5kaXJlY3RpdmUudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC9ob21lL2hvbWUuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2hvbWUvaG9tZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2xvY2F0aW9uL2xvY2F0aW9uLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2xvY2F0aW9uL2xvY2F0aW9uLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9sb2NhdGlvbi9sb2NhdGlvbi5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2xvZ2luLmRpcmVjdGl2ZS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvbG9naW5jaGVjay5zZXJ2aWNlLnRucy50cyIsIndlYnBhY2s6Ly8vLi9hcHAvbG9naW5jaGVjay5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL2FwcC9sb2dpbnJvdXRlL2xvZ2lucm91dGUuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvbG9naW5yb3V0ZS9sb2dpbnJvdXRlLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9sb2dpbnJvdXRlL2xvZ2lucm91dGUuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9tZXNzYWdlLW1vZGFsL21lc3NhZ2UtbW9kYWwuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvbWVzc2FnZS1tb2RhbC9tZXNzYWdlLW1vZGFsLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9tZXNzYWdlLW1vZGFsL21lc3NhZ2UtbW9kYWwuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LnRucy5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQudG5zLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3BheW1lbnQtaW5mby9wYXltZW50LWluZm8uY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvcGF5bWVudC1pbmZvL3BheW1lbnQtaW5mby5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvcGF5bWVudC1pbmZvL3BheW1lbnQtaW5mby5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3BheW1lbnQtbWV0aG9kL3BheW1lbnQtbWV0aG9kLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL3BheW1lbnQtbWV0aG9kL3BheW1lbnQtbWV0aG9kLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9wYXltZW50LW1ldGhvZC9wYXltZW50LW1ldGhvZC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3BheW1lbnQuc2VydmljZS50bnMudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3BheW1lbnQuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvcGF5bWVudHMvcGF5bWVudHMuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvcGF5bWVudHMvcGF5bWVudHMuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL3BheW1lbnRzL3BheW1lbnRzLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvcGxhY2VzLWF1dG9jb21wbGV0ZS5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL2FwcC9wb3N0aW5nLWluZm8vcG9zdGluZy1pbmZvLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL3Bvc3RpbmctaW5mby9wb3N0aW5nLWluZm8uY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL3Bvc3RpbmctaW5mby9wb3N0aW5nLWluZm8uY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9wb3N0aW5nLnNlcnZpY2UudG5zLnRzIiwid2VicGFjazovLy8uL2FwcC9wb3N0aW5nLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3Bvc3RpbmcvcG9zdGluZy5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC9wb3N0aW5nL3Bvc3RpbmcuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL3Bvc3RpbmcvcG9zdGluZy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3JlYXV0aC9yZWF1dGguY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvcmVhdXRoL3JlYXV0aC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvcmVhdXRoL3JlYXV0aC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NldHRpbmdzZm9ybS9zZXR0aW5nc2Zvcm0uY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvc2V0dGluZ3Nmb3JtL3NldHRpbmdzZm9ybS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvc2V0dGluZ3Nmb3JtL3NldHRpbmdzZm9ybS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3VwZGF0ZS91cGRhdGUuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvdXBkYXRlL3VwZGF0ZS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvdXBkYXRlL3VwZGF0ZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3VzZXIuc2VydmljZS50bnMudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3VzZXIuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvdmlldy1pbWFnZS92aWV3LWltYWdlLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL3ZpZXctaW1hZ2Uvdmlldy1pbWFnZS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvdmlldy1pbWFnZS92aWV3LWltYWdlLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvd2VsY29tZS93ZWxjb21lLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL3dlbGNvbWUvd2VsY29tZS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvd2VsY29tZS93ZWxjb21lLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsNENBQTRDLFdBQVc7QUFDdkQ7QUFDQTtBQUNBLHlFOzs7Ozs7O0FDWkEsMkJBQTJCLG1CQUFPLENBQUMsZ0RBQWdEO0FBQ25GO0FBQ0EsVUFBVSxtQkFBTyxDQUFDLG9HQUErRjs7QUFFakg7QUFDQSxjQUFjLFFBQVMsNGZBQTRmLHlCQUF5QixLQUFLOztBQUVqakI7QUFDQSxRQUFRLEtBQVUsRUFBRSxFQUtmOzs7Ozs7OztBQ2JMLDRFQUE0RSxlQUFlLGtCQUFrQixjQUFjLGVBQWUsR0FBRyw2QkFBNkIsdUJBQXVCLFlBQVksR0FBRyx1REFBdUQsbUJBQW1CLG1CQUFtQixvQkFBb0IsZ0NBQWdDLHlCQUF5QixnQkFBZ0IseUJBQXlCLCtDQUErQyxHQUFHLG1CQUFtQixtQkFBbUIsbUJBQW1CLG9CQUFvQixnQ0FBZ0MseUJBQXlCLGdCQUFnQix5QkFBeUIsK0NBQStDLG9CQUFvQixHQUFHLGdCQUFnQixtQkFBbUIsbUJBQW1CLGdDQUFnQyx5QkFBeUIsZUFBZSwrQ0FBK0MsdUJBQXVCLGlCQUFpQixHQUFHLGtCQUFrQixtQkFBbUIsbUJBQW1CLG9CQUFvQixnQ0FBZ0MseUJBQXlCLGVBQWUsK0NBQStDLHVCQUF1QixpQkFB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LElBQUksRUFBRSxDQUFDO2tDQUFLLHdEQUFVO2dEQUFDO0lBNUJ0RCxnQkFBZ0I7UUFONUIsK0RBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLHFFQUF1Qzs7U0FFeEMsQ0FBQzt5Q0FvQjBCLDZEQUFJLEVBQWtCLDRFQUFnQixFQUE2Qix5RUFBaUIsRUFBMkIscUVBQWU7WUFDdEksb0RBQU0sRUFBaUIsMEZBQWtCLEVBQWlCLDhEQUFnQjtPQW5CakYsZ0JBQWdCLENBd1I1QjtJQUFELHVCQUFDO0NBQUE7QUF4UjRCOzs7Ozs7Ozs7QUNsQjZFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQzFHLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxDQUFDLG1CQUFLLDhEQUFnQztBQUc1RSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDN0MsT0FBTyxFQUFDLDJFQUFzQixFQUF3QztBQUV0RSwyRUFBZ0MsRUFBdUM7QUFDdkUsU0FBMkM7QUFDVDtBQUNsQyxRQUF5QztBQUV6QywwR0FBZ0M7QUFFaEMsWUFBeUo7QUFDekosWUFBOEg7QUFDOUgscUIiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0KHJlcSkge1xuXHQvLyBIZXJlIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKSBpcyB1c2VkIGluc3RlYWQgb2YgbmV3IFByb21pc2UoKSB0byBwcmV2ZW50XG5cdC8vIHVuY2F1Z2h0IGV4Y2VwdGlvbiBwb3BwaW5nIHVwIGluIGRldnRvb2xzXG5cdHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uKCkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fSk7XG59XG53ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gW107IH07XG53ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dDtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0O1xud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LmlkID0gXCIuLi8kJF9sYXp5X3JvdXRlX3Jlc291cmNlIGxhenkgcmVjdXJzaXZlXCI7IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gSW1wb3J0c1xuZXhwb3J0cy5pKHJlcXVpcmUoXCItIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMSFuYXRpdmVzY3JpcHQtdGhlbWUtY29yZS9jc3MvY29yZS5saWdodC5jc3NcIiksIFwiXCIpO1xuXG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qXFxyXFxuSW4gTmF0aXZlU2NyaXB0LCB0aGUgYXBwLmNzcyBmaWxlIGlzIHdoZXJlIHlvdSBwbGFjZSBDU1MgcnVsZXMgdGhhdFxcclxcbnlvdSB3b3VsZCBsaWtlIHRvIGFwcGx5IHRvIHlvdXIgZW50aXJlIGFwcGxpY2F0aW9uLiBDaGVjayBvdXRcXHJcXG5odHRwOi8vZG9jcy5uYXRpdmVzY3JpcHQub3JnL3VpL3N0eWxpbmcgZm9yIGEgZnVsbCBsaXN0IG9mIHRoZSBDU1NcXHJcXG5zZWxlY3RvcnMgYW5kIHByb3BlcnRpZXMgeW91IGNhbiB1c2UgdG8gc3R5bGUgVUkgY29tcG9uZW50cy5cXHJcXG5cXHJcXG4vKlxcclxcbkluIG1hbnkgY2FzZXMgeW91IG1heSB3YW50IHRvIHVzZSB0aGUgTmF0aXZlU2NyaXB0IGNvcmUgdGhlbWUgaW5zdGVhZFxcclxcbm9mIHdyaXRpbmcgeW91ciBvd24gQ1NTIHJ1bGVzLiBGb3IgYSBmdWxsIGxpc3Qgb2YgY2xhc3MgbmFtZXMgaW4gdGhlIHRoZW1lXFxyXFxucmVmZXIgdG8gaHR0cDovL2RvY3MubmF0aXZlc2NyaXB0Lm9yZy91aS90aGVtZS5cXHJcXG4qL1xcclxcblxcclxcbkxhYmVsIHtcXHJcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVwiLCBcIlwiXSk7XG5cbjtcbiAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiAnc3R5bGUnLCBwYXRoOiAnLi9hcHAuY3NzJyB9KTtcbiAgICAgICAgfSlcbiAgICB9XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLyogQWRkIG1vYmlsZSBzdHlsZXMgZm9yIHRoZSBjb21wb25lbnQgaGVyZS4gICovXFxuLmNsb3NlIHtcXG5cXHRtYXJnaW46IDEwO1xcblxcdGZvbnQtc2l6ZTogMjg7XFxuXFx0d2lkdGg6IDQ4O1xcblxcdGhlaWdodDogNDg7XFxufVxcblxcbi5jbG9zZS1idXR0b24tY29udGFpbmVyIHtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0bGVmdDogMDtcXG59XFxuXFxuLyogc3R5bGVzIGZyb20gcGF5bWVudHMuY29tcG9uZW50LmNzcyAqL1xcblxcbiNmb3JtIHtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICB3aWR0aDogNjAwcHg7XFxuICAgIGhlaWdodDogNDAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAzMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDRweCAwIHJnYmEoMCwwLDAsMC4zNyk7XFxufVxcblxcbiNwYXltZW50LWZvcm0ge1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIHdpZHRoOiA2MDBweDtcXG4gICAgaGVpZ2h0OiA0MDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IDMwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgYm94LXNoYWRvdzogMCAxcHggNHB4IDAgcmdiYSgwLDAsMCwwLjM3KTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuI2NhcmQtZm9ybSB7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgd2lkdGg6IDQwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTgwOTY4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogMjUlO1xcbiAgICBib3gtc2hhZG93OiAwIDFweCA0cHggMCByZ2JhKDAsMCwwLDAuMzcpO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG5cXG4jcGF5cGFsLWZvcm0ge1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IDI1JTtcXG4gICAgYm94LXNoYWRvdzogMCAxcHggNHB4IDAgcmdiYSgwLDAsMCwwLjM3KTtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgei1pbmRleDogMTtcXG59XFxuXFxuI3Zlbm1vLWZvcm0ge1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IDI1JTtcXG4gICAgYm94LXNoYWRvdzogMCAxcHggNHB4IDAgcmdiYSgwLDAsMCwwLjM3KTtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgei1pbmRleDogMTtcXG59XFxuXFxuI2Vycm9yLWZvcm0ge1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IDI1JTtcXG4gICAgYm94LXNoYWRvdzogMCAxcHggNHB4IDAgcmdiYSgwLDAsMCwwLjM3KTtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgei1pbmRleDogMTtcXG59XFxuXFxuI2VkaXQtZm9ybSB7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgd2lkdGg6IDQwMHB4O1xcbiAgICBoZWlnaHQ6IDIwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogMjUlO1xcbiAgICBib3gtc2hhZG93OiAwIDFweCA0cHggMCByZ2JhKDAsMCwwLDAuMzcpO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG5cXG4ucGF5bWVudC1tZXRob2RzIHtcXG5cXHRvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgbWFyZ2luLWxlZnQ6IDQwcHg7XFxufVxcblxcbiNtb2RhbC1wYXltZW50LW1ldGhvZHMge1xcblxcdG1hcmdpbi1sZWZ0OiAyNHB4O1xcbn1cXG5cXG4jcGF5cGFsLWhlYWRlci1jb250YWluZXIge1xcblxcdGJhY2tncm91bmQtY29sb3I6ICM1ODA5Njg7XFxufVxcblxcbiNlcnJvci1oZWFkZXItY29udGFpbmVyIHtcXG5cXHRkaXNwbGF5OiBub25lO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICM4OTAwMDA7XFxufVxcblxcbiNlZGl0LWhlYWRlci1jb250YWluZXIge1xcblxcdGJhY2tncm91bmQtY29sb3I6ICM1ODA5Njg7XFxufVxcblxcbi5jb2xvcmVkLWhlYWRlciB7XFxuXFx0Y29sb3I6IHdoaXRlO1xcblxcdGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbiNtZXRob2QtaW5mb3JtYXRpb24tdGV4dCB7XFxuXFx0bWFyZ2luLWxlZnQ6IDQwcHg7XFxuXFx0bWFyZ2luLXRvcDogMzJweDtcXG5cXHRmb250LXNpemU6IDE2cHg7XFxufVxcblxcbi5wYXltZW50LWZvb3Rlci1idXR0b257XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG4gICAgY29sb3I6ICNhYzAwZTY7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tbGVmdDogMzRweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbn1cXG5cXG4jcGF5cGFsLWJ1dHRvbiB7XFxuXFx0d2lkdGg6IDM1MHB4O1xcblxcdG1hcmdpbjogYXV0bztcXG5cXHRtYXJnaW4tdG9wOiAzMnB4O1xcbn1cXG5cXG4jYWRkLWNhcmQtYnV0dG9uIHtcXG5cXHRmbG9hdDogcmlnaHQ7XFxuXFx0bWFyZ2luLXJpZ2h0OiAzNHB4O1xcblxcdGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbiNyZW1vdmUtcGF5bWVudC1idXR0b24ge1xcblxcdGZsb2F0OiByaWdodDtcXG5cXHRtYXJnaW4tcmlnaHQ6IDM0cHg7XFxufVxcblxcbi5wbHVzLXNpZ24ge1xcblxcdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuXFx0Zm9udC1zaXplOiAzMHB4O1xcblxcdG1hcmdpbi1yaWdodDogN3B4O1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnBheW1lbnQtZm9vdGVyLXRleHQge1xcblxcdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuXFx0bGluZS1oZWlnaHQ6IDQycHg7XFxuXFx0Zm9udC13ZWlnaHQ6IDQwMDtcXG5cXHRmb250LXNpemU6IDEzcHg7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucGF5bWVudC1mb290ZXItdGV4dDpob3ZlciB7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbi5wYXltZW50cy1ib3R0b20tYWRkLWNvbnRhaW5lciB7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGJvdHRvbTogMDtcXG59XFxuXFxuLyogT3RoZXIgbW9kYWwgc3R5bGluZyBpbiBzdHlsZXMuY3NzICovXFxuLmNsb3NlLW1vZGFsIHtcXG5cXHRmb250LXNpemU6IDI0cHg7XFxuXFx0bWFyZ2luLXJpZ2h0OiAyMHB4O1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLVxcblNoYXJlZCBWYXJpYWJsZXNcXG4tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLVxcbkdlbmVyYWxcXG4tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxuaHRtbCxcXG5ib2R5IHtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGNvbG9yOiAjMjgyYzM3O1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uZm9ybS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNFRUU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYm9yZGVyOiAxZW0gc29saWQgI2ZmZjtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA0NzZweCkge1xcbiAgLmZvcm0tY29udGFpbmVyIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgfVxcbn1cXG5cXG4uY2FyZGluZm8td3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbi5iZy1pbGx1c3RyYXRpb24ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIHotaW5kZXg6IDA7XFxufVxcbi5iZy1pbGx1c3RyYXRpb24gc3ZnIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uY2FyZC1zaGFwZSwgI215LXNhbXBsZS1mb3JtLnZpc2EsICNteS1zYW1wbGUtZm9ybS5tYXN0ZXItY2FyZCwgI215LXNhbXBsZS1mb3JtLm1hZXN0cm8sICNteS1zYW1wbGUtZm9ybS5hbWVyaWNhbi1leHByZXNzLCAjbXktc2FtcGxlLWZvcm0uZGlzY292ZXIsICNteS1zYW1wbGUtZm9ybS51bmlvbnBheSwgI215LXNhbXBsZS1mb3JtLmpjYiwgI215LXNhbXBsZS1mb3JtLmRpbmVycy1jbHViIHtcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gIHBhZGRpbmc6IDJlbSAyZW0gMWVtO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNDc2cHgpIHtcXG4gIC5jYXJkLXNoYXBlLCAjbXktc2FtcGxlLWZvcm0udmlzYSwgI215LXNhbXBsZS1mb3JtLm1hc3Rlci1jYXJkLCAjbXktc2FtcGxlLWZvcm0ubWFlc3RybywgI215LXNhbXBsZS1mb3JtLmFtZXJpY2FuLWV4cHJlc3MsICNteS1zYW1wbGUtZm9ybS5kaXNjb3ZlciwgI215LXNhbXBsZS1mb3JtLnVuaW9ucGF5LCAjbXktc2FtcGxlLWZvcm0uamNiLCAjbXktc2FtcGxlLWZvcm0uZGluZXJzLWNsdWIge1xcbiAgICBwYWRkaW5nOiAyZW0gMS41ZW0gMWVtO1xcbiAgfVxcbn1cXG5cXG4jcGF5bWVudC1jYXJkLWZvcm0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcXG4gIC8qYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7Ki9cXG4gIHBhZGRpbmc6IDFlbSAzZW0gM2VtO1xcbiAgbWFyZ2luLWJvdHRvbTogMmVtO1xcbi8qICB0cmFuc2l0aW9uOiBhbGwgNjAwbXMgY3ViaWMtYmV6aWVyKDAuMiwgMS4zLCAwLjcsIDEpO1xcbiAgLXdlYmtpdC1hbmltYXRpb246IGNhcmRJbnRybyA1MDBtcyBjdWJpYy1iZXppZXIoMC4yLCAxLjMsIDAuNywgMSk7XFxuICAgICAgICAgIGFuaW1hdGlvbjogY2FyZEludHJvIDUwMG1zIGN1YmljLWJlemllcigwLjIsIDEuMywgMC43LCAxKTsqL1xcbiAgLyp6LWluZGV4OiAxOyovXFxufVxcbiNteS1zYW1wbGUtZm9ybTpob3ZlciB7XFxuICBib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjA2KTtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDQ3NnB4KSB7XFxuICAjbXktc2FtcGxlLWZvcm0ge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBwYWRkaW5nOiA3ZW0gMmVtIDJlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxufVxcbiNteS1zYW1wbGUtZm9ybS52aXNhIHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBENEFBMjtcXG59XFxuI215LXNhbXBsZS1mb3JtLm1hc3Rlci1jYXJkIHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM2MzYzNjtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMTVkZWcsICNkODIzMzIsICNkODIzMzIgNTAlLCAjZjFhZDNkIDUwJSwgI2YxYWQzZCk7XFxufVxcbiNteS1zYW1wbGUtZm9ybS5tYWVzdHJvIHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM2MzYzNjtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMTVkZWcsICMwMDlkZGQsICMwMDlkZGQgNTAlLCAjZWQxYzJlIDUwJSwgI2VkMWMyZSk7XFxufVxcbiNteS1zYW1wbGUtZm9ybS5hbWVyaWNhbi1leHByZXNzIHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN0NDMztcXG59XFxuI215LXNhbXBsZS1mb3JtLmRpc2NvdmVyIHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNjAwMDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjZDE0MzEwLCAjZjc5NjFlKTtcXG59XFxuI215LXNhbXBsZS1mb3JtLnVuaW9ucGF5LCAjbXktc2FtcGxlLWZvcm0uamNiLCAjbXktc2FtcGxlLWZvcm0uZGluZXJzLWNsdWIge1xcbiAgY29sb3I6ICNmZmY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzYzNjM2O1xcbn1cXG5cXG4uY2FyZGluZm8tbGFiZWwge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBmb250LXNpemU6IDExcHg7XFxuICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcblxcbi5jYXJkaW5mby1leHAtZGF0ZSB7XFxuICBtYXJnaW4tcmlnaHQ6IDFlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uY2FyZGluZm8tY3Z2IHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uY2FyZGluZm8tY2FyZC1udW1iZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4jY2FyZEltYWdlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMmVtO1xcbiAgcmlnaHQ6IDFlbTtcXG4gIHdpZHRoOiA0NHB4O1xcbiAgaGVpZ2h0OiAyOHB4O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vczMtdXMtd2VzdC0yLmFtYXpvbmF3cy5jb20vcy5jZHBuLmlvLzM0Njk5NC9jYXJkX3Nwcml0ZS5wbmcpO1xcbiAgYmFja2dyb3VuZC1zaXplOiA4NnB4IDQ1OHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTEwMHB4IDA7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xcbn1cXG4jY2FyZEltYWdlLnZpc2Ege1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAtMzk4cHg7XFxufVxcbiNjYXJkSW1hZ2UubWFzdGVyLWNhcmQge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAtMjgxcHg7XFxufVxcbiNjYXJkSW1hZ2UuYW1lcmljYW4tZXhwcmVzcyB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIC0zNzBweDtcXG59XFxuI2NhcmRJbWFnZS5kaXNjb3ZlciB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIC0xNjNweDtcXG59XFxuI2NhcmRJbWFnZS5tYWVzdHJvIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgLTI1MXB4O1xcbn1cXG4jY2FyZEltYWdlLmpjYiB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIC0yMjFweDtcXG59XFxuI2NhcmRJbWFnZS5kaW5lcnMtY2x1YiB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIC0xMzNweDtcXG59XFxuXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLVxcbklucHV0cyBcXG4tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxuLmlucHV0LXdyYXBwZXIge1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg2KTtcXG4gIGhlaWdodDogMi43NWVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMDYpO1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAxZW07XFxufVxcblxcbi5jYXJkaW5mby1jYXJkLW51bWJlcixcXG4uY2FyZGluZm8tZXhwLWRhdGUsXFxuLmNhcmRpbmZvLWN2diB7XFxuICB0cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjNzO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3M7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcywgLXdlYmtpdC10cmFuc2Zvcm0gMC4zcztcXG59XFxuXFxuLmJyYWludHJlZS1ob3N0ZWQtZmllbGRzLWZvY3VzZWQge1xcbiAgYm9yZGVyLWNvbG9yOiAjNWRiNmU4O1xcbn1cXG5cXG4uYnJhaW50cmVlLWhvc3RlZC1maWVsZHMtaW52YWxpZCB7XFxuICBib3JkZXItY29sb3I6ICNFNTNBNDA7XFxuLyogIC13ZWJraXQtYW5pbWF0aW9uOiBzaGFrZSA1MDBtcyBjdWJpYy1iZXppZXIoMC4yLCAxLjMsIDAuNywgMSkgYm90aDtcXG4gICAgICAgICAgYW5pbWF0aW9uOiBzaGFrZSA1MDBtcyBjdWJpYy1iZXppZXIoMC4yLCAxLjMsIDAuNywgMSkgYm90aDsqL1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgICAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIC13ZWJraXQtcGVyc3BlY3RpdmU6IDEwMDBweDtcXG4gICAgICAgICAgcGVyc3BlY3RpdmU6IDEwMDBweDtcXG59XFxuXFxuLmxvYWRlciB7XFxuICBib3JkZXI6IDE2cHggc29saWQgI2YzZjNmMzsgLyogTGlnaHQgZ3JleSAqL1xcbiAgYm9yZGVyLXRvcDogMTZweCBzb2xpZCAjYWMwMGU2OyAvKiBQdXJwbGUgKi9cXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIHdpZHRoOiAxMjBweDtcXG4gIGhlaWdodDogMTIwcHg7XFxuICBhbmltYXRpb246IHNwaW4gMnMgbGluZWFyIGluZmluaXRlO1xcbiAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG4jbG9hZGluZy1jaXJjbGUge1xcbiAgdG9wOiAxMiU7XFxuICBsZWZ0OiAzMCU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbiNsaXN0LWxvYWRpbmctY2lyY2xlIHtcXG5cXHRtYXJnaW4tdG9wOiA1MHB4O1xcbn1cXG5cXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tXFxuQW5pbWF0aW9uc1xcbi0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXG5Aa2V5ZnJhbWVzIHNwaW4ge1xcbiAgMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxcbiAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cXG59XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIHNoYWtlIHtcXG4gIDEwJSxcXG4gIDkwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMXB4LCAwLCAwKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xcHgsIDAsIDApO1xcbiAgfVxcbiAgMjAlLFxcbiAgODAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDFweCwgMCwgMCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxcHgsIDAsIDApO1xcbiAgfVxcbiAgMzAlLFxcbiAgNTAlLFxcbiAgNzAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0zcHgsIDAsIDApO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTNweCwgMCwgMCk7XFxuICB9XFxuICA0MCUsXFxuICA2MCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoM3B4LCAwLCAwKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDNweCwgMCwgMCk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgc2hha2Uge1xcbiAgMTAlLFxcbiAgOTAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xcHgsIDAsIDApO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTFweCwgMCwgMCk7XFxuICB9XFxuICAyMCUsXFxuICA4MCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMXB4LCAwLCAwKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDFweCwgMCwgMCk7XFxuICB9XFxuICAzMCUsXFxuICA1MCUsXFxuICA3MCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTNweCwgMCwgMCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtM3B4LCAwLCAwKTtcXG4gIH1cXG4gIDQwJSxcXG4gIDYwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgzcHgsIDAsIDApO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoM3B4LCAwLCAwKTtcXG4gIH1cXG59XFxuXFxuXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPCEtLSA8bmd4LWJyYWludHJlZSBcXHJcXG4gIFtnZXRDbGllbnRUb2tlbl09XFxcImdldENsaWVudFRva2VuKClcXFwiIFxcclxcbiAgW2NyZWF0ZVB1cmNoYXNlXT1cXFwiY3JlYXRlUHVyY2hhc2VGdW5jdGlvblxcXCIgXFxyXFxuICAocGF5bWVudFN0YXR1cyk9XFxcIm9uUGF5bWVudFN0YXR1cygkZXZlbnQpXFxcIj5cXHJcXG48L25neC1icmFpbnRyZWU+IC0tPlxcclxcblxcclxcbjxTdGFja0xheW91dCAjZm9ybT5cXHJcXG5cXHQ8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImNsb3NlLWJ1dHRvbi1jb250YWluZXJcXFwiIG9yaWVudGF0aW9uPVxcXCJob3Jpem9udGFsXFxcIj5cXHJcXG5cXHRcXHQ8TGFiZWwgdGV4dD1cXFwiJnRpbWVzO1xcXCIgY2xhc3M9XFxcImNsb3NlXFxcIiAodGFwKT1cXFwiY2xvc2UoKVxcXCI+PC9MYWJlbD5cXHJcXG5cXHQ8L1N0YWNrTGF5b3V0PlxcclxcblxcclxcblxcdDxTdGFja0xheW91dCBjbGFzcz1cXFwiY2FyZGluZm8tY2FyZC1udW1iZXJcXFwiPlxcclxcblxcdFxcdDxMYWJlbCB0ZXh0PVxcXCJDYXJkIE51bWJlclxcXCIgY2xhc3M9XFxcImNhcmRpbmZvLWxhYmVsXFxcIj48L0xhYmVsPlxcclxcblxcdFxcdDxTdGFja0xheW91dCAjY2FyZE51bWJlciBjbGFzcz1cXFwiaW5wdXQtd3JhcHBlclxcXCI+PC9TdGFja0xheW91dD5cXHJcXG5cXHRcXHQ8U3RhY2tMYXlvdXQgI2NhcmRJbWFnZT48L1N0YWNrTGF5b3V0PlxcclxcblxcdDwvU3RhY2tMYXlvdXQ+XFxyXFxuXFxyXFxuXFx0PFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJjYXJkaW5mby13cmFwcGVyXFxcIj5cXHJcXG5cXHRcXHQ8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImNhcmRpbmZvLWV4cC1kYXRlXFxcIj5cXHJcXG5cXHRcXHRcXHQ8TGFiZWwgdGV4dD1cXFwiVmFsaWQgVGhydVxcXCIgY2xhc3M9XFxcImNhcmRpbmZvLWxhYmVsXFxcIj48L0xhYmVsPlxcclxcblxcdFxcdFxcdDxTdGFja0xheW91dCAjZXhwaXJhdGlvbkRhdGUgY2xhc3M9XFxcImlucHV0LXdyYXBwZXJcXFwiPjwvU3RhY2tMYXlvdXQ+XFxyXFxuXFx0XFx0PC9TdGFja0xheW91dD5cXHJcXG5cXHJcXG5cXHRcXHQ8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImNhcmRpbmZvLWN2dlxcXCI+XFxyXFxuXFx0XFx0XFx0PExhYmVsIHRleHQ9XFxcIkNWVlxcXCIgY2xhc3M9XFxcImNhcmRpbmZvLWxhYmVsXFxcIj48L0xhYmVsPlxcclxcblxcdFxcdFxcdDxTdGFja0xheW91dCAjY3Z2IGNsYXNzPVxcXCJpbnB1dC13cmFwcGVyXFxcIj48L1N0YWNrTGF5b3V0PlxcclxcblxcdFxcdDwvU3RhY2tMYXlvdXQ+XFxyXFxuXFx0PC9TdGFja0xheW91dD5cXHJcXG5cXHJcXG5cXHQ8QnV0dG9uIHRleHQ9XFxcIkFkZFxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgI3N1Ym1pdEJ1dHRvbj48L0J1dHRvbj5cXHJcXG48L1N0YWNrTGF5b3V0PlxcclxcbjwhLS0gXFx0XFx0PGZvcm0gaWQ9XFxcInBheW1lbnQtY2FyZC1mb3JtXFxcIiBjbGFzcz1cXFwic2NhbGUtZG93blxcXCI+XFxyXFxuXFx0ICAgIDxkaXYgY2xhc3M9XFxcImNhcmRpbmZvLWNhcmQtbnVtYmVyXFxcIj5cXHJcXG5cXHQgICAgICA8bGFiZWwgY2xhc3M9XFxcImNhcmRpbmZvLWxhYmVsXFxcIiBmb3I9XFxcImNhcmQtbnVtYmVyXFxcIj5DYXJkIE51bWJlcjwvbGFiZWw+XFxyXFxuXFx0ICAgICAgPGRpdiBjbGFzcz0naW5wdXQtd3JhcHBlcicgaWQ9XFxcImNhcmQtbnVtYmVyXFxcIj48L2Rpdj5cXHJcXG5cXHQgICAgICA8ZGl2IGlkPVxcXCJjYXJkLWltYWdlXFxcIj48L2Rpdj5cXHJcXG5cXHQgICAgPC9kaXY+XFxyXFxuXFxyXFxuXFx0ICAgIDxkaXYgY2xhc3M9XFxcImNhcmRpbmZvLXdyYXBwZXJcXFwiPlxcclxcblxcdCAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmRpbmZvLWV4cC1kYXRlXFxcIj5cXHJcXG5cXHQgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY2FyZGluZm8tbGFiZWxcXFwiIGZvcj1cXFwiZXhwaXJhdGlvbi1kYXRlXFxcIj5WYWxpZCBUaHJ1PC9sYWJlbD5cXHJcXG5cXHQgICAgICAgIDxkaXYgY2xhc3M9J2lucHV0LXdyYXBwZXInIGlkPVxcXCJleHBpcmF0aW9uLWRhdGVcXFwiPjwvZGl2PlxcclxcblxcdCAgICAgIDwvZGl2PlxcclxcblxcclxcblxcdCAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmRpbmZvLWN2dlxcXCI+XFxyXFxuXFx0ICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNhcmRpbmZvLWxhYmVsXFxcIiBmb3I9XFxcImN2dlxcXCI+Q1ZWPC9sYWJlbD5cXHJcXG5cXHQgICAgICAgIDxkaXYgY2xhc3M9J2lucHV0LXdyYXBwZXInIGlkPVxcXCJjdnZcXFwiPjwvZGl2PlxcclxcblxcdCAgICAgIDwvZGl2PlxcclxcblxcdCAgICA8L2Rpdj5cXHJcXG5cXHQgIDwvZm9ybT4gLS0+XCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgRWxlbWVudFJlZiwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCAqIGFzIGRyb3BpbiBmcm9tICdicmFpbnRyZWUtd2ViLWRyb3AtaW4nO1xyXG5pbXBvcnQgKiBhcyBicmFpbnRyZWUgZnJvbSAnYnJhaW50cmVlLXdlYic7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvYnV0dG9uJztcclxuaW1wb3J0IHsgVGV4dEZpZWxkIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS90ZXh0LWZpZWxkJztcclxuaW1wb3J0IHsgTW9kYWxEaWFsb2dQYXJhbXMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZGlyZWN0aXZlcy9kaWFsb2dzXCI7XHJcbmltcG9ydCB7IFBheW1lbnRTZXJ2aWNlIH0gZnJvbSAnLi4vcGF5bWVudC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU3RhY2tMYXlvdXQgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvc3RhY2stbGF5b3V0JztcclxuLy8gaW1wb3J0IHsgTmF0aXZlU2NyaXB0SHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHAtY2xpZW50JztcclxuLy8gaW1wb3J0IHsgTmd4QnJhaW50cmVlTW9kdWxlIH0gZnJvbSAnbmd4LWJyYWludHJlZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZSc7XHJcbmltcG9ydCB7IEJyYWludHJlZSwgQnJhaW5UcmVlT3B0aW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1icmFpbnRyZWUnO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcclxuXHJcbi8vIHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtbm9kZWlmeVwiKTtcclxuLy8gaW1wb3J0ICogYXMgTm9kZWlmeSBmcm9tICduYXRpdmVzY3JpcHQtbm9kZWlmeSc7XHJcbi8vIGNvbnN0IGJyYWludHJlZSA9IHJlcXVpcmUoJ2JyYWludHJlZS13ZWInKTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLWFkZC1jYXJkLXBheW1lbnQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9hZGQtY2FyZC1wYXltZW50LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9hZGQtY2FyZC1wYXltZW50LmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWRkQ2FyZFBheW1lbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhcmFtczogTW9kYWxEaWFsb2dQYXJhbXMsIHByaXZhdGUgcGF5bWVudFNlcnZpY2U6IFBheW1lbnRTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucykgeyB9XHJcblxyXG4gIC8vIEBWaWV3Q2hpbGQoXCJkcm9waW5Db250YWludGVyXCIpIGNvbnRhaW5lcjogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKFwic3VibWl0QnV0dG9uXCIsIHsgc3RhdGljOiB0cnVlIH0pIHNCOiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoXCJleHBpcmF0aW9uRGF0ZVwiLCB7IHN0YXRpYzogdHJ1ZSB9KSBleHBpcmF0aW9uVGV4dDogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKFwiY2FyZE51bWJlclwiLCB7IHN0YXRpYzogdHJ1ZSB9KSBudW1iZXJUZXh0OiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoXCJjdnZcIiwgeyBzdGF0aWM6IHRydWUgfSkgY3Z2VGV4dDogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKFwiZm9ybVwiLCB7IHN0YXRpYzogdHJ1ZSB9KSBmb3JtTGF5b3V0OiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoXCJjYXJkSW1hZ2VcIiwgeyBzdGF0aWM6IHRydWUgfSkgY2FyZExheW91dDogRWxlbWVudFJlZjtcclxuXHJcbiAgdXNlciA9IHtcclxuICBcdHBheW1lbnRfaWQ6ICc1MDczMDU3MDYnXHJcbiAgfVxyXG4gIG9wdHMgOkJyYWluVHJlZU9wdGlvbnMgPSB7XHJcblx0YW1vdW50OiBudWxsLFxyXG5cdGNvbGxlY3REZXZpY2VEYXRhOiB0cnVlLFxyXG5cdHJlcXVlc3RUaHJlZURTZWN1cmVWZXJpZmljYXRpb246IGZhbHNlLFxyXG4gIH1cclxuICBjbGllbnRUb2tlbiA9ICcnO1xyXG5cclxuICAvLyB0b2tlbiA9IHRoaXMucGF5bWVudFNlcnZpY2UuZ2V0SWRUb2tlbih0aGlzLnVzZXIucGF5bWVudF9pZCk7XHJcbiAgbmdPbkluaXQoKSB7XHJcbiAvLyAgXHRicmFpbnRyZWUuY2xpZW50LmNyZWF0ZSh7XHJcblx0Ly8gICBhdXRob3JpemF0aW9uOiAnc2FuZGJveF85cXNieXlxOF93bWMzdjg4cjM2Y2J4amp6J1xyXG5cdC8vIH0sIGZ1bmN0aW9uIChjbGllbnRFcnIsIGNsaWVudEluc3RhbmNlKSB7XHJcblx0Ly8gICAvLyBTdG9wIGlmIHRoZXJlIHdhcyBhIHByb2JsZW0gY3JlYXRpbmcgdGhlIGNsaWVudC5cclxuXHQvLyAgIC8vIFRoaXMgY291bGQgaGFwcGVuIGlmIHRoZXJlIGlzIGEgbmV0d29yayBlcnJvciBvciBpZiB0aGUgYXV0aG9yaXphdGlvblxyXG5cdC8vICAgLy8gaXMgaW52YWxpZC5cclxuXHQvLyAgIGlmIChjbGllbnRFcnIpIHtcclxuXHQvLyAgICAgY29uc29sZS5lcnJvcignRXJyb3IgY3JlYXRpbmcgY2xpZW50OicsIGNsaWVudEVycik7XHJcblx0Ly8gICAgIHJldHVybjtcclxuXHQvLyAgIH1cclxuXHQvLyB9KTtcclxuXHJcbiAgfVxyXG5cclxuICBjcmVhdGVWaWV3cygpIHtcclxuICBcdHZhciBmb3JtID0gPFN0YWNrTGF5b3V0PiB0aGlzLmZvcm1MYXlvdXQubmF0aXZlRWxlbWVudDtcclxuXHR2YXIgc3VibWl0ID0gPEJ1dHRvbj4gdGhpcy5zQi5uYXRpdmVFbGVtZW50O1xyXG5cdHZhciBleHBpcmF0aW9uRGF0ZSA9IDxTdGFja0xheW91dD4gdGhpcy5leHBpcmF0aW9uVGV4dC5uYXRpdmVFbGVtZW50O1xyXG5cdHZhciBjYXJkTnVtYmVyID0gPFN0YWNrTGF5b3V0PiB0aGlzLm51bWJlclRleHQubmF0aXZlRWxlbWVudDtcclxuXHR2YXIgY3Z2ID0gPFN0YWNrTGF5b3V0PiB0aGlzLmN2dlRleHQubmF0aXZlRWxlbWVudDtcclxuXHR2YXIgY2FyZEltYWdlID0gPFN0YWNrTGF5b3V0PiB0aGlzLmNhcmRMYXlvdXQubmF0aXZlRWxlbWVudDtcclxuXHJcblx0c3VibWl0LmlzRW5hYmxlZCA9IGZhbHNlO1xyXG5cclxuICB9XHJcblxyXG4gIGNsb3NlKCkge1xyXG4gIFx0dGhpcy5wYXJhbXMuY2xvc2VDYWxsYmFjaygpO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q2xpZW50VG9rZW4oKSB7XHJcbiAgXHRjb25zdCB0b2tlbiA9IG5ldyBPYnNlcnZhYmxlKCk7XHJcbiAgXHR0b2tlbi5zZXQoJ0F1dGhvcml6YXRpb24nLCAnc2FuZGJveF85cXNieXlxOF93bWMzdjg4cjM2Y2J4amp6Jyk7XHJcbiAgXHRyZXR1cm4gdG9rZW47XHJcbiAgfVxyXG5cclxuICBjcmVhdGVQdXJjaGFzZUZ1bmN0aW9uKG5vbmNlOiBzdHJpbmcsIGNoYXJnZUFtb3VudDogbnVtYmVyKSB7XHJcbiAgXHRyZXR1cm4gdGhpcy5wYXltZW50U2VydmljZS5hZGRQYXltZW50TWV0aG9kVG9Vc2VyKHRoaXMudXNlci5wYXltZW50X2lkLCBub25jZSk7XHJcbiAgfVxyXG5cclxuICBvblBheW1lbnRTdGF0dXMoZXZlbnQpIHtcclxuXHJcbiAgfVxyXG5cclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLyogQWRkIG1vYmlsZSBzdHlsZXMgZm9yIHRoZSBjb21wb25lbnQgaGVyZS4gICovXFxyXFxuLnBhZ2Uge1xcclxcbiAgLyphbGlnbi1pdGVtczogY2VudGVyOyovXFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybSB7XFxyXFxuICBtYXJnaW4tbGVmdDogMzA7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDMwO1xcclxcbiAgZmxleC1ncm93OiAyO1xcclxcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlIHtcXHJcXG5cXHRtYXJnaW46IDEwO1xcclxcblxcdGZvbnQtc2l6ZTogMjg7XFxyXFxuXFx0d2lkdGg6IDQ4O1xcclxcblxcdGhlaWdodDogNDg7XFxyXFxufVxcclxcblxcclxcbi5jbG9zZS1idXR0b24tY29udGFpbmVyIHtcXHJcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0bGVmdDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlci1sYWJlbCB7XFxyXFxuXFx0bWFyZ2luLXRvcDogNjA7XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTogMDtcXHJcXG5cXHRmb250LXNpemU6IDIwO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyLWxhYmVsLTIge1xcclxcblxcdGZvbnQtc2l6ZTogMjA7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXItbGFiZWwtMyB7XFxyXFxuXFx0bWFyZ2luLXRvcDogMTQ7XFxyXFxuXFx0bWFyZ2luLWxlZnQ6IDE2O1xcclxcblxcdG1hcmdpbi1yaWdodDogMTY7XFxyXFxuXFx0Zm9udC1zaXplOiAxODtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlci1sYWJlbC00IHtcXHJcXG5cXHRmb250LXNpemU6IDE4O1xcclxcblxcdG1hcmdpbi10b3A6IDE0O1xcclxcbn1cXHJcXG5cXHJcXG4ucmlkaW5nLWxhYmVsIHtcXHJcXG5cXHRmb250LXdlaWdodDogNzAwO1xcclxcblxcdGNvbG9yOiAjYWMwMGU2O1xcclxcbn1cXHJcXG5cXHJcXG4uZHJpdmluZy1sYWJlbCB7XFxyXFxuXFx0Y29sb3I6ICM1YzY4N2M7XFxyXFxufVxcclxcblxcclxcbi5zd2l0Y2gtY29udGFpbmVyIHtcXHJcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zd2l0Y2gge1xcclxcblxcdGNvbG9yOiAjYWMwMGU2O1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICNjZDk0ZTA7XFxyXFxufVxcclxcblxcclxcbi5zdWJtaXQtYnRuIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjYWMwMGU2O1xcclxcblxcdG1hcmdpbi10b3A6IDIwO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9sZCB7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDcwMDtcXHJcXG59XFxyXFxuXFxyXFxuLnN0YXJ0LWZpZWxkIHtcXHJcXG5cXHRtYXJnaW4tdG9wOiAxNDtcXHJcXG59XFxyXFxuXFxyXFxuLmFjdGl2aXR5LWluZGljYXRvciB7XFxyXFxuICBjb2xvcjogI2FjMDBlNjtcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XFxyXFxuICBtYXJnaW4tdG9wOiA0NyU7XFxyXFxufVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxTdGFja0xheW91dD5cXHJcXG5cXHQ8QWN0aXZpdHlJbmRpY2F0b3IgI2FjdGl2aXR5SW5kaWNhdG9yIGJ1c3k9XFxcInRydWVcXFwiIHdpZHRoPVxcXCI0MFxcXCIgaGVpZ2h0PVxcXCI0MFxcXCIgY2xhc3M9XFxcImFjdGl2aXR5LWluZGljYXRvclxcXCI+PC9BY3Rpdml0eUluZGljYXRvcj5cXHJcXG5cXHQ8U2Nyb2xsVmlldyBoZWlnaHQ9XFxcIjEwMCVcXFwiPlxcclxcblxcdDxGbGV4Ym94TGF5b3V0IGNsYXNzPVxcXCJwYWdlXFxcIiAjYWRkQ29udGFpbmVyPlxcclxcblxcdFxcdDxTdGFja0xheW91dCBjbGFzcz1cXFwiY2xvc2UtYnV0dG9uLWNvbnRhaW5lclxcXCIgb3JpZW50YXRpb249XFxcImhvcml6b250YWxcXFwiPlxcclxcblxcdFxcdFxcdDxMYWJlbCB0ZXh0PVxcXCImdGltZXM7XFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiICh0YXApPVxcXCJjbG9zZSgnY2FuY2VsJylcXFwiPjwvTGFiZWw+XFxyXFxuXFx0XFx0PC9TdGFja0xheW91dD5cXHJcXG5cXHJcXG5cXHJcXG5cXHRcXHQ8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImZvcm1cXFwiPlxcclxcblxcdFxcdFxcdDxMYWJlbCB0ZXh0PVxcXCJJIGFtLi4uXFxcIiBjbGFzcz1cXFwiaGVhZGVyLWxhYmVsLTIgYm9sZFxcXCI+PC9MYWJlbD5cXHJcXG5cXHJcXG5cXHRcXHQgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiaW5wdXQtZmllbGQgc3dpdGNoLWNvbnRhaW5lclxcXCIgb3JpZW50YXRpb249XFxcImhvcml6b250YWxcXFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCI+XFxyXFxuXFx0XFx0ICBcXHQ8TGFiZWwgdGV4dD1cXFwiRHJpdmluZ1xcXCIgY2xhc3M9XFxcImhlYWRlci1sYWJlbC0zIGRyaXZpbmctbGFiZWxcXFwiICNkcml2aW5nTGFiZWw+PC9MYWJlbD5cXHJcXG5cXHRcXHQgIFxcdDxTd2l0Y2ggY2hlY2tlZD1cXFwidHJ1ZVxcXCIgKGNoZWNrZWRDaGFuZ2UpPVxcXCJvbkNoZWNrZWRDaGFuZ2UoJGV2ZW50KVxcXCIgY2xhc3M9XFxcIm0tMTUgc3dpdGNoXFxcIj48L1N3aXRjaD5cXHJcXG5cXHRcXHQgIFxcdDxMYWJlbCB0ZXh0PVxcXCJSaWRpbmdcXFwiIGNsYXNzPVxcXCJoZWFkZXItbGFiZWwtMyByaWRpbmctbGFiZWxcXFwiICNyaWRpbmdMYWJlbD48L0xhYmVsPlxcclxcblxcdFxcdCAgPC9TdGFja0xheW91dD5cXHJcXG5cXHJcXG5cXHRcXHQgIDxMYWJlbCB0ZXh0PVxcXCJXaGVyZT9cXFwiIGNsYXNzPVxcXCJoZWFkZXItbGFiZWwgYm9sZFxcXCI+PC9MYWJlbD5cXHJcXG5cXHRcXHQgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiaW5wdXQtZmllbGQgc3RhcnQtZmllbGRcXFwiPlxcclxcbjwhLS0gXFx0XFx0ICAgIDxUZXh0RmllbGQgY2xhc3M9XFxcImlucHV0XFxcIiBhdXRvY29ycmVjdD1cXFwiZmFsc2VcXFwiIGhpbnQ9XFxcIldoZXJlIGZyb20/XFxcIiBbKG5nTW9kZWwpXT1cXFwic3RhcnRBZGRyZXNzXFxcIiAodGV4dENoYW5nZSk9XFxcInN0YXJ0QXV0b2NvbXBsZXRlKClcXFwiICh0YXApPVxcXCJzaG93TW9kYWwoJ3N0YXJ0JylcXFwiIHJlcXVpcmVkPjwvVGV4dEZpZWxkPiAtLT5cXHJcXG5cXHRcXHRcXHQ8TGFiZWwgdGV4dD1cXFwie3sgc3RhcnRMYWJlbCB9fVxcXCIgY2xhc3M9XFxcImhlYWRlci1sYWJlbC0zXFxcIiAodGFwKT1cXFwic2hvd01vZGFsKCdzdGFydCcpXFxcIj48L0xhYmVsPlxcclxcblxcdFxcdCAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImhyLWxpZ2h0XFxcIj48L1N0YWNrTGF5b3V0PlxcclxcblxcdFxcdCAgPC9TdGFja0xheW91dD5cXHJcXG5cXHJcXG5cXHRcXHQgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiaW5wdXQtZmllbGRcXFwiPlxcclxcbjwhLS0gXFx0XFx0ICAgIDxUZXh0RmllbGQgY2xhc3M9XFxcImlucHV0XFxcIiBhdXRvY29ycmVjdD1cXFwiZmFsc2VcXFwiIGhpbnQ9XFxcIldoZXJlIHRvP1xcXCIgWyhuZ01vZGVsKV09XFxcImVuZEFkZHJlc3NcXFwiICh0ZXh0Q2hhbmdlKT1cXFwiZW5kQXV0b2NvbXBsZXRlKClcXFwiICh0YXApPVxcXCJzaG93TW9kYWwoJ2VuZCcpXFxcIiByZXF1aXJlZD48L1RleHRGaWVsZD4gLS0+XFxyXFxuXFx0XFx0XFx0XFx0PExhYmVsIHRleHQ9XFxcInt7IGVuZExhYmVsIH19XFxcIiBjbGFzcz1cXFwiaGVhZGVyLWxhYmVsLTNcXFwiICh0YXApPVxcXCJzaG93TW9kYWwoJ2VuZCcpXFxcIj48L0xhYmVsPlxcclxcblxcdFxcdCAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImhyLWxpZ2h0XFxcIj48L1N0YWNrTGF5b3V0PlxcclxcblxcdFxcdCAgPC9TdGFja0xheW91dD5cXHJcXG5cXHJcXG5cXHQ8IS0tIFxcdCAgPERhdGVQaWNrZXIgKGxvYWRlZCk9XFxcIm9uUGlja2VyTG9hZGVkKCRldmVudClcXFwiIChkYXRlQ2hhbmdlKT1cXFwib25EYXRlQ2hhbmdlZCgkZXZlbnQpXFxcIiBcXHJcXG5cXHQoZGF5Q2hhbmdlKT1cXFwib25EYXlDaGFuZ2VkKCRldmVudClcXFwiIChtb250aENoYW5nZSk9XFxcIm9uTW9udGhDaGFuZ2VkKCRldmVudClcXFwiICh5ZWFyQ2hhbmdlKT1cXFwib25ZZWFyQ2hhbmdlZCgkZXZlbnQpXFxcIiB2ZXJ0aWNhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIj48L0RhdGVQaWNrZXI+IC0tPlxcclxcblxcdFxcdFxcdDxMYWJlbCB0ZXh0PVxcXCJXaGVuP1xcXCIgY2xhc3M9XFxcImhlYWRlci1sYWJlbCBib2xkXFxcIj48L0xhYmVsPlxcclxcblxcclxcblxcdFxcdCAgPERhdGVQaWNrZXIgKGxvYWRlZCk9XFxcIm9uUGlja2VyTG9hZGVkKCRldmVudClcXFwiIChkYXRlQ2hhbmdlKT1cXFwib25EYXRlQ2hhbmdlZCgkZXZlbnQpXFxcIiB2ZXJ0aWNhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIj48L0RhdGVQaWNrZXI+XFxyXFxuXFxyXFxuXFx0XFx0ICA8TGFiZWwgKm5nSWY9XFxcImlzRHJpdmluZ1xcXCIgdGV4dD1cXFwiSG93IG1hbnk/XFxcIiBjbGFzcz1cXFwiaGVhZGVyLWxhYmVsXFxcIj48L0xhYmVsPlxcclxcblxcdFxcdCAgPEdyaWRMYXlvdXQgKm5nSWY9XFxcImlzRHJpdmluZ1xcXCIgY2xhc3M9XFxcIm0tMTVcXFwiIHJvd3M9XFxcImF1dG9cXFwiIGNvbHVtbnM9XFxcIjUwICogNTBcXFwiPlxcclxcblxcdFxcdFxcdCAgICA8TGFiZWwgY2xhc3M9XFxcImgzXFxcIiB0ZXh0PVxcXCIxXFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgcm93PVxcXCIxMFxcXCIgY29sPVxcXCIwXFxcIj48L0xhYmVsPlxcclxcblxcdFxcdFxcdCAgICA8U2xpZGVyIG1pblZhbHVlPVxcXCIxXFxcIiBtYXhWYWx1ZT1cXFwiOFxcXCIgWyhuZ01vZGVsKV09XFxcImNhcGFjaXR5XFxcIiByb3c9XFxcIjBcXFwiXFxyXFxuXFx0XFx0XFx0ICAgICBjb2w9XFxcIjFcXFwiPjwvU2xpZGVyPlxcclxcblxcdFxcdFxcdCAgICA8TGFiZWwgY2xhc3M9XFxcImgzXFxcIiB0ZXh0PVxcXCI4XFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgcm93PVxcXCIwXFxcIiBjb2w9XFxcIjJcXFwiPjwvTGFiZWw+XFxyXFxuXFx0XFx0XFx0PC9HcmlkTGF5b3V0PlxcclxcblxcdFxcdCAgPExhYmVsICpuZ0lmPVxcXCJpc0RyaXZpbmdcXFwiIHRleHQ9XFxcInt7IGNhcGFjaXR5IH19XFxcIiBjbGFzcz1cXFwiaGVhZGVyLWxhYmVsLTJcXFwiPjwvTGFiZWw+XFxyXFxuXFxyXFxuXFx0XFx0ICA8QnV0dG9uIHRleHQ9XFxcIkFkZFxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeSBzdWJtaXQtYnRuXFxcIiAodGFwKT1cXFwiYWRkUG9zdGluZygpXFxcIj48L0J1dHRvbj5cXHJcXG5cXHRcXHQ8L1N0YWNrTGF5b3V0PlxcclxcblxcdDwvRmxleGJveExheW91dD5cXHJcXG5cXHQ8L1Njcm9sbFZpZXc+XFxyXFxuPC9TdGFja0xheW91dD5cXHJcXG5cXHJcXG5cXHJcXG5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTW9kYWxEaWFsb2dQYXJhbXMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZGlyZWN0aXZlcy9kaWFsb2dzXCI7XHJcbmltcG9ydCB7IE1vZGFsRGlhbG9nU2VydmljZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9kaXJlY3RpdmVzL2RpYWxvZ3NcIjtcclxuaW1wb3J0IHsgUG9zdGluZ1NlcnZpY2UgfSBmcm9tICcuLi9wb3N0aW5nLnNlcnZpY2UudG5zJztcclxuaW1wb3J0IHsgRGF0ZVBpY2tlciB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RhdGUtcGlja2VyXCI7XHJcbmltcG9ydCB7IFN3aXRjaCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3N3aXRjaFwiO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZVwiO1xyXG5pbXBvcnQgeyBMYWJlbCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xhYmVsXCI7XHJcbmltcG9ydCB7IENvbG9yIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvY29sb3JcIjtcclxuaW1wb3J0IHsgUGxhY2VzQXV0b2NvbXBsZXRlU2VydmljZSB9IGZyb20gJy4uL3BsYWNlcy1hdXRvY29tcGxldGUuc2VydmljZSc7XHJcbmltcG9ydCB7IHNldEludGVydmFsLCBjbGVhckludGVydmFsIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdGltZXJcIjtcclxuaW1wb3J0IHsgTG9jYXRpb25Db21wb25lbnQgfSBmcm9tICcuLi9sb2NhdGlvbi9sb2NhdGlvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUcmFuc2ZlclNlcnZpY2UgfSBmcm9tICcuLi9kYXRhdHJhbnNmZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IExvZ2luY2hlY2tTZXJ2aWNlIH0gZnJvbSAnLi4vbG9naW5jaGVjay5zZXJ2aWNlLnRucyc7XHJcbmltcG9ydCAqIGFzIGZpcmViYXNlIGZyb20gJ25hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2UnO1xyXG5pbXBvcnQgeyBEYXRlUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IENhY2hlIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9pbWFnZS1jYWNoZSc7XHJcbmltcG9ydCB7IEdvb2dsZU1hcHNTZXJ2aWNlIH0gZnJvbSAnLi4vZ29vZ2xlLW1hcHMuc2VydmljZSc7XHJcbmltcG9ydCB7SW1hZ2VTb3VyY2UsIGZyb21GaWxlLCBmcm9tUmVzb3VyY2UsIGZyb21CYXNlNjR9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2ltYWdlLXNvdXJjZVwiO1xyXG5pbXBvcnQge0ZvbGRlciwgcGF0aCwga25vd25Gb2xkZXJzfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9maWxlLXN5c3RlbVwiO1xyXG5pbXBvcnQgKiBhcyBmcyBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9maWxlLXN5c3RlbVwiO1xyXG5pbXBvcnQgeyBBY3Rpdml0eUluZGljYXRvciB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvYWN0aXZpdHktaW5kaWNhdG9yJztcclxuaW1wb3J0IHsgU2Nyb2xsVmlldyB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvc2Nyb2xsLXZpZXcnO1xyXG5pbXBvcnQgeyBGbGV4Ym94TGF5b3V0IH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9sYXlvdXRzL2ZsZXhib3gtbGF5b3V0JztcclxuaW1wb3J0IHsgU3RhY2tMYXlvdXQgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvc3RhY2stbGF5b3V0JztcclxuLy8gaW1wb3J0IHsgR29vZ2xlUGxhY2VzQXV0b2NvbXBsZXRlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWdvb2dsZS1wbGFjZXMtYXV0b2NvbXBsZXRlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLWFkZC1tb2RhbCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2FkZC1tb2RhbC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vYWRkLW1vZGFsLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWRkTW9kYWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhcmFtczogTW9kYWxEaWFsb2dQYXJhbXMsIHByaXZhdGUgcG9zdGluZ1NlcnZpY2U6IFBvc3RpbmdTZXJ2aWNlLCBwcml2YXRlIHBhZ2U6IFBhZ2UsIHByaXZhdGUgcGxhY2VzU2VydmljZTogUGxhY2VzQXV0b2NvbXBsZXRlU2VydmljZSxcclxuICAgIHByaXZhdGUgbW9kYWw6IE1vZGFsRGlhbG9nU2VydmljZSwgcHJpdmF0ZSB2Y1JlZjogVmlld0NvbnRhaW5lclJlZiwgcHJpdmF0ZSB0cmFuc2ZlclNlcnZpY2U6IFRyYW5zZmVyU2VydmljZSwgcHJpdmF0ZSBsb2dpbmNoZWNrU2VydmljZTogTG9naW5jaGVja1NlcnZpY2UsXHJcbiAgICBwcml2YXRlIGRhdGVQaXBlOiBEYXRlUGlwZSwgcHJpdmF0ZSBtYXBTZXJ2aWNlOiBHb29nbGVNYXBzU2VydmljZSkgeyB9XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ2RyaXZpbmdMYWJlbCcsIHsgc3RhdGljOiB0cnVlIH0pIGRsOiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoJ3JpZGluZ0xhYmVsJywgeyBzdGF0aWM6IHRydWUgfSkgcmw6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgnYWN0aXZpdHlJbmRpY2F0b3InLCB7IHN0YXRpYzogdHJ1ZSB9KSBhaTogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKCdhZGRDb250YWluZXInLCB7IHN0YXRpYzogdHJ1ZSB9KSBhYzogRWxlbWVudFJlZjtcclxuICAvLyBAVmlld0NoaWxkKCdzdGFydExhYmVsJykgc2w6IEVsZW1lbnRSZWY7XHJcbiAgLy8gQFZpZXdDaGlsZCgnZW5kTGFiZWwnKSBlbDogRWxlbWVudFJlZjtcclxuXHJcbiAgc3RhcnRTdWdnZXN0aW9uczogU3RyaW5nW107XHJcbiAgZW5kU3VnZ2VzdGlvbnM6IFN0cmluZ1tdO1xyXG4gIHN0YXJ0UGxhY2U7XHJcbiAgZW5kUGxhY2U7XHJcbiAgc3RhcnRBZGRyZXNzO1xyXG4gIGVuZEFkZHJlc3M7XHJcbiAgZm9ybWF0dGVkRGF0ZTtcclxuICBkYXRlID0gXCJub3dcIjtcclxuICBwcmljZSA9IFwiJDE1XCI7XHJcbiAgY2FwYWNpdHkgPSBcIi0xXCI7XHJcbiAgdXNlciA9IHtcclxuICBcdHVzZXJuYW1lOiBcIjIwMjJheWVlXCIsXHJcbiAgICBpZDogXCJcIlxyXG4gIH07XHJcbiAgc3RhcnRMYWJlbCA9IFwiUGljayBzdGFydCBsb2NhdGlvblwiO1xyXG4gIGVuZExhYmVsID0gXCJQaWNrIGVuZCBsb2NhdGlvblwiO1xyXG4gIHN0YXJ0TGF0O1xyXG4gIHN0YXJ0TG5nO1xyXG4gIGVuZExhdDtcclxuICBlbmRMbmc7XHJcblxyXG4gIGlzRHJpdmluZyA9IGZhbHNlO1xyXG4gIHN0YXJ0TG9jYXRpb25QaWNrZWQgPSBmYWxzZTtcclxuICBlbmRMb2NhdGlvblBpY2tlZCA9IGZhbHNlO1xyXG4gIGltYWdlU291cmNlID0gbmV3IEltYWdlU291cmNlKCk7XHJcblxyXG5cclxuICBBUElfS0VZID0gXCJBSXphU3lBSVR4UzFqbWY4UE10YXpSZ3VXY0FmV1F4VzFrUE9vWWdcIjtcclxuICAvLyBnb29nbGVQbGFjZXNBdXRvY29tcGxldGUgPSBuZXcgR29vZ2xlUGxhY2VzQXV0b2NvbXBsZXRlKHRoaXMuQVBJX0tFWSk7XHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICAvLyBsZXQgYWRkQ29udGFpbmVyID0gPEZsZXhib3hMYXlvdXQ+IHRoaXMuYWMubmF0aXZlRWxlbWVudDtcclxuICAgIC8vICAvLyBhY3Rpdml0eUluZGljYXRvci5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xyXG4gICAgLy8gYWRkQ29udGFpbmVyLnN0eWxlLnZpc2liaWxpdHkgPSAnY29sbGFwc2UnO1xyXG4gICAgbGV0IGFjdGl2aXR5SW5kaWNhdG9yID0gPEFjdGl2aXR5SW5kaWNhdG9yPiB0aGlzLmFpLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICBhY3Rpdml0eUluZGljYXRvci5zdHlsZS52aXNpYmlsaXR5ID0gJ2NvbGxhcHNlJ1xyXG4gICAgZmlyZWJhc2UuZ2V0Q3VycmVudFVzZXIoKS50aGVuKHVzZXIgPT4ge1xyXG4gICAgICB0aGlzLnVzZXIudXNlcm5hbWUgPSB1c2VyLmRpc3BsYXlOYW1lO1xyXG4gICAgICBpZih1c2VyLmRpc3BsYXlOYW1lID09IG51bGwgfHwgdXNlci5kaXNwbGF5TmFtZSA9PSAnJylcclxuICAgICAgICB0aGlzLnVzZXIudXNlcm5hbWUgPSB1c2VyLmVtYWlsO1xyXG4gICAgICB0aGlzLnVzZXIuaWQgPSB0aGlzLmxvZ2luY2hlY2tTZXJ2aWNlLmdldFVzZXIoKTtcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBzdGFydFNlbGVjdChldmVudDogRXZlbnQpIHtcclxuICAgIGNvbnNvbGUubG9nKGV2ZW50LnNyY0VsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgc2hvd01vZGFsKHR5cGUpIHtcclxuICAgIGxldCBvcHRpb25zID0ge1xyXG4gICAgICAgIGNvbnRleHQ6IHt9LFxyXG4gICAgICAgIGZ1bGxzY3JlZW46IHRydWUsXHJcbiAgICAgICAgdmlld0NvbnRhaW5lclJlZjogdGhpcy52Y1JlZlxyXG4gICAgICAgIC8vIGFuaW1hdGVkOiB0cnVlLFxyXG4gICAgICAgIC8vIHRyYW5zaXRpb246IHsgbmFtZTogXCJzbGlkZVRvcFwiIH1cclxuICAgIH07XHJcbiAgICB0aGlzLnRyYW5zZmVyU2VydmljZS5zZXREYXRhKHR5cGUpO1xyXG4gICAgdGhpcy5tb2RhbC5zaG93TW9kYWwoTG9jYXRpb25Db21wb25lbnQsIG9wdGlvbnMpLnRoZW4ocmVzID0+IHtcclxuICAgICAgICBpZihyZXMgIT0gbnVsbClcclxuICAgICAgICAgIGlmKHJlcy5zdGFydCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRMb2NhdGlvblBpY2tlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRMYWJlbCA9ICdTdGFydCBsb2NhdGlvbjogJyArIHJlcy5zdGFydDtcclxuICAgICAgICAgICAgdGhpcy5zdGFydFBsYWNlID0gcmVzLnN0YXJ0O1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0QWRkcmVzcyA9IHJlcy5hZGRyZXNzO1xyXG5cclxuICAgICAgICAgICAgLy8gbGV0IHNMYWJlbCA9IDxMYWJlbD4gdGhpcy5zbC5uYXRpdmVFbGVtZW50O1xyXG4gICAgICAgICAgICAvLyBzTGFiZWwuY2xhc3NOYW1lICs9ICdib2xkJztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2UgaWYocmVzLmVuZCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW5kTG9jYXRpb25QaWNrZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmVuZExhYmVsID0gJ0VuZCBsb2NhdGlvbjogJyArIHJlcy5lbmQ7XHJcbiAgICAgICAgICAgIHRoaXMuZW5kUGxhY2UgPSByZXMuZW5kO1xyXG4gICAgICAgICAgICB0aGlzLmVuZEFkZHJlc3MgPSByZXMuYWRkcmVzcztcclxuICAgICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIGlmKHR5cGUgPT0gJ3N0YXJ0Jykge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0TG9jYXRpb25QaWNrZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0TGFiZWwgPSAnUGljayBzdGFydCBsb2NhdGlvbic7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbHNlIGlmKHR5cGUgPT0gJ2VuZCcpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGFydExvY2F0aW9uUGlja2VkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRMYWJlbCA9ICdQaWNrIGVuZCBsb2NhdGlvbic7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjbG9zZShyZXMpIHtcclxuICBcdHRoaXMucGFyYW1zLmNsb3NlQ2FsbGJhY2socmVzKTtcclxuICAgfVxyXG5cclxuICAgYWRkUG9zdGluZygpIHtcclxuICAgICBsZXQgYWRkQ29udGFpbmVyID0gPEZsZXhib3hMYXlvdXQ+IHRoaXMuYWMubmF0aXZlRWxlbWVudDtcclxuICAgICBhZGRDb250YWluZXIuc3R5bGUudmlzaWJpbGl0eSA9ICdjb2xsYXBzZSc7XHJcbiAgICAgbGV0IGFjdGl2aXR5SW5kaWNhdG9yID0gPEFjdGl2aXR5SW5kaWNhdG9yPiB0aGlzLmFpLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICAgYWN0aXZpdHlJbmRpY2F0b3Iuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcclxuICAgICB0aGlzLm1hcFNlcnZpY2UuZ2V0R2VvY29kZVJlc3VsdHModGhpcy5zdGFydFBsYWNlICsgJyAnICsgdGhpcy5zdGFydEFkZHJlc3MpLnN1YnNjcmliZSgocmVzOiBhbnkpID0+IHtcclxuICAgICAgdGhpcy5zdGFydExhdCA9IHJlcy5yZXN1bHRzWzBdLmdlb21ldHJ5LmxvY2F0aW9uLmxhdDtcclxuICAgICAgdGhpcy5zdGFydExuZyA9IHJlcy5yZXN1bHRzWzBdLmdlb21ldHJ5LmxvY2F0aW9uLmxuZztcclxuICAgICAgdGhpcy5tYXBTZXJ2aWNlLmdldEdlb2NvZGVSZXN1bHRzKHRoaXMuZW5kUGxhY2UgKyAnICcgKyB0aGlzLmVuZEFkZHJlc3MpLnN1YnNjcmliZSgocmVzOiBhbnkpID0+IHtcclxuICAgICAgICB0aGlzLmVuZExhdCA9IHJlcy5yZXN1bHRzWzBdLmdlb21ldHJ5LmxvY2F0aW9uLmxhdDtcclxuICAgICAgICB0aGlzLmVuZExuZyA9IHJlcy5yZXN1bHRzWzBdLmdlb21ldHJ5LmxvY2F0aW9uLmxuZztcclxuXHJcbiAgICAgICAgaWYodGhpcy5zdGFydExvY2F0aW9uUGlja2VkICYmIHRoaXMuZW5kTG9jYXRpb25QaWNrZWQpIHtcclxuICAgICAgICAgdmFyIHBvc3RpbmdzQ29sbGVjdGlvbiA9IGZpcmViYXNlLmZpcmVzdG9yZS5jb2xsZWN0aW9uKCdwb3N0aW5ncycpO1xyXG4gICAgICAgICBwb3N0aW5nc0NvbGxlY3Rpb24uYWRkKHtcclxuICAgICAgICAgICB1aWQ6IHRoaXMudXNlci5pZCxcclxuICAgICAgICAgICB1c2VyOiB0aGlzLnVzZXIudXNlcm5hbWUsXHJcbiAgICAgICAgICAgc3RhcnRBZGRyZXNzOiB0aGlzLnN0YXJ0UGxhY2UsXHJcbiAgICAgICAgICAgZW5kQWRkcmVzczogdGhpcy5lbmRQbGFjZSxcclxuICAgICAgICAgICBzdGFydEZvcm1hdHRlZDogdGhpcy5zdGFydEFkZHJlc3MsXHJcbiAgICAgICAgICAgZW5kRm9ybWF0dGVkOiB0aGlzLmVuZEFkZHJlc3MsXHJcbiAgICAgICAgICAgZGF0ZTogdGhpcy5kYXRlLFxyXG4gICAgICAgICAgIHByaWNlOiB0aGlzLnByaWNlLFxyXG4gICAgICAgICAgIGNhcGFjaXR5OiB0aGlzLmNhcGFjaXR5LFxyXG4gICAgICAgICAgIGNvbW1lbnRzOiBcIlwiLFxyXG4gICAgICAgICAgIGZvcm1hdHRlZERhdGU6IHRoaXMuZm9ybWF0dGVkRGF0ZSxcclxuICAgICAgICAgICBzdGFydExhdDogdGhpcy5zdGFydExhdCxcclxuICAgICAgICAgICBlbmRMYXQ6IHRoaXMuZW5kTGF0LFxyXG4gICAgICAgICAgIHN0YXJ0TG5nOiB0aGlzLnN0YXJ0TG5nLFxyXG4gICAgICAgICAgIGVuZExuZzogdGhpcy5lbmRMbmdcclxuICAgICAgICAgfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcyk7XHJcblxyXG4gICAgICAgICAgIGZpcmViYXNlLmZpcmVzdG9yZS5jb2xsZWN0aW9uKCd1c2VycycpLmRvYyh0aGlzLnVzZXIuaWQpLmdldCgpLnRoZW4oZG9jID0+IHtcclxuICAgICAgICAgICAgIHZhciBwb3N0czogU3RyaW5nW10gPSBkb2MuZGF0YSgpLnBvc3RzO1xyXG4gICAgICAgICAgICAgcG9zdHMucHVzaChyZXMuaWQpO1xyXG4gICAgICAgICAgICAgZmlyZWJhc2UuZmlyZXN0b3JlLmNvbGxlY3Rpb24oJ3VzZXJzJykuZG9jKHRoaXMudXNlci5pZCkudXBkYXRlKHtcclxuICAgICAgICAgICAgICAgcG9zdHM6IHBvc3RzXHJcbiAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgdGhpcy51cGxvYWRNYXAocmVzLmlkLCAnc21hbGxfbWFwLnBuZycpO1xyXG4gICAgICAgICAgICAgdGhpcy51cGxvYWRNYXAocmVzLmlkLCAnbGFyZ2VfbWFwLnBuZycpO1xyXG4gICAgICAgICAgIH0pLmNhdGNoKChlcnIpID0+IHt9KVxyXG4gICAgICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7fSlcclxuICAgICAgIH1cclxuXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICAgIC8vIHRoaXMucG9zdGluZ1NlcnZpY2UuYWRkUG9zdGluZyh0aGlzLnVzZXIudXNlcm5hbWUsIHRoaXMuc3RhcnRQbGFjZSwgdGhpcy5lbmRQbGFjZSwgdGhpcy5kYXRlLCB0aGlzLnByaWNlLCB0aGlzLmNhcGFjaXR5LCBcIlwiKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAvLyAgIHRoaXMuY2xvc2UoJ3Bvc3RlZCcpO1xyXG4gICAgICAvLyB9KTtcclxuICB9XHJcblxyXG4gIHVwbG9hZE1hcChpZCwgdXBsb2FkTmFtZSkge1xyXG4gICAgY29uc3QgY2FjaGUgPSBuZXcgQ2FjaGUoKTtcclxuICAgIGNhY2hlLmVuYWJsZURvd25sb2FkKCk7XHJcbiAgICBsZXQgY2FjaGVkSW1hZ2VTb3VyY2U7XHJcbiAgICB2YXIgdXJsID0gdGhpcy5tYXBTZXJ2aWNlLmdldFN0YXRpY01hcCh0aGlzLnN0YXJ0UGxhY2UgKyBcIiBcIiArIHRoaXMuc3RhcnRBZGRyZXNzLCB0aGlzLmVuZFBsYWNlICsgXCIgXCIgKyB0aGlzLmVuZEFkZHJlc3MpO1xyXG4gICAgaWYodXBsb2FkTmFtZSA9PSAnbGFyZ2VfbWFwLnBuZycpXHJcbiAgICAgIHVybCA9IHRoaXMubWFwU2VydmljZS5nZXRTdGF0aWNNYXBMYXJnZSh0aGlzLnN0YXJ0UGxhY2UgKyBcIiBcIiArIHRoaXMuc3RhcnRBZGRyZXNzLCB0aGlzLmVuZFBsYWNlICsgXCIgXCIgKyB0aGlzLmVuZEFkZHJlc3MpO1xyXG4gICAgLy8gVHJ5IHRvIHJlYWQgdGhlIGltYWdlIGZyb20gdGhlIGNhY2hlXHJcbiAgICBjb25zdCBteUltYWdlID0gY2FjaGUuZ2V0KHVybCk7XHJcbiAgICBjYWNoZS5wdXNoKHtcclxuICAgIGtleTogdXJsLFxyXG4gICAgdXJsOiB1cmwsXHJcbiAgICBjb21wbGV0ZWQ6IChpbWFnZSwga2V5KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh1cmwgPT09IGtleSkge1xyXG4gICAgICAgICAgICAgICAgY2FjaGVkSW1hZ2VTb3VyY2UgPSB0aGlzLmltYWdlU291cmNlLnNldE5hdGl2ZVNvdXJjZShpbWFnZSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmb2xkZXJQYXRoOiBzdHJpbmcgPSBrbm93bkZvbGRlcnMuZG9jdW1lbnRzKCkucGF0aDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZpbGVOYW1lID0gdXBsb2FkTmFtZTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZpbGVQYXRoID0gcGF0aC5qb2luKGZvbGRlclBhdGgsIGZpbGVOYW1lKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNhdmVkOiBib29sZWFuID0gdGhpcy5pbWFnZVNvdXJjZS5zYXZlVG9GaWxlKGZpbGVQYXRoLCBcInBuZ1wiKTtcclxuICAgICAgICAgICAgICAgIGlmIChzYXZlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpcmViYXNlLnN0b3JhZ2UudXBsb2FkRmlsZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAvLyB0aGUgZnVsbCBwYXRoIG9mIHRoZSBmaWxlIGluIHlvdXIgRmlyZWJhc2Ugc3RvcmFnZSAoZm9sZGVycyB3aWxsIGJlIGNyZWF0ZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICByZW1vdGVGdWxsUGF0aDogJ3Bvc3RpbmdzLycgKyBpZCArICcvbWFwcy8nICsgdXBsb2FkTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgIC8vIG9wdGlvbiAxOiBhIGZpbGUtc3lzdGVtIG1vZHVsZSBGaWxlIG9iamVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgbG9jYWxGaWxlOiBmcy5GaWxlLmZyb21QYXRoKGZpbGVQYXRoKSxcclxuICAgICAgICAgICAgICAgICAgICAgIC8vIG9wdGlvbiAyOiBhIGZ1bGwgZmlsZSBwYXRoIChpZ25vcmVkIGlmICdsb2NhbEZpbGUnIGlzIHNldClcclxuICAgICAgICAgICAgICAgICAgICAgIGxvY2FsRnVsbFBhdGg6IGZpbGVQYXRoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgLy8gZ2V0IG5vdGlmaWVkIG9mIGZpbGUgdXBsb2FkIHByb2dyZXNzXHJcbiAgICAgICAgICAgICAgICAgICAgICBvblByb2dyZXNzOiAoc3RhdHVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVXBsb2FkZWQgZnJhY3Rpb246IFwiICsgc3RhdHVzLmZyYWN0aW9uQ29tcGxldGVkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJQZXJjZW50YWdlIGNvbXBsZXRlOiBcIiArIHN0YXR1cy5wZXJjZW50YWdlQ29tcGxldGVkKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KS50aGVuKCh1cGxvYWRlZEZpbGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIGlmKHVwbG9hZE5hbWUgPT0gJ3NtYWxsX21hcC5wbmcnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaXJlYmFzZS5zdG9yYWdlLmdldERvd25sb2FkVXJsKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdGVGdWxsUGF0aDogJ3Bvc3RpbmdzLycgKyBpZCArICcvbWFwcy9zbWFsbF9tYXAucG5nJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS50aGVuKCh1cmwpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBmaXJlYmFzZS5maXJlc3RvcmUuY29sbGVjdGlvbigncG9zdGluZ3MnKS5kb2MoaWQpLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXBfdXJsOiB1cmxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhY3Rpdml0eUluZGljYXRvciA9IDxBY3Rpdml0eUluZGljYXRvcj4gdGhpcy5haS5uYXRpdmVFbGVtZW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGFkZENvbnRhaW5lciA9IDxGbGV4Ym94TGF5b3V0PiB0aGlzLmFjLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpdml0eUluZGljYXRvci5zdHlsZS52aXNpYmlsaXR5ID0gJ2NvbGxhcHNlJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZENvbnRhaW5lci5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZSgncG9zdGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBvblBpY2tlckxvYWRlZChhcmdzKSB7XHJcbiAgXHRsZXQgZGF0ZVBpY2tlciA9IDxEYXRlUGlja2VyPmFyZ3Mub2JqZWN0O1xyXG5cclxuICBcdHZhciB0b2RheSA9IG5ldyBEYXRlKCk7XHJcblxyXG4gIFx0ZGF0ZVBpY2tlci5taW5EYXRlID0gbmV3IERhdGUoKTtcclxuXHJcbiAgXHR2YXIgbmV4dFllYXJEYXRlID0gbmV3IERhdGUodG9kYXkpO1xyXG4gIFx0bmV4dFllYXJEYXRlLnNldERhdGUobmV4dFllYXJEYXRlLmdldERhdGUoKSArIDM2NSk7XHJcbiAgXHRkYXRlUGlja2VyLm1heERhdGUgPSBuZXh0WWVhckRhdGU7XHJcbiAgfVxyXG5cclxuICBvbkRhdGVDaGFuZ2VkKGFyZ3MpIHtcclxuICBcdGxldCBkYXRlUGlja2VyID0gPERhdGVQaWNrZXI+YXJncy5vYmplY3Q7XHJcbiAgXHR2YXIgc2VsZWN0ZWREYXRlID0gZGF0ZVBpY2tlci5kYXRlO1xyXG4gICAgdGhpcy5mb3JtYXR0ZWREYXRlID0gdGhpcy5kYXRlUGlwZS50cmFuc2Zvcm0oc2VsZWN0ZWREYXRlLFwieXl5eS1NTS1kZFwiKVxyXG5cclxuICBcdC8vIGNvbnNvbGUubG9nKHNlbGVjdGVkRGF0ZS50b1N0cmluZygpLnN1YnN0cmluZygwLCAxNSkpO1xyXG4gIFx0dGhpcy5kYXRlID0gc2VsZWN0ZWREYXRlLnRvU3RyaW5nKCkuc3Vic3RyaW5nKDAsIDE1KTtcclxuICB9XHJcblxyXG4gIG9uQ2hlY2tlZENoYW5nZShhcmdzKSB7XHJcbiAgXHRsZXQgbXlTd2l0Y2ggPSBhcmdzLm9iamVjdCBhcyBTd2l0Y2g7XHJcbiAgICBsZXQgaXNDaGVja2VkID0gbXlTd2l0Y2guY2hlY2tlZDsgLy8gYm9vbGVhblxyXG5cclxuICAgIGxldCBkcml2aW5nTGFiZWwgPSA8TGFiZWw+IHRoaXMuZGwubmF0aXZlRWxlbWVudDtcclxuICAgIGxldCByaWRpbmdMYWJlbCA9IDxMYWJlbD4gdGhpcy5ybC5uYXRpdmVFbGVtZW50O1xyXG5cclxuICAgIGlmKGlzQ2hlY2tlZCkge1xyXG4gICAgXHRkcml2aW5nTGFiZWwuc3R5bGUuZm9udFdlaWdodCA9IFwiNDAwXCI7XHJcbiAgICBcdGRyaXZpbmdMYWJlbC5zdHlsZS5jb2xvciA9IG5ldyBDb2xvcihcIiM1YzY4N2NcIik7XHJcbiAgICBcdHJpZGluZ0xhYmVsLnN0eWxlLmZvbnRXZWlnaHQgPSBcIjcwMFwiO1xyXG4gICAgXHRyaWRpbmdMYWJlbC5zdHlsZS5jb2xvciA9IG5ldyBDb2xvcihcIiNhYzAwZTZcIik7XHJcbiAgICBcdHRoaXMuaXNEcml2aW5nID0gZmFsc2U7XHJcbiAgICBcdHRoaXMuY2FwYWNpdHkgPSBcIi0xXCI7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgIFx0ZHJpdmluZ0xhYmVsLnN0eWxlLmZvbnRXZWlnaHQgPSBcIjcwMFwiO1xyXG4gICAgXHRkcml2aW5nTGFiZWwuc3R5bGUuY29sb3IgPSBuZXcgQ29sb3IoXCIjYWMwMGU2XCIpO1xyXG4gICAgXHRyaWRpbmdMYWJlbC5zdHlsZS5mb250V2VpZ2h0ID0gXCI0MDBcIjtcclxuICAgIFx0cmlkaW5nTGFiZWwuc3R5bGUuY29sb3IgPSBuZXcgQ29sb3IoXCIjNWM2ODdjXCIpO1xyXG4gICAgXHR0aGlzLmlzRHJpdmluZyA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLyogQWRkIG1vYmlsZSBzdHlsZXMgZm9yIHRoZSBjb21wb25lbnQgaGVyZS4gICovXFxuLmNsb3NlIHtcXG5cXHRtYXJnaW46IDEwO1xcblxcdGZvbnQtc2l6ZTogMjg7XFxuXFx0d2lkdGg6IDQ4O1xcblxcdGhlaWdodDogNDg7XFxufVxcblxcbi5jbG9zZS1idXR0b24tY29udGFpbmVyIHtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0bGVmdDogMDtcXG59XFxuXFxuLnBheW1lbnQtdHlwZS1pY29uIHtcXG5cXHRoZWlnaHQ6IDM0O1xcblxcdHdpZHRoOiAzNDtcXG5cXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuXFx0bWFyZ2luLXRvcDogMTg7XFxuXFx0bWFyZ2luLWJvdHRvbTogMTg7XFxuXFx0bWFyZ2luLWxlZnQ6IDM2O1xcbn1cXG5cXG4ucGF5bWVudC1pbmZvLWxhYmVsIHtcXG5cXHRmb250LXNpemU6IDE2O1xcblxcdC8qZm9udC13ZWlnaHQ6IDcwMDsqL1xcblxcdHBhZGRpbmc6IDMwO1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHRjb2xvcjogYmxhY2s7XFxufVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxTdGFja0xheW91dD5cXHJcXG5cXHQ8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImNsb3NlLWJ1dHRvbi1jb250YWluZXJcXFwiIG9yaWVudGF0aW9uPVxcXCJob3Jpem9udGFsXFxcIj5cXHJcXG5cXHRcXHQ8TGFiZWwgdGV4dD1cXFwiJnRpbWVzO1xcXCIgY2xhc3M9XFxcImNsb3NlXFxcIiAodGFwKT1cXFwiY2xvc2UoJ2NhbmNlbCcpXFxcIj48L0xhYmVsPlxcclxcblxcdDwvU3RhY2tMYXlvdXQ+XFxyXFxuXFxyXFxuXFx0PExpc3RWaWV3IFtpdGVtc109XFxcIm1ldGhvZHNcXFwiIHNlcGFyYXRvckNvbG9yPVxcXCJ0cmFuc3BhcmVudFxcXCIgKGl0ZW1UYXApPVxcXCJvblNlbGVjdCgkZXZlbnQpXFxcIj5cXHJcXG5cXHRcXHQ8bmctdGVtcGxhdGUgbGV0LWl0ZW09XFxcIml0ZW1cXFwiIGxldC1pPVxcXCJpbmRleFxcXCIgbGV0LW9kZD1cXFwib2RkXFxcIiBsZXQtZXZlbj1cXFwiZXZlblxcXCI+XFxyXFxuXFx0XFx0XFx0PFN0YWNrTGF5b3V0IFtjbGFzcy5vZGRdPVxcXCJvZGRcXFwiIFtjbGFzcy5ldmVuXT1cXFwiZXZlblxcXCIgb3JpZW50YXRpb249XFxcImhvcml6b250YWxcXFwiPlxcclxcblxcdFxcdFxcdFxcdDxJbWFnZSBbc3JjXT1cXFwiaXRlbS5wYXltZW50VHlwZVxcXCIgY2xhc3M9XFxcInBheW1lbnQtdHlwZS1pY29uXFxcIj48L0ltYWdlPlxcclxcblxcdFxcdFxcdFxcdDxMYWJlbCB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgW3RleHRdPVxcXCJpdGVtLmluZm9cXFwiIGNsYXNzPVxcXCJwYXltZW50LWluZm8tbGFiZWxcXFwiPjwvTGFiZWw+XFxyXFxuXFx0XFx0XFx0PC9TdGFja0xheW91dD5cXHJcXG5cXHRcXHQ8L25nLXRlbXBsYXRlPlxcclxcblxcdDwvTGlzdFZpZXc+XFxyXFxuPC9TdGFja0xheW91dD5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTW9kYWxEaWFsb2dQYXJhbXMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZGlyZWN0aXZlcy9kaWFsb2dzXCI7XHJcbmltcG9ydCB7IE1vZGFsRGlhbG9nU2VydmljZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9kaXJlY3RpdmVzL2RpYWxvZ3NcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZUFycmF5IH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUtYXJyYXknO1xyXG5pbXBvcnQgeyBBZGRDYXJkUGF5bWVudENvbXBvbmVudCB9IGZyb20gJy4uL2FkZC1jYXJkLXBheW1lbnQvYWRkLWNhcmQtcGF5bWVudC5jb21wb25lbnQnO1xyXG5cclxuXHJcbmNsYXNzIE1ldGhvZEl0ZW0ge1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXltZW50VHlwZTogc3RyaW5nLCBwdWJsaWMgaW5mbzogc3RyaW5nKSB7fVxyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1hZGQtcGF5bWVudCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2FkZC1wYXltZW50LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9hZGQtcGF5bWVudC5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEFkZFBheW1lbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHZjUmVmOiBWaWV3Q29udGFpbmVyUmVmLCBwcml2YXRlIG1vZGFsOiBNb2RhbERpYWxvZ1NlcnZpY2UsIHByaXZhdGUgcGFyYW1zOiBNb2RhbERpYWxvZ1BhcmFtcykgeyB9XHJcblxyXG4gIG1ldGhvZHMgPSBuZXcgT2JzZXJ2YWJsZUFycmF5PE1ldGhvZEl0ZW0+KCk7XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIFx0dGhpcy5hZGRNZXRob2RzKCk7XHJcbiAgfVxyXG5cclxuICBhZGRNZXRob2RzKCkge1xyXG4gIFx0dGhpcy5tZXRob2RzLnB1c2gobmV3IE1ldGhvZEl0ZW0oJ34vaW1nL2NyZWRpdC1jYXJkLWljb24ucG5nJywgJ0NyZWRpdCBvciBEZWJpdCBDYXJkJykpO1xyXG4gIFx0dGhpcy5tZXRob2RzLnB1c2gobmV3IE1ldGhvZEl0ZW0oJ34vaW1nL3BheXBhbC1pY29uLnBuZycsICdQYXlwYWwnKSk7XHJcbiAgXHR0aGlzLm1ldGhvZHMucHVzaChuZXcgTWV0aG9kSXRlbSgnfi9pbWcvdmVubW8taWNvbi5wbmcnLCAnVmVubW8nKSk7XHJcbiAgfVxyXG5cclxuICBvcGVuQ2FyZFBheW1lbnQoKSB7XHJcbiAgICBsZXQgb3B0aW9ucyA9IHtcclxuICAgICAgICBjb250ZXh0OiB7fSxcclxuICAgICAgICBmdWxsc2NyZWVuOiB0cnVlLFxyXG4gICAgICAgIHZpZXdDb250YWluZXJSZWY6IHRoaXMudmNSZWZcclxuICAgICAgICAvLyBhbmltYXRlZDogdHJ1ZSxcclxuICAgICAgICAvLyB0cmFuc2l0aW9uOiB7IG5hbWU6IFwic2xpZGVUb3BcIiB9XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMubW9kYWwuc2hvd01vZGFsKEFkZENhcmRQYXltZW50Q29tcG9uZW50LCBvcHRpb25zKS50aGVuKHJlcyA9PiB7XHJcblxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjbG9zZShyZXMpIHtcclxuICBcdHRoaXMucGFyYW1zLmNsb3NlQ2FsbGJhY2socmVzKTtcclxuICB9XHJcblxyXG4gIG9uU2VsZWN0KGV2ZW50KSB7XHJcbiAgXHQvL2V2ZW50LmluZGV4IHN0b3JlcyB3aGljaCBpbmRleCB3YXMgdGFwcGVkXHJcbiAgXHRpZihldmVudC5pbmRleCA9PSAwKVxyXG4gIFx0XHR0aGlzLm9wZW5DYXJkUGF5bWVudCgpO1xyXG4gIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gJy4vYXBwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IExvZ2luRGlyZWN0aXZlIH0gZnJvbSAnLi9sb2dpbi5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBMb2dpbkNvbXBvbmVudCB9IGZyb20gJy4vbG9naW4vbG9naW4uY29tcG9uZW50JztcclxuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gJy4vaG9tZS9ob21lLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEhvbWVEaXJlY3RpdmUgfSBmcm9tICcuL2hvbWUuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgSGlzdG9yeUNvbXBvbmVudCB9IGZyb20gJy4vaGlzdG9yeS9oaXN0b3J5LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFNldHRpbmdzQ29tcG9uZW50IH0gZnJvbSAnLi9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYW5pbWF0aW9ucyc7XHJcbmltcG9ydCB7IE5neFBheVBhbE1vZHVsZSB9IGZyb20gJ25neC1wYXlwYWwnO1xyXG5cclxuaW1wb3J0IHsgUG9zdGluZ1NlcnZpY2UgfSBmcm9tICcuL3Bvc3Rpbmcuc2VydmljZSc7XHJcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSAnLi91c2VyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBUcmFuc2ZlclNlcnZpY2UgfSBmcm9tICcuL2RhdGF0cmFuc2Zlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRHluYW1pY0FkZFNlcnZpY2UgfSBmcm9tICcuL2R5bmFtaWMtYWRkLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQYXltZW50U2VydmljZSB9IGZyb20gJy4vcGF5bWVudC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUG9zdGluZ0NvbXBvbmVudCB9IGZyb20gJy4vcG9zdGluZy9wb3N0aW5nLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFVwZGF0ZUNvbXBvbmVudCB9IGZyb20gJy4vdXBkYXRlL3VwZGF0ZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb25uZWN0Q29tcG9uZW50IH0gZnJvbSAnLi9jb25uZWN0L2Nvbm5lY3QuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSwgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7TWF0SW5wdXRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcclxuLy8gaW1wb3J0IHsgQW1wbGlmeUFuZ3VsYXJNb2R1bGUsIEFtcGxpZnlTZXJ2aWNlIH0gZnJvbSAnYXdzLWFtcGxpZnktYW5ndWxhcic7XHJcbmltcG9ydCB7IExvZ2lucm91dGVDb21wb25lbnQgfSBmcm9tICcuL2xvZ2lucm91dGUvbG9naW5yb3V0ZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEaWFsb2dDb21wb25lbnQgfSBmcm9tICcuL2RpYWxvZy9kaWFsb2cuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTmF2aWdhdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudCc7XHJcblxyXG5pbXBvcnQgeyBBdXRvR2VuZXJhdGVkQ29tcG9uZW50IH0gZnJvbSAnLi9hdXRvLWdlbmVyYXRlZC9hdXRvLWdlbmVyYXRlZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQYXltZW50c0NvbXBvbmVudCB9IGZyb20gJy4vcGF5bWVudHMvcGF5bWVudHMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGF5bWVudE1ldGhvZENvbXBvbmVudCB9IGZyb20gJy4vcGF5bWVudC1tZXRob2QvcGF5bWVudC1tZXRob2QuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU2VhcmNoQ29tcG9uZW50IH0gZnJvbSAnLi9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBheW1lbnRJbmZvQ29tcG9uZW50IH0gZnJvbSAnLi9wYXltZW50LWluZm8vcGF5bWVudC1pbmZvLmNvbXBvbmVudCdcclxuaW1wb3J0IHsgV2VsY29tZUNvbXBvbmVudCB9IGZyb20gJy4vd2VsY29tZS93ZWxjb21lLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBvc3RpbmdJbmZvQ29tcG9uZW50IH0gZnJvbSAnLi9wb3N0aW5nLWluZm8vcG9zdGluZy1pbmZvLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7U2V0dGluZ3Nmb3JtQ29tcG9uZW50fSBmcm9tICcuL3NldHRpbmdzZm9ybS9zZXR0aW5nc2Zvcm0uY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ2hhdENvbXBvbmVudCB9IGZyb20gJy4vY2hhdC9jaGF0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENoYXRMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9jaGF0LWxpc3QvY2hhdC1saXN0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFZpZXdJbWFnZUNvbXBvbmVudCB9IGZyb20gJy4vdmlldy1pbWFnZS92aWV3LWltYWdlLmNvbXBvbmVudCc7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHJvdXRlczogUm91dGVzID0gW1xyXG4gIHsgcGF0aDogJ2xvZ2luJywgY29tcG9uZW50OiBMb2dpbkNvbXBvbmVudCB9LFxyXG4gIHsgcGF0aDogJycsICAgcmVkaXJlY3RUbzogJy93ZWxjb21lJywgcGF0aE1hdGNoOiAnZnVsbCcgfSxcclxuICB7IHBhdGg6ICdob21lJywgY29tcG9uZW50OiBIb21lQ29tcG9uZW50IH0sXHJcbiAgeyBwYXRoOiAnaGlzdG9yeScsIGNvbXBvbmVudDogSGlzdG9yeUNvbXBvbmVudCB9LFxyXG4gIHsgcGF0aDogJ3NldHRpbmdzJywgY29tcG9uZW50OiBTZXR0aW5nc0NvbXBvbmVudCB9LFxyXG4gIHsgcGF0aDogJ3VwZGF0ZScsIGNvbXBvbmVudDogVXBkYXRlQ29tcG9uZW50IH0sXHJcbiAgeyBwYXRoOiAnY29ubmVjdCcsIGNvbXBvbmVudDogQ29ubmVjdENvbXBvbmVudCB9LFxyXG4gIHsgcGF0aDogJ2xvZ2lucm91dGUnLCBjb21wb25lbnQ6IExvZ2lucm91dGVDb21wb25lbnQgfSxcclxuICB7IHBhdGg6ICdwYXltZW50cycsIGNvbXBvbmVudDogUGF5bWVudHNDb21wb25lbnQgfSxcclxuICB7IHBhdGg6ICdzZWFyY2gnLCBjb21wb25lbnQ6IFNlYXJjaENvbXBvbmVudCB9LFxyXG4gIHsgcGF0aDogJ25hdmlnYXRpb24nLCBjb21wb25lbnQ6IE5hdmlnYXRpb25Db21wb25lbnQgfSxcclxuICB7IHBhdGg6ICdwYXltZW50aW5mbycsIGNvbXBvbmVudDogUGF5bWVudEluZm9Db21wb25lbnQgfSxcclxuICB7IHBhdGg6ICd3ZWxjb21lJywgY29tcG9uZW50OiBXZWxjb21lQ29tcG9uZW50IH0sXHJcbiAgeyBwYXRoOiAncG9zdGluZy1pbmZvJywgY29tcG9uZW50OiBQb3N0aW5nSW5mb0NvbXBvbmVudCB9LFxyXG4gIHsgcGF0aDogJ3NldHRpbmdzZm9ybScsIGNvbXBvbmVudDogU2V0dGluZ3Nmb3JtQ29tcG9uZW50IH0sXHJcbiAgeyBwYXRoOiAnY2hhdCcsIGNvbXBvbmVudDogQ2hhdENvbXBvbmVudCB9LFxyXG4gIHsgcGF0aDogJ2NoYXQtbGlzdCcsIGNvbXBvbmVudDogQ2hhdExpc3RDb21wb25lbnQgfSxcclxuICB7IHBhdGg6ICd2aWV3LWltYWdlJywgY29tcG9uZW50OiBWaWV3SW1hZ2VDb21wb25lbnQgfSxcclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyldLFxyXG4gIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBSb3V0aW5nTW9kdWxlIHsgfVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPCEtLSBodHRwczovL2RvY3MubmF0aXZlc2NyaXB0Lm9yZy9hbmd1bGFyL2NvcmUtY29uY2VwdHMvYW5ndWxhci1uYXZpZ2F0aW9uLmh0bWwjcGFnZS1yb3V0ZXItb3V0bGV0IC0tPlxcclxcblxcclxcbjxQYWdlPlxcclxcblxcdCAgICA8cGFnZS1yb3V0ZXItb3V0bGV0PjwvcGFnZS1yb3V0ZXItb3V0bGV0PlxcclxcbjwvUGFnZT5cIiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtcm9vdCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2FwcC5jb21wb25lbnQuaHRtbCcsXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHsgfVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlJztcclxuXHJcbmltcG9ydCB7IEFwcFJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL2FwcC1yb3V0aW5nLm1vZHVsZS50bnMnO1xyXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tICcuL2FwcC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBdXRvR2VuZXJhdGVkQ29tcG9uZW50IH0gZnJvbSAnLi9hdXRvLWdlbmVyYXRlZC9hdXRvLWdlbmVyYXRlZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQYXltZW50c0NvbXBvbmVudCB9IGZyb20gJy4vcGF5bWVudHMvcGF5bWVudHMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGF5bWVudE1ldGhvZENvbXBvbmVudCB9IGZyb20gJy4vcGF5bWVudC1tZXRob2QvcGF5bWVudC1tZXRob2QuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29ubmVjdENvbXBvbmVudCB9IGZyb20gJy4vY29ubmVjdC9jb25uZWN0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEhpc3RvcnlDb21wb25lbnQgfSBmcm9tICcuL2hpc3RvcnkvaGlzdG9yeS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSAnLi9ob21lL2hvbWUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTG9naW5Db21wb25lbnQgfSBmcm9tICcuL2xvZ2luL2xvZ2luLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IExvZ2lucm91dGVDb21wb25lbnQgfSBmcm9tICcuL2xvZ2lucm91dGUvbG9naW5yb3V0ZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOYXZpZ2F0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgUG9zdGluZ0NvbXBvbmVudCB9IGZyb20gJy4vcG9zdGluZy9wb3N0aW5nLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFNldHRpbmdzQ29tcG9uZW50IH0gZnJvbSAnLi9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBVcGRhdGVDb21wb25lbnQgfSBmcm9tICcuL3VwZGF0ZS91cGRhdGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi9kaWFsb2cvZGlhbG9nLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFNlYXJjaENvbXBvbmVudCB9IGZyb20gJy4vc2VhcmNoL3NlYXJjaC5jb21wb25lbnQnO1xyXG5cclxuaW1wb3J0IHsgTG9naW5EaXJlY3RpdmUgfSBmcm9tICcuL2xvZ2luLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IEhvbWVEaXJlY3RpdmUgfSBmcm9tICcuL2hvbWUuZGlyZWN0aXZlJztcclxuXHJcbmltcG9ydCB7IFBvc3RpbmdTZXJ2aWNlIH0gZnJvbSAnLi9wb3N0aW5nLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gJy4vdXNlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVHJhbnNmZXJTZXJ2aWNlIH0gZnJvbSAnLi9kYXRhdHJhbnNmZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IER5bmFtaWNBZGRTZXJ2aWNlIH0gZnJvbSAnLi9keW5hbWljLWFkZC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUGF5bWVudFNlcnZpY2UgfSBmcm9tICcuL3BheW1lbnQuc2VydmljZSc7XHJcbmltcG9ydCB7IFBsYWNlc0F1dG9jb21wbGV0ZVNlcnZpY2UgfSBmcm9tICcuL3BsYWNlcy1hdXRvY29tcGxldGUuc2VydmljZSc7XHJcbmltcG9ydCB7IEdvb2dsZU1hcHNTZXJ2aWNlIH0gZnJvbSAnLi9nb29nbGUtbWFwcy5zZXJ2aWNlJztcclxuXHJcbmltcG9ydCB7IE1vZGFsRGlhbG9nU2VydmljZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9tb2RhbC1kaWFsb2dcIjtcclxuXHJcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUsIEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQge01hdElucHV0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pbnB1dCc7XHJcbmltcG9ydCB7IEFnbUNvcmVNb2R1bGUgfSBmcm9tICdAYWdtL2NvcmUnO1xyXG5pbXBvcnQgeyBOZ3hQYXlQYWxNb2R1bGUgfSBmcm9tICduZ3gtcGF5cGFsJztcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlEYXRhRm9ybU1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktZGF0YWZvcm0vYW5ndWxhclwiO1xyXG5pbXBvcnQgeyBOZ3hCcmFpbnRyZWVNb2R1bGUgfSBmcm9tICduZ3gtYnJhaW50cmVlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgTWFza2VkVGV4dEZpZWxkTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1tYXNrZWQtdGV4dC1maWVsZC9hbmd1bGFyXCI7XHJcblxyXG4vLyBVbmNvbW1lbnQgYW5kIGFkZCB0byBOZ01vZHVsZSBpbXBvcnRzIGlmIHlvdSBuZWVkIHRvIHVzZSB0d28td2F5IGJpbmRpbmdcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtcyc7XHJcblxyXG4vLyBVbmNvbW1lbnQgYW5kIGFkZCB0byBOZ01vZHVsZSBpbXBvcnRzICBpZiB5b3UgbmVlZCB0byB1c2UgdGhlIEhUVFAgd3JhcHBlclxyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cC1jbGllbnQnO1xyXG5pbXBvcnQgeyBGbG9hdEJ0bkNvbXBvbmVudCB9IGZyb20gJy4vZmxvYXQtYnRuL2Zsb2F0LWJ0bi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBZGRNb2RhbENvbXBvbmVudCB9IGZyb20gJy4vYWRkLW1vZGFsL2FkZC1tb2RhbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBMb2NhdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vbG9jYXRpb24vbG9jYXRpb24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgQWRkUGF5bWVudENvbXBvbmVudCB9IGZyb20gJy4vYWRkLXBheW1lbnQvYWRkLXBheW1lbnQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQWRkQ2FyZFBheW1lbnRDb21wb25lbnQgfSBmcm9tICcuL2FkZC1jYXJkLXBheW1lbnQvYWRkLWNhcmQtcGF5bWVudC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQYXltZW50SW5mb0NvbXBvbmVudCB9IGZyb20gJy4vcGF5bWVudC1pbmZvL3BheW1lbnQtaW5mby5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb25maXJtYXRpb25Db21wb25lbnQgfSBmcm9tICcuL2NvbmZpcm1hdGlvbi9jb25maXJtYXRpb24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgTWVzc2FnZU1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi9tZXNzYWdlLW1vZGFsL21lc3NhZ2UtbW9kYWwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgV2VsY29tZUNvbXBvbmVudCB9IGZyb20gJy4vd2VsY29tZS93ZWxjb21lLmNvbXBvbmVudCc7XHJcbmltcG9ydCAqIGFzIGFwcGxpY2F0aW9uIGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb24nO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGYWNlYm9va01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtZmFjZWJvb2svYW5ndWxhclwiO1xyXG5pbXBvcnQgKiBhcyBuc0ZhY2Vib29rIGZyb20gJ25hdGl2ZXNjcmlwdC1mYWNlYm9vayc7XHJcbmltcG9ydCB7IERhdGVQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgUG9zdGluZ0luZm9Db21wb25lbnQgfSBmcm9tICcuL3Bvc3RpbmctaW5mby9wb3N0aW5nLWluZm8uY29tcG9uZW50JztcclxuaW1wb3J0IHsgaXNJT1MgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtJztcclxuZGVjbGFyZSB2YXIgR01TU2VydmljZXM6IGFueTtcclxuaW1wb3J0IHsgU2V0dGluZ3Nmb3JtQ29tcG9uZW50IH0gZnJvbSAnLi9zZXR0aW5nc2Zvcm0vc2V0dGluZ3Nmb3JtLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFJlYXV0aENvbXBvbmVudCB9IGZyb20gJy4vcmVhdXRoL3JlYXV0aC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDaGF0Q29tcG9uZW50IH0gZnJvbSAnLi9jaGF0L2NoYXQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ2hhdExpc3RDb21wb25lbnQgfSBmcm9tICcuL2NoYXQtbGlzdC9jaGF0LWxpc3QuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVmlld0ltYWdlQ29tcG9uZW50IH0gZnJvbSAnLi92aWV3LWltYWdlL3ZpZXctaW1hZ2UuY29tcG9uZW50JztcclxuaW1wb3J0IHsgcmVnaXN0ZXJFbGVtZW50IH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvZWxlbWVudC1yZWdpc3RyeSc7XHJcbnJlZ2lzdGVyRWxlbWVudCgnRmFiJywgKCkgPT4gcmVxdWlyZSgnQG5zdHVkaW8vbmF0aXZlc2NyaXB0LWZsb2F0aW5nYWN0aW9uYnV0dG9uJykuRmFiKTtcclxucmVnaXN0ZXJFbGVtZW50KFwiUHVsbFRvUmVmcmVzaFwiLCAoKSA9PiByZXF1aXJlKFwiQG5zdHVkaW8vbmF0aXZlc2NyaXB0LXB1bGx0b3JlZnJlc2hcIikuUHVsbFRvUmVmcmVzaCk7XHJcbnJlZ2lzdGVyRWxlbWVudCgnSW1hZ2Vab29tJywgKCkgPT4gcmVxdWlyZSgnbmF0aXZlc2NyaXB0LWltYWdlLXpvb20nKS5JbWFnZVpvb20pO1xyXG5pbXBvcnQgeyBGb3JnZXRGb3JtQ29tcG9uZW50IH0gZnJvbSAnLi9mb3JnZXQtZm9ybS9mb3JnZXQtZm9ybS5jb21wb25lbnQnO1xyXG5cclxuXHJcbi8vIHJlcXVpcmUoJ25hdGl2ZXNjcmlwdC1ub2RlaWZ5JylcclxuLy8gaW1wb3J0IHsgQW1wbGlmeUFuZ3VsYXJNb2R1bGUsIEFtcGxpZnlTZXJ2aWNlIH0gZnJvbSAnYXdzLWFtcGxpZnktYW5ndWxhcic7XHJcblxyXG4vLyBpbXBvcnQgeyBBbmd1bGFyRmlyZU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2ZpcmUnO1xyXG4vLyBpbXBvcnQgeyBBbmd1bGFyRmlyZXN0b3JlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZmlyZS9maXJlc3RvcmUnO1xyXG4vLyBpbXBvcnQgeyBBbmd1bGFyRmlyZVN0b3JhZ2VNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9maXJlL3N0b3JhZ2UnO1xyXG4vLyBpbXBvcnQgeyBBbmd1bGFyRmlyZUF1dGhNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9maXJlL2F1dGgnO1xyXG4vLyBpbXBvcnQgeyBlbnZpcm9ubWVudCB9IGZyb20gJy4uL2Vudmlyb25tZW50cy9lbnZpcm9ubWVudCc7XHJcbmlmIChpc0lPUykgeyBcclxuICBHTVNTZXJ2aWNlcy5wcm92aWRlQVBJS2V5KFwiQUl6YVN5QUlUeFMxam1mOFBNdGF6Umd1V2NBZldReFcxa1BPb1lnXCIpO1xyXG59XHJcblxyXG5hcHBsaWNhdGlvbi5vbihhcHBsaWNhdGlvbi5sYXVuY2hFdmVudCwgZnVuY3Rpb24gKGFyZ3MpIHtcclxuICAgIG5zRmFjZWJvb2suaW5pdChcIjIyNzIxMjk2NDk2Nzc3NDdcIik7XHJcbn0pO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIEFwcENvbXBvbmVudCxcclxuICAgIExvZ2luRGlyZWN0aXZlLFxyXG4gICAgTG9naW5Db21wb25lbnQsXHJcbiAgICBIb21lQ29tcG9uZW50LFxyXG4gICAgSG9tZURpcmVjdGl2ZSxcclxuICAgIEhpc3RvcnlDb21wb25lbnQsXHJcbiAgICBTZXR0aW5nc0NvbXBvbmVudCxcclxuICAgIFBvc3RpbmdDb21wb25lbnQsXHJcbiAgICBVcGRhdGVDb21wb25lbnQsXHJcbiAgICBDb25uZWN0Q29tcG9uZW50LFxyXG4gICAgTG9naW5yb3V0ZUNvbXBvbmVudCxcclxuICAgIERpYWxvZ0NvbXBvbmVudCxcclxuICAgIE5hdmlnYXRpb25Db21wb25lbnQsXHJcbiAgICBBdXRvR2VuZXJhdGVkQ29tcG9uZW50LFxyXG4gICAgUGF5bWVudHNDb21wb25lbnQsXHJcbiAgICBQYXltZW50TWV0aG9kQ29tcG9uZW50LFxyXG4gICAgU2VhcmNoQ29tcG9uZW50LFxyXG4gICAgRmxvYXRCdG5Db21wb25lbnQsXHJcbiAgICBBZGRNb2RhbENvbXBvbmVudCxcclxuICAgIExvY2F0aW9uQ29tcG9uZW50LFxyXG4gICAgQWRkUGF5bWVudENvbXBvbmVudCxcclxuICAgIEFkZENhcmRQYXltZW50Q29tcG9uZW50LFxyXG4gICAgUGF5bWVudEluZm9Db21wb25lbnQsXHJcbiAgICBDb25maXJtYXRpb25Db21wb25lbnQsXHJcbiAgICBNZXNzYWdlTW9kYWxDb21wb25lbnQsXHJcbiAgICBXZWxjb21lQ29tcG9uZW50LFxyXG4gICAgUG9zdGluZ0luZm9Db21wb25lbnQsXHJcbiAgICBTZXR0aW5nc2Zvcm1Db21wb25lbnQsXHJcbiAgICBSZWF1dGhDb21wb25lbnQsXHJcbiAgICBDaGF0Q29tcG9uZW50LFxyXG4gICAgQ2hhdExpc3RDb21wb25lbnQsXHJcbiAgICBWaWV3SW1hZ2VDb21wb25lbnQsXHJcbiAgICBGb3JnZXRGb3JtQ29tcG9uZW50LFxyXG4gIF0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxyXG4gICAgQXBwUm91dGluZ01vZHVsZSxcclxuICAgIE5hdGl2ZVNjcmlwdEh0dHBDbGllbnRNb2R1bGUsXHJcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxyXG4gICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXHJcbiAgICBNYXRJbnB1dE1vZHVsZSxcclxuICAgIEFnbUNvcmVNb2R1bGUuZm9yUm9vdCh7XHJcbiAgICAgIGFwaUtleTogJ0FJemFTeUFJVHhTMWptZjhQTXRhelJndVdjQWZXUXhXMWtQT29ZZydcclxuICAgIH0pLFxyXG4gICAgTmd4UGF5UGFsTW9kdWxlLFxyXG4gICAgTmF0aXZlU2NyaXB0VUlEYXRhRm9ybU1vZHVsZSxcclxuICAgIC8vIE5neEJyYWludHJlZU1vZHVsZSxcclxuICAgIEh0dHBDbGllbnRNb2R1bGUsXHJcbiAgICBOYXRpdmVTY3JpcHRGYWNlYm9va01vZHVsZSxcclxuICAgIE1hc2tlZFRleHRGaWVsZE1vZHVsZVxyXG4gICAgLy8gQW5ndWxhckZpcmVNb2R1bGUuaW5pdGlhbGl6ZUFwcChlbnZpcm9ubWVudC5maXJlYmFzZSksXHJcbiAgICAvLyBBbmd1bGFyRmlyZXN0b3JlTW9kdWxlLCAvLyBpbXBvcnRzIGZpcmViYXNlL2ZpcmVzdG9yZSwgb25seSBuZWVkZWQgZm9yIGRhdGFiYXNlIGZlYXR1cmVzXHJcbiAgICAvLyBBbmd1bGFyRmlyZUF1dGhNb2R1bGUsIC8vIGltcG9ydHMgZmlyZWJhc2UvYXV0aCwgb25seSBuZWVkZWQgZm9yIGF1dGggZmVhdHVyZXMsXHJcbiAgICAvLyBBbmd1bGFyRmlyZVN0b3JhZ2VNb2R1bGUgLy8gaW1wb3J0cyBmaXJlYmFzZS9zdG9yYWdlIG9ubHkgbmVlZGVkIGZvciBzdG9yYWdlIGZlYXR1cmVzXHJcbiAgXSxcclxuICBwcm92aWRlcnM6IFtQb3N0aW5nU2VydmljZSwgVHJhbnNmZXJTZXJ2aWNlLCBEeW5hbWljQWRkU2VydmljZSwgVXNlclNlcnZpY2UsIFBheW1lbnRTZXJ2aWNlLCBNb2RhbERpYWxvZ1NlcnZpY2UsIFBsYWNlc0F1dG9jb21wbGV0ZVNlcnZpY2UsIFxyXG4gIERhdGVQaXBlLCBHb29nbGVNYXBzU2VydmljZV0sXHJcbiAgYm9vdHN0cmFwOiBbQXBwQ29tcG9uZW50XSxcclxuICBlbnRyeUNvbXBvbmVudHM6IFtQb3N0aW5nQ29tcG9uZW50LCBQYXltZW50TWV0aG9kQ29tcG9uZW50LCBBZGRNb2RhbENvbXBvbmVudCwgTG9jYXRpb25Db21wb25lbnQsIEFkZFBheW1lbnRDb21wb25lbnQsIEFkZENhcmRQYXltZW50Q29tcG9uZW50LCBcclxuICBQYXltZW50SW5mb0NvbXBvbmVudCwgQ29uZmlybWF0aW9uQ29tcG9uZW50LCBTZXR0aW5nc2Zvcm1Db21wb25lbnQsIFJlYXV0aENvbXBvbmVudCwgRm9yZ2V0Rm9ybUNvbXBvbmVudF0sXHJcbiAgc2NoZW1hczogW05PX0VSUk9SU19TQ0hFTUFdXHJcbn0pXHJcbi8qXHJcblBhc3MgeW91ciBhcHBsaWNhdGlvbiBtb2R1bGUgdG8gdGhlIGJvb3RzdHJhcE1vZHVsZSBmdW5jdGlvbiBsb2NhdGVkIGluIG1haW4udHMgdG8gc3RhcnQgeW91ciBhcHBcclxuKi9cclxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi8qIEFkZCBtb2JpbGUgc3R5bGVzIGZvciB0aGUgY29tcG9uZW50IGhlcmUuICAqL1xcclxcblwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxCdXR0b24gdGV4dD1cXFwiYXV0by1nZW5lcmF0ZWQgd29ya3MhXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIj48L0J1dHRvbj5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1hdXRvLWdlbmVyYXRlZCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2F1dG8tZ2VuZXJhdGVkLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9hdXRvLWdlbmVyYXRlZC5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEF1dG9HZW5lcmF0ZWRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCIvKiBBZGQgbW9iaWxlIHN0eWxlcyBmb3IgdGhlIGNvbXBvbmVudCBoZXJlLiAgKi9cXG5MYWJlbCB7XFxuXFx0dGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXFxuLm5hbWUtbGFiZWwge1xcblxcdG1hcmdpbi10b3A6IDE2O1xcblxcdG1hcmdpbi1sZWZ0OiAxODtcXG5cXHRjb2xvcjogYmxhY2s7XFxuXFx0Zm9udC13ZWlnaHQ6IDcwMDtcXG5cXHRmb250LXNpemU6IDE3O1xcbn1cXG5cXG4uaW5mby1sYWJlbCB7XFxuXFx0bWFyZ2luLXRvcDogNDtcXG5cXHRtYXJnaW4tbGVmdDogMTg7XFxuXFx0bWFyZ2luLWJvdHRvbTogMTY7XFxuXFx0Y29sb3I6ICM2OTY5Njk7XFxufVxcblxcbi5wcm9maWxlLXBpY3R1cmUge1xcblxcdGhlaWdodDogNjA7XFxuXFx0d2lkdGg6IDYwO1xcblxcdGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuXFx0dmVydGljYWwtYWxpZ246IGNlbnRlcjtcXG5cXHRtYXJnaW4tbGVmdDogMTY7XFxuXFx0bWFyZ2luLXRvcDogMTQ7XFxuXFx0bWFyZ2luLWJvdHRvbTogMTQ7XFxufVxcblxcbi5tZXNzYWdlIHtcXG5cXHRib3JkZXItYm90dG9tLXdpZHRoOiAxO1xcblxcdGJvcmRlci1jb2xvcjogI2YxZjFmMTtcXG5cXHRtYXJnaW4tdG9wOiA1MDtcXG5cXHRtYXJnaW4tYm90dG9tOiA1MDtcXG59XFxuXFxuLnJlZnJlc2gge1xcblxcdGNvbG9yOiAjYWMwMGU2O1xcbn1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8UGFnZS5hY3Rpb25CYXI+XFxyXFxuICAgIDxBY3Rpb25CYXIgdGl0bGU9XFxcIk1lc3NhZ2VzXFxcIj5cXHJcXG4gICAgXFx0PE5hdmlnYXRpb25CdXR0b24gdGV4dD1cXFwiR28gQmFja1xcXCIgYW5kcm9pZC5zeXN0ZW1JY29uPVxcXCJpY19tZW51X2JhY2tcXFwiICh0YXApPVxcXCJvbk5hdkJ0blRhcCgpXFxcIj48L05hdmlnYXRpb25CdXR0b24+XFxyXFxuICAgIDwvQWN0aW9uQmFyPlxcclxcbjwvUGFnZS5hY3Rpb25CYXI+XFxyXFxuXFxyXFxuPFB1bGxUb1JlZnJlc2ggKHJlZnJlc2gpPVxcXCJyZWZyZXNoTGlzdCgkZXZlbnQpXFxcIiBjbGFzcz1cXFwicmVmcmVzaFxcXCI+XFxyXFxuXFx0PExpc3RWaWV3IFtpdGVtc109XFxcIm1lc3NhZ2VzXFxcIiAoaXRlbVRhcCk9XFxcIm9uSXRlbVRhcCgkZXZlbnQpXFxcIiAjbGlzdFZpZXcgaWQ9XFxcImxpc3RWaWV3XFxcIj5cXHJcXG5cXHQgICAgPG5nLXRlbXBsYXRlIGxldC1pdGVtPVxcXCJpdGVtXFxcIiBsZXQtaT1cXFwiaW5kZXhcXFwiIGxldC1vZGQ9XFxcIm9kZFxcXCIgbGV0LWV2ZW49XFxcImV2ZW5cXFwiPlxcclxcblxcdCAgICAgICAgPFN0YWNrTGF5b3V0IFtjbGFzcy5vZGRdPVxcXCJvZGRcXFwiIFtjbGFzcy5ldmVuXT1cXFwiZXZlblxcXCIgY2xhc3M9XFxcIm1lc3NhZ2VcXFwiIG9yaWVudGF0aW9uPVxcXCJob3Jpem9udGFsXFxcIj5cXHJcXG5cXHQgICAgICAgIFxcdCAgXFx0PEltYWdlIFtzcmNdPVxcXCJpdGVtLnBmcFNvdXJjZVxcXCIgY2xhc3M9XFxcInByb2ZpbGUtcGljdHVyZVxcXCIgc3RyZXRjaD1cXFwiYXNwZWN0Rml0XFxcIj48L0ltYWdlPlxcclxcblxcdCAgICAgICAgXFx0ICBcXHQ8U3RhY2tMYXlvdXQ+XFxyXFxuXFx0XFx0ICAgICAgICAgICAgICBcXHQ8TGFiZWwgdGV4dFdyYXA9XFxcInRydWVcXFwiIGlkPVxcXCJwb3N0LW5hbWVcXFwiIGNsYXNzPVxcXCJuYW1lLWxhYmVsXFxcIiBbdGV4dF09XFxcIml0ZW0uZGlzcGxheU5hbWVcXFwiPjwvTGFiZWw+XFxyXFxuXFx0XFx0ICAgICAgICAgICAgICBcXHQ8TGFiZWwgdGV4dFdyYXA9XFxcInRydWVcXFwiIGlkPVxcXCJwb3N0LWluZm9cXFwiIGNsYXNzPVxcXCJpbmZvLWxhYmVsXFxcIiBbdGV4dF09XFxcIml0ZW0ubWVzc2FnZVxcXCI+PC9MYWJlbD5cXHJcXG5cXHRcXHQgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcclxcblxcdCAgICAgICAgPC9TdGFja0xheW91dD5cXHJcXG5cXHQgICAgPC9uZy10ZW1wbGF0ZT5cXHJcXG5cXHQ8L0xpc3RWaWV3PlxcclxcbjwvUHVsbFRvUmVmcmVzaD5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVHJhbnNmZXJTZXJ2aWNlIH0gZnJvbSAnLi4vZGF0YXRyYW5zZmVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgKiBhcyBmaXJlYmFzZSBmcm9tICduYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlJztcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IExvZ2luY2hlY2tTZXJ2aWNlIH0gZnJvbSAnLi4vbG9naW5jaGVjay5zZXJ2aWNlLnRucyc7XHJcbmltcG9ydCB7IENoYXRNZXNzYWdlIH0gZnJvbSAnLi4vbW9kZWxzL2NoYXQtbWVzc2FnZS5tb2RlbCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGVBcnJheSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlLWFycmF5JztcclxuaW1wb3J0IHsgTGlzdFZpZXcgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2xpc3Qtdmlldyc7XHJcblxyXG5jbGFzcyBNZXNzYWdlSXRlbSB7XHJcblx0Y29uc3RydWN0b3IocHVibGljIGNoYXRNZXNzYWdlOiBDaGF0TWVzc2FnZSwgcHVibGljIGxhc3RDaGF0OiBzdHJpbmcsIHB1YmxpYyBjaGF0SWQ6IHN0cmluZywgcHVibGljIHBmcFNvdXJjZTogc3RyaW5nLCBcclxuICAgIHB1YmxpYyBkaXNwbGF5TmFtZTogc3RyaW5nLCBwdWJsaWMgbWVzc2FnZTogc3RyaW5nKSB7fVxyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1jaGF0LWxpc3QnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jaGF0LWxpc3QuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2NoYXQtbGlzdC5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIENoYXRMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0cmFuc2ZlclNlcnZpY2U6IFRyYW5zZmVyU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMsIHByaXZhdGUgbG9naW5jaGVja1NlcnZpY2U6IExvZ2luY2hlY2tTZXJ2aWNlLFxyXG4gIFx0cHJpdmF0ZSB2Y1JlZjogVmlld0NvbnRhaW5lclJlZikgeyB9XHJcblxyXG4gIG1lc3NhZ2VzID0gbmV3IE9ic2VydmFibGVBcnJheTxNZXNzYWdlSXRlbT4oKTtcclxuICByZWZyZXNoTWVzc2FnZXMgPSBuZXcgT2JzZXJ2YWJsZUFycmF5PE1lc3NhZ2VJdGVtPigpO1xyXG4gIHVzZXJJZDogc3RyaW5nO1xyXG4gIGNoYXRJZHM6IFtzdHJpbmddO1xyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICBcdHRoaXMudXNlcklkID0gdGhpcy5sb2dpbmNoZWNrU2VydmljZS5nZXRVc2VyKCk7XHJcbiAgICB0aGlzLmxvYWRNZXNzYWdlcygpO1xyXG4gIH1cclxuXHJcbiAgbG9hZE1lc3NhZ2VzKGFyZ3M9bnVsbCkge1xyXG4gIFx0ZmlyZWJhc2UuZmlyZXN0b3JlLmNvbGxlY3Rpb24oJ3VzZXJzJykuZG9jKHRoaXMudXNlcklkKS5nZXQoKS50aGVuKChkb2MpID0+IHtcclxuICBcdFx0dGhpcy5jaGF0SWRzID0gZG9jLmRhdGEoKS5jaGF0cztcclxuICAgIH0pLnRoZW4oYXN5bmMgKHJlcykgPT4ge1xyXG4gICAgICBmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5jaGF0SWRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgY2hhdFByb21pc2UgPSBhd2FpdCBmaXJlYmFzZS5maXJlc3RvcmUuY29sbGVjdGlvbignY2hhdHMnKS5kb2ModGhpcy5jaGF0SWRzW2ldKS5nZXQoKS50aGVuKGFzeW5jIChkb2MpID0+IHtcclxuICAgICAgICAgIGxldCBkYXRhID0gZG9jLmRhdGEoKTtcclxuICAgICAgICAgIGxldCBkb2NJZCA9IGRvYy5pZDtcclxuICAgICAgICAgIHZhciBjaGF0TmFtZSA9ICdZb3UsICc7XHJcbiAgICAgICAgICB2YXIgbm9uVXNlckluZGV4ID0gMDtcclxuICAgICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBkYXRhLnVzZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmKGRhdGEudXNlcnNbaV0udWlkICE9PXRoaXMudXNlcklkKSB7XHJcbiAgICAgICAgICAgICAgbm9uVXNlckluZGV4ID0gaTtcclxuICAgICAgICAgICAgICBpZihpID09PSBkYXRhLnVzZXJzLmxlbmd0aCAtIDEpXHJcbiAgICAgICAgICAgICAgICBjaGF0TmFtZSArPSAnYW5kICcgKyBkYXRhLnVzZXJzW2ldLmRpc3BsYXlOYW1lO1xyXG4gICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIGNoYXROYW1lICs9IGRhdGEudXNlcnNbaV0uZGlzcGxheU5hbWUgKyAnLCAnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZihkYXRhLmNoYXRzWzBdKSB7XHJcbiAgICAgICAgICAgIGxldCBsYXN0TXNnID0gZGF0YS5jaGF0c1tkYXRhLmNoYXRzLmxlbmd0aCAtIDFdO1xyXG4gICAgICAgICAgICBjb25zdCBhZGRQcm9taXNlID0gYXdhaXQgdGhpcy5hZGRNZXNzYWdlKGxhc3RNc2csIGRhdGEsIGRvY0lkLCBjaGF0TmFtZSwgbm9uVXNlckluZGV4KTsgXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAvLyBjb25zdCB1bnN1YnNjcmliZSA9IGZpcmViYXNlLmZpcmVzdG9yZS5jb2xsZWN0aW9uKCdjaGF0cycpLmRvYyh0aGlzLmNoYXRJZHNbaV0pLm9uU25hcHNob3Qoe2luY2x1ZGVNZXRhZGF0YUNoYW5nZXM6IHRydWV9LCBkb2MgPT4ge1xyXG4gICAgICAgIC8vICAgdGhpcy5yZWZyZXNoTGlzdChudWxsKTtcclxuICAgICAgICAvLyB9KVxyXG4gICAgICB9XHJcbiAgICAgIGlmKGFyZ3MgIT0gbnVsbClcclxuICAgICAge1xyXG4gICAgICAgIHZhciBwdWxsUmVmcmVzaCA9IGFyZ3Mub2JqZWN0O1xyXG4gICAgICAgIHB1bGxSZWZyZXNoLnJlZnJlc2hpbmcgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnJlZnJlc2hNZXNzYWdlcy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgICAgICAgaWYoYS5sYXN0Q2hhdCA+IGIubGFzdENoYXQpXHJcbiAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgZWxzZSBpZihiLmxhc3RDaGF0IDwgYS5sYXN0Q2hhdClcclxuICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgICB9KVxyXG4gICAgICB0aGlzLm1lc3NhZ2VzLnNwbGljZSgwKTtcclxuICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHRoaXMucmVmcmVzaE1lc3NhZ2VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlcy5wdXNoKHRoaXMucmVmcmVzaE1lc3NhZ2VzLmdldEl0ZW0oaSkpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMucmVmcmVzaE1lc3NhZ2VzLnNwbGljZSgwKTtcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBhc3luYyBhZGRNZXNzYWdlKGxhc3RNc2csIGRhdGEsIGRvY0lkLCBjaGF0TmFtZSwgbm9uVXNlckluZGV4KSB7XHJcbiAgICBpZihsYXN0TXNnLmltZ1NvdXJjZSAhPT0gXCJcIikge1xyXG4gICAgICBsYXN0TXNnLm1lc3NhZ2UgPSBcIlNlbnQgYSBwaG90b1wiO1xyXG4gICAgfVxyXG4gICAgaWYobGFzdE1zZy51c2VySWQgIT09IHRoaXMudXNlcklkKSB7XHJcbiAgICAgIGNvbnN0IHVzZXJQcm9taXNlID0gYXdhaXQgZmlyZWJhc2UuZmlyZXN0b3JlLmNvbGxlY3Rpb24oJ3VzZXJzJykuZG9jKGxhc3RNc2cudXNlcklkKS5nZXQoKS50aGVuKChkb2MpID0+IHtcclxuICAgICAgICBsZXQgcHJvZmlsZVNvdXJjZSA9IGRvYy5kYXRhKCkucHJvZmlsZV9zb3VyY2U7XHJcbiAgICAgICAgaWYoZGF0YS51c2Vycy5sZW5ndGggPT09IDIpXHJcbiAgICAgICAgICB0aGlzLnJlZnJlc2hNZXNzYWdlcy5wdXNoKG5ldyBNZXNzYWdlSXRlbShsYXN0TXNnLCBkYXRhLmxhc3RDaGF0LCBkb2NJZCwgcHJvZmlsZVNvdXJjZSwgbGFzdE1zZy5kaXNwbGF5TmFtZSwgZG9jLmRhdGEoKS5maXJzdF9uYW1lICsgJzogJyArIGxhc3RNc2cubWVzc2FnZSkpO1xyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5yZWZyZXNoTWVzc2FnZXMucHVzaChuZXcgTWVzc2FnZUl0ZW0obGFzdE1zZywgZGF0YS5sYXN0Q2hhdCwgZG9jSWQsIHByb2ZpbGVTb3VyY2UsIGNoYXROYW1lLCBkb2MuZGF0YSgpLmZpcnN0X25hbWUgKyAnOiAnICsgbGFzdE1zZy5tZXNzYWdlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9KVxyXG4gICAgICByZXR1cm4gdGhpcy5yZWZyZXNoTWVzc2FnZXM7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgY29uc3QgdXNlclByb21pc2UgPSBhd2FpdCBmaXJlYmFzZS5maXJlc3RvcmUuY29sbGVjdGlvbigndXNlcnMnKS5kb2MoZGF0YS51c2Vyc1tub25Vc2VySW5kZXhdLnVpZCkuZ2V0KCkudGhlbigoZG9jKSA9PiB7XHJcbiAgICAgICAgbGV0IHByb2ZpbGVTb3VyY2UgPSBkb2MuZGF0YSgpLnByb2ZpbGVfc291cmNlO1xyXG4gICAgICAgIGlmKGRhdGEudXNlcnMubGVuZ3RoID09PSAyKVxyXG4gICAgICAgICAgdGhpcy5yZWZyZXNoTWVzc2FnZXMucHVzaChuZXcgTWVzc2FnZUl0ZW0obGFzdE1zZywgZGF0YS5sYXN0Q2hhdCwgZG9jSWQsIHByb2ZpbGVTb3VyY2UsIFxyXG4gICAgICAgICAgICBkb2MuZGF0YSgpLmZpcnN0X25hbWUgKyAnICcgKyBkb2MuZGF0YSgpLmxhc3RfbmFtZSwgJ1lvdTogJyArIGxhc3RNc2cubWVzc2FnZSkpO1xyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5yZWZyZXNoTWVzc2FnZXMucHVzaChuZXcgTWVzc2FnZUl0ZW0obGFzdE1zZywgZGF0YS5sYXN0Q2hhdCwgZG9jSWQsIHByb2ZpbGVTb3VyY2UsIFxyXG4gICAgICAgICAgICBjaGF0TmFtZSwgJ1lvdTogJyArIGxhc3RNc2cubWVzc2FnZSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfSlcclxuICAgICAgcmV0dXJuIHRoaXMucmVmcmVzaE1lc3NhZ2VzO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVmcmVzaExpc3QoYXJncykge1xyXG4gICAgdGhpcy5sb2FkTWVzc2FnZXMoYXJncyk7XHJcbiAgfVxyXG5cclxuICBvbkl0ZW1UYXAoYXJncykge1xyXG4gIFx0bGV0IGNoYXRJZCA9IHRoaXMubWVzc2FnZXMuZ2V0SXRlbShhcmdzLmluZGV4KS5jaGF0SWQ7XHJcbiAgXHR0aGlzLnRyYW5zZmVyU2VydmljZS5zZXREYXRhKGNoYXRJZCk7XHJcbiAgXHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ2NoYXQnXSlcclxuICB9XHJcblxyXG4gIG9uTmF2QnRuVGFwKCkge1xyXG4gICAgaWYodGhpcy5yb3V0ZXIuY2FuR29CYWNrKVxyXG4gICAgICB0aGlzLnJvdXRlci5iYWNrKCk7XHJcbiAgICBlbHNlXHJcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnbmF2aWdhdGlvbiddLCB7Y2xlYXJIaXN0b3J5OiB0cnVlfSlcclxuICB9XHJcblxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCIvKiBBZGQgbW9iaWxlIHN0eWxlcyBmb3IgdGhlIGNvbXBvbmVudCBoZXJlLiAgKi9cXG5CdXR0b24ge1xcbiAgICBwYWRkaW5nOiA1O1xcbiAgICBtYXJnaW46IDU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGRvZGdlcmJsdWU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgaGVpZ2h0OiA0MDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTtcXG59XFxuXFxuLmNoYXQtYnV0dG9uIHtcXG5cXHRwYWRkaW5nLWxlZnQ6IDU7XFxuXFx0cGFkZGluZy1yaWdodDogNTtcXG5cXHRtYXJnaW46IDU7XFxuXFx0aGVpZ2h0OiAyMDtcXG5cXHR3aWR0aDogMjA7XFxufVxcblxcbi5pbWctYnV0dG9uIHtcXG5cXHRtYXJnaW46IDU7XFxuXFx0bWFyZ2luLWxlZnQ6IDM7XFxuXFx0bWFyZ2luLXJpZ2h0OiA3O1xcblxcdGhlaWdodDogMjA7XFxuXFx0d2lkdGg6IDIwO1xcbn1cXG5cXG4uY2hhdC10ZXh0LWZpZWxkIHtcXG4gICAgcGFkZGluZzogNTsgXFxuICAgIC8qYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7ICovXFxuICAgIC8qYm9yZGVyLXJhZGl1czogNDsqL1xcbiAgICAvKmJvdHRvbS1ib3JkZXItY29sb3I6ICM2OTY5Njk7Ki9cXG59XFxuXFxuLmF1dGhvci1pbWcge1xcbiAgICBtYXJnaW46IDAgNSA1IDU7XFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxuICAgIHdpZHRoOiA0MDtcXG4gICAgaGVpZ2h0OiA0MDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcXG59XFxuXFxuLmltZyB7XFxuXFx0bWFyZ2luOiA1O1xcblxcdGJvcmRlci1yYWRpdXM6IDEwO1xcblxcdGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcXG59XFxuXFxuLnRoZWlyc0ltZyB7XFxuXFx0bWFyZ2luOiA1O1xcblxcdG1hcmdpbi1sZWZ0OiA1MjtcXG5cXHRib3JkZXItcmFkaXVzOiAxMDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxufVxcblxcbi5taW5lIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2FjMDBlNjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiA4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDE0O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTU7XFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1O1xcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNTtcXG4gICAgZm9udC1zaXplOiAxNjtcXG4gICAgbWF4LXdpZHRoOiA2MCU7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIC8qbWFyZ2luLWJvdHRvbTogMTI7Ki9cXG59XFxuXFxuLm1pbmVDb250aW51YXRpb24ge1xcblxcdG1hcmdpbi1ib3R0b206IDA7XFxuXFx0Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE1O1xcbn1cXG5cXG4ubWluZUNvbnRpbnVhdGlvbkdyaWQge1xcblxcdGZvbnQtc2l6ZTogMTQ7XFxuICAgIHBhZGRpbmc6IDU7XFxuXFx0cGFkZGluZy10b3A6IDA7XFxuXFx0cGFkZGluZy1ib3R0b206IDE7XFxufVxcblxcbi5taW5lVGltZSB7XFxuXFx0bWFyZ2luLXJpZ2h0OiAxMDtcXG5cXHRtYXJnaW4tYm90dG9tOiA1O1xcbn1cXG5cXG4udGhlaXJzVGltZSB7XFxuXFx0bWFyZ2luLWxlZnQ6IDUyO1xcblxcdG1hcmdpbi1ib3R0b206IDU7XFxufVxcblxcbi50aW1lIHtcXG5cXHR2aXNpYmlsaXR5OiBjb2xsYXBzZTtcXG5cXHRkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udGhlaXJzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcXG4gICAgY29sb3I6ICMzMzM7XFxuICAgIHBhZGRpbmc6IDc7XFxuICAgIHBhZGRpbmctbGVmdDogMTQ7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDE0O1xcbiAgICBib3JkZXItcmFkaXVzOiAxNTtcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNTtcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE1O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDQwO1xcbiAgICBmb250LXNpemU6IDE2O1xcbiAgICBtYXgtd2lkdGg6IDYwJTtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgLyptYXJnaW4tYm90dG9tOiAxMjsqL1xcbn1cXG5cXG4udGhlaXJzQ29udGludWF0aW9uIHtcXG5cXHRtYXJnaW4tbGVmdDogNTI7XFxuXFx0bWFyZ2luLWJvdHRvbTogMDtcXG5cXHRib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNTtcXG59XFxuXFxuLnRoZWlyc0NvbnRpbnVhdGlvbkdyaWQge1xcblxcdGZvbnQtc2l6ZTogMTQ7XFxuICAgIHBhZGRpbmc6IDU7XFxuXFx0cGFkZGluZy10b3A6IDA7XFxuXFx0cGFkZGluZy1ib3R0b206IDE7XFxufVxcblxcbi5ncmlkIHtcXG4gICAgZm9udC1zaXplOiAxNDtcXG4gICAgcGFkZGluZzogNTtcXG4gICAgcGFkZGluZy10b3A6IDA7XFxuICAgIHBhZGRpbmctYm90dG9tOiA4O1xcbn1cXG5cXG4uY2hhdC1ib3gtbGF5b3V0IHtcXG5cXHRib3JkZXItY29sb3I6ICNmMWYxZjE7XFxuXFx0Ym9yZGVyLXRvcC13aWR0aDogMTtcXG59XFxuXFxuLmFjdGl2aXR5LWluZGljYXRvciB7XFxuICBjb2xvcjogI2FjMDBlNjtcXG59XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPFBhZ2UuYWN0aW9uQmFyPlxcclxcbiAgICA8QWN0aW9uQmFyIHRpdGxlPVxcXCJ7eyBjaGF0TmFtZSB9fVxcXCIgYW5kcm9pZDpob3Jpem9udGFsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiIGlvczpob3Jpem9udGFsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiPlxcclxcbiAgICBcXHQ8TmF2aWdhdGlvbkJ1dHRvbiB0ZXh0PVxcXCJHbyBCYWNrXFxcIiBhbmRyb2lkLnN5c3RlbUljb249XFxcImljX21lbnVfYmFja1xcXCIgKHRhcCk9XFxcIm9uTmF2QnRuVGFwKClcXFwiPjwvTmF2aWdhdGlvbkJ1dHRvbj5cXHJcXG5cXHQgICAgPEFjdGlvbkl0ZW0gKHRhcCk9XFxcIm9uTGVhdmUoKVxcXCJcXHJcXG5cXHQgICAgICBpb3Muc3lzdGVtSWNvbj1cXFwiOVxcXCIgaW9zLnBvc2l0aW9uPVxcXCJyaWdodFxcXCJcXHJcXG5cXHQgICAgICB0ZXh0PVxcXCJMZWF2ZSBjaGF0XFxcIiBhbmRyb2lkLnBvc2l0aW9uPVxcXCJwb3B1cFxcXCI+PC9BY3Rpb25JdGVtPlxcclxcbiAgICA8L0FjdGlvbkJhcj5cXHJcXG48L1BhZ2UuYWN0aW9uQmFyPlxcclxcblxcclxcbjxHcmlkTGF5b3V0IHJvd3M9XFxcIiosIGF1dG9cXFwiICNjaGF0Q29udGFpbmVyPlxcclxcbiAgICA8TGlzdFZpZXcgbWFyZ2luLWJvdHRvbT1cXFwiNTBcXFwiIHBhZGRpbmc9XFxcIjVcXFwiICNtZXNzYWdlTGlzdCBbaXRlbXNdPVxcXCJtZXNzYWdlc1xcXCIgc2VwYXJhdG9yQ29sb3I9XFxcInRyYW5zcGFyZW50XFxcIiAoaXRlbUxvYWRpbmcpPVxcXCJsb2FkTW9yZURhdGEoJGV2ZW50KVxcXCIgKHNldHVwSXRlbVZpZXcpPVxcXCJzZXR1cEl0ZW1WaWV3KCRldmVudClcXFwiIHJvdz1cXFwiMFxcXCI+XFxyXFxuICAgICAgICA8bmctdGVtcGxhdGUgbGV0LWl0ZW09XFxcIml0ZW1cXFwiIGxldC1pPVxcXCJpbmRleFxcXCIgbGV0LW1pbmU9XFxcIm1pbmVcXFwiIGxldC10aGVpcnM9XFxcInRoZWlyc1xcXCIgbGV0LW1pbmVDb250aW51YXRpb249XFxcIm1pbmVDb250aW51YXRpb25cXFwiIGxldC10aGVpcnNDb250aW51YXRpb249XFxcInRoZWlyc0NvbnRpbnVhdGlvblxcXCIgbGV0LW1pbmVDb250aW51YXRpb25HcmlkPVxcXCJtaW5lQ29udGludWF0aW9uR3JpZFxcXCIgbGV0LXRoZWlyc0NvbnRpbnVhdGlvbkdyaWQ9XFxcInRoZWlyc0NvbnRpbnVhdGlvbkdyaWRcXFwiIGxldC1ncmlkPVxcXCJncmlkXFxcIiBsZXQtbWluZVRpbWU9XFxcIm1pbmVUaW1lXFxcIiBsZXQtdGhlaXJzVGltZT1cXFwidGhlaXJzVGltZVxcXCIgbGV0LXRpbWU9XFxcInRpbWVcXFwiIGxldC10aGVpcnNJbWc9XFxcInRoZWlyc0ltZ1xcXCIgbGV0LWltZz1cXFwiaW1nXFxcIj5cXHJcXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgd2lkdGg9XFxcIjgwJVxcXCIgW2NsYXNzLm1pbmVDb250aW51YXRpb25HcmlkXT1cXFwibWluZUNvbnRpbnVhdGlvbkdyaWRcXFwiIFtjbGFzcy50aGVpcnNDb250aW51YXRpb25HcmlkXT1cXFwidGhlaXJzQ29udGludWF0aW9uR3JpZFxcXCIgW2NsYXNzLmdyaWRdPVxcXCJncmlkXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVxcXCJob3Jpem9udGFsXFxcIiBbaG9yaXpvbnRhbEFsaWdubWVudF09XFxcImFsaWduKGl0ZW0pXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSBbdmlzaWJpbGl0eV09XFxcIml0ZW0udmlzaWJpbGl0eVxcXCIgY2xhc3M9XFxcImF1dGhvci1pbWdcXFwiIHN0cmV0Y2g9XFxcImFzcGVjdEZpbGxcXFwiIGhlaWdodD1cXFwiNDBcXFwiIHdpZHRoPVxcXCI0MFxcXCIgdmVydGljYWxBbGlnbm1lbnQ9XFxcImJvdHRvbVxcXCIgW3NyY109XFxcIml0ZW0uY2hhdE1lc3NhZ2UucGZwU291cmNlXFxcIiBjb2w9XFxcIjFcXFwiPjwvSW1hZ2U+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgW3Zpc2liaWxpdHldPVxcXCJ0ZXh0VmlzaWJpbGl0eShpdGVtKVxcXCIgW3RleHRdPSdpdGVtLmNoYXRNZXNzYWdlLm1lc3NhZ2UnIFtjbGFzcy5taW5lXT1cXFwibWluZVxcXCIgW2NsYXNzLnRoZWlyc109XFxcInRoZWlyc1xcXCIgW2NsYXNzLm1pbmVDb250aW51YXRpb25dPVxcXCJtaW5lQ29udGludWF0aW9uXFxcIiBbY2xhc3MudGhlaXJzQ29udGludWF0aW9uXT1cXFwidGhlaXJzQ29udGludWF0aW9uXFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgdmVydGljYWxBbGlnbm1lbnQ9XFxcInRvcFxcXCI+PC9MYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSBbdmlzaWJpbGl0eV09XFxcImltZ1Zpc2liaWxpdHkoaXRlbSlcXFwiIFtjbGFzcy50aGVpcnNJbWddPVxcXCJ0aGVpcnNJbWdcXFwiIFtjbGFzcy5pbWddPVxcXCJpbWdcXFwiIHN0cmV0Y2g9XFxcIm5vbmVcXFwiIG1pbldpZHRoPVxcXCIzNjBcXFwiIG1pbkhlaWdodD1cXFwiMjAwXFxcIiBkZWNvZGVXaWR0aD1cXFwiMzYwXFxcIiBkZWNvZGVIZWlnaHQ9XFxcIjIwMFxcXCIgbWF4SGVpZ2h0PVxcXCI0MDBcXFwiIHZlcnRpY2FsQWxpZ25tZW50PVxcXCJib3R0b21cXFwiIFtzcmNdPVxcXCJpdGVtLmNoYXRNZXNzYWdlLmltZ1NvdXJjZVxcXCIgY29sPVxcXCIxXFxcIiAodGFwKT1cXFwidG9WaWV3SW1hZ2UoaXRlbS5jaGF0TWVzc2FnZS5pbWdTb3VyY2UpXFxcIj48L0ltYWdlPlxcclxcbiAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcclxcbiAgICAgICAgICAgICAgICA8TGFiZWwgW3RleHRdPSdpdGVtLmZvcm1hdHRlZFRpbWUnIFtob3Jpem9udGFsQWxpZ25tZW50XT1cXFwiYWxpZ24oaXRlbSlcXFwiIFtjbGFzcy5taW5lVGltZV09XFxcIm1pbmVUaW1lXFxcIiBbY2xhc3MudGhlaXJzVGltZV09XFxcInRoZWlyc1RpbWVcXFwiIFtjbGFzcy50aW1lXT1cXFwidGltZVxcXCI+PC9MYWJlbD5cXHJcXG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcclxcbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXHJcXG4gICAgPC9MaXN0Vmlldz5cXHJcXG5cXHJcXG4gICAgPFN0YWNrTGF5b3V0ICNjaGF0Ym94IHJvdz1cXFwiMVxcXCIgY2xhc3M9XFxcImNoYXQtYm94LWxheW91dFxcXCI+XFxyXFxuXFx0ICAgICAgICA8R3JpZExheW91dCBjb2x1bW5zPVxcXCJhdXRvLCosYXV0b1xcXCIgc3R5bGU9XFxcInBhZGRpbmc6IDEwXFxcIj5cXHJcXG5cXHQgICAgICAgIFxcdDxJbWFnZSBjbGFzcz1cXFwiaW1nLWJ1dHRvblxcXCIgcm93PVxcXCIwXFxcIiBjb2w9XFxcIjBcXFwiIHNyYz1cXFwifi9pbWcvaW1nX2ljb25fMi5wbmdcXFwiICh0YXApPW9wZW5JbWFnZXMoKT48L0ltYWdlPlxcclxcblxcdCAgICAgICAgICAgIDxUZXh0VmlldyAjdGV4dGZpZWxkIGhlaWdodD1cXFwiYXV0b1xcXCIgbWF4SGVpZ2h0PVxcXCIxMDBcXFwiIGhpbnQ9XFxcIlN0YXJ0IGEgbWVzc2FnZVxcXCIgY2xhc3M9XFxcImNoYXQtdGV4dC1maWVsZFxcXCIgcm93PVxcXCIwXFxcIiBjb2w9XFxcIjFcXFwiIGF1dG9jb3JyZWN0PVxcXCJ0cnVlXFxcIiBbKG5nTW9kZWwpXT1cXFwibWVzc2FnZVxcXCIgKHRhcCk9XFxcIm9uVGV4dFRhcCgpXFxcIj48L1RleHRWaWV3PlxcclxcblxcdCAgICAgICAgICAgIDxJbWFnZSAjYnRuIGNsYXNzPVxcXCJjaGF0LWJ1dHRvblxcXCIgcm93PVxcXCIwXFxcIiBjb2w9XFxcIjJcXFwiIHNyYz1cXFwifi9pbWcvc2VuZF9tZXNzYWdlX2ljb25fMi5wbmdcXFwiICh0YXApPXNlbmRNZXNzYWdlKCk+PC9JbWFnZT5cXHJcXG5cXHQgICAgICAgIDwvR3JpZExheW91dD5cXHJcXG5cXHJcXG4gICAgPC9TdGFja0xheW91dD5cXHJcXG48L0dyaWRMYXlvdXQ+XFxyXFxuXFxyXFxuPEFjdGl2aXR5SW5kaWNhdG9yICNhY3Rpdml0eUluZGljYXRvciBidXN5PVxcXCJ0cnVlXFxcIiB3aWR0aD1cXFwiNDBcXFwiIGhlaWdodD1cXFwiNDBcXFwiIGNsYXNzPVxcXCJhY3Rpdml0eS1pbmRpY2F0b3JcXFwiPlxcclxcbjwvQWN0aXZpdHlJbmRpY2F0b3I+XCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgRWxlbWVudFJlZiwgVmlld0NoaWxkLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRyYW5zZmVyU2VydmljZSB9IGZyb20gJy4uL2RhdGF0cmFuc2Zlci5zZXJ2aWNlJztcclxuaW1wb3J0ICogYXMgZmlyZWJhc2UgZnJvbSAnbmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZSc7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgKiBhcyBpbWFnZXBpY2tlciBmcm9tIFwibmF0aXZlc2NyaXB0LWltYWdlcGlja2VyXCI7XHJcbmltcG9ydCAqIGFzIGltYWdlU291cmNlIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2ltYWdlLXNvdXJjZVwiO1xyXG5pbXBvcnQgKiBhcyBmcyBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9maWxlLXN5c3RlbVwiO1xyXG5pbXBvcnQgeyBMb2dpbmNoZWNrU2VydmljZSB9IGZyb20gJy4uL2xvZ2luY2hlY2suc2VydmljZS50bnMnO1xyXG5pbXBvcnQgeyBDaGF0TWVzc2FnZSB9IGZyb20gJy4uL21vZGVscy9jaGF0LW1lc3NhZ2UubW9kZWwnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlQXJyYXkgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS1hcnJheSc7XHJcbmltcG9ydCB7IExpc3RWaWV3IH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9saXN0LXZpZXcnO1xyXG5pbXBvcnQgeyBpc0FuZHJvaWQgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtJztcclxuaW1wb3J0IHsgQWN0aXZpdHlJbmRpY2F0b3IgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2FjdGl2aXR5LWluZGljYXRvcic7XHJcbmltcG9ydCB7IEdyaWRMYXlvdXQgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvZ3JpZC1sYXlvdXQnO1xyXG5pbXBvcnQgKiBhcyBhcHAgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIjtcclxuZGVjbGFyZSB2YXIgYW5kcm9pZDogYW55O1xyXG5cclxuXHJcbmNsYXNzIENoYXRJdGVtIHtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgY2hhdE1lc3NhZ2U6IENoYXRNZXNzYWdlLCBwdWJsaWMgdmlzaWJpbGl0eTogc3RyaW5nLCBwdWJsaWMgZm9ybWF0dGVkVGltZTogc3RyaW5nLCBwdWJsaWMgbWluZUNvbnRpbnVhdGlvbjogYm9vbGVhbiwgcHVibGljIHRoZWlyc0NvbnRpbnVhdGlvbjogYm9vbGVhbikge31cclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtY2hhdCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NoYXQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2NoYXQuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDaGF0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0cmFuc2ZlclNlcnZpY2U6IFRyYW5zZmVyU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMsIHByaXZhdGUgbG9naW5jaGVja1NlcnZpY2U6IExvZ2luY2hlY2tTZXJ2aWNlLFxyXG4gIFx0cHJpdmF0ZSB2Y1JlZjogVmlld0NvbnRhaW5lclJlZikgeyB9XHJcblxyXG4gIEBWaWV3Q2hpbGQoXCJtZXNzYWdlTGlzdFwiLCB7IHN0YXRpYzogdHJ1ZSB9KSBsdjogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKFwiY2hhdENvbnRhaW5lclwiLCB7IHN0YXRpYzogdHJ1ZSB9KSBjYzogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKFwiYWN0aXZpdHlJbmRpY2F0b3JcIiwgeyBzdGF0aWM6IHRydWUgfSkgYWk6IEVsZW1lbnRSZWY7XHJcbiAgY2hhdElkOiBzdHJpbmc7XHJcbiAgbWVzc2FnZXMgPSBuZXcgT2JzZXJ2YWJsZUFycmF5PENoYXRJdGVtPigpO1xyXG4gIGFsbE1lc3NhZ2VzID0gbmV3IE9ic2VydmFibGVBcnJheTxDaGF0SXRlbT4oKTtcclxuICBtZXNzYWdlOiBzdHJpbmcgPSAnJztcclxuICB1c2VySWQ6IHN0cmluZztcclxuICBjaGF0TmFtZTogc3RyaW5nO1xyXG4gIGRpc3BsYXlOYW1lOiBzdHJpbmc7XHJcbiAgcGZwU291cmNlOiBzdHJpbmc7XHJcbiAgbGlzdDogTGlzdFZpZXc7XHJcbiAgbGFzdEluZGV4O1xyXG4gIGN1cnJlbnRVc2VyOiBhbnk7XHJcbiAgbnVtU2hvd24gPSAyMDtcclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBsZXQgY2hhdENvbnRhaW5lciA9IDxHcmlkTGF5b3V0PiB0aGlzLmNjLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICBjaGF0Q29udGFpbmVyLnZpc2liaWxpdHkgPSAnY29sbGFwc2UnO1xyXG4gIFx0aWYoaXNBbmRyb2lkKSB7XHJcbiAgXHRcdHZhciB3aW5kb3cgPSBhcHAuYW5kcm9pZC5zdGFydEFjdGl2aXR5LmdldFdpbmRvdygpO1xyXG4gICAgICAgIHdpbmRvdy5zZXRTb2Z0SW5wdXRNb2RlKGFuZHJvaWQudmlldy5XaW5kb3dNYW5hZ2VyLkxheW91dFBhcmFtcy5TT0ZUX0lOUFVUX0FESlVTVF9SRVNJWkUpO1xyXG4gIFx0fVxyXG4gIFx0dGhpcy5saXN0ID0gdGhpcy5sdi5uYXRpdmVFbGVtZW50O1xyXG5cclxuICBcdHRoaXMuY2hhdElkID0gdGhpcy50cmFuc2ZlclNlcnZpY2UuZ2V0RGF0YSgpO1xyXG4gIFx0dGhpcy51c2VySWQgPSB0aGlzLmxvZ2luY2hlY2tTZXJ2aWNlLmdldFVzZXIoKTtcclxuICBcdGZpcmViYXNlLmdldEN1cnJlbnRVc2VyKCkudGhlbigodXNlcikgPT4ge1xyXG4gIFx0XHR0aGlzLmRpc3BsYXlOYW1lID0gdXNlci5kaXNwbGF5TmFtZTtcclxuICBcdFx0dGhpcy5wZnBTb3VyY2UgPSB1c2VyLnBob3RvVVJMO1xyXG4gIFx0fSlcclxuICBcdHRoaXMucmV0cmlldmVDaGF0cygpO1xyXG4gIFx0dGhpcy5jaGF0TmFtZSA9IFwiSm9obiBEb2VcIlxyXG4gIFx0Ly8gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgIC8vICAgIHRoaXMubGlzdC5zY3JvbGxUb0luZGV4KHRoaXMubWVzc2FnZXMubGVuZ3RoIC0gMSk7XHJcbiAgIC8vICB9LCAxMDAwKVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgc2VuZE1lc3NhZ2UoaW1nU3JjID0gbnVsbCkge1xyXG4gICAgaWYodGhpcy5tZXNzYWdlLnJlcGxhY2UoL1xccysvZywgJycpLmxlbmd0aCA9PT0gMCAmJiAhaW1nU3JjKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICBcdHZhciB0b2RheSA9IG5ldyBEYXRlKCk7XHJcbiAgXHR2YXIgZGF0ZSA9IHRvZGF5LmdldEZ1bGxZZWFyKCkrJy8nKyh0b2RheS5nZXRNb250aCgpKzEpKycvJyt0b2RheS5nZXREYXRlKCk7XHJcbiAgXHR2YXIgdGltZSA9IHRvZGF5LmdldEhvdXJzKCkgKyBcIjpcIiArIHRvZGF5LmdldFVUQ01pbnV0ZXMoKSArIFwiOlwiICsgdG9kYXkuZ2V0U2Vjb25kcygpO1xyXG4gICAgdmFyIGNoYXQ6IENoYXRNZXNzYWdlO1xyXG4gICAgaWYoaW1nU3JjKSB7XHJcbiAgICBcdGNoYXQgPSB7XHJcbiAgICBcdFx0dXNlcklkOiB0aGlzLnVzZXJJZCxcclxuICAgIFx0XHRkaXNwbGF5TmFtZTogdGhpcy5kaXNwbGF5TmFtZSxcclxuICAgIFx0XHRtZXNzYWdlOiBcIlwiLFxyXG4gICAgXHRcdHBmcFNvdXJjZTogdGhpcy5wZnBTb3VyY2UsXHJcbiAgICBcdFx0aW1nU291cmNlOiBpbWdTcmMsXHJcbiAgICBcdFx0dGltZTogdGltZSxcclxuICAgIFx0XHRkYXRlOiBkYXRlXHJcbiAgICBcdH1cclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICBjaGF0ID0ge1xyXG4gICAgICAgIHVzZXJJZDogdGhpcy51c2VySWQsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IHRoaXMuZGlzcGxheU5hbWUsXHJcbiAgICAgICAgbWVzc2FnZTogdGhpcy5tZXNzYWdlLFxyXG4gICAgICAgIHBmcFNvdXJjZTogdGhpcy5wZnBTb3VyY2UsXHJcbiAgICAgICAgaW1nU291cmNlOiBcIlwiLFxyXG4gICAgICAgIHRpbWU6IHRpbWUsXHJcbiAgICAgICAgZGF0ZTogZGF0ZVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHRjb25zdCBtZXNzYWdlRG9jdW1lbnQgPSBmaXJlYmFzZS5maXJlc3RvcmUuY29sbGVjdGlvbignY2hhdHMnKS5kb2ModGhpcy5jaGF0SWQpO1xyXG4gIFx0Y29uc3QgbWVzc2FnZVByb21pc2UgPSBhd2FpdCBtZXNzYWdlRG9jdW1lbnQuZ2V0KCkudGhlbigoZG9jKSA9PiB7XHJcbiAgXHRcdHZhciB1cGRhdGVkQ2hhdHMgOiBbQ2hhdE1lc3NhZ2VdID0gZG9jLmRhdGEoKS5jaGF0cztcclxuICBcdFx0dXBkYXRlZENoYXRzLnB1c2goY2hhdCk7XHJcbiAgXHRcdG1lc3NhZ2VEb2N1bWVudC51cGRhdGUoe1xyXG4gIFx0XHRcdGNoYXRzOiB1cGRhdGVkQ2hhdHMsXHJcbiAgXHRcdFx0bGFzdENoYXQ6IGRhdGUgKyAnICcgKyB0aW1lXHJcbiAgXHRcdH0pXHJcbiAgXHR9KVxyXG4gIFx0dGhpcy5tZXNzYWdlID0gJyc7XHJcbiAgfVxyXG5cclxuICBhc3luYyByZXRyaWV2ZUNoYXRzKCkge1xyXG4gIFx0Y29uc3QgbWVzc2FnZURvY3VtZW50ID0gZmlyZWJhc2UuZmlyZXN0b3JlLmNvbGxlY3Rpb24oJ2NoYXRzJykuZG9jKHRoaXMuY2hhdElkKTtcclxuICBcdGNvbnN0IGRvY1Byb21pc2UgPSBhd2FpdCBtZXNzYWdlRG9jdW1lbnQuZ2V0KCkudGhlbihhc3luYyAoZG9jKSA9PiB7XHJcbiAgXHRcdGxldCBkYXRhID0gZG9jLmRhdGEoKTtcclxuICBcdFx0dGhpcy5sYXN0SW5kZXggPSBkYXRhLmNoYXRzLmxlbmd0aDtcclxuICAgICAgdGhpcy5tZXNzYWdlcy5zcGxpY2UoMCk7XHJcbiAgICAgIHRoaXMuYWxsTWVzc2FnZXMuc3BsaWNlKDApO1xyXG4gIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGF0YS5jaGF0cy5sZW5ndGg7IGkrKykge1xyXG4gIFx0XHRcdGlmKGRhdGEuY2hhdHNbaV0udXNlcklkID09PSB0aGlzLnVzZXJJZCkge1xyXG4gICAgICAgICAgYXdhaXQgdGhpcy51cGRhdGVDb250aW51YXRpb25zKGRhdGEsIGksIHRydWUsIFwiY29sbGFwc2VcIik7XHJcbiAgICAgICAgfVxyXG4gIFx0XHRcdGVsc2Uge1xyXG4gICAgICAgICAgYXdhaXQgdGhpcy51cGRhdGVDb250aW51YXRpb25zKGRhdGEsIGksIGZhbHNlLCBcInZpc2libGVcIik7XHJcbiAgICAgICAgfVxyXG4gIFx0XHR9XHJcbiAgXHRcdC8vIHRoaXMubGlzdC5zY3JvbGxUb0luZGV4KGRhdGEuY2hhdHMubGVuZ3RoIC0gMSk7XHJcbiAgXHRcdGlmKGRhdGEudXNlcnMubGVuZ3RoID09PSAyKSB7XHJcbiAgXHRcdFx0aWYoZGF0YS51c2Vyc1swXS51aWQgPT09IHRoaXMudXNlcklkKVxyXG4gIFx0XHRcdFx0dGhpcy5jaGF0TmFtZSA9IGRhdGEudXNlcnNbMV0uZGlzcGxheU5hbWU7XHJcbiAgXHRcdFx0ZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmNoYXROYW1lID0gZGF0YS51c2Vyc1swXS5kaXNwbGF5TmFtZTtcclxuICAgICAgICB9XHJcbiAgXHRcdH1cclxuICBcdFx0ZWxzZSB7XHJcbiAgICAgICAgdmFyIGNoYXROYW1lID0gJ1lvdSwgJztcclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgZGF0YS51c2Vycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgaWYoZGF0YS51c2Vyc1tpXS5pZCAhPSB0aGlzLnVzZXJJZCkge1xyXG4gICAgICAgICAgICBpZihpID09PSBkYXRhLnVzZXJzLmxlbmd0aCAtIDEpXHJcbiAgICAgICAgICAgICAgY2hhdE5hbWUgKz0gJ2FuZCAnICsgZGF0YS51c2Vyc1tpXS5kaXNwbGF5TmFtZTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgIGNoYXROYW1lICs9IGRhdGEudXNlcnNbaV0uZGlzcGxheU5hbWUgKyAnLCAnO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICBcdFx0XHR0aGlzLmNoYXROYW1lID0gJ0dyb3VwIGNoYXQnO1xyXG4gIFx0XHR9XHJcbiAgXHR9KVxyXG5cclxuICBcdGNvbnN0IHVuc3Vic2NyaWJlID0gbWVzc2FnZURvY3VtZW50Lm9uU25hcHNob3QoYXN5bmMgZG9jID0+IHtcclxuICAgICAgY29uc29sZS5sb2coJ2NhbGxlZCcpXHJcbiAgXHRcdGxldCBkYXRhID0gZG9jLmRhdGEoKTtcclxuICBcdFx0Zm9yKHZhciBpID0gdGhpcy5sYXN0SW5kZXg7IGkgPCBkYXRhLmNoYXRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgXHRcdFx0aWYoZGF0YS5jaGF0c1tpXS51c2VySWQgPT09IHRoaXMudXNlcklkKSB7XHJcbiAgICAgICAgICBhd2FpdCB0aGlzLnVwZGF0ZUNvbnRpbnVhdGlvbnMoZGF0YSwgaSwgdHJ1ZSwgXCJjb2xsYXBzZVwiKTtcclxuICAgICAgICAgIHRoaXMubGlzdC5zY3JvbGxUb0luZGV4KHRoaXMubWVzc2FnZXMubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgfVxyXG4gIFx0XHRcdGVsc2Uge1xyXG4gICAgICAgICAgYXdhaXQgdGhpcy51cGRhdGVDb250aW51YXRpb25zKGRhdGEsIGksIGZhbHNlLCBcInZpc2libGVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubnVtU2hvd24gKz0gMTtcclxuICBcdFx0fVxyXG4gIFx0XHR0aGlzLmxhc3RJbmRleCA9IGRhdGEuY2hhdHMubGVuZ3RoO1xyXG4gIFx0fSlcclxuICAgIGlmKHRoaXMubWVzc2FnZXMubGVuZ3RoID4gdGhpcy5udW1TaG93bikge1xyXG4gICAgICB0aGlzLm1lc3NhZ2VzLnNwbGljZSgwLCB0aGlzLm1lc3NhZ2VzLmxlbmd0aCAtIHRoaXMubnVtU2hvd24pO1xyXG4gICAgfVxyXG4gICAgbGV0IGFjdGl2aXR5SW5kaWNhdG9yID0gPEFjdGl2aXR5SW5kaWNhdG9yPiB0aGlzLmFpLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICBhY3Rpdml0eUluZGljYXRvci5idXN5ID0gZmFsc2U7XHJcbiAgICBsZXQgY2hhdENvbnRhaW5lciA9IDxHcmlkTGF5b3V0PiB0aGlzLmNjLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICBjaGF0Q29udGFpbmVyLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XHJcbiAgICB0aGlzLmxpc3Quc2Nyb2xsVG9JbmRleCh0aGlzLm1lc3NhZ2VzLmxlbmd0aCAtIDEpO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgdXBkYXRlQ29udGludWF0aW9ucyhkYXRhLCBpbmRleCwgaXNNaW5lLCB2aXNpYmlsaXR5KSB7XHJcbiAgICAvL1VwZGF0ZSB0aW1lIHRvIGEgcmVhZGFibGUgZm9ybWF0IGZvciB0aGUgdXNlclxyXG4gICAgdmFyIGNoYXRUaW1lID0gZGF0YS5jaGF0c1tpbmRleF0udGltZTtcclxuICAgIHZhciBkYXRlU3BsaXQgPSBkYXRhLmNoYXRzW2luZGV4XS5kYXRlLnNwbGl0KCcvJyk7XHJcbiAgICB2YXIgdGltZVNwbGl0ID0gY2hhdFRpbWUuc3BsaXQoJzonKTtcclxuICAgIHZhciBmb3JtYXR0ZWRUaW1lID0gJyc7XHJcbiAgICBpZih0aW1lU3BsaXRbMV0ubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgIHRpbWVTcGxpdFsxXSA9ICcwJyArIHRpbWVTcGxpdFsxXTtcclxuICAgIH1cclxuICAgIHZhciBob3VycyA9IHBhcnNlSW50KHRpbWVTcGxpdFswXSk7XHJcbiAgICBpZihob3VycyA+IDEyKSB7XHJcbiAgICAgIGZvcm1hdHRlZFRpbWUgPSBkYXRlU3BsaXRbMV0gKyAnLycgKyBkYXRlU3BsaXRbMl0gKyAnLCAnICsgKGhvdXJzIC0gMTIpICsgJzonICsgdGltZVNwbGl0WzFdICsgJyBQTSc7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgaWYoaG91cnMgPT09IDApXHJcbiAgICAgICAgdGltZVNwbGl0WzBdID0gJzEyJztcclxuICAgICAgZm9ybWF0dGVkVGltZSA9IGRhdGVTcGxpdFsxXSArICcvJyArIGRhdGVTcGxpdFsyXSArICcsICcgKyB0aW1lU3BsaXRbMF0gKyAnOicgKyB0aW1lU3BsaXRbMV0gKyAnIEFNJztcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBwZnBQcm9taXNlID0gYXdhaXQgZmlyZWJhc2UuZmlyZXN0b3JlLmNvbGxlY3Rpb24oJ3VzZXJzJykuZG9jKGRhdGEuY2hhdHNbaW5kZXhdLnVzZXJJZCkuZ2V0KCkudGhlbigoZG9jKSA9PiB7XHJcbiAgICAgIGRhdGEuY2hhdHNbaW5kZXhdLnBmcFNvdXJjZSA9IGRvYy5kYXRhKCkucHJvZmlsZV9zb3VyY2U7XHJcblxyXG4gICAgICAgIC8vUHVzaCB0aGUgbWVzc2FnZSBpdGVtXHJcbiAgICAgIHRoaXMubWVzc2FnZXMucHVzaChuZXcgQ2hhdEl0ZW0oZGF0YS5jaGF0c1tpbmRleF0sIHZpc2liaWxpdHksIGZvcm1hdHRlZFRpbWUsIGZhbHNlLCBmYWxzZSkpO1xyXG4gICAgICB0aGlzLmFsbE1lc3NhZ2VzLnB1c2gobmV3IENoYXRJdGVtKGRhdGEuY2hhdHNbaW5kZXhdLCB2aXNpYmlsaXR5LCBmb3JtYXR0ZWRUaW1lLCBmYWxzZSwgZmFsc2UpKTtcclxuXHJcbiAgICAgIC8vQ2hlY2sgZm9yIGNvbnRpbnVhdGlvbiBtZXNzYWdlcyBhbmQgdXBkYXRlIGl0ZW1zIGFjY29yZGluZ2x5XHJcbiAgICAgIHZhciBpID0gaW5kZXggLSAxO1xyXG4gICAgICB3aGlsZShpID49IDAgJiYgZGF0YS5jaGF0c1tpXS51c2VySWQgPT09IGRhdGEuY2hhdHNbaW5kZXhdLnVzZXJJZCkge1xyXG4gICAgICAgIGlmKHRoaXMuaXNUaW1lT3ZlcihkYXRhLmNoYXRzW2ldLCBkYXRhLmNoYXRzW2luZGV4XSkpXHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgaWYoaSA+PSB0aGlzLm1lc3NhZ2VzLmxlbmd0aCkge1xyXG4gICAgICAgICAgdmFyIG1zZyA9IHRoaXMubWVzc2FnZXMuZ2V0SXRlbSh0aGlzLm1lc3NhZ2VzLmxlbmd0aCArIGkgLSBkYXRhLmNoYXRzLmxlbmd0aCk7XHJcbiAgICAgICAgICBtc2cudmlzaWJpbGl0eSA9ICdjb2xsYXBzZSc7XHJcbiAgICAgICAgICBpZihpc01pbmUpIHtcclxuICAgICAgICAgICAgbXNnLm1pbmVDb250aW51YXRpb24gPSB0cnVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIG1zZy50aGVpcnNDb250aW51YXRpb24gPSB0cnVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGhpcy5tZXNzYWdlcy5zZXRJdGVtKHRoaXMubWVzc2FnZXMubGVuZ3RoICsgaSAtIGRhdGEuY2hhdHMubGVuZ3RoLCBtc2cpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgdmFyIG1zZyA9IHRoaXMubWVzc2FnZXMuZ2V0SXRlbShpKTtcclxuICAgICAgICAgIG1zZy52aXNpYmlsaXR5ID0gJ2NvbGxhcHNlJztcclxuICAgICAgICAgIGlmKGlzTWluZSkge1xyXG4gICAgICAgICAgICBtc2cubWluZUNvbnRpbnVhdGlvbiA9IHRydWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbXNnLnRoZWlyc0NvbnRpbnVhdGlvbiA9IHRydWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0aGlzLm1lc3NhZ2VzLnNldEl0ZW0oaSwgbXNnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuYWxsTWVzc2FnZXMuc2V0SXRlbShpLCBtc2cpO1xyXG4gICAgICAgIGkgPSBpIC0gMTtcclxuICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICBcclxuICAgIC8vIHRoaXMubGlzdC5zY3JvbGxUb0luZGV4KHRoaXMubWVzc2FnZXMubGVuZ3RoIC0gMSk7XHJcbiAgfVxyXG5cclxuICBvcGVuSW1hZ2VzKCkge1xyXG4gICAgdmFyIGxvY2FsUGF0aDtcclxuICAgIHZhciBjb3VudGVyID0gMTtcclxuICAgIGxldCBjb250ZXh0ID0gaW1hZ2VwaWNrZXIuY3JlYXRlKHtcclxuICAgICAgICBtb2RlOiBcInNpbmdsZVwiIC8vIHVzZSBcIm11bHRpcGxlXCIgZm9yIG11bHRpcGxlIHNlbGVjdGlvblxyXG4gICAgfSk7XHJcbiAgICBjb250ZXh0XHJcbiAgICAuYXV0aG9yaXplKClcclxuICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICByZXR1cm4gY29udGV4dC5wcmVzZW50KCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKHNlbGVjdGlvbikgPT4ge1xyXG4gICAgICAgIHNlbGVjdGlvbi5mb3JFYWNoKChzZWxlY3RlZCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBwcm9jZXNzIHRoZSBzZWxlY3RlZCBpbWFnZVxyXG4gICAgICAgICAgICBsZXQgaW1nU291cmNlID0gbmV3IGltYWdlU291cmNlLkltYWdlU291cmNlKCk7XHJcbiAgICAgICAgICAgIGltZ1NvdXJjZS5mcm9tQXNzZXQoc2VsZWN0ZWQpLnRoZW4oKHNvdXJjZSkgPT4ge1xyXG4gICAgICAgICAgICAgICBjb25zdCBiNjQgPSBzb3VyY2UudG9CYXNlNjRTdHJpbmcoJ2pwZWcnLCAxMDApO1xyXG4gICAgICAgICAgICAgICBjb25zdCBmaWxlU2l6ZSA9IGI2NC5yZXBsYWNlKC9cXD0vZywgXCJcIikubGVuZ3RoICogMC43NTtcclxuICAgICAgICAgICAgICAgaWYgKGZpbGVTaXplID4gNSkge1xyXG4gICAgICAgICAgICAgICAgICAvLyBJZiBmaWxlIGlzIGdyZWF0ZXIgdGhhbiAxIE1CXHJcbiAgICAgICAgICAgICAgICAgIHNvdXJjZS5sb2FkRnJvbUJhc2U2NChiNjQpO1xyXG4gICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICBjb25zdCBpbWdIYXNoID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygpLnNsaWNlKDIsMTEpO1xyXG4gICAgICAgICAgICAgICBsZXQgZm9sZGVyID0gZnMua25vd25Gb2xkZXJzLnRlbXAoKTtcclxuICAgICAgICAgICAgICAgdmFyIHBhdGggPSBmcy5wYXRoLmpvaW4oZm9sZGVyLnBhdGgsIGltZ0hhc2ggKyBcIi5wbmdcIik7XHJcbiAgICAgICAgICAgICAgIGxldCBzYXZlZCA9IHNvdXJjZS5zYXZlVG9GaWxlKHBhdGgsIFwianBlZ1wiLCAxMDApO1xyXG5cclxuICAgICAgICAgICAgICAgZmlyZWJhc2Uuc3RvcmFnZS51cGxvYWRGaWxlKHtcclxuICAgICAgICAgICAgICAgICAgLy8gdGhlIGZ1bGwgcGF0aCBvZiB0aGUgZmlsZSBpbiB5b3VyIEZpcmViYXNlIHN0b3JhZ2UgKGZvbGRlcnMgd2lsbCBiZSBjcmVhdGVkKVxyXG4gICAgICAgICAgICAgICAgICByZW1vdGVGdWxsUGF0aDogJ2NoYXRzLycgKyB0aGlzLmNoYXRJZCArICcvaW1hZ2VzLycgKyB0aGlzLnVzZXJJZCArICcvSU1HXycgKyBpbWdIYXNoICsgJy5wbmcnLFxyXG4gICAgICAgICAgICAgICAgICAvLyBvcHRpb24gMTogYSBmaWxlLXN5c3RlbSBtb2R1bGUgRmlsZSBvYmplY3RcclxuICAgICAgICAgICAgICAgICAgbG9jYWxGaWxlOiBmcy5GaWxlLmZyb21QYXRoKHBhdGgpLFxyXG4gICAgICAgICAgICAgICAgICAvLyBvcHRpb24gMjogYSBmdWxsIGZpbGUgcGF0aCAoaWdub3JlZCBpZiAnbG9jYWxGaWxlJyBpcyBzZXQpXHJcbiAgICAgICAgICAgICAgICAgIGxvY2FsRnVsbFBhdGg6IHBhdGgsXHJcbiAgICAgICAgICAgICAgICAgIC8vIGdldCBub3RpZmllZCBvZiBmaWxlIHVwbG9hZCBwcm9ncmVzc1xyXG4gICAgICAgICAgICAgICAgICBvblByb2dyZXNzOiAoc3RhdHVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJVcGxvYWRlZCBmcmFjdGlvbjogXCIgKyBzdGF0dXMuZnJhY3Rpb25Db21wbGV0ZWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUGVyY2VudGFnZSBjb21wbGV0ZTogXCIgKyBzdGF0dXMucGVyY2VudGFnZUNvbXBsZXRlZCk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgfSkudGhlbigodXBsb2FkZWRGaWxlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRmlsZSB1cGxvYWRlZDogXCIgKyBKU09OLnN0cmluZ2lmeSh1cGxvYWRlZEZpbGUpKTtcclxuICAgICAgICAgICAgICAgICAgZmlyZWJhc2Uuc3RvcmFnZS5nZXREb3dubG9hZFVybCh7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVtb3RlRnVsbFBhdGg6ICdjaGF0cy8nICsgdGhpcy5jaGF0SWQgKyAnL2ltYWdlcy8nICsgdGhpcy51c2VySWQgKyAnL0lNR18nICsgaW1nSGFzaCArICcucG5nJ1xyXG4gICAgICAgICAgICAgICAgICB9KS50aGVuKCh1cmwpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbmRNZXNzYWdlKHVybCk7XHJcbiAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSkuY2F0Y2goKGUpID0+IHtcclxuICAgICAgICAvLyBwcm9jZXNzIGVycm9yXHJcbiAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGlzVGltZU92ZXIoY2hhdDEsIGNoYXQyKSB7XHJcbiAgICBjb25zdCB0aW1lMSA9IGNoYXQxLnRpbWU7XHJcbiAgICBjb25zdCB0aW1lMiA9IGNoYXQyLnRpbWU7XHJcbiAgICBjb25zdCBkYXRlMSA9IGNoYXQxLmRhdGU7XHJcbiAgICBjb25zdCBkYXRlMiA9IGNoYXQyLmRhdGU7XHJcblxyXG4gICAgY29uc3QgdGltZTFTcGxpdCA9IHRpbWUxLnNwbGl0KCc6Jyk7XHJcbiAgICBjb25zdCB0aW1lMlNwbGl0ID0gdGltZTIuc3BsaXQoJzonKTtcclxuXHJcbiAgICB2YXIgdGltZTFUb3RhbFNlY29uZHMgPSBwYXJzZUludCh0aW1lMVNwbGl0WzBdKSAqIDM2MDAgKyBwYXJzZUludCh0aW1lMVNwbGl0WzFdKSAqIDYwICsgcGFyc2VJbnQodGltZTFTcGxpdFsyXSk7XHJcbiAgICB2YXIgdGltZTJUb3RhbFNlY29uZHMgPSBwYXJzZUludCh0aW1lMlNwbGl0WzBdKSAqIDM2MDAgKyBwYXJzZUludCh0aW1lMlNwbGl0WzFdKSAqIDYwICsgcGFyc2VJbnQodGltZTJTcGxpdFsyXSk7XHJcbiAgICBpZih0aW1lMlRvdGFsU2Vjb25kcyAtIHRpbWUxVG90YWxTZWNvbmRzID4gKDYwICogMykgfHwgZGF0ZTIgPiBkYXRlMSkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIGFsaWduKGl0ZW0pIHtcclxuICBcdGlmKGl0ZW0uY2hhdE1lc3NhZ2UudXNlcklkID09PSB0aGlzLnVzZXJJZClcclxuICBcdFx0cmV0dXJuIFwicmlnaHRcIjtcclxuICBcdGVsc2VcclxuICBcdFx0cmV0dXJuIFwibGVmdFwiO1xyXG4gIH1cclxuXHJcbiAgYWxpZ25SZXZlcnNlKGl0ZW0pIHtcclxuICAgIGlmKGl0ZW0uY2hhdE1lc3NhZ2UudXNlcklkID09PSB0aGlzLnVzZXJJZClcclxuICAgICAgcmV0dXJuIFwibGVmdFwiO1xyXG4gICAgZWxzZVxyXG4gICAgICByZXR1cm4gXCJyaWdodFwiO1xyXG4gIH1cclxuXHJcbiAgdGV4dFZpc2liaWxpdHkoaXRlbSkge1xyXG4gICAgaWYoaXRlbS5jaGF0TWVzc2FnZS5tZXNzYWdlID09PSBcIlwiKSB7XHJcbiAgICAgIHJldHVybiBcImNvbGxhcHNlXCI7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgcmV0dXJuIFwidmlzaWJsZVwiO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaW1nVmlzaWJpbGl0eShpdGVtKSB7XHJcbiAgICBpZihpdGVtLmNoYXRNZXNzYWdlLmltZ1NvdXJjZSA9PT0gXCJcIikge1xyXG4gICAgICByZXR1cm4gXCJjb2xsYXBzZVwiO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHJldHVybiBcInZpc2libGVcIjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldHVwSXRlbVZpZXcoYXJncykge1xyXG4gIFx0YXJncy52aWV3LmNvbnRleHQubWluZSA9ICh0aGlzLm1lc3NhZ2VzLmdldEl0ZW0oYXJncy5pbmRleCkuY2hhdE1lc3NhZ2UudXNlcklkID09PSB0aGlzLnVzZXJJZCk7XHJcbiAgXHRhcmdzLnZpZXcuY29udGV4dC50aGVpcnMgPSAodGhpcy5tZXNzYWdlcy5nZXRJdGVtKGFyZ3MuaW5kZXgpLmNoYXRNZXNzYWdlLnVzZXJJZCAhPT0gdGhpcy51c2VySWQpO1xyXG4gICAgYXJncy52aWV3LmNvbnRleHQubWluZUNvbnRpbnVhdGlvbiA9ICh0aGlzLm1lc3NhZ2VzLmdldEl0ZW0oYXJncy5pbmRleCkubWluZUNvbnRpbnVhdGlvbik7XHJcbiAgICBhcmdzLnZpZXcuY29udGV4dC50aGVpcnNDb250aW51YXRpb24gPSAodGhpcy5tZXNzYWdlcy5nZXRJdGVtKGFyZ3MuaW5kZXgpLnRoZWlyc0NvbnRpbnVhdGlvbik7XHJcbiAgICBhcmdzLnZpZXcuY29udGV4dC5taW5lQ29udGludWF0aW9uR3JpZCA9ICh0aGlzLm1lc3NhZ2VzLmdldEl0ZW0oYXJncy5pbmRleCkubWluZUNvbnRpbnVhdGlvbik7XHJcbiAgICBhcmdzLnZpZXcuY29udGV4dC50aGVpcnNDb250aW51YXRpb25HcmlkID0gKHRoaXMubWVzc2FnZXMuZ2V0SXRlbShhcmdzLmluZGV4KS50aGVpcnNDb250aW51YXRpb24pO1xyXG5cclxuICAgIGFyZ3Mudmlldy5jb250ZXh0LmdyaWQgPSAoIWFyZ3Mudmlldy5jb250ZXh0LnRoZWlyc0NvbnRpbnVhdGlvbiAmJiAhYXJncy52aWV3LmNvbnRleHQubWluZUNvbnRpbnVhdGlvbik7XHJcbiAgICBhcmdzLnZpZXcuY29udGV4dC5taW5lVGltZSA9ICghYXJncy52aWV3LmNvbnRleHQubWluZUNvbnRpbnVhdGlvbiAmJiBhcmdzLnZpZXcuY29udGV4dC5taW5lKTtcclxuICAgIGFyZ3Mudmlldy5jb250ZXh0LnRoZWlyc1RpbWUgPSAoIWFyZ3Mudmlldy5jb250ZXh0LnRoZWlyc0NvbnRpbnVhdGlvbiAmJiBhcmdzLnZpZXcuY29udGV4dC50aGVpcnMpO1xyXG5cclxuICAgIGFyZ3Mudmlldy5jb250ZXh0LnRoZWlyc0ltZyA9IGFyZ3Mudmlldy5jb250ZXh0LnRoZWlyc0NvbnRpbnVhdGlvbjtcclxuICAgIGFyZ3Mudmlldy5jb250ZXh0LmltZyA9ICFhcmdzLnZpZXcuY29udGV4dC50aGVpcnNJbWc7XHJcbiAgICBcclxuICAgIGFyZ3Mudmlldy5jb250ZXh0LnRpbWUgPSAoIWFyZ3Mudmlldy5jb250ZXh0Lm1pbmVUaW1lICYmICFhcmdzLnZpZXcuY29udGV4dC50aGVpcnNUaW1lKSAgICBcclxuICAgIGFyZ3Mudmlldy5jb250ZXh0LmV2ZW4gPSAoYXJncy5pbmRleCAlIDIgPT09IDApO1xyXG4gIFx0YXJncy52aWV3LmNvbnRleHQub2RkID0gKGFyZ3MuaW5kZXggJSAyID09PSAxKTtcclxuICB9XHJcblxyXG4gIG9uTmF2QnRuVGFwKCkge1xyXG4gIFx0aWYodGhpcy5yb3V0ZXIuY2FuR29CYWNrKCkpXHJcbiAgXHRcdHRoaXMucm91dGVyLmJhY2soKTtcclxuICBcdGVsc2VcclxuICBcdFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUoWydjaGF0LWxpc3QnXSwge2NsZWFySGlzdG9yeTogdHJ1ZX0pO1xyXG4gIH1cclxuXHJcbiAgb25UZXh0VGFwKCkge1xyXG4gICAgdGhpcy5saXN0LnNjcm9sbFRvSW5kZXgodGhpcy5tZXNzYWdlcy5sZW5ndGggLSAxKTtcclxuICB9XHJcblxyXG4gIHRvVmlld0ltYWdlKGltZ1NvdXJjZSkge1xyXG4gICAgdGhpcy50cmFuc2ZlclNlcnZpY2Uuc2V0RGF0YShpbWdTb3VyY2UpO1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWyd2aWV3LWltYWdlJ10pO1xyXG4gIH1cclxuXHJcbiAgbG9hZE1vcmVEYXRhKGFyZ3MpIHtcclxuICAgIC8vT24gc2Nyb2xsIHRvIHRoZSB0b3AsIGxvYWQgbW9yZSBjaGF0IG1lc3NhZ2VzXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgbGV0IGxpc3RWaWV3ID0gPExpc3RWaWV3PiB0aGlzLmx2Lm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICAgIGNvbnN0IG51bSA9IHRoaXMubnVtU2hvd247XHJcbiAgICAgIGlmKGFyZ3MuaW5kZXggPT09IDAgJiYgbnVtIDwgdGhpcy5hbGxNZXNzYWdlcy5sZW5ndGgpIHtcclxuICAgICAgICBmb3IodmFyIGkgPSBudW07IGkgPCBudW0gKyAxMDsgaSsrKSB7XHJcbiAgICAgICAgICBpZihpIDwgdGhpcy5hbGxNZXNzYWdlcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5tZXNzYWdlcy51bnNoaWZ0KHRoaXMuYWxsTWVzc2FnZXMuZ2V0SXRlbSh0aGlzLmFsbE1lc3NhZ2VzLmxlbmd0aCAtIGkgLSAxKSk7XHJcbiAgICAgICAgICAgIHRoaXMubnVtU2hvd24gKz0gMTtcclxuICAgICAgICAgICAgbGlzdFZpZXcuc2Nyb2xsVG9JbmRleChpIC0gbnVtKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sIDUwMCk7XHJcbiAgICBcclxuICB9XHJcblxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCIvKiBBZGQgbW9iaWxlIHN0eWxlcyBmb3IgdGhlIGNvbXBvbmVudCBoZXJlLiAgKi9cXG4uZGVsZXRlLWJ0biB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBjb2xvcjogI2FjMDBlNjtcXG4gICAgLypwYWRkaW5nOiA2cHggMjRweDsqL1xcbiAgICBib3JkZXItd2lkdGg6IDE7XFxuICAgIGJvcmRlci1jb2xvcjogI2FjMDBlNjtcXG4gICAgYm9yZGVyLXJhZGl1czogNTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmbG9hdDogY2VudGVyO1xcbiAgICBtYXJnaW46IGF1dG87IFxcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBmb250LWZhbWlseTogXFxcIlNlZ29lIFVJXFxcIixBcmlhbCxzYW5zLXNlcmlmO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxNTtcXG4gICAgd2lkdGg6IDEyMDtcXG4gICAgaGVpZ2h0OiA0MDtcXG4gICAgaG9yaXpvbnRhbC1hbGlnbjpyaWdodDtcXG59XFxuXFxuLmRlbGV0ZS1idG46aGlnaGxpZ2h0ZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjllNmZmO1xcbn1cXG5cXG4uY2FuY2VsLWJ0biB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAvKmNvbG9yOiB3aGl0ZTsqL1xcbiAgICAvKnBhZGRpbmc6IDZweCAyNHB4OyovXFxuICAgIGJvcmRlci13aWR0aDogMTtcXG4gICAgYm9yZGVyLWNvbG9yOiBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogNTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmbG9hdDogY2VudGVyO1xcbiAgICBtYXJnaW46IGF1dG87IFxcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBmb250LWZhbWlseTogXFxcIlNlZ29lIFVJXFxcIixBcmlhbCxzYW5zLXNlcmlmO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNTtcXG4gICAgbWFyZ2luLWxlZnQ6IDE1O1xcbiAgICB3aWR0aDogMTIwO1xcbiAgICBoZWlnaHQ6IDQwO1xcbiAgICBob3Jpem9udGFsLWFsaWduOmxlZnQ7XFxufVxcblxcbi5jYW5jZWwtYnRuOmhpZ2hsaWdodGVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcXG59XFxuXFxuLmRlbGV0ZS1sYWJlbCB7XFxuXFx0Zm9udC1zaXplOiAyMDtcXG5cXHRtYXJnaW4tdG9wOiAxODtcXG5cXHRtYXJnaW4tYm90dG9tOiA0ODtcXG5cXHRtYXJnaW4tbGVmdDogMTg7XFxuXFx0bWFyZ2luLXJpZ2h0OiAxODtcXG5cXHRjb2xvcjogYmxhY2s7XFxufVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxTdGFja0xheW91dD5cXHJcXG5cXHQ8TGFiZWwgdGV4dFdyYXA9XFxcInRydWVcXFwiIHRleHQ9XFxcIkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGU/XFxcIiBjbGFzcz1cXFwiZGVsZXRlLWxhYmVsXFxcIj48L0xhYmVsPlxcclxcblxcdDxHcmlkTGF5b3V0IHJvd3M9XFxcImF1dG9cXFwiIGNvbHVtbnM9XFxcIipcXFwiPlxcclxcblxcdFxcdDxCdXR0b24gcm93PVxcXCIwXFxcIiB0ZXh0PVxcXCJDYW5jZWxcXFwiIGNsYXNzPVxcXCJjYW5jZWwtYnRuXFxcIiAodGFwKT1cXFwiY2xvc2UoJ2NhbmNlbCcpXFxcIj48L0J1dHRvbj5cXHJcXG5cXHRcXHQ8QnV0dG9uIHJvdz1cXFwiMFxcXCIgdGV4dD1cXFwiRGVsZXRlXFxcIiBjbGFzcz1cXFwiZGVsZXRlLWJ0blxcXCIgKHRhcCk9XFxcImNsb3NlKCdkZWxldGUnKVxcXCI+PC9CdXR0b24+XFxyXFxuXFx0PC9HcmlkTGF5b3V0PlxcclxcbjwvU3RhY2tMYXlvdXQ+XCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNb2RhbERpYWxvZ1BhcmFtcyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9kaXJlY3RpdmVzL2RpYWxvZ3NcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLWNvbmZpcm1hdGlvbicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbmZpcm1hdGlvbi5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY29uZmlybWF0aW9uLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29uZmlybWF0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwYXJhbXM6IE1vZGFsRGlhbG9nUGFyYW1zKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG5cclxuICBjbG9zZShyZXMpIHtcclxuICBcdHRoaXMucGFyYW1zLmNsb3NlQ2FsbGJhY2socmVzKTtcclxuICB9XHJcblxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCIvKlxcbkFkZCB5b3VyIE5hdGl2ZVNjcmlwdCBzcGVjaWZpYyBzdHlsZXMgaGVyZS5cXG5UbyBsZWFybiBtb3JlIGFib3V0IHN0eWxpbmcgaW4gTmF0aXZlU2NyaXB0IHNlZTpcXG5odHRwczovL2RvY3MubmF0aXZlc2NyaXB0Lm9yZy9hbmd1bGFyL3VpL3N0eWxpbmdcXG4qL1wiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxTdGFja0xheW91dD5cXG4gIDxMYWJlbCB0ZXh0PVxcXCJjb25uZWN0IHdvcmtzXFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCI+PC9MYWJlbD5cXG4gIDxMYWJlbCB0ZXh0PVxcXCJUaGlzIGlzIGEgbWlncmF0ZWQgY29tcG9uZW50XFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCI+PC9MYWJlbD5cXG4gIDxMYWJlbCB0ZXh0PVxcXCJVcGRhdGUgaXQgdG8gcHJvdmlkZSB0aGUgVUkgZWxlbWVudHMgcmVxdWlyZWQgaW4geW91ciBtb2JpbGUgYXBwXFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCI+PC9MYWJlbD5cXG48L1N0YWNrTGF5b3V0PlxcblxcbjwhLS1cXG5PcmlnaW5hbCBXZWIgdGVtcGxhdGU6XFxuXFxuPHA+XFxyXFxuICBjb25uZWN0IHdvcmtzIVxcclxcbjwvcD5cXHJcXG5cXG4tLT5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IExvZ2luY2hlY2tTZXJ2aWNlIH0gZnJvbSAnLi4vbG9naW5jaGVjay5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLWNvbm5lY3QnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jb25uZWN0LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jb25uZWN0LmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29ubmVjdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbG9naW5jaGVja1NlcnZpY2U6IExvZ2luY2hlY2tTZXJ2aWNlKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgXHR0aGlzLmxvZ2luY2hlY2tTZXJ2aWNlLmxvZ2luQ2hlY2soKTtcclxuICB9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFRyYW5zZmVyU2VydmljZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOlJvdXRlcikgeyB9XHJcblxyXG4gIHByaXZhdGUgZGF0YTtcclxuXHJcbiAgc2V0RGF0YShkYXRhKXtcclxuICAgIHRoaXMuZGF0YSA9IGRhdGE7XHJcbiAgfVxyXG5cclxuICBnZXREYXRhKCl7XHJcbiAgICBsZXQgdGVtcCA9IHRoaXMuZGF0YTtcclxuICAgIHRoaXMuY2xlYXJEYXRhKCk7XHJcbiAgICByZXR1cm4gdGVtcDtcclxuICB9XHJcblxyXG4gIGNsZWFyRGF0YSgpe1xyXG4gICAgdGhpcy5kYXRhID0gdW5kZWZpbmVkO1xyXG4gIH1cclxuXHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IFwicCB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2Q4YzNlYztcXHJcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNjbG9zZS1kaWFsb2cge1xcclxcblxcdGZsb2F0OiByaWdodDtcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlIHtcXHJcXG5cXHRmb250LWNvbG9yOiBibGFjaztcXHJcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcclxcbiAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNWVtO1xcclxcbn1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8cCBpZD1cXFwiZGlhbG9nXFxcIj5cXG4gIFlvdXIgc2V0dGluZ3MgaGF2ZSBiZWVuIHVwZGF0ZWQhXFxuICA8c3BhbiBjbGFzcz1cXFwiY2xvc2VcXFwiIGlkPVxcXCJjbG9zZS1kaWFsb2dcXFwiPiZ0aW1lczs8L3NwYW4+XFxuPC9wPlxcblwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWRpYWxvZycsXG4gIHRlbXBsYXRlVXJsOiAnLi9kaWFsb2cuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9kaWFsb2cuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIERpYWxvZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgXHRcbiAgfVxuXG59XG4iLCJpbXBvcnQge1xyXG4gICAgSW5qZWN0YWJsZSxcclxuICAgIEluamVjdG9yLFxyXG4gICAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG4gICAgRW1iZWRkZWRWaWV3UmVmLFxyXG4gICAgQXBwbGljYXRpb25SZWZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IFBvc3RpbmdDb21wb25lbnQgfSBmcm9tICcuL3Bvc3RpbmcvcG9zdGluZy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQYXltZW50TWV0aG9kQ29tcG9uZW50IH0gZnJvbSAnLi9wYXltZW50LW1ldGhvZC9wYXltZW50LW1ldGhvZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUcmFuc2ZlclNlcnZpY2UgfSBmcm9tICcuL2RhdGF0cmFuc2Zlci5zZXJ2aWNlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIER5bmFtaWNBZGRTZXJ2aWNlIHtcclxuICBcclxuICBjb25zdHJ1Y3RvcihcclxuICAgICAgcHJpdmF0ZSBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuICAgICAgcHJpdmF0ZSBhcHBSZWY6IEFwcGxpY2F0aW9uUmVmLFxyXG4gICAgICBwcml2YXRlIGluamVjdG9yOiBJbmplY3RvcixcclxuICAgICAgcHJpdmF0ZSB0cmFuc2ZlclNlcnZpY2U6IFRyYW5zZmVyU2VydmljZSxcclxuICApIHsgfVxyXG4gIFxyXG4gIGFwcGVuZENvbXBvbmVudFRvQm9keShsYXlvdXQ9bnVsbCkge1xyXG4gICAgLy8gMS4gQ3JlYXRlIGEgY29tcG9uZW50IHJlZmVyZW5jZSBmcm9tIHRoZSBjb21wb25lbnQgXHJcbiAgICBjb25zdCBjb21wb25lbnRSZWYgPSB0aGlzLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlclxyXG4gICAgICAucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoUG9zdGluZ0NvbXBvbmVudClcclxuICAgICAgLmNyZWF0ZSh0aGlzLmluamVjdG9yKTtcclxuICAgIC8vIDIuIEF0dGFjaCBjb21wb25lbnQgdG8gdGhlIGFwcFJlZiBzbyB0aGF0IGl0J3MgaW5zaWRlIHRoZSBuZyBjb21wb25lbnQgdHJlZVxyXG4gICAgdGhpcy5hcHBSZWYuYXR0YWNoVmlldyhjb21wb25lbnRSZWYuaG9zdFZpZXcpO1xyXG4gICAgLy8gMy4gR2V0IERPTSBlbGVtZW50IGZyb20gY29tcG9uZW50XHJcbiAgICBjb25zdCBkb21FbGVtID0gKGNvbXBvbmVudFJlZi5ob3N0VmlldyBhcyBFbWJlZGRlZFZpZXdSZWY8YW55PilcclxuICAgICAgLnJvb3ROb2Rlc1swXTtcclxuICAgIC8vIDQuIEFwcGVuZCBET00gZWxlbWVudCB0byB0aGUgYm9keVxyXG4gICAgbGF5b3V0LmFkZENoaWxkKGRvbUVsZW0pXHJcbiAgfVxyXG5cclxuICBhcHBlbmRQYXltZW50TWV0aG9kKG1ldGhvZCwgaW5mbywgc3VwZXJib2R5LCBpc0FkZCwgdG9rZW4pIHtcclxuXHJcbiAgfVxyXG59IiwiaW1wb3J0IHtcclxuICAgIEluamVjdGFibGUsXHJcbiAgICBJbmplY3RvcixcclxuICAgIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuICAgIEVtYmVkZGVkVmlld1JlZixcclxuICAgIEFwcGxpY2F0aW9uUmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBQb3N0aW5nQ29tcG9uZW50IH0gZnJvbSAnLi9wb3N0aW5nL3Bvc3RpbmcuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGF5bWVudE1ldGhvZENvbXBvbmVudCB9IGZyb20gJy4vcGF5bWVudC1tZXRob2QvcGF5bWVudC1tZXRob2QuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVHJhbnNmZXJTZXJ2aWNlIH0gZnJvbSAnLi9kYXRhdHJhbnNmZXIuc2VydmljZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBEeW5hbWljQWRkU2VydmljZSB7XHJcbiAgXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICAgIHByaXZhdGUgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcbiAgICAgIHByaXZhdGUgYXBwUmVmOiBBcHBsaWNhdGlvblJlZixcclxuICAgICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsXHJcbiAgICAgIHByaXZhdGUgdHJhbnNmZXJTZXJ2aWNlOiBUcmFuc2ZlclNlcnZpY2UsXHJcbiAgKSB7IH1cclxuICBcclxuICBhcHBlbmRDb21wb25lbnRUb0JvZHkobGF5b3V0PW51bGwpIHtcclxuICAgIC8vIDEuIENyZWF0ZSBhIGNvbXBvbmVudCByZWZlcmVuY2UgZnJvbSB0aGUgY29tcG9uZW50IFxyXG4gICAgY29uc3QgY29tcG9uZW50UmVmID0gdGhpcy5jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXJcclxuICAgICAgLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KFBvc3RpbmdDb21wb25lbnQpXHJcbiAgICAgIC5jcmVhdGUodGhpcy5pbmplY3Rvcik7XHJcbiAgICAvLyAyLiBBdHRhY2ggY29tcG9uZW50IHRvIHRoZSBhcHBSZWYgc28gdGhhdCBpdCdzIGluc2lkZSB0aGUgbmcgY29tcG9uZW50IHRyZWVcclxuICAgIHRoaXMuYXBwUmVmLmF0dGFjaFZpZXcoY29tcG9uZW50UmVmLmhvc3RWaWV3KTtcclxuICAgIC8vIDMuIEdldCBET00gZWxlbWVudCBmcm9tIGNvbXBvbmVudFxyXG4gICAgY29uc3QgZG9tRWxlbSA9IChjb21wb25lbnRSZWYuaG9zdFZpZXcgYXMgRW1iZWRkZWRWaWV3UmVmPGFueT4pXHJcbiAgICAgIC5yb290Tm9kZXNbMF07XHJcbiAgICAvLyA0LiBBcHBlbmQgRE9NIGVsZW1lbnQgdG8gdGhlIGJvZHlcclxuICAgIGxheW91dC5hZGRDaGlsZChkb21FbGVtKVxyXG4gIH1cclxuXHJcbiAgYXBwZW5kUGF5bWVudE1ldGhvZChtZXRob2QsIGluZm8sIHN1cGVyYm9keSwgaXNBZGQsIHRva2VuKSB7XHJcblxyXG4gIH1cclxufSIsIm1vZHVsZS5leHBvcnRzID0gXCIuZmxvYXQtYnRuIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjYWMwMGU2O1xcclxcblxcdHdpZHRoOiA1NjtcXHJcXG5cXHRoZWlnaHQ6IDU2O1xcclxcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmZsb2F0LWJ0bi10ZXh0IHtcXHJcXG5cXHRjb2xvcjogI2ZmZmZmZjtcXHJcXG5cXHRmb250LXNpemU6IDM2O1xcclxcblxcdC8qbWFyZ2luLXRvcDogLTY7Ki9cXHJcXG59XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJmbG9hdC1idG5cXFwiPlxcclxcblxcdDxMYWJlbCBjbGFzcz1cXFwiZmxvYXQtYnRuLXRleHRcXFwiIHRleHQ9XFxcIitcXFwiPjwvTGFiZWw+XFxyXFxuPC9TdGFja0xheW91dD5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1mbG9hdC1idG4nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9mbG9hdC1idG4uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2Zsb2F0LWJ0bi5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEZsb2F0QnRuQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG5cclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLyogQWRkIG1vYmlsZSBzdHlsZXMgZm9yIHRoZSBjb21wb25lbnQgaGVyZS4gICovXFxyXFxuLmhlYWRlcntcXHJcXG4gICAgbWFyZ2luLXRvcDogNTA7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAyMjtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAyMjtcXHJcXG5cXHRjb2xvcjogYmxhY2s7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnN1Ym1pdC1idG57XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6I2FjMDBlNjtcXHJcXG4gICAgd2lkdGg6IDc1JTtcXHJcXG4gICAgaGVpZ2h0OiAxNzBweDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJTZWdvZSBVSVxcXCIsQXJpYWwsc2Fucy1zZXJpZjtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBtYXJnaW4tdG9wOiAyMDtcXHJcXG59XFxyXFxuLnRleHQtZmllbGR7XFxyXFxuICAgIHdpZHRoOiA4NSU7XFxyXFxuICAgIG1hcmdpbi10b3A6IDIwO1xcclxcbiAgICBjb2xvcjojNjk2OTY5XFxyXFxufVxcclxcblxcclxcbi5jbG9zZS1idXR0b24tY29udGFpbmVyIHtcXHJcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0bGVmdDogMDtcXHJcXG59XFxyXFxuLmNsb3NlIHtcXHJcXG5cXHRtYXJnaW46IDEwO1xcclxcblxcdGZvbnQtc2l6ZTogNDA7XFxyXFxuXFx0d2lkdGg6IDQ4O1xcclxcbiAgICBoZWlnaHQ6IDQ4O1xcclxcbiAgICBjb2xvcjogYmxhY2tcXHJcXG59XFxyXFxuXFxyXFxuLmVycm9yLW1lc3NhZ2Uge1xcclxcblxcdGNvbG9yOiByZWQ7XFxyXFxuXFx0Zm9udC1zaXplOiAxNjtcXHJcXG5cXHR2aXNpYmlsaXR5OiBjb2xsYXBzZTtcXHJcXG59XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPFN0YWNrbGF5b3V0PlxcclxcbiAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJjbG9zZS1idXR0b24tY29udGFpbmVyXFxcIiBvcmllbnRhdGlvbj1cXFwiaG9yaXpvbnRhbFxcXCI+XFxyXFxuICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIiZ0aW1lcztcXFwiIGNsYXNzPVxcXCJjbG9zZVxcXCIgKHRhcCk9XFxcImNsb3NlKCdjYW5jZWwnKVxcXCI+PC9MYWJlbD5cXHJcXG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxyXFxuICAgICAgICA8TGFiZWwgY2xhc3M9XFxcImhlYWRlclxcXCIgdGV4dD1cXFwiRW50ZXIgdGhlIGVtYWlsIGFkZHJlc3MgeW91IHVzZWQgdG8gcmVnaXN0ZXIgZm9yIENvbGxlZ2VQb29sIHRvIHJlc2V0IHlvdXIgcGFzc3dvcmQuXFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCI+PC9MYWJlbD5cXHJcXG4gICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiaW5wdXQtZmllbGRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIGNsYXNzPVxcXCJ0ZXh0LWZpZWxkXFxcIiBoaW50PVxcXCJFbWFpbFxcXCIga2V5Ym9hcmRUeXBlPVxcXCJlbWFpbFxcXCIgYXV0b2NvcnJlY3Q9XFxcImZhbHNlXFxcIiBhdXRvY2FwaXRhbGl6YXRpb25UeXBlPVxcXCJub25lXFxcIiBbKG5nTW9kZWwpXT1cXFwiZW1haWxcXFwiIHJldHVybktleVR5cGU9XFxcIm5leHRcXFwiIChyZXR1cm5QcmVzcyk9XFxcImZvY3VzUGFzc3dvcmQoKVxcXCIgI2VtPjwvVGV4dEZpZWxkPlxcclxcbiAgICAgICAgPC9TdGFja0xheW91dD5cXHJcXG4gICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJObyBhY2NvdW50IGNvdWxkIGJlIGZvdW5kIHdpdGggeW91ciBlbWFpbFxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiIGNsYXNzPVxcXCJlcnJvci1tZXNzYWdlXFxcIiAjZXJyb3JNZXNzYWdlPjwvTGFiZWw+XFxyXFxuICAgIFxcclxcbiAgICAgICAgPEJ1dHRvbiB0ZXh0PVxcXCJTdWJtaXRcXFwiICh0YXApPVxcXCJzdWJtaXQoZW1haWwpXFxcIiBjbGFzcz1cXFwic3VibWl0LWJ0blxcXCI+PC9CdXR0b24+XFxyXFxuICAgIFxcclxcbiAgICA8L1N0YWNrbGF5b3V0PlwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDb250YWluZXJSZWYsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNb2RhbERpYWxvZ1BhcmFtcyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9kaXJlY3RpdmVzL2RpYWxvZ3NcIjtcclxuaW1wb3J0ICogYXMgZmlyZWJhc2UgZnJvbSAnbmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZSc7XHJcbmltcG9ydCB7IExvZ2luY2hlY2tTZXJ2aWNlIH0gZnJvbSAnLi4vbG9naW5jaGVjay5zZXJ2aWNlLnRucyc7XHJcbmltcG9ydCB7IFRyYW5zZmVyU2VydmljZSB9IGZyb20gJy4uL2RhdGF0cmFuc2Zlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTW9kYWxEaWFsb2dTZXJ2aWNlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2RpcmVjdGl2ZXMvZGlhbG9nc1wiO1xyXG5pbXBvcnQgeyBMYWJlbCB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvbGFiZWwnO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdhcHAtZm9yZ2V0LWZvcm0nLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL2ZvcmdldC1mb3JtLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL2ZvcmdldC1mb3JtLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRm9yZ2V0Rm9ybUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwYXJhbXM6IE1vZGFsRGlhbG9nUGFyYW1zLCBwcml2YXRlIHRyYW5zZmVyU2VydmljZTogVHJhbnNmZXJTZXJ2aWNlLCBwcml2YXRlIGxvZ2luY2hlY2tTZXJ2aWNlOiBMb2dpbmNoZWNrU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIHZjUmVmOiBWaWV3Q29udGFpbmVyUmVmLCBwcml2YXRlIG1vZGFsOiBNb2RhbERpYWxvZ1NlcnZpY2UpIHsgfVxyXG5cclxuICAgIEBWaWV3Q2hpbGQoXCJlcnJvck1lc3NhZ2VcIix7IHN0YXRpYzogdHJ1ZSB9KSBlbTogRWxlbWVudFJlZjtcclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgIH1cclxuXHJcbiAgICBjbG9zZShyZXMpIHtcclxuICAgICAgICBsZXQgZXJyb3JNZXNzYWdlID0gPExhYmVsPnRoaXMuZW0ubmF0aXZlRWxlbWVudDtcclxuICAgICAgICBlcnJvck1lc3NhZ2Uuc3R5bGUudmlzaWJpbGl0eSA9ICdjb2xsYXBzZSc7XHJcbiAgICAgICAgdGhpcy5wYXJhbXMuY2xvc2VDYWxsYmFjayhyZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHN1Ym1pdChlbWFpbCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZW1haWxcIiwgZW1haWwpXHJcbiAgICAgICAgZmlyZWJhc2Uuc2VuZFBhc3N3b3JkUmVzZXRFbWFpbChlbWFpbCkudGhlbihcclxuICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbGVydCgnQW4gZW1haWwgaGFzIGJlZW4gc2VudCB0byAnICsgZW1haWwgKyAnIHdpdGggZGV0YWlscyBvZiBob3cgdG8gcmVjb3ZlciB5b3VyIGFjY291bnQnKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZSgnY2FuY2VsJylcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZXJyb3JNZXNzYWdlID0gPExhYmVsPiB0aGlzLmVtLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2Uuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBhbGVydChtZXNzYWdlOiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gYWxlcnQoe1xyXG4gICAgICAgICAgICB0aXRsZTogXCJDb2xsZWdlUG9vbFwiLFxyXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiQ2xvc2VcIixcclxuICAgICAgICAgICAgbWVzc2FnZTogbWVzc2FnZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgR29vZ2xlTWFwc1NlcnZpY2Uge1xyXG5cclxuICBBUElfS0VZID0gJ0FJemFTeUFJVHhTMWptZjhQTXRhelJndVdjQWZXUXhXMWtQT29ZZyc7XHJcbiAgc3RhdGljX21hcHNfdXJpID0gJ2h0dHBzOi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9zdGF0aWNtYXA/a2V5PScgKyB0aGlzLkFQSV9LRVkgKyAnJnNpemU9MzQweDIyMCZzY2FsZT0yJm1hcHR5cGU9cm9hZG1hcFxcJm1hcmtlcnM9c2l6ZTpzbWFsbCU3Q2NvbG9yOnJlZCU3QydcclxuICBzdGF0aWNfbWFwc191cmlfbGFyZ2UgPSAnaHR0cHM6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL3N0YXRpY21hcD9rZXk9JyArIHRoaXMuQVBJX0tFWSArICcmc2l6ZT01MTJ4NTEyJnNjYWxlPTImbWFwdHlwZT1yb2FkbWFwXFwmbWFya2Vycz1zaXplOnNtYWxsJTdDY29sb3I6cmVkJTdDJ1xyXG4gIFxyXG4gIGdlb2NvZGVfdXJpID0gJ2h0dHBzOi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9nZW9jb2RlL2pzb24/a2V5PScgKyB0aGlzLkFQSV9LRVkgKyAnJmFkZHJlc3M9J1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cENsaWVudDogSHR0cENsaWVudCkgeyB9XHJcblxyXG4gIGdldFN0YXRpY01hcChzdGFydGFkciwgZW5kYWRyKSB7XHJcbiAgXHR2YXIgZm9ybWF0dGVkX3N0YXJ0YWRyID0gc3RhcnRhZHIuc3BsaXQoJyAnKS5qb2luKCcrJylcclxuICBcdHZhciBmb3JtYXR0ZWRfc3RhcnRhZHIgPSBzdGFydGFkci5zcGxpdCgnJicpLmpvaW4oJ2FuZCcpXHJcbiAgXHR2YXIgZm9ybWF0dGVkX2VuZGFkciA9IGVuZGFkci5zcGxpdCgnICcpLmpvaW4oJysnKVxyXG4gIFx0dmFyIGZvcm1hdHRlZF9lbmRhZHIgPSBlbmRhZHIuc3BsaXQoJyYnKS5qb2luKCdhbmQnKVxyXG4gIFx0cmV0dXJuIHRoaXMuc3RhdGljX21hcHNfdXJpICsgZm9ybWF0dGVkX3N0YXJ0YWRyICsgXCImbWFya2Vycz1zaXplOm1lZCU3Q1wiICsgZm9ybWF0dGVkX2VuZGFkcjtcclxuICB9XHJcblxyXG4gIGdldFN0YXRpY01hcExhcmdlKHN0YXJ0YWRyLCBlbmRhZHIpIHtcclxuICBcdHZhciBmb3JtYXR0ZWRfc3RhcnRhZHIgPSBzdGFydGFkci5zcGxpdCgnICcpLmpvaW4oJysnKVxyXG4gIFx0dmFyIGZvcm1hdHRlZF9zdGFydGFkciA9IHN0YXJ0YWRyLnNwbGl0KCcmJykuam9pbignYW5kJylcclxuICBcdHZhciBmb3JtYXR0ZWRfZW5kYWRyID0gZW5kYWRyLnNwbGl0KCcgJykuam9pbignKycpXHJcbiAgXHR2YXIgZm9ybWF0dGVkX2VuZGFkciA9IGVuZGFkci5zcGxpdCgnJicpLmpvaW4oJ2FuZCcpXHJcbiAgXHRyZXR1cm4gdGhpcy5zdGF0aWNfbWFwc191cmlfbGFyZ2UgKyBmb3JtYXR0ZWRfc3RhcnRhZHIgKyBcIiZtYXJrZXJzPXNpemU6bWVkJTdDXCIgKyBmb3JtYXR0ZWRfZW5kYWRyO1xyXG4gIH1cclxuXHJcbiAgZ2V0R2VvY29kZVJlc3VsdHMoYWRkcmVzcykge1xyXG4gIFx0dmFyIGZvcm1hdHRlZF9hZGRyZXNzID0gYWRkcmVzcy5zcGxpdCgnICcpLmpvaW4oJysnKVxyXG4gIFx0dmFyIGZvcm1hdHRlZF9hZGRyZXNzID0gYWRkcmVzcy5zcGxpdCgnJicpLmpvaW4oJ2FuZCcpXHJcbiAgXHRyZXR1cm4gdGhpcy5odHRwQ2xpZW50LmdldChgJHt0aGlzLmdlb2NvZGVfdXJpfWAgKyBmb3JtYXR0ZWRfYWRkcmVzcyk7XHJcbiAgfVxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCIvKlxcbkFkZCB5b3VyIE5hdGl2ZVNjcmlwdCBzcGVjaWZpYyBzdHlsZXMgaGVyZS5cXG5UbyBsZWFybiBtb3JlIGFib3V0IHN0eWxpbmcgaW4gTmF0aXZlU2NyaXB0IHNlZTpcXG5odHRwczovL2RvY3MubmF0aXZlc2NyaXB0Lm9yZy9hbmd1bGFyL3VpL3N0eWxpbmdcXG4qL1xcblxcbi5hY3Rpb25iYXIge1xcblxcdGZvbnQtc2l6ZTogMjI7XFxuXFx0Zm9udC13ZWlnaHQ6IDcwMDtcXG5cXHR0ZXh0LWFsaWduOiBsZWZ0O1xcblxcdGNvbG9yOiBibGFjaztcXG59XFxuXFxuTGFiZWwge1xcblxcdHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblxcbi5uYW1lLWxhYmVsIHtcXG5cXHRtYXJnaW4tdG9wOiAxNjtcXG5cXHRtYXJnaW4tbGVmdDogMTg7XFxuXFx0Y29sb3I6IGJsYWNrO1xcblxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxuXFx0Zm9udC1zaXplOiAxNztcXG59XFxuXFxuLmluZm8tbGFiZWwge1xcblxcdG1hcmdpbi10b3A6IDQ7XFxuXFx0bWFyZ2luLWxlZnQ6IDE4O1xcblxcdG1hcmdpbi1ib3R0b206IDE2O1xcblxcdGNvbG9yOiBibGFjaztcXG59XFxuXFxuLnBvc3Qge1xcblxcdGJvcmRlci1ib3R0b20td2lkdGg6IDE7XFxuXFx0Ym9yZGVyLWNvbG9yOiAjZjFmMWYxO1xcblxcdG1hcmdpbi10b3A6IDE1MDtcXG5cXHRtYXJnaW4tYm90dG9tOiAxNTtcXG59XFxuXFxuLnBvc3Q6aGlnaGxpZ2h0ZWQge1xcblxcdC8qYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTsqL1xcbn1cXG5cXG4ucG9zdGluZy1tYXAge1xcblxcdG1hcmdpbi1ib3R0b206IDE2O1xcblxcdGJvcmRlci1yYWRpdXM6IDEwO1xcblxcdGhlaWdodDogMjIwO1xcblxcdHdpZHRoOiAzNDA7XFxufVxcblxcbi5wcm9maWxlLXBpY3R1cmUge1xcblxcdGhlaWdodDogNTA7XFxuXFx0d2lkdGg6IDUwO1xcblxcdGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuXFx0dmVydGljYWwtYWxpZ246IHRvcDtcXG5cXHRtYXJnaW4tbGVmdDogMTY7XFxuXFx0bWFyZ2luLXRvcDogMjA7XFxufVxcblxcbi5yZWZyZXNoIHtcXG5cXHRjb2xvcjogI2FjMDBlNjtcXG59XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPCEtLSA8YXBwLW5hdmlnYXRpb24+PC9hcHAtbmF2aWdhdGlvbj4gLS0+XFxyXFxuPFB1bGxUb1JlZnJlc2ggKHJlZnJlc2gpPVxcXCJyZWZyZXNoTGlzdCgkZXZlbnQpXFxcIiBjbGFzcz1cXFwicmVmcmVzaFxcXCI+XFxyXFxuXFx0PExpc3RWaWV3IFtpdGVtc109XFxcInBvc3RpbmdzXFxcIiAoaXRlbVRhcCk9XFxcIm9uSXRlbVRhcCgkZXZlbnQpXFxcIiAjbGlzdFZpZXcgaWQ9XFxcImxpc3RWaWV3XFxcIj5cXHJcXG5cXHQgICAgPG5nLXRlbXBsYXRlIGxldC1pdGVtPVxcXCJpdGVtXFxcIiBsZXQtaT1cXFwiaW5kZXhcXFwiIGxldC1vZGQ9XFxcIm9kZFxcXCIgbGV0LWV2ZW49XFxcImV2ZW5cXFwiPlxcclxcblxcdCAgICAgICAgPFN0YWNrTGF5b3V0IFtjbGFzcy5vZGRdPVxcXCJvZGRcXFwiIFtjbGFzcy5ldmVuXT1cXFwiZXZlblxcXCIgY2xhc3M9XFxcInBvc3RcXFwiPlxcclxcblxcdCAgICAgICAgXFx0ICA8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XFxcImhvcml6b250YWxcXFwiPlxcclxcblxcdCAgICAgICAgXFx0ICBcXHQ8SW1hZ2UgW3NyY109XFxcIml0ZW0ucHJvZmlsZVNvdXJjZVxcXCIgY2xhc3M9XFxcInByb2ZpbGUtcGljdHVyZVxcXCIgc3RyZXRjaD1cXFwiYXNwZWN0Rml0XFxcIj48L0ltYWdlPlxcclxcblxcdCAgICAgICAgXFx0ICBcXHQ8U3RhY2tMYXlvdXQ+XFxyXFxuXFx0XFx0ICAgICAgICAgICAgICBcXHQ8TGFiZWwgdGV4dFdyYXA9XFxcInRydWVcXFwiIGlkPVxcXCJwb3N0LW5hbWVcXFwiIGNsYXNzPVxcXCJuYW1lLWxhYmVsXFxcIiBbdGV4dF09XFxcIml0ZW0udXNlcm5hbWVcXFwiPjwvTGFiZWw+XFxyXFxuXFx0XFx0ICAgICAgICAgICAgICBcXHQ8TGFiZWwgdGV4dFdyYXA9XFxcInRydWVcXFwiIGlkPVxcXCJwb3N0LWluZm9cXFwiIGNsYXNzPVxcXCJpbmZvLWxhYmVsXFxcIiBbdGV4dF09XFxcIml0ZW0uaW5mb1xcXCI+PC9MYWJlbD5cXHJcXG5cXHRcXHQgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcclxcblxcdCAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXHJcXG5cXHRcXHRcXHRcXHQgIDxJbWFnZSBbc3JjXT1cXFwiaXRlbS5tYXBTb3VyY2VcXFwiIHN0cmV0Y2g9XFxcImFzcGVjdEZpdFxcXCIgY2xhc3M9XFxcInBvc3RpbmctbWFwXFxcIj48L0ltYWdlPlxcclxcblxcdCAgICAgICAgPC9TdGFja0xheW91dD5cXHJcXG5cXHQgICAgPC9uZy10ZW1wbGF0ZT5cXHJcXG5cXHQ8L0xpc3RWaWV3PlxcclxcbjwvUHVsbFRvUmVmcmVzaD5cXHJcXG5cXHJcXG48IS0tXFxyXFxuT3JpZ2luYWwgV2ViIHRlbXBsYXRlOlxcclxcblxcclxcbjxhcHAtbmF2aWdhdGlvbj48L2FwcC1uYXZpZ2F0aW9uPlxcclxcblxcclxcbjxkaXYgY2xhc3M9XFxcInJpZ2h0LWJhY2tncm91bmRcXFwiPlxcclxcblxcdDxkaXYgY2xhc3M9XFxcInVzZXItY2FyZC1yaWdodCBpbmZvXFxcIj5cXHJcXG5cXHRcXHQ8aW1nIHNyYz1cXFwic3JjL2ltZy9zYW1wbGVfcHJvZmlsZS5qcGdcXFwiIGFsdD1cXFwiUHJvZmlsZSBQaG90b1xcXCIgaWQ9XFxcInByb2ZpbGVfcGljXFxcIj5cXHJcXG5cXHRcXHQ8ZGl2IGlkPVxcXCJuYW1lX2luZm9cXFwiPlxcclxcblxcdFxcdFxcdDxoMyBpZD1cXFwidXNlcm5hbWVcXFwiPnt7dXNlci5uYW1lfX08L2gzPlxcclxcblxcdFxcdFxcdDxoMyBpZD1cXFwidXNlcl91bml2ZXJzaXR5XFxcIj5Vbml2ZXJzaXR5IG9mIFZpcmdpbmlhPC9oMz5cXHJcXG5cXHRcXHQ8L2Rpdj5cXHJcXG5cXHRcXHQ8ZGl2IGNsYXNzPVxcXCJ1c2VyU3RhdHNcXFwiPlxcclxcblxcdFxcdFxcdDxzcGFuIGlkPVxcXCJ1c2VyX3JpZGVzX2dpdmVuXFxcIiBjbGFzcz1cXFwidXNlckRhdGFcXFwiPlJpZGVzIEdpdmVuOiA8L3NwYW4+XFxyXFxuXFx0XFx0XFx0PHNwYW4gaWQ9XFxcIm51bV9yaWRlc19naXZlblxcXCI+PC9zcGFuPlxcclxcblxcdFxcdFxcdDxzcGFuIGlkPVxcXCJ1c2VyX3JpZGVzX3JlY2VpdmVkXFxcIiBjbGFzcz1cXFwidXNlckRhdGFcXFwiPlJpZGVzIFJlY2VpdmVkOiA8L3NwYW4+XFxyXFxuXFx0XFx0XFx0PHNwYW4gaWQ9XFxcIm51bV9yaWRlc19yZWNlaXZlZFxcXCI+PC9zcGFuPlxcclxcblxcdFxcdDwvZGl2PlxcclxcblxcdDwvZGl2PlxcclxcbjwvZGl2PlxcclxcbjxkaXYgaWQ9XFxcImhpc3RvcnlcXFwiIGNsYXNzPVxcXCJ0YWJjb250ZW50XFxcIj5cXHJcXG5cXHQ8aDMgYWxpZ249XFxcImNlbnRlclxcXCI+WW91ciBSaWRlczwvaDM+XFxyXFxuXFx0PGRpdiBpZD1cXFwiYmlnZmVlZFxcXCIgKHdpbmRvdzpyZXNpemUpPVxcXCJvblJlc2l6ZSgkZXZlbnQpXFxcIj48L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG4tLT5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVHJhbnNmZXJTZXJ2aWNlIH0gZnJvbSAnLi4vZGF0YXRyYW5zZmVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBQb3N0aW5nU2VydmljZSB9IGZyb20gJy4uL3Bvc3Rpbmcuc2VydmljZSc7XHJcbmltcG9ydCB7IFBvc3RpbmcgfSBmcm9tICcuLi9wb3N0aW5nLm1vZGVsJztcclxuaW1wb3J0IHsgRHluYW1pY0FkZFNlcnZpY2UgfSBmcm9tICcuLi9keW5hbWljLWFkZC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTG9naW5jaGVja1NlcnZpY2UgfSBmcm9tICcuLi9sb2dpbmNoZWNrLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlQXJyYXkgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS1hcnJheSc7XHJcbmltcG9ydCAqIGFzIGZpcmViYXNlIGZyb20gJ25hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2UnO1xyXG5pbXBvcnQgeyBMaXN0VmlldyB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvbGlzdC12aWV3JztcclxuaW1wb3J0IHsgSW1hZ2VTb3VyY2UsIGZyb21GaWxlLCBmcm9tUmVzb3VyY2UsIGZyb21CYXNlNjQsIGZyb21OYXRpdmVTb3VyY2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9pbWFnZS1zb3VyY2VcIjtcclxuaW1wb3J0IHsgRm9sZGVyLCBwYXRoLCBrbm93bkZvbGRlcnMgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9maWxlLXN5c3RlbVwiO1xyXG5pbXBvcnQgeyBDYWNoZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ltYWdlLWNhY2hlXCI7XHJcblxyXG5cclxuY2xhc3MgUG9zdEl0ZW0ge1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIHVzZXJuYW1lOiBTdHJpbmcsIHB1YmxpYyBpbmZvOiBzdHJpbmcsIHB1YmxpYyBwcm9maWxlU291cmNlOiBzdHJpbmcsIHB1YmxpYyBtYXBTb3VyY2U6IHN0cmluZykgeyB9XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLWhpc3RvcnknLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9oaXN0b3J5LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9oaXN0b3J5LmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSGlzdG9yeUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ2xpc3RWaWV3JywgeyBzdGF0aWM6IHRydWUgfSkgbHY6IEVsZW1lbnRSZWY7XHJcbiAgLy91c2VyID0gdGhpcy5sb2dpbmNoZWNrU2VydmljZS5nZXRVc2VyKCk7XHJcbiAgdXNlciA9ICcnO1xyXG4gIG5hbWUgPSBcIkFkYW0gWWVlXCI7XHJcbiAgYmxvY2tzID0gMDtcclxuICBwb3N0aW5ncyA9IG5ldyBPYnNlcnZhYmxlQXJyYXk8UG9zdEl0ZW0+KCk7XHJcbiAgcCA9IFtdO1xyXG4gIGlkcyA9IFtdO1xyXG4gIC8vIGNhY2hlID0gbmV3IENhY2hlKCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbG9naW5jaGVja1NlcnZpY2U6IExvZ2luY2hlY2tTZXJ2aWNlLCBwcml2YXRlIHRyYW5zZmVyU2VydmljZTogVHJhbnNmZXJTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHBvc3RpbmdTZXJ2aWNlOiBQb3N0aW5nU2VydmljZSwgcHJpdmF0ZSBhZGRTZXJ2aWNlOiBEeW5hbWljQWRkU2VydmljZSkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIFx0dGhpcy5sb2dpbmNoZWNrU2VydmljZS5sb2dpbkNoZWNrKCk7XHJcbiAgXHR0aGlzLnVzZXIgPSB0aGlzLmxvZ2luY2hlY2tTZXJ2aWNlLmdldFVzZXIoKVxyXG4gIFx0dGhpcy5sb2FkUG9zdGluZ3MoKTtcclxuICB9XHJcblxyXG4gIGxvYWRQb3N0aW5ncyhhcmdzPW51bGwpIHtcclxuICAgIHRoaXMucG9zdGluZ3Muc3BsaWNlKDApO1xyXG4gICAgdmFyIHBvc3RJZHMgPSBbXTtcclxuICAgIHZhciBwb3N0aW5nc0NvbGxlY3Rpb24gPSBmaXJlYmFzZS5maXJlc3RvcmUuY29sbGVjdGlvbigncG9zdGluZ3MnKTtcclxuICAgIHZhciB1c2Vyc0NvbGxlY3Rpb24gPSBmaXJlYmFzZS5maXJlc3RvcmUuY29sbGVjdGlvbigndXNlcnMnKS5kb2ModGhpcy51c2VyKTtcclxuICAgIHVzZXJzQ29sbGVjdGlvbi5nZXQoKS50aGVuKGRvYyA9PiB7XHJcbiAgICBcdHBvc3RJZHMgPSBkb2MuZGF0YSgpLnBvc3RzO1xyXG4gICAgXHRmb3IodmFyIGkgPSAwOyBpIDwgcG9zdElkcy5sZW5ndGg7IGkrKykge1xyXG4gICAgXHRcdHBvc3RpbmdzQ29sbGVjdGlvbi5kb2MocG9zdElkc1tpXSkuZ2V0KCkudGhlbihkb2MgPT4ge1xyXG4gICAgICAgICAgdGhpcy5jcmVhdGVQb3N0aW5nKGRvYy5kYXRhKCksIGRvYy5pZCk7XHJcbiAgICBcdFx0fSlcclxuICAgIFx0fVxyXG4gICAgXHRpZihhcmdzICE9IG51bGwpIHtcclxuXHQgICAgICAgIHZhciBwdWxsUmVmcmVzaCA9IGFyZ3Mub2JqZWN0O1xyXG5cdCAgICAgICAgcHVsbFJlZnJlc2gucmVmcmVzaGluZyA9IGZhbHNlO1xyXG5cdCAgICB9XHJcblx0ICAgIHZhciBsaXN0VmlldyA9IDxMaXN0Vmlldz4gdGhpcy5sdi5uYXRpdmVFbGVtZW50O1xyXG5cdCAgICBsaXN0Vmlldy5zY3JvbGxUb0luZGV4KHBvc3RJZHMubGVuZ3RoIC0gMSk7XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgY3JlYXRlUG9zdGluZyhkYXRhLCBpZCkge1xyXG4gICAgLy8gdGhpcy5jYWNoZS5wbGFjZWhvbGRlciA9IGZyb21GaWxlKFwifi9pbWcvZ3JheV9iYWNrZ3JvdW5kLmpwZ1wiKTtcclxuICAgIC8vIHRoaXMuY2FjaGUubWF4UmVxdWVzdHMgPSA1O1xyXG4gICAgbGV0IGluZm9fbGFiZWwgPSBcIlwiO1xyXG4gICAgaWYoZGF0YS5jYXBhY2l0eSAhPSBcIi0xXCIpXHJcbiAgICAgIGluZm9fbGFiZWwgPSBcIk9mZmVyaW5nIHJpZGUgbGVhdmluZyBcIiArIGRhdGEuZGF0ZSArIFwiIGZyb20gXCIgKyBkYXRhLnN0YXJ0QWRkcmVzcyArIFwiIHRvIFwiICsgZGF0YS5lbmRBZGRyZXNzICsgXCIgZm9yIFwiICsgZGF0YS5wcmljZTtcclxuICAgIGVsc2VcclxuICAgICAgaW5mb19sYWJlbCA9IFwiUmVxdWVzdGluZyByaWRlIGxlYXZpbmcgXCIgKyBkYXRhLmRhdGUgKyBcIiBmcm9tIFwiICsgZGF0YS5zdGFydEFkZHJlc3MgKyBcIiB0byBcIiArIGRhdGEuZW5kQWRkcmVzcztcclxuICAgIGNvbnN0IHVzZXJzQ29sbGVjdGlvbiA9IGZpcmViYXNlLmZpcmVzdG9yZS5jb2xsZWN0aW9uKCd1c2VycycpO1xyXG4gICAgdXNlcnNDb2xsZWN0aW9uLmRvYyhkYXRhLnVpZCkuZ2V0KCkudGhlbigoZG9jKSA9PiB7XHJcbiAgICAgIGlmKGRvYy5leGlzdHMpIHtcclxuICAgICAgICB2YXIgdXJsID0gZG9jLmRhdGEoKS5wcm9maWxlX3NvdXJjZTtcclxuICAgICAgICAvLyBpZih1cmwuc3Vic3RyaW5nKDAsIDI3KSA9PT0gJ2h0dHBzOi8vZ3JhcGguZmFjZWJvb2suY29tLycpXHJcbiAgICAgICAgLy8gICB1cmwgKz0gJz9oZWlnaHQ9MzAwJztcclxuICAgICAgICB0aGlzLnBvc3RpbmdzLnB1c2gobmV3IFBvc3RJdGVtKGRhdGEudXNlciwgaW5mb19sYWJlbCwgdXJsLCBkYXRhLm1hcF91cmwpKTtcclxuICAgICAgICB0aGlzLnAucHVzaChkYXRhKVxyXG4gICAgICAgIHRoaXMuaWRzLnB1c2goaWQpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICByZWZyZXNoTGlzdChhcmdzKSB7XHJcbiAgICB0aGlzLmxvYWRQb3N0aW5ncyhhcmdzKTtcclxuICB9XHJcblxyXG4gIC8vIGFkZENhY2hlKHVybCkge1xyXG4gIC8vICAgbGV0IGNhY2hlZEltYWdlU291cmNlO1xyXG4gIC8vICAgY29uc3QgbXlJbWFnZSA9IHRoaXMuY2FjaGUuZ2V0KHVybCk7XHJcbiAgLy8gICBpZiAobXlJbWFnZSkge1xyXG4gIC8vICAgICAgIC8vIElmIHByZXNlbnQgLS0gdXNlIGl0LlxyXG4gIC8vICAgICAgIGNhY2hlZEltYWdlU291cmNlID0gZnJvbU5hdGl2ZVNvdXJjZShteUltYWdlKTtcclxuICAvLyAgICAgICByZXR1cm4gY2FjaGVkSW1hZ2VTb3VyY2U7XHJcbiAgLy8gICB9IGVsc2Uge1xyXG4gIC8vICAgICAgIC8vIElmIG5vdCBwcmVzZW50IC0tIHJlcXVlc3QgaXRzIGRvd25sb2FkICsgcHV0IGl0IGluIHRoZSBjYWNoZS5cclxuICAvLyAgICAgICB0aGlzLmNhY2hlLnB1c2goe1xyXG4gIC8vICAgICAgICAgICBrZXk6IHVybCxcclxuICAvLyAgICAgICAgICAgdXJsOiB1cmwsXHJcbiAgLy8gICAgICAgICAgIGNvbXBsZXRlZDogKGltYWdlLCBrZXkpID0+IHtcclxuICAvLyAgICAgICAgICAgICAgIGlmICh1cmwgPT09IGtleSkge1xyXG4gIC8vICAgICAgICAgICAgICAgICAgIGNhY2hlZEltYWdlU291cmNlID0gZnJvbU5hdGl2ZVNvdXJjZShpbWFnZSk7XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgcmV0dXJuIGNhY2hlZEltYWdlU291cmNlO1xyXG4gIC8vICAgICAgICAgICAgICAgfVxyXG4gIC8vICAgICAgICAgICB9XHJcbiAgLy8gICAgICAgfSk7XHJcbiAgLy8gICB9XHJcbiAgLy8gfVxyXG5cclxuICBvbkl0ZW1UYXAoYXJncykge1xyXG4gICAgdGhpcy50cmFuc2ZlclNlcnZpY2Uuc2V0RGF0YSh7XHJcbiAgICAgIHBvc3RJbmZvOiB7aWQ6IHRoaXMuaWRzW2FyZ3MuaW5kZXhdLCBkYXRhOiB0aGlzLnBbYXJncy5pbmRleF19LFxyXG4gICAgICBwb3N0SXRlbTogdGhpcy5wb3N0aW5ncy5nZXRJdGVtKGFyZ3MuaW5kZXgpXHJcbiAgICB9KVxyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydwb3N0aW5nLWluZm8nXSlcclxuICB9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbYXBwSG9tZV0nXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVEaXJlY3RpdmUge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gXCIvKlxcclxcbkFkZCB5b3VyIE5hdGl2ZVNjcmlwdCBzcGVjaWZpYyBzdHlsZXMgaGVyZS5cXHJcXG5UbyBsZWFybiBtb3JlIGFib3V0IHN0eWxpbmcgaW4gTmF0aXZlU2NyaXB0IHNlZTpcXHJcXG5odHRwczovL2RvY3MubmF0aXZlc2NyaXB0Lm9yZy9hbmd1bGFyL3VpL3N0eWxpbmdcXHJcXG4qL1xcclxcbi5yZWZyZXNoIHtcXHJcXG5cXHRjb2xvcjogI2FjMDBlNjtcXHJcXG59XFxyXFxuXFxyXFxuLmFjdGlvbmJhciB7XFxyXFxuXFx0Zm9udC1zaXplOiAyMjtcXHJcXG5cXHRmb250LXdlaWdodDogNzAwO1xcclxcblxcdHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuXFx0Y29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLWJ0bi1jb250YWluZXIge1xcclxcblxcdC8qcG9zaXRpb246IGFic29sdXRlOyovXFxyXFxuXFx0Lypib3R0b206IDA7Ki9cXHJcXG5cXHQvKnJpZ2h0OiAwOyovXFxyXFxuXFx0dmVydGljYWwtYWxpZ246IGJvdHRvbTtcXHJcXG5cXHR6LWluZGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4uZmFiLWJ1dHRvbiB7XFxyXFxuICBoZWlnaHQ6IDU2O1xcclxcbiAgd2lkdGg6IDU2O1xcclxcbiAgbWFyZ2luOiAxNTtcXHJcXG4gIC8qbWFyZ2luLWJvdHRvbTogNjQ7Ki9cXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhYzAwZTY7XFxyXFxuICAvKmZsb2F0OiByaWdodDsqL1xcclxcbiAgaG9yaXpvbnRhbC1hbGlnbjogcmlnaHQ7XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xcclxcbn1cXHJcXG5cXHJcXG5MYWJlbCB7XFxyXFxuXFx0dGV4dC1hbGlnbjogbGVmdDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hbWUtbGFiZWwge1xcclxcblxcdG1hcmdpbi10b3A6IDE2O1xcclxcblxcdG1hcmdpbi1sZWZ0OiAxODtcXHJcXG5cXHRjb2xvcjogYmxhY2s7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDcwMDtcXHJcXG5cXHRmb250LXNpemU6IDE3O1xcclxcbn1cXHJcXG5cXHJcXG4uaW5mby1sYWJlbCB7XFxyXFxuXFx0bWFyZ2luLXRvcDogNDtcXHJcXG5cXHRtYXJnaW4tbGVmdDogMTg7XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTogMTY7XFxyXFxuXFx0Y29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9zdCB7XFxyXFxuXFx0Lypib3JkZXItYm90dG9tLXdpZHRoOiAxOyovXFxyXFxuXFx0Ym9yZGVyLWNvbG9yOiAjZjFmMWYxO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9zdDpoaWdobGlnaHRlZCB7XFxyXFxuXFx0LypiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxOyovXFxyXFxufVxcclxcblxcclxcbi5wb3N0aW5nLW1hcCB7XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTogMTY7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMTA7XFxyXFxuXFx0aGVpZ2h0OiAyMjA7XFxyXFxuXFx0d2lkdGg6IDM0MDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2ZpbGUtcGljdHVyZSB7XFxyXFxuXFx0aGVpZ2h0OiA1MDtcXHJcXG5cXHR3aWR0aDogNTA7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMTAwJTtcXHJcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcclxcblxcdG1hcmdpbi1sZWZ0OiAxNjtcXHJcXG5cXHRtYXJnaW4tdG9wOiAyMDtcXHJcXG59XFxyXFxuXFxyXFxuLmFjdGl2aXR5LWluZGljYXRvciB7XFxyXFxuXFx0Y29sb3I6ICNhYzAwZTY7XFxyXFxufVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjwhLS0gPEFjdGlvbkJhciB0aXRsZT1cXFwiSG9tZVxcXCIgY2xhc3M9XFxcImFjdGlvbmJhclxcXCI+XFxyXFxuXFx0PE5hdmlnYXRpb25CdXR0b24gaW9zOnZpc2liaWxpdHk9XFxcImNvbGxhcHNlZFxcXCIgaWNvbj1cXFwifi9pbWcvbWVudS1pY29uLnBuZ1xcXCIgKHRhcCk9XFxcInNob3dTaWRlRHJhd2VyKClcXFwiID48L05hdmlnYXRpb25CdXR0b24+XFxyXFxuPEFjdGlvbkl0ZW0gYW5kcm9pZDp2aXNpYmlsaXR5PVxcXCJjb2xsYXBzZWRcXFwiIGljb249XFxcIn4vaW1nL21lbnUtaWNvbi5wbmdcXFwiIGlvcy5wb3NpdGlvbj1cXFwibGVmdFxcXCIgKHRhcCk9XFxcInNob3dTaWRlRHJhd2VyKClcXFwiID48L0FjdGlvbkl0ZW0+XFxyXFxuPC9BY3Rpb25CYXI+IC0tPlxcclxcblxcclxcbiAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImFkZC1idG4tY29udGFpbmVyXFxcIj5cXHJcXG5cXHRcXHQ8RkFCICh0YXApPVxcXCJzaG93TW9kYWwoKVxcXCIgaWNvbj1cXFwicmVzOi8vaWNfYWRkX3doaXRlXzN4XFxcIiByaXBwbGVDb2xvcj1cXFwiI2YxZjFmMVxcXCIgY2xhc3M9XFxcImZhYi1idXR0b25cXFwiPjwvRkFCPlxcclxcblxcdDwvU3RhY2tMYXlvdXQ+XFxyXFxuXFxyXFxuXFx0PFB1bGxUb1JlZnJlc2ggKHJlZnJlc2gpPVxcXCJyZWZyZXNoTGlzdCgkZXZlbnQpXFxcIiBjbGFzcz1cXFwicmVmcmVzaFxcXCI+XFxyXFxuXFx0XFx0PExpc3RWaWV3IFtpdGVtc109XFxcInBvc3RpbmdzXFxcIiAoaXRlbVRhcCk9XFxcIm9uSXRlbVRhcCgkZXZlbnQpXFxcIiAjbGlzdFZpZXcgaWQ9XFxcImxpc3RWaWV3XFxcIj5cXHJcXG5cXHRcXHQgICAgPG5nLXRlbXBsYXRlIGxldC1pdGVtPVxcXCJpdGVtXFxcIiBsZXQtaT1cXFwiaW5kZXhcXFwiIGxldC1vZGQ9XFxcIm9kZFxcXCIgbGV0LWV2ZW49XFxcImV2ZW5cXFwiPlxcclxcblxcdFxcdCAgICAgICAgPFN0YWNrTGF5b3V0IFtjbGFzcy5vZGRdPVxcXCJvZGRcXFwiIFtjbGFzcy5ldmVuXT1cXFwiZXZlblxcXCIgY2xhc3M9XFxcInBvc3RcXFwiPlxcclxcblxcdFxcdCAgICAgICAgXFx0ICA8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XFxcImhvcml6b250YWxcXFwiPlxcclxcblxcdFxcdCAgICAgICAgXFx0ICBcXHQ8SW1hZ2UgW3NyY109XFxcIml0ZW0ucHJvZmlsZVNvdXJjZVxcXCIgY2xhc3M9XFxcInByb2ZpbGUtcGljdHVyZVxcXCIgc3RyZXRjaD1cXFwiYXNwZWN0Rml0XFxcIj48L0ltYWdlPlxcclxcblxcdFxcdCAgICAgICAgXFx0ICBcXHQ8U3RhY2tMYXlvdXQ+XFxyXFxuXFx0XFx0XFx0ICAgICAgICAgICAgICBcXHQ8TGFiZWwgdGV4dFdyYXA9XFxcInRydWVcXFwiIGlkPVxcXCJwb3N0LW5hbWVcXFwiIGNsYXNzPVxcXCJuYW1lLWxhYmVsXFxcIiBbdGV4dF09XFxcIml0ZW0udXNlcm5hbWVcXFwiPjwvTGFiZWw+XFxyXFxuXFx0XFx0XFx0ICAgICAgICAgICAgICBcXHQ8TGFiZWwgdGV4dFdyYXA9XFxcInRydWVcXFwiIGlkPVxcXCJwb3N0LWluZm9cXFwiIGNsYXNzPVxcXCJpbmZvLWxhYmVsXFxcIiBbdGV4dF09XFxcIml0ZW0uaW5mb1xcXCI+PC9MYWJlbD5cXHJcXG5cXHRcXHRcXHQgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcclxcblxcdFxcdCAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXHJcXG5cXHRcXHRcXHRcXHRcXHQgIDxJbWFnZSBbc3JjXT1cXFwiaXRlbS5tYXBTb3VyY2VcXFwiIHN0cmV0Y2g9XFxcImFzcGVjdEZpdFxcXCIgY2xhc3M9XFxcInBvc3RpbmctbWFwXFxcIiAodGFwKT1cXFwidG9WaWV3SW1hZ2UoaXRlbS5tYXBTb3VyY2UpXFxcIj48L0ltYWdlPlxcclxcblxcdFxcdCAgICAgICAgPC9TdGFja0xheW91dD5cXHJcXG5cXHRcXHQgICAgPC9uZy10ZW1wbGF0ZT5cXHJcXG5cXHRcXHQ8L0xpc3RWaWV3PlxcclxcblxcdDwvUHVsbFRvUmVmcmVzaD5cXHJcXG5cXHQ8QWN0aXZpdHlJbmRpY2F0b3IgI2FjdGl2aXR5SW5kaWNhdG9yIGJ1c3k9XFxcInRydWVcXFwiIHdpZHRoPVxcXCI0MFxcXCIgaGVpZ2h0PVxcXCI0MFxcXCIgY2xhc3M9XFxcImFjdGl2aXR5LWluZGljYXRvclxcXCI+XFxyXFxuICA8L0FjdGl2aXR5SW5kaWNhdG9yPlwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDb250YWluZXJSZWYsIFZpZXdSZWYsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlQXJyYXkgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS1hcnJheSc7XHJcblxyXG5pbXBvcnQgeyBUcmFuc2ZlclNlcnZpY2UgfSBmcm9tICcuLi9kYXRhdHJhbnNmZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IER5bmFtaWNBZGRTZXJ2aWNlIH0gZnJvbSAnLi4vZHluYW1pYy1hZGQuc2VydmljZS50bnMnO1xyXG5pbXBvcnQge1BhZ2V9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2VcIjtcclxuaW1wb3J0IHsgZ2V0RnJhbWVCeUlkIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWVcIjtcclxuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tICcuLi91c2VyLnNlcnZpY2UudG5zJztcclxuaW1wb3J0IHsgUG9zdGluZ1NlcnZpY2UgfSBmcm9tICcuLi9wb3N0aW5nLnNlcnZpY2UudG5zJztcclxuaW1wb3J0IHsgTW9kYWxEaWFsb2dTZXJ2aWNlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2RpcmVjdGl2ZXMvZGlhbG9nc1wiO1xyXG5pbXBvcnQgeyBHb29nbGVNYXBzU2VydmljZSB9IGZyb20gJy4uL2dvb2dsZS1tYXBzLnNlcnZpY2UnO1xyXG5pbXBvcnQgKiBhcyBhcHBsaWNhdGlvbiBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiO1xyXG5pbXBvcnQgeyBBY3Rpdml0eUluZGljYXRvciB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvYWN0aXZpdHktaW5kaWNhdG9yJztcclxuaW1wb3J0IHsgQW5kcm9pZEFwcGxpY2F0aW9uLCBBbmRyb2lkQWN0aXZpdHlCYWNrUHJlc3NlZEV2ZW50RGF0YSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCI7XHJcbmltcG9ydCB7IGlzQW5kcm9pZCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtXCI7XHJcbmltcG9ydCAqIGFzIGZpcmViYXNlIGZyb20gJ25hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2UnO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgRGF0ZVBpcGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuaW1wb3J0IHsgU3RhY2tMYXlvdXQgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9sYXlvdXRzL3N0YWNrLWxheW91dFwiO1xyXG5pbXBvcnQgeyBMaXN0VmlldyB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xpc3Qtdmlld1wiO1xyXG5cclxuaW1wb3J0IHsgUG9zdGluZyB9IGZyb20gJy4uL3Bvc3RpbmcubW9kZWwnO1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vdXNlci5tb2RlbCc7XHJcblxyXG5pbXBvcnQgeyBBZGRNb2RhbENvbXBvbmVudCB9IGZyb20gJy4uL2FkZC1tb2RhbC9hZGQtbW9kYWwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ2FjaGUgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9pbWFnZS1jYWNoZVwiO1xyXG5pbXBvcnQgeyBJbWFnZVNvdXJjZSwgZnJvbUZpbGUsIGZyb21SZXNvdXJjZSwgZnJvbUJhc2U2NCwgZnJvbU5hdGl2ZVNvdXJjZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2ltYWdlLXNvdXJjZVwiO1xyXG5pbXBvcnQgeyBGb2xkZXIsIHBhdGgsIGtub3duRm9sZGVycyB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2ZpbGUtc3lzdGVtXCI7XHJcblxyXG5jbGFzcyBQb3N0SXRlbSB7XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgdXNlcm5hbWU6IFN0cmluZywgcHVibGljIGluZm86IHN0cmluZywgcHVibGljIHByb2ZpbGVTb3VyY2U6IHN0cmluZywgcHVibGljIG1hcFNvdXJjZTogc3RyaW5nKSB7IH1cclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtaG9tZScsXHJcbiAgcHJvdmlkZXJzOiBbRHluYW1pY0FkZFNlcnZpY2VdLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9ob21lLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9ob21lLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBibG9ja3MgPSAxO1xyXG4gIHAgOiBQb3N0aW5nW107XHJcbiAgcG9zdGluZ3MgPSBuZXcgT2JzZXJ2YWJsZUFycmF5PFBvc3RJdGVtPigpO1xyXG4gIC8vIGNhY2hlID0gbmV3IENhY2hlKCk7XHJcbiAgXHJcblxyXG4gIEBWaWV3Q2hpbGQoJ2xpc3RWaWV3JywgeyBzdGF0aWM6IHRydWUgfSkgbHY6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgnYWN0aXZpdHlJbmRpY2F0b3InLCB7IHN0YXRpYzogdHJ1ZSB9KSBhaTogRWxlbWVudFJlZjtcclxuICBcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0cmFuc2ZlclNlcnZpY2U6IFRyYW5zZmVyU2VydmljZSwgcHJpdmF0ZSBhZGRTZXJ2aWNlOiBEeW5hbWljQWRkU2VydmljZSwgcHJpdmF0ZSBwYWdlOiBQYWdlLCBcclxuICBcdHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlLCBwcml2YXRlIHBvc3RpbmdTZXJ2aWNlOiBQb3N0aW5nU2VydmljZSwgcHJpdmF0ZSBtb2RhbDogTW9kYWxEaWFsb2dTZXJ2aWNlLCBwcml2YXRlIHZjUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgcHJpdmF0ZSBtYXBTZXJ2aWNlOiBHb29nbGVNYXBzU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMsIHByaXZhdGUgZGF0ZVBpcGU6IERhdGVQaXBlKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgXHR0aGlzLmxvYWRQb3N0aW5ncygpO1xyXG4gIH1cclxuXHJcbiAgb25CYWNrQnV0dG9uVGFwKCkge1xyXG4gICAgYXBwbGljYXRpb24uYW5kcm9pZC5mb3JlZ3JvdW5kQWN0aXZpdHkuZmluaXNoKCk7XHJcbiAgfVxyXG5cclxuICBzaG93TW9kYWwoKSB7XHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIGNvbnRleHQ6IHt9LFxyXG4gICAgICAgICAgICBmdWxsc2NyZWVuOiB0cnVlLFxyXG4gICAgICAgICAgICB2aWV3Q29udGFpbmVyUmVmOiB0aGlzLnZjUmVmXHJcbiAgICAgICAgICAgIC8vIGFuaW1hdGVkOiB0cnVlLFxyXG4gICAgICAgICAgICAvLyB0cmFuc2l0aW9uOiB7IG5hbWU6IFwic2xpZGVUb3BcIiB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLm1vZGFsLnNob3dNb2RhbChBZGRNb2RhbENvbXBvbmVudCwgb3B0aW9ucykudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgICAgICBpZihyZXMgPT0gJ3Bvc3RlZCcpXHJcbiAgICAgICAgICAgICAgdGhpcy5sb2FkUG9zdGluZ3MoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICBzaG93U2lkZURyYXdlcigpIHtcclxuICBcdC8vY29uc3QgZHJhd2VyID0gPFJhZFNpZGVEcmF3ZXI+dGhpcy5zZC5uYXRpdmVWaWV3O1xyXG4gIFx0Ly9jb25zb2xlLmRpcihkcmF3ZXIpO1xyXG4gIFx0Ly9jb25zb2xlLmRpcih0aGlzLnBhZ2UpO1xyXG4gIFx0Ly8gZHJhd2VyLnNob3dEcmF3ZXIoKTtcclxuXHJcbiAgfVxyXG5cclxuICBsb2FkUG9zdGluZ3MoYXJncz1udWxsKSB7XHJcbiAgICAvLyBsZXQgbGF5b3V0ID0gPFN0YWNrTGF5b3V0PnRoaXMucGFnZS5nZXRWaWV3QnlJZCgnZmVlZCcpO1xyXG4gICAgLy8gbGF5b3V0LnJlbW92ZUNoaWxkcmVuKCk7XHJcbiAgICAvLyB0aGlzLmNhY2hlLnBsYWNlaG9sZGVyID0gZnJvbUZpbGUoXCJ+L2ltZy9ncmF5X2JhY2tncm91bmQuanBnXCIpO1xyXG4gICAgLy8gdGhpcy5jYWNoZS5tYXhSZXF1ZXN0cyA9IDU7XHJcblxyXG4gICAgdGhpcy5wb3N0aW5ncy5zcGxpY2UoMCk7XHJcbiAgICBsZXQgYWN0aXZpdHlJbmRpY2F0b3IgPSA8QWN0aXZpdHlJbmRpY2F0b3I+IHRoaXMuYWkubmF0aXZlRWxlbWVudDtcclxuICAgIGFjdGl2aXR5SW5kaWNhdG9yLmJ1c3kgPSB0cnVlO1xyXG5cclxuICAgIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcclxuXHJcbiAgICB2YXIgcG9zdHMgPSBbXTtcclxuICAgIHZhciBwb3N0aW5nc0NvbGxlY3Rpb24gPSBmaXJlYmFzZS5maXJlc3RvcmUuY29sbGVjdGlvbigncG9zdGluZ3MnKTtcclxuICAgIGNvbnN0IHF1ZXJ5ID0gcG9zdGluZ3NDb2xsZWN0aW9uLndoZXJlKCdmb3JtYXR0ZWREYXRlJywgJz49JywgdGhpcy5kYXRlUGlwZS50cmFuc2Zvcm0oY3VycmVudERhdGUsICd5eXl5LU1NLWRkJykpXHJcbiAgICBxdWVyeS5vcmRlckJ5KCdmb3JtYXR0ZWREYXRlJywgJ2FzYycpLmdldCgpLnRoZW4ocXVlcnlTbmFwc2hvdCA9PiB7XHJcbiAgICAgIHF1ZXJ5U25hcHNob3QuZm9yRWFjaChkb2MgPT4ge1xyXG4gICAgICAgIHBvc3RzLnB1c2goe1xyXG4gICAgICAgICAgaWQ6IGRvYy5pZCxcclxuICAgICAgICAgIGRhdGE6IGRvYy5kYXRhKClcclxuICAgICAgICB9KVxyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5wID0gcG9zdHM7XHJcbiAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBwb3N0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHRoaXMucG9zdGluZ3MucHVzaChuZXcgUG9zdEl0ZW0ocG9zdHNbaV0udXNlciwgJycsICcnLCAnfi9pbWcvZ3JheV9iYWNrZ3JvdW5kLmpwZycpKTtcclxuICAgICAgICB0aGlzLmNyZWF0ZVBvc3RpbmcocG9zdHNbaV0uZGF0YSwgaSk7XHJcbiAgICAgIH1cclxuICAgICAgYWN0aXZpdHlJbmRpY2F0b3IuYnVzeSA9IGZhbHNlO1xyXG4gICAgICBpZihhcmdzICE9IG51bGwpXHJcbiAgICAgIHtcclxuICAgICAgICB2YXIgcHVsbFJlZnJlc2ggPSBhcmdzLm9iamVjdDtcclxuICAgICAgICBwdWxsUmVmcmVzaC5yZWZyZXNoaW5nID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICB9XHJcblxyXG4gLy8gIGNyZWF0ZVBvc3RpbmcoaWQsIHVzZXIsIHN0YXJ0YWRyLCBlbmRhZHIsIGRhdGUsIGNvc3QsIGNhcGFjaXR5LCBjb21tZW50cykge1xyXG5cdC8vIFx0dGhpcy50cmFuc2ZlclNlcnZpY2Uuc2V0RGF0YShbe1wiaW5kZXhcIjogdGhpcy5ibG9ja3MsIFwiaWRcIjogaWQsIFwidXNlclwiOiB1c2VyLCBcInN0YXJ0YWRyXCI6IHN0YXJ0YWRyLCBcImVuZGFkclwiOiBlbmRhZHIsIFwiZGF0ZVwiOiBkYXRlLCBcImNvc3RcIjogY29zdCwgXCJjYXBhY2l0eVwiOiBjYXBhY2l0eSwgXCJjb21tZW50c1wiOiBjb21tZW50cywgXCJidXR0b25UeXBlXCI6IFwiQ29ubmVjdFwifV0pO1xyXG5cdC8vIFx0dGhpcy5hZGRTZXJ2aWNlLmFwcGVuZENvbXBvbmVudFRvQm9keSh0aGlzLnBhZ2UuZ2V0Vmlld0J5SWQoJ2ZlZWQnKSk7XHJcblx0Ly8gICB0aGlzLmJsb2NrcysrO1xyXG5cdC8vIH1cclxuXHJcbiAgY3JlYXRlUG9zdGluZyhkYXRhLCBpOiBudW1iZXIpIHtcclxuICAgIGxldCBpbmZvX2xhYmVsID0gXCJcIjtcclxuICAgIC8vIHRoaXMuY3JlYXRlUG9zdGluZyh0aGlzLnBbaV0uX2lkLCB0aGlzLnBbaV0udXNlciwgdGhpcy5wW2ldLnN0YXJ0YWRyLCB0aGlzLnBbaV0uZW5kYWRyLCB0aGlzLnBbaV0uZGF0ZSwgdGhpcy5wW2ldLmNvc3QsIHRoaXMucFtpXS5jYXBhY2l0eSwgdGhpcy5wW2ldLmNvbW1lbnRzKTtcclxuICAgIGlmKGRhdGEuY2FwYWNpdHkgIT0gXCItMVwiKVxyXG4gICAgICBpbmZvX2xhYmVsID0gXCJPZmZlcmluZyByaWRlIGxlYXZpbmcgXCIgKyBkYXRhLmRhdGUgKyBcIiBmcm9tIFwiICsgZGF0YS5zdGFydEFkZHJlc3MgKyBcIiB0byBcIiArIGRhdGEuZW5kQWRkcmVzcyArIFwiIGZvciBcIiArIGRhdGEucHJpY2U7XHJcbiAgICBlbHNlXHJcbiAgICAgIGluZm9fbGFiZWwgPSBcIlJlcXVlc3RpbmcgcmlkZSBsZWF2aW5nIFwiICsgZGF0YS5kYXRlICsgXCIgZnJvbSBcIiArIGRhdGEuc3RhcnRBZGRyZXNzICsgXCIgdG8gXCIgKyBkYXRhLmVuZEFkZHJlc3M7XHJcbiAgICBjb25zdCB1c2Vyc0NvbGxlY3Rpb24gPSBmaXJlYmFzZS5maXJlc3RvcmUuY29sbGVjdGlvbigndXNlcnMnKTtcclxuICAgIHVzZXJzQ29sbGVjdGlvbi5kb2MoZGF0YS51aWQpLmdldCgpLnRoZW4oKGRvYykgPT4ge1xyXG4gICAgICBpZihkb2MuZXhpc3RzKSB7XHJcbiAgICAgICAgdmFyIHVybCA9IGRvYy5kYXRhKCkucHJvZmlsZV9zb3VyY2U7XHJcbiAgICAgICAgLy8gaWYodXJsLnN1YnN0cmluZygwLCAyNykgPT09ICdodHRwczovL2dyYXBoLmZhY2Vib29rLmNvbS8nKVxyXG4gICAgICAgIC8vICAgdXJsICs9ICc/aGVpZ2h0PTMwMCc7XHJcbiAgICAgICAgLy8gdmFyIG1hcFVybCA9IHRoaXMubWFwU2VydmljZS5nZXRTdGF0aWNNYXAoZGF0YS5zdGFydEFkZHJlc3MgKyBcIiBcIiArIGRhdGEuc3RhcnRGb3JtYXR0ZWQsIGRhdGEuZW5kQWRkcmVzcyArIFwiIFwiICsgZGF0YS5lbmRGb3JtYXR0ZWQpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKG1hcFVybClcclxuICAgICAgICAvLyB0aGlzLmFkZENhY2hlKHVybCwgJ3BmcCcsIGRhdGEudXNlciwgaW5mb19sYWJlbCwgdXJsLCBkYXRhLm1hcF91cmwsIGkpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIC8vICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICAgIC8vICAgdGhpcy5hZGRDYWNoZShkYXRhLm1hcF91cmwsICdtYXAnLCBkYXRhLnVzZXIsIGluZm9fbGFiZWwsIHVybCwgZGF0YS5tYXBfdXJsLCBpKS50aGVuKChyZXMpID0+e1xyXG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgLy8gICB9KVxyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgICAgIHRoaXMucG9zdGluZ3Muc2V0SXRlbShpLCBuZXcgUG9zdEl0ZW0oZGF0YS51c2VyLCBpbmZvX2xhYmVsLCB1cmwsIGRhdGEubWFwX3VybCkpO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgLy8gYWRkQ2FjaGUodXJsLCBpbWdfdHlwZSwgdXNlciwgaW5mbywgcGZwX3VybCwgbWFwX3VybCwgaSkge1xyXG4gIC8vICAgcmV0dXJuIG5ldyBQcm9taXNlPGFueT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gIC8vICAgICBsZXQgY2FjaGVkSW1hZ2VTb3VyY2U7XHJcbiAgLy8gICAgIGNvbnN0IG15SW1hZ2UgPSB0aGlzLmNhY2hlLmdldCh1cmwpO1xyXG4gIC8vICAgICBpZiAobXlJbWFnZSkge1xyXG4gIC8vICAgICAgIC8vIElmIHByZXNlbnQgLS0gdXNlIGl0LlxyXG4gIC8vICAgICAgIGNhY2hlZEltYWdlU291cmNlID0gZnJvbU5hdGl2ZVNvdXJjZShteUltYWdlKTtcclxuICAvLyAgICAgICBjb25zb2xlLmxvZyhteUltYWdlKVxyXG4gIC8vICAgICAgIGlmKGltZ190eXBlID09PSAncGZwJylcclxuICAvLyAgICAgICAgIHRoaXMucG9zdGluZ3Muc2V0SXRlbShpLCBuZXcgUG9zdEl0ZW0odXNlciwgaW5mbywgY2FjaGVkSW1hZ2VTb3VyY2UsIG1hcF91cmwpKTtcclxuICAvLyAgICAgICBlbHNlIGlmIChpbWdfdHlwZSA9PT0gJ21hcCcpXHJcbiAgLy8gICAgICAgICB0aGlzLnBvc3RpbmdzLnNldEl0ZW0oaSwgbmV3IFBvc3RJdGVtKHVzZXIsIGluZm8sIHRoaXMucG9zdGluZ3MuZ2V0SXRlbShpKS5wcm9maWxlU291cmNlLCBjYWNoZWRJbWFnZVNvdXJjZSkpO1xyXG4gIC8vICAgICAgIHJlc29sdmUoe21lc3NhZ2U6ICdSZXRyaWV2ZWQgZnJvbSBjYWNoZScsIGNhY2hlVVJMOiBjYWNoZWRJbWFnZVNvdXJjZX0pO1xyXG4gIC8vICAgICB9IFxyXG4gIC8vICAgICBlbHNlIHtcclxuICAvLyAgICAgICAvLyBJZiBub3QgcHJlc2VudCAtLSByZXF1ZXN0IGl0cyBkb3dubG9hZCArIHB1dCBpdCBpbiB0aGUgY2FjaGUuXHJcbiAgLy8gICAgICAgdGhpcy5jYWNoZS5wdXNoKHtcclxuICAvLyAgICAgICAgICAga2V5OiB1cmwsXHJcbiAgLy8gICAgICAgICAgIHVybDogdXJsLFxyXG4gIC8vICAgICAgICAgICBjb21wbGV0ZWQ6IChpbWFnZSwga2V5KSA9PiB7XHJcbiAgLy8gICAgICAgICAgICAgICBpZiAodXJsID09PSBrZXkpIHtcclxuICAvLyAgICAgICAgICAgICAgICAgICBjYWNoZWRJbWFnZVNvdXJjZSA9IGZyb21OYXRpdmVTb3VyY2UoaW1hZ2UpO1xyXG4gIC8vICAgICAgICAgICAgICAgICAgIGlmKGltZ190eXBlID09PSAncGZwJylcclxuICAvLyAgICAgICAgICAgICAgICAgICAgIHRoaXMucG9zdGluZ3Muc2V0SXRlbShpLCBuZXcgUG9zdEl0ZW0odXNlciwgaW5mbywgY2FjaGVkSW1hZ2VTb3VyY2UsIG1hcF91cmwpKTtcclxuICAvLyAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChpbWdfdHlwZSA9PT0gJ21hcCcpXHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc3RpbmdzLnNldEl0ZW0oaSwgbmV3IFBvc3RJdGVtKHVzZXIsIGluZm8sIHRoaXMucG9zdGluZ3MuZ2V0SXRlbShpKS5wcm9maWxlU291cmNlLCBjYWNoZWRJbWFnZVNvdXJjZSkpO1xyXG4gIC8vICAgICAgICAgICAgICAgfVxyXG4gIC8vICAgICAgICAgICAgICAgcmVzb2x2ZSh7bWVzc2FnZTogJ0FkZGVkIHRvIGNhY2hlJywgY2FjaGVVUkw6IGNhY2hlZEltYWdlU291cmNlfSk7XHJcbiAgLy8gICAgICAgICAgIH1cclxuICAvLyAgICAgICB9KTtcclxuICAvLyAgICAgfVxyXG4gIC8vICAgfSlcclxuICAvLyB9XHJcblxyXG4gIHJlZnJlc2hMaXN0KGFyZ3MpIHtcclxuICAgIHRoaXMubG9hZFBvc3RpbmdzKGFyZ3MpO1xyXG4gIH1cclxuXHJcbiAgdG9WaWV3SW1hZ2Uoc3JjKSB7XHJcbiAgICB0aGlzLnRyYW5zZmVyU2VydmljZS5zZXREYXRhKHNyYyk7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ3ZpZXctaW1hZ2UnXSk7XHJcbiAgfVxyXG5cclxuICBvbkl0ZW1UYXAoYXJncykge1xyXG4gICAgY29uc29sZS5sb2codGhpcy5wb3N0aW5ncy5nZXRJdGVtKGFyZ3MuaW5kZXgpKTtcclxuICAgIHRoaXMudHJhbnNmZXJTZXJ2aWNlLnNldERhdGEoe1xyXG4gICAgICBwb3N0SW5mbzogdGhpcy5wW2FyZ3MuaW5kZXhdLFxyXG4gICAgICBwb3N0SXRlbTogdGhpcy5wb3N0aW5ncy5nZXRJdGVtKGFyZ3MuaW5kZXgpXHJcbiAgICB9KVxyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydwb3N0aW5nLWluZm8nXSlcclxuICB9XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi8qIEFkZCBtb2JpbGUgc3R5bGVzIGZvciB0aGUgY29tcG9uZW50IGhlcmUuICAqL1xcclxcbi5jbG9zZSB7XFxyXFxuXFx0bWFyZ2luOiAxMDtcXHJcXG5cXHRmb250LXNpemU6IDI4O1xcclxcblxcdHdpZHRoOiA0ODtcXHJcXG5cXHRoZWlnaHQ6IDQ4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2UtYnV0dG9uLWNvbnRhaW5lciB7XFxyXFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdGxlZnQ6IDA7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXItbGFiZWwtMiB7XFxyXFxuXFx0Zm9udC1zaXplOiAxNjtcXHJcXG5cXHRtYXJnaW4tdG9wOiAxMjtcXHJcXG5cXHQvKm1hcmdpbi1ib3R0b206IDEyOyovXFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDcwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlci1sYWJlbC0zIHtcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiAxMjtcXHJcXG59XFxyXFxuXFxyXFxuLnBvc3Qge1xcclxcblxcdGJvcmRlci1jb2xvcjogI2YxZjFmMTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvc3Q6aGlnaGxpZ2h0ZWQge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XFxyXFxufVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxTY3JvbGxWaWV3PlxcclxcblxcdDxTdGFja0xheW91dCBoZWlnaHQ9XFxcIjEwMCVcXFwiPlxcclxcblxcdFxcdDxTdGFja0xheW91dCBjbGFzcz1cXFwiY2xvc2UtYnV0dG9uLWNvbnRhaW5lclxcXCIgb3JpZW50YXRpb249XFxcImhvcml6b250YWxcXFwiPlxcclxcblxcdFxcdFxcdDxMYWJlbCB0ZXh0PVxcXCImdGltZXM7XFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiICh0YXApPVxcXCJjbG9zZSgpXFxcIj48L0xhYmVsPlxcclxcblxcdFxcdDwvU3RhY2tMYXlvdXQ+XFxyXFxuXFxyXFxuXFx0XFx0PFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJpbnB1dC1maWVsZFxcXCI+XFxyXFxuPCEtLSBcXHRcXHRcXHQ8VGV4dEZpZWxkIGNsYXNzPVxcXCJpbnB1dFxcXCIgYXV0b2NvcnJlY3Q9XFxcImZhbHNlXFxcIiBoaW50PVxcXCJGaW5kIGEgbG9jYXRpb25cXFwiIFsobmdNb2RlbCldPVxcXCJhZGRyZXNzXFxcIiAodGV4dENoYW5nZSk9XFxcImF1dG9jb21wbGV0ZSgpXFxcIiAjc2VhcmNoTGFiZWwgaWQ9XFxcInNlYXJjaExhYmVsXFxcIiByZXF1aXJlZD48L1RleHRGaWVsZD4gLS0+XFxyXFxuXFx0XFx0XFx0PFNlYXJjaEJhciBoaW50PVxcXCJGaW5kIGEgbG9jYXRpb25cXFwiIFt0ZXh0XT1cXFwiYWRkcmVzc1xcXCIgKHRleHRDaGFuZ2UpPVxcXCJzZWFyY2goJGV2ZW50KVxcXCI+PC9TZWFyY2hCYXI+XFxyXFxuXFx0XFx0XFx0PFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJoci1saWdodFxcXCI+PC9TdGFja0xheW91dD5cXHJcXG5cXHRcXHQ8L1N0YWNrTGF5b3V0PlxcclxcblxcclxcblxcdFxcdDxMaXN0VmlldyBbaXRlbXNdPVxcXCJzdWdnZXN0aW9uc1xcXCIgaGVpZ2h0PVxcXCIxMDAlXFxcIj5cXHJcXG5cXHRcXHRcXHQ8bmctdGVtcGxhdGUgbGV0LWl0ZW09XFxcIml0ZW1cXFwiIGxldC1pPVxcXCJpbmRleFxcXCIgbGV0LW9kZD1cXFwib2RkXFxcIiBsZXQtZXZlbj1cXFwiZXZlblxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0PFN0YWNrTGF5b3V0IFtjbGFzcy5vZGRdPVxcXCJvZGRcXFwiIFtjbGFzcy5ldmVuXT1cXFwiZXZlblxcXCIgY2xhc3M9XFxcInBvc3RcXFwiICh0YXApPVxcXCJzZWxlY3RQbGFjZShpdGVtLnBsYWNlU3VnZ2VzdGlvbiwgaXRlbS5wbGFjZUFkZHJlc3MpXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8TGFiZWwgdGV4dFdyYXA9XFxcInRydWVcXFwiIFt0ZXh0XT1cXFwiaXRlbS5wbGFjZVN1Z2dlc3Rpb25cXFwiIGNsYXNzPVxcXCJoZWFkZXItbGFiZWwtMlxcXCI+PC9MYWJlbD5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8TGFiZWwgdGV4dFdyYXA9XFxcInRydWVcXFwiIFt0ZXh0XT1cXFwiaXRlbS5wbGFjZUFkZHJlc3NcXFwiIGNsYXNzPVxcXCJoZWFkZXItbGFiZWwtM1xcXCI+PC9MYWJlbD5cXHJcXG5cXHRcXHRcXHRcXHQ8L1N0YWNrTGF5b3V0PlxcclxcblxcdFxcdFxcdDwvbmctdGVtcGxhdGU+XFxyXFxuXFx0XFx0PC9MaXN0Vmlldz5cXHJcXG5cXHQ8L1N0YWNrTGF5b3V0PlxcclxcbjwvU2Nyb2xsVmlldz5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGxhY2VzQXV0b2NvbXBsZXRlU2VydmljZSB9IGZyb20gJy4uL3BsYWNlcy1hdXRvY29tcGxldGUuc2VydmljZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGVBcnJheSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlLWFycmF5JztcclxuaW1wb3J0IHsgTW9kYWxEaWFsb2dQYXJhbXMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZGlyZWN0aXZlcy9kaWFsb2dzXCI7XHJcbmltcG9ydCB7IFRyYW5zZmVyU2VydmljZSB9IGZyb20gJy4uL2RhdGF0cmFuc2Zlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU2VhcmNoQmFyIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9zZWFyY2gtYmFyJztcclxuXHJcbmNsYXNzIFN1Z2dlc3Rpb24ge1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwbGFjZVN1Z2dlc3Rpb246IHN0cmluZywgcHVibGljIHBsYWNlQWRkcmVzczogc3RyaW5nKSB7fVxyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1sb2NhdGlvbicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2xvY2F0aW9uLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9sb2NhdGlvbi5jb21wb25lbnQuY3NzJ11cclxufSlcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgTG9jYXRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhcmFtczogTW9kYWxEaWFsb2dQYXJhbXMsIHByaXZhdGUgcGxhY2VzU2VydmljZTogUGxhY2VzQXV0b2NvbXBsZXRlU2VydmljZSwgcHJpdmF0ZSB0cmFuc2ZlclNlcnZpY2U6IFRyYW5zZmVyU2VydmljZSkgeyB9XHJcblxyXG4gIEBWaWV3Q2hpbGQoXCJzZWFyY2hMYWJlbFwiLCB7IHN0YXRpYzogdHJ1ZSB9KSBzZWFyY2hMYWJlbDogRWxlbWVudFJlZjtcclxuICBhZGRyZXNzO1xyXG4gIHN1Z2dlc3Rpb25zID0gbmV3IE9ic2VydmFibGVBcnJheTxTdWdnZXN0aW9uPigpO1xyXG4gIHBsYWNlU3VnZ2VzdGlvbnMgPSBuZXcgT2JzZXJ2YWJsZUFycmF5PFN0cmluZz4oKTtcclxuICBwbGFjZUFkZHJlc3NlcyA9IG5ldyBPYnNlcnZhYmxlQXJyYXk8U3RyaW5nPigpO1xyXG4gIHR5cGUgPSB0aGlzLnRyYW5zZmVyU2VydmljZS5nZXREYXRhKCk7XHJcblxyXG4gIGlkcyA9IG5ldyBTZXQoKTtcclxuICBteVRpbWVyO1xyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICBcdC8vIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5zZWFyY2hMYWJlbC5uYXRpdmVFbGVtZW50LmZvY3VzKCksIDEwMCk7XHJcbiAgfVxyXG5cclxuICBjbG9zZSgpIHtcclxuICBcdHRoaXMucGFyYW1zLmNsb3NlQ2FsbGJhY2soKTtcclxuICAgfVxyXG5cclxuICAgc2VsZWN0UGxhY2UocGxhY2UsIGFkZHJlc3MpIHtcclxuICAgXHRpZih0aGlzLnR5cGUgPT0gJ3N0YXJ0JylcclxuICAgXHRcdHRoaXMucGFyYW1zLmNsb3NlQ2FsbGJhY2soeydzdGFydCc6IHBsYWNlLCAnYWRkcmVzcyc6IGFkZHJlc3N9KTtcclxuICAgXHRlbHNlXHJcbiAgIFx0XHR0aGlzLnBhcmFtcy5jbG9zZUNhbGxiYWNrKHsnZW5kJzogcGxhY2UsICdhZGRyZXNzJzogYWRkcmVzc30pO1xyXG4gICB9XHJcblxyXG4gIHNlYXJjaChhcmdzKSB7XHJcbiAgXHRjbGVhckludGVydmFsKHRoaXMubXlUaW1lcik7XHJcbiAgXHR0aGlzLm15VGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICBcdFx0bGV0IHNlYXJjaEJhciA9IDxTZWFyY2hCYXI+IGFyZ3Mub2JqZWN0O1xyXG5cdCAgICB0aGlzLmlkcy5jbGVhcigpO1xyXG5cdCAgICB0aGlzLnN1Z2dlc3Rpb25zLnNwbGljZSgwKTtcclxuXHQgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcblx0ICAgIHRoaXMucGxhY2VzU2VydmljZS5nZXRQbGFjZVJlc3VsdHMoc2VhcmNoQmFyLnRleHQpLnN1YnNjcmliZSgoZGF0YTogYW55KSA9PiB7XHJcblx0XHQgICAgZm9yKHZhciBpID0gMDsgaSA8IGRhdGEucmVzdWx0cy5sZW5ndGg7IGkrKykge1xyXG5cdFx0ICAgICAgXHRpZighdGhpcy5pZHMuaGFzKGRhdGEucmVzdWx0c1tpXS5wbGFjZV9pZCkpXHJcblx0XHQgICAgICBcdFx0dGhpcy5zdWdnZXN0aW9ucy5wdXNoKG5ldyBTdWdnZXN0aW9uKGRhdGEucmVzdWx0c1tpXS5uYW1lLCBkYXRhLnJlc3VsdHNbaV0uZm9ybWF0dGVkX2FkZHJlc3MpKTtcclxuXHRcdCAgICAgIFx0dGhpcy5pZHMuYWRkKGRhdGEucmVzdWx0c1tpXS5wbGFjZV9pZCk7XHJcblx0XHQgICAgfVxyXG5cdFx0ICB9KTtcclxuXHRcdH0sIDEwMCk7XHJcblx0XHR0aGlzLnBsYWNlc1NlcnZpY2UuZ2V0QXV0b2NvbXBsZXRlUmVzdWx0c0FkZHJlc3Moc2VhcmNoQmFyLnRleHQpLnN1YnNjcmliZSgoZGF0YTogYW55KSA9PiB7XHJcblx0XHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkYXRhLnByZWRpY3Rpb25zLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdCAgXHRpZighdGhpcy5pZHMuaGFzKGRhdGEucHJlZGljdGlvbnNbaV0ucGxhY2VfaWQpKVxyXG5cdFx0XHQgIFx0XHR0aGlzLnN1Z2dlc3Rpb25zLnB1c2gobmV3IFN1Z2dlc3Rpb24oZGF0YS5wcmVkaWN0aW9uc1tpXS5zdHJ1Y3R1cmVkX2Zvcm1hdHRpbmcubWFpbl90ZXh0LCBkYXRhLnByZWRpY3Rpb25zW2ldLnN0cnVjdHVyZWRfZm9ybWF0dGluZy5zZWNvbmRhcnlfdGV4dCkpO1xyXG5cdFx0XHQgIFx0dGhpcy5pZHMuYWRkKGRhdGEucHJlZGljdGlvbnNbaV0ucGxhY2VfaWQpO1xyXG5cdFx0ICBcdH1cclxuXHRcdH0pO1xyXG5cdFx0Ly8gdGhpcy5wbGFjZXNTZXJ2aWNlLmdldEF1dG9jb21wbGV0ZVJlc3VsdHNFc3RhYmxpc2htZW50KHNlYXJjaEJhci50ZXh0KS5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4ge1xyXG5cdFx0Ly8gXHQgIGZvcih2YXIgaSA9IDA7IGkgPCBkYXRhLnByZWRpY3Rpb25zLmxlbmd0aDsgaSsrKSB7XHJcblx0XHQvLyAgICAgXHRpZighdGhpcy5pZHMuaGFzKGRhdGEucHJlZGljdGlvbnNbaV0ucGxhY2VfaWQpKVxyXG5cdFx0Ly8gICAgIFx0XHR0aGlzLnN1Z2dlc3Rpb25zLnB1c2gobmV3IFN1Z2dlc3Rpb24oZGF0YS5wcmVkaWN0aW9uc1tpXS5zdHJ1Y3R1cmVkX2Zvcm1hdHRpbmcubWFpbl90ZXh0LCBkYXRhLnByZWRpY3Rpb25zW2ldLnN0cnVjdHVyZWRfZm9ybWF0dGluZy5zZWNvbmRhcnlfdGV4dCkpO1xyXG5cdFx0Ly8gICAgIFx0dGhpcy5pZHMuYWRkKGRhdGEucHJlZGljdGlvbnNbaV0ucGxhY2VfaWQpO1xyXG5cdFx0Ly8gICAgIH1cclxuXHRcdC8vIH0pO1xyXG5cdFx0dGhpcy5wbGFjZXNTZXJ2aWNlLmdldEF1dG9jb21wbGV0ZVJlc3VsdHNDaXR5KHNlYXJjaEJhci50ZXh0KS5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4ge1xyXG5cdFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGF0YS5wcmVkaWN0aW9ucy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHQgIFx0aWYoIXRoaXMuaWRzLmhhcyhkYXRhLnByZWRpY3Rpb25zW2ldLnBsYWNlX2lkKSlcclxuXHRcdFx0ICBcdFx0dGhpcy5zdWdnZXN0aW9ucy5wdXNoKG5ldyBTdWdnZXN0aW9uKGRhdGEucHJlZGljdGlvbnNbaV0uc3RydWN0dXJlZF9mb3JtYXR0aW5nLm1haW5fdGV4dCwgZGF0YS5wcmVkaWN0aW9uc1tpXS5zdHJ1Y3R1cmVkX2Zvcm1hdHRpbmcuc2Vjb25kYXJ5X3RleHQpKTtcclxuXHRcdFx0ICBcdHRoaXMuaWRzLmFkZChkYXRhLnByZWRpY3Rpb25zW2ldLnBsYWNlX2lkKTtcclxuXHRcdCAgXHR9XHJcblx0XHR9KTtcclxuICBcdH0sIDUwMCk7ICBcdFxyXG4gIH1cclxuXHJcbiAgYXV0b2NvbXBsZXRlKCkge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICBcdHRoaXMuaWRzLmNsZWFyKCk7XHJcbiAgICAgIHRoaXMuc3VnZ2VzdGlvbnMuc3BsaWNlKDApO1xyXG4gICAgICB0aGlzLnBsYWNlc1NlcnZpY2UuZ2V0UGxhY2VSZXN1bHRzKHRoaXMuYWRkcmVzcykuc3Vic2NyaWJlKChkYXRhOiBhbnkpID0+IHtcclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgZGF0YS5yZXN1bHRzLmxlbmd0aDsgaSsrKSB7XHJcblx0ICAgICAgXHRpZighdGhpcy5pZHMuaGFzKGRhdGEucmVzdWx0c1tpXS5wbGFjZV9pZCkpXHJcblx0ICAgICAgXHRcdHRoaXMuc3VnZ2VzdGlvbnMucHVzaChuZXcgU3VnZ2VzdGlvbihkYXRhLnJlc3VsdHNbaV0ubmFtZSwgZGF0YS5yZXN1bHRzW2ldLmZvcm1hdHRlZF9hZGRyZXNzKSk7XHJcblx0ICAgICAgXHR0aGlzLmlkcy5hZGQoZGF0YS5yZXN1bHRzW2ldLnBsYWNlX2lkKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuXHQgICAgICB0aGlzLnBsYWNlc1NlcnZpY2UuZ2V0QXV0b2NvbXBsZXRlUmVzdWx0c0FkZHJlc3ModGhpcy5hZGRyZXNzKS5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4ge1xyXG5cdCAgICAgIFx0ICBmb3IodmFyIGkgPSAwOyBpIDwgZGF0YS5wcmVkaWN0aW9ucy5sZW5ndGg7IGkrKykge1xyXG5cdCAgICAgICAgICBcdGlmKCF0aGlzLmlkcy5oYXMoZGF0YS5wcmVkaWN0aW9uc1tpXS5wbGFjZV9pZCkpXHJcblx0ICAgICAgICAgIFx0XHR0aGlzLnN1Z2dlc3Rpb25zLnB1c2gobmV3IFN1Z2dlc3Rpb24oZGF0YS5wcmVkaWN0aW9uc1tpXS5zdHJ1Y3R1cmVkX2Zvcm1hdHRpbmcubWFpbl90ZXh0LCBkYXRhLnByZWRpY3Rpb25zW2ldLnN0cnVjdHVyZWRfZm9ybWF0dGluZy5zZWNvbmRhcnlfdGV4dCkpO1xyXG5cdCAgICAgICAgICBcdHRoaXMuaWRzLmFkZChkYXRhLnByZWRpY3Rpb25zW2ldLnBsYWNlX2lkKTtcclxuXHQgICAgICAgICAgfVxyXG5cdCAgICAgIH0pO1xyXG5cdCAgICAgIC8vIHRoaXMucGxhY2VzU2VydmljZS5nZXRBdXRvY29tcGxldGVSZXN1bHRzRXN0YWJsaXNobWVudCh0aGlzLmFkZHJlc3MpLnN1YnNjcmliZSgoZGF0YTogYW55KSA9PiB7XHJcblx0ICAgICAgLy8gXHQgIGZvcih2YXIgaSA9IDA7IGkgPCBkYXRhLnByZWRpY3Rpb25zLmxlbmd0aDsgaSsrKSB7XHJcblx0ICAgICAgLy8gICAgIFx0aWYoIXRoaXMuaWRzLmhhcyhkYXRhLnByZWRpY3Rpb25zW2ldLnBsYWNlX2lkKSlcclxuXHQgICAgICAvLyAgICAgXHRcdHRoaXMuc3VnZ2VzdGlvbnMucHVzaChuZXcgU3VnZ2VzdGlvbihkYXRhLnByZWRpY3Rpb25zW2ldLnN0cnVjdHVyZWRfZm9ybWF0dGluZy5tYWluX3RleHQsIGRhdGEucHJlZGljdGlvbnNbaV0uc3RydWN0dXJlZF9mb3JtYXR0aW5nLnNlY29uZGFyeV90ZXh0KSk7XHJcblx0ICAgICAgLy8gICAgIFx0dGhpcy5pZHMuYWRkKGRhdGEucHJlZGljdGlvbnNbaV0ucGxhY2VfaWQpO1xyXG5cdCAgICAgIC8vICAgICB9XHJcblx0ICAgICAgLy8gfSk7XHJcblx0ICAgICAgdGhpcy5wbGFjZXNTZXJ2aWNlLmdldEF1dG9jb21wbGV0ZVJlc3VsdHNDaXR5KHRoaXMuYWRkcmVzcykuc3Vic2NyaWJlKChkYXRhOiBhbnkpID0+IHtcclxuXHQgICAgICBcdCAgZm9yKHZhciBpID0gMDsgaSA8IGRhdGEucHJlZGljdGlvbnMubGVuZ3RoOyBpKyspIHtcclxuXHQgICAgICAgICAgXHRpZighdGhpcy5pZHMuaGFzKGRhdGEucHJlZGljdGlvbnNbaV0ucGxhY2VfaWQpKVxyXG5cdCAgICAgICAgICBcdFx0dGhpcy5zdWdnZXN0aW9ucy5wdXNoKG5ldyBTdWdnZXN0aW9uKGRhdGEucHJlZGljdGlvbnNbaV0uc3RydWN0dXJlZF9mb3JtYXR0aW5nLm1haW5fdGV4dCwgZGF0YS5wcmVkaWN0aW9uc1tpXS5zdHJ1Y3R1cmVkX2Zvcm1hdHRpbmcuc2Vjb25kYXJ5X3RleHQpKTtcclxuXHQgICAgICAgICAgXHR0aGlzLmlkcy5hZGQoZGF0YS5wcmVkaWN0aW9uc1tpXS5wbGFjZV9pZCk7XHJcblx0ICAgICAgICAgIH1cclxuXHQgICAgICB9KTtcclxuICAgICAgfSwgMTAwKTtcclxuXHJcbiAgICB9LCA0MDApO1xyXG4gIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1thcHBMb2dpbl0nXG59KVxuZXhwb3J0IGNsYXNzIExvZ2luRGlyZWN0aXZlIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLypcXG5BZGQgeW91ciBOYXRpdmVTY3JpcHQgc3BlY2lmaWMgc3R5bGVzIGhlcmUuXFxuVG8gbGVhcm4gbW9yZSBhYm91dCBzdHlsaW5nIGluIE5hdGl2ZVNjcmlwdCBzZWU6XFxuaHR0cHM6Ly9kb2NzLm5hdGl2ZXNjcmlwdC5vcmcvYW5ndWxhci91aS9zdHlsaW5nXFxuKi9cXG5cXG4ubG9naW4ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgY29sb3I6ICNhYzAwZTY7XFxuICAgIC8qcGFkZGluZzogNnB4IDI0cHg7Ki9cXG4gICAgYm9yZGVyLXdpZHRoOiAxO1xcbiAgICBib3JkZXItY29sb3I6ICNhYzAwZTY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZmxvYXQ6IGNlbnRlcjtcXG4gICAgbWFyZ2luOiBhdXRvOyBcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJTZWdvZSBVSVxcXCIsQXJpYWwsc2Fucy1zZXJpZjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTU7XFxuICAgIHdpZHRoOiAxMjA7XFxuICAgIGhlaWdodDogNDA7XFxufVxcblxcbi5sb2dpbjpoaWdobGlnaHRlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWU2ZmY7XFxufVxcblxcbi5sb2dpbi1pbmZvIHtcXG5cXHRtYXJnaW4tdG9wOiAxMjA7XFxufVxcblxcbi5ob21lc2NyZWVuLWxvZ28ge1xcblxcdG1hcmdpbi1ib3R0b206IDIwMDtcXG59XFxuXFxuLmgxIHtcXG5cXHRmb250LXNpemU6IDUwO1xcblxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxuXFx0Y29sb3I6ICNhYzAwZTY7XFxufVxcblxcbi5sb2dpbi13cmFwcGVyIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xcbn1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImxvZ2luLXdyYXBwZXJcXFwiPlxcclxcbiAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJsb2dpbi1pbmZvXFxcIj5cXHJcXG4gICAgPEltYWdlIHNyYz1cXFwifi9pbWcvbG9nby5wbmdcXFwiIGhlaWdodD1cXFwiMTgwXFxcIiB3aWR0aD1cXFwiMTgwXFxcIiBjbGFzcz1cXFwiaG9tZXNjcmVlbi1sb2dvXFxcIj48L0ltYWdlPlxcclxcbjwhLS0gICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwic2xvZ2Fuc1xcXCI+XFxyXFxuICAgICAgPExhYmVsIGNsYXNzPVxcXCJoM1xcXCIgdGV4dD1cXFwiRmluZCBSaWRlcyBGYXN0XFxcIj48L0xhYmVsPlxcclxcbiAgICAgIDxMYWJlbCBjbGFzcz1cXFwiaDNcXFwiIHRleHQ9XFxcIkNvbm5lY3Qgd2l0aCBvdGhlciBzdHVkZW50c1xcXCI+PC9MYWJlbD5cXHJcXG4gICAgPC9TdGFja0xheW91dD4gLS0+XFxyXFxuICA8L1N0YWNrTGF5b3V0PlxcclxcbiAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJsb2dpbl93cmFwcGVyXFxcIj5cXHJcXG4gICAgPEJ1dHRvbiBjbGFzcz1cXFwibG9naW5cXFwiICh0YXApPVxcXCJ0b0xvZ0luKClcXFwiIHRleHQ9XFxcIkxvZ2luXFxcIj48L0J1dHRvbj5cXHJcXG4gICAgPEJ1dHRvbiBjbGFzcz1cXFwibG9naW5cXFwiICh0YXApPVxcXCJ0b1NpZ25VcCgpXFxcIiB0ZXh0PVxcXCJTaWduIHVwXFxcIj48L0J1dHRvbj5cXHJcXG4gIDwvU3RhY2tMYXlvdXQ+XFxyXFxuPC9TdGFja0xheW91dD5cXHJcXG5cXHJcXG48IS0tXFxyXFxuT3JpZ2luYWwgV2ViIHRlbXBsYXRlOlxcclxcblxcclxcbjxkaXYgY2xhc3M9XFxcImNvbnRlbnQtcmlnaHRcXFwiPlxcclxcbiAgPGRpdiBjbGFzcz1cXFwibG9naW5fd3JhcHBlclxcXCI+XFxyXFxuICAgICAgPGlucHV0IHR5cGU9XFxcImJ1dHRvblxcXCIgdmFsdWU9XFxcIkxvZ2luXFxcIiBjbGFzcz1cXFwibG9naW5cXFwiIChjbGljayk9XFxcInRvTG9nSW4oKVxcXCIgLz5cXHJcXG4gICAgICA8aW5wdXQgdHlwZT1cXFwiYnV0dG9uXFxcIiB2YWx1ZT1cXFwiU2lnbiB1cFxcXCIgY2xhc3M9XFxcImxvZ2luXFxcIiBpZD1cXFwibG9naW4yXFxcIiAoY2xpY2spPVxcXCJ0b1NpZ25VcCgpXFxcIi8+XFxyXFxuICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG48ZGl2IGNsYXNzPVxcXCJjb250ZW50LWxlZnRcXFwiPlxcclxcbiAgPGRpdiBjbGFzcz1cXFwibG9naW5faW5mb1xcXCI+XFxyXFxuICAgIDxoMT5Db2xsZWdlUG9vbDwvaDE+XFxyXFxuICAgIDxpbWcgc3JjPVxcXCJzcmMvaW1nL2xvZ28ucG5nXFxcIiBhbHQ9XFxcIkxvZ29cXFwiIGhlaWdodD1cXFwiOTBcXFwiIHdpZHRoPVxcXCI5MFxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInNsb2dhbnNcXFwiPlxcclxcbiAgICAgIDxoMz5GaW5kIFJpZGVzIEZhc3Q8YnI+XFxyXFxuICAgICAgQ29ubmVjdCB3aXRoIG90aGVyIHN0dWRlbnRzPC9oMz5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG4tLT5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xyXG4vLyBpbXBvcnQgeyBDb2duaXRvQXV0aCB9IGZyb20gJ2FtYXpvbi1jb2duaXRvLWF1dGgtanMvZGlzdC9hbWF6b24tY29nbml0by1hdXRoJztcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2VcIjtcclxuLy8gaW1wb3J0IEF1dGggZnJvbSAnQGF3cy1hbXBsaWZ5L2F1dGgnO1xyXG4vLyBjb25zdCBmaXJlYmFzZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCIpO1xyXG5pbXBvcnQgKiBhcyBmaXJlYmFzZSBmcm9tICduYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlJztcclxuLy8gaW1wb3J0IHsgQW5ndWxhckZpcmVBdXRoIH0gZnJvbSAnQGFuZ3VsYXIvZmlyZS9hdXRoJztcclxuLy8gaW1wb3J0IHsgYXV0aCB9IGZyb20gJ2ZpcmViYXNlL2FwcCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1sb2dpbicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2xvZ2luLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9sb2dpbi5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMsIHByaXZhdGUgcGFnZTogUGFnZSkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIFx0dGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XHJcbiAgICB2YXIgZmlyZWJhc2VDb25maWcgPSB7XHJcbiAgICAgIGFwaUtleTogXCJBSXphU3lCR3VpWXBNMTM4UTZheXFETVJVVldKcDFDRTlXQjA5TndcIixcclxuICAgICAgYXV0aERvbWFpbjogXCJjb2xsZWdlcG9vbC0xNTUyNzQ5MTE4NjE3LmZpcmViYXNlYXBwLmNvbVwiLFxyXG4gICAgICBkYXRhYmFzZVVSTDogXCJodHRwczovL2NvbGxlZ2Vwb29sLTE1NTI3NDkxMTg2MTcuZmlyZWJhc2Vpby5jb21cIixcclxuICAgICAgcHJvamVjdElkOiBcImNvbGxlZ2Vwb29sLTE1NTI3NDkxMTg2MTdcIixcclxuICAgICAgc3RvcmFnZUJ1Y2tldDogXCJjb2xsZWdlcG9vbC0xNTUyNzQ5MTE4NjE3LmFwcHNwb3QuY29tXCIsXHJcbiAgICAgIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjM3NTI2MzY4MDE4M1wiLFxyXG4gICAgICBhcHBJRDogXCJjb2xsZWdlcG9vbC0xNTUyNzQ5MTE4NjE3XCIsXHJcbiAgICB9O1xyXG5cclxuICAgIGZpcmViYXNlLmluaXQoZmlyZWJhc2VDb25maWcpLnRoZW4oXHJcbiAgICAgICgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImZpcmViYXNlLmluaXQgZG9uZVwiKTtcclxuICAgICAgfSxcclxuICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBmaXJlYmFzZS5pbml0IGVycm9yOiAke2Vycm9yfWApO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gICAgLy8gZmlyZWJhc2UuYXV0aCgpLmNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCgnYWRtaW4nLCAna3l2ZXJuMTIzJykuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcclxuICAgIC8vICAgLy8gSGFuZGxlIEVycm9ycyBoZXJlLlxyXG4gICAgLy8gICB2YXIgZXJyb3JDb2RlID0gZXJyb3IuY29kZTtcclxuICAgIC8vICAgdmFyIGVycm9yTWVzc2FnZSA9IGVycm9yLm1lc3NhZ2U7XHJcbiAgICAvLyAgIC8vIC4uLlxyXG4gICAgLy8gfSk7XHJcblxyXG4gIH1cclxuXHJcbiAgdG9Mb2dJbigpIHtcclxuICAgIC8vIEF1dGguc2lnbkluKFwicGhpbGxpbVwiLCBcIkNvbGxlZ2Vwb29sNjkqXCIpXHJcbiAgICAvLyAudGhlbih1c2VyID0+IHtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyh1c2VyKVxyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKFwicmVkaXJlY3RpbmdcIilcclxuXHJcbiAgICAvLyB9KVxyXG5cclxuICAgIHZhciBjcmVkZW50aWFscyA6IGZpcmViYXNlLkxvZ2luT3B0aW9ucyA9IHtcclxuICAgICAgcGFzc3dvcmRPcHRpb25zOiB7XHJcbiAgICAgICAgZW1haWw6ICdhZGFtLnllZUBnbWFpbC5jb20nLFxyXG4gICAgICAgIHBhc3N3b3JkOiAna3l2ZXJuMTIzJyxcclxuICAgICAgfSxcclxuICAgICAgdHlwZTogZmlyZWJhc2UuTG9naW5UeXBlLlBBU1NXT1JEXHJcbiAgICB9XHJcbiAgICBmaXJlYmFzZS5sb2dpbihjcmVkZW50aWFscykuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSlcclxuICAgIGZpcmViYXNlLmdldEN1cnJlbnRVc2VyKCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICB9KVxyXG5cclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnbmF2aWdhdGlvbiddKTtcclxuICBcdC8vIHdpbmRvdy5sb2NhdGlvbi5ocmVmPSdodHRwczovL2NvbGxlZ2Vwb29saW5nLmF1dGgudXMtZWFzdC0yLmFtYXpvbmNvZ25pdG8uY29tL2xvZ2luP3Jlc3BvbnNlX3R5cGU9dG9rZW4mY2xpZW50X2lkPTRzc2xtbWd2OXBuNWxiNTA4N2FhajVyNTk5JnJlZGlyZWN0X3VyaT1odHRwOi8vbG9jYWxob3N0OjQyMDAvbG9naW5yb3V0ZSZzdGF0ZT1TVEFURSZzY29wZT1hd3MuY29nbml0by5zaWduaW4udXNlci5hZG1pbitvcGVuaWQnO1xyXG4gIH1cclxuXHJcbiAgdG9TaWduVXAoKXtcclxuICAgIGZpcmViYXNlLmNyZWF0ZVVzZXIoe1xyXG4gICAgICBlbWFpbDogJ2FkYW0ueWVlQGdtYWlsLmNvbScsXHJcbiAgICAgIHBhc3N3b3JkOiAna3l2ZXJuMTIzJ1xyXG4gICAgfSkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSlcclxuICAgIC8vIHRoaXMuYWZBdXRoLmF1dGguY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkKCdhZGFtLnllZUBnbWFpbC5jb20nLCAna3l2ZXJuMTIzJyk7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ25hdmlnYXRpb24nXSk7XHJcbiAgXHQvLyB3aW5kb3cubG9jYXRpb24uaHJlZj0naHR0cHM6Ly9jb2xsZWdlcG9vbGluZy5hdXRoLnVzLWVhc3QtMi5hbWF6b25jb2duaXRvLmNvbS9zaWdudXA/cmVzcG9uc2VfdHlwZT10b2tlbiZjbGllbnRfaWQ9NHNzbG1tZ3Y5cG41bGI1MDg3YWFqNXI1OTkmcmVkaXJlY3RfdXJpPWh0dHA6Ly9sb2NhbGhvc3Q6NDIwMC9sb2dpbnJvdXRlJnN0YXRlPVNUQVRFJnNjb3BlPWF3cy5jb2duaXRvLnNpZ25pbi51c2VyLmFkbWluK29wZW5pZCc7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSnd0SGVscGVyU2VydmljZSB9IGZyb20gJ0BhdXRoMC9hbmd1bGFyLWp3dCc7XHJcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSAnLi91c2VyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi91c2VyLm1vZGVsJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgUGF5bWVudFNlcnZpY2UgfSBmcm9tICcuL3BheW1lbnQuc2VydmljZSc7XHJcbmltcG9ydCAqIGFzIGZpcmViYXNlIGZyb20gJ25hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2UnO1xyXG5pbXBvcnQgKiBhcyBhcHBTZXR0aW5ncyBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uLXNldHRpbmdzJztcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMb2dpbmNoZWNrU2VydmljZSB7XHJcblx0Ly9teVN0b3JhZ2UgPSB3aW5kb3cubG9jYWxTdG9yYWdlO1xyXG5cdG15U3RvcmFnZSA9IG51bGw7XHJcblx0Ly91c2VyIGZyb20gZGF0YWJhc2VcclxuXHR1c2VyO1xyXG5cdC8vbGlzdCBvZiBhbGwgdXNlcnMgZnJvbSBkYXRhYmFzZVxyXG5cdHVzZXJzO1xyXG5cdC8vdXNlciBpbmZvIGZyb20gY29nbml0b1xyXG5cdHVzZXJJbmZvID0gbnVsbDtcclxuXHR1aWQ7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsIHByaXZhdGUgcGF5bWVudFNlcnZpY2U6IFBheW1lbnRTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucykgeyB9XHJcblxyXG4gIGFkZFVzZXJUb0ZpcmVzdG9yZSh1aWQsIGFkZHJlc3MsIGJpcnRoZGF0ZSwgZW1haWwsIGZpcnN0X25hbWUsIGxhc3RfbmFtZSwgZ2VuZGVyLCBwaG9uZV9udW1iZXIsIHJpZGVzX2dpdmVuLCByaWRlc19yZWNlaXZlZCwgcHJvZmlsZV9zb3VyY2UsIHRva2VuKSB7XHJcbiAgXHRjb25zdCB1c2Vyc0NvbGxlY3Rpb24gPSBmaXJlYmFzZS5maXJlc3RvcmUuY29sbGVjdGlvbigndXNlcnMnKTtcclxuICBcdHVzZXJzQ29sbGVjdGlvbi5kb2ModWlkKS5zZXQoe1xyXG4gIFx0XHRhZGRyZXNzOiBhZGRyZXNzLFxyXG4gIFx0XHRiaXJ0aGRhdGU6IGJpcnRoZGF0ZSxcclxuICBcdFx0ZW1haWw6IGVtYWlsLFxyXG4gIFx0XHRmaXJzdF9uYW1lOiBmaXJzdF9uYW1lLFxyXG4gIFx0XHRsYXN0X25hbWU6IGxhc3RfbmFtZSxcclxuICBcdFx0Z2VuZGVyOiBnZW5kZXIsXHJcbiAgXHRcdHBob25lX251bWJlcjogcGhvbmVfbnVtYmVyLFxyXG4gIFx0XHRyaWRlc19naXZlbjogcmlkZXNfZ2l2ZW4sXHJcbiAgXHRcdHJpZGVzX3JlY2VpdmVkOiByaWRlc19yZWNlaXZlZCxcclxuICAgICAgcHJvZmlsZV9zb3VyY2U6IHByb2ZpbGVfc291cmNlLFxyXG4gIFx0XHRwb3N0czogW10sXHJcbiAgICAgIGNoYXRzOiBbXSxcclxuICAgICAgdG9rZW5zOiBbdG9rZW5dXHJcbiAgXHR9KTtcclxuICB9XHJcblxyXG4gIGRlY29kZVRva2VuKHRva2VuKSB7XHJcblxyXG4gIH1cclxuXHJcbiAgY2hlY2tVc2VyKCkge1xyXG5cclxuICB9XHJcblxyXG4gIGNsZWFySW5mbygpIHtcclxuICBcdHRoaXMudXNlciA9IG51bGw7XHJcbiAgXHR0aGlzLnVzZXJJbmZvID0gbnVsbDtcclxuICBcdHRoaXMudXNlcnMgPSBudWxsO1xyXG4gIFx0dGhpcy51aWQgPSBudWxsO1xyXG4gIFx0YXBwU2V0dGluZ3MuY2xlYXIoKTtcclxuICB9XHJcbiAgXHJcbiAgYWRkVXNlclRvQnJhaW50cmVlKHVzZXJuYW1lLCBuYW1lLCBlbWFpbCkge1xyXG4gIFx0dGhpcy5wYXltZW50U2VydmljZS5hZGRQYXltZW50VXNlcih0aGlzLnVpZCwgdXNlcm5hbWUsIG5hbWUsIGVtYWlsKS5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4ge1xyXG4gIFx0XHRmaXJlYmFzZS5maXJlc3RvcmUuY29sbGVjdGlvbigndXNlcnMnKS5kb2ModGhpcy51aWQpLnVwZGF0ZSh7XHJcbiAgXHRcdFx0cGF5bWVudF9pZDogZGF0YS5jdXN0b21lci5pZFxyXG4gIFx0XHR9KVxyXG4gIFx0fSlcclxuICBcdC8vIHRoaXMucGF5bWVudFNlcnZpY2UuZ2V0UGF5bWVudFVzZXJCeUlkKCcyNTg3MDM5NTYnKS5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4ge1xyXG4gIFx0Ly8gXHRjb25zb2xlLmxvZyhkYXRhKTtcclxuICBcdC8vIH0pXHJcbiAgXHRjb25zb2xlLmxvZygnYWRkZWQgdG8gYnJhaW50cmVlJyk7XHJcbiAgfVxyXG5cclxuICBsb2dpblVzZXIodWlkKSB7XHJcbiAgXHRhcHBTZXR0aW5ncy5zZXRTdHJpbmcoXCJ1aWRcIiwgdWlkKTtcclxuICBcdGNvbnNvbGUubG9nKHVpZClcclxuICBcdHRoaXMudWlkID0gdWlkO1xyXG4gIH1cclxuXHJcbiAgbG9naW5DaGVjaygpIHtcclxuXHRpZih0aGlzLmdldFVzZXIgPT0gbnVsbClcclxuXHRcdHRoaXMucm91dGVyLm5hdmlnYXRlKFsnd2VsY29tZSddLCB7Y2xlYXJIaXN0b3J5OiB0cnVlfSlcclxuICB9XHJcblxyXG4gIGdldFVzZXJGcm9tTG9jYWxTdG9yYWdlKCkge1xyXG5cdHJldHVybiBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJ1aWRcIik7XHJcbiAgfVxyXG5cclxuICBnZXRVc2VyKCkge1xyXG5cdHRoaXMudWlkID0gdGhpcy5nZXRVc2VyRnJvbUxvY2FsU3RvcmFnZSgpO1xyXG5cdHJldHVybiB0aGlzLnVpZDtcclxuICB9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSnd0SGVscGVyU2VydmljZSB9IGZyb20gJ0BhdXRoMC9hbmd1bGFyLWp3dCc7XHJcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSAnLi91c2VyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi91c2VyLm1vZGVsJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgUGF5bWVudFNlcnZpY2UgfSBmcm9tICcuL3BheW1lbnQuc2VydmljZSc7XHJcbmltcG9ydCAqIGFzIGZpcmViYXNlIGZyb20gJ25hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2UnO1xyXG5pbXBvcnQgKiBhcyBhcHBTZXR0aW5ncyBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uLXNldHRpbmdzJztcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMb2dpbmNoZWNrU2VydmljZSB7XHJcblx0Ly9teVN0b3JhZ2UgPSB3aW5kb3cubG9jYWxTdG9yYWdlO1xyXG5cdG15U3RvcmFnZSA9IG51bGw7XHJcblx0Ly91c2VyIGZyb20gZGF0YWJhc2VcclxuXHR1c2VyO1xyXG5cdC8vbGlzdCBvZiBhbGwgdXNlcnMgZnJvbSBkYXRhYmFzZVxyXG5cdHVzZXJzO1xyXG5cdC8vdXNlciBpbmZvIGZyb20gY29nbml0b1xyXG5cdHVzZXJJbmZvID0gbnVsbDtcclxuXHR1aWQ7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsIHByaXZhdGUgcGF5bWVudFNlcnZpY2U6IFBheW1lbnRTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucykgeyB9XHJcblxyXG4gIGFkZFVzZXJUb0ZpcmVzdG9yZSh1aWQsIGFkZHJlc3MsIGJpcnRoZGF0ZSwgZW1haWwsIGZpcnN0X25hbWUsIGxhc3RfbmFtZSwgZ2VuZGVyLCBwaG9uZV9udW1iZXIsIHJpZGVzX2dpdmVuLCByaWRlc19yZWNlaXZlZCwgcHJvZmlsZV9zb3VyY2UsIHRva2VuKSB7XHJcbiAgXHRjb25zdCB1c2Vyc0NvbGxlY3Rpb24gPSBmaXJlYmFzZS5maXJlc3RvcmUuY29sbGVjdGlvbigndXNlcnMnKTtcclxuICBcdHVzZXJzQ29sbGVjdGlvbi5kb2ModWlkKS5zZXQoe1xyXG4gIFx0XHRhZGRyZXNzOiBhZGRyZXNzLFxyXG4gIFx0XHRiaXJ0aGRhdGU6IGJpcnRoZGF0ZSxcclxuICBcdFx0ZW1haWw6IGVtYWlsLFxyXG4gIFx0XHRmaXJzdF9uYW1lOiBmaXJzdF9uYW1lLFxyXG4gIFx0XHRsYXN0X25hbWU6IGxhc3RfbmFtZSxcclxuICBcdFx0Z2VuZGVyOiBnZW5kZXIsXHJcbiAgXHRcdHBob25lX251bWJlcjogcGhvbmVfbnVtYmVyLFxyXG4gIFx0XHRyaWRlc19naXZlbjogcmlkZXNfZ2l2ZW4sXHJcbiAgXHRcdHJpZGVzX3JlY2VpdmVkOiByaWRlc19yZWNlaXZlZCxcclxuICAgICAgcHJvZmlsZV9zb3VyY2U6IHByb2ZpbGVfc291cmNlLFxyXG4gIFx0XHRwb3N0czogW10sXHJcbiAgICAgIGNoYXRzOiBbXSxcclxuICAgICAgdG9rZW5zOiBbdG9rZW5dXHJcbiAgXHR9KTtcclxuICB9XHJcblxyXG4gIGRlY29kZVRva2VuKHRva2VuKSB7XHJcblxyXG4gIH1cclxuXHJcbiAgY2hlY2tVc2VyKCkge1xyXG5cclxuICB9XHJcblxyXG4gIGNsZWFySW5mbygpIHtcclxuICBcdHRoaXMudXNlciA9IG51bGw7XHJcbiAgXHR0aGlzLnVzZXJJbmZvID0gbnVsbDtcclxuICBcdHRoaXMudXNlcnMgPSBudWxsO1xyXG4gIFx0dGhpcy51aWQgPSBudWxsO1xyXG4gIFx0YXBwU2V0dGluZ3MuY2xlYXIoKTtcclxuICB9XHJcbiAgXHJcbiAgYWRkVXNlclRvQnJhaW50cmVlKHVzZXJuYW1lLCBuYW1lLCBlbWFpbCkge1xyXG4gIFx0dGhpcy5wYXltZW50U2VydmljZS5hZGRQYXltZW50VXNlcih0aGlzLnVpZCwgdXNlcm5hbWUsIG5hbWUsIGVtYWlsKS5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4ge1xyXG4gIFx0XHRmaXJlYmFzZS5maXJlc3RvcmUuY29sbGVjdGlvbigndXNlcnMnKS5kb2ModGhpcy51aWQpLnVwZGF0ZSh7XHJcbiAgXHRcdFx0cGF5bWVudF9pZDogZGF0YS5jdXN0b21lci5pZFxyXG4gIFx0XHR9KVxyXG4gIFx0fSlcclxuICBcdC8vIHRoaXMucGF5bWVudFNlcnZpY2UuZ2V0UGF5bWVudFVzZXJCeUlkKCcyNTg3MDM5NTYnKS5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4ge1xyXG4gIFx0Ly8gXHRjb25zb2xlLmxvZyhkYXRhKTtcclxuICBcdC8vIH0pXHJcbiAgXHRjb25zb2xlLmxvZygnYWRkZWQgdG8gYnJhaW50cmVlJyk7XHJcbiAgfVxyXG5cclxuICBsb2dpblVzZXIodWlkKSB7XHJcbiAgXHRhcHBTZXR0aW5ncy5zZXRTdHJpbmcoXCJ1aWRcIiwgdWlkKTtcclxuICBcdGNvbnNvbGUubG9nKHVpZClcclxuICBcdHRoaXMudWlkID0gdWlkO1xyXG4gIH1cclxuXHJcbiAgbG9naW5DaGVjaygpIHtcclxuXHRpZih0aGlzLmdldFVzZXIgPT0gbnVsbClcclxuXHRcdHRoaXMucm91dGVyLm5hdmlnYXRlKFsnd2VsY29tZSddLCB7Y2xlYXJIaXN0b3J5OiB0cnVlfSlcclxuICB9XHJcblxyXG4gIGdldFVzZXJGcm9tTG9jYWxTdG9yYWdlKCkge1xyXG5cdHJldHVybiBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJ1aWRcIik7XHJcbiAgfVxyXG5cclxuICBnZXRVc2VyKCkge1xyXG5cdHRoaXMudWlkID0gdGhpcy5nZXRVc2VyRnJvbUxvY2FsU3RvcmFnZSgpO1xyXG5cdHJldHVybiB0aGlzLnVpZDtcclxuICB9XHJcblxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCIvKlxcbkFkZCB5b3VyIE5hdGl2ZVNjcmlwdCBzcGVjaWZpYyBzdHlsZXMgaGVyZS5cXG5UbyBsZWFybiBtb3JlIGFib3V0IHN0eWxpbmcgaW4gTmF0aXZlU2NyaXB0IHNlZTpcXG5odHRwczovL2RvY3MubmF0aXZlc2NyaXB0Lm9yZy9hbmd1bGFyL3VpL3N0eWxpbmdcXG4qL1wiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxTdGFja0xheW91dD5cXG4gIDxMYWJlbCB0ZXh0PVxcXCJsb2dpbnJvdXRlIHdvcmtzXFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCI+PC9MYWJlbD5cXG4gIDxMYWJlbCB0ZXh0PVxcXCJUaGlzIGlzIGEgbWlncmF0ZWQgY29tcG9uZW50XFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCI+PC9MYWJlbD5cXG4gIDxMYWJlbCB0ZXh0PVxcXCJVcGRhdGUgaXQgdG8gcHJvdmlkZSB0aGUgVUkgZWxlbWVudHMgcmVxdWlyZWQgaW4geW91ciBtb2JpbGUgYXBwXFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCI+PC9MYWJlbD5cXG48L1N0YWNrTGF5b3V0PlxcblxcbjwhLS1cXG5PcmlnaW5hbCBXZWIgdGVtcGxhdGU6XFxuXFxuPHA+XFxuICBSZWRpcmVjdGluZy4uLlxcbjwvcD5cXG5cXG4tLT5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMb2dpbmNoZWNrU2VydmljZSB9IGZyb20gJy4uL2xvZ2luY2hlY2suc2VydmljZSc7XG5pbXBvcnQgeyBUcmFuc2ZlclNlcnZpY2UgfSBmcm9tICcuLi9kYXRhdHJhbnNmZXIuc2VydmljZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtbG9naW5yb3V0ZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9sb2dpbnJvdXRlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbG9naW5yb3V0ZS5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTG9naW5yb3V0ZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBsb2dpbmNoZWNrU2VydmljZTogTG9naW5jaGVja1NlcnZpY2UsIHByaXZhdGUgdHJhbnNmZXJTZXJ2aWNlOiBUcmFuc2ZlclNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHsgfVxuICBpZFRva2VuID0gdGhpcy5nZXRQYXJhbWV0ZXJCeU5hbWUoXCJpZF90b2tlblwiKTtcbiAgbmdPbkluaXQoKSB7XG4gIFx0aWYodGhpcy5pZFRva2VuID09IG51bGwgfHwgdGhpcy5pZFRva2VuID09ICcnKVxuICBcdFx0dGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCgnL2xvZ2luJyk7XG5cbiAgXHR0aGlzLmxvZ2luY2hlY2tTZXJ2aWNlLmRlY29kZVRva2VuKHRoaXMuaWRUb2tlbik7XG4gIFx0dGhpcy5sb2dpbmNoZWNrU2VydmljZS5jaGVja1VzZXIoKTtcblxuICB9XG5cblx0Z2V0UGFyYW1ldGVyQnlOYW1lKG5hbWUpIHtcblx0ICAgIHZhciB1cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcblx0ICAgIG5hbWUgPSBuYW1lLnJlcGxhY2UoL1tcXFtcXF1dL2csIFwiXFxcXCQmXCIpO1xuXHQgICAgdmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cChcIls/JiNdXCIgKyBuYW1lICsgXCIoPShbXiYjXSopfCZ8I3wkKVwiKSxcblx0ICAgICAgICByZXN1bHRzID0gcmVnZXguZXhlYyh1cmwpO1xuXHQgICAgaWYgKCFyZXN1bHRzKSByZXR1cm4gbnVsbDtcblx0ICAgIGlmICghcmVzdWx0c1syXSkgcmV0dXJuICcnO1xuXHQgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChyZXN1bHRzWzJdLnJlcGxhY2UoL1xcKy9nLCBcIiBcIikpO1xuXHR9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLyogQWRkIG1vYmlsZSBzdHlsZXMgZm9yIHRoZSBjb21wb25lbnQgaGVyZS4gICovXFxuXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPEJ1dHRvbiB0ZXh0PVxcXCJtZXNzYWdlLW1vZGFsIHdvcmtzIVxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCI+PC9CdXR0b24+XCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtbWVzc2FnZS1tb2RhbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9tZXNzYWdlLW1vZGFsLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbWVzc2FnZS1tb2RhbC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTWVzc2FnZU1vZGFsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gXCIvKlxcbkFkZCB5b3VyIE5hdGl2ZVNjcmlwdCBzcGVjaWZpYyBzdHlsZXMgaGVyZS5cXG5UbyBsZWFybiBtb3JlIGFib3V0IHN0eWxpbmcgaW4gTmF0aXZlU2NyaXB0IHNlZTpcXG5odHRwczovL2RvY3MubmF0aXZlc2NyaXB0Lm9yZy9hbmd1bGFyL3VpL3N0eWxpbmdcXG4qL1wiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxQYWdlLmFjdGlvbkJhcj5cXHJcXG4gICAgPEFjdGlvbkJhciB0aXRsZT1cXFwie3sgYWN0aW9uQmFyVGl0bGUgfX1cXFwiPlxcclxcbiAgICBcXHQ8QWN0aW9uSXRlbSAodGFwKT1cXFwidG9NZXNzYWdlcygpXFxcIiBpY29uPVxcXCJ+L2ltZy9zZW5kX21lc3NhZ2VfaWNvbi5wbmdcXFwiIGlvcy5wb3NpdGlvbj1cXFwicmlnaHRcXFwiIHdpZHRoPVxcXCIyMFxcXCIgaGVpZ2h0PVxcXCIyMFxcXCIgI2FjdGlvbkl0ZW0+PC9BY3Rpb25JdGVtPlxcclxcbiAgICA8L0FjdGlvbkJhcj5cXHJcXG48L1BhZ2UuYWN0aW9uQmFyPlxcclxcblxcclxcbjxUYWJWaWV3IFsobmdNb2RlbCldPVxcXCJ0YWJTZWxlY3RlZEluZGV4XFxcIiAodGFiSXRlbVRhcCk9XFxcImhvbWUoKVxcXCIgKHNlbGVjdGVkSW5kZXhDaGFuZ2VkKT1cXFwib25TZWxlY3RlZEluZGV4Q2hhbmdlZCgkZXZlbnQpXFxcIiBhbmRyb2lkVGFic1Bvc2l0aW9uPVxcXCJib3R0b21cXFwiIHNlbGVjdGVkVGFiVGV4dENvbG9yPVxcXCIjYWMwMGU2XFxcIiAjdGFiVmlldz5cXHJcXG4gICAgPFBhZ2UgKnRhYkl0ZW09XFxcImhvbWVUYWJcXFwiPlxcclxcbiAgICBcXHQ8YXBwLWhvbWU+PC9hcHAtaG9tZT5cXHJcXG4gICAgPC9QYWdlPlxcclxcbiAgICA8UGFnZSAqdGFiSXRlbT1cXFwic2VhcmNoVGFiXFxcIj5cXHJcXG4gICAgXFx0PGFwcC1zZWFyY2g+PC9hcHAtc2VhcmNoPlxcclxcbiAgICA8L1BhZ2U+XFxyXFxuICAgIDxQYWdlICp0YWJJdGVtPVxcXCJoaXN0b3J5VGFiXFxcIj5cXHJcXG4gICAgXFx0PGFwcC1oaXN0b3J5PjwvYXBwLWhpc3Rvcnk+XFxyXFxuICAgIDwvUGFnZT5cXHJcXG4gICAgPFBhZ2UgKnRhYkl0ZW09XFxcInNldHRpbmdzVGFiXFxcIj5cXHJcXG4gICAgXFx0PGFwcC1zZXR0aW5ncz48L2FwcC1zZXR0aW5ncz5cXHJcXG4gICAgPC9QYWdlPlxcclxcbjwvVGFiVmlldz5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG48IS0tXFxyXFxuT3JpZ2luYWwgV2ViIHRlbXBsYXRlOlxcclxcblxcclxcbjxkaXYgY2xhc3M9XFxcInRvcG5hdlxcXCI+XFxyXFxuXFx0PGRpdiBjbGFzcz1cXFwibmF2YnRuc1xcXCI+XFxyXFxuXFx0XFx0PGEgKGNsaWNrKT1cXFwidG9Ib21lKClcXFwiIGNsYXNzPVxcXCJhY3RpdmUgbmF2aWdhdGlvblxcXCIgaWQ9XFxcImhvbWVuYXZcXFwiPkhvbWU8L2E+XFxyXFxuXFx0XFx0PGEgKGNsaWNrKT1cXFwidG9IaXN0b3J5KClcXFwiIGNsYXNzPVxcXCJuYXZpZ2F0aW9uXFxcIiBpZD1cXFwiaGlzdG9yeW5hdlxcXCI+SGlzdG9yeTwvYT5cXHJcXG5cXHRcXHQ8YSAoY2xpY2spPVxcXCJ0b1BheW1lbnRzKClcXFwiIGNsYXNzPVxcXCJuYXZpZ2F0aW9uXFxcIiBpZD1cXFwicGF5bWVudHNuYXZcXFwiPlBheW1lbnRzPC9hPlxcclxcblxcdFxcdDxhIChjbGljayk9XFxcInRvU2V0dGluZ3MoKVxcXCIgY2xhc3M9XFxcIm5hdmlnYXRpb25cXFwiIGlkPVxcXCJzZXR0aW5nc25hdlxcXCI+U2V0dGluZ3M8L2E+XFxyXFxuXFx0XFx0PGEgKGNsaWNrKT1cXFwicG9zdCgpXFxcIiBjbGFzcz1cXFwibmF2aWdhdGlvblxcXCIgaWQ9XFxcInBvc3RuYXZcXFwiPlBvc3Q8L2E+XFxyXFxuXFx0PC9kaXY+XFxyXFxuXFxyXFxuXFx0PGRpdiBjbGFzcz1cXFwiaW1nbmF2XFxcIj5cXHJcXG5cXHRcXHQ8aW1nIHNyYz1cXFwic3JjL2ljb24ucG5nXFxcIiAoY2xpY2spPVxcXCJkcm9wTWVudSgpXFxcIj5cXHJcXG5cXHQ8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG48ZGl2IGNsYXNzPVxcXCJjYXJldFxcXCIgaWQ9XFxcImRyb3Bkb3duLWNhcmV0XFxcIj48L2Rpdj5cXHJcXG48ZGl2IGNsYXNzPVxcXCJkcm9wZG93blxcXCIgaWQ9XFxcImRyb3Bkb3duLW1lbnVcXFwiPlxcclxcblxcdDxkaXYgY2xhc3M9XFxcImRyb3Bkb3duLW9wdGlvblxcXCIgKGNsaWNrKT1cXFwidG9Ib21lKClcXFwiPlxcclxcblxcdFxcdDxzcGFuPkhvbWU8L3NwYW4+XFxyXFxuXFx0PC9kaXY+XFxyXFxuXFx0PGRpdiBjbGFzcz1cXFwiZHJvcGRvd24tb3B0aW9uXFxcIiAoY2xpY2spPVxcXCJ0b1NldHRpbmdzKClcXFwiPlxcclxcblxcdFxcdDxzcGFuPlNldHRpbmdzPC9zcGFuPlxcclxcblxcdDwvZGl2PlxcclxcblxcdDxkaXYgY2xhc3M9XFxcImRyb3Bkb3duLW9wdGlvblxcXCIgKGNsaWNrKT1cXFwibG9nb3V0KClcXFwiPlxcclxcblxcdFxcdDxzcGFuPkxvZ291dDwvc3Bhbj5cXHJcXG5cXHQ8L2Rpdj5cXHJcXG5cXHQ8ZGl2IGNsYXNzPVxcXCJkcm9wZG93bi1vcHRpb24gZ3JvdXAtdHdvXFxcIiAoY2xpY2spPVxcXCJkcm9wTWVudSgpXFxcIj5cXHJcXG5cXHRcXHQ8c3Bhbj5DbG9zZTwvc3Bhbj5cXHJcXG5cXHQ8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG4tLT5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVHJhbnNmZXJTZXJ2aWNlIH0gZnJvbSAnLi4vZGF0YXRyYW5zZmVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHtQYWdlfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2UnO1xyXG5pbXBvcnQgeyBBY3Rpb25CYXIsIEFjdGlvbkl0ZW0gfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2FjdGlvbi1iYXInO1xyXG5pbXBvcnQgKiBhcyBkb20gZnJvbSAnbmF0aXZlc2NyaXB0LWRvbSc7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvYnV0dG9uJztcclxuaW1wb3J0IHsgVGFiVmlldyB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3RhYi12aWV3XCI7XHJcbmltcG9ydCB7IFNlbGVjdGVkSW5kZXhDaGFuZ2VkRXZlbnREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvdGFiLXZpZXdcIjtcclxuaW1wb3J0IHsgTGlzdFZpZXcgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9saXN0LXZpZXdcIjtcclxuaW1wb3J0ICogYXMgYXBwbGljYXRpb24gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIjtcclxuaW1wb3J0IHsgQW5kcm9pZEFwcGxpY2F0aW9uLCBBbmRyb2lkQWN0aXZpdHlCYWNrUHJlc3NlZEV2ZW50RGF0YSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCI7XHJcbmltcG9ydCB7IGlzQW5kcm9pZCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1uYXZpZ2F0aW9uJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbmF2aWdhdGlvbi5jb21wb25lbnQudG5zLmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL25hdmlnYXRpb24uY29tcG9uZW50LnRucy5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmF2aWdhdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdHJhbnNmZXJTZXJ2aWNlOiBUcmFuc2ZlclNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zLCBwcml2YXRlIHBhZ2U6IFBhZ2UpIHsgfVxyXG5cclxuICBAVmlld0NoaWxkKCd0YWJWaWV3JywgeyBzdGF0aWM6IHRydWUgfSkgdHY6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgnYWN0aW9uQmFyJywgeyBzdGF0aWM6IHRydWUgfSkgYWI6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgnYWN0aW9uSXRlbScsIHsgc3RhdGljOiB0cnVlIH0pIGFpOiBFbGVtZW50UmVmO1xyXG4gIHVzZXI7XHJcbiAgYWN0aXZlYnRuO1xyXG4gIHRhYlNlbGVjdGVkSW5kZXggPSAwO1xyXG4gIGFjdGlvbkJhclRpdGxlID0gJ0hvbWUnO1xyXG4gIGhvbWVUYWIgPSB7aWNvblNvdXJjZTogJ3JlczovL2hvbWVfaGlnaGxpZ2h0ZWQnfTtcclxuICBzZWFyY2hUYWIgPSB7aWNvblNvdXJjZTogJ3JlczovL3NlYXJjaCd9O1xyXG4gIGhpc3RvcnlUYWIgPSB7aWNvblNvdXJjZTogJ3JlczovL2hpc3RvcnknfTtcclxuICBzZXR0aW5nc1RhYiA9IHtpY29uU291cmNlOiAncmVzOi8vc2V0dGluZ3MnfTtcclxuICBhY3Rpb25JdGVtIDogQWN0aW9uSXRlbTtcclxuXHJcbiAgLy8gQFZpZXdDaGlsZCgnbGlzdFZpZXcnKSBsdjogRWxlbWVudFJlZjtcclxuICAvLyBsaXN0VmlldyA9IDxMaXN0Vmlldz4gdGhpcy5sdi5uYXRpdmVFbGVtZW50O1xyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuYWN0aW9uSXRlbSA9IDxBY3Rpb25JdGVtPiB0aGlzLmFpLm5hdGl2ZUVsZW1lbnQ7XHJcblxyXG4gIFx0dGhpcy5hY3RpdmVidG4gPSB0aGlzLnRyYW5zZmVyU2VydmljZS5nZXREYXRhKCk7XHJcbiAgXHRpZih0aGlzLmFjdGl2ZWJ0biA9PSBcImhvbWVuYXZcIikge1xyXG4gICAgICB0aGlzLmhvbWVUYWIgPSB7aWNvblNvdXJjZTogJ3JlczovL2hvbWVfaGlnaGxpZ2h0ZWQnfTtcclxuICAgICAgdGhpcy5zZWFyY2hUYWIgPSB7aWNvblNvdXJjZTogJ3JlczovL3NlYXJjaCd9O1xyXG4gICAgICB0aGlzLmhpc3RvcnlUYWIgPSB7aWNvblNvdXJjZTogJ3JlczovL2hpc3RvcnknfTtcclxuICAgICAgdGhpcy5zZXR0aW5nc1RhYiA9IHtpY29uU291cmNlOiAncmVzOi8vc2V0dGluZ3MnfTtcclxuICAgICAgdGhpcy5hY3Rpb25JdGVtLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XHJcbiAgICAgIHRoaXMudGFiU2VsZWN0ZWRJbmRleCA9IDA7XHJcbiAgXHR9IGVsc2UgaWYodGhpcy5hY3RpdmVidG4gPT0gXCJzZWFyY2huYXZcIikge1xyXG4gICAgICB0aGlzLmhvbWVUYWIgPSB7aWNvblNvdXJjZTogJ3JlczovL2hvbWUnfTtcclxuICAgICAgdGhpcy5zZWFyY2hUYWIgPSB7aWNvblNvdXJjZTogJ3JlczovL3NlYXJjaF9oaWdobGlnaHRlZCd9O1xyXG4gICAgICB0aGlzLmhpc3RvcnlUYWIgPSB7aWNvblNvdXJjZTogJ3JlczovL2hpc3RvcnknfTtcclxuICAgICAgdGhpcy5zZXR0aW5nc1RhYiA9IHtpY29uU291cmNlOiAncmVzOi8vc2V0dGluZ3MnfTtcclxuICAgICAgdGhpcy5hY3Rpb25JdGVtLnZpc2liaWxpdHkgPSAnY29sbGFwc2UnO1xyXG4gICAgICB0aGlzLnRhYlNlbGVjdGVkSW5kZXggPSAxO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZih0aGlzLmFjdGl2ZWJ0biA9PSBcImhpc3RvcnluYXZcIikge1xyXG4gICAgICB0aGlzLmhvbWVUYWIgPSB7aWNvblNvdXJjZTogJ3JlczovL2hvbWUnfTtcclxuICAgICAgdGhpcy5zZWFyY2hUYWIgPSB7aWNvblNvdXJjZTogJ3JlczovL3NlYXJjaCd9O1xyXG4gICAgICB0aGlzLmhpc3RvcnlUYWIgPSB7aWNvblNvdXJjZTogJ3JlczovL2hpc3RvcnlfaGlnaGxpZ2h0ZWQnfTtcclxuICAgICAgdGhpcy5zZXR0aW5nc1RhYiA9IHtpY29uU291cmNlOiAncmVzOi8vc2V0dGluZ3MnfTtcclxuICAgICAgdGhpcy5hY3Rpb25JdGVtLnZpc2liaWxpdHkgPSAnY29sbGFwc2UnO1xyXG4gICAgICB0aGlzLnRhYlNlbGVjdGVkSW5kZXggPSAyO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZih0aGlzLmFjdGl2ZWJ0biA9PSBcInNldHRpbmdzbmF2XCIpIHtcclxuICAgICAgdGhpcy5ob21lVGFiID0ge2ljb25Tb3VyY2U6ICdyZXM6Ly9ob21lJ307XHJcbiAgICAgIHRoaXMuc2VhcmNoVGFiID0ge2ljb25Tb3VyY2U6ICdyZXM6Ly9zZWFyY2gnfTtcclxuICAgICAgdGhpcy5oaXN0b3J5VGFiID0ge2ljb25Tb3VyY2U6ICdyZXM6Ly9oaXN0b3J5J307XHJcbiAgICAgIHRoaXMuc2V0dGluZ3NUYWIgPSB7aWNvblNvdXJjZTogJ3JlczovL3NldHRpbmdzX2hpZ2hsaWdodGVkJ307XHJcbiAgICAgIHRoaXMuYWN0aW9uSXRlbS52aXNpYmlsaXR5ID0gJ2NvbGxhcHNlJztcclxuICAgICAgdGhpcy50YWJTZWxlY3RlZEluZGV4ID0gMztcclxuICAgIH1cclxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMudGFiU2VsZWN0ZWRJbmRleClcclxuXHJcbiAgICAvLyB2YXIganVzdFNldCA9IGZhbHNlO1xyXG5cclxuICAgIC8vIGlmKGlzQW5kcm9pZClcclxuICAgIC8vICAgYXBwbGljYXRpb24uYW5kcm9pZC5vbihBbmRyb2lkQXBwbGljYXRpb24uYWN0aXZpdHlCYWNrUHJlc3NlZEV2ZW50LCAoZGF0YTogQW5kcm9pZEFjdGl2aXR5QmFja1ByZXNzZWRFdmVudERhdGEpID0+IHtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyh0aGlzLnRhYlNlbGVjdGVkSW5kZXgpXHJcbiAgICAvLyAgIGlmICh0aGlzLnRhYlNlbGVjdGVkSW5kZXggPT09IDAgJiYgIWp1c3RTZXQpIHtcclxuICAgIC8vICAgICBhcHBsaWNhdGlvbi5hbmRyb2lkLmZvcmVncm91bmRBY3Rpdml0eS5maW5pc2goKTtcclxuICAgIC8vICAgfVxyXG4gICAgLy8gICBlbHNlIHtcclxuICAgIC8vICAgICB0aGlzLnR2Lm5hdGl2ZUVsZW1lbnQuc2VsZWN0ZWRJbmRleCA9IDA7XHJcbiAgICAvLyAgICAganVzdFNldCA9IHRydWU7XHJcbiAgICAvLyAgICAgc2V0VGltZW91dCgoKSA9PiB7anVzdFNldCA9IGZhbHNlfSwgNTAwKTtcclxuICAgIC8vICAgfVxyXG4gICAgLy8gfSk7XHJcbiAgfVxyXG4gIHBhaW50QWN0aXZlKGJ0bikge1xyXG4gIFx0Y29uc3QgbmF2Y29udGVudHMgPSBkb20uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmF2aWdhdGlvbicpXHJcbiAgICBmb3IodmFyIHggPSAwOyB4IDwgbmF2Y29udGVudHMubGVuZ3RoOyB4KyspXHJcbiAgICB7XHJcbiAgICAgICAgbmF2Y29udGVudHNbeF0uY2xhc3NOYW1lID0gJ25hdmlnYXRpb24nO1xyXG4gICAgfVxyXG4gICAgY29uc3QgYnV0dG9uID0gPEJ1dHRvbj50aGlzLnBhZ2UuZ2V0Vmlld0J5SWQoYnRuKTtcclxuICAgIGJ1dHRvbi5jbGFzc05hbWUgKz0gJyBhY3RpdmUnO1xyXG5cclxuICB9XHJcblxyXG4gIG9uU2VsZWN0ZWRJbmRleENoYW5nZWQoYXJnczogU2VsZWN0ZWRJbmRleENoYW5nZWRFdmVudERhdGEpIHtcclxuICAgICAgICBpZiAoYXJncy5vbGRJbmRleCAhPT0gLTEpIHtcclxuICAgICAgICAgICAgY29uc3QgbmV3SW5kZXggPSBhcmdzLm5ld0luZGV4O1xyXG4gICAgICAgICAgICBpZiAobmV3SW5kZXggPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWN0aW9uQmFyVGl0bGUgPSAnSG9tZSc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvSG9tZSgpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG5ld0luZGV4ID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGlvbkJhclRpdGxlID0gJ1NlYXJjaCc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvU2VhcmNoKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobmV3SW5kZXggPT09IDIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWN0aW9uQmFyVGl0bGUgPSAnWW91ciBQb3N0cyc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvSGlzdG9yeSgpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG5ld0luZGV4ID09PSAzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGlvbkJhclRpdGxlID0gJ1NldHRpbmdzJztcclxuICAgICAgICAgICAgICAgIHRoaXMudG9TZXR0aW5ncygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICBob21lKCkge1xyXG4gICAgaWYodGhpcy50YWJTZWxlY3RlZEluZGV4ID09IDApXHJcbiAgICB7XHJcbiAgICAgIGxldCBsaXN0VmlldyA9IDxMaXN0Vmlldz4gdGhpcy5wYWdlLmdldFZpZXdCeUlkKCdsaXN0VmlldycpO1xyXG4gICAgICBsaXN0Vmlldy5zY3JvbGxUb0luZGV4KDApO1xyXG4gICAgfVxyXG4gICAgdGhpcy5hY3Rpb25JdGVtLnZpc2liaWxpdHkgPSAnY29sbGFwc2UnO1xyXG4gIH1cclxuXHJcbiAgdG9Ib21lKCkge1xyXG4gIFx0Ly8gdGhpcy50cmFuc2ZlclNlcnZpY2Uuc2V0RGF0YSgnaG9tZW5hdicpO1xyXG5cdCAgLy8gdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydob21lJ10pO1xyXG4gICAgdGhpcy5ob21lVGFiID0ge2ljb25Tb3VyY2U6ICdyZXM6Ly9ob21lX2hpZ2hsaWdodGVkJ307XHJcbiAgICB0aGlzLnNlYXJjaFRhYiA9IHtpY29uU291cmNlOiAncmVzOi8vc2VhcmNoJ307XHJcbiAgICB0aGlzLmhpc3RvcnlUYWIgPSB7aWNvblNvdXJjZTogJ3JlczovL2hpc3RvcnknfTtcclxuICAgIHRoaXMuc2V0dGluZ3NUYWIgPSB7aWNvblNvdXJjZTogJ3JlczovL3NldHRpbmdzJ307XHJcbiAgICB0aGlzLmFjdGlvbkl0ZW0udmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcclxuICAgIHRoaXMudGFiU2VsZWN0ZWRJbmRleCA9IDA7XHJcbiAgfVxyXG5cclxuICB0b1NlYXJjaCgpXHJcblx0e1xyXG5cdFx0Ly8gdGhpcy50cmFuc2ZlclNlcnZpY2Uuc2V0RGF0YSgnaGlzdG9yeW5hdicpO1xyXG5cdFx0Ly8gdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydoaXN0b3J5J10pO1xyXG4gICAgdGhpcy5ob21lVGFiID0ge2ljb25Tb3VyY2U6ICdyZXM6Ly9ob21lJ307XHJcbiAgICB0aGlzLnNlYXJjaFRhYiA9IHtpY29uU291cmNlOiAncmVzOi8vc2VhcmNoX2hpZ2hsaWdodGVkJ307XHJcbiAgICB0aGlzLmhpc3RvcnlUYWIgPSB7aWNvblNvdXJjZTogJ3JlczovL2hpc3RvcnknfTtcclxuICAgIHRoaXMuc2V0dGluZ3NUYWIgPSB7aWNvblNvdXJjZTogJ3JlczovL3NldHRpbmdzJ307XHJcbiAgICB0aGlzLmFjdGlvbkl0ZW0udmlzaWJpbGl0eSA9ICdjb2xsYXBzZSc7XHJcbiAgICB0aGlzLnRhYlNlbGVjdGVkSW5kZXggPSAxO1xyXG5cdH1cclxuXHJcblx0dG9IaXN0b3J5KClcclxuXHR7XHJcblx0XHQvLyB0aGlzLnRyYW5zZmVyU2VydmljZS5zZXREYXRhKCdzZXR0aW5nc25hdicpO1xyXG5cdFx0Ly8gdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydzZXR0aW5ncyddKTtcclxuICAgIHRoaXMuaG9tZVRhYiA9IHtpY29uU291cmNlOiAncmVzOi8vaG9tZSd9O1xyXG4gICAgdGhpcy5zZWFyY2hUYWIgPSB7aWNvblNvdXJjZTogJ3JlczovL3NlYXJjaCd9O1xyXG4gICAgdGhpcy5oaXN0b3J5VGFiID0ge2ljb25Tb3VyY2U6ICdyZXM6Ly9oaXN0b3J5X2hpZ2hsaWdodGVkJ307XHJcbiAgICB0aGlzLnNldHRpbmdzVGFiID0ge2ljb25Tb3VyY2U6ICdyZXM6Ly9zZXR0aW5ncyd9O1xyXG4gICAgdGhpcy5hY3Rpb25JdGVtLnZpc2liaWxpdHkgPSAnY29sbGFwc2UnO1xyXG4gICAgdGhpcy50YWJTZWxlY3RlZEluZGV4ID0gMjtcclxuXHR9XHJcblxyXG4gIHRvU2V0dGluZ3MoKVxyXG4gIHtcclxuICAgIC8vIHRoaXMudHJhbnNmZXJTZXJ2aWNlLnNldERhdGEoJ3NlYXJjaG5hdicpO1xyXG4gICAgLy8gdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydzZWFyY2gnXSk7XHJcbiAgICB0aGlzLmhvbWVUYWIgPSB7aWNvblNvdXJjZTogJ3JlczovL2hvbWUnfTtcclxuICAgIHRoaXMuc2VhcmNoVGFiID0ge2ljb25Tb3VyY2U6ICdyZXM6Ly9zZWFyY2gnfTtcclxuICAgIHRoaXMuaGlzdG9yeVRhYiA9IHtpY29uU291cmNlOiAncmVzOi8vaGlzdG9yeSd9O1xyXG4gICAgdGhpcy5zZXR0aW5nc1RhYiA9IHtpY29uU291cmNlOiAncmVzOi8vc2V0dGluZ3NfaGlnaGxpZ2h0ZWQnfTtcclxuICAgIHRoaXMuYWN0aW9uSXRlbS52aXNpYmlsaXR5ID0gJ2NvbGxhcHNlJztcclxuICAgIHRoaXMudGFiU2VsZWN0ZWRJbmRleCA9IDM7XHJcbiAgfVxyXG5cclxuICB0b01lc3NhZ2VzKClcclxuICB7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ2NoYXQtbGlzdCddKVxyXG4gIH1cclxuXHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi8qIEFkZCBtb2JpbGUgc3R5bGVzIGZvciB0aGUgY29tcG9uZW50IGhlcmUuICAqL1xcbi5yZW1vdmUtcGF5bWVudC1sYWJlbCB7XFxuXFx0Zm9udC1zaXplOiAxNjtcXG5cXHRjb2xvcjogI2FjMDBlNjtcXG5cXHRtYXJnaW4tbGVmdDogMTg7XFxuXFx0dGV4dC1hbGlnbjogbGVmdDtcXG5cXHRwYWRkaW5nOiAxODtcXG59XFxuXFxuLmluZm8tbGFiZWwge1xcblxcdGNvbG9yOiBibGFjaztcXG5cXHRmb250LXNpemU6IDI0O1xcblxcdHRleHQtYWxpZ246IGxlZnQ7XFxuXFx0bWFyZ2luLWxlZnQ6IDM2O1xcblxcdG1hcmdpbi10b3A6IDM2O1xcbn1cXG5cXG4uZGV0YWlscy1sYWJlbCB7XFxuXFx0Y29sb3I6IGJsYWNrO1xcblxcdGZvbnQtc2l6ZTogMTY7XFxuXFx0dGV4dC1hbGlnbjogbGVmdDtcXG5cXHRtYXJnaW4tbGVmdDogMzY7XFxuXFx0bWFyZ2luLXRvcDogMTg7XFxuXFx0bWFyZ2luLWJvdHRvbTogNzI7XFxufVxcblxcbi5hY3Rpdml0eS1pbmRpY2F0b3Ige1xcblxcdGNvbG9yOiAjYWMwMGU2O1xcbn1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8UGFnZT5cXHJcXG5cXHQ8UGFnZS5hY3Rpb25CYXI+XFxyXFxuXFx0XFx0PEFjdGlvbkJhciB0aXRsZT1cXFwiUGF5bWVudCBJbmZvXFxcIj5cXHJcXG5cXHRcXHQgIDxOYXZpZ2F0aW9uQnV0dG9uIHRleHQ9XFxcIkdvIEJhY2tcXFwiIGFuZHJvaWQuc3lzdGVtSWNvbj1cXFwiaWNfbWVudV9iYWNrXFxcIiAodGFwKT1cXFwib25OYXZCdG5UYXAoKVxcXCI+PC9OYXZpZ2F0aW9uQnV0dG9uPlxcclxcblxcdFxcdDwvQWN0aW9uQmFyPlxcclxcblxcdDwvUGFnZS5hY3Rpb25CYXI+XFxyXFxuXFxyXFxuXFx0PFN0YWNrTGF5b3V0ICNpbmZvQ29udGFpbmVyPlxcclxcblxcdFxcdDxTdGFja0xheW91dD5cXHJcXG5cXHRcXHRcXHQ8TGFiZWwgdGV4dFdyYXA9XFxcInRydWVcXFwiIHRleHQ9XFxcInt7IHBheW1lbnRJbmZvLnR5cGUgfX1cXFwiIGNsYXNzPVxcXCJpbmZvLWxhYmVsXFxcIj48L0xhYmVsPlxcclxcblxcdFxcdFxcdDxMYWJlbCB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgdGV4dD1cXFwie3sgcGF5bWVudEluZm8uaW5mbyB9fVxcXCIgY2xhc3M9XFxcImRldGFpbHMtbGFiZWxcXFwiPjwvTGFiZWw+XFxyXFxuXFx0XFx0PC9TdGFja0xheW91dD5cXHJcXG5cXHRcXHQ8U3RhY2tMYXlvdXQgKHRhcCk9XFxcInJlbW92ZSgpXFxcIj5cXHJcXG5cXHRcXHRcXHQ8TGFiZWwgdGV4dFdyYXA9XFxcInRydWVcXFwiIHRleHQ9XFxcIlJlbW92ZVxcXCIgY2xhc3M9XFxcInJlbW92ZS1wYXltZW50LWxhYmVsXFxcIj48L0xhYmVsPlxcclxcblxcdFxcdDwvU3RhY2tMYXlvdXQ+ICBcXHJcXG5cXHQ8L1N0YWNrTGF5b3V0PlxcclxcbjwvUGFnZT5cXHJcXG48QWN0aXZpdHlJbmRpY2F0b3Igcm93PVxcXCIxXFxcIiAjYWN0aXZpdHlJbmRpY2F0b3IgYnVzeT1cXFwiZmFsc2VcXFwiIHdpZHRoPVxcXCI0MFxcXCIgaGVpZ2h0PVxcXCI0MFxcXCIgY2xhc3M9XFxcImFjdGl2aXR5LWluZGljYXRvclxcXCI+XFxyXFxuPC9BY3Rpdml0eUluZGljYXRvcj5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVHJhbnNmZXJTZXJ2aWNlIH0gZnJvbSAnLi4vZGF0YXRyYW5zZmVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQYXltZW50U2VydmljZSB9IGZyb20gJy4uL3BheW1lbnQuc2VydmljZS50bnMnO1xyXG5cclxuLy8gaW1wb3J0IHsgTW9kYWxEaWFsb2dQYXJhbXMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZGlyZWN0aXZlcy9kaWFsb2dzXCI7XHJcbmltcG9ydCB7IE1vZGFsRGlhbG9nU2VydmljZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9kaXJlY3RpdmVzL2RpYWxvZ3NcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IENvbmZpcm1hdGlvbkNvbXBvbmVudCB9IGZyb20gJy4uL2NvbmZpcm1hdGlvbi9jb25maXJtYXRpb24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgaXNBbmRyb2lkLCBpc0lPUywgZGV2aWNlLCBzY3JlZW4gfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtJztcclxuaW1wb3J0IHsgYW5kcm9pZCBhcyBhbmRyb2lkQXBwLCBpb3MgYXMgaW9zQXBwIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIjtcclxuaW1wb3J0IHsgQWN0aXZpdHlJbmRpY2F0b3IgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2FjdGl2aXR5LWluZGljYXRvcic7XHJcbmltcG9ydCB7IFN0YWNrTGF5b3V0IH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9sYXlvdXRzL3N0YWNrLWxheW91dCc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtcGF5bWVudC1pbmZvJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcGF5bWVudC1pbmZvLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9wYXltZW50LWluZm8uY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQYXltZW50SW5mb0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdHJhbnNmZXJTZXJ2aWNlOiBUcmFuc2ZlclNlcnZpY2UsIHByaXZhdGUgcGF5bWVudFNlcnZpY2U6IFBheW1lbnRTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucyxcclxuICBcdHByaXZhdGUgdmNSZWY6IFZpZXdDb250YWluZXJSZWYsIHByaXZhdGUgbW9kYWw6IE1vZGFsRGlhbG9nU2VydmljZSkgeyB9XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ2FjdGl2aXR5SW5kaWNhdG9yJywgeyBzdGF0aWM6IHRydWUgfSkgYUk6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgnaW5mb0NvbnRhaW5lcicsIHsgc3RhdGljOiB0cnVlIH0pIGlDOiBFbGVtZW50UmVmO1xyXG4gIFxyXG5cclxuICBwYXltZW50SW5mbyA9IHtcclxuICBcdHBheW1lbnRUeXBlOiBcImxvYWRpbmdcIixcclxuICBcdGluZm86IFwibG9hZGluZ1wiLFxyXG4gIFx0aWRUb2tlbjogXCJsb2FkaW5nXCIsXHJcbiAgXHR0eXBlOiBcImxvYWRpbmdcIlxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgXHR0aGlzLnBheW1lbnRJbmZvID0gdGhpcy50cmFuc2ZlclNlcnZpY2UuZ2V0RGF0YSgpO1xyXG4gIFx0Ly8gY29uc29sZS5sb2codGhpcy5wYXltZW50SW5mbyk7XHJcbiAgfVxyXG5cclxuICByZW1vdmUoKSB7XHJcbiAgXHRsZXQgb3B0aW9ucyA9IHtcclxuICAgICAgICBjb250ZXh0OiB7fSxcclxuICAgICAgICBmdWxsc2NyZWVuOiBmYWxzZSxcclxuICAgICAgICB2aWV3Q29udGFpbmVyUmVmOiB0aGlzLnZjUmVmLFxyXG4gICAgICAgIGFuaW1hdGVkOiB0cnVlLFxyXG4gICAgICAgIC8vIHRyYW5zaXRpb246IHsgbmFtZTogXCJzbGlkZVRvcFwiIH1cclxuICAgIH07XHJcbiAgICBcclxuICAgIHRoaXMubW9kYWwuc2hvd01vZGFsKENvbmZpcm1hdGlvbkNvbXBvbmVudCwgb3B0aW9ucykudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgXHRpZihyZXN1bHQgPT0gXCJkZWxldGVcIikge1xyXG4gICAgXHRcdHZhciBpbmZvQ29udGFpbmVyID0gPFN0YWNrTGF5b3V0PiB0aGlzLmlDLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICBcdFx0aW5mb0NvbnRhaW5lci5zdHlsZS52aXNpYmlsaXR5ID0gXCJjb2xsYXBzZVwiO1xyXG4gICAgXHRcdHRoaXMuc2hvd0J1c3koKTtcclxuICAgIFx0XHR0aGlzLnBheW1lbnRTZXJ2aWNlLnJlbW92ZVBheW1lbnRNZXRob2RGcm9tVXNlcih0aGlzLnBheW1lbnRJbmZvLmlkVG9rZW4pLnN1YnNjcmliZSgocmVzKSA9PiB7XHJcblx0XHRcdCAgXHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ3BheW1lbnRzJ10pO1xyXG5cdFx0ICBcdH0pO1xyXG4gICAgXHR9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG9uTmF2QnRuVGFwKCkge1xyXG4gIFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUoWydwYXltZW50cyddKTtcclxuICB9XHJcblxyXG4gIHNob3dCdXN5KCkge1xyXG4gIFx0dmFyIGFjdGl2aXR5SW5kaWNhdG9yID0gPEFjdGl2aXR5SW5kaWNhdG9yPiB0aGlzLmFJLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgXHRhY3Rpdml0eUluZGljYXRvci5idXN5ID0gdHJ1ZTtcclxuICB9XHJcblxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCIvKlxcbkFkZCB5b3VyIE5hdGl2ZVNjcmlwdCBzcGVjaWZpYyBzdHlsZXMgaGVyZS5cXG5UbyBsZWFybiBtb3JlIGFib3V0IHN0eWxpbmcgaW4gTmF0aXZlU2NyaXB0IHNlZTpcXG5odHRwczovL2RvY3MubmF0aXZlc2NyaXB0Lm9yZy9hbmd1bGFyL3VpL3N0eWxpbmdcXG4qL1wiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxTdGFja0xheW91dD5cXG4gIDxMYWJlbCB0ZXh0PVxcXCJwYXltZW50LW1ldGhvZCB3b3Jrc1xcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiPjwvTGFiZWw+XFxuICA8TGFiZWwgdGV4dD1cXFwiVGhpcyBpcyBhIG1pZ3JhdGVkIGNvbXBvbmVudFxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiPjwvTGFiZWw+XFxuICA8TGFiZWwgdGV4dD1cXFwiVXBkYXRlIGl0IHRvIHByb3ZpZGUgdGhlIFVJIGVsZW1lbnRzIHJlcXVpcmVkIGluIHlvdXIgbW9iaWxlIGFwcFxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiPjwvTGFiZWw+XFxuPC9TdGFja0xheW91dD5cXG5cXG48IS0tXFxuT3JpZ2luYWwgV2ViIHRlbXBsYXRlOlxcblxcbjxkaXYgY2xhc3M9XFxcInBheW1lbnQtbWV0aG9kXFxcIj5cXHJcXG5cXHQ8c3BhbiBjbGFzcz1cXFwicGF5bWVudC10eXBlLWljb25cXFwiPjwvc3Bhbj5cXHJcXG5cXHQ8c3BhbiBjbGFzcz1cXFwicGF5bWVudC10eXBlLWRldGFpbHNcXFwiPjwvc3Bhbj5cXHJcXG48L2Rpdj5cXG4tLT5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1wYXltZW50LW1ldGhvZCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3BheW1lbnQtbWV0aG9kLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9wYXltZW50LW1ldGhvZC5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFBheW1lbnRNZXRob2RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFBheW1lbnRTZXJ2aWNlIHtcclxuICAvLyB1cmkgPSAnaHR0cDovL2xvY2FsaG9zdDo0MDAwJztcclxuICAvL0FkYW0ncyBUZXN0aW5nIFNlcnZlclxyXG4gIC8vIHVyaSA9ICdodHRwOi8vMTkyLjE2OC4xLjc6NDAwMCc7XHJcbiAgLy9QaGlsbGlwJ3MgVGVzdGluZyBTZXJ2ZXJcclxuXHQvLyB1cmkgPSAnaHR0cDovLzE5Mi4xNjguMS4zOjQwMDAnO1xyXG4gIC8vRmlyZWJhc2UgY2xvdWQgZnVuY3Rpb25zXHJcbiAgdXJpID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtY29sbGVnZXBvb2wtMTU1Mjc0OTExODYxNy5jbG91ZGZ1bmN0aW9ucy5uZXQnO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHsgfVxyXG5cclxuICBhZGRQYXltZW50VXNlcihpZCwgdXNlcm5hbWUsIG5hbWUsIGVtYWlsKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhgJHt0aGlzLnVyaX0vYWRkQ3VzdG9tZXIvJHt1c2VybmFtZX1gKVxyXG4gIFx0Ly8gcmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy51cml9L2N1c3RvbWVycy9hZGQvJHt1c2VybmFtZX1gKTtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke3RoaXMudXJpfS9hZGRDdXN0b21lcj91c2VybmFtZT0ke3VzZXJuYW1lfWApO1xyXG4gIH1cclxuXHJcbiAgZ2V0UGF5bWVudFVzZXJCeUlkKGlkKSB7XHJcbiAgICAvLyByZXR1cm4gdGhpcy5odHRwLmdldChgJHt0aGlzLnVyaX0vY3VzdG9tZXJzLyR7aWR9YCk7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldChgJHt0aGlzLnVyaX0vZ2V0Q3VzdG9tZXI/aWQ9JHtpZH1gKTtcclxuICB9XHJcblxyXG4gIGFkZFBheW1lbnRNZXRob2RUb1VzZXIoaWQsIG5vbmNlKSB7XHJcbiAgXHRjb25zdCBib2R5ID0ge1xyXG4gIFx0XHRpZDogaWQsXHJcbiAgXHRcdG5vbmNlOiBub25jZVxyXG4gIFx0fTtcclxuICBcdC8vIHJldHVybiB0aGlzLmh0dHAucG9zdChgaHR0cDovLzE5Mi4xNjguMS43OjQwMDAvY3VzdG9tZXJzL3BheW1lbnQvYCwgYm9keSk7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoYCR7dGhpcy51cml9L2FkZFBheW1lbnQ/YCwgYm9keSlcclxuICB9XHJcblxyXG4gIHJlbW92ZVBheW1lbnRNZXRob2RGcm9tVXNlcih0b2tlbikge1xyXG4gIFx0cmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy51cml9L3JlbW92ZVBheW1lbnQ/dG9rZW49JHt0b2tlbn1gKTtcclxuICB9XHJcblxyXG4gIGdldElkVG9rZW4oaWQpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke3RoaXMudXJpfS9nZXRUb2tlbj9pZD0ke2lkfWApO1xyXG4gIH1cclxuICBcclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQYXltZW50U2VydmljZSB7XHJcbiAgLy8gdXJpID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6NDAwMCc7XHJcbiAgLy9BZGFtJ3MgVGVzdGluZyBTZXJ2ZXJcclxuICAvLyB1cmkgPSAnaHR0cDovLzE5Mi4xNjguMS43OjQwMDAnO1xyXG4gIC8vUGhpbGxpcCdzIFRlc3RpbmcgU2VydmVyXHJcblx0Ly8gdXJpID0gJ2h0dHA6Ly8xOTIuMTY4LjEuMzo0MDAwJztcclxuICAvL0ZpcmViYXNlIGNsb3VkIGZ1bmN0aW9uc1xyXG4gIHVyaSA9ICdodHRwczovL3VzLWNlbnRyYWwxLWNvbGxlZ2Vwb29sLTE1NTI3NDkxMTg2MTcuY2xvdWRmdW5jdGlvbnMubmV0JztcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7IH1cclxuXHJcbiAgYWRkUGF5bWVudFVzZXIoaWQsIHVzZXJuYW1lLCBuYW1lLCBlbWFpbCkge1xyXG4gICAgLy8gY29uc29sZS5sb2coYCR7dGhpcy51cml9L2FkZEN1c3RvbWVyLyR7dXNlcm5hbWV9YClcclxuICBcdC8vIHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke3RoaXMudXJpfS9jdXN0b21lcnMvYWRkLyR7dXNlcm5hbWV9YCk7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldChgJHt0aGlzLnVyaX0vYWRkQ3VzdG9tZXI/dXNlcm5hbWU9JHt1c2VybmFtZX1gKTtcclxuICB9XHJcblxyXG4gIGdldFBheW1lbnRVc2VyQnlJZChpZCkge1xyXG4gICAgLy8gcmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy51cml9L2N1c3RvbWVycy8ke2lkfWApO1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy51cml9L2dldEN1c3RvbWVyP2lkPSR7aWR9YCk7XHJcbiAgfVxyXG5cclxuICBhZGRQYXltZW50TWV0aG9kVG9Vc2VyKGlkLCBub25jZSkge1xyXG4gIFx0Y29uc3QgYm9keSA9IHtcclxuICBcdFx0aWQ6IGlkLFxyXG4gIFx0XHRub25jZTogbm9uY2VcclxuICBcdH07XHJcbiAgXHQvLyByZXR1cm4gdGhpcy5odHRwLnBvc3QoYGh0dHA6Ly8xOTIuMTY4LjEuNzo0MDAwL2N1c3RvbWVycy9wYXltZW50L2AsIGJvZHkpO1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KGAke3RoaXMudXJpfS9hZGRQYXltZW50P2AsIGJvZHkpXHJcbiAgfVxyXG5cclxuICByZW1vdmVQYXltZW50TWV0aG9kRnJvbVVzZXIodG9rZW4pIHtcclxuICBcdHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke3RoaXMudXJpfS9yZW1vdmVQYXltZW50P3Rva2VuPSR7dG9rZW59YCk7XHJcbiAgfVxyXG5cclxuICBnZXRJZFRva2VuKGlkKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldChgJHt0aGlzLnVyaX0vZ2V0VG9rZW4/aWQ9JHtpZH1gKTtcclxuICB9XHJcbiAgXHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi5wYXltZW50LXR5cGUtaWNvbiB7XFxyXFxuXFx0aGVpZ2h0OiAzNDtcXHJcXG5cXHR3aWR0aDogMzQ7XFxyXFxuXFx0YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcblxcdG1hcmdpbi10b3A6IDE4O1xcclxcblxcdG1hcmdpbi1ib3R0b206IDE4O1xcclxcblxcdG1hcmdpbi1sZWZ0OiAzNjtcXHJcXG59XFxyXFxuXFxyXFxuLnBheW1lbnQtaW5mby1sYWJlbCB7XFxyXFxuXFx0Zm9udC1zaXplOiAxNjtcXHJcXG5cXHQvKmZvbnQtd2VpZ2h0OiA3MDA7Ki9cXHJcXG5cXHRwYWRkaW5nOiAzMDtcXHJcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFx0Y29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLXBheW1lbnQtbGFiZWwge1xcclxcblxcdGZvbnQtc2l6ZTogMTY7XFxyXFxuXFx0Y29sb3I6ICNhYzAwZTY7XFxyXFxuXFx0bWFyZ2luLWxlZnQ6IDM2O1xcclxcblxcdHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuXFx0cGFkZGluZzogMTg7XFxyXFxufVxcclxcblxcclxcbi5jcmVkaXQtY2FyZC1pY29uIHtcXHJcXG5cXHRjb250ZW50OiB1cmwoXFxcIn4vaW1nL2NyZWRpdC1jYXJkLWljb24ucG5nXFxcIik7XFxyXFxufVxcclxcblxcclxcbi5wYXlwYWwtaWNvbiB7XFxyXFxuXFx0Y29udGVudDogdXJsKFxcXCJ+L2ltZy9wYXlwYWwtaWNvbi5wbmdcXFwiKTtcXHJcXG59XFxyXFxuXFxyXFxuLnZlbm1vLWljb24ge1xcclxcblxcdGNvbnRlbnQ6IHVybChcXFwifi9pbWcvdmVubW8taWNvbi5wbmdcXFwiKTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvc3Qge1xcclxcblxcclxcblxcdGJvcmRlci1jb2xvcjogI2YxZjFmMTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvc3Q6aGlnaGxpZ2h0ZWQge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XFxyXFxufVxcclxcblxcclxcbi5hY3Rpdml0eS1pbmRpY2F0b3Ige1xcclxcblxcdGNvbG9yOiAjYWMwMGU2O1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLWNvbnRhaW5lciB7XFxyXFxuXFx0dmlzaWJpbGl0eTogY29sbGFwc2U7XFxyXFxufVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxQYWdlPlxcclxcblxcdDxQYWdlLmFjdGlvbkJhcj5cXHJcXG5cXHRcXHQ8QWN0aW9uQmFyIHRpdGxlPVxcXCJQYXltZW50c1xcXCI+XFxyXFxuXFx0XFx0ICA8TmF2aWdhdGlvbkJ1dHRvbiB0ZXh0PVxcXCJHbyBCYWNrXFxcIiBhbmRyb2lkLnN5c3RlbUljb249XFxcImljX21lbnVfYmFja1xcXCIgKHRhcCk9XFxcIm9uTmF2QnRuVGFwKClcXFwiPjwvTmF2aWdhdGlvbkJ1dHRvbj5cXHJcXG5cXHRcXHQ8L0FjdGlvbkJhcj5cXHJcXG5cXHQ8L1BhZ2UuYWN0aW9uQmFyPlxcclxcblxcclxcblxcclxcblxcclxcblxcdDxTdGFja0xheW91dCAjcGF5bWVudHNDb250YWluZXI+XFxyXFxuXFx0XFx0PExpc3RWaWV3IFtpdGVtc109XFxcInBheW1lbnRzXFxcIiBzZXBhcmF0b3JDb2xvcj1cXFwidHJhbnNwYXJlbnRcXFwiIChpdGVtVGFwKT1cXFwib25TZWxlY3QoJGV2ZW50KVxcXCI+XFxyXFxuXFx0XFx0XFx0PG5nLXRlbXBsYXRlIGxldC1pdGVtPVxcXCJpdGVtXFxcIiBsZXQtaT1cXFwiaW5kZXhcXFwiIGxldC1vZGQ9XFxcIm9kZFxcXCIgbGV0LWV2ZW49XFxcImV2ZW5cXFwiPlxcclxcblxcdFxcdFxcdFxcdDxTdGFja0xheW91dCBbY2xhc3Mub2RkXT1cXFwib2RkXFxcIiBbY2xhc3MuZXZlbl09XFxcImV2ZW5cXFwiIGNsYXNzPVxcXCJwb3N0XFxcIiBvcmllbnRhdGlvbj1cXFwiaG9yaXpvbnRhbFxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PEltYWdlIFtzcmNdPVxcXCJpdGVtLnBheW1lbnRUeXBlXFxcIiBjbGFzcz1cXFwicGF5bWVudC10eXBlLWljb25cXFwiPjwvSW1hZ2U+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PExhYmVsIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiBbdGV4dF09XFxcIml0ZW0uaW5mb1xcXCIgY2xhc3M9XFxcInBheW1lbnQtaW5mby1sYWJlbFxcXCI+PC9MYWJlbD5cXHJcXG5cXHRcXHRcXHRcXHQ8L1N0YWNrTGF5b3V0PlxcclxcblxcdFxcdFxcdDwvbmctdGVtcGxhdGU+XFxyXFxuXFx0XFx0PC9MaXN0Vmlldz5cXHJcXG5cXHJcXG5cXHRcXHQ8U3RhY2tMYXlvdXQgKHRhcCk9XFxcInNob3dNb2RhbCgpXFxcIiAjYWRkQ29udGFpbmVyIGNsYXNzPVxcXCJhZGQtY29udGFpbmVyXFxcIj5cXHJcXG5cXHRcXHRcXHQ8TGFiZWwgdGV4dFdyYXA9XFxcInRydWVcXFwiIHRleHQ9XFxcIkFkZCBwYXltZW50IG1ldGhvZFxcXCIgY2xhc3M9XFxcImFkZC1wYXltZW50LWxhYmVsXFxcIj48L0xhYmVsPlxcclxcblxcdFxcdDwvU3RhY2tMYXlvdXQ+ICBcXHJcXG5cXHQ8L1N0YWNrTGF5b3V0PlxcclxcbjwvUGFnZT5cXHJcXG5cXHJcXG48QWN0aXZpdHlJbmRpY2F0b3IgI2FjdGl2aXR5SW5kaWNhdG9yIGJ1c3k9XFxcInRydWVcXFwiIHdpZHRoPVxcXCI0MFxcXCIgaGVpZ2h0PVxcXCI0MFxcXCIgY2xhc3M9XFxcImFjdGl2aXR5LWluZGljYXRvclxcXCI+XFxyXFxuPC9BY3Rpdml0eUluZGljYXRvcj5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZUFycmF5IH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUtYXJyYXknO1xyXG5pbXBvcnQgeyBEeW5hbWljQWRkU2VydmljZSB9IGZyb20gJy4uL2R5bmFtaWMtYWRkLnNlcnZpY2UnO1xyXG5pbXBvcnQgKiBhcyBkcm9waW4gZnJvbSAnYnJhaW50cmVlLXdlYi1kcm9wLWluJztcclxuaW1wb3J0ICogYXMgYnJhaW50cmVlIGZyb20gJ2JyYWludHJlZS13ZWInO1xyXG5pbXBvcnQgeyBCcmFpbnRyZWUsIEJyYWluVHJlZU9wdGlvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYnJhaW50cmVlJztcclxuaW1wb3J0IHsgSVBheVBhbENvbmZpZyB9IGZyb20gJ25neC1wYXlwYWwnO1xyXG5pbXBvcnQgeyBMb2dpbmNoZWNrU2VydmljZSB9IGZyb20gJy4uL2xvZ2luY2hlY2suc2VydmljZSc7XHJcbmltcG9ydCB7IFBheW1lbnRTZXJ2aWNlIH0gZnJvbSAnLi4vcGF5bWVudC5zZXJ2aWNlLnRucyc7XHJcbmltcG9ydCB7IFRyYW5zZmVyU2VydmljZSB9IGZyb20gJy4uL2RhdGF0cmFuc2Zlci5zZXJ2aWNlJztcclxuXHJcbmltcG9ydCB7IE1vZGFsRGlhbG9nUGFyYW1zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2RpcmVjdGl2ZXMvZGlhbG9nc1wiO1xyXG5pbXBvcnQgeyBNb2RhbERpYWxvZ1NlcnZpY2UgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZGlyZWN0aXZlcy9kaWFsb2dzXCI7XHJcbmltcG9ydCB7IEFkZFBheW1lbnRDb21wb25lbnQgfSBmcm9tICcuLi9hZGQtcGF5bWVudC9hZGQtcGF5bWVudC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQYXltZW50SW5mb0NvbXBvbmVudCB9IGZyb20gJy4uL3BheW1lbnQtaW5mby9wYXltZW50LWluZm8uY29tcG9uZW50JztcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IEFjdGl2aXR5SW5kaWNhdG9yIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9hY3Rpdml0eS1pbmRpY2F0b3InO1xyXG5pbXBvcnQgeyBTdGFja0xheW91dCB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvbGF5b3V0cy9zdGFjay1sYXlvdXQnO1xyXG5pbXBvcnQgKiBhcyBkaWFsb2dzIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3NcIjtcclxuaW1wb3J0ICogYXMgZmlyZWJhc2UgZnJvbSAnbmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZSc7XHJcblxyXG5kZWNsYXJlIGxldCBwYXlwYWw6IGFueTtcclxuXHJcbmNsYXNzIFBheW1lbnRJdGVtIHtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bWVudFR5cGU6IHN0cmluZywgcHVibGljIGluZm86IHN0cmluZywgcHVibGljIGlkVG9rZW46IHN0cmluZywgcHVibGljIHR5cGU6IHN0cmluZykge31cclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtcGF5bWVudHMnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wYXltZW50cy5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vcGF5bWVudHMuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQYXltZW50c0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ2FjdGl2aXR5SW5kaWNhdG9yJywgeyBzdGF0aWM6IHRydWUgfSkgYUk6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgnYWRkQ29udGFpbmVyJywgeyBzdGF0aWM6IHRydWUgfSkgYUM6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgncGF5bWVudHNDb250YWluZXInLCB7IHN0YXRpYzogdHJ1ZSB9KSBwQzogRWxlbWVudFJlZjtcclxuICB1c2VyID0ge1xyXG4gIFx0cGF5bWVudF9pZDogJzUwNzMwNTcwNidcclxuICB9XHJcbiAgb3B0cyA6QnJhaW5UcmVlT3B0aW9ucyA9IHtcclxuICAgIGFtb3VudDogbnVsbCxcclxuICAgIGNvbGxlY3REZXZpY2VEYXRhOiB0cnVlLFxyXG4gICAgcmVxdWVzdFRocmVlRFNlY3VyZVZlcmlmaWNhdGlvbjogZmFsc2UsXHJcbiAgfVxyXG4gIGNsaWVudFRva2VuID0gJyc7XHJcbiAgcGF5bWVudEN1c3RvbWVyO1xyXG4gIHBheW1lbnRJbmZvO1xyXG4gIHBheW1lbnRzID0gbmV3IE9ic2VydmFibGVBcnJheTxQYXltZW50SXRlbT4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhZGRTZXJ2aWNlOiBEeW5hbWljQWRkU2VydmljZSwgcHJpdmF0ZSBwYXltZW50U2VydmljZTogUGF5bWVudFNlcnZpY2UsIHByaXZhdGUgbG9naW5jaGVja1NlcnZpY2U6IExvZ2luY2hlY2tTZXJ2aWNlLCBwcml2YXRlIHRyYW5zZmVyU2VydmljZTogVHJhbnNmZXJTZXJ2aWNlLFxyXG4gIFx0cHJpdmF0ZSB2Y1JlZjogVmlld0NvbnRhaW5lclJlZiwgcHJpdmF0ZSBtb2RhbDogTW9kYWxEaWFsb2dTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucykgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgZmlyZWJhc2UuZ2V0Q3VycmVudFVzZXIoKS50aGVuKHVzZXIgPT4ge1xyXG4gICAgICBmaXJlYmFzZS5maXJlc3RvcmUuY29sbGVjdGlvbigndXNlcnMnKS5kb2ModXNlci51aWQpLmdldCgpLnRoZW4oZG9jID0+IHtcclxuICAgICAgICB0aGlzLnVzZXIucGF5bWVudF9pZCA9IGRvYy5kYXRhKCkucGF5bWVudF9pZDtcclxuICAgICAgICB0aGlzLmdldFVzZXIoKTtcclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgXHRcclxuICB9XHJcblxyXG4gIHNob3dNb2RhbCgpIHtcclxuICAgIGxldCBicmFpbnRyZWUgPSBuZXcgQnJhaW50cmVlKCk7XHJcbiAgICAvLyB0aGlzLmNyZWF0ZVZpZXdzKCk7XHJcblxyXG4gICAgYnJhaW50cmVlLnN0YXJ0UGF5bWVudCh0aGlzLmNsaWVudFRva2VuLCB0aGlzLm9wdHMpO1xyXG5cclxuICAgIGJyYWludHJlZS5vbihcInN1Y2Nlc3NcIiwgKHJlcykgPT4ge1xyXG4gICAgICAgIGxldCBvdXRwdXQgPSByZXMub2JqZWN0LmdldChcIm91dHB1dFwiKTtcclxuICAgICAgICAvLyBjb25zb2xlLmRpcihvdXRwdXQpO1xyXG5cclxuICAgICAgICB2YXIgYWRkQ29udGFpbmVyID0gPFN0YWNrTGF5b3V0PiB0aGlzLmFDLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICAgICAgdmFyIHBheW1lbnRzQ29udGFpbmVyID0gPFN0YWNrTGF5b3V0PiB0aGlzLnBDLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICAgICAgdmFyIGFjdGl2aXR5SW5kaWNhdG9yID0gPEFjdGl2aXR5SW5kaWNhdG9yPiB0aGlzLmFJLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICAgICAgcGF5bWVudHNDb250YWluZXIuc3R5bGUudmlzaWJpbGl0eSA9ICdjb2xsYXBzZSc7XHJcbiAgICAgICAgYWRkQ29udGFpbmVyLnN0eWxlLnZpc2liaWxpdHkgPSAnY29sbGFwc2UnO1xyXG4gICAgICAgIGFjdGl2aXR5SW5kaWNhdG9yLmJ1c3kgPSB0cnVlO1xyXG5cclxuICAgICAgICB0aGlzLnBheW1lbnRTZXJ2aWNlLmFkZFBheW1lbnRNZXRob2RUb1VzZXIodGhpcy51c2VyLnBheW1lbnRfaWQsIG91dHB1dC5ub25jZSkuc3Vic2NyaWJlKChyZXM6IGFueSkgPT4ge1xyXG4gICAgICAgICAgaWYocmVzLm1lc3NhZ2UgPT0gJ1N1Y2Nlc3MnKSB7XHJcbiAgICAgICAgICAgIGRpYWxvZ3MuYWxlcnQoe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiQWRkZWQgbWV0aG9kXCIsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIlBheW1lbnQgbWV0aG9kIGFkZGVkIHN1Y2Nlc3NmdWxseVwiLFxyXG4gICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIkNsb3NlXCJcclxuICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5nZXRVc2VyKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbHNlIGlmKHJlcy5tZXNzYWdlID09ICdBbHJlYWR5IGV4aXN0cycpIHtcclxuICAgICAgICAgICAgYWRkQ29udGFpbmVyLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XHJcbiAgICAgICAgICAgIHBheW1lbnRzQ29udGFpbmVyLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XHJcbiAgICAgICAgICAgIGFjdGl2aXR5SW5kaWNhdG9yLmJ1c3kgPSBmYWxzZTtcclxuICAgICAgICAgICAgZGlhbG9ncy5hbGVydCh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJDb3VsZCBub3QgYWRkIG1ldGhvZFwiLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJQYXltZW50IG1ldGhvZCBhbHJlYWR5IGV4aXN0cywgcGxlYXNlIHRyeSBhbm90aGVyIG9uZS5cIixcclxuICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJDbG9zZVwiXHJcbiAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC8vIHRoaXMucm91dGVyLm5hdmlnYXRlKFsncGF5bWVudHMnXSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAvLyB0aGlzLnBheW1lbnRTZXJ2aWNlLmFkZFBheW1lbnRNZXRob2RUb1VzZXIodGhpcy51c2VyLnBheW1lbnRfaWQsIG91dHB1dC5ub25jZSkuc3Vic2NyaWJlKChyZXMpID0+IHtcclxuICAgICAgICAvLyAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsncGF5bWVudHMnXSk7XHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICB9KVxyXG4gICAgIFxyXG4gICAgYnJhaW50cmVlLm9uKFwiY2FuY2VsXCIsIGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICBsZXQgb3V0cHV0ID0gcmVzLm9iamVjdC5nZXQoXCJvdXRwdXRcIik7XHJcbiAgICAgICAgLy8gY29uc29sZS5kaXIob3V0cHV0KTtcclxuICAgIH0pXHJcbiAgICAgXHJcbiAgICBicmFpbnRyZWUub24oXCJlcnJvclwiLCBmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgbGV0IG91dHB1dCA9IHJlcy5vYmplY3QuZ2V0KFwib3V0cHV0XCIpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUuZGlyKG91dHB1dCk7XHJcbiAgICB9KVxyXG4gICAgLy8gbGV0IG9wdGlvbnMgPSB7XHJcbiAgICAvLyAgICAgY29udGV4dDoge30sXHJcbiAgICAvLyAgICAgZnVsbHNjcmVlbjogdHJ1ZSxcclxuICAgIC8vICAgICB2aWV3Q29udGFpbmVyUmVmOiB0aGlzLnZjUmVmXHJcbiAgICAvLyAgICAgLy8gYW5pbWF0ZWQ6IHRydWUsXHJcbiAgICAvLyAgICAgLy8gdHJhbnNpdGlvbjogeyBuYW1lOiBcInNsaWRlVG9wXCIgfVxyXG4gICAgLy8gfTtcclxuICAgIFxyXG4gICAgLy8gdGhpcy5tb2RhbC5zaG93TW9kYWwoQWRkUGF5bWVudENvbXBvbmVudCwgb3B0aW9ucykudGhlbihyZXMgPT4ge1xyXG5cclxuICAgIC8vIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0VXNlcigpIHtcclxuICAgIHRoaXMucGF5bWVudHMuc3BsaWNlKDApO1xyXG5cclxuICAgIHZhciBhZGRDb250YWluZXIgPSA8U3RhY2tMYXlvdXQ+IHRoaXMuYUMubmF0aXZlRWxlbWVudDtcclxuICAgIHZhciBwYXltZW50c0NvbnRhaW5lciA9IDxTdGFja0xheW91dD4gdGhpcy5wQy5uYXRpdmVFbGVtZW50O1xyXG4gICAgYWRkQ29udGFpbmVyLnN0eWxlLnZpc2liaWxpdHkgPSAnY29sbGFwc2UnO1xyXG4gICAgcGF5bWVudHNDb250YWluZXIuc3R5bGUudmlzaWJpbGl0eSA9ICdjb2xsYXBzZSc7XHJcblxyXG4gIFx0dGhpcy5wYXltZW50U2VydmljZS5nZXRQYXltZW50VXNlckJ5SWQodGhpcy51c2VyLnBheW1lbnRfaWQpLnN1YnNjcmliZSgoZGF0YSkgPT4ge1xyXG4gICAgICB0aGlzLnNldHVwVmlld3MoKTtcclxuXHJcbiAgXHRcdHRoaXMucGF5bWVudEN1c3RvbWVyID0gZGF0YTtcclxuICBcdFx0Ly8gY29uc29sZS5sb2codGhpcy5wYXltZW50Q3VzdG9tZXIpXHJcbiAgXHRcdGlmKHRoaXMucGF5bWVudEN1c3RvbWVyLmNyZWRpdENhcmRzICE9IG51bGwpXHJcblx0ICBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMucGF5bWVudEN1c3RvbWVyLmNyZWRpdENhcmRzLmxlbmd0aDsgaSsrKSBcclxuXHQgIFx0XHRcdHRoaXMucGF5bWVudHMucHVzaChuZXcgUGF5bWVudEl0ZW0oXCJ+L2ltZy9jcmVkaXQtY2FyZC1pY29uLnBuZ1wiLCB0aGlzLnBheW1lbnRDdXN0b21lci5jcmVkaXRDYXJkc1tpXS5jYXJkVHlwZSArIFwiIGVuZGluZyBpbiBcIiArIHRoaXMucGF5bWVudEN1c3RvbWVyLmNyZWRpdENhcmRzW2ldLmxhc3Q0LCB0aGlzLnBheW1lbnRDdXN0b21lci5jcmVkaXRDYXJkc1tpXS50b2tlbiwgXCJDYXJkXCIpKTtcclxuICBcdFx0aWYodGhpcy5wYXltZW50Q3VzdG9tZXIucGF5cGFsQWNjb3VudHMgIT0gbnVsbClcclxuICBcdFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5wYXltZW50Q3VzdG9tZXIucGF5cGFsQWNjb3VudHMubGVuZ3RoOyBpKyspXHJcbiAgXHRcdFx0XHR0aGlzLnBheW1lbnRzLnB1c2gobmV3IFBheW1lbnRJdGVtKFwifi9pbWcvcGF5cGFsLWljb24ucG5nXCIsIHRoaXMucGF5bWVudEN1c3RvbWVyLnBheXBhbEFjY291bnRzW2ldLmVtYWlsLCB0aGlzLnBheW1lbnRDdXN0b21lci5wYXlwYWxBY2NvdW50c1tpXS50b2tlbiwgXCJQYXlQYWxcIikpXHJcbiAgXHRcdGlmKHRoaXMucGF5bWVudEN1c3RvbWVyLnZlbm1vQWNjb3VudHMgIT0gbnVsbClcclxuICBcdFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5wYXltZW50Q3VzdG9tZXIudmVubW9BY2NvdW50cy5sZW5ndGg7IGkrKylcclxuICBcdFx0XHRcdHRoaXMucGF5bWVudHMucHVzaChuZXcgUGF5bWVudEl0ZW0oXCJ+L2ltZy92ZW5tby1pY29uLnBuZ1wiLCB0aGlzLnBheW1lbnRDdXN0b21lci52ZW5tb0FjY291bnRzW2ldLnZlbm1vVXNlcklkLCB0aGlzLnBheW1lbnRDdXN0b21lci52ZW5tb0FjY291bnRzW2ldLnRva2VuLCBcIlZlbm1vXCIpKVxyXG4gIFx0XHQvLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGlzdC1sb2FkaW5nLWNpcmNsZScpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgXHR9KTtcclxuICAgIHRoaXMucGF5bWVudFNlcnZpY2UuZ2V0SWRUb2tlbih0aGlzLnVzZXIucGF5bWVudF9pZCkuc3Vic2NyaWJlKChyZXM6IGFueSkgPT4ge1xyXG4gICAgICB0aGlzLmNsaWVudFRva2VuID0gcmVzLmNsaWVudFRva2VuO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzZXR1cFZpZXdzKCkge1xyXG4gICAgdmFyIGFjdGl2aXR5SW5kaWNhdG9yID0gPEFjdGl2aXR5SW5kaWNhdG9yPiB0aGlzLmFJLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICBhY3Rpdml0eUluZGljYXRvci5idXN5ID0gZmFsc2U7XHJcblxyXG4gICAgdmFyIGFkZENvbnRhaW5lciA9IDxTdGFja0xheW91dD4gdGhpcy5hQy5uYXRpdmVFbGVtZW50O1xyXG4gICAgYWRkQ29udGFpbmVyLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XHJcblxyXG4gICAgdmFyIHBheW1lbnRzQ29udGFpbmVyID0gPFN0YWNrTGF5b3V0PiB0aGlzLnBDLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICBwYXltZW50c0NvbnRhaW5lci5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0UGF5bWVudCgpIHtcclxuXHJcbiAgfVxyXG5cclxuICBvblNlbGVjdChldmVudCkge1xyXG4gIFx0Ly8gY29uc29sZS5sb2coZXZlbnQuaW5kZXgpO1xyXG4gIFx0bGV0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgY29udGV4dDoge30sXHJcbiAgICAgICAgZnVsbHNjcmVlbjogdHJ1ZSxcclxuICAgICAgICB2aWV3Q29udGFpbmVyUmVmOiB0aGlzLnZjUmVmXHJcbiAgICAgICAgLy8gYW5pbWF0ZWQ6IHRydWUsXHJcbiAgICAgICAgLy8gdHJhbnNpdGlvbjogeyBuYW1lOiBcInNsaWRlVG9wXCIgfVxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLnRyYW5zZmVyU2VydmljZS5zZXREYXRhKHRoaXMucGF5bWVudHMuZ2V0SXRlbShldmVudC5pbmRleCkpO1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydwYXltZW50aW5mbyddKTtcclxuICAgIC8vIHRoaXMubW9kYWwuc2hvd01vZGFsKFBheW1lbnRJbmZvQ29tcG9uZW50LCBvcHRpb25zKS50aGVuKHJlcyA9PiB7XHJcblxyXG4gICAgLy8gfSk7XHJcbiAgfVxyXG5cclxuICBvbk5hdkJ0blRhcCgpIHtcclxuICAgIHRoaXMucm91dGVyLmJhY2soKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUGxhY2VzQXV0b2NvbXBsZXRlU2VydmljZSB7XHJcblxyXG4gIHBsYWNlc191cmkgPSAnaHR0cHM6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL3BsYWNlL3RleHRzZWFyY2gvanNvbj9rZXk9QUl6YVN5QUlUeFMxam1mOFBNdGF6Umd1V2NBZldReFcxa1BPb1lnJnF1ZXJ5PSdcclxuICBhdXRvY29tcGxldGVfdXJpID0gJ2h0dHBzOi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9wbGFjZS9hdXRvY29tcGxldGUvanNvbj9rZXk9QUl6YVN5QUlUeFMxam1mOFBNdGF6Umd1V2NBZldReFcxa1BPb1lnJnNlc3Npb250b2tlbj0xMjM0NTY3ODkwJmlucHV0PSdcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHBDbGllbnQ6IEh0dHBDbGllbnQpIHsgfVxyXG5cclxuICBnZXRBdXRvY29tcGxldGVSZXN1bHRzKHBsYWNlKSB7XHJcbiAgXHRyZXR1cm4gdGhpcy5odHRwQ2xpZW50LmdldChgJHt0aGlzLmF1dG9jb21wbGV0ZV91cml9YCArIHBsYWNlKTtcclxuICB9XHJcblxyXG4gIGdldFBsYWNlUmVzdWx0cyhwbGFjZSkge1xyXG4gIFx0cmV0dXJuIHRoaXMuaHR0cENsaWVudC5nZXQoYCR7dGhpcy5wbGFjZXNfdXJpfWAgKyBwbGFjZSk7XHJcbiAgfVxyXG5cclxuICBnZXRBdXRvY29tcGxldGVSZXN1bHRzR2VvY29kZShwbGFjZSkge1xyXG4gIFx0cmV0dXJuIHRoaXMuaHR0cENsaWVudC5nZXQoYCR7dGhpcy5hdXRvY29tcGxldGVfdXJpfWAgKyBwbGFjZSArIGAmdHlwZXM9Z2VvY29kZWApO1xyXG4gIH1cclxuICBnZXRBdXRvY29tcGxldGVSZXN1bHRzRXN0YWJsaXNobWVudChwbGFjZSkge1xyXG4gIFx0cmV0dXJuIHRoaXMuaHR0cENsaWVudC5nZXQoYCR7dGhpcy5hdXRvY29tcGxldGVfdXJpfWAgKyBwbGFjZSArIGAmdHlwZXM9ZXN0YWJsaXNobWVudGApO1xyXG4gIH1cclxuICBnZXRBdXRvY29tcGxldGVSZXN1bHRzQWRkcmVzcyhwbGFjZSkge1xyXG4gIFx0cmV0dXJuIHRoaXMuaHR0cENsaWVudC5nZXQoYCR7dGhpcy5hdXRvY29tcGxldGVfdXJpfWAgKyBwbGFjZSArIGAmdHlwZXM9YWRkcmVzc2ApO1xyXG4gIH1cclxuICBnZXRBdXRvY29tcGxldGVSZXN1bHRzQ2l0eShwbGFjZSkge1xyXG4gIFx0cmV0dXJuIHRoaXMuaHR0cENsaWVudC5nZXQoYCR7dGhpcy5hdXRvY29tcGxldGVfdXJpfWAgKyBwbGFjZSArIGAmdHlwZXM9KGNpdGllcylgKTtcclxuICB9XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi8qIEFkZCBtb2JpbGUgc3R5bGVzIGZvciB0aGUgY29tcG9uZW50IGhlcmUuICAqL1xcclxcbi5tYXAtdmlldyB7XFxyXFxuXFx0aGVpZ2h0OiAxMDAlO1xcclxcblxcdHdpZHRoOiAxMDAlO1xcclxcblxcdHZlcnRpY2FsLWFsaWduOiBib3R0b207XFxyXFxufVxcclxcblxcclxcbi5wcm9maWxlLXBpY3R1cmUge1xcclxcblxcdGhlaWdodDogNTA7XFxyXFxuXFx0d2lkdGg6IDUwO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDEwMCU7XFxyXFxuXFx0dmVydGljYWwtYWxpZ246IHRvcDtcXHJcXG5cXHRtYXJnaW4tbGVmdDogMTY7XFxyXFxuXFx0bWFyZ2luLXRvcDogMjA7XFxyXFxufVxcclxcblxcclxcbi5uYW1lLWxhYmVsIHtcXHJcXG5cXHRtYXJnaW4tdG9wOiAxNjtcXHJcXG5cXHRtYXJnaW4tbGVmdDogMTg7XFxyXFxuXFx0Y29sb3I6IGJsYWNrO1xcclxcblxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuXFx0Zm9udC1zaXplOiAxNztcXHJcXG5cXHR0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbn1cXHJcXG5cXHJcXG4uaW5mby1sYWJlbCB7XFxyXFxuXFx0bWFyZ2luLXRvcDogNDtcXHJcXG5cXHRtYXJnaW4tbGVmdDogMTg7XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTogMTY7XFxyXFxuXFx0Y29sb3I6IGJsYWNrO1xcclxcblxcdHRleHQtYWxpZ246IGxlZnQ7XFxyXFxufVxcclxcblxcclxcbi5sYWJlbC1jb250YWluZXIge1xcclxcblxcdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxufVxcclxcblxcclxcbi5hY3Rpdml0eS1pbmRpY2F0b3Ige1xcclxcblxcdGNvbG9yOiAjYWMwMGU2O1xcclxcbn1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8UGFnZS5hY3Rpb25CYXI+XFxyXFxuICAgIDxBY3Rpb25CYXIgdGl0bGU9XFxcIlBvc3RcXFwiPlxcclxcbiAgICBcXHQ8TmF2aWdhdGlvbkJ1dHRvbiB0ZXh0PVxcXCJHbyBCYWNrXFxcIiBhbmRyb2lkLnN5c3RlbUljb249XFxcImljX21lbnVfYmFja1xcXCIgKHRhcCk9XFxcIm9uTmF2QnRuVGFwKClcXFwiPjwvTmF2aWdhdGlvbkJ1dHRvbj5cXHJcXG5cXHQgICAgPEFjdGlvbkl0ZW0gKHRhcCk9XFxcInByb21wdERlbGV0ZSgpXFxcIlxcclxcblxcdCAgICAgIGlvcy5zeXN0ZW1JY29uPVxcXCIxNlxcXCIgaW9zLnBvc2l0aW9uPVxcXCJyaWdodFxcXCJcXHJcXG5cXHQgICAgICB0ZXh0PVxcXCJEZWxldGVcXFwiIGFuZHJvaWQucG9zaXRpb249XFxcInBvcHVwXFxcIiAjZGVsZXRlSXRlbT48L0FjdGlvbkl0ZW0+XFxyXFxuXFx0ICAgIDxBY3Rpb25JdGVtICh0YXApPVxcXCJvblJlcG9ydCgpXFxcIlxcclxcblxcdCAgICAgIGlvcy5zeXN0ZW1JY29uPVxcXCI5XFxcIiBpb3MucG9zaXRpb249XFxcInJpZ2h0XFxcIlxcclxcblxcdCAgICAgIHRleHQ9XFxcIlJlcG9ydFxcXCIgYW5kcm9pZC5wb3NpdGlvbj1cXFwicG9wdXBcXFwiPjwvQWN0aW9uSXRlbT5cXHJcXG4gICAgPC9BY3Rpb25CYXI+XFxyXFxuPC9QYWdlLmFjdGlvbkJhcj5cXHJcXG48R3JpZExheW91dCByb3dzPVxcXCIyKixhdXRvLDEwKlxcXCIgI2xheW91dD5cXHJcXG5cXHQ8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XFxcImhvcml6b250YWxcXFwiIHJvdz1cXFwiMFxcXCIgY2xhc3M9XFxcImxhYmVsLWNvbnRhaW5lclxcXCIgI2luZm9Db250YWluZXI+XFxyXFxuXFx0XFx0PEltYWdlIHNyYz1cXFwie3sgcHJvZmlsZVNvdXJjZSB9fVxcXCIgY2xhc3M9XFxcInByb2ZpbGUtcGljdHVyZVxcXCIgc3RyZXRjaD1cXFwiYXNwZWN0Rml0XFxcIj48L0ltYWdlPlxcclxcblxcdCAgXFx0PFN0YWNrTGF5b3V0PlxcclxcblxcdCAgICAgIFxcdDxMYWJlbCB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgaWQ9XFxcInBvc3QtbmFtZVxcXCIgY2xhc3M9XFxcIm5hbWUtbGFiZWxcXFwiIHRleHQ9XFxcInt7IHVzZXJuYW1lIH19XFxcIj48L0xhYmVsPlxcclxcblxcdCAgICAgIFxcdDxMYWJlbCB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgaWQ9XFxcInBvc3QtaW5mb1xcXCIgY2xhc3M9XFxcImluZm8tbGFiZWxcXFwiIHRleHQ9XFxcInt7IGluZm8gfX1cXFwiPjwvTGFiZWw+XFxyXFxuXFx0ICAgIDwvU3RhY2tMYXlvdXQ+XFxyXFxuXFx0PC9TdGFja0xheW91dD5cXHJcXG5cXHQ8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImJ0bi1jb250YWluZXJcXFwiICNidXR0b25Db250YWluZXIgcm93PVxcXCIxXFxcIj5cXHJcXG5cXHRcXHQ8QnV0dG9uIGNsYXNzPVxcXCJjb25uZWN0LWJ0blxcXCIgKHRhcCk9XFxcIm9uQ29ubmVjdFRhcCgpXFxcIiB0ZXh0PVxcXCJ7eyBidXR0b25UZXh0IH19XFxcIj48L0J1dHRvbj5cXHJcXG5cXHQ8L1N0YWNrTGF5b3V0PlxcclxcblxcdDxNYXBWaWV3IChtYXBSZWFkeSk9XFxcIm9uTWFwUmVhZHkoJGV2ZW50KVxcXCIgW2xhdGl0dWRlXT1cXFwibGF0aXR1ZGVcXFwiIFtsb25naXR1ZGVdPVxcXCJsb25naXR1ZGVcXFwiIGNsYXNzPVxcXCJtYXAtdmlld1xcXCIgcm93PVxcXCIyXFxcIiAjbWFwVmlldz48L01hcFZpZXc+XFxyXFxuPC9HcmlkTGF5b3V0PlxcclxcbjxBY3Rpdml0eUluZGljYXRvciAjYWN0aXZpdHlJbmRpY2F0b3IgYnVzeT1cXFwidHJ1ZVxcXCIgd2lkdGg9XFxcIjQwXFxcIiBoZWlnaHQ9XFxcIjQwXFxcIiBjbGFzcz1cXFwiYWN0aXZpdHktaW5kaWNhdG9yXFxcIj48L0FjdGl2aXR5SW5kaWNhdG9yPlwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDb250YWluZXJSZWYsIFZpZXdSZWYsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgKiBhcyBmaXJlYmFzZSBmcm9tICduYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlJztcclxuaW1wb3J0IHsgR29vZ2xlTWFwc1NlcnZpY2UgfSBmcm9tICcuLi9nb29nbGUtbWFwcy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFRyYW5zZmVyU2VydmljZSB9IGZyb20gJy4uL2RhdGF0cmFuc2Zlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2VcIjtcclxuaW1wb3J0IHsgQWN0aW9uSXRlbSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvYWN0aW9uLWJhcic7XHJcbmltcG9ydCB7IFN0YWNrTGF5b3V0IH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9sYXlvdXRzL3N0YWNrLWxheW91dCc7XHJcbmltcG9ydCB7IEdyaWRMYXlvdXQgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvZ3JpZC1sYXlvdXQnO1xyXG5pbXBvcnQgeyBBY3Rpdml0eUluZGljYXRvciB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvYWN0aXZpdHktaW5kaWNhdG9yJztcclxuaW1wb3J0IHtyZWdpc3RlckVsZW1lbnR9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9lbGVtZW50LXJlZ2lzdHJ5XCI7XHJcbmltcG9ydCB7aXNBbmRyb2lkLCBpc0lPU30gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm1cIjtcclxuaW1wb3J0IHsgTWFwVmlldywgTWFya2VyLCBQb3NpdGlvbiB9IGZyb20gJ25hdGl2ZXNjcmlwdC1nb29nbGUtbWFwcy1zZGsnO1xyXG5pbXBvcnQgKiBhcyBkaWFsb2dzIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3NcIjtcclxuaW1wb3J0IHsgTG9naW5jaGVja1NlcnZpY2UgfSBmcm9tICcuLi9sb2dpbmNoZWNrLnNlcnZpY2UudG5zJztcclxuaW1wb3J0IHsgQ2hhdE1lc3NhZ2UgfSBmcm9tICcuLi9tb2RlbHMvY2hhdC1tZXNzYWdlLm1vZGVsJztcclxuXHJcbnJlZ2lzdGVyRWxlbWVudChcIk1hcFZpZXdcIiwgKCkgPT4gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1nb29nbGUtbWFwcy1zZGtcIikuTWFwVmlldyk7XHJcbmRlY2xhcmUgdmFyIGNvbTphbnk7XHJcbmRlY2xhcmUgdmFyIEdNU0Nvb3JkaW5hdGVCb3VuZHM6IGFueTtcclxuZGVjbGFyZSB2YXIgR01TQ2FtZXJhVXBkYXRlOiBhbnk7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1wb3N0aW5nLWluZm8nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wb3N0aW5nLWluZm8uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3Bvc3RpbmctaW5mby5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFBvc3RpbmdJbmZvQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgQFZpZXdDaGlsZChcImRlbGV0ZUl0ZW1cIiwgeyBzdGF0aWM6IHRydWUgfSkgZGVsZXRlSXRlbTogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKFwiYnV0dG9uQ29udGFpbmVyXCIsIHsgc3RhdGljOiB0cnVlIH0pIGJ1dHRvbkNvbnRhaW5lcjogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKFwiaW5mb0NvbnRhaW5lclwiLCB7IHN0YXRpYzogdHJ1ZSB9KSBpbmZvQ29udGFpbmVyOiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoXCJhY3Rpdml0eUluZGljYXRvclwiLCB7IHN0YXRpYzogdHJ1ZSB9KSBhaTogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKFwibGF5b3V0XCIsIHsgc3RhdGljOiB0cnVlIH0pIGxheW91dDogRWxlbWVudFJlZjtcclxuICBtYXBWaWV3OiBNYXBWaWV3O1xyXG4gIGxhdGl0dWRlID0gIDM3O1xyXG4gIGxvbmdpdHVkZSA9IC0xMjI7XHJcblxyXG4gIHN0YXJ0TGF0O1xyXG4gIGVuZExhdDtcclxuICBzdGFydExuZztcclxuICBlbmRMbmc7XHJcbiAgYm91bmRzO1xyXG4gIG1hcERhdGE7XHJcbiAgdXNlcklkO1xyXG4gIHByb2ZpbGVTb3VyY2U7XHJcbiAgaW5mbztcclxuICB1c2VybmFtZTtcclxuICBidXR0b25UZXh0O1xyXG4gIGN1cnJlbnRVc2VyTmFtZTtcclxuXHJcbiAgY2hhdFVzZXJzID0gW107XHJcbiAgY3VycmVudFVzZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbWFwU2VydmljZTogR29vZ2xlTWFwc1NlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zLCBwcml2YXRlIHRyYW5zZmVyU2VydmljZTogVHJhbnNmZXJTZXJ2aWNlLCBwcml2YXRlIHBhZ2U6IFBhZ2UsXHJcbiAgICBwcml2YXRlIGxvZ2luY2hlY2tTZXJ2aWNlOiBMb2dpbmNoZWNrU2VydmljZSkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIFx0dGhpcy5sb2FkVmlld3MoKTtcclxuICB9XHJcblxyXG4gIGxvYWRWaWV3cygpIHtcclxuICAgIGxldCBhY3Rpdml0eUluZGljYXRvciA9IDxBY3Rpdml0eUluZGljYXRvcj4gdGhpcy5haS5uYXRpdmVFbGVtZW50O1xyXG4gICAgbGV0IGluZm9Db250YWluZXIgPSA8U3RhY2tMYXlvdXQ+IHRoaXMuaW5mb0NvbnRhaW5lci5uYXRpdmVFbGVtZW50O1xyXG4gICAgbGV0IGRlbGV0ZUJ1dHRvbiA9IDxBY3Rpb25JdGVtPiB0aGlzLmRlbGV0ZUl0ZW0ubmF0aXZlRWxlbWVudDtcclxuICAgIGxldCBjaGF0QnV0dG9uID0gPFN0YWNrTGF5b3V0PiB0aGlzLmJ1dHRvbkNvbnRhaW5lci5uYXRpdmVFbGVtZW50O1xyXG5cclxuICAgIGluZm9Db250YWluZXIudmlzaWJpbGl0eSA9ICdjb2xsYXBzZSc7XHJcbiAgICBjaGF0QnV0dG9uLnZpc2liaWxpdHkgPSAnY29sbGFwc2UnO1xyXG4gICAgdGhpcy51c2VySWQgPSB0aGlzLmxvZ2luY2hlY2tTZXJ2aWNlLmdldFVzZXIoKTtcclxuICAgIHRoaXMubWFwRGF0YSA9IHRoaXMudHJhbnNmZXJTZXJ2aWNlLmdldERhdGEoKTtcclxuICAgIGZpcmViYXNlLmZpcmVzdG9yZS5jb2xsZWN0aW9uKCd1c2VycycpLmRvYyh0aGlzLnVzZXJJZCkuZ2V0KCkudGhlbigoZG9jKSA9PiB7XHJcbiAgICAgIHRoaXMuY3VycmVudFVzZXIgPSBkb2MuZGF0YSgpO1xyXG4gICAgICBpZihkb2MuZGF0YSgpLmNoYXRzLmluY2x1ZGVzKHRoaXMubWFwRGF0YS5wb3N0SW5mby5pZCkpIHtcclxuICAgICAgICB0aGlzLmJ1dHRvblRleHQgPSAnVmlldyBjaGF0JztcclxuICAgICAgICBhY3Rpdml0eUluZGljYXRvci5idXN5ID0gZmFsc2U7XHJcbiAgICAgICAgaW5mb0NvbnRhaW5lci52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xyXG4gICAgICAgIGNoYXRCdXR0b24udmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICBmaXJlYmFzZS5maXJlc3RvcmUuY29sbGVjdGlvbignY2hhdHMnKS5kb2ModGhpcy5tYXBEYXRhLnBvc3RJbmZvLmRhdGEudWlkKS5nZXQoKS50aGVuKChkb2MpID0+IHtcclxuICAgICAgICAgIGlmKCFkb2MuZXhpc3RzICYmIHRoaXMudXNlcklkID09PSB0aGlzLm1hcERhdGEucG9zdEluZm8uZGF0YS51aWQpXHJcbiAgICAgICAgICAgIGNoYXRCdXR0b24udmlzaWJpbGl0eSA9ICdjb2xsYXBzZSc7XHJcbiAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIGNoYXRCdXR0b24udmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcclxuICAgICAgICAgIGFjdGl2aXR5SW5kaWNhdG9yLmJ1c3kgPSBmYWxzZTtcclxuICAgICAgICAgIGluZm9Db250YWluZXIudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMuYnV0dG9uVGV4dCA9ICdKb2luIGNoYXQnO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIGlmKGlzSU9TKSB7XHJcbiAgICAgIHRoaXMuYm91bmRzID0gR01TQ29vcmRpbmF0ZUJvdW5kcy5hbGxvYygpLmluaXQoKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgdGhpcy5zdGFydExhdCA9IHRoaXMubWFwRGF0YS5wb3N0SW5mby5kYXRhLnN0YXJ0TGF0O1xyXG4gICAgdGhpcy5lbmRMYXQgPSB0aGlzLm1hcERhdGEucG9zdEluZm8uZGF0YS5lbmRMYXQ7XHJcbiAgICB0aGlzLnN0YXJ0TG5nID0gdGhpcy5tYXBEYXRhLnBvc3RJbmZvLmRhdGEuc3RhcnRMbmc7XHJcbiAgICB0aGlzLmVuZExuZyA9IHRoaXMubWFwRGF0YS5wb3N0SW5mby5kYXRhLmVuZExuZztcclxuICAgIHRoaXMuaW5mbyA9IHRoaXMubWFwRGF0YS5wb3N0SXRlbS5pbmZvO1xyXG4gICAgdGhpcy5wcm9maWxlU291cmNlID0gdGhpcy5tYXBEYXRhLnBvc3RJdGVtLnByb2ZpbGVTb3VyY2U7XHJcbiAgICB0aGlzLnVzZXJuYW1lID0gdGhpcy5tYXBEYXRhLnBvc3RJdGVtLnVzZXJuYW1lO1xyXG5cclxuICAgIFxyXG4gICAgaWYodGhpcy51c2VySWQgIT09IHRoaXMubWFwRGF0YS5wb3N0SW5mby5kYXRhLnVpZCkge1xyXG4gICAgICBkZWxldGVCdXR0b24udmlzaWJpbGl0eSA9ICdjb2xsYXBzZSc7XHJcbiAgICB9XHJcblxyXG4gICAgZmlyZWJhc2UuZ2V0Q3VycmVudFVzZXIoKS50aGVuKCh1c2VyKSA9PiB7XHJcbiAgICAgIHRoaXMuY3VycmVudFVzZXJOYW1lID0gdXNlci5kaXNwbGF5TmFtZTtcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBvbk1hcFJlYWR5KGV2ZW50KSB7XHJcbiAgXHR0aGlzLm1hcFZpZXcgPSBldmVudC5vYmplY3Q7XHJcblxyXG5cdC8vIHRoaXMubGF0aXR1ZGUgPSAodGhpcy5zdGFydExhdCArIHRoaXMuZW5kTGF0KSAvIDIuMDtcclxuXHQvLyB0aGlzLmxvbmdpdHVkZSA9ICh0aGlzLnN0YXJ0TG5nICsgdGhpcy5lbmRMbmcpIC8gMi4wO1xyXG4gIFx0dGhpcy5hZGRNYXJrZXIodGhpcy5zdGFydExhdCwgdGhpcy5zdGFydExuZywgdGhpcy5tYXBEYXRhLnBvc3RJbmZvLmRhdGEuc3RhcnRBZGRyZXNzLCB0aGlzLm1hcERhdGEucG9zdEluZm8uZGF0YS5zdGFydEZvcm1hdHRlZCwgMCk7XHJcblx0ICB0aGlzLmFkZE1hcmtlcih0aGlzLmVuZExhdCwgdGhpcy5lbmRMbmcsIHRoaXMubWFwRGF0YS5wb3N0SW5mby5kYXRhLmVuZEFkZHJlc3MsIHRoaXMubWFwRGF0YS5wb3N0SW5mby5kYXRhLmVuZEZvcm1hdHRlZCwgMSk7XHJcblxyXG4gIFx0aWYoaXNBbmRyb2lkKSB7XHJcbiAgICBcdFx0dmFyIGJ1aWxkZXIgPSBuZXcgY29tLmdvb2dsZS5hbmRyb2lkLmdtcy5tYXBzLm1vZGVsLkxhdExuZ0JvdW5kcy5CdWlsZGVyKCk7XHJcbiAgXHRcdHRoaXMubWFwVmlldy5maW5kTWFya2VyKGZ1bmN0aW9uIChtYXJrZXIpIHsgYnVpbGRlci5pbmNsdWRlKG1hcmtlci5hbmRyb2lkLmdldFBvc2l0aW9uKCkpOyByZXR1cm4gZmFsc2V9KTtcclxuICBcdFx0dmFyIGJvdW5kcyA9IGJ1aWxkZXIuYnVpbGQoKTtcclxuICBcdFx0dmFyIGN1ID0gY29tLmdvb2dsZS5hbmRyb2lkLmdtcy5tYXBzLkNhbWVyYVVwZGF0ZUZhY3RvcnkubmV3TGF0TG5nQm91bmRzKGJvdW5kcywgMTUwKTtcclxuICBcdFx0dGhpcy5tYXBWaWV3LmdNYXAuYW5pbWF0ZUNhbWVyYShjdSk7XHJcbiAgXHR9XHJcbiAgXHRlbHNlIGlmKGlzSU9TKSB7XHJcbiAgXHRcdHZhciB1cGRhdGUgPSBHTVNDYW1lcmFVcGRhdGUuZml0Qm91bmRzV2l0aFBhZGRpbmcoYm91bmRzLCAxNTApOyB0aGlzLm1hcFZpZXcuZ01hcC5tb3ZlQ2FtZXJhKHVwZGF0ZSk7XHJcbiAgXHR9XHJcblxyXG4gIH1cclxuXHJcbiAgYWRkTWFya2VyKGxhdCwgbG5nLCB0aXRsZSwgc25pcHBldCwgaW5kZXgpIHtcclxuICBcdHZhciBtYXJrZXIgPSBuZXcgTWFya2VyKCk7XHJcbiAgICBtYXJrZXIucG9zaXRpb24gPSBQb3NpdGlvbi5wb3NpdGlvbkZyb21MYXRMbmcobGF0LCBsbmcpO1xyXG4gICAgbWFya2VyLnRpdGxlID0gdGl0bGU7XHJcbiAgICBtYXJrZXIuc25pcHBldCA9IHNuaXBwZXQ7XHJcbiAgICBtYXJrZXIudXNlckRhdGEgPSB7aW5kZXg6IGluZGV4fTtcclxuICAgIHRoaXMubWFwVmlldy5hZGRNYXJrZXIobWFya2VyKTtcclxuICAgIGlmKGlzSU9TKVxyXG4gICAgXHR0aGlzLmJvdW5kcyA9IHRoaXMuYm91bmRzLmluY2x1ZGluZ0Nvb3JkaW5hdGUobWFya2VyLnBvc2l0aW9uKTtcclxuICB9XHJcblxyXG4gIG9uTmF2QnRuVGFwKCkge1xyXG4gIFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUoWyduYXZpZ2F0aW9uJ10sIHtjbGVhckhpc3Rvcnk6IHRydWV9KTtcclxuICB9XHJcblxyXG4gIGRlbGV0ZUZpbGVzKCkge1xyXG4gICAgZmlyZWJhc2Uuc3RvcmFnZS5kZWxldGVGaWxlKHtcclxuICAgICAgLy8gdGhlIGZ1bGwgcGF0aCBvZiBhbiBleGlzdGluZyBmaWxlIGluIHlvdXIgRmlyZWJhc2Ugc3RvcmFnZVxyXG4gICAgICByZW1vdGVGdWxsUGF0aDogJ3Bvc3RpbmdzLycgKyB0aGlzLm1hcERhdGEucG9zdEluZm8uaWQgKyAnL21hcHMvbGFyZ2VfbWFwLnBuZydcclxuICAgIH0pLnRoZW4oXHJcbiAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJGaWxlIGRlbGV0ZWQuXCIpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkZpbGUgZGVsZXRpb24gRXJyb3I6IFwiICsgZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgICk7XHJcbiAgICBmaXJlYmFzZS5zdG9yYWdlLmRlbGV0ZUZpbGUoe1xyXG4gICAgICAvLyB0aGUgZnVsbCBwYXRoIG9mIGFuIGV4aXN0aW5nIGZpbGUgaW4geW91ciBGaXJlYmFzZSBzdG9yYWdlXHJcbiAgICAgIHJlbW90ZUZ1bGxQYXRoOiAncG9zdGluZ3MvJyArIHRoaXMubWFwRGF0YS5wb3N0SW5mby5pZCArICcvbWFwcy9zbWFsbF9tYXAucG5nJ1xyXG4gICAgfSkudGhlbihcclxuICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkZpbGUgZGVsZXRlZC5cIik7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAoZXJyb3IpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiRmlsZSBkZWxldGlvbiBFcnJvcjogXCIgKyBlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByb21wdERlbGV0ZSgpIHtcclxuICAgIGRpYWxvZ3MuY29uZmlybSh7XHJcbiAgICAgICAgdGl0bGU6IFwiQ29uZmlybSBkZWxldGVcIixcclxuICAgICAgICBtZXNzYWdlOiBcIkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBwb3N0P1wiLFxyXG4gICAgICAgIG9rQnV0dG9uVGV4dDogXCJDb25maXJtXCIsXHJcbiAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJDYW5jZWxcIixcclxuICAgIH0pLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAvLyByZXN1bHQgYXJndW1lbnQgaXMgYm9vbGVhblxyXG4gICAgICAgIGlmKHJlc3VsdClcclxuICAgICAgICAgIHRoaXMub25EZWxldGUoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb25EZWxldGUoKSB7XHJcbiAgICB2YXIgcG9zdGluZ0RvY3VtZW50ID0gZmlyZWJhc2UuZmlyZXN0b3JlLmNvbGxlY3Rpb24oJ3Bvc3RpbmdzJykuZG9jKHRoaXMubWFwRGF0YS5wb3N0SW5mby5pZCk7XHJcbiAgICB2YXIgdXNlckRvY3VtZW50ID0gZmlyZWJhc2UuZmlyZXN0b3JlLmNvbGxlY3Rpb24oJ3VzZXJzJykuZG9jKHRoaXMubWFwRGF0YS5wb3N0SW5mby5kYXRhLnVpZCk7XHJcbiAgICB2YXIgY2hhdERvY3VtZW50ID0gZmlyZWJhc2UuZmlyZXN0b3JlLmNvbGxlY3Rpb24oJ2NoYXRzJykuZG9jKHRoaXMubWFwRGF0YS5wb3N0SW5mby5pZCk7XHJcbiAgICBwb3N0aW5nRG9jdW1lbnQuZGVsZXRlKCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgIHVzZXJEb2N1bWVudC5nZXQoKS50aGVuKChkb2MpID0+IHtcclxuICAgICAgICBsZXQgdXNlclBvc3RzID0gZG9jLmRhdGEoKS5wb3N0cztcclxuICAgICAgICBjb25zdCBpbmRleCA9IHVzZXJQb3N0cy5pbmRleE9mKHRoaXMubWFwRGF0YS5wb3N0SW5mby5pZCwgMCk7XHJcbiAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcclxuICAgICAgICAgICB1c2VyUG9zdHMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHVzZXJEb2N1bWVudC51cGRhdGUoe1xyXG4gICAgICAgICAgcG9zdHM6IHVzZXJQb3N0c1xyXG4gICAgICAgIH0pLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgLy8gY2hhdERvY3VtZW50LmdldCgpLnRoZW4oKGRvYykgPT4ge1xyXG4gICAgICAgICAgLy8gICBsZXQgZGF0YSA9IGRvYy5kYXRhKCk7XHJcbiAgICAgICAgICAvLyAgIGlmKGRhdGEpIHtcclxuICAgICAgICAgIC8vICAgICBmb3IodmFyIGkgPSAwOyBpIDwgZGF0YS51c2Vycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgLy8gICAgICAgLy8gdGhpcy5jaGF0VXNlcnMucHVzaChkYXRhLnVzZXJzW2ldLnVpZCk7XHJcbiAgICAgICAgICAvLyAgICAgICBmaXJlYmFzZS5maXJlc3RvcmUuY29sbGVjdGlvbigndXNlcnMnKS5kb2MoZGF0YS51c2Vyc1tpXS51aWQpLmdldCgpLnRoZW4oKGRvYykgPT4ge1xyXG4gICAgICAgICAgLy8gICAgICAgICBjb25zdCBpZCA9IGRhdGEudXNlcnNbaV0udWlkO1xyXG4gICAgICAgICAgLy8gICAgICAgICBsZXQgdWlkQ2hhdHMgPSBkb2MuZGF0YSgpLmNoYXRzO1xyXG4gICAgICAgICAgLy8gICAgICAgICBsZXQgaW5kZXggPSB1aWRDaGF0cy5pbmRleE9mKHRoaXMubWFwRGF0YS5wb3N0SW5mby5pZCk7XHJcbiAgICAgICAgICAvLyAgICAgICAgIGlmKGluZGV4ID4gLTEpIHtcclxuICAgICAgICAgIC8vICAgICAgICAgICB1aWRDaGF0cy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgLy8gICAgICAgICB9XHJcbiAgICAgICAgICAvLyAgICAgICAgIGZpcmViYXNlLmZpcmVzdG9yZS5jb2xsZWN0aW9uKCd1c2VycycpLmRvYyhpZCkudXBkYXRlKHtcclxuICAgICAgICAgIC8vICAgICAgICAgICBjaGF0czogdWlkQ2hhdHNcclxuICAgICAgICAgIC8vICAgICAgICAgfSlcclxuICAgICAgICAgIC8vICAgICAgIH0pXHJcbiAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgLy8gICAgIGNoYXREb2N1bWVudC5kZWxldGUoKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgIC8vICAgICAgIHRoaXMuZGVsZXRlRmlsZXMoKTtcclxuICAgICAgICAgIC8vICAgICAgIHRoaXMub25OYXZCdG5UYXAoKTtcclxuICAgICAgICAgIC8vICAgICB9KVxyXG4gICAgICAgICAgLy8gICB9XHJcbiAgICAgICAgICAvLyAgIGVsc2Uge1xyXG4gICAgICAgICAgLy8gICAgIHRoaXMuZGVsZXRlRmlsZXMoKTtcclxuICAgICAgICAgIC8vICAgICB0aGlzLm9uTmF2QnRuVGFwKCk7XHJcbiAgICAgICAgICAvLyAgIH1cclxuICAgICAgICAgIC8vIH0pXHJcbiAgICAgICAgICB0aGlzLmRlbGV0ZUZpbGVzKCk7XHJcbiAgICAgICAgICB0aGlzLm9uTmF2QnRuVGFwKCk7XHJcbiAgICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICB9KVxyXG4gICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgfSlcclxuICAgIH0pLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICByZW1vdmVDaGF0KGluZGV4KSB7XHJcbiAgICBjb25zb2xlLmxvZyhpbmRleCk7XHJcbiAgICBmaXJlYmFzZS5maXJlc3RvcmUuY29sbGVjdGlvbigndXNlcnMnKS5kb2ModGhpcy5jaGF0VXNlcnNbaW5kZXhdKS5nZXQoKS50aGVuKChkb2MpID0+IHtcclxuICAgICAgbGV0IHVzZXJDaGF0cyA9IGRvYy5kYXRhKCkuY2hhdHM7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gdXNlckNoYXRzLmluZGV4T2YodGhpcy5tYXBEYXRhLnBvc3RJbmZvLmlkKTtcclxuICAgICAgaWYgKGluZGV4ID4gLTEpIHtcclxuICAgICAgICAgdXNlckNoYXRzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgIH1cclxuICAgICAgZmlyZWJhc2UuZmlyZXN0b3JlLmNvbGxlY3Rpb24oJ3VzZXJzJykuZG9jKHRoaXMuY2hhdFVzZXJzW2luZGV4XSkudXBkYXRlKHtcclxuICAgICAgICBjaGF0czogdXNlckNoYXRzXHJcbiAgICAgIH0pLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIGlmKGluZGV4ID09PSB0aGlzLmNoYXRVc2Vyc1tpbmRleF0ubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgdGhpcy5kZWxldGVGaWxlcygpO1xyXG4gICAgICAgICAgdGhpcy5vbk5hdkJ0blRhcCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBvblJlcG9ydCgpIHtcclxuXHJcbiAgfVxyXG5cclxuICBvbkNvbm5lY3RUYXAoKSB7XHJcbiAgICBsZXQgZ3JpZENvbnRhaW5lciA9IDxHcmlkTGF5b3V0PiB0aGlzLmxheW91dC5uYXRpdmVFbGVtZW50O1xyXG4gICAgbGV0IGFjdGl2aXR5SW5kaWNhdG9yID0gPEFjdGl2aXR5SW5kaWNhdG9yPiB0aGlzLmFpLm5hdGl2ZUVsZW1lbnQ7XHJcblxyXG4gICAgZ3JpZENvbnRhaW5lci52aXNpYmlsaXR5ID0gJ2NvbGxhcHNlJztcclxuICAgIGFjdGl2aXR5SW5kaWNhdG9yLmJ1c3kgPSB0cnVlO1xyXG5cclxuICAgIGlmKHRoaXMuYnV0dG9uVGV4dCA9PT0gJ1ZpZXcgY2hhdCcpIHtcclxuICAgICAgdGhpcy50cmFuc2ZlclNlcnZpY2Uuc2V0RGF0YSh0aGlzLm1hcERhdGEucG9zdEluZm8uaWQpO1xyXG4gICAgICBncmlkQ29udGFpbmVyLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XHJcbiAgICAgIGFjdGl2aXR5SW5kaWNhdG9yLmJ1c3kgPSBmYWxzZTtcclxuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydjaGF0J10pO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZih0aGlzLmJ1dHRvblRleHQgPT09ICdKb2luIGNoYXQnKSB7XHJcbiAgICAgIGNvbnN0IGNoYXREb2N1bWVudCA9IGZpcmViYXNlLmZpcmVzdG9yZS5jb2xsZWN0aW9uKCdjaGF0cycpLmRvYyh0aGlzLm1hcERhdGEucG9zdEluZm8uaWQpO1xyXG4gICAgICBjb25zdCB1c2VyRG9jdW1lbnQgPSBmaXJlYmFzZS5maXJlc3RvcmUuY29sbGVjdGlvbigndXNlcnMnKS5kb2ModGhpcy51c2VySWQpO1xyXG4gICAgICBjaGF0RG9jdW1lbnQuZ2V0KCkudGhlbigoZG9jKSA9PiB7XHJcbiAgICAgICAgaWYoZG9jLmV4aXN0cykge1xyXG4gICAgICAgICAgLy9jaGF0IGV4aXN0cywgc28gYWRkIHVzZXIgdG8gdGhlIGNoYXQgcm9vbSBhbmQgbmF2aWdhdGUgdGhlcmVcclxuICAgICAgICAgIGxldCB0b2tlbnM6IFtzdHJpbmddID0gZG9jLmRhdGEoKS50b2tlbnM7XHJcbiAgICAgICAgICB2YXIgdXNlcnM6IFt7dWlkOiBzdHJpbmcsIGRpc3BsYXlOYW1lOiBzdHJpbmd9XSA9IGRvYy5kYXRhKCkudXNlcnM7XHJcbiAgICAgICAgICB2YXIgdXNlclRva2VuczogW3N0cmluZ10gPSB0aGlzLmN1cnJlbnRVc2VyLnRva2VucztcclxuICAgICAgICAgIHZhciBuZXdUb2tlbnMgPSB0b2tlbnMuY29uY2F0KHVzZXJUb2tlbnMpO1xyXG4gICAgICAgICAgdXNlcnMucHVzaCh7dWlkOiB0aGlzLnVzZXJJZCwgZGlzcGxheU5hbWU6IHRoaXMuY3VycmVudFVzZXJOYW1lfSlcclxuICAgICAgICAgIGNoYXREb2N1bWVudC51cGRhdGUoe1xyXG4gICAgICAgICAgICB1c2VyczogdXNlcnMsXHJcbiAgICAgICAgICAgIHRva2VuczogQXJyYXkuZnJvbShuZXcgU2V0KG5ld1Rva2VucykpXHJcbiAgICAgICAgICB9KS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgdXNlckRvY3VtZW50LmdldCgpLnRoZW4oKGRvYykgPT4ge1xyXG4gICAgICAgICAgICAgIHZhciB1c2VyQ2hhdHMgPSBkb2MuZGF0YSgpLmNoYXRzO1xyXG4gICAgICAgICAgICAgIHVzZXJDaGF0cy5wdXNoKHRoaXMubWFwRGF0YS5wb3N0SW5mby5pZCk7XHJcbiAgICAgICAgICAgICAgdXNlckRvY3VtZW50LnVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBjaGF0czogdXNlckNoYXRzXHJcbiAgICAgICAgICAgICAgfSkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvL2ZpbmFsbHkgYWZ0ZXIgZXZlcnl0aGluZyBlbHNlIGhhcyB1cGRhdGVkLCBzZW5kIHVzZXIgdG8gY2hhdCBjb21wb25lbnRcclxuICAgICAgICAgICAgICAgIHRoaXMudHJhbnNmZXJTZXJ2aWNlLnNldERhdGEodGhpcy5tYXBEYXRhLnBvc3RJbmZvLmlkKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYnV0dG9uVGV4dCA9ICdWaWV3IGNoYXQnO1xyXG4gICAgICAgICAgICAgICAgZ3JpZENvbnRhaW5lci52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xyXG4gICAgICAgICAgICAgICAgYWN0aXZpdHlJbmRpY2F0b3IuYnVzeSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydjaGF0J10pO1xyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIC8vY2hhdCBkb2VzIG5vdCBleGlzdCwgc28gY3JlYXRlIGFuZCBhZGQgYm90aCBwb3N0IHVzZXIgYW5kIGN1cnJlbnQgdXNlclxyXG4gICAgICAgICAgZmlyZWJhc2UuZmlyZXN0b3JlLmNvbGxlY3Rpb24oJ2NoYXRzJykuZG9jKHRoaXMubWFwRGF0YS5wb3N0SW5mby5pZCkuc2V0KHtcclxuICAgICAgICAgICAgdXNlcnM6IFt7dWlkOiB0aGlzLm1hcERhdGEucG9zdEluZm8uZGF0YS51aWQsIGRpc3BsYXlOYW1lOiB0aGlzLm1hcERhdGEucG9zdEl0ZW0udXNlcm5hbWV9LCB7dWlkOiB0aGlzLnVzZXJJZCwgZGlzcGxheU5hbWU6IHRoaXMuY3VycmVudFVzZXJOYW1lfV0sXHJcbiAgICAgICAgICAgIGNoYXRzOiBbXSxcclxuICAgICAgICAgICAgZXhwaXJlZDogZmFsc2UsXHJcbiAgICAgICAgICB9KS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgZmlyZWJhc2UuZmlyZXN0b3JlLmNvbGxlY3Rpb24oJ3VzZXJzJykuZG9jKHRoaXMubWFwRGF0YS5wb3N0SW5mby5kYXRhLnVpZCkuZ2V0KCkudGhlbigoZG9jKSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc3QgdXNlclRva2VucyA9IHRoaXMuY3VycmVudFVzZXIudG9rZW5zO1xyXG4gICAgICAgICAgICAgIGNvbnN0IG90aGVyVXNlclRva2VucyA9IGRvYy5kYXRhKCkudG9rZW5zO1xyXG4gICAgICAgICAgICAgIGNvbnN0IG5ld1Rva2VucyA9IHVzZXJUb2tlbnMuY29uY2F0KG90aGVyVXNlclRva2Vucyk7XHJcbiAgICAgICAgICAgICAgZmlyZWJhc2UuZmlyZXN0b3JlLmNvbGxlY3Rpb24oJ2NoYXRzJykuZG9jKHRoaXMubWFwRGF0YS5wb3N0SW5mby5pZCkudXBkYXRlKHtcclxuICAgICAgICAgICAgICAgIHRva2VuczogQXJyYXkuZnJvbShuZXcgU2V0KG5ld1Rva2VucykpXHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICB2YXIgdXNlckNoYXRzID0gZG9jLmRhdGEoKS5jaGF0cztcclxuICAgICAgICAgICAgICB1c2VyQ2hhdHMucHVzaCh0aGlzLm1hcERhdGEucG9zdEluZm8uaWQpO1xyXG4gICAgICAgICAgICAgIGZpcmViYXNlLmZpcmVzdG9yZS5jb2xsZWN0aW9uKCd1c2VycycpLmRvYyh0aGlzLm1hcERhdGEucG9zdEluZm8uZGF0YS51aWQpLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBjaGF0czogdXNlckNoYXRzXHJcbiAgICAgICAgICAgICAgfSkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB1c2VyRG9jdW1lbnQuZ2V0KCkudGhlbigoZG9jKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHZhciB1c2VyQ2hhdHMgPSBkb2MuZGF0YSgpLmNoYXRzO1xyXG4gICAgICAgICAgICAgICAgICB1c2VyQ2hhdHMucHVzaCh0aGlzLm1hcERhdGEucG9zdEluZm8uaWQpO1xyXG4gICAgICAgICAgICAgICAgICB1c2VyRG9jdW1lbnQudXBkYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBjaGF0czogdXNlckNoYXRzXHJcbiAgICAgICAgICAgICAgICAgIH0pLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vZmluYWxseSBhZnRlciBldmVyeXRoaW5nIGVsc2UgaGFzIHVwZGF0ZWQsIHNlbmQgdXNlciB0byBjaGF0IGNvbXBvbmVudFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHJhbnNmZXJTZXJ2aWNlLnNldERhdGEodGhpcy5tYXBEYXRhLnBvc3RJbmZvLmlkKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJ1dHRvblRleHQgPSAnVmlldyBjaGF0JztcclxuICAgICAgICAgICAgICAgICAgICBncmlkQ29udGFpbmVyLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZpdHlJbmRpY2F0b3IuYnVzeSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnY2hhdCddKTtcclxuICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQb3N0aW5nU2VydmljZSB7XHJcblx0LyoqXHJcblx0KiBUbyBnZXQgdGhlIHNlcnZlciB0byByZWNvZ25pemUgeW91ciBtb2JpbGUgZGV2aWNlLCBmaW5kIHlvdXIgaXB2NCBhZGRyZXNzIGJ5IHJ1bm5pbmcgaXBjb25maWcgaW4gYSB0ZXJtaW5hbCB3aW5kb3dcclxuXHQqIGFuZCBhZGQgYSBuZXcgdXJpIGxpbmUgd2l0aCB5b3VyIGlwdjQgYWRkcmVzcy4gRG8gdGhpcyBmb3IgbmV0d29ya19zZWN1cml0eV9jb25maWcueG1sLCB1c2VyLnNlcnZpY2VzLnRucy50cywgYW5kXHJcblx0KiBwb3N0aW5nLnNlcnZpY2UudG5zLnRzLlxyXG5cdCovXHJcblx0Ly8gQWRhbSdzIHRlc3Rpbmcgc2VydmVyXHJcblx0Ly8gdXJpID0gJ2h0dHA6Ly8xOTIuMTY4LjEuNzo0MDAwJztcclxuXHQvLyB1cmkgPSAnaHR0cDovLzEwLjUuMTEuMjU6NDAwMCc7XHJcblx0Ly8gUGhpbGxpcCdzIFRlc3Rpbmcgc2VydmVyXHJcblx0dXJpID0gJ2h0dHA6Ly8xOTIuMTY4LjEuMzo0MDAwJztcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHsgfVxyXG5cclxuICBnZXRQb3N0aW5ncygpIHtcclxuICBcdHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke3RoaXMudXJpfS9wb3N0aW5nc2ApO1xyXG4gIH1cclxuXHJcbiAgZ2V0UG9zdGluZ2J5SWQoaWQpIHtcclxuICBcdHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke3RoaXMudXJpfS9wb3N0aW5ncy8ke2lkfWApO1xyXG4gIH1cclxuXHJcbiAgYWRkUG9zdGluZyh1c2VyLCBzdGFydGFkciwgZW5kYWRyLCBkYXRlLCBjb3N0LCBjYXBhY2l0eSwgY29tbWVudHMpIHtcclxuXHJcbiAgICAvL2NvbnN0IHByaWNlID0gcmVxKC4uLy4uL2JhY2tlbmQvZGF0YS9wcmljaW5nKSh7c3RhcnQ6IHN0YXJ0YWRyLCBlbmQ6IGVuZGFkcn0pO1xyXG5cclxuICBcdGNvbnN0IHBvc3RpbmcgPSB7XHJcbiAgXHRcdHVzZXIgOiB1c2VyLFxyXG4gIFx0XHRzdGFydGFkciA6IHN0YXJ0YWRyLFxyXG4gIFx0XHRlbmRhZHIgOiBlbmRhZHIsXHJcbiAgXHRcdGRhdGUgOiBkYXRlLFxyXG4gIFx0XHRjb3N0IDogY29zdCxcclxuICBcdFx0Y2FwYWNpdHkgOiBjYXBhY2l0eSxcclxuICBcdFx0Y29tbWVudHMgOiBjb21tZW50c1xyXG4gIFx0fTtcclxuICBcdHJldHVybiB0aGlzLmh0dHAucG9zdChgJHt0aGlzLnVyaX0vcG9zdGluZ3MvYWRkL2AsIHBvc3RpbmcpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlUG9zdGluZyhpZCwgdXNlciwgc3RhcnRhZHIsIGVuZGFkciwgZGF0ZSwgY29zdCwgY2FwYWNpdHksIGNvbW1lbnRzKSB7XHJcbiAgICAvL2NvbnN0IHByaWNlID0gcmVxKC4uLy4uL2JhY2tlbmQvZGF0YS9wcmljaW5nKSh7c3RhcnQ6IHN0YXJ0YWRyLCBlbmQ6IGVuZGFkcn0pO1xyXG4gIFx0Y29uc3QgcG9zdGluZyA9IHtcclxuICBcdFx0dXNlciA6IHVzZXIsXHJcbiAgXHRcdHN0YXJ0YWRyIDogc3RhcnRhZHIsXHJcbiAgXHRcdGVuZGFkciA6IGVuZGFkcixcclxuICBcdFx0ZGF0ZSA6IGRhdGUsXHJcbiAgXHRcdGNvc3QgOiBjb3N0LFxyXG4gIFx0XHRjYXBhY2l0eSA6IGNhcGFjaXR5LFxyXG4gIFx0XHRjb21tZW50cyA6IGNvbW1lbnRzXHJcbiAgXHR9O1xyXG4gIFx0cmV0dXJuIHRoaXMuaHR0cC5wb3N0KGAke3RoaXMudXJpfS9wb3N0aW5ncy91cGRhdGUvJHtpZH1gLCBwb3N0aW5nKTtcclxuICB9XHJcblxyXG4gIGRlbGV0ZVBvc3RpbmcoaWQpIHtcclxuICBcdHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke3RoaXMudXJpfS9wb3N0aW5ncy9kZWxldGUvJHtpZH1gKTtcclxuICB9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFBvc3RpbmdTZXJ2aWNlIHtcclxuXHQvKipcclxuXHQqIFRvIGdldCB0aGUgc2VydmVyIHRvIHJlY29nbml6ZSB5b3VyIG1vYmlsZSBkZXZpY2UsIGZpbmQgeW91ciBpcHY0IGFkZHJlc3MgYnkgcnVubmluZyBpcGNvbmZpZyBpbiBhIHRlcm1pbmFsIHdpbmRvd1xyXG5cdCogYW5kIGFkZCBhIG5ldyB1cmkgbGluZSB3aXRoIHlvdXIgaXB2NCBhZGRyZXNzLiBEbyB0aGlzIGZvciBuZXR3b3JrX3NlY3VyaXR5X2NvbmZpZy54bWwsIHVzZXIuc2VydmljZXMudG5zLnRzLCBhbmRcclxuXHQqIHBvc3Rpbmcuc2VydmljZS50bnMudHMuXHJcblx0Ki9cclxuXHQvLyBBZGFtJ3MgdGVzdGluZyBzZXJ2ZXJcclxuXHQvLyB1cmkgPSAnaHR0cDovLzE5Mi4xNjguMS43OjQwMDAnO1xyXG5cdC8vIHVyaSA9ICdodHRwOi8vMTAuNS4xMS4yNTo0MDAwJztcclxuXHQvLyBQaGlsbGlwJ3MgVGVzdGluZyBzZXJ2ZXJcclxuXHR1cmkgPSAnaHR0cDovLzE5Mi4xNjguMS4zOjQwMDAnO1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkgeyB9XHJcblxyXG4gIGdldFBvc3RpbmdzKCkge1xyXG4gIFx0cmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy51cml9L3Bvc3RpbmdzYCk7XHJcbiAgfVxyXG5cclxuICBnZXRQb3N0aW5nYnlJZChpZCkge1xyXG4gIFx0cmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy51cml9L3Bvc3RpbmdzLyR7aWR9YCk7XHJcbiAgfVxyXG5cclxuICBhZGRQb3N0aW5nKHVzZXIsIHN0YXJ0YWRyLCBlbmRhZHIsIGRhdGUsIGNvc3QsIGNhcGFjaXR5LCBjb21tZW50cykge1xyXG5cclxuICAgIC8vY29uc3QgcHJpY2UgPSByZXEoLi4vLi4vYmFja2VuZC9kYXRhL3ByaWNpbmcpKHtzdGFydDogc3RhcnRhZHIsIGVuZDogZW5kYWRyfSk7XHJcblxyXG4gIFx0Y29uc3QgcG9zdGluZyA9IHtcclxuICBcdFx0dXNlciA6IHVzZXIsXHJcbiAgXHRcdHN0YXJ0YWRyIDogc3RhcnRhZHIsXHJcbiAgXHRcdGVuZGFkciA6IGVuZGFkcixcclxuICBcdFx0ZGF0ZSA6IGRhdGUsXHJcbiAgXHRcdGNvc3QgOiBjb3N0LFxyXG4gIFx0XHRjYXBhY2l0eSA6IGNhcGFjaXR5LFxyXG4gIFx0XHRjb21tZW50cyA6IGNvbW1lbnRzXHJcbiAgXHR9O1xyXG4gIFx0cmV0dXJuIHRoaXMuaHR0cC5wb3N0KGAke3RoaXMudXJpfS9wb3N0aW5ncy9hZGQvYCwgcG9zdGluZyk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVQb3N0aW5nKGlkLCB1c2VyLCBzdGFydGFkciwgZW5kYWRyLCBkYXRlLCBjb3N0LCBjYXBhY2l0eSwgY29tbWVudHMpIHtcclxuICAgIC8vY29uc3QgcHJpY2UgPSByZXEoLi4vLi4vYmFja2VuZC9kYXRhL3ByaWNpbmcpKHtzdGFydDogc3RhcnRhZHIsIGVuZDogZW5kYWRyfSk7XHJcbiAgXHRjb25zdCBwb3N0aW5nID0ge1xyXG4gIFx0XHR1c2VyIDogdXNlcixcclxuICBcdFx0c3RhcnRhZHIgOiBzdGFydGFkcixcclxuICBcdFx0ZW5kYWRyIDogZW5kYWRyLFxyXG4gIFx0XHRkYXRlIDogZGF0ZSxcclxuICBcdFx0Y29zdCA6IGNvc3QsXHJcbiAgXHRcdGNhcGFjaXR5IDogY2FwYWNpdHksXHJcbiAgXHRcdGNvbW1lbnRzIDogY29tbWVudHNcclxuICBcdH07XHJcbiAgXHRyZXR1cm4gdGhpcy5odHRwLnBvc3QoYCR7dGhpcy51cml9L3Bvc3RpbmdzL3VwZGF0ZS8ke2lkfWAsIHBvc3RpbmcpO1xyXG4gIH1cclxuXHJcbiAgZGVsZXRlUG9zdGluZyhpZCkge1xyXG4gIFx0cmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy51cml9L3Bvc3RpbmdzL2RlbGV0ZS8ke2lkfWApO1xyXG4gIH1cclxuXHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi8qXFxuQWRkIHlvdXIgTmF0aXZlU2NyaXB0IHNwZWNpZmljIHN0eWxlcyBoZXJlLlxcblRvIGxlYXJuIG1vcmUgYWJvdXQgc3R5bGluZyBpbiBOYXRpdmVTY3JpcHQgc2VlOlxcbmh0dHBzOi8vZG9jcy5uYXRpdmVzY3JpcHQub3JnL2FuZ3VsYXIvdWkvc3R5bGluZ1xcbiovXFxuXFxuTGFiZWwge1xcblxcdHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblxcbi5uYW1lLWxhYmVsIHtcXG5cXHRtYXJnaW4tdG9wOiAxNjtcXG5cXHRtYXJnaW4tbGVmdDogMjQ7XFxuXFx0Y29sb3I6IGJsYWNrO1xcblxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxuXFx0Zm9udC1zaXplOiAxODtcXG59XFxuXFxuLmluZm8tbGFiZWwge1xcblxcdG1hcmdpbi10b3A6IDEyO1xcblxcdG1hcmdpbi1sZWZ0OiAyNDtcXG5cXHRtYXJnaW4tYm90dG9tOiAxNjtcXG5cXHRjb2xvcjogYmxhY2s7XFxufVxcblxcbi5wb3N0IHtcXG5cXHRib3JkZXItYm90dG9tLXdpZHRoOiAxO1xcblxcdGJvcmRlci1jb2xvcjogI2YxZjFmMTtcXG59XFxuXFxuLnBvc3Q6aGlnaGxpZ2h0ZWQge1xcblxcdGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XFxufVxcblxcbi5wb3N0aW5nLW1hcCB7XFxuXFx0bWFyZ2luLWJvdHRvbTogMTY7XFxuXFx0Ym9yZGVyLXJhZGl1czogMTA7XFxuXFx0LyphbGlnbi1jb250ZW50OiBjZW50ZXI7Ki9cXG59XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJwb3N0XFxcIj5cXG4gIDxMYWJlbCB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgaWQ9XFxcInBvc3QtbmFtZVxcXCIgY2xhc3M9XFxcIm5hbWUtbGFiZWxcXFwiPjwvTGFiZWw+XFxuICA8TGFiZWwgdGV4dFdyYXA9XFxcInRydWVcXFwiIGlkPVxcXCJwb3N0LWluZm9cXFwiIGNsYXNzPVxcXCJpbmZvLWxhYmVsXFxcIj48L0xhYmVsPlxcbiAgPEltYWdlIHNyYz1cXFwifi9pbWcvY3ZpbGxlLW1hcC5wbmdcXFwiIHN0cmV0Y2g9XFxcIm5vbmVcXFwiIGhlaWdodD1cXFwiMjIwXFxcIiB3aWR0aD1cXFwiMzAwXFxcIiBjbGFzcz1cXFwicG9zdGluZy1tYXBcXFwiPjwvSW1hZ2U+XFxuPC9TdGFja0xheW91dD5cXG5cXG48IS0tXFxuT3JpZ2luYWwgV2ViIHRlbXBsYXRlOlxcblxcblxcbi0tPlwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgVHJhbnNmZXJTZXJ2aWNlIH0gZnJvbSAnLi4vZGF0YXRyYW5zZmVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlJztcclxuaW1wb3J0IHsgTGFiZWwgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2xhYmVsJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLXBvc3RpbmcnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wb3N0aW5nLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9wb3N0aW5nLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUG9zdGluZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgaWQ7XHJcbiAgYnV0dG9uVHlwZTtcclxuXHJcbiAgaW5mbyA9IHRoaXMudHJhbnNmZXJTZXJ2aWNlLmdldERhdGEoKVswXTtcclxuXHJcbiAgaW5mb1RleHQgPSBcIkxlYXZpbmcgXCIgKyB0aGlzLmluZm8uZGF0ZSArIFwiIGZyb20gXCIgKyB0aGlzLmluZm8uc3RhcnRhZHIgKyBcIiB0byBcIiArIHRoaXMuaW5mby5lbmRhZHIgKyBcIiBmb3IgXCIgKyB0aGlzLmluZm8uY29zdDtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRyYW5zZmVyU2VydmljZTogVHJhbnNmZXJTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHBhZ2U6IFBhZ2UpIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIFx0dGhpcy5pZCA9IHRoaXMuaW5mby5pZDtcclxuICBcdHRoaXMuYnV0dG9uVHlwZSA9IHRoaXMuaW5mby5idXR0b25UeXBlO1xyXG4gICAgY29uc3QgbmFtZV9sYWJlbCA9IDxMYWJlbD50aGlzLnBhZ2UuZ2V0Vmlld0J5SWQoJ3Bvc3QtbmFtZScpO1xyXG4gICAgbmFtZV9sYWJlbC50ZXh0ID0gdGhpcy5pbmZvLnVzZXI7XHJcbiAgICBuYW1lX2xhYmVsLmlkID0gJ3Bvc3QtbmFtZScgKyB0aGlzLmluZm8uaW5kZXg7XHJcbiAgICBjb25zdCBpbmZvX2xhYmVsID0gPExhYmVsPnRoaXMucGFnZS5nZXRWaWV3QnlJZCgncG9zdC1pbmZvJyk7XHJcbiAgICBpZih0aGlzLmluZm8uY2FwYWNpdHkgPiAwKVxyXG4gICAgICBpbmZvX2xhYmVsLnRleHQgPSBcIk9mZmVyaW5nIHJpZGUgbGVhdmluZyBcIiArIHRoaXMuaW5mby5kYXRlICsgXCIgZnJvbSBcIiArIHRoaXMuaW5mby5zdGFydGFkciArIFwiIHRvIFwiICsgdGhpcy5pbmZvLmVuZGFkciArIFwiIGZvciBcIiArIHRoaXMuaW5mby5jb3N0O1xyXG4gICAgZWxzZVxyXG4gICAgICBpbmZvX2xhYmVsLnRleHQgPSBcIlJlcXVlc3RpbmcgcmlkZSBsZWF2aW5nIFwiICsgdGhpcy5pbmZvLmRhdGUgKyBcIiBmcm9tIFwiICsgdGhpcy5pbmZvLnN0YXJ0YWRyICsgXCIgdG8gXCIgKyB0aGlzLmluZm8uZW5kYWRyO1xyXG4gICAgaW5mb19sYWJlbC5pZCA9ICdwb3N0LWluZm8nICsgdGhpcy5pbmZvLmluZGV4O1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJjcmVhdGVkIHBvc3RcIik7XHJcbiAgXHQvLyB0aGlzLmNyZWF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlKCkge1xyXG4gIFx0Y29uc29sZS5sb2codGhpcy5pbmZvKTtcclxuICBcdGNvbnNvbGUubG9nKHRoaXMuaW5mby5pbmRleCk7XHJcblx0ICB2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGRpdi5pZCA9IFwiZmVlZFwiKyB0aGlzLmluZm8uaW5kZXg7XHJcbiAgICBkaXYuY2xhc3NOYW1lID0gXCJwb3N0aW5nLWJsb2NrXCI7XHJcbiAgICBkaXYuc3R5bGUuZGlzcGxheSA9IFwiYWxsXCI7XHJcbiAgICBkaXYuc3R5bGUubWFyZ2luID0gXCJhdXRvXCI7XHJcbiAgICBkaXYuc3R5bGUubWFyZ2luVG9wID0gXCIwLjVlbVwiO1xyXG4gICAgZGl2LnN0eWxlLm1hcmdpbkJvdHRvbSA9IFwiMC41ZW1cIjtcclxuXHJcbiAgICAvL2Rpdi5zdHlsZS5wYWRkaW5nTGVmdCA9IFwiMjAlXCI7XHJcbiAgICAvL2Rpdi5zdHlsZS53aWR0aCA9IFwiNDAlXCI7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmlnZmVlZCcpLmFwcGVuZENoaWxkKGRpdik7XHJcbiAgICBcclxuICAgIHZhciBkaXZ0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmZWVkJysgdGhpcy5pbmZvLmluZGV4KS5hcHBlbmRDaGlsZChkaXZ0ZXh0KTtcclxuICAgIGRpdnRleHQuaWQgPSBcInRleHRcIisgdGhpcy5pbmZvLmluZGV4O1xyXG4gICAgXHJcbiAgICB2YXIgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIklNR1wiKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0JysgdGhpcy5pbmZvLmluZGV4KS5hcHBlbmRDaGlsZChpbWcpO1xyXG4gICAgaW1nLmlkID0gXCJwZnBcIisgdGhpcy5pbmZvLmluZGV4O1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwZnBcIik7XHJcbiAgICBpbWcuY2xhc3NOYW1lID0gXCJwZnBcIjtcclxuICAgIChpbWcgYXMgSFRNTElucHV0RWxlbWVudCkuc3JjID0gXCJzcmMvaW1nL3NhbXBsZV9wcm9maWxlLmpwZ1wiO1xyXG4gICAgXHJcbiAgICB2YXIgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHQnKyB0aGlzLmluZm8uaW5kZXgpLmFwcGVuZENoaWxkKGhlYWRlcik7XHJcbiAgICBoZWFkZXIuaWQgPSBcIm5hbWVcIisgdGhpcy5pbmZvLmluZGV4O1xyXG4gICAgaGVhZGVyLmlubmVySFRNTCA9IHRoaXMuaW5mby51c2VyO1xyXG4gICAgaGVhZGVyLmNsYXNzTmFtZSA9IFwiaGVhZGVyXCI7XHJcbiAgICBcclxuICAgIHZhciBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHQnKyB0aGlzLmluZm8uaW5kZXgpLmFwcGVuZENoaWxkKHApO1xyXG4gICAgcC5pZCA9IFwiZGV0YWlsc1wiKyB0aGlzLmluZm8uaW5kZXg7XHJcbiAgICBwLmlubmVySFRNTCA9IFwiTGVhdmluZyBcIiArIHRoaXMuaW5mby5kYXRlICsgXCIgZnJvbSBcIiArIHRoaXMuaW5mby5zdGFydGFkciArIFwiIHRvIFwiICsgdGhpcy5pbmZvLmVuZGFkciArIFwiIGZvciBcIiArIHRoaXMuaW5mby5jb3N0O1xyXG4gICAgcC5jbGFzc05hbWUgPSBcImRldGFpbHNcIjtcclxuICAgIFxyXG4gICAgdmFyIG1hcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJJTUdcIilcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0JysgdGhpcy5pbmZvLmluZGV4KS5hcHBlbmRDaGlsZChtYXApO1xyXG4gICAgbWFwLmlkID0gXCJtYXBcIisgdGhpcy5pbmZvLmluZGV4O1xyXG4gICAgbWFwLmNsYXNzTmFtZSA9IFwiZGVzdGluYXRpb25cIjtcclxuICAgIChtYXAgYXMgSFRNTElucHV0RWxlbWVudCkuc3JjID0gXCJzcmMvaW1nL3ZpcmdpbmlhX21hcC5qcGdcIjtcclxuICAgIFxyXG4gICAgdmFyIGNvbm5lY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHQnKyB0aGlzLmluZm8uaW5kZXgpLmFwcGVuZENoaWxkKGNvbm5lY3QpO1xyXG4gICAgY29ubmVjdC5pZCA9IHRoaXMuYnV0dG9uVHlwZSArIHRoaXMuaW5mby5pbmRleDtcclxuICAgIGNvbm5lY3QuY2xhc3NOYW1lID0gXCJwb3N0aW5nLWJ1dHRvblwiO1xyXG4gICAgY29ubmVjdC5pbm5lckhUTUwgPSB0aGlzLmluZm8uYnV0dG9uVHlwZTtcclxuICAgIGNvbm5lY3Quc3R5bGUubWFyZ2luUmlnaHQgPSBcIjFlbVwiO1xyXG4gICAgY29ubmVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGU6RXZlbnQpID0+IHRoaXMuY2xpY2tlZCh0aGlzLmluZm8uYnV0dG9uVHlwZSkpO1xyXG4gIH1cclxuICBjbGlja2VkKGJ1dHRvblR5cGUpe1xyXG4gIFx0dGhpcy50cmFuc2ZlclNlcnZpY2Uuc2V0RGF0YSh0aGlzLmluZm8pO1xyXG4gIFx0aWYoYnV0dG9uVHlwZSA9PSBcIkNvbm5lY3RcIilcclxuXHRcdHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoJy9jb25uZWN0Jyk7XHJcblx0ZWxzZVxyXG5cdFx0dGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCgnL3VwZGF0ZScpO1xyXG4gIH1cclxuXHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi8qIEFkZCBtb2JpbGUgc3R5bGVzIGZvciB0aGUgY29tcG9uZW50IGhlcmUuICAqL1xcclxcbi5oZWFkZXJ7XFxyXFxuICAgIG1hcmdpbi10b3A6IDUwO1xcclxcbiAgICBtYXJnaW4tbGVmdDogMjI7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMjI7XFxyXFxuXFx0Y29sb3I6IGJsYWNrO1xcclxcbiAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICBmb250LXNpemU6IDI0O1xcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbn1cXHJcXG4uc3VibWl0LWJ0bntcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjojYWMwMGU2O1xcclxcbiAgICB3aWR0aDogNzUlO1xcclxcbiAgICBoZWlnaHQ6IDE3MHB4O1xcclxcbiAgICBmb250LWZhbWlseTogXFxcIlNlZ29lIFVJXFxcIixBcmlhbCxzYW5zLXNlcmlmO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIG1hcmdpbi10b3A6IDIwO1xcclxcbn1cXHJcXG4udGV4dC1maWVsZHtcXHJcXG4gICAgd2lkdGg6IDg1JTtcXHJcXG4gICAgbWFyZ2luLXRvcDogMjA7XFxyXFxuICAgIGNvbG9yOiM2OTY5NjlcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlLWJ1dHRvbi1jb250YWluZXIge1xcclxcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHRsZWZ0OiAwO1xcclxcbn1cXHJcXG4uY2xvc2Uge1xcclxcblxcdG1hcmdpbjogMTA7XFxyXFxuXFx0Zm9udC1zaXplOiA0MDtcXHJcXG5cXHR3aWR0aDogNDg7XFxyXFxuICAgIGhlaWdodDogNDg7XFxyXFxuICAgIGNvbG9yOiBibGFja1xcclxcbn1cXHJcXG5cXHJcXG4uZXJyb3ItbWVzc2FnZSB7XFxyXFxuXFx0Y29sb3I6IHJlZDtcXHJcXG5cXHRmb250LXNpemU6IDE2O1xcclxcblxcdHZpc2liaWxpdHk6IGNvbGxhcHNlO1xcclxcbn1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8U3RhY2tsYXlvdXQ+XFxyXFxuICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiY2xvc2UtYnV0dG9uLWNvbnRhaW5lclxcXCIgb3JpZW50YXRpb249XFxcImhvcml6b250YWxcXFwiPlxcclxcbiAgICAgICAgPExhYmVsIHRleHQ9XFxcIiZ0aW1lcztcXFwiIGNsYXNzPVxcXCJjbG9zZVxcXCIgKHRhcCk9XFxcImNsb3NlKCdjYW5jZWwnKVxcXCI+PC9MYWJlbD5cXHJcXG4gICAgPC9TdGFja0xheW91dD5cXHJcXG4gICAgPExhYmVsIGNsYXNzPVxcXCJoZWFkZXJcXFwiIHRleHQ9XFxcIlBsZWFzZSByZS1lbnRlciB5b3VyIHBhc3N3b3JkXFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCI+PC9MYWJlbD5cXHJcXG4gICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJpbnB1dC1maWVsZFxcXCI+XFxyXFxuICAgICAgICA8VGV4dEZpZWxkICN2YWwgWyhuZ01vZGVsKV09XFxcInBhc3N3b3JkXFxcIiBzZWN1cmU9XFxcInRydWVcXFwiIGF1dG9jb3JyZWN0PVxcXCJmYWxzZVxcXCIgcmV0dXJuS2V5VHlwZT1cXFwiZG9uZVxcXCIgY2xhc3M9XFxcInRleHQtZmllbGRcXFwiPjwvVGV4dEZpZWxkPlxcclxcbiAgICA8L1N0YWNrTGF5b3V0PlxcclxcbiAgICA8TGFiZWwgdGV4dD1cXFwiVGhlIHBhc3N3b3JkIHlvdSBlbnRlcmVkIHdhcyBpbmNvcnJlY3RcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiBjbGFzcz1cXFwiZXJyb3ItbWVzc2FnZVxcXCIgI2Vycm9yTWVzc2FnZT48L0xhYmVsPlxcclxcblxcclxcbiAgICA8QnV0dG9uIHRleHQ9XFxcIlN1Ym1pdFxcXCIgKHRhcCk9XFxcInN1Ym1pdChwYXNzd29yZClcXFwiIGNsYXNzPVxcXCJzdWJtaXQtYnRuXFxcIj48L0J1dHRvbj5cXHJcXG5cXHJcXG48L1N0YWNrbGF5b3V0PlwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDb250YWluZXJSZWYsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNb2RhbERpYWxvZ1BhcmFtcyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9kaXJlY3RpdmVzL2RpYWxvZ3NcIjtcclxuaW1wb3J0ICogYXMgZmlyZWJhc2UgZnJvbSAnbmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZSc7XHJcbmltcG9ydCB7IExvZ2luY2hlY2tTZXJ2aWNlIH0gZnJvbSAnLi4vbG9naW5jaGVjay5zZXJ2aWNlLnRucyc7XHJcbmltcG9ydCB7IFRyYW5zZmVyU2VydmljZSB9IGZyb20gJy4uL2RhdGF0cmFuc2Zlci5zZXJ2aWNlJztcclxuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCI7XHJcbmltcG9ydCB7IFNldHRpbmdzZm9ybUNvbXBvbmVudCB9IGZyb20gJy4uL3NldHRpbmdzZm9ybS9zZXR0aW5nc2Zvcm0uY29tcG9uZW50JztcclxuaW1wb3J0IHsgTW9kYWxEaWFsb2dTZXJ2aWNlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2RpcmVjdGl2ZXMvZGlhbG9nc1wiO1xyXG5pbXBvcnQgeyBMYWJlbCB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvbGFiZWwnO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLXJlYXV0aCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3JlYXV0aC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vcmVhdXRoLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUmVhdXRoQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwYXJhbXM6IE1vZGFsRGlhbG9nUGFyYW1zLCBwcml2YXRlIHRyYW5zZmVyU2VydmljZTogVHJhbnNmZXJTZXJ2aWNlLCBwcml2YXRlIGxvZ2luY2hlY2tTZXJ2aWNlOiBMb2dpbmNoZWNrU2VydmljZSwgXHJcbiAgXHRwcml2YXRlIHZjUmVmOiBWaWV3Q29udGFpbmVyUmVmLCBwcml2YXRlIG1vZGFsOiBNb2RhbERpYWxvZ1NlcnZpY2UpIHsgfVxyXG5cclxuICBAVmlld0NoaWxkKFwiZXJyb3JNZXNzYWdlXCIsIHsgc3RhdGljOiB0cnVlIH0pIGVtOiBFbGVtZW50UmVmO1xyXG4gIGZpZWxkO1xyXG4gIHVzZXJJZDtcclxuICB1c2VyRW1haWw7XHJcbiAgcGFzc3dvcmQ7XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIFx0dGhpcy5maWVsZCA9IHRoaXMudHJhbnNmZXJTZXJ2aWNlLmdldERhdGEoKTtcclxuICBcdHRoaXMudXNlcklkID0gdGhpcy5sb2dpbmNoZWNrU2VydmljZS5nZXRVc2VyKCk7XHJcbiAgXHRmaXJlYmFzZS5nZXRDdXJyZW50VXNlcigpLnRoZW4oKHVzZXIpID0+IHtcclxuICBcdFx0dGhpcy51c2VyRW1haWwgPSB1c2VyLmVtYWlsO1xyXG4gIFx0fSlcclxuICB9XHJcblxyXG4gIGNsb3NlKHJlcykge1xyXG4gIFx0bGV0IGVycm9yTWVzc2FnZSA9IDxMYWJlbD4gdGhpcy5lbS5uYXRpdmVFbGVtZW50O1xyXG5cdGVycm9yTWVzc2FnZS5zdHlsZS52aXNpYmlsaXR5ID0gJ2NvbGxhcHNlJztcclxuXHR0aGlzLnBhc3N3b3JkID0gJyc7XHJcbiAgICB0aGlzLnBhcmFtcy5jbG9zZUNhbGxiYWNrKHJlcyk7XHJcbiAgfVxyXG5cclxuICBzdWJtaXQocGFzc3dvcmQpIHtcclxuICBcdGZpcmViYXNlLnJlYXV0aGVudGljYXRlKHtcclxuXHQgICAgdHlwZTogZmlyZWJhc2UuTG9naW5UeXBlLlBBU1NXT1JELCAvLyBvciBHT09HTEUgLyBGQUNFQk9PS1xyXG5cdCAgICAvLyB0aGlzIGlzIG9ubHkgcmVxdWlyZWQgaW4gdHlwZSA9PSBQQVNTV09SRFxyXG5cdCAgICBwYXNzd29yZE9wdGlvbnM6IHtcclxuXHQgICAgICBlbWFpbDogdGhpcy51c2VyRW1haWwsXHJcblx0ICAgICAgcGFzc3dvcmQ6IHRoaXMucGFzc3dvcmRcclxuXHQgICAgfVxyXG5cdCAgfSkudGhlbihcclxuXHQgICAgICAocmVzdWx0KSA9PiB7XHJcblx0ICAgICAgICAvLyB5b3UgY2FuIG5vdyBzYWZlbHkgZGVsZXRlIHRoZSBhY2NvdW50IC8gY2hhbmdlIHRoZSBwYXNzd29yZCwgZXRjXHJcblx0ICAgICAgICBsZXQgb3B0aW9ucyA9IHtcclxuXHRcdCAgICAgICAgY29udGV4dDoge30sXHJcblx0XHQgICAgICAgIGZ1bGxzY3JlZW46IHRydWUsXHJcblx0XHQgICAgICAgIHZpZXdDb250YWluZXJSZWY6IHRoaXMudmNSZWZcclxuXHRcdCAgICAgICAgLy8gYW5pbWF0ZWQ6IHRydWUsXHJcblx0XHQgICAgICAgIC8vIHRyYW5zaXRpb246IHsgbmFtZTogXCJzbGlkZVRvcFwiIH1cclxuXHRcdCAgICB9O1xyXG5cdFx0ICAgIGxldCBlcnJvck1lc3NhZ2UgPSA8TGFiZWw+IHRoaXMuZW0ubmF0aXZlRWxlbWVudDtcclxuXHQgICAgICAgIGVycm9yTWVzc2FnZS5zdHlsZS52aXNpYmlsaXR5ID0gJ2NvbGxhcHNlJztcclxuXHRcdCAgICB0aGlzLnRyYW5zZmVyU2VydmljZS5zZXREYXRhKHRoaXMuZmllbGQpO1xyXG5cdFx0ICAgIHRoaXMucGFzc3dvcmQgPSAnJztcclxuXHQgICAgXHR0aGlzLm1vZGFsLnNob3dNb2RhbChTZXR0aW5nc2Zvcm1Db21wb25lbnQsIG9wdGlvbnMpLnRoZW4ocmVzID0+IHtcclxuXHRcdCAgICBcdGlmKHJlcyA9PSAndXBkYXRlJykge1xyXG5cdFx0ICAgIFx0XHR0aGlzLmNsb3NlKCd1cGRhdGUnKTtcclxuXHRcdCAgICBcdH1cclxuXHRcdCAgICB9KTtcclxuXHQgICAgICB9LFxyXG5cdCAgICAgIChlcnJvcikgPT4ge1xyXG5cdCAgICAgICAgbGV0IGVycm9yTWVzc2FnZSA9IDxMYWJlbD4gdGhpcy5lbS5uYXRpdmVFbGVtZW50O1xyXG5cdCAgICAgICAgZXJyb3JNZXNzYWdlLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XHJcblx0ICAgICAgfVxyXG5cdCAgKTtcclxuICB9XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi8qIEFkZCBtb2JpbGUgc3R5bGVzIGZvciB0aGUgY29tcG9uZW50IGhlcmUuICAqL1xcblwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjwhLS0gPGFwcC1uYXZpZ2F0aW9uPjwvYXBwLW5hdmlnYXRpb24+IC0tPlxcclxcbjxTdGFja0xheW91dD5cXHJcXG4gIDxMYWJlbCB0ZXh0PVxcXCJzZWFyY2ggd29ya3NcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIj48L0xhYmVsPlxcclxcbiAgPExhYmVsIHRleHQ9XFxcIlRoaXMgaXMgYSBtaWdyYXRlZCBjb21wb25lbnRcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIj48L0xhYmVsPlxcclxcbiAgPExhYmVsIHRleHQ9XFxcIlVwZGF0ZSBpdCB0byBwcm92aWRlIHRoZSBVSSBlbGVtZW50cyByZXF1aXJlZCBpbiB5b3VyIG1vYmlsZSBhcHBcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIj48L0xhYmVsPlxcclxcbjwvU3RhY2tMYXlvdXQ+XCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtc2VhcmNoJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NlYXJjaC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3NlYXJjaC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU2VhcmNoQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gXCIvKlxcclxcbkFkZCB5b3VyIE5hdGl2ZVNjcmlwdCBzcGVjaWZpYyBzdHlsZXMgaGVyZS5cXHJcXG5UbyBsZWFybiBtb3JlIGFib3V0IHN0eWxpbmcgaW4gTmF0aXZlU2NyaXB0IHNlZTpcXHJcXG5odHRwczovL2RvY3MubmF0aXZlc2NyaXB0Lm9yZy9hbmd1bGFyL3VpL3N0eWxpbmdcXHJcXG4qL1xcclxcblxcclxcbiNIZWFkZXIge1xcclxcbiAgICBjb2xvcjpibGFjaztcXHJcXG4gICAgZm9udC1zaXplOiAyNDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJTZWdvZSBVSVxcXCIsQXJpYWwsc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuI2xpc3RWaWV3IHtcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiAyMDtcXHJcXG59XFxyXFxuXFxyXFxuLnVwZGF0ZSB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBjb2xvcjogI2FjMDBlNjtcXHJcXG4gICAgYm9yZGVyLXdpZHRoOiAxO1xcclxcbiAgICBib3JkZXItY29sb3I6ICNhYzAwZTY7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDU7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZmxvYXQ6IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luOiBhdXRvOyBcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJTZWdvZSBVSVxcXCIsQXJpYWwsc2Fucy1zZXJpZjtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTU7XFxyXFxuICAgIHdpZHRoOiAyMDA7XFxyXFxuICAgIGhlaWdodDogNDA7XFxyXFxufVxcclxcbi51cGRhdGU6aGlnaGxpZ2h0ZWQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjllNmZmO1xcclxcbn1cXHJcXG4ucGF5bWVudHMge1xcclxcblxcdGNvbG9yOiBibGFjaztcXHJcXG5cXHRtYXJnaW4tdG9wOiAxMjtcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiAxMjtcXHJcXG5cXHRtYXJnaW4tbGVmdDogMTg7XFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTU7XFxyXFxufVxcclxcbi5sb2dvdXQge1xcclxcblxcdGNvbG9yOiAjYWMwMGU2O1xcclxcblxcdG1hcmdpbi10b3A6IDEyO1xcclxcblxcdG1hcmdpbi1ib3R0b206IDEyO1xcclxcblxcdG1hcmdpbi1sZWZ0OiAxODtcXHJcXG5cXHRmb250LXdlaWdodDogNTAwO1xcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgICBmb250LXNpemU6IDE1O1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLWxpc3QtdmlldyB7XFxyXFxuXFx0bWFyZ2luLXRvcDogMzY7XFxyXFxuXFx0aGVpZ2h0OiAxMDA7XFxyXFxufVxcclxcblxcclxcbi5pdGVtLWxpc3QtdmlldyB7XFxyXFxuXFx0aGVpZ2h0OiAyNzU7XFxyXFxufVxcclxcblxcclxcbi5wcm9maWxlLXBpY3R1cmUge1xcclxcblxcdGhlaWdodDogMTAwO1xcclxcblxcdHdpZHRoOiAxMDA7XFxyXFxuXFx0bWFyZ2luLXRvcDogMTA7XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTogODtcXHJcXG5cXHQvKmJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7Ki9cXHJcXG59XFxyXFxuXFxyXFxuLmltZy1yb3VuZGVkIHtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyLWxhYmVsIHtcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiA1O1xcclxcblxcdGZvbnQtc2l6ZTogMTU7XFxyXFxuXFx0Y29sb3I6ICM0Mjg1ZjQ7XFxyXFxufVxcclxcblxcclxcbi5ib2xkIHtcXHJcXG5cXHRmb250LXdlaWdodDogNTAwO1xcclxcbn1cXHJcXG5cXHJcXG4uYWN0aXZpdHktaW5kaWNhdG9yIHtcXHJcXG4gIGNvbG9yOiAjYWMwMGU2O1xcclxcbiAgbWFyZ2luOiAyNSU7XFxyXFxufVxcclxcblxcclxcbi52YWx1ZS1sYWJlbCB7XFxyXFxuXFx0bWFyZ2luLWxlZnQ6IDE4O1xcclxcblxcdG1hcmdpbi1ib3R0b206IDEwO1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTg7XFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxufVxcclxcbi50aXRsZS1sYWJlbCB7XFxyXFxuXFx0bWFyZ2luLXRvcDogMTY7XFxyXFxuXFx0bWFyZ2luLWxlZnQ6IDE4O1xcclxcblxcdGNvbG9yOiAjNjk2OTY5O1xcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbn1cXHJcXG5cXHJcXG4uc3RhY2stbGF5b3V0e1xcclxcbiAgICBoZWlnaHQ6MTAwJVxcclxcbn1cXHJcXG4uYWN0aXZpdHktaW5kaWNhdG9ye1xcclxcbiAgICBoZWlnaHQ6IDUwJTtcXHJcXG59XFxyXFxuTGlzdFZpZXcge1xcclxcbiAgICBzZXBhcmF0b3ItY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbn1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8IS0tIDxhcHAtbmF2aWdhdGlvbj48L2FwcC1uYXZpZ2F0aW9uPiAtLT5cXHJcXG48U3RhY2tsYXlvdXQgaGVpZ2h0PVxcXCIxMDAlXFxcIj5cXHJcXG4gICAgPFN0YWNrTGF5b3V0ICNzZXR0aW5nc0NvbnRhaW5lcj5cXHJcXG4gICAgICA8IS0tIDxMYWJlbCBpZD0gXFxcIkhlYWRlclxcXCIgdGV4dD1cXFwiQWNjb3VudCBTZXR0aW5nc1xcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiPjwvTGFiZWw+IC0tPlxcclxcbiAgICAgIDxJbWFnZSBzcmM9XFxcInt7IHByb2ZpbGUgfX1cXFwiIHN0cmV0Y2g9XFxcImFzcGVjdEZpdFxcXCIgY2xhc3M9XFxcImltZy1yb3VuZGVkIHByb2ZpbGUtcGljdHVyZVxcXCIgKHRhcCk9XFxcInVwbG9hZFBmcCgpXFxcIj48L0ltYWdlPlxcclxcbiAgICAgIDxMYWJlbCB0ZXh0PVxcXCJDaGFuZ2UgUGhvdG9cXFwiIGNsYXNzPVxcXCJoZWFkZXItbGFiZWwgYm9sZFxcXCIgKHRhcCk9XFxcInVwbG9hZFBmcCgpXFxcIj48L0xhYmVsPlxcclxcblxcclxcbiAgICAgIDxMaXN0VmlldyBbaXRlbXNdPVxcXCJmaWVsZHNcXFwiICNsaXN0VmlldyBpZD1cXFwibGlzdFZpZXdcXFwiIChpdGVtVGFwKT1cXFwic2hvd01vZGFsKCRldmVudClcXFwiIGNsYXNzPVxcXCJpdGVtLWxpc3Qtdmlld1xcXCI+XFxyXFxuICAgICAgICA8bmctdGVtcGxhdGUgbGV0LWl0ZW09XFxcIml0ZW1cXFwiIGxldC1pPVxcXCJpbmRleFxcXCIgbGV0LW9kZD1cXFwib2RkXFxcIiBsZXQtZXZlbj1cXFwiZXZlblxcXCI+XFxyXFxuICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwic3RhY2stbGF5b3V0XFxcIj5cXHJcXG4gICAgICAgICAgICA8TGFiZWwgdGV4dFdyYXA9XFxcInRydWVcXFwiIGNsYXNzPVxcXCJ0aXRsZS1sYWJlbFxcXCIgW3RleHRdPVxcXCJpdGVtLmxhYmVsXFxcIj48L0xhYmVsPlxcclxcbiAgICAgICAgICAgIDxMYWJlbCB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgY2xhc3M9XFxcInZhbHVlLWxhYmVsXFxcIiBbdGV4dF09XFxcIml0ZW0udmFsdWVcXFwiPjwvTGFiZWw+XFxyXFxuICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxyXFxuICAgICAgICA8L25nLXRlbXBsYXRlPlxcclxcbiAgICAgIDwvTGlzdFZpZXc+XFxyXFxuICAgICAgPCEtLSA8UmFkRGF0YUZvcm0gdGtFeGFtcGxlVGl0bGUgdGtUb2dnbGVOYXZCdXR0b24gW3NvdXJjZV09XFxcInBlcnNvblxcXCI+PC9SYWREYXRhRm9ybT4gICAtLT5cXHJcXG4gICAgICA8IS0tIDxCdXR0b24gY2xhc3M9XFxcIlVwZGF0ZVxcXCIgIHRleHQ9XFxcIlVwZGF0ZSBTZXR0aW5nc1xcXCI+PC9CdXR0b24+IC0tPlxcclxcblxcclxcbiAgICAgIDxMaXN0VmlldyBbaXRlbXNdPVxcXCJidXR0b25zXFxcIiAjbGlzdFZpZXdTZWNvbmQgKGl0ZW1UYXApPVxcXCJyb3V0ZSgkZXZlbnQpXFxcIiAoc2V0dXBJdGVtVmlldyk9XFxcInNldHVwSXRlbVZpZXcoJGV2ZW50KVxcXCIgY2xhc3M9XFxcImJ0bi1saXN0LXZpZXdcXFwiPlxcclxcbiAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1pdGVtPVxcXCJpdGVtXFxcIiBsZXQtaT1cXFwiaW5kZXhcXFwiIGxldC1vZGQ9XFxcIm9kZFxcXCIgbGV0LWV2ZW49XFxcImV2ZW5cXFwiIGxldC1wYXltZW50cz1cXFwicGF5bWVudHNcXFwiIGxldC1sb2dvdXQ9XFxcImxvZ291dFxcXCI+XFxyXFxuICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwic3RhY2stbGF5b3V0XFxcIj5cXHJcXG4gICAgICAgICAgICA8TGFiZWwgdGV4dFdyYXA9XFxcInRydWVcXFwiIFt0ZXh0XT1cXFwiaXRlbVxcXCIgW2NsYXNzLnBheW1lbnRzXT1cXFwicGF5bWVudHNcXFwiIFtjbGFzcy5sb2dvdXRdPVxcXCJsb2dvdXRcXFwiPjwvTGFiZWw+XFxyXFxuICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxyXFxuICAgICAgICA8L25nLXRlbXBsYXRlPlxcclxcbiAgICAgIDwvTGlzdFZpZXc+XFxyXFxuPCEtLSAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcInBheW1lbnRzLWNvbnRhaW5lclxcXCIgKHRhcCk9XFxcInRvUGF5bWVudHMoKVxcXCI+XFxyXFxuICAgICAgICA8TGFiZWwgY2xhc3M9XFxcInBheW1lbnRzXFxcIiB0ZXh0PVxcXCJQYXltZW50c1xcXCI+PC9MYWJlbD5cXHJcXG4gICAgICA8L1N0YWNrTGF5b3V0PlxcclxcbiAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwibG9nb3V0LWNvbnRhaW5lclxcXCIgKHRhcCk9XFxcImxvZ091dCgpXFxcIj5cXHJcXG4gICAgICAgIDxMYWJlbCBjbGFzcz1cXFwibG9nb3V0XFxcIiB0ZXh0PVxcXCJMb2cgb3V0XFxcIj48L0xhYmVsPlxcclxcbiAgICAgIDwvU3RhY2tMYXlvdXQ+IC0tPlxcclxcbiAgICA8L1N0YWNrTGF5b3V0PlxcclxcblxcclxcbjxBY3Rpdml0eUluZGljYXRvciAjYWN0aXZpdHlJbmRpY2F0b3IgYnVzeT1cXFwidHJ1ZVxcXCIgd2lkdGg9XFxcIjQwXFxcIiAgY2xhc3M9XFxcImFjdGl2aXR5LWluZGljYXRvclxcXCI+XFxyXFxuICA8L0FjdGl2aXR5SW5kaWNhdG9yPlxcclxcbjwvU3RhY2tsYXlvdXQ+XCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgRWxlbWVudFJlZiwgVmlld0NoaWxkLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbi8vIGltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBMb2dpbmNoZWNrU2VydmljZSB9IGZyb20gJy4uL2xvZ2luY2hlY2suc2VydmljZS50bnMnO1xyXG5pbXBvcnQgKiBhcyBmaXJlYmFzZSBmcm9tICduYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlJztcclxuaW1wb3J0IHsgbWVzc2FnaW5nIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2UvbWVzc2FnaW5nXCI7XHJcbmltcG9ydCB7IGxvZ291dCBhcyBmYkxvZ291dCB9IGZyb20gJ25hdGl2ZXNjcmlwdC1mYWNlYm9vayc7XHJcbmltcG9ydCAqIGFzIGltYWdlcGlja2VyIGZyb20gXCJuYXRpdmVzY3JpcHQtaW1hZ2VwaWNrZXJcIjtcclxuaW1wb3J0ICogYXMgZnMgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZmlsZS1zeXN0ZW1cIjtcclxuaW1wb3J0IHsgaXNBbmRyb2lkLCBpc0lPUywgZGV2aWNlLCBzY3JlZW4gfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybVwiO1xyXG5pbXBvcnQgKiBhcyBiZ2h0dHAgZnJvbSAnbmF0aXZlc2NyaXB0LWJhY2tncm91bmQtaHR0cCc7XHJcbmltcG9ydCB7IEltYWdlQ3JvcHBlciB9IGZyb20gJ25hdGl2ZXNjcmlwdC1pbWFnZWNyb3BwZXInO1xyXG5pbXBvcnQgKiBhcyBpbWFnZVNvdXJjZSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9pbWFnZS1zb3VyY2VcIjtcclxuaW1wb3J0IHsgQWN0aXZpdHlJbmRpY2F0b3IgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2FjdGl2aXR5LWluZGljYXRvcic7XHJcbmltcG9ydCB7IFN0YWNrTGF5b3V0IH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9sYXlvdXRzL3N0YWNrLWxheW91dCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGVBcnJheSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlLWFycmF5JztcclxuaW1wb3J0IHsgVHJhbnNmZXJTZXJ2aWNlIH0gZnJvbSAnLi4vZGF0YXRyYW5zZmVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBwb3N0IH0gZnJvbSAnc2VsZW5pdW0td2ViZHJpdmVyL2h0dHAnO1xyXG5pbXBvcnQgeyBNb2RhbERpYWxvZ1BhcmFtcyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9kaXJlY3RpdmVzL2RpYWxvZ3NcIjtcclxuaW1wb3J0IHsgTW9kYWxEaWFsb2dTZXJ2aWNlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2RpcmVjdGl2ZXMvZGlhbG9nc1wiO1xyXG5pbXBvcnQgeyBTZXR0aW5nc2Zvcm1Db21wb25lbnQgfSBmcm9tICcuLi9zZXR0aW5nc2Zvcm0vc2V0dGluZ3Nmb3JtLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFJlYXV0aENvbXBvbmVudCB9IGZyb20gJy4uL3JlYXV0aC9yZWF1dGguY29tcG9uZW50JztcclxuaW1wb3J0IHsgU2V0dXBJdGVtVmlld0FyZ3MgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZGlyZWN0aXZlc1wiO1xyXG5cclxuXHJcbmNsYXNzIExhYmVsIHtcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBsYWJlbDogU3RyaW5nLCBwdWJsaWMgdmFsdWU6IHN0cmluZywgcHVibGljIGZpcnN0TmFtZTogc3RyaW5nLCBwdWJsaWMgbGFzdE5hbWU6IHN0cmluZykgeyB9XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjogXCJhcHAtc2V0dGluZ3NcIixcclxuICB0ZW1wbGF0ZVVybDogJy4vc2V0dGluZ3MuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3NldHRpbmdzLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFNldHRpbmdzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMsIHByaXZhdGUgcGFnZTogUGFnZSwgcHJpdmF0ZSBsb2dpbmNoZWNrU2VydmljZTogTG9naW5jaGVja1NlcnZpY2UsIHByaXZhdGUgdHJhbnNmZXJTZXJ2aWNlOiBUcmFuc2ZlclNlcnZpY2UsXHJcbiAgXHRwcml2YXRlIHZjUmVmOiBWaWV3Q29udGFpbmVyUmVmLCBwcml2YXRlIG1vZGFsOiBNb2RhbERpYWxvZ1NlcnZpY2UpIHsgfVxyXG5cclxuICBAVmlld0NoaWxkKFwiYWN0aXZpdHlJbmRpY2F0b3JcIiwgeyBzdGF0aWM6IHRydWUgfSkgYWk6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZChcInNldHRpbmdzQ29udGFpbmVyXCIsIHsgc3RhdGljOiB0cnVlIH0pIHNjOiBFbGVtZW50UmVmO1xyXG5cclxuICBwcm9maWxlID0gXCJ+L2ltZy9zYW1wbGVfcHJvZmlsZS5wbmdcIjtcclxuICB1c2VySWQ7XHJcbiAgZmllbGRzO1xyXG4gIGltYWdlQ3JvcHBlcjogSW1hZ2VDcm9wcGVyO1xyXG4gIGltYWdlU291cmNlOiBpbWFnZVNvdXJjZS5JbWFnZVNvdXJjZTtcclxuICBidXR0b25zO1xyXG4gIHBheW1lbnRMaXN0O1xyXG4gIGxvZ291dExpc3Q7XHJcbiAgdXNlcjtcclxuICB0b2tlbjtcclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcblx0dGhpcy5pbWFnZUNyb3BwZXIgPSBuZXcgSW1hZ2VDcm9wcGVyKCk7XHJcblx0dGhpcy5sb2FkVmlld3MoKTtcclxuXHJcblx0XHRsZXQgYWN0aXZpdHlJbmRpY2F0b3IgPSA8QWN0aXZpdHlJbmRpY2F0b3I+IHRoaXMuYWkubmF0aXZlRWxlbWVudDtcclxuXHQgICAgYWN0aXZpdHlJbmRpY2F0b3Iuc3R5bGUudmlzaWJpbGl0eSA9ICdjb2xsYXBzZSdcclxuXHR9XHJcblxyXG5cdGxvYWRWaWV3cygpe1xyXG5cdFx0dGhpcy5wYXltZW50TGlzdCA9IG5ldyBPYnNlcnZhYmxlQXJyYXk8U3RyaW5nPigpO1xyXG5cdFx0dGhpcy5wYXltZW50TGlzdC5wdXNoKCdQYXltZW50IG1ldGhvZHMnKTtcclxuXHRcdHRoaXMubG9nb3V0TGlzdCA9IG5ldyBPYnNlcnZhYmxlQXJyYXk8U3RyaW5nPigpO1xyXG5cdFx0dGhpcy5sb2dvdXRMaXN0LnB1c2goJ0xvZyBvdXQnKTtcclxuXHRcdHRoaXMuYnV0dG9ucyA9IG5ldyBPYnNlcnZhYmxlQXJyYXk8U3RyaW5nPigpO1xyXG5cdFx0dGhpcy5idXR0b25zLnB1c2goJ1BheW1lbnQgbWV0aG9kcycpO1xyXG5cdFx0dGhpcy5idXR0b25zLnB1c2goJ0xvZyBvdXQnKTtcclxuXHJcblx0XHR0aGlzLnVzZXJJZCA9IHRoaXMubG9naW5jaGVja1NlcnZpY2UuZ2V0VXNlcigpO1xyXG5cdFx0Y29uc3QgdXNlckRvY3VtZW50ID0gZmlyZWJhc2UuZmlyZXN0b3JlLmNvbGxlY3Rpb24oJ3VzZXJzJykuZG9jKHRoaXMudXNlcklkKTtcclxuXHRcdHRoaXMuZmllbGRzID0gbmV3IE9ic2VydmFibGVBcnJheTxMYWJlbD4oKTtcclxuXHRcdHRoaXMudXBkYXRlTGlzdFZpZXcoKTtcclxuXHRcdGZpcmViYXNlLmdldEN1cnJlbnRVc2VyKCkudGhlbigodXNlcikgPT4ge1xyXG5cdFx0XHR0aGlzLnVzZXIgPSB1c2VyO1xyXG5cdFx0XHRpZih1c2VyLnBob3RvVVJMICE9IG51bGwpIHtcclxuXHRcdFx0XHR0aGlzLnByb2ZpbGUgPSB1c2VyLnBob3RvVVJMO1xyXG5cdFx0XHRcdGlmKHVzZXIucGhvdG9VUkwuc3Vic3RyaW5nKDAsIDI3KSA9PSAnaHR0cHM6Ly9ncmFwaC5mYWNlYm9vay5jb20vJylcclxuXHRcdFx0XHRcdHRoaXMucHJvZmlsZSArPSAnP2hlaWdodD0zMDAnO1xyXG5cdFx0XHR9XHJcblx0XHR9KVxyXG5cdH1cclxuXHJcblx0c2V0dXBJdGVtVmlldyhhcmdzOiBTZXR1cEl0ZW1WaWV3QXJncykge1xyXG5cdFx0YXJncy52aWV3LmNvbnRleHQucGF5bWVudHMgPSAoYXJncy5pbmRleCA9PSAwKTtcclxuXHRcdGFyZ3Mudmlldy5jb250ZXh0LmxvZ291dCA9IChhcmdzLmluZGV4ID09IDEpO1xyXG5cdFx0YXJncy52aWV3LmNvbnRleHQuZXZlbiA9IChhcmdzLmluZGV4ICUgMiA9PT0gMCk7XHJcblx0XHRhcmdzLnZpZXcuY29udGV4dC5vZGQgPSAoYXJncy5pbmRleCAlIDIgPT09IDEpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlTGlzdFZpZXcoKXtcclxuXHRcdHRoaXMuZmllbGRzLnNwbGljZSgwKTtcclxuXHRcdGNvbnN0IHVzZXJEb2N1bWVudCA9IGZpcmViYXNlLmZpcmVzdG9yZS5jb2xsZWN0aW9uKCd1c2VycycpLmRvYyh0aGlzLnVzZXJJZCk7XHJcblx0XHR1c2VyRG9jdW1lbnQuZ2V0KCkudGhlbihkb2MgPT4ge1xyXG5cdFx0XHRsZXQgdmFscyA9IGRvYy5kYXRhKClcclxuXHRcdFx0Ly8gY29uc29sZS5sb2coXCJmaWVsZHNcIiwgdmFscylcclxuXHRcdFx0dGhpcy5maWVsZHMucHVzaChuZXcgTGFiZWwoXCJOYW1lXCIsIHZhbHMuZmlyc3RfbmFtZSArIFwiIFwiICsgdmFscy5sYXN0X25hbWUsIHZhbHMuZmlyc3RfbmFtZSwgdmFscy5sYXN0X25hbWUpKTtcclxuXHRcdFx0dGhpcy5maWVsZHMucHVzaChuZXcgTGFiZWwoXCJFbWFpbFwiLCB2YWxzLmVtYWlsLCB2YWxzLmZpcnN0X25hbWUsIHZhbHMubGFzdF9uYW1lKSk7XHJcblx0XHRcdGlmKHZhbHMucGhvbmVfbnVtYmVyID09IFwiXCIgfHwgdmFscy5waG9uZV9udW1iZXIgPT0gbnVsbCl7XHJcblx0XHRcdFx0dGhpcy5maWVsZHMucHVzaChuZXcgTGFiZWwoXCJQaG9uZSBOdW1iZXJcIiwgXCJOb25lXCIsIHZhbHMuZmlyc3RfbmFtZSwgdmFscy5sYXN0X25hbWUpKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNle1xyXG5cdFx0XHRcdHRoaXMuZmllbGRzLnB1c2gobmV3IExhYmVsKFwiUGhvbmUgTnVtYmVyXCIsIHZhbHMucGhvbmVfbnVtYmVyLCB2YWxzLmZpcnN0X25hbWUsIHZhbHMubGFzdF9uYW1lKSk7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYodGhpcy51c2VyLnByb3ZpZGVyc1sxXS5pZCA9PSAncGFzc3dvcmQnKSB7XHJcblx0XHRcdFx0dGhpcy5maWVsZHMucHVzaChuZXcgTGFiZWwoXCJQYXNzd29yZFwiLCBcIioqKioqKioqXCIsIHZhbHMuZmlyc3RfbmFtZSwgdmFscy5sYXN0X25hbWUpKVxyXG5cdFx0XHR9XHJcblx0XHR9KVxyXG5cdH1cclxuXHR0b1BheW1lbnRzKCl7XHJcblx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ3BheW1lbnRzJ10pO1xyXG5cdH1cclxuXHJcblx0c2hvd01vZGFsKGFyZ3MpIHtcclxuXHRcdGxldCBsYWJlbCA9IHRoaXMuZmllbGRzLl9hcnJheVthcmdzLmluZGV4XVxyXG5cdFx0dGhpcy50cmFuc2ZlclNlcnZpY2Uuc2V0RGF0YShsYWJlbCk7XHJcblx0XHRsZXQgb3B0aW9ucyA9IHtcclxuXHQgICAgICAgIGNvbnRleHQ6IHt9LFxyXG5cdCAgICAgICAgZnVsbHNjcmVlbjogdHJ1ZSxcclxuXHQgICAgICAgIHZpZXdDb250YWluZXJSZWY6IHRoaXMudmNSZWZcclxuXHQgICAgICAgIC8vIGFuaW1hdGVkOiB0cnVlLFxyXG5cdCAgICAgICAgLy8gdHJhbnNpdGlvbjogeyBuYW1lOiBcInNsaWRlVG9wXCIgfVxyXG5cdCAgICB9O1xyXG5cdCAgICBpZihhcmdzLmluZGV4ID09IDMpIHtcclxuXHQgICAgXHR0aGlzLm1vZGFsLnNob3dNb2RhbChSZWF1dGhDb21wb25lbnQsIG9wdGlvbnMpLnRoZW4ocmVzID0+IHtcclxuXHRcdCAgICBcdGlmKHJlcyA9PSAndXBkYXRlJykge1xyXG5cdFx0ICAgIFx0XHR0aGlzLnVwZGF0ZUxpc3RWaWV3KCk7XHJcblx0XHQgICAgXHR9XHJcblx0XHQgICAgfSk7XHJcblx0ICAgIH1cclxuXHQgICAgZWxzZSB7XHJcblx0XHQgICAgdGhpcy5tb2RhbC5zaG93TW9kYWwoU2V0dGluZ3Nmb3JtQ29tcG9uZW50LCBvcHRpb25zKS50aGVuKHJlcyA9PiB7XHJcblx0XHQgICAgXHRpZihyZXMgPT0gJ3VwZGF0ZScpIHtcclxuXHRcdCAgICBcdFx0dGhpcy51cGRhdGVMaXN0VmlldygpO1xyXG5cdFx0ICAgIFx0fVxyXG5cdFx0ICAgIH0pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cm91dGUoYXJncykge1xyXG5cdFx0aWYoYXJncy5pbmRleCA9PSAwKSB7XHJcblx0XHRcdHRoaXMudG9QYXltZW50cygpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZihhcmdzLmluZGV4ID09IDEpIHtcclxuXHRcdFx0dGhpcy5sb2dPdXQoKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdG9uSXRlbVRhcChhcmdzKSB7XHJcblx0XHRsZXQgbGFiZWwgPSB0aGlzLmZpZWxkcy5fYXJyYXlbYXJncy5pbmRleF1cclxuXHRcdHRoaXMucm91dGVyLm5hdmlnYXRlKFsnc2V0dGluZ3Nmb3JtJ10pO1xyXG5cdFx0dGhpcy50cmFuc2ZlclNlcnZpY2Uuc2V0RGF0YShsYWJlbCk7XHJcblx0ICB9XHJcblxyXG5cdGFzeW5jIGxvZ091dCgpIHtcclxuXHRcdHZhciBhY3Rpdml0eUluZGljYXRvciA9IDxBY3Rpdml0eUluZGljYXRvcj4gdGhpcy5haS5uYXRpdmVFbGVtZW50O1xyXG5cdFx0YWN0aXZpdHlJbmRpY2F0b3IuYnVzeSA9IHRydWU7XHJcblx0XHRhY3Rpdml0eUluZGljYXRvci5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xyXG5cdFx0dmFyIHNldHRpbmdzQ29udGFpbmVyID0gPFN0YWNrTGF5b3V0PiB0aGlzLnNjLm5hdGl2ZUVsZW1lbnQ7XHJcblx0XHRzZXR0aW5nc0NvbnRhaW5lci5zdHlsZS52aXNpYmlsaXR5ID0gJ2NvbGxhcHNlJztcclxuXHJcblx0XHRjb25zdCB0b2tlblByb21pc2UgPSBhd2FpdCBtZXNzYWdpbmcuZ2V0Q3VycmVudFB1c2hUb2tlbigpLnRoZW4odG9rZW4gPT4ge1xyXG5cdFx0XHR0aGlzLnRva2VuID0gdG9rZW5cclxuXHRcdFx0cmV0dXJuIHRva2VuO1xyXG5cdFx0fSk7XHJcblx0XHRsZXQgdXNlckRvYyA9IGZpcmViYXNlLmZpcmVzdG9yZS5jb2xsZWN0aW9uKCd1c2VycycpLmRvYyh0aGlzLnVzZXJJZCk7XHJcblx0XHRcclxuXHRcdHVzZXJEb2MuZ2V0KCkudGhlbihhc3luYyAoZG9jKSA9PiB7XHJcblx0XHRcdGxldCBpbmRleCA9IGRvYy5kYXRhKCkudG9rZW5zLmluZGV4T2YodGhpcy50b2tlbik7XHJcblx0XHRcdGlmKGluZGV4ID4gLTEpIHtcclxuXHRcdFx0XHRjb25zdCBuZXdUb2tlbnMgPSBkb2MuZGF0YSgpLnRva2VucztcclxuXHRcdFx0XHRuZXdUb2tlbnMuc3BsaWNlKGluZGV4LCAxKTtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhuZXdUb2tlbnMpXHJcblx0XHRcdFx0dXNlckRvYy51cGRhdGUoe3Rva2VuczogbmV3VG9rZW5zfSk7XHJcblx0XHRcdH1cclxuXHRcdFx0Y29uc3QgY2hhdFByb21pc2UgPSBhd2FpdCB0aGlzLnVwZGF0ZUNoYXRUb2tlbnMoZG9jLmRhdGEoKS5jaGF0cyk7XHJcblx0XHRcdGZpcmViYXNlLmxvZ291dCgpO1xyXG5cdFx0XHRmYkxvZ291dCgoKSA9PiB7XHJcblxyXG5cdFx0XHR9KTtcclxuXHRcdFx0dGhpcy5sb2dpbmNoZWNrU2VydmljZS5jbGVhckluZm8oKTtcclxuXHRcdFx0YWN0aXZpdHlJbmRpY2F0b3IuYnVzeSA9IGZhbHNlO1xyXG5cdFx0XHRhY3Rpdml0eUluZGljYXRvci5zdHlsZS52aXNpYmlsaXR5ID0gJ2NvbGxhcHNlJztcclxuXHRcdFx0c2V0dGluZ3NDb250YWluZXIuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcclxuXHRcdFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUoWyd3ZWxjb21lJ10sIHtjbGVhckhpc3Rvcnk6IHRydWV9KTtcclxuXHRcdH0pXHJcblxyXG5cdH1cclxuXHJcblx0YXN5bmMgdXBkYXRlQ2hhdFRva2VucyhjaGF0cykge1xyXG5cdFx0bGV0IGNoYXRDb2xsZWN0aW9uID0gZmlyZWJhc2UuZmlyZXN0b3JlLmNvbGxlY3Rpb24oJ2NoYXRzJyk7XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgY2hhdHMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0Y29uc3QgY2hhdFByb21pc2UgPSBhd2FpdCBjaGF0Q29sbGVjdGlvbi5kb2MoY2hhdHNbaV0pLmdldCgpLnRoZW4oYXN5bmMgKGRvYykgPT4ge1xyXG5cdFx0XHRcdGxldCBpbmRleCA9IGRvYy5kYXRhKCkudG9rZW5zLmluZGV4T2YodGhpcy50b2tlbik7XHJcblx0XHRcdFx0aWYoaW5kZXggPiAtMSkge1xyXG5cdFx0XHRcdFx0Y29uc3QgbmV3VG9rZW5zID0gZG9jLmRhdGEoKS50b2tlbnM7XHJcblx0XHRcdFx0XHRuZXdUb2tlbnMuc3BsaWNlKGluZGV4LCAxKTtcclxuXHRcdFx0XHRcdGNvbnN0IHVwZGF0ZVByb21pc2UgPSBhd2FpdCBjaGF0Q29sbGVjdGlvbi5kb2MoY2hhdHNbaV0pLnVwZGF0ZSh7dG9rZW5zOiBuZXdUb2tlbnN9KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pXHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHR1cGxvYWRQZnAoKSB7XHJcblx0XHR2YXIgaW1hZ2VDcm9wcGVyID0gbmV3IEltYWdlQ3JvcHBlcigpO1xyXG5cdFx0bGV0IGNvbnRleHQgPSBpbWFnZXBpY2tlci5jcmVhdGUoe1xyXG5cdFx0ICAgIG1vZGU6IFwic2luZ2xlXCIgLy8gdXNlIFwibXVsdGlwbGVcIiBmb3IgbXVsdGlwbGUgc2VsZWN0aW9uXHJcblx0XHR9KTtcclxuXHRcdGNvbnRleHRcclxuXHQgICAgLmF1dGhvcml6ZSgpXHJcblx0ICAgIC50aGVuKGZ1bmN0aW9uKCkge1xyXG5cdCAgICAgICAgcmV0dXJuIGNvbnRleHQucHJlc2VudCgpO1xyXG5cdCAgICB9KVxyXG5cdCAgICAudGhlbigoc2VsZWN0aW9uOiBhbnkpID0+IHtcclxuXHQgICAgXHRzZWxlY3Rpb24uZm9yRWFjaCgoc2VsZWN0ZWQpID0+IHtcclxuICAgICAgICAgICAgXHRsZXQgaW1nU291cmNlID0gbmV3IGltYWdlU291cmNlLkltYWdlU291cmNlKCk7XHJcbiAgICAgICAgICAgICAgICBpbWdTb3VyY2UuZnJvbUFzc2V0KHNlbGVjdGVkKS50aGVuKChzb3VyY2UpID0+IHtcclxuICAgICAgICAgICAgICAgIFx0dGhpcy5pbWFnZUNyb3BwZXJcclxuICAgICAgICAgICAgICAgICAgICAuc2hvdyhzb3VyY2UsIHsgd2lkdGg6IDMwMCwgaGVpZ2h0OiAzMDAgfSlcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihhcmdzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5kaXIoYXJncyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhcmdzLmltYWdlICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmNyb3BwZWRJbWFnZS5pbWFnZVNvdXJjZSA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgYXJncy5pbWFnZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmb2xkZXIgPSBmcy5rbm93bkZvbGRlcnMudGVtcCgpO1xyXG5cdFx0XHRcdCAgICAgICAgICAgIHZhciBwYXRoID0gZnMucGF0aC5qb2luKGZvbGRlci5wYXRoLCBcInByb2ZpbGVfcGljdHVyZS5wbmdcIik7XHJcblx0XHRcdFx0ICAgICAgICAgICAgdmFyIHNhdmVkID0gYXJncy5pbWFnZS5zYXZlVG9GaWxlKHBhdGgsJ3BuZycpO1xyXG5cclxuXHRcdFx0XHQgICAgICAgICAgICB2YXIgYWN0aXZpdHlJbmRpY2F0b3IgPSA8QWN0aXZpdHlJbmRpY2F0b3I+IHRoaXMuYWkubmF0aXZlRWxlbWVudDtcclxuXHRcdFx0XHRcdFx0XHRhY3Rpdml0eUluZGljYXRvci5idXN5ID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0XHRhY3Rpdml0eUluZGljYXRvci5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xyXG4gICAgICBcdFx0XHRcdFx0XHR2YXIgc2V0dGluZ3NDb250YWluZXIgPSA8U3RhY2tMYXlvdXQ+IHRoaXMuc2MubmF0aXZlRWxlbWVudDtcclxuICAgICAgXHRcdFx0XHRcdFx0c2V0dGluZ3NDb250YWluZXIuc3R5bGUudmlzaWJpbGl0eSA9ICdjb2xsYXBzZSc7XHJcblxyXG5cdFx0XHRcdCAgICAgICAgICAgIGZpcmViYXNlLnN0b3JhZ2UudXBsb2FkRmlsZSh7XHJcblx0XHRcdFx0XHRcdFx0ICAgIC8vIHRoZSBmdWxsIHBhdGggb2YgdGhlIGZpbGUgaW4geW91ciBGaXJlYmFzZSBzdG9yYWdlIChmb2xkZXJzIHdpbGwgYmUgY3JlYXRlZClcclxuXHRcdFx0XHRcdFx0XHQgICAgcmVtb3RlRnVsbFBhdGg6ICd1c2Vycy8nICsgdGhpcy51c2VySWQgKyAnL3VwbG9hZHMvcHJvZmlsZV9waWN0dXJlLmpwZycsXHJcblx0XHRcdFx0XHRcdFx0ICAgIC8vIG9wdGlvbiAxOiBhIGZpbGUtc3lzdGVtIG1vZHVsZSBGaWxlIG9iamVjdFxyXG5cdFx0XHRcdFx0XHRcdCAgICBsb2NhbEZpbGU6IGZzLkZpbGUuZnJvbVBhdGgocGF0aCksXHJcblx0XHRcdFx0XHRcdFx0ICAgIC8vIG9wdGlvbiAyOiBhIGZ1bGwgZmlsZSBwYXRoIChpZ25vcmVkIGlmICdsb2NhbEZpbGUnIGlzIHNldClcclxuXHRcdFx0XHRcdFx0XHQgICAgbG9jYWxGdWxsUGF0aDogcGF0aCxcclxuXHRcdFx0XHRcdFx0XHQgICAgLy8gZ2V0IG5vdGlmaWVkIG9mIGZpbGUgdXBsb2FkIHByb2dyZXNzXHJcblx0XHRcdFx0XHRcdFx0ICAgIG9uUHJvZ3Jlc3M6IChzdGF0dXMpID0+IHtcclxuXHRcdFx0XHRcdFx0XHQgICAgICBjb25zb2xlLmxvZyhcIlVwbG9hZGVkIGZyYWN0aW9uOiBcIiArIHN0YXR1cy5mcmFjdGlvbkNvbXBsZXRlZCk7XHJcblx0XHRcdFx0XHRcdFx0ICAgICAgY29uc29sZS5sb2coXCJQZXJjZW50YWdlIGNvbXBsZXRlOiBcIiArIHN0YXR1cy5wZXJjZW50YWdlQ29tcGxldGVkKTtcclxuXHRcdFx0XHRcdFx0XHQgICAgfVxyXG5cdFx0XHRcdFx0XHRcdCAgfSkudGhlbihcclxuXHRcdFx0XHRcdFx0XHQgICAgICAodXBsb2FkZWRGaWxlKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0ICAgICAgICBjb25zb2xlLmxvZyhcIkZpbGUgdXBsb2FkZWQ6IFwiICsgSlNPTi5zdHJpbmdpZnkodXBsb2FkZWRGaWxlKSk7XHJcblx0XHRcdFx0XHRcdFx0ICAgICAgICAgIFx0XHRmaXJlYmFzZS5zdG9yYWdlLmdldERvd25sb2FkVXJsKHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgICAvLyB0aGUgZnVsbCBwYXRoIG9mIGFuIGV4aXN0aW5nIGZpbGUgaW4geW91ciBGaXJlYmFzZSBzdG9yYWdlXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICAgcmVtb3RlRnVsbFBhdGg6ICd1c2Vycy8nICsgdGhpcy51c2VySWQgKyAnL3VwbG9hZHMvcHJvZmlsZV9waWN0dXJlLmpwZydcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgfSkudGhlbihcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgICAgICh1cmwpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgICAgICAgZmlyZWJhc2UudXBkYXRlUHJvZmlsZSh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgIHBob3RvVVJMOiB1cmxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgIH0pLnRoZW4oXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgICAgKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgICAgICAgLy8gY2FsbGVkIHdoZW4gdXBkYXRlIHByb2ZpbGUgd2FzIHN1Y2Nlc3NmdWxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICAgICAgIGFjdGl2aXR5SW5kaWNhdG9yLmJ1c3kgPSBmYWxzZTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0dGluZ3NDb250YWluZXIuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YWN0aXZpdHlJbmRpY2F0b3Iuc3R5bGUudmlzaWJpbGl0eSA9ICdjb2xsYXBzZSc7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgICAgICB0aGlzLnByb2ZpbGUgPSB1cmw7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgICAgfSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICAgICAoZXJyb3JNZXNzYWdlKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgICAgICBjb25zb2xlLmxvZyhlcnJvck1lc3NhZ2UpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgICAgIH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICBjb25zdCB1c2VyRG9jdW1lbnQgPSBmaXJlYmFzZS5maXJlc3RvcmUuY29sbGVjdGlvbigndXNlcnMnKS5kb2ModGhpcy51c2VySWQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgdXNlckRvY3VtZW50LnVwZGF0ZSh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICBcdHByb2ZpbGVfc291cmNlOiB1cmxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgIH0pXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICAgICB9LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgICAgZnVuY3Rpb24gKGVycm9yKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3I6IFwiICsgZXJyb3IpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgICAgfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICApO1xyXG5cdFx0XHRcdFx0XHRcdCAgICAgIH0sXHJcblx0XHRcdFx0XHRcdFx0ICAgICAgKGVycm9yKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0ICAgICAgICBjb25zb2xlLmxvZyhcIkZpbGUgdXBsb2FkIGVycm9yOiBcIiArIGVycm9yKTtcclxuXHRcdFx0XHRcdFx0XHQgICAgICB9XHJcblx0XHRcdFx0XHRcdFx0XHQpLmNhdGNoKChlcnIpID0+IHtcclxuXHRcdFx0XHRcdFx0XHQgICAgICAgIC8vIHByb2Nlc3MgZXJyb3JcclxuXHRcdFx0XHRcdFx0XHQgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcblx0XHRcdFx0XHRcdFx0ICAgIH0pO1xyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHQgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZGlyKGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgXHRjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuXHQgICAgfSkuY2F0Y2goKGVycikgPT4ge1xyXG5cdCAgICBcdGNvbnNvbGUubG9nKGVycilcclxuXHQgICAgfSlcclxuXHR9XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi8qIEFkZCBtb2JpbGUgc3R5bGVzIGZvciB0aGUgY29tcG9uZW50IGhlcmUuICAqL1xcclxcbi5oZWFkZXJ7XFxyXFxuICAgIG1hcmdpbi10b3A6IDUwO1xcclxcblxcdG1hcmdpbi1sZWZ0OiAzMjtcXHJcXG5cXHRjb2xvcjogYmxhY2s7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzA7XFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxufVxcclxcbi5zdWJtaXQtYnRue1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNhYzAwZTY7XFxyXFxuICAgIHdpZHRoOiA3NSU7XFxyXFxuICAgIGhlaWdodDogMTcwcHg7XFxyXFxuLyogICAgZm9udC1mYW1pbHk6IFxcXCJTZWdvZSBVSVxcXCIsQXJpYWwsc2Fucy1zZXJpZjtcXHJcXG4qLyAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIG1hcmdpbi10b3A6IDIwO1xcclxcbn1cXHJcXG4udGV4dC1maWVsZHtcXHJcXG4gICAgd2lkdGg6IDg1JTtcXHJcXG4gICAgbWFyZ2luLXRvcDogMjA7XFxyXFxuICAgIGNvbG9yOiM2OTY5NjlcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlLWJ1dHRvbi1jb250YWluZXIge1xcclxcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHRsZWZ0OiAwO1xcclxcbn1cXHJcXG4uY2xvc2Uge1xcclxcblxcdG1hcmdpbjogMTA7XFxyXFxuXFx0Zm9udC1zaXplOiA0MDtcXHJcXG5cXHR3aWR0aDogNDg7XFxyXFxuICAgIGhlaWdodDogNDg7XFxyXFxuICAgIGNvbG9yOiBibGFja1xcclxcbn1cXHJcXG5cXHJcXG4uZXJyb3ItbWVzc2FnZSB7XFxyXFxuICAgIGNvbG9yOiByZWQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTY7XFxyXFxuICAgIHZpc2liaWxpdHk6IGNvbGxhcHNlO1xcclxcbn1cXHJcXG5cXHJcXG4uc2Vjb25kLXZhbCB7XFxyXFxuICAgIHZpc2liaWxpdHk6IGNvbGxhcHNlO1xcclxcbn1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8U3RhY2tsYXlvdXQ+XFxyXFxuICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiY2xvc2UtYnV0dG9uLWNvbnRhaW5lclxcXCIgb3JpZW50YXRpb249XFxcImhvcml6b250YWxcXFwiPlxcclxcbiAgICAgICAgPExhYmVsIHRleHQ9XFxcIiZ0aW1lcztcXFwiIGNsYXNzPVxcXCJjbG9zZVxcXCIgKHRhcCk9XFxcImNsb3NlKCdjYW5jZWwnKVxcXCI+PC9MYWJlbD5cXHJcXG4gICAgPC9TdGFja0xheW91dD5cXHJcXG4gICAgPExhYmVsIGNsYXNzPVxcXCJoZWFkZXJcXFwiIFt0ZXh0XT1cXFwibGFiZWxcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIj48L0xhYmVsPlxcclxcbiAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImlucHV0LWZpZWxkXFxcIj5cXHJcXG4gICAgXFx0PCEtLSA8TWFza2VkVGV4dEZpZWxkIGNsYXNzPVxcXCJpbnB1dCBpbnB1dC1ib3JkZXJcXFwiIG1hc2s9XFxcIigwMDApIDAwMC0wMDAwXFxcIiBbKG5nTW9kZWwpXT1cXFwidmFsdWVcXFwiIGtleWJvYXJkVHlwZT1cXFwicGhvbmVcXFwiPjwvTWFza2VkVGV4dEZpZWxkPiAtLT5cXHJcXG4gICAgICAgIDxUZXh0RmllbGQgI3ZhbCBbKG5nTW9kZWwpXT1cXFwidmFsdWVcXFwiIFtrZXlib2FyZFR5cGVdID0gXFxcImtleWJvYXJkXFxcIiBhdXRvY29ycmVjdD1cXFwiZmFsc2VcXFwiIHJldHVybktleVR5cGU9XFxcInt7cmV0dXJuS2V5fX1cXFwiXFxyXFxuICAgICAgICAgW21heExlbmd0aF09IFxcXCJtYXhsZW5ndGhcXFwiIGNsYXNzPVxcXCJ0ZXh0LWZpZWxkXFxcIiBzZWN1cmU9XFxcInt7aXNTZWN1cmV9fVxcXCIgaGludD1cXFwie3sgaGludCB9fVxcXCI+PC9UZXh0RmllbGQ+XFxyXFxuICAgICAgICA8VGV4dEZpZWxkICNzZWNvbmRWYWwgWyhuZ01vZGVsKV09XFxcInNlY29uZFZhbHVlXFxcIiBba2V5Ym9hcmRUeXBlXSA9IFxcXCJrZXlib2FyZFxcXCIgYXV0b2NvcnJlY3Q9XFxcImZhbHNlXFxcIiByZXR1cm5LZXlUeXBlPVxcXCJkb25lXFxcIlxcclxcbiAgICAgICAgIFttYXhMZW5ndGhdPSBcXFwibWF4bGVuZ3RoXFxcIiBjbGFzcz1cXFwidGV4dC1maWVsZCBzZWNvbmQtdmFsXFxcIiBzZWN1cmU9XFxcInt7aXNTZWN1cmV9fVxcXCIgaGludD1cXFwie3sgc2Vjb25kSGludCB9fVxcXCI+PC9UZXh0RmllbGQ+XFxyXFxuICAgIDwvU3RhY2tMYXlvdXQ+XFxyXFxuICAgIDxMYWJlbCAjZXJyb3JNZXNzYWdlIHRleHQ9XFxcInt7IGVycm9yVGV4dCB9fVxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiIGNsYXNzPVxcXCJlcnJvci1tZXNzYWdlXFxcIj48L0xhYmVsPlxcclxcblxcclxcbiAgICA8QnV0dG9uIHRleHQ9XFxcIlNhdmVcXFwiICh0YXApPVxcXCJzdWJtaXREYXRhKHZhbC50ZXh0KVxcXCIgY2xhc3M9XFxcInN1Ym1pdC1idG5cXFwiPjwvQnV0dG9uPlxcclxcblxcclxcbjwvU3RhY2tsYXlvdXQ+XCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRyYW5zZmVyU2VydmljZSB9IGZyb20gJy4uL2RhdGF0cmFuc2Zlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2VcIjtcclxuLy8gaW1wb3J0IHsgTW9kYWxEaWFsb2dQYXJhbXMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZGlyZWN0aXZlcy9kaWFsb2dzXCI7XHJcbmltcG9ydCAqIGFzIGZpcmViYXNlIGZyb20gJ25hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2UnO1xyXG5pbXBvcnQgeyBMb2dpbmNoZWNrU2VydmljZSB9IGZyb20gJy4uL2xvZ2luY2hlY2suc2VydmljZS50bnMnO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgTW9kYWxEaWFsb2dQYXJhbXMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZGlyZWN0aXZlcy9kaWFsb2dzXCI7XHJcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9nc1wiO1xyXG5pbXBvcnQgeyBMYWJlbCB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvbGFiZWwnO1xyXG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL3RleHQtZmllbGQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtc2V0dGluZ3Nmb3JtJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vc2V0dGluZ3Nmb3JtLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9zZXR0aW5nc2Zvcm0uY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZXR0aW5nc2Zvcm1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRyYW5zZmVyU2VydmljZTogVHJhbnNmZXJTZXJ2aWNlLCBwcml2YXRlIGxvZ2luY2hlY2tTZXJ2aWNlOiBMb2dpbmNoZWNrU2VydmljZSwgXHJcbiAgICBwcml2YXRlIHBhZ2U6IFBhZ2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zLCBwcml2YXRlIHBhcmFtczogTW9kYWxEaWFsb2dQYXJhbXMpIHsgfVxyXG5cclxuICBAVmlld0NoaWxkKFwiZXJyb3JNZXNzYWdlXCIsIHsgc3RhdGljOiB0cnVlIH0pIGVtOiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoXCJzZWNvbmRWYWxcIiwgeyBzdGF0aWM6IHRydWUgfSkgc3Y6IEVsZW1lbnRSZWY7XHJcbiAgdXNlcklkO1xyXG4gIGZpZWxkO1xyXG4gIGxhYmVsO1xyXG4gIHZhbHVlO1xyXG4gIHNlY29uZFZhbHVlO1xyXG4gIGtleWJvYXJkO1xyXG4gIG1heGxlbmd0aDtcclxuICBpc1NlY3VyZSA9IGZhbHNlO1xyXG4gIGVycm9yVGV4dDtcclxuICByZXR1cm5LZXkgPSBcImRvbmVcIlxyXG4gIGhpbnQ7XHJcbiAgc2Vjb25kSGludDtcclxuICBuZ09uSW5pdCgpIHtcclxuICAgIC8vIHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xyXG4gICAgdGhpcy5maWVsZCA9IHRoaXMudHJhbnNmZXJTZXJ2aWNlLmdldERhdGEoKTtcclxuICAgIHRoaXMubGFiZWwgPSB0aGlzLmZpZWxkLmxhYmVsO1xyXG4gICAgdGhpcy52YWx1ZSA9IHRoaXMuZmllbGQudmFsdWU7XHJcbiAgICBpZih0aGlzLmZpZWxkLnZhbHVlID09IFwiTm9uZVwiKSB7XHJcbiAgICAgIHRoaXMudmFsdWUgPSAnJztcclxuICAgIH1cclxuICAgIGlmKHRoaXMubGFiZWw9PVwiTmFtZVwiKXtcclxuICAgICAgLy8gdGhpcy5rZXlib2FyZCA9IFwiXCI7XHJcbiAgICAgIHRoaXMubWF4bGVuZ3RoID0gMzA7XHJcbiAgICAgIHRoaXMucmV0dXJuS2V5ID0gXCJuZXh0XCI7XHJcbiAgICAgIHRoaXMudmFsdWUgPSB0aGlzLmZpZWxkLmZpcnN0TmFtZTtcclxuICAgICAgdGhpcy5zZWNvbmRWYWx1ZSA9IHRoaXMuZmllbGQubGFzdE5hbWU7XHJcbiAgICAgIHRoaXMuaGludCA9IFwiRmlyc3QgbmFtZVwiO1xyXG4gICAgICB0aGlzLnNlY29uZEhpbnQgPSBcIkxhc3QgbmFtZVwiO1xyXG4gICAgICBsZXQgc2Vjb25kVmFsdWUgPSA8VGV4dEZpZWxkPiB0aGlzLnN2Lm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICAgIHNlY29uZFZhbHVlLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcclxuICAgIH1cclxuICAgIGVsc2UgaWYodGhpcy5sYWJlbD09XCJFbWFpbFwiKXtcclxuICAgICAgdGhpcy5rZXlib2FyZCA9IFwiZW1haWxcIjtcclxuICAgICAgdGhpcy5tYXhsZW5ndGggPSAzMDtcclxuICAgICAgdGhpcy5lcnJvclRleHQgPSBcIkludmFsaWQgZW1haWxcIlxyXG4gICAgICB0aGlzLmhpbnQgPSBcIkVtYWlsXCJcclxuICAgIH1cclxuICAgIGVsc2UgaWYodGhpcy5sYWJlbD09XCJQaG9uZSBOdW1iZXJcIil7XHJcbiAgICAgIHRoaXMua2V5Ym9hcmQgPSBcInBob25lXCI7XHJcbiAgICAgIHRoaXMubWF4bGVuZ3RoID0gMTA7XHJcbiAgICAgIHRoaXMuZXJyb3JUZXh0ID0gXCJJbnZhbGlkIHBob25lIG51bWJlclwiXHJcbiAgICAgIHRoaXMuaGludCA9IFwieHh4LXh4eC14eHh4XCJcclxuICAgIH1cclxuICAgIGVsc2UgaWYodGhpcy5sYWJlbD09XCJQYXNzd29yZFwiKSB7XHJcbiAgICAgIHRoaXMudmFsdWUgPSAnJztcclxuICAgICAgdGhpcy5tYXhsZW5ndGggPSAzMDtcclxuICAgICAgdGhpcy5pc1NlY3VyZSA9IHRydWU7XHJcbiAgICAgIHRoaXMubGFiZWwgPSBcIkVudGVyIG5ldyBwYXNzd29yZFwiO1xyXG4gICAgICB0aGlzLmhpbnQgPSBcIk5ldyBwYXNzd29yZFwiO1xyXG4gICAgICB0aGlzLnNlY29uZEhpbnQgPSBcIlJlLWVudGVyIG5ldyBwYXNzd29yZFwiO1xyXG4gICAgICB0aGlzLmVycm9yVGV4dCA9IFwiUGFzc3dvcmQgbXVzdCBiZSBhdCBsZXN0IDYgY2hhcmFjdGVycyBsb25nXCI7XHJcbiAgICAgIGxldCBzZWNvbmRWYWx1ZSA9IDxUZXh0RmllbGQ+IHRoaXMuc3YubmF0aXZlRWxlbWVudDtcclxuICAgICAgc2Vjb25kVmFsdWUuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3VibWl0RGF0YShyZXN1bHQpIHtcclxuICAgIHRoaXMudXNlcklkID0gdGhpcy5sb2dpbmNoZWNrU2VydmljZS5nZXRVc2VyKCk7XHJcbiAgICBjb25zdCB1c2VyRG9jdW1lbnQgPSBmaXJlYmFzZS5maXJlc3RvcmUuY29sbGVjdGlvbigndXNlcnMnKS5kb2ModGhpcy51c2VySWQpO1xyXG4gICAgaWYgKHRoaXMubGFiZWwgPT0gXCJOYW1lXCIpIHtcclxuICAgICAgZmlyZWJhc2UudXBkYXRlUHJvZmlsZSh7XHJcbiAgICAgICAgZGlzcGxheU5hbWU6IHRoaXMudmFsdWUgKyBcIiBcIiArIHRoaXMuc2Vjb25kVmFsdWVcclxuICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJQcm9maWxlIHVwZGF0ZWRcIilcclxuICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgICAgfSlcclxuXHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwibmFtZVwiLCBuYW1lKVxyXG4gICAgICB1c2VyRG9jdW1lbnQudXBkYXRlKHtcclxuICAgICAgICBmaXJzdF9uYW1lOiB0aGlzLnZhbHVlLFxyXG4gICAgICAgIGxhc3RfbmFtZTogdGhpcy5zZWNvbmRWYWx1ZVxyXG4gICAgICB9KVxyXG5cclxuICAgICAgdmFyIHBvc3RpbmdzQ29sbGVjdGlvbiA9IGZpcmViYXNlLmZpcmVzdG9yZS5jb2xsZWN0aW9uKCdwb3N0aW5ncycpO1xyXG4gICAgICB2YXIgY2hhdHNDb2xsZWN0aW9uID0gZmlyZWJhc2UuZmlyZXN0b3JlLmNvbGxlY3Rpb24oJ2NoYXRzJyk7XHJcbiAgICAgIHVzZXJEb2N1bWVudC5nZXQoKS50aGVuKGRvYyA9PiB7XHJcbiAgICAgICAgbGV0IHBvc3RJZHMgPSBkb2MuZGF0YSgpLnBvc3RzO1xyXG4gICAgICAgIGxldCBjaGF0SWRzID0gZG9jLmRhdGEoKS5jaGF0cztcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInBvc3RpZHNcIiwgcG9zdElkcylcclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgcG9zdElkcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgcG9zdGluZ3NDb2xsZWN0aW9uLmRvYyhwb3N0SWRzW2ldKS51cGRhdGUoe1xyXG4gICAgICAgICAgICB1c2VyOiB0aGlzLnZhbHVlICsgXCIgXCIgKyB0aGlzLnNlY29uZFZhbHVlXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yKHZhciBqID0gMDsgaiA8IGNoYXRJZHMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgIGNoYXRzQ29sbGVjdGlvbi5kb2MoY2hhdElkc1tqXSkuZ2V0KCkudGhlbigoZG9jKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCB1c2VycyA9IGRvYy5kYXRhKCkudXNlcnM7XHJcbiAgICAgICAgICAgIGZvcih2YXIgayA9IDA7IGsgPCB1c2Vycy5sZW5ndGg7IGsrKykge1xyXG4gICAgICAgICAgICAgIGlmKHVzZXJzW2tdLnVpZCA9PT0gdGhpcy51c2VySWQpIHtcclxuICAgICAgICAgICAgICAgIHVzZXJzW2tdLmRpc3BsYXlOYW1lID0gdGhpcy52YWx1ZSArIFwiIFwiICsgdGhpcy5zZWNvbmRWYWx1ZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2hhdHNDb2xsZWN0aW9uLmRvYyhjaGF0SWRzW2pdKS51cGRhdGUoe1xyXG4gICAgICAgICAgICAgIHVzZXJzOiB1c2Vyc1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdGhpcy5wYXJhbXMuY2xvc2VDYWxsYmFjayhcInVwZGF0ZVwiKVxyXG4gICAgfVxyXG5cclxuICAgIGVsc2UgaWYodGhpcy5sYWJlbCA9PSBcIkVtYWlsXCIpIHtcclxuICAgICAgZmlyZWJhc2UudXBkYXRlRW1haWwocmVzdWx0KS50aGVuKCgpID0+IHtcclxuICAgICAgICB1c2VyRG9jdW1lbnQudXBkYXRlKHtcclxuICAgICAgICAgIGVtYWlsOiByZXN1bHQsXHJcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnBhcmFtcy5jbG9zZUNhbGxiYWNrKFwidXBkYXRlXCIpXHJcbiAgICAgICAgfSlcclxuICAgICAgfSkuY2F0Y2goXHJcbiAgICAgICAgICAoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zaG93RXJyb3IoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZih0aGlzLmxhYmVsID09IFwiUGhvbmUgTnVtYmVyXCIpIHtcclxuICAgICAgdXNlckRvY3VtZW50LnVwZGF0ZSh7XHJcbiAgICAgICAgcGhvbmVfbnVtYmVyOiByZXN1bHQsXHJcbiAgICAgIH0pLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIHRoaXMucGFyYW1zLmNsb3NlQ2FsbGJhY2soXCJ1cGRhdGVcIilcclxuICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIHRoaXMuc2hvd0Vycm9yKCk7XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBlbHNlIGlmKHRoaXMubGFiZWwgPT0gXCJFbnRlciBuZXcgcGFzc3dvcmRcIikge1xyXG4gICAgICBpZih0aGlzLnZhbHVlICE9IHRoaXMuc2Vjb25kVmFsdWUpIHtcclxuICAgICAgICB0aGlzLmVycm9yVGV4dCA9IFwiUGFzc3dvcmRzIGRvIG5vdCBtYXRjaFwiO1xyXG4gICAgICAgIHRoaXMuc2hvd0Vycm9yKCk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgZmlyZWJhc2UudXBkYXRlUGFzc3dvcmQodGhpcy52YWx1ZSkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnBhcmFtcy5jbG9zZUNhbGxiYWNrKFwidXBkYXRlXCIpXHJcbiAgICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgdGhpcy5lcnJvclRleHQgPSBcIlBhc3N3b3JkIG11c3QgYmUgYXQgbGVzdCA2IGNoYXJhY3RlcnMgbG9uZ1wiO1xyXG4gICAgICAgICAgdGhpcy5zaG93RXJyb3IoKTtcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjbG9zZShyZXMpIHtcclxuICAgIHRoaXMucGFyYW1zLmNsb3NlQ2FsbGJhY2socmVzKTtcclxuICB9XHJcblxyXG4gIHNob3dFcnJvcigpIHtcclxuICAgIGxldCBlcnJvck1lc3NhZ2UgPSA8TGFiZWw+IHRoaXMuZW0ubmF0aXZlRWxlbWVudDtcclxuICAgIGVycm9yTWVzc2FnZS5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XHJcbiAgfVxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCJcIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8cD5cXHJcXG4gIHVwZGF0ZSB3b3JrcyFcXHJcXG48L3A+XFxyXFxuXCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBMb2dpbmNoZWNrU2VydmljZSB9IGZyb20gJy4uL2xvZ2luY2hlY2suc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC11cGRhdGUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi91cGRhdGUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3VwZGF0ZS5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFVwZGF0ZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbG9naW5jaGVja1NlcnZpY2U6IExvZ2luY2hlY2tTZXJ2aWNlKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgXHR0aGlzLmxvZ2luY2hlY2tTZXJ2aWNlLmxvZ2luQ2hlY2soKTtcclxuICB9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFVzZXJTZXJ2aWNlIHtcclxuICBcdC8qKlxyXG5cdCogVG8gZ2V0IHRoZSBzZXJ2ZXIgdG8gcmVjb2duaXplIHlvdXIgbW9iaWxlIGRldmljZSwgZmluZCB5b3VyIGlwdjQgYWRkcmVzcyBieSBydW5uaW5nIGlwY29uZmlnIGluIGEgdGVybWluYWwgd2luZG93XHJcblx0KiBhbmQgYWRkIGEgbmV3IHVyaSBsaW5lIHdpdGggeW91ciBpcHY0IGFkZHJlc3MuIERvIHRoaXMgZm9yIG5ldHdvcmtfc2VjdXJpdHlfY29uZmlnLnhtbCwgdXNlci5zZXJ2aWNlcy50bnMudHMsIGFuZFxyXG5cdCogcG9zdGluZy5zZXJ2aWNlLnRucy50cy5cclxuXHQqL1xyXG5cdC8vIEFkYW0ncyB0ZXN0aW5nIHNlcnZlclxyXG5cdC8vIHVyaSA9ICdodHRwOi8vMTkyLjE2OC4xLjc6NDAwMCc7XHJcblx0Ly8gdXJpID0gJ2h0dHA6Ly8xMC41LjExLjI1OjQwMDAnO1xyXG5cdC8vIFBoaWxsaXAncyBUZXN0aW5nIHNlcnZlclxyXG5cdHVyaSA9ICdodHRwOi8vMTkyLjE2OC4xLjM6NDAwMCc7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7IH1cclxuXHJcbiAgZ2V0VXNlcnMoKSB7XHJcbiAgXHRyZXR1cm4gdGhpcy5odHRwLmdldChgJHt0aGlzLnVyaX0vdXNlcnNgKTtcclxuICB9XHJcblxyXG4gIGdldFVzZXJieUlkKGlkKSB7XHJcbiAgXHRyZXR1cm4gdGhpcy5odHRwLmdldChgJHt0aGlzLnVyaX0vdXNlcnMvJHtpZH1gKTtcclxuICB9XHJcblxyXG4gIGFkZFVzZXIobmFtZT0nJywgdXNlcm5hbWU9JycsIGFkZHJlc3M9JycsIGJpcnRoZGF0ZT0nJywgZW1haWw9JycsIGdlbmRlcj0nJywgcGhvbmVfbnVtYmVyPScnLCByaWRlc19naXZlbj1cIjBcIiwgcmlkZXNfcmVjZWl2ZWQ9XCIwXCIpIHtcclxuICBcdGNvbnN0IHVzZXIgPSB7XHJcbiAgXHRcdG5hbWU6IG5hbWUsXHJcbiAgICAgIHVzZXJuYW1lOiB1c2VybmFtZSxcclxuICAgICAgYWRkcmVzczogYWRkcmVzcyxcclxuICAgICAgYmlydGhkYXRlOiBiaXJ0aGRhdGUsXHJcbiAgICAgIGVtYWlsOiBlbWFpbCxcclxuICAgICAgZ2VuZGVyOiBnZW5kZXIsXHJcbiAgICAgIHBob25lX251bWJlcjogcGhvbmVfbnVtYmVyLFxyXG4gICAgICByaWRlc19naXZlbjogcmlkZXNfZ2l2ZW4sXHJcbiAgICAgIHJpZGVzX3JlY2VpdmVkOiByaWRlc19yZWNlaXZlZCxcclxuICAgICAgcGF5bWVudF9pZDogXCJcIlxyXG4gIFx0fTtcclxuICBcdHJldHVybiB0aGlzLmh0dHAucG9zdChgJHt0aGlzLnVyaX0vdXNlcnMvYWRkL2AsIHVzZXIpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlVXNlcihpZCwgbmFtZSwgdXNlcm5hbWUsIGFkZHJlc3MsIGJpcnRoZGF0ZSwgZW1haWwsIGdlbmRlciwgcGhvbmVfbnVtYmVyLCByaWRlc19naXZlbiwgcmlkZXNfcmVjZWl2ZWQsIHBheW1lbnRfaWQpIHtcclxuICBcdGNvbnN0IHVzZXIgPSB7XHJcbiAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgIHVzZXJuYW1lOiB1c2VybmFtZSxcclxuICAgICAgYWRkcmVzczogYWRkcmVzcyxcclxuICAgICAgYmlydGhkYXRlOiBiaXJ0aGRhdGUsXHJcbiAgICAgIGVtYWlsOiBlbWFpbCxcclxuICAgICAgZ2VuZGVyOiBnZW5kZXIsXHJcbiAgICAgIHBob25lX251bWJlcjogcGhvbmVfbnVtYmVyLFxyXG4gICAgICByaWRlc19naXZlbjogcmlkZXNfZ2l2ZW4sXHJcbiAgICAgIHJpZGVzX3JlY2VpdmVkOiByaWRlc19yZWNlaXZlZCxcclxuICAgICAgcGF5bWVudF9pZDogcGF5bWVudF9pZFxyXG4gICAgfTtcclxuICBcdHJldHVybiB0aGlzLmh0dHAucG9zdChgJHt0aGlzLnVyaX0vdXNlcnMvdXBkYXRlLyR7aWR9YCwgdXNlcik7XHJcbiAgfVxyXG5cclxuICBkZWxldGVVc2VyKGlkKSB7XHJcbiAgXHRyZXR1cm4gdGhpcy5odHRwLmdldChgJHt0aGlzLnVyaX0vdXNlcnMvZGVsZXRlLyR7aWR9YCk7XHJcbiAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBVc2VyU2VydmljZSB7XHJcbiAgXHQvKipcclxuXHQqIFRvIGdldCB0aGUgc2VydmVyIHRvIHJlY29nbml6ZSB5b3VyIG1vYmlsZSBkZXZpY2UsIGZpbmQgeW91ciBpcHY0IGFkZHJlc3MgYnkgcnVubmluZyBpcGNvbmZpZyBpbiBhIHRlcm1pbmFsIHdpbmRvd1xyXG5cdCogYW5kIGFkZCBhIG5ldyB1cmkgbGluZSB3aXRoIHlvdXIgaXB2NCBhZGRyZXNzLiBEbyB0aGlzIGZvciBuZXR3b3JrX3NlY3VyaXR5X2NvbmZpZy54bWwsIHVzZXIuc2VydmljZXMudG5zLnRzLCBhbmRcclxuXHQqIHBvc3Rpbmcuc2VydmljZS50bnMudHMuXHJcblx0Ki9cclxuXHQvLyBBZGFtJ3MgdGVzdGluZyBzZXJ2ZXJcclxuXHQvLyB1cmkgPSAnaHR0cDovLzE5Mi4xNjguMS43OjQwMDAnO1xyXG5cdC8vIHVyaSA9ICdodHRwOi8vMTAuNS4xMS4yNTo0MDAwJztcclxuXHQvLyBQaGlsbGlwJ3MgVGVzdGluZyBzZXJ2ZXJcclxuXHR1cmkgPSAnaHR0cDovLzE5Mi4xNjguMS4zOjQwMDAnO1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkgeyB9XHJcblxyXG4gIGdldFVzZXJzKCkge1xyXG4gIFx0cmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy51cml9L3VzZXJzYCk7XHJcbiAgfVxyXG5cclxuICBnZXRVc2VyYnlJZChpZCkge1xyXG4gIFx0cmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy51cml9L3VzZXJzLyR7aWR9YCk7XHJcbiAgfVxyXG5cclxuICBhZGRVc2VyKG5hbWU9JycsIHVzZXJuYW1lPScnLCBhZGRyZXNzPScnLCBiaXJ0aGRhdGU9JycsIGVtYWlsPScnLCBnZW5kZXI9JycsIHBob25lX251bWJlcj0nJywgcmlkZXNfZ2l2ZW49XCIwXCIsIHJpZGVzX3JlY2VpdmVkPVwiMFwiKSB7XHJcbiAgXHRjb25zdCB1c2VyID0ge1xyXG4gIFx0XHRuYW1lOiBuYW1lLFxyXG4gICAgICB1c2VybmFtZTogdXNlcm5hbWUsXHJcbiAgICAgIGFkZHJlc3M6IGFkZHJlc3MsXHJcbiAgICAgIGJpcnRoZGF0ZTogYmlydGhkYXRlLFxyXG4gICAgICBlbWFpbDogZW1haWwsXHJcbiAgICAgIGdlbmRlcjogZ2VuZGVyLFxyXG4gICAgICBwaG9uZV9udW1iZXI6IHBob25lX251bWJlcixcclxuICAgICAgcmlkZXNfZ2l2ZW46IHJpZGVzX2dpdmVuLFxyXG4gICAgICByaWRlc19yZWNlaXZlZDogcmlkZXNfcmVjZWl2ZWQsXHJcbiAgICAgIHBheW1lbnRfaWQ6IFwiXCJcclxuICBcdH07XHJcbiAgXHRyZXR1cm4gdGhpcy5odHRwLnBvc3QoYCR7dGhpcy51cml9L3VzZXJzL2FkZC9gLCB1c2VyKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVVzZXIoaWQsIG5hbWUsIHVzZXJuYW1lLCBhZGRyZXNzLCBiaXJ0aGRhdGUsIGVtYWlsLCBnZW5kZXIsIHBob25lX251bWJlciwgcmlkZXNfZ2l2ZW4sIHJpZGVzX3JlY2VpdmVkLCBwYXltZW50X2lkKSB7XHJcbiAgXHRjb25zdCB1c2VyID0ge1xyXG4gICAgICBuYW1lOiBuYW1lLFxyXG4gICAgICB1c2VybmFtZTogdXNlcm5hbWUsXHJcbiAgICAgIGFkZHJlc3M6IGFkZHJlc3MsXHJcbiAgICAgIGJpcnRoZGF0ZTogYmlydGhkYXRlLFxyXG4gICAgICBlbWFpbDogZW1haWwsXHJcbiAgICAgIGdlbmRlcjogZ2VuZGVyLFxyXG4gICAgICBwaG9uZV9udW1iZXI6IHBob25lX251bWJlcixcclxuICAgICAgcmlkZXNfZ2l2ZW46IHJpZGVzX2dpdmVuLFxyXG4gICAgICByaWRlc19yZWNlaXZlZDogcmlkZXNfcmVjZWl2ZWQsXHJcbiAgICAgIHBheW1lbnRfaWQ6IHBheW1lbnRfaWRcclxuICAgIH07XHJcbiAgXHRyZXR1cm4gdGhpcy5odHRwLnBvc3QoYCR7dGhpcy51cml9L3VzZXJzL3VwZGF0ZS8ke2lkfWAsIHVzZXIpO1xyXG4gIH1cclxuXHJcbiAgZGVsZXRlVXNlcihpZCkge1xyXG4gIFx0cmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy51cml9L3VzZXJzL2RlbGV0ZS8ke2lkfWApO1xyXG4gIH1cclxuXHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi8qIEFkZCBtb2JpbGUgc3R5bGVzIGZvciB0aGUgY29tcG9uZW50IGhlcmUuICAqL1xcbi5pbWcge1xcblxcdGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uYWN0aXZpdHktaW5kaWNhdG9yIHtcXG4gIGNvbG9yOiAjYWMwMGU2O1xcbn1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8UGFnZS5hY3Rpb25CYXI+XFxyXFxuICA8QWN0aW9uQmFyIHRpdGxlPVxcXCJcXFwiIGJhY2tncm91bmRDb2xvcj1cXFwiYmxhY2tcXFwiPlxcclxcbiAgXFx0PE5hdmlnYXRpb25CdXR0b24gdGV4dD1cXFwiR28gQmFja1xcXCIgYW5kcm9pZC5zeXN0ZW1JY29uPVxcXCJpY19tZW51X2JhY2tcXFwiICh0YXApPVxcXCJvbk5hdkJ0blRhcCgpXFxcIj48L05hdmlnYXRpb25CdXR0b24+XFxyXFxuICA8L0FjdGlvbkJhcj5cXHJcXG48L1BhZ2UuYWN0aW9uQmFyPlxcclxcbjwhLS0gPEltYWdlIHNyYz1cXFwie3sgaW1nU291cmNlIH19XFxcIiBjbGFzcz1cXFwiaW1nXFxcIj48L0ltYWdlPiAtLT5cXHJcXG48SW1hZ2Vab29tIHNyYz1cXFwie3sgaW1nU291cmNlIH19XFxcIiBjbGFzcz1cXFwiaW1nXFxcIiAobG9hZGVkKT1cXFwib25JbWFnZUxvYWRlZCgpXFxcIj48L0ltYWdlWm9vbT5cXHJcXG5cXHJcXG48QWN0aXZpdHlJbmRpY2F0b3IgI2FjdGl2aXR5SW5kaWNhdG9yIGJ1c3k9XFxcInRydWVcXFwiIHdpZHRoPVxcXCI0MFxcXCIgIGNsYXNzPVxcXCJhY3Rpdml0eS1pbmRpY2F0b3JcXFwiPlxcclxcbjwvQWN0aXZpdHlJbmRpY2F0b3I+XCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRyYW5zZmVyU2VydmljZSB9IGZyb20gJy4uL2RhdGF0cmFuc2Zlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IEFjdGl2aXR5SW5kaWNhdG9yIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9hY3Rpdml0eS1pbmRpY2F0b3InO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtdmlldy1pbWFnZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3ZpZXctaW1hZ2UuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3ZpZXctaW1hZ2UuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBWaWV3SW1hZ2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRyYW5zZmVyU2VydmljZTogVHJhbnNmZXJTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucykgeyB9XHJcbiAgQFZpZXdDaGlsZChcImFjdGl2aXR5SW5kaWNhdG9yXCIsIHsgc3RhdGljOiB0cnVlIH0pIGFpOiBFbGVtZW50UmVmO1xyXG4gIGltZ1NvdXJjZTtcclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgXHR0aGlzLmltZ1NvdXJjZSA9IHRoaXMudHJhbnNmZXJTZXJ2aWNlLmdldERhdGEoKTtcclxuICBcdGNvbnNvbGUubG9nKHRoaXMuaW1nU291cmNlKTtcclxuICB9XHJcblxyXG4gIG9uTmF2QnRuVGFwKCkge1xyXG4gIFx0aWYodGhpcy5yb3V0ZXIuY2FuR29CYWNrKSB7XHJcbiAgXHRcdHRoaXMucm91dGVyLmJhY2soKTtcclxuICBcdH1cclxuICBcdGVsc2Uge1xyXG4gIFx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ25hdmlnYXRpb24nXSk7XHJcbiAgXHR9XHJcbiAgfVxyXG5cclxuICBvbkltYWdlTG9hZGVkKCkge1xyXG4gIFx0bGV0IGFjdGl2aXR5SW5kaWNhdG9yID0gPEFjdGl2aXR5SW5kaWNhdG9yPiB0aGlzLmFpLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgXHRhY3Rpdml0eUluZGljYXRvci5idXN5ID0gZmFsc2U7XHJcbiAgfVxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCIvKiBBZGQgbW9iaWxlIHN0eWxlcyBmb3IgdGhlIGNvbXBvbmVudCBoZXJlLiAgKi9cXHJcXG4ucGFnZSB7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHZpc2liaWxpdHk6IGNvbGxhcHNlO1xcclxcbn1cXHJcXG4uZm9ybSB7XFxyXFxuICBtYXJnaW4tbGVmdDogMzA7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDMwO1xcclxcbiAgZmxleC1ncm93OiAyO1xcclxcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXHJcXG4gIG1hcmdpbi10b3A6IDEwMDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDUwO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nbyB7XFxyXFxuICAvKm1hcmdpbi10b3A6IDE1OyovXFxyXFxuICBtYXJnaW4tYm90dG9tOiA3MjtcXHJcXG4gIGhlaWdodDogMTIwO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcbi5oZWFkZXIge1xcclxcbiAgaG9yaXpvbnRhbC1hbGlnbjogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAyNTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBtYXJnaW4tYm90dG9tOiA3MDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGNvbG9yOiAjYWMwMGU2O1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXQtZmllbGQge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMjU7XFxyXFxufVxcclxcbi5pbnB1dCB7XFxyXFxuICBmb250LXNpemU6IDE4O1xcclxcbiAgcGxhY2Vob2xkZXItY29sb3I6ICNBOEE4QTg7XFxyXFxufVxcclxcblxcclxcbi5idG4tcHJpbWFyeSB7XFxyXFxuICBoZWlnaHQ6IDUwO1xcclxcbiAgbWFyZ2luOiAzMCA1IDE1IDU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWMwMGU2O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTtcXHJcXG4gIGZvbnQtc2l6ZTogMjA7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLWZiIHtcXHJcXG4gIGhlaWdodDogMTAwO1xcclxcbiAgbWFyZ2luOiAwIDUgMTUgNTtcXHJcXG4gIC8qYm9yZGVyLXJhZGl1czogNTsqL1xcclxcbiAgZm9udC1zaXplOiAyMDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxufVxcclxcblxcclxcbi5sb2dpbi1sYWJlbCB7XFxyXFxuICBob3Jpem9udGFsLWFsaWduOiBjZW50ZXI7XFxyXFxuICBjb2xvcjogI0E4QThBODtcXHJcXG4gIGZvbnQtc2l6ZTogMTY7XFxyXFxuICAvKiBtYXJnaW4tYm90dG9tOiAyMDsgKi9cXHJcXG59XFxyXFxuLnNpZ24tdXAtbGFiZWwge1xcclxcbiAgaG9yaXpvbnRhbC1hbGlnbjogY2VudGVyO1xcclxcbiAgY29sb3I6ICNBOEE4QTg7XFxyXFxuICBmb250LXNpemU6IDE2O1xcclxcbiAgIG1hcmdpbi1ib3R0b206IDIwOyBcXHJcXG59XFxyXFxuLmJvbGQge1xcclxcbiAgY29sb3I6ICMwMDAwMDA7IFxcclxcbn1cXHJcXG4uYWN0aXZpdHktaW5kaWNhdG9yIHtcXHJcXG4gIGNvbG9yOiAjYWMwMGU2O1xcclxcbn1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8U2Nyb2xsVmlldz5cXHJcXG5cXHQ8R3JpZExheW91dCByb3dzPVxcXCIqLCBhdXRvXFxcIiAjd2VsY29tZUNvbnRhaW5lcj5cXHJcXG5cXHRcXHQ8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImZvcm1cXFwiIHJvdz1cXFwiMFxcXCIgaGVpZ2h0PVxcXCIxMDAlXFxcIiAjZm9ybUxheW91dD5cXHJcXG5cXHRcXHRcXHQ8SW1hZ2UgY2xhc3M9XFxcImxvZ29cXFwiIHNyYz1cXFwifi9pbWcvbG9nby5wbmdcXFwiPjwvSW1hZ2U+XFxyXFxuXFx0XFx0XFx0PCEtLSA8TGFiZWwgY2xhc3M9XFxcImhlYWRlclxcXCIgdGV4dD1cXFwiQ29sbGVnZVBvb2xcXFwiPjwvTGFiZWw+IC0tPlxcclxcblxcclxcblxcdFxcdFxcdDxTdGFja0xheW91dCAqbmdJZj1cXFwiIWlzTG9nZ2luZ0luXFxcIiBjbGFzcz1cXFwiaW5wdXQtZmllbGRcXFwiPlxcclxcblxcdFxcdFxcdFxcdDxUZXh0RmllbGQgY2xhc3M9XFxcImlucHV0XFxcIiBoaW50PVxcXCJGaXJzdCBuYW1lXFxcIiBbKG5nTW9kZWwpXT1cXFwiZmlyc3ROYW1lXFxcIiByZXR1cm5LZXlUeXBlPVxcXCJuZXh0XFxcIiAjZm4+XFxyXFxuXFx0XFx0XFx0XFx0PC9UZXh0RmllbGQ+XFxyXFxuXFx0XFx0XFx0XFx0PFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJoci1saWdodFxcXCI+PC9TdGFja0xheW91dD5cXHJcXG5cXHRcXHRcXHQ8L1N0YWNrTGF5b3V0PlxcclxcblxcclxcblxcdFxcdFxcdDxTdGFja0xheW91dCAqbmdJZj1cXFwiIWlzTG9nZ2luZ0luXFxcIiBjbGFzcz1cXFwiaW5wdXQtZmllbGRcXFwiPlxcclxcblxcdFxcdFxcdFxcdDxUZXh0RmllbGQgY2xhc3M9XFxcImlucHV0XFxcIiBoaW50PVxcXCJMYXN0IG5hbWVcXFwiIFsobmdNb2RlbCldPVxcXCJsYXN0TmFtZVxcXCIgcmV0dXJuS2V5VHlwZT1cXFwibmV4dFxcXCIgI2xuPlxcclxcblxcdFxcdFxcdFxcdDwvVGV4dEZpZWxkPlxcclxcblxcdFxcdFxcdFxcdDxTdGFja0xheW91dCBjbGFzcz1cXFwiaHItbGlnaHRcXFwiPjwvU3RhY2tMYXlvdXQ+XFxyXFxuXFx0XFx0XFx0PC9TdGFja0xheW91dD5cXHJcXG5cXHJcXG5cXHRcXHRcXHQ8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImlucHV0LWZpZWxkXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHQ8VGV4dEZpZWxkIGNsYXNzPVxcXCJpbnB1dFxcXCIgaGludD1cXFwiRW1haWxcXFwiIGtleWJvYXJkVHlwZT1cXFwiZW1haWxcXFwiIGF1dG9jb3JyZWN0PVxcXCJmYWxzZVxcXCJcXHJcXG5cXHRcXHRcXHRcXHRcXHRhdXRvY2FwaXRhbGl6YXRpb25UeXBlPVxcXCJub25lXFxcIiBbKG5nTW9kZWwpXT1cXFwiZW1haWxcXFwiIHJldHVybktleVR5cGU9XFxcIm5leHRcXFwiXFxyXFxuXFx0XFx0XFx0XFx0XFx0KHJldHVyblByZXNzKT1cXFwiZm9jdXNQYXNzd29yZCgpXFxcIiAjZW0+PC9UZXh0RmllbGQ+XFxyXFxuXFx0XFx0XFx0XFx0PFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJoci1saWdodFxcXCI+PC9TdGFja0xheW91dD5cXHJcXG5cXHRcXHRcXHQ8L1N0YWNrTGF5b3V0PlxcclxcblxcclxcblxcdFxcdFxcdDxTdGFja0xheW91dCBjbGFzcz1cXFwiaW5wdXQtZmllbGRcXFwiPlxcclxcblxcdFxcdFxcdFxcdDxUZXh0RmllbGQgY2xhc3M9XFxcImlucHV0XFxcIiBoaW50PVxcXCJQYXNzd29yZFxcXCIgc2VjdXJlPVxcXCJ0cnVlXFxcIiBbKG5nTW9kZWwpXT1cXFwicGFzc3dvcmRcXFwiXFxyXFxuXFx0XFx0XFx0XFx0XFx0W3JldHVybktleVR5cGVdPVxcXCJpc0xvZ2dpbmdJbiA/ICdkb25lJyA6ICduZXh0J1xcXCIgKHJldHVyblByZXNzKT1cXFwiZm9jdXNDb25maXJtUGFzc3dvcmQoKVxcXCIgI3B3PlxcclxcblxcdFxcdFxcdFxcdDwvVGV4dEZpZWxkPlxcclxcblxcdFxcdFxcdFxcdDxTdGFja0xheW91dCBjbGFzcz1cXFwiaHItbGlnaHRcXFwiPjwvU3RhY2tMYXlvdXQ+XFxyXFxuXFx0XFx0XFx0PC9TdGFja0xheW91dD5cXHJcXG5cXHJcXG5cXHRcXHRcXHQ8U3RhY2tMYXlvdXQgKm5nSWY9XFxcIiFpc0xvZ2dpbmdJblxcXCIgY2xhc3M9XFxcImlucHV0LWZpZWxkXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHQ8VGV4dEZpZWxkIGNsYXNzPVxcXCJpbnB1dFxcXCIgaGludD1cXFwiQ29uZmlybSBwYXNzd29yZFxcXCIgc2VjdXJlPVxcXCJ0cnVlXFxcIiBbKG5nTW9kZWwpXT1cXFwiY29uZmlybVBhc3N3b3JkXFxcIlxcclxcblxcdFxcdFxcdFxcdFxcdHJldHVybktleVR5cGU9XFxcImRvbmVcXFwiICNjcHc+PC9UZXh0RmllbGQ+XFxyXFxuXFx0XFx0XFx0XFx0PFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJoci1saWdodFxcXCI+PC9TdGFja0xheW91dD5cXHJcXG5cXHRcXHRcXHQ8L1N0YWNrTGF5b3V0PlxcclxcblxcclxcblxcdFxcdFxcdDxCdXR0b24gW3RleHRdPVxcXCJpc0xvZ2dpbmdJbiA/ICdMb2cgSW4nIDogJ1NpZ24gVXAnXFxcIiAodGFwKT1cXFwic3VibWl0KClcXFwiXFxyXFxuXFx0XFx0XFx0XFx0Y2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeSBtLXQtMjBcXFwiPjwvQnV0dG9uPlxcclxcblxcdFxcdFxcdDxTdGFja0xheW91dD5cXHJcXG5cXHRcXHRcXHRcXHQ8RmFjZWJvb2tMb2dpbkJ1dHRvbiAodGFwKT1cXFwiZmJMb2dpbigpXFxcIiBjbGFzcz1cXFwiYnRuLWZiXFxcIj48L0ZhY2Vib29rTG9naW5CdXR0b24+XFxyXFxuXFx0XFx0XFx0PC9TdGFja0xheW91dD5cXHJcXG5cXHRcXHRcXHQ8TGFiZWwgKm5nSWY9XFxcImlzTG9nZ2luZ0luXFxcIiB0ZXh0PVxcXCJGb3Jnb3QgeW91ciBwYXNzd29yZD9cXFwiIGNsYXNzPVxcXCJsb2dpbi1sYWJlbFxcXCJcXHJcXG5cXHRcXHRcXHRcXHQodGFwKT1cXFwiZm9yZ290UGFzc3dvcmQoKVxcXCI+PC9MYWJlbD5cXHJcXG5cXHRcXHQ8L1N0YWNrTGF5b3V0PlxcclxcblxcdFxcdDxTdGFja0xheW91dCByb3c9XFxcIjFcXFwiPlxcclxcblxcdFxcdFxcdDxMYWJlbCBjbGFzcz1cXFwic2lnbi11cC1sYWJlbFxcXCIgKHRhcCk9XFxcInRvZ2dsZUZvcm0oKVxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0PEZvcm1hdHRlZFN0cmluZz5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8U3BhbiBbdGV4dF09XFxcImlzTG9nZ2luZ0luID8gJ0RvbuKAmXQgaGF2ZSBhbiBhY2NvdW50PyAnIDogJ0JhY2sgdG8gTG9naW4nXFxcIj48L1NwYW4+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PFNwYW4gW3RleHRdPVxcXCJpc0xvZ2dpbmdJbiA/ICdTaWduIHVwJyA6ICcnXFxcIiBjbGFzcz1cXFwiYm9sZFxcXCI+PC9TcGFuPlxcclxcblxcdFxcdFxcdFxcdDwvRm9ybWF0dGVkU3RyaW5nPlxcclxcblxcdFxcdFxcdDwvTGFiZWw+XFxyXFxuXFx0XFx0PC9TdGFja0xheW91dD5cXHJcXG5cXHQ8L0dyaWRMYXlvdXQ+XFxyXFxuPC9TY3JvbGxWaWV3PlxcclxcbjxBY3Rpdml0eUluZGljYXRvciAjYWN0aXZpdHlJbmRpY2F0b3IgYnVzeT1cXFwidHJ1ZVxcXCIgd2lkdGg9XFxcIjQwXFxcIiBoZWlnaHQ9XFxcIjQwXFxcIiBjbGFzcz1cXFwiYWN0aXZpdHktaW5kaWNhdG9yXFxcIj5cXHJcXG48L0FjdGl2aXR5SW5kaWNhdG9yPlwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCwgTmdab25lLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGFsZXJ0LCBwcm9tcHQgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCI7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2UnO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0ICogYXMgZmlyZWJhc2UgZnJvbSAnbmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZSc7XHJcbmltcG9ydCB7IG1lc3NhZ2luZywgTWVzc2FnZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlL21lc3NhZ2luZ1wiO1xyXG5pbXBvcnQgeyBMb2dpbmNoZWNrU2VydmljZSB9IGZyb20gJy4uL2xvZ2luY2hlY2suc2VydmljZS50bnMnO1xyXG5pbXBvcnQgeyBBY3Rpdml0eUluZGljYXRvciB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvYWN0aXZpdHktaW5kaWNhdG9yJztcclxuaW1wb3J0IHsgVHJhbnNmZXJTZXJ2aWNlIH0gZnJvbSAnLi4vZGF0YXRyYW5zZmVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBNb2RhbERpYWxvZ1NlcnZpY2UgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZGlyZWN0aXZlcy9kaWFsb2dzXCI7XHJcbmltcG9ydCB7IEZvcmdldEZvcm1Db21wb25lbnQgfSBmcm9tICcuLi9mb3JnZXQtZm9ybS9mb3JnZXQtZm9ybS5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtd2VsY29tZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3dlbGNvbWUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3dlbGNvbWUuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgV2VsY29tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgaXNMb2dnaW5nSW4gPSB0cnVlO1xyXG4gIGVtYWlsO1xyXG4gIHBhc3N3b3JkO1xyXG4gIGNvbmZpcm1QYXNzd29yZDtcclxuICBmaXJzdE5hbWU7XHJcbiAgbGFzdE5hbWU7XHJcbiAgZGV2aWNlVG9rZW47XHJcbiAgZmlyZWJhc2VDb25maWcgPSB7XHJcbiAgICBhcGlLZXk6IFwiQUl6YVN5Qkd1aVlwTTEzOFE2YXlxRE1SVVZXSnAxQ0U5V0IwOU53XCIsXHJcbiAgICBhdXRoRG9tYWluOiBcImNvbGxlZ2Vwb29sLTE1NTI3NDkxMTg2MTcuZmlyZWJhc2VhcHAuY29tXCIsXHJcbiAgICBkYXRhYmFzZVVSTDogXCJodHRwczovL2NvbGxlZ2Vwb29sLTE1NTI3NDkxMTg2MTcuZmlyZWJhc2Vpby5jb21cIixcclxuICAgIHByb2plY3RJZDogXCJjb2xsZWdlcG9vbC0xNTUyNzQ5MTE4NjE3XCIsXHJcbiAgICBzdG9yYWdlQnVja2V0OiBcImdzOi8vY29sbGVnZXBvb2wtMTU1Mjc0OTExODYxNy5hcHBzcG90LmNvbVwiLFxyXG4gICAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiMzc1MjYzNjgwMTgzXCIsXHJcbiAgICBhcHBJZDogXCIxOjM3NTI2MzY4MDE4Mzp3ZWI6ZjJhZjNmMjgzNTYzOGQ3Y1wiLFxyXG4gIH07XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTogUGFnZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMsIHByaXZhdGUgbG9naW5jaGVja1NlcnZpY2U6IExvZ2luY2hlY2tTZXJ2aWNlLCBwcml2YXRlIHRyYW5zZmVyU2VydmljZTogVHJhbnNmZXJTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSwgcHJpdmF0ZSBtb2RhbDogTW9kYWxEaWFsb2dTZXJ2aWNlLCBwcml2YXRlIHZjUmVmOiBWaWV3Q29udGFpbmVyUmVmKSB7IH1cclxuXHJcbiAgQFZpZXdDaGlsZChcImVtXCIsIHsgc3RhdGljOiB0cnVlIH0pIGVtOiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoXCJwd1wiLCB7IHN0YXRpYzogdHJ1ZSB9KSBwdzogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKFwiY3B3XCIsIHsgc3RhdGljOiB0cnVlIH0pIGNwdzogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKFwiZm5cIiwgeyBzdGF0aWM6IHRydWUgfSkgZm46IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZChcImxuXCIsIHsgc3RhdGljOiB0cnVlIH0pIGxuOiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoXCJ3ZWxjb21lQ29udGFpbmVyXCIsIHsgc3RhdGljOiB0cnVlIH0pIHdjOiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoXCJmb3JtTGF5b3V0XCIsIHsgc3RhdGljOiB0cnVlIH0pIGZsOiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoXCJhY3Rpdml0eUluZGljYXRvclwiLCB7IHN0YXRpYzogdHJ1ZSB9KSBhaTogRWxlbWVudFJlZjtcclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLnJlZ2lzdGVyTm90aWZpY2F0aW9ucygpO1xyXG4gICAgdGhpcy5jcmVhdGVWaWV3cygpO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgY3JlYXRlVmlld3MoKSB7XHJcbiAgICBhd2FpdCBmaXJlYmFzZS5pbml0KHRoaXMuZmlyZWJhc2VDb25maWcpLnRoZW4oXHJcbiAgICAgICgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImZpcmViYXNlLmluaXQgZG9uZVwiKTtcclxuICAgICAgfSxcclxuICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBmaXJlYmFzZS5pbml0IGVycm9yOiAke2Vycm9yfWApO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gICAgYXdhaXQgZmlyZWJhc2UuYWRkT25NZXNzYWdlUmVjZWl2ZWRDYWxsYmFjayhhc3luYyAobWVzc2FnZTogYW55KSA9PiB7XHJcbiAgICAgIGlmKG1lc3NhZ2UudHlwZSA9PT0gXCJOZXcgTWVzc2FnZVwiKSB7XHJcbiAgICAgICAgdGhpcy50cmFuc2ZlclNlcnZpY2Uuc2V0RGF0YShtZXNzYWdlLmRhdGEuY2hhdElkKTtcclxuICAgICAgICBhd2FpdCB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge3RoaXMucm91dGVyLm5hdmlnYXRlKFsnY2hhdCddLCB7Y2xlYXJIaXN0b3J5OiB0cnVlfSl9KVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgaWYgKHRoaXMubG9naW5jaGVja1NlcnZpY2UuZ2V0VXNlckZyb21Mb2NhbFN0b3JhZ2UoKSAhPSBudWxsKVxyXG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ25hdmlnYXRpb24nXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XHJcbiAgICBlbHNlIHtcclxuICAgICAgdmFyIGFjdGl2aXR5SW5kaWNhdG9yID0gPEFjdGl2aXR5SW5kaWNhdG9yPnRoaXMuYWkubmF0aXZlRWxlbWVudDtcclxuICAgICAgYWN0aXZpdHlJbmRpY2F0b3IuYnVzeSA9IGZhbHNlO1xyXG4gICAgICB0aGlzLndjLm5hdGl2ZUVsZW1lbnQuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcclxuICAgIH1cclxuICAgIHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlRm9ybSgpIHtcclxuICAgIHRoaXMuaXNMb2dnaW5nSW4gPSAhdGhpcy5pc0xvZ2dpbmdJbjtcclxuICAgIGlmKCF0aGlzLmlzTG9nZ2luZ0luKSB7XHJcbiAgICAgIHRoaXMuZmwubmF0aXZlRWxlbWVudC5zdHlsZS5tYXJnaW5Ub3AgPSAnMzUnO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHRoaXMuZmwubmF0aXZlRWxlbWVudC5zdHlsZS5tYXJnaW5Ub3AgPSAnMTAwJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN1Ym1pdCgpIHtcclxuICAgIGlmICghdGhpcy5lbWFpbCB8fCAhdGhpcy5wYXNzd29yZCkge1xyXG4gICAgICB0aGlzLmFsZXJ0KFwiUGxlYXNlIHByb3ZpZGUgYm90aCBhbiBlbWFpbCBhZGRyZXNzIGFuZCBwYXNzd29yZFwiKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmlzTG9nZ2luZ0luKSB7XHJcbiAgICAgIHRoaXMubG9naW4oKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucmVnaXN0ZXIoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGxvZ2luKCkge1xyXG4gICAgdmFyIGNyZWRlbnRpYWxzOiBmaXJlYmFzZS5Mb2dpbk9wdGlvbnMgPSB7XHJcbiAgICAgIHBhc3N3b3JkT3B0aW9uczoge1xyXG4gICAgICAgIGVtYWlsOiB0aGlzLmVtYWlsLFxyXG4gICAgICAgIHBhc3N3b3JkOiB0aGlzLnBhc3N3b3JkLFxyXG4gICAgICB9LFxyXG4gICAgICB0eXBlOiBmaXJlYmFzZS5Mb2dpblR5cGUuUEFTU1dPUkRcclxuICAgIH1cclxuICAgIGZpcmViYXNlLmxvZ2luKGNyZWRlbnRpYWxzKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgY29uc29sZS5sb2coXCJFbWFpbCBWZXJpZmllZCBTdGF0dXNcIiwgcmVzLmVtYWlsVmVyaWZpZWQpXHJcbiAgICAgIGlmIChyZXMuZW1haWxWZXJpZmllZCkge1xyXG4gICAgICAgIHRoaXMubG9naW5jaGVja1NlcnZpY2UubG9naW5Vc2VyKHJlcy51aWQpXHJcbiAgICAgICAgZmlyZWJhc2UuZmlyZXN0b3JlLmNvbGxlY3Rpb24oJ3VzZXJzJykuZG9jKHJlcy51aWQpLmdldCgpLnRoZW4oZG9jID0+IHtcclxuICAgICAgICAgIGlmIChkb2MuZGF0YSgpLnBheW1lbnRfaWQgPT0gbnVsbClcclxuICAgICAgICAgICAgdGhpcy5sb2dpbmNoZWNrU2VydmljZS5hZGRVc2VyVG9CcmFpbnRyZWUocmVzLmRpc3BsYXlOYW1lLCByZXMuZGlzcGxheU5hbWUsIHJlcy5lbWFpbClcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMudXBkYXRlVG9rZW5zKHJlcy51aWQpO1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnbmF2aWdhdGlvbiddLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcclxuICAgICAgfVxyXG4gICAgICBlbHNle1xyXG4gICAgICAgIHRoaXMuYWxlcnQoXCJZb3VyIGVtYWlsIGhhcyBub3QgYmVlbiB2ZXJpZmllZCB5ZXQuIFBsZWFzZSBjaGVjayB5b3VyIGVtYWlsIGZvciBhIHZlcmlmaWNhdGlvbiBsaW5rLlwiKVxyXG4gICAgICAgIGZpcmViYXNlLnNlbmRFbWFpbFZlcmlmaWNhdGlvbigpO1xyXG4gICAgICB9XHJcbiAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgIHRoaXMuYWxlcnQoXCJXZSBjb3VsZCBub3QgZmluZCBhbiBhY2NvdW50IG1hdGNoaW5nIHlvdXIgZW1haWwgb3IgcGFzc3dvcmQuXCIpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXIoKSB7XHJcbiAgICBpZiAodGhpcy5wYXNzd29yZCAhPSB0aGlzLmNvbmZpcm1QYXNzd29yZCkge1xyXG4gICAgICB0aGlzLmFsZXJ0KFwiWW91ciBwYXNzd29yZHMgZG8gbm90IG1hdGNoXCIpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBmaXJlYmFzZS5jcmVhdGVVc2VyKHtcclxuICAgICAgZW1haWw6IHRoaXMuZW1haWwsXHJcbiAgICAgIHBhc3N3b3JkOiB0aGlzLnBhc3N3b3JkLFxyXG4gICAgfSkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgIHRoaXMubG9naW5jaGVja1NlcnZpY2UuYWRkVXNlclRvRmlyZXN0b3JlKHJlcy51aWQsIG51bGwsIG51bGwsIHJlcy5lbWFpbCwgdGhpcy5maXJzdE5hbWUsIHRoaXMubGFzdE5hbWUsIG51bGwsIG51bGwsIDAsIDAsICd+L2ltZy9zYW1wbGVfcHJvZmlsZS5wbmcnLCB0aGlzLmRldmljZVRva2VuKVxyXG4gICAgICBmaXJlYmFzZS51cGRhdGVQcm9maWxlKHsgZGlzcGxheU5hbWU6IHRoaXMuZmlyc3ROYW1lICsgJyAnICsgdGhpcy5sYXN0TmFtZSB9KS50aGVuKCk7XHJcbiAgICAgIC8vIHRoaXMubG9naW5jaGVja1NlcnZpY2UubG9naW5Vc2VyKHJlcy51aWQpXHJcbiAgICAgIHRoaXMubG9naW5jaGVja1NlcnZpY2UuYWRkVXNlclRvQnJhaW50cmVlKCd0ZXN0JywgJ3Rlc3QgdXNlcicsIHJlcy5lbWFpbClcclxuICAgICAgZmlyZWJhc2Uuc2VuZEVtYWlsVmVyaWZpY2F0aW9uKCkudGhlbihcclxuICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkVtYWlsIHZlcmlmaWNhdGlvbiBzZW50XCIpO1xyXG4gICAgICAgICAgdGhpcy5hbGVydChcIkFuIGVtYWlsIHZlcmlmaWNhdGlvbiBsaW5rIGhhcyBiZWVuIHNlbnQuIFBsZWFzZSBjaGVjayB5b3VyIGVtYWlsIGZvciB0aGUgbGluay5cIilcclxuICAgICAgICAgIHRoaXMudG9nZ2xlRm9ybSgpO1xyXG4gICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIHNlbmRpbmcgZW1haWwgdmVyaWZpY2F0aW9kbjogXCIgKyBlcnIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfSkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBpZiAoZXJyID09ICdDcmVhdGluZyBhIHVzZXIgZmFpbGVkLiBjb20uZ29vZ2xlLmZpcmViYXNlLmF1dGguRmlyZWJhc2VBdXRoVXNlckNvbGxpc2lvbkV4Y2VwdGlvbjogVGhlIGVtYWlsIGFkZHJlc3MgaXMgYWxyZWFkeSBpbiB1c2UgYnkgYW5vdGhlciBhY2NvdW50LicpXHJcbiAgICAgICAgdGhpcy5hbGVydCgnVGhlcmUgaXMgYWxyZWFkeSBhbiBhY2NvdW50IGFzc29jaWF0ZWQgd2l0aCB0aGF0IGVtYWlsJylcclxuICAgICAgZWxzZSBpZiAoZXJyID09ICdDcmVhdGluZyBhIHVzZXIgZmFpbGVkLiBQYXNzd29yZCBzaG91bGQgYmUgYXQgbGVhc3QgNiBjaGFyYWN0ZXJzJylcclxuICAgICAgICB0aGlzLmFsZXJ0KCdQYXNzd29yZCBtdXN0IGJlIGF0IGxlYXN0IDYgY2hhcmFjdGVycycpXHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBmb3Jnb3RQYXNzd29yZCgpIHtcclxuXHJcbiAgICBsZXQgb3B0aW9ucyA9IHtcclxuICAgICAgY29udGV4dDoge30sXHJcbiAgICAgIGZ1bGxzY3JlZW46IHRydWUsXHJcbiAgICAgIHZpZXdDb250YWluZXJSZWY6IHRoaXMudmNSZWZcclxuICAgICAgLy8gYW5pbWF0ZWQ6IHRydWUsXHJcbiAgICAgIC8vIHRyYW5zaXRpb246IHsgbmFtZTogXCJzbGlkZVRvcFwiIH1cclxuICB9O1xyXG4gICAgdGhpcy5tb2RhbC5zaG93TW9kYWwoRm9yZ2V0Rm9ybUNvbXBvbmVudCwgb3B0aW9ucykudGhlbihyZXMgPT4ge1xyXG4gICAgICBpZihyZXMgPT0gJ3VwZGF0ZScpIHtcclxuICAgICAgICAvLyB0aGlzLnVwZGF0ZUxpc3RWaWV3KCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJOb3RpZmljYXRpb25zKCkge1xyXG4gICAgbWVzc2FnaW5nLnJlZ2lzdGVyRm9yUHVzaE5vdGlmaWNhdGlvbnMoe1xyXG4gICAgICBvblB1c2hUb2tlblJlY2VpdmVkQ2FsbGJhY2s6ICh0b2tlbjogc3RyaW5nKTogdm9pZCA9PiB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJGaXJlYmFzZSBwbHVnaW4gcmVjZWl2ZWQgYSBwdXNoIHRva2VuOiBcIiArIHRva2VuKTtcclxuICAgICAgICB0aGlzLmRldmljZVRva2VuID0gdG9rZW47XHJcbiAgICAgIH0sXHJcblxyXG4gICAgICBvbk1lc3NhZ2VSZWNlaXZlZENhbGxiYWNrOiAobWVzc2FnZTogTWVzc2FnZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUHVzaCBtZXNzYWdlIHJlY2VpdmVkOiBcIiArIG1lc3NhZ2UpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiTWVzc2FnZSBkYXRhOiBcIiArIG1lc3NhZ2UuZGF0YSk7XHJcbiAgICAgIH0sXHJcblxyXG4gICAgICAvLyBXaGV0aGVyIHlvdSB3YW50IHRoaXMgcGx1Z2luIHRvIGF1dG9tYXRpY2FsbHkgZGlzcGxheSB0aGUgbm90aWZpY2F0aW9ucyBvciBqdXN0IG5vdGlmeSB0aGUgY2FsbGJhY2suIEN1cnJlbnRseSB1c2VkIG9uIGlPUyBvbmx5LiBEZWZhdWx0IHRydWUuXHJcbiAgICAgIHNob3dOb3RpZmljYXRpb25zOiB0cnVlLFxyXG5cclxuICAgICAgLy8gV2hldGhlciB5b3Ugd2FudCB0aGlzIHBsdWdpbiB0byBhbHdheXMgaGFuZGxlIHRoZSBub3RpZmljYXRpb25zIHdoZW4gdGhlIGFwcCBpcyBpbiBmb3JlZ3JvdW5kLiBDdXJyZW50bHkgdXNlZCBvbiBpT1Mgb25seS4gRGVmYXVsdCBmYWxzZS5cclxuICAgICAgc2hvd05vdGlmaWNhdGlvbnNXaGVuSW5Gb3JlZ3JvdW5kOiBmYWxzZVxyXG4gICAgfSkudGhlbigoKSA9PiBjb25zb2xlLmxvZyhcIlJlZ2lzdGVyZWQgZm9yIHB1c2hcIikpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlVG9rZW5zKHVpZCkge1xyXG4gICAgY29uc3QgdXNlckRvY3VtZW50ID0gZmlyZWJhc2UuZmlyZXN0b3JlLmNvbGxlY3Rpb24oJ3VzZXJzJykuZG9jKHVpZCk7XHJcbiAgICB1c2VyRG9jdW1lbnQuZ2V0KCkudGhlbihhc3luYyAoZG9jKSA9PiB7XHJcbiAgICAgIGxldCB0b2tlbnMgPSBkb2MuZGF0YSgpLnRva2VucztcclxuICAgICAgaWYgKHRva2Vucykge1xyXG4gICAgICAgIHRva2Vucy5wdXNoKHRoaXMuZGV2aWNlVG9rZW4pO1xyXG4gICAgICAgIGxldCB1cGRhdGVkVG9rZW5zID0gQXJyYXkuZnJvbShuZXcgU2V0KHRva2VucykpO1xyXG4gICAgICAgIHVzZXJEb2N1bWVudC51cGRhdGUoe1xyXG4gICAgICAgICAgdG9rZW5zOiB1cGRhdGVkVG9rZW5zXHJcbiAgICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgdXNlckRvY3VtZW50LnVwZGF0ZSh7XHJcbiAgICAgICAgICB0b2tlbnM6IFt0aGlzLmRldmljZVRva2VuXVxyXG4gICAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IGNoYXRQcm9taXNlID0gYXdhaXQgdGhpcy51cGRhdGVDaGF0VG9rZW5zKGRvYy5kYXRhKCkuY2hhdHMpO1xyXG4gICAgfSkuY2F0Y2goKGVycikgPT4geyBjb25zb2xlLmxvZyhlcnIpIH0pXHJcbiAgfVxyXG5cclxuICBhc3luYyB1cGRhdGVDaGF0VG9rZW5zKGNoYXRzKSB7XHJcbiAgICBsZXQgY2hhdENvbGxlY3Rpb24gPSBmaXJlYmFzZS5maXJlc3RvcmUuY29sbGVjdGlvbignY2hhdHMnKTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hhdHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgY2hhdFByb21pc2UgPSBhd2FpdCBjaGF0Q29sbGVjdGlvbi5kb2MoY2hhdHNbaV0pLmdldCgpLnRoZW4oYXN5bmMgKGRvYykgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRva2VucyA9IGRvYy5kYXRhKCkudG9rZW5zO1xyXG4gICAgICAgIHRva2Vucy5wdXNoKHRoaXMuZGV2aWNlVG9rZW4pO1xyXG4gICAgICAgIGNvbnN0IG5ld1Rva2VucyA9IEFycmF5LmZyb20obmV3IFNldCh0b2tlbnMpKTtcclxuICAgICAgICBjb25zdCB1cGRhdGVQcm9taXNlID0gYXdhaXQgY2hhdENvbGxlY3Rpb24uZG9jKGNoYXRzW2ldKS51cGRhdGUoeyB0b2tlbnM6IG5ld1Rva2VucyB9KTtcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZvY3VzRW1haWwoKSB7XHJcbiAgICB0aGlzLmVtLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuICB9XHJcblxyXG4gIGZvY3VzTGFzdE5hbWUoKSB7XHJcbiAgICB0aGlzLmxuLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuICB9XHJcblxyXG4gIGZvY3VzUGFzc3dvcmQoKSB7XHJcbiAgICB0aGlzLnB3Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuICB9XHJcblxyXG4gIGZvY3VzQ29uZmlybVBhc3N3b3JkKCkge1xyXG4gICAgaWYgKCF0aGlzLmlzTG9nZ2luZ0luICYmIHRoaXMuY3B3KSB7XHJcbiAgICAgIHRoaXMuY3B3Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFsZXJ0KG1lc3NhZ2U6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIGFsZXJ0KHtcclxuICAgICAgdGl0bGU6IFwiQ29sbGVnZVBvb2xcIixcclxuICAgICAgb2tCdXR0b25UZXh0OiBcIkNsb3NlXCIsXHJcbiAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZmJMb2dpbigpIHtcclxuICAgIHRoaXMud2MubmF0aXZlRWxlbWVudC5zdHlsZS52aXNpYmlsaXR5ID0gJ2NvbGxhcHNlJztcclxuICAgIHZhciBhY3Rpdml0eUluZGljYXRvciA9IDxBY3Rpdml0eUluZGljYXRvcj50aGlzLmFpLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICBhY3Rpdml0eUluZGljYXRvci5idXN5ID0gdHJ1ZTtcclxuICAgIGZpcmViYXNlLmxvZ2luKHtcclxuICAgICAgdHlwZTogZmlyZWJhc2UuTG9naW5UeXBlLkZBQ0VCT09LLFxyXG4gICAgICAvLyBPcHRpb25hbFxyXG4gICAgICBmYWNlYm9va09wdGlvbnM6IHtcclxuICAgICAgICAvLyBkZWZhdWx0cyB0byBbJ3B1YmxpY19wcm9maWxlJywgJ2VtYWlsJ11cclxuICAgICAgICBzY29wZXM6IFsncHVibGljX3Byb2ZpbGUnLCAnZW1haWwnLCAndXNlcl9iaXJ0aGRheScsICd1c2VyX2dlbmRlciddIC8vIG5vdGU6IHRoaXMgcHJvcGVydHkgd2FzIHJlbmFtZWQgZnJvbSBcInNjb3BlXCIgaW4gOC40LjBcclxuICAgICAgfVxyXG4gICAgfSkudGhlbihcclxuICAgICAgKHJlcykgPT4ge1xyXG4gICAgICAgIGZpcmViYXNlLmZpcmVzdG9yZS5jb2xsZWN0aW9uKCd1c2VycycpLmRvYyhyZXMudWlkKS5nZXQoKS50aGVuKGRvYyA9PiB7XHJcbiAgICAgICAgICBpZiAoZG9jLmV4aXN0cyA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICB0aGlzLmxvZ2luY2hlY2tTZXJ2aWNlLmFkZFVzZXJUb0ZpcmVzdG9yZShyZXMudWlkLCBudWxsLCBudWxsLCByZXMuZW1haWwsIHJlcy5hZGRpdGlvbmFsVXNlckluZm8ucHJvZmlsZVsnZmlyc3RfbmFtZSddLCByZXMuYWRkaXRpb25hbFVzZXJJbmZvLnByb2ZpbGVbJ2xhc3RfbmFtZSddLCBudWxsLCBudWxsLCAwLCAwLCByZXMucGhvdG9VUkwsIHRoaXMuZGV2aWNlVG9rZW4pO1xyXG4gICAgICAgICAgICB0aGlzLmxvZ2luY2hlY2tTZXJ2aWNlLmFkZFVzZXJUb0JyYWludHJlZShyZXMuZGlzcGxheU5hbWUsIHJlcy5kaXNwbGF5TmFtZSwgcmVzLmVtYWlsKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZWxzZSBpZiAoZG9jLmRhdGEoKS5wYXltZW50X2lkID09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5sb2dpbmNoZWNrU2VydmljZS5hZGRVc2VyVG9CcmFpbnRyZWUocmVzLmRpc3BsYXlOYW1lLCByZXMuZGlzcGxheU5hbWUsIHJlcy5lbWFpbClcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVRva2VucyhyZXMudWlkKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMubG9naW5jaGVja1NlcnZpY2UubG9naW5Vc2VyKHJlcy51aWQpXHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWyduYXZpZ2F0aW9uJ10sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xyXG4gICAgICB9LFxyXG4gICAgICAoZXJyb3JNZXNzYWdlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3JNZXNzYWdlKTtcclxuICAgICAgICB0aGlzLndjLm5hdGl2ZUVsZW1lbnQuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcclxuICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgfVxyXG5cclxufVxyXG4iLCIvLyB0aGlzIGltcG9ydCBzaG91bGQgYmUgZmlyc3QgaW4gb3JkZXIgdG8gbG9hZCBzb21lIHJlcXVpcmVkIHNldHRpbmdzIChsaWtlIGdsb2JhbHMgYW5kIHJlZmxlY3QtbWV0YWRhdGEpXHJcbmltcG9ydCB7IHBsYXRmb3JtTmF0aXZlU2NyaXB0RHluYW1pYyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3BsYXRmb3JtJztcclxuXHJcblxyXG5pbXBvcnQgeyBBcHBNb2R1bGUgfSBmcm9tICcuL2FwcC9hcHAubW9kdWxlJztcclxuaW1wb3J0IHtyZWdpc3RlckVsZW1lbnR9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9lbGVtZW50LXJlZ2lzdHJ5XCI7XHJcblxyXG5yZWdpc3RlckVsZW1lbnQoXCJSaXBwbGVcIiwgKCkgPT4gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1yaXBwbGVcIikuUmlwcGxlKTtcclxuLy8gaW1wb3J0IEFtcGxpZnkgZnJvbSBcIkBhd3MtYW1wbGlmeS9jb3JlXCI7XHJcbi8vIHJlcXVpcmUoJ25hdGl2ZXNjcmlwdC1ub2RlaWZ5JylcclxuLy8gaW1wb3J0IGF3c2NvbmZpZyBmcm9tICcuL2F3cy1leHBvcnRzJztcclxuXHJcbi8vIEFtcGxpZnkuY29uZmlndXJlKGF3c2NvbmZpZyk7XHJcblxyXG4vLyBBIHRyYWRpdGlvbmFsIE5hdGl2ZVNjcmlwdCBhcHBsaWNhdGlvbiBzdGFydHMgYnkgaW5pdGlhbGl6aW5nIGdsb2JhbCBvYmplY3RzLCBzZXR0aW5nIHVwIGdsb2JhbCBDU1MgcnVsZXMsIGNyZWF0aW5nLCBhbmQgbmF2aWdhdGluZyB0byB0aGUgbWFpbiBwYWdlLiBcclxuLy8gQW5ndWxhciBhcHBsaWNhdGlvbnMgbmVlZCB0byB0YWtlIGNhcmUgb2YgdGhlaXIgb3duIGluaXRpYWxpemF0aW9uOiBtb2R1bGVzLCBjb21wb25lbnRzLCBkaXJlY3RpdmVzLCByb3V0ZXMsIERJIHByb3ZpZGVycy4gXHJcbi8vIEEgTmF0aXZlU2NyaXB0IEFuZ3VsYXIgYXBwIG5lZWRzIHRvIG1ha2UgYm90aCBwYXJhZGlnbXMgd29yayB0b2dldGhlciwgc28gd2UgcHJvdmlkZSBhIHdyYXBwZXIgcGxhdGZvcm0gb2JqZWN0LCBwbGF0Zm9ybU5hdGl2ZVNjcmlwdER5bmFtaWMsIFxyXG4vLyB0aGF0IHNldHMgdXAgYSBOYXRpdmVTY3JpcHQgYXBwbGljYXRpb24gYW5kIGNhbiBib290c3RyYXAgdGhlIEFuZ3VsYXIgZnJhbWV3b3JrLlxyXG5wbGF0Zm9ybU5hdGl2ZVNjcmlwdER5bmFtaWMoKS5ib290c3RyYXBNb2R1bGUoQXBwTW9kdWxlKTtcclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9