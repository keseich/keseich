webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html")
        })
    ], AppComponent);
    return AppComponent;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_component__ = __webpack_require__("../../../../../src/app/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__main_component__ = __webpack_require__("../../../../../src/app/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__study_component__ = __webpack_require__("../../../../../src/app/study.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__view_component__ = __webpack_require__("../../../../../src/app/view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__autofocus_directive__ = __webpack_require__("../../../../../src/app/autofocus.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_api_service__ = __webpack_require__("../../../../../src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_auth_guard_service__ = __webpack_require__("../../../../../src/app/services/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_status_service__ = __webpack_require__("../../../../../src/app/services/status.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var appRoutes = [
    { path: 'main', component: __WEBPACK_IMPORTED_MODULE_6__main_component__["a" /* MainComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_11__services_auth_guard_service__["a" /* AuthGuardService */]] },
    { path: 'study', component: __WEBPACK_IMPORTED_MODULE_7__study_component__["a" /* StudyComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_11__services_auth_guard_service__["a" /* AuthGuardService */]] },
    { path: 'view', component: __WEBPACK_IMPORTED_MODULE_8__view_component__["a" /* ViewComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_11__services_auth_guard_service__["a" /* AuthGuardService */]] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_5__login_component__["a" /* LoginComponent */] },
    { path: '', redirectTo: '/main', pathMatch: 'full' },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_5__login_component__["a" /* LoginComponent */] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_6__main_component__["a" /* MainComponent */],
                __WEBPACK_IMPORTED_MODULE_7__study_component__["a" /* StudyComponent */],
                __WEBPACK_IMPORTED_MODULE_8__view_component__["a" /* ViewComponent */],
                __WEBPACK_IMPORTED_MODULE_9__autofocus_directive__["a" /* AutofocusDirective */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_10__services_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_11__services_auth_guard_service__["a" /* AuthGuardService */], __WEBPACK_IMPORTED_MODULE_12__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_13__services_status_service__["a" /* StatusService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/autofocus.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutofocusDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AutofocusDirective = /** @class */ (function () {
    function AutofocusDirective(elementRef) {
        this.elementRef = elementRef;
    }
    ;
    AutofocusDirective.prototype.ngOnInit = function () {
        this.elementRef.nativeElement.focus();
    };
    AutofocusDirective = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Directive */])({
            selector: '[autofocus2]'
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */]) === "function" && _a || Object])
    ], AutofocusDirective);
    return AutofocusDirective;
    var _a;
}());

//# sourceMappingURL=autofocus.directive.js.map

/***/ }),

/***/ "../../../../../src/app/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"background-image: url('../assets/raicho1.jpg'); background-repeat: no-repeat;\nbackground-position: center; height: 100vh;\">\n<div style=\"padding: 200px;\">\n<h1>LOGIN</h1>\n<form (ngSubmit)=\"login()\" #loginForm=\"ngForm\">\n  <!--Username:-->\n  <input id=\"name\" name=\"name\" class=\"form-control\"\n    required minlength=\"4\" [(ngModel)]=\"user.username\" #name=\"ngModel\" >\n\n  <div *ngIf=\"name.invalid && (name.dirty || name.touched)\"\n       class=\"alert alert-danger\">\n\n    <div *ngIf=\"name.errors.required\">\n      Name is required.\n    </div>\n    <div *ngIf=\"name.errors.minlength\">\n      Name must be at least 4 characters long.\n    </div>\n\n  </div>\n\n  <br>\n\n  <!--Password:-->\n  <input id=\"pass\" name=\"pass\" type=\"password\" class=\"form-control\"\n    required minlength=\"4\" [(ngModel)]=\"user.password\" #pass=\"ngModel\" >\n\n  <div *ngIf=\"pass.invalid && (pass.dirty || pass.touched)\"\n       class=\"alert alert-danger\">\n\n    <div *ngIf=\"pass.errors.required\">\n      Password is required.\n    </div>\n    <div *ngIf=\"pass.errors.minlength\">\n      Password must be at least 4 characters long.\n    </div>\n\n  </div>\n\n  <br>\n  <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!loginForm.form.valid\">Login</button>\n</form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.user = { "username": "", "password": "" };
        this.setMessage();
    }
    LoginComponent.prototype.setMessage = function () {
        this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.message = 'Trying to log in ...';
        this.authService.login(this.user).subscribe(function () {
            _this.setMessage();
            if (_this.authService.isLoggedIn) {
                // Get the redirect URL from our auth service
                // If no redirect has been set, use the default
                //let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/main';
                var redirect = '/main';
                // Redirect the user
                _this.router.navigate([redirect]);
            }
        });
    };
    LoginComponent.prototype.logout = function () {
        this.authService.logout();
        this.setMessage();
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
            template: __webpack_require__("../../../../../src/app/login.component.html"),
            styles: [".container{\n    min-height:1000;\n  }"]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b;
}());

//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/main.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"background-image: url('../assets/raicho1.jpg'); background-repeat: no-repeat;\n  background-position: center; height: 100vh;\">\n<div style=\"padding: 200px;\">\n<div *ngIf=\"status.status\">\n  <h1>{{status.username}}</h1><!-- ({{status.status.totalPoints}} points)</h1-->\n  <!--h3>word levels: {{status.status.wordsKnownByLevel}}</h3-->\n  <div style=\"text-align:center;\" (click)=\"swapGraphs()\">\n    <svg height=\"100\" width=\"500\">\n      <polyline *ngFor=\"let g of status.graphs[graphIndex]\"\n        [attr.points]=\"g.pointString\" [ngStyle]=\"g.style\" />/>\n    </svg>\n  </div>\n  <!--p>\n    <span *ngFor=\"let g of status.graphs[graphIndex]\" [ngStyle]=\"{'color':g.color}\">\n      {{g.name + \": \" + g.values.slice(-7).join(\" \")}}<br></span>\n    latest points: {{status.status.latestPoints}}\n  </p-->\n  <div *ngFor=\"let set of sets; let s = index\">\n    <div *ngFor=\"let dir of set.directions; let d = index\">\n      {{set.name}} {{dir.name}} ({{status.status.wordsKnownByDirection[s][d]}})\n      <button [disabled]=\"s == 2\"\n        (click)=\"new(s,d)\">learn new</button>\n      <button (click)=\"review(s,d)\" [disabled]=\"status.status.wordsToReviewByDirection[s][d] < 10\">\n        review ({{status.status.wordsToReviewByDirection[s][d]}})</button>\n    </div>\n  </div>\n  <div style=\"padding: 200px;\">\n  {{statusText}}<br>\n  <button (click)=\"pushBackReviews()\">push back reviews</button>\n  <button (click)=\"pushForwardReviews()\">push forward reviews</button>\n</div>"

/***/ }),

/***/ "../../../../../src/app/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_status_service__ = __webpack_require__("../../../../../src/app/services/status.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_consts__ = __webpack_require__("../../../../../src/app/shared/consts.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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




var MainComponent = /** @class */ (function () {
    function MainComponent(status, router) {
        this.status = status;
        this.router = router;
        this.sets = __WEBPACK_IMPORTED_MODULE_3__shared_consts__["a" /* SETS */];
        this.graphIndex = 0;
        this.statusText = "";
    }
    MainComponent.prototype.new = function (setIndex, dirIndex) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.status.startNewStudy(setIndex, dirIndex)];
                    case 1:
                        _a.sent();
                        this.router.navigate(['/study']);
                        return [2 /*return*/];
                }
            });
        });
    };
    MainComponent.prototype.review = function (setIndex, dirIndex) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.status.startReviewStudy(setIndex, dirIndex)];
                    case 1:
                        _a.sent();
                        this.router.navigate(['/study']);
                        return [2 /*return*/];
                }
            });
        });
    };
    MainComponent.prototype.swapGraphs = function () {
        this.graphIndex = (this.graphIndex + 1) % this.status.graphs.length;
    };
    MainComponent.prototype.pushBackReviews = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.statusText = "pushing back.......";
                        return [4 /*yield*/, this.status.pushBackReviews()];
                    case 1:
                        _a.sent();
                        this.statusText = "done!";
                        setTimeout(function () { return _this.statusText = ""; }, 2000);
                        return [2 /*return*/];
                }
            });
        });
    };
    MainComponent.prototype.pushForwardReviews = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.statusText = "pushing forward.......";
                        return [4 /*yield*/, this.status.pushForwardReviews()];
                    case 1:
                        _a.sent();
                        this.statusText = "done!";
                        setTimeout(function () { return _this.statusText = ""; }, 2000);
                        return [2 /*return*/];
                }
            });
        });
    };
    MainComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
            template: __webpack_require__("../../../../../src/app/main.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_status_service__["a" /* StatusService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_status_service__["a" /* StatusService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
    ], MainComponent);
    return MainComponent;
    var _a, _b;
}());

//# sourceMappingURL=main.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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

var ApiService = /** @class */ (function () {
    function ApiService() {
        this.API_URL = "https://keseich.onrender.com/"; //"http://localhost:8060/";
    }
    ApiService.prototype.login = function (user) {
        return this.getJsonFromApi('login', user)
            .then(function (j) { return j['success']; });
    };
    ApiService.prototype.getUserStatus = function (username) {
        return this.getJsonFromApi('status', { username: username });
    };
    ApiService.prototype.getNewQuestions = function (username, setIndex, dirIndex) {
        return this.getJsonFromApi('new', { username: username, setIndex: setIndex, dirIndex: dirIndex });
    };
    ApiService.prototype.getReviewQuestions = function (username, setIndex, dirIndex) {
        return this.getJsonFromApi('review', { username: username, setIndex: setIndex, dirIndex: dirIndex });
    };
    ApiService.prototype.editAnswer = function (edit, username) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.postJsonToApi('edit', edit, { username: username })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ApiService.prototype.sendResults = function (study, username) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.postJsonToApi('results', study, { username: username })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ApiService.prototype.delayMemories = function (username) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getJsonFromApi('delay', { username: username })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ApiService.prototype.expediteMemories = function (username) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getJsonFromApi('expedite', { username: username })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ApiService.prototype.postJsonToApi = function (path, json, params) {
        path = this.addParams(path, params);
        return fetch(this.API_URL + path, {
            method: 'post',
            body: JSON.stringify(json),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(function (r) { return r.text(); })
            .then(function (t) { return JSON.parse(t); })
            .catch(function (e) { return console.log(e); });
    };
    ApiService.prototype.getJsonFromApi = function (path, params) {
        path = this.addParams(path, params);
        return fetch(this.API_URL + path)
            .then(function (r) { return r.text(); })
            .then(function (t) { return JSON.parse(t); })
            .catch(function (e) { return console.log(e); });
    };
    ApiService.prototype.addParams = function (path, params) {
        if (params) {
            var paramStrings = Array.from(Object.keys(params))
                .map(function (k) { return k + "=" + encodeURIComponent(params[k]); });
            path += '?' + paramStrings.join('&');
        }
        return path;
    };
    ApiService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
    ], ApiService);
    return ApiService;
}());

//# sourceMappingURL=api.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function (route, state) {
        return this.checkLogin(state.url);
    };
    AuthGuardService.prototype.checkLogin = function (url) {
        if (this.authService.isLoggedIn) {
            return true;
        }
        // Store the attempted URL for redirecting
        this.authService.redirectUrl = url;
        // Navigate to the login page with extras
        this.router.navigate(['/login']);
        return false;
    };
    AuthGuardService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
    ], AuthGuardService);
    return AuthGuardService;
    var _a, _b;
}());

//# sourceMappingURL=auth-guard.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_fromPromise__ = __webpack_require__("../../../../rxjs/add/observable/fromPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_fromPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_fromPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api_service__ = __webpack_require__("../../../../../src/app/services/api.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = /** @class */ (function () {
    function AuthService(apiService) {
        this.apiService = apiService;
        this.isLoggedIn = false;
    }
    AuthService.prototype.login = function (user) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].fromPromise(this.apiService.login(user))
            .do(function (success) {
            if (success) {
                _this.isLoggedIn = true;
                _this.username = user.username;
            }
        });
    };
    AuthService.prototype.logout = function () {
        this.isLoggedIn = false;
        this.username = undefined;
    };
    AuthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__api_service__["a" /* ApiService */]) === "function" && _a || Object])
    ], AuthService);
    return AuthService;
    var _a;
}());

//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/status.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_util__ = __webpack_require__("../../../../../src/app/shared/util.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api_service__ = __webpack_require__("../../../../../src/app/services/api.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatusService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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





var StatusService = /** @class */ (function () {
    function StatusService(authService, apiService) {
        this.authService = authService;
        this.apiService = apiService;
        this.GRAPH_WIDTH = 500;
        this.GRAPH_HEIGHT = 100;
        this.graphs = [];
        this.username = this.authService.username;
        this.updateUserStatus();
    }
    StatusService.prototype.updateUserStatus = function (status) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!status) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.apiService.getUserStatus(this.username)];
                    case 1:
                        status = _a.sent();
                        _a.label = 2;
                    case 2:
                        this.status = status;
                        this.status.thinkingPerDay = this.status.thinkingPerDay.map(function (t) { return __WEBPACK_IMPORTED_MODULE_0_lodash__["round"](t); });
                        this.updateGraphs();
                        return [2 /*return*/];
                }
            });
        });
    };
    StatusService.prototype.updateGraphs = function () {
        var _this = this;
        var thinkingPerStudy = __WEBPACK_IMPORTED_MODULE_0_lodash__["zipWith"](this.status.thinkingPerDay, this.status.studiesPerDay, __WEBPACK_IMPORTED_MODULE_0_lodash__["divide"])
            .map(function (v) { return __WEBPACK_IMPORTED_MODULE_0_lodash__["round"](v, 2); });
        var types = [
            { name: "studies", color: "blue", series: this.status.studiesPerDay },
            { name: "new learned", color: "lightblue", series: this.status.newPerDay },
            { name: "thinking", color: "red", series: this.status.thinkingPerDay },
            { name: "points", color: "black", series: this.status.pointsPerDay }
        ];
        this.graphs = [];
        this.graphs.push(types.map(function (t) { return _this.toGraph(t, "daily "); }));
        this.graphs.push(types.map(function (t) { return _this.toGraph(t, "weekly ", 7); }));
        this.graphs.push(types.map(function (t) { return _this.toGraph(t, "monthly ", 30); }));
    };
    StatusService.prototype.toGraph = function (type, namePrefix, summarize) {
        var _this = this;
        var values = __WEBPACK_IMPORTED_MODULE_0_lodash__["clone"](type.series);
        if (summarize) {
            values.reverse();
            values = __WEBPACK_IMPORTED_MODULE_0_lodash__["chunk"](values, summarize).map(function (c) { return __WEBPACK_IMPORTED_MODULE_0_lodash__["sum"](c); });
            values.reverse();
        }
        if (values.length > 0) {
            var norm_1 = this.GRAPH_HEIGHT / __WEBPACK_IMPORTED_MODULE_0_lodash__["max"](values);
            var interval_1 = this.GRAPH_WIDTH / (values.length - 1);
            var pointString = values
                .map(function (p, i) { return (i * interval_1) + "," + (_this.GRAPH_HEIGHT + 1 - (norm_1 * p)); })
                .join(" ");
            return {
                name: namePrefix + type.name,
                values: values,
                pointString: pointString,
                color: type.color,
                style: { 'fill': 'none', 'stroke': type.color, 'stroke-width': 1 }
            };
        }
    };
    StatusService.prototype.pushBackReviews = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.apiService.delayMemories(this.username)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.updateUserStatus()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    StatusService.prototype.pushForwardReviews = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.apiService.expediteMemories(this.username)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.updateUserStatus()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    StatusService.prototype.startNewStudy = function (setIndex, dirIndex) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        //console.log(this.getCurrentLocalTimeAsUTC())
                        _a = this;
                        return [4 /*yield*/, this.apiService.getNewQuestions(this.username, setIndex, dirIndex)];
                    case 1:
                        //console.log(this.getCurrentLocalTimeAsUTC())
                        _a.currentStudy = _b.sent();
                        this.startStudy();
                        return [2 /*return*/];
                }
            });
        });
    };
    StatusService.prototype.startReviewStudy = function (setIndex, dirIndex) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.apiService.getReviewQuestions(this.username, setIndex, dirIndex)];
                    case 1:
                        _a.currentStudy = _b.sent();
                        this.startStudy();
                        return [2 /*return*/];
                }
            });
        });
    };
    StatusService.prototype.startStudy = function () {
        var _this = this;
        this.done = false;
        this.qsStillIncorrect = __WEBPACK_IMPORTED_MODULE_0_lodash__["shuffle"](this.currentStudy.questions);
        this.answers = new Map();
        this.qsStillIncorrect.forEach(function (q) {
            return _this.answers.set(q, { wordId: q.wordId, attempts: [] });
        });
        this.currentStudy.startTime = this.getCurrentLocalTimeAsUTC();
    };
    StatusService.prototype.nextQuestion = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.answered = false;
                this.currentQuestion = this.qsStillIncorrect[0];
                this.currentQuestion.options = this.currentQuestion.options ?
                    __WEBPACK_IMPORTED_MODULE_0_lodash__["shuffle"](this.currentQuestion.options) : undefined;
                console.log(this.currentQuestion);
                this.isAudioQuestion = this.currentQuestion.question.indexOf('.m4a') > 0;
                console.log(this.currentQuestion.question);
                this.showInfo = !this.isAudioQuestion
                    && !(this.currentStudy.set == 1 && this.currentStudy.direction == 1);
                this.currentAnswer = this.answers.get(this.currentQuestion);
                this.answerStartTime = Date.now();
                if (this.isAudioQuestion) {
                    this.playCurrentWordAudio();
                }
                return [2 /*return*/, this.currentQuestion];
            });
        });
    };
    StatusService.prototype.checkAnswer = function (answer) {
        if (!this.answered) {
            this.answered = true;
            if (!this.isAudioQuestion) {
                this.playCurrentWordAudio();
            }
            //update answer
            this.currentAnswerString = answer;
            var attempt = { answer: answer, duration: Date.now() - this.answerStartTime };
            this.currentAnswer.attempts.push(attempt);
            //check if correct
            var correct = false;
            if (answer.length > 0) {
                if (this.currentStudy.set === 2) {
                    correct = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__shared_util__["a" /* normalizeSentenceAnswer */])(this.currentQuestion.answers[0])
                        === __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__shared_util__["a" /* normalizeSentenceAnswer */])(answer);
                }
                else {
                    //console.log(normalizeSingleAnswer(answer), this.currentQuestion.answers)
                    correct = this.currentQuestion.answers.indexOf(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__shared_util__["b" /* normalizeSingleAnswer */])(answer)) >= 0;
                }
            }
            this.qsStillIncorrect = __WEBPACK_IMPORTED_MODULE_0_lodash__["drop"](this.qsStillIncorrect);
            if (!correct) {
                this.qsStillIncorrect.push(this.currentQuestion);
            }
            this.endStudyIfDone();
            return correct;
        }
    };
    StatusService.prototype.shouldHaveBeenAccepted = function () {
        this.qsStillIncorrect = __WEBPACK_IMPORTED_MODULE_0_lodash__["dropRight"](this.qsStillIncorrect);
        this.endStudyIfDone();
        this.apiService.editAnswer({
            set: this.currentStudy.set,
            direction: this.currentStudy.direction,
            wordId: this.currentQuestion.wordId,
            answer: this.currentAnswerString
        }, this.username);
    };
    StatusService.prototype.endStudyIfDone = function () {
        var _this = this;
        if (this.qsStillIncorrect.length === 0) {
            this.done = true;
            this.currentStudy.endTime = this.getCurrentLocalTimeAsUTC();
            this.currentStudy.answers = Array.from(this.answers.values());
            this.apiService.sendResults(this.currentStudy, this.authService.username)
                .then(function (s) { return _this.updateUserStatus(s); });
            //.then(() => this.done = true);
        }
    };
    StatusService.prototype.playCurrentWordAudio = function () {
        if (this.currentQuestion && this.currentQuestion.audio) {
            var audio = new Audio();
            audio.src = this.currentQuestion.audio;
            audio.load();
            audio.play();
        }
    };
    StatusService.prototype.getCurrentLocalTimeAsUTC = function () {
        var date = new Date(Date.now());
        var offset = 0; //days
        date.setTime(date.getTime() - date.getTimezoneOffset() * 60 * 1000 - 24 * offset * 60 * 60 * 1000);
        //console.log("current offset:", offset, "days, time: ", new Date(date))
        return date;
    };
    StatusService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__api_service__["a" /* ApiService */]) === "function" && _b || Object])
    ], StatusService);
    return StatusService;
    var _a, _b;
}());

//# sourceMappingURL=status.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/consts.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export AUDIO_LOCATION */
/* unused harmony export STUDY_TYPE */
/* unused harmony export BAER */
/* unused harmony export ENGL */
/* unused harmony export AUDI */
/* unused harmony export INFO */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SETS; });
var AUDIO_LOCATION = "https://keseich.onrender.com/"; //'http://localhost:8060/';
var STUDY_TYPE;
(function (STUDY_TYPE) {
    STUDY_TYPE["NEW"] = "new";
    STUDY_TYPE["REVIEW"] = "review";
})(STUDY_TYPE || (STUDY_TYPE = {}));
var BAER = "bärndütsch";
var ENGL = "english";
var AUDI = "id";
var INFO = "info";
var SETS = [{
        name: "Vocab",
        collection: "woerter",
        idField: "id",
        directions: [
            { name: "Schrybe", question: ENGL, answer: BAER, extras: [] },
            { name: "Läse", question: BAER, answer: ENGL, extras: [INFO] },
            { name: "Lose", question: AUDI, answer: ENGL, extras: [] }
        ],
        info: [INFO],
        audio: AUDI
    }]; /*, {
  name: "Sentences",
  collection: "core10k",
  idField: "2k1-Kanken Opt Sort",
  directions: [
    {
      name: "Listening", numOptions: 10, question: SEN_AUD, answer: SEN_JAP,
      extras: [SEN_ENG]
    },
    {
      name: "Reading", numOptions: 10, question: SEN_JAP, answer: SEN_ENG,
      extras: [SEN_JAP]
    },
    {
      name: "Writing", numOptions: 10, question: SEN_ENG, answer: SEN_JAP,
      extras: []
    }
  ],
  info: [],
  audio: SEN_AUD
}];*/
//# sourceMappingURL=consts.js.map

/***/ }),

/***/ "../../../../../src/app/shared/util.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* unused harmony export createAnswers */
/* harmony export (immutable) */ __webpack_exports__["b"] = normalizeSingleAnswer;
/* harmony export (immutable) */ __webpack_exports__["a"] = normalizeSentenceAnswer;

var words = ['the', 'and', 'with', 'at', 'to', 'for', 'a', 'up'];
var endings = ['th', 'te', 'ed', 'ly', 'ty', 'al', 'ing', 'ment', 'ness', 'icity', 'tion', 'ous', 't', 'e', 's'];
function createAnswers(entry) {
    return entry.replace(/ *\([^)]*\)*/g, "") //remove parentheses
        .replace(/ *\[[^\]]*]/g, "") //remove square brackets
        .replace(/;/g, ",") //semicolons to commas
        .split(',') //split alternatives
        .map(function (a) { return normalizeAnswer(a); });
}
function normalizeSingleAnswer(answer) {
    answer = answer.replace(/ *\([^)]*\)*/g, ""); //remove parentheses
    return normalizeAnswer(answer);
}
function normalizeAnswer(answer) {
    answer = __WEBPACK_IMPORTED_MODULE_0_lodash__["trim"](__WEBPACK_IMPORTED_MODULE_0_lodash__["toLower"](answer)); //lower case and trim before removing words
    answer = removeIgnoredWords(answer); //replace all ignored words
    answer = answer.replace(/[\/&-.,'* ]/g, ""); //remove eng special chars
    answer = answer.replace(/[。　]/g, ""); //remove jap special chars
    return removeIgnoredEndings(answer); //remove ignored endings
}
function normalizeSentenceAnswer(answer) {
    //polite, verb endings, particles
    answer = answer.replace(/[ですま、くぐぶつむうるぬ。よねか　]/g, "");
    return answer;
}
function removeIgnoredWords(s) {
    words.forEach(function (w) { return s = s.replace(new RegExp(' ' + w, 'g'), ''); });
    words.forEach(function (w) { return s = s.replace(new RegExp(w + ' ', 'g'), ''); });
    return s;
}
function removeIgnoredEndings(s) {
    endings.forEach(function (w) { return s = s.replace(new RegExp(w + '$'), ''); });
    return s;
}
//# sourceMappingURL=util.js.map

/***/ }),

/***/ "../../../../../src/app/study.component.html":
/***/ (function(module, exports) {

module.exports = "<form *ngIf=\"status.currentQuestion\" (ngSubmit)=\"check()\" #answerForm=\"ngForm\" style=\"padding-left: 30px; padding-right: 50px;\">\n  <h1 (click)=\"status.playCurrentWordAudio()\">{{status.isAudioQuestion ? \"🔊\" : status.currentQuestion.question}}</h1>\n  <p *ngIf=\"status.showInfo\">{{status.currentQuestion.info.join(' | ')}}</p>\n  <br>\n  <br>\n  <input *ngIf=\"!status.currentQuestion.options\" autofocus2 id=\"answ\" name=\"answ\" class=\"form-control answer-input\"\n    width=\"100%\" [(ngModel)]=\"answer\" #answ=\"ngModel\"\n    [ngStyle]=\"{'background-color': bgColor}\" autocomplete=\"off\">\n  <div>\n    <span *ngFor=\"let opt of status.currentQuestion.options; let o = index\">\n      <button (click)=\"setAnswer(opt)\"\n          [ngStyle]=\"{'font-size': '200%', 'background-color': opt === answer ? bgColor: 'white'}\">\n        {{opt}}\n      </button>\n      <br *ngIf=\"o % 5 == 4\">\n    </span>\n  </div>\n  <br>\n  {{timeRemaining}}\n  <br>\n  <br>\n  <h4 *ngIf=\"status.answered\">{{status.currentQuestion.fullAnswers}}</h4>\n  <h4 *ngIf=\"status.answered && status.currentQuestion.collection !== 'kanji'\">{{status.currentQuestion.otherFields.join(' | ')}}</h4>\n  <p *ngIf=\"status.answered && status.currentQuestion.collection === 'kanji'\">{{status.currentQuestion.otherFields.join(' | ')}}</p>\n</form>"

/***/ }),

/***/ "../../../../../src/app/study.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_status_service__ = __webpack_require__("../../../../../src/app/services/status.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StudyComponent = /** @class */ (function () {
    function StudyComponent(status, router) {
        this.status = status;
        this.router = router;
        this.DELAY = 3000;
        this.TIME_LIMIT = 10;
        this.next();
    }
    StudyComponent.prototype.next = function () {
        this.answer = "";
        this.checked = false;
        this.bgColor = 'White';
        if (!this.status.done) {
            this.status.nextQuestion();
            this.timeRemaining = this.TIME_LIMIT;
            if (this.status.currentQuestion.options) {
                this.timeRemaining *= 2;
            }
            this.timer = setInterval(this.decrementTimer.bind(this), 1000);
        }
        else {
            this.router.navigate(['/main']);
        }
    };
    StudyComponent.prototype.decrementTimer = function () {
        this.timeRemaining--;
        if (this.timeRemaining === 0) {
            this.check();
        }
    };
    StudyComponent.prototype.setAnswer = function (answer) {
        this.answer = answer;
    };
    StudyComponent.prototype.check = function () {
        var _this = this;
        //only check once!
        if (!this.checked) {
            this.checked = true;
            clearInterval(this.timer);
            this.correct = this.status.checkAnswer(this.answer);
            if (this.correct) {
                this.bgColor = 'PaleGreen';
                this.timeout = setTimeout(this.next.bind(this), this.DELAY);
            }
            else {
                this.bgColor = 'LightCoral';
                this.timeout = setTimeout(function () { return _this.router.navigate(['/view']); }, this.DELAY);
            }
        }
        else if (this.checked) {
            //accelerate
            clearTimeout(this.timeout);
            if (this.correct) {
                this.next();
            }
            else {
                setTimeout(function () { return _this.router.navigate(['/view']); }, 50);
            }
        }
    };
    StudyComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
            template: __webpack_require__("../../../../../src/app/study.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_status_service__["a" /* StatusService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_status_service__["a" /* StatusService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
    ], StudyComponent);
    return StudyComponent;
    var _a, _b;
}());

//# sourceMappingURL=study.component.js.map

/***/ }),

/***/ "../../../../../src/app/view.component.html":
/***/ (function(module, exports) {

module.exports = "<div (window:keydown.enter)=\"next()\" (mouseup)=\"next()\">\n  <h1 (click)=\"status.playCurrentWordAudio()\">{{status.isAudioQuestion ? \"🔊\" : status.currentQuestion.question}}</h1>\n  <br>\n  <h2>{{status.currentQuestion.fullAnswers}}</h2>\n  <br>\n  <h3 *ngIf=\"status.currentQuestion.collection !== 'kanji'\">{{status.currentQuestion.otherFields.join(' | ')}}</h3>\n  <p *ngIf=\"status.currentQuestion.collection === 'kanji'\">{{status.currentQuestion.otherFields.join(' | ')}}</p>\n  <br>\n  <p>{{status.currentQuestion.info.join(' | ')}}</p>\n  <br>\n  <h4>You answered: {{status.currentAnswerString}}</h4>\n  <br>\n  <button type=\"button\" (click)=\"status.shouldHaveBeenAccepted()\">\n    Should have been accepted!\n  </button>\n</div>"

/***/ }),

/***/ "../../../../../src/app/view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_status_service__ = __webpack_require__("../../../../../src/app/services/status.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ViewComponent = /** @class */ (function () {
    function ViewComponent(status, router) {
        this.status = status;
        this.router = router;
    }
    ViewComponent.prototype.next = function () {
        var _this = this;
        setTimeout(function () { return _this.router.navigate(['/study']); }, 50);
    };
    ViewComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
            template: __webpack_require__("../../../../../src/app/view.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_status_service__["a" /* StatusService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_status_service__["a" /* StatusService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
    ], ViewComponent);
    return ViewComponent;
    var _a, _b;
}());

//# sourceMappingURL=view.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map