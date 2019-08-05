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

module.exports = "/* Add mobile styles for the component here.  */\nButton {\n    padding: 5;\n    margin: 5;\n    background-color: dodgerblue;\n    color: white;\n    height: 40;\n    border-radius: 5;\n}\n\n.chat-button {\n\tpadding-left: 5;\n\tpadding-right: 5;\n\tmargin: 5;\n\theight: 20;\n\twidth: 20;\n}\n\n.img-button {\n\tmargin: 5;\n\tmargin-left: 3;\n\tmargin-right: 7;\n\theight: 20;\n\twidth: 20;\n}\n\n.chat-text-field {\n    padding: 5; \n    /*background-color: white; */\n    /*border-radius: 4;*/\n    /*bottom-border-color: #696969;*/\n}\n\n.author-img {\n    margin: 0 5 5 5;\n    margin-bottom: 0;\n    width: 40;\n    height: 40;\n    border-radius: 20;\n    background-color: lightgray;\n}\n\n.img {\n\tmargin: 5;\n\tborder-radius: 10;\n\tbackground-color: lightgray;\n}\n\n.theirsImg {\n\tmargin: 5;\n\tmargin-left: 52;\n\tborder-radius: 10;\n\tbackground-color: lightgray;\n}\n\n.mine {\n    background-color: #ac00e6;\n    color: white;\n    padding: 8;\n    padding-left: 14;\n    padding-right: 14;\n    margin-right: 10;\n    border-radius: 15;\n    border-bottom-right-radius: 5;\n    border-bottom-left-radius: 15;\n    font-size: 16;\n    max-width: 60%;\n    text-align: left;\n    /*margin-bottom: 12;*/\n}\n\n.mineContinuation {\n\tmargin-bottom: 0;\n\tborder-bottom-right-radius: 15;\n}\n\n.mineContinuationGrid {\n\tfont-size: 14;\n    padding: 5;\n\tpadding-top: 0;\n\tpadding-bottom: 1;\n}\n\n.mineTime {\n\tmargin-right: 10;\n\tmargin-bottom: 5;\n}\n\n.theirsTime {\n\tmargin-left: 52;\n\tmargin-bottom: 5;\n}\n\n.time {\n\tvisibility: collapse;\n\tdisplay: none;\n}\n\n.theirs {\n    background-color: #e0e0e0;\n    color: #333;\n    padding: 7;\n    padding-left: 14;\n    padding-right: 14;\n    border-radius: 15;\n    border-bottom-left-radius: 5;\n    border-bottom-right-radius: 15;\n    margin-right: 40;\n    font-size: 16;\n    max-width: 60%;\n    text-align: left;\n    /*margin-bottom: 12;*/\n}\n\n.theirsContinuation {\n\tmargin-left: 52;\n\tmargin-bottom: 0;\n\tborder-bottom-left-radius: 15;\n}\n\n.theirsContinuationGrid {\n\tfont-size: 14;\n    padding: 5;\n\tpadding-top: 0;\n\tpadding-bottom: 1;\n}\n\n.grid {\n    font-size: 14;\n    padding: 5;\n    padding-top: 0;\n    padding-bottom: 8;\n}\n\n.chat-box-layout {\n\tborder-color: #f1f1f1;\n\tborder-top-width: 1;\n}"

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
                    _this.logincheckService.addUserToFirestore(res.uid, null, null, res.email, res.additionalUserInfo.profile['first_name'], res.additionalUserInfo.profile['last_name'], null, null, 0, 0, res.photoURL + "?height=300", _this.deviceToken);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vJF9sYXp5X3JvdXRlX3Jlc291cmNlIGxhenkgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9hcHAuY3NzIiwid2VicGFjazovLy8uL2FwcC9hZGQtY2FyZC1wYXltZW50L2FkZC1jYXJkLXBheW1lbnQuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvYWRkLWNhcmQtcGF5bWVudC9hZGQtY2FyZC1wYXltZW50LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9hZGQtY2FyZC1wYXltZW50L2FkZC1jYXJkLXBheW1lbnQuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9hZGQtbW9kYWwvYWRkLW1vZGFsLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2FkZC1tb2RhbC9hZGQtbW9kYWwuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2FkZC1tb2RhbC9hZGQtbW9kYWwuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9hZGQtcGF5bWVudC9hZGQtcGF5bWVudC5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC9hZGQtcGF5bWVudC9hZGQtcGF5bWVudC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvYWRkLXBheW1lbnQvYWRkLXBheW1lbnQuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9hcHAtcm91dGluZy5tb2R1bGUudG5zLnRzIiwid2VicGFjazovLy8uL2FwcC9hcHAuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2FwcC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2FwcC5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2F1dG8tZ2VuZXJhdGVkL2F1dG8tZ2VuZXJhdGVkLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2F1dG8tZ2VuZXJhdGVkL2F1dG8tZ2VuZXJhdGVkLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9hdXRvLWdlbmVyYXRlZC9hdXRvLWdlbmVyYXRlZC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NoYXQtbGlzdC9jaGF0LWxpc3QuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvY2hhdC1saXN0L2NoYXQtbGlzdC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvY2hhdC1saXN0L2NoYXQtbGlzdC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NoYXQvY2hhdC5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC9jaGF0L2NoYXQuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NoYXQvY2hhdC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbmZpcm1hdGlvbi9jb25maXJtYXRpb24uY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29uZmlybWF0aW9uL2NvbmZpcm1hdGlvbi5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvY29uZmlybWF0aW9uL2NvbmZpcm1hdGlvbi5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Nvbm5lY3QvY29ubmVjdC5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC9jb25uZWN0L2Nvbm5lY3QuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Nvbm5lY3QvY29ubmVjdC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2RhdGF0cmFuc2Zlci5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL2FwcC9kaWFsb2cvZGlhbG9nLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2RpYWxvZy9kaWFsb2cuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2RpYWxvZy9kaWFsb2cuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9keW5hbWljLWFkZC5zZXJ2aWNlLnRucy50cyIsIndlYnBhY2s6Ly8vLi9hcHAvZHluYW1pYy1hZGQuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvZmxvYXQtYnRuL2Zsb2F0LWJ0bi5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC9mbG9hdC1idG4vZmxvYXQtYnRuLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9mbG9hdC1idG4vZmxvYXQtYnRuLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvZ29vZ2xlLW1hcHMuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvaGlzdG9yeS9oaXN0b3J5LmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2hpc3RvcnkvaGlzdG9yeS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvaGlzdG9yeS9oaXN0b3J5LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvaG9tZS5kaXJlY3RpdmUudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC9ob21lL2hvbWUuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2hvbWUvaG9tZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2xvY2F0aW9uL2xvY2F0aW9uLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2xvY2F0aW9uL2xvY2F0aW9uLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9sb2NhdGlvbi9sb2NhdGlvbi5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2xvZ2luLmRpcmVjdGl2ZS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvbG9naW5jaGVjay5zZXJ2aWNlLnRucy50cyIsIndlYnBhY2s6Ly8vLi9hcHAvbG9naW5jaGVjay5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL2FwcC9sb2dpbnJvdXRlL2xvZ2lucm91dGUuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvbG9naW5yb3V0ZS9sb2dpbnJvdXRlLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9sb2dpbnJvdXRlL2xvZ2lucm91dGUuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9tZXNzYWdlLW1vZGFsL21lc3NhZ2UtbW9kYWwuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvbWVzc2FnZS1tb2RhbC9tZXNzYWdlLW1vZGFsLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9tZXNzYWdlLW1vZGFsL21lc3NhZ2UtbW9kYWwuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LnRucy5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQudG5zLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3BheW1lbnQtaW5mby9wYXltZW50LWluZm8uY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvcGF5bWVudC1pbmZvL3BheW1lbnQtaW5mby5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvcGF5bWVudC1pbmZvL3BheW1lbnQtaW5mby5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3BheW1lbnQtbWV0aG9kL3BheW1lbnQtbWV0aG9kLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL3BheW1lbnQtbWV0aG9kL3BheW1lbnQtbWV0aG9kLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9wYXltZW50LW1ldGhvZC9wYXltZW50LW1ldGhvZC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3BheW1lbnQuc2VydmljZS50bnMudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3BheW1lbnQuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvcGF5bWVudHMvcGF5bWVudHMuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvcGF5bWVudHMvcGF5bWVudHMuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL3BheW1lbnRzL3BheW1lbnRzLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvcGxhY2VzLWF1dG9jb21wbGV0ZS5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL2FwcC9wb3N0aW5nLWluZm8vcG9zdGluZy1pbmZvLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL3Bvc3RpbmctaW5mby9wb3N0aW5nLWluZm8uY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL3Bvc3RpbmctaW5mby9wb3N0aW5nLWluZm8uY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9wb3N0aW5nLnNlcnZpY2UudG5zLnRzIiwid2VicGFjazovLy8uL2FwcC9wb3N0aW5nLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3Bvc3RpbmcvcG9zdGluZy5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC9wb3N0aW5nL3Bvc3RpbmcuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL3Bvc3RpbmcvcG9zdGluZy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3JlYXV0aC9yZWF1dGguY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvcmVhdXRoL3JlYXV0aC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvcmVhdXRoL3JlYXV0aC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NldHRpbmdzZm9ybS9zZXR0aW5nc2Zvcm0uY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvc2V0dGluZ3Nmb3JtL3NldHRpbmdzZm9ybS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvc2V0dGluZ3Nmb3JtL3NldHRpbmdzZm9ybS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3VwZGF0ZS91cGRhdGUuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvdXBkYXRlL3VwZGF0ZS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvdXBkYXRlL3VwZGF0ZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3VzZXIuc2VydmljZS50bnMudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3VzZXIuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvdmlldy1pbWFnZS92aWV3LWltYWdlLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL3ZpZXctaW1hZ2Uvdmlldy1pbWFnZS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvdmlldy1pbWFnZS92aWV3LWltYWdlLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvd2VsY29tZS93ZWxjb21lLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL3dlbGNvbWUvd2VsY29tZS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvd2VsY29tZS93ZWxjb21lLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsNENBQTRDLFdBQVc7QUFDdkQ7QUFDQTtBQUNBLHlFOzs7Ozs7O0FDWkEseUVBQTJCLG1CQUFPLENBQUMsZ0RBQWdEO0FBQ25GO0FBQ0EsVUFBVSxtQkFBTyxDQUFDLG9HQUErRjs7QUFFakg7QUFDQSxjQUFjLFFBQVMsNGZBQTRmLHlCQUF5QixLQUFLOztBQUVqakI7QUFDQSxRQUFRLElBQVU7QUFDbEI7QUFDQTtBQUNBLCtCQUErQixtQ0FBbUM7QUFDbEUsU0FBUztBQUNUOzs7Ozs7Ozs7QUNiQSw0RUFBNEUsZUFBZSxrQkFBa0IsY0FBYyxlQUFlLEdBQUcsNkJBQTZCLHVCQUF1QixZQUFZLEdBQUcsdURBQXVELG1CQUFtQixtQkFBbUIsb0JBQW9CLGdDQUFnQyx5QkFBeUIsZ0JBQWdCLHlCQUF5QiwrQ0FBK0MsR0FBRyxtQkFBbUIsbUJBQW1CLG1CQUFtQixvQkFBb0IsZ0NBQWdDLHlCQUF5QixnQkFBZ0IseUJBQXlCLCtDQUErQyxvQkFBb0IsR0FBRyxnQkFBZ0IsbUJBQW1CLG1CQUFtQixnQ0FBZ0MseUJBQXlCLGVBQWUsK0NBQStDLHVCQUF1QixpQkFBaUIsR0FBRyxrQkFBa0IsbUJBQW1CLG1CQUFtQixvQkFBb0IsZ0NBQWdDLHlCQUF5QixlQUFlLCtDQUErQyx1QkFBdUIsaUJBQWlCLEdBQUcsaUJBQWlCLG1CQUFtQixtQkFBbUIsb0JBQW9CLGdDQUFnQyx5QkFBeUIsZUFBZSwrQ0FBK0MsdUJBQXVCLGlCQUFpQixHQUFHLGlCQUFpQixtQkFBbUIsbUJBQW1CLG9CQUFvQixnQ0FBZ0MseUJBQXlCLGVBQWUsK0NBQStD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QUUsYUFBYTtZQUN2QixxRUFBdUM7O1NBRXhDLENBQUM7eUNBb0IwQiw2REFBSSxFQUFrQiw0RUFBZ0IsRUFBNkIseUVBQWlCLEVBQTJCLHFFQUFlO1lBQ3RJLG9EQUFNO09BbkJiLGdCQUFnQixDQXVRNUI7SUFBRCx1QkFBQztDQUFBO0FBdlE0Qjs7Ozs7Ozs7Ozs7Ozs7OztBQ2I3QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0NBQW1CO0FBQzdDLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSx1Q0FBdUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQztBQUN2RSwyQ0FBMkM7QUFDM0Msa0NBQWtDO0FBQ2xDLDJCQUF5QztBQUV6QyxpQkFBZ0M7QUFFeUg7QUFDekosa0NBQThIO0FBQzlILDJEQUFnSjtBQUNoSixtQkFBbUY7QUFDbkYsY0FBeUQiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0KHJlcSkge1xuXHQvLyBIZXJlIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKSBpcyB1c2VkIGluc3RlYWQgb2YgbmV3IFByb21pc2UoKSB0byBwcmV2ZW50XG5cdC8vIHVuY2F1Z2h0IGV4Y2VwdGlvbiBwb3BwaW5nIHVwIGluIGRldnRvb2xzXG5cdHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uKCkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fSk7XG59XG53ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gW107IH07XG53ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dDtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0O1xud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LmlkID0gXCIuLi8kJF9sYXp5X3JvdXRlX3Jlc291cmNlIGxhenkgcmVjdXJzaXZlXCI7IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gSW1wb3J0c1xuZXhwb3J0cy5pKHJlcXVpcmUoXCItIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMSFuYXRpdmVzY3JpcHQtdGhlbWUtY29yZS9jc3MvY29yZS5saWdodC5jc3NcIiksIFwiXCIpO1xuXG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qXFxyXFxuSW4gTmF0aXZlU2NyaXB0LCB0aGUgYXBwLmNzcyBmaWxlIGlzIHdoZXJlIHlvdSBwbGFjZSBDU1MgcnVsZXMgdGhhdFxcclxcbnlvdSB3b3VsZCBsaWtlIHRvIGFwcGx5IHRvIHlvdXIgZW50aXJlIGFwcGxpY2F0aW9uLiBDaGVjayBvdXRcXHJcXG5odHRwOi8vZG9jcy5uYXRpdmVzY3JpcHQub3JnL3VpL3N0eWxpbmcgZm9yIGEgZnVsbCBsaXN0IG9mIHRoZSBDU1NcXHJcXG5zZWxlY3RvcnMgYW5kIHByb3BlcnRpZXMgeW91IGNhbiB1c2UgdG8gc3R5bGUgVUkgY29tcG9uZW50cy5cXHJcXG5cXHJcXG4vKlxcclxcbkluIG1hbnkgY2FzZXMgeW91IG1heSB3YW50IHRvIHVzZSB0aGUgTmF0aXZlU2NyaXB0IGNvcmUgdGhlbWUgaW5zdGVhZFxcclxcbm9mIHdyaXRpbmcgeW91ciBvd24gQ1NTIHJ1bGVzLiBGb3IgYSBmdWxsIGxpc3Qgb2YgY2xhc3MgbmFtZXMgaW4gdGhlIHRoZW1lXFxyXFxucmVmZXIgdG8gaHR0cDovL2RvY3MubmF0aXZlc2NyaXB0Lm9yZy91aS90aGVtZS5cXHJcXG4qL1xcclxcblxcclxcbkxhYmVsIHtcXHJcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVwiLCBcIlwiXSk7XG5cbjtcbiAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiAnc3R5bGUnLCBwYXRoOiAnLi9hcHAuY3NzJyB9KTtcbiAgICAgICAgfSlcbiAgICB9XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLyogQWRkIG1vYmlsZSBzdHlsZXMgZm9yIHRoZSBjb21wb25lbnQgaGVyZS4gICovXFxuLmNsb3NlIHtcXG5cXHRtYXJnaW46IDEwO1xcblxcdGZvbnQtc2l6ZTogMjg7XFxuXFx0d2lkdGg6IDQ4O1xcblxcdGhlaWdodDogNDg7XFxufVxcblxcbi5jbG9zZS1idXR0b24tY29udGFpbmVyIHtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0bGVmdDogMDtcXG59XFxuXFxuLyogc3R5bGVzIGZyb20gcGF5bWVudHMuY29tcG9uZW50LmNzcyAqL1xcblxcbiNmb3JtIHtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICB3aWR0aDogNjAwcHg7XFxuICAgIGhlaWdodDogNDAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAzMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDRweCAwIHJnYmEoMCwwLDAsMC4zNyk7XFxufVxcblxcbiNwYXltZW50LWZvcm0ge1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIHdpZHRoOiA2MDBweDtcXG4gICAgaGVpZ2h0OiA0MDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IDMwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgYm94LXNoYWRvdzogMCAxcHggNHB4IDAgcmdiYSgwLDAsMCwwLjM3KTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuI2NhcmQtZm9ybSB7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgd2lkdGg6IDQwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTgwOTY4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogMjUlO1xcbiAgICBib3gtc2hhZG93OiAwIDFweCA0cHggMCByZ2JhKDAsMCwwLDAuMzcpO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG5cXG4jcGF5cGFsLWZvcm0ge1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IDI1JTtcXG4gICAgYm94LXNoYWRvdzogMCAxcHggNHB4IDAgcmdiYSgwLDAsMCwwLjM3KTtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgei1pbmRleDogMTtcXG59XFxuXFxuI3Zlbm1vLWZvcm0ge1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IDI1JTtcXG4gICAgYm94LXNoYWRvdzogMCAxcHggNHB4IDAgcmdiYSgwLDAsMCwwLjM3KTtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgei1pbmRleDogMTtcXG59XFxuXFxuI2Vycm9yLWZvcm0ge1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IDI1JTtcXG4gICAgYm94LXNoYWRvdzogMCAxcHggNHB4IDAgcmdiYSgwLDAsMCwwLjM3KTtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgei1pbmRleDogMTtcXG59XFxuXFxuI2VkaXQtZm9ybSB7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgd2lkdGg6IDQwMHB4O1xcbiAgICBoZWlnaHQ6IDIwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogMjUlO1xcbiAgICBib3gtc2hhZG93OiAwIDFweCA0cHggMCByZ2JhKDAsMCwwLDAuMzcpO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG5cXG4ucGF5bWVudC1tZXRob2RzIHtcXG5cXHRvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgbWFyZ2luLWxlZnQ6IDQwcHg7XFxufVxcblxcbiNtb2RhbC1wYXltZW50LW1ldGhvZHMge1xcblxcdG1hcmdpbi1sZWZ0OiAyNHB4O1xcbn1cXG5cXG4jcGF5cGFsLWhlYWRlci1jb250YWluZXIge1xcblxcdGJhY2tncm91bmQtY29sb3I6ICM1ODA5Njg7XFxufVxcblxcbiNlcnJvci1oZWFkZXItY29udGFpbmVyIHtcXG5cXHRkaXNwbGF5OiBub25lO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICM4OTAwMDA7XFxufVxcblxcbiNlZGl0LWhlYWRlci1jb250YWluZXIge1xcblxcdGJhY2tncm91bmQtY29sb3I6ICM1ODA5Njg7XFxufVxcblxcbi5jb2xvcmVkLWhlYWRlciB7XFxuXFx0Y29sb3I6IHdoaXRlO1xcblxcdGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbiNtZXRob2QtaW5mb3JtYXRpb24tdGV4dCB7XFxuXFx0bWFyZ2luLWxlZnQ6IDQwcHg7XFxuXFx0bWFyZ2luLXRvcDogMzJweDtcXG5cXHRmb250LXNpemU6IDE2cHg7XFxufVxcblxcbi5wYXltZW50LWZvb3Rlci1idXR0b257XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG4gICAgY29sb3I6ICNhYzAwZTY7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tbGVmdDogMzRweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbn1cXG5cXG4jcGF5cGFsLWJ1dHRvbiB7XFxuXFx0d2lkdGg6IDM1MHB4O1xcblxcdG1hcmdpbjogYXV0bztcXG5cXHRtYXJnaW4tdG9wOiAzMnB4O1xcbn1cXG5cXG4jYWRkLWNhcmQtYnV0dG9uIHtcXG5cXHRmbG9hdDogcmlnaHQ7XFxuXFx0bWFyZ2luLXJpZ2h0OiAzNHB4O1xcblxcdGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbiNyZW1vdmUtcGF5bWVudC1idXR0b24ge1xcblxcdGZsb2F0OiByaWdodDtcXG5cXHRtYXJnaW4tcmlnaHQ6IDM0cHg7XFxufVxcblxcbi5wbHVzLXNpZ24ge1xcblxcdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuXFx0Zm9udC1zaXplOiAzMHB4O1xcblxcdG1hcmdpbi1yaWdodDogN3B4O1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnBheW1lbnQtZm9vdGVyLXRleHQge1xcblxcdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuXFx0bGluZS1oZWlnaHQ6IDQycHg7XFxuXFx0Zm9udC13ZWlnaHQ6IDQwMDtcXG5cXHRmb250LXNpemU6IDEzcHg7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucGF5bWVudC1mb290ZXItdGV4dDpob3ZlciB7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbi5wYXltZW50cy1ib3R0b20tYWRkLWNvbnRhaW5lciB7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGJvdHRvbTogMDtcXG59XFxuXFxuLyogT3RoZXIgbW9kYWwgc3R5bGluZyBpbiBzdHlsZXMuY3NzICovXFxuLmNsb3NlLW1vZGFsIHtcXG5cXHRmb250LXNpemU6IDI0cHg7XFxuXFx0bWFyZ2luLXJpZ2h0OiAyMHB4O1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLVxcblNoYXJlZCBWYXJpYWJsZXNcXG4tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLVxcbkdlbmVyYWxcXG4tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxuaHRtbCxcXG5ib2R5IHtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGNvbG9yOiAjMjgyYzM3O1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uZm9ybS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNFRUU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYm9yZGVyOiAxZW0gc29saWQgI2ZmZjtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA0NzZweCkge1xcbiAgLmZvcm0tY29udGFpbmVyIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgfVxcbn1cXG5cXG4uY2FyZGluZm8td3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbi5iZy1pbGx1c3RyYXRpb24ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIHotaW5kZXg6IDA7XFxufVxcbi5iZy1pbGx1c3RyYXRpb24gc3ZnIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uY2FyZC1zaGFwZSwgI215LXNhbXBsZS1mb3JtLnZpc2EsICNteS1zYW1wbGUtZm9ybS5tYXN0ZXItY2FyZCwgI215LXNhbXBsZS1mb3JtLm1hZXN0cm8sICNteS1zYW1wbGUtZm9ybS5hbWVyaWNhbi1leHByZXNzLCAjbXktc2FtcGxlLWZvcm0uZGlzY292ZXIsICNteS1zYW1wbGUtZm9ybS51bmlvbnBheSwgI215LXNhbXBsZS1mb3JtLmpjYiwgI215LXNhbXBsZS1mb3JtLmRpbmVycy1jbHViIHtcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gIHBhZGRpbmc6IDJlbSAyZW0gMWVtO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNDc2cHgpIHtcXG4gIC5jYXJkLXNoYXBlLCAjbXktc2FtcGxlLWZvcm0udmlzYSwgI215LXNhbXBsZS1mb3JtLm1hc3Rlci1jYXJkLCAjbXktc2FtcGxlLWZvcm0ubWFlc3RybywgI215LXNhbXBsZS1mb3JtLmFtZXJpY2FuLWV4cHJlc3MsICNteS1zYW1wbGUtZm9ybS5kaXNjb3ZlciwgI215LXNhbXBsZS1mb3JtLnVuaW9ucGF5LCAjbXktc2FtcGxlLWZvcm0uamNiLCAjbXktc2FtcGxlLWZvcm0uZGluZXJzLWNsdWIge1xcbiAgICBwYWRkaW5nOiAyZW0gMS41ZW0gMWVtO1xcbiAgfVxcbn1cXG5cXG4jcGF5bWVudC1jYXJkLWZvcm0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcXG4gIC8qYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7Ki9cXG4gIHBhZGRpbmc6IDFlbSAzZW0gM2VtO1xcbiAgbWFyZ2luLWJvdHRvbTogMmVtO1xcbi8qICB0cmFuc2l0aW9uOiBhbGwgNjAwbXMgY3ViaWMtYmV6aWVyKDAuMiwgMS4zLCAwLjcsIDEpO1xcbiAgLXdlYmtpdC1hbmltYXRpb246IGNhcmRJbnRybyA1MDBtcyBjdWJpYy1iZXppZXIoMC4yLCAxLjMsIDAuNywgMSk7XFxuICAgICAgICAgIGFuaW1hdGlvbjogY2FyZEludHJvIDUwMG1zIGN1YmljLWJlemllcigwLjIsIDEuMywgMC43LCAxKTsqL1xcbiAgLyp6LWluZGV4OiAxOyovXFxufVxcbiNteS1zYW1wbGUtZm9ybTpob3ZlciB7XFxuICBib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjA2KTtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDQ3NnB4KSB7XFxuICAjbXktc2FtcGxlLWZvcm0ge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBwYWRkaW5nOiA3ZW0gMmVtIDJlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxufVxcbiNteS1zYW1wbGUtZm9ybS52aXNhIHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBENEFBMjtcXG59XFxuI215LXNhbXBsZS1mb3JtLm1hc3Rlci1jYXJkIHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM2MzYzNjtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMTVkZWcsICNkODIzMzIsICNkODIzMzIgNTAlLCAjZjFhZDNkIDUwJSwgI2YxYWQzZCk7XFxufVxcbiNteS1zYW1wbGUtZm9ybS5tYWVzdHJvIHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM2MzYzNjtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMTVkZWcsICMwMDlkZGQsICMwMDlkZGQgNTAlLCAjZWQxYzJlIDUwJSwgI2VkMWMyZSk7XFxufVxcbiNteS1zYW1wbGUtZm9ybS5hbWVyaWNhbi1leHByZXNzIHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN0NDMztcXG59XFxuI215LXNhbXBsZS1mb3JtLmRpc2NvdmVyIHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNjAwMDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjZDE0MzEwLCAjZjc5NjFlKTtcXG59XFxuI215LXNhbXBsZS1mb3JtLnVuaW9ucGF5LCAjbXktc2FtcGxlLWZvcm0uamNiLCAjbXktc2FtcGxlLWZvcm0uZGluZXJzLWNsdWIge1xcbiAgY29sb3I6ICNmZmY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzYzNjM2O1xcbn1cXG5cXG4uY2FyZGluZm8tbGFiZWwge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBmb250LXNpemU6IDExcHg7XFxuICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcblxcbi5jYXJkaW5mby1leHAtZGF0ZSB7XFxuICBtYXJnaW4tcmlnaHQ6IDFlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uY2FyZGluZm8tY3Z2IHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uY2FyZGluZm8tY2FyZC1udW1iZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4jY2FyZEltYWdlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMmVtO1xcbiAgcmlnaHQ6IDFlbTtcXG4gIHdpZHRoOiA0NHB4O1xcbiAgaGVpZ2h0OiAyOHB4O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vczMtdXMtd2VzdC0yLmFtYXpvbmF3cy5jb20vcy5jZHBuLmlvLzM0Njk5NC9jYXJkX3Nwcml0ZS5wbmcpO1xcbiAgYmFja2dyb3VuZC1zaXplOiA4NnB4IDQ1OHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTEwMHB4IDA7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xcbn1cXG4jY2FyZEltYWdlLnZpc2Ege1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAtMzk4cHg7XFxufVxcbiNjYXJkSW1hZ2UubWFzdGVyLWNhcmQge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAtMjgxcHg7XFxufVxcbiNjYXJkSW1hZ2UuYW1lcmljYW4tZXhwcmVzcyB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIC0zNzBweDtcXG59XFxuI2NhcmRJbWFnZS5kaXNjb3ZlciB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIC0xNjNweDtcXG59XFxuI2NhcmRJbWFnZS5tYWVzdHJvIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgLTI1MXB4O1xcbn1cXG4jY2FyZEltYWdlLmpjYiB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIC0yMjFweDtcXG59XFxuI2NhcmRJbWFnZS5kaW5lcnMtY2x1YiB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIC0xMzNweDtcXG59XFxuXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLVxcbklucHV0cyBcXG4tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxuLmlucHV0LXdyYXBwZXIge1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg2KTtcXG4gIGhlaWdodDogMi43NWVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMDYpO1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAxZW07XFxufVxcblxcbi5jYXJkaW5mby1jYXJkLW51bWJlcixcXG4uY2FyZGluZm8tZXhwLWRhdGUsXFxuLmNhcmRpbmZvLWN2diB7XFxuICB0cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjNzO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3M7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcywgLXdlYmtpdC10cmFuc2Zvcm0gMC4zcztcXG59XFxuXFxuLmJyYWludHJlZS1ob3N0ZWQtZmllbGRzLWZvY3VzZWQge1xcbiAgYm9yZGVyLWNvbG9yOiAjNWRiNmU4O1xcbn1cXG5cXG4uYnJhaW50cmVlLWhvc3RlZC1maWVsZHMtaW52YWxpZCB7XFxuICBib3JkZXItY29sb3I6ICNFNTNBNDA7XFxuLyogIC13ZWJraXQtYW5pbWF0aW9uOiBzaGFrZSA1MDBtcyBjdWJpYy1iZXppZXIoMC4yLCAxLjMsIDAuNywgMSkgYm90aDtcXG4gICAgICAgICAgYW5pbWF0aW9uOiBzaGFrZSA1MDBtcyBjdWJpYy1iZXppZXIoMC4yLCAxLjMsIDAuNywgMSkgYm90aDsqL1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgICAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIC13ZWJraXQtcGVyc3BlY3RpdmU6IDEwMDBweDtcXG4gICAgICAgICAgcGVyc3BlY3RpdmU6IDEwMDBweDtcXG59XFxuXFxuLmxvYWRlciB7XFxuICBib3JkZXI6IDE2cHggc29saWQgI2YzZjNmMzsgLyogTGlnaHQgZ3JleSAqL1xcbiAgYm9yZGVyLXRvcDogMTZweCBzb2xpZCAjYWMwMGU2OyAvKiBQdXJwbGUgKi9cXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIHdpZHRoOiAxMjBweDtcXG4gIGhlaWdodDogMTIwcHg7XFxuICBhbmltYXRpb246IHNwaW4gMnMgbGluZWFyIGluZmluaXRlO1xcbiAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG4jbG9hZGluZy1jaXJjbGUge1xcbiAgdG9wOiAxMiU7XFxuICBsZWZ0OiAzMCU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbiNsaXN0LWxvYWRpbmctY2lyY2xlIHtcXG5cXHRtYXJnaW4tdG9wOiA1MHB4O1xcbn1cXG5cXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tXFxuQW5pbWF0aW9uc1xcbi0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXG5Aa2V5ZnJhbWVzIHNwaW4ge1xcbiAgMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxcbiAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cXG59XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIHNoYWtlIHtcXG4gIDEwJSxcXG4gIDkwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMXB4LCAwLCAwKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xcHgsIDAsIDApO1xcbiAgfVxcbiAgMjAlLFxcbiAgODAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDFweCwgMCwgMCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxcHgsIDAsIDApO1xcbiAgfVxcbiAgMzAlLFxcbiAgNTAlLFxcbiAgNzAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0zcHgsIDAsIDApO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTNweCwgMCwgMCk7XFxuICB9XFxuICA0MCUsXFxuICA2MCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoM3B4LCAwLCAwKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDNweCwgMCwgMCk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgc2hha2Uge1xcbiAgMTAlLFxcbiAgOTAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xcHgsIDAsIDApO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTFweCwgMCwgMCk7XFxuICB9XFxuICAyMCUsXFxuICA4MCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMXB4LCAwLCAwKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDFweCwgMCwgMCk7XFxuICB9XFxuICAzMCUsXFxuICA1MCUsXFxuICA3MCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTNweCwgMCwgMCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtM3B4LCAwLCAwKTtcXG4gIH1cXG4gIDQwJSxcXG4gIDYwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgzcHgsIDAsIDApO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoM3B4LCAwLCAwKTtcXG4gIH1cXG59XFxuXFxuXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPCEtLSA8bmd4LWJyYWludHJlZSBcXHJcXG4gIFtnZXRDbGllbnRUb2tlbl09XFxcImdldENsaWVudFRva2VuKClcXFwiIFxcclxcbiAgW2NyZWF0ZVB1cmNoYXNlXT1cXFwiY3JlYXRlUHVyY2hhc2VGdW5jdGlvblxcXCIgXFxyXFxuICAocGF5bWVudFN0YXR1cyk9XFxcIm9uUGF5bWVudFN0YXR1cygkZXZlbnQpXFxcIj5cXHJcXG48L25neC1icmFpbnRyZWU+IC0tPlxcclxcblxcclxcbjxTdGFja0xheW91dCAjZm9ybT5cXHJcXG5cXHQ8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImNsb3NlLWJ1dHRvbi1jb250YWluZXJcXFwiIG9yaWVudGF0aW9uPVxcXCJob3Jpem9udGFsXFxcIj5cXHJcXG5cXHRcXHQ8TGFiZWwgdGV4dD1cXFwiJnRpbWVzO1xcXCIgY2xhc3M9XFxcImNsb3NlXFxcIiAodGFwKT1cXFwiY2xvc2UoKVxcXCI+PC9MYWJlbD5cXHJcXG5cXHQ8L1N0YWNrTGF5b3V0PlxcclxcblxcclxcblxcdDxTdGFja0xheW91dCBjbGFzcz1cXFwiY2FyZGluZm8tY2FyZC1udW1iZXJcXFwiPlxcclxcblxcdFxcdDxMYWJlbCB0ZXh0PVxcXCJDYXJkIE51bWJlclxcXCIgY2xhc3M9XFxcImNhcmRpbmZvLWxhYmVsXFxcIj48L0xhYmVsPlxcclxcblxcdFxcdDxTdGFja0xheW91dCAjY2FyZE51bWJlciBjbGFzcz1cXFwiaW5wdXQtd3JhcHBlclxcXCI+PC9TdGFja0xheW91dD5cXHJcXG5cXHRcXHQ8U3RhY2tMYXlvdXQgI2NhcmRJbWFnZT48L1N0YWNrTGF5b3V0PlxcclxcblxcdDwvU3RhY2tMYXlvdXQ+XFxyXFxuXFxyXFxuXFx0PFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJjYXJkaW5mby13cmFwcGVyXFxcIj5cXHJcXG5cXHRcXHQ8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImNhcmRpbmZvLWV4cC1kYXRlXFxcIj5cXHJcXG5cXHRcXHRcXHQ8TGFiZWwgdGV4dD1cXFwiVmFsaWQgVGhydVxcXCIgY2xhc3M9XFxcImNhcmRpbmZvLWxhYmVsXFxcIj48L0xhYmVsPlxcclxcblxcdFxcdFxcdDxTdGFja0xheW91dCAjZXhwaXJhdGlvbkRhdGUgY2xhc3M9XFxcImlucHV0LXdyYXBwZXJcXFwiPjwvU3RhY2tMYXlvdXQ+XFxyXFxuXFx0XFx0PC9TdGFja0xheW91dD5cXHJcXG5cXHJcXG5cXHRcXHQ8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImNhcmRpbmZvLWN2dlxcXCI+XFxyXFxuXFx0XFx0XFx0PExhYmVsIHRleHQ9XFxcIkNWVlxcXCIgY2xhc3M9XFxcImNhcmRpbmZvLWxhYmVsXFxcIj48L0xhYmVsPlxcclxcblxcdFxcdFxcdDxTdGFja0xheW91dCAjY3Z2IGNsYXNzPVxcXCJpbnB1dC13cmFwcGVyXFxcIj48L1N0YWNrTGF5b3V0PlxcclxcblxcdFxcdDwvU3RhY2tMYXlvdXQ+XFxyXFxuXFx0PC9TdGFja0xheW91dD5cXHJcXG5cXHJcXG5cXHQ8QnV0dG9uIHRleHQ9XFxcIkFkZFxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgI3N1Ym1pdEJ1dHRvbj48L0J1dHRvbj5cXHJcXG48L1N0YWNrTGF5b3V0PlxcclxcbjwhLS0gXFx0XFx0PGZvcm0gaWQ9XFxcInBheW1lbnQtY2FyZC1mb3JtXFxcIiBjbGFzcz1cXFwic2NhbGUtZG93blxcXCI+XFxyXFxuXFx0ICAgIDxkaXYgY2xhc3M9XFxcImNhcmRpbmZvLWNhcmQtbnVtYmVyXFxcIj5cXHJcXG5cXHQgICAgICA8bGFiZWwgY2xhc3M9XFxcImNhcmRpbmZvLWxhYmVsXFxcIiBmb3I9XFxcImNhcmQtbnVtYmVyXFxcIj5DYXJkIE51bWJlcjwvbGFiZWw+XFxyXFxuXFx0ICAgICAgPGRpdiBjbGFzcz0naW5wdXQtd3JhcHBlcicgaWQ9XFxcImNhcmQtbnVtYmVyXFxcIj48L2Rpdj5cXHJcXG5cXHQgICAgICA8ZGl2IGlkPVxcXCJjYXJkLWltYWdlXFxcIj48L2Rpdj5cXHJcXG5cXHQgICAgPC9kaXY+XFxyXFxuXFxyXFxuXFx0ICAgIDxkaXYgY2xhc3M9XFxcImNhcmRpbmZvLXdyYXBwZXJcXFwiPlxcclxcblxcdCAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmRpbmZvLWV4cC1kYXRlXFxcIj5cXHJcXG5cXHQgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY2FyZGluZm8tbGFiZWxcXFwiIGZvcj1cXFwiZXhwaXJhdGlvbi1kYXRlXFxcIj5WYWxpZCBUaHJ1PC9sYWJlbD5cXHJcXG5cXHQgICAgICAgIDxkaXYgY2xhc3M9J2lucHV0LXdyYXBwZXInIGlkPVxcXCJleHBpcmF0aW9uLWRhdGVcXFwiPjwvZGl2PlxcclxcblxcdCAgICAgIDwvZGl2PlxcclxcblxcclxcblxcdCAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmRpbmZvLWN2dlxcXCI+XFxyXFxuXFx0ICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNhcmRpbmZvLWxhYmVsXFxcIiBmb3I9XFxcImN2dlxcXCI+Q1ZWPC9sYWJlbD5cXHJcXG5cXHQgICAgICAgIDxkaXYgY2xhc3M9J2lucHV0LXdyYXBwZXInIGlkPVxcXCJjdnZcXFwiPjwvZGl2PlxcclxcblxcdCAgICAgIDwvZGl2PlxcclxcblxcdCAgICA8L2Rpdj5cXHJcXG5cXHQgIDwvZm9ybT4gLS0+XCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgRWxlbWVudFJlZiwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCAqIGFzIGRyb3BpbiBmcm9tICdicmFpbnRyZWUtd2ViLWRyb3AtaW4nO1xyXG5pbXBvcnQgKiBhcyBicmFpbnRyZWUgZnJvbSAnYnJhaW50cmVlLXdlYic7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvYnV0dG9uJztcclxuaW1wb3J0IHsgVGV4dEZpZWxkIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS90ZXh0LWZpZWxkJztcclxuaW1wb3J0IHsgTW9kYWxEaWFsb2dQYXJhbXMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZGlyZWN0aXZlcy9kaWFsb2dzXCI7XHJcbmltcG9ydCB7IFBheW1lbnRTZXJ2aWNlIH0gZnJvbSAnLi4vcGF5bWVudC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU3RhY2tMYXlvdXQgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvc3RhY2stbGF5b3V0JztcclxuLy8gaW1wb3J0IHsgTmF0aXZlU2NyaXB0SHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHAtY2xpZW50JztcclxuLy8gaW1wb3J0IHsgTmd4QnJhaW50cmVlTW9kdWxlIH0gZnJvbSAnbmd4LWJyYWludHJlZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZSc7XHJcbmltcG9ydCB7IEJyYWludHJlZSwgQnJhaW5UcmVlT3B0aW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1icmFpbnRyZWUnO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcclxuXHJcbi8vIHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtbm9kZWlmeVwiKTtcclxuLy8gaW1wb3J0ICogYXMgTm9kZWlmeSBmcm9tICduYXRpdmVzY3JpcHQtbm9kZWlmeSc7XHJcbi8vIGNvbnN0IGJyYWludHJlZSA9IHJlcXVpcmUoJ2JyYWludHJlZS13ZWInKTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLWFkZC1jYXJkLXBheW1lbnQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9hZGQtY2FyZC1wYXltZW50LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9hZGQtY2FyZC1wYXltZW50LmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWRkQ2FyZFBheW1lbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhcmFtczogTW9kYWxEaWFsb2dQYXJhbXMsIHByaXZhdGUgcGF5bWVudFNlcnZpY2U6IFBheW1lbnRTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucykgeyB9XHJcblxyXG4gIC8vIEBWaWV3Q2hpbGQoXCJkcm9waW5Db250YWludGVyXCIpIGNvbnRhaW5lcjogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKFwic3VibWl0QnV0dG9uXCIsIHsgc3RhdGljOiB0cnVlIH0pIHNCOiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoXCJleHBpcmF0aW9uRGF0ZVwiLCB7IHN0YXRpYzogdHJ1ZSB9KSBleHBpcmF0aW9uVGV4dDogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKFwiY2FyZE51bWJlclwiLCB7IHN0YXRpYzogdHJ1ZSB9KSBudW1iZXJUZXh0OiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoXCJjdnZcIiwgeyBzdGF0aWM6IHRydWUgfSkgY3Z2VGV4dDogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKFwiZm9ybVwiLCB7IHN0YXRpYzogdHJ1ZSB9KSBmb3JtTGF5b3V0OiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoXCJjYXJkSW1hZ2VcIiwgeyBzdGF0aWM6IHRydWUgfSkgY2FyZExheW91dDogRWxlbWVudFJlZjtcclxuXHJcbiAgdXNlciA9IHtcclxuICBcdHBheW1lbnRfaWQ6ICc1MDczMDU3MDYnXHJcbiAgfVxyXG4gIG9wdHMgOkJyYWluVHJlZU9wdGlvbnMgPSB7XHJcblx0YW1vdW50OiBudWxsLFxyXG5cdGNvbGxlY3REZXZpY2VEYXRhOiB0cnVlLFxyXG5cdHJlcXVlc3RUaHJlZURTZWN1cmVWZXJpZmljYXRpb246IGZhbHNlLFxyXG4gIH1cclxuICBjbGllbnRUb2tlbiA9ICcnO1xyXG5cclxuICAvLyB0b2tlbiA9IHRoaXMucGF5bWVudFNlcnZpY2UuZ2V0SWRUb2tlbih0aGlzLnVzZXIucGF5bWVudF9pZCk7XHJcbiAgbmdPbkluaXQoKSB7XHJcbiAvLyAgXHRicmFpbnRyZWUuY2xpZW50LmNyZWF0ZSh7XHJcblx0Ly8gICBhdXRob3JpemF0aW9uOiAnc2FuZGJveF85cXNieXlxOF93bWMzdjg4cjM2Y2J4amp6J1xyXG5cdC8vIH0sIGZ1bmN0aW9uIChjbGllbnRFcnIsIGNsaWVudEluc3RhbmNlKSB7XHJcblx0Ly8gICAvLyBTdG9wIGlmIHRoZXJlIHdhcyBhIHByb2JsZW0gY3JlYXRpbmcgdGhlIGNsaWVudC5cclxuXHQvLyAgIC8vIFRoaXMgY291bGQgaGFwcGVuIGlmIHRoZXJlIGlzIGEgbmV0d29yayBlcnJvciBvciBpZiB0aGUgYXV0aG9yaXphdGlvblxyXG5cdC8vICAgLy8gaXMgaW52YWxpZC5cclxuXHQvLyAgIGlmIChjbGllbnRFcnIpIHtcclxuXHQvLyAgICAgY29uc29sZS5lcnJvcignRXJyb3IgY3JlYXRpbmcgY2xpZW50OicsIGNsaWVudEVycik7XHJcblx0Ly8gICAgIHJldHVybjtcclxuXHQvLyAgIH1cclxuXHQvLyB9KTtcclxuXHJcbiAgfVxyXG5cclxuICBjcmVhdGVWaWV3cygpIHtcclxuICBcdHZhciBmb3JtID0gPFN0YWNrTGF5b3V0PiB0aGlzLmZvcm1MYXlvdXQubmF0aXZlRWxlbWVudDtcclxuXHR2YXIgc3VibWl0ID0gPEJ1dHRvbj4gdGhpcy5zQi5uYXRpdmVFbGVtZW50O1xyXG5cdHZhciBleHBpcmF0aW9uRGF0ZSA9IDxTdGFja0xheW91dD4gdGhpcy5leHBpcmF0aW9uVGV4dC5uYXRpdmVFbGVtZW50O1xyXG5cdHZhciBjYXJkTnVtYmVyID0gPFN0YWNrTGF5b3V0PiB0aGlzLm51bWJlclRleHQubmF0aXZlRWxlbWVudDtcclxuXHR2YXIgY3Z2ID0gPFN0YWNrTGF5b3V0PiB0aGlzLmN2dlRleHQubmF0aXZlRWxlbWVudDtcclxuXHR2YXIgY2FyZEltYWdlID0gPFN0YWNrTGF5b3V0PiB0aGlzLmNhcmRMYXlvdXQubmF0aXZlRWxlbWVudDtcclxuXHJcblx0c3VibWl0LmlzRW5hYmxlZCA9IGZhbHNlO1xyXG5cclxuICB9XHJcblxyXG4gIGNsb3NlKCkge1xyXG4gIFx0dGhpcy5wYXJhbXMuY2xvc2VDYWxsYmFjaygpO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q2xpZW50VG9rZW4oKSB7XHJcbiAgXHRjb25zdCB0b2tlbiA9IG5ldyBPYnNlcnZhYmxlKCk7XHJcbiAgXHR0b2tlbi5zZXQoJ0F1dGhvcml6YXRpb24nLCAnc2FuZGJveF85cXNieXlxOF93bWMzdjg4cjM2Y2J4amp6Jyk7XHJcbiAgXHRyZXR1cm4gdG9rZW47XHJcbiAgfVxyXG5cclxuICBjcmVhdGVQdXJjaGFzZUZ1bmN0aW9uKG5vbmNlOiBzdHJpbmcsIGNoYXJnZUFtb3VudDogbnVtYmVyKSB7XHJcbiAgXHRyZXR1cm4gdGhpcy5wYXltZW50U2VydmljZS5hZGRQYXltZW50TWV0aG9kVG9Vc2VyKHRoaXMudXNlci5wYXltZW50X2lkLCBub25jZSk7XHJcbiAgfVxyXG5cclxuICBvblBheW1lbnRTdGF0dXMoZXZlbnQpIHtcclxuXHJcbiAgfVxyXG5cclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLyogQWRkIG1vYmlsZSBzdHlsZXMgZm9yIHRoZSBjb21wb25lbnQgaGVyZS4gICovXFxyXFxuLnBhZ2Uge1xcclxcbiAgLyphbGlnbi1pdGVtczogY2VudGVyOyovXFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybSB7XFxyXFxuICBtYXJnaW4tbGVmdDogMzA7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDMwO1xcclxcbiAgZmxleC1ncm93OiAyO1xcclxcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlIHtcXHJcXG5cXHRtYXJnaW46IDEwO1xcclxcblxcdGZvbnQtc2l6ZTogMjg7XFxyXFxuXFx0d2lkdGg6IDQ4O1xcclxcblxcdGhlaWdodDogNDg7XFxyXFxufVxcclxcblxcclxcbi5jbG9zZS1idXR0b24tY29udGFpbmVyIHtcXHJcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0bGVmdDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlci1sYWJlbCB7XFxyXFxuXFx0bWFyZ2luLXRvcDogNjA7XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTogMDtcXHJcXG5cXHRmb250LXNpemU6IDIwO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyLWxhYmVsLTIge1xcclxcblxcdGZvbnQtc2l6ZTogMjA7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXItbGFiZWwtMyB7XFxyXFxuXFx0bWFyZ2luLXRvcDogMTQ7XFxyXFxuXFx0bWFyZ2luLWxlZnQ6IDE2O1xcclxcblxcdG1hcmdpbi1yaWdodDogMTY7XFxyXFxuXFx0Zm9udC1zaXplOiAxODtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlci1sYWJlbC00IHtcXHJcXG5cXHRmb250LXNpemU6IDE4O1xcclxcblxcdG1hcmdpbi10b3A6IDE0O1xcclxcbn1cXHJcXG5cXHJcXG4ucmlkaW5nLWxhYmVsIHtcXHJcXG5cXHRmb250LXdlaWdodDogNzAwO1xcclxcblxcdGNvbG9yOiAjYWMwMGU2O1xcclxcbn1cXHJcXG5cXHJcXG4uZHJpdmluZy1sYWJlbCB7XFxyXFxuXFx0Y29sb3I6ICM1YzY4N2M7XFxyXFxufVxcclxcblxcclxcbi5zd2l0Y2gtY29udGFpbmVyIHtcXHJcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zd2l0Y2gge1xcclxcblxcdGNvbG9yOiAjYWMwMGU2O1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICNjZDk0ZTA7XFxyXFxufVxcclxcblxcclxcbi5zdWJtaXQtYnRuIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjYWMwMGU2O1xcclxcblxcdG1hcmdpbi10b3A6IDIwO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9sZCB7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDcwMDtcXHJcXG59XFxyXFxuXFxyXFxuLnN0YXJ0LWZpZWxkIHtcXHJcXG5cXHRtYXJnaW4tdG9wOiAxNDtcXHJcXG59XFxyXFxuXFxyXFxuLmFjdGl2aXR5LWluZGljYXRvciB7XFxyXFxuICBjb2xvcjogI2FjMDBlNjtcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XFxyXFxuICBtYXJnaW4tdG9wOiA0NyU7XFxyXFxufVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxTdGFja0xheW91dD5cXHJcXG5cXHQ8QWN0aXZpdHlJbmRpY2F0b3IgI2FjdGl2aXR5SW5kaWNhdG9yIGJ1c3k9XFxcInRydWVcXFwiIHdpZHRoPVxcXCI0MFxcXCIgaGVpZ2h0PVxcXCI0MFxcXCIgY2xhc3M9XFxcImFjdGl2aXR5LWluZGljYXRvclxcXCI+PC9BY3Rpdml0eUluZGljYXRvcj5cXHJcXG5cXHQ8U2Nyb2xsVmlldyBoZWlnaHQ9XFxcIjEwMCVcXFwiPlxcclxcblxcdDxGbGV4Ym94TGF5b3V0IGNsYXNzPVxcXCJwYWdlXFxcIiAjYWRkQ29udGFpbmVyPlxcclxcblxcdFxcdDxTdGFja0xheW91dCBjbGFzcz1cXFwiY2xvc2UtYnV0dG9uLWNvbnRhaW5lclxcXCIgb3JpZW50YXRpb249XFxcImhvcml6b250YWxcXFwiPlxcclxcblxcdFxcdFxcdDxMYWJlbCB0ZXh0PVxcXCImdGltZXM7XFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiICh0YXApPVxcXCJjbG9zZSgnY2FuY2VsJylcXFwiPjwvTGFiZWw+XFxyXFxuXFx0XFx0PC9TdGFja0xheW91dD5cXHJcXG5cXHJcXG5cXHJcXG5cXHRcXHQ8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImZvcm1cXFwiPlxcclxcblxcdFxcdFxcdDxMYWJlbCB0ZXh0PVxcXCJJIGFtLi4uXFxcIiBjbGFzcz1cXFwiaGVhZGVyLWxhYmVsLTIgYm9sZFxcXCI+PC9MYWJlbD5cXHJcXG5cXHJcXG5cXHRcXHQgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiaW5wdXQtZmllbGQgc3dpdGNoLWNvbnRhaW5lclxcXCIgb3JpZW50YXRpb249XFxcImhvcml6b250YWxcXFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCI+XFxyXFxuXFx0XFx0ICBcXHQ8TGFiZWwgdGV4dD1cXFwiRHJpdmluZ1xcXCIgY2xhc3M9XFxcImhlYWRlci1sYWJlbC0zIGRyaXZpbmctbGFiZWxcXFwiICNkcml2aW5nTGFiZWw+PC9MYWJlbD5cXHJcXG5cXHRcXHQgIFxcdDxTd2l0Y2ggY2hlY2tlZD1cXFwidHJ1ZVxcXCIgKGNoZWNrZWRDaGFuZ2UpPVxcXCJvbkNoZWNrZWRDaGFuZ2UoJGV2ZW50KVxcXCIgY2xhc3M9XFxcIm0tMTUgc3dpdGNoXFxcIj48L1N3aXRjaD5cXHJcXG5cXHRcXHQgIFxcdDxMYWJlbCB0ZXh0PVxcXCJSaWRpbmdcXFwiIGNsYXNzPVxcXCJoZWFkZXItbGFiZWwtMyByaWRpbmctbGFiZWxcXFwiICNyaWRpbmdMYWJlbD48L0xhYmVsPlxcclxcblxcdFxcdCAgPC9TdGFja0xheW91dD5cXHJcXG5cXHJcXG5cXHRcXHQgIDxMYWJlbCB0ZXh0PVxcXCJXaGVyZT9cXFwiIGNsYXNzPVxcXCJoZWFkZXItbGFiZWwgYm9sZFxcXCI+PC9MYWJlbD5cXHJcXG5cXHRcXHQgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiaW5wdXQtZmllbGQgc3RhcnQtZmllbGRcXFwiPlxcclxcbjwhLS0gXFx0XFx0ICAgIDxUZXh0RmllbGQgY2xhc3M9XFxcImlucHV0XFxcIiBhdXRvY29ycmVjdD1cXFwiZmFsc2VcXFwiIGhpbnQ9XFxcIldoZXJlIGZyb20/XFxcIiBbKG5nTW9kZWwpXT1cXFwic3RhcnRBZGRyZXNzXFxcIiAodGV4dENoYW5nZSk9XFxcInN0YXJ0QXV0b2NvbXBsZXRlKClcXFwiICh0YXApPVxcXCJzaG93TW9kYWwoJ3N0YXJ0JylcXFwiIHJlcXVpcmVkPjwvVGV4dEZpZWxkPiAtLT5cXHJcXG5cXHRcXHRcXHQ8TGFiZWwgdGV4dD1cXFwie3sgc3RhcnRMYWJlbCB9fVxcXCIgY2xhc3M9XFxcImhlYWRlci1sYWJlbC0zXFxcIiAodGFwKT1cXFwic2hvd01vZGFsKCdzdGFydCcpXFxcIj48L0xhYmVsPlxcclxcblxcdFxcdCAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImhyLWxpZ2h0XFxcIj48L1N0YWNrTGF5b3V0PlxcclxcblxcdFxcdCAgPC9TdGFja0xheW91dD5cXHJcXG5cXHJcXG5cXHRcXHQgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiaW5wdXQtZmllbGRcXFwiPlxcclxcbjwhLS0gXFx0XFx0ICAgIDxUZXh0RmllbGQgY2xhc3M9XFxcImlucHV0XFxcIiBhdXRvY29ycmVjdD1cXFwiZmFsc2VcXFwiIGhpbnQ9XFxcIldoZXJlIHRvP1xcXCIgWyhuZ01vZGVsKV09XFxcImVuZEFkZHJlc3NcXFwiICh0ZXh0Q2hhbmdlKT1cXFwiZW5kQXV0b2NvbXBsZXRlKClcXFwiICh0YXApPVxcXCJzaG93TW9kYWwoJ2VuZCcpXFxcIiByZXF1aXJlZD48L1RleHRGaWVsZD4gLS0+XFxyXFxuXFx0XFx0XFx0XFx0PExhYmVsIHRleHQ9XFxcInt7IGVuZExhYmVsIH19XFxcIiBjbGFzcz1cXFwiaGVhZGVyLWxhYmVsLTNcXFwiICh0YXApPVxcXCJzaG93TW9kYWwoJ2VuZCcpXFxcIj48L0xhYmVsPlxcclxcblxcdFxcdCAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImhyLWxpZ2h0XFxcIj48L1N0YWNrTGF5b3V0PlxcclxcblxcdFxcdCAgPC9TdGFja0xheW91dD5cXHJcXG5cXHJcXG5cXHQ8IS0tIFxcdCAgPERhdGVQaWNrZXIgKGxvYWRlZCk9XFxcIm9uUGlja2VyTG9hZGVkKCRldmVudClcXFwiIChkYXRlQ2hhbmdlKT1cXFwib25EYXRlQ2hhbmdlZCgkZXZlbnQpXFxcIiBcXHJcXG5cXHQoZGF5Q2hhbmdlKT1cXFwib25EYXlDaGFuZ2VkKCRldmVudClcXFwiIChtb250aENoYW5nZSk9XFxcIm9uTW9udGhDaGFuZ2VkKCRldmVudClcXFwiICh5ZWFyQ2hhbmdlKT1cXFwib25ZZWFyQ2hhbmdlZCgkZXZlbnQpXFxcIiB2ZXJ0aWNhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIj48L0RhdGVQaWNrZXI+IC0tPlxcclxcblxcdFxcdFxcdDxMYWJlbCB0ZXh0PVxcXCJXaGVuP1xcXCIgY2xhc3M9XFxcImhlYWRlci1sYWJlbCBib2xkXFxcIj48L0xhYmVsPlxcclxcblxcclxcblxcdFxcdCAgPERhdGVQaWNrZXIgKGxvYWRlZCk9XFxcIm9uUGlja2VyTG9hZGVkKCRldmVudClcXFwiIChkYXRlQ2hhbmdlKT1cXFwib25EYXRlQ2hhbmdlZCgkZXZlbnQpXFxcIiB2ZXJ0aWNhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIj48L0RhdGVQaWNrZXI+XFxyXFxuXFxyXFxuXFx0XFx0ICA8TGFiZWwgKm5nSWY9XFxcImlzRHJpdmluZ1xcXCIgdGV4dD1cXFwiSG93IG1hbnk/XFxcIiBjbGFzcz1cXFwiaGVhZGVyLWxhYmVsXFxcIj48L0xhYmVsPlxcclxcblxcdFxcdCAgPEdyaWRMYXlvdXQgKm5nSWY9XFxcImlzRHJpdmluZ1xcXCIgY2xhc3M9XFxcIm0tMTVcXFwiIHJvd3M9XFxcImF1dG9cXFwiIGNvbHVtbnM9XFxcIjUwICogNTBcXFwiPlxcclxcblxcdFxcdFxcdCAgICA8TGFiZWwgY2xhc3M9XFxcImgzXFxcIiB0ZXh0PVxcXCIxXFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgcm93PVxcXCIxMFxcXCIgY29sPVxcXCIwXFxcIj48L0xhYmVsPlxcclxcblxcdFxcdFxcdCAgICA8U2xpZGVyIG1pblZhbHVlPVxcXCIxXFxcIiBtYXhWYWx1ZT1cXFwiOFxcXCIgWyhuZ01vZGVsKV09XFxcImNhcGFjaXR5XFxcIiByb3c9XFxcIjBcXFwiXFxyXFxuXFx0XFx0XFx0ICAgICBjb2w9XFxcIjFcXFwiPjwvU2xpZGVyPlxcclxcblxcdFxcdFxcdCAgICA8TGFiZWwgY2xhc3M9XFxcImgzXFxcIiB0ZXh0PVxcXCI4XFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgcm93PVxcXCIwXFxcIiBjb2w9XFxcIjJcXFwiPjwvTGFiZWw+XFxyXFxuXFx0XFx0XFx0PC9HcmlkTGF5b3V0PlxcclxcblxcdFxcdCAgPExhYmVsICpuZ0lmPVxcXCJpc0RyaXZpbmdcXFwiIHRleHQ9XFxcInt7IGNhcGFjaXR5IH19XFxcIiBjbGFzcz1cXFwiaGVhZGVyLWxhYmVsLTJcXFwiPjwvTGFiZWw+XFxyXFxuXFxyXFxuXFx0XFx0ICA8QnV0dG9uIHRleHQ9XFxcIkFkZFxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeSBzdWJtaXQtYnRuXFxcIiAodGFwKT1cXFwiYWRkUG9zdGluZygpXFxcIj48L0J1dHRvbj5cXHJcXG5cXHRcXHQ8L1N0YWNrTGF5b3V0PlxcclxcblxcdDwvRmxleGJveExheW91dD5cXHJcXG5cXHQ8L1Njcm9sbFZpZXc+XFxyXFxuPC9TdGFja0xheW91dD5cXHJcXG5cXHJcXG5cXHJcXG5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTW9kYWxEaWFsb2dQYXJhbXMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZGlyZWN0aXZlcy9kaWFsb2dzXCI7XHJcbmltcG9ydCB7IE1vZGFsRGlhbG9nU2VydmljZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9kaXJlY3RpdmVzL2RpYWxvZ3NcIjtcclxuaW1wb3J0IHsgUG9zdGluZ1NlcnZpY2UgfSBmcm9tICcuLi9wb3N0aW5nLnNlcnZpY2UudG5zJztcclxuaW1wb3J0IHsgRGF0ZVBpY2tlciB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RhdGUtcGlja2VyXCI7XHJcbmltcG9ydCB7IFN3aXRjaCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3N3aXRjaFwiO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZVwiO1xyXG5pbXBvcnQgeyBMYWJlbCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xhYmVsXCI7XHJcbmltcG9ydCB7IENvbG9yIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvY29sb3JcIjtcclxuaW1wb3J0IHsgUGxhY2VzQXV0b2NvbXBsZXRlU2VydmljZSB9IGZyb20gJy4uL3BsYWNlcy1hdXRvY29tcGxldGUuc2VydmljZSc7XHJcbmltcG9ydCB7IHNldEludGVydmFsLCBjbGVhckludGVydmFsIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdGltZXJcIjtcclxuaW1wb3J0IHsgTG9jYXRpb25Db21wb25lbnQgfSBmcm9tICcuLi9sb2NhdGlvbi9sb2NhdGlvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUcmFuc2ZlclNlcnZpY2UgfSBmcm9tICcuLi9kYXRhdHJhbnNmZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IExvZ2luY2hlY2tTZXJ2aWNlIH0gZnJvbSAnLi4vbG9naW5jaGVjay5zZXJ2aWNlLnRucyc7XHJcbmltcG9ydCAqIGFzIGZpcmViYXNlIGZyb20gJ25hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2UnO1xyXG5pbXBvcnQgeyBEYXRlUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IENhY2hlIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9pbWFnZS1jYWNoZSc7XHJcbmltcG9ydCB7IEdvb2dsZU1hcHNTZXJ2aWNlIH0gZnJvbSAnLi4vZ29vZ2xlLW1hcHMuc2VydmljZSc7XHJcbmltcG9ydCB7SW1hZ2VTb3VyY2UsIGZyb21GaWxlLCBmcm9tUmVzb3VyY2UsIGZyb21CYXNlNjR9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2ltYWdlLXNvdXJjZVwiO1xyXG5pbXBvcnQge0ZvbGRlciwgcGF0aCwga25vd25Gb2xkZXJzfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9maWxlLXN5c3RlbVwiO1xyXG5pbXBvcnQgKiBhcyBmcyBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9maWxlLXN5c3RlbVwiO1xyXG5pbXBvcnQgeyBBY3Rpdml0eUluZGljYXRvciB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvYWN0aXZpdHktaW5kaWNhdG9yJztcclxuaW1wb3J0IHsgU2Nyb2xsVmlldyB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvc2Nyb2xsLXZpZXcnO1xyXG5pbXBvcnQgeyBGbGV4Ym94TGF5b3V0IH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9sYXlvdXRzL2ZsZXhib3gtbGF5b3V0JztcclxuaW1wb3J0IHsgU3RhY2tMYXlvdXQgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvc3RhY2stbGF5b3V0JztcclxuLy8gaW1wb3J0IHsgR29vZ2xlUGxhY2VzQXV0b2NvbXBsZXRlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWdvb2dsZS1wbGFjZXMtYXV0b2NvbXBsZXRlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLWFkZC1tb2RhbCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2FkZC1tb2RhbC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vYWRkLW1vZGFsLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWRkTW9kYWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhcmFtczogTW9kYWxEaWFsb2dQYXJhbXMsIHByaXZhdGUgcG9zdGluZ1NlcnZpY2U6IFBvc3RpbmdTZXJ2aWNlLCBwcml2YXRlIHBhZ2U6IFBhZ2UsIHByaXZhdGUgcGxhY2VzU2VydmljZTogUGxhY2VzQXV0b2NvbXBsZXRlU2VydmljZSxcclxuICAgIHByaXZhdGUgbW9kYWw6IE1vZGFsRGlhbG9nU2VydmljZSwgcHJpdmF0ZSB2Y1JlZjogVmlld0NvbnRhaW5lclJlZiwgcHJpdmF0ZSB0cmFuc2ZlclNlcnZpY2U6IFRyYW5zZmVyU2VydmljZSwgcHJpdmF0ZSBsb2dpbmNoZWNrU2VydmljZTogTG9naW5jaGVja1NlcnZpY2UsXHJcbiAgICBwcml2YXRlIGRhdGVQaXBlOiBEYXRlUGlwZSwgcHJpdmF0ZSBtYXBTZXJ2aWNlOiBHb29nbGVNYXBzU2VydmljZSkgeyB9XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ2RyaXZpbmdMYWJlbCcsIHsgc3RhdGljOiB0cnVlIH0pIGRsOiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoJ3JpZGluZ0xhYmVsJywgeyBzdGF0aWM6IHRydWUgfSkgcmw6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgnYWN0aXZpdHlJbmRpY2F0b3InLCB7IHN0YXRpYzogdHJ1ZSB9KSBhaTogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKCdhZGRDb250YWluZXInLCB7IHN0YXRpYzogdHJ1ZSB9KSBhYzogRWxlbWVudFJlZjtcclxuICAvLyBAVmlld0NoaWxkKCdzdGFydExhYmVsJykgc2w6IEVsZW1lbnRSZWY7XHJcbiAgLy8gQFZpZXdDaGlsZCgnZW5kTGFiZWwnKSBlbDogRWxlbWVudFJlZjtcclxuXHJcbiAgc3RhcnRTdWdnZXN0aW9uczogU3RyaW5nW107XHJcbiAgZW5kU3VnZ2VzdGlvbnM6IFN0cmluZ1tdO1xyXG4gIHN0YXJ0UGxhY2U7XHJcbiAgZW5kUGxhY2U7XHJcbiAgc3RhcnRBZGRyZXNzO1xyXG4gIGVuZEFkZHJlc3M7XHJcbiAgZm9ybWF0dGVkRGF0ZTtcclxuICBkYXRlID0gXCJub3dcIjtcclxuICBwcmljZSA9IFwiJDE1XCI7XHJcbiAgY2FwYWNpdHkgPSBcIi0xXCI7XHJcbiAgdXNlciA9IHtcclxuICBcdHVzZXJuYW1lOiBcIjIwMjJheWVlXCIsXHJcbiAgICBpZDogXCJcIlxyXG4gIH07XHJcbiAgc3RhcnRMYWJlbCA9IFwiUGljayBzdGFydCBsb2NhdGlvblwiO1xyXG4gIGVuZExhYmVsID0gXCJQaWNrIGVuZCBsb2NhdGlvblwiO1xyXG4gIHN0YXJ0TGF0O1xyXG4gIHN0YXJ0TG5nO1xyXG4gIGVuZExhdDtcclxuICBlbmRMbmc7XHJcblxyXG4gIGlzRHJpdmluZyA9IGZhbHNlO1xyXG4gIHN0YXJ0TG9jYXRpb25QaWNrZWQgPSBmYWxzZTtcclxuICBlbmRMb2NhdGlvblBpY2tlZCA9IGZhbHNlO1xyXG4gIGltYWdlU291cmNlID0gbmV3IEltYWdlU291cmNlKCk7XHJcblxyXG5cclxuICBBUElfS0VZID0gXCJBSXphU3lBSVR4UzFqbWY4UE10YXpSZ3VXY0FmV1F4VzFrUE9vWWdcIjtcclxuICAvLyBnb29nbGVQbGFjZXNBdXRvY29tcGxldGUgPSBuZXcgR29vZ2xlUGxhY2VzQXV0b2NvbXBsZXRlKHRoaXMuQVBJX0tFWSk7XHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICAvLyBsZXQgYWRkQ29udGFpbmVyID0gPEZsZXhib3hMYXlvdXQ+IHRoaXMuYWMubmF0aXZlRWxlbWVudDtcclxuICAgIC8vICAvLyBhY3Rpdml0eUluZGljYXRvci5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xyXG4gICAgLy8gYWRkQ29udGFpbmVyLnN0eWxlLnZpc2liaWxpdHkgPSAnY29sbGFwc2UnO1xyXG4gICAgbGV0IGFjdGl2aXR5SW5kaWNhdG9yID0gPEFjdGl2aXR5SW5kaWNhdG9yPiB0aGlzLmFpLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICBhY3Rpdml0eUluZGljYXRvci5zdHlsZS52aXNpYmlsaXR5ID0gJ2NvbGxhcHNlJ1xyXG4gICAgZmlyZWJhc2UuZ2V0Q3VycmVudFVzZXIoKS50aGVuKHVzZXIgPT4ge1xyXG4gICAgICB0aGlzLnVzZXIudXNlcm5hbWUgPSB1c2VyLmRpc3BsYXlOYW1lO1xyXG4gICAgICBpZih1c2VyLmRpc3BsYXlOYW1lID09IG51bGwgfHwgdXNlci5kaXNwbGF5TmFtZSA9PSAnJylcclxuICAgICAgICB0aGlzLnVzZXIudXNlcm5hbWUgPSB1c2VyLmVtYWlsO1xyXG4gICAgICB0aGlzLnVzZXIuaWQgPSB0aGlzLmxvZ2luY2hlY2tTZXJ2aWNlLmdldFVzZXIoKTtcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBzdGFydFNlbGVjdChldmVudDogRXZlbnQpIHtcclxuICAgIGNvbnNvbGUubG9nKGV2ZW50LnNyY0VsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgc2hvd01vZGFsKHR5cGUpIHtcclxuICAgIGxldCBvcHRpb25zID0ge1xyXG4gICAgICAgIGNvbnRleHQ6IHt9LFxyXG4gICAgICAgIGZ1bGxzY3JlZW46IHRydWUsXHJcbiAgICAgICAgdmlld0NvbnRhaW5lclJlZjogdGhpcy52Y1JlZlxyXG4gICAgICAgIC8vIGFuaW1hdGVkOiB0cnVlLFxyXG4gICAgICAgIC8vIHRyYW5zaXRpb246IHsgbmFtZTogXCJzbGlkZVRvcFwiIH1cclxuICAgIH07XHJcbiAgICB0aGlzLnRyYW5zZmVyU2VydmljZS5zZXREYXRhKHR5cGUpO1xyXG4gICAgdGhpcy5tb2RhbC5zaG93TW9kYWwoTG9jYXRpb25Db21wb25lbnQsIG9wdGlvbnMpLnRoZW4ocmVzID0+IHtcclxuICAgICAgICBpZihyZXMgIT0gbnVsbClcclxuICAgICAgICAgIGlmKHJlcy5zdGFydCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRMb2NhdGlvblBpY2tlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRMYWJlbCA9ICdTdGFydCBsb2NhdGlvbjogJyArIHJlcy5zdGFydDtcclxuICAgICAgICAgICAgdGhpcy5zdGFydFBsYWNlID0gcmVzLnN0YXJ0O1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0QWRkcmVzcyA9IHJlcy5hZGRyZXNzO1xyXG5cclxuICAgICAgICAgICAgLy8gbGV0IHNMYWJlbCA9IDxMYWJlbD4gdGhpcy5zbC5uYXRpdmVFbGVtZW50O1xyXG4gICAgICAgICAgICAvLyBzTGFiZWwuY2xhc3NOYW1lICs9ICdib2xkJztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2UgaWYocmVzLmVuZCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW5kTG9jYXRpb25QaWNrZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmVuZExhYmVsID0gJ0VuZCBsb2NhdGlvbjogJyArIHJlcy5lbmQ7XHJcbiAgICAgICAgICAgIHRoaXMuZW5kUGxhY2UgPSByZXMuZW5kO1xyXG4gICAgICAgICAgICB0aGlzLmVuZEFkZHJlc3MgPSByZXMuYWRkcmVzcztcclxuICAgICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIGlmKHR5cGUgPT0gJ3N0YXJ0Jykge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0TG9jYXRpb25QaWNrZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0TGFiZWwgPSAnUGljayBzdGFydCBsb2NhdGlvbic7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbHNlIGlmKHR5cGUgPT0gJ2VuZCcpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGFydExvY2F0aW9uUGlja2VkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRMYWJlbCA9ICdQaWNrIGVuZCBsb2NhdGlvbic7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjbG9zZShyZXMpIHtcclxuICBcdHRoaXMucGFyYW1zLmNsb3NlQ2FsbGJhY2socmVzKTtcclxuICAgfVxyXG5cclxuICAgYWRkUG9zdGluZygpIHtcclxuICAgICBsZXQgYWRkQ29udGFpbmVyID0gPEZsZXhib3hMYXlvdXQ+IHRoaXMuYWMubmF0aXZlRWxlbWVudDtcclxuICAgICBhZGRDb250YWluZXIuc3R5bGUudmlzaWJpbGl0eSA9ICdjb2xsYXBzZSc7XHJcbiAgICAgbGV0IGFjdGl2aXR5SW5kaWNhdG9yID0gPEFjdGl2aXR5SW5kaWNhdG9yPiB0aGlzLmFpLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICAgYWN0aXZpdHlJbmRpY2F0b3Iuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcclxuICAgICB0aGlzLm1hcFNlcnZpY2UuZ2V0R2VvY29kZVJlc3VsdHModGhpcy5zdGFydFBsYWNlICsgJyAnICsgdGhpcy5zdGFydEFkZHJlc3MpLnN1YnNjcmliZSgocmVzOiBhbnkpID0+IHtcclxuICAgICAgdGhpcy5zdGFydExhdCA9IHJlcy5yZXN1bHRzWzBdLmdlb21ldHJ5LmxvY2F0aW9uLmxhdDtcclxuICAgICAgdGhpcy5zdGFydExuZyA9IHJlcy5yZXN1bHRzWzBdLmdlb21ldHJ5LmxvY2F0aW9uLmxuZztcclxuICAgICAgdGhpcy5tYXBTZXJ2aWNlLmdldEdlb2NvZGVSZXN1bHRzKHRoaXMuZW5kUGxhY2UgKyAnICcgKyB0aGlzLmVuZEFkZHJlc3MpLnN1YnNjcmliZSgocmVzOiBhbnkpID0+IHtcclxuICAgICAgICB0aGlzLmVuZExhdCA9IHJlcy5yZXN1bHRzWzBdLmdlb21ldHJ5LmxvY2F0aW9uLmxhdDtcclxuICAgICAgICB0aGlzLmVuZExuZyA9IHJlcy5yZXN1bHRzWzBdLmdlb21ldHJ5LmxvY2F0aW9uLmxuZztcclxuXHJcbiAgICAgICAgaWYodGhpcy5zdGFydExvY2F0aW9uUGlja2VkICYmIHRoaXMuZW5kTG9jYXRpb25QaWNrZWQpIHtcclxuICAgICAgICAgdmFyIHBvc3RpbmdzQ29sbGVjdGlvbiA9IGZpcmViYXNlLmZpcmVzdG9yZS5jb2xsZWN0aW9uKCdwb3N0aW5ncycpO1xyXG4gICAgICAgICBwb3N0aW5nc0NvbGxlY3Rpb24uYWRkKHtcclxuICAgICAgICAgICB1aWQ6IHRoaXMudXNlci5pZCxcclxuICAgICAgICAgICB1c2VyOiB0aGlzLnVzZXIudXNlcm5hbWUsXHJcbiAgICAgICAgICAgc3RhcnRBZGRyZXNzOiB0aGlzLnN0YXJ0UGxhY2UsXHJcbiAgICAgICAgICAgZW5kQWRkcmVzczogdGhpcy5lbmRQbGFjZSxcclxuICAgICAgICAgICBzdGFydEZvcm1hdHRlZDogdGhpcy5zdGFydEFkZHJlc3MsXHJcbiAgICAgICAgICAgZW5kRm9ybWF0dGVkOiB0aGlzLmVuZEFkZHJlc3MsXHJcbiAgICAgICAgICAgZGF0ZTogdGhpcy5kYXRlLFxyXG4gICAgICAgICAgIHByaWNlOiB0aGlzLnByaWNlLFxyXG4gICAgICAgICAgIGNhcGFjaXR5OiB0aGlzLmNhcGFjaXR5LFxyXG4gICAgICAgICAgIGNvbW1lbnRzOiBcIlwiLFxyXG4gICAgICAgICAgIGZvcm1hdHRlZERhdGU6IHRoaXMuZm9ybWF0dGVkRGF0ZSxcclxuICAgICAgICAgICBzdGFydExhdDogdGhpcy5zdGFydExhdCxcclxuICAgICAgICAgICBlbmRMYXQ6IHRoaXMuZW5kTGF0LFxyXG4gICAgICAgICAgIHN0YXJ0TG5nOiB0aGlzLnN0YXJ0TG5nLFxyXG4gICAgICAgICAgIGVuZExuZzogdGhpcy5lbmRMbmdcclxuICAgICAgICAgfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcyk7XHJcblxyXG4gICAgICAgICAgIGZpcmViYXNlLmZpcmVzdG9yZS5jb2xsZWN0aW9uKCd1c2VycycpLmRvYyh0aGlzLnVzZXIuaWQpLmdldCgpLnRoZW4oZG9jID0+IHtcclxuICAgICAgICAgICAgIHZhciBwb3N0czogU3RyaW5nW10gPSBkb2MuZGF0YSgpLnBvc3RzO1xyXG4gICAgICAgICAgICAgcG9zdHMucHVzaChyZXMuaWQpO1xyXG4gICAgICAgICAgICAgZmlyZWJhc2UuZmlyZXN0b3JlLmNvbGxlY3Rpb24oJ3VzZXJzJykuZG9jKHRoaXMudXNlci5pZCkudXBkYXRlKHtcclxuICAgICAgICAgICAgICAgcG9zdHM6IHBvc3RzXHJcbiAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgdGhpcy51cGxvYWRNYXAocmVzLmlkLCAnc21hbGxfbWFwLnBuZycpO1xyXG4gICAgICAgICAgICAgdGhpcy51cGxvYWRNYXAocmVzLmlkLCAnbGFyZ2VfbWFwLnBuZycpO1xyXG4gICAgICAgICAgIH0pLmNhdGNoKChlcnIpID0+IHt9KVxyXG4gICAgICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7fSlcclxuICAgICAgIH1cclxuXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICAgIC8vIHRoaXMucG9zdGluZ1NlcnZpY2UuYWRkUG9zdGluZyh0aGlzLnVzZXIudXNlcm5hbWUsIHRoaXMuc3RhcnRQbGFjZSwgdGhpcy5lbmRQbGFjZSwgdGhpcy5kYXRlLCB0aGlzLnByaWNlLCB0aGlzLmNhcGFjaXR5LCBcIlwiKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAvLyAgIHRoaXMuY2xvc2UoJ3Bvc3RlZCcpO1xyXG4gICAgICAvLyB9KTtcclxuICB9XHJcblxyXG4gIHVwbG9hZE1hcChpZCwgdXBsb2FkTmFtZSkge1xyXG4gICAgY29uc3QgY2FjaGUgPSBuZXcgQ2FjaGUoKTtcclxuICAgIGNhY2hlLmVuYWJsZURvd25sb2FkKCk7XHJcbiAgICBsZXQgY2FjaGVkSW1hZ2VTb3VyY2U7XHJcbiAgICB2YXIgdXJsID0gdGhpcy5tYXBTZXJ2aWNlLmdldFN0YXRpY01hcCh0aGlzLnN0YXJ0UGxhY2UgKyBcIiBcIiArIHRoaXMuc3RhcnRBZGRyZXNzLCB0aGlzLmVuZFBsYWNlICsgXCIgXCIgKyB0aGlzLmVuZEFkZHJlc3MpO1xyXG4gICAgaWYodXBsb2FkTmFtZSA9PSAnbGFyZ2VfbWFwLnBuZycpXHJcbiAgICAgIHVybCA9IHRoaXMubWFwU2VydmljZS5nZXRTdGF0aWNNYXBMYXJnZSh0aGlzLnN0YXJ0UGxhY2UgKyBcIiBcIiArIHRoaXMuc3RhcnRBZGRyZXNzLCB0aGlzLmVuZFBsYWNlICsgXCIgXCIgKyB0aGlzLmVuZEFkZHJlc3MpO1xyXG4gICAgLy8gVHJ5IHRvIHJlYWQgdGhlIGltYWdlIGZyb20gdGhlIGNhY2hlXHJcbiAgICBjb25zdCBteUltYWdlID0gY2FjaGUuZ2V0KHVybCk7XHJcbiAgICBjYWNoZS5wdXNoKHtcclxuICAgIGtleTogdXJsLFxyXG4gICAgdXJsOiB1cmwsXHJcbiAgICBjb21wbGV0ZWQ6IChpbWFnZSwga2V5KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh1cmwgPT09IGtleSkge1xyXG4gICAgICAgICAgICAgICAgY2FjaGVkSW1hZ2VTb3VyY2UgPSB0aGlzLmltYWdlU291cmNlLnNldE5hdGl2ZVNvdXJjZShpbWFnZSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmb2xkZXJQYXRoOiBzdHJpbmcgPSBrbm93bkZvbGRlcnMuZG9jdW1lbnRzKCkucGF0aDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZpbGVOYW1lID0gdXBsb2FkTmFtZTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZpbGVQYXRoID0gcGF0aC5qb2luKGZvbGRlclBhdGgsIGZpbGVOYW1lKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNhdmVkOiBib29sZWFuID0gdGhpcy5pbWFnZVNvdXJjZS5zYXZlVG9GaWxlKGZpbGVQYXRoLCBcInBuZ1wiKTtcclxuICAgICAgICAgICAgICAgIGlmIChzYXZlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpcmViYXNlLnN0b3JhZ2UudXBsb2FkRmlsZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAvLyB0aGUgZnVsbCBwYXRoIG9mIHRoZSBmaWxlIGluIHlvdXIgRmlyZWJhc2Ugc3RvcmFnZSAoZm9sZGVycyB3aWxsIGJlIGNyZWF0ZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICByZW1vdGVGdWxsUGF0aDogJ3Bvc3RpbmdzLycgKyBpZCArICcvbWFwcy8nICsgdXBsb2FkTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgIC8vIG9wdGlvbiAxOiBhIGZpbGUtc3lzdGVtIG1vZHVsZSBGaWxlIG9iamVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgbG9jYWxGaWxlOiBmcy5GaWxlLmZyb21QYXRoKGZpbGVQYXRoKSxcclxuICAgICAgICAgICAgICAgICAgICAgIC8vIG9wdGlvbiAyOiBhIGZ1bGwgZmlsZSBwYXRoIChpZ25vcmVkIGlmICdsb2NhbEZpbGUnIGlzIHNldClcclxuICAgICAgICAgICAgICAgICAgICAgIGxvY2FsRnVsbFBhdGg6IGZpbGVQYXRoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgLy8gZ2V0IG5vdGlmaWVkIG9mIGZpbGUgdXBsb2FkIHByb2dyZXNzXHJcbiAgICAgICAgICAgICAgICAgICAgICBvblByb2dyZXNzOiAoc3RhdHVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVXBsb2FkZWQgZnJhY3Rpb246IFwiICsgc3RhdHVzLmZyYWN0aW9uQ29tcGxldGVkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJQZXJjZW50YWdlIGNvbXBsZXRlOiBcIiArIHN0YXR1cy5wZXJjZW50YWdlQ29tcGxldGVkKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KS50aGVuKCh1cGxvYWRlZEZpbGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIGlmKHVwbG9hZE5hbWUgPT0gJ3NtYWxsX21hcC5wbmcnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaXJlYmFzZS5zdG9yYWdlLmdldERvd25sb2FkVXJsKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdGVGdWxsUGF0aDogJ3Bvc3RpbmdzLycgKyBpZCArICcvbWFwcy9zbWFsbF9tYXAucG5nJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS50aGVuKCh1cmwpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBmaXJlYmFzZS5maXJlc3RvcmUuY29sbGVjdGlvbigncG9zdGluZ3MnKS5kb2MoaWQpLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXBfdXJsOiB1cmxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhY3Rpdml0eUluZGljYXRvciA9IDxBY3Rpdml0eUluZGljYXRvcj4gdGhpcy5haS5uYXRpdmVFbGVtZW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGFkZENvbnRhaW5lciA9IDxGbGV4Ym94TGF5b3V0PiB0aGlzLmFjLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpdml0eUluZGljYXRvci5zdHlsZS52aXNpYmlsaXR5ID0gJ2NvbGxhcHNlJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZENvbnRhaW5lci5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZSgncG9zdGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBvblBpY2tlckxvYWRlZChhcmdzKSB7XHJcbiAgXHRsZXQgZGF0ZVBpY2tlciA9IDxEYXRlUGlja2VyPmFyZ3Mub2JqZWN0O1xyXG5cclxuICBcdHZhciB0b2RheSA9IG5ldyBEYXRlKCk7XHJcblxyXG4gIFx0ZGF0ZVBpY2tlci5taW5EYXRlID0gbmV3IERhdGUoKTtcclxuXHJcbiAgXHR2YXIgbmV4dFllYXJEYXRlID0gbmV3IERhdGUodG9kYXkpO1xyXG4gIFx0bmV4dFllYXJEYXRlLnNldERhdGUobmV4dFllYXJEYXRlLmdldERhdGUoKSArIDM2NSk7XHJcbiAgXHRkYXRlUGlja2VyLm1heERhdGUgPSBuZXh0WWVhckRhdGU7XHJcbiAgfVxyXG5cclxuICBvbkRhdGVDaGFuZ2VkKGFyZ3MpIHtcclxuICBcdGxldCBkYXRlUGlja2VyID0gPERhdGVQaWNrZXI+YXJncy5vYmplY3Q7XHJcbiAgXHR2YXIgc2VsZWN0ZWREYXRlID0gZGF0ZVBpY2tlci5kYXRlO1xyXG4gICAgdGhpcy5mb3JtYXR0ZWREYXRlID0gdGhpcy5kYXRlUGlwZS50cmFuc2Zvcm0oc2VsZWN0ZWREYXRlLFwieXl5eS1NTS1kZFwiKVxyXG5cclxuICBcdC8vIGNvbnNvbGUubG9nKHNlbGVjdGVkRGF0ZS50b1N0cmluZygpLnN1YnN0cmluZygwLCAxNSkpO1xyXG4gIFx0dGhpcy5kYXRlID0gc2VsZWN0ZWREYXRlLnRvU3RyaW5nKCkuc3Vic3RyaW5nKDAsIDE1KTtcclxuICB9XHJcblxyXG4gIG9uQ2hlY2tlZENoYW5nZShhcmdzKSB7XHJcbiAgXHRsZXQgbXlTd2l0Y2ggPSBhcmdzLm9iamVjdCBhcyBTd2l0Y2g7XHJcbiAgICBsZXQgaXNDaGVja2VkID0gbXlTd2l0Y2guY2hlY2tlZDsgLy8gYm9vbGVhblxyXG5cclxuICAgIGxldCBkcml2aW5nTGFiZWwgPSA8TGFiZWw+IHRoaXMuZGwubmF0aXZlRWxlbWVudDtcclxuICAgIGxldCByaWRpbmdMYWJlbCA9IDxMYWJlbD4gdGhpcy5ybC5uYXRpdmVFbGVtZW50O1xyXG5cclxuICAgIGlmKGlzQ2hlY2tlZCkge1xyXG4gICAgXHRkcml2aW5nTGFiZWwuc3R5bGUuZm9udFdlaWdodCA9IFwiNDAwXCI7XHJcbiAgICBcdGRyaXZpbmdMYWJlbC5zdHlsZS5jb2xvciA9IG5ldyBDb2xvcihcIiM1YzY4N2NcIik7XHJcbiAgICBcdHJpZGluZ0xhYmVsLnN0eWxlLmZvbnRXZWlnaHQgPSBcIjcwMFwiO1xyXG4gICAgXHRyaWRpbmdMYWJlbC5zdHlsZS5jb2xvciA9IG5ldyBDb2xvcihcIiNhYzAwZTZcIik7XHJcbiAgICBcdHRoaXMuaXNEcml2aW5nID0gZmFsc2U7XHJcbiAgICBcdHRoaXMuY2FwYWNpdHkgPSBcIi0xXCI7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgIFx0ZHJpdmluZ0xhYmVsLnN0eWxlLmZvbnRXZWlnaHQgPSBcIjcwMFwiO1xyXG4gICAgXHRkcml2aW5nTGFiZWwuc3R5bGUuY29sb3IgPSBuZXcgQ29sb3IoXCIjYWMwMGU2XCIpO1xyXG4gICAgXHRyaWRpbmdMYWJlbC5zdHlsZS5mb250V2VpZ2h0ID0gXCI0MDBcIjtcclxuICAgIFx0cmlkaW5nTGFiZWwuc3R5bGUuY29sb3IgPSBuZXcgQ29sb3IoXCIjNWM2ODdjXCIpO1xyXG4gICAgXHR0aGlzLmlzRHJpdmluZyA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLyogQWRkIG1vYmlsZSBzdHlsZXMgZm9yIHRoZSBjb21wb25lbnQgaGVyZS4gICovXFxuLmNsb3NlIHtcXG5cXHRtYXJnaW46IDEwO1xcblxcdGZvbnQtc2l6ZTogMjg7XFxuXFx0d2lkdGg6IDQ4O1xcblxcdGhlaWdodDogNDg7XFxufVxcblxcbi5jbG9zZS1idXR0b24tY29udGFpbmVyIHtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0bGVmdDogMDtcXG59XFxuXFxuLnBheW1lbnQtdHlwZS1pY29uIHtcXG5cXHRoZWlnaHQ6IDM0O1xcblxcdHdpZHRoOiAzNDtcXG5cXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuXFx0bWFyZ2luLXRvcDogMTg7XFxuXFx0bWFyZ2luLWJvdHRvbTogMTg7XFxuXFx0bWFyZ2luLWxlZnQ6IDM2O1xcbn1cXG5cXG4ucGF5bWVudC1pbmZvLWxhYmVsIHtcXG5cXHRmb250LXNpemU6IDE2O1xcblxcdC8qZm9udC13ZWlnaHQ6IDcwMDsqL1xcblxcdHBhZGRpbmc6IDMwO1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHRjb2xvcjogYmxhY2s7XFxufVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxTdGFja0xheW91dD5cXHJcXG5cXHQ8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImNsb3NlLWJ1dHRvbi1jb250YWluZXJcXFwiIG9yaWVudGF0aW9uPVxcXCJob3Jpem9udGFsXFxcIj5cXHJcXG5cXHRcXHQ8TGFiZWwgdGV4dD1cXFwiJnRpbWVzO1xcXCIgY2xhc3M9XFxcImNsb3NlXFxcIiAodGFwKT1cXFwiY2xvc2UoJ2NhbmNlbCcpXFxcIj48L0xhYmVsPlxcclxcblxcdDwvU3RhY2tMYXlvdXQ+XFxyXFxuXFxyXFxuXFx0PExpc3RWaWV3IFtpdGVtc109XFxcIm1ldGhvZHNcXFwiIHNlcGFyYXRvckNvbG9yPVxcXCJ0cmFuc3BhcmVudFxcXCIgKGl0ZW1UYXApPVxcXCJvblNlbGVjdCgkZXZlbnQpXFxcIj5cXHJcXG5cXHRcXHQ8bmctdGVtcGxhdGUgbGV0LWl0ZW09XFxcIml0ZW1cXFwiIGxldC1pPVxcXCJpbmRleFxcXCIgbGV0LW9kZD1cXFwib2RkXFxcIiBsZXQtZXZlbj1cXFwiZXZlblxcXCI+XFxyXFxuXFx0XFx0XFx0PFN0YWNrTGF5b3V0IFtjbGFzcy5vZGRdPVxcXCJvZGRcXFwiIFtjbGFzcy5ldmVuXT1cXFwiZXZlblxcXCIgb3JpZW50YXRpb249XFxcImhvcml6b250YWxcXFwiPlxcclxcblxcdFxcdFxcdFxcdDxJbWFnZSBbc3JjXT1cXFwiaXRlbS5wYXltZW50VHlwZVxcXCIgY2xhc3M9XFxcInBheW1lbnQtdHlwZS1pY29uXFxcIj48L0ltYWdlPlxcclxcblxcdFxcdFxcdFxcdDxMYWJlbCB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgW3RleHRdPVxcXCJpdGVtLmluZm9cXFwiIGNsYXNzPVxcXCJwYXltZW50LWluZm8tbGFiZWxcXFwiPjwvTGFiZWw+XFxyXFxuXFx0XFx0XFx0PC9TdGFja0xheW91dD5cXHJcXG5cXHRcXHQ8L25nLXRlbXBsYXRlPlxcclxcblxcdDwvTGlzdFZpZXc+XFxyXFxuPC9TdGFja0xheW91dD5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTW9kYWxEaWFsb2dQYXJhbXMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZGlyZWN0aXZlcy9kaWFsb2dzXCI7XHJcbmltcG9ydCB7IE1vZGFsRGlhbG9nU2VydmljZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9kaXJlY3RpdmVzL2RpYWxvZ3NcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZUFycmF5IH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUtYXJyYXknO1xyXG5pbXBvcnQgeyBBZGRDYXJkUGF5bWVudENvbXBvbmVudCB9IGZyb20gJy4uL2FkZC1jYXJkLXBheW1lbnQvYWRkLWNhcmQtcGF5bWVudC5jb21wb25lbnQnO1xyXG5cclxuXHJcbmNsYXNzIE1ldGhvZEl0ZW0ge1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXltZW50VHlwZTogc3RyaW5nLCBwdWJsaWMgaW5mbzogc3RyaW5nKSB7fVxyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1hZGQtcGF5bWVudCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2FkZC1wYXltZW50LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9hZGQtcGF5bWVudC5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEFkZFBheW1lbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHZjUmVmOiBWaWV3Q29udGFpbmVyUmVmLCBwcml2YXRlIG1vZGFsOiBNb2RhbERpYWxvZ1NlcnZpY2UsIHByaXZhdGUgcGFyYW1zOiBNb2RhbERpYWxvZ1BhcmFtcykgeyB9XHJcblxyXG4gIG1ldGhvZHMgPSBuZXcgT2JzZXJ2YWJsZUFycmF5PE1ldGhvZEl0ZW0+KCk7XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIFx0dGhpcy5hZGRNZXRob2RzKCk7XHJcbiAgfVxyXG5cclxuICBhZGRNZXRob2RzKCkge1xyXG4gIFx0dGhpcy5tZXRob2RzLnB1c2gobmV3IE1ldGhvZEl0ZW0oJ34vaW1nL2NyZWRpdC1jYXJkLWljb24ucG5nJywgJ0NyZWRpdCBvciBEZWJpdCBDYXJkJykpO1xyXG4gIFx0dGhpcy5tZXRob2RzLnB1c2gobmV3IE1ldGhvZEl0ZW0oJ34vaW1nL3BheXBhbC1pY29uLnBuZycsICdQYXlwYWwnKSk7XHJcbiAgXHR0aGlzLm1ldGhvZHMucHVzaChuZXcgTWV0aG9kSXRlbSgnfi9pbWcvdmVubW8taWNvbi5wbmcnLCAnVmVubW8nKSk7XHJcbiAgfVxyXG5cclxuICBvcGVuQ2FyZFBheW1lbnQoKSB7XHJcbiAgICBsZXQgb3B0aW9ucyA9IHtcclxuICAgICAgICBjb250ZXh0OiB7fSxcclxuICAgICAgICBmdWxsc2NyZWVuOiB0cnVlLFxyXG4gICAgICAgIHZpZXdDb250YWluZXJSZWY6IHRoaXMudmNSZWZcclxuICAgICAgICAvLyBhbmltYXRlZDogdHJ1ZSxcclxuICAgICAgICAvLyB0cmFuc2l0aW9uOiB7IG5hbWU6IFwic2xpZGVUb3BcIiB9XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMubW9kYWwuc2hvd01vZGFsKEFkZENhcmRQYXltZW50Q29tcG9uZW50LCBvcHRpb25zKS50aGVuKHJlcyA9PiB7XHJcblxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjbG9zZShyZXMpIHtcclxuICBcdHRoaXMucGFyYW1zLmNsb3NlQ2FsbGJhY2socmVzKTtcclxuICB9XHJcblxyXG4gIG9uU2VsZWN0KGV2ZW50KSB7XHJcbiAgXHQvL2V2ZW50LmluZGV4IHN0b3JlcyB3aGljaCBpbmRleCB3YXMgdGFwcGVkXHJcbiAgXHRpZihldmVudC5pbmRleCA9PSAwKVxyXG4gIFx0XHR0aGlzLm9wZW5DYXJkUGF5bWVudCgpO1xyXG4gIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gJy4vYXBwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IExvZ2luRGlyZWN0aXZlIH0gZnJvbSAnLi9sb2dpbi5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBMb2dpbkNvbXBvbmVudCB9IGZyb20gJy4vbG9naW4vbG9naW4uY29tcG9uZW50JztcclxuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gJy4vaG9tZS9ob21lLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEhvbWVEaXJlY3RpdmUgfSBmcm9tICcuL2hvbWUuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgSGlzdG9yeUNvbXBvbmVudCB9IGZyb20gJy4vaGlzdG9yeS9oaXN0b3J5LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFNldHRpbmdzQ29tcG9uZW50IH0gZnJvbSAnLi9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYW5pbWF0aW9ucyc7XHJcbmltcG9ydCB7IE5neFBheVBhbE1vZHVsZSB9IGZyb20gJ25neC1wYXlwYWwnO1xyXG5cclxuaW1wb3J0IHsgUG9zdGluZ1NlcnZpY2UgfSBmcm9tICcuL3Bvc3Rpbmcuc2VydmljZSc7XHJcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSAnLi91c2VyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBUcmFuc2ZlclNlcnZpY2UgfSBmcm9tICcuL2RhdGF0cmFuc2Zlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRHluYW1pY0FkZFNlcnZpY2UgfSBmcm9tICcuL2R5bmFtaWMtYWRkLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQYXltZW50U2VydmljZSB9IGZyb20gJy4vcGF5bWVudC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUG9zdGluZ0NvbXBvbmVudCB9IGZyb20gJy4vcG9zdGluZy9wb3N0aW5nLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFVwZGF0ZUNvbXBvbmVudCB9IGZyb20gJy4vdXBkYXRlL3VwZGF0ZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb25uZWN0Q29tcG9uZW50IH0gZnJvbSAnLi9jb25uZWN0L2Nvbm5lY3QuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSwgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7TWF0SW5wdXRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcclxuLy8gaW1wb3J0IHsgQW1wbGlmeUFuZ3VsYXJNb2R1bGUsIEFtcGxpZnlTZXJ2aWNlIH0gZnJvbSAnYXdzLWFtcGxpZnktYW5ndWxhcic7XHJcbmltcG9ydCB7IExvZ2lucm91dGVDb21wb25lbnQgfSBmcm9tICcuL2xvZ2lucm91dGUvbG9naW5yb3V0ZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEaWFsb2dDb21wb25lbnQgfSBmcm9tICcuL2RpYWxvZy9kaWFsb2cuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTmF2aWdhdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudCc7XHJcblxyXG5pbXBvcnQgeyBBdXRvR2VuZXJhdGVkQ29tcG9uZW50IH0gZnJvbSAnLi9hdXRvLWdlbmVyYXRlZC9hdXRvLWdlbmVyYXRlZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQYXltZW50c0NvbXBvbmVudCB9IGZyb20gJy4vcGF5bWVudHMvcGF5bWVudHMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGF5bWVudE1ldGhvZENvbXBvbmVudCB9IGZyb20gJy4vcGF5bWVudC1tZXRob2QvcGF5bWVudC1tZXRob2QuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU2VhcmNoQ29tcG9uZW50IH0gZnJvbSAnLi9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBheW1lbnRJbmZvQ29tcG9uZW50IH0gZnJvbSAnLi9wYXltZW50LWluZm8vcGF5bWVudC1pbmZvLmNvbXBvbmVudCdcclxuaW1wb3J0IHsgV2VsY29tZUNvbXBvbmVudCB9IGZyb20gJy4vd2VsY29tZS93ZWxjb21lLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBvc3RpbmdJbmZvQ29tcG9uZW50IH0gZnJvbSAnLi9wb3N0aW5nLWluZm8vcG9zdGluZy1pbmZvLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7U2V0dGluZ3Nmb3JtQ29tcG9uZW50fSBmcm9tICcuL3NldHRpbmdzZm9ybS9zZXR0aW5nc2Zvcm0uY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ2hhdENvbXBvbmVudCB9IGZyb20gJy4vY2hhdC9jaGF0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENoYXRMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9jaGF0LWxpc3QvY2hhdC1saXN0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFZpZXdJbWFnZUNvbXBvbmVudCB9IGZyb20gJy4vdmlldy1pbWFnZS92aWV3LWltYWdlLmNvbXBvbmVudCc7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHJvdXRlczogUm91dGVzID0gW1xyXG4gIHsgcGF0aDogJ2xvZ2luJywgY29tcG9uZW50OiBMb2dpbkNvbXBvbmVudCB9LFxyXG4gIHsgcGF0aDogJycsICAgcmVkaXJlY3RUbzogJy93ZWxjb21lJywgcGF0aE1hdGNoOiAnZnVsbCcgfSxcclxuICB7IHBhdGg6ICdob21lJywgY29tcG9uZW50OiBIb21lQ29tcG9uZW50IH0sXHJcbiAgeyBwYXRoOiAnaGlzdG9yeScsIGNvbXBvbmVudDogSGlzdG9yeUNvbXBvbmVudCB9LFxyXG4gIHsgcGF0aDogJ3NldHRpbmdzJywgY29tcG9uZW50OiBTZXR0aW5nc0NvbXBvbmVudCB9LFxyXG4gIHsgcGF0aDogJ3VwZGF0ZScsIGNvbXBvbmVudDogVXBkYXRlQ29tcG9uZW50IH0sXHJcbiAgeyBwYXRoOiAnY29ubmVjdCcsIGNvbXBvbmVudDogQ29ubmVjdENvbXBvbmVudCB9LFxyXG4gIHsgcGF0aDogJ2xvZ2lucm91dGUnLCBjb21wb25lbnQ6IExvZ2lucm91dGVDb21wb25lbnQgfSxcclxuICB7IHBhdGg6ICdwYXltZW50cycsIGNvbXBvbmVudDogUGF5bWVudHNDb21wb25lbnQgfSxcclxuICB7IHBhdGg6ICdzZWFyY2gnLCBjb21wb25lbnQ6IFNlYXJjaENvbXBvbmVudCB9LFxyXG4gIHsgcGF0aDogJ25hdmlnYXRpb24nLCBjb21wb25lbnQ6IE5hdmlnYXRpb25Db21wb25lbnQgfSxcclxuICB7IHBhdGg6ICdwYXltZW50aW5mbycsIGNvbXBvbmVudDogUGF5bWVudEluZm9Db21wb25lbnQgfSxcclxuICB7IHBhdGg6ICd3ZWxjb21lJywgY29tcG9uZW50OiBXZWxjb21lQ29tcG9uZW50IH0sXHJcbiAgeyBwYXRoOiAncG9zdGluZy1pbmZvJywgY29tcG9uZW50OiBQb3N0aW5nSW5mb0NvbXBvbmVudCB9LFxyXG4gIHsgcGF0aDogJ3NldHRpbmdzZm9ybScsIGNvbXBvbmVudDogU2V0dGluZ3Nmb3JtQ29tcG9uZW50IH0sXHJcbiAgeyBwYXRoOiAnY2hhdCcsIGNvbXBvbmVudDogQ2hhdENvbXBvbmVudCB9LFxyXG4gIHsgcGF0aDogJ2NoYXQtbGlzdCcsIGNvbXBvbmVudDogQ2hhdExpc3RDb21wb25lbnQgfSxcclxuICB7IHBhdGg6ICd2aWV3LWltYWdlJywgY29tcG9uZW50OiBWaWV3SW1hZ2VDb21wb25lbnQgfSxcclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyldLFxyXG4gIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBSb3V0aW5nTW9kdWxlIHsgfVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPCEtLSBodHRwczovL2RvY3MubmF0aXZlc2NyaXB0Lm9yZy9hbmd1bGFyL2NvcmUtY29uY2VwdHMvYW5ndWxhci1uYXZpZ2F0aW9uLmh0bWwjcGFnZS1yb3V0ZXItb3V0bGV0IC0tPlxcclxcblxcclxcbjxQYWdlPlxcclxcblxcdCAgICA8cGFnZS1yb3V0ZXItb3V0bGV0PjwvcGFnZS1yb3V0ZXItb3V0bGV0PlxcclxcbjwvUGFnZT5cIiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtcm9vdCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2FwcC5jb21wb25lbnQuaHRtbCcsXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHsgfVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlJztcclxuXHJcbmltcG9ydCB7IEFwcFJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL2FwcC1yb3V0aW5nLm1vZHVsZS50bnMnO1xyXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tICcuL2FwcC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBdXRvR2VuZXJhdGVkQ29tcG9uZW50IH0gZnJvbSAnLi9hdXRvLWdlbmVyYXRlZC9hdXRvLWdlbmVyYXRlZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQYXltZW50c0NvbXBvbmVudCB9IGZyb20gJy4vcGF5bWVudHMvcGF5bWVudHMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGF5bWVudE1ldGhvZENvbXBvbmVudCB9IGZyb20gJy4vcGF5bWVudC1tZXRob2QvcGF5bWVudC1tZXRob2QuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29ubmVjdENvbXBvbmVudCB9IGZyb20gJy4vY29ubmVjdC9jb25uZWN0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEhpc3RvcnlDb21wb25lbnQgfSBmcm9tICcuL2hpc3RvcnkvaGlzdG9yeS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSAnLi9ob21lL2hvbWUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTG9naW5Db21wb25lbnQgfSBmcm9tICcuL2xvZ2luL2xvZ2luLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IExvZ2lucm91dGVDb21wb25lbnQgfSBmcm9tICcuL2xvZ2lucm91dGUvbG9naW5yb3V0ZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOYXZpZ2F0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgUG9zdGluZ0NvbXBvbmVudCB9IGZyb20gJy4vcG9zdGluZy9wb3N0aW5nLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFNldHRpbmdzQ29tcG9uZW50IH0gZnJvbSAnLi9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBVcGRhdGVDb21wb25lbnQgfSBmcm9tICcuL3VwZGF0ZS91cGRhdGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi9kaWFsb2cvZGlhbG9nLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFNlYXJjaENvbXBvbmVudCB9IGZyb20gJy4vc2VhcmNoL3NlYXJjaC5jb21wb25lbnQnO1xyXG5cclxuaW1wb3J0IHsgTG9naW5EaXJlY3RpdmUgfSBmcm9tICcuL2xvZ2luLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IEhvbWVEaXJlY3RpdmUgfSBmcm9tICcuL2hvbWUuZGlyZWN0aXZlJztcclxuXHJcbmltcG9ydCB7IFBvc3RpbmdTZXJ2aWNlIH0gZnJvbSAnLi9wb3N0aW5nLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gJy4vdXNlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVHJhbnNmZXJTZXJ2aWNlIH0gZnJvbSAnLi9kYXRhdHJhbnNmZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IER5bmFtaWNBZGRTZXJ2aWNlIH0gZnJvbSAnLi9keW5hbWljLWFkZC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUGF5bWVudFNlcnZpY2UgfSBmcm9tICcuL3BheW1lbnQuc2VydmljZSc7XHJcbmltcG9ydCB7IFBsYWNlc0F1dG9jb21wbGV0ZVNlcnZpY2UgfSBmcm9tICcuL3BsYWNlcy1hdXRvY29tcGxldGUuc2VydmljZSc7XHJcbmltcG9ydCB7IEdvb2dsZU1hcHNTZXJ2aWNlIH0gZnJvbSAnLi9nb29nbGUtbWFwcy5zZXJ2aWNlJztcclxuXHJcbmltcG9ydCB7IE1vZGFsRGlhbG9nU2VydmljZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9tb2RhbC1kaWFsb2dcIjtcclxuXHJcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUsIEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQge01hdElucHV0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pbnB1dCc7XHJcbmltcG9ydCB7IEFnbUNvcmVNb2R1bGUgfSBmcm9tICdAYWdtL2NvcmUnO1xyXG5pbXBvcnQgeyBOZ3hQYXlQYWxNb2R1bGUgfSBmcm9tICduZ3gtcGF5cGFsJztcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlEYXRhRm9ybU1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktZGF0YWZvcm0vYW5ndWxhclwiO1xyXG5pbXBvcnQgeyBOZ3hCcmFpbnRyZWVNb2R1bGUgfSBmcm9tICduZ3gtYnJhaW50cmVlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgTWFza2VkVGV4dEZpZWxkTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1tYXNrZWQtdGV4dC1maWVsZC9hbmd1bGFyXCI7XHJcblxyXG4vLyBVbmNvbW1lbnQgYW5kIGFkZCB0byBOZ01vZHVsZSBpbXBvcnRzIGlmIHlvdSBuZWVkIHRvIHVzZSB0d28td2F5IGJpbmRpbmdcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtcyc7XHJcblxyXG4vLyBVbmNvbW1lbnQgYW5kIGFkZCB0byBOZ01vZHVsZSBpbXBvcnRzICBpZiB5b3UgbmVlZCB0byB1c2UgdGhlIEhUVFAgd3JhcHBlclxyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cC1jbGllbnQnO1xyXG5pbXBvcnQgeyBGbG9hdEJ0bkNvbXBvbmVudCB9IGZyb20gJy4vZmxvYXQtYnRuL2Zsb2F0LWJ0bi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBZGRNb2RhbENvbXBvbmVudCB9IGZyb20gJy4vYWRkLW1vZGFsL2FkZC1tb2RhbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBMb2NhdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vbG9jYXRpb24vbG9jYXRpb24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgQWRkUGF5bWVudENvbXBvbmVudCB9IGZyb20gJy4vYWRkLXBheW1lbnQvYWRkLXBheW1lbnQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQWRkQ2FyZFBheW1lbnRDb21wb25lbnQgfSBmcm9tICcuL2FkZC1jYXJkLXBheW1lbnQvYWRkLWNhcmQtcGF5bWVudC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQYXltZW50SW5mb0NvbXBvbmVudCB9IGZyb20gJy4vcGF5bWVudC1pbmZvL3BheW1lbnQtaW5mby5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb25maXJtYXRpb25Db21wb25lbnQgfSBmcm9tICcuL2NvbmZpcm1hdGlvbi9jb25maXJtYXRpb24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgTWVzc2FnZU1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi9tZXNzYWdlLW1vZGFsL21lc3NhZ2UtbW9kYWwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgV2VsY29tZUNvbXBvbmVudCB9IGZyb20gJy4vd2VsY29tZS93ZWxjb21lLmNvbXBvbmVudCc7XHJcbmltcG9ydCAqIGFzIGFwcGxpY2F0aW9uIGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb24nO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGYWNlYm9va01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtZmFjZWJvb2svYW5ndWxhclwiO1xyXG5pbXBvcnQgKiBhcyBuc0ZhY2Vib29rIGZyb20gJ25hdGl2ZXNjcmlwdC1mYWNlYm9vayc7XHJcbmltcG9ydCB7IERhdGVQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgUG9zdGluZ0luZm9Db21wb25lbnQgfSBmcm9tICcuL3Bvc3RpbmctaW5mby9wb3N0aW5nLWluZm8uY29tcG9uZW50JztcclxuaW1wb3J0IHsgaXNJT1MgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtJztcclxuZGVjbGFyZSB2YXIgR01TU2VydmljZXM6IGFueTtcclxuaW1wb3J0IHsgU2V0dGluZ3Nmb3JtQ29tcG9uZW50IH0gZnJvbSAnLi9zZXR0aW5nc2Zvcm0vc2V0dGluZ3Nmb3JtLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFJlYXV0aENvbXBvbmVudCB9IGZyb20gJy4vcmVhdXRoL3JlYXV0aC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDaGF0Q29tcG9uZW50IH0gZnJvbSAnLi9jaGF0L2NoYXQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ2hhdExpc3RDb21wb25lbnQgfSBmcm9tICcuL2NoYXQtbGlzdC9jaGF0LWxpc3QuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVmlld0ltYWdlQ29tcG9uZW50IH0gZnJvbSAnLi92aWV3LWltYWdlL3ZpZXctaW1hZ2UuY29tcG9uZW50JztcclxuaW1wb3J0IHsgcmVnaXN0ZXJFbGVtZW50IH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvZWxlbWVudC1yZWdpc3RyeSc7XHJcbnJlZ2lzdGVyRWxlbWVudCgnRmFiJywgKCkgPT4gcmVxdWlyZSgnQG5zdHVkaW8vbmF0aXZlc2NyaXB0LWZsb2F0aW5nYWN0aW9uYnV0dG9uJykuRmFiKTtcclxucmVnaXN0ZXJFbGVtZW50KFwiUHVsbFRvUmVmcmVzaFwiLCAoKSA9PiByZXF1aXJlKFwiQG5zdHVkaW8vbmF0aXZlc2NyaXB0LXB1bGx0b3JlZnJlc2hcIikuUHVsbFRvUmVmcmVzaCk7XHJcblxyXG5cclxuLy8gcmVxdWlyZSgnbmF0aXZlc2NyaXB0LW5vZGVpZnknKVxyXG4vLyBpbXBvcnQgeyBBbXBsaWZ5QW5ndWxhck1vZHVsZSwgQW1wbGlmeVNlcnZpY2UgfSBmcm9tICdhd3MtYW1wbGlmeS1hbmd1bGFyJztcclxuXHJcbi8vIGltcG9ydCB7IEFuZ3VsYXJGaXJlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZmlyZSc7XHJcbi8vIGltcG9ydCB7IEFuZ3VsYXJGaXJlc3RvcmVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9maXJlL2ZpcmVzdG9yZSc7XHJcbi8vIGltcG9ydCB7IEFuZ3VsYXJGaXJlU3RvcmFnZU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2ZpcmUvc3RvcmFnZSc7XHJcbi8vIGltcG9ydCB7IEFuZ3VsYXJGaXJlQXV0aE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2ZpcmUvYXV0aCc7XHJcbi8vIGltcG9ydCB7IGVudmlyb25tZW50IH0gZnJvbSAnLi4vZW52aXJvbm1lbnRzL2Vudmlyb25tZW50JztcclxuaWYgKGlzSU9TKSB7IFxyXG4gIEdNU1NlcnZpY2VzLnByb3ZpZGVBUElLZXkoXCJBSXphU3lBSVR4UzFqbWY4UE10YXpSZ3VXY0FmV1F4VzFrUE9vWWdcIik7XHJcbn1cclxuXHJcbmFwcGxpY2F0aW9uLm9uKGFwcGxpY2F0aW9uLmxhdW5jaEV2ZW50LCBmdW5jdGlvbiAoYXJncykge1xyXG4gICAgbnNGYWNlYm9vay5pbml0KFwiMjI3MjEyOTY0OTY3Nzc0N1wiKTtcclxufSk7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgQXBwQ29tcG9uZW50LFxyXG4gICAgTG9naW5EaXJlY3RpdmUsXHJcbiAgICBMb2dpbkNvbXBvbmVudCxcclxuICAgIEhvbWVDb21wb25lbnQsXHJcbiAgICBIb21lRGlyZWN0aXZlLFxyXG4gICAgSGlzdG9yeUNvbXBvbmVudCxcclxuICAgIFNldHRpbmdzQ29tcG9uZW50LFxyXG4gICAgUG9zdGluZ0NvbXBvbmVudCxcclxuICAgIFVwZGF0ZUNvbXBvbmVudCxcclxuICAgIENvbm5lY3RDb21wb25lbnQsXHJcbiAgICBMb2dpbnJvdXRlQ29tcG9uZW50LFxyXG4gICAgRGlhbG9nQ29tcG9uZW50LFxyXG4gICAgTmF2aWdhdGlvbkNvbXBvbmVudCxcclxuICAgIEF1dG9HZW5lcmF0ZWRDb21wb25lbnQsXHJcbiAgICBQYXltZW50c0NvbXBvbmVudCxcclxuICAgIFBheW1lbnRNZXRob2RDb21wb25lbnQsXHJcbiAgICBTZWFyY2hDb21wb25lbnQsXHJcbiAgICBGbG9hdEJ0bkNvbXBvbmVudCxcclxuICAgIEFkZE1vZGFsQ29tcG9uZW50LFxyXG4gICAgTG9jYXRpb25Db21wb25lbnQsXHJcbiAgICBBZGRQYXltZW50Q29tcG9uZW50LFxyXG4gICAgQWRkQ2FyZFBheW1lbnRDb21wb25lbnQsXHJcbiAgICBQYXltZW50SW5mb0NvbXBvbmVudCxcclxuICAgIENvbmZpcm1hdGlvbkNvbXBvbmVudCxcclxuICAgIE1lc3NhZ2VNb2RhbENvbXBvbmVudCxcclxuICAgIFdlbGNvbWVDb21wb25lbnQsXHJcbiAgICBQb3N0aW5nSW5mb0NvbXBvbmVudCxcclxuICAgIFNldHRpbmdzZm9ybUNvbXBvbmVudCxcclxuICAgIFJlYXV0aENvbXBvbmVudCxcclxuICAgIENoYXRDb21wb25lbnQsXHJcbiAgICBDaGF0TGlzdENvbXBvbmVudCxcclxuICAgIFZpZXdJbWFnZUNvbXBvbmVudCxcclxuICBdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcclxuICAgIEFwcFJvdXRpbmdNb2R1bGUsXHJcbiAgICBOYXRpdmVTY3JpcHRIdHRwQ2xpZW50TW9kdWxlLFxyXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcclxuICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxyXG4gICAgTWF0SW5wdXRNb2R1bGUsXHJcbiAgICBBZ21Db3JlTW9kdWxlLmZvclJvb3Qoe1xyXG4gICAgICBhcGlLZXk6ICdBSXphU3lBSVR4UzFqbWY4UE10YXpSZ3VXY0FmV1F4VzFrUE9vWWcnXHJcbiAgICB9KSxcclxuICAgIE5neFBheVBhbE1vZHVsZSxcclxuICAgIE5hdGl2ZVNjcmlwdFVJRGF0YUZvcm1Nb2R1bGUsXHJcbiAgICAvLyBOZ3hCcmFpbnRyZWVNb2R1bGUsXHJcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxyXG4gICAgTmF0aXZlU2NyaXB0RmFjZWJvb2tNb2R1bGUsXHJcbiAgICBNYXNrZWRUZXh0RmllbGRNb2R1bGVcclxuICAgIC8vIEFuZ3VsYXJGaXJlTW9kdWxlLmluaXRpYWxpemVBcHAoZW52aXJvbm1lbnQuZmlyZWJhc2UpLFxyXG4gICAgLy8gQW5ndWxhckZpcmVzdG9yZU1vZHVsZSwgLy8gaW1wb3J0cyBmaXJlYmFzZS9maXJlc3RvcmUsIG9ubHkgbmVlZGVkIGZvciBkYXRhYmFzZSBmZWF0dXJlc1xyXG4gICAgLy8gQW5ndWxhckZpcmVBdXRoTW9kdWxlLCAvLyBpbXBvcnRzIGZpcmViYXNlL2F1dGgsIG9ubHkgbmVlZGVkIGZvciBhdXRoIGZlYXR1cmVzLFxyXG4gICAgLy8gQW5ndWxhckZpcmVTdG9yYWdlTW9kdWxlIC8vIGltcG9ydHMgZmlyZWJhc2Uvc3RvcmFnZSBvbmx5IG5lZWRlZCBmb3Igc3RvcmFnZSBmZWF0dXJlc1xyXG4gIF0sXHJcbiAgcHJvdmlkZXJzOiBbUG9zdGluZ1NlcnZpY2UsIFRyYW5zZmVyU2VydmljZSwgRHluYW1pY0FkZFNlcnZpY2UsIFVzZXJTZXJ2aWNlLCBQYXltZW50U2VydmljZSwgTW9kYWxEaWFsb2dTZXJ2aWNlLCBQbGFjZXNBdXRvY29tcGxldGVTZXJ2aWNlLCBcclxuICBEYXRlUGlwZSwgR29vZ2xlTWFwc1NlcnZpY2VdLFxyXG4gIGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF0sXHJcbiAgZW50cnlDb21wb25lbnRzOiBbUG9zdGluZ0NvbXBvbmVudCwgUGF5bWVudE1ldGhvZENvbXBvbmVudCwgQWRkTW9kYWxDb21wb25lbnQsIExvY2F0aW9uQ29tcG9uZW50LCBBZGRQYXltZW50Q29tcG9uZW50LCBBZGRDYXJkUGF5bWVudENvbXBvbmVudCwgXHJcbiAgUGF5bWVudEluZm9Db21wb25lbnQsIENvbmZpcm1hdGlvbkNvbXBvbmVudCwgU2V0dGluZ3Nmb3JtQ29tcG9uZW50LCBSZWF1dGhDb21wb25lbnRdLFxyXG4gIHNjaGVtYXM6IFtOT19FUlJPUlNfU0NIRU1BXVxyXG59KVxyXG4vKlxyXG5QYXNzIHlvdXIgYXBwbGljYXRpb24gbW9kdWxlIHRvIHRoZSBib290c3RyYXBNb2R1bGUgZnVuY3Rpb24gbG9jYXRlZCBpbiBtYWluLnRzIHRvIHN0YXJ0IHlvdXIgYXBwXHJcbiovXHJcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCIvKiBBZGQgbW9iaWxlIHN0eWxlcyBmb3IgdGhlIGNvbXBvbmVudCBoZXJlLiAgKi9cXHJcXG5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8QnV0dG9uIHRleHQ9XFxcImF1dG8tZ2VuZXJhdGVkIHdvcmtzIVxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCI+PC9CdXR0b24+XCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtYXV0by1nZW5lcmF0ZWQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9hdXRvLWdlbmVyYXRlZC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vYXV0by1nZW5lcmF0ZWQuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBdXRvR2VuZXJhdGVkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG5cclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLyogQWRkIG1vYmlsZSBzdHlsZXMgZm9yIHRoZSBjb21wb25lbnQgaGVyZS4gICovXFxuTGFiZWwge1xcblxcdHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblxcbi5uYW1lLWxhYmVsIHtcXG5cXHRtYXJnaW4tdG9wOiAxNjtcXG5cXHRtYXJnaW4tbGVmdDogMTg7XFxuXFx0Y29sb3I6IGJsYWNrO1xcblxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxuXFx0Zm9udC1zaXplOiAxNztcXG59XFxuXFxuLmluZm8tbGFiZWwge1xcblxcdG1hcmdpbi10b3A6IDQ7XFxuXFx0bWFyZ2luLWxlZnQ6IDE4O1xcblxcdG1hcmdpbi1ib3R0b206IDE2O1xcblxcdGNvbG9yOiAjNjk2OTY5O1xcbn1cXG5cXG4ucHJvZmlsZS1waWN0dXJlIHtcXG5cXHRoZWlnaHQ6IDYwO1xcblxcdHdpZHRoOiA2MDtcXG5cXHRib3JkZXItcmFkaXVzOiAxMDAlO1xcblxcdHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XFxuXFx0bWFyZ2luLWxlZnQ6IDE2O1xcblxcdG1hcmdpbi10b3A6IDE0O1xcblxcdG1hcmdpbi1ib3R0b206IDE0O1xcbn1cXG5cXG4ubWVzc2FnZSB7XFxuXFx0Ym9yZGVyLWJvdHRvbS13aWR0aDogMTtcXG5cXHRib3JkZXItY29sb3I6ICNmMWYxZjE7XFxuXFx0bWFyZ2luLXRvcDogNTA7XFxuXFx0bWFyZ2luLWJvdHRvbTogNTA7XFxufVxcblxcbi5yZWZyZXNoIHtcXG5cXHRjb2xvcjogI2FjMDBlNjtcXG59XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPFBhZ2UuYWN0aW9uQmFyPlxcclxcbiAgICA8QWN0aW9uQmFyIHRpdGxlPVxcXCJNZXNzYWdlc1xcXCI+XFxyXFxuICAgIFxcdDxOYXZpZ2F0aW9uQnV0dG9uIHRleHQ9XFxcIkdvIEJhY2tcXFwiIGFuZHJvaWQuc3lzdGVtSWNvbj1cXFwiaWNfbWVudV9iYWNrXFxcIiAodGFwKT1cXFwib25OYXZCdG5UYXAoKVxcXCI+PC9OYXZpZ2F0aW9uQnV0dG9uPlxcclxcbiAgICA8L0FjdGlvbkJhcj5cXHJcXG48L1BhZ2UuYWN0aW9uQmFyPlxcclxcblxcclxcbjxQdWxsVG9SZWZyZXNoIChyZWZyZXNoKT1cXFwicmVmcmVzaExpc3QoJGV2ZW50KVxcXCIgY2xhc3M9XFxcInJlZnJlc2hcXFwiPlxcclxcblxcdDxMaXN0VmlldyBbaXRlbXNdPVxcXCJtZXNzYWdlc1xcXCIgKGl0ZW1UYXApPVxcXCJvbkl0ZW1UYXAoJGV2ZW50KVxcXCIgI2xpc3RWaWV3IGlkPVxcXCJsaXN0Vmlld1xcXCI+XFxyXFxuXFx0ICAgIDxuZy10ZW1wbGF0ZSBsZXQtaXRlbT1cXFwiaXRlbVxcXCIgbGV0LWk9XFxcImluZGV4XFxcIiBsZXQtb2RkPVxcXCJvZGRcXFwiIGxldC1ldmVuPVxcXCJldmVuXFxcIj5cXHJcXG5cXHQgICAgICAgIDxTdGFja0xheW91dCBbY2xhc3Mub2RkXT1cXFwib2RkXFxcIiBbY2xhc3MuZXZlbl09XFxcImV2ZW5cXFwiIGNsYXNzPVxcXCJtZXNzYWdlXFxcIiBvcmllbnRhdGlvbj1cXFwiaG9yaXpvbnRhbFxcXCI+XFxyXFxuXFx0ICAgICAgICBcXHQgIFxcdDxJbWFnZSBbc3JjXT1cXFwiaXRlbS5wZnBTb3VyY2VcXFwiIGNsYXNzPVxcXCJwcm9maWxlLXBpY3R1cmVcXFwiIHN0cmV0Y2g9XFxcImFzcGVjdEZpdFxcXCI+PC9JbWFnZT5cXHJcXG5cXHQgICAgICAgIFxcdCAgXFx0PFN0YWNrTGF5b3V0PlxcclxcblxcdFxcdCAgICAgICAgICAgICAgXFx0PExhYmVsIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiBpZD1cXFwicG9zdC1uYW1lXFxcIiBjbGFzcz1cXFwibmFtZS1sYWJlbFxcXCIgW3RleHRdPVxcXCJpdGVtLmRpc3BsYXlOYW1lXFxcIj48L0xhYmVsPlxcclxcblxcdFxcdCAgICAgICAgICAgICAgXFx0PExhYmVsIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiBpZD1cXFwicG9zdC1pbmZvXFxcIiBjbGFzcz1cXFwiaW5mby1sYWJlbFxcXCIgW3RleHRdPVxcXCJpdGVtLm1lc3NhZ2VcXFwiPjwvTGFiZWw+XFxyXFxuXFx0XFx0ICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXHJcXG5cXHQgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxyXFxuXFx0ICAgIDwvbmctdGVtcGxhdGU+XFxyXFxuXFx0PC9MaXN0Vmlldz5cXHJcXG48L1B1bGxUb1JlZnJlc2g+XCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgRWxlbWVudFJlZiwgVmlld0NoaWxkLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRyYW5zZmVyU2VydmljZSB9IGZyb20gJy4uL2RhdGF0cmFuc2Zlci5zZXJ2aWNlJztcclxuaW1wb3J0ICogYXMgZmlyZWJhc2UgZnJvbSAnbmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZSc7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBMb2dpbmNoZWNrU2VydmljZSB9IGZyb20gJy4uL2xvZ2luY2hlY2suc2VydmljZS50bnMnO1xyXG5pbXBvcnQgeyBDaGF0TWVzc2FnZSB9IGZyb20gJy4uL21vZGVscy9jaGF0LW1lc3NhZ2UubW9kZWwnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlQXJyYXkgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS1hcnJheSc7XHJcbmltcG9ydCB7IExpc3RWaWV3IH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9saXN0LXZpZXcnO1xyXG5cclxuY2xhc3MgTWVzc2FnZUl0ZW0ge1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBjaGF0TWVzc2FnZTogQ2hhdE1lc3NhZ2UsIHB1YmxpYyBsYXN0Q2hhdDogc3RyaW5nLCBwdWJsaWMgY2hhdElkOiBzdHJpbmcsIHB1YmxpYyBwZnBTb3VyY2U6IHN0cmluZywgXHJcbiAgICBwdWJsaWMgZGlzcGxheU5hbWU6IHN0cmluZywgcHVibGljIG1lc3NhZ2U6IHN0cmluZykge31cclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtY2hhdC1saXN0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY2hhdC1saXN0LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jaGF0LWxpc3QuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDaGF0TGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdHJhbnNmZXJTZXJ2aWNlOiBUcmFuc2ZlclNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zLCBwcml2YXRlIGxvZ2luY2hlY2tTZXJ2aWNlOiBMb2dpbmNoZWNrU2VydmljZSxcclxuICBcdHByaXZhdGUgdmNSZWY6IFZpZXdDb250YWluZXJSZWYpIHsgfVxyXG5cclxuICBtZXNzYWdlcyA9IG5ldyBPYnNlcnZhYmxlQXJyYXk8TWVzc2FnZUl0ZW0+KCk7XHJcbiAgcmVmcmVzaE1lc3NhZ2VzID0gbmV3IE9ic2VydmFibGVBcnJheTxNZXNzYWdlSXRlbT4oKTtcclxuICB1c2VySWQ6IHN0cmluZztcclxuICBjaGF0SWRzOiBbc3RyaW5nXTtcclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgXHR0aGlzLnVzZXJJZCA9IHRoaXMubG9naW5jaGVja1NlcnZpY2UuZ2V0VXNlcigpO1xyXG4gICAgdGhpcy5sb2FkTWVzc2FnZXMoKTtcclxuICB9XHJcblxyXG4gIGxvYWRNZXNzYWdlcyhhcmdzPW51bGwpIHtcclxuICBcdGZpcmViYXNlLmZpcmVzdG9yZS5jb2xsZWN0aW9uKCd1c2VycycpLmRvYyh0aGlzLnVzZXJJZCkuZ2V0KCkudGhlbigoZG9jKSA9PiB7XHJcbiAgXHRcdHRoaXMuY2hhdElkcyA9IGRvYy5kYXRhKCkuY2hhdHM7XHJcbiAgICB9KS50aGVuKGFzeW5jIChyZXMpID0+IHtcclxuICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHRoaXMuY2hhdElkcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IGNoYXRQcm9taXNlID0gYXdhaXQgZmlyZWJhc2UuZmlyZXN0b3JlLmNvbGxlY3Rpb24oJ2NoYXRzJykuZG9jKHRoaXMuY2hhdElkc1tpXSkuZ2V0KCkudGhlbihhc3luYyAoZG9jKSA9PiB7XHJcbiAgICAgICAgICBsZXQgZGF0YSA9IGRvYy5kYXRhKCk7XHJcbiAgICAgICAgICBsZXQgZG9jSWQgPSBkb2MuaWQ7XHJcbiAgICAgICAgICB2YXIgY2hhdE5hbWUgPSAnWW91LCAnO1xyXG4gICAgICAgICAgdmFyIG5vblVzZXJJbmRleCA9IDA7XHJcbiAgICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgZGF0YS51c2Vycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZihkYXRhLnVzZXJzW2ldLnVpZCAhPT10aGlzLnVzZXJJZCkge1xyXG4gICAgICAgICAgICAgIG5vblVzZXJJbmRleCA9IGk7XHJcbiAgICAgICAgICAgICAgaWYoaSA9PT0gZGF0YS51c2Vycy5sZW5ndGggLSAxKVxyXG4gICAgICAgICAgICAgICAgY2hhdE5hbWUgKz0gJ2FuZCAnICsgZGF0YS51c2Vyc1tpXS5kaXNwbGF5TmFtZTtcclxuICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICBjaGF0TmFtZSArPSBkYXRhLnVzZXJzW2ldLmRpc3BsYXlOYW1lICsgJywgJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYoZGF0YS5jaGF0c1swXSkge1xyXG4gICAgICAgICAgICBsZXQgbGFzdE1zZyA9IGRhdGEuY2hhdHNbZGF0YS5jaGF0cy5sZW5ndGggLSAxXTtcclxuICAgICAgICAgICAgY29uc3QgYWRkUHJvbWlzZSA9IGF3YWl0IHRoaXMuYWRkTWVzc2FnZShsYXN0TXNnLCBkYXRhLCBkb2NJZCwgY2hhdE5hbWUsIG5vblVzZXJJbmRleCk7IFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLy8gY29uc3QgdW5zdWJzY3JpYmUgPSBmaXJlYmFzZS5maXJlc3RvcmUuY29sbGVjdGlvbignY2hhdHMnKS5kb2ModGhpcy5jaGF0SWRzW2ldKS5vblNuYXBzaG90KHtpbmNsdWRlTWV0YWRhdGFDaGFuZ2VzOiB0cnVlfSwgZG9jID0+IHtcclxuICAgICAgICAvLyAgIHRoaXMucmVmcmVzaExpc3QobnVsbCk7XHJcbiAgICAgICAgLy8gfSlcclxuICAgICAgfVxyXG4gICAgICBpZihhcmdzICE9IG51bGwpXHJcbiAgICAgIHtcclxuICAgICAgICB2YXIgcHVsbFJlZnJlc2ggPSBhcmdzLm9iamVjdDtcclxuICAgICAgICBwdWxsUmVmcmVzaC5yZWZyZXNoaW5nID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5yZWZyZXNoTWVzc2FnZXMuc29ydChmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgICAgIGlmKGEubGFzdENoYXQgPiBiLmxhc3RDaGF0KVxyXG4gICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgIGVsc2UgaWYoYi5sYXN0Q2hhdCA8IGEubGFzdENoYXQpXHJcbiAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICByZXR1cm4gMDtcclxuICAgICAgfSlcclxuICAgICAgdGhpcy5tZXNzYWdlcy5zcGxpY2UoMCk7XHJcbiAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLnJlZnJlc2hNZXNzYWdlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHRoaXMubWVzc2FnZXMucHVzaCh0aGlzLnJlZnJlc2hNZXNzYWdlcy5nZXRJdGVtKGkpKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnJlZnJlc2hNZXNzYWdlcy5zcGxpY2UoMCk7XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgYWRkTWVzc2FnZShsYXN0TXNnLCBkYXRhLCBkb2NJZCwgY2hhdE5hbWUsIG5vblVzZXJJbmRleCkge1xyXG4gICAgaWYobGFzdE1zZy51c2VySWQgIT09IHRoaXMudXNlcklkKSB7XHJcbiAgICAgIGNvbnN0IHVzZXJQcm9taXNlID0gYXdhaXQgZmlyZWJhc2UuZmlyZXN0b3JlLmNvbGxlY3Rpb24oJ3VzZXJzJykuZG9jKGxhc3RNc2cudXNlcklkKS5nZXQoKS50aGVuKChkb2MpID0+IHtcclxuICAgICAgICBsZXQgcHJvZmlsZVNvdXJjZSA9IGRvYy5kYXRhKCkucHJvZmlsZV9zb3VyY2U7XHJcbiAgICAgICAgaWYoZGF0YS51c2Vycy5sZW5ndGggPT09IDIpXHJcbiAgICAgICAgICB0aGlzLnJlZnJlc2hNZXNzYWdlcy5wdXNoKG5ldyBNZXNzYWdlSXRlbShsYXN0TXNnLCBkYXRhLmxhc3RDaGF0LCBkb2NJZCwgcHJvZmlsZVNvdXJjZSwgbGFzdE1zZy5kaXNwbGF5TmFtZSwgZG9jLmRhdGEoKS5maXJzdF9uYW1lICsgJzogJyArIGxhc3RNc2cubWVzc2FnZSkpO1xyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5yZWZyZXNoTWVzc2FnZXMucHVzaChuZXcgTWVzc2FnZUl0ZW0obGFzdE1zZywgZGF0YS5sYXN0Q2hhdCwgZG9jSWQsIHByb2ZpbGVTb3VyY2UsIGNoYXROYW1lLCBkb2MuZGF0YSgpLmZpcnN0X25hbWUgKyAnOiAnICsgbGFzdE1zZy5tZXNzYWdlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9KVxyXG4gICAgICByZXR1cm4gdGhpcy5yZWZyZXNoTWVzc2FnZXM7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgY29uc3QgdXNlclByb21pc2UgPSBhd2FpdCBmaXJlYmFzZS5maXJlc3RvcmUuY29sbGVjdGlvbigndXNlcnMnKS5kb2MoZGF0YS51c2Vyc1tub25Vc2VySW5kZXhdLnVpZCkuZ2V0KCkudGhlbigoZG9jKSA9PiB7XHJcbiAgICAgICAgbGV0IHByb2ZpbGVTb3VyY2UgPSBkb2MuZGF0YSgpLnByb2ZpbGVfc291cmNlO1xyXG4gICAgICAgIGlmKGRhdGEudXNlcnMubGVuZ3RoID09PSAyKVxyXG4gICAgICAgICAgdGhpcy5yZWZyZXNoTWVzc2FnZXMucHVzaChuZXcgTWVzc2FnZUl0ZW0obGFzdE1zZywgZGF0YS5sYXN0Q2hhdCwgZG9jSWQsIHByb2ZpbGVTb3VyY2UsIFxyXG4gICAgICAgICAgICBkb2MuZGF0YSgpLmZpcnN0X25hbWUgKyAnICcgKyBkb2MuZGF0YSgpLmxhc3RfbmFtZSwgJ1lvdTogJyArIGxhc3RNc2cubWVzc2FnZSkpO1xyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5yZWZyZXNoTWVzc2FnZXMucHVzaChuZXcgTWVzc2FnZUl0ZW0obGFzdE1zZywgZGF0YS5sYXN0Q2hhdCwgZG9jSWQsIHByb2ZpbGVTb3VyY2UsIFxyXG4gICAgICAgICAgICBjaGF0TmFtZSwgJ1lvdTogJyArIGxhc3RNc2cubWVzc2FnZSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfSlcclxuICAgICAgcmV0dXJuIHRoaXMucmVmcmVzaE1lc3NhZ2VzO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVmcmVzaExpc3QoYXJncykge1xyXG4gICAgdGhpcy5sb2FkTWVzc2FnZXMoYXJncyk7XHJcbiAgfVxyXG5cclxuICBvbkl0ZW1UYXAoYXJncykge1xyXG4gIFx0bGV0IGNoYXRJZCA9IHRoaXMubWVzc2FnZXMuZ2V0SXRlbShhcmdzLmluZGV4KS5jaGF0SWQ7XHJcbiAgXHR0aGlzLnRyYW5zZmVyU2VydmljZS5zZXREYXRhKGNoYXRJZCk7XHJcbiAgXHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ2NoYXQnXSlcclxuICB9XHJcblxyXG4gIG9uTmF2QnRuVGFwKCkge1xyXG4gICAgaWYodGhpcy5yb3V0ZXIuY2FuR29CYWNrKVxyXG4gICAgICB0aGlzLnJvdXRlci5iYWNrKCk7XHJcbiAgICBlbHNlXHJcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnbmF2aWdhdGlvbiddLCB7Y2xlYXJIaXN0b3J5OiB0cnVlfSlcclxuICB9XHJcblxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCIvKiBBZGQgbW9iaWxlIHN0eWxlcyBmb3IgdGhlIGNvbXBvbmVudCBoZXJlLiAgKi9cXG5CdXR0b24ge1xcbiAgICBwYWRkaW5nOiA1O1xcbiAgICBtYXJnaW46IDU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGRvZGdlcmJsdWU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgaGVpZ2h0OiA0MDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTtcXG59XFxuXFxuLmNoYXQtYnV0dG9uIHtcXG5cXHRwYWRkaW5nLWxlZnQ6IDU7XFxuXFx0cGFkZGluZy1yaWdodDogNTtcXG5cXHRtYXJnaW46IDU7XFxuXFx0aGVpZ2h0OiAyMDtcXG5cXHR3aWR0aDogMjA7XFxufVxcblxcbi5pbWctYnV0dG9uIHtcXG5cXHRtYXJnaW46IDU7XFxuXFx0bWFyZ2luLWxlZnQ6IDM7XFxuXFx0bWFyZ2luLXJpZ2h0OiA3O1xcblxcdGhlaWdodDogMjA7XFxuXFx0d2lkdGg6IDIwO1xcbn1cXG5cXG4uY2hhdC10ZXh0LWZpZWxkIHtcXG4gICAgcGFkZGluZzogNTsgXFxuICAgIC8qYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7ICovXFxuICAgIC8qYm9yZGVyLXJhZGl1czogNDsqL1xcbiAgICAvKmJvdHRvbS1ib3JkZXItY29sb3I6ICM2OTY5Njk7Ki9cXG59XFxuXFxuLmF1dGhvci1pbWcge1xcbiAgICBtYXJnaW46IDAgNSA1IDU7XFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxuICAgIHdpZHRoOiA0MDtcXG4gICAgaGVpZ2h0OiA0MDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcXG59XFxuXFxuLmltZyB7XFxuXFx0bWFyZ2luOiA1O1xcblxcdGJvcmRlci1yYWRpdXM6IDEwO1xcblxcdGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcXG59XFxuXFxuLnRoZWlyc0ltZyB7XFxuXFx0bWFyZ2luOiA1O1xcblxcdG1hcmdpbi1sZWZ0OiA1MjtcXG5cXHRib3JkZXItcmFkaXVzOiAxMDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxufVxcblxcbi5taW5lIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2FjMDBlNjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiA4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDE0O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTU7XFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1O1xcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNTtcXG4gICAgZm9udC1zaXplOiAxNjtcXG4gICAgbWF4LXdpZHRoOiA2MCU7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIC8qbWFyZ2luLWJvdHRvbTogMTI7Ki9cXG59XFxuXFxuLm1pbmVDb250aW51YXRpb24ge1xcblxcdG1hcmdpbi1ib3R0b206IDA7XFxuXFx0Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE1O1xcbn1cXG5cXG4ubWluZUNvbnRpbnVhdGlvbkdyaWQge1xcblxcdGZvbnQtc2l6ZTogMTQ7XFxuICAgIHBhZGRpbmc6IDU7XFxuXFx0cGFkZGluZy10b3A6IDA7XFxuXFx0cGFkZGluZy1ib3R0b206IDE7XFxufVxcblxcbi5taW5lVGltZSB7XFxuXFx0bWFyZ2luLXJpZ2h0OiAxMDtcXG5cXHRtYXJnaW4tYm90dG9tOiA1O1xcbn1cXG5cXG4udGhlaXJzVGltZSB7XFxuXFx0bWFyZ2luLWxlZnQ6IDUyO1xcblxcdG1hcmdpbi1ib3R0b206IDU7XFxufVxcblxcbi50aW1lIHtcXG5cXHR2aXNpYmlsaXR5OiBjb2xsYXBzZTtcXG5cXHRkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udGhlaXJzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcXG4gICAgY29sb3I6ICMzMzM7XFxuICAgIHBhZGRpbmc6IDc7XFxuICAgIHBhZGRpbmctbGVmdDogMTQ7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDE0O1xcbiAgICBib3JkZXItcmFkaXVzOiAxNTtcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNTtcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE1O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDQwO1xcbiAgICBmb250LXNpemU6IDE2O1xcbiAgICBtYXgtd2lkdGg6IDYwJTtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgLyptYXJnaW4tYm90dG9tOiAxMjsqL1xcbn1cXG5cXG4udGhlaXJzQ29udGludWF0aW9uIHtcXG5cXHRtYXJnaW4tbGVmdDogNTI7XFxuXFx0bWFyZ2luLWJvdHRvbTogMDtcXG5cXHRib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNTtcXG59XFxuXFxuLnRoZWlyc0NvbnRpbnVhdGlvbkdyaWQge1xcblxcdGZvbnQtc2l6ZTogMTQ7XFxuICAgIHBhZGRpbmc6IDU7XFxuXFx0cGFkZGluZy10b3A6IDA7XFxuXFx0cGFkZGluZy1ib3R0b206IDE7XFxufVxcblxcbi5ncmlkIHtcXG4gICAgZm9udC1zaXplOiAxNDtcXG4gICAgcGFkZGluZzogNTtcXG4gICAgcGFkZGluZy10b3A6IDA7XFxuICAgIHBhZGRpbmctYm90dG9tOiA4O1xcbn1cXG5cXG4uY2hhdC1ib3gtbGF5b3V0IHtcXG5cXHRib3JkZXItY29sb3I6ICNmMWYxZjE7XFxuXFx0Ym9yZGVyLXRvcC13aWR0aDogMTtcXG59XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPFBhZ2UuYWN0aW9uQmFyPlxcclxcbiAgICA8QWN0aW9uQmFyIHRpdGxlPVxcXCJ7eyBjaGF0TmFtZSB9fVxcXCIgYW5kcm9pZDpob3Jpem9udGFsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiIGlvczpob3Jpem9udGFsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiPlxcclxcbiAgICBcXHQ8TmF2aWdhdGlvbkJ1dHRvbiB0ZXh0PVxcXCJHbyBCYWNrXFxcIiBhbmRyb2lkLnN5c3RlbUljb249XFxcImljX21lbnVfYmFja1xcXCIgKHRhcCk9XFxcIm9uTmF2QnRuVGFwKClcXFwiPjwvTmF2aWdhdGlvbkJ1dHRvbj5cXHJcXG5cXHQgICAgPEFjdGlvbkl0ZW0gKHRhcCk9XFxcIm9uTGVhdmUoKVxcXCJcXHJcXG5cXHQgICAgICBpb3Muc3lzdGVtSWNvbj1cXFwiOVxcXCIgaW9zLnBvc2l0aW9uPVxcXCJyaWdodFxcXCJcXHJcXG5cXHQgICAgICB0ZXh0PVxcXCJMZWF2ZSBjaGF0XFxcIiBhbmRyb2lkLnBvc2l0aW9uPVxcXCJwb3B1cFxcXCI+PC9BY3Rpb25JdGVtPlxcclxcbiAgICA8L0FjdGlvbkJhcj5cXHJcXG48L1BhZ2UuYWN0aW9uQmFyPlxcclxcblxcclxcbjxHcmlkTGF5b3V0IHJvd3M9XFxcIiosIGF1dG9cXFwiPlxcclxcbiAgICA8TGlzdFZpZXcgbWFyZ2luLWJvdHRvbT1cXFwiNTBcXFwiIHBhZGRpbmc9XFxcIjVcXFwiICNtZXNzYWdlTGlzdCBbaXRlbXNdPVxcXCJtZXNzYWdlc1xcXCIgc2VwYXJhdG9yQ29sb3I9XFxcInRyYW5zcGFyZW50XFxcIiAoc2V0dXBJdGVtVmlldyk9XFxcInNldHVwSXRlbVZpZXcoJGV2ZW50KVxcXCIgcm93PVxcXCIwXFxcIiAobG9hZE1vcmVJdGVtcyk9XFxcImxvYWRNb3JlRGF0YSgpXFxcIj5cXHJcXG4gICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtaXRlbT1cXFwiaXRlbVxcXCIgbGV0LWk9XFxcImluZGV4XFxcIiBsZXQtbWluZT1cXFwibWluZVxcXCIgbGV0LXRoZWlycz1cXFwidGhlaXJzXFxcIiBsZXQtbWluZUNvbnRpbnVhdGlvbj1cXFwibWluZUNvbnRpbnVhdGlvblxcXCIgbGV0LXRoZWlyc0NvbnRpbnVhdGlvbj1cXFwidGhlaXJzQ29udGludWF0aW9uXFxcIiBsZXQtbWluZUNvbnRpbnVhdGlvbkdyaWQ9XFxcIm1pbmVDb250aW51YXRpb25HcmlkXFxcIiBsZXQtdGhlaXJzQ29udGludWF0aW9uR3JpZD1cXFwidGhlaXJzQ29udGludWF0aW9uR3JpZFxcXCIgbGV0LWdyaWQ9XFxcImdyaWRcXFwiIGxldC1taW5lVGltZT1cXFwibWluZVRpbWVcXFwiIGxldC10aGVpcnNUaW1lPVxcXCJ0aGVpcnNUaW1lXFxcIiBsZXQtdGltZT1cXFwidGltZVxcXCIgbGV0LXRoZWlyc0ltZz1cXFwidGhlaXJzSW1nXFxcIiBsZXQtaW1nPVxcXCJpbWdcXFwiPlxcclxcbiAgICAgICAgICAgIDxTdGFja0xheW91dCB3aWR0aD1cXFwiODAlXFxcIiBbY2xhc3MubWluZUNvbnRpbnVhdGlvbkdyaWRdPVxcXCJtaW5lQ29udGludWF0aW9uR3JpZFxcXCIgW2NsYXNzLnRoZWlyc0NvbnRpbnVhdGlvbkdyaWRdPVxcXCJ0aGVpcnNDb250aW51YXRpb25HcmlkXFxcIiBbY2xhc3MuZ3JpZF09XFxcImdyaWRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XFxcImhvcml6b250YWxcXFwiIFtob3Jpem9udGFsQWxpZ25tZW50XT1cXFwiYWxpZ24oaXRlbSlcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPEltYWdlIFt2aXNpYmlsaXR5XT1cXFwiaXRlbS52aXNpYmlsaXR5XFxcIiBjbGFzcz1cXFwiYXV0aG9yLWltZ1xcXCIgc3RyZXRjaD1cXFwiYXNwZWN0RmlsbFxcXCIgaGVpZ2h0PVxcXCI0MFxcXCIgd2lkdGg9XFxcIjQwXFxcIiB2ZXJ0aWNhbEFsaWdubWVudD1cXFwiYm90dG9tXFxcIiBbc3JjXT1cXFwiaXRlbS5jaGF0TWVzc2FnZS5wZnBTb3VyY2VcXFwiIGNvbD1cXFwiMVxcXCI+PC9JbWFnZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCBbdmlzaWJpbGl0eV09XFxcInRleHRWaXNpYmlsaXR5KGl0ZW0pXFxcIiBbdGV4dF09J2l0ZW0uY2hhdE1lc3NhZ2UubWVzc2FnZScgW2NsYXNzLm1pbmVdPVxcXCJtaW5lXFxcIiBbY2xhc3MudGhlaXJzXT1cXFwidGhlaXJzXFxcIiBbY2xhc3MubWluZUNvbnRpbnVhdGlvbl09XFxcIm1pbmVDb250aW51YXRpb25cXFwiIFtjbGFzcy50aGVpcnNDb250aW51YXRpb25dPVxcXCJ0aGVpcnNDb250aW51YXRpb25cXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiB2ZXJ0aWNhbEFsaWdubWVudD1cXFwidG9wXFxcIj48L0xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPEltYWdlIFt2aXNpYmlsaXR5XT1cXFwiaW1nVmlzaWJpbGl0eShpdGVtKVxcXCIgW2NsYXNzLnRoZWlyc0ltZ109XFxcInRoZWlyc0ltZ1xcXCIgW2NsYXNzLmltZ109XFxcImltZ1xcXCIgc3RyZXRjaD1cXFwibm9uZVxcXCIgbWluV2lkdGg9XFxcIjM2MFxcXCIgbWluSGVpZ2h0PVxcXCIyMDBcXFwiIGRlY29kZVdpZHRoPVxcXCIzNjBcXFwiIGRlY29kZUhlaWdodD1cXFwiMjAwXFxcIiB2ZXJ0aWNhbEFsaWdubWVudD1cXFwiYm90dG9tXFxcIiBbc3JjXT1cXFwiaXRlbS5jaGF0TWVzc2FnZS5pbWdTb3VyY2VcXFwiIGNvbD1cXFwiMVxcXCIgKHRhcCk9XFxcInRvVmlld0ltYWdlKGl0ZW0uY2hhdE1lc3NhZ2UuaW1nU291cmNlKVxcXCI+PC9JbWFnZT5cXHJcXG4gICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXHJcXG4gICAgICAgICAgICAgICAgPExhYmVsIFt0ZXh0XT0naXRlbS5mb3JtYXR0ZWRUaW1lJyBbaG9yaXpvbnRhbEFsaWdubWVudF09XFxcImFsaWduKGl0ZW0pXFxcIiBbY2xhc3MubWluZVRpbWVdPVxcXCJtaW5lVGltZVxcXCIgW2NsYXNzLnRoZWlyc1RpbWVdPVxcXCJ0aGVpcnNUaW1lXFxcIiBbY2xhc3MudGltZV09XFxcInRpbWVcXFwiPjwvTGFiZWw+XFxyXFxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXHJcXG4gICAgICAgIDwvbmctdGVtcGxhdGU+XFxyXFxuICAgIDwvTGlzdFZpZXc+XFxyXFxuXFxyXFxuICAgIDxTdGFja0xheW91dCAjY2hhdGJveCByb3c9XFxcIjFcXFwiIGNsYXNzPVxcXCJjaGF0LWJveC1sYXlvdXRcXFwiPlxcclxcblxcdCAgICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cXFwiYXV0bywqLGF1dG9cXFwiIHN0eWxlPVxcXCJwYWRkaW5nOiAxMFxcXCI+XFxyXFxuXFx0ICAgICAgICBcXHQ8SW1hZ2UgY2xhc3M9XFxcImltZy1idXR0b25cXFwiIHJvdz1cXFwiMFxcXCIgY29sPVxcXCIwXFxcIiBzcmM9XFxcIn4vaW1nL2ltZ19pY29uXzIucG5nXFxcIiAodGFwKT1vcGVuSW1hZ2VzKCk+PC9JbWFnZT5cXHJcXG5cXHQgICAgICAgICAgICA8VGV4dFZpZXcgI3RleHRmaWVsZCBoZWlnaHQ9XFxcImF1dG9cXFwiIG1heEhlaWdodD1cXFwiMTAwXFxcIiBoaW50PVxcXCJTdGFydCBhIG1lc3NhZ2VcXFwiIGNsYXNzPVxcXCJjaGF0LXRleHQtZmllbGRcXFwiIHJvdz1cXFwiMFxcXCIgY29sPVxcXCIxXFxcIiBhdXRvY29ycmVjdD1cXFwidHJ1ZVxcXCIgWyhuZ01vZGVsKV09XFxcIm1lc3NhZ2VcXFwiICh0YXApPVxcXCJvblRleHRUYXAoKVxcXCI+PC9UZXh0Vmlldz5cXHJcXG5cXHQgICAgICAgICAgICA8SW1hZ2UgI2J0biBjbGFzcz1cXFwiY2hhdC1idXR0b25cXFwiIHJvdz1cXFwiMFxcXCIgY29sPVxcXCIyXFxcIiBzcmM9XFxcIn4vaW1nL3NlbmRfbWVzc2FnZV9pY29uXzIucG5nXFxcIiAodGFwKT1zZW5kTWVzc2FnZSgpPjwvSW1hZ2U+XFxyXFxuXFx0ICAgICAgICA8L0dyaWRMYXlvdXQ+XFxyXFxuXFxyXFxuICAgIDwvU3RhY2tMYXlvdXQ+XFxyXFxuXFxyXFxuPC9HcmlkTGF5b3V0PlwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUcmFuc2ZlclNlcnZpY2UgfSBmcm9tICcuLi9kYXRhdHJhbnNmZXIuc2VydmljZSc7XHJcbmltcG9ydCAqIGFzIGZpcmViYXNlIGZyb20gJ25hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2UnO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0ICogYXMgaW1hZ2VwaWNrZXIgZnJvbSBcIm5hdGl2ZXNjcmlwdC1pbWFnZXBpY2tlclwiO1xyXG5pbXBvcnQgKiBhcyBpbWFnZVNvdXJjZSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9pbWFnZS1zb3VyY2VcIjtcclxuaW1wb3J0ICogYXMgZnMgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZmlsZS1zeXN0ZW1cIjtcclxuaW1wb3J0IHsgTG9naW5jaGVja1NlcnZpY2UgfSBmcm9tICcuLi9sb2dpbmNoZWNrLnNlcnZpY2UudG5zJztcclxuaW1wb3J0IHsgQ2hhdE1lc3NhZ2UgfSBmcm9tICcuLi9tb2RlbHMvY2hhdC1tZXNzYWdlLm1vZGVsJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZUFycmF5IH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUtYXJyYXknO1xyXG5pbXBvcnQgeyBMaXN0VmlldyB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvbGlzdC12aWV3JztcclxuaW1wb3J0IHsgaXNBbmRyb2lkIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybSc7XHJcbmltcG9ydCAqIGFzIGFwcCBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiO1xyXG5kZWNsYXJlIHZhciBhbmRyb2lkOiBhbnk7XHJcblxyXG5cclxuY2xhc3MgQ2hhdEl0ZW0ge1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBjaGF0TWVzc2FnZTogQ2hhdE1lc3NhZ2UsIHB1YmxpYyB2aXNpYmlsaXR5OiBzdHJpbmcsIHB1YmxpYyBmb3JtYXR0ZWRUaW1lOiBzdHJpbmcsIHB1YmxpYyBtaW5lQ29udGludWF0aW9uOiBib29sZWFuLCBwdWJsaWMgdGhlaXJzQ29udGludWF0aW9uOiBib29sZWFuKSB7fVxyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1jaGF0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY2hhdC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY2hhdC5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIENoYXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRyYW5zZmVyU2VydmljZTogVHJhbnNmZXJTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSBsb2dpbmNoZWNrU2VydmljZTogTG9naW5jaGVja1NlcnZpY2UsXHJcbiAgXHRwcml2YXRlIHZjUmVmOiBWaWV3Q29udGFpbmVyUmVmKSB7IH1cclxuXHJcbiAgQFZpZXdDaGlsZChcIm1lc3NhZ2VMaXN0XCIsIHsgc3RhdGljOiB0cnVlIH0pIGx2OiBFbGVtZW50UmVmO1xyXG4gIGNoYXRJZDogc3RyaW5nO1xyXG4gIG1lc3NhZ2VzID0gbmV3IE9ic2VydmFibGVBcnJheTxDaGF0SXRlbT4oKTtcclxuICBhbGxNZXNzYWdlcyA9IG5ldyBPYnNlcnZhYmxlQXJyYXk8Q2hhdEl0ZW0+KCk7XHJcbiAgbWVzc2FnZTogc3RyaW5nID0gJyc7XHJcbiAgdXNlcklkOiBzdHJpbmc7XHJcbiAgY2hhdE5hbWU6IHN0cmluZztcclxuICBkaXNwbGF5TmFtZTogc3RyaW5nO1xyXG4gIHBmcFNvdXJjZTogc3RyaW5nO1xyXG4gIGxpc3Q6IExpc3RWaWV3O1xyXG4gIGxhc3RJbmRleDtcclxuICBjdXJyZW50VXNlcjogYW55O1xyXG4gIG51bVNob3duID0gMjA7XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIFx0aWYoaXNBbmRyb2lkKSB7XHJcbiAgXHRcdHZhciB3aW5kb3cgPSBhcHAuYW5kcm9pZC5zdGFydEFjdGl2aXR5LmdldFdpbmRvdygpO1xyXG4gICAgICAgIHdpbmRvdy5zZXRTb2Z0SW5wdXRNb2RlKGFuZHJvaWQudmlldy5XaW5kb3dNYW5hZ2VyLkxheW91dFBhcmFtcy5TT0ZUX0lOUFVUX0FESlVTVF9SRVNJWkUpO1xyXG4gIFx0fVxyXG4gIFx0dGhpcy5saXN0ID0gdGhpcy5sdi5uYXRpdmVFbGVtZW50O1xyXG5cclxuICBcdHRoaXMuY2hhdElkID0gdGhpcy50cmFuc2ZlclNlcnZpY2UuZ2V0RGF0YSgpO1xyXG4gIFx0dGhpcy51c2VySWQgPSB0aGlzLmxvZ2luY2hlY2tTZXJ2aWNlLmdldFVzZXIoKTtcclxuICBcdGZpcmViYXNlLmdldEN1cnJlbnRVc2VyKCkudGhlbigodXNlcikgPT4ge1xyXG4gIFx0XHR0aGlzLmRpc3BsYXlOYW1lID0gdXNlci5kaXNwbGF5TmFtZTtcclxuICBcdFx0dGhpcy5wZnBTb3VyY2UgPSB1c2VyLnBob3RvVVJMO1xyXG4gIFx0fSlcclxuICBcdHRoaXMucmV0cmlldmVDaGF0cygpO1xyXG4gIFx0dGhpcy5jaGF0TmFtZSA9IFwiSm9obiBEb2VcIlxyXG4gIFx0Ly8gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgIC8vICAgIHRoaXMubGlzdC5zY3JvbGxUb0luZGV4KHRoaXMubWVzc2FnZXMubGVuZ3RoIC0gMSk7XHJcbiAgIC8vICB9LCAxMDAwKVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgc2VuZE1lc3NhZ2UoaW1nU3JjID0gbnVsbCkge1xyXG4gICAgaWYodGhpcy5tZXNzYWdlLnJlcGxhY2UoL1xccysvZywgJycpLmxlbmd0aCA9PT0gMCAmJiAhaW1nU3JjKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICBcdHZhciB0b2RheSA9IG5ldyBEYXRlKCk7XHJcbiAgXHR2YXIgZGF0ZSA9IHRvZGF5LmdldEZ1bGxZZWFyKCkrJy8nKyh0b2RheS5nZXRNb250aCgpKzEpKycvJyt0b2RheS5nZXREYXRlKCk7XHJcbiAgXHR2YXIgdGltZSA9IHRvZGF5LmdldEhvdXJzKCkgKyBcIjpcIiArIHRvZGF5LmdldFVUQ01pbnV0ZXMoKSArIFwiOlwiICsgdG9kYXkuZ2V0U2Vjb25kcygpO1xyXG4gICAgdmFyIGNoYXQ6IENoYXRNZXNzYWdlO1xyXG4gICAgaWYoaW1nU3JjKSB7XHJcbiAgICBcdGNoYXQgPSB7XHJcbiAgICBcdFx0dXNlcklkOiB0aGlzLnVzZXJJZCxcclxuICAgIFx0XHRkaXNwbGF5TmFtZTogdGhpcy5kaXNwbGF5TmFtZSxcclxuICAgIFx0XHRtZXNzYWdlOiBcIlwiLFxyXG4gICAgXHRcdHBmcFNvdXJjZTogdGhpcy5wZnBTb3VyY2UsXHJcbiAgICBcdFx0aW1nU291cmNlOiBpbWdTcmMsXHJcbiAgICBcdFx0dGltZTogdGltZSxcclxuICAgIFx0XHRkYXRlOiBkYXRlXHJcbiAgICBcdH1cclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICBjaGF0ID0ge1xyXG4gICAgICAgIHVzZXJJZDogdGhpcy51c2VySWQsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IHRoaXMuZGlzcGxheU5hbWUsXHJcbiAgICAgICAgbWVzc2FnZTogdGhpcy5tZXNzYWdlLFxyXG4gICAgICAgIHBmcFNvdXJjZTogdGhpcy5wZnBTb3VyY2UsXHJcbiAgICAgICAgaW1nU291cmNlOiBcIlwiLFxyXG4gICAgICAgIHRpbWU6IHRpbWUsXHJcbiAgICAgICAgZGF0ZTogZGF0ZVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHRjb25zdCBtZXNzYWdlRG9jdW1lbnQgPSBmaXJlYmFzZS5maXJlc3RvcmUuY29sbGVjdGlvbignY2hhdHMnKS5kb2ModGhpcy5jaGF0SWQpO1xyXG4gIFx0Y29uc3QgbWVzc2FnZVByb21pc2UgPSBhd2FpdCBtZXNzYWdlRG9jdW1lbnQuZ2V0KCkudGhlbigoZG9jKSA9PiB7XHJcbiAgXHRcdHZhciB1cGRhdGVkQ2hhdHMgOiBbQ2hhdE1lc3NhZ2VdID0gZG9jLmRhdGEoKS5jaGF0cztcclxuICBcdFx0dXBkYXRlZENoYXRzLnB1c2goY2hhdCk7XHJcbiAgXHRcdG1lc3NhZ2VEb2N1bWVudC51cGRhdGUoe1xyXG4gIFx0XHRcdGNoYXRzOiB1cGRhdGVkQ2hhdHMsXHJcbiAgXHRcdFx0bGFzdENoYXQ6IGRhdGUgKyAnICcgKyB0aW1lXHJcbiAgXHRcdH0pXHJcbiAgXHR9KVxyXG4gIFx0dGhpcy5tZXNzYWdlID0gJyc7XHJcbiAgfVxyXG5cclxuICBhc3luYyByZXRyaWV2ZUNoYXRzKCkge1xyXG4gIFx0Y29uc3QgbWVzc2FnZURvY3VtZW50ID0gZmlyZWJhc2UuZmlyZXN0b3JlLmNvbGxlY3Rpb24oJ2NoYXRzJykuZG9jKHRoaXMuY2hhdElkKTtcclxuICBcdGNvbnN0IGRvY1Byb21pc2UgPSBhd2FpdCBtZXNzYWdlRG9jdW1lbnQuZ2V0KCkudGhlbigoZG9jKSA9PiB7XHJcbiAgXHRcdGxldCBkYXRhID0gZG9jLmRhdGEoKTtcclxuICBcdFx0dGhpcy5sYXN0SW5kZXggPSBkYXRhLmNoYXRzLmxlbmd0aDtcclxuICAgICAgdGhpcy5tZXNzYWdlcy5zcGxpY2UoMCk7XHJcbiAgICAgIHRoaXMuYWxsTWVzc2FnZXMuc3BsaWNlKDApO1xyXG4gIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGF0YS5jaGF0cy5sZW5ndGg7IGkrKykge1xyXG4gIFx0XHRcdGlmKGRhdGEuY2hhdHNbaV0udXNlcklkID09PSB0aGlzLnVzZXJJZCkge1xyXG4gICAgICAgICAgdGhpcy51cGRhdGVDb250aW51YXRpb25zKGRhdGEsIGksIHRydWUsIFwiY29sbGFwc2VcIik7XHJcbiAgICAgICAgfVxyXG4gIFx0XHRcdGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy51cGRhdGVDb250aW51YXRpb25zKGRhdGEsIGksIGZhbHNlLCBcInZpc2libGVcIik7XHJcbiAgICAgICAgfVxyXG4gIFx0XHR9XHJcbiAgXHRcdC8vIHRoaXMubGlzdC5zY3JvbGxUb0luZGV4KGRhdGEuY2hhdHMubGVuZ3RoIC0gMSk7XHJcbiAgXHRcdGlmKGRhdGEudXNlcnMubGVuZ3RoID09PSAyKSB7XHJcbiAgXHRcdFx0aWYoZGF0YS51c2Vyc1swXS51aWQgPT09IHRoaXMudXNlcklkKVxyXG4gIFx0XHRcdFx0dGhpcy5jaGF0TmFtZSA9IGRhdGEudXNlcnNbMV0uZGlzcGxheU5hbWU7XHJcbiAgXHRcdFx0ZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmNoYXROYW1lID0gZGF0YS51c2Vyc1swXS5kaXNwbGF5TmFtZTtcclxuICAgICAgICB9XHJcbiAgXHRcdH1cclxuICBcdFx0ZWxzZSB7XHJcbiAgICAgICAgdmFyIGNoYXROYW1lID0gJ1lvdSwgJztcclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgZGF0YS51c2Vycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgaWYoZGF0YS51c2Vyc1tpXS5pZCAhPSB0aGlzLnVzZXJJZCkge1xyXG4gICAgICAgICAgICBpZihpID09PSBkYXRhLnVzZXJzLmxlbmd0aCAtIDEpXHJcbiAgICAgICAgICAgICAgY2hhdE5hbWUgKz0gJ2FuZCAnICsgZGF0YS51c2Vyc1tpXS5kaXNwbGF5TmFtZTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgIGNoYXROYW1lICs9IGRhdGEudXNlcnNbaV0uZGlzcGxheU5hbWUgKyAnLCAnO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICBcdFx0XHR0aGlzLmNoYXROYW1lID0gJ0dyb3VwIGNoYXQnO1xyXG4gIFx0XHR9XHJcbiAgXHR9KVxyXG5cclxuICBcdGNvbnN0IHVuc3Vic2NyaWJlID0gbWVzc2FnZURvY3VtZW50Lm9uU25hcHNob3QoZG9jID0+IHtcclxuICAgICAgY29uc29sZS5sb2coJ2NhbGxlZCcpXHJcbiAgXHRcdGxldCBkYXRhID0gZG9jLmRhdGEoKTtcclxuICBcdFx0Zm9yKHZhciBpID0gdGhpcy5sYXN0SW5kZXg7IGkgPCBkYXRhLmNoYXRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgXHRcdFx0aWYoZGF0YS5jaGF0c1tpXS51c2VySWQgPT09IHRoaXMudXNlcklkKSB7XHJcbiAgICAgICAgICB0aGlzLnVwZGF0ZUNvbnRpbnVhdGlvbnMoZGF0YSwgaSwgdHJ1ZSwgXCJjb2xsYXBzZVwiKTtcclxuICAgICAgICAgIHRoaXMubGlzdC5zY3JvbGxUb0luZGV4KHRoaXMubWVzc2FnZXMubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgfVxyXG4gIFx0XHRcdGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy51cGRhdGVDb250aW51YXRpb25zKGRhdGEsIGksIGZhbHNlLCBcInZpc2libGVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubnVtU2hvd24gKz0gMTtcclxuICBcdFx0fVxyXG4gIFx0XHR0aGlzLmxhc3RJbmRleCA9IGRhdGEuY2hhdHMubGVuZ3RoO1xyXG4gIFx0fSlcclxuICAgIGlmKHRoaXMubWVzc2FnZXMubGVuZ3RoID4gdGhpcy5udW1TaG93bikge1xyXG4gICAgICB0aGlzLm1lc3NhZ2VzLnNwbGljZSgwLCB0aGlzLm1lc3NhZ2VzLmxlbmd0aCAtIHRoaXMubnVtU2hvd24pO1xyXG4gICAgfVxyXG4gICAgdGhpcy5saXN0LnNjcm9sbFRvSW5kZXgodGhpcy5tZXNzYWdlcy5sZW5ndGggLSAxKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZUNvbnRpbnVhdGlvbnMoZGF0YSwgaW5kZXgsIGlzTWluZSwgdmlzaWJpbGl0eSkge1xyXG4gICAgLy9VcGRhdGUgdGltZSB0byBhIHJlYWRhYmxlIGZvcm1hdCBmb3IgdGhlIHVzZXJcclxuICAgIHZhciBjaGF0VGltZSA9IGRhdGEuY2hhdHNbaW5kZXhdLnRpbWU7XHJcbiAgICB2YXIgZGF0ZVNwbGl0ID0gZGF0YS5jaGF0c1tpbmRleF0uZGF0ZS5zcGxpdCgnLycpO1xyXG4gICAgdmFyIHRpbWVTcGxpdCA9IGNoYXRUaW1lLnNwbGl0KCc6Jyk7XHJcbiAgICB2YXIgZm9ybWF0dGVkVGltZSA9ICcnO1xyXG4gICAgaWYodGltZVNwbGl0WzFdLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICB0aW1lU3BsaXRbMV0gPSAnMCcgKyB0aW1lU3BsaXRbMV07XHJcbiAgICB9XHJcbiAgICB2YXIgaG91cnMgPSBwYXJzZUludCh0aW1lU3BsaXRbMF0pO1xyXG4gICAgaWYoaG91cnMgPiAxMikge1xyXG4gICAgICBmb3JtYXR0ZWRUaW1lID0gZGF0ZVNwbGl0WzFdICsgJy8nICsgZGF0ZVNwbGl0WzJdICsgJywgJyArIChob3VycyAtIDEyKSArICc6JyArIHRpbWVTcGxpdFsxXSArICcgUE0nO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIGlmKGhvdXJzID09PSAwKVxyXG4gICAgICAgIHRpbWVTcGxpdFswXSA9ICcxMic7XHJcbiAgICAgIGZvcm1hdHRlZFRpbWUgPSBkYXRlU3BsaXRbMV0gKyAnLycgKyBkYXRlU3BsaXRbMl0gKyAnLCAnICsgdGltZVNwbGl0WzBdICsgJzonICsgdGltZVNwbGl0WzFdICsgJyBBTSc7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcGZwUHJvbWlzZSA9IGZpcmViYXNlLmZpcmVzdG9yZS5jb2xsZWN0aW9uKCd1c2VycycpLmRvYyhkYXRhLmNoYXRzW2luZGV4XS51c2VySWQpLmdldCgpLnRoZW4oKGRvYykgPT4ge1xyXG4gICAgICBkYXRhLmNoYXRzW2luZGV4XS5wZnBTb3VyY2UgPSBkb2MuZGF0YSgpLnByb2ZpbGVfc291cmNlO1xyXG4gICAgfSlcclxuXHJcbiAgICAvL1B1c2ggdGhlIG1lc3NhZ2UgaXRlbVxyXG4gICAgdGhpcy5tZXNzYWdlcy5wdXNoKG5ldyBDaGF0SXRlbShkYXRhLmNoYXRzW2luZGV4XSwgdmlzaWJpbGl0eSwgZm9ybWF0dGVkVGltZSwgZmFsc2UsIGZhbHNlKSk7XHJcbiAgICB0aGlzLmFsbE1lc3NhZ2VzLnB1c2gobmV3IENoYXRJdGVtKGRhdGEuY2hhdHNbaW5kZXhdLCB2aXNpYmlsaXR5LCBmb3JtYXR0ZWRUaW1lLCBmYWxzZSwgZmFsc2UpKTtcclxuXHJcbiAgICAvL0NoZWNrIGZvciBjb250aW51YXRpb24gbWVzc2FnZXMgYW5kIHVwZGF0ZSBpdGVtcyBhY2NvcmRpbmdseVxyXG4gICAgdmFyIGkgPSBpbmRleCAtIDE7XHJcbiAgICB3aGlsZShpID49IDAgJiYgZGF0YS5jaGF0c1tpXS51c2VySWQgPT09IGRhdGEuY2hhdHNbaW5kZXhdLnVzZXJJZCkge1xyXG4gICAgICBpZih0aGlzLmlzVGltZU92ZXIoZGF0YS5jaGF0c1tpXSwgZGF0YS5jaGF0c1tpbmRleF0pKVxyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgaWYoaSA+PSB0aGlzLm1lc3NhZ2VzLmxlbmd0aCkge1xyXG4gICAgICAgIHZhciBtc2cgPSB0aGlzLm1lc3NhZ2VzLmdldEl0ZW0odGhpcy5tZXNzYWdlcy5sZW5ndGggKyBpIC0gZGF0YS5jaGF0cy5sZW5ndGgpO1xyXG4gICAgICAgIG1zZy52aXNpYmlsaXR5ID0gJ2NvbGxhcHNlJztcclxuICAgICAgICBpZihpc01pbmUpIHtcclxuICAgICAgICAgIG1zZy5taW5lQ29udGludWF0aW9uID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICBtc2cudGhlaXJzQ29udGludWF0aW9uID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlcy5zZXRJdGVtKHRoaXMubWVzc2FnZXMubGVuZ3RoICsgaSAtIGRhdGEuY2hhdHMubGVuZ3RoLCBtc2cpXHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgdmFyIG1zZyA9IHRoaXMubWVzc2FnZXMuZ2V0SXRlbShpKTtcclxuICAgICAgICBtc2cudmlzaWJpbGl0eSA9ICdjb2xsYXBzZSc7XHJcbiAgICAgICAgaWYoaXNNaW5lKSB7XHJcbiAgICAgICAgICBtc2cubWluZUNvbnRpbnVhdGlvbiA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgbXNnLnRoZWlyc0NvbnRpbnVhdGlvbiA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubWVzc2FnZXMuc2V0SXRlbShpLCBtc2cpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmFsbE1lc3NhZ2VzLnNldEl0ZW0oaSwgbXNnKTtcclxuICAgICAgaSA9IGkgLSAxO1xyXG4gICAgfVxyXG4gICAgLy8gdGhpcy5saXN0LnNjcm9sbFRvSW5kZXgodGhpcy5tZXNzYWdlcy5sZW5ndGggLSAxKTtcclxuICB9XHJcblxyXG4gIG9wZW5JbWFnZXMoKSB7XHJcbiAgICB2YXIgbG9jYWxQYXRoO1xyXG4gICAgdmFyIGNvdW50ZXIgPSAxO1xyXG4gICAgbGV0IGNvbnRleHQgPSBpbWFnZXBpY2tlci5jcmVhdGUoe1xyXG4gICAgICAgIG1vZGU6IFwic2luZ2xlXCIgLy8gdXNlIFwibXVsdGlwbGVcIiBmb3IgbXVsdGlwbGUgc2VsZWN0aW9uXHJcbiAgICB9KTtcclxuICAgIGNvbnRleHRcclxuICAgIC5hdXRob3JpemUoKVxyXG4gICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBjb250ZXh0LnByZXNlbnQoKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoc2VsZWN0aW9uKSA9PiB7XHJcbiAgICAgICAgc2VsZWN0aW9uLmZvckVhY2goKHNlbGVjdGVkKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIHByb2Nlc3MgdGhlIHNlbGVjdGVkIGltYWdlXHJcbiAgICAgICAgICAgIGxldCBpbWdTb3VyY2UgPSBuZXcgaW1hZ2VTb3VyY2UuSW1hZ2VTb3VyY2UoKTtcclxuICAgICAgICAgICAgaW1nU291cmNlLmZyb21Bc3NldChzZWxlY3RlZCkudGhlbigoc291cmNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgIGNvbnN0IGI2NCA9IHNvdXJjZS50b0Jhc2U2NFN0cmluZygnanBlZycsIDEwMCk7XHJcbiAgICAgICAgICAgICAgIGNvbnN0IGZpbGVTaXplID0gYjY0LnJlcGxhY2UoL1xcPS9nLCBcIlwiKS5sZW5ndGggKiAwLjc1O1xyXG4gICAgICAgICAgICAgICBpZiAoZmlsZVNpemUgPiA1KSB7XHJcbiAgICAgICAgICAgICAgICAgIC8vIElmIGZpbGUgaXMgZ3JlYXRlciB0aGFuIDEgTUJcclxuICAgICAgICAgICAgICAgICAgc291cmNlLmxvYWRGcm9tQmFzZTY0KGI2NCk7XHJcbiAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgIGNvbnN0IGltZ0hhc2ggPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKCkuc2xpY2UoMiwxMSk7XHJcbiAgICAgICAgICAgICAgIGxldCBmb2xkZXIgPSBmcy5rbm93bkZvbGRlcnMudGVtcCgpO1xyXG4gICAgICAgICAgICAgICB2YXIgcGF0aCA9IGZzLnBhdGguam9pbihmb2xkZXIucGF0aCwgaW1nSGFzaCArIFwiLnBuZ1wiKTtcclxuICAgICAgICAgICAgICAgbGV0IHNhdmVkID0gc291cmNlLnNhdmVUb0ZpbGUocGF0aCwgXCJqcGVnXCIsIDEwMCk7XHJcblxyXG4gICAgICAgICAgICAgICBmaXJlYmFzZS5zdG9yYWdlLnVwbG9hZEZpbGUoe1xyXG4gICAgICAgICAgICAgICAgICAvLyB0aGUgZnVsbCBwYXRoIG9mIHRoZSBmaWxlIGluIHlvdXIgRmlyZWJhc2Ugc3RvcmFnZSAoZm9sZGVycyB3aWxsIGJlIGNyZWF0ZWQpXHJcbiAgICAgICAgICAgICAgICAgIHJlbW90ZUZ1bGxQYXRoOiAnY2hhdHMvJyArIHRoaXMuY2hhdElkICsgJy9pbWFnZXMvJyArIHRoaXMudXNlcklkICsgJy9JTUdfJyArIGltZ0hhc2ggKyAnLnBuZycsXHJcbiAgICAgICAgICAgICAgICAgIC8vIG9wdGlvbiAxOiBhIGZpbGUtc3lzdGVtIG1vZHVsZSBGaWxlIG9iamVjdFxyXG4gICAgICAgICAgICAgICAgICBsb2NhbEZpbGU6IGZzLkZpbGUuZnJvbVBhdGgocGF0aCksXHJcbiAgICAgICAgICAgICAgICAgIC8vIG9wdGlvbiAyOiBhIGZ1bGwgZmlsZSBwYXRoIChpZ25vcmVkIGlmICdsb2NhbEZpbGUnIGlzIHNldClcclxuICAgICAgICAgICAgICAgICAgbG9jYWxGdWxsUGF0aDogcGF0aCxcclxuICAgICAgICAgICAgICAgICAgLy8gZ2V0IG5vdGlmaWVkIG9mIGZpbGUgdXBsb2FkIHByb2dyZXNzXHJcbiAgICAgICAgICAgICAgICAgIG9uUHJvZ3Jlc3M6IChzdGF0dXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlVwbG9hZGVkIGZyYWN0aW9uOiBcIiArIHN0YXR1cy5mcmFjdGlvbkNvbXBsZXRlZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJQZXJjZW50YWdlIGNvbXBsZXRlOiBcIiArIHN0YXR1cy5wZXJjZW50YWdlQ29tcGxldGVkKTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICB9KS50aGVuKCh1cGxvYWRlZEZpbGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJGaWxlIHVwbG9hZGVkOiBcIiArIEpTT04uc3RyaW5naWZ5KHVwbG9hZGVkRmlsZSkpO1xyXG4gICAgICAgICAgICAgICAgICBmaXJlYmFzZS5zdG9yYWdlLmdldERvd25sb2FkVXJsKHtcclxuICAgICAgICAgICAgICAgICAgICByZW1vdGVGdWxsUGF0aDogJ2NoYXRzLycgKyB0aGlzLmNoYXRJZCArICcvaW1hZ2VzLycgKyB0aGlzLnVzZXJJZCArICcvSU1HXycgKyBpbWdIYXNoICsgJy5wbmcnXHJcbiAgICAgICAgICAgICAgICAgIH0pLnRoZW4oKHVybCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VuZE1lc3NhZ2UodXJsKTtcclxuICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KS5jYXRjaCgoZSkgPT4ge1xyXG4gICAgICAgIC8vIHByb2Nlc3MgZXJyb3JcclxuICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaXNUaW1lT3ZlcihjaGF0MSwgY2hhdDIpIHtcclxuICAgIGNvbnN0IHRpbWUxID0gY2hhdDEudGltZTtcclxuICAgIGNvbnN0IHRpbWUyID0gY2hhdDIudGltZTtcclxuICAgIGNvbnN0IGRhdGUxID0gY2hhdDEuZGF0ZTtcclxuICAgIGNvbnN0IGRhdGUyID0gY2hhdDIuZGF0ZTtcclxuXHJcbiAgICBjb25zdCB0aW1lMVNwbGl0ID0gdGltZTEuc3BsaXQoJzonKTtcclxuICAgIGNvbnN0IHRpbWUyU3BsaXQgPSB0aW1lMi5zcGxpdCgnOicpO1xyXG5cclxuICAgIHZhciB0aW1lMVRvdGFsU2Vjb25kcyA9IHBhcnNlSW50KHRpbWUxU3BsaXRbMF0pICogMzYwMCArIHBhcnNlSW50KHRpbWUxU3BsaXRbMV0pICogNjAgKyBwYXJzZUludCh0aW1lMVNwbGl0WzJdKTtcclxuICAgIHZhciB0aW1lMlRvdGFsU2Vjb25kcyA9IHBhcnNlSW50KHRpbWUyU3BsaXRbMF0pICogMzYwMCArIHBhcnNlSW50KHRpbWUyU3BsaXRbMV0pICogNjAgKyBwYXJzZUludCh0aW1lMlNwbGl0WzJdKTtcclxuICAgIGlmKHRpbWUyVG90YWxTZWNvbmRzIC0gdGltZTFUb3RhbFNlY29uZHMgPiAoNjAgKiAzKSB8fCBkYXRlMiA+IGRhdGUxKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgYWxpZ24oaXRlbSkge1xyXG4gIFx0aWYoaXRlbS5jaGF0TWVzc2FnZS51c2VySWQgPT09IHRoaXMudXNlcklkKVxyXG4gIFx0XHRyZXR1cm4gXCJyaWdodFwiO1xyXG4gIFx0ZWxzZVxyXG4gIFx0XHRyZXR1cm4gXCJsZWZ0XCI7XHJcbiAgfVxyXG5cclxuICBhbGlnblJldmVyc2UoaXRlbSkge1xyXG4gICAgaWYoaXRlbS5jaGF0TWVzc2FnZS51c2VySWQgPT09IHRoaXMudXNlcklkKVxyXG4gICAgICByZXR1cm4gXCJsZWZ0XCI7XHJcbiAgICBlbHNlXHJcbiAgICAgIHJldHVybiBcInJpZ2h0XCI7XHJcbiAgfVxyXG5cclxuICB0ZXh0VmlzaWJpbGl0eShpdGVtKSB7XHJcbiAgICBpZihpdGVtLmNoYXRNZXNzYWdlLm1lc3NhZ2UgPT09IFwiXCIpIHtcclxuICAgICAgcmV0dXJuIFwiY29sbGFwc2VcIjtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICByZXR1cm4gXCJ2aXNpYmxlXCI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpbWdWaXNpYmlsaXR5KGl0ZW0pIHtcclxuICAgIGlmKGl0ZW0uY2hhdE1lc3NhZ2UuaW1nU291cmNlID09PSBcIlwiKSB7XHJcbiAgICAgIHJldHVybiBcImNvbGxhcHNlXCI7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgcmV0dXJuIFwidmlzaWJsZVwiO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0dXBJdGVtVmlldyhhcmdzKSB7XHJcbiAgXHRhcmdzLnZpZXcuY29udGV4dC5taW5lID0gKHRoaXMubWVzc2FnZXMuZ2V0SXRlbShhcmdzLmluZGV4KS5jaGF0TWVzc2FnZS51c2VySWQgPT09IHRoaXMudXNlcklkKTtcclxuICBcdGFyZ3Mudmlldy5jb250ZXh0LnRoZWlycyA9ICh0aGlzLm1lc3NhZ2VzLmdldEl0ZW0oYXJncy5pbmRleCkuY2hhdE1lc3NhZ2UudXNlcklkICE9PSB0aGlzLnVzZXJJZCk7XHJcbiAgICBhcmdzLnZpZXcuY29udGV4dC5taW5lQ29udGludWF0aW9uID0gKHRoaXMubWVzc2FnZXMuZ2V0SXRlbShhcmdzLmluZGV4KS5taW5lQ29udGludWF0aW9uKTtcclxuICAgIGFyZ3Mudmlldy5jb250ZXh0LnRoZWlyc0NvbnRpbnVhdGlvbiA9ICh0aGlzLm1lc3NhZ2VzLmdldEl0ZW0oYXJncy5pbmRleCkudGhlaXJzQ29udGludWF0aW9uKTtcclxuICAgIGFyZ3Mudmlldy5jb250ZXh0Lm1pbmVDb250aW51YXRpb25HcmlkID0gKHRoaXMubWVzc2FnZXMuZ2V0SXRlbShhcmdzLmluZGV4KS5taW5lQ29udGludWF0aW9uKTtcclxuICAgIGFyZ3Mudmlldy5jb250ZXh0LnRoZWlyc0NvbnRpbnVhdGlvbkdyaWQgPSAodGhpcy5tZXNzYWdlcy5nZXRJdGVtKGFyZ3MuaW5kZXgpLnRoZWlyc0NvbnRpbnVhdGlvbik7XHJcblxyXG4gICAgYXJncy52aWV3LmNvbnRleHQuZ3JpZCA9ICghYXJncy52aWV3LmNvbnRleHQudGhlaXJzQ29udGludWF0aW9uICYmICFhcmdzLnZpZXcuY29udGV4dC5taW5lQ29udGludWF0aW9uKTtcclxuICAgIGFyZ3Mudmlldy5jb250ZXh0Lm1pbmVUaW1lID0gKCFhcmdzLnZpZXcuY29udGV4dC5taW5lQ29udGludWF0aW9uICYmIGFyZ3Mudmlldy5jb250ZXh0Lm1pbmUpO1xyXG4gICAgYXJncy52aWV3LmNvbnRleHQudGhlaXJzVGltZSA9ICghYXJncy52aWV3LmNvbnRleHQudGhlaXJzQ29udGludWF0aW9uICYmIGFyZ3Mudmlldy5jb250ZXh0LnRoZWlycyk7XHJcblxyXG4gICAgYXJncy52aWV3LmNvbnRleHQudGhlaXJzSW1nID0gYXJncy52aWV3LmNvbnRleHQudGhlaXJzQ29udGludWF0aW9uO1xyXG4gICAgYXJncy52aWV3LmNvbnRleHQuaW1nID0gIWFyZ3Mudmlldy5jb250ZXh0LnRoZWlyc0ltZztcclxuICAgIFxyXG4gICAgYXJncy52aWV3LmNvbnRleHQudGltZSA9ICghYXJncy52aWV3LmNvbnRleHQubWluZVRpbWUgJiYgIWFyZ3Mudmlldy5jb250ZXh0LnRoZWlyc1RpbWUpICAgIFxyXG4gICAgYXJncy52aWV3LmNvbnRleHQuZXZlbiA9IChhcmdzLmluZGV4ICUgMiA9PT0gMCk7XHJcbiAgXHRhcmdzLnZpZXcuY29udGV4dC5vZGQgPSAoYXJncy5pbmRleCAlIDIgPT09IDEpO1xyXG4gIH1cclxuXHJcbiAgb25OYXZCdG5UYXAoKSB7XHJcbiAgXHRpZih0aGlzLnJvdXRlci5jYW5Hb0JhY2soKSlcclxuICBcdFx0dGhpcy5yb3V0ZXIuYmFjaygpO1xyXG4gIFx0ZWxzZVxyXG4gIFx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ2NoYXQtbGlzdCddLCB7Y2xlYXJIaXN0b3J5OiB0cnVlfSk7XHJcbiAgfVxyXG5cclxuICBvblRleHRUYXAoKSB7XHJcbiAgICB0aGlzLmxpc3Quc2Nyb2xsVG9JbmRleCh0aGlzLm1lc3NhZ2VzLmxlbmd0aCAtIDEpO1xyXG4gIH1cclxuXHJcbiAgdG9WaWV3SW1hZ2UoaW1nU291cmNlKSB7XHJcbiAgICB0aGlzLnRyYW5zZmVyU2VydmljZS5zZXREYXRhKGltZ1NvdXJjZSk7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ3ZpZXctaW1hZ2UnXSk7XHJcbiAgfVxyXG5cclxuICBsb2FkTW9yZURhdGEoKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZygnTG9hZCBtb3JlJylcclxuICB9XHJcblxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCIvKiBBZGQgbW9iaWxlIHN0eWxlcyBmb3IgdGhlIGNvbXBvbmVudCBoZXJlLiAgKi9cXG4uZGVsZXRlLWJ0biB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBjb2xvcjogI2FjMDBlNjtcXG4gICAgLypwYWRkaW5nOiA2cHggMjRweDsqL1xcbiAgICBib3JkZXItd2lkdGg6IDE7XFxuICAgIGJvcmRlci1jb2xvcjogI2FjMDBlNjtcXG4gICAgYm9yZGVyLXJhZGl1czogNTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmbG9hdDogY2VudGVyO1xcbiAgICBtYXJnaW46IGF1dG87IFxcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBmb250LWZhbWlseTogXFxcIlNlZ29lIFVJXFxcIixBcmlhbCxzYW5zLXNlcmlmO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxNTtcXG4gICAgd2lkdGg6IDEyMDtcXG4gICAgaGVpZ2h0OiA0MDtcXG4gICAgaG9yaXpvbnRhbC1hbGlnbjpyaWdodDtcXG59XFxuXFxuLmRlbGV0ZS1idG46aGlnaGxpZ2h0ZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjllNmZmO1xcbn1cXG5cXG4uY2FuY2VsLWJ0biB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAvKmNvbG9yOiB3aGl0ZTsqL1xcbiAgICAvKnBhZGRpbmc6IDZweCAyNHB4OyovXFxuICAgIGJvcmRlci13aWR0aDogMTtcXG4gICAgYm9yZGVyLWNvbG9yOiBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogNTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmbG9hdDogY2VudGVyO1xcbiAgICBtYXJnaW46IGF1dG87IFxcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBmb250LWZhbWlseTogXFxcIlNlZ29lIFVJXFxcIixBcmlhbCxzYW5zLXNlcmlmO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNTtcXG4gICAgbWFyZ2luLWxlZnQ6IDE1O1xcbiAgICB3aWR0aDogMTIwO1xcbiAgICBoZWlnaHQ6IDQwO1xcbiAgICBob3Jpem9udGFsLWFsaWduOmxlZnQ7XFxufVxcblxcbi5jYW5jZWwtYnRuOmhpZ2hsaWdodGVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcXG59XFxuXFxuLmRlbGV0ZS1sYWJlbCB7XFxuXFx0Zm9udC1zaXplOiAyMDtcXG5cXHRtYXJnaW4tdG9wOiAxODtcXG5cXHRtYXJnaW4tYm90dG9tOiA0ODtcXG5cXHRtYXJnaW4tbGVmdDogMTg7XFxuXFx0bWFyZ2luLXJpZ2h0OiAxODtcXG5cXHRjb2xvcjogYmxhY2s7XFxufVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxTdGFja0xheW91dD5cXHJcXG5cXHQ8TGFiZWwgdGV4dFdyYXA9XFxcInRydWVcXFwiIHRleHQ9XFxcIkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGU/XFxcIiBjbGFzcz1cXFwiZGVsZXRlLWxhYmVsXFxcIj48L0xhYmVsPlxcclxcblxcdDxHcmlkTGF5b3V0IHJvd3M9XFxcImF1dG9cXFwiIGNvbHVtbnM9XFxcIipcXFwiPlxcclxcblxcdFxcdDxCdXR0b24gcm93PVxcXCIwXFxcIiB0ZXh0PVxcXCJDYW5jZWxcXFwiIGNsYXNzPVxcXCJjYW5jZWwtYnRuXFxcIiAodGFwKT1cXFwiY2xvc2UoJ2NhbmNlbCcpXFxcIj48L0J1dHRvbj5cXHJcXG5cXHRcXHQ8QnV0dG9uIHJvdz1cXFwiMFxcXCIgdGV4dD1cXFwiRGVsZXRlXFxcIiBjbGFzcz1cXFwiZGVsZXRlLWJ0blxcXCIgKHRhcCk9XFxcImNsb3NlKCdkZWxldGUnKVxcXCI+PC9CdXR0b24+XFxyXFxuXFx0PC9HcmlkTGF5b3V0PlxcclxcbjwvU3RhY2tMYXlvdXQ+XCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNb2RhbERpYWxvZ1BhcmFtcyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9kaXJlY3RpdmVzL2RpYWxvZ3NcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLWNvbmZpcm1hdGlvbicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbmZpcm1hdGlvbi5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY29uZmlybWF0aW9uLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29uZmlybWF0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwYXJhbXM6IE1vZGFsRGlhbG9nUGFyYW1zKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG5cclxuICBjbG9zZShyZXMpIHtcclxuICBcdHRoaXMucGFyYW1zLmNsb3NlQ2FsbGJhY2socmVzKTtcclxuICB9XHJcblxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCIvKlxcbkFkZCB5b3VyIE5hdGl2ZVNjcmlwdCBzcGVjaWZpYyBzdHlsZXMgaGVyZS5cXG5UbyBsZWFybiBtb3JlIGFib3V0IHN0eWxpbmcgaW4gTmF0aXZlU2NyaXB0IHNlZTpcXG5odHRwczovL2RvY3MubmF0aXZlc2NyaXB0Lm9yZy9hbmd1bGFyL3VpL3N0eWxpbmdcXG4qL1wiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxTdGFja0xheW91dD5cXG4gIDxMYWJlbCB0ZXh0PVxcXCJjb25uZWN0IHdvcmtzXFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCI+PC9MYWJlbD5cXG4gIDxMYWJlbCB0ZXh0PVxcXCJUaGlzIGlzIGEgbWlncmF0ZWQgY29tcG9uZW50XFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCI+PC9MYWJlbD5cXG4gIDxMYWJlbCB0ZXh0PVxcXCJVcGRhdGUgaXQgdG8gcHJvdmlkZSB0aGUgVUkgZWxlbWVudHMgcmVxdWlyZWQgaW4geW91ciBtb2JpbGUgYXBwXFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCI+PC9MYWJlbD5cXG48L1N0YWNrTGF5b3V0PlxcblxcbjwhLS1cXG5PcmlnaW5hbCBXZWIgdGVtcGxhdGU6XFxuXFxuPHA+XFxyXFxuICBjb25uZWN0IHdvcmtzIVxcclxcbjwvcD5cXHJcXG5cXG4tLT5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IExvZ2luY2hlY2tTZXJ2aWNlIH0gZnJvbSAnLi4vbG9naW5jaGVjay5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLWNvbm5lY3QnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jb25uZWN0LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jb25uZWN0LmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29ubmVjdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbG9naW5jaGVja1NlcnZpY2U6IExvZ2luY2hlY2tTZXJ2aWNlKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgXHR0aGlzLmxvZ2luY2hlY2tTZXJ2aWNlLmxvZ2luQ2hlY2soKTtcclxuICB9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFRyYW5zZmVyU2VydmljZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOlJvdXRlcikgeyB9XHJcblxyXG4gIHByaXZhdGUgZGF0YTtcclxuXHJcbiAgc2V0RGF0YShkYXRhKXtcclxuICAgIHRoaXMuZGF0YSA9IGRhdGE7XHJcbiAgfVxyXG5cclxuICBnZXREYXRhKCl7XHJcbiAgICBsZXQgdGVtcCA9IHRoaXMuZGF0YTtcclxuICAgIHRoaXMuY2xlYXJEYXRhKCk7XHJcbiAgICByZXR1cm4gdGVtcDtcclxuICB9XHJcblxyXG4gIGNsZWFyRGF0YSgpe1xyXG4gICAgdGhpcy5kYXRhID0gdW5kZWZpbmVkO1xyXG4gIH1cclxuXHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IFwicCB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2Q4YzNlYztcXHJcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNjbG9zZS1kaWFsb2cge1xcclxcblxcdGZsb2F0OiByaWdodDtcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlIHtcXHJcXG5cXHRmb250LWNvbG9yOiBibGFjaztcXHJcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcclxcbiAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNWVtO1xcclxcbn1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8cCBpZD1cXFwiZGlhbG9nXFxcIj5cXG4gIFlvdXIgc2V0dGluZ3MgaGF2ZSBiZWVuIHVwZGF0ZWQhXFxuICA8c3BhbiBjbGFzcz1cXFwiY2xvc2VcXFwiIGlkPVxcXCJjbG9zZS1kaWFsb2dcXFwiPiZ0aW1lczs8L3NwYW4+XFxuPC9wPlxcblwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWRpYWxvZycsXG4gIHRlbXBsYXRlVXJsOiAnLi9kaWFsb2cuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9kaWFsb2cuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIERpYWxvZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgXHRcbiAgfVxuXG59XG4iLCJpbXBvcnQge1xyXG4gICAgSW5qZWN0YWJsZSxcclxuICAgIEluamVjdG9yLFxyXG4gICAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG4gICAgRW1iZWRkZWRWaWV3UmVmLFxyXG4gICAgQXBwbGljYXRpb25SZWZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IFBvc3RpbmdDb21wb25lbnQgfSBmcm9tICcuL3Bvc3RpbmcvcG9zdGluZy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQYXltZW50TWV0aG9kQ29tcG9uZW50IH0gZnJvbSAnLi9wYXltZW50LW1ldGhvZC9wYXltZW50LW1ldGhvZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUcmFuc2ZlclNlcnZpY2UgfSBmcm9tICcuL2RhdGF0cmFuc2Zlci5zZXJ2aWNlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIER5bmFtaWNBZGRTZXJ2aWNlIHtcclxuICBcclxuICBjb25zdHJ1Y3RvcihcclxuICAgICAgcHJpdmF0ZSBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuICAgICAgcHJpdmF0ZSBhcHBSZWY6IEFwcGxpY2F0aW9uUmVmLFxyXG4gICAgICBwcml2YXRlIGluamVjdG9yOiBJbmplY3RvcixcclxuICAgICAgcHJpdmF0ZSB0cmFuc2ZlclNlcnZpY2U6IFRyYW5zZmVyU2VydmljZSxcclxuICApIHsgfVxyXG4gIFxyXG4gIGFwcGVuZENvbXBvbmVudFRvQm9keShsYXlvdXQ9bnVsbCkge1xyXG4gICAgLy8gMS4gQ3JlYXRlIGEgY29tcG9uZW50IHJlZmVyZW5jZSBmcm9tIHRoZSBjb21wb25lbnQgXHJcbiAgICBjb25zdCBjb21wb25lbnRSZWYgPSB0aGlzLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlclxyXG4gICAgICAucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoUG9zdGluZ0NvbXBvbmVudClcclxuICAgICAgLmNyZWF0ZSh0aGlzLmluamVjdG9yKTtcclxuICAgIC8vIDIuIEF0dGFjaCBjb21wb25lbnQgdG8gdGhlIGFwcFJlZiBzbyB0aGF0IGl0J3MgaW5zaWRlIHRoZSBuZyBjb21wb25lbnQgdHJlZVxyXG4gICAgdGhpcy5hcHBSZWYuYXR0YWNoVmlldyhjb21wb25lbnRSZWYuaG9zdFZpZXcpO1xyXG4gICAgLy8gMy4gR2V0IERPTSBlbGVtZW50IGZyb20gY29tcG9uZW50XHJcbiAgICBjb25zdCBkb21FbGVtID0gKGNvbXBvbmVudFJlZi5ob3N0VmlldyBhcyBFbWJlZGRlZFZpZXdSZWY8YW55PilcclxuICAgICAgLnJvb3ROb2Rlc1swXTtcclxuICAgIC8vIDQuIEFwcGVuZCBET00gZWxlbWVudCB0byB0aGUgYm9keVxyXG4gICAgbGF5b3V0LmFkZENoaWxkKGRvbUVsZW0pXHJcbiAgfVxyXG5cclxuICBhcHBlbmRQYXltZW50TWV0aG9kKG1ldGhvZCwgaW5mbywgc3VwZXJib2R5LCBpc0FkZCwgdG9rZW4pIHtcclxuXHJcbiAgfVxyXG59IiwiaW1wb3J0IHtcclxuICAgIEluamVjdGFibGUsXHJcbiAgICBJbmplY3RvcixcclxuICAgIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuICAgIEVtYmVkZGVkVmlld1JlZixcclxuICAgIEFwcGxpY2F0aW9uUmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBQb3N0aW5nQ29tcG9uZW50IH0gZnJvbSAnLi9wb3N0aW5nL3Bvc3RpbmcuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGF5bWVudE1ldGhvZENvbXBvbmVudCB9IGZyb20gJy4vcGF5bWVudC1tZXRob2QvcGF5bWVudC1tZXRob2QuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVHJhbnNmZXJTZXJ2aWNlIH0gZnJvbSAnLi9kYXRhdHJhbnNmZXIuc2VydmljZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBEeW5hbWljQWRkU2VydmljZSB7XHJcbiAgXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICAgIHByaXZhdGUgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcbiAgICAgIHByaXZhdGUgYXBwUmVmOiBBcHBsaWNhdGlvblJlZixcclxuICAgICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsXHJcbiAgICAgIHByaXZhdGUgdHJhbnNmZXJTZXJ2aWNlOiBUcmFuc2ZlclNlcnZpY2UsXHJcbiAgKSB7IH1cclxuICBcclxuICBhcHBlbmRDb21wb25lbnRUb0JvZHkobGF5b3V0PW51bGwpIHtcclxuICAgIC8vIDEuIENyZWF0ZSBhIGNvbXBvbmVudCByZWZlcmVuY2UgZnJvbSB0aGUgY29tcG9uZW50IFxyXG4gICAgY29uc3QgY29tcG9uZW50UmVmID0gdGhpcy5jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXJcclxuICAgICAgLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KFBvc3RpbmdDb21wb25lbnQpXHJcbiAgICAgIC5jcmVhdGUodGhpcy5pbmplY3Rvcik7XHJcbiAgICAvLyAyLiBBdHRhY2ggY29tcG9uZW50IHRvIHRoZSBhcHBSZWYgc28gdGhhdCBpdCdzIGluc2lkZSB0aGUgbmcgY29tcG9uZW50IHRyZWVcclxuICAgIHRoaXMuYXBwUmVmLmF0dGFjaFZpZXcoY29tcG9uZW50UmVmLmhvc3RWaWV3KTtcclxuICAgIC8vIDMuIEdldCBET00gZWxlbWVudCBmcm9tIGNvbXBvbmVudFxyXG4gICAgY29uc3QgZG9tRWxlbSA9IChjb21wb25lbnRSZWYuaG9zdFZpZXcgYXMgRW1iZWRkZWRWaWV3UmVmPGFueT4pXHJcbiAgICAgIC5yb290Tm9kZXNbMF07XHJcbiAgICAvLyA0LiBBcHBlbmQgRE9NIGVsZW1lbnQgdG8gdGhlIGJvZHlcclxuICAgIGxheW91dC5hZGRDaGlsZChkb21FbGVtKVxyXG4gIH1cclxuXHJcbiAgYXBwZW5kUGF5bWVudE1ldGhvZChtZXRob2QsIGluZm8sIHN1cGVyYm9keSwgaXNBZGQsIHRva2VuKSB7XHJcblxyXG4gIH1cclxufSIsIm1vZHVsZS5leHBvcnRzID0gXCIuZmxvYXQtYnRuIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjYWMwMGU2O1xcclxcblxcdHdpZHRoOiA1NjtcXHJcXG5cXHRoZWlnaHQ6IDU2O1xcclxcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmZsb2F0LWJ0bi10ZXh0IHtcXHJcXG5cXHRjb2xvcjogI2ZmZmZmZjtcXHJcXG5cXHRmb250LXNpemU6IDM2O1xcclxcblxcdC8qbWFyZ2luLXRvcDogLTY7Ki9cXHJcXG59XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJmbG9hdC1idG5cXFwiPlxcclxcblxcdDxMYWJlbCBjbGFzcz1cXFwiZmxvYXQtYnRuLXRleHRcXFwiIHRleHQ9XFxcIitcXFwiPjwvTGFiZWw+XFxyXFxuPC9TdGFja0xheW91dD5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1mbG9hdC1idG4nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9mbG9hdC1idG4uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2Zsb2F0LWJ0bi5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEZsb2F0QnRuQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHb29nbGVNYXBzU2VydmljZSB7XHJcblxyXG4gIEFQSV9LRVkgPSAnQUl6YVN5QUlUeFMxam1mOFBNdGF6Umd1V2NBZldReFcxa1BPb1lnJztcclxuICBzdGF0aWNfbWFwc191cmkgPSAnaHR0cHM6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL3N0YXRpY21hcD9rZXk9JyArIHRoaXMuQVBJX0tFWSArICcmc2l6ZT0zNDB4MjIwJnNjYWxlPTImbWFwdHlwZT1yb2FkbWFwXFwmbWFya2Vycz1zaXplOnNtYWxsJTdDY29sb3I6cmVkJTdDJ1xyXG4gIHN0YXRpY19tYXBzX3VyaV9sYXJnZSA9ICdodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvc3RhdGljbWFwP2tleT0nICsgdGhpcy5BUElfS0VZICsgJyZzaXplPTUxMng1MTImc2NhbGU9MiZtYXB0eXBlPXJvYWRtYXBcXCZtYXJrZXJzPXNpemU6c21hbGwlN0Njb2xvcjpyZWQlN0MnXHJcbiAgXHJcbiAgZ2VvY29kZV91cmkgPSAnaHR0cHM6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL2dlb2NvZGUvanNvbj9rZXk9JyArIHRoaXMuQVBJX0tFWSArICcmYWRkcmVzcz0nXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwQ2xpZW50OiBIdHRwQ2xpZW50KSB7IH1cclxuXHJcbiAgZ2V0U3RhdGljTWFwKHN0YXJ0YWRyLCBlbmRhZHIpIHtcclxuICBcdHZhciBmb3JtYXR0ZWRfc3RhcnRhZHIgPSBzdGFydGFkci5zcGxpdCgnICcpLmpvaW4oJysnKVxyXG4gIFx0dmFyIGZvcm1hdHRlZF9zdGFydGFkciA9IHN0YXJ0YWRyLnNwbGl0KCcmJykuam9pbignYW5kJylcclxuICBcdHZhciBmb3JtYXR0ZWRfZW5kYWRyID0gZW5kYWRyLnNwbGl0KCcgJykuam9pbignKycpXHJcbiAgXHR2YXIgZm9ybWF0dGVkX2VuZGFkciA9IGVuZGFkci5zcGxpdCgnJicpLmpvaW4oJ2FuZCcpXHJcbiAgXHRyZXR1cm4gdGhpcy5zdGF0aWNfbWFwc191cmkgKyBmb3JtYXR0ZWRfc3RhcnRhZHIgKyBcIiZtYXJrZXJzPXNpemU6bWVkJTdDXCIgKyBmb3JtYXR0ZWRfZW5kYWRyO1xyXG4gIH1cclxuXHJcbiAgZ2V0U3RhdGljTWFwTGFyZ2Uoc3RhcnRhZHIsIGVuZGFkcikge1xyXG4gIFx0dmFyIGZvcm1hdHRlZF9zdGFydGFkciA9IHN0YXJ0YWRyLnNwbGl0KCcgJykuam9pbignKycpXHJcbiAgXHR2YXIgZm9ybWF0dGVkX3N0YXJ0YWRyID0gc3RhcnRhZHIuc3BsaXQoJyYnKS5qb2luKCdhbmQnKVxyXG4gIFx0dmFyIGZvcm1hdHRlZF9lbmRhZHIgPSBlbmRhZHIuc3BsaXQoJyAnKS5qb2luKCcrJylcclxuICBcdHZhciBmb3JtYXR0ZWRfZW5kYWRyID0gZW5kYWRyLnNwbGl0KCcmJykuam9pbignYW5kJylcclxuICBcdHJldHVybiB0aGlzLnN0YXRpY19tYXBzX3VyaV9sYXJnZSArIGZvcm1hdHRlZF9zdGFydGFkciArIFwiJm1hcmtlcnM9c2l6ZTptZWQlN0NcIiArIGZvcm1hdHRlZF9lbmRhZHI7XHJcbiAgfVxyXG5cclxuICBnZXRHZW9jb2RlUmVzdWx0cyhhZGRyZXNzKSB7XHJcbiAgXHR2YXIgZm9ybWF0dGVkX2FkZHJlc3MgPSBhZGRyZXNzLnNwbGl0KCcgJykuam9pbignKycpXHJcbiAgXHR2YXIgZm9ybWF0dGVkX2FkZHJlc3MgPSBhZGRyZXNzLnNwbGl0KCcmJykuam9pbignYW5kJylcclxuICBcdHJldHVybiB0aGlzLmh0dHBDbGllbnQuZ2V0KGAke3RoaXMuZ2VvY29kZV91cml9YCArIGZvcm1hdHRlZF9hZGRyZXNzKTtcclxuICB9XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi8qXFxuQWRkIHlvdXIgTmF0aXZlU2NyaXB0IHNwZWNpZmljIHN0eWxlcyBoZXJlLlxcblRvIGxlYXJuIG1vcmUgYWJvdXQgc3R5bGluZyBpbiBOYXRpdmVTY3JpcHQgc2VlOlxcbmh0dHBzOi8vZG9jcy5uYXRpdmVzY3JpcHQub3JnL2FuZ3VsYXIvdWkvc3R5bGluZ1xcbiovXFxuXFxuLmFjdGlvbmJhciB7XFxuXFx0Zm9udC1zaXplOiAyMjtcXG5cXHRmb250LXdlaWdodDogNzAwO1xcblxcdHRleHQtYWxpZ246IGxlZnQ7XFxuXFx0Y29sb3I6IGJsYWNrO1xcbn1cXG5cXG5MYWJlbCB7XFxuXFx0dGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXFxuLm5hbWUtbGFiZWwge1xcblxcdG1hcmdpbi10b3A6IDE2O1xcblxcdG1hcmdpbi1sZWZ0OiAxODtcXG5cXHRjb2xvcjogYmxhY2s7XFxuXFx0Zm9udC13ZWlnaHQ6IDcwMDtcXG5cXHRmb250LXNpemU6IDE3O1xcbn1cXG5cXG4uaW5mby1sYWJlbCB7XFxuXFx0bWFyZ2luLXRvcDogNDtcXG5cXHRtYXJnaW4tbGVmdDogMTg7XFxuXFx0bWFyZ2luLWJvdHRvbTogMTY7XFxuXFx0Y29sb3I6IGJsYWNrO1xcbn1cXG5cXG4ucG9zdCB7XFxuXFx0Ym9yZGVyLWJvdHRvbS13aWR0aDogMTtcXG5cXHRib3JkZXItY29sb3I6ICNmMWYxZjE7XFxuXFx0bWFyZ2luLXRvcDogMTUwO1xcblxcdG1hcmdpbi1ib3R0b206IDE1O1xcbn1cXG5cXG4ucG9zdDpoaWdobGlnaHRlZCB7XFxuXFx0LypiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxOyovXFxufVxcblxcbi5wb3N0aW5nLW1hcCB7XFxuXFx0bWFyZ2luLWJvdHRvbTogMTY7XFxuXFx0Ym9yZGVyLXJhZGl1czogMTA7XFxuXFx0aGVpZ2h0OiAyMjA7XFxuXFx0d2lkdGg6IDM0MDtcXG59XFxuXFxuLnByb2ZpbGUtcGljdHVyZSB7XFxuXFx0aGVpZ2h0OiA1MDtcXG5cXHR3aWR0aDogNTA7XFxuXFx0Ym9yZGVyLXJhZGl1czogMTAwJTtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcblxcdG1hcmdpbi1sZWZ0OiAxNjtcXG5cXHRtYXJnaW4tdG9wOiAyMDtcXG59XFxuXFxuLnJlZnJlc2gge1xcblxcdGNvbG9yOiAjYWMwMGU2O1xcbn1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8IS0tIDxhcHAtbmF2aWdhdGlvbj48L2FwcC1uYXZpZ2F0aW9uPiAtLT5cXHJcXG48UHVsbFRvUmVmcmVzaCAocmVmcmVzaCk9XFxcInJlZnJlc2hMaXN0KCRldmVudClcXFwiIGNsYXNzPVxcXCJyZWZyZXNoXFxcIj5cXHJcXG5cXHQ8TGlzdFZpZXcgW2l0ZW1zXT1cXFwicG9zdGluZ3NcXFwiIChpdGVtVGFwKT1cXFwib25JdGVtVGFwKCRldmVudClcXFwiICNsaXN0VmlldyBpZD1cXFwibGlzdFZpZXdcXFwiPlxcclxcblxcdCAgICA8bmctdGVtcGxhdGUgbGV0LWl0ZW09XFxcIml0ZW1cXFwiIGxldC1pPVxcXCJpbmRleFxcXCIgbGV0LW9kZD1cXFwib2RkXFxcIiBsZXQtZXZlbj1cXFwiZXZlblxcXCI+XFxyXFxuXFx0ICAgICAgICA8U3RhY2tMYXlvdXQgW2NsYXNzLm9kZF09XFxcIm9kZFxcXCIgW2NsYXNzLmV2ZW5dPVxcXCJldmVuXFxcIiBjbGFzcz1cXFwicG9zdFxcXCI+XFxyXFxuXFx0ICAgICAgICBcXHQgIDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cXFwiaG9yaXpvbnRhbFxcXCI+XFxyXFxuXFx0ICAgICAgICBcXHQgIFxcdDxJbWFnZSBbc3JjXT1cXFwiaXRlbS5wcm9maWxlU291cmNlXFxcIiBjbGFzcz1cXFwicHJvZmlsZS1waWN0dXJlXFxcIiBzdHJldGNoPVxcXCJhc3BlY3RGaXRcXFwiPjwvSW1hZ2U+XFxyXFxuXFx0ICAgICAgICBcXHQgIFxcdDxTdGFja0xheW91dD5cXHJcXG5cXHRcXHQgICAgICAgICAgICAgIFxcdDxMYWJlbCB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgaWQ9XFxcInBvc3QtbmFtZVxcXCIgY2xhc3M9XFxcIm5hbWUtbGFiZWxcXFwiIFt0ZXh0XT1cXFwiaXRlbS51c2VybmFtZVxcXCI+PC9MYWJlbD5cXHJcXG5cXHRcXHQgICAgICAgICAgICAgIFxcdDxMYWJlbCB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgaWQ9XFxcInBvc3QtaW5mb1xcXCIgY2xhc3M9XFxcImluZm8tbGFiZWxcXFwiIFt0ZXh0XT1cXFwiaXRlbS5pbmZvXFxcIj48L0xhYmVsPlxcclxcblxcdFxcdCAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxyXFxuXFx0ICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcclxcblxcdFxcdFxcdFxcdCAgPEltYWdlIFtzcmNdPVxcXCJpdGVtLm1hcFNvdXJjZVxcXCIgc3RyZXRjaD1cXFwiYXNwZWN0Rml0XFxcIiBjbGFzcz1cXFwicG9zdGluZy1tYXBcXFwiPjwvSW1hZ2U+XFxyXFxuXFx0ICAgICAgICA8L1N0YWNrTGF5b3V0PlxcclxcblxcdCAgICA8L25nLXRlbXBsYXRlPlxcclxcblxcdDwvTGlzdFZpZXc+XFxyXFxuPC9QdWxsVG9SZWZyZXNoPlxcclxcblxcclxcbjwhLS1cXHJcXG5PcmlnaW5hbCBXZWIgdGVtcGxhdGU6XFxyXFxuXFxyXFxuPGFwcC1uYXZpZ2F0aW9uPjwvYXBwLW5hdmlnYXRpb24+XFxyXFxuXFxyXFxuPGRpdiBjbGFzcz1cXFwicmlnaHQtYmFja2dyb3VuZFxcXCI+XFxyXFxuXFx0PGRpdiBjbGFzcz1cXFwidXNlci1jYXJkLXJpZ2h0IGluZm9cXFwiPlxcclxcblxcdFxcdDxpbWcgc3JjPVxcXCJzcmMvaW1nL3NhbXBsZV9wcm9maWxlLmpwZ1xcXCIgYWx0PVxcXCJQcm9maWxlIFBob3RvXFxcIiBpZD1cXFwicHJvZmlsZV9waWNcXFwiPlxcclxcblxcdFxcdDxkaXYgaWQ9XFxcIm5hbWVfaW5mb1xcXCI+XFxyXFxuXFx0XFx0XFx0PGgzIGlkPVxcXCJ1c2VybmFtZVxcXCI+e3t1c2VyLm5hbWV9fTwvaDM+XFxyXFxuXFx0XFx0XFx0PGgzIGlkPVxcXCJ1c2VyX3VuaXZlcnNpdHlcXFwiPlVuaXZlcnNpdHkgb2YgVmlyZ2luaWE8L2gzPlxcclxcblxcdFxcdDwvZGl2PlxcclxcblxcdFxcdDxkaXYgY2xhc3M9XFxcInVzZXJTdGF0c1xcXCI+XFxyXFxuXFx0XFx0XFx0PHNwYW4gaWQ9XFxcInVzZXJfcmlkZXNfZ2l2ZW5cXFwiIGNsYXNzPVxcXCJ1c2VyRGF0YVxcXCI+UmlkZXMgR2l2ZW46IDwvc3Bhbj5cXHJcXG5cXHRcXHRcXHQ8c3BhbiBpZD1cXFwibnVtX3JpZGVzX2dpdmVuXFxcIj48L3NwYW4+XFxyXFxuXFx0XFx0XFx0PHNwYW4gaWQ9XFxcInVzZXJfcmlkZXNfcmVjZWl2ZWRcXFwiIGNsYXNzPVxcXCJ1c2VyRGF0YVxcXCI+UmlkZXMgUmVjZWl2ZWQ6IDwvc3Bhbj5cXHJcXG5cXHRcXHRcXHQ8c3BhbiBpZD1cXFwibnVtX3JpZGVzX3JlY2VpdmVkXFxcIj48L3NwYW4+XFxyXFxuXFx0XFx0PC9kaXY+XFxyXFxuXFx0PC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuPGRpdiBpZD1cXFwiaGlzdG9yeVxcXCIgY2xhc3M9XFxcInRhYmNvbnRlbnRcXFwiPlxcclxcblxcdDxoMyBhbGlnbj1cXFwiY2VudGVyXFxcIj5Zb3VyIFJpZGVzPC9oMz5cXHJcXG5cXHQ8ZGl2IGlkPVxcXCJiaWdmZWVkXFxcIiAod2luZG93OnJlc2l6ZSk9XFxcIm9uUmVzaXplKCRldmVudClcXFwiPjwvZGl2PlxcclxcbjwvZGl2Plxcclxcbi0tPlwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUcmFuc2ZlclNlcnZpY2UgfSBmcm9tICcuLi9kYXRhdHJhbnNmZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFBvc3RpbmdTZXJ2aWNlIH0gZnJvbSAnLi4vcG9zdGluZy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUG9zdGluZyB9IGZyb20gJy4uL3Bvc3RpbmcubW9kZWwnO1xyXG5pbXBvcnQgeyBEeW5hbWljQWRkU2VydmljZSB9IGZyb20gJy4uL2R5bmFtaWMtYWRkLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBMb2dpbmNoZWNrU2VydmljZSB9IGZyb20gJy4uL2xvZ2luY2hlY2suc2VydmljZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGVBcnJheSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlLWFycmF5JztcclxuaW1wb3J0ICogYXMgZmlyZWJhc2UgZnJvbSAnbmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZSc7XHJcbmltcG9ydCB7IExpc3RWaWV3IH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9saXN0LXZpZXcnO1xyXG5pbXBvcnQgeyBJbWFnZVNvdXJjZSwgZnJvbUZpbGUsIGZyb21SZXNvdXJjZSwgZnJvbUJhc2U2NCwgZnJvbU5hdGl2ZVNvdXJjZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2ltYWdlLXNvdXJjZVwiO1xyXG5pbXBvcnQgeyBGb2xkZXIsIHBhdGgsIGtub3duRm9sZGVycyB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2ZpbGUtc3lzdGVtXCI7XHJcbmltcG9ydCB7IENhY2hlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvaW1hZ2UtY2FjaGVcIjtcclxuXHJcblxyXG5jbGFzcyBQb3N0SXRlbSB7XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgdXNlcm5hbWU6IFN0cmluZywgcHVibGljIGluZm86IHN0cmluZywgcHVibGljIHByb2ZpbGVTb3VyY2U6IHN0cmluZywgcHVibGljIG1hcFNvdXJjZTogc3RyaW5nKSB7IH1cclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtaGlzdG9yeScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2hpc3RvcnkuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2hpc3RvcnkuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIaXN0b3J5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgQFZpZXdDaGlsZCgnbGlzdFZpZXcnLCB7IHN0YXRpYzogdHJ1ZSB9KSBsdjogRWxlbWVudFJlZjtcclxuICAvL3VzZXIgPSB0aGlzLmxvZ2luY2hlY2tTZXJ2aWNlLmdldFVzZXIoKTtcclxuICB1c2VyID0gJyc7XHJcbiAgbmFtZSA9IFwiQWRhbSBZZWVcIjtcclxuICBibG9ja3MgPSAwO1xyXG4gIHBvc3RpbmdzID0gbmV3IE9ic2VydmFibGVBcnJheTxQb3N0SXRlbT4oKTtcclxuICBwID0gW107XHJcbiAgaWRzID0gW107XHJcbiAgLy8gY2FjaGUgPSBuZXcgQ2FjaGUoKTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBsb2dpbmNoZWNrU2VydmljZTogTG9naW5jaGVja1NlcnZpY2UsIHByaXZhdGUgdHJhbnNmZXJTZXJ2aWNlOiBUcmFuc2ZlclNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgcG9zdGluZ1NlcnZpY2U6IFBvc3RpbmdTZXJ2aWNlLCBwcml2YXRlIGFkZFNlcnZpY2U6IER5bmFtaWNBZGRTZXJ2aWNlKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgXHR0aGlzLmxvZ2luY2hlY2tTZXJ2aWNlLmxvZ2luQ2hlY2soKTtcclxuICBcdHRoaXMudXNlciA9IHRoaXMubG9naW5jaGVja1NlcnZpY2UuZ2V0VXNlcigpXHJcbiAgXHR0aGlzLmxvYWRQb3N0aW5ncygpO1xyXG4gIH1cclxuXHJcbiAgbG9hZFBvc3RpbmdzKGFyZ3M9bnVsbCkge1xyXG4gICAgdGhpcy5wb3N0aW5ncy5zcGxpY2UoMCk7XHJcbiAgICB2YXIgcG9zdElkcyA9IFtdO1xyXG4gICAgdmFyIHBvc3RpbmdzQ29sbGVjdGlvbiA9IGZpcmViYXNlLmZpcmVzdG9yZS5jb2xsZWN0aW9uKCdwb3N0aW5ncycpO1xyXG4gICAgdmFyIHVzZXJzQ29sbGVjdGlvbiA9IGZpcmViYXNlLmZpcmVzdG9yZS5jb2xsZWN0aW9uKCd1c2VycycpLmRvYyh0aGlzLnVzZXIpO1xyXG4gICAgdXNlcnNDb2xsZWN0aW9uLmdldCgpLnRoZW4oZG9jID0+IHtcclxuICAgIFx0cG9zdElkcyA9IGRvYy5kYXRhKCkucG9zdHM7XHJcbiAgICBcdGZvcih2YXIgaSA9IDA7IGkgPCBwb3N0SWRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBcdFx0cG9zdGluZ3NDb2xsZWN0aW9uLmRvYyhwb3N0SWRzW2ldKS5nZXQoKS50aGVuKGRvYyA9PiB7XHJcbiAgICAgICAgICB0aGlzLmNyZWF0ZVBvc3RpbmcoZG9jLmRhdGEoKSwgZG9jLmlkKTtcclxuICAgIFx0XHR9KVxyXG4gICAgXHR9XHJcbiAgICBcdGlmKGFyZ3MgIT0gbnVsbCkge1xyXG5cdCAgICAgICAgdmFyIHB1bGxSZWZyZXNoID0gYXJncy5vYmplY3Q7XHJcblx0ICAgICAgICBwdWxsUmVmcmVzaC5yZWZyZXNoaW5nID0gZmFsc2U7XHJcblx0ICAgIH1cclxuXHQgICAgdmFyIGxpc3RWaWV3ID0gPExpc3RWaWV3PiB0aGlzLmx2Lm5hdGl2ZUVsZW1lbnQ7XHJcblx0ICAgIGxpc3RWaWV3LnNjcm9sbFRvSW5kZXgocG9zdElkcy5sZW5ndGggLSAxKTtcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBjcmVhdGVQb3N0aW5nKGRhdGEsIGlkKSB7XHJcbiAgICAvLyB0aGlzLmNhY2hlLnBsYWNlaG9sZGVyID0gZnJvbUZpbGUoXCJ+L2ltZy9ncmF5X2JhY2tncm91bmQuanBnXCIpO1xyXG4gICAgLy8gdGhpcy5jYWNoZS5tYXhSZXF1ZXN0cyA9IDU7XHJcbiAgICBsZXQgaW5mb19sYWJlbCA9IFwiXCI7XHJcbiAgICBpZihkYXRhLmNhcGFjaXR5ICE9IFwiLTFcIilcclxuICAgICAgaW5mb19sYWJlbCA9IFwiT2ZmZXJpbmcgcmlkZSBsZWF2aW5nIFwiICsgZGF0YS5kYXRlICsgXCIgZnJvbSBcIiArIGRhdGEuc3RhcnRBZGRyZXNzICsgXCIgdG8gXCIgKyBkYXRhLmVuZEFkZHJlc3MgKyBcIiBmb3IgXCIgKyBkYXRhLnByaWNlO1xyXG4gICAgZWxzZVxyXG4gICAgICBpbmZvX2xhYmVsID0gXCJSZXF1ZXN0aW5nIHJpZGUgbGVhdmluZyBcIiArIGRhdGEuZGF0ZSArIFwiIGZyb20gXCIgKyBkYXRhLnN0YXJ0QWRkcmVzcyArIFwiIHRvIFwiICsgZGF0YS5lbmRBZGRyZXNzO1xyXG4gICAgY29uc3QgdXNlcnNDb2xsZWN0aW9uID0gZmlyZWJhc2UuZmlyZXN0b3JlLmNvbGxlY3Rpb24oJ3VzZXJzJyk7XHJcbiAgICB1c2Vyc0NvbGxlY3Rpb24uZG9jKGRhdGEudWlkKS5nZXQoKS50aGVuKChkb2MpID0+IHtcclxuICAgICAgaWYoZG9jLmV4aXN0cykge1xyXG4gICAgICAgIHZhciB1cmwgPSBkb2MuZGF0YSgpLnByb2ZpbGVfc291cmNlO1xyXG4gICAgICAgIC8vIGlmKHVybC5zdWJzdHJpbmcoMCwgMjcpID09PSAnaHR0cHM6Ly9ncmFwaC5mYWNlYm9vay5jb20vJylcclxuICAgICAgICAvLyAgIHVybCArPSAnP2hlaWdodD0zMDAnO1xyXG4gICAgICAgIHRoaXMucG9zdGluZ3MucHVzaChuZXcgUG9zdEl0ZW0oZGF0YS51c2VyLCBpbmZvX2xhYmVsLCB1cmwsIGRhdGEubWFwX3VybCkpO1xyXG4gICAgICAgIHRoaXMucC5wdXNoKGRhdGEpXHJcbiAgICAgICAgdGhpcy5pZHMucHVzaChpZClcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHJlZnJlc2hMaXN0KGFyZ3MpIHtcclxuICAgIHRoaXMubG9hZFBvc3RpbmdzKGFyZ3MpO1xyXG4gIH1cclxuXHJcbiAgLy8gYWRkQ2FjaGUodXJsKSB7XHJcbiAgLy8gICBsZXQgY2FjaGVkSW1hZ2VTb3VyY2U7XHJcbiAgLy8gICBjb25zdCBteUltYWdlID0gdGhpcy5jYWNoZS5nZXQodXJsKTtcclxuICAvLyAgIGlmIChteUltYWdlKSB7XHJcbiAgLy8gICAgICAgLy8gSWYgcHJlc2VudCAtLSB1c2UgaXQuXHJcbiAgLy8gICAgICAgY2FjaGVkSW1hZ2VTb3VyY2UgPSBmcm9tTmF0aXZlU291cmNlKG15SW1hZ2UpO1xyXG4gIC8vICAgICAgIHJldHVybiBjYWNoZWRJbWFnZVNvdXJjZTtcclxuICAvLyAgIH0gZWxzZSB7XHJcbiAgLy8gICAgICAgLy8gSWYgbm90IHByZXNlbnQgLS0gcmVxdWVzdCBpdHMgZG93bmxvYWQgKyBwdXQgaXQgaW4gdGhlIGNhY2hlLlxyXG4gIC8vICAgICAgIHRoaXMuY2FjaGUucHVzaCh7XHJcbiAgLy8gICAgICAgICAgIGtleTogdXJsLFxyXG4gIC8vICAgICAgICAgICB1cmw6IHVybCxcclxuICAvLyAgICAgICAgICAgY29tcGxldGVkOiAoaW1hZ2UsIGtleSkgPT4ge1xyXG4gIC8vICAgICAgICAgICAgICAgaWYgKHVybCA9PT0ga2V5KSB7XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgY2FjaGVkSW1hZ2VTb3VyY2UgPSBmcm9tTmF0aXZlU291cmNlKGltYWdlKTtcclxuICAvLyAgICAgICAgICAgICAgICAgICByZXR1cm4gY2FjaGVkSW1hZ2VTb3VyY2U7XHJcbiAgLy8gICAgICAgICAgICAgICB9XHJcbiAgLy8gICAgICAgICAgIH1cclxuICAvLyAgICAgICB9KTtcclxuICAvLyAgIH1cclxuICAvLyB9XHJcblxyXG4gIG9uSXRlbVRhcChhcmdzKSB7XHJcbiAgICB0aGlzLnRyYW5zZmVyU2VydmljZS5zZXREYXRhKHtcclxuICAgICAgcG9zdEluZm86IHtpZDogdGhpcy5pZHNbYXJncy5pbmRleF0sIGRhdGE6IHRoaXMucFthcmdzLmluZGV4XX0sXHJcbiAgICAgIHBvc3RJdGVtOiB0aGlzLnBvc3RpbmdzLmdldEl0ZW0oYXJncy5pbmRleClcclxuICAgIH0pXHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ3Bvc3RpbmctaW5mbyddKVxyXG4gIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1thcHBIb21lXSdcbn0pXG5leHBvcnQgY2xhc3MgSG9tZURpcmVjdGl2ZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi8qXFxyXFxuQWRkIHlvdXIgTmF0aXZlU2NyaXB0IHNwZWNpZmljIHN0eWxlcyBoZXJlLlxcclxcblRvIGxlYXJuIG1vcmUgYWJvdXQgc3R5bGluZyBpbiBOYXRpdmVTY3JpcHQgc2VlOlxcclxcbmh0dHBzOi8vZG9jcy5uYXRpdmVzY3JpcHQub3JnL2FuZ3VsYXIvdWkvc3R5bGluZ1xcclxcbiovXFxyXFxuLnJlZnJlc2gge1xcclxcblxcdGNvbG9yOiAjYWMwMGU2O1xcclxcbn1cXHJcXG5cXHJcXG4uYWN0aW9uYmFyIHtcXHJcXG5cXHRmb250LXNpemU6IDIyO1xcclxcblxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuXFx0dGV4dC1hbGlnbjogbGVmdDtcXHJcXG5cXHRjb2xvcjogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5hZGQtYnRuLWNvbnRhaW5lciB7XFxyXFxuXFx0Lypwb3NpdGlvbjogYWJzb2x1dGU7Ki9cXHJcXG5cXHQvKmJvdHRvbTogMDsqL1xcclxcblxcdC8qcmlnaHQ6IDA7Ki9cXHJcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xcclxcblxcdHotaW5kZXg6IDE7XFxyXFxufVxcclxcblxcclxcbi5mYWItYnV0dG9uIHtcXHJcXG4gIGhlaWdodDogNTY7XFxyXFxuICB3aWR0aDogNTY7XFxyXFxuICBtYXJnaW46IDE1O1xcclxcbiAgLyptYXJnaW4tYm90dG9tOiA2NDsqL1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FjMDBlNjtcXHJcXG4gIC8qZmxvYXQ6IHJpZ2h0OyovXFxyXFxuICBob3Jpem9udGFsLWFsaWduOiByaWdodDtcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XFxyXFxufVxcclxcblxcclxcbkxhYmVsIHtcXHJcXG5cXHR0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbn1cXHJcXG5cXHJcXG4ubmFtZS1sYWJlbCB7XFxyXFxuXFx0bWFyZ2luLXRvcDogMTY7XFxyXFxuXFx0bWFyZ2luLWxlZnQ6IDE4O1xcclxcblxcdGNvbG9yOiBibGFjaztcXHJcXG5cXHRmb250LXdlaWdodDogNzAwO1xcclxcblxcdGZvbnQtc2l6ZTogMTc7XFxyXFxufVxcclxcblxcclxcbi5pbmZvLWxhYmVsIHtcXHJcXG5cXHRtYXJnaW4tdG9wOiA0O1xcclxcblxcdG1hcmdpbi1sZWZ0OiAxODtcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiAxNjtcXHJcXG5cXHRjb2xvcjogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5wb3N0IHtcXHJcXG5cXHQvKmJvcmRlci1ib3R0b20td2lkdGg6IDE7Ki9cXHJcXG5cXHRib3JkZXItY29sb3I6ICNmMWYxZjE7XFxyXFxufVxcclxcblxcclxcbi5wb3N0OmhpZ2hsaWdodGVkIHtcXHJcXG5cXHQvKmJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7Ki9cXHJcXG59XFxyXFxuXFxyXFxuLnBvc3RpbmctbWFwIHtcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiAxNjtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAxMDtcXHJcXG5cXHRoZWlnaHQ6IDIyMDtcXHJcXG5cXHR3aWR0aDogMzQwO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvZmlsZS1waWN0dXJlIHtcXHJcXG5cXHRoZWlnaHQ6IDUwO1xcclxcblxcdHdpZHRoOiA1MDtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAxMDAlO1xcclxcblxcdHZlcnRpY2FsLWFsaWduOiB0b3A7XFxyXFxuXFx0bWFyZ2luLWxlZnQ6IDE2O1xcclxcblxcdG1hcmdpbi10b3A6IDIwO1xcclxcbn1cXHJcXG5cXHJcXG4uYWN0aXZpdHktaW5kaWNhdG9yIHtcXHJcXG5cXHRjb2xvcjogI2FjMDBlNjtcXHJcXG59XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPCEtLSA8QWN0aW9uQmFyIHRpdGxlPVxcXCJIb21lXFxcIiBjbGFzcz1cXFwiYWN0aW9uYmFyXFxcIj5cXHJcXG5cXHQ8TmF2aWdhdGlvbkJ1dHRvbiBpb3M6dmlzaWJpbGl0eT1cXFwiY29sbGFwc2VkXFxcIiBpY29uPVxcXCJ+L2ltZy9tZW51LWljb24ucG5nXFxcIiAodGFwKT1cXFwic2hvd1NpZGVEcmF3ZXIoKVxcXCIgPjwvTmF2aWdhdGlvbkJ1dHRvbj5cXHJcXG48QWN0aW9uSXRlbSBhbmRyb2lkOnZpc2liaWxpdHk9XFxcImNvbGxhcHNlZFxcXCIgaWNvbj1cXFwifi9pbWcvbWVudS1pY29uLnBuZ1xcXCIgaW9zLnBvc2l0aW9uPVxcXCJsZWZ0XFxcIiAodGFwKT1cXFwic2hvd1NpZGVEcmF3ZXIoKVxcXCIgPjwvQWN0aW9uSXRlbT5cXHJcXG48L0FjdGlvbkJhcj4gLS0+XFxyXFxuXFxyXFxuICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiYWRkLWJ0bi1jb250YWluZXJcXFwiPlxcclxcblxcdFxcdDxGQUIgKHRhcCk9XFxcInNob3dNb2RhbCgpXFxcIiBpY29uPVxcXCJyZXM6Ly9pY19hZGRfd2hpdGVfM3hcXFwiIHJpcHBsZUNvbG9yPVxcXCIjZjFmMWYxXFxcIiBjbGFzcz1cXFwiZmFiLWJ1dHRvblxcXCI+PC9GQUI+XFxyXFxuXFx0PC9TdGFja0xheW91dD5cXHJcXG5cXHJcXG5cXHQ8UHVsbFRvUmVmcmVzaCAocmVmcmVzaCk9XFxcInJlZnJlc2hMaXN0KCRldmVudClcXFwiIGNsYXNzPVxcXCJyZWZyZXNoXFxcIj5cXHJcXG5cXHRcXHQ8TGlzdFZpZXcgW2l0ZW1zXT1cXFwicG9zdGluZ3NcXFwiIChpdGVtVGFwKT1cXFwib25JdGVtVGFwKCRldmVudClcXFwiICNsaXN0VmlldyBpZD1cXFwibGlzdFZpZXdcXFwiPlxcclxcblxcdFxcdCAgICA8bmctdGVtcGxhdGUgbGV0LWl0ZW09XFxcIml0ZW1cXFwiIGxldC1pPVxcXCJpbmRleFxcXCIgbGV0LW9kZD1cXFwib2RkXFxcIiBsZXQtZXZlbj1cXFwiZXZlblxcXCI+XFxyXFxuXFx0XFx0ICAgICAgICA8U3RhY2tMYXlvdXQgW2NsYXNzLm9kZF09XFxcIm9kZFxcXCIgW2NsYXNzLmV2ZW5dPVxcXCJldmVuXFxcIiBjbGFzcz1cXFwicG9zdFxcXCI+XFxyXFxuXFx0XFx0ICAgICAgICBcXHQgIDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cXFwiaG9yaXpvbnRhbFxcXCI+XFxyXFxuXFx0XFx0ICAgICAgICBcXHQgIFxcdDxJbWFnZSBbc3JjXT1cXFwiaXRlbS5wcm9maWxlU291cmNlXFxcIiBjbGFzcz1cXFwicHJvZmlsZS1waWN0dXJlXFxcIiBzdHJldGNoPVxcXCJhc3BlY3RGaXRcXFwiPjwvSW1hZ2U+XFxyXFxuXFx0XFx0ICAgICAgICBcXHQgIFxcdDxTdGFja0xheW91dD5cXHJcXG5cXHRcXHRcXHQgICAgICAgICAgICAgIFxcdDxMYWJlbCB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgaWQ9XFxcInBvc3QtbmFtZVxcXCIgY2xhc3M9XFxcIm5hbWUtbGFiZWxcXFwiIFt0ZXh0XT1cXFwiaXRlbS51c2VybmFtZVxcXCI+PC9MYWJlbD5cXHJcXG5cXHRcXHRcXHQgICAgICAgICAgICAgIFxcdDxMYWJlbCB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgaWQ9XFxcInBvc3QtaW5mb1xcXCIgY2xhc3M9XFxcImluZm8tbGFiZWxcXFwiIFt0ZXh0XT1cXFwiaXRlbS5pbmZvXFxcIj48L0xhYmVsPlxcclxcblxcdFxcdFxcdCAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxyXFxuXFx0XFx0ICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcclxcblxcdFxcdFxcdFxcdFxcdCAgPEltYWdlIFtzcmNdPVxcXCJpdGVtLm1hcFNvdXJjZVxcXCIgc3RyZXRjaD1cXFwiYXNwZWN0Rml0XFxcIiBjbGFzcz1cXFwicG9zdGluZy1tYXBcXFwiPjwvSW1hZ2U+XFxyXFxuXFx0XFx0ICAgICAgICA8L1N0YWNrTGF5b3V0PlxcclxcblxcdFxcdCAgICA8L25nLXRlbXBsYXRlPlxcclxcblxcdFxcdDwvTGlzdFZpZXc+XFxyXFxuXFx0PC9QdWxsVG9SZWZyZXNoPlxcclxcblxcdDxBY3Rpdml0eUluZGljYXRvciAjYWN0aXZpdHlJbmRpY2F0b3IgYnVzeT1cXFwidHJ1ZVxcXCIgd2lkdGg9XFxcIjQwXFxcIiBoZWlnaHQ9XFxcIjQwXFxcIiBjbGFzcz1cXFwiYWN0aXZpdHktaW5kaWNhdG9yXFxcIj5cXHJcXG4gIDwvQWN0aXZpdHlJbmRpY2F0b3I+XCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NvbnRhaW5lclJlZiwgVmlld1JlZiwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGVBcnJheSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlLWFycmF5JztcclxuXHJcbmltcG9ydCB7IFRyYW5zZmVyU2VydmljZSB9IGZyb20gJy4uL2RhdGF0cmFuc2Zlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRHluYW1pY0FkZFNlcnZpY2UgfSBmcm9tICcuLi9keW5hbWljLWFkZC5zZXJ2aWNlLnRucyc7XHJcbmltcG9ydCB7UGFnZX0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZVwiO1xyXG5pbXBvcnQgeyBnZXRGcmFtZUJ5SWQgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZVwiO1xyXG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gJy4uL3VzZXIuc2VydmljZS50bnMnO1xyXG5pbXBvcnQgeyBQb3N0aW5nU2VydmljZSB9IGZyb20gJy4uL3Bvc3Rpbmcuc2VydmljZS50bnMnO1xyXG5pbXBvcnQgeyBNb2RhbERpYWxvZ1NlcnZpY2UgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZGlyZWN0aXZlcy9kaWFsb2dzXCI7XHJcbmltcG9ydCB7IEdvb2dsZU1hcHNTZXJ2aWNlIH0gZnJvbSAnLi4vZ29vZ2xlLW1hcHMuc2VydmljZSc7XHJcbmltcG9ydCAqIGFzIGFwcGxpY2F0aW9uIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCI7XHJcbmltcG9ydCB7IEFjdGl2aXR5SW5kaWNhdG9yIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9hY3Rpdml0eS1pbmRpY2F0b3InO1xyXG5pbXBvcnQgeyBBbmRyb2lkQXBwbGljYXRpb24sIEFuZHJvaWRBY3Rpdml0eUJhY2tQcmVzc2VkRXZlbnREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIjtcclxuaW1wb3J0IHsgaXNBbmRyb2lkIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm1cIjtcclxuaW1wb3J0ICogYXMgZmlyZWJhc2UgZnJvbSAnbmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZSc7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBEYXRlUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5pbXBvcnQgeyBTdGFja0xheW91dCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvc3RhY2stbGF5b3V0XCI7XHJcbmltcG9ydCB7IExpc3RWaWV3IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGlzdC12aWV3XCI7XHJcblxyXG5pbXBvcnQgeyBQb3N0aW5nIH0gZnJvbSAnLi4vcG9zdGluZy5tb2RlbCc7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi91c2VyLm1vZGVsJztcclxuXHJcbmltcG9ydCB7IEFkZE1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi4vYWRkLW1vZGFsL2FkZC1tb2RhbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDYWNoZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ltYWdlLWNhY2hlXCI7XHJcbmltcG9ydCB7IEltYWdlU291cmNlLCBmcm9tRmlsZSwgZnJvbVJlc291cmNlLCBmcm9tQmFzZTY0LCBmcm9tTmF0aXZlU291cmNlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvaW1hZ2Utc291cmNlXCI7XHJcbmltcG9ydCB7IEZvbGRlciwgcGF0aCwga25vd25Gb2xkZXJzIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZmlsZS1zeXN0ZW1cIjtcclxuXHJcbmNsYXNzIFBvc3RJdGVtIHtcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB1c2VybmFtZTogU3RyaW5nLCBwdWJsaWMgaW5mbzogc3RyaW5nLCBwdWJsaWMgcHJvZmlsZVNvdXJjZTogc3RyaW5nLCBwdWJsaWMgbWFwU291cmNlOiBzdHJpbmcpIHsgfVxyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1ob21lJyxcclxuICBwcm92aWRlcnM6IFtEeW5hbWljQWRkU2VydmljZV0sXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2hvbWUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2hvbWUuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIGJsb2NrcyA9IDE7XHJcbiAgcCA6IFBvc3RpbmdbXTtcclxuICBwb3N0aW5ncyA9IG5ldyBPYnNlcnZhYmxlQXJyYXk8UG9zdEl0ZW0+KCk7XHJcbiAgLy8gY2FjaGUgPSBuZXcgQ2FjaGUoKTtcclxuICBcclxuXHJcbiAgQFZpZXdDaGlsZCgnbGlzdFZpZXcnLCB7IHN0YXRpYzogdHJ1ZSB9KSBsdjogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKCdhY3Rpdml0eUluZGljYXRvcicsIHsgc3RhdGljOiB0cnVlIH0pIGFpOiBFbGVtZW50UmVmO1xyXG4gIFxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRyYW5zZmVyU2VydmljZTogVHJhbnNmZXJTZXJ2aWNlLCBwcml2YXRlIGFkZFNlcnZpY2U6IER5bmFtaWNBZGRTZXJ2aWNlLCBwcml2YXRlIHBhZ2U6IFBhZ2UsIFxyXG4gIFx0cHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsIHByaXZhdGUgcG9zdGluZ1NlcnZpY2U6IFBvc3RpbmdTZXJ2aWNlLCBwcml2YXRlIG1vZGFsOiBNb2RhbERpYWxvZ1NlcnZpY2UsIHByaXZhdGUgdmNSZWY6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICBwcml2YXRlIG1hcFNlcnZpY2U6IEdvb2dsZU1hcHNTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSBkYXRlUGlwZTogRGF0ZVBpcGUpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICBcdHRoaXMubG9hZFBvc3RpbmdzKCk7XHJcbiAgfVxyXG5cclxuICBvbkJhY2tCdXR0b25UYXAoKSB7XHJcbiAgICBhcHBsaWNhdGlvbi5hbmRyb2lkLmZvcmVncm91bmRBY3Rpdml0eS5maW5pc2goKTtcclxuICB9XHJcblxyXG4gIHNob3dNb2RhbCgpIHtcclxuICAgICAgICBsZXQgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgY29udGV4dDoge30sXHJcbiAgICAgICAgICAgIGZ1bGxzY3JlZW46IHRydWUsXHJcbiAgICAgICAgICAgIHZpZXdDb250YWluZXJSZWY6IHRoaXMudmNSZWZcclxuICAgICAgICAgICAgLy8gYW5pbWF0ZWQ6IHRydWUsXHJcbiAgICAgICAgICAgIC8vIHRyYW5zaXRpb246IHsgbmFtZTogXCJzbGlkZVRvcFwiIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMubW9kYWwuc2hvd01vZGFsKEFkZE1vZGFsQ29tcG9uZW50LCBvcHRpb25zKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgICAgIGlmKHJlcyA9PSAncG9zdGVkJylcclxuICAgICAgICAgICAgICB0aGlzLmxvYWRQb3N0aW5ncygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIHNob3dTaWRlRHJhd2VyKCkge1xyXG4gIFx0Ly9jb25zdCBkcmF3ZXIgPSA8UmFkU2lkZURyYXdlcj50aGlzLnNkLm5hdGl2ZVZpZXc7XHJcbiAgXHQvL2NvbnNvbGUuZGlyKGRyYXdlcik7XHJcbiAgXHQvL2NvbnNvbGUuZGlyKHRoaXMucGFnZSk7XHJcbiAgXHQvLyBkcmF3ZXIuc2hvd0RyYXdlcigpO1xyXG5cclxuICB9XHJcblxyXG4gIGxvYWRQb3N0aW5ncyhhcmdzPW51bGwpIHtcclxuICAgIC8vIGxldCBsYXlvdXQgPSA8U3RhY2tMYXlvdXQ+dGhpcy5wYWdlLmdldFZpZXdCeUlkKCdmZWVkJyk7XHJcbiAgICAvLyBsYXlvdXQucmVtb3ZlQ2hpbGRyZW4oKTtcclxuICAgIC8vIHRoaXMuY2FjaGUucGxhY2Vob2xkZXIgPSBmcm9tRmlsZShcIn4vaW1nL2dyYXlfYmFja2dyb3VuZC5qcGdcIik7XHJcbiAgICAvLyB0aGlzLmNhY2hlLm1heFJlcXVlc3RzID0gNTtcclxuXHJcbiAgICB0aGlzLnBvc3RpbmdzLnNwbGljZSgwKTtcclxuICAgIGxldCBhY3Rpdml0eUluZGljYXRvciA9IDxBY3Rpdml0eUluZGljYXRvcj4gdGhpcy5haS5uYXRpdmVFbGVtZW50O1xyXG4gICAgYWN0aXZpdHlJbmRpY2F0b3IuYnVzeSA9IHRydWU7XHJcblxyXG4gICAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xyXG5cclxuICAgIHZhciBwb3N0cyA9IFtdO1xyXG4gICAgdmFyIHBvc3RpbmdzQ29sbGVjdGlvbiA9IGZpcmViYXNlLmZpcmVzdG9yZS5jb2xsZWN0aW9uKCdwb3N0aW5ncycpO1xyXG4gICAgY29uc3QgcXVlcnkgPSBwb3N0aW5nc0NvbGxlY3Rpb24ud2hlcmUoJ2Zvcm1hdHRlZERhdGUnLCAnPj0nLCB0aGlzLmRhdGVQaXBlLnRyYW5zZm9ybShjdXJyZW50RGF0ZSwgJ3l5eXktTU0tZGQnKSlcclxuICAgIHF1ZXJ5Lm9yZGVyQnkoJ2Zvcm1hdHRlZERhdGUnLCAnYXNjJykuZ2V0KCkudGhlbihxdWVyeVNuYXBzaG90ID0+IHtcclxuICAgICAgcXVlcnlTbmFwc2hvdC5mb3JFYWNoKGRvYyA9PiB7XHJcbiAgICAgICAgcG9zdHMucHVzaCh7XHJcbiAgICAgICAgICBpZDogZG9jLmlkLFxyXG4gICAgICAgICAgZGF0YTogZG9jLmRhdGEoKVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLnAgPSBwb3N0cztcclxuICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHBvc3RzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdGhpcy5wb3N0aW5ncy5wdXNoKG5ldyBQb3N0SXRlbShwb3N0c1tpXS51c2VyLCAnJywgJycsICd+L2ltZy9ncmF5X2JhY2tncm91bmQuanBnJykpO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlUG9zdGluZyhwb3N0c1tpXS5kYXRhLCBpKTtcclxuICAgICAgfVxyXG4gICAgICBhY3Rpdml0eUluZGljYXRvci5idXN5ID0gZmFsc2U7XHJcbiAgICAgIGlmKGFyZ3MgIT0gbnVsbClcclxuICAgICAge1xyXG4gICAgICAgIHZhciBwdWxsUmVmcmVzaCA9IGFyZ3Mub2JqZWN0O1xyXG4gICAgICAgIHB1bGxSZWZyZXNoLnJlZnJlc2hpbmcgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gIH1cclxuXHJcbiAvLyAgY3JlYXRlUG9zdGluZyhpZCwgdXNlciwgc3RhcnRhZHIsIGVuZGFkciwgZGF0ZSwgY29zdCwgY2FwYWNpdHksIGNvbW1lbnRzKSB7XHJcblx0Ly8gXHR0aGlzLnRyYW5zZmVyU2VydmljZS5zZXREYXRhKFt7XCJpbmRleFwiOiB0aGlzLmJsb2NrcywgXCJpZFwiOiBpZCwgXCJ1c2VyXCI6IHVzZXIsIFwic3RhcnRhZHJcIjogc3RhcnRhZHIsIFwiZW5kYWRyXCI6IGVuZGFkciwgXCJkYXRlXCI6IGRhdGUsIFwiY29zdFwiOiBjb3N0LCBcImNhcGFjaXR5XCI6IGNhcGFjaXR5LCBcImNvbW1lbnRzXCI6IGNvbW1lbnRzLCBcImJ1dHRvblR5cGVcIjogXCJDb25uZWN0XCJ9XSk7XHJcblx0Ly8gXHR0aGlzLmFkZFNlcnZpY2UuYXBwZW5kQ29tcG9uZW50VG9Cb2R5KHRoaXMucGFnZS5nZXRWaWV3QnlJZCgnZmVlZCcpKTtcclxuXHQvLyAgIHRoaXMuYmxvY2tzKys7XHJcblx0Ly8gfVxyXG5cclxuICBjcmVhdGVQb3N0aW5nKGRhdGEsIGk6IG51bWJlcikge1xyXG4gICAgbGV0IGluZm9fbGFiZWwgPSBcIlwiO1xyXG4gICAgLy8gdGhpcy5jcmVhdGVQb3N0aW5nKHRoaXMucFtpXS5faWQsIHRoaXMucFtpXS51c2VyLCB0aGlzLnBbaV0uc3RhcnRhZHIsIHRoaXMucFtpXS5lbmRhZHIsIHRoaXMucFtpXS5kYXRlLCB0aGlzLnBbaV0uY29zdCwgdGhpcy5wW2ldLmNhcGFjaXR5LCB0aGlzLnBbaV0uY29tbWVudHMpO1xyXG4gICAgaWYoZGF0YS5jYXBhY2l0eSAhPSBcIi0xXCIpXHJcbiAgICAgIGluZm9fbGFiZWwgPSBcIk9mZmVyaW5nIHJpZGUgbGVhdmluZyBcIiArIGRhdGEuZGF0ZSArIFwiIGZyb20gXCIgKyBkYXRhLnN0YXJ0QWRkcmVzcyArIFwiIHRvIFwiICsgZGF0YS5lbmRBZGRyZXNzICsgXCIgZm9yIFwiICsgZGF0YS5wcmljZTtcclxuICAgIGVsc2VcclxuICAgICAgaW5mb19sYWJlbCA9IFwiUmVxdWVzdGluZyByaWRlIGxlYXZpbmcgXCIgKyBkYXRhLmRhdGUgKyBcIiBmcm9tIFwiICsgZGF0YS5zdGFydEFkZHJlc3MgKyBcIiB0byBcIiArIGRhdGEuZW5kQWRkcmVzcztcclxuICAgIGNvbnN0IHVzZXJzQ29sbGVjdGlvbiA9IGZpcmViYXNlLmZpcmVzdG9yZS5jb2xsZWN0aW9uKCd1c2VycycpO1xyXG4gICAgdXNlcnNDb2xsZWN0aW9uLmRvYyhkYXRhLnVpZCkuZ2V0KCkudGhlbigoZG9jKSA9PiB7XHJcbiAgICAgIGlmKGRvYy5leGlzdHMpIHtcclxuICAgICAgICB2YXIgdXJsID0gZG9jLmRhdGEoKS5wcm9maWxlX3NvdXJjZTtcclxuICAgICAgICAvLyBpZih1cmwuc3Vic3RyaW5nKDAsIDI3KSA9PT0gJ2h0dHBzOi8vZ3JhcGguZmFjZWJvb2suY29tLycpXHJcbiAgICAgICAgLy8gICB1cmwgKz0gJz9oZWlnaHQ9MzAwJztcclxuICAgICAgICAvLyB2YXIgbWFwVXJsID0gdGhpcy5tYXBTZXJ2aWNlLmdldFN0YXRpY01hcChkYXRhLnN0YXJ0QWRkcmVzcyArIFwiIFwiICsgZGF0YS5zdGFydEZvcm1hdHRlZCwgZGF0YS5lbmRBZGRyZXNzICsgXCIgXCIgKyBkYXRhLmVuZEZvcm1hdHRlZCk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2cobWFwVXJsKVxyXG4gICAgICAgIC8vIHRoaXMuYWRkQ2FjaGUodXJsLCAncGZwJywgZGF0YS51c2VyLCBpbmZvX2xhYmVsLCB1cmwsIGRhdGEubWFwX3VybCwgaSkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgLy8gICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgLy8gICB0aGlzLmFkZENhY2hlKGRhdGEubWFwX3VybCwgJ21hcCcsIGRhdGEudXNlciwgaW5mb19sYWJlbCwgdXJsLCBkYXRhLm1hcF91cmwsIGkpLnRoZW4oKHJlcykgPT57XHJcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgICAvLyAgIH0pXHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgdGhpcy5wb3N0aW5ncy5zZXRJdGVtKGksIG5ldyBQb3N0SXRlbShkYXRhLnVzZXIsIGluZm9fbGFiZWwsIHVybCwgZGF0YS5tYXBfdXJsKSk7XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICAvLyBhZGRDYWNoZSh1cmwsIGltZ190eXBlLCB1c2VyLCBpbmZvLCBwZnBfdXJsLCBtYXBfdXJsLCBpKSB7XHJcbiAgLy8gICByZXR1cm4gbmV3IFByb21pc2U8YW55PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgLy8gICAgIGxldCBjYWNoZWRJbWFnZVNvdXJjZTtcclxuICAvLyAgICAgY29uc3QgbXlJbWFnZSA9IHRoaXMuY2FjaGUuZ2V0KHVybCk7XHJcbiAgLy8gICAgIGlmIChteUltYWdlKSB7XHJcbiAgLy8gICAgICAgLy8gSWYgcHJlc2VudCAtLSB1c2UgaXQuXHJcbiAgLy8gICAgICAgY2FjaGVkSW1hZ2VTb3VyY2UgPSBmcm9tTmF0aXZlU291cmNlKG15SW1hZ2UpO1xyXG4gIC8vICAgICAgIGNvbnNvbGUubG9nKG15SW1hZ2UpXHJcbiAgLy8gICAgICAgaWYoaW1nX3R5cGUgPT09ICdwZnAnKVxyXG4gIC8vICAgICAgICAgdGhpcy5wb3N0aW5ncy5zZXRJdGVtKGksIG5ldyBQb3N0SXRlbSh1c2VyLCBpbmZvLCBjYWNoZWRJbWFnZVNvdXJjZSwgbWFwX3VybCkpO1xyXG4gIC8vICAgICAgIGVsc2UgaWYgKGltZ190eXBlID09PSAnbWFwJylcclxuICAvLyAgICAgICAgIHRoaXMucG9zdGluZ3Muc2V0SXRlbShpLCBuZXcgUG9zdEl0ZW0odXNlciwgaW5mbywgdGhpcy5wb3N0aW5ncy5nZXRJdGVtKGkpLnByb2ZpbGVTb3VyY2UsIGNhY2hlZEltYWdlU291cmNlKSk7XHJcbiAgLy8gICAgICAgcmVzb2x2ZSh7bWVzc2FnZTogJ1JldHJpZXZlZCBmcm9tIGNhY2hlJywgY2FjaGVVUkw6IGNhY2hlZEltYWdlU291cmNlfSk7XHJcbiAgLy8gICAgIH0gXHJcbiAgLy8gICAgIGVsc2Uge1xyXG4gIC8vICAgICAgIC8vIElmIG5vdCBwcmVzZW50IC0tIHJlcXVlc3QgaXRzIGRvd25sb2FkICsgcHV0IGl0IGluIHRoZSBjYWNoZS5cclxuICAvLyAgICAgICB0aGlzLmNhY2hlLnB1c2goe1xyXG4gIC8vICAgICAgICAgICBrZXk6IHVybCxcclxuICAvLyAgICAgICAgICAgdXJsOiB1cmwsXHJcbiAgLy8gICAgICAgICAgIGNvbXBsZXRlZDogKGltYWdlLCBrZXkpID0+IHtcclxuICAvLyAgICAgICAgICAgICAgIGlmICh1cmwgPT09IGtleSkge1xyXG4gIC8vICAgICAgICAgICAgICAgICAgIGNhY2hlZEltYWdlU291cmNlID0gZnJvbU5hdGl2ZVNvdXJjZShpbWFnZSk7XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgaWYoaW1nX3R5cGUgPT09ICdwZnAnKVxyXG4gIC8vICAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3N0aW5ncy5zZXRJdGVtKGksIG5ldyBQb3N0SXRlbSh1c2VyLCBpbmZvLCBjYWNoZWRJbWFnZVNvdXJjZSwgbWFwX3VybCkpO1xyXG4gIC8vICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGltZ190eXBlID09PSAnbWFwJylcclxuICAvLyAgICAgICAgICAgICAgICAgICAgIHRoaXMucG9zdGluZ3Muc2V0SXRlbShpLCBuZXcgUG9zdEl0ZW0odXNlciwgaW5mbywgdGhpcy5wb3N0aW5ncy5nZXRJdGVtKGkpLnByb2ZpbGVTb3VyY2UsIGNhY2hlZEltYWdlU291cmNlKSk7XHJcbiAgLy8gICAgICAgICAgICAgICB9XHJcbiAgLy8gICAgICAgICAgICAgICByZXNvbHZlKHttZXNzYWdlOiAnQWRkZWQgdG8gY2FjaGUnLCBjYWNoZVVSTDogY2FjaGVkSW1hZ2VTb3VyY2V9KTtcclxuICAvLyAgICAgICAgICAgfVxyXG4gIC8vICAgICAgIH0pO1xyXG4gIC8vICAgICB9XHJcbiAgLy8gICB9KVxyXG4gIC8vIH1cclxuXHJcbiAgcmVmcmVzaExpc3QoYXJncykge1xyXG4gICAgdGhpcy5sb2FkUG9zdGluZ3MoYXJncyk7XHJcbiAgfVxyXG5cclxuICBvbkl0ZW1UYXAoYXJncykge1xyXG4gICAgY29uc29sZS5sb2codGhpcy5wb3N0aW5ncy5nZXRJdGVtKGFyZ3MuaW5kZXgpKTtcclxuICAgIHRoaXMudHJhbnNmZXJTZXJ2aWNlLnNldERhdGEoe1xyXG4gICAgICBwb3N0SW5mbzogdGhpcy5wW2FyZ3MuaW5kZXhdLFxyXG4gICAgICBwb3N0SXRlbTogdGhpcy5wb3N0aW5ncy5nZXRJdGVtKGFyZ3MuaW5kZXgpXHJcbiAgICB9KVxyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydwb3N0aW5nLWluZm8nXSlcclxuICB9XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi8qIEFkZCBtb2JpbGUgc3R5bGVzIGZvciB0aGUgY29tcG9uZW50IGhlcmUuICAqL1xcclxcbi5jbG9zZSB7XFxyXFxuXFx0bWFyZ2luOiAxMDtcXHJcXG5cXHRmb250LXNpemU6IDI4O1xcclxcblxcdHdpZHRoOiA0ODtcXHJcXG5cXHRoZWlnaHQ6IDQ4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2UtYnV0dG9uLWNvbnRhaW5lciB7XFxyXFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdGxlZnQ6IDA7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXItbGFiZWwtMiB7XFxyXFxuXFx0Zm9udC1zaXplOiAxNjtcXHJcXG5cXHRtYXJnaW4tdG9wOiAxMjtcXHJcXG5cXHQvKm1hcmdpbi1ib3R0b206IDEyOyovXFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDcwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlci1sYWJlbC0zIHtcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiAxMjtcXHJcXG59XFxyXFxuXFxyXFxuLnBvc3Qge1xcclxcblxcdGJvcmRlci1jb2xvcjogI2YxZjFmMTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvc3Q6aGlnaGxpZ2h0ZWQge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XFxyXFxufVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxTY3JvbGxWaWV3PlxcclxcblxcdDxTdGFja0xheW91dCBoZWlnaHQ9XFxcIjEwMCVcXFwiPlxcclxcblxcdFxcdDxTdGFja0xheW91dCBjbGFzcz1cXFwiY2xvc2UtYnV0dG9uLWNvbnRhaW5lclxcXCIgb3JpZW50YXRpb249XFxcImhvcml6b250YWxcXFwiPlxcclxcblxcdFxcdFxcdDxMYWJlbCB0ZXh0PVxcXCImdGltZXM7XFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiICh0YXApPVxcXCJjbG9zZSgpXFxcIj48L0xhYmVsPlxcclxcblxcdFxcdDwvU3RhY2tMYXlvdXQ+XFxyXFxuXFxyXFxuXFx0XFx0PFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJpbnB1dC1maWVsZFxcXCI+XFxyXFxuPCEtLSBcXHRcXHRcXHQ8VGV4dEZpZWxkIGNsYXNzPVxcXCJpbnB1dFxcXCIgYXV0b2NvcnJlY3Q9XFxcImZhbHNlXFxcIiBoaW50PVxcXCJGaW5kIGEgbG9jYXRpb25cXFwiIFsobmdNb2RlbCldPVxcXCJhZGRyZXNzXFxcIiAodGV4dENoYW5nZSk9XFxcImF1dG9jb21wbGV0ZSgpXFxcIiAjc2VhcmNoTGFiZWwgaWQ9XFxcInNlYXJjaExhYmVsXFxcIiByZXF1aXJlZD48L1RleHRGaWVsZD4gLS0+XFxyXFxuXFx0XFx0XFx0PFNlYXJjaEJhciBoaW50PVxcXCJGaW5kIGEgbG9jYXRpb25cXFwiIFt0ZXh0XT1cXFwiYWRkcmVzc1xcXCIgKHRleHRDaGFuZ2UpPVxcXCJzZWFyY2goJGV2ZW50KVxcXCI+PC9TZWFyY2hCYXI+XFxyXFxuXFx0XFx0XFx0PFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJoci1saWdodFxcXCI+PC9TdGFja0xheW91dD5cXHJcXG5cXHRcXHQ8L1N0YWNrTGF5b3V0PlxcclxcblxcclxcblxcdFxcdDxMaXN0VmlldyBbaXRlbXNdPVxcXCJzdWdnZXN0aW9uc1xcXCIgaGVpZ2h0PVxcXCIxMDAlXFxcIj5cXHJcXG5cXHRcXHRcXHQ8bmctdGVtcGxhdGUgbGV0LWl0ZW09XFxcIml0ZW1cXFwiIGxldC1pPVxcXCJpbmRleFxcXCIgbGV0LW9kZD1cXFwib2RkXFxcIiBsZXQtZXZlbj1cXFwiZXZlblxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0PFN0YWNrTGF5b3V0IFtjbGFzcy5vZGRdPVxcXCJvZGRcXFwiIFtjbGFzcy5ldmVuXT1cXFwiZXZlblxcXCIgY2xhc3M9XFxcInBvc3RcXFwiICh0YXApPVxcXCJzZWxlY3RQbGFjZShpdGVtLnBsYWNlU3VnZ2VzdGlvbiwgaXRlbS5wbGFjZUFkZHJlc3MpXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8TGFiZWwgdGV4dFdyYXA9XFxcInRydWVcXFwiIFt0ZXh0XT1cXFwiaXRlbS5wbGFjZVN1Z2dlc3Rpb25cXFwiIGNsYXNzPVxcXCJoZWFkZXItbGFiZWwtMlxcXCI+PC9MYWJlbD5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8TGFiZWwgdGV4dFdyYXA9XFxcInRydWVcXFwiIFt0ZXh0XT1cXFwiaXRlbS5wbGFjZUFkZHJlc3NcXFwiIGNsYXNzPVxcXCJoZWFkZXItbGFiZWwtM1xcXCI+PC9MYWJlbD5cXHJcXG5cXHRcXHRcXHRcXHQ8L1N0YWNrTGF5b3V0PlxcclxcblxcdFxcdFxcdDwvbmctdGVtcGxhdGU+XFxyXFxuXFx0XFx0PC9MaXN0Vmlldz5cXHJcXG5cXHQ8L1N0YWNrTGF5b3V0PlxcclxcbjwvU2Nyb2xsVmlldz5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGxhY2VzQXV0b2NvbXBsZXRlU2VydmljZSB9IGZyb20gJy4uL3BsYWNlcy1hdXRvY29tcGxldGUuc2VydmljZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGVBcnJheSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlLWFycmF5JztcclxuaW1wb3J0IHsgTW9kYWxEaWFsb2dQYXJhbXMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZGlyZWN0aXZlcy9kaWFsb2dzXCI7XHJcbmltcG9ydCB7IFRyYW5zZmVyU2VydmljZSB9IGZyb20gJy4uL2RhdGF0cmFuc2Zlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU2VhcmNoQmFyIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9zZWFyY2gtYmFyJztcclxuXHJcbmNsYXNzIFN1Z2dlc3Rpb24ge1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwbGFjZVN1Z2dlc3Rpb246IHN0cmluZywgcHVibGljIHBsYWNlQWRkcmVzczogc3RyaW5nKSB7fVxyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1sb2NhdGlvbicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2xvY2F0aW9uLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9sb2NhdGlvbi5jb21wb25lbnQuY3NzJ11cclxufSlcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgTG9jYXRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhcmFtczogTW9kYWxEaWFsb2dQYXJhbXMsIHByaXZhdGUgcGxhY2VzU2VydmljZTogUGxhY2VzQXV0b2NvbXBsZXRlU2VydmljZSwgcHJpdmF0ZSB0cmFuc2ZlclNlcnZpY2U6IFRyYW5zZmVyU2VydmljZSkgeyB9XHJcblxyXG4gIEBWaWV3Q2hpbGQoXCJzZWFyY2hMYWJlbFwiLCB7IHN0YXRpYzogdHJ1ZSB9KSBzZWFyY2hMYWJlbDogRWxlbWVudFJlZjtcclxuICBhZGRyZXNzO1xyXG4gIHN1Z2dlc3Rpb25zID0gbmV3IE9ic2VydmFibGVBcnJheTxTdWdnZXN0aW9uPigpO1xyXG4gIHBsYWNlU3VnZ2VzdGlvbnMgPSBuZXcgT2JzZXJ2YWJsZUFycmF5PFN0cmluZz4oKTtcclxuICBwbGFjZUFkZHJlc3NlcyA9IG5ldyBPYnNlcnZhYmxlQXJyYXk8U3RyaW5nPigpO1xyXG4gIHR5cGUgPSB0aGlzLnRyYW5zZmVyU2VydmljZS5nZXREYXRhKCk7XHJcblxyXG4gIGlkcyA9IG5ldyBTZXQoKTtcclxuICBteVRpbWVyO1xyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICBcdC8vIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5zZWFyY2hMYWJlbC5uYXRpdmVFbGVtZW50LmZvY3VzKCksIDEwMCk7XHJcbiAgfVxyXG5cclxuICBjbG9zZSgpIHtcclxuICBcdHRoaXMucGFyYW1zLmNsb3NlQ2FsbGJhY2soKTtcclxuICAgfVxyXG5cclxuICAgc2VsZWN0UGxhY2UocGxhY2UsIGFkZHJlc3MpIHtcclxuICAgXHRpZih0aGlzLnR5cGUgPT0gJ3N0YXJ0JylcclxuICAgXHRcdHRoaXMucGFyYW1zLmNsb3NlQ2FsbGJhY2soeydzdGFydCc6IHBsYWNlLCAnYWRkcmVzcyc6IGFkZHJlc3N9KTtcclxuICAgXHRlbHNlXHJcbiAgIFx0XHR0aGlzLnBhcmFtcy5jbG9zZUNhbGxiYWNrKHsnZW5kJzogcGxhY2UsICdhZGRyZXNzJzogYWRkcmVzc30pO1xyXG4gICB9XHJcblxyXG4gIHNlYXJjaChhcmdzKSB7XHJcbiAgXHRjbGVhckludGVydmFsKHRoaXMubXlUaW1lcik7XHJcbiAgXHR0aGlzLm15VGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICBcdFx0bGV0IHNlYXJjaEJhciA9IDxTZWFyY2hCYXI+IGFyZ3Mub2JqZWN0O1xyXG5cdCAgICB0aGlzLmlkcy5jbGVhcigpO1xyXG5cdCAgICB0aGlzLnN1Z2dlc3Rpb25zLnNwbGljZSgwKTtcclxuXHQgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcblx0ICAgIHRoaXMucGxhY2VzU2VydmljZS5nZXRQbGFjZVJlc3VsdHMoc2VhcmNoQmFyLnRleHQpLnN1YnNjcmliZSgoZGF0YTogYW55KSA9PiB7XHJcblx0XHQgICAgZm9yKHZhciBpID0gMDsgaSA8IGRhdGEucmVzdWx0cy5sZW5ndGg7IGkrKykge1xyXG5cdFx0ICAgICAgXHRpZighdGhpcy5pZHMuaGFzKGRhdGEucmVzdWx0c1tpXS5wbGFjZV9pZCkpXHJcblx0XHQgICAgICBcdFx0dGhpcy5zdWdnZXN0aW9ucy5wdXNoKG5ldyBTdWdnZXN0aW9uKGRhdGEucmVzdWx0c1tpXS5uYW1lLCBkYXRhLnJlc3VsdHNbaV0uZm9ybWF0dGVkX2FkZHJlc3MpKTtcclxuXHRcdCAgICAgIFx0dGhpcy5pZHMuYWRkKGRhdGEucmVzdWx0c1tpXS5wbGFjZV9pZCk7XHJcblx0XHQgICAgfVxyXG5cdFx0ICB9KTtcclxuXHRcdH0sIDEwMCk7XHJcblx0XHR0aGlzLnBsYWNlc1NlcnZpY2UuZ2V0QXV0b2NvbXBsZXRlUmVzdWx0c0FkZHJlc3Moc2VhcmNoQmFyLnRleHQpLnN1YnNjcmliZSgoZGF0YTogYW55KSA9PiB7XHJcblx0XHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkYXRhLnByZWRpY3Rpb25zLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdCAgXHRpZighdGhpcy5pZHMuaGFzKGRhdGEucHJlZGljdGlvbnNbaV0ucGxhY2VfaWQpKVxyXG5cdFx0XHQgIFx0XHR0aGlzLnN1Z2dlc3Rpb25zLnB1c2gobmV3IFN1Z2dlc3Rpb24oZGF0YS5wcmVkaWN0aW9uc1tpXS5zdHJ1Y3R1cmVkX2Zvcm1hdHRpbmcubWFpbl90ZXh0LCBkYXRhLnByZWRpY3Rpb25zW2ldLnN0cnVjdHVyZWRfZm9ybWF0dGluZy5zZWNvbmRhcnlfdGV4dCkpO1xyXG5cdFx0XHQgIFx0dGhpcy5pZHMuYWRkKGRhdGEucHJlZGljdGlvbnNbaV0ucGxhY2VfaWQpO1xyXG5cdFx0ICBcdH1cclxuXHRcdH0pO1xyXG5cdFx0Ly8gdGhpcy5wbGFjZXNTZXJ2aWNlLmdldEF1dG9jb21wbGV0ZVJlc3VsdHNFc3RhYmxpc2htZW50KHNlYXJjaEJhci50ZXh0KS5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4ge1xyXG5cdFx0Ly8gXHQgIGZvcih2YXIgaSA9IDA7IGkgPCBkYXRhLnByZWRpY3Rpb25zLmxlbmd0aDsgaSsrKSB7XHJcblx0XHQvLyAgICAgXHRpZighdGhpcy5pZHMuaGFzKGRhdGEucHJlZGljdGlvbnNbaV0ucGxhY2VfaWQpKVxyXG5cdFx0Ly8gICAgIFx0XHR0aGlzLnN1Z2dlc3Rpb25zLnB1c2gobmV3IFN1Z2dlc3Rpb24oZGF0YS5wcmVkaWN0aW9uc1tpXS5zdHJ1Y3R1cmVkX2Zvcm1hdHRpbmcubWFpbl90ZXh0LCBkYXRhLnByZWRpY3Rpb25zW2ldLnN0cnVjdHVyZWRfZm9ybWF0dGluZy5zZWNvbmRhcnlfdGV4dCkpO1xyXG5cdFx0Ly8gICAgIFx0dGhpcy5pZHMuYWRkKGRhdGEucHJlZGljdGlvbnNbaV0ucGxhY2VfaWQpO1xyXG5cdFx0Ly8gICAgIH1cclxuXHRcdC8vIH0pO1xyXG5cdFx0dGhpcy5wbGFjZXNTZXJ2aWNlLmdldEF1dG9jb21wbGV0ZVJlc3VsdHNDaXR5KHNlYXJjaEJhci50ZXh0KS5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4ge1xyXG5cdFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGF0YS5wcmVkaWN0aW9ucy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHQgIFx0aWYoIXRoaXMuaWRzLmhhcyhkYXRhLnByZWRpY3Rpb25zW2ldLnBsYWNlX2lkKSlcclxuXHRcdFx0ICBcdFx0dGhpcy5zdWdnZXN0aW9ucy5wdXNoKG5ldyBTdWdnZXN0aW9uKGRhdGEucHJlZGljdGlvbnNbaV0uc3RydWN0dXJlZF9mb3JtYXR0aW5nLm1haW5fdGV4dCwgZGF0YS5wcmVkaWN0aW9uc1tpXS5zdHJ1Y3R1cmVkX2Zvcm1hdHRpbmcuc2Vjb25kYXJ5X3RleHQpKTtcclxuXHRcdFx0ICBcdHRoaXMuaWRzLmFkZChkYXRhLnByZWRpY3Rpb25zW2ldLnBsYWNlX2lkKTtcclxuXHRcdCAgXHR9XHJcblx0XHR9KTtcclxuICBcdH0sIDUwMCk7ICBcdFxyXG4gIH1cclxuXHJcbiAgYXV0b2NvbXBsZXRlKCkge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICBcdHRoaXMuaWRzLmNsZWFyKCk7XHJcbiAgICAgIHRoaXMuc3VnZ2VzdGlvbnMuc3BsaWNlKDApO1xyXG4gICAgICB0aGlzLnBsYWNlc1NlcnZpY2UuZ2V0UGxhY2VSZXN1bHRzKHRoaXMuYWRkcmVzcykuc3Vic2NyaWJlKChkYXRhOiBhbnkpID0+IHtcclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgZGF0YS5yZXN1bHRzLmxlbmd0aDsgaSsrKSB7XHJcblx0ICAgICAgXHRpZighdGhpcy5pZHMuaGFzKGRhdGEucmVzdWx0c1tpXS5wbGFjZV9pZCkpXHJcblx0ICAgICAgXHRcdHRoaXMuc3VnZ2VzdGlvbnMucHVzaChuZXcgU3VnZ2VzdGlvbihkYXRhLnJlc3VsdHNbaV0ubmFtZSwgZGF0YS5yZXN1bHRzW2ldLmZvcm1hdHRlZF9hZGRyZXNzKSk7XHJcblx0ICAgICAgXHR0aGlzLmlkcy5hZGQoZGF0YS5yZXN1bHRzW2ldLnBsYWNlX2lkKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuXHQgICAgICB0aGlzLnBsYWNlc1NlcnZpY2UuZ2V0QXV0b2NvbXBsZXRlUmVzdWx0c0FkZHJlc3ModGhpcy5hZGRyZXNzKS5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4ge1xyXG5cdCAgICAgIFx0ICBmb3IodmFyIGkgPSAwOyBpIDwgZGF0YS5wcmVkaWN0aW9ucy5sZW5ndGg7IGkrKykge1xyXG5cdCAgICAgICAgICBcdGlmKCF0aGlzLmlkcy5oYXMoZGF0YS5wcmVkaWN0aW9uc1tpXS5wbGFjZV9pZCkpXHJcblx0ICAgICAgICAgIFx0XHR0aGlzLnN1Z2dlc3Rpb25zLnB1c2gobmV3IFN1Z2dlc3Rpb24oZGF0YS5wcmVkaWN0aW9uc1tpXS5zdHJ1Y3R1cmVkX2Zvcm1hdHRpbmcubWFpbl90ZXh0LCBkYXRhLnByZWRpY3Rpb25zW2ldLnN0cnVjdHVyZWRfZm9ybWF0dGluZy5zZWNvbmRhcnlfdGV4dCkpO1xyXG5cdCAgICAgICAgICBcdHRoaXMuaWRzLmFkZChkYXRhLnByZWRpY3Rpb25zW2ldLnBsYWNlX2lkKTtcclxuXHQgICAgICAgICAgfVxyXG5cdCAgICAgIH0pO1xyXG5cdCAgICAgIC8vIHRoaXMucGxhY2VzU2VydmljZS5nZXRBdXRvY29tcGxldGVSZXN1bHRzRXN0YWJsaXNobWVudCh0aGlzLmFkZHJlc3MpLnN1YnNjcmliZSgoZGF0YTogYW55KSA9PiB7XHJcblx0ICAgICAgLy8gXHQgIGZvcih2YXIgaSA9IDA7IGkgPCBkYXRhLnByZWRpY3Rpb25zLmxlbmd0aDsgaSsrKSB7XHJcblx0ICAgICAgLy8gICAgIFx0aWYoIXRoaXMuaWRzLmhhcyhkYXRhLnByZWRpY3Rpb25zW2ldLnBsYWNlX2lkKSlcclxuXHQgICAgICAvLyAgICAgXHRcdHRoaXMuc3VnZ2VzdGlvbnMucHVzaChuZXcgU3VnZ2VzdGlvbihkYXRhLnByZWRpY3Rpb25zW2ldLnN0cnVjdHVyZWRfZm9ybWF0dGluZy5tYWluX3RleHQsIGRhdGEucHJlZGljdGlvbnNbaV0uc3RydWN0dXJlZF9mb3JtYXR0aW5nLnNlY29uZGFyeV90ZXh0KSk7XHJcblx0ICAgICAgLy8gICAgIFx0dGhpcy5pZHMuYWRkKGRhdGEucHJlZGljdGlvbnNbaV0ucGxhY2VfaWQpO1xyXG5cdCAgICAgIC8vICAgICB9XHJcblx0ICAgICAgLy8gfSk7XHJcblx0ICAgICAgdGhpcy5wbGFjZXNTZXJ2aWNlLmdldEF1dG9jb21wbGV0ZVJlc3VsdHNDaXR5KHRoaXMuYWRkcmVzcykuc3Vic2NyaWJlKChkYXRhOiBhbnkpID0+IHtcclxuXHQgICAgICBcdCAgZm9yKHZhciBpID0gMDsgaSA8IGRhdGEucHJlZGljdGlvbnMubGVuZ3RoOyBpKyspIHtcclxuXHQgICAgICAgICAgXHRpZighdGhpcy5pZHMuaGFzKGRhdGEucHJlZGljdGlvbnNbaV0ucGxhY2VfaWQpKVxyXG5cdCAgICAgICAgICBcdFx0dGhpcy5zdWdnZXN0aW9ucy5wdXNoKG5ldyBTdWdnZXN0aW9uKGRhdGEucHJlZGljdGlvbnNbaV0uc3RydWN0dXJlZF9mb3JtYXR0aW5nLm1haW5fdGV4dCwgZGF0YS5wcmVkaWN0aW9uc1tpXS5zdHJ1Y3R1cmVkX2Zvcm1hdHRpbmcuc2Vjb25kYXJ5X3RleHQpKTtcclxuXHQgICAgICAgICAgXHR0aGlzLmlkcy5hZGQoZGF0YS5wcmVkaWN0aW9uc1tpXS5wbGFjZV9pZCk7XHJcblx0ICAgICAgICAgIH1cclxuXHQgICAgICB9KTtcclxuICAgICAgfSwgMTAwKTtcclxuXHJcbiAgICB9LCA0MDApO1xyXG4gIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1thcHBMb2dpbl0nXG59KVxuZXhwb3J0IGNsYXNzIExvZ2luRGlyZWN0aXZlIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLypcXG5BZGQgeW91ciBOYXRpdmVTY3JpcHQgc3BlY2lmaWMgc3R5bGVzIGhlcmUuXFxuVG8gbGVhcm4gbW9yZSBhYm91dCBzdHlsaW5nIGluIE5hdGl2ZVNjcmlwdCBzZWU6XFxuaHR0cHM6Ly9kb2NzLm5hdGl2ZXNjcmlwdC5vcmcvYW5ndWxhci91aS9zdHlsaW5nXFxuKi9cXG5cXG4ubG9naW4ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgY29sb3I6ICNhYzAwZTY7XFxuICAgIC8qcGFkZGluZzogNnB4IDI0cHg7Ki9cXG4gICAgYm9yZGVyLXdpZHRoOiAxO1xcbiAgICBib3JkZXItY29sb3I6ICNhYzAwZTY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZmxvYXQ6IGNlbnRlcjtcXG4gICAgbWFyZ2luOiBhdXRvOyBcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJTZWdvZSBVSVxcXCIsQXJpYWwsc2Fucy1zZXJpZjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTU7XFxuICAgIHdpZHRoOiAxMjA7XFxuICAgIGhlaWdodDogNDA7XFxufVxcblxcbi5sb2dpbjpoaWdobGlnaHRlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWU2ZmY7XFxufVxcblxcbi5sb2dpbi1pbmZvIHtcXG5cXHRtYXJnaW4tdG9wOiAxMjA7XFxufVxcblxcbi5ob21lc2NyZWVuLWxvZ28ge1xcblxcdG1hcmdpbi1ib3R0b206IDIwMDtcXG59XFxuXFxuLmgxIHtcXG5cXHRmb250LXNpemU6IDUwO1xcblxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxuXFx0Y29sb3I6ICNhYzAwZTY7XFxufVxcblxcbi5sb2dpbi13cmFwcGVyIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xcbn1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImxvZ2luLXdyYXBwZXJcXFwiPlxcclxcbiAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJsb2dpbi1pbmZvXFxcIj5cXHJcXG4gICAgPEltYWdlIHNyYz1cXFwifi9pbWcvbG9nby5wbmdcXFwiIGhlaWdodD1cXFwiMTgwXFxcIiB3aWR0aD1cXFwiMTgwXFxcIiBjbGFzcz1cXFwiaG9tZXNjcmVlbi1sb2dvXFxcIj48L0ltYWdlPlxcclxcbjwhLS0gICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwic2xvZ2Fuc1xcXCI+XFxyXFxuICAgICAgPExhYmVsIGNsYXNzPVxcXCJoM1xcXCIgdGV4dD1cXFwiRmluZCBSaWRlcyBGYXN0XFxcIj48L0xhYmVsPlxcclxcbiAgICAgIDxMYWJlbCBjbGFzcz1cXFwiaDNcXFwiIHRleHQ9XFxcIkNvbm5lY3Qgd2l0aCBvdGhlciBzdHVkZW50c1xcXCI+PC9MYWJlbD5cXHJcXG4gICAgPC9TdGFja0xheW91dD4gLS0+XFxyXFxuICA8L1N0YWNrTGF5b3V0PlxcclxcbiAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJsb2dpbl93cmFwcGVyXFxcIj5cXHJcXG4gICAgPEJ1dHRvbiBjbGFzcz1cXFwibG9naW5cXFwiICh0YXApPVxcXCJ0b0xvZ0luKClcXFwiIHRleHQ9XFxcIkxvZ2luXFxcIj48L0J1dHRvbj5cXHJcXG4gICAgPEJ1dHRvbiBjbGFzcz1cXFwibG9naW5cXFwiICh0YXApPVxcXCJ0b1NpZ25VcCgpXFxcIiB0ZXh0PVxcXCJTaWduIHVwXFxcIj48L0J1dHRvbj5cXHJcXG4gIDwvU3RhY2tMYXlvdXQ+XFxyXFxuPC9TdGFja0xheW91dD5cXHJcXG5cXHJcXG48IS0tXFxyXFxuT3JpZ2luYWwgV2ViIHRlbXBsYXRlOlxcclxcblxcclxcbjxkaXYgY2xhc3M9XFxcImNvbnRlbnQtcmlnaHRcXFwiPlxcclxcbiAgPGRpdiBjbGFzcz1cXFwibG9naW5fd3JhcHBlclxcXCI+XFxyXFxuICAgICAgPGlucHV0IHR5cGU9XFxcImJ1dHRvblxcXCIgdmFsdWU9XFxcIkxvZ2luXFxcIiBjbGFzcz1cXFwibG9naW5cXFwiIChjbGljayk9XFxcInRvTG9nSW4oKVxcXCIgLz5cXHJcXG4gICAgICA8aW5wdXQgdHlwZT1cXFwiYnV0dG9uXFxcIiB2YWx1ZT1cXFwiU2lnbiB1cFxcXCIgY2xhc3M9XFxcImxvZ2luXFxcIiBpZD1cXFwibG9naW4yXFxcIiAoY2xpY2spPVxcXCJ0b1NpZ25VcCgpXFxcIi8+XFxyXFxuICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG48ZGl2IGNsYXNzPVxcXCJjb250ZW50LWxlZnRcXFwiPlxcclxcbiAgPGRpdiBjbGFzcz1cXFwibG9naW5faW5mb1xcXCI+XFxyXFxuICAgIDxoMT5Db2xsZWdlUG9vbDwvaDE+XFxyXFxuICAgIDxpbWcgc3JjPVxcXCJzcmMvaW1nL2xvZ28ucG5nXFxcIiBhbHQ9XFxcIkxvZ29cXFwiIGhlaWdodD1cXFwiOTBcXFwiIHdpZHRoPVxcXCI5MFxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInNsb2dhbnNcXFwiPlxcclxcbiAgICAgIDxoMz5GaW5kIFJpZGVzIEZhc3Q8YnI+XFxyXFxuICAgICAgQ29ubmVjdCB3aXRoIG90aGVyIHN0dWRlbnRzPC9oMz5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG4tLT5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xyXG4vLyBpbXBvcnQgeyBDb2duaXRvQXV0aCB9IGZyb20gJ2FtYXpvbi1jb2duaXRvLWF1dGgtanMvZGlzdC9hbWF6b24tY29nbml0by1hdXRoJztcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2VcIjtcclxuLy8gaW1wb3J0IEF1dGggZnJvbSAnQGF3cy1hbXBsaWZ5L2F1dGgnO1xyXG4vLyBjb25zdCBmaXJlYmFzZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCIpO1xyXG5pbXBvcnQgKiBhcyBmaXJlYmFzZSBmcm9tICduYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlJztcclxuLy8gaW1wb3J0IHsgQW5ndWxhckZpcmVBdXRoIH0gZnJvbSAnQGFuZ3VsYXIvZmlyZS9hdXRoJztcclxuLy8gaW1wb3J0IHsgYXV0aCB9IGZyb20gJ2ZpcmViYXNlL2FwcCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1sb2dpbicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2xvZ2luLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9sb2dpbi5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMsIHByaXZhdGUgcGFnZTogUGFnZSkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIFx0dGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XHJcbiAgICB2YXIgZmlyZWJhc2VDb25maWcgPSB7XHJcbiAgICAgIGFwaUtleTogXCJBSXphU3lCR3VpWXBNMTM4UTZheXFETVJVVldKcDFDRTlXQjA5TndcIixcclxuICAgICAgYXV0aERvbWFpbjogXCJjb2xsZWdlcG9vbC0xNTUyNzQ5MTE4NjE3LmZpcmViYXNlYXBwLmNvbVwiLFxyXG4gICAgICBkYXRhYmFzZVVSTDogXCJodHRwczovL2NvbGxlZ2Vwb29sLTE1NTI3NDkxMTg2MTcuZmlyZWJhc2Vpby5jb21cIixcclxuICAgICAgcHJvamVjdElkOiBcImNvbGxlZ2Vwb29sLTE1NTI3NDkxMTg2MTdcIixcclxuICAgICAgc3RvcmFnZUJ1Y2tldDogXCJjb2xsZWdlcG9vbC0xNTUyNzQ5MTE4NjE3LmFwcHNwb3QuY29tXCIsXHJcbiAgICAgIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjM3NTI2MzY4MDE4M1wiLFxyXG4gICAgICBhcHBJRDogXCJjb2xsZWdlcG9vbC0xNTUyNzQ5MTE4NjE3XCIsXHJcbiAgICB9O1xyXG5cclxuICAgIGZpcmViYXNlLmluaXQoZmlyZWJhc2VDb25maWcpLnRoZW4oXHJcbiAgICAgICgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImZpcmViYXNlLmluaXQgZG9uZVwiKTtcclxuICAgICAgfSxcclxuICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBmaXJlYmFzZS5pbml0IGVycm9yOiAke2Vycm9yfWApO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gICAgLy8gZmlyZWJhc2UuYXV0aCgpLmNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCgnYWRtaW4nLCAna3l2ZXJuMTIzJykuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcclxuICAgIC8vICAgLy8gSGFuZGxlIEVycm9ycyBoZXJlLlxyXG4gICAgLy8gICB2YXIgZXJyb3JDb2RlID0gZXJyb3IuY29kZTtcclxuICAgIC8vICAgdmFyIGVycm9yTWVzc2FnZSA9IGVycm9yLm1lc3NhZ2U7XHJcbiAgICAvLyAgIC8vIC4uLlxyXG4gICAgLy8gfSk7XHJcblxyXG4gIH1cclxuXHJcbiAgdG9Mb2dJbigpIHtcclxuICAgIC8vIEF1dGguc2lnbkluKFwicGhpbGxpbVwiLCBcIkNvbGxlZ2Vwb29sNjkqXCIpXHJcbiAgICAvLyAudGhlbih1c2VyID0+IHtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyh1c2VyKVxyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKFwicmVkaXJlY3RpbmdcIilcclxuXHJcbiAgICAvLyB9KVxyXG5cclxuICAgIHZhciBjcmVkZW50aWFscyA6IGZpcmViYXNlLkxvZ2luT3B0aW9ucyA9IHtcclxuICAgICAgcGFzc3dvcmRPcHRpb25zOiB7XHJcbiAgICAgICAgZW1haWw6ICdhZGFtLnllZUBnbWFpbC5jb20nLFxyXG4gICAgICAgIHBhc3N3b3JkOiAna3l2ZXJuMTIzJyxcclxuICAgICAgfSxcclxuICAgICAgdHlwZTogZmlyZWJhc2UuTG9naW5UeXBlLlBBU1NXT1JEXHJcbiAgICB9XHJcbiAgICBmaXJlYmFzZS5sb2dpbihjcmVkZW50aWFscykuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSlcclxuICAgIGZpcmViYXNlLmdldEN1cnJlbnRVc2VyKCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICB9KVxyXG5cclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnbmF2aWdhdGlvbiddKTtcclxuICBcdC8vIHdpbmRvdy5sb2NhdGlvbi5ocmVmPSdodHRwczovL2NvbGxlZ2Vwb29saW5nLmF1dGgudXMtZWFzdC0yLmFtYXpvbmNvZ25pdG8uY29tL2xvZ2luP3Jlc3BvbnNlX3R5cGU9dG9rZW4mY2xpZW50X2lkPTRzc2xtbWd2OXBuNWxiNTA4N2FhajVyNTk5JnJlZGlyZWN0X3VyaT1odHRwOi8vbG9jYWxob3N0OjQyMDAvbG9naW5yb3V0ZSZzdGF0ZT1TVEFURSZzY29wZT1hd3MuY29nbml0by5zaWduaW4udXNlci5hZG1pbitvcGVuaWQnO1xyXG4gIH1cclxuXHJcbiAgdG9TaWduVXAoKXtcclxuICAgIGZpcmViYXNlLmNyZWF0ZVVzZXIoe1xyXG4gICAgICBlbWFpbDogJ2FkYW0ueWVlQGdtYWlsLmNvbScsXHJcbiAgICAgIHBhc3N3b3JkOiAna3l2ZXJuMTIzJ1xyXG4gICAgfSkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSlcclxuICAgIC8vIHRoaXMuYWZBdXRoLmF1dGguY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkKCdhZGFtLnllZUBnbWFpbC5jb20nLCAna3l2ZXJuMTIzJyk7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ25hdmlnYXRpb24nXSk7XHJcbiAgXHQvLyB3aW5kb3cubG9jYXRpb24uaHJlZj0naHR0cHM6Ly9jb2xsZWdlcG9vbGluZy5hdXRoLnVzLWVhc3QtMi5hbWF6b25jb2duaXRvLmNvbS9zaWdudXA/cmVzcG9uc2VfdHlwZT10b2tlbiZjbGllbnRfaWQ9NHNzbG1tZ3Y5cG41bGI1MDg3YWFqNXI1OTkmcmVkaXJlY3RfdXJpPWh0dHA6Ly9sb2NhbGhvc3Q6NDIwMC9sb2dpbnJvdXRlJnN0YXRlPVNUQVRFJnNjb3BlPWF3cy5jb2duaXRvLnNpZ25pbi51c2VyLmFkbWluK29wZW5pZCc7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSnd0SGVscGVyU2VydmljZSB9IGZyb20gJ0BhdXRoMC9hbmd1bGFyLWp3dCc7XHJcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSAnLi91c2VyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi91c2VyLm1vZGVsJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgUGF5bWVudFNlcnZpY2UgfSBmcm9tICcuL3BheW1lbnQuc2VydmljZSc7XHJcbmltcG9ydCAqIGFzIGZpcmViYXNlIGZyb20gJ25hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2UnO1xyXG5pbXBvcnQgKiBhcyBhcHBTZXR0aW5ncyBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uLXNldHRpbmdzJztcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMb2dpbmNoZWNrU2VydmljZSB7XHJcblx0Ly9teVN0b3JhZ2UgPSB3aW5kb3cubG9jYWxTdG9yYWdlO1xyXG5cdG15U3RvcmFnZSA9IG51bGw7XHJcblx0Ly91c2VyIGZyb20gZGF0YWJhc2VcclxuXHR1c2VyO1xyXG5cdC8vbGlzdCBvZiBhbGwgdXNlcnMgZnJvbSBkYXRhYmFzZVxyXG5cdHVzZXJzO1xyXG5cdC8vdXNlciBpbmZvIGZyb20gY29nbml0b1xyXG5cdHVzZXJJbmZvID0gbnVsbDtcclxuXHR1aWQ7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsIHByaXZhdGUgcGF5bWVudFNlcnZpY2U6IFBheW1lbnRTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucykgeyB9XHJcblxyXG4gIGFkZFVzZXJUb0ZpcmVzdG9yZSh1aWQsIGFkZHJlc3MsIGJpcnRoZGF0ZSwgZW1haWwsIGZpcnN0X25hbWUsIGxhc3RfbmFtZSwgZ2VuZGVyLCBwaG9uZV9udW1iZXIsIHJpZGVzX2dpdmVuLCByaWRlc19yZWNlaXZlZCwgcHJvZmlsZV9zb3VyY2UsIHRva2VuKSB7XHJcbiAgXHRjb25zdCB1c2Vyc0NvbGxlY3Rpb24gPSBmaXJlYmFzZS5maXJlc3RvcmUuY29sbGVjdGlvbigndXNlcnMnKTtcclxuICBcdHVzZXJzQ29sbGVjdGlvbi5kb2ModWlkKS5zZXQoe1xyXG4gIFx0XHRhZGRyZXNzOiBhZGRyZXNzLFxyXG4gIFx0XHRiaXJ0aGRhdGU6IGJpcnRoZGF0ZSxcclxuICBcdFx0ZW1haWw6IGVtYWlsLFxyXG4gIFx0XHRmaXJzdF9uYW1lOiBmaXJzdF9uYW1lLFxyXG4gIFx0XHRsYXN0X25hbWU6IGxhc3RfbmFtZSxcclxuICBcdFx0Z2VuZGVyOiBnZW5kZXIsXHJcbiAgXHRcdHBob25lX251bWJlcjogcGhvbmVfbnVtYmVyLFxyXG4gIFx0XHRyaWRlc19naXZlbjogcmlkZXNfZ2l2ZW4sXHJcbiAgXHRcdHJpZGVzX3JlY2VpdmVkOiByaWRlc19yZWNlaXZlZCxcclxuICAgICAgcHJvZmlsZV9zb3VyY2U6IHByb2ZpbGVfc291cmNlLFxyXG4gIFx0XHRwb3N0czogW10sXHJcbiAgICAgIGNoYXRzOiBbXSxcclxuICAgICAgdG9rZW5zOiBbdG9rZW5dXHJcbiAgXHR9KTtcclxuICB9XHJcblxyXG4gIGRlY29kZVRva2VuKHRva2VuKSB7XHJcblxyXG4gIH1cclxuXHJcbiAgY2hlY2tVc2VyKCkge1xyXG5cclxuICB9XHJcblxyXG4gIGNsZWFySW5mbygpIHtcclxuICBcdHRoaXMudXNlciA9IG51bGw7XHJcbiAgXHR0aGlzLnVzZXJJbmZvID0gbnVsbDtcclxuICBcdHRoaXMudXNlcnMgPSBudWxsO1xyXG4gIFx0dGhpcy51aWQgPSBudWxsO1xyXG4gIFx0YXBwU2V0dGluZ3MuY2xlYXIoKTtcclxuICB9XHJcbiAgXHJcbiAgYWRkVXNlclRvQnJhaW50cmVlKHVzZXJuYW1lLCBuYW1lLCBlbWFpbCkge1xyXG4gIFx0dGhpcy5wYXltZW50U2VydmljZS5hZGRQYXltZW50VXNlcih0aGlzLnVpZCwgdXNlcm5hbWUsIG5hbWUsIGVtYWlsKS5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4ge1xyXG4gIFx0XHRmaXJlYmFzZS5maXJlc3RvcmUuY29sbGVjdGlvbigndXNlcnMnKS5kb2ModGhpcy51aWQpLnVwZGF0ZSh7XHJcbiAgXHRcdFx0cGF5bWVudF9pZDogZGF0YS5jdXN0b21lci5pZFxyXG4gIFx0XHR9KVxyXG4gIFx0fSlcclxuICBcdC8vIHRoaXMucGF5bWVudFNlcnZpY2UuZ2V0UGF5bWVudFVzZXJCeUlkKCcyNTg3MDM5NTYnKS5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4ge1xyXG4gIFx0Ly8gXHRjb25zb2xlLmxvZyhkYXRhKTtcclxuICBcdC8vIH0pXHJcbiAgXHRjb25zb2xlLmxvZygnYWRkZWQgdG8gYnJhaW50cmVlJyk7XHJcbiAgfVxyXG5cclxuICBsb2dpblVzZXIodWlkKSB7XHJcbiAgXHRhcHBTZXR0aW5ncy5zZXRTdHJpbmcoXCJ1aWRcIiwgdWlkKTtcclxuICBcdGNvbnNvbGUubG9nKHVpZClcclxuICBcdHRoaXMudWlkID0gdWlkO1xyXG4gIH1cclxuXHJcbiAgbG9naW5DaGVjaygpIHtcclxuXHRpZih0aGlzLmdldFVzZXIgPT0gbnVsbClcclxuXHRcdHRoaXMucm91dGVyLm5hdmlnYXRlKFsnd2VsY29tZSddLCB7Y2xlYXJIaXN0b3J5OiB0cnVlfSlcclxuICB9XHJcblxyXG4gIGdldFVzZXJGcm9tTG9jYWxTdG9yYWdlKCkge1xyXG5cdHJldHVybiBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJ1aWRcIik7XHJcbiAgfVxyXG5cclxuICBnZXRVc2VyKCkge1xyXG5cdHRoaXMudWlkID0gdGhpcy5nZXRVc2VyRnJvbUxvY2FsU3RvcmFnZSgpO1xyXG5cdHJldHVybiB0aGlzLnVpZDtcclxuICB9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSnd0SGVscGVyU2VydmljZSB9IGZyb20gJ0BhdXRoMC9hbmd1bGFyLWp3dCc7XHJcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSAnLi91c2VyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi91c2VyLm1vZGVsJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgUGF5bWVudFNlcnZpY2UgfSBmcm9tICcuL3BheW1lbnQuc2VydmljZSc7XHJcbmltcG9ydCAqIGFzIGZpcmViYXNlIGZyb20gJ25hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2UnO1xyXG5pbXBvcnQgKiBhcyBhcHBTZXR0aW5ncyBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uLXNldHRpbmdzJztcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMb2dpbmNoZWNrU2VydmljZSB7XHJcblx0Ly9teVN0b3JhZ2UgPSB3aW5kb3cubG9jYWxTdG9yYWdlO1xyXG5cdG15U3RvcmFnZSA9IG51bGw7XHJcblx0Ly91c2VyIGZyb20gZGF0YWJhc2VcclxuXHR1c2VyO1xyXG5cdC8vbGlzdCBvZiBhbGwgdXNlcnMgZnJvbSBkYXRhYmFzZVxyXG5cdHVzZXJzO1xyXG5cdC8vdXNlciBpbmZvIGZyb20gY29nbml0b1xyXG5cdHVzZXJJbmZvID0gbnVsbDtcclxuXHR1aWQ7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsIHByaXZhdGUgcGF5bWVudFNlcnZpY2U6IFBheW1lbnRTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucykgeyB9XHJcblxyXG4gIGFkZFVzZXJUb0ZpcmVzdG9yZSh1aWQsIGFkZHJlc3MsIGJpcnRoZGF0ZSwgZW1haWwsIGZpcnN0X25hbWUsIGxhc3RfbmFtZSwgZ2VuZGVyLCBwaG9uZV9udW1iZXIsIHJpZGVzX2dpdmVuLCByaWRlc19yZWNlaXZlZCwgcHJvZmlsZV9zb3VyY2UsIHRva2VuKSB7XHJcbiAgXHRjb25zdCB1c2Vyc0NvbGxlY3Rpb24gPSBmaXJlYmFzZS5maXJlc3RvcmUuY29sbGVjdGlvbigndXNlcnMnKTtcclxuICBcdHVzZXJzQ29sbGVjdGlvbi5kb2ModWlkKS5zZXQoe1xyXG4gIFx0XHRhZGRyZXNzOiBhZGRyZXNzLFxyXG4gIFx0XHRiaXJ0aGRhdGU6IGJpcnRoZGF0ZSxcclxuICBcdFx0ZW1haWw6IGVtYWlsLFxyXG4gIFx0XHRmaXJzdF9uYW1lOiBmaXJzdF9uYW1lLFxyXG4gIFx0XHRsYXN0X25hbWU6IGxhc3RfbmFtZSxcclxuICBcdFx0Z2VuZGVyOiBnZW5kZXIsXHJcbiAgXHRcdHBob25lX251bWJlcjogcGhvbmVfbnVtYmVyLFxyXG4gIFx0XHRyaWRlc19naXZlbjogcmlkZXNfZ2l2ZW4sXHJcbiAgXHRcdHJpZGVzX3JlY2VpdmVkOiByaWRlc19yZWNlaXZlZCxcclxuICAgICAgcHJvZmlsZV9zb3VyY2U6IHByb2ZpbGVfc291cmNlLFxyXG4gIFx0XHRwb3N0czogW10sXHJcbiAgICAgIGNoYXRzOiBbXSxcclxuICAgICAgdG9rZW5zOiBbdG9rZW5dXHJcbiAgXHR9KTtcclxuICB9XHJcblxyXG4gIGRlY29kZVRva2VuKHRva2VuKSB7XHJcblxyXG4gIH1cclxuXHJcbiAgY2hlY2tVc2VyKCkge1xyXG5cclxuICB9XHJcblxyXG4gIGNsZWFySW5mbygpIHtcclxuICBcdHRoaXMudXNlciA9IG51bGw7XHJcbiAgXHR0aGlzLnVzZXJJbmZvID0gbnVsbDtcclxuICBcdHRoaXMudXNlcnMgPSBudWxsO1xyXG4gIFx0dGhpcy51aWQgPSBudWxsO1xyXG4gIFx0YXBwU2V0dGluZ3MuY2xlYXIoKTtcclxuICB9XHJcbiAgXHJcbiAgYWRkVXNlclRvQnJhaW50cmVlKHVzZXJuYW1lLCBuYW1lLCBlbWFpbCkge1xyXG4gIFx0dGhpcy5wYXltZW50U2VydmljZS5hZGRQYXltZW50VXNlcih0aGlzLnVpZCwgdXNlcm5hbWUsIG5hbWUsIGVtYWlsKS5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4ge1xyXG4gIFx0XHRmaXJlYmFzZS5maXJlc3RvcmUuY29sbGVjdGlvbigndXNlcnMnKS5kb2ModGhpcy51aWQpLnVwZGF0ZSh7XHJcbiAgXHRcdFx0cGF5bWVudF9pZDogZGF0YS5jdXN0b21lci5pZFxyXG4gIFx0XHR9KVxyXG4gIFx0fSlcclxuICBcdC8vIHRoaXMucGF5bWVudFNlcnZpY2UuZ2V0UGF5bWVudFVzZXJCeUlkKCcyNTg3MDM5NTYnKS5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4ge1xyXG4gIFx0Ly8gXHRjb25zb2xlLmxvZyhkYXRhKTtcclxuICBcdC8vIH0pXHJcbiAgXHRjb25zb2xlLmxvZygnYWRkZWQgdG8gYnJhaW50cmVlJyk7XHJcbiAgfVxyXG5cclxuICBsb2dpblVzZXIodWlkKSB7XHJcbiAgXHRhcHBTZXR0aW5ncy5zZXRTdHJpbmcoXCJ1aWRcIiwgdWlkKTtcclxuICBcdGNvbnNvbGUubG9nKHVpZClcclxuICBcdHRoaXMudWlkID0gdWlkO1xyXG4gIH1cclxuXHJcbiAgbG9naW5DaGVjaygpIHtcclxuXHRpZih0aGlzLmdldFVzZXIgPT0gbnVsbClcclxuXHRcdHRoaXMucm91dGVyLm5hdmlnYXRlKFsnd2VsY29tZSddLCB7Y2xlYXJIaXN0b3J5OiB0cnVlfSlcclxuICB9XHJcblxyXG4gIGdldFVzZXJGcm9tTG9jYWxTdG9yYWdlKCkge1xyXG5cdHJldHVybiBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJ1aWRcIik7XHJcbiAgfVxyXG5cclxuICBnZXRVc2VyKCkge1xyXG5cdHRoaXMudWlkID0gdGhpcy5nZXRVc2VyRnJvbUxvY2FsU3RvcmFnZSgpO1xyXG5cdHJldHVybiB0aGlzLnVpZDtcclxuICB9XHJcblxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCIvKlxcbkFkZCB5b3VyIE5hdGl2ZVNjcmlwdCBzcGVjaWZpYyBzdHlsZXMgaGVyZS5cXG5UbyBsZWFybiBtb3JlIGFib3V0IHN0eWxpbmcgaW4gTmF0aXZlU2NyaXB0IHNlZTpcXG5odHRwczovL2RvY3MubmF0aXZlc2NyaXB0Lm9yZy9hbmd1bGFyL3VpL3N0eWxpbmdcXG4qL1wiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxTdGFja0xheW91dD5cXG4gIDxMYWJlbCB0ZXh0PVxcXCJsb2dpbnJvdXRlIHdvcmtzXFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCI+PC9MYWJlbD5cXG4gIDxMYWJlbCB0ZXh0PVxcXCJUaGlzIGlzIGEgbWlncmF0ZWQgY29tcG9uZW50XFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCI+PC9MYWJlbD5cXG4gIDxMYWJlbCB0ZXh0PVxcXCJVcGRhdGUgaXQgdG8gcHJvdmlkZSB0aGUgVUkgZWxlbWVudHMgcmVxdWlyZWQgaW4geW91ciBtb2JpbGUgYXBwXFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCI+PC9MYWJlbD5cXG48L1N0YWNrTGF5b3V0PlxcblxcbjwhLS1cXG5PcmlnaW5hbCBXZWIgdGVtcGxhdGU6XFxuXFxuPHA+XFxuICBSZWRpcmVjdGluZy4uLlxcbjwvcD5cXG5cXG4tLT5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMb2dpbmNoZWNrU2VydmljZSB9IGZyb20gJy4uL2xvZ2luY2hlY2suc2VydmljZSc7XG5pbXBvcnQgeyBUcmFuc2ZlclNlcnZpY2UgfSBmcm9tICcuLi9kYXRhdHJhbnNmZXIuc2VydmljZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtbG9naW5yb3V0ZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9sb2dpbnJvdXRlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbG9naW5yb3V0ZS5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTG9naW5yb3V0ZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBsb2dpbmNoZWNrU2VydmljZTogTG9naW5jaGVja1NlcnZpY2UsIHByaXZhdGUgdHJhbnNmZXJTZXJ2aWNlOiBUcmFuc2ZlclNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHsgfVxuICBpZFRva2VuID0gdGhpcy5nZXRQYXJhbWV0ZXJCeU5hbWUoXCJpZF90b2tlblwiKTtcbiAgbmdPbkluaXQoKSB7XG4gIFx0aWYodGhpcy5pZFRva2VuID09IG51bGwgfHwgdGhpcy5pZFRva2VuID09ICcnKVxuICBcdFx0dGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCgnL2xvZ2luJyk7XG5cbiAgXHR0aGlzLmxvZ2luY2hlY2tTZXJ2aWNlLmRlY29kZVRva2VuKHRoaXMuaWRUb2tlbik7XG4gIFx0dGhpcy5sb2dpbmNoZWNrU2VydmljZS5jaGVja1VzZXIoKTtcblxuICB9XG5cblx0Z2V0UGFyYW1ldGVyQnlOYW1lKG5hbWUpIHtcblx0ICAgIHZhciB1cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcblx0ICAgIG5hbWUgPSBuYW1lLnJlcGxhY2UoL1tcXFtcXF1dL2csIFwiXFxcXCQmXCIpO1xuXHQgICAgdmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cChcIls/JiNdXCIgKyBuYW1lICsgXCIoPShbXiYjXSopfCZ8I3wkKVwiKSxcblx0ICAgICAgICByZXN1bHRzID0gcmVnZXguZXhlYyh1cmwpO1xuXHQgICAgaWYgKCFyZXN1bHRzKSByZXR1cm4gbnVsbDtcblx0ICAgIGlmICghcmVzdWx0c1syXSkgcmV0dXJuICcnO1xuXHQgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChyZXN1bHRzWzJdLnJlcGxhY2UoL1xcKy9nLCBcIiBcIikpO1xuXHR9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLyogQWRkIG1vYmlsZSBzdHlsZXMgZm9yIHRoZSBjb21wb25lbnQgaGVyZS4gICovXFxuXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPEJ1dHRvbiB0ZXh0PVxcXCJtZXNzYWdlLW1vZGFsIHdvcmtzIVxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCI+PC9CdXR0b24+XCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtbWVzc2FnZS1tb2RhbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9tZXNzYWdlLW1vZGFsLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbWVzc2FnZS1tb2RhbC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTWVzc2FnZU1vZGFsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gXCIvKlxcbkFkZCB5b3VyIE5hdGl2ZVNjcmlwdCBzcGVjaWZpYyBzdHlsZXMgaGVyZS5cXG5UbyBsZWFybiBtb3JlIGFib3V0IHN0eWxpbmcgaW4gTmF0aXZlU2NyaXB0IHNlZTpcXG5odHRwczovL2RvY3MubmF0aXZlc2NyaXB0Lm9yZy9hbmd1bGFyL3VpL3N0eWxpbmdcXG4qL1wiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxQYWdlLmFjdGlvbkJhcj5cXHJcXG4gICAgPEFjdGlvbkJhciB0aXRsZT1cXFwie3sgYWN0aW9uQmFyVGl0bGUgfX1cXFwiPlxcclxcbiAgICBcXHQ8QWN0aW9uSXRlbSAodGFwKT1cXFwidG9NZXNzYWdlcygpXFxcIiBpY29uPVxcXCJ+L2ltZy9zZW5kX21lc3NhZ2VfaWNvbi5wbmdcXFwiIGlvcy5wb3NpdGlvbj1cXFwicmlnaHRcXFwiIHdpZHRoPVxcXCIyMFxcXCIgaGVpZ2h0PVxcXCIyMFxcXCIgI2FjdGlvbkl0ZW0+PC9BY3Rpb25JdGVtPlxcclxcbiAgICA8L0FjdGlvbkJhcj5cXHJcXG48L1BhZ2UuYWN0aW9uQmFyPlxcclxcblxcclxcbjxUYWJWaWV3IFsobmdNb2RlbCldPVxcXCJ0YWJTZWxlY3RlZEluZGV4XFxcIiAodGFiSXRlbVRhcCk9XFxcImhvbWUoKVxcXCIgKHNlbGVjdGVkSW5kZXhDaGFuZ2VkKT1cXFwib25TZWxlY3RlZEluZGV4Q2hhbmdlZCgkZXZlbnQpXFxcIiBhbmRyb2lkVGFic1Bvc2l0aW9uPVxcXCJib3R0b21cXFwiIHNlbGVjdGVkVGFiVGV4dENvbG9yPVxcXCIjYWMwMGU2XFxcIiAjdGFiVmlldz5cXHJcXG4gICAgPFBhZ2UgKnRhYkl0ZW09XFxcImhvbWVUYWJcXFwiPlxcclxcbiAgICBcXHQ8YXBwLWhvbWU+PC9hcHAtaG9tZT5cXHJcXG4gICAgPC9QYWdlPlxcclxcbiAgICA8UGFnZSAqdGFiSXRlbT1cXFwic2VhcmNoVGFiXFxcIj5cXHJcXG4gICAgXFx0PGFwcC1zZWFyY2g+PC9hcHAtc2VhcmNoPlxcclxcbiAgICA8L1BhZ2U+XFxyXFxuICAgIDxQYWdlICp0YWJJdGVtPVxcXCJoaXN0b3J5VGFiXFxcIj5cXHJcXG4gICAgXFx0PGFwcC1oaXN0b3J5PjwvYXBwLWhpc3Rvcnk+XFxyXFxuICAgIDwvUGFnZT5cXHJcXG4gICAgPFBhZ2UgKnRhYkl0ZW09XFxcInNldHRpbmdzVGFiXFxcIj5cXHJcXG4gICAgXFx0PGFwcC1zZXR0aW5ncz48L2FwcC1zZXR0aW5ncz5cXHJcXG4gICAgPC9QYWdlPlxcclxcbjwvVGFiVmlldz5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG48IS0tXFxyXFxuT3JpZ2luYWwgV2ViIHRlbXBsYXRlOlxcclxcblxcclxcbjxkaXYgY2xhc3M9XFxcInRvcG5hdlxcXCI+XFxyXFxuXFx0PGRpdiBjbGFzcz1cXFwibmF2YnRuc1xcXCI+XFxyXFxuXFx0XFx0PGEgKGNsaWNrKT1cXFwidG9Ib21lKClcXFwiIGNsYXNzPVxcXCJhY3RpdmUgbmF2aWdhdGlvblxcXCIgaWQ9XFxcImhvbWVuYXZcXFwiPkhvbWU8L2E+XFxyXFxuXFx0XFx0PGEgKGNsaWNrKT1cXFwidG9IaXN0b3J5KClcXFwiIGNsYXNzPVxcXCJuYXZpZ2F0aW9uXFxcIiBpZD1cXFwiaGlzdG9yeW5hdlxcXCI+SGlzdG9yeTwvYT5cXHJcXG5cXHRcXHQ8YSAoY2xpY2spPVxcXCJ0b1BheW1lbnRzKClcXFwiIGNsYXNzPVxcXCJuYXZpZ2F0aW9uXFxcIiBpZD1cXFwicGF5bWVudHNuYXZcXFwiPlBheW1lbnRzPC9hPlxcclxcblxcdFxcdDxhIChjbGljayk9XFxcInRvU2V0dGluZ3MoKVxcXCIgY2xhc3M9XFxcIm5hdmlnYXRpb25cXFwiIGlkPVxcXCJzZXR0aW5nc25hdlxcXCI+U2V0dGluZ3M8L2E+XFxyXFxuXFx0XFx0PGEgKGNsaWNrKT1cXFwicG9zdCgpXFxcIiBjbGFzcz1cXFwibmF2aWdhdGlvblxcXCIgaWQ9XFxcInBvc3RuYXZcXFwiPlBvc3Q8L2E+XFxyXFxuXFx0PC9kaXY+XFxyXFxuXFxyXFxuXFx0PGRpdiBjbGFzcz1cXFwiaW1nbmF2XFxcIj5cXHJcXG5cXHRcXHQ8aW1nIHNyYz1cXFwic3JjL2ljb24ucG5nXFxcIiAoY2xpY2spPVxcXCJkcm9wTWVudSgpXFxcIj5cXHJcXG5cXHQ8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG48ZGl2IGNsYXNzPVxcXCJjYXJldFxcXCIgaWQ9XFxcImRyb3Bkb3duLWNhcmV0XFxcIj48L2Rpdj5cXHJcXG48ZGl2IGNsYXNzPVxcXCJkcm9wZG93blxcXCIgaWQ9XFxcImRyb3Bkb3duLW1lbnVcXFwiPlxcclxcblxcdDxkaXYgY2xhc3M9XFxcImRyb3Bkb3duLW9wdGlvblxcXCIgKGNsaWNrKT1cXFwidG9Ib21lKClcXFwiPlxcclxcblxcdFxcdDxzcGFuPkhvbWU8L3NwYW4+XFxyXFxuXFx0PC9kaXY+XFxyXFxuXFx0PGRpdiBjbGFzcz1cXFwiZHJvcGRvd24tb3B0aW9uXFxcIiAoY2xpY2spPVxcXCJ0b1NldHRpbmdzKClcXFwiPlxcclxcblxcdFxcdDxzcGFuPlNldHRpbmdzPC9zcGFuPlxcclxcblxcdDwvZGl2PlxcclxcblxcdDxkaXYgY2xhc3M9XFxcImRyb3Bkb3duLW9wdGlvblxcXCIgKGNsaWNrKT1cXFwibG9nb3V0KClcXFwiPlxcclxcblxcdFxcdDxzcGFuPkxvZ291dDwvc3Bhbj5cXHJcXG5cXHQ8L2Rpdj5cXHJcXG5cXHQ8ZGl2IGNsYXNzPVxcXCJkcm9wZG93bi1vcHRpb24gZ3JvdXAtdHdvXFxcIiAoY2xpY2spPVxcXCJkcm9wTWVudSgpXFxcIj5cXHJcXG5cXHRcXHQ8c3Bhbj5DbG9zZTwvc3Bhbj5cXHJcXG5cXHQ8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG4tLT5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVHJhbnNmZXJTZXJ2aWNlIH0gZnJvbSAnLi4vZGF0YXRyYW5zZmVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHtQYWdlfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2UnO1xyXG5pbXBvcnQgeyBBY3Rpb25CYXIsIEFjdGlvbkl0ZW0gfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2FjdGlvbi1iYXInO1xyXG5pbXBvcnQgKiBhcyBkb20gZnJvbSAnbmF0aXZlc2NyaXB0LWRvbSc7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvYnV0dG9uJztcclxuaW1wb3J0IHsgVGFiVmlldyB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3RhYi12aWV3XCI7XHJcbmltcG9ydCB7IFNlbGVjdGVkSW5kZXhDaGFuZ2VkRXZlbnREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvdGFiLXZpZXdcIjtcclxuaW1wb3J0IHsgTGlzdFZpZXcgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9saXN0LXZpZXdcIjtcclxuaW1wb3J0ICogYXMgYXBwbGljYXRpb24gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIjtcclxuaW1wb3J0IHsgQW5kcm9pZEFwcGxpY2F0aW9uLCBBbmRyb2lkQWN0aXZpdHlCYWNrUHJlc3NlZEV2ZW50RGF0YSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCI7XHJcbmltcG9ydCB7IGlzQW5kcm9pZCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1uYXZpZ2F0aW9uJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbmF2aWdhdGlvbi5jb21wb25lbnQudG5zLmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL25hdmlnYXRpb24uY29tcG9uZW50LnRucy5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmF2aWdhdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdHJhbnNmZXJTZXJ2aWNlOiBUcmFuc2ZlclNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zLCBwcml2YXRlIHBhZ2U6IFBhZ2UpIHsgfVxyXG5cclxuICBAVmlld0NoaWxkKCd0YWJWaWV3JywgeyBzdGF0aWM6IHRydWUgfSkgdHY6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgnYWN0aW9uQmFyJywgeyBzdGF0aWM6IHRydWUgfSkgYWI6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgnYWN0aW9uSXRlbScsIHsgc3RhdGljOiB0cnVlIH0pIGFpOiBFbGVtZW50UmVmO1xyXG4gIHVzZXI7XHJcbiAgYWN0aXZlYnRuO1xyXG4gIHRhYlNlbGVjdGVkSW5kZXggPSAwO1xyXG4gIGFjdGlvbkJhclRpdGxlID0gJ0hvbWUnO1xyXG4gIGhvbWVUYWIgPSB7aWNvblNvdXJjZTogJ3JlczovL2hvbWVfaGlnaGxpZ2h0ZWQnfTtcclxuICBzZWFyY2hUYWIgPSB7aWNvblNvdXJjZTogJ3JlczovL3NlYXJjaCd9O1xyXG4gIGhpc3RvcnlUYWIgPSB7aWNvblNvdXJjZTogJ3JlczovL2hpc3RvcnknfTtcclxuICBzZXR0aW5nc1RhYiA9IHtpY29uU291cmNlOiAncmVzOi8vc2V0dGluZ3MnfTtcclxuICBhY3Rpb25JdGVtIDogQWN0aW9uSXRlbTtcclxuXHJcbiAgLy8gQFZpZXdDaGlsZCgnbGlzdFZpZXcnKSBsdjogRWxlbWVudFJlZjtcclxuICAvLyBsaXN0VmlldyA9IDxMaXN0Vmlldz4gdGhpcy5sdi5uYXRpdmVFbGVtZW50O1xyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuYWN0aW9uSXRlbSA9IDxBY3Rpb25JdGVtPiB0aGlzLmFpLm5hdGl2ZUVsZW1lbnQ7XHJcblxyXG4gIFx0dGhpcy5hY3RpdmVidG4gPSB0aGlzLnRyYW5zZmVyU2VydmljZS5nZXREYXRhKCk7XHJcbiAgXHRpZih0aGlzLmFjdGl2ZWJ0biA9PSBcImhvbWVuYXZcIikge1xyXG4gICAgICB0aGlzLmhvbWVUYWIgPSB7aWNvblNvdXJjZTogJ3JlczovL2hvbWVfaGlnaGxpZ2h0ZWQnfTtcclxuICAgICAgdGhpcy5zZWFyY2hUYWIgPSB7aWNvblNvdXJjZTogJ3JlczovL3NlYXJjaCd9O1xyXG4gICAgICB0aGlzLmhpc3RvcnlUYWIgPSB7aWNvblNvdXJjZTogJ3JlczovL2hpc3RvcnknfTtcclxuICAgICAgdGhpcy5zZXR0aW5nc1RhYiA9IHtpY29uU291cmNlOiAncmVzOi8vc2V0dGluZ3MnfTtcclxuICAgICAgdGhpcy5hY3Rpb25JdGVtLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XHJcbiAgICAgIHRoaXMudGFiU2VsZWN0ZWRJbmRleCA9IDA7XHJcbiAgXHR9IGVsc2UgaWYodGhpcy5hY3RpdmVidG4gPT0gXCJzZWFyY2huYXZcIikge1xyXG4gICAgICB0aGlzLmhvbWVUYWIgPSB7aWNvblNvdXJjZTogJ3JlczovL2hvbWUnfTtcclxuICAgICAgdGhpcy5zZWFyY2hUYWIgPSB7aWNvblNvdXJjZTogJ3JlczovL3NlYXJjaF9oaWdobGlnaHRlZCd9O1xyXG4gICAgICB0aGlzLmhpc3RvcnlUYWIgPSB7aWNvblNvdXJjZTogJ3JlczovL2hpc3RvcnknfTtcclxuICAgICAgdGhpcy5zZXR0aW5nc1RhYiA9IHtpY29uU291cmNlOiAncmVzOi8vc2V0dGluZ3MnfTtcclxuICAgICAgdGhpcy5hY3Rpb25JdGVtLnZpc2liaWxpdHkgPSAnY29sbGFwc2UnO1xyXG4gICAgICB0aGlzLnRhYlNlbGVjdGVkSW5kZXggPSAxO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZih0aGlzLmFjdGl2ZWJ0biA9PSBcImhpc3RvcnluYXZcIikge1xyXG4gICAgICB0aGlzLmhvbWVUYWIgPSB7aWNvblNvdXJjZTogJ3JlczovL2hvbWUnfTtcclxuICAgICAgdGhpcy5zZWFyY2hUYWIgPSB7aWNvblNvdXJjZTogJ3JlczovL3NlYXJjaCd9O1xyXG4gICAgICB0aGlzLmhpc3RvcnlUYWIgPSB7aWNvblNvdXJjZTogJ3JlczovL2hpc3RvcnlfaGlnaGxpZ2h0ZWQnfTtcclxuICAgICAgdGhpcy5zZXR0aW5nc1RhYiA9IHtpY29uU291cmNlOiAncmVzOi8vc2V0dGluZ3MnfTtcclxuICAgICAgdGhpcy5hY3Rpb25JdGVtLnZpc2liaWxpdHkgPSAnY29sbGFwc2UnO1xyXG4gICAgICB0aGlzLnRhYlNlbGVjdGVkSW5kZXggPSAyO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZih0aGlzLmFjdGl2ZWJ0biA9PSBcInNldHRpbmdzbmF2XCIpIHtcclxuICAgICAgdGhpcy5ob21lVGFiID0ge2ljb25Tb3VyY2U6ICdyZXM6Ly9ob21lJ307XHJcbiAgICAgIHRoaXMuc2VhcmNoVGFiID0ge2ljb25Tb3VyY2U6ICdyZXM6Ly9zZWFyY2gnfTtcclxuICAgICAgdGhpcy5oaXN0b3J5VGFiID0ge2ljb25Tb3VyY2U6ICdyZXM6Ly9oaXN0b3J5J307XHJcbiAgICAgIHRoaXMuc2V0dGluZ3NUYWIgPSB7aWNvblNvdXJjZTogJ3JlczovL3NldHRpbmdzX2hpZ2hsaWdodGVkJ307XHJcbiAgICAgIHRoaXMuYWN0aW9uSXRlbS52aXNpYmlsaXR5ID0gJ2NvbGxhcHNlJztcclxuICAgICAgdGhpcy50YWJTZWxlY3RlZEluZGV4ID0gMztcclxuICAgIH1cclxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMudGFiU2VsZWN0ZWRJbmRleClcclxuXHJcbiAgICAvLyB2YXIganVzdFNldCA9IGZhbHNlO1xyXG5cclxuICAgIC8vIGlmKGlzQW5kcm9pZClcclxuICAgIC8vICAgYXBwbGljYXRpb24uYW5kcm9pZC5vbihBbmRyb2lkQXBwbGljYXRpb24uYWN0aXZpdHlCYWNrUHJlc3NlZEV2ZW50LCAoZGF0YTogQW5kcm9pZEFjdGl2aXR5QmFja1ByZXNzZWRFdmVudERhdGEpID0+IHtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyh0aGlzLnRhYlNlbGVjdGVkSW5kZXgpXHJcbiAgICAvLyAgIGlmICh0aGlzLnRhYlNlbGVjdGVkSW5kZXggPT09IDAgJiYgIWp1c3RTZXQpIHtcclxuICAgIC8vICAgICBhcHBsaWNhdGlvbi5hbmRyb2lkLmZvcmVncm91bmRBY3Rpdml0eS5maW5pc2goKTtcclxuICAgIC8vICAgfVxyXG4gICAgLy8gICBlbHNlIHtcclxuICAgIC8vICAgICB0aGlzLnR2Lm5hdGl2ZUVsZW1lbnQuc2VsZWN0ZWRJbmRleCA9IDA7XHJcbiAgICAvLyAgICAganVzdFNldCA9IHRydWU7XHJcbiAgICAvLyAgICAgc2V0VGltZW91dCgoKSA9PiB7anVzdFNldCA9IGZhbHNlfSwgNTAwKTtcclxuICAgIC8vICAgfVxyXG4gICAgLy8gfSk7XHJcbiAgfVxyXG4gIHBhaW50QWN0aXZlKGJ0bikge1xyXG4gIFx0Y29uc3QgbmF2Y29udGVudHMgPSBkb20uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmF2aWdhdGlvbicpXHJcbiAgICBmb3IodmFyIHggPSAwOyB4IDwgbmF2Y29udGVudHMubGVuZ3RoOyB4KyspXHJcbiAgICB7XHJcbiAgICAgICAgbmF2Y29udGVudHNbeF0uY2xhc3NOYW1lID0gJ25hdmlnYXRpb24nO1xyXG4gICAgfVxyXG4gICAgY29uc3QgYnV0dG9uID0gPEJ1dHRvbj50aGlzLnBhZ2UuZ2V0Vmlld0J5SWQoYnRuKTtcclxuICAgIGJ1dHRvbi5jbGFzc05hbWUgKz0gJyBhY3RpdmUnO1xyXG5cclxuICB9XHJcblxyXG4gIG9uU2VsZWN0ZWRJbmRleENoYW5nZWQoYXJnczogU2VsZWN0ZWRJbmRleENoYW5nZWRFdmVudERhdGEpIHtcclxuICAgICAgICBpZiAoYXJncy5vbGRJbmRleCAhPT0gLTEpIHtcclxuICAgICAgICAgICAgY29uc3QgbmV3SW5kZXggPSBhcmdzLm5ld0luZGV4O1xyXG4gICAgICAgICAgICBpZiAobmV3SW5kZXggPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWN0aW9uQmFyVGl0bGUgPSAnSG9tZSc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvSG9tZSgpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG5ld0luZGV4ID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGlvbkJhclRpdGxlID0gJ1NlYXJjaCc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvU2VhcmNoKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobmV3SW5kZXggPT09IDIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWN0aW9uQmFyVGl0bGUgPSAnWW91ciBwb3N0cyc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvSGlzdG9yeSgpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG5ld0luZGV4ID09PSAzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGlvbkJhclRpdGxlID0gJ1NldHRpbmdzJztcclxuICAgICAgICAgICAgICAgIHRoaXMudG9TZXR0aW5ncygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICBob21lKCkge1xyXG4gICAgaWYodGhpcy50YWJTZWxlY3RlZEluZGV4ID09IDApXHJcbiAgICB7XHJcbiAgICAgIGxldCBsaXN0VmlldyA9IDxMaXN0Vmlldz4gdGhpcy5wYWdlLmdldFZpZXdCeUlkKCdsaXN0VmlldycpO1xyXG4gICAgICBsaXN0Vmlldy5zY3JvbGxUb0luZGV4KDApO1xyXG4gICAgfVxyXG4gICAgdGhpcy5hY3Rpb25JdGVtLnZpc2liaWxpdHkgPSAnY29sbGFwc2UnO1xyXG4gIH1cclxuXHJcbiAgdG9Ib21lKCkge1xyXG4gIFx0Ly8gdGhpcy50cmFuc2ZlclNlcnZpY2Uuc2V0RGF0YSgnaG9tZW5hdicpO1xyXG5cdCAgLy8gdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydob21lJ10pO1xyXG4gICAgdGhpcy5ob21lVGFiID0ge2ljb25Tb3VyY2U6ICdyZXM6Ly9ob21lX2hpZ2hsaWdodGVkJ307XHJcbiAgICB0aGlzLnNlYXJjaFRhYiA9IHtpY29uU291cmNlOiAncmVzOi8vc2VhcmNoJ307XHJcbiAgICB0aGlzLmhpc3RvcnlUYWIgPSB7aWNvblNvdXJjZTogJ3JlczovL2hpc3RvcnknfTtcclxuICAgIHRoaXMuc2V0dGluZ3NUYWIgPSB7aWNvblNvdXJjZTogJ3JlczovL3NldHRpbmdzJ307XHJcbiAgICB0aGlzLmFjdGlvbkl0ZW0udmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcclxuICAgIHRoaXMudGFiU2VsZWN0ZWRJbmRleCA9IDA7XHJcbiAgfVxyXG5cclxuICB0b1NlYXJjaCgpXHJcblx0e1xyXG5cdFx0Ly8gdGhpcy50cmFuc2ZlclNlcnZpY2Uuc2V0RGF0YSgnaGlzdG9yeW5hdicpO1xyXG5cdFx0Ly8gdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydoaXN0b3J5J10pO1xyXG4gICAgdGhpcy5ob21lVGFiID0ge2ljb25Tb3VyY2U6ICdyZXM6Ly9ob21lJ307XHJcbiAgICB0aGlzLnNlYXJjaFRhYiA9IHtpY29uU291cmNlOiAncmVzOi8vc2VhcmNoX2hpZ2hsaWdodGVkJ307XHJcbiAgICB0aGlzLmhpc3RvcnlUYWIgPSB7aWNvblNvdXJjZTogJ3JlczovL2hpc3RvcnknfTtcclxuICAgIHRoaXMuc2V0dGluZ3NUYWIgPSB7aWNvblNvdXJjZTogJ3JlczovL3NldHRpbmdzJ307XHJcbiAgICB0aGlzLmFjdGlvbkl0ZW0udmlzaWJpbGl0eSA9ICdjb2xsYXBzZSc7XHJcbiAgICB0aGlzLnRhYlNlbGVjdGVkSW5kZXggPSAxO1xyXG5cdH1cclxuXHJcblx0dG9IaXN0b3J5KClcclxuXHR7XHJcblx0XHQvLyB0aGlzLnRyYW5zZmVyU2VydmljZS5zZXREYXRhKCdzZXR0aW5nc25hdicpO1xyXG5cdFx0Ly8gdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydzZXR0aW5ncyddKTtcclxuICAgIHRoaXMuaG9tZVRhYiA9IHtpY29uU291cmNlOiAncmVzOi8vaG9tZSd9O1xyXG4gICAgdGhpcy5zZWFyY2hUYWIgPSB7aWNvblNvdXJjZTogJ3JlczovL3NlYXJjaCd9O1xyXG4gICAgdGhpcy5oaXN0b3J5VGFiID0ge2ljb25Tb3VyY2U6ICdyZXM6Ly9oaXN0b3J5X2hpZ2hsaWdodGVkJ307XHJcbiAgICB0aGlzLnNldHRpbmdzVGFiID0ge2ljb25Tb3VyY2U6ICdyZXM6Ly9zZXR0aW5ncyd9O1xyXG4gICAgdGhpcy5hY3Rpb25JdGVtLnZpc2liaWxpdHkgPSAnY29sbGFwc2UnO1xyXG4gICAgdGhpcy50YWJTZWxlY3RlZEluZGV4ID0gMjtcclxuXHR9XHJcblxyXG4gIHRvU2V0dGluZ3MoKVxyXG4gIHtcclxuICAgIC8vIHRoaXMudHJhbnNmZXJTZXJ2aWNlLnNldERhdGEoJ3NlYXJjaG5hdicpO1xyXG4gICAgLy8gdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydzZWFyY2gnXSk7XHJcbiAgICB0aGlzLmhvbWVUYWIgPSB7aWNvblNvdXJjZTogJ3JlczovL2hvbWUnfTtcclxuICAgIHRoaXMuc2VhcmNoVGFiID0ge2ljb25Tb3VyY2U6ICdyZXM6Ly9zZWFyY2gnfTtcclxuICAgIHRoaXMuaGlzdG9yeVRhYiA9IHtpY29uU291cmNlOiAncmVzOi8vaGlzdG9yeSd9O1xyXG4gICAgdGhpcy5zZXR0aW5nc1RhYiA9IHtpY29uU291cmNlOiAncmVzOi8vc2V0dGluZ3NfaGlnaGxpZ2h0ZWQnfTtcclxuICAgIHRoaXMuYWN0aW9uSXRlbS52aXNpYmlsaXR5ID0gJ2NvbGxhcHNlJztcclxuICAgIHRoaXMudGFiU2VsZWN0ZWRJbmRleCA9IDM7XHJcbiAgfVxyXG5cclxuICB0b01lc3NhZ2VzKClcclxuICB7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ2NoYXQtbGlzdCddKVxyXG4gIH1cclxuXHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi8qIEFkZCBtb2JpbGUgc3R5bGVzIGZvciB0aGUgY29tcG9uZW50IGhlcmUuICAqL1xcbi5yZW1vdmUtcGF5bWVudC1sYWJlbCB7XFxuXFx0Zm9udC1zaXplOiAxNjtcXG5cXHRjb2xvcjogI2FjMDBlNjtcXG5cXHRtYXJnaW4tbGVmdDogMTg7XFxuXFx0dGV4dC1hbGlnbjogbGVmdDtcXG5cXHRwYWRkaW5nOiAxODtcXG59XFxuXFxuLmluZm8tbGFiZWwge1xcblxcdGNvbG9yOiBibGFjaztcXG5cXHRmb250LXNpemU6IDI0O1xcblxcdHRleHQtYWxpZ246IGxlZnQ7XFxuXFx0bWFyZ2luLWxlZnQ6IDM2O1xcblxcdG1hcmdpbi10b3A6IDM2O1xcbn1cXG5cXG4uZGV0YWlscy1sYWJlbCB7XFxuXFx0Y29sb3I6IGJsYWNrO1xcblxcdGZvbnQtc2l6ZTogMTY7XFxuXFx0dGV4dC1hbGlnbjogbGVmdDtcXG5cXHRtYXJnaW4tbGVmdDogMzY7XFxuXFx0bWFyZ2luLXRvcDogMTg7XFxuXFx0bWFyZ2luLWJvdHRvbTogNzI7XFxufVxcblxcbi5hY3Rpdml0eS1pbmRpY2F0b3Ige1xcblxcdGNvbG9yOiAjYWMwMGU2O1xcbn1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8UGFnZT5cXHJcXG5cXHQ8UGFnZS5hY3Rpb25CYXI+XFxyXFxuXFx0XFx0PEFjdGlvbkJhciB0aXRsZT1cXFwiUGF5bWVudCBJbmZvXFxcIj5cXHJcXG5cXHRcXHQgIDxOYXZpZ2F0aW9uQnV0dG9uIHRleHQ9XFxcIkdvIEJhY2tcXFwiIGFuZHJvaWQuc3lzdGVtSWNvbj1cXFwiaWNfbWVudV9iYWNrXFxcIiAodGFwKT1cXFwib25OYXZCdG5UYXAoKVxcXCI+PC9OYXZpZ2F0aW9uQnV0dG9uPlxcclxcblxcdFxcdDwvQWN0aW9uQmFyPlxcclxcblxcdDwvUGFnZS5hY3Rpb25CYXI+XFxyXFxuXFxyXFxuXFx0PFN0YWNrTGF5b3V0ICNpbmZvQ29udGFpbmVyPlxcclxcblxcdFxcdDxTdGFja0xheW91dD5cXHJcXG5cXHRcXHRcXHQ8TGFiZWwgdGV4dFdyYXA9XFxcInRydWVcXFwiIHRleHQ9XFxcInt7IHBheW1lbnRJbmZvLnR5cGUgfX1cXFwiIGNsYXNzPVxcXCJpbmZvLWxhYmVsXFxcIj48L0xhYmVsPlxcclxcblxcdFxcdFxcdDxMYWJlbCB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgdGV4dD1cXFwie3sgcGF5bWVudEluZm8uaW5mbyB9fVxcXCIgY2xhc3M9XFxcImRldGFpbHMtbGFiZWxcXFwiPjwvTGFiZWw+XFxyXFxuXFx0XFx0PC9TdGFja0xheW91dD5cXHJcXG5cXHRcXHQ8U3RhY2tMYXlvdXQgKHRhcCk9XFxcInJlbW92ZSgpXFxcIj5cXHJcXG5cXHRcXHRcXHQ8TGFiZWwgdGV4dFdyYXA9XFxcInRydWVcXFwiIHRleHQ9XFxcIlJlbW92ZVxcXCIgY2xhc3M9XFxcInJlbW92ZS1wYXltZW50LWxhYmVsXFxcIj48L0xhYmVsPlxcclxcblxcdFxcdDwvU3RhY2tMYXlvdXQ+ICBcXHJcXG5cXHQ8L1N0YWNrTGF5b3V0PlxcclxcbjwvUGFnZT5cXHJcXG48QWN0aXZpdHlJbmRpY2F0b3Igcm93PVxcXCIxXFxcIiAjYWN0aXZpdHlJbmRpY2F0b3IgYnVzeT1cXFwiZmFsc2VcXFwiIHdpZHRoPVxcXCI0MFxcXCIgaGVpZ2h0PVxcXCI0MFxcXCIgY2xhc3M9XFxcImFjdGl2aXR5LWluZGljYXRvclxcXCI+XFxyXFxuPC9BY3Rpdml0eUluZGljYXRvcj5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVHJhbnNmZXJTZXJ2aWNlIH0gZnJvbSAnLi4vZGF0YXRyYW5zZmVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQYXltZW50U2VydmljZSB9IGZyb20gJy4uL3BheW1lbnQuc2VydmljZS50bnMnO1xyXG5cclxuLy8gaW1wb3J0IHsgTW9kYWxEaWFsb2dQYXJhbXMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZGlyZWN0aXZlcy9kaWFsb2dzXCI7XHJcbmltcG9ydCB7IE1vZGFsRGlhbG9nU2VydmljZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9kaXJlY3RpdmVzL2RpYWxvZ3NcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IENvbmZpcm1hdGlvbkNvbXBvbmVudCB9IGZyb20gJy4uL2NvbmZpcm1hdGlvbi9jb25maXJtYXRpb24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgaXNBbmRyb2lkLCBpc0lPUywgZGV2aWNlLCBzY3JlZW4gfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtJztcclxuaW1wb3J0IHsgYW5kcm9pZCBhcyBhbmRyb2lkQXBwLCBpb3MgYXMgaW9zQXBwIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIjtcclxuaW1wb3J0IHsgQWN0aXZpdHlJbmRpY2F0b3IgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2FjdGl2aXR5LWluZGljYXRvcic7XHJcbmltcG9ydCB7IFN0YWNrTGF5b3V0IH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9sYXlvdXRzL3N0YWNrLWxheW91dCc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtcGF5bWVudC1pbmZvJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcGF5bWVudC1pbmZvLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9wYXltZW50LWluZm8uY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQYXltZW50SW5mb0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdHJhbnNmZXJTZXJ2aWNlOiBUcmFuc2ZlclNlcnZpY2UsIHByaXZhdGUgcGF5bWVudFNlcnZpY2U6IFBheW1lbnRTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucyxcclxuICBcdHByaXZhdGUgdmNSZWY6IFZpZXdDb250YWluZXJSZWYsIHByaXZhdGUgbW9kYWw6IE1vZGFsRGlhbG9nU2VydmljZSkgeyB9XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ2FjdGl2aXR5SW5kaWNhdG9yJywgeyBzdGF0aWM6IHRydWUgfSkgYUk6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgnaW5mb0NvbnRhaW5lcicsIHsgc3RhdGljOiB0cnVlIH0pIGlDOiBFbGVtZW50UmVmO1xyXG4gIFxyXG5cclxuICBwYXltZW50SW5mbyA9IHtcclxuICBcdHBheW1lbnRUeXBlOiBcImxvYWRpbmdcIixcclxuICBcdGluZm86IFwibG9hZGluZ1wiLFxyXG4gIFx0aWRUb2tlbjogXCJsb2FkaW5nXCIsXHJcbiAgXHR0eXBlOiBcImxvYWRpbmdcIlxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgXHR0aGlzLnBheW1lbnRJbmZvID0gdGhpcy50cmFuc2ZlclNlcnZpY2UuZ2V0RGF0YSgpO1xyXG4gIFx0Ly8gY29uc29sZS5sb2codGhpcy5wYXltZW50SW5mbyk7XHJcbiAgfVxyXG5cclxuICByZW1vdmUoKSB7XHJcbiAgXHRsZXQgb3B0aW9ucyA9IHtcclxuICAgICAgICBjb250ZXh0OiB7fSxcclxuICAgICAgICBmdWxsc2NyZWVuOiBmYWxzZSxcclxuICAgICAgICB2aWV3Q29udGFpbmVyUmVmOiB0aGlzLnZjUmVmLFxyXG4gICAgICAgIGFuaW1hdGVkOiB0cnVlLFxyXG4gICAgICAgIC8vIHRyYW5zaXRpb246IHsgbmFtZTogXCJzbGlkZVRvcFwiIH1cclxuICAgIH07XHJcbiAgICBcclxuICAgIHRoaXMubW9kYWwuc2hvd01vZGFsKENvbmZpcm1hdGlvbkNvbXBvbmVudCwgb3B0aW9ucykudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgXHRpZihyZXN1bHQgPT0gXCJkZWxldGVcIikge1xyXG4gICAgXHRcdHZhciBpbmZvQ29udGFpbmVyID0gPFN0YWNrTGF5b3V0PiB0aGlzLmlDLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICBcdFx0aW5mb0NvbnRhaW5lci5zdHlsZS52aXNpYmlsaXR5ID0gXCJjb2xsYXBzZVwiO1xyXG4gICAgXHRcdHRoaXMuc2hvd0J1c3koKTtcclxuICAgIFx0XHR0aGlzLnBheW1lbnRTZXJ2aWNlLnJlbW92ZVBheW1lbnRNZXRob2RGcm9tVXNlcih0aGlzLnBheW1lbnRJbmZvLmlkVG9rZW4pLnN1YnNjcmliZSgocmVzKSA9PiB7XHJcblx0XHRcdCAgXHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ3BheW1lbnRzJ10pO1xyXG5cdFx0ICBcdH0pO1xyXG4gICAgXHR9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG9uTmF2QnRuVGFwKCkge1xyXG4gIFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUoWydwYXltZW50cyddKTtcclxuICB9XHJcblxyXG4gIHNob3dCdXN5KCkge1xyXG4gIFx0dmFyIGFjdGl2aXR5SW5kaWNhdG9yID0gPEFjdGl2aXR5SW5kaWNhdG9yPiB0aGlzLmFJLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgXHRhY3Rpdml0eUluZGljYXRvci5idXN5ID0gdHJ1ZTtcclxuICB9XHJcblxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCIvKlxcbkFkZCB5b3VyIE5hdGl2ZVNjcmlwdCBzcGVjaWZpYyBzdHlsZXMgaGVyZS5cXG5UbyBsZWFybiBtb3JlIGFib3V0IHN0eWxpbmcgaW4gTmF0aXZlU2NyaXB0IHNlZTpcXG5odHRwczovL2RvY3MubmF0aXZlc2NyaXB0Lm9yZy9hbmd1bGFyL3VpL3N0eWxpbmdcXG4qL1wiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxTdGFja0xheW91dD5cXG4gIDxMYWJlbCB0ZXh0PVxcXCJwYXltZW50LW1ldGhvZCB3b3Jrc1xcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiPjwvTGFiZWw+XFxuICA8TGFiZWwgdGV4dD1cXFwiVGhpcyBpcyBhIG1pZ3JhdGVkIGNvbXBvbmVudFxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiPjwvTGFiZWw+XFxuICA8TGFiZWwgdGV4dD1cXFwiVXBkYXRlIGl0IHRvIHByb3ZpZGUgdGhlIFVJIGVsZW1lbnRzIHJlcXVpcmVkIGluIHlvdXIgbW9iaWxlIGFwcFxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiPjwvTGFiZWw+XFxuPC9TdGFja0xheW91dD5cXG5cXG48IS0tXFxuT3JpZ2luYWwgV2ViIHRlbXBsYXRlOlxcblxcbjxkaXYgY2xhc3M9XFxcInBheW1lbnQtbWV0aG9kXFxcIj5cXHJcXG5cXHQ8c3BhbiBjbGFzcz1cXFwicGF5bWVudC10eXBlLWljb25cXFwiPjwvc3Bhbj5cXHJcXG5cXHQ8c3BhbiBjbGFzcz1cXFwicGF5bWVudC10eXBlLWRldGFpbHNcXFwiPjwvc3Bhbj5cXHJcXG48L2Rpdj5cXG4tLT5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1wYXltZW50LW1ldGhvZCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3BheW1lbnQtbWV0aG9kLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9wYXltZW50LW1ldGhvZC5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFBheW1lbnRNZXRob2RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFBheW1lbnRTZXJ2aWNlIHtcclxuICAvLyB1cmkgPSAnaHR0cDovL2xvY2FsaG9zdDo0MDAwJztcclxuICAvL0FkYW0ncyBUZXN0aW5nIFNlcnZlclxyXG4gIC8vIHVyaSA9ICdodHRwOi8vMTkyLjE2OC4xLjc6NDAwMCc7XHJcbiAgLy9QaGlsbGlwJ3MgVGVzdGluZyBTZXJ2ZXJcclxuXHQvLyB1cmkgPSAnaHR0cDovLzE5Mi4xNjguMS4zOjQwMDAnO1xyXG4gIC8vRmlyZWJhc2UgY2xvdWQgZnVuY3Rpb25zXHJcbiAgdXJpID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtY29sbGVnZXBvb2wtMTU1Mjc0OTExODYxNy5jbG91ZGZ1bmN0aW9ucy5uZXQnO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHsgfVxyXG5cclxuICBhZGRQYXltZW50VXNlcihpZCwgdXNlcm5hbWUsIG5hbWUsIGVtYWlsKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhgJHt0aGlzLnVyaX0vYWRkQ3VzdG9tZXIvJHt1c2VybmFtZX1gKVxyXG4gIFx0Ly8gcmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy51cml9L2N1c3RvbWVycy9hZGQvJHt1c2VybmFtZX1gKTtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke3RoaXMudXJpfS9hZGRDdXN0b21lcj91c2VybmFtZT0ke3VzZXJuYW1lfWApO1xyXG4gIH1cclxuXHJcbiAgZ2V0UGF5bWVudFVzZXJCeUlkKGlkKSB7XHJcbiAgICAvLyByZXR1cm4gdGhpcy5odHRwLmdldChgJHt0aGlzLnVyaX0vY3VzdG9tZXJzLyR7aWR9YCk7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldChgJHt0aGlzLnVyaX0vZ2V0Q3VzdG9tZXI/aWQ9JHtpZH1gKTtcclxuICB9XHJcblxyXG4gIGFkZFBheW1lbnRNZXRob2RUb1VzZXIoaWQsIG5vbmNlKSB7XHJcbiAgXHRjb25zdCBib2R5ID0ge1xyXG4gIFx0XHRpZDogaWQsXHJcbiAgXHRcdG5vbmNlOiBub25jZVxyXG4gIFx0fTtcclxuICBcdC8vIHJldHVybiB0aGlzLmh0dHAucG9zdChgaHR0cDovLzE5Mi4xNjguMS43OjQwMDAvY3VzdG9tZXJzL3BheW1lbnQvYCwgYm9keSk7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoYCR7dGhpcy51cml9L2FkZFBheW1lbnQ/YCwgYm9keSlcclxuICB9XHJcblxyXG4gIHJlbW92ZVBheW1lbnRNZXRob2RGcm9tVXNlcih0b2tlbikge1xyXG4gIFx0cmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy51cml9L3JlbW92ZVBheW1lbnQ/dG9rZW49JHt0b2tlbn1gKTtcclxuICB9XHJcblxyXG4gIGdldElkVG9rZW4oaWQpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke3RoaXMudXJpfS9nZXRUb2tlbj9pZD0ke2lkfWApO1xyXG4gIH1cclxuICBcclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQYXltZW50U2VydmljZSB7XHJcbiAgLy8gdXJpID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6NDAwMCc7XHJcbiAgLy9BZGFtJ3MgVGVzdGluZyBTZXJ2ZXJcclxuICAvLyB1cmkgPSAnaHR0cDovLzE5Mi4xNjguMS43OjQwMDAnO1xyXG4gIC8vUGhpbGxpcCdzIFRlc3RpbmcgU2VydmVyXHJcblx0Ly8gdXJpID0gJ2h0dHA6Ly8xOTIuMTY4LjEuMzo0MDAwJztcclxuICAvL0ZpcmViYXNlIGNsb3VkIGZ1bmN0aW9uc1xyXG4gIHVyaSA9ICdodHRwczovL3VzLWNlbnRyYWwxLWNvbGxlZ2Vwb29sLTE1NTI3NDkxMTg2MTcuY2xvdWRmdW5jdGlvbnMubmV0JztcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7IH1cclxuXHJcbiAgYWRkUGF5bWVudFVzZXIoaWQsIHVzZXJuYW1lLCBuYW1lLCBlbWFpbCkge1xyXG4gICAgLy8gY29uc29sZS5sb2coYCR7dGhpcy51cml9L2FkZEN1c3RvbWVyLyR7dXNlcm5hbWV9YClcclxuICBcdC8vIHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke3RoaXMudXJpfS9jdXN0b21lcnMvYWRkLyR7dXNlcm5hbWV9YCk7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldChgJHt0aGlzLnVyaX0vYWRkQ3VzdG9tZXI/dXNlcm5hbWU9JHt1c2VybmFtZX1gKTtcclxuICB9XHJcblxyXG4gIGdldFBheW1lbnRVc2VyQnlJZChpZCkge1xyXG4gICAgLy8gcmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy51cml9L2N1c3RvbWVycy8ke2lkfWApO1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy51cml9L2dldEN1c3RvbWVyP2lkPSR7aWR9YCk7XHJcbiAgfVxyXG5cclxuICBhZGRQYXltZW50TWV0aG9kVG9Vc2VyKGlkLCBub25jZSkge1xyXG4gIFx0Y29uc3QgYm9keSA9IHtcclxuICBcdFx0aWQ6IGlkLFxyXG4gIFx0XHRub25jZTogbm9uY2VcclxuICBcdH07XHJcbiAgXHQvLyByZXR1cm4gdGhpcy5odHRwLnBvc3QoYGh0dHA6Ly8xOTIuMTY4LjEuNzo0MDAwL2N1c3RvbWVycy9wYXltZW50L2AsIGJvZHkpO1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KGAke3RoaXMudXJpfS9hZGRQYXltZW50P2AsIGJvZHkpXHJcbiAgfVxyXG5cclxuICByZW1vdmVQYXltZW50TWV0aG9kRnJvbVVzZXIodG9rZW4pIHtcclxuICBcdHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke3RoaXMudXJpfS9yZW1vdmVQYXltZW50P3Rva2VuPSR7dG9rZW59YCk7XHJcbiAgfVxyXG5cclxuICBnZXRJZFRva2VuKGlkKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldChgJHt0aGlzLnVyaX0vZ2V0VG9rZW4/aWQ9JHtpZH1gKTtcclxuICB9XHJcbiAgXHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi5wYXltZW50LXR5cGUtaWNvbiB7XFxyXFxuXFx0aGVpZ2h0OiAzNDtcXHJcXG5cXHR3aWR0aDogMzQ7XFxyXFxuXFx0YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcblxcdG1hcmdpbi10b3A6IDE4O1xcclxcblxcdG1hcmdpbi1ib3R0b206IDE4O1xcclxcblxcdG1hcmdpbi1sZWZ0OiAzNjtcXHJcXG59XFxyXFxuXFxyXFxuLnBheW1lbnQtaW5mby1sYWJlbCB7XFxyXFxuXFx0Zm9udC1zaXplOiAxNjtcXHJcXG5cXHQvKmZvbnQtd2VpZ2h0OiA3MDA7Ki9cXHJcXG5cXHRwYWRkaW5nOiAzMDtcXHJcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFx0Y29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLXBheW1lbnQtbGFiZWwge1xcclxcblxcdGZvbnQtc2l6ZTogMTY7XFxyXFxuXFx0Y29sb3I6ICNhYzAwZTY7XFxyXFxuXFx0bWFyZ2luLWxlZnQ6IDM2O1xcclxcblxcdHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuXFx0cGFkZGluZzogMTg7XFxyXFxufVxcclxcblxcclxcbi5jcmVkaXQtY2FyZC1pY29uIHtcXHJcXG5cXHRjb250ZW50OiB1cmwoXFxcIn4vaW1nL2NyZWRpdC1jYXJkLWljb24ucG5nXFxcIik7XFxyXFxufVxcclxcblxcclxcbi5wYXlwYWwtaWNvbiB7XFxyXFxuXFx0Y29udGVudDogdXJsKFxcXCJ+L2ltZy9wYXlwYWwtaWNvbi5wbmdcXFwiKTtcXHJcXG59XFxyXFxuXFxyXFxuLnZlbm1vLWljb24ge1xcclxcblxcdGNvbnRlbnQ6IHVybChcXFwifi9pbWcvdmVubW8taWNvbi5wbmdcXFwiKTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvc3Qge1xcclxcblxcclxcblxcdGJvcmRlci1jb2xvcjogI2YxZjFmMTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvc3Q6aGlnaGxpZ2h0ZWQge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XFxyXFxufVxcclxcblxcclxcbi5hY3Rpdml0eS1pbmRpY2F0b3Ige1xcclxcblxcdGNvbG9yOiAjYWMwMGU2O1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLWNvbnRhaW5lciB7XFxyXFxuXFx0dmlzaWJpbGl0eTogY29sbGFwc2U7XFxyXFxufVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxQYWdlPlxcclxcblxcdDxQYWdlLmFjdGlvbkJhcj5cXHJcXG5cXHRcXHQ8QWN0aW9uQmFyIHRpdGxlPVxcXCJQYXltZW50c1xcXCI+XFxyXFxuXFx0XFx0ICA8TmF2aWdhdGlvbkJ1dHRvbiB0ZXh0PVxcXCJHbyBCYWNrXFxcIiBhbmRyb2lkLnN5c3RlbUljb249XFxcImljX21lbnVfYmFja1xcXCIgKHRhcCk9XFxcIm9uTmF2QnRuVGFwKClcXFwiPjwvTmF2aWdhdGlvbkJ1dHRvbj5cXHJcXG5cXHRcXHQ8L0FjdGlvbkJhcj5cXHJcXG5cXHQ8L1BhZ2UuYWN0aW9uQmFyPlxcclxcblxcclxcblxcclxcblxcclxcblxcdDxTdGFja0xheW91dCAjcGF5bWVudHNDb250YWluZXI+XFxyXFxuXFx0XFx0PExpc3RWaWV3IFtpdGVtc109XFxcInBheW1lbnRzXFxcIiBzZXBhcmF0b3JDb2xvcj1cXFwidHJhbnNwYXJlbnRcXFwiIChpdGVtVGFwKT1cXFwib25TZWxlY3QoJGV2ZW50KVxcXCI+XFxyXFxuXFx0XFx0XFx0PG5nLXRlbXBsYXRlIGxldC1pdGVtPVxcXCJpdGVtXFxcIiBsZXQtaT1cXFwiaW5kZXhcXFwiIGxldC1vZGQ9XFxcIm9kZFxcXCIgbGV0LWV2ZW49XFxcImV2ZW5cXFwiPlxcclxcblxcdFxcdFxcdFxcdDxTdGFja0xheW91dCBbY2xhc3Mub2RkXT1cXFwib2RkXFxcIiBbY2xhc3MuZXZlbl09XFxcImV2ZW5cXFwiIGNsYXNzPVxcXCJwb3N0XFxcIiBvcmllbnRhdGlvbj1cXFwiaG9yaXpvbnRhbFxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PEltYWdlIFtzcmNdPVxcXCJpdGVtLnBheW1lbnRUeXBlXFxcIiBjbGFzcz1cXFwicGF5bWVudC10eXBlLWljb25cXFwiPjwvSW1hZ2U+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PExhYmVsIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiBbdGV4dF09XFxcIml0ZW0uaW5mb1xcXCIgY2xhc3M9XFxcInBheW1lbnQtaW5mby1sYWJlbFxcXCI+PC9MYWJlbD5cXHJcXG5cXHRcXHRcXHRcXHQ8L1N0YWNrTGF5b3V0PlxcclxcblxcdFxcdFxcdDwvbmctdGVtcGxhdGU+XFxyXFxuXFx0XFx0PC9MaXN0Vmlldz5cXHJcXG5cXHJcXG5cXHRcXHQ8U3RhY2tMYXlvdXQgKHRhcCk9XFxcInNob3dNb2RhbCgpXFxcIiAjYWRkQ29udGFpbmVyIGNsYXNzPVxcXCJhZGQtY29udGFpbmVyXFxcIj5cXHJcXG5cXHRcXHRcXHQ8TGFiZWwgdGV4dFdyYXA9XFxcInRydWVcXFwiIHRleHQ9XFxcIkFkZCBwYXltZW50IG1ldGhvZFxcXCIgY2xhc3M9XFxcImFkZC1wYXltZW50LWxhYmVsXFxcIj48L0xhYmVsPlxcclxcblxcdFxcdDwvU3RhY2tMYXlvdXQ+ICBcXHJcXG5cXHQ8L1N0YWNrTGF5b3V0PlxcclxcbjwvUGFnZT5cXHJcXG5cXHJcXG48QWN0aXZpdHlJbmRpY2F0b3IgI2FjdGl2aXR5SW5kaWNhdG9yIGJ1c3k9XFxcInRydWVcXFwiIHdpZHRoPVxcXCI0MFxcXCIgaGVpZ2h0PVxcXCI0MFxcXCIgY2xhc3M9XFxcImFjdGl2aXR5LWluZGljYXRvclxcXCI+XFxyXFxuPC9BY3Rpdml0eUluZGljYXRvcj5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZUFycmF5IH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUtYXJyYXknO1xyXG5pbXBvcnQgeyBEeW5hbWljQWRkU2VydmljZSB9IGZyb20gJy4uL2R5bmFtaWMtYWRkLnNlcnZpY2UnO1xyXG5pbXBvcnQgKiBhcyBkcm9waW4gZnJvbSAnYnJhaW50cmVlLXdlYi1kcm9wLWluJztcclxuaW1wb3J0ICogYXMgYnJhaW50cmVlIGZyb20gJ2JyYWludHJlZS13ZWInO1xyXG5pbXBvcnQgeyBCcmFpbnRyZWUsIEJyYWluVHJlZU9wdGlvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYnJhaW50cmVlJztcclxuaW1wb3J0IHsgSVBheVBhbENvbmZpZyB9IGZyb20gJ25neC1wYXlwYWwnO1xyXG5pbXBvcnQgeyBMb2dpbmNoZWNrU2VydmljZSB9IGZyb20gJy4uL2xvZ2luY2hlY2suc2VydmljZSc7XHJcbmltcG9ydCB7IFBheW1lbnRTZXJ2aWNlIH0gZnJvbSAnLi4vcGF5bWVudC5zZXJ2aWNlLnRucyc7XHJcbmltcG9ydCB7IFRyYW5zZmVyU2VydmljZSB9IGZyb20gJy4uL2RhdGF0cmFuc2Zlci5zZXJ2aWNlJztcclxuXHJcbmltcG9ydCB7IE1vZGFsRGlhbG9nUGFyYW1zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2RpcmVjdGl2ZXMvZGlhbG9nc1wiO1xyXG5pbXBvcnQgeyBNb2RhbERpYWxvZ1NlcnZpY2UgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZGlyZWN0aXZlcy9kaWFsb2dzXCI7XHJcbmltcG9ydCB7IEFkZFBheW1lbnRDb21wb25lbnQgfSBmcm9tICcuLi9hZGQtcGF5bWVudC9hZGQtcGF5bWVudC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQYXltZW50SW5mb0NvbXBvbmVudCB9IGZyb20gJy4uL3BheW1lbnQtaW5mby9wYXltZW50LWluZm8uY29tcG9uZW50JztcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IEFjdGl2aXR5SW5kaWNhdG9yIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9hY3Rpdml0eS1pbmRpY2F0b3InO1xyXG5pbXBvcnQgeyBTdGFja0xheW91dCB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvbGF5b3V0cy9zdGFjay1sYXlvdXQnO1xyXG5pbXBvcnQgKiBhcyBkaWFsb2dzIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3NcIjtcclxuaW1wb3J0ICogYXMgZmlyZWJhc2UgZnJvbSAnbmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZSc7XHJcblxyXG5kZWNsYXJlIGxldCBwYXlwYWw6IGFueTtcclxuXHJcbmNsYXNzIFBheW1lbnRJdGVtIHtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bWVudFR5cGU6IHN0cmluZywgcHVibGljIGluZm86IHN0cmluZywgcHVibGljIGlkVG9rZW46IHN0cmluZywgcHVibGljIHR5cGU6IHN0cmluZykge31cclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtcGF5bWVudHMnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wYXltZW50cy5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vcGF5bWVudHMuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQYXltZW50c0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ2FjdGl2aXR5SW5kaWNhdG9yJywgeyBzdGF0aWM6IHRydWUgfSkgYUk6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgnYWRkQ29udGFpbmVyJywgeyBzdGF0aWM6IHRydWUgfSkgYUM6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgncGF5bWVudHNDb250YWluZXInLCB7IHN0YXRpYzogdHJ1ZSB9KSBwQzogRWxlbWVudFJlZjtcclxuICB1c2VyID0ge1xyXG4gIFx0cGF5bWVudF9pZDogJzUwNzMwNTcwNidcclxuICB9XHJcbiAgb3B0cyA6QnJhaW5UcmVlT3B0aW9ucyA9IHtcclxuICAgIGFtb3VudDogbnVsbCxcclxuICAgIGNvbGxlY3REZXZpY2VEYXRhOiB0cnVlLFxyXG4gICAgcmVxdWVzdFRocmVlRFNlY3VyZVZlcmlmaWNhdGlvbjogZmFsc2UsXHJcbiAgfVxyXG4gIGNsaWVudFRva2VuID0gJyc7XHJcbiAgcGF5bWVudEN1c3RvbWVyO1xyXG4gIHBheW1lbnRJbmZvO1xyXG4gIHBheW1lbnRzID0gbmV3IE9ic2VydmFibGVBcnJheTxQYXltZW50SXRlbT4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhZGRTZXJ2aWNlOiBEeW5hbWljQWRkU2VydmljZSwgcHJpdmF0ZSBwYXltZW50U2VydmljZTogUGF5bWVudFNlcnZpY2UsIHByaXZhdGUgbG9naW5jaGVja1NlcnZpY2U6IExvZ2luY2hlY2tTZXJ2aWNlLCBwcml2YXRlIHRyYW5zZmVyU2VydmljZTogVHJhbnNmZXJTZXJ2aWNlLFxyXG4gIFx0cHJpdmF0ZSB2Y1JlZjogVmlld0NvbnRhaW5lclJlZiwgcHJpdmF0ZSBtb2RhbDogTW9kYWxEaWFsb2dTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucykgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgZmlyZWJhc2UuZ2V0Q3VycmVudFVzZXIoKS50aGVuKHVzZXIgPT4ge1xyXG4gICAgICBmaXJlYmFzZS5maXJlc3RvcmUuY29sbGVjdGlvbigndXNlcnMnKS5kb2ModXNlci51aWQpLmdldCgpLnRoZW4oZG9jID0+IHtcclxuICAgICAgICB0aGlzLnVzZXIucGF5bWVudF9pZCA9IGRvYy5kYXRhKCkucGF5bWVudF9pZDtcclxuICAgICAgICB0aGlzLmdldFVzZXIoKTtcclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgXHRcclxuICB9XHJcblxyXG4gIHNob3dNb2RhbCgpIHtcclxuICAgIGxldCBicmFpbnRyZWUgPSBuZXcgQnJhaW50cmVlKCk7XHJcbiAgICAvLyB0aGlzLmNyZWF0ZVZpZXdzKCk7XHJcblxyXG4gICAgYnJhaW50cmVlLnN0YXJ0UGF5bWVudCh0aGlzLmNsaWVudFRva2VuLCB0aGlzLm9wdHMpO1xyXG5cclxuICAgIGJyYWludHJlZS5vbihcInN1Y2Nlc3NcIiwgKHJlcykgPT4ge1xyXG4gICAgICAgIGxldCBvdXRwdXQgPSByZXMub2JqZWN0LmdldChcIm91dHB1dFwiKTtcclxuICAgICAgICAvLyBjb25zb2xlLmRpcihvdXRwdXQpO1xyXG5cclxuICAgICAgICB2YXIgYWRkQ29udGFpbmVyID0gPFN0YWNrTGF5b3V0PiB0aGlzLmFDLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICAgICAgdmFyIHBheW1lbnRzQ29udGFpbmVyID0gPFN0YWNrTGF5b3V0PiB0aGlzLnBDLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICAgICAgdmFyIGFjdGl2aXR5SW5kaWNhdG9yID0gPEFjdGl2aXR5SW5kaWNhdG9yPiB0aGlzLmFJLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICAgICAgcGF5bWVudHNDb250YWluZXIuc3R5bGUudmlzaWJpbGl0eSA9ICdjb2xsYXBzZSc7XHJcbiAgICAgICAgYWRkQ29udGFpbmVyLnN0eWxlLnZpc2liaWxpdHkgPSAnY29sbGFwc2UnO1xyXG4gICAgICAgIGFjdGl2aXR5SW5kaWNhdG9yLmJ1c3kgPSB0cnVlO1xyXG5cclxuICAgICAgICB0aGlzLnBheW1lbnRTZXJ2aWNlLmFkZFBheW1lbnRNZXRob2RUb1VzZXIodGhpcy51c2VyLnBheW1lbnRfaWQsIG91dHB1dC5ub25jZSkuc3Vic2NyaWJlKChyZXM6IGFueSkgPT4ge1xyXG4gICAgICAgICAgaWYocmVzLm1lc3NhZ2UgPT0gJ1N1Y2Nlc3MnKSB7XHJcbiAgICAgICAgICAgIGRpYWxvZ3MuYWxlcnQoe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiQWRkZWQgbWV0aG9kXCIsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIlBheW1lbnQgbWV0aG9kIGFkZGVkIHN1Y2Nlc3NmdWxseVwiLFxyXG4gICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIkNsb3NlXCJcclxuICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5nZXRVc2VyKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbHNlIGlmKHJlcy5tZXNzYWdlID09ICdBbHJlYWR5IGV4aXN0cycpIHtcclxuICAgICAgICAgICAgYWRkQ29udGFpbmVyLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XHJcbiAgICAgICAgICAgIHBheW1lbnRzQ29udGFpbmVyLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XHJcbiAgICAgICAgICAgIGFjdGl2aXR5SW5kaWNhdG9yLmJ1c3kgPSBmYWxzZTtcclxuICAgICAgICAgICAgZGlhbG9ncy5hbGVydCh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJDb3VsZCBub3QgYWRkIG1ldGhvZFwiLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJQYXltZW50IG1ldGhvZCBhbHJlYWR5IGV4aXN0cywgcGxlYXNlIHRyeSBhbm90aGVyIG9uZS5cIixcclxuICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJDbG9zZVwiXHJcbiAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC8vIHRoaXMucm91dGVyLm5hdmlnYXRlKFsncGF5bWVudHMnXSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAvLyB0aGlzLnBheW1lbnRTZXJ2aWNlLmFkZFBheW1lbnRNZXRob2RUb1VzZXIodGhpcy51c2VyLnBheW1lbnRfaWQsIG91dHB1dC5ub25jZSkuc3Vic2NyaWJlKChyZXMpID0+IHtcclxuICAgICAgICAvLyAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsncGF5bWVudHMnXSk7XHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICB9KVxyXG4gICAgIFxyXG4gICAgYnJhaW50cmVlLm9uKFwiY2FuY2VsXCIsIGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICBsZXQgb3V0cHV0ID0gcmVzLm9iamVjdC5nZXQoXCJvdXRwdXRcIik7XHJcbiAgICAgICAgLy8gY29uc29sZS5kaXIob3V0cHV0KTtcclxuICAgIH0pXHJcbiAgICAgXHJcbiAgICBicmFpbnRyZWUub24oXCJlcnJvclwiLCBmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgbGV0IG91dHB1dCA9IHJlcy5vYmplY3QuZ2V0KFwib3V0cHV0XCIpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUuZGlyKG91dHB1dCk7XHJcbiAgICB9KVxyXG4gICAgLy8gbGV0IG9wdGlvbnMgPSB7XHJcbiAgICAvLyAgICAgY29udGV4dDoge30sXHJcbiAgICAvLyAgICAgZnVsbHNjcmVlbjogdHJ1ZSxcclxuICAgIC8vICAgICB2aWV3Q29udGFpbmVyUmVmOiB0aGlzLnZjUmVmXHJcbiAgICAvLyAgICAgLy8gYW5pbWF0ZWQ6IHRydWUsXHJcbiAgICAvLyAgICAgLy8gdHJhbnNpdGlvbjogeyBuYW1lOiBcInNsaWRlVG9wXCIgfVxyXG4gICAgLy8gfTtcclxuICAgIFxyXG4gICAgLy8gdGhpcy5tb2RhbC5zaG93TW9kYWwoQWRkUGF5bWVudENvbXBvbmVudCwgb3B0aW9ucykudGhlbihyZXMgPT4ge1xyXG5cclxuICAgIC8vIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0VXNlcigpIHtcclxuICAgIHRoaXMucGF5bWVudHMuc3BsaWNlKDApO1xyXG5cclxuICAgIHZhciBhZGRDb250YWluZXIgPSA8U3RhY2tMYXlvdXQ+IHRoaXMuYUMubmF0aXZlRWxlbWVudDtcclxuICAgIHZhciBwYXltZW50c0NvbnRhaW5lciA9IDxTdGFja0xheW91dD4gdGhpcy5wQy5uYXRpdmVFbGVtZW50O1xyXG4gICAgYWRkQ29udGFpbmVyLnN0eWxlLnZpc2liaWxpdHkgPSAnY29sbGFwc2UnO1xyXG4gICAgcGF5bWVudHNDb250YWluZXIuc3R5bGUudmlzaWJpbGl0eSA9ICdjb2xsYXBzZSc7XHJcblxyXG4gIFx0dGhpcy5wYXltZW50U2VydmljZS5nZXRQYXltZW50VXNlckJ5SWQodGhpcy51c2VyLnBheW1lbnRfaWQpLnN1YnNjcmliZSgoZGF0YSkgPT4ge1xyXG4gICAgICB0aGlzLnNldHVwVmlld3MoKTtcclxuXHJcbiAgXHRcdHRoaXMucGF5bWVudEN1c3RvbWVyID0gZGF0YTtcclxuICBcdFx0Ly8gY29uc29sZS5sb2codGhpcy5wYXltZW50Q3VzdG9tZXIpXHJcbiAgXHRcdGlmKHRoaXMucGF5bWVudEN1c3RvbWVyLmNyZWRpdENhcmRzICE9IG51bGwpXHJcblx0ICBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMucGF5bWVudEN1c3RvbWVyLmNyZWRpdENhcmRzLmxlbmd0aDsgaSsrKSBcclxuXHQgIFx0XHRcdHRoaXMucGF5bWVudHMucHVzaChuZXcgUGF5bWVudEl0ZW0oXCJ+L2ltZy9jcmVkaXQtY2FyZC1pY29uLnBuZ1wiLCB0aGlzLnBheW1lbnRDdXN0b21lci5jcmVkaXRDYXJkc1tpXS5jYXJkVHlwZSArIFwiIGVuZGluZyBpbiBcIiArIHRoaXMucGF5bWVudEN1c3RvbWVyLmNyZWRpdENhcmRzW2ldLmxhc3Q0LCB0aGlzLnBheW1lbnRDdXN0b21lci5jcmVkaXRDYXJkc1tpXS50b2tlbiwgXCJDYXJkXCIpKTtcclxuICBcdFx0aWYodGhpcy5wYXltZW50Q3VzdG9tZXIucGF5cGFsQWNjb3VudHMgIT0gbnVsbClcclxuICBcdFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5wYXltZW50Q3VzdG9tZXIucGF5cGFsQWNjb3VudHMubGVuZ3RoOyBpKyspXHJcbiAgXHRcdFx0XHR0aGlzLnBheW1lbnRzLnB1c2gobmV3IFBheW1lbnRJdGVtKFwifi9pbWcvcGF5cGFsLWljb24ucG5nXCIsIHRoaXMucGF5bWVudEN1c3RvbWVyLnBheXBhbEFjY291bnRzW2ldLmVtYWlsLCB0aGlzLnBheW1lbnRDdXN0b21lci5wYXlwYWxBY2NvdW50c1tpXS50b2tlbiwgXCJQYXlQYWxcIikpXHJcbiAgXHRcdGlmKHRoaXMucGF5bWVudEN1c3RvbWVyLnZlbm1vQWNjb3VudHMgIT0gbnVsbClcclxuICBcdFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5wYXltZW50Q3VzdG9tZXIudmVubW9BY2NvdW50cy5sZW5ndGg7IGkrKylcclxuICBcdFx0XHRcdHRoaXMucGF5bWVudHMucHVzaChuZXcgUGF5bWVudEl0ZW0oXCJ+L2ltZy92ZW5tby1pY29uLnBuZ1wiLCB0aGlzLnBheW1lbnRDdXN0b21lci52ZW5tb0FjY291bnRzW2ldLnZlbm1vVXNlcklkLCB0aGlzLnBheW1lbnRDdXN0b21lci52ZW5tb0FjY291bnRzW2ldLnRva2VuLCBcIlZlbm1vXCIpKVxyXG4gIFx0XHQvLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGlzdC1sb2FkaW5nLWNpcmNsZScpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgXHR9KTtcclxuICAgIHRoaXMucGF5bWVudFNlcnZpY2UuZ2V0SWRUb2tlbih0aGlzLnVzZXIucGF5bWVudF9pZCkuc3Vic2NyaWJlKChyZXM6IGFueSkgPT4ge1xyXG4gICAgICB0aGlzLmNsaWVudFRva2VuID0gcmVzLmNsaWVudFRva2VuO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzZXR1cFZpZXdzKCkge1xyXG4gICAgdmFyIGFjdGl2aXR5SW5kaWNhdG9yID0gPEFjdGl2aXR5SW5kaWNhdG9yPiB0aGlzLmFJLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICBhY3Rpdml0eUluZGljYXRvci5idXN5ID0gZmFsc2U7XHJcblxyXG4gICAgdmFyIGFkZENvbnRhaW5lciA9IDxTdGFja0xheW91dD4gdGhpcy5hQy5uYXRpdmVFbGVtZW50O1xyXG4gICAgYWRkQ29udGFpbmVyLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XHJcblxyXG4gICAgdmFyIHBheW1lbnRzQ29udGFpbmVyID0gPFN0YWNrTGF5b3V0PiB0aGlzLnBDLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICBwYXltZW50c0NvbnRhaW5lci5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0UGF5bWVudCgpIHtcclxuXHJcbiAgfVxyXG5cclxuICBvblNlbGVjdChldmVudCkge1xyXG4gIFx0Ly8gY29uc29sZS5sb2coZXZlbnQuaW5kZXgpO1xyXG4gIFx0bGV0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgY29udGV4dDoge30sXHJcbiAgICAgICAgZnVsbHNjcmVlbjogdHJ1ZSxcclxuICAgICAgICB2aWV3Q29udGFpbmVyUmVmOiB0aGlzLnZjUmVmXHJcbiAgICAgICAgLy8gYW5pbWF0ZWQ6IHRydWUsXHJcbiAgICAgICAgLy8gdHJhbnNpdGlvbjogeyBuYW1lOiBcInNsaWRlVG9wXCIgfVxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLnRyYW5zZmVyU2VydmljZS5zZXREYXRhKHRoaXMucGF5bWVudHMuZ2V0SXRlbShldmVudC5pbmRleCkpO1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydwYXltZW50aW5mbyddKTtcclxuICAgIC8vIHRoaXMubW9kYWwuc2hvd01vZGFsKFBheW1lbnRJbmZvQ29tcG9uZW50LCBvcHRpb25zKS50aGVuKHJlcyA9PiB7XHJcblxyXG4gICAgLy8gfSk7XHJcbiAgfVxyXG5cclxuICBvbk5hdkJ0blRhcCgpIHtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnc2V0dGluZ3MnXSwge2NsZWFySGlzdG9yeTogdHJ1ZX0pO1xyXG4gIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUGxhY2VzQXV0b2NvbXBsZXRlU2VydmljZSB7XHJcblxyXG4gIHBsYWNlc191cmkgPSAnaHR0cHM6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL3BsYWNlL3RleHRzZWFyY2gvanNvbj9rZXk9QUl6YVN5QUlUeFMxam1mOFBNdGF6Umd1V2NBZldReFcxa1BPb1lnJnF1ZXJ5PSdcclxuICBhdXRvY29tcGxldGVfdXJpID0gJ2h0dHBzOi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9wbGFjZS9hdXRvY29tcGxldGUvanNvbj9rZXk9QUl6YVN5QUlUeFMxam1mOFBNdGF6Umd1V2NBZldReFcxa1BPb1lnJnNlc3Npb250b2tlbj0xMjM0NTY3ODkwJmlucHV0PSdcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHBDbGllbnQ6IEh0dHBDbGllbnQpIHsgfVxyXG5cclxuICBnZXRBdXRvY29tcGxldGVSZXN1bHRzKHBsYWNlKSB7XHJcbiAgXHRyZXR1cm4gdGhpcy5odHRwQ2xpZW50LmdldChgJHt0aGlzLmF1dG9jb21wbGV0ZV91cml9YCArIHBsYWNlKTtcclxuICB9XHJcblxyXG4gIGdldFBsYWNlUmVzdWx0cyhwbGFjZSkge1xyXG4gIFx0cmV0dXJuIHRoaXMuaHR0cENsaWVudC5nZXQoYCR7dGhpcy5wbGFjZXNfdXJpfWAgKyBwbGFjZSk7XHJcbiAgfVxyXG5cclxuICBnZXRBdXRvY29tcGxldGVSZXN1bHRzR2VvY29kZShwbGFjZSkge1xyXG4gIFx0cmV0dXJuIHRoaXMuaHR0cENsaWVudC5nZXQoYCR7dGhpcy5hdXRvY29tcGxldGVfdXJpfWAgKyBwbGFjZSArIGAmdHlwZXM9Z2VvY29kZWApO1xyXG4gIH1cclxuICBnZXRBdXRvY29tcGxldGVSZXN1bHRzRXN0YWJsaXNobWVudChwbGFjZSkge1xyXG4gIFx0cmV0dXJuIHRoaXMuaHR0cENsaWVudC5nZXQoYCR7dGhpcy5hdXRvY29tcGxldGVfdXJpfWAgKyBwbGFjZSArIGAmdHlwZXM9ZXN0YWJsaXNobWVudGApO1xyXG4gIH1cclxuICBnZXRBdXRvY29tcGxldGVSZXN1bHRzQWRkcmVzcyhwbGFjZSkge1xyXG4gIFx0cmV0dXJuIHRoaXMuaHR0cENsaWVudC5nZXQoYCR7dGhpcy5hdXRvY29tcGxldGVfdXJpfWAgKyBwbGFjZSArIGAmdHlwZXM9YWRkcmVzc2ApO1xyXG4gIH1cclxuICBnZXRBdXRvY29tcGxldGVSZXN1bHRzQ2l0eShwbGFjZSkge1xyXG4gIFx0cmV0dXJuIHRoaXMuaHR0cENsaWVudC5nZXQoYCR7dGhpcy5hdXRvY29tcGxldGVfdXJpfWAgKyBwbGFjZSArIGAmdHlwZXM9KGNpdGllcylgKTtcclxuICB9XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi8qIEFkZCBtb2JpbGUgc3R5bGVzIGZvciB0aGUgY29tcG9uZW50IGhlcmUuICAqL1xcclxcbi5tYXAtdmlldyB7XFxyXFxuXFx0aGVpZ2h0OiAxMDAlO1xcclxcblxcdHdpZHRoOiAxMDAlO1xcclxcblxcdHZlcnRpY2FsLWFsaWduOiBib3R0b207XFxyXFxufVxcclxcblxcclxcbi5wcm9maWxlLXBpY3R1cmUge1xcclxcblxcdGhlaWdodDogNTA7XFxyXFxuXFx0d2lkdGg6IDUwO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDEwMCU7XFxyXFxuXFx0dmVydGljYWwtYWxpZ246IHRvcDtcXHJcXG5cXHRtYXJnaW4tbGVmdDogMTY7XFxyXFxuXFx0bWFyZ2luLXRvcDogMjA7XFxyXFxufVxcclxcblxcclxcbi5uYW1lLWxhYmVsIHtcXHJcXG5cXHRtYXJnaW4tdG9wOiAxNjtcXHJcXG5cXHRtYXJnaW4tbGVmdDogMTg7XFxyXFxuXFx0Y29sb3I6IGJsYWNrO1xcclxcblxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuXFx0Zm9udC1zaXplOiAxNztcXHJcXG5cXHR0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbn1cXHJcXG5cXHJcXG4uaW5mby1sYWJlbCB7XFxyXFxuXFx0bWFyZ2luLXRvcDogNDtcXHJcXG5cXHRtYXJnaW4tbGVmdDogMTg7XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTogMTY7XFxyXFxuXFx0Y29sb3I6IGJsYWNrO1xcclxcblxcdHRleHQtYWxpZ246IGxlZnQ7XFxyXFxufVxcclxcblxcclxcbi5sYWJlbC1jb250YWluZXIge1xcclxcblxcdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxufVxcclxcblxcclxcbi5hY3Rpdml0eS1pbmRpY2F0b3Ige1xcclxcblxcdGNvbG9yOiAjYWMwMGU2O1xcclxcbn1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8UGFnZS5hY3Rpb25CYXI+XFxyXFxuICAgIDxBY3Rpb25CYXIgdGl0bGU9XFxcIlBvc3RcXFwiPlxcclxcbiAgICBcXHQ8TmF2aWdhdGlvbkJ1dHRvbiB0ZXh0PVxcXCJHbyBCYWNrXFxcIiBhbmRyb2lkLnN5c3RlbUljb249XFxcImljX21lbnVfYmFja1xcXCIgKHRhcCk9XFxcIm9uTmF2QnRuVGFwKClcXFwiPjwvTmF2aWdhdGlvbkJ1dHRvbj5cXHJcXG5cXHQgICAgPEFjdGlvbkl0ZW0gKHRhcCk9XFxcInByb21wdERlbGV0ZSgpXFxcIlxcclxcblxcdCAgICAgIGlvcy5zeXN0ZW1JY29uPVxcXCIxNlxcXCIgaW9zLnBvc2l0aW9uPVxcXCJyaWdodFxcXCJcXHJcXG5cXHQgICAgICB0ZXh0PVxcXCJEZWxldGVcXFwiIGFuZHJvaWQucG9zaXRpb249XFxcInBvcHVwXFxcIiAjZGVsZXRlSXRlbT48L0FjdGlvbkl0ZW0+XFxyXFxuXFx0ICAgIDxBY3Rpb25JdGVtICh0YXApPVxcXCJvblJlcG9ydCgpXFxcIlxcclxcblxcdCAgICAgIGlvcy5zeXN0ZW1JY29uPVxcXCI5XFxcIiBpb3MucG9zaXRpb249XFxcInJpZ2h0XFxcIlxcclxcblxcdCAgICAgIHRleHQ9XFxcIlJlcG9ydFxcXCIgYW5kcm9pZC5wb3NpdGlvbj1cXFwicG9wdXBcXFwiPjwvQWN0aW9uSXRlbT5cXHJcXG4gICAgPC9BY3Rpb25CYXI+XFxyXFxuPC9QYWdlLmFjdGlvbkJhcj5cXHJcXG48R3JpZExheW91dCByb3dzPVxcXCIyKixhdXRvLDEwKlxcXCIgI2xheW91dD5cXHJcXG5cXHQ8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XFxcImhvcml6b250YWxcXFwiIHJvdz1cXFwiMFxcXCIgY2xhc3M9XFxcImxhYmVsLWNvbnRhaW5lclxcXCIgI2luZm9Db250YWluZXI+XFxyXFxuXFx0XFx0PEltYWdlIHNyYz1cXFwie3sgcHJvZmlsZVNvdXJjZSB9fVxcXCIgY2xhc3M9XFxcInByb2ZpbGUtcGljdHVyZVxcXCIgc3RyZXRjaD1cXFwiYXNwZWN0Rml0XFxcIj48L0ltYWdlPlxcclxcblxcdCAgXFx0PFN0YWNrTGF5b3V0PlxcclxcblxcdCAgICAgIFxcdDxMYWJlbCB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgaWQ9XFxcInBvc3QtbmFtZVxcXCIgY2xhc3M9XFxcIm5hbWUtbGFiZWxcXFwiIHRleHQ9XFxcInt7IHVzZXJuYW1lIH19XFxcIj48L0xhYmVsPlxcclxcblxcdCAgICAgIFxcdDxMYWJlbCB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgaWQ9XFxcInBvc3QtaW5mb1xcXCIgY2xhc3M9XFxcImluZm8tbGFiZWxcXFwiIHRleHQ9XFxcInt7IGluZm8gfX1cXFwiPjwvTGFiZWw+XFxyXFxuXFx0ICAgIDwvU3RhY2tMYXlvdXQ+XFxyXFxuXFx0PC9TdGFja0xheW91dD5cXHJcXG5cXHQ8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImJ0bi1jb250YWluZXJcXFwiICNidXR0b25Db250YWluZXIgcm93PVxcXCIxXFxcIj5cXHJcXG5cXHRcXHQ8QnV0dG9uIGNsYXNzPVxcXCJjb25uZWN0LWJ0blxcXCIgKHRhcCk9XFxcIm9uQ29ubmVjdFRhcCgpXFxcIiB0ZXh0PVxcXCJ7eyBidXR0b25UZXh0IH19XFxcIj48L0J1dHRvbj5cXHJcXG5cXHQ8L1N0YWNrTGF5b3V0PlxcclxcblxcdDxNYXBWaWV3IChtYXBSZWFkeSk9XFxcIm9uTWFwUmVhZHkoJGV2ZW50KVxcXCIgW2xhdGl0dWRlXT1cXFwibGF0aXR1ZGVcXFwiIFtsb25naXR1ZGVdPVxcXCJsb25naXR1ZGVcXFwiIGNsYXNzPVxcXCJtYXAtdmlld1xcXCIgcm93PVxcXCIyXFxcIiAjbWFwVmlldz48L01hcFZpZXc+XFxyXFxuPC9HcmlkTGF5b3V0PlxcclxcbjxBY3Rpdml0eUluZGljYXRvciAjYWN0aXZpdHlJbmRpY2F0b3IgYnVzeT1cXFwidHJ1ZVxcXCIgd2lkdGg9XFxcIjQwXFxcIiBoZWlnaHQ9XFxcIjQwXFxcIiBjbGFzcz1cXFwiYWN0aXZpdHktaW5kaWNhdG9yXFxcIj48L0FjdGl2aXR5SW5kaWNhdG9yPlwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDb250YWluZXJSZWYsIFZpZXdSZWYsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgKiBhcyBmaXJlYmFzZSBmcm9tICduYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlJztcclxuaW1wb3J0IHsgR29vZ2xlTWFwc1NlcnZpY2UgfSBmcm9tICcuLi9nb29nbGUtbWFwcy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFRyYW5zZmVyU2VydmljZSB9IGZyb20gJy4uL2RhdGF0cmFuc2Zlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2VcIjtcclxuaW1wb3J0IHsgQWN0aW9uSXRlbSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvYWN0aW9uLWJhcic7XHJcbmltcG9ydCB7IFN0YWNrTGF5b3V0IH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9sYXlvdXRzL3N0YWNrLWxheW91dCc7XHJcbmltcG9ydCB7IEdyaWRMYXlvdXQgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvZ3JpZC1sYXlvdXQnO1xyXG5pbXBvcnQgeyBBY3Rpdml0eUluZGljYXRvciB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvYWN0aXZpdHktaW5kaWNhdG9yJztcclxuaW1wb3J0IHtyZWdpc3RlckVsZW1lbnR9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9lbGVtZW50LXJlZ2lzdHJ5XCI7XHJcbmltcG9ydCB7aXNBbmRyb2lkLCBpc0lPU30gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm1cIjtcclxuaW1wb3J0IHsgTWFwVmlldywgTWFya2VyLCBQb3NpdGlvbiB9IGZyb20gJ25hdGl2ZXNjcmlwdC1nb29nbGUtbWFwcy1zZGsnO1xyXG5pbXBvcnQgKiBhcyBkaWFsb2dzIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3NcIjtcclxuaW1wb3J0IHsgTG9naW5jaGVja1NlcnZpY2UgfSBmcm9tICcuLi9sb2dpbmNoZWNrLnNlcnZpY2UudG5zJztcclxuaW1wb3J0IHsgQ2hhdE1lc3NhZ2UgfSBmcm9tICcuLi9tb2RlbHMvY2hhdC1tZXNzYWdlLm1vZGVsJztcclxuXHJcbnJlZ2lzdGVyRWxlbWVudChcIk1hcFZpZXdcIiwgKCkgPT4gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1nb29nbGUtbWFwcy1zZGtcIikuTWFwVmlldyk7XHJcbmRlY2xhcmUgdmFyIGNvbTphbnk7XHJcbmRlY2xhcmUgdmFyIEdNU0Nvb3JkaW5hdGVCb3VuZHM6IGFueTtcclxuZGVjbGFyZSB2YXIgR01TQ2FtZXJhVXBkYXRlOiBhbnk7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1wb3N0aW5nLWluZm8nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wb3N0aW5nLWluZm8uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3Bvc3RpbmctaW5mby5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFBvc3RpbmdJbmZvQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgQFZpZXdDaGlsZChcImRlbGV0ZUl0ZW1cIiwgeyBzdGF0aWM6IHRydWUgfSkgZGVsZXRlSXRlbTogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKFwiYnV0dG9uQ29udGFpbmVyXCIsIHsgc3RhdGljOiB0cnVlIH0pIGJ1dHRvbkNvbnRhaW5lcjogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKFwiaW5mb0NvbnRhaW5lclwiLCB7IHN0YXRpYzogdHJ1ZSB9KSBpbmZvQ29udGFpbmVyOiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoXCJhY3Rpdml0eUluZGljYXRvclwiLCB7IHN0YXRpYzogdHJ1ZSB9KSBhaTogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKFwibGF5b3V0XCIsIHsgc3RhdGljOiB0cnVlIH0pIGxheW91dDogRWxlbWVudFJlZjtcclxuICBtYXBWaWV3OiBNYXBWaWV3O1xyXG4gIGxhdGl0dWRlID0gIDM3O1xyXG4gIGxvbmdpdHVkZSA9IC0xMjI7XHJcblxyXG4gIHN0YXJ0TGF0O1xyXG4gIGVuZExhdDtcclxuICBzdGFydExuZztcclxuICBlbmRMbmc7XHJcbiAgYm91bmRzO1xyXG4gIG1hcERhdGE7XHJcbiAgdXNlcklkO1xyXG4gIHByb2ZpbGVTb3VyY2U7XHJcbiAgaW5mbztcclxuICB1c2VybmFtZTtcclxuICBidXR0b25UZXh0O1xyXG4gIGN1cnJlbnRVc2VyTmFtZTtcclxuXHJcbiAgY2hhdFVzZXJzID0gW107XHJcbiAgY3VycmVudFVzZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbWFwU2VydmljZTogR29vZ2xlTWFwc1NlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zLCBwcml2YXRlIHRyYW5zZmVyU2VydmljZTogVHJhbnNmZXJTZXJ2aWNlLCBwcml2YXRlIHBhZ2U6IFBhZ2UsXHJcbiAgICBwcml2YXRlIGxvZ2luY2hlY2tTZXJ2aWNlOiBMb2dpbmNoZWNrU2VydmljZSkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIFx0dGhpcy5sb2FkVmlld3MoKTtcclxuICB9XHJcblxyXG4gIGxvYWRWaWV3cygpIHtcclxuICAgIGxldCBhY3Rpdml0eUluZGljYXRvciA9IDxBY3Rpdml0eUluZGljYXRvcj4gdGhpcy5haS5uYXRpdmVFbGVtZW50O1xyXG4gICAgbGV0IGluZm9Db250YWluZXIgPSA8U3RhY2tMYXlvdXQ+IHRoaXMuaW5mb0NvbnRhaW5lci5uYXRpdmVFbGVtZW50O1xyXG4gICAgbGV0IGRlbGV0ZUJ1dHRvbiA9IDxBY3Rpb25JdGVtPiB0aGlzLmRlbGV0ZUl0ZW0ubmF0aXZlRWxlbWVudDtcclxuICAgIGxldCBjaGF0QnV0dG9uID0gPFN0YWNrTGF5b3V0PiB0aGlzLmJ1dHRvbkNvbnRhaW5lci5uYXRpdmVFbGVtZW50O1xyXG5cclxuICAgIGluZm9Db250YWluZXIudmlzaWJpbGl0eSA9ICdjb2xsYXBzZSc7XHJcbiAgICBjaGF0QnV0dG9uLnZpc2liaWxpdHkgPSAnY29sbGFwc2UnO1xyXG4gICAgdGhpcy51c2VySWQgPSB0aGlzLmxvZ2luY2hlY2tTZXJ2aWNlLmdldFVzZXIoKTtcclxuICAgIHRoaXMubWFwRGF0YSA9IHRoaXMudHJhbnNmZXJTZXJ2aWNlLmdldERhdGEoKTtcclxuICAgIGZpcmViYXNlLmZpcmVzdG9yZS5jb2xsZWN0aW9uKCd1c2VycycpLmRvYyh0aGlzLnVzZXJJZCkuZ2V0KCkudGhlbigoZG9jKSA9PiB7XHJcbiAgICAgIHRoaXMuY3VycmVudFVzZXIgPSBkb2MuZGF0YSgpO1xyXG4gICAgICBpZihkb2MuZGF0YSgpLmNoYXRzLmluY2x1ZGVzKHRoaXMubWFwRGF0YS5wb3N0SW5mby5pZCkpIHtcclxuICAgICAgICB0aGlzLmJ1dHRvblRleHQgPSAnVmlldyBjaGF0JztcclxuICAgICAgICBhY3Rpdml0eUluZGljYXRvci5idXN5ID0gZmFsc2U7XHJcbiAgICAgICAgaW5mb0NvbnRhaW5lci52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xyXG4gICAgICAgIGNoYXRCdXR0b24udmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICBmaXJlYmFzZS5maXJlc3RvcmUuY29sbGVjdGlvbignY2hhdHMnKS5kb2ModGhpcy5tYXBEYXRhLnBvc3RJbmZvLmRhdGEudWlkKS5nZXQoKS50aGVuKChkb2MpID0+IHtcclxuICAgICAgICAgIGlmKCFkb2MuZXhpc3RzICYmIHRoaXMudXNlcklkID09PSB0aGlzLm1hcERhdGEucG9zdEluZm8uZGF0YS51aWQpXHJcbiAgICAgICAgICAgIGNoYXRCdXR0b24udmlzaWJpbGl0eSA9ICdjb2xsYXBzZSc7XHJcbiAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIGNoYXRCdXR0b24udmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcclxuICAgICAgICAgIGFjdGl2aXR5SW5kaWNhdG9yLmJ1c3kgPSBmYWxzZTtcclxuICAgICAgICAgIGluZm9Db250YWluZXIudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMuYnV0dG9uVGV4dCA9ICdKb2luIGNoYXQnO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIGlmKGlzSU9TKSB7XHJcbiAgICAgIHRoaXMuYm91bmRzID0gR01TQ29vcmRpbmF0ZUJvdW5kcy5hbGxvYygpLmluaXQoKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgdGhpcy5zdGFydExhdCA9IHRoaXMubWFwRGF0YS5wb3N0SW5mby5kYXRhLnN0YXJ0TGF0O1xyXG4gICAgdGhpcy5lbmRMYXQgPSB0aGlzLm1hcERhdGEucG9zdEluZm8uZGF0YS5lbmRMYXQ7XHJcbiAgICB0aGlzLnN0YXJ0TG5nID0gdGhpcy5tYXBEYXRhLnBvc3RJbmZvLmRhdGEuc3RhcnRMbmc7XHJcbiAgICB0aGlzLmVuZExuZyA9IHRoaXMubWFwRGF0YS5wb3N0SW5mby5kYXRhLmVuZExuZztcclxuICAgIHRoaXMuaW5mbyA9IHRoaXMubWFwRGF0YS5wb3N0SXRlbS5pbmZvO1xyXG4gICAgdGhpcy5wcm9maWxlU291cmNlID0gdGhpcy5tYXBEYXRhLnBvc3RJdGVtLnByb2ZpbGVTb3VyY2U7XHJcbiAgICB0aGlzLnVzZXJuYW1lID0gdGhpcy5tYXBEYXRhLnBvc3RJdGVtLnVzZXJuYW1lO1xyXG5cclxuICAgIFxyXG4gICAgaWYodGhpcy51c2VySWQgIT09IHRoaXMubWFwRGF0YS5wb3N0SW5mby5kYXRhLnVpZCkge1xyXG4gICAgICBkZWxldGVCdXR0b24udmlzaWJpbGl0eSA9ICdjb2xsYXBzZSc7XHJcbiAgICB9XHJcblxyXG4gICAgZmlyZWJhc2UuZ2V0Q3VycmVudFVzZXIoKS50aGVuKCh1c2VyKSA9PiB7XHJcbiAgICAgIHRoaXMuY3VycmVudFVzZXJOYW1lID0gdXNlci5kaXNwbGF5TmFtZTtcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBvbk1hcFJlYWR5KGV2ZW50KSB7XHJcbiAgXHR0aGlzLm1hcFZpZXcgPSBldmVudC5vYmplY3Q7XHJcblxyXG5cdC8vIHRoaXMubGF0aXR1ZGUgPSAodGhpcy5zdGFydExhdCArIHRoaXMuZW5kTGF0KSAvIDIuMDtcclxuXHQvLyB0aGlzLmxvbmdpdHVkZSA9ICh0aGlzLnN0YXJ0TG5nICsgdGhpcy5lbmRMbmcpIC8gMi4wO1xyXG4gIFx0dGhpcy5hZGRNYXJrZXIodGhpcy5zdGFydExhdCwgdGhpcy5zdGFydExuZywgdGhpcy5tYXBEYXRhLnBvc3RJbmZvLmRhdGEuc3RhcnRBZGRyZXNzLCB0aGlzLm1hcERhdGEucG9zdEluZm8uZGF0YS5zdGFydEZvcm1hdHRlZCwgMCk7XHJcblx0ICB0aGlzLmFkZE1hcmtlcih0aGlzLmVuZExhdCwgdGhpcy5lbmRMbmcsIHRoaXMubWFwRGF0YS5wb3N0SW5mby5kYXRhLmVuZEFkZHJlc3MsIHRoaXMubWFwRGF0YS5wb3N0SW5mby5kYXRhLmVuZEZvcm1hdHRlZCwgMSk7XHJcblxyXG4gIFx0aWYoaXNBbmRyb2lkKSB7XHJcbiAgICBcdFx0dmFyIGJ1aWxkZXIgPSBuZXcgY29tLmdvb2dsZS5hbmRyb2lkLmdtcy5tYXBzLm1vZGVsLkxhdExuZ0JvdW5kcy5CdWlsZGVyKCk7XHJcbiAgXHRcdHRoaXMubWFwVmlldy5maW5kTWFya2VyKGZ1bmN0aW9uIChtYXJrZXIpIHsgYnVpbGRlci5pbmNsdWRlKG1hcmtlci5hbmRyb2lkLmdldFBvc2l0aW9uKCkpOyByZXR1cm4gZmFsc2V9KTtcclxuICBcdFx0dmFyIGJvdW5kcyA9IGJ1aWxkZXIuYnVpbGQoKTtcclxuICBcdFx0dmFyIGN1ID0gY29tLmdvb2dsZS5hbmRyb2lkLmdtcy5tYXBzLkNhbWVyYVVwZGF0ZUZhY3RvcnkubmV3TGF0TG5nQm91bmRzKGJvdW5kcywgMTUwKTtcclxuICBcdFx0dGhpcy5tYXBWaWV3LmdNYXAuYW5pbWF0ZUNhbWVyYShjdSk7XHJcbiAgXHR9XHJcbiAgXHRlbHNlIGlmKGlzSU9TKSB7XHJcbiAgXHRcdHZhciB1cGRhdGUgPSBHTVNDYW1lcmFVcGRhdGUuZml0Qm91bmRzV2l0aFBhZGRpbmcoYm91bmRzLCAxNTApOyB0aGlzLm1hcFZpZXcuZ01hcC5tb3ZlQ2FtZXJhKHVwZGF0ZSk7XHJcbiAgXHR9XHJcblxyXG4gIH1cclxuXHJcbiAgYWRkTWFya2VyKGxhdCwgbG5nLCB0aXRsZSwgc25pcHBldCwgaW5kZXgpIHtcclxuICBcdHZhciBtYXJrZXIgPSBuZXcgTWFya2VyKCk7XHJcbiAgICBtYXJrZXIucG9zaXRpb24gPSBQb3NpdGlvbi5wb3NpdGlvbkZyb21MYXRMbmcobGF0LCBsbmcpO1xyXG4gICAgbWFya2VyLnRpdGxlID0gdGl0bGU7XHJcbiAgICBtYXJrZXIuc25pcHBldCA9IHNuaXBwZXQ7XHJcbiAgICBtYXJrZXIudXNlckRhdGEgPSB7aW5kZXg6IGluZGV4fTtcclxuICAgIHRoaXMubWFwVmlldy5hZGRNYXJrZXIobWFya2VyKTtcclxuICAgIGlmKGlzSU9TKVxyXG4gICAgXHR0aGlzLmJvdW5kcyA9IHRoaXMuYm91bmRzLmluY2x1ZGluZ0Nvb3JkaW5hdGUobWFya2VyLnBvc2l0aW9uKTtcclxuICB9XHJcblxyXG4gIG9uTmF2QnRuVGFwKCkge1xyXG4gIFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUoWyduYXZpZ2F0aW9uJ10sIHtjbGVhckhpc3Rvcnk6IHRydWV9KTtcclxuICB9XHJcblxyXG4gIGRlbGV0ZUZpbGVzKCkge1xyXG4gICAgZmlyZWJhc2Uuc3RvcmFnZS5kZWxldGVGaWxlKHtcclxuICAgICAgLy8gdGhlIGZ1bGwgcGF0aCBvZiBhbiBleGlzdGluZyBmaWxlIGluIHlvdXIgRmlyZWJhc2Ugc3RvcmFnZVxyXG4gICAgICByZW1vdGVGdWxsUGF0aDogJ3Bvc3RpbmdzLycgKyB0aGlzLm1hcERhdGEucG9zdEluZm8uaWQgKyAnL21hcHMvbGFyZ2VfbWFwLnBuZydcclxuICAgIH0pLnRoZW4oXHJcbiAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJGaWxlIGRlbGV0ZWQuXCIpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkZpbGUgZGVsZXRpb24gRXJyb3I6IFwiICsgZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgICk7XHJcbiAgICBmaXJlYmFzZS5zdG9yYWdlLmRlbGV0ZUZpbGUoe1xyXG4gICAgICAvLyB0aGUgZnVsbCBwYXRoIG9mIGFuIGV4aXN0aW5nIGZpbGUgaW4geW91ciBGaXJlYmFzZSBzdG9yYWdlXHJcbiAgICAgIHJlbW90ZUZ1bGxQYXRoOiAncG9zdGluZ3MvJyArIHRoaXMubWFwRGF0YS5wb3N0SW5mby5pZCArICcvbWFwcy9zbWFsbF9tYXAucG5nJ1xyXG4gICAgfSkudGhlbihcclxuICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkZpbGUgZGVsZXRlZC5cIik7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAoZXJyb3IpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiRmlsZSBkZWxldGlvbiBFcnJvcjogXCIgKyBlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByb21wdERlbGV0ZSgpIHtcclxuICAgIGRpYWxvZ3MuY29uZmlybSh7XHJcbiAgICAgICAgdGl0bGU6IFwiQ29uZmlybSBkZWxldGVcIixcclxuICAgICAgICBtZXNzYWdlOiBcIkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBwb3N0P1wiLFxyXG4gICAgICAgIG9rQnV0dG9uVGV4dDogXCJDb25maXJtXCIsXHJcbiAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJDYW5jZWxcIixcclxuICAgIH0pLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAvLyByZXN1bHQgYXJndW1lbnQgaXMgYm9vbGVhblxyXG4gICAgICAgIGlmKHJlc3VsdClcclxuICAgICAgICAgIHRoaXMub25EZWxldGUoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb25EZWxldGUoKSB7XHJcbiAgICB2YXIgcG9zdGluZ0RvY3VtZW50ID0gZmlyZWJhc2UuZmlyZXN0b3JlLmNvbGxlY3Rpb24oJ3Bvc3RpbmdzJykuZG9jKHRoaXMubWFwRGF0YS5wb3N0SW5mby5pZCk7XHJcbiAgICB2YXIgdXNlckRvY3VtZW50ID0gZmlyZWJhc2UuZmlyZXN0b3JlLmNvbGxlY3Rpb24oJ3VzZXJzJykuZG9jKHRoaXMubWFwRGF0YS5wb3N0SW5mby5kYXRhLnVpZCk7XHJcbiAgICB2YXIgY2hhdERvY3VtZW50ID0gZmlyZWJhc2UuZmlyZXN0b3JlLmNvbGxlY3Rpb24oJ2NoYXRzJykuZG9jKHRoaXMubWFwRGF0YS5wb3N0SW5mby5pZCk7XHJcbiAgICBwb3N0aW5nRG9jdW1lbnQuZGVsZXRlKCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgIHVzZXJEb2N1bWVudC5nZXQoKS50aGVuKChkb2MpID0+IHtcclxuICAgICAgICBsZXQgdXNlclBvc3RzID0gZG9jLmRhdGEoKS5wb3N0cztcclxuICAgICAgICBjb25zdCBpbmRleCA9IHVzZXJQb3N0cy5pbmRleE9mKHRoaXMubWFwRGF0YS5wb3N0SW5mby5pZCwgMCk7XHJcbiAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcclxuICAgICAgICAgICB1c2VyUG9zdHMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHVzZXJEb2N1bWVudC51cGRhdGUoe1xyXG4gICAgICAgICAgcG9zdHM6IHVzZXJQb3N0c1xyXG4gICAgICAgIH0pLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgLy8gY2hhdERvY3VtZW50LmdldCgpLnRoZW4oKGRvYykgPT4ge1xyXG4gICAgICAgICAgLy8gICBsZXQgZGF0YSA9IGRvYy5kYXRhKCk7XHJcbiAgICAgICAgICAvLyAgIGlmKGRhdGEpIHtcclxuICAgICAgICAgIC8vICAgICBmb3IodmFyIGkgPSAwOyBpIDwgZGF0YS51c2Vycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgLy8gICAgICAgLy8gdGhpcy5jaGF0VXNlcnMucHVzaChkYXRhLnVzZXJzW2ldLnVpZCk7XHJcbiAgICAgICAgICAvLyAgICAgICBmaXJlYmFzZS5maXJlc3RvcmUuY29sbGVjdGlvbigndXNlcnMnKS5kb2MoZGF0YS51c2Vyc1tpXS51aWQpLmdldCgpLnRoZW4oKGRvYykgPT4ge1xyXG4gICAgICAgICAgLy8gICAgICAgICBjb25zdCBpZCA9IGRhdGEudXNlcnNbaV0udWlkO1xyXG4gICAgICAgICAgLy8gICAgICAgICBsZXQgdWlkQ2hhdHMgPSBkb2MuZGF0YSgpLmNoYXRzO1xyXG4gICAgICAgICAgLy8gICAgICAgICBsZXQgaW5kZXggPSB1aWRDaGF0cy5pbmRleE9mKHRoaXMubWFwRGF0YS5wb3N0SW5mby5pZCk7XHJcbiAgICAgICAgICAvLyAgICAgICAgIGlmKGluZGV4ID4gLTEpIHtcclxuICAgICAgICAgIC8vICAgICAgICAgICB1aWRDaGF0cy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgLy8gICAgICAgICB9XHJcbiAgICAgICAgICAvLyAgICAgICAgIGZpcmViYXNlLmZpcmVzdG9yZS5jb2xsZWN0aW9uKCd1c2VycycpLmRvYyhpZCkudXBkYXRlKHtcclxuICAgICAgICAgIC8vICAgICAgICAgICBjaGF0czogdWlkQ2hhdHNcclxuICAgICAgICAgIC8vICAgICAgICAgfSlcclxuICAgICAgICAgIC8vICAgICAgIH0pXHJcbiAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgLy8gICAgIGNoYXREb2N1bWVudC5kZWxldGUoKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgIC8vICAgICAgIHRoaXMuZGVsZXRlRmlsZXMoKTtcclxuICAgICAgICAgIC8vICAgICAgIHRoaXMub25OYXZCdG5UYXAoKTtcclxuICAgICAgICAgIC8vICAgICB9KVxyXG4gICAgICAgICAgLy8gICB9XHJcbiAgICAgICAgICAvLyAgIGVsc2Uge1xyXG4gICAgICAgICAgLy8gICAgIHRoaXMuZGVsZXRlRmlsZXMoKTtcclxuICAgICAgICAgIC8vICAgICB0aGlzLm9uTmF2QnRuVGFwKCk7XHJcbiAgICAgICAgICAvLyAgIH1cclxuICAgICAgICAgIC8vIH0pXHJcbiAgICAgICAgICB0aGlzLmRlbGV0ZUZpbGVzKCk7XHJcbiAgICAgICAgICB0aGlzLm9uTmF2QnRuVGFwKCk7XHJcbiAgICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICB9KVxyXG4gICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgfSlcclxuICAgIH0pLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICByZW1vdmVDaGF0KGluZGV4KSB7XHJcbiAgICBjb25zb2xlLmxvZyhpbmRleCk7XHJcbiAgICBmaXJlYmFzZS5maXJlc3RvcmUuY29sbGVjdGlvbigndXNlcnMnKS5kb2ModGhpcy5jaGF0VXNlcnNbaW5kZXhdKS5nZXQoKS50aGVuKChkb2MpID0+IHtcclxuICAgICAgbGV0IHVzZXJDaGF0cyA9IGRvYy5kYXRhKCkuY2hhdHM7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gdXNlckNoYXRzLmluZGV4T2YodGhpcy5tYXBEYXRhLnBvc3RJbmZvLmlkKTtcclxuICAgICAgaWYgKGluZGV4ID4gLTEpIHtcclxuICAgICAgICAgdXNlckNoYXRzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgIH1cclxuICAgICAgZmlyZWJhc2UuZmlyZXN0b3JlLmNvbGxlY3Rpb24oJ3VzZXJzJykuZG9jKHRoaXMuY2hhdFVzZXJzW2luZGV4XSkudXBkYXRlKHtcclxuICAgICAgICBjaGF0czogdXNlckNoYXRzXHJcbiAgICAgIH0pLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIGlmKGluZGV4ID09PSB0aGlzLmNoYXRVc2Vyc1tpbmRleF0ubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgdGhpcy5kZWxldGVGaWxlcygpO1xyXG4gICAgICAgICAgdGhpcy5vbk5hdkJ0blRhcCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBvblJlcG9ydCgpIHtcclxuXHJcbiAgfVxyXG5cclxuICBvbkNvbm5lY3RUYXAoKSB7XHJcbiAgICBsZXQgZ3JpZENvbnRhaW5lciA9IDxHcmlkTGF5b3V0PiB0aGlzLmxheW91dC5uYXRpdmVFbGVtZW50O1xyXG4gICAgbGV0IGFjdGl2aXR5SW5kaWNhdG9yID0gPEFjdGl2aXR5SW5kaWNhdG9yPiB0aGlzLmFpLm5hdGl2ZUVsZW1lbnQ7XHJcblxyXG4gICAgZ3JpZENvbnRhaW5lci52aXNpYmlsaXR5ID0gJ2NvbGxhcHNlJztcclxuICAgIGFjdGl2aXR5SW5kaWNhdG9yLmJ1c3kgPSB0cnVlO1xyXG5cclxuICAgIGlmKHRoaXMuYnV0dG9uVGV4dCA9PT0gJ1ZpZXcgY2hhdCcpIHtcclxuICAgICAgdGhpcy50cmFuc2ZlclNlcnZpY2Uuc2V0RGF0YSh0aGlzLm1hcERhdGEucG9zdEluZm8uaWQpO1xyXG4gICAgICBncmlkQ29udGFpbmVyLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XHJcbiAgICAgIGFjdGl2aXR5SW5kaWNhdG9yLmJ1c3kgPSBmYWxzZTtcclxuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydjaGF0J10pO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZih0aGlzLmJ1dHRvblRleHQgPT09ICdKb2luIGNoYXQnKSB7XHJcbiAgICAgIGNvbnN0IGNoYXREb2N1bWVudCA9IGZpcmViYXNlLmZpcmVzdG9yZS5jb2xsZWN0aW9uKCdjaGF0cycpLmRvYyh0aGlzLm1hcERhdGEucG9zdEluZm8uaWQpO1xyXG4gICAgICBjb25zdCB1c2VyRG9jdW1lbnQgPSBmaXJlYmFzZS5maXJlc3RvcmUuY29sbGVjdGlvbigndXNlcnMnKS5kb2ModGhpcy51c2VySWQpO1xyXG4gICAgICBjaGF0RG9jdW1lbnQuZ2V0KCkudGhlbigoZG9jKSA9PiB7XHJcbiAgICAgICAgaWYoZG9jLmV4aXN0cykge1xyXG4gICAgICAgICAgLy9jaGF0IGV4aXN0cywgc28gYWRkIHVzZXIgdG8gdGhlIGNoYXQgcm9vbSBhbmQgbmF2aWdhdGUgdGhlcmVcclxuICAgICAgICAgIGxldCB0b2tlbnM6IFtzdHJpbmddID0gZG9jLmRhdGEoKS50b2tlbnM7XHJcbiAgICAgICAgICB2YXIgdXNlcnM6IFt7dWlkOiBzdHJpbmcsIGRpc3BsYXlOYW1lOiBzdHJpbmd9XSA9IGRvYy5kYXRhKCkudXNlcnM7XHJcbiAgICAgICAgICB2YXIgdXNlclRva2VuczogW3N0cmluZ10gPSB0aGlzLmN1cnJlbnRVc2VyLnRva2VucztcclxuICAgICAgICAgIHZhciBuZXdUb2tlbnMgPSB0b2tlbnMuY29uY2F0KHVzZXJUb2tlbnMpO1xyXG4gICAgICAgICAgdXNlcnMucHVzaCh7dWlkOiB0aGlzLnVzZXJJZCwgZGlzcGxheU5hbWU6IHRoaXMuY3VycmVudFVzZXJOYW1lfSlcclxuICAgICAgICAgIGNoYXREb2N1bWVudC51cGRhdGUoe1xyXG4gICAgICAgICAgICB1c2VyczogdXNlcnMsXHJcbiAgICAgICAgICAgIHRva2VuczogQXJyYXkuZnJvbShuZXcgU2V0KG5ld1Rva2VucykpXHJcbiAgICAgICAgICB9KS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgdXNlckRvY3VtZW50LmdldCgpLnRoZW4oKGRvYykgPT4ge1xyXG4gICAgICAgICAgICAgIHZhciB1c2VyQ2hhdHMgPSBkb2MuZGF0YSgpLmNoYXRzO1xyXG4gICAgICAgICAgICAgIHVzZXJDaGF0cy5wdXNoKHRoaXMubWFwRGF0YS5wb3N0SW5mby5pZCk7XHJcbiAgICAgICAgICAgICAgdXNlckRvY3VtZW50LnVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBjaGF0czogdXNlckNoYXRzXHJcbiAgICAgICAgICAgICAgfSkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvL2ZpbmFsbHkgYWZ0ZXIgZXZlcnl0aGluZyBlbHNlIGhhcyB1cGRhdGVkLCBzZW5kIHVzZXIgdG8gY2hhdCBjb21wb25lbnRcclxuICAgICAgICAgICAgICAgIHRoaXMudHJhbnNmZXJTZXJ2aWNlLnNldERhdGEodGhpcy5tYXBEYXRhLnBvc3RJbmZvLmlkKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYnV0dG9uVGV4dCA9ICdWaWV3IGNoYXQnO1xyXG4gICAgICAgICAgICAgICAgZ3JpZENvbnRhaW5lci52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xyXG4gICAgICAgICAgICAgICAgYWN0aXZpdHlJbmRpY2F0b3IuYnVzeSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydjaGF0J10pO1xyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIC8vY2hhdCBkb2VzIG5vdCBleGlzdCwgc28gY3JlYXRlIGFuZCBhZGQgYm90aCBwb3N0IHVzZXIgYW5kIGN1cnJlbnQgdXNlclxyXG4gICAgICAgICAgZmlyZWJhc2UuZmlyZXN0b3JlLmNvbGxlY3Rpb24oJ2NoYXRzJykuZG9jKHRoaXMubWFwRGF0YS5wb3N0SW5mby5pZCkuc2V0KHtcclxuICAgICAgICAgICAgdXNlcnM6IFt7dWlkOiB0aGlzLm1hcERhdGEucG9zdEluZm8uZGF0YS51aWQsIGRpc3BsYXlOYW1lOiB0aGlzLm1hcERhdGEucG9zdEl0ZW0udXNlcm5hbWV9LCB7dWlkOiB0aGlzLnVzZXJJZCwgZGlzcGxheU5hbWU6IHRoaXMuY3VycmVudFVzZXJOYW1lfV0sXHJcbiAgICAgICAgICAgIGNoYXRzOiBbXSxcclxuICAgICAgICAgICAgZXhwaXJlZDogZmFsc2UsXHJcbiAgICAgICAgICB9KS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgZmlyZWJhc2UuZmlyZXN0b3JlLmNvbGxlY3Rpb24oJ3VzZXJzJykuZG9jKHRoaXMubWFwRGF0YS5wb3N0SW5mby5kYXRhLnVpZCkuZ2V0KCkudGhlbigoZG9jKSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc3QgdXNlclRva2VucyA9IHRoaXMuY3VycmVudFVzZXIudG9rZW5zO1xyXG4gICAgICAgICAgICAgIGNvbnN0IG90aGVyVXNlclRva2VucyA9IGRvYy5kYXRhKCkudG9rZW5zO1xyXG4gICAgICAgICAgICAgIGNvbnN0IG5ld1Rva2VucyA9IHVzZXJUb2tlbnMuY29uY2F0KG90aGVyVXNlclRva2Vucyk7XHJcbiAgICAgICAgICAgICAgZmlyZWJhc2UuZmlyZXN0b3JlLmNvbGxlY3Rpb24oJ2NoYXRzJykuZG9jKHRoaXMubWFwRGF0YS5wb3N0SW5mby5pZCkudXBkYXRlKHtcclxuICAgICAgICAgICAgICAgIHRva2VuczogQXJyYXkuZnJvbShuZXcgU2V0KG5ld1Rva2VucykpXHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICB2YXIgdXNlckNoYXRzID0gZG9jLmRhdGEoKS5jaGF0cztcclxuICAgICAgICAgICAgICB1c2VyQ2hhdHMucHVzaCh0aGlzLm1hcERhdGEucG9zdEluZm8uaWQpO1xyXG4gICAgICAgICAgICAgIGZpcmViYXNlLmZpcmVzdG9yZS5jb2xsZWN0aW9uKCd1c2VycycpLmRvYyh0aGlzLm1hcERhdGEucG9zdEluZm8uZGF0YS51aWQpLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBjaGF0czogdXNlckNoYXRzXHJcbiAgICAgICAgICAgICAgfSkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB1c2VyRG9jdW1lbnQuZ2V0KCkudGhlbigoZG9jKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHZhciB1c2VyQ2hhdHMgPSBkb2MuZGF0YSgpLmNoYXRzO1xyXG4gICAgICAgICAgICAgICAgICB1c2VyQ2hhdHMucHVzaCh0aGlzLm1hcERhdGEucG9zdEluZm8uaWQpO1xyXG4gICAgICAgICAgICAgICAgICB1c2VyRG9jdW1lbnQudXBkYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBjaGF0czogdXNlckNoYXRzXHJcbiAgICAgICAgICAgICAgICAgIH0pLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vZmluYWxseSBhZnRlciBldmVyeXRoaW5nIGVsc2UgaGFzIHVwZGF0ZWQsIHNlbmQgdXNlciB0byBjaGF0IGNvbXBvbmVudFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHJhbnNmZXJTZXJ2aWNlLnNldERhdGEodGhpcy5tYXBEYXRhLnBvc3RJbmZvLmlkKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJ1dHRvblRleHQgPSAnVmlldyBjaGF0JztcclxuICAgICAgICAgICAgICAgICAgICBncmlkQ29udGFpbmVyLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZpdHlJbmRpY2F0b3IuYnVzeSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnY2hhdCddKTtcclxuICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQb3N0aW5nU2VydmljZSB7XHJcblx0LyoqXHJcblx0KiBUbyBnZXQgdGhlIHNlcnZlciB0byByZWNvZ25pemUgeW91ciBtb2JpbGUgZGV2aWNlLCBmaW5kIHlvdXIgaXB2NCBhZGRyZXNzIGJ5IHJ1bm5pbmcgaXBjb25maWcgaW4gYSB0ZXJtaW5hbCB3aW5kb3dcclxuXHQqIGFuZCBhZGQgYSBuZXcgdXJpIGxpbmUgd2l0aCB5b3VyIGlwdjQgYWRkcmVzcy4gRG8gdGhpcyBmb3IgbmV0d29ya19zZWN1cml0eV9jb25maWcueG1sLCB1c2VyLnNlcnZpY2VzLnRucy50cywgYW5kXHJcblx0KiBwb3N0aW5nLnNlcnZpY2UudG5zLnRzLlxyXG5cdCovXHJcblx0Ly8gQWRhbSdzIHRlc3Rpbmcgc2VydmVyXHJcblx0Ly8gdXJpID0gJ2h0dHA6Ly8xOTIuMTY4LjEuNzo0MDAwJztcclxuXHQvLyB1cmkgPSAnaHR0cDovLzEwLjUuMTEuMjU6NDAwMCc7XHJcblx0Ly8gUGhpbGxpcCdzIFRlc3Rpbmcgc2VydmVyXHJcblx0dXJpID0gJ2h0dHA6Ly8xOTIuMTY4LjEuMzo0MDAwJztcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHsgfVxyXG5cclxuICBnZXRQb3N0aW5ncygpIHtcclxuICBcdHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke3RoaXMudXJpfS9wb3N0aW5nc2ApO1xyXG4gIH1cclxuXHJcbiAgZ2V0UG9zdGluZ2J5SWQoaWQpIHtcclxuICBcdHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke3RoaXMudXJpfS9wb3N0aW5ncy8ke2lkfWApO1xyXG4gIH1cclxuXHJcbiAgYWRkUG9zdGluZyh1c2VyLCBzdGFydGFkciwgZW5kYWRyLCBkYXRlLCBjb3N0LCBjYXBhY2l0eSwgY29tbWVudHMpIHtcclxuXHJcbiAgICAvL2NvbnN0IHByaWNlID0gcmVxKC4uLy4uL2JhY2tlbmQvZGF0YS9wcmljaW5nKSh7c3RhcnQ6IHN0YXJ0YWRyLCBlbmQ6IGVuZGFkcn0pO1xyXG5cclxuICBcdGNvbnN0IHBvc3RpbmcgPSB7XHJcbiAgXHRcdHVzZXIgOiB1c2VyLFxyXG4gIFx0XHRzdGFydGFkciA6IHN0YXJ0YWRyLFxyXG4gIFx0XHRlbmRhZHIgOiBlbmRhZHIsXHJcbiAgXHRcdGRhdGUgOiBkYXRlLFxyXG4gIFx0XHRjb3N0IDogY29zdCxcclxuICBcdFx0Y2FwYWNpdHkgOiBjYXBhY2l0eSxcclxuICBcdFx0Y29tbWVudHMgOiBjb21tZW50c1xyXG4gIFx0fTtcclxuICBcdHJldHVybiB0aGlzLmh0dHAucG9zdChgJHt0aGlzLnVyaX0vcG9zdGluZ3MvYWRkL2AsIHBvc3RpbmcpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlUG9zdGluZyhpZCwgdXNlciwgc3RhcnRhZHIsIGVuZGFkciwgZGF0ZSwgY29zdCwgY2FwYWNpdHksIGNvbW1lbnRzKSB7XHJcbiAgICAvL2NvbnN0IHByaWNlID0gcmVxKC4uLy4uL2JhY2tlbmQvZGF0YS9wcmljaW5nKSh7c3RhcnQ6IHN0YXJ0YWRyLCBlbmQ6IGVuZGFkcn0pO1xyXG4gIFx0Y29uc3QgcG9zdGluZyA9IHtcclxuICBcdFx0dXNlciA6IHVzZXIsXHJcbiAgXHRcdHN0YXJ0YWRyIDogc3RhcnRhZHIsXHJcbiAgXHRcdGVuZGFkciA6IGVuZGFkcixcclxuICBcdFx0ZGF0ZSA6IGRhdGUsXHJcbiAgXHRcdGNvc3QgOiBjb3N0LFxyXG4gIFx0XHRjYXBhY2l0eSA6IGNhcGFjaXR5LFxyXG4gIFx0XHRjb21tZW50cyA6IGNvbW1lbnRzXHJcbiAgXHR9O1xyXG4gIFx0cmV0dXJuIHRoaXMuaHR0cC5wb3N0KGAke3RoaXMudXJpfS9wb3N0aW5ncy91cGRhdGUvJHtpZH1gLCBwb3N0aW5nKTtcclxuICB9XHJcblxyXG4gIGRlbGV0ZVBvc3RpbmcoaWQpIHtcclxuICBcdHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke3RoaXMudXJpfS9wb3N0aW5ncy9kZWxldGUvJHtpZH1gKTtcclxuICB9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFBvc3RpbmdTZXJ2aWNlIHtcclxuXHQvKipcclxuXHQqIFRvIGdldCB0aGUgc2VydmVyIHRvIHJlY29nbml6ZSB5b3VyIG1vYmlsZSBkZXZpY2UsIGZpbmQgeW91ciBpcHY0IGFkZHJlc3MgYnkgcnVubmluZyBpcGNvbmZpZyBpbiBhIHRlcm1pbmFsIHdpbmRvd1xyXG5cdCogYW5kIGFkZCBhIG5ldyB1cmkgbGluZSB3aXRoIHlvdXIgaXB2NCBhZGRyZXNzLiBEbyB0aGlzIGZvciBuZXR3b3JrX3NlY3VyaXR5X2NvbmZpZy54bWwsIHVzZXIuc2VydmljZXMudG5zLnRzLCBhbmRcclxuXHQqIHBvc3Rpbmcuc2VydmljZS50bnMudHMuXHJcblx0Ki9cclxuXHQvLyBBZGFtJ3MgdGVzdGluZyBzZXJ2ZXJcclxuXHQvLyB1cmkgPSAnaHR0cDovLzE5Mi4xNjguMS43OjQwMDAnO1xyXG5cdC8vIHVyaSA9ICdodHRwOi8vMTAuNS4xMS4yNTo0MDAwJztcclxuXHQvLyBQaGlsbGlwJ3MgVGVzdGluZyBzZXJ2ZXJcclxuXHR1cmkgPSAnaHR0cDovLzE5Mi4xNjguMS4zOjQwMDAnO1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkgeyB9XHJcblxyXG4gIGdldFBvc3RpbmdzKCkge1xyXG4gIFx0cmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy51cml9L3Bvc3RpbmdzYCk7XHJcbiAgfVxyXG5cclxuICBnZXRQb3N0aW5nYnlJZChpZCkge1xyXG4gIFx0cmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy51cml9L3Bvc3RpbmdzLyR7aWR9YCk7XHJcbiAgfVxyXG5cclxuICBhZGRQb3N0aW5nKHVzZXIsIHN0YXJ0YWRyLCBlbmRhZHIsIGRhdGUsIGNvc3QsIGNhcGFjaXR5LCBjb21tZW50cykge1xyXG5cclxuICAgIC8vY29uc3QgcHJpY2UgPSByZXEoLi4vLi4vYmFja2VuZC9kYXRhL3ByaWNpbmcpKHtzdGFydDogc3RhcnRhZHIsIGVuZDogZW5kYWRyfSk7XHJcblxyXG4gIFx0Y29uc3QgcG9zdGluZyA9IHtcclxuICBcdFx0dXNlciA6IHVzZXIsXHJcbiAgXHRcdHN0YXJ0YWRyIDogc3RhcnRhZHIsXHJcbiAgXHRcdGVuZGFkciA6IGVuZGFkcixcclxuICBcdFx0ZGF0ZSA6IGRhdGUsXHJcbiAgXHRcdGNvc3QgOiBjb3N0LFxyXG4gIFx0XHRjYXBhY2l0eSA6IGNhcGFjaXR5LFxyXG4gIFx0XHRjb21tZW50cyA6IGNvbW1lbnRzXHJcbiAgXHR9O1xyXG4gIFx0cmV0dXJuIHRoaXMuaHR0cC5wb3N0KGAke3RoaXMudXJpfS9wb3N0aW5ncy9hZGQvYCwgcG9zdGluZyk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVQb3N0aW5nKGlkLCB1c2VyLCBzdGFydGFkciwgZW5kYWRyLCBkYXRlLCBjb3N0LCBjYXBhY2l0eSwgY29tbWVudHMpIHtcclxuICAgIC8vY29uc3QgcHJpY2UgPSByZXEoLi4vLi4vYmFja2VuZC9kYXRhL3ByaWNpbmcpKHtzdGFydDogc3RhcnRhZHIsIGVuZDogZW5kYWRyfSk7XHJcbiAgXHRjb25zdCBwb3N0aW5nID0ge1xyXG4gIFx0XHR1c2VyIDogdXNlcixcclxuICBcdFx0c3RhcnRhZHIgOiBzdGFydGFkcixcclxuICBcdFx0ZW5kYWRyIDogZW5kYWRyLFxyXG4gIFx0XHRkYXRlIDogZGF0ZSxcclxuICBcdFx0Y29zdCA6IGNvc3QsXHJcbiAgXHRcdGNhcGFjaXR5IDogY2FwYWNpdHksXHJcbiAgXHRcdGNvbW1lbnRzIDogY29tbWVudHNcclxuICBcdH07XHJcbiAgXHRyZXR1cm4gdGhpcy5odHRwLnBvc3QoYCR7dGhpcy51cml9L3Bvc3RpbmdzL3VwZGF0ZS8ke2lkfWAsIHBvc3RpbmcpO1xyXG4gIH1cclxuXHJcbiAgZGVsZXRlUG9zdGluZyhpZCkge1xyXG4gIFx0cmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy51cml9L3Bvc3RpbmdzL2RlbGV0ZS8ke2lkfWApO1xyXG4gIH1cclxuXHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi8qXFxuQWRkIHlvdXIgTmF0aXZlU2NyaXB0IHNwZWNpZmljIHN0eWxlcyBoZXJlLlxcblRvIGxlYXJuIG1vcmUgYWJvdXQgc3R5bGluZyBpbiBOYXRpdmVTY3JpcHQgc2VlOlxcbmh0dHBzOi8vZG9jcy5uYXRpdmVzY3JpcHQub3JnL2FuZ3VsYXIvdWkvc3R5bGluZ1xcbiovXFxuXFxuTGFiZWwge1xcblxcdHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblxcbi5uYW1lLWxhYmVsIHtcXG5cXHRtYXJnaW4tdG9wOiAxNjtcXG5cXHRtYXJnaW4tbGVmdDogMjQ7XFxuXFx0Y29sb3I6IGJsYWNrO1xcblxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxuXFx0Zm9udC1zaXplOiAxODtcXG59XFxuXFxuLmluZm8tbGFiZWwge1xcblxcdG1hcmdpbi10b3A6IDEyO1xcblxcdG1hcmdpbi1sZWZ0OiAyNDtcXG5cXHRtYXJnaW4tYm90dG9tOiAxNjtcXG5cXHRjb2xvcjogYmxhY2s7XFxufVxcblxcbi5wb3N0IHtcXG5cXHRib3JkZXItYm90dG9tLXdpZHRoOiAxO1xcblxcdGJvcmRlci1jb2xvcjogI2YxZjFmMTtcXG59XFxuXFxuLnBvc3Q6aGlnaGxpZ2h0ZWQge1xcblxcdGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XFxufVxcblxcbi5wb3N0aW5nLW1hcCB7XFxuXFx0bWFyZ2luLWJvdHRvbTogMTY7XFxuXFx0Ym9yZGVyLXJhZGl1czogMTA7XFxuXFx0LyphbGlnbi1jb250ZW50OiBjZW50ZXI7Ki9cXG59XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJwb3N0XFxcIj5cXG4gIDxMYWJlbCB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgaWQ9XFxcInBvc3QtbmFtZVxcXCIgY2xhc3M9XFxcIm5hbWUtbGFiZWxcXFwiPjwvTGFiZWw+XFxuICA8TGFiZWwgdGV4dFdyYXA9XFxcInRydWVcXFwiIGlkPVxcXCJwb3N0LWluZm9cXFwiIGNsYXNzPVxcXCJpbmZvLWxhYmVsXFxcIj48L0xhYmVsPlxcbiAgPEltYWdlIHNyYz1cXFwifi9pbWcvY3ZpbGxlLW1hcC5wbmdcXFwiIHN0cmV0Y2g9XFxcIm5vbmVcXFwiIGhlaWdodD1cXFwiMjIwXFxcIiB3aWR0aD1cXFwiMzAwXFxcIiBjbGFzcz1cXFwicG9zdGluZy1tYXBcXFwiPjwvSW1hZ2U+XFxuPC9TdGFja0xheW91dD5cXG5cXG48IS0tXFxuT3JpZ2luYWwgV2ViIHRlbXBsYXRlOlxcblxcblxcbi0tPlwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgVHJhbnNmZXJTZXJ2aWNlIH0gZnJvbSAnLi4vZGF0YXRyYW5zZmVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlJztcclxuaW1wb3J0IHsgTGFiZWwgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2xhYmVsJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLXBvc3RpbmcnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wb3N0aW5nLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9wb3N0aW5nLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUG9zdGluZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgaWQ7XHJcbiAgYnV0dG9uVHlwZTtcclxuXHJcbiAgaW5mbyA9IHRoaXMudHJhbnNmZXJTZXJ2aWNlLmdldERhdGEoKVswXTtcclxuXHJcbiAgaW5mb1RleHQgPSBcIkxlYXZpbmcgXCIgKyB0aGlzLmluZm8uZGF0ZSArIFwiIGZyb20gXCIgKyB0aGlzLmluZm8uc3RhcnRhZHIgKyBcIiB0byBcIiArIHRoaXMuaW5mby5lbmRhZHIgKyBcIiBmb3IgXCIgKyB0aGlzLmluZm8uY29zdDtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRyYW5zZmVyU2VydmljZTogVHJhbnNmZXJTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHBhZ2U6IFBhZ2UpIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIFx0dGhpcy5pZCA9IHRoaXMuaW5mby5pZDtcclxuICBcdHRoaXMuYnV0dG9uVHlwZSA9IHRoaXMuaW5mby5idXR0b25UeXBlO1xyXG4gICAgY29uc3QgbmFtZV9sYWJlbCA9IDxMYWJlbD50aGlzLnBhZ2UuZ2V0Vmlld0J5SWQoJ3Bvc3QtbmFtZScpO1xyXG4gICAgbmFtZV9sYWJlbC50ZXh0ID0gdGhpcy5pbmZvLnVzZXI7XHJcbiAgICBuYW1lX2xhYmVsLmlkID0gJ3Bvc3QtbmFtZScgKyB0aGlzLmluZm8uaW5kZXg7XHJcbiAgICBjb25zdCBpbmZvX2xhYmVsID0gPExhYmVsPnRoaXMucGFnZS5nZXRWaWV3QnlJZCgncG9zdC1pbmZvJyk7XHJcbiAgICBpZih0aGlzLmluZm8uY2FwYWNpdHkgPiAwKVxyXG4gICAgICBpbmZvX2xhYmVsLnRleHQgPSBcIk9mZmVyaW5nIHJpZGUgbGVhdmluZyBcIiArIHRoaXMuaW5mby5kYXRlICsgXCIgZnJvbSBcIiArIHRoaXMuaW5mby5zdGFydGFkciArIFwiIHRvIFwiICsgdGhpcy5pbmZvLmVuZGFkciArIFwiIGZvciBcIiArIHRoaXMuaW5mby5jb3N0O1xyXG4gICAgZWxzZVxyXG4gICAgICBpbmZvX2xhYmVsLnRleHQgPSBcIlJlcXVlc3RpbmcgcmlkZSBsZWF2aW5nIFwiICsgdGhpcy5pbmZvLmRhdGUgKyBcIiBmcm9tIFwiICsgdGhpcy5pbmZvLnN0YXJ0YWRyICsgXCIgdG8gXCIgKyB0aGlzLmluZm8uZW5kYWRyO1xyXG4gICAgaW5mb19sYWJlbC5pZCA9ICdwb3N0LWluZm8nICsgdGhpcy5pbmZvLmluZGV4O1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJjcmVhdGVkIHBvc3RcIik7XHJcbiAgXHQvLyB0aGlzLmNyZWF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlKCkge1xyXG4gIFx0Y29uc29sZS5sb2codGhpcy5pbmZvKTtcclxuICBcdGNvbnNvbGUubG9nKHRoaXMuaW5mby5pbmRleCk7XHJcblx0ICB2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGRpdi5pZCA9IFwiZmVlZFwiKyB0aGlzLmluZm8uaW5kZXg7XHJcbiAgICBkaXYuY2xhc3NOYW1lID0gXCJwb3N0aW5nLWJsb2NrXCI7XHJcbiAgICBkaXYuc3R5bGUuZGlzcGxheSA9IFwiYWxsXCI7XHJcbiAgICBkaXYuc3R5bGUubWFyZ2luID0gXCJhdXRvXCI7XHJcbiAgICBkaXYuc3R5bGUubWFyZ2luVG9wID0gXCIwLjVlbVwiO1xyXG4gICAgZGl2LnN0eWxlLm1hcmdpbkJvdHRvbSA9IFwiMC41ZW1cIjtcclxuXHJcbiAgICAvL2Rpdi5zdHlsZS5wYWRkaW5nTGVmdCA9IFwiMjAlXCI7XHJcbiAgICAvL2Rpdi5zdHlsZS53aWR0aCA9IFwiNDAlXCI7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmlnZmVlZCcpLmFwcGVuZENoaWxkKGRpdik7XHJcbiAgICBcclxuICAgIHZhciBkaXZ0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmZWVkJysgdGhpcy5pbmZvLmluZGV4KS5hcHBlbmRDaGlsZChkaXZ0ZXh0KTtcclxuICAgIGRpdnRleHQuaWQgPSBcInRleHRcIisgdGhpcy5pbmZvLmluZGV4O1xyXG4gICAgXHJcbiAgICB2YXIgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIklNR1wiKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0JysgdGhpcy5pbmZvLmluZGV4KS5hcHBlbmRDaGlsZChpbWcpO1xyXG4gICAgaW1nLmlkID0gXCJwZnBcIisgdGhpcy5pbmZvLmluZGV4O1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwZnBcIik7XHJcbiAgICBpbWcuY2xhc3NOYW1lID0gXCJwZnBcIjtcclxuICAgIChpbWcgYXMgSFRNTElucHV0RWxlbWVudCkuc3JjID0gXCJzcmMvaW1nL3NhbXBsZV9wcm9maWxlLmpwZ1wiO1xyXG4gICAgXHJcbiAgICB2YXIgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHQnKyB0aGlzLmluZm8uaW5kZXgpLmFwcGVuZENoaWxkKGhlYWRlcik7XHJcbiAgICBoZWFkZXIuaWQgPSBcIm5hbWVcIisgdGhpcy5pbmZvLmluZGV4O1xyXG4gICAgaGVhZGVyLmlubmVySFRNTCA9IHRoaXMuaW5mby51c2VyO1xyXG4gICAgaGVhZGVyLmNsYXNzTmFtZSA9IFwiaGVhZGVyXCI7XHJcbiAgICBcclxuICAgIHZhciBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHQnKyB0aGlzLmluZm8uaW5kZXgpLmFwcGVuZENoaWxkKHApO1xyXG4gICAgcC5pZCA9IFwiZGV0YWlsc1wiKyB0aGlzLmluZm8uaW5kZXg7XHJcbiAgICBwLmlubmVySFRNTCA9IFwiTGVhdmluZyBcIiArIHRoaXMuaW5mby5kYXRlICsgXCIgZnJvbSBcIiArIHRoaXMuaW5mby5zdGFydGFkciArIFwiIHRvIFwiICsgdGhpcy5pbmZvLmVuZGFkciArIFwiIGZvciBcIiArIHRoaXMuaW5mby5jb3N0O1xyXG4gICAgcC5jbGFzc05hbWUgPSBcImRldGFpbHNcIjtcclxuICAgIFxyXG4gICAgdmFyIG1hcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJJTUdcIilcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0JysgdGhpcy5pbmZvLmluZGV4KS5hcHBlbmRDaGlsZChtYXApO1xyXG4gICAgbWFwLmlkID0gXCJtYXBcIisgdGhpcy5pbmZvLmluZGV4O1xyXG4gICAgbWFwLmNsYXNzTmFtZSA9IFwiZGVzdGluYXRpb25cIjtcclxuICAgIChtYXAgYXMgSFRNTElucHV0RWxlbWVudCkuc3JjID0gXCJzcmMvaW1nL3ZpcmdpbmlhX21hcC5qcGdcIjtcclxuICAgIFxyXG4gICAgdmFyIGNvbm5lY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHQnKyB0aGlzLmluZm8uaW5kZXgpLmFwcGVuZENoaWxkKGNvbm5lY3QpO1xyXG4gICAgY29ubmVjdC5pZCA9IHRoaXMuYnV0dG9uVHlwZSArIHRoaXMuaW5mby5pbmRleDtcclxuICAgIGNvbm5lY3QuY2xhc3NOYW1lID0gXCJwb3N0aW5nLWJ1dHRvblwiO1xyXG4gICAgY29ubmVjdC5pbm5lckhUTUwgPSB0aGlzLmluZm8uYnV0dG9uVHlwZTtcclxuICAgIGNvbm5lY3Quc3R5bGUubWFyZ2luUmlnaHQgPSBcIjFlbVwiO1xyXG4gICAgY29ubmVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGU6RXZlbnQpID0+IHRoaXMuY2xpY2tlZCh0aGlzLmluZm8uYnV0dG9uVHlwZSkpO1xyXG4gIH1cclxuICBjbGlja2VkKGJ1dHRvblR5cGUpe1xyXG4gIFx0dGhpcy50cmFuc2ZlclNlcnZpY2Uuc2V0RGF0YSh0aGlzLmluZm8pO1xyXG4gIFx0aWYoYnV0dG9uVHlwZSA9PSBcIkNvbm5lY3RcIilcclxuXHRcdHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoJy9jb25uZWN0Jyk7XHJcblx0ZWxzZVxyXG5cdFx0dGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCgnL3VwZGF0ZScpO1xyXG4gIH1cclxuXHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi8qIEFkZCBtb2JpbGUgc3R5bGVzIGZvciB0aGUgY29tcG9uZW50IGhlcmUuICAqL1xcbi5oZWFkZXJ7XFxuICAgIG1hcmdpbi10b3A6IDUwO1xcblxcdG1hcmdpbi1sZWZ0OiAzMjtcXG5cXHRjb2xvcjogYmxhY2s7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIGZvbnQtc2l6ZTogMjQ7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcbi5zdWJtaXQtYnRue1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNhYzAwZTY7XFxuICAgIHdpZHRoOiA3NSU7XFxuICAgIGhlaWdodDogMTcwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiU2Vnb2UgVUlcXFwiLEFyaWFsLHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgbWFyZ2luLXRvcDogMjA7XFxufVxcbi50ZXh0LWZpZWxke1xcbiAgICB3aWR0aDogODUlO1xcbiAgICBtYXJnaW4tdG9wOiAyMDtcXG4gICAgY29sb3I6IzY5Njk2OVxcbn1cXG5cXG4uY2xvc2UtYnV0dG9uLWNvbnRhaW5lciB7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdGxlZnQ6IDA7XFxufVxcbi5jbG9zZSB7XFxuXFx0bWFyZ2luOiAxMDtcXG5cXHRmb250LXNpemU6IDQwO1xcblxcdHdpZHRoOiA0ODtcXG4gICAgaGVpZ2h0OiA0ODtcXG4gICAgY29sb3I6IGJsYWNrXFxufVxcblxcbi5lcnJvci1tZXNzYWdlIHtcXG5cXHRjb2xvcjogcmVkO1xcblxcdGZvbnQtc2l6ZTogMTY7XFxuXFx0dmlzaWJpbGl0eTogY29sbGFwc2U7XFxufVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxTdGFja2xheW91dD5cXHJcXG4gICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJjbG9zZS1idXR0b24tY29udGFpbmVyXFxcIiBvcmllbnRhdGlvbj1cXFwiaG9yaXpvbnRhbFxcXCI+XFxyXFxuICAgICAgICA8TGFiZWwgdGV4dD1cXFwiJnRpbWVzO1xcXCIgY2xhc3M9XFxcImNsb3NlXFxcIiAodGFwKT1cXFwiY2xvc2UoJ2NhbmNlbCcpXFxcIj48L0xhYmVsPlxcclxcbiAgICA8L1N0YWNrTGF5b3V0PlxcclxcbiAgICA8TGFiZWwgY2xhc3M9XFxcImhlYWRlclxcXCIgdGV4dD1cXFwiUGxlYXNlIHJlLWVudGVyIHlvdXIgcGFzc3dvcmRcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIj48L0xhYmVsPlxcclxcbiAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImlucHV0LWZpZWxkXFxcIj5cXHJcXG4gICAgICAgIDxUZXh0RmllbGQgI3ZhbCBbKG5nTW9kZWwpXT1cXFwicGFzc3dvcmRcXFwiIHNlY3VyZT1cXFwidHJ1ZVxcXCIgYXV0b2NvcnJlY3Q9XFxcImZhbHNlXFxcIiByZXR1cm5LZXlUeXBlPVxcXCJkb25lXFxcIiBjbGFzcz1cXFwidGV4dC1maWVsZFxcXCI+PC9UZXh0RmllbGQ+XFxyXFxuICAgIDwvU3RhY2tMYXlvdXQ+XFxyXFxuICAgIDxMYWJlbCB0ZXh0PVxcXCJUaGUgcGFzc3dvcmQgeW91IGVudGVyZWQgd2FzIGluY29ycmVjdFxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiIGNsYXNzPVxcXCJlcnJvci1tZXNzYWdlXFxcIiAjZXJyb3JNZXNzYWdlPjwvTGFiZWw+XFxyXFxuXFxyXFxuICAgIDxCdXR0b24gdGV4dD1cXFwiU3VibWl0XFxcIiAodGFwKT1cXFwic3VibWl0KHBhc3N3b3JkKVxcXCIgY2xhc3M9XFxcInN1Ym1pdC1idG5cXFwiPjwvQnV0dG9uPlxcclxcblxcclxcbjwvU3RhY2tsYXlvdXQ+XCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NvbnRhaW5lclJlZiwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1vZGFsRGlhbG9nUGFyYW1zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2RpcmVjdGl2ZXMvZGlhbG9nc1wiO1xyXG5pbXBvcnQgKiBhcyBmaXJlYmFzZSBmcm9tICduYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlJztcclxuaW1wb3J0IHsgTG9naW5jaGVja1NlcnZpY2UgfSBmcm9tICcuLi9sb2dpbmNoZWNrLnNlcnZpY2UudG5zJztcclxuaW1wb3J0IHsgVHJhbnNmZXJTZXJ2aWNlIH0gZnJvbSAnLi4vZGF0YXRyYW5zZmVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgKiBhcyBkaWFsb2dzIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3NcIjtcclxuaW1wb3J0IHsgU2V0dGluZ3Nmb3JtQ29tcG9uZW50IH0gZnJvbSAnLi4vc2V0dGluZ3Nmb3JtL3NldHRpbmdzZm9ybS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNb2RhbERpYWxvZ1NlcnZpY2UgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZGlyZWN0aXZlcy9kaWFsb2dzXCI7XHJcbmltcG9ydCB7IExhYmVsIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9sYWJlbCc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtcmVhdXRoJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcmVhdXRoLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9yZWF1dGguY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSZWF1dGhDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhcmFtczogTW9kYWxEaWFsb2dQYXJhbXMsIHByaXZhdGUgdHJhbnNmZXJTZXJ2aWNlOiBUcmFuc2ZlclNlcnZpY2UsIHByaXZhdGUgbG9naW5jaGVja1NlcnZpY2U6IExvZ2luY2hlY2tTZXJ2aWNlLCBcclxuICBcdHByaXZhdGUgdmNSZWY6IFZpZXdDb250YWluZXJSZWYsIHByaXZhdGUgbW9kYWw6IE1vZGFsRGlhbG9nU2VydmljZSkgeyB9XHJcblxyXG4gIEBWaWV3Q2hpbGQoXCJlcnJvck1lc3NhZ2VcIiwgeyBzdGF0aWM6IHRydWUgfSkgZW06IEVsZW1lbnRSZWY7XHJcbiAgZmllbGQ7XHJcbiAgdXNlcklkO1xyXG4gIHVzZXJFbWFpbDtcclxuICBwYXNzd29yZDtcclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgXHR0aGlzLmZpZWxkID0gdGhpcy50cmFuc2ZlclNlcnZpY2UuZ2V0RGF0YSgpO1xyXG4gIFx0dGhpcy51c2VySWQgPSB0aGlzLmxvZ2luY2hlY2tTZXJ2aWNlLmdldFVzZXIoKTtcclxuICBcdGZpcmViYXNlLmdldEN1cnJlbnRVc2VyKCkudGhlbigodXNlcikgPT4ge1xyXG4gIFx0XHR0aGlzLnVzZXJFbWFpbCA9IHVzZXIuZW1haWw7XHJcbiAgXHR9KVxyXG4gIH1cclxuXHJcbiAgY2xvc2UocmVzKSB7XHJcbiAgXHRsZXQgZXJyb3JNZXNzYWdlID0gPExhYmVsPiB0aGlzLmVtLm5hdGl2ZUVsZW1lbnQ7XHJcblx0ZXJyb3JNZXNzYWdlLnN0eWxlLnZpc2liaWxpdHkgPSAnY29sbGFwc2UnO1xyXG5cdHRoaXMucGFzc3dvcmQgPSAnJztcclxuICAgIHRoaXMucGFyYW1zLmNsb3NlQ2FsbGJhY2socmVzKTtcclxuICB9XHJcblxyXG4gIHN1Ym1pdChwYXNzd29yZCkge1xyXG4gIFx0ZmlyZWJhc2UucmVhdXRoZW50aWNhdGUoe1xyXG5cdCAgICB0eXBlOiBmaXJlYmFzZS5Mb2dpblR5cGUuUEFTU1dPUkQsIC8vIG9yIEdPT0dMRSAvIEZBQ0VCT09LXHJcblx0ICAgIC8vIHRoaXMgaXMgb25seSByZXF1aXJlZCBpbiB0eXBlID09IFBBU1NXT1JEXHJcblx0ICAgIHBhc3N3b3JkT3B0aW9uczoge1xyXG5cdCAgICAgIGVtYWlsOiB0aGlzLnVzZXJFbWFpbCxcclxuXHQgICAgICBwYXNzd29yZDogdGhpcy5wYXNzd29yZFxyXG5cdCAgICB9XHJcblx0ICB9KS50aGVuKFxyXG5cdCAgICAgIChyZXN1bHQpID0+IHtcclxuXHQgICAgICAgIC8vIHlvdSBjYW4gbm93IHNhZmVseSBkZWxldGUgdGhlIGFjY291bnQgLyBjaGFuZ2UgdGhlIHBhc3N3b3JkLCBldGNcclxuXHQgICAgICAgIGxldCBvcHRpb25zID0ge1xyXG5cdFx0ICAgICAgICBjb250ZXh0OiB7fSxcclxuXHRcdCAgICAgICAgZnVsbHNjcmVlbjogdHJ1ZSxcclxuXHRcdCAgICAgICAgdmlld0NvbnRhaW5lclJlZjogdGhpcy52Y1JlZlxyXG5cdFx0ICAgICAgICAvLyBhbmltYXRlZDogdHJ1ZSxcclxuXHRcdCAgICAgICAgLy8gdHJhbnNpdGlvbjogeyBuYW1lOiBcInNsaWRlVG9wXCIgfVxyXG5cdFx0ICAgIH07XHJcblx0XHQgICAgbGV0IGVycm9yTWVzc2FnZSA9IDxMYWJlbD4gdGhpcy5lbS5uYXRpdmVFbGVtZW50O1xyXG5cdCAgICAgICAgZXJyb3JNZXNzYWdlLnN0eWxlLnZpc2liaWxpdHkgPSAnY29sbGFwc2UnO1xyXG5cdFx0ICAgIHRoaXMudHJhbnNmZXJTZXJ2aWNlLnNldERhdGEodGhpcy5maWVsZCk7XHJcblx0XHQgICAgdGhpcy5wYXNzd29yZCA9ICcnO1xyXG5cdCAgICBcdHRoaXMubW9kYWwuc2hvd01vZGFsKFNldHRpbmdzZm9ybUNvbXBvbmVudCwgb3B0aW9ucykudGhlbihyZXMgPT4ge1xyXG5cdFx0ICAgIFx0aWYocmVzID09ICd1cGRhdGUnKSB7XHJcblx0XHQgICAgXHRcdHRoaXMuY2xvc2UoJ3VwZGF0ZScpO1xyXG5cdFx0ICAgIFx0fVxyXG5cdFx0ICAgIH0pO1xyXG5cdCAgICAgIH0sXHJcblx0ICAgICAgKGVycm9yKSA9PiB7XHJcblx0ICAgICAgICBsZXQgZXJyb3JNZXNzYWdlID0gPExhYmVsPiB0aGlzLmVtLm5hdGl2ZUVsZW1lbnQ7XHJcblx0ICAgICAgICBlcnJvck1lc3NhZ2Uuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcclxuXHQgICAgICB9XHJcblx0ICApO1xyXG4gIH1cclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLyogQWRkIG1vYmlsZSBzdHlsZXMgZm9yIHRoZSBjb21wb25lbnQgaGVyZS4gICovXFxuXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPCEtLSA8YXBwLW5hdmlnYXRpb24+PC9hcHAtbmF2aWdhdGlvbj4gLS0+XFxyXFxuPFN0YWNrTGF5b3V0PlxcclxcbiAgPExhYmVsIHRleHQ9XFxcInNlYXJjaCB3b3Jrc1xcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiPjwvTGFiZWw+XFxyXFxuICA8TGFiZWwgdGV4dD1cXFwiVGhpcyBpcyBhIG1pZ3JhdGVkIGNvbXBvbmVudFxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiPjwvTGFiZWw+XFxyXFxuICA8TGFiZWwgdGV4dD1cXFwiVXBkYXRlIGl0IHRvIHByb3ZpZGUgdGhlIFVJIGVsZW1lbnRzIHJlcXVpcmVkIGluIHlvdXIgbW9iaWxlIGFwcFxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiPjwvTGFiZWw+XFxyXFxuPC9TdGFja0xheW91dD5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1zZWFyY2gnLFxuICB0ZW1wbGF0ZVVybDogJy4vc2VhcmNoLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc2VhcmNoLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTZWFyY2hDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi8qXFxyXFxuQWRkIHlvdXIgTmF0aXZlU2NyaXB0IHNwZWNpZmljIHN0eWxlcyBoZXJlLlxcclxcblRvIGxlYXJuIG1vcmUgYWJvdXQgc3R5bGluZyBpbiBOYXRpdmVTY3JpcHQgc2VlOlxcclxcbmh0dHBzOi8vZG9jcy5uYXRpdmVzY3JpcHQub3JnL2FuZ3VsYXIvdWkvc3R5bGluZ1xcclxcbiovXFxyXFxuXFxyXFxuI0hlYWRlciB7XFxyXFxuICAgIGNvbG9yOmJsYWNrO1xcclxcbiAgICBmb250LXNpemU6IDI0O1xcclxcbiAgICBmb250LWZhbWlseTogXFxcIlNlZ29lIFVJXFxcIixBcmlhbCxzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4jbGlzdFZpZXcge1xcclxcblxcdG1hcmdpbi1ib3R0b206IDIwO1xcclxcbn1cXHJcXG5cXHJcXG4udXBkYXRlIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIGNvbG9yOiAjYWMwMGU2O1xcclxcbiAgICBib3JkZXItd2lkdGg6IDE7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogI2FjMDBlNjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmbG9hdDogY2VudGVyO1xcclxcbiAgICBtYXJnaW46IGF1dG87IFxcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICBmb250LWZhbWlseTogXFxcIlNlZ29lIFVJXFxcIixBcmlhbCxzYW5zLXNlcmlmO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxNTtcXHJcXG4gICAgd2lkdGg6IDIwMDtcXHJcXG4gICAgaGVpZ2h0OiA0MDtcXHJcXG59XFxyXFxuLnVwZGF0ZTpoaWdobGlnaHRlZCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWU2ZmY7XFxyXFxufVxcclxcbi5wYXltZW50cyB7XFxyXFxuXFx0Y29sb3I6IGJsYWNrO1xcclxcblxcdG1hcmdpbi10b3A6IDEyO1xcclxcblxcdG1hcmdpbi1ib3R0b206IDEyO1xcclxcblxcdG1hcmdpbi1sZWZ0OiAxODtcXHJcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gICAgZm9udC1zaXplOiAxNTtcXHJcXG59XFxyXFxuLmxvZ291dCB7XFxyXFxuXFx0Y29sb3I6ICNhYzAwZTY7XFxyXFxuXFx0bWFyZ2luLXRvcDogMTI7XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTogMTI7XFxyXFxuXFx0bWFyZ2luLWxlZnQ6IDE4O1xcclxcblxcdGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTU7XFxyXFxufVxcclxcblxcclxcbi5idG4tbGlzdC12aWV3IHtcXHJcXG5cXHRtYXJnaW4tdG9wOiAzNjtcXHJcXG5cXHRoZWlnaHQ6IDEwMDtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW0tbGlzdC12aWV3IHtcXHJcXG5cXHRoZWlnaHQ6IDMwMDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2ZpbGUtcGljdHVyZSB7XFxyXFxuXFx0aGVpZ2h0OiAxMDA7XFxyXFxuXFx0d2lkdGg6IDEwMDtcXHJcXG5cXHRtYXJnaW4tdG9wOiAxMDtcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiA4O1xcclxcblxcdC8qYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsqL1xcclxcbn1cXHJcXG5cXHJcXG4uaW1nLXJvdW5kZWQge1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXItbGFiZWwge1xcclxcblxcdG1hcmdpbi1ib3R0b206IDU7XFxyXFxuXFx0Zm9udC1zaXplOiAxNTtcXHJcXG5cXHRjb2xvcjogIzQyODVmNDtcXHJcXG59XFxyXFxuXFxyXFxuLmJvbGQge1xcclxcblxcdGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxufVxcclxcblxcclxcbi5hY3Rpdml0eS1pbmRpY2F0b3Ige1xcclxcbiAgY29sb3I6ICNhYzAwZTY7XFxyXFxuICBtYXJnaW46IDI1JTtcXHJcXG59XFxyXFxuXFxyXFxuLnZhbHVlLWxhYmVsIHtcXHJcXG5cXHRtYXJnaW4tbGVmdDogMTg7XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTogMTA7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgZm9udC1zaXplOiAxODtcXHJcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG59XFxyXFxuLnRpdGxlLWxhYmVsIHtcXHJcXG5cXHRtYXJnaW4tdG9wOiAxNjtcXHJcXG5cXHRtYXJnaW4tbGVmdDogMTg7XFxyXFxuXFx0Y29sb3I6ICM2OTY5Njk7XFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxufVxcclxcblxcclxcbi5zdGFjay1sYXlvdXR7XFxyXFxuICAgIGhlaWdodDoxMDAlXFxyXFxufVxcclxcbi5hY3Rpdml0eS1pbmRpY2F0b3J7XFxyXFxuICAgIGhlaWdodDogNTAlO1xcclxcbn1cXHJcXG5MaXN0VmlldyB7XFxyXFxuICAgIHNlcGFyYXRvci1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxufVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjwhLS0gPGFwcC1uYXZpZ2F0aW9uPjwvYXBwLW5hdmlnYXRpb24+IC0tPlxcclxcbjxTdGFja2xheW91dCBoZWlnaHQ9XFxcIjEwMCVcXFwiPlxcclxcbiAgICA8U3RhY2tMYXlvdXQgI3NldHRpbmdzQ29udGFpbmVyPlxcclxcbiAgICAgIDwhLS0gPExhYmVsIGlkPSBcXFwiSGVhZGVyXFxcIiB0ZXh0PVxcXCJBY2NvdW50IFNldHRpbmdzXFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCI+PC9MYWJlbD4gLS0+XFxyXFxuICAgICAgPEltYWdlIHNyYz1cXFwie3sgcHJvZmlsZSB9fVxcXCIgc3RyZXRjaD1cXFwiYXNwZWN0Rml0XFxcIiBjbGFzcz1cXFwiaW1nLXJvdW5kZWQgcHJvZmlsZS1waWN0dXJlXFxcIiAodGFwKT1cXFwidXBsb2FkUGZwKClcXFwiPjwvSW1hZ2U+XFxyXFxuICAgICAgPExhYmVsIHRleHQ9XFxcIkNoYW5nZSBQaG90b1xcXCIgY2xhc3M9XFxcImhlYWRlci1sYWJlbCBib2xkXFxcIiAodGFwKT1cXFwidXBsb2FkUGZwKClcXFwiPjwvTGFiZWw+XFxyXFxuXFxyXFxuICAgICAgPExpc3RWaWV3IFtpdGVtc109XFxcImZpZWxkc1xcXCIgI2xpc3RWaWV3IGlkPVxcXCJsaXN0Vmlld1xcXCIgKGl0ZW1UYXApPVxcXCJzaG93TW9kYWwoJGV2ZW50KVxcXCIgY2xhc3M9XFxcIml0ZW0tbGlzdC12aWV3XFxcIj5cXHJcXG4gICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtaXRlbT1cXFwiaXRlbVxcXCIgbGV0LWk9XFxcImluZGV4XFxcIiBsZXQtb2RkPVxcXCJvZGRcXFwiIGxldC1ldmVuPVxcXCJldmVuXFxcIj5cXHJcXG4gICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJzdGFjay1sYXlvdXRcXFwiPlxcclxcbiAgICAgICAgICAgIDxMYWJlbCB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgY2xhc3M9XFxcInRpdGxlLWxhYmVsXFxcIiBbdGV4dF09XFxcIml0ZW0ubGFiZWxcXFwiPjwvTGFiZWw+XFxyXFxuICAgICAgICAgICAgPExhYmVsIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiBjbGFzcz1cXFwidmFsdWUtbGFiZWxcXFwiIFt0ZXh0XT1cXFwiaXRlbS52YWx1ZVxcXCI+PC9MYWJlbD5cXHJcXG4gICAgICAgICAgPC9TdGFja0xheW91dD5cXHJcXG4gICAgICAgIDwvbmctdGVtcGxhdGU+XFxyXFxuICAgICAgPC9MaXN0Vmlldz5cXHJcXG4gICAgICA8IS0tIDxSYWREYXRhRm9ybSB0a0V4YW1wbGVUaXRsZSB0a1RvZ2dsZU5hdkJ1dHRvbiBbc291cmNlXT1cXFwicGVyc29uXFxcIj48L1JhZERhdGFGb3JtPiAgIC0tPlxcclxcbiAgICAgIDwhLS0gPEJ1dHRvbiBjbGFzcz1cXFwiVXBkYXRlXFxcIiAgdGV4dD1cXFwiVXBkYXRlIFNldHRpbmdzXFxcIj48L0J1dHRvbj4gLS0+XFxyXFxuXFxyXFxuICAgICAgPExpc3RWaWV3IFtpdGVtc109XFxcImJ1dHRvbnNcXFwiICNsaXN0Vmlld1NlY29uZCAoaXRlbVRhcCk9XFxcInJvdXRlKCRldmVudClcXFwiIChzZXR1cEl0ZW1WaWV3KT1cXFwic2V0dXBJdGVtVmlldygkZXZlbnQpXFxcIiBjbGFzcz1cXFwiYnRuLWxpc3Qtdmlld1xcXCI+XFxyXFxuICAgICAgICA8bmctdGVtcGxhdGUgbGV0LWl0ZW09XFxcIml0ZW1cXFwiIGxldC1pPVxcXCJpbmRleFxcXCIgbGV0LW9kZD1cXFwib2RkXFxcIiBsZXQtZXZlbj1cXFwiZXZlblxcXCIgbGV0LXBheW1lbnRzPVxcXCJwYXltZW50c1xcXCIgbGV0LWxvZ291dD1cXFwibG9nb3V0XFxcIj5cXHJcXG4gICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJzdGFjay1sYXlvdXRcXFwiPlxcclxcbiAgICAgICAgICAgIDxMYWJlbCB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgW3RleHRdPVxcXCJpdGVtXFxcIiBbY2xhc3MucGF5bWVudHNdPVxcXCJwYXltZW50c1xcXCIgW2NsYXNzLmxvZ291dF09XFxcImxvZ291dFxcXCI+PC9MYWJlbD5cXHJcXG4gICAgICAgICAgPC9TdGFja0xheW91dD5cXHJcXG4gICAgICAgIDwvbmctdGVtcGxhdGU+XFxyXFxuICAgICAgPC9MaXN0Vmlldz5cXHJcXG48IS0tICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwicGF5bWVudHMtY29udGFpbmVyXFxcIiAodGFwKT1cXFwidG9QYXltZW50cygpXFxcIj5cXHJcXG4gICAgICAgIDxMYWJlbCBjbGFzcz1cXFwicGF5bWVudHNcXFwiIHRleHQ9XFxcIlBheW1lbnRzXFxcIj48L0xhYmVsPlxcclxcbiAgICAgIDwvU3RhY2tMYXlvdXQ+XFxyXFxuICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJsb2dvdXQtY29udGFpbmVyXFxcIiAodGFwKT1cXFwibG9nT3V0KClcXFwiPlxcclxcbiAgICAgICAgPExhYmVsIGNsYXNzPVxcXCJsb2dvdXRcXFwiIHRleHQ9XFxcIkxvZyBvdXRcXFwiPjwvTGFiZWw+XFxyXFxuICAgICAgPC9TdGFja0xheW91dD4gLS0+XFxyXFxuICAgIDwvU3RhY2tMYXlvdXQ+XFxyXFxuXFxyXFxuPEFjdGl2aXR5SW5kaWNhdG9yICNhY3Rpdml0eUluZGljYXRvciBidXN5PVxcXCJ0cnVlXFxcIiB3aWR0aD1cXFwiNDBcXFwiICBjbGFzcz1cXFwiYWN0aXZpdHktaW5kaWNhdG9yXFxcIj5cXHJcXG4gIDwvQWN0aXZpdHlJbmRpY2F0b3I+XFxyXFxuPC9TdGFja2xheW91dD5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuLy8gaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2VcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IExvZ2luY2hlY2tTZXJ2aWNlIH0gZnJvbSAnLi4vbG9naW5jaGVjay5zZXJ2aWNlLnRucyc7XHJcbmltcG9ydCAqIGFzIGZpcmViYXNlIGZyb20gJ25hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2UnO1xyXG5pbXBvcnQgeyBtZXNzYWdpbmcgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZS9tZXNzYWdpbmdcIjtcclxuaW1wb3J0IHsgbG9nb3V0IGFzIGZiTG9nb3V0IH0gZnJvbSAnbmF0aXZlc2NyaXB0LWZhY2Vib29rJztcclxuaW1wb3J0ICogYXMgaW1hZ2VwaWNrZXIgZnJvbSBcIm5hdGl2ZXNjcmlwdC1pbWFnZXBpY2tlclwiO1xyXG5pbXBvcnQgKiBhcyBmcyBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9maWxlLXN5c3RlbVwiO1xyXG5pbXBvcnQgeyBpc0FuZHJvaWQsIGlzSU9TLCBkZXZpY2UsIHNjcmVlbiB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtXCI7XHJcbmltcG9ydCAqIGFzIGJnaHR0cCBmcm9tICduYXRpdmVzY3JpcHQtYmFja2dyb3VuZC1odHRwJztcclxuaW1wb3J0IHsgSW1hZ2VDcm9wcGVyIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWltYWdlY3JvcHBlcic7XHJcbmltcG9ydCAqIGFzIGltYWdlU291cmNlIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2ltYWdlLXNvdXJjZVwiO1xyXG5pbXBvcnQgeyBBY3Rpdml0eUluZGljYXRvciB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvYWN0aXZpdHktaW5kaWNhdG9yJztcclxuaW1wb3J0IHsgU3RhY2tMYXlvdXQgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvc3RhY2stbGF5b3V0JztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZUFycmF5IH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUtYXJyYXknO1xyXG5pbXBvcnQgeyBUcmFuc2ZlclNlcnZpY2UgfSBmcm9tICcuLi9kYXRhdHJhbnNmZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IHBvc3QgfSBmcm9tICdzZWxlbml1bS13ZWJkcml2ZXIvaHR0cCc7XHJcbmltcG9ydCB7IE1vZGFsRGlhbG9nUGFyYW1zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2RpcmVjdGl2ZXMvZGlhbG9nc1wiO1xyXG5pbXBvcnQgeyBNb2RhbERpYWxvZ1NlcnZpY2UgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZGlyZWN0aXZlcy9kaWFsb2dzXCI7XHJcbmltcG9ydCB7IFNldHRpbmdzZm9ybUNvbXBvbmVudCB9IGZyb20gJy4uL3NldHRpbmdzZm9ybS9zZXR0aW5nc2Zvcm0uY29tcG9uZW50JztcclxuaW1wb3J0IHsgUmVhdXRoQ29tcG9uZW50IH0gZnJvbSAnLi4vcmVhdXRoL3JlYXV0aC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTZXR1cEl0ZW1WaWV3QXJncyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9kaXJlY3RpdmVzXCI7XHJcblxyXG5cclxuY2xhc3MgTGFiZWwge1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIGxhYmVsOiBTdHJpbmcsIHB1YmxpYyB2YWx1ZTogc3RyaW5nLCBwdWJsaWMgZmlyc3ROYW1lOiBzdHJpbmcsIHB1YmxpYyBsYXN0TmFtZTogc3RyaW5nKSB7IH1cclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHNlbGVjdG9yOiBcImFwcC1zZXR0aW5nc1wiLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9zZXR0aW5ncy5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vc2V0dGluZ3MuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgU2V0dGluZ3NDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSBwYWdlOiBQYWdlLCBwcml2YXRlIGxvZ2luY2hlY2tTZXJ2aWNlOiBMb2dpbmNoZWNrU2VydmljZSwgcHJpdmF0ZSB0cmFuc2ZlclNlcnZpY2U6IFRyYW5zZmVyU2VydmljZSxcclxuICBcdHByaXZhdGUgdmNSZWY6IFZpZXdDb250YWluZXJSZWYsIHByaXZhdGUgbW9kYWw6IE1vZGFsRGlhbG9nU2VydmljZSkgeyB9XHJcblxyXG4gIEBWaWV3Q2hpbGQoXCJhY3Rpdml0eUluZGljYXRvclwiLCB7IHN0YXRpYzogdHJ1ZSB9KSBhaTogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKFwic2V0dGluZ3NDb250YWluZXJcIiwgeyBzdGF0aWM6IHRydWUgfSkgc2M6IEVsZW1lbnRSZWY7XHJcblxyXG4gIHByb2ZpbGUgPSBcIn4vaW1nL3NhbXBsZV9wcm9maWxlLnBuZ1wiO1xyXG4gIHVzZXJJZDtcclxuICBmaWVsZHM7XHJcbiAgaW1hZ2VDcm9wcGVyOiBJbWFnZUNyb3BwZXI7XHJcbiAgaW1hZ2VTb3VyY2U6IGltYWdlU291cmNlLkltYWdlU291cmNlO1xyXG4gIGJ1dHRvbnM7XHJcbiAgcGF5bWVudExpc3Q7XHJcbiAgbG9nb3V0TGlzdDtcclxuICB1c2VyO1xyXG4gIHRva2VuO1xyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuXHR0aGlzLmltYWdlQ3JvcHBlciA9IG5ldyBJbWFnZUNyb3BwZXIoKTtcclxuXHR0aGlzLmxvYWRWaWV3cygpO1xyXG5cclxuXHRcdGxldCBhY3Rpdml0eUluZGljYXRvciA9IDxBY3Rpdml0eUluZGljYXRvcj4gdGhpcy5haS5uYXRpdmVFbGVtZW50O1xyXG5cdCAgICBhY3Rpdml0eUluZGljYXRvci5zdHlsZS52aXNpYmlsaXR5ID0gJ2NvbGxhcHNlJ1xyXG5cdH1cclxuXHJcblx0bG9hZFZpZXdzKCl7XHJcblx0XHR0aGlzLnBheW1lbnRMaXN0ID0gbmV3IE9ic2VydmFibGVBcnJheTxTdHJpbmc+KCk7XHJcblx0XHR0aGlzLnBheW1lbnRMaXN0LnB1c2goJ1BheW1lbnQgbWV0aG9kcycpO1xyXG5cdFx0dGhpcy5sb2dvdXRMaXN0ID0gbmV3IE9ic2VydmFibGVBcnJheTxTdHJpbmc+KCk7XHJcblx0XHR0aGlzLmxvZ291dExpc3QucHVzaCgnTG9nIG91dCcpO1xyXG5cdFx0dGhpcy5idXR0b25zID0gbmV3IE9ic2VydmFibGVBcnJheTxTdHJpbmc+KCk7XHJcblx0XHR0aGlzLmJ1dHRvbnMucHVzaCgnUGF5bWVudCBtZXRob2RzJyk7XHJcblx0XHR0aGlzLmJ1dHRvbnMucHVzaCgnTG9nIG91dCcpO1xyXG5cclxuXHRcdHRoaXMudXNlcklkID0gdGhpcy5sb2dpbmNoZWNrU2VydmljZS5nZXRVc2VyKCk7XHJcblx0XHRjb25zdCB1c2VyRG9jdW1lbnQgPSBmaXJlYmFzZS5maXJlc3RvcmUuY29sbGVjdGlvbigndXNlcnMnKS5kb2ModGhpcy51c2VySWQpO1xyXG5cdFx0dGhpcy5maWVsZHMgPSBuZXcgT2JzZXJ2YWJsZUFycmF5PExhYmVsPigpO1xyXG5cdFx0dGhpcy51cGRhdGVMaXN0VmlldygpO1xyXG5cdFx0ZmlyZWJhc2UuZ2V0Q3VycmVudFVzZXIoKS50aGVuKCh1c2VyKSA9PiB7XHJcblx0XHRcdHRoaXMudXNlciA9IHVzZXI7XHJcblx0XHRcdGlmKHVzZXIucGhvdG9VUkwgIT0gbnVsbCkge1xyXG5cdFx0XHRcdHRoaXMucHJvZmlsZSA9IHVzZXIucGhvdG9VUkw7XHJcblx0XHRcdFx0aWYodXNlci5waG90b1VSTC5zdWJzdHJpbmcoMCwgMjcpID09ICdodHRwczovL2dyYXBoLmZhY2Vib29rLmNvbS8nKVxyXG5cdFx0XHRcdFx0dGhpcy5wcm9maWxlICs9ICc/aGVpZ2h0PTMwMCc7XHJcblx0XHRcdH1cclxuXHRcdH0pXHJcblx0fVxyXG5cclxuXHRzZXR1cEl0ZW1WaWV3KGFyZ3M6IFNldHVwSXRlbVZpZXdBcmdzKSB7XHJcblx0XHRhcmdzLnZpZXcuY29udGV4dC5wYXltZW50cyA9IChhcmdzLmluZGV4ID09IDApO1xyXG5cdFx0YXJncy52aWV3LmNvbnRleHQubG9nb3V0ID0gKGFyZ3MuaW5kZXggPT0gMSk7XHJcblx0XHRhcmdzLnZpZXcuY29udGV4dC5ldmVuID0gKGFyZ3MuaW5kZXggJSAyID09PSAwKTtcclxuXHRcdGFyZ3Mudmlldy5jb250ZXh0Lm9kZCA9IChhcmdzLmluZGV4ICUgMiA9PT0gMSk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVMaXN0Vmlldygpe1xyXG5cdFx0dGhpcy5maWVsZHMuc3BsaWNlKDApO1xyXG5cdFx0Y29uc3QgdXNlckRvY3VtZW50ID0gZmlyZWJhc2UuZmlyZXN0b3JlLmNvbGxlY3Rpb24oJ3VzZXJzJykuZG9jKHRoaXMudXNlcklkKTtcclxuXHRcdHVzZXJEb2N1bWVudC5nZXQoKS50aGVuKGRvYyA9PiB7XHJcblx0XHRcdGxldCB2YWxzID0gZG9jLmRhdGEoKVxyXG5cdFx0XHQvLyBjb25zb2xlLmxvZyhcImZpZWxkc1wiLCB2YWxzKVxyXG5cdFx0XHR0aGlzLmZpZWxkcy5wdXNoKG5ldyBMYWJlbChcIk5hbWVcIiwgdmFscy5maXJzdF9uYW1lICsgXCIgXCIgKyB2YWxzLmxhc3RfbmFtZSwgdmFscy5maXJzdF9uYW1lLCB2YWxzLmxhc3RfbmFtZSkpO1xyXG5cdFx0XHR0aGlzLmZpZWxkcy5wdXNoKG5ldyBMYWJlbChcIkVtYWlsXCIsIHZhbHMuZW1haWwsIHZhbHMuZmlyc3RfbmFtZSwgdmFscy5sYXN0X25hbWUpKTtcclxuXHRcdFx0aWYodmFscy5waG9uZV9udW1iZXIgPT0gXCJcIiB8fCB2YWxzLnBob25lX251bWJlciA9PSBudWxsKXtcclxuXHRcdFx0XHR0aGlzLmZpZWxkcy5wdXNoKG5ldyBMYWJlbChcIlBob25lIE51bWJlclwiLCBcIk5vbmVcIiwgdmFscy5maXJzdF9uYW1lLCB2YWxzLmxhc3RfbmFtZSkpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2V7XHJcblx0XHRcdFx0dGhpcy5maWVsZHMucHVzaChuZXcgTGFiZWwoXCJQaG9uZSBOdW1iZXJcIiwgdmFscy5waG9uZV9udW1iZXIsIHZhbHMuZmlyc3RfbmFtZSwgdmFscy5sYXN0X25hbWUpKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZih0aGlzLnVzZXIucHJvdmlkZXJzWzFdLmlkID09ICdwYXNzd29yZCcpIHtcclxuXHRcdFx0XHR0aGlzLmZpZWxkcy5wdXNoKG5ldyBMYWJlbChcIlBhc3N3b3JkXCIsIFwiKioqKioqKipcIiwgdmFscy5maXJzdF9uYW1lLCB2YWxzLmxhc3RfbmFtZSkpXHJcblx0XHRcdH1cclxuXHRcdH0pXHJcblx0fVxyXG5cdHRvUGF5bWVudHMoKXtcclxuXHRcdHRoaXMucm91dGVyLm5hdmlnYXRlKFsncGF5bWVudHMnXSk7XHJcblx0fVxyXG5cclxuXHRzaG93TW9kYWwoYXJncykge1xyXG5cdFx0bGV0IGxhYmVsID0gdGhpcy5maWVsZHMuX2FycmF5W2FyZ3MuaW5kZXhdXHJcblx0XHR0aGlzLnRyYW5zZmVyU2VydmljZS5zZXREYXRhKGxhYmVsKTtcclxuXHRcdGxldCBvcHRpb25zID0ge1xyXG5cdCAgICAgICAgY29udGV4dDoge30sXHJcblx0ICAgICAgICBmdWxsc2NyZWVuOiB0cnVlLFxyXG5cdCAgICAgICAgdmlld0NvbnRhaW5lclJlZjogdGhpcy52Y1JlZlxyXG5cdCAgICAgICAgLy8gYW5pbWF0ZWQ6IHRydWUsXHJcblx0ICAgICAgICAvLyB0cmFuc2l0aW9uOiB7IG5hbWU6IFwic2xpZGVUb3BcIiB9XHJcblx0ICAgIH07XHJcblx0ICAgIGlmKGFyZ3MuaW5kZXggPT0gMykge1xyXG5cdCAgICBcdHRoaXMubW9kYWwuc2hvd01vZGFsKFJlYXV0aENvbXBvbmVudCwgb3B0aW9ucykudGhlbihyZXMgPT4ge1xyXG5cdFx0ICAgIFx0aWYocmVzID09ICd1cGRhdGUnKSB7XHJcblx0XHQgICAgXHRcdHRoaXMudXBkYXRlTGlzdFZpZXcoKTtcclxuXHRcdCAgICBcdH1cclxuXHRcdCAgICB9KTtcclxuXHQgICAgfVxyXG5cdCAgICBlbHNlIHtcclxuXHRcdCAgICB0aGlzLm1vZGFsLnNob3dNb2RhbChTZXR0aW5nc2Zvcm1Db21wb25lbnQsIG9wdGlvbnMpLnRoZW4ocmVzID0+IHtcclxuXHRcdCAgICBcdGlmKHJlcyA9PSAndXBkYXRlJykge1xyXG5cdFx0ICAgIFx0XHR0aGlzLnVwZGF0ZUxpc3RWaWV3KCk7XHJcblx0XHQgICAgXHR9XHJcblx0XHQgICAgfSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRyb3V0ZShhcmdzKSB7XHJcblx0XHRpZihhcmdzLmluZGV4ID09IDApIHtcclxuXHRcdFx0dGhpcy50b1BheW1lbnRzKCk7XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmKGFyZ3MuaW5kZXggPT0gMSkge1xyXG5cdFx0XHR0aGlzLmxvZ091dCgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0b25JdGVtVGFwKGFyZ3MpIHtcclxuXHRcdGxldCBsYWJlbCA9IHRoaXMuZmllbGRzLl9hcnJheVthcmdzLmluZGV4XVxyXG5cdFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUoWydzZXR0aW5nc2Zvcm0nXSk7XHJcblx0XHR0aGlzLnRyYW5zZmVyU2VydmljZS5zZXREYXRhKGxhYmVsKTtcclxuXHQgIH1cclxuXHJcblx0YXN5bmMgbG9nT3V0KCkge1xyXG5cdFx0dmFyIGFjdGl2aXR5SW5kaWNhdG9yID0gPEFjdGl2aXR5SW5kaWNhdG9yPiB0aGlzLmFpLm5hdGl2ZUVsZW1lbnQ7XHJcblx0XHRhY3Rpdml0eUluZGljYXRvci5idXN5ID0gdHJ1ZTtcclxuXHRcdGFjdGl2aXR5SW5kaWNhdG9yLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XHJcblx0XHR2YXIgc2V0dGluZ3NDb250YWluZXIgPSA8U3RhY2tMYXlvdXQ+IHRoaXMuc2MubmF0aXZlRWxlbWVudDtcclxuXHRcdHNldHRpbmdzQ29udGFpbmVyLnN0eWxlLnZpc2liaWxpdHkgPSAnY29sbGFwc2UnO1xyXG5cclxuXHRcdGNvbnN0IHRva2VuUHJvbWlzZSA9IGF3YWl0IG1lc3NhZ2luZy5nZXRDdXJyZW50UHVzaFRva2VuKCkudGhlbih0b2tlbiA9PiB7XHJcblx0XHRcdHRoaXMudG9rZW4gPSB0b2tlblxyXG5cdFx0XHRyZXR1cm4gdG9rZW47XHJcblx0XHR9KTtcclxuXHRcdGxldCB1c2VyRG9jID0gZmlyZWJhc2UuZmlyZXN0b3JlLmNvbGxlY3Rpb24oJ3VzZXJzJykuZG9jKHRoaXMudXNlcklkKTtcclxuXHRcdFxyXG5cdFx0dXNlckRvYy5nZXQoKS50aGVuKGFzeW5jIChkb2MpID0+IHtcclxuXHRcdFx0bGV0IGluZGV4ID0gZG9jLmRhdGEoKS50b2tlbnMuaW5kZXhPZih0aGlzLnRva2VuKTtcclxuXHRcdFx0aWYoaW5kZXggPiAtMSkge1xyXG5cdFx0XHRcdGNvbnN0IG5ld1Rva2VucyA9IGRvYy5kYXRhKCkudG9rZW5zO1xyXG5cdFx0XHRcdG5ld1Rva2Vucy5zcGxpY2UoaW5kZXgsIDEpO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKG5ld1Rva2VucylcclxuXHRcdFx0XHR1c2VyRG9jLnVwZGF0ZSh7dG9rZW5zOiBuZXdUb2tlbnN9KTtcclxuXHRcdFx0fVxyXG5cdFx0XHRjb25zdCBjaGF0UHJvbWlzZSA9IGF3YWl0IHRoaXMudXBkYXRlQ2hhdFRva2Vucyhkb2MuZGF0YSgpLmNoYXRzKTtcclxuXHRcdFx0ZmlyZWJhc2UubG9nb3V0KCk7XHJcblx0XHRcdGZiTG9nb3V0KCgpID0+IHtcclxuXHJcblx0XHRcdH0pO1xyXG5cdFx0XHR0aGlzLmxvZ2luY2hlY2tTZXJ2aWNlLmNsZWFySW5mbygpO1xyXG5cdFx0XHRhY3Rpdml0eUluZGljYXRvci5idXN5ID0gZmFsc2U7XHJcblx0XHRcdGFjdGl2aXR5SW5kaWNhdG9yLnN0eWxlLnZpc2liaWxpdHkgPSAnY29sbGFwc2UnO1xyXG5cdFx0XHRzZXR0aW5nc0NvbnRhaW5lci5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xyXG5cdFx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ3dlbGNvbWUnXSwge2NsZWFySGlzdG9yeTogdHJ1ZX0pO1xyXG5cdFx0fSlcclxuXHJcblx0fVxyXG5cclxuXHRhc3luYyB1cGRhdGVDaGF0VG9rZW5zKGNoYXRzKSB7XHJcblx0XHRsZXQgY2hhdENvbGxlY3Rpb24gPSBmaXJlYmFzZS5maXJlc3RvcmUuY29sbGVjdGlvbignY2hhdHMnKTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBjaGF0cy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRjb25zdCBjaGF0UHJvbWlzZSA9IGF3YWl0IGNoYXRDb2xsZWN0aW9uLmRvYyhjaGF0c1tpXSkuZ2V0KCkudGhlbihhc3luYyAoZG9jKSA9PiB7XHJcblx0XHRcdFx0bGV0IGluZGV4ID0gZG9jLmRhdGEoKS50b2tlbnMuaW5kZXhPZih0aGlzLnRva2VuKTtcclxuXHRcdFx0XHRpZihpbmRleCA+IC0xKSB7XHJcblx0XHRcdFx0XHRjb25zdCBuZXdUb2tlbnMgPSBkb2MuZGF0YSgpLnRva2VucztcclxuXHRcdFx0XHRcdG5ld1Rva2Vucy5zcGxpY2UoaW5kZXgsIDEpO1xyXG5cdFx0XHRcdFx0Y29uc3QgdXBkYXRlUHJvbWlzZSA9IGF3YWl0IGNoYXRDb2xsZWN0aW9uLmRvYyhjaGF0c1tpXSkudXBkYXRlKHt0b2tlbnM6IG5ld1Rva2Vuc30pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSlcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHVwbG9hZFBmcCgpIHtcclxuXHRcdHZhciBpbWFnZUNyb3BwZXIgPSBuZXcgSW1hZ2VDcm9wcGVyKCk7XHJcblx0XHRsZXQgY29udGV4dCA9IGltYWdlcGlja2VyLmNyZWF0ZSh7XHJcblx0XHQgICAgbW9kZTogXCJzaW5nbGVcIiAvLyB1c2UgXCJtdWx0aXBsZVwiIGZvciBtdWx0aXBsZSBzZWxlY3Rpb25cclxuXHRcdH0pO1xyXG5cdFx0Y29udGV4dFxyXG5cdCAgICAuYXV0aG9yaXplKClcclxuXHQgICAgLnRoZW4oZnVuY3Rpb24oKSB7XHJcblx0ICAgICAgICByZXR1cm4gY29udGV4dC5wcmVzZW50KCk7XHJcblx0ICAgIH0pXHJcblx0ICAgIC50aGVuKChzZWxlY3Rpb246IGFueSkgPT4ge1xyXG5cdCAgICBcdHNlbGVjdGlvbi5mb3JFYWNoKChzZWxlY3RlZCkgPT4ge1xyXG4gICAgICAgICAgICBcdGxldCBpbWdTb3VyY2UgPSBuZXcgaW1hZ2VTb3VyY2UuSW1hZ2VTb3VyY2UoKTtcclxuICAgICAgICAgICAgICAgIGltZ1NvdXJjZS5mcm9tQXNzZXQoc2VsZWN0ZWQpLnRoZW4oKHNvdXJjZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgXHR0aGlzLmltYWdlQ3JvcHBlclxyXG4gICAgICAgICAgICAgICAgICAgIC5zaG93KHNvdXJjZSwgeyB3aWR0aDogMzAwLCBoZWlnaHQ6IDMwMCB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGFyZ3MgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmRpcihhcmdzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFyZ3MuaW1hZ2UgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuY3JvcHBlZEltYWdlLmltYWdlU291cmNlID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBhcmdzLmltYWdlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZvbGRlciA9IGZzLmtub3duRm9sZGVycy50ZW1wKCk7XHJcblx0XHRcdFx0ICAgICAgICAgICAgdmFyIHBhdGggPSBmcy5wYXRoLmpvaW4oZm9sZGVyLnBhdGgsIFwicHJvZmlsZV9waWN0dXJlLnBuZ1wiKTtcclxuXHRcdFx0XHQgICAgICAgICAgICB2YXIgc2F2ZWQgPSBhcmdzLmltYWdlLnNhdmVUb0ZpbGUocGF0aCwncG5nJyk7XHJcblxyXG5cdFx0XHRcdCAgICAgICAgICAgIHZhciBhY3Rpdml0eUluZGljYXRvciA9IDxBY3Rpdml0eUluZGljYXRvcj4gdGhpcy5haS5uYXRpdmVFbGVtZW50O1xyXG5cdFx0XHRcdFx0XHRcdGFjdGl2aXR5SW5kaWNhdG9yLmJ1c3kgPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHRcdGFjdGl2aXR5SW5kaWNhdG9yLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XHJcbiAgICAgIFx0XHRcdFx0XHRcdHZhciBzZXR0aW5nc0NvbnRhaW5lciA9IDxTdGFja0xheW91dD4gdGhpcy5zYy5uYXRpdmVFbGVtZW50O1xyXG4gICAgICBcdFx0XHRcdFx0XHRzZXR0aW5nc0NvbnRhaW5lci5zdHlsZS52aXNpYmlsaXR5ID0gJ2NvbGxhcHNlJztcclxuXHJcblx0XHRcdFx0ICAgICAgICAgICAgZmlyZWJhc2Uuc3RvcmFnZS51cGxvYWRGaWxlKHtcclxuXHRcdFx0XHRcdFx0XHQgICAgLy8gdGhlIGZ1bGwgcGF0aCBvZiB0aGUgZmlsZSBpbiB5b3VyIEZpcmViYXNlIHN0b3JhZ2UgKGZvbGRlcnMgd2lsbCBiZSBjcmVhdGVkKVxyXG5cdFx0XHRcdFx0XHRcdCAgICByZW1vdGVGdWxsUGF0aDogJ3VzZXJzLycgKyB0aGlzLnVzZXJJZCArICcvdXBsb2Fkcy9wcm9maWxlX3BpY3R1cmUuanBnJyxcclxuXHRcdFx0XHRcdFx0XHQgICAgLy8gb3B0aW9uIDE6IGEgZmlsZS1zeXN0ZW0gbW9kdWxlIEZpbGUgb2JqZWN0XHJcblx0XHRcdFx0XHRcdFx0ICAgIGxvY2FsRmlsZTogZnMuRmlsZS5mcm9tUGF0aChwYXRoKSxcclxuXHRcdFx0XHRcdFx0XHQgICAgLy8gb3B0aW9uIDI6IGEgZnVsbCBmaWxlIHBhdGggKGlnbm9yZWQgaWYgJ2xvY2FsRmlsZScgaXMgc2V0KVxyXG5cdFx0XHRcdFx0XHRcdCAgICBsb2NhbEZ1bGxQYXRoOiBwYXRoLFxyXG5cdFx0XHRcdFx0XHRcdCAgICAvLyBnZXQgbm90aWZpZWQgb2YgZmlsZSB1cGxvYWQgcHJvZ3Jlc3NcclxuXHRcdFx0XHRcdFx0XHQgICAgb25Qcm9ncmVzczogKHN0YXR1cykgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdCAgICAgIGNvbnNvbGUubG9nKFwiVXBsb2FkZWQgZnJhY3Rpb246IFwiICsgc3RhdHVzLmZyYWN0aW9uQ29tcGxldGVkKTtcclxuXHRcdFx0XHRcdFx0XHQgICAgICBjb25zb2xlLmxvZyhcIlBlcmNlbnRhZ2UgY29tcGxldGU6IFwiICsgc3RhdHVzLnBlcmNlbnRhZ2VDb21wbGV0ZWQpO1xyXG5cdFx0XHRcdFx0XHRcdCAgICB9XHJcblx0XHRcdFx0XHRcdFx0ICB9KS50aGVuKFxyXG5cdFx0XHRcdFx0XHRcdCAgICAgICh1cGxvYWRlZEZpbGUpID0+IHtcclxuXHRcdFx0XHRcdFx0XHQgICAgICAgIGNvbnNvbGUubG9nKFwiRmlsZSB1cGxvYWRlZDogXCIgKyBKU09OLnN0cmluZ2lmeSh1cGxvYWRlZEZpbGUpKTtcclxuXHRcdFx0XHRcdFx0XHQgICAgICAgICAgXHRcdGZpcmViYXNlLnN0b3JhZ2UuZ2V0RG93bmxvYWRVcmwoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgIC8vIHRoZSBmdWxsIHBhdGggb2YgYW4gZXhpc3RpbmcgZmlsZSBpbiB5b3VyIEZpcmViYXNlIHN0b3JhZ2VcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgICByZW1vdGVGdWxsUGF0aDogJ3VzZXJzLycgKyB0aGlzLnVzZXJJZCArICcvdXBsb2Fkcy9wcm9maWxlX3BpY3R1cmUuanBnJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICB9KS50aGVuKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgICAgKHVybCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgICAgICBmaXJlYmFzZS51cGRhdGVQcm9maWxlKHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICAgcGhvdG9VUkw6IHVybFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgfSkudGhlbihcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICAgICAoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgICAgICAvLyBjYWxsZWQgd2hlbiB1cGRhdGUgcHJvZmlsZSB3YXMgc3VjY2Vzc2Z1bFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgICAgICAgYWN0aXZpdHlJbmRpY2F0b3IuYnVzeSA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzZXR0aW5nc0NvbnRhaW5lci5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhY3Rpdml0eUluZGljYXRvci5zdHlsZS52aXNpYmlsaXR5ID0gJ2NvbGxhcHNlJztcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICAgICAgIHRoaXMucHJvZmlsZSA9IHVybDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICAgICB9LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgICAgIChlcnJvck1lc3NhZ2UpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICAgICAgIGNvbnNvbGUubG9nKGVycm9yTWVzc2FnZSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgICAgfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgIGNvbnN0IHVzZXJEb2N1bWVudCA9IGZpcmViYXNlLmZpcmVzdG9yZS5jb2xsZWN0aW9uKCd1c2VycycpLmRvYyh0aGlzLnVzZXJJZCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICB1c2VyRG9jdW1lbnQudXBkYXRlKHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgIFx0cHJvZmlsZV9zb3VyY2U6IHVybFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgfSlcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgICAgIH0sXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICAgICBmdW5jdGlvbiAoZXJyb3IpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgICAgICAgY29uc29sZS5sb2coXCJFcnJvcjogXCIgKyBlcnJvcik7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICAgICB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICk7XHJcblx0XHRcdFx0XHRcdFx0ICAgICAgfSxcclxuXHRcdFx0XHRcdFx0XHQgICAgICAoZXJyb3IpID0+IHtcclxuXHRcdFx0XHRcdFx0XHQgICAgICAgIGNvbnNvbGUubG9nKFwiRmlsZSB1cGxvYWQgZXJyb3I6IFwiICsgZXJyb3IpO1xyXG5cdFx0XHRcdFx0XHRcdCAgICAgIH1cclxuXHRcdFx0XHRcdFx0XHRcdCkuY2F0Y2goKGVycikgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdCAgICAgICAgLy8gcHJvY2VzcyBlcnJvclxyXG5cdFx0XHRcdFx0XHRcdCAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuXHRcdFx0XHRcdFx0XHQgICAgfSk7XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cdCAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5kaXIoZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBcdGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG5cdCAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XHJcblx0ICAgIFx0Y29uc29sZS5sb2coZXJyKVxyXG5cdCAgICB9KVxyXG5cdH1cclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLyogQWRkIG1vYmlsZSBzdHlsZXMgZm9yIHRoZSBjb21wb25lbnQgaGVyZS4gICovXFxyXFxuLmhlYWRlcntcXHJcXG4gICAgbWFyZ2luLXRvcDogNTA7XFxyXFxuXFx0bWFyZ2luLWxlZnQ6IDMyO1xcclxcblxcdGNvbG9yOiBibGFjaztcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgZm9udC1zaXplOiAzMDtcXHJcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG59XFxyXFxuLnN1Ym1pdC1idG57XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6I2FjMDBlNjtcXHJcXG4gICAgd2lkdGg6IDc1JTtcXHJcXG4gICAgaGVpZ2h0OiAxNzBweDtcXHJcXG4vKiAgICBmb250LWZhbWlseTogXFxcIlNlZ29lIFVJXFxcIixBcmlhbCxzYW5zLXNlcmlmO1xcclxcbiovICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgbWFyZ2luLXRvcDogMjA7XFxyXFxufVxcclxcbi50ZXh0LWZpZWxke1xcclxcbiAgICB3aWR0aDogODUlO1xcclxcbiAgICBtYXJnaW4tdG9wOiAyMDtcXHJcXG4gICAgY29sb3I6IzY5Njk2OVxcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2UtYnV0dG9uLWNvbnRhaW5lciB7XFxyXFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdGxlZnQ6IDA7XFxyXFxufVxcclxcbi5jbG9zZSB7XFxyXFxuXFx0bWFyZ2luOiAxMDtcXHJcXG5cXHRmb250LXNpemU6IDQwO1xcclxcblxcdHdpZHRoOiA0ODtcXHJcXG4gICAgaGVpZ2h0OiA0ODtcXHJcXG4gICAgY29sb3I6IGJsYWNrXFxyXFxufVxcclxcblxcclxcbi5lcnJvci1tZXNzYWdlIHtcXHJcXG4gICAgY29sb3I6IHJlZDtcXHJcXG4gICAgZm9udC1zaXplOiAxNjtcXHJcXG4gICAgdmlzaWJpbGl0eTogY29sbGFwc2U7XFxyXFxufVxcclxcblxcclxcbi5zZWNvbmQtdmFsIHtcXHJcXG4gICAgdmlzaWJpbGl0eTogY29sbGFwc2U7XFxyXFxufVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxTdGFja2xheW91dD5cXHJcXG4gICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJjbG9zZS1idXR0b24tY29udGFpbmVyXFxcIiBvcmllbnRhdGlvbj1cXFwiaG9yaXpvbnRhbFxcXCI+XFxyXFxuICAgICAgICA8TGFiZWwgdGV4dD1cXFwiJnRpbWVzO1xcXCIgY2xhc3M9XFxcImNsb3NlXFxcIiAodGFwKT1cXFwiY2xvc2UoJ2NhbmNlbCcpXFxcIj48L0xhYmVsPlxcclxcbiAgICA8L1N0YWNrTGF5b3V0PlxcclxcbiAgICA8TGFiZWwgY2xhc3M9XFxcImhlYWRlclxcXCIgW3RleHRdPVxcXCJsYWJlbFxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiPjwvTGFiZWw+XFxyXFxuICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiaW5wdXQtZmllbGRcXFwiPlxcclxcbiAgICBcXHQ8IS0tIDxNYXNrZWRUZXh0RmllbGQgY2xhc3M9XFxcImlucHV0IGlucHV0LWJvcmRlclxcXCIgbWFzaz1cXFwiKDAwMCkgMDAwLTAwMDBcXFwiIFsobmdNb2RlbCldPVxcXCJ2YWx1ZVxcXCIga2V5Ym9hcmRUeXBlPVxcXCJwaG9uZVxcXCI+PC9NYXNrZWRUZXh0RmllbGQ+IC0tPlxcclxcbiAgICAgICAgPFRleHRGaWVsZCAjdmFsIFsobmdNb2RlbCldPVxcXCJ2YWx1ZVxcXCIgW2tleWJvYXJkVHlwZV0gPSBcXFwia2V5Ym9hcmRcXFwiIGF1dG9jb3JyZWN0PVxcXCJmYWxzZVxcXCIgcmV0dXJuS2V5VHlwZT1cXFwie3tyZXR1cm5LZXl9fVxcXCJcXHJcXG4gICAgICAgICBbbWF4TGVuZ3RoXT0gXFxcIm1heGxlbmd0aFxcXCIgY2xhc3M9XFxcInRleHQtZmllbGRcXFwiIHNlY3VyZT1cXFwie3tpc1NlY3VyZX19XFxcIiBoaW50PVxcXCJ7eyBoaW50IH19XFxcIj48L1RleHRGaWVsZD5cXHJcXG4gICAgICAgIDxUZXh0RmllbGQgI3NlY29uZFZhbCBbKG5nTW9kZWwpXT1cXFwic2Vjb25kVmFsdWVcXFwiIFtrZXlib2FyZFR5cGVdID0gXFxcImtleWJvYXJkXFxcIiBhdXRvY29ycmVjdD1cXFwiZmFsc2VcXFwiIHJldHVybktleVR5cGU9XFxcImRvbmVcXFwiXFxyXFxuICAgICAgICAgW21heExlbmd0aF09IFxcXCJtYXhsZW5ndGhcXFwiIGNsYXNzPVxcXCJ0ZXh0LWZpZWxkIHNlY29uZC12YWxcXFwiIHNlY3VyZT1cXFwie3tpc1NlY3VyZX19XFxcIiBoaW50PVxcXCJ7eyBzZWNvbmRIaW50IH19XFxcIj48L1RleHRGaWVsZD5cXHJcXG4gICAgPC9TdGFja0xheW91dD5cXHJcXG4gICAgPExhYmVsICNlcnJvck1lc3NhZ2UgdGV4dD1cXFwie3sgZXJyb3JUZXh0IH19XFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgY2xhc3M9XFxcImVycm9yLW1lc3NhZ2VcXFwiPjwvTGFiZWw+XFxyXFxuXFxyXFxuICAgIDxCdXR0b24gdGV4dD1cXFwiU2F2ZVxcXCIgKHRhcCk9XFxcInN1Ym1pdERhdGEodmFsLnRleHQpXFxcIiBjbGFzcz1cXFwic3VibWl0LWJ0blxcXCI+PC9CdXR0b24+XFxyXFxuXFxyXFxuPC9TdGFja2xheW91dD5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVHJhbnNmZXJTZXJ2aWNlIH0gZnJvbSAnLi4vZGF0YXRyYW5zZmVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZVwiO1xyXG4vLyBpbXBvcnQgeyBNb2RhbERpYWxvZ1BhcmFtcyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9kaXJlY3RpdmVzL2RpYWxvZ3NcIjtcclxuaW1wb3J0ICogYXMgZmlyZWJhc2UgZnJvbSAnbmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZSc7XHJcbmltcG9ydCB7IExvZ2luY2hlY2tTZXJ2aWNlIH0gZnJvbSAnLi4vbG9naW5jaGVjay5zZXJ2aWNlLnRucyc7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBNb2RhbERpYWxvZ1BhcmFtcyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9kaXJlY3RpdmVzL2RpYWxvZ3NcIjtcclxuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCI7XHJcbmltcG9ydCB7IExhYmVsIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9sYWJlbCc7XHJcbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvdGV4dC1maWVsZCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1zZXR0aW5nc2Zvcm0nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9zZXR0aW5nc2Zvcm0uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3NldHRpbmdzZm9ybS5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFNldHRpbmdzZm9ybUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdHJhbnNmZXJTZXJ2aWNlOiBUcmFuc2ZlclNlcnZpY2UsIHByaXZhdGUgbG9naW5jaGVja1NlcnZpY2U6IExvZ2luY2hlY2tTZXJ2aWNlLCBcclxuICAgIHByaXZhdGUgcGFnZTogUGFnZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMsIHByaXZhdGUgcGFyYW1zOiBNb2RhbERpYWxvZ1BhcmFtcykgeyB9XHJcblxyXG4gIEBWaWV3Q2hpbGQoXCJlcnJvck1lc3NhZ2VcIiwgeyBzdGF0aWM6IHRydWUgfSkgZW06IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZChcInNlY29uZFZhbFwiLCB7IHN0YXRpYzogdHJ1ZSB9KSBzdjogRWxlbWVudFJlZjtcclxuICB1c2VySWQ7XHJcbiAgZmllbGQ7XHJcbiAgbGFiZWw7XHJcbiAgdmFsdWU7XHJcbiAgc2Vjb25kVmFsdWU7XHJcbiAga2V5Ym9hcmQ7XHJcbiAgbWF4bGVuZ3RoO1xyXG4gIGlzU2VjdXJlID0gZmFsc2U7XHJcbiAgZXJyb3JUZXh0O1xyXG4gIHJldHVybktleSA9IFwiZG9uZVwiXHJcbiAgaGludDtcclxuICBzZWNvbmRIaW50O1xyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgLy8gdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XHJcbiAgICB0aGlzLmZpZWxkID0gdGhpcy50cmFuc2ZlclNlcnZpY2UuZ2V0RGF0YSgpO1xyXG4gICAgdGhpcy5sYWJlbCA9IHRoaXMuZmllbGQubGFiZWw7XHJcbiAgICB0aGlzLnZhbHVlID0gdGhpcy5maWVsZC52YWx1ZTtcclxuICAgIGlmKHRoaXMuZmllbGQudmFsdWUgPT0gXCJOb25lXCIpIHtcclxuICAgICAgdGhpcy52YWx1ZSA9ICcnO1xyXG4gICAgfVxyXG4gICAgaWYodGhpcy5sYWJlbD09XCJOYW1lXCIpe1xyXG4gICAgICAvLyB0aGlzLmtleWJvYXJkID0gXCJcIjtcclxuICAgICAgdGhpcy5tYXhsZW5ndGggPSAzMDtcclxuICAgICAgdGhpcy5yZXR1cm5LZXkgPSBcIm5leHRcIjtcclxuICAgICAgdGhpcy52YWx1ZSA9IHRoaXMuZmllbGQuZmlyc3ROYW1lO1xyXG4gICAgICB0aGlzLnNlY29uZFZhbHVlID0gdGhpcy5maWVsZC5sYXN0TmFtZTtcclxuICAgICAgdGhpcy5oaW50ID0gXCJGaXJzdCBuYW1lXCI7XHJcbiAgICAgIHRoaXMuc2Vjb25kSGludCA9IFwiTGFzdCBuYW1lXCI7XHJcbiAgICAgIGxldCBzZWNvbmRWYWx1ZSA9IDxUZXh0RmllbGQ+IHRoaXMuc3YubmF0aXZlRWxlbWVudDtcclxuICAgICAgc2Vjb25kVmFsdWUuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZih0aGlzLmxhYmVsPT1cIkVtYWlsXCIpe1xyXG4gICAgICB0aGlzLmtleWJvYXJkID0gXCJlbWFpbFwiO1xyXG4gICAgICB0aGlzLm1heGxlbmd0aCA9IDMwO1xyXG4gICAgICB0aGlzLmVycm9yVGV4dCA9IFwiSW52YWxpZCBlbWFpbFwiXHJcbiAgICAgIHRoaXMuaGludCA9IFwiRW1haWxcIlxyXG4gICAgfVxyXG4gICAgZWxzZSBpZih0aGlzLmxhYmVsPT1cIlBob25lIE51bWJlclwiKXtcclxuICAgICAgdGhpcy5rZXlib2FyZCA9IFwicGhvbmVcIjtcclxuICAgICAgdGhpcy5tYXhsZW5ndGggPSAxMDtcclxuICAgICAgdGhpcy5lcnJvclRleHQgPSBcIkludmFsaWQgcGhvbmUgbnVtYmVyXCJcclxuICAgICAgdGhpcy5oaW50ID0gXCJ4eHgteHh4LXh4eHhcIlxyXG4gICAgfVxyXG4gICAgZWxzZSBpZih0aGlzLmxhYmVsPT1cIlBhc3N3b3JkXCIpIHtcclxuICAgICAgdGhpcy52YWx1ZSA9ICcnO1xyXG4gICAgICB0aGlzLm1heGxlbmd0aCA9IDMwO1xyXG4gICAgICB0aGlzLmlzU2VjdXJlID0gdHJ1ZTtcclxuICAgICAgdGhpcy5sYWJlbCA9IFwiRW50ZXIgbmV3IHBhc3N3b3JkXCI7XHJcbiAgICAgIHRoaXMuaGludCA9IFwiTmV3IHBhc3N3b3JkXCI7XHJcbiAgICAgIHRoaXMuc2Vjb25kSGludCA9IFwiUmUtZW50ZXIgbmV3IHBhc3N3b3JkXCI7XHJcbiAgICAgIHRoaXMuZXJyb3JUZXh0ID0gXCJQYXNzd29yZCBtdXN0IGJlIGF0IGxlc3QgNiBjaGFyYWN0ZXJzIGxvbmdcIjtcclxuICAgICAgbGV0IHNlY29uZFZhbHVlID0gPFRleHRGaWVsZD4gdGhpcy5zdi5uYXRpdmVFbGVtZW50O1xyXG4gICAgICBzZWNvbmRWYWx1ZS5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdWJtaXREYXRhKHJlc3VsdCkge1xyXG4gICAgdGhpcy51c2VySWQgPSB0aGlzLmxvZ2luY2hlY2tTZXJ2aWNlLmdldFVzZXIoKTtcclxuICAgIGNvbnN0IHVzZXJEb2N1bWVudCA9IGZpcmViYXNlLmZpcmVzdG9yZS5jb2xsZWN0aW9uKCd1c2VycycpLmRvYyh0aGlzLnVzZXJJZCk7XHJcbiAgICBpZiAodGhpcy5sYWJlbCA9PSBcIk5hbWVcIikge1xyXG4gICAgICBmaXJlYmFzZS51cGRhdGVQcm9maWxlKHtcclxuICAgICAgICBkaXNwbGF5TmFtZTogdGhpcy52YWx1ZSArIFwiIFwiICsgdGhpcy5zZWNvbmRWYWx1ZVxyXG4gICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlByb2ZpbGUgdXBkYXRlZFwiKVxyXG4gICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgICB9KVxyXG5cclxuICAgICAgLy8gY29uc29sZS5sb2coXCJuYW1lXCIsIG5hbWUpXHJcbiAgICAgIHVzZXJEb2N1bWVudC51cGRhdGUoe1xyXG4gICAgICAgIGZpcnN0X25hbWU6IHRoaXMudmFsdWUsXHJcbiAgICAgICAgbGFzdF9uYW1lOiB0aGlzLnNlY29uZFZhbHVlXHJcbiAgICAgIH0pXHJcblxyXG4gICAgICB2YXIgcG9zdGluZ3NDb2xsZWN0aW9uID0gZmlyZWJhc2UuZmlyZXN0b3JlLmNvbGxlY3Rpb24oJ3Bvc3RpbmdzJyk7XHJcbiAgICAgIHVzZXJEb2N1bWVudC5nZXQoKS50aGVuKGRvYyA9PiB7XHJcbiAgICAgICAgbGV0IHBvc3RJZHMgPSBkb2MuZGF0YSgpLnBvc3RzO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwicG9zdGlkc1wiLCBwb3N0SWRzKVxyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBwb3N0SWRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICBwb3N0aW5nc0NvbGxlY3Rpb24uZG9jKHBvc3RJZHNbaV0pLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgIHVzZXI6IHRoaXMudmFsdWUgKyBcIiBcIiArIHRoaXMuc2Vjb25kVmFsdWVcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5wYXJhbXMuY2xvc2VDYWxsYmFjayhcInVwZGF0ZVwiKVxyXG4gICAgfVxyXG5cclxuICAgIGVsc2UgaWYodGhpcy5sYWJlbCA9PSBcIkVtYWlsXCIpIHtcclxuICAgICAgZmlyZWJhc2UudXBkYXRlRW1haWwocmVzdWx0KS50aGVuKCgpID0+IHtcclxuICAgICAgICB1c2VyRG9jdW1lbnQudXBkYXRlKHtcclxuICAgICAgICAgIGVtYWlsOiByZXN1bHQsXHJcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnBhcmFtcy5jbG9zZUNhbGxiYWNrKFwidXBkYXRlXCIpXHJcbiAgICAgICAgfSlcclxuICAgICAgfSkuY2F0Y2goXHJcbiAgICAgICAgICAoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zaG93RXJyb3IoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZih0aGlzLmxhYmVsID09IFwiUGhvbmUgTnVtYmVyXCIpIHtcclxuICAgICAgdXNlckRvY3VtZW50LnVwZGF0ZSh7XHJcbiAgICAgICAgcGhvbmVfbnVtYmVyOiByZXN1bHQsXHJcbiAgICAgIH0pLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIHRoaXMucGFyYW1zLmNsb3NlQ2FsbGJhY2soXCJ1cGRhdGVcIilcclxuICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIHRoaXMuc2hvd0Vycm9yKCk7XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBlbHNlIGlmKHRoaXMubGFiZWwgPT0gXCJFbnRlciBuZXcgcGFzc3dvcmRcIikge1xyXG4gICAgICBpZih0aGlzLnZhbHVlICE9IHRoaXMuc2Vjb25kVmFsdWUpIHtcclxuICAgICAgICB0aGlzLmVycm9yVGV4dCA9IFwiUGFzc3dvcmRzIGRvIG5vdCBtYXRjaFwiO1xyXG4gICAgICAgIHRoaXMuc2hvd0Vycm9yKCk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgZmlyZWJhc2UudXBkYXRlUGFzc3dvcmQodGhpcy52YWx1ZSkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnBhcmFtcy5jbG9zZUNhbGxiYWNrKFwidXBkYXRlXCIpXHJcbiAgICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgdGhpcy5lcnJvclRleHQgPSBcIlBhc3N3b3JkIG11c3QgYmUgYXQgbGVzdCA2IGNoYXJhY3RlcnMgbG9uZ1wiO1xyXG4gICAgICAgICAgdGhpcy5zaG93RXJyb3IoKTtcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjbG9zZShyZXMpIHtcclxuICAgIHRoaXMucGFyYW1zLmNsb3NlQ2FsbGJhY2socmVzKTtcclxuICB9XHJcblxyXG4gIHNob3dFcnJvcigpIHtcclxuICAgIGxldCBlcnJvck1lc3NhZ2UgPSA8TGFiZWw+IHRoaXMuZW0ubmF0aXZlRWxlbWVudDtcclxuICAgIGVycm9yTWVzc2FnZS5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XHJcbiAgfVxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCJcIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8cD5cXHJcXG4gIHVwZGF0ZSB3b3JrcyFcXHJcXG48L3A+XFxyXFxuXCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBMb2dpbmNoZWNrU2VydmljZSB9IGZyb20gJy4uL2xvZ2luY2hlY2suc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC11cGRhdGUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi91cGRhdGUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3VwZGF0ZS5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFVwZGF0ZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbG9naW5jaGVja1NlcnZpY2U6IExvZ2luY2hlY2tTZXJ2aWNlKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgXHR0aGlzLmxvZ2luY2hlY2tTZXJ2aWNlLmxvZ2luQ2hlY2soKTtcclxuICB9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFVzZXJTZXJ2aWNlIHtcclxuICBcdC8qKlxyXG5cdCogVG8gZ2V0IHRoZSBzZXJ2ZXIgdG8gcmVjb2duaXplIHlvdXIgbW9iaWxlIGRldmljZSwgZmluZCB5b3VyIGlwdjQgYWRkcmVzcyBieSBydW5uaW5nIGlwY29uZmlnIGluIGEgdGVybWluYWwgd2luZG93XHJcblx0KiBhbmQgYWRkIGEgbmV3IHVyaSBsaW5lIHdpdGggeW91ciBpcHY0IGFkZHJlc3MuIERvIHRoaXMgZm9yIG5ldHdvcmtfc2VjdXJpdHlfY29uZmlnLnhtbCwgdXNlci5zZXJ2aWNlcy50bnMudHMsIGFuZFxyXG5cdCogcG9zdGluZy5zZXJ2aWNlLnRucy50cy5cclxuXHQqL1xyXG5cdC8vIEFkYW0ncyB0ZXN0aW5nIHNlcnZlclxyXG5cdC8vIHVyaSA9ICdodHRwOi8vMTkyLjE2OC4xLjc6NDAwMCc7XHJcblx0Ly8gdXJpID0gJ2h0dHA6Ly8xMC41LjExLjI1OjQwMDAnO1xyXG5cdC8vIFBoaWxsaXAncyBUZXN0aW5nIHNlcnZlclxyXG5cdHVyaSA9ICdodHRwOi8vMTkyLjE2OC4xLjM6NDAwMCc7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7IH1cclxuXHJcbiAgZ2V0VXNlcnMoKSB7XHJcbiAgXHRyZXR1cm4gdGhpcy5odHRwLmdldChgJHt0aGlzLnVyaX0vdXNlcnNgKTtcclxuICB9XHJcblxyXG4gIGdldFVzZXJieUlkKGlkKSB7XHJcbiAgXHRyZXR1cm4gdGhpcy5odHRwLmdldChgJHt0aGlzLnVyaX0vdXNlcnMvJHtpZH1gKTtcclxuICB9XHJcblxyXG4gIGFkZFVzZXIobmFtZT0nJywgdXNlcm5hbWU9JycsIGFkZHJlc3M9JycsIGJpcnRoZGF0ZT0nJywgZW1haWw9JycsIGdlbmRlcj0nJywgcGhvbmVfbnVtYmVyPScnLCByaWRlc19naXZlbj1cIjBcIiwgcmlkZXNfcmVjZWl2ZWQ9XCIwXCIpIHtcclxuICBcdGNvbnN0IHVzZXIgPSB7XHJcbiAgXHRcdG5hbWU6IG5hbWUsXHJcbiAgICAgIHVzZXJuYW1lOiB1c2VybmFtZSxcclxuICAgICAgYWRkcmVzczogYWRkcmVzcyxcclxuICAgICAgYmlydGhkYXRlOiBiaXJ0aGRhdGUsXHJcbiAgICAgIGVtYWlsOiBlbWFpbCxcclxuICAgICAgZ2VuZGVyOiBnZW5kZXIsXHJcbiAgICAgIHBob25lX251bWJlcjogcGhvbmVfbnVtYmVyLFxyXG4gICAgICByaWRlc19naXZlbjogcmlkZXNfZ2l2ZW4sXHJcbiAgICAgIHJpZGVzX3JlY2VpdmVkOiByaWRlc19yZWNlaXZlZCxcclxuICAgICAgcGF5bWVudF9pZDogXCJcIlxyXG4gIFx0fTtcclxuICBcdHJldHVybiB0aGlzLmh0dHAucG9zdChgJHt0aGlzLnVyaX0vdXNlcnMvYWRkL2AsIHVzZXIpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlVXNlcihpZCwgbmFtZSwgdXNlcm5hbWUsIGFkZHJlc3MsIGJpcnRoZGF0ZSwgZW1haWwsIGdlbmRlciwgcGhvbmVfbnVtYmVyLCByaWRlc19naXZlbiwgcmlkZXNfcmVjZWl2ZWQsIHBheW1lbnRfaWQpIHtcclxuICBcdGNvbnN0IHVzZXIgPSB7XHJcbiAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgIHVzZXJuYW1lOiB1c2VybmFtZSxcclxuICAgICAgYWRkcmVzczogYWRkcmVzcyxcclxuICAgICAgYmlydGhkYXRlOiBiaXJ0aGRhdGUsXHJcbiAgICAgIGVtYWlsOiBlbWFpbCxcclxuICAgICAgZ2VuZGVyOiBnZW5kZXIsXHJcbiAgICAgIHBob25lX251bWJlcjogcGhvbmVfbnVtYmVyLFxyXG4gICAgICByaWRlc19naXZlbjogcmlkZXNfZ2l2ZW4sXHJcbiAgICAgIHJpZGVzX3JlY2VpdmVkOiByaWRlc19yZWNlaXZlZCxcclxuICAgICAgcGF5bWVudF9pZDogcGF5bWVudF9pZFxyXG4gICAgfTtcclxuICBcdHJldHVybiB0aGlzLmh0dHAucG9zdChgJHt0aGlzLnVyaX0vdXNlcnMvdXBkYXRlLyR7aWR9YCwgdXNlcik7XHJcbiAgfVxyXG5cclxuICBkZWxldGVVc2VyKGlkKSB7XHJcbiAgXHRyZXR1cm4gdGhpcy5odHRwLmdldChgJHt0aGlzLnVyaX0vdXNlcnMvZGVsZXRlLyR7aWR9YCk7XHJcbiAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBVc2VyU2VydmljZSB7XHJcbiAgXHQvKipcclxuXHQqIFRvIGdldCB0aGUgc2VydmVyIHRvIHJlY29nbml6ZSB5b3VyIG1vYmlsZSBkZXZpY2UsIGZpbmQgeW91ciBpcHY0IGFkZHJlc3MgYnkgcnVubmluZyBpcGNvbmZpZyBpbiBhIHRlcm1pbmFsIHdpbmRvd1xyXG5cdCogYW5kIGFkZCBhIG5ldyB1cmkgbGluZSB3aXRoIHlvdXIgaXB2NCBhZGRyZXNzLiBEbyB0aGlzIGZvciBuZXR3b3JrX3NlY3VyaXR5X2NvbmZpZy54bWwsIHVzZXIuc2VydmljZXMudG5zLnRzLCBhbmRcclxuXHQqIHBvc3Rpbmcuc2VydmljZS50bnMudHMuXHJcblx0Ki9cclxuXHQvLyBBZGFtJ3MgdGVzdGluZyBzZXJ2ZXJcclxuXHQvLyB1cmkgPSAnaHR0cDovLzE5Mi4xNjguMS43OjQwMDAnO1xyXG5cdC8vIHVyaSA9ICdodHRwOi8vMTAuNS4xMS4yNTo0MDAwJztcclxuXHQvLyBQaGlsbGlwJ3MgVGVzdGluZyBzZXJ2ZXJcclxuXHR1cmkgPSAnaHR0cDovLzE5Mi4xNjguMS4zOjQwMDAnO1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkgeyB9XHJcblxyXG4gIGdldFVzZXJzKCkge1xyXG4gIFx0cmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy51cml9L3VzZXJzYCk7XHJcbiAgfVxyXG5cclxuICBnZXRVc2VyYnlJZChpZCkge1xyXG4gIFx0cmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy51cml9L3VzZXJzLyR7aWR9YCk7XHJcbiAgfVxyXG5cclxuICBhZGRVc2VyKG5hbWU9JycsIHVzZXJuYW1lPScnLCBhZGRyZXNzPScnLCBiaXJ0aGRhdGU9JycsIGVtYWlsPScnLCBnZW5kZXI9JycsIHBob25lX251bWJlcj0nJywgcmlkZXNfZ2l2ZW49XCIwXCIsIHJpZGVzX3JlY2VpdmVkPVwiMFwiKSB7XHJcbiAgXHRjb25zdCB1c2VyID0ge1xyXG4gIFx0XHRuYW1lOiBuYW1lLFxyXG4gICAgICB1c2VybmFtZTogdXNlcm5hbWUsXHJcbiAgICAgIGFkZHJlc3M6IGFkZHJlc3MsXHJcbiAgICAgIGJpcnRoZGF0ZTogYmlydGhkYXRlLFxyXG4gICAgICBlbWFpbDogZW1haWwsXHJcbiAgICAgIGdlbmRlcjogZ2VuZGVyLFxyXG4gICAgICBwaG9uZV9udW1iZXI6IHBob25lX251bWJlcixcclxuICAgICAgcmlkZXNfZ2l2ZW46IHJpZGVzX2dpdmVuLFxyXG4gICAgICByaWRlc19yZWNlaXZlZDogcmlkZXNfcmVjZWl2ZWQsXHJcbiAgICAgIHBheW1lbnRfaWQ6IFwiXCJcclxuICBcdH07XHJcbiAgXHRyZXR1cm4gdGhpcy5odHRwLnBvc3QoYCR7dGhpcy51cml9L3VzZXJzL2FkZC9gLCB1c2VyKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVVzZXIoaWQsIG5hbWUsIHVzZXJuYW1lLCBhZGRyZXNzLCBiaXJ0aGRhdGUsIGVtYWlsLCBnZW5kZXIsIHBob25lX251bWJlciwgcmlkZXNfZ2l2ZW4sIHJpZGVzX3JlY2VpdmVkLCBwYXltZW50X2lkKSB7XHJcbiAgXHRjb25zdCB1c2VyID0ge1xyXG4gICAgICBuYW1lOiBuYW1lLFxyXG4gICAgICB1c2VybmFtZTogdXNlcm5hbWUsXHJcbiAgICAgIGFkZHJlc3M6IGFkZHJlc3MsXHJcbiAgICAgIGJpcnRoZGF0ZTogYmlydGhkYXRlLFxyXG4gICAgICBlbWFpbDogZW1haWwsXHJcbiAgICAgIGdlbmRlcjogZ2VuZGVyLFxyXG4gICAgICBwaG9uZV9udW1iZXI6IHBob25lX251bWJlcixcclxuICAgICAgcmlkZXNfZ2l2ZW46IHJpZGVzX2dpdmVuLFxyXG4gICAgICByaWRlc19yZWNlaXZlZDogcmlkZXNfcmVjZWl2ZWQsXHJcbiAgICAgIHBheW1lbnRfaWQ6IHBheW1lbnRfaWRcclxuICAgIH07XHJcbiAgXHRyZXR1cm4gdGhpcy5odHRwLnBvc3QoYCR7dGhpcy51cml9L3VzZXJzL3VwZGF0ZS8ke2lkfWAsIHVzZXIpO1xyXG4gIH1cclxuXHJcbiAgZGVsZXRlVXNlcihpZCkge1xyXG4gIFx0cmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy51cml9L3VzZXJzL2RlbGV0ZS8ke2lkfWApO1xyXG4gIH1cclxuXHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi8qIEFkZCBtb2JpbGUgc3R5bGVzIGZvciB0aGUgY29tcG9uZW50IGhlcmUuICAqL1xcbi5pbWcge1xcblxcdGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8UGFnZS5hY3Rpb25CYXI+XFxyXFxuICA8QWN0aW9uQmFyIHRpdGxlPVxcXCJcXFwiIGJhY2tncm91bmRDb2xvcj1cXFwiYmxhY2tcXFwiPlxcclxcbiAgXFx0PE5hdmlnYXRpb25CdXR0b24gdGV4dD1cXFwiR28gQmFja1xcXCIgYW5kcm9pZC5zeXN0ZW1JY29uPVxcXCJpY19tZW51X2JhY2tcXFwiICh0YXApPVxcXCJvbk5hdkJ0blRhcCgpXFxcIj48L05hdmlnYXRpb25CdXR0b24+XFxyXFxuICA8L0FjdGlvbkJhcj5cXHJcXG48L1BhZ2UuYWN0aW9uQmFyPlxcclxcbjxJbWFnZSBzcmM9XFxcInt7IGltZ1NvdXJjZSB9fVxcXCIgY2xhc3M9XFxcImltZ1xcXCI+PC9JbWFnZT5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRyYW5zZmVyU2VydmljZSB9IGZyb20gJy4uL2RhdGF0cmFuc2Zlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC12aWV3LWltYWdlJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vdmlldy1pbWFnZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vdmlldy1pbWFnZS5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFZpZXdJbWFnZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdHJhbnNmZXJTZXJ2aWNlOiBUcmFuc2ZlclNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zKSB7IH1cclxuXHJcbiAgaW1nU291cmNlO1xyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICBcdHRoaXMuaW1nU291cmNlID0gdGhpcy50cmFuc2ZlclNlcnZpY2UuZ2V0RGF0YSgpO1xyXG4gIFx0Y29uc29sZS5sb2codGhpcy5pbWdTb3VyY2UpO1xyXG4gIH1cclxuXHJcbiAgb25OYXZCdG5UYXAoKSB7XHJcbiAgXHRpZih0aGlzLnJvdXRlci5jYW5Hb0JhY2spIHtcclxuICBcdFx0dGhpcy5yb3V0ZXIuYmFjaygpO1xyXG4gIFx0fVxyXG4gIFx0ZWxzZSB7XHJcbiAgXHRcdHRoaXMucm91dGVyLm5hdmlnYXRlKFsnbmF2aWdhdGlvbiddKTtcclxuICBcdH1cclxuICB9XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi8qIEFkZCBtb2JpbGUgc3R5bGVzIGZvciB0aGUgY29tcG9uZW50IGhlcmUuICAqL1xcbi5wYWdlIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgdmlzaWJpbGl0eTogY29sbGFwc2U7XFxufVxcbi5mb3JtIHtcXG4gIG1hcmdpbi1sZWZ0OiAzMDtcXG4gIG1hcmdpbi1yaWdodDogMzA7XFxuICBmbGV4LWdyb3c6IDI7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG5cXG4ubG9nbyB7XFxuICBtYXJnaW4tYm90dG9tOiA3MjtcXG4gIGhlaWdodDogMTIwO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi5oZWFkZXIge1xcbiAgaG9yaXpvbnRhbC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAyNTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBtYXJnaW4tYm90dG9tOiA3MDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiAjYWMwMGU2O1xcbn1cXG5cXG4uaW5wdXQtZmllbGQge1xcbiAgbWFyZ2luLWJvdHRvbTogMjU7XFxufVxcbi5pbnB1dCB7XFxuICBmb250LXNpemU6IDE4O1xcbiAgcGxhY2Vob2xkZXItY29sb3I6ICNBOEE4QTg7XFxufVxcblxcbi5idG4tcHJpbWFyeSB7XFxuICBoZWlnaHQ6IDUwO1xcbiAgbWFyZ2luOiAzMCA1IDE1IDU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWMwMGU2O1xcbiAgYm9yZGVyLXJhZGl1czogNTtcXG4gIGZvbnQtc2l6ZTogMjA7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4uYnRuLWZiIHtcXG4gIGhlaWdodDogMTAwO1xcbiAgbWFyZ2luOiAwIDUgMTUgNTtcXG4gIC8qYm9yZGVyLXJhZGl1czogNTsqL1xcbiAgZm9udC1zaXplOiAyMDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5sb2dpbi1sYWJlbCB7XFxuICBob3Jpem9udGFsLWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogI0E4QThBODtcXG4gIGZvbnQtc2l6ZTogMTY7XFxufVxcbi5zaWduLXVwLWxhYmVsIHtcXG4gIG1hcmdpbi1ib3R0b206IDIwO1xcbn1cXG4uYm9sZCB7XFxuICBjb2xvcjogIzAwMDAwMDsgXFxufVxcbi5hY3Rpdml0eS1pbmRpY2F0b3Ige1xcbiAgY29sb3I6ICNhYzAwZTY7XFxufVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxGbGV4Ym94TGF5b3V0IGNsYXNzPVxcXCJwYWdlXFxcIiAjd2VsY29tZUNvbnRhaW5lcj5cXHJcXG5cXHQ8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImZvcm1cXFwiPlxcclxcblxcdFxcdDxJbWFnZSBjbGFzcz1cXFwibG9nb1xcXCIgc3JjPVxcXCJ+L2ltZy9sb2dvLnBuZ1xcXCI+PC9JbWFnZT5cXHJcXG5cXHRcXHQ8IS0tIDxMYWJlbCBjbGFzcz1cXFwiaGVhZGVyXFxcIiB0ZXh0PVxcXCJDb2xsZWdlUG9vbFxcXCI+PC9MYWJlbD4gLS0+XFxyXFxuXFxyXFxuXFx0XFx0PFN0YWNrTGF5b3V0ICpuZ0lmPVxcXCIhaXNMb2dnaW5nSW5cXFwiIGNsYXNzPVxcXCJpbnB1dC1maWVsZFxcXCI+XFxyXFxuXFx0XFx0XFx0PFRleHRGaWVsZCBjbGFzcz1cXFwiaW5wdXRcXFwiIGhpbnQ9XFxcIkZpcnN0IG5hbWVcXFwiIFsobmdNb2RlbCldPVxcXCJmaXJzdE5hbWVcXFwiIHJldHVybktleVR5cGU9XFxcIm5leHRcXFwiICNmbj48L1RleHRGaWVsZD5cXHJcXG5cXHRcXHRcXHQ8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImhyLWxpZ2h0XFxcIj48L1N0YWNrTGF5b3V0PlxcclxcblxcdFxcdDwvU3RhY2tMYXlvdXQ+XFxyXFxuXFxyXFxuXFx0XFx0PFN0YWNrTGF5b3V0ICpuZ0lmPVxcXCIhaXNMb2dnaW5nSW5cXFwiIGNsYXNzPVxcXCJpbnB1dC1maWVsZFxcXCI+XFxyXFxuXFx0XFx0XFx0PFRleHRGaWVsZCBjbGFzcz1cXFwiaW5wdXRcXFwiIGhpbnQ9XFxcIkxhc3QgbmFtZVxcXCIgWyhuZ01vZGVsKV09XFxcImxhc3ROYW1lXFxcIiByZXR1cm5LZXlUeXBlPVxcXCJuZXh0XFxcIiAjbG4+PC9UZXh0RmllbGQ+XFxyXFxuXFx0XFx0XFx0PFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJoci1saWdodFxcXCI+PC9TdGFja0xheW91dD5cXHJcXG5cXHRcXHQ8L1N0YWNrTGF5b3V0PlxcclxcblxcclxcblxcdFxcdDxTdGFja0xheW91dCBjbGFzcz1cXFwiaW5wdXQtZmllbGRcXFwiPlxcclxcblxcdFxcdFxcdDxUZXh0RmllbGQgY2xhc3M9XFxcImlucHV0XFxcIiBoaW50PVxcXCJFbWFpbFxcXCIga2V5Ym9hcmRUeXBlPVxcXCJlbWFpbFxcXCIgYXV0b2NvcnJlY3Q9XFxcImZhbHNlXFxcIiBhdXRvY2FwaXRhbGl6YXRpb25UeXBlPVxcXCJub25lXFxcIiBbKG5nTW9kZWwpXT1cXFwiZW1haWxcXFwiIHJldHVybktleVR5cGU9XFxcIm5leHRcXFwiIChyZXR1cm5QcmVzcyk9XFxcImZvY3VzUGFzc3dvcmQoKVxcXCIgI2VtPjwvVGV4dEZpZWxkPlxcclxcblxcdFxcdFxcdDxTdGFja0xheW91dCBjbGFzcz1cXFwiaHItbGlnaHRcXFwiPjwvU3RhY2tMYXlvdXQ+XFxyXFxuXFx0XFx0PC9TdGFja0xheW91dD5cXHJcXG5cXHJcXG5cXHRcXHQ8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImlucHV0LWZpZWxkXFxcIj5cXHJcXG5cXHRcXHRcXHQ8VGV4dEZpZWxkIGNsYXNzPVxcXCJpbnB1dFxcXCIgaGludD1cXFwiUGFzc3dvcmRcXFwiIHNlY3VyZT1cXFwidHJ1ZVxcXCIgWyhuZ01vZGVsKV09XFxcInBhc3N3b3JkXFxcIiBbcmV0dXJuS2V5VHlwZV09XFxcImlzTG9nZ2luZ0luID8gJ2RvbmUnIDogJ25leHQnXFxcIiAocmV0dXJuUHJlc3MpPVxcXCJmb2N1c0NvbmZpcm1QYXNzd29yZCgpXFxcIiAjcHc+PC9UZXh0RmllbGQ+XFxyXFxuXFx0XFx0XFx0PFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJoci1saWdodFxcXCI+PC9TdGFja0xheW91dD5cXHJcXG5cXHRcXHQ8L1N0YWNrTGF5b3V0PlxcclxcblxcclxcblxcdFxcdDxTdGFja0xheW91dCAqbmdJZj1cXFwiIWlzTG9nZ2luZ0luXFxcIiBjbGFzcz1cXFwiaW5wdXQtZmllbGRcXFwiPlxcclxcblxcdFxcdFxcdDxUZXh0RmllbGQgY2xhc3M9XFxcImlucHV0XFxcIiBoaW50PVxcXCJDb25maXJtIHBhc3N3b3JkXFxcIiBzZWN1cmU9XFxcInRydWVcXFwiIFsobmdNb2RlbCldPVxcXCJjb25maXJtUGFzc3dvcmRcXFwiIHJldHVybktleVR5cGU9XFxcImRvbmVcXFwiICNjcHc+PC9UZXh0RmllbGQ+XFxyXFxuXFx0XFx0XFx0PFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJoci1saWdodFxcXCI+PC9TdGFja0xheW91dD5cXHJcXG5cXHRcXHQ8L1N0YWNrTGF5b3V0PlxcclxcblxcclxcblxcdFxcdDxCdXR0b24gW3RleHRdPVxcXCJpc0xvZ2dpbmdJbiA/ICdMb2cgSW4nIDogJ1NpZ24gVXAnXFxcIiAodGFwKT1cXFwic3VibWl0KClcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnkgbS10LTIwXFxcIj48L0J1dHRvbj5cXHJcXG5cXHRcXHQ8U3RhY2tMYXlvdXQ+XFxyXFxuXFx0XFx0XFx0PEZhY2Vib29rTG9naW5CdXR0b24gKHRhcCk9XFxcImZiTG9naW4oKVxcXCIgY2xhc3M9XFxcImJ0bi1mYlxcXCI+PC9GYWNlYm9va0xvZ2luQnV0dG9uPlxcclxcblxcdFxcdDwvU3RhY2tMYXlvdXQ+XFxyXFxuXFx0XFx0PExhYmVsICpuZ0lmPVxcXCJpc0xvZ2dpbmdJblxcXCIgdGV4dD1cXFwiRm9yZ290IHlvdXIgcGFzc3dvcmQ/XFxcIiBjbGFzcz1cXFwibG9naW4tbGFiZWxcXFwiICh0YXApPVxcXCJmb3Jnb3RQYXNzd29yZCgpXFxcIj48L0xhYmVsPlxcclxcblxcdDwvU3RhY2tMYXlvdXQ+XFxyXFxuXFxyXFxuXFx0PExhYmVsIGNsYXNzPVxcXCJsb2dpbi1sYWJlbCBzaWduLXVwLWxhYmVsXFxcIiAodGFwKT1cXFwidG9nZ2xlRm9ybSgpXFxcIj5cXHJcXG5cXHRcXHQ8Rm9ybWF0dGVkU3RyaW5nPlxcclxcblxcdFxcdFxcdDxTcGFuIFt0ZXh0XT1cXFwiaXNMb2dnaW5nSW4gPyAnRG9u4oCZdCBoYXZlIGFuIGFjY291bnQ/ICcgOiAnQmFjayB0byBMb2dpbidcXFwiPjwvU3Bhbj5cXHJcXG5cXHRcXHRcXHQ8U3BhbiBbdGV4dF09XFxcImlzTG9nZ2luZ0luID8gJ1NpZ24gdXAnIDogJydcXFwiIGNsYXNzPVxcXCJib2xkXFxcIj48L1NwYW4+XFxyXFxuXFx0XFx0PC9Gb3JtYXR0ZWRTdHJpbmc+XFxyXFxuXFx0PC9MYWJlbD5cXHJcXG48L0ZsZXhib3hMYXlvdXQ+XFxyXFxuXFxyXFxuPEFjdGl2aXR5SW5kaWNhdG9yICNhY3Rpdml0eUluZGljYXRvciBidXN5PVxcXCJ0cnVlXFxcIiB3aWR0aD1cXFwiNDBcXFwiIGhlaWdodD1cXFwiNDBcXFwiIGNsYXNzPVxcXCJhY3Rpdml0eS1pbmRpY2F0b3JcXFwiPlxcclxcbjwvQWN0aXZpdHlJbmRpY2F0b3I+XCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgRWxlbWVudFJlZiwgVmlld0NoaWxkLCBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgYWxlcnQsIHByb21wdCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3NcIjtcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvcGFnZSc7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgKiBhcyBmaXJlYmFzZSBmcm9tICduYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlJztcclxuaW1wb3J0IHsgbWVzc2FnaW5nLCBNZXNzYWdlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2UvbWVzc2FnaW5nXCI7XHJcbmltcG9ydCB7IExvZ2luY2hlY2tTZXJ2aWNlIH0gZnJvbSAnLi4vbG9naW5jaGVjay5zZXJ2aWNlLnRucyc7XHJcbmltcG9ydCB7IEFjdGl2aXR5SW5kaWNhdG9yIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9hY3Rpdml0eS1pbmRpY2F0b3InO1xyXG5pbXBvcnQgeyBUcmFuc2ZlclNlcnZpY2UgfSBmcm9tICcuLi9kYXRhdHJhbnNmZXIuc2VydmljZSc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtd2VsY29tZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3dlbGNvbWUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3dlbGNvbWUuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgV2VsY29tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgaXNMb2dnaW5nSW4gPSB0cnVlO1xyXG4gIGVtYWlsO1xyXG4gIHBhc3N3b3JkO1xyXG4gIGNvbmZpcm1QYXNzd29yZDtcclxuICBmaXJzdE5hbWU7XHJcbiAgbGFzdE5hbWU7XHJcbiAgZGV2aWNlVG9rZW47XHJcbiAgZmlyZWJhc2VDb25maWcgPSB7XHJcbiAgICBhcGlLZXk6IFwiQUl6YVN5Qkd1aVlwTTEzOFE2YXlxRE1SVVZXSnAxQ0U5V0IwOU53XCIsXHJcbiAgXHRhdXRoRG9tYWluOiBcImNvbGxlZ2Vwb29sLTE1NTI3NDkxMTg2MTcuZmlyZWJhc2VhcHAuY29tXCIsXHJcbiAgXHRkYXRhYmFzZVVSTDogXCJodHRwczovL2NvbGxlZ2Vwb29sLTE1NTI3NDkxMTg2MTcuZmlyZWJhc2Vpby5jb21cIixcclxuICBcdHByb2plY3RJZDogXCJjb2xsZWdlcG9vbC0xNTUyNzQ5MTE4NjE3XCIsXHJcbiAgXHRzdG9yYWdlQnVja2V0OiBcImdzOi8vY29sbGVnZXBvb2wtMTU1Mjc0OTExODYxNy5hcHBzcG90LmNvbVwiLFxyXG4gIFx0bWVzc2FnaW5nU2VuZGVySWQ6IFwiMzc1MjYzNjgwMTgzXCIsXHJcbiAgXHRhcHBJZDogXCIxOjM3NTI2MzY4MDE4Mzp3ZWI6ZjJhZjNmMjgzNTYzOGQ3Y1wiLFxyXG4gIH07XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTogUGFnZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMsIHByaXZhdGUgbG9naW5jaGVja1NlcnZpY2U6IExvZ2luY2hlY2tTZXJ2aWNlLCBwcml2YXRlIHRyYW5zZmVyU2VydmljZTogVHJhbnNmZXJTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSkgeyB9XHJcblxyXG4gIEBWaWV3Q2hpbGQoXCJlbVwiLCB7IHN0YXRpYzogdHJ1ZSB9KSBlbTogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKFwicHdcIiwgeyBzdGF0aWM6IHRydWUgfSkgcHc6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZChcImNwd1wiLCB7IHN0YXRpYzogdHJ1ZSB9KSBjcHc6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZChcImZuXCIsIHsgc3RhdGljOiB0cnVlIH0pIGZuOiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoXCJsblwiLCB7IHN0YXRpYzogdHJ1ZSB9KSBsbjogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKFwid2VsY29tZUNvbnRhaW5lclwiLCB7IHN0YXRpYzogdHJ1ZSB9KSB3YzogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKFwiYWN0aXZpdHlJbmRpY2F0b3JcIiwgeyBzdGF0aWM6IHRydWUgfSkgYWk6IEVsZW1lbnRSZWY7XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5yZWdpc3Rlck5vdGlmaWNhdGlvbnMoKTtcclxuICAgIHRoaXMuY3JlYXRlVmlld3MoKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGNyZWF0ZVZpZXdzKCkge1xyXG4gICAgYXdhaXQgZmlyZWJhc2UuaW5pdCh0aGlzLmZpcmViYXNlQ29uZmlnKS50aGVuKFxyXG4gICAgICAoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJmaXJlYmFzZS5pbml0IGRvbmVcIik7XHJcbiAgICAgIH0sXHJcbiAgICAgIGVycm9yID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgZmlyZWJhc2UuaW5pdCBlcnJvcjogJHtlcnJvcn1gKTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuICAgIGF3YWl0IGZpcmViYXNlLmFkZE9uTWVzc2FnZVJlY2VpdmVkQ2FsbGJhY2soYXN5bmMgKG1lc3NhZ2U6IGFueSkgPT4ge1xyXG4gICAgICBpZihtZXNzYWdlLnR5cGUgPT09IFwiTmV3IE1lc3NhZ2VcIikge1xyXG4gICAgICAgIHRoaXMudHJhbnNmZXJTZXJ2aWNlLnNldERhdGEobWVzc2FnZS5kYXRhLmNoYXRJZCk7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHt0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ2NoYXQnXSwge2NsZWFySGlzdG9yeTogdHJ1ZX0pfSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIGlmICh0aGlzLmxvZ2luY2hlY2tTZXJ2aWNlLmdldFVzZXJGcm9tTG9jYWxTdG9yYWdlKCkgIT0gbnVsbClcclxuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWyduYXZpZ2F0aW9uJ10sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xyXG4gICAgZWxzZSB7XHJcbiAgICAgIHZhciBhY3Rpdml0eUluZGljYXRvciA9IDxBY3Rpdml0eUluZGljYXRvcj50aGlzLmFpLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICAgIGFjdGl2aXR5SW5kaWNhdG9yLmJ1c3kgPSBmYWxzZTtcclxuICAgICAgdGhpcy53Yy5uYXRpdmVFbGVtZW50LnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XHJcbiAgICB9XHJcbiAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHRvZ2dsZUZvcm0oKSB7XHJcbiAgICB0aGlzLmlzTG9nZ2luZ0luID0gIXRoaXMuaXNMb2dnaW5nSW47XHJcbiAgfVxyXG5cclxuICBzdWJtaXQoKSB7XHJcbiAgICBpZiAoIXRoaXMuZW1haWwgfHwgIXRoaXMucGFzc3dvcmQpIHtcclxuICAgICAgdGhpcy5hbGVydChcIlBsZWFzZSBwcm92aWRlIGJvdGggYW4gZW1haWwgYWRkcmVzcyBhbmQgcGFzc3dvcmRcIik7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5pc0xvZ2dpbmdJbikge1xyXG4gICAgICB0aGlzLmxvZ2luKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnJlZ2lzdGVyKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBsb2dpbigpIHtcclxuICAgIHZhciBjcmVkZW50aWFsczogZmlyZWJhc2UuTG9naW5PcHRpb25zID0ge1xyXG4gICAgICBwYXNzd29yZE9wdGlvbnM6IHtcclxuICAgICAgICBlbWFpbDogdGhpcy5lbWFpbCxcclxuICAgICAgICBwYXNzd29yZDogdGhpcy5wYXNzd29yZCxcclxuICAgICAgfSxcclxuICAgICAgdHlwZTogZmlyZWJhc2UuTG9naW5UeXBlLlBBU1NXT1JEXHJcbiAgICB9XHJcbiAgICBmaXJlYmFzZS5sb2dpbihjcmVkZW50aWFscykudGhlbigocmVzKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgIHRoaXMubG9naW5jaGVja1NlcnZpY2UubG9naW5Vc2VyKHJlcy51aWQpXHJcbiAgICAgIGZpcmViYXNlLmZpcmVzdG9yZS5jb2xsZWN0aW9uKCd1c2VycycpLmRvYyhyZXMudWlkKS5nZXQoKS50aGVuKGRvYyA9PiB7XHJcbiAgICAgICAgaWYgKGRvYy5kYXRhKCkucGF5bWVudF9pZCA9PSBudWxsKVxyXG4gICAgICAgICAgdGhpcy5sb2dpbmNoZWNrU2VydmljZS5hZGRVc2VyVG9CcmFpbnRyZWUocmVzLmRpc3BsYXlOYW1lLCByZXMuZGlzcGxheU5hbWUsIHJlcy5lbWFpbClcclxuICAgICAgfSlcclxuICAgICAgdGhpcy51cGRhdGVUb2tlbnMocmVzLnVpZCk7XHJcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnbmF2aWdhdGlvbiddLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcclxuICAgIH0pLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgdGhpcy5hbGVydChcIldlIGNvdWxkIG5vdCBmaW5kIGFuIGFjY291bnQgbWF0Y2hpbmcgeW91ciBlbWFpbCBvciBwYXNzd29yZFwiKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyKCkge1xyXG5cdCAgaWYgKHRoaXMucGFzc3dvcmQgIT0gdGhpcy5jb25maXJtUGFzc3dvcmQpIHtcclxuXHQgICAgdGhpcy5hbGVydChcIllvdXIgcGFzc3dvcmRzIGRvIG5vdCBtYXRjaFwiKTtcclxuXHQgICAgcmV0dXJuO1xyXG4gIFx0fVxyXG4gIFx0ZmlyZWJhc2UuY3JlYXRlVXNlcih7XHJcbiAgXHRcdGVtYWlsOiB0aGlzLmVtYWlsLFxyXG4gIFx0XHRwYXNzd29yZDogdGhpcy5wYXNzd29yZCxcclxuICBcdH0pLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIHRoaXMubG9naW5jaGVja1NlcnZpY2UuYWRkVXNlclRvRmlyZXN0b3JlKHJlcy51aWQsIG51bGwsIG51bGwsIHJlcy5lbWFpbCwgdGhpcy5maXJzdE5hbWUsIHRoaXMubGFzdE5hbWUsIG51bGwsIG51bGwsIDAsIDAsICd+L2ltZy9zYW1wbGVfcHJvZmlsZS5wbmcnLCB0aGlzLmRldmljZVRva2VuKVxyXG4gICAgICAgIGZpcmViYXNlLnVwZGF0ZVByb2ZpbGUoe2Rpc3BsYXlOYW1lOiB0aGlzLmZpcnN0TmFtZSArICcgJyArIHRoaXMubGFzdE5hbWV9KS50aGVuKCk7XHJcbiAgICAgICAgdGhpcy5sb2dpbmNoZWNrU2VydmljZS5sb2dpblVzZXIocmVzLnVpZClcclxuICAgICAgICB0aGlzLmxvZ2luY2hlY2tTZXJ2aWNlLmFkZFVzZXJUb0JyYWludHJlZSgndGVzdCcsICd0ZXN0IHVzZXInLCByZXMuZW1haWwpXHJcbiAgICAgIFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUoWyduYXZpZ2F0aW9uJ10sIHtjbGVhckhpc3Rvcnk6IHRydWV9KTtcclxuICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGlmKGVyciA9PSAnQ3JlYXRpbmcgYSB1c2VyIGZhaWxlZC4gY29tLmdvb2dsZS5maXJlYmFzZS5hdXRoLkZpcmViYXNlQXV0aFVzZXJDb2xsaXNpb25FeGNlcHRpb246IFRoZSBlbWFpbCBhZGRyZXNzIGlzIGFscmVhZHkgaW4gdXNlIGJ5IGFub3RoZXIgYWNjb3VudC4nKVxyXG4gICAgICAgICAgdGhpcy5hbGVydCgnVGhlcmUgaXMgYWxyZWFkeSBhbiBhY2NvdW50IGFzc29jaWF0ZWQgd2l0aCB0aGF0IGVtYWlsJylcclxuICAgICAgICBlbHNlIGlmIChlcnIgPT0gJ0NyZWF0aW5nIGEgdXNlciBmYWlsZWQuIFBhc3N3b3JkIHNob3VsZCBiZSBhdCBsZWFzdCA2IGNoYXJhY3RlcnMnKVxyXG4gICAgICAgICAgdGhpcy5hbGVydCgnUGFzc3dvcmQgbXVzdCBiZSBhdCBsZWFzdCA2IGNoYXJhY3RlcnMnKVxyXG4gIFx0XHRjb25zb2xlLmxvZyhlcnIpO1xyXG4gIFx0XHRyZXR1cm47XHJcbiAgICAgIH0pXHJcbiAgfVxyXG5cclxuICBmb3Jnb3RQYXNzd29yZCgpIHtcclxuICAgIHByb21wdCh7XHJcbiAgICAgIHRpdGxlOiBcIkZvcmdvdCBQYXNzd29yZFwiLFxyXG4gICAgICBtZXNzYWdlOiBcIkVudGVyIHRoZSBlbWFpbCBhZGRyZXNzIHlvdSB1c2VkIHRvIHJlZ2lzdGVyIGZvciBDb2xsZWdlUG9vbCB0byByZXNldCB5b3VyIHBhc3N3b3JkXCIsXHJcbiAgICAgIGlucHV0VHlwZTogXCJlbWFpbFwiLFxyXG4gICAgICBkZWZhdWx0VGV4dDogXCJcIixcclxuICAgICAgb2tCdXR0b25UZXh0OiBcIk9rXCIsXHJcbiAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiQ2FuY2VsXCJcclxuICAgIH0pLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgaWYgKGRhdGEucmVzdWx0KVxyXG4gICAgICAgIGZpcmViYXNlLnNlbmRQYXNzd29yZFJlc2V0RW1haWwoZGF0YS50ZXh0KS50aGVuKFxyXG4gICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmFsZXJ0KCdBbiBlbWFpbCBoYXMgYmVlbiBzZW50IHRvICcgKyBkYXRhLnRleHQgKyAnIHdpdGggZGV0YWlscyBvZiBob3cgdG8gcmVjb3ZlciB5b3VyIGFjY291bnQnKVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIChlcnJvck1lc3NhZ2UpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5hbGVydCgnTm8gYWNjb3VudCBjb3VsZCBiZSBmb3VuZCB3aXRoIHlvdXIgZW1haWwnKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyTm90aWZpY2F0aW9ucygpIHtcclxuICAgIG1lc3NhZ2luZy5yZWdpc3RlckZvclB1c2hOb3RpZmljYXRpb25zKHtcclxuICAgICAgb25QdXNoVG9rZW5SZWNlaXZlZENhbGxiYWNrOiAodG9rZW46IHN0cmluZyk6IHZvaWQgPT4ge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiRmlyZWJhc2UgcGx1Z2luIHJlY2VpdmVkIGEgcHVzaCB0b2tlbjogXCIgKyB0b2tlbik7XHJcbiAgICAgICAgdGhpcy5kZXZpY2VUb2tlbiA9IHRva2VuO1xyXG4gICAgICB9LFxyXG5cclxuICAgICAgb25NZXNzYWdlUmVjZWl2ZWRDYWxsYmFjazogKG1lc3NhZ2U6IE1lc3NhZ2UpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlB1c2ggbWVzc2FnZSByZWNlaXZlZDogXCIgKyBtZXNzYWdlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIk1lc3NhZ2UgZGF0YTogXCIgKyBtZXNzYWdlLmRhdGEpO1xyXG4gICAgICB9LFxyXG5cclxuICAgICAgLy8gV2hldGhlciB5b3Ugd2FudCB0aGlzIHBsdWdpbiB0byBhdXRvbWF0aWNhbGx5IGRpc3BsYXkgdGhlIG5vdGlmaWNhdGlvbnMgb3IganVzdCBub3RpZnkgdGhlIGNhbGxiYWNrLiBDdXJyZW50bHkgdXNlZCBvbiBpT1Mgb25seS4gRGVmYXVsdCB0cnVlLlxyXG4gICAgICBzaG93Tm90aWZpY2F0aW9uczogdHJ1ZSxcclxuXHJcbiAgICAgIC8vIFdoZXRoZXIgeW91IHdhbnQgdGhpcyBwbHVnaW4gdG8gYWx3YXlzIGhhbmRsZSB0aGUgbm90aWZpY2F0aW9ucyB3aGVuIHRoZSBhcHAgaXMgaW4gZm9yZWdyb3VuZC4gQ3VycmVudGx5IHVzZWQgb24gaU9TIG9ubHkuIERlZmF1bHQgZmFsc2UuXHJcbiAgICAgIHNob3dOb3RpZmljYXRpb25zV2hlbkluRm9yZWdyb3VuZDogZmFsc2VcclxuICAgIH0pLnRoZW4oKCkgPT4gY29uc29sZS5sb2coXCJSZWdpc3RlcmVkIGZvciBwdXNoXCIpKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVRva2Vucyh1aWQpIHtcclxuICAgIGNvbnN0IHVzZXJEb2N1bWVudCA9IGZpcmViYXNlLmZpcmVzdG9yZS5jb2xsZWN0aW9uKCd1c2VycycpLmRvYyh1aWQpO1xyXG4gICAgdXNlckRvY3VtZW50LmdldCgpLnRoZW4oYXN5bmMgKGRvYykgPT4ge1xyXG4gICAgICBsZXQgdG9rZW5zID0gZG9jLmRhdGEoKS50b2tlbnM7XHJcbiAgICAgIGlmKHRva2Vucykge1xyXG4gICAgICAgIHRva2Vucy5wdXNoKHRoaXMuZGV2aWNlVG9rZW4pO1xyXG4gICAgICAgIGxldCB1cGRhdGVkVG9rZW5zID0gQXJyYXkuZnJvbShuZXcgU2V0KHRva2VucykpO1xyXG4gICAgICAgIHVzZXJEb2N1bWVudC51cGRhdGUoe1xyXG4gICAgICAgICAgdG9rZW5zOiB1cGRhdGVkVG9rZW5zXHJcbiAgICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgdXNlckRvY3VtZW50LnVwZGF0ZSh7XHJcbiAgICAgICAgICB0b2tlbnM6IFt0aGlzLmRldmljZVRva2VuXVxyXG4gICAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IGNoYXRQcm9taXNlID0gYXdhaXQgdGhpcy51cGRhdGVDaGF0VG9rZW5zKGRvYy5kYXRhKCkuY2hhdHMpO1xyXG4gICAgfSkuY2F0Y2goKGVycikgPT4geyBjb25zb2xlLmxvZyhlcnIpIH0pXHJcbiAgfVxyXG5cclxuICBhc3luYyB1cGRhdGVDaGF0VG9rZW5zKGNoYXRzKSB7XHJcbiAgICBsZXQgY2hhdENvbGxlY3Rpb24gPSBmaXJlYmFzZS5maXJlc3RvcmUuY29sbGVjdGlvbignY2hhdHMnKTtcclxuICAgIGZvcih2YXIgaSA9IDA7IGkgPCBjaGF0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBjaGF0UHJvbWlzZSA9IGF3YWl0IGNoYXRDb2xsZWN0aW9uLmRvYyhjaGF0c1tpXSkuZ2V0KCkudGhlbihhc3luYyAoZG9jKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdG9rZW5zID0gZG9jLmRhdGEoKS50b2tlbnM7XHJcbiAgICAgICAgdG9rZW5zLnB1c2godGhpcy5kZXZpY2VUb2tlbik7XHJcbiAgICAgICAgY29uc3QgbmV3VG9rZW5zID0gQXJyYXkuZnJvbShuZXcgU2V0KHRva2VucykpO1xyXG4gICAgICAgIGNvbnN0IHVwZGF0ZVByb21pc2UgPSBhd2FpdCBjaGF0Q29sbGVjdGlvbi5kb2MoY2hhdHNbaV0pLnVwZGF0ZSh7dG9rZW5zOiBuZXdUb2tlbnN9KTtcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZvY3VzRW1haWwoKSB7XHJcbiAgICB0aGlzLmVtLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuICB9XHJcblxyXG4gIGZvY3VzTGFzdE5hbWUoKSB7XHJcbiAgICB0aGlzLmxuLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuICB9XHJcblxyXG4gIGZvY3VzUGFzc3dvcmQoKSB7XHJcbiAgICB0aGlzLnB3Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuICB9XHJcblxyXG4gIGZvY3VzQ29uZmlybVBhc3N3b3JkKCkge1xyXG4gICAgaWYgKCF0aGlzLmlzTG9nZ2luZ0luKSB7XHJcbiAgICAgIHRoaXMuY3B3Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFsZXJ0KG1lc3NhZ2U6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIGFsZXJ0KHtcclxuICAgICAgdGl0bGU6IFwiQ29sbGVnZVBvb2xcIixcclxuICAgICAgb2tCdXR0b25UZXh0OiBcIkNsb3NlXCIsXHJcbiAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZmJMb2dpbigpIHtcclxuICAgIHRoaXMud2MubmF0aXZlRWxlbWVudC5zdHlsZS52aXNpYmlsaXR5ID0gJ2NvbGxhcHNlJztcclxuICAgIHZhciBhY3Rpdml0eUluZGljYXRvciA9IDxBY3Rpdml0eUluZGljYXRvcj50aGlzLmFpLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICBhY3Rpdml0eUluZGljYXRvci5idXN5ID0gdHJ1ZTtcclxuICAgIGZpcmViYXNlLmxvZ2luKHtcclxuICAgICAgdHlwZTogZmlyZWJhc2UuTG9naW5UeXBlLkZBQ0VCT09LLFxyXG4gICAgICAvLyBPcHRpb25hbFxyXG4gICAgICBmYWNlYm9va09wdGlvbnM6IHtcclxuICAgICAgICAvLyBkZWZhdWx0cyB0byBbJ3B1YmxpY19wcm9maWxlJywgJ2VtYWlsJ11cclxuICAgICAgICBzY29wZXM6IFsncHVibGljX3Byb2ZpbGUnLCAnZW1haWwnLCAndXNlcl9iaXJ0aGRheScsICd1c2VyX2dlbmRlciddIC8vIG5vdGU6IHRoaXMgcHJvcGVydHkgd2FzIHJlbmFtZWQgZnJvbSBcInNjb3BlXCIgaW4gOC40LjBcclxuICAgICAgfVxyXG4gICAgfSkudGhlbihcclxuICAgICAgICAocmVzKSA9PiB7XHJcbiAgICAgICAgICBmaXJlYmFzZS5maXJlc3RvcmUuY29sbGVjdGlvbigndXNlcnMnKS5kb2MocmVzLnVpZCkuZ2V0KCkudGhlbihkb2MgPT4ge1xyXG4gICAgICAgICAgICBpZihkb2MuZXhpc3RzID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5sb2dpbmNoZWNrU2VydmljZS5hZGRVc2VyVG9GaXJlc3RvcmUocmVzLnVpZCwgbnVsbCwgbnVsbCwgcmVzLmVtYWlsLCByZXMuYWRkaXRpb25hbFVzZXJJbmZvLnByb2ZpbGVbJ2ZpcnN0X25hbWUnXSwgcmVzLmFkZGl0aW9uYWxVc2VySW5mby5wcm9maWxlWydsYXN0X25hbWUnXSwgbnVsbCwgbnVsbCwgMCwgMCwgcmVzLnBob3RvVVJMICsgXCI/aGVpZ2h0PTMwMFwiLCB0aGlzLmRldmljZVRva2VuKTtcclxuICAgICAgICAgICAgICB0aGlzLmxvZ2luY2hlY2tTZXJ2aWNlLmFkZFVzZXJUb0JyYWludHJlZShyZXMuZGlzcGxheU5hbWUsIHJlcy5kaXNwbGF5TmFtZSwgcmVzLmVtYWlsKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYoZG9jLmRhdGEoKS5wYXltZW50X2lkID09IG51bGwpIHtcclxuICAgICAgICAgICAgICB0aGlzLmxvZ2luY2hlY2tTZXJ2aWNlLmFkZFVzZXJUb0JyYWludHJlZShyZXMuZGlzcGxheU5hbWUsIHJlcy5kaXNwbGF5TmFtZSwgcmVzLmVtYWlsKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgIHRoaXMudXBkYXRlVG9rZW5zKHJlcy51aWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgdGhpcy5sb2dpbmNoZWNrU2VydmljZS5sb2dpblVzZXIocmVzLnVpZClcclxuICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnbmF2aWdhdGlvbiddLCB7Y2xlYXJIaXN0b3J5OiB0cnVlfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAoZXJyb3JNZXNzYWdlKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvck1lc3NhZ2UpO1xyXG4gICAgICAgICAgdGhpcy53Yy5uYXRpdmVFbGVtZW50LnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XHJcbiAgICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgfVxyXG5cclxufVxyXG4iLCIvLyB0aGlzIGltcG9ydCBzaG91bGQgYmUgZmlyc3QgaW4gb3JkZXIgdG8gbG9hZCBzb21lIHJlcXVpcmVkIHNldHRpbmdzIChsaWtlIGdsb2JhbHMgYW5kIHJlZmxlY3QtbWV0YWRhdGEpXHJcbmltcG9ydCB7IHBsYXRmb3JtTmF0aXZlU2NyaXB0RHluYW1pYyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3BsYXRmb3JtJztcclxuXHJcblxyXG5pbXBvcnQgeyBBcHBNb2R1bGUgfSBmcm9tICcuL2FwcC9hcHAubW9kdWxlJztcclxuaW1wb3J0IHtyZWdpc3RlckVsZW1lbnR9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9lbGVtZW50LXJlZ2lzdHJ5XCI7XHJcblxyXG5yZWdpc3RlckVsZW1lbnQoXCJSaXBwbGVcIiwgKCkgPT4gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1yaXBwbGVcIikuUmlwcGxlKTtcclxuLy8gaW1wb3J0IEFtcGxpZnkgZnJvbSBcIkBhd3MtYW1wbGlmeS9jb3JlXCI7XHJcbi8vIHJlcXVpcmUoJ25hdGl2ZXNjcmlwdC1ub2RlaWZ5JylcclxuLy8gaW1wb3J0IGF3c2NvbmZpZyBmcm9tICcuL2F3cy1leHBvcnRzJztcclxuXHJcbi8vIEFtcGxpZnkuY29uZmlndXJlKGF3c2NvbmZpZyk7XHJcblxyXG4vLyBBIHRyYWRpdGlvbmFsIE5hdGl2ZVNjcmlwdCBhcHBsaWNhdGlvbiBzdGFydHMgYnkgaW5pdGlhbGl6aW5nIGdsb2JhbCBvYmplY3RzLCBzZXR0aW5nIHVwIGdsb2JhbCBDU1MgcnVsZXMsIGNyZWF0aW5nLCBhbmQgbmF2aWdhdGluZyB0byB0aGUgbWFpbiBwYWdlLiBcclxuLy8gQW5ndWxhciBhcHBsaWNhdGlvbnMgbmVlZCB0byB0YWtlIGNhcmUgb2YgdGhlaXIgb3duIGluaXRpYWxpemF0aW9uOiBtb2R1bGVzLCBjb21wb25lbnRzLCBkaXJlY3RpdmVzLCByb3V0ZXMsIERJIHByb3ZpZGVycy4gXHJcbi8vIEEgTmF0aXZlU2NyaXB0IEFuZ3VsYXIgYXBwIG5lZWRzIHRvIG1ha2UgYm90aCBwYXJhZGlnbXMgd29yayB0b2dldGhlciwgc28gd2UgcHJvdmlkZSBhIHdyYXBwZXIgcGxhdGZvcm0gb2JqZWN0LCBwbGF0Zm9ybU5hdGl2ZVNjcmlwdER5bmFtaWMsIFxyXG4vLyB0aGF0IHNldHMgdXAgYSBOYXRpdmVTY3JpcHQgYXBwbGljYXRpb24gYW5kIGNhbiBib290c3RyYXAgdGhlIEFuZ3VsYXIgZnJhbWV3b3JrLlxyXG5wbGF0Zm9ybU5hdGl2ZVNjcmlwdER5bmFtaWMoKS5ib290c3RyYXBNb2R1bGUoQXBwTW9kdWxlKTtcclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9