module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		"bundle": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = global["webpackJsonp"] = global["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./main.ts","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

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

exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__("../node_modules/css-loader/index.js?!../node_modules/nativescript-theme-core/css/core.light.css"), "");

// module
exports.push([module.i, "/*\r\nIn NativeScript, the app.css file is where you place CSS rules that\r\nyou would like to apply to your entire application. Check out\r\nhttp://docs.nativescript.org/ui/styling for a full list of the CSS\r\nselectors and properties you can use to style UI components.\r\n\r\n/*\r\nIn many cases you may want to use the NativeScript core theme instead\r\nof writing your own CSS rules. For a full list of class names in the theme\r\nrefer to http://docs.nativescript.org/ui/theme.\r\n*/\r\n\r\nLabel {\r\n\ttext-align: center;\r\n}", ""]);

// exports
;
    if (false) {}


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
/* harmony import */ var _payments_payments_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./app/payments/payments.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./app/search/search.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'history', component: _history_history_component__WEBPACK_IMPORTED_MODULE_4__["HistoryComponent"] },
    { path: 'settings', component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_5__["SettingsComponent"] },
    { path: 'update', component: _update_update_component__WEBPACK_IMPORTED_MODULE_6__["UpdateComponent"] },
    { path: 'connect', component: _connect_connect_component__WEBPACK_IMPORTED_MODULE_7__["ConnectComponent"] },
    { path: 'loginroute', component: _loginroute_loginroute_component__WEBPACK_IMPORTED_MODULE_8__["LoginrouteComponent"] },
    { path: 'payments', component: _payments_payments_component__WEBPACK_IMPORTED_MODULE_9__["PaymentsComponent"] },
    { path: 'search', component: _search_search_component__WEBPACK_IMPORTED_MODULE_10__["SearchComponent"] }
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__("../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__("../node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__("../node_modules/@agm/core/index.js");
/* harmony import */ var _chat_chat_module__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__("./app/chat/chat.module.ts");
/* harmony import */ var ngx_paypal__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__("../node_modules/ngx-paypal/fesm5/ngx-paypal.js");
/* harmony import */ var nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__("../node_modules/nativescript-angular/forms/index.js");
/* harmony import */ var nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var nativescript_angular_http_client__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__("../node_modules/nativescript-angular/http-client/index.js");
/* harmony import */ var nativescript_angular_http_client__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_http_client__WEBPACK_IMPORTED_MODULE_30__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





























// Uncomment and add to NgModule imports if you need to use two-way binding

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper

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
                _search_search_component__WEBPACK_IMPORTED_MODULE_17__["SearchComponent"]
            ],
            imports: [
                nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_1__["NativeScriptModule"],
                _app_routing_module_tns__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                nativescript_angular_http_client__WEBPACK_IMPORTED_MODULE_30__["NativeScriptHttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_24__["ReactiveFormsModule"],
                nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_29__["NativeScriptFormsModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_25__["MatInputModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_26__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyAITxS1jmf8PMtazRguWcAfWQxW1kPOoYg'
                }),
                _chat_chat_module__WEBPACK_IMPORTED_MODULE_27__["ChatModule"],
                ngx_paypal__WEBPACK_IMPORTED_MODULE_28__["NgxPayPalModule"]
            ],
            providers: [_posting_service__WEBPACK_IMPORTED_MODULE_20__["PostingService"], _datatransfer_service__WEBPACK_IMPORTED_MODULE_22__["TransferService"], _dynamic_add_service__WEBPACK_IMPORTED_MODULE_23__["DynamicAddService"], _user_service__WEBPACK_IMPORTED_MODULE_21__["UserService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            entryComponents: [_posting_posting_component__WEBPACK_IMPORTED_MODULE_13__["PostingComponent"], _payment_method_payment_method_component__WEBPACK_IMPORTED_MODULE_6__["PaymentMethodComponent"]],
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

/***/ "./app/chat/chat.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./app/chat/chat.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  chat works!\r\n</p>\r\n"

/***/ }),

/***/ "./app/chat/chat.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
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

var ChatComponent = /** @class */ (function () {
    function ChatComponent() {
    }
    ChatComponent.prototype.ngOnInit = function () {
    };
    ChatComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chat',
            template: __webpack_require__("./app/chat/chat.component.html"),
            styles: [__webpack_require__("./app/chat/chat.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ChatComponent);
    return ChatComponent;
}());



/***/ }),

/***/ "./app/chat/chat.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatModule", function() { return ChatModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _chat_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/chat/chat.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ChatModule = /** @class */ (function () {
    function ChatModule() {
    }
    ChatModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [_chat_component__WEBPACK_IMPORTED_MODULE_2__["ChatComponent"]]
        })
    ], ChatModule);
    return ChatModule;
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

/***/ "./app/history/history.component.css":
/***/ (function(module, exports) {

module.exports = "/*\nAdd your NativeScript specific styles here.\nTo learn more about styling in NativeScript see:\nhttps://docs.nativescript.org/angular/ui/styling\n*/"

/***/ }),

/***/ "./app/history/history.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navigation></app-navigation>\r\n<StackLayout>\r\n  <Label text=\"history works\" textWrap=\"true\"></Label>\r\n  <Label text=\"This is a migrated component\" textWrap=\"true\"></Label>\r\n  <Label text=\"Update it to provide the UI elements required in your mobile app\" textWrap=\"true\"></Label>\r\n</StackLayout>\r\n\r\n<!--\r\nOriginal Web template:\r\n\r\n<app-navigation></app-navigation>\r\n\r\n<div class=\"right-background\">\r\n\t<div class=\"user-card-right info\">\r\n\t\t<img src=\"src/img/sample_profile.jpg\" alt=\"Profile Photo\" id=\"profile_pic\">\r\n\t\t<div id=\"name_info\">\r\n\t\t\t<h3 id=\"username\">{{user.name}}</h3>\r\n\t\t\t<h3 id=\"user_university\">University of Virginia</h3>\r\n\t\t</div>\r\n\t\t<div class=\"userStats\">\r\n\t\t\t<span id=\"user_rides_given\" class=\"userData\">Rides Given: </span>\r\n\t\t\t<span id=\"num_rides_given\"></span>\r\n\t\t\t<span id=\"user_rides_received\" class=\"userData\">Rides Received: </span>\r\n\t\t\t<span id=\"num_rides_received\"></span>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<div id=\"history\" class=\"tabcontent\">\r\n\t<h3 align=\"center\">Your Rides</h3>\r\n\t<div id=\"bigfeed\" (window:resize)=\"onResize($event)\"></div>\r\n</div>\r\n-->"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HistoryComponent = /** @class */ (function () {
    function HistoryComponent(logincheckService, transferService, router, postingService, addService) {
        this.logincheckService = logincheckService;
        this.transferService = transferService;
        this.router = router;
        this.postingService = postingService;
        this.addService = addService;
        this.username = "2022ayee";
        //user = this.logincheckService.getUser();
        this.user = null;
        this.name = "Adam Yee";
        this.blocks = 0;
    }
    HistoryComponent.prototype.ngOnInit = function () {
        this.rides = [];
        //this.logincheckService.loginCheck();
        //this.loginCheck();
        //this.loadPostings();
        //this.loadViews();
    };
    HistoryComponent.prototype.loadViews = function () {
        if (window.innerWidth < 1075)
            document.getElementsByClassName('right-background')[0].style.visibility = "hidden";
        var feedSize = window.innerWidth - 424;
        document.getElementById('history').style.width = String(feedSize) + "px";
        document.getElementById('num_rides_given').innerHTML = this.user.rides_given;
        document.getElementById('num_rides_received').innerHTML = this.user.rides_received;
    };
    HistoryComponent.prototype.onResize = function (event) {
        //console.log(event.target.innerWidth);
        var feedSize = event.target.innerWidth - 424;
        document.getElementById('history').style.width = String(feedSize) + "px";
        //this.loadPostings();
        if (event.target.innerWidth < 1075)
            document.getElementsByClassName('right-background')[0].style.visibility = "hidden";
        else
            document.getElementsByClassName('right-background')[0].style.visibility = "visible";
    };
    HistoryComponent.prototype.loginCheck = function () {
        if (this.user == null)
            this.username = "2022ayee";
        //this.router.navigateByUrl('/login');
        else
            this.username = this.user.username;
    };
    HistoryComponent.prototype.cleanFeed = function () {
        var myNode = document.getElementById("bigfeed");
        while (myNode.firstChild) {
            myNode.removeChild(myNode.firstChild);
        }
    };
    HistoryComponent.prototype.loadPostings = function () {
        var _this = this;
        this.cleanFeed();
        this.postingService.getPostings()
            .subscribe(function (data) {
            _this.p = data;
            _this.blocks = 0;
            for (var i = 0; i < _this.p.length; i++) {
                if (_this.p[i].user == _this.username) {
                    _this.rides.push(_this.p[i]);
                    _this.createPosting(_this.p[i]._id, _this.p[i].user, _this.p[i].startadr, _this.p[i].endadr, _this.p[i].date, _this.p[i].cost, _this.p[i].capacity, _this.p[i].comments);
                }
            }
        });
    };
    HistoryComponent.prototype.createPosting = function (id, user, startadr, endadr, date, cost, capacity, comments) {
        this.transferService.setData([{ "index": this.blocks, "id": id, "user": user, "startadr": startadr, "endadr": endadr, "date": date, "cost": cost, "capacity": capacity, "comments": comments, "buttonType": "Update" }]);
        this.addService.appendComponentToBody();
        this.blocks++;
    };
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

module.exports = "/*\nAdd your NativeScript specific styles here.\nTo learn more about styling in NativeScript see:\nhttps://docs.nativescript.org/angular/ui/styling\n*/\n\n.actionbar {\n\tfont-size: 22;\n\tfont-weight: 700;\n\ttext-align: left;\n\tcolor: black;\n}"

/***/ }),

/***/ "./app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <ActionBar title=\"Home\" class=\"actionbar\">\r\n\t<NavigationButton ios:visibility=\"collapsed\" icon=\"~/img/menu-icon.png\" (tap)=\"showSideDrawer()\" ></NavigationButton>\r\n<ActionItem android:visibility=\"collapsed\" icon=\"~/img/menu-icon.png\" ios.position=\"left\" (tap)=\"showSideDrawer()\" ></ActionItem>\r\n</ActionBar> -->\r\n\r\n<ScrollView>\r\n\t<StackLayout id=\"feed\">\r\n<!-- \t  <Label text=\"home works\" textWrap=\"true\"></Label>\r\n\t  <Label text=\"This is a migrated component\" textWrap=\"true\"></Label>\r\n\t  <Label text=\"Update it to provide the UI elements required in your mobile app\" textWrap=\"true\"></Label> -->\r\n\t</StackLayout>\r\n</ScrollView>\r\n<app-navigation></app-navigation>\r\n<!--\r\nOriginal Web template:\r\n\r\n<app-navigation></app-navigation>\r\n<div id=\"myModal\" class = \"modal\">\r\n  <!-- Modal content ->\r\n  <div class=\"modal-content\">\r\n    <span class=\"close\">&times;</span>\r\n    <div class=\"modaltab\">\r\n      <button class=\"modaltablinks\" (click)=\"changeModalTab($event, 'Request')\" id=\"defaultModalTab\">Ride</button>\r\n\t  <button class=\"modaltablinks\" (click)=\"changeModalTab($event, 'Offer')\">Drive</button>\r\n\t</div>\r\n\t<div id=\"Offer\" class=\"modaltabcontent\">\r\n\t    <form class=\"form\">\r\n\t\t\tDeparture date:<br>\r\n\t\t\t<input type=\"datetime-local\" name=\"departure\" id=\"departureOffer\" required><br><br>\r\n\t\t\tPick up address:<br>\r\n\t\t\t<input type=\"text\" class=\"address_text\" name=\"pickup\" id=\"pickupOffer\" required><br><br>\r\n\t\t\tDestination address:<br>\r\n\t\t\t<input type=\"text\" class=\"address_text\" name=\"destination\" id=\"destinationOffer\" required><br><br>\r\n\t\t\tCapacity:\r\n\t\t\t<input type=\"text\" name=\"capacity\" id=\"capacityOffer\" required>\r\n\t\t\tPrice:\r\n\t\t\t<input type=\"text\" name=\"price\" id=\"priceOffer\" required><br><br>\r\n\t\t\tAdditional Comments:<br><br>\r\n\t\t\t<textarea id=\"commentsOffer\"></textarea>\r\n\t\t</form>\r\n\t\t<button class=\"submitbutton\" (click)=\"submit('offer')\">Post</button>\r\n\t</div>\r\n\t<div id=\"Request\" class=\"modaltabcontent\">\r\n\t    <form class=\"form\">\r\n\t    \tDeparture date:<br>\r\n\t\t\t<input type=\"datetime-local\" name=\"departure\" id=\"departureRequest\" required><br><br>\r\n\t\t\tPick up address:<br>\r\n\t\t\t<input type=\"text\" class=\"address_text\" name=\"pickup\" id=\"pickupRequest\" required><br><br>\r\n\t\t\tDestination address:<br>\r\n\t\t\t<input type=\"text\" class=\"address_text\" name=\"destination\" id=\"destinationRequest\" required><br><br>\r\n\t\t\tAdditional Comments:<br><br>\r\n\t\t\t<textarea id=\"commentsRequest\"></textarea>\r\n\t\t</form>\r\n\t\t<button class=\"submitbutton\" (click)=\"submit('request')\">Post</button>\r\n\t</div>\r\n  </div>\r\n\r\n</div>\r\n<div class=\"right-background\">\r\n\t<div class=\"info\">\r\n\t\t<img src=\"src/img/sample_profile.jpg\" alt=\"Profile Photo\" id=\"profile_pic\">\r\n\t\t<div id=\"name_info\">\r\n\t\t\t<h3 id=\"username\"></h3>\r\n\t\t\t<h3 id=\"user_university\">University of Virginia</h3>\r\n\t\t</div>\r\n\t\t<div class=\"userStats\">\r\n\t\t\t<span id=\"user_rides_given\" class=\"userData\">Rides Given: </span>\r\n\t\t\t<span id=\"num_rides_given\"></span>\r\n\t\t\t<span id=\"user_rides_received\" class=\"userData\">Rides Received: </span>\r\n\t\t\t<span id=\"num_rides_received\"></span>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<!-- Tab content ->\r\n<div id=\"Feed\" class=\"tabcontent\">\r\n  <div id=\"news_header\">\r\n<!--   <div id=\"dots\">...</div> ->\r\n\t<img src=\"src/img/filter_icon.png\" id=\"filter_icon\"></div>\r\n \t<div id=\"bigfeed\" (window:resize)=\"onResize($event)\">\r\n\r\n\t</div>\r\n</div>\r\n\r\n-->"

/***/ }),

/***/ "./app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _datatransfer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/datatransfer.service.ts");
/* harmony import */ var _dynamic_add_service_tns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/dynamic-add.service.tns.ts");
/* harmony import */ var tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/tns-core-modules/ui/page/page.js");
/* harmony import */ var tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _user_service_tns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/user.service.tns.ts");
/* harmony import */ var _posting_service_tns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./app/posting.service.tns.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomeComponent = /** @class */ (function () {
    function HomeComponent(transferService, addService, page, userService, postingService) {
        this.transferService = transferService;
        this.addService = addService;
        this.page = page;
        this.userService = userService;
        this.postingService = postingService;
        this.blocks = 1;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.loadPostings();
    };
    HomeComponent.prototype.showSideDrawer = function () {
        //const drawer = <RadSideDrawer>this.sd.nativeView;
        //console.dir(drawer);
        //console.dir(this.page);
        // drawer.showDrawer();
    };
    HomeComponent.prototype.loadPostings = function () {
        var _this = this;
        this.postingService.getPostings()
            .subscribe(function (data) {
            _this.p = data;
            _this.blocks = 0;
            for (var i = 0; i < _this.p.length; i++) {
                _this.createPosting(_this.p[i]._id, _this.p[i].user, _this.p[i].startadr, _this.p[i].endadr, _this.p[i].date, _this.p[i].cost, _this.p[i].capacity, _this.p[i].comments);
            }
        });
    };
    HomeComponent.prototype.createPosting = function (id, user, startadr, endadr, date, cost, capacity, comments) {
        this.transferService.setData([{ "index": this.blocks, "id": id, "user": user, "startadr": startadr, "endadr": endadr, "date": date, "cost": cost, "capacity": capacity, "comments": comments, "buttonType": "Connect" }]);
        this.addService.appendComponentToBody(this.page.getViewById('feed'));
        this.blocks++;
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            providers: [_dynamic_add_service_tns__WEBPACK_IMPORTED_MODULE_2__["DynamicAddService"]],
            template: __webpack_require__("./app/home/home.component.html"),
            styles: [__webpack_require__("./app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_datatransfer_service__WEBPACK_IMPORTED_MODULE_1__["TransferService"], _dynamic_add_service_tns__WEBPACK_IMPORTED_MODULE_2__["DynamicAddService"], tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_3__["Page"],
            _user_service_tns__WEBPACK_IMPORTED_MODULE_4__["UserService"], _posting_service_tns__WEBPACK_IMPORTED_MODULE_5__["PostingService"]])
    ], HomeComponent);
    return HomeComponent;
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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, page) {
        this.router = router;
        this.page = page;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
    };
    LoginComponent.prototype.toLogIn = function () {
        this.router.navigate(['home']);
        // window.location.href='https://collegepooling.auth.us-east-2.amazoncognito.com/login?response_type=token&client_id=4sslmmgv9pn5lb5087aaj5r599&redirect_uri=http://localhost:4200/loginroute&state=STATE&scope=aws.cognito.signin.user.admin+openid';
    };
    LoginComponent.prototype.toSignUp = function () {
        this.router.navigate(['home']);
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

/***/ "./app/logincheck.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogincheckService", function() { return LogincheckService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _payment_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/payment.service.ts");
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
    LogincheckService.prototype.clearInfo = function () {
        this.user = null;
        this.userInfo = null;
        this.users = null;
        this.myStorage.clear();
    };
    LogincheckService.prototype.addUserToBraintree = function () {
        var _this = this;
        this.paymentService.addPaymentUser(this.user.id, this.user.username, this.user.name, this.user.email).subscribe(function (data) {
            _this.userService.updateUser(_this.user._id, _this.user.name, _this.user.username, _this.user.address, _this.user.birthdate, _this.user.email, _this.user.gender, _this.user.phone_number, _this.user.rides_given, _this.user.rides_received, data.customer.id)
                .subscribe(function () {
                _this.user.payment_id = data.customer.id;
                _this.myStorage.setItem('payment_id', _this.user.payment_id);
                console.log(_this.user);
            });
        });
        // this.paymentService.getPaymentUserById('258703956').subscribe((data: any) => {
        // 	console.log(data);
        // })
        console.log('added to braintree');
    };
    LogincheckService.prototype.decodeToken = function (idToken) {
        var helper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_1__["JwtHelperService"]();
        var decodedToken = helper.decodeToken(idToken);
        var expirationDate = helper.getTokenExpirationDate(idToken);
        var isExpired = helper.isTokenExpired(idToken);
        console.log(decodedToken);
        if (decodedToken == null)
            this.router.navigateByUrl('/login');
        this.userInfo = decodedToken;
    };
    LogincheckService.prototype.checkUser = function () {
        var _this = this;
        this.userService.getUsers()
            .subscribe(function (data) {
            _this.users = data;
            var isUser = false;
            for (var i = 0; i < _this.users.length; i++) {
                if (_this.userInfo['cognito:username'] == _this.users[i].username) {
                    isUser = true;
                    _this.user = _this.users[i];
                }
            }
            if (!isUser) {
                _this.userService.addUser(_this.userInfo.name, _this.userInfo['cognito:username'], _this.userInfo.address.formatted, _this.userInfo.birthdate, _this.userInfo.email, _this.userInfo.gender, _this.userInfo.phone_number)
                    .subscribe(function () {
                    _this.userService.getUsers()
                        .subscribe(function (data) {
                        _this.users = data;
                        for (var i = 0; i < _this.users.length; i++) {
                            if (_this.userInfo['cognito:username'] == _this.users[i].username) {
                                _this.user = _this.users[i];
                            }
                        }
                        _this.addUserToBraintree();
                        _this.setLocalStorage();
                        _this.router.navigateByUrl('/home');
                    });
                });
            }
            else {
                if (_this.user.payment_id == '' || _this.user.payment_id == null) {
                    _this.addUserToBraintree();
                }
                _this.setLocalStorage();
                _this.router.navigateByUrl('/home');
            }
        });
    };
    LogincheckService.prototype.setLocalStorage = function () {
        this.myStorage.setItem('_id', this.user._id);
        this.myStorage.setItem('name', this.user.name);
        this.myStorage.setItem('username', this.user.username);
        this.myStorage.setItem('address', this.user.address);
        this.myStorage.setItem('birthdate', this.user.birthdate);
        this.myStorage.setItem('email', this.user.email);
        this.myStorage.setItem('gender', this.user.gender);
        this.myStorage.setItem('phone_number', this.user.phone_number);
        this.myStorage.setItem('rides_given', this.user.rides_given);
        this.myStorage.setItem('rides_received', this.user.rides_received);
        this.myStorage.setItem('payment_id', this.user.payment_id);
    };
    LogincheckService.prototype.getUserFromLocalStorage = function () {
        this.user = {
            "_id": this.myStorage.getItem('_id'),
            "name": this.myStorage.getItem('name'),
            "username": this.myStorage.getItem('username'),
            "address": this.myStorage.getItem('address'),
            "birthdate": this.myStorage.getItem('birthdate'),
            "email": this.myStorage.getItem('email'),
            "gender": this.myStorage.getItem('gender'),
            "phone_number": this.myStorage.getItem('phone_number'),
            "rides_given": this.myStorage.getItem('rides_given'),
            "rides_received": this.myStorage.getItem('rides_received'),
            "payment_id": this.myStorage.getItem('payment_id')
        };
    };
    LogincheckService.prototype.getUser = function () {
        if (this.user == null) {
            this.getUserFromLocalStorage();
        }
        return this.user;
    };
    LogincheckService.prototype.loginCheck = function () {
        //if(this.userInfo == null && window.localStorage.getItem('_id') == null)
        this.router.navigateByUrl('/login');
    };
    LogincheckService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _payment_service__WEBPACK_IMPORTED_MODULE_4__["PaymentService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
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

/***/ "./app/navigation/navigation.component.tns.css":
/***/ (function(module, exports) {

module.exports = "/*\nAdd your NativeScript specific styles here.\nTo learn more about styling in NativeScript see:\nhttps://docs.nativescript.org/angular/ui/styling\n*/"

/***/ }),

/***/ "./app/navigation/navigation.component.tns.html":
/***/ (function(module, exports) {

module.exports = "<TabView [(ngModel)]=\"tabSelectedIndex\" (selectedIndexChanged)=\"onSelectedIndexChanged($event)\" androidTabsPosition=\"bottom\" selectedTabTextColor=\"#ac00e6\">\r\n    <StackLayout *tabItem=\"homeTab\">\r\n    </StackLayout>\r\n    <StackLayout *tabItem=\"searchTab\">\r\n    </StackLayout>\r\n    <StackLayout *tabItem=\"historyTab\">\r\n    </StackLayout>\r\n    <StackLayout *tabItem=\"settingsTab\">\r\n    </StackLayout>\r\n</TabView>\r\n\r\n<!--\r\nOriginal Web template:\r\n\r\n<div class=\"topnav\">\r\n\t<div class=\"navbtns\">\r\n\t\t<a (click)=\"toHome()\" class=\"active navigation\" id=\"homenav\">Home</a>\r\n\t\t<a (click)=\"toHistory()\" class=\"navigation\" id=\"historynav\">History</a>\r\n\t\t<a (click)=\"toPayments()\" class=\"navigation\" id=\"paymentsnav\">Payments</a>\r\n\t\t<a (click)=\"toSettings()\" class=\"navigation\" id=\"settingsnav\">Settings</a>\r\n\t\t<a (click)=\"post()\" class=\"navigation\" id=\"postnav\">Post</a>\r\n\t</div>\r\n\r\n\t<div class=\"imgnav\">\r\n\t\t<img src=\"src/icon.png\" (click)=\"dropMenu()\">\r\n\t</div>\r\n</div>\r\n\r\n<div class=\"caret\" id=\"dropdown-caret\"></div>\r\n<div class=\"dropdown\" id=\"dropdown-menu\">\r\n\t<div class=\"dropdown-option\" (click)=\"toHome()\">\r\n\t\t<span>Home</span>\r\n\t</div>\r\n\t<div class=\"dropdown-option\" (click)=\"toSettings()\">\r\n\t\t<span>Settings</span>\r\n\t</div>\r\n\t<div class=\"dropdown-option\" (click)=\"logout()\">\r\n\t\t<span>Logout</span>\r\n\t</div>\r\n\t<div class=\"dropdown-option group-two\" (click)=\"dropMenu()\">\r\n\t\t<span>Close</span>\r\n\t</div>\r\n</div>\r\n\r\n-->"

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
        this.homeTab = { iconSource: 'res://home_highlighted' };
        this.searchTab = { iconSource: 'res://search' };
        this.historyTab = { iconSource: 'res://history' };
        this.settingsTab = { iconSource: 'res://settings' };
    }
    NavigationComponent.prototype.ngOnInit = function () {
        this.activebtn = this.transferService.getData();
        if (this.activebtn == "homenav") {
            this.homeTab = { iconSource: 'res://home_highlighted' };
            this.searchTab = { iconSource: 'res://search' };
            this.historyTab = { iconSource: 'res://history' };
            this.settingsTab = { iconSource: 'res://settings' };
            this.tabSelectedIndex = 0;
        }
        else if (this.activebtn == "searchnav") {
            this.homeTab = { iconSource: 'res://home' };
            this.searchTab = { iconSource: 'res://search_highlighted' };
            this.historyTab = { iconSource: 'res://history' };
            this.settingsTab = { iconSource: 'res://settings' };
            this.tabSelectedIndex = 1;
        }
        else if (this.activebtn == "historynav") {
            this.homeTab = { iconSource: 'res://home' };
            this.searchTab = { iconSource: 'res://search' };
            this.historyTab = { iconSource: 'res://history_highlighted' };
            this.settingsTab = { iconSource: 'res://settings' };
            this.tabSelectedIndex = 2;
        }
        else if (this.activebtn == "settingsnav") {
            this.homeTab = { iconSource: 'res://home' };
            this.searchTab = { iconSource: 'res://search' };
            this.historyTab = { iconSource: 'res://history' };
            this.settingsTab = { iconSource: 'res://settings_highlighted' };
            this.tabSelectedIndex = 3;
        }
        // else if(this.activebtn == 'post')
        // 	document.getElementById('myModal').style.display = "block";
        // else
        // 	this.paintActive(this.activebtn);
        //var route = this.router.router + 'nav';
        //this.activebtn = route.substring(1);
        //console.log(this.activebtn);
        //this.paintActive(this.activebtn);
        //this.user = this.logincheckService.getUser();
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
                this.toHome();
            }
            else if (newIndex === 1) {
                this.toSearch();
            }
            else if (newIndex === 2) {
                this.toHistory();
            }
            else if (newIndex === 3) {
                this.toSettings();
            }
        }
    };
    NavigationComponent.prototype.toHome = function () {
        this.transferService.setData('homenav');
        this.router.navigate(['home']);
    };
    NavigationComponent.prototype.toHistory = function () {
        this.transferService.setData('historynav');
        this.router.navigate(['history']);
    };
    NavigationComponent.prototype.toSettings = function () {
        this.transferService.setData('settingsnav');
        this.router.navigate(['settings']);
    };
    NavigationComponent.prototype.toSearch = function () {
        this.transferService.setData('searchnav');
        this.router.navigate(['search']);
    };
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
        this.uri = 'http://localhost:4000';
    }
    PaymentService.prototype.addPaymentUser = function (id, username, name, email) {
        return this.http.get(this.uri + "/customers/add/" + username);
    };
    PaymentService.prototype.getPaymentUserById = function (id) {
        return this.http.get(this.uri + "/customers/" + id);
    };
    PaymentService.prototype.addPaymentMethodToUser = function (id, nonce) {
        var body = {
            id: id,
            nonce: nonce
        };
        return this.http.post(this.uri + "/customers/payment/", body);
    };
    PaymentService.prototype.removePaymentMethodFromUser = function (token) {
        return this.http.get(this.uri + "/customers/payment/remove/" + token);
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

module.exports = "#form {\r\n    margin: auto;\r\n    width: 600px;\r\n    height: 400px;\r\n    background-color: #ffffff;\r\n    position: relative;\r\n    top: 30px;\r\n    border-radius: 4px;\r\n    box-shadow: 0 1px 4px 0 rgba(0,0,0,0.37);\r\n}\r\n\r\n#payment-form {\r\n    margin: auto;\r\n    width: 600px;\r\n    height: 400px;\r\n    background-color: #ffffff;\r\n    position: relative;\r\n    top: 30px;\r\n    border-radius: 4px;\r\n    box-shadow: 0 1px 4px 0 rgba(0,0,0,0.37);\r\n    display: none;\r\n}\r\n\r\n#card-form {\r\n    margin: auto;\r\n    width: 400px;\r\n    background-color: #580968;\r\n    position: relative;\r\n    top: 25%;\r\n    box-shadow: 0 1px 4px 0 rgba(0,0,0,0.37);\r\n    font-weight: 400;\r\n    z-index: 1;\r\n}\r\n\r\n#paypal-form {\r\n    margin: auto;\r\n    width: 400px;\r\n    height: 200px;\r\n    background-color: #ffffff;\r\n    position: relative;\r\n    top: 25%;\r\n    box-shadow: 0 1px 4px 0 rgba(0,0,0,0.37);\r\n    font-weight: 400;\r\n    z-index: 1;\r\n}\r\n\r\n#venmo-form {\r\n    margin: auto;\r\n    width: 400px;\r\n    height: 200px;\r\n    background-color: #ffffff;\r\n    position: relative;\r\n    top: 25%;\r\n    box-shadow: 0 1px 4px 0 rgba(0,0,0,0.37);\r\n    font-weight: 400;\r\n    z-index: 1;\r\n}\r\n\r\n#error-form {\r\n    margin: auto;\r\n    width: 400px;\r\n    height: 200px;\r\n    background-color: #ffffff;\r\n    position: relative;\r\n    top: 25%;\r\n    box-shadow: 0 1px 4px 0 rgba(0,0,0,0.37);\r\n    font-weight: 400;\r\n    z-index: 1;\r\n}\r\n\r\n#edit-form {\r\n    margin: auto;\r\n    width: 400px;\r\n    height: 200px;\r\n    background-color: #ffffff;\r\n    position: relative;\r\n    top: 25%;\r\n    box-shadow: 0 1px 4px 0 rgba(0,0,0,0.37);\r\n    font-weight: 400;\r\n    z-index: 1;\r\n}\r\n\r\n.payment-methods {\r\n\toverflow: hidden;\r\n    width: 300px;\r\n    margin: auto;\r\n    margin-left: 40px;\r\n}\r\n\r\n#modal-payment-methods {\r\n\tmargin-left: 24px;\r\n}\r\n\r\n#paypal-header-container {\r\n\tbackground-color: #580968;\r\n}\r\n\r\n#error-header-container {\r\n\tdisplay: none;\r\n\tbackground-color: #890000;\r\n}\r\n\r\n#edit-header-container {\r\n\tbackground-color: #580968;\r\n}\r\n\r\n.colored-header {\r\n\tcolor: white;\r\n\tfont-weight: 400;\r\n}\r\n\r\n#method-information-text {\r\n\tmargin-left: 40px;\r\n\tmargin-top: 32px;\r\n\tfont-size: 16px;\r\n}\r\n\r\n.payment-footer-button{\r\n    display: inline-block;\r\n    background-color: #ffffff;\r\n    color: #ac00e6;\r\n    border: none;\r\n    outline: none;\r\n    text-align: center;\r\n    margin-left: 34px;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n#paypal-button {\r\n\twidth: 350px;\r\n\tmargin: auto;\r\n\tmargin-top: 32px;\r\n}\r\n\r\n#add-card-button {\r\n\tfloat: right;\r\n\tmargin-right: 34px;\r\n\tdisplay: none;\r\n}\r\n\r\n#remove-payment-button {\r\n\tfloat: right;\r\n\tmargin-right: 34px;\r\n}\r\n\r\n.plus-sign {\r\n\tvertical-align: middle;\r\n\tfont-size: 30px;\r\n\tmargin-right: 7px;\r\n\tcursor: pointer;\r\n}\r\n\r\n.payment-footer-text {\r\n\tvertical-align: middle;\r\n\tline-height: 42px;\r\n\tfont-weight: 400;\r\n\tfont-size: 13px;\r\n\tcursor: pointer;\r\n}\r\n\r\n.payment-footer-text:hover {\r\n\ttext-decoration: underline;\r\n}\r\n\r\n.payments-bottom-add-container {\r\n\tposition: absolute;\r\n\twidth: 100%;\r\n\tbottom: 0;\r\n}\r\n\r\n/* Other modal styling in styles.css */\r\n.close-modal {\r\n\tfont-size: 24px;\r\n\tmargin-right: 20px;\r\n\tcursor: pointer;\r\n}\r\n\r\n/*--------------------\r\nShared Variables\r\n--------------------*/\r\n/*--------------------\r\nGeneral\r\n--------------------*/\r\nhtml,\r\nbody {\r\n  font-size: 100%;\r\n  height: 100%;\r\n  color: #282c37;\r\n  font-family: sans-serif;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n.form-container {\r\n  display: flex;\r\n  background-color: #EEE;\r\n  justify-content: center;\r\n  align-items: center;\r\n  height: 100%;\r\n  flex-direction: column;\r\n  border: 1em solid #fff;\r\n  box-sizing: border-box;\r\n  position: relative;\r\n}\r\n@media (max-width: 476px) {\r\n  .form-container {\r\n    border: none;\r\n  }\r\n}\r\n\r\n.cardinfo-wrapper {\r\n  display: flex;\r\n  justify-content: space-around;\r\n}\r\n\r\n.bg-illustration {\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 0;\r\n  z-index: 0;\r\n}\r\n.bg-illustration svg {\r\n  width: 100%;\r\n}\r\n\r\n.card-shape, #my-sample-form.visa, #my-sample-form.master-card, #my-sample-form.maestro, #my-sample-form.american-express, #my-sample-form.discover, #my-sample-form.unionpay, #my-sample-form.jcb, #my-sample-form.diners-club {\r\n  border-radius: 6px;\r\n  padding: 2em 2em 1em;\r\n}\r\n@media (max-width: 476px) {\r\n  .card-shape, #my-sample-form.visa, #my-sample-form.master-card, #my-sample-form.maestro, #my-sample-form.american-express, #my-sample-form.discover, #my-sample-form.unionpay, #my-sample-form.jcb, #my-sample-form.diners-club {\r\n    padding: 2em 1.5em 1em;\r\n  }\r\n}\r\n\r\n#payment-card-form {\r\n  background-color: #FFF;\r\n  /*box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12);*/\r\n  padding: 1em 3em 3em;\r\n  margin-bottom: 2em;\r\n  transition: all 600ms cubic-bezier(0.2, 1.3, 0.7, 1);\r\n  -webkit-animation: cardIntro 500ms cubic-bezier(0.2, 1.3, 0.7, 1);\r\n          animation: cardIntro 500ms cubic-bezier(0.2, 1.3, 0.7, 1);\r\n  /*z-index: 1;*/\r\n}\r\n#my-sample-form:hover {\r\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.06);\r\n}\r\n@media (max-width: 476px) {\r\n  #my-sample-form {\r\n    box-sizing: border-box;\r\n    padding: 7em 2em 2em;\r\n    width: 100%;\r\n  }\r\n}\r\n#my-sample-form.visa {\r\n  color: #fff;\r\n  background-color: #0D4AA2;\r\n}\r\n#my-sample-form.master-card {\r\n  color: #fff;\r\n  background-color: #363636;\r\n  background: linear-gradient(115deg, #d82332, #d82332 50%, #f1ad3d 50%, #f1ad3d);\r\n}\r\n#my-sample-form.maestro {\r\n  color: #fff;\r\n  background-color: #363636;\r\n  background: linear-gradient(115deg, #009ddd, #009ddd 50%, #ed1c2e 50%, #ed1c2e);\r\n}\r\n#my-sample-form.american-express {\r\n  color: #fff;\r\n  background-color: #007CC3;\r\n}\r\n#my-sample-form.discover {\r\n  color: #fff;\r\n  background-color: #ff6000;\r\n  background: linear-gradient(#d14310, #f7961e);\r\n}\r\n#my-sample-form.unionpay, #my-sample-form.jcb, #my-sample-form.diners-club {\r\n  color: #fff;\r\n  background-color: #363636;\r\n}\r\n\r\n.cardinfo-label {\r\n  display: block;\r\n  font-size: 11px;\r\n  margin-bottom: 0.5em;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.cardinfo-exp-date {\r\n  margin-right: 1em;\r\n  width: 100%;\r\n}\r\n\r\n.cardinfo-cvv {\r\n  width: 100%;\r\n}\r\n\r\n.cardinfo-card-number {\r\n  position: relative;\r\n}\r\n\r\n#card-image {\r\n  position: absolute;\r\n  top: 2em;\r\n  right: 1em;\r\n  width: 44px;\r\n  height: 28px;\r\n  background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/346994/card_sprite.png);\r\n  background-size: 86px 458px;\r\n  border-radius: 4px;\r\n  background-position: -100px 0;\r\n  background-repeat: no-repeat;\r\n  margin-bottom: 1em;\r\n}\r\n#card-image.visa {\r\n  background-position: 0 -398px;\r\n}\r\n#card-image.master-card {\r\n  background-position: 0 -281px;\r\n}\r\n#card-image.american-express {\r\n  background-position: 0 -370px;\r\n}\r\n#card-image.discover {\r\n  background-position: 0 -163px;\r\n}\r\n#card-image.maestro {\r\n  background-position: 0 -251px;\r\n}\r\n#card-image.jcb {\r\n  background-position: 0 -221px;\r\n}\r\n#card-image.diners-club {\r\n  background-position: 0 -133px;\r\n}\r\n\r\n/*--------------------\r\nInputs \r\n--------------------*/\r\n.input-wrapper {\r\n  border-radius: 2px;\r\n  background: rgba(255, 255, 255, 0.86);\r\n  height: 2.75em;\r\n  border: 1px solid #eee;\r\n  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.06);\r\n  padding: 5px 10px;\r\n  margin-bottom: 1em;\r\n}\r\n\r\n.cardinfo-card-number,\r\n.cardinfo-exp-date,\r\n.cardinfo-cvv {\r\n  transition: -webkit-transform 0.3s;\r\n  transition: transform 0.3s;\r\n  transition: transform 0.3s, -webkit-transform 0.3s;\r\n}\r\n\r\n.braintree-hosted-fields-focused {\r\n  border-color: #5db6e8;\r\n}\r\n\r\n.braintree-hosted-fields-invalid {\r\n  border-color: #E53A40;\r\n  -webkit-animation: shake 500ms cubic-bezier(0.2, 1.3, 0.7, 1) both;\r\n          animation: shake 500ms cubic-bezier(0.2, 1.3, 0.7, 1) both;\r\n  -webkit-transform: translate3d(0, 0, 0);\r\n          transform: translate3d(0, 0, 0);\r\n  -webkit-backface-visibility: hidden;\r\n          backface-visibility: hidden;\r\n  -webkit-perspective: 1000px;\r\n          perspective: 1000px;\r\n}\r\n\r\n.loader {\r\n  border: 16px solid #f3f3f3; /* Light grey */\r\n  border-top: 16px solid #ac00e6; /* Purple */\r\n  border-radius: 50%;\r\n  width: 120px;\r\n  height: 120px;\r\n  animation: spin 2s linear infinite;\r\n  margin: auto;\r\n}\r\n\r\n#loading-circle {\r\n  top: 12%;\r\n  left: 30%;\r\n  position: absolute;\r\n}\r\n\r\n#list-loading-circle {\r\n\tmargin-top: 50px;\r\n}\r\n\r\n/*--------------------\r\nAnimations\r\n--------------------*/\r\n@keyframes spin {\r\n  0% { transform: rotate(0deg); }\r\n  100% { transform: rotate(360deg); }\r\n}\r\n\r\n@-webkit-keyframes shake {\r\n  10%,\r\n  90% {\r\n    -webkit-transform: translate3d(-1px, 0, 0);\r\n            transform: translate3d(-1px, 0, 0);\r\n  }\r\n  20%,\r\n  80% {\r\n    -webkit-transform: translate3d(1px, 0, 0);\r\n            transform: translate3d(1px, 0, 0);\r\n  }\r\n  30%,\r\n  50%,\r\n  70% {\r\n    -webkit-transform: translate3d(-3px, 0, 0);\r\n            transform: translate3d(-3px, 0, 0);\r\n  }\r\n  40%,\r\n  60% {\r\n    -webkit-transform: translate3d(3px, 0, 0);\r\n            transform: translate3d(3px, 0, 0);\r\n  }\r\n}\r\n@keyframes shake {\r\n  10%,\r\n  90% {\r\n    -webkit-transform: translate3d(-1px, 0, 0);\r\n            transform: translate3d(-1px, 0, 0);\r\n  }\r\n  20%,\r\n  80% {\r\n    -webkit-transform: translate3d(1px, 0, 0);\r\n            transform: translate3d(1px, 0, 0);\r\n  }\r\n  30%,\r\n  50%,\r\n  70% {\r\n    -webkit-transform: translate3d(-3px, 0, 0);\r\n            transform: translate3d(-3px, 0, 0);\r\n  }\r\n  40%,\r\n  60% {\r\n    -webkit-transform: translate3d(3px, 0, 0);\r\n            transform: translate3d(3px, 0, 0);\r\n  }\r\n}\r\n\r\n"

/***/ }),

/***/ "./app/payments/payments.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navigation></app-navigation>\r\n<div id=\"body\">\r\n<div layout-align=\"center center\" id=\"form\">\r\n\t<div class=\"payment-methods\">\r\n\t\t<h3>Payment methods</h3>\r\n\t</div>\r\n\t<div class=\"loader\" id=\"list-loading-circle\"></div>\r\n\t<div class=\"payments-bottom-add-container\">\r\n\t\t<button class=\"payment-footer-button\" (click)=\"toAddPayment()\">\r\n\t\t\t<span class=\"plus-sign\">+</span> \r\n\t\t\t<span class=\"payment-footer-text\">Add a payment method </span>\r\n\t\t</button>\r\n\t</div>\r\n</div>\r\n\r\n<div layout-align=\"center center\" id=\"payment-form\">\r\n\t<div class=\"payment-methods\">\r\n\t\t<h3>Add payment method</h3>\r\n\t</div>\r\n\t<div class=\"payments-bottom-add-container\">\r\n\t\t<button class=\"payment-footer-button\" (click)=\"toPaymentMethods()\">\r\n\t\t\t<span class=\"payment-footer-text\">Cancel </span>\r\n\t\t</button>\r\n\t</div>\r\n</div>\r\n\r\n</div>\r\n\r\n<div id=\"payment-modal\" class = \"modal\">\r\n\t<div layout-align=\"center center\" id=\"card-form\">\r\n\t\t<div class=\"payment-methods\" id=\"modal-payment-methods\">\r\n\t\t\t<h3 class=\"colored-header\"><span class=\"close-modal\" (click)=\"closeModal()\">&times;</span>Add card</h3>\r\n\t\t</div>\r\n\r\n\t\t<form id=\"payment-card-form\" class=\"scale-down\">\r\n\t    <div class=\"cardinfo-card-number\">\r\n\t      <label class=\"cardinfo-label\" for=\"card-number\">Card Number</label>\r\n\t      <div class='input-wrapper' id=\"card-number\"></div>\r\n\t      <div id=\"card-image\"></div>\r\n\t    </div>\r\n\r\n\t    <div class=\"cardinfo-wrapper\">\r\n\t      <div class=\"cardinfo-exp-date\">\r\n\t        <label class=\"cardinfo-label\" for=\"expiration-date\">Valid Thru</label>\r\n\t        <div class='input-wrapper' id=\"expiration-date\"></div>\r\n\t      </div>\r\n\r\n\t      <div class=\"cardinfo-cvv\">\r\n\t        <label class=\"cardinfo-label\" for=\"cvv\">CVV</label>\r\n\t        <div class='input-wrapper' id=\"cvv\"></div>\r\n\t      </div>\r\n\t    </div>\r\n\t  </form>\r\n\r\n\t\t<div class=\"payments-bottom-add-container\">\r\n\t\t\t<button class=\"payment-footer-button\">\r\n\t\t\t\t<span class=\"payment-footer-text\" (click)=\"closeModal()\">Cancel </span>\r\n\t\t\t</button>\r\n\t\t  <button class=\"payment-footer-button\" id=\"add-card-button\" type=\"submit\" value=\"Continue\">\r\n\t\t  \t<span class=\"plus-sign\">+</span> \r\n\t\t\t<span class=\"payment-footer-text\">Add </span>\r\n\t\t  </button>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n<div id=\"payment-paypal-modal\" class = \"modal\">\r\n\t<div layout-align=\"center center\" id=\"paypal-form\">\r\n\t\t<div id=\"paypal-header-container\">\r\n\t\t\t<div class=\"payment-methods\" id=\"modal-payment-methods\">\r\n\t\t\t\t<h3 class=\"colored-header\"><span class=\"close-modal\" (click)=\"closeModal()\">&times;</span>Add PayPal</h3>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div id=\"paypal-button\"></div>\r\n\t\t<div class=\"payments-bottom-add-container\">\r\n\t\t\t<button class=\"payment-footer-button\">\r\n\t\t\t\t<span class=\"payment-footer-text\" (click)=\"closeModal()\">Cancel </span>\r\n\t\t\t</button>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n<div id=\"payment-venmo-modal\" class = \"modal\">\r\n\t<div layout-align=\"center center\" id=\"venmo-form\">\r\n\t\t<div id=\"paypal-header-container\">\r\n\t\t\t<div class=\"payment-methods\" id=\"modal-payment-methods\">\r\n\t\t\t\t<h3 class=\"colored-header\"><span class=\"close-modal\" (click)=\"closeModal()\">&times;</span>Add Venmo</h3>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div id=\"venmo-button\"></div>\r\n\t\t<div class=\"payments-bottom-add-container\">\r\n\t\t\t<button class=\"payment-footer-button\">\r\n\t\t\t\t<span class=\"payment-footer-text\" (click)=\"closeModal()\">Cancel </span>\r\n\t\t\t</button>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n<div id=\"error-modal\" class = \"modal\">\r\n\t<div layout-align=\"center center\" id=\"error-form\">\r\n\t\t<div class=\"loader\" id=\"loading-circle\"></div>\r\n\t\t<div id=\"error-header-container\">\r\n\t\t\t<div class=\"payment-methods\" id=\"modal-payment-methods\">\r\n\t\t\t\t<h3 class=\"colored-header\"><span class=\"close-modal\" (click)=\"closeError()\">&times;</span>Payment method already exists</h3>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n<div id=\"edit-modal\" class = \"modal\">\r\n\t<div layout-align=\"center center\" id=\"edit-form\">\r\n\t\t<div id=\"edit-header-container\">\r\n\t\t\t<div class=\"payment-methods\" id=\"modal-payment-methods\">\r\n\t\t\t\t<h3 class=\"colored-header\" id=\"edit-header\"><span class=\"close-modal\" (click)=\"closeEdit()\">&times;</span>Payment Information</h3>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div id=\"method-information-text\"></div>\r\n\t\t<div class=\"payments-bottom-add-container\">\r\n\t\t\t<button class=\"payment-footer-button\">\r\n\t\t\t\t<span class=\"payment-footer-text\" (click)=\"closeEdit()\">Cancel </span>\r\n\t\t\t</button>\r\n\t\t  <button class=\"payment-footer-button\" id=\"remove-payment-button\" type=\"submit\" value=\"Continue\">\r\n\t\t\t<span class=\"payment-footer-text\" (click)=\"removeMethod()\">Remove </span>\r\n\t\t  </button>\r\n\t\t</div>\r\n\t</div>\r\n\t<div id=\"open-edit\" display=\"none\" (click)=\"openEdit()\"></div>\r\n</div>"

/***/ }),

/***/ "./app/payments/payments.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentsComponent", function() { return PaymentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dynamic_add_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/dynamic-add.service.ts");
/* harmony import */ var braintree_web__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/braintree-web/index.js");
/* harmony import */ var braintree_web__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(braintree_web__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _logincheck_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/logincheck.service.ts");
/* harmony import */ var _payment_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/payment.service.ts");
/* harmony import */ var _datatransfer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./app/datatransfer.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PaymentsComponent = /** @class */ (function () {
    function PaymentsComponent(addService, paymentService, logincheckService, transferService) {
        this.addService = addService;
        this.paymentService = paymentService;
        this.logincheckService = logincheckService;
        this.transferService = transferService;
        this.user = this.logincheckService.getUser();
    }
    PaymentsComponent.prototype.ngOnInit = function () {
        this.logincheckService.loginCheck();
        this.getUser();
        this.createViews();
        this.createPayPal();
        this.createVenmo();
        this.addMethods();
    };
    PaymentsComponent.prototype.getUser = function () {
        var _this = this;
        this.paymentService.getPaymentUserById(this.user.payment_id).subscribe(function (data) {
            _this.paymentCustomer = data;
            console.log(_this.paymentCustomer);
            if (_this.paymentCustomer.creditCards != null)
                for (var i = 0; i < _this.paymentCustomer.creditCards.length; i++)
                    _this.addService.appendPaymentMethod("card", _this.paymentCustomer.creditCards[i].cardType + " ending in " + _this.paymentCustomer.creditCards[i].last4, "form", false, _this.paymentCustomer.creditCards[i].token);
            if (_this.paymentCustomer.paypalAccounts != null)
                for (var i = 0; i < _this.paymentCustomer.paypalAccounts.length; i++)
                    _this.addService.appendPaymentMethod("paypal", _this.paymentCustomer.paypalAccounts[i].email, "form", false, _this.paymentCustomer.paypalAccounts[i].token);
            document.getElementById('list-loading-circle').style.display = 'none';
        });
    };
    PaymentsComponent.prototype.loadExternalScript = function (scriptUrl) {
        return new Promise(function (resolve, reject) {
            var scriptElement = document.createElement('script');
            scriptElement.src = scriptUrl;
            scriptElement.onload = resolve;
            document.body.appendChild(scriptElement);
        });
    };
    PaymentsComponent.prototype.openEdit = function () {
        document.getElementById("edit-modal").style.display = 'block';
        this.paymentInfo = this.transferService.getData();
        document.getElementById('method-information-text').innerHTML = this.paymentInfo.info;
    };
    PaymentsComponent.prototype.closeModal = function () {
        document.getElementById('payment-modal').style.display = 'none';
        document.getElementById('payment-paypal-modal').style.display = 'none';
        document.getElementById('payment-venmo-modal').style.display = 'none';
    };
    PaymentsComponent.prototype.closeError = function () {
        document.getElementById("error-modal").style.display = 'none';
        document.getElementById("loading-circle").style.display = 'block';
        document.getElementById("error-header-container").style.display = 'none';
    };
    PaymentsComponent.prototype.closeEdit = function () {
        document.getElementById("edit-modal").style.display = 'none';
    };
    PaymentsComponent.prototype.toAddPayment = function () {
        document.getElementById('form').style.display = 'none';
        document.getElementById('payment-form').style.display = 'block';
    };
    PaymentsComponent.prototype.toPaymentMethods = function () {
        document.getElementById('payment-form').style.display = 'none';
        document.getElementById('form').style.display = 'block';
    };
    PaymentsComponent.prototype.addMethods = function () {
        this.addService.appendPaymentMethod('card', 'Add credit or debit card', 'payment-form', true, '');
        this.addService.appendPaymentMethod('paypal', 'Add PayPal', 'payment-form', true, '');
        this.addService.appendPaymentMethod('venmo', 'Add Venmo', 'payment-form', true, '');
    };
    PaymentsComponent.prototype.removeMethod = function () {
        var _this = this;
        document.getElementById("error-modal").style.display = 'block';
        this.paymentService.removePaymentMethodFromUser(this.paymentInfo.token).subscribe(function (res) {
            _this.closeError();
            _this.closeEdit();
            location.reload();
        });
    };
    PaymentsComponent.prototype.createVenmo = function () {
        var venmoButton = document.getElementById('venmo-button');
        // Create a client.
        braintree_web__WEBPACK_IMPORTED_MODULE_2__["client"].create({
            authorization: 'sandbox_9qsbyyq8_wmc3v88r36cbxjjz'
        }, function (clientErr, clientInstance) {
            // Stop if there was a problem creating the client.
            // This could happen if there is a network error or if the authorization
            // is invalid.
            if (clientErr) {
                console.error('Error creating client:', clientErr);
                return;
            }
            braintree_web__WEBPACK_IMPORTED_MODULE_2__["dataCollector"].create({
                client: clientInstance,
                paypal: true
            }, function (dataCollectorErr, dataCollectorInstance) {
                if (dataCollectorErr) {
                    // Handle error in creation of data collector.
                    return;
                }
                // At this point, you should access the deviceData value and provide it
                // to your server, e.g. by injecting it into your form as a hidden input.
                console.log('Got device data:', dataCollectorInstance.deviceData);
            });
            braintree_web__WEBPACK_IMPORTED_MODULE_2__["venmo"].create({
                client: clientInstance,
                // Add allowNewBrowserTab: false if your checkout page does not support
                // relaunching in a new tab when returning from the Venmo app. This can
                // be omitted otherwise.
                profileId: '1953896702662410263'
                //allowNewBrowserTab: false
            }, function (venmoErr, venmoInstance) {
                if (venmoErr) {
                    console.error('Error creating Venmo:', venmoErr);
                    return;
                }
                // Verify browser support before proceeding.
                if (!venmoInstance.isBrowserSupported()) {
                    console.log('Browser does not support Venmo');
                    document.getElementById('add-venmo-button').style.display = 'none';
                    return;
                }
                displayVenmoButton(venmoInstance);
                // Check if tokenization results already exist. This occurs when your
                // checkout page is relaunched in a new tab. This step can be omitted
                // if allowNewBrowserTab is false.
                if (venmoInstance.hasTokenizationResult()) {
                    venmoInstance.tokenize(function (tokenizeErr, payload) {
                        if (tokenizeErr) {
                            handleVenmoError(tokenizeErr);
                        }
                        else {
                            handleVenmoSuccess(payload);
                        }
                    });
                    return;
                }
            });
        });
        function displayVenmoButton(venmoInstance) {
            // Assumes that venmoButton is initially display: none.
            venmoButton.style.display = 'block';
            venmoButton.addEventListener('click', function () {
                venmoButton.disabled = true;
                venmoInstance.tokenize(function (tokenizeErr, payload) {
                    venmoButton.removeAttribute('disabled');
                    if (tokenizeErr) {
                        handleVenmoError(tokenizeErr);
                    }
                    else {
                        handleVenmoSuccess(payload);
                    }
                });
            });
        }
        function handleVenmoError(err) {
            if (err.code === 'VENMO_CANCELED') {
                console.log('App is not available or user aborted payment flow');
            }
            else if (err.code === 'VENMO_APP_CANCELED') {
                console.log('User canceled payment flow');
            }
            else {
                console.error('An error occurred:', err.message);
            }
        }
        function handleVenmoSuccess(payload) {
            // Send the payment method nonce to your server, e.g. by injecting
            // it into your form as a hidden input.
            console.log('Got a payment method nonce:', payload.nonce);
            // Display the Venmo username in your checkout UI.
            console.log('Venmo user:', payload.details.username);
        }
    };
    PaymentsComponent.prototype.createPayPal = function () {
        var _this = this;
        this.loadExternalScript("https://www.paypalobjects.com/api/checkout.js").then(function () {
            braintree_web__WEBPACK_IMPORTED_MODULE_2__["client"].create({
                authorization: 'sandbox_9qsbyyq8_wmc3v88r36cbxjjz'
            }, function (err, clientInstance) {
                if (err) {
                    console.error(err);
                    return;
                }
                braintree_web__WEBPACK_IMPORTED_MODULE_2__["paypalCheckout"].create({
                    client: clientInstance
                }, function (paypalCheckoutErr, paypalCheckoutInstance) {
                    // Stop if there was a problem creating PayPal Checkout.
                    // This could happen if there was a network error or if it's incorrectly
                    // configured.
                    if (paypalCheckoutErr) {
                        console.error('Error creating PayPal Checkout:', paypalCheckoutErr);
                        return;
                    }
                    // Set up PayPal with the checkout.js library
                    paypal.Button.render({
                        env: 'sandbox',
                        style: {
                            size: 'large'
                        },
                        payment: function () {
                            return paypalCheckoutInstance.createPayment({
                                flow: 'vault',
                                billingAgreementDescription: 'Your agreement description',
                                enableShippingAddress: true,
                                shippingAddressEditable: false,
                            });
                        },
                        onAuthorize: function (data, actions) {
                            return paypalCheckoutInstance.tokenizePayment(data, function (err, payload) {
                                // Submit `payload.nonce` to your server.
                                document.getElementById("error-modal").style.display = 'block';
                                _this.paymentService.addPaymentMethodToUser(_this.user.payment_id, payload.nonce).subscribe(function (res) {
                                    if (res == "Already exists") {
                                        document.getElementById("loading-circle").style.display = 'none';
                                        document.getElementById("error-header-container").style.display = 'block';
                                    }
                                    else {
                                        _this.closeError();
                                        _this.closeModal();
                                        location.reload();
                                    }
                                });
                            });
                        },
                        onCancel: function (data) {
                            console.log('checkout.js payment cancelled', JSON.stringify(data));
                        },
                        onError: function (err) {
                            console.error('checkout.js error', err);
                        }
                    }, '#paypal-button').then(function () {
                        // The PayPal button will be rendered in an html element with the id
                        // `paypal-button`. This function will be called when the PayPal button
                        // is set up and ready to be used.
                    });
                });
            });
        });
    };
    PaymentsComponent.prototype.createViews = function () {
        var _this = this;
        var form = document.querySelector('#payment-card-form');
        var submit = document.querySelector('#add-card-button');
        braintree_web__WEBPACK_IMPORTED_MODULE_2__["client"].create({
            authorization: 'sandbox_9qsbyyq8_wmc3v88r36cbxjjz'
        }, function (err, clientInstance) {
            if (err) {
                console.error(err);
                return;
            }
            // Create input fields and add text styles  
            braintree_web__WEBPACK_IMPORTED_MODULE_2__["hostedFields"].create({
                client: clientInstance,
                styles: {
                    'input': {
                        'color': '#282c37',
                        'font-size': '16px',
                        'transition': 'color 0.1s',
                        'line-height': '3'
                    },
                    // Style the text of an invalid input
                    'input.invalid': {
                        'color': '#E53A40'
                    },
                    // placeholder styles need to be individually adjusted
                    '::-webkit-input-placeholder': {
                        'color': 'rgba(0,0,0,0.6)'
                    },
                    ':-moz-placeholder': {
                        'color': 'rgba(0,0,0,0.6)'
                    },
                    '::-moz-placeholder': {
                        'color': 'rgba(0,0,0,0.6)'
                    },
                    ':-ms-input-placeholder': {
                        'color': 'rgba(0,0,0,0.6)'
                    }
                },
                // Add information for individual fields
                fields: {
                    number: {
                        selector: '#card-number',
                        placeholder: '1111 1111 1111 1111'
                    },
                    cvv: {
                        selector: '#cvv',
                        placeholder: '123'
                    },
                    expirationDate: {
                        selector: '#expiration-date',
                        placeholder: '10 / 2019'
                    }
                }
            }, function (err, hostedFieldsInstance) {
                if (err) {
                    console.error(err);
                    return;
                }
                hostedFieldsInstance.on('validityChange', function (event) {
                    // Check if all fields are valid, then show submit button
                    var formValid = Object.keys(event.fields).every(function (key) {
                        return event.fields[key].isValid;
                    });
                    if (formValid) {
                        document.getElementById('add-card-button').style.display = 'block';
                    }
                    else {
                        document.getElementById('add-card-button').style.display = 'none';
                    }
                });
                hostedFieldsInstance.on('empty', function (event) {
                    //document.querySelector('header').classList.remove('header-slide');
                    document.querySelector('#card-image').className = '';
                    document.querySelector('form').className = '';
                });
                hostedFieldsInstance.on('cardTypeChange', function (event) {
                    // Change card bg depending on card type
                    if (event.cards.length === 1) {
                        //document.querySelector('form').className = event.cards[0].type;
                        document.querySelector('#card-image').className = event.cards[0].type;
                        //document.querySelector('header').className += 'header-slide';
                        // Change the CVV length for AmericanExpress cards
                        if (event.cards[0].code.size === 4) {
                            hostedFieldsInstance.setAttribute({
                                field: 'cvv',
                                attribute: 'placeholder',
                                value: '1234'
                            });
                        }
                    }
                    else {
                        hostedFieldsInstance.setAttribute({
                            field: 'cvv',
                            attribute: 'placeholder',
                            value: '123'
                        });
                    }
                });
                submit.addEventListener('click', function (event) {
                    event.preventDefault();
                    document.getElementById("error-modal").style.display = 'block';
                    hostedFieldsInstance.tokenize(function (err, payload) {
                        if (err) {
                            console.error(err);
                            return;
                        }
                        // This is where you would submit payload.nonce to your server
                        console.log(payload);
                        _this.paymentService.addPaymentMethodToUser(_this.user.payment_id, payload.nonce).subscribe(function (res) {
                            console.log(res);
                            if (res == "Already exists") {
                                document.getElementById("loading-circle").style.display = 'none';
                                document.getElementById("error-header-container").style.display = 'block';
                            }
                            else {
                                _this.closeError();
                                _this.closeModal();
                                location.reload();
                            }
                        });
                    });
                }, false);
            });
        });
    };
    PaymentsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-payments',
            template: __webpack_require__("./app/payments/payments.component.html"),
            styles: [__webpack_require__("./app/payments/payments.component.css")]
        }),
        __metadata("design:paramtypes", [_dynamic_add_service__WEBPACK_IMPORTED_MODULE_1__["DynamicAddService"], _payment_service__WEBPACK_IMPORTED_MODULE_4__["PaymentService"], _logincheck_service__WEBPACK_IMPORTED_MODULE_3__["LogincheckService"], _datatransfer_service__WEBPACK_IMPORTED_MODULE_5__["TransferService"]])
    ], PaymentsComponent);
    return PaymentsComponent;
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
    //uri = 'http://10.0.2.2:4000';
    function PostingService(http) {
        this.http = http;
        this.uri = 'http://192.168.1.7:4000';
    }
    PostingService.prototype.getPostings = function () {
        return this.http.get(this.uri + "/postings");
    };
    PostingService.prototype.getPostingbyId = function (id) {
        return this.http.get(this.uri + "/postings/" + id);
    };
    PostingService.prototype.addPosting = function (user, startadr, endadr, date, cost, capacity, comments) {
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
    //uri = 'http://10.0.2.2:4000';
    function PostingService(http) {
        this.http = http;
        this.uri = 'http://192.168.1.7:4000';
    }
    PostingService.prototype.getPostings = function () {
        return this.http.get(this.uri + "/postings");
    };
    PostingService.prototype.getPostingbyId = function (id) {
        return this.http.get(this.uri + "/postings/" + id);
    };
    PostingService.prototype.addPosting = function (user, startadr, endadr, date, cost, capacity, comments) {
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
    }
    PostingComponent.prototype.ngOnInit = function () {
        this.id = this.info.id;
        this.buttonType = this.info.buttonType;
        var name_label = this.page.getViewById('post-name');
        name_label.text = this.info.user;
        name_label.id = 'post-name' + this.info.index;
        var info_label = this.page.getViewById('post-info');
        info_label.text = "Leaving " + this.info.date + " from " + this.info.startadr + " to " + this.info.endadr + " for " + this.info.cost;
        info_label.id = 'post-info' + this.info.index;
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

/***/ "./app/search/search.component.css":
/***/ (function(module, exports) {

module.exports = "/* Add mobile styles for the component here.  */\n"

/***/ }),

/***/ "./app/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navigation></app-navigation>\r\n<StackLayout>\r\n  <Label text=\"search works\" textWrap=\"true\"></Label>\r\n  <Label text=\"This is a migrated component\" textWrap=\"true\"></Label>\r\n  <Label text=\"Update it to provide the UI elements required in your mobile app\" textWrap=\"true\"></Label>\r\n</StackLayout>"

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

module.exports = "/*\nAdd your NativeScript specific styles here.\nTo learn more about styling in NativeScript see:\nhttps://docs.nativescript.org/angular/ui/styling\n*/"

/***/ }),

/***/ "./app/settings/settings.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navigation></app-navigation>\r\n<StackLayout>\r\n  <Label text=\"settings works\" textWrap=\"true\"></Label>\r\n  <Label text=\"This is a migrated component\" textWrap=\"true\"></Label>\r\n  <Label text=\"Update it to provide the UI elements required in your mobile app\" textWrap=\"true\"></Label>\r\n</StackLayout>\r\n\r\n<!--\r\nOriginal Web template:\r\n\r\n<app-navigation></app-navigation>\r\n<div id=\"body\">\r\n<div layout-align=\"center center\" id=\"form\">\r\n<form [formGroup]=\"profileForm\" (ngSubmit)=\"onSubmit()\" class=\"user-settings\" layout=\"column\">\r\n  \r\n<div formGroupName=\"user\">\r\n\t<h3>User Settings</h3>\r\n  <div class=\"example-container\">\r\n  <mat-form-field>\r\n    <input matInput placeholder=\"First Name\" formControlName = \"firstName\" class=\"input-field\">\r\n  </mat-form-field>\r\n</div>\r\n\r\n<div class=\"example-container\">\r\n  <mat-form-field>\r\n    <input matInput placeholder=\"Last Name\" formControlName = \"lastName\" class=\"input-field\">\r\n  </mat-form-field>\r\n</div>\r\n\r\n<!--\r\n\tEmail validator\r\n->\r\n\r\n<div class =\"example-container\" >\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput placeholder=\"Email\" formControlName = \"email\"\r\n           [errorStateMatcher]=\"matcher\" >\r\n    <mat-error *ngIf=\"emailFormControl.hasError('email') && !emailFormControl.hasError('required')\">\r\n      Please enter a valid email address\r\n    </mat-error>\r\n    <mat-error *ngIf=\"emailFormControl.hasError('required')\">\r\n      Please enter a <strong>valid</strong> email address\r\n    </mat-error>\r\n  </mat-form-field>\r\n</div>\r\n\r\n\r\n\r\n\r\n<div class=\"example-container\">\r\n  <mat-form-field>\r\n    <input matInput placeholder=\"Phone Number \" formControlName = \"phone\" class=\"input-field\">\r\n  </mat-form-field>\r\n</div>\r\n</div>\r\n\r\n\r\n<div formGroupName=\"address\" layout=\"column\">\r\n<div class=\"example-container\">\r\n  <mat-form-field>\r\n    <input matInput placeholder = \"Address\" formControlName=\"street\" class=\"input-field\">\r\n  </mat-form-field>\r\n</div>\r\n</div>\r\n\r\n  <button type=\"submit\" [disabled]=\"!profileForm.valid\" class=\"submit\">Save changes</button>\r\n\r\n</form>\r\n<app-dialog id=\"update-dialog\"></app-dialog>\r\n</div>\r\n\r\n</div>\r\n-->"

/***/ }),

/***/ "./app/settings/settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _datatransfer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/datatransfer.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyErrorStateMatcher = /** @class */ (function () {
    function MyErrorStateMatcher() {
    }
    MyErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    return MyErrorStateMatcher;
}());

/** @title Input with a custom ErrorStateMatcher */
var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(router, transferService, userService) {
        this.router = router;
        this.transferService = transferService;
        this.userService = userService;
        //myStorage = window.localStorage;
        this.myStorage = null;
        this.emailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email,
        ]);
        this.matcher = new MyErrorStateMatcher();
    }
    SettingsComponent.prototype.ngOnInit = function () {
        // 		console.log(this.transferService.getData());
        // 		if(window.localStorage.getItem('visibility') == 'visible')
        // 			document.getElementById('update-dialog').style.visibility = 'visible';
        // 		window.localStorage.setItem('visibility', 'hidden');
        // 		this.span = document.getElementsByClassName("close")[0];
        // this.span.onclick = function() {
        //     document.getElementById('update-dialog').style.visibility = 'hidden';
        // }
        // 		//this.logincheckService.loginCheck();
        // 		//this.user = this.logincheckService.getUser();
        // 		this.user = null;
        // 		//console.log(this.user);
        // 		var nameSplit = this.user.name.split(" ");
        // 		this.profileForm = new FormGroup({
        //  	user: new FormGroup({
        //  		firstName: new FormControl(nameSplit[0]),
        //    	lastName: new FormControl(nameSplit[1]),
        //    	email: new FormControl(this.user.email, Validators.compose([
        // 		Validators.required,
        // 		Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])),
        //    	phone: new FormControl(this.user.phone_number)
        //   	}),
        //    address: new FormGroup({
        //     street: new FormControl(this.user.address)
        //     // city: new FormControl(''),
        //     // state: new FormControl(''),
        //     // zip: new FormControl('')
        //   })
        //  });
    };
    SettingsComponent.prototype.onSubmit = function () {
        var _this = this;
        var updatedValues = this.profileForm.value;
        console.log(updatedValues);
        this.user.name = updatedValues.user.firstName + " " + updatedValues.user.lastName;
        console.log(this.user.name);
        this.user.email = updatedValues.user.email;
        this.user.phone_number = updatedValues.user.phone;
        this.user.address = updatedValues.address.street;
        console.log(this.user);
        this.userService.updateUser(this.user._id, this.user.name, this.user.username, this.user.address, this.user.birthdate, this.user.email, this.user.gender, this.user.phone_number, this.user.rides_given, this.user.rides_received, this.user.payment_id)
            .subscribe(function () {
            window.localStorage.setItem('visibility', 'visible');
            _this.myStorage.setItem('_id', _this.user._id);
            _this.myStorage.setItem('name', _this.user.name);
            _this.myStorage.setItem('username', _this.user.username);
            _this.myStorage.setItem('address', _this.user.address);
            _this.myStorage.setItem('birthdate', _this.user.birthdate);
            _this.myStorage.setItem('email', _this.user.email);
            _this.myStorage.setItem('gender', _this.user.gender);
            _this.myStorage.setItem('phone_number', _this.user.phone_number);
            _this.myStorage.setItem('rides_given', _this.user.rides_given);
            _this.myStorage.setItem('rides_received', _this.user.rides_received);
            _this.myStorage.setItem('payment_id', _this.user.payment_id);
            location.reload();
        });
    };
    SettingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__("./app/settings/settings.component.html"),
            styles: [__webpack_require__("./app/settings/settings.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _datatransfer_service__WEBPACK_IMPORTED_MODULE_3__["TransferService"], _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], SettingsComponent);
    return SettingsComponent;
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
        this.uri = 'http://192.168.1.12:4000';
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
        this.uri = 'http://192.168.1.12:4000';
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

/***/ "./main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-angular/platform.js");
/* harmony import */ var nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/app.module.ts");

        let applicationCheckPlatform = __webpack_require__("../node_modules/tns-core-modules/application/application.js");
        if (applicationCheckPlatform.android && !global["__snapshot"]) {
            __webpack_require__("../node_modules/tns-core-modules/ui/frame/frame.js");
__webpack_require__("../node_modules/tns-core-modules/ui/frame/activity.js");
        }

        
            __webpack_require__("../node_modules/nativescript-dev-webpack/load-application-css-angular.js")();
            
            
        if (false) {}
        
            
        __webpack_require__("../node_modules/tns-core-modules/bundle-entry-points.js");
        // this import should be first in order to load some required settings (like globals and reflect-metadata)


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

/******/ });