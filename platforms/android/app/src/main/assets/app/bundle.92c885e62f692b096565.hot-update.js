webpackHotUpdate("bundle",{

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



/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY2hhdC9jaGF0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEyRjtBQUNqQztBQUNEO0FBQ007QUFDRDtBQUVXO0FBRW5CO0FBQ0Y7QUFJcEQ7SUFDQyxrQkFBbUIsV0FBd0IsRUFBUyxVQUFrQixFQUFTLGFBQXFCLEVBQVMsZ0JBQXlCLEVBQVMsa0JBQTJCO1FBQXZKLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVMsZUFBVSxHQUFWLFVBQVUsQ0FBUTtRQUFTLGtCQUFhLEdBQWIsYUFBYSxDQUFRO1FBQVMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFTO1FBQVMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFTO0lBQUcsQ0FBQztJQUMvSyxlQUFDO0FBQUQsQ0FBQztBQU9EO0lBRUUsdUJBQW9CLGVBQWdDLEVBQVUsTUFBd0IsRUFBVSxpQkFBb0MsRUFDM0gsS0FBdUI7UUFEWixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQUFVLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDM0gsVUFBSyxHQUFMLEtBQUssQ0FBa0I7UUFJaEMsYUFBUSxHQUFHLElBQUksc0ZBQWUsRUFBWSxDQUFDO1FBQzNDLGdCQUFXLEdBQUcsSUFBSSxzRkFBZSxFQUFZLENBQUM7UUFDOUMsWUFBTyxHQUFXLEVBQUUsQ0FBQztRQVFyQixhQUFRLEdBQUcsRUFBRSxDQUFDO0lBZHNCLENBQUM7SUFnQnJDLGdDQUFRLEdBQVI7UUFBQSxpQkFrQkM7UUFqQkEsSUFBRyxtRUFBUyxFQUFFO1lBQ2IsSUFBSSxNQUFNLEdBQUcsb0VBQVcsQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDL0MsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMs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QUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVELG1DQUFXLEdBQVg7UUFDQyxJQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFO1lBQ3pCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7O1lBRW5CLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsV0FBVyxDQUFDLEVBQUUsRUFBQyxZQUFZLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBRUQsaUNBQVMsR0FBVDtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFRCxvQ0FBWSxHQUFaO1FBQ0UsMkJBQTJCO0lBQzdCLENBQUM7SUE3TzJDO1FBQTNDLCtEQUFTLENBQUMsYUFBYSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDO2tDQUFLLHdEQUFVOzZDQUFDO0lBTGhELGFBQWE7UUFMekIsK0RBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxVQUFVO1lBQ3BCLCtEQUFvQzs7U0FFckMsQ0FBQzt5Q0FHcUMscUVBQWUsRUFBa0IsNEVBQWdCLEVBQTZCLHlFQUFpQjtZQUNwSCw4REFBZ0I7T0FIckIsYUFBYSxDQW9QekI7SUFBRCxvQkFBQztDQUFBO0FBcFB5QiIsImZpbGUiOiJidW5kbGUuOTJjODg1ZTYyZjY5MmIwOTY1NjUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVHJhbnNmZXJTZXJ2aWNlIH0gZnJvbSAnLi4vZGF0YXRyYW5zZmVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgKiBhcyBmaXJlYmFzZSBmcm9tICduYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlJztcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IExvZ2luY2hlY2tTZXJ2aWNlIH0gZnJvbSAnLi4vbG9naW5jaGVjay5zZXJ2aWNlLnRucyc7XHJcbmltcG9ydCB7IENoYXRNZXNzYWdlIH0gZnJvbSAnLi4vbW9kZWxzL2NoYXQtbWVzc2FnZS5tb2RlbCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGVBcnJheSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlLWFycmF5JztcclxuaW1wb3J0IHsgTGlzdFZpZXcgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2xpc3Qtdmlldyc7XHJcbmltcG9ydCB7IGlzQW5kcm9pZCB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm0nO1xyXG5pbXBvcnQgKiBhcyBhcHAgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIjtcclxuZGVjbGFyZSB2YXIgYW5kcm9pZDogYW55O1xyXG5cclxuXHJcbmNsYXNzIENoYXRJdGVtIHtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgY2hhdE1lc3NhZ2U6IENoYXRNZXNzYWdlLCBwdWJsaWMgdmlzaWJpbGl0eTogc3RyaW5nLCBwdWJsaWMgZm9ybWF0dGVkVGltZTogc3RyaW5nLCBwdWJsaWMgbWluZUNvbnRpbnVhdGlvbjogYm9vbGVhbiwgcHVibGljIHRoZWlyc0NvbnRpbnVhdGlvbjogYm9vbGVhbikge31cclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtY2hhdCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NoYXQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2NoYXQuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDaGF0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0cmFuc2ZlclNlcnZpY2U6IFRyYW5zZmVyU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMsIHByaXZhdGUgbG9naW5jaGVja1NlcnZpY2U6IExvZ2luY2hlY2tTZXJ2aWNlLFxyXG4gIFx0cHJpdmF0ZSB2Y1JlZjogVmlld0NvbnRhaW5lclJlZikgeyB9XHJcblxyXG4gIEBWaWV3Q2hpbGQoXCJtZXNzYWdlTGlzdFwiLCB7IHN0YXRpYzogdHJ1ZSB9KSBsdjogRWxlbWVudFJlZjtcclxuICBjaGF0SWQ6IHN0cmluZztcclxuICBtZXNzYWdlcyA9IG5ldyBPYnNlcnZhYmxlQXJyYXk8Q2hhdEl0ZW0+KCk7XHJcbiAgYWxsTWVzc2FnZXMgPSBuZXcgT2JzZXJ2YWJsZUFycmF5PENoYXRJdGVtPigpO1xyXG4gIG1lc3NhZ2U6IHN0cmluZyA9ICcnO1xyXG4gIHVzZXJJZDogc3RyaW5nO1xyXG4gIGNoYXROYW1lOiBzdHJpbmc7XHJcbiAgZGlzcGxheU5hbWU6IHN0cmluZztcclxuICBwZnBTb3VyY2U6IHN0cmluZztcclxuICBsaXN0OiBMaXN0VmlldztcclxuICBsYXN0SW5kZXg7XHJcbiAgY3VycmVudFVzZXI6IGFueTtcclxuICBudW1TaG93biA9IDIwO1xyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICBcdGlmKGlzQW5kcm9pZCkge1xyXG4gIFx0XHR2YXIgd2luZG93ID0gYXBwLmFuZHJvaWQuc3RhcnRBY3Rpdml0eS5nZXRXaW5kb3coKTtcclxuICAgICAgICB3aW5kb3cuc2V0U29mdElucHV0TW9kZShhbmRyb2lkLnZpZXcuV2luZG93TWFuYWdlci5MYXlvdXRQYXJhbXMuU09GVF9JTlBVVF9BREpVU1RfUkVTSVpFKTtcclxuICBcdH1cclxuICBcdHRoaXMubGlzdCA9IHRoaXMubHYubmF0aXZlRWxlbWVudDtcclxuXHJcbiAgXHR0aGlzLmNoYXRJZCA9IHRoaXMudHJhbnNmZXJTZXJ2aWNlLmdldERhdGEoKTtcclxuICBcdHRoaXMudXNlcklkID0gdGhpcy5sb2dpbmNoZWNrU2VydmljZS5nZXRVc2VyKCk7XHJcbiAgXHRmaXJlYmFzZS5nZXRDdXJyZW50VXNlcigpLnRoZW4oKHVzZXIpID0+IHtcclxuICBcdFx0dGhpcy5kaXNwbGF5TmFtZSA9IHVzZXIuZGlzcGxheU5hbWU7XHJcbiAgXHRcdHRoaXMucGZwU291cmNlID0gdXNlci5waG90b1VSTDtcclxuICBcdH0pXHJcbiAgXHR0aGlzLnJldHJpZXZlQ2hhdHMoKTtcclxuICBcdHRoaXMuY2hhdE5hbWUgPSBcIkpvaG4gRG9lXCJcclxuICBcdC8vIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAvLyAgICB0aGlzLmxpc3Quc2Nyb2xsVG9JbmRleCh0aGlzLm1lc3NhZ2VzLmxlbmd0aCAtIDEpO1xyXG4gICAvLyAgfSwgMTAwMClcclxuICB9XHJcblxyXG4gIGFzeW5jIHNlbmRNZXNzYWdlKCkge1xyXG4gICAgaWYodGhpcy5tZXNzYWdlLnJlcGxhY2UoL1xccysvZywgJycpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgXHR2YXIgdG9kYXkgPSBuZXcgRGF0ZSgpO1xyXG4gIFx0dmFyIGRhdGUgPSB0b2RheS5nZXRGdWxsWWVhcigpKycvJysodG9kYXkuZ2V0TW9udGgoKSsxKSsnLycrdG9kYXkuZ2V0RGF0ZSgpO1xyXG4gIFx0dmFyIHRpbWUgPSB0b2RheS5nZXRIb3VycygpICsgXCI6XCIgKyB0b2RheS5nZXRVVENNaW51dGVzKCkgKyBcIjpcIiArIHRvZGF5LmdldFNlY29uZHMoKTtcclxuICBcdGNvbnN0IGNoYXQgOiBDaGF0TWVzc2FnZSA9IHtcclxuICBcdFx0dXNlcklkOiB0aGlzLnVzZXJJZCxcclxuICBcdFx0ZGlzcGxheU5hbWU6IHRoaXMuZGlzcGxheU5hbWUsXHJcbiAgXHRcdG1lc3NhZ2U6IHRoaXMubWVzc2FnZSxcclxuICBcdFx0cGZwU291cmNlOiB0aGlzLnBmcFNvdXJjZSxcclxuICBcdFx0aW1nU291cmNlOiBcIlwiLFxyXG4gIFx0XHR0aW1lOiB0aW1lLFxyXG4gIFx0XHRkYXRlOiBkYXRlXHJcbiAgXHR9XHJcbiAgXHRjb25zdCBtZXNzYWdlRG9jdW1lbnQgPSBmaXJlYmFzZS5maXJlc3RvcmUuY29sbGVjdGlvbignY2hhdHMnKS5kb2ModGhpcy5jaGF0SWQpO1xyXG4gIFx0Y29uc3QgbWVzc2FnZVByb21pc2UgPSBhd2FpdCBtZXNzYWdlRG9jdW1lbnQuZ2V0KCkudGhlbigoZG9jKSA9PiB7XHJcbiAgXHRcdHZhciB1cGRhdGVkQ2hhdHMgOiBbQ2hhdE1lc3NhZ2VdID0gZG9jLmRhdGEoKS5jaGF0cztcclxuICBcdFx0dXBkYXRlZENoYXRzLnB1c2goY2hhdCk7XHJcbiAgXHRcdG1lc3NhZ2VEb2N1bWVudC51cGRhdGUoe1xyXG4gIFx0XHRcdGNoYXRzOiB1cGRhdGVkQ2hhdHMsXHJcbiAgXHRcdFx0bGFzdENoYXQ6IGRhdGUgKyAnICcgKyB0aW1lXHJcbiAgXHRcdH0pXHJcbiAgXHR9KVxyXG4gIFx0dGhpcy5tZXNzYWdlID0gJyc7XHJcbiAgfVxyXG5cclxuICBhc3luYyByZXRyaWV2ZUNoYXRzKCkge1xyXG4gIFx0Y29uc3QgbWVzc2FnZURvY3VtZW50ID0gZmlyZWJhc2UuZmlyZXN0b3JlLmNvbGxlY3Rpb24oJ2NoYXRzJykuZG9jKHRoaXMuY2hhdElkKTtcclxuICBcdGNvbnN0IGRvY1Byb21pc2UgPSBhd2FpdCBtZXNzYWdlRG9jdW1lbnQuZ2V0KCkudGhlbigoZG9jKSA9PiB7XHJcbiAgXHRcdGxldCBkYXRhID0gZG9jLmRhdGEoKTtcclxuICBcdFx0dGhpcy5sYXN0SW5kZXggPSBkYXRhLmNoYXRzLmxlbmd0aDtcclxuICAgICAgdGhpcy5tZXNzYWdlcy5zcGxpY2UoMCk7XHJcbiAgICAgIHRoaXMuYWxsTWVzc2FnZXMuc3BsaWNlKDApO1xyXG4gIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGF0YS5jaGF0cy5sZW5ndGg7IGkrKykge1xyXG4gIFx0XHRcdGlmKGRhdGEuY2hhdHNbaV0udXNlcklkID09PSB0aGlzLnVzZXJJZCkge1xyXG4gICAgICAgICAgdGhpcy51cGRhdGVDb250aW51YXRpb25zKGRhdGEsIGksIHRydWUsIFwiY29sbGFwc2VcIik7XHJcbiAgICAgICAgfVxyXG4gIFx0XHRcdGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy51cGRhdGVDb250aW51YXRpb25zKGRhdGEsIGksIGZhbHNlLCBcInZpc2libGVcIik7XHJcbiAgICAgICAgfVxyXG4gIFx0XHR9XHJcbiAgXHRcdC8vIHRoaXMubGlzdC5zY3JvbGxUb0luZGV4KGRhdGEuY2hhdHMubGVuZ3RoIC0gMSk7XHJcbiAgXHRcdGlmKGRhdGEudXNlcnMubGVuZ3RoID09PSAyKSB7XHJcbiAgXHRcdFx0aWYoZGF0YS51c2Vyc1swXS51aWQgPT09IHRoaXMudXNlcklkKVxyXG4gIFx0XHRcdFx0dGhpcy5jaGF0TmFtZSA9IGRhdGEudXNlcnNbMV0uZGlzcGxheU5hbWU7XHJcbiAgXHRcdFx0ZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmNoYXROYW1lID0gZGF0YS51c2Vyc1swXS5kaXNwbGF5TmFtZTtcclxuICAgICAgICB9XHJcbiAgXHRcdH1cclxuICBcdFx0ZWxzZSB7XHJcbiAgICAgICAgdmFyIGNoYXROYW1lID0gJ1lvdSwgJztcclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgZGF0YS51c2Vycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgaWYoZGF0YS51c2Vyc1tpXS5pZCAhPSB0aGlzLnVzZXJJZCkge1xyXG4gICAgICAgICAgICBpZihpID09PSBkYXRhLnVzZXJzLmxlbmd0aCAtIDEpXHJcbiAgICAgICAgICAgICAgY2hhdE5hbWUgKz0gJ2FuZCAnICsgZGF0YS51c2Vyc1tpXS5kaXNwbGF5TmFtZTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgIGNoYXROYW1lICs9IGRhdGEudXNlcnNbaV0uZGlzcGxheU5hbWUgKyAnLCAnO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICBcdFx0XHR0aGlzLmNoYXROYW1lID0gJ0dyb3VwIGNoYXQnO1xyXG4gIFx0XHR9XHJcbiAgXHR9KVxyXG5cclxuICBcdGNvbnN0IHVuc3Vic2NyaWJlID0gbWVzc2FnZURvY3VtZW50Lm9uU25hcHNob3QoZG9jID0+IHtcclxuICAgICAgY29uc29sZS5sb2coJ2NhbGxlZCcpXHJcbiAgXHRcdGxldCBkYXRhID0gZG9jLmRhdGEoKTtcclxuICBcdFx0Zm9yKHZhciBpID0gdGhpcy5sYXN0SW5kZXg7IGkgPCBkYXRhLmNoYXRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgXHRcdFx0aWYoZGF0YS5jaGF0c1tpXS51c2VySWQgPT09IHRoaXMudXNlcklkKSB7XHJcbiAgICAgICAgICB0aGlzLnVwZGF0ZUNvbnRpbnVhdGlvbnMoZGF0YSwgaSwgdHJ1ZSwgXCJjb2xsYXBzZVwiKTtcclxuICAgICAgICAgIHRoaXMubGlzdC5zY3JvbGxUb0luZGV4KHRoaXMubWVzc2FnZXMubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgfVxyXG4gIFx0XHRcdGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy51cGRhdGVDb250aW51YXRpb25zKGRhdGEsIGksIGZhbHNlLCBcInZpc2libGVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubnVtU2hvd24gKz0gMTtcclxuICBcdFx0fVxyXG4gIFx0XHR0aGlzLmxhc3RJbmRleCA9IGRhdGEuY2hhdHMubGVuZ3RoO1xyXG4gIFx0fSlcclxuICAgIGlmKHRoaXMubWVzc2FnZXMubGVuZ3RoID4gdGhpcy5udW1TaG93bikge1xyXG4gICAgICB0aGlzLm1lc3NhZ2VzLnNwbGljZSgwLCB0aGlzLm1lc3NhZ2VzLmxlbmd0aCAtIHRoaXMubnVtU2hvd24pO1xyXG4gICAgfVxyXG4gICAgdGhpcy5saXN0LnNjcm9sbFRvSW5kZXgodGhpcy5tZXNzYWdlcy5sZW5ndGggLSAxKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZUNvbnRpbnVhdGlvbnMoZGF0YSwgaW5kZXgsIGlzTWluZSwgdmlzaWJpbGl0eSkge1xyXG4gICAgLy9VcGRhdGUgdGltZSB0byBhIHJlYWRhYmxlIGZvcm1hdCBmb3IgdGhlIHVzZXJcclxuICAgIHZhciBjaGF0VGltZSA9IGRhdGEuY2hhdHNbaW5kZXhdLnRpbWU7XHJcbiAgICB2YXIgZGF0ZVNwbGl0ID0gZGF0YS5jaGF0c1tpbmRleF0uZGF0ZS5zcGxpdCgnLycpO1xyXG4gICAgdmFyIHRpbWVTcGxpdCA9IGNoYXRUaW1lLnNwbGl0KCc6Jyk7XHJcbiAgICB2YXIgZm9ybWF0dGVkVGltZSA9ICcnO1xyXG4gICAgaWYodGltZVNwbGl0WzFdLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICB0aW1lU3BsaXRbMV0gPSAnMCcgKyB0aW1lU3BsaXRbMV07XHJcbiAgICB9XHJcbiAgICB2YXIgaG91cnMgPSBwYXJzZUludCh0aW1lU3BsaXRbMF0pO1xyXG4gICAgaWYoaG91cnMgPiAxMikge1xyXG4gICAgICBmb3JtYXR0ZWRUaW1lID0gZGF0ZVNwbGl0WzFdICsgJy8nICsgZGF0ZVNwbGl0WzJdICsgJywgJyArIChob3VycyAtIDEyKSArICc6JyArIHRpbWVTcGxpdFsxXSArICcgUE0nO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIGlmKGhvdXJzID09PSAwKVxyXG4gICAgICAgIHRpbWVTcGxpdFswXSA9ICcxMic7XHJcbiAgICAgIGZvcm1hdHRlZFRpbWUgPSBkYXRlU3BsaXRbMV0gKyAnLycgKyBkYXRlU3BsaXRbMl0gKyAnLCAnICsgdGltZVNwbGl0WzBdICsgJzonICsgdGltZVNwbGl0WzFdICsgJyBBTSc7XHJcbiAgICB9XHJcbiAgICAvL1B1c2ggdGhlIG1lc3NhZ2UgaXRlbVxyXG4gICAgdGhpcy5tZXNzYWdlcy5wdXNoKG5ldyBDaGF0SXRlbShkYXRhLmNoYXRzW2luZGV4XSwgdmlzaWJpbGl0eSwgZm9ybWF0dGVkVGltZSwgZmFsc2UsIGZhbHNlKSk7XHJcbiAgICB0aGlzLmFsbE1lc3NhZ2VzLnB1c2gobmV3IENoYXRJdGVtKGRhdGEuY2hhdHNbaW5kZXhdLCB2aXNpYmlsaXR5LCBmb3JtYXR0ZWRUaW1lLCBmYWxzZSwgZmFsc2UpKTtcclxuXHJcbiAgICAvL0NoZWNrIGZvciBjb250aW51YXRpb24gbWVzc2FnZXMgYW5kIHVwZGF0ZSBpdGVtcyBhY2NvcmRpbmdseVxyXG4gICAgdmFyIGkgPSBpbmRleCAtIDE7XHJcbiAgICB3aGlsZShpID49IDAgJiYgZGF0YS5jaGF0c1tpXS51c2VySWQgPT09IGRhdGEuY2hhdHNbaW5kZXhdLnVzZXJJZCkge1xyXG4gICAgICBpZih0aGlzLmlzVGltZU92ZXIoZGF0YS5jaGF0c1tpXSwgZGF0YS5jaGF0c1tpbmRleF0pKVxyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgaWYoaSA+PSB0aGlzLm1lc3NhZ2VzLmxlbmd0aCkge1xyXG4gICAgICAgIHZhciBtc2cgPSB0aGlzLm1lc3NhZ2VzLmdldEl0ZW0odGhpcy5tZXNzYWdlcy5sZW5ndGggKyBpIC0gZGF0YS5jaGF0cy5sZW5ndGgpO1xyXG4gICAgICAgIG1zZy52aXNpYmlsaXR5ID0gJ2NvbGxhcHNlJztcclxuICAgICAgICBpZihpc01pbmUpIHtcclxuICAgICAgICAgIG1zZy5taW5lQ29udGludWF0aW9uID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICBtc2cudGhlaXJzQ29udGludWF0aW9uID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlcy5zZXRJdGVtKHRoaXMubWVzc2FnZXMubGVuZ3RoICsgaSAtIGRhdGEuY2hhdHMubGVuZ3RoLCBtc2cpXHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgdmFyIG1zZyA9IHRoaXMubWVzc2FnZXMuZ2V0SXRlbShpKTtcclxuICAgICAgICBtc2cudmlzaWJpbGl0eSA9ICdjb2xsYXBzZSc7XHJcbiAgICAgICAgaWYoaXNNaW5lKSB7XHJcbiAgICAgICAgICBtc2cubWluZUNvbnRpbnVhdGlvbiA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgbXNnLnRoZWlyc0NvbnRpbnVhdGlvbiA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubWVzc2FnZXMuc2V0SXRlbShpLCBtc2cpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmFsbE1lc3NhZ2VzLnNldEl0ZW0oaSwgbXNnKTtcclxuICAgICAgaSA9IGkgLSAxO1xyXG4gICAgfVxyXG4gICAgLy8gdGhpcy5saXN0LnNjcm9sbFRvSW5kZXgodGhpcy5tZXNzYWdlcy5sZW5ndGggLSAxKTtcclxuICB9XHJcblxyXG4gIGlzVGltZU92ZXIoY2hhdDEsIGNoYXQyKSB7XHJcbiAgICBjb25zdCB0aW1lMSA9IGNoYXQxLnRpbWU7XHJcbiAgICBjb25zdCB0aW1lMiA9IGNoYXQyLnRpbWU7XHJcbiAgICBjb25zdCBkYXRlMSA9IGNoYXQxLmRhdGU7XHJcbiAgICBjb25zdCBkYXRlMiA9IGNoYXQyLmRhdGU7XHJcblxyXG4gICAgY29uc3QgdGltZTFTcGxpdCA9IHRpbWUxLnNwbGl0KCc6Jyk7XHJcbiAgICBjb25zdCB0aW1lMlNwbGl0ID0gdGltZTIuc3BsaXQoJzonKTtcclxuXHJcbiAgICB2YXIgdGltZTFUb3RhbFNlY29uZHMgPSBwYXJzZUludCh0aW1lMVNwbGl0WzBdKSAqIDM2MDAgKyBwYXJzZUludCh0aW1lMVNwbGl0WzFdKSAqIDYwICsgcGFyc2VJbnQodGltZTFTcGxpdFsyXSk7XHJcbiAgICB2YXIgdGltZTJUb3RhbFNlY29uZHMgPSBwYXJzZUludCh0aW1lMlNwbGl0WzBdKSAqIDM2MDAgKyBwYXJzZUludCh0aW1lMlNwbGl0WzFdKSAqIDYwICsgcGFyc2VJbnQodGltZTJTcGxpdFsyXSk7XHJcbiAgICBpZih0aW1lMlRvdGFsU2Vjb25kcyAtIHRpbWUxVG90YWxTZWNvbmRzID4gKDYwICogMykgfHwgZGF0ZTIgPiBkYXRlMSkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIGFsaWduKGl0ZW0pIHtcclxuICBcdGlmKGl0ZW0uY2hhdE1lc3NhZ2UudXNlcklkID09PSB0aGlzLnVzZXJJZClcclxuICBcdFx0cmV0dXJuIFwicmlnaHRcIjtcclxuICBcdGVsc2VcclxuICBcdFx0cmV0dXJuIFwibGVmdFwiO1xyXG4gIH1cclxuXHJcbiAgYWxpZ25SZXZlcnNlKGl0ZW0pIHtcclxuICAgIGlmKGl0ZW0uY2hhdE1lc3NhZ2UudXNlcklkID09PSB0aGlzLnVzZXJJZClcclxuICAgICAgcmV0dXJuIFwibGVmdFwiO1xyXG4gICAgZWxzZVxyXG4gICAgICByZXR1cm4gXCJyaWdodFwiO1xyXG4gIH1cclxuXHJcbiAgc2V0dXBJdGVtVmlldyhhcmdzKSB7XHJcbiAgXHRhcmdzLnZpZXcuY29udGV4dC5taW5lID0gKHRoaXMubWVzc2FnZXMuZ2V0SXRlbShhcmdzLmluZGV4KS5jaGF0TWVzc2FnZS51c2VySWQgPT09IHRoaXMudXNlcklkKTtcclxuICBcdGFyZ3Mudmlldy5jb250ZXh0LnRoZWlycyA9ICh0aGlzLm1lc3NhZ2VzLmdldEl0ZW0oYXJncy5pbmRleCkuY2hhdE1lc3NhZ2UudXNlcklkICE9PSB0aGlzLnVzZXJJZCk7XHJcbiAgICBhcmdzLnZpZXcuY29udGV4dC5taW5lQ29udGludWF0aW9uID0gKHRoaXMubWVzc2FnZXMuZ2V0SXRlbShhcmdzLmluZGV4KS5taW5lQ29udGludWF0aW9uKTtcclxuICAgIGFyZ3Mudmlldy5jb250ZXh0LnRoZWlyc0NvbnRpbnVhdGlvbiA9ICh0aGlzLm1lc3NhZ2VzLmdldEl0ZW0oYXJncy5pbmRleCkudGhlaXJzQ29udGludWF0aW9uKTtcclxuICAgIGFyZ3Mudmlldy5jb250ZXh0Lm1pbmVDb250aW51YXRpb25HcmlkID0gKHRoaXMubWVzc2FnZXMuZ2V0SXRlbShhcmdzLmluZGV4KS5taW5lQ29udGludWF0aW9uKTtcclxuICAgIGFyZ3Mudmlldy5jb250ZXh0LnRoZWlyc0NvbnRpbnVhdGlvbkdyaWQgPSAodGhpcy5tZXNzYWdlcy5nZXRJdGVtKGFyZ3MuaW5kZXgpLnRoZWlyc0NvbnRpbnVhdGlvbik7XHJcblxyXG4gICAgYXJncy52aWV3LmNvbnRleHQuZ3JpZCA9ICghYXJncy52aWV3LmNvbnRleHQudGhlaXJzQ29udGludWF0aW9uICYmICFhcmdzLnZpZXcuY29udGV4dC5taW5lQ29udGludWF0aW9uKTtcclxuICAgIGFyZ3Mudmlldy5jb250ZXh0Lm1pbmVUaW1lID0gKCFhcmdzLnZpZXcuY29udGV4dC5taW5lQ29udGludWF0aW9uICYmIGFyZ3Mudmlldy5jb250ZXh0Lm1pbmUpO1xyXG4gICAgYXJncy52aWV3LmNvbnRleHQudGhlaXJzVGltZSA9ICghYXJncy52aWV3LmNvbnRleHQudGhlaXJzQ29udGludWF0aW9uICYmIGFyZ3Mudmlldy5jb250ZXh0LnRoZWlycyk7XHJcbiAgICBcclxuICAgIGFyZ3Mudmlldy5jb250ZXh0LnRpbWUgPSAoIWFyZ3Mudmlldy5jb250ZXh0Lm1pbmVUaW1lICYmICFhcmdzLnZpZXcuY29udGV4dC50aGVpcnNUaW1lKSAgICBcclxuICAgIGFyZ3Mudmlldy5jb250ZXh0LmV2ZW4gPSAoYXJncy5pbmRleCAlIDIgPT09IDApO1xyXG4gIFx0YXJncy52aWV3LmNvbnRleHQub2RkID0gKGFyZ3MuaW5kZXggJSAyID09PSAxKTtcclxuICB9XHJcblxyXG4gIG9uTmF2QnRuVGFwKCkge1xyXG4gIFx0aWYodGhpcy5yb3V0ZXIuY2FuR29CYWNrKCkpXHJcbiAgXHRcdHRoaXMucm91dGVyLmJhY2soKTtcclxuICBcdGVsc2VcclxuICBcdFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUoWydjaGF0LWxpc3QnXSwge2NsZWFySGlzdG9yeTogdHJ1ZX0pO1xyXG4gIH1cclxuXHJcbiAgb25UZXh0VGFwKCkge1xyXG4gICAgdGhpcy5saXN0LnNjcm9sbFRvSW5kZXgodGhpcy5tZXNzYWdlcy5sZW5ndGggLSAxKTtcclxuICB9XHJcblxyXG4gIGxvYWRNb3JlRGF0YSgpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdMb2FkIG1vcmUnKVxyXG4gIH1cclxuXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==