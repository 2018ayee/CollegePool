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

module.exports = "<Page.actionBar>\r\n    <ActionBar title=\"{{ chatName }}\" android:horizontalAlignment=\"center\" ios:horizontalAlignment=\"center\">\r\n    \t<NavigationButton text=\"Go Back\" android.systemIcon=\"ic_menu_back\" (tap)=\"onNavBtnTap()\"></NavigationButton>\r\n\t    <ActionItem (tap)=\"onLeave()\"\r\n\t      ios.systemIcon=\"9\" ios.position=\"right\"\r\n\t      text=\"Leave chat\" android.position=\"popup\"></ActionItem>\r\n    </ActionBar>\r\n</Page.actionBar>\r\n\r\n<GridLayout rows=\"*, auto\" #chatContainer>\r\n    <ListView margin-bottom=\"50\" padding=\"5\" #messageList [items]=\"messages\" separatorColor=\"transparent\" (setupItemView)=\"setupItemView($event)\" row=\"0\" (loadMoreItems)=\"loadMoreData()\">\r\n        <ng-template let-item=\"item\" let-i=\"index\" let-mine=\"mine\" let-theirs=\"theirs\" let-mineContinuation=\"mineContinuation\" let-theirsContinuation=\"theirsContinuation\" let-mineContinuationGrid=\"mineContinuationGrid\" let-theirsContinuationGrid=\"theirsContinuationGrid\" let-grid=\"grid\" let-mineTime=\"mineTime\" let-theirsTime=\"theirsTime\" let-time=\"time\" let-theirsImg=\"theirsImg\" let-img=\"img\">\r\n            <StackLayout width=\"80%\" [class.mineContinuationGrid]=\"mineContinuationGrid\" [class.theirsContinuationGrid]=\"theirsContinuationGrid\" [class.grid]=\"grid\">\r\n                <StackLayout orientation=\"horizontal\" [horizontalAlignment]=\"align(item)\">\r\n                    <Image [visibility]=\"item.visibility\" class=\"author-img\" stretch=\"aspectFill\" height=\"40\" width=\"40\" verticalAlignment=\"bottom\" [src]=\"item.chatMessage.pfpSource\" col=\"1\"></Image>\r\n                    <Label [visibility]=\"textVisibility(item)\" [text]='item.chatMessage.message' [class.mine]=\"mine\" [class.theirs]=\"theirs\" [class.mineContinuation]=\"mineContinuation\" [class.theirsContinuation]=\"theirsContinuation\" textWrap=\"true\" verticalAlignment=\"top\"></Label>\r\n                    <Image [visibility]=\"imgVisibility(item)\" [class.theirsImg]=\"theirsImg\" [class.img]=\"img\" stretch=\"none\" minWidth=\"360\" minHeight=\"200\" decodeWidth=\"360\" decodeHeight=\"200\" maxHeight=\"400\" verticalAlignment=\"bottom\" [src]=\"item.chatMessage.imgSource\" col=\"1\" (tap)=\"toViewImage(item.chatMessage.imgSource)\"></Image>\r\n                </StackLayout>\r\n                <Label [text]='item.formattedTime' [horizontalAlignment]=\"align(item)\" [class.mineTime]=\"mineTime\" [class.theirsTime]=\"theirsTime\" [class.time]=\"time\"></Label>\r\n            </StackLayout>\r\n        </ng-template>\r\n    </ListView>\r\n\r\n    <StackLayout #chatbox row=\"1\" class=\"chat-box-layout\">\r\n\t        <GridLayout columns=\"auto,*,auto\" style=\"padding: 10\">\r\n\t        \t<Image class=\"img-button\" row=\"0\" col=\"0\" src=\"~/img/img_icon_2.png\" (tap)=openImages()></Image>\r\n\t            <TextView #textfield height=\"auto\" maxHeight=\"100\" hint=\"Start a message\" class=\"chat-text-field\" row=\"0\" col=\"1\" autocorrect=\"true\" [(ngModel)]=\"message\" (tap)=\"onTextTap()\"></TextView>\r\n\t            <Image #btn class=\"chat-button\" row=\"0\" col=\"2\" src=\"~/img/send_message_icon_2.png\" (tap)=sendMessage()></Image>\r\n\t        </GridLayout>\r\n\r\n    </StackLayout>\r\n</GridLayout>\r\n\r\n<ActivityIndicator #activityIndicator busy=\"true\" width=\"40\" height=\"40\" class=\"activity-indicator\">\r\n</ActivityIndicator>"

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
    ChatComponent.prototype.loadMoreData = function () {
        // console.log('Load more')
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

module.exports = "/* Add mobile styles for the component here.  */\n.img {\n\tbackground-color: black;\n}"

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

module.exports = "<ScrollView>\r\n\t<FlexboxLayout class=\"page\" #welcomeContainer>\r\n\t\t<GridLayout rows=\"630, auto\">\r\n\t\t<!-- <GridLayout rows=\"19*, *\"> -->\r\n\t\t\t<StackLayout class=\"form\" row=\"0\" height=\"100%\">\r\n\t\t\t\t<Image class=\"logo\" src=\"~/img/logo.png\"></Image>\r\n\t\t\t\t<!-- <Label class=\"header\" text=\"CollegePool\"></Label> -->\r\n\r\n\t\t\t\t<StackLayout *ngIf=\"!isLoggingIn\" class=\"input-field\">\r\n\t\t\t\t\t<TextField class=\"input\" hint=\"First name\" [(ngModel)]=\"firstName\" returnKeyType=\"next\" #fn>\r\n\t\t\t\t\t</TextField>\r\n\t\t\t\t\t<StackLayout class=\"hr-light\"></StackLayout>\r\n\t\t\t\t</StackLayout>\r\n\r\n\t\t\t\t<StackLayout *ngIf=\"!isLoggingIn\" class=\"input-field\">\r\n\t\t\t\t\t<TextField class=\"input\" hint=\"Last name\" [(ngModel)]=\"lastName\" returnKeyType=\"next\" #ln>\r\n\t\t\t\t\t</TextField>\r\n\t\t\t\t\t<StackLayout class=\"hr-light\"></StackLayout>\r\n\t\t\t\t</StackLayout>\r\n\r\n\t\t\t\t<StackLayout class=\"input-field\">\r\n\t\t\t\t\t<TextField class=\"input\" hint=\"Email\" keyboardType=\"email\" autocorrect=\"false\"\r\n\t\t\t\t\t\tautocapitalizationType=\"none\" [(ngModel)]=\"email\" returnKeyType=\"next\"\r\n\t\t\t\t\t\t(returnPress)=\"focusPassword()\" #em></TextField>\r\n\t\t\t\t\t<StackLayout class=\"hr-light\"></StackLayout>\r\n\t\t\t\t</StackLayout>\r\n\r\n\t\t\t\t<StackLayout class=\"input-field\">\r\n\t\t\t\t\t<TextField class=\"input\" hint=\"Password\" secure=\"true\" [(ngModel)]=\"password\"\r\n\t\t\t\t\t\t[returnKeyType]=\"isLoggingIn ? 'done' : 'next'\" (returnPress)=\"focusConfirmPassword()\" #pw>\r\n\t\t\t\t\t</TextField>\r\n\t\t\t\t\t<StackLayout class=\"hr-light\"></StackLayout>\r\n\t\t\t\t</StackLayout>\r\n\r\n\t\t\t\t<StackLayout *ngIf=\"!isLoggingIn\" class=\"input-field\">\r\n\t\t\t\t\t<TextField class=\"input\" hint=\"Confirm password\" secure=\"true\" [(ngModel)]=\"confirmPassword\"\r\n\t\t\t\t\t\treturnKeyType=\"done\" #cpw></TextField>\r\n\t\t\t\t\t<StackLayout class=\"hr-light\"></StackLayout>\r\n\t\t\t\t</StackLayout>\r\n\r\n\t\t\t\t<Button [text]=\"isLoggingIn ? 'Log In' : 'Sign Up'\" (tap)=\"submit()\"\r\n\t\t\t\t\tclass=\"btn btn-primary m-t-20\"></Button>\r\n\t\t\t\t<StackLayout>\r\n\t\t\t\t\t<FacebookLoginButton (tap)=\"fbLogin()\" class=\"btn-fb\"></FacebookLoginButton>\r\n\t\t\t\t</StackLayout>\r\n\t\t\t\t<Label *ngIf=\"isLoggingIn\" text=\"Forgot your password?\" class=\"login-label\"\r\n\t\t\t\t\t(tap)=\"forgotPassword()\"></Label>\r\n\t\t\t</StackLayout>\r\n\t\t\t<StackLayout row=\"1\">\r\n\t\t\t\t<Label class=\"sign-up-label\" (tap)=\"toggleForm()\">\r\n\t\t\t\t\t<FormattedString>\r\n\t\t\t\t\t\t<Span [text]=\"isLoggingIn ? 'Don’t have an account? ' : 'Back to Login'\"></Span>\r\n\t\t\t\t\t\t<Span [text]=\"isLoggingIn ? 'Sign up' : ''\" class=\"bold\"></Span>\r\n\t\t\t\t\t</FormattedString>\r\n\t\t\t\t</Label>\r\n\t\t\t</StackLayout>\r\n\t\t</GridLayout>\r\n\t</FlexboxLayout>\r\n</ScrollView>\r\n<ActivityIndicator #activityIndicator busy=\"true\" width=\"40\" height=\"40\" class=\"activity-indicator\">\r\n</ActivityIndicator>"

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vJF9sYXp5X3JvdXRlX3Jlc291cmNlIGxhenkgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9hcHAuY3NzIiwid2VicGFjazovLy8uL2FwcC9hZGQtY2FyZC1wYXltZW50L2FkZC1jYXJkLXBheW1lbnQuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvYWRkLWNhcmQtcGF5bWVudC9hZGQtY2FyZC1wYXltZW50LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9hZGQtY2FyZC1wYXltZW50L2FkZC1jYXJkLXBheW1lbnQuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9hZGQtbW9kYWwvYWRkLW1vZGFsLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2FkZC1tb2RhbC9hZGQtbW9kYWwuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2FkZC1tb2RhbC9hZGQtbW9kYWwuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9hZGQtcGF5bWVudC9hZGQtcGF5bWVudC5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC9hZGQtcGF5bWVudC9hZGQtcGF5bWVudC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvYWRkLXBheW1lbnQvYWRkLXBheW1lbnQuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9hcHAtcm91dGluZy5tb2R1bGUudG5zLnRzIiwid2VicGFjazovLy8uL2FwcC9hcHAuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2FwcC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2FwcC5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2F1dG8tZ2VuZXJhdGVkL2F1dG8tZ2VuZXJhdGVkLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2F1dG8tZ2VuZXJhdGVkL2F1dG8tZ2VuZXJhdGVkLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9hdXRvLWdlbmVyYXRlZC9hdXRvLWdlbmVyYXRlZC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NoYXQtbGlzdC9jaGF0LWxpc3QuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvY2hhdC1saXN0L2NoYXQtbGlzdC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvY2hhdC1saXN0L2NoYXQtbGlzdC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NoYXQvY2hhdC5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC9jaGF0L2NoYXQuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NoYXQvY2hhdC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbmZpcm1hdGlvbi9jb25maXJtYXRpb24uY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29uZmlybWF0aW9uL2NvbmZpcm1hdGlvbi5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvY29uZmlybWF0aW9uL2NvbmZpcm1hdGlvbi5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Nvbm5lY3QvY29ubmVjdC5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC9jb25uZWN0L2Nvbm5lY3QuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Nvbm5lY3QvY29ubmVjdC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2RhdGF0cmFuc2Zlci5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL2FwcC9kaWFsb2cvZGlhbG9nLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2RpYWxvZy9kaWFsb2cuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2RpYWxvZy9kaWFsb2cuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9keW5hbWljLWFkZC5zZXJ2aWNlLnRucy50cyIsIndlYnBhY2s6Ly8vLi9hcHAvZHluYW1pYy1hZGQuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvZmxvYXQtYnRuL2Zsb2F0LWJ0bi5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC9mbG9hdC1idG4vZmxvYXQtYnRuLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9mbG9hdC1idG4vZmxvYXQtYnRuLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvZm9yZ2V0LWZvcm0vZm9yZ2V0LWZvcm0uY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvZm9yZ2V0LWZvcm0vZm9yZ2V0LWZvcm0uY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2ZvcmdldC1mb3JtL2ZvcmdldC1mb3JtLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvZ29vZ2xlLW1hcHMuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvaGlzdG9yeS9oaXN0b3J5LmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2hpc3RvcnkvaGlzdG9yeS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvaGlzdG9yeS9oaXN0b3J5LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvaG9tZS5kaXJlY3RpdmUudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC9ob21lL2hvbWUuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2hvbWUvaG9tZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2xvY2F0aW9uL2xvY2F0aW9uLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2xvY2F0aW9uL2xvY2F0aW9uLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9sb2NhdGlvbi9sb2NhdGlvbi5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2xvZ2luLmRpcmVjdGl2ZS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvbG9naW5jaGVjay5zZXJ2aWNlLnRucy50cyIsIndlYnBhY2s6Ly8vLi9hcHAvbG9naW5jaGVjay5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL2FwcC9sb2dpbnJvdXRlL2xvZ2lucm91dGUuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvbG9naW5yb3V0ZS9sb2dpbnJvdXRlLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9sb2dpbnJvdXRlL2xvZ2lucm91dGUuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9tZXNzYWdlLW1vZGFsL21lc3NhZ2UtbW9kYWwuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvbWVzc2FnZS1tb2RhbC9tZXNzYWdlLW1vZGFsLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9tZXNzYWdlLW1vZGFsL21lc3NhZ2UtbW9kYWwuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LnRucy5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQudG5zLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3BheW1lbnQtaW5mby9wYXltZW50LWluZm8uY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvcGF5bWVudC1pbmZvL3BheW1lbnQtaW5mby5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvcGF5bWVudC1pbmZvL3BheW1lbnQtaW5mby5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3BheW1lbnQtbWV0aG9kL3BheW1lbnQtbWV0aG9kLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL3BheW1lbnQtbWV0aG9kL3BheW1lbnQtbWV0aG9kLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9wYXltZW50LW1ldGhvZC9wYXltZW50LW1ldGhvZC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3BheW1lbnQuc2VydmljZS50bnMudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3BheW1lbnQuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvcGF5bWVudHMvcGF5bWVudHMuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvcGF5bWVudHMvcGF5bWVudHMuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL3BheW1lbnRzL3BheW1lbnRzLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvcGxhY2VzLWF1dG9jb21wbGV0ZS5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL2FwcC9wb3N0aW5nLWluZm8vcG9zdGluZy1pbmZvLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL3Bvc3RpbmctaW5mby9wb3N0aW5nLWluZm8uY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL3Bvc3RpbmctaW5mby9wb3N0aW5nLWluZm8uY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9wb3N0aW5nLnNlcnZpY2UudG5zLnRzIiwid2VicGFjazovLy8uL2FwcC9wb3N0aW5nLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3Bvc3RpbmcvcG9zdGluZy5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC9wb3N0aW5nL3Bvc3RpbmcuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL3Bvc3RpbmcvcG9zdGluZy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3JlYXV0aC9yZWF1dGguY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvcmVhdXRoL3JlYXV0aC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvcmVhdXRoL3JlYXV0aC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NldHRpbmdzZm9ybS9zZXR0aW5nc2Zvcm0uY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvc2V0dGluZ3Nmb3JtL3NldHRpbmdzZm9ybS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvc2V0dGluZ3Nmb3JtL3NldHRpbmdzZm9ybS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3VwZGF0ZS91cGRhdGUuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvdXBkYXRlL3VwZGF0ZS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvdXBkYXRlL3VwZGF0ZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3VzZXIuc2VydmljZS50bnMudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3VzZXIuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvdmlldy1pbWFnZS92aWV3LWltYWdlLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL3ZpZXctaW1hZ2Uvdmlldy1pbWFnZS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvdmlldy1pbWFnZS92aWV3LWltYWdlLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvd2VsY29tZS93ZWxjb21lLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL3dlbGNvbWUvd2VsY29tZS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvd2VsY29tZS93ZWxjb21lLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsNENBQTRDLFdBQVc7QUFDdkQ7QUFDQTtBQUNBLHlFOzs7Ozs7O0FDWkEsMkJBQTJCLG1CQUFPLENBQUMsZ0RBQWdEO0FBQ25GO0FBQ0EsVUFBVSxtQkFBTyxDQUFDLG9HQUErRjs7QUFFakg7QUFDQSxjQUFjLFFBQVMsNGZBQTRmLHlCQUF5QixLQUFLOztBQUVqakI7QUFDQSxRQUFRLEtBQVUsRUFBRSxFQUtmOzs7Ozs7OztBQ2JMLDRFQUE0RSxlQUFlLGtCQUFrQixjQUFjLGVBQWUsR0FBRyw2QkFBNkIsdUJBQXVCLFlBQVksR0FBRyx1REFBdUQsbUJBQW1CLG1CQUFtQixvQkFBb0IsZ0NBQWdDLHlCQUF5QixnQkFBZ0IseUJBQXlCLCtDQUErQyxHQUFHLG1CQUFtQixtQkFBbUIsbUJBQW1CLG9CQUFvQixnQ0FBZ0MseUJBQXlCLGdCQUFnQix5QkFBeUIsK0NBQStDLG9CQUFvQixHQUFHLGdCQUFnQixtQkFBbUIsbUJBQW1CLGdDQUFnQyx5QkFBeUIsZUFBZSwrQ0FBK0MsdUJBQXVCLGlCQUFpQixHQUFHLGtCQUFrQixtQkFBbUIsbUJBQW1CLG9CQUFvQixnQ0FBZ0MseUJBQXlCLGVBQWUsK0NBQStDLHVCQUF1QixpQkFB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QyxPQUFPLEVBQUMsMkVBQXNCLEVBQXdDO0FBRXRFLDJFQUFnQyxFQUF1QztBQUN2RSxTQUEyQztBQUNUO0FBQ2xDLFFBQXlDO0FBRXpDLDBHQUFnQztBQUVoQyxZQUF5SjtBQUN6SixZQUE4SDtBQUM5SCxxQiIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiB3ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQocmVxKSB7XG5cdC8vIEhlcmUgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigpIGlzIHVzZWQgaW5zdGVhZCBvZiBuZXcgUHJvbWlzZSgpIHRvIHByZXZlbnRcblx0Ly8gdW5jYXVnaHQgZXhjZXB0aW9uIHBvcHBpbmcgdXAgaW4gZGV2dG9vbHNcblx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9KTtcbn1cbndlYnBhY2tFbXB0eUFzeW5jQ29udGV4dC5rZXlzID0gZnVuY3Rpb24oKSB7IHJldHVybiBbXTsgfTtcbndlYnBhY2tFbXB0eUFzeW5jQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0O1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQ7XG53ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQuaWQgPSBcIi4uLyQkX2xhenlfcm91dGVfcmVzb3VyY2UgbGF6eSByZWN1cnNpdmVcIjsiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBJbXBvcnRzXG5leHBvcnRzLmkocmVxdWlyZShcIi0hLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi0xIW5hdGl2ZXNjcmlwdC10aGVtZS1jb3JlL2Nzcy9jb3JlLmxpZ2h0LmNzc1wiKSwgXCJcIik7XG5cbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLypcXHJcXG5JbiBOYXRpdmVTY3JpcHQsIHRoZSBhcHAuY3NzIGZpbGUgaXMgd2hlcmUgeW91IHBsYWNlIENTUyBydWxlcyB0aGF0XFxyXFxueW91IHdvdWxkIGxpa2UgdG8gYXBwbHkgdG8geW91ciBlbnRpcmUgYXBwbGljYXRpb24uIENoZWNrIG91dFxcclxcbmh0dHA6Ly9kb2NzLm5hdGl2ZXNjcmlwdC5vcmcvdWkvc3R5bGluZyBmb3IgYSBmdWxsIGxpc3Qgb2YgdGhlIENTU1xcclxcbnNlbGVjdG9ycyBhbmQgcHJvcGVydGllcyB5b3UgY2FuIHVzZSB0byBzdHlsZSBVSSBjb21wb25lbnRzLlxcclxcblxcclxcbi8qXFxyXFxuSW4gbWFueSBjYXNlcyB5b3UgbWF5IHdhbnQgdG8gdXNlIHRoZSBOYXRpdmVTY3JpcHQgY29yZSB0aGVtZSBpbnN0ZWFkXFxyXFxub2Ygd3JpdGluZyB5b3VyIG93biBDU1MgcnVsZXMuIEZvciBhIGZ1bGwgbGlzdCBvZiBjbGFzcyBuYW1lcyBpbiB0aGUgdGhlbWVcXHJcXG5yZWZlciB0byBodHRwOi8vZG9jcy5uYXRpdmVzY3JpcHQub3JnL3VpL3RoZW1lLlxcclxcbiovXFxyXFxuXFxyXFxuTGFiZWwge1xcclxcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XCIsIFwiXCJdKTtcblxuO1xuICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6ICdzdHlsZScsIHBhdGg6ICcuL2FwcC5jc3MnIH0pO1xuICAgICAgICB9KVxuICAgIH1cbiIsIm1vZHVsZS5leHBvcnRzID0gXCIvKiBBZGQgbW9iaWxlIHN0eWxlcyBmb3IgdGhlIGNvbXBvbmVudCBoZXJlLiAgKi9cXG4uY2xvc2Uge1xcblxcdG1hcmdpbjogMTA7XFxuXFx0Zm9udC1zaXplOiAyODtcXG5cXHR3aWR0aDogNDg7XFxuXFx0aGVpZ2h0OiA0ODtcXG59XFxuXFxuLmNsb3NlLWJ1dHRvbi1jb250YWluZXIge1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRsZWZ0OiAwO1xcbn1cXG5cXG4vKiBzdHlsZXMgZnJvbSBwYXltZW50cy5jb21wb25lbnQuY3NzICovXFxuXFxuI2Zvcm0ge1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIHdpZHRoOiA2MDBweDtcXG4gICAgaGVpZ2h0OiA0MDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IDMwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgYm94LXNoYWRvdzogMCAxcHggNHB4IDAgcmdiYSgwLDAsMCwwLjM3KTtcXG59XFxuXFxuI3BheW1lbnQtZm9ybSB7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgd2lkdGg6IDYwMHB4O1xcbiAgICBoZWlnaHQ6IDQwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogMzBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBib3gtc2hhZG93OiAwIDFweCA0cHggMCByZ2JhKDAsMCwwLDAuMzcpO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4jY2FyZC1mb3JtIHtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICB3aWR0aDogNDAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ODA5Njg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAyNSU7XFxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDRweCAwIHJnYmEoMCwwLDAsMC4zNyk7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIHotaW5kZXg6IDE7XFxufVxcblxcbiNwYXlwYWwtZm9ybSB7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgd2lkdGg6IDQwMHB4O1xcbiAgICBoZWlnaHQ6IDIwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogMjUlO1xcbiAgICBib3gtc2hhZG93OiAwIDFweCA0cHggMCByZ2JhKDAsMCwwLDAuMzcpO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG5cXG4jdmVubW8tZm9ybSB7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgd2lkdGg6IDQwMHB4O1xcbiAgICBoZWlnaHQ6IDIwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogMjUlO1xcbiAgICBib3gtc2hhZG93OiAwIDFweCA0cHggMCByZ2JhKDAsMCwwLDAuMzcpO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG5cXG4jZXJyb3ItZm9ybSB7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgd2lkdGg6IDQwMHB4O1xcbiAgICBoZWlnaHQ6IDIwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogMjUlO1xcbiAgICBib3gtc2hhZG93OiAwIDFweCA0cHggMCByZ2JhKDAsMCwwLDAuMzcpO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG5cXG4jZWRpdC1mb3JtIHtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICB3aWR0aDogNDAwcHg7XFxuICAgIGhlaWdodDogMjAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAyNSU7XFxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDRweCAwIHJnYmEoMCwwLDAsMC4zNyk7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIHotaW5kZXg6IDE7XFxufVxcblxcbi5wYXltZW50LW1ldGhvZHMge1xcblxcdG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcXG59XFxuXFxuI21vZGFsLXBheW1lbnQtbWV0aG9kcyB7XFxuXFx0bWFyZ2luLWxlZnQ6IDI0cHg7XFxufVxcblxcbiNwYXlwYWwtaGVhZGVyLWNvbnRhaW5lciB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzU4MDk2ODtcXG59XFxuXFxuI2Vycm9yLWhlYWRlci1jb250YWluZXIge1xcblxcdGRpc3BsYXk6IG5vbmU7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzg5MDAwMDtcXG59XFxuXFxuI2VkaXQtaGVhZGVyLWNvbnRhaW5lciB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzU4MDk2ODtcXG59XFxuXFxuLmNvbG9yZWQtaGVhZGVyIHtcXG5cXHRjb2xvcjogd2hpdGU7XFxuXFx0Zm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuI21ldGhvZC1pbmZvcm1hdGlvbi10ZXh0IHtcXG5cXHRtYXJnaW4tbGVmdDogNDBweDtcXG5cXHRtYXJnaW4tdG9wOiAzMnB4O1xcblxcdGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuLnBheW1lbnQtZm9vdGVyLWJ1dHRvbntcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgICBjb2xvcjogI2FjMDBlNjtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1sZWZ0OiAzNHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxufVxcblxcbiNwYXlwYWwtYnV0dG9uIHtcXG5cXHR3aWR0aDogMzUwcHg7XFxuXFx0bWFyZ2luOiBhdXRvO1xcblxcdG1hcmdpbi10b3A6IDMycHg7XFxufVxcblxcbiNhZGQtY2FyZC1idXR0b24ge1xcblxcdGZsb2F0OiByaWdodDtcXG5cXHRtYXJnaW4tcmlnaHQ6IDM0cHg7XFxuXFx0ZGlzcGxheTogbm9uZTtcXG59XFxuXFxuI3JlbW92ZS1wYXltZW50LWJ1dHRvbiB7XFxuXFx0ZmxvYXQ6IHJpZ2h0O1xcblxcdG1hcmdpbi1yaWdodDogMzRweDtcXG59XFxuXFxuLnBsdXMtc2lnbiB7XFxuXFx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG5cXHRmb250LXNpemU6IDMwcHg7XFxuXFx0bWFyZ2luLXJpZ2h0OiA3cHg7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucGF5bWVudC1mb290ZXItdGV4dCB7XFxuXFx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG5cXHRsaW5lLWhlaWdodDogNDJweDtcXG5cXHRmb250LXdlaWdodDogNDAwO1xcblxcdGZvbnQtc2l6ZTogMTNweDtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wYXltZW50LWZvb3Rlci10ZXh0OmhvdmVyIHtcXG5cXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuLnBheW1lbnRzLWJvdHRvbS1hZGQtY29udGFpbmVyIHtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0Ym90dG9tOiAwO1xcbn1cXG5cXG4vKiBPdGhlciBtb2RhbCBzdHlsaW5nIGluIHN0eWxlcy5jc3MgKi9cXG4uY2xvc2UtbW9kYWwge1xcblxcdGZvbnQtc2l6ZTogMjRweDtcXG5cXHRtYXJnaW4tcmlnaHQ6IDIwcHg7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tXFxuU2hhcmVkIFZhcmlhYmxlc1xcbi0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tXFxuR2VuZXJhbFxcbi0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXG5odG1sLFxcbmJvZHkge1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgY29sb3I6ICMyODJjMzc7XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5mb3JtLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VFRTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBib3JkZXI6IDFlbSBzb2xpZCAjZmZmO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDQ3NnB4KSB7XFxuICAuZm9ybS1jb250YWluZXIge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICB9XFxufVxcblxcbi5jYXJkaW5mby13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuXFxuLmJnLWlsbHVzdHJhdGlvbiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgei1pbmRleDogMDtcXG59XFxuLmJnLWlsbHVzdHJhdGlvbiBzdmcge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5jYXJkLXNoYXBlLCAjbXktc2FtcGxlLWZvcm0udmlzYSwgI215LXNhbXBsZS1mb3JtLm1hc3Rlci1jYXJkLCAjbXktc2FtcGxlLWZvcm0ubWFlc3RybywgI215LXNhbXBsZS1mb3JtLmFtZXJpY2FuLWV4cHJlc3MsICNteS1zYW1wbGUtZm9ybS5kaXNjb3ZlciwgI215LXNhbXBsZS1mb3JtLnVuaW9ucGF5LCAjbXktc2FtcGxlLWZvcm0uamNiLCAjbXktc2FtcGxlLWZvcm0uZGluZXJzLWNsdWIge1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgcGFkZGluZzogMmVtIDJlbSAxZW07XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA0NzZweCkge1xcbiAgLmNhcmQtc2hhcGUsICNteS1zYW1wbGUtZm9ybS52aXNhLCAjbXktc2FtcGxlLWZvcm0ubWFzdGVyLWNhcmQsICNteS1zYW1wbGUtZm9ybS5tYWVzdHJvLCAjbXktc2FtcGxlLWZvcm0uYW1lcmljYW4tZXhwcmVzcywgI215LXNhbXBsZS1mb3JtLmRpc2NvdmVyLCAjbXktc2FtcGxlLWZvcm0udW5pb25wYXksICNteS1zYW1wbGUtZm9ybS5qY2IsICNteS1zYW1wbGUtZm9ybS5kaW5lcnMtY2x1YiB7XFxuICAgIHBhZGRpbmc6IDJlbSAxLjVlbSAxZW07XFxuICB9XFxufVxcblxcbiNwYXltZW50LWNhcmQtZm9ybSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xcbiAgLypib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEyKTsqL1xcbiAgcGFkZGluZzogMWVtIDNlbSAzZW07XFxuICBtYXJnaW4tYm90dG9tOiAyZW07XFxuLyogIHRyYW5zaXRpb246IGFsbCA2MDBtcyBjdWJpYy1iZXppZXIoMC4yLCAxLjMsIDAuNywgMSk7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogY2FyZEludHJvIDUwMG1zIGN1YmljLWJlemllcigwLjIsIDEuMywgMC43LCAxKTtcXG4gICAgICAgICAgYW5pbWF0aW9uOiBjYXJkSW50cm8gNTAwbXMgY3ViaWMtYmV6aWVyKDAuMiwgMS4zLCAwLjcsIDEpOyovXFxuICAvKnotaW5kZXg6IDE7Ki9cXG59XFxuI215LXNhbXBsZS1mb3JtOmhvdmVyIHtcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMDYpO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNDc2cHgpIHtcXG4gICNteS1zYW1wbGUtZm9ybSB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBhZGRpbmc6IDdlbSAyZW0gMmVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG59XFxuI215LXNhbXBsZS1mb3JtLnZpc2Ege1xcbiAgY29sb3I6ICNmZmY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEQ0QUEyO1xcbn1cXG4jbXktc2FtcGxlLWZvcm0ubWFzdGVyLWNhcmQge1xcbiAgY29sb3I6ICNmZmY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzYzNjM2O1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDExNWRlZywgI2Q4MjMzMiwgI2Q4MjMzMiA1MCUsICNmMWFkM2QgNTAlLCAjZjFhZDNkKTtcXG59XFxuI215LXNhbXBsZS1mb3JtLm1hZXN0cm8ge1xcbiAgY29sb3I6ICNmZmY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzYzNjM2O1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDExNWRlZywgIzAwOWRkZCwgIzAwOWRkZCA1MCUsICNlZDFjMmUgNTAlLCAjZWQxYzJlKTtcXG59XFxuI215LXNhbXBsZS1mb3JtLmFtZXJpY2FuLWV4cHJlc3Mge1xcbiAgY29sb3I6ICNmZmY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3Q0MzO1xcbn1cXG4jbXktc2FtcGxlLWZvcm0uZGlzY292ZXIge1xcbiAgY29sb3I6ICNmZmY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY2MDAwO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCNkMTQzMTAsICNmNzk2MWUpO1xcbn1cXG4jbXktc2FtcGxlLWZvcm0udW5pb25wYXksICNteS1zYW1wbGUtZm9ybS5qY2IsICNteS1zYW1wbGUtZm9ybS5kaW5lcnMtY2x1YiB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzNjM2MzY7XFxufVxcblxcbi5jYXJkaW5mby1sYWJlbCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGZvbnQtc2l6ZTogMTFweDtcXG4gIG1hcmdpbi1ib3R0b206IDAuNWVtO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG59XFxuXFxuLmNhcmRpbmZvLWV4cC1kYXRlIHtcXG4gIG1hcmdpbi1yaWdodDogMWVtO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5jYXJkaW5mby1jdnYge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5jYXJkaW5mby1jYXJkLW51bWJlciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbiNjYXJkSW1hZ2Uge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAyZW07XFxuICByaWdodDogMWVtO1xcbiAgd2lkdGg6IDQ0cHg7XFxuICBoZWlnaHQ6IDI4cHg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9zMy11cy13ZXN0LTIuYW1hem9uYXdzLmNvbS9zLmNkcG4uaW8vMzQ2OTk0L2NhcmRfc3ByaXRlLnBuZyk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDg2cHggNDU4cHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTAwcHggMDtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBtYXJnaW4tYm90dG9tOiAxZW07XFxufVxcbiNjYXJkSW1hZ2UudmlzYSB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIC0zOThweDtcXG59XFxuI2NhcmRJbWFnZS5tYXN0ZXItY2FyZCB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIC0yODFweDtcXG59XFxuI2NhcmRJbWFnZS5hbWVyaWNhbi1leHByZXNzIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgLTM3MHB4O1xcbn1cXG4jY2FyZEltYWdlLmRpc2NvdmVyIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgLTE2M3B4O1xcbn1cXG4jY2FyZEltYWdlLm1hZXN0cm8ge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAtMjUxcHg7XFxufVxcbiNjYXJkSW1hZ2UuamNiIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgLTIyMXB4O1xcbn1cXG4jY2FyZEltYWdlLmRpbmVycy1jbHViIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgLTEzM3B4O1xcbn1cXG5cXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tXFxuSW5wdXRzIFxcbi0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXG4uaW5wdXQtd3JhcHBlciB7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODYpO1xcbiAgaGVpZ2h0OiAyLjc1ZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4wNik7XFxuICBwYWRkaW5nOiA1cHggMTBweDtcXG4gIG1hcmdpbi1ib3R0b206IDFlbTtcXG59XFxuXFxuLmNhcmRpbmZvLWNhcmQtbnVtYmVyLFxcbi5jYXJkaW5mby1leHAtZGF0ZSxcXG4uY2FyZGluZm8tY3Z2IHtcXG4gIHRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuM3M7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcztcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzLCAtd2Via2l0LXRyYW5zZm9ybSAwLjNzO1xcbn1cXG5cXG4uYnJhaW50cmVlLWhvc3RlZC1maWVsZHMtZm9jdXNlZCB7XFxuICBib3JkZXItY29sb3I6ICM1ZGI2ZTg7XFxufVxcblxcbi5icmFpbnRyZWUtaG9zdGVkLWZpZWxkcy1pbnZhbGlkIHtcXG4gIGJvcmRlci1jb2xvcjogI0U1M0E0MDtcXG4vKiAgLXdlYmtpdC1hbmltYXRpb246IHNoYWtlIDUwMG1zIGN1YmljLWJlemllcigwLjIsIDEuMywgMC43LCAxKSBib3RoO1xcbiAgICAgICAgICBhbmltYXRpb246IHNoYWtlIDUwMG1zIGN1YmljLWJlemllcigwLjIsIDEuMywgMC43LCAxKSBib3RoOyovXFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgICAgICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgLXdlYmtpdC1wZXJzcGVjdGl2ZTogMTAwMHB4O1xcbiAgICAgICAgICBwZXJzcGVjdGl2ZTogMTAwMHB4O1xcbn1cXG5cXG4ubG9hZGVyIHtcXG4gIGJvcmRlcjogMTZweCBzb2xpZCAjZjNmM2YzOyAvKiBMaWdodCBncmV5ICovXFxuICBib3JkZXItdG9wOiAxNnB4IHNvbGlkICNhYzAwZTY7IC8qIFB1cnBsZSAqL1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgd2lkdGg6IDEyMHB4O1xcbiAgaGVpZ2h0OiAxMjBweDtcXG4gIGFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7XFxuICBtYXJnaW46IGF1dG87XFxufVxcblxcbiNsb2FkaW5nLWNpcmNsZSB7XFxuICB0b3A6IDEyJTtcXG4gIGxlZnQ6IDMwJTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXFxuI2xpc3QtbG9hZGluZy1jaXJjbGUge1xcblxcdG1hcmdpbi10b3A6IDUwcHg7XFxufVxcblxcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS1cXG5BbmltYXRpb25zXFxuLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcbkBrZXlmcmFtZXMgc3BpbiB7XFxuICAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XFxuICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2hha2Uge1xcbiAgMTAlLFxcbiAgOTAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xcHgsIDAsIDApO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTFweCwgMCwgMCk7XFxuICB9XFxuICAyMCUsXFxuICA4MCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMXB4LCAwLCAwKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDFweCwgMCwgMCk7XFxuICB9XFxuICAzMCUsXFxuICA1MCUsXFxuICA3MCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTNweCwgMCwgMCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtM3B4LCAwLCAwKTtcXG4gIH1cXG4gIDQwJSxcXG4gIDYwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgzcHgsIDAsIDApO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoM3B4LCAwLCAwKTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBzaGFrZSB7XFxuICAxMCUsXFxuICA5MCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTFweCwgMCwgMCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMXB4LCAwLCAwKTtcXG4gIH1cXG4gIDIwJSxcXG4gIDgwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxcHgsIDAsIDApO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMXB4LCAwLCAwKTtcXG4gIH1cXG4gIDMwJSxcXG4gIDUwJSxcXG4gIDcwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtM3B4LCAwLCAwKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0zcHgsIDAsIDApO1xcbiAgfVxcbiAgNDAlLFxcbiAgNjAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDNweCwgMCwgMCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgzcHgsIDAsIDApO1xcbiAgfVxcbn1cXG5cXG5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8IS0tIDxuZ3gtYnJhaW50cmVlIFxcclxcbiAgW2dldENsaWVudFRva2VuXT1cXFwiZ2V0Q2xpZW50VG9rZW4oKVxcXCIgXFxyXFxuICBbY3JlYXRlUHVyY2hhc2VdPVxcXCJjcmVhdGVQdXJjaGFzZUZ1bmN0aW9uXFxcIiBcXHJcXG4gIChwYXltZW50U3RhdHVzKT1cXFwib25QYXltZW50U3RhdHVzKCRldmVudClcXFwiPlxcclxcbjwvbmd4LWJyYWludHJlZT4gLS0+XFxyXFxuXFxyXFxuPFN0YWNrTGF5b3V0ICNmb3JtPlxcclxcblxcdDxTdGFja0xheW91dCBjbGFzcz1cXFwiY2xvc2UtYnV0dG9uLWNvbnRhaW5lclxcXCIgb3JpZW50YXRpb249XFxcImhvcml6b250YWxcXFwiPlxcclxcblxcdFxcdDxMYWJlbCB0ZXh0PVxcXCImdGltZXM7XFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiICh0YXApPVxcXCJjbG9zZSgpXFxcIj48L0xhYmVsPlxcclxcblxcdDwvU3RhY2tMYXlvdXQ+XFxyXFxuXFxyXFxuXFx0PFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJjYXJkaW5mby1jYXJkLW51bWJlclxcXCI+XFxyXFxuXFx0XFx0PExhYmVsIHRleHQ9XFxcIkNhcmQgTnVtYmVyXFxcIiBjbGFzcz1cXFwiY2FyZGluZm8tbGFiZWxcXFwiPjwvTGFiZWw+XFxyXFxuXFx0XFx0PFN0YWNrTGF5b3V0ICNjYXJkTnVtYmVyIGNsYXNzPVxcXCJpbnB1dC13cmFwcGVyXFxcIj48L1N0YWNrTGF5b3V0PlxcclxcblxcdFxcdDxTdGFja0xheW91dCAjY2FyZEltYWdlPjwvU3RhY2tMYXlvdXQ+XFxyXFxuXFx0PC9TdGFja0xheW91dD5cXHJcXG5cXHJcXG5cXHQ8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImNhcmRpbmZvLXdyYXBwZXJcXFwiPlxcclxcblxcdFxcdDxTdGFja0xheW91dCBjbGFzcz1cXFwiY2FyZGluZm8tZXhwLWRhdGVcXFwiPlxcclxcblxcdFxcdFxcdDxMYWJlbCB0ZXh0PVxcXCJWYWxpZCBUaHJ1XFxcIiBjbGFzcz1cXFwiY2FyZGluZm8tbGFiZWxcXFwiPjwvTGFiZWw+XFxyXFxuXFx0XFx0XFx0PFN0YWNrTGF5b3V0ICNleHBpcmF0aW9uRGF0ZSBjbGFzcz1cXFwiaW5wdXQtd3JhcHBlclxcXCI+PC9TdGFja0xheW91dD5cXHJcXG5cXHRcXHQ8L1N0YWNrTGF5b3V0PlxcclxcblxcclxcblxcdFxcdDxTdGFja0xheW91dCBjbGFzcz1cXFwiY2FyZGluZm8tY3Z2XFxcIj5cXHJcXG5cXHRcXHRcXHQ8TGFiZWwgdGV4dD1cXFwiQ1ZWXFxcIiBjbGFzcz1cXFwiY2FyZGluZm8tbGFiZWxcXFwiPjwvTGFiZWw+XFxyXFxuXFx0XFx0XFx0PFN0YWNrTGF5b3V0ICNjdnYgY2xhc3M9XFxcImlucHV0LXdyYXBwZXJcXFwiPjwvU3RhY2tMYXlvdXQ+XFxyXFxuXFx0XFx0PC9TdGFja0xheW91dD5cXHJcXG5cXHQ8L1N0YWNrTGF5b3V0PlxcclxcblxcclxcblxcdDxCdXR0b24gdGV4dD1cXFwiQWRkXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiAjc3VibWl0QnV0dG9uPjwvQnV0dG9uPlxcclxcbjwvU3RhY2tMYXlvdXQ+XFxyXFxuPCEtLSBcXHRcXHQ8Zm9ybSBpZD1cXFwicGF5bWVudC1jYXJkLWZvcm1cXFwiIGNsYXNzPVxcXCJzY2FsZS1kb3duXFxcIj5cXHJcXG5cXHQgICAgPGRpdiBjbGFzcz1cXFwiY2FyZGluZm8tY2FyZC1udW1iZXJcXFwiPlxcclxcblxcdCAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY2FyZGluZm8tbGFiZWxcXFwiIGZvcj1cXFwiY2FyZC1udW1iZXJcXFwiPkNhcmQgTnVtYmVyPC9sYWJlbD5cXHJcXG5cXHQgICAgICA8ZGl2IGNsYXNzPSdpbnB1dC13cmFwcGVyJyBpZD1cXFwiY2FyZC1udW1iZXJcXFwiPjwvZGl2PlxcclxcblxcdCAgICAgIDxkaXYgaWQ9XFxcImNhcmQtaW1hZ2VcXFwiPjwvZGl2PlxcclxcblxcdCAgICA8L2Rpdj5cXHJcXG5cXHJcXG5cXHQgICAgPGRpdiBjbGFzcz1cXFwiY2FyZGluZm8td3JhcHBlclxcXCI+XFxyXFxuXFx0ICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZGluZm8tZXhwLWRhdGVcXFwiPlxcclxcblxcdCAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjYXJkaW5mby1sYWJlbFxcXCIgZm9yPVxcXCJleHBpcmF0aW9uLWRhdGVcXFwiPlZhbGlkIFRocnU8L2xhYmVsPlxcclxcblxcdCAgICAgICAgPGRpdiBjbGFzcz0naW5wdXQtd3JhcHBlcicgaWQ9XFxcImV4cGlyYXRpb24tZGF0ZVxcXCI+PC9kaXY+XFxyXFxuXFx0ICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuXFx0ICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZGluZm8tY3Z2XFxcIj5cXHJcXG5cXHQgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY2FyZGluZm8tbGFiZWxcXFwiIGZvcj1cXFwiY3Z2XFxcIj5DVlY8L2xhYmVsPlxcclxcblxcdCAgICAgICAgPGRpdiBjbGFzcz0naW5wdXQtd3JhcHBlcicgaWQ9XFxcImN2dlxcXCI+PC9kaXY+XFxyXFxuXFx0ICAgICAgPC9kaXY+XFxyXFxuXFx0ICAgIDwvZGl2PlxcclxcblxcdCAgPC9mb3JtPiAtLT5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0ICogYXMgZHJvcGluIGZyb20gJ2JyYWludHJlZS13ZWItZHJvcC1pbic7XHJcbmltcG9ydCAqIGFzIGJyYWludHJlZSBmcm9tICdicmFpbnRyZWUtd2ViJztcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9idXR0b24nO1xyXG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL3RleHQtZmllbGQnO1xyXG5pbXBvcnQgeyBNb2RhbERpYWxvZ1BhcmFtcyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9kaXJlY3RpdmVzL2RpYWxvZ3NcIjtcclxuaW1wb3J0IHsgUGF5bWVudFNlcnZpY2UgfSBmcm9tICcuLi9wYXltZW50LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTdGFja0xheW91dCB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvbGF5b3V0cy9zdGFjay1sYXlvdXQnO1xyXG4vLyBpbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cC1jbGllbnQnO1xyXG4vLyBpbXBvcnQgeyBOZ3hCcmFpbnRyZWVNb2R1bGUgfSBmcm9tICduZ3gtYnJhaW50cmVlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlJztcclxuaW1wb3J0IHsgQnJhaW50cmVlLCBCcmFpblRyZWVPcHRpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWJyYWludHJlZSc7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuLy8gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1ub2RlaWZ5XCIpO1xyXG4vLyBpbXBvcnQgKiBhcyBOb2RlaWZ5IGZyb20gJ25hdGl2ZXNjcmlwdC1ub2RlaWZ5JztcclxuLy8gY29uc3QgYnJhaW50cmVlID0gcmVxdWlyZSgnYnJhaW50cmVlLXdlYicpO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtYWRkLWNhcmQtcGF5bWVudCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2FkZC1jYXJkLXBheW1lbnQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2FkZC1jYXJkLXBheW1lbnQuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBZGRDYXJkUGF5bWVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFyYW1zOiBNb2RhbERpYWxvZ1BhcmFtcywgcHJpdmF0ZSBwYXltZW50U2VydmljZTogUGF5bWVudFNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zKSB7IH1cclxuXHJcbiAgLy8gQFZpZXdDaGlsZChcImRyb3BpbkNvbnRhaW50ZXJcIikgY29udGFpbmVyOiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoXCJzdWJtaXRCdXR0b25cIiwgeyBzdGF0aWM6IHRydWUgfSkgc0I6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZChcImV4cGlyYXRpb25EYXRlXCIsIHsgc3RhdGljOiB0cnVlIH0pIGV4cGlyYXRpb25UZXh0OiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoXCJjYXJkTnVtYmVyXCIsIHsgc3RhdGljOiB0cnVlIH0pIG51bWJlclRleHQ6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZChcImN2dlwiLCB7IHN0YXRpYzogdHJ1ZSB9KSBjdnZUZXh0OiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoXCJmb3JtXCIsIHsgc3RhdGljOiB0cnVlIH0pIGZvcm1MYXlvdXQ6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZChcImNhcmRJbWFnZVwiLCB7IHN0YXRpYzogdHJ1ZSB9KSBjYXJkTGF5b3V0OiBFbGVtZW50UmVmO1xyXG5cclxuICB1c2VyID0ge1xyXG4gIFx0cGF5bWVudF9pZDogJzUwNzMwNTcwNidcclxuICB9XHJcbiAgb3B0cyA6QnJhaW5UcmVlT3B0aW9ucyA9IHtcclxuXHRhbW91bnQ6IG51bGwsXHJcblx0Y29sbGVjdERldmljZURhdGE6IHRydWUsXHJcblx0cmVxdWVzdFRocmVlRFNlY3VyZVZlcmlmaWNhdGlvbjogZmFsc2UsXHJcbiAgfVxyXG4gIGNsaWVudFRva2VuID0gJyc7XHJcblxyXG4gIC8vIHRva2VuID0gdGhpcy5wYXltZW50U2VydmljZS5nZXRJZFRva2VuKHRoaXMudXNlci5wYXltZW50X2lkKTtcclxuICBuZ09uSW5pdCgpIHtcclxuIC8vICBcdGJyYWludHJlZS5jbGllbnQuY3JlYXRlKHtcclxuXHQvLyAgIGF1dGhvcml6YXRpb246ICdzYW5kYm94Xzlxc2J5eXE4X3dtYzN2ODhyMzZjYnhqanonXHJcblx0Ly8gfSwgZnVuY3Rpb24gKGNsaWVudEVyciwgY2xpZW50SW5zdGFuY2UpIHtcclxuXHQvLyAgIC8vIFN0b3AgaWYgdGhlcmUgd2FzIGEgcHJvYmxlbSBjcmVhdGluZyB0aGUgY2xpZW50LlxyXG5cdC8vICAgLy8gVGhpcyBjb3VsZCBoYXBwZW4gaWYgdGhlcmUgaXMgYSBuZXR3b3JrIGVycm9yIG9yIGlmIHRoZSBhdXRob3JpemF0aW9uXHJcblx0Ly8gICAvLyBpcyBpbnZhbGlkLlxyXG5cdC8vICAgaWYgKGNsaWVudEVycikge1xyXG5cdC8vICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjcmVhdGluZyBjbGllbnQ6JywgY2xpZW50RXJyKTtcclxuXHQvLyAgICAgcmV0dXJuO1xyXG5cdC8vICAgfVxyXG5cdC8vIH0pO1xyXG5cclxuICB9XHJcblxyXG4gIGNyZWF0ZVZpZXdzKCkge1xyXG4gIFx0dmFyIGZvcm0gPSA8U3RhY2tMYXlvdXQ+IHRoaXMuZm9ybUxheW91dC5uYXRpdmVFbGVtZW50O1xyXG5cdHZhciBzdWJtaXQgPSA8QnV0dG9uPiB0aGlzLnNCLm5hdGl2ZUVsZW1lbnQ7XHJcblx0dmFyIGV4cGlyYXRpb25EYXRlID0gPFN0YWNrTGF5b3V0PiB0aGlzLmV4cGlyYXRpb25UZXh0Lm5hdGl2ZUVsZW1lbnQ7XHJcblx0dmFyIGNhcmROdW1iZXIgPSA8U3RhY2tMYXlvdXQ+IHRoaXMubnVtYmVyVGV4dC5uYXRpdmVFbGVtZW50O1xyXG5cdHZhciBjdnYgPSA8U3RhY2tMYXlvdXQ+IHRoaXMuY3Z2VGV4dC5uYXRpdmVFbGVtZW50O1xyXG5cdHZhciBjYXJkSW1hZ2UgPSA8U3RhY2tMYXlvdXQ+IHRoaXMuY2FyZExheW91dC5uYXRpdmVFbGVtZW50O1xyXG5cclxuXHRzdWJtaXQuaXNFbmFibGVkID0gZmFsc2U7XHJcblxyXG4gIH1cclxuXHJcbiAgY2xvc2UoKSB7XHJcbiAgXHR0aGlzLnBhcmFtcy5jbG9zZUNhbGxiYWNrKCk7XHJcbiAgfVxyXG5cclxuICBnZXRDbGllbnRUb2tlbigpIHtcclxuICBcdGNvbnN0IHRva2VuID0gbmV3IE9ic2VydmFibGUoKTtcclxuICBcdHRva2VuLnNldCgnQXV0aG9yaXphdGlvbicsICdzYW5kYm94Xzlxc2J5eXE4X3dtYzN2ODhyMzZjYnhqanonKTtcclxuICBcdHJldHVybiB0b2tlbjtcclxuICB9XHJcblxyXG4gIGNyZWF0ZVB1cmNoYXNlRnVuY3Rpb24obm9uY2U6IHN0cmluZywgY2hhcmdlQW1vdW50OiBudW1iZXIpIHtcclxuICBcdHJldHVybiB0aGlzLnBheW1lbnRTZXJ2aWNlLmFkZFBheW1lbnRNZXRob2RUb1VzZXIodGhpcy51c2VyLnBheW1lbnRfaWQsIG5vbmNlKTtcclxuICB9XHJcblxyXG4gIG9uUGF5bWVudFN0YXR1cyhldmVudCkge1xyXG5cclxuICB9XHJcblxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCIvKiBBZGQgbW9iaWxlIHN0eWxlcyBmb3IgdGhlIGNvbXBvbmVudCBoZXJlLiAgKi9cXHJcXG4ucGFnZSB7XFxyXFxuICAvKmFsaWduLWl0ZW1zOiBjZW50ZXI7Ki9cXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5mb3JtIHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAzMDtcXHJcXG4gIG1hcmdpbi1yaWdodDogMzA7XFxyXFxuICBmbGV4LWdyb3c6IDI7XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2Uge1xcclxcblxcdG1hcmdpbjogMTA7XFxyXFxuXFx0Zm9udC1zaXplOiAyODtcXHJcXG5cXHR3aWR0aDogNDg7XFxyXFxuXFx0aGVpZ2h0OiA0ODtcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlLWJ1dHRvbi1jb250YWluZXIge1xcclxcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHRsZWZ0OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyLWxhYmVsIHtcXHJcXG5cXHRtYXJnaW4tdG9wOiA2MDtcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiAwO1xcclxcblxcdGZvbnQtc2l6ZTogMjA7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXItbGFiZWwtMiB7XFxyXFxuXFx0Zm9udC1zaXplOiAyMDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlci1sYWJlbC0zIHtcXHJcXG5cXHRtYXJnaW4tdG9wOiAxNDtcXHJcXG5cXHRtYXJnaW4tbGVmdDogMTY7XFxyXFxuXFx0bWFyZ2luLXJpZ2h0OiAxNjtcXHJcXG5cXHRmb250LXNpemU6IDE4O1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyLWxhYmVsLTQge1xcclxcblxcdGZvbnQtc2l6ZTogMTg7XFxyXFxuXFx0bWFyZ2luLXRvcDogMTQ7XFxyXFxufVxcclxcblxcclxcbi5yaWRpbmctbGFiZWwge1xcclxcblxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuXFx0Y29sb3I6ICNhYzAwZTY7XFxyXFxufVxcclxcblxcclxcbi5kcml2aW5nLWxhYmVsIHtcXHJcXG5cXHRjb2xvcjogIzVjNjg3YztcXHJcXG59XFxyXFxuXFxyXFxuLnN3aXRjaC1jb250YWluZXIge1xcclxcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnN3aXRjaCB7XFxyXFxuXFx0Y29sb3I6ICNhYzAwZTY7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2NkOTRlMDtcXHJcXG59XFxyXFxuXFxyXFxuLnN1Ym1pdC1idG4ge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICNhYzAwZTY7XFxyXFxuXFx0bWFyZ2luLXRvcDogMjA7XFxyXFxufVxcclxcblxcclxcbi5ib2xkIHtcXHJcXG5cXHRmb250LXdlaWdodDogNzAwO1xcclxcbn1cXHJcXG5cXHJcXG4uc3RhcnQtZmllbGQge1xcclxcblxcdG1hcmdpbi10b3A6IDE0O1xcclxcbn1cXHJcXG5cXHJcXG4uYWN0aXZpdHktaW5kaWNhdG9yIHtcXHJcXG4gIGNvbG9yOiAjYWMwMGU2O1xcclxcbiAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcXHJcXG4gIG1hcmdpbi10b3A6IDQ3JTtcXHJcXG59XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPFN0YWNrTGF5b3V0PlxcclxcblxcdDxBY3Rpdml0eUluZGljYXRvciAjYWN0aXZpdHlJbmRpY2F0b3IgYnVzeT1cXFwidHJ1ZVxcXCIgd2lkdGg9XFxcIjQwXFxcIiBoZWlnaHQ9XFxcIjQwXFxcIiBjbGFzcz1cXFwiYWN0aXZpdHktaW5kaWNhdG9yXFxcIj48L0FjdGl2aXR5SW5kaWNhdG9yPlxcclxcblxcdDxTY3JvbGxWaWV3IGhlaWdodD1cXFwiMTAwJVxcXCI+XFxyXFxuXFx0PEZsZXhib3hMYXlvdXQgY2xhc3M9XFxcInBhZ2VcXFwiICNhZGRDb250YWluZXI+XFxyXFxuXFx0XFx0PFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJjbG9zZS1idXR0b24tY29udGFpbmVyXFxcIiBvcmllbnRhdGlvbj1cXFwiaG9yaXpvbnRhbFxcXCI+XFxyXFxuXFx0XFx0XFx0PExhYmVsIHRleHQ9XFxcIiZ0aW1lcztcXFwiIGNsYXNzPVxcXCJjbG9zZVxcXCIgKHRhcCk9XFxcImNsb3NlKCdjYW5jZWwnKVxcXCI+PC9MYWJlbD5cXHJcXG5cXHRcXHQ8L1N0YWNrTGF5b3V0PlxcclxcblxcclxcblxcclxcblxcdFxcdDxTdGFja0xheW91dCBjbGFzcz1cXFwiZm9ybVxcXCI+XFxyXFxuXFx0XFx0XFx0PExhYmVsIHRleHQ9XFxcIkkgYW0uLi5cXFwiIGNsYXNzPVxcXCJoZWFkZXItbGFiZWwtMiBib2xkXFxcIj48L0xhYmVsPlxcclxcblxcclxcblxcdFxcdCAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJpbnB1dC1maWVsZCBzd2l0Y2gtY29udGFpbmVyXFxcIiBvcmllbnRhdGlvbj1cXFwiaG9yaXpvbnRhbFxcXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIj5cXHJcXG5cXHRcXHQgIFxcdDxMYWJlbCB0ZXh0PVxcXCJEcml2aW5nXFxcIiBjbGFzcz1cXFwiaGVhZGVyLWxhYmVsLTMgZHJpdmluZy1sYWJlbFxcXCIgI2RyaXZpbmdMYWJlbD48L0xhYmVsPlxcclxcblxcdFxcdCAgXFx0PFN3aXRjaCBjaGVja2VkPVxcXCJ0cnVlXFxcIiAoY2hlY2tlZENoYW5nZSk9XFxcIm9uQ2hlY2tlZENoYW5nZSgkZXZlbnQpXFxcIiBjbGFzcz1cXFwibS0xNSBzd2l0Y2hcXFwiPjwvU3dpdGNoPlxcclxcblxcdFxcdCAgXFx0PExhYmVsIHRleHQ9XFxcIlJpZGluZ1xcXCIgY2xhc3M9XFxcImhlYWRlci1sYWJlbC0zIHJpZGluZy1sYWJlbFxcXCIgI3JpZGluZ0xhYmVsPjwvTGFiZWw+XFxyXFxuXFx0XFx0ICA8L1N0YWNrTGF5b3V0PlxcclxcblxcclxcblxcdFxcdCAgPExhYmVsIHRleHQ9XFxcIldoZXJlP1xcXCIgY2xhc3M9XFxcImhlYWRlci1sYWJlbCBib2xkXFxcIj48L0xhYmVsPlxcclxcblxcdFxcdCAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJpbnB1dC1maWVsZCBzdGFydC1maWVsZFxcXCI+XFxyXFxuPCEtLSBcXHRcXHQgICAgPFRleHRGaWVsZCBjbGFzcz1cXFwiaW5wdXRcXFwiIGF1dG9jb3JyZWN0PVxcXCJmYWxzZVxcXCIgaGludD1cXFwiV2hlcmUgZnJvbT9cXFwiIFsobmdNb2RlbCldPVxcXCJzdGFydEFkZHJlc3NcXFwiICh0ZXh0Q2hhbmdlKT1cXFwic3RhcnRBdXRvY29tcGxldGUoKVxcXCIgKHRhcCk9XFxcInNob3dNb2RhbCgnc3RhcnQnKVxcXCIgcmVxdWlyZWQ+PC9UZXh0RmllbGQ+IC0tPlxcclxcblxcdFxcdFxcdDxMYWJlbCB0ZXh0PVxcXCJ7eyBzdGFydExhYmVsIH19XFxcIiBjbGFzcz1cXFwiaGVhZGVyLWxhYmVsLTNcXFwiICh0YXApPVxcXCJzaG93TW9kYWwoJ3N0YXJ0JylcXFwiPjwvTGFiZWw+XFxyXFxuXFx0XFx0ICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiaHItbGlnaHRcXFwiPjwvU3RhY2tMYXlvdXQ+XFxyXFxuXFx0XFx0ICA8L1N0YWNrTGF5b3V0PlxcclxcblxcclxcblxcdFxcdCAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJpbnB1dC1maWVsZFxcXCI+XFxyXFxuPCEtLSBcXHRcXHQgICAgPFRleHRGaWVsZCBjbGFzcz1cXFwiaW5wdXRcXFwiIGF1dG9jb3JyZWN0PVxcXCJmYWxzZVxcXCIgaGludD1cXFwiV2hlcmUgdG8/XFxcIiBbKG5nTW9kZWwpXT1cXFwiZW5kQWRkcmVzc1xcXCIgKHRleHRDaGFuZ2UpPVxcXCJlbmRBdXRvY29tcGxldGUoKVxcXCIgKHRhcCk9XFxcInNob3dNb2RhbCgnZW5kJylcXFwiIHJlcXVpcmVkPjwvVGV4dEZpZWxkPiAtLT5cXHJcXG5cXHRcXHRcXHRcXHQ8TGFiZWwgdGV4dD1cXFwie3sgZW5kTGFiZWwgfX1cXFwiIGNsYXNzPVxcXCJoZWFkZXItbGFiZWwtM1xcXCIgKHRhcCk9XFxcInNob3dNb2RhbCgnZW5kJylcXFwiPjwvTGFiZWw+XFxyXFxuXFx0XFx0ICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiaHItbGlnaHRcXFwiPjwvU3RhY2tMYXlvdXQ+XFxyXFxuXFx0XFx0ICA8L1N0YWNrTGF5b3V0PlxcclxcblxcclxcblxcdDwhLS0gXFx0ICA8RGF0ZVBpY2tlciAobG9hZGVkKT1cXFwib25QaWNrZXJMb2FkZWQoJGV2ZW50KVxcXCIgKGRhdGVDaGFuZ2UpPVxcXCJvbkRhdGVDaGFuZ2VkKCRldmVudClcXFwiIFxcclxcblxcdChkYXlDaGFuZ2UpPVxcXCJvbkRheUNoYW5nZWQoJGV2ZW50KVxcXCIgKG1vbnRoQ2hhbmdlKT1cXFwib25Nb250aENoYW5nZWQoJGV2ZW50KVxcXCIgKHllYXJDaGFuZ2UpPVxcXCJvblllYXJDaGFuZ2VkKCRldmVudClcXFwiIHZlcnRpY2FsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiPjwvRGF0ZVBpY2tlcj4gLS0+XFxyXFxuXFx0XFx0XFx0PExhYmVsIHRleHQ9XFxcIldoZW4/XFxcIiBjbGFzcz1cXFwiaGVhZGVyLWxhYmVsIGJvbGRcXFwiPjwvTGFiZWw+XFxyXFxuXFxyXFxuXFx0XFx0ICA8RGF0ZVBpY2tlciAobG9hZGVkKT1cXFwib25QaWNrZXJMb2FkZWQoJGV2ZW50KVxcXCIgKGRhdGVDaGFuZ2UpPVxcXCJvbkRhdGVDaGFuZ2VkKCRldmVudClcXFwiIHZlcnRpY2FsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiPjwvRGF0ZVBpY2tlcj5cXHJcXG5cXHJcXG5cXHRcXHQgIDxMYWJlbCAqbmdJZj1cXFwiaXNEcml2aW5nXFxcIiB0ZXh0PVxcXCJIb3cgbWFueT9cXFwiIGNsYXNzPVxcXCJoZWFkZXItbGFiZWxcXFwiPjwvTGFiZWw+XFxyXFxuXFx0XFx0ICA8R3JpZExheW91dCAqbmdJZj1cXFwiaXNEcml2aW5nXFxcIiBjbGFzcz1cXFwibS0xNVxcXCIgcm93cz1cXFwiYXV0b1xcXCIgY29sdW1ucz1cXFwiNTAgKiA1MFxcXCI+XFxyXFxuXFx0XFx0XFx0ICAgIDxMYWJlbCBjbGFzcz1cXFwiaDNcXFwiIHRleHQ9XFxcIjFcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiByb3c9XFxcIjEwXFxcIiBjb2w9XFxcIjBcXFwiPjwvTGFiZWw+XFxyXFxuXFx0XFx0XFx0ICAgIDxTbGlkZXIgbWluVmFsdWU9XFxcIjFcXFwiIG1heFZhbHVlPVxcXCI4XFxcIiBbKG5nTW9kZWwpXT1cXFwiY2FwYWNpdHlcXFwiIHJvdz1cXFwiMFxcXCJcXHJcXG5cXHRcXHRcXHQgICAgIGNvbD1cXFwiMVxcXCI+PC9TbGlkZXI+XFxyXFxuXFx0XFx0XFx0ICAgIDxMYWJlbCBjbGFzcz1cXFwiaDNcXFwiIHRleHQ9XFxcIjhcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiByb3c9XFxcIjBcXFwiIGNvbD1cXFwiMlxcXCI+PC9MYWJlbD5cXHJcXG5cXHRcXHRcXHQ8L0dyaWRMYXlvdXQ+XFxyXFxuXFx0XFx0ICA8TGFiZWwgKm5nSWY9XFxcImlzRHJpdmluZ1xcXCIgdGV4dD1cXFwie3sgY2FwYWNpdHkgfX1cXFwiIGNsYXNzPVxcXCJoZWFkZXItbGFiZWwtMlxcXCI+PC9MYWJlbD5cXHJcXG5cXHJcXG5cXHRcXHQgIDxCdXR0b24gdGV4dD1cXFwiQWRkXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5IHN1Ym1pdC1idG5cXFwiICh0YXApPVxcXCJhZGRQb3N0aW5nKClcXFwiPjwvQnV0dG9uPlxcclxcblxcdFxcdDwvU3RhY2tMYXlvdXQ+XFxyXFxuXFx0PC9GbGV4Ym94TGF5b3V0PlxcclxcblxcdDwvU2Nyb2xsVmlldz5cXHJcXG48L1N0YWNrTGF5b3V0PlxcclxcblxcclxcblxcclxcblwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNb2RhbERpYWxvZ1BhcmFtcyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9kaXJlY3RpdmVzL2RpYWxvZ3NcIjtcclxuaW1wb3J0IHsgTW9kYWxEaWFsb2dTZXJ2aWNlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2RpcmVjdGl2ZXMvZGlhbG9nc1wiO1xyXG5pbXBvcnQgeyBQb3N0aW5nU2VydmljZSB9IGZyb20gJy4uL3Bvc3Rpbmcuc2VydmljZS50bnMnO1xyXG5pbXBvcnQgeyBEYXRlUGlja2VyIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZGF0ZS1waWNrZXJcIjtcclxuaW1wb3J0IHsgU3dpdGNoIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvc3dpdGNoXCI7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlXCI7XHJcbmltcG9ydCB7IExhYmVsIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGFiZWxcIjtcclxuaW1wb3J0IHsgQ29sb3IgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9jb2xvclwiO1xyXG5pbXBvcnQgeyBQbGFjZXNBdXRvY29tcGxldGVTZXJ2aWNlIH0gZnJvbSAnLi4vcGxhY2VzLWF1dG9jb21wbGV0ZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgc2V0SW50ZXJ2YWwsIGNsZWFySW50ZXJ2YWwgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy90aW1lclwiO1xyXG5pbXBvcnQgeyBMb2NhdGlvbkNvbXBvbmVudCB9IGZyb20gJy4uL2xvY2F0aW9uL2xvY2F0aW9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRyYW5zZmVyU2VydmljZSB9IGZyb20gJy4uL2RhdGF0cmFuc2Zlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTG9naW5jaGVja1NlcnZpY2UgfSBmcm9tICcuLi9sb2dpbmNoZWNrLnNlcnZpY2UudG5zJztcclxuaW1wb3J0ICogYXMgZmlyZWJhc2UgZnJvbSAnbmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZSc7XHJcbmltcG9ydCB7IERhdGVQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgQ2FjaGUgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2ltYWdlLWNhY2hlJztcclxuaW1wb3J0IHsgR29vZ2xlTWFwc1NlcnZpY2UgfSBmcm9tICcuLi9nb29nbGUtbWFwcy5zZXJ2aWNlJztcclxuaW1wb3J0IHtJbWFnZVNvdXJjZSwgZnJvbUZpbGUsIGZyb21SZXNvdXJjZSwgZnJvbUJhc2U2NH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvaW1hZ2Utc291cmNlXCI7XHJcbmltcG9ydCB7Rm9sZGVyLCBwYXRoLCBrbm93bkZvbGRlcnN9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2ZpbGUtc3lzdGVtXCI7XHJcbmltcG9ydCAqIGFzIGZzIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2ZpbGUtc3lzdGVtXCI7XHJcbmltcG9ydCB7IEFjdGl2aXR5SW5kaWNhdG9yIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9hY3Rpdml0eS1pbmRpY2F0b3InO1xyXG5pbXBvcnQgeyBTY3JvbGxWaWV3IH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9zY3JvbGwtdmlldyc7XHJcbmltcG9ydCB7IEZsZXhib3hMYXlvdXQgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvZmxleGJveC1sYXlvdXQnO1xyXG5pbXBvcnQgeyBTdGFja0xheW91dCB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvbGF5b3V0cy9zdGFjay1sYXlvdXQnO1xyXG4vLyBpbXBvcnQgeyBHb29nbGVQbGFjZXNBdXRvY29tcGxldGUgfSBmcm9tICduYXRpdmVzY3JpcHQtZ29vZ2xlLXBsYWNlcy1hdXRvY29tcGxldGUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtYWRkLW1vZGFsJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vYWRkLW1vZGFsLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9hZGQtbW9kYWwuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBZGRNb2RhbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFyYW1zOiBNb2RhbERpYWxvZ1BhcmFtcywgcHJpdmF0ZSBwb3N0aW5nU2VydmljZTogUG9zdGluZ1NlcnZpY2UsIHByaXZhdGUgcGFnZTogUGFnZSwgcHJpdmF0ZSBwbGFjZXNTZXJ2aWNlOiBQbGFjZXNBdXRvY29tcGxldGVTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBtb2RhbDogTW9kYWxEaWFsb2dTZXJ2aWNlLCBwcml2YXRlIHZjUmVmOiBWaWV3Q29udGFpbmVyUmVmLCBwcml2YXRlIHRyYW5zZmVyU2VydmljZTogVHJhbnNmZXJTZXJ2aWNlLCBwcml2YXRlIGxvZ2luY2hlY2tTZXJ2aWNlOiBMb2dpbmNoZWNrU2VydmljZSxcclxuICAgIHByaXZhdGUgZGF0ZVBpcGU6IERhdGVQaXBlLCBwcml2YXRlIG1hcFNlcnZpY2U6IEdvb2dsZU1hcHNTZXJ2aWNlKSB7IH1cclxuXHJcbiAgQFZpZXdDaGlsZCgnZHJpdmluZ0xhYmVsJywgeyBzdGF0aWM6IHRydWUgfSkgZGw6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgncmlkaW5nTGFiZWwnLCB7IHN0YXRpYzogdHJ1ZSB9KSBybDogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKCdhY3Rpdml0eUluZGljYXRvcicsIHsgc3RhdGljOiB0cnVlIH0pIGFpOiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoJ2FkZENvbnRhaW5lcicsIHsgc3RhdGljOiB0cnVlIH0pIGFjOiBFbGVtZW50UmVmO1xyXG4gIC8vIEBWaWV3Q2hpbGQoJ3N0YXJ0TGFiZWwnKSBzbDogRWxlbWVudFJlZjtcclxuICAvLyBAVmlld0NoaWxkKCdlbmRMYWJlbCcpIGVsOiBFbGVtZW50UmVmO1xyXG5cclxuICBzdGFydFN1Z2dlc3Rpb25zOiBTdHJpbmdbXTtcclxuICBlbmRTdWdnZXN0aW9uczogU3RyaW5nW107XHJcbiAgc3RhcnRQbGFjZTtcclxuICBlbmRQbGFjZTtcclxuICBzdGFydEFkZHJlc3M7XHJcbiAgZW5kQWRkcmVzcztcclxuICBmb3JtYXR0ZWREYXRlO1xyXG4gIGRhdGUgPSBcIm5vd1wiO1xyXG4gIHByaWNlID0gXCIkMTVcIjtcclxuICBjYXBhY2l0eSA9IFwiLTFcIjtcclxuICB1c2VyID0ge1xyXG4gIFx0dXNlcm5hbWU6IFwiMjAyMmF5ZWVcIixcclxuICAgIGlkOiBcIlwiXHJcbiAgfTtcclxuICBzdGFydExhYmVsID0gXCJQaWNrIHN0YXJ0IGxvY2F0aW9uXCI7XHJcbiAgZW5kTGFiZWwgPSBcIlBpY2sgZW5kIGxvY2F0aW9uXCI7XHJcbiAgc3RhcnRMYXQ7XHJcbiAgc3RhcnRMbmc7XHJcbiAgZW5kTGF0O1xyXG4gIGVuZExuZztcclxuXHJcbiAgaXNEcml2aW5nID0gZmFsc2U7XHJcbiAgc3RhcnRMb2NhdGlvblBpY2tlZCA9IGZhbHNlO1xyXG4gIGVuZExvY2F0aW9uUGlja2VkID0gZmFsc2U7XHJcbiAgaW1hZ2VTb3VyY2UgPSBuZXcgSW1hZ2VTb3VyY2UoKTtcclxuXHJcblxyXG4gIEFQSV9LRVkgPSBcIkFJemFTeUFJVHhTMWptZjhQTXRhelJndVdjQWZXUXhXMWtQT29ZZ1wiO1xyXG4gIC8vIGdvb2dsZVBsYWNlc0F1dG9jb21wbGV0ZSA9IG5ldyBHb29nbGVQbGFjZXNBdXRvY29tcGxldGUodGhpcy5BUElfS0VZKTtcclxuICBuZ09uSW5pdCgpIHtcclxuICAgIC8vIGxldCBhZGRDb250YWluZXIgPSA8RmxleGJveExheW91dD4gdGhpcy5hYy5uYXRpdmVFbGVtZW50O1xyXG4gICAgLy8gIC8vIGFjdGl2aXR5SW5kaWNhdG9yLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XHJcbiAgICAvLyBhZGRDb250YWluZXIuc3R5bGUudmlzaWJpbGl0eSA9ICdjb2xsYXBzZSc7XHJcbiAgICBsZXQgYWN0aXZpdHlJbmRpY2F0b3IgPSA8QWN0aXZpdHlJbmRpY2F0b3I+IHRoaXMuYWkubmF0aXZlRWxlbWVudDtcclxuICAgIGFjdGl2aXR5SW5kaWNhdG9yLnN0eWxlLnZpc2liaWxpdHkgPSAnY29sbGFwc2UnXHJcbiAgICBmaXJlYmFzZS5nZXRDdXJyZW50VXNlcigpLnRoZW4odXNlciA9PiB7XHJcbiAgICAgIHRoaXMudXNlci51c2VybmFtZSA9IHVzZXIuZGlzcGxheU5hbWU7XHJcbiAgICAgIGlmKHVzZXIuZGlzcGxheU5hbWUgPT0gbnVsbCB8fCB1c2VyLmRpc3BsYXlOYW1lID09ICcnKVxyXG4gICAgICAgIHRoaXMudXNlci51c2VybmFtZSA9IHVzZXIuZW1haWw7XHJcbiAgICAgIHRoaXMudXNlci5pZCA9IHRoaXMubG9naW5jaGVja1NlcnZpY2UuZ2V0VXNlcigpO1xyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHN0YXJ0U2VsZWN0KGV2ZW50OiBFdmVudCkge1xyXG4gICAgY29uc29sZS5sb2coZXZlbnQuc3JjRWxlbWVudCk7XHJcbiAgfVxyXG5cclxuICBzaG93TW9kYWwodHlwZSkge1xyXG4gICAgbGV0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgY29udGV4dDoge30sXHJcbiAgICAgICAgZnVsbHNjcmVlbjogdHJ1ZSxcclxuICAgICAgICB2aWV3Q29udGFpbmVyUmVmOiB0aGlzLnZjUmVmXHJcbiAgICAgICAgLy8gYW5pbWF0ZWQ6IHRydWUsXHJcbiAgICAgICAgLy8gdHJhbnNpdGlvbjogeyBuYW1lOiBcInNsaWRlVG9wXCIgfVxyXG4gICAgfTtcclxuICAgIHRoaXMudHJhbnNmZXJTZXJ2aWNlLnNldERhdGEodHlwZSk7XHJcbiAgICB0aGlzLm1vZGFsLnNob3dNb2RhbChMb2NhdGlvbkNvbXBvbmVudCwgb3B0aW9ucykudGhlbihyZXMgPT4ge1xyXG4gICAgICAgIGlmKHJlcyAhPSBudWxsKVxyXG4gICAgICAgICAgaWYocmVzLnN0YXJ0ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGFydExvY2F0aW9uUGlja2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5zdGFydExhYmVsID0gJ1N0YXJ0IGxvY2F0aW9uOiAnICsgcmVzLnN0YXJ0O1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0UGxhY2UgPSByZXMuc3RhcnQ7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRBZGRyZXNzID0gcmVzLmFkZHJlc3M7XHJcblxyXG4gICAgICAgICAgICAvLyBsZXQgc0xhYmVsID0gPExhYmVsPiB0aGlzLnNsLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICAgICAgICAgIC8vIHNMYWJlbC5jbGFzc05hbWUgKz0gJ2JvbGQnO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZWxzZSBpZihyZXMuZW5kICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5lbmRMb2NhdGlvblBpY2tlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuZW5kTGFiZWwgPSAnRW5kIGxvY2F0aW9uOiAnICsgcmVzLmVuZDtcclxuICAgICAgICAgICAgdGhpcy5lbmRQbGFjZSA9IHJlcy5lbmQ7XHJcbiAgICAgICAgICAgIHRoaXMuZW5kQWRkcmVzcyA9IHJlcy5hZGRyZXNzO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgaWYodHlwZSA9PSAnc3RhcnQnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRMb2NhdGlvblBpY2tlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRMYWJlbCA9ICdQaWNrIHN0YXJ0IGxvY2F0aW9uJztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2UgaWYodHlwZSA9PSAnZW5kJykge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0TG9jYXRpb25QaWNrZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zdGFydExhYmVsID0gJ1BpY2sgZW5kIGxvY2F0aW9uJztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNsb3NlKHJlcykge1xyXG4gIFx0dGhpcy5wYXJhbXMuY2xvc2VDYWxsYmFjayhyZXMpO1xyXG4gICB9XHJcblxyXG4gICBhZGRQb3N0aW5nKCkge1xyXG4gICAgIGxldCBhZGRDb250YWluZXIgPSA8RmxleGJveExheW91dD4gdGhpcy5hYy5uYXRpdmVFbGVtZW50O1xyXG4gICAgIGFkZENvbnRhaW5lci5zdHlsZS52aXNpYmlsaXR5ID0gJ2NvbGxhcHNlJztcclxuICAgICBsZXQgYWN0aXZpdHlJbmRpY2F0b3IgPSA8QWN0aXZpdHlJbmRpY2F0b3I+IHRoaXMuYWkubmF0aXZlRWxlbWVudDtcclxuICAgICBhY3Rpdml0eUluZGljYXRvci5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xyXG4gICAgIHRoaXMubWFwU2VydmljZS5nZXRHZW9jb2RlUmVzdWx0cyh0aGlzLnN0YXJ0UGxhY2UgKyAnICcgKyB0aGlzLnN0YXJ0QWRkcmVzcykuc3Vic2NyaWJlKChyZXM6IGFueSkgPT4ge1xyXG4gICAgICB0aGlzLnN0YXJ0TGF0ID0gcmVzLnJlc3VsdHNbMF0uZ2VvbWV0cnkubG9jYXRpb24ubGF0O1xyXG4gICAgICB0aGlzLnN0YXJ0TG5nID0gcmVzLnJlc3VsdHNbMF0uZ2VvbWV0cnkubG9jYXRpb24ubG5nO1xyXG4gICAgICB0aGlzLm1hcFNlcnZpY2UuZ2V0R2VvY29kZVJlc3VsdHModGhpcy5lbmRQbGFjZSArICcgJyArIHRoaXMuZW5kQWRkcmVzcykuc3Vic2NyaWJlKChyZXM6IGFueSkgPT4ge1xyXG4gICAgICAgIHRoaXMuZW5kTGF0ID0gcmVzLnJlc3VsdHNbMF0uZ2VvbWV0cnkubG9jYXRpb24ubGF0O1xyXG4gICAgICAgIHRoaXMuZW5kTG5nID0gcmVzLnJlc3VsdHNbMF0uZ2VvbWV0cnkubG9jYXRpb24ubG5nO1xyXG5cclxuICAgICAgICBpZih0aGlzLnN0YXJ0TG9jYXRpb25QaWNrZWQgJiYgdGhpcy5lbmRMb2NhdGlvblBpY2tlZCkge1xyXG4gICAgICAgICB2YXIgcG9zdGluZ3NDb2xsZWN0aW9uID0gZmlyZWJhc2UuZmlyZXN0b3JlLmNvbGxlY3Rpb24oJ3Bvc3RpbmdzJyk7XHJcbiAgICAgICAgIHBvc3RpbmdzQ29sbGVjdGlvbi5hZGQoe1xyXG4gICAgICAgICAgIHVpZDogdGhpcy51c2VyLmlkLFxyXG4gICAgICAgICAgIHVzZXI6IHRoaXMudXNlci51c2VybmFtZSxcclxuICAgICAgICAgICBzdGFydEFkZHJlc3M6IHRoaXMuc3RhcnRQbGFjZSxcclxuICAgICAgICAgICBlbmRBZGRyZXNzOiB0aGlzLmVuZFBsYWNlLFxyXG4gICAgICAgICAgIHN0YXJ0Rm9ybWF0dGVkOiB0aGlzLnN0YXJ0QWRkcmVzcyxcclxuICAgICAgICAgICBlbmRGb3JtYXR0ZWQ6IHRoaXMuZW5kQWRkcmVzcyxcclxuICAgICAgICAgICBkYXRlOiB0aGlzLmRhdGUsXHJcbiAgICAgICAgICAgcHJpY2U6IHRoaXMucHJpY2UsXHJcbiAgICAgICAgICAgY2FwYWNpdHk6IHRoaXMuY2FwYWNpdHksXHJcbiAgICAgICAgICAgY29tbWVudHM6IFwiXCIsXHJcbiAgICAgICAgICAgZm9ybWF0dGVkRGF0ZTogdGhpcy5mb3JtYXR0ZWREYXRlLFxyXG4gICAgICAgICAgIHN0YXJ0TGF0OiB0aGlzLnN0YXJ0TGF0LFxyXG4gICAgICAgICAgIGVuZExhdDogdGhpcy5lbmRMYXQsXHJcbiAgICAgICAgICAgc3RhcnRMbmc6IHRoaXMuc3RhcnRMbmcsXHJcbiAgICAgICAgICAgZW5kTG5nOiB0aGlzLmVuZExuZ1xyXG4gICAgICAgICB9KS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzKTtcclxuXHJcbiAgICAgICAgICAgZmlyZWJhc2UuZmlyZXN0b3JlLmNvbGxlY3Rpb24oJ3VzZXJzJykuZG9jKHRoaXMudXNlci5pZCkuZ2V0KCkudGhlbihkb2MgPT4ge1xyXG4gICAgICAgICAgICAgdmFyIHBvc3RzOiBTdHJpbmdbXSA9IGRvYy5kYXRhKCkucG9zdHM7XHJcbiAgICAgICAgICAgICBwb3N0cy5wdXNoKHJlcy5pZCk7XHJcbiAgICAgICAgICAgICBmaXJlYmFzZS5maXJlc3RvcmUuY29sbGVjdGlvbigndXNlcnMnKS5kb2ModGhpcy51c2VyLmlkKS51cGRhdGUoe1xyXG4gICAgICAgICAgICAgICBwb3N0czogcG9zdHNcclxuICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICB0aGlzLnVwbG9hZE1hcChyZXMuaWQsICdzbWFsbF9tYXAucG5nJyk7XHJcbiAgICAgICAgICAgICB0aGlzLnVwbG9hZE1hcChyZXMuaWQsICdsYXJnZV9tYXAucG5nJyk7XHJcbiAgICAgICAgICAgfSkuY2F0Y2goKGVycikgPT4ge30pXHJcbiAgICAgICAgIH0pLmNhdGNoKChlcnIpID0+IHt9KVxyXG4gICAgICAgfVxyXG5cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgICAgLy8gdGhpcy5wb3N0aW5nU2VydmljZS5hZGRQb3N0aW5nKHRoaXMudXNlci51c2VybmFtZSwgdGhpcy5zdGFydFBsYWNlLCB0aGlzLmVuZFBsYWNlLCB0aGlzLmRhdGUsIHRoaXMucHJpY2UsIHRoaXMuY2FwYWNpdHksIFwiXCIpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIC8vICAgdGhpcy5jbG9zZSgncG9zdGVkJyk7XHJcbiAgICAgIC8vIH0pO1xyXG4gIH1cclxuXHJcbiAgdXBsb2FkTWFwKGlkLCB1cGxvYWROYW1lKSB7XHJcbiAgICBjb25zdCBjYWNoZSA9IG5ldyBDYWNoZSgpO1xyXG4gICAgY2FjaGUuZW5hYmxlRG93bmxvYWQoKTtcclxuICAgIGxldCBjYWNoZWRJbWFnZVNvdXJjZTtcclxuICAgIHZhciB1cmwgPSB0aGlzLm1hcFNlcnZpY2UuZ2V0U3RhdGljTWFwKHRoaXMuc3RhcnRQbGFjZSArIFwiIFwiICsgdGhpcy5zdGFydEFkZHJlc3MsIHRoaXMuZW5kUGxhY2UgKyBcIiBcIiArIHRoaXMuZW5kQWRkcmVzcyk7XHJcbiAgICBpZih1cGxvYWROYW1lID09ICdsYXJnZV9tYXAucG5nJylcclxuICAgICAgdXJsID0gdGhpcy5tYXBTZXJ2aWNlLmdldFN0YXRpY01hcExhcmdlKHRoaXMuc3RhcnRQbGFjZSArIFwiIFwiICsgdGhpcy5zdGFydEFkZHJlc3MsIHRoaXMuZW5kUGxhY2UgKyBcIiBcIiArIHRoaXMuZW5kQWRkcmVzcyk7XHJcbiAgICAvLyBUcnkgdG8gcmVhZCB0aGUgaW1hZ2UgZnJvbSB0aGUgY2FjaGVcclxuICAgIGNvbnN0IG15SW1hZ2UgPSBjYWNoZS5nZXQodXJsKTtcclxuICAgIGNhY2hlLnB1c2goe1xyXG4gICAga2V5OiB1cmwsXHJcbiAgICB1cmw6IHVybCxcclxuICAgIGNvbXBsZXRlZDogKGltYWdlLCBrZXkpID0+IHtcclxuICAgICAgICAgICAgaWYgKHVybCA9PT0ga2V5KSB7XHJcbiAgICAgICAgICAgICAgICBjYWNoZWRJbWFnZVNvdXJjZSA9IHRoaXMuaW1hZ2VTb3VyY2Uuc2V0TmF0aXZlU291cmNlKGltYWdlKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZvbGRlclBhdGg6IHN0cmluZyA9IGtub3duRm9sZGVycy5kb2N1bWVudHMoKS5wYXRoO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZmlsZU5hbWUgPSB1cGxvYWROYW1lO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZmlsZVBhdGggPSBwYXRoLmpvaW4oZm9sZGVyUGF0aCwgZmlsZU5hbWUpO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2F2ZWQ6IGJvb2xlYW4gPSB0aGlzLmltYWdlU291cmNlLnNhdmVUb0ZpbGUoZmlsZVBhdGgsIFwicG5nXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHNhdmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlyZWJhc2Uuc3RvcmFnZS51cGxvYWRGaWxlKHtcclxuICAgICAgICAgICAgICAgICAgICAgIC8vIHRoZSBmdWxsIHBhdGggb2YgdGhlIGZpbGUgaW4geW91ciBGaXJlYmFzZSBzdG9yYWdlIChmb2xkZXJzIHdpbGwgYmUgY3JlYXRlZClcclxuICAgICAgICAgICAgICAgICAgICAgIHJlbW90ZUZ1bGxQYXRoOiAncG9zdGluZ3MvJyArIGlkICsgJy9tYXBzLycgKyB1cGxvYWROYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgLy8gb3B0aW9uIDE6IGEgZmlsZS1zeXN0ZW0gbW9kdWxlIEZpbGUgb2JqZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICBsb2NhbEZpbGU6IGZzLkZpbGUuZnJvbVBhdGgoZmlsZVBhdGgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgLy8gb3B0aW9uIDI6IGEgZnVsbCBmaWxlIHBhdGggKGlnbm9yZWQgaWYgJ2xvY2FsRmlsZScgaXMgc2V0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgbG9jYWxGdWxsUGF0aDogZmlsZVBhdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAvLyBnZXQgbm90aWZpZWQgb2YgZmlsZSB1cGxvYWQgcHJvZ3Jlc3NcclxuICAgICAgICAgICAgICAgICAgICAgIG9uUHJvZ3Jlc3M6IChzdGF0dXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJVcGxvYWRlZCBmcmFjdGlvbjogXCIgKyBzdGF0dXMuZnJhY3Rpb25Db21wbGV0ZWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlBlcmNlbnRhZ2UgY29tcGxldGU6IFwiICsgc3RhdHVzLnBlcmNlbnRhZ2VDb21wbGV0ZWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pLnRoZW4oKHVwbG9hZGVkRmlsZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWYodXBsb2FkTmFtZSA9PSAnc21hbGxfbWFwLnBuZycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpcmViYXNlLnN0b3JhZ2UuZ2V0RG93bmxvYWRVcmwoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlbW90ZUZ1bGxQYXRoOiAncG9zdGluZ3MvJyArIGlkICsgJy9tYXBzL3NtYWxsX21hcC5wbmcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLnRoZW4oKHVybCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZpcmViYXNlLmZpcmVzdG9yZS5jb2xsZWN0aW9uKCdwb3N0aW5ncycpLmRvYyhpZCkudXBkYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcF91cmw6IHVybFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGFjdGl2aXR5SW5kaWNhdG9yID0gPEFjdGl2aXR5SW5kaWNhdG9yPiB0aGlzLmFpLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgYWRkQ29udGFpbmVyID0gPEZsZXhib3hMYXlvdXQ+IHRoaXMuYWMubmF0aXZlRWxlbWVudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2aXR5SW5kaWNhdG9yLnN0eWxlLnZpc2liaWxpdHkgPSAnY29sbGFwc2UnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkQ29udGFpbmVyLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlKCdwb3N0ZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIG9uUGlja2VyTG9hZGVkKGFyZ3MpIHtcclxuICBcdGxldCBkYXRlUGlja2VyID0gPERhdGVQaWNrZXI+YXJncy5vYmplY3Q7XHJcblxyXG4gIFx0dmFyIHRvZGF5ID0gbmV3IERhdGUoKTtcclxuXHJcbiAgXHRkYXRlUGlja2VyLm1pbkRhdGUgPSBuZXcgRGF0ZSgpO1xyXG5cclxuICBcdHZhciBuZXh0WWVhckRhdGUgPSBuZXcgRGF0ZSh0b2RheSk7XHJcbiAgXHRuZXh0WWVhckRhdGUuc2V0RGF0ZShuZXh0WWVhckRhdGUuZ2V0RGF0ZSgpICsgMzY1KTtcclxuICBcdGRhdGVQaWNrZXIubWF4RGF0ZSA9IG5leHRZZWFyRGF0ZTtcclxuICB9XHJcblxyXG4gIG9uRGF0ZUNoYW5nZWQoYXJncykge1xyXG4gIFx0bGV0IGRhdGVQaWNrZXIgPSA8RGF0ZVBpY2tlcj5hcmdzLm9iamVjdDtcclxuICBcdHZhciBzZWxlY3RlZERhdGUgPSBkYXRlUGlja2VyLmRhdGU7XHJcbiAgICB0aGlzLmZvcm1hdHRlZERhdGUgPSB0aGlzLmRhdGVQaXBlLnRyYW5zZm9ybShzZWxlY3RlZERhdGUsXCJ5eXl5LU1NLWRkXCIpXHJcblxyXG4gIFx0Ly8gY29uc29sZS5sb2coc2VsZWN0ZWREYXRlLnRvU3RyaW5nKCkuc3Vic3RyaW5nKDAsIDE1KSk7XHJcbiAgXHR0aGlzLmRhdGUgPSBzZWxlY3RlZERhdGUudG9TdHJpbmcoKS5zdWJzdHJpbmcoMCwgMTUpO1xyXG4gIH1cclxuXHJcbiAgb25DaGVja2VkQ2hhbmdlKGFyZ3MpIHtcclxuICBcdGxldCBteVN3aXRjaCA9IGFyZ3Mub2JqZWN0IGFzIFN3aXRjaDtcclxuICAgIGxldCBpc0NoZWNrZWQgPSBteVN3aXRjaC5jaGVja2VkOyAvLyBib29sZWFuXHJcblxyXG4gICAgbGV0IGRyaXZpbmdMYWJlbCA9IDxMYWJlbD4gdGhpcy5kbC5uYXRpdmVFbGVtZW50O1xyXG4gICAgbGV0IHJpZGluZ0xhYmVsID0gPExhYmVsPiB0aGlzLnJsLm5hdGl2ZUVsZW1lbnQ7XHJcblxyXG4gICAgaWYoaXNDaGVja2VkKSB7XHJcbiAgICBcdGRyaXZpbmdMYWJlbC5zdHlsZS5mb250V2VpZ2h0ID0gXCI0MDBcIjtcclxuICAgIFx0ZHJpdmluZ0xhYmVsLnN0eWxlLmNvbG9yID0gbmV3IENvbG9yKFwiIzVjNjg3Y1wiKTtcclxuICAgIFx0cmlkaW5nTGFiZWwuc3R5bGUuZm9udFdlaWdodCA9IFwiNzAwXCI7XHJcbiAgICBcdHJpZGluZ0xhYmVsLnN0eWxlLmNvbG9yID0gbmV3IENvbG9yKFwiI2FjMDBlNlwiKTtcclxuICAgIFx0dGhpcy5pc0RyaXZpbmcgPSBmYWxzZTtcclxuICAgIFx0dGhpcy5jYXBhY2l0eSA9IFwiLTFcIjtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgXHRkcml2aW5nTGFiZWwuc3R5bGUuZm9udFdlaWdodCA9IFwiNzAwXCI7XHJcbiAgICBcdGRyaXZpbmdMYWJlbC5zdHlsZS5jb2xvciA9IG5ldyBDb2xvcihcIiNhYzAwZTZcIik7XHJcbiAgICBcdHJpZGluZ0xhYmVsLnN0eWxlLmZvbnRXZWlnaHQgPSBcIjQwMFwiO1xyXG4gICAgXHRyaWRpbmdMYWJlbC5zdHlsZS5jb2xvciA9IG5ldyBDb2xvcihcIiM1YzY4N2NcIik7XHJcbiAgICBcdHRoaXMuaXNEcml2aW5nID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCIvKiBBZGQgbW9iaWxlIHN0eWxlcyBmb3IgdGhlIGNvbXBvbmVudCBoZXJlLiAgKi9cXG4uY2xvc2Uge1xcblxcdG1hcmdpbjogMTA7XFxuXFx0Zm9udC1zaXplOiAyODtcXG5cXHR3aWR0aDogNDg7XFxuXFx0aGVpZ2h0OiA0ODtcXG59XFxuXFxuLmNsb3NlLWJ1dHRvbi1jb250YWluZXIge1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRsZWZ0OiAwO1xcbn1cXG5cXG4ucGF5bWVudC10eXBlLWljb24ge1xcblxcdGhlaWdodDogMzQ7XFxuXFx0d2lkdGg6IDM0O1xcblxcdGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG5cXHRtYXJnaW4tdG9wOiAxODtcXG5cXHRtYXJnaW4tYm90dG9tOiAxODtcXG5cXHRtYXJnaW4tbGVmdDogMzY7XFxufVxcblxcbi5wYXltZW50LWluZm8tbGFiZWwge1xcblxcdGZvbnQtc2l6ZTogMTY7XFxuXFx0Lypmb250LXdlaWdodDogNzAwOyovXFxuXFx0cGFkZGluZzogMzA7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdGNvbG9yOiBibGFjaztcXG59XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPFN0YWNrTGF5b3V0PlxcclxcblxcdDxTdGFja0xheW91dCBjbGFzcz1cXFwiY2xvc2UtYnV0dG9uLWNvbnRhaW5lclxcXCIgb3JpZW50YXRpb249XFxcImhvcml6b250YWxcXFwiPlxcclxcblxcdFxcdDxMYWJlbCB0ZXh0PVxcXCImdGltZXM7XFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiICh0YXApPVxcXCJjbG9zZSgnY2FuY2VsJylcXFwiPjwvTGFiZWw+XFxyXFxuXFx0PC9TdGFja0xheW91dD5cXHJcXG5cXHJcXG5cXHQ8TGlzdFZpZXcgW2l0ZW1zXT1cXFwibWV0aG9kc1xcXCIgc2VwYXJhdG9yQ29sb3I9XFxcInRyYW5zcGFyZW50XFxcIiAoaXRlbVRhcCk9XFxcIm9uU2VsZWN0KCRldmVudClcXFwiPlxcclxcblxcdFxcdDxuZy10ZW1wbGF0ZSBsZXQtaXRlbT1cXFwiaXRlbVxcXCIgbGV0LWk9XFxcImluZGV4XFxcIiBsZXQtb2RkPVxcXCJvZGRcXFwiIGxldC1ldmVuPVxcXCJldmVuXFxcIj5cXHJcXG5cXHRcXHRcXHQ8U3RhY2tMYXlvdXQgW2NsYXNzLm9kZF09XFxcIm9kZFxcXCIgW2NsYXNzLmV2ZW5dPVxcXCJldmVuXFxcIiBvcmllbnRhdGlvbj1cXFwiaG9yaXpvbnRhbFxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0PEltYWdlIFtzcmNdPVxcXCJpdGVtLnBheW1lbnRUeXBlXFxcIiBjbGFzcz1cXFwicGF5bWVudC10eXBlLWljb25cXFwiPjwvSW1hZ2U+XFxyXFxuXFx0XFx0XFx0XFx0PExhYmVsIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiBbdGV4dF09XFxcIml0ZW0uaW5mb1xcXCIgY2xhc3M9XFxcInBheW1lbnQtaW5mby1sYWJlbFxcXCI+PC9MYWJlbD5cXHJcXG5cXHRcXHRcXHQ8L1N0YWNrTGF5b3V0PlxcclxcblxcdFxcdDwvbmctdGVtcGxhdGU+XFxyXFxuXFx0PC9MaXN0Vmlldz5cXHJcXG48L1N0YWNrTGF5b3V0PlwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNb2RhbERpYWxvZ1BhcmFtcyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9kaXJlY3RpdmVzL2RpYWxvZ3NcIjtcclxuaW1wb3J0IHsgTW9kYWxEaWFsb2dTZXJ2aWNlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2RpcmVjdGl2ZXMvZGlhbG9nc1wiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlQXJyYXkgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS1hcnJheSc7XHJcbmltcG9ydCB7IEFkZENhcmRQYXltZW50Q29tcG9uZW50IH0gZnJvbSAnLi4vYWRkLWNhcmQtcGF5bWVudC9hZGQtY2FyZC1wYXltZW50LmNvbXBvbmVudCc7XHJcblxyXG5cclxuY2xhc3MgTWV0aG9kSXRlbSB7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheW1lbnRUeXBlOiBzdHJpbmcsIHB1YmxpYyBpbmZvOiBzdHJpbmcpIHt9XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLWFkZC1wYXltZW50JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vYWRkLXBheW1lbnQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2FkZC1wYXltZW50LmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWRkUGF5bWVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdmNSZWY6IFZpZXdDb250YWluZXJSZWYsIHByaXZhdGUgbW9kYWw6IE1vZGFsRGlhbG9nU2VydmljZSwgcHJpdmF0ZSBwYXJhbXM6IE1vZGFsRGlhbG9nUGFyYW1zKSB7IH1cclxuXHJcbiAgbWV0aG9kcyA9IG5ldyBPYnNlcnZhYmxlQXJyYXk8TWV0aG9kSXRlbT4oKTtcclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgXHR0aGlzLmFkZE1ldGhvZHMoKTtcclxuICB9XHJcblxyXG4gIGFkZE1ldGhvZHMoKSB7XHJcbiAgXHR0aGlzLm1ldGhvZHMucHVzaChuZXcgTWV0aG9kSXRlbSgnfi9pbWcvY3JlZGl0LWNhcmQtaWNvbi5wbmcnLCAnQ3JlZGl0IG9yIERlYml0IENhcmQnKSk7XHJcbiAgXHR0aGlzLm1ldGhvZHMucHVzaChuZXcgTWV0aG9kSXRlbSgnfi9pbWcvcGF5cGFsLWljb24ucG5nJywgJ1BheXBhbCcpKTtcclxuICBcdHRoaXMubWV0aG9kcy5wdXNoKG5ldyBNZXRob2RJdGVtKCd+L2ltZy92ZW5tby1pY29uLnBuZycsICdWZW5tbycpKTtcclxuICB9XHJcblxyXG4gIG9wZW5DYXJkUGF5bWVudCgpIHtcclxuICAgIGxldCBvcHRpb25zID0ge1xyXG4gICAgICAgIGNvbnRleHQ6IHt9LFxyXG4gICAgICAgIGZ1bGxzY3JlZW46IHRydWUsXHJcbiAgICAgICAgdmlld0NvbnRhaW5lclJlZjogdGhpcy52Y1JlZlxyXG4gICAgICAgIC8vIGFuaW1hdGVkOiB0cnVlLFxyXG4gICAgICAgIC8vIHRyYW5zaXRpb246IHsgbmFtZTogXCJzbGlkZVRvcFwiIH1cclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5tb2RhbC5zaG93TW9kYWwoQWRkQ2FyZFBheW1lbnRDb21wb25lbnQsIG9wdGlvbnMpLnRoZW4ocmVzID0+IHtcclxuXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNsb3NlKHJlcykge1xyXG4gIFx0dGhpcy5wYXJhbXMuY2xvc2VDYWxsYmFjayhyZXMpO1xyXG4gIH1cclxuXHJcbiAgb25TZWxlY3QoZXZlbnQpIHtcclxuICBcdC8vZXZlbnQuaW5kZXggc3RvcmVzIHdoaWNoIGluZGV4IHdhcyB0YXBwZWRcclxuICBcdGlmKGV2ZW50LmluZGV4ID09IDApXHJcbiAgXHRcdHRoaXMub3BlbkNhcmRQYXltZW50KCk7XHJcbiAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSAnLi9hcHAuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTG9naW5EaXJlY3RpdmUgfSBmcm9tICcuL2xvZ2luLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IExvZ2luQ29tcG9uZW50IH0gZnJvbSAnLi9sb2dpbi9sb2dpbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSAnLi9ob21lL2hvbWUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgSG9tZURpcmVjdGl2ZSB9IGZyb20gJy4vaG9tZS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBIaXN0b3J5Q29tcG9uZW50IH0gZnJvbSAnLi9oaXN0b3J5L2hpc3RvcnkuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU2V0dGluZ3NDb21wb25lbnQgfSBmcm9tICcuL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEJyb3dzZXJBbmltYXRpb25zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zJztcclxuaW1wb3J0IHsgTmd4UGF5UGFsTW9kdWxlIH0gZnJvbSAnbmd4LXBheXBhbCc7XHJcblxyXG5pbXBvcnQgeyBQb3N0aW5nU2VydmljZSB9IGZyb20gJy4vcG9zdGluZy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tICcuL3VzZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IFRyYW5zZmVyU2VydmljZSB9IGZyb20gJy4vZGF0YXRyYW5zZmVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBEeW5hbWljQWRkU2VydmljZSB9IGZyb20gJy4vZHluYW1pYy1hZGQuc2VydmljZSc7XHJcbmltcG9ydCB7IFBheW1lbnRTZXJ2aWNlIH0gZnJvbSAnLi9wYXltZW50LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQb3N0aW5nQ29tcG9uZW50IH0gZnJvbSAnLi9wb3N0aW5nL3Bvc3RpbmcuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVXBkYXRlQ29tcG9uZW50IH0gZnJvbSAnLi91cGRhdGUvdXBkYXRlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvbm5lY3RDb21wb25lbnQgfSBmcm9tICcuL2Nvbm5lY3QvY29ubmVjdC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlLCBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHtNYXRJbnB1dE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xyXG4vLyBpbXBvcnQgeyBBbXBsaWZ5QW5ndWxhck1vZHVsZSwgQW1wbGlmeVNlcnZpY2UgfSBmcm9tICdhd3MtYW1wbGlmeS1hbmd1bGFyJztcclxuaW1wb3J0IHsgTG9naW5yb3V0ZUNvbXBvbmVudCB9IGZyb20gJy4vbG9naW5yb3V0ZS9sb2dpbnJvdXRlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IERpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4vZGlhbG9nL2RpYWxvZy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOYXZpZ2F0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50JztcclxuXHJcbmltcG9ydCB7IEF1dG9HZW5lcmF0ZWRDb21wb25lbnQgfSBmcm9tICcuL2F1dG8tZ2VuZXJhdGVkL2F1dG8tZ2VuZXJhdGVkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBheW1lbnRzQ29tcG9uZW50IH0gZnJvbSAnLi9wYXltZW50cy9wYXltZW50cy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQYXltZW50TWV0aG9kQ29tcG9uZW50IH0gZnJvbSAnLi9wYXltZW50LW1ldGhvZC9wYXltZW50LW1ldGhvZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTZWFyY2hDb21wb25lbnQgfSBmcm9tICcuL3NlYXJjaC9zZWFyY2guY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGF5bWVudEluZm9Db21wb25lbnQgfSBmcm9tICcuL3BheW1lbnQtaW5mby9wYXltZW50LWluZm8uY29tcG9uZW50J1xyXG5pbXBvcnQgeyBXZWxjb21lQ29tcG9uZW50IH0gZnJvbSAnLi93ZWxjb21lL3dlbGNvbWUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUG9zdGluZ0luZm9Db21wb25lbnQgfSBmcm9tICcuL3Bvc3RpbmctaW5mby9wb3N0aW5nLWluZm8uY29tcG9uZW50JztcclxuaW1wb3J0IHtTZXR0aW5nc2Zvcm1Db21wb25lbnR9IGZyb20gJy4vc2V0dGluZ3Nmb3JtL3NldHRpbmdzZm9ybS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDaGF0Q29tcG9uZW50IH0gZnJvbSAnLi9jaGF0L2NoYXQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ2hhdExpc3RDb21wb25lbnQgfSBmcm9tICcuL2NoYXQtbGlzdC9jaGF0LWxpc3QuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVmlld0ltYWdlQ29tcG9uZW50IH0gZnJvbSAnLi92aWV3LWltYWdlL3ZpZXctaW1hZ2UuY29tcG9uZW50JztcclxuXHJcblxyXG5leHBvcnQgY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXHJcbiAgeyBwYXRoOiAnbG9naW4nLCBjb21wb25lbnQ6IExvZ2luQ29tcG9uZW50IH0sXHJcbiAgeyBwYXRoOiAnJywgICByZWRpcmVjdFRvOiAnL3dlbGNvbWUnLCBwYXRoTWF0Y2g6ICdmdWxsJyB9LFxyXG4gIHsgcGF0aDogJ2hvbWUnLCBjb21wb25lbnQ6IEhvbWVDb21wb25lbnQgfSxcclxuICB7IHBhdGg6ICdoaXN0b3J5JywgY29tcG9uZW50OiBIaXN0b3J5Q29tcG9uZW50IH0sXHJcbiAgeyBwYXRoOiAnc2V0dGluZ3MnLCBjb21wb25lbnQ6IFNldHRpbmdzQ29tcG9uZW50IH0sXHJcbiAgeyBwYXRoOiAndXBkYXRlJywgY29tcG9uZW50OiBVcGRhdGVDb21wb25lbnQgfSxcclxuICB7IHBhdGg6ICdjb25uZWN0JywgY29tcG9uZW50OiBDb25uZWN0Q29tcG9uZW50IH0sXHJcbiAgeyBwYXRoOiAnbG9naW5yb3V0ZScsIGNvbXBvbmVudDogTG9naW5yb3V0ZUNvbXBvbmVudCB9LFxyXG4gIHsgcGF0aDogJ3BheW1lbnRzJywgY29tcG9uZW50OiBQYXltZW50c0NvbXBvbmVudCB9LFxyXG4gIHsgcGF0aDogJ3NlYXJjaCcsIGNvbXBvbmVudDogU2VhcmNoQ29tcG9uZW50IH0sXHJcbiAgeyBwYXRoOiAnbmF2aWdhdGlvbicsIGNvbXBvbmVudDogTmF2aWdhdGlvbkNvbXBvbmVudCB9LFxyXG4gIHsgcGF0aDogJ3BheW1lbnRpbmZvJywgY29tcG9uZW50OiBQYXltZW50SW5mb0NvbXBvbmVudCB9LFxyXG4gIHsgcGF0aDogJ3dlbGNvbWUnLCBjb21wb25lbnQ6IFdlbGNvbWVDb21wb25lbnQgfSxcclxuICB7IHBhdGg6ICdwb3N0aW5nLWluZm8nLCBjb21wb25lbnQ6IFBvc3RpbmdJbmZvQ29tcG9uZW50IH0sXHJcbiAgeyBwYXRoOiAnc2V0dGluZ3Nmb3JtJywgY29tcG9uZW50OiBTZXR0aW5nc2Zvcm1Db21wb25lbnQgfSxcclxuICB7IHBhdGg6ICdjaGF0JywgY29tcG9uZW50OiBDaGF0Q29tcG9uZW50IH0sXHJcbiAgeyBwYXRoOiAnY2hhdC1saXN0JywgY29tcG9uZW50OiBDaGF0TGlzdENvbXBvbmVudCB9LFxyXG4gIHsgcGF0aDogJ3ZpZXctaW1hZ2UnLCBjb21wb25lbnQ6IFZpZXdJbWFnZUNvbXBvbmVudCB9LFxyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzKV0sXHJcbiAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcFJvdXRpbmdNb2R1bGUgeyB9XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCI8IS0tIGh0dHBzOi8vZG9jcy5uYXRpdmVzY3JpcHQub3JnL2FuZ3VsYXIvY29yZS1jb25jZXB0cy9hbmd1bGFyLW5hdmlnYXRpb24uaHRtbCNwYWdlLXJvdXRlci1vdXRsZXQgLS0+XFxyXFxuXFxyXFxuPFBhZ2U+XFxyXFxuXFx0ICAgIDxwYWdlLXJvdXRlci1vdXRsZXQ+PC9wYWdlLXJvdXRlci1vdXRsZXQ+XFxyXFxuPC9QYWdlPlwiIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1yb290JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vYXBwLmNvbXBvbmVudC5odG1sJyxcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgeyB9XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGUnO1xyXG5cclxuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gJy4vYXBwLXJvdXRpbmcubW9kdWxlLnRucyc7XHJcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gJy4vYXBwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEF1dG9HZW5lcmF0ZWRDb21wb25lbnQgfSBmcm9tICcuL2F1dG8tZ2VuZXJhdGVkL2F1dG8tZ2VuZXJhdGVkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBheW1lbnRzQ29tcG9uZW50IH0gZnJvbSAnLi9wYXltZW50cy9wYXltZW50cy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQYXltZW50TWV0aG9kQ29tcG9uZW50IH0gZnJvbSAnLi9wYXltZW50LW1ldGhvZC9wYXltZW50LW1ldGhvZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb25uZWN0Q29tcG9uZW50IH0gZnJvbSAnLi9jb25uZWN0L2Nvbm5lY3QuY29tcG9uZW50JztcclxuaW1wb3J0IHsgSGlzdG9yeUNvbXBvbmVudCB9IGZyb20gJy4vaGlzdG9yeS9oaXN0b3J5LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tICcuL2hvbWUvaG9tZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBMb2dpbkNvbXBvbmVudCB9IGZyb20gJy4vbG9naW4vbG9naW4uY29tcG9uZW50JztcclxuaW1wb3J0IHsgTG9naW5yb3V0ZUNvbXBvbmVudCB9IGZyb20gJy4vbG9naW5yb3V0ZS9sb2dpbnJvdXRlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE5hdmlnYXRpb25Db21wb25lbnQgfSBmcm9tICcuL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQb3N0aW5nQ29tcG9uZW50IH0gZnJvbSAnLi9wb3N0aW5nL3Bvc3RpbmcuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU2V0dGluZ3NDb21wb25lbnQgfSBmcm9tICcuL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFVwZGF0ZUNvbXBvbmVudCB9IGZyb20gJy4vdXBkYXRlL3VwZGF0ZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEaWFsb2dDb21wb25lbnQgfSBmcm9tICcuL2RpYWxvZy9kaWFsb2cuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU2VhcmNoQ29tcG9uZW50IH0gZnJvbSAnLi9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudCc7XHJcblxyXG5pbXBvcnQgeyBMb2dpbkRpcmVjdGl2ZSB9IGZyb20gJy4vbG9naW4uZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgSG9tZURpcmVjdGl2ZSB9IGZyb20gJy4vaG9tZS5kaXJlY3RpdmUnO1xyXG5cclxuaW1wb3J0IHsgUG9zdGluZ1NlcnZpY2UgfSBmcm9tICcuL3Bvc3Rpbmcuc2VydmljZSc7XHJcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSAnLi91c2VyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBUcmFuc2ZlclNlcnZpY2UgfSBmcm9tICcuL2RhdGF0cmFuc2Zlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRHluYW1pY0FkZFNlcnZpY2UgfSBmcm9tICcuL2R5bmFtaWMtYWRkLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQYXltZW50U2VydmljZSB9IGZyb20gJy4vcGF5bWVudC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUGxhY2VzQXV0b2NvbXBsZXRlU2VydmljZSB9IGZyb20gJy4vcGxhY2VzLWF1dG9jb21wbGV0ZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgR29vZ2xlTWFwc1NlcnZpY2UgfSBmcm9tICcuL2dvb2dsZS1tYXBzLnNlcnZpY2UnO1xyXG5cclxuaW1wb3J0IHsgTW9kYWxEaWFsb2dTZXJ2aWNlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL21vZGFsLWRpYWxvZ1wiO1xyXG5cclxuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSwgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7TWF0SW5wdXRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcclxuaW1wb3J0IHsgQWdtQ29yZU1vZHVsZSB9IGZyb20gJ0BhZ20vY29yZSc7XHJcbmltcG9ydCB7IE5neFBheVBhbE1vZHVsZSB9IGZyb20gJ25neC1wYXlwYWwnO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSURhdGFGb3JtTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1kYXRhZm9ybS9hbmd1bGFyXCI7XHJcbmltcG9ydCB7IE5neEJyYWludHJlZU1vZHVsZSB9IGZyb20gJ25neC1icmFpbnRyZWUnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBNYXNrZWRUZXh0RmllbGRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LW1hc2tlZC10ZXh0LWZpZWxkL2FuZ3VsYXJcIjtcclxuXHJcbi8vIFVuY29tbWVudCBhbmQgYWRkIHRvIE5nTW9kdWxlIGltcG9ydHMgaWYgeW91IG5lZWQgdG8gdXNlIHR3by13YXkgYmluZGluZ1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zJztcclxuXHJcbi8vIFVuY29tbWVudCBhbmQgYWRkIHRvIE5nTW9kdWxlIGltcG9ydHMgIGlmIHlvdSBuZWVkIHRvIHVzZSB0aGUgSFRUUCB3cmFwcGVyXHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9odHRwLWNsaWVudCc7XHJcbmltcG9ydCB7IEZsb2F0QnRuQ29tcG9uZW50IH0gZnJvbSAnLi9mbG9hdC1idG4vZmxvYXQtYnRuLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEFkZE1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi9hZGQtbW9kYWwvYWRkLW1vZGFsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IExvY2F0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9sb2NhdGlvbi9sb2NhdGlvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBZGRQYXltZW50Q29tcG9uZW50IH0gZnJvbSAnLi9hZGQtcGF5bWVudC9hZGQtcGF5bWVudC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBZGRDYXJkUGF5bWVudENvbXBvbmVudCB9IGZyb20gJy4vYWRkLWNhcmQtcGF5bWVudC9hZGQtY2FyZC1wYXltZW50LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBheW1lbnRJbmZvQ29tcG9uZW50IH0gZnJvbSAnLi9wYXltZW50LWluZm8vcGF5bWVudC1pbmZvLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvbmZpcm1hdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vY29uZmlybWF0aW9uL2NvbmZpcm1hdGlvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNZXNzYWdlTW9kYWxDb21wb25lbnQgfSBmcm9tICcuL21lc3NhZ2UtbW9kYWwvbWVzc2FnZS1tb2RhbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBXZWxjb21lQ29tcG9uZW50IH0gZnJvbSAnLi93ZWxjb21lL3dlbGNvbWUuY29tcG9uZW50JztcclxuaW1wb3J0ICogYXMgYXBwbGljYXRpb24gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvbic7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZhY2Vib29rTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1mYWNlYm9vay9hbmd1bGFyXCI7XHJcbmltcG9ydCAqIGFzIG5zRmFjZWJvb2sgZnJvbSAnbmF0aXZlc2NyaXB0LWZhY2Vib29rJztcclxuaW1wb3J0IHsgRGF0ZVBpcGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBQb3N0aW5nSW5mb0NvbXBvbmVudCB9IGZyb20gJy4vcG9zdGluZy1pbmZvL3Bvc3RpbmctaW5mby5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBpc0lPUyB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm0nO1xyXG5kZWNsYXJlIHZhciBHTVNTZXJ2aWNlczogYW55O1xyXG5pbXBvcnQgeyBTZXR0aW5nc2Zvcm1Db21wb25lbnQgfSBmcm9tICcuL3NldHRpbmdzZm9ybS9zZXR0aW5nc2Zvcm0uY29tcG9uZW50JztcclxuaW1wb3J0IHsgUmVhdXRoQ29tcG9uZW50IH0gZnJvbSAnLi9yZWF1dGgvcmVhdXRoLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENoYXRDb21wb25lbnQgfSBmcm9tICcuL2NoYXQvY2hhdC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDaGF0TGlzdENvbXBvbmVudCB9IGZyb20gJy4vY2hhdC1saXN0L2NoYXQtbGlzdC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBWaWV3SW1hZ2VDb21wb25lbnQgfSBmcm9tICcuL3ZpZXctaW1hZ2Uvdmlldy1pbWFnZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyByZWdpc3RlckVsZW1lbnQgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9lbGVtZW50LXJlZ2lzdHJ5JztcclxucmVnaXN0ZXJFbGVtZW50KCdGYWInLCAoKSA9PiByZXF1aXJlKCdAbnN0dWRpby9uYXRpdmVzY3JpcHQtZmxvYXRpbmdhY3Rpb25idXR0b24nKS5GYWIpO1xyXG5yZWdpc3RlckVsZW1lbnQoXCJQdWxsVG9SZWZyZXNoXCIsICgpID0+IHJlcXVpcmUoXCJAbnN0dWRpby9uYXRpdmVzY3JpcHQtcHVsbHRvcmVmcmVzaFwiKS5QdWxsVG9SZWZyZXNoKTtcclxuaW1wb3J0IHsgRm9yZ2V0Rm9ybUNvbXBvbmVudCB9IGZyb20gJy4vZm9yZ2V0LWZvcm0vZm9yZ2V0LWZvcm0uY29tcG9uZW50JztcclxuXHJcblxyXG4vLyByZXF1aXJlKCduYXRpdmVzY3JpcHQtbm9kZWlmeScpXHJcbi8vIGltcG9ydCB7IEFtcGxpZnlBbmd1bGFyTW9kdWxlLCBBbXBsaWZ5U2VydmljZSB9IGZyb20gJ2F3cy1hbXBsaWZ5LWFuZ3VsYXInO1xyXG5cclxuLy8gaW1wb3J0IHsgQW5ndWxhckZpcmVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9maXJlJztcclxuLy8gaW1wb3J0IHsgQW5ndWxhckZpcmVzdG9yZU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2ZpcmUvZmlyZXN0b3JlJztcclxuLy8gaW1wb3J0IHsgQW5ndWxhckZpcmVTdG9yYWdlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZmlyZS9zdG9yYWdlJztcclxuLy8gaW1wb3J0IHsgQW5ndWxhckZpcmVBdXRoTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZmlyZS9hdXRoJztcclxuLy8gaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tICcuLi9lbnZpcm9ubWVudHMvZW52aXJvbm1lbnQnO1xyXG5pZiAoaXNJT1MpIHsgXHJcbiAgR01TU2VydmljZXMucHJvdmlkZUFQSUtleShcIkFJemFTeUFJVHhTMWptZjhQTXRhelJndVdjQWZXUXhXMWtQT29ZZ1wiKTtcclxufVxyXG5cclxuYXBwbGljYXRpb24ub24oYXBwbGljYXRpb24ubGF1bmNoRXZlbnQsIGZ1bmN0aW9uIChhcmdzKSB7XHJcbiAgICBuc0ZhY2Vib29rLmluaXQoXCIyMjcyMTI5NjQ5Njc3NzQ3XCIpO1xyXG59KTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBBcHBDb21wb25lbnQsXHJcbiAgICBMb2dpbkRpcmVjdGl2ZSxcclxuICAgIExvZ2luQ29tcG9uZW50LFxyXG4gICAgSG9tZUNvbXBvbmVudCxcclxuICAgIEhvbWVEaXJlY3RpdmUsXHJcbiAgICBIaXN0b3J5Q29tcG9uZW50LFxyXG4gICAgU2V0dGluZ3NDb21wb25lbnQsXHJcbiAgICBQb3N0aW5nQ29tcG9uZW50LFxyXG4gICAgVXBkYXRlQ29tcG9uZW50LFxyXG4gICAgQ29ubmVjdENvbXBvbmVudCxcclxuICAgIExvZ2lucm91dGVDb21wb25lbnQsXHJcbiAgICBEaWFsb2dDb21wb25lbnQsXHJcbiAgICBOYXZpZ2F0aW9uQ29tcG9uZW50LFxyXG4gICAgQXV0b0dlbmVyYXRlZENvbXBvbmVudCxcclxuICAgIFBheW1lbnRzQ29tcG9uZW50LFxyXG4gICAgUGF5bWVudE1ldGhvZENvbXBvbmVudCxcclxuICAgIFNlYXJjaENvbXBvbmVudCxcclxuICAgIEZsb2F0QnRuQ29tcG9uZW50LFxyXG4gICAgQWRkTW9kYWxDb21wb25lbnQsXHJcbiAgICBMb2NhdGlvbkNvbXBvbmVudCxcclxuICAgIEFkZFBheW1lbnRDb21wb25lbnQsXHJcbiAgICBBZGRDYXJkUGF5bWVudENvbXBvbmVudCxcclxuICAgIFBheW1lbnRJbmZvQ29tcG9uZW50LFxyXG4gICAgQ29uZmlybWF0aW9uQ29tcG9uZW50LFxyXG4gICAgTWVzc2FnZU1vZGFsQ29tcG9uZW50LFxyXG4gICAgV2VsY29tZUNvbXBvbmVudCxcclxuICAgIFBvc3RpbmdJbmZvQ29tcG9uZW50LFxyXG4gICAgU2V0dGluZ3Nmb3JtQ29tcG9uZW50LFxyXG4gICAgUmVhdXRoQ29tcG9uZW50LFxyXG4gICAgQ2hhdENvbXBvbmVudCxcclxuICAgIENoYXRMaXN0Q29tcG9uZW50LFxyXG4gICAgVmlld0ltYWdlQ29tcG9uZW50LFxyXG4gICAgRm9yZ2V0Rm9ybUNvbXBvbmVudCxcclxuICBdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcclxuICAgIEFwcFJvdXRpbmdNb2R1bGUsXHJcbiAgICBOYXRpdmVTY3JpcHRIdHRwQ2xpZW50TW9kdWxlLFxyXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcclxuICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxyXG4gICAgTWF0SW5wdXRNb2R1bGUsXHJcbiAgICBBZ21Db3JlTW9kdWxlLmZvclJvb3Qoe1xyXG4gICAgICBhcGlLZXk6ICdBSXphU3lBSVR4UzFqbWY4UE10YXpSZ3VXY0FmV1F4VzFrUE9vWWcnXHJcbiAgICB9KSxcclxuICAgIE5neFBheVBhbE1vZHVsZSxcclxuICAgIE5hdGl2ZVNjcmlwdFVJRGF0YUZvcm1Nb2R1bGUsXHJcbiAgICAvLyBOZ3hCcmFpbnRyZWVNb2R1bGUsXHJcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxyXG4gICAgTmF0aXZlU2NyaXB0RmFjZWJvb2tNb2R1bGUsXHJcbiAgICBNYXNrZWRUZXh0RmllbGRNb2R1bGVcclxuICAgIC8vIEFuZ3VsYXJGaXJlTW9kdWxlLmluaXRpYWxpemVBcHAoZW52aXJvbm1lbnQuZmlyZWJhc2UpLFxyXG4gICAgLy8gQW5ndWxhckZpcmVzdG9yZU1vZHVsZSwgLy8gaW1wb3J0cyBmaXJlYmFzZS9maXJlc3RvcmUsIG9ubHkgbmVlZGVkIGZvciBkYXRhYmFzZSBmZWF0dXJlc1xyXG4gICAgLy8gQW5ndWxhckZpcmVBdXRoTW9kdWxlLCAvLyBpbXBvcnRzIGZpcmViYXNlL2F1dGgsIG9ubHkgbmVlZGVkIGZvciBhdXRoIGZlYXR1cmVzLFxyXG4gICAgLy8gQW5ndWxhckZpcmVTdG9yYWdlTW9kdWxlIC8vIGltcG9ydHMgZmlyZWJhc2Uvc3RvcmFnZSBvbmx5IG5lZWRlZCBmb3Igc3RvcmFnZSBmZWF0dXJlc1xyXG4gIF0sXHJcbiAgcHJvdmlkZXJzOiBbUG9zdGluZ1NlcnZpY2UsIFRyYW5zZmVyU2VydmljZSwgRHluYW1pY0FkZFNlcnZpY2UsIFVzZXJTZXJ2aWNlLCBQYXltZW50U2VydmljZSwgTW9kYWxEaWFsb2dTZXJ2aWNlLCBQbGFjZXNBdXRvY29tcGxldGVTZXJ2aWNlLCBcclxuICBEYXRlUGlwZSwgR29vZ2xlTWFwc1NlcnZpY2VdLFxyXG4gIGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF0sXHJcbiAgZW50cnlDb21wb25lbnRzOiBbUG9zdGluZ0NvbXBvbmVudCwgUGF5bWVudE1ldGhvZENvbXBvbmVudCwgQWRkTW9kYWxDb21wb25lbnQsIExvY2F0aW9uQ29tcG9uZW50LCBBZGRQYXltZW50Q29tcG9uZW50LCBBZGRDYXJkUGF5bWVudENvbXBvbmVudCwgXHJcbiAgUGF5bWVudEluZm9Db21wb25lbnQsIENvbmZpcm1hdGlvbkNvbXBvbmVudCwgU2V0dGluZ3Nmb3JtQ29tcG9uZW50LCBSZWF1dGhDb21wb25lbnQsIEZvcmdldEZvcm1Db21wb25lbnRdLFxyXG4gIHNjaGVtYXM6IFtOT19FUlJPUlNfU0NIRU1BXVxyXG59KVxyXG4vKlxyXG5QYXNzIHlvdXIgYXBwbGljYXRpb24gbW9kdWxlIHRvIHRoZSBib290c3RyYXBNb2R1bGUgZnVuY3Rpb24gbG9jYXRlZCBpbiBtYWluLnRzIHRvIHN0YXJ0IHlvdXIgYXBwXHJcbiovXHJcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCIvKiBBZGQgbW9iaWxlIHN0eWxlcyBmb3IgdGhlIGNvbXBvbmVudCBoZXJlLiAgKi9cXHJcXG5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8QnV0dG9uIHRleHQ9XFxcImF1dG8tZ2VuZXJhdGVkIHdvcmtzIVxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCI+PC9CdXR0b24+XCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtYXV0by1nZW5lcmF0ZWQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9hdXRvLWdlbmVyYXRlZC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vYXV0by1nZW5lcmF0ZWQuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBdXRvR2VuZXJhdGVkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG5cclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLyogQWRkIG1vYmlsZSBzdHlsZXMgZm9yIHRoZSBjb21wb25lbnQgaGVyZS4gICovXFxuTGFiZWwge1xcblxcdHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblxcbi5uYW1lLWxhYmVsIHtcXG5cXHRtYXJnaW4tdG9wOiAxNjtcXG5cXHRtYXJnaW4tbGVmdDogMTg7XFxuXFx0Y29sb3I6IGJsYWNrO1xcblxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxuXFx0Zm9udC1zaXplOiAxNztcXG59XFxuXFxuLmluZm8tbGFiZWwge1xcblxcdG1hcmdpbi10b3A6IDQ7XFxuXFx0bWFyZ2luLWxlZnQ6IDE4O1xcblxcdG1hcmdpbi1ib3R0b206IDE2O1xcblxcdGNvbG9yOiAjNjk2OTY5O1xcbn1cXG5cXG4ucHJvZmlsZS1waWN0dXJlIHtcXG5cXHRoZWlnaHQ6IDYwO1xcblxcdHdpZHRoOiA2MDtcXG5cXHRib3JkZXItcmFkaXVzOiAxMDAlO1xcblxcdHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XFxuXFx0bWFyZ2luLWxlZnQ6IDE2O1xcblxcdG1hcmdpbi10b3A6IDE0O1xcblxcdG1hcmdpbi1ib3R0b206IDE0O1xcbn1cXG5cXG4ubWVzc2FnZSB7XFxuXFx0Ym9yZGVyLWJvdHRvbS13aWR0aDogMTtcXG5cXHRib3JkZXItY29sb3I6ICNmMWYxZjE7XFxuXFx0bWFyZ2luLXRvcDogNTA7XFxuXFx0bWFyZ2luLWJvdHRvbTogNTA7XFxufVxcblxcbi5yZWZyZXNoIHtcXG5cXHRjb2xvcjogI2FjMDBlNjtcXG59XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPFBhZ2UuYWN0aW9uQmFyPlxcclxcbiAgICA8QWN0aW9uQmFyIHRpdGxlPVxcXCJNZXNzYWdlc1xcXCI+XFxyXFxuICAgIFxcdDxOYXZpZ2F0aW9uQnV0dG9uIHRleHQ9XFxcIkdvIEJhY2tcXFwiIGFuZHJvaWQuc3lzdGVtSWNvbj1cXFwiaWNfbWVudV9iYWNrXFxcIiAodGFwKT1cXFwib25OYXZCdG5UYXAoKVxcXCI+PC9OYXZpZ2F0aW9uQnV0dG9uPlxcclxcbiAgICA8L0FjdGlvbkJhcj5cXHJcXG48L1BhZ2UuYWN0aW9uQmFyPlxcclxcblxcclxcbjxQdWxsVG9SZWZyZXNoIChyZWZyZXNoKT1cXFwicmVmcmVzaExpc3QoJGV2ZW50KVxcXCIgY2xhc3M9XFxcInJlZnJlc2hcXFwiPlxcclxcblxcdDxMaXN0VmlldyBbaXRlbXNdPVxcXCJtZXNzYWdlc1xcXCIgKGl0ZW1UYXApPVxcXCJvbkl0ZW1UYXAoJGV2ZW50KVxcXCIgI2xpc3RWaWV3IGlkPVxcXCJsaXN0Vmlld1xcXCI+XFxyXFxuXFx0ICAgIDxuZy10ZW1wbGF0ZSBsZXQtaXRlbT1cXFwiaXRlbVxcXCIgbGV0LWk9XFxcImluZGV4XFxcIiBsZXQtb2RkPVxcXCJvZGRcXFwiIGxldC1ldmVuPVxcXCJldmVuXFxcIj5cXHJcXG5cXHQgICAgICAgIDxTdGFja0xheW91dCBbY2xhc3Mub2RkXT1cXFwib2RkXFxcIiBbY2xhc3MuZXZlbl09XFxcImV2ZW5cXFwiIGNsYXNzPVxcXCJtZXNzYWdlXFxcIiBvcmllbnRhdGlvbj1cXFwiaG9yaXpvbnRhbFxcXCI+XFxyXFxuXFx0ICAgICAgICBcXHQgIFxcdDxJbWFnZSBbc3JjXT1cXFwiaXRlbS5wZnBTb3VyY2VcXFwiIGNsYXNzPVxcXCJwcm9maWxlLXBpY3R1cmVcXFwiIHN0cmV0Y2g9XFxcImFzcGVjdEZpdFxcXCI+PC9JbWFnZT5cXHJcXG5cXHQgICAgICAgIFxcdCAgXFx0PFN0YWNrTGF5b3V0PlxcclxcblxcdFxcdCAgICAgICAgICAgICAgXFx0PExhYmVsIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiBpZD1cXFwicG9zdC1uYW1lXFxcIiBjbGFzcz1cXFwibmFtZS1sYWJlbFxcXCIgW3RleHRdPVxcXCJpdGVtLmRpc3BsYXlOYW1lXFxcIj48L0xhYmVsPlxcclxcblxcdFxcdCAgICAgICAgICAgICAgXFx0PExhYmVsIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiBpZD1cXFwicG9zdC1pbmZvXFxcIiBjbGFzcz1cXFwiaW5mby1sYWJlbFxcXCIgW3RleHRdPVxcXCJpdGVtLm1lc3NhZ2VcXFwiPjwvTGFiZWw+XFxyXFxuXFx0XFx0ICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXHJcXG5cXHQgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxyXFxuXFx0ICAgIDwvbmctdGVtcGxhdGU+XFxyXFxuXFx0PC9MaXN0Vmlldz5cXHJcXG48L1B1bGxUb1JlZnJlc2g+XCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgRWxlbWVudFJlZiwgVmlld0NoaWxkLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRyYW5zZmVyU2VydmljZSB9IGZyb20gJy4uL2RhdGF0cmFuc2Zlci5zZXJ2aWNlJztcclxuaW1wb3J0ICogYXMgZmlyZWJhc2UgZnJvbSAnbmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZSc7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBMb2dpbmNoZWNrU2VydmljZSB9IGZyb20gJy4uL2xvZ2luY2hlY2suc2VydmljZS50bnMnO1xyXG5pbXBvcnQgeyBDaGF0TWVzc2FnZSB9IGZyb20gJy4uL21vZGVscy9jaGF0LW1lc3NhZ2UubW9kZWwnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlQXJyYXkgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS1hcnJheSc7XHJcbmltcG9ydCB7IExpc3RWaWV3IH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9saXN0LXZpZXcnO1xyXG5cclxuY2xhc3MgTWVzc2FnZUl0ZW0ge1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBjaGF0TWVzc2FnZTogQ2hhdE1lc3NhZ2UsIHB1YmxpYyBsYXN0Q2hhdDogc3RyaW5nLCBwdWJsaWMgY2hhdElkOiBzdHJpbmcsIHB1YmxpYyBwZnBTb3VyY2U6IHN0cmluZywgXHJcbiAgICBwdWJsaWMgZGlzcGxheU5hbWU6IHN0cmluZywgcHVibGljIG1lc3NhZ2U6IHN0cmluZykge31cclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtY2hhdC1saXN0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY2hhdC1saXN0LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jaGF0LWxpc3QuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDaGF0TGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdHJhbnNmZXJTZXJ2aWNlOiBUcmFuc2ZlclNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zLCBwcml2YXRlIGxvZ2luY2hlY2tTZXJ2aWNlOiBMb2dpbmNoZWNrU2VydmljZSxcclxuICBcdHByaXZhdGUgdmNSZWY6IFZpZXdDb250YWluZXJSZWYpIHsgfVxyXG5cclxuICBtZXNzYWdlcyA9IG5ldyBPYnNlcnZhYmxlQXJyYXk8TWVzc2FnZUl0ZW0+KCk7XHJcbiAgcmVmcmVzaE1lc3NhZ2VzID0gbmV3IE9ic2VydmFibGVBcnJheTxNZXNzYWdlSXRlbT4oKTtcclxuICB1c2VySWQ6IHN0cmluZztcclxuICBjaGF0SWRzOiBbc3RyaW5nXTtcclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgXHR0aGlzLnVzZXJJZCA9IHRoaXMubG9naW5jaGVja1NlcnZpY2UuZ2V0VXNlcigpO1xyXG4gICAgdGhpcy5sb2FkTWVzc2FnZXMoKTtcclxuICB9XHJcblxyXG4gIGxvYWRNZXNzYWdlcyhhcmdzPW51bGwpIHtcclxuICBcdGZpcmViYXNlLmZpcmVzdG9yZS5jb2xsZWN0aW9uKCd1c2VycycpLmRvYyh0aGlzLnVzZXJJZCkuZ2V0KCkudGhlbigoZG9jKSA9PiB7XHJcbiAgXHRcdHRoaXMuY2hhdElkcyA9IGRvYy5kYXRhKCkuY2hhdHM7XHJcbiAgICB9KS50aGVuKGFzeW5jIChyZXMpID0+IHtcclxuICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHRoaXMuY2hhdElkcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IGNoYXRQcm9taXNlID0gYXdhaXQgZmlyZWJhc2UuZmlyZXN0b3JlLmNvbGxlY3Rpb24oJ2NoYXRzJykuZG9jKHRoaXMuY2hhdElkc1tpXSkuZ2V0KCkudGhlbihhc3luYyAoZG9jKSA9PiB7XHJcbiAgICAgICAgICBsZXQgZGF0YSA9IGRvYy5kYXRhKCk7XHJcbiAgICAgICAgICBsZXQgZG9jSWQgPSBkb2MuaWQ7XHJcbiAgICAgICAgICB2YXIgY2hhdE5hbWUgPSAnWW91LCAnO1xyXG4gICAgICAgICAgdmFyIG5vblVzZXJJbmRleCA9IDA7XHJcbiAgICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgZGF0YS51c2Vycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZihkYXRhLnVzZXJzW2ldLnVpZCAhPT10aGlzLnVzZXJJZCkge1xyXG4gICAgICAgICAgICAgIG5vblVzZXJJbmRleCA9IGk7XHJcbiAgICAgICAgICAgICAgaWYoaSA9PT0gZGF0YS51c2Vycy5sZW5ndGggLSAxKVxyXG4gICAgICAgICAgICAgICAgY2hhdE5hbWUgKz0gJ2FuZCAnICsgZGF0YS51c2Vyc1tpXS5kaXNwbGF5TmFtZTtcclxuICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICBjaGF0TmFtZSArPSBkYXRhLnVzZXJzW2ldLmRpc3BsYXlOYW1lICsgJywgJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYoZGF0YS5jaGF0c1swXSkge1xyXG4gICAgICAgICAgICBsZXQgbGFzdE1zZyA9IGRhdGEuY2hhdHNbZGF0YS5jaGF0cy5sZW5ndGggLSAxXTtcclxuICAgICAgICAgICAgY29uc3QgYWRkUHJvbWlzZSA9IGF3YWl0IHRoaXMuYWRkTWVzc2FnZShsYXN0TXNnLCBkYXRhLCBkb2NJZCwgY2hhdE5hbWUsIG5vblVzZXJJbmRleCk7IFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLy8gY29uc3QgdW5zdWJzY3JpYmUgPSBmaXJlYmFzZS5maXJlc3RvcmUuY29sbGVjdGlvbignY2hhdHMnKS5kb2ModGhpcy5jaGF0SWRzW2ldKS5vblNuYXBzaG90KHtpbmNsdWRlTWV0YWRhdGFDaGFuZ2VzOiB0cnVlfSwgZG9jID0+IHtcclxuICAgICAgICAvLyAgIHRoaXMucmVmcmVzaExpc3QobnVsbCk7XHJcbiAgICAgICAgLy8gfSlcclxuICAgICAgfVxyXG4gICAgICBpZihhcmdzICE9IG51bGwpXHJcbiAgICAgIHtcclxuICAgICAgICB2YXIgcHVsbFJlZnJlc2ggPSBhcmdzLm9iamVjdDtcclxuICAgICAgICBwdWxsUmVmcmVzaC5yZWZyZXNoaW5nID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5yZWZyZXNoTWVzc2FnZXMuc29ydChmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgICAgIGlmKGEubGFzdENoYXQgPiBiLmxhc3RDaGF0KVxyXG4gICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgIGVsc2UgaWYoYi5sYXN0Q2hhdCA8IGEubGFzdENoYXQpXHJcbiAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICByZXR1cm4gMDtcclxuICAgICAgfSlcclxuICAgICAgdGhpcy5tZXNzYWdlcy5zcGxpY2UoMCk7XHJcbiAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLnJlZnJlc2hNZXNzYWdlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHRoaXMubWVzc2FnZXMucHVzaCh0aGlzLnJlZnJlc2hNZXNzYWdlcy5nZXRJdGVtKGkpKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnJlZnJlc2hNZXNzYWdlcy5zcGxpY2UoMCk7XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgYWRkTWVzc2FnZShsYXN0TXNnLCBkYXRhLCBkb2NJZCwgY2hhdE5hbWUsIG5vblVzZXJJbmRleCkge1xyXG4gICAgaWYobGFzdE1zZy51c2VySWQgIT09IHRoaXMudXNlcklkKSB7XHJcbiAgICAgIGNvbnN0IHVzZXJQcm9taXNlID0gYXdhaXQgZmlyZWJhc2UuZmlyZXN0b3JlLmNvbGxlY3Rpb24oJ3VzZXJzJykuZG9jKGxhc3RNc2cudXNlcklkKS5nZXQoKS50aGVuKChkb2MpID0+IHtcclxuICAgICAgICBsZXQgcHJvZmlsZVNvdXJjZSA9IGRvYy5kYXRhKCkucHJvZmlsZV9zb3VyY2U7XHJcbiAgICAgICAgaWYoZGF0YS51c2Vycy5sZW5ndGggPT09IDIpXHJcbiAgICAgICAgICB0aGlzLnJlZnJlc2hNZXNzYWdlcy5wdXNoKG5ldyBNZXNzYWdlSXRlbShsYXN0TXNnLCBkYXRhLmxhc3RDaGF0LCBkb2NJZCwgcHJvZmlsZVNvdXJjZSwgbGFzdE1zZy5kaXNwbGF5TmFtZSwgZG9jLmRhdGEoKS5maXJzdF9uYW1lICsgJzogJyArIGxhc3RNc2cubWVzc2FnZSkpO1xyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5yZWZyZXNoTWVzc2FnZXMucHVzaChuZXcgTWVzc2FnZUl0ZW0obGFzdE1zZywgZGF0YS5sYXN0Q2hhdCwgZG9jSWQsIHByb2ZpbGVTb3VyY2UsIGNoYXROYW1lLCBkb2MuZGF0YSgpLmZpcnN0X25hbWUgKyAnOiAnICsgbGFzdE1zZy5tZXNzYWdlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9KVxyXG4gICAgICByZXR1cm4gdGhpcy5yZWZyZXNoTWVzc2FnZXM7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgY29uc3QgdXNlclByb21pc2UgPSBhd2FpdCBmaXJlYmFzZS5maXJlc3RvcmUuY29sbGVjdGlvbigndXNlcnMnKS5kb2MoZGF0YS51c2Vyc1tub25Vc2VySW5kZXhdLnVpZCkuZ2V0KCkudGhlbigoZG9jKSA9PiB7XHJcbiAgICAgICAgbGV0IHByb2ZpbGVTb3VyY2UgPSBkb2MuZGF0YSgpLnByb2ZpbGVfc291cmNlO1xyXG4gICAgICAgIGlmKGRhdGEudXNlcnMubGVuZ3RoID09PSAyKVxyXG4gICAgICAgICAgdGhpcy5yZWZyZXNoTWVzc2FnZXMucHVzaChuZXcgTWVzc2FnZUl0ZW0obGFzdE1zZywgZGF0YS5sYXN0Q2hhdCwgZG9jSWQsIHByb2ZpbGVTb3VyY2UsIFxyXG4gICAgICAgICAgICBkb2MuZGF0YSgpLmZpcnN0X25hbWUgKyAnICcgKyBkb2MuZGF0YSgpLmxhc3RfbmFtZSwgJ1lvdTogJyArIGxhc3RNc2cubWVzc2FnZSkpO1xyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5yZWZyZXNoTWVzc2FnZXMucHVzaChuZXcgTWVzc2FnZUl0ZW0obGFzdE1zZywgZGF0YS5sYXN0Q2hhdCwgZG9jSWQsIHByb2ZpbGVTb3VyY2UsIFxyXG4gICAgICAgICAgICBjaGF0TmFtZSwgJ1lvdTogJyArIGxhc3RNc2cubWVzc2FnZSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfSlcclxuICAgICAgcmV0dXJuIHRoaXMucmVmcmVzaE1lc3NhZ2VzO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVmcmVzaExpc3QoYXJncykge1xyXG4gICAgdGhpcy5sb2FkTWVzc2FnZXMoYXJncyk7XHJcbiAgfVxyXG5cclxuICBvbkl0ZW1UYXAoYXJncykge1xyXG4gIFx0bGV0IGNoYXRJZCA9IHRoaXMubWVzc2FnZXMuZ2V0SXRlbShhcmdzLmluZGV4KS5jaGF0SWQ7XHJcbiAgXHR0aGlzLnRyYW5zZmVyU2VydmljZS5zZXREYXRhKGNoYXRJZCk7XHJcbiAgXHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ2NoYXQnXSlcclxuICB9XHJcblxyXG4gIG9uTmF2QnRuVGFwKCkge1xyXG4gICAgaWYodGhpcy5yb3V0ZXIuY2FuR29CYWNrKVxyXG4gICAgICB0aGlzLnJvdXRlci5iYWNrKCk7XHJcbiAgICBlbHNlXHJcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnbmF2aWdhdGlvbiddLCB7Y2xlYXJIaXN0b3J5OiB0cnVlfSlcclxuICB9XHJcblxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCIvKiBBZGQgbW9iaWxlIHN0eWxlcyBmb3IgdGhlIGNvbXBvbmVudCBoZXJlLiAgKi9cXG5CdXR0b24ge1xcbiAgICBwYWRkaW5nOiA1O1xcbiAgICBtYXJnaW46IDU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGRvZGdlcmJsdWU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgaGVpZ2h0OiA0MDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTtcXG59XFxuXFxuLmNoYXQtYnV0dG9uIHtcXG5cXHRwYWRkaW5nLWxlZnQ6IDU7XFxuXFx0cGFkZGluZy1yaWdodDogNTtcXG5cXHRtYXJnaW46IDU7XFxuXFx0aGVpZ2h0OiAyMDtcXG5cXHR3aWR0aDogMjA7XFxufVxcblxcbi5pbWctYnV0dG9uIHtcXG5cXHRtYXJnaW46IDU7XFxuXFx0bWFyZ2luLWxlZnQ6IDM7XFxuXFx0bWFyZ2luLXJpZ2h0OiA3O1xcblxcdGhlaWdodDogMjA7XFxuXFx0d2lkdGg6IDIwO1xcbn1cXG5cXG4uY2hhdC10ZXh0LWZpZWxkIHtcXG4gICAgcGFkZGluZzogNTsgXFxuICAgIC8qYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7ICovXFxuICAgIC8qYm9yZGVyLXJhZGl1czogNDsqL1xcbiAgICAvKmJvdHRvbS1ib3JkZXItY29sb3I6ICM2OTY5Njk7Ki9cXG59XFxuXFxuLmF1dGhvci1pbWcge1xcbiAgICBtYXJnaW46IDAgNSA1IDU7XFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxuICAgIHdpZHRoOiA0MDtcXG4gICAgaGVpZ2h0OiA0MDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcXG59XFxuXFxuLmltZyB7XFxuXFx0bWFyZ2luOiA1O1xcblxcdGJvcmRlci1yYWRpdXM6IDEwO1xcblxcdGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcXG59XFxuXFxuLnRoZWlyc0ltZyB7XFxuXFx0bWFyZ2luOiA1O1xcblxcdG1hcmdpbi1sZWZ0OiA1MjtcXG5cXHRib3JkZXItcmFkaXVzOiAxMDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxufVxcblxcbi5taW5lIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2FjMDBlNjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiA4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDE0O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTU7XFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1O1xcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNTtcXG4gICAgZm9udC1zaXplOiAxNjtcXG4gICAgbWF4LXdpZHRoOiA2MCU7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIC8qbWFyZ2luLWJvdHRvbTogMTI7Ki9cXG59XFxuXFxuLm1pbmVDb250aW51YXRpb24ge1xcblxcdG1hcmdpbi1ib3R0b206IDA7XFxuXFx0Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE1O1xcbn1cXG5cXG4ubWluZUNvbnRpbnVhdGlvbkdyaWQge1xcblxcdGZvbnQtc2l6ZTogMTQ7XFxuICAgIHBhZGRpbmc6IDU7XFxuXFx0cGFkZGluZy10b3A6IDA7XFxuXFx0cGFkZGluZy1ib3R0b206IDE7XFxufVxcblxcbi5taW5lVGltZSB7XFxuXFx0bWFyZ2luLXJpZ2h0OiAxMDtcXG5cXHRtYXJnaW4tYm90dG9tOiA1O1xcbn1cXG5cXG4udGhlaXJzVGltZSB7XFxuXFx0bWFyZ2luLWxlZnQ6IDUyO1xcblxcdG1hcmdpbi1ib3R0b206IDU7XFxufVxcblxcbi50aW1lIHtcXG5cXHR2aXNpYmlsaXR5OiBjb2xsYXBzZTtcXG5cXHRkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udGhlaXJzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcXG4gICAgY29sb3I6ICMzMzM7XFxuICAgIHBhZGRpbmc6IDc7XFxuICAgIHBhZGRpbmctbGVmdDogMTQ7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDE0O1xcbiAgICBib3JkZXItcmFkaXVzOiAxNTtcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNTtcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE1O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDQwO1xcbiAgICBmb250LXNpemU6IDE2O1xcbiAgICBtYXgtd2lkdGg6IDYwJTtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgLyptYXJnaW4tYm90dG9tOiAxMjsqL1xcbn1cXG5cXG4udGhlaXJzQ29udGludWF0aW9uIHtcXG5cXHRtYXJnaW4tbGVmdDogNTI7XFxuXFx0bWFyZ2luLWJvdHRvbTogMDtcXG5cXHRib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNTtcXG59XFxuXFxuLnRoZWlyc0NvbnRpbnVhdGlvbkdyaWQge1xcblxcdGZvbnQtc2l6ZTogMTQ7XFxuICAgIHBhZGRpbmc6IDU7XFxuXFx0cGFkZGluZy10b3A6IDA7XFxuXFx0cGFkZGluZy1ib3R0b206IDE7XFxufVxcblxcbi5ncmlkIHtcXG4gICAgZm9udC1zaXplOiAxNDtcXG4gICAgcGFkZGluZzogNTtcXG4gICAgcGFkZGluZy10b3A6IDA7XFxuICAgIHBhZGRpbmctYm90dG9tOiA4O1xcbn1cXG5cXG4uY2hhdC1ib3gtbGF5b3V0IHtcXG5cXHRib3JkZXItY29sb3I6ICNmMWYxZjE7XFxuXFx0Ym9yZGVyLXRvcC13aWR0aDogMTtcXG59XFxuXFxuLmFjdGl2aXR5LWluZGljYXRvciB7XFxuICBjb2xvcjogI2FjMDBlNjtcXG59XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPFBhZ2UuYWN0aW9uQmFyPlxcclxcbiAgICA8QWN0aW9uQmFyIHRpdGxlPVxcXCJ7eyBjaGF0TmFtZSB9fVxcXCIgYW5kcm9pZDpob3Jpem9udGFsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiIGlvczpob3Jpem9udGFsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiPlxcclxcbiAgICBcXHQ8TmF2aWdhdGlvbkJ1dHRvbiB0ZXh0PVxcXCJHbyBCYWNrXFxcIiBhbmRyb2lkLnN5c3RlbUljb249XFxcImljX21lbnVfYmFja1xcXCIgKHRhcCk9XFxcIm9uTmF2QnRuVGFwKClcXFwiPjwvTmF2aWdhdGlvbkJ1dHRvbj5cXHJcXG5cXHQgICAgPEFjdGlvbkl0ZW0gKHRhcCk9XFxcIm9uTGVhdmUoKVxcXCJcXHJcXG5cXHQgICAgICBpb3Muc3lzdGVtSWNvbj1cXFwiOVxcXCIgaW9zLnBvc2l0aW9uPVxcXCJyaWdodFxcXCJcXHJcXG5cXHQgICAgICB0ZXh0PVxcXCJMZWF2ZSBjaGF0XFxcIiBhbmRyb2lkLnBvc2l0aW9uPVxcXCJwb3B1cFxcXCI+PC9BY3Rpb25JdGVtPlxcclxcbiAgICA8L0FjdGlvbkJhcj5cXHJcXG48L1BhZ2UuYWN0aW9uQmFyPlxcclxcblxcclxcbjxHcmlkTGF5b3V0IHJvd3M9XFxcIiosIGF1dG9cXFwiICNjaGF0Q29udGFpbmVyPlxcclxcbiAgICA8TGlzdFZpZXcgbWFyZ2luLWJvdHRvbT1cXFwiNTBcXFwiIHBhZGRpbmc9XFxcIjVcXFwiICNtZXNzYWdlTGlzdCBbaXRlbXNdPVxcXCJtZXNzYWdlc1xcXCIgc2VwYXJhdG9yQ29sb3I9XFxcInRyYW5zcGFyZW50XFxcIiAoc2V0dXBJdGVtVmlldyk9XFxcInNldHVwSXRlbVZpZXcoJGV2ZW50KVxcXCIgcm93PVxcXCIwXFxcIiAobG9hZE1vcmVJdGVtcyk9XFxcImxvYWRNb3JlRGF0YSgpXFxcIj5cXHJcXG4gICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtaXRlbT1cXFwiaXRlbVxcXCIgbGV0LWk9XFxcImluZGV4XFxcIiBsZXQtbWluZT1cXFwibWluZVxcXCIgbGV0LXRoZWlycz1cXFwidGhlaXJzXFxcIiBsZXQtbWluZUNvbnRpbnVhdGlvbj1cXFwibWluZUNvbnRpbnVhdGlvblxcXCIgbGV0LXRoZWlyc0NvbnRpbnVhdGlvbj1cXFwidGhlaXJzQ29udGludWF0aW9uXFxcIiBsZXQtbWluZUNvbnRpbnVhdGlvbkdyaWQ9XFxcIm1pbmVDb250aW51YXRpb25HcmlkXFxcIiBsZXQtdGhlaXJzQ29udGludWF0aW9uR3JpZD1cXFwidGhlaXJzQ29udGludWF0aW9uR3JpZFxcXCIgbGV0LWdyaWQ9XFxcImdyaWRcXFwiIGxldC1taW5lVGltZT1cXFwibWluZVRpbWVcXFwiIGxldC10aGVpcnNUaW1lPVxcXCJ0aGVpcnNUaW1lXFxcIiBsZXQtdGltZT1cXFwidGltZVxcXCIgbGV0LXRoZWlyc0ltZz1cXFwidGhlaXJzSW1nXFxcIiBsZXQtaW1nPVxcXCJpbWdcXFwiPlxcclxcbiAgICAgICAgICAgIDxTdGFja0xheW91dCB3aWR0aD1cXFwiODAlXFxcIiBbY2xhc3MubWluZUNvbnRpbnVhdGlvbkdyaWRdPVxcXCJtaW5lQ29udGludWF0aW9uR3JpZFxcXCIgW2NsYXNzLnRoZWlyc0NvbnRpbnVhdGlvbkdyaWRdPVxcXCJ0aGVpcnNDb250aW51YXRpb25HcmlkXFxcIiBbY2xhc3MuZ3JpZF09XFxcImdyaWRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XFxcImhvcml6b250YWxcXFwiIFtob3Jpem9udGFsQWxpZ25tZW50XT1cXFwiYWxpZ24oaXRlbSlcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPEltYWdlIFt2aXNpYmlsaXR5XT1cXFwiaXRlbS52aXNpYmlsaXR5XFxcIiBjbGFzcz1cXFwiYXV0aG9yLWltZ1xcXCIgc3RyZXRjaD1cXFwiYXNwZWN0RmlsbFxcXCIgaGVpZ2h0PVxcXCI0MFxcXCIgd2lkdGg9XFxcIjQwXFxcIiB2ZXJ0aWNhbEFsaWdubWVudD1cXFwiYm90dG9tXFxcIiBbc3JjXT1cXFwiaXRlbS5jaGF0TWVzc2FnZS5wZnBTb3VyY2VcXFwiIGNvbD1cXFwiMVxcXCI+PC9JbWFnZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCBbdmlzaWJpbGl0eV09XFxcInRleHRWaXNpYmlsaXR5KGl0ZW0pXFxcIiBbdGV4dF09J2l0ZW0uY2hhdE1lc3NhZ2UubWVzc2FnZScgW2NsYXNzLm1pbmVdPVxcXCJtaW5lXFxcIiBbY2xhc3MudGhlaXJzXT1cXFwidGhlaXJzXFxcIiBbY2xhc3MubWluZUNvbnRpbnVhdGlvbl09XFxcIm1pbmVDb250aW51YXRpb25cXFwiIFtjbGFzcy50aGVpcnNDb250aW51YXRpb25dPVxcXCJ0aGVpcnNDb250aW51YXRpb25cXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiB2ZXJ0aWNhbEFsaWdubWVudD1cXFwidG9wXFxcIj48L0xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPEltYWdlIFt2aXNpYmlsaXR5XT1cXFwiaW1nVmlzaWJpbGl0eShpdGVtKVxcXCIgW2NsYXNzLnRoZWlyc0ltZ109XFxcInRoZWlyc0ltZ1xcXCIgW2NsYXNzLmltZ109XFxcImltZ1xcXCIgc3RyZXRjaD1cXFwibm9uZVxcXCIgbWluV2lkdGg9XFxcIjM2MFxcXCIgbWluSGVpZ2h0PVxcXCIyMDBcXFwiIGRlY29kZVdpZHRoPVxcXCIzNjBcXFwiIGRlY29kZUhlaWdodD1cXFwiMjAwXFxcIiBtYXhIZWlnaHQ9XFxcIjQwMFxcXCIgdmVydGljYWxBbGlnbm1lbnQ9XFxcImJvdHRvbVxcXCIgW3NyY109XFxcIml0ZW0uY2hhdE1lc3NhZ2UuaW1nU291cmNlXFxcIiBjb2w9XFxcIjFcXFwiICh0YXApPVxcXCJ0b1ZpZXdJbWFnZShpdGVtLmNoYXRNZXNzYWdlLmltZ1NvdXJjZSlcXFwiPjwvSW1hZ2U+XFxyXFxuICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxyXFxuICAgICAgICAgICAgICAgIDxMYWJlbCBbdGV4dF09J2l0ZW0uZm9ybWF0dGVkVGltZScgW2hvcml6b250YWxBbGlnbm1lbnRdPVxcXCJhbGlnbihpdGVtKVxcXCIgW2NsYXNzLm1pbmVUaW1lXT1cXFwibWluZVRpbWVcXFwiIFtjbGFzcy50aGVpcnNUaW1lXT1cXFwidGhlaXJzVGltZVxcXCIgW2NsYXNzLnRpbWVdPVxcXCJ0aW1lXFxcIj48L0xhYmVsPlxcclxcbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxyXFxuICAgICAgICA8L25nLXRlbXBsYXRlPlxcclxcbiAgICA8L0xpc3RWaWV3PlxcclxcblxcclxcbiAgICA8U3RhY2tMYXlvdXQgI2NoYXRib3ggcm93PVxcXCIxXFxcIiBjbGFzcz1cXFwiY2hhdC1ib3gtbGF5b3V0XFxcIj5cXHJcXG5cXHQgICAgICAgIDxHcmlkTGF5b3V0IGNvbHVtbnM9XFxcImF1dG8sKixhdXRvXFxcIiBzdHlsZT1cXFwicGFkZGluZzogMTBcXFwiPlxcclxcblxcdCAgICAgICAgXFx0PEltYWdlIGNsYXNzPVxcXCJpbWctYnV0dG9uXFxcIiByb3c9XFxcIjBcXFwiIGNvbD1cXFwiMFxcXCIgc3JjPVxcXCJ+L2ltZy9pbWdfaWNvbl8yLnBuZ1xcXCIgKHRhcCk9b3BlbkltYWdlcygpPjwvSW1hZ2U+XFxyXFxuXFx0ICAgICAgICAgICAgPFRleHRWaWV3ICN0ZXh0ZmllbGQgaGVpZ2h0PVxcXCJhdXRvXFxcIiBtYXhIZWlnaHQ9XFxcIjEwMFxcXCIgaGludD1cXFwiU3RhcnQgYSBtZXNzYWdlXFxcIiBjbGFzcz1cXFwiY2hhdC10ZXh0LWZpZWxkXFxcIiByb3c9XFxcIjBcXFwiIGNvbD1cXFwiMVxcXCIgYXV0b2NvcnJlY3Q9XFxcInRydWVcXFwiIFsobmdNb2RlbCldPVxcXCJtZXNzYWdlXFxcIiAodGFwKT1cXFwib25UZXh0VGFwKClcXFwiPjwvVGV4dFZpZXc+XFxyXFxuXFx0ICAgICAgICAgICAgPEltYWdlICNidG4gY2xhc3M9XFxcImNoYXQtYnV0dG9uXFxcIiByb3c9XFxcIjBcXFwiIGNvbD1cXFwiMlxcXCIgc3JjPVxcXCJ+L2ltZy9zZW5kX21lc3NhZ2VfaWNvbl8yLnBuZ1xcXCIgKHRhcCk9c2VuZE1lc3NhZ2UoKT48L0ltYWdlPlxcclxcblxcdCAgICAgICAgPC9HcmlkTGF5b3V0PlxcclxcblxcclxcbiAgICA8L1N0YWNrTGF5b3V0PlxcclxcbjwvR3JpZExheW91dD5cXHJcXG5cXHJcXG48QWN0aXZpdHlJbmRpY2F0b3IgI2FjdGl2aXR5SW5kaWNhdG9yIGJ1c3k9XFxcInRydWVcXFwiIHdpZHRoPVxcXCI0MFxcXCIgaGVpZ2h0PVxcXCI0MFxcXCIgY2xhc3M9XFxcImFjdGl2aXR5LWluZGljYXRvclxcXCI+XFxyXFxuPC9BY3Rpdml0eUluZGljYXRvcj5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVHJhbnNmZXJTZXJ2aWNlIH0gZnJvbSAnLi4vZGF0YXRyYW5zZmVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgKiBhcyBmaXJlYmFzZSBmcm9tICduYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlJztcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCAqIGFzIGltYWdlcGlja2VyIGZyb20gXCJuYXRpdmVzY3JpcHQtaW1hZ2VwaWNrZXJcIjtcclxuaW1wb3J0ICogYXMgaW1hZ2VTb3VyY2UgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvaW1hZ2Utc291cmNlXCI7XHJcbmltcG9ydCAqIGFzIGZzIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2ZpbGUtc3lzdGVtXCI7XHJcbmltcG9ydCB7IExvZ2luY2hlY2tTZXJ2aWNlIH0gZnJvbSAnLi4vbG9naW5jaGVjay5zZXJ2aWNlLnRucyc7XHJcbmltcG9ydCB7IENoYXRNZXNzYWdlIH0gZnJvbSAnLi4vbW9kZWxzL2NoYXQtbWVzc2FnZS5tb2RlbCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGVBcnJheSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlLWFycmF5JztcclxuaW1wb3J0IHsgTGlzdFZpZXcgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2xpc3Qtdmlldyc7XHJcbmltcG9ydCB7IGlzQW5kcm9pZCB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm0nO1xyXG5pbXBvcnQgeyBBY3Rpdml0eUluZGljYXRvciB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvYWN0aXZpdHktaW5kaWNhdG9yJztcclxuaW1wb3J0IHsgR3JpZExheW91dCB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvbGF5b3V0cy9ncmlkLWxheW91dCc7XHJcbmltcG9ydCAqIGFzIGFwcCBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiO1xyXG5kZWNsYXJlIHZhciBhbmRyb2lkOiBhbnk7XHJcblxyXG5cclxuY2xhc3MgQ2hhdEl0ZW0ge1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBjaGF0TWVzc2FnZTogQ2hhdE1lc3NhZ2UsIHB1YmxpYyB2aXNpYmlsaXR5OiBzdHJpbmcsIHB1YmxpYyBmb3JtYXR0ZWRUaW1lOiBzdHJpbmcsIHB1YmxpYyBtaW5lQ29udGludWF0aW9uOiBib29sZWFuLCBwdWJsaWMgdGhlaXJzQ29udGludWF0aW9uOiBib29sZWFuKSB7fVxyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1jaGF0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY2hhdC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY2hhdC5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIENoYXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRyYW5zZmVyU2VydmljZTogVHJhbnNmZXJTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSBsb2dpbmNoZWNrU2VydmljZTogTG9naW5jaGVja1NlcnZpY2UsXHJcbiAgXHRwcml2YXRlIHZjUmVmOiBWaWV3Q29udGFpbmVyUmVmKSB7IH1cclxuXHJcbiAgQFZpZXdDaGlsZChcIm1lc3NhZ2VMaXN0XCIsIHsgc3RhdGljOiB0cnVlIH0pIGx2OiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoXCJjaGF0Q29udGFpbmVyXCIsIHsgc3RhdGljOiB0cnVlIH0pIGNjOiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoXCJhY3Rpdml0eUluZGljYXRvclwiLCB7IHN0YXRpYzogdHJ1ZSB9KSBhaTogRWxlbWVudFJlZjtcclxuICBjaGF0SWQ6IHN0cmluZztcclxuICBtZXNzYWdlcyA9IG5ldyBPYnNlcnZhYmxlQXJyYXk8Q2hhdEl0ZW0+KCk7XHJcbiAgYWxsTWVzc2FnZXMgPSBuZXcgT2JzZXJ2YWJsZUFycmF5PENoYXRJdGVtPigpO1xyXG4gIG1lc3NhZ2U6IHN0cmluZyA9ICcnO1xyXG4gIHVzZXJJZDogc3RyaW5nO1xyXG4gIGNoYXROYW1lOiBzdHJpbmc7XHJcbiAgZGlzcGxheU5hbWU6IHN0cmluZztcclxuICBwZnBTb3VyY2U6IHN0cmluZztcclxuICBsaXN0OiBMaXN0VmlldztcclxuICBsYXN0SW5kZXg7XHJcbiAgY3VycmVudFVzZXI6IGFueTtcclxuICBudW1TaG93biA9IDIwO1xyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIGxldCBjaGF0Q29udGFpbmVyID0gPEdyaWRMYXlvdXQ+IHRoaXMuY2MubmF0aXZlRWxlbWVudDtcclxuICAgIGNoYXRDb250YWluZXIudmlzaWJpbGl0eSA9ICdjb2xsYXBzZSc7XHJcbiAgXHRpZihpc0FuZHJvaWQpIHtcclxuICBcdFx0dmFyIHdpbmRvdyA9IGFwcC5hbmRyb2lkLnN0YXJ0QWN0aXZpdHkuZ2V0V2luZG93KCk7XHJcbiAgICAgICAgd2luZG93LnNldFNvZnRJbnB1dE1vZGUoYW5kcm9pZC52aWV3LldpbmRvd01hbmFnZXIuTGF5b3V0UGFyYW1zLlNPRlRfSU5QVVRfQURKVVNUX1JFU0laRSk7XHJcbiAgXHR9XHJcbiAgXHR0aGlzLmxpc3QgPSB0aGlzLmx2Lm5hdGl2ZUVsZW1lbnQ7XHJcblxyXG4gIFx0dGhpcy5jaGF0SWQgPSB0aGlzLnRyYW5zZmVyU2VydmljZS5nZXREYXRhKCk7XHJcbiAgXHR0aGlzLnVzZXJJZCA9IHRoaXMubG9naW5jaGVja1NlcnZpY2UuZ2V0VXNlcigpO1xyXG4gIFx0ZmlyZWJhc2UuZ2V0Q3VycmVudFVzZXIoKS50aGVuKCh1c2VyKSA9PiB7XHJcbiAgXHRcdHRoaXMuZGlzcGxheU5hbWUgPSB1c2VyLmRpc3BsYXlOYW1lO1xyXG4gIFx0XHR0aGlzLnBmcFNvdXJjZSA9IHVzZXIucGhvdG9VUkw7XHJcbiAgXHR9KVxyXG4gIFx0dGhpcy5yZXRyaWV2ZUNoYXRzKCk7XHJcbiAgXHR0aGlzLmNoYXROYW1lID0gXCJKb2huIERvZVwiXHJcbiAgXHQvLyBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgLy8gICAgdGhpcy5saXN0LnNjcm9sbFRvSW5kZXgodGhpcy5tZXNzYWdlcy5sZW5ndGggLSAxKTtcclxuICAgLy8gIH0sIDEwMDApXHJcbiAgfVxyXG5cclxuICBhc3luYyBzZW5kTWVzc2FnZShpbWdTcmMgPSBudWxsKSB7XHJcbiAgICBpZih0aGlzLm1lc3NhZ2UucmVwbGFjZSgvXFxzKy9nLCAnJykubGVuZ3RoID09PSAwICYmICFpbWdTcmMpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIFx0dmFyIHRvZGF5ID0gbmV3IERhdGUoKTtcclxuICBcdHZhciBkYXRlID0gdG9kYXkuZ2V0RnVsbFllYXIoKSsnLycrKHRvZGF5LmdldE1vbnRoKCkrMSkrJy8nK3RvZGF5LmdldERhdGUoKTtcclxuICBcdHZhciB0aW1lID0gdG9kYXkuZ2V0SG91cnMoKSArIFwiOlwiICsgdG9kYXkuZ2V0VVRDTWludXRlcygpICsgXCI6XCIgKyB0b2RheS5nZXRTZWNvbmRzKCk7XHJcbiAgICB2YXIgY2hhdDogQ2hhdE1lc3NhZ2U7XHJcbiAgICBpZihpbWdTcmMpIHtcclxuICAgIFx0Y2hhdCA9IHtcclxuICAgIFx0XHR1c2VySWQ6IHRoaXMudXNlcklkLFxyXG4gICAgXHRcdGRpc3BsYXlOYW1lOiB0aGlzLmRpc3BsYXlOYW1lLFxyXG4gICAgXHRcdG1lc3NhZ2U6IFwiXCIsXHJcbiAgICBcdFx0cGZwU291cmNlOiB0aGlzLnBmcFNvdXJjZSxcclxuICAgIFx0XHRpbWdTb3VyY2U6IGltZ1NyYyxcclxuICAgIFx0XHR0aW1lOiB0aW1lLFxyXG4gICAgXHRcdGRhdGU6IGRhdGVcclxuICAgIFx0fVxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIGNoYXQgPSB7XHJcbiAgICAgICAgdXNlcklkOiB0aGlzLnVzZXJJZCxcclxuICAgICAgICBkaXNwbGF5TmFtZTogdGhpcy5kaXNwbGF5TmFtZSxcclxuICAgICAgICBtZXNzYWdlOiB0aGlzLm1lc3NhZ2UsXHJcbiAgICAgICAgcGZwU291cmNlOiB0aGlzLnBmcFNvdXJjZSxcclxuICAgICAgICBpbWdTb3VyY2U6IFwiXCIsXHJcbiAgICAgICAgdGltZTogdGltZSxcclxuICAgICAgICBkYXRlOiBkYXRlXHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcdGNvbnN0IG1lc3NhZ2VEb2N1bWVudCA9IGZpcmViYXNlLmZpcmVzdG9yZS5jb2xsZWN0aW9uKCdjaGF0cycpLmRvYyh0aGlzLmNoYXRJZCk7XHJcbiAgXHRjb25zdCBtZXNzYWdlUHJvbWlzZSA9IGF3YWl0IG1lc3NhZ2VEb2N1bWVudC5nZXQoKS50aGVuKChkb2MpID0+IHtcclxuICBcdFx0dmFyIHVwZGF0ZWRDaGF0cyA6IFtDaGF0TWVzc2FnZV0gPSBkb2MuZGF0YSgpLmNoYXRzO1xyXG4gIFx0XHR1cGRhdGVkQ2hhdHMucHVzaChjaGF0KTtcclxuICBcdFx0bWVzc2FnZURvY3VtZW50LnVwZGF0ZSh7XHJcbiAgXHRcdFx0Y2hhdHM6IHVwZGF0ZWRDaGF0cyxcclxuICBcdFx0XHRsYXN0Q2hhdDogZGF0ZSArICcgJyArIHRpbWVcclxuICBcdFx0fSlcclxuICBcdH0pXHJcbiAgXHR0aGlzLm1lc3NhZ2UgPSAnJztcclxuICB9XHJcblxyXG4gIGFzeW5jIHJldHJpZXZlQ2hhdHMoKSB7XHJcbiAgXHRjb25zdCBtZXNzYWdlRG9jdW1lbnQgPSBmaXJlYmFzZS5maXJlc3RvcmUuY29sbGVjdGlvbignY2hhdHMnKS5kb2ModGhpcy5jaGF0SWQpO1xyXG4gIFx0Y29uc3QgZG9jUHJvbWlzZSA9IGF3YWl0IG1lc3NhZ2VEb2N1bWVudC5nZXQoKS50aGVuKGFzeW5jIChkb2MpID0+IHtcclxuICBcdFx0bGV0IGRhdGEgPSBkb2MuZGF0YSgpO1xyXG4gIFx0XHR0aGlzLmxhc3RJbmRleCA9IGRhdGEuY2hhdHMubGVuZ3RoO1xyXG4gICAgICB0aGlzLm1lc3NhZ2VzLnNwbGljZSgwKTtcclxuICAgICAgdGhpcy5hbGxNZXNzYWdlcy5zcGxpY2UoMCk7XHJcbiAgXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkYXRhLmNoYXRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgXHRcdFx0aWYoZGF0YS5jaGF0c1tpXS51c2VySWQgPT09IHRoaXMudXNlcklkKSB7XHJcbiAgICAgICAgICBhd2FpdCB0aGlzLnVwZGF0ZUNvbnRpbnVhdGlvbnMoZGF0YSwgaSwgdHJ1ZSwgXCJjb2xsYXBzZVwiKTtcclxuICAgICAgICB9XHJcbiAgXHRcdFx0ZWxzZSB7XHJcbiAgICAgICAgICBhd2FpdCB0aGlzLnVwZGF0ZUNvbnRpbnVhdGlvbnMoZGF0YSwgaSwgZmFsc2UsIFwidmlzaWJsZVwiKTtcclxuICAgICAgICB9XHJcbiAgXHRcdH1cclxuICBcdFx0Ly8gdGhpcy5saXN0LnNjcm9sbFRvSW5kZXgoZGF0YS5jaGF0cy5sZW5ndGggLSAxKTtcclxuICBcdFx0aWYoZGF0YS51c2Vycy5sZW5ndGggPT09IDIpIHtcclxuICBcdFx0XHRpZihkYXRhLnVzZXJzWzBdLnVpZCA9PT0gdGhpcy51c2VySWQpXHJcbiAgXHRcdFx0XHR0aGlzLmNoYXROYW1lID0gZGF0YS51c2Vyc1sxXS5kaXNwbGF5TmFtZTtcclxuICBcdFx0XHRlbHNlIHtcclxuICAgICAgICAgIHRoaXMuY2hhdE5hbWUgPSBkYXRhLnVzZXJzWzBdLmRpc3BsYXlOYW1lO1xyXG4gICAgICAgIH1cclxuICBcdFx0fVxyXG4gIFx0XHRlbHNlIHtcclxuICAgICAgICB2YXIgY2hhdE5hbWUgPSAnWW91LCAnO1xyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBkYXRhLnVzZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICBpZihkYXRhLnVzZXJzW2ldLmlkICE9IHRoaXMudXNlcklkKSB7XHJcbiAgICAgICAgICAgIGlmKGkgPT09IGRhdGEudXNlcnMubGVuZ3RoIC0gMSlcclxuICAgICAgICAgICAgICBjaGF0TmFtZSArPSAnYW5kICcgKyBkYXRhLnVzZXJzW2ldLmRpc3BsYXlOYW1lO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgY2hhdE5hbWUgKz0gZGF0YS51c2Vyc1tpXS5kaXNwbGF5TmFtZSArICcsICc7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gIFx0XHRcdHRoaXMuY2hhdE5hbWUgPSAnR3JvdXAgY2hhdCc7XHJcbiAgXHRcdH1cclxuICBcdH0pXHJcblxyXG4gIFx0Y29uc3QgdW5zdWJzY3JpYmUgPSBtZXNzYWdlRG9jdW1lbnQub25TbmFwc2hvdChhc3luYyBkb2MgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZygnY2FsbGVkJylcclxuICBcdFx0bGV0IGRhdGEgPSBkb2MuZGF0YSgpO1xyXG4gIFx0XHRmb3IodmFyIGkgPSB0aGlzLmxhc3RJbmRleDsgaSA8IGRhdGEuY2hhdHMubGVuZ3RoOyBpKyspIHtcclxuICBcdFx0XHRpZihkYXRhLmNoYXRzW2ldLnVzZXJJZCA9PT0gdGhpcy51c2VySWQpIHtcclxuICAgICAgICAgIGF3YWl0IHRoaXMudXBkYXRlQ29udGludWF0aW9ucyhkYXRhLCBpLCB0cnVlLCBcImNvbGxhcHNlXCIpO1xyXG4gICAgICAgICAgdGhpcy5saXN0LnNjcm9sbFRvSW5kZXgodGhpcy5tZXNzYWdlcy5sZW5ndGggLSAxKTtcclxuICAgICAgICB9XHJcbiAgXHRcdFx0ZWxzZSB7XHJcbiAgICAgICAgICBhd2FpdCB0aGlzLnVwZGF0ZUNvbnRpbnVhdGlvbnMoZGF0YSwgaSwgZmFsc2UsIFwidmlzaWJsZVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5udW1TaG93biArPSAxO1xyXG4gIFx0XHR9XHJcbiAgXHRcdHRoaXMubGFzdEluZGV4ID0gZGF0YS5jaGF0cy5sZW5ndGg7XHJcbiAgXHR9KVxyXG4gICAgaWYodGhpcy5tZXNzYWdlcy5sZW5ndGggPiB0aGlzLm51bVNob3duKSB7XHJcbiAgICAgIHRoaXMubWVzc2FnZXMuc3BsaWNlKDAsIHRoaXMubWVzc2FnZXMubGVuZ3RoIC0gdGhpcy5udW1TaG93bik7XHJcbiAgICB9XHJcbiAgICBsZXQgYWN0aXZpdHlJbmRpY2F0b3IgPSA8QWN0aXZpdHlJbmRpY2F0b3I+IHRoaXMuYWkubmF0aXZlRWxlbWVudDtcclxuICAgIGFjdGl2aXR5SW5kaWNhdG9yLmJ1c3kgPSBmYWxzZTtcclxuICAgIGxldCBjaGF0Q29udGFpbmVyID0gPEdyaWRMYXlvdXQ+IHRoaXMuY2MubmF0aXZlRWxlbWVudDtcclxuICAgIGNoYXRDb250YWluZXIudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcclxuICAgIHRoaXMubGlzdC5zY3JvbGxUb0luZGV4KHRoaXMubWVzc2FnZXMubGVuZ3RoIC0gMSk7XHJcbiAgfVxyXG5cclxuICBhc3luYyB1cGRhdGVDb250aW51YXRpb25zKGRhdGEsIGluZGV4LCBpc01pbmUsIHZpc2liaWxpdHkpIHtcclxuICAgIC8vVXBkYXRlIHRpbWUgdG8gYSByZWFkYWJsZSBmb3JtYXQgZm9yIHRoZSB1c2VyXHJcbiAgICB2YXIgY2hhdFRpbWUgPSBkYXRhLmNoYXRzW2luZGV4XS50aW1lO1xyXG4gICAgdmFyIGRhdGVTcGxpdCA9IGRhdGEuY2hhdHNbaW5kZXhdLmRhdGUuc3BsaXQoJy8nKTtcclxuICAgIHZhciB0aW1lU3BsaXQgPSBjaGF0VGltZS5zcGxpdCgnOicpO1xyXG4gICAgdmFyIGZvcm1hdHRlZFRpbWUgPSAnJztcclxuICAgIGlmKHRpbWVTcGxpdFsxXS5sZW5ndGggPT09IDEpIHtcclxuICAgICAgdGltZVNwbGl0WzFdID0gJzAnICsgdGltZVNwbGl0WzFdO1xyXG4gICAgfVxyXG4gICAgdmFyIGhvdXJzID0gcGFyc2VJbnQodGltZVNwbGl0WzBdKTtcclxuICAgIGlmKGhvdXJzID4gMTIpIHtcclxuICAgICAgZm9ybWF0dGVkVGltZSA9IGRhdGVTcGxpdFsxXSArICcvJyArIGRhdGVTcGxpdFsyXSArICcsICcgKyAoaG91cnMgLSAxMikgKyAnOicgKyB0aW1lU3BsaXRbMV0gKyAnIFBNJztcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICBpZihob3VycyA9PT0gMClcclxuICAgICAgICB0aW1lU3BsaXRbMF0gPSAnMTInO1xyXG4gICAgICBmb3JtYXR0ZWRUaW1lID0gZGF0ZVNwbGl0WzFdICsgJy8nICsgZGF0ZVNwbGl0WzJdICsgJywgJyArIHRpbWVTcGxpdFswXSArICc6JyArIHRpbWVTcGxpdFsxXSArICcgQU0nO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHBmcFByb21pc2UgPSBhd2FpdCBmaXJlYmFzZS5maXJlc3RvcmUuY29sbGVjdGlvbigndXNlcnMnKS5kb2MoZGF0YS5jaGF0c1tpbmRleF0udXNlcklkKS5nZXQoKS50aGVuKChkb2MpID0+IHtcclxuICAgICAgZGF0YS5jaGF0c1tpbmRleF0ucGZwU291cmNlID0gZG9jLmRhdGEoKS5wcm9maWxlX3NvdXJjZTtcclxuXHJcbiAgICAgICAgLy9QdXNoIHRoZSBtZXNzYWdlIGl0ZW1cclxuICAgICAgdGhpcy5tZXNzYWdlcy5wdXNoKG5ldyBDaGF0SXRlbShkYXRhLmNoYXRzW2luZGV4XSwgdmlzaWJpbGl0eSwgZm9ybWF0dGVkVGltZSwgZmFsc2UsIGZhbHNlKSk7XHJcbiAgICAgIHRoaXMuYWxsTWVzc2FnZXMucHVzaChuZXcgQ2hhdEl0ZW0oZGF0YS5jaGF0c1tpbmRleF0sIHZpc2liaWxpdHksIGZvcm1hdHRlZFRpbWUsIGZhbHNlLCBmYWxzZSkpO1xyXG5cclxuICAgICAgLy9DaGVjayBmb3IgY29udGludWF0aW9uIG1lc3NhZ2VzIGFuZCB1cGRhdGUgaXRlbXMgYWNjb3JkaW5nbHlcclxuICAgICAgdmFyIGkgPSBpbmRleCAtIDE7XHJcbiAgICAgIHdoaWxlKGkgPj0gMCAmJiBkYXRhLmNoYXRzW2ldLnVzZXJJZCA9PT0gZGF0YS5jaGF0c1tpbmRleF0udXNlcklkKSB7XHJcbiAgICAgICAgaWYodGhpcy5pc1RpbWVPdmVyKGRhdGEuY2hhdHNbaV0sIGRhdGEuY2hhdHNbaW5kZXhdKSlcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICBpZihpID49IHRoaXMubWVzc2FnZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICB2YXIgbXNnID0gdGhpcy5tZXNzYWdlcy5nZXRJdGVtKHRoaXMubWVzc2FnZXMubGVuZ3RoICsgaSAtIGRhdGEuY2hhdHMubGVuZ3RoKTtcclxuICAgICAgICAgIG1zZy52aXNpYmlsaXR5ID0gJ2NvbGxhcHNlJztcclxuICAgICAgICAgIGlmKGlzTWluZSkge1xyXG4gICAgICAgICAgICBtc2cubWluZUNvbnRpbnVhdGlvbiA9IHRydWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbXNnLnRoZWlyc0NvbnRpbnVhdGlvbiA9IHRydWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0aGlzLm1lc3NhZ2VzLnNldEl0ZW0odGhpcy5tZXNzYWdlcy5sZW5ndGggKyBpIC0gZGF0YS5jaGF0cy5sZW5ndGgsIG1zZylcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICB2YXIgbXNnID0gdGhpcy5tZXNzYWdlcy5nZXRJdGVtKGkpO1xyXG4gICAgICAgICAgbXNnLnZpc2liaWxpdHkgPSAnY29sbGFwc2UnO1xyXG4gICAgICAgICAgaWYoaXNNaW5lKSB7XHJcbiAgICAgICAgICAgIG1zZy5taW5lQ29udGludWF0aW9uID0gdHJ1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBtc2cudGhlaXJzQ29udGludWF0aW9uID0gdHJ1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRoaXMubWVzc2FnZXMuc2V0SXRlbShpLCBtc2cpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5hbGxNZXNzYWdlcy5zZXRJdGVtKGksIG1zZyk7XHJcbiAgICAgICAgaSA9IGkgLSAxO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIFxyXG4gICAgLy8gdGhpcy5saXN0LnNjcm9sbFRvSW5kZXgodGhpcy5tZXNzYWdlcy5sZW5ndGggLSAxKTtcclxuICB9XHJcblxyXG4gIG9wZW5JbWFnZXMoKSB7XHJcbiAgICB2YXIgbG9jYWxQYXRoO1xyXG4gICAgdmFyIGNvdW50ZXIgPSAxO1xyXG4gICAgbGV0IGNvbnRleHQgPSBpbWFnZXBpY2tlci5jcmVhdGUoe1xyXG4gICAgICAgIG1vZGU6IFwic2luZ2xlXCIgLy8gdXNlIFwibXVsdGlwbGVcIiBmb3IgbXVsdGlwbGUgc2VsZWN0aW9uXHJcbiAgICB9KTtcclxuICAgIGNvbnRleHRcclxuICAgIC5hdXRob3JpemUoKVxyXG4gICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBjb250ZXh0LnByZXNlbnQoKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoc2VsZWN0aW9uKSA9PiB7XHJcbiAgICAgICAgc2VsZWN0aW9uLmZvckVhY2goKHNlbGVjdGVkKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIHByb2Nlc3MgdGhlIHNlbGVjdGVkIGltYWdlXHJcbiAgICAgICAgICAgIGxldCBpbWdTb3VyY2UgPSBuZXcgaW1hZ2VTb3VyY2UuSW1hZ2VTb3VyY2UoKTtcclxuICAgICAgICAgICAgaW1nU291cmNlLmZyb21Bc3NldChzZWxlY3RlZCkudGhlbigoc291cmNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgIGNvbnN0IGI2NCA9IHNvdXJjZS50b0Jhc2U2NFN0cmluZygnanBlZycsIDEwMCk7XHJcbiAgICAgICAgICAgICAgIGNvbnN0IGZpbGVTaXplID0gYjY0LnJlcGxhY2UoL1xcPS9nLCBcIlwiKS5sZW5ndGggKiAwLjc1O1xyXG4gICAgICAgICAgICAgICBpZiAoZmlsZVNpemUgPiA1KSB7XHJcbiAgICAgICAgICAgICAgICAgIC8vIElmIGZpbGUgaXMgZ3JlYXRlciB0aGFuIDEgTUJcclxuICAgICAgICAgICAgICAgICAgc291cmNlLmxvYWRGcm9tQmFzZTY0KGI2NCk7XHJcbiAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgIGNvbnN0IGltZ0hhc2ggPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKCkuc2xpY2UoMiwxMSk7XHJcbiAgICAgICAgICAgICAgIGxldCBmb2xkZXIgPSBmcy5rbm93bkZvbGRlcnMudGVtcCgpO1xyXG4gICAgICAgICAgICAgICB2YXIgcGF0aCA9IGZzLnBhdGguam9pbihmb2xkZXIucGF0aCwgaW1nSGFzaCArIFwiLnBuZ1wiKTtcclxuICAgICAgICAgICAgICAgbGV0IHNhdmVkID0gc291cmNlLnNhdmVUb0ZpbGUocGF0aCwgXCJqcGVnXCIsIDEwMCk7XHJcblxyXG4gICAgICAgICAgICAgICBmaXJlYmFzZS5zdG9yYWdlLnVwbG9hZEZpbGUoe1xyXG4gICAgICAgICAgICAgICAgICAvLyB0aGUgZnVsbCBwYXRoIG9mIHRoZSBmaWxlIGluIHlvdXIgRmlyZWJhc2Ugc3RvcmFnZSAoZm9sZGVycyB3aWxsIGJlIGNyZWF0ZWQpXHJcbiAgICAgICAgICAgICAgICAgIHJlbW90ZUZ1bGxQYXRoOiAnY2hhdHMvJyArIHRoaXMuY2hhdElkICsgJy9pbWFnZXMvJyArIHRoaXMudXNlcklkICsgJy9JTUdfJyArIGltZ0hhc2ggKyAnLnBuZycsXHJcbiAgICAgICAgICAgICAgICAgIC8vIG9wdGlvbiAxOiBhIGZpbGUtc3lzdGVtIG1vZHVsZSBGaWxlIG9iamVjdFxyXG4gICAgICAgICAgICAgICAgICBsb2NhbEZpbGU6IGZzLkZpbGUuZnJvbVBhdGgocGF0aCksXHJcbiAgICAgICAgICAgICAgICAgIC8vIG9wdGlvbiAyOiBhIGZ1bGwgZmlsZSBwYXRoIChpZ25vcmVkIGlmICdsb2NhbEZpbGUnIGlzIHNldClcclxuICAgICAgICAgICAgICAgICAgbG9jYWxGdWxsUGF0aDogcGF0aCxcclxuICAgICAgICAgICAgICAgICAgLy8gZ2V0IG5vdGlmaWVkIG9mIGZpbGUgdXBsb2FkIHByb2dyZXNzXHJcbiAgICAgICAgICAgICAgICAgIG9uUHJvZ3Jlc3M6IChzdGF0dXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlVwbG9hZGVkIGZyYWN0aW9uOiBcIiArIHN0YXR1cy5mcmFjdGlvbkNvbXBsZXRlZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJQZXJjZW50YWdlIGNvbXBsZXRlOiBcIiArIHN0YXR1cy5wZXJjZW50YWdlQ29tcGxldGVkKTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICB9KS50aGVuKCh1cGxvYWRlZEZpbGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJGaWxlIHVwbG9hZGVkOiBcIiArIEpTT04uc3RyaW5naWZ5KHVwbG9hZGVkRmlsZSkpO1xyXG4gICAgICAgICAgICAgICAgICBmaXJlYmFzZS5zdG9yYWdlLmdldERvd25sb2FkVXJsKHtcclxuICAgICAgICAgICAgICAgICAgICByZW1vdGVGdWxsUGF0aDogJ2NoYXRzLycgKyB0aGlzLmNoYXRJZCArICcvaW1hZ2VzLycgKyB0aGlzLnVzZXJJZCArICcvSU1HXycgKyBpbWdIYXNoICsgJy5wbmcnXHJcbiAgICAgICAgICAgICAgICAgIH0pLnRoZW4oKHVybCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VuZE1lc3NhZ2UodXJsKTtcclxuICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KS5jYXRjaCgoZSkgPT4ge1xyXG4gICAgICAgIC8vIHByb2Nlc3MgZXJyb3JcclxuICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaXNUaW1lT3ZlcihjaGF0MSwgY2hhdDIpIHtcclxuICAgIGNvbnN0IHRpbWUxID0gY2hhdDEudGltZTtcclxuICAgIGNvbnN0IHRpbWUyID0gY2hhdDIudGltZTtcclxuICAgIGNvbnN0IGRhdGUxID0gY2hhdDEuZGF0ZTtcclxuICAgIGNvbnN0IGRhdGUyID0gY2hhdDIuZGF0ZTtcclxuXHJcbiAgICBjb25zdCB0aW1lMVNwbGl0ID0gdGltZTEuc3BsaXQoJzonKTtcclxuICAgIGNvbnN0IHRpbWUyU3BsaXQgPSB0aW1lMi5zcGxpdCgnOicpO1xyXG5cclxuICAgIHZhciB0aW1lMVRvdGFsU2Vjb25kcyA9IHBhcnNlSW50KHRpbWUxU3BsaXRbMF0pICogMzYwMCArIHBhcnNlSW50KHRpbWUxU3BsaXRbMV0pICogNjAgKyBwYXJzZUludCh0aW1lMVNwbGl0WzJdKTtcclxuICAgIHZhciB0aW1lMlRvdGFsU2Vjb25kcyA9IHBhcnNlSW50KHRpbWUyU3BsaXRbMF0pICogMzYwMCArIHBhcnNlSW50KHRpbWUyU3BsaXRbMV0pICogNjAgKyBwYXJzZUludCh0aW1lMlNwbGl0WzJdKTtcclxuICAgIGlmKHRpbWUyVG90YWxTZWNvbmRzIC0gdGltZTFUb3RhbFNlY29uZHMgPiAoNjAgKiAzKSB8fCBkYXRlMiA+IGRhdGUxKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgYWxpZ24oaXRlbSkge1xyXG4gIFx0aWYoaXRlbS5jaGF0TWVzc2FnZS51c2VySWQgPT09IHRoaXMudXNlcklkKVxyXG4gIFx0XHRyZXR1cm4gXCJyaWdodFwiO1xyXG4gIFx0ZWxzZVxyXG4gIFx0XHRyZXR1cm4gXCJsZWZ0XCI7XHJcbiAgfVxyXG5cclxuICBhbGlnblJldmVyc2UoaXRlbSkge1xyXG4gICAgaWYoaXRlbS5jaGF0TWVzc2FnZS51c2VySWQgPT09IHRoaXMudXNlcklkKVxyXG4gICAgICByZXR1cm4gXCJsZWZ0XCI7XHJcbiAgICBlbHNlXHJcbiAgICAgIHJldHVybiBcInJpZ2h0XCI7XHJcbiAgfVxyXG5cclxuICB0ZXh0VmlzaWJpbGl0eShpdGVtKSB7XHJcbiAgICBpZihpdGVtLmNoYXRNZXNzYWdlLm1lc3NhZ2UgPT09IFwiXCIpIHtcclxuICAgICAgcmV0dXJuIFwiY29sbGFwc2VcIjtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICByZXR1cm4gXCJ2aXNpYmxlXCI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpbWdWaXNpYmlsaXR5KGl0ZW0pIHtcclxuICAgIGlmKGl0ZW0uY2hhdE1lc3NhZ2UuaW1nU291cmNlID09PSBcIlwiKSB7XHJcbiAgICAgIHJldHVybiBcImNvbGxhcHNlXCI7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgcmV0dXJuIFwidmlzaWJsZVwiO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0dXBJdGVtVmlldyhhcmdzKSB7XHJcbiAgXHRhcmdzLnZpZXcuY29udGV4dC5taW5lID0gKHRoaXMubWVzc2FnZXMuZ2V0SXRlbShhcmdzLmluZGV4KS5jaGF0TWVzc2FnZS51c2VySWQgPT09IHRoaXMudXNlcklkKTtcclxuICBcdGFyZ3Mudmlldy5jb250ZXh0LnRoZWlycyA9ICh0aGlzLm1lc3NhZ2VzLmdldEl0ZW0oYXJncy5pbmRleCkuY2hhdE1lc3NhZ2UudXNlcklkICE9PSB0aGlzLnVzZXJJZCk7XHJcbiAgICBhcmdzLnZpZXcuY29udGV4dC5taW5lQ29udGludWF0aW9uID0gKHRoaXMubWVzc2FnZXMuZ2V0SXRlbShhcmdzLmluZGV4KS5taW5lQ29udGludWF0aW9uKTtcclxuICAgIGFyZ3Mudmlldy5jb250ZXh0LnRoZWlyc0NvbnRpbnVhdGlvbiA9ICh0aGlzLm1lc3NhZ2VzLmdldEl0ZW0oYXJncy5pbmRleCkudGhlaXJzQ29udGludWF0aW9uKTtcclxuICAgIGFyZ3Mudmlldy5jb250ZXh0Lm1pbmVDb250aW51YXRpb25HcmlkID0gKHRoaXMubWVzc2FnZXMuZ2V0SXRlbShhcmdzLmluZGV4KS5taW5lQ29udGludWF0aW9uKTtcclxuICAgIGFyZ3Mudmlldy5jb250ZXh0LnRoZWlyc0NvbnRpbnVhdGlvbkdyaWQgPSAodGhpcy5tZXNzYWdlcy5nZXRJdGVtKGFyZ3MuaW5kZXgpLnRoZWlyc0NvbnRpbnVhdGlvbik7XHJcblxyXG4gICAgYXJncy52aWV3LmNvbnRleHQuZ3JpZCA9ICghYXJncy52aWV3LmNvbnRleHQudGhlaXJzQ29udGludWF0aW9uICYmICFhcmdzLnZpZXcuY29udGV4dC5taW5lQ29udGludWF0aW9uKTtcclxuICAgIGFyZ3Mudmlldy5jb250ZXh0Lm1pbmVUaW1lID0gKCFhcmdzLnZpZXcuY29udGV4dC5taW5lQ29udGludWF0aW9uICYmIGFyZ3Mudmlldy5jb250ZXh0Lm1pbmUpO1xyXG4gICAgYXJncy52aWV3LmNvbnRleHQudGhlaXJzVGltZSA9ICghYXJncy52aWV3LmNvbnRleHQudGhlaXJzQ29udGludWF0aW9uICYmIGFyZ3Mudmlldy5jb250ZXh0LnRoZWlycyk7XHJcblxyXG4gICAgYXJncy52aWV3LmNvbnRleHQudGhlaXJzSW1nID0gYXJncy52aWV3LmNvbnRleHQudGhlaXJzQ29udGludWF0aW9uO1xyXG4gICAgYXJncy52aWV3LmNvbnRleHQuaW1nID0gIWFyZ3Mudmlldy5jb250ZXh0LnRoZWlyc0ltZztcclxuICAgIFxyXG4gICAgYXJncy52aWV3LmNvbnRleHQudGltZSA9ICghYXJncy52aWV3LmNvbnRleHQubWluZVRpbWUgJiYgIWFyZ3Mudmlldy5jb250ZXh0LnRoZWlyc1RpbWUpICAgIFxyXG4gICAgYXJncy52aWV3LmNvbnRleHQuZXZlbiA9IChhcmdzLmluZGV4ICUgMiA9PT0gMCk7XHJcbiAgXHRhcmdzLnZpZXcuY29udGV4dC5vZGQgPSAoYXJncy5pbmRleCAlIDIgPT09IDEpO1xyXG4gIH1cclxuXHJcbiAgb25OYXZCdG5UYXAoKSB7XHJcbiAgXHRpZih0aGlzLnJvdXRlci5jYW5Hb0JhY2soKSlcclxuICBcdFx0dGhpcy5yb3V0ZXIuYmFjaygpO1xyXG4gIFx0ZWxzZVxyXG4gIFx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ2NoYXQtbGlzdCddLCB7Y2xlYXJIaXN0b3J5OiB0cnVlfSk7XHJcbiAgfVxyXG5cclxuICBvblRleHRUYXAoKSB7XHJcbiAgICB0aGlzLmxpc3Quc2Nyb2xsVG9JbmRleCh0aGlzLm1lc3NhZ2VzLmxlbmd0aCAtIDEpO1xyXG4gIH1cclxuXHJcbiAgdG9WaWV3SW1hZ2UoaW1nU291cmNlKSB7XHJcbiAgICB0aGlzLnRyYW5zZmVyU2VydmljZS5zZXREYXRhKGltZ1NvdXJjZSk7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ3ZpZXctaW1hZ2UnXSk7XHJcbiAgfVxyXG5cclxuICBsb2FkTW9yZURhdGEoKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZygnTG9hZCBtb3JlJylcclxuICB9XHJcblxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCIvKiBBZGQgbW9iaWxlIHN0eWxlcyBmb3IgdGhlIGNvbXBvbmVudCBoZXJlLiAgKi9cXG4uZGVsZXRlLWJ0biB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBjb2xvcjogI2FjMDBlNjtcXG4gICAgLypwYWRkaW5nOiA2cHggMjRweDsqL1xcbiAgICBib3JkZXItd2lkdGg6IDE7XFxuICAgIGJvcmRlci1jb2xvcjogI2FjMDBlNjtcXG4gICAgYm9yZGVyLXJhZGl1czogNTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmbG9hdDogY2VudGVyO1xcbiAgICBtYXJnaW46IGF1dG87IFxcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBmb250LWZhbWlseTogXFxcIlNlZ29lIFVJXFxcIixBcmlhbCxzYW5zLXNlcmlmO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxNTtcXG4gICAgd2lkdGg6IDEyMDtcXG4gICAgaGVpZ2h0OiA0MDtcXG4gICAgaG9yaXpvbnRhbC1hbGlnbjpyaWdodDtcXG59XFxuXFxuLmRlbGV0ZS1idG46aGlnaGxpZ2h0ZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjllNmZmO1xcbn1cXG5cXG4uY2FuY2VsLWJ0biB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAvKmNvbG9yOiB3aGl0ZTsqL1xcbiAgICAvKnBhZGRpbmc6IDZweCAyNHB4OyovXFxuICAgIGJvcmRlci13aWR0aDogMTtcXG4gICAgYm9yZGVyLWNvbG9yOiBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogNTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmbG9hdDogY2VudGVyO1xcbiAgICBtYXJnaW46IGF1dG87IFxcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBmb250LWZhbWlseTogXFxcIlNlZ29lIFVJXFxcIixBcmlhbCxzYW5zLXNlcmlmO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNTtcXG4gICAgbWFyZ2luLWxlZnQ6IDE1O1xcbiAgICB3aWR0aDogMTIwO1xcbiAgICBoZWlnaHQ6IDQwO1xcbiAgICBob3Jpem9udGFsLWFsaWduOmxlZnQ7XFxufVxcblxcbi5jYW5jZWwtYnRuOmhpZ2hsaWdodGVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcXG59XFxuXFxuLmRlbGV0ZS1sYWJlbCB7XFxuXFx0Zm9udC1zaXplOiAyMDtcXG5cXHRtYXJnaW4tdG9wOiAxODtcXG5cXHRtYXJnaW4tYm90dG9tOiA0ODtcXG5cXHRtYXJnaW4tbGVmdDogMTg7XFxuXFx0bWFyZ2luLXJpZ2h0OiAxODtcXG5cXHRjb2xvcjogYmxhY2s7XFxufVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxTdGFja0xheW91dD5cXHJcXG5cXHQ8TGFiZWwgdGV4dFdyYXA9XFxcInRydWVcXFwiIHRleHQ9XFxcIkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGU/XFxcIiBjbGFzcz1cXFwiZGVsZXRlLWxhYmVsXFxcIj48L0xhYmVsPlxcclxcblxcdDxHcmlkTGF5b3V0IHJvd3M9XFxcImF1dG9cXFwiIGNvbHVtbnM9XFxcIipcXFwiPlxcclxcblxcdFxcdDxCdXR0b24gcm93PVxcXCIwXFxcIiB0ZXh0PVxcXCJDYW5jZWxcXFwiIGNsYXNzPVxcXCJjYW5jZWwtYnRuXFxcIiAodGFwKT1cXFwiY2xvc2UoJ2NhbmNlbCcpXFxcIj48L0J1dHRvbj5cXHJcXG5cXHRcXHQ8QnV0dG9uIHJvdz1cXFwiMFxcXCIgdGV4dD1cXFwiRGVsZXRlXFxcIiBjbGFzcz1cXFwiZGVsZXRlLWJ0blxcXCIgKHRhcCk9XFxcImNsb3NlKCdkZWxldGUnKVxcXCI+PC9CdXR0b24+XFxyXFxuXFx0PC9HcmlkTGF5b3V0PlxcclxcbjwvU3RhY2tMYXlvdXQ+XCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNb2RhbERpYWxvZ1BhcmFtcyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9kaXJlY3RpdmVzL2RpYWxvZ3NcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLWNvbmZpcm1hdGlvbicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbmZpcm1hdGlvbi5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY29uZmlybWF0aW9uLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29uZmlybWF0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwYXJhbXM6IE1vZGFsRGlhbG9nUGFyYW1zKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG5cclxuICBjbG9zZShyZXMpIHtcclxuICBcdHRoaXMucGFyYW1zLmNsb3NlQ2FsbGJhY2socmVzKTtcclxuICB9XHJcblxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCIvKlxcbkFkZCB5b3VyIE5hdGl2ZVNjcmlwdCBzcGVjaWZpYyBzdHlsZXMgaGVyZS5cXG5UbyBsZWFybiBtb3JlIGFib3V0IHN0eWxpbmcgaW4gTmF0aXZlU2NyaXB0IHNlZTpcXG5odHRwczovL2RvY3MubmF0aXZlc2NyaXB0Lm9yZy9hbmd1bGFyL3VpL3N0eWxpbmdcXG4qL1wiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxTdGFja0xheW91dD5cXG4gIDxMYWJlbCB0ZXh0PVxcXCJjb25uZWN0IHdvcmtzXFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCI+PC9MYWJlbD5cXG4gIDxMYWJlbCB0ZXh0PVxcXCJUaGlzIGlzIGEgbWlncmF0ZWQgY29tcG9uZW50XFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCI+PC9MYWJlbD5cXG4gIDxMYWJlbCB0ZXh0PVxcXCJVcGRhdGUgaXQgdG8gcHJvdmlkZSB0aGUgVUkgZWxlbWVudHMgcmVxdWlyZWQgaW4geW91ciBtb2JpbGUgYXBwXFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCI+PC9MYWJlbD5cXG48L1N0YWNrTGF5b3V0PlxcblxcbjwhLS1cXG5PcmlnaW5hbCBXZWIgdGVtcGxhdGU6XFxuXFxuPHA+XFxyXFxuICBjb25uZWN0IHdvcmtzIVxcclxcbjwvcD5cXHJcXG5cXG4tLT5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IExvZ2luY2hlY2tTZXJ2aWNlIH0gZnJvbSAnLi4vbG9naW5jaGVjay5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLWNvbm5lY3QnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jb25uZWN0LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jb25uZWN0LmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29ubmVjdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbG9naW5jaGVja1NlcnZpY2U6IExvZ2luY2hlY2tTZXJ2aWNlKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgXHR0aGlzLmxvZ2luY2hlY2tTZXJ2aWNlLmxvZ2luQ2hlY2soKTtcclxuICB9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFRyYW5zZmVyU2VydmljZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOlJvdXRlcikgeyB9XHJcblxyXG4gIHByaXZhdGUgZGF0YTtcclxuXHJcbiAgc2V0RGF0YShkYXRhKXtcclxuICAgIHRoaXMuZGF0YSA9IGRhdGE7XHJcbiAgfVxyXG5cclxuICBnZXREYXRhKCl7XHJcbiAgICBsZXQgdGVtcCA9IHRoaXMuZGF0YTtcclxuICAgIHRoaXMuY2xlYXJEYXRhKCk7XHJcbiAgICByZXR1cm4gdGVtcDtcclxuICB9XHJcblxyXG4gIGNsZWFyRGF0YSgpe1xyXG4gICAgdGhpcy5kYXRhID0gdW5kZWZpbmVkO1xyXG4gIH1cclxuXHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IFwicCB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2Q4YzNlYztcXHJcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNjbG9zZS1kaWFsb2cge1xcclxcblxcdGZsb2F0OiByaWdodDtcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlIHtcXHJcXG5cXHRmb250LWNvbG9yOiBibGFjaztcXHJcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcclxcbiAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNWVtO1xcclxcbn1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8cCBpZD1cXFwiZGlhbG9nXFxcIj5cXG4gIFlvdXIgc2V0dGluZ3MgaGF2ZSBiZWVuIHVwZGF0ZWQhXFxuICA8c3BhbiBjbGFzcz1cXFwiY2xvc2VcXFwiIGlkPVxcXCJjbG9zZS1kaWFsb2dcXFwiPiZ0aW1lczs8L3NwYW4+XFxuPC9wPlxcblwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWRpYWxvZycsXG4gIHRlbXBsYXRlVXJsOiAnLi9kaWFsb2cuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9kaWFsb2cuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIERpYWxvZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgXHRcbiAgfVxuXG59XG4iLCJpbXBvcnQge1xyXG4gICAgSW5qZWN0YWJsZSxcclxuICAgIEluamVjdG9yLFxyXG4gICAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG4gICAgRW1iZWRkZWRWaWV3UmVmLFxyXG4gICAgQXBwbGljYXRpb25SZWZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IFBvc3RpbmdDb21wb25lbnQgfSBmcm9tICcuL3Bvc3RpbmcvcG9zdGluZy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQYXltZW50TWV0aG9kQ29tcG9uZW50IH0gZnJvbSAnLi9wYXltZW50LW1ldGhvZC9wYXltZW50LW1ldGhvZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUcmFuc2ZlclNlcnZpY2UgfSBmcm9tICcuL2RhdGF0cmFuc2Zlci5zZXJ2aWNlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIER5bmFtaWNBZGRTZXJ2aWNlIHtcclxuICBcclxuICBjb25zdHJ1Y3RvcihcclxuICAgICAgcHJpdmF0ZSBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuICAgICAgcHJpdmF0ZSBhcHBSZWY6IEFwcGxpY2F0aW9uUmVmLFxyXG4gICAgICBwcml2YXRlIGluamVjdG9yOiBJbmplY3RvcixcclxuICAgICAgcHJpdmF0ZSB0cmFuc2ZlclNlcnZpY2U6IFRyYW5zZmVyU2VydmljZSxcclxuICApIHsgfVxyXG4gIFxyXG4gIGFwcGVuZENvbXBvbmVudFRvQm9keShsYXlvdXQ9bnVsbCkge1xyXG4gICAgLy8gMS4gQ3JlYXRlIGEgY29tcG9uZW50IHJlZmVyZW5jZSBmcm9tIHRoZSBjb21wb25lbnQgXHJcbiAgICBjb25zdCBjb21wb25lbnRSZWYgPSB0aGlzLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlclxyXG4gICAgICAucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoUG9zdGluZ0NvbXBvbmVudClcclxuICAgICAgLmNyZWF0ZSh0aGlzLmluamVjdG9yKTtcclxuICAgIC8vIDIuIEF0dGFjaCBjb21wb25lbnQgdG8gdGhlIGFwcFJlZiBzbyB0aGF0IGl0J3MgaW5zaWRlIHRoZSBuZyBjb21wb25lbnQgdHJlZVxyXG4gICAgdGhpcy5hcHBSZWYuYXR0YWNoVmlldyhjb21wb25lbnRSZWYuaG9zdFZpZXcpO1xyXG4gICAgLy8gMy4gR2V0IERPTSBlbGVtZW50IGZyb20gY29tcG9uZW50XHJcbiAgICBjb25zdCBkb21FbGVtID0gKGNvbXBvbmVudFJlZi5ob3N0VmlldyBhcyBFbWJlZGRlZFZpZXdSZWY8YW55PilcclxuICAgICAgLnJvb3ROb2Rlc1swXTtcclxuICAgIC8vIDQuIEFwcGVuZCBET00gZWxlbWVudCB0byB0aGUgYm9keVxyXG4gICAgbGF5b3V0LmFkZENoaWxkKGRvbUVsZW0pXHJcbiAgfVxyXG5cclxuICBhcHBlbmRQYXltZW50TWV0aG9kKG1ldGhvZCwgaW5mbywgc3VwZXJib2R5LCBpc0FkZCwgdG9rZW4pIHtcclxuXHJcbiAgfVxyXG59IiwiaW1wb3J0IHtcclxuICAgIEluamVjdGFibGUsXHJcbiAgICBJbmplY3RvcixcclxuICAgIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuICAgIEVtYmVkZGVkVmlld1JlZixcclxuICAgIEFwcGxpY2F0aW9uUmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBQb3N0aW5nQ29tcG9uZW50IH0gZnJvbSAnLi9wb3N0aW5nL3Bvc3RpbmcuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGF5bWVudE1ldGhvZENvbXBvbmVudCB9IGZyb20gJy4vcGF5bWVudC1tZXRob2QvcGF5bWVudC1tZXRob2QuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVHJhbnNmZXJTZXJ2aWNlIH0gZnJvbSAnLi9kYXRhdHJhbnNmZXIuc2VydmljZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBEeW5hbWljQWRkU2VydmljZSB7XHJcbiAgXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICAgIHByaXZhdGUgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcbiAgICAgIHByaXZhdGUgYXBwUmVmOiBBcHBsaWNhdGlvblJlZixcclxuICAgICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsXHJcbiAgICAgIHByaXZhdGUgdHJhbnNmZXJTZXJ2aWNlOiBUcmFuc2ZlclNlcnZpY2UsXHJcbiAgKSB7IH1cclxuICBcclxuICBhcHBlbmRDb21wb25lbnRUb0JvZHkobGF5b3V0PW51bGwpIHtcclxuICAgIC8vIDEuIENyZWF0ZSBhIGNvbXBvbmVudCByZWZlcmVuY2UgZnJvbSB0aGUgY29tcG9uZW50IFxyXG4gICAgY29uc3QgY29tcG9uZW50UmVmID0gdGhpcy5jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXJcclxuICAgICAgLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KFBvc3RpbmdDb21wb25lbnQpXHJcbiAgICAgIC5jcmVhdGUodGhpcy5pbmplY3Rvcik7XHJcbiAgICAvLyAyLiBBdHRhY2ggY29tcG9uZW50IHRvIHRoZSBhcHBSZWYgc28gdGhhdCBpdCdzIGluc2lkZSB0aGUgbmcgY29tcG9uZW50IHRyZWVcclxuICAgIHRoaXMuYXBwUmVmLmF0dGFjaFZpZXcoY29tcG9uZW50UmVmLmhvc3RWaWV3KTtcclxuICAgIC8vIDMuIEdldCBET00gZWxlbWVudCBmcm9tIGNvbXBvbmVudFxyXG4gICAgY29uc3QgZG9tRWxlbSA9IChjb21wb25lbnRSZWYuaG9zdFZpZXcgYXMgRW1iZWRkZWRWaWV3UmVmPGFueT4pXHJcbiAgICAgIC5yb290Tm9kZXNbMF07XHJcbiAgICAvLyA0LiBBcHBlbmQgRE9NIGVsZW1lbnQgdG8gdGhlIGJvZHlcclxuICAgIGxheW91dC5hZGRDaGlsZChkb21FbGVtKVxyXG4gIH1cclxuXHJcbiAgYXBwZW5kUGF5bWVudE1ldGhvZChtZXRob2QsIGluZm8sIHN1cGVyYm9keSwgaXNBZGQsIHRva2VuKSB7XHJcblxyXG4gIH1cclxufSIsIm1vZHVsZS5leHBvcnRzID0gXCIuZmxvYXQtYnRuIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjYWMwMGU2O1xcclxcblxcdHdpZHRoOiA1NjtcXHJcXG5cXHRoZWlnaHQ6IDU2O1xcclxcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmZsb2F0LWJ0bi10ZXh0IHtcXHJcXG5cXHRjb2xvcjogI2ZmZmZmZjtcXHJcXG5cXHRmb250LXNpemU6IDM2O1xcclxcblxcdC8qbWFyZ2luLXRvcDogLTY7Ki9cXHJcXG59XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJmbG9hdC1idG5cXFwiPlxcclxcblxcdDxMYWJlbCBjbGFzcz1cXFwiZmxvYXQtYnRuLXRleHRcXFwiIHRleHQ9XFxcIitcXFwiPjwvTGFiZWw+XFxyXFxuPC9TdGFja0xheW91dD5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1mbG9hdC1idG4nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9mbG9hdC1idG4uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2Zsb2F0LWJ0bi5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEZsb2F0QnRuQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG5cclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLyogQWRkIG1vYmlsZSBzdHlsZXMgZm9yIHRoZSBjb21wb25lbnQgaGVyZS4gICovXFxyXFxuLmhlYWRlcntcXHJcXG4gICAgbWFyZ2luLXRvcDogNTA7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAyMjtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAyMjtcXHJcXG5cXHRjb2xvcjogYmxhY2s7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnN1Ym1pdC1idG57XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6I2FjMDBlNjtcXHJcXG4gICAgd2lkdGg6IDc1JTtcXHJcXG4gICAgaGVpZ2h0OiAxNzBweDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJTZWdvZSBVSVxcXCIsQXJpYWwsc2Fucy1zZXJpZjtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBtYXJnaW4tdG9wOiAyMDtcXHJcXG59XFxyXFxuLnRleHQtZmllbGR7XFxyXFxuICAgIHdpZHRoOiA4NSU7XFxyXFxuICAgIG1hcmdpbi10b3A6IDIwO1xcclxcbiAgICBjb2xvcjojNjk2OTY5XFxyXFxufVxcclxcblxcclxcbi5jbG9zZS1idXR0b24tY29udGFpbmVyIHtcXHJcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0bGVmdDogMDtcXHJcXG59XFxyXFxuLmNsb3NlIHtcXHJcXG5cXHRtYXJnaW46IDEwO1xcclxcblxcdGZvbnQtc2l6ZTogNDA7XFxyXFxuXFx0d2lkdGg6IDQ4O1xcclxcbiAgICBoZWlnaHQ6IDQ4O1xcclxcbiAgICBjb2xvcjogYmxhY2tcXHJcXG59XFxyXFxuXFxyXFxuLmVycm9yLW1lc3NhZ2Uge1xcclxcblxcdGNvbG9yOiByZWQ7XFxyXFxuXFx0Zm9udC1zaXplOiAxNjtcXHJcXG5cXHR2aXNpYmlsaXR5OiBjb2xsYXBzZTtcXHJcXG59XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPFN0YWNrbGF5b3V0PlxcclxcbiAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJjbG9zZS1idXR0b24tY29udGFpbmVyXFxcIiBvcmllbnRhdGlvbj1cXFwiaG9yaXpvbnRhbFxcXCI+XFxyXFxuICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIiZ0aW1lcztcXFwiIGNsYXNzPVxcXCJjbG9zZVxcXCIgKHRhcCk9XFxcImNsb3NlKCdjYW5jZWwnKVxcXCI+PC9MYWJlbD5cXHJcXG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxyXFxuICAgICAgICA8TGFiZWwgY2xhc3M9XFxcImhlYWRlclxcXCIgdGV4dD1cXFwiRW50ZXIgdGhlIGVtYWlsIGFkZHJlc3MgeW91IHVzZWQgdG8gcmVnaXN0ZXIgZm9yIENvbGxlZ2VQb29sIHRvIHJlc2V0IHlvdXIgcGFzc3dvcmQuXFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCI+PC9MYWJlbD5cXHJcXG4gICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiaW5wdXQtZmllbGRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIGNsYXNzPVxcXCJ0ZXh0LWZpZWxkXFxcIiBoaW50PVxcXCJFbWFpbFxcXCIga2V5Ym9hcmRUeXBlPVxcXCJlbWFpbFxcXCIgYXV0b2NvcnJlY3Q9XFxcImZhbHNlXFxcIiBhdXRvY2FwaXRhbGl6YXRpb25UeXBlPVxcXCJub25lXFxcIiBbKG5nTW9kZWwpXT1cXFwiZW1haWxcXFwiIHJldHVybktleVR5cGU9XFxcIm5leHRcXFwiIChyZXR1cm5QcmVzcyk9XFxcImZvY3VzUGFzc3dvcmQoKVxcXCIgI2VtPjwvVGV4dEZpZWxkPlxcclxcbiAgICAgICAgPC9TdGFja0xheW91dD5cXHJcXG4gICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJObyBhY2NvdW50IGNvdWxkIGJlIGZvdW5kIHdpdGggeW91ciBlbWFpbFxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiIGNsYXNzPVxcXCJlcnJvci1tZXNzYWdlXFxcIiAjZXJyb3JNZXNzYWdlPjwvTGFiZWw+XFxyXFxuICAgIFxcclxcbiAgICAgICAgPEJ1dHRvbiB0ZXh0PVxcXCJTdWJtaXRcXFwiICh0YXApPVxcXCJzdWJtaXQoZW1haWwpXFxcIiBjbGFzcz1cXFwic3VibWl0LWJ0blxcXCI+PC9CdXR0b24+XFxyXFxuICAgIFxcclxcbiAgICA8L1N0YWNrbGF5b3V0PlwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDb250YWluZXJSZWYsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNb2RhbERpYWxvZ1BhcmFtcyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9kaXJlY3RpdmVzL2RpYWxvZ3NcIjtcclxuaW1wb3J0ICogYXMgZmlyZWJhc2UgZnJvbSAnbmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZSc7XHJcbmltcG9ydCB7IExvZ2luY2hlY2tTZXJ2aWNlIH0gZnJvbSAnLi4vbG9naW5jaGVjay5zZXJ2aWNlLnRucyc7XHJcbmltcG9ydCB7IFRyYW5zZmVyU2VydmljZSB9IGZyb20gJy4uL2RhdGF0cmFuc2Zlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTW9kYWxEaWFsb2dTZXJ2aWNlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2RpcmVjdGl2ZXMvZGlhbG9nc1wiO1xyXG5pbXBvcnQgeyBMYWJlbCB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvbGFiZWwnO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdhcHAtZm9yZ2V0LWZvcm0nLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL2ZvcmdldC1mb3JtLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL2ZvcmdldC1mb3JtLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRm9yZ2V0Rm9ybUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwYXJhbXM6IE1vZGFsRGlhbG9nUGFyYW1zLCBwcml2YXRlIHRyYW5zZmVyU2VydmljZTogVHJhbnNmZXJTZXJ2aWNlLCBwcml2YXRlIGxvZ2luY2hlY2tTZXJ2aWNlOiBMb2dpbmNoZWNrU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIHZjUmVmOiBWaWV3Q29udGFpbmVyUmVmLCBwcml2YXRlIG1vZGFsOiBNb2RhbERpYWxvZ1NlcnZpY2UpIHsgfVxyXG5cclxuICAgIEBWaWV3Q2hpbGQoXCJlcnJvck1lc3NhZ2VcIix7IHN0YXRpYzogdHJ1ZSB9KSBlbTogRWxlbWVudFJlZjtcclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgIH1cclxuXHJcbiAgICBjbG9zZShyZXMpIHtcclxuICAgICAgICBsZXQgZXJyb3JNZXNzYWdlID0gPExhYmVsPnRoaXMuZW0ubmF0aXZlRWxlbWVudDtcclxuICAgICAgICBlcnJvck1lc3NhZ2Uuc3R5bGUudmlzaWJpbGl0eSA9ICdjb2xsYXBzZSc7XHJcbiAgICAgICAgdGhpcy5wYXJhbXMuY2xvc2VDYWxsYmFjayhyZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHN1Ym1pdChlbWFpbCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZW1haWxcIiwgZW1haWwpXHJcbiAgICAgICAgZmlyZWJhc2Uuc2VuZFBhc3N3b3JkUmVzZXRFbWFpbChlbWFpbCkudGhlbihcclxuICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbGVydCgnQW4gZW1haWwgaGFzIGJlZW4gc2VudCB0byAnICsgZW1haWwgKyAnIHdpdGggZGV0YWlscyBvZiBob3cgdG8gcmVjb3ZlciB5b3VyIGFjY291bnQnKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZSgnY2FuY2VsJylcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZXJyb3JNZXNzYWdlID0gPExhYmVsPiB0aGlzLmVtLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2Uuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBhbGVydChtZXNzYWdlOiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gYWxlcnQoe1xyXG4gICAgICAgICAgICB0aXRsZTogXCJDb2xsZWdlUG9vbFwiLFxyXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiQ2xvc2VcIixcclxuICAgICAgICAgICAgbWVzc2FnZTogbWVzc2FnZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgR29vZ2xlTWFwc1NlcnZpY2Uge1xyXG5cclxuICBBUElfS0VZID0gJ0FJemFTeUFJVHhTMWptZjhQTXRhelJndVdjQWZXUXhXMWtQT29ZZyc7XHJcbiAgc3RhdGljX21hcHNfdXJpID0gJ2h0dHBzOi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9zdGF0aWNtYXA/a2V5PScgKyB0aGlzLkFQSV9LRVkgKyAnJnNpemU9MzQweDIyMCZzY2FsZT0yJm1hcHR5cGU9cm9hZG1hcFxcJm1hcmtlcnM9c2l6ZTpzbWFsbCU3Q2NvbG9yOnJlZCU3QydcclxuICBzdGF0aWNfbWFwc191cmlfbGFyZ2UgPSAnaHR0cHM6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL3N0YXRpY21hcD9rZXk9JyArIHRoaXMuQVBJX0tFWSArICcmc2l6ZT01MTJ4NTEyJnNjYWxlPTImbWFwdHlwZT1yb2FkbWFwXFwmbWFya2Vycz1zaXplOnNtYWxsJTdDY29sb3I6cmVkJTdDJ1xyXG4gIFxyXG4gIGdlb2NvZGVfdXJpID0gJ2h0dHBzOi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9nZW9jb2RlL2pzb24/a2V5PScgKyB0aGlzLkFQSV9LRVkgKyAnJmFkZHJlc3M9J1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cENsaWVudDogSHR0cENsaWVudCkgeyB9XHJcblxyXG4gIGdldFN0YXRpY01hcChzdGFydGFkciwgZW5kYWRyKSB7XHJcbiAgXHR2YXIgZm9ybWF0dGVkX3N0YXJ0YWRyID0gc3RhcnRhZHIuc3BsaXQoJyAnKS5qb2luKCcrJylcclxuICBcdHZhciBmb3JtYXR0ZWRfc3RhcnRhZHIgPSBzdGFydGFkci5zcGxpdCgnJicpLmpvaW4oJ2FuZCcpXHJcbiAgXHR2YXIgZm9ybWF0dGVkX2VuZGFkciA9IGVuZGFkci5zcGxpdCgnICcpLmpvaW4oJysnKVxyXG4gIFx0dmFyIGZvcm1hdHRlZF9lbmRhZHIgPSBlbmRhZHIuc3BsaXQoJyYnKS5qb2luKCdhbmQnKVxyXG4gIFx0cmV0dXJuIHRoaXMuc3RhdGljX21hcHNfdXJpICsgZm9ybWF0dGVkX3N0YXJ0YWRyICsgXCImbWFya2Vycz1zaXplOm1lZCU3Q1wiICsgZm9ybWF0dGVkX2VuZGFkcjtcclxuICB9XHJcblxyXG4gIGdldFN0YXRpY01hcExhcmdlKHN0YXJ0YWRyLCBlbmRhZHIpIHtcclxuICBcdHZhciBmb3JtYXR0ZWRfc3RhcnRhZHIgPSBzdGFydGFkci5zcGxpdCgnICcpLmpvaW4oJysnKVxyXG4gIFx0dmFyIGZvcm1hdHRlZF9zdGFydGFkciA9IHN0YXJ0YWRyLnNwbGl0KCcmJykuam9pbignYW5kJylcclxuICBcdHZhciBmb3JtYXR0ZWRfZW5kYWRyID0gZW5kYWRyLnNwbGl0KCcgJykuam9pbignKycpXHJcbiAgXHR2YXIgZm9ybWF0dGVkX2VuZGFkciA9IGVuZGFkci5zcGxpdCgnJicpLmpvaW4oJ2FuZCcpXHJcbiAgXHRyZXR1cm4gdGhpcy5zdGF0aWNfbWFwc191cmlfbGFyZ2UgKyBmb3JtYXR0ZWRfc3RhcnRhZHIgKyBcIiZtYXJrZXJzPXNpemU6bWVkJTdDXCIgKyBmb3JtYXR0ZWRfZW5kYWRyO1xyXG4gIH1cclxuXHJcbiAgZ2V0R2VvY29kZVJlc3VsdHMoYWRkcmVzcykge1xyXG4gIFx0dmFyIGZvcm1hdHRlZF9hZGRyZXNzID0gYWRkcmVzcy5zcGxpdCgnICcpLmpvaW4oJysnKVxyXG4gIFx0dmFyIGZvcm1hdHRlZF9hZGRyZXNzID0gYWRkcmVzcy5zcGxpdCgnJicpLmpvaW4oJ2FuZCcpXHJcbiAgXHRyZXR1cm4gdGhpcy5odHRwQ2xpZW50LmdldChgJHt0aGlzLmdlb2NvZGVfdXJpfWAgKyBmb3JtYXR0ZWRfYWRkcmVzcyk7XHJcbiAgfVxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCIvKlxcbkFkZCB5b3VyIE5hdGl2ZVNjcmlwdCBzcGVjaWZpYyBzdHlsZXMgaGVyZS5cXG5UbyBsZWFybiBtb3JlIGFib3V0IHN0eWxpbmcgaW4gTmF0aXZlU2NyaXB0IHNlZTpcXG5odHRwczovL2RvY3MubmF0aXZlc2NyaXB0Lm9yZy9hbmd1bGFyL3VpL3N0eWxpbmdcXG4qL1xcblxcbi5hY3Rpb25iYXIge1xcblxcdGZvbnQtc2l6ZTogMjI7XFxuXFx0Zm9udC13ZWlnaHQ6IDcwMDtcXG5cXHR0ZXh0LWFsaWduOiBsZWZ0O1xcblxcdGNvbG9yOiBibGFjaztcXG59XFxuXFxuTGFiZWwge1xcblxcdHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblxcbi5uYW1lLWxhYmVsIHtcXG5cXHRtYXJnaW4tdG9wOiAxNjtcXG5cXHRtYXJnaW4tbGVmdDogMTg7XFxuXFx0Y29sb3I6IGJsYWNrO1xcblxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxuXFx0Zm9udC1zaXplOiAxNztcXG59XFxuXFxuLmluZm8tbGFiZWwge1xcblxcdG1hcmdpbi10b3A6IDQ7XFxuXFx0bWFyZ2luLWxlZnQ6IDE4O1xcblxcdG1hcmdpbi1ib3R0b206IDE2O1xcblxcdGNvbG9yOiBibGFjaztcXG59XFxuXFxuLnBvc3Qge1xcblxcdGJvcmRlci1ib3R0b20td2lkdGg6IDE7XFxuXFx0Ym9yZGVyLWNvbG9yOiAjZjFmMWYxO1xcblxcdG1hcmdpbi10b3A6IDE1MDtcXG5cXHRtYXJnaW4tYm90dG9tOiAxNTtcXG59XFxuXFxuLnBvc3Q6aGlnaGxpZ2h0ZWQge1xcblxcdC8qYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTsqL1xcbn1cXG5cXG4ucG9zdGluZy1tYXAge1xcblxcdG1hcmdpbi1ib3R0b206IDE2O1xcblxcdGJvcmRlci1yYWRpdXM6IDEwO1xcblxcdGhlaWdodDogMjIwO1xcblxcdHdpZHRoOiAzNDA7XFxufVxcblxcbi5wcm9maWxlLXBpY3R1cmUge1xcblxcdGhlaWdodDogNTA7XFxuXFx0d2lkdGg6IDUwO1xcblxcdGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuXFx0dmVydGljYWwtYWxpZ246IHRvcDtcXG5cXHRtYXJnaW4tbGVmdDogMTY7XFxuXFx0bWFyZ2luLXRvcDogMjA7XFxufVxcblxcbi5yZWZyZXNoIHtcXG5cXHRjb2xvcjogI2FjMDBlNjtcXG59XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPCEtLSA8YXBwLW5hdmlnYXRpb24+PC9hcHAtbmF2aWdhdGlvbj4gLS0+XFxyXFxuPFB1bGxUb1JlZnJlc2ggKHJlZnJlc2gpPVxcXCJyZWZyZXNoTGlzdCgkZXZlbnQpXFxcIiBjbGFzcz1cXFwicmVmcmVzaFxcXCI+XFxyXFxuXFx0PExpc3RWaWV3IFtpdGVtc109XFxcInBvc3RpbmdzXFxcIiAoaXRlbVRhcCk9XFxcIm9uSXRlbVRhcCgkZXZlbnQpXFxcIiAjbGlzdFZpZXcgaWQ9XFxcImxpc3RWaWV3XFxcIj5cXHJcXG5cXHQgICAgPG5nLXRlbXBsYXRlIGxldC1pdGVtPVxcXCJpdGVtXFxcIiBsZXQtaT1cXFwiaW5kZXhcXFwiIGxldC1vZGQ9XFxcIm9kZFxcXCIgbGV0LWV2ZW49XFxcImV2ZW5cXFwiPlxcclxcblxcdCAgICAgICAgPFN0YWNrTGF5b3V0IFtjbGFzcy5vZGRdPVxcXCJvZGRcXFwiIFtjbGFzcy5ldmVuXT1cXFwiZXZlblxcXCIgY2xhc3M9XFxcInBvc3RcXFwiPlxcclxcblxcdCAgICAgICAgXFx0ICA8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XFxcImhvcml6b250YWxcXFwiPlxcclxcblxcdCAgICAgICAgXFx0ICBcXHQ8SW1hZ2UgW3NyY109XFxcIml0ZW0ucHJvZmlsZVNvdXJjZVxcXCIgY2xhc3M9XFxcInByb2ZpbGUtcGljdHVyZVxcXCIgc3RyZXRjaD1cXFwiYXNwZWN0Rml0XFxcIj48L0ltYWdlPlxcclxcblxcdCAgICAgICAgXFx0ICBcXHQ8U3RhY2tMYXlvdXQ+XFxyXFxuXFx0XFx0ICAgICAgICAgICAgICBcXHQ8TGFiZWwgdGV4dFdyYXA9XFxcInRydWVcXFwiIGlkPVxcXCJwb3N0LW5hbWVcXFwiIGNsYXNzPVxcXCJuYW1lLWxhYmVsXFxcIiBbdGV4dF09XFxcIml0ZW0udXNlcm5hbWVcXFwiPjwvTGFiZWw+XFxyXFxuXFx0XFx0ICAgICAgICAgICAgICBcXHQ8TGFiZWwgdGV4dFdyYXA9XFxcInRydWVcXFwiIGlkPVxcXCJwb3N0LWluZm9cXFwiIGNsYXNzPVxcXCJpbmZvLWxhYmVsXFxcIiBbdGV4dF09XFxcIml0ZW0uaW5mb1xcXCI+PC9MYWJlbD5cXHJcXG5cXHRcXHQgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcclxcblxcdCAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXHJcXG5cXHRcXHRcXHRcXHQgIDxJbWFnZSBbc3JjXT1cXFwiaXRlbS5tYXBTb3VyY2VcXFwiIHN0cmV0Y2g9XFxcImFzcGVjdEZpdFxcXCIgY2xhc3M9XFxcInBvc3RpbmctbWFwXFxcIj48L0ltYWdlPlxcclxcblxcdCAgICAgICAgPC9TdGFja0xheW91dD5cXHJcXG5cXHQgICAgPC9uZy10ZW1wbGF0ZT5cXHJcXG5cXHQ8L0xpc3RWaWV3PlxcclxcbjwvUHVsbFRvUmVmcmVzaD5cXHJcXG5cXHJcXG48IS0tXFxyXFxuT3JpZ2luYWwgV2ViIHRlbXBsYXRlOlxcclxcblxcclxcbjxhcHAtbmF2aWdhdGlvbj48L2FwcC1uYXZpZ2F0aW9uPlxcclxcblxcclxcbjxkaXYgY2xhc3M9XFxcInJpZ2h0LWJhY2tncm91bmRcXFwiPlxcclxcblxcdDxkaXYgY2xhc3M9XFxcInVzZXItY2FyZC1yaWdodCBpbmZvXFxcIj5cXHJcXG5cXHRcXHQ8aW1nIHNyYz1cXFwic3JjL2ltZy9zYW1wbGVfcHJvZmlsZS5qcGdcXFwiIGFsdD1cXFwiUHJvZmlsZSBQaG90b1xcXCIgaWQ9XFxcInByb2ZpbGVfcGljXFxcIj5cXHJcXG5cXHRcXHQ8ZGl2IGlkPVxcXCJuYW1lX2luZm9cXFwiPlxcclxcblxcdFxcdFxcdDxoMyBpZD1cXFwidXNlcm5hbWVcXFwiPnt7dXNlci5uYW1lfX08L2gzPlxcclxcblxcdFxcdFxcdDxoMyBpZD1cXFwidXNlcl91bml2ZXJzaXR5XFxcIj5Vbml2ZXJzaXR5IG9mIFZpcmdpbmlhPC9oMz5cXHJcXG5cXHRcXHQ8L2Rpdj5cXHJcXG5cXHRcXHQ8ZGl2IGNsYXNzPVxcXCJ1c2VyU3RhdHNcXFwiPlxcclxcblxcdFxcdFxcdDxzcGFuIGlkPVxcXCJ1c2VyX3JpZGVzX2dpdmVuXFxcIiBjbGFzcz1cXFwidXNlckRhdGFcXFwiPlJpZGVzIEdpdmVuOiA8L3NwYW4+XFxyXFxuXFx0XFx0XFx0PHNwYW4gaWQ9XFxcIm51bV9yaWRlc19naXZlblxcXCI+PC9zcGFuPlxcclxcblxcdFxcdFxcdDxzcGFuIGlkPVxcXCJ1c2VyX3JpZGVzX3JlY2VpdmVkXFxcIiBjbGFzcz1cXFwidXNlckRhdGFcXFwiPlJpZGVzIFJlY2VpdmVkOiA8L3NwYW4+XFxyXFxuXFx0XFx0XFx0PHNwYW4gaWQ9XFxcIm51bV9yaWRlc19yZWNlaXZlZFxcXCI+PC9zcGFuPlxcclxcblxcdFxcdDwvZGl2PlxcclxcblxcdDwvZGl2PlxcclxcbjwvZGl2PlxcclxcbjxkaXYgaWQ9XFxcImhpc3RvcnlcXFwiIGNsYXNzPVxcXCJ0YWJjb250ZW50XFxcIj5cXHJcXG5cXHQ8aDMgYWxpZ249XFxcImNlbnRlclxcXCI+WW91ciBSaWRlczwvaDM+XFxyXFxuXFx0PGRpdiBpZD1cXFwiYmlnZmVlZFxcXCIgKHdpbmRvdzpyZXNpemUpPVxcXCJvblJlc2l6ZSgkZXZlbnQpXFxcIj48L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG4tLT5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVHJhbnNmZXJTZXJ2aWNlIH0gZnJvbSAnLi4vZGF0YXRyYW5zZmVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBQb3N0aW5nU2VydmljZSB9IGZyb20gJy4uL3Bvc3Rpbmcuc2VydmljZSc7XHJcbmltcG9ydCB7IFBvc3RpbmcgfSBmcm9tICcuLi9wb3N0aW5nLm1vZGVsJztcclxuaW1wb3J0IHsgRHluYW1pY0FkZFNlcnZpY2UgfSBmcm9tICcuLi9keW5hbWljLWFkZC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTG9naW5jaGVja1NlcnZpY2UgfSBmcm9tICcuLi9sb2dpbmNoZWNrLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlQXJyYXkgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS1hcnJheSc7XHJcbmltcG9ydCAqIGFzIGZpcmViYXNlIGZyb20gJ25hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2UnO1xyXG5pbXBvcnQgeyBMaXN0VmlldyB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvbGlzdC12aWV3JztcclxuaW1wb3J0IHsgSW1hZ2VTb3VyY2UsIGZyb21GaWxlLCBmcm9tUmVzb3VyY2UsIGZyb21CYXNlNjQsIGZyb21OYXRpdmVTb3VyY2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9pbWFnZS1zb3VyY2VcIjtcclxuaW1wb3J0IHsgRm9sZGVyLCBwYXRoLCBrbm93bkZvbGRlcnMgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9maWxlLXN5c3RlbVwiO1xyXG5pbXBvcnQgeyBDYWNoZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ltYWdlLWNhY2hlXCI7XHJcblxyXG5cclxuY2xhc3MgUG9zdEl0ZW0ge1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIHVzZXJuYW1lOiBTdHJpbmcsIHB1YmxpYyBpbmZvOiBzdHJpbmcsIHB1YmxpYyBwcm9maWxlU291cmNlOiBzdHJpbmcsIHB1YmxpYyBtYXBTb3VyY2U6IHN0cmluZykgeyB9XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLWhpc3RvcnknLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9oaXN0b3J5LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9oaXN0b3J5LmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSGlzdG9yeUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ2xpc3RWaWV3JywgeyBzdGF0aWM6IHRydWUgfSkgbHY6IEVsZW1lbnRSZWY7XHJcbiAgLy91c2VyID0gdGhpcy5sb2dpbmNoZWNrU2VydmljZS5nZXRVc2VyKCk7XHJcbiAgdXNlciA9ICcnO1xyXG4gIG5hbWUgPSBcIkFkYW0gWWVlXCI7XHJcbiAgYmxvY2tzID0gMDtcclxuICBwb3N0aW5ncyA9IG5ldyBPYnNlcnZhYmxlQXJyYXk8UG9zdEl0ZW0+KCk7XHJcbiAgcCA9IFtdO1xyXG4gIGlkcyA9IFtdO1xyXG4gIC8vIGNhY2hlID0gbmV3IENhY2hlKCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbG9naW5jaGVja1NlcnZpY2U6IExvZ2luY2hlY2tTZXJ2aWNlLCBwcml2YXRlIHRyYW5zZmVyU2VydmljZTogVHJhbnNmZXJTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHBvc3RpbmdTZXJ2aWNlOiBQb3N0aW5nU2VydmljZSwgcHJpdmF0ZSBhZGRTZXJ2aWNlOiBEeW5hbWljQWRkU2VydmljZSkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIFx0dGhpcy5sb2dpbmNoZWNrU2VydmljZS5sb2dpbkNoZWNrKCk7XHJcbiAgXHR0aGlzLnVzZXIgPSB0aGlzLmxvZ2luY2hlY2tTZXJ2aWNlLmdldFVzZXIoKVxyXG4gIFx0dGhpcy5sb2FkUG9zdGluZ3MoKTtcclxuICB9XHJcblxyXG4gIGxvYWRQb3N0aW5ncyhhcmdzPW51bGwpIHtcclxuICAgIHRoaXMucG9zdGluZ3Muc3BsaWNlKDApO1xyXG4gICAgdmFyIHBvc3RJZHMgPSBbXTtcclxuICAgIHZhciBwb3N0aW5nc0NvbGxlY3Rpb24gPSBmaXJlYmFzZS5maXJlc3RvcmUuY29sbGVjdGlvbigncG9zdGluZ3MnKTtcclxuICAgIHZhciB1c2Vyc0NvbGxlY3Rpb24gPSBmaXJlYmFzZS5maXJlc3RvcmUuY29sbGVjdGlvbigndXNlcnMnKS5kb2ModGhpcy51c2VyKTtcclxuICAgIHVzZXJzQ29sbGVjdGlvbi5nZXQoKS50aGVuKGRvYyA9PiB7XHJcbiAgICBcdHBvc3RJZHMgPSBkb2MuZGF0YSgpLnBvc3RzO1xyXG4gICAgXHRmb3IodmFyIGkgPSAwOyBpIDwgcG9zdElkcy5sZW5ndGg7IGkrKykge1xyXG4gICAgXHRcdHBvc3RpbmdzQ29sbGVjdGlvbi5kb2MocG9zdElkc1tpXSkuZ2V0KCkudGhlbihkb2MgPT4ge1xyXG4gICAgICAgICAgdGhpcy5jcmVhdGVQb3N0aW5nKGRvYy5kYXRhKCksIGRvYy5pZCk7XHJcbiAgICBcdFx0fSlcclxuICAgIFx0fVxyXG4gICAgXHRpZihhcmdzICE9IG51bGwpIHtcclxuXHQgICAgICAgIHZhciBwdWxsUmVmcmVzaCA9IGFyZ3Mub2JqZWN0O1xyXG5cdCAgICAgICAgcHVsbFJlZnJlc2gucmVmcmVzaGluZyA9IGZhbHNlO1xyXG5cdCAgICB9XHJcblx0ICAgIHZhciBsaXN0VmlldyA9IDxMaXN0Vmlldz4gdGhpcy5sdi5uYXRpdmVFbGVtZW50O1xyXG5cdCAgICBsaXN0Vmlldy5zY3JvbGxUb0luZGV4KHBvc3RJZHMubGVuZ3RoIC0gMSk7XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgY3JlYXRlUG9zdGluZyhkYXRhLCBpZCkge1xyXG4gICAgLy8gdGhpcy5jYWNoZS5wbGFjZWhvbGRlciA9IGZyb21GaWxlKFwifi9pbWcvZ3JheV9iYWNrZ3JvdW5kLmpwZ1wiKTtcclxuICAgIC8vIHRoaXMuY2FjaGUubWF4UmVxdWVzdHMgPSA1O1xyXG4gICAgbGV0IGluZm9fbGFiZWwgPSBcIlwiO1xyXG4gICAgaWYoZGF0YS5jYXBhY2l0eSAhPSBcIi0xXCIpXHJcbiAgICAgIGluZm9fbGFiZWwgPSBcIk9mZmVyaW5nIHJpZGUgbGVhdmluZyBcIiArIGRhdGEuZGF0ZSArIFwiIGZyb20gXCIgKyBkYXRhLnN0YXJ0QWRkcmVzcyArIFwiIHRvIFwiICsgZGF0YS5lbmRBZGRyZXNzICsgXCIgZm9yIFwiICsgZGF0YS5wcmljZTtcclxuICAgIGVsc2VcclxuICAgICAgaW5mb19sYWJlbCA9IFwiUmVxdWVzdGluZyByaWRlIGxlYXZpbmcgXCIgKyBkYXRhLmRhdGUgKyBcIiBmcm9tIFwiICsgZGF0YS5zdGFydEFkZHJlc3MgKyBcIiB0byBcIiArIGRhdGEuZW5kQWRkcmVzcztcclxuICAgIGNvbnN0IHVzZXJzQ29sbGVjdGlvbiA9IGZpcmViYXNlLmZpcmVzdG9yZS5jb2xsZWN0aW9uKCd1c2VycycpO1xyXG4gICAgdXNlcnNDb2xsZWN0aW9uLmRvYyhkYXRhLnVpZCkuZ2V0KCkudGhlbigoZG9jKSA9PiB7XHJcbiAgICAgIGlmKGRvYy5leGlzdHMpIHtcclxuICAgICAgICB2YXIgdXJsID0gZG9jLmRhdGEoKS5wcm9maWxlX3NvdXJjZTtcclxuICAgICAgICAvLyBpZih1cmwuc3Vic3RyaW5nKDAsIDI3KSA9PT0gJ2h0dHBzOi8vZ3JhcGguZmFjZWJvb2suY29tLycpXHJcbiAgICAgICAgLy8gICB1cmwgKz0gJz9oZWlnaHQ9MzAwJztcclxuICAgICAgICB0aGlzLnBvc3RpbmdzLnB1c2gobmV3IFBvc3RJdGVtKGRhdGEudXNlciwgaW5mb19sYWJlbCwgdXJsLCBkYXRhLm1hcF91cmwpKTtcclxuICAgICAgICB0aGlzLnAucHVzaChkYXRhKVxyXG4gICAgICAgIHRoaXMuaWRzLnB1c2goaWQpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICByZWZyZXNoTGlzdChhcmdzKSB7XHJcbiAgICB0aGlzLmxvYWRQb3N0aW5ncyhhcmdzKTtcclxuICB9XHJcblxyXG4gIC8vIGFkZENhY2hlKHVybCkge1xyXG4gIC8vICAgbGV0IGNhY2hlZEltYWdlU291cmNlO1xyXG4gIC8vICAgY29uc3QgbXlJbWFnZSA9IHRoaXMuY2FjaGUuZ2V0KHVybCk7XHJcbiAgLy8gICBpZiAobXlJbWFnZSkge1xyXG4gIC8vICAgICAgIC8vIElmIHByZXNlbnQgLS0gdXNlIGl0LlxyXG4gIC8vICAgICAgIGNhY2hlZEltYWdlU291cmNlID0gZnJvbU5hdGl2ZVNvdXJjZShteUltYWdlKTtcclxuICAvLyAgICAgICByZXR1cm4gY2FjaGVkSW1hZ2VTb3VyY2U7XHJcbiAgLy8gICB9IGVsc2Uge1xyXG4gIC8vICAgICAgIC8vIElmIG5vdCBwcmVzZW50IC0tIHJlcXVlc3QgaXRzIGRvd25sb2FkICsgcHV0IGl0IGluIHRoZSBjYWNoZS5cclxuICAvLyAgICAgICB0aGlzLmNhY2hlLnB1c2goe1xyXG4gIC8vICAgICAgICAgICBrZXk6IHVybCxcclxuICAvLyAgICAgICAgICAgdXJsOiB1cmwsXHJcbiAgLy8gICAgICAgICAgIGNvbXBsZXRlZDogKGltYWdlLCBrZXkpID0+IHtcclxuICAvLyAgICAgICAgICAgICAgIGlmICh1cmwgPT09IGtleSkge1xyXG4gIC8vICAgICAgICAgICAgICAgICAgIGNhY2hlZEltYWdlU291cmNlID0gZnJvbU5hdGl2ZVNvdXJjZShpbWFnZSk7XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgcmV0dXJuIGNhY2hlZEltYWdlU291cmNlO1xyXG4gIC8vICAgICAgICAgICAgICAgfVxyXG4gIC8vICAgICAgICAgICB9XHJcbiAgLy8gICAgICAgfSk7XHJcbiAgLy8gICB9XHJcbiAgLy8gfVxyXG5cclxuICBvbkl0ZW1UYXAoYXJncykge1xyXG4gICAgdGhpcy50cmFuc2ZlclNlcnZpY2Uuc2V0RGF0YSh7XHJcbiAgICAgIHBvc3RJbmZvOiB7aWQ6IHRoaXMuaWRzW2FyZ3MuaW5kZXhdLCBkYXRhOiB0aGlzLnBbYXJncy5pbmRleF19LFxyXG4gICAgICBwb3N0SXRlbTogdGhpcy5wb3N0aW5ncy5nZXRJdGVtKGFyZ3MuaW5kZXgpXHJcbiAgICB9KVxyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydwb3N0aW5nLWluZm8nXSlcclxuICB9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbYXBwSG9tZV0nXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVEaXJlY3RpdmUge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gXCIvKlxcclxcbkFkZCB5b3VyIE5hdGl2ZVNjcmlwdCBzcGVjaWZpYyBzdHlsZXMgaGVyZS5cXHJcXG5UbyBsZWFybiBtb3JlIGFib3V0IHN0eWxpbmcgaW4gTmF0aXZlU2NyaXB0IHNlZTpcXHJcXG5odHRwczovL2RvY3MubmF0aXZlc2NyaXB0Lm9yZy9hbmd1bGFyL3VpL3N0eWxpbmdcXHJcXG4qL1xcclxcbi5yZWZyZXNoIHtcXHJcXG5cXHRjb2xvcjogI2FjMDBlNjtcXHJcXG59XFxyXFxuXFxyXFxuLmFjdGlvbmJhciB7XFxyXFxuXFx0Zm9udC1zaXplOiAyMjtcXHJcXG5cXHRmb250LXdlaWdodDogNzAwO1xcclxcblxcdHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuXFx0Y29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLWJ0bi1jb250YWluZXIge1xcclxcblxcdC8qcG9zaXRpb246IGFic29sdXRlOyovXFxyXFxuXFx0Lypib3R0b206IDA7Ki9cXHJcXG5cXHQvKnJpZ2h0OiAwOyovXFxyXFxuXFx0dmVydGljYWwtYWxpZ246IGJvdHRvbTtcXHJcXG5cXHR6LWluZGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4uZmFiLWJ1dHRvbiB7XFxyXFxuICBoZWlnaHQ6IDU2O1xcclxcbiAgd2lkdGg6IDU2O1xcclxcbiAgbWFyZ2luOiAxNTtcXHJcXG4gIC8qbWFyZ2luLWJvdHRvbTogNjQ7Ki9cXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhYzAwZTY7XFxyXFxuICAvKmZsb2F0OiByaWdodDsqL1xcclxcbiAgaG9yaXpvbnRhbC1hbGlnbjogcmlnaHQ7XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xcclxcbn1cXHJcXG5cXHJcXG5MYWJlbCB7XFxyXFxuXFx0dGV4dC1hbGlnbjogbGVmdDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hbWUtbGFiZWwge1xcclxcblxcdG1hcmdpbi10b3A6IDE2O1xcclxcblxcdG1hcmdpbi1sZWZ0OiAxODtcXHJcXG5cXHRjb2xvcjogYmxhY2s7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDcwMDtcXHJcXG5cXHRmb250LXNpemU6IDE3O1xcclxcbn1cXHJcXG5cXHJcXG4uaW5mby1sYWJlbCB7XFxyXFxuXFx0bWFyZ2luLXRvcDogNDtcXHJcXG5cXHRtYXJnaW4tbGVmdDogMTg7XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTogMTY7XFxyXFxuXFx0Y29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9zdCB7XFxyXFxuXFx0Lypib3JkZXItYm90dG9tLXdpZHRoOiAxOyovXFxyXFxuXFx0Ym9yZGVyLWNvbG9yOiAjZjFmMWYxO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9zdDpoaWdobGlnaHRlZCB7XFxyXFxuXFx0LypiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxOyovXFxyXFxufVxcclxcblxcclxcbi5wb3N0aW5nLW1hcCB7XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTogMTY7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMTA7XFxyXFxuXFx0aGVpZ2h0OiAyMjA7XFxyXFxuXFx0d2lkdGg6IDM0MDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2ZpbGUtcGljdHVyZSB7XFxyXFxuXFx0aGVpZ2h0OiA1MDtcXHJcXG5cXHR3aWR0aDogNTA7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMTAwJTtcXHJcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcclxcblxcdG1hcmdpbi1sZWZ0OiAxNjtcXHJcXG5cXHRtYXJnaW4tdG9wOiAyMDtcXHJcXG59XFxyXFxuXFxyXFxuLmFjdGl2aXR5LWluZGljYXRvciB7XFxyXFxuXFx0Y29sb3I6ICNhYzAwZTY7XFxyXFxufVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjwhLS0gPEFjdGlvbkJhciB0aXRsZT1cXFwiSG9tZVxcXCIgY2xhc3M9XFxcImFjdGlvbmJhclxcXCI+XFxyXFxuXFx0PE5hdmlnYXRpb25CdXR0b24gaW9zOnZpc2liaWxpdHk9XFxcImNvbGxhcHNlZFxcXCIgaWNvbj1cXFwifi9pbWcvbWVudS1pY29uLnBuZ1xcXCIgKHRhcCk9XFxcInNob3dTaWRlRHJhd2VyKClcXFwiID48L05hdmlnYXRpb25CdXR0b24+XFxyXFxuPEFjdGlvbkl0ZW0gYW5kcm9pZDp2aXNpYmlsaXR5PVxcXCJjb2xsYXBzZWRcXFwiIGljb249XFxcIn4vaW1nL21lbnUtaWNvbi5wbmdcXFwiIGlvcy5wb3NpdGlvbj1cXFwibGVmdFxcXCIgKHRhcCk9XFxcInNob3dTaWRlRHJhd2VyKClcXFwiID48L0FjdGlvbkl0ZW0+XFxyXFxuPC9BY3Rpb25CYXI+IC0tPlxcclxcblxcclxcbiAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImFkZC1idG4tY29udGFpbmVyXFxcIj5cXHJcXG5cXHRcXHQ8RkFCICh0YXApPVxcXCJzaG93TW9kYWwoKVxcXCIgaWNvbj1cXFwicmVzOi8vaWNfYWRkX3doaXRlXzN4XFxcIiByaXBwbGVDb2xvcj1cXFwiI2YxZjFmMVxcXCIgY2xhc3M9XFxcImZhYi1idXR0b25cXFwiPjwvRkFCPlxcclxcblxcdDwvU3RhY2tMYXlvdXQ+XFxyXFxuXFxyXFxuXFx0PFB1bGxUb1JlZnJlc2ggKHJlZnJlc2gpPVxcXCJyZWZyZXNoTGlzdCgkZXZlbnQpXFxcIiBjbGFzcz1cXFwicmVmcmVzaFxcXCI+XFxyXFxuXFx0XFx0PExpc3RWaWV3IFtpdGVtc109XFxcInBvc3RpbmdzXFxcIiAoaXRlbVRhcCk9XFxcIm9uSXRlbVRhcCgkZXZlbnQpXFxcIiAjbGlzdFZpZXcgaWQ9XFxcImxpc3RWaWV3XFxcIj5cXHJcXG5cXHRcXHQgICAgPG5nLXRlbXBsYXRlIGxldC1pdGVtPVxcXCJpdGVtXFxcIiBsZXQtaT1cXFwiaW5kZXhcXFwiIGxldC1vZGQ9XFxcIm9kZFxcXCIgbGV0LWV2ZW49XFxcImV2ZW5cXFwiPlxcclxcblxcdFxcdCAgICAgICAgPFN0YWNrTGF5b3V0IFtjbGFzcy5vZGRdPVxcXCJvZGRcXFwiIFtjbGFzcy5ldmVuXT1cXFwiZXZlblxcXCIgY2xhc3M9XFxcInBvc3RcXFwiPlxcclxcblxcdFxcdCAgICAgICAgXFx0ICA8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XFxcImhvcml6b250YWxcXFwiPlxcclxcblxcdFxcdCAgICAgICAgXFx0ICBcXHQ8SW1hZ2UgW3NyY109XFxcIml0ZW0ucHJvZmlsZVNvdXJjZVxcXCIgY2xhc3M9XFxcInByb2ZpbGUtcGljdHVyZVxcXCIgc3RyZXRjaD1cXFwiYXNwZWN0Rml0XFxcIj48L0ltYWdlPlxcclxcblxcdFxcdCAgICAgICAgXFx0ICBcXHQ8U3RhY2tMYXlvdXQ+XFxyXFxuXFx0XFx0XFx0ICAgICAgICAgICAgICBcXHQ8TGFiZWwgdGV4dFdyYXA9XFxcInRydWVcXFwiIGlkPVxcXCJwb3N0LW5hbWVcXFwiIGNsYXNzPVxcXCJuYW1lLWxhYmVsXFxcIiBbdGV4dF09XFxcIml0ZW0udXNlcm5hbWVcXFwiPjwvTGFiZWw+XFxyXFxuXFx0XFx0XFx0ICAgICAgICAgICAgICBcXHQ8TGFiZWwgdGV4dFdyYXA9XFxcInRydWVcXFwiIGlkPVxcXCJwb3N0LWluZm9cXFwiIGNsYXNzPVxcXCJpbmZvLWxhYmVsXFxcIiBbdGV4dF09XFxcIml0ZW0uaW5mb1xcXCI+PC9MYWJlbD5cXHJcXG5cXHRcXHRcXHQgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcclxcblxcdFxcdCAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXHJcXG5cXHRcXHRcXHRcXHRcXHQgIDxJbWFnZSBbc3JjXT1cXFwiaXRlbS5tYXBTb3VyY2VcXFwiIHN0cmV0Y2g9XFxcImFzcGVjdEZpdFxcXCIgY2xhc3M9XFxcInBvc3RpbmctbWFwXFxcIj48L0ltYWdlPlxcclxcblxcdFxcdCAgICAgICAgPC9TdGFja0xheW91dD5cXHJcXG5cXHRcXHQgICAgPC9uZy10ZW1wbGF0ZT5cXHJcXG5cXHRcXHQ8L0xpc3RWaWV3PlxcclxcblxcdDwvUHVsbFRvUmVmcmVzaD5cXHJcXG5cXHQ8QWN0aXZpdHlJbmRpY2F0b3IgI2FjdGl2aXR5SW5kaWNhdG9yIGJ1c3k9XFxcInRydWVcXFwiIHdpZHRoPVxcXCI0MFxcXCIgaGVpZ2h0PVxcXCI0MFxcXCIgY2xhc3M9XFxcImFjdGl2aXR5LWluZGljYXRvclxcXCI+XFxyXFxuICA8L0FjdGl2aXR5SW5kaWNhdG9yPlwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDb250YWluZXJSZWYsIFZpZXdSZWYsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlQXJyYXkgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS1hcnJheSc7XHJcblxyXG5pbXBvcnQgeyBUcmFuc2ZlclNlcnZpY2UgfSBmcm9tICcuLi9kYXRhdHJhbnNmZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IER5bmFtaWNBZGRTZXJ2aWNlIH0gZnJvbSAnLi4vZHluYW1pYy1hZGQuc2VydmljZS50bnMnO1xyXG5pbXBvcnQge1BhZ2V9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2VcIjtcclxuaW1wb3J0IHsgZ2V0RnJhbWVCeUlkIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWVcIjtcclxuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tICcuLi91c2VyLnNlcnZpY2UudG5zJztcclxuaW1wb3J0IHsgUG9zdGluZ1NlcnZpY2UgfSBmcm9tICcuLi9wb3N0aW5nLnNlcnZpY2UudG5zJztcclxuaW1wb3J0IHsgTW9kYWxEaWFsb2dTZXJ2aWNlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2RpcmVjdGl2ZXMvZGlhbG9nc1wiO1xyXG5pbXBvcnQgeyBHb29nbGVNYXBzU2VydmljZSB9IGZyb20gJy4uL2dvb2dsZS1tYXBzLnNlcnZpY2UnO1xyXG5pbXBvcnQgKiBhcyBhcHBsaWNhdGlvbiBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiO1xyXG5pbXBvcnQgeyBBY3Rpdml0eUluZGljYXRvciB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvYWN0aXZpdHktaW5kaWNhdG9yJztcclxuaW1wb3J0IHsgQW5kcm9pZEFwcGxpY2F0aW9uLCBBbmRyb2lkQWN0aXZpdHlCYWNrUHJlc3NlZEV2ZW50RGF0YSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCI7XHJcbmltcG9ydCB7IGlzQW5kcm9pZCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtXCI7XHJcbmltcG9ydCAqIGFzIGZpcmViYXNlIGZyb20gJ25hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2UnO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgRGF0ZVBpcGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuaW1wb3J0IHsgU3RhY2tMYXlvdXQgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9sYXlvdXRzL3N0YWNrLWxheW91dFwiO1xyXG5pbXBvcnQgeyBMaXN0VmlldyB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xpc3Qtdmlld1wiO1xyXG5cclxuaW1wb3J0IHsgUG9zdGluZyB9IGZyb20gJy4uL3Bvc3RpbmcubW9kZWwnO1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vdXNlci5tb2RlbCc7XHJcblxyXG5pbXBvcnQgeyBBZGRNb2RhbENvbXBvbmVudCB9IGZyb20gJy4uL2FkZC1tb2RhbC9hZGQtbW9kYWwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ2FjaGUgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9pbWFnZS1jYWNoZVwiO1xyXG5pbXBvcnQgeyBJbWFnZVNvdXJjZSwgZnJvbUZpbGUsIGZyb21SZXNvdXJjZSwgZnJvbUJhc2U2NCwgZnJvbU5hdGl2ZVNvdXJjZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2ltYWdlLXNvdXJjZVwiO1xyXG5pbXBvcnQgeyBGb2xkZXIsIHBhdGgsIGtub3duRm9sZGVycyB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2ZpbGUtc3lzdGVtXCI7XHJcblxyXG5jbGFzcyBQb3N0SXRlbSB7XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgdXNlcm5hbWU6IFN0cmluZywgcHVibGljIGluZm86IHN0cmluZywgcHVibGljIHByb2ZpbGVTb3VyY2U6IHN0cmluZywgcHVibGljIG1hcFNvdXJjZTogc3RyaW5nKSB7IH1cclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtaG9tZScsXHJcbiAgcHJvdmlkZXJzOiBbRHluYW1pY0FkZFNlcnZpY2VdLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9ob21lLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9ob21lLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBibG9ja3MgPSAxO1xyXG4gIHAgOiBQb3N0aW5nW107XHJcbiAgcG9zdGluZ3MgPSBuZXcgT2JzZXJ2YWJsZUFycmF5PFBvc3RJdGVtPigpO1xyXG4gIC8vIGNhY2hlID0gbmV3IENhY2hlKCk7XHJcbiAgXHJcblxyXG4gIEBWaWV3Q2hpbGQoJ2xpc3RWaWV3JywgeyBzdGF0aWM6IHRydWUgfSkgbHY6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgnYWN0aXZpdHlJbmRpY2F0b3InLCB7IHN0YXRpYzogdHJ1ZSB9KSBhaTogRWxlbWVudFJlZjtcclxuICBcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0cmFuc2ZlclNlcnZpY2U6IFRyYW5zZmVyU2VydmljZSwgcHJpdmF0ZSBhZGRTZXJ2aWNlOiBEeW5hbWljQWRkU2VydmljZSwgcHJpdmF0ZSBwYWdlOiBQYWdlLCBcclxuICBcdHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlLCBwcml2YXRlIHBvc3RpbmdTZXJ2aWNlOiBQb3N0aW5nU2VydmljZSwgcHJpdmF0ZSBtb2RhbDogTW9kYWxEaWFsb2dTZXJ2aWNlLCBwcml2YXRlIHZjUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgcHJpdmF0ZSBtYXBTZXJ2aWNlOiBHb29nbGVNYXBzU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMsIHByaXZhdGUgZGF0ZVBpcGU6IERhdGVQaXBlKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgXHR0aGlzLmxvYWRQb3N0aW5ncygpO1xyXG4gIH1cclxuXHJcbiAgb25CYWNrQnV0dG9uVGFwKCkge1xyXG4gICAgYXBwbGljYXRpb24uYW5kcm9pZC5mb3JlZ3JvdW5kQWN0aXZpdHkuZmluaXNoKCk7XHJcbiAgfVxyXG5cclxuICBzaG93TW9kYWwoKSB7XHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIGNvbnRleHQ6IHt9LFxyXG4gICAgICAgICAgICBmdWxsc2NyZWVuOiB0cnVlLFxyXG4gICAgICAgICAgICB2aWV3Q29udGFpbmVyUmVmOiB0aGlzLnZjUmVmXHJcbiAgICAgICAgICAgIC8vIGFuaW1hdGVkOiB0cnVlLFxyXG4gICAgICAgICAgICAvLyB0cmFuc2l0aW9uOiB7IG5hbWU6IFwic2xpZGVUb3BcIiB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLm1vZGFsLnNob3dNb2RhbChBZGRNb2RhbENvbXBvbmVudCwgb3B0aW9ucykudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgICAgICBpZihyZXMgPT0gJ3Bvc3RlZCcpXHJcbiAgICAgICAgICAgICAgdGhpcy5sb2FkUG9zdGluZ3MoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICBzaG93U2lkZURyYXdlcigpIHtcclxuICBcdC8vY29uc3QgZHJhd2VyID0gPFJhZFNpZGVEcmF3ZXI+dGhpcy5zZC5uYXRpdmVWaWV3O1xyXG4gIFx0Ly9jb25zb2xlLmRpcihkcmF3ZXIpO1xyXG4gIFx0Ly9jb25zb2xlLmRpcih0aGlzLnBhZ2UpO1xyXG4gIFx0Ly8gZHJhd2VyLnNob3dEcmF3ZXIoKTtcclxuXHJcbiAgfVxyXG5cclxuICBsb2FkUG9zdGluZ3MoYXJncz1udWxsKSB7XHJcbiAgICAvLyBsZXQgbGF5b3V0ID0gPFN0YWNrTGF5b3V0PnRoaXMucGFnZS5nZXRWaWV3QnlJZCgnZmVlZCcpO1xyXG4gICAgLy8gbGF5b3V0LnJlbW92ZUNoaWxkcmVuKCk7XHJcbiAgICAvLyB0aGlzLmNhY2hlLnBsYWNlaG9sZGVyID0gZnJvbUZpbGUoXCJ+L2ltZy9ncmF5X2JhY2tncm91bmQuanBnXCIpO1xyXG4gICAgLy8gdGhpcy5jYWNoZS5tYXhSZXF1ZXN0cyA9IDU7XHJcblxyXG4gICAgdGhpcy5wb3N0aW5ncy5zcGxpY2UoMCk7XHJcbiAgICBsZXQgYWN0aXZpdHlJbmRpY2F0b3IgPSA8QWN0aXZpdHlJbmRpY2F0b3I+IHRoaXMuYWkubmF0aXZlRWxlbWVudDtcclxuICAgIGFjdGl2aXR5SW5kaWNhdG9yLmJ1c3kgPSB0cnVlO1xyXG5cclxuICAgIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcclxuXHJcbiAgICB2YXIgcG9zdHMgPSBbXTtcclxuICAgIHZhciBwb3N0aW5nc0NvbGxlY3Rpb24gPSBmaXJlYmFzZS5maXJlc3RvcmUuY29sbGVjdGlvbigncG9zdGluZ3MnKTtcclxuICAgIGNvbnN0IHF1ZXJ5ID0gcG9zdGluZ3NDb2xsZWN0aW9uLndoZXJlKCdmb3JtYXR0ZWREYXRlJywgJz49JywgdGhpcy5kYXRlUGlwZS50cmFuc2Zvcm0oY3VycmVudERhdGUsICd5eXl5LU1NLWRkJykpXHJcbiAgICBxdWVyeS5vcmRlckJ5KCdmb3JtYXR0ZWREYXRlJywgJ2FzYycpLmdldCgpLnRoZW4ocXVlcnlTbmFwc2hvdCA9PiB7XHJcbiAgICAgIHF1ZXJ5U25hcHNob3QuZm9yRWFjaChkb2MgPT4ge1xyXG4gICAgICAgIHBvc3RzLnB1c2goe1xyXG4gICAgICAgICAgaWQ6IGRvYy5pZCxcclxuICAgICAgICAgIGRhdGE6IGRvYy5kYXRhKClcclxuICAgICAgICB9KVxyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5wID0gcG9zdHM7XHJcbiAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBwb3N0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHRoaXMucG9zdGluZ3MucHVzaChuZXcgUG9zdEl0ZW0ocG9zdHNbaV0udXNlciwgJycsICcnLCAnfi9pbWcvZ3JheV9iYWNrZ3JvdW5kLmpwZycpKTtcclxuICAgICAgICB0aGlzLmNyZWF0ZVBvc3RpbmcocG9zdHNbaV0uZGF0YSwgaSk7XHJcbiAgICAgIH1cclxuICAgICAgYWN0aXZpdHlJbmRpY2F0b3IuYnVzeSA9IGZhbHNlO1xyXG4gICAgICBpZihhcmdzICE9IG51bGwpXHJcbiAgICAgIHtcclxuICAgICAgICB2YXIgcHVsbFJlZnJlc2ggPSBhcmdzLm9iamVjdDtcclxuICAgICAgICBwdWxsUmVmcmVzaC5yZWZyZXNoaW5nID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICB9XHJcblxyXG4gLy8gIGNyZWF0ZVBvc3RpbmcoaWQsIHVzZXIsIHN0YXJ0YWRyLCBlbmRhZHIsIGRhdGUsIGNvc3QsIGNhcGFjaXR5LCBjb21tZW50cykge1xyXG5cdC8vIFx0dGhpcy50cmFuc2ZlclNlcnZpY2Uuc2V0RGF0YShbe1wiaW5kZXhcIjogdGhpcy5ibG9ja3MsIFwiaWRcIjogaWQsIFwidXNlclwiOiB1c2VyLCBcInN0YXJ0YWRyXCI6IHN0YXJ0YWRyLCBcImVuZGFkclwiOiBlbmRhZHIsIFwiZGF0ZVwiOiBkYXRlLCBcImNvc3RcIjogY29zdCwgXCJjYXBhY2l0eVwiOiBjYXBhY2l0eSwgXCJjb21tZW50c1wiOiBjb21tZW50cywgXCJidXR0b25UeXBlXCI6IFwiQ29ubmVjdFwifV0pO1xyXG5cdC8vIFx0dGhpcy5hZGRTZXJ2aWNlLmFwcGVuZENvbXBvbmVudFRvQm9keSh0aGlzLnBhZ2UuZ2V0Vmlld0J5SWQoJ2ZlZWQnKSk7XHJcblx0Ly8gICB0aGlzLmJsb2NrcysrO1xyXG5cdC8vIH1cclxuXHJcbiAgY3JlYXRlUG9zdGluZyhkYXRhLCBpOiBudW1iZXIpIHtcclxuICAgIGxldCBpbmZvX2xhYmVsID0gXCJcIjtcclxuICAgIC8vIHRoaXMuY3JlYXRlUG9zdGluZyh0aGlzLnBbaV0uX2lkLCB0aGlzLnBbaV0udXNlciwgdGhpcy5wW2ldLnN0YXJ0YWRyLCB0aGlzLnBbaV0uZW5kYWRyLCB0aGlzLnBbaV0uZGF0ZSwgdGhpcy5wW2ldLmNvc3QsIHRoaXMucFtpXS5jYXBhY2l0eSwgdGhpcy5wW2ldLmNvbW1lbnRzKTtcclxuICAgIGlmKGRhdGEuY2FwYWNpdHkgIT0gXCItMVwiKVxyXG4gICAgICBpbmZvX2xhYmVsID0gXCJPZmZlcmluZyByaWRlIGxlYXZpbmcgXCIgKyBkYXRhLmRhdGUgKyBcIiBmcm9tIFwiICsgZGF0YS5zdGFydEFkZHJlc3MgKyBcIiB0byBcIiArIGRhdGEuZW5kQWRkcmVzcyArIFwiIGZvciBcIiArIGRhdGEucHJpY2U7XHJcbiAgICBlbHNlXHJcbiAgICAgIGluZm9fbGFiZWwgPSBcIlJlcXVlc3RpbmcgcmlkZSBsZWF2aW5nIFwiICsgZGF0YS5kYXRlICsgXCIgZnJvbSBcIiArIGRhdGEuc3RhcnRBZGRyZXNzICsgXCIgdG8gXCIgKyBkYXRhLmVuZEFkZHJlc3M7XHJcbiAgICBjb25zdCB1c2Vyc0NvbGxlY3Rpb24gPSBmaXJlYmFzZS5maXJlc3RvcmUuY29sbGVjdGlvbigndXNlcnMnKTtcclxuICAgIHVzZXJzQ29sbGVjdGlvbi5kb2MoZGF0YS51aWQpLmdldCgpLnRoZW4oKGRvYykgPT4ge1xyXG4gICAgICBpZihkb2MuZXhpc3RzKSB7XHJcbiAgICAgICAgdmFyIHVybCA9IGRvYy5kYXRhKCkucHJvZmlsZV9zb3VyY2U7XHJcbiAgICAgICAgLy8gaWYodXJsLnN1YnN0cmluZygwLCAyNykgPT09ICdodHRwczovL2dyYXBoLmZhY2Vib29rLmNvbS8nKVxyXG4gICAgICAgIC8vICAgdXJsICs9ICc/aGVpZ2h0PTMwMCc7XHJcbiAgICAgICAgLy8gdmFyIG1hcFVybCA9IHRoaXMubWFwU2VydmljZS5nZXRTdGF0aWNNYXAoZGF0YS5zdGFydEFkZHJlc3MgKyBcIiBcIiArIGRhdGEuc3RhcnRGb3JtYXR0ZWQsIGRhdGEuZW5kQWRkcmVzcyArIFwiIFwiICsgZGF0YS5lbmRGb3JtYXR0ZWQpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKG1hcFVybClcclxuICAgICAgICAvLyB0aGlzLmFkZENhY2hlKHVybCwgJ3BmcCcsIGRhdGEudXNlciwgaW5mb19sYWJlbCwgdXJsLCBkYXRhLm1hcF91cmwsIGkpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIC8vICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICAgIC8vICAgdGhpcy5hZGRDYWNoZShkYXRhLm1hcF91cmwsICdtYXAnLCBkYXRhLnVzZXIsIGluZm9fbGFiZWwsIHVybCwgZGF0YS5tYXBfdXJsLCBpKS50aGVuKChyZXMpID0+e1xyXG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgLy8gICB9KVxyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgICAgIHRoaXMucG9zdGluZ3Muc2V0SXRlbShpLCBuZXcgUG9zdEl0ZW0oZGF0YS51c2VyLCBpbmZvX2xhYmVsLCB1cmwsIGRhdGEubWFwX3VybCkpO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgLy8gYWRkQ2FjaGUodXJsLCBpbWdfdHlwZSwgdXNlciwgaW5mbywgcGZwX3VybCwgbWFwX3VybCwgaSkge1xyXG4gIC8vICAgcmV0dXJuIG5ldyBQcm9taXNlPGFueT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gIC8vICAgICBsZXQgY2FjaGVkSW1hZ2VTb3VyY2U7XHJcbiAgLy8gICAgIGNvbnN0IG15SW1hZ2UgPSB0aGlzLmNhY2hlLmdldCh1cmwpO1xyXG4gIC8vICAgICBpZiAobXlJbWFnZSkge1xyXG4gIC8vICAgICAgIC8vIElmIHByZXNlbnQgLS0gdXNlIGl0LlxyXG4gIC8vICAgICAgIGNhY2hlZEltYWdlU291cmNlID0gZnJvbU5hdGl2ZVNvdXJjZShteUltYWdlKTtcclxuICAvLyAgICAgICBjb25zb2xlLmxvZyhteUltYWdlKVxyXG4gIC8vICAgICAgIGlmKGltZ190eXBlID09PSAncGZwJylcclxuICAvLyAgICAgICAgIHRoaXMucG9zdGluZ3Muc2V0SXRlbShpLCBuZXcgUG9zdEl0ZW0odXNlciwgaW5mbywgY2FjaGVkSW1hZ2VTb3VyY2UsIG1hcF91cmwpKTtcclxuICAvLyAgICAgICBlbHNlIGlmIChpbWdfdHlwZSA9PT0gJ21hcCcpXHJcbiAgLy8gICAgICAgICB0aGlzLnBvc3RpbmdzLnNldEl0ZW0oaSwgbmV3IFBvc3RJdGVtKHVzZXIsIGluZm8sIHRoaXMucG9zdGluZ3MuZ2V0SXRlbShpKS5wcm9maWxlU291cmNlLCBjYWNoZWRJbWFnZVNvdXJjZSkpO1xyXG4gIC8vICAgICAgIHJlc29sdmUoe21lc3NhZ2U6ICdSZXRyaWV2ZWQgZnJvbSBjYWNoZScsIGNhY2hlVVJMOiBjYWNoZWRJbWFnZVNvdXJjZX0pO1xyXG4gIC8vICAgICB9IFxyXG4gIC8vICAgICBlbHNlIHtcclxuICAvLyAgICAgICAvLyBJZiBub3QgcHJlc2VudCAtLSByZXF1ZXN0IGl0cyBkb3dubG9hZCArIHB1dCBpdCBpbiB0aGUgY2FjaGUuXHJcbiAgLy8gICAgICAgdGhpcy5jYWNoZS5wdXNoKHtcclxuICAvLyAgICAgICAgICAga2V5OiB1cmwsXHJcbiAgLy8gICAgICAgICAgIHVybDogdXJsLFxyXG4gIC8vICAgICAgICAgICBjb21wbGV0ZWQ6IChpbWFnZSwga2V5KSA9PiB7XHJcbiAgLy8gICAgICAgICAgICAgICBpZiAodXJsID09PSBrZXkpIHtcclxuICAvLyAgICAgICAgICAgICAgICAgICBjYWNoZWRJbWFnZVNvdXJjZSA9IGZyb21OYXRpdmVTb3VyY2UoaW1hZ2UpO1xyXG4gIC8vICAgICAgICAgICAgICAgICAgIGlmKGltZ190eXBlID09PSAncGZwJylcclxuICAvLyAgICAgICAgICAgICAgICAgICAgIHRoaXMucG9zdGluZ3Muc2V0SXRlbShpLCBuZXcgUG9zdEl0ZW0odXNlciwgaW5mbywgY2FjaGVkSW1hZ2VTb3VyY2UsIG1hcF91cmwpKTtcclxuICAvLyAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChpbWdfdHlwZSA9PT0gJ21hcCcpXHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc3RpbmdzLnNldEl0ZW0oaSwgbmV3IFBvc3RJdGVtKHVzZXIsIGluZm8sIHRoaXMucG9zdGluZ3MuZ2V0SXRlbShpKS5wcm9maWxlU291cmNlLCBjYWNoZWRJbWFnZVNvdXJjZSkpO1xyXG4gIC8vICAgICAgICAgICAgICAgfVxyXG4gIC8vICAgICAgICAgICAgICAgcmVzb2x2ZSh7bWVzc2FnZTogJ0FkZGVkIHRvIGNhY2hlJywgY2FjaGVVUkw6IGNhY2hlZEltYWdlU291cmNlfSk7XHJcbiAgLy8gICAgICAgICAgIH1cclxuICAvLyAgICAgICB9KTtcclxuICAvLyAgICAgfVxyXG4gIC8vICAgfSlcclxuICAvLyB9XHJcblxyXG4gIHJlZnJlc2hMaXN0KGFyZ3MpIHtcclxuICAgIHRoaXMubG9hZFBvc3RpbmdzKGFyZ3MpO1xyXG4gIH1cclxuXHJcbiAgb25JdGVtVGFwKGFyZ3MpIHtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMucG9zdGluZ3MuZ2V0SXRlbShhcmdzLmluZGV4KSk7XHJcbiAgICB0aGlzLnRyYW5zZmVyU2VydmljZS5zZXREYXRhKHtcclxuICAgICAgcG9zdEluZm86IHRoaXMucFthcmdzLmluZGV4XSxcclxuICAgICAgcG9zdEl0ZW06IHRoaXMucG9zdGluZ3MuZ2V0SXRlbShhcmdzLmluZGV4KVxyXG4gICAgfSlcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsncG9zdGluZy1pbmZvJ10pXHJcbiAgfVxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCIvKiBBZGQgbW9iaWxlIHN0eWxlcyBmb3IgdGhlIGNvbXBvbmVudCBoZXJlLiAgKi9cXHJcXG4uY2xvc2Uge1xcclxcblxcdG1hcmdpbjogMTA7XFxyXFxuXFx0Zm9udC1zaXplOiAyODtcXHJcXG5cXHR3aWR0aDogNDg7XFxyXFxuXFx0aGVpZ2h0OiA0ODtcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlLWJ1dHRvbi1jb250YWluZXIge1xcclxcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHRsZWZ0OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyLWxhYmVsLTIge1xcclxcblxcdGZvbnQtc2l6ZTogMTY7XFxyXFxuXFx0bWFyZ2luLXRvcDogMTI7XFxyXFxuXFx0LyptYXJnaW4tYm90dG9tOiAxMjsqL1xcclxcblxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXItbGFiZWwtMyB7XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTogMTI7XFxyXFxufVxcclxcblxcclxcbi5wb3N0IHtcXHJcXG5cXHRib3JkZXItY29sb3I6ICNmMWYxZjE7XFxyXFxufVxcclxcblxcclxcbi5wb3N0OmhpZ2hsaWdodGVkIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xcclxcbn1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8U2Nyb2xsVmlldz5cXHJcXG5cXHQ8U3RhY2tMYXlvdXQgaGVpZ2h0PVxcXCIxMDAlXFxcIj5cXHJcXG5cXHRcXHQ8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImNsb3NlLWJ1dHRvbi1jb250YWluZXJcXFwiIG9yaWVudGF0aW9uPVxcXCJob3Jpem9udGFsXFxcIj5cXHJcXG5cXHRcXHRcXHQ8TGFiZWwgdGV4dD1cXFwiJnRpbWVzO1xcXCIgY2xhc3M9XFxcImNsb3NlXFxcIiAodGFwKT1cXFwiY2xvc2UoKVxcXCI+PC9MYWJlbD5cXHJcXG5cXHRcXHQ8L1N0YWNrTGF5b3V0PlxcclxcblxcclxcblxcdFxcdDxTdGFja0xheW91dCBjbGFzcz1cXFwiaW5wdXQtZmllbGRcXFwiPlxcclxcbjwhLS0gXFx0XFx0XFx0PFRleHRGaWVsZCBjbGFzcz1cXFwiaW5wdXRcXFwiIGF1dG9jb3JyZWN0PVxcXCJmYWxzZVxcXCIgaGludD1cXFwiRmluZCBhIGxvY2F0aW9uXFxcIiBbKG5nTW9kZWwpXT1cXFwiYWRkcmVzc1xcXCIgKHRleHRDaGFuZ2UpPVxcXCJhdXRvY29tcGxldGUoKVxcXCIgI3NlYXJjaExhYmVsIGlkPVxcXCJzZWFyY2hMYWJlbFxcXCIgcmVxdWlyZWQ+PC9UZXh0RmllbGQ+IC0tPlxcclxcblxcdFxcdFxcdDxTZWFyY2hCYXIgaGludD1cXFwiRmluZCBhIGxvY2F0aW9uXFxcIiBbdGV4dF09XFxcImFkZHJlc3NcXFwiICh0ZXh0Q2hhbmdlKT1cXFwic2VhcmNoKCRldmVudClcXFwiPjwvU2VhcmNoQmFyPlxcclxcblxcdFxcdFxcdDxTdGFja0xheW91dCBjbGFzcz1cXFwiaHItbGlnaHRcXFwiPjwvU3RhY2tMYXlvdXQ+XFxyXFxuXFx0XFx0PC9TdGFja0xheW91dD5cXHJcXG5cXHJcXG5cXHRcXHQ8TGlzdFZpZXcgW2l0ZW1zXT1cXFwic3VnZ2VzdGlvbnNcXFwiIGhlaWdodD1cXFwiMTAwJVxcXCI+XFxyXFxuXFx0XFx0XFx0PG5nLXRlbXBsYXRlIGxldC1pdGVtPVxcXCJpdGVtXFxcIiBsZXQtaT1cXFwiaW5kZXhcXFwiIGxldC1vZGQ9XFxcIm9kZFxcXCIgbGV0LWV2ZW49XFxcImV2ZW5cXFwiPlxcclxcblxcdFxcdFxcdFxcdDxTdGFja0xheW91dCBbY2xhc3Mub2RkXT1cXFwib2RkXFxcIiBbY2xhc3MuZXZlbl09XFxcImV2ZW5cXFwiIGNsYXNzPVxcXCJwb3N0XFxcIiAodGFwKT1cXFwic2VsZWN0UGxhY2UoaXRlbS5wbGFjZVN1Z2dlc3Rpb24sIGl0ZW0ucGxhY2VBZGRyZXNzKVxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PExhYmVsIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiBbdGV4dF09XFxcIml0ZW0ucGxhY2VTdWdnZXN0aW9uXFxcIiBjbGFzcz1cXFwiaGVhZGVyLWxhYmVsLTJcXFwiPjwvTGFiZWw+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PExhYmVsIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiBbdGV4dF09XFxcIml0ZW0ucGxhY2VBZGRyZXNzXFxcIiBjbGFzcz1cXFwiaGVhZGVyLWxhYmVsLTNcXFwiPjwvTGFiZWw+XFxyXFxuXFx0XFx0XFx0XFx0PC9TdGFja0xheW91dD5cXHJcXG5cXHRcXHRcXHQ8L25nLXRlbXBsYXRlPlxcclxcblxcdFxcdDwvTGlzdFZpZXc+XFxyXFxuXFx0PC9TdGFja0xheW91dD5cXHJcXG48L1Njcm9sbFZpZXc+XCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgRWxlbWVudFJlZiwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBsYWNlc0F1dG9jb21wbGV0ZVNlcnZpY2UgfSBmcm9tICcuLi9wbGFjZXMtYXV0b2NvbXBsZXRlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlQXJyYXkgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS1hcnJheSc7XHJcbmltcG9ydCB7IE1vZGFsRGlhbG9nUGFyYW1zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2RpcmVjdGl2ZXMvZGlhbG9nc1wiO1xyXG5pbXBvcnQgeyBUcmFuc2ZlclNlcnZpY2UgfSBmcm9tICcuLi9kYXRhdHJhbnNmZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IFNlYXJjaEJhciB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvc2VhcmNoLWJhcic7XHJcblxyXG5jbGFzcyBTdWdnZXN0aW9uIHtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGxhY2VTdWdnZXN0aW9uOiBzdHJpbmcsIHB1YmxpYyBwbGFjZUFkZHJlc3M6IHN0cmluZykge31cclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtbG9jYXRpb24nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9sb2NhdGlvbi5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vbG9jYXRpb24uY29tcG9uZW50LmNzcyddXHJcbn0pXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIExvY2F0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwYXJhbXM6IE1vZGFsRGlhbG9nUGFyYW1zLCBwcml2YXRlIHBsYWNlc1NlcnZpY2U6IFBsYWNlc0F1dG9jb21wbGV0ZVNlcnZpY2UsIHByaXZhdGUgdHJhbnNmZXJTZXJ2aWNlOiBUcmFuc2ZlclNlcnZpY2UpIHsgfVxyXG5cclxuICBAVmlld0NoaWxkKFwic2VhcmNoTGFiZWxcIiwgeyBzdGF0aWM6IHRydWUgfSkgc2VhcmNoTGFiZWw6IEVsZW1lbnRSZWY7XHJcbiAgYWRkcmVzcztcclxuICBzdWdnZXN0aW9ucyA9IG5ldyBPYnNlcnZhYmxlQXJyYXk8U3VnZ2VzdGlvbj4oKTtcclxuICBwbGFjZVN1Z2dlc3Rpb25zID0gbmV3IE9ic2VydmFibGVBcnJheTxTdHJpbmc+KCk7XHJcbiAgcGxhY2VBZGRyZXNzZXMgPSBuZXcgT2JzZXJ2YWJsZUFycmF5PFN0cmluZz4oKTtcclxuICB0eXBlID0gdGhpcy50cmFuc2ZlclNlcnZpY2UuZ2V0RGF0YSgpO1xyXG5cclxuICBpZHMgPSBuZXcgU2V0KCk7XHJcbiAgbXlUaW1lcjtcclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgXHQvLyBzZXRUaW1lb3V0KCgpID0+IHRoaXMuc2VhcmNoTGFiZWwubmF0aXZlRWxlbWVudC5mb2N1cygpLCAxMDApO1xyXG4gIH1cclxuXHJcbiAgY2xvc2UoKSB7XHJcbiAgXHR0aGlzLnBhcmFtcy5jbG9zZUNhbGxiYWNrKCk7XHJcbiAgIH1cclxuXHJcbiAgIHNlbGVjdFBsYWNlKHBsYWNlLCBhZGRyZXNzKSB7XHJcbiAgIFx0aWYodGhpcy50eXBlID09ICdzdGFydCcpXHJcbiAgIFx0XHR0aGlzLnBhcmFtcy5jbG9zZUNhbGxiYWNrKHsnc3RhcnQnOiBwbGFjZSwgJ2FkZHJlc3MnOiBhZGRyZXNzfSk7XHJcbiAgIFx0ZWxzZVxyXG4gICBcdFx0dGhpcy5wYXJhbXMuY2xvc2VDYWxsYmFjayh7J2VuZCc6IHBsYWNlLCAnYWRkcmVzcyc6IGFkZHJlc3N9KTtcclxuICAgfVxyXG5cclxuICBzZWFyY2goYXJncykge1xyXG4gIFx0Y2xlYXJJbnRlcnZhbCh0aGlzLm15VGltZXIpO1xyXG4gIFx0dGhpcy5teVRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgXHRcdGxldCBzZWFyY2hCYXIgPSA8U2VhcmNoQmFyPiBhcmdzLm9iamVjdDtcclxuXHQgICAgdGhpcy5pZHMuY2xlYXIoKTtcclxuXHQgICAgdGhpcy5zdWdnZXN0aW9ucy5zcGxpY2UoMCk7XHJcblx0ICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdCAgICB0aGlzLnBsYWNlc1NlcnZpY2UuZ2V0UGxhY2VSZXN1bHRzKHNlYXJjaEJhci50ZXh0KS5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4ge1xyXG5cdFx0ICAgIGZvcih2YXIgaSA9IDA7IGkgPCBkYXRhLnJlc3VsdHMubGVuZ3RoOyBpKyspIHtcclxuXHRcdCAgICAgIFx0aWYoIXRoaXMuaWRzLmhhcyhkYXRhLnJlc3VsdHNbaV0ucGxhY2VfaWQpKVxyXG5cdFx0ICAgICAgXHRcdHRoaXMuc3VnZ2VzdGlvbnMucHVzaChuZXcgU3VnZ2VzdGlvbihkYXRhLnJlc3VsdHNbaV0ubmFtZSwgZGF0YS5yZXN1bHRzW2ldLmZvcm1hdHRlZF9hZGRyZXNzKSk7XHJcblx0XHQgICAgICBcdHRoaXMuaWRzLmFkZChkYXRhLnJlc3VsdHNbaV0ucGxhY2VfaWQpO1xyXG5cdFx0ICAgIH1cclxuXHRcdCAgfSk7XHJcblx0XHR9LCAxMDApO1xyXG5cdFx0dGhpcy5wbGFjZXNTZXJ2aWNlLmdldEF1dG9jb21wbGV0ZVJlc3VsdHNBZGRyZXNzKHNlYXJjaEJhci50ZXh0KS5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4ge1xyXG5cdFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGF0YS5wcmVkaWN0aW9ucy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHQgIFx0aWYoIXRoaXMuaWRzLmhhcyhkYXRhLnByZWRpY3Rpb25zW2ldLnBsYWNlX2lkKSlcclxuXHRcdFx0ICBcdFx0dGhpcy5zdWdnZXN0aW9ucy5wdXNoKG5ldyBTdWdnZXN0aW9uKGRhdGEucHJlZGljdGlvbnNbaV0uc3RydWN0dXJlZF9mb3JtYXR0aW5nLm1haW5fdGV4dCwgZGF0YS5wcmVkaWN0aW9uc1tpXS5zdHJ1Y3R1cmVkX2Zvcm1hdHRpbmcuc2Vjb25kYXJ5X3RleHQpKTtcclxuXHRcdFx0ICBcdHRoaXMuaWRzLmFkZChkYXRhLnByZWRpY3Rpb25zW2ldLnBsYWNlX2lkKTtcclxuXHRcdCAgXHR9XHJcblx0XHR9KTtcclxuXHRcdC8vIHRoaXMucGxhY2VzU2VydmljZS5nZXRBdXRvY29tcGxldGVSZXN1bHRzRXN0YWJsaXNobWVudChzZWFyY2hCYXIudGV4dCkuc3Vic2NyaWJlKChkYXRhOiBhbnkpID0+IHtcclxuXHRcdC8vIFx0ICBmb3IodmFyIGkgPSAwOyBpIDwgZGF0YS5wcmVkaWN0aW9ucy5sZW5ndGg7IGkrKykge1xyXG5cdFx0Ly8gICAgIFx0aWYoIXRoaXMuaWRzLmhhcyhkYXRhLnByZWRpY3Rpb25zW2ldLnBsYWNlX2lkKSlcclxuXHRcdC8vICAgICBcdFx0dGhpcy5zdWdnZXN0aW9ucy5wdXNoKG5ldyBTdWdnZXN0aW9uKGRhdGEucHJlZGljdGlvbnNbaV0uc3RydWN0dXJlZF9mb3JtYXR0aW5nLm1haW5fdGV4dCwgZGF0YS5wcmVkaWN0aW9uc1tpXS5zdHJ1Y3R1cmVkX2Zvcm1hdHRpbmcuc2Vjb25kYXJ5X3RleHQpKTtcclxuXHRcdC8vICAgICBcdHRoaXMuaWRzLmFkZChkYXRhLnByZWRpY3Rpb25zW2ldLnBsYWNlX2lkKTtcclxuXHRcdC8vICAgICB9XHJcblx0XHQvLyB9KTtcclxuXHRcdHRoaXMucGxhY2VzU2VydmljZS5nZXRBdXRvY29tcGxldGVSZXN1bHRzQ2l0eShzZWFyY2hCYXIudGV4dCkuc3Vic2NyaWJlKChkYXRhOiBhbnkpID0+IHtcclxuXHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRhdGEucHJlZGljdGlvbnMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0ICBcdGlmKCF0aGlzLmlkcy5oYXMoZGF0YS5wcmVkaWN0aW9uc1tpXS5wbGFjZV9pZCkpXHJcblx0XHRcdCAgXHRcdHRoaXMuc3VnZ2VzdGlvbnMucHVzaChuZXcgU3VnZ2VzdGlvbihkYXRhLnByZWRpY3Rpb25zW2ldLnN0cnVjdHVyZWRfZm9ybWF0dGluZy5tYWluX3RleHQsIGRhdGEucHJlZGljdGlvbnNbaV0uc3RydWN0dXJlZF9mb3JtYXR0aW5nLnNlY29uZGFyeV90ZXh0KSk7XHJcblx0XHRcdCAgXHR0aGlzLmlkcy5hZGQoZGF0YS5wcmVkaWN0aW9uc1tpXS5wbGFjZV9pZCk7XHJcblx0XHQgIFx0fVxyXG5cdFx0fSk7XHJcbiAgXHR9LCA1MDApOyAgXHRcclxuICB9XHJcblxyXG4gIGF1dG9jb21wbGV0ZSgpIHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgXHR0aGlzLmlkcy5jbGVhcigpO1xyXG4gICAgICB0aGlzLnN1Z2dlc3Rpb25zLnNwbGljZSgwKTtcclxuICAgICAgdGhpcy5wbGFjZXNTZXJ2aWNlLmdldFBsYWNlUmVzdWx0cyh0aGlzLmFkZHJlc3MpLnN1YnNjcmliZSgoZGF0YTogYW55KSA9PiB7XHJcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGRhdGEucmVzdWx0cy5sZW5ndGg7IGkrKykge1xyXG5cdCAgICAgIFx0aWYoIXRoaXMuaWRzLmhhcyhkYXRhLnJlc3VsdHNbaV0ucGxhY2VfaWQpKVxyXG5cdCAgICAgIFx0XHR0aGlzLnN1Z2dlc3Rpb25zLnB1c2gobmV3IFN1Z2dlc3Rpb24oZGF0YS5yZXN1bHRzW2ldLm5hbWUsIGRhdGEucmVzdWx0c1tpXS5mb3JtYXR0ZWRfYWRkcmVzcykpO1xyXG5cdCAgICAgIFx0dGhpcy5pZHMuYWRkKGRhdGEucmVzdWx0c1tpXS5wbGFjZV9pZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcblx0ICAgICAgdGhpcy5wbGFjZXNTZXJ2aWNlLmdldEF1dG9jb21wbGV0ZVJlc3VsdHNBZGRyZXNzKHRoaXMuYWRkcmVzcykuc3Vic2NyaWJlKChkYXRhOiBhbnkpID0+IHtcclxuXHQgICAgICBcdCAgZm9yKHZhciBpID0gMDsgaSA8IGRhdGEucHJlZGljdGlvbnMubGVuZ3RoOyBpKyspIHtcclxuXHQgICAgICAgICAgXHRpZighdGhpcy5pZHMuaGFzKGRhdGEucHJlZGljdGlvbnNbaV0ucGxhY2VfaWQpKVxyXG5cdCAgICAgICAgICBcdFx0dGhpcy5zdWdnZXN0aW9ucy5wdXNoKG5ldyBTdWdnZXN0aW9uKGRhdGEucHJlZGljdGlvbnNbaV0uc3RydWN0dXJlZF9mb3JtYXR0aW5nLm1haW5fdGV4dCwgZGF0YS5wcmVkaWN0aW9uc1tpXS5zdHJ1Y3R1cmVkX2Zvcm1hdHRpbmcuc2Vjb25kYXJ5X3RleHQpKTtcclxuXHQgICAgICAgICAgXHR0aGlzLmlkcy5hZGQoZGF0YS5wcmVkaWN0aW9uc1tpXS5wbGFjZV9pZCk7XHJcblx0ICAgICAgICAgIH1cclxuXHQgICAgICB9KTtcclxuXHQgICAgICAvLyB0aGlzLnBsYWNlc1NlcnZpY2UuZ2V0QXV0b2NvbXBsZXRlUmVzdWx0c0VzdGFibGlzaG1lbnQodGhpcy5hZGRyZXNzKS5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4ge1xyXG5cdCAgICAgIC8vIFx0ICBmb3IodmFyIGkgPSAwOyBpIDwgZGF0YS5wcmVkaWN0aW9ucy5sZW5ndGg7IGkrKykge1xyXG5cdCAgICAgIC8vICAgICBcdGlmKCF0aGlzLmlkcy5oYXMoZGF0YS5wcmVkaWN0aW9uc1tpXS5wbGFjZV9pZCkpXHJcblx0ICAgICAgLy8gICAgIFx0XHR0aGlzLnN1Z2dlc3Rpb25zLnB1c2gobmV3IFN1Z2dlc3Rpb24oZGF0YS5wcmVkaWN0aW9uc1tpXS5zdHJ1Y3R1cmVkX2Zvcm1hdHRpbmcubWFpbl90ZXh0LCBkYXRhLnByZWRpY3Rpb25zW2ldLnN0cnVjdHVyZWRfZm9ybWF0dGluZy5zZWNvbmRhcnlfdGV4dCkpO1xyXG5cdCAgICAgIC8vICAgICBcdHRoaXMuaWRzLmFkZChkYXRhLnByZWRpY3Rpb25zW2ldLnBsYWNlX2lkKTtcclxuXHQgICAgICAvLyAgICAgfVxyXG5cdCAgICAgIC8vIH0pO1xyXG5cdCAgICAgIHRoaXMucGxhY2VzU2VydmljZS5nZXRBdXRvY29tcGxldGVSZXN1bHRzQ2l0eSh0aGlzLmFkZHJlc3MpLnN1YnNjcmliZSgoZGF0YTogYW55KSA9PiB7XHJcblx0ICAgICAgXHQgIGZvcih2YXIgaSA9IDA7IGkgPCBkYXRhLnByZWRpY3Rpb25zLmxlbmd0aDsgaSsrKSB7XHJcblx0ICAgICAgICAgIFx0aWYoIXRoaXMuaWRzLmhhcyhkYXRhLnByZWRpY3Rpb25zW2ldLnBsYWNlX2lkKSlcclxuXHQgICAgICAgICAgXHRcdHRoaXMuc3VnZ2VzdGlvbnMucHVzaChuZXcgU3VnZ2VzdGlvbihkYXRhLnByZWRpY3Rpb25zW2ldLnN0cnVjdHVyZWRfZm9ybWF0dGluZy5tYWluX3RleHQsIGRhdGEucHJlZGljdGlvbnNbaV0uc3RydWN0dXJlZF9mb3JtYXR0aW5nLnNlY29uZGFyeV90ZXh0KSk7XHJcblx0ICAgICAgICAgIFx0dGhpcy5pZHMuYWRkKGRhdGEucHJlZGljdGlvbnNbaV0ucGxhY2VfaWQpO1xyXG5cdCAgICAgICAgICB9XHJcblx0ICAgICAgfSk7XHJcbiAgICAgIH0sIDEwMCk7XHJcblxyXG4gICAgfSwgNDAwKTtcclxuICB9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbYXBwTG9naW5dJ1xufSlcbmV4cG9ydCBjbGFzcyBMb2dpbkRpcmVjdGl2ZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi8qXFxuQWRkIHlvdXIgTmF0aXZlU2NyaXB0IHNwZWNpZmljIHN0eWxlcyBoZXJlLlxcblRvIGxlYXJuIG1vcmUgYWJvdXQgc3R5bGluZyBpbiBOYXRpdmVTY3JpcHQgc2VlOlxcbmh0dHBzOi8vZG9jcy5uYXRpdmVzY3JpcHQub3JnL2FuZ3VsYXIvdWkvc3R5bGluZ1xcbiovXFxuXFxuLmxvZ2luIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGNvbG9yOiAjYWMwMGU2O1xcbiAgICAvKnBhZGRpbmc6IDZweCAyNHB4OyovXFxuICAgIGJvcmRlci13aWR0aDogMTtcXG4gICAgYm9yZGVyLWNvbG9yOiAjYWMwMGU2O1xcbiAgICBib3JkZXItcmFkaXVzOiA1O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZsb2F0OiBjZW50ZXI7XFxuICAgIG1hcmdpbjogYXV0bzsgXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiU2Vnb2UgVUlcXFwiLEFyaWFsLHNhbnMtc2VyaWY7XFxuICAgIG1hcmdpbi1ib3R0b206IDE1O1xcbiAgICB3aWR0aDogMTIwO1xcbiAgICBoZWlnaHQ6IDQwO1xcbn1cXG5cXG4ubG9naW46aGlnaGxpZ2h0ZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjllNmZmO1xcbn1cXG5cXG4ubG9naW4taW5mbyB7XFxuXFx0bWFyZ2luLXRvcDogMTIwO1xcbn1cXG5cXG4uaG9tZXNjcmVlbi1sb2dvIHtcXG5cXHRtYXJnaW4tYm90dG9tOiAyMDA7XFxufVxcblxcbi5oMSB7XFxuXFx0Zm9udC1zaXplOiA1MDtcXG5cXHRmb250LXdlaWdodDogNzAwO1xcblxcdGNvbG9yOiAjYWMwMGU2O1xcbn1cXG5cXG4ubG9naW4td3JhcHBlciB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcXG59XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJsb2dpbi13cmFwcGVyXFxcIj5cXHJcXG4gIDxTdGFja0xheW91dCBjbGFzcz1cXFwibG9naW4taW5mb1xcXCI+XFxyXFxuICAgIDxJbWFnZSBzcmM9XFxcIn4vaW1nL2xvZ28ucG5nXFxcIiBoZWlnaHQ9XFxcIjE4MFxcXCIgd2lkdGg9XFxcIjE4MFxcXCIgY2xhc3M9XFxcImhvbWVzY3JlZW4tbG9nb1xcXCI+PC9JbWFnZT5cXHJcXG48IS0tICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcInNsb2dhbnNcXFwiPlxcclxcbiAgICAgIDxMYWJlbCBjbGFzcz1cXFwiaDNcXFwiIHRleHQ9XFxcIkZpbmQgUmlkZXMgRmFzdFxcXCI+PC9MYWJlbD5cXHJcXG4gICAgICA8TGFiZWwgY2xhc3M9XFxcImgzXFxcIiB0ZXh0PVxcXCJDb25uZWN0IHdpdGggb3RoZXIgc3R1ZGVudHNcXFwiPjwvTGFiZWw+XFxyXFxuICAgIDwvU3RhY2tMYXlvdXQ+IC0tPlxcclxcbiAgPC9TdGFja0xheW91dD5cXHJcXG4gIDxTdGFja0xheW91dCBjbGFzcz1cXFwibG9naW5fd3JhcHBlclxcXCI+XFxyXFxuICAgIDxCdXR0b24gY2xhc3M9XFxcImxvZ2luXFxcIiAodGFwKT1cXFwidG9Mb2dJbigpXFxcIiB0ZXh0PVxcXCJMb2dpblxcXCI+PC9CdXR0b24+XFxyXFxuICAgIDxCdXR0b24gY2xhc3M9XFxcImxvZ2luXFxcIiAodGFwKT1cXFwidG9TaWduVXAoKVxcXCIgdGV4dD1cXFwiU2lnbiB1cFxcXCI+PC9CdXR0b24+XFxyXFxuICA8L1N0YWNrTGF5b3V0PlxcclxcbjwvU3RhY2tMYXlvdXQ+XFxyXFxuXFxyXFxuPCEtLVxcclxcbk9yaWdpbmFsIFdlYiB0ZW1wbGF0ZTpcXHJcXG5cXHJcXG48ZGl2IGNsYXNzPVxcXCJjb250ZW50LXJpZ2h0XFxcIj5cXHJcXG4gIDxkaXYgY2xhc3M9XFxcImxvZ2luX3dyYXBwZXJcXFwiPlxcclxcbiAgICAgIDxpbnB1dCB0eXBlPVxcXCJidXR0b25cXFwiIHZhbHVlPVxcXCJMb2dpblxcXCIgY2xhc3M9XFxcImxvZ2luXFxcIiAoY2xpY2spPVxcXCJ0b0xvZ0luKClcXFwiIC8+XFxyXFxuICAgICAgPGlucHV0IHR5cGU9XFxcImJ1dHRvblxcXCIgdmFsdWU9XFxcIlNpZ24gdXBcXFwiIGNsYXNzPVxcXCJsb2dpblxcXCIgaWQ9XFxcImxvZ2luMlxcXCIgKGNsaWNrKT1cXFwidG9TaWduVXAoKVxcXCIvPlxcclxcbiAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuPGRpdiBjbGFzcz1cXFwiY29udGVudC1sZWZ0XFxcIj5cXHJcXG4gIDxkaXYgY2xhc3M9XFxcImxvZ2luX2luZm9cXFwiPlxcclxcbiAgICA8aDE+Q29sbGVnZVBvb2w8L2gxPlxcclxcbiAgICA8aW1nIHNyYz1cXFwic3JjL2ltZy9sb2dvLnBuZ1xcXCIgYWx0PVxcXCJMb2dvXFxcIiBoZWlnaHQ9XFxcIjkwXFxcIiB3aWR0aD1cXFwiOTBcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJzbG9nYW5zXFxcIj5cXHJcXG4gICAgICA8aDM+RmluZCBSaWRlcyBGYXN0PGJyPlxcclxcbiAgICAgIENvbm5lY3Qgd2l0aCBvdGhlciBzdHVkZW50czwvaDM+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuLS0+XCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcclxuLy8gaW1wb3J0IHsgQ29nbml0b0F1dGggfSBmcm9tICdhbWF6b24tY29nbml0by1hdXRoLWpzL2Rpc3QvYW1hem9uLWNvZ25pdG8tYXV0aCc7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlXCI7XHJcbi8vIGltcG9ydCBBdXRoIGZyb20gJ0Bhd3MtYW1wbGlmeS9hdXRoJztcclxuLy8gY29uc3QgZmlyZWJhc2UgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiKTtcclxuaW1wb3J0ICogYXMgZmlyZWJhc2UgZnJvbSAnbmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZSc7XHJcbi8vIGltcG9ydCB7IEFuZ3VsYXJGaXJlQXV0aCB9IGZyb20gJ0Bhbmd1bGFyL2ZpcmUvYXV0aCc7XHJcbi8vIGltcG9ydCB7IGF1dGggfSBmcm9tICdmaXJlYmFzZS9hcHAnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtbG9naW4nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9sb2dpbi5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vbG9naW4uY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zLCBwcml2YXRlIHBhZ2U6IFBhZ2UpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICBcdHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xyXG4gICAgdmFyIGZpcmViYXNlQ29uZmlnID0ge1xyXG4gICAgICBhcGlLZXk6IFwiQUl6YVN5Qkd1aVlwTTEzOFE2YXlxRE1SVVZXSnAxQ0U5V0IwOU53XCIsXHJcbiAgICAgIGF1dGhEb21haW46IFwiY29sbGVnZXBvb2wtMTU1Mjc0OTExODYxNy5maXJlYmFzZWFwcC5jb21cIixcclxuICAgICAgZGF0YWJhc2VVUkw6IFwiaHR0cHM6Ly9jb2xsZWdlcG9vbC0xNTUyNzQ5MTE4NjE3LmZpcmViYXNlaW8uY29tXCIsXHJcbiAgICAgIHByb2plY3RJZDogXCJjb2xsZWdlcG9vbC0xNTUyNzQ5MTE4NjE3XCIsXHJcbiAgICAgIHN0b3JhZ2VCdWNrZXQ6IFwiY29sbGVnZXBvb2wtMTU1Mjc0OTExODYxNy5hcHBzcG90LmNvbVwiLFxyXG4gICAgICBtZXNzYWdpbmdTZW5kZXJJZDogXCIzNzUyNjM2ODAxODNcIixcclxuICAgICAgYXBwSUQ6IFwiY29sbGVnZXBvb2wtMTU1Mjc0OTExODYxN1wiLFxyXG4gICAgfTtcclxuXHJcbiAgICBmaXJlYmFzZS5pbml0KGZpcmViYXNlQ29uZmlnKS50aGVuKFxyXG4gICAgICAoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJmaXJlYmFzZS5pbml0IGRvbmVcIik7XHJcbiAgICAgIH0sXHJcbiAgICAgIGVycm9yID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgZmlyZWJhc2UuaW5pdCBlcnJvcjogJHtlcnJvcn1gKTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuICAgIC8vIGZpcmViYXNlLmF1dGgoKS5jcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQoJ2FkbWluJywgJ2t5dmVybjEyMycpLmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XHJcbiAgICAvLyAgIC8vIEhhbmRsZSBFcnJvcnMgaGVyZS5cclxuICAgIC8vICAgdmFyIGVycm9yQ29kZSA9IGVycm9yLmNvZGU7XHJcbiAgICAvLyAgIHZhciBlcnJvck1lc3NhZ2UgPSBlcnJvci5tZXNzYWdlO1xyXG4gICAgLy8gICAvLyAuLi5cclxuICAgIC8vIH0pO1xyXG5cclxuICB9XHJcblxyXG4gIHRvTG9nSW4oKSB7XHJcbiAgICAvLyBBdXRoLnNpZ25JbihcInBoaWxsaW1cIiwgXCJDb2xsZWdlcG9vbDY5KlwiKVxyXG4gICAgLy8gLnRoZW4odXNlciA9PiB7XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2codXNlcilcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyhcInJlZGlyZWN0aW5nXCIpXHJcblxyXG4gICAgLy8gfSlcclxuXHJcbiAgICB2YXIgY3JlZGVudGlhbHMgOiBmaXJlYmFzZS5Mb2dpbk9wdGlvbnMgPSB7XHJcbiAgICAgIHBhc3N3b3JkT3B0aW9uczoge1xyXG4gICAgICAgIGVtYWlsOiAnYWRhbS55ZWVAZ21haWwuY29tJyxcclxuICAgICAgICBwYXNzd29yZDogJ2t5dmVybjEyMycsXHJcbiAgICAgIH0sXHJcbiAgICAgIHR5cGU6IGZpcmViYXNlLkxvZ2luVHlwZS5QQVNTV09SRFxyXG4gICAgfVxyXG4gICAgZmlyZWJhc2UubG9naW4oY3JlZGVudGlhbHMpLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pXHJcbiAgICBmaXJlYmFzZS5nZXRDdXJyZW50VXNlcigpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgfSlcclxuXHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ25hdmlnYXRpb24nXSk7XHJcbiAgXHQvLyB3aW5kb3cubG9jYXRpb24uaHJlZj0naHR0cHM6Ly9jb2xsZWdlcG9vbGluZy5hdXRoLnVzLWVhc3QtMi5hbWF6b25jb2duaXRvLmNvbS9sb2dpbj9yZXNwb25zZV90eXBlPXRva2VuJmNsaWVudF9pZD00c3NsbW1ndjlwbjVsYjUwODdhYWo1cjU5OSZyZWRpcmVjdF91cmk9aHR0cDovL2xvY2FsaG9zdDo0MjAwL2xvZ2lucm91dGUmc3RhdGU9U1RBVEUmc2NvcGU9YXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4rb3BlbmlkJztcclxuICB9XHJcblxyXG4gIHRvU2lnblVwKCl7XHJcbiAgICBmaXJlYmFzZS5jcmVhdGVVc2VyKHtcclxuICAgICAgZW1haWw6ICdhZGFtLnllZUBnbWFpbC5jb20nLFxyXG4gICAgICBwYXNzd29yZDogJ2t5dmVybjEyMydcclxuICAgIH0pLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pXHJcbiAgICAvLyB0aGlzLmFmQXV0aC5hdXRoLmNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCgnYWRhbS55ZWVAZ21haWwuY29tJywgJ2t5dmVybjEyMycpO1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWyduYXZpZ2F0aW9uJ10pO1xyXG4gIFx0Ly8gd2luZG93LmxvY2F0aW9uLmhyZWY9J2h0dHBzOi8vY29sbGVnZXBvb2xpbmcuYXV0aC51cy1lYXN0LTIuYW1hem9uY29nbml0by5jb20vc2lnbnVwP3Jlc3BvbnNlX3R5cGU9dG9rZW4mY2xpZW50X2lkPTRzc2xtbWd2OXBuNWxiNTA4N2FhajVyNTk5JnJlZGlyZWN0X3VyaT1odHRwOi8vbG9jYWxob3N0OjQyMDAvbG9naW5yb3V0ZSZzdGF0ZT1TVEFURSZzY29wZT1hd3MuY29nbml0by5zaWduaW4udXNlci5hZG1pbitvcGVuaWQnO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEp3dEhlbHBlclNlcnZpY2UgfSBmcm9tICdAYXV0aDAvYW5ndWxhci1qd3QnO1xyXG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gJy4vdXNlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4vdXNlci5tb2RlbCc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFBheW1lbnRTZXJ2aWNlIH0gZnJvbSAnLi9wYXltZW50LnNlcnZpY2UnO1xyXG5pbXBvcnQgKiBhcyBmaXJlYmFzZSBmcm9tICduYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlJztcclxuaW1wb3J0ICogYXMgYXBwU2V0dGluZ3MgZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvbi1zZXR0aW5ncyc7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTG9naW5jaGVja1NlcnZpY2Uge1xyXG5cdC8vbXlTdG9yYWdlID0gd2luZG93LmxvY2FsU3RvcmFnZTtcclxuXHRteVN0b3JhZ2UgPSBudWxsO1xyXG5cdC8vdXNlciBmcm9tIGRhdGFiYXNlXHJcblx0dXNlcjtcclxuXHQvL2xpc3Qgb2YgYWxsIHVzZXJzIGZyb20gZGF0YWJhc2VcclxuXHR1c2VycztcclxuXHQvL3VzZXIgaW5mbyBmcm9tIGNvZ25pdG9cclxuXHR1c2VySW5mbyA9IG51bGw7XHJcblx0dWlkO1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlLCBwcml2YXRlIHBheW1lbnRTZXJ2aWNlOiBQYXltZW50U2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMpIHsgfVxyXG5cclxuICBhZGRVc2VyVG9GaXJlc3RvcmUodWlkLCBhZGRyZXNzLCBiaXJ0aGRhdGUsIGVtYWlsLCBmaXJzdF9uYW1lLCBsYXN0X25hbWUsIGdlbmRlciwgcGhvbmVfbnVtYmVyLCByaWRlc19naXZlbiwgcmlkZXNfcmVjZWl2ZWQsIHByb2ZpbGVfc291cmNlLCB0b2tlbikge1xyXG4gIFx0Y29uc3QgdXNlcnNDb2xsZWN0aW9uID0gZmlyZWJhc2UuZmlyZXN0b3JlLmNvbGxlY3Rpb24oJ3VzZXJzJyk7XHJcbiAgXHR1c2Vyc0NvbGxlY3Rpb24uZG9jKHVpZCkuc2V0KHtcclxuICBcdFx0YWRkcmVzczogYWRkcmVzcyxcclxuICBcdFx0YmlydGhkYXRlOiBiaXJ0aGRhdGUsXHJcbiAgXHRcdGVtYWlsOiBlbWFpbCxcclxuICBcdFx0Zmlyc3RfbmFtZTogZmlyc3RfbmFtZSxcclxuICBcdFx0bGFzdF9uYW1lOiBsYXN0X25hbWUsXHJcbiAgXHRcdGdlbmRlcjogZ2VuZGVyLFxyXG4gIFx0XHRwaG9uZV9udW1iZXI6IHBob25lX251bWJlcixcclxuICBcdFx0cmlkZXNfZ2l2ZW46IHJpZGVzX2dpdmVuLFxyXG4gIFx0XHRyaWRlc19yZWNlaXZlZDogcmlkZXNfcmVjZWl2ZWQsXHJcbiAgICAgIHByb2ZpbGVfc291cmNlOiBwcm9maWxlX3NvdXJjZSxcclxuICBcdFx0cG9zdHM6IFtdLFxyXG4gICAgICBjaGF0czogW10sXHJcbiAgICAgIHRva2VuczogW3Rva2VuXVxyXG4gIFx0fSk7XHJcbiAgfVxyXG5cclxuICBkZWNvZGVUb2tlbih0b2tlbikge1xyXG5cclxuICB9XHJcblxyXG4gIGNoZWNrVXNlcigpIHtcclxuXHJcbiAgfVxyXG5cclxuICBjbGVhckluZm8oKSB7XHJcbiAgXHR0aGlzLnVzZXIgPSBudWxsO1xyXG4gIFx0dGhpcy51c2VySW5mbyA9IG51bGw7XHJcbiAgXHR0aGlzLnVzZXJzID0gbnVsbDtcclxuICBcdHRoaXMudWlkID0gbnVsbDtcclxuICBcdGFwcFNldHRpbmdzLmNsZWFyKCk7XHJcbiAgfVxyXG4gIFxyXG4gIGFkZFVzZXJUb0JyYWludHJlZSh1c2VybmFtZSwgbmFtZSwgZW1haWwpIHtcclxuICBcdHRoaXMucGF5bWVudFNlcnZpY2UuYWRkUGF5bWVudFVzZXIodGhpcy51aWQsIHVzZXJuYW1lLCBuYW1lLCBlbWFpbCkuc3Vic2NyaWJlKChkYXRhOiBhbnkpID0+IHtcclxuICBcdFx0ZmlyZWJhc2UuZmlyZXN0b3JlLmNvbGxlY3Rpb24oJ3VzZXJzJykuZG9jKHRoaXMudWlkKS51cGRhdGUoe1xyXG4gIFx0XHRcdHBheW1lbnRfaWQ6IGRhdGEuY3VzdG9tZXIuaWRcclxuICBcdFx0fSlcclxuICBcdH0pXHJcbiAgXHQvLyB0aGlzLnBheW1lbnRTZXJ2aWNlLmdldFBheW1lbnRVc2VyQnlJZCgnMjU4NzAzOTU2Jykuc3Vic2NyaWJlKChkYXRhOiBhbnkpID0+IHtcclxuICBcdC8vIFx0Y29uc29sZS5sb2coZGF0YSk7XHJcbiAgXHQvLyB9KVxyXG4gIFx0Y29uc29sZS5sb2coJ2FkZGVkIHRvIGJyYWludHJlZScpO1xyXG4gIH1cclxuXHJcbiAgbG9naW5Vc2VyKHVpZCkge1xyXG4gIFx0YXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwidWlkXCIsIHVpZCk7XHJcbiAgXHRjb25zb2xlLmxvZyh1aWQpXHJcbiAgXHR0aGlzLnVpZCA9IHVpZDtcclxuICB9XHJcblxyXG4gIGxvZ2luQ2hlY2soKSB7XHJcblx0aWYodGhpcy5nZXRVc2VyID09IG51bGwpXHJcblx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ3dlbGNvbWUnXSwge2NsZWFySGlzdG9yeTogdHJ1ZX0pXHJcbiAgfVxyXG5cclxuICBnZXRVc2VyRnJvbUxvY2FsU3RvcmFnZSgpIHtcclxuXHRyZXR1cm4gYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwidWlkXCIpO1xyXG4gIH1cclxuXHJcbiAgZ2V0VXNlcigpIHtcclxuXHR0aGlzLnVpZCA9IHRoaXMuZ2V0VXNlckZyb21Mb2NhbFN0b3JhZ2UoKTtcclxuXHRyZXR1cm4gdGhpcy51aWQ7XHJcbiAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEp3dEhlbHBlclNlcnZpY2UgfSBmcm9tICdAYXV0aDAvYW5ndWxhci1qd3QnO1xyXG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gJy4vdXNlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4vdXNlci5tb2RlbCc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFBheW1lbnRTZXJ2aWNlIH0gZnJvbSAnLi9wYXltZW50LnNlcnZpY2UnO1xyXG5pbXBvcnQgKiBhcyBmaXJlYmFzZSBmcm9tICduYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlJztcclxuaW1wb3J0ICogYXMgYXBwU2V0dGluZ3MgZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvbi1zZXR0aW5ncyc7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTG9naW5jaGVja1NlcnZpY2Uge1xyXG5cdC8vbXlTdG9yYWdlID0gd2luZG93LmxvY2FsU3RvcmFnZTtcclxuXHRteVN0b3JhZ2UgPSBudWxsO1xyXG5cdC8vdXNlciBmcm9tIGRhdGFiYXNlXHJcblx0dXNlcjtcclxuXHQvL2xpc3Qgb2YgYWxsIHVzZXJzIGZyb20gZGF0YWJhc2VcclxuXHR1c2VycztcclxuXHQvL3VzZXIgaW5mbyBmcm9tIGNvZ25pdG9cclxuXHR1c2VySW5mbyA9IG51bGw7XHJcblx0dWlkO1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlLCBwcml2YXRlIHBheW1lbnRTZXJ2aWNlOiBQYXltZW50U2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMpIHsgfVxyXG5cclxuICBhZGRVc2VyVG9GaXJlc3RvcmUodWlkLCBhZGRyZXNzLCBiaXJ0aGRhdGUsIGVtYWlsLCBmaXJzdF9uYW1lLCBsYXN0X25hbWUsIGdlbmRlciwgcGhvbmVfbnVtYmVyLCByaWRlc19naXZlbiwgcmlkZXNfcmVjZWl2ZWQsIHByb2ZpbGVfc291cmNlLCB0b2tlbikge1xyXG4gIFx0Y29uc3QgdXNlcnNDb2xsZWN0aW9uID0gZmlyZWJhc2UuZmlyZXN0b3JlLmNvbGxlY3Rpb24oJ3VzZXJzJyk7XHJcbiAgXHR1c2Vyc0NvbGxlY3Rpb24uZG9jKHVpZCkuc2V0KHtcclxuICBcdFx0YWRkcmVzczogYWRkcmVzcyxcclxuICBcdFx0YmlydGhkYXRlOiBiaXJ0aGRhdGUsXHJcbiAgXHRcdGVtYWlsOiBlbWFpbCxcclxuICBcdFx0Zmlyc3RfbmFtZTogZmlyc3RfbmFtZSxcclxuICBcdFx0bGFzdF9uYW1lOiBsYXN0X25hbWUsXHJcbiAgXHRcdGdlbmRlcjogZ2VuZGVyLFxyXG4gIFx0XHRwaG9uZV9udW1iZXI6IHBob25lX251bWJlcixcclxuICBcdFx0cmlkZXNfZ2l2ZW46IHJpZGVzX2dpdmVuLFxyXG4gIFx0XHRyaWRlc19yZWNlaXZlZDogcmlkZXNfcmVjZWl2ZWQsXHJcbiAgICAgIHByb2ZpbGVfc291cmNlOiBwcm9maWxlX3NvdXJjZSxcclxuICBcdFx0cG9zdHM6IFtdLFxyXG4gICAgICBjaGF0czogW10sXHJcbiAgICAgIHRva2VuczogW3Rva2VuXVxyXG4gIFx0fSk7XHJcbiAgfVxyXG5cclxuICBkZWNvZGVUb2tlbih0b2tlbikge1xyXG5cclxuICB9XHJcblxyXG4gIGNoZWNrVXNlcigpIHtcclxuXHJcbiAgfVxyXG5cclxuICBjbGVhckluZm8oKSB7XHJcbiAgXHR0aGlzLnVzZXIgPSBudWxsO1xyXG4gIFx0dGhpcy51c2VySW5mbyA9IG51bGw7XHJcbiAgXHR0aGlzLnVzZXJzID0gbnVsbDtcclxuICBcdHRoaXMudWlkID0gbnVsbDtcclxuICBcdGFwcFNldHRpbmdzLmNsZWFyKCk7XHJcbiAgfVxyXG4gIFxyXG4gIGFkZFVzZXJUb0JyYWludHJlZSh1c2VybmFtZSwgbmFtZSwgZW1haWwpIHtcclxuICBcdHRoaXMucGF5bWVudFNlcnZpY2UuYWRkUGF5bWVudFVzZXIodGhpcy51aWQsIHVzZXJuYW1lLCBuYW1lLCBlbWFpbCkuc3Vic2NyaWJlKChkYXRhOiBhbnkpID0+IHtcclxuICBcdFx0ZmlyZWJhc2UuZmlyZXN0b3JlLmNvbGxlY3Rpb24oJ3VzZXJzJykuZG9jKHRoaXMudWlkKS51cGRhdGUoe1xyXG4gIFx0XHRcdHBheW1lbnRfaWQ6IGRhdGEuY3VzdG9tZXIuaWRcclxuICBcdFx0fSlcclxuICBcdH0pXHJcbiAgXHQvLyB0aGlzLnBheW1lbnRTZXJ2aWNlLmdldFBheW1lbnRVc2VyQnlJZCgnMjU4NzAzOTU2Jykuc3Vic2NyaWJlKChkYXRhOiBhbnkpID0+IHtcclxuICBcdC8vIFx0Y29uc29sZS5sb2coZGF0YSk7XHJcbiAgXHQvLyB9KVxyXG4gIFx0Y29uc29sZS5sb2coJ2FkZGVkIHRvIGJyYWludHJlZScpO1xyXG4gIH1cclxuXHJcbiAgbG9naW5Vc2VyKHVpZCkge1xyXG4gIFx0YXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwidWlkXCIsIHVpZCk7XHJcbiAgXHRjb25zb2xlLmxvZyh1aWQpXHJcbiAgXHR0aGlzLnVpZCA9IHVpZDtcclxuICB9XHJcblxyXG4gIGxvZ2luQ2hlY2soKSB7XHJcblx0aWYodGhpcy5nZXRVc2VyID09IG51bGwpXHJcblx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ3dlbGNvbWUnXSwge2NsZWFySGlzdG9yeTogdHJ1ZX0pXHJcbiAgfVxyXG5cclxuICBnZXRVc2VyRnJvbUxvY2FsU3RvcmFnZSgpIHtcclxuXHRyZXR1cm4gYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwidWlkXCIpO1xyXG4gIH1cclxuXHJcbiAgZ2V0VXNlcigpIHtcclxuXHR0aGlzLnVpZCA9IHRoaXMuZ2V0VXNlckZyb21Mb2NhbFN0b3JhZ2UoKTtcclxuXHRyZXR1cm4gdGhpcy51aWQ7XHJcbiAgfVxyXG5cclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLypcXG5BZGQgeW91ciBOYXRpdmVTY3JpcHQgc3BlY2lmaWMgc3R5bGVzIGhlcmUuXFxuVG8gbGVhcm4gbW9yZSBhYm91dCBzdHlsaW5nIGluIE5hdGl2ZVNjcmlwdCBzZWU6XFxuaHR0cHM6Ly9kb2NzLm5hdGl2ZXNjcmlwdC5vcmcvYW5ndWxhci91aS9zdHlsaW5nXFxuKi9cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8U3RhY2tMYXlvdXQ+XFxuICA8TGFiZWwgdGV4dD1cXFwibG9naW5yb3V0ZSB3b3Jrc1xcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiPjwvTGFiZWw+XFxuICA8TGFiZWwgdGV4dD1cXFwiVGhpcyBpcyBhIG1pZ3JhdGVkIGNvbXBvbmVudFxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiPjwvTGFiZWw+XFxuICA8TGFiZWwgdGV4dD1cXFwiVXBkYXRlIGl0IHRvIHByb3ZpZGUgdGhlIFVJIGVsZW1lbnRzIHJlcXVpcmVkIGluIHlvdXIgbW9iaWxlIGFwcFxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiPjwvTGFiZWw+XFxuPC9TdGFja0xheW91dD5cXG5cXG48IS0tXFxuT3JpZ2luYWwgV2ViIHRlbXBsYXRlOlxcblxcbjxwPlxcbiAgUmVkaXJlY3RpbmcuLi5cXG48L3A+XFxuXFxuLS0+XCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTG9naW5jaGVja1NlcnZpY2UgfSBmcm9tICcuLi9sb2dpbmNoZWNrLnNlcnZpY2UnO1xuaW1wb3J0IHsgVHJhbnNmZXJTZXJ2aWNlIH0gZnJvbSAnLi4vZGF0YXRyYW5zZmVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWxvZ2lucm91dGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vbG9naW5yb3V0ZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2xvZ2lucm91dGUuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIExvZ2lucm91dGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbG9naW5jaGVja1NlcnZpY2U6IExvZ2luY2hlY2tTZXJ2aWNlLCBwcml2YXRlIHRyYW5zZmVyU2VydmljZTogVHJhbnNmZXJTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7IH1cbiAgaWRUb2tlbiA9IHRoaXMuZ2V0UGFyYW1ldGVyQnlOYW1lKFwiaWRfdG9rZW5cIik7XG4gIG5nT25Jbml0KCkge1xuICBcdGlmKHRoaXMuaWRUb2tlbiA9PSBudWxsIHx8IHRoaXMuaWRUb2tlbiA9PSAnJylcbiAgXHRcdHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoJy9sb2dpbicpO1xuXG4gIFx0dGhpcy5sb2dpbmNoZWNrU2VydmljZS5kZWNvZGVUb2tlbih0aGlzLmlkVG9rZW4pO1xuICBcdHRoaXMubG9naW5jaGVja1NlcnZpY2UuY2hlY2tVc2VyKCk7XG5cbiAgfVxuXG5cdGdldFBhcmFtZXRlckJ5TmFtZShuYW1lKSB7XG5cdCAgICB2YXIgdXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XG5cdCAgICBuYW1lID0gbmFtZS5yZXBsYWNlKC9bXFxbXFxdXS9nLCBcIlxcXFwkJlwiKTtcblx0ICAgIHZhciByZWdleCA9IG5ldyBSZWdFeHAoXCJbPyYjXVwiICsgbmFtZSArIFwiKD0oW14mI10qKXwmfCN8JClcIiksXG5cdCAgICAgICAgcmVzdWx0cyA9IHJlZ2V4LmV4ZWModXJsKTtcblx0ICAgIGlmICghcmVzdWx0cykgcmV0dXJuIG51bGw7XG5cdCAgICBpZiAoIXJlc3VsdHNbMl0pIHJldHVybiAnJztcblx0ICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocmVzdWx0c1syXS5yZXBsYWNlKC9cXCsvZywgXCIgXCIpKTtcblx0fVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi8qIEFkZCBtb2JpbGUgc3R5bGVzIGZvciB0aGUgY29tcG9uZW50IGhlcmUuICAqL1xcblwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxCdXR0b24gdGV4dD1cXFwibWVzc2FnZS1tb2RhbCB3b3JrcyFcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiPjwvQnV0dG9uPlwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLW1lc3NhZ2UtbW9kYWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vbWVzc2FnZS1tb2RhbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL21lc3NhZ2UtbW9kYWwuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIE1lc3NhZ2VNb2RhbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLypcXG5BZGQgeW91ciBOYXRpdmVTY3JpcHQgc3BlY2lmaWMgc3R5bGVzIGhlcmUuXFxuVG8gbGVhcm4gbW9yZSBhYm91dCBzdHlsaW5nIGluIE5hdGl2ZVNjcmlwdCBzZWU6XFxuaHR0cHM6Ly9kb2NzLm5hdGl2ZXNjcmlwdC5vcmcvYW5ndWxhci91aS9zdHlsaW5nXFxuKi9cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8UGFnZS5hY3Rpb25CYXI+XFxyXFxuICAgIDxBY3Rpb25CYXIgdGl0bGU9XFxcInt7IGFjdGlvbkJhclRpdGxlIH19XFxcIj5cXHJcXG4gICAgXFx0PEFjdGlvbkl0ZW0gKHRhcCk9XFxcInRvTWVzc2FnZXMoKVxcXCIgaWNvbj1cXFwifi9pbWcvc2VuZF9tZXNzYWdlX2ljb24ucG5nXFxcIiBpb3MucG9zaXRpb249XFxcInJpZ2h0XFxcIiB3aWR0aD1cXFwiMjBcXFwiIGhlaWdodD1cXFwiMjBcXFwiICNhY3Rpb25JdGVtPjwvQWN0aW9uSXRlbT5cXHJcXG4gICAgPC9BY3Rpb25CYXI+XFxyXFxuPC9QYWdlLmFjdGlvbkJhcj5cXHJcXG5cXHJcXG48VGFiVmlldyBbKG5nTW9kZWwpXT1cXFwidGFiU2VsZWN0ZWRJbmRleFxcXCIgKHRhYkl0ZW1UYXApPVxcXCJob21lKClcXFwiIChzZWxlY3RlZEluZGV4Q2hhbmdlZCk9XFxcIm9uU2VsZWN0ZWRJbmRleENoYW5nZWQoJGV2ZW50KVxcXCIgYW5kcm9pZFRhYnNQb3NpdGlvbj1cXFwiYm90dG9tXFxcIiBzZWxlY3RlZFRhYlRleHRDb2xvcj1cXFwiI2FjMDBlNlxcXCIgI3RhYlZpZXc+XFxyXFxuICAgIDxQYWdlICp0YWJJdGVtPVxcXCJob21lVGFiXFxcIj5cXHJcXG4gICAgXFx0PGFwcC1ob21lPjwvYXBwLWhvbWU+XFxyXFxuICAgIDwvUGFnZT5cXHJcXG4gICAgPFBhZ2UgKnRhYkl0ZW09XFxcInNlYXJjaFRhYlxcXCI+XFxyXFxuICAgIFxcdDxhcHAtc2VhcmNoPjwvYXBwLXNlYXJjaD5cXHJcXG4gICAgPC9QYWdlPlxcclxcbiAgICA8UGFnZSAqdGFiSXRlbT1cXFwiaGlzdG9yeVRhYlxcXCI+XFxyXFxuICAgIFxcdDxhcHAtaGlzdG9yeT48L2FwcC1oaXN0b3J5PlxcclxcbiAgICA8L1BhZ2U+XFxyXFxuICAgIDxQYWdlICp0YWJJdGVtPVxcXCJzZXR0aW5nc1RhYlxcXCI+XFxyXFxuICAgIFxcdDxhcHAtc2V0dGluZ3M+PC9hcHAtc2V0dGluZ3M+XFxyXFxuICAgIDwvUGFnZT5cXHJcXG48L1RhYlZpZXc+XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuPCEtLVxcclxcbk9yaWdpbmFsIFdlYiB0ZW1wbGF0ZTpcXHJcXG5cXHJcXG48ZGl2IGNsYXNzPVxcXCJ0b3BuYXZcXFwiPlxcclxcblxcdDxkaXYgY2xhc3M9XFxcIm5hdmJ0bnNcXFwiPlxcclxcblxcdFxcdDxhIChjbGljayk9XFxcInRvSG9tZSgpXFxcIiBjbGFzcz1cXFwiYWN0aXZlIG5hdmlnYXRpb25cXFwiIGlkPVxcXCJob21lbmF2XFxcIj5Ib21lPC9hPlxcclxcblxcdFxcdDxhIChjbGljayk9XFxcInRvSGlzdG9yeSgpXFxcIiBjbGFzcz1cXFwibmF2aWdhdGlvblxcXCIgaWQ9XFxcImhpc3RvcnluYXZcXFwiPkhpc3Rvcnk8L2E+XFxyXFxuXFx0XFx0PGEgKGNsaWNrKT1cXFwidG9QYXltZW50cygpXFxcIiBjbGFzcz1cXFwibmF2aWdhdGlvblxcXCIgaWQ9XFxcInBheW1lbnRzbmF2XFxcIj5QYXltZW50czwvYT5cXHJcXG5cXHRcXHQ8YSAoY2xpY2spPVxcXCJ0b1NldHRpbmdzKClcXFwiIGNsYXNzPVxcXCJuYXZpZ2F0aW9uXFxcIiBpZD1cXFwic2V0dGluZ3NuYXZcXFwiPlNldHRpbmdzPC9hPlxcclxcblxcdFxcdDxhIChjbGljayk9XFxcInBvc3QoKVxcXCIgY2xhc3M9XFxcIm5hdmlnYXRpb25cXFwiIGlkPVxcXCJwb3N0bmF2XFxcIj5Qb3N0PC9hPlxcclxcblxcdDwvZGl2PlxcclxcblxcclxcblxcdDxkaXYgY2xhc3M9XFxcImltZ25hdlxcXCI+XFxyXFxuXFx0XFx0PGltZyBzcmM9XFxcInNyYy9pY29uLnBuZ1xcXCIgKGNsaWNrKT1cXFwiZHJvcE1lbnUoKVxcXCI+XFxyXFxuXFx0PC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuPGRpdiBjbGFzcz1cXFwiY2FyZXRcXFwiIGlkPVxcXCJkcm9wZG93bi1jYXJldFxcXCI+PC9kaXY+XFxyXFxuPGRpdiBjbGFzcz1cXFwiZHJvcGRvd25cXFwiIGlkPVxcXCJkcm9wZG93bi1tZW51XFxcIj5cXHJcXG5cXHQ8ZGl2IGNsYXNzPVxcXCJkcm9wZG93bi1vcHRpb25cXFwiIChjbGljayk9XFxcInRvSG9tZSgpXFxcIj5cXHJcXG5cXHRcXHQ8c3Bhbj5Ib21lPC9zcGFuPlxcclxcblxcdDwvZGl2PlxcclxcblxcdDxkaXYgY2xhc3M9XFxcImRyb3Bkb3duLW9wdGlvblxcXCIgKGNsaWNrKT1cXFwidG9TZXR0aW5ncygpXFxcIj5cXHJcXG5cXHRcXHQ8c3Bhbj5TZXR0aW5nczwvc3Bhbj5cXHJcXG5cXHQ8L2Rpdj5cXHJcXG5cXHQ8ZGl2IGNsYXNzPVxcXCJkcm9wZG93bi1vcHRpb25cXFwiIChjbGljayk9XFxcImxvZ291dCgpXFxcIj5cXHJcXG5cXHRcXHQ8c3Bhbj5Mb2dvdXQ8L3NwYW4+XFxyXFxuXFx0PC9kaXY+XFxyXFxuXFx0PGRpdiBjbGFzcz1cXFwiZHJvcGRvd24tb3B0aW9uIGdyb3VwLXR3b1xcXCIgKGNsaWNrKT1cXFwiZHJvcE1lbnUoKVxcXCI+XFxyXFxuXFx0XFx0PHNwYW4+Q2xvc2U8L3NwYW4+XFxyXFxuXFx0PC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuLS0+XCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRyYW5zZmVyU2VydmljZSB9IGZyb20gJy4uL2RhdGF0cmFuc2Zlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7UGFnZX0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlJztcclxuaW1wb3J0IHsgQWN0aW9uQmFyLCBBY3Rpb25JdGVtIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9hY3Rpb24tYmFyJztcclxuaW1wb3J0ICogYXMgZG9tIGZyb20gJ25hdGl2ZXNjcmlwdC1kb20nO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2J1dHRvbic7XHJcbmltcG9ydCB7IFRhYlZpZXcgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS90YWItdmlld1wiO1xyXG5pbXBvcnQgeyBTZWxlY3RlZEluZGV4Q2hhbmdlZEV2ZW50RGF0YSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3RhYi12aWV3XCI7XHJcbmltcG9ydCB7IExpc3RWaWV3IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGlzdC12aWV3XCI7XHJcbmltcG9ydCAqIGFzIGFwcGxpY2F0aW9uIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCI7XHJcbmltcG9ydCB7IEFuZHJvaWRBcHBsaWNhdGlvbiwgQW5kcm9pZEFjdGl2aXR5QmFja1ByZXNzZWRFdmVudERhdGEgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiO1xyXG5pbXBvcnQgeyBpc0FuZHJvaWQgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtbmF2aWdhdGlvbicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL25hdmlnYXRpb24uY29tcG9uZW50LnRucy5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9uYXZpZ2F0aW9uLmNvbXBvbmVudC50bnMuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIE5hdmlnYXRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRyYW5zZmVyU2VydmljZTogVHJhbnNmZXJTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSBwYWdlOiBQYWdlKSB7IH1cclxuXHJcbiAgQFZpZXdDaGlsZCgndGFiVmlldycsIHsgc3RhdGljOiB0cnVlIH0pIHR2OiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoJ2FjdGlvbkJhcicsIHsgc3RhdGljOiB0cnVlIH0pIGFiOiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoJ2FjdGlvbkl0ZW0nLCB7IHN0YXRpYzogdHJ1ZSB9KSBhaTogRWxlbWVudFJlZjtcclxuICB1c2VyO1xyXG4gIGFjdGl2ZWJ0bjtcclxuICB0YWJTZWxlY3RlZEluZGV4ID0gMDtcclxuICBhY3Rpb25CYXJUaXRsZSA9ICdIb21lJztcclxuICBob21lVGFiID0ge2ljb25Tb3VyY2U6ICdyZXM6Ly9ob21lX2hpZ2hsaWdodGVkJ307XHJcbiAgc2VhcmNoVGFiID0ge2ljb25Tb3VyY2U6ICdyZXM6Ly9zZWFyY2gnfTtcclxuICBoaXN0b3J5VGFiID0ge2ljb25Tb3VyY2U6ICdyZXM6Ly9oaXN0b3J5J307XHJcbiAgc2V0dGluZ3NUYWIgPSB7aWNvblNvdXJjZTogJ3JlczovL3NldHRpbmdzJ307XHJcbiAgYWN0aW9uSXRlbSA6IEFjdGlvbkl0ZW07XHJcblxyXG4gIC8vIEBWaWV3Q2hpbGQoJ2xpc3RWaWV3JykgbHY6IEVsZW1lbnRSZWY7XHJcbiAgLy8gbGlzdFZpZXcgPSA8TGlzdFZpZXc+IHRoaXMubHYubmF0aXZlRWxlbWVudDtcclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmFjdGlvbkl0ZW0gPSA8QWN0aW9uSXRlbT4gdGhpcy5haS5uYXRpdmVFbGVtZW50O1xyXG5cclxuICBcdHRoaXMuYWN0aXZlYnRuID0gdGhpcy50cmFuc2ZlclNlcnZpY2UuZ2V0RGF0YSgpO1xyXG4gIFx0aWYodGhpcy5hY3RpdmVidG4gPT0gXCJob21lbmF2XCIpIHtcclxuICAgICAgdGhpcy5ob21lVGFiID0ge2ljb25Tb3VyY2U6ICdyZXM6Ly9ob21lX2hpZ2hsaWdodGVkJ307XHJcbiAgICAgIHRoaXMuc2VhcmNoVGFiID0ge2ljb25Tb3VyY2U6ICdyZXM6Ly9zZWFyY2gnfTtcclxuICAgICAgdGhpcy5oaXN0b3J5VGFiID0ge2ljb25Tb3VyY2U6ICdyZXM6Ly9oaXN0b3J5J307XHJcbiAgICAgIHRoaXMuc2V0dGluZ3NUYWIgPSB7aWNvblNvdXJjZTogJ3JlczovL3NldHRpbmdzJ307XHJcbiAgICAgIHRoaXMuYWN0aW9uSXRlbS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xyXG4gICAgICB0aGlzLnRhYlNlbGVjdGVkSW5kZXggPSAwO1xyXG4gIFx0fSBlbHNlIGlmKHRoaXMuYWN0aXZlYnRuID09IFwic2VhcmNobmF2XCIpIHtcclxuICAgICAgdGhpcy5ob21lVGFiID0ge2ljb25Tb3VyY2U6ICdyZXM6Ly9ob21lJ307XHJcbiAgICAgIHRoaXMuc2VhcmNoVGFiID0ge2ljb25Tb3VyY2U6ICdyZXM6Ly9zZWFyY2hfaGlnaGxpZ2h0ZWQnfTtcclxuICAgICAgdGhpcy5oaXN0b3J5VGFiID0ge2ljb25Tb3VyY2U6ICdyZXM6Ly9oaXN0b3J5J307XHJcbiAgICAgIHRoaXMuc2V0dGluZ3NUYWIgPSB7aWNvblNvdXJjZTogJ3JlczovL3NldHRpbmdzJ307XHJcbiAgICAgIHRoaXMuYWN0aW9uSXRlbS52aXNpYmlsaXR5ID0gJ2NvbGxhcHNlJztcclxuICAgICAgdGhpcy50YWJTZWxlY3RlZEluZGV4ID0gMTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYodGhpcy5hY3RpdmVidG4gPT0gXCJoaXN0b3J5bmF2XCIpIHtcclxuICAgICAgdGhpcy5ob21lVGFiID0ge2ljb25Tb3VyY2U6ICdyZXM6Ly9ob21lJ307XHJcbiAgICAgIHRoaXMuc2VhcmNoVGFiID0ge2ljb25Tb3VyY2U6ICdyZXM6Ly9zZWFyY2gnfTtcclxuICAgICAgdGhpcy5oaXN0b3J5VGFiID0ge2ljb25Tb3VyY2U6ICdyZXM6Ly9oaXN0b3J5X2hpZ2hsaWdodGVkJ307XHJcbiAgICAgIHRoaXMuc2V0dGluZ3NUYWIgPSB7aWNvblNvdXJjZTogJ3JlczovL3NldHRpbmdzJ307XHJcbiAgICAgIHRoaXMuYWN0aW9uSXRlbS52aXNpYmlsaXR5ID0gJ2NvbGxhcHNlJztcclxuICAgICAgdGhpcy50YWJTZWxlY3RlZEluZGV4ID0gMjtcclxuICAgIH1cclxuICAgIGVsc2UgaWYodGhpcy5hY3RpdmVidG4gPT0gXCJzZXR0aW5nc25hdlwiKSB7XHJcbiAgICAgIHRoaXMuaG9tZVRhYiA9IHtpY29uU291cmNlOiAncmVzOi8vaG9tZSd9O1xyXG4gICAgICB0aGlzLnNlYXJjaFRhYiA9IHtpY29uU291cmNlOiAncmVzOi8vc2VhcmNoJ307XHJcbiAgICAgIHRoaXMuaGlzdG9yeVRhYiA9IHtpY29uU291cmNlOiAncmVzOi8vaGlzdG9yeSd9O1xyXG4gICAgICB0aGlzLnNldHRpbmdzVGFiID0ge2ljb25Tb3VyY2U6ICdyZXM6Ly9zZXR0aW5nc19oaWdobGlnaHRlZCd9O1xyXG4gICAgICB0aGlzLmFjdGlvbkl0ZW0udmlzaWJpbGl0eSA9ICdjb2xsYXBzZSc7XHJcbiAgICAgIHRoaXMudGFiU2VsZWN0ZWRJbmRleCA9IDM7XHJcbiAgICB9XHJcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnRhYlNlbGVjdGVkSW5kZXgpXHJcblxyXG4gICAgLy8gdmFyIGp1c3RTZXQgPSBmYWxzZTtcclxuXHJcbiAgICAvLyBpZihpc0FuZHJvaWQpXHJcbiAgICAvLyAgIGFwcGxpY2F0aW9uLmFuZHJvaWQub24oQW5kcm9pZEFwcGxpY2F0aW9uLmFjdGl2aXR5QmFja1ByZXNzZWRFdmVudCwgKGRhdGE6IEFuZHJvaWRBY3Rpdml0eUJhY2tQcmVzc2VkRXZlbnREYXRhKSA9PiB7XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2codGhpcy50YWJTZWxlY3RlZEluZGV4KVxyXG4gICAgLy8gICBpZiAodGhpcy50YWJTZWxlY3RlZEluZGV4ID09PSAwICYmICFqdXN0U2V0KSB7XHJcbiAgICAvLyAgICAgYXBwbGljYXRpb24uYW5kcm9pZC5mb3JlZ3JvdW5kQWN0aXZpdHkuZmluaXNoKCk7XHJcbiAgICAvLyAgIH1cclxuICAgIC8vICAgZWxzZSB7XHJcbiAgICAvLyAgICAgdGhpcy50di5uYXRpdmVFbGVtZW50LnNlbGVjdGVkSW5kZXggPSAwO1xyXG4gICAgLy8gICAgIGp1c3RTZXQgPSB0cnVlO1xyXG4gICAgLy8gICAgIHNldFRpbWVvdXQoKCkgPT4ge2p1c3RTZXQgPSBmYWxzZX0sIDUwMCk7XHJcbiAgICAvLyAgIH1cclxuICAgIC8vIH0pO1xyXG4gIH1cclxuICBwYWludEFjdGl2ZShidG4pIHtcclxuICBcdGNvbnN0IG5hdmNvbnRlbnRzID0gZG9tLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25hdmlnYXRpb24nKVxyXG4gICAgZm9yKHZhciB4ID0gMDsgeCA8IG5hdmNvbnRlbnRzLmxlbmd0aDsgeCsrKVxyXG4gICAge1xyXG4gICAgICAgIG5hdmNvbnRlbnRzW3hdLmNsYXNzTmFtZSA9ICduYXZpZ2F0aW9uJztcclxuICAgIH1cclxuICAgIGNvbnN0IGJ1dHRvbiA9IDxCdXR0b24+dGhpcy5wYWdlLmdldFZpZXdCeUlkKGJ0bik7XHJcbiAgICBidXR0b24uY2xhc3NOYW1lICs9ICcgYWN0aXZlJztcclxuXHJcbiAgfVxyXG5cclxuICBvblNlbGVjdGVkSW5kZXhDaGFuZ2VkKGFyZ3M6IFNlbGVjdGVkSW5kZXhDaGFuZ2VkRXZlbnREYXRhKSB7XHJcbiAgICAgICAgaWYgKGFyZ3Mub2xkSW5kZXggIT09IC0xKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld0luZGV4ID0gYXJncy5uZXdJbmRleDtcclxuICAgICAgICAgICAgaWYgKG5ld0luZGV4ID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGlvbkJhclRpdGxlID0gJ0hvbWUnO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50b0hvbWUoKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChuZXdJbmRleCA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hY3Rpb25CYXJUaXRsZSA9ICdTZWFyY2gnO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50b1NlYXJjaCgpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG5ld0luZGV4ID09PSAyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGlvbkJhclRpdGxlID0gJ1lvdXIgUG9zdHMnO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50b0hpc3RvcnkoKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChuZXdJbmRleCA9PT0gMykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hY3Rpb25CYXJUaXRsZSA9ICdTZXR0aW5ncyc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvU2V0dGluZ3MoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgaG9tZSgpIHtcclxuICAgIGlmKHRoaXMudGFiU2VsZWN0ZWRJbmRleCA9PSAwKVxyXG4gICAge1xyXG4gICAgICBsZXQgbGlzdFZpZXcgPSA8TGlzdFZpZXc+IHRoaXMucGFnZS5nZXRWaWV3QnlJZCgnbGlzdFZpZXcnKTtcclxuICAgICAgbGlzdFZpZXcuc2Nyb2xsVG9JbmRleCgwKTtcclxuICAgIH1cclxuICAgIHRoaXMuYWN0aW9uSXRlbS52aXNpYmlsaXR5ID0gJ2NvbGxhcHNlJztcclxuICB9XHJcblxyXG4gIHRvSG9tZSgpIHtcclxuICBcdC8vIHRoaXMudHJhbnNmZXJTZXJ2aWNlLnNldERhdGEoJ2hvbWVuYXYnKTtcclxuXHQgIC8vIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnaG9tZSddKTtcclxuICAgIHRoaXMuaG9tZVRhYiA9IHtpY29uU291cmNlOiAncmVzOi8vaG9tZV9oaWdobGlnaHRlZCd9O1xyXG4gICAgdGhpcy5zZWFyY2hUYWIgPSB7aWNvblNvdXJjZTogJ3JlczovL3NlYXJjaCd9O1xyXG4gICAgdGhpcy5oaXN0b3J5VGFiID0ge2ljb25Tb3VyY2U6ICdyZXM6Ly9oaXN0b3J5J307XHJcbiAgICB0aGlzLnNldHRpbmdzVGFiID0ge2ljb25Tb3VyY2U6ICdyZXM6Ly9zZXR0aW5ncyd9O1xyXG4gICAgdGhpcy5hY3Rpb25JdGVtLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XHJcbiAgICB0aGlzLnRhYlNlbGVjdGVkSW5kZXggPSAwO1xyXG4gIH1cclxuXHJcbiAgdG9TZWFyY2goKVxyXG5cdHtcclxuXHRcdC8vIHRoaXMudHJhbnNmZXJTZXJ2aWNlLnNldERhdGEoJ2hpc3RvcnluYXYnKTtcclxuXHRcdC8vIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnaGlzdG9yeSddKTtcclxuICAgIHRoaXMuaG9tZVRhYiA9IHtpY29uU291cmNlOiAncmVzOi8vaG9tZSd9O1xyXG4gICAgdGhpcy5zZWFyY2hUYWIgPSB7aWNvblNvdXJjZTogJ3JlczovL3NlYXJjaF9oaWdobGlnaHRlZCd9O1xyXG4gICAgdGhpcy5oaXN0b3J5VGFiID0ge2ljb25Tb3VyY2U6ICdyZXM6Ly9oaXN0b3J5J307XHJcbiAgICB0aGlzLnNldHRpbmdzVGFiID0ge2ljb25Tb3VyY2U6ICdyZXM6Ly9zZXR0aW5ncyd9O1xyXG4gICAgdGhpcy5hY3Rpb25JdGVtLnZpc2liaWxpdHkgPSAnY29sbGFwc2UnO1xyXG4gICAgdGhpcy50YWJTZWxlY3RlZEluZGV4ID0gMTtcclxuXHR9XHJcblxyXG5cdHRvSGlzdG9yeSgpXHJcblx0e1xyXG5cdFx0Ly8gdGhpcy50cmFuc2ZlclNlcnZpY2Uuc2V0RGF0YSgnc2V0dGluZ3NuYXYnKTtcclxuXHRcdC8vIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnc2V0dGluZ3MnXSk7XHJcbiAgICB0aGlzLmhvbWVUYWIgPSB7aWNvblNvdXJjZTogJ3JlczovL2hvbWUnfTtcclxuICAgIHRoaXMuc2VhcmNoVGFiID0ge2ljb25Tb3VyY2U6ICdyZXM6Ly9zZWFyY2gnfTtcclxuICAgIHRoaXMuaGlzdG9yeVRhYiA9IHtpY29uU291cmNlOiAncmVzOi8vaGlzdG9yeV9oaWdobGlnaHRlZCd9O1xyXG4gICAgdGhpcy5zZXR0aW5nc1RhYiA9IHtpY29uU291cmNlOiAncmVzOi8vc2V0dGluZ3MnfTtcclxuICAgIHRoaXMuYWN0aW9uSXRlbS52aXNpYmlsaXR5ID0gJ2NvbGxhcHNlJztcclxuICAgIHRoaXMudGFiU2VsZWN0ZWRJbmRleCA9IDI7XHJcblx0fVxyXG5cclxuICB0b1NldHRpbmdzKClcclxuICB7XHJcbiAgICAvLyB0aGlzLnRyYW5zZmVyU2VydmljZS5zZXREYXRhKCdzZWFyY2huYXYnKTtcclxuICAgIC8vIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnc2VhcmNoJ10pO1xyXG4gICAgdGhpcy5ob21lVGFiID0ge2ljb25Tb3VyY2U6ICdyZXM6Ly9ob21lJ307XHJcbiAgICB0aGlzLnNlYXJjaFRhYiA9IHtpY29uU291cmNlOiAncmVzOi8vc2VhcmNoJ307XHJcbiAgICB0aGlzLmhpc3RvcnlUYWIgPSB7aWNvblNvdXJjZTogJ3JlczovL2hpc3RvcnknfTtcclxuICAgIHRoaXMuc2V0dGluZ3NUYWIgPSB7aWNvblNvdXJjZTogJ3JlczovL3NldHRpbmdzX2hpZ2hsaWdodGVkJ307XHJcbiAgICB0aGlzLmFjdGlvbkl0ZW0udmlzaWJpbGl0eSA9ICdjb2xsYXBzZSc7XHJcbiAgICB0aGlzLnRhYlNlbGVjdGVkSW5kZXggPSAzO1xyXG4gIH1cclxuXHJcbiAgdG9NZXNzYWdlcygpXHJcbiAge1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydjaGF0LWxpc3QnXSlcclxuICB9XHJcblxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCIvKiBBZGQgbW9iaWxlIHN0eWxlcyBmb3IgdGhlIGNvbXBvbmVudCBoZXJlLiAgKi9cXG4ucmVtb3ZlLXBheW1lbnQtbGFiZWwge1xcblxcdGZvbnQtc2l6ZTogMTY7XFxuXFx0Y29sb3I6ICNhYzAwZTY7XFxuXFx0bWFyZ2luLWxlZnQ6IDE4O1xcblxcdHRleHQtYWxpZ246IGxlZnQ7XFxuXFx0cGFkZGluZzogMTg7XFxufVxcblxcbi5pbmZvLWxhYmVsIHtcXG5cXHRjb2xvcjogYmxhY2s7XFxuXFx0Zm9udC1zaXplOiAyNDtcXG5cXHR0ZXh0LWFsaWduOiBsZWZ0O1xcblxcdG1hcmdpbi1sZWZ0OiAzNjtcXG5cXHRtYXJnaW4tdG9wOiAzNjtcXG59XFxuXFxuLmRldGFpbHMtbGFiZWwge1xcblxcdGNvbG9yOiBibGFjaztcXG5cXHRmb250LXNpemU6IDE2O1xcblxcdHRleHQtYWxpZ246IGxlZnQ7XFxuXFx0bWFyZ2luLWxlZnQ6IDM2O1xcblxcdG1hcmdpbi10b3A6IDE4O1xcblxcdG1hcmdpbi1ib3R0b206IDcyO1xcbn1cXG5cXG4uYWN0aXZpdHktaW5kaWNhdG9yIHtcXG5cXHRjb2xvcjogI2FjMDBlNjtcXG59XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPFBhZ2U+XFxyXFxuXFx0PFBhZ2UuYWN0aW9uQmFyPlxcclxcblxcdFxcdDxBY3Rpb25CYXIgdGl0bGU9XFxcIlBheW1lbnQgSW5mb1xcXCI+XFxyXFxuXFx0XFx0ICA8TmF2aWdhdGlvbkJ1dHRvbiB0ZXh0PVxcXCJHbyBCYWNrXFxcIiBhbmRyb2lkLnN5c3RlbUljb249XFxcImljX21lbnVfYmFja1xcXCIgKHRhcCk9XFxcIm9uTmF2QnRuVGFwKClcXFwiPjwvTmF2aWdhdGlvbkJ1dHRvbj5cXHJcXG5cXHRcXHQ8L0FjdGlvbkJhcj5cXHJcXG5cXHQ8L1BhZ2UuYWN0aW9uQmFyPlxcclxcblxcclxcblxcdDxTdGFja0xheW91dCAjaW5mb0NvbnRhaW5lcj5cXHJcXG5cXHRcXHQ8U3RhY2tMYXlvdXQ+XFxyXFxuXFx0XFx0XFx0PExhYmVsIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiB0ZXh0PVxcXCJ7eyBwYXltZW50SW5mby50eXBlIH19XFxcIiBjbGFzcz1cXFwiaW5mby1sYWJlbFxcXCI+PC9MYWJlbD5cXHJcXG5cXHRcXHRcXHQ8TGFiZWwgdGV4dFdyYXA9XFxcInRydWVcXFwiIHRleHQ9XFxcInt7IHBheW1lbnRJbmZvLmluZm8gfX1cXFwiIGNsYXNzPVxcXCJkZXRhaWxzLWxhYmVsXFxcIj48L0xhYmVsPlxcclxcblxcdFxcdDwvU3RhY2tMYXlvdXQ+XFxyXFxuXFx0XFx0PFN0YWNrTGF5b3V0ICh0YXApPVxcXCJyZW1vdmUoKVxcXCI+XFxyXFxuXFx0XFx0XFx0PExhYmVsIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiB0ZXh0PVxcXCJSZW1vdmVcXFwiIGNsYXNzPVxcXCJyZW1vdmUtcGF5bWVudC1sYWJlbFxcXCI+PC9MYWJlbD5cXHJcXG5cXHRcXHQ8L1N0YWNrTGF5b3V0PiAgXFxyXFxuXFx0PC9TdGFja0xheW91dD5cXHJcXG48L1BhZ2U+XFxyXFxuPEFjdGl2aXR5SW5kaWNhdG9yIHJvdz1cXFwiMVxcXCIgI2FjdGl2aXR5SW5kaWNhdG9yIGJ1c3k9XFxcImZhbHNlXFxcIiB3aWR0aD1cXFwiNDBcXFwiIGhlaWdodD1cXFwiNDBcXFwiIGNsYXNzPVxcXCJhY3Rpdml0eS1pbmRpY2F0b3JcXFwiPlxcclxcbjwvQWN0aXZpdHlJbmRpY2F0b3I+XCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRyYW5zZmVyU2VydmljZSB9IGZyb20gJy4uL2RhdGF0cmFuc2Zlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUGF5bWVudFNlcnZpY2UgfSBmcm9tICcuLi9wYXltZW50LnNlcnZpY2UudG5zJztcclxuXHJcbi8vIGltcG9ydCB7IE1vZGFsRGlhbG9nUGFyYW1zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2RpcmVjdGl2ZXMvZGlhbG9nc1wiO1xyXG5pbXBvcnQgeyBNb2RhbERpYWxvZ1NlcnZpY2UgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZGlyZWN0aXZlcy9kaWFsb2dzXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBDb25maXJtYXRpb25Db21wb25lbnQgfSBmcm9tICcuLi9jb25maXJtYXRpb24vY29uZmlybWF0aW9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IGlzQW5kcm9pZCwgaXNJT1MsIGRldmljZSwgc2NyZWVuIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybSc7XHJcbmltcG9ydCB7IGFuZHJvaWQgYXMgYW5kcm9pZEFwcCwgaW9zIGFzIGlvc0FwcCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCI7XHJcbmltcG9ydCB7IEFjdGl2aXR5SW5kaWNhdG9yIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9hY3Rpdml0eS1pbmRpY2F0b3InO1xyXG5pbXBvcnQgeyBTdGFja0xheW91dCB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvbGF5b3V0cy9zdGFjay1sYXlvdXQnO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLXBheW1lbnQtaW5mbycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3BheW1lbnQtaW5mby5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vcGF5bWVudC1pbmZvLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGF5bWVudEluZm9Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRyYW5zZmVyU2VydmljZTogVHJhbnNmZXJTZXJ2aWNlLCBwcml2YXRlIHBheW1lbnRTZXJ2aWNlOiBQYXltZW50U2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMsXHJcbiAgXHRwcml2YXRlIHZjUmVmOiBWaWV3Q29udGFpbmVyUmVmLCBwcml2YXRlIG1vZGFsOiBNb2RhbERpYWxvZ1NlcnZpY2UpIHsgfVxyXG5cclxuICBAVmlld0NoaWxkKCdhY3Rpdml0eUluZGljYXRvcicsIHsgc3RhdGljOiB0cnVlIH0pIGFJOiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoJ2luZm9Db250YWluZXInLCB7IHN0YXRpYzogdHJ1ZSB9KSBpQzogRWxlbWVudFJlZjtcclxuICBcclxuXHJcbiAgcGF5bWVudEluZm8gPSB7XHJcbiAgXHRwYXltZW50VHlwZTogXCJsb2FkaW5nXCIsXHJcbiAgXHRpbmZvOiBcImxvYWRpbmdcIixcclxuICBcdGlkVG9rZW46IFwibG9hZGluZ1wiLFxyXG4gIFx0dHlwZTogXCJsb2FkaW5nXCJcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIFx0dGhpcy5wYXltZW50SW5mbyA9IHRoaXMudHJhbnNmZXJTZXJ2aWNlLmdldERhdGEoKTtcclxuICBcdC8vIGNvbnNvbGUubG9nKHRoaXMucGF5bWVudEluZm8pO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlKCkge1xyXG4gIFx0bGV0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgY29udGV4dDoge30sXHJcbiAgICAgICAgZnVsbHNjcmVlbjogZmFsc2UsXHJcbiAgICAgICAgdmlld0NvbnRhaW5lclJlZjogdGhpcy52Y1JlZixcclxuICAgICAgICBhbmltYXRlZDogdHJ1ZSxcclxuICAgICAgICAvLyB0cmFuc2l0aW9uOiB7IG5hbWU6IFwic2xpZGVUb3BcIiB9XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICB0aGlzLm1vZGFsLnNob3dNb2RhbChDb25maXJtYXRpb25Db21wb25lbnQsIG9wdGlvbnMpLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgIFx0aWYocmVzdWx0ID09IFwiZGVsZXRlXCIpIHtcclxuICAgIFx0XHR2YXIgaW5mb0NvbnRhaW5lciA9IDxTdGFja0xheW91dD4gdGhpcy5pQy5uYXRpdmVFbGVtZW50O1xyXG4gICAgXHRcdGluZm9Db250YWluZXIuc3R5bGUudmlzaWJpbGl0eSA9IFwiY29sbGFwc2VcIjtcclxuICAgIFx0XHR0aGlzLnNob3dCdXN5KCk7XHJcbiAgICBcdFx0dGhpcy5wYXltZW50U2VydmljZS5yZW1vdmVQYXltZW50TWV0aG9kRnJvbVVzZXIodGhpcy5wYXltZW50SW5mby5pZFRva2VuKS5zdWJzY3JpYmUoKHJlcykgPT4ge1xyXG5cdFx0XHQgIFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUoWydwYXltZW50cyddKTtcclxuXHRcdCAgXHR9KTtcclxuICAgIFx0fVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBvbk5hdkJ0blRhcCgpIHtcclxuICBcdHRoaXMucm91dGVyLm5hdmlnYXRlKFsncGF5bWVudHMnXSk7XHJcbiAgfVxyXG5cclxuICBzaG93QnVzeSgpIHtcclxuICBcdHZhciBhY3Rpdml0eUluZGljYXRvciA9IDxBY3Rpdml0eUluZGljYXRvcj4gdGhpcy5hSS5uYXRpdmVFbGVtZW50O1xyXG4gIFx0YWN0aXZpdHlJbmRpY2F0b3IuYnVzeSA9IHRydWU7XHJcbiAgfVxyXG5cclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLypcXG5BZGQgeW91ciBOYXRpdmVTY3JpcHQgc3BlY2lmaWMgc3R5bGVzIGhlcmUuXFxuVG8gbGVhcm4gbW9yZSBhYm91dCBzdHlsaW5nIGluIE5hdGl2ZVNjcmlwdCBzZWU6XFxuaHR0cHM6Ly9kb2NzLm5hdGl2ZXNjcmlwdC5vcmcvYW5ndWxhci91aS9zdHlsaW5nXFxuKi9cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8U3RhY2tMYXlvdXQ+XFxuICA8TGFiZWwgdGV4dD1cXFwicGF5bWVudC1tZXRob2Qgd29ya3NcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIj48L0xhYmVsPlxcbiAgPExhYmVsIHRleHQ9XFxcIlRoaXMgaXMgYSBtaWdyYXRlZCBjb21wb25lbnRcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIj48L0xhYmVsPlxcbiAgPExhYmVsIHRleHQ9XFxcIlVwZGF0ZSBpdCB0byBwcm92aWRlIHRoZSBVSSBlbGVtZW50cyByZXF1aXJlZCBpbiB5b3VyIG1vYmlsZSBhcHBcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIj48L0xhYmVsPlxcbjwvU3RhY2tMYXlvdXQ+XFxuXFxuPCEtLVxcbk9yaWdpbmFsIFdlYiB0ZW1wbGF0ZTpcXG5cXG48ZGl2IGNsYXNzPVxcXCJwYXltZW50LW1ldGhvZFxcXCI+XFxyXFxuXFx0PHNwYW4gY2xhc3M9XFxcInBheW1lbnQtdHlwZS1pY29uXFxcIj48L3NwYW4+XFxyXFxuXFx0PHNwYW4gY2xhc3M9XFxcInBheW1lbnQtdHlwZS1kZXRhaWxzXFxcIj48L3NwYW4+XFxyXFxuPC9kaXY+XFxuLS0+XCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtcGF5bWVudC1tZXRob2QnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wYXltZW50LW1ldGhvZC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vcGF5bWVudC1tZXRob2QuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQYXltZW50TWV0aG9kQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQYXltZW50U2VydmljZSB7XHJcbiAgLy8gdXJpID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6NDAwMCc7XHJcbiAgLy9BZGFtJ3MgVGVzdGluZyBTZXJ2ZXJcclxuICAvLyB1cmkgPSAnaHR0cDovLzE5Mi4xNjguMS43OjQwMDAnO1xyXG4gIC8vUGhpbGxpcCdzIFRlc3RpbmcgU2VydmVyXHJcblx0Ly8gdXJpID0gJ2h0dHA6Ly8xOTIuMTY4LjEuMzo0MDAwJztcclxuICAvL0ZpcmViYXNlIGNsb3VkIGZ1bmN0aW9uc1xyXG4gIHVyaSA9ICdodHRwczovL3VzLWNlbnRyYWwxLWNvbGxlZ2Vwb29sLTE1NTI3NDkxMTg2MTcuY2xvdWRmdW5jdGlvbnMubmV0JztcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7IH1cclxuXHJcbiAgYWRkUGF5bWVudFVzZXIoaWQsIHVzZXJuYW1lLCBuYW1lLCBlbWFpbCkge1xyXG4gICAgLy8gY29uc29sZS5sb2coYCR7dGhpcy51cml9L2FkZEN1c3RvbWVyLyR7dXNlcm5hbWV9YClcclxuICBcdC8vIHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke3RoaXMudXJpfS9jdXN0b21lcnMvYWRkLyR7dXNlcm5hbWV9YCk7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldChgJHt0aGlzLnVyaX0vYWRkQ3VzdG9tZXI/dXNlcm5hbWU9JHt1c2VybmFtZX1gKTtcclxuICB9XHJcblxyXG4gIGdldFBheW1lbnRVc2VyQnlJZChpZCkge1xyXG4gICAgLy8gcmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy51cml9L2N1c3RvbWVycy8ke2lkfWApO1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy51cml9L2dldEN1c3RvbWVyP2lkPSR7aWR9YCk7XHJcbiAgfVxyXG5cclxuICBhZGRQYXltZW50TWV0aG9kVG9Vc2VyKGlkLCBub25jZSkge1xyXG4gIFx0Y29uc3QgYm9keSA9IHtcclxuICBcdFx0aWQ6IGlkLFxyXG4gIFx0XHRub25jZTogbm9uY2VcclxuICBcdH07XHJcbiAgXHQvLyByZXR1cm4gdGhpcy5odHRwLnBvc3QoYGh0dHA6Ly8xOTIuMTY4LjEuNzo0MDAwL2N1c3RvbWVycy9wYXltZW50L2AsIGJvZHkpO1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KGAke3RoaXMudXJpfS9hZGRQYXltZW50P2AsIGJvZHkpXHJcbiAgfVxyXG5cclxuICByZW1vdmVQYXltZW50TWV0aG9kRnJvbVVzZXIodG9rZW4pIHtcclxuICBcdHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke3RoaXMudXJpfS9yZW1vdmVQYXltZW50P3Rva2VuPSR7dG9rZW59YCk7XHJcbiAgfVxyXG5cclxuICBnZXRJZFRva2VuKGlkKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldChgJHt0aGlzLnVyaX0vZ2V0VG9rZW4/aWQ9JHtpZH1gKTtcclxuICB9XHJcbiAgXHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUGF5bWVudFNlcnZpY2Uge1xyXG4gIC8vIHVyaSA9ICdodHRwOi8vbG9jYWxob3N0OjQwMDAnO1xyXG4gIC8vQWRhbSdzIFRlc3RpbmcgU2VydmVyXHJcbiAgLy8gdXJpID0gJ2h0dHA6Ly8xOTIuMTY4LjEuNzo0MDAwJztcclxuICAvL1BoaWxsaXAncyBUZXN0aW5nIFNlcnZlclxyXG5cdC8vIHVyaSA9ICdodHRwOi8vMTkyLjE2OC4xLjM6NDAwMCc7XHJcbiAgLy9GaXJlYmFzZSBjbG91ZCBmdW5jdGlvbnNcclxuICB1cmkgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1jb2xsZWdlcG9vbC0xNTUyNzQ5MTE4NjE3LmNsb3VkZnVuY3Rpb25zLm5ldCc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkgeyB9XHJcblxyXG4gIGFkZFBheW1lbnRVc2VyKGlkLCB1c2VybmFtZSwgbmFtZSwgZW1haWwpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKGAke3RoaXMudXJpfS9hZGRDdXN0b21lci8ke3VzZXJuYW1lfWApXHJcbiAgXHQvLyByZXR1cm4gdGhpcy5odHRwLmdldChgJHt0aGlzLnVyaX0vY3VzdG9tZXJzL2FkZC8ke3VzZXJuYW1lfWApO1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy51cml9L2FkZEN1c3RvbWVyP3VzZXJuYW1lPSR7dXNlcm5hbWV9YCk7XHJcbiAgfVxyXG5cclxuICBnZXRQYXltZW50VXNlckJ5SWQoaWQpIHtcclxuICAgIC8vIHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke3RoaXMudXJpfS9jdXN0b21lcnMvJHtpZH1gKTtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke3RoaXMudXJpfS9nZXRDdXN0b21lcj9pZD0ke2lkfWApO1xyXG4gIH1cclxuXHJcbiAgYWRkUGF5bWVudE1ldGhvZFRvVXNlcihpZCwgbm9uY2UpIHtcclxuICBcdGNvbnN0IGJvZHkgPSB7XHJcbiAgXHRcdGlkOiBpZCxcclxuICBcdFx0bm9uY2U6IG5vbmNlXHJcbiAgXHR9O1xyXG4gIFx0Ly8gcmV0dXJuIHRoaXMuaHR0cC5wb3N0KGBodHRwOi8vMTkyLjE2OC4xLjc6NDAwMC9jdXN0b21lcnMvcGF5bWVudC9gLCBib2R5KTtcclxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChgJHt0aGlzLnVyaX0vYWRkUGF5bWVudD9gLCBib2R5KVxyXG4gIH1cclxuXHJcbiAgcmVtb3ZlUGF5bWVudE1ldGhvZEZyb21Vc2VyKHRva2VuKSB7XHJcbiAgXHRyZXR1cm4gdGhpcy5odHRwLmdldChgJHt0aGlzLnVyaX0vcmVtb3ZlUGF5bWVudD90b2tlbj0ke3Rva2VufWApO1xyXG4gIH1cclxuXHJcbiAgZ2V0SWRUb2tlbihpZCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy51cml9L2dldFRva2VuP2lkPSR7aWR9YCk7XHJcbiAgfVxyXG4gIFxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCIucGF5bWVudC10eXBlLWljb24ge1xcclxcblxcdGhlaWdodDogMzQ7XFxyXFxuXFx0d2lkdGg6IDM0O1xcclxcblxcdGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG5cXHRtYXJnaW4tdG9wOiAxODtcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiAxODtcXHJcXG5cXHRtYXJnaW4tbGVmdDogMzY7XFxyXFxufVxcclxcblxcclxcbi5wYXltZW50LWluZm8tbGFiZWwge1xcclxcblxcdGZvbnQtc2l6ZTogMTY7XFxyXFxuXFx0Lypmb250LXdlaWdodDogNzAwOyovXFxyXFxuXFx0cGFkZGluZzogMzA7XFxyXFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcdGNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1wYXltZW50LWxhYmVsIHtcXHJcXG5cXHRmb250LXNpemU6IDE2O1xcclxcblxcdGNvbG9yOiAjYWMwMGU2O1xcclxcblxcdG1hcmdpbi1sZWZ0OiAzNjtcXHJcXG5cXHR0ZXh0LWFsaWduOiBsZWZ0O1xcclxcblxcdHBhZGRpbmc6IDE4O1xcclxcbn1cXHJcXG5cXHJcXG4uY3JlZGl0LWNhcmQtaWNvbiB7XFxyXFxuXFx0Y29udGVudDogdXJsKFxcXCJ+L2ltZy9jcmVkaXQtY2FyZC1pY29uLnBuZ1xcXCIpO1xcclxcbn1cXHJcXG5cXHJcXG4ucGF5cGFsLWljb24ge1xcclxcblxcdGNvbnRlbnQ6IHVybChcXFwifi9pbWcvcGF5cGFsLWljb24ucG5nXFxcIik7XFxyXFxufVxcclxcblxcclxcbi52ZW5tby1pY29uIHtcXHJcXG5cXHRjb250ZW50OiB1cmwoXFxcIn4vaW1nL3Zlbm1vLWljb24ucG5nXFxcIik7XFxyXFxufVxcclxcblxcclxcbi5wb3N0IHtcXHJcXG5cXHJcXG5cXHRib3JkZXItY29sb3I6ICNmMWYxZjE7XFxyXFxufVxcclxcblxcclxcbi5wb3N0OmhpZ2hsaWdodGVkIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xcclxcbn1cXHJcXG5cXHJcXG4uYWN0aXZpdHktaW5kaWNhdG9yIHtcXHJcXG5cXHRjb2xvcjogI2FjMDBlNjtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1jb250YWluZXIge1xcclxcblxcdHZpc2liaWxpdHk6IGNvbGxhcHNlO1xcclxcbn1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8UGFnZT5cXHJcXG5cXHQ8UGFnZS5hY3Rpb25CYXI+XFxyXFxuXFx0XFx0PEFjdGlvbkJhciB0aXRsZT1cXFwiUGF5bWVudHNcXFwiPlxcclxcblxcdFxcdCAgPE5hdmlnYXRpb25CdXR0b24gdGV4dD1cXFwiR28gQmFja1xcXCIgYW5kcm9pZC5zeXN0ZW1JY29uPVxcXCJpY19tZW51X2JhY2tcXFwiICh0YXApPVxcXCJvbk5hdkJ0blRhcCgpXFxcIj48L05hdmlnYXRpb25CdXR0b24+XFxyXFxuXFx0XFx0PC9BY3Rpb25CYXI+XFxyXFxuXFx0PC9QYWdlLmFjdGlvbkJhcj5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHQ8U3RhY2tMYXlvdXQgI3BheW1lbnRzQ29udGFpbmVyPlxcclxcblxcdFxcdDxMaXN0VmlldyBbaXRlbXNdPVxcXCJwYXltZW50c1xcXCIgc2VwYXJhdG9yQ29sb3I9XFxcInRyYW5zcGFyZW50XFxcIiAoaXRlbVRhcCk9XFxcIm9uU2VsZWN0KCRldmVudClcXFwiPlxcclxcblxcdFxcdFxcdDxuZy10ZW1wbGF0ZSBsZXQtaXRlbT1cXFwiaXRlbVxcXCIgbGV0LWk9XFxcImluZGV4XFxcIiBsZXQtb2RkPVxcXCJvZGRcXFwiIGxldC1ldmVuPVxcXCJldmVuXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHQ8U3RhY2tMYXlvdXQgW2NsYXNzLm9kZF09XFxcIm9kZFxcXCIgW2NsYXNzLmV2ZW5dPVxcXCJldmVuXFxcIiBjbGFzcz1cXFwicG9zdFxcXCIgb3JpZW50YXRpb249XFxcImhvcml6b250YWxcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdDxJbWFnZSBbc3JjXT1cXFwiaXRlbS5wYXltZW50VHlwZVxcXCIgY2xhc3M9XFxcInBheW1lbnQtdHlwZS1pY29uXFxcIj48L0ltYWdlPlxcclxcblxcdFxcdFxcdFxcdFxcdDxMYWJlbCB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgW3RleHRdPVxcXCJpdGVtLmluZm9cXFwiIGNsYXNzPVxcXCJwYXltZW50LWluZm8tbGFiZWxcXFwiPjwvTGFiZWw+XFxyXFxuXFx0XFx0XFx0XFx0PC9TdGFja0xheW91dD5cXHJcXG5cXHRcXHRcXHQ8L25nLXRlbXBsYXRlPlxcclxcblxcdFxcdDwvTGlzdFZpZXc+XFxyXFxuXFxyXFxuXFx0XFx0PFN0YWNrTGF5b3V0ICh0YXApPVxcXCJzaG93TW9kYWwoKVxcXCIgI2FkZENvbnRhaW5lciBjbGFzcz1cXFwiYWRkLWNvbnRhaW5lclxcXCI+XFxyXFxuXFx0XFx0XFx0PExhYmVsIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiB0ZXh0PVxcXCJBZGQgcGF5bWVudCBtZXRob2RcXFwiIGNsYXNzPVxcXCJhZGQtcGF5bWVudC1sYWJlbFxcXCI+PC9MYWJlbD5cXHJcXG5cXHRcXHQ8L1N0YWNrTGF5b3V0PiAgXFxyXFxuXFx0PC9TdGFja0xheW91dD5cXHJcXG48L1BhZ2U+XFxyXFxuXFxyXFxuPEFjdGl2aXR5SW5kaWNhdG9yICNhY3Rpdml0eUluZGljYXRvciBidXN5PVxcXCJ0cnVlXFxcIiB3aWR0aD1cXFwiNDBcXFwiIGhlaWdodD1cXFwiNDBcXFwiIGNsYXNzPVxcXCJhY3Rpdml0eS1pbmRpY2F0b3JcXFwiPlxcclxcbjwvQWN0aXZpdHlJbmRpY2F0b3I+XCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGVBcnJheSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlLWFycmF5JztcclxuaW1wb3J0IHsgRHluYW1pY0FkZFNlcnZpY2UgfSBmcm9tICcuLi9keW5hbWljLWFkZC5zZXJ2aWNlJztcclxuaW1wb3J0ICogYXMgZHJvcGluIGZyb20gJ2JyYWludHJlZS13ZWItZHJvcC1pbic7XHJcbmltcG9ydCAqIGFzIGJyYWludHJlZSBmcm9tICdicmFpbnRyZWUtd2ViJztcclxuaW1wb3J0IHsgQnJhaW50cmVlLCBCcmFpblRyZWVPcHRpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWJyYWludHJlZSc7XHJcbmltcG9ydCB7IElQYXlQYWxDb25maWcgfSBmcm9tICduZ3gtcGF5cGFsJztcclxuaW1wb3J0IHsgTG9naW5jaGVja1NlcnZpY2UgfSBmcm9tICcuLi9sb2dpbmNoZWNrLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQYXltZW50U2VydmljZSB9IGZyb20gJy4uL3BheW1lbnQuc2VydmljZS50bnMnO1xyXG5pbXBvcnQgeyBUcmFuc2ZlclNlcnZpY2UgfSBmcm9tICcuLi9kYXRhdHJhbnNmZXIuc2VydmljZSc7XHJcblxyXG5pbXBvcnQgeyBNb2RhbERpYWxvZ1BhcmFtcyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9kaXJlY3RpdmVzL2RpYWxvZ3NcIjtcclxuaW1wb3J0IHsgTW9kYWxEaWFsb2dTZXJ2aWNlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2RpcmVjdGl2ZXMvZGlhbG9nc1wiO1xyXG5pbXBvcnQgeyBBZGRQYXltZW50Q29tcG9uZW50IH0gZnJvbSAnLi4vYWRkLXBheW1lbnQvYWRkLXBheW1lbnQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGF5bWVudEluZm9Db21wb25lbnQgfSBmcm9tICcuLi9wYXltZW50LWluZm8vcGF5bWVudC1pbmZvLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBBY3Rpdml0eUluZGljYXRvciB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvYWN0aXZpdHktaW5kaWNhdG9yJztcclxuaW1wb3J0IHsgU3RhY2tMYXlvdXQgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvc3RhY2stbGF5b3V0JztcclxuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCI7XHJcbmltcG9ydCAqIGFzIGZpcmViYXNlIGZyb20gJ25hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2UnO1xyXG5cclxuZGVjbGFyZSBsZXQgcGF5cGFsOiBhbnk7XHJcblxyXG5jbGFzcyBQYXltZW50SXRlbSB7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheW1lbnRUeXBlOiBzdHJpbmcsIHB1YmxpYyBpbmZvOiBzdHJpbmcsIHB1YmxpYyBpZFRva2VuOiBzdHJpbmcsIHB1YmxpYyB0eXBlOiBzdHJpbmcpIHt9XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLXBheW1lbnRzJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcGF5bWVudHMuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3BheW1lbnRzLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGF5bWVudHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBAVmlld0NoaWxkKCdhY3Rpdml0eUluZGljYXRvcicsIHsgc3RhdGljOiB0cnVlIH0pIGFJOiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoJ2FkZENvbnRhaW5lcicsIHsgc3RhdGljOiB0cnVlIH0pIGFDOiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoJ3BheW1lbnRzQ29udGFpbmVyJywgeyBzdGF0aWM6IHRydWUgfSkgcEM6IEVsZW1lbnRSZWY7XHJcbiAgdXNlciA9IHtcclxuICBcdHBheW1lbnRfaWQ6ICc1MDczMDU3MDYnXHJcbiAgfVxyXG4gIG9wdHMgOkJyYWluVHJlZU9wdGlvbnMgPSB7XHJcbiAgICBhbW91bnQ6IG51bGwsXHJcbiAgICBjb2xsZWN0RGV2aWNlRGF0YTogdHJ1ZSxcclxuICAgIHJlcXVlc3RUaHJlZURTZWN1cmVWZXJpZmljYXRpb246IGZhbHNlLFxyXG4gIH1cclxuICBjbGllbnRUb2tlbiA9ICcnO1xyXG4gIHBheW1lbnRDdXN0b21lcjtcclxuICBwYXltZW50SW5mbztcclxuICBwYXltZW50cyA9IG5ldyBPYnNlcnZhYmxlQXJyYXk8UGF5bWVudEl0ZW0+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYWRkU2VydmljZTogRHluYW1pY0FkZFNlcnZpY2UsIHByaXZhdGUgcGF5bWVudFNlcnZpY2U6IFBheW1lbnRTZXJ2aWNlLCBwcml2YXRlIGxvZ2luY2hlY2tTZXJ2aWNlOiBMb2dpbmNoZWNrU2VydmljZSwgcHJpdmF0ZSB0cmFuc2ZlclNlcnZpY2U6IFRyYW5zZmVyU2VydmljZSxcclxuICBcdHByaXZhdGUgdmNSZWY6IFZpZXdDb250YWluZXJSZWYsIHByaXZhdGUgbW9kYWw6IE1vZGFsRGlhbG9nU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIGZpcmViYXNlLmdldEN1cnJlbnRVc2VyKCkudGhlbih1c2VyID0+IHtcclxuICAgICAgZmlyZWJhc2UuZmlyZXN0b3JlLmNvbGxlY3Rpb24oJ3VzZXJzJykuZG9jKHVzZXIudWlkKS5nZXQoKS50aGVuKGRvYyA9PiB7XHJcbiAgICAgICAgdGhpcy51c2VyLnBheW1lbnRfaWQgPSBkb2MuZGF0YSgpLnBheW1lbnRfaWQ7XHJcbiAgICAgICAgdGhpcy5nZXRVc2VyKCk7XHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIFx0XHJcbiAgfVxyXG5cclxuICBzaG93TW9kYWwoKSB7XHJcbiAgICBsZXQgYnJhaW50cmVlID0gbmV3IEJyYWludHJlZSgpO1xyXG4gICAgLy8gdGhpcy5jcmVhdGVWaWV3cygpO1xyXG5cclxuICAgIGJyYWludHJlZS5zdGFydFBheW1lbnQodGhpcy5jbGllbnRUb2tlbiwgdGhpcy5vcHRzKTtcclxuXHJcbiAgICBicmFpbnRyZWUub24oXCJzdWNjZXNzXCIsIChyZXMpID0+IHtcclxuICAgICAgICBsZXQgb3V0cHV0ID0gcmVzLm9iamVjdC5nZXQoXCJvdXRwdXRcIik7XHJcbiAgICAgICAgLy8gY29uc29sZS5kaXIob3V0cHV0KTtcclxuXHJcbiAgICAgICAgdmFyIGFkZENvbnRhaW5lciA9IDxTdGFja0xheW91dD4gdGhpcy5hQy5uYXRpdmVFbGVtZW50O1xyXG4gICAgICAgIHZhciBwYXltZW50c0NvbnRhaW5lciA9IDxTdGFja0xheW91dD4gdGhpcy5wQy5uYXRpdmVFbGVtZW50O1xyXG4gICAgICAgIHZhciBhY3Rpdml0eUluZGljYXRvciA9IDxBY3Rpdml0eUluZGljYXRvcj4gdGhpcy5hSS5uYXRpdmVFbGVtZW50O1xyXG4gICAgICAgIHBheW1lbnRzQ29udGFpbmVyLnN0eWxlLnZpc2liaWxpdHkgPSAnY29sbGFwc2UnO1xyXG4gICAgICAgIGFkZENvbnRhaW5lci5zdHlsZS52aXNpYmlsaXR5ID0gJ2NvbGxhcHNlJztcclxuICAgICAgICBhY3Rpdml0eUluZGljYXRvci5idXN5ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgdGhpcy5wYXltZW50U2VydmljZS5hZGRQYXltZW50TWV0aG9kVG9Vc2VyKHRoaXMudXNlci5wYXltZW50X2lkLCBvdXRwdXQubm9uY2UpLnN1YnNjcmliZSgocmVzOiBhbnkpID0+IHtcclxuICAgICAgICAgIGlmKHJlcy5tZXNzYWdlID09ICdTdWNjZXNzJykge1xyXG4gICAgICAgICAgICBkaWFsb2dzLmFsZXJ0KHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIkFkZGVkIG1ldGhvZFwiLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJQYXltZW50IG1ldGhvZCBhZGRlZCBzdWNjZXNzZnVsbHlcIixcclxuICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJDbG9zZVwiXHJcbiAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZ2V0VXNlcigpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZWxzZSBpZihyZXMubWVzc2FnZSA9PSAnQWxyZWFkeSBleGlzdHMnKSB7XHJcbiAgICAgICAgICAgIGFkZENvbnRhaW5lci5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xyXG4gICAgICAgICAgICBwYXltZW50c0NvbnRhaW5lci5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xyXG4gICAgICAgICAgICBhY3Rpdml0eUluZGljYXRvci5idXN5ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRpYWxvZ3MuYWxlcnQoe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiQ291bGQgbm90IGFkZCBtZXRob2RcIixcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiUGF5bWVudCBtZXRob2QgYWxyZWFkeSBleGlzdHMsIHBsZWFzZSB0cnkgYW5vdGhlciBvbmUuXCIsXHJcbiAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiQ2xvc2VcIlxyXG4gICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAvLyB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ3BheW1lbnRzJ10pO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLy8gdGhpcy5wYXltZW50U2VydmljZS5hZGRQYXltZW50TWV0aG9kVG9Vc2VyKHRoaXMudXNlci5wYXltZW50X2lkLCBvdXRwdXQubm9uY2UpLnN1YnNjcmliZSgocmVzKSA9PiB7XHJcbiAgICAgICAgLy8gICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ3BheW1lbnRzJ10pO1xyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgfSlcclxuICAgICBcclxuICAgIGJyYWludHJlZS5vbihcImNhbmNlbFwiLCBmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgbGV0IG91dHB1dCA9IHJlcy5vYmplY3QuZ2V0KFwib3V0cHV0XCIpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUuZGlyKG91dHB1dCk7XHJcbiAgICB9KVxyXG4gICAgIFxyXG4gICAgYnJhaW50cmVlLm9uKFwiZXJyb3JcIiwgZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgIGxldCBvdXRwdXQgPSByZXMub2JqZWN0LmdldChcIm91dHB1dFwiKTtcclxuICAgICAgICAvLyBjb25zb2xlLmRpcihvdXRwdXQpO1xyXG4gICAgfSlcclxuICAgIC8vIGxldCBvcHRpb25zID0ge1xyXG4gICAgLy8gICAgIGNvbnRleHQ6IHt9LFxyXG4gICAgLy8gICAgIGZ1bGxzY3JlZW46IHRydWUsXHJcbiAgICAvLyAgICAgdmlld0NvbnRhaW5lclJlZjogdGhpcy52Y1JlZlxyXG4gICAgLy8gICAgIC8vIGFuaW1hdGVkOiB0cnVlLFxyXG4gICAgLy8gICAgIC8vIHRyYW5zaXRpb246IHsgbmFtZTogXCJzbGlkZVRvcFwiIH1cclxuICAgIC8vIH07XHJcbiAgICBcclxuICAgIC8vIHRoaXMubW9kYWwuc2hvd01vZGFsKEFkZFBheW1lbnRDb21wb25lbnQsIG9wdGlvbnMpLnRoZW4ocmVzID0+IHtcclxuXHJcbiAgICAvLyB9KTtcclxuICB9XHJcblxyXG4gIGdldFVzZXIoKSB7XHJcbiAgICB0aGlzLnBheW1lbnRzLnNwbGljZSgwKTtcclxuXHJcbiAgICB2YXIgYWRkQ29udGFpbmVyID0gPFN0YWNrTGF5b3V0PiB0aGlzLmFDLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICB2YXIgcGF5bWVudHNDb250YWluZXIgPSA8U3RhY2tMYXlvdXQ+IHRoaXMucEMubmF0aXZlRWxlbWVudDtcclxuICAgIGFkZENvbnRhaW5lci5zdHlsZS52aXNpYmlsaXR5ID0gJ2NvbGxhcHNlJztcclxuICAgIHBheW1lbnRzQ29udGFpbmVyLnN0eWxlLnZpc2liaWxpdHkgPSAnY29sbGFwc2UnO1xyXG5cclxuICBcdHRoaXMucGF5bWVudFNlcnZpY2UuZ2V0UGF5bWVudFVzZXJCeUlkKHRoaXMudXNlci5wYXltZW50X2lkKS5zdWJzY3JpYmUoKGRhdGEpID0+IHtcclxuICAgICAgdGhpcy5zZXR1cFZpZXdzKCk7XHJcblxyXG4gIFx0XHR0aGlzLnBheW1lbnRDdXN0b21lciA9IGRhdGE7XHJcbiAgXHRcdC8vIGNvbnNvbGUubG9nKHRoaXMucGF5bWVudEN1c3RvbWVyKVxyXG4gIFx0XHRpZih0aGlzLnBheW1lbnRDdXN0b21lci5jcmVkaXRDYXJkcyAhPSBudWxsKVxyXG5cdCAgXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLnBheW1lbnRDdXN0b21lci5jcmVkaXRDYXJkcy5sZW5ndGg7IGkrKykgXHJcblx0ICBcdFx0XHR0aGlzLnBheW1lbnRzLnB1c2gobmV3IFBheW1lbnRJdGVtKFwifi9pbWcvY3JlZGl0LWNhcmQtaWNvbi5wbmdcIiwgdGhpcy5wYXltZW50Q3VzdG9tZXIuY3JlZGl0Q2FyZHNbaV0uY2FyZFR5cGUgKyBcIiBlbmRpbmcgaW4gXCIgKyB0aGlzLnBheW1lbnRDdXN0b21lci5jcmVkaXRDYXJkc1tpXS5sYXN0NCwgdGhpcy5wYXltZW50Q3VzdG9tZXIuY3JlZGl0Q2FyZHNbaV0udG9rZW4sIFwiQ2FyZFwiKSk7XHJcbiAgXHRcdGlmKHRoaXMucGF5bWVudEN1c3RvbWVyLnBheXBhbEFjY291bnRzICE9IG51bGwpXHJcbiAgXHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMucGF5bWVudEN1c3RvbWVyLnBheXBhbEFjY291bnRzLmxlbmd0aDsgaSsrKVxyXG4gIFx0XHRcdFx0dGhpcy5wYXltZW50cy5wdXNoKG5ldyBQYXltZW50SXRlbShcIn4vaW1nL3BheXBhbC1pY29uLnBuZ1wiLCB0aGlzLnBheW1lbnRDdXN0b21lci5wYXlwYWxBY2NvdW50c1tpXS5lbWFpbCwgdGhpcy5wYXltZW50Q3VzdG9tZXIucGF5cGFsQWNjb3VudHNbaV0udG9rZW4sIFwiUGF5UGFsXCIpKVxyXG4gIFx0XHRpZih0aGlzLnBheW1lbnRDdXN0b21lci52ZW5tb0FjY291bnRzICE9IG51bGwpXHJcbiAgXHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMucGF5bWVudEN1c3RvbWVyLnZlbm1vQWNjb3VudHMubGVuZ3RoOyBpKyspXHJcbiAgXHRcdFx0XHR0aGlzLnBheW1lbnRzLnB1c2gobmV3IFBheW1lbnRJdGVtKFwifi9pbWcvdmVubW8taWNvbi5wbmdcIiwgdGhpcy5wYXltZW50Q3VzdG9tZXIudmVubW9BY2NvdW50c1tpXS52ZW5tb1VzZXJJZCwgdGhpcy5wYXltZW50Q3VzdG9tZXIudmVubW9BY2NvdW50c1tpXS50b2tlbiwgXCJWZW5tb1wiKSlcclxuICBcdFx0Ly8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpc3QtbG9hZGluZy1jaXJjbGUnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gIFx0fSk7XHJcbiAgICB0aGlzLnBheW1lbnRTZXJ2aWNlLmdldElkVG9rZW4odGhpcy51c2VyLnBheW1lbnRfaWQpLnN1YnNjcmliZSgocmVzOiBhbnkpID0+IHtcclxuICAgICAgdGhpcy5jbGllbnRUb2tlbiA9IHJlcy5jbGllbnRUb2tlbjtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2V0dXBWaWV3cygpIHtcclxuICAgIHZhciBhY3Rpdml0eUluZGljYXRvciA9IDxBY3Rpdml0eUluZGljYXRvcj4gdGhpcy5hSS5uYXRpdmVFbGVtZW50O1xyXG4gICAgYWN0aXZpdHlJbmRpY2F0b3IuYnVzeSA9IGZhbHNlO1xyXG5cclxuICAgIHZhciBhZGRDb250YWluZXIgPSA8U3RhY2tMYXlvdXQ+IHRoaXMuYUMubmF0aXZlRWxlbWVudDtcclxuICAgIGFkZENvbnRhaW5lci5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xyXG5cclxuICAgIHZhciBwYXltZW50c0NvbnRhaW5lciA9IDxTdGFja0xheW91dD4gdGhpcy5wQy5uYXRpdmVFbGVtZW50O1xyXG4gICAgcGF5bWVudHNDb250YWluZXIuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcclxuICB9XHJcblxyXG4gIHNlbGVjdFBheW1lbnQoKSB7XHJcblxyXG4gIH1cclxuXHJcbiAgb25TZWxlY3QoZXZlbnQpIHtcclxuICBcdC8vIGNvbnNvbGUubG9nKGV2ZW50LmluZGV4KTtcclxuICBcdGxldCBvcHRpb25zID0ge1xyXG4gICAgICAgIGNvbnRleHQ6IHt9LFxyXG4gICAgICAgIGZ1bGxzY3JlZW46IHRydWUsXHJcbiAgICAgICAgdmlld0NvbnRhaW5lclJlZjogdGhpcy52Y1JlZlxyXG4gICAgICAgIC8vIGFuaW1hdGVkOiB0cnVlLFxyXG4gICAgICAgIC8vIHRyYW5zaXRpb246IHsgbmFtZTogXCJzbGlkZVRvcFwiIH1cclxuICAgIH07XHJcblxyXG4gICAgdGhpcy50cmFuc2ZlclNlcnZpY2Uuc2V0RGF0YSh0aGlzLnBheW1lbnRzLmdldEl0ZW0oZXZlbnQuaW5kZXgpKTtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsncGF5bWVudGluZm8nXSk7XHJcbiAgICAvLyB0aGlzLm1vZGFsLnNob3dNb2RhbChQYXltZW50SW5mb0NvbXBvbmVudCwgb3B0aW9ucykudGhlbihyZXMgPT4ge1xyXG5cclxuICAgIC8vIH0pO1xyXG4gIH1cclxuXHJcbiAgb25OYXZCdG5UYXAoKSB7XHJcbiAgICB0aGlzLnJvdXRlci5iYWNrKCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFBsYWNlc0F1dG9jb21wbGV0ZVNlcnZpY2Uge1xyXG5cclxuICBwbGFjZXNfdXJpID0gJ2h0dHBzOi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9wbGFjZS90ZXh0c2VhcmNoL2pzb24/a2V5PUFJemFTeUFJVHhTMWptZjhQTXRhelJndVdjQWZXUXhXMWtQT29ZZyZxdWVyeT0nXHJcbiAgYXV0b2NvbXBsZXRlX3VyaSA9ICdodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvcGxhY2UvYXV0b2NvbXBsZXRlL2pzb24/a2V5PUFJemFTeUFJVHhTMWptZjhQTXRhelJndVdjQWZXUXhXMWtQT29ZZyZzZXNzaW9udG9rZW49MTIzNDU2Nzg5MCZpbnB1dD0nXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwQ2xpZW50OiBIdHRwQ2xpZW50KSB7IH1cclxuXHJcbiAgZ2V0QXV0b2NvbXBsZXRlUmVzdWx0cyhwbGFjZSkge1xyXG4gIFx0cmV0dXJuIHRoaXMuaHR0cENsaWVudC5nZXQoYCR7dGhpcy5hdXRvY29tcGxldGVfdXJpfWAgKyBwbGFjZSk7XHJcbiAgfVxyXG5cclxuICBnZXRQbGFjZVJlc3VsdHMocGxhY2UpIHtcclxuICBcdHJldHVybiB0aGlzLmh0dHBDbGllbnQuZ2V0KGAke3RoaXMucGxhY2VzX3VyaX1gICsgcGxhY2UpO1xyXG4gIH1cclxuXHJcbiAgZ2V0QXV0b2NvbXBsZXRlUmVzdWx0c0dlb2NvZGUocGxhY2UpIHtcclxuICBcdHJldHVybiB0aGlzLmh0dHBDbGllbnQuZ2V0KGAke3RoaXMuYXV0b2NvbXBsZXRlX3VyaX1gICsgcGxhY2UgKyBgJnR5cGVzPWdlb2NvZGVgKTtcclxuICB9XHJcbiAgZ2V0QXV0b2NvbXBsZXRlUmVzdWx0c0VzdGFibGlzaG1lbnQocGxhY2UpIHtcclxuICBcdHJldHVybiB0aGlzLmh0dHBDbGllbnQuZ2V0KGAke3RoaXMuYXV0b2NvbXBsZXRlX3VyaX1gICsgcGxhY2UgKyBgJnR5cGVzPWVzdGFibGlzaG1lbnRgKTtcclxuICB9XHJcbiAgZ2V0QXV0b2NvbXBsZXRlUmVzdWx0c0FkZHJlc3MocGxhY2UpIHtcclxuICBcdHJldHVybiB0aGlzLmh0dHBDbGllbnQuZ2V0KGAke3RoaXMuYXV0b2NvbXBsZXRlX3VyaX1gICsgcGxhY2UgKyBgJnR5cGVzPWFkZHJlc3NgKTtcclxuICB9XHJcbiAgZ2V0QXV0b2NvbXBsZXRlUmVzdWx0c0NpdHkocGxhY2UpIHtcclxuICBcdHJldHVybiB0aGlzLmh0dHBDbGllbnQuZ2V0KGAke3RoaXMuYXV0b2NvbXBsZXRlX3VyaX1gICsgcGxhY2UgKyBgJnR5cGVzPShjaXRpZXMpYCk7XHJcbiAgfVxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCIvKiBBZGQgbW9iaWxlIHN0eWxlcyBmb3IgdGhlIGNvbXBvbmVudCBoZXJlLiAgKi9cXHJcXG4ubWFwLXZpZXcge1xcclxcblxcdGhlaWdodDogMTAwJTtcXHJcXG5cXHR3aWR0aDogMTAwJTtcXHJcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvZmlsZS1waWN0dXJlIHtcXHJcXG5cXHRoZWlnaHQ6IDUwO1xcclxcblxcdHdpZHRoOiA1MDtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAxMDAlO1xcclxcblxcdHZlcnRpY2FsLWFsaWduOiB0b3A7XFxyXFxuXFx0bWFyZ2luLWxlZnQ6IDE2O1xcclxcblxcdG1hcmdpbi10b3A6IDIwO1xcclxcbn1cXHJcXG5cXHJcXG4ubmFtZS1sYWJlbCB7XFxyXFxuXFx0bWFyZ2luLXRvcDogMTY7XFxyXFxuXFx0bWFyZ2luLWxlZnQ6IDE4O1xcclxcblxcdGNvbG9yOiBibGFjaztcXHJcXG5cXHRmb250LXdlaWdodDogNzAwO1xcclxcblxcdGZvbnQtc2l6ZTogMTc7XFxyXFxuXFx0dGV4dC1hbGlnbjogbGVmdDtcXHJcXG59XFxyXFxuXFxyXFxuLmluZm8tbGFiZWwge1xcclxcblxcdG1hcmdpbi10b3A6IDQ7XFxyXFxuXFx0bWFyZ2luLWxlZnQ6IDE4O1xcclxcblxcdG1hcmdpbi1ib3R0b206IDE2O1xcclxcblxcdGNvbG9yOiBibGFjaztcXHJcXG5cXHR0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbn1cXHJcXG5cXHJcXG4ubGFiZWwtY29udGFpbmVyIHtcXHJcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcclxcbn1cXHJcXG5cXHJcXG4uYWN0aXZpdHktaW5kaWNhdG9yIHtcXHJcXG5cXHRjb2xvcjogI2FjMDBlNjtcXHJcXG59XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPFBhZ2UuYWN0aW9uQmFyPlxcclxcbiAgICA8QWN0aW9uQmFyIHRpdGxlPVxcXCJQb3N0XFxcIj5cXHJcXG4gICAgXFx0PE5hdmlnYXRpb25CdXR0b24gdGV4dD1cXFwiR28gQmFja1xcXCIgYW5kcm9pZC5zeXN0ZW1JY29uPVxcXCJpY19tZW51X2JhY2tcXFwiICh0YXApPVxcXCJvbk5hdkJ0blRhcCgpXFxcIj48L05hdmlnYXRpb25CdXR0b24+XFxyXFxuXFx0ICAgIDxBY3Rpb25JdGVtICh0YXApPVxcXCJwcm9tcHREZWxldGUoKVxcXCJcXHJcXG5cXHQgICAgICBpb3Muc3lzdGVtSWNvbj1cXFwiMTZcXFwiIGlvcy5wb3NpdGlvbj1cXFwicmlnaHRcXFwiXFxyXFxuXFx0ICAgICAgdGV4dD1cXFwiRGVsZXRlXFxcIiBhbmRyb2lkLnBvc2l0aW9uPVxcXCJwb3B1cFxcXCIgI2RlbGV0ZUl0ZW0+PC9BY3Rpb25JdGVtPlxcclxcblxcdCAgICA8QWN0aW9uSXRlbSAodGFwKT1cXFwib25SZXBvcnQoKVxcXCJcXHJcXG5cXHQgICAgICBpb3Muc3lzdGVtSWNvbj1cXFwiOVxcXCIgaW9zLnBvc2l0aW9uPVxcXCJyaWdodFxcXCJcXHJcXG5cXHQgICAgICB0ZXh0PVxcXCJSZXBvcnRcXFwiIGFuZHJvaWQucG9zaXRpb249XFxcInBvcHVwXFxcIj48L0FjdGlvbkl0ZW0+XFxyXFxuICAgIDwvQWN0aW9uQmFyPlxcclxcbjwvUGFnZS5hY3Rpb25CYXI+XFxyXFxuPEdyaWRMYXlvdXQgcm93cz1cXFwiMiosYXV0bywxMCpcXFwiICNsYXlvdXQ+XFxyXFxuXFx0PFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVxcXCJob3Jpem9udGFsXFxcIiByb3c9XFxcIjBcXFwiIGNsYXNzPVxcXCJsYWJlbC1jb250YWluZXJcXFwiICNpbmZvQ29udGFpbmVyPlxcclxcblxcdFxcdDxJbWFnZSBzcmM9XFxcInt7IHByb2ZpbGVTb3VyY2UgfX1cXFwiIGNsYXNzPVxcXCJwcm9maWxlLXBpY3R1cmVcXFwiIHN0cmV0Y2g9XFxcImFzcGVjdEZpdFxcXCI+PC9JbWFnZT5cXHJcXG5cXHQgIFxcdDxTdGFja0xheW91dD5cXHJcXG5cXHQgICAgICBcXHQ8TGFiZWwgdGV4dFdyYXA9XFxcInRydWVcXFwiIGlkPVxcXCJwb3N0LW5hbWVcXFwiIGNsYXNzPVxcXCJuYW1lLWxhYmVsXFxcIiB0ZXh0PVxcXCJ7eyB1c2VybmFtZSB9fVxcXCI+PC9MYWJlbD5cXHJcXG5cXHQgICAgICBcXHQ8TGFiZWwgdGV4dFdyYXA9XFxcInRydWVcXFwiIGlkPVxcXCJwb3N0LWluZm9cXFwiIGNsYXNzPVxcXCJpbmZvLWxhYmVsXFxcIiB0ZXh0PVxcXCJ7eyBpbmZvIH19XFxcIj48L0xhYmVsPlxcclxcblxcdCAgICA8L1N0YWNrTGF5b3V0PlxcclxcblxcdDwvU3RhY2tMYXlvdXQ+XFxyXFxuXFx0PFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJidG4tY29udGFpbmVyXFxcIiAjYnV0dG9uQ29udGFpbmVyIHJvdz1cXFwiMVxcXCI+XFxyXFxuXFx0XFx0PEJ1dHRvbiBjbGFzcz1cXFwiY29ubmVjdC1idG5cXFwiICh0YXApPVxcXCJvbkNvbm5lY3RUYXAoKVxcXCIgdGV4dD1cXFwie3sgYnV0dG9uVGV4dCB9fVxcXCI+PC9CdXR0b24+XFxyXFxuXFx0PC9TdGFja0xheW91dD5cXHJcXG5cXHQ8TWFwVmlldyAobWFwUmVhZHkpPVxcXCJvbk1hcFJlYWR5KCRldmVudClcXFwiIFtsYXRpdHVkZV09XFxcImxhdGl0dWRlXFxcIiBbbG9uZ2l0dWRlXT1cXFwibG9uZ2l0dWRlXFxcIiBjbGFzcz1cXFwibWFwLXZpZXdcXFwiIHJvdz1cXFwiMlxcXCIgI21hcFZpZXc+PC9NYXBWaWV3PlxcclxcbjwvR3JpZExheW91dD5cXHJcXG48QWN0aXZpdHlJbmRpY2F0b3IgI2FjdGl2aXR5SW5kaWNhdG9yIGJ1c3k9XFxcInRydWVcXFwiIHdpZHRoPVxcXCI0MFxcXCIgaGVpZ2h0PVxcXCI0MFxcXCIgY2xhc3M9XFxcImFjdGl2aXR5LWluZGljYXRvclxcXCI+PC9BY3Rpdml0eUluZGljYXRvcj5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q29udGFpbmVyUmVmLCBWaWV3UmVmLCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0ICogYXMgZmlyZWJhc2UgZnJvbSAnbmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZSc7XHJcbmltcG9ydCB7IEdvb2dsZU1hcHNTZXJ2aWNlIH0gZnJvbSAnLi4vZ29vZ2xlLW1hcHMuc2VydmljZSc7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBUcmFuc2ZlclNlcnZpY2UgfSBmcm9tICcuLi9kYXRhdHJhbnNmZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlXCI7XHJcbmltcG9ydCB7IEFjdGlvbkl0ZW0gfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2FjdGlvbi1iYXInO1xyXG5pbXBvcnQgeyBTdGFja0xheW91dCB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvbGF5b3V0cy9zdGFjay1sYXlvdXQnO1xyXG5pbXBvcnQgeyBHcmlkTGF5b3V0IH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9sYXlvdXRzL2dyaWQtbGF5b3V0JztcclxuaW1wb3J0IHsgQWN0aXZpdHlJbmRpY2F0b3IgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2FjdGl2aXR5LWluZGljYXRvcic7XHJcbmltcG9ydCB7cmVnaXN0ZXJFbGVtZW50fSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZWxlbWVudC1yZWdpc3RyeVwiO1xyXG5pbXBvcnQge2lzQW5kcm9pZCwgaXNJT1N9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtXCI7XHJcbmltcG9ydCB7IE1hcFZpZXcsIE1hcmtlciwgUG9zaXRpb24gfSBmcm9tICduYXRpdmVzY3JpcHQtZ29vZ2xlLW1hcHMtc2RrJztcclxuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCI7XHJcbmltcG9ydCB7IExvZ2luY2hlY2tTZXJ2aWNlIH0gZnJvbSAnLi4vbG9naW5jaGVjay5zZXJ2aWNlLnRucyc7XHJcbmltcG9ydCB7IENoYXRNZXNzYWdlIH0gZnJvbSAnLi4vbW9kZWxzL2NoYXQtbWVzc2FnZS5tb2RlbCc7XHJcblxyXG5yZWdpc3RlckVsZW1lbnQoXCJNYXBWaWV3XCIsICgpID0+IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtZ29vZ2xlLW1hcHMtc2RrXCIpLk1hcFZpZXcpO1xyXG5kZWNsYXJlIHZhciBjb206YW55O1xyXG5kZWNsYXJlIHZhciBHTVNDb29yZGluYXRlQm91bmRzOiBhbnk7XHJcbmRlY2xhcmUgdmFyIEdNU0NhbWVyYVVwZGF0ZTogYW55O1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtcG9zdGluZy1pbmZvJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcG9zdGluZy1pbmZvLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9wb3N0aW5nLWluZm8uY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQb3N0aW5nSW5mb0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIEBWaWV3Q2hpbGQoXCJkZWxldGVJdGVtXCIsIHsgc3RhdGljOiB0cnVlIH0pIGRlbGV0ZUl0ZW06IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZChcImJ1dHRvbkNvbnRhaW5lclwiLCB7IHN0YXRpYzogdHJ1ZSB9KSBidXR0b25Db250YWluZXI6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZChcImluZm9Db250YWluZXJcIiwgeyBzdGF0aWM6IHRydWUgfSkgaW5mb0NvbnRhaW5lcjogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKFwiYWN0aXZpdHlJbmRpY2F0b3JcIiwgeyBzdGF0aWM6IHRydWUgfSkgYWk6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZChcImxheW91dFwiLCB7IHN0YXRpYzogdHJ1ZSB9KSBsYXlvdXQ6IEVsZW1lbnRSZWY7XHJcbiAgbWFwVmlldzogTWFwVmlldztcclxuICBsYXRpdHVkZSA9ICAzNztcclxuICBsb25naXR1ZGUgPSAtMTIyO1xyXG5cclxuICBzdGFydExhdDtcclxuICBlbmRMYXQ7XHJcbiAgc3RhcnRMbmc7XHJcbiAgZW5kTG5nO1xyXG4gIGJvdW5kcztcclxuICBtYXBEYXRhO1xyXG4gIHVzZXJJZDtcclxuICBwcm9maWxlU291cmNlO1xyXG4gIGluZm87XHJcbiAgdXNlcm5hbWU7XHJcbiAgYnV0dG9uVGV4dDtcclxuICBjdXJyZW50VXNlck5hbWU7XHJcblxyXG4gIGNoYXRVc2VycyA9IFtdO1xyXG4gIGN1cnJlbnRVc2VyO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1hcFNlcnZpY2U6IEdvb2dsZU1hcHNTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSB0cmFuc2ZlclNlcnZpY2U6IFRyYW5zZmVyU2VydmljZSwgcHJpdmF0ZSBwYWdlOiBQYWdlLFxyXG4gICAgcHJpdmF0ZSBsb2dpbmNoZWNrU2VydmljZTogTG9naW5jaGVja1NlcnZpY2UpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICBcdHRoaXMubG9hZFZpZXdzKCk7XHJcbiAgfVxyXG5cclxuICBsb2FkVmlld3MoKSB7XHJcbiAgICBsZXQgYWN0aXZpdHlJbmRpY2F0b3IgPSA8QWN0aXZpdHlJbmRpY2F0b3I+IHRoaXMuYWkubmF0aXZlRWxlbWVudDtcclxuICAgIGxldCBpbmZvQ29udGFpbmVyID0gPFN0YWNrTGF5b3V0PiB0aGlzLmluZm9Db250YWluZXIubmF0aXZlRWxlbWVudDtcclxuICAgIGxldCBkZWxldGVCdXR0b24gPSA8QWN0aW9uSXRlbT4gdGhpcy5kZWxldGVJdGVtLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICBsZXQgY2hhdEJ1dHRvbiA9IDxTdGFja0xheW91dD4gdGhpcy5idXR0b25Db250YWluZXIubmF0aXZlRWxlbWVudDtcclxuXHJcbiAgICBpbmZvQ29udGFpbmVyLnZpc2liaWxpdHkgPSAnY29sbGFwc2UnO1xyXG4gICAgY2hhdEJ1dHRvbi52aXNpYmlsaXR5ID0gJ2NvbGxhcHNlJztcclxuICAgIHRoaXMudXNlcklkID0gdGhpcy5sb2dpbmNoZWNrU2VydmljZS5nZXRVc2VyKCk7XHJcbiAgICB0aGlzLm1hcERhdGEgPSB0aGlzLnRyYW5zZmVyU2VydmljZS5nZXREYXRhKCk7XHJcbiAgICBmaXJlYmFzZS5maXJlc3RvcmUuY29sbGVjdGlvbigndXNlcnMnKS5kb2ModGhpcy51c2VySWQpLmdldCgpLnRoZW4oKGRvYykgPT4ge1xyXG4gICAgICB0aGlzLmN1cnJlbnRVc2VyID0gZG9jLmRhdGEoKTtcclxuICAgICAgaWYoZG9jLmRhdGEoKS5jaGF0cy5pbmNsdWRlcyh0aGlzLm1hcERhdGEucG9zdEluZm8uaWQpKSB7XHJcbiAgICAgICAgdGhpcy5idXR0b25UZXh0ID0gJ1ZpZXcgY2hhdCc7XHJcbiAgICAgICAgYWN0aXZpdHlJbmRpY2F0b3IuYnVzeSA9IGZhbHNlO1xyXG4gICAgICAgIGluZm9Db250YWluZXIudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcclxuICAgICAgICBjaGF0QnV0dG9uLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgZmlyZWJhc2UuZmlyZXN0b3JlLmNvbGxlY3Rpb24oJ2NoYXRzJykuZG9jKHRoaXMubWFwRGF0YS5wb3N0SW5mby5kYXRhLnVpZCkuZ2V0KCkudGhlbigoZG9jKSA9PiB7XHJcbiAgICAgICAgICBpZighZG9jLmV4aXN0cyAmJiB0aGlzLnVzZXJJZCA9PT0gdGhpcy5tYXBEYXRhLnBvc3RJbmZvLmRhdGEudWlkKVxyXG4gICAgICAgICAgICBjaGF0QnV0dG9uLnZpc2liaWxpdHkgPSAnY29sbGFwc2UnO1xyXG4gICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICBjaGF0QnV0dG9uLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XHJcbiAgICAgICAgICBhY3Rpdml0eUluZGljYXRvci5idXN5ID0gZmFsc2U7XHJcbiAgICAgICAgICBpbmZvQ29udGFpbmVyLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLmJ1dHRvblRleHQgPSAnSm9pbiBjaGF0JztcclxuICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICBpZihpc0lPUykge1xyXG4gICAgICB0aGlzLmJvdW5kcyA9IEdNU0Nvb3JkaW5hdGVCb3VuZHMuYWxsb2MoKS5pbml0KCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHRoaXMuc3RhcnRMYXQgPSB0aGlzLm1hcERhdGEucG9zdEluZm8uZGF0YS5zdGFydExhdDtcclxuICAgIHRoaXMuZW5kTGF0ID0gdGhpcy5tYXBEYXRhLnBvc3RJbmZvLmRhdGEuZW5kTGF0O1xyXG4gICAgdGhpcy5zdGFydExuZyA9IHRoaXMubWFwRGF0YS5wb3N0SW5mby5kYXRhLnN0YXJ0TG5nO1xyXG4gICAgdGhpcy5lbmRMbmcgPSB0aGlzLm1hcERhdGEucG9zdEluZm8uZGF0YS5lbmRMbmc7XHJcbiAgICB0aGlzLmluZm8gPSB0aGlzLm1hcERhdGEucG9zdEl0ZW0uaW5mbztcclxuICAgIHRoaXMucHJvZmlsZVNvdXJjZSA9IHRoaXMubWFwRGF0YS5wb3N0SXRlbS5wcm9maWxlU291cmNlO1xyXG4gICAgdGhpcy51c2VybmFtZSA9IHRoaXMubWFwRGF0YS5wb3N0SXRlbS51c2VybmFtZTtcclxuXHJcbiAgICBcclxuICAgIGlmKHRoaXMudXNlcklkICE9PSB0aGlzLm1hcERhdGEucG9zdEluZm8uZGF0YS51aWQpIHtcclxuICAgICAgZGVsZXRlQnV0dG9uLnZpc2liaWxpdHkgPSAnY29sbGFwc2UnO1xyXG4gICAgfVxyXG5cclxuICAgIGZpcmViYXNlLmdldEN1cnJlbnRVc2VyKCkudGhlbigodXNlcikgPT4ge1xyXG4gICAgICB0aGlzLmN1cnJlbnRVc2VyTmFtZSA9IHVzZXIuZGlzcGxheU5hbWU7XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgb25NYXBSZWFkeShldmVudCkge1xyXG4gIFx0dGhpcy5tYXBWaWV3ID0gZXZlbnQub2JqZWN0O1xyXG5cclxuXHQvLyB0aGlzLmxhdGl0dWRlID0gKHRoaXMuc3RhcnRMYXQgKyB0aGlzLmVuZExhdCkgLyAyLjA7XHJcblx0Ly8gdGhpcy5sb25naXR1ZGUgPSAodGhpcy5zdGFydExuZyArIHRoaXMuZW5kTG5nKSAvIDIuMDtcclxuICBcdHRoaXMuYWRkTWFya2VyKHRoaXMuc3RhcnRMYXQsIHRoaXMuc3RhcnRMbmcsIHRoaXMubWFwRGF0YS5wb3N0SW5mby5kYXRhLnN0YXJ0QWRkcmVzcywgdGhpcy5tYXBEYXRhLnBvc3RJbmZvLmRhdGEuc3RhcnRGb3JtYXR0ZWQsIDApO1xyXG5cdCAgdGhpcy5hZGRNYXJrZXIodGhpcy5lbmRMYXQsIHRoaXMuZW5kTG5nLCB0aGlzLm1hcERhdGEucG9zdEluZm8uZGF0YS5lbmRBZGRyZXNzLCB0aGlzLm1hcERhdGEucG9zdEluZm8uZGF0YS5lbmRGb3JtYXR0ZWQsIDEpO1xyXG5cclxuICBcdGlmKGlzQW5kcm9pZCkge1xyXG4gICAgXHRcdHZhciBidWlsZGVyID0gbmV3IGNvbS5nb29nbGUuYW5kcm9pZC5nbXMubWFwcy5tb2RlbC5MYXRMbmdCb3VuZHMuQnVpbGRlcigpO1xyXG4gIFx0XHR0aGlzLm1hcFZpZXcuZmluZE1hcmtlcihmdW5jdGlvbiAobWFya2VyKSB7IGJ1aWxkZXIuaW5jbHVkZShtYXJrZXIuYW5kcm9pZC5nZXRQb3NpdGlvbigpKTsgcmV0dXJuIGZhbHNlfSk7XHJcbiAgXHRcdHZhciBib3VuZHMgPSBidWlsZGVyLmJ1aWxkKCk7XHJcbiAgXHRcdHZhciBjdSA9IGNvbS5nb29nbGUuYW5kcm9pZC5nbXMubWFwcy5DYW1lcmFVcGRhdGVGYWN0b3J5Lm5ld0xhdExuZ0JvdW5kcyhib3VuZHMsIDE1MCk7XHJcbiAgXHRcdHRoaXMubWFwVmlldy5nTWFwLmFuaW1hdGVDYW1lcmEoY3UpO1xyXG4gIFx0fVxyXG4gIFx0ZWxzZSBpZihpc0lPUykge1xyXG4gIFx0XHR2YXIgdXBkYXRlID0gR01TQ2FtZXJhVXBkYXRlLmZpdEJvdW5kc1dpdGhQYWRkaW5nKGJvdW5kcywgMTUwKTsgdGhpcy5tYXBWaWV3LmdNYXAubW92ZUNhbWVyYSh1cGRhdGUpO1xyXG4gIFx0fVxyXG5cclxuICB9XHJcblxyXG4gIGFkZE1hcmtlcihsYXQsIGxuZywgdGl0bGUsIHNuaXBwZXQsIGluZGV4KSB7XHJcbiAgXHR2YXIgbWFya2VyID0gbmV3IE1hcmtlcigpO1xyXG4gICAgbWFya2VyLnBvc2l0aW9uID0gUG9zaXRpb24ucG9zaXRpb25Gcm9tTGF0TG5nKGxhdCwgbG5nKTtcclxuICAgIG1hcmtlci50aXRsZSA9IHRpdGxlO1xyXG4gICAgbWFya2VyLnNuaXBwZXQgPSBzbmlwcGV0O1xyXG4gICAgbWFya2VyLnVzZXJEYXRhID0ge2luZGV4OiBpbmRleH07XHJcbiAgICB0aGlzLm1hcFZpZXcuYWRkTWFya2VyKG1hcmtlcik7XHJcbiAgICBpZihpc0lPUylcclxuICAgIFx0dGhpcy5ib3VuZHMgPSB0aGlzLmJvdW5kcy5pbmNsdWRpbmdDb29yZGluYXRlKG1hcmtlci5wb3NpdGlvbik7XHJcbiAgfVxyXG5cclxuICBvbk5hdkJ0blRhcCgpIHtcclxuICBcdHRoaXMucm91dGVyLm5hdmlnYXRlKFsnbmF2aWdhdGlvbiddLCB7Y2xlYXJIaXN0b3J5OiB0cnVlfSk7XHJcbiAgfVxyXG5cclxuICBkZWxldGVGaWxlcygpIHtcclxuICAgIGZpcmViYXNlLnN0b3JhZ2UuZGVsZXRlRmlsZSh7XHJcbiAgICAgIC8vIHRoZSBmdWxsIHBhdGggb2YgYW4gZXhpc3RpbmcgZmlsZSBpbiB5b3VyIEZpcmViYXNlIHN0b3JhZ2VcclxuICAgICAgcmVtb3RlRnVsbFBhdGg6ICdwb3N0aW5ncy8nICsgdGhpcy5tYXBEYXRhLnBvc3RJbmZvLmlkICsgJy9tYXBzL2xhcmdlX21hcC5wbmcnXHJcbiAgICB9KS50aGVuKFxyXG4gICAgICAgICgpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiRmlsZSBkZWxldGVkLlwiKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJGaWxlIGRlbGV0aW9uIEVycm9yOiBcIiArIGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICApO1xyXG4gICAgZmlyZWJhc2Uuc3RvcmFnZS5kZWxldGVGaWxlKHtcclxuICAgICAgLy8gdGhlIGZ1bGwgcGF0aCBvZiBhbiBleGlzdGluZyBmaWxlIGluIHlvdXIgRmlyZWJhc2Ugc3RvcmFnZVxyXG4gICAgICByZW1vdGVGdWxsUGF0aDogJ3Bvc3RpbmdzLycgKyB0aGlzLm1hcERhdGEucG9zdEluZm8uaWQgKyAnL21hcHMvc21hbGxfbWFwLnBuZydcclxuICAgIH0pLnRoZW4oXHJcbiAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJGaWxlIGRlbGV0ZWQuXCIpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkZpbGUgZGVsZXRpb24gRXJyb3I6IFwiICsgZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcm9tcHREZWxldGUoKSB7XHJcbiAgICBkaWFsb2dzLmNvbmZpcm0oe1xyXG4gICAgICAgIHRpdGxlOiBcIkNvbmZpcm0gZGVsZXRlXCIsXHJcbiAgICAgICAgbWVzc2FnZTogXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgcG9zdD9cIixcclxuICAgICAgICBva0J1dHRvblRleHQ6IFwiQ29uZmlybVwiLFxyXG4gICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiQ2FuY2VsXCIsXHJcbiAgICB9KS50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgLy8gcmVzdWx0IGFyZ3VtZW50IGlzIGJvb2xlYW5cclxuICAgICAgICBpZihyZXN1bHQpXHJcbiAgICAgICAgICB0aGlzLm9uRGVsZXRlKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG9uRGVsZXRlKCkge1xyXG4gICAgdmFyIHBvc3RpbmdEb2N1bWVudCA9IGZpcmViYXNlLmZpcmVzdG9yZS5jb2xsZWN0aW9uKCdwb3N0aW5ncycpLmRvYyh0aGlzLm1hcERhdGEucG9zdEluZm8uaWQpO1xyXG4gICAgdmFyIHVzZXJEb2N1bWVudCA9IGZpcmViYXNlLmZpcmVzdG9yZS5jb2xsZWN0aW9uKCd1c2VycycpLmRvYyh0aGlzLm1hcERhdGEucG9zdEluZm8uZGF0YS51aWQpO1xyXG4gICAgdmFyIGNoYXREb2N1bWVudCA9IGZpcmViYXNlLmZpcmVzdG9yZS5jb2xsZWN0aW9uKCdjaGF0cycpLmRvYyh0aGlzLm1hcERhdGEucG9zdEluZm8uaWQpO1xyXG4gICAgcG9zdGluZ0RvY3VtZW50LmRlbGV0ZSgpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICB1c2VyRG9jdW1lbnQuZ2V0KCkudGhlbigoZG9jKSA9PiB7XHJcbiAgICAgICAgbGV0IHVzZXJQb3N0cyA9IGRvYy5kYXRhKCkucG9zdHM7XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSB1c2VyUG9zdHMuaW5kZXhPZih0aGlzLm1hcERhdGEucG9zdEluZm8uaWQsIDApO1xyXG4gICAgICAgIGlmIChpbmRleCA+IC0xKSB7XHJcbiAgICAgICAgICAgdXNlclBvc3RzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB1c2VyRG9jdW1lbnQudXBkYXRlKHtcclxuICAgICAgICAgIHBvc3RzOiB1c2VyUG9zdHNcclxuICAgICAgICB9KS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgIC8vIGNoYXREb2N1bWVudC5nZXQoKS50aGVuKChkb2MpID0+IHtcclxuICAgICAgICAgIC8vICAgbGV0IGRhdGEgPSBkb2MuZGF0YSgpO1xyXG4gICAgICAgICAgLy8gICBpZihkYXRhKSB7XHJcbiAgICAgICAgICAvLyAgICAgZm9yKHZhciBpID0gMDsgaSA8IGRhdGEudXNlcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIC8vICAgICAgIC8vIHRoaXMuY2hhdFVzZXJzLnB1c2goZGF0YS51c2Vyc1tpXS51aWQpO1xyXG4gICAgICAgICAgLy8gICAgICAgZmlyZWJhc2UuZmlyZXN0b3JlLmNvbGxlY3Rpb24oJ3VzZXJzJykuZG9jKGRhdGEudXNlcnNbaV0udWlkKS5nZXQoKS50aGVuKChkb2MpID0+IHtcclxuICAgICAgICAgIC8vICAgICAgICAgY29uc3QgaWQgPSBkYXRhLnVzZXJzW2ldLnVpZDtcclxuICAgICAgICAgIC8vICAgICAgICAgbGV0IHVpZENoYXRzID0gZG9jLmRhdGEoKS5jaGF0cztcclxuICAgICAgICAgIC8vICAgICAgICAgbGV0IGluZGV4ID0gdWlkQ2hhdHMuaW5kZXhPZih0aGlzLm1hcERhdGEucG9zdEluZm8uaWQpO1xyXG4gICAgICAgICAgLy8gICAgICAgICBpZihpbmRleCA+IC0xKSB7XHJcbiAgICAgICAgICAvLyAgICAgICAgICAgdWlkQ2hhdHMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgIC8vICAgICAgICAgfVxyXG4gICAgICAgICAgLy8gICAgICAgICBmaXJlYmFzZS5maXJlc3RvcmUuY29sbGVjdGlvbigndXNlcnMnKS5kb2MoaWQpLnVwZGF0ZSh7XHJcbiAgICAgICAgICAvLyAgICAgICAgICAgY2hhdHM6IHVpZENoYXRzXHJcbiAgICAgICAgICAvLyAgICAgICAgIH0pXHJcbiAgICAgICAgICAvLyAgICAgICB9KVxyXG4gICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgIC8vICAgICBjaGF0RG9jdW1lbnQuZGVsZXRlKCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAvLyAgICAgICB0aGlzLmRlbGV0ZUZpbGVzKCk7XHJcbiAgICAgICAgICAvLyAgICAgICB0aGlzLm9uTmF2QnRuVGFwKCk7XHJcbiAgICAgICAgICAvLyAgICAgfSlcclxuICAgICAgICAgIC8vICAgfVxyXG4gICAgICAgICAgLy8gICBlbHNlIHtcclxuICAgICAgICAgIC8vICAgICB0aGlzLmRlbGV0ZUZpbGVzKCk7XHJcbiAgICAgICAgICAvLyAgICAgdGhpcy5vbk5hdkJ0blRhcCgpO1xyXG4gICAgICAgICAgLy8gICB9XHJcbiAgICAgICAgICAvLyB9KVxyXG4gICAgICAgICAgdGhpcy5kZWxldGVGaWxlcygpO1xyXG4gICAgICAgICAgdGhpcy5vbk5hdkJ0blRhcCgpO1xyXG4gICAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgfSlcclxuICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgIH0pXHJcbiAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgcmVtb3ZlQ2hhdChpbmRleCkge1xyXG4gICAgY29uc29sZS5sb2coaW5kZXgpO1xyXG4gICAgZmlyZWJhc2UuZmlyZXN0b3JlLmNvbGxlY3Rpb24oJ3VzZXJzJykuZG9jKHRoaXMuY2hhdFVzZXJzW2luZGV4XSkuZ2V0KCkudGhlbigoZG9jKSA9PiB7XHJcbiAgICAgIGxldCB1c2VyQ2hhdHMgPSBkb2MuZGF0YSgpLmNoYXRzO1xyXG4gICAgICBjb25zdCBpbmRleCA9IHVzZXJDaGF0cy5pbmRleE9mKHRoaXMubWFwRGF0YS5wb3N0SW5mby5pZCk7XHJcbiAgICAgIGlmIChpbmRleCA+IC0xKSB7XHJcbiAgICAgICAgIHVzZXJDaGF0cy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICB9XHJcbiAgICAgIGZpcmViYXNlLmZpcmVzdG9yZS5jb2xsZWN0aW9uKCd1c2VycycpLmRvYyh0aGlzLmNoYXRVc2Vyc1tpbmRleF0pLnVwZGF0ZSh7XHJcbiAgICAgICAgY2hhdHM6IHVzZXJDaGF0c1xyXG4gICAgICB9KS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBpZihpbmRleCA9PT0gdGhpcy5jaGF0VXNlcnNbaW5kZXhdLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgIHRoaXMuZGVsZXRlRmlsZXMoKTtcclxuICAgICAgICAgIHRoaXMub25OYXZCdG5UYXAoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgb25SZXBvcnQoKSB7XHJcblxyXG4gIH1cclxuXHJcbiAgb25Db25uZWN0VGFwKCkge1xyXG4gICAgbGV0IGdyaWRDb250YWluZXIgPSA8R3JpZExheW91dD4gdGhpcy5sYXlvdXQubmF0aXZlRWxlbWVudDtcclxuICAgIGxldCBhY3Rpdml0eUluZGljYXRvciA9IDxBY3Rpdml0eUluZGljYXRvcj4gdGhpcy5haS5uYXRpdmVFbGVtZW50O1xyXG5cclxuICAgIGdyaWRDb250YWluZXIudmlzaWJpbGl0eSA9ICdjb2xsYXBzZSc7XHJcbiAgICBhY3Rpdml0eUluZGljYXRvci5idXN5ID0gdHJ1ZTtcclxuXHJcbiAgICBpZih0aGlzLmJ1dHRvblRleHQgPT09ICdWaWV3IGNoYXQnKSB7XHJcbiAgICAgIHRoaXMudHJhbnNmZXJTZXJ2aWNlLnNldERhdGEodGhpcy5tYXBEYXRhLnBvc3RJbmZvLmlkKTtcclxuICAgICAgZ3JpZENvbnRhaW5lci52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xyXG4gICAgICBhY3Rpdml0eUluZGljYXRvci5idXN5ID0gZmFsc2U7XHJcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnY2hhdCddKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYodGhpcy5idXR0b25UZXh0ID09PSAnSm9pbiBjaGF0Jykge1xyXG4gICAgICBjb25zdCBjaGF0RG9jdW1lbnQgPSBmaXJlYmFzZS5maXJlc3RvcmUuY29sbGVjdGlvbignY2hhdHMnKS5kb2ModGhpcy5tYXBEYXRhLnBvc3RJbmZvLmlkKTtcclxuICAgICAgY29uc3QgdXNlckRvY3VtZW50ID0gZmlyZWJhc2UuZmlyZXN0b3JlLmNvbGxlY3Rpb24oJ3VzZXJzJykuZG9jKHRoaXMudXNlcklkKTtcclxuICAgICAgY2hhdERvY3VtZW50LmdldCgpLnRoZW4oKGRvYykgPT4ge1xyXG4gICAgICAgIGlmKGRvYy5leGlzdHMpIHtcclxuICAgICAgICAgIC8vY2hhdCBleGlzdHMsIHNvIGFkZCB1c2VyIHRvIHRoZSBjaGF0IHJvb20gYW5kIG5hdmlnYXRlIHRoZXJlXHJcbiAgICAgICAgICBsZXQgdG9rZW5zOiBbc3RyaW5nXSA9IGRvYy5kYXRhKCkudG9rZW5zO1xyXG4gICAgICAgICAgdmFyIHVzZXJzOiBbe3VpZDogc3RyaW5nLCBkaXNwbGF5TmFtZTogc3RyaW5nfV0gPSBkb2MuZGF0YSgpLnVzZXJzO1xyXG4gICAgICAgICAgdmFyIHVzZXJUb2tlbnM6IFtzdHJpbmddID0gdGhpcy5jdXJyZW50VXNlci50b2tlbnM7XHJcbiAgICAgICAgICB2YXIgbmV3VG9rZW5zID0gdG9rZW5zLmNvbmNhdCh1c2VyVG9rZW5zKTtcclxuICAgICAgICAgIHVzZXJzLnB1c2goe3VpZDogdGhpcy51c2VySWQsIGRpc3BsYXlOYW1lOiB0aGlzLmN1cnJlbnRVc2VyTmFtZX0pXHJcbiAgICAgICAgICBjaGF0RG9jdW1lbnQudXBkYXRlKHtcclxuICAgICAgICAgICAgdXNlcnM6IHVzZXJzLFxyXG4gICAgICAgICAgICB0b2tlbnM6IEFycmF5LmZyb20obmV3IFNldChuZXdUb2tlbnMpKVxyXG4gICAgICAgICAgfSkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIHVzZXJEb2N1bWVudC5nZXQoKS50aGVuKChkb2MpID0+IHtcclxuICAgICAgICAgICAgICB2YXIgdXNlckNoYXRzID0gZG9jLmRhdGEoKS5jaGF0cztcclxuICAgICAgICAgICAgICB1c2VyQ2hhdHMucHVzaCh0aGlzLm1hcERhdGEucG9zdEluZm8uaWQpO1xyXG4gICAgICAgICAgICAgIHVzZXJEb2N1bWVudC51cGRhdGUoe1xyXG4gICAgICAgICAgICAgICAgY2hhdHM6IHVzZXJDaGF0c1xyXG4gICAgICAgICAgICAgIH0pLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy9maW5hbGx5IGFmdGVyIGV2ZXJ5dGhpbmcgZWxzZSBoYXMgdXBkYXRlZCwgc2VuZCB1c2VyIHRvIGNoYXQgY29tcG9uZW50XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRyYW5zZmVyU2VydmljZS5zZXREYXRhKHRoaXMubWFwRGF0YS5wb3N0SW5mby5pZCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ1dHRvblRleHQgPSAnVmlldyBjaGF0JztcclxuICAgICAgICAgICAgICAgIGdyaWRDb250YWluZXIudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcclxuICAgICAgICAgICAgICAgIGFjdGl2aXR5SW5kaWNhdG9yLmJ1c3kgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnY2hhdCddKTtcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAvL2NoYXQgZG9lcyBub3QgZXhpc3QsIHNvIGNyZWF0ZSBhbmQgYWRkIGJvdGggcG9zdCB1c2VyIGFuZCBjdXJyZW50IHVzZXJcclxuICAgICAgICAgIGZpcmViYXNlLmZpcmVzdG9yZS5jb2xsZWN0aW9uKCdjaGF0cycpLmRvYyh0aGlzLm1hcERhdGEucG9zdEluZm8uaWQpLnNldCh7XHJcbiAgICAgICAgICAgIHVzZXJzOiBbe3VpZDogdGhpcy5tYXBEYXRhLnBvc3RJbmZvLmRhdGEudWlkLCBkaXNwbGF5TmFtZTogdGhpcy5tYXBEYXRhLnBvc3RJdGVtLnVzZXJuYW1lfSwge3VpZDogdGhpcy51c2VySWQsIGRpc3BsYXlOYW1lOiB0aGlzLmN1cnJlbnRVc2VyTmFtZX1dLFxyXG4gICAgICAgICAgICBjaGF0czogW10sXHJcbiAgICAgICAgICAgIGV4cGlyZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgfSkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIGZpcmViYXNlLmZpcmVzdG9yZS5jb2xsZWN0aW9uKCd1c2VycycpLmRvYyh0aGlzLm1hcERhdGEucG9zdEluZm8uZGF0YS51aWQpLmdldCgpLnRoZW4oKGRvYykgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnN0IHVzZXJUb2tlbnMgPSB0aGlzLmN1cnJlbnRVc2VyLnRva2VucztcclxuICAgICAgICAgICAgICBjb25zdCBvdGhlclVzZXJUb2tlbnMgPSBkb2MuZGF0YSgpLnRva2VucztcclxuICAgICAgICAgICAgICBjb25zdCBuZXdUb2tlbnMgPSB1c2VyVG9rZW5zLmNvbmNhdChvdGhlclVzZXJUb2tlbnMpO1xyXG4gICAgICAgICAgICAgIGZpcmViYXNlLmZpcmVzdG9yZS5jb2xsZWN0aW9uKCdjaGF0cycpLmRvYyh0aGlzLm1hcERhdGEucG9zdEluZm8uaWQpLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICB0b2tlbnM6IEFycmF5LmZyb20obmV3IFNldChuZXdUb2tlbnMpKVxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgdmFyIHVzZXJDaGF0cyA9IGRvYy5kYXRhKCkuY2hhdHM7XHJcbiAgICAgICAgICAgICAgdXNlckNoYXRzLnB1c2godGhpcy5tYXBEYXRhLnBvc3RJbmZvLmlkKTtcclxuICAgICAgICAgICAgICBmaXJlYmFzZS5maXJlc3RvcmUuY29sbGVjdGlvbigndXNlcnMnKS5kb2ModGhpcy5tYXBEYXRhLnBvc3RJbmZvLmRhdGEudWlkKS51cGRhdGUoe1xyXG4gICAgICAgICAgICAgICAgY2hhdHM6IHVzZXJDaGF0c1xyXG4gICAgICAgICAgICAgIH0pLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgdXNlckRvY3VtZW50LmdldCgpLnRoZW4oKGRvYykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICB2YXIgdXNlckNoYXRzID0gZG9jLmRhdGEoKS5jaGF0cztcclxuICAgICAgICAgICAgICAgICAgdXNlckNoYXRzLnB1c2godGhpcy5tYXBEYXRhLnBvc3RJbmZvLmlkKTtcclxuICAgICAgICAgICAgICAgICAgdXNlckRvY3VtZW50LnVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hhdHM6IHVzZXJDaGF0c1xyXG4gICAgICAgICAgICAgICAgICB9KS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvL2ZpbmFsbHkgYWZ0ZXIgZXZlcnl0aGluZyBlbHNlIGhhcyB1cGRhdGVkLCBzZW5kIHVzZXIgdG8gY2hhdCBjb21wb25lbnRcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRyYW5zZmVyU2VydmljZS5zZXREYXRhKHRoaXMubWFwRGF0YS5wb3N0SW5mby5pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5idXR0b25UZXh0ID0gJ1ZpZXcgY2hhdCc7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JpZENvbnRhaW5lci52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xyXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2aXR5SW5kaWNhdG9yLmJ1c3kgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ2NoYXQnXSk7XHJcbiAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUG9zdGluZ1NlcnZpY2Uge1xyXG5cdC8qKlxyXG5cdCogVG8gZ2V0IHRoZSBzZXJ2ZXIgdG8gcmVjb2duaXplIHlvdXIgbW9iaWxlIGRldmljZSwgZmluZCB5b3VyIGlwdjQgYWRkcmVzcyBieSBydW5uaW5nIGlwY29uZmlnIGluIGEgdGVybWluYWwgd2luZG93XHJcblx0KiBhbmQgYWRkIGEgbmV3IHVyaSBsaW5lIHdpdGggeW91ciBpcHY0IGFkZHJlc3MuIERvIHRoaXMgZm9yIG5ldHdvcmtfc2VjdXJpdHlfY29uZmlnLnhtbCwgdXNlci5zZXJ2aWNlcy50bnMudHMsIGFuZFxyXG5cdCogcG9zdGluZy5zZXJ2aWNlLnRucy50cy5cclxuXHQqL1xyXG5cdC8vIEFkYW0ncyB0ZXN0aW5nIHNlcnZlclxyXG5cdC8vIHVyaSA9ICdodHRwOi8vMTkyLjE2OC4xLjc6NDAwMCc7XHJcblx0Ly8gdXJpID0gJ2h0dHA6Ly8xMC41LjExLjI1OjQwMDAnO1xyXG5cdC8vIFBoaWxsaXAncyBUZXN0aW5nIHNlcnZlclxyXG5cdHVyaSA9ICdodHRwOi8vMTkyLjE2OC4xLjM6NDAwMCc7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7IH1cclxuXHJcbiAgZ2V0UG9zdGluZ3MoKSB7XHJcbiAgXHRyZXR1cm4gdGhpcy5odHRwLmdldChgJHt0aGlzLnVyaX0vcG9zdGluZ3NgKTtcclxuICB9XHJcblxyXG4gIGdldFBvc3RpbmdieUlkKGlkKSB7XHJcbiAgXHRyZXR1cm4gdGhpcy5odHRwLmdldChgJHt0aGlzLnVyaX0vcG9zdGluZ3MvJHtpZH1gKTtcclxuICB9XHJcblxyXG4gIGFkZFBvc3RpbmcodXNlciwgc3RhcnRhZHIsIGVuZGFkciwgZGF0ZSwgY29zdCwgY2FwYWNpdHksIGNvbW1lbnRzKSB7XHJcblxyXG4gICAgLy9jb25zdCBwcmljZSA9IHJlcSguLi8uLi9iYWNrZW5kL2RhdGEvcHJpY2luZykoe3N0YXJ0OiBzdGFydGFkciwgZW5kOiBlbmRhZHJ9KTtcclxuXHJcbiAgXHRjb25zdCBwb3N0aW5nID0ge1xyXG4gIFx0XHR1c2VyIDogdXNlcixcclxuICBcdFx0c3RhcnRhZHIgOiBzdGFydGFkcixcclxuICBcdFx0ZW5kYWRyIDogZW5kYWRyLFxyXG4gIFx0XHRkYXRlIDogZGF0ZSxcclxuICBcdFx0Y29zdCA6IGNvc3QsXHJcbiAgXHRcdGNhcGFjaXR5IDogY2FwYWNpdHksXHJcbiAgXHRcdGNvbW1lbnRzIDogY29tbWVudHNcclxuICBcdH07XHJcbiAgXHRyZXR1cm4gdGhpcy5odHRwLnBvc3QoYCR7dGhpcy51cml9L3Bvc3RpbmdzL2FkZC9gLCBwb3N0aW5nKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVBvc3RpbmcoaWQsIHVzZXIsIHN0YXJ0YWRyLCBlbmRhZHIsIGRhdGUsIGNvc3QsIGNhcGFjaXR5LCBjb21tZW50cykge1xyXG4gICAgLy9jb25zdCBwcmljZSA9IHJlcSguLi8uLi9iYWNrZW5kL2RhdGEvcHJpY2luZykoe3N0YXJ0OiBzdGFydGFkciwgZW5kOiBlbmRhZHJ9KTtcclxuICBcdGNvbnN0IHBvc3RpbmcgPSB7XHJcbiAgXHRcdHVzZXIgOiB1c2VyLFxyXG4gIFx0XHRzdGFydGFkciA6IHN0YXJ0YWRyLFxyXG4gIFx0XHRlbmRhZHIgOiBlbmRhZHIsXHJcbiAgXHRcdGRhdGUgOiBkYXRlLFxyXG4gIFx0XHRjb3N0IDogY29zdCxcclxuICBcdFx0Y2FwYWNpdHkgOiBjYXBhY2l0eSxcclxuICBcdFx0Y29tbWVudHMgOiBjb21tZW50c1xyXG4gIFx0fTtcclxuICBcdHJldHVybiB0aGlzLmh0dHAucG9zdChgJHt0aGlzLnVyaX0vcG9zdGluZ3MvdXBkYXRlLyR7aWR9YCwgcG9zdGluZyk7XHJcbiAgfVxyXG5cclxuICBkZWxldGVQb3N0aW5nKGlkKSB7XHJcbiAgXHRyZXR1cm4gdGhpcy5odHRwLmdldChgJHt0aGlzLnVyaX0vcG9zdGluZ3MvZGVsZXRlLyR7aWR9YCk7XHJcbiAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQb3N0aW5nU2VydmljZSB7XHJcblx0LyoqXHJcblx0KiBUbyBnZXQgdGhlIHNlcnZlciB0byByZWNvZ25pemUgeW91ciBtb2JpbGUgZGV2aWNlLCBmaW5kIHlvdXIgaXB2NCBhZGRyZXNzIGJ5IHJ1bm5pbmcgaXBjb25maWcgaW4gYSB0ZXJtaW5hbCB3aW5kb3dcclxuXHQqIGFuZCBhZGQgYSBuZXcgdXJpIGxpbmUgd2l0aCB5b3VyIGlwdjQgYWRkcmVzcy4gRG8gdGhpcyBmb3IgbmV0d29ya19zZWN1cml0eV9jb25maWcueG1sLCB1c2VyLnNlcnZpY2VzLnRucy50cywgYW5kXHJcblx0KiBwb3N0aW5nLnNlcnZpY2UudG5zLnRzLlxyXG5cdCovXHJcblx0Ly8gQWRhbSdzIHRlc3Rpbmcgc2VydmVyXHJcblx0Ly8gdXJpID0gJ2h0dHA6Ly8xOTIuMTY4LjEuNzo0MDAwJztcclxuXHQvLyB1cmkgPSAnaHR0cDovLzEwLjUuMTEuMjU6NDAwMCc7XHJcblx0Ly8gUGhpbGxpcCdzIFRlc3Rpbmcgc2VydmVyXHJcblx0dXJpID0gJ2h0dHA6Ly8xOTIuMTY4LjEuMzo0MDAwJztcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHsgfVxyXG5cclxuICBnZXRQb3N0aW5ncygpIHtcclxuICBcdHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke3RoaXMudXJpfS9wb3N0aW5nc2ApO1xyXG4gIH1cclxuXHJcbiAgZ2V0UG9zdGluZ2J5SWQoaWQpIHtcclxuICBcdHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke3RoaXMudXJpfS9wb3N0aW5ncy8ke2lkfWApO1xyXG4gIH1cclxuXHJcbiAgYWRkUG9zdGluZyh1c2VyLCBzdGFydGFkciwgZW5kYWRyLCBkYXRlLCBjb3N0LCBjYXBhY2l0eSwgY29tbWVudHMpIHtcclxuXHJcbiAgICAvL2NvbnN0IHByaWNlID0gcmVxKC4uLy4uL2JhY2tlbmQvZGF0YS9wcmljaW5nKSh7c3RhcnQ6IHN0YXJ0YWRyLCBlbmQ6IGVuZGFkcn0pO1xyXG5cclxuICBcdGNvbnN0IHBvc3RpbmcgPSB7XHJcbiAgXHRcdHVzZXIgOiB1c2VyLFxyXG4gIFx0XHRzdGFydGFkciA6IHN0YXJ0YWRyLFxyXG4gIFx0XHRlbmRhZHIgOiBlbmRhZHIsXHJcbiAgXHRcdGRhdGUgOiBkYXRlLFxyXG4gIFx0XHRjb3N0IDogY29zdCxcclxuICBcdFx0Y2FwYWNpdHkgOiBjYXBhY2l0eSxcclxuICBcdFx0Y29tbWVudHMgOiBjb21tZW50c1xyXG4gIFx0fTtcclxuICBcdHJldHVybiB0aGlzLmh0dHAucG9zdChgJHt0aGlzLnVyaX0vcG9zdGluZ3MvYWRkL2AsIHBvc3RpbmcpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlUG9zdGluZyhpZCwgdXNlciwgc3RhcnRhZHIsIGVuZGFkciwgZGF0ZSwgY29zdCwgY2FwYWNpdHksIGNvbW1lbnRzKSB7XHJcbiAgICAvL2NvbnN0IHByaWNlID0gcmVxKC4uLy4uL2JhY2tlbmQvZGF0YS9wcmljaW5nKSh7c3RhcnQ6IHN0YXJ0YWRyLCBlbmQ6IGVuZGFkcn0pO1xyXG4gIFx0Y29uc3QgcG9zdGluZyA9IHtcclxuICBcdFx0dXNlciA6IHVzZXIsXHJcbiAgXHRcdHN0YXJ0YWRyIDogc3RhcnRhZHIsXHJcbiAgXHRcdGVuZGFkciA6IGVuZGFkcixcclxuICBcdFx0ZGF0ZSA6IGRhdGUsXHJcbiAgXHRcdGNvc3QgOiBjb3N0LFxyXG4gIFx0XHRjYXBhY2l0eSA6IGNhcGFjaXR5LFxyXG4gIFx0XHRjb21tZW50cyA6IGNvbW1lbnRzXHJcbiAgXHR9O1xyXG4gIFx0cmV0dXJuIHRoaXMuaHR0cC5wb3N0KGAke3RoaXMudXJpfS9wb3N0aW5ncy91cGRhdGUvJHtpZH1gLCBwb3N0aW5nKTtcclxuICB9XHJcblxyXG4gIGRlbGV0ZVBvc3RpbmcoaWQpIHtcclxuICBcdHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke3RoaXMudXJpfS9wb3N0aW5ncy9kZWxldGUvJHtpZH1gKTtcclxuICB9XHJcblxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCIvKlxcbkFkZCB5b3VyIE5hdGl2ZVNjcmlwdCBzcGVjaWZpYyBzdHlsZXMgaGVyZS5cXG5UbyBsZWFybiBtb3JlIGFib3V0IHN0eWxpbmcgaW4gTmF0aXZlU2NyaXB0IHNlZTpcXG5odHRwczovL2RvY3MubmF0aXZlc2NyaXB0Lm9yZy9hbmd1bGFyL3VpL3N0eWxpbmdcXG4qL1xcblxcbkxhYmVsIHtcXG5cXHR0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG4ubmFtZS1sYWJlbCB7XFxuXFx0bWFyZ2luLXRvcDogMTY7XFxuXFx0bWFyZ2luLWxlZnQ6IDI0O1xcblxcdGNvbG9yOiBibGFjaztcXG5cXHRmb250LXdlaWdodDogNzAwO1xcblxcdGZvbnQtc2l6ZTogMTg7XFxufVxcblxcbi5pbmZvLWxhYmVsIHtcXG5cXHRtYXJnaW4tdG9wOiAxMjtcXG5cXHRtYXJnaW4tbGVmdDogMjQ7XFxuXFx0bWFyZ2luLWJvdHRvbTogMTY7XFxuXFx0Y29sb3I6IGJsYWNrO1xcbn1cXG5cXG4ucG9zdCB7XFxuXFx0Ym9yZGVyLWJvdHRvbS13aWR0aDogMTtcXG5cXHRib3JkZXItY29sb3I6ICNmMWYxZjE7XFxufVxcblxcbi5wb3N0OmhpZ2hsaWdodGVkIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xcbn1cXG5cXG4ucG9zdGluZy1tYXAge1xcblxcdG1hcmdpbi1ib3R0b206IDE2O1xcblxcdGJvcmRlci1yYWRpdXM6IDEwO1xcblxcdC8qYWxpZ24tY29udGVudDogY2VudGVyOyovXFxufVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxTdGFja0xheW91dCBjbGFzcz1cXFwicG9zdFxcXCI+XFxuICA8TGFiZWwgdGV4dFdyYXA9XFxcInRydWVcXFwiIGlkPVxcXCJwb3N0LW5hbWVcXFwiIGNsYXNzPVxcXCJuYW1lLWxhYmVsXFxcIj48L0xhYmVsPlxcbiAgPExhYmVsIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiBpZD1cXFwicG9zdC1pbmZvXFxcIiBjbGFzcz1cXFwiaW5mby1sYWJlbFxcXCI+PC9MYWJlbD5cXG4gIDxJbWFnZSBzcmM9XFxcIn4vaW1nL2N2aWxsZS1tYXAucG5nXFxcIiBzdHJldGNoPVxcXCJub25lXFxcIiBoZWlnaHQ9XFxcIjIyMFxcXCIgd2lkdGg9XFxcIjMwMFxcXCIgY2xhc3M9XFxcInBvc3RpbmctbWFwXFxcIj48L0ltYWdlPlxcbjwvU3RhY2tMYXlvdXQ+XFxuXFxuPCEtLVxcbk9yaWdpbmFsIFdlYiB0ZW1wbGF0ZTpcXG5cXG5cXG4tLT5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFRyYW5zZmVyU2VydmljZSB9IGZyb20gJy4uL2RhdGF0cmFuc2Zlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvcGFnZSc7XHJcbmltcG9ydCB7IExhYmVsIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9sYWJlbCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1wb3N0aW5nJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcG9zdGluZy5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vcG9zdGluZy5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFBvc3RpbmdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIGlkO1xyXG4gIGJ1dHRvblR5cGU7XHJcblxyXG4gIGluZm8gPSB0aGlzLnRyYW5zZmVyU2VydmljZS5nZXREYXRhKClbMF07XHJcblxyXG4gIGluZm9UZXh0ID0gXCJMZWF2aW5nIFwiICsgdGhpcy5pbmZvLmRhdGUgKyBcIiBmcm9tIFwiICsgdGhpcy5pbmZvLnN0YXJ0YWRyICsgXCIgdG8gXCIgKyB0aGlzLmluZm8uZW5kYWRyICsgXCIgZm9yIFwiICsgdGhpcy5pbmZvLmNvc3Q7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0cmFuc2ZlclNlcnZpY2U6IFRyYW5zZmVyU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBwYWdlOiBQYWdlKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICBcdHRoaXMuaWQgPSB0aGlzLmluZm8uaWQ7XHJcbiAgXHR0aGlzLmJ1dHRvblR5cGUgPSB0aGlzLmluZm8uYnV0dG9uVHlwZTtcclxuICAgIGNvbnN0IG5hbWVfbGFiZWwgPSA8TGFiZWw+dGhpcy5wYWdlLmdldFZpZXdCeUlkKCdwb3N0LW5hbWUnKTtcclxuICAgIG5hbWVfbGFiZWwudGV4dCA9IHRoaXMuaW5mby51c2VyO1xyXG4gICAgbmFtZV9sYWJlbC5pZCA9ICdwb3N0LW5hbWUnICsgdGhpcy5pbmZvLmluZGV4O1xyXG4gICAgY29uc3QgaW5mb19sYWJlbCA9IDxMYWJlbD50aGlzLnBhZ2UuZ2V0Vmlld0J5SWQoJ3Bvc3QtaW5mbycpO1xyXG4gICAgaWYodGhpcy5pbmZvLmNhcGFjaXR5ID4gMClcclxuICAgICAgaW5mb19sYWJlbC50ZXh0ID0gXCJPZmZlcmluZyByaWRlIGxlYXZpbmcgXCIgKyB0aGlzLmluZm8uZGF0ZSArIFwiIGZyb20gXCIgKyB0aGlzLmluZm8uc3RhcnRhZHIgKyBcIiB0byBcIiArIHRoaXMuaW5mby5lbmRhZHIgKyBcIiBmb3IgXCIgKyB0aGlzLmluZm8uY29zdDtcclxuICAgIGVsc2VcclxuICAgICAgaW5mb19sYWJlbC50ZXh0ID0gXCJSZXF1ZXN0aW5nIHJpZGUgbGVhdmluZyBcIiArIHRoaXMuaW5mby5kYXRlICsgXCIgZnJvbSBcIiArIHRoaXMuaW5mby5zdGFydGFkciArIFwiIHRvIFwiICsgdGhpcy5pbmZvLmVuZGFkcjtcclxuICAgIGluZm9fbGFiZWwuaWQgPSAncG9zdC1pbmZvJyArIHRoaXMuaW5mby5pbmRleDtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwiY3JlYXRlZCBwb3N0XCIpO1xyXG4gIFx0Ly8gdGhpcy5jcmVhdGUoKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZSgpIHtcclxuICBcdGNvbnNvbGUubG9nKHRoaXMuaW5mbyk7XHJcbiAgXHRjb25zb2xlLmxvZyh0aGlzLmluZm8uaW5kZXgpO1xyXG5cdCAgdmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBkaXYuaWQgPSBcImZlZWRcIisgdGhpcy5pbmZvLmluZGV4O1xyXG4gICAgZGl2LmNsYXNzTmFtZSA9IFwicG9zdGluZy1ibG9ja1wiO1xyXG4gICAgZGl2LnN0eWxlLmRpc3BsYXkgPSBcImFsbFwiO1xyXG4gICAgZGl2LnN0eWxlLm1hcmdpbiA9IFwiYXV0b1wiO1xyXG4gICAgZGl2LnN0eWxlLm1hcmdpblRvcCA9IFwiMC41ZW1cIjtcclxuICAgIGRpdi5zdHlsZS5tYXJnaW5Cb3R0b20gPSBcIjAuNWVtXCI7XHJcblxyXG4gICAgLy9kaXYuc3R5bGUucGFkZGluZ0xlZnQgPSBcIjIwJVwiO1xyXG4gICAgLy9kaXYuc3R5bGUud2lkdGggPSBcIjQwJVwiO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JpZ2ZlZWQnKS5hcHBlbmRDaGlsZChkaXYpO1xyXG4gICAgXHJcbiAgICB2YXIgZGl2dGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmVlZCcrIHRoaXMuaW5mby5pbmRleCkuYXBwZW5kQ2hpbGQoZGl2dGV4dCk7XHJcbiAgICBkaXZ0ZXh0LmlkID0gXCJ0ZXh0XCIrIHRoaXMuaW5mby5pbmRleDtcclxuICAgIFxyXG4gICAgdmFyIGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJJTUdcIik7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dCcrIHRoaXMuaW5mby5pbmRleCkuYXBwZW5kQ2hpbGQoaW1nKTtcclxuICAgIGltZy5pZCA9IFwicGZwXCIrIHRoaXMuaW5mby5pbmRleDtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGZwXCIpO1xyXG4gICAgaW1nLmNsYXNzTmFtZSA9IFwicGZwXCI7XHJcbiAgICAoaW1nIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnNyYyA9IFwic3JjL2ltZy9zYW1wbGVfcHJvZmlsZS5qcGdcIjtcclxuICAgIFxyXG4gICAgdmFyIGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0JysgdGhpcy5pbmZvLmluZGV4KS5hcHBlbmRDaGlsZChoZWFkZXIpO1xyXG4gICAgaGVhZGVyLmlkID0gXCJuYW1lXCIrIHRoaXMuaW5mby5pbmRleDtcclxuICAgIGhlYWRlci5pbm5lckhUTUwgPSB0aGlzLmluZm8udXNlcjtcclxuICAgIGhlYWRlci5jbGFzc05hbWUgPSBcImhlYWRlclwiO1xyXG4gICAgXHJcbiAgICB2YXIgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0JysgdGhpcy5pbmZvLmluZGV4KS5hcHBlbmRDaGlsZChwKTtcclxuICAgIHAuaWQgPSBcImRldGFpbHNcIisgdGhpcy5pbmZvLmluZGV4O1xyXG4gICAgcC5pbm5lckhUTUwgPSBcIkxlYXZpbmcgXCIgKyB0aGlzLmluZm8uZGF0ZSArIFwiIGZyb20gXCIgKyB0aGlzLmluZm8uc3RhcnRhZHIgKyBcIiB0byBcIiArIHRoaXMuaW5mby5lbmRhZHIgKyBcIiBmb3IgXCIgKyB0aGlzLmluZm8uY29zdDtcclxuICAgIHAuY2xhc3NOYW1lID0gXCJkZXRhaWxzXCI7XHJcbiAgICBcclxuICAgIHZhciBtYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiSU1HXCIpXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dCcrIHRoaXMuaW5mby5pbmRleCkuYXBwZW5kQ2hpbGQobWFwKTtcclxuICAgIG1hcC5pZCA9IFwibWFwXCIrIHRoaXMuaW5mby5pbmRleDtcclxuICAgIG1hcC5jbGFzc05hbWUgPSBcImRlc3RpbmF0aW9uXCI7XHJcbiAgICAobWFwIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnNyYyA9IFwic3JjL2ltZy92aXJnaW5pYV9tYXAuanBnXCI7XHJcbiAgICBcclxuICAgIHZhciBjb25uZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0JysgdGhpcy5pbmZvLmluZGV4KS5hcHBlbmRDaGlsZChjb25uZWN0KTtcclxuICAgIGNvbm5lY3QuaWQgPSB0aGlzLmJ1dHRvblR5cGUgKyB0aGlzLmluZm8uaW5kZXg7XHJcbiAgICBjb25uZWN0LmNsYXNzTmFtZSA9IFwicG9zdGluZy1idXR0b25cIjtcclxuICAgIGNvbm5lY3QuaW5uZXJIVE1MID0gdGhpcy5pbmZvLmJ1dHRvblR5cGU7XHJcbiAgICBjb25uZWN0LnN0eWxlLm1hcmdpblJpZ2h0ID0gXCIxZW1cIjtcclxuICAgIGNvbm5lY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlOkV2ZW50KSA9PiB0aGlzLmNsaWNrZWQodGhpcy5pbmZvLmJ1dHRvblR5cGUpKTtcclxuICB9XHJcbiAgY2xpY2tlZChidXR0b25UeXBlKXtcclxuICBcdHRoaXMudHJhbnNmZXJTZXJ2aWNlLnNldERhdGEodGhpcy5pbmZvKTtcclxuICBcdGlmKGJ1dHRvblR5cGUgPT0gXCJDb25uZWN0XCIpXHJcblx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKCcvY29ubmVjdCcpO1xyXG5cdGVsc2VcclxuXHRcdHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoJy91cGRhdGUnKTtcclxuICB9XHJcblxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCIvKiBBZGQgbW9iaWxlIHN0eWxlcyBmb3IgdGhlIGNvbXBvbmVudCBoZXJlLiAgKi9cXHJcXG4uaGVhZGVye1xcclxcbiAgICBtYXJnaW4tdG9wOiA1MDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDIyO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDIyO1xcclxcblxcdGNvbG9yOiBibGFjaztcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgZm9udC1zaXplOiAyNDtcXHJcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG59XFxyXFxuLnN1Ym1pdC1idG57XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6I2FjMDBlNjtcXHJcXG4gICAgd2lkdGg6IDc1JTtcXHJcXG4gICAgaGVpZ2h0OiAxNzBweDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJTZWdvZSBVSVxcXCIsQXJpYWwsc2Fucy1zZXJpZjtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBtYXJnaW4tdG9wOiAyMDtcXHJcXG59XFxyXFxuLnRleHQtZmllbGR7XFxyXFxuICAgIHdpZHRoOiA4NSU7XFxyXFxuICAgIG1hcmdpbi10b3A6IDIwO1xcclxcbiAgICBjb2xvcjojNjk2OTY5XFxyXFxufVxcclxcblxcclxcbi5jbG9zZS1idXR0b24tY29udGFpbmVyIHtcXHJcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0bGVmdDogMDtcXHJcXG59XFxyXFxuLmNsb3NlIHtcXHJcXG5cXHRtYXJnaW46IDEwO1xcclxcblxcdGZvbnQtc2l6ZTogNDA7XFxyXFxuXFx0d2lkdGg6IDQ4O1xcclxcbiAgICBoZWlnaHQ6IDQ4O1xcclxcbiAgICBjb2xvcjogYmxhY2tcXHJcXG59XFxyXFxuXFxyXFxuLmVycm9yLW1lc3NhZ2Uge1xcclxcblxcdGNvbG9yOiByZWQ7XFxyXFxuXFx0Zm9udC1zaXplOiAxNjtcXHJcXG5cXHR2aXNpYmlsaXR5OiBjb2xsYXBzZTtcXHJcXG59XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPFN0YWNrbGF5b3V0PlxcclxcbiAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImNsb3NlLWJ1dHRvbi1jb250YWluZXJcXFwiIG9yaWVudGF0aW9uPVxcXCJob3Jpem9udGFsXFxcIj5cXHJcXG4gICAgICAgIDxMYWJlbCB0ZXh0PVxcXCImdGltZXM7XFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiICh0YXApPVxcXCJjbG9zZSgnY2FuY2VsJylcXFwiPjwvTGFiZWw+XFxyXFxuICAgIDwvU3RhY2tMYXlvdXQ+XFxyXFxuICAgIDxMYWJlbCBjbGFzcz1cXFwiaGVhZGVyXFxcIiB0ZXh0PVxcXCJQbGVhc2UgcmUtZW50ZXIgeW91ciBwYXNzd29yZFxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiPjwvTGFiZWw+XFxyXFxuICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiaW5wdXQtZmllbGRcXFwiPlxcclxcbiAgICAgICAgPFRleHRGaWVsZCAjdmFsIFsobmdNb2RlbCldPVxcXCJwYXNzd29yZFxcXCIgc2VjdXJlPVxcXCJ0cnVlXFxcIiBhdXRvY29ycmVjdD1cXFwiZmFsc2VcXFwiIHJldHVybktleVR5cGU9XFxcImRvbmVcXFwiIGNsYXNzPVxcXCJ0ZXh0LWZpZWxkXFxcIj48L1RleHRGaWVsZD5cXHJcXG4gICAgPC9TdGFja0xheW91dD5cXHJcXG4gICAgPExhYmVsIHRleHQ9XFxcIlRoZSBwYXNzd29yZCB5b3UgZW50ZXJlZCB3YXMgaW5jb3JyZWN0XFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgY2xhc3M9XFxcImVycm9yLW1lc3NhZ2VcXFwiICNlcnJvck1lc3NhZ2U+PC9MYWJlbD5cXHJcXG5cXHJcXG4gICAgPEJ1dHRvbiB0ZXh0PVxcXCJTdWJtaXRcXFwiICh0YXApPVxcXCJzdWJtaXQocGFzc3dvcmQpXFxcIiBjbGFzcz1cXFwic3VibWl0LWJ0blxcXCI+PC9CdXR0b24+XFxyXFxuXFxyXFxuPC9TdGFja2xheW91dD5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q29udGFpbmVyUmVmLCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTW9kYWxEaWFsb2dQYXJhbXMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZGlyZWN0aXZlcy9kaWFsb2dzXCI7XHJcbmltcG9ydCAqIGFzIGZpcmViYXNlIGZyb20gJ25hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2UnO1xyXG5pbXBvcnQgeyBMb2dpbmNoZWNrU2VydmljZSB9IGZyb20gJy4uL2xvZ2luY2hlY2suc2VydmljZS50bnMnO1xyXG5pbXBvcnQgeyBUcmFuc2ZlclNlcnZpY2UgfSBmcm9tICcuLi9kYXRhdHJhbnNmZXIuc2VydmljZSc7XHJcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9nc1wiO1xyXG5pbXBvcnQgeyBTZXR0aW5nc2Zvcm1Db21wb25lbnQgfSBmcm9tICcuLi9zZXR0aW5nc2Zvcm0vc2V0dGluZ3Nmb3JtLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1vZGFsRGlhbG9nU2VydmljZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9kaXJlY3RpdmVzL2RpYWxvZ3NcIjtcclxuaW1wb3J0IHsgTGFiZWwgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2xhYmVsJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1yZWF1dGgnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9yZWF1dGguY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3JlYXV0aC5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFJlYXV0aENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFyYW1zOiBNb2RhbERpYWxvZ1BhcmFtcywgcHJpdmF0ZSB0cmFuc2ZlclNlcnZpY2U6IFRyYW5zZmVyU2VydmljZSwgcHJpdmF0ZSBsb2dpbmNoZWNrU2VydmljZTogTG9naW5jaGVja1NlcnZpY2UsIFxyXG4gIFx0cHJpdmF0ZSB2Y1JlZjogVmlld0NvbnRhaW5lclJlZiwgcHJpdmF0ZSBtb2RhbDogTW9kYWxEaWFsb2dTZXJ2aWNlKSB7IH1cclxuXHJcbiAgQFZpZXdDaGlsZChcImVycm9yTWVzc2FnZVwiLCB7IHN0YXRpYzogdHJ1ZSB9KSBlbTogRWxlbWVudFJlZjtcclxuICBmaWVsZDtcclxuICB1c2VySWQ7XHJcbiAgdXNlckVtYWlsO1xyXG4gIHBhc3N3b3JkO1xyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICBcdHRoaXMuZmllbGQgPSB0aGlzLnRyYW5zZmVyU2VydmljZS5nZXREYXRhKCk7XHJcbiAgXHR0aGlzLnVzZXJJZCA9IHRoaXMubG9naW5jaGVja1NlcnZpY2UuZ2V0VXNlcigpO1xyXG4gIFx0ZmlyZWJhc2UuZ2V0Q3VycmVudFVzZXIoKS50aGVuKCh1c2VyKSA9PiB7XHJcbiAgXHRcdHRoaXMudXNlckVtYWlsID0gdXNlci5lbWFpbDtcclxuICBcdH0pXHJcbiAgfVxyXG5cclxuICBjbG9zZShyZXMpIHtcclxuICBcdGxldCBlcnJvck1lc3NhZ2UgPSA8TGFiZWw+IHRoaXMuZW0ubmF0aXZlRWxlbWVudDtcclxuXHRlcnJvck1lc3NhZ2Uuc3R5bGUudmlzaWJpbGl0eSA9ICdjb2xsYXBzZSc7XHJcblx0dGhpcy5wYXNzd29yZCA9ICcnO1xyXG4gICAgdGhpcy5wYXJhbXMuY2xvc2VDYWxsYmFjayhyZXMpO1xyXG4gIH1cclxuXHJcbiAgc3VibWl0KHBhc3N3b3JkKSB7XHJcbiAgXHRmaXJlYmFzZS5yZWF1dGhlbnRpY2F0ZSh7XHJcblx0ICAgIHR5cGU6IGZpcmViYXNlLkxvZ2luVHlwZS5QQVNTV09SRCwgLy8gb3IgR09PR0xFIC8gRkFDRUJPT0tcclxuXHQgICAgLy8gdGhpcyBpcyBvbmx5IHJlcXVpcmVkIGluIHR5cGUgPT0gUEFTU1dPUkRcclxuXHQgICAgcGFzc3dvcmRPcHRpb25zOiB7XHJcblx0ICAgICAgZW1haWw6IHRoaXMudXNlckVtYWlsLFxyXG5cdCAgICAgIHBhc3N3b3JkOiB0aGlzLnBhc3N3b3JkXHJcblx0ICAgIH1cclxuXHQgIH0pLnRoZW4oXHJcblx0ICAgICAgKHJlc3VsdCkgPT4ge1xyXG5cdCAgICAgICAgLy8geW91IGNhbiBub3cgc2FmZWx5IGRlbGV0ZSB0aGUgYWNjb3VudCAvIGNoYW5nZSB0aGUgcGFzc3dvcmQsIGV0Y1xyXG5cdCAgICAgICAgbGV0IG9wdGlvbnMgPSB7XHJcblx0XHQgICAgICAgIGNvbnRleHQ6IHt9LFxyXG5cdFx0ICAgICAgICBmdWxsc2NyZWVuOiB0cnVlLFxyXG5cdFx0ICAgICAgICB2aWV3Q29udGFpbmVyUmVmOiB0aGlzLnZjUmVmXHJcblx0XHQgICAgICAgIC8vIGFuaW1hdGVkOiB0cnVlLFxyXG5cdFx0ICAgICAgICAvLyB0cmFuc2l0aW9uOiB7IG5hbWU6IFwic2xpZGVUb3BcIiB9XHJcblx0XHQgICAgfTtcclxuXHRcdCAgICBsZXQgZXJyb3JNZXNzYWdlID0gPExhYmVsPiB0aGlzLmVtLm5hdGl2ZUVsZW1lbnQ7XHJcblx0ICAgICAgICBlcnJvck1lc3NhZ2Uuc3R5bGUudmlzaWJpbGl0eSA9ICdjb2xsYXBzZSc7XHJcblx0XHQgICAgdGhpcy50cmFuc2ZlclNlcnZpY2Uuc2V0RGF0YSh0aGlzLmZpZWxkKTtcclxuXHRcdCAgICB0aGlzLnBhc3N3b3JkID0gJyc7XHJcblx0ICAgIFx0dGhpcy5tb2RhbC5zaG93TW9kYWwoU2V0dGluZ3Nmb3JtQ29tcG9uZW50LCBvcHRpb25zKS50aGVuKHJlcyA9PiB7XHJcblx0XHQgICAgXHRpZihyZXMgPT0gJ3VwZGF0ZScpIHtcclxuXHRcdCAgICBcdFx0dGhpcy5jbG9zZSgndXBkYXRlJyk7XHJcblx0XHQgICAgXHR9XHJcblx0XHQgICAgfSk7XHJcblx0ICAgICAgfSxcclxuXHQgICAgICAoZXJyb3IpID0+IHtcclxuXHQgICAgICAgIGxldCBlcnJvck1lc3NhZ2UgPSA8TGFiZWw+IHRoaXMuZW0ubmF0aXZlRWxlbWVudDtcclxuXHQgICAgICAgIGVycm9yTWVzc2FnZS5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xyXG5cdCAgICAgIH1cclxuXHQgICk7XHJcbiAgfVxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCIvKiBBZGQgbW9iaWxlIHN0eWxlcyBmb3IgdGhlIGNvbXBvbmVudCBoZXJlLiAgKi9cXG5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8IS0tIDxhcHAtbmF2aWdhdGlvbj48L2FwcC1uYXZpZ2F0aW9uPiAtLT5cXHJcXG48U3RhY2tMYXlvdXQ+XFxyXFxuICA8TGFiZWwgdGV4dD1cXFwic2VhcmNoIHdvcmtzXFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCI+PC9MYWJlbD5cXHJcXG4gIDxMYWJlbCB0ZXh0PVxcXCJUaGlzIGlzIGEgbWlncmF0ZWQgY29tcG9uZW50XFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCI+PC9MYWJlbD5cXHJcXG4gIDxMYWJlbCB0ZXh0PVxcXCJVcGRhdGUgaXQgdG8gcHJvdmlkZSB0aGUgVUkgZWxlbWVudHMgcmVxdWlyZWQgaW4geW91ciBtb2JpbGUgYXBwXFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCI+PC9MYWJlbD5cXHJcXG48L1N0YWNrTGF5b3V0PlwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXNlYXJjaCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zZWFyY2guY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zZWFyY2guY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFNlYXJjaENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLypcXHJcXG5BZGQgeW91ciBOYXRpdmVTY3JpcHQgc3BlY2lmaWMgc3R5bGVzIGhlcmUuXFxyXFxuVG8gbGVhcm4gbW9yZSBhYm91dCBzdHlsaW5nIGluIE5hdGl2ZVNjcmlwdCBzZWU6XFxyXFxuaHR0cHM6Ly9kb2NzLm5hdGl2ZXNjcmlwdC5vcmcvYW5ndWxhci91aS9zdHlsaW5nXFxyXFxuKi9cXHJcXG5cXHJcXG4jSGVhZGVyIHtcXHJcXG4gICAgY29sb3I6YmxhY2s7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjQ7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiU2Vnb2UgVUlcXFwiLEFyaWFsLHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbiNsaXN0VmlldyB7XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTogMjA7XFxyXFxufVxcclxcblxcclxcbi51cGRhdGUge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgY29sb3I6ICNhYzAwZTY7XFxyXFxuICAgIGJvcmRlci13aWR0aDogMTtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiAjYWMwMGU2O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGZsb2F0OiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbjogYXV0bzsgXFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiU2Vnb2UgVUlcXFwiLEFyaWFsLHNhbnMtc2VyaWY7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDE1O1xcclxcbiAgICB3aWR0aDogMjAwO1xcclxcbiAgICBoZWlnaHQ6IDQwO1xcclxcbn1cXHJcXG4udXBkYXRlOmhpZ2hsaWdodGVkIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZTZmZjtcXHJcXG59XFxyXFxuLnBheW1lbnRzIHtcXHJcXG5cXHRjb2xvcjogYmxhY2s7XFxyXFxuXFx0bWFyZ2luLXRvcDogMTI7XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTogMTI7XFxyXFxuXFx0bWFyZ2luLWxlZnQ6IDE4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgICBmb250LXNpemU6IDE1O1xcclxcbn1cXHJcXG4ubG9nb3V0IHtcXHJcXG5cXHRjb2xvcjogI2FjMDBlNjtcXHJcXG5cXHRtYXJnaW4tdG9wOiAxMjtcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiAxMjtcXHJcXG5cXHRtYXJnaW4tbGVmdDogMTg7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gICAgZm9udC1zaXplOiAxNTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi1saXN0LXZpZXcge1xcclxcblxcdG1hcmdpbi10b3A6IDM2O1xcclxcblxcdGhlaWdodDogMTAwO1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbS1saXN0LXZpZXcge1xcclxcblxcdGhlaWdodDogMjc1O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvZmlsZS1waWN0dXJlIHtcXHJcXG5cXHRoZWlnaHQ6IDEwMDtcXHJcXG5cXHR3aWR0aDogMTAwO1xcclxcblxcdG1hcmdpbi10b3A6IDEwO1xcclxcblxcdG1hcmdpbi1ib3R0b206IDg7XFxyXFxuXFx0LypiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyovXFxyXFxufVxcclxcblxcclxcbi5pbWctcm91bmRlZCB7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlci1sYWJlbCB7XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTogNTtcXHJcXG5cXHRmb250LXNpemU6IDE1O1xcclxcblxcdGNvbG9yOiAjNDI4NWY0O1xcclxcbn1cXHJcXG5cXHJcXG4uYm9sZCB7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDUwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmFjdGl2aXR5LWluZGljYXRvciB7XFxyXFxuICBjb2xvcjogI2FjMDBlNjtcXHJcXG4gIG1hcmdpbjogMjUlO1xcclxcbn1cXHJcXG5cXHJcXG4udmFsdWUtbGFiZWwge1xcclxcblxcdG1hcmdpbi1sZWZ0OiAxODtcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiAxMDtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICBmb250LXNpemU6IDE4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbn1cXHJcXG4udGl0bGUtbGFiZWwge1xcclxcblxcdG1hcmdpbi10b3A6IDE2O1xcclxcblxcdG1hcmdpbi1sZWZ0OiAxODtcXHJcXG5cXHRjb2xvcjogIzY5Njk2OTtcXHJcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG59XFxyXFxuXFxyXFxuLnN0YWNrLWxheW91dHtcXHJcXG4gICAgaGVpZ2h0OjEwMCVcXHJcXG59XFxyXFxuLmFjdGl2aXR5LWluZGljYXRvcntcXHJcXG4gICAgaGVpZ2h0OiA1MCU7XFxyXFxufVxcclxcbkxpc3RWaWV3IHtcXHJcXG4gICAgc2VwYXJhdG9yLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG59XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPCEtLSA8YXBwLW5hdmlnYXRpb24+PC9hcHAtbmF2aWdhdGlvbj4gLS0+XFxyXFxuPFN0YWNrbGF5b3V0IGhlaWdodD1cXFwiMTAwJVxcXCI+XFxyXFxuICAgIDxTdGFja0xheW91dCAjc2V0dGluZ3NDb250YWluZXI+XFxyXFxuICAgICAgPCEtLSA8TGFiZWwgaWQ9IFxcXCJIZWFkZXJcXFwiIHRleHQ9XFxcIkFjY291bnQgU2V0dGluZ3NcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIj48L0xhYmVsPiAtLT5cXHJcXG4gICAgICA8SW1hZ2Ugc3JjPVxcXCJ7eyBwcm9maWxlIH19XFxcIiBzdHJldGNoPVxcXCJhc3BlY3RGaXRcXFwiIGNsYXNzPVxcXCJpbWctcm91bmRlZCBwcm9maWxlLXBpY3R1cmVcXFwiICh0YXApPVxcXCJ1cGxvYWRQZnAoKVxcXCI+PC9JbWFnZT5cXHJcXG4gICAgICA8TGFiZWwgdGV4dD1cXFwiQ2hhbmdlIFBob3RvXFxcIiBjbGFzcz1cXFwiaGVhZGVyLWxhYmVsIGJvbGRcXFwiICh0YXApPVxcXCJ1cGxvYWRQZnAoKVxcXCI+PC9MYWJlbD5cXHJcXG5cXHJcXG4gICAgICA8TGlzdFZpZXcgW2l0ZW1zXT1cXFwiZmllbGRzXFxcIiAjbGlzdFZpZXcgaWQ9XFxcImxpc3RWaWV3XFxcIiAoaXRlbVRhcCk9XFxcInNob3dNb2RhbCgkZXZlbnQpXFxcIiBjbGFzcz1cXFwiaXRlbS1saXN0LXZpZXdcXFwiPlxcclxcbiAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1pdGVtPVxcXCJpdGVtXFxcIiBsZXQtaT1cXFwiaW5kZXhcXFwiIGxldC1vZGQ9XFxcIm9kZFxcXCIgbGV0LWV2ZW49XFxcImV2ZW5cXFwiPlxcclxcbiAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcInN0YWNrLWxheW91dFxcXCI+XFxyXFxuICAgICAgICAgICAgPExhYmVsIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiBjbGFzcz1cXFwidGl0bGUtbGFiZWxcXFwiIFt0ZXh0XT1cXFwiaXRlbS5sYWJlbFxcXCI+PC9MYWJlbD5cXHJcXG4gICAgICAgICAgICA8TGFiZWwgdGV4dFdyYXA9XFxcInRydWVcXFwiIGNsYXNzPVxcXCJ2YWx1ZS1sYWJlbFxcXCIgW3RleHRdPVxcXCJpdGVtLnZhbHVlXFxcIj48L0xhYmVsPlxcclxcbiAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcclxcbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXHJcXG4gICAgICA8L0xpc3RWaWV3PlxcclxcbiAgICAgIDwhLS0gPFJhZERhdGFGb3JtIHRrRXhhbXBsZVRpdGxlIHRrVG9nZ2xlTmF2QnV0dG9uIFtzb3VyY2VdPVxcXCJwZXJzb25cXFwiPjwvUmFkRGF0YUZvcm0+ICAgLS0+XFxyXFxuICAgICAgPCEtLSA8QnV0dG9uIGNsYXNzPVxcXCJVcGRhdGVcXFwiICB0ZXh0PVxcXCJVcGRhdGUgU2V0dGluZ3NcXFwiPjwvQnV0dG9uPiAtLT5cXHJcXG5cXHJcXG4gICAgICA8TGlzdFZpZXcgW2l0ZW1zXT1cXFwiYnV0dG9uc1xcXCIgI2xpc3RWaWV3U2Vjb25kIChpdGVtVGFwKT1cXFwicm91dGUoJGV2ZW50KVxcXCIgKHNldHVwSXRlbVZpZXcpPVxcXCJzZXR1cEl0ZW1WaWV3KCRldmVudClcXFwiIGNsYXNzPVxcXCJidG4tbGlzdC12aWV3XFxcIj5cXHJcXG4gICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtaXRlbT1cXFwiaXRlbVxcXCIgbGV0LWk9XFxcImluZGV4XFxcIiBsZXQtb2RkPVxcXCJvZGRcXFwiIGxldC1ldmVuPVxcXCJldmVuXFxcIiBsZXQtcGF5bWVudHM9XFxcInBheW1lbnRzXFxcIiBsZXQtbG9nb3V0PVxcXCJsb2dvdXRcXFwiPlxcclxcbiAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcInN0YWNrLWxheW91dFxcXCI+XFxyXFxuICAgICAgICAgICAgPExhYmVsIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiBbdGV4dF09XFxcIml0ZW1cXFwiIFtjbGFzcy5wYXltZW50c109XFxcInBheW1lbnRzXFxcIiBbY2xhc3MubG9nb3V0XT1cXFwibG9nb3V0XFxcIj48L0xhYmVsPlxcclxcbiAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcclxcbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXHJcXG4gICAgICA8L0xpc3RWaWV3PlxcclxcbjwhLS0gICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJwYXltZW50cy1jb250YWluZXJcXFwiICh0YXApPVxcXCJ0b1BheW1lbnRzKClcXFwiPlxcclxcbiAgICAgICAgPExhYmVsIGNsYXNzPVxcXCJwYXltZW50c1xcXCIgdGV4dD1cXFwiUGF5bWVudHNcXFwiPjwvTGFiZWw+XFxyXFxuICAgICAgPC9TdGFja0xheW91dD5cXHJcXG4gICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImxvZ291dC1jb250YWluZXJcXFwiICh0YXApPVxcXCJsb2dPdXQoKVxcXCI+XFxyXFxuICAgICAgICA8TGFiZWwgY2xhc3M9XFxcImxvZ291dFxcXCIgdGV4dD1cXFwiTG9nIG91dFxcXCI+PC9MYWJlbD5cXHJcXG4gICAgICA8L1N0YWNrTGF5b3V0PiAtLT5cXHJcXG4gICAgPC9TdGFja0xheW91dD5cXHJcXG5cXHJcXG48QWN0aXZpdHlJbmRpY2F0b3IgI2FjdGl2aXR5SW5kaWNhdG9yIGJ1c3k9XFxcInRydWVcXFwiIHdpZHRoPVxcXCI0MFxcXCIgIGNsYXNzPVxcXCJhY3Rpdml0eS1pbmRpY2F0b3JcXFwiPlxcclxcbiAgPC9BY3Rpdml0eUluZGljYXRvcj5cXHJcXG48L1N0YWNrbGF5b3V0PlwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG4vLyBpbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgTG9naW5jaGVja1NlcnZpY2UgfSBmcm9tICcuLi9sb2dpbmNoZWNrLnNlcnZpY2UudG5zJztcclxuaW1wb3J0ICogYXMgZmlyZWJhc2UgZnJvbSAnbmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZSc7XHJcbmltcG9ydCB7IG1lc3NhZ2luZyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlL21lc3NhZ2luZ1wiO1xyXG5pbXBvcnQgeyBsb2dvdXQgYXMgZmJMb2dvdXQgfSBmcm9tICduYXRpdmVzY3JpcHQtZmFjZWJvb2snO1xyXG5pbXBvcnQgKiBhcyBpbWFnZXBpY2tlciBmcm9tIFwibmF0aXZlc2NyaXB0LWltYWdlcGlja2VyXCI7XHJcbmltcG9ydCAqIGFzIGZzIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2ZpbGUtc3lzdGVtXCI7XHJcbmltcG9ydCB7IGlzQW5kcm9pZCwgaXNJT1MsIGRldmljZSwgc2NyZWVuIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm1cIjtcclxuaW1wb3J0ICogYXMgYmdodHRwIGZyb20gJ25hdGl2ZXNjcmlwdC1iYWNrZ3JvdW5kLWh0dHAnO1xyXG5pbXBvcnQgeyBJbWFnZUNyb3BwZXIgfSBmcm9tICduYXRpdmVzY3JpcHQtaW1hZ2Vjcm9wcGVyJztcclxuaW1wb3J0ICogYXMgaW1hZ2VTb3VyY2UgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvaW1hZ2Utc291cmNlXCI7XHJcbmltcG9ydCB7IEFjdGl2aXR5SW5kaWNhdG9yIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9hY3Rpdml0eS1pbmRpY2F0b3InO1xyXG5pbXBvcnQgeyBTdGFja0xheW91dCB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvbGF5b3V0cy9zdGFjay1sYXlvdXQnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlQXJyYXkgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS1hcnJheSc7XHJcbmltcG9ydCB7IFRyYW5zZmVyU2VydmljZSB9IGZyb20gJy4uL2RhdGF0cmFuc2Zlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgcG9zdCB9IGZyb20gJ3NlbGVuaXVtLXdlYmRyaXZlci9odHRwJztcclxuaW1wb3J0IHsgTW9kYWxEaWFsb2dQYXJhbXMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZGlyZWN0aXZlcy9kaWFsb2dzXCI7XHJcbmltcG9ydCB7IE1vZGFsRGlhbG9nU2VydmljZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9kaXJlY3RpdmVzL2RpYWxvZ3NcIjtcclxuaW1wb3J0IHsgU2V0dGluZ3Nmb3JtQ29tcG9uZW50IH0gZnJvbSAnLi4vc2V0dGluZ3Nmb3JtL3NldHRpbmdzZm9ybS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBSZWF1dGhDb21wb25lbnQgfSBmcm9tICcuLi9yZWF1dGgvcmVhdXRoLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFNldHVwSXRlbVZpZXdBcmdzIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2RpcmVjdGl2ZXNcIjtcclxuXHJcblxyXG5jbGFzcyBMYWJlbCB7XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgbGFiZWw6IFN0cmluZywgcHVibGljIHZhbHVlOiBzdHJpbmcsIHB1YmxpYyBmaXJzdE5hbWU6IHN0cmluZywgcHVibGljIGxhc3ROYW1lOiBzdHJpbmcpIHsgfVxyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgc2VsZWN0b3I6IFwiYXBwLXNldHRpbmdzXCIsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3NldHRpbmdzLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9zZXR0aW5ncy5jb21wb25lbnQuY3NzJ11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBTZXR0aW5nc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zLCBwcml2YXRlIHBhZ2U6IFBhZ2UsIHByaXZhdGUgbG9naW5jaGVja1NlcnZpY2U6IExvZ2luY2hlY2tTZXJ2aWNlLCBwcml2YXRlIHRyYW5zZmVyU2VydmljZTogVHJhbnNmZXJTZXJ2aWNlLFxyXG4gIFx0cHJpdmF0ZSB2Y1JlZjogVmlld0NvbnRhaW5lclJlZiwgcHJpdmF0ZSBtb2RhbDogTW9kYWxEaWFsb2dTZXJ2aWNlKSB7IH1cclxuXHJcbiAgQFZpZXdDaGlsZChcImFjdGl2aXR5SW5kaWNhdG9yXCIsIHsgc3RhdGljOiB0cnVlIH0pIGFpOiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoXCJzZXR0aW5nc0NvbnRhaW5lclwiLCB7IHN0YXRpYzogdHJ1ZSB9KSBzYzogRWxlbWVudFJlZjtcclxuXHJcbiAgcHJvZmlsZSA9IFwifi9pbWcvc2FtcGxlX3Byb2ZpbGUucG5nXCI7XHJcbiAgdXNlcklkO1xyXG4gIGZpZWxkcztcclxuICBpbWFnZUNyb3BwZXI6IEltYWdlQ3JvcHBlcjtcclxuICBpbWFnZVNvdXJjZTogaW1hZ2VTb3VyY2UuSW1hZ2VTb3VyY2U7XHJcbiAgYnV0dG9ucztcclxuICBwYXltZW50TGlzdDtcclxuICBsb2dvdXRMaXN0O1xyXG4gIHVzZXI7XHJcbiAgdG9rZW47XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG5cdHRoaXMuaW1hZ2VDcm9wcGVyID0gbmV3IEltYWdlQ3JvcHBlcigpO1xyXG5cdHRoaXMubG9hZFZpZXdzKCk7XHJcblxyXG5cdFx0bGV0IGFjdGl2aXR5SW5kaWNhdG9yID0gPEFjdGl2aXR5SW5kaWNhdG9yPiB0aGlzLmFpLm5hdGl2ZUVsZW1lbnQ7XHJcblx0ICAgIGFjdGl2aXR5SW5kaWNhdG9yLnN0eWxlLnZpc2liaWxpdHkgPSAnY29sbGFwc2UnXHJcblx0fVxyXG5cclxuXHRsb2FkVmlld3MoKXtcclxuXHRcdHRoaXMucGF5bWVudExpc3QgPSBuZXcgT2JzZXJ2YWJsZUFycmF5PFN0cmluZz4oKTtcclxuXHRcdHRoaXMucGF5bWVudExpc3QucHVzaCgnUGF5bWVudCBtZXRob2RzJyk7XHJcblx0XHR0aGlzLmxvZ291dExpc3QgPSBuZXcgT2JzZXJ2YWJsZUFycmF5PFN0cmluZz4oKTtcclxuXHRcdHRoaXMubG9nb3V0TGlzdC5wdXNoKCdMb2cgb3V0Jyk7XHJcblx0XHR0aGlzLmJ1dHRvbnMgPSBuZXcgT2JzZXJ2YWJsZUFycmF5PFN0cmluZz4oKTtcclxuXHRcdHRoaXMuYnV0dG9ucy5wdXNoKCdQYXltZW50IG1ldGhvZHMnKTtcclxuXHRcdHRoaXMuYnV0dG9ucy5wdXNoKCdMb2cgb3V0Jyk7XHJcblxyXG5cdFx0dGhpcy51c2VySWQgPSB0aGlzLmxvZ2luY2hlY2tTZXJ2aWNlLmdldFVzZXIoKTtcclxuXHRcdGNvbnN0IHVzZXJEb2N1bWVudCA9IGZpcmViYXNlLmZpcmVzdG9yZS5jb2xsZWN0aW9uKCd1c2VycycpLmRvYyh0aGlzLnVzZXJJZCk7XHJcblx0XHR0aGlzLmZpZWxkcyA9IG5ldyBPYnNlcnZhYmxlQXJyYXk8TGFiZWw+KCk7XHJcblx0XHR0aGlzLnVwZGF0ZUxpc3RWaWV3KCk7XHJcblx0XHRmaXJlYmFzZS5nZXRDdXJyZW50VXNlcigpLnRoZW4oKHVzZXIpID0+IHtcclxuXHRcdFx0dGhpcy51c2VyID0gdXNlcjtcclxuXHRcdFx0aWYodXNlci5waG90b1VSTCAhPSBudWxsKSB7XHJcblx0XHRcdFx0dGhpcy5wcm9maWxlID0gdXNlci5waG90b1VSTDtcclxuXHRcdFx0XHRpZih1c2VyLnBob3RvVVJMLnN1YnN0cmluZygwLCAyNykgPT0gJ2h0dHBzOi8vZ3JhcGguZmFjZWJvb2suY29tLycpXHJcblx0XHRcdFx0XHR0aGlzLnByb2ZpbGUgKz0gJz9oZWlnaHQ9MzAwJztcclxuXHRcdFx0fVxyXG5cdFx0fSlcclxuXHR9XHJcblxyXG5cdHNldHVwSXRlbVZpZXcoYXJnczogU2V0dXBJdGVtVmlld0FyZ3MpIHtcclxuXHRcdGFyZ3Mudmlldy5jb250ZXh0LnBheW1lbnRzID0gKGFyZ3MuaW5kZXggPT0gMCk7XHJcblx0XHRhcmdzLnZpZXcuY29udGV4dC5sb2dvdXQgPSAoYXJncy5pbmRleCA9PSAxKTtcclxuXHRcdGFyZ3Mudmlldy5jb250ZXh0LmV2ZW4gPSAoYXJncy5pbmRleCAlIDIgPT09IDApO1xyXG5cdFx0YXJncy52aWV3LmNvbnRleHQub2RkID0gKGFyZ3MuaW5kZXggJSAyID09PSAxKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZUxpc3RWaWV3KCl7XHJcblx0XHR0aGlzLmZpZWxkcy5zcGxpY2UoMCk7XHJcblx0XHRjb25zdCB1c2VyRG9jdW1lbnQgPSBmaXJlYmFzZS5maXJlc3RvcmUuY29sbGVjdGlvbigndXNlcnMnKS5kb2ModGhpcy51c2VySWQpO1xyXG5cdFx0dXNlckRvY3VtZW50LmdldCgpLnRoZW4oZG9jID0+IHtcclxuXHRcdFx0bGV0IHZhbHMgPSBkb2MuZGF0YSgpXHJcblx0XHRcdC8vIGNvbnNvbGUubG9nKFwiZmllbGRzXCIsIHZhbHMpXHJcblx0XHRcdHRoaXMuZmllbGRzLnB1c2gobmV3IExhYmVsKFwiTmFtZVwiLCB2YWxzLmZpcnN0X25hbWUgKyBcIiBcIiArIHZhbHMubGFzdF9uYW1lLCB2YWxzLmZpcnN0X25hbWUsIHZhbHMubGFzdF9uYW1lKSk7XHJcblx0XHRcdHRoaXMuZmllbGRzLnB1c2gobmV3IExhYmVsKFwiRW1haWxcIiwgdmFscy5lbWFpbCwgdmFscy5maXJzdF9uYW1lLCB2YWxzLmxhc3RfbmFtZSkpO1xyXG5cdFx0XHRpZih2YWxzLnBob25lX251bWJlciA9PSBcIlwiIHx8IHZhbHMucGhvbmVfbnVtYmVyID09IG51bGwpe1xyXG5cdFx0XHRcdHRoaXMuZmllbGRzLnB1c2gobmV3IExhYmVsKFwiUGhvbmUgTnVtYmVyXCIsIFwiTm9uZVwiLCB2YWxzLmZpcnN0X25hbWUsIHZhbHMubGFzdF9uYW1lKSk7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZXtcclxuXHRcdFx0XHR0aGlzLmZpZWxkcy5wdXNoKG5ldyBMYWJlbChcIlBob25lIE51bWJlclwiLCB2YWxzLnBob25lX251bWJlciwgdmFscy5maXJzdF9uYW1lLCB2YWxzLmxhc3RfbmFtZSkpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmKHRoaXMudXNlci5wcm92aWRlcnNbMV0uaWQgPT0gJ3Bhc3N3b3JkJykge1xyXG5cdFx0XHRcdHRoaXMuZmllbGRzLnB1c2gobmV3IExhYmVsKFwiUGFzc3dvcmRcIiwgXCIqKioqKioqKlwiLCB2YWxzLmZpcnN0X25hbWUsIHZhbHMubGFzdF9uYW1lKSlcclxuXHRcdFx0fVxyXG5cdFx0fSlcclxuXHR9XHJcblx0dG9QYXltZW50cygpe1xyXG5cdFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUoWydwYXltZW50cyddKTtcclxuXHR9XHJcblxyXG5cdHNob3dNb2RhbChhcmdzKSB7XHJcblx0XHRsZXQgbGFiZWwgPSB0aGlzLmZpZWxkcy5fYXJyYXlbYXJncy5pbmRleF1cclxuXHRcdHRoaXMudHJhbnNmZXJTZXJ2aWNlLnNldERhdGEobGFiZWwpO1xyXG5cdFx0bGV0IG9wdGlvbnMgPSB7XHJcblx0ICAgICAgICBjb250ZXh0OiB7fSxcclxuXHQgICAgICAgIGZ1bGxzY3JlZW46IHRydWUsXHJcblx0ICAgICAgICB2aWV3Q29udGFpbmVyUmVmOiB0aGlzLnZjUmVmXHJcblx0ICAgICAgICAvLyBhbmltYXRlZDogdHJ1ZSxcclxuXHQgICAgICAgIC8vIHRyYW5zaXRpb246IHsgbmFtZTogXCJzbGlkZVRvcFwiIH1cclxuXHQgICAgfTtcclxuXHQgICAgaWYoYXJncy5pbmRleCA9PSAzKSB7XHJcblx0ICAgIFx0dGhpcy5tb2RhbC5zaG93TW9kYWwoUmVhdXRoQ29tcG9uZW50LCBvcHRpb25zKS50aGVuKHJlcyA9PiB7XHJcblx0XHQgICAgXHRpZihyZXMgPT0gJ3VwZGF0ZScpIHtcclxuXHRcdCAgICBcdFx0dGhpcy51cGRhdGVMaXN0VmlldygpO1xyXG5cdFx0ICAgIFx0fVxyXG5cdFx0ICAgIH0pO1xyXG5cdCAgICB9XHJcblx0ICAgIGVsc2Uge1xyXG5cdFx0ICAgIHRoaXMubW9kYWwuc2hvd01vZGFsKFNldHRpbmdzZm9ybUNvbXBvbmVudCwgb3B0aW9ucykudGhlbihyZXMgPT4ge1xyXG5cdFx0ICAgIFx0aWYocmVzID09ICd1cGRhdGUnKSB7XHJcblx0XHQgICAgXHRcdHRoaXMudXBkYXRlTGlzdFZpZXcoKTtcclxuXHRcdCAgICBcdH1cclxuXHRcdCAgICB9KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJvdXRlKGFyZ3MpIHtcclxuXHRcdGlmKGFyZ3MuaW5kZXggPT0gMCkge1xyXG5cdFx0XHR0aGlzLnRvUGF5bWVudHMoKTtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYoYXJncy5pbmRleCA9PSAxKSB7XHJcblx0XHRcdHRoaXMubG9nT3V0KCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRvbkl0ZW1UYXAoYXJncykge1xyXG5cdFx0bGV0IGxhYmVsID0gdGhpcy5maWVsZHMuX2FycmF5W2FyZ3MuaW5kZXhdXHJcblx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ3NldHRpbmdzZm9ybSddKTtcclxuXHRcdHRoaXMudHJhbnNmZXJTZXJ2aWNlLnNldERhdGEobGFiZWwpO1xyXG5cdCAgfVxyXG5cclxuXHRhc3luYyBsb2dPdXQoKSB7XHJcblx0XHR2YXIgYWN0aXZpdHlJbmRpY2F0b3IgPSA8QWN0aXZpdHlJbmRpY2F0b3I+IHRoaXMuYWkubmF0aXZlRWxlbWVudDtcclxuXHRcdGFjdGl2aXR5SW5kaWNhdG9yLmJ1c3kgPSB0cnVlO1xyXG5cdFx0YWN0aXZpdHlJbmRpY2F0b3Iuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcclxuXHRcdHZhciBzZXR0aW5nc0NvbnRhaW5lciA9IDxTdGFja0xheW91dD4gdGhpcy5zYy5uYXRpdmVFbGVtZW50O1xyXG5cdFx0c2V0dGluZ3NDb250YWluZXIuc3R5bGUudmlzaWJpbGl0eSA9ICdjb2xsYXBzZSc7XHJcblxyXG5cdFx0Y29uc3QgdG9rZW5Qcm9taXNlID0gYXdhaXQgbWVzc2FnaW5nLmdldEN1cnJlbnRQdXNoVG9rZW4oKS50aGVuKHRva2VuID0+IHtcclxuXHRcdFx0dGhpcy50b2tlbiA9IHRva2VuXHJcblx0XHRcdHJldHVybiB0b2tlbjtcclxuXHRcdH0pO1xyXG5cdFx0bGV0IHVzZXJEb2MgPSBmaXJlYmFzZS5maXJlc3RvcmUuY29sbGVjdGlvbigndXNlcnMnKS5kb2ModGhpcy51c2VySWQpO1xyXG5cdFx0XHJcblx0XHR1c2VyRG9jLmdldCgpLnRoZW4oYXN5bmMgKGRvYykgPT4ge1xyXG5cdFx0XHRsZXQgaW5kZXggPSBkb2MuZGF0YSgpLnRva2Vucy5pbmRleE9mKHRoaXMudG9rZW4pO1xyXG5cdFx0XHRpZihpbmRleCA+IC0xKSB7XHJcblx0XHRcdFx0Y29uc3QgbmV3VG9rZW5zID0gZG9jLmRhdGEoKS50b2tlbnM7XHJcblx0XHRcdFx0bmV3VG9rZW5zLnNwbGljZShpbmRleCwgMSk7XHJcblx0XHRcdFx0Y29uc29sZS5sb2cobmV3VG9rZW5zKVxyXG5cdFx0XHRcdHVzZXJEb2MudXBkYXRlKHt0b2tlbnM6IG5ld1Rva2Vuc30pO1xyXG5cdFx0XHR9XHJcblx0XHRcdGNvbnN0IGNoYXRQcm9taXNlID0gYXdhaXQgdGhpcy51cGRhdGVDaGF0VG9rZW5zKGRvYy5kYXRhKCkuY2hhdHMpO1xyXG5cdFx0XHRmaXJlYmFzZS5sb2dvdXQoKTtcclxuXHRcdFx0ZmJMb2dvdXQoKCkgPT4ge1xyXG5cclxuXHRcdFx0fSk7XHJcblx0XHRcdHRoaXMubG9naW5jaGVja1NlcnZpY2UuY2xlYXJJbmZvKCk7XHJcblx0XHRcdGFjdGl2aXR5SW5kaWNhdG9yLmJ1c3kgPSBmYWxzZTtcclxuXHRcdFx0YWN0aXZpdHlJbmRpY2F0b3Iuc3R5bGUudmlzaWJpbGl0eSA9ICdjb2xsYXBzZSc7XHJcblx0XHRcdHNldHRpbmdzQ29udGFpbmVyLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XHJcblx0XHRcdHRoaXMucm91dGVyLm5hdmlnYXRlKFsnd2VsY29tZSddLCB7Y2xlYXJIaXN0b3J5OiB0cnVlfSk7XHJcblx0XHR9KVxyXG5cclxuXHR9XHJcblxyXG5cdGFzeW5jIHVwZGF0ZUNoYXRUb2tlbnMoY2hhdHMpIHtcclxuXHRcdGxldCBjaGF0Q29sbGVjdGlvbiA9IGZpcmViYXNlLmZpcmVzdG9yZS5jb2xsZWN0aW9uKCdjaGF0cycpO1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IGNoYXRzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGNvbnN0IGNoYXRQcm9taXNlID0gYXdhaXQgY2hhdENvbGxlY3Rpb24uZG9jKGNoYXRzW2ldKS5nZXQoKS50aGVuKGFzeW5jIChkb2MpID0+IHtcclxuXHRcdFx0XHRsZXQgaW5kZXggPSBkb2MuZGF0YSgpLnRva2Vucy5pbmRleE9mKHRoaXMudG9rZW4pO1xyXG5cdFx0XHRcdGlmKGluZGV4ID4gLTEpIHtcclxuXHRcdFx0XHRcdGNvbnN0IG5ld1Rva2VucyA9IGRvYy5kYXRhKCkudG9rZW5zO1xyXG5cdFx0XHRcdFx0bmV3VG9rZW5zLnNwbGljZShpbmRleCwgMSk7XHJcblx0XHRcdFx0XHRjb25zdCB1cGRhdGVQcm9taXNlID0gYXdhaXQgY2hhdENvbGxlY3Rpb24uZG9jKGNoYXRzW2ldKS51cGRhdGUoe3Rva2VuczogbmV3VG9rZW5zfSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0dXBsb2FkUGZwKCkge1xyXG5cdFx0dmFyIGltYWdlQ3JvcHBlciA9IG5ldyBJbWFnZUNyb3BwZXIoKTtcclxuXHRcdGxldCBjb250ZXh0ID0gaW1hZ2VwaWNrZXIuY3JlYXRlKHtcclxuXHRcdCAgICBtb2RlOiBcInNpbmdsZVwiIC8vIHVzZSBcIm11bHRpcGxlXCIgZm9yIG11bHRpcGxlIHNlbGVjdGlvblxyXG5cdFx0fSk7XHJcblx0XHRjb250ZXh0XHJcblx0ICAgIC5hdXRob3JpemUoKVxyXG5cdCAgICAudGhlbihmdW5jdGlvbigpIHtcclxuXHQgICAgICAgIHJldHVybiBjb250ZXh0LnByZXNlbnQoKTtcclxuXHQgICAgfSlcclxuXHQgICAgLnRoZW4oKHNlbGVjdGlvbjogYW55KSA9PiB7XHJcblx0ICAgIFx0c2VsZWN0aW9uLmZvckVhY2goKHNlbGVjdGVkKSA9PiB7XHJcbiAgICAgICAgICAgIFx0bGV0IGltZ1NvdXJjZSA9IG5ldyBpbWFnZVNvdXJjZS5JbWFnZVNvdXJjZSgpO1xyXG4gICAgICAgICAgICAgICAgaW1nU291cmNlLmZyb21Bc3NldChzZWxlY3RlZCkudGhlbigoc291cmNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBcdHRoaXMuaW1hZ2VDcm9wcGVyXHJcbiAgICAgICAgICAgICAgICAgICAgLnNob3coc291cmNlLCB7IHdpZHRoOiAzMDAsIGhlaWdodDogMzAwIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oYXJncyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUuZGlyKGFyZ3MpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXJncy5pbWFnZSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5jcm9wcGVkSW1hZ2UuaW1hZ2VTb3VyY2UgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGFyZ3MuaW1hZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZm9sZGVyID0gZnMua25vd25Gb2xkZXJzLnRlbXAoKTtcclxuXHRcdFx0XHQgICAgICAgICAgICB2YXIgcGF0aCA9IGZzLnBhdGguam9pbihmb2xkZXIucGF0aCwgXCJwcm9maWxlX3BpY3R1cmUucG5nXCIpO1xyXG5cdFx0XHRcdCAgICAgICAgICAgIHZhciBzYXZlZCA9IGFyZ3MuaW1hZ2Uuc2F2ZVRvRmlsZShwYXRoLCdwbmcnKTtcclxuXHJcblx0XHRcdFx0ICAgICAgICAgICAgdmFyIGFjdGl2aXR5SW5kaWNhdG9yID0gPEFjdGl2aXR5SW5kaWNhdG9yPiB0aGlzLmFpLm5hdGl2ZUVsZW1lbnQ7XHJcblx0XHRcdFx0XHRcdFx0YWN0aXZpdHlJbmRpY2F0b3IuYnVzeSA9IHRydWU7XHJcblx0XHRcdFx0XHRcdFx0YWN0aXZpdHlJbmRpY2F0b3Iuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcclxuICAgICAgXHRcdFx0XHRcdFx0dmFyIHNldHRpbmdzQ29udGFpbmVyID0gPFN0YWNrTGF5b3V0PiB0aGlzLnNjLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICAgIFx0XHRcdFx0XHRcdHNldHRpbmdzQ29udGFpbmVyLnN0eWxlLnZpc2liaWxpdHkgPSAnY29sbGFwc2UnO1xyXG5cclxuXHRcdFx0XHQgICAgICAgICAgICBmaXJlYmFzZS5zdG9yYWdlLnVwbG9hZEZpbGUoe1xyXG5cdFx0XHRcdFx0XHRcdCAgICAvLyB0aGUgZnVsbCBwYXRoIG9mIHRoZSBmaWxlIGluIHlvdXIgRmlyZWJhc2Ugc3RvcmFnZSAoZm9sZGVycyB3aWxsIGJlIGNyZWF0ZWQpXHJcblx0XHRcdFx0XHRcdFx0ICAgIHJlbW90ZUZ1bGxQYXRoOiAndXNlcnMvJyArIHRoaXMudXNlcklkICsgJy91cGxvYWRzL3Byb2ZpbGVfcGljdHVyZS5qcGcnLFxyXG5cdFx0XHRcdFx0XHRcdCAgICAvLyBvcHRpb24gMTogYSBmaWxlLXN5c3RlbSBtb2R1bGUgRmlsZSBvYmplY3RcclxuXHRcdFx0XHRcdFx0XHQgICAgbG9jYWxGaWxlOiBmcy5GaWxlLmZyb21QYXRoKHBhdGgpLFxyXG5cdFx0XHRcdFx0XHRcdCAgICAvLyBvcHRpb24gMjogYSBmdWxsIGZpbGUgcGF0aCAoaWdub3JlZCBpZiAnbG9jYWxGaWxlJyBpcyBzZXQpXHJcblx0XHRcdFx0XHRcdFx0ICAgIGxvY2FsRnVsbFBhdGg6IHBhdGgsXHJcblx0XHRcdFx0XHRcdFx0ICAgIC8vIGdldCBub3RpZmllZCBvZiBmaWxlIHVwbG9hZCBwcm9ncmVzc1xyXG5cdFx0XHRcdFx0XHRcdCAgICBvblByb2dyZXNzOiAoc3RhdHVzKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0ICAgICAgY29uc29sZS5sb2coXCJVcGxvYWRlZCBmcmFjdGlvbjogXCIgKyBzdGF0dXMuZnJhY3Rpb25Db21wbGV0ZWQpO1xyXG5cdFx0XHRcdFx0XHRcdCAgICAgIGNvbnNvbGUubG9nKFwiUGVyY2VudGFnZSBjb21wbGV0ZTogXCIgKyBzdGF0dXMucGVyY2VudGFnZUNvbXBsZXRlZCk7XHJcblx0XHRcdFx0XHRcdFx0ICAgIH1cclxuXHRcdFx0XHRcdFx0XHQgIH0pLnRoZW4oXHJcblx0XHRcdFx0XHRcdFx0ICAgICAgKHVwbG9hZGVkRmlsZSkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdCAgICAgICAgY29uc29sZS5sb2coXCJGaWxlIHVwbG9hZGVkOiBcIiArIEpTT04uc3RyaW5naWZ5KHVwbG9hZGVkRmlsZSkpO1xyXG5cdFx0XHRcdFx0XHRcdCAgICAgICAgICBcdFx0ZmlyZWJhc2Uuc3RvcmFnZS5nZXREb3dubG9hZFVybCh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICAgLy8gdGhlIGZ1bGwgcGF0aCBvZiBhbiBleGlzdGluZyBmaWxlIGluIHlvdXIgRmlyZWJhc2Ugc3RvcmFnZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgIHJlbW90ZUZ1bGxQYXRoOiAndXNlcnMvJyArIHRoaXMudXNlcklkICsgJy91cGxvYWRzL3Byb2ZpbGVfcGljdHVyZS5qcGcnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgIH0pLnRoZW4oXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICAgICAodXJsKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICAgICAgIGZpcmViYXNlLnVwZGF0ZVByb2ZpbGUoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgICBwaG90b1VSTDogdXJsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICB9KS50aGVuKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgICAgICgpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICAgICAgIC8vIGNhbGxlZCB3aGVuIHVwZGF0ZSBwcm9maWxlIHdhcyBzdWNjZXNzZnVsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgICAgICBhY3Rpdml0eUluZGljYXRvci5idXN5ID0gZmFsc2U7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNldHRpbmdzQ29udGFpbmVyLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFjdGl2aXR5SW5kaWNhdG9yLnN0eWxlLnZpc2liaWxpdHkgPSAnY29sbGFwc2UnO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgICAgICAgdGhpcy5wcm9maWxlID0gdXJsO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgICAgIH0sXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgICAgKGVycm9yTWVzc2FnZSkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgICAgICAgY29uc29sZS5sb2coZXJyb3JNZXNzYWdlKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICAgICB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICApO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgY29uc3QgdXNlckRvY3VtZW50ID0gZmlyZWJhc2UuZmlyZXN0b3JlLmNvbGxlY3Rpb24oJ3VzZXJzJykuZG9jKHRoaXMudXNlcklkKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgIHVzZXJEb2N1bWVudC51cGRhdGUoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgXHRwcm9maWxlX3NvdXJjZTogdXJsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICB9KVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgICAgfSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgICAgIGZ1bmN0aW9uIChlcnJvcikge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yOiBcIiArIGVycm9yKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgICAgIH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgKTtcclxuXHRcdFx0XHRcdFx0XHQgICAgICB9LFxyXG5cdFx0XHRcdFx0XHRcdCAgICAgIChlcnJvcikgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdCAgICAgICAgY29uc29sZS5sb2coXCJGaWxlIHVwbG9hZCBlcnJvcjogXCIgKyBlcnJvcik7XHJcblx0XHRcdFx0XHRcdFx0ICAgICAgfVxyXG5cdFx0XHRcdFx0XHRcdFx0KS5jYXRjaCgoZXJyKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0ICAgICAgICAvLyBwcm9jZXNzIGVycm9yXHJcblx0XHRcdFx0XHRcdFx0ICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG5cdFx0XHRcdFx0XHRcdCAgICB9KTtcclxuXHQgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblx0ICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmRpcihlKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgIFx0Y29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pXHJcblx0ICAgIH0pLmNhdGNoKChlcnIpID0+IHtcclxuXHQgICAgXHRjb25zb2xlLmxvZyhlcnIpXHJcblx0ICAgIH0pXHJcblx0fVxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCIvKiBBZGQgbW9iaWxlIHN0eWxlcyBmb3IgdGhlIGNvbXBvbmVudCBoZXJlLiAgKi9cXHJcXG4uaGVhZGVye1xcclxcbiAgICBtYXJnaW4tdG9wOiA1MDtcXHJcXG5cXHRtYXJnaW4tbGVmdDogMzI7XFxyXFxuXFx0Y29sb3I6IGJsYWNrO1xcclxcbiAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICBmb250LXNpemU6IDMwO1xcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbn1cXHJcXG4uc3VibWl0LWJ0bntcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjojYWMwMGU2O1xcclxcbiAgICB3aWR0aDogNzUlO1xcclxcbiAgICBoZWlnaHQ6IDE3MHB4O1xcclxcbi8qICAgIGZvbnQtZmFtaWx5OiBcXFwiU2Vnb2UgVUlcXFwiLEFyaWFsLHNhbnMtc2VyaWY7XFxyXFxuKi8gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBtYXJnaW4tdG9wOiAyMDtcXHJcXG59XFxyXFxuLnRleHQtZmllbGR7XFxyXFxuICAgIHdpZHRoOiA4NSU7XFxyXFxuICAgIG1hcmdpbi10b3A6IDIwO1xcclxcbiAgICBjb2xvcjojNjk2OTY5XFxyXFxufVxcclxcblxcclxcbi5jbG9zZS1idXR0b24tY29udGFpbmVyIHtcXHJcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0bGVmdDogMDtcXHJcXG59XFxyXFxuLmNsb3NlIHtcXHJcXG5cXHRtYXJnaW46IDEwO1xcclxcblxcdGZvbnQtc2l6ZTogNDA7XFxyXFxuXFx0d2lkdGg6IDQ4O1xcclxcbiAgICBoZWlnaHQ6IDQ4O1xcclxcbiAgICBjb2xvcjogYmxhY2tcXHJcXG59XFxyXFxuXFxyXFxuLmVycm9yLW1lc3NhZ2Uge1xcclxcbiAgICBjb2xvcjogcmVkO1xcclxcbiAgICBmb250LXNpemU6IDE2O1xcclxcbiAgICB2aXNpYmlsaXR5OiBjb2xsYXBzZTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY29uZC12YWwge1xcclxcbiAgICB2aXNpYmlsaXR5OiBjb2xsYXBzZTtcXHJcXG59XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPFN0YWNrbGF5b3V0PlxcclxcbiAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImNsb3NlLWJ1dHRvbi1jb250YWluZXJcXFwiIG9yaWVudGF0aW9uPVxcXCJob3Jpem9udGFsXFxcIj5cXHJcXG4gICAgICAgIDxMYWJlbCB0ZXh0PVxcXCImdGltZXM7XFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiICh0YXApPVxcXCJjbG9zZSgnY2FuY2VsJylcXFwiPjwvTGFiZWw+XFxyXFxuICAgIDwvU3RhY2tMYXlvdXQ+XFxyXFxuICAgIDxMYWJlbCBjbGFzcz1cXFwiaGVhZGVyXFxcIiBbdGV4dF09XFxcImxhYmVsXFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCI+PC9MYWJlbD5cXHJcXG4gICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJpbnB1dC1maWVsZFxcXCI+XFxyXFxuICAgIFxcdDwhLS0gPE1hc2tlZFRleHRGaWVsZCBjbGFzcz1cXFwiaW5wdXQgaW5wdXQtYm9yZGVyXFxcIiBtYXNrPVxcXCIoMDAwKSAwMDAtMDAwMFxcXCIgWyhuZ01vZGVsKV09XFxcInZhbHVlXFxcIiBrZXlib2FyZFR5cGU9XFxcInBob25lXFxcIj48L01hc2tlZFRleHRGaWVsZD4gLS0+XFxyXFxuICAgICAgICA8VGV4dEZpZWxkICN2YWwgWyhuZ01vZGVsKV09XFxcInZhbHVlXFxcIiBba2V5Ym9hcmRUeXBlXSA9IFxcXCJrZXlib2FyZFxcXCIgYXV0b2NvcnJlY3Q9XFxcImZhbHNlXFxcIiByZXR1cm5LZXlUeXBlPVxcXCJ7e3JldHVybktleX19XFxcIlxcclxcbiAgICAgICAgIFttYXhMZW5ndGhdPSBcXFwibWF4bGVuZ3RoXFxcIiBjbGFzcz1cXFwidGV4dC1maWVsZFxcXCIgc2VjdXJlPVxcXCJ7e2lzU2VjdXJlfX1cXFwiIGhpbnQ9XFxcInt7IGhpbnQgfX1cXFwiPjwvVGV4dEZpZWxkPlxcclxcbiAgICAgICAgPFRleHRGaWVsZCAjc2Vjb25kVmFsIFsobmdNb2RlbCldPVxcXCJzZWNvbmRWYWx1ZVxcXCIgW2tleWJvYXJkVHlwZV0gPSBcXFwia2V5Ym9hcmRcXFwiIGF1dG9jb3JyZWN0PVxcXCJmYWxzZVxcXCIgcmV0dXJuS2V5VHlwZT1cXFwiZG9uZVxcXCJcXHJcXG4gICAgICAgICBbbWF4TGVuZ3RoXT0gXFxcIm1heGxlbmd0aFxcXCIgY2xhc3M9XFxcInRleHQtZmllbGQgc2Vjb25kLXZhbFxcXCIgc2VjdXJlPVxcXCJ7e2lzU2VjdXJlfX1cXFwiIGhpbnQ9XFxcInt7IHNlY29uZEhpbnQgfX1cXFwiPjwvVGV4dEZpZWxkPlxcclxcbiAgICA8L1N0YWNrTGF5b3V0PlxcclxcbiAgICA8TGFiZWwgI2Vycm9yTWVzc2FnZSB0ZXh0PVxcXCJ7eyBlcnJvclRleHQgfX1cXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiBjbGFzcz1cXFwiZXJyb3ItbWVzc2FnZVxcXCI+PC9MYWJlbD5cXHJcXG5cXHJcXG4gICAgPEJ1dHRvbiB0ZXh0PVxcXCJTYXZlXFxcIiAodGFwKT1cXFwic3VibWl0RGF0YSh2YWwudGV4dClcXFwiIGNsYXNzPVxcXCJzdWJtaXQtYnRuXFxcIj48L0J1dHRvbj5cXHJcXG5cXHJcXG48L1N0YWNrbGF5b3V0PlwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUcmFuc2ZlclNlcnZpY2UgfSBmcm9tICcuLi9kYXRhdHJhbnNmZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlXCI7XHJcbi8vIGltcG9ydCB7IE1vZGFsRGlhbG9nUGFyYW1zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2RpcmVjdGl2ZXMvZGlhbG9nc1wiO1xyXG5pbXBvcnQgKiBhcyBmaXJlYmFzZSBmcm9tICduYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlJztcclxuaW1wb3J0IHsgTG9naW5jaGVja1NlcnZpY2UgfSBmcm9tICcuLi9sb2dpbmNoZWNrLnNlcnZpY2UudG5zJztcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IE1vZGFsRGlhbG9nUGFyYW1zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2RpcmVjdGl2ZXMvZGlhbG9nc1wiO1xyXG5pbXBvcnQgKiBhcyBkaWFsb2dzIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3NcIjtcclxuaW1wb3J0IHsgTGFiZWwgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2xhYmVsJztcclxuaW1wb3J0IHsgVGV4dEZpZWxkIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS90ZXh0LWZpZWxkJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLXNldHRpbmdzZm9ybScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3NldHRpbmdzZm9ybS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vc2V0dGluZ3Nmb3JtLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2V0dGluZ3Nmb3JtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0cmFuc2ZlclNlcnZpY2U6IFRyYW5zZmVyU2VydmljZSwgcHJpdmF0ZSBsb2dpbmNoZWNrU2VydmljZTogTG9naW5jaGVja1NlcnZpY2UsIFxyXG4gICAgcHJpdmF0ZSBwYWdlOiBQYWdlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSBwYXJhbXM6IE1vZGFsRGlhbG9nUGFyYW1zKSB7IH1cclxuXHJcbiAgQFZpZXdDaGlsZChcImVycm9yTWVzc2FnZVwiLCB7IHN0YXRpYzogdHJ1ZSB9KSBlbTogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKFwic2Vjb25kVmFsXCIsIHsgc3RhdGljOiB0cnVlIH0pIHN2OiBFbGVtZW50UmVmO1xyXG4gIHVzZXJJZDtcclxuICBmaWVsZDtcclxuICBsYWJlbDtcclxuICB2YWx1ZTtcclxuICBzZWNvbmRWYWx1ZTtcclxuICBrZXlib2FyZDtcclxuICBtYXhsZW5ndGg7XHJcbiAgaXNTZWN1cmUgPSBmYWxzZTtcclxuICBlcnJvclRleHQ7XHJcbiAgcmV0dXJuS2V5ID0gXCJkb25lXCJcclxuICBoaW50O1xyXG4gIHNlY29uZEhpbnQ7XHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICAvLyB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcclxuICAgIHRoaXMuZmllbGQgPSB0aGlzLnRyYW5zZmVyU2VydmljZS5nZXREYXRhKCk7XHJcbiAgICB0aGlzLmxhYmVsID0gdGhpcy5maWVsZC5sYWJlbDtcclxuICAgIHRoaXMudmFsdWUgPSB0aGlzLmZpZWxkLnZhbHVlO1xyXG4gICAgaWYodGhpcy5maWVsZC52YWx1ZSA9PSBcIk5vbmVcIikge1xyXG4gICAgICB0aGlzLnZhbHVlID0gJyc7XHJcbiAgICB9XHJcbiAgICBpZih0aGlzLmxhYmVsPT1cIk5hbWVcIil7XHJcbiAgICAgIC8vIHRoaXMua2V5Ym9hcmQgPSBcIlwiO1xyXG4gICAgICB0aGlzLm1heGxlbmd0aCA9IDMwO1xyXG4gICAgICB0aGlzLnJldHVybktleSA9IFwibmV4dFwiO1xyXG4gICAgICB0aGlzLnZhbHVlID0gdGhpcy5maWVsZC5maXJzdE5hbWU7XHJcbiAgICAgIHRoaXMuc2Vjb25kVmFsdWUgPSB0aGlzLmZpZWxkLmxhc3ROYW1lO1xyXG4gICAgICB0aGlzLmhpbnQgPSBcIkZpcnN0IG5hbWVcIjtcclxuICAgICAgdGhpcy5zZWNvbmRIaW50ID0gXCJMYXN0IG5hbWVcIjtcclxuICAgICAgbGV0IHNlY29uZFZhbHVlID0gPFRleHRGaWVsZD4gdGhpcy5zdi5uYXRpdmVFbGVtZW50O1xyXG4gICAgICBzZWNvbmRWYWx1ZS5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmKHRoaXMubGFiZWw9PVwiRW1haWxcIil7XHJcbiAgICAgIHRoaXMua2V5Ym9hcmQgPSBcImVtYWlsXCI7XHJcbiAgICAgIHRoaXMubWF4bGVuZ3RoID0gMzA7XHJcbiAgICAgIHRoaXMuZXJyb3JUZXh0ID0gXCJJbnZhbGlkIGVtYWlsXCJcclxuICAgICAgdGhpcy5oaW50ID0gXCJFbWFpbFwiXHJcbiAgICB9XHJcbiAgICBlbHNlIGlmKHRoaXMubGFiZWw9PVwiUGhvbmUgTnVtYmVyXCIpe1xyXG4gICAgICB0aGlzLmtleWJvYXJkID0gXCJwaG9uZVwiO1xyXG4gICAgICB0aGlzLm1heGxlbmd0aCA9IDEwO1xyXG4gICAgICB0aGlzLmVycm9yVGV4dCA9IFwiSW52YWxpZCBwaG9uZSBudW1iZXJcIlxyXG4gICAgICB0aGlzLmhpbnQgPSBcInh4eC14eHgteHh4eFwiXHJcbiAgICB9XHJcbiAgICBlbHNlIGlmKHRoaXMubGFiZWw9PVwiUGFzc3dvcmRcIikge1xyXG4gICAgICB0aGlzLnZhbHVlID0gJyc7XHJcbiAgICAgIHRoaXMubWF4bGVuZ3RoID0gMzA7XHJcbiAgICAgIHRoaXMuaXNTZWN1cmUgPSB0cnVlO1xyXG4gICAgICB0aGlzLmxhYmVsID0gXCJFbnRlciBuZXcgcGFzc3dvcmRcIjtcclxuICAgICAgdGhpcy5oaW50ID0gXCJOZXcgcGFzc3dvcmRcIjtcclxuICAgICAgdGhpcy5zZWNvbmRIaW50ID0gXCJSZS1lbnRlciBuZXcgcGFzc3dvcmRcIjtcclxuICAgICAgdGhpcy5lcnJvclRleHQgPSBcIlBhc3N3b3JkIG11c3QgYmUgYXQgbGVzdCA2IGNoYXJhY3RlcnMgbG9uZ1wiO1xyXG4gICAgICBsZXQgc2Vjb25kVmFsdWUgPSA8VGV4dEZpZWxkPiB0aGlzLnN2Lm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICAgIHNlY29uZFZhbHVlLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN1Ym1pdERhdGEocmVzdWx0KSB7XHJcbiAgICB0aGlzLnVzZXJJZCA9IHRoaXMubG9naW5jaGVja1NlcnZpY2UuZ2V0VXNlcigpO1xyXG4gICAgY29uc3QgdXNlckRvY3VtZW50ID0gZmlyZWJhc2UuZmlyZXN0b3JlLmNvbGxlY3Rpb24oJ3VzZXJzJykuZG9jKHRoaXMudXNlcklkKTtcclxuICAgIGlmICh0aGlzLmxhYmVsID09IFwiTmFtZVwiKSB7XHJcbiAgICAgIGZpcmViYXNlLnVwZGF0ZVByb2ZpbGUoe1xyXG4gICAgICAgIGRpc3BsYXlOYW1lOiB0aGlzLnZhbHVlICsgXCIgXCIgKyB0aGlzLnNlY29uZFZhbHVlXHJcbiAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUHJvZmlsZSB1cGRhdGVkXCIpXHJcbiAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICAgIH0pXHJcblxyXG4gICAgICAvLyBjb25zb2xlLmxvZyhcIm5hbWVcIiwgbmFtZSlcclxuICAgICAgdXNlckRvY3VtZW50LnVwZGF0ZSh7XHJcbiAgICAgICAgZmlyc3RfbmFtZTogdGhpcy52YWx1ZSxcclxuICAgICAgICBsYXN0X25hbWU6IHRoaXMuc2Vjb25kVmFsdWVcclxuICAgICAgfSlcclxuXHJcbiAgICAgIHZhciBwb3N0aW5nc0NvbGxlY3Rpb24gPSBmaXJlYmFzZS5maXJlc3RvcmUuY29sbGVjdGlvbigncG9zdGluZ3MnKTtcclxuICAgICAgdXNlckRvY3VtZW50LmdldCgpLnRoZW4oZG9jID0+IHtcclxuICAgICAgICBsZXQgcG9zdElkcyA9IGRvYy5kYXRhKCkucG9zdHM7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJwb3N0aWRzXCIsIHBvc3RJZHMpXHJcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHBvc3RJZHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIHBvc3RpbmdzQ29sbGVjdGlvbi5kb2MocG9zdElkc1tpXSkudXBkYXRlKHtcclxuICAgICAgICAgICAgdXNlcjogdGhpcy52YWx1ZSArIFwiIFwiICsgdGhpcy5zZWNvbmRWYWx1ZVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLnBhcmFtcy5jbG9zZUNhbGxiYWNrKFwidXBkYXRlXCIpXHJcbiAgICB9XHJcblxyXG4gICAgZWxzZSBpZih0aGlzLmxhYmVsID09IFwiRW1haWxcIikge1xyXG4gICAgICBmaXJlYmFzZS51cGRhdGVFbWFpbChyZXN1bHQpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHVzZXJEb2N1bWVudC51cGRhdGUoe1xyXG4gICAgICAgICAgZW1haWw6IHJlc3VsdCxcclxuICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMucGFyYW1zLmNsb3NlQ2FsbGJhY2soXCJ1cGRhdGVcIilcclxuICAgICAgICB9KVxyXG4gICAgICB9KS5jYXRjaChcclxuICAgICAgICAgIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNob3dFcnJvcigpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmKHRoaXMubGFiZWwgPT0gXCJQaG9uZSBOdW1iZXJcIikge1xyXG4gICAgICB1c2VyRG9jdW1lbnQudXBkYXRlKHtcclxuICAgICAgICBwaG9uZV9udW1iZXI6IHJlc3VsdCxcclxuICAgICAgfSkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgdGhpcy5wYXJhbXMuY2xvc2VDYWxsYmFjayhcInVwZGF0ZVwiKVxyXG4gICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zaG93RXJyb3IoKTtcclxuICAgICAgfSlcclxuICAgIH1cclxuICAgIGVsc2UgaWYodGhpcy5sYWJlbCA9PSBcIkVudGVyIG5ldyBwYXNzd29yZFwiKSB7XHJcbiAgICAgIGlmKHRoaXMudmFsdWUgIT0gdGhpcy5zZWNvbmRWYWx1ZSkge1xyXG4gICAgICAgIHRoaXMuZXJyb3JUZXh0ID0gXCJQYXNzd29yZHMgZG8gbm90IG1hdGNoXCI7XHJcbiAgICAgICAgdGhpcy5zaG93RXJyb3IoKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICBmaXJlYmFzZS51cGRhdGVQYXNzd29yZCh0aGlzLnZhbHVlKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgIHRoaXMucGFyYW1zLmNsb3NlQ2FsbGJhY2soXCJ1cGRhdGVcIilcclxuICAgICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmVycm9yVGV4dCA9IFwiUGFzc3dvcmQgbXVzdCBiZSBhdCBsZXN0IDYgY2hhcmFjdGVycyBsb25nXCI7XHJcbiAgICAgICAgICB0aGlzLnNob3dFcnJvcigpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNsb3NlKHJlcykge1xyXG4gICAgdGhpcy5wYXJhbXMuY2xvc2VDYWxsYmFjayhyZXMpO1xyXG4gIH1cclxuXHJcbiAgc2hvd0Vycm9yKCkge1xyXG4gICAgbGV0IGVycm9yTWVzc2FnZSA9IDxMYWJlbD4gdGhpcy5lbS5uYXRpdmVFbGVtZW50O1xyXG4gICAgZXJyb3JNZXNzYWdlLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcclxuICB9XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxwPlxcclxcbiAgdXBkYXRlIHdvcmtzIVxcclxcbjwvcD5cXHJcXG5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IExvZ2luY2hlY2tTZXJ2aWNlIH0gZnJvbSAnLi4vbG9naW5jaGVjay5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLXVwZGF0ZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3VwZGF0ZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vdXBkYXRlLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVXBkYXRlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBsb2dpbmNoZWNrU2VydmljZTogTG9naW5jaGVja1NlcnZpY2UpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICBcdHRoaXMubG9naW5jaGVja1NlcnZpY2UubG9naW5DaGVjaygpO1xyXG4gIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgVXNlclNlcnZpY2Uge1xyXG4gIFx0LyoqXHJcblx0KiBUbyBnZXQgdGhlIHNlcnZlciB0byByZWNvZ25pemUgeW91ciBtb2JpbGUgZGV2aWNlLCBmaW5kIHlvdXIgaXB2NCBhZGRyZXNzIGJ5IHJ1bm5pbmcgaXBjb25maWcgaW4gYSB0ZXJtaW5hbCB3aW5kb3dcclxuXHQqIGFuZCBhZGQgYSBuZXcgdXJpIGxpbmUgd2l0aCB5b3VyIGlwdjQgYWRkcmVzcy4gRG8gdGhpcyBmb3IgbmV0d29ya19zZWN1cml0eV9jb25maWcueG1sLCB1c2VyLnNlcnZpY2VzLnRucy50cywgYW5kXHJcblx0KiBwb3N0aW5nLnNlcnZpY2UudG5zLnRzLlxyXG5cdCovXHJcblx0Ly8gQWRhbSdzIHRlc3Rpbmcgc2VydmVyXHJcblx0Ly8gdXJpID0gJ2h0dHA6Ly8xOTIuMTY4LjEuNzo0MDAwJztcclxuXHQvLyB1cmkgPSAnaHR0cDovLzEwLjUuMTEuMjU6NDAwMCc7XHJcblx0Ly8gUGhpbGxpcCdzIFRlc3Rpbmcgc2VydmVyXHJcblx0dXJpID0gJ2h0dHA6Ly8xOTIuMTY4LjEuMzo0MDAwJztcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHsgfVxyXG5cclxuICBnZXRVc2VycygpIHtcclxuICBcdHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke3RoaXMudXJpfS91c2Vyc2ApO1xyXG4gIH1cclxuXHJcbiAgZ2V0VXNlcmJ5SWQoaWQpIHtcclxuICBcdHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke3RoaXMudXJpfS91c2Vycy8ke2lkfWApO1xyXG4gIH1cclxuXHJcbiAgYWRkVXNlcihuYW1lPScnLCB1c2VybmFtZT0nJywgYWRkcmVzcz0nJywgYmlydGhkYXRlPScnLCBlbWFpbD0nJywgZ2VuZGVyPScnLCBwaG9uZV9udW1iZXI9JycsIHJpZGVzX2dpdmVuPVwiMFwiLCByaWRlc19yZWNlaXZlZD1cIjBcIikge1xyXG4gIFx0Y29uc3QgdXNlciA9IHtcclxuICBcdFx0bmFtZTogbmFtZSxcclxuICAgICAgdXNlcm5hbWU6IHVzZXJuYW1lLFxyXG4gICAgICBhZGRyZXNzOiBhZGRyZXNzLFxyXG4gICAgICBiaXJ0aGRhdGU6IGJpcnRoZGF0ZSxcclxuICAgICAgZW1haWw6IGVtYWlsLFxyXG4gICAgICBnZW5kZXI6IGdlbmRlcixcclxuICAgICAgcGhvbmVfbnVtYmVyOiBwaG9uZV9udW1iZXIsXHJcbiAgICAgIHJpZGVzX2dpdmVuOiByaWRlc19naXZlbixcclxuICAgICAgcmlkZXNfcmVjZWl2ZWQ6IHJpZGVzX3JlY2VpdmVkLFxyXG4gICAgICBwYXltZW50X2lkOiBcIlwiXHJcbiAgXHR9O1xyXG4gIFx0cmV0dXJuIHRoaXMuaHR0cC5wb3N0KGAke3RoaXMudXJpfS91c2Vycy9hZGQvYCwgdXNlcik7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVVc2VyKGlkLCBuYW1lLCB1c2VybmFtZSwgYWRkcmVzcywgYmlydGhkYXRlLCBlbWFpbCwgZ2VuZGVyLCBwaG9uZV9udW1iZXIsIHJpZGVzX2dpdmVuLCByaWRlc19yZWNlaXZlZCwgcGF5bWVudF9pZCkge1xyXG4gIFx0Y29uc3QgdXNlciA9IHtcclxuICAgICAgbmFtZTogbmFtZSxcclxuICAgICAgdXNlcm5hbWU6IHVzZXJuYW1lLFxyXG4gICAgICBhZGRyZXNzOiBhZGRyZXNzLFxyXG4gICAgICBiaXJ0aGRhdGU6IGJpcnRoZGF0ZSxcclxuICAgICAgZW1haWw6IGVtYWlsLFxyXG4gICAgICBnZW5kZXI6IGdlbmRlcixcclxuICAgICAgcGhvbmVfbnVtYmVyOiBwaG9uZV9udW1iZXIsXHJcbiAgICAgIHJpZGVzX2dpdmVuOiByaWRlc19naXZlbixcclxuICAgICAgcmlkZXNfcmVjZWl2ZWQ6IHJpZGVzX3JlY2VpdmVkLFxyXG4gICAgICBwYXltZW50X2lkOiBwYXltZW50X2lkXHJcbiAgICB9O1xyXG4gIFx0cmV0dXJuIHRoaXMuaHR0cC5wb3N0KGAke3RoaXMudXJpfS91c2Vycy91cGRhdGUvJHtpZH1gLCB1c2VyKTtcclxuICB9XHJcblxyXG4gIGRlbGV0ZVVzZXIoaWQpIHtcclxuICBcdHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke3RoaXMudXJpfS91c2Vycy9kZWxldGUvJHtpZH1gKTtcclxuICB9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFVzZXJTZXJ2aWNlIHtcclxuICBcdC8qKlxyXG5cdCogVG8gZ2V0IHRoZSBzZXJ2ZXIgdG8gcmVjb2duaXplIHlvdXIgbW9iaWxlIGRldmljZSwgZmluZCB5b3VyIGlwdjQgYWRkcmVzcyBieSBydW5uaW5nIGlwY29uZmlnIGluIGEgdGVybWluYWwgd2luZG93XHJcblx0KiBhbmQgYWRkIGEgbmV3IHVyaSBsaW5lIHdpdGggeW91ciBpcHY0IGFkZHJlc3MuIERvIHRoaXMgZm9yIG5ldHdvcmtfc2VjdXJpdHlfY29uZmlnLnhtbCwgdXNlci5zZXJ2aWNlcy50bnMudHMsIGFuZFxyXG5cdCogcG9zdGluZy5zZXJ2aWNlLnRucy50cy5cclxuXHQqL1xyXG5cdC8vIEFkYW0ncyB0ZXN0aW5nIHNlcnZlclxyXG5cdC8vIHVyaSA9ICdodHRwOi8vMTkyLjE2OC4xLjc6NDAwMCc7XHJcblx0Ly8gdXJpID0gJ2h0dHA6Ly8xMC41LjExLjI1OjQwMDAnO1xyXG5cdC8vIFBoaWxsaXAncyBUZXN0aW5nIHNlcnZlclxyXG5cdHVyaSA9ICdodHRwOi8vMTkyLjE2OC4xLjM6NDAwMCc7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7IH1cclxuXHJcbiAgZ2V0VXNlcnMoKSB7XHJcbiAgXHRyZXR1cm4gdGhpcy5odHRwLmdldChgJHt0aGlzLnVyaX0vdXNlcnNgKTtcclxuICB9XHJcblxyXG4gIGdldFVzZXJieUlkKGlkKSB7XHJcbiAgXHRyZXR1cm4gdGhpcy5odHRwLmdldChgJHt0aGlzLnVyaX0vdXNlcnMvJHtpZH1gKTtcclxuICB9XHJcblxyXG4gIGFkZFVzZXIobmFtZT0nJywgdXNlcm5hbWU9JycsIGFkZHJlc3M9JycsIGJpcnRoZGF0ZT0nJywgZW1haWw9JycsIGdlbmRlcj0nJywgcGhvbmVfbnVtYmVyPScnLCByaWRlc19naXZlbj1cIjBcIiwgcmlkZXNfcmVjZWl2ZWQ9XCIwXCIpIHtcclxuICBcdGNvbnN0IHVzZXIgPSB7XHJcbiAgXHRcdG5hbWU6IG5hbWUsXHJcbiAgICAgIHVzZXJuYW1lOiB1c2VybmFtZSxcclxuICAgICAgYWRkcmVzczogYWRkcmVzcyxcclxuICAgICAgYmlydGhkYXRlOiBiaXJ0aGRhdGUsXHJcbiAgICAgIGVtYWlsOiBlbWFpbCxcclxuICAgICAgZ2VuZGVyOiBnZW5kZXIsXHJcbiAgICAgIHBob25lX251bWJlcjogcGhvbmVfbnVtYmVyLFxyXG4gICAgICByaWRlc19naXZlbjogcmlkZXNfZ2l2ZW4sXHJcbiAgICAgIHJpZGVzX3JlY2VpdmVkOiByaWRlc19yZWNlaXZlZCxcclxuICAgICAgcGF5bWVudF9pZDogXCJcIlxyXG4gIFx0fTtcclxuICBcdHJldHVybiB0aGlzLmh0dHAucG9zdChgJHt0aGlzLnVyaX0vdXNlcnMvYWRkL2AsIHVzZXIpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlVXNlcihpZCwgbmFtZSwgdXNlcm5hbWUsIGFkZHJlc3MsIGJpcnRoZGF0ZSwgZW1haWwsIGdlbmRlciwgcGhvbmVfbnVtYmVyLCByaWRlc19naXZlbiwgcmlkZXNfcmVjZWl2ZWQsIHBheW1lbnRfaWQpIHtcclxuICBcdGNvbnN0IHVzZXIgPSB7XHJcbiAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgIHVzZXJuYW1lOiB1c2VybmFtZSxcclxuICAgICAgYWRkcmVzczogYWRkcmVzcyxcclxuICAgICAgYmlydGhkYXRlOiBiaXJ0aGRhdGUsXHJcbiAgICAgIGVtYWlsOiBlbWFpbCxcclxuICAgICAgZ2VuZGVyOiBnZW5kZXIsXHJcbiAgICAgIHBob25lX251bWJlcjogcGhvbmVfbnVtYmVyLFxyXG4gICAgICByaWRlc19naXZlbjogcmlkZXNfZ2l2ZW4sXHJcbiAgICAgIHJpZGVzX3JlY2VpdmVkOiByaWRlc19yZWNlaXZlZCxcclxuICAgICAgcGF5bWVudF9pZDogcGF5bWVudF9pZFxyXG4gICAgfTtcclxuICBcdHJldHVybiB0aGlzLmh0dHAucG9zdChgJHt0aGlzLnVyaX0vdXNlcnMvdXBkYXRlLyR7aWR9YCwgdXNlcik7XHJcbiAgfVxyXG5cclxuICBkZWxldGVVc2VyKGlkKSB7XHJcbiAgXHRyZXR1cm4gdGhpcy5odHRwLmdldChgJHt0aGlzLnVyaX0vdXNlcnMvZGVsZXRlLyR7aWR9YCk7XHJcbiAgfVxyXG5cclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLyogQWRkIG1vYmlsZSBzdHlsZXMgZm9yIHRoZSBjb21wb25lbnQgaGVyZS4gICovXFxuLmltZyB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxQYWdlLmFjdGlvbkJhcj5cXHJcXG4gIDxBY3Rpb25CYXIgdGl0bGU9XFxcIlxcXCIgYmFja2dyb3VuZENvbG9yPVxcXCJibGFja1xcXCI+XFxyXFxuICBcXHQ8TmF2aWdhdGlvbkJ1dHRvbiB0ZXh0PVxcXCJHbyBCYWNrXFxcIiBhbmRyb2lkLnN5c3RlbUljb249XFxcImljX21lbnVfYmFja1xcXCIgKHRhcCk9XFxcIm9uTmF2QnRuVGFwKClcXFwiPjwvTmF2aWdhdGlvbkJ1dHRvbj5cXHJcXG4gIDwvQWN0aW9uQmFyPlxcclxcbjwvUGFnZS5hY3Rpb25CYXI+XFxyXFxuPEltYWdlIHNyYz1cXFwie3sgaW1nU291cmNlIH19XFxcIiBjbGFzcz1cXFwiaW1nXFxcIj48L0ltYWdlPlwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVHJhbnNmZXJTZXJ2aWNlIH0gZnJvbSAnLi4vZGF0YXRyYW5zZmVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLXZpZXctaW1hZ2UnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi92aWV3LWltYWdlLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi92aWV3LWltYWdlLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVmlld0ltYWdlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0cmFuc2ZlclNlcnZpY2U6IFRyYW5zZmVyU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMpIHsgfVxyXG5cclxuICBpbWdTb3VyY2U7XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIFx0dGhpcy5pbWdTb3VyY2UgPSB0aGlzLnRyYW5zZmVyU2VydmljZS5nZXREYXRhKCk7XHJcbiAgXHRjb25zb2xlLmxvZyh0aGlzLmltZ1NvdXJjZSk7XHJcbiAgfVxyXG5cclxuICBvbk5hdkJ0blRhcCgpIHtcclxuICBcdGlmKHRoaXMucm91dGVyLmNhbkdvQmFjaykge1xyXG4gIFx0XHR0aGlzLnJvdXRlci5iYWNrKCk7XHJcbiAgXHR9XHJcbiAgXHRlbHNlIHtcclxuICBcdFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUoWyduYXZpZ2F0aW9uJ10pO1xyXG4gIFx0fVxyXG4gIH1cclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLyogQWRkIG1vYmlsZSBzdHlsZXMgZm9yIHRoZSBjb21wb25lbnQgaGVyZS4gICovXFxyXFxuLnBhZ2Uge1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB2aXNpYmlsaXR5OiBjb2xsYXBzZTtcXHJcXG59XFxyXFxuLmZvcm0ge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDMwO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAzMDtcXHJcXG4gIGZsZXgtZ3JvdzogMjtcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxufVxcclxcblxcclxcbi5sb2dvIHtcXHJcXG4gIG1hcmdpbi10b3A6IDE1O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogNzI7XFxyXFxuICBoZWlnaHQ6IDEyMDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG4uaGVhZGVyIHtcXHJcXG4gIGhvcml6b250YWwtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMjU7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogNzA7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBjb2xvcjogI2FjMDBlNjtcXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0LWZpZWxkIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDI1O1xcclxcbn1cXHJcXG4uaW5wdXQge1xcclxcbiAgZm9udC1zaXplOiAxODtcXHJcXG4gIHBsYWNlaG9sZGVyLWNvbG9yOiAjQThBOEE4O1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLXByaW1hcnkge1xcclxcbiAgaGVpZ2h0OiA1MDtcXHJcXG4gIG1hcmdpbjogMzAgNSAxNSA1O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FjMDBlNjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDU7XFxyXFxuICBmb250LXNpemU6IDIwO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi1mYiB7XFxyXFxuICBoZWlnaHQ6IDEwMDtcXHJcXG4gIG1hcmdpbjogMCA1IDE1IDU7XFxyXFxuICAvKmJvcmRlci1yYWRpdXM6IDU7Ki9cXHJcXG4gIGZvbnQtc2l6ZTogMjA7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9naW4tbGFiZWwge1xcclxcbiAgaG9yaXpvbnRhbC1hbGlnbjogY2VudGVyO1xcclxcbiAgY29sb3I6ICNBOEE4QTg7XFxyXFxuICBmb250LXNpemU6IDE2O1xcclxcbiAgLyogbWFyZ2luLWJvdHRvbTogMjA7ICovXFxyXFxufVxcclxcbi5zaWduLXVwLWxhYmVsIHtcXHJcXG4gIGhvcml6b250YWwtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGNvbG9yOiAjQThBOEE4O1xcclxcbiAgZm9udC1zaXplOiAxNjtcXHJcXG4gIC8qIG1hcmdpbi1ib3R0b206IDIwOyAqL1xcclxcbn1cXHJcXG4uYm9sZCB7XFxyXFxuICBjb2xvcjogIzAwMDAwMDsgXFxyXFxufVxcclxcbi5hY3Rpdml0eS1pbmRpY2F0b3Ige1xcclxcbiAgY29sb3I6ICNhYzAwZTY7XFxyXFxufVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxTY3JvbGxWaWV3PlxcclxcblxcdDxGbGV4Ym94TGF5b3V0IGNsYXNzPVxcXCJwYWdlXFxcIiAjd2VsY29tZUNvbnRhaW5lcj5cXHJcXG5cXHRcXHQ8R3JpZExheW91dCByb3dzPVxcXCI2MzAsIGF1dG9cXFwiPlxcclxcblxcdFxcdDwhLS0gPEdyaWRMYXlvdXQgcm93cz1cXFwiMTkqLCAqXFxcIj4gLS0+XFxyXFxuXFx0XFx0XFx0PFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJmb3JtXFxcIiByb3c9XFxcIjBcXFwiIGhlaWdodD1cXFwiMTAwJVxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0PEltYWdlIGNsYXNzPVxcXCJsb2dvXFxcIiBzcmM9XFxcIn4vaW1nL2xvZ28ucG5nXFxcIj48L0ltYWdlPlxcclxcblxcdFxcdFxcdFxcdDwhLS0gPExhYmVsIGNsYXNzPVxcXCJoZWFkZXJcXFwiIHRleHQ9XFxcIkNvbGxlZ2VQb29sXFxcIj48L0xhYmVsPiAtLT5cXHJcXG5cXHJcXG5cXHRcXHRcXHRcXHQ8U3RhY2tMYXlvdXQgKm5nSWY9XFxcIiFpc0xvZ2dpbmdJblxcXCIgY2xhc3M9XFxcImlucHV0LWZpZWxkXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8VGV4dEZpZWxkIGNsYXNzPVxcXCJpbnB1dFxcXCIgaGludD1cXFwiRmlyc3QgbmFtZVxcXCIgWyhuZ01vZGVsKV09XFxcImZpcnN0TmFtZVxcXCIgcmV0dXJuS2V5VHlwZT1cXFwibmV4dFxcXCIgI2ZuPlxcclxcblxcdFxcdFxcdFxcdFxcdDwvVGV4dEZpZWxkPlxcclxcblxcdFxcdFxcdFxcdFxcdDxTdGFja0xheW91dCBjbGFzcz1cXFwiaHItbGlnaHRcXFwiPjwvU3RhY2tMYXlvdXQ+XFxyXFxuXFx0XFx0XFx0XFx0PC9TdGFja0xheW91dD5cXHJcXG5cXHJcXG5cXHRcXHRcXHRcXHQ8U3RhY2tMYXlvdXQgKm5nSWY9XFxcIiFpc0xvZ2dpbmdJblxcXCIgY2xhc3M9XFxcImlucHV0LWZpZWxkXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8VGV4dEZpZWxkIGNsYXNzPVxcXCJpbnB1dFxcXCIgaGludD1cXFwiTGFzdCBuYW1lXFxcIiBbKG5nTW9kZWwpXT1cXFwibGFzdE5hbWVcXFwiIHJldHVybktleVR5cGU9XFxcIm5leHRcXFwiICNsbj5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8L1RleHRGaWVsZD5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImhyLWxpZ2h0XFxcIj48L1N0YWNrTGF5b3V0PlxcclxcblxcdFxcdFxcdFxcdDwvU3RhY2tMYXlvdXQ+XFxyXFxuXFxyXFxuXFx0XFx0XFx0XFx0PFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJpbnB1dC1maWVsZFxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PFRleHRGaWVsZCBjbGFzcz1cXFwiaW5wdXRcXFwiIGhpbnQ9XFxcIkVtYWlsXFxcIiBrZXlib2FyZFR5cGU9XFxcImVtYWlsXFxcIiBhdXRvY29ycmVjdD1cXFwiZmFsc2VcXFwiXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0YXV0b2NhcGl0YWxpemF0aW9uVHlwZT1cXFwibm9uZVxcXCIgWyhuZ01vZGVsKV09XFxcImVtYWlsXFxcIiByZXR1cm5LZXlUeXBlPVxcXCJuZXh0XFxcIlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdChyZXR1cm5QcmVzcyk9XFxcImZvY3VzUGFzc3dvcmQoKVxcXCIgI2VtPjwvVGV4dEZpZWxkPlxcclxcblxcdFxcdFxcdFxcdFxcdDxTdGFja0xheW91dCBjbGFzcz1cXFwiaHItbGlnaHRcXFwiPjwvU3RhY2tMYXlvdXQ+XFxyXFxuXFx0XFx0XFx0XFx0PC9TdGFja0xheW91dD5cXHJcXG5cXHJcXG5cXHRcXHRcXHRcXHQ8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImlucHV0LWZpZWxkXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8VGV4dEZpZWxkIGNsYXNzPVxcXCJpbnB1dFxcXCIgaGludD1cXFwiUGFzc3dvcmRcXFwiIHNlY3VyZT1cXFwidHJ1ZVxcXCIgWyhuZ01vZGVsKV09XFxcInBhc3N3b3JkXFxcIlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFtyZXR1cm5LZXlUeXBlXT1cXFwiaXNMb2dnaW5nSW4gPyAnZG9uZScgOiAnbmV4dCdcXFwiIChyZXR1cm5QcmVzcyk9XFxcImZvY3VzQ29uZmlybVBhc3N3b3JkKClcXFwiICNwdz5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8L1RleHRGaWVsZD5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImhyLWxpZ2h0XFxcIj48L1N0YWNrTGF5b3V0PlxcclxcblxcdFxcdFxcdFxcdDwvU3RhY2tMYXlvdXQ+XFxyXFxuXFxyXFxuXFx0XFx0XFx0XFx0PFN0YWNrTGF5b3V0ICpuZ0lmPVxcXCIhaXNMb2dnaW5nSW5cXFwiIGNsYXNzPVxcXCJpbnB1dC1maWVsZFxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PFRleHRGaWVsZCBjbGFzcz1cXFwiaW5wdXRcXFwiIGhpbnQ9XFxcIkNvbmZpcm0gcGFzc3dvcmRcXFwiIHNlY3VyZT1cXFwidHJ1ZVxcXCIgWyhuZ01vZGVsKV09XFxcImNvbmZpcm1QYXNzd29yZFxcXCJcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRyZXR1cm5LZXlUeXBlPVxcXCJkb25lXFxcIiAjY3B3PjwvVGV4dEZpZWxkPlxcclxcblxcdFxcdFxcdFxcdFxcdDxTdGFja0xheW91dCBjbGFzcz1cXFwiaHItbGlnaHRcXFwiPjwvU3RhY2tMYXlvdXQ+XFxyXFxuXFx0XFx0XFx0XFx0PC9TdGFja0xheW91dD5cXHJcXG5cXHJcXG5cXHRcXHRcXHRcXHQ8QnV0dG9uIFt0ZXh0XT1cXFwiaXNMb2dnaW5nSW4gPyAnTG9nIEluJyA6ICdTaWduIFVwJ1xcXCIgKHRhcCk9XFxcInN1Ym1pdCgpXFxcIlxcclxcblxcdFxcdFxcdFxcdFxcdGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnkgbS10LTIwXFxcIj48L0J1dHRvbj5cXHJcXG5cXHRcXHRcXHRcXHQ8U3RhY2tMYXlvdXQ+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PEZhY2Vib29rTG9naW5CdXR0b24gKHRhcCk9XFxcImZiTG9naW4oKVxcXCIgY2xhc3M9XFxcImJ0bi1mYlxcXCI+PC9GYWNlYm9va0xvZ2luQnV0dG9uPlxcclxcblxcdFxcdFxcdFxcdDwvU3RhY2tMYXlvdXQ+XFxyXFxuXFx0XFx0XFx0XFx0PExhYmVsICpuZ0lmPVxcXCJpc0xvZ2dpbmdJblxcXCIgdGV4dD1cXFwiRm9yZ290IHlvdXIgcGFzc3dvcmQ/XFxcIiBjbGFzcz1cXFwibG9naW4tbGFiZWxcXFwiXFxyXFxuXFx0XFx0XFx0XFx0XFx0KHRhcCk9XFxcImZvcmdvdFBhc3N3b3JkKClcXFwiPjwvTGFiZWw+XFxyXFxuXFx0XFx0XFx0PC9TdGFja0xheW91dD5cXHJcXG5cXHRcXHRcXHQ8U3RhY2tMYXlvdXQgcm93PVxcXCIxXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHQ8TGFiZWwgY2xhc3M9XFxcInNpZ24tdXAtbGFiZWxcXFwiICh0YXApPVxcXCJ0b2dnbGVGb3JtKClcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdDxGb3JtYXR0ZWRTdHJpbmc+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PFNwYW4gW3RleHRdPVxcXCJpc0xvZ2dpbmdJbiA/ICdEb27igJl0IGhhdmUgYW4gYWNjb3VudD8gJyA6ICdCYWNrIHRvIExvZ2luJ1xcXCI+PC9TcGFuPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDxTcGFuIFt0ZXh0XT1cXFwiaXNMb2dnaW5nSW4gPyAnU2lnbiB1cCcgOiAnJ1xcXCIgY2xhc3M9XFxcImJvbGRcXFwiPjwvU3Bhbj5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8L0Zvcm1hdHRlZFN0cmluZz5cXHJcXG5cXHRcXHRcXHRcXHQ8L0xhYmVsPlxcclxcblxcdFxcdFxcdDwvU3RhY2tMYXlvdXQ+XFxyXFxuXFx0XFx0PC9HcmlkTGF5b3V0PlxcclxcblxcdDwvRmxleGJveExheW91dD5cXHJcXG48L1Njcm9sbFZpZXc+XFxyXFxuPEFjdGl2aXR5SW5kaWNhdG9yICNhY3Rpdml0eUluZGljYXRvciBidXN5PVxcXCJ0cnVlXFxcIiB3aWR0aD1cXFwiNDBcXFwiIGhlaWdodD1cXFwiNDBcXFwiIGNsYXNzPVxcXCJhY3Rpdml0eS1pbmRpY2F0b3JcXFwiPlxcclxcbjwvQWN0aXZpdHlJbmRpY2F0b3I+XCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgRWxlbWVudFJlZiwgVmlld0NoaWxkLCBOZ1pvbmUsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgYWxlcnQsIHByb21wdCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3NcIjtcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvcGFnZSc7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgKiBhcyBmaXJlYmFzZSBmcm9tICduYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlJztcclxuaW1wb3J0IHsgbWVzc2FnaW5nLCBNZXNzYWdlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2UvbWVzc2FnaW5nXCI7XHJcbmltcG9ydCB7IExvZ2luY2hlY2tTZXJ2aWNlIH0gZnJvbSAnLi4vbG9naW5jaGVjay5zZXJ2aWNlLnRucyc7XHJcbmltcG9ydCB7IEFjdGl2aXR5SW5kaWNhdG9yIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9hY3Rpdml0eS1pbmRpY2F0b3InO1xyXG5pbXBvcnQgeyBUcmFuc2ZlclNlcnZpY2UgfSBmcm9tICcuLi9kYXRhdHJhbnNmZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IE1vZGFsRGlhbG9nU2VydmljZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9kaXJlY3RpdmVzL2RpYWxvZ3NcIjtcclxuaW1wb3J0IHsgRm9yZ2V0Rm9ybUNvbXBvbmVudCB9IGZyb20gJy4uL2ZvcmdldC1mb3JtL2ZvcmdldC1mb3JtLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC13ZWxjb21lJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vd2VsY29tZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vd2VsY29tZS5jb21wb25lbnQuY3NzJ11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBXZWxjb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBpc0xvZ2dpbmdJbiA9IHRydWU7XHJcbiAgZW1haWw7XHJcbiAgcGFzc3dvcmQ7XHJcbiAgY29uZmlybVBhc3N3b3JkO1xyXG4gIGZpcnN0TmFtZTtcclxuICBsYXN0TmFtZTtcclxuICBkZXZpY2VUb2tlbjtcclxuICBmaXJlYmFzZUNvbmZpZyA9IHtcclxuICAgIGFwaUtleTogXCJBSXphU3lCR3VpWXBNMTM4UTZheXFETVJVVldKcDFDRTlXQjA5TndcIixcclxuICAgIGF1dGhEb21haW46IFwiY29sbGVnZXBvb2wtMTU1Mjc0OTExODYxNy5maXJlYmFzZWFwcC5jb21cIixcclxuICAgIGRhdGFiYXNlVVJMOiBcImh0dHBzOi8vY29sbGVnZXBvb2wtMTU1Mjc0OTExODYxNy5maXJlYmFzZWlvLmNvbVwiLFxyXG4gICAgcHJvamVjdElkOiBcImNvbGxlZ2Vwb29sLTE1NTI3NDkxMTg2MTdcIixcclxuICAgIHN0b3JhZ2VCdWNrZXQ6IFwiZ3M6Ly9jb2xsZWdlcG9vbC0xNTUyNzQ5MTE4NjE3LmFwcHNwb3QuY29tXCIsXHJcbiAgICBtZXNzYWdpbmdTZW5kZXJJZDogXCIzNzUyNjM2ODAxODNcIixcclxuICAgIGFwcElkOiBcIjE6Mzc1MjYzNjgwMTgzOndlYjpmMmFmM2YyODM1NjM4ZDdjXCIsXHJcbiAgfTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwYWdlOiBQYWdlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSBsb2dpbmNoZWNrU2VydmljZTogTG9naW5jaGVja1NlcnZpY2UsIHByaXZhdGUgdHJhbnNmZXJTZXJ2aWNlOiBUcmFuc2ZlclNlcnZpY2UsXHJcbiAgICBwcml2YXRlIG5nWm9uZTogTmdab25lLCBwcml2YXRlIG1vZGFsOiBNb2RhbERpYWxvZ1NlcnZpY2UsIHByaXZhdGUgdmNSZWY6IFZpZXdDb250YWluZXJSZWYpIHsgfVxyXG5cclxuICBAVmlld0NoaWxkKFwiZW1cIiwgeyBzdGF0aWM6IHRydWUgfSkgZW06IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZChcInB3XCIsIHsgc3RhdGljOiB0cnVlIH0pIHB3OiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoXCJjcHdcIiwgeyBzdGF0aWM6IHRydWUgfSkgY3B3OiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoXCJmblwiLCB7IHN0YXRpYzogdHJ1ZSB9KSBmbjogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKFwibG5cIiwgeyBzdGF0aWM6IHRydWUgfSkgbG46IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZChcIndlbGNvbWVDb250YWluZXJcIiwgeyBzdGF0aWM6IHRydWUgfSkgd2M6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZChcImFjdGl2aXR5SW5kaWNhdG9yXCIsIHsgc3RhdGljOiB0cnVlIH0pIGFpOiBFbGVtZW50UmVmO1xyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMucmVnaXN0ZXJOb3RpZmljYXRpb25zKCk7XHJcbiAgICB0aGlzLmNyZWF0ZVZpZXdzKCk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBjcmVhdGVWaWV3cygpIHtcclxuICAgIGF3YWl0IGZpcmViYXNlLmluaXQodGhpcy5maXJlYmFzZUNvbmZpZykudGhlbihcclxuICAgICAgKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZmlyZWJhc2UuaW5pdCBkb25lXCIpO1xyXG4gICAgICB9LFxyXG4gICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYGZpcmViYXNlLmluaXQgZXJyb3I6ICR7ZXJyb3J9YCk7XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgICBhd2FpdCBmaXJlYmFzZS5hZGRPbk1lc3NhZ2VSZWNlaXZlZENhbGxiYWNrKGFzeW5jIChtZXNzYWdlOiBhbnkpID0+IHtcclxuICAgICAgaWYobWVzc2FnZS50eXBlID09PSBcIk5ldyBNZXNzYWdlXCIpIHtcclxuICAgICAgICB0aGlzLnRyYW5zZmVyU2VydmljZS5zZXREYXRhKG1lc3NhZ2UuZGF0YS5jaGF0SWQpO1xyXG4gICAgICAgIGF3YWl0IHRoaXMubmdab25lLnJ1bigoKSA9PiB7dGhpcy5yb3V0ZXIubmF2aWdhdGUoWydjaGF0J10sIHtjbGVhckhpc3Rvcnk6IHRydWV9KX0pXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICBpZiAodGhpcy5sb2dpbmNoZWNrU2VydmljZS5nZXRVc2VyRnJvbUxvY2FsU3RvcmFnZSgpICE9IG51bGwpXHJcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnbmF2aWdhdGlvbiddLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcclxuICAgIGVsc2Uge1xyXG4gICAgICB2YXIgYWN0aXZpdHlJbmRpY2F0b3IgPSA8QWN0aXZpdHlJbmRpY2F0b3I+dGhpcy5haS5uYXRpdmVFbGVtZW50O1xyXG4gICAgICBhY3Rpdml0eUluZGljYXRvci5idXN5ID0gZmFsc2U7XHJcbiAgICAgIHRoaXMud2MubmF0aXZlRWxlbWVudC5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xyXG4gICAgfVxyXG4gICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XHJcbiAgfVxyXG5cclxuICB0b2dnbGVGb3JtKCkge1xyXG4gICAgdGhpcy5pc0xvZ2dpbmdJbiA9ICF0aGlzLmlzTG9nZ2luZ0luO1xyXG4gIH1cclxuXHJcbiAgc3VibWl0KCkge1xyXG4gICAgaWYgKCF0aGlzLmVtYWlsIHx8ICF0aGlzLnBhc3N3b3JkKSB7XHJcbiAgICAgIHRoaXMuYWxlcnQoXCJQbGVhc2UgcHJvdmlkZSBib3RoIGFuIGVtYWlsIGFkZHJlc3MgYW5kIHBhc3N3b3JkXCIpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuaXNMb2dnaW5nSW4pIHtcclxuICAgICAgdGhpcy5sb2dpbigpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5yZWdpc3RlcigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbG9naW4oKSB7XHJcbiAgICB2YXIgY3JlZGVudGlhbHM6IGZpcmViYXNlLkxvZ2luT3B0aW9ucyA9IHtcclxuICAgICAgcGFzc3dvcmRPcHRpb25zOiB7XHJcbiAgICAgICAgZW1haWw6IHRoaXMuZW1haWwsXHJcbiAgICAgICAgcGFzc3dvcmQ6IHRoaXMucGFzc3dvcmQsXHJcbiAgICAgIH0sXHJcbiAgICAgIHR5cGU6IGZpcmViYXNlLkxvZ2luVHlwZS5QQVNTV09SRFxyXG4gICAgfVxyXG4gICAgZmlyZWJhc2UubG9naW4oY3JlZGVudGlhbHMpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkVtYWlsIFZlcmlmaWVkIFN0YXR1c1wiLCByZXMuZW1haWxWZXJpZmllZClcclxuICAgICAgaWYgKHJlcy5lbWFpbFZlcmlmaWVkKSB7XHJcbiAgICAgICAgdGhpcy5sb2dpbmNoZWNrU2VydmljZS5sb2dpblVzZXIocmVzLnVpZClcclxuICAgICAgICBmaXJlYmFzZS5maXJlc3RvcmUuY29sbGVjdGlvbigndXNlcnMnKS5kb2MocmVzLnVpZCkuZ2V0KCkudGhlbihkb2MgPT4ge1xyXG4gICAgICAgICAgaWYgKGRvYy5kYXRhKCkucGF5bWVudF9pZCA9PSBudWxsKVxyXG4gICAgICAgICAgICB0aGlzLmxvZ2luY2hlY2tTZXJ2aWNlLmFkZFVzZXJUb0JyYWludHJlZShyZXMuZGlzcGxheU5hbWUsIHJlcy5kaXNwbGF5TmFtZSwgcmVzLmVtYWlsKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy51cGRhdGVUb2tlbnMocmVzLnVpZCk7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWyduYXZpZ2F0aW9uJ10sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2V7XHJcbiAgICAgICAgdGhpcy5hbGVydChcIllvdXIgZW1haWwgaGFzIG5vdCBiZWVuIHZlcmlmaWVkIHlldC4gUGxlYXNlIGNoZWNrIHlvdXIgZW1haWwgZm9yIGEgdmVyaWZpY2F0aW9uIGxpbmsuXCIpXHJcbiAgICAgIH1cclxuICAgIH0pLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgdGhpcy5hbGVydChcIldlIGNvdWxkIG5vdCBmaW5kIGFuIGFjY291bnQgbWF0Y2hpbmcgeW91ciBlbWFpbCBvciBwYXNzd29yZC5cIik7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICByZWdpc3RlcigpIHtcclxuICAgIGlmICh0aGlzLnBhc3N3b3JkICE9IHRoaXMuY29uZmlybVBhc3N3b3JkKSB7XHJcbiAgICAgIHRoaXMuYWxlcnQoXCJZb3VyIHBhc3N3b3JkcyBkbyBub3QgbWF0Y2hcIik7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGZpcmViYXNlLmNyZWF0ZVVzZXIoe1xyXG4gICAgICBlbWFpbDogdGhpcy5lbWFpbCxcclxuICAgICAgcGFzc3dvcmQ6IHRoaXMucGFzc3dvcmQsXHJcbiAgICB9KS50aGVuKChyZXMpID0+IHtcclxuICAgICAgdGhpcy5sb2dpbmNoZWNrU2VydmljZS5hZGRVc2VyVG9GaXJlc3RvcmUocmVzLnVpZCwgbnVsbCwgbnVsbCwgcmVzLmVtYWlsLCB0aGlzLmZpcnN0TmFtZSwgdGhpcy5sYXN0TmFtZSwgbnVsbCwgbnVsbCwgMCwgMCwgJ34vaW1nL3NhbXBsZV9wcm9maWxlLnBuZycsIHRoaXMuZGV2aWNlVG9rZW4pXHJcbiAgICAgIGZpcmViYXNlLnVwZGF0ZVByb2ZpbGUoeyBkaXNwbGF5TmFtZTogdGhpcy5maXJzdE5hbWUgKyAnICcgKyB0aGlzLmxhc3ROYW1lIH0pLnRoZW4oKTtcclxuICAgICAgLy8gdGhpcy5sb2dpbmNoZWNrU2VydmljZS5sb2dpblVzZXIocmVzLnVpZClcclxuICAgICAgdGhpcy5sb2dpbmNoZWNrU2VydmljZS5hZGRVc2VyVG9CcmFpbnRyZWUoJ3Rlc3QnLCAndGVzdCB1c2VyJywgcmVzLmVtYWlsKVxyXG4gICAgICBmaXJlYmFzZS5zZW5kRW1haWxWZXJpZmljYXRpb24oKS50aGVuKFxyXG4gICAgICAgICgpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiRW1haWwgdmVyaWZpY2F0aW9uIHNlbnRcIik7XHJcbiAgICAgICAgICB0aGlzLmFsZXJ0KFwiQW4gZW1haWwgdmVyaWZpY2F0aW9uIGxpbmsgaGFzIGJlZW4gc2VudC4gUGxlYXNlIGNoZWNrIHlvdXIgZW1haWwgZm9yIHRoZSBsaW5rLlwiKVxyXG4gICAgICAgICAgdGhpcy50b2dnbGVGb3JtKCk7XHJcbiAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3Igc2VuZGluZyBlbWFpbCB2ZXJpZmljYXRpb2RuOiBcIiArIGVycik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGlmIChlcnIgPT0gJ0NyZWF0aW5nIGEgdXNlciBmYWlsZWQuIGNvbS5nb29nbGUuZmlyZWJhc2UuYXV0aC5GaXJlYmFzZUF1dGhVc2VyQ29sbGlzaW9uRXhjZXB0aW9uOiBUaGUgZW1haWwgYWRkcmVzcyBpcyBhbHJlYWR5IGluIHVzZSBieSBhbm90aGVyIGFjY291bnQuJylcclxuICAgICAgICB0aGlzLmFsZXJ0KCdUaGVyZSBpcyBhbHJlYWR5IGFuIGFjY291bnQgYXNzb2NpYXRlZCB3aXRoIHRoYXQgZW1haWwnKVxyXG4gICAgICBlbHNlIGlmIChlcnIgPT0gJ0NyZWF0aW5nIGEgdXNlciBmYWlsZWQuIFBhc3N3b3JkIHNob3VsZCBiZSBhdCBsZWFzdCA2IGNoYXJhY3RlcnMnKVxyXG4gICAgICAgIHRoaXMuYWxlcnQoJ1Bhc3N3b3JkIG11c3QgYmUgYXQgbGVhc3QgNiBjaGFyYWN0ZXJzJylcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGZvcmdvdFBhc3N3b3JkKCkge1xyXG5cclxuICAgIGxldCBvcHRpb25zID0ge1xyXG4gICAgICBjb250ZXh0OiB7fSxcclxuICAgICAgZnVsbHNjcmVlbjogdHJ1ZSxcclxuICAgICAgdmlld0NvbnRhaW5lclJlZjogdGhpcy52Y1JlZlxyXG4gICAgICAvLyBhbmltYXRlZDogdHJ1ZSxcclxuICAgICAgLy8gdHJhbnNpdGlvbjogeyBuYW1lOiBcInNsaWRlVG9wXCIgfVxyXG4gIH07XHJcbiAgICB0aGlzLm1vZGFsLnNob3dNb2RhbChGb3JnZXRGb3JtQ29tcG9uZW50LCBvcHRpb25zKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgIGlmKHJlcyA9PSAndXBkYXRlJykge1xyXG4gICAgICAgIC8vIHRoaXMudXBkYXRlTGlzdFZpZXcoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck5vdGlmaWNhdGlvbnMoKSB7XHJcbiAgICBtZXNzYWdpbmcucmVnaXN0ZXJGb3JQdXNoTm90aWZpY2F0aW9ucyh7XHJcbiAgICAgIG9uUHVzaFRva2VuUmVjZWl2ZWRDYWxsYmFjazogKHRva2VuOiBzdHJpbmcpOiB2b2lkID0+IHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkZpcmViYXNlIHBsdWdpbiByZWNlaXZlZCBhIHB1c2ggdG9rZW46IFwiICsgdG9rZW4pO1xyXG4gICAgICAgIHRoaXMuZGV2aWNlVG9rZW4gPSB0b2tlbjtcclxuICAgICAgfSxcclxuXHJcbiAgICAgIG9uTWVzc2FnZVJlY2VpdmVkQ2FsbGJhY2s6IChtZXNzYWdlOiBNZXNzYWdlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJQdXNoIG1lc3NhZ2UgcmVjZWl2ZWQ6IFwiICsgbWVzc2FnZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJNZXNzYWdlIGRhdGE6IFwiICsgbWVzc2FnZS5kYXRhKTtcclxuICAgICAgfSxcclxuXHJcbiAgICAgIC8vIFdoZXRoZXIgeW91IHdhbnQgdGhpcyBwbHVnaW4gdG8gYXV0b21hdGljYWxseSBkaXNwbGF5IHRoZSBub3RpZmljYXRpb25zIG9yIGp1c3Qgbm90aWZ5IHRoZSBjYWxsYmFjay4gQ3VycmVudGx5IHVzZWQgb24gaU9TIG9ubHkuIERlZmF1bHQgdHJ1ZS5cclxuICAgICAgc2hvd05vdGlmaWNhdGlvbnM6IHRydWUsXHJcblxyXG4gICAgICAvLyBXaGV0aGVyIHlvdSB3YW50IHRoaXMgcGx1Z2luIHRvIGFsd2F5cyBoYW5kbGUgdGhlIG5vdGlmaWNhdGlvbnMgd2hlbiB0aGUgYXBwIGlzIGluIGZvcmVncm91bmQuIEN1cnJlbnRseSB1c2VkIG9uIGlPUyBvbmx5LiBEZWZhdWx0IGZhbHNlLlxyXG4gICAgICBzaG93Tm90aWZpY2F0aW9uc1doZW5JbkZvcmVncm91bmQ6IGZhbHNlXHJcbiAgICB9KS50aGVuKCgpID0+IGNvbnNvbGUubG9nKFwiUmVnaXN0ZXJlZCBmb3IgcHVzaFwiKSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVUb2tlbnModWlkKSB7XHJcbiAgICBjb25zdCB1c2VyRG9jdW1lbnQgPSBmaXJlYmFzZS5maXJlc3RvcmUuY29sbGVjdGlvbigndXNlcnMnKS5kb2ModWlkKTtcclxuICAgIHVzZXJEb2N1bWVudC5nZXQoKS50aGVuKGFzeW5jIChkb2MpID0+IHtcclxuICAgICAgbGV0IHRva2VucyA9IGRvYy5kYXRhKCkudG9rZW5zO1xyXG4gICAgICBpZiAodG9rZW5zKSB7XHJcbiAgICAgICAgdG9rZW5zLnB1c2godGhpcy5kZXZpY2VUb2tlbik7XHJcbiAgICAgICAgbGV0IHVwZGF0ZWRUb2tlbnMgPSBBcnJheS5mcm9tKG5ldyBTZXQodG9rZW5zKSk7XHJcbiAgICAgICAgdXNlckRvY3VtZW50LnVwZGF0ZSh7XHJcbiAgICAgICAgICB0b2tlbnM6IHVwZGF0ZWRUb2tlbnNcclxuICAgICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICB1c2VyRG9jdW1lbnQudXBkYXRlKHtcclxuICAgICAgICAgIHRva2VuczogW3RoaXMuZGV2aWNlVG9rZW5dXHJcbiAgICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgY2hhdFByb21pc2UgPSBhd2FpdCB0aGlzLnVwZGF0ZUNoYXRUb2tlbnMoZG9jLmRhdGEoKS5jaGF0cyk7XHJcbiAgICB9KS5jYXRjaCgoZXJyKSA9PiB7IGNvbnNvbGUubG9nKGVycikgfSlcclxuICB9XHJcblxyXG4gIGFzeW5jIHVwZGF0ZUNoYXRUb2tlbnMoY2hhdHMpIHtcclxuICAgIGxldCBjaGF0Q29sbGVjdGlvbiA9IGZpcmViYXNlLmZpcmVzdG9yZS5jb2xsZWN0aW9uKCdjaGF0cycpO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGF0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBjaGF0UHJvbWlzZSA9IGF3YWl0IGNoYXRDb2xsZWN0aW9uLmRvYyhjaGF0c1tpXSkuZ2V0KCkudGhlbihhc3luYyAoZG9jKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdG9rZW5zID0gZG9jLmRhdGEoKS50b2tlbnM7XHJcbiAgICAgICAgdG9rZW5zLnB1c2godGhpcy5kZXZpY2VUb2tlbik7XHJcbiAgICAgICAgY29uc3QgbmV3VG9rZW5zID0gQXJyYXkuZnJvbShuZXcgU2V0KHRva2VucykpO1xyXG4gICAgICAgIGNvbnN0IHVwZGF0ZVByb21pc2UgPSBhd2FpdCBjaGF0Q29sbGVjdGlvbi5kb2MoY2hhdHNbaV0pLnVwZGF0ZSh7IHRva2VuczogbmV3VG9rZW5zIH0pO1xyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZm9jdXNFbWFpbCgpIHtcclxuICAgIHRoaXMuZW0ubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG4gIH1cclxuXHJcbiAgZm9jdXNMYXN0TmFtZSgpIHtcclxuICAgIHRoaXMubG4ubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG4gIH1cclxuXHJcbiAgZm9jdXNQYXNzd29yZCgpIHtcclxuICAgIHRoaXMucHcubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG4gIH1cclxuXHJcbiAgZm9jdXNDb25maXJtUGFzc3dvcmQoKSB7XHJcbiAgICBpZiAoIXRoaXMuaXNMb2dnaW5nSW4gJiYgdGhpcy5jcHcpIHtcclxuICAgICAgdGhpcy5jcHcubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYWxlcnQobWVzc2FnZTogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gYWxlcnQoe1xyXG4gICAgICB0aXRsZTogXCJDb2xsZWdlUG9vbFwiLFxyXG4gICAgICBva0J1dHRvblRleHQ6IFwiQ2xvc2VcIixcclxuICAgICAgbWVzc2FnZTogbWVzc2FnZVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBmYkxvZ2luKCkge1xyXG4gICAgdGhpcy53Yy5uYXRpdmVFbGVtZW50LnN0eWxlLnZpc2liaWxpdHkgPSAnY29sbGFwc2UnO1xyXG4gICAgdmFyIGFjdGl2aXR5SW5kaWNhdG9yID0gPEFjdGl2aXR5SW5kaWNhdG9yPnRoaXMuYWkubmF0aXZlRWxlbWVudDtcclxuICAgIGFjdGl2aXR5SW5kaWNhdG9yLmJ1c3kgPSB0cnVlO1xyXG4gICAgZmlyZWJhc2UubG9naW4oe1xyXG4gICAgICB0eXBlOiBmaXJlYmFzZS5Mb2dpblR5cGUuRkFDRUJPT0ssXHJcbiAgICAgIC8vIE9wdGlvbmFsXHJcbiAgICAgIGZhY2Vib29rT3B0aW9uczoge1xyXG4gICAgICAgIC8vIGRlZmF1bHRzIHRvIFsncHVibGljX3Byb2ZpbGUnLCAnZW1haWwnXVxyXG4gICAgICAgIHNjb3BlczogWydwdWJsaWNfcHJvZmlsZScsICdlbWFpbCcsICd1c2VyX2JpcnRoZGF5JywgJ3VzZXJfZ2VuZGVyJ10gLy8gbm90ZTogdGhpcyBwcm9wZXJ0eSB3YXMgcmVuYW1lZCBmcm9tIFwic2NvcGVcIiBpbiA4LjQuMFxyXG4gICAgICB9XHJcbiAgICB9KS50aGVuKFxyXG4gICAgICAocmVzKSA9PiB7XHJcbiAgICAgICAgZmlyZWJhc2UuZmlyZXN0b3JlLmNvbGxlY3Rpb24oJ3VzZXJzJykuZG9jKHJlcy51aWQpLmdldCgpLnRoZW4oZG9jID0+IHtcclxuICAgICAgICAgIGlmIChkb2MuZXhpc3RzID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9naW5jaGVja1NlcnZpY2UuYWRkVXNlclRvRmlyZXN0b3JlKHJlcy51aWQsIG51bGwsIG51bGwsIHJlcy5lbWFpbCwgcmVzLmFkZGl0aW9uYWxVc2VySW5mby5wcm9maWxlWydmaXJzdF9uYW1lJ10sIHJlcy5hZGRpdGlvbmFsVXNlckluZm8ucHJvZmlsZVsnbGFzdF9uYW1lJ10sIG51bGwsIG51bGwsIDAsIDAsIHJlcy5waG90b1VSTCwgdGhpcy5kZXZpY2VUb2tlbik7XHJcbiAgICAgICAgICAgIHRoaXMubG9naW5jaGVja1NlcnZpY2UuYWRkVXNlclRvQnJhaW50cmVlKHJlcy5kaXNwbGF5TmFtZSwgcmVzLmRpc3BsYXlOYW1lLCByZXMuZW1haWwpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbHNlIGlmIChkb2MuZGF0YSgpLnBheW1lbnRfaWQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLmxvZ2luY2hlY2tTZXJ2aWNlLmFkZFVzZXJUb0JyYWludHJlZShyZXMuZGlzcGxheU5hbWUsIHJlcy5kaXNwbGF5TmFtZSwgcmVzLmVtYWlsKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVG9rZW5zKHJlcy51aWQpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5sb2dpbmNoZWNrU2VydmljZS5sb2dpblVzZXIocmVzLnVpZClcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ25hdmlnYXRpb24nXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIChlcnJvck1lc3NhZ2UpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvck1lc3NhZ2UpO1xyXG4gICAgICAgIHRoaXMud2MubmF0aXZlRWxlbWVudC5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG5cclxuICB9XHJcblxyXG59XHJcbiIsIi8vIHRoaXMgaW1wb3J0IHNob3VsZCBiZSBmaXJzdCBpbiBvcmRlciB0byBsb2FkIHNvbWUgcmVxdWlyZWQgc2V0dGluZ3MgKGxpa2UgZ2xvYmFscyBhbmQgcmVmbGVjdC1tZXRhZGF0YSlcclxuaW1wb3J0IHsgcGxhdGZvcm1OYXRpdmVTY3JpcHREeW5hbWljIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcGxhdGZvcm0nO1xyXG5cclxuXHJcbmltcG9ydCB7IEFwcE1vZHVsZSB9IGZyb20gJy4vYXBwL2FwcC5tb2R1bGUnO1xyXG5pbXBvcnQge3JlZ2lzdGVyRWxlbWVudH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2VsZW1lbnQtcmVnaXN0cnlcIjtcclxuXHJcbnJlZ2lzdGVyRWxlbWVudChcIlJpcHBsZVwiLCAoKSA9PiByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXJpcHBsZVwiKS5SaXBwbGUpO1xyXG4vLyBpbXBvcnQgQW1wbGlmeSBmcm9tIFwiQGF3cy1hbXBsaWZ5L2NvcmVcIjtcclxuLy8gcmVxdWlyZSgnbmF0aXZlc2NyaXB0LW5vZGVpZnknKVxyXG4vLyBpbXBvcnQgYXdzY29uZmlnIGZyb20gJy4vYXdzLWV4cG9ydHMnO1xyXG5cclxuLy8gQW1wbGlmeS5jb25maWd1cmUoYXdzY29uZmlnKTtcclxuXHJcbi8vIEEgdHJhZGl0aW9uYWwgTmF0aXZlU2NyaXB0IGFwcGxpY2F0aW9uIHN0YXJ0cyBieSBpbml0aWFsaXppbmcgZ2xvYmFsIG9iamVjdHMsIHNldHRpbmcgdXAgZ2xvYmFsIENTUyBydWxlcywgY3JlYXRpbmcsIGFuZCBuYXZpZ2F0aW5nIHRvIHRoZSBtYWluIHBhZ2UuIFxyXG4vLyBBbmd1bGFyIGFwcGxpY2F0aW9ucyBuZWVkIHRvIHRha2UgY2FyZSBvZiB0aGVpciBvd24gaW5pdGlhbGl6YXRpb246IG1vZHVsZXMsIGNvbXBvbmVudHMsIGRpcmVjdGl2ZXMsIHJvdXRlcywgREkgcHJvdmlkZXJzLiBcclxuLy8gQSBOYXRpdmVTY3JpcHQgQW5ndWxhciBhcHAgbmVlZHMgdG8gbWFrZSBib3RoIHBhcmFkaWdtcyB3b3JrIHRvZ2V0aGVyLCBzbyB3ZSBwcm92aWRlIGEgd3JhcHBlciBwbGF0Zm9ybSBvYmplY3QsIHBsYXRmb3JtTmF0aXZlU2NyaXB0RHluYW1pYywgXHJcbi8vIHRoYXQgc2V0cyB1cCBhIE5hdGl2ZVNjcmlwdCBhcHBsaWNhdGlvbiBhbmQgY2FuIGJvb3RzdHJhcCB0aGUgQW5ndWxhciBmcmFtZXdvcmsuXHJcbnBsYXRmb3JtTmF0aXZlU2NyaXB0RHluYW1pYygpLmJvb3RzdHJhcE1vZHVsZShBcHBNb2R1bGUpO1xyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=