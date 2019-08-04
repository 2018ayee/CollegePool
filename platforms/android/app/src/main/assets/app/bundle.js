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

module.exports = "<Page.actionBar>\r\n    <ActionBar title=\"{{ chatName }}\" android:horizontalAlignment=\"center\" ios:horizontalAlignment=\"center\">\r\n    \t<NavigationButton text=\"Go Back\" android.systemIcon=\"ic_menu_back\" (tap)=\"onNavBtnTap()\"></NavigationButton>\r\n\t    <ActionItem (tap)=\"onLeave()\"\r\n\t      ios.systemIcon=\"9\" ios.position=\"right\"\r\n\t      text=\"Leave chat\" android.position=\"popup\"></ActionItem>\r\n    </ActionBar>\r\n</Page.actionBar>\r\n\r\n<GridLayout rows=\"*, auto\">\r\n    <ListView margin-bottom=\"50\" padding=\"5\" #messageList [items]=\"messages\" separatorColor=\"transparent\" (setupItemView)=\"setupItemView($event)\" row=\"0\" (loadMoreItems)=\"loadMoreData()\">\r\n        <ng-template let-item=\"item\" let-i=\"index\" let-mine=\"mine\" let-theirs=\"theirs\" let-mineContinuation=\"mineContinuation\" let-theirsContinuation=\"theirsContinuation\" let-mineContinuationGrid=\"mineContinuationGrid\" let-theirsContinuationGrid=\"theirsContinuationGrid\" let-grid=\"grid\" let-mineTime=\"mineTime\" let-theirsTime=\"theirsTime\" let-time=\"time\">\r\n            <StackLayout width=\"80%\" [class.mineContinuationGrid]=\"mineContinuationGrid\" [class.theirsContinuationGrid]=\"theirsContinuationGrid\" [class.grid]=\"grid\">\r\n                <StackLayout orientation=\"horizontal\" [horizontalAlignment]=\"align(item)\">\r\n                    <Image [visibility]=\"item.visibility\" class=\"author-img\" stretch=\"aspectFill\" height=\"40\" width=\"40\" verticalAlignment=\"bottom\" [src]=\"item.chatMessage.pfpSource\" col=\"1\"></Image>\r\n                    <Label [text]='item.chatMessage.message' [class.mine]=\"mine\" [class.theirs]=\"theirs\" [class.mineContinuation]=\"mineContinuation\" [class.theirsContinuation]=\"theirsContinuation\" textWrap=\"true\" verticalAlignment=\"top\"></Label>\r\n                </StackLayout>\r\n                <Label [text]='item.formattedTime' [horizontalAlignment]=\"align(item)\" [class.mineTime]=\"mineTime\" [class.theirsTime]=\"theirsTime\" [class.time]=\"time\"></Label>\r\n            </StackLayout>\r\n        </ng-template>\r\n    </ListView>\r\n\r\n    <StackLayout #chatbox row=\"1\" class=\"chat-box-layout\">\r\n\t        <GridLayout columns=\"*,auto\" style=\"padding: 10\">\r\n\t            <TextView #textfield height=\"auto\" maxHeight=\"100\" hint=\"Start a message\" class=\"chat-text-field\" row=\"0\" col=\"0\" autocorrect=\"true\" [(ngModel)]=\"message\" (tap)=\"onTextTap()\"></TextView>\r\n\t            <Image #btn class=\"chat-button\" row=\"0\" col=\"1\" src=\"~/img/send_message_icon_2.png\" (tap)=sendMessage()></Image>\r\n\t        </GridLayout>\r\n\r\n    </StackLayout>\r\n\r\n</GridLayout>"

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

module.exports = "/* Add mobile styles for the component here.  */\n.header{\n    margin-top: 50;\n\tmargin-left: 32;\n\tcolor: black;\n    font-weight: 500;\n    font-size: 24;\n    text-align: left;\n}\n.submit-btn{\n    background-color:#ac00e6;\n    width: 75%;\n    height: 170px;\n    font-family: \"Segoe UI\",Arial,sans-serif;\n    color: white;\n    margin-top: 20;\n}\n.text-field{\n    width: 85%;\n    margin-top: 20;\n    color:#696969\n}\n\n.close-button-container {\n\tposition: absolute;\n\tleft: 0;\n}\n.close {\n\tmargin: 10;\n\tfont-size: 40;\n\twidth: 48;\n    height: 48;\n    color: black\n}\n\n.error-message {\n\tcolor: red;\n\tfont-size: 16;\n\tvisibility: collapse;\n}"

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

module.exports = "/*\r\nAdd your NativeScript specific styles here.\r\nTo learn more about styling in NativeScript see:\r\nhttps://docs.nativescript.org/angular/ui/styling\r\n*/\r\n\r\n#Header {\r\n    color:black;\r\n    font-size: 24;\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n}\r\n\r\n#listView {\r\n\tmargin-bottom: 20;\r\n}\r\n\r\n.update {\r\n    display: block;\r\n    color: #ac00e6;\r\n    border-width: 1;\r\n    border-color: #ac00e6;\r\n    border-radius: 5;\r\n    text-align: center;\r\n    float: center;\r\n    margin: auto; \r\n    font-weight: 700;\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n    margin-bottom: 15;\r\n    width: 200;\r\n    height: 40;\r\n}\r\n.update:highlighted {\r\n    background-color: #f9e6ff;\r\n}\r\n.payments {\r\n\tcolor: black;\r\n\tmargin-top: 12;\r\n\tmargin-bottom: 12;\r\n\tmargin-left: 18;\r\n    text-align: left;\r\n    font-size: 15;\r\n}\r\n.logout {\r\n\tcolor: #ac00e6;\r\n\tmargin-top: 12;\r\n\tmargin-bottom: 12;\r\n\tmargin-left: 18;\r\n\tfont-weight: 500;\r\n    text-align: left;\r\n    font-size: 15;\r\n}\r\n\r\n.btn-list-view {\r\n\tmargin-top: 36;\r\n\theight: 100;\r\n}\r\n\r\n.item-list-view {\r\n\theight: 300;\r\n}\r\n\r\n.profile-picture {\r\n\theight: 100;\r\n\twidth: 100;\r\n\tmargin-top: 10;\r\n\tmargin-bottom: 8;\r\n\t/*background-repeat: no-repeat;*/\r\n}\r\n\r\n.img-rounded {\r\n\tborder-radius: 100%;\r\n}\r\n\r\n.header-label {\r\n\tmargin-bottom: 5;\r\n\tfont-size: 15;\r\n\tcolor: #4285f4;\r\n}\r\n\r\n.bold {\r\n\tfont-weight: 500;\r\n}\r\n\r\n.activity-indicator {\r\n  color: #ac00e6;\r\n  margin: 25%;\r\n}\r\n\r\n.value-label {\r\n\tmargin-left: 18;\r\n\tmargin-bottom: 10;\r\n    color: black;\r\n    font-weight: 400;\r\n    font-size: 18;\r\n    text-align: left;\r\n}\r\n.title-label {\r\n\tmargin-top: 16;\r\n\tmargin-left: 18;\r\n\tcolor: #696969;\r\n    text-align: left;\r\n}\r\n\r\n.stack-layout{\r\n    height:100%\r\n}\r\n.activity-indicator{\r\n    height: 50%;\r\n}\r\nListView {\r\n    separator-color: transparent;\r\n}"

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

/***/ "./app/welcome/welcome.component.css":
/***/ (function(module, exports) {

module.exports = "/* Add mobile styles for the component here.  */\n.page {\n  align-items: center;\n  flex-direction: column;\n  visibility: collapse;\n}\n.form {\n  margin-left: 30;\n  margin-right: 30;\n  flex-grow: 2;\n  vertical-align: middle;\n}\n\n.logo {\n  margin-bottom: 72;\n  height: 120;\n  font-weight: bold;\n}\n.header {\n  horizontal-align: center;\n  font-size: 25;\n  font-weight: 600;\n  margin-bottom: 70;\n  text-align: center;\n  color: #ac00e6;\n}\n\n.input-field {\n  margin-bottom: 25;\n}\n.input {\n  font-size: 18;\n  placeholder-color: #A8A8A8;\n}\n\n.btn-primary {\n  height: 50;\n  margin: 30 5 15 5;\n  background-color: #ac00e6;\n  border-radius: 5;\n  font-size: 20;\n  font-weight: 600;\n}\n\n.btn-fb {\n  height: 100;\n  margin: 0 5 15 5;\n  /*border-radius: 5;*/\n  font-size: 20;\n  font-weight: 600;\n}\n\n.login-label {\n  horizontal-align: center;\n  color: #A8A8A8;\n  font-size: 16;\n}\n.sign-up-label {\n  margin-bottom: 20;\n}\n.bold {\n  color: #000000; \n}\n.activity-indicator {\n  color: #ac00e6;\n}"

/***/ }),

/***/ "./app/welcome/welcome.component.html":
/***/ (function(module, exports) {

module.exports = "<FlexboxLayout class=\"page\" #welcomeContainer>\r\n\t<StackLayout class=\"form\">\r\n\t\t<Image class=\"logo\" src=\"~/img/logo.png\"></Image>\r\n\t\t<!-- <Label class=\"header\" text=\"CollegePool\"></Label> -->\r\n\r\n\t\t<StackLayout *ngIf=\"!isLoggingIn\" class=\"input-field\">\r\n\t\t\t<TextField class=\"input\" hint=\"First name\" [(ngModel)]=\"firstName\" returnKeyType=\"next\" #fn></TextField>\r\n\t\t\t<StackLayout class=\"hr-light\"></StackLayout>\r\n\t\t</StackLayout>\r\n\r\n\t\t<StackLayout *ngIf=\"!isLoggingIn\" class=\"input-field\">\r\n\t\t\t<TextField class=\"input\" hint=\"Last name\" [(ngModel)]=\"lastName\" returnKeyType=\"next\" #ln></TextField>\r\n\t\t\t<StackLayout class=\"hr-light\"></StackLayout>\r\n\t\t</StackLayout>\r\n\r\n\t\t<StackLayout class=\"input-field\">\r\n\t\t\t<TextField class=\"input\" hint=\"Email\" keyboardType=\"email\" autocorrect=\"false\" autocapitalizationType=\"none\" [(ngModel)]=\"email\" returnKeyType=\"next\" (returnPress)=\"focusPassword()\" #em></TextField>\r\n\t\t\t<StackLayout class=\"hr-light\"></StackLayout>\r\n\t\t</StackLayout>\r\n\r\n\t\t<StackLayout class=\"input-field\">\r\n\t\t\t<TextField class=\"input\" hint=\"Password\" secure=\"true\" [(ngModel)]=\"password\" [returnKeyType]=\"isLoggingIn ? 'done' : 'next'\" (returnPress)=\"focusConfirmPassword()\" #pw></TextField>\r\n\t\t\t<StackLayout class=\"hr-light\"></StackLayout>\r\n\t\t</StackLayout>\r\n\r\n\t\t<StackLayout *ngIf=\"!isLoggingIn\" class=\"input-field\">\r\n\t\t\t<TextField class=\"input\" hint=\"Confirm password\" secure=\"true\" [(ngModel)]=\"confirmPassword\" returnKeyType=\"done\" #cpw></TextField>\r\n\t\t\t<StackLayout class=\"hr-light\"></StackLayout>\r\n\t\t</StackLayout>\r\n\r\n\t\t<Button [text]=\"isLoggingIn ? 'Log In' : 'Sign Up'\" (tap)=\"submit()\" class=\"btn btn-primary m-t-20\"></Button>\r\n\t\t<StackLayout>\r\n\t\t\t<FacebookLoginButton (tap)=\"fbLogin()\" class=\"btn-fb\"></FacebookLoginButton>\r\n\t\t</StackLayout>\r\n\t\t<Label *ngIf=\"isLoggingIn\" text=\"Forgot your password?\" class=\"login-label\" (tap)=\"forgotPassword()\"></Label>\r\n\t</StackLayout>\r\n\r\n\t<Label class=\"login-label sign-up-label\" (tap)=\"toggleForm()\">\r\n\t\t<FormattedString>\r\n\t\t\t<Span [text]=\"isLoggingIn ? 'Don’t have an account? ' : 'Back to Login'\"></Span>\r\n\t\t\t<Span [text]=\"isLoggingIn ? 'Sign up' : ''\" class=\"bold\"></Span>\r\n\t\t</FormattedString>\r\n\t</Label>\r\n</FlexboxLayout>\r\n\r\n<ActivityIndicator #activityIndicator busy=\"true\" width=\"40\" height=\"40\" class=\"activity-indicator\">\r\n</ActivityIndicator>"

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vJF9sYXp5X3JvdXRlX3Jlc291cmNlIGxhenkgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9hcHAuY3NzIiwid2VicGFjazovLy8uL2FwcC9hZGQtY2FyZC1wYXltZW50L2FkZC1jYXJkLXBheW1lbnQuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvYWRkLWNhcmQtcGF5bWVudC9hZGQtY2FyZC1wYXltZW50LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9hZGQtY2FyZC1wYXltZW50L2FkZC1jYXJkLXBheW1lbnQuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9hZGQtbW9kYWwvYWRkLW1vZGFsLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2FkZC1tb2RhbC9hZGQtbW9kYWwuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2FkZC1tb2RhbC9hZGQtbW9kYWwuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9hZGQtcGF5bWVudC9hZGQtcGF5bWVudC5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC9hZGQtcGF5bWVudC9hZGQtcGF5bWVudC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvYWRkLXBheW1lbnQvYWRkLXBheW1lbnQuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9hcHAtcm91dGluZy5tb2R1bGUudG5zLnRzIiwid2VicGFjazovLy8uL2FwcC9hcHAuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2FwcC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2FwcC5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2F1dG8tZ2VuZXJhdGVkL2F1dG8tZ2VuZXJhdGVkLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2F1dG8tZ2VuZXJhdGVkL2F1dG8tZ2VuZXJhdGVkLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9hdXRvLWdlbmVyYXRlZC9hdXRvLWdlbmVyYXRlZC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NoYXQtbGlzdC9jaGF0LWxpc3QuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvY2hhdC1saXN0L2NoYXQtbGlzdC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvY2hhdC1saXN0L2NoYXQtbGlzdC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NoYXQvY2hhdC5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC9jaGF0L2NoYXQuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NoYXQvY2hhdC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbmZpcm1hdGlvbi9jb25maXJtYXRpb24uY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29uZmlybWF0aW9uL2NvbmZpcm1hdGlvbi5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvY29uZmlybWF0aW9uL2NvbmZpcm1hdGlvbi5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Nvbm5lY3QvY29ubmVjdC5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC9jb25uZWN0L2Nvbm5lY3QuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Nvbm5lY3QvY29ubmVjdC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2RhdGF0cmFuc2Zlci5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL2FwcC9kaWFsb2cvZGlhbG9nLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2RpYWxvZy9kaWFsb2cuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2RpYWxvZy9kaWFsb2cuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9keW5hbWljLWFkZC5zZXJ2aWNlLnRucy50cyIsIndlYnBhY2s6Ly8vLi9hcHAvZHluYW1pYy1hZGQuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvZmxvYXQtYnRuL2Zsb2F0LWJ0bi5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC9mbG9hdC1idG4vZmxvYXQtYnRuLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9mbG9hdC1idG4vZmxvYXQtYnRuLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvZ29vZ2xlLW1hcHMuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvaGlzdG9yeS9oaXN0b3J5LmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2hpc3RvcnkvaGlzdG9yeS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvaGlzdG9yeS9oaXN0b3J5LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvaG9tZS5kaXJlY3RpdmUudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC9ob21lL2hvbWUuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2hvbWUvaG9tZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2xvY2F0aW9uL2xvY2F0aW9uLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2xvY2F0aW9uL2xvY2F0aW9uLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9sb2NhdGlvbi9sb2NhdGlvbi5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2xvZ2luLmRpcmVjdGl2ZS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvbG9naW5jaGVjay5zZXJ2aWNlLnRucy50cyIsIndlYnBhY2s6Ly8vLi9hcHAvbG9naW5jaGVjay5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL2FwcC9sb2dpbnJvdXRlL2xvZ2lucm91dGUuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvbG9naW5yb3V0ZS9sb2dpbnJvdXRlLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9sb2dpbnJvdXRlL2xvZ2lucm91dGUuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9tZXNzYWdlLW1vZGFsL21lc3NhZ2UtbW9kYWwuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvbWVzc2FnZS1tb2RhbC9tZXNzYWdlLW1vZGFsLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9tZXNzYWdlLW1vZGFsL21lc3NhZ2UtbW9kYWwuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LnRucy5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQudG5zLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3BheW1lbnQtaW5mby9wYXltZW50LWluZm8uY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvcGF5bWVudC1pbmZvL3BheW1lbnQtaW5mby5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvcGF5bWVudC1pbmZvL3BheW1lbnQtaW5mby5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3BheW1lbnQtbWV0aG9kL3BheW1lbnQtbWV0aG9kLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL3BheW1lbnQtbWV0aG9kL3BheW1lbnQtbWV0aG9kLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9wYXltZW50LW1ldGhvZC9wYXltZW50LW1ldGhvZC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3BheW1lbnQuc2VydmljZS50bnMudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3BheW1lbnQuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvcGF5bWVudHMvcGF5bWVudHMuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvcGF5bWVudHMvcGF5bWVudHMuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL3BheW1lbnRzL3BheW1lbnRzLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvcGxhY2VzLWF1dG9jb21wbGV0ZS5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL2FwcC9wb3N0aW5nLWluZm8vcG9zdGluZy1pbmZvLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL3Bvc3RpbmctaW5mby9wb3N0aW5nLWluZm8uY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL3Bvc3RpbmctaW5mby9wb3N0aW5nLWluZm8uY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9wb3N0aW5nLnNlcnZpY2UudG5zLnRzIiwid2VicGFjazovLy8uL2FwcC9wb3N0aW5nLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3Bvc3RpbmcvcG9zdGluZy5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC9wb3N0aW5nL3Bvc3RpbmcuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL3Bvc3RpbmcvcG9zdGluZy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3JlYXV0aC9yZWF1dGguY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvcmVhdXRoL3JlYXV0aC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvcmVhdXRoL3JlYXV0aC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NldHRpbmdzZm9ybS9zZXR0aW5nc2Zvcm0uY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvc2V0dGluZ3Nmb3JtL3NldHRpbmdzZm9ybS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvc2V0dGluZ3Nmb3JtL3NldHRpbmdzZm9ybS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3VwZGF0ZS91cGRhdGUuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvdXBkYXRlL3VwZGF0ZS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvdXBkYXRlL3VwZGF0ZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3VzZXIuc2VydmljZS50bnMudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3VzZXIuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvd2VsY29tZS93ZWxjb21lLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL3dlbGNvbWUvd2VsY29tZS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvd2VsY29tZS93ZWxjb21lLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7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d0RBQVU7aURBQUM7SUFDakI7UUFBbEMsK0RBQVMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUM7a0NBQUssd0RBQVU7Z0RBQUM7SUFDZjtRQUFsQywrREFBUyxDQUFDLElBQUksRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQztrQ0FBSyx3REFBVTtnREFBQztJQUNEO1FBQWhELCtEQUFTLENBQUMsa0JBQWtCLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUM7a0NBQUssd0RBQVU7Z0RBQUM7SUFDZDtRQUFqRCwrREFBUyxDQUFDLG1CQUFtQixFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDO2tDQUFLLHdEQUFVO2dEQUFDO0lBM0J0RCxnQkFBZ0I7UUFONUIsK0RBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLHFFQUF1Qzs7U0FFeEMsQ0FBQzt5Q0FvQjBCLDZEQUFJLEVBQWtCLDRFQUFnQixFQUE2Qix5RUFBaUIsRUFBMkIscUVBQWU7WUFDdEksb0RBQU07T0FuQmIsZ0JBQWdCLENBdVE1QjtJQUFELHVCQUFDO0NBQUE7QUF2UTRCOzs7Ozs7Ozs7Ozs7Ozs7O0FDYjdCLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQ0FBbUI7QUFDN0MsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLHVDQUF1QyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQUVDO0FBQ3ZFLDJDQUEyQztBQUMzQyxrQ0FBa0M7QUFDbEMsMkJBQXlDO0FBRXpDLGlCQUFnQztBQUV5SDtBQUN6SixrQ0FBOEg7QUFDOUgsMkRBQWdKO0FBQ2hKLG1CQUFtRjtBQUNuRixjQUF5RCIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiB3ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQocmVxKSB7XG5cdC8vIEhlcmUgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigpIGlzIHVzZWQgaW5zdGVhZCBvZiBuZXcgUHJvbWlzZSgpIHRvIHByZXZlbnRcblx0Ly8gdW5jYXVnaHQgZXhjZXB0aW9uIHBvcHBpbmcgdXAgaW4gZGV2dG9vbHNcblx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9KTtcbn1cbndlYnBhY2tFbXB0eUFzeW5jQ29udGV4dC5rZXlzID0gZnVuY3Rpb24oKSB7IHJldHVybiBbXTsgfTtcbndlYnBhY2tFbXB0eUFzeW5jQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0O1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQ7XG53ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQuaWQgPSBcIi4uLyQkX2xhenlfcm91dGVfcmVzb3VyY2UgbGF6eSByZWN1cnNpdmVcIjsiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBJbXBvcnRzXG5leHBvcnRzLmkocmVxdWlyZShcIi0hLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi0xIW5hdGl2ZXNjcmlwdC10aGVtZS1jb3JlL2Nzcy9jb3JlLmxpZ2h0LmNzc1wiKSwgXCJcIik7XG5cbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLypcXHJcXG5JbiBOYXRpdmVTY3JpcHQsIHRoZSBhcHAuY3NzIGZpbGUgaXMgd2hlcmUgeW91IHBsYWNlIENTUyBydWxlcyB0aGF0XFxyXFxueW91IHdvdWxkIGxpa2UgdG8gYXBwbHkgdG8geW91ciBlbnRpcmUgYXBwbGljYXRpb24uIENoZWNrIG91dFxcclxcbmh0dHA6Ly9kb2NzLm5hdGl2ZXNjcmlwdC5vcmcvdWkvc3R5bGluZyBmb3IgYSBmdWxsIGxpc3Qgb2YgdGhlIENTU1xcclxcbnNlbGVjdG9ycyBhbmQgcHJvcGVydGllcyB5b3UgY2FuIHVzZSB0byBzdHlsZSBVSSBjb21wb25lbnRzLlxcclxcblxcclxcbi8qXFxyXFxuSW4gbWFueSBjYXNlcyB5b3UgbWF5IHdhbnQgdG8gdXNlIHRoZSBOYXRpdmVTY3JpcHQgY29yZSB0aGVtZSBpbnN0ZWFkXFxyXFxub2Ygd3JpdGluZyB5b3VyIG93biBDU1MgcnVsZXMuIEZvciBhIGZ1bGwgbGlzdCBvZiBjbGFzcyBuYW1lcyBpbiB0aGUgdGhlbWVcXHJcXG5yZWZlciB0byBodHRwOi8vZG9jcy5uYXRpdmVzY3JpcHQub3JnL3VpL3RoZW1lLlxcclxcbiovXFxyXFxuXFxyXFxuTGFiZWwge1xcclxcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XCIsIFwiXCJdKTtcblxuO1xuICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6ICdzdHlsZScsIHBhdGg6ICcuL2FwcC5jc3MnIH0pO1xuICAgICAgICB9KVxuICAgIH1cbiIsIm1vZHVsZS5leHBvcnRzID0gXCIvKiBBZGQgbW9iaWxlIHN0eWxlcyBmb3IgdGhlIGNvbXBvbmVudCBoZXJlLiAgKi9cXG4uY2xvc2Uge1xcblxcdG1hcmdpbjogMTA7XFxuXFx0Zm9udC1zaXplOiAyODtcXG5cXHR3aWR0aDogNDg7XFxuXFx0aGVpZ2h0OiA0ODtcXG59XFxuXFxuLmNsb3NlLWJ1dHRvbi1jb250YWluZXIge1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRsZWZ0OiAwO1xcbn1cXG5cXG4vKiBzdHlsZXMgZnJvbSBwYXltZW50cy5jb21wb25lbnQuY3NzICovXFxuXFxuI2Zvcm0ge1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIHdpZHRoOiA2MDBweDtcXG4gICAgaGVpZ2h0OiA0MDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IDMwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgYm94LXNoYWRvdzogMCAxcHggNHB4IDAgcmdiYSgwLDAsMCwwLjM3KTtcXG59XFxuXFxuI3BheW1lbnQtZm9ybSB7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgd2lkdGg6IDYwMHB4O1xcbiAgICBoZWlnaHQ6IDQwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogMzBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBib3gtc2hhZG93OiAwIDFweCA0cHggMCByZ2JhKDAsMCwwLDAuMzcpO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4jY2FyZC1mb3JtIHtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICB3aWR0aDogNDAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ODA5Njg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAyNSU7XFxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDRweCAwIHJnYmEoMCwwLDAsMC4zNyk7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIHotaW5kZXg6IDE7XFxufVxcblxcbiNwYXlwYWwtZm9ybSB7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgd2lkdGg6IDQwMHB4O1xcbiAgICBoZWlnaHQ6IDIwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogMjUlO1xcbiAgICBib3gtc2hhZG93OiAwIDFweCA0cHggMCByZ2JhKDAsMCwwLDAuMzcpO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG5cXG4jdmVubW8tZm9ybSB7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgd2lkdGg6IDQwMHB4O1xcbiAgICBoZWlnaHQ6IDIwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogMjUlO1xcbiAgICBib3gtc2hhZG93OiAwIDFweCA0cHggMCByZ2JhKDAsMCwwLDAuMzcpO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG5cXG4jZXJyb3ItZm9ybSB7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgd2lkdGg6IDQwMHB4O1xcbiAgICBoZWlnaHQ6IDIwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogMjUlO1xcbiAgICBib3gtc2hhZG93OiAwIDFweCA0cHggMCByZ2JhKDAsMCwwLDAuMzcpO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG5cXG4jZWRpdC1mb3JtIHtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICB3aWR0aDogNDAwcHg7XFxuICAgIGhlaWdodDogMjAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAyNSU7XFxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDRweCAwIHJnYmEoMCwwLDAsMC4zNyk7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIHotaW5kZXg6IDE7XFxufVxcblxcbi5wYXltZW50LW1ldGhvZHMge1xcblxcdG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcXG59XFxuXFxuI21vZGFsLXBheW1lbnQtbWV0aG9kcyB7XFxuXFx0bWFyZ2luLWxlZnQ6IDI0cHg7XFxufVxcblxcbiNwYXlwYWwtaGVhZGVyLWNvbnRhaW5lciB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzU4MDk2ODtcXG59XFxuXFxuI2Vycm9yLWhlYWRlci1jb250YWluZXIge1xcblxcdGRpc3BsYXk6IG5vbmU7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzg5MDAwMDtcXG59XFxuXFxuI2VkaXQtaGVhZGVyLWNvbnRhaW5lciB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzU4MDk2ODtcXG59XFxuXFxuLmNvbG9yZWQtaGVhZGVyIHtcXG5cXHRjb2xvcjogd2hpdGU7XFxuXFx0Zm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuI21ldGhvZC1pbmZvcm1hdGlvbi10ZXh0IHtcXG5cXHRtYXJnaW4tbGVmdDogNDBweDtcXG5cXHRtYXJnaW4tdG9wOiAzMnB4O1xcblxcdGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuLnBheW1lbnQtZm9vdGVyLWJ1dHRvbntcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgICBjb2xvcjogI2FjMDBlNjtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1sZWZ0OiAzNHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxufVxcblxcbiNwYXlwYWwtYnV0dG9uIHtcXG5cXHR3aWR0aDogMzUwcHg7XFxuXFx0bWFyZ2luOiBhdXRvO1xcblxcdG1hcmdpbi10b3A6IDMycHg7XFxufVxcblxcbiNhZGQtY2FyZC1idXR0b24ge1xcblxcdGZsb2F0OiByaWdodDtcXG5cXHRtYXJnaW4tcmlnaHQ6IDM0cHg7XFxuXFx0ZGlzcGxheTogbm9uZTtcXG59XFxuXFxuI3JlbW92ZS1wYXltZW50LWJ1dHRvbiB7XFxuXFx0ZmxvYXQ6IHJpZ2h0O1xcblxcdG1hcmdpbi1yaWdodDogMzRweDtcXG59XFxuXFxuLnBsdXMtc2lnbiB7XFxuXFx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG5cXHRmb250LXNpemU6IDMwcHg7XFxuXFx0bWFyZ2luLXJpZ2h0OiA3cHg7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucGF5bWVudC1mb290ZXItdGV4dCB7XFxuXFx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG5cXHRsaW5lLWhlaWdodDogNDJweDtcXG5cXHRmb250LXdlaWdodDogNDAwO1xcblxcdGZvbnQtc2l6ZTogMTNweDtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wYXltZW50LWZvb3Rlci10ZXh0OmhvdmVyIHtcXG5cXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuLnBheW1lbnRzLWJvdHRvbS1hZGQtY29udGFpbmVyIHtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0Ym90dG9tOiAwO1xcbn1cXG5cXG4vKiBPdGhlciBtb2RhbCBzdHlsaW5nIGluIHN0eWxlcy5jc3MgKi9cXG4uY2xvc2UtbW9kYWwge1xcblxcdGZvbnQtc2l6ZTogMjRweDtcXG5cXHRtYXJnaW4tcmlnaHQ6IDIwcHg7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tXFxuU2hhcmVkIFZhcmlhYmxlc1xcbi0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tXFxuR2VuZXJhbFxcbi0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXG5odG1sLFxcbmJvZHkge1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgY29sb3I6ICMyODJjMzc7XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5mb3JtLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VFRTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBib3JkZXI6IDFlbSBzb2xpZCAjZmZmO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDQ3NnB4KSB7XFxuICAuZm9ybS1jb250YWluZXIge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICB9XFxufVxcblxcbi5jYXJkaW5mby13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuXFxuLmJnLWlsbHVzdHJhdGlvbiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgei1pbmRleDogMDtcXG59XFxuLmJnLWlsbHVzdHJhdGlvbiBzdmcge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5jYXJkLXNoYXBlLCAjbXktc2FtcGxlLWZvcm0udmlzYSwgI215LXNhbXBsZS1mb3JtLm1hc3Rlci1jYXJkLCAjbXktc2FtcGxlLWZvcm0ubWFlc3RybywgI215LXNhbXBsZS1mb3JtLmFtZXJpY2FuLWV4cHJlc3MsICNteS1zYW1wbGUtZm9ybS5kaXNjb3ZlciwgI215LXNhbXBsZS1mb3JtLnVuaW9ucGF5LCAjbXktc2FtcGxlLWZvcm0uamNiLCAjbXktc2FtcGxlLWZvcm0uZGluZXJzLWNsdWIge1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgcGFkZGluZzogMmVtIDJlbSAxZW07XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA0NzZweCkge1xcbiAgLmNhcmQtc2hhcGUsICNteS1zYW1wbGUtZm9ybS52aXNhLCAjbXktc2FtcGxlLWZvcm0ubWFzdGVyLWNhcmQsICNteS1zYW1wbGUtZm9ybS5tYWVzdHJvLCAjbXktc2FtcGxlLWZvcm0uYW1lcmljYW4tZXhwcmVzcywgI215LXNhbXBsZS1mb3JtLmRpc2NvdmVyLCAjbXktc2FtcGxlLWZvcm0udW5pb25wYXksICNteS1zYW1wbGUtZm9ybS5qY2IsICNteS1zYW1wbGUtZm9ybS5kaW5lcnMtY2x1YiB7XFxuICAgIHBhZGRpbmc6IDJlbSAxLjVlbSAxZW07XFxuICB9XFxufVxcblxcbiNwYXltZW50LWNhcmQtZm9ybSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xcbiAgLypib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEyKTsqL1xcbiAgcGFkZGluZzogMWVtIDNlbSAzZW07XFxuICBtYXJnaW4tYm90dG9tOiAyZW07XFxuLyogIHRyYW5zaXRpb246IGFsbCA2MDBtcyBjdWJpYy1iZXppZXIoMC4yLCAxLjMsIDAuNywgMSk7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogY2FyZEludHJvIDUwMG1zIGN1YmljLWJlemllcigwLjIsIDEuMywgMC43LCAxKTtcXG4gICAgICAgICAgYW5pbWF0aW9uOiBjYXJkSW50cm8gNTAwbXMgY3ViaWMtYmV6aWVyKDAuMiwgMS4zLCAwLjcsIDEpOyovXFxuICAvKnotaW5kZXg6IDE7Ki9cXG59XFxuI215LXNhbXBsZS1mb3JtOmhvdmVyIHtcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMDYpO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNDc2cHgpIHtcXG4gICNteS1zYW1wbGUtZm9ybSB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBhZGRpbmc6IDdlbSAyZW0gMmVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG59XFxuI215LXNhbXBsZS1mb3JtLnZpc2Ege1xcbiAgY29sb3I6ICNmZmY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEQ0QUEyO1xcbn1cXG4jbXktc2FtcGxlLWZvcm0ubWFzdGVyLWNhcmQge1xcbiAgY29sb3I6ICNmZmY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzYzNjM2O1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDExNWRlZywgI2Q4MjMzMiwgI2Q4MjMzMiA1MCUsICNmMWFkM2QgNTAlLCAjZjFhZDNkKTtcXG59XFxuI215LXNhbXBsZS1mb3JtLm1hZXN0cm8ge1xcbiAgY29sb3I6ICNmZmY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzYzNjM2O1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDExNWRlZywgIzAwOWRkZCwgIzAwOWRkZCA1MCUsICNlZDFjMmUgNTAlLCAjZWQxYzJlKTtcXG59XFxuI215LXNhbXBsZS1mb3JtLmFtZXJpY2FuLWV4cHJlc3Mge1xcbiAgY29sb3I6ICNmZmY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3Q0MzO1xcbn1cXG4jbXktc2FtcGxlLWZvcm0uZGlzY292ZXIge1xcbiAgY29sb3I6ICNmZmY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY2MDAwO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCNkMTQzMTAsICNmNzk2MWUpO1xcbn1cXG4jbXktc2FtcGxlLWZvcm0udW5pb25wYXksICNteS1zYW1wbGUtZm9ybS5qY2IsICNteS1zYW1wbGUtZm9ybS5kaW5lcnMtY2x1YiB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzNjM2MzY7XFxufVxcblxcbi5jYXJkaW5mby1sYWJlbCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGZvbnQtc2l6ZTogMTFweDtcXG4gIG1hcmdpbi1ib3R0b206IDAuNWVtO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG59XFxuXFxuLmNhcmRpbmZvLWV4cC1kYXRlIHtcXG4gIG1hcmdpbi1yaWdodDogMWVtO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5jYXJkaW5mby1jdnYge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5jYXJkaW5mby1jYXJkLW51bWJlciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbiNjYXJkSW1hZ2Uge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAyZW07XFxuICByaWdodDogMWVtO1xcbiAgd2lkdGg6IDQ0cHg7XFxuICBoZWlnaHQ6IDI4cHg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9zMy11cy13ZXN0LTIuYW1hem9uYXdzLmNvbS9zLmNkcG4uaW8vMzQ2OTk0L2NhcmRfc3ByaXRlLnBuZyk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDg2cHggNDU4cHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTAwcHggMDtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBtYXJnaW4tYm90dG9tOiAxZW07XFxufVxcbiNjYXJkSW1hZ2UudmlzYSB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIC0zOThweDtcXG59XFxuI2NhcmRJbWFnZS5tYXN0ZXItY2FyZCB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIC0yODFweDtcXG59XFxuI2NhcmRJbWFnZS5hbWVyaWNhbi1leHByZXNzIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgLTM3MHB4O1xcbn1cXG4jY2FyZEltYWdlLmRpc2NvdmVyIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgLTE2M3B4O1xcbn1cXG4jY2FyZEltYWdlLm1hZXN0cm8ge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAtMjUxcHg7XFxufVxcbiNjYXJkSW1hZ2UuamNiIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgLTIyMXB4O1xcbn1cXG4jY2FyZEltYWdlLmRpbmVycy1jbHViIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgLTEzM3B4O1xcbn1cXG5cXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tXFxuSW5wdXRzIFxcbi0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXG4uaW5wdXQtd3JhcHBlciB7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODYpO1xcbiAgaGVpZ2h0OiAyLjc1ZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4wNik7XFxuICBwYWRkaW5nOiA1cHggMTBweDtcXG4gIG1hcmdpbi1ib3R0b206IDFlbTtcXG59XFxuXFxuLmNhcmRpbmZvLWNhcmQtbnVtYmVyLFxcbi5jYXJkaW5mby1leHAtZGF0ZSxcXG4uY2FyZGluZm8tY3Z2IHtcXG4gIHRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuM3M7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcztcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzLCAtd2Via2l0LXRyYW5zZm9ybSAwLjNzO1xcbn1cXG5cXG4uYnJhaW50cmVlLWhvc3RlZC1maWVsZHMtZm9jdXNlZCB7XFxuICBib3JkZXItY29sb3I6ICM1ZGI2ZTg7XFxufVxcblxcbi5icmFpbnRyZWUtaG9zdGVkLWZpZWxkcy1pbnZhbGlkIHtcXG4gIGJvcmRlci1jb2xvcjogI0U1M0E0MDtcXG4vKiAgLXdlYmtpdC1hbmltYXRpb246IHNoYWtlIDUwMG1zIGN1YmljLWJlemllcigwLjIsIDEuMywgMC43LCAxKSBib3RoO1xcbiAgICAgICAgICBhbmltYXRpb246IHNoYWtlIDUwMG1zIGN1YmljLWJlemllcigwLjIsIDEuMywgMC43LCAxKSBib3RoOyovXFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgICAgICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgLXdlYmtpdC1wZXJzcGVjdGl2ZTogMTAwMHB4O1xcbiAgICAgICAgICBwZXJzcGVjdGl2ZTogMTAwMHB4O1xcbn1cXG5cXG4ubG9hZGVyIHtcXG4gIGJvcmRlcjogMTZweCBzb2xpZCAjZjNmM2YzOyAvKiBMaWdodCBncmV5ICovXFxuICBib3JkZXItdG9wOiAxNnB4IHNvbGlkICNhYzAwZTY7IC8qIFB1cnBsZSAqL1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgd2lkdGg6IDEyMHB4O1xcbiAgaGVpZ2h0OiAxMjBweDtcXG4gIGFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7XFxuICBtYXJnaW46IGF1dG87XFxufVxcblxcbiNsb2FkaW5nLWNpcmNsZSB7XFxuICB0b3A6IDEyJTtcXG4gIGxlZnQ6IDMwJTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXFxuI2xpc3QtbG9hZGluZy1jaXJjbGUge1xcblxcdG1hcmdpbi10b3A6IDUwcHg7XFxufVxcblxcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS1cXG5BbmltYXRpb25zXFxuLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcbkBrZXlmcmFtZXMgc3BpbiB7XFxuICAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XFxuICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2hha2Uge1xcbiAgMTAlLFxcbiAgOTAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xcHgsIDAsIDApO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTFweCwgMCwgMCk7XFxuICB9XFxuICAyMCUsXFxuICA4MCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMXB4LCAwLCAwKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDFweCwgMCwgMCk7XFxuICB9XFxuICAzMCUsXFxuICA1MCUsXFxuICA3MCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTNweCwgMCwgMCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtM3B4LCAwLCAwKTtcXG4gIH1cXG4gIDQwJSxcXG4gIDYwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgzcHgsIDAsIDApO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoM3B4LCAwLCAwKTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBzaGFrZSB7XFxuICAxMCUsXFxuICA5MCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTFweCwgMCwgMCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMXB4LCAwLCAwKTtcXG4gIH1cXG4gIDIwJSxcXG4gIDgwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxcHgsIDAsIDApO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMXB4LCAwLCAwKTtcXG4gIH1cXG4gIDMwJSxcXG4gIDUwJSxcXG4gIDcwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtM3B4LCAwLCAwKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0zcHgsIDAsIDApO1xcbiAgfVxcbiAgNDAlLFxcbiAgNjAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDNweCwgMCwgMCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgzcHgsIDAsIDApO1xcbiAgfVxcbn1cXG5cXG5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8IS0tIDxuZ3gtYnJhaW50cmVlIFxcclxcbiAgW2dldENsaWVudFRva2VuXT1cXFwiZ2V0Q2xpZW50VG9rZW4oKVxcXCIgXFxyXFxuICBbY3JlYXRlUHVyY2hhc2VdPVxcXCJjcmVhdGVQdXJjaGFzZUZ1bmN0aW9uXFxcIiBcXHJcXG4gIChwYXltZW50U3RhdHVzKT1cXFwib25QYXltZW50U3RhdHVzKCRldmVudClcXFwiPlxcclxcbjwvbmd4LWJyYWludHJlZT4gLS0+XFxyXFxuXFxyXFxuPFN0YWNrTGF5b3V0ICNmb3JtPlxcclxcblxcdDxTdGFja0xheW91dCBjbGFzcz1cXFwiY2xvc2UtYnV0dG9uLWNvbnRhaW5lclxcXCIgb3JpZW50YXRpb249XFxcImhvcml6b250YWxcXFwiPlxcclxcblxcdFxcdDxMYWJlbCB0ZXh0PVxcXCImdGltZXM7XFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiICh0YXApPVxcXCJjbG9zZSgpXFxcIj48L0xhYmVsPlxcclxcblxcdDwvU3RhY2tMYXlvdXQ+XFxyXFxuXFxyXFxuXFx0PFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJjYXJkaW5mby1jYXJkLW51bWJlclxcXCI+XFxyXFxuXFx0XFx0PExhYmVsIHRleHQ9XFxcIkNhcmQgTnVtYmVyXFxcIiBjbGFzcz1cXFwiY2FyZGluZm8tbGFiZWxcXFwiPjwvTGFiZWw+XFxyXFxuXFx0XFx0PFN0YWNrTGF5b3V0ICNjYXJkTnVtYmVyIGNsYXNzPVxcXCJpbnB1dC13cmFwcGVyXFxcIj48L1N0YWNrTGF5b3V0PlxcclxcblxcdFxcdDxTdGFja0xheW91dCAjY2FyZEltYWdlPjwvU3RhY2tMYXlvdXQ+XFxyXFxuXFx0PC9TdGFja0xheW91dD5cXHJcXG5cXHJcXG5cXHQ8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImNhcmRpbmZvLXdyYXBwZXJcXFwiPlxcclxcblxcdFxcdDxTdGFja0xheW91dCBjbGFzcz1cXFwiY2FyZGluZm8tZXhwLWRhdGVcXFwiPlxcclxcblxcdFxcdFxcdDxMYWJlbCB0ZXh0PVxcXCJWYWxpZCBUaHJ1XFxcIiBjbGFzcz1cXFwiY2FyZGluZm8tbGFiZWxcXFwiPjwvTGFiZWw+XFxyXFxuXFx0XFx0XFx0PFN0YWNrTGF5b3V0ICNleHBpcmF0aW9uRGF0ZSBjbGFzcz1cXFwiaW5wdXQtd3JhcHBlclxcXCI+PC9TdGFja0xheW91dD5cXHJcXG5cXHRcXHQ8L1N0YWNrTGF5b3V0PlxcclxcblxcclxcblxcdFxcdDxTdGFja0xheW91dCBjbGFzcz1cXFwiY2FyZGluZm8tY3Z2XFxcIj5cXHJcXG5cXHRcXHRcXHQ8TGFiZWwgdGV4dD1cXFwiQ1ZWXFxcIiBjbGFzcz1cXFwiY2FyZGluZm8tbGFiZWxcXFwiPjwvTGFiZWw+XFxyXFxuXFx0XFx0XFx0PFN0YWNrTGF5b3V0ICNjdnYgY2xhc3M9XFxcImlucHV0LXdyYXBwZXJcXFwiPjwvU3RhY2tMYXlvdXQ+XFxyXFxuXFx0XFx0PC9TdGFja0xheW91dD5cXHJcXG5cXHQ8L1N0YWNrTGF5b3V0PlxcclxcblxcclxcblxcdDxCdXR0b24gdGV4dD1cXFwiQWRkXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiAjc3VibWl0QnV0dG9uPjwvQnV0dG9uPlxcclxcbjwvU3RhY2tMYXlvdXQ+XFxyXFxuPCEtLSBcXHRcXHQ8Zm9ybSBpZD1cXFwicGF5bWVudC1jYXJkLWZvcm1cXFwiIGNsYXNzPVxcXCJzY2FsZS1kb3duXFxcIj5cXHJcXG5cXHQgICAgPGRpdiBjbGFzcz1cXFwiY2FyZGluZm8tY2FyZC1udW1iZXJcXFwiPlxcclxcblxcdCAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY2FyZGluZm8tbGFiZWxcXFwiIGZvcj1cXFwiY2FyZC1udW1iZXJcXFwiPkNhcmQgTnVtYmVyPC9sYWJlbD5cXHJcXG5cXHQgICAgICA8ZGl2IGNsYXNzPSdpbnB1dC13cmFwcGVyJyBpZD1cXFwiY2FyZC1udW1iZXJcXFwiPjwvZGl2PlxcclxcblxcdCAgICAgIDxkaXYgaWQ9XFxcImNhcmQtaW1hZ2VcXFwiPjwvZGl2PlxcclxcblxcdCAgICA8L2Rpdj5cXHJcXG5cXHJcXG5cXHQgICAgPGRpdiBjbGFzcz1cXFwiY2FyZGluZm8td3JhcHBlclxcXCI+XFxyXFxuXFx0ICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZGluZm8tZXhwLWRhdGVcXFwiPlxcclxcblxcdCAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjYXJkaW5mby1sYWJlbFxcXCIgZm9yPVxcXCJleHBpcmF0aW9uLWRhdGVcXFwiPlZhbGlkIFRocnU8L2xhYmVsPlxcclxcblxcdCAgICAgICAgPGRpdiBjbGFzcz0naW5wdXQtd3JhcHBlcicgaWQ9XFxcImV4cGlyYXRpb24tZGF0ZVxcXCI+PC9kaXY+XFxyXFxuXFx0ICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuXFx0ICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZGluZm8tY3Z2XFxcIj5cXHJcXG5cXHQgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY2FyZGluZm8tbGFiZWxcXFwiIGZvcj1cXFwiY3Z2XFxcIj5DVlY8L2xhYmVsPlxcclxcblxcdCAgICAgICAgPGRpdiBjbGFzcz0naW5wdXQtd3JhcHBlcicgaWQ9XFxcImN2dlxcXCI+PC9kaXY+XFxyXFxuXFx0ICAgICAgPC9kaXY+XFxyXFxuXFx0ICAgIDwvZGl2PlxcclxcblxcdCAgPC9mb3JtPiAtLT5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0ICogYXMgZHJvcGluIGZyb20gJ2JyYWludHJlZS13ZWItZHJvcC1pbic7XHJcbmltcG9ydCAqIGFzIGJyYWludHJlZSBmcm9tICdicmFpbnRyZWUtd2ViJztcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9idXR0b24nO1xyXG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL3RleHQtZmllbGQnO1xyXG5pbXBvcnQgeyBNb2RhbERpYWxvZ1BhcmFtcyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9kaXJlY3RpdmVzL2RpYWxvZ3NcIjtcclxuaW1wb3J0IHsgUGF5bWVudFNlcnZpY2UgfSBmcm9tICcuLi9wYXltZW50LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTdGFja0xheW91dCB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvbGF5b3V0cy9zdGFjay1sYXlvdXQnO1xyXG4vLyBpbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cC1jbGllbnQnO1xyXG4vLyBpbXBvcnQgeyBOZ3hCcmFpbnRyZWVNb2R1bGUgfSBmcm9tICduZ3gtYnJhaW50cmVlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlJztcclxuaW1wb3J0IHsgQnJhaW50cmVlLCBCcmFpblRyZWVPcHRpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWJyYWludHJlZSc7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuLy8gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1ub2RlaWZ5XCIpO1xyXG4vLyBpbXBvcnQgKiBhcyBOb2RlaWZ5IGZyb20gJ25hdGl2ZXNjcmlwdC1ub2RlaWZ5JztcclxuLy8gY29uc3QgYnJhaW50cmVlID0gcmVxdWlyZSgnYnJhaW50cmVlLXdlYicpO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtYWRkLWNhcmQtcGF5bWVudCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2FkZC1jYXJkLXBheW1lbnQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2FkZC1jYXJkLXBheW1lbnQuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBZGRDYXJkUGF5bWVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFyYW1zOiBNb2RhbERpYWxvZ1BhcmFtcywgcHJpdmF0ZSBwYXltZW50U2VydmljZTogUGF5bWVudFNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zKSB7IH1cclxuXHJcbiAgLy8gQFZpZXdDaGlsZChcImRyb3BpbkNvbnRhaW50ZXJcIikgY29udGFpbmVyOiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoXCJzdWJtaXRCdXR0b25cIiwgeyBzdGF0aWM6IHRydWUgfSkgc0I6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZChcImV4cGlyYXRpb25EYXRlXCIsIHsgc3RhdGljOiB0cnVlIH0pIGV4cGlyYXRpb25UZXh0OiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoXCJjYXJkTnVtYmVyXCIsIHsgc3RhdGljOiB0cnVlIH0pIG51bWJlclRleHQ6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZChcImN2dlwiLCB7IHN0YXRpYzogdHJ1ZSB9KSBjdnZUZXh0OiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoXCJmb3JtXCIsIHsgc3RhdGljOiB0cnVlIH0pIGZvcm1MYXlvdXQ6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZChcImNhcmRJbWFnZVwiLCB7IHN0YXRpYzogdHJ1ZSB9KSBjYXJkTGF5b3V0OiBFbGVtZW50UmVmO1xyXG5cclxuICB1c2VyID0ge1xyXG4gIFx0cGF5bWVudF9pZDogJzUwNzMwNTcwNidcclxuICB9XHJcbiAgb3B0cyA6QnJhaW5UcmVlT3B0aW9ucyA9IHtcclxuXHRhbW91bnQ6IG51bGwsXHJcblx0Y29sbGVjdERldmljZURhdGE6IHRydWUsXHJcblx0cmVxdWVzdFRocmVlRFNlY3VyZVZlcmlmaWNhdGlvbjogZmFsc2UsXHJcbiAgfVxyXG4gIGNsaWVudFRva2VuID0gJyc7XHJcblxyXG4gIC8vIHRva2VuID0gdGhpcy5wYXltZW50U2VydmljZS5nZXRJZFRva2VuKHRoaXMudXNlci5wYXltZW50X2lkKTtcclxuICBuZ09uSW5pdCgpIHtcclxuIC8vICBcdGJyYWludHJlZS5jbGllbnQuY3JlYXRlKHtcclxuXHQvLyAgIGF1dGhvcml6YXRpb246ICdzYW5kYm94Xzlxc2J5eXE4X3dtYzN2ODhyMzZjYnhqanonXHJcblx0Ly8gfSwgZnVuY3Rpb24gKGNsaWVudEVyciwgY2xpZW50SW5zdGFuY2UpIHtcclxuXHQvLyAgIC8vIFN0b3AgaWYgdGhlcmUgd2FzIGEgcHJvYmxlbSBjcmVhdGluZyB0aGUgY2xpZW50LlxyXG5cdC8vICAgLy8gVGhpcyBjb3VsZCBoYXBwZW4gaWYgdGhlcmUgaXMgYSBuZXR3b3JrIGVycm9yIG9yIGlmIHRoZSBhdXRob3JpemF0aW9uXHJcblx0Ly8gICAvLyBpcyBpbnZhbGlkLlxyXG5cdC8vICAgaWYgKGNsaWVudEVycikge1xyXG5cdC8vICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjcmVhdGluZyBjbGllbnQ6JywgY2xpZW50RXJyKTtcclxuXHQvLyAgICAgcmV0dXJuO1xyXG5cdC8vICAgfVxyXG5cdC8vIH0pO1xyXG5cclxuICB9XHJcblxyXG4gIGNyZWF0ZVZpZXdzKCkge1xyXG4gIFx0dmFyIGZvcm0gPSA8U3RhY2tMYXlvdXQ+IHRoaXMuZm9ybUxheW91dC5uYXRpdmVFbGVtZW50O1xyXG5cdHZhciBzdWJtaXQgPSA8QnV0dG9uPiB0aGlzLnNCLm5hdGl2ZUVsZW1lbnQ7XHJcblx0dmFyIGV4cGlyYXRpb25EYXRlID0gPFN0YWNrTGF5b3V0PiB0aGlzLmV4cGlyYXRpb25UZXh0Lm5hdGl2ZUVsZW1lbnQ7XHJcblx0dmFyIGNhcmROdW1iZXIgPSA8U3RhY2tMYXlvdXQ+IHRoaXMubnVtYmVyVGV4dC5uYXRpdmVFbGVtZW50O1xyXG5cdHZhciBjdnYgPSA8U3RhY2tMYXlvdXQ+IHRoaXMuY3Z2VGV4dC5uYXRpdmVFbGVtZW50O1xyXG5cdHZhciBjYXJkSW1hZ2UgPSA8U3RhY2tMYXlvdXQ+IHRoaXMuY2FyZExheW91dC5uYXRpdmVFbGVtZW50O1xyXG5cclxuXHRzdWJtaXQuaXNFbmFibGVkID0gZmFsc2U7XHJcblxyXG4gIH1cclxuXHJcbiAgY2xvc2UoKSB7XHJcbiAgXHR0aGlzLnBhcmFtcy5jbG9zZUNhbGxiYWNrKCk7XHJcbiAgfVxyXG5cclxuICBnZXRDbGllbnRUb2tlbigpIHtcclxuICBcdGNvbnN0IHRva2VuID0gbmV3IE9ic2VydmFibGUoKTtcclxuICBcdHRva2VuLnNldCgnQXV0aG9yaXphdGlvbicsICdzYW5kYm94Xzlxc2J5eXE4X3dtYzN2ODhyMzZjYnhqanonKTtcclxuICBcdHJldHVybiB0b2tlbjtcclxuICB9XHJcblxyXG4gIGNyZWF0ZVB1cmNoYXNlRnVuY3Rpb24obm9uY2U6IHN0cmluZywgY2hhcmdlQW1vdW50OiBudW1iZXIpIHtcclxuICBcdHJldHVybiB0aGlzLnBheW1lbnRTZXJ2aWNlLmFkZFBheW1lbnRNZXRob2RUb1VzZXIodGhpcy51c2VyLnBheW1lbnRfaWQsIG5vbmNlKTtcclxuICB9XHJcblxyXG4gIG9uUGF5bWVudFN0YXR1cyhldmVudCkge1xyXG5cclxuICB9XHJcblxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCIvKiBBZGQgbW9iaWxlIHN0eWxlcyBmb3IgdGhlIGNvbXBvbmVudCBoZXJlLiAgKi9cXHJcXG4ucGFnZSB7XFxyXFxuICAvKmFsaWduLWl0ZW1zOiBjZW50ZXI7Ki9cXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5mb3JtIHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAzMDtcXHJcXG4gIG1hcmdpbi1yaWdodDogMzA7XFxyXFxuICBmbGV4LWdyb3c6IDI7XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2Uge1xcclxcblxcdG1hcmdpbjogMTA7XFxyXFxuXFx0Zm9udC1zaXplOiAyODtcXHJcXG5cXHR3aWR0aDogNDg7XFxyXFxuXFx0aGVpZ2h0OiA0ODtcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlLWJ1dHRvbi1jb250YWluZXIge1xcclxcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHRsZWZ0OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyLWxhYmVsIHtcXHJcXG5cXHRtYXJnaW4tdG9wOiA2MDtcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiAwO1xcclxcblxcdGZvbnQtc2l6ZTogMjA7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXItbGFiZWwtMiB7XFxyXFxuXFx0Zm9udC1zaXplOiAyMDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlci1sYWJlbC0zIHtcXHJcXG5cXHRtYXJnaW4tdG9wOiAxNDtcXHJcXG5cXHRtYXJnaW4tbGVmdDogMTY7XFxyXFxuXFx0bWFyZ2luLXJpZ2h0OiAxNjtcXHJcXG5cXHRmb250LXNpemU6IDE4O1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyLWxhYmVsLTQge1xcclxcblxcdGZvbnQtc2l6ZTogMTg7XFxyXFxuXFx0bWFyZ2luLXRvcDogMTQ7XFxyXFxufVxcclxcblxcclxcbi5yaWRpbmctbGFiZWwge1xcclxcblxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuXFx0Y29sb3I6ICNhYzAwZTY7XFxyXFxufVxcclxcblxcclxcbi5kcml2aW5nLWxhYmVsIHtcXHJcXG5cXHRjb2xvcjogIzVjNjg3YztcXHJcXG59XFxyXFxuXFxyXFxuLnN3aXRjaC1jb250YWluZXIge1xcclxcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnN3aXRjaCB7XFxyXFxuXFx0Y29sb3I6ICNhYzAwZTY7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2NkOTRlMDtcXHJcXG59XFxyXFxuXFxyXFxuLnN1Ym1pdC1idG4ge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICNhYzAwZTY7XFxyXFxuXFx0bWFyZ2luLXRvcDogMjA7XFxyXFxufVxcclxcblxcclxcbi5ib2xkIHtcXHJcXG5cXHRmb250LXdlaWdodDogNzAwO1xcclxcbn1cXHJcXG5cXHJcXG4uc3RhcnQtZmllbGQge1xcclxcblxcdG1hcmdpbi10b3A6IDE0O1xcclxcbn1cXHJcXG5cXHJcXG4uYWN0aXZpdHktaW5kaWNhdG9yIHtcXHJcXG4gIGNvbG9yOiAjYWMwMGU2O1xcclxcbiAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcXHJcXG4gIG1hcmdpbi10b3A6IDQ3JTtcXHJcXG59XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPFN0YWNrTGF5b3V0PlxcclxcblxcdDxBY3Rpdml0eUluZGljYXRvciAjYWN0aXZpdHlJbmRpY2F0b3IgYnVzeT1cXFwidHJ1ZVxcXCIgd2lkdGg9XFxcIjQwXFxcIiBoZWlnaHQ9XFxcIjQwXFxcIiBjbGFzcz1cXFwiYWN0aXZpdHktaW5kaWNhdG9yXFxcIj48L0FjdGl2aXR5SW5kaWNhdG9yPlxcclxcblxcdDxTY3JvbGxWaWV3IGhlaWdodD1cXFwiMTAwJVxcXCI+XFxyXFxuXFx0PEZsZXhib3hMYXlvdXQgY2xhc3M9XFxcInBhZ2VcXFwiICNhZGRDb250YWluZXI+XFxyXFxuXFx0XFx0PFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJjbG9zZS1idXR0b24tY29udGFpbmVyXFxcIiBvcmllbnRhdGlvbj1cXFwiaG9yaXpvbnRhbFxcXCI+XFxyXFxuXFx0XFx0XFx0PExhYmVsIHRleHQ9XFxcIiZ0aW1lcztcXFwiIGNsYXNzPVxcXCJjbG9zZVxcXCIgKHRhcCk9XFxcImNsb3NlKCdjYW5jZWwnKVxcXCI+PC9MYWJlbD5cXHJcXG5cXHRcXHQ8L1N0YWNrTGF5b3V0PlxcclxcblxcclxcblxcclxcblxcdFxcdDxTdGFja0xheW91dCBjbGFzcz1cXFwiZm9ybVxcXCI+XFxyXFxuXFx0XFx0XFx0PExhYmVsIHRleHQ9XFxcIkkgYW0uLi5cXFwiIGNsYXNzPVxcXCJoZWFkZXItbGFiZWwtMiBib2xkXFxcIj48L0xhYmVsPlxcclxcblxcclxcblxcdFxcdCAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJpbnB1dC1maWVsZCBzd2l0Y2gtY29udGFpbmVyXFxcIiBvcmllbnRhdGlvbj1cXFwiaG9yaXpvbnRhbFxcXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIj5cXHJcXG5cXHRcXHQgIFxcdDxMYWJlbCB0ZXh0PVxcXCJEcml2aW5nXFxcIiBjbGFzcz1cXFwiaGVhZGVyLWxhYmVsLTMgZHJpdmluZy1sYWJlbFxcXCIgI2RyaXZpbmdMYWJlbD48L0xhYmVsPlxcclxcblxcdFxcdCAgXFx0PFN3aXRjaCBjaGVja2VkPVxcXCJ0cnVlXFxcIiAoY2hlY2tlZENoYW5nZSk9XFxcIm9uQ2hlY2tlZENoYW5nZSgkZXZlbnQpXFxcIiBjbGFzcz1cXFwibS0xNSBzd2l0Y2hcXFwiPjwvU3dpdGNoPlxcclxcblxcdFxcdCAgXFx0PExhYmVsIHRleHQ9XFxcIlJpZGluZ1xcXCIgY2xhc3M9XFxcImhlYWRlci1sYWJlbC0zIHJpZGluZy1sYWJlbFxcXCIgI3JpZGluZ0xhYmVsPjwvTGFiZWw+XFxyXFxuXFx0XFx0ICA8L1N0YWNrTGF5b3V0PlxcclxcblxcclxcblxcdFxcdCAgPExhYmVsIHRleHQ9XFxcIldoZXJlP1xcXCIgY2xhc3M9XFxcImhlYWRlci1sYWJlbCBib2xkXFxcIj48L0xhYmVsPlxcclxcblxcdFxcdCAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJpbnB1dC1maWVsZCBzdGFydC1maWVsZFxcXCI+XFxyXFxuPCEtLSBcXHRcXHQgICAgPFRleHRGaWVsZCBjbGFzcz1cXFwiaW5wdXRcXFwiIGF1dG9jb3JyZWN0PVxcXCJmYWxzZVxcXCIgaGludD1cXFwiV2hlcmUgZnJvbT9cXFwiIFsobmdNb2RlbCldPVxcXCJzdGFydEFkZHJlc3NcXFwiICh0ZXh0Q2hhbmdlKT1cXFwic3RhcnRBdXRvY29tcGxldGUoKVxcXCIgKHRhcCk9XFxcInNob3dNb2RhbCgnc3RhcnQnKVxcXCIgcmVxdWlyZWQ+PC9UZXh0RmllbGQ+IC0tPlxcclxcblxcdFxcdFxcdDxMYWJlbCB0ZXh0PVxcXCJ7eyBzdGFydExhYmVsIH19XFxcIiBjbGFzcz1cXFwiaGVhZGVyLWxhYmVsLTNcXFwiICh0YXApPVxcXCJzaG93TW9kYWwoJ3N0YXJ0JylcXFwiPjwvTGFiZWw+XFxyXFxuXFx0XFx0ICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiaHItbGlnaHRcXFwiPjwvU3RhY2tMYXlvdXQ+XFxyXFxuXFx0XFx0ICA8L1N0YWNrTGF5b3V0PlxcclxcblxcclxcblxcdFxcdCAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJpbnB1dC1maWVsZFxcXCI+XFxyXFxuPCEtLSBcXHRcXHQgICAgPFRleHRGaWVsZCBjbGFzcz1cXFwiaW5wdXRcXFwiIGF1dG9jb3JyZWN0PVxcXCJmYWxzZVxcXCIgaGludD1cXFwiV2hlcmUgdG8/XFxcIiBbKG5nTW9kZWwpXT1cXFwiZW5kQWRkcmVzc1xcXCIgKHRleHRDaGFuZ2UpPVxcXCJlbmRBdXRvY29tcGxldGUoKVxcXCIgKHRhcCk9XFxcInNob3dNb2RhbCgnZW5kJylcXFwiIHJlcXVpcmVkPjwvVGV4dEZpZWxkPiAtLT5cXHJcXG5cXHRcXHRcXHRcXHQ8TGFiZWwgdGV4dD1cXFwie3sgZW5kTGFiZWwgfX1cXFwiIGNsYXNzPVxcXCJoZWFkZXItbGFiZWwtM1xcXCIgKHRhcCk9XFxcInNob3dNb2RhbCgnZW5kJylcXFwiPjwvTGFiZWw+XFxyXFxuXFx0XFx0ICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiaHItbGlnaHRcXFwiPjwvU3RhY2tMYXlvdXQ+XFxyXFxuXFx0XFx0ICA8L1N0YWNrTGF5b3V0PlxcclxcblxcclxcblxcdDwhLS0gXFx0ICA8RGF0ZVBpY2tlciAobG9hZGVkKT1cXFwib25QaWNrZXJMb2FkZWQoJGV2ZW50KVxcXCIgKGRhdGVDaGFuZ2UpPVxcXCJvbkRhdGVDaGFuZ2VkKCRldmVudClcXFwiIFxcclxcblxcdChkYXlDaGFuZ2UpPVxcXCJvbkRheUNoYW5nZWQoJGV2ZW50KVxcXCIgKG1vbnRoQ2hhbmdlKT1cXFwib25Nb250aENoYW5nZWQoJGV2ZW50KVxcXCIgKHllYXJDaGFuZ2UpPVxcXCJvblllYXJDaGFuZ2VkKCRldmVudClcXFwiIHZlcnRpY2FsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiPjwvRGF0ZVBpY2tlcj4gLS0+XFxyXFxuXFx0XFx0XFx0PExhYmVsIHRleHQ9XFxcIldoZW4/XFxcIiBjbGFzcz1cXFwiaGVhZGVyLWxhYmVsIGJvbGRcXFwiPjwvTGFiZWw+XFxyXFxuXFxyXFxuXFx0XFx0ICA8RGF0ZVBpY2tlciAobG9hZGVkKT1cXFwib25QaWNrZXJMb2FkZWQoJGV2ZW50KVxcXCIgKGRhdGVDaGFuZ2UpPVxcXCJvbkRhdGVDaGFuZ2VkKCRldmVudClcXFwiIHZlcnRpY2FsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiPjwvRGF0ZVBpY2tlcj5cXHJcXG5cXHJcXG5cXHRcXHQgIDxMYWJlbCAqbmdJZj1cXFwiaXNEcml2aW5nXFxcIiB0ZXh0PVxcXCJIb3cgbWFueT9cXFwiIGNsYXNzPVxcXCJoZWFkZXItbGFiZWxcXFwiPjwvTGFiZWw+XFxyXFxuXFx0XFx0ICA8R3JpZExheW91dCAqbmdJZj1cXFwiaXNEcml2aW5nXFxcIiBjbGFzcz1cXFwibS0xNVxcXCIgcm93cz1cXFwiYXV0b1xcXCIgY29sdW1ucz1cXFwiNTAgKiA1MFxcXCI+XFxyXFxuXFx0XFx0XFx0ICAgIDxMYWJlbCBjbGFzcz1cXFwiaDNcXFwiIHRleHQ9XFxcIjFcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiByb3c9XFxcIjEwXFxcIiBjb2w9XFxcIjBcXFwiPjwvTGFiZWw+XFxyXFxuXFx0XFx0XFx0ICAgIDxTbGlkZXIgbWluVmFsdWU9XFxcIjFcXFwiIG1heFZhbHVlPVxcXCI4XFxcIiBbKG5nTW9kZWwpXT1cXFwiY2FwYWNpdHlcXFwiIHJvdz1cXFwiMFxcXCJcXHJcXG5cXHRcXHRcXHQgICAgIGNvbD1cXFwiMVxcXCI+PC9TbGlkZXI+XFxyXFxuXFx0XFx0XFx0ICAgIDxMYWJlbCBjbGFzcz1cXFwiaDNcXFwiIHRleHQ9XFxcIjhcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiByb3c9XFxcIjBcXFwiIGNvbD1cXFwiMlxcXCI+PC9MYWJlbD5cXHJcXG5cXHRcXHRcXHQ8L0dyaWRMYXlvdXQ+XFxyXFxuXFx0XFx0ICA8TGFiZWwgKm5nSWY9XFxcImlzRHJpdmluZ1xcXCIgdGV4dD1cXFwie3sgY2FwYWNpdHkgfX1cXFwiIGNsYXNzPVxcXCJoZWFkZXItbGFiZWwtMlxcXCI+PC9MYWJlbD5cXHJcXG5cXHJcXG5cXHRcXHQgIDxCdXR0b24gdGV4dD1cXFwiQWRkXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5IHN1Ym1pdC1idG5cXFwiICh0YXApPVxcXCJhZGRQb3N0aW5nKClcXFwiPjwvQnV0dG9uPlxcclxcblxcdFxcdDwvU3RhY2tMYXlvdXQ+XFxyXFxuXFx0PC9GbGV4Ym94TGF5b3V0PlxcclxcblxcdDwvU2Nyb2xsVmlldz5cXHJcXG48L1N0YWNrTGF5b3V0PlxcclxcblxcclxcblxcclxcblwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNb2RhbERpYWxvZ1BhcmFtcyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9kaXJlY3RpdmVzL2RpYWxvZ3NcIjtcclxuaW1wb3J0IHsgTW9kYWxEaWFsb2dTZXJ2aWNlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2RpcmVjdGl2ZXMvZGlhbG9nc1wiO1xyXG5pbXBvcnQgeyBQb3N0aW5nU2VydmljZSB9IGZyb20gJy4uL3Bvc3Rpbmcuc2VydmljZS50bnMnO1xyXG5pbXBvcnQgeyBEYXRlUGlja2VyIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZGF0ZS1waWNrZXJcIjtcclxuaW1wb3J0IHsgU3dpdGNoIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvc3dpdGNoXCI7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlXCI7XHJcbmltcG9ydCB7IExhYmVsIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGFiZWxcIjtcclxuaW1wb3J0IHsgQ29sb3IgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9jb2xvclwiO1xyXG5pbXBvcnQgeyBQbGFjZXNBdXRvY29tcGxldGVTZXJ2aWNlIH0gZnJvbSAnLi4vcGxhY2VzLWF1dG9jb21wbGV0ZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgc2V0SW50ZXJ2YWwsIGNsZWFySW50ZXJ2YWwgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy90aW1lclwiO1xyXG5pbXBvcnQgeyBMb2NhdGlvbkNvbXBvbmVudCB9IGZyb20gJy4uL2xvY2F0aW9uL2xvY2F0aW9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRyYW5zZmVyU2VydmljZSB9IGZyb20gJy4uL2RhdGF0cmFuc2Zlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTG9naW5jaGVja1NlcnZpY2UgfSBmcm9tICcuLi9sb2dpbmNoZWNrLnNlcnZpY2UudG5zJztcclxuaW1wb3J0ICogYXMgZmlyZWJhc2UgZnJvbSAnbmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZSc7XHJcbmltcG9ydCB7IERhdGVQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgQ2FjaGUgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2ltYWdlLWNhY2hlJztcclxuaW1wb3J0IHsgR29vZ2xlTWFwc1NlcnZpY2UgfSBmcm9tICcuLi9nb29nbGUtbWFwcy5zZXJ2aWNlJztcclxuaW1wb3J0IHtJbWFnZVNvdXJjZSwgZnJvbUZpbGUsIGZyb21SZXNvdXJjZSwgZnJvbUJhc2U2NH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvaW1hZ2Utc291cmNlXCI7XHJcbmltcG9ydCB7Rm9sZGVyLCBwYXRoLCBrbm93bkZvbGRlcnN9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2ZpbGUtc3lzdGVtXCI7XHJcbmltcG9ydCAqIGFzIGZzIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2ZpbGUtc3lzdGVtXCI7XHJcbmltcG9ydCB7IEFjdGl2aXR5SW5kaWNhdG9yIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9hY3Rpdml0eS1pbmRpY2F0b3InO1xyXG5pbXBvcnQgeyBTY3JvbGxWaWV3IH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9zY3JvbGwtdmlldyc7XHJcbmltcG9ydCB7IEZsZXhib3hMYXlvdXQgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvZmxleGJveC1sYXlvdXQnO1xyXG5pbXBvcnQgeyBTdGFja0xheW91dCB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvbGF5b3V0cy9zdGFjay1sYXlvdXQnO1xyXG4vLyBpbXBvcnQgeyBHb29nbGVQbGFjZXNBdXRvY29tcGxldGUgfSBmcm9tICduYXRpdmVzY3JpcHQtZ29vZ2xlLXBsYWNlcy1hdXRvY29tcGxldGUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtYWRkLW1vZGFsJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vYWRkLW1vZGFsLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9hZGQtbW9kYWwuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBZGRNb2RhbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFyYW1zOiBNb2RhbERpYWxvZ1BhcmFtcywgcHJpdmF0ZSBwb3N0aW5nU2VydmljZTogUG9zdGluZ1NlcnZpY2UsIHByaXZhdGUgcGFnZTogUGFnZSwgcHJpdmF0ZSBwbGFjZXNTZXJ2aWNlOiBQbGFjZXNBdXRvY29tcGxldGVTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBtb2RhbDogTW9kYWxEaWFsb2dTZXJ2aWNlLCBwcml2YXRlIHZjUmVmOiBWaWV3Q29udGFpbmVyUmVmLCBwcml2YXRlIHRyYW5zZmVyU2VydmljZTogVHJhbnNmZXJTZXJ2aWNlLCBwcml2YXRlIGxvZ2luY2hlY2tTZXJ2aWNlOiBMb2dpbmNoZWNrU2VydmljZSxcclxuICAgIHByaXZhdGUgZGF0ZVBpcGU6IERhdGVQaXBlLCBwcml2YXRlIG1hcFNlcnZpY2U6IEdvb2dsZU1hcHNTZXJ2aWNlKSB7IH1cclxuXHJcbiAgQFZpZXdDaGlsZCgnZHJpdmluZ0xhYmVsJywgeyBzdGF0aWM6IHRydWUgfSkgZGw6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgncmlkaW5nTGFiZWwnLCB7IHN0YXRpYzogdHJ1ZSB9KSBybDogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKCdhY3Rpdml0eUluZGljYXRvcicsIHsgc3RhdGljOiB0cnVlIH0pIGFpOiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoJ2FkZENvbnRhaW5lcicsIHsgc3RhdGljOiB0cnVlIH0pIGFjOiBFbGVtZW50UmVmO1xyXG4gIC8vIEBWaWV3Q2hpbGQoJ3N0YXJ0TGFiZWwnKSBzbDogRWxlbWVudFJlZjtcclxuICAvLyBAVmlld0NoaWxkKCdlbmRMYWJlbCcpIGVsOiBFbGVtZW50UmVmO1xyXG5cclxuICBzdGFydFN1Z2dlc3Rpb25zOiBTdHJpbmdbXTtcclxuICBlbmRTdWdnZXN0aW9uczogU3RyaW5nW107XHJcbiAgc3RhcnRQbGFjZTtcclxuICBlbmRQbGFjZTtcclxuICBzdGFydEFkZHJlc3M7XHJcbiAgZW5kQWRkcmVzcztcclxuICBmb3JtYXR0ZWREYXRlO1xyXG4gIGRhdGUgPSBcIm5vd1wiO1xyXG4gIHByaWNlID0gXCIkMTVcIjtcclxuICBjYXBhY2l0eSA9IFwiLTFcIjtcclxuICB1c2VyID0ge1xyXG4gIFx0dXNlcm5hbWU6IFwiMjAyMmF5ZWVcIixcclxuICAgIGlkOiBcIlwiXHJcbiAgfTtcclxuICBzdGFydExhYmVsID0gXCJQaWNrIHN0YXJ0IGxvY2F0aW9uXCI7XHJcbiAgZW5kTGFiZWwgPSBcIlBpY2sgZW5kIGxvY2F0aW9uXCI7XHJcbiAgc3RhcnRMYXQ7XHJcbiAgc3RhcnRMbmc7XHJcbiAgZW5kTGF0O1xyXG4gIGVuZExuZztcclxuXHJcbiAgaXNEcml2aW5nID0gZmFsc2U7XHJcbiAgc3RhcnRMb2NhdGlvblBpY2tlZCA9IGZhbHNlO1xyXG4gIGVuZExvY2F0aW9uUGlja2VkID0gZmFsc2U7XHJcbiAgaW1hZ2VTb3VyY2UgPSBuZXcgSW1hZ2VTb3VyY2UoKTtcclxuXHJcblxyXG4gIEFQSV9LRVkgPSBcIkFJemFTeUFJVHhTMWptZjhQTXRhelJndVdjQWZXUXhXMWtQT29ZZ1wiO1xyXG4gIC8vIGdvb2dsZVBsYWNlc0F1dG9jb21wbGV0ZSA9IG5ldyBHb29nbGVQbGFjZXNBdXRvY29tcGxldGUodGhpcy5BUElfS0VZKTtcclxuICBuZ09uSW5pdCgpIHtcclxuICAgIC8vIGxldCBhZGRDb250YWluZXIgPSA8RmxleGJveExheW91dD4gdGhpcy5hYy5uYXRpdmVFbGVtZW50O1xyXG4gICAgLy8gIC8vIGFjdGl2aXR5SW5kaWNhdG9yLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XHJcbiAgICAvLyBhZGRDb250YWluZXIuc3R5bGUudmlzaWJpbGl0eSA9ICdjb2xsYXBzZSc7XHJcbiAgICBsZXQgYWN0aXZpdHlJbmRpY2F0b3IgPSA8QWN0aXZpdHlJbmRpY2F0b3I+IHRoaXMuYWkubmF0aXZlRWxlbWVudDtcclxuICAgIGFjdGl2aXR5SW5kaWNhdG9yLnN0eWxlLnZpc2liaWxpdHkgPSAnY29sbGFwc2UnXHJcbiAgICBmaXJlYmFzZS5nZXRDdXJyZW50VXNlcigpLnRoZW4odXNlciA9PiB7XHJcbiAgICAgIHRoaXMudXNlci51c2VybmFtZSA9IHVzZXIuZGlzcGxheU5hbWU7XHJcbiAgICAgIGlmKHVzZXIuZGlzcGxheU5hbWUgPT0gbnVsbCB8fCB1c2VyLmRpc3BsYXlOYW1lID09ICcnKVxyXG4gICAgICAgIHRoaXMudXNlci51c2VybmFtZSA9IHVzZXIuZW1haWw7XHJcbiAgICAgIHRoaXMudXNlci5pZCA9IHRoaXMubG9naW5jaGVja1NlcnZpY2UuZ2V0VXNlcigpO1xyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHN0YXJ0U2VsZWN0KGV2ZW50OiBFdmVudCkge1xyXG4gICAgY29uc29sZS5sb2coZXZlbnQuc3JjRWxlbWVudCk7XHJcbiAgfVxyXG5cclxuICBzaG93TW9kYWwodHlwZSkge1xyXG4gICAgbGV0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgY29udGV4dDoge30sXHJcbiAgICAgICAgZnVsbHNjcmVlbjogdHJ1ZSxcclxuICAgICAgICB2aWV3Q29udGFpbmVyUmVmOiB0aGlzLnZjUmVmXHJcbiAgICAgICAgLy8gYW5pbWF0ZWQ6IHRydWUsXHJcbiAgICAgICAgLy8gdHJhbnNpdGlvbjogeyBuYW1lOiBcInNsaWRlVG9wXCIgfVxyXG4gICAgfTtcclxuICAgIHRoaXMudHJhbnNmZXJTZXJ2aWNlLnNldERhdGEodHlwZSk7XHJcbiAgICB0aGlzLm1vZGFsLnNob3dNb2RhbChMb2NhdGlvbkNvbXBvbmVudCwgb3B0aW9ucykudGhlbihyZXMgPT4ge1xyXG4gICAgICAgIGlmKHJlcyAhPSBudWxsKVxyXG4gICAgICAgICAgaWYocmVzLnN0YXJ0ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGFydExvY2F0aW9uUGlja2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5zdGFydExhYmVsID0gJ1N0YXJ0IGxvY2F0aW9uOiAnICsgcmVzLnN0YXJ0O1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0UGxhY2UgPSByZXMuc3RhcnQ7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRBZGRyZXNzID0gcmVzLmFkZHJlc3M7XHJcblxyXG4gICAgICAgICAgICAvLyBsZXQgc0xhYmVsID0gPExhYmVsPiB0aGlzLnNsLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICAgICAgICAgIC8vIHNMYWJlbC5jbGFzc05hbWUgKz0gJ2JvbGQnO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZWxzZSBpZihyZXMuZW5kICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5lbmRMb2NhdGlvblBpY2tlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuZW5kTGFiZWwgPSAnRW5kIGxvY2F0aW9uOiAnICsgcmVzLmVuZDtcclxuICAgICAgICAgICAgdGhpcy5lbmRQbGFjZSA9IHJlcy5lbmQ7XHJcbiAgICAgICAgICAgIHRoaXMuZW5kQWRkcmVzcyA9IHJlcy5hZGRyZXNzO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgaWYodHlwZSA9PSAnc3RhcnQnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRMb2NhdGlvblBpY2tlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRMYWJlbCA9ICdQaWNrIHN0YXJ0IGxvY2F0aW9uJztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2UgaWYodHlwZSA9PSAnZW5kJykge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0TG9jYXRpb25QaWNrZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zdGFydExhYmVsID0gJ1BpY2sgZW5kIGxvY2F0aW9uJztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNsb3NlKHJlcykge1xyXG4gIFx0dGhpcy5wYXJhbXMuY2xvc2VDYWxsYmFjayhyZXMpO1xyXG4gICB9XHJcblxyXG4gICBhZGRQb3N0aW5nKCkge1xyXG4gICAgIGxldCBhZGRDb250YWluZXIgPSA8RmxleGJveExheW91dD4gdGhpcy5hYy5uYXRpdmVFbGVtZW50O1xyXG4gICAgIGFkZENvbnRhaW5lci5zdHlsZS52aXNpYmlsaXR5ID0gJ2NvbGxhcHNlJztcclxuICAgICBsZXQgYWN0aXZpdHlJbmRpY2F0b3IgPSA8QWN0aXZpdHlJbmRpY2F0b3I+IHRoaXMuYWkubmF0aXZlRWxlbWVudDtcclxuICAgICBhY3Rpdml0eUluZGljYXRvci5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xyXG4gICAgIHRoaXMubWFwU2VydmljZS5nZXRHZW9jb2RlUmVzdWx0cyh0aGlzLnN0YXJ0UGxhY2UgKyAnICcgKyB0aGlzLnN0YXJ0QWRkcmVzcykuc3Vic2NyaWJlKChyZXM6IGFueSkgPT4ge1xyXG4gICAgICB0aGlzLnN0YXJ0TGF0ID0gcmVzLnJlc3VsdHNbMF0uZ2VvbWV0cnkubG9jYXRpb24ubGF0O1xyXG4gICAgICB0aGlzLnN0YXJ0TG5nID0gcmVzLnJlc3VsdHNbMF0uZ2VvbWV0cnkubG9jYXRpb24ubG5nO1xyXG4gICAgICB0aGlzLm1hcFNlcnZpY2UuZ2V0R2VvY29kZVJlc3VsdHModGhpcy5lbmRQbGFjZSArICcgJyArIHRoaXMuZW5kQWRkcmVzcykuc3Vic2NyaWJlKChyZXM6IGFueSkgPT4ge1xyXG4gICAgICAgIHRoaXMuZW5kTGF0ID0gcmVzLnJlc3VsdHNbMF0uZ2VvbWV0cnkubG9jYXRpb24ubGF0O1xyXG4gICAgICAgIHRoaXMuZW5kTG5nID0gcmVzLnJlc3VsdHNbMF0uZ2VvbWV0cnkubG9jYXRpb24ubG5nO1xyXG5cclxuICAgICAgICBpZih0aGlzLnN0YXJ0TG9jYXRpb25QaWNrZWQgJiYgdGhpcy5lbmRMb2NhdGlvblBpY2tlZCkge1xyXG4gICAgICAgICB2YXIgcG9zdGluZ3NDb2xsZWN0aW9uID0gZmlyZWJhc2UuZmlyZXN0b3JlLmNvbGxlY3Rpb24oJ3Bvc3RpbmdzJyk7XHJcbiAgICAgICAgIHBvc3RpbmdzQ29sbGVjdGlvbi5hZGQoe1xyXG4gICAgICAgICAgIHVpZDogdGhpcy51c2VyLmlkLFxyXG4gICAgICAgICAgIHVzZXI6IHRoaXMudXNlci51c2VybmFtZSxcclxuICAgICAgICAgICBzdGFydEFkZHJlc3M6IHRoaXMuc3RhcnRQbGFjZSxcclxuICAgICAgICAgICBlbmRBZGRyZXNzOiB0aGlzLmVuZFBsYWNlLFxyXG4gICAgICAgICAgIHN0YXJ0Rm9ybWF0dGVkOiB0aGlzLnN0YXJ0QWRkcmVzcyxcclxuICAgICAgICAgICBlbmRGb3JtYXR0ZWQ6IHRoaXMuZW5kQWRkcmVzcyxcclxuICAgICAgICAgICBkYXRlOiB0aGlzLmRhdGUsXHJcbiAgICAgICAgICAgcHJpY2U6IHRoaXMucHJpY2UsXHJcbiAgICAgICAgICAgY2FwYWNpdHk6IHRoaXMuY2FwYWNpdHksXHJcbiAgICAgICAgICAgY29tbWVudHM6IFwiXCIsXHJcbiAgICAgICAgICAgZm9ybWF0dGVkRGF0ZTogdGhpcy5mb3JtYXR0ZWREYXRlLFxyXG4gICAgICAgICAgIHN0YXJ0TGF0OiB0aGlzLnN0YXJ0TGF0LFxyXG4gICAgICAgICAgIGVuZExhdDogdGhpcy5lbmRMYXQsXHJcbiAgICAgICAgICAgc3RhcnRMbmc6IHRoaXMuc3RhcnRMbmcsXHJcbiAgICAgICAgICAgZW5kTG5nOiB0aGlzLmVuZExuZ1xyXG4gICAgICAgICB9KS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzKTtcclxuXHJcbiAgICAgICAgICAgZmlyZWJhc2UuZmlyZXN0b3JlLmNvbGxlY3Rpb24oJ3VzZXJzJykuZG9jKHRoaXMudXNlci5pZCkuZ2V0KCkudGhlbihkb2MgPT4ge1xyXG4gICAgICAgICAgICAgdmFyIHBvc3RzOiBTdHJpbmdbXSA9IGRvYy5kYXRhKCkucG9zdHM7XHJcbiAgICAgICAgICAgICBwb3N0cy5wdXNoKHJlcy5pZCk7XHJcbiAgICAgICAgICAgICBmaXJlYmFzZS5maXJlc3RvcmUuY29sbGVjdGlvbigndXNlcnMnKS5kb2ModGhpcy51c2VyLmlkKS51cGRhdGUoe1xyXG4gICAgICAgICAgICAgICBwb3N0czogcG9zdHNcclxuICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICB0aGlzLnVwbG9hZE1hcChyZXMuaWQsICdzbWFsbF9tYXAucG5nJyk7XHJcbiAgICAgICAgICAgICB0aGlzLnVwbG9hZE1hcChyZXMuaWQsICdsYXJnZV9tYXAucG5nJyk7XHJcbiAgICAgICAgICAgfSkuY2F0Y2goKGVycikgPT4ge30pXHJcbiAgICAgICAgIH0pLmNhdGNoKChlcnIpID0+IHt9KVxyXG4gICAgICAgfVxyXG5cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgICAgLy8gdGhpcy5wb3N0aW5nU2VydmljZS5hZGRQb3N0aW5nKHRoaXMudXNlci51c2VybmFtZSwgdGhpcy5zdGFydFBsYWNlLCB0aGlzLmVuZFBsYWNlLCB0aGlzLmRhdGUsIHRoaXMucHJpY2UsIHRoaXMuY2FwYWNpdHksIFwiXCIpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIC8vICAgdGhpcy5jbG9zZSgncG9zdGVkJyk7XHJcbiAgICAgIC8vIH0pO1xyXG4gIH1cclxuXHJcbiAgdXBsb2FkTWFwKGlkLCB1cGxvYWROYW1lKSB7XHJcbiAgICBjb25zdCBjYWNoZSA9IG5ldyBDYWNoZSgpO1xyXG4gICAgY2FjaGUuZW5hYmxlRG93bmxvYWQoKTtcclxuICAgIGxldCBjYWNoZWRJbWFnZVNvdXJjZTtcclxuICAgIHZhciB1cmwgPSB0aGlzLm1hcFNlcnZpY2UuZ2V0U3RhdGljTWFwKHRoaXMuc3RhcnRQbGFjZSArIFwiIFwiICsgdGhpcy5zdGFydEFkZHJlc3MsIHRoaXMuZW5kUGxhY2UgKyBcIiBcIiArIHRoaXMuZW5kQWRkcmVzcyk7XHJcbiAgICBpZih1cGxvYWROYW1lID09ICdsYXJnZV9tYXAucG5nJylcclxuICAgICAgdXJsID0gdGhpcy5tYXBTZXJ2aWNlLmdldFN0YXRpY01hcExhcmdlKHRoaXMuc3RhcnRQbGFjZSArIFwiIFwiICsgdGhpcy5zdGFydEFkZHJlc3MsIHRoaXMuZW5kUGxhY2UgKyBcIiBcIiArIHRoaXMuZW5kQWRkcmVzcyk7XHJcbiAgICAvLyBUcnkgdG8gcmVhZCB0aGUgaW1hZ2UgZnJvbSB0aGUgY2FjaGVcclxuICAgIGNvbnN0IG15SW1hZ2UgPSBjYWNoZS5nZXQodXJsKTtcclxuICAgIGNhY2hlLnB1c2goe1xyXG4gICAga2V5OiB1cmwsXHJcbiAgICB1cmw6IHVybCxcclxuICAgIGNvbXBsZXRlZDogKGltYWdlLCBrZXkpID0+IHtcclxuICAgICAgICAgICAgaWYgKHVybCA9PT0ga2V5KSB7XHJcbiAgICAgICAgICAgICAgICBjYWNoZWRJbWFnZVNvdXJjZSA9IHRoaXMuaW1hZ2VTb3VyY2Uuc2V0TmF0aXZlU291cmNlKGltYWdlKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZvbGRlclBhdGg6IHN0cmluZyA9IGtub3duRm9sZGVycy5kb2N1bWVudHMoKS5wYXRoO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZmlsZU5hbWUgPSB1cGxvYWROYW1lO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZmlsZVBhdGggPSBwYXRoLmpvaW4oZm9sZGVyUGF0aCwgZmlsZU5hbWUpO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2F2ZWQ6IGJvb2xlYW4gPSB0aGlzLmltYWdlU291cmNlLnNhdmVUb0ZpbGUoZmlsZVBhdGgsIFwicG5nXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHNhdmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlyZWJhc2Uuc3RvcmFnZS51cGxvYWRGaWxlKHtcclxuICAgICAgICAgICAgICAgICAgICAgIC8vIHRoZSBmdWxsIHBhdGggb2YgdGhlIGZpbGUgaW4geW91ciBGaXJlYmFzZSBzdG9yYWdlIChmb2xkZXJzIHdpbGwgYmUgY3JlYXRlZClcclxuICAgICAgICAgICAgICAgICAgICAgIHJlbW90ZUZ1bGxQYXRoOiAncG9zdGluZ3MvJyArIGlkICsgJy9tYXBzLycgKyB1cGxvYWROYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgLy8gb3B0aW9uIDE6IGEgZmlsZS1zeXN0ZW0gbW9kdWxlIEZpbGUgb2JqZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICBsb2NhbEZpbGU6IGZzLkZpbGUuZnJvbVBhdGgoZmlsZVBhdGgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgLy8gb3B0aW9uIDI6IGEgZnVsbCBmaWxlIHBhdGggKGlnbm9yZWQgaWYgJ2xvY2FsRmlsZScgaXMgc2V0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgbG9jYWxGdWxsUGF0aDogZmlsZVBhdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAvLyBnZXQgbm90aWZpZWQgb2YgZmlsZSB1cGxvYWQgcHJvZ3Jlc3NcclxuICAgICAgICAgICAgICAgICAgICAgIG9uUHJvZ3Jlc3M6IChzdGF0dXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJVcGxvYWRlZCBmcmFjdGlvbjogXCIgKyBzdGF0dXMuZnJhY3Rpb25Db21wbGV0ZWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlBlcmNlbnRhZ2UgY29tcGxldGU6IFwiICsgc3RhdHVzLnBlcmNlbnRhZ2VDb21wbGV0ZWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pLnRoZW4oKHVwbG9hZGVkRmlsZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWYodXBsb2FkTmFtZSA9PSAnc21hbGxfbWFwLnBuZycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpcmViYXNlLnN0b3JhZ2UuZ2V0RG93bmxvYWRVcmwoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlbW90ZUZ1bGxQYXRoOiAncG9zdGluZ3MvJyArIGlkICsgJy9tYXBzL3NtYWxsX21hcC5wbmcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLnRoZW4oKHVybCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZpcmViYXNlLmZpcmVzdG9yZS5jb2xsZWN0aW9uKCdwb3N0aW5ncycpLmRvYyhpZCkudXBkYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcF91cmw6IHVybFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGFjdGl2aXR5SW5kaWNhdG9yID0gPEFjdGl2aXR5SW5kaWNhdG9yPiB0aGlzLmFpLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgYWRkQ29udGFpbmVyID0gPEZsZXhib3hMYXlvdXQ+IHRoaXMuYWMubmF0aXZlRWxlbWVudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2aXR5SW5kaWNhdG9yLnN0eWxlLnZpc2liaWxpdHkgPSAnY29sbGFwc2UnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkQ29udGFpbmVyLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlKCdwb3N0ZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIG9uUGlja2VyTG9hZGVkKGFyZ3MpIHtcclxuICBcdGxldCBkYXRlUGlja2VyID0gPERhdGVQaWNrZXI+YXJncy5vYmplY3Q7XHJcblxyXG4gIFx0dmFyIHRvZGF5ID0gbmV3IERhdGUoKTtcclxuXHJcbiAgXHRkYXRlUGlja2VyLm1pbkRhdGUgPSBuZXcgRGF0ZSgpO1xyXG5cclxuICBcdHZhciBuZXh0WWVhckRhdGUgPSBuZXcgRGF0ZSh0b2RheSk7XHJcbiAgXHRuZXh0WWVhckRhdGUuc2V0RGF0ZShuZXh0WWVhckRhdGUuZ2V0RGF0ZSgpICsgMzY1KTtcclxuICBcdGRhdGVQaWNrZXIubWF4RGF0ZSA9IG5leHRZZWFyRGF0ZTtcclxuICB9XHJcblxyXG4gIG9uRGF0ZUNoYW5nZWQoYXJncykge1xyXG4gIFx0bGV0IGRhdGVQaWNrZXIgPSA8RGF0ZVBpY2tlcj5hcmdzLm9iamVjdDtcclxuICBcdHZhciBzZWxlY3RlZERhdGUgPSBkYXRlUGlja2VyLmRhdGU7XHJcbiAgICB0aGlzLmZvcm1hdHRlZERhdGUgPSB0aGlzLmRhdGVQaXBlLnRyYW5zZm9ybShzZWxlY3RlZERhdGUsXCJ5eXl5LU1NLWRkXCIpXHJcblxyXG4gIFx0Ly8gY29uc29sZS5sb2coc2VsZWN0ZWREYXRlLnRvU3RyaW5nKCkuc3Vic3RyaW5nKDAsIDE1KSk7XHJcbiAgXHR0aGlzLmRhdGUgPSBzZWxlY3RlZERhdGUudG9TdHJpbmcoKS5zdWJzdHJpbmcoMCwgMTUpO1xyXG4gIH1cclxuXHJcbiAgb25DaGVja2VkQ2hhbmdlKGFyZ3MpIHtcclxuICBcdGxldCBteVN3aXRjaCA9IGFyZ3Mub2JqZWN0IGFzIFN3aXRjaDtcclxuICAgIGxldCBpc0NoZWNrZWQgPSBteVN3aXRjaC5jaGVja2VkOyAvLyBib29sZWFuXHJcblxyXG4gICAgbGV0IGRyaXZpbmdMYWJlbCA9IDxMYWJlbD4gdGhpcy5kbC5uYXRpdmVFbGVtZW50O1xyXG4gICAgbGV0IHJpZGluZ0xhYmVsID0gPExhYmVsPiB0aGlzLnJsLm5hdGl2ZUVsZW1lbnQ7XHJcblxyXG4gICAgaWYoaXNDaGVja2VkKSB7XHJcbiAgICBcdGRyaXZpbmdMYWJlbC5zdHlsZS5mb250V2VpZ2h0ID0gXCI0MDBcIjtcclxuICAgIFx0ZHJpdmluZ0xhYmVsLnN0eWxlLmNvbG9yID0gbmV3IENvbG9yKFwiIzVjNjg3Y1wiKTtcclxuICAgIFx0cmlkaW5nTGFiZWwuc3R5bGUuZm9udFdlaWdodCA9IFwiNzAwXCI7XHJcbiAgICBcdHJpZGluZ0xhYmVsLnN0eWxlLmNvbG9yID0gbmV3IENvbG9yKFwiI2FjMDBlNlwiKTtcclxuICAgIFx0dGhpcy5pc0RyaXZpbmcgPSBmYWxzZTtcclxuICAgIFx0dGhpcy5jYXBhY2l0eSA9IFwiLTFcIjtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgXHRkcml2aW5nTGFiZWwuc3R5bGUuZm9udFdlaWdodCA9IFwiNzAwXCI7XHJcbiAgICBcdGRyaXZpbmdMYWJlbC5zdHlsZS5jb2xvciA9IG5ldyBDb2xvcihcIiNhYzAwZTZcIik7XHJcbiAgICBcdHJpZGluZ0xhYmVsLnN0eWxlLmZvbnRXZWlnaHQgPSBcIjQwMFwiO1xyXG4gICAgXHRyaWRpbmdMYWJlbC5zdHlsZS5jb2xvciA9IG5ldyBDb2xvcihcIiM1YzY4N2NcIik7XHJcbiAgICBcdHRoaXMuaXNEcml2aW5nID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCIvKiBBZGQgbW9iaWxlIHN0eWxlcyBmb3IgdGhlIGNvbXBvbmVudCBoZXJlLiAgKi9cXG4uY2xvc2Uge1xcblxcdG1hcmdpbjogMTA7XFxuXFx0Zm9udC1zaXplOiAyODtcXG5cXHR3aWR0aDogNDg7XFxuXFx0aGVpZ2h0OiA0ODtcXG59XFxuXFxuLmNsb3NlLWJ1dHRvbi1jb250YWluZXIge1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRsZWZ0OiAwO1xcbn1cXG5cXG4ucGF5bWVudC10eXBlLWljb24ge1xcblxcdGhlaWdodDogMzQ7XFxuXFx0d2lkdGg6IDM0O1xcblxcdGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG5cXHRtYXJnaW4tdG9wOiAxODtcXG5cXHRtYXJnaW4tYm90dG9tOiAxODtcXG5cXHRtYXJnaW4tbGVmdDogMzY7XFxufVxcblxcbi5wYXltZW50LWluZm8tbGFiZWwge1xcblxcdGZvbnQtc2l6ZTogMTY7XFxuXFx0Lypmb250LXdlaWdodDogNzAwOyovXFxuXFx0cGFkZGluZzogMzA7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdGNvbG9yOiBibGFjaztcXG59XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPFN0YWNrTGF5b3V0PlxcclxcblxcdDxTdGFja0xheW91dCBjbGFzcz1cXFwiY2xvc2UtYnV0dG9uLWNvbnRhaW5lclxcXCIgb3JpZW50YXRpb249XFxcImhvcml6b250YWxcXFwiPlxcclxcblxcdFxcdDxMYWJlbCB0ZXh0PVxcXCImdGltZXM7XFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiICh0YXApPVxcXCJjbG9zZSgnY2FuY2VsJylcXFwiPjwvTGFiZWw+XFxyXFxuXFx0PC9TdGFja0xheW91dD5cXHJcXG5cXHJcXG5cXHQ8TGlzdFZpZXcgW2l0ZW1zXT1cXFwibWV0aG9kc1xcXCIgc2VwYXJhdG9yQ29sb3I9XFxcInRyYW5zcGFyZW50XFxcIiAoaXRlbVRhcCk9XFxcIm9uU2VsZWN0KCRldmVudClcXFwiPlxcclxcblxcdFxcdDxuZy10ZW1wbGF0ZSBsZXQtaXRlbT1cXFwiaXRlbVxcXCIgbGV0LWk9XFxcImluZGV4XFxcIiBsZXQtb2RkPVxcXCJvZGRcXFwiIGxldC1ldmVuPVxcXCJldmVuXFxcIj5cXHJcXG5cXHRcXHRcXHQ8U3RhY2tMYXlvdXQgW2NsYXNzLm9kZF09XFxcIm9kZFxcXCIgW2NsYXNzLmV2ZW5dPVxcXCJldmVuXFxcIiBvcmllbnRhdGlvbj1cXFwiaG9yaXpvbnRhbFxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0PEltYWdlIFtzcmNdPVxcXCJpdGVtLnBheW1lbnRUeXBlXFxcIiBjbGFzcz1cXFwicGF5bWVudC10eXBlLWljb25cXFwiPjwvSW1hZ2U+XFxyXFxuXFx0XFx0XFx0XFx0PExhYmVsIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiBbdGV4dF09XFxcIml0ZW0uaW5mb1xcXCIgY2xhc3M9XFxcInBheW1lbnQtaW5mby1sYWJlbFxcXCI+PC9MYWJlbD5cXHJcXG5cXHRcXHRcXHQ8L1N0YWNrTGF5b3V0PlxcclxcblxcdFxcdDwvbmctdGVtcGxhdGU+XFxyXFxuXFx0PC9MaXN0Vmlldz5cXHJcXG48L1N0YWNrTGF5b3V0PlwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNb2RhbERpYWxvZ1BhcmFtcyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9kaXJlY3RpdmVzL2RpYWxvZ3NcIjtcclxuaW1wb3J0IHsgTW9kYWxEaWFsb2dTZXJ2aWNlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2RpcmVjdGl2ZXMvZGlhbG9nc1wiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlQXJyYXkgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS1hcnJheSc7XHJcbmltcG9ydCB7IEFkZENhcmRQYXltZW50Q29tcG9uZW50IH0gZnJvbSAnLi4vYWRkLWNhcmQtcGF5bWVudC9hZGQtY2FyZC1wYXltZW50LmNvbXBvbmVudCc7XHJcblxyXG5cclxuY2xhc3MgTWV0aG9kSXRlbSB7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheW1lbnRUeXBlOiBzdHJpbmcsIHB1YmxpYyBpbmZvOiBzdHJpbmcpIHt9XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLWFkZC1wYXltZW50JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vYWRkLXBheW1lbnQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2FkZC1wYXltZW50LmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWRkUGF5bWVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdmNSZWY6IFZpZXdDb250YWluZXJSZWYsIHByaXZhdGUgbW9kYWw6IE1vZGFsRGlhbG9nU2VydmljZSwgcHJpdmF0ZSBwYXJhbXM6IE1vZGFsRGlhbG9nUGFyYW1zKSB7IH1cclxuXHJcbiAgbWV0aG9kcyA9IG5ldyBPYnNlcnZhYmxlQXJyYXk8TWV0aG9kSXRlbT4oKTtcclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgXHR0aGlzLmFkZE1ldGhvZHMoKTtcclxuICB9XHJcblxyXG4gIGFkZE1ldGhvZHMoKSB7XHJcbiAgXHR0aGlzLm1ldGhvZHMucHVzaChuZXcgTWV0aG9kSXRlbSgnfi9pbWcvY3JlZGl0LWNhcmQtaWNvbi5wbmcnLCAnQ3JlZGl0IG9yIERlYml0IENhcmQnKSk7XHJcbiAgXHR0aGlzLm1ldGhvZHMucHVzaChuZXcgTWV0aG9kSXRlbSgnfi9pbWcvcGF5cGFsLWljb24ucG5nJywgJ1BheXBhbCcpKTtcclxuICBcdHRoaXMubWV0aG9kcy5wdXNoKG5ldyBNZXRob2RJdGVtKCd+L2ltZy92ZW5tby1pY29uLnBuZycsICdWZW5tbycpKTtcclxuICB9XHJcblxyXG4gIG9wZW5DYXJkUGF5bWVudCgpIHtcclxuICAgIGxldCBvcHRpb25zID0ge1xyXG4gICAgICAgIGNvbnRleHQ6IHt9LFxyXG4gICAgICAgIGZ1bGxzY3JlZW46IHRydWUsXHJcbiAgICAgICAgdmlld0NvbnRhaW5lclJlZjogdGhpcy52Y1JlZlxyXG4gICAgICAgIC8vIGFuaW1hdGVkOiB0cnVlLFxyXG4gICAgICAgIC8vIHRyYW5zaXRpb246IHsgbmFtZTogXCJzbGlkZVRvcFwiIH1cclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5tb2RhbC5zaG93TW9kYWwoQWRkQ2FyZFBheW1lbnRDb21wb25lbnQsIG9wdGlvbnMpLnRoZW4ocmVzID0+IHtcclxuXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNsb3NlKHJlcykge1xyXG4gIFx0dGhpcy5wYXJhbXMuY2xvc2VDYWxsYmFjayhyZXMpO1xyXG4gIH1cclxuXHJcbiAgb25TZWxlY3QoZXZlbnQpIHtcclxuICBcdC8vZXZlbnQuaW5kZXggc3RvcmVzIHdoaWNoIGluZGV4IHdhcyB0YXBwZWRcclxuICBcdGlmKGV2ZW50LmluZGV4ID09IDApXHJcbiAgXHRcdHRoaXMub3BlbkNhcmRQYXltZW50KCk7XHJcbiAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSAnLi9hcHAuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTG9naW5EaXJlY3RpdmUgfSBmcm9tICcuL2xvZ2luLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IExvZ2luQ29tcG9uZW50IH0gZnJvbSAnLi9sb2dpbi9sb2dpbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSAnLi9ob21lL2hvbWUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgSG9tZURpcmVjdGl2ZSB9IGZyb20gJy4vaG9tZS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBIaXN0b3J5Q29tcG9uZW50IH0gZnJvbSAnLi9oaXN0b3J5L2hpc3RvcnkuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU2V0dGluZ3NDb21wb25lbnQgfSBmcm9tICcuL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEJyb3dzZXJBbmltYXRpb25zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zJztcclxuaW1wb3J0IHsgTmd4UGF5UGFsTW9kdWxlIH0gZnJvbSAnbmd4LXBheXBhbCc7XHJcblxyXG5pbXBvcnQgeyBQb3N0aW5nU2VydmljZSB9IGZyb20gJy4vcG9zdGluZy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tICcuL3VzZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IFRyYW5zZmVyU2VydmljZSB9IGZyb20gJy4vZGF0YXRyYW5zZmVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBEeW5hbWljQWRkU2VydmljZSB9IGZyb20gJy4vZHluYW1pYy1hZGQuc2VydmljZSc7XHJcbmltcG9ydCB7IFBheW1lbnRTZXJ2aWNlIH0gZnJvbSAnLi9wYXltZW50LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQb3N0aW5nQ29tcG9uZW50IH0gZnJvbSAnLi9wb3N0aW5nL3Bvc3RpbmcuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVXBkYXRlQ29tcG9uZW50IH0gZnJvbSAnLi91cGRhdGUvdXBkYXRlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvbm5lY3RDb21wb25lbnQgfSBmcm9tICcuL2Nvbm5lY3QvY29ubmVjdC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlLCBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHtNYXRJbnB1dE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xyXG4vLyBpbXBvcnQgeyBBbXBsaWZ5QW5ndWxhck1vZHVsZSwgQW1wbGlmeVNlcnZpY2UgfSBmcm9tICdhd3MtYW1wbGlmeS1hbmd1bGFyJztcclxuaW1wb3J0IHsgTG9naW5yb3V0ZUNvbXBvbmVudCB9IGZyb20gJy4vbG9naW5yb3V0ZS9sb2dpbnJvdXRlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IERpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4vZGlhbG9nL2RpYWxvZy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOYXZpZ2F0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50JztcclxuXHJcbmltcG9ydCB7IEF1dG9HZW5lcmF0ZWRDb21wb25lbnQgfSBmcm9tICcuL2F1dG8tZ2VuZXJhdGVkL2F1dG8tZ2VuZXJhdGVkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBheW1lbnRzQ29tcG9uZW50IH0gZnJvbSAnLi9wYXltZW50cy9wYXltZW50cy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQYXltZW50TWV0aG9kQ29tcG9uZW50IH0gZnJvbSAnLi9wYXltZW50LW1ldGhvZC9wYXltZW50LW1ldGhvZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTZWFyY2hDb21wb25lbnQgfSBmcm9tICcuL3NlYXJjaC9zZWFyY2guY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGF5bWVudEluZm9Db21wb25lbnQgfSBmcm9tICcuL3BheW1lbnQtaW5mby9wYXltZW50LWluZm8uY29tcG9uZW50J1xyXG5pbXBvcnQgeyBXZWxjb21lQ29tcG9uZW50IH0gZnJvbSAnLi93ZWxjb21lL3dlbGNvbWUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUG9zdGluZ0luZm9Db21wb25lbnQgfSBmcm9tICcuL3Bvc3RpbmctaW5mby9wb3N0aW5nLWluZm8uY29tcG9uZW50JztcclxuaW1wb3J0IHtTZXR0aW5nc2Zvcm1Db21wb25lbnR9IGZyb20gJy4vc2V0dGluZ3Nmb3JtL3NldHRpbmdzZm9ybS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDaGF0Q29tcG9uZW50IH0gZnJvbSAnLi9jaGF0L2NoYXQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ2hhdExpc3RDb21wb25lbnQgfSBmcm9tICcuL2NoYXQtbGlzdC9jaGF0LWxpc3QuY29tcG9uZW50JztcclxuXHJcblxyXG5leHBvcnQgY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXHJcbiAgeyBwYXRoOiAnbG9naW4nLCBjb21wb25lbnQ6IExvZ2luQ29tcG9uZW50IH0sXHJcbiAgeyBwYXRoOiAnJywgICByZWRpcmVjdFRvOiAnL3dlbGNvbWUnLCBwYXRoTWF0Y2g6ICdmdWxsJyB9LFxyXG4gIHsgcGF0aDogJ2hvbWUnLCBjb21wb25lbnQ6IEhvbWVDb21wb25lbnQgfSxcclxuICB7IHBhdGg6ICdoaXN0b3J5JywgY29tcG9uZW50OiBIaXN0b3J5Q29tcG9uZW50IH0sXHJcbiAgeyBwYXRoOiAnc2V0dGluZ3MnLCBjb21wb25lbnQ6IFNldHRpbmdzQ29tcG9uZW50IH0sXHJcbiAgeyBwYXRoOiAndXBkYXRlJywgY29tcG9uZW50OiBVcGRhdGVDb21wb25lbnQgfSxcclxuICB7IHBhdGg6ICdjb25uZWN0JywgY29tcG9uZW50OiBDb25uZWN0Q29tcG9uZW50IH0sXHJcbiAgeyBwYXRoOiAnbG9naW5yb3V0ZScsIGNvbXBvbmVudDogTG9naW5yb3V0ZUNvbXBvbmVudCB9LFxyXG4gIHsgcGF0aDogJ3BheW1lbnRzJywgY29tcG9uZW50OiBQYXltZW50c0NvbXBvbmVudCB9LFxyXG4gIHsgcGF0aDogJ3NlYXJjaCcsIGNvbXBvbmVudDogU2VhcmNoQ29tcG9uZW50IH0sXHJcbiAgeyBwYXRoOiAnbmF2aWdhdGlvbicsIGNvbXBvbmVudDogTmF2aWdhdGlvbkNvbXBvbmVudCB9LFxyXG4gIHsgcGF0aDogJ3BheW1lbnRpbmZvJywgY29tcG9uZW50OiBQYXltZW50SW5mb0NvbXBvbmVudCB9LFxyXG4gIHsgcGF0aDogJ3dlbGNvbWUnLCBjb21wb25lbnQ6IFdlbGNvbWVDb21wb25lbnQgfSxcclxuICB7IHBhdGg6ICdwb3N0aW5nLWluZm8nLCBjb21wb25lbnQ6IFBvc3RpbmdJbmZvQ29tcG9uZW50IH0sXHJcbiAgeyBwYXRoOiAnc2V0dGluZ3Nmb3JtJywgY29tcG9uZW50OiBTZXR0aW5nc2Zvcm1Db21wb25lbnQgfSxcclxuICB7IHBhdGg6ICdjaGF0JywgY29tcG9uZW50OiBDaGF0Q29tcG9uZW50IH0sXHJcbiAgeyBwYXRoOiAnY2hhdC1saXN0JywgY29tcG9uZW50OiBDaGF0TGlzdENvbXBvbmVudCB9LFxyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzKV0sXHJcbiAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcFJvdXRpbmdNb2R1bGUgeyB9XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCI8IS0tIGh0dHBzOi8vZG9jcy5uYXRpdmVzY3JpcHQub3JnL2FuZ3VsYXIvY29yZS1jb25jZXB0cy9hbmd1bGFyLW5hdmlnYXRpb24uaHRtbCNwYWdlLXJvdXRlci1vdXRsZXQgLS0+XFxyXFxuXFxyXFxuPFBhZ2U+XFxyXFxuXFx0ICAgIDxwYWdlLXJvdXRlci1vdXRsZXQ+PC9wYWdlLXJvdXRlci1vdXRsZXQ+XFxyXFxuPC9QYWdlPlwiIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1yb290JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vYXBwLmNvbXBvbmVudC5odG1sJyxcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgeyB9XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGUnO1xyXG5cclxuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gJy4vYXBwLXJvdXRpbmcubW9kdWxlLnRucyc7XHJcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gJy4vYXBwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEF1dG9HZW5lcmF0ZWRDb21wb25lbnQgfSBmcm9tICcuL2F1dG8tZ2VuZXJhdGVkL2F1dG8tZ2VuZXJhdGVkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBheW1lbnRzQ29tcG9uZW50IH0gZnJvbSAnLi9wYXltZW50cy9wYXltZW50cy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQYXltZW50TWV0aG9kQ29tcG9uZW50IH0gZnJvbSAnLi9wYXltZW50LW1ldGhvZC9wYXltZW50LW1ldGhvZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb25uZWN0Q29tcG9uZW50IH0gZnJvbSAnLi9jb25uZWN0L2Nvbm5lY3QuY29tcG9uZW50JztcclxuaW1wb3J0IHsgSGlzdG9yeUNvbXBvbmVudCB9IGZyb20gJy4vaGlzdG9yeS9oaXN0b3J5LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tICcuL2hvbWUvaG9tZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBMb2dpbkNvbXBvbmVudCB9IGZyb20gJy4vbG9naW4vbG9naW4uY29tcG9uZW50JztcclxuaW1wb3J0IHsgTG9naW5yb3V0ZUNvbXBvbmVudCB9IGZyb20gJy4vbG9naW5yb3V0ZS9sb2dpbnJvdXRlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE5hdmlnYXRpb25Db21wb25lbnQgfSBmcm9tICcuL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQb3N0aW5nQ29tcG9uZW50IH0gZnJvbSAnLi9wb3N0aW5nL3Bvc3RpbmcuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU2V0dGluZ3NDb21wb25lbnQgfSBmcm9tICcuL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFVwZGF0ZUNvbXBvbmVudCB9IGZyb20gJy4vdXBkYXRlL3VwZGF0ZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEaWFsb2dDb21wb25lbnQgfSBmcm9tICcuL2RpYWxvZy9kaWFsb2cuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU2VhcmNoQ29tcG9uZW50IH0gZnJvbSAnLi9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudCc7XHJcblxyXG5pbXBvcnQgeyBMb2dpbkRpcmVjdGl2ZSB9IGZyb20gJy4vbG9naW4uZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgSG9tZURpcmVjdGl2ZSB9IGZyb20gJy4vaG9tZS5kaXJlY3RpdmUnO1xyXG5cclxuaW1wb3J0IHsgUG9zdGluZ1NlcnZpY2UgfSBmcm9tICcuL3Bvc3Rpbmcuc2VydmljZSc7XHJcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSAnLi91c2VyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBUcmFuc2ZlclNlcnZpY2UgfSBmcm9tICcuL2RhdGF0cmFuc2Zlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRHluYW1pY0FkZFNlcnZpY2UgfSBmcm9tICcuL2R5bmFtaWMtYWRkLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQYXltZW50U2VydmljZSB9IGZyb20gJy4vcGF5bWVudC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUGxhY2VzQXV0b2NvbXBsZXRlU2VydmljZSB9IGZyb20gJy4vcGxhY2VzLWF1dG9jb21wbGV0ZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgR29vZ2xlTWFwc1NlcnZpY2UgfSBmcm9tICcuL2dvb2dsZS1tYXBzLnNlcnZpY2UnO1xyXG5cclxuaW1wb3J0IHsgTW9kYWxEaWFsb2dTZXJ2aWNlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL21vZGFsLWRpYWxvZ1wiO1xyXG5cclxuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSwgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7TWF0SW5wdXRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcclxuaW1wb3J0IHsgQWdtQ29yZU1vZHVsZSB9IGZyb20gJ0BhZ20vY29yZSc7XHJcbmltcG9ydCB7IE5neFBheVBhbE1vZHVsZSB9IGZyb20gJ25neC1wYXlwYWwnO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSURhdGFGb3JtTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1kYXRhZm9ybS9hbmd1bGFyXCI7XHJcbmltcG9ydCB7IE5neEJyYWludHJlZU1vZHVsZSB9IGZyb20gJ25neC1icmFpbnRyZWUnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBNYXNrZWRUZXh0RmllbGRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LW1hc2tlZC10ZXh0LWZpZWxkL2FuZ3VsYXJcIjtcclxuXHJcbi8vIFVuY29tbWVudCBhbmQgYWRkIHRvIE5nTW9kdWxlIGltcG9ydHMgaWYgeW91IG5lZWQgdG8gdXNlIHR3by13YXkgYmluZGluZ1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zJztcclxuXHJcbi8vIFVuY29tbWVudCBhbmQgYWRkIHRvIE5nTW9kdWxlIGltcG9ydHMgIGlmIHlvdSBuZWVkIHRvIHVzZSB0aGUgSFRUUCB3cmFwcGVyXHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9odHRwLWNsaWVudCc7XHJcbmltcG9ydCB7IEZsb2F0QnRuQ29tcG9uZW50IH0gZnJvbSAnLi9mbG9hdC1idG4vZmxvYXQtYnRuLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEFkZE1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi9hZGQtbW9kYWwvYWRkLW1vZGFsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IExvY2F0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9sb2NhdGlvbi9sb2NhdGlvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBZGRQYXltZW50Q29tcG9uZW50IH0gZnJvbSAnLi9hZGQtcGF5bWVudC9hZGQtcGF5bWVudC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBZGRDYXJkUGF5bWVudENvbXBvbmVudCB9IGZyb20gJy4vYWRkLWNhcmQtcGF5bWVudC9hZGQtY2FyZC1wYXltZW50LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBheW1lbnRJbmZvQ29tcG9uZW50IH0gZnJvbSAnLi9wYXltZW50LWluZm8vcGF5bWVudC1pbmZvLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvbmZpcm1hdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vY29uZmlybWF0aW9uL2NvbmZpcm1hdGlvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNZXNzYWdlTW9kYWxDb21wb25lbnQgfSBmcm9tICcuL21lc3NhZ2UtbW9kYWwvbWVzc2FnZS1tb2RhbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBXZWxjb21lQ29tcG9uZW50IH0gZnJvbSAnLi93ZWxjb21lL3dlbGNvbWUuY29tcG9uZW50JztcclxuaW1wb3J0ICogYXMgYXBwbGljYXRpb24gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvbic7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZhY2Vib29rTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1mYWNlYm9vay9hbmd1bGFyXCI7XHJcbmltcG9ydCAqIGFzIG5zRmFjZWJvb2sgZnJvbSAnbmF0aXZlc2NyaXB0LWZhY2Vib29rJztcclxuaW1wb3J0IHsgRGF0ZVBpcGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBQb3N0aW5nSW5mb0NvbXBvbmVudCB9IGZyb20gJy4vcG9zdGluZy1pbmZvL3Bvc3RpbmctaW5mby5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBpc0lPUyB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm0nO1xyXG5kZWNsYXJlIHZhciBHTVNTZXJ2aWNlczogYW55O1xyXG5pbXBvcnQgeyBTZXR0aW5nc2Zvcm1Db21wb25lbnQgfSBmcm9tICcuL3NldHRpbmdzZm9ybS9zZXR0aW5nc2Zvcm0uY29tcG9uZW50JztcclxuaW1wb3J0IHsgUmVhdXRoQ29tcG9uZW50IH0gZnJvbSAnLi9yZWF1dGgvcmVhdXRoLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENoYXRDb21wb25lbnQgfSBmcm9tICcuL2NoYXQvY2hhdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2hhdExpc3RDb21wb25lbnQgfSBmcm9tICcuL2NoYXQtbGlzdC9jaGF0LWxpc3QuY29tcG9uZW50JztcclxuXHJcblxyXG4vLyByZXF1aXJlKCduYXRpdmVzY3JpcHQtbm9kZWlmeScpXHJcbi8vIGltcG9ydCB7IEFtcGxpZnlBbmd1bGFyTW9kdWxlLCBBbXBsaWZ5U2VydmljZSB9IGZyb20gJ2F3cy1hbXBsaWZ5LWFuZ3VsYXInO1xyXG5cclxuLy8gaW1wb3J0IHsgQW5ndWxhckZpcmVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9maXJlJztcclxuLy8gaW1wb3J0IHsgQW5ndWxhckZpcmVzdG9yZU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2ZpcmUvZmlyZXN0b3JlJztcclxuLy8gaW1wb3J0IHsgQW5ndWxhckZpcmVTdG9yYWdlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZmlyZS9zdG9yYWdlJztcclxuLy8gaW1wb3J0IHsgQW5ndWxhckZpcmVBdXRoTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZmlyZS9hdXRoJztcclxuLy8gaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tICcuLi9lbnZpcm9ubWVudHMvZW52aXJvbm1lbnQnO1xyXG5pZiAoaXNJT1MpIHsgXHJcbiAgR01TU2VydmljZXMucHJvdmlkZUFQSUtleShcIkFJemFTeUFJVHhTMWptZjhQTXRhelJndVdjQWZXUXhXMWtQT29ZZ1wiKTtcclxufVxyXG5cclxuYXBwbGljYXRpb24ub24oYXBwbGljYXRpb24ubGF1bmNoRXZlbnQsIGZ1bmN0aW9uIChhcmdzKSB7XHJcbiAgICBuc0ZhY2Vib29rLmluaXQoXCIyMjcyMTI5NjQ5Njc3NzQ3XCIpO1xyXG59KTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBBcHBDb21wb25lbnQsXHJcbiAgICBMb2dpbkRpcmVjdGl2ZSxcclxuICAgIExvZ2luQ29tcG9uZW50LFxyXG4gICAgSG9tZUNvbXBvbmVudCxcclxuICAgIEhvbWVEaXJlY3RpdmUsXHJcbiAgICBIaXN0b3J5Q29tcG9uZW50LFxyXG4gICAgU2V0dGluZ3NDb21wb25lbnQsXHJcbiAgICBQb3N0aW5nQ29tcG9uZW50LFxyXG4gICAgVXBkYXRlQ29tcG9uZW50LFxyXG4gICAgQ29ubmVjdENvbXBvbmVudCxcclxuICAgIExvZ2lucm91dGVDb21wb25lbnQsXHJcbiAgICBEaWFsb2dDb21wb25lbnQsXHJcbiAgICBOYXZpZ2F0aW9uQ29tcG9uZW50LFxyXG4gICAgQXV0b0dlbmVyYXRlZENvbXBvbmVudCxcclxuICAgIFBheW1lbnRzQ29tcG9uZW50LFxyXG4gICAgUGF5bWVudE1ldGhvZENvbXBvbmVudCxcclxuICAgIFNlYXJjaENvbXBvbmVudCxcclxuICAgIEZsb2F0QnRuQ29tcG9uZW50LFxyXG4gICAgQWRkTW9kYWxDb21wb25lbnQsXHJcbiAgICBMb2NhdGlvbkNvbXBvbmVudCxcclxuICAgIEFkZFBheW1lbnRDb21wb25lbnQsXHJcbiAgICBBZGRDYXJkUGF5bWVudENvbXBvbmVudCxcclxuICAgIFBheW1lbnRJbmZvQ29tcG9uZW50LFxyXG4gICAgQ29uZmlybWF0aW9uQ29tcG9uZW50LFxyXG4gICAgTWVzc2FnZU1vZGFsQ29tcG9uZW50LFxyXG4gICAgV2VsY29tZUNvbXBvbmVudCxcclxuICAgIFBvc3RpbmdJbmZvQ29tcG9uZW50LFxyXG4gICAgU2V0dGluZ3Nmb3JtQ29tcG9uZW50LFxyXG4gICAgUmVhdXRoQ29tcG9uZW50LFxyXG4gICAgQ2hhdENvbXBvbmVudCxcclxuICAgIENoYXRMaXN0Q29tcG9uZW50LFxyXG4gIF0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxyXG4gICAgQXBwUm91dGluZ01vZHVsZSxcclxuICAgIE5hdGl2ZVNjcmlwdEh0dHBDbGllbnRNb2R1bGUsXHJcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxyXG4gICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXHJcbiAgICBNYXRJbnB1dE1vZHVsZSxcclxuICAgIEFnbUNvcmVNb2R1bGUuZm9yUm9vdCh7XHJcbiAgICAgIGFwaUtleTogJ0FJemFTeUFJVHhTMWptZjhQTXRhelJndVdjQWZXUXhXMWtQT29ZZydcclxuICAgIH0pLFxyXG4gICAgTmd4UGF5UGFsTW9kdWxlLFxyXG4gICAgTmF0aXZlU2NyaXB0VUlEYXRhRm9ybU1vZHVsZSxcclxuICAgIC8vIE5neEJyYWludHJlZU1vZHVsZSxcclxuICAgIEh0dHBDbGllbnRNb2R1bGUsXHJcbiAgICBOYXRpdmVTY3JpcHRGYWNlYm9va01vZHVsZSxcclxuICAgIE1hc2tlZFRleHRGaWVsZE1vZHVsZVxyXG4gICAgLy8gQW5ndWxhckZpcmVNb2R1bGUuaW5pdGlhbGl6ZUFwcChlbnZpcm9ubWVudC5maXJlYmFzZSksXHJcbiAgICAvLyBBbmd1bGFyRmlyZXN0b3JlTW9kdWxlLCAvLyBpbXBvcnRzIGZpcmViYXNlL2ZpcmVzdG9yZSwgb25seSBuZWVkZWQgZm9yIGRhdGFiYXNlIGZlYXR1cmVzXHJcbiAgICAvLyBBbmd1bGFyRmlyZUF1dGhNb2R1bGUsIC8vIGltcG9ydHMgZmlyZWJhc2UvYXV0aCwgb25seSBuZWVkZWQgZm9yIGF1dGggZmVhdHVyZXMsXHJcbiAgICAvLyBBbmd1bGFyRmlyZVN0b3JhZ2VNb2R1bGUgLy8gaW1wb3J0cyBmaXJlYmFzZS9zdG9yYWdlIG9ubHkgbmVlZGVkIGZvciBzdG9yYWdlIGZlYXR1cmVzXHJcbiAgXSxcclxuICBwcm92aWRlcnM6IFtQb3N0aW5nU2VydmljZSwgVHJhbnNmZXJTZXJ2aWNlLCBEeW5hbWljQWRkU2VydmljZSwgVXNlclNlcnZpY2UsIFBheW1lbnRTZXJ2aWNlLCBNb2RhbERpYWxvZ1NlcnZpY2UsIFBsYWNlc0F1dG9jb21wbGV0ZVNlcnZpY2UsIFxyXG4gIERhdGVQaXBlLCBHb29nbGVNYXBzU2VydmljZV0sXHJcbiAgYm9vdHN0cmFwOiBbQXBwQ29tcG9uZW50XSxcclxuICBlbnRyeUNvbXBvbmVudHM6IFtQb3N0aW5nQ29tcG9uZW50LCBQYXltZW50TWV0aG9kQ29tcG9uZW50LCBBZGRNb2RhbENvbXBvbmVudCwgTG9jYXRpb25Db21wb25lbnQsIEFkZFBheW1lbnRDb21wb25lbnQsIEFkZENhcmRQYXltZW50Q29tcG9uZW50LCBcclxuICBQYXltZW50SW5mb0NvbXBvbmVudCwgQ29uZmlybWF0aW9uQ29tcG9uZW50LCBTZXR0aW5nc2Zvcm1Db21wb25lbnQsIFJlYXV0aENvbXBvbmVudF0sXHJcbiAgc2NoZW1hczogW05PX0VSUk9SU19TQ0hFTUFdXHJcbn0pXHJcbi8qXHJcblBhc3MgeW91ciBhcHBsaWNhdGlvbiBtb2R1bGUgdG8gdGhlIGJvb3RzdHJhcE1vZHVsZSBmdW5jdGlvbiBsb2NhdGVkIGluIG1haW4udHMgdG8gc3RhcnQgeW91ciBhcHBcclxuKi9cclxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi8qIEFkZCBtb2JpbGUgc3R5bGVzIGZvciB0aGUgY29tcG9uZW50IGhlcmUuICAqL1xcclxcblwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxCdXR0b24gdGV4dD1cXFwiYXV0by1nZW5lcmF0ZWQgd29ya3MhXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIj48L0J1dHRvbj5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1hdXRvLWdlbmVyYXRlZCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2F1dG8tZ2VuZXJhdGVkLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9hdXRvLWdlbmVyYXRlZC5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEF1dG9HZW5lcmF0ZWRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCIvKiBBZGQgbW9iaWxlIHN0eWxlcyBmb3IgdGhlIGNvbXBvbmVudCBoZXJlLiAgKi9cXG5MYWJlbCB7XFxuXFx0dGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXFxuLm5hbWUtbGFiZWwge1xcblxcdG1hcmdpbi10b3A6IDE2O1xcblxcdG1hcmdpbi1sZWZ0OiAxODtcXG5cXHRjb2xvcjogYmxhY2s7XFxuXFx0Zm9udC13ZWlnaHQ6IDcwMDtcXG5cXHRmb250LXNpemU6IDE3O1xcbn1cXG5cXG4uaW5mby1sYWJlbCB7XFxuXFx0bWFyZ2luLXRvcDogNDtcXG5cXHRtYXJnaW4tbGVmdDogMTg7XFxuXFx0bWFyZ2luLWJvdHRvbTogMTY7XFxuXFx0Y29sb3I6ICM2OTY5Njk7XFxufVxcblxcbi5wcm9maWxlLXBpY3R1cmUge1xcblxcdGhlaWdodDogNjA7XFxuXFx0d2lkdGg6IDYwO1xcblxcdGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuXFx0dmVydGljYWwtYWxpZ246IGNlbnRlcjtcXG5cXHRtYXJnaW4tbGVmdDogMTY7XFxuXFx0bWFyZ2luLXRvcDogMTQ7XFxuXFx0bWFyZ2luLWJvdHRvbTogMTQ7XFxufVxcblxcbi5tZXNzYWdlIHtcXG5cXHRib3JkZXItYm90dG9tLXdpZHRoOiAxO1xcblxcdGJvcmRlci1jb2xvcjogI2YxZjFmMTtcXG5cXHRtYXJnaW4tdG9wOiA1MDtcXG5cXHRtYXJnaW4tYm90dG9tOiA1MDtcXG59XFxuXFxuLnJlZnJlc2gge1xcblxcdGNvbG9yOiAjYWMwMGU2O1xcbn1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8UGFnZS5hY3Rpb25CYXI+XFxyXFxuICAgIDxBY3Rpb25CYXIgdGl0bGU9XFxcIk1lc3NhZ2VzXFxcIj5cXHJcXG4gICAgXFx0PE5hdmlnYXRpb25CdXR0b24gdGV4dD1cXFwiR28gQmFja1xcXCIgYW5kcm9pZC5zeXN0ZW1JY29uPVxcXCJpY19tZW51X2JhY2tcXFwiICh0YXApPVxcXCJvbk5hdkJ0blRhcCgpXFxcIj48L05hdmlnYXRpb25CdXR0b24+XFxyXFxuICAgIDwvQWN0aW9uQmFyPlxcclxcbjwvUGFnZS5hY3Rpb25CYXI+XFxyXFxuXFxyXFxuPFB1bGxUb1JlZnJlc2ggKHJlZnJlc2gpPVxcXCJyZWZyZXNoTGlzdCgkZXZlbnQpXFxcIiBjbGFzcz1cXFwicmVmcmVzaFxcXCI+XFxyXFxuXFx0PExpc3RWaWV3IFtpdGVtc109XFxcIm1lc3NhZ2VzXFxcIiAoaXRlbVRhcCk9XFxcIm9uSXRlbVRhcCgkZXZlbnQpXFxcIiAjbGlzdFZpZXcgaWQ9XFxcImxpc3RWaWV3XFxcIj5cXHJcXG5cXHQgICAgPG5nLXRlbXBsYXRlIGxldC1pdGVtPVxcXCJpdGVtXFxcIiBsZXQtaT1cXFwiaW5kZXhcXFwiIGxldC1vZGQ9XFxcIm9kZFxcXCIgbGV0LWV2ZW49XFxcImV2ZW5cXFwiPlxcclxcblxcdCAgICAgICAgPFN0YWNrTGF5b3V0IFtjbGFzcy5vZGRdPVxcXCJvZGRcXFwiIFtjbGFzcy5ldmVuXT1cXFwiZXZlblxcXCIgY2xhc3M9XFxcIm1lc3NhZ2VcXFwiIG9yaWVudGF0aW9uPVxcXCJob3Jpem9udGFsXFxcIj5cXHJcXG5cXHQgICAgICAgIFxcdCAgXFx0PEltYWdlIFtzcmNdPVxcXCJpdGVtLnBmcFNvdXJjZVxcXCIgY2xhc3M9XFxcInByb2ZpbGUtcGljdHVyZVxcXCIgc3RyZXRjaD1cXFwiYXNwZWN0Rml0XFxcIj48L0ltYWdlPlxcclxcblxcdCAgICAgICAgXFx0ICBcXHQ8U3RhY2tMYXlvdXQ+XFxyXFxuXFx0XFx0ICAgICAgICAgICAgICBcXHQ8TGFiZWwgdGV4dFdyYXA9XFxcInRydWVcXFwiIGlkPVxcXCJwb3N0LW5hbWVcXFwiIGNsYXNzPVxcXCJuYW1lLWxhYmVsXFxcIiBbdGV4dF09XFxcIml0ZW0uZGlzcGxheU5hbWVcXFwiPjwvTGFiZWw+XFxyXFxuXFx0XFx0ICAgICAgICAgICAgICBcXHQ8TGFiZWwgdGV4dFdyYXA9XFxcInRydWVcXFwiIGlkPVxcXCJwb3N0LWluZm9cXFwiIGNsYXNzPVxcXCJpbmZvLWxhYmVsXFxcIiBbdGV4dF09XFxcIml0ZW0ubWVzc2FnZVxcXCI+PC9MYWJlbD5cXHJcXG5cXHRcXHQgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcclxcblxcdCAgICAgICAgPC9TdGFja0xheW91dD5cXHJcXG5cXHQgICAgPC9uZy10ZW1wbGF0ZT5cXHJcXG5cXHQ8L0xpc3RWaWV3PlxcclxcbjwvUHVsbFRvUmVmcmVzaD5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVHJhbnNmZXJTZXJ2aWNlIH0gZnJvbSAnLi4vZGF0YXRyYW5zZmVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgKiBhcyBmaXJlYmFzZSBmcm9tICduYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlJztcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IExvZ2luY2hlY2tTZXJ2aWNlIH0gZnJvbSAnLi4vbG9naW5jaGVjay5zZXJ2aWNlLnRucyc7XHJcbmltcG9ydCB7IENoYXRNZXNzYWdlIH0gZnJvbSAnLi4vbW9kZWxzL2NoYXQtbWVzc2FnZS5tb2RlbCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGVBcnJheSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlLWFycmF5JztcclxuaW1wb3J0IHsgTGlzdFZpZXcgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2xpc3Qtdmlldyc7XHJcblxyXG5jbGFzcyBNZXNzYWdlSXRlbSB7XHJcblx0Y29uc3RydWN0b3IocHVibGljIGNoYXRNZXNzYWdlOiBDaGF0TWVzc2FnZSwgcHVibGljIGxhc3RDaGF0OiBzdHJpbmcsIHB1YmxpYyBjaGF0SWQ6IHN0cmluZywgcHVibGljIHBmcFNvdXJjZTogc3RyaW5nLCBcclxuICAgIHB1YmxpYyBkaXNwbGF5TmFtZTogc3RyaW5nLCBwdWJsaWMgbWVzc2FnZTogc3RyaW5nKSB7fVxyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1jaGF0LWxpc3QnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jaGF0LWxpc3QuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2NoYXQtbGlzdC5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIENoYXRMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0cmFuc2ZlclNlcnZpY2U6IFRyYW5zZmVyU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMsIHByaXZhdGUgbG9naW5jaGVja1NlcnZpY2U6IExvZ2luY2hlY2tTZXJ2aWNlLFxyXG4gIFx0cHJpdmF0ZSB2Y1JlZjogVmlld0NvbnRhaW5lclJlZikgeyB9XHJcblxyXG4gIG1lc3NhZ2VzID0gbmV3IE9ic2VydmFibGVBcnJheTxNZXNzYWdlSXRlbT4oKTtcclxuICByZWZyZXNoTWVzc2FnZXMgPSBuZXcgT2JzZXJ2YWJsZUFycmF5PE1lc3NhZ2VJdGVtPigpO1xyXG4gIHVzZXJJZDogc3RyaW5nO1xyXG4gIGNoYXRJZHM6IFtzdHJpbmddO1xyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICBcdHRoaXMudXNlcklkID0gdGhpcy5sb2dpbmNoZWNrU2VydmljZS5nZXRVc2VyKCk7XHJcbiAgICB0aGlzLmxvYWRNZXNzYWdlcygpO1xyXG4gIH1cclxuXHJcbiAgbG9hZE1lc3NhZ2VzKGFyZ3M9bnVsbCkge1xyXG4gIFx0ZmlyZWJhc2UuZmlyZXN0b3JlLmNvbGxlY3Rpb24oJ3VzZXJzJykuZG9jKHRoaXMudXNlcklkKS5nZXQoKS50aGVuKChkb2MpID0+IHtcclxuICBcdFx0dGhpcy5jaGF0SWRzID0gZG9jLmRhdGEoKS5jaGF0cztcclxuICAgIH0pLnRoZW4oYXN5bmMgKHJlcykgPT4ge1xyXG4gICAgICBmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5jaGF0SWRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgY2hhdFByb21pc2UgPSBhd2FpdCBmaXJlYmFzZS5maXJlc3RvcmUuY29sbGVjdGlvbignY2hhdHMnKS5kb2ModGhpcy5jaGF0SWRzW2ldKS5nZXQoKS50aGVuKGFzeW5jIChkb2MpID0+IHtcclxuICAgICAgICAgIGxldCBkYXRhID0gZG9jLmRhdGEoKTtcclxuICAgICAgICAgIGxldCBkb2NJZCA9IGRvYy5pZDtcclxuICAgICAgICAgIHZhciBjaGF0TmFtZSA9ICdZb3UsICc7XHJcbiAgICAgICAgICB2YXIgbm9uVXNlckluZGV4ID0gMDtcclxuICAgICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBkYXRhLnVzZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmKGRhdGEudXNlcnNbaV0udWlkICE9PXRoaXMudXNlcklkKSB7XHJcbiAgICAgICAgICAgICAgbm9uVXNlckluZGV4ID0gaTtcclxuICAgICAgICAgICAgICBpZihpID09PSBkYXRhLnVzZXJzLmxlbmd0aCAtIDEpXHJcbiAgICAgICAgICAgICAgICBjaGF0TmFtZSArPSAnYW5kICcgKyBkYXRhLnVzZXJzW2ldLmRpc3BsYXlOYW1lO1xyXG4gICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIGNoYXROYW1lICs9IGRhdGEudXNlcnNbaV0uZGlzcGxheU5hbWUgKyAnLCAnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZihkYXRhLmNoYXRzWzBdKSB7XHJcbiAgICAgICAgICAgIGxldCBsYXN0TXNnID0gZGF0YS5jaGF0c1tkYXRhLmNoYXRzLmxlbmd0aCAtIDFdO1xyXG4gICAgICAgICAgICBjb25zdCBhZGRQcm9taXNlID0gYXdhaXQgdGhpcy5hZGRNZXNzYWdlKGxhc3RNc2csIGRhdGEsIGRvY0lkLCBjaGF0TmFtZSwgbm9uVXNlckluZGV4KTsgXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAvLyBjb25zdCB1bnN1YnNjcmliZSA9IGZpcmViYXNlLmZpcmVzdG9yZS5jb2xsZWN0aW9uKCdjaGF0cycpLmRvYyh0aGlzLmNoYXRJZHNbaV0pLm9uU25hcHNob3Qoe2luY2x1ZGVNZXRhZGF0YUNoYW5nZXM6IHRydWV9LCBkb2MgPT4ge1xyXG4gICAgICAgIC8vICAgdGhpcy5yZWZyZXNoTGlzdChudWxsKTtcclxuICAgICAgICAvLyB9KVxyXG4gICAgICB9XHJcbiAgICAgIGlmKGFyZ3MgIT0gbnVsbClcclxuICAgICAge1xyXG4gICAgICAgIHZhciBwdWxsUmVmcmVzaCA9IGFyZ3Mub2JqZWN0O1xyXG4gICAgICAgIHB1bGxSZWZyZXNoLnJlZnJlc2hpbmcgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnJlZnJlc2hNZXNzYWdlcy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgICAgICAgaWYoYS5sYXN0Q2hhdCA+IGIubGFzdENoYXQpXHJcbiAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgZWxzZSBpZihiLmxhc3RDaGF0IDwgYS5sYXN0Q2hhdClcclxuICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgICB9KVxyXG4gICAgICB0aGlzLm1lc3NhZ2VzLnNwbGljZSgwKTtcclxuICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHRoaXMucmVmcmVzaE1lc3NhZ2VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlcy5wdXNoKHRoaXMucmVmcmVzaE1lc3NhZ2VzLmdldEl0ZW0oaSkpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMucmVmcmVzaE1lc3NhZ2VzLnNwbGljZSgwKTtcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBhc3luYyBhZGRNZXNzYWdlKGxhc3RNc2csIGRhdGEsIGRvY0lkLCBjaGF0TmFtZSwgbm9uVXNlckluZGV4KSB7XHJcbiAgICBpZihsYXN0TXNnLnVzZXJJZCAhPT0gdGhpcy51c2VySWQpIHtcclxuICAgICAgY29uc3QgdXNlclByb21pc2UgPSBhd2FpdCBmaXJlYmFzZS5maXJlc3RvcmUuY29sbGVjdGlvbigndXNlcnMnKS5kb2MobGFzdE1zZy51c2VySWQpLmdldCgpLnRoZW4oKGRvYykgPT4ge1xyXG4gICAgICAgIGxldCBwcm9maWxlU291cmNlID0gbGFzdE1zZy5wZnBTb3VyY2U7XHJcbiAgICAgICAgaWYocHJvZmlsZVNvdXJjZS5zdWJzdHJpbmcoMCwgMjcpID09ICdodHRwczovL2dyYXBoLmZhY2Vib29rLmNvbS8nKVxyXG4gICAgICAgICAgcHJvZmlsZVNvdXJjZSArPSAnP2hlaWdodD0zMDAnO1xyXG4gICAgICAgIGlmKGRhdGEudXNlcnMubGVuZ3RoID09PSAyKVxyXG4gICAgICAgICAgdGhpcy5yZWZyZXNoTWVzc2FnZXMucHVzaChuZXcgTWVzc2FnZUl0ZW0obGFzdE1zZywgZGF0YS5sYXN0Q2hhdCwgZG9jSWQsIHByb2ZpbGVTb3VyY2UsIGxhc3RNc2cuZGlzcGxheU5hbWUsIGRvYy5kYXRhKCkuZmlyc3RfbmFtZSArICc6ICcgKyBsYXN0TXNnLm1lc3NhZ2UpKTtcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIHRoaXMucmVmcmVzaE1lc3NhZ2VzLnB1c2gobmV3IE1lc3NhZ2VJdGVtKGxhc3RNc2csIGRhdGEubGFzdENoYXQsIGRvY0lkLCBwcm9maWxlU291cmNlLCBjaGF0TmFtZSwgZG9jLmRhdGEoKS5maXJzdF9uYW1lICsgJzogJyArIGxhc3RNc2cubWVzc2FnZSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfSlcclxuICAgICAgcmV0dXJuIHRoaXMucmVmcmVzaE1lc3NhZ2VzO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIGNvbnN0IHVzZXJQcm9taXNlID0gYXdhaXQgZmlyZWJhc2UuZmlyZXN0b3JlLmNvbGxlY3Rpb24oJ3VzZXJzJykuZG9jKGRhdGEudXNlcnNbbm9uVXNlckluZGV4XS51aWQpLmdldCgpLnRoZW4oKGRvYykgPT4ge1xyXG4gICAgICAgIGxldCBwcm9maWxlU291cmNlID0gZG9jLmRhdGEoKS5wcm9maWxlX3NvdXJjZTtcclxuICAgICAgICBpZihwcm9maWxlU291cmNlLnN1YnN0cmluZygwLCAyNykgPT0gJ2h0dHBzOi8vZ3JhcGguZmFjZWJvb2suY29tLycpXHJcbiAgICAgICAgICBwcm9maWxlU291cmNlICs9ICc/aGVpZ2h0PTMwMCc7XHJcbiAgICAgICAgaWYoZGF0YS51c2Vycy5sZW5ndGggPT09IDIpXHJcbiAgICAgICAgICB0aGlzLnJlZnJlc2hNZXNzYWdlcy5wdXNoKG5ldyBNZXNzYWdlSXRlbShsYXN0TXNnLCBkYXRhLmxhc3RDaGF0LCBkb2NJZCwgcHJvZmlsZVNvdXJjZSwgXHJcbiAgICAgICAgICAgIGRvYy5kYXRhKCkuZmlyc3RfbmFtZSArICcgJyArIGRvYy5kYXRhKCkubGFzdF9uYW1lLCAnWW91OiAnICsgbGFzdE1zZy5tZXNzYWdlKSk7XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnJlZnJlc2hNZXNzYWdlcy5wdXNoKG5ldyBNZXNzYWdlSXRlbShsYXN0TXNnLCBkYXRhLmxhc3RDaGF0LCBkb2NJZCwgcHJvZmlsZVNvdXJjZSwgXHJcbiAgICAgICAgICAgIGNoYXROYW1lLCAnWW91OiAnICsgbGFzdE1zZy5tZXNzYWdlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9KVxyXG4gICAgICByZXR1cm4gdGhpcy5yZWZyZXNoTWVzc2FnZXM7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZWZyZXNoTGlzdChhcmdzKSB7XHJcbiAgICB0aGlzLmxvYWRNZXNzYWdlcyhhcmdzKTtcclxuICB9XHJcblxyXG4gIG9uSXRlbVRhcChhcmdzKSB7XHJcbiAgXHRsZXQgY2hhdElkID0gdGhpcy5tZXNzYWdlcy5nZXRJdGVtKGFyZ3MuaW5kZXgpLmNoYXRJZDtcclxuICBcdHRoaXMudHJhbnNmZXJTZXJ2aWNlLnNldERhdGEoY2hhdElkKTtcclxuICBcdHRoaXMucm91dGVyLm5hdmlnYXRlKFsnY2hhdCddKVxyXG4gIH1cclxuXHJcbiAgb25OYXZCdG5UYXAoKSB7XHJcbiAgICBpZih0aGlzLnJvdXRlci5jYW5Hb0JhY2spXHJcbiAgICAgIHRoaXMucm91dGVyLmJhY2soKTtcclxuICAgIGVsc2VcclxuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWyduYXZpZ2F0aW9uJ10sIHtjbGVhckhpc3Rvcnk6IHRydWV9KVxyXG4gIH1cclxuXHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi8qIEFkZCBtb2JpbGUgc3R5bGVzIGZvciB0aGUgY29tcG9uZW50IGhlcmUuICAqL1xcbkJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IDU7XFxuICAgIG1hcmdpbjogNTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZG9kZ2VyYmx1ZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBoZWlnaHQ6IDQwO1xcbiAgICBib3JkZXItcmFkaXVzOiA1O1xcbn1cXG5cXG4uY2hhdC1idXR0b24ge1xcblxcdHBhZGRpbmctbGVmdDogNTtcXG5cXHRwYWRkaW5nLXJpZ2h0OiA1O1xcblxcdG1hcmdpbjogNTtcXG5cXHRoZWlnaHQ6IDMwO1xcblxcdHdpZHRoOiAzMDtcXG59XFxuXFxuLmNoYXQtdGV4dC1maWVsZCB7XFxuICAgIHBhZGRpbmc6IDU7IFxcbiAgICAvKmJhY2tncm91bmQtY29sb3I6IHdoaXRlOyAqL1xcbiAgICAvKmJvcmRlci1yYWRpdXM6IDQ7Ki9cXG4gICAgLypib3R0b20tYm9yZGVyLWNvbG9yOiAjNjk2OTY5OyovXFxufVxcblxcbi5hdXRob3ItaW1nIHtcXG4gICAgbWFyZ2luOiAwIDUgNSA1O1xcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgICB3aWR0aDogNDA7XFxuICAgIGhlaWdodDogNDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwO1xcbn1cXG5cXG4ubWluZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhYzAwZTY7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogODtcXG4gICAgcGFkZGluZy1sZWZ0OiAxNDtcXG4gICAgcGFkZGluZy1yaWdodDogMTQ7XFxuICAgIG1hcmdpbi1yaWdodDogMTA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1O1xcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNTtcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTU7XFxuICAgIGZvbnQtc2l6ZTogMTY7XFxuICAgIG1heC13aWR0aDogNjAlO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICAvKm1hcmdpbi1ib3R0b206IDEyOyovXFxufVxcblxcbi5taW5lQ29udGludWF0aW9uIHtcXG5cXHRtYXJnaW4tYm90dG9tOiAwO1xcblxcdGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxNTtcXG59XFxuXFxuLm1pbmVDb250aW51YXRpb25HcmlkIHtcXG5cXHRmb250LXNpemU6IDE0O1xcbiAgICBwYWRkaW5nOiA1O1xcblxcdHBhZGRpbmctdG9wOiAwO1xcblxcdHBhZGRpbmctYm90dG9tOiAxO1xcbn1cXG5cXG4ubWluZVRpbWUge1xcblxcdG1hcmdpbi1yaWdodDogMTA7XFxuXFx0bWFyZ2luLWJvdHRvbTogNTtcXG59XFxuXFxuLnRoZWlyc1RpbWUge1xcblxcdG1hcmdpbi1sZWZ0OiA1MjtcXG5cXHRtYXJnaW4tYm90dG9tOiA1O1xcbn1cXG5cXG4udGltZSB7XFxuXFx0dmlzaWJpbGl0eTogY29sbGFwc2U7XFxuXFx0ZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnRoZWlycyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XFxuICAgIGNvbG9yOiAjMzMzO1xcbiAgICBwYWRkaW5nOiA3O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDE0O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTU7XFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDU7XFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxNTtcXG4gICAgbWFyZ2luLXJpZ2h0OiA0MDtcXG4gICAgZm9udC1zaXplOiAxNjtcXG4gICAgbWF4LXdpZHRoOiA2MCU7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIC8qbWFyZ2luLWJvdHRvbTogMTI7Ki9cXG59XFxuXFxuLnRoZWlyc0NvbnRpbnVhdGlvbiB7XFxuXFx0bWFyZ2luLWxlZnQ6IDUyO1xcblxcdG1hcmdpbi1ib3R0b206IDA7XFxuXFx0Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTU7XFxufVxcblxcbi50aGVpcnNDb250aW51YXRpb25HcmlkIHtcXG5cXHRmb250LXNpemU6IDE0O1xcbiAgICBwYWRkaW5nOiA1O1xcblxcdHBhZGRpbmctdG9wOiAwO1xcblxcdHBhZGRpbmctYm90dG9tOiAxO1xcbn1cXG5cXG4uZ3JpZCB7XFxuICAgIGZvbnQtc2l6ZTogMTQ7XFxuICAgIHBhZGRpbmc6IDU7XFxuICAgIHBhZGRpbmctdG9wOiAwO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogODtcXG59XFxuXFxuLmNoYXQtYm94LWxheW91dCB7XFxuXFx0Ym9yZGVyLWNvbG9yOiAjZjFmMWYxO1xcblxcdGJvcmRlci10b3Atd2lkdGg6IDE7XFxufVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxQYWdlLmFjdGlvbkJhcj5cXHJcXG4gICAgPEFjdGlvbkJhciB0aXRsZT1cXFwie3sgY2hhdE5hbWUgfX1cXFwiIGFuZHJvaWQ6aG9yaXpvbnRhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIiBpb3M6aG9yaXpvbnRhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIj5cXHJcXG4gICAgXFx0PE5hdmlnYXRpb25CdXR0b24gdGV4dD1cXFwiR28gQmFja1xcXCIgYW5kcm9pZC5zeXN0ZW1JY29uPVxcXCJpY19tZW51X2JhY2tcXFwiICh0YXApPVxcXCJvbk5hdkJ0blRhcCgpXFxcIj48L05hdmlnYXRpb25CdXR0b24+XFxyXFxuXFx0ICAgIDxBY3Rpb25JdGVtICh0YXApPVxcXCJvbkxlYXZlKClcXFwiXFxyXFxuXFx0ICAgICAgaW9zLnN5c3RlbUljb249XFxcIjlcXFwiIGlvcy5wb3NpdGlvbj1cXFwicmlnaHRcXFwiXFxyXFxuXFx0ICAgICAgdGV4dD1cXFwiTGVhdmUgY2hhdFxcXCIgYW5kcm9pZC5wb3NpdGlvbj1cXFwicG9wdXBcXFwiPjwvQWN0aW9uSXRlbT5cXHJcXG4gICAgPC9BY3Rpb25CYXI+XFxyXFxuPC9QYWdlLmFjdGlvbkJhcj5cXHJcXG5cXHJcXG48R3JpZExheW91dCByb3dzPVxcXCIqLCBhdXRvXFxcIj5cXHJcXG4gICAgPExpc3RWaWV3IG1hcmdpbi1ib3R0b209XFxcIjUwXFxcIiBwYWRkaW5nPVxcXCI1XFxcIiAjbWVzc2FnZUxpc3QgW2l0ZW1zXT1cXFwibWVzc2FnZXNcXFwiIHNlcGFyYXRvckNvbG9yPVxcXCJ0cmFuc3BhcmVudFxcXCIgKHNldHVwSXRlbVZpZXcpPVxcXCJzZXR1cEl0ZW1WaWV3KCRldmVudClcXFwiIHJvdz1cXFwiMFxcXCIgKGxvYWRNb3JlSXRlbXMpPVxcXCJsb2FkTW9yZURhdGEoKVxcXCI+XFxyXFxuICAgICAgICA8bmctdGVtcGxhdGUgbGV0LWl0ZW09XFxcIml0ZW1cXFwiIGxldC1pPVxcXCJpbmRleFxcXCIgbGV0LW1pbmU9XFxcIm1pbmVcXFwiIGxldC10aGVpcnM9XFxcInRoZWlyc1xcXCIgbGV0LW1pbmVDb250aW51YXRpb249XFxcIm1pbmVDb250aW51YXRpb25cXFwiIGxldC10aGVpcnNDb250aW51YXRpb249XFxcInRoZWlyc0NvbnRpbnVhdGlvblxcXCIgbGV0LW1pbmVDb250aW51YXRpb25HcmlkPVxcXCJtaW5lQ29udGludWF0aW9uR3JpZFxcXCIgbGV0LXRoZWlyc0NvbnRpbnVhdGlvbkdyaWQ9XFxcInRoZWlyc0NvbnRpbnVhdGlvbkdyaWRcXFwiIGxldC1ncmlkPVxcXCJncmlkXFxcIiBsZXQtbWluZVRpbWU9XFxcIm1pbmVUaW1lXFxcIiBsZXQtdGhlaXJzVGltZT1cXFwidGhlaXJzVGltZVxcXCIgbGV0LXRpbWU9XFxcInRpbWVcXFwiPlxcclxcbiAgICAgICAgICAgIDxTdGFja0xheW91dCB3aWR0aD1cXFwiODAlXFxcIiBbY2xhc3MubWluZUNvbnRpbnVhdGlvbkdyaWRdPVxcXCJtaW5lQ29udGludWF0aW9uR3JpZFxcXCIgW2NsYXNzLnRoZWlyc0NvbnRpbnVhdGlvbkdyaWRdPVxcXCJ0aGVpcnNDb250aW51YXRpb25HcmlkXFxcIiBbY2xhc3MuZ3JpZF09XFxcImdyaWRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XFxcImhvcml6b250YWxcXFwiIFtob3Jpem9udGFsQWxpZ25tZW50XT1cXFwiYWxpZ24oaXRlbSlcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPEltYWdlIFt2aXNpYmlsaXR5XT1cXFwiaXRlbS52aXNpYmlsaXR5XFxcIiBjbGFzcz1cXFwiYXV0aG9yLWltZ1xcXCIgc3RyZXRjaD1cXFwiYXNwZWN0RmlsbFxcXCIgaGVpZ2h0PVxcXCI0MFxcXCIgd2lkdGg9XFxcIjQwXFxcIiB2ZXJ0aWNhbEFsaWdubWVudD1cXFwiYm90dG9tXFxcIiBbc3JjXT1cXFwiaXRlbS5jaGF0TWVzc2FnZS5wZnBTb3VyY2VcXFwiIGNvbD1cXFwiMVxcXCI+PC9JbWFnZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCBbdGV4dF09J2l0ZW0uY2hhdE1lc3NhZ2UubWVzc2FnZScgW2NsYXNzLm1pbmVdPVxcXCJtaW5lXFxcIiBbY2xhc3MudGhlaXJzXT1cXFwidGhlaXJzXFxcIiBbY2xhc3MubWluZUNvbnRpbnVhdGlvbl09XFxcIm1pbmVDb250aW51YXRpb25cXFwiIFtjbGFzcy50aGVpcnNDb250aW51YXRpb25dPVxcXCJ0aGVpcnNDb250aW51YXRpb25cXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiB2ZXJ0aWNhbEFsaWdubWVudD1cXFwidG9wXFxcIj48L0xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcclxcbiAgICAgICAgICAgICAgICA8TGFiZWwgW3RleHRdPSdpdGVtLmZvcm1hdHRlZFRpbWUnIFtob3Jpem9udGFsQWxpZ25tZW50XT1cXFwiYWxpZ24oaXRlbSlcXFwiIFtjbGFzcy5taW5lVGltZV09XFxcIm1pbmVUaW1lXFxcIiBbY2xhc3MudGhlaXJzVGltZV09XFxcInRoZWlyc1RpbWVcXFwiIFtjbGFzcy50aW1lXT1cXFwidGltZVxcXCI+PC9MYWJlbD5cXHJcXG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcclxcbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXHJcXG4gICAgPC9MaXN0Vmlldz5cXHJcXG5cXHJcXG4gICAgPFN0YWNrTGF5b3V0ICNjaGF0Ym94IHJvdz1cXFwiMVxcXCIgY2xhc3M9XFxcImNoYXQtYm94LWxheW91dFxcXCI+XFxyXFxuXFx0ICAgICAgICA8R3JpZExheW91dCBjb2x1bW5zPVxcXCIqLGF1dG9cXFwiIHN0eWxlPVxcXCJwYWRkaW5nOiAxMFxcXCI+XFxyXFxuXFx0ICAgICAgICAgICAgPFRleHRWaWV3ICN0ZXh0ZmllbGQgaGVpZ2h0PVxcXCJhdXRvXFxcIiBtYXhIZWlnaHQ9XFxcIjEwMFxcXCIgaGludD1cXFwiU3RhcnQgYSBtZXNzYWdlXFxcIiBjbGFzcz1cXFwiY2hhdC10ZXh0LWZpZWxkXFxcIiByb3c9XFxcIjBcXFwiIGNvbD1cXFwiMFxcXCIgYXV0b2NvcnJlY3Q9XFxcInRydWVcXFwiIFsobmdNb2RlbCldPVxcXCJtZXNzYWdlXFxcIiAodGFwKT1cXFwib25UZXh0VGFwKClcXFwiPjwvVGV4dFZpZXc+XFxyXFxuXFx0ICAgICAgICAgICAgPEltYWdlICNidG4gY2xhc3M9XFxcImNoYXQtYnV0dG9uXFxcIiByb3c9XFxcIjBcXFwiIGNvbD1cXFwiMVxcXCIgc3JjPVxcXCJ+L2ltZy9zZW5kX21lc3NhZ2VfaWNvbl8yLnBuZ1xcXCIgKHRhcCk9c2VuZE1lc3NhZ2UoKT48L0ltYWdlPlxcclxcblxcdCAgICAgICAgPC9HcmlkTGF5b3V0PlxcclxcblxcclxcbiAgICA8L1N0YWNrTGF5b3V0PlxcclxcblxcclxcbjwvR3JpZExheW91dD5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVHJhbnNmZXJTZXJ2aWNlIH0gZnJvbSAnLi4vZGF0YXRyYW5zZmVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgKiBhcyBmaXJlYmFzZSBmcm9tICduYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlJztcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IExvZ2luY2hlY2tTZXJ2aWNlIH0gZnJvbSAnLi4vbG9naW5jaGVjay5zZXJ2aWNlLnRucyc7XHJcbmltcG9ydCB7IENoYXRNZXNzYWdlIH0gZnJvbSAnLi4vbW9kZWxzL2NoYXQtbWVzc2FnZS5tb2RlbCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGVBcnJheSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlLWFycmF5JztcclxuaW1wb3J0IHsgTGlzdFZpZXcgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2xpc3Qtdmlldyc7XHJcbmltcG9ydCB7IGlzQW5kcm9pZCB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm0nO1xyXG5pbXBvcnQgKiBhcyBhcHAgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIjtcclxuZGVjbGFyZSB2YXIgYW5kcm9pZDogYW55O1xyXG5cclxuXHJcbmNsYXNzIENoYXRJdGVtIHtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgY2hhdE1lc3NhZ2U6IENoYXRNZXNzYWdlLCBwdWJsaWMgdmlzaWJpbGl0eTogc3RyaW5nLCBwdWJsaWMgZm9ybWF0dGVkVGltZTogc3RyaW5nLCBwdWJsaWMgbWluZUNvbnRpbnVhdGlvbjogYm9vbGVhbiwgcHVibGljIHRoZWlyc0NvbnRpbnVhdGlvbjogYm9vbGVhbikge31cclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtY2hhdCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NoYXQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2NoYXQuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDaGF0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0cmFuc2ZlclNlcnZpY2U6IFRyYW5zZmVyU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMsIHByaXZhdGUgbG9naW5jaGVja1NlcnZpY2U6IExvZ2luY2hlY2tTZXJ2aWNlLFxyXG4gIFx0cHJpdmF0ZSB2Y1JlZjogVmlld0NvbnRhaW5lclJlZikgeyB9XHJcblxyXG4gIEBWaWV3Q2hpbGQoXCJtZXNzYWdlTGlzdFwiLCB7IHN0YXRpYzogdHJ1ZSB9KSBsdjogRWxlbWVudFJlZjtcclxuICBjaGF0SWQ6IHN0cmluZztcclxuICBtZXNzYWdlcyA9IG5ldyBPYnNlcnZhYmxlQXJyYXk8Q2hhdEl0ZW0+KCk7XHJcbiAgYWxsTWVzc2FnZXMgPSBuZXcgT2JzZXJ2YWJsZUFycmF5PENoYXRJdGVtPigpO1xyXG4gIG1lc3NhZ2U6IHN0cmluZyA9ICcnO1xyXG4gIHVzZXJJZDogc3RyaW5nO1xyXG4gIGNoYXROYW1lOiBzdHJpbmc7XHJcbiAgZGlzcGxheU5hbWU6IHN0cmluZztcclxuICBwZnBTb3VyY2U6IHN0cmluZztcclxuICBsaXN0OiBMaXN0VmlldztcclxuICBsYXN0SW5kZXg7XHJcbiAgY3VycmVudFVzZXI6IGFueTtcclxuICBudW1TaG93biA9IDIwO1xyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICBcdGlmKGlzQW5kcm9pZCkge1xyXG4gIFx0XHR2YXIgd2luZG93ID0gYXBwLmFuZHJvaWQuc3RhcnRBY3Rpdml0eS5nZXRXaW5kb3coKTtcclxuICAgICAgICB3aW5kb3cuc2V0U29mdElucHV0TW9kZShhbmRyb2lkLnZpZXcuV2luZG93TWFuYWdlci5MYXlvdXRQYXJhbXMuU09GVF9JTlBVVF9BREpVU1RfUkVTSVpFKTtcclxuICBcdH1cclxuICBcdHRoaXMubGlzdCA9IHRoaXMubHYubmF0aXZlRWxlbWVudDtcclxuXHJcbiAgXHR0aGlzLmNoYXRJZCA9IHRoaXMudHJhbnNmZXJTZXJ2aWNlLmdldERhdGEoKTtcclxuICBcdHRoaXMudXNlcklkID0gdGhpcy5sb2dpbmNoZWNrU2VydmljZS5nZXRVc2VyKCk7XHJcbiAgXHRmaXJlYmFzZS5nZXRDdXJyZW50VXNlcigpLnRoZW4oKHVzZXIpID0+IHtcclxuICBcdFx0dGhpcy5kaXNwbGF5TmFtZSA9IHVzZXIuZGlzcGxheU5hbWU7XHJcbiAgXHRcdHRoaXMucGZwU291cmNlID0gdXNlci5waG90b1VSTDtcclxuICBcdH0pXHJcbiAgXHR0aGlzLnJldHJpZXZlQ2hhdHMoKTtcclxuICBcdHRoaXMuY2hhdE5hbWUgPSBcIkpvaG4gRG9lXCJcclxuICBcdC8vIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAvLyAgICB0aGlzLmxpc3Quc2Nyb2xsVG9JbmRleCh0aGlzLm1lc3NhZ2VzLmxlbmd0aCAtIDEpO1xyXG4gICAvLyAgfSwgMTAwMClcclxuICB9XHJcblxyXG4gIGFzeW5jIHNlbmRNZXNzYWdlKCkge1xyXG4gICAgaWYodGhpcy5tZXNzYWdlLnJlcGxhY2UoL1xccysvZywgJycpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgXHR2YXIgdG9kYXkgPSBuZXcgRGF0ZSgpO1xyXG4gIFx0dmFyIGRhdGUgPSB0b2RheS5nZXRGdWxsWWVhcigpKycvJysodG9kYXkuZ2V0TW9udGgoKSsxKSsnLycrdG9kYXkuZ2V0RGF0ZSgpO1xyXG4gIFx0dmFyIHRpbWUgPSB0b2RheS5nZXRIb3VycygpICsgXCI6XCIgKyB0b2RheS5nZXRVVENNaW51dGVzKCkgKyBcIjpcIiArIHRvZGF5LmdldFNlY29uZHMoKTtcclxuICBcdGNvbnN0IGNoYXQgOiBDaGF0TWVzc2FnZSA9IHtcclxuICBcdFx0dXNlcklkOiB0aGlzLnVzZXJJZCxcclxuICBcdFx0ZGlzcGxheU5hbWU6IHRoaXMuZGlzcGxheU5hbWUsXHJcbiAgXHRcdG1lc3NhZ2U6IHRoaXMubWVzc2FnZSxcclxuICBcdFx0cGZwU291cmNlOiB0aGlzLnBmcFNvdXJjZSxcclxuICBcdFx0aW1nU291cmNlOiBcIlwiLFxyXG4gIFx0XHR0aW1lOiB0aW1lLFxyXG4gIFx0XHRkYXRlOiBkYXRlXHJcbiAgXHR9XHJcbiAgXHRjb25zdCBtZXNzYWdlRG9jdW1lbnQgPSBmaXJlYmFzZS5maXJlc3RvcmUuY29sbGVjdGlvbignY2hhdHMnKS5kb2ModGhpcy5jaGF0SWQpO1xyXG4gIFx0Y29uc3QgbWVzc2FnZVByb21pc2UgPSBhd2FpdCBtZXNzYWdlRG9jdW1lbnQuZ2V0KCkudGhlbigoZG9jKSA9PiB7XHJcbiAgXHRcdHZhciB1cGRhdGVkQ2hhdHMgOiBbQ2hhdE1lc3NhZ2VdID0gZG9jLmRhdGEoKS5jaGF0cztcclxuICBcdFx0dXBkYXRlZENoYXRzLnB1c2goY2hhdCk7XHJcbiAgXHRcdG1lc3NhZ2VEb2N1bWVudC51cGRhdGUoe1xyXG4gIFx0XHRcdGNoYXRzOiB1cGRhdGVkQ2hhdHMsXHJcbiAgXHRcdFx0bGFzdENoYXQ6IGRhdGUgKyAnICcgKyB0aW1lXHJcbiAgXHRcdH0pXHJcbiAgXHR9KVxyXG4gIFx0dGhpcy5tZXNzYWdlID0gJyc7XHJcbiAgfVxyXG5cclxuICBhc3luYyByZXRyaWV2ZUNoYXRzKCkge1xyXG4gIFx0Y29uc3QgbWVzc2FnZURvY3VtZW50ID0gZmlyZWJhc2UuZmlyZXN0b3JlLmNvbGxlY3Rpb24oJ2NoYXRzJykuZG9jKHRoaXMuY2hhdElkKTtcclxuICBcdGNvbnN0IGRvY1Byb21pc2UgPSBhd2FpdCBtZXNzYWdlRG9jdW1lbnQuZ2V0KCkudGhlbigoZG9jKSA9PiB7XHJcbiAgXHRcdGxldCBkYXRhID0gZG9jLmRhdGEoKTtcclxuICBcdFx0dGhpcy5sYXN0SW5kZXggPSBkYXRhLmNoYXRzLmxlbmd0aDtcclxuICAgICAgdGhpcy5tZXNzYWdlcy5zcGxpY2UoMCk7XHJcbiAgICAgIHRoaXMuYWxsTWVzc2FnZXMuc3BsaWNlKDApO1xyXG4gIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGF0YS5jaGF0cy5sZW5ndGg7IGkrKykge1xyXG4gIFx0XHRcdGlmKGRhdGEuY2hhdHNbaV0udXNlcklkID09PSB0aGlzLnVzZXJJZCkge1xyXG4gICAgICAgICAgdGhpcy51cGRhdGVDb250aW51YXRpb25zKGRhdGEsIGksIHRydWUsIFwiY29sbGFwc2VcIik7XHJcbiAgICAgICAgfVxyXG4gIFx0XHRcdGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy51cGRhdGVDb250aW51YXRpb25zKGRhdGEsIGksIGZhbHNlLCBcInZpc2libGVcIik7XHJcbiAgICAgICAgfVxyXG4gIFx0XHR9XHJcbiAgXHRcdC8vIHRoaXMubGlzdC5zY3JvbGxUb0luZGV4KGRhdGEuY2hhdHMubGVuZ3RoIC0gMSk7XHJcbiAgXHRcdGlmKGRhdGEudXNlcnMubGVuZ3RoID09PSAyKSB7XHJcbiAgXHRcdFx0aWYoZGF0YS51c2Vyc1swXS51aWQgPT09IHRoaXMudXNlcklkKVxyXG4gIFx0XHRcdFx0dGhpcy5jaGF0TmFtZSA9IGRhdGEudXNlcnNbMV0uZGlzcGxheU5hbWU7XHJcbiAgXHRcdFx0ZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmNoYXROYW1lID0gZGF0YS51c2Vyc1swXS5kaXNwbGF5TmFtZTtcclxuICAgICAgICB9XHJcbiAgXHRcdH1cclxuICBcdFx0ZWxzZSB7XHJcbiAgICAgICAgdmFyIGNoYXROYW1lID0gJ1lvdSwgJztcclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgZGF0YS51c2Vycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgaWYoZGF0YS51c2Vyc1tpXS5pZCAhPSB0aGlzLnVzZXJJZCkge1xyXG4gICAgICAgICAgICBpZihpID09PSBkYXRhLnVzZXJzLmxlbmd0aCAtIDEpXHJcbiAgICAgICAgICAgICAgY2hhdE5hbWUgKz0gJ2FuZCAnICsgZGF0YS51c2Vyc1tpXS5kaXNwbGF5TmFtZTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgIGNoYXROYW1lICs9IGRhdGEudXNlcnNbaV0uZGlzcGxheU5hbWUgKyAnLCAnO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICBcdFx0XHR0aGlzLmNoYXROYW1lID0gJ0dyb3VwIGNoYXQnO1xyXG4gIFx0XHR9XHJcbiAgXHR9KVxyXG5cclxuICBcdGNvbnN0IHVuc3Vic2NyaWJlID0gbWVzc2FnZURvY3VtZW50Lm9uU25hcHNob3QoZG9jID0+IHtcclxuICAgICAgY29uc29sZS5sb2coJ2NhbGxlZCcpXHJcbiAgXHRcdGxldCBkYXRhID0gZG9jLmRhdGEoKTtcclxuICBcdFx0Zm9yKHZhciBpID0gdGhpcy5sYXN0SW5kZXg7IGkgPCBkYXRhLmNoYXRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgXHRcdFx0aWYoZGF0YS5jaGF0c1tpXS51c2VySWQgPT09IHRoaXMudXNlcklkKSB7XHJcbiAgICAgICAgICB0aGlzLnVwZGF0ZUNvbnRpbnVhdGlvbnMoZGF0YSwgaSwgdHJ1ZSwgXCJjb2xsYXBzZVwiKTtcclxuICAgICAgICAgIHRoaXMubGlzdC5zY3JvbGxUb0luZGV4KHRoaXMubWVzc2FnZXMubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgfVxyXG4gIFx0XHRcdGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy51cGRhdGVDb250aW51YXRpb25zKGRhdGEsIGksIGZhbHNlLCBcInZpc2libGVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubnVtU2hvd24gKz0gMTtcclxuICBcdFx0fVxyXG4gIFx0XHR0aGlzLmxhc3RJbmRleCA9IGRhdGEuY2hhdHMubGVuZ3RoO1xyXG4gIFx0fSlcclxuICAgIGlmKHRoaXMubWVzc2FnZXMubGVuZ3RoID4gdGhpcy5udW1TaG93bikge1xyXG4gICAgICB0aGlzLm1lc3NhZ2VzLnNwbGljZSgwLCB0aGlzLm1lc3NhZ2VzLmxlbmd0aCAtIHRoaXMubnVtU2hvd24pO1xyXG4gICAgfVxyXG4gICAgdGhpcy5saXN0LnNjcm9sbFRvSW5kZXgodGhpcy5tZXNzYWdlcy5sZW5ndGggLSAxKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZUNvbnRpbnVhdGlvbnMoZGF0YSwgaW5kZXgsIGlzTWluZSwgdmlzaWJpbGl0eSkge1xyXG4gICAgLy9VcGRhdGUgdGltZSB0byBhIHJlYWRhYmxlIGZvcm1hdCBmb3IgdGhlIHVzZXJcclxuICAgIHZhciBjaGF0VGltZSA9IGRhdGEuY2hhdHNbaW5kZXhdLnRpbWU7XHJcbiAgICB2YXIgZGF0ZVNwbGl0ID0gZGF0YS5jaGF0c1tpbmRleF0uZGF0ZS5zcGxpdCgnLycpO1xyXG4gICAgdmFyIHRpbWVTcGxpdCA9IGNoYXRUaW1lLnNwbGl0KCc6Jyk7XHJcbiAgICB2YXIgZm9ybWF0dGVkVGltZSA9ICcnO1xyXG4gICAgaWYodGltZVNwbGl0WzFdLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICB0aW1lU3BsaXRbMV0gPSAnMCcgKyB0aW1lU3BsaXRbMV07XHJcbiAgICB9XHJcbiAgICB2YXIgaG91cnMgPSBwYXJzZUludCh0aW1lU3BsaXRbMF0pO1xyXG4gICAgaWYoaG91cnMgPiAxMikge1xyXG4gICAgICBmb3JtYXR0ZWRUaW1lID0gZGF0ZVNwbGl0WzFdICsgJy8nICsgZGF0ZVNwbGl0WzJdICsgJywgJyArIChob3VycyAtIDEyKSArICc6JyArIHRpbWVTcGxpdFsxXSArICcgUE0nO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIGlmKGhvdXJzID09PSAwKVxyXG4gICAgICAgIHRpbWVTcGxpdFswXSA9ICcxMic7XHJcbiAgICAgIGZvcm1hdHRlZFRpbWUgPSBkYXRlU3BsaXRbMV0gKyAnLycgKyBkYXRlU3BsaXRbMl0gKyAnLCAnICsgdGltZVNwbGl0WzBdICsgJzonICsgdGltZVNwbGl0WzFdICsgJyBBTSc7XHJcbiAgICB9XHJcbiAgICAvL1B1c2ggdGhlIG1lc3NhZ2UgaXRlbVxyXG4gICAgdGhpcy5tZXNzYWdlcy5wdXNoKG5ldyBDaGF0SXRlbShkYXRhLmNoYXRzW2luZGV4XSwgdmlzaWJpbGl0eSwgZm9ybWF0dGVkVGltZSwgZmFsc2UsIGZhbHNlKSk7XHJcbiAgICB0aGlzLmFsbE1lc3NhZ2VzLnB1c2gobmV3IENoYXRJdGVtKGRhdGEuY2hhdHNbaW5kZXhdLCB2aXNpYmlsaXR5LCBmb3JtYXR0ZWRUaW1lLCBmYWxzZSwgZmFsc2UpKTtcclxuXHJcbiAgICAvL0NoZWNrIGZvciBjb250aW51YXRpb24gbWVzc2FnZXMgYW5kIHVwZGF0ZSBpdGVtcyBhY2NvcmRpbmdseVxyXG4gICAgdmFyIGkgPSBpbmRleCAtIDE7XHJcbiAgICB3aGlsZShpID49IDAgJiYgZGF0YS5jaGF0c1tpXS51c2VySWQgPT09IGRhdGEuY2hhdHNbaW5kZXhdLnVzZXJJZCkge1xyXG4gICAgICBpZih0aGlzLmlzVGltZU92ZXIoZGF0YS5jaGF0c1tpXSwgZGF0YS5jaGF0c1tpbmRleF0pKVxyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgaWYoaSA+PSB0aGlzLm1lc3NhZ2VzLmxlbmd0aCkge1xyXG4gICAgICAgIHZhciBtc2cgPSB0aGlzLm1lc3NhZ2VzLmdldEl0ZW0odGhpcy5tZXNzYWdlcy5sZW5ndGggKyBpIC0gZGF0YS5jaGF0cy5sZW5ndGgpO1xyXG4gICAgICAgIG1zZy52aXNpYmlsaXR5ID0gJ2NvbGxhcHNlJztcclxuICAgICAgICBpZihpc01pbmUpIHtcclxuICAgICAgICAgIG1zZy5taW5lQ29udGludWF0aW9uID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICBtc2cudGhlaXJzQ29udGludWF0aW9uID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlcy5zZXRJdGVtKHRoaXMubWVzc2FnZXMubGVuZ3RoICsgaSAtIGRhdGEuY2hhdHMubGVuZ3RoLCBtc2cpXHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgdmFyIG1zZyA9IHRoaXMubWVzc2FnZXMuZ2V0SXRlbShpKTtcclxuICAgICAgICBtc2cudmlzaWJpbGl0eSA9ICdjb2xsYXBzZSc7XHJcbiAgICAgICAgaWYoaXNNaW5lKSB7XHJcbiAgICAgICAgICBtc2cubWluZUNvbnRpbnVhdGlvbiA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgbXNnLnRoZWlyc0NvbnRpbnVhdGlvbiA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubWVzc2FnZXMuc2V0SXRlbShpLCBtc2cpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmFsbE1lc3NhZ2VzLnNldEl0ZW0oaSwgbXNnKTtcclxuICAgICAgaSA9IGkgLSAxO1xyXG4gICAgfVxyXG4gICAgLy8gdGhpcy5saXN0LnNjcm9sbFRvSW5kZXgodGhpcy5tZXNzYWdlcy5sZW5ndGggLSAxKTtcclxuICB9XHJcblxyXG4gIGlzVGltZU92ZXIoY2hhdDEsIGNoYXQyKSB7XHJcbiAgICBjb25zdCB0aW1lMSA9IGNoYXQxLnRpbWU7XHJcbiAgICBjb25zdCB0aW1lMiA9IGNoYXQyLnRpbWU7XHJcbiAgICBjb25zdCBkYXRlMSA9IGNoYXQxLmRhdGU7XHJcbiAgICBjb25zdCBkYXRlMiA9IGNoYXQyLmRhdGU7XHJcblxyXG4gICAgY29uc3QgdGltZTFTcGxpdCA9IHRpbWUxLnNwbGl0KCc6Jyk7XHJcbiAgICBjb25zdCB0aW1lMlNwbGl0ID0gdGltZTIuc3BsaXQoJzonKTtcclxuXHJcbiAgICB2YXIgdGltZTFUb3RhbFNlY29uZHMgPSBwYXJzZUludCh0aW1lMVNwbGl0WzBdKSAqIDM2MDAgKyBwYXJzZUludCh0aW1lMVNwbGl0WzFdKSAqIDYwICsgcGFyc2VJbnQodGltZTFTcGxpdFsyXSk7XHJcbiAgICB2YXIgdGltZTJUb3RhbFNlY29uZHMgPSBwYXJzZUludCh0aW1lMlNwbGl0WzBdKSAqIDM2MDAgKyBwYXJzZUludCh0aW1lMlNwbGl0WzFdKSAqIDYwICsgcGFyc2VJbnQodGltZTJTcGxpdFsyXSk7XHJcbiAgICBpZih0aW1lMlRvdGFsU2Vjb25kcyAtIHRpbWUxVG90YWxTZWNvbmRzID4gKDYwICogMykgfHwgZGF0ZTIgPiBkYXRlMSkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIGFsaWduKGl0ZW0pIHtcclxuICBcdGlmKGl0ZW0uY2hhdE1lc3NhZ2UudXNlcklkID09PSB0aGlzLnVzZXJJZClcclxuICBcdFx0cmV0dXJuIFwicmlnaHRcIjtcclxuICBcdGVsc2VcclxuICBcdFx0cmV0dXJuIFwibGVmdFwiO1xyXG4gIH1cclxuXHJcbiAgYWxpZ25SZXZlcnNlKGl0ZW0pIHtcclxuICAgIGlmKGl0ZW0uY2hhdE1lc3NhZ2UudXNlcklkID09PSB0aGlzLnVzZXJJZClcclxuICAgICAgcmV0dXJuIFwibGVmdFwiO1xyXG4gICAgZWxzZVxyXG4gICAgICByZXR1cm4gXCJyaWdodFwiO1xyXG4gIH1cclxuXHJcbiAgc2V0dXBJdGVtVmlldyhhcmdzKSB7XHJcbiAgXHRhcmdzLnZpZXcuY29udGV4dC5taW5lID0gKHRoaXMubWVzc2FnZXMuZ2V0SXRlbShhcmdzLmluZGV4KS5jaGF0TWVzc2FnZS51c2VySWQgPT09IHRoaXMudXNlcklkKTtcclxuICBcdGFyZ3Mudmlldy5jb250ZXh0LnRoZWlycyA9ICh0aGlzLm1lc3NhZ2VzLmdldEl0ZW0oYXJncy5pbmRleCkuY2hhdE1lc3NhZ2UudXNlcklkICE9PSB0aGlzLnVzZXJJZCk7XHJcbiAgICBhcmdzLnZpZXcuY29udGV4dC5taW5lQ29udGludWF0aW9uID0gKHRoaXMubWVzc2FnZXMuZ2V0SXRlbShhcmdzLmluZGV4KS5taW5lQ29udGludWF0aW9uKTtcclxuICAgIGFyZ3Mudmlldy5jb250ZXh0LnRoZWlyc0NvbnRpbnVhdGlvbiA9ICh0aGlzLm1lc3NhZ2VzLmdldEl0ZW0oYXJncy5pbmRleCkudGhlaXJzQ29udGludWF0aW9uKTtcclxuICAgIGFyZ3Mudmlldy5jb250ZXh0Lm1pbmVDb250aW51YXRpb25HcmlkID0gKHRoaXMubWVzc2FnZXMuZ2V0SXRlbShhcmdzLmluZGV4KS5taW5lQ29udGludWF0aW9uKTtcclxuICAgIGFyZ3Mudmlldy5jb250ZXh0LnRoZWlyc0NvbnRpbnVhdGlvbkdyaWQgPSAodGhpcy5tZXNzYWdlcy5nZXRJdGVtKGFyZ3MuaW5kZXgpLnRoZWlyc0NvbnRpbnVhdGlvbik7XHJcblxyXG4gICAgYXJncy52aWV3LmNvbnRleHQuZ3JpZCA9ICghYXJncy52aWV3LmNvbnRleHQudGhlaXJzQ29udGludWF0aW9uICYmICFhcmdzLnZpZXcuY29udGV4dC5taW5lQ29udGludWF0aW9uKTtcclxuICAgIGFyZ3Mudmlldy5jb250ZXh0Lm1pbmVUaW1lID0gKCFhcmdzLnZpZXcuY29udGV4dC5taW5lQ29udGludWF0aW9uICYmIGFyZ3Mudmlldy5jb250ZXh0Lm1pbmUpO1xyXG4gICAgYXJncy52aWV3LmNvbnRleHQudGhlaXJzVGltZSA9ICghYXJncy52aWV3LmNvbnRleHQudGhlaXJzQ29udGludWF0aW9uICYmIGFyZ3Mudmlldy5jb250ZXh0LnRoZWlycyk7XHJcbiAgICBcclxuICAgIGFyZ3Mudmlldy5jb250ZXh0LnRpbWUgPSAoIWFyZ3Mudmlldy5jb250ZXh0Lm1pbmVUaW1lICYmICFhcmdzLnZpZXcuY29udGV4dC50aGVpcnNUaW1lKSAgICBcclxuICAgIGFyZ3Mudmlldy5jb250ZXh0LmV2ZW4gPSAoYXJncy5pbmRleCAlIDIgPT09IDApO1xyXG4gIFx0YXJncy52aWV3LmNvbnRleHQub2RkID0gKGFyZ3MuaW5kZXggJSAyID09PSAxKTtcclxuICB9XHJcblxyXG4gIG9uTmF2QnRuVGFwKCkge1xyXG4gIFx0aWYodGhpcy5yb3V0ZXIuY2FuR29CYWNrKCkpXHJcbiAgXHRcdHRoaXMucm91dGVyLmJhY2soKTtcclxuICBcdGVsc2VcclxuICBcdFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUoWydjaGF0LWxpc3QnXSwge2NsZWFySGlzdG9yeTogdHJ1ZX0pO1xyXG4gIH1cclxuXHJcbiAgb25UZXh0VGFwKCkge1xyXG4gICAgdGhpcy5saXN0LnNjcm9sbFRvSW5kZXgodGhpcy5tZXNzYWdlcy5sZW5ndGggLSAxKTtcclxuICB9XHJcblxyXG4gIGxvYWRNb3JlRGF0YSgpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdMb2FkIG1vcmUnKVxyXG4gIH1cclxuXHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi8qIEFkZCBtb2JpbGUgc3R5bGVzIGZvciB0aGUgY29tcG9uZW50IGhlcmUuICAqL1xcbi5kZWxldGUtYnRuIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGNvbG9yOiAjYWMwMGU2O1xcbiAgICAvKnBhZGRpbmc6IDZweCAyNHB4OyovXFxuICAgIGJvcmRlci13aWR0aDogMTtcXG4gICAgYm9yZGVyLWNvbG9yOiAjYWMwMGU2O1xcbiAgICBib3JkZXItcmFkaXVzOiA1O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZsb2F0OiBjZW50ZXI7XFxuICAgIG1hcmdpbjogYXV0bzsgXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiU2Vnb2UgVUlcXFwiLEFyaWFsLHNhbnMtc2VyaWY7XFxuICAgIG1hcmdpbi1ib3R0b206IDE1O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDE1O1xcbiAgICB3aWR0aDogMTIwO1xcbiAgICBoZWlnaHQ6IDQwO1xcbiAgICBob3Jpem9udGFsLWFsaWduOnJpZ2h0O1xcbn1cXG5cXG4uZGVsZXRlLWJ0bjpoaWdobGlnaHRlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWU2ZmY7XFxufVxcblxcbi5jYW5jZWwtYnRuIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIC8qY29sb3I6IHdoaXRlOyovXFxuICAgIC8qcGFkZGluZzogNnB4IDI0cHg7Ki9cXG4gICAgYm9yZGVyLXdpZHRoOiAxO1xcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiA1O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZsb2F0OiBjZW50ZXI7XFxuICAgIG1hcmdpbjogYXV0bzsgXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiU2Vnb2UgVUlcXFwiLEFyaWFsLHNhbnMtc2VyaWY7XFxuICAgIG1hcmdpbi1ib3R0b206IDE1O1xcbiAgICBtYXJnaW4tbGVmdDogMTU7XFxuICAgIHdpZHRoOiAxMjA7XFxuICAgIGhlaWdodDogNDA7XFxuICAgIGhvcml6b250YWwtYWxpZ246bGVmdDtcXG59XFxuXFxuLmNhbmNlbC1idG46aGlnaGxpZ2h0ZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xcbn1cXG5cXG4uZGVsZXRlLWxhYmVsIHtcXG5cXHRmb250LXNpemU6IDIwO1xcblxcdG1hcmdpbi10b3A6IDE4O1xcblxcdG1hcmdpbi1ib3R0b206IDQ4O1xcblxcdG1hcmdpbi1sZWZ0OiAxODtcXG5cXHRtYXJnaW4tcmlnaHQ6IDE4O1xcblxcdGNvbG9yOiBibGFjaztcXG59XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPFN0YWNrTGF5b3V0PlxcclxcblxcdDxMYWJlbCB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgdGV4dD1cXFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZT9cXFwiIGNsYXNzPVxcXCJkZWxldGUtbGFiZWxcXFwiPjwvTGFiZWw+XFxyXFxuXFx0PEdyaWRMYXlvdXQgcm93cz1cXFwiYXV0b1xcXCIgY29sdW1ucz1cXFwiKlxcXCI+XFxyXFxuXFx0XFx0PEJ1dHRvbiByb3c9XFxcIjBcXFwiIHRleHQ9XFxcIkNhbmNlbFxcXCIgY2xhc3M9XFxcImNhbmNlbC1idG5cXFwiICh0YXApPVxcXCJjbG9zZSgnY2FuY2VsJylcXFwiPjwvQnV0dG9uPlxcclxcblxcdFxcdDxCdXR0b24gcm93PVxcXCIwXFxcIiB0ZXh0PVxcXCJEZWxldGVcXFwiIGNsYXNzPVxcXCJkZWxldGUtYnRuXFxcIiAodGFwKT1cXFwiY2xvc2UoJ2RlbGV0ZScpXFxcIj48L0J1dHRvbj5cXHJcXG5cXHQ8L0dyaWRMYXlvdXQ+XFxyXFxuPC9TdGFja0xheW91dD5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1vZGFsRGlhbG9nUGFyYW1zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2RpcmVjdGl2ZXMvZGlhbG9nc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtY29uZmlybWF0aW9uJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY29uZmlybWF0aW9uLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jb25maXJtYXRpb24uY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb25maXJtYXRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhcmFtczogTW9kYWxEaWFsb2dQYXJhbXMpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG4gIGNsb3NlKHJlcykge1xyXG4gIFx0dGhpcy5wYXJhbXMuY2xvc2VDYWxsYmFjayhyZXMpO1xyXG4gIH1cclxuXHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi8qXFxuQWRkIHlvdXIgTmF0aXZlU2NyaXB0IHNwZWNpZmljIHN0eWxlcyBoZXJlLlxcblRvIGxlYXJuIG1vcmUgYWJvdXQgc3R5bGluZyBpbiBOYXRpdmVTY3JpcHQgc2VlOlxcbmh0dHBzOi8vZG9jcy5uYXRpdmVzY3JpcHQub3JnL2FuZ3VsYXIvdWkvc3R5bGluZ1xcbiovXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPFN0YWNrTGF5b3V0PlxcbiAgPExhYmVsIHRleHQ9XFxcImNvbm5lY3Qgd29ya3NcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIj48L0xhYmVsPlxcbiAgPExhYmVsIHRleHQ9XFxcIlRoaXMgaXMgYSBtaWdyYXRlZCBjb21wb25lbnRcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIj48L0xhYmVsPlxcbiAgPExhYmVsIHRleHQ9XFxcIlVwZGF0ZSBpdCB0byBwcm92aWRlIHRoZSBVSSBlbGVtZW50cyByZXF1aXJlZCBpbiB5b3VyIG1vYmlsZSBhcHBcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIj48L0xhYmVsPlxcbjwvU3RhY2tMYXlvdXQ+XFxuXFxuPCEtLVxcbk9yaWdpbmFsIFdlYiB0ZW1wbGF0ZTpcXG5cXG48cD5cXHJcXG4gIGNvbm5lY3Qgd29ya3MhXFxyXFxuPC9wPlxcclxcblxcbi0tPlwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTG9naW5jaGVja1NlcnZpY2UgfSBmcm9tICcuLi9sb2dpbmNoZWNrLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtY29ubmVjdCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2Nvbm5lY3QuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2Nvbm5lY3QuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb25uZWN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBsb2dpbmNoZWNrU2VydmljZTogTG9naW5jaGVja1NlcnZpY2UpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICBcdHRoaXMubG9naW5jaGVja1NlcnZpY2UubG9naW5DaGVjaygpO1xyXG4gIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVHJhbnNmZXJTZXJ2aWNlIHtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6Um91dGVyKSB7IH1cclxuXHJcbiAgcHJpdmF0ZSBkYXRhO1xyXG5cclxuICBzZXREYXRhKGRhdGEpe1xyXG4gICAgdGhpcy5kYXRhID0gZGF0YTtcclxuICB9XHJcblxyXG4gIGdldERhdGEoKXtcclxuICAgIGxldCB0ZW1wID0gdGhpcy5kYXRhO1xyXG4gICAgdGhpcy5jbGVhckRhdGEoKTtcclxuICAgIHJldHVybiB0ZW1wO1xyXG4gIH1cclxuXHJcbiAgY2xlYXJEYXRhKCl7XHJcbiAgICB0aGlzLmRhdGEgPSB1bmRlZmluZWQ7XHJcbiAgfVxyXG5cclxufSIsIm1vZHVsZS5leHBvcnRzID0gXCJwIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZDhjM2VjO1xcclxcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI2Nsb3NlLWRpYWxvZyB7XFxyXFxuXFx0ZmxvYXQ6IHJpZ2h0O1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2Uge1xcclxcblxcdGZvbnQtY29sb3I6IGJsYWNrO1xcclxcbiAgICBmbG9hdDogcmlnaHQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMC41ZW07XFxyXFxufVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxwIGlkPVxcXCJkaWFsb2dcXFwiPlxcbiAgWW91ciBzZXR0aW5ncyBoYXZlIGJlZW4gdXBkYXRlZCFcXG4gIDxzcGFuIGNsYXNzPVxcXCJjbG9zZVxcXCIgaWQ9XFxcImNsb3NlLWRpYWxvZ1xcXCI+JnRpbWVzOzwvc3Bhbj5cXG48L3A+XFxuXCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtZGlhbG9nJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2RpYWxvZy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2RpYWxvZy5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRGlhbG9nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICBcdFxuICB9XG5cbn1cbiIsImltcG9ydCB7XHJcbiAgICBJbmplY3RhYmxlLFxyXG4gICAgSW5qZWN0b3IsXHJcbiAgICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcbiAgICBFbWJlZGRlZFZpZXdSZWYsXHJcbiAgICBBcHBsaWNhdGlvblJlZlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgUG9zdGluZ0NvbXBvbmVudCB9IGZyb20gJy4vcG9zdGluZy9wb3N0aW5nLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBheW1lbnRNZXRob2RDb21wb25lbnQgfSBmcm9tICcuL3BheW1lbnQtbWV0aG9kL3BheW1lbnQtbWV0aG9kLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRyYW5zZmVyU2VydmljZSB9IGZyb20gJy4vZGF0YXRyYW5zZmVyLnNlcnZpY2UnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRHluYW1pY0FkZFNlcnZpY2Uge1xyXG4gIFxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgICBwcml2YXRlIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG4gICAgICBwcml2YXRlIGFwcFJlZjogQXBwbGljYXRpb25SZWYsXHJcbiAgICAgIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yLFxyXG4gICAgICBwcml2YXRlIHRyYW5zZmVyU2VydmljZTogVHJhbnNmZXJTZXJ2aWNlLFxyXG4gICkgeyB9XHJcbiAgXHJcbiAgYXBwZW5kQ29tcG9uZW50VG9Cb2R5KGxheW91dD1udWxsKSB7XHJcbiAgICAvLyAxLiBDcmVhdGUgYSBjb21wb25lbnQgcmVmZXJlbmNlIGZyb20gdGhlIGNvbXBvbmVudCBcclxuICAgIGNvbnN0IGNvbXBvbmVudFJlZiA9IHRoaXMuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyXHJcbiAgICAgIC5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShQb3N0aW5nQ29tcG9uZW50KVxyXG4gICAgICAuY3JlYXRlKHRoaXMuaW5qZWN0b3IpO1xyXG4gICAgLy8gMi4gQXR0YWNoIGNvbXBvbmVudCB0byB0aGUgYXBwUmVmIHNvIHRoYXQgaXQncyBpbnNpZGUgdGhlIG5nIGNvbXBvbmVudCB0cmVlXHJcbiAgICB0aGlzLmFwcFJlZi5hdHRhY2hWaWV3KGNvbXBvbmVudFJlZi5ob3N0Vmlldyk7XHJcbiAgICAvLyAzLiBHZXQgRE9NIGVsZW1lbnQgZnJvbSBjb21wb25lbnRcclxuICAgIGNvbnN0IGRvbUVsZW0gPSAoY29tcG9uZW50UmVmLmhvc3RWaWV3IGFzIEVtYmVkZGVkVmlld1JlZjxhbnk+KVxyXG4gICAgICAucm9vdE5vZGVzWzBdO1xyXG4gICAgLy8gNC4gQXBwZW5kIERPTSBlbGVtZW50IHRvIHRoZSBib2R5XHJcbiAgICBsYXlvdXQuYWRkQ2hpbGQoZG9tRWxlbSlcclxuICB9XHJcblxyXG4gIGFwcGVuZFBheW1lbnRNZXRob2QobWV0aG9kLCBpbmZvLCBzdXBlcmJvZHksIGlzQWRkLCB0b2tlbikge1xyXG5cclxuICB9XHJcbn0iLCJpbXBvcnQge1xyXG4gICAgSW5qZWN0YWJsZSxcclxuICAgIEluamVjdG9yLFxyXG4gICAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG4gICAgRW1iZWRkZWRWaWV3UmVmLFxyXG4gICAgQXBwbGljYXRpb25SZWZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IFBvc3RpbmdDb21wb25lbnQgfSBmcm9tICcuL3Bvc3RpbmcvcG9zdGluZy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQYXltZW50TWV0aG9kQ29tcG9uZW50IH0gZnJvbSAnLi9wYXltZW50LW1ldGhvZC9wYXltZW50LW1ldGhvZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUcmFuc2ZlclNlcnZpY2UgfSBmcm9tICcuL2RhdGF0cmFuc2Zlci5zZXJ2aWNlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIER5bmFtaWNBZGRTZXJ2aWNlIHtcclxuICBcclxuICBjb25zdHJ1Y3RvcihcclxuICAgICAgcHJpdmF0ZSBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuICAgICAgcHJpdmF0ZSBhcHBSZWY6IEFwcGxpY2F0aW9uUmVmLFxyXG4gICAgICBwcml2YXRlIGluamVjdG9yOiBJbmplY3RvcixcclxuICAgICAgcHJpdmF0ZSB0cmFuc2ZlclNlcnZpY2U6IFRyYW5zZmVyU2VydmljZSxcclxuICApIHsgfVxyXG4gIFxyXG4gIGFwcGVuZENvbXBvbmVudFRvQm9keShsYXlvdXQ9bnVsbCkge1xyXG4gICAgLy8gMS4gQ3JlYXRlIGEgY29tcG9uZW50IHJlZmVyZW5jZSBmcm9tIHRoZSBjb21wb25lbnQgXHJcbiAgICBjb25zdCBjb21wb25lbnRSZWYgPSB0aGlzLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlclxyXG4gICAgICAucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoUG9zdGluZ0NvbXBvbmVudClcclxuICAgICAgLmNyZWF0ZSh0aGlzLmluamVjdG9yKTtcclxuICAgIC8vIDIuIEF0dGFjaCBjb21wb25lbnQgdG8gdGhlIGFwcFJlZiBzbyB0aGF0IGl0J3MgaW5zaWRlIHRoZSBuZyBjb21wb25lbnQgdHJlZVxyXG4gICAgdGhpcy5hcHBSZWYuYXR0YWNoVmlldyhjb21wb25lbnRSZWYuaG9zdFZpZXcpO1xyXG4gICAgLy8gMy4gR2V0IERPTSBlbGVtZW50IGZyb20gY29tcG9uZW50XHJcbiAgICBjb25zdCBkb21FbGVtID0gKGNvbXBvbmVudFJlZi5ob3N0VmlldyBhcyBFbWJlZGRlZFZpZXdSZWY8YW55PilcclxuICAgICAgLnJvb3ROb2Rlc1swXTtcclxuICAgIC8vIDQuIEFwcGVuZCBET00gZWxlbWVudCB0byB0aGUgYm9keVxyXG4gICAgbGF5b3V0LmFkZENoaWxkKGRvbUVsZW0pXHJcbiAgfVxyXG5cclxuICBhcHBlbmRQYXltZW50TWV0aG9kKG1ldGhvZCwgaW5mbywgc3VwZXJib2R5LCBpc0FkZCwgdG9rZW4pIHtcclxuXHJcbiAgfVxyXG59IiwibW9kdWxlLmV4cG9ydHMgPSBcIi5mbG9hdC1idG4ge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICNhYzAwZTY7XFxyXFxuXFx0d2lkdGg6IDU2O1xcclxcblxcdGhlaWdodDogNTY7XFxyXFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogNTAlO1xcclxcbn1cXHJcXG5cXHJcXG4uZmxvYXQtYnRuLXRleHQge1xcclxcblxcdGNvbG9yOiAjZmZmZmZmO1xcclxcblxcdGZvbnQtc2l6ZTogMzY7XFxyXFxuXFx0LyptYXJnaW4tdG9wOiAtNjsqL1xcclxcbn1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImZsb2F0LWJ0blxcXCI+XFxyXFxuXFx0PExhYmVsIGNsYXNzPVxcXCJmbG9hdC1idG4tdGV4dFxcXCIgdGV4dD1cXFwiK1xcXCI+PC9MYWJlbD5cXHJcXG48L1N0YWNrTGF5b3V0PlwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLWZsb2F0LWJ0bicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2Zsb2F0LWJ0bi5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZmxvYXQtYnRuLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRmxvYXRCdG5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEdvb2dsZU1hcHNTZXJ2aWNlIHtcclxuXHJcbiAgQVBJX0tFWSA9ICdBSXphU3lBSVR4UzFqbWY4UE10YXpSZ3VXY0FmV1F4VzFrUE9vWWcnO1xyXG4gIHN0YXRpY19tYXBzX3VyaSA9ICdodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvc3RhdGljbWFwP2tleT0nICsgdGhpcy5BUElfS0VZICsgJyZzaXplPTM0MHgyMjAmc2NhbGU9MiZtYXB0eXBlPXJvYWRtYXBcXCZtYXJrZXJzPXNpemU6c21hbGwlN0Njb2xvcjpyZWQlN0MnXHJcbiAgc3RhdGljX21hcHNfdXJpX2xhcmdlID0gJ2h0dHBzOi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9zdGF0aWNtYXA/a2V5PScgKyB0aGlzLkFQSV9LRVkgKyAnJnNpemU9NTEyeDUxMiZzY2FsZT0yJm1hcHR5cGU9cm9hZG1hcFxcJm1hcmtlcnM9c2l6ZTpzbWFsbCU3Q2NvbG9yOnJlZCU3QydcclxuICBcclxuICBnZW9jb2RlX3VyaSA9ICdodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvZ2VvY29kZS9qc29uP2tleT0nICsgdGhpcy5BUElfS0VZICsgJyZhZGRyZXNzPSdcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHBDbGllbnQ6IEh0dHBDbGllbnQpIHsgfVxyXG5cclxuICBnZXRTdGF0aWNNYXAoc3RhcnRhZHIsIGVuZGFkcikge1xyXG4gIFx0dmFyIGZvcm1hdHRlZF9zdGFydGFkciA9IHN0YXJ0YWRyLnNwbGl0KCcgJykuam9pbignKycpXHJcbiAgXHR2YXIgZm9ybWF0dGVkX3N0YXJ0YWRyID0gc3RhcnRhZHIuc3BsaXQoJyYnKS5qb2luKCdhbmQnKVxyXG4gIFx0dmFyIGZvcm1hdHRlZF9lbmRhZHIgPSBlbmRhZHIuc3BsaXQoJyAnKS5qb2luKCcrJylcclxuICBcdHZhciBmb3JtYXR0ZWRfZW5kYWRyID0gZW5kYWRyLnNwbGl0KCcmJykuam9pbignYW5kJylcclxuICBcdHJldHVybiB0aGlzLnN0YXRpY19tYXBzX3VyaSArIGZvcm1hdHRlZF9zdGFydGFkciArIFwiJm1hcmtlcnM9c2l6ZTptZWQlN0NcIiArIGZvcm1hdHRlZF9lbmRhZHI7XHJcbiAgfVxyXG5cclxuICBnZXRTdGF0aWNNYXBMYXJnZShzdGFydGFkciwgZW5kYWRyKSB7XHJcbiAgXHR2YXIgZm9ybWF0dGVkX3N0YXJ0YWRyID0gc3RhcnRhZHIuc3BsaXQoJyAnKS5qb2luKCcrJylcclxuICBcdHZhciBmb3JtYXR0ZWRfc3RhcnRhZHIgPSBzdGFydGFkci5zcGxpdCgnJicpLmpvaW4oJ2FuZCcpXHJcbiAgXHR2YXIgZm9ybWF0dGVkX2VuZGFkciA9IGVuZGFkci5zcGxpdCgnICcpLmpvaW4oJysnKVxyXG4gIFx0dmFyIGZvcm1hdHRlZF9lbmRhZHIgPSBlbmRhZHIuc3BsaXQoJyYnKS5qb2luKCdhbmQnKVxyXG4gIFx0cmV0dXJuIHRoaXMuc3RhdGljX21hcHNfdXJpX2xhcmdlICsgZm9ybWF0dGVkX3N0YXJ0YWRyICsgXCImbWFya2Vycz1zaXplOm1lZCU3Q1wiICsgZm9ybWF0dGVkX2VuZGFkcjtcclxuICB9XHJcblxyXG4gIGdldEdlb2NvZGVSZXN1bHRzKGFkZHJlc3MpIHtcclxuICBcdHZhciBmb3JtYXR0ZWRfYWRkcmVzcyA9IGFkZHJlc3Muc3BsaXQoJyAnKS5qb2luKCcrJylcclxuICBcdHZhciBmb3JtYXR0ZWRfYWRkcmVzcyA9IGFkZHJlc3Muc3BsaXQoJyYnKS5qb2luKCdhbmQnKVxyXG4gIFx0cmV0dXJuIHRoaXMuaHR0cENsaWVudC5nZXQoYCR7dGhpcy5nZW9jb2RlX3VyaX1gICsgZm9ybWF0dGVkX2FkZHJlc3MpO1xyXG4gIH1cclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLypcXG5BZGQgeW91ciBOYXRpdmVTY3JpcHQgc3BlY2lmaWMgc3R5bGVzIGhlcmUuXFxuVG8gbGVhcm4gbW9yZSBhYm91dCBzdHlsaW5nIGluIE5hdGl2ZVNjcmlwdCBzZWU6XFxuaHR0cHM6Ly9kb2NzLm5hdGl2ZXNjcmlwdC5vcmcvYW5ndWxhci91aS9zdHlsaW5nXFxuKi9cXG5cXG4uYWN0aW9uYmFyIHtcXG5cXHRmb250LXNpemU6IDIyO1xcblxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxuXFx0dGV4dC1hbGlnbjogbGVmdDtcXG5cXHRjb2xvcjogYmxhY2s7XFxufVxcblxcbkxhYmVsIHtcXG5cXHR0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG4ubmFtZS1sYWJlbCB7XFxuXFx0bWFyZ2luLXRvcDogMTY7XFxuXFx0bWFyZ2luLWxlZnQ6IDE4O1xcblxcdGNvbG9yOiBibGFjaztcXG5cXHRmb250LXdlaWdodDogNzAwO1xcblxcdGZvbnQtc2l6ZTogMTc7XFxufVxcblxcbi5pbmZvLWxhYmVsIHtcXG5cXHRtYXJnaW4tdG9wOiA0O1xcblxcdG1hcmdpbi1sZWZ0OiAxODtcXG5cXHRtYXJnaW4tYm90dG9tOiAxNjtcXG5cXHRjb2xvcjogYmxhY2s7XFxufVxcblxcbi5wb3N0IHtcXG5cXHRib3JkZXItYm90dG9tLXdpZHRoOiAxO1xcblxcdGJvcmRlci1jb2xvcjogI2YxZjFmMTtcXG5cXHRtYXJnaW4tdG9wOiAxNTA7XFxuXFx0bWFyZ2luLWJvdHRvbTogMTU7XFxufVxcblxcbi5wb3N0OmhpZ2hsaWdodGVkIHtcXG5cXHQvKmJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7Ki9cXG59XFxuXFxuLnBvc3RpbmctbWFwIHtcXG5cXHRtYXJnaW4tYm90dG9tOiAxNjtcXG5cXHRib3JkZXItcmFkaXVzOiAxMDtcXG5cXHRoZWlnaHQ6IDIyMDtcXG5cXHR3aWR0aDogMzQwO1xcbn1cXG5cXG4ucHJvZmlsZS1waWN0dXJlIHtcXG5cXHRoZWlnaHQ6IDUwO1xcblxcdHdpZHRoOiA1MDtcXG5cXHRib3JkZXItcmFkaXVzOiAxMDAlO1xcblxcdHZlcnRpY2FsLWFsaWduOiB0b3A7XFxuXFx0bWFyZ2luLWxlZnQ6IDE2O1xcblxcdG1hcmdpbi10b3A6IDIwO1xcbn1cXG5cXG4ucmVmcmVzaCB7XFxuXFx0Y29sb3I6ICNhYzAwZTY7XFxufVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjwhLS0gPGFwcC1uYXZpZ2F0aW9uPjwvYXBwLW5hdmlnYXRpb24+IC0tPlxcclxcbjxQdWxsVG9SZWZyZXNoIChyZWZyZXNoKT1cXFwicmVmcmVzaExpc3QoJGV2ZW50KVxcXCIgY2xhc3M9XFxcInJlZnJlc2hcXFwiPlxcclxcblxcdDxMaXN0VmlldyBbaXRlbXNdPVxcXCJwb3N0aW5nc1xcXCIgKGl0ZW1UYXApPVxcXCJvbkl0ZW1UYXAoJGV2ZW50KVxcXCIgI2xpc3RWaWV3IGlkPVxcXCJsaXN0Vmlld1xcXCI+XFxyXFxuXFx0ICAgIDxuZy10ZW1wbGF0ZSBsZXQtaXRlbT1cXFwiaXRlbVxcXCIgbGV0LWk9XFxcImluZGV4XFxcIiBsZXQtb2RkPVxcXCJvZGRcXFwiIGxldC1ldmVuPVxcXCJldmVuXFxcIj5cXHJcXG5cXHQgICAgICAgIDxTdGFja0xheW91dCBbY2xhc3Mub2RkXT1cXFwib2RkXFxcIiBbY2xhc3MuZXZlbl09XFxcImV2ZW5cXFwiIGNsYXNzPVxcXCJwb3N0XFxcIj5cXHJcXG5cXHQgICAgICAgIFxcdCAgPFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVxcXCJob3Jpem9udGFsXFxcIj5cXHJcXG5cXHQgICAgICAgIFxcdCAgXFx0PEltYWdlIFtzcmNdPVxcXCJpdGVtLnByb2ZpbGVTb3VyY2VcXFwiIGNsYXNzPVxcXCJwcm9maWxlLXBpY3R1cmVcXFwiIHN0cmV0Y2g9XFxcImFzcGVjdEZpdFxcXCI+PC9JbWFnZT5cXHJcXG5cXHQgICAgICAgIFxcdCAgXFx0PFN0YWNrTGF5b3V0PlxcclxcblxcdFxcdCAgICAgICAgICAgICAgXFx0PExhYmVsIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiBpZD1cXFwicG9zdC1uYW1lXFxcIiBjbGFzcz1cXFwibmFtZS1sYWJlbFxcXCIgW3RleHRdPVxcXCJpdGVtLnVzZXJuYW1lXFxcIj48L0xhYmVsPlxcclxcblxcdFxcdCAgICAgICAgICAgICAgXFx0PExhYmVsIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiBpZD1cXFwicG9zdC1pbmZvXFxcIiBjbGFzcz1cXFwiaW5mby1sYWJlbFxcXCIgW3RleHRdPVxcXCJpdGVtLmluZm9cXFwiPjwvTGFiZWw+XFxyXFxuXFx0XFx0ICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXHJcXG5cXHQgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxyXFxuXFx0XFx0XFx0XFx0ICA8SW1hZ2UgW3NyY109XFxcIml0ZW0ubWFwU291cmNlXFxcIiBzdHJldGNoPVxcXCJhc3BlY3RGaXRcXFwiIGNsYXNzPVxcXCJwb3N0aW5nLW1hcFxcXCI+PC9JbWFnZT5cXHJcXG5cXHQgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxyXFxuXFx0ICAgIDwvbmctdGVtcGxhdGU+XFxyXFxuXFx0PC9MaXN0Vmlldz5cXHJcXG48L1B1bGxUb1JlZnJlc2g+XFxyXFxuXFxyXFxuPCEtLVxcclxcbk9yaWdpbmFsIFdlYiB0ZW1wbGF0ZTpcXHJcXG5cXHJcXG48YXBwLW5hdmlnYXRpb24+PC9hcHAtbmF2aWdhdGlvbj5cXHJcXG5cXHJcXG48ZGl2IGNsYXNzPVxcXCJyaWdodC1iYWNrZ3JvdW5kXFxcIj5cXHJcXG5cXHQ8ZGl2IGNsYXNzPVxcXCJ1c2VyLWNhcmQtcmlnaHQgaW5mb1xcXCI+XFxyXFxuXFx0XFx0PGltZyBzcmM9XFxcInNyYy9pbWcvc2FtcGxlX3Byb2ZpbGUuanBnXFxcIiBhbHQ9XFxcIlByb2ZpbGUgUGhvdG9cXFwiIGlkPVxcXCJwcm9maWxlX3BpY1xcXCI+XFxyXFxuXFx0XFx0PGRpdiBpZD1cXFwibmFtZV9pbmZvXFxcIj5cXHJcXG5cXHRcXHRcXHQ8aDMgaWQ9XFxcInVzZXJuYW1lXFxcIj57e3VzZXIubmFtZX19PC9oMz5cXHJcXG5cXHRcXHRcXHQ8aDMgaWQ9XFxcInVzZXJfdW5pdmVyc2l0eVxcXCI+VW5pdmVyc2l0eSBvZiBWaXJnaW5pYTwvaDM+XFxyXFxuXFx0XFx0PC9kaXY+XFxyXFxuXFx0XFx0PGRpdiBjbGFzcz1cXFwidXNlclN0YXRzXFxcIj5cXHJcXG5cXHRcXHRcXHQ8c3BhbiBpZD1cXFwidXNlcl9yaWRlc19naXZlblxcXCIgY2xhc3M9XFxcInVzZXJEYXRhXFxcIj5SaWRlcyBHaXZlbjogPC9zcGFuPlxcclxcblxcdFxcdFxcdDxzcGFuIGlkPVxcXCJudW1fcmlkZXNfZ2l2ZW5cXFwiPjwvc3Bhbj5cXHJcXG5cXHRcXHRcXHQ8c3BhbiBpZD1cXFwidXNlcl9yaWRlc19yZWNlaXZlZFxcXCIgY2xhc3M9XFxcInVzZXJEYXRhXFxcIj5SaWRlcyBSZWNlaXZlZDogPC9zcGFuPlxcclxcblxcdFxcdFxcdDxzcGFuIGlkPVxcXCJudW1fcmlkZXNfcmVjZWl2ZWRcXFwiPjwvc3Bhbj5cXHJcXG5cXHRcXHQ8L2Rpdj5cXHJcXG5cXHQ8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG48ZGl2IGlkPVxcXCJoaXN0b3J5XFxcIiBjbGFzcz1cXFwidGFiY29udGVudFxcXCI+XFxyXFxuXFx0PGgzIGFsaWduPVxcXCJjZW50ZXJcXFwiPllvdXIgUmlkZXM8L2gzPlxcclxcblxcdDxkaXYgaWQ9XFxcImJpZ2ZlZWRcXFwiICh3aW5kb3c6cmVzaXplKT1cXFwib25SZXNpemUoJGV2ZW50KVxcXCI+PC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuLS0+XCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRyYW5zZmVyU2VydmljZSB9IGZyb20gJy4uL2RhdGF0cmFuc2Zlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgUG9zdGluZ1NlcnZpY2UgfSBmcm9tICcuLi9wb3N0aW5nLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQb3N0aW5nIH0gZnJvbSAnLi4vcG9zdGluZy5tb2RlbCc7XHJcbmltcG9ydCB7IER5bmFtaWNBZGRTZXJ2aWNlIH0gZnJvbSAnLi4vZHluYW1pYy1hZGQuc2VydmljZSc7XHJcbmltcG9ydCB7IExvZ2luY2hlY2tTZXJ2aWNlIH0gZnJvbSAnLi4vbG9naW5jaGVjay5zZXJ2aWNlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZUFycmF5IH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUtYXJyYXknO1xyXG5pbXBvcnQgKiBhcyBmaXJlYmFzZSBmcm9tICduYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlJztcclxuaW1wb3J0IHsgTGlzdFZpZXcgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2xpc3Qtdmlldyc7XHJcbmltcG9ydCB7IEltYWdlU291cmNlLCBmcm9tRmlsZSwgZnJvbVJlc291cmNlLCBmcm9tQmFzZTY0LCBmcm9tTmF0aXZlU291cmNlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvaW1hZ2Utc291cmNlXCI7XHJcbmltcG9ydCB7IEZvbGRlciwgcGF0aCwga25vd25Gb2xkZXJzIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZmlsZS1zeXN0ZW1cIjtcclxuaW1wb3J0IHsgQ2FjaGUgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9pbWFnZS1jYWNoZVwiO1xyXG5cclxuXHJcbmNsYXNzIFBvc3RJdGVtIHtcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB1c2VybmFtZTogU3RyaW5nLCBwdWJsaWMgaW5mbzogc3RyaW5nLCBwdWJsaWMgcHJvZmlsZVNvdXJjZTogc3RyaW5nLCBwdWJsaWMgbWFwU291cmNlOiBzdHJpbmcpIHsgfVxyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1oaXN0b3J5JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vaGlzdG9yeS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vaGlzdG9yeS5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEhpc3RvcnlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBAVmlld0NoaWxkKCdsaXN0VmlldycsIHsgc3RhdGljOiB0cnVlIH0pIGx2OiBFbGVtZW50UmVmO1xyXG4gIC8vdXNlciA9IHRoaXMubG9naW5jaGVja1NlcnZpY2UuZ2V0VXNlcigpO1xyXG4gIHVzZXIgPSAnJztcclxuICBuYW1lID0gXCJBZGFtIFllZVwiO1xyXG4gIGJsb2NrcyA9IDA7XHJcbiAgcG9zdGluZ3MgPSBuZXcgT2JzZXJ2YWJsZUFycmF5PFBvc3RJdGVtPigpO1xyXG4gIHAgPSBbXTtcclxuICBpZHMgPSBbXTtcclxuICBjYWNoZSA9IG5ldyBDYWNoZSgpO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGxvZ2luY2hlY2tTZXJ2aWNlOiBMb2dpbmNoZWNrU2VydmljZSwgcHJpdmF0ZSB0cmFuc2ZlclNlcnZpY2U6IFRyYW5zZmVyU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBwb3N0aW5nU2VydmljZTogUG9zdGluZ1NlcnZpY2UsIHByaXZhdGUgYWRkU2VydmljZTogRHluYW1pY0FkZFNlcnZpY2UpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICBcdHRoaXMubG9naW5jaGVja1NlcnZpY2UubG9naW5DaGVjaygpO1xyXG4gIFx0dGhpcy51c2VyID0gdGhpcy5sb2dpbmNoZWNrU2VydmljZS5nZXRVc2VyKClcclxuICBcdHRoaXMubG9hZFBvc3RpbmdzKCk7XHJcbiAgfVxyXG5cclxuICBsb2FkUG9zdGluZ3MoYXJncz1udWxsKSB7XHJcbiAgICB0aGlzLnBvc3RpbmdzLnNwbGljZSgwKTtcclxuICAgIHZhciBwb3N0SWRzID0gW107XHJcbiAgICB2YXIgcG9zdGluZ3NDb2xsZWN0aW9uID0gZmlyZWJhc2UuZmlyZXN0b3JlLmNvbGxlY3Rpb24oJ3Bvc3RpbmdzJyk7XHJcbiAgICB2YXIgdXNlcnNDb2xsZWN0aW9uID0gZmlyZWJhc2UuZmlyZXN0b3JlLmNvbGxlY3Rpb24oJ3VzZXJzJykuZG9jKHRoaXMudXNlcik7XHJcbiAgICB1c2Vyc0NvbGxlY3Rpb24uZ2V0KCkudGhlbihkb2MgPT4ge1xyXG4gICAgXHRwb3N0SWRzID0gZG9jLmRhdGEoKS5wb3N0cztcclxuICAgIFx0Zm9yKHZhciBpID0gMDsgaSA8IHBvc3RJZHMubGVuZ3RoOyBpKyspIHtcclxuICAgIFx0XHRwb3N0aW5nc0NvbGxlY3Rpb24uZG9jKHBvc3RJZHNbaV0pLmdldCgpLnRoZW4oZG9jID0+IHtcclxuICAgICAgICAgIHRoaXMuY3JlYXRlUG9zdGluZyhkb2MuZGF0YSgpLCBkb2MuaWQpO1xyXG4gICAgXHRcdH0pXHJcbiAgICBcdH1cclxuICAgIFx0aWYoYXJncyAhPSBudWxsKSB7XHJcblx0ICAgICAgICB2YXIgcHVsbFJlZnJlc2ggPSBhcmdzLm9iamVjdDtcclxuXHQgICAgICAgIHB1bGxSZWZyZXNoLnJlZnJlc2hpbmcgPSBmYWxzZTtcclxuXHQgICAgfVxyXG5cdCAgICB2YXIgbGlzdFZpZXcgPSA8TGlzdFZpZXc+IHRoaXMubHYubmF0aXZlRWxlbWVudDtcclxuXHQgICAgbGlzdFZpZXcuc2Nyb2xsVG9JbmRleChwb3N0SWRzLmxlbmd0aCAtIDEpO1xyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGNyZWF0ZVBvc3RpbmcoZGF0YSwgaWQpIHtcclxuICAgIHRoaXMuY2FjaGUucGxhY2Vob2xkZXIgPSBmcm9tRmlsZShcIn4vaW1nL2dyYXlfYmFja2dyb3VuZC5qcGdcIik7XHJcbiAgICB0aGlzLmNhY2hlLm1heFJlcXVlc3RzID0gNTtcclxuICAgIGxldCBpbmZvX2xhYmVsID0gXCJcIjtcclxuICAgIGlmKGRhdGEuY2FwYWNpdHkgIT0gXCItMVwiKVxyXG4gICAgICBpbmZvX2xhYmVsID0gXCJPZmZlcmluZyByaWRlIGxlYXZpbmcgXCIgKyBkYXRhLmRhdGUgKyBcIiBmcm9tIFwiICsgZGF0YS5zdGFydEFkZHJlc3MgKyBcIiB0byBcIiArIGRhdGEuZW5kQWRkcmVzcyArIFwiIGZvciBcIiArIGRhdGEucHJpY2U7XHJcbiAgICBlbHNlXHJcbiAgICAgIGluZm9fbGFiZWwgPSBcIlJlcXVlc3RpbmcgcmlkZSBsZWF2aW5nIFwiICsgZGF0YS5kYXRlICsgXCIgZnJvbSBcIiArIGRhdGEuc3RhcnRBZGRyZXNzICsgXCIgdG8gXCIgKyBkYXRhLmVuZEFkZHJlc3M7XHJcbiAgICBjb25zdCB1c2Vyc0NvbGxlY3Rpb24gPSBmaXJlYmFzZS5maXJlc3RvcmUuY29sbGVjdGlvbigndXNlcnMnKTtcclxuICAgIHVzZXJzQ29sbGVjdGlvbi5kb2MoZGF0YS51aWQpLmdldCgpLnRoZW4oKGRvYykgPT4ge1xyXG4gICAgICBpZihkb2MuZXhpc3RzKSB7XHJcbiAgICAgICAgdmFyIHVybCA9IGRvYy5kYXRhKCkucHJvZmlsZV9zb3VyY2U7XHJcbiAgICAgICAgaWYodXJsLnN1YnN0cmluZygwLCAyNykgPT09ICdodHRwczovL2dyYXBoLmZhY2Vib29rLmNvbS8nKVxyXG4gICAgICAgICAgdXJsICs9ICc/aGVpZ2h0PTMwMCc7XHJcbiAgICAgICAgdGhpcy5wb3N0aW5ncy5wdXNoKG5ldyBQb3N0SXRlbShkYXRhLnVzZXIsIGluZm9fbGFiZWwsIHVybCwgZGF0YS5tYXBfdXJsKSk7XHJcbiAgICAgICAgdGhpcy5wLnB1c2goZGF0YSlcclxuICAgICAgICB0aGlzLmlkcy5wdXNoKGlkKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgcmVmcmVzaExpc3QoYXJncykge1xyXG4gICAgdGhpcy5sb2FkUG9zdGluZ3MoYXJncyk7XHJcbiAgfVxyXG5cclxuICBhZGRDYWNoZSh1cmwpIHtcclxuICAgIGxldCBjYWNoZWRJbWFnZVNvdXJjZTtcclxuICAgIGNvbnN0IG15SW1hZ2UgPSB0aGlzLmNhY2hlLmdldCh1cmwpO1xyXG4gICAgaWYgKG15SW1hZ2UpIHtcclxuICAgICAgICAvLyBJZiBwcmVzZW50IC0tIHVzZSBpdC5cclxuICAgICAgICBjYWNoZWRJbWFnZVNvdXJjZSA9IGZyb21OYXRpdmVTb3VyY2UobXlJbWFnZSk7XHJcbiAgICAgICAgcmV0dXJuIGNhY2hlZEltYWdlU291cmNlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBJZiBub3QgcHJlc2VudCAtLSByZXF1ZXN0IGl0cyBkb3dubG9hZCArIHB1dCBpdCBpbiB0aGUgY2FjaGUuXHJcbiAgICAgICAgdGhpcy5jYWNoZS5wdXNoKHtcclxuICAgICAgICAgICAga2V5OiB1cmwsXHJcbiAgICAgICAgICAgIHVybDogdXJsLFxyXG4gICAgICAgICAgICBjb21wbGV0ZWQ6IChpbWFnZSwga2V5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodXJsID09PSBrZXkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYWNoZWRJbWFnZVNvdXJjZSA9IGZyb21OYXRpdmVTb3VyY2UoaW1hZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjYWNoZWRJbWFnZVNvdXJjZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25JdGVtVGFwKGFyZ3MpIHtcclxuICAgIHRoaXMudHJhbnNmZXJTZXJ2aWNlLnNldERhdGEoe1xyXG4gICAgICBwb3N0SW5mbzoge2lkOiB0aGlzLmlkc1thcmdzLmluZGV4XSwgZGF0YTogdGhpcy5wW2FyZ3MuaW5kZXhdfSxcclxuICAgICAgcG9zdEl0ZW06IHRoaXMucG9zdGluZ3MuZ2V0SXRlbShhcmdzLmluZGV4KVxyXG4gICAgfSlcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsncG9zdGluZy1pbmZvJ10pXHJcbiAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2FwcEhvbWVdJ1xufSlcbmV4cG9ydCBjbGFzcyBIb21lRGlyZWN0aXZlIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLypcXHJcXG5BZGQgeW91ciBOYXRpdmVTY3JpcHQgc3BlY2lmaWMgc3R5bGVzIGhlcmUuXFxyXFxuVG8gbGVhcm4gbW9yZSBhYm91dCBzdHlsaW5nIGluIE5hdGl2ZVNjcmlwdCBzZWU6XFxyXFxuaHR0cHM6Ly9kb2NzLm5hdGl2ZXNjcmlwdC5vcmcvYW5ndWxhci91aS9zdHlsaW5nXFxyXFxuKi9cXHJcXG4ucmVmcmVzaCB7XFxyXFxuXFx0Y29sb3I6ICNhYzAwZTY7XFxyXFxufVxcclxcblxcclxcbi5hY3Rpb25iYXIge1xcclxcblxcdGZvbnQtc2l6ZTogMjI7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDcwMDtcXHJcXG5cXHR0ZXh0LWFsaWduOiBsZWZ0O1xcclxcblxcdGNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1idG4tY29udGFpbmVyIHtcXHJcXG5cXHQvKnBvc2l0aW9uOiBhYnNvbHV0ZTsqL1xcclxcblxcdC8qYm90dG9tOiAwOyovXFxyXFxuXFx0LypyaWdodDogMDsqL1xcclxcblxcdHZlcnRpY2FsLWFsaWduOiBib3R0b207XFxyXFxuXFx0ei1pbmRleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLmZhYi1idXR0b24ge1xcclxcbiAgaGVpZ2h0OiA1NjtcXHJcXG4gIHdpZHRoOiA1NjtcXHJcXG4gIG1hcmdpbjogMTU7XFxyXFxuICAvKm1hcmdpbi1ib3R0b206IDY0OyovXFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWMwMGU2O1xcclxcbiAgLypmbG9hdDogcmlnaHQ7Ki9cXHJcXG4gIGhvcml6b250YWwtYWxpZ246IHJpZ2h0O1xcclxcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcXHJcXG59XFxyXFxuXFxyXFxuTGFiZWwge1xcclxcblxcdHRleHQtYWxpZ246IGxlZnQ7XFxyXFxufVxcclxcblxcclxcbi5uYW1lLWxhYmVsIHtcXHJcXG5cXHRtYXJnaW4tdG9wOiAxNjtcXHJcXG5cXHRtYXJnaW4tbGVmdDogMTg7XFxyXFxuXFx0Y29sb3I6IGJsYWNrO1xcclxcblxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuXFx0Zm9udC1zaXplOiAxNztcXHJcXG59XFxyXFxuXFxyXFxuLmluZm8tbGFiZWwge1xcclxcblxcdG1hcmdpbi10b3A6IDQ7XFxyXFxuXFx0bWFyZ2luLWxlZnQ6IDE4O1xcclxcblxcdG1hcmdpbi1ib3R0b206IDE2O1xcclxcblxcdGNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLnBvc3Qge1xcclxcblxcdC8qYm9yZGVyLWJvdHRvbS13aWR0aDogMTsqL1xcclxcblxcdGJvcmRlci1jb2xvcjogI2YxZjFmMTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvc3Q6aGlnaGxpZ2h0ZWQge1xcclxcblxcdC8qYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTsqL1xcclxcbn1cXHJcXG5cXHJcXG4ucG9zdGluZy1tYXAge1xcclxcblxcdG1hcmdpbi1ib3R0b206IDE2O1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDEwO1xcclxcblxcdGhlaWdodDogMjIwO1xcclxcblxcdHdpZHRoOiAzNDA7XFxyXFxufVxcclxcblxcclxcbi5wcm9maWxlLXBpY3R1cmUge1xcclxcblxcdGhlaWdodDogNTA7XFxyXFxuXFx0d2lkdGg6IDUwO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDEwMCU7XFxyXFxuXFx0dmVydGljYWwtYWxpZ246IHRvcDtcXHJcXG5cXHRtYXJnaW4tbGVmdDogMTY7XFxyXFxuXFx0bWFyZ2luLXRvcDogMjA7XFxyXFxufVxcclxcblxcclxcbi5hY3Rpdml0eS1pbmRpY2F0b3Ige1xcclxcblxcdGNvbG9yOiAjYWMwMGU2O1xcclxcbn1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8IS0tIDxBY3Rpb25CYXIgdGl0bGU9XFxcIkhvbWVcXFwiIGNsYXNzPVxcXCJhY3Rpb25iYXJcXFwiPlxcclxcblxcdDxOYXZpZ2F0aW9uQnV0dG9uIGlvczp2aXNpYmlsaXR5PVxcXCJjb2xsYXBzZWRcXFwiIGljb249XFxcIn4vaW1nL21lbnUtaWNvbi5wbmdcXFwiICh0YXApPVxcXCJzaG93U2lkZURyYXdlcigpXFxcIiA+PC9OYXZpZ2F0aW9uQnV0dG9uPlxcclxcbjxBY3Rpb25JdGVtIGFuZHJvaWQ6dmlzaWJpbGl0eT1cXFwiY29sbGFwc2VkXFxcIiBpY29uPVxcXCJ+L2ltZy9tZW51LWljb24ucG5nXFxcIiBpb3MucG9zaXRpb249XFxcImxlZnRcXFwiICh0YXApPVxcXCJzaG93U2lkZURyYXdlcigpXFxcIiA+PC9BY3Rpb25JdGVtPlxcclxcbjwvQWN0aW9uQmFyPiAtLT5cXHJcXG5cXHJcXG4gICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJhZGQtYnRuLWNvbnRhaW5lclxcXCI+XFxyXFxuXFx0XFx0PEZBQiAodGFwKT1cXFwic2hvd01vZGFsKClcXFwiIGljb249XFxcInJlczovL2ljX2FkZF93aGl0ZV8zeFxcXCIgcmlwcGxlQ29sb3I9XFxcIiNmMWYxZjFcXFwiIGNsYXNzPVxcXCJmYWItYnV0dG9uXFxcIj48L0ZBQj5cXHJcXG5cXHQ8L1N0YWNrTGF5b3V0PlxcclxcblxcclxcblxcdDxQdWxsVG9SZWZyZXNoIChyZWZyZXNoKT1cXFwicmVmcmVzaExpc3QoJGV2ZW50KVxcXCIgY2xhc3M9XFxcInJlZnJlc2hcXFwiPlxcclxcblxcdFxcdDxMaXN0VmlldyBbaXRlbXNdPVxcXCJwb3N0aW5nc1xcXCIgKGl0ZW1UYXApPVxcXCJvbkl0ZW1UYXAoJGV2ZW50KVxcXCIgI2xpc3RWaWV3IGlkPVxcXCJsaXN0Vmlld1xcXCI+XFxyXFxuXFx0XFx0ICAgIDxuZy10ZW1wbGF0ZSBsZXQtaXRlbT1cXFwiaXRlbVxcXCIgbGV0LWk9XFxcImluZGV4XFxcIiBsZXQtb2RkPVxcXCJvZGRcXFwiIGxldC1ldmVuPVxcXCJldmVuXFxcIj5cXHJcXG5cXHRcXHQgICAgICAgIDxTdGFja0xheW91dCBbY2xhc3Mub2RkXT1cXFwib2RkXFxcIiBbY2xhc3MuZXZlbl09XFxcImV2ZW5cXFwiIGNsYXNzPVxcXCJwb3N0XFxcIj5cXHJcXG5cXHRcXHQgICAgICAgIFxcdCAgPFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVxcXCJob3Jpem9udGFsXFxcIj5cXHJcXG5cXHRcXHQgICAgICAgIFxcdCAgXFx0PEltYWdlIFtzcmNdPVxcXCJpdGVtLnByb2ZpbGVTb3VyY2VcXFwiIGNsYXNzPVxcXCJwcm9maWxlLXBpY3R1cmVcXFwiIHN0cmV0Y2g9XFxcImFzcGVjdEZpdFxcXCI+PC9JbWFnZT5cXHJcXG5cXHRcXHQgICAgICAgIFxcdCAgXFx0PFN0YWNrTGF5b3V0PlxcclxcblxcdFxcdFxcdCAgICAgICAgICAgICAgXFx0PExhYmVsIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiBpZD1cXFwicG9zdC1uYW1lXFxcIiBjbGFzcz1cXFwibmFtZS1sYWJlbFxcXCIgW3RleHRdPVxcXCJpdGVtLnVzZXJuYW1lXFxcIj48L0xhYmVsPlxcclxcblxcdFxcdFxcdCAgICAgICAgICAgICAgXFx0PExhYmVsIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiBpZD1cXFwicG9zdC1pbmZvXFxcIiBjbGFzcz1cXFwiaW5mby1sYWJlbFxcXCIgW3RleHRdPVxcXCJpdGVtLmluZm9cXFwiPjwvTGFiZWw+XFxyXFxuXFx0XFx0XFx0ICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXHJcXG5cXHRcXHQgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxyXFxuXFx0XFx0XFx0XFx0XFx0ICA8SW1hZ2UgW3NyY109XFxcIml0ZW0ubWFwU291cmNlXFxcIiBzdHJldGNoPVxcXCJhc3BlY3RGaXRcXFwiIGNsYXNzPVxcXCJwb3N0aW5nLW1hcFxcXCI+PC9JbWFnZT5cXHJcXG5cXHRcXHQgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxyXFxuXFx0XFx0ICAgIDwvbmctdGVtcGxhdGU+XFxyXFxuXFx0XFx0PC9MaXN0Vmlldz5cXHJcXG5cXHQ8L1B1bGxUb1JlZnJlc2g+XFxyXFxuXFx0PEFjdGl2aXR5SW5kaWNhdG9yICNhY3Rpdml0eUluZGljYXRvciBidXN5PVxcXCJ0cnVlXFxcIiB3aWR0aD1cXFwiNDBcXFwiIGhlaWdodD1cXFwiNDBcXFwiIGNsYXNzPVxcXCJhY3Rpdml0eS1pbmRpY2F0b3JcXFwiPlxcclxcbiAgPC9BY3Rpdml0eUluZGljYXRvcj5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q29udGFpbmVyUmVmLCBWaWV3UmVmLCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZUFycmF5IH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUtYXJyYXknO1xyXG5cclxuaW1wb3J0IHsgVHJhbnNmZXJTZXJ2aWNlIH0gZnJvbSAnLi4vZGF0YXRyYW5zZmVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBEeW5hbWljQWRkU2VydmljZSB9IGZyb20gJy4uL2R5bmFtaWMtYWRkLnNlcnZpY2UudG5zJztcclxuaW1wb3J0IHtQYWdlfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlXCI7XHJcbmltcG9ydCB7IGdldEZyYW1lQnlJZCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lXCI7XHJcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSAnLi4vdXNlci5zZXJ2aWNlLnRucyc7XHJcbmltcG9ydCB7IFBvc3RpbmdTZXJ2aWNlIH0gZnJvbSAnLi4vcG9zdGluZy5zZXJ2aWNlLnRucyc7XHJcbmltcG9ydCB7IE1vZGFsRGlhbG9nU2VydmljZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9kaXJlY3RpdmVzL2RpYWxvZ3NcIjtcclxuaW1wb3J0IHsgR29vZ2xlTWFwc1NlcnZpY2UgfSBmcm9tICcuLi9nb29nbGUtbWFwcy5zZXJ2aWNlJztcclxuaW1wb3J0ICogYXMgYXBwbGljYXRpb24gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIjtcclxuaW1wb3J0IHsgQWN0aXZpdHlJbmRpY2F0b3IgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2FjdGl2aXR5LWluZGljYXRvcic7XHJcbmltcG9ydCB7IEFuZHJvaWRBcHBsaWNhdGlvbiwgQW5kcm9pZEFjdGl2aXR5QmFja1ByZXNzZWRFdmVudERhdGEgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiO1xyXG5pbXBvcnQgeyBpc0FuZHJvaWQgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybVwiO1xyXG5pbXBvcnQgKiBhcyBmaXJlYmFzZSBmcm9tICduYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlJztcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IERhdGVQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbmltcG9ydCB7IFN0YWNrTGF5b3V0IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGF5b3V0cy9zdGFjay1sYXlvdXRcIjtcclxuaW1wb3J0IHsgTGlzdFZpZXcgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9saXN0LXZpZXdcIjtcclxuXHJcbmltcG9ydCB7IFBvc3RpbmcgfSBmcm9tICcuLi9wb3N0aW5nLm1vZGVsJztcclxuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uL3VzZXIubW9kZWwnO1xyXG5cclxuaW1wb3J0IHsgQWRkTW9kYWxDb21wb25lbnQgfSBmcm9tICcuLi9hZGQtbW9kYWwvYWRkLW1vZGFsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENhY2hlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvaW1hZ2UtY2FjaGVcIjtcclxuaW1wb3J0IHsgSW1hZ2VTb3VyY2UsIGZyb21GaWxlLCBmcm9tUmVzb3VyY2UsIGZyb21CYXNlNjQsIGZyb21OYXRpdmVTb3VyY2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9pbWFnZS1zb3VyY2VcIjtcclxuaW1wb3J0IHsgRm9sZGVyLCBwYXRoLCBrbm93bkZvbGRlcnMgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9maWxlLXN5c3RlbVwiO1xyXG5cclxuaW1wb3J0IHsgcmVnaXN0ZXJFbGVtZW50IH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvZWxlbWVudC1yZWdpc3RyeSc7XHJcbnJlZ2lzdGVyRWxlbWVudCgnRmFiJywgKCkgPT4gcmVxdWlyZSgnQG5zdHVkaW8vbmF0aXZlc2NyaXB0LWZsb2F0aW5nYWN0aW9uYnV0dG9uJykuRmFiKTtcclxucmVnaXN0ZXJFbGVtZW50KFwiUHVsbFRvUmVmcmVzaFwiLCAoKSA9PiByZXF1aXJlKFwiQG5zdHVkaW8vbmF0aXZlc2NyaXB0LXB1bGx0b3JlZnJlc2hcIikuUHVsbFRvUmVmcmVzaCk7XHJcblxyXG5jbGFzcyBQb3N0SXRlbSB7XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgdXNlcm5hbWU6IFN0cmluZywgcHVibGljIGluZm86IHN0cmluZywgcHVibGljIHByb2ZpbGVTb3VyY2U6IHN0cmluZywgcHVibGljIG1hcFNvdXJjZTogc3RyaW5nKSB7IH1cclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtaG9tZScsXHJcbiAgcHJvdmlkZXJzOiBbRHluYW1pY0FkZFNlcnZpY2VdLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9ob21lLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9ob21lLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBibG9ja3MgPSAxO1xyXG4gIHAgOiBQb3N0aW5nW107XHJcbiAgcG9zdGluZ3MgPSBuZXcgT2JzZXJ2YWJsZUFycmF5PFBvc3RJdGVtPigpO1xyXG4gIGNhY2hlID0gbmV3IENhY2hlKCk7XHJcbiAgXHJcblxyXG4gIEBWaWV3Q2hpbGQoJ2xpc3RWaWV3JywgeyBzdGF0aWM6IHRydWUgfSkgbHY6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgnYWN0aXZpdHlJbmRpY2F0b3InLCB7IHN0YXRpYzogdHJ1ZSB9KSBhaTogRWxlbWVudFJlZjtcclxuICBcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0cmFuc2ZlclNlcnZpY2U6IFRyYW5zZmVyU2VydmljZSwgcHJpdmF0ZSBhZGRTZXJ2aWNlOiBEeW5hbWljQWRkU2VydmljZSwgcHJpdmF0ZSBwYWdlOiBQYWdlLCBcclxuICBcdHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlLCBwcml2YXRlIHBvc3RpbmdTZXJ2aWNlOiBQb3N0aW5nU2VydmljZSwgcHJpdmF0ZSBtb2RhbDogTW9kYWxEaWFsb2dTZXJ2aWNlLCBwcml2YXRlIHZjUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgcHJpdmF0ZSBtYXBTZXJ2aWNlOiBHb29nbGVNYXBzU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMsIHByaXZhdGUgZGF0ZVBpcGU6IERhdGVQaXBlKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgXHR0aGlzLmxvYWRQb3N0aW5ncygpO1xyXG4gIH1cclxuXHJcbiAgb25CYWNrQnV0dG9uVGFwKCkge1xyXG4gICAgYXBwbGljYXRpb24uYW5kcm9pZC5mb3JlZ3JvdW5kQWN0aXZpdHkuZmluaXNoKCk7XHJcbiAgfVxyXG5cclxuICBzaG93TW9kYWwoKSB7XHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIGNvbnRleHQ6IHt9LFxyXG4gICAgICAgICAgICBmdWxsc2NyZWVuOiB0cnVlLFxyXG4gICAgICAgICAgICB2aWV3Q29udGFpbmVyUmVmOiB0aGlzLnZjUmVmXHJcbiAgICAgICAgICAgIC8vIGFuaW1hdGVkOiB0cnVlLFxyXG4gICAgICAgICAgICAvLyB0cmFuc2l0aW9uOiB7IG5hbWU6IFwic2xpZGVUb3BcIiB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLm1vZGFsLnNob3dNb2RhbChBZGRNb2RhbENvbXBvbmVudCwgb3B0aW9ucykudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgICAgICBpZihyZXMgPT0gJ3Bvc3RlZCcpXHJcbiAgICAgICAgICAgICAgdGhpcy5sb2FkUG9zdGluZ3MoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICBzaG93U2lkZURyYXdlcigpIHtcclxuICBcdC8vY29uc3QgZHJhd2VyID0gPFJhZFNpZGVEcmF3ZXI+dGhpcy5zZC5uYXRpdmVWaWV3O1xyXG4gIFx0Ly9jb25zb2xlLmRpcihkcmF3ZXIpO1xyXG4gIFx0Ly9jb25zb2xlLmRpcih0aGlzLnBhZ2UpO1xyXG4gIFx0Ly8gZHJhd2VyLnNob3dEcmF3ZXIoKTtcclxuXHJcbiAgfVxyXG5cclxuICBsb2FkUG9zdGluZ3MoYXJncz1udWxsKSB7XHJcbiAgICAvLyBsZXQgbGF5b3V0ID0gPFN0YWNrTGF5b3V0PnRoaXMucGFnZS5nZXRWaWV3QnlJZCgnZmVlZCcpO1xyXG4gICAgLy8gbGF5b3V0LnJlbW92ZUNoaWxkcmVuKCk7XHJcbiAgICB0aGlzLmNhY2hlLnBsYWNlaG9sZGVyID0gZnJvbUZpbGUoXCJ+L2ltZy9ncmF5X2JhY2tncm91bmQuanBnXCIpO1xyXG4gICAgdGhpcy5jYWNoZS5tYXhSZXF1ZXN0cyA9IDU7XHJcblxyXG4gICAgdGhpcy5wb3N0aW5ncy5zcGxpY2UoMCk7XHJcbiAgICBsZXQgYWN0aXZpdHlJbmRpY2F0b3IgPSA8QWN0aXZpdHlJbmRpY2F0b3I+IHRoaXMuYWkubmF0aXZlRWxlbWVudDtcclxuICAgIGFjdGl2aXR5SW5kaWNhdG9yLmJ1c3kgPSB0cnVlO1xyXG5cclxuICAgIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcclxuXHJcbiAgICB2YXIgcG9zdHMgPSBbXTtcclxuICAgIHZhciBwb3N0aW5nc0NvbGxlY3Rpb24gPSBmaXJlYmFzZS5maXJlc3RvcmUuY29sbGVjdGlvbigncG9zdGluZ3MnKTtcclxuICAgIGNvbnN0IHF1ZXJ5ID0gcG9zdGluZ3NDb2xsZWN0aW9uLndoZXJlKCdmb3JtYXR0ZWREYXRlJywgJz49JywgdGhpcy5kYXRlUGlwZS50cmFuc2Zvcm0oY3VycmVudERhdGUsICd5eXl5LU1NLWRkJykpXHJcbiAgICBxdWVyeS5vcmRlckJ5KCdmb3JtYXR0ZWREYXRlJywgJ2FzYycpLmdldCgpLnRoZW4ocXVlcnlTbmFwc2hvdCA9PiB7XHJcbiAgICAgIHF1ZXJ5U25hcHNob3QuZm9yRWFjaChkb2MgPT4ge1xyXG4gICAgICAgIHBvc3RzLnB1c2goe1xyXG4gICAgICAgICAgaWQ6IGRvYy5pZCxcclxuICAgICAgICAgIGRhdGE6IGRvYy5kYXRhKClcclxuICAgICAgICB9KVxyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5wID0gcG9zdHM7XHJcbiAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBwb3N0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHRoaXMucG9zdGluZ3MucHVzaChuZXcgUG9zdEl0ZW0ocG9zdHNbaV0udXNlciwgJycsICcnLCAnfi9pbWcvZ3JheV9iYWNrZ3JvdW5kLmpwZycpKTtcclxuICAgICAgICB0aGlzLmNyZWF0ZVBvc3RpbmcocG9zdHNbaV0uZGF0YSwgaSk7XHJcbiAgICAgIH1cclxuICAgICAgYWN0aXZpdHlJbmRpY2F0b3IuYnVzeSA9IGZhbHNlO1xyXG4gICAgICBpZihhcmdzICE9IG51bGwpXHJcbiAgICAgIHtcclxuICAgICAgICB2YXIgcHVsbFJlZnJlc2ggPSBhcmdzLm9iamVjdDtcclxuICAgICAgICBwdWxsUmVmcmVzaC5yZWZyZXNoaW5nID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICB9XHJcblxyXG4gLy8gIGNyZWF0ZVBvc3RpbmcoaWQsIHVzZXIsIHN0YXJ0YWRyLCBlbmRhZHIsIGRhdGUsIGNvc3QsIGNhcGFjaXR5LCBjb21tZW50cykge1xyXG5cdC8vIFx0dGhpcy50cmFuc2ZlclNlcnZpY2Uuc2V0RGF0YShbe1wiaW5kZXhcIjogdGhpcy5ibG9ja3MsIFwiaWRcIjogaWQsIFwidXNlclwiOiB1c2VyLCBcInN0YXJ0YWRyXCI6IHN0YXJ0YWRyLCBcImVuZGFkclwiOiBlbmRhZHIsIFwiZGF0ZVwiOiBkYXRlLCBcImNvc3RcIjogY29zdCwgXCJjYXBhY2l0eVwiOiBjYXBhY2l0eSwgXCJjb21tZW50c1wiOiBjb21tZW50cywgXCJidXR0b25UeXBlXCI6IFwiQ29ubmVjdFwifV0pO1xyXG5cdC8vIFx0dGhpcy5hZGRTZXJ2aWNlLmFwcGVuZENvbXBvbmVudFRvQm9keSh0aGlzLnBhZ2UuZ2V0Vmlld0J5SWQoJ2ZlZWQnKSk7XHJcblx0Ly8gICB0aGlzLmJsb2NrcysrO1xyXG5cdC8vIH1cclxuXHJcbiAgY3JlYXRlUG9zdGluZyhkYXRhLCBpOiBudW1iZXIpIHtcclxuICAgIGxldCBpbmZvX2xhYmVsID0gXCJcIjtcclxuICAgIC8vIHRoaXMuY3JlYXRlUG9zdGluZyh0aGlzLnBbaV0uX2lkLCB0aGlzLnBbaV0udXNlciwgdGhpcy5wW2ldLnN0YXJ0YWRyLCB0aGlzLnBbaV0uZW5kYWRyLCB0aGlzLnBbaV0uZGF0ZSwgdGhpcy5wW2ldLmNvc3QsIHRoaXMucFtpXS5jYXBhY2l0eSwgdGhpcy5wW2ldLmNvbW1lbnRzKTtcclxuICAgIGlmKGRhdGEuY2FwYWNpdHkgIT0gXCItMVwiKVxyXG4gICAgICBpbmZvX2xhYmVsID0gXCJPZmZlcmluZyByaWRlIGxlYXZpbmcgXCIgKyBkYXRhLmRhdGUgKyBcIiBmcm9tIFwiICsgZGF0YS5zdGFydEFkZHJlc3MgKyBcIiB0byBcIiArIGRhdGEuZW5kQWRkcmVzcyArIFwiIGZvciBcIiArIGRhdGEucHJpY2U7XHJcbiAgICBlbHNlXHJcbiAgICAgIGluZm9fbGFiZWwgPSBcIlJlcXVlc3RpbmcgcmlkZSBsZWF2aW5nIFwiICsgZGF0YS5kYXRlICsgXCIgZnJvbSBcIiArIGRhdGEuc3RhcnRBZGRyZXNzICsgXCIgdG8gXCIgKyBkYXRhLmVuZEFkZHJlc3M7XHJcbiAgICBjb25zdCB1c2Vyc0NvbGxlY3Rpb24gPSBmaXJlYmFzZS5maXJlc3RvcmUuY29sbGVjdGlvbigndXNlcnMnKTtcclxuICAgIHVzZXJzQ29sbGVjdGlvbi5kb2MoZGF0YS51aWQpLmdldCgpLnRoZW4oKGRvYykgPT4ge1xyXG4gICAgICBpZihkb2MuZXhpc3RzKSB7XHJcbiAgICAgICAgdmFyIHVybCA9IGRvYy5kYXRhKCkucHJvZmlsZV9zb3VyY2U7XHJcbiAgICAgICAgaWYodXJsLnN1YnN0cmluZygwLCAyNykgPT09ICdodHRwczovL2dyYXBoLmZhY2Vib29rLmNvbS8nKVxyXG4gICAgICAgICAgdXJsICs9ICc/aGVpZ2h0PTMwMCc7XHJcbiAgICAgICAgLy8gdmFyIG1hcFVybCA9IHRoaXMubWFwU2VydmljZS5nZXRTdGF0aWNNYXAoZGF0YS5zdGFydEFkZHJlc3MgKyBcIiBcIiArIGRhdGEuc3RhcnRGb3JtYXR0ZWQsIGRhdGEuZW5kQWRkcmVzcyArIFwiIFwiICsgZGF0YS5lbmRGb3JtYXR0ZWQpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKG1hcFVybClcclxuICAgICAgICAvLyB0aGlzLmFkZENhY2hlKHVybCwgJ3BmcCcsIGRhdGEudXNlciwgaW5mb19sYWJlbCwgdXJsLCBkYXRhLm1hcF91cmwsIGkpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIC8vICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICAgIC8vICAgdGhpcy5hZGRDYWNoZShkYXRhLm1hcF91cmwsICdtYXAnLCBkYXRhLnVzZXIsIGluZm9fbGFiZWwsIHVybCwgZGF0YS5tYXBfdXJsLCBpKS50aGVuKChyZXMpID0+e1xyXG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgLy8gICB9KVxyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgICAgIHRoaXMucG9zdGluZ3Muc2V0SXRlbShpLCBuZXcgUG9zdEl0ZW0oZGF0YS51c2VyLCBpbmZvX2xhYmVsLCB1cmwsIGRhdGEubWFwX3VybCkpO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgYWRkQ2FjaGUodXJsLCBpbWdfdHlwZSwgdXNlciwgaW5mbywgcGZwX3VybCwgbWFwX3VybCwgaSkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPGFueT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBsZXQgY2FjaGVkSW1hZ2VTb3VyY2U7XHJcbiAgICAgIGNvbnN0IG15SW1hZ2UgPSB0aGlzLmNhY2hlLmdldCh1cmwpO1xyXG4gICAgICBpZiAobXlJbWFnZSkge1xyXG4gICAgICAgIC8vIElmIHByZXNlbnQgLS0gdXNlIGl0LlxyXG4gICAgICAgIGNhY2hlZEltYWdlU291cmNlID0gZnJvbU5hdGl2ZVNvdXJjZShteUltYWdlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhteUltYWdlKVxyXG4gICAgICAgIGlmKGltZ190eXBlID09PSAncGZwJylcclxuICAgICAgICAgIHRoaXMucG9zdGluZ3Muc2V0SXRlbShpLCBuZXcgUG9zdEl0ZW0odXNlciwgaW5mbywgY2FjaGVkSW1hZ2VTb3VyY2UsIG1hcF91cmwpKTtcclxuICAgICAgICBlbHNlIGlmIChpbWdfdHlwZSA9PT0gJ21hcCcpXHJcbiAgICAgICAgICB0aGlzLnBvc3RpbmdzLnNldEl0ZW0oaSwgbmV3IFBvc3RJdGVtKHVzZXIsIGluZm8sIHRoaXMucG9zdGluZ3MuZ2V0SXRlbShpKS5wcm9maWxlU291cmNlLCBjYWNoZWRJbWFnZVNvdXJjZSkpO1xyXG4gICAgICAgIHJlc29sdmUoe21lc3NhZ2U6ICdSZXRyaWV2ZWQgZnJvbSBjYWNoZScsIGNhY2hlVVJMOiBjYWNoZWRJbWFnZVNvdXJjZX0pO1xyXG4gICAgICB9IFxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAvLyBJZiBub3QgcHJlc2VudCAtLSByZXF1ZXN0IGl0cyBkb3dubG9hZCArIHB1dCBpdCBpbiB0aGUgY2FjaGUuXHJcbiAgICAgICAgdGhpcy5jYWNoZS5wdXNoKHtcclxuICAgICAgICAgICAga2V5OiB1cmwsXHJcbiAgICAgICAgICAgIHVybDogdXJsLFxyXG4gICAgICAgICAgICBjb21wbGV0ZWQ6IChpbWFnZSwga2V5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodXJsID09PSBrZXkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYWNoZWRJbWFnZVNvdXJjZSA9IGZyb21OYXRpdmVTb3VyY2UoaW1hZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGltZ190eXBlID09PSAncGZwJylcclxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMucG9zdGluZ3Muc2V0SXRlbShpLCBuZXcgUG9zdEl0ZW0odXNlciwgaW5mbywgY2FjaGVkSW1hZ2VTb3VyY2UsIG1hcF91cmwpKTtcclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChpbWdfdHlwZSA9PT0gJ21hcCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc3RpbmdzLnNldEl0ZW0oaSwgbmV3IFBvc3RJdGVtKHVzZXIsIGluZm8sIHRoaXMucG9zdGluZ3MuZ2V0SXRlbShpKS5wcm9maWxlU291cmNlLCBjYWNoZWRJbWFnZVNvdXJjZSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh7bWVzc2FnZTogJ0FkZGVkIHRvIGNhY2hlJywgY2FjaGVVUkw6IGNhY2hlZEltYWdlU291cmNlfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHJlZnJlc2hMaXN0KGFyZ3MpIHtcclxuICAgIHRoaXMubG9hZFBvc3RpbmdzKGFyZ3MpO1xyXG4gIH1cclxuXHJcbiAgb25JdGVtVGFwKGFyZ3MpIHtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMucG9zdGluZ3MuZ2V0SXRlbShhcmdzLmluZGV4KSk7XHJcbiAgICB0aGlzLnRyYW5zZmVyU2VydmljZS5zZXREYXRhKHtcclxuICAgICAgcG9zdEluZm86IHRoaXMucFthcmdzLmluZGV4XSxcclxuICAgICAgcG9zdEl0ZW06IHRoaXMucG9zdGluZ3MuZ2V0SXRlbShhcmdzLmluZGV4KVxyXG4gICAgfSlcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsncG9zdGluZy1pbmZvJ10pXHJcbiAgfVxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCIvKiBBZGQgbW9iaWxlIHN0eWxlcyBmb3IgdGhlIGNvbXBvbmVudCBoZXJlLiAgKi9cXHJcXG4uY2xvc2Uge1xcclxcblxcdG1hcmdpbjogMTA7XFxyXFxuXFx0Zm9udC1zaXplOiAyODtcXHJcXG5cXHR3aWR0aDogNDg7XFxyXFxuXFx0aGVpZ2h0OiA0ODtcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlLWJ1dHRvbi1jb250YWluZXIge1xcclxcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHRsZWZ0OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyLWxhYmVsLTIge1xcclxcblxcdGZvbnQtc2l6ZTogMTY7XFxyXFxuXFx0bWFyZ2luLXRvcDogMTI7XFxyXFxuXFx0LyptYXJnaW4tYm90dG9tOiAxMjsqL1xcclxcblxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXItbGFiZWwtMyB7XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTogMTI7XFxyXFxufVxcclxcblxcclxcbi5wb3N0IHtcXHJcXG5cXHRib3JkZXItY29sb3I6ICNmMWYxZjE7XFxyXFxufVxcclxcblxcclxcbi5wb3N0OmhpZ2hsaWdodGVkIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xcclxcbn1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8U2Nyb2xsVmlldz5cXHJcXG5cXHQ8U3RhY2tMYXlvdXQgaGVpZ2h0PVxcXCIxMDAlXFxcIj5cXHJcXG5cXHRcXHQ8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImNsb3NlLWJ1dHRvbi1jb250YWluZXJcXFwiIG9yaWVudGF0aW9uPVxcXCJob3Jpem9udGFsXFxcIj5cXHJcXG5cXHRcXHRcXHQ8TGFiZWwgdGV4dD1cXFwiJnRpbWVzO1xcXCIgY2xhc3M9XFxcImNsb3NlXFxcIiAodGFwKT1cXFwiY2xvc2UoKVxcXCI+PC9MYWJlbD5cXHJcXG5cXHRcXHQ8L1N0YWNrTGF5b3V0PlxcclxcblxcclxcblxcdFxcdDxTdGFja0xheW91dCBjbGFzcz1cXFwiaW5wdXQtZmllbGRcXFwiPlxcclxcbjwhLS0gXFx0XFx0XFx0PFRleHRGaWVsZCBjbGFzcz1cXFwiaW5wdXRcXFwiIGF1dG9jb3JyZWN0PVxcXCJmYWxzZVxcXCIgaGludD1cXFwiRmluZCBhIGxvY2F0aW9uXFxcIiBbKG5nTW9kZWwpXT1cXFwiYWRkcmVzc1xcXCIgKHRleHRDaGFuZ2UpPVxcXCJhdXRvY29tcGxldGUoKVxcXCIgI3NlYXJjaExhYmVsIGlkPVxcXCJzZWFyY2hMYWJlbFxcXCIgcmVxdWlyZWQ+PC9UZXh0RmllbGQ+IC0tPlxcclxcblxcdFxcdFxcdDxTZWFyY2hCYXIgaGludD1cXFwiRmluZCBhIGxvY2F0aW9uXFxcIiBbdGV4dF09XFxcImFkZHJlc3NcXFwiICh0ZXh0Q2hhbmdlKT1cXFwic2VhcmNoKCRldmVudClcXFwiPjwvU2VhcmNoQmFyPlxcclxcblxcdFxcdFxcdDxTdGFja0xheW91dCBjbGFzcz1cXFwiaHItbGlnaHRcXFwiPjwvU3RhY2tMYXlvdXQ+XFxyXFxuXFx0XFx0PC9TdGFja0xheW91dD5cXHJcXG5cXHJcXG5cXHRcXHQ8TGlzdFZpZXcgW2l0ZW1zXT1cXFwic3VnZ2VzdGlvbnNcXFwiIGhlaWdodD1cXFwiMTAwJVxcXCI+XFxyXFxuXFx0XFx0XFx0PG5nLXRlbXBsYXRlIGxldC1pdGVtPVxcXCJpdGVtXFxcIiBsZXQtaT1cXFwiaW5kZXhcXFwiIGxldC1vZGQ9XFxcIm9kZFxcXCIgbGV0LWV2ZW49XFxcImV2ZW5cXFwiPlxcclxcblxcdFxcdFxcdFxcdDxTdGFja0xheW91dCBbY2xhc3Mub2RkXT1cXFwib2RkXFxcIiBbY2xhc3MuZXZlbl09XFxcImV2ZW5cXFwiIGNsYXNzPVxcXCJwb3N0XFxcIiAodGFwKT1cXFwic2VsZWN0UGxhY2UoaXRlbS5wbGFjZVN1Z2dlc3Rpb24sIGl0ZW0ucGxhY2VBZGRyZXNzKVxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PExhYmVsIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiBbdGV4dF09XFxcIml0ZW0ucGxhY2VTdWdnZXN0aW9uXFxcIiBjbGFzcz1cXFwiaGVhZGVyLWxhYmVsLTJcXFwiPjwvTGFiZWw+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PExhYmVsIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiBbdGV4dF09XFxcIml0ZW0ucGxhY2VBZGRyZXNzXFxcIiBjbGFzcz1cXFwiaGVhZGVyLWxhYmVsLTNcXFwiPjwvTGFiZWw+XFxyXFxuXFx0XFx0XFx0XFx0PC9TdGFja0xheW91dD5cXHJcXG5cXHRcXHRcXHQ8L25nLXRlbXBsYXRlPlxcclxcblxcdFxcdDwvTGlzdFZpZXc+XFxyXFxuXFx0PC9TdGFja0xheW91dD5cXHJcXG48L1Njcm9sbFZpZXc+XCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgRWxlbWVudFJlZiwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBsYWNlc0F1dG9jb21wbGV0ZVNlcnZpY2UgfSBmcm9tICcuLi9wbGFjZXMtYXV0b2NvbXBsZXRlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlQXJyYXkgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS1hcnJheSc7XHJcbmltcG9ydCB7IE1vZGFsRGlhbG9nUGFyYW1zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2RpcmVjdGl2ZXMvZGlhbG9nc1wiO1xyXG5pbXBvcnQgeyBUcmFuc2ZlclNlcnZpY2UgfSBmcm9tICcuLi9kYXRhdHJhbnNmZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IFNlYXJjaEJhciB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvc2VhcmNoLWJhcic7XHJcblxyXG5jbGFzcyBTdWdnZXN0aW9uIHtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGxhY2VTdWdnZXN0aW9uOiBzdHJpbmcsIHB1YmxpYyBwbGFjZUFkZHJlc3M6IHN0cmluZykge31cclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtbG9jYXRpb24nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9sb2NhdGlvbi5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vbG9jYXRpb24uY29tcG9uZW50LmNzcyddXHJcbn0pXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIExvY2F0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwYXJhbXM6IE1vZGFsRGlhbG9nUGFyYW1zLCBwcml2YXRlIHBsYWNlc1NlcnZpY2U6IFBsYWNlc0F1dG9jb21wbGV0ZVNlcnZpY2UsIHByaXZhdGUgdHJhbnNmZXJTZXJ2aWNlOiBUcmFuc2ZlclNlcnZpY2UpIHsgfVxyXG5cclxuICBAVmlld0NoaWxkKFwic2VhcmNoTGFiZWxcIiwgeyBzdGF0aWM6IHRydWUgfSkgc2VhcmNoTGFiZWw6IEVsZW1lbnRSZWY7XHJcbiAgYWRkcmVzcztcclxuICBzdWdnZXN0aW9ucyA9IG5ldyBPYnNlcnZhYmxlQXJyYXk8U3VnZ2VzdGlvbj4oKTtcclxuICBwbGFjZVN1Z2dlc3Rpb25zID0gbmV3IE9ic2VydmFibGVBcnJheTxTdHJpbmc+KCk7XHJcbiAgcGxhY2VBZGRyZXNzZXMgPSBuZXcgT2JzZXJ2YWJsZUFycmF5PFN0cmluZz4oKTtcclxuICB0eXBlID0gdGhpcy50cmFuc2ZlclNlcnZpY2UuZ2V0RGF0YSgpO1xyXG5cclxuICBpZHMgPSBuZXcgU2V0KCk7XHJcbiAgbXlUaW1lcjtcclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgXHQvLyBzZXRUaW1lb3V0KCgpID0+IHRoaXMuc2VhcmNoTGFiZWwubmF0aXZlRWxlbWVudC5mb2N1cygpLCAxMDApO1xyXG4gIH1cclxuXHJcbiAgY2xvc2UoKSB7XHJcbiAgXHR0aGlzLnBhcmFtcy5jbG9zZUNhbGxiYWNrKCk7XHJcbiAgIH1cclxuXHJcbiAgIHNlbGVjdFBsYWNlKHBsYWNlLCBhZGRyZXNzKSB7XHJcbiAgIFx0aWYodGhpcy50eXBlID09ICdzdGFydCcpXHJcbiAgIFx0XHR0aGlzLnBhcmFtcy5jbG9zZUNhbGxiYWNrKHsnc3RhcnQnOiBwbGFjZSwgJ2FkZHJlc3MnOiBhZGRyZXNzfSk7XHJcbiAgIFx0ZWxzZVxyXG4gICBcdFx0dGhpcy5wYXJhbXMuY2xvc2VDYWxsYmFjayh7J2VuZCc6IHBsYWNlLCAnYWRkcmVzcyc6IGFkZHJlc3N9KTtcclxuICAgfVxyXG5cclxuICBzZWFyY2goYXJncykge1xyXG4gIFx0Y2xlYXJJbnRlcnZhbCh0aGlzLm15VGltZXIpO1xyXG4gIFx0dGhpcy5teVRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgXHRcdGxldCBzZWFyY2hCYXIgPSA8U2VhcmNoQmFyPiBhcmdzLm9iamVjdDtcclxuXHQgICAgdGhpcy5pZHMuY2xlYXIoKTtcclxuXHQgICAgdGhpcy5zdWdnZXN0aW9ucy5zcGxpY2UoMCk7XHJcblx0ICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdCAgICB0aGlzLnBsYWNlc1NlcnZpY2UuZ2V0UGxhY2VSZXN1bHRzKHNlYXJjaEJhci50ZXh0KS5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4ge1xyXG5cdFx0ICAgIGZvcih2YXIgaSA9IDA7IGkgPCBkYXRhLnJlc3VsdHMubGVuZ3RoOyBpKyspIHtcclxuXHRcdCAgICAgIFx0aWYoIXRoaXMuaWRzLmhhcyhkYXRhLnJlc3VsdHNbaV0ucGxhY2VfaWQpKVxyXG5cdFx0ICAgICAgXHRcdHRoaXMuc3VnZ2VzdGlvbnMucHVzaChuZXcgU3VnZ2VzdGlvbihkYXRhLnJlc3VsdHNbaV0ubmFtZSwgZGF0YS5yZXN1bHRzW2ldLmZvcm1hdHRlZF9hZGRyZXNzKSk7XHJcblx0XHQgICAgICBcdHRoaXMuaWRzLmFkZChkYXRhLnJlc3VsdHNbaV0ucGxhY2VfaWQpO1xyXG5cdFx0ICAgIH1cclxuXHRcdCAgfSk7XHJcblx0XHR9LCAxMDApO1xyXG5cdFx0dGhpcy5wbGFjZXNTZXJ2aWNlLmdldEF1dG9jb21wbGV0ZVJlc3VsdHNBZGRyZXNzKHNlYXJjaEJhci50ZXh0KS5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4ge1xyXG5cdFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGF0YS5wcmVkaWN0aW9ucy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHQgIFx0aWYoIXRoaXMuaWRzLmhhcyhkYXRhLnByZWRpY3Rpb25zW2ldLnBsYWNlX2lkKSlcclxuXHRcdFx0ICBcdFx0dGhpcy5zdWdnZXN0aW9ucy5wdXNoKG5ldyBTdWdnZXN0aW9uKGRhdGEucHJlZGljdGlvbnNbaV0uc3RydWN0dXJlZF9mb3JtYXR0aW5nLm1haW5fdGV4dCwgZGF0YS5wcmVkaWN0aW9uc1tpXS5zdHJ1Y3R1cmVkX2Zvcm1hdHRpbmcuc2Vjb25kYXJ5X3RleHQpKTtcclxuXHRcdFx0ICBcdHRoaXMuaWRzLmFkZChkYXRhLnByZWRpY3Rpb25zW2ldLnBsYWNlX2lkKTtcclxuXHRcdCAgXHR9XHJcblx0XHR9KTtcclxuXHRcdC8vIHRoaXMucGxhY2VzU2VydmljZS5nZXRBdXRvY29tcGxldGVSZXN1bHRzRXN0YWJsaXNobWVudChzZWFyY2hCYXIudGV4dCkuc3Vic2NyaWJlKChkYXRhOiBhbnkpID0+IHtcclxuXHRcdC8vIFx0ICBmb3IodmFyIGkgPSAwOyBpIDwgZGF0YS5wcmVkaWN0aW9ucy5sZW5ndGg7IGkrKykge1xyXG5cdFx0Ly8gICAgIFx0aWYoIXRoaXMuaWRzLmhhcyhkYXRhLnByZWRpY3Rpb25zW2ldLnBsYWNlX2lkKSlcclxuXHRcdC8vICAgICBcdFx0dGhpcy5zdWdnZXN0aW9ucy5wdXNoKG5ldyBTdWdnZXN0aW9uKGRhdGEucHJlZGljdGlvbnNbaV0uc3RydWN0dXJlZF9mb3JtYXR0aW5nLm1haW5fdGV4dCwgZGF0YS5wcmVkaWN0aW9uc1tpXS5zdHJ1Y3R1cmVkX2Zvcm1hdHRpbmcuc2Vjb25kYXJ5X3RleHQpKTtcclxuXHRcdC8vICAgICBcdHRoaXMuaWRzLmFkZChkYXRhLnByZWRpY3Rpb25zW2ldLnBsYWNlX2lkKTtcclxuXHRcdC8vICAgICB9XHJcblx0XHQvLyB9KTtcclxuXHRcdHRoaXMucGxhY2VzU2VydmljZS5nZXRBdXRvY29tcGxldGVSZXN1bHRzQ2l0eShzZWFyY2hCYXIudGV4dCkuc3Vic2NyaWJlKChkYXRhOiBhbnkpID0+IHtcclxuXHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRhdGEucHJlZGljdGlvbnMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0ICBcdGlmKCF0aGlzLmlkcy5oYXMoZGF0YS5wcmVkaWN0aW9uc1tpXS5wbGFjZV9pZCkpXHJcblx0XHRcdCAgXHRcdHRoaXMuc3VnZ2VzdGlvbnMucHVzaChuZXcgU3VnZ2VzdGlvbihkYXRhLnByZWRpY3Rpb25zW2ldLnN0cnVjdHVyZWRfZm9ybWF0dGluZy5tYWluX3RleHQsIGRhdGEucHJlZGljdGlvbnNbaV0uc3RydWN0dXJlZF9mb3JtYXR0aW5nLnNlY29uZGFyeV90ZXh0KSk7XHJcblx0XHRcdCAgXHR0aGlzLmlkcy5hZGQoZGF0YS5wcmVkaWN0aW9uc1tpXS5wbGFjZV9pZCk7XHJcblx0XHQgIFx0fVxyXG5cdFx0fSk7XHJcbiAgXHR9LCA1MDApOyAgXHRcclxuICB9XHJcblxyXG4gIGF1dG9jb21wbGV0ZSgpIHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgXHR0aGlzLmlkcy5jbGVhcigpO1xyXG4gICAgICB0aGlzLnN1Z2dlc3Rpb25zLnNwbGljZSgwKTtcclxuICAgICAgdGhpcy5wbGFjZXNTZXJ2aWNlLmdldFBsYWNlUmVzdWx0cyh0aGlzLmFkZHJlc3MpLnN1YnNjcmliZSgoZGF0YTogYW55KSA9PiB7XHJcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGRhdGEucmVzdWx0cy5sZW5ndGg7IGkrKykge1xyXG5cdCAgICAgIFx0aWYoIXRoaXMuaWRzLmhhcyhkYXRhLnJlc3VsdHNbaV0ucGxhY2VfaWQpKVxyXG5cdCAgICAgIFx0XHR0aGlzLnN1Z2dlc3Rpb25zLnB1c2gobmV3IFN1Z2dlc3Rpb24oZGF0YS5yZXN1bHRzW2ldLm5hbWUsIGRhdGEucmVzdWx0c1tpXS5mb3JtYXR0ZWRfYWRkcmVzcykpO1xyXG5cdCAgICAgIFx0dGhpcy5pZHMuYWRkKGRhdGEucmVzdWx0c1tpXS5wbGFjZV9pZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcblx0ICAgICAgdGhpcy5wbGFjZXNTZXJ2aWNlLmdldEF1dG9jb21wbGV0ZVJlc3VsdHNBZGRyZXNzKHRoaXMuYWRkcmVzcykuc3Vic2NyaWJlKChkYXRhOiBhbnkpID0+IHtcclxuXHQgICAgICBcdCAgZm9yKHZhciBpID0gMDsgaSA8IGRhdGEucHJlZGljdGlvbnMubGVuZ3RoOyBpKyspIHtcclxuXHQgICAgICAgICAgXHRpZighdGhpcy5pZHMuaGFzKGRhdGEucHJlZGljdGlvbnNbaV0ucGxhY2VfaWQpKVxyXG5cdCAgICAgICAgICBcdFx0dGhpcy5zdWdnZXN0aW9ucy5wdXNoKG5ldyBTdWdnZXN0aW9uKGRhdGEucHJlZGljdGlvbnNbaV0uc3RydWN0dXJlZF9mb3JtYXR0aW5nLm1haW5fdGV4dCwgZGF0YS5wcmVkaWN0aW9uc1tpXS5zdHJ1Y3R1cmVkX2Zvcm1hdHRpbmcuc2Vjb25kYXJ5X3RleHQpKTtcclxuXHQgICAgICAgICAgXHR0aGlzLmlkcy5hZGQoZGF0YS5wcmVkaWN0aW9uc1tpXS5wbGFjZV9pZCk7XHJcblx0ICAgICAgICAgIH1cclxuXHQgICAgICB9KTtcclxuXHQgICAgICAvLyB0aGlzLnBsYWNlc1NlcnZpY2UuZ2V0QXV0b2NvbXBsZXRlUmVzdWx0c0VzdGFibGlzaG1lbnQodGhpcy5hZGRyZXNzKS5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4ge1xyXG5cdCAgICAgIC8vIFx0ICBmb3IodmFyIGkgPSAwOyBpIDwgZGF0YS5wcmVkaWN0aW9ucy5sZW5ndGg7IGkrKykge1xyXG5cdCAgICAgIC8vICAgICBcdGlmKCF0aGlzLmlkcy5oYXMoZGF0YS5wcmVkaWN0aW9uc1tpXS5wbGFjZV9pZCkpXHJcblx0ICAgICAgLy8gICAgIFx0XHR0aGlzLnN1Z2dlc3Rpb25zLnB1c2gobmV3IFN1Z2dlc3Rpb24oZGF0YS5wcmVkaWN0aW9uc1tpXS5zdHJ1Y3R1cmVkX2Zvcm1hdHRpbmcubWFpbl90ZXh0LCBkYXRhLnByZWRpY3Rpb25zW2ldLnN0cnVjdHVyZWRfZm9ybWF0dGluZy5zZWNvbmRhcnlfdGV4dCkpO1xyXG5cdCAgICAgIC8vICAgICBcdHRoaXMuaWRzLmFkZChkYXRhLnByZWRpY3Rpb25zW2ldLnBsYWNlX2lkKTtcclxuXHQgICAgICAvLyAgICAgfVxyXG5cdCAgICAgIC8vIH0pO1xyXG5cdCAgICAgIHRoaXMucGxhY2VzU2VydmljZS5nZXRBdXRvY29tcGxldGVSZXN1bHRzQ2l0eSh0aGlzLmFkZHJlc3MpLnN1YnNjcmliZSgoZGF0YTogYW55KSA9PiB7XHJcblx0ICAgICAgXHQgIGZvcih2YXIgaSA9IDA7IGkgPCBkYXRhLnByZWRpY3Rpb25zLmxlbmd0aDsgaSsrKSB7XHJcblx0ICAgICAgICAgIFx0aWYoIXRoaXMuaWRzLmhhcyhkYXRhLnByZWRpY3Rpb25zW2ldLnBsYWNlX2lkKSlcclxuXHQgICAgICAgICAgXHRcdHRoaXMuc3VnZ2VzdGlvbnMucHVzaChuZXcgU3VnZ2VzdGlvbihkYXRhLnByZWRpY3Rpb25zW2ldLnN0cnVjdHVyZWRfZm9ybWF0dGluZy5tYWluX3RleHQsIGRhdGEucHJlZGljdGlvbnNbaV0uc3RydWN0dXJlZF9mb3JtYXR0aW5nLnNlY29uZGFyeV90ZXh0KSk7XHJcblx0ICAgICAgICAgIFx0dGhpcy5pZHMuYWRkKGRhdGEucHJlZGljdGlvbnNbaV0ucGxhY2VfaWQpO1xyXG5cdCAgICAgICAgICB9XHJcblx0ICAgICAgfSk7XHJcbiAgICAgIH0sIDEwMCk7XHJcblxyXG4gICAgfSwgNDAwKTtcclxuICB9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbYXBwTG9naW5dJ1xufSlcbmV4cG9ydCBjbGFzcyBMb2dpbkRpcmVjdGl2ZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi8qXFxuQWRkIHlvdXIgTmF0aXZlU2NyaXB0IHNwZWNpZmljIHN0eWxlcyBoZXJlLlxcblRvIGxlYXJuIG1vcmUgYWJvdXQgc3R5bGluZyBpbiBOYXRpdmVTY3JpcHQgc2VlOlxcbmh0dHBzOi8vZG9jcy5uYXRpdmVzY3JpcHQub3JnL2FuZ3VsYXIvdWkvc3R5bGluZ1xcbiovXFxuXFxuLmxvZ2luIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGNvbG9yOiAjYWMwMGU2O1xcbiAgICAvKnBhZGRpbmc6IDZweCAyNHB4OyovXFxuICAgIGJvcmRlci13aWR0aDogMTtcXG4gICAgYm9yZGVyLWNvbG9yOiAjYWMwMGU2O1xcbiAgICBib3JkZXItcmFkaXVzOiA1O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZsb2F0OiBjZW50ZXI7XFxuICAgIG1hcmdpbjogYXV0bzsgXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiU2Vnb2UgVUlcXFwiLEFyaWFsLHNhbnMtc2VyaWY7XFxuICAgIG1hcmdpbi1ib3R0b206IDE1O1xcbiAgICB3aWR0aDogMTIwO1xcbiAgICBoZWlnaHQ6IDQwO1xcbn1cXG5cXG4ubG9naW46aGlnaGxpZ2h0ZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjllNmZmO1xcbn1cXG5cXG4ubG9naW4taW5mbyB7XFxuXFx0bWFyZ2luLXRvcDogMTIwO1xcbn1cXG5cXG4uaG9tZXNjcmVlbi1sb2dvIHtcXG5cXHRtYXJnaW4tYm90dG9tOiAyMDA7XFxufVxcblxcbi5oMSB7XFxuXFx0Zm9udC1zaXplOiA1MDtcXG5cXHRmb250LXdlaWdodDogNzAwO1xcblxcdGNvbG9yOiAjYWMwMGU2O1xcbn1cXG5cXG4ubG9naW4td3JhcHBlciB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcXG59XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJsb2dpbi13cmFwcGVyXFxcIj5cXHJcXG4gIDxTdGFja0xheW91dCBjbGFzcz1cXFwibG9naW4taW5mb1xcXCI+XFxyXFxuICAgIDxJbWFnZSBzcmM9XFxcIn4vaW1nL2xvZ28ucG5nXFxcIiBoZWlnaHQ9XFxcIjE4MFxcXCIgd2lkdGg9XFxcIjE4MFxcXCIgY2xhc3M9XFxcImhvbWVzY3JlZW4tbG9nb1xcXCI+PC9JbWFnZT5cXHJcXG48IS0tICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcInNsb2dhbnNcXFwiPlxcclxcbiAgICAgIDxMYWJlbCBjbGFzcz1cXFwiaDNcXFwiIHRleHQ9XFxcIkZpbmQgUmlkZXMgRmFzdFxcXCI+PC9MYWJlbD5cXHJcXG4gICAgICA8TGFiZWwgY2xhc3M9XFxcImgzXFxcIiB0ZXh0PVxcXCJDb25uZWN0IHdpdGggb3RoZXIgc3R1ZGVudHNcXFwiPjwvTGFiZWw+XFxyXFxuICAgIDwvU3RhY2tMYXlvdXQ+IC0tPlxcclxcbiAgPC9TdGFja0xheW91dD5cXHJcXG4gIDxTdGFja0xheW91dCBjbGFzcz1cXFwibG9naW5fd3JhcHBlclxcXCI+XFxyXFxuICAgIDxCdXR0b24gY2xhc3M9XFxcImxvZ2luXFxcIiAodGFwKT1cXFwidG9Mb2dJbigpXFxcIiB0ZXh0PVxcXCJMb2dpblxcXCI+PC9CdXR0b24+XFxyXFxuICAgIDxCdXR0b24gY2xhc3M9XFxcImxvZ2luXFxcIiAodGFwKT1cXFwidG9TaWduVXAoKVxcXCIgdGV4dD1cXFwiU2lnbiB1cFxcXCI+PC9CdXR0b24+XFxyXFxuICA8L1N0YWNrTGF5b3V0PlxcclxcbjwvU3RhY2tMYXlvdXQ+XFxyXFxuXFxyXFxuPCEtLVxcclxcbk9yaWdpbmFsIFdlYiB0ZW1wbGF0ZTpcXHJcXG5cXHJcXG48ZGl2IGNsYXNzPVxcXCJjb250ZW50LXJpZ2h0XFxcIj5cXHJcXG4gIDxkaXYgY2xhc3M9XFxcImxvZ2luX3dyYXBwZXJcXFwiPlxcclxcbiAgICAgIDxpbnB1dCB0eXBlPVxcXCJidXR0b25cXFwiIHZhbHVlPVxcXCJMb2dpblxcXCIgY2xhc3M9XFxcImxvZ2luXFxcIiAoY2xpY2spPVxcXCJ0b0xvZ0luKClcXFwiIC8+XFxyXFxuICAgICAgPGlucHV0IHR5cGU9XFxcImJ1dHRvblxcXCIgdmFsdWU9XFxcIlNpZ24gdXBcXFwiIGNsYXNzPVxcXCJsb2dpblxcXCIgaWQ9XFxcImxvZ2luMlxcXCIgKGNsaWNrKT1cXFwidG9TaWduVXAoKVxcXCIvPlxcclxcbiAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuPGRpdiBjbGFzcz1cXFwiY29udGVudC1sZWZ0XFxcIj5cXHJcXG4gIDxkaXYgY2xhc3M9XFxcImxvZ2luX2luZm9cXFwiPlxcclxcbiAgICA8aDE+Q29sbGVnZVBvb2w8L2gxPlxcclxcbiAgICA8aW1nIHNyYz1cXFwic3JjL2ltZy9sb2dvLnBuZ1xcXCIgYWx0PVxcXCJMb2dvXFxcIiBoZWlnaHQ9XFxcIjkwXFxcIiB3aWR0aD1cXFwiOTBcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJzbG9nYW5zXFxcIj5cXHJcXG4gICAgICA8aDM+RmluZCBSaWRlcyBGYXN0PGJyPlxcclxcbiAgICAgIENvbm5lY3Qgd2l0aCBvdGhlciBzdHVkZW50czwvaDM+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuLS0+XCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcclxuLy8gaW1wb3J0IHsgQ29nbml0b0F1dGggfSBmcm9tICdhbWF6b24tY29nbml0by1hdXRoLWpzL2Rpc3QvYW1hem9uLWNvZ25pdG8tYXV0aCc7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlXCI7XHJcbi8vIGltcG9ydCBBdXRoIGZyb20gJ0Bhd3MtYW1wbGlmeS9hdXRoJztcclxuLy8gY29uc3QgZmlyZWJhc2UgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiKTtcclxuaW1wb3J0ICogYXMgZmlyZWJhc2UgZnJvbSAnbmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZSc7XHJcbi8vIGltcG9ydCB7IEFuZ3VsYXJGaXJlQXV0aCB9IGZyb20gJ0Bhbmd1bGFyL2ZpcmUvYXV0aCc7XHJcbi8vIGltcG9ydCB7IGF1dGggfSBmcm9tICdmaXJlYmFzZS9hcHAnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtbG9naW4nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9sb2dpbi5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vbG9naW4uY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zLCBwcml2YXRlIHBhZ2U6IFBhZ2UpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICBcdHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xyXG4gICAgdmFyIGZpcmViYXNlQ29uZmlnID0ge1xyXG4gICAgICBhcGlLZXk6IFwiQUl6YVN5Qkd1aVlwTTEzOFE2YXlxRE1SVVZXSnAxQ0U5V0IwOU53XCIsXHJcbiAgICAgIGF1dGhEb21haW46IFwiY29sbGVnZXBvb2wtMTU1Mjc0OTExODYxNy5maXJlYmFzZWFwcC5jb21cIixcclxuICAgICAgZGF0YWJhc2VVUkw6IFwiaHR0cHM6Ly9jb2xsZWdlcG9vbC0xNTUyNzQ5MTE4NjE3LmZpcmViYXNlaW8uY29tXCIsXHJcbiAgICAgIHByb2plY3RJZDogXCJjb2xsZWdlcG9vbC0xNTUyNzQ5MTE4NjE3XCIsXHJcbiAgICAgIHN0b3JhZ2VCdWNrZXQ6IFwiY29sbGVnZXBvb2wtMTU1Mjc0OTExODYxNy5hcHBzcG90LmNvbVwiLFxyXG4gICAgICBtZXNzYWdpbmdTZW5kZXJJZDogXCIzNzUyNjM2ODAxODNcIixcclxuICAgICAgYXBwSUQ6IFwiY29sbGVnZXBvb2wtMTU1Mjc0OTExODYxN1wiLFxyXG4gICAgfTtcclxuXHJcbiAgICBmaXJlYmFzZS5pbml0KGZpcmViYXNlQ29uZmlnKS50aGVuKFxyXG4gICAgICAoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJmaXJlYmFzZS5pbml0IGRvbmVcIik7XHJcbiAgICAgIH0sXHJcbiAgICAgIGVycm9yID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgZmlyZWJhc2UuaW5pdCBlcnJvcjogJHtlcnJvcn1gKTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuICAgIC8vIGZpcmViYXNlLmF1dGgoKS5jcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQoJ2FkbWluJywgJ2t5dmVybjEyMycpLmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XHJcbiAgICAvLyAgIC8vIEhhbmRsZSBFcnJvcnMgaGVyZS5cclxuICAgIC8vICAgdmFyIGVycm9yQ29kZSA9IGVycm9yLmNvZGU7XHJcbiAgICAvLyAgIHZhciBlcnJvck1lc3NhZ2UgPSBlcnJvci5tZXNzYWdlO1xyXG4gICAgLy8gICAvLyAuLi5cclxuICAgIC8vIH0pO1xyXG5cclxuICB9XHJcblxyXG4gIHRvTG9nSW4oKSB7XHJcbiAgICAvLyBBdXRoLnNpZ25JbihcInBoaWxsaW1cIiwgXCJDb2xsZWdlcG9vbDY5KlwiKVxyXG4gICAgLy8gLnRoZW4odXNlciA9PiB7XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2codXNlcilcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyhcInJlZGlyZWN0aW5nXCIpXHJcblxyXG4gICAgLy8gfSlcclxuXHJcbiAgICB2YXIgY3JlZGVudGlhbHMgOiBmaXJlYmFzZS5Mb2dpbk9wdGlvbnMgPSB7XHJcbiAgICAgIHBhc3N3b3JkT3B0aW9uczoge1xyXG4gICAgICAgIGVtYWlsOiAnYWRhbS55ZWVAZ21haWwuY29tJyxcclxuICAgICAgICBwYXNzd29yZDogJ2t5dmVybjEyMycsXHJcbiAgICAgIH0sXHJcbiAgICAgIHR5cGU6IGZpcmViYXNlLkxvZ2luVHlwZS5QQVNTV09SRFxyXG4gICAgfVxyXG4gICAgZmlyZWJhc2UubG9naW4oY3JlZGVudGlhbHMpLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pXHJcbiAgICBmaXJlYmFzZS5nZXRDdXJyZW50VXNlcigpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgfSlcclxuXHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ25hdmlnYXRpb24nXSk7XHJcbiAgXHQvLyB3aW5kb3cubG9jYXRpb24uaHJlZj0naHR0cHM6Ly9jb2xsZWdlcG9vbGluZy5hdXRoLnVzLWVhc3QtMi5hbWF6b25jb2duaXRvLmNvbS9sb2dpbj9yZXNwb25zZV90eXBlPXRva2VuJmNsaWVudF9pZD00c3NsbW1ndjlwbjVsYjUwODdhYWo1cjU5OSZyZWRpcmVjdF91cmk9aHR0cDovL2xvY2FsaG9zdDo0MjAwL2xvZ2lucm91dGUmc3RhdGU9U1RBVEUmc2NvcGU9YXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4rb3BlbmlkJztcclxuICB9XHJcblxyXG4gIHRvU2lnblVwKCl7XHJcbiAgICBmaXJlYmFzZS5jcmVhdGVVc2VyKHtcclxuICAgICAgZW1haWw6ICdhZGFtLnllZUBnbWFpbC5jb20nLFxyXG4gICAgICBwYXNzd29yZDogJ2t5dmVybjEyMydcclxuICAgIH0pLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pXHJcbiAgICAvLyB0aGlzLmFmQXV0aC5hdXRoLmNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCgnYWRhbS55ZWVAZ21haWwuY29tJywgJ2t5dmVybjEyMycpO1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWyduYXZpZ2F0aW9uJ10pO1xyXG4gIFx0Ly8gd2luZG93LmxvY2F0aW9uLmhyZWY9J2h0dHBzOi8vY29sbGVnZXBvb2xpbmcuYXV0aC51cy1lYXN0LTIuYW1hem9uY29nbml0by5jb20vc2lnbnVwP3Jlc3BvbnNlX3R5cGU9dG9rZW4mY2xpZW50X2lkPTRzc2xtbWd2OXBuNWxiNTA4N2FhajVyNTk5JnJlZGlyZWN0X3VyaT1odHRwOi8vbG9jYWxob3N0OjQyMDAvbG9naW5yb3V0ZSZzdGF0ZT1TVEFURSZzY29wZT1hd3MuY29nbml0by5zaWduaW4udXNlci5hZG1pbitvcGVuaWQnO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEp3dEhlbHBlclNlcnZpY2UgfSBmcm9tICdAYXV0aDAvYW5ndWxhci1qd3QnO1xyXG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gJy4vdXNlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4vdXNlci5tb2RlbCc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFBheW1lbnRTZXJ2aWNlIH0gZnJvbSAnLi9wYXltZW50LnNlcnZpY2UnO1xyXG5pbXBvcnQgKiBhcyBmaXJlYmFzZSBmcm9tICduYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlJztcclxuaW1wb3J0ICogYXMgYXBwU2V0dGluZ3MgZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvbi1zZXR0aW5ncyc7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTG9naW5jaGVja1NlcnZpY2Uge1xyXG5cdC8vbXlTdG9yYWdlID0gd2luZG93LmxvY2FsU3RvcmFnZTtcclxuXHRteVN0b3JhZ2UgPSBudWxsO1xyXG5cdC8vdXNlciBmcm9tIGRhdGFiYXNlXHJcblx0dXNlcjtcclxuXHQvL2xpc3Qgb2YgYWxsIHVzZXJzIGZyb20gZGF0YWJhc2VcclxuXHR1c2VycztcclxuXHQvL3VzZXIgaW5mbyBmcm9tIGNvZ25pdG9cclxuXHR1c2VySW5mbyA9IG51bGw7XHJcblx0dWlkO1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlLCBwcml2YXRlIHBheW1lbnRTZXJ2aWNlOiBQYXltZW50U2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMpIHsgfVxyXG5cclxuICBhZGRVc2VyVG9GaXJlc3RvcmUodWlkLCBhZGRyZXNzLCBiaXJ0aGRhdGUsIGVtYWlsLCBmaXJzdF9uYW1lLCBsYXN0X25hbWUsIGdlbmRlciwgcGhvbmVfbnVtYmVyLCByaWRlc19naXZlbiwgcmlkZXNfcmVjZWl2ZWQsIHByb2ZpbGVfc291cmNlLCB0b2tlbikge1xyXG4gIFx0Y29uc3QgdXNlcnNDb2xsZWN0aW9uID0gZmlyZWJhc2UuZmlyZXN0b3JlLmNvbGxlY3Rpb24oJ3VzZXJzJyk7XHJcbiAgXHR1c2Vyc0NvbGxlY3Rpb24uZG9jKHVpZCkuc2V0KHtcclxuICBcdFx0YWRkcmVzczogYWRkcmVzcyxcclxuICBcdFx0YmlydGhkYXRlOiBiaXJ0aGRhdGUsXHJcbiAgXHRcdGVtYWlsOiBlbWFpbCxcclxuICBcdFx0Zmlyc3RfbmFtZTogZmlyc3RfbmFtZSxcclxuICBcdFx0bGFzdF9uYW1lOiBsYXN0X25hbWUsXHJcbiAgXHRcdGdlbmRlcjogZ2VuZGVyLFxyXG4gIFx0XHRwaG9uZV9udW1iZXI6IHBob25lX251bWJlcixcclxuICBcdFx0cmlkZXNfZ2l2ZW46IHJpZGVzX2dpdmVuLFxyXG4gIFx0XHRyaWRlc19yZWNlaXZlZDogcmlkZXNfcmVjZWl2ZWQsXHJcbiAgICAgIHByb2ZpbGVfc291cmNlOiBwcm9maWxlX3NvdXJjZSxcclxuICBcdFx0cG9zdHM6IFtdLFxyXG4gICAgICBjaGF0czogW10sXHJcbiAgICAgIHRva2VuczogW3Rva2VuXVxyXG4gIFx0fSk7XHJcbiAgfVxyXG5cclxuICBkZWNvZGVUb2tlbih0b2tlbikge1xyXG5cclxuICB9XHJcblxyXG4gIGNoZWNrVXNlcigpIHtcclxuXHJcbiAgfVxyXG5cclxuICBjbGVhckluZm8oKSB7XHJcbiAgXHR0aGlzLnVzZXIgPSBudWxsO1xyXG4gIFx0dGhpcy51c2VySW5mbyA9IG51bGw7XHJcbiAgXHR0aGlzLnVzZXJzID0gbnVsbDtcclxuICBcdHRoaXMudWlkID0gbnVsbDtcclxuICBcdGFwcFNldHRpbmdzLmNsZWFyKCk7XHJcbiAgfVxyXG4gIFxyXG4gIGFkZFVzZXJUb0JyYWludHJlZSh1c2VybmFtZSwgbmFtZSwgZW1haWwpIHtcclxuICBcdHRoaXMucGF5bWVudFNlcnZpY2UuYWRkUGF5bWVudFVzZXIodGhpcy51aWQsIHVzZXJuYW1lLCBuYW1lLCBlbWFpbCkuc3Vic2NyaWJlKChkYXRhOiBhbnkpID0+IHtcclxuICBcdFx0ZmlyZWJhc2UuZmlyZXN0b3JlLmNvbGxlY3Rpb24oJ3VzZXJzJykuZG9jKHRoaXMudWlkKS51cGRhdGUoe1xyXG4gIFx0XHRcdHBheW1lbnRfaWQ6IGRhdGEuY3VzdG9tZXIuaWRcclxuICBcdFx0fSlcclxuICBcdH0pXHJcbiAgXHQvLyB0aGlzLnBheW1lbnRTZXJ2aWNlLmdldFBheW1lbnRVc2VyQnlJZCgnMjU4NzAzOTU2Jykuc3Vic2NyaWJlKChkYXRhOiBhbnkpID0+IHtcclxuICBcdC8vIFx0Y29uc29sZS5sb2coZGF0YSk7XHJcbiAgXHQvLyB9KVxyXG4gIFx0Y29uc29sZS5sb2coJ2FkZGVkIHRvIGJyYWludHJlZScpO1xyXG4gIH1cclxuXHJcbiAgbG9naW5Vc2VyKHVpZCkge1xyXG4gIFx0YXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwidWlkXCIsIHVpZCk7XHJcbiAgXHRjb25zb2xlLmxvZyh1aWQpXHJcbiAgXHR0aGlzLnVpZCA9IHVpZDtcclxuICB9XHJcblxyXG4gIGxvZ2luQ2hlY2soKSB7XHJcblx0aWYodGhpcy5nZXRVc2VyID09IG51bGwpXHJcblx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ3dlbGNvbWUnXSwge2NsZWFySGlzdG9yeTogdHJ1ZX0pXHJcbiAgfVxyXG5cclxuICBnZXRVc2VyRnJvbUxvY2FsU3RvcmFnZSgpIHtcclxuXHRyZXR1cm4gYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwidWlkXCIpO1xyXG4gIH1cclxuXHJcbiAgZ2V0VXNlcigpIHtcclxuXHR0aGlzLnVpZCA9IHRoaXMuZ2V0VXNlckZyb21Mb2NhbFN0b3JhZ2UoKTtcclxuXHRyZXR1cm4gdGhpcy51aWQ7XHJcbiAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEp3dEhlbHBlclNlcnZpY2UgfSBmcm9tICdAYXV0aDAvYW5ndWxhci1qd3QnO1xyXG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gJy4vdXNlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4vdXNlci5tb2RlbCc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFBheW1lbnRTZXJ2aWNlIH0gZnJvbSAnLi9wYXltZW50LnNlcnZpY2UnO1xyXG5pbXBvcnQgKiBhcyBmaXJlYmFzZSBmcm9tICduYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlJztcclxuaW1wb3J0ICogYXMgYXBwU2V0dGluZ3MgZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvbi1zZXR0aW5ncyc7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTG9naW5jaGVja1NlcnZpY2Uge1xyXG5cdC8vbXlTdG9yYWdlID0gd2luZG93LmxvY2FsU3RvcmFnZTtcclxuXHRteVN0b3JhZ2UgPSBudWxsO1xyXG5cdC8vdXNlciBmcm9tIGRhdGFiYXNlXHJcblx0dXNlcjtcclxuXHQvL2xpc3Qgb2YgYWxsIHVzZXJzIGZyb20gZGF0YWJhc2VcclxuXHR1c2VycztcclxuXHQvL3VzZXIgaW5mbyBmcm9tIGNvZ25pdG9cclxuXHR1c2VySW5mbyA9IG51bGw7XHJcblx0dWlkO1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlLCBwcml2YXRlIHBheW1lbnRTZXJ2aWNlOiBQYXltZW50U2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMpIHsgfVxyXG5cclxuICBhZGRVc2VyVG9GaXJlc3RvcmUodWlkLCBhZGRyZXNzLCBiaXJ0aGRhdGUsIGVtYWlsLCBmaXJzdF9uYW1lLCBsYXN0X25hbWUsIGdlbmRlciwgcGhvbmVfbnVtYmVyLCByaWRlc19naXZlbiwgcmlkZXNfcmVjZWl2ZWQsIHByb2ZpbGVfc291cmNlLCB0b2tlbikge1xyXG4gIFx0Y29uc3QgdXNlcnNDb2xsZWN0aW9uID0gZmlyZWJhc2UuZmlyZXN0b3JlLmNvbGxlY3Rpb24oJ3VzZXJzJyk7XHJcbiAgXHR1c2Vyc0NvbGxlY3Rpb24uZG9jKHVpZCkuc2V0KHtcclxuICBcdFx0YWRkcmVzczogYWRkcmVzcyxcclxuICBcdFx0YmlydGhkYXRlOiBiaXJ0aGRhdGUsXHJcbiAgXHRcdGVtYWlsOiBlbWFpbCxcclxuICBcdFx0Zmlyc3RfbmFtZTogZmlyc3RfbmFtZSxcclxuICBcdFx0bGFzdF9uYW1lOiBsYXN0X25hbWUsXHJcbiAgXHRcdGdlbmRlcjogZ2VuZGVyLFxyXG4gIFx0XHRwaG9uZV9udW1iZXI6IHBob25lX251bWJlcixcclxuICBcdFx0cmlkZXNfZ2l2ZW46IHJpZGVzX2dpdmVuLFxyXG4gIFx0XHRyaWRlc19yZWNlaXZlZDogcmlkZXNfcmVjZWl2ZWQsXHJcbiAgICAgIHByb2ZpbGVfc291cmNlOiBwcm9maWxlX3NvdXJjZSxcclxuICBcdFx0cG9zdHM6IFtdLFxyXG4gICAgICBjaGF0czogW10sXHJcbiAgICAgIHRva2VuczogW3Rva2VuXVxyXG4gIFx0fSk7XHJcbiAgfVxyXG5cclxuICBkZWNvZGVUb2tlbih0b2tlbikge1xyXG5cclxuICB9XHJcblxyXG4gIGNoZWNrVXNlcigpIHtcclxuXHJcbiAgfVxyXG5cclxuICBjbGVhckluZm8oKSB7XHJcbiAgXHR0aGlzLnVzZXIgPSBudWxsO1xyXG4gIFx0dGhpcy51c2VySW5mbyA9IG51bGw7XHJcbiAgXHR0aGlzLnVzZXJzID0gbnVsbDtcclxuICBcdHRoaXMudWlkID0gbnVsbDtcclxuICBcdGFwcFNldHRpbmdzLmNsZWFyKCk7XHJcbiAgfVxyXG4gIFxyXG4gIGFkZFVzZXJUb0JyYWludHJlZSh1c2VybmFtZSwgbmFtZSwgZW1haWwpIHtcclxuICBcdHRoaXMucGF5bWVudFNlcnZpY2UuYWRkUGF5bWVudFVzZXIodGhpcy51aWQsIHVzZXJuYW1lLCBuYW1lLCBlbWFpbCkuc3Vic2NyaWJlKChkYXRhOiBhbnkpID0+IHtcclxuICBcdFx0ZmlyZWJhc2UuZmlyZXN0b3JlLmNvbGxlY3Rpb24oJ3VzZXJzJykuZG9jKHRoaXMudWlkKS51cGRhdGUoe1xyXG4gIFx0XHRcdHBheW1lbnRfaWQ6IGRhdGEuY3VzdG9tZXIuaWRcclxuICBcdFx0fSlcclxuICBcdH0pXHJcbiAgXHQvLyB0aGlzLnBheW1lbnRTZXJ2aWNlLmdldFBheW1lbnRVc2VyQnlJZCgnMjU4NzAzOTU2Jykuc3Vic2NyaWJlKChkYXRhOiBhbnkpID0+IHtcclxuICBcdC8vIFx0Y29uc29sZS5sb2coZGF0YSk7XHJcbiAgXHQvLyB9KVxyXG4gIFx0Y29uc29sZS5sb2coJ2FkZGVkIHRvIGJyYWludHJlZScpO1xyXG4gIH1cclxuXHJcbiAgbG9naW5Vc2VyKHVpZCkge1xyXG4gIFx0YXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwidWlkXCIsIHVpZCk7XHJcbiAgXHRjb25zb2xlLmxvZyh1aWQpXHJcbiAgXHR0aGlzLnVpZCA9IHVpZDtcclxuICB9XHJcblxyXG4gIGxvZ2luQ2hlY2soKSB7XHJcblx0aWYodGhpcy5nZXRVc2VyID09IG51bGwpXHJcblx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ3dlbGNvbWUnXSwge2NsZWFySGlzdG9yeTogdHJ1ZX0pXHJcbiAgfVxyXG5cclxuICBnZXRVc2VyRnJvbUxvY2FsU3RvcmFnZSgpIHtcclxuXHRyZXR1cm4gYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwidWlkXCIpO1xyXG4gIH1cclxuXHJcbiAgZ2V0VXNlcigpIHtcclxuXHR0aGlzLnVpZCA9IHRoaXMuZ2V0VXNlckZyb21Mb2NhbFN0b3JhZ2UoKTtcclxuXHRyZXR1cm4gdGhpcy51aWQ7XHJcbiAgfVxyXG5cclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLypcXG5BZGQgeW91ciBOYXRpdmVTY3JpcHQgc3BlY2lmaWMgc3R5bGVzIGhlcmUuXFxuVG8gbGVhcm4gbW9yZSBhYm91dCBzdHlsaW5nIGluIE5hdGl2ZVNjcmlwdCBzZWU6XFxuaHR0cHM6Ly9kb2NzLm5hdGl2ZXNjcmlwdC5vcmcvYW5ndWxhci91aS9zdHlsaW5nXFxuKi9cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8U3RhY2tMYXlvdXQ+XFxuICA8TGFiZWwgdGV4dD1cXFwibG9naW5yb3V0ZSB3b3Jrc1xcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiPjwvTGFiZWw+XFxuICA8TGFiZWwgdGV4dD1cXFwiVGhpcyBpcyBhIG1pZ3JhdGVkIGNvbXBvbmVudFxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiPjwvTGFiZWw+XFxuICA8TGFiZWwgdGV4dD1cXFwiVXBkYXRlIGl0IHRvIHByb3ZpZGUgdGhlIFVJIGVsZW1lbnRzIHJlcXVpcmVkIGluIHlvdXIgbW9iaWxlIGFwcFxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiPjwvTGFiZWw+XFxuPC9TdGFja0xheW91dD5cXG5cXG48IS0tXFxuT3JpZ2luYWwgV2ViIHRlbXBsYXRlOlxcblxcbjxwPlxcbiAgUmVkaXJlY3RpbmcuLi5cXG48L3A+XFxuXFxuLS0+XCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTG9naW5jaGVja1NlcnZpY2UgfSBmcm9tICcuLi9sb2dpbmNoZWNrLnNlcnZpY2UnO1xuaW1wb3J0IHsgVHJhbnNmZXJTZXJ2aWNlIH0gZnJvbSAnLi4vZGF0YXRyYW5zZmVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWxvZ2lucm91dGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vbG9naW5yb3V0ZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2xvZ2lucm91dGUuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIExvZ2lucm91dGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbG9naW5jaGVja1NlcnZpY2U6IExvZ2luY2hlY2tTZXJ2aWNlLCBwcml2YXRlIHRyYW5zZmVyU2VydmljZTogVHJhbnNmZXJTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7IH1cbiAgaWRUb2tlbiA9IHRoaXMuZ2V0UGFyYW1ldGVyQnlOYW1lKFwiaWRfdG9rZW5cIik7XG4gIG5nT25Jbml0KCkge1xuICBcdGlmKHRoaXMuaWRUb2tlbiA9PSBudWxsIHx8IHRoaXMuaWRUb2tlbiA9PSAnJylcbiAgXHRcdHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoJy9sb2dpbicpO1xuXG4gIFx0dGhpcy5sb2dpbmNoZWNrU2VydmljZS5kZWNvZGVUb2tlbih0aGlzLmlkVG9rZW4pO1xuICBcdHRoaXMubG9naW5jaGVja1NlcnZpY2UuY2hlY2tVc2VyKCk7XG5cbiAgfVxuXG5cdGdldFBhcmFtZXRlckJ5TmFtZShuYW1lKSB7XG5cdCAgICB2YXIgdXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XG5cdCAgICBuYW1lID0gbmFtZS5yZXBsYWNlKC9bXFxbXFxdXS9nLCBcIlxcXFwkJlwiKTtcblx0ICAgIHZhciByZWdleCA9IG5ldyBSZWdFeHAoXCJbPyYjXVwiICsgbmFtZSArIFwiKD0oW14mI10qKXwmfCN8JClcIiksXG5cdCAgICAgICAgcmVzdWx0cyA9IHJlZ2V4LmV4ZWModXJsKTtcblx0ICAgIGlmICghcmVzdWx0cykgcmV0dXJuIG51bGw7XG5cdCAgICBpZiAoIXJlc3VsdHNbMl0pIHJldHVybiAnJztcblx0ICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocmVzdWx0c1syXS5yZXBsYWNlKC9cXCsvZywgXCIgXCIpKTtcblx0fVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi8qIEFkZCBtb2JpbGUgc3R5bGVzIGZvciB0aGUgY29tcG9uZW50IGhlcmUuICAqL1xcblwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxCdXR0b24gdGV4dD1cXFwibWVzc2FnZS1tb2RhbCB3b3JrcyFcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiPjwvQnV0dG9uPlwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLW1lc3NhZ2UtbW9kYWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vbWVzc2FnZS1tb2RhbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL21lc3NhZ2UtbW9kYWwuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIE1lc3NhZ2VNb2RhbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLypcXG5BZGQgeW91ciBOYXRpdmVTY3JpcHQgc3BlY2lmaWMgc3R5bGVzIGhlcmUuXFxuVG8gbGVhcm4gbW9yZSBhYm91dCBzdHlsaW5nIGluIE5hdGl2ZVNjcmlwdCBzZWU6XFxuaHR0cHM6Ly9kb2NzLm5hdGl2ZXNjcmlwdC5vcmcvYW5ndWxhci91aS9zdHlsaW5nXFxuKi9cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8UGFnZS5hY3Rpb25CYXI+XFxyXFxuICAgIDxBY3Rpb25CYXIgdGl0bGU9XFxcInt7IGFjdGlvbkJhclRpdGxlIH19XFxcIj5cXHJcXG4gICAgXFx0PEFjdGlvbkl0ZW0gKHRhcCk9XFxcInRvTWVzc2FnZXMoKVxcXCIgaWNvbj1cXFwifi9pbWcvc2VuZF9tZXNzYWdlX2ljb24ucG5nXFxcIiBpb3MucG9zaXRpb249XFxcInJpZ2h0XFxcIiB3aWR0aD1cXFwiMjBcXFwiIGhlaWdodD1cXFwiMjBcXFwiICNhY3Rpb25JdGVtPjwvQWN0aW9uSXRlbT5cXHJcXG4gICAgPC9BY3Rpb25CYXI+XFxyXFxuPC9QYWdlLmFjdGlvbkJhcj5cXHJcXG5cXHJcXG48VGFiVmlldyBbKG5nTW9kZWwpXT1cXFwidGFiU2VsZWN0ZWRJbmRleFxcXCIgKHRhYkl0ZW1UYXApPVxcXCJob21lKClcXFwiIChzZWxlY3RlZEluZGV4Q2hhbmdlZCk9XFxcIm9uU2VsZWN0ZWRJbmRleENoYW5nZWQoJGV2ZW50KVxcXCIgYW5kcm9pZFRhYnNQb3NpdGlvbj1cXFwiYm90dG9tXFxcIiBzZWxlY3RlZFRhYlRleHRDb2xvcj1cXFwiI2FjMDBlNlxcXCIgI3RhYlZpZXc+XFxyXFxuICAgIDxQYWdlICp0YWJJdGVtPVxcXCJob21lVGFiXFxcIj5cXHJcXG4gICAgXFx0PGFwcC1ob21lPjwvYXBwLWhvbWU+XFxyXFxuICAgIDwvUGFnZT5cXHJcXG4gICAgPFBhZ2UgKnRhYkl0ZW09XFxcInNlYXJjaFRhYlxcXCI+XFxyXFxuICAgIFxcdDxhcHAtc2VhcmNoPjwvYXBwLXNlYXJjaD5cXHJcXG4gICAgPC9QYWdlPlxcclxcbiAgICA8UGFnZSAqdGFiSXRlbT1cXFwiaGlzdG9yeVRhYlxcXCI+XFxyXFxuICAgIFxcdDxhcHAtaGlzdG9yeT48L2FwcC1oaXN0b3J5PlxcclxcbiAgICA8L1BhZ2U+XFxyXFxuICAgIDxQYWdlICp0YWJJdGVtPVxcXCJzZXR0aW5nc1RhYlxcXCI+XFxyXFxuICAgIFxcdDxhcHAtc2V0dGluZ3M+PC9hcHAtc2V0dGluZ3M+XFxyXFxuICAgIDwvUGFnZT5cXHJcXG48L1RhYlZpZXc+XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuPCEtLVxcclxcbk9yaWdpbmFsIFdlYiB0ZW1wbGF0ZTpcXHJcXG5cXHJcXG48ZGl2IGNsYXNzPVxcXCJ0b3BuYXZcXFwiPlxcclxcblxcdDxkaXYgY2xhc3M9XFxcIm5hdmJ0bnNcXFwiPlxcclxcblxcdFxcdDxhIChjbGljayk9XFxcInRvSG9tZSgpXFxcIiBjbGFzcz1cXFwiYWN0aXZlIG5hdmlnYXRpb25cXFwiIGlkPVxcXCJob21lbmF2XFxcIj5Ib21lPC9hPlxcclxcblxcdFxcdDxhIChjbGljayk9XFxcInRvSGlzdG9yeSgpXFxcIiBjbGFzcz1cXFwibmF2aWdhdGlvblxcXCIgaWQ9XFxcImhpc3RvcnluYXZcXFwiPkhpc3Rvcnk8L2E+XFxyXFxuXFx0XFx0PGEgKGNsaWNrKT1cXFwidG9QYXltZW50cygpXFxcIiBjbGFzcz1cXFwibmF2aWdhdGlvblxcXCIgaWQ9XFxcInBheW1lbnRzbmF2XFxcIj5QYXltZW50czwvYT5cXHJcXG5cXHRcXHQ8YSAoY2xpY2spPVxcXCJ0b1NldHRpbmdzKClcXFwiIGNsYXNzPVxcXCJuYXZpZ2F0aW9uXFxcIiBpZD1cXFwic2V0dGluZ3NuYXZcXFwiPlNldHRpbmdzPC9hPlxcclxcblxcdFxcdDxhIChjbGljayk9XFxcInBvc3QoKVxcXCIgY2xhc3M9XFxcIm5hdmlnYXRpb25cXFwiIGlkPVxcXCJwb3N0bmF2XFxcIj5Qb3N0PC9hPlxcclxcblxcdDwvZGl2PlxcclxcblxcclxcblxcdDxkaXYgY2xhc3M9XFxcImltZ25hdlxcXCI+XFxyXFxuXFx0XFx0PGltZyBzcmM9XFxcInNyYy9pY29uLnBuZ1xcXCIgKGNsaWNrKT1cXFwiZHJvcE1lbnUoKVxcXCI+XFxyXFxuXFx0PC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuPGRpdiBjbGFzcz1cXFwiY2FyZXRcXFwiIGlkPVxcXCJkcm9wZG93bi1jYXJldFxcXCI+PC9kaXY+XFxyXFxuPGRpdiBjbGFzcz1cXFwiZHJvcGRvd25cXFwiIGlkPVxcXCJkcm9wZG93bi1tZW51XFxcIj5cXHJcXG5cXHQ8ZGl2IGNsYXNzPVxcXCJkcm9wZG93bi1vcHRpb25cXFwiIChjbGljayk9XFxcInRvSG9tZSgpXFxcIj5cXHJcXG5cXHRcXHQ8c3Bhbj5Ib21lPC9zcGFuPlxcclxcblxcdDwvZGl2PlxcclxcblxcdDxkaXYgY2xhc3M9XFxcImRyb3Bkb3duLW9wdGlvblxcXCIgKGNsaWNrKT1cXFwidG9TZXR0aW5ncygpXFxcIj5cXHJcXG5cXHRcXHQ8c3Bhbj5TZXR0aW5nczwvc3Bhbj5cXHJcXG5cXHQ8L2Rpdj5cXHJcXG5cXHQ8ZGl2IGNsYXNzPVxcXCJkcm9wZG93bi1vcHRpb25cXFwiIChjbGljayk9XFxcImxvZ291dCgpXFxcIj5cXHJcXG5cXHRcXHQ8c3Bhbj5Mb2dvdXQ8L3NwYW4+XFxyXFxuXFx0PC9kaXY+XFxyXFxuXFx0PGRpdiBjbGFzcz1cXFwiZHJvcGRvd24tb3B0aW9uIGdyb3VwLXR3b1xcXCIgKGNsaWNrKT1cXFwiZHJvcE1lbnUoKVxcXCI+XFxyXFxuXFx0XFx0PHNwYW4+Q2xvc2U8L3NwYW4+XFxyXFxuXFx0PC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuLS0+XCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRyYW5zZmVyU2VydmljZSB9IGZyb20gJy4uL2RhdGF0cmFuc2Zlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7UGFnZX0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlJztcclxuaW1wb3J0IHsgQWN0aW9uQmFyLCBBY3Rpb25JdGVtIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9hY3Rpb24tYmFyJztcclxuaW1wb3J0ICogYXMgZG9tIGZyb20gJ25hdGl2ZXNjcmlwdC1kb20nO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2J1dHRvbic7XHJcbmltcG9ydCB7IFRhYlZpZXcgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS90YWItdmlld1wiO1xyXG5pbXBvcnQgeyBTZWxlY3RlZEluZGV4Q2hhbmdlZEV2ZW50RGF0YSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3RhYi12aWV3XCI7XHJcbmltcG9ydCB7IExpc3RWaWV3IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGlzdC12aWV3XCI7XHJcbmltcG9ydCAqIGFzIGFwcGxpY2F0aW9uIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCI7XHJcbmltcG9ydCB7IEFuZHJvaWRBcHBsaWNhdGlvbiwgQW5kcm9pZEFjdGl2aXR5QmFja1ByZXNzZWRFdmVudERhdGEgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiO1xyXG5pbXBvcnQgeyBpc0FuZHJvaWQgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtbmF2aWdhdGlvbicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL25hdmlnYXRpb24uY29tcG9uZW50LnRucy5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9uYXZpZ2F0aW9uLmNvbXBvbmVudC50bnMuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIE5hdmlnYXRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRyYW5zZmVyU2VydmljZTogVHJhbnNmZXJTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSBwYWdlOiBQYWdlKSB7IH1cclxuXHJcbiAgQFZpZXdDaGlsZCgndGFiVmlldycsIHsgc3RhdGljOiB0cnVlIH0pIHR2OiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoJ2FjdGlvbkJhcicsIHsgc3RhdGljOiB0cnVlIH0pIGFiOiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoJ2FjdGlvbkl0ZW0nLCB7IHN0YXRpYzogdHJ1ZSB9KSBhaTogRWxlbWVudFJlZjtcclxuICB1c2VyO1xyXG4gIGFjdGl2ZWJ0bjtcclxuICB0YWJTZWxlY3RlZEluZGV4ID0gMDtcclxuICBhY3Rpb25CYXJUaXRsZSA9ICdIb21lJztcclxuICBob21lVGFiID0ge2ljb25Tb3VyY2U6ICdyZXM6Ly9ob21lX2hpZ2hsaWdodGVkJ307XHJcbiAgc2VhcmNoVGFiID0ge2ljb25Tb3VyY2U6ICdyZXM6Ly9zZWFyY2gnfTtcclxuICBoaXN0b3J5VGFiID0ge2ljb25Tb3VyY2U6ICdyZXM6Ly9oaXN0b3J5J307XHJcbiAgc2V0dGluZ3NUYWIgPSB7aWNvblNvdXJjZTogJ3JlczovL3NldHRpbmdzJ307XHJcbiAgYWN0aW9uSXRlbSA6IEFjdGlvbkl0ZW07XHJcblxyXG4gIC8vIEBWaWV3Q2hpbGQoJ2xpc3RWaWV3JykgbHY6IEVsZW1lbnRSZWY7XHJcbiAgLy8gbGlzdFZpZXcgPSA8TGlzdFZpZXc+IHRoaXMubHYubmF0aXZlRWxlbWVudDtcclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmFjdGlvbkl0ZW0gPSA8QWN0aW9uSXRlbT4gdGhpcy5haS5uYXRpdmVFbGVtZW50O1xyXG5cclxuICBcdHRoaXMuYWN0aXZlYnRuID0gdGhpcy50cmFuc2ZlclNlcnZpY2UuZ2V0RGF0YSgpO1xyXG4gIFx0aWYodGhpcy5hY3RpdmVidG4gPT0gXCJob21lbmF2XCIpIHtcclxuICAgICAgdGhpcy5ob21lVGFiID0ge2ljb25Tb3VyY2U6ICdyZXM6Ly9ob21lX2hpZ2hsaWdodGVkJ307XHJcbiAgICAgIHRoaXMuc2VhcmNoVGFiID0ge2ljb25Tb3VyY2U6ICdyZXM6Ly9zZWFyY2gnfTtcclxuICAgICAgdGhpcy5oaXN0b3J5VGFiID0ge2ljb25Tb3VyY2U6ICdyZXM6Ly9oaXN0b3J5J307XHJcbiAgICAgIHRoaXMuc2V0dGluZ3NUYWIgPSB7aWNvblNvdXJjZTogJ3JlczovL3NldHRpbmdzJ307XHJcbiAgICAgIHRoaXMuYWN0aW9uSXRlbS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xyXG4gICAgICB0aGlzLnRhYlNlbGVjdGVkSW5kZXggPSAwO1xyXG4gIFx0fSBlbHNlIGlmKHRoaXMuYWN0aXZlYnRuID09IFwic2VhcmNobmF2XCIpIHtcclxuICAgICAgdGhpcy5ob21lVGFiID0ge2ljb25Tb3VyY2U6ICdyZXM6Ly9ob21lJ307XHJcbiAgICAgIHRoaXMuc2VhcmNoVGFiID0ge2ljb25Tb3VyY2U6ICdyZXM6Ly9zZWFyY2hfaGlnaGxpZ2h0ZWQnfTtcclxuICAgICAgdGhpcy5oaXN0b3J5VGFiID0ge2ljb25Tb3VyY2U6ICdyZXM6Ly9oaXN0b3J5J307XHJcbiAgICAgIHRoaXMuc2V0dGluZ3NUYWIgPSB7aWNvblNvdXJjZTogJ3JlczovL3NldHRpbmdzJ307XHJcbiAgICAgIHRoaXMuYWN0aW9uSXRlbS52aXNpYmlsaXR5ID0gJ2NvbGxhcHNlJztcclxuICAgICAgdGhpcy50YWJTZWxlY3RlZEluZGV4ID0gMTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYodGhpcy5hY3RpdmVidG4gPT0gXCJoaXN0b3J5bmF2XCIpIHtcclxuICAgICAgdGhpcy5ob21lVGFiID0ge2ljb25Tb3VyY2U6ICdyZXM6Ly9ob21lJ307XHJcbiAgICAgIHRoaXMuc2VhcmNoVGFiID0ge2ljb25Tb3VyY2U6ICdyZXM6Ly9zZWFyY2gnfTtcclxuICAgICAgdGhpcy5oaXN0b3J5VGFiID0ge2ljb25Tb3VyY2U6ICdyZXM6Ly9oaXN0b3J5X2hpZ2hsaWdodGVkJ307XHJcbiAgICAgIHRoaXMuc2V0dGluZ3NUYWIgPSB7aWNvblNvdXJjZTogJ3JlczovL3NldHRpbmdzJ307XHJcbiAgICAgIHRoaXMuYWN0aW9uSXRlbS52aXNpYmlsaXR5ID0gJ2NvbGxhcHNlJztcclxuICAgICAgdGhpcy50YWJTZWxlY3RlZEluZGV4ID0gMjtcclxuICAgIH1cclxuICAgIGVsc2UgaWYodGhpcy5hY3RpdmVidG4gPT0gXCJzZXR0aW5nc25hdlwiKSB7XHJcbiAgICAgIHRoaXMuaG9tZVRhYiA9IHtpY29uU291cmNlOiAncmVzOi8vaG9tZSd9O1xyXG4gICAgICB0aGlzLnNlYXJjaFRhYiA9IHtpY29uU291cmNlOiAncmVzOi8vc2VhcmNoJ307XHJcbiAgICAgIHRoaXMuaGlzdG9yeVRhYiA9IHtpY29uU291cmNlOiAncmVzOi8vaGlzdG9yeSd9O1xyXG4gICAgICB0aGlzLnNldHRpbmdzVGFiID0ge2ljb25Tb3VyY2U6ICdyZXM6Ly9zZXR0aW5nc19oaWdobGlnaHRlZCd9O1xyXG4gICAgICB0aGlzLmFjdGlvbkl0ZW0udmlzaWJpbGl0eSA9ICdjb2xsYXBzZSc7XHJcbiAgICAgIHRoaXMudGFiU2VsZWN0ZWRJbmRleCA9IDM7XHJcbiAgICB9XHJcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnRhYlNlbGVjdGVkSW5kZXgpXHJcblxyXG4gICAgLy8gdmFyIGp1c3RTZXQgPSBmYWxzZTtcclxuXHJcbiAgICAvLyBpZihpc0FuZHJvaWQpXHJcbiAgICAvLyAgIGFwcGxpY2F0aW9uLmFuZHJvaWQub24oQW5kcm9pZEFwcGxpY2F0aW9uLmFjdGl2aXR5QmFja1ByZXNzZWRFdmVudCwgKGRhdGE6IEFuZHJvaWRBY3Rpdml0eUJhY2tQcmVzc2VkRXZlbnREYXRhKSA9PiB7XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2codGhpcy50YWJTZWxlY3RlZEluZGV4KVxyXG4gICAgLy8gICBpZiAodGhpcy50YWJTZWxlY3RlZEluZGV4ID09PSAwICYmICFqdXN0U2V0KSB7XHJcbiAgICAvLyAgICAgYXBwbGljYXRpb24uYW5kcm9pZC5mb3JlZ3JvdW5kQWN0aXZpdHkuZmluaXNoKCk7XHJcbiAgICAvLyAgIH1cclxuICAgIC8vICAgZWxzZSB7XHJcbiAgICAvLyAgICAgdGhpcy50di5uYXRpdmVFbGVtZW50LnNlbGVjdGVkSW5kZXggPSAwO1xyXG4gICAgLy8gICAgIGp1c3RTZXQgPSB0cnVlO1xyXG4gICAgLy8gICAgIHNldFRpbWVvdXQoKCkgPT4ge2p1c3RTZXQgPSBmYWxzZX0sIDUwMCk7XHJcbiAgICAvLyAgIH1cclxuICAgIC8vIH0pO1xyXG4gIH1cclxuICBwYWludEFjdGl2ZShidG4pIHtcclxuICBcdGNvbnN0IG5hdmNvbnRlbnRzID0gZG9tLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25hdmlnYXRpb24nKVxyXG4gICAgZm9yKHZhciB4ID0gMDsgeCA8IG5hdmNvbnRlbnRzLmxlbmd0aDsgeCsrKVxyXG4gICAge1xyXG4gICAgICAgIG5hdmNvbnRlbnRzW3hdLmNsYXNzTmFtZSA9ICduYXZpZ2F0aW9uJztcclxuICAgIH1cclxuICAgIGNvbnN0IGJ1dHRvbiA9IDxCdXR0b24+dGhpcy5wYWdlLmdldFZpZXdCeUlkKGJ0bik7XHJcbiAgICBidXR0b24uY2xhc3NOYW1lICs9ICcgYWN0aXZlJztcclxuXHJcbiAgfVxyXG5cclxuICBvblNlbGVjdGVkSW5kZXhDaGFuZ2VkKGFyZ3M6IFNlbGVjdGVkSW5kZXhDaGFuZ2VkRXZlbnREYXRhKSB7XHJcbiAgICAgICAgaWYgKGFyZ3Mub2xkSW5kZXggIT09IC0xKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld0luZGV4ID0gYXJncy5uZXdJbmRleDtcclxuICAgICAgICAgICAgaWYgKG5ld0luZGV4ID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGlvbkJhclRpdGxlID0gJ0hvbWUnO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50b0hvbWUoKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChuZXdJbmRleCA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hY3Rpb25CYXJUaXRsZSA9ICdTZWFyY2gnO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50b1NlYXJjaCgpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG5ld0luZGV4ID09PSAyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGlvbkJhclRpdGxlID0gJ1lvdXIgcG9zdHMnO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50b0hpc3RvcnkoKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChuZXdJbmRleCA9PT0gMykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hY3Rpb25CYXJUaXRsZSA9ICdTZXR0aW5ncyc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvU2V0dGluZ3MoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgaG9tZSgpIHtcclxuICAgIGlmKHRoaXMudGFiU2VsZWN0ZWRJbmRleCA9PSAwKVxyXG4gICAge1xyXG4gICAgICBsZXQgbGlzdFZpZXcgPSA8TGlzdFZpZXc+IHRoaXMucGFnZS5nZXRWaWV3QnlJZCgnbGlzdFZpZXcnKTtcclxuICAgICAgbGlzdFZpZXcuc2Nyb2xsVG9JbmRleCgwKTtcclxuICAgIH1cclxuICAgIHRoaXMuYWN0aW9uSXRlbS52aXNpYmlsaXR5ID0gJ2NvbGxhcHNlJztcclxuICB9XHJcblxyXG4gIHRvSG9tZSgpIHtcclxuICBcdC8vIHRoaXMudHJhbnNmZXJTZXJ2aWNlLnNldERhdGEoJ2hvbWVuYXYnKTtcclxuXHQgIC8vIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnaG9tZSddKTtcclxuICAgIHRoaXMuaG9tZVRhYiA9IHtpY29uU291cmNlOiAncmVzOi8vaG9tZV9oaWdobGlnaHRlZCd9O1xyXG4gICAgdGhpcy5zZWFyY2hUYWIgPSB7aWNvblNvdXJjZTogJ3JlczovL3NlYXJjaCd9O1xyXG4gICAgdGhpcy5oaXN0b3J5VGFiID0ge2ljb25Tb3VyY2U6ICdyZXM6Ly9oaXN0b3J5J307XHJcbiAgICB0aGlzLnNldHRpbmdzVGFiID0ge2ljb25Tb3VyY2U6ICdyZXM6Ly9zZXR0aW5ncyd9O1xyXG4gICAgdGhpcy5hY3Rpb25JdGVtLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XHJcbiAgICB0aGlzLnRhYlNlbGVjdGVkSW5kZXggPSAwO1xyXG4gIH1cclxuXHJcbiAgdG9TZWFyY2goKVxyXG5cdHtcclxuXHRcdC8vIHRoaXMudHJhbnNmZXJTZXJ2aWNlLnNldERhdGEoJ2hpc3RvcnluYXYnKTtcclxuXHRcdC8vIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnaGlzdG9yeSddKTtcclxuICAgIHRoaXMuaG9tZVRhYiA9IHtpY29uU291cmNlOiAncmVzOi8vaG9tZSd9O1xyXG4gICAgdGhpcy5zZWFyY2hUYWIgPSB7aWNvblNvdXJjZTogJ3JlczovL3NlYXJjaF9oaWdobGlnaHRlZCd9O1xyXG4gICAgdGhpcy5oaXN0b3J5VGFiID0ge2ljb25Tb3VyY2U6ICdyZXM6Ly9oaXN0b3J5J307XHJcbiAgICB0aGlzLnNldHRpbmdzVGFiID0ge2ljb25Tb3VyY2U6ICdyZXM6Ly9zZXR0aW5ncyd9O1xyXG4gICAgdGhpcy5hY3Rpb25JdGVtLnZpc2liaWxpdHkgPSAnY29sbGFwc2UnO1xyXG4gICAgdGhpcy50YWJTZWxlY3RlZEluZGV4ID0gMTtcclxuXHR9XHJcblxyXG5cdHRvSGlzdG9yeSgpXHJcblx0e1xyXG5cdFx0Ly8gdGhpcy50cmFuc2ZlclNlcnZpY2Uuc2V0RGF0YSgnc2V0dGluZ3NuYXYnKTtcclxuXHRcdC8vIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnc2V0dGluZ3MnXSk7XHJcbiAgICB0aGlzLmhvbWVUYWIgPSB7aWNvblNvdXJjZTogJ3JlczovL2hvbWUnfTtcclxuICAgIHRoaXMuc2VhcmNoVGFiID0ge2ljb25Tb3VyY2U6ICdyZXM6Ly9zZWFyY2gnfTtcclxuICAgIHRoaXMuaGlzdG9yeVRhYiA9IHtpY29uU291cmNlOiAncmVzOi8vaGlzdG9yeV9oaWdobGlnaHRlZCd9O1xyXG4gICAgdGhpcy5zZXR0aW5nc1RhYiA9IHtpY29uU291cmNlOiAncmVzOi8vc2V0dGluZ3MnfTtcclxuICAgIHRoaXMuYWN0aW9uSXRlbS52aXNpYmlsaXR5ID0gJ2NvbGxhcHNlJztcclxuICAgIHRoaXMudGFiU2VsZWN0ZWRJbmRleCA9IDI7XHJcblx0fVxyXG5cclxuICB0b1NldHRpbmdzKClcclxuICB7XHJcbiAgICAvLyB0aGlzLnRyYW5zZmVyU2VydmljZS5zZXREYXRhKCdzZWFyY2huYXYnKTtcclxuICAgIC8vIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnc2VhcmNoJ10pO1xyXG4gICAgdGhpcy5ob21lVGFiID0ge2ljb25Tb3VyY2U6ICdyZXM6Ly9ob21lJ307XHJcbiAgICB0aGlzLnNlYXJjaFRhYiA9IHtpY29uU291cmNlOiAncmVzOi8vc2VhcmNoJ307XHJcbiAgICB0aGlzLmhpc3RvcnlUYWIgPSB7aWNvblNvdXJjZTogJ3JlczovL2hpc3RvcnknfTtcclxuICAgIHRoaXMuc2V0dGluZ3NUYWIgPSB7aWNvblNvdXJjZTogJ3JlczovL3NldHRpbmdzX2hpZ2hsaWdodGVkJ307XHJcbiAgICB0aGlzLmFjdGlvbkl0ZW0udmlzaWJpbGl0eSA9ICdjb2xsYXBzZSc7XHJcbiAgICB0aGlzLnRhYlNlbGVjdGVkSW5kZXggPSAzO1xyXG4gIH1cclxuXHJcbiAgdG9NZXNzYWdlcygpXHJcbiAge1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydjaGF0LWxpc3QnXSlcclxuICB9XHJcblxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCIvKiBBZGQgbW9iaWxlIHN0eWxlcyBmb3IgdGhlIGNvbXBvbmVudCBoZXJlLiAgKi9cXG4ucmVtb3ZlLXBheW1lbnQtbGFiZWwge1xcblxcdGZvbnQtc2l6ZTogMTY7XFxuXFx0Y29sb3I6ICNhYzAwZTY7XFxuXFx0bWFyZ2luLWxlZnQ6IDE4O1xcblxcdHRleHQtYWxpZ246IGxlZnQ7XFxuXFx0cGFkZGluZzogMTg7XFxufVxcblxcbi5pbmZvLWxhYmVsIHtcXG5cXHRjb2xvcjogYmxhY2s7XFxuXFx0Zm9udC1zaXplOiAyNDtcXG5cXHR0ZXh0LWFsaWduOiBsZWZ0O1xcblxcdG1hcmdpbi1sZWZ0OiAzNjtcXG5cXHRtYXJnaW4tdG9wOiAzNjtcXG59XFxuXFxuLmRldGFpbHMtbGFiZWwge1xcblxcdGNvbG9yOiBibGFjaztcXG5cXHRmb250LXNpemU6IDE2O1xcblxcdHRleHQtYWxpZ246IGxlZnQ7XFxuXFx0bWFyZ2luLWxlZnQ6IDM2O1xcblxcdG1hcmdpbi10b3A6IDE4O1xcblxcdG1hcmdpbi1ib3R0b206IDcyO1xcbn1cXG5cXG4uYWN0aXZpdHktaW5kaWNhdG9yIHtcXG5cXHRjb2xvcjogI2FjMDBlNjtcXG59XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPFBhZ2U+XFxyXFxuXFx0PFBhZ2UuYWN0aW9uQmFyPlxcclxcblxcdFxcdDxBY3Rpb25CYXIgdGl0bGU9XFxcIlBheW1lbnQgSW5mb1xcXCI+XFxyXFxuXFx0XFx0ICA8TmF2aWdhdGlvbkJ1dHRvbiB0ZXh0PVxcXCJHbyBCYWNrXFxcIiBhbmRyb2lkLnN5c3RlbUljb249XFxcImljX21lbnVfYmFja1xcXCIgKHRhcCk9XFxcIm9uTmF2QnRuVGFwKClcXFwiPjwvTmF2aWdhdGlvbkJ1dHRvbj5cXHJcXG5cXHRcXHQ8L0FjdGlvbkJhcj5cXHJcXG5cXHQ8L1BhZ2UuYWN0aW9uQmFyPlxcclxcblxcclxcblxcdDxTdGFja0xheW91dCAjaW5mb0NvbnRhaW5lcj5cXHJcXG5cXHRcXHQ8U3RhY2tMYXlvdXQ+XFxyXFxuXFx0XFx0XFx0PExhYmVsIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiB0ZXh0PVxcXCJ7eyBwYXltZW50SW5mby50eXBlIH19XFxcIiBjbGFzcz1cXFwiaW5mby1sYWJlbFxcXCI+PC9MYWJlbD5cXHJcXG5cXHRcXHRcXHQ8TGFiZWwgdGV4dFdyYXA9XFxcInRydWVcXFwiIHRleHQ9XFxcInt7IHBheW1lbnRJbmZvLmluZm8gfX1cXFwiIGNsYXNzPVxcXCJkZXRhaWxzLWxhYmVsXFxcIj48L0xhYmVsPlxcclxcblxcdFxcdDwvU3RhY2tMYXlvdXQ+XFxyXFxuXFx0XFx0PFN0YWNrTGF5b3V0ICh0YXApPVxcXCJyZW1vdmUoKVxcXCI+XFxyXFxuXFx0XFx0XFx0PExhYmVsIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiB0ZXh0PVxcXCJSZW1vdmVcXFwiIGNsYXNzPVxcXCJyZW1vdmUtcGF5bWVudC1sYWJlbFxcXCI+PC9MYWJlbD5cXHJcXG5cXHRcXHQ8L1N0YWNrTGF5b3V0PiAgXFxyXFxuXFx0PC9TdGFja0xheW91dD5cXHJcXG48L1BhZ2U+XFxyXFxuPEFjdGl2aXR5SW5kaWNhdG9yIHJvdz1cXFwiMVxcXCIgI2FjdGl2aXR5SW5kaWNhdG9yIGJ1c3k9XFxcImZhbHNlXFxcIiB3aWR0aD1cXFwiNDBcXFwiIGhlaWdodD1cXFwiNDBcXFwiIGNsYXNzPVxcXCJhY3Rpdml0eS1pbmRpY2F0b3JcXFwiPlxcclxcbjwvQWN0aXZpdHlJbmRpY2F0b3I+XCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRyYW5zZmVyU2VydmljZSB9IGZyb20gJy4uL2RhdGF0cmFuc2Zlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUGF5bWVudFNlcnZpY2UgfSBmcm9tICcuLi9wYXltZW50LnNlcnZpY2UudG5zJztcclxuXHJcbi8vIGltcG9ydCB7IE1vZGFsRGlhbG9nUGFyYW1zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2RpcmVjdGl2ZXMvZGlhbG9nc1wiO1xyXG5pbXBvcnQgeyBNb2RhbERpYWxvZ1NlcnZpY2UgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZGlyZWN0aXZlcy9kaWFsb2dzXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBDb25maXJtYXRpb25Db21wb25lbnQgfSBmcm9tICcuLi9jb25maXJtYXRpb24vY29uZmlybWF0aW9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IGlzQW5kcm9pZCwgaXNJT1MsIGRldmljZSwgc2NyZWVuIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybSc7XHJcbmltcG9ydCB7IGFuZHJvaWQgYXMgYW5kcm9pZEFwcCwgaW9zIGFzIGlvc0FwcCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCI7XHJcbmltcG9ydCB7IEFjdGl2aXR5SW5kaWNhdG9yIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9hY3Rpdml0eS1pbmRpY2F0b3InO1xyXG5pbXBvcnQgeyBTdGFja0xheW91dCB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvbGF5b3V0cy9zdGFjay1sYXlvdXQnO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLXBheW1lbnQtaW5mbycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3BheW1lbnQtaW5mby5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vcGF5bWVudC1pbmZvLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGF5bWVudEluZm9Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRyYW5zZmVyU2VydmljZTogVHJhbnNmZXJTZXJ2aWNlLCBwcml2YXRlIHBheW1lbnRTZXJ2aWNlOiBQYXltZW50U2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMsXHJcbiAgXHRwcml2YXRlIHZjUmVmOiBWaWV3Q29udGFpbmVyUmVmLCBwcml2YXRlIG1vZGFsOiBNb2RhbERpYWxvZ1NlcnZpY2UpIHsgfVxyXG5cclxuICBAVmlld0NoaWxkKCdhY3Rpdml0eUluZGljYXRvcicsIHsgc3RhdGljOiB0cnVlIH0pIGFJOiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoJ2luZm9Db250YWluZXInLCB7IHN0YXRpYzogdHJ1ZSB9KSBpQzogRWxlbWVudFJlZjtcclxuICBcclxuXHJcbiAgcGF5bWVudEluZm8gPSB7XHJcbiAgXHRwYXltZW50VHlwZTogXCJsb2FkaW5nXCIsXHJcbiAgXHRpbmZvOiBcImxvYWRpbmdcIixcclxuICBcdGlkVG9rZW46IFwibG9hZGluZ1wiLFxyXG4gIFx0dHlwZTogXCJsb2FkaW5nXCJcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIFx0dGhpcy5wYXltZW50SW5mbyA9IHRoaXMudHJhbnNmZXJTZXJ2aWNlLmdldERhdGEoKTtcclxuICBcdC8vIGNvbnNvbGUubG9nKHRoaXMucGF5bWVudEluZm8pO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlKCkge1xyXG4gIFx0bGV0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgY29udGV4dDoge30sXHJcbiAgICAgICAgZnVsbHNjcmVlbjogZmFsc2UsXHJcbiAgICAgICAgdmlld0NvbnRhaW5lclJlZjogdGhpcy52Y1JlZixcclxuICAgICAgICBhbmltYXRlZDogdHJ1ZSxcclxuICAgICAgICAvLyB0cmFuc2l0aW9uOiB7IG5hbWU6IFwic2xpZGVUb3BcIiB9XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICB0aGlzLm1vZGFsLnNob3dNb2RhbChDb25maXJtYXRpb25Db21wb25lbnQsIG9wdGlvbnMpLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgIFx0aWYocmVzdWx0ID09IFwiZGVsZXRlXCIpIHtcclxuICAgIFx0XHR2YXIgaW5mb0NvbnRhaW5lciA9IDxTdGFja0xheW91dD4gdGhpcy5pQy5uYXRpdmVFbGVtZW50O1xyXG4gICAgXHRcdGluZm9Db250YWluZXIuc3R5bGUudmlzaWJpbGl0eSA9IFwiY29sbGFwc2VcIjtcclxuICAgIFx0XHR0aGlzLnNob3dCdXN5KCk7XHJcbiAgICBcdFx0dGhpcy5wYXltZW50U2VydmljZS5yZW1vdmVQYXltZW50TWV0aG9kRnJvbVVzZXIodGhpcy5wYXltZW50SW5mby5pZFRva2VuKS5zdWJzY3JpYmUoKHJlcykgPT4ge1xyXG5cdFx0XHQgIFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUoWydwYXltZW50cyddKTtcclxuXHRcdCAgXHR9KTtcclxuICAgIFx0fVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBvbk5hdkJ0blRhcCgpIHtcclxuICBcdHRoaXMucm91dGVyLm5hdmlnYXRlKFsncGF5bWVudHMnXSk7XHJcbiAgfVxyXG5cclxuICBzaG93QnVzeSgpIHtcclxuICBcdHZhciBhY3Rpdml0eUluZGljYXRvciA9IDxBY3Rpdml0eUluZGljYXRvcj4gdGhpcy5hSS5uYXRpdmVFbGVtZW50O1xyXG4gIFx0YWN0aXZpdHlJbmRpY2F0b3IuYnVzeSA9IHRydWU7XHJcbiAgfVxyXG5cclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLypcXG5BZGQgeW91ciBOYXRpdmVTY3JpcHQgc3BlY2lmaWMgc3R5bGVzIGhlcmUuXFxuVG8gbGVhcm4gbW9yZSBhYm91dCBzdHlsaW5nIGluIE5hdGl2ZVNjcmlwdCBzZWU6XFxuaHR0cHM6Ly9kb2NzLm5hdGl2ZXNjcmlwdC5vcmcvYW5ndWxhci91aS9zdHlsaW5nXFxuKi9cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8U3RhY2tMYXlvdXQ+XFxuICA8TGFiZWwgdGV4dD1cXFwicGF5bWVudC1tZXRob2Qgd29ya3NcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIj48L0xhYmVsPlxcbiAgPExhYmVsIHRleHQ9XFxcIlRoaXMgaXMgYSBtaWdyYXRlZCBjb21wb25lbnRcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIj48L0xhYmVsPlxcbiAgPExhYmVsIHRleHQ9XFxcIlVwZGF0ZSBpdCB0byBwcm92aWRlIHRoZSBVSSBlbGVtZW50cyByZXF1aXJlZCBpbiB5b3VyIG1vYmlsZSBhcHBcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIj48L0xhYmVsPlxcbjwvU3RhY2tMYXlvdXQ+XFxuXFxuPCEtLVxcbk9yaWdpbmFsIFdlYiB0ZW1wbGF0ZTpcXG5cXG48ZGl2IGNsYXNzPVxcXCJwYXltZW50LW1ldGhvZFxcXCI+XFxyXFxuXFx0PHNwYW4gY2xhc3M9XFxcInBheW1lbnQtdHlwZS1pY29uXFxcIj48L3NwYW4+XFxyXFxuXFx0PHNwYW4gY2xhc3M9XFxcInBheW1lbnQtdHlwZS1kZXRhaWxzXFxcIj48L3NwYW4+XFxyXFxuPC9kaXY+XFxuLS0+XCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtcGF5bWVudC1tZXRob2QnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wYXltZW50LW1ldGhvZC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vcGF5bWVudC1tZXRob2QuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQYXltZW50TWV0aG9kQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQYXltZW50U2VydmljZSB7XHJcbiAgLy8gdXJpID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6NDAwMCc7XHJcbiAgLy9BZGFtJ3MgVGVzdGluZyBTZXJ2ZXJcclxuICAvLyB1cmkgPSAnaHR0cDovLzE5Mi4xNjguMS43OjQwMDAnO1xyXG4gIC8vUGhpbGxpcCdzIFRlc3RpbmcgU2VydmVyXHJcblx0Ly8gdXJpID0gJ2h0dHA6Ly8xOTIuMTY4LjEuMzo0MDAwJztcclxuICAvL0ZpcmViYXNlIGNsb3VkIGZ1bmN0aW9uc1xyXG4gIHVyaSA9ICdodHRwczovL3VzLWNlbnRyYWwxLWNvbGxlZ2Vwb29sLTE1NTI3NDkxMTg2MTcuY2xvdWRmdW5jdGlvbnMubmV0JztcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7IH1cclxuXHJcbiAgYWRkUGF5bWVudFVzZXIoaWQsIHVzZXJuYW1lLCBuYW1lLCBlbWFpbCkge1xyXG4gICAgLy8gY29uc29sZS5sb2coYCR7dGhpcy51cml9L2FkZEN1c3RvbWVyLyR7dXNlcm5hbWV9YClcclxuICBcdC8vIHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke3RoaXMudXJpfS9jdXN0b21lcnMvYWRkLyR7dXNlcm5hbWV9YCk7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldChgJHt0aGlzLnVyaX0vYWRkQ3VzdG9tZXI/dXNlcm5hbWU9JHt1c2VybmFtZX1gKTtcclxuICB9XHJcblxyXG4gIGdldFBheW1lbnRVc2VyQnlJZChpZCkge1xyXG4gICAgLy8gcmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy51cml9L2N1c3RvbWVycy8ke2lkfWApO1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy51cml9L2dldEN1c3RvbWVyP2lkPSR7aWR9YCk7XHJcbiAgfVxyXG5cclxuICBhZGRQYXltZW50TWV0aG9kVG9Vc2VyKGlkLCBub25jZSkge1xyXG4gIFx0Y29uc3QgYm9keSA9IHtcclxuICBcdFx0aWQ6IGlkLFxyXG4gIFx0XHRub25jZTogbm9uY2VcclxuICBcdH07XHJcbiAgXHQvLyByZXR1cm4gdGhpcy5odHRwLnBvc3QoYGh0dHA6Ly8xOTIuMTY4LjEuNzo0MDAwL2N1c3RvbWVycy9wYXltZW50L2AsIGJvZHkpO1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KGAke3RoaXMudXJpfS9hZGRQYXltZW50P2AsIGJvZHkpXHJcbiAgfVxyXG5cclxuICByZW1vdmVQYXltZW50TWV0aG9kRnJvbVVzZXIodG9rZW4pIHtcclxuICBcdHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke3RoaXMudXJpfS9yZW1vdmVQYXltZW50P3Rva2VuPSR7dG9rZW59YCk7XHJcbiAgfVxyXG5cclxuICBnZXRJZFRva2VuKGlkKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldChgJHt0aGlzLnVyaX0vZ2V0VG9rZW4/aWQ9JHtpZH1gKTtcclxuICB9XHJcbiAgXHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUGF5bWVudFNlcnZpY2Uge1xyXG4gIC8vIHVyaSA9ICdodHRwOi8vbG9jYWxob3N0OjQwMDAnO1xyXG4gIC8vQWRhbSdzIFRlc3RpbmcgU2VydmVyXHJcbiAgLy8gdXJpID0gJ2h0dHA6Ly8xOTIuMTY4LjEuNzo0MDAwJztcclxuICAvL1BoaWxsaXAncyBUZXN0aW5nIFNlcnZlclxyXG5cdC8vIHVyaSA9ICdodHRwOi8vMTkyLjE2OC4xLjM6NDAwMCc7XHJcbiAgLy9GaXJlYmFzZSBjbG91ZCBmdW5jdGlvbnNcclxuICB1cmkgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1jb2xsZWdlcG9vbC0xNTUyNzQ5MTE4NjE3LmNsb3VkZnVuY3Rpb25zLm5ldCc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkgeyB9XHJcblxyXG4gIGFkZFBheW1lbnRVc2VyKGlkLCB1c2VybmFtZSwgbmFtZSwgZW1haWwpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKGAke3RoaXMudXJpfS9hZGRDdXN0b21lci8ke3VzZXJuYW1lfWApXHJcbiAgXHQvLyByZXR1cm4gdGhpcy5odHRwLmdldChgJHt0aGlzLnVyaX0vY3VzdG9tZXJzL2FkZC8ke3VzZXJuYW1lfWApO1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy51cml9L2FkZEN1c3RvbWVyP3VzZXJuYW1lPSR7dXNlcm5hbWV9YCk7XHJcbiAgfVxyXG5cclxuICBnZXRQYXltZW50VXNlckJ5SWQoaWQpIHtcclxuICAgIC8vIHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke3RoaXMudXJpfS9jdXN0b21lcnMvJHtpZH1gKTtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke3RoaXMudXJpfS9nZXRDdXN0b21lcj9pZD0ke2lkfWApO1xyXG4gIH1cclxuXHJcbiAgYWRkUGF5bWVudE1ldGhvZFRvVXNlcihpZCwgbm9uY2UpIHtcclxuICBcdGNvbnN0IGJvZHkgPSB7XHJcbiAgXHRcdGlkOiBpZCxcclxuICBcdFx0bm9uY2U6IG5vbmNlXHJcbiAgXHR9O1xyXG4gIFx0Ly8gcmV0dXJuIHRoaXMuaHR0cC5wb3N0KGBodHRwOi8vMTkyLjE2OC4xLjc6NDAwMC9jdXN0b21lcnMvcGF5bWVudC9gLCBib2R5KTtcclxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChgJHt0aGlzLnVyaX0vYWRkUGF5bWVudD9gLCBib2R5KVxyXG4gIH1cclxuXHJcbiAgcmVtb3ZlUGF5bWVudE1ldGhvZEZyb21Vc2VyKHRva2VuKSB7XHJcbiAgXHRyZXR1cm4gdGhpcy5odHRwLmdldChgJHt0aGlzLnVyaX0vcmVtb3ZlUGF5bWVudD90b2tlbj0ke3Rva2VufWApO1xyXG4gIH1cclxuXHJcbiAgZ2V0SWRUb2tlbihpZCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy51cml9L2dldFRva2VuP2lkPSR7aWR9YCk7XHJcbiAgfVxyXG4gIFxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCIucGF5bWVudC10eXBlLWljb24ge1xcclxcblxcdGhlaWdodDogMzQ7XFxyXFxuXFx0d2lkdGg6IDM0O1xcclxcblxcdGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG5cXHRtYXJnaW4tdG9wOiAxODtcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiAxODtcXHJcXG5cXHRtYXJnaW4tbGVmdDogMzY7XFxyXFxufVxcclxcblxcclxcbi5wYXltZW50LWluZm8tbGFiZWwge1xcclxcblxcdGZvbnQtc2l6ZTogMTY7XFxyXFxuXFx0Lypmb250LXdlaWdodDogNzAwOyovXFxyXFxuXFx0cGFkZGluZzogMzA7XFxyXFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcdGNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1wYXltZW50LWxhYmVsIHtcXHJcXG5cXHRmb250LXNpemU6IDE2O1xcclxcblxcdGNvbG9yOiAjYWMwMGU2O1xcclxcblxcdG1hcmdpbi1sZWZ0OiAzNjtcXHJcXG5cXHR0ZXh0LWFsaWduOiBsZWZ0O1xcclxcblxcdHBhZGRpbmc6IDE4O1xcclxcbn1cXHJcXG5cXHJcXG4uY3JlZGl0LWNhcmQtaWNvbiB7XFxyXFxuXFx0Y29udGVudDogdXJsKFxcXCJ+L2ltZy9jcmVkaXQtY2FyZC1pY29uLnBuZ1xcXCIpO1xcclxcbn1cXHJcXG5cXHJcXG4ucGF5cGFsLWljb24ge1xcclxcblxcdGNvbnRlbnQ6IHVybChcXFwifi9pbWcvcGF5cGFsLWljb24ucG5nXFxcIik7XFxyXFxufVxcclxcblxcclxcbi52ZW5tby1pY29uIHtcXHJcXG5cXHRjb250ZW50OiB1cmwoXFxcIn4vaW1nL3Zlbm1vLWljb24ucG5nXFxcIik7XFxyXFxufVxcclxcblxcclxcbi5wb3N0IHtcXHJcXG5cXHJcXG5cXHRib3JkZXItY29sb3I6ICNmMWYxZjE7XFxyXFxufVxcclxcblxcclxcbi5wb3N0OmhpZ2hsaWdodGVkIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xcclxcbn1cXHJcXG5cXHJcXG4uYWN0aXZpdHktaW5kaWNhdG9yIHtcXHJcXG5cXHRjb2xvcjogI2FjMDBlNjtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1jb250YWluZXIge1xcclxcblxcdHZpc2liaWxpdHk6IGNvbGxhcHNlO1xcclxcbn1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8UGFnZT5cXHJcXG5cXHQ8UGFnZS5hY3Rpb25CYXI+XFxyXFxuXFx0XFx0PEFjdGlvbkJhciB0aXRsZT1cXFwiUGF5bWVudHNcXFwiPlxcclxcblxcdFxcdCAgPE5hdmlnYXRpb25CdXR0b24gdGV4dD1cXFwiR28gQmFja1xcXCIgYW5kcm9pZC5zeXN0ZW1JY29uPVxcXCJpY19tZW51X2JhY2tcXFwiICh0YXApPVxcXCJvbk5hdkJ0blRhcCgpXFxcIj48L05hdmlnYXRpb25CdXR0b24+XFxyXFxuXFx0XFx0PC9BY3Rpb25CYXI+XFxyXFxuXFx0PC9QYWdlLmFjdGlvbkJhcj5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHQ8U3RhY2tMYXlvdXQgI3BheW1lbnRzQ29udGFpbmVyPlxcclxcblxcdFxcdDxMaXN0VmlldyBbaXRlbXNdPVxcXCJwYXltZW50c1xcXCIgc2VwYXJhdG9yQ29sb3I9XFxcInRyYW5zcGFyZW50XFxcIiAoaXRlbVRhcCk9XFxcIm9uU2VsZWN0KCRldmVudClcXFwiPlxcclxcblxcdFxcdFxcdDxuZy10ZW1wbGF0ZSBsZXQtaXRlbT1cXFwiaXRlbVxcXCIgbGV0LWk9XFxcImluZGV4XFxcIiBsZXQtb2RkPVxcXCJvZGRcXFwiIGxldC1ldmVuPVxcXCJldmVuXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHQ8U3RhY2tMYXlvdXQgW2NsYXNzLm9kZF09XFxcIm9kZFxcXCIgW2NsYXNzLmV2ZW5dPVxcXCJldmVuXFxcIiBjbGFzcz1cXFwicG9zdFxcXCIgb3JpZW50YXRpb249XFxcImhvcml6b250YWxcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdDxJbWFnZSBbc3JjXT1cXFwiaXRlbS5wYXltZW50VHlwZVxcXCIgY2xhc3M9XFxcInBheW1lbnQtdHlwZS1pY29uXFxcIj48L0ltYWdlPlxcclxcblxcdFxcdFxcdFxcdFxcdDxMYWJlbCB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgW3RleHRdPVxcXCJpdGVtLmluZm9cXFwiIGNsYXNzPVxcXCJwYXltZW50LWluZm8tbGFiZWxcXFwiPjwvTGFiZWw+XFxyXFxuXFx0XFx0XFx0XFx0PC9TdGFja0xheW91dD5cXHJcXG5cXHRcXHRcXHQ8L25nLXRlbXBsYXRlPlxcclxcblxcdFxcdDwvTGlzdFZpZXc+XFxyXFxuXFxyXFxuXFx0XFx0PFN0YWNrTGF5b3V0ICh0YXApPVxcXCJzaG93TW9kYWwoKVxcXCIgI2FkZENvbnRhaW5lciBjbGFzcz1cXFwiYWRkLWNvbnRhaW5lclxcXCI+XFxyXFxuXFx0XFx0XFx0PExhYmVsIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiB0ZXh0PVxcXCJBZGQgcGF5bWVudCBtZXRob2RcXFwiIGNsYXNzPVxcXCJhZGQtcGF5bWVudC1sYWJlbFxcXCI+PC9MYWJlbD5cXHJcXG5cXHRcXHQ8L1N0YWNrTGF5b3V0PiAgXFxyXFxuXFx0PC9TdGFja0xheW91dD5cXHJcXG48L1BhZ2U+XFxyXFxuXFxyXFxuPEFjdGl2aXR5SW5kaWNhdG9yICNhY3Rpdml0eUluZGljYXRvciBidXN5PVxcXCJ0cnVlXFxcIiB3aWR0aD1cXFwiNDBcXFwiIGhlaWdodD1cXFwiNDBcXFwiIGNsYXNzPVxcXCJhY3Rpdml0eS1pbmRpY2F0b3JcXFwiPlxcclxcbjwvQWN0aXZpdHlJbmRpY2F0b3I+XCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGVBcnJheSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlLWFycmF5JztcclxuaW1wb3J0IHsgRHluYW1pY0FkZFNlcnZpY2UgfSBmcm9tICcuLi9keW5hbWljLWFkZC5zZXJ2aWNlJztcclxuaW1wb3J0ICogYXMgZHJvcGluIGZyb20gJ2JyYWludHJlZS13ZWItZHJvcC1pbic7XHJcbmltcG9ydCAqIGFzIGJyYWludHJlZSBmcm9tICdicmFpbnRyZWUtd2ViJztcclxuaW1wb3J0IHsgQnJhaW50cmVlLCBCcmFpblRyZWVPcHRpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWJyYWludHJlZSc7XHJcbmltcG9ydCB7IElQYXlQYWxDb25maWcgfSBmcm9tICduZ3gtcGF5cGFsJztcclxuaW1wb3J0IHsgTG9naW5jaGVja1NlcnZpY2UgfSBmcm9tICcuLi9sb2dpbmNoZWNrLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQYXltZW50U2VydmljZSB9IGZyb20gJy4uL3BheW1lbnQuc2VydmljZS50bnMnO1xyXG5pbXBvcnQgeyBUcmFuc2ZlclNlcnZpY2UgfSBmcm9tICcuLi9kYXRhdHJhbnNmZXIuc2VydmljZSc7XHJcblxyXG5pbXBvcnQgeyBNb2RhbERpYWxvZ1BhcmFtcyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9kaXJlY3RpdmVzL2RpYWxvZ3NcIjtcclxuaW1wb3J0IHsgTW9kYWxEaWFsb2dTZXJ2aWNlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2RpcmVjdGl2ZXMvZGlhbG9nc1wiO1xyXG5pbXBvcnQgeyBBZGRQYXltZW50Q29tcG9uZW50IH0gZnJvbSAnLi4vYWRkLXBheW1lbnQvYWRkLXBheW1lbnQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGF5bWVudEluZm9Db21wb25lbnQgfSBmcm9tICcuLi9wYXltZW50LWluZm8vcGF5bWVudC1pbmZvLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBBY3Rpdml0eUluZGljYXRvciB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvYWN0aXZpdHktaW5kaWNhdG9yJztcclxuaW1wb3J0IHsgU3RhY2tMYXlvdXQgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvc3RhY2stbGF5b3V0JztcclxuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCI7XHJcbmltcG9ydCAqIGFzIGZpcmViYXNlIGZyb20gJ25hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2UnO1xyXG5cclxuZGVjbGFyZSBsZXQgcGF5cGFsOiBhbnk7XHJcblxyXG5jbGFzcyBQYXltZW50SXRlbSB7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheW1lbnRUeXBlOiBzdHJpbmcsIHB1YmxpYyBpbmZvOiBzdHJpbmcsIHB1YmxpYyBpZFRva2VuOiBzdHJpbmcsIHB1YmxpYyB0eXBlOiBzdHJpbmcpIHt9XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLXBheW1lbnRzJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcGF5bWVudHMuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3BheW1lbnRzLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGF5bWVudHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBAVmlld0NoaWxkKCdhY3Rpdml0eUluZGljYXRvcicsIHsgc3RhdGljOiB0cnVlIH0pIGFJOiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoJ2FkZENvbnRhaW5lcicsIHsgc3RhdGljOiB0cnVlIH0pIGFDOiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoJ3BheW1lbnRzQ29udGFpbmVyJywgeyBzdGF0aWM6IHRydWUgfSkgcEM6IEVsZW1lbnRSZWY7XHJcbiAgdXNlciA9IHtcclxuICBcdHBheW1lbnRfaWQ6ICc1MDczMDU3MDYnXHJcbiAgfVxyXG4gIG9wdHMgOkJyYWluVHJlZU9wdGlvbnMgPSB7XHJcbiAgICBhbW91bnQ6IG51bGwsXHJcbiAgICBjb2xsZWN0RGV2aWNlRGF0YTogdHJ1ZSxcclxuICAgIHJlcXVlc3RUaHJlZURTZWN1cmVWZXJpZmljYXRpb246IGZhbHNlLFxyXG4gIH1cclxuICBjbGllbnRUb2tlbiA9ICcnO1xyXG4gIHBheW1lbnRDdXN0b21lcjtcclxuICBwYXltZW50SW5mbztcclxuICBwYXltZW50cyA9IG5ldyBPYnNlcnZhYmxlQXJyYXk8UGF5bWVudEl0ZW0+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYWRkU2VydmljZTogRHluYW1pY0FkZFNlcnZpY2UsIHByaXZhdGUgcGF5bWVudFNlcnZpY2U6IFBheW1lbnRTZXJ2aWNlLCBwcml2YXRlIGxvZ2luY2hlY2tTZXJ2aWNlOiBMb2dpbmNoZWNrU2VydmljZSwgcHJpdmF0ZSB0cmFuc2ZlclNlcnZpY2U6IFRyYW5zZmVyU2VydmljZSxcclxuICBcdHByaXZhdGUgdmNSZWY6IFZpZXdDb250YWluZXJSZWYsIHByaXZhdGUgbW9kYWw6IE1vZGFsRGlhbG9nU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIGZpcmViYXNlLmdldEN1cnJlbnRVc2VyKCkudGhlbih1c2VyID0+IHtcclxuICAgICAgZmlyZWJhc2UuZmlyZXN0b3JlLmNvbGxlY3Rpb24oJ3VzZXJzJykuZG9jKHVzZXIudWlkKS5nZXQoKS50aGVuKGRvYyA9PiB7XHJcbiAgICAgICAgdGhpcy51c2VyLnBheW1lbnRfaWQgPSBkb2MuZGF0YSgpLnBheW1lbnRfaWQ7XHJcbiAgICAgICAgdGhpcy5nZXRVc2VyKCk7XHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIFx0XHJcbiAgfVxyXG5cclxuICBzaG93TW9kYWwoKSB7XHJcbiAgICBsZXQgYnJhaW50cmVlID0gbmV3IEJyYWludHJlZSgpO1xyXG4gICAgLy8gdGhpcy5jcmVhdGVWaWV3cygpO1xyXG5cclxuICAgIGJyYWludHJlZS5zdGFydFBheW1lbnQodGhpcy5jbGllbnRUb2tlbiwgdGhpcy5vcHRzKTtcclxuXHJcbiAgICBicmFpbnRyZWUub24oXCJzdWNjZXNzXCIsIChyZXMpID0+IHtcclxuICAgICAgICBsZXQgb3V0cHV0ID0gcmVzLm9iamVjdC5nZXQoXCJvdXRwdXRcIik7XHJcbiAgICAgICAgLy8gY29uc29sZS5kaXIob3V0cHV0KTtcclxuXHJcbiAgICAgICAgdmFyIGFkZENvbnRhaW5lciA9IDxTdGFja0xheW91dD4gdGhpcy5hQy5uYXRpdmVFbGVtZW50O1xyXG4gICAgICAgIHZhciBwYXltZW50c0NvbnRhaW5lciA9IDxTdGFja0xheW91dD4gdGhpcy5wQy5uYXRpdmVFbGVtZW50O1xyXG4gICAgICAgIHZhciBhY3Rpdml0eUluZGljYXRvciA9IDxBY3Rpdml0eUluZGljYXRvcj4gdGhpcy5hSS5uYXRpdmVFbGVtZW50O1xyXG4gICAgICAgIHBheW1lbnRzQ29udGFpbmVyLnN0eWxlLnZpc2liaWxpdHkgPSAnY29sbGFwc2UnO1xyXG4gICAgICAgIGFkZENvbnRhaW5lci5zdHlsZS52aXNpYmlsaXR5ID0gJ2NvbGxhcHNlJztcclxuICAgICAgICBhY3Rpdml0eUluZGljYXRvci5idXN5ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgdGhpcy5wYXltZW50U2VydmljZS5hZGRQYXltZW50TWV0aG9kVG9Vc2VyKHRoaXMudXNlci5wYXltZW50X2lkLCBvdXRwdXQubm9uY2UpLnN1YnNjcmliZSgocmVzOiBhbnkpID0+IHtcclxuICAgICAgICAgIGlmKHJlcy5tZXNzYWdlID09ICdTdWNjZXNzJykge1xyXG4gICAgICAgICAgICBkaWFsb2dzLmFsZXJ0KHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIkFkZGVkIG1ldGhvZFwiLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJQYXltZW50IG1ldGhvZCBhZGRlZCBzdWNjZXNzZnVsbHlcIixcclxuICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJDbG9zZVwiXHJcbiAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZ2V0VXNlcigpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZWxzZSBpZihyZXMubWVzc2FnZSA9PSAnQWxyZWFkeSBleGlzdHMnKSB7XHJcbiAgICAgICAgICAgIGFkZENvbnRhaW5lci5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xyXG4gICAgICAgICAgICBwYXltZW50c0NvbnRhaW5lci5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xyXG4gICAgICAgICAgICBhY3Rpdml0eUluZGljYXRvci5idXN5ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRpYWxvZ3MuYWxlcnQoe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiQ291bGQgbm90IGFkZCBtZXRob2RcIixcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiUGF5bWVudCBtZXRob2QgYWxyZWFkeSBleGlzdHMsIHBsZWFzZSB0cnkgYW5vdGhlciBvbmUuXCIsXHJcbiAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiQ2xvc2VcIlxyXG4gICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAvLyB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ3BheW1lbnRzJ10pO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLy8gdGhpcy5wYXltZW50U2VydmljZS5hZGRQYXltZW50TWV0aG9kVG9Vc2VyKHRoaXMudXNlci5wYXltZW50X2lkLCBvdXRwdXQubm9uY2UpLnN1YnNjcmliZSgocmVzKSA9PiB7XHJcbiAgICAgICAgLy8gICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ3BheW1lbnRzJ10pO1xyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgfSlcclxuICAgICBcclxuICAgIGJyYWludHJlZS5vbihcImNhbmNlbFwiLCBmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgbGV0IG91dHB1dCA9IHJlcy5vYmplY3QuZ2V0KFwib3V0cHV0XCIpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUuZGlyKG91dHB1dCk7XHJcbiAgICB9KVxyXG4gICAgIFxyXG4gICAgYnJhaW50cmVlLm9uKFwiZXJyb3JcIiwgZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgIGxldCBvdXRwdXQgPSByZXMub2JqZWN0LmdldChcIm91dHB1dFwiKTtcclxuICAgICAgICAvLyBjb25zb2xlLmRpcihvdXRwdXQpO1xyXG4gICAgfSlcclxuICAgIC8vIGxldCBvcHRpb25zID0ge1xyXG4gICAgLy8gICAgIGNvbnRleHQ6IHt9LFxyXG4gICAgLy8gICAgIGZ1bGxzY3JlZW46IHRydWUsXHJcbiAgICAvLyAgICAgdmlld0NvbnRhaW5lclJlZjogdGhpcy52Y1JlZlxyXG4gICAgLy8gICAgIC8vIGFuaW1hdGVkOiB0cnVlLFxyXG4gICAgLy8gICAgIC8vIHRyYW5zaXRpb246IHsgbmFtZTogXCJzbGlkZVRvcFwiIH1cclxuICAgIC8vIH07XHJcbiAgICBcclxuICAgIC8vIHRoaXMubW9kYWwuc2hvd01vZGFsKEFkZFBheW1lbnRDb21wb25lbnQsIG9wdGlvbnMpLnRoZW4ocmVzID0+IHtcclxuXHJcbiAgICAvLyB9KTtcclxuICB9XHJcblxyXG4gIGdldFVzZXIoKSB7XHJcbiAgICB0aGlzLnBheW1lbnRzLnNwbGljZSgwKTtcclxuXHJcbiAgICB2YXIgYWRkQ29udGFpbmVyID0gPFN0YWNrTGF5b3V0PiB0aGlzLmFDLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICB2YXIgcGF5bWVudHNDb250YWluZXIgPSA8U3RhY2tMYXlvdXQ+IHRoaXMucEMubmF0aXZlRWxlbWVudDtcclxuICAgIGFkZENvbnRhaW5lci5zdHlsZS52aXNpYmlsaXR5ID0gJ2NvbGxhcHNlJztcclxuICAgIHBheW1lbnRzQ29udGFpbmVyLnN0eWxlLnZpc2liaWxpdHkgPSAnY29sbGFwc2UnO1xyXG5cclxuICBcdHRoaXMucGF5bWVudFNlcnZpY2UuZ2V0UGF5bWVudFVzZXJCeUlkKHRoaXMudXNlci5wYXltZW50X2lkKS5zdWJzY3JpYmUoKGRhdGEpID0+IHtcclxuICAgICAgdGhpcy5zZXR1cFZpZXdzKCk7XHJcblxyXG4gIFx0XHR0aGlzLnBheW1lbnRDdXN0b21lciA9IGRhdGE7XHJcbiAgXHRcdC8vIGNvbnNvbGUubG9nKHRoaXMucGF5bWVudEN1c3RvbWVyKVxyXG4gIFx0XHRpZih0aGlzLnBheW1lbnRDdXN0b21lci5jcmVkaXRDYXJkcyAhPSBudWxsKVxyXG5cdCAgXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLnBheW1lbnRDdXN0b21lci5jcmVkaXRDYXJkcy5sZW5ndGg7IGkrKykgXHJcblx0ICBcdFx0XHR0aGlzLnBheW1lbnRzLnB1c2gobmV3IFBheW1lbnRJdGVtKFwifi9pbWcvY3JlZGl0LWNhcmQtaWNvbi5wbmdcIiwgdGhpcy5wYXltZW50Q3VzdG9tZXIuY3JlZGl0Q2FyZHNbaV0uY2FyZFR5cGUgKyBcIiBlbmRpbmcgaW4gXCIgKyB0aGlzLnBheW1lbnRDdXN0b21lci5jcmVkaXRDYXJkc1tpXS5sYXN0NCwgdGhpcy5wYXltZW50Q3VzdG9tZXIuY3JlZGl0Q2FyZHNbaV0udG9rZW4sIFwiQ2FyZFwiKSk7XHJcbiAgXHRcdGlmKHRoaXMucGF5bWVudEN1c3RvbWVyLnBheXBhbEFjY291bnRzICE9IG51bGwpXHJcbiAgXHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMucGF5bWVudEN1c3RvbWVyLnBheXBhbEFjY291bnRzLmxlbmd0aDsgaSsrKVxyXG4gIFx0XHRcdFx0dGhpcy5wYXltZW50cy5wdXNoKG5ldyBQYXltZW50SXRlbShcIn4vaW1nL3BheXBhbC1pY29uLnBuZ1wiLCB0aGlzLnBheW1lbnRDdXN0b21lci5wYXlwYWxBY2NvdW50c1tpXS5lbWFpbCwgdGhpcy5wYXltZW50Q3VzdG9tZXIucGF5cGFsQWNjb3VudHNbaV0udG9rZW4sIFwiUGF5UGFsXCIpKVxyXG4gIFx0XHRpZih0aGlzLnBheW1lbnRDdXN0b21lci52ZW5tb0FjY291bnRzICE9IG51bGwpXHJcbiAgXHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMucGF5bWVudEN1c3RvbWVyLnZlbm1vQWNjb3VudHMubGVuZ3RoOyBpKyspXHJcbiAgXHRcdFx0XHR0aGlzLnBheW1lbnRzLnB1c2gobmV3IFBheW1lbnRJdGVtKFwifi9pbWcvdmVubW8taWNvbi5wbmdcIiwgdGhpcy5wYXltZW50Q3VzdG9tZXIudmVubW9BY2NvdW50c1tpXS52ZW5tb1VzZXJJZCwgdGhpcy5wYXltZW50Q3VzdG9tZXIudmVubW9BY2NvdW50c1tpXS50b2tlbiwgXCJWZW5tb1wiKSlcclxuICBcdFx0Ly8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpc3QtbG9hZGluZy1jaXJjbGUnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gIFx0fSk7XHJcbiAgICB0aGlzLnBheW1lbnRTZXJ2aWNlLmdldElkVG9rZW4odGhpcy51c2VyLnBheW1lbnRfaWQpLnN1YnNjcmliZSgocmVzOiBhbnkpID0+IHtcclxuICAgICAgdGhpcy5jbGllbnRUb2tlbiA9IHJlcy5jbGllbnRUb2tlbjtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2V0dXBWaWV3cygpIHtcclxuICAgIHZhciBhY3Rpdml0eUluZGljYXRvciA9IDxBY3Rpdml0eUluZGljYXRvcj4gdGhpcy5hSS5uYXRpdmVFbGVtZW50O1xyXG4gICAgYWN0aXZpdHlJbmRpY2F0b3IuYnVzeSA9IGZhbHNlO1xyXG5cclxuICAgIHZhciBhZGRDb250YWluZXIgPSA8U3RhY2tMYXlvdXQ+IHRoaXMuYUMubmF0aXZlRWxlbWVudDtcclxuICAgIGFkZENvbnRhaW5lci5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xyXG5cclxuICAgIHZhciBwYXltZW50c0NvbnRhaW5lciA9IDxTdGFja0xheW91dD4gdGhpcy5wQy5uYXRpdmVFbGVtZW50O1xyXG4gICAgcGF5bWVudHNDb250YWluZXIuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcclxuICB9XHJcblxyXG4gIHNlbGVjdFBheW1lbnQoKSB7XHJcblxyXG4gIH1cclxuXHJcbiAgb25TZWxlY3QoZXZlbnQpIHtcclxuICBcdC8vIGNvbnNvbGUubG9nKGV2ZW50LmluZGV4KTtcclxuICBcdGxldCBvcHRpb25zID0ge1xyXG4gICAgICAgIGNvbnRleHQ6IHt9LFxyXG4gICAgICAgIGZ1bGxzY3JlZW46IHRydWUsXHJcbiAgICAgICAgdmlld0NvbnRhaW5lclJlZjogdGhpcy52Y1JlZlxyXG4gICAgICAgIC8vIGFuaW1hdGVkOiB0cnVlLFxyXG4gICAgICAgIC8vIHRyYW5zaXRpb246IHsgbmFtZTogXCJzbGlkZVRvcFwiIH1cclxuICAgIH07XHJcblxyXG4gICAgdGhpcy50cmFuc2ZlclNlcnZpY2Uuc2V0RGF0YSh0aGlzLnBheW1lbnRzLmdldEl0ZW0oZXZlbnQuaW5kZXgpKTtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsncGF5bWVudGluZm8nXSk7XHJcbiAgICAvLyB0aGlzLm1vZGFsLnNob3dNb2RhbChQYXltZW50SW5mb0NvbXBvbmVudCwgb3B0aW9ucykudGhlbihyZXMgPT4ge1xyXG5cclxuICAgIC8vIH0pO1xyXG4gIH1cclxuXHJcbiAgb25OYXZCdG5UYXAoKSB7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ3NldHRpbmdzJ10sIHtjbGVhckhpc3Rvcnk6IHRydWV9KTtcclxuICB9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFBsYWNlc0F1dG9jb21wbGV0ZVNlcnZpY2Uge1xyXG5cclxuICBwbGFjZXNfdXJpID0gJ2h0dHBzOi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9wbGFjZS90ZXh0c2VhcmNoL2pzb24/a2V5PUFJemFTeUFJVHhTMWptZjhQTXRhelJndVdjQWZXUXhXMWtQT29ZZyZxdWVyeT0nXHJcbiAgYXV0b2NvbXBsZXRlX3VyaSA9ICdodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvcGxhY2UvYXV0b2NvbXBsZXRlL2pzb24/a2V5PUFJemFTeUFJVHhTMWptZjhQTXRhelJndVdjQWZXUXhXMWtQT29ZZyZzZXNzaW9udG9rZW49MTIzNDU2Nzg5MCZpbnB1dD0nXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwQ2xpZW50OiBIdHRwQ2xpZW50KSB7IH1cclxuXHJcbiAgZ2V0QXV0b2NvbXBsZXRlUmVzdWx0cyhwbGFjZSkge1xyXG4gIFx0cmV0dXJuIHRoaXMuaHR0cENsaWVudC5nZXQoYCR7dGhpcy5hdXRvY29tcGxldGVfdXJpfWAgKyBwbGFjZSk7XHJcbiAgfVxyXG5cclxuICBnZXRQbGFjZVJlc3VsdHMocGxhY2UpIHtcclxuICBcdHJldHVybiB0aGlzLmh0dHBDbGllbnQuZ2V0KGAke3RoaXMucGxhY2VzX3VyaX1gICsgcGxhY2UpO1xyXG4gIH1cclxuXHJcbiAgZ2V0QXV0b2NvbXBsZXRlUmVzdWx0c0dlb2NvZGUocGxhY2UpIHtcclxuICBcdHJldHVybiB0aGlzLmh0dHBDbGllbnQuZ2V0KGAke3RoaXMuYXV0b2NvbXBsZXRlX3VyaX1gICsgcGxhY2UgKyBgJnR5cGVzPWdlb2NvZGVgKTtcclxuICB9XHJcbiAgZ2V0QXV0b2NvbXBsZXRlUmVzdWx0c0VzdGFibGlzaG1lbnQocGxhY2UpIHtcclxuICBcdHJldHVybiB0aGlzLmh0dHBDbGllbnQuZ2V0KGAke3RoaXMuYXV0b2NvbXBsZXRlX3VyaX1gICsgcGxhY2UgKyBgJnR5cGVzPWVzdGFibGlzaG1lbnRgKTtcclxuICB9XHJcbiAgZ2V0QXV0b2NvbXBsZXRlUmVzdWx0c0FkZHJlc3MocGxhY2UpIHtcclxuICBcdHJldHVybiB0aGlzLmh0dHBDbGllbnQuZ2V0KGAke3RoaXMuYXV0b2NvbXBsZXRlX3VyaX1gICsgcGxhY2UgKyBgJnR5cGVzPWFkZHJlc3NgKTtcclxuICB9XHJcbiAgZ2V0QXV0b2NvbXBsZXRlUmVzdWx0c0NpdHkocGxhY2UpIHtcclxuICBcdHJldHVybiB0aGlzLmh0dHBDbGllbnQuZ2V0KGAke3RoaXMuYXV0b2NvbXBsZXRlX3VyaX1gICsgcGxhY2UgKyBgJnR5cGVzPShjaXRpZXMpYCk7XHJcbiAgfVxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCIvKiBBZGQgbW9iaWxlIHN0eWxlcyBmb3IgdGhlIGNvbXBvbmVudCBoZXJlLiAgKi9cXHJcXG4ubWFwLXZpZXcge1xcclxcblxcdGhlaWdodDogMTAwJTtcXHJcXG5cXHR3aWR0aDogMTAwJTtcXHJcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvZmlsZS1waWN0dXJlIHtcXHJcXG5cXHRoZWlnaHQ6IDUwO1xcclxcblxcdHdpZHRoOiA1MDtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAxMDAlO1xcclxcblxcdHZlcnRpY2FsLWFsaWduOiB0b3A7XFxyXFxuXFx0bWFyZ2luLWxlZnQ6IDE2O1xcclxcblxcdG1hcmdpbi10b3A6IDIwO1xcclxcbn1cXHJcXG5cXHJcXG4ubmFtZS1sYWJlbCB7XFxyXFxuXFx0bWFyZ2luLXRvcDogMTY7XFxyXFxuXFx0bWFyZ2luLWxlZnQ6IDE4O1xcclxcblxcdGNvbG9yOiBibGFjaztcXHJcXG5cXHRmb250LXdlaWdodDogNzAwO1xcclxcblxcdGZvbnQtc2l6ZTogMTc7XFxyXFxuXFx0dGV4dC1hbGlnbjogbGVmdDtcXHJcXG59XFxyXFxuXFxyXFxuLmluZm8tbGFiZWwge1xcclxcblxcdG1hcmdpbi10b3A6IDQ7XFxyXFxuXFx0bWFyZ2luLWxlZnQ6IDE4O1xcclxcblxcdG1hcmdpbi1ib3R0b206IDE2O1xcclxcblxcdGNvbG9yOiBibGFjaztcXHJcXG5cXHR0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbn1cXHJcXG5cXHJcXG4ubGFiZWwtY29udGFpbmVyIHtcXHJcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcclxcbn1cXHJcXG5cXHJcXG4uYWN0aXZpdHktaW5kaWNhdG9yIHtcXHJcXG5cXHRjb2xvcjogI2FjMDBlNjtcXHJcXG59XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPFBhZ2UuYWN0aW9uQmFyPlxcclxcbiAgICA8QWN0aW9uQmFyIHRpdGxlPVxcXCJQb3N0XFxcIj5cXHJcXG4gICAgXFx0PE5hdmlnYXRpb25CdXR0b24gdGV4dD1cXFwiR28gQmFja1xcXCIgYW5kcm9pZC5zeXN0ZW1JY29uPVxcXCJpY19tZW51X2JhY2tcXFwiICh0YXApPVxcXCJvbk5hdkJ0blRhcCgpXFxcIj48L05hdmlnYXRpb25CdXR0b24+XFxyXFxuXFx0ICAgIDxBY3Rpb25JdGVtICh0YXApPVxcXCJwcm9tcHREZWxldGUoKVxcXCJcXHJcXG5cXHQgICAgICBpb3Muc3lzdGVtSWNvbj1cXFwiMTZcXFwiIGlvcy5wb3NpdGlvbj1cXFwicmlnaHRcXFwiXFxyXFxuXFx0ICAgICAgdGV4dD1cXFwiRGVsZXRlXFxcIiBhbmRyb2lkLnBvc2l0aW9uPVxcXCJwb3B1cFxcXCIgI2RlbGV0ZUl0ZW0+PC9BY3Rpb25JdGVtPlxcclxcblxcdCAgICA8QWN0aW9uSXRlbSAodGFwKT1cXFwib25SZXBvcnQoKVxcXCJcXHJcXG5cXHQgICAgICBpb3Muc3lzdGVtSWNvbj1cXFwiOVxcXCIgaW9zLnBvc2l0aW9uPVxcXCJyaWdodFxcXCJcXHJcXG5cXHQgICAgICB0ZXh0PVxcXCJSZXBvcnRcXFwiIGFuZHJvaWQucG9zaXRpb249XFxcInBvcHVwXFxcIj48L0FjdGlvbkl0ZW0+XFxyXFxuICAgIDwvQWN0aW9uQmFyPlxcclxcbjwvUGFnZS5hY3Rpb25CYXI+XFxyXFxuPEdyaWRMYXlvdXQgcm93cz1cXFwiMiosYXV0bywxMCpcXFwiICNsYXlvdXQ+XFxyXFxuXFx0PFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVxcXCJob3Jpem9udGFsXFxcIiByb3c9XFxcIjBcXFwiIGNsYXNzPVxcXCJsYWJlbC1jb250YWluZXJcXFwiICNpbmZvQ29udGFpbmVyPlxcclxcblxcdFxcdDxJbWFnZSBzcmM9XFxcInt7IHByb2ZpbGVTb3VyY2UgfX1cXFwiIGNsYXNzPVxcXCJwcm9maWxlLXBpY3R1cmVcXFwiIHN0cmV0Y2g9XFxcImFzcGVjdEZpdFxcXCI+PC9JbWFnZT5cXHJcXG5cXHQgIFxcdDxTdGFja0xheW91dD5cXHJcXG5cXHQgICAgICBcXHQ8TGFiZWwgdGV4dFdyYXA9XFxcInRydWVcXFwiIGlkPVxcXCJwb3N0LW5hbWVcXFwiIGNsYXNzPVxcXCJuYW1lLWxhYmVsXFxcIiB0ZXh0PVxcXCJ7eyB1c2VybmFtZSB9fVxcXCI+PC9MYWJlbD5cXHJcXG5cXHQgICAgICBcXHQ8TGFiZWwgdGV4dFdyYXA9XFxcInRydWVcXFwiIGlkPVxcXCJwb3N0LWluZm9cXFwiIGNsYXNzPVxcXCJpbmZvLWxhYmVsXFxcIiB0ZXh0PVxcXCJ7eyBpbmZvIH19XFxcIj48L0xhYmVsPlxcclxcblxcdCAgICA8L1N0YWNrTGF5b3V0PlxcclxcblxcdDwvU3RhY2tMYXlvdXQ+XFxyXFxuXFx0PFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJidG4tY29udGFpbmVyXFxcIiAjYnV0dG9uQ29udGFpbmVyIHJvdz1cXFwiMVxcXCI+XFxyXFxuXFx0XFx0PEJ1dHRvbiBjbGFzcz1cXFwiY29ubmVjdC1idG5cXFwiICh0YXApPVxcXCJvbkNvbm5lY3RUYXAoKVxcXCIgdGV4dD1cXFwie3sgYnV0dG9uVGV4dCB9fVxcXCI+PC9CdXR0b24+XFxyXFxuXFx0PC9TdGFja0xheW91dD5cXHJcXG5cXHQ8TWFwVmlldyAobWFwUmVhZHkpPVxcXCJvbk1hcFJlYWR5KCRldmVudClcXFwiIFtsYXRpdHVkZV09XFxcImxhdGl0dWRlXFxcIiBbbG9uZ2l0dWRlXT1cXFwibG9uZ2l0dWRlXFxcIiBjbGFzcz1cXFwibWFwLXZpZXdcXFwiIHJvdz1cXFwiMlxcXCIgI21hcFZpZXc+PC9NYXBWaWV3PlxcclxcbjwvR3JpZExheW91dD5cXHJcXG48QWN0aXZpdHlJbmRpY2F0b3IgI2FjdGl2aXR5SW5kaWNhdG9yIGJ1c3k9XFxcInRydWVcXFwiIHdpZHRoPVxcXCI0MFxcXCIgaGVpZ2h0PVxcXCI0MFxcXCIgY2xhc3M9XFxcImFjdGl2aXR5LWluZGljYXRvclxcXCI+PC9BY3Rpdml0eUluZGljYXRvcj5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q29udGFpbmVyUmVmLCBWaWV3UmVmLCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0ICogYXMgZmlyZWJhc2UgZnJvbSAnbmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZSc7XHJcbmltcG9ydCB7IEdvb2dsZU1hcHNTZXJ2aWNlIH0gZnJvbSAnLi4vZ29vZ2xlLW1hcHMuc2VydmljZSc7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBUcmFuc2ZlclNlcnZpY2UgfSBmcm9tICcuLi9kYXRhdHJhbnNmZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlXCI7XHJcbmltcG9ydCB7IEFjdGlvbkl0ZW0gfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2FjdGlvbi1iYXInO1xyXG5pbXBvcnQgeyBTdGFja0xheW91dCB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvbGF5b3V0cy9zdGFjay1sYXlvdXQnO1xyXG5pbXBvcnQgeyBHcmlkTGF5b3V0IH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9sYXlvdXRzL2dyaWQtbGF5b3V0JztcclxuaW1wb3J0IHsgQWN0aXZpdHlJbmRpY2F0b3IgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2FjdGl2aXR5LWluZGljYXRvcic7XHJcbmltcG9ydCB7cmVnaXN0ZXJFbGVtZW50fSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZWxlbWVudC1yZWdpc3RyeVwiO1xyXG5pbXBvcnQge2lzQW5kcm9pZCwgaXNJT1N9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtXCI7XHJcbmltcG9ydCB7IE1hcFZpZXcsIE1hcmtlciwgUG9zaXRpb24gfSBmcm9tICduYXRpdmVzY3JpcHQtZ29vZ2xlLW1hcHMtc2RrJztcclxuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCI7XHJcbmltcG9ydCB7IExvZ2luY2hlY2tTZXJ2aWNlIH0gZnJvbSAnLi4vbG9naW5jaGVjay5zZXJ2aWNlLnRucyc7XHJcbmltcG9ydCB7IENoYXRNZXNzYWdlIH0gZnJvbSAnLi4vbW9kZWxzL2NoYXQtbWVzc2FnZS5tb2RlbCc7XHJcblxyXG5yZWdpc3RlckVsZW1lbnQoXCJNYXBWaWV3XCIsICgpID0+IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtZ29vZ2xlLW1hcHMtc2RrXCIpLk1hcFZpZXcpO1xyXG5kZWNsYXJlIHZhciBjb206YW55O1xyXG5kZWNsYXJlIHZhciBHTVNDb29yZGluYXRlQm91bmRzOiBhbnk7XHJcbmRlY2xhcmUgdmFyIEdNU0NhbWVyYVVwZGF0ZTogYW55O1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtcG9zdGluZy1pbmZvJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcG9zdGluZy1pbmZvLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9wb3N0aW5nLWluZm8uY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQb3N0aW5nSW5mb0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIEBWaWV3Q2hpbGQoXCJkZWxldGVJdGVtXCIsIHsgc3RhdGljOiB0cnVlIH0pIGRlbGV0ZUl0ZW06IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZChcImJ1dHRvbkNvbnRhaW5lclwiLCB7IHN0YXRpYzogdHJ1ZSB9KSBidXR0b25Db250YWluZXI6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZChcImluZm9Db250YWluZXJcIiwgeyBzdGF0aWM6IHRydWUgfSkgaW5mb0NvbnRhaW5lcjogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKFwiYWN0aXZpdHlJbmRpY2F0b3JcIiwgeyBzdGF0aWM6IHRydWUgfSkgYWk6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZChcImxheW91dFwiLCB7IHN0YXRpYzogdHJ1ZSB9KSBsYXlvdXQ6IEVsZW1lbnRSZWY7XHJcbiAgbWFwVmlldzogTWFwVmlldztcclxuICBsYXRpdHVkZSA9ICAzNztcclxuICBsb25naXR1ZGUgPSAtMTIyO1xyXG5cclxuICBzdGFydExhdDtcclxuICBlbmRMYXQ7XHJcbiAgc3RhcnRMbmc7XHJcbiAgZW5kTG5nO1xyXG4gIGJvdW5kcztcclxuICBtYXBEYXRhO1xyXG4gIHVzZXJJZDtcclxuICBwcm9maWxlU291cmNlO1xyXG4gIGluZm87XHJcbiAgdXNlcm5hbWU7XHJcbiAgYnV0dG9uVGV4dDtcclxuICBjdXJyZW50VXNlck5hbWU7XHJcblxyXG4gIGNoYXRVc2VycyA9IFtdO1xyXG4gIGN1cnJlbnRVc2VyO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1hcFNlcnZpY2U6IEdvb2dsZU1hcHNTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSB0cmFuc2ZlclNlcnZpY2U6IFRyYW5zZmVyU2VydmljZSwgcHJpdmF0ZSBwYWdlOiBQYWdlLFxyXG4gICAgcHJpdmF0ZSBsb2dpbmNoZWNrU2VydmljZTogTG9naW5jaGVja1NlcnZpY2UpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICBcdHRoaXMubG9hZFZpZXdzKCk7XHJcbiAgfVxyXG5cclxuICBsb2FkVmlld3MoKSB7XHJcbiAgICBsZXQgYWN0aXZpdHlJbmRpY2F0b3IgPSA8QWN0aXZpdHlJbmRpY2F0b3I+IHRoaXMuYWkubmF0aXZlRWxlbWVudDtcclxuICAgIGxldCBpbmZvQ29udGFpbmVyID0gPFN0YWNrTGF5b3V0PiB0aGlzLmluZm9Db250YWluZXIubmF0aXZlRWxlbWVudDtcclxuICAgIGxldCBkZWxldGVCdXR0b24gPSA8QWN0aW9uSXRlbT4gdGhpcy5kZWxldGVJdGVtLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICBsZXQgY2hhdEJ1dHRvbiA9IDxTdGFja0xheW91dD4gdGhpcy5idXR0b25Db250YWluZXIubmF0aXZlRWxlbWVudDtcclxuXHJcbiAgICBpbmZvQ29udGFpbmVyLnZpc2liaWxpdHkgPSAnY29sbGFwc2UnO1xyXG4gICAgY2hhdEJ1dHRvbi52aXNpYmlsaXR5ID0gJ2NvbGxhcHNlJztcclxuICAgIHRoaXMudXNlcklkID0gdGhpcy5sb2dpbmNoZWNrU2VydmljZS5nZXRVc2VyKCk7XHJcbiAgICB0aGlzLm1hcERhdGEgPSB0aGlzLnRyYW5zZmVyU2VydmljZS5nZXREYXRhKCk7XHJcbiAgICBmaXJlYmFzZS5maXJlc3RvcmUuY29sbGVjdGlvbigndXNlcnMnKS5kb2ModGhpcy51c2VySWQpLmdldCgpLnRoZW4oKGRvYykgPT4ge1xyXG4gICAgICB0aGlzLmN1cnJlbnRVc2VyID0gZG9jLmRhdGEoKTtcclxuICAgICAgaWYoZG9jLmRhdGEoKS5jaGF0cy5pbmNsdWRlcyh0aGlzLm1hcERhdGEucG9zdEluZm8uaWQpKSB7XHJcbiAgICAgICAgdGhpcy5idXR0b25UZXh0ID0gJ1ZpZXcgY2hhdCc7XHJcbiAgICAgICAgYWN0aXZpdHlJbmRpY2F0b3IuYnVzeSA9IGZhbHNlO1xyXG4gICAgICAgIGluZm9Db250YWluZXIudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcclxuICAgICAgICBjaGF0QnV0dG9uLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgZmlyZWJhc2UuZmlyZXN0b3JlLmNvbGxlY3Rpb24oJ2NoYXRzJykuZG9jKHRoaXMubWFwRGF0YS5wb3N0SW5mby5kYXRhLnVpZCkuZ2V0KCkudGhlbigoZG9jKSA9PiB7XHJcbiAgICAgICAgICBpZighZG9jLmV4aXN0cyAmJiB0aGlzLnVzZXJJZCA9PT0gdGhpcy5tYXBEYXRhLnBvc3RJbmZvLmRhdGEudWlkKVxyXG4gICAgICAgICAgICBjaGF0QnV0dG9uLnZpc2liaWxpdHkgPSAnY29sbGFwc2UnO1xyXG4gICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICBjaGF0QnV0dG9uLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XHJcbiAgICAgICAgICBhY3Rpdml0eUluZGljYXRvci5idXN5ID0gZmFsc2U7XHJcbiAgICAgICAgICBpbmZvQ29udGFpbmVyLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLmJ1dHRvblRleHQgPSAnSm9pbiBjaGF0JztcclxuICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICBpZihpc0lPUykge1xyXG4gICAgICB0aGlzLmJvdW5kcyA9IEdNU0Nvb3JkaW5hdGVCb3VuZHMuYWxsb2MoKS5pbml0KCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHRoaXMuc3RhcnRMYXQgPSB0aGlzLm1hcERhdGEucG9zdEluZm8uZGF0YS5zdGFydExhdDtcclxuICAgIHRoaXMuZW5kTGF0ID0gdGhpcy5tYXBEYXRhLnBvc3RJbmZvLmRhdGEuZW5kTGF0O1xyXG4gICAgdGhpcy5zdGFydExuZyA9IHRoaXMubWFwRGF0YS5wb3N0SW5mby5kYXRhLnN0YXJ0TG5nO1xyXG4gICAgdGhpcy5lbmRMbmcgPSB0aGlzLm1hcERhdGEucG9zdEluZm8uZGF0YS5lbmRMbmc7XHJcbiAgICB0aGlzLmluZm8gPSB0aGlzLm1hcERhdGEucG9zdEl0ZW0uaW5mbztcclxuICAgIHRoaXMucHJvZmlsZVNvdXJjZSA9IHRoaXMubWFwRGF0YS5wb3N0SXRlbS5wcm9maWxlU291cmNlO1xyXG4gICAgdGhpcy51c2VybmFtZSA9IHRoaXMubWFwRGF0YS5wb3N0SXRlbS51c2VybmFtZTtcclxuXHJcbiAgICBcclxuICAgIGlmKHRoaXMudXNlcklkICE9PSB0aGlzLm1hcERhdGEucG9zdEluZm8uZGF0YS51aWQpIHtcclxuICAgICAgZGVsZXRlQnV0dG9uLnZpc2liaWxpdHkgPSAnY29sbGFwc2UnO1xyXG4gICAgfVxyXG5cclxuICAgIGZpcmViYXNlLmdldEN1cnJlbnRVc2VyKCkudGhlbigodXNlcikgPT4ge1xyXG4gICAgICB0aGlzLmN1cnJlbnRVc2VyTmFtZSA9IHVzZXIuZGlzcGxheU5hbWU7XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgb25NYXBSZWFkeShldmVudCkge1xyXG4gIFx0dGhpcy5tYXBWaWV3ID0gZXZlbnQub2JqZWN0O1xyXG5cclxuXHQvLyB0aGlzLmxhdGl0dWRlID0gKHRoaXMuc3RhcnRMYXQgKyB0aGlzLmVuZExhdCkgLyAyLjA7XHJcblx0Ly8gdGhpcy5sb25naXR1ZGUgPSAodGhpcy5zdGFydExuZyArIHRoaXMuZW5kTG5nKSAvIDIuMDtcclxuICBcdHRoaXMuYWRkTWFya2VyKHRoaXMuc3RhcnRMYXQsIHRoaXMuc3RhcnRMbmcsIHRoaXMubWFwRGF0YS5wb3N0SW5mby5kYXRhLnN0YXJ0QWRkcmVzcywgdGhpcy5tYXBEYXRhLnBvc3RJbmZvLmRhdGEuc3RhcnRGb3JtYXR0ZWQsIDApO1xyXG5cdCAgdGhpcy5hZGRNYXJrZXIodGhpcy5lbmRMYXQsIHRoaXMuZW5kTG5nLCB0aGlzLm1hcERhdGEucG9zdEluZm8uZGF0YS5lbmRBZGRyZXNzLCB0aGlzLm1hcERhdGEucG9zdEluZm8uZGF0YS5lbmRGb3JtYXR0ZWQsIDEpO1xyXG5cclxuICBcdGlmKGlzQW5kcm9pZCkge1xyXG4gICAgXHRcdHZhciBidWlsZGVyID0gbmV3IGNvbS5nb29nbGUuYW5kcm9pZC5nbXMubWFwcy5tb2RlbC5MYXRMbmdCb3VuZHMuQnVpbGRlcigpO1xyXG4gIFx0XHR0aGlzLm1hcFZpZXcuZmluZE1hcmtlcihmdW5jdGlvbiAobWFya2VyKSB7IGJ1aWxkZXIuaW5jbHVkZShtYXJrZXIuYW5kcm9pZC5nZXRQb3NpdGlvbigpKTsgcmV0dXJuIGZhbHNlfSk7XHJcbiAgXHRcdHZhciBib3VuZHMgPSBidWlsZGVyLmJ1aWxkKCk7XHJcbiAgXHRcdHZhciBjdSA9IGNvbS5nb29nbGUuYW5kcm9pZC5nbXMubWFwcy5DYW1lcmFVcGRhdGVGYWN0b3J5Lm5ld0xhdExuZ0JvdW5kcyhib3VuZHMsIDE1MCk7XHJcbiAgXHRcdHRoaXMubWFwVmlldy5nTWFwLmFuaW1hdGVDYW1lcmEoY3UpO1xyXG4gIFx0fVxyXG4gIFx0ZWxzZSBpZihpc0lPUykge1xyXG4gIFx0XHR2YXIgdXBkYXRlID0gR01TQ2FtZXJhVXBkYXRlLmZpdEJvdW5kc1dpdGhQYWRkaW5nKGJvdW5kcywgMTUwKTsgdGhpcy5tYXBWaWV3LmdNYXAubW92ZUNhbWVyYSh1cGRhdGUpO1xyXG4gIFx0fVxyXG5cclxuICB9XHJcblxyXG4gIGFkZE1hcmtlcihsYXQsIGxuZywgdGl0bGUsIHNuaXBwZXQsIGluZGV4KSB7XHJcbiAgXHR2YXIgbWFya2VyID0gbmV3IE1hcmtlcigpO1xyXG4gICAgbWFya2VyLnBvc2l0aW9uID0gUG9zaXRpb24ucG9zaXRpb25Gcm9tTGF0TG5nKGxhdCwgbG5nKTtcclxuICAgIG1hcmtlci50aXRsZSA9IHRpdGxlO1xyXG4gICAgbWFya2VyLnNuaXBwZXQgPSBzbmlwcGV0O1xyXG4gICAgbWFya2VyLnVzZXJEYXRhID0ge2luZGV4OiBpbmRleH07XHJcbiAgICB0aGlzLm1hcFZpZXcuYWRkTWFya2VyKG1hcmtlcik7XHJcbiAgICBpZihpc0lPUylcclxuICAgIFx0dGhpcy5ib3VuZHMgPSB0aGlzLmJvdW5kcy5pbmNsdWRpbmdDb29yZGluYXRlKG1hcmtlci5wb3NpdGlvbik7XHJcbiAgfVxyXG5cclxuICBvbk5hdkJ0blRhcCgpIHtcclxuICBcdHRoaXMucm91dGVyLm5hdmlnYXRlKFsnbmF2aWdhdGlvbiddLCB7Y2xlYXJIaXN0b3J5OiB0cnVlfSk7XHJcbiAgfVxyXG5cclxuICBkZWxldGVGaWxlcygpIHtcclxuICAgIGZpcmViYXNlLnN0b3JhZ2UuZGVsZXRlRmlsZSh7XHJcbiAgICAgIC8vIHRoZSBmdWxsIHBhdGggb2YgYW4gZXhpc3RpbmcgZmlsZSBpbiB5b3VyIEZpcmViYXNlIHN0b3JhZ2VcclxuICAgICAgcmVtb3RlRnVsbFBhdGg6ICdwb3N0aW5ncy8nICsgdGhpcy5tYXBEYXRhLnBvc3RJbmZvLmlkICsgJy9tYXBzL2xhcmdlX21hcC5wbmcnXHJcbiAgICB9KS50aGVuKFxyXG4gICAgICAgICgpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiRmlsZSBkZWxldGVkLlwiKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJGaWxlIGRlbGV0aW9uIEVycm9yOiBcIiArIGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICApO1xyXG4gICAgZmlyZWJhc2Uuc3RvcmFnZS5kZWxldGVGaWxlKHtcclxuICAgICAgLy8gdGhlIGZ1bGwgcGF0aCBvZiBhbiBleGlzdGluZyBmaWxlIGluIHlvdXIgRmlyZWJhc2Ugc3RvcmFnZVxyXG4gICAgICByZW1vdGVGdWxsUGF0aDogJ3Bvc3RpbmdzLycgKyB0aGlzLm1hcERhdGEucG9zdEluZm8uaWQgKyAnL21hcHMvc21hbGxfbWFwLnBuZydcclxuICAgIH0pLnRoZW4oXHJcbiAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJGaWxlIGRlbGV0ZWQuXCIpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkZpbGUgZGVsZXRpb24gRXJyb3I6IFwiICsgZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcm9tcHREZWxldGUoKSB7XHJcbiAgICBkaWFsb2dzLmNvbmZpcm0oe1xyXG4gICAgICAgIHRpdGxlOiBcIkNvbmZpcm0gZGVsZXRlXCIsXHJcbiAgICAgICAgbWVzc2FnZTogXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgcG9zdD9cIixcclxuICAgICAgICBva0J1dHRvblRleHQ6IFwiQ29uZmlybVwiLFxyXG4gICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiQ2FuY2VsXCIsXHJcbiAgICB9KS50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgLy8gcmVzdWx0IGFyZ3VtZW50IGlzIGJvb2xlYW5cclxuICAgICAgICBpZihyZXN1bHQpXHJcbiAgICAgICAgICB0aGlzLm9uRGVsZXRlKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG9uRGVsZXRlKCkge1xyXG4gICAgdmFyIHBvc3RpbmdEb2N1bWVudCA9IGZpcmViYXNlLmZpcmVzdG9yZS5jb2xsZWN0aW9uKCdwb3N0aW5ncycpLmRvYyh0aGlzLm1hcERhdGEucG9zdEluZm8uaWQpO1xyXG4gICAgdmFyIHVzZXJEb2N1bWVudCA9IGZpcmViYXNlLmZpcmVzdG9yZS5jb2xsZWN0aW9uKCd1c2VycycpLmRvYyh0aGlzLm1hcERhdGEucG9zdEluZm8uZGF0YS51aWQpO1xyXG4gICAgdmFyIGNoYXREb2N1bWVudCA9IGZpcmViYXNlLmZpcmVzdG9yZS5jb2xsZWN0aW9uKCdjaGF0cycpLmRvYyh0aGlzLm1hcERhdGEucG9zdEluZm8uaWQpO1xyXG4gICAgcG9zdGluZ0RvY3VtZW50LmRlbGV0ZSgpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICB1c2VyRG9jdW1lbnQuZ2V0KCkudGhlbigoZG9jKSA9PiB7XHJcbiAgICAgICAgbGV0IHVzZXJQb3N0cyA9IGRvYy5kYXRhKCkucG9zdHM7XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSB1c2VyUG9zdHMuaW5kZXhPZih0aGlzLm1hcERhdGEucG9zdEluZm8uaWQsIDApO1xyXG4gICAgICAgIGlmIChpbmRleCA+IC0xKSB7XHJcbiAgICAgICAgICAgdXNlclBvc3RzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB1c2VyRG9jdW1lbnQudXBkYXRlKHtcclxuICAgICAgICAgIHBvc3RzOiB1c2VyUG9zdHNcclxuICAgICAgICB9KS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgIC8vIGNoYXREb2N1bWVudC5nZXQoKS50aGVuKChkb2MpID0+IHtcclxuICAgICAgICAgIC8vICAgbGV0IGRhdGEgPSBkb2MuZGF0YSgpO1xyXG4gICAgICAgICAgLy8gICBpZihkYXRhKSB7XHJcbiAgICAgICAgICAvLyAgICAgZm9yKHZhciBpID0gMDsgaSA8IGRhdGEudXNlcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIC8vICAgICAgIC8vIHRoaXMuY2hhdFVzZXJzLnB1c2goZGF0YS51c2Vyc1tpXS51aWQpO1xyXG4gICAgICAgICAgLy8gICAgICAgZmlyZWJhc2UuZmlyZXN0b3JlLmNvbGxlY3Rpb24oJ3VzZXJzJykuZG9jKGRhdGEudXNlcnNbaV0udWlkKS5nZXQoKS50aGVuKChkb2MpID0+IHtcclxuICAgICAgICAgIC8vICAgICAgICAgY29uc3QgaWQgPSBkYXRhLnVzZXJzW2ldLnVpZDtcclxuICAgICAgICAgIC8vICAgICAgICAgbGV0IHVpZENoYXRzID0gZG9jLmRhdGEoKS5jaGF0cztcclxuICAgICAgICAgIC8vICAgICAgICAgbGV0IGluZGV4ID0gdWlkQ2hhdHMuaW5kZXhPZih0aGlzLm1hcERhdGEucG9zdEluZm8uaWQpO1xyXG4gICAgICAgICAgLy8gICAgICAgICBpZihpbmRleCA+IC0xKSB7XHJcbiAgICAgICAgICAvLyAgICAgICAgICAgdWlkQ2hhdHMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgIC8vICAgICAgICAgfVxyXG4gICAgICAgICAgLy8gICAgICAgICBmaXJlYmFzZS5maXJlc3RvcmUuY29sbGVjdGlvbigndXNlcnMnKS5kb2MoaWQpLnVwZGF0ZSh7XHJcbiAgICAgICAgICAvLyAgICAgICAgICAgY2hhdHM6IHVpZENoYXRzXHJcbiAgICAgICAgICAvLyAgICAgICAgIH0pXHJcbiAgICAgICAgICAvLyAgICAgICB9KVxyXG4gICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgIC8vICAgICBjaGF0RG9jdW1lbnQuZGVsZXRlKCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAvLyAgICAgICB0aGlzLmRlbGV0ZUZpbGVzKCk7XHJcbiAgICAgICAgICAvLyAgICAgICB0aGlzLm9uTmF2QnRuVGFwKCk7XHJcbiAgICAgICAgICAvLyAgICAgfSlcclxuICAgICAgICAgIC8vICAgfVxyXG4gICAgICAgICAgLy8gICBlbHNlIHtcclxuICAgICAgICAgIC8vICAgICB0aGlzLmRlbGV0ZUZpbGVzKCk7XHJcbiAgICAgICAgICAvLyAgICAgdGhpcy5vbk5hdkJ0blRhcCgpO1xyXG4gICAgICAgICAgLy8gICB9XHJcbiAgICAgICAgICAvLyB9KVxyXG4gICAgICAgICAgdGhpcy5kZWxldGVGaWxlcygpO1xyXG4gICAgICAgICAgdGhpcy5vbk5hdkJ0blRhcCgpO1xyXG4gICAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgfSlcclxuICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgIH0pXHJcbiAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgcmVtb3ZlQ2hhdChpbmRleCkge1xyXG4gICAgY29uc29sZS5sb2coaW5kZXgpO1xyXG4gICAgZmlyZWJhc2UuZmlyZXN0b3JlLmNvbGxlY3Rpb24oJ3VzZXJzJykuZG9jKHRoaXMuY2hhdFVzZXJzW2luZGV4XSkuZ2V0KCkudGhlbigoZG9jKSA9PiB7XHJcbiAgICAgIGxldCB1c2VyQ2hhdHMgPSBkb2MuZGF0YSgpLmNoYXRzO1xyXG4gICAgICBjb25zdCBpbmRleCA9IHVzZXJDaGF0cy5pbmRleE9mKHRoaXMubWFwRGF0YS5wb3N0SW5mby5pZCk7XHJcbiAgICAgIGlmIChpbmRleCA+IC0xKSB7XHJcbiAgICAgICAgIHVzZXJDaGF0cy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICB9XHJcbiAgICAgIGZpcmViYXNlLmZpcmVzdG9yZS5jb2xsZWN0aW9uKCd1c2VycycpLmRvYyh0aGlzLmNoYXRVc2Vyc1tpbmRleF0pLnVwZGF0ZSh7XHJcbiAgICAgICAgY2hhdHM6IHVzZXJDaGF0c1xyXG4gICAgICB9KS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBpZihpbmRleCA9PT0gdGhpcy5jaGF0VXNlcnNbaW5kZXhdLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgIHRoaXMuZGVsZXRlRmlsZXMoKTtcclxuICAgICAgICAgIHRoaXMub25OYXZCdG5UYXAoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgb25SZXBvcnQoKSB7XHJcblxyXG4gIH1cclxuXHJcbiAgb25Db25uZWN0VGFwKCkge1xyXG4gICAgbGV0IGdyaWRDb250YWluZXIgPSA8R3JpZExheW91dD4gdGhpcy5sYXlvdXQubmF0aXZlRWxlbWVudDtcclxuICAgIGxldCBhY3Rpdml0eUluZGljYXRvciA9IDxBY3Rpdml0eUluZGljYXRvcj4gdGhpcy5haS5uYXRpdmVFbGVtZW50O1xyXG5cclxuICAgIGdyaWRDb250YWluZXIudmlzaWJpbGl0eSA9ICdjb2xsYXBzZSc7XHJcbiAgICBhY3Rpdml0eUluZGljYXRvci5idXN5ID0gdHJ1ZTtcclxuXHJcbiAgICBpZih0aGlzLmJ1dHRvblRleHQgPT09ICdWaWV3IGNoYXQnKSB7XHJcbiAgICAgIHRoaXMudHJhbnNmZXJTZXJ2aWNlLnNldERhdGEodGhpcy5tYXBEYXRhLnBvc3RJbmZvLmlkKTtcclxuICAgICAgZ3JpZENvbnRhaW5lci52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xyXG4gICAgICBhY3Rpdml0eUluZGljYXRvci5idXN5ID0gZmFsc2U7XHJcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnY2hhdCddKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYodGhpcy5idXR0b25UZXh0ID09PSAnSm9pbiBjaGF0Jykge1xyXG4gICAgICBjb25zdCBjaGF0RG9jdW1lbnQgPSBmaXJlYmFzZS5maXJlc3RvcmUuY29sbGVjdGlvbignY2hhdHMnKS5kb2ModGhpcy5tYXBEYXRhLnBvc3RJbmZvLmlkKTtcclxuICAgICAgY29uc3QgdXNlckRvY3VtZW50ID0gZmlyZWJhc2UuZmlyZXN0b3JlLmNvbGxlY3Rpb24oJ3VzZXJzJykuZG9jKHRoaXMudXNlcklkKTtcclxuICAgICAgY2hhdERvY3VtZW50LmdldCgpLnRoZW4oKGRvYykgPT4ge1xyXG4gICAgICAgIGlmKGRvYy5leGlzdHMpIHtcclxuICAgICAgICAgIC8vY2hhdCBleGlzdHMsIHNvIGFkZCB1c2VyIHRvIHRoZSBjaGF0IHJvb20gYW5kIG5hdmlnYXRlIHRoZXJlXHJcbiAgICAgICAgICBsZXQgdG9rZW5zOiBbc3RyaW5nXSA9IGRvYy5kYXRhKCkudG9rZW5zO1xyXG4gICAgICAgICAgdmFyIHVzZXJzOiBbe3VpZDogc3RyaW5nLCBkaXNwbGF5TmFtZTogc3RyaW5nfV0gPSBkb2MuZGF0YSgpLnVzZXJzO1xyXG4gICAgICAgICAgdmFyIHVzZXJUb2tlbnM6IFtzdHJpbmddID0gdGhpcy5jdXJyZW50VXNlci50b2tlbnM7XHJcbiAgICAgICAgICB2YXIgbmV3VG9rZW5zID0gdG9rZW5zLmNvbmNhdCh1c2VyVG9rZW5zKTtcclxuICAgICAgICAgIHVzZXJzLnB1c2goe3VpZDogdGhpcy51c2VySWQsIGRpc3BsYXlOYW1lOiB0aGlzLmN1cnJlbnRVc2VyTmFtZX0pXHJcbiAgICAgICAgICBjaGF0RG9jdW1lbnQudXBkYXRlKHtcclxuICAgICAgICAgICAgdXNlcnM6IHVzZXJzLFxyXG4gICAgICAgICAgICB0b2tlbnM6IEFycmF5LmZyb20obmV3IFNldChuZXdUb2tlbnMpKVxyXG4gICAgICAgICAgfSkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIHVzZXJEb2N1bWVudC5nZXQoKS50aGVuKChkb2MpID0+IHtcclxuICAgICAgICAgICAgICB2YXIgdXNlckNoYXRzID0gZG9jLmRhdGEoKS5jaGF0cztcclxuICAgICAgICAgICAgICB1c2VyQ2hhdHMucHVzaCh0aGlzLm1hcERhdGEucG9zdEluZm8uaWQpO1xyXG4gICAgICAgICAgICAgIHVzZXJEb2N1bWVudC51cGRhdGUoe1xyXG4gICAgICAgICAgICAgICAgY2hhdHM6IHVzZXJDaGF0c1xyXG4gICAgICAgICAgICAgIH0pLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy9maW5hbGx5IGFmdGVyIGV2ZXJ5dGhpbmcgZWxzZSBoYXMgdXBkYXRlZCwgc2VuZCB1c2VyIHRvIGNoYXQgY29tcG9uZW50XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRyYW5zZmVyU2VydmljZS5zZXREYXRhKHRoaXMubWFwRGF0YS5wb3N0SW5mby5pZCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ1dHRvblRleHQgPSAnVmlldyBjaGF0JztcclxuICAgICAgICAgICAgICAgIGdyaWRDb250YWluZXIudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcclxuICAgICAgICAgICAgICAgIGFjdGl2aXR5SW5kaWNhdG9yLmJ1c3kgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnY2hhdCddKTtcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAvL2NoYXQgZG9lcyBub3QgZXhpc3QsIHNvIGNyZWF0ZSBhbmQgYWRkIGJvdGggcG9zdCB1c2VyIGFuZCBjdXJyZW50IHVzZXJcclxuICAgICAgICAgIGZpcmViYXNlLmZpcmVzdG9yZS5jb2xsZWN0aW9uKCdjaGF0cycpLmRvYyh0aGlzLm1hcERhdGEucG9zdEluZm8uaWQpLnNldCh7XHJcbiAgICAgICAgICAgIHVzZXJzOiBbe3VpZDogdGhpcy5tYXBEYXRhLnBvc3RJbmZvLmRhdGEudWlkLCBkaXNwbGF5TmFtZTogdGhpcy5tYXBEYXRhLnBvc3RJdGVtLnVzZXJuYW1lfSwge3VpZDogdGhpcy51c2VySWQsIGRpc3BsYXlOYW1lOiB0aGlzLmN1cnJlbnRVc2VyTmFtZX1dLFxyXG4gICAgICAgICAgICBjaGF0czogW10sXHJcbiAgICAgICAgICAgIGV4cGlyZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgfSkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIGZpcmViYXNlLmZpcmVzdG9yZS5jb2xsZWN0aW9uKCd1c2VycycpLmRvYyh0aGlzLm1hcERhdGEucG9zdEluZm8uZGF0YS51aWQpLmdldCgpLnRoZW4oKGRvYykgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnN0IHVzZXJUb2tlbnMgPSB0aGlzLmN1cnJlbnRVc2VyLnRva2VucztcclxuICAgICAgICAgICAgICBjb25zdCBvdGhlclVzZXJUb2tlbnMgPSBkb2MuZGF0YSgpLnRva2VucztcclxuICAgICAgICAgICAgICBjb25zdCBuZXdUb2tlbnMgPSB1c2VyVG9rZW5zLmNvbmNhdChvdGhlclVzZXJUb2tlbnMpO1xyXG4gICAgICAgICAgICAgIGZpcmViYXNlLmZpcmVzdG9yZS5jb2xsZWN0aW9uKCdjaGF0cycpLmRvYyh0aGlzLm1hcERhdGEucG9zdEluZm8uaWQpLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICB0b2tlbnM6IEFycmF5LmZyb20obmV3IFNldChuZXdUb2tlbnMpKVxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgdmFyIHVzZXJDaGF0cyA9IGRvYy5kYXRhKCkuY2hhdHM7XHJcbiAgICAgICAgICAgICAgdXNlckNoYXRzLnB1c2godGhpcy5tYXBEYXRhLnBvc3RJbmZvLmlkKTtcclxuICAgICAgICAgICAgICBmaXJlYmFzZS5maXJlc3RvcmUuY29sbGVjdGlvbigndXNlcnMnKS5kb2ModGhpcy5tYXBEYXRhLnBvc3RJbmZvLmRhdGEudWlkKS51cGRhdGUoe1xyXG4gICAgICAgICAgICAgICAgY2hhdHM6IHVzZXJDaGF0c1xyXG4gICAgICAgICAgICAgIH0pLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgdXNlckRvY3VtZW50LmdldCgpLnRoZW4oKGRvYykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICB2YXIgdXNlckNoYXRzID0gZG9jLmRhdGEoKS5jaGF0cztcclxuICAgICAgICAgICAgICAgICAgdXNlckNoYXRzLnB1c2godGhpcy5tYXBEYXRhLnBvc3RJbmZvLmlkKTtcclxuICAgICAgICAgICAgICAgICAgdXNlckRvY3VtZW50LnVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hhdHM6IHVzZXJDaGF0c1xyXG4gICAgICAgICAgICAgICAgICB9KS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvL2ZpbmFsbHkgYWZ0ZXIgZXZlcnl0aGluZyBlbHNlIGhhcyB1cGRhdGVkLCBzZW5kIHVzZXIgdG8gY2hhdCBjb21wb25lbnRcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRyYW5zZmVyU2VydmljZS5zZXREYXRhKHRoaXMubWFwRGF0YS5wb3N0SW5mby5pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5idXR0b25UZXh0ID0gJ1ZpZXcgY2hhdCc7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JpZENvbnRhaW5lci52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xyXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2aXR5SW5kaWNhdG9yLmJ1c3kgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ2NoYXQnXSk7XHJcbiAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUG9zdGluZ1NlcnZpY2Uge1xyXG5cdC8qKlxyXG5cdCogVG8gZ2V0IHRoZSBzZXJ2ZXIgdG8gcmVjb2duaXplIHlvdXIgbW9iaWxlIGRldmljZSwgZmluZCB5b3VyIGlwdjQgYWRkcmVzcyBieSBydW5uaW5nIGlwY29uZmlnIGluIGEgdGVybWluYWwgd2luZG93XHJcblx0KiBhbmQgYWRkIGEgbmV3IHVyaSBsaW5lIHdpdGggeW91ciBpcHY0IGFkZHJlc3MuIERvIHRoaXMgZm9yIG5ldHdvcmtfc2VjdXJpdHlfY29uZmlnLnhtbCwgdXNlci5zZXJ2aWNlcy50bnMudHMsIGFuZFxyXG5cdCogcG9zdGluZy5zZXJ2aWNlLnRucy50cy5cclxuXHQqL1xyXG5cdC8vIEFkYW0ncyB0ZXN0aW5nIHNlcnZlclxyXG5cdC8vIHVyaSA9ICdodHRwOi8vMTkyLjE2OC4xLjc6NDAwMCc7XHJcblx0Ly8gdXJpID0gJ2h0dHA6Ly8xMC41LjExLjI1OjQwMDAnO1xyXG5cdC8vIFBoaWxsaXAncyBUZXN0aW5nIHNlcnZlclxyXG5cdHVyaSA9ICdodHRwOi8vMTkyLjE2OC4xLjM6NDAwMCc7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7IH1cclxuXHJcbiAgZ2V0UG9zdGluZ3MoKSB7XHJcbiAgXHRyZXR1cm4gdGhpcy5odHRwLmdldChgJHt0aGlzLnVyaX0vcG9zdGluZ3NgKTtcclxuICB9XHJcblxyXG4gIGdldFBvc3RpbmdieUlkKGlkKSB7XHJcbiAgXHRyZXR1cm4gdGhpcy5odHRwLmdldChgJHt0aGlzLnVyaX0vcG9zdGluZ3MvJHtpZH1gKTtcclxuICB9XHJcblxyXG4gIGFkZFBvc3RpbmcodXNlciwgc3RhcnRhZHIsIGVuZGFkciwgZGF0ZSwgY29zdCwgY2FwYWNpdHksIGNvbW1lbnRzKSB7XHJcblxyXG4gICAgLy9jb25zdCBwcmljZSA9IHJlcSguLi8uLi9iYWNrZW5kL2RhdGEvcHJpY2luZykoe3N0YXJ0OiBzdGFydGFkciwgZW5kOiBlbmRhZHJ9KTtcclxuXHJcbiAgXHRjb25zdCBwb3N0aW5nID0ge1xyXG4gIFx0XHR1c2VyIDogdXNlcixcclxuICBcdFx0c3RhcnRhZHIgOiBzdGFydGFkcixcclxuICBcdFx0ZW5kYWRyIDogZW5kYWRyLFxyXG4gIFx0XHRkYXRlIDogZGF0ZSxcclxuICBcdFx0Y29zdCA6IGNvc3QsXHJcbiAgXHRcdGNhcGFjaXR5IDogY2FwYWNpdHksXHJcbiAgXHRcdGNvbW1lbnRzIDogY29tbWVudHNcclxuICBcdH07XHJcbiAgXHRyZXR1cm4gdGhpcy5odHRwLnBvc3QoYCR7dGhpcy51cml9L3Bvc3RpbmdzL2FkZC9gLCBwb3N0aW5nKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVBvc3RpbmcoaWQsIHVzZXIsIHN0YXJ0YWRyLCBlbmRhZHIsIGRhdGUsIGNvc3QsIGNhcGFjaXR5LCBjb21tZW50cykge1xyXG4gICAgLy9jb25zdCBwcmljZSA9IHJlcSguLi8uLi9iYWNrZW5kL2RhdGEvcHJpY2luZykoe3N0YXJ0OiBzdGFydGFkciwgZW5kOiBlbmRhZHJ9KTtcclxuICBcdGNvbnN0IHBvc3RpbmcgPSB7XHJcbiAgXHRcdHVzZXIgOiB1c2VyLFxyXG4gIFx0XHRzdGFydGFkciA6IHN0YXJ0YWRyLFxyXG4gIFx0XHRlbmRhZHIgOiBlbmRhZHIsXHJcbiAgXHRcdGRhdGUgOiBkYXRlLFxyXG4gIFx0XHRjb3N0IDogY29zdCxcclxuICBcdFx0Y2FwYWNpdHkgOiBjYXBhY2l0eSxcclxuICBcdFx0Y29tbWVudHMgOiBjb21tZW50c1xyXG4gIFx0fTtcclxuICBcdHJldHVybiB0aGlzLmh0dHAucG9zdChgJHt0aGlzLnVyaX0vcG9zdGluZ3MvdXBkYXRlLyR7aWR9YCwgcG9zdGluZyk7XHJcbiAgfVxyXG5cclxuICBkZWxldGVQb3N0aW5nKGlkKSB7XHJcbiAgXHRyZXR1cm4gdGhpcy5odHRwLmdldChgJHt0aGlzLnVyaX0vcG9zdGluZ3MvZGVsZXRlLyR7aWR9YCk7XHJcbiAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQb3N0aW5nU2VydmljZSB7XHJcblx0LyoqXHJcblx0KiBUbyBnZXQgdGhlIHNlcnZlciB0byByZWNvZ25pemUgeW91ciBtb2JpbGUgZGV2aWNlLCBmaW5kIHlvdXIgaXB2NCBhZGRyZXNzIGJ5IHJ1bm5pbmcgaXBjb25maWcgaW4gYSB0ZXJtaW5hbCB3aW5kb3dcclxuXHQqIGFuZCBhZGQgYSBuZXcgdXJpIGxpbmUgd2l0aCB5b3VyIGlwdjQgYWRkcmVzcy4gRG8gdGhpcyBmb3IgbmV0d29ya19zZWN1cml0eV9jb25maWcueG1sLCB1c2VyLnNlcnZpY2VzLnRucy50cywgYW5kXHJcblx0KiBwb3N0aW5nLnNlcnZpY2UudG5zLnRzLlxyXG5cdCovXHJcblx0Ly8gQWRhbSdzIHRlc3Rpbmcgc2VydmVyXHJcblx0Ly8gdXJpID0gJ2h0dHA6Ly8xOTIuMTY4LjEuNzo0MDAwJztcclxuXHQvLyB1cmkgPSAnaHR0cDovLzEwLjUuMTEuMjU6NDAwMCc7XHJcblx0Ly8gUGhpbGxpcCdzIFRlc3Rpbmcgc2VydmVyXHJcblx0dXJpID0gJ2h0dHA6Ly8xOTIuMTY4LjEuMzo0MDAwJztcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHsgfVxyXG5cclxuICBnZXRQb3N0aW5ncygpIHtcclxuICBcdHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke3RoaXMudXJpfS9wb3N0aW5nc2ApO1xyXG4gIH1cclxuXHJcbiAgZ2V0UG9zdGluZ2J5SWQoaWQpIHtcclxuICBcdHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke3RoaXMudXJpfS9wb3N0aW5ncy8ke2lkfWApO1xyXG4gIH1cclxuXHJcbiAgYWRkUG9zdGluZyh1c2VyLCBzdGFydGFkciwgZW5kYWRyLCBkYXRlLCBjb3N0LCBjYXBhY2l0eSwgY29tbWVudHMpIHtcclxuXHJcbiAgICAvL2NvbnN0IHByaWNlID0gcmVxKC4uLy4uL2JhY2tlbmQvZGF0YS9wcmljaW5nKSh7c3RhcnQ6IHN0YXJ0YWRyLCBlbmQ6IGVuZGFkcn0pO1xyXG5cclxuICBcdGNvbnN0IHBvc3RpbmcgPSB7XHJcbiAgXHRcdHVzZXIgOiB1c2VyLFxyXG4gIFx0XHRzdGFydGFkciA6IHN0YXJ0YWRyLFxyXG4gIFx0XHRlbmRhZHIgOiBlbmRhZHIsXHJcbiAgXHRcdGRhdGUgOiBkYXRlLFxyXG4gIFx0XHRjb3N0IDogY29zdCxcclxuICBcdFx0Y2FwYWNpdHkgOiBjYXBhY2l0eSxcclxuICBcdFx0Y29tbWVudHMgOiBjb21tZW50c1xyXG4gIFx0fTtcclxuICBcdHJldHVybiB0aGlzLmh0dHAucG9zdChgJHt0aGlzLnVyaX0vcG9zdGluZ3MvYWRkL2AsIHBvc3RpbmcpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlUG9zdGluZyhpZCwgdXNlciwgc3RhcnRhZHIsIGVuZGFkciwgZGF0ZSwgY29zdCwgY2FwYWNpdHksIGNvbW1lbnRzKSB7XHJcbiAgICAvL2NvbnN0IHByaWNlID0gcmVxKC4uLy4uL2JhY2tlbmQvZGF0YS9wcmljaW5nKSh7c3RhcnQ6IHN0YXJ0YWRyLCBlbmQ6IGVuZGFkcn0pO1xyXG4gIFx0Y29uc3QgcG9zdGluZyA9IHtcclxuICBcdFx0dXNlciA6IHVzZXIsXHJcbiAgXHRcdHN0YXJ0YWRyIDogc3RhcnRhZHIsXHJcbiAgXHRcdGVuZGFkciA6IGVuZGFkcixcclxuICBcdFx0ZGF0ZSA6IGRhdGUsXHJcbiAgXHRcdGNvc3QgOiBjb3N0LFxyXG4gIFx0XHRjYXBhY2l0eSA6IGNhcGFjaXR5LFxyXG4gIFx0XHRjb21tZW50cyA6IGNvbW1lbnRzXHJcbiAgXHR9O1xyXG4gIFx0cmV0dXJuIHRoaXMuaHR0cC5wb3N0KGAke3RoaXMudXJpfS9wb3N0aW5ncy91cGRhdGUvJHtpZH1gLCBwb3N0aW5nKTtcclxuICB9XHJcblxyXG4gIGRlbGV0ZVBvc3RpbmcoaWQpIHtcclxuICBcdHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke3RoaXMudXJpfS9wb3N0aW5ncy9kZWxldGUvJHtpZH1gKTtcclxuICB9XHJcblxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCIvKlxcbkFkZCB5b3VyIE5hdGl2ZVNjcmlwdCBzcGVjaWZpYyBzdHlsZXMgaGVyZS5cXG5UbyBsZWFybiBtb3JlIGFib3V0IHN0eWxpbmcgaW4gTmF0aXZlU2NyaXB0IHNlZTpcXG5odHRwczovL2RvY3MubmF0aXZlc2NyaXB0Lm9yZy9hbmd1bGFyL3VpL3N0eWxpbmdcXG4qL1xcblxcbkxhYmVsIHtcXG5cXHR0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG4ubmFtZS1sYWJlbCB7XFxuXFx0bWFyZ2luLXRvcDogMTY7XFxuXFx0bWFyZ2luLWxlZnQ6IDI0O1xcblxcdGNvbG9yOiBibGFjaztcXG5cXHRmb250LXdlaWdodDogNzAwO1xcblxcdGZvbnQtc2l6ZTogMTg7XFxufVxcblxcbi5pbmZvLWxhYmVsIHtcXG5cXHRtYXJnaW4tdG9wOiAxMjtcXG5cXHRtYXJnaW4tbGVmdDogMjQ7XFxuXFx0bWFyZ2luLWJvdHRvbTogMTY7XFxuXFx0Y29sb3I6IGJsYWNrO1xcbn1cXG5cXG4ucG9zdCB7XFxuXFx0Ym9yZGVyLWJvdHRvbS13aWR0aDogMTtcXG5cXHRib3JkZXItY29sb3I6ICNmMWYxZjE7XFxufVxcblxcbi5wb3N0OmhpZ2hsaWdodGVkIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xcbn1cXG5cXG4ucG9zdGluZy1tYXAge1xcblxcdG1hcmdpbi1ib3R0b206IDE2O1xcblxcdGJvcmRlci1yYWRpdXM6IDEwO1xcblxcdC8qYWxpZ24tY29udGVudDogY2VudGVyOyovXFxufVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxTdGFja0xheW91dCBjbGFzcz1cXFwicG9zdFxcXCI+XFxuICA8TGFiZWwgdGV4dFdyYXA9XFxcInRydWVcXFwiIGlkPVxcXCJwb3N0LW5hbWVcXFwiIGNsYXNzPVxcXCJuYW1lLWxhYmVsXFxcIj48L0xhYmVsPlxcbiAgPExhYmVsIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiBpZD1cXFwicG9zdC1pbmZvXFxcIiBjbGFzcz1cXFwiaW5mby1sYWJlbFxcXCI+PC9MYWJlbD5cXG4gIDxJbWFnZSBzcmM9XFxcIn4vaW1nL2N2aWxsZS1tYXAucG5nXFxcIiBzdHJldGNoPVxcXCJub25lXFxcIiBoZWlnaHQ9XFxcIjIyMFxcXCIgd2lkdGg9XFxcIjMwMFxcXCIgY2xhc3M9XFxcInBvc3RpbmctbWFwXFxcIj48L0ltYWdlPlxcbjwvU3RhY2tMYXlvdXQ+XFxuXFxuPCEtLVxcbk9yaWdpbmFsIFdlYiB0ZW1wbGF0ZTpcXG5cXG5cXG4tLT5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFRyYW5zZmVyU2VydmljZSB9IGZyb20gJy4uL2RhdGF0cmFuc2Zlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvcGFnZSc7XHJcbmltcG9ydCB7IExhYmVsIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9sYWJlbCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1wb3N0aW5nJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcG9zdGluZy5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vcG9zdGluZy5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFBvc3RpbmdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIGlkO1xyXG4gIGJ1dHRvblR5cGU7XHJcblxyXG4gIGluZm8gPSB0aGlzLnRyYW5zZmVyU2VydmljZS5nZXREYXRhKClbMF07XHJcblxyXG4gIGluZm9UZXh0ID0gXCJMZWF2aW5nIFwiICsgdGhpcy5pbmZvLmRhdGUgKyBcIiBmcm9tIFwiICsgdGhpcy5pbmZvLnN0YXJ0YWRyICsgXCIgdG8gXCIgKyB0aGlzLmluZm8uZW5kYWRyICsgXCIgZm9yIFwiICsgdGhpcy5pbmZvLmNvc3Q7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0cmFuc2ZlclNlcnZpY2U6IFRyYW5zZmVyU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBwYWdlOiBQYWdlKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICBcdHRoaXMuaWQgPSB0aGlzLmluZm8uaWQ7XHJcbiAgXHR0aGlzLmJ1dHRvblR5cGUgPSB0aGlzLmluZm8uYnV0dG9uVHlwZTtcclxuICAgIGNvbnN0IG5hbWVfbGFiZWwgPSA8TGFiZWw+dGhpcy5wYWdlLmdldFZpZXdCeUlkKCdwb3N0LW5hbWUnKTtcclxuICAgIG5hbWVfbGFiZWwudGV4dCA9IHRoaXMuaW5mby51c2VyO1xyXG4gICAgbmFtZV9sYWJlbC5pZCA9ICdwb3N0LW5hbWUnICsgdGhpcy5pbmZvLmluZGV4O1xyXG4gICAgY29uc3QgaW5mb19sYWJlbCA9IDxMYWJlbD50aGlzLnBhZ2UuZ2V0Vmlld0J5SWQoJ3Bvc3QtaW5mbycpO1xyXG4gICAgaWYodGhpcy5pbmZvLmNhcGFjaXR5ID4gMClcclxuICAgICAgaW5mb19sYWJlbC50ZXh0ID0gXCJPZmZlcmluZyByaWRlIGxlYXZpbmcgXCIgKyB0aGlzLmluZm8uZGF0ZSArIFwiIGZyb20gXCIgKyB0aGlzLmluZm8uc3RhcnRhZHIgKyBcIiB0byBcIiArIHRoaXMuaW5mby5lbmRhZHIgKyBcIiBmb3IgXCIgKyB0aGlzLmluZm8uY29zdDtcclxuICAgIGVsc2VcclxuICAgICAgaW5mb19sYWJlbC50ZXh0ID0gXCJSZXF1ZXN0aW5nIHJpZGUgbGVhdmluZyBcIiArIHRoaXMuaW5mby5kYXRlICsgXCIgZnJvbSBcIiArIHRoaXMuaW5mby5zdGFydGFkciArIFwiIHRvIFwiICsgdGhpcy5pbmZvLmVuZGFkcjtcclxuICAgIGluZm9fbGFiZWwuaWQgPSAncG9zdC1pbmZvJyArIHRoaXMuaW5mby5pbmRleDtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwiY3JlYXRlZCBwb3N0XCIpO1xyXG4gIFx0Ly8gdGhpcy5jcmVhdGUoKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZSgpIHtcclxuICBcdGNvbnNvbGUubG9nKHRoaXMuaW5mbyk7XHJcbiAgXHRjb25zb2xlLmxvZyh0aGlzLmluZm8uaW5kZXgpO1xyXG5cdCAgdmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBkaXYuaWQgPSBcImZlZWRcIisgdGhpcy5pbmZvLmluZGV4O1xyXG4gICAgZGl2LmNsYXNzTmFtZSA9IFwicG9zdGluZy1ibG9ja1wiO1xyXG4gICAgZGl2LnN0eWxlLmRpc3BsYXkgPSBcImFsbFwiO1xyXG4gICAgZGl2LnN0eWxlLm1hcmdpbiA9IFwiYXV0b1wiO1xyXG4gICAgZGl2LnN0eWxlLm1hcmdpblRvcCA9IFwiMC41ZW1cIjtcclxuICAgIGRpdi5zdHlsZS5tYXJnaW5Cb3R0b20gPSBcIjAuNWVtXCI7XHJcblxyXG4gICAgLy9kaXYuc3R5bGUucGFkZGluZ0xlZnQgPSBcIjIwJVwiO1xyXG4gICAgLy9kaXYuc3R5bGUud2lkdGggPSBcIjQwJVwiO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JpZ2ZlZWQnKS5hcHBlbmRDaGlsZChkaXYpO1xyXG4gICAgXHJcbiAgICB2YXIgZGl2dGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmVlZCcrIHRoaXMuaW5mby5pbmRleCkuYXBwZW5kQ2hpbGQoZGl2dGV4dCk7XHJcbiAgICBkaXZ0ZXh0LmlkID0gXCJ0ZXh0XCIrIHRoaXMuaW5mby5pbmRleDtcclxuICAgIFxyXG4gICAgdmFyIGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJJTUdcIik7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dCcrIHRoaXMuaW5mby5pbmRleCkuYXBwZW5kQ2hpbGQoaW1nKTtcclxuICAgIGltZy5pZCA9IFwicGZwXCIrIHRoaXMuaW5mby5pbmRleDtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGZwXCIpO1xyXG4gICAgaW1nLmNsYXNzTmFtZSA9IFwicGZwXCI7XHJcbiAgICAoaW1nIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnNyYyA9IFwic3JjL2ltZy9zYW1wbGVfcHJvZmlsZS5qcGdcIjtcclxuICAgIFxyXG4gICAgdmFyIGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0JysgdGhpcy5pbmZvLmluZGV4KS5hcHBlbmRDaGlsZChoZWFkZXIpO1xyXG4gICAgaGVhZGVyLmlkID0gXCJuYW1lXCIrIHRoaXMuaW5mby5pbmRleDtcclxuICAgIGhlYWRlci5pbm5lckhUTUwgPSB0aGlzLmluZm8udXNlcjtcclxuICAgIGhlYWRlci5jbGFzc05hbWUgPSBcImhlYWRlclwiO1xyXG4gICAgXHJcbiAgICB2YXIgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0JysgdGhpcy5pbmZvLmluZGV4KS5hcHBlbmRDaGlsZChwKTtcclxuICAgIHAuaWQgPSBcImRldGFpbHNcIisgdGhpcy5pbmZvLmluZGV4O1xyXG4gICAgcC5pbm5lckhUTUwgPSBcIkxlYXZpbmcgXCIgKyB0aGlzLmluZm8uZGF0ZSArIFwiIGZyb20gXCIgKyB0aGlzLmluZm8uc3RhcnRhZHIgKyBcIiB0byBcIiArIHRoaXMuaW5mby5lbmRhZHIgKyBcIiBmb3IgXCIgKyB0aGlzLmluZm8uY29zdDtcclxuICAgIHAuY2xhc3NOYW1lID0gXCJkZXRhaWxzXCI7XHJcbiAgICBcclxuICAgIHZhciBtYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiSU1HXCIpXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dCcrIHRoaXMuaW5mby5pbmRleCkuYXBwZW5kQ2hpbGQobWFwKTtcclxuICAgIG1hcC5pZCA9IFwibWFwXCIrIHRoaXMuaW5mby5pbmRleDtcclxuICAgIG1hcC5jbGFzc05hbWUgPSBcImRlc3RpbmF0aW9uXCI7XHJcbiAgICAobWFwIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnNyYyA9IFwic3JjL2ltZy92aXJnaW5pYV9tYXAuanBnXCI7XHJcbiAgICBcclxuICAgIHZhciBjb25uZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0JysgdGhpcy5pbmZvLmluZGV4KS5hcHBlbmRDaGlsZChjb25uZWN0KTtcclxuICAgIGNvbm5lY3QuaWQgPSB0aGlzLmJ1dHRvblR5cGUgKyB0aGlzLmluZm8uaW5kZXg7XHJcbiAgICBjb25uZWN0LmNsYXNzTmFtZSA9IFwicG9zdGluZy1idXR0b25cIjtcclxuICAgIGNvbm5lY3QuaW5uZXJIVE1MID0gdGhpcy5pbmZvLmJ1dHRvblR5cGU7XHJcbiAgICBjb25uZWN0LnN0eWxlLm1hcmdpblJpZ2h0ID0gXCIxZW1cIjtcclxuICAgIGNvbm5lY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlOkV2ZW50KSA9PiB0aGlzLmNsaWNrZWQodGhpcy5pbmZvLmJ1dHRvblR5cGUpKTtcclxuICB9XHJcbiAgY2xpY2tlZChidXR0b25UeXBlKXtcclxuICBcdHRoaXMudHJhbnNmZXJTZXJ2aWNlLnNldERhdGEodGhpcy5pbmZvKTtcclxuICBcdGlmKGJ1dHRvblR5cGUgPT0gXCJDb25uZWN0XCIpXHJcblx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKCcvY29ubmVjdCcpO1xyXG5cdGVsc2VcclxuXHRcdHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoJy91cGRhdGUnKTtcclxuICB9XHJcblxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCIvKiBBZGQgbW9iaWxlIHN0eWxlcyBmb3IgdGhlIGNvbXBvbmVudCBoZXJlLiAgKi9cXG4uaGVhZGVye1xcbiAgICBtYXJnaW4tdG9wOiA1MDtcXG5cXHRtYXJnaW4tbGVmdDogMzI7XFxuXFx0Y29sb3I6IGJsYWNrO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBmb250LXNpemU6IDI0O1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG4uc3VibWl0LWJ0bntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjojYWMwMGU2O1xcbiAgICB3aWR0aDogNzUlO1xcbiAgICBoZWlnaHQ6IDE3MHB4O1xcbiAgICBmb250LWZhbWlseTogXFxcIlNlZ29lIFVJXFxcIixBcmlhbCxzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIG1hcmdpbi10b3A6IDIwO1xcbn1cXG4udGV4dC1maWVsZHtcXG4gICAgd2lkdGg6IDg1JTtcXG4gICAgbWFyZ2luLXRvcDogMjA7XFxuICAgIGNvbG9yOiM2OTY5NjlcXG59XFxuXFxuLmNsb3NlLWJ1dHRvbi1jb250YWluZXIge1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRsZWZ0OiAwO1xcbn1cXG4uY2xvc2Uge1xcblxcdG1hcmdpbjogMTA7XFxuXFx0Zm9udC1zaXplOiA0MDtcXG5cXHR3aWR0aDogNDg7XFxuICAgIGhlaWdodDogNDg7XFxuICAgIGNvbG9yOiBibGFja1xcbn1cXG5cXG4uZXJyb3ItbWVzc2FnZSB7XFxuXFx0Y29sb3I6IHJlZDtcXG5cXHRmb250LXNpemU6IDE2O1xcblxcdHZpc2liaWxpdHk6IGNvbGxhcHNlO1xcbn1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8U3RhY2tsYXlvdXQ+XFxyXFxuICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiY2xvc2UtYnV0dG9uLWNvbnRhaW5lclxcXCIgb3JpZW50YXRpb249XFxcImhvcml6b250YWxcXFwiPlxcclxcbiAgICAgICAgPExhYmVsIHRleHQ9XFxcIiZ0aW1lcztcXFwiIGNsYXNzPVxcXCJjbG9zZVxcXCIgKHRhcCk9XFxcImNsb3NlKCdjYW5jZWwnKVxcXCI+PC9MYWJlbD5cXHJcXG4gICAgPC9TdGFja0xheW91dD5cXHJcXG4gICAgPExhYmVsIGNsYXNzPVxcXCJoZWFkZXJcXFwiIHRleHQ9XFxcIlBsZWFzZSByZS1lbnRlciB5b3VyIHBhc3N3b3JkXFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCI+PC9MYWJlbD5cXHJcXG4gICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJpbnB1dC1maWVsZFxcXCI+XFxyXFxuICAgICAgICA8VGV4dEZpZWxkICN2YWwgWyhuZ01vZGVsKV09XFxcInBhc3N3b3JkXFxcIiBzZWN1cmU9XFxcInRydWVcXFwiIGF1dG9jb3JyZWN0PVxcXCJmYWxzZVxcXCIgcmV0dXJuS2V5VHlwZT1cXFwiZG9uZVxcXCIgY2xhc3M9XFxcInRleHQtZmllbGRcXFwiPjwvVGV4dEZpZWxkPlxcclxcbiAgICA8L1N0YWNrTGF5b3V0PlxcclxcbiAgICA8TGFiZWwgdGV4dD1cXFwiVGhlIHBhc3N3b3JkIHlvdSBlbnRlcmVkIHdhcyBpbmNvcnJlY3RcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiBjbGFzcz1cXFwiZXJyb3ItbWVzc2FnZVxcXCIgI2Vycm9yTWVzc2FnZT48L0xhYmVsPlxcclxcblxcclxcbiAgICA8QnV0dG9uIHRleHQ9XFxcIlN1Ym1pdFxcXCIgKHRhcCk9XFxcInN1Ym1pdChwYXNzd29yZClcXFwiIGNsYXNzPVxcXCJzdWJtaXQtYnRuXFxcIj48L0J1dHRvbj5cXHJcXG5cXHJcXG48L1N0YWNrbGF5b3V0PlwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDb250YWluZXJSZWYsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNb2RhbERpYWxvZ1BhcmFtcyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9kaXJlY3RpdmVzL2RpYWxvZ3NcIjtcclxuaW1wb3J0ICogYXMgZmlyZWJhc2UgZnJvbSAnbmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZSc7XHJcbmltcG9ydCB7IExvZ2luY2hlY2tTZXJ2aWNlIH0gZnJvbSAnLi4vbG9naW5jaGVjay5zZXJ2aWNlLnRucyc7XHJcbmltcG9ydCB7IFRyYW5zZmVyU2VydmljZSB9IGZyb20gJy4uL2RhdGF0cmFuc2Zlci5zZXJ2aWNlJztcclxuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCI7XHJcbmltcG9ydCB7IFNldHRpbmdzZm9ybUNvbXBvbmVudCB9IGZyb20gJy4uL3NldHRpbmdzZm9ybS9zZXR0aW5nc2Zvcm0uY29tcG9uZW50JztcclxuaW1wb3J0IHsgTW9kYWxEaWFsb2dTZXJ2aWNlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2RpcmVjdGl2ZXMvZGlhbG9nc1wiO1xyXG5pbXBvcnQgeyBMYWJlbCB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvbGFiZWwnO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLXJlYXV0aCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3JlYXV0aC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vcmVhdXRoLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUmVhdXRoQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwYXJhbXM6IE1vZGFsRGlhbG9nUGFyYW1zLCBwcml2YXRlIHRyYW5zZmVyU2VydmljZTogVHJhbnNmZXJTZXJ2aWNlLCBwcml2YXRlIGxvZ2luY2hlY2tTZXJ2aWNlOiBMb2dpbmNoZWNrU2VydmljZSwgXHJcbiAgXHRwcml2YXRlIHZjUmVmOiBWaWV3Q29udGFpbmVyUmVmLCBwcml2YXRlIG1vZGFsOiBNb2RhbERpYWxvZ1NlcnZpY2UpIHsgfVxyXG5cclxuICBAVmlld0NoaWxkKFwiZXJyb3JNZXNzYWdlXCIsIHsgc3RhdGljOiB0cnVlIH0pIGVtOiBFbGVtZW50UmVmO1xyXG4gIGZpZWxkO1xyXG4gIHVzZXJJZDtcclxuICB1c2VyRW1haWw7XHJcbiAgcGFzc3dvcmQ7XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIFx0dGhpcy5maWVsZCA9IHRoaXMudHJhbnNmZXJTZXJ2aWNlLmdldERhdGEoKTtcclxuICBcdHRoaXMudXNlcklkID0gdGhpcy5sb2dpbmNoZWNrU2VydmljZS5nZXRVc2VyKCk7XHJcbiAgXHRmaXJlYmFzZS5nZXRDdXJyZW50VXNlcigpLnRoZW4oKHVzZXIpID0+IHtcclxuICBcdFx0dGhpcy51c2VyRW1haWwgPSB1c2VyLmVtYWlsO1xyXG4gIFx0fSlcclxuICB9XHJcblxyXG4gIGNsb3NlKHJlcykge1xyXG4gIFx0bGV0IGVycm9yTWVzc2FnZSA9IDxMYWJlbD4gdGhpcy5lbS5uYXRpdmVFbGVtZW50O1xyXG5cdGVycm9yTWVzc2FnZS5zdHlsZS52aXNpYmlsaXR5ID0gJ2NvbGxhcHNlJztcclxuXHR0aGlzLnBhc3N3b3JkID0gJyc7XHJcbiAgICB0aGlzLnBhcmFtcy5jbG9zZUNhbGxiYWNrKHJlcyk7XHJcbiAgfVxyXG5cclxuICBzdWJtaXQocGFzc3dvcmQpIHtcclxuICBcdGZpcmViYXNlLnJlYXV0aGVudGljYXRlKHtcclxuXHQgICAgdHlwZTogZmlyZWJhc2UuTG9naW5UeXBlLlBBU1NXT1JELCAvLyBvciBHT09HTEUgLyBGQUNFQk9PS1xyXG5cdCAgICAvLyB0aGlzIGlzIG9ubHkgcmVxdWlyZWQgaW4gdHlwZSA9PSBQQVNTV09SRFxyXG5cdCAgICBwYXNzd29yZE9wdGlvbnM6IHtcclxuXHQgICAgICBlbWFpbDogdGhpcy51c2VyRW1haWwsXHJcblx0ICAgICAgcGFzc3dvcmQ6IHRoaXMucGFzc3dvcmRcclxuXHQgICAgfVxyXG5cdCAgfSkudGhlbihcclxuXHQgICAgICAocmVzdWx0KSA9PiB7XHJcblx0ICAgICAgICAvLyB5b3UgY2FuIG5vdyBzYWZlbHkgZGVsZXRlIHRoZSBhY2NvdW50IC8gY2hhbmdlIHRoZSBwYXNzd29yZCwgZXRjXHJcblx0ICAgICAgICBsZXQgb3B0aW9ucyA9IHtcclxuXHRcdCAgICAgICAgY29udGV4dDoge30sXHJcblx0XHQgICAgICAgIGZ1bGxzY3JlZW46IHRydWUsXHJcblx0XHQgICAgICAgIHZpZXdDb250YWluZXJSZWY6IHRoaXMudmNSZWZcclxuXHRcdCAgICAgICAgLy8gYW5pbWF0ZWQ6IHRydWUsXHJcblx0XHQgICAgICAgIC8vIHRyYW5zaXRpb246IHsgbmFtZTogXCJzbGlkZVRvcFwiIH1cclxuXHRcdCAgICB9O1xyXG5cdFx0ICAgIGxldCBlcnJvck1lc3NhZ2UgPSA8TGFiZWw+IHRoaXMuZW0ubmF0aXZlRWxlbWVudDtcclxuXHQgICAgICAgIGVycm9yTWVzc2FnZS5zdHlsZS52aXNpYmlsaXR5ID0gJ2NvbGxhcHNlJztcclxuXHRcdCAgICB0aGlzLnRyYW5zZmVyU2VydmljZS5zZXREYXRhKHRoaXMuZmllbGQpO1xyXG5cdFx0ICAgIHRoaXMucGFzc3dvcmQgPSAnJztcclxuXHQgICAgXHR0aGlzLm1vZGFsLnNob3dNb2RhbChTZXR0aW5nc2Zvcm1Db21wb25lbnQsIG9wdGlvbnMpLnRoZW4ocmVzID0+IHtcclxuXHRcdCAgICBcdGlmKHJlcyA9PSAndXBkYXRlJykge1xyXG5cdFx0ICAgIFx0XHR0aGlzLmNsb3NlKCd1cGRhdGUnKTtcclxuXHRcdCAgICBcdH1cclxuXHRcdCAgICB9KTtcclxuXHQgICAgICB9LFxyXG5cdCAgICAgIChlcnJvcikgPT4ge1xyXG5cdCAgICAgICAgbGV0IGVycm9yTWVzc2FnZSA9IDxMYWJlbD4gdGhpcy5lbS5uYXRpdmVFbGVtZW50O1xyXG5cdCAgICAgICAgZXJyb3JNZXNzYWdlLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XHJcblx0ICAgICAgfVxyXG5cdCAgKTtcclxuICB9XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi8qIEFkZCBtb2JpbGUgc3R5bGVzIGZvciB0aGUgY29tcG9uZW50IGhlcmUuICAqL1xcblwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjwhLS0gPGFwcC1uYXZpZ2F0aW9uPjwvYXBwLW5hdmlnYXRpb24+IC0tPlxcclxcbjxTdGFja0xheW91dD5cXHJcXG4gIDxMYWJlbCB0ZXh0PVxcXCJzZWFyY2ggd29ya3NcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIj48L0xhYmVsPlxcclxcbiAgPExhYmVsIHRleHQ9XFxcIlRoaXMgaXMgYSBtaWdyYXRlZCBjb21wb25lbnRcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIj48L0xhYmVsPlxcclxcbiAgPExhYmVsIHRleHQ9XFxcIlVwZGF0ZSBpdCB0byBwcm92aWRlIHRoZSBVSSBlbGVtZW50cyByZXF1aXJlZCBpbiB5b3VyIG1vYmlsZSBhcHBcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIj48L0xhYmVsPlxcclxcbjwvU3RhY2tMYXlvdXQ+XCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtc2VhcmNoJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NlYXJjaC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3NlYXJjaC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU2VhcmNoQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gXCIvKlxcclxcbkFkZCB5b3VyIE5hdGl2ZVNjcmlwdCBzcGVjaWZpYyBzdHlsZXMgaGVyZS5cXHJcXG5UbyBsZWFybiBtb3JlIGFib3V0IHN0eWxpbmcgaW4gTmF0aXZlU2NyaXB0IHNlZTpcXHJcXG5odHRwczovL2RvY3MubmF0aXZlc2NyaXB0Lm9yZy9hbmd1bGFyL3VpL3N0eWxpbmdcXHJcXG4qL1xcclxcblxcclxcbiNIZWFkZXIge1xcclxcbiAgICBjb2xvcjpibGFjaztcXHJcXG4gICAgZm9udC1zaXplOiAyNDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJTZWdvZSBVSVxcXCIsQXJpYWwsc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuI2xpc3RWaWV3IHtcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiAyMDtcXHJcXG59XFxyXFxuXFxyXFxuLnVwZGF0ZSB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBjb2xvcjogI2FjMDBlNjtcXHJcXG4gICAgYm9yZGVyLXdpZHRoOiAxO1xcclxcbiAgICBib3JkZXItY29sb3I6ICNhYzAwZTY7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDU7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZmxvYXQ6IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luOiBhdXRvOyBcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJTZWdvZSBVSVxcXCIsQXJpYWwsc2Fucy1zZXJpZjtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTU7XFxyXFxuICAgIHdpZHRoOiAyMDA7XFxyXFxuICAgIGhlaWdodDogNDA7XFxyXFxufVxcclxcbi51cGRhdGU6aGlnaGxpZ2h0ZWQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjllNmZmO1xcclxcbn1cXHJcXG4ucGF5bWVudHMge1xcclxcblxcdGNvbG9yOiBibGFjaztcXHJcXG5cXHRtYXJnaW4tdG9wOiAxMjtcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiAxMjtcXHJcXG5cXHRtYXJnaW4tbGVmdDogMTg7XFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTU7XFxyXFxufVxcclxcbi5sb2dvdXQge1xcclxcblxcdGNvbG9yOiAjYWMwMGU2O1xcclxcblxcdG1hcmdpbi10b3A6IDEyO1xcclxcblxcdG1hcmdpbi1ib3R0b206IDEyO1xcclxcblxcdG1hcmdpbi1sZWZ0OiAxODtcXHJcXG5cXHRmb250LXdlaWdodDogNTAwO1xcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgICBmb250LXNpemU6IDE1O1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLWxpc3QtdmlldyB7XFxyXFxuXFx0bWFyZ2luLXRvcDogMzY7XFxyXFxuXFx0aGVpZ2h0OiAxMDA7XFxyXFxufVxcclxcblxcclxcbi5pdGVtLWxpc3QtdmlldyB7XFxyXFxuXFx0aGVpZ2h0OiAzMDA7XFxyXFxufVxcclxcblxcclxcbi5wcm9maWxlLXBpY3R1cmUge1xcclxcblxcdGhlaWdodDogMTAwO1xcclxcblxcdHdpZHRoOiAxMDA7XFxyXFxuXFx0bWFyZ2luLXRvcDogMTA7XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTogODtcXHJcXG5cXHQvKmJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7Ki9cXHJcXG59XFxyXFxuXFxyXFxuLmltZy1yb3VuZGVkIHtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyLWxhYmVsIHtcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiA1O1xcclxcblxcdGZvbnQtc2l6ZTogMTU7XFxyXFxuXFx0Y29sb3I6ICM0Mjg1ZjQ7XFxyXFxufVxcclxcblxcclxcbi5ib2xkIHtcXHJcXG5cXHRmb250LXdlaWdodDogNTAwO1xcclxcbn1cXHJcXG5cXHJcXG4uYWN0aXZpdHktaW5kaWNhdG9yIHtcXHJcXG4gIGNvbG9yOiAjYWMwMGU2O1xcclxcbiAgbWFyZ2luOiAyNSU7XFxyXFxufVxcclxcblxcclxcbi52YWx1ZS1sYWJlbCB7XFxyXFxuXFx0bWFyZ2luLWxlZnQ6IDE4O1xcclxcblxcdG1hcmdpbi1ib3R0b206IDEwO1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTg7XFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxufVxcclxcbi50aXRsZS1sYWJlbCB7XFxyXFxuXFx0bWFyZ2luLXRvcDogMTY7XFxyXFxuXFx0bWFyZ2luLWxlZnQ6IDE4O1xcclxcblxcdGNvbG9yOiAjNjk2OTY5O1xcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbn1cXHJcXG5cXHJcXG4uc3RhY2stbGF5b3V0e1xcclxcbiAgICBoZWlnaHQ6MTAwJVxcclxcbn1cXHJcXG4uYWN0aXZpdHktaW5kaWNhdG9ye1xcclxcbiAgICBoZWlnaHQ6IDUwJTtcXHJcXG59XFxyXFxuTGlzdFZpZXcge1xcclxcbiAgICBzZXBhcmF0b3ItY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbn1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8IS0tIDxhcHAtbmF2aWdhdGlvbj48L2FwcC1uYXZpZ2F0aW9uPiAtLT5cXHJcXG48U3RhY2tsYXlvdXQgaGVpZ2h0PVxcXCIxMDAlXFxcIj5cXHJcXG4gICAgPFN0YWNrTGF5b3V0ICNzZXR0aW5nc0NvbnRhaW5lcj5cXHJcXG4gICAgICA8IS0tIDxMYWJlbCBpZD0gXFxcIkhlYWRlclxcXCIgdGV4dD1cXFwiQWNjb3VudCBTZXR0aW5nc1xcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiPjwvTGFiZWw+IC0tPlxcclxcbiAgICAgIDxJbWFnZSBzcmM9XFxcInt7IHByb2ZpbGUgfX1cXFwiIHN0cmV0Y2g9XFxcImFzcGVjdEZpdFxcXCIgY2xhc3M9XFxcImltZy1yb3VuZGVkIHByb2ZpbGUtcGljdHVyZVxcXCIgKHRhcCk9XFxcInVwbG9hZFBmcCgpXFxcIj48L0ltYWdlPlxcclxcbiAgICAgIDxMYWJlbCB0ZXh0PVxcXCJDaGFuZ2UgUGhvdG9cXFwiIGNsYXNzPVxcXCJoZWFkZXItbGFiZWwgYm9sZFxcXCIgKHRhcCk9XFxcInVwbG9hZFBmcCgpXFxcIj48L0xhYmVsPlxcclxcblxcclxcbiAgICAgIDxMaXN0VmlldyBbaXRlbXNdPVxcXCJmaWVsZHNcXFwiICNsaXN0VmlldyBpZD1cXFwibGlzdFZpZXdcXFwiIChpdGVtVGFwKT1cXFwic2hvd01vZGFsKCRldmVudClcXFwiIGNsYXNzPVxcXCJpdGVtLWxpc3Qtdmlld1xcXCI+XFxyXFxuICAgICAgICA8bmctdGVtcGxhdGUgbGV0LWl0ZW09XFxcIml0ZW1cXFwiIGxldC1pPVxcXCJpbmRleFxcXCIgbGV0LW9kZD1cXFwib2RkXFxcIiBsZXQtZXZlbj1cXFwiZXZlblxcXCI+XFxyXFxuICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwic3RhY2stbGF5b3V0XFxcIj5cXHJcXG4gICAgICAgICAgICA8TGFiZWwgdGV4dFdyYXA9XFxcInRydWVcXFwiIGNsYXNzPVxcXCJ0aXRsZS1sYWJlbFxcXCIgW3RleHRdPVxcXCJpdGVtLmxhYmVsXFxcIj48L0xhYmVsPlxcclxcbiAgICAgICAgICAgIDxMYWJlbCB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgY2xhc3M9XFxcInZhbHVlLWxhYmVsXFxcIiBbdGV4dF09XFxcIml0ZW0udmFsdWVcXFwiPjwvTGFiZWw+XFxyXFxuICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxyXFxuICAgICAgICA8L25nLXRlbXBsYXRlPlxcclxcbiAgICAgIDwvTGlzdFZpZXc+XFxyXFxuICAgICAgPCEtLSA8UmFkRGF0YUZvcm0gdGtFeGFtcGxlVGl0bGUgdGtUb2dnbGVOYXZCdXR0b24gW3NvdXJjZV09XFxcInBlcnNvblxcXCI+PC9SYWREYXRhRm9ybT4gICAtLT5cXHJcXG4gICAgICA8IS0tIDxCdXR0b24gY2xhc3M9XFxcIlVwZGF0ZVxcXCIgIHRleHQ9XFxcIlVwZGF0ZSBTZXR0aW5nc1xcXCI+PC9CdXR0b24+IC0tPlxcclxcblxcclxcbiAgICAgIDxMaXN0VmlldyBbaXRlbXNdPVxcXCJidXR0b25zXFxcIiAjbGlzdFZpZXdTZWNvbmQgKGl0ZW1UYXApPVxcXCJyb3V0ZSgkZXZlbnQpXFxcIiAoc2V0dXBJdGVtVmlldyk9XFxcInNldHVwSXRlbVZpZXcoJGV2ZW50KVxcXCIgY2xhc3M9XFxcImJ0bi1saXN0LXZpZXdcXFwiPlxcclxcbiAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1pdGVtPVxcXCJpdGVtXFxcIiBsZXQtaT1cXFwiaW5kZXhcXFwiIGxldC1vZGQ9XFxcIm9kZFxcXCIgbGV0LWV2ZW49XFxcImV2ZW5cXFwiIGxldC1wYXltZW50cz1cXFwicGF5bWVudHNcXFwiIGxldC1sb2dvdXQ9XFxcImxvZ291dFxcXCI+XFxyXFxuICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwic3RhY2stbGF5b3V0XFxcIj5cXHJcXG4gICAgICAgICAgICA8TGFiZWwgdGV4dFdyYXA9XFxcInRydWVcXFwiIFt0ZXh0XT1cXFwiaXRlbVxcXCIgW2NsYXNzLnBheW1lbnRzXT1cXFwicGF5bWVudHNcXFwiIFtjbGFzcy5sb2dvdXRdPVxcXCJsb2dvdXRcXFwiPjwvTGFiZWw+XFxyXFxuICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxyXFxuICAgICAgICA8L25nLXRlbXBsYXRlPlxcclxcbiAgICAgIDwvTGlzdFZpZXc+XFxyXFxuPCEtLSAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcInBheW1lbnRzLWNvbnRhaW5lclxcXCIgKHRhcCk9XFxcInRvUGF5bWVudHMoKVxcXCI+XFxyXFxuICAgICAgICA8TGFiZWwgY2xhc3M9XFxcInBheW1lbnRzXFxcIiB0ZXh0PVxcXCJQYXltZW50c1xcXCI+PC9MYWJlbD5cXHJcXG4gICAgICA8L1N0YWNrTGF5b3V0PlxcclxcbiAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwibG9nb3V0LWNvbnRhaW5lclxcXCIgKHRhcCk9XFxcImxvZ091dCgpXFxcIj5cXHJcXG4gICAgICAgIDxMYWJlbCBjbGFzcz1cXFwibG9nb3V0XFxcIiB0ZXh0PVxcXCJMb2cgb3V0XFxcIj48L0xhYmVsPlxcclxcbiAgICAgIDwvU3RhY2tMYXlvdXQ+IC0tPlxcclxcbiAgICA8L1N0YWNrTGF5b3V0PlxcclxcblxcclxcbjxBY3Rpdml0eUluZGljYXRvciAjYWN0aXZpdHlJbmRpY2F0b3IgYnVzeT1cXFwidHJ1ZVxcXCIgd2lkdGg9XFxcIjQwXFxcIiAgY2xhc3M9XFxcImFjdGl2aXR5LWluZGljYXRvclxcXCI+XFxyXFxuICA8L0FjdGl2aXR5SW5kaWNhdG9yPlxcclxcbjwvU3RhY2tsYXlvdXQ+XCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgRWxlbWVudFJlZiwgVmlld0NoaWxkLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbi8vIGltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBMb2dpbmNoZWNrU2VydmljZSB9IGZyb20gJy4uL2xvZ2luY2hlY2suc2VydmljZS50bnMnO1xyXG5pbXBvcnQgKiBhcyBmaXJlYmFzZSBmcm9tICduYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlJztcclxuaW1wb3J0IHsgbWVzc2FnaW5nIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2UvbWVzc2FnaW5nXCI7XHJcbmltcG9ydCB7IGxvZ291dCBhcyBmYkxvZ291dCB9IGZyb20gJ25hdGl2ZXNjcmlwdC1mYWNlYm9vayc7XHJcbmltcG9ydCAqIGFzIGltYWdlcGlja2VyIGZyb20gXCJuYXRpdmVzY3JpcHQtaW1hZ2VwaWNrZXJcIjtcclxuaW1wb3J0ICogYXMgZnMgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZmlsZS1zeXN0ZW1cIjtcclxuaW1wb3J0IHsgaXNBbmRyb2lkLCBpc0lPUywgZGV2aWNlLCBzY3JlZW4gfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybVwiO1xyXG5pbXBvcnQgKiBhcyBiZ2h0dHAgZnJvbSAnbmF0aXZlc2NyaXB0LWJhY2tncm91bmQtaHR0cCc7XHJcbmltcG9ydCB7IEltYWdlQ3JvcHBlciB9IGZyb20gJ25hdGl2ZXNjcmlwdC1pbWFnZWNyb3BwZXInO1xyXG5pbXBvcnQgKiBhcyBpbWFnZVNvdXJjZSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9pbWFnZS1zb3VyY2VcIjtcclxuaW1wb3J0IHsgQWN0aXZpdHlJbmRpY2F0b3IgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2FjdGl2aXR5LWluZGljYXRvcic7XHJcbmltcG9ydCB7IFN0YWNrTGF5b3V0IH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9sYXlvdXRzL3N0YWNrLWxheW91dCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGVBcnJheSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlLWFycmF5JztcclxuaW1wb3J0IHsgVHJhbnNmZXJTZXJ2aWNlIH0gZnJvbSAnLi4vZGF0YXRyYW5zZmVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBwb3N0IH0gZnJvbSAnc2VsZW5pdW0td2ViZHJpdmVyL2h0dHAnO1xyXG5pbXBvcnQgeyBNb2RhbERpYWxvZ1BhcmFtcyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9kaXJlY3RpdmVzL2RpYWxvZ3NcIjtcclxuaW1wb3J0IHsgTW9kYWxEaWFsb2dTZXJ2aWNlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2RpcmVjdGl2ZXMvZGlhbG9nc1wiO1xyXG5pbXBvcnQgeyBTZXR0aW5nc2Zvcm1Db21wb25lbnQgfSBmcm9tICcuLi9zZXR0aW5nc2Zvcm0vc2V0dGluZ3Nmb3JtLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFJlYXV0aENvbXBvbmVudCB9IGZyb20gJy4uL3JlYXV0aC9yZWF1dGguY29tcG9uZW50JztcclxuaW1wb3J0IHsgU2V0dXBJdGVtVmlld0FyZ3MgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZGlyZWN0aXZlc1wiO1xyXG5cclxuXHJcbmNsYXNzIExhYmVsIHtcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBsYWJlbDogU3RyaW5nLCBwdWJsaWMgdmFsdWU6IHN0cmluZywgcHVibGljIGZpcnN0TmFtZTogc3RyaW5nLCBwdWJsaWMgbGFzdE5hbWU6IHN0cmluZykgeyB9XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjogXCJhcHAtc2V0dGluZ3NcIixcclxuICB0ZW1wbGF0ZVVybDogJy4vc2V0dGluZ3MuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3NldHRpbmdzLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFNldHRpbmdzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMsIHByaXZhdGUgcGFnZTogUGFnZSwgcHJpdmF0ZSBsb2dpbmNoZWNrU2VydmljZTogTG9naW5jaGVja1NlcnZpY2UsIHByaXZhdGUgdHJhbnNmZXJTZXJ2aWNlOiBUcmFuc2ZlclNlcnZpY2UsXHJcbiAgXHRwcml2YXRlIHZjUmVmOiBWaWV3Q29udGFpbmVyUmVmLCBwcml2YXRlIG1vZGFsOiBNb2RhbERpYWxvZ1NlcnZpY2UpIHsgfVxyXG5cclxuICBAVmlld0NoaWxkKFwiYWN0aXZpdHlJbmRpY2F0b3JcIiwgeyBzdGF0aWM6IHRydWUgfSkgYWk6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZChcInNldHRpbmdzQ29udGFpbmVyXCIsIHsgc3RhdGljOiB0cnVlIH0pIHNjOiBFbGVtZW50UmVmO1xyXG5cclxuICBwcm9maWxlID0gXCJ+L2ltZy9zYW1wbGVfcHJvZmlsZS5wbmdcIjtcclxuICB1c2VySWQ7XHJcbiAgZmllbGRzO1xyXG4gIGltYWdlQ3JvcHBlcjogSW1hZ2VDcm9wcGVyO1xyXG4gIGltYWdlU291cmNlOiBpbWFnZVNvdXJjZS5JbWFnZVNvdXJjZTtcclxuICBidXR0b25zO1xyXG4gIHBheW1lbnRMaXN0O1xyXG4gIGxvZ291dExpc3Q7XHJcbiAgdXNlcjtcclxuICB0b2tlbjtcclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcblx0dGhpcy5pbWFnZUNyb3BwZXIgPSBuZXcgSW1hZ2VDcm9wcGVyKCk7XHJcblx0dGhpcy5sb2FkVmlld3MoKTtcclxuXHJcblx0XHRsZXQgYWN0aXZpdHlJbmRpY2F0b3IgPSA8QWN0aXZpdHlJbmRpY2F0b3I+IHRoaXMuYWkubmF0aXZlRWxlbWVudDtcclxuXHQgICAgYWN0aXZpdHlJbmRpY2F0b3Iuc3R5bGUudmlzaWJpbGl0eSA9ICdjb2xsYXBzZSdcclxuXHR9XHJcblxyXG5cdGxvYWRWaWV3cygpe1xyXG5cdFx0dGhpcy5wYXltZW50TGlzdCA9IG5ldyBPYnNlcnZhYmxlQXJyYXk8U3RyaW5nPigpO1xyXG5cdFx0dGhpcy5wYXltZW50TGlzdC5wdXNoKCdQYXltZW50IG1ldGhvZHMnKTtcclxuXHRcdHRoaXMubG9nb3V0TGlzdCA9IG5ldyBPYnNlcnZhYmxlQXJyYXk8U3RyaW5nPigpO1xyXG5cdFx0dGhpcy5sb2dvdXRMaXN0LnB1c2goJ0xvZyBvdXQnKTtcclxuXHRcdHRoaXMuYnV0dG9ucyA9IG5ldyBPYnNlcnZhYmxlQXJyYXk8U3RyaW5nPigpO1xyXG5cdFx0dGhpcy5idXR0b25zLnB1c2goJ1BheW1lbnQgbWV0aG9kcycpO1xyXG5cdFx0dGhpcy5idXR0b25zLnB1c2goJ0xvZyBvdXQnKTtcclxuXHJcblx0XHR0aGlzLnVzZXJJZCA9IHRoaXMubG9naW5jaGVja1NlcnZpY2UuZ2V0VXNlcigpO1xyXG5cdFx0Y29uc3QgdXNlckRvY3VtZW50ID0gZmlyZWJhc2UuZmlyZXN0b3JlLmNvbGxlY3Rpb24oJ3VzZXJzJykuZG9jKHRoaXMudXNlcklkKTtcclxuXHRcdHRoaXMuZmllbGRzID0gbmV3IE9ic2VydmFibGVBcnJheTxMYWJlbD4oKTtcclxuXHRcdHRoaXMudXBkYXRlTGlzdFZpZXcoKTtcclxuXHRcdGZpcmViYXNlLmdldEN1cnJlbnRVc2VyKCkudGhlbigodXNlcikgPT4ge1xyXG5cdFx0XHR0aGlzLnVzZXIgPSB1c2VyO1xyXG5cdFx0XHRpZih1c2VyLnBob3RvVVJMICE9IG51bGwpIHtcclxuXHRcdFx0XHR0aGlzLnByb2ZpbGUgPSB1c2VyLnBob3RvVVJMO1xyXG5cdFx0XHRcdGlmKHVzZXIucGhvdG9VUkwuc3Vic3RyaW5nKDAsIDI3KSA9PSAnaHR0cHM6Ly9ncmFwaC5mYWNlYm9vay5jb20vJylcclxuXHRcdFx0XHRcdHRoaXMucHJvZmlsZSArPSAnP2hlaWdodD0zMDAnO1xyXG5cdFx0XHR9XHJcblx0XHR9KVxyXG5cdH1cclxuXHJcblx0c2V0dXBJdGVtVmlldyhhcmdzOiBTZXR1cEl0ZW1WaWV3QXJncykge1xyXG5cdFx0YXJncy52aWV3LmNvbnRleHQucGF5bWVudHMgPSAoYXJncy5pbmRleCA9PSAwKTtcclxuXHRcdGFyZ3Mudmlldy5jb250ZXh0LmxvZ291dCA9IChhcmdzLmluZGV4ID09IDEpO1xyXG5cdFx0YXJncy52aWV3LmNvbnRleHQuZXZlbiA9IChhcmdzLmluZGV4ICUgMiA9PT0gMCk7XHJcblx0XHRhcmdzLnZpZXcuY29udGV4dC5vZGQgPSAoYXJncy5pbmRleCAlIDIgPT09IDEpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlTGlzdFZpZXcoKXtcclxuXHRcdHRoaXMuZmllbGRzLnNwbGljZSgwKTtcclxuXHRcdGNvbnN0IHVzZXJEb2N1bWVudCA9IGZpcmViYXNlLmZpcmVzdG9yZS5jb2xsZWN0aW9uKCd1c2VycycpLmRvYyh0aGlzLnVzZXJJZCk7XHJcblx0XHR1c2VyRG9jdW1lbnQuZ2V0KCkudGhlbihkb2MgPT4ge1xyXG5cdFx0XHRsZXQgdmFscyA9IGRvYy5kYXRhKClcclxuXHRcdFx0Ly8gY29uc29sZS5sb2coXCJmaWVsZHNcIiwgdmFscylcclxuXHRcdFx0dGhpcy5maWVsZHMucHVzaChuZXcgTGFiZWwoXCJOYW1lXCIsIHZhbHMuZmlyc3RfbmFtZSArIFwiIFwiICsgdmFscy5sYXN0X25hbWUsIHZhbHMuZmlyc3RfbmFtZSwgdmFscy5sYXN0X25hbWUpKTtcclxuXHRcdFx0dGhpcy5maWVsZHMucHVzaChuZXcgTGFiZWwoXCJFbWFpbFwiLCB2YWxzLmVtYWlsLCB2YWxzLmZpcnN0X25hbWUsIHZhbHMubGFzdF9uYW1lKSk7XHJcblx0XHRcdGlmKHZhbHMucGhvbmVfbnVtYmVyID09IFwiXCIgfHwgdmFscy5waG9uZV9udW1iZXIgPT0gbnVsbCl7XHJcblx0XHRcdFx0dGhpcy5maWVsZHMucHVzaChuZXcgTGFiZWwoXCJQaG9uZSBOdW1iZXJcIiwgXCJOb25lXCIsIHZhbHMuZmlyc3RfbmFtZSwgdmFscy5sYXN0X25hbWUpKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNle1xyXG5cdFx0XHRcdHRoaXMuZmllbGRzLnB1c2gobmV3IExhYmVsKFwiUGhvbmUgTnVtYmVyXCIsIHZhbHMucGhvbmVfbnVtYmVyLCB2YWxzLmZpcnN0X25hbWUsIHZhbHMubGFzdF9uYW1lKSk7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYodGhpcy51c2VyLnByb3ZpZGVyc1sxXS5pZCA9PSAncGFzc3dvcmQnKSB7XHJcblx0XHRcdFx0dGhpcy5maWVsZHMucHVzaChuZXcgTGFiZWwoXCJQYXNzd29yZFwiLCBcIioqKioqKioqXCIsIHZhbHMuZmlyc3RfbmFtZSwgdmFscy5sYXN0X25hbWUpKVxyXG5cdFx0XHR9XHJcblx0XHR9KVxyXG5cdH1cclxuXHR0b1BheW1lbnRzKCl7XHJcblx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ3BheW1lbnRzJ10pO1xyXG5cdH1cclxuXHJcblx0c2hvd01vZGFsKGFyZ3MpIHtcclxuXHRcdGxldCBsYWJlbCA9IHRoaXMuZmllbGRzLl9hcnJheVthcmdzLmluZGV4XVxyXG5cdFx0dGhpcy50cmFuc2ZlclNlcnZpY2Uuc2V0RGF0YShsYWJlbCk7XHJcblx0XHRsZXQgb3B0aW9ucyA9IHtcclxuXHQgICAgICAgIGNvbnRleHQ6IHt9LFxyXG5cdCAgICAgICAgZnVsbHNjcmVlbjogdHJ1ZSxcclxuXHQgICAgICAgIHZpZXdDb250YWluZXJSZWY6IHRoaXMudmNSZWZcclxuXHQgICAgICAgIC8vIGFuaW1hdGVkOiB0cnVlLFxyXG5cdCAgICAgICAgLy8gdHJhbnNpdGlvbjogeyBuYW1lOiBcInNsaWRlVG9wXCIgfVxyXG5cdCAgICB9O1xyXG5cdCAgICBpZihhcmdzLmluZGV4ID09IDMpIHtcclxuXHQgICAgXHR0aGlzLm1vZGFsLnNob3dNb2RhbChSZWF1dGhDb21wb25lbnQsIG9wdGlvbnMpLnRoZW4ocmVzID0+IHtcclxuXHRcdCAgICBcdGlmKHJlcyA9PSAndXBkYXRlJykge1xyXG5cdFx0ICAgIFx0XHR0aGlzLnVwZGF0ZUxpc3RWaWV3KCk7XHJcblx0XHQgICAgXHR9XHJcblx0XHQgICAgfSk7XHJcblx0ICAgIH1cclxuXHQgICAgZWxzZSB7XHJcblx0XHQgICAgdGhpcy5tb2RhbC5zaG93TW9kYWwoU2V0dGluZ3Nmb3JtQ29tcG9uZW50LCBvcHRpb25zKS50aGVuKHJlcyA9PiB7XHJcblx0XHQgICAgXHRpZihyZXMgPT0gJ3VwZGF0ZScpIHtcclxuXHRcdCAgICBcdFx0dGhpcy51cGRhdGVMaXN0VmlldygpO1xyXG5cdFx0ICAgIFx0fVxyXG5cdFx0ICAgIH0pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cm91dGUoYXJncykge1xyXG5cdFx0aWYoYXJncy5pbmRleCA9PSAwKSB7XHJcblx0XHRcdHRoaXMudG9QYXltZW50cygpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZihhcmdzLmluZGV4ID09IDEpIHtcclxuXHRcdFx0dGhpcy5sb2dPdXQoKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdG9uSXRlbVRhcChhcmdzKSB7XHJcblx0XHRsZXQgbGFiZWwgPSB0aGlzLmZpZWxkcy5fYXJyYXlbYXJncy5pbmRleF1cclxuXHRcdHRoaXMucm91dGVyLm5hdmlnYXRlKFsnc2V0dGluZ3Nmb3JtJ10pO1xyXG5cdFx0dGhpcy50cmFuc2ZlclNlcnZpY2Uuc2V0RGF0YShsYWJlbCk7XHJcblx0ICB9XHJcblxyXG5cdGFzeW5jIGxvZ091dCgpIHtcclxuXHRcdHZhciBhY3Rpdml0eUluZGljYXRvciA9IDxBY3Rpdml0eUluZGljYXRvcj4gdGhpcy5haS5uYXRpdmVFbGVtZW50O1xyXG5cdFx0YWN0aXZpdHlJbmRpY2F0b3IuYnVzeSA9IHRydWU7XHJcblx0XHRhY3Rpdml0eUluZGljYXRvci5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xyXG5cdFx0dmFyIHNldHRpbmdzQ29udGFpbmVyID0gPFN0YWNrTGF5b3V0PiB0aGlzLnNjLm5hdGl2ZUVsZW1lbnQ7XHJcblx0XHRzZXR0aW5nc0NvbnRhaW5lci5zdHlsZS52aXNpYmlsaXR5ID0gJ2NvbGxhcHNlJztcclxuXHJcblx0XHRjb25zdCB0b2tlblByb21pc2UgPSBhd2FpdCBtZXNzYWdpbmcuZ2V0Q3VycmVudFB1c2hUb2tlbigpLnRoZW4odG9rZW4gPT4ge1xyXG5cdFx0XHR0aGlzLnRva2VuID0gdG9rZW5cclxuXHRcdFx0cmV0dXJuIHRva2VuO1xyXG5cdFx0fSk7XHJcblx0XHRsZXQgdXNlckRvYyA9IGZpcmViYXNlLmZpcmVzdG9yZS5jb2xsZWN0aW9uKCd1c2VycycpLmRvYyh0aGlzLnVzZXJJZCk7XHJcblx0XHRcclxuXHRcdHVzZXJEb2MuZ2V0KCkudGhlbihhc3luYyAoZG9jKSA9PiB7XHJcblx0XHRcdGxldCBpbmRleCA9IGRvYy5kYXRhKCkudG9rZW5zLmluZGV4T2YodGhpcy50b2tlbik7XHJcblx0XHRcdGlmKGluZGV4ID4gLTEpIHtcclxuXHRcdFx0XHRjb25zdCBuZXdUb2tlbnMgPSBkb2MuZGF0YSgpLnRva2VucztcclxuXHRcdFx0XHRuZXdUb2tlbnMuc3BsaWNlKGluZGV4LCAxKTtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhuZXdUb2tlbnMpXHJcblx0XHRcdFx0dXNlckRvYy51cGRhdGUoe3Rva2VuczogbmV3VG9rZW5zfSk7XHJcblx0XHRcdH1cclxuXHRcdFx0Y29uc3QgY2hhdFByb21pc2UgPSBhd2FpdCB0aGlzLnVwZGF0ZUNoYXRUb2tlbnMoZG9jLmRhdGEoKS5jaGF0cyk7XHJcblx0XHRcdGZpcmViYXNlLmxvZ291dCgpO1xyXG5cdFx0XHRmYkxvZ291dCgoKSA9PiB7XHJcblxyXG5cdFx0XHR9KTtcclxuXHRcdFx0dGhpcy5sb2dpbmNoZWNrU2VydmljZS5jbGVhckluZm8oKTtcclxuXHRcdFx0YWN0aXZpdHlJbmRpY2F0b3IuYnVzeSA9IGZhbHNlO1xyXG5cdFx0XHRhY3Rpdml0eUluZGljYXRvci5zdHlsZS52aXNpYmlsaXR5ID0gJ2NvbGxhcHNlJztcclxuXHRcdFx0c2V0dGluZ3NDb250YWluZXIuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcclxuXHRcdFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUoWyd3ZWxjb21lJ10sIHtjbGVhckhpc3Rvcnk6IHRydWV9KTtcclxuXHRcdH0pXHJcblxyXG5cdH1cclxuXHJcblx0YXN5bmMgdXBkYXRlQ2hhdFRva2VucyhjaGF0cykge1xyXG5cdFx0bGV0IGNoYXRDb2xsZWN0aW9uID0gZmlyZWJhc2UuZmlyZXN0b3JlLmNvbGxlY3Rpb24oJ2NoYXRzJyk7XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgY2hhdHMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0Y29uc3QgY2hhdFByb21pc2UgPSBhd2FpdCBjaGF0Q29sbGVjdGlvbi5kb2MoY2hhdHNbaV0pLmdldCgpLnRoZW4oYXN5bmMgKGRvYykgPT4ge1xyXG5cdFx0XHRcdGxldCBpbmRleCA9IGRvYy5kYXRhKCkudG9rZW5zLmluZGV4T2YodGhpcy50b2tlbik7XHJcblx0XHRcdFx0aWYoaW5kZXggPiAtMSkge1xyXG5cdFx0XHRcdFx0Y29uc3QgbmV3VG9rZW5zID0gZG9jLmRhdGEoKS50b2tlbnM7XHJcblx0XHRcdFx0XHRuZXdUb2tlbnMuc3BsaWNlKGluZGV4LCAxKTtcclxuXHRcdFx0XHRcdGNvbnN0IHVwZGF0ZVByb21pc2UgPSBhd2FpdCBjaGF0Q29sbGVjdGlvbi5kb2MoY2hhdHNbaV0pLnVwZGF0ZSh7dG9rZW5zOiBuZXdUb2tlbnN9KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pXHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHR1cGxvYWRQZnAoKSB7XHJcblx0XHR2YXIgaW1hZ2VDcm9wcGVyID0gbmV3IEltYWdlQ3JvcHBlcigpO1xyXG5cdFx0bGV0IGNvbnRleHQgPSBpbWFnZXBpY2tlci5jcmVhdGUoe1xyXG5cdFx0ICAgIG1vZGU6IFwic2luZ2xlXCIgLy8gdXNlIFwibXVsdGlwbGVcIiBmb3IgbXVsdGlwbGUgc2VsZWN0aW9uXHJcblx0XHR9KTtcclxuXHRcdGNvbnRleHRcclxuXHQgICAgLmF1dGhvcml6ZSgpXHJcblx0ICAgIC50aGVuKGZ1bmN0aW9uKCkge1xyXG5cdCAgICAgICAgcmV0dXJuIGNvbnRleHQucHJlc2VudCgpO1xyXG5cdCAgICB9KVxyXG5cdCAgICAudGhlbigoc2VsZWN0aW9uOiBhbnkpID0+IHtcclxuXHQgICAgXHRzZWxlY3Rpb24uZm9yRWFjaCgoc2VsZWN0ZWQpID0+IHtcclxuICAgICAgICAgICAgXHRsZXQgaW1nU291cmNlID0gbmV3IGltYWdlU291cmNlLkltYWdlU291cmNlKCk7XHJcbiAgICAgICAgICAgICAgICBpbWdTb3VyY2UuZnJvbUFzc2V0KHNlbGVjdGVkKS50aGVuKChzb3VyY2UpID0+IHtcclxuICAgICAgICAgICAgICAgIFx0dGhpcy5pbWFnZUNyb3BwZXJcclxuICAgICAgICAgICAgICAgICAgICAuc2hvdyhzb3VyY2UsIHsgd2lkdGg6IDMwMCwgaGVpZ2h0OiAzMDAgfSlcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihhcmdzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5kaXIoYXJncyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhcmdzLmltYWdlICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmNyb3BwZWRJbWFnZS5pbWFnZVNvdXJjZSA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgYXJncy5pbWFnZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmb2xkZXIgPSBmcy5rbm93bkZvbGRlcnMudGVtcCgpO1xyXG5cdFx0XHRcdCAgICAgICAgICAgIHZhciBwYXRoID0gZnMucGF0aC5qb2luKGZvbGRlci5wYXRoLCBcInByb2ZpbGVfcGljdHVyZS5wbmdcIik7XHJcblx0XHRcdFx0ICAgICAgICAgICAgdmFyIHNhdmVkID0gYXJncy5pbWFnZS5zYXZlVG9GaWxlKHBhdGgsJ3BuZycpO1xyXG5cclxuXHRcdFx0XHQgICAgICAgICAgICB2YXIgYWN0aXZpdHlJbmRpY2F0b3IgPSA8QWN0aXZpdHlJbmRpY2F0b3I+IHRoaXMuYWkubmF0aXZlRWxlbWVudDtcclxuXHRcdFx0XHRcdFx0XHRhY3Rpdml0eUluZGljYXRvci5idXN5ID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0XHRhY3Rpdml0eUluZGljYXRvci5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xyXG4gICAgICBcdFx0XHRcdFx0XHR2YXIgc2V0dGluZ3NDb250YWluZXIgPSA8U3RhY2tMYXlvdXQ+IHRoaXMuc2MubmF0aXZlRWxlbWVudDtcclxuICAgICAgXHRcdFx0XHRcdFx0c2V0dGluZ3NDb250YWluZXIuc3R5bGUudmlzaWJpbGl0eSA9ICdjb2xsYXBzZSc7XHJcblxyXG5cdFx0XHRcdCAgICAgICAgICAgIGZpcmViYXNlLnN0b3JhZ2UudXBsb2FkRmlsZSh7XHJcblx0XHRcdFx0XHRcdFx0ICAgIC8vIHRoZSBmdWxsIHBhdGggb2YgdGhlIGZpbGUgaW4geW91ciBGaXJlYmFzZSBzdG9yYWdlIChmb2xkZXJzIHdpbGwgYmUgY3JlYXRlZClcclxuXHRcdFx0XHRcdFx0XHQgICAgcmVtb3RlRnVsbFBhdGg6ICd1c2Vycy8nICsgdGhpcy51c2VySWQgKyAnL3VwbG9hZHMvcHJvZmlsZV9waWN0dXJlLmpwZycsXHJcblx0XHRcdFx0XHRcdFx0ICAgIC8vIG9wdGlvbiAxOiBhIGZpbGUtc3lzdGVtIG1vZHVsZSBGaWxlIG9iamVjdFxyXG5cdFx0XHRcdFx0XHRcdCAgICBsb2NhbEZpbGU6IGZzLkZpbGUuZnJvbVBhdGgocGF0aCksXHJcblx0XHRcdFx0XHRcdFx0ICAgIC8vIG9wdGlvbiAyOiBhIGZ1bGwgZmlsZSBwYXRoIChpZ25vcmVkIGlmICdsb2NhbEZpbGUnIGlzIHNldClcclxuXHRcdFx0XHRcdFx0XHQgICAgbG9jYWxGdWxsUGF0aDogcGF0aCxcclxuXHRcdFx0XHRcdFx0XHQgICAgLy8gZ2V0IG5vdGlmaWVkIG9mIGZpbGUgdXBsb2FkIHByb2dyZXNzXHJcblx0XHRcdFx0XHRcdFx0ICAgIG9uUHJvZ3Jlc3M6IChzdGF0dXMpID0+IHtcclxuXHRcdFx0XHRcdFx0XHQgICAgICBjb25zb2xlLmxvZyhcIlVwbG9hZGVkIGZyYWN0aW9uOiBcIiArIHN0YXR1cy5mcmFjdGlvbkNvbXBsZXRlZCk7XHJcblx0XHRcdFx0XHRcdFx0ICAgICAgY29uc29sZS5sb2coXCJQZXJjZW50YWdlIGNvbXBsZXRlOiBcIiArIHN0YXR1cy5wZXJjZW50YWdlQ29tcGxldGVkKTtcclxuXHRcdFx0XHRcdFx0XHQgICAgfVxyXG5cdFx0XHRcdFx0XHRcdCAgfSkudGhlbihcclxuXHRcdFx0XHRcdFx0XHQgICAgICAodXBsb2FkZWRGaWxlKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0ICAgICAgICBjb25zb2xlLmxvZyhcIkZpbGUgdXBsb2FkZWQ6IFwiICsgSlNPTi5zdHJpbmdpZnkodXBsb2FkZWRGaWxlKSk7XHJcblx0XHRcdFx0XHRcdFx0ICAgICAgICAgIFx0XHRmaXJlYmFzZS5zdG9yYWdlLmdldERvd25sb2FkVXJsKHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgICAvLyB0aGUgZnVsbCBwYXRoIG9mIGFuIGV4aXN0aW5nIGZpbGUgaW4geW91ciBGaXJlYmFzZSBzdG9yYWdlXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICAgcmVtb3RlRnVsbFBhdGg6ICd1c2Vycy8nICsgdGhpcy51c2VySWQgKyAnL3VwbG9hZHMvcHJvZmlsZV9waWN0dXJlLmpwZydcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgfSkudGhlbihcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgICAgICh1cmwpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgICAgICAgZmlyZWJhc2UudXBkYXRlUHJvZmlsZSh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgIHBob3RvVVJMOiB1cmxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgIH0pLnRoZW4oXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgICAgKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgICAgICAgLy8gY2FsbGVkIHdoZW4gdXBkYXRlIHByb2ZpbGUgd2FzIHN1Y2Nlc3NmdWxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICAgICAgIGFjdGl2aXR5SW5kaWNhdG9yLmJ1c3kgPSBmYWxzZTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0dGluZ3NDb250YWluZXIuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YWN0aXZpdHlJbmRpY2F0b3Iuc3R5bGUudmlzaWJpbGl0eSA9ICdjb2xsYXBzZSc7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgICAgICB0aGlzLnByb2ZpbGUgPSB1cmw7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgICAgfSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICAgICAoZXJyb3JNZXNzYWdlKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgICAgICBjb25zb2xlLmxvZyhlcnJvck1lc3NhZ2UpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgICAgIH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICBjb25zdCB1c2VyRG9jdW1lbnQgPSBmaXJlYmFzZS5maXJlc3RvcmUuY29sbGVjdGlvbigndXNlcnMnKS5kb2ModGhpcy51c2VySWQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgdXNlckRvY3VtZW50LnVwZGF0ZSh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICBcdHByb2ZpbGVfc291cmNlOiB1cmxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgIH0pXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICAgICB9LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgICAgZnVuY3Rpb24gKGVycm9yKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3I6IFwiICsgZXJyb3IpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgICAgfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICApO1xyXG5cdFx0XHRcdFx0XHRcdCAgICAgIH0sXHJcblx0XHRcdFx0XHRcdFx0ICAgICAgKGVycm9yKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0ICAgICAgICBjb25zb2xlLmxvZyhcIkZpbGUgdXBsb2FkIGVycm9yOiBcIiArIGVycm9yKTtcclxuXHRcdFx0XHRcdFx0XHQgICAgICB9XHJcblx0XHRcdFx0XHRcdFx0XHQpLmNhdGNoKChlcnIpID0+IHtcclxuXHRcdFx0XHRcdFx0XHQgICAgICAgIC8vIHByb2Nlc3MgZXJyb3JcclxuXHRcdFx0XHRcdFx0XHQgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcblx0XHRcdFx0XHRcdFx0ICAgIH0pO1xyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHQgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZGlyKGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgXHRjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuXHQgICAgfSkuY2F0Y2goKGVycikgPT4ge1xyXG5cdCAgICBcdGNvbnNvbGUubG9nKGVycilcclxuXHQgICAgfSlcclxuXHR9XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi8qIEFkZCBtb2JpbGUgc3R5bGVzIGZvciB0aGUgY29tcG9uZW50IGhlcmUuICAqL1xcclxcbi5oZWFkZXJ7XFxyXFxuICAgIG1hcmdpbi10b3A6IDUwO1xcclxcblxcdG1hcmdpbi1sZWZ0OiAzMjtcXHJcXG5cXHRjb2xvcjogYmxhY2s7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzA7XFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxufVxcclxcbi5zdWJtaXQtYnRue1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNhYzAwZTY7XFxyXFxuICAgIHdpZHRoOiA3NSU7XFxyXFxuICAgIGhlaWdodDogMTcwcHg7XFxyXFxuLyogICAgZm9udC1mYW1pbHk6IFxcXCJTZWdvZSBVSVxcXCIsQXJpYWwsc2Fucy1zZXJpZjtcXHJcXG4qLyAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIG1hcmdpbi10b3A6IDIwO1xcclxcbn1cXHJcXG4udGV4dC1maWVsZHtcXHJcXG4gICAgd2lkdGg6IDg1JTtcXHJcXG4gICAgbWFyZ2luLXRvcDogMjA7XFxyXFxuICAgIGNvbG9yOiM2OTY5NjlcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlLWJ1dHRvbi1jb250YWluZXIge1xcclxcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHRsZWZ0OiAwO1xcclxcbn1cXHJcXG4uY2xvc2Uge1xcclxcblxcdG1hcmdpbjogMTA7XFxyXFxuXFx0Zm9udC1zaXplOiA0MDtcXHJcXG5cXHR3aWR0aDogNDg7XFxyXFxuICAgIGhlaWdodDogNDg7XFxyXFxuICAgIGNvbG9yOiBibGFja1xcclxcbn1cXHJcXG5cXHJcXG4uZXJyb3ItbWVzc2FnZSB7XFxyXFxuICAgIGNvbG9yOiByZWQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTY7XFxyXFxuICAgIHZpc2liaWxpdHk6IGNvbGxhcHNlO1xcclxcbn1cXHJcXG5cXHJcXG4uc2Vjb25kLXZhbCB7XFxyXFxuICAgIHZpc2liaWxpdHk6IGNvbGxhcHNlO1xcclxcbn1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8U3RhY2tsYXlvdXQ+XFxyXFxuICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiY2xvc2UtYnV0dG9uLWNvbnRhaW5lclxcXCIgb3JpZW50YXRpb249XFxcImhvcml6b250YWxcXFwiPlxcclxcbiAgICAgICAgPExhYmVsIHRleHQ9XFxcIiZ0aW1lcztcXFwiIGNsYXNzPVxcXCJjbG9zZVxcXCIgKHRhcCk9XFxcImNsb3NlKCdjYW5jZWwnKVxcXCI+PC9MYWJlbD5cXHJcXG4gICAgPC9TdGFja0xheW91dD5cXHJcXG4gICAgPExhYmVsIGNsYXNzPVxcXCJoZWFkZXJcXFwiIFt0ZXh0XT1cXFwibGFiZWxcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIj48L0xhYmVsPlxcclxcbiAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImlucHV0LWZpZWxkXFxcIj5cXHJcXG4gICAgXFx0PCEtLSA8TWFza2VkVGV4dEZpZWxkIGNsYXNzPVxcXCJpbnB1dCBpbnB1dC1ib3JkZXJcXFwiIG1hc2s9XFxcIigwMDApIDAwMC0wMDAwXFxcIiBbKG5nTW9kZWwpXT1cXFwidmFsdWVcXFwiIGtleWJvYXJkVHlwZT1cXFwicGhvbmVcXFwiPjwvTWFza2VkVGV4dEZpZWxkPiAtLT5cXHJcXG4gICAgICAgIDxUZXh0RmllbGQgI3ZhbCBbKG5nTW9kZWwpXT1cXFwidmFsdWVcXFwiIFtrZXlib2FyZFR5cGVdID0gXFxcImtleWJvYXJkXFxcIiBhdXRvY29ycmVjdD1cXFwiZmFsc2VcXFwiIHJldHVybktleVR5cGU9XFxcInt7cmV0dXJuS2V5fX1cXFwiXFxyXFxuICAgICAgICAgW21heExlbmd0aF09IFxcXCJtYXhsZW5ndGhcXFwiIGNsYXNzPVxcXCJ0ZXh0LWZpZWxkXFxcIiBzZWN1cmU9XFxcInt7aXNTZWN1cmV9fVxcXCIgaGludD1cXFwie3sgaGludCB9fVxcXCI+PC9UZXh0RmllbGQ+XFxyXFxuICAgICAgICA8VGV4dEZpZWxkICNzZWNvbmRWYWwgWyhuZ01vZGVsKV09XFxcInNlY29uZFZhbHVlXFxcIiBba2V5Ym9hcmRUeXBlXSA9IFxcXCJrZXlib2FyZFxcXCIgYXV0b2NvcnJlY3Q9XFxcImZhbHNlXFxcIiByZXR1cm5LZXlUeXBlPVxcXCJkb25lXFxcIlxcclxcbiAgICAgICAgIFttYXhMZW5ndGhdPSBcXFwibWF4bGVuZ3RoXFxcIiBjbGFzcz1cXFwidGV4dC1maWVsZCBzZWNvbmQtdmFsXFxcIiBzZWN1cmU9XFxcInt7aXNTZWN1cmV9fVxcXCIgaGludD1cXFwie3sgc2Vjb25kSGludCB9fVxcXCI+PC9UZXh0RmllbGQ+XFxyXFxuICAgIDwvU3RhY2tMYXlvdXQ+XFxyXFxuICAgIDxMYWJlbCAjZXJyb3JNZXNzYWdlIHRleHQ9XFxcInt7IGVycm9yVGV4dCB9fVxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiIGNsYXNzPVxcXCJlcnJvci1tZXNzYWdlXFxcIj48L0xhYmVsPlxcclxcblxcclxcbiAgICA8QnV0dG9uIHRleHQ9XFxcIlNhdmVcXFwiICh0YXApPVxcXCJzdWJtaXREYXRhKHZhbC50ZXh0KVxcXCIgY2xhc3M9XFxcInN1Ym1pdC1idG5cXFwiPjwvQnV0dG9uPlxcclxcblxcclxcbjwvU3RhY2tsYXlvdXQ+XCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRyYW5zZmVyU2VydmljZSB9IGZyb20gJy4uL2RhdGF0cmFuc2Zlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2VcIjtcclxuLy8gaW1wb3J0IHsgTW9kYWxEaWFsb2dQYXJhbXMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZGlyZWN0aXZlcy9kaWFsb2dzXCI7XHJcbmltcG9ydCAqIGFzIGZpcmViYXNlIGZyb20gJ25hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2UnO1xyXG5pbXBvcnQgeyBMb2dpbmNoZWNrU2VydmljZSB9IGZyb20gJy4uL2xvZ2luY2hlY2suc2VydmljZS50bnMnO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgTW9kYWxEaWFsb2dQYXJhbXMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZGlyZWN0aXZlcy9kaWFsb2dzXCI7XHJcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9nc1wiO1xyXG5pbXBvcnQgeyBMYWJlbCB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvbGFiZWwnO1xyXG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL3RleHQtZmllbGQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtc2V0dGluZ3Nmb3JtJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vc2V0dGluZ3Nmb3JtLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9zZXR0aW5nc2Zvcm0uY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZXR0aW5nc2Zvcm1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRyYW5zZmVyU2VydmljZTogVHJhbnNmZXJTZXJ2aWNlLCBwcml2YXRlIGxvZ2luY2hlY2tTZXJ2aWNlOiBMb2dpbmNoZWNrU2VydmljZSwgXHJcbiAgICBwcml2YXRlIHBhZ2U6IFBhZ2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zLCBwcml2YXRlIHBhcmFtczogTW9kYWxEaWFsb2dQYXJhbXMpIHsgfVxyXG5cclxuICBAVmlld0NoaWxkKFwiZXJyb3JNZXNzYWdlXCIsIHsgc3RhdGljOiB0cnVlIH0pIGVtOiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoXCJzZWNvbmRWYWxcIiwgeyBzdGF0aWM6IHRydWUgfSkgc3Y6IEVsZW1lbnRSZWY7XHJcbiAgdXNlcklkO1xyXG4gIGZpZWxkO1xyXG4gIGxhYmVsO1xyXG4gIHZhbHVlO1xyXG4gIHNlY29uZFZhbHVlO1xyXG4gIGtleWJvYXJkO1xyXG4gIG1heGxlbmd0aDtcclxuICBpc1NlY3VyZSA9IGZhbHNlO1xyXG4gIGVycm9yVGV4dDtcclxuICByZXR1cm5LZXkgPSBcImRvbmVcIlxyXG4gIGhpbnQ7XHJcbiAgc2Vjb25kSGludDtcclxuICBuZ09uSW5pdCgpIHtcclxuICAgIC8vIHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xyXG4gICAgdGhpcy5maWVsZCA9IHRoaXMudHJhbnNmZXJTZXJ2aWNlLmdldERhdGEoKTtcclxuICAgIHRoaXMubGFiZWwgPSB0aGlzLmZpZWxkLmxhYmVsO1xyXG4gICAgdGhpcy52YWx1ZSA9IHRoaXMuZmllbGQudmFsdWU7XHJcbiAgICBpZih0aGlzLmZpZWxkLnZhbHVlID09IFwiTm9uZVwiKSB7XHJcbiAgICAgIHRoaXMudmFsdWUgPSAnJztcclxuICAgIH1cclxuICAgIGlmKHRoaXMubGFiZWw9PVwiTmFtZVwiKXtcclxuICAgICAgLy8gdGhpcy5rZXlib2FyZCA9IFwiXCI7XHJcbiAgICAgIHRoaXMubWF4bGVuZ3RoID0gMzA7XHJcbiAgICAgIHRoaXMucmV0dXJuS2V5ID0gXCJuZXh0XCI7XHJcbiAgICAgIHRoaXMudmFsdWUgPSB0aGlzLmZpZWxkLmZpcnN0TmFtZTtcclxuICAgICAgdGhpcy5zZWNvbmRWYWx1ZSA9IHRoaXMuZmllbGQubGFzdE5hbWU7XHJcbiAgICAgIHRoaXMuaGludCA9IFwiRmlyc3QgbmFtZVwiO1xyXG4gICAgICB0aGlzLnNlY29uZEhpbnQgPSBcIkxhc3QgbmFtZVwiO1xyXG4gICAgICBsZXQgc2Vjb25kVmFsdWUgPSA8VGV4dEZpZWxkPiB0aGlzLnN2Lm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICAgIHNlY29uZFZhbHVlLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcclxuICAgIH1cclxuICAgIGVsc2UgaWYodGhpcy5sYWJlbD09XCJFbWFpbFwiKXtcclxuICAgICAgdGhpcy5rZXlib2FyZCA9IFwiZW1haWxcIjtcclxuICAgICAgdGhpcy5tYXhsZW5ndGggPSAzMDtcclxuICAgICAgdGhpcy5lcnJvclRleHQgPSBcIkludmFsaWQgZW1haWxcIlxyXG4gICAgICB0aGlzLmhpbnQgPSBcIkVtYWlsXCJcclxuICAgIH1cclxuICAgIGVsc2UgaWYodGhpcy5sYWJlbD09XCJQaG9uZSBOdW1iZXJcIil7XHJcbiAgICAgIHRoaXMua2V5Ym9hcmQgPSBcInBob25lXCI7XHJcbiAgICAgIHRoaXMubWF4bGVuZ3RoID0gMTA7XHJcbiAgICAgIHRoaXMuZXJyb3JUZXh0ID0gXCJJbnZhbGlkIHBob25lIG51bWJlclwiXHJcbiAgICAgIHRoaXMuaGludCA9IFwieHh4LXh4eC14eHh4XCJcclxuICAgIH1cclxuICAgIGVsc2UgaWYodGhpcy5sYWJlbD09XCJQYXNzd29yZFwiKSB7XHJcbiAgICAgIHRoaXMudmFsdWUgPSAnJztcclxuICAgICAgdGhpcy5tYXhsZW5ndGggPSAzMDtcclxuICAgICAgdGhpcy5pc1NlY3VyZSA9IHRydWU7XHJcbiAgICAgIHRoaXMubGFiZWwgPSBcIkVudGVyIG5ldyBwYXNzd29yZFwiO1xyXG4gICAgICB0aGlzLmhpbnQgPSBcIk5ldyBwYXNzd29yZFwiO1xyXG4gICAgICB0aGlzLnNlY29uZEhpbnQgPSBcIlJlLWVudGVyIG5ldyBwYXNzd29yZFwiO1xyXG4gICAgICB0aGlzLmVycm9yVGV4dCA9IFwiUGFzc3dvcmQgbXVzdCBiZSBhdCBsZXN0IDYgY2hhcmFjdGVycyBsb25nXCI7XHJcbiAgICAgIGxldCBzZWNvbmRWYWx1ZSA9IDxUZXh0RmllbGQ+IHRoaXMuc3YubmF0aXZlRWxlbWVudDtcclxuICAgICAgc2Vjb25kVmFsdWUuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3VibWl0RGF0YShyZXN1bHQpIHtcclxuICAgIHRoaXMudXNlcklkID0gdGhpcy5sb2dpbmNoZWNrU2VydmljZS5nZXRVc2VyKCk7XHJcbiAgICBjb25zdCB1c2VyRG9jdW1lbnQgPSBmaXJlYmFzZS5maXJlc3RvcmUuY29sbGVjdGlvbigndXNlcnMnKS5kb2ModGhpcy51c2VySWQpO1xyXG4gICAgaWYgKHRoaXMubGFiZWwgPT0gXCJOYW1lXCIpIHtcclxuICAgICAgZmlyZWJhc2UudXBkYXRlUHJvZmlsZSh7XHJcbiAgICAgICAgZGlzcGxheU5hbWU6IHRoaXMudmFsdWUgKyBcIiBcIiArIHRoaXMuc2Vjb25kVmFsdWVcclxuICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJQcm9maWxlIHVwZGF0ZWRcIilcclxuICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgICAgfSlcclxuXHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwibmFtZVwiLCBuYW1lKVxyXG4gICAgICB1c2VyRG9jdW1lbnQudXBkYXRlKHtcclxuICAgICAgICBmaXJzdF9uYW1lOiB0aGlzLnZhbHVlLFxyXG4gICAgICAgIGxhc3RfbmFtZTogdGhpcy5zZWNvbmRWYWx1ZVxyXG4gICAgICB9KVxyXG5cclxuICAgICAgdmFyIHBvc3RpbmdzQ29sbGVjdGlvbiA9IGZpcmViYXNlLmZpcmVzdG9yZS5jb2xsZWN0aW9uKCdwb3N0aW5ncycpO1xyXG4gICAgICB1c2VyRG9jdW1lbnQuZ2V0KCkudGhlbihkb2MgPT4ge1xyXG4gICAgICAgIGxldCBwb3N0SWRzID0gZG9jLmRhdGEoKS5wb3N0cztcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInBvc3RpZHNcIiwgcG9zdElkcylcclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgcG9zdElkcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgcG9zdGluZ3NDb2xsZWN0aW9uLmRvYyhwb3N0SWRzW2ldKS51cGRhdGUoe1xyXG4gICAgICAgICAgICB1c2VyOiB0aGlzLnZhbHVlICsgXCIgXCIgKyB0aGlzLnNlY29uZFZhbHVlXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMucGFyYW1zLmNsb3NlQ2FsbGJhY2soXCJ1cGRhdGVcIilcclxuICAgIH1cclxuXHJcbiAgICBlbHNlIGlmKHRoaXMubGFiZWwgPT0gXCJFbWFpbFwiKSB7XHJcbiAgICAgIGZpcmViYXNlLnVwZGF0ZUVtYWlsKHJlc3VsdCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgdXNlckRvY3VtZW50LnVwZGF0ZSh7XHJcbiAgICAgICAgICBlbWFpbDogcmVzdWx0LFxyXG4gICAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5wYXJhbXMuY2xvc2VDYWxsYmFjayhcInVwZGF0ZVwiKVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0pLmNhdGNoKFxyXG4gICAgICAgICAgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0Vycm9yKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYodGhpcy5sYWJlbCA9PSBcIlBob25lIE51bWJlclwiKSB7XHJcbiAgICAgIHVzZXJEb2N1bWVudC51cGRhdGUoe1xyXG4gICAgICAgIHBob25lX251bWJlcjogcmVzdWx0LFxyXG4gICAgICB9KS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICB0aGlzLnBhcmFtcy5jbG9zZUNhbGxiYWNrKFwidXBkYXRlXCIpXHJcbiAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICB0aGlzLnNob3dFcnJvcigpO1xyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgZWxzZSBpZih0aGlzLmxhYmVsID09IFwiRW50ZXIgbmV3IHBhc3N3b3JkXCIpIHtcclxuICAgICAgaWYodGhpcy52YWx1ZSAhPSB0aGlzLnNlY29uZFZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5lcnJvclRleHQgPSBcIlBhc3N3b3JkcyBkbyBub3QgbWF0Y2hcIjtcclxuICAgICAgICB0aGlzLnNob3dFcnJvcigpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIGZpcmViYXNlLnVwZGF0ZVBhc3N3b3JkKHRoaXMudmFsdWUpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgdGhpcy5wYXJhbXMuY2xvc2VDYWxsYmFjayhcInVwZGF0ZVwiKVxyXG4gICAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgIHRoaXMuZXJyb3JUZXh0ID0gXCJQYXNzd29yZCBtdXN0IGJlIGF0IGxlc3QgNiBjaGFyYWN0ZXJzIGxvbmdcIjtcclxuICAgICAgICAgIHRoaXMuc2hvd0Vycm9yKCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2xvc2UocmVzKSB7XHJcbiAgICB0aGlzLnBhcmFtcy5jbG9zZUNhbGxiYWNrKHJlcyk7XHJcbiAgfVxyXG5cclxuICBzaG93RXJyb3IoKSB7XHJcbiAgICBsZXQgZXJyb3JNZXNzYWdlID0gPExhYmVsPiB0aGlzLmVtLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICBlcnJvck1lc3NhZ2Uuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xyXG4gIH1cclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHA+XFxyXFxuICB1cGRhdGUgd29ya3MhXFxyXFxuPC9wPlxcclxcblwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTG9naW5jaGVja1NlcnZpY2UgfSBmcm9tICcuLi9sb2dpbmNoZWNrLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtdXBkYXRlJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vdXBkYXRlLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi91cGRhdGUuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBVcGRhdGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGxvZ2luY2hlY2tTZXJ2aWNlOiBMb2dpbmNoZWNrU2VydmljZSkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIFx0dGhpcy5sb2dpbmNoZWNrU2VydmljZS5sb2dpbkNoZWNrKCk7XHJcbiAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBVc2VyU2VydmljZSB7XHJcbiAgXHQvKipcclxuXHQqIFRvIGdldCB0aGUgc2VydmVyIHRvIHJlY29nbml6ZSB5b3VyIG1vYmlsZSBkZXZpY2UsIGZpbmQgeW91ciBpcHY0IGFkZHJlc3MgYnkgcnVubmluZyBpcGNvbmZpZyBpbiBhIHRlcm1pbmFsIHdpbmRvd1xyXG5cdCogYW5kIGFkZCBhIG5ldyB1cmkgbGluZSB3aXRoIHlvdXIgaXB2NCBhZGRyZXNzLiBEbyB0aGlzIGZvciBuZXR3b3JrX3NlY3VyaXR5X2NvbmZpZy54bWwsIHVzZXIuc2VydmljZXMudG5zLnRzLCBhbmRcclxuXHQqIHBvc3Rpbmcuc2VydmljZS50bnMudHMuXHJcblx0Ki9cclxuXHQvLyBBZGFtJ3MgdGVzdGluZyBzZXJ2ZXJcclxuXHQvLyB1cmkgPSAnaHR0cDovLzE5Mi4xNjguMS43OjQwMDAnO1xyXG5cdC8vIHVyaSA9ICdodHRwOi8vMTAuNS4xMS4yNTo0MDAwJztcclxuXHQvLyBQaGlsbGlwJ3MgVGVzdGluZyBzZXJ2ZXJcclxuXHR1cmkgPSAnaHR0cDovLzE5Mi4xNjguMS4zOjQwMDAnO1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkgeyB9XHJcblxyXG4gIGdldFVzZXJzKCkge1xyXG4gIFx0cmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy51cml9L3VzZXJzYCk7XHJcbiAgfVxyXG5cclxuICBnZXRVc2VyYnlJZChpZCkge1xyXG4gIFx0cmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy51cml9L3VzZXJzLyR7aWR9YCk7XHJcbiAgfVxyXG5cclxuICBhZGRVc2VyKG5hbWU9JycsIHVzZXJuYW1lPScnLCBhZGRyZXNzPScnLCBiaXJ0aGRhdGU9JycsIGVtYWlsPScnLCBnZW5kZXI9JycsIHBob25lX251bWJlcj0nJywgcmlkZXNfZ2l2ZW49XCIwXCIsIHJpZGVzX3JlY2VpdmVkPVwiMFwiKSB7XHJcbiAgXHRjb25zdCB1c2VyID0ge1xyXG4gIFx0XHRuYW1lOiBuYW1lLFxyXG4gICAgICB1c2VybmFtZTogdXNlcm5hbWUsXHJcbiAgICAgIGFkZHJlc3M6IGFkZHJlc3MsXHJcbiAgICAgIGJpcnRoZGF0ZTogYmlydGhkYXRlLFxyXG4gICAgICBlbWFpbDogZW1haWwsXHJcbiAgICAgIGdlbmRlcjogZ2VuZGVyLFxyXG4gICAgICBwaG9uZV9udW1iZXI6IHBob25lX251bWJlcixcclxuICAgICAgcmlkZXNfZ2l2ZW46IHJpZGVzX2dpdmVuLFxyXG4gICAgICByaWRlc19yZWNlaXZlZDogcmlkZXNfcmVjZWl2ZWQsXHJcbiAgICAgIHBheW1lbnRfaWQ6IFwiXCJcclxuICBcdH07XHJcbiAgXHRyZXR1cm4gdGhpcy5odHRwLnBvc3QoYCR7dGhpcy51cml9L3VzZXJzL2FkZC9gLCB1c2VyKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVVzZXIoaWQsIG5hbWUsIHVzZXJuYW1lLCBhZGRyZXNzLCBiaXJ0aGRhdGUsIGVtYWlsLCBnZW5kZXIsIHBob25lX251bWJlciwgcmlkZXNfZ2l2ZW4sIHJpZGVzX3JlY2VpdmVkLCBwYXltZW50X2lkKSB7XHJcbiAgXHRjb25zdCB1c2VyID0ge1xyXG4gICAgICBuYW1lOiBuYW1lLFxyXG4gICAgICB1c2VybmFtZTogdXNlcm5hbWUsXHJcbiAgICAgIGFkZHJlc3M6IGFkZHJlc3MsXHJcbiAgICAgIGJpcnRoZGF0ZTogYmlydGhkYXRlLFxyXG4gICAgICBlbWFpbDogZW1haWwsXHJcbiAgICAgIGdlbmRlcjogZ2VuZGVyLFxyXG4gICAgICBwaG9uZV9udW1iZXI6IHBob25lX251bWJlcixcclxuICAgICAgcmlkZXNfZ2l2ZW46IHJpZGVzX2dpdmVuLFxyXG4gICAgICByaWRlc19yZWNlaXZlZDogcmlkZXNfcmVjZWl2ZWQsXHJcbiAgICAgIHBheW1lbnRfaWQ6IHBheW1lbnRfaWRcclxuICAgIH07XHJcbiAgXHRyZXR1cm4gdGhpcy5odHRwLnBvc3QoYCR7dGhpcy51cml9L3VzZXJzL3VwZGF0ZS8ke2lkfWAsIHVzZXIpO1xyXG4gIH1cclxuXHJcbiAgZGVsZXRlVXNlcihpZCkge1xyXG4gIFx0cmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy51cml9L3VzZXJzL2RlbGV0ZS8ke2lkfWApO1xyXG4gIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgVXNlclNlcnZpY2Uge1xyXG4gIFx0LyoqXHJcblx0KiBUbyBnZXQgdGhlIHNlcnZlciB0byByZWNvZ25pemUgeW91ciBtb2JpbGUgZGV2aWNlLCBmaW5kIHlvdXIgaXB2NCBhZGRyZXNzIGJ5IHJ1bm5pbmcgaXBjb25maWcgaW4gYSB0ZXJtaW5hbCB3aW5kb3dcclxuXHQqIGFuZCBhZGQgYSBuZXcgdXJpIGxpbmUgd2l0aCB5b3VyIGlwdjQgYWRkcmVzcy4gRG8gdGhpcyBmb3IgbmV0d29ya19zZWN1cml0eV9jb25maWcueG1sLCB1c2VyLnNlcnZpY2VzLnRucy50cywgYW5kXHJcblx0KiBwb3N0aW5nLnNlcnZpY2UudG5zLnRzLlxyXG5cdCovXHJcblx0Ly8gQWRhbSdzIHRlc3Rpbmcgc2VydmVyXHJcblx0Ly8gdXJpID0gJ2h0dHA6Ly8xOTIuMTY4LjEuNzo0MDAwJztcclxuXHQvLyB1cmkgPSAnaHR0cDovLzEwLjUuMTEuMjU6NDAwMCc7XHJcblx0Ly8gUGhpbGxpcCdzIFRlc3Rpbmcgc2VydmVyXHJcblx0dXJpID0gJ2h0dHA6Ly8xOTIuMTY4LjEuMzo0MDAwJztcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHsgfVxyXG5cclxuICBnZXRVc2VycygpIHtcclxuICBcdHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke3RoaXMudXJpfS91c2Vyc2ApO1xyXG4gIH1cclxuXHJcbiAgZ2V0VXNlcmJ5SWQoaWQpIHtcclxuICBcdHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke3RoaXMudXJpfS91c2Vycy8ke2lkfWApO1xyXG4gIH1cclxuXHJcbiAgYWRkVXNlcihuYW1lPScnLCB1c2VybmFtZT0nJywgYWRkcmVzcz0nJywgYmlydGhkYXRlPScnLCBlbWFpbD0nJywgZ2VuZGVyPScnLCBwaG9uZV9udW1iZXI9JycsIHJpZGVzX2dpdmVuPVwiMFwiLCByaWRlc19yZWNlaXZlZD1cIjBcIikge1xyXG4gIFx0Y29uc3QgdXNlciA9IHtcclxuICBcdFx0bmFtZTogbmFtZSxcclxuICAgICAgdXNlcm5hbWU6IHVzZXJuYW1lLFxyXG4gICAgICBhZGRyZXNzOiBhZGRyZXNzLFxyXG4gICAgICBiaXJ0aGRhdGU6IGJpcnRoZGF0ZSxcclxuICAgICAgZW1haWw6IGVtYWlsLFxyXG4gICAgICBnZW5kZXI6IGdlbmRlcixcclxuICAgICAgcGhvbmVfbnVtYmVyOiBwaG9uZV9udW1iZXIsXHJcbiAgICAgIHJpZGVzX2dpdmVuOiByaWRlc19naXZlbixcclxuICAgICAgcmlkZXNfcmVjZWl2ZWQ6IHJpZGVzX3JlY2VpdmVkLFxyXG4gICAgICBwYXltZW50X2lkOiBcIlwiXHJcbiAgXHR9O1xyXG4gIFx0cmV0dXJuIHRoaXMuaHR0cC5wb3N0KGAke3RoaXMudXJpfS91c2Vycy9hZGQvYCwgdXNlcik7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVVc2VyKGlkLCBuYW1lLCB1c2VybmFtZSwgYWRkcmVzcywgYmlydGhkYXRlLCBlbWFpbCwgZ2VuZGVyLCBwaG9uZV9udW1iZXIsIHJpZGVzX2dpdmVuLCByaWRlc19yZWNlaXZlZCwgcGF5bWVudF9pZCkge1xyXG4gIFx0Y29uc3QgdXNlciA9IHtcclxuICAgICAgbmFtZTogbmFtZSxcclxuICAgICAgdXNlcm5hbWU6IHVzZXJuYW1lLFxyXG4gICAgICBhZGRyZXNzOiBhZGRyZXNzLFxyXG4gICAgICBiaXJ0aGRhdGU6IGJpcnRoZGF0ZSxcclxuICAgICAgZW1haWw6IGVtYWlsLFxyXG4gICAgICBnZW5kZXI6IGdlbmRlcixcclxuICAgICAgcGhvbmVfbnVtYmVyOiBwaG9uZV9udW1iZXIsXHJcbiAgICAgIHJpZGVzX2dpdmVuOiByaWRlc19naXZlbixcclxuICAgICAgcmlkZXNfcmVjZWl2ZWQ6IHJpZGVzX3JlY2VpdmVkLFxyXG4gICAgICBwYXltZW50X2lkOiBwYXltZW50X2lkXHJcbiAgICB9O1xyXG4gIFx0cmV0dXJuIHRoaXMuaHR0cC5wb3N0KGAke3RoaXMudXJpfS91c2Vycy91cGRhdGUvJHtpZH1gLCB1c2VyKTtcclxuICB9XHJcblxyXG4gIGRlbGV0ZVVzZXIoaWQpIHtcclxuICBcdHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke3RoaXMudXJpfS91c2Vycy9kZWxldGUvJHtpZH1gKTtcclxuICB9XHJcblxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCIvKiBBZGQgbW9iaWxlIHN0eWxlcyBmb3IgdGhlIGNvbXBvbmVudCBoZXJlLiAgKi9cXG4ucGFnZSB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHZpc2liaWxpdHk6IGNvbGxhcHNlO1xcbn1cXG4uZm9ybSB7XFxuICBtYXJnaW4tbGVmdDogMzA7XFxuICBtYXJnaW4tcmlnaHQ6IDMwO1xcbiAgZmxleC1ncm93OiAyO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuXFxuLmxvZ28ge1xcbiAgbWFyZ2luLWJvdHRvbTogNzI7XFxuICBoZWlnaHQ6IDEyMDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4uaGVhZGVyIHtcXG4gIGhvcml6b250YWwtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMjU7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgbWFyZ2luLWJvdHRvbTogNzA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogI2FjMDBlNjtcXG59XFxuXFxuLmlucHV0LWZpZWxkIHtcXG4gIG1hcmdpbi1ib3R0b206IDI1O1xcbn1cXG4uaW5wdXQge1xcbiAgZm9udC1zaXplOiAxODtcXG4gIHBsYWNlaG9sZGVyLWNvbG9yOiAjQThBOEE4O1xcbn1cXG5cXG4uYnRuLXByaW1hcnkge1xcbiAgaGVpZ2h0OiA1MDtcXG4gIG1hcmdpbjogMzAgNSAxNSA1O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FjMDBlNjtcXG4gIGJvcmRlci1yYWRpdXM6IDU7XFxuICBmb250LXNpemU6IDIwO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLmJ0bi1mYiB7XFxuICBoZWlnaHQ6IDEwMDtcXG4gIG1hcmdpbjogMCA1IDE1IDU7XFxuICAvKmJvcmRlci1yYWRpdXM6IDU7Ki9cXG4gIGZvbnQtc2l6ZTogMjA7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4ubG9naW4tbGFiZWwge1xcbiAgaG9yaXpvbnRhbC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6ICNBOEE4QTg7XFxuICBmb250LXNpemU6IDE2O1xcbn1cXG4uc2lnbi11cC1sYWJlbCB7XFxuICBtYXJnaW4tYm90dG9tOiAyMDtcXG59XFxuLmJvbGQge1xcbiAgY29sb3I6ICMwMDAwMDA7IFxcbn1cXG4uYWN0aXZpdHktaW5kaWNhdG9yIHtcXG4gIGNvbG9yOiAjYWMwMGU2O1xcbn1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8RmxleGJveExheW91dCBjbGFzcz1cXFwicGFnZVxcXCIgI3dlbGNvbWVDb250YWluZXI+XFxyXFxuXFx0PFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJmb3JtXFxcIj5cXHJcXG5cXHRcXHQ8SW1hZ2UgY2xhc3M9XFxcImxvZ29cXFwiIHNyYz1cXFwifi9pbWcvbG9nby5wbmdcXFwiPjwvSW1hZ2U+XFxyXFxuXFx0XFx0PCEtLSA8TGFiZWwgY2xhc3M9XFxcImhlYWRlclxcXCIgdGV4dD1cXFwiQ29sbGVnZVBvb2xcXFwiPjwvTGFiZWw+IC0tPlxcclxcblxcclxcblxcdFxcdDxTdGFja0xheW91dCAqbmdJZj1cXFwiIWlzTG9nZ2luZ0luXFxcIiBjbGFzcz1cXFwiaW5wdXQtZmllbGRcXFwiPlxcclxcblxcdFxcdFxcdDxUZXh0RmllbGQgY2xhc3M9XFxcImlucHV0XFxcIiBoaW50PVxcXCJGaXJzdCBuYW1lXFxcIiBbKG5nTW9kZWwpXT1cXFwiZmlyc3ROYW1lXFxcIiByZXR1cm5LZXlUeXBlPVxcXCJuZXh0XFxcIiAjZm4+PC9UZXh0RmllbGQ+XFxyXFxuXFx0XFx0XFx0PFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJoci1saWdodFxcXCI+PC9TdGFja0xheW91dD5cXHJcXG5cXHRcXHQ8L1N0YWNrTGF5b3V0PlxcclxcblxcclxcblxcdFxcdDxTdGFja0xheW91dCAqbmdJZj1cXFwiIWlzTG9nZ2luZ0luXFxcIiBjbGFzcz1cXFwiaW5wdXQtZmllbGRcXFwiPlxcclxcblxcdFxcdFxcdDxUZXh0RmllbGQgY2xhc3M9XFxcImlucHV0XFxcIiBoaW50PVxcXCJMYXN0IG5hbWVcXFwiIFsobmdNb2RlbCldPVxcXCJsYXN0TmFtZVxcXCIgcmV0dXJuS2V5VHlwZT1cXFwibmV4dFxcXCIgI2xuPjwvVGV4dEZpZWxkPlxcclxcblxcdFxcdFxcdDxTdGFja0xheW91dCBjbGFzcz1cXFwiaHItbGlnaHRcXFwiPjwvU3RhY2tMYXlvdXQ+XFxyXFxuXFx0XFx0PC9TdGFja0xheW91dD5cXHJcXG5cXHJcXG5cXHRcXHQ8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImlucHV0LWZpZWxkXFxcIj5cXHJcXG5cXHRcXHRcXHQ8VGV4dEZpZWxkIGNsYXNzPVxcXCJpbnB1dFxcXCIgaGludD1cXFwiRW1haWxcXFwiIGtleWJvYXJkVHlwZT1cXFwiZW1haWxcXFwiIGF1dG9jb3JyZWN0PVxcXCJmYWxzZVxcXCIgYXV0b2NhcGl0YWxpemF0aW9uVHlwZT1cXFwibm9uZVxcXCIgWyhuZ01vZGVsKV09XFxcImVtYWlsXFxcIiByZXR1cm5LZXlUeXBlPVxcXCJuZXh0XFxcIiAocmV0dXJuUHJlc3MpPVxcXCJmb2N1c1Bhc3N3b3JkKClcXFwiICNlbT48L1RleHRGaWVsZD5cXHJcXG5cXHRcXHRcXHQ8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImhyLWxpZ2h0XFxcIj48L1N0YWNrTGF5b3V0PlxcclxcblxcdFxcdDwvU3RhY2tMYXlvdXQ+XFxyXFxuXFxyXFxuXFx0XFx0PFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJpbnB1dC1maWVsZFxcXCI+XFxyXFxuXFx0XFx0XFx0PFRleHRGaWVsZCBjbGFzcz1cXFwiaW5wdXRcXFwiIGhpbnQ9XFxcIlBhc3N3b3JkXFxcIiBzZWN1cmU9XFxcInRydWVcXFwiIFsobmdNb2RlbCldPVxcXCJwYXNzd29yZFxcXCIgW3JldHVybktleVR5cGVdPVxcXCJpc0xvZ2dpbmdJbiA/ICdkb25lJyA6ICduZXh0J1xcXCIgKHJldHVyblByZXNzKT1cXFwiZm9jdXNDb25maXJtUGFzc3dvcmQoKVxcXCIgI3B3PjwvVGV4dEZpZWxkPlxcclxcblxcdFxcdFxcdDxTdGFja0xheW91dCBjbGFzcz1cXFwiaHItbGlnaHRcXFwiPjwvU3RhY2tMYXlvdXQ+XFxyXFxuXFx0XFx0PC9TdGFja0xheW91dD5cXHJcXG5cXHJcXG5cXHRcXHQ8U3RhY2tMYXlvdXQgKm5nSWY9XFxcIiFpc0xvZ2dpbmdJblxcXCIgY2xhc3M9XFxcImlucHV0LWZpZWxkXFxcIj5cXHJcXG5cXHRcXHRcXHQ8VGV4dEZpZWxkIGNsYXNzPVxcXCJpbnB1dFxcXCIgaGludD1cXFwiQ29uZmlybSBwYXNzd29yZFxcXCIgc2VjdXJlPVxcXCJ0cnVlXFxcIiBbKG5nTW9kZWwpXT1cXFwiY29uZmlybVBhc3N3b3JkXFxcIiByZXR1cm5LZXlUeXBlPVxcXCJkb25lXFxcIiAjY3B3PjwvVGV4dEZpZWxkPlxcclxcblxcdFxcdFxcdDxTdGFja0xheW91dCBjbGFzcz1cXFwiaHItbGlnaHRcXFwiPjwvU3RhY2tMYXlvdXQ+XFxyXFxuXFx0XFx0PC9TdGFja0xheW91dD5cXHJcXG5cXHJcXG5cXHRcXHQ8QnV0dG9uIFt0ZXh0XT1cXFwiaXNMb2dnaW5nSW4gPyAnTG9nIEluJyA6ICdTaWduIFVwJ1xcXCIgKHRhcCk9XFxcInN1Ym1pdCgpXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5IG0tdC0yMFxcXCI+PC9CdXR0b24+XFxyXFxuXFx0XFx0PFN0YWNrTGF5b3V0PlxcclxcblxcdFxcdFxcdDxGYWNlYm9va0xvZ2luQnV0dG9uICh0YXApPVxcXCJmYkxvZ2luKClcXFwiIGNsYXNzPVxcXCJidG4tZmJcXFwiPjwvRmFjZWJvb2tMb2dpbkJ1dHRvbj5cXHJcXG5cXHRcXHQ8L1N0YWNrTGF5b3V0PlxcclxcblxcdFxcdDxMYWJlbCAqbmdJZj1cXFwiaXNMb2dnaW5nSW5cXFwiIHRleHQ9XFxcIkZvcmdvdCB5b3VyIHBhc3N3b3JkP1xcXCIgY2xhc3M9XFxcImxvZ2luLWxhYmVsXFxcIiAodGFwKT1cXFwiZm9yZ290UGFzc3dvcmQoKVxcXCI+PC9MYWJlbD5cXHJcXG5cXHQ8L1N0YWNrTGF5b3V0PlxcclxcblxcclxcblxcdDxMYWJlbCBjbGFzcz1cXFwibG9naW4tbGFiZWwgc2lnbi11cC1sYWJlbFxcXCIgKHRhcCk9XFxcInRvZ2dsZUZvcm0oKVxcXCI+XFxyXFxuXFx0XFx0PEZvcm1hdHRlZFN0cmluZz5cXHJcXG5cXHRcXHRcXHQ8U3BhbiBbdGV4dF09XFxcImlzTG9nZ2luZ0luID8gJ0RvbuKAmXQgaGF2ZSBhbiBhY2NvdW50PyAnIDogJ0JhY2sgdG8gTG9naW4nXFxcIj48L1NwYW4+XFxyXFxuXFx0XFx0XFx0PFNwYW4gW3RleHRdPVxcXCJpc0xvZ2dpbmdJbiA/ICdTaWduIHVwJyA6ICcnXFxcIiBjbGFzcz1cXFwiYm9sZFxcXCI+PC9TcGFuPlxcclxcblxcdFxcdDwvRm9ybWF0dGVkU3RyaW5nPlxcclxcblxcdDwvTGFiZWw+XFxyXFxuPC9GbGV4Ym94TGF5b3V0PlxcclxcblxcclxcbjxBY3Rpdml0eUluZGljYXRvciAjYWN0aXZpdHlJbmRpY2F0b3IgYnVzeT1cXFwidHJ1ZVxcXCIgd2lkdGg9XFxcIjQwXFxcIiBoZWlnaHQ9XFxcIjQwXFxcIiBjbGFzcz1cXFwiYWN0aXZpdHktaW5kaWNhdG9yXFxcIj5cXHJcXG48L0FjdGl2aXR5SW5kaWNhdG9yPlwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCwgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGFsZXJ0LCBwcm9tcHQgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCI7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2UnO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0ICogYXMgZmlyZWJhc2UgZnJvbSAnbmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZSc7XHJcbmltcG9ydCB7IG1lc3NhZ2luZywgTWVzc2FnZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlL21lc3NhZ2luZ1wiO1xyXG5pbXBvcnQgeyBMb2dpbmNoZWNrU2VydmljZSB9IGZyb20gJy4uL2xvZ2luY2hlY2suc2VydmljZS50bnMnO1xyXG5pbXBvcnQgeyBBY3Rpdml0eUluZGljYXRvciB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvYWN0aXZpdHktaW5kaWNhdG9yJztcclxuaW1wb3J0IHsgVHJhbnNmZXJTZXJ2aWNlIH0gZnJvbSAnLi4vZGF0YXRyYW5zZmVyLnNlcnZpY2UnO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLXdlbGNvbWUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi93ZWxjb21lLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi93ZWxjb21lLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFdlbGNvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIGlzTG9nZ2luZ0luID0gdHJ1ZTtcclxuICBlbWFpbDtcclxuICBwYXNzd29yZDtcclxuICBjb25maXJtUGFzc3dvcmQ7XHJcbiAgZmlyc3ROYW1lO1xyXG4gIGxhc3ROYW1lO1xyXG4gIGRldmljZVRva2VuO1xyXG4gIGZpcmViYXNlQ29uZmlnID0ge1xyXG4gICAgYXBpS2V5OiBcIkFJemFTeUJHdWlZcE0xMzhRNmF5cURNUlVWV0pwMUNFOVdCMDlOd1wiLFxyXG4gIFx0YXV0aERvbWFpbjogXCJjb2xsZWdlcG9vbC0xNTUyNzQ5MTE4NjE3LmZpcmViYXNlYXBwLmNvbVwiLFxyXG4gIFx0ZGF0YWJhc2VVUkw6IFwiaHR0cHM6Ly9jb2xsZWdlcG9vbC0xNTUyNzQ5MTE4NjE3LmZpcmViYXNlaW8uY29tXCIsXHJcbiAgXHRwcm9qZWN0SWQ6IFwiY29sbGVnZXBvb2wtMTU1Mjc0OTExODYxN1wiLFxyXG4gIFx0c3RvcmFnZUJ1Y2tldDogXCJnczovL2NvbGxlZ2Vwb29sLTE1NTI3NDkxMTg2MTcuYXBwc3BvdC5jb21cIixcclxuICBcdG1lc3NhZ2luZ1NlbmRlcklkOiBcIjM3NTI2MzY4MDE4M1wiLFxyXG4gIFx0YXBwSWQ6IFwiMTozNzUyNjM2ODAxODM6d2ViOmYyYWYzZjI4MzU2MzhkN2NcIixcclxuICB9O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2U6IFBhZ2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zLCBwcml2YXRlIGxvZ2luY2hlY2tTZXJ2aWNlOiBMb2dpbmNoZWNrU2VydmljZSwgcHJpdmF0ZSB0cmFuc2ZlclNlcnZpY2U6IFRyYW5zZmVyU2VydmljZSxcclxuICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmUpIHsgfVxyXG5cclxuICBAVmlld0NoaWxkKFwiZW1cIiwgeyBzdGF0aWM6IHRydWUgfSkgZW06IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZChcInB3XCIsIHsgc3RhdGljOiB0cnVlIH0pIHB3OiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoXCJjcHdcIiwgeyBzdGF0aWM6IHRydWUgfSkgY3B3OiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoXCJmblwiLCB7IHN0YXRpYzogdHJ1ZSB9KSBmbjogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKFwibG5cIiwgeyBzdGF0aWM6IHRydWUgfSkgbG46IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZChcIndlbGNvbWVDb250YWluZXJcIiwgeyBzdGF0aWM6IHRydWUgfSkgd2M6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZChcImFjdGl2aXR5SW5kaWNhdG9yXCIsIHsgc3RhdGljOiB0cnVlIH0pIGFpOiBFbGVtZW50UmVmO1xyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMucmVnaXN0ZXJOb3RpZmljYXRpb25zKCk7XHJcbiAgICB0aGlzLmNyZWF0ZVZpZXdzKCk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBjcmVhdGVWaWV3cygpIHtcclxuICAgIGF3YWl0IGZpcmViYXNlLmluaXQodGhpcy5maXJlYmFzZUNvbmZpZykudGhlbihcclxuICAgICAgKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZmlyZWJhc2UuaW5pdCBkb25lXCIpO1xyXG4gICAgICB9LFxyXG4gICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYGZpcmViYXNlLmluaXQgZXJyb3I6ICR7ZXJyb3J9YCk7XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgICBhd2FpdCBmaXJlYmFzZS5hZGRPbk1lc3NhZ2VSZWNlaXZlZENhbGxiYWNrKGFzeW5jIChtZXNzYWdlOiBhbnkpID0+IHtcclxuICAgICAgaWYobWVzc2FnZS50eXBlID09PSBcIk5ldyBNZXNzYWdlXCIpIHtcclxuICAgICAgICB0aGlzLnRyYW5zZmVyU2VydmljZS5zZXREYXRhKG1lc3NhZ2UuZGF0YS5jaGF0SWQpO1xyXG4gICAgICAgIGF3YWl0IHRoaXMubmdab25lLnJ1bigoKSA9PiB7dGhpcy5yb3V0ZXIubmF2aWdhdGUoWydjaGF0J10sIHtjbGVhckhpc3Rvcnk6IHRydWV9KX0pXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICBpZiAodGhpcy5sb2dpbmNoZWNrU2VydmljZS5nZXRVc2VyRnJvbUxvY2FsU3RvcmFnZSgpICE9IG51bGwpXHJcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnbmF2aWdhdGlvbiddLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcclxuICAgIGVsc2Uge1xyXG4gICAgICB2YXIgYWN0aXZpdHlJbmRpY2F0b3IgPSA8QWN0aXZpdHlJbmRpY2F0b3I+dGhpcy5haS5uYXRpdmVFbGVtZW50O1xyXG4gICAgICBhY3Rpdml0eUluZGljYXRvci5idXN5ID0gZmFsc2U7XHJcbiAgICAgIHRoaXMud2MubmF0aXZlRWxlbWVudC5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xyXG4gICAgfVxyXG4gICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XHJcbiAgfVxyXG5cclxuICB0b2dnbGVGb3JtKCkge1xyXG4gICAgdGhpcy5pc0xvZ2dpbmdJbiA9ICF0aGlzLmlzTG9nZ2luZ0luO1xyXG4gIH1cclxuXHJcbiAgc3VibWl0KCkge1xyXG4gICAgaWYgKCF0aGlzLmVtYWlsIHx8ICF0aGlzLnBhc3N3b3JkKSB7XHJcbiAgICAgIHRoaXMuYWxlcnQoXCJQbGVhc2UgcHJvdmlkZSBib3RoIGFuIGVtYWlsIGFkZHJlc3MgYW5kIHBhc3N3b3JkXCIpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuaXNMb2dnaW5nSW4pIHtcclxuICAgICAgdGhpcy5sb2dpbigpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5yZWdpc3RlcigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbG9naW4oKSB7XHJcbiAgICB2YXIgY3JlZGVudGlhbHM6IGZpcmViYXNlLkxvZ2luT3B0aW9ucyA9IHtcclxuICAgICAgcGFzc3dvcmRPcHRpb25zOiB7XHJcbiAgICAgICAgZW1haWw6IHRoaXMuZW1haWwsXHJcbiAgICAgICAgcGFzc3dvcmQ6IHRoaXMucGFzc3dvcmQsXHJcbiAgICAgIH0sXHJcbiAgICAgIHR5cGU6IGZpcmViYXNlLkxvZ2luVHlwZS5QQVNTV09SRFxyXG4gICAgfVxyXG4gICAgZmlyZWJhc2UubG9naW4oY3JlZGVudGlhbHMpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICB0aGlzLmxvZ2luY2hlY2tTZXJ2aWNlLmxvZ2luVXNlcihyZXMudWlkKVxyXG4gICAgICBmaXJlYmFzZS5maXJlc3RvcmUuY29sbGVjdGlvbigndXNlcnMnKS5kb2MocmVzLnVpZCkuZ2V0KCkudGhlbihkb2MgPT4ge1xyXG4gICAgICAgIGlmIChkb2MuZGF0YSgpLnBheW1lbnRfaWQgPT0gbnVsbClcclxuICAgICAgICAgIHRoaXMubG9naW5jaGVja1NlcnZpY2UuYWRkVXNlclRvQnJhaW50cmVlKHJlcy5kaXNwbGF5TmFtZSwgcmVzLmRpc3BsYXlOYW1lLCByZXMuZW1haWwpXHJcbiAgICAgIH0pXHJcbiAgICAgIHRoaXMudXBkYXRlVG9rZW5zKHJlcy51aWQpO1xyXG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ25hdmlnYXRpb24nXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XHJcbiAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgIHRoaXMuYWxlcnQoXCJXZSBjb3VsZCBub3QgZmluZCBhbiBhY2NvdW50IG1hdGNoaW5nIHlvdXIgZW1haWwgb3IgcGFzc3dvcmRcIik7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICByZWdpc3RlcigpIHtcclxuXHQgIGlmICh0aGlzLnBhc3N3b3JkICE9IHRoaXMuY29uZmlybVBhc3N3b3JkKSB7XHJcblx0ICAgIHRoaXMuYWxlcnQoXCJZb3VyIHBhc3N3b3JkcyBkbyBub3QgbWF0Y2hcIik7XHJcblx0ICAgIHJldHVybjtcclxuICBcdH1cclxuICBcdGZpcmViYXNlLmNyZWF0ZVVzZXIoe1xyXG4gIFx0XHRlbWFpbDogdGhpcy5lbWFpbCxcclxuICBcdFx0cGFzc3dvcmQ6IHRoaXMucGFzc3dvcmQsXHJcbiAgXHR9KS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICB0aGlzLmxvZ2luY2hlY2tTZXJ2aWNlLmFkZFVzZXJUb0ZpcmVzdG9yZShyZXMudWlkLCBudWxsLCBudWxsLCByZXMuZW1haWwsIHRoaXMuZmlyc3ROYW1lLCB0aGlzLmxhc3ROYW1lLCBudWxsLCBudWxsLCAwLCAwLCAnfi9pbWcvc2FtcGxlX3Byb2ZpbGUucG5nJywgdGhpcy5kZXZpY2VUb2tlbilcclxuICAgICAgICBmaXJlYmFzZS51cGRhdGVQcm9maWxlKHtkaXNwbGF5TmFtZTogdGhpcy5maXJzdE5hbWUgKyAnICcgKyB0aGlzLmxhc3ROYW1lfSkudGhlbigpO1xyXG4gICAgICAgIHRoaXMubG9naW5jaGVja1NlcnZpY2UubG9naW5Vc2VyKHJlcy51aWQpXHJcbiAgICAgICAgdGhpcy5sb2dpbmNoZWNrU2VydmljZS5hZGRVc2VyVG9CcmFpbnRyZWUoJ3Rlc3QnLCAndGVzdCB1c2VyJywgcmVzLmVtYWlsKVxyXG4gICAgICBcdHRoaXMucm91dGVyLm5hdmlnYXRlKFsnbmF2aWdhdGlvbiddLCB7Y2xlYXJIaXN0b3J5OiB0cnVlfSk7XHJcbiAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBpZihlcnIgPT0gJ0NyZWF0aW5nIGEgdXNlciBmYWlsZWQuIGNvbS5nb29nbGUuZmlyZWJhc2UuYXV0aC5GaXJlYmFzZUF1dGhVc2VyQ29sbGlzaW9uRXhjZXB0aW9uOiBUaGUgZW1haWwgYWRkcmVzcyBpcyBhbHJlYWR5IGluIHVzZSBieSBhbm90aGVyIGFjY291bnQuJylcclxuICAgICAgICAgIHRoaXMuYWxlcnQoJ1RoZXJlIGlzIGFscmVhZHkgYW4gYWNjb3VudCBhc3NvY2lhdGVkIHdpdGggdGhhdCBlbWFpbCcpXHJcbiAgICAgICAgZWxzZSBpZiAoZXJyID09ICdDcmVhdGluZyBhIHVzZXIgZmFpbGVkLiBQYXNzd29yZCBzaG91bGQgYmUgYXQgbGVhc3QgNiBjaGFyYWN0ZXJzJylcclxuICAgICAgICAgIHRoaXMuYWxlcnQoJ1Bhc3N3b3JkIG11c3QgYmUgYXQgbGVhc3QgNiBjaGFyYWN0ZXJzJylcclxuICBcdFx0Y29uc29sZS5sb2coZXJyKTtcclxuICBcdFx0cmV0dXJuO1xyXG4gICAgICB9KVxyXG4gIH1cclxuXHJcbiAgZm9yZ290UGFzc3dvcmQoKSB7XHJcbiAgICBwcm9tcHQoe1xyXG4gICAgICB0aXRsZTogXCJGb3Jnb3QgUGFzc3dvcmRcIixcclxuICAgICAgbWVzc2FnZTogXCJFbnRlciB0aGUgZW1haWwgYWRkcmVzcyB5b3UgdXNlZCB0byByZWdpc3RlciBmb3IgQ29sbGVnZVBvb2wgdG8gcmVzZXQgeW91ciBwYXNzd29yZFwiLFxyXG4gICAgICBpbnB1dFR5cGU6IFwiZW1haWxcIixcclxuICAgICAgZGVmYXVsdFRleHQ6IFwiXCIsXHJcbiAgICAgIG9rQnV0dG9uVGV4dDogXCJPa1wiLFxyXG4gICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIkNhbmNlbFwiXHJcbiAgICB9KS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIGlmIChkYXRhLnJlc3VsdClcclxuICAgICAgICBmaXJlYmFzZS5zZW5kUGFzc3dvcmRSZXNldEVtYWlsKGRhdGEudGV4dCkudGhlbihcclxuICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5hbGVydCgnQW4gZW1haWwgaGFzIGJlZW4gc2VudCB0byAnICsgZGF0YS50ZXh0ICsgJyB3aXRoIGRldGFpbHMgb2YgaG93IHRvIHJlY292ZXIgeW91ciBhY2NvdW50JylcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICAoZXJyb3JNZXNzYWdlKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYWxlcnQoJ05vIGFjY291bnQgY291bGQgYmUgZm91bmQgd2l0aCB5b3VyIGVtYWlsJylcclxuICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck5vdGlmaWNhdGlvbnMoKSB7XHJcbiAgICBtZXNzYWdpbmcucmVnaXN0ZXJGb3JQdXNoTm90aWZpY2F0aW9ucyh7XHJcbiAgICAgIG9uUHVzaFRva2VuUmVjZWl2ZWRDYWxsYmFjazogKHRva2VuOiBzdHJpbmcpOiB2b2lkID0+IHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkZpcmViYXNlIHBsdWdpbiByZWNlaXZlZCBhIHB1c2ggdG9rZW46IFwiICsgdG9rZW4pO1xyXG4gICAgICAgIHRoaXMuZGV2aWNlVG9rZW4gPSB0b2tlbjtcclxuICAgICAgfSxcclxuXHJcbiAgICAgIG9uTWVzc2FnZVJlY2VpdmVkQ2FsbGJhY2s6IChtZXNzYWdlOiBNZXNzYWdlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJQdXNoIG1lc3NhZ2UgcmVjZWl2ZWQ6IFwiICsgbWVzc2FnZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJNZXNzYWdlIGRhdGE6IFwiICsgbWVzc2FnZS5kYXRhKTtcclxuICAgICAgfSxcclxuXHJcbiAgICAgIC8vIFdoZXRoZXIgeW91IHdhbnQgdGhpcyBwbHVnaW4gdG8gYXV0b21hdGljYWxseSBkaXNwbGF5IHRoZSBub3RpZmljYXRpb25zIG9yIGp1c3Qgbm90aWZ5IHRoZSBjYWxsYmFjay4gQ3VycmVudGx5IHVzZWQgb24gaU9TIG9ubHkuIERlZmF1bHQgdHJ1ZS5cclxuICAgICAgc2hvd05vdGlmaWNhdGlvbnM6IHRydWUsXHJcblxyXG4gICAgICAvLyBXaGV0aGVyIHlvdSB3YW50IHRoaXMgcGx1Z2luIHRvIGFsd2F5cyBoYW5kbGUgdGhlIG5vdGlmaWNhdGlvbnMgd2hlbiB0aGUgYXBwIGlzIGluIGZvcmVncm91bmQuIEN1cnJlbnRseSB1c2VkIG9uIGlPUyBvbmx5LiBEZWZhdWx0IGZhbHNlLlxyXG4gICAgICBzaG93Tm90aWZpY2F0aW9uc1doZW5JbkZvcmVncm91bmQ6IGZhbHNlXHJcbiAgICB9KS50aGVuKCgpID0+IGNvbnNvbGUubG9nKFwiUmVnaXN0ZXJlZCBmb3IgcHVzaFwiKSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVUb2tlbnModWlkKSB7XHJcbiAgICBjb25zdCB1c2VyRG9jdW1lbnQgPSBmaXJlYmFzZS5maXJlc3RvcmUuY29sbGVjdGlvbigndXNlcnMnKS5kb2ModWlkKTtcclxuICAgIHVzZXJEb2N1bWVudC5nZXQoKS50aGVuKGFzeW5jIChkb2MpID0+IHtcclxuICAgICAgbGV0IHRva2VucyA9IGRvYy5kYXRhKCkudG9rZW5zO1xyXG4gICAgICBpZih0b2tlbnMpIHtcclxuICAgICAgICB0b2tlbnMucHVzaCh0aGlzLmRldmljZVRva2VuKTtcclxuICAgICAgICBsZXQgdXBkYXRlZFRva2VucyA9IEFycmF5LmZyb20obmV3IFNldCh0b2tlbnMpKTtcclxuICAgICAgICB1c2VyRG9jdW1lbnQudXBkYXRlKHtcclxuICAgICAgICAgIHRva2VuczogdXBkYXRlZFRva2Vuc1xyXG4gICAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIHVzZXJEb2N1bWVudC51cGRhdGUoe1xyXG4gICAgICAgICAgdG9rZW5zOiBbdGhpcy5kZXZpY2VUb2tlbl1cclxuICAgICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBjaGF0UHJvbWlzZSA9IGF3YWl0IHRoaXMudXBkYXRlQ2hhdFRva2Vucyhkb2MuZGF0YSgpLmNoYXRzKTtcclxuICAgIH0pLmNhdGNoKChlcnIpID0+IHsgY29uc29sZS5sb2coZXJyKSB9KVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgdXBkYXRlQ2hhdFRva2VucyhjaGF0cykge1xyXG4gICAgbGV0IGNoYXRDb2xsZWN0aW9uID0gZmlyZWJhc2UuZmlyZXN0b3JlLmNvbGxlY3Rpb24oJ2NoYXRzJyk7XHJcbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgY2hhdHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgY2hhdFByb21pc2UgPSBhd2FpdCBjaGF0Q29sbGVjdGlvbi5kb2MoY2hhdHNbaV0pLmdldCgpLnRoZW4oYXN5bmMgKGRvYykgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRva2VucyA9IGRvYy5kYXRhKCkudG9rZW5zO1xyXG4gICAgICAgIHRva2Vucy5wdXNoKHRoaXMuZGV2aWNlVG9rZW4pO1xyXG4gICAgICAgIGNvbnN0IG5ld1Rva2VucyA9IEFycmF5LmZyb20obmV3IFNldCh0b2tlbnMpKTtcclxuICAgICAgICBjb25zdCB1cGRhdGVQcm9taXNlID0gYXdhaXQgY2hhdENvbGxlY3Rpb24uZG9jKGNoYXRzW2ldKS51cGRhdGUoe3Rva2VuczogbmV3VG9rZW5zfSk7XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmb2N1c0VtYWlsKCkge1xyXG4gICAgdGhpcy5lbS5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XHJcbiAgfVxyXG5cclxuICBmb2N1c0xhc3ROYW1lKCkge1xyXG4gICAgdGhpcy5sbi5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XHJcbiAgfVxyXG5cclxuICBmb2N1c1Bhc3N3b3JkKCkge1xyXG4gICAgdGhpcy5wdy5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XHJcbiAgfVxyXG5cclxuICBmb2N1c0NvbmZpcm1QYXNzd29yZCgpIHtcclxuICAgIGlmICghdGhpcy5pc0xvZ2dpbmdJbikge1xyXG4gICAgICB0aGlzLmNwdy5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhbGVydChtZXNzYWdlOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiBhbGVydCh7XHJcbiAgICAgIHRpdGxlOiBcIkNvbGxlZ2VQb29sXCIsXHJcbiAgICAgIG9rQnV0dG9uVGV4dDogXCJDbG9zZVwiLFxyXG4gICAgICBtZXNzYWdlOiBtZXNzYWdlXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGZiTG9naW4oKSB7XHJcbiAgICB0aGlzLndjLm5hdGl2ZUVsZW1lbnQuc3R5bGUudmlzaWJpbGl0eSA9ICdjb2xsYXBzZSc7XHJcbiAgICB2YXIgYWN0aXZpdHlJbmRpY2F0b3IgPSA8QWN0aXZpdHlJbmRpY2F0b3I+dGhpcy5haS5uYXRpdmVFbGVtZW50O1xyXG4gICAgYWN0aXZpdHlJbmRpY2F0b3IuYnVzeSA9IHRydWU7XHJcbiAgICBmaXJlYmFzZS5sb2dpbih7XHJcbiAgICAgIHR5cGU6IGZpcmViYXNlLkxvZ2luVHlwZS5GQUNFQk9PSyxcclxuICAgICAgLy8gT3B0aW9uYWxcclxuICAgICAgZmFjZWJvb2tPcHRpb25zOiB7XHJcbiAgICAgICAgLy8gZGVmYXVsdHMgdG8gWydwdWJsaWNfcHJvZmlsZScsICdlbWFpbCddXHJcbiAgICAgICAgc2NvcGVzOiBbJ3B1YmxpY19wcm9maWxlJywgJ2VtYWlsJywgJ3VzZXJfYmlydGhkYXknLCAndXNlcl9nZW5kZXInXSAvLyBub3RlOiB0aGlzIHByb3BlcnR5IHdhcyByZW5hbWVkIGZyb20gXCJzY29wZVwiIGluIDguNC4wXHJcbiAgICAgIH1cclxuICAgIH0pLnRoZW4oXHJcbiAgICAgICAgKHJlcykgPT4ge1xyXG4gICAgICAgICAgZmlyZWJhc2UuZmlyZXN0b3JlLmNvbGxlY3Rpb24oJ3VzZXJzJykuZG9jKHJlcy51aWQpLmdldCgpLnRoZW4oZG9jID0+IHtcclxuICAgICAgICAgICAgaWYoZG9jLmV4aXN0cyA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgIHRoaXMubG9naW5jaGVja1NlcnZpY2UuYWRkVXNlclRvRmlyZXN0b3JlKHJlcy51aWQsIG51bGwsIG51bGwsIHJlcy5lbWFpbCwgcmVzLmFkZGl0aW9uYWxVc2VySW5mby5wcm9maWxlWydmaXJzdF9uYW1lJ10sIHJlcy5hZGRpdGlvbmFsVXNlckluZm8ucHJvZmlsZVsnbGFzdF9uYW1lJ10sIG51bGwsIG51bGwsIDAsIDAsIHJlcy5waG90b1VSTCwgdGhpcy5kZXZpY2VUb2tlbik7XHJcbiAgICAgICAgICAgICAgdGhpcy5sb2dpbmNoZWNrU2VydmljZS5hZGRVc2VyVG9CcmFpbnRyZWUocmVzLmRpc3BsYXlOYW1lLCByZXMuZGlzcGxheU5hbWUsIHJlcy5lbWFpbClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmKGRvYy5kYXRhKCkucGF5bWVudF9pZCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5sb2dpbmNoZWNrU2VydmljZS5hZGRVc2VyVG9CcmFpbnRyZWUocmVzLmRpc3BsYXlOYW1lLCByZXMuZGlzcGxheU5hbWUsIHJlcy5lbWFpbClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVRva2VucyhyZXMudWlkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIHRoaXMubG9naW5jaGVja1NlcnZpY2UubG9naW5Vc2VyKHJlcy51aWQpXHJcbiAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ25hdmlnYXRpb24nXSwge2NsZWFySGlzdG9yeTogdHJ1ZX0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgKGVycm9yTWVzc2FnZSkgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3JNZXNzYWdlKTtcclxuICAgICAgICAgIHRoaXMud2MubmF0aXZlRWxlbWVudC5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xyXG4gICAgICAgIH1cclxuICAgICk7XHJcblxyXG4gIH1cclxuXHJcbn1cclxuIiwiLy8gdGhpcyBpbXBvcnQgc2hvdWxkIGJlIGZpcnN0IGluIG9yZGVyIHRvIGxvYWQgc29tZSByZXF1aXJlZCBzZXR0aW5ncyAobGlrZSBnbG9iYWxzIGFuZCByZWZsZWN0LW1ldGFkYXRhKVxyXG5pbXBvcnQgeyBwbGF0Zm9ybU5hdGl2ZVNjcmlwdER5bmFtaWMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9wbGF0Zm9ybSc7XHJcblxyXG5cclxuaW1wb3J0IHsgQXBwTW9kdWxlIH0gZnJvbSAnLi9hcHAvYXBwLm1vZHVsZSc7XHJcbmltcG9ydCB7cmVnaXN0ZXJFbGVtZW50fSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZWxlbWVudC1yZWdpc3RyeVwiO1xyXG5cclxucmVnaXN0ZXJFbGVtZW50KFwiUmlwcGxlXCIsICgpID0+IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcmlwcGxlXCIpLlJpcHBsZSk7XHJcbi8vIGltcG9ydCBBbXBsaWZ5IGZyb20gXCJAYXdzLWFtcGxpZnkvY29yZVwiO1xyXG4vLyByZXF1aXJlKCduYXRpdmVzY3JpcHQtbm9kZWlmeScpXHJcbi8vIGltcG9ydCBhd3Njb25maWcgZnJvbSAnLi9hd3MtZXhwb3J0cyc7XHJcblxyXG4vLyBBbXBsaWZ5LmNvbmZpZ3VyZShhd3Njb25maWcpO1xyXG5cclxuLy8gQSB0cmFkaXRpb25hbCBOYXRpdmVTY3JpcHQgYXBwbGljYXRpb24gc3RhcnRzIGJ5IGluaXRpYWxpemluZyBnbG9iYWwgb2JqZWN0cywgc2V0dGluZyB1cCBnbG9iYWwgQ1NTIHJ1bGVzLCBjcmVhdGluZywgYW5kIG5hdmlnYXRpbmcgdG8gdGhlIG1haW4gcGFnZS4gXHJcbi8vIEFuZ3VsYXIgYXBwbGljYXRpb25zIG5lZWQgdG8gdGFrZSBjYXJlIG9mIHRoZWlyIG93biBpbml0aWFsaXphdGlvbjogbW9kdWxlcywgY29tcG9uZW50cywgZGlyZWN0aXZlcywgcm91dGVzLCBESSBwcm92aWRlcnMuIFxyXG4vLyBBIE5hdGl2ZVNjcmlwdCBBbmd1bGFyIGFwcCBuZWVkcyB0byBtYWtlIGJvdGggcGFyYWRpZ21zIHdvcmsgdG9nZXRoZXIsIHNvIHdlIHByb3ZpZGUgYSB3cmFwcGVyIHBsYXRmb3JtIG9iamVjdCwgcGxhdGZvcm1OYXRpdmVTY3JpcHREeW5hbWljLCBcclxuLy8gdGhhdCBzZXRzIHVwIGEgTmF0aXZlU2NyaXB0IGFwcGxpY2F0aW9uIGFuZCBjYW4gYm9vdHN0cmFwIHRoZSBBbmd1bGFyIGZyYW1ld29yay5cclxucGxhdGZvcm1OYXRpdmVTY3JpcHREeW5hbWljKCkuYm9vdHN0cmFwTW9kdWxlKEFwcE1vZHVsZSk7XHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==