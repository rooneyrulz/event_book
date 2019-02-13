(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule, RoutingComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutingComponents", function() { return RoutingComponents; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_create_event_create_event_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/create-event/create-event.component */ "./src/app/components/create-event/create-event.component.ts");
/* harmony import */ var _components_items_items_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/items/items.component */ "./src/app/components/items/items.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/sign-up/sign-up.component */ "./src/app/components/sign-up/sign-up.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_wild_card_wild_card_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/wild-card/wild-card.component */ "./src/app/components/wild-card/wild-card.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");












var routes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], pathMatch: 'full' },
    { path: 'dashboard', component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"], pathMatch: 'full', canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]] },
    { path: 'item/create', component: _components_create_event_create_event_component__WEBPACK_IMPORTED_MODULE_5__["CreateEventComponent"], pathMatch: 'full', canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]] },
    { path: 'items', component: _components_items_items_component__WEBPACK_IMPORTED_MODULE_6__["ItemsComponent"], pathMatch: 'full', canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]] },
    { path: 'about', component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"], pathMatch: 'full' },
    { path: 'sign-up', component: _components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_8__["SignUpComponent"], pathMatch: 'full' },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"], pathMatch: 'full' },
    { path: '**', component: _components_wild_card_wild_card_component__WEBPACK_IMPORTED_MODULE_10__["WildCardComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

var RoutingComponents = [_components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"], _components_create_event_create_event_component__WEBPACK_IMPORTED_MODULE_5__["CreateEventComponent"], _components_items_items_component__WEBPACK_IMPORTED_MODULE_6__["ItemsComponent"], _components_about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"], _components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_8__["SignUpComponent"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"], _components_wild_card_wild_card_component__WEBPACK_IMPORTED_MODULE_10__["WildCardComponent"]];


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <app-navbar></app-navbar>\n  <div class=\"container main-container\">\n    <div class=\"flash-wrapper container\">\n      <ng-flash-message class=\"text-center\"></ng-flash-message>\n    </div>\n    <router-outlet></router-outlet>\n  </div>\n  <app-footer></app-footer>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'client';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: tokenGetter, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenGetter", function() { return tokenGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _layouts_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./layouts/navbar/navbar.component */ "./src/app/layouts/navbar/navbar.component.ts");
/* harmony import */ var _layouts_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./layouts/footer/footer.component */ "./src/app/layouts/footer/footer.component.ts");
/* harmony import */ var _services_event_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/event.service */ "./src/app/services/event.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");















function tokenGetter() {
    return localStorage.getItem('access_token');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _layouts_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"]
            ].concat(_app_routing_module__WEBPACK_IMPORTED_MODULE_7__["RoutingComponents"], [
                _layouts_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"]
            ]),
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                ng_flash_messages__WEBPACK_IMPORTED_MODULE_6__["NgFlashMessagesModule"].forRoot(),
                _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_5__["JwtModule"].forRoot({
                    config: {
                        tokenGetter: tokenGetter,
                        blacklistedRoutes: [],
                        whitelistedDomains: ['http://localhost:3000']
                    }
                })
            ],
            providers: [
                _services_event_service__WEBPACK_IMPORTED_MODULE_11__["EventService"],
                _services_validate_service__WEBPACK_IMPORTED_MODULE_13__["ValidateService"],
                _services_auth_service__WEBPACK_IMPORTED_MODULE_12__["AuthService"],
                _guards_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]
                /*
                {
                  provide: HTTP_INTERCEPTORS,
                  useClass: TokenInterceptorService,
                  multi: true
                }
                */
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/about/about.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/about/about.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/about/about.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/about/about.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"About\">\n  <div class=\"About-container\">\n    <div class=\"py-4 px-3\">\n      <h1 class=\"text-center display-4\">About</h1>\n      <hr>\n      <br>\n      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, velit molestias nisi harum et repellendus repellat voluptate laudantium laborum, consectetur illo animi perspiciatis dolorum odio inventore. Incidunt facere unde error tempora aliquam tenetur similique libero dolores iste, voluptatem quis voluptatum vitae commodi quae atque alias eos optio. Veritatis, totam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis recusandae dignissimos, natus assumenda ad error eos at repellendus ab quam provident atque libero quasi voluptas nam ullam consequatur amet omnis. </p>\n      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam est sed temporibus enim non magni expedita quaerat incidunt deserunt autem.</p>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/about/about.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/components/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/components/about/about.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/components/create-event/create-event.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/create-event/create-event.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".Create-Event {\r\n  width: 70%;\r\n  margin: auto;\r\n  padding-left: 1rem;\r\n  padding-right: 1rem;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jcmVhdGUtZXZlbnQvY3JlYXRlLWV2ZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixvQkFBb0I7Q0FDckIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NyZWF0ZS1ldmVudC9jcmVhdGUtZXZlbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5DcmVhdGUtRXZlbnQge1xyXG4gIHdpZHRoOiA3MCU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcclxuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/create-event/create-event.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/create-event/create-event.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"Create-Event\">\n  <div class=\"Create-Event-container\">\n    <div class=\"py-4 px-3\">\n      <h1 class=\"text-center display-4\">Create Events</h1>\n      <h4 class=\"text-muted text-center\">Let's Create Your Own Event</h4>\n      <br><br>\n      <div class=\"\">\n        <form (submit)=\"onHandleSubmit(userData)\" #userData=\"ngForm\">\n          <div class=\"row\">\n            <div class=\"col col-sm-12\">\n              <div class=\"form-group\">\n                <label for=\"name\"><strong>Event</strong></label>\n                <input [class.is-invalid]=\"name.invalid && name.touched\" id=\"name\" type=\"text\" name=\"name\" class=\"form-control\" placeholder=\"Enter Event Name...\"\n                #name=\"ngModel\" ngModel required>\n                <div>\n                  <small class=\"text-danger\" *ngIf=\"name.invalid && name.touched\">Invalid name!</small>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col col-sm-12\">\n              <div class=\"form-group\">\n                <label for=\"price\"><strong>Price</strong></label>\n                <input [class.is-invalid]=\"price.invalid && price.touched\" id=\"price\" type=\"text\" name=\"price\" class=\"form-control\" placeholder=\"Enter Price...\"\n                #price=\"ngModel\" ngModel required>\n                <div>\n                  <small class=\"text-danger\" *ngIf=\"price.invalid && price.touched\">Invalid price!</small>\n                </div>\n              </div>\n            </div>\n          </div>\n          <button [class.disabled]=\"userData.form.invalid\" type=\"submit\" class=\"btn btn-primary\">ADD EVENT</button>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/create-event/create-event.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/create-event/create-event.component.ts ***!
  \*******************************************************************/
/*! exports provided: CreateEventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateEventComponent", function() { return CreateEventComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_event_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/event.service */ "./src/app/services/event.service.ts");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/validate.service */ "./src/app/services/validate.service.ts");






var CreateEventComponent = /** @class */ (function () {
    function CreateEventComponent(router, flashMessage, eventService, validateService) {
        this.router = router;
        this.flashMessage = flashMessage;
        this.eventService = eventService;
        this.validateService = validateService;
    }
    CreateEventComponent.prototype.ngOnInit = function () { };
    CreateEventComponent.prototype.onHandleSubmit = function (form) {
        var _this = this;
        var event = {
            name: form.value.name,
            price: form.value.price
        };
        if (!this.validateService.validateEventName(event.name)) {
            this.flashMessage.showFlashMessage({
                messages: ['Invalid Event!'],
                dismissible: true,
                timeout: 3000,
                type: 'danger'
            });
            this.router.navigate(['item/create']);
            return false;
        }
        else {
            this.eventService.createUserEvent(event).subscribe(function (data) {
                if (!data) {
                    _this.flashMessage.showFlashMessage({
                        messages: ['Something went wrong!'],
                        dismissible: true,
                        timeout: 3000,
                        type: 'danger'
                    });
                    _this.router.navigate(['item/create']);
                    return false;
                }
                else {
                    _this.flashMessage.showFlashMessage({
                        messages: ['Your event added successfully!'],
                        dismissible: true,
                        timeout: 3000,
                        type: 'success'
                    });
                    _this.router.navigate(['item/create']);
                    form.resetForm();
                }
            });
        }
    };
    CreateEventComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-event',
            template: __webpack_require__(/*! ./create-event.component.html */ "./src/app/components/create-event/create-event.component.html"),
            styles: [__webpack_require__(/*! ./create-event.component.css */ "./src/app/components/create-event/create-event.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__["NgFlashMessageService"],
            _services_event_service__WEBPACK_IMPORTED_MODULE_4__["EventService"],
            _services_validate_service__WEBPACK_IMPORTED_MODULE_5__["ValidateService"]])
    ], CreateEventComponent);
    return CreateEventComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\r\n  text-shadow: 2px 1px 5px #111;\r\n  font-size: 60px;\r\n  font-weight: bold;\r\n}\r\n\r\n.jumbotron {\r\n  padding: 8rem 5rem;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw4QkFBOEI7RUFDOUIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtDQUNuQjs7QUFFRDtFQUNFLG1CQUFtQjtDQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDEge1xyXG4gIHRleHQtc2hhZG93OiAycHggMXB4IDVweCAjMTExO1xyXG4gIGZvbnQtc2l6ZTogNjBweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmp1bWJvdHJvbiB7XHJcbiAgcGFkZGluZzogOHJlbSA1cmVtO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"Dashboard\">\n    <div class=\"Home-container\">\n      <div class=\"py-4 px-3\">\n        <div class=\"jumbotron bg-danger text-center text-light\">\n          <h1 *ngIf=\"currentUser\" class=\"\"> WELCOME {{ currentUser | uppercase }}</h1><br>\n          <a href=\"https://www.github.com/rooneyrulz\" class=\"btn btn-lg btn-light text-danger\">VISIT GITHUB</a>\n        </div>\n      </div>\n    </div>\n  </div>\n\n"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(authService) {
        this.authService = authService;
        this.currentUser = null;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.title = "Welcome";
        this.loadCurrentUser();
    };
    DashboardComponent.prototype.loadCurrentUser = function () {
        var _this = this;
        this.authService.getCurrentUser().subscribe(function (user) {
            if (!user) {
                //
            }
            _this.currentUser = user.name;
        });
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/components/dashboard/dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".jumbotron {\r\n  background-image: url('/assets/images/img4\\ \\(2\\).jpg');\r\n  background-size: cover;\r\n  background-position: center;\r\n  padding: 8rem 5rem;\r\n}\r\n\r\nh1 {\r\n  text-shadow: 4px 2px 8px #111;\r\n  font-weight: bold;\r\n}\r\n\r\np {\r\n  text-shadow: 1px 1px 4px #111;\r\n}\r\n\r\n.btn {\r\n  margin: .5em;\r\n  box-shadow: 2px 2px 4px #111;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdEQUF3RDtFQUN4RCx1QkFBdUI7RUFDdkIsNEJBQTRCO0VBQzVCLG1CQUFtQjtDQUNwQjs7QUFFRDtFQUNFLDhCQUE4QjtFQUM5QixrQkFBa0I7Q0FDbkI7O0FBRUQ7RUFDRSw4QkFBOEI7Q0FDL0I7O0FBRUQ7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0NBQzlCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5qdW1ib3Ryb24ge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWFnZXMvaW1nNFxcIFxcKDJcXCkuanBnJyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogOHJlbSA1cmVtO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgdGV4dC1zaGFkb3c6IDRweCAycHggOHB4ICMxMTE7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbnAge1xyXG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDRweCAjMTExO1xyXG59XHJcblxyXG4uYnRuIHtcclxuICBtYXJnaW46IC41ZW07XHJcbiAgYm94LXNoYWRvdzogMnB4IDJweCA0cHggIzExMTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"Home\">\n  <div class=\"Home-container\">\n    <div class=\"py-4 px-3\">\n      <div class=\"jumbotron text-center text-light\">\n        <h1 class=\"display-1 text-danger\">{{ title_1 | uppercase }} <span class=\"text-light\">{{ title_2 | uppercase }}</span></h1><br>\n        <a routerLink=\"/sign-up\" class=\"btn btn-danger text-light px-5 py-3\">SIGN UP</a>\n        <a routerLink=\"/login\" class=\"btn btn-light text-danger px-5 py-3\">LOGIN</a>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.title_1 = "Event";
        this.title_2 = "Book";
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/items/items.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/items/items.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".Items {\r\n  width: 70%;\r\n  margin: auto;\r\n  padding-left: 1rem;\r\n  padding-right: 1rem;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pdGVtcy9pdGVtcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsb0JBQW9CO0NBQ3JCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9pdGVtcy9pdGVtcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLkl0ZW1zIHtcclxuICB3aWR0aDogNzAlO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBwYWRkaW5nLWxlZnQ6IDFyZW07XHJcbiAgcGFkZGluZy1yaWdodDogMXJlbTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/items/items.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/items/items.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"Items\">\n  <div class=\"Items-container\">\n    <div class=\"py-4 px-3\">\n      <h1 class=\"text-center display-4\">Events</h1>\n      <h4 class=\"text-center text-muted\">All Events</h4>\n      <br><br>\n      <ng-container *ngIf=\"UserEvent.length; else noEvents\">\n        <div class=\"row\">\n          <div class=\"col col-sm-12\">\n              <div *ngFor=\"let event of UserEvent\"  class=\"card my-3\">\n                <div class=\"card-content\">\n                  <ul class=\"list-group\">\n                    <li class=\"list-group-item\">\n                      <strong>Event</strong>\n                      <span class=\"float-right\">{{ event.name }}</span>\n                    </li>\n                    <li class=\"list-group-item\">\n                      <strong>Price</strong>\n                      <span class=\"float-right\">{{ event.price }}</span>\n                    </li>\n                  </ul>\n                </div>\n                <div class=\"card-footer\">\n                  <button (click)=\"removeUserEvent(event._id)\" class=\"btn btn-danger\">REMOVE</button>\n                </div>\n              </div>\n          </div>\n        </div>\n      </ng-container>\n      <ng-template #noEvents>\n        <div class=\"row\">\n          <div class=\"col col-sm-12\">\n            <h5 class=\"text-center text-danger\">It seems You have not created any event yet,Let's create some events...</h5>\n          </div>\n        </div>\n      </ng-template>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/items/items.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/items/items.component.ts ***!
  \*****************************************************/
/*! exports provided: ItemsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsComponent", function() { return ItemsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_event_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/event.service */ "./src/app/services/event.service.ts");





var ItemsComponent = /** @class */ (function () {
    function ItemsComponent(eventService, flashMessage, router) {
        this.eventService = eventService;
        this.flashMessage = flashMessage;
        this.router = router;
        this.id = null;
    }
    ItemsComponent.prototype.ngOnInit = function () {
        this.id = JSON.parse(localStorage.getItem('access_user')).id;
        this.getUserEvents();
    };
    ItemsComponent.prototype.getUserEvents = function () {
        var _this = this;
        this.eventService.fetchUserEvents(this.id).subscribe(function (data) {
            _this.UserEvent = data.createdEvents;
        });
    };
    ItemsComponent.prototype.removeUserEvent = function (id) {
        var _this = this;
        if (confirm('Are you sure you want to remove this event from list?')) {
            this.eventService.deleteUserEvent(id).subscribe(function (data) {
                if (!data) {
                    _this.flashMessage.showFlashMessage({
                        messages: ['Something went wrong, try again later!'],
                        dismissible: true,
                        timeout: 3000,
                        type: 'danger'
                    });
                    _this.router.navigate(['items']);
                    return false;
                }
                else {
                    _this.flashMessage.showFlashMessage({
                        messages: ["Event deleted successfully, Let's add one!"],
                        dismissible: true,
                        timeout: 3000,
                        type: 'success'
                    });
                    _this.router.navigate(['item/create']);
                    return true;
                }
            });
        }
        else {
            this.router.navigate(['items']);
            return false;
        }
    };
    ItemsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-items',
            template: __webpack_require__(/*! ./items.component.html */ "./src/app/components/items/items.component.html"),
            styles: [__webpack_require__(/*! ./items.component.css */ "./src/app/components/items/items.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_event_service__WEBPACK_IMPORTED_MODULE_4__["EventService"],
            ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__["NgFlashMessageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ItemsComponent);
    return ItemsComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".Login {\r\n  width: 60%;\r\n  margin: auto;\r\n  padding-left: 1rem;\r\n  padding-right: 1rem;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsb0JBQW9CO0NBQ3JCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLkxvZ2luIHtcclxuICB3aWR0aDogNjAlO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBwYWRkaW5nLWxlZnQ6IDFyZW07XHJcbiAgcGFkZGluZy1yaWdodDogMXJlbTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"Login\">\n  <div class=\"Login-container\">\n    <div class=\"py-4 px-3\">\n      <h1 class=\"text-center display-4\">Log In</h1>\n      <h4 class=\"text-center text-muted\">Let's Get Into Event Book</h4>\n      <br><br>\n      <div class=\"\">\n        <form (submit)=\"onAuthenticateUser(userData)\" #userData=\"ngForm\">\n          <div class=\"row\">\n            <div class=\"col col-sm-12\">\n              <div class=\"form-group\">\n                <label for=\"username\">Username</label>\n                <input id=\"username\" type=\"text\" name=\"username\" class=\"form-control\" placeholder=\"Enter Username...\"\n                ngModel required >\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col col-sm-12\">\n              <div class=\"form-group\">\n                <label for=\"password\">Password</label>\n                <input id=\"password\" type=\"password\" name=\"password\" class=\"form-control\" placeholder=\"Enter Password...\"\n                ngModel required >\n              </div>\n            </div>\n          </div>\n          <button [class.disabled]=\"userData.form.invalid\" id=\"btn-login\" type=\"submit\" class=\"btn btn-success btn-block\">LOGIN</button>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/validate.service */ "./src/app/services/validate.service.ts");






var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, validateService, flashMessage, router) {
        this.authService = authService;
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.onAuthenticateUser = function (form) {
        var _this = this;
        var user = {
            username: form.value.username,
            password: form.value.password
        };
        if (!this.validateService.validateUsername(user.username)) {
            this.flashMessage.showFlashMessage({
                messages: ['Invalid Username!'],
                dismissible: true,
                timeout: 3000,
                type: 'danger'
            });
            this.router.navigate(['login']);
            return false;
        }
        else {
            this.authService.authenticateUser(user).subscribe(function (data) {
                if (data) {
                    var token = data.token, user_1 = data.user;
                    _this.authService.storeUserData(token, user_1);
                    _this.flashMessage.showFlashMessage({
                        messages: ['You are logged in!'],
                        dismissible: true,
                        timeout: 3000,
                        type: 'success'
                    });
                    _this.router.navigate(['dashboard']);
                    form.resetForm();
                    return true;
                }
                else {
                    _this.flashMessage.showFlashMessage({
                        messages: ['User not found!'],
                        dismissible: true,
                        timeout: 3000,
                        type: 'danger'
                    });
                    _this.router.navigate(['login']);
                    return false;
                }
            });
        }
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _services_validate_service__WEBPACK_IMPORTED_MODULE_5__["ValidateService"],
            ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__["NgFlashMessageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/sign-up/sign-up.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/sign-up/sign-up.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".Signup {\r\n  width: 70%;\r\n  margin: auto;\r\n  padding-left: 1rem;\r\n  padding-right: 1rem;\r\n}\r\n\r\n#btn-signup {\r\n  background: #325D88\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWduLXVwL3NpZ24tdXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG9CQUFvQjtDQUNyQjs7QUFFRDtFQUNFLG1CQUFtQjtDQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lnbi11cC9zaWduLXVwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuU2lnbnVwIHtcclxuICB3aWR0aDogNzAlO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBwYWRkaW5nLWxlZnQ6IDFyZW07XHJcbiAgcGFkZGluZy1yaWdodDogMXJlbTtcclxufVxyXG5cclxuI2J0bi1zaWdudXAge1xyXG4gIGJhY2tncm91bmQ6ICMzMjVEODhcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/sign-up/sign-up.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/sign-up/sign-up.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"Signup\">\n  <div class=\"Signup-container\">\n    <div class=\"py-4 px-3\">\n      <h1 class=\"text-center  display-4\">Sign Up</h1>\n      <h4 class=\"text-center text-muted\">Let's Create Your New Event Book Account</h4>\n      <br><br>\n      <div class=\"\">\n        <form (submit)=\"onHandleRegister(userData)\" #userData=\"ngForm\">\n          <div class=\"row\">\n            <div class=\"col col-sm-12\">\n              <div class=\"form-group\">\n                <label for=\"name\">Name</label>\n                <input [class.is-invalid]=\"name.invalid && name.touched\" id=\"name\" type=\"text\" name=\"name\" class=\"form-control\" placeholder=\"Enter Name...\"\n                #name=\"ngModel\" ngModel required>\n                <div>\n                  <small class=\"text-danger\" *ngIf=\"name.invalid && name.touched\">Invalid name!</small>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col col-sm-12 col-md-6\">\n              <div class=\"form-group\">\n                <label for=\"email\">Email</label>\n                <input id=\"email\" type=\"email\" name=\"email\" class=\"form-control\" placeholder=\"Enter Email...\"\n                ngModel required >\n              </div>\n            </div>\n            <div class=\"col col-sm-12 col-md-6\">\n              <div class=\"form-group\">\n                <label for=\"username\">Username</label>\n                <input id=\"username\" type=\"text\" name=\"username\" class=\"form-control\" placeholder=\"Enter Username...\"\n                ngModel required >\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col col-sm-12\">\n              <div class=\"form-group\">\n                <label for=\"password\">Password</label>\n                <input id=\"password\" type=\"password\" name=\"password\" class=\"form-control\" placeholder=\"Enter Password...\"\n                ngModel required >\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col col-sm-12\">\n              <div class=\"form-group\">\n                <label for=\"password2\">Confirm Password</label>\n                <input id=\"password2\" type=\"password\" name=\"password2\" class=\"form-control\" placeholder=\"Confirm Password...\"\n                ngModel required >\n              </div>\n            </div>\n          </div>\n          <button [class.disabled]=\"userData.form.invalid\" id=\"btn-signup\" type=\"submit\" class=\"btn text-light btn-block\">SIGN UP</button>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/sign-up/sign-up.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/sign-up/sign-up.component.ts ***!
  \*********************************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/validate.service */ "./src/app/services/validate.service.ts");






var SignUpComponent = /** @class */ (function () {
    function SignUpComponent(validateService, authService, router, flashMessage) {
        this.validateService = validateService;
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    SignUpComponent.prototype.ngOnInit = function () { };
    SignUpComponent.prototype.onHandleRegister = function (form) {
        var _this = this;
        var user = {
            name: form.value.name,
            email: form.value.email,
            username: form.value.username,
            password: form.value.password,
            password2: form.value.password2
        };
        if (!this.validateService.validateName(user.name)) {
            this.flashMessage.showFlashMessage({
                messages: ['Invalid Name!'],
                dismissible: true,
                timeout: 3000,
                type: 'danger'
            });
            this.router.navigate(['sign-up']);
            return false;
        }
        if (!this.validateService.validateEmail(user.email)) {
            this.flashMessage.showFlashMessage({
                messages: ['Invalid Email Id!'],
                dismissible: true,
                timeout: 3000,
                type: 'danger'
            });
            this.router.navigate(['sign-up']);
            return false;
        }
        if (!this.validateService.validateUsername(user.username)) {
            this.flashMessage.showFlashMessage({
                messages: ['Invalid Username!'],
                dismissible: true,
                timeout: 3000,
                type: 'danger'
            });
            this.router.navigate(['sign-up']);
            return false;
        }
        if (!this.validateService.validatePassword(user.password, user.password2)) {
            this.flashMessage.showFlashMessage({
                messages: ['Password not matched!'],
                dismissible: true,
                timeout: 3000,
                type: 'danger'
            });
            this.router.navigate(['sign-up']);
            return false;
        }
        else {
            this.authService.createUser(user).subscribe(function (data) {
                if (!data) {
                    _this.flashMessage.showFlashMessage({
                        messages: ['Something went wrong...!'],
                        dismissible: true,
                        timeout: 3000,
                        type: 'danger'
                    });
                    _this.router.navigate(['sign-up']);
                    return false;
                }
                else {
                    _this.flashMessage.showFlashMessage({
                        messages: ['User created successfully!'],
                        dismissible: true,
                        timeout: 3000,
                        type: 'success'
                    });
                    _this.router.navigate(['login']);
                    form.resetForm();
                    return true;
                }
            });
        }
    };
    SignUpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sign-up',
            template: __webpack_require__(/*! ./sign-up.component.html */ "./src/app/components/sign-up/sign-up.component.html"),
            styles: [__webpack_require__(/*! ./sign-up.component.css */ "./src/app/components/sign-up/sign-up.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_validate_service__WEBPACK_IMPORTED_MODULE_5__["ValidateService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__["NgFlashMessageService"]])
    ], SignUpComponent);
    return SignUpComponent;
}());



/***/ }),

/***/ "./src/app/components/wild-card/wild-card.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/wild-card/wild-card.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd2lsZC1jYXJkL3dpbGQtY2FyZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/wild-card/wild-card.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/wild-card/wild-card.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"WildCard\">\n  <div class=\"WildCard-container my-5\">\n    <div class=\"py-4 px-3\">\n      <h1 class=\"text-danger\">Page Not Found....</h1>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/wild-card/wild-card.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/wild-card/wild-card.component.ts ***!
  \*************************************************************/
/*! exports provided: WildCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WildCardComponent", function() { return WildCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WildCardComponent = /** @class */ (function () {
    function WildCardComponent() {
    }
    WildCardComponent.prototype.ngOnInit = function () {
    };
    WildCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-wild-card',
            template: __webpack_require__(/*! ./wild-card.component.html */ "./src/app/components/wild-card/wild-card.component.html"),
            styles: [__webpack_require__(/*! ./wild-card.component.css */ "./src/app/components/wild-card/wild-card.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WildCardComponent);
    return WildCardComponent;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");





var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, flashMessage, authService) {
        this.router = router;
        this.flashMessage = flashMessage;
        this.authService = authService;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (!this.authService.isLoggedIn()) {
            this.flashMessage.showFlashMessage({
                messages: ['Please login first!'],
                dismissible: true,
                timeout: 3000,
                type: 'danger'
            });
            this.router.navigate(['login']);
            return false;
        }
        else {
            return true;
        }
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__["NgFlashMessageService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/layouts/footer/footer.component.css":
/*!*****************************************************!*\
  !*** ./src/app/layouts/footer/footer.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/layouts/footer/footer.component.html":
/*!******************************************************!*\
  !*** ./src/app/layouts/footer/footer.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<hr>\n<footer class=\"footer text-center mt-0\">\n  <div class=\"container p-4\">\n    <p class=\"lead text-muted mb-0\">Shopping Cart <strong>&copy;</strong> By Mr.RooneyRulz@Programmers.Hub 2k19</p>\n    <small class=\"text-muted\">All Credits Goes To RulzProgrammersHub...</small>\n  </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/layouts/footer/footer.component.ts":
/*!****************************************************!*\
  !*** ./src/app/layouts/footer/footer.component.ts ***!
  \****************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/layouts/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/layouts/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/layouts/navbar/navbar.component.css":
/*!*****************************************************!*\
  !*** ./src/app/layouts/navbar/navbar.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  background: #333;\r\n  z-index: 100;\r\n}\r\n\r\n.navbar-brand {\r\n  font-weight: bold;\r\n}\r\n\r\n.navbar-toggler {\r\n  font-size: 1em;\r\n  border: 0;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsT0FBTztFQUNQLFFBQVE7RUFDUixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGFBQWE7Q0FDZDs7QUFFRDtFQUNFLGtCQUFrQjtDQUNuQjs7QUFFRDtFQUNFLGVBQWU7RUFDZixVQUFVO0NBQ1giLCJmaWxlIjoic3JjL2FwcC9sYXlvdXRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm5hdiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6ICMzMzM7XHJcbiAgei1pbmRleDogMTAwO1xyXG59XHJcblxyXG4ubmF2YmFyLWJyYW5kIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLm5hdmJhci10b2dnbGVyIHtcclxuICBmb250LXNpemU6IDFlbTtcclxuICBib3JkZXI6IDA7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/layouts/navbar/navbar.component.html":
/*!******************************************************!*\
  !*** ./src/app/layouts/navbar/navbar.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark px-lg-5\">\n    <a *ngIf=\"!authService.isLoggedIn()\" class=\"navbar-brand\" routerLink=\"/\"><span class=\"text-danger\">EVENT</span> BOOK</a>\n    <a *ngIf=\"authService.isLoggedIn()\" class=\"navbar-brand\" routerLink=\"/dashboard\"><span class=\"text-danger\">EVENT</span> BOOK</a>\n    <button class=\"navbar-toggler d-lg-none\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapsibleNavId\" aria-controls=\"collapsibleNavId\"\n        aria-expanded=\"false\" aria-label=\"Toggle navigation\"><span class=\"navbar-toggler-icon\"></span></button>\n    <div class=\"collapse navbar-collapse\" id=\"collapsibleNavId\">\n        <ul class=\"navbar-nav mr-auto mt-2 mt-lg-0\">\n            <li *ngIf=\"!authService.isLoggedIn()\" class=\"nav-item\" [routerLinkActive]=\"['active']\"  [routerLinkActiveOptions]=\"{exact:true}\">\n                <a class=\"nav-link\" routerLink=\"/\">HOME</a>\n            </li>\n            <li *ngIf=\"authService.isLoggedIn()\" class=\"nav-item\" [routerLinkActive]=\"['active']\"  [routerLinkActiveOptions]=\"{exact:true}\">\n                <a class=\"nav-link\" routerLink=\"/dashboard\">DASHBOARD</a>\n            </li>\n            <li *ngIf=\"authService.isLoggedIn()\" class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n              <a class=\"nav-link\" routerLink=\"/item/create\">CREATE EVENT</a>\n            </li>\n            <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n                <a class=\"nav-link\" routerLink=\"/about\">ABOUT</a>\n            </li>\n        </ul>\n        <ul *ngIf=\"!authService.isLoggedIn()\" class=\"navbar-nav ml-auto mt-2 mt-lg-0\">\n          <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n              <a class=\"nav-link\" routerLink=\"/sign-up\">SIGN UP</a>\n          </li>\n          <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n              <a class=\"nav-link\" routerLink=\"/login\">LOGIN</a>\n          </li>\n        </ul>\n        <ul *ngIf=\"authService.isLoggedIn()\" class=\"navbar-nav ml-auto mt-2 mt-lg-0\">\n            <li *ngIf=\"authService.isLoggedIn()\" class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n                <a routerLink=\"/items\" class=\"nav-link\">MY EVENTS</a>\n            </li>\n            <li class=\"nav-item\">\n              <a (click)=\"onHandleLogOut()\" class=\"btn nav-link\">LOGOUT</a>\n          </li>\n        </ul>\n    </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/layouts/navbar/navbar.component.ts":
/*!****************************************************!*\
  !*** ./src/app/layouts/navbar/navbar.component.ts ***!
  \****************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");





var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    NavbarComponent.prototype.ngOnInit = function () { };
    NavbarComponent.prototype.onHandleLogOut = function () {
        this.authService.logOutUser();
        this.flashMessage.showFlashMessage({
            messages: ['You are loged out!'],
            dismissible: true,
            timeout: 3000,
            type: 'success'
        });
        this.router.navigate(['login']);
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/layouts/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/layouts/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__["NgFlashMessageService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.user = null;
        this.token = null;
        console.log("auth service injected!");
    }
    //Get Current User
    AuthService.prototype.getCurrentUser = function () {
        this.onLoadUserData();
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': this.token
        });
        return this.http.get("user/current", { headers: headers });
    };
    //Register User
    AuthService.prototype.createUser = function (user) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json'
        });
        return this.http.post("user/create", user, { headers: headers });
    };
    //Authenticate User
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json'
        });
        return this.http.post("user/authenticate", user, { headers: headers });
    };
    //Store Token & User on Local Storage
    AuthService.prototype.storeUserData = function (token, user) {
        this.user = user;
        this.token = token;
        localStorage.setItem('access_token', token);
        localStorage.setItem('access_user', JSON.stringify(user));
    };
    AuthService.prototype.isLoggedIn = function () {
        return localStorage.getItem('access_token') !== null;
    };
    AuthService.prototype.logOutUser = function () {
        this.user = null;
        this.token = null;
        localStorage.clear();
    };
    AuthService.prototype.onLoadUserData = function () {
        this.token = localStorage.getItem('access_token');
        this.user = JSON.parse(localStorage.getItem('access_user'));
    };
    AuthService.prototype.getToken = function () {
        return localStorage.getItem('access_token');
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/event.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/event.service.ts ***!
  \*******************************************/
/*! exports provided: EventService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventService", function() { return EventService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var EventService = /** @class */ (function () {
    function EventService(http) {
        this.http = http;
        this.user = null;
        this.token = null;
        console.log("items service injected...");
    }
    EventService.prototype.onLoadUserData = function () {
        this.user = JSON.parse(localStorage.getItem('access_user'));
        this.token = localStorage.getItem('access_token');
    };
    EventService.prototype.createUserEvent = function (event) {
        this.onLoadUserData();
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': this.token
        });
        return this.http.post("event/create", event, { headers: headers });
    };
    EventService.prototype.fetchUserEvents = function (id) {
        this.onLoadUserData();
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': this.token
        });
        return this.http.get("event/" + id, { headers: headers });
    };
    EventService.prototype.deleteUserEvent = function (id) {
        this.onLoadUserData();
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': this.token
        });
        return this.http.delete("event/" + id, { headers: headers });
    };
    EventService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], EventService);
    return EventService;
}());



/***/ }),

/***/ "./src/app/services/validate.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/validate.service.ts ***!
  \**********************************************/
/*! exports provided: ValidateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateService", function() { return ValidateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ValidateService = /** @class */ (function () {
    function ValidateService() {
    }
    //Validate Name
    ValidateService.prototype.validateName = function (name) {
        var regex = /^[a-zA-Z ]{2,30}$/;
        return regex.test(String(name));
    };
    //Validate Email Id
    ValidateService.prototype.validateEmail = function (email) {
        var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(String(email));
    };
    //Validate Username
    ValidateService.prototype.validateUsername = function (username) {
        var regex = /^[a-zA-Z0-9]+$/;
        return regex.test(String(username));
    };
    //Validate Password
    ValidateService.prototype.validatePassword = function (password, password2) {
        return password === password2;
    };
    //Validate Event Name
    ValidateService.prototype.validateEventName = function (event) {
        var regex = /^[a-zA-Z ]{10,30}$/;
        return regex.test(String(event));
    };
    //Validate Price
    ValidateService.prototype.validatePrice = function (price) {
        return null;
    };
    ValidateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\DELL\Desktop\MEAN APPS\event_book\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map