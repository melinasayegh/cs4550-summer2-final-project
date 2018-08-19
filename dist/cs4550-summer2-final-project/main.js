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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-my-app></app-my-app>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'cs4550-summer2-final-project';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
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
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _my_app_my_app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./my-app/my-app.component */ "./src/app/my-app/my-app.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/nav-bar/nav-bar.component */ "./src/app/components/nav-bar/nav-bar.component.ts");
/* harmony import */ var _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/home-page/home-page.component */ "./src/app/pages/home-page/home-page.component.ts");
/* harmony import */ var _components_recipe_preview_recipe_preview_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/recipe-preview/recipe-preview.component */ "./src/app/components/recipe-preview/recipe-preview.component.ts");
/* harmony import */ var _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/login-page/login-page.component */ "./src/app/pages/login-page/login-page.component.ts");
/* harmony import */ var _components_page_footer_page_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/page-footer/page-footer.component */ "./src/app/components/page-footer/page-footer.component.ts");
/* harmony import */ var _pages_register_page_register_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/register-page/register-page.component */ "./src/app/pages/register-page/register-page.component.ts");
/* harmony import */ var _components_category_tag_category_tag_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/category-tag/category-tag.component */ "./src/app/components/category-tag/category-tag.component.ts");
/* harmony import */ var _pages_profile_page_profile_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/profile-page/profile-page.component */ "./src/app/pages/profile-page/profile-page.component.ts");
/* harmony import */ var _components_friend_preview_friend_preview_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/friend-preview/friend-preview.component */ "./src/app/components/friend-preview/friend-preview.component.ts");
/* harmony import */ var _components_recipe_review_recipe_review_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/recipe-review/recipe-review.component */ "./src/app/components/recipe-review/recipe-review.component.ts");
/* harmony import */ var _pages_search_results_page_search_results_page_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/search-results-page/search-results-page.component */ "./src/app/pages/search-results-page/search-results-page.component.ts");
/* harmony import */ var _pages_recipe_page_recipe_page_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/recipe-page/recipe-page.component */ "./src/app/pages/recipe-page/recipe-page.component.ts");
/* harmony import */ var _pages_create_recipe_page_create_recipe_page_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/create-recipe-page/create-recipe-page.component */ "./src/app/pages/create-recipe-page/create-recipe-page.component.ts");
/* harmony import */ var _components_random_recipe_random_recipe_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/random-recipe/random-recipe.component */ "./src/app/components/random-recipe/random-recipe.component.ts");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _services_recipe_service_client__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/recipe.service.client */ "./src/app/services/recipe.service.client.ts");
/* harmony import */ var _components_profile_settings_profile_settings_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/profile-settings/profile-settings.component */ "./src/app/components/profile-settings/profile-settings.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _my_app_my_app_component__WEBPACK_IMPORTED_MODULE_4__["MyAppComponent"],
                _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_7__["HomePageComponent"],
                _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_6__["NavBarComponent"],
                _components_recipe_preview_recipe_preview_component__WEBPACK_IMPORTED_MODULE_8__["RecipePreviewComponent"],
                _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_9__["LoginPageComponent"],
                _components_page_footer_page_footer_component__WEBPACK_IMPORTED_MODULE_10__["PageFooterComponent"],
                _pages_register_page_register_page_component__WEBPACK_IMPORTED_MODULE_11__["RegisterPageComponent"],
                _pages_profile_page_profile_page_component__WEBPACK_IMPORTED_MODULE_13__["ProfilePageComponent"],
                _components_category_tag_category_tag_component__WEBPACK_IMPORTED_MODULE_12__["CategoryTagComponent"],
                _components_friend_preview_friend_preview_component__WEBPACK_IMPORTED_MODULE_14__["FriendPreviewComponent"],
                _components_recipe_review_recipe_review_component__WEBPACK_IMPORTED_MODULE_15__["RecipeReviewComponent"],
                _pages_search_results_page_search_results_page_component__WEBPACK_IMPORTED_MODULE_16__["SearchResultsPageComponent"],
                _pages_recipe_page_recipe_page_component__WEBPACK_IMPORTED_MODULE_17__["RecipePageComponent"],
                _pages_create_recipe_page_create_recipe_page_component__WEBPACK_IMPORTED_MODULE_18__["CreateRecipePageComponent"],
                _components_random_recipe_random_recipe_component__WEBPACK_IMPORTED_MODULE_19__["RandomRecipeComponent"],
                _components_profile_settings_profile_settings_component__WEBPACK_IMPORTED_MODULE_22__["ProfileSettingsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_5__["routing"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
            ],
            providers: [
                _services_user_service_client__WEBPACK_IMPORTED_MODULE_20__["UserServiceClient"],
                _services_recipe_service_client__WEBPACK_IMPORTED_MODULE_21__["RecipeServiceClient"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/home-page/home-page.component */ "./src/app/pages/home-page/home-page.component.ts");
/* harmony import */ var _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/login-page/login-page.component */ "./src/app/pages/login-page/login-page.component.ts");
/* harmony import */ var _pages_register_page_register_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/register-page/register-page.component */ "./src/app/pages/register-page/register-page.component.ts");
/* harmony import */ var _pages_profile_page_profile_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/profile-page/profile-page.component */ "./src/app/pages/profile-page/profile-page.component.ts");
/* harmony import */ var _pages_search_results_page_search_results_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/search-results-page/search-results-page.component */ "./src/app/pages/search-results-page/search-results-page.component.ts");
/* harmony import */ var _pages_recipe_page_recipe_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/recipe-page/recipe-page.component */ "./src/app/pages/recipe-page/recipe-page.component.ts");
/* harmony import */ var _pages_create_recipe_page_create_recipe_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/create-recipe-page/create-recipe-page.component */ "./src/app/pages/create-recipe-page/create-recipe-page.component.ts");
/* harmony import */ var _components_random_recipe_random_recipe_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/random-recipe/random-recipe.component */ "./src/app/components/random-recipe/random-recipe.component.ts");









var appRoutes = [
    { path: '', component: _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_1__["HomePageComponent"] },
    { path: 'home', component: _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_1__["HomePageComponent"] },
    { path: 'login', component: _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_2__["LoginPageComponent"] },
    { path: 'register', component: _pages_register_page_register_page_component__WEBPACK_IMPORTED_MODULE_3__["RegisterPageComponent"] },
    { path: 'profile', component: _pages_profile_page_profile_page_component__WEBPACK_IMPORTED_MODULE_4__["ProfilePageComponent"] },
    { path: 'results/:search', component: _pages_search_results_page_search_results_page_component__WEBPACK_IMPORTED_MODULE_5__["SearchResultsPageComponent"] },
    { path: 'recipe/:recipeId', component: _pages_recipe_page_recipe_page_component__WEBPACK_IMPORTED_MODULE_6__["RecipePageComponent"] },
    { path: 'newRecipe', component: _pages_create_recipe_page_create_recipe_page_component__WEBPACK_IMPORTED_MODULE_7__["CreateRecipePageComponent"] },
    { path: 'random', component: _components_random_recipe_random_recipe_component__WEBPACK_IMPORTED_MODULE_8__["RandomRecipeComponent"] },
    { path: 'random/:tag', component: _components_random_recipe_random_recipe_component__WEBPACK_IMPORTED_MODULE_8__["RandomRecipeComponent"] },
    { path: '**', component: _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_1__["HomePageComponent"] }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/components/category-tag/category-tag.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/category-tag/category-tag.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.category-tag {\n    background-color: #59821e;\n    color: white;\n    text-align: center;\n    display: inline-block;\n    margin: 5px 5px auto auto;\n}\n\ndiv.category-tag>p {\n    margin: 3px 6px;\n}"

/***/ }),

/***/ "./src/app/components/category-tag/category-tag.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/category-tag/category-tag.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"category-tag\">\n  <p>{{category}}</p>\n</div>"

/***/ }),

/***/ "./src/app/components/category-tag/category-tag.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/category-tag/category-tag.component.ts ***!
  \*******************************************************************/
/*! exports provided: CategoryTagComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryTagComponent", function() { return CategoryTagComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CategoryTagComponent = /** @class */ (function () {
    function CategoryTagComponent() {
        this.category = {};
    }
    CategoryTagComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CategoryTagComponent.prototype, "category", void 0);
    CategoryTagComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-category-tag',
            template: __webpack_require__(/*! ./category-tag.component.html */ "./src/app/components/category-tag/category-tag.component.html"),
            styles: [__webpack_require__(/*! ./category-tag.component.css */ "./src/app/components/category-tag/category-tag.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CategoryTagComponent);
    return CategoryTagComponent;
}());



/***/ }),

/***/ "./src/app/components/friend-preview/friend-preview.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/friend-preview/friend-preview.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.friend-preview {\n    border: 1px solid #e4e6e8;\n    display: inline-block;\n    margin: auto auto 10px 20px;\n    cursor: pointer;\n    background-color: white;\n    width: 250px;\n}\n\ndiv.friend-preview-content {\n    display: block;\n}\n\ndiv.friend-image {\n    height: 50px;\n    width: 50px;\n    overflow: hidden;\n    display: inline-block;\n    vertical-align: middle;\n    margin: 15px;\n}\n\ndiv.friend-image>img {\n    width: 100%;\n    min-height: 100%;\n}\n\ndiv.friend-name {\n    display: inline-block;\n    margin: auto auto auto 10px;\n}\n\ndiv.friend-name>h5 {\n    margin: 25px auto;\n}"

/***/ }),

/***/ "./src/app/components/friend-preview/friend-preview.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/friend-preview/friend-preview.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"friend-preview\">\n  <div class=\"friend-preview-content\">\n    <div class=\"friend-image\">\n      <img src=\"https://www.softpaws.com/template/images/landing_page/july_cat_image.jpg\">\n    </div>\n\n    <div class=\"friend-name\">\n      <h5>Shady Cat</h5>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/friend-preview/friend-preview.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/friend-preview/friend-preview.component.ts ***!
  \***********************************************************************/
/*! exports provided: FriendPreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FriendPreviewComponent", function() { return FriendPreviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FriendPreviewComponent = /** @class */ (function () {
    function FriendPreviewComponent() {
    }
    FriendPreviewComponent.prototype.ngOnInit = function () {
    };
    FriendPreviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-friend-preview',
            template: __webpack_require__(/*! ./friend-preview.component.html */ "./src/app/components/friend-preview/friend-preview.component.html"),
            styles: [__webpack_require__(/*! ./friend-preview.component.css */ "./src/app/components/friend-preview/friend-preview.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FriendPreviewComponent);
    return FriendPreviewComponent;
}());



/***/ }),

/***/ "./src/app/components/nav-bar/nav-bar.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/nav-bar/nav-bar.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar {\n    background-color: #ececf6;\n    margin-bottom: 20px;\n}\n\n.nav-link {\n    font-size: 14px;\n}\n\n.btn {\n    font-size: 14px;\n    text-align: center;\n}\n\n.form-control {\n    font-size: 14px;\n    line-height: 10px;\n}\n"

/***/ }),

/***/ "./src/app/components/nav-bar/nav-bar.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/nav-bar/nav-bar.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fullwidth\">\n  <nav class=\"navbar navbar-expand-sm navbar-dark bg-dark navbar-fixed-top\">\n\n    <a class=\"navbar-brand\" href=\"/\">CommunityCookings</a>\n\n    <button class=\"navbar-toggler\" type=\"button\"\n            (click)=\"toggleNavbar()\"\n            [ngClass]=\"{'show': isNavbarOpen}\"\n            data-toggle=\".navbar collapse\"\n            data-target=\".navbarCC\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarCC\">\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/home\">Home</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/recipe\">Recipes</a>\n        </li>\n        <li class=\"nav-item\" *ngIf=\"isAdminUser\">\n          <a class=\"nav-link\" routerLink=\"/admin\">Admin</a>\n        </li>\n      </ul>\n\n      <div class=\"col-sm-4 search-nav collapse navbar-collapse justify-content-center\">\n        <ul class=\"nav navbar-nav\">\n          <li class=\"nav-item\">\n            <div class=\"input-group\">\n                <input class=\"form-control\" type=\"search\"\n                       placeholder=\"Search for a recipe...\" aria-label=\"Search\"/>\n              <i class=\"btn btn-light fas fa-search\" (click)=\"search()\"></i>\n            </div>\n          </li>\n        </ul>\n      </div>\n\n      <div class=\"collapse navbar-collapse justify-content-end\" *ngIf=\"isLoggedIn\">\n        <ul class=\"nav navbar-nav navbar-right\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/profile\">Profile</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link btn\" (click)=\"logout()\">Log Out</a>\n          </li>\n        </ul>\n      </div>\n\n      <div class=\"collapse navbar-collapse justify-content-end\" *ngIf=\"!isLoggedIn\">\n        <ul class=\"nav navbar-nav navbar-right\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/register\">Register</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/login\">Sign In</a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n</div>\n"

/***/ }),

/***/ "./src/app/components/nav-bar/nav-bar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/nav-bar/nav-bar.component.ts ***!
  \*********************************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavBarComponent = /** @class */ (function () {
    function NavBarComponent(router, userService) {
        var _this = this;
        this.router = router;
        this.userService = userService;
        this.isLoggedIn = false;
        this.isAdminUser = false;
        this.isNavbarOpen = false;
        this.currentUser = {};
        this.toggleNavbar = function () {
            _this.isNavbarOpen = !_this.isNavbarOpen;
        };
    }
    NavBarComponent.prototype.logout = function () {
        var _this = this;
        this.userService.logout()
            .then(function () { return _this.router.navigate(['login']); });
    };
    NavBarComponent.prototype.search = function () {
        alert('Clicked Search');
    };
    NavBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.currentUser()
            .then(function (user) {
            _this.currentUser = user;
            if (user.username !== undefined) {
                _this.isLoggedIn = true;
                if ((user.username === 'admin') && (user.password === 'admin')) {
                    _this.isAdminUser = true;
                }
                else {
                    _this.isAdminUser = false;
                }
            }
            else {
                _this.isLoggedIn = false;
                _this.isAdminUser = false;
            }
        });
        console.log(this.isLoggedIn);
    };
    NavBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav-bar',
            template: __webpack_require__(/*! ./nav-bar.component.html */ "./src/app/components/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__(/*! ./nav-bar.component.css */ "./src/app/components/nav-bar/nav-bar.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_user_service_client__WEBPACK_IMPORTED_MODULE_1__["UserServiceClient"]])
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "./src/app/components/page-footer/page-footer.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/page-footer/page-footer.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer.page-footer {\n    margin: 0;\n    position: fixed;\n    left: 0;\n    bottom: 0;\n    background-color: #e0eaf3;\n    color: black;\n    display: block;\n    width: 100%;\n}\n\ndiv.footer-content {\n    margin: auto;\n    text-align: center;\n    padding-top: 30px;\n    padding-bottom: 30px;\n}"

/***/ }),

/***/ "./src/app/components/page-footer/page-footer.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/page-footer/page-footer.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"page-footer\">\n  <div class=\"footer-content\">\n    CS4550 Final Project by Brenda Lau, Melina Sayegh, & Yoni Smolyar\n  </div>\n</footer>"

/***/ }),

/***/ "./src/app/components/page-footer/page-footer.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/page-footer/page-footer.component.ts ***!
  \*****************************************************************/
/*! exports provided: PageFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageFooterComponent", function() { return PageFooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageFooterComponent = /** @class */ (function () {
    function PageFooterComponent() {
    }
    PageFooterComponent.prototype.ngOnInit = function () {
    };
    PageFooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-footer',
            template: __webpack_require__(/*! ./page-footer.component.html */ "./src/app/components/page-footer/page-footer.component.html"),
            styles: [__webpack_require__(/*! ./page-footer.component.css */ "./src/app/components/page-footer/page-footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageFooterComponent);
    return PageFooterComponent;
}());



/***/ }),

/***/ "./src/app/components/profile-settings/profile-settings.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/profile-settings/profile-settings.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Profile page CSS */\n\n.container {\n    display: flex;\n}\n\n.updateBtn {\n    background: #59821e;\n}\n\n.deleteBtn {\n    background: #495057;\n}\n\n.logoutBtn {\n    background: #dd514c;\n}"

/***/ }),

/***/ "./src/app/components/profile-settings/profile-settings.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/profile-settings/profile-settings.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"offset-1 col-8\">\n  <div class =\"form-group row\">\n    <label class=\"control-label col-sm-2\" for=\"userNameFld\">\n      Username\n    </label>\n    <div class=\"col-sm-10\">\n      <input [(ngModel)]=\"username\" type=\"text\" class=\"form-control user-fields disabled\"\n             placeholder=\"\" id=\"userNameFld\" disabled/>\n    </div>\n  </div>\n\n  <div class =\"form-group row\">\n    <label class=\"control-label col-sm-2\" for=\"passwordFld\">\n      Password\n    </label>\n    <div class=\"col-sm-10\">\n      <input [(ngModel)]=\"password\" type=\"password\" class=\"form-control user-fields\" placeholder=\"\" id=\"passwordFld\"/>\n    </div>\n  </div>\n\n  <div class =\"form-group row\">\n    <label class=\"control-label col-sm-2\" for=\"firstNameFld\">\n      First Name\n    </label>\n    <div class=\"col-sm-10\">\n      <input [(ngModel)]=\"firstName\" type=\"text\" class=\"form-control user-fields\" placeholder=\"\" id=\"firstNameFld\"/>\n    </div>\n  </div>\n\n  <div class =\"form-group row\">\n    <label class=\"control-label col-sm-2\" for=\"lastNameFld\">\n      Last Name\n    </label>\n    <div class=\"col-sm-10\">\n      <input [(ngModel)]=\"lastName\" type=\"text\" class=\"form-control user-fields\" placeholder=\"\" id=\"lastNameFld\"/>\n    </div>\n  </div>\n\n  <div class =\"form-group row\">\n    <label class=\"control-label col-sm-2\" for=\"emailFld\">\n      Email\n    </label>\n    <div class=\"col-sm-10\">\n      <input [(ngModel)]=\"email\" type=\"text\" class=\"form-control user-fields\" placeholder=\"\" id=\"emailFld\"/>\n    </div>\n  </div>\n\n  <div class=\"form-group row\">\n    <div class=\"col-sm-10 offset-sm-2\">\n      <button (click)=\"updateProfile()\"\n              class=\"btn custom-button updateBtn\" id=\"updateBtn\">\n        Update\n      </button>\n    </div>\n  </div>\n\n  <div class=\"form-group row\">\n    <div class=\"col-sm-10 offset-sm-2\">\n      <button (click)=\"deleteProfile()\"\n              class=\"btn custom-button deleteBtn\" id=\"deleteBtn\">\n        Delete Profile\n      </button>\n    </div>\n  </div>\n\n  <div class=\"form-group row\">\n    <div class=\"col-sm-10 offset-sm-2\">\n      <button (click)=\"logout()\"\n              class=\"btn custom-button logoutBtn\" id=\"logoutBtn\">\n        Logout\n      </button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/profile-settings/profile-settings.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/profile-settings/profile-settings.component.ts ***!
  \***************************************************************************/
/*! exports provided: ProfileSettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileSettingsComponent", function() { return ProfileSettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service.client */ "./src/app/services/user.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileSettingsComponent = /** @class */ (function () {
    function ProfileSettingsComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.user = {
            username: String
        };
    }
    ProfileSettingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.profile()
            .then(function (user) {
            _this.username = user.username;
            _this.password = user.password;
            _this.firstName = user.firstName;
            _this.lastName = user.lastName;
            _this.email = user.email;
        });
    };
    ProfileSettingsComponent.prototype.updateProfile = function () {
        var newUser = {
            username: this.username,
            password: this.password,
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email
        };
        this.userService.updateProfile(newUser);
    };
    ProfileSettingsComponent.prototype.deleteProfile = function () {
        var _this = this;
        this.userService.deleteProfile()
            .then(function (response) { return _this.router.navigate(['login']); });
    };
    ProfileSettingsComponent.prototype.logout = function () {
        var _this = this;
        this.userService.logout()
            .then(function () { return _this.router.navigate(['login']); });
    };
    ProfileSettingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile-settings',
            template: __webpack_require__(/*! ./profile-settings.component.html */ "./src/app/components/profile-settings/profile-settings.component.html"),
            styles: [__webpack_require__(/*! ./profile-settings.component.css */ "./src/app/components/profile-settings/profile-settings.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__["UserServiceClient"]])
    ], ProfileSettingsComponent);
    return ProfileSettingsComponent;
}());



/***/ }),

/***/ "./src/app/components/random-recipe/random-recipe.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/random-recipe/random-recipe.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/random-recipe/random-recipe.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/random-recipe/random-recipe.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <h4>\n    Pick a tag or keyword that your random recipe will belong to.\n  </h4>\n  <input [(ngModel)]=\"tag\"\n         placeholder=\"Enter keyword here\"\n         class=\"form-control\">\n  <br/>\n  <button routerLink='/random/{{tag}}'\n          class=\"btn btn-block btn-success\">\n    Search\n  </button>\n  <br/>\n  <a [hidden]=\"randomRecipe === 'undefined'\"\n     href=\"{{sourceUrl}}\">{{sourceUrl}}</a>\n</div>"

/***/ }),

/***/ "./src/app/components/random-recipe/random-recipe.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/random-recipe/random-recipe.component.ts ***!
  \*********************************************************************/
/*! exports provided: RandomRecipeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RandomRecipeComponent", function() { return RandomRecipeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_recipe_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/recipe.service.client */ "./src/app/services/recipe.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RandomRecipeComponent = /** @class */ (function () {
    function RandomRecipeComponent(recipeService, aRoute) {
        var _this = this;
        this.recipeService = recipeService;
        this.aRoute = aRoute;
        this.sourceUrl = '';
        this.tag = '';
        this.aRoute.params.subscribe(function (params) { return _this.loadRandomRecipe(params['tag']); });
    }
    RandomRecipeComponent.prototype.loadRandomRecipe = function (tag) {
        var _this = this;
        this.tag = tag;
        this.recipeService.getRandomRecipe(tag)
            .then(function (recipe) { return _this.randomRecipe = recipe; })
            .then(function (recipe) { return _this.sourceUrl = recipe.sourceUrl; });
    };
    RandomRecipeComponent.prototype.ngOnInit = function () {
    };
    RandomRecipeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-random-recipe',
            template: __webpack_require__(/*! ./random-recipe.component.html */ "./src/app/components/random-recipe/random-recipe.component.html"),
            styles: [__webpack_require__(/*! ./random-recipe.component.css */ "./src/app/components/random-recipe/random-recipe.component.css")]
        }),
        __metadata("design:paramtypes", [_services_recipe_service_client__WEBPACK_IMPORTED_MODULE_1__["RecipeServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], RandomRecipeComponent);
    return RandomRecipeComponent;
}());



/***/ }),

/***/ "./src/app/components/recipe-preview/recipe-preview.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/recipe-preview/recipe-preview.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.recipe-preview {\n    border: 1px solid #e4e6e8;\n    display: inline-block;\n    margin: auto;\n    cursor: pointer;\n    text-align: left;\n}\n\ndiv.recipe-preview-content {\n    display: block;\n}\n\ndiv.recipe-image {\n    height: 250px;\n    width: 250px;\n    overflow: hidden;\n}\n\ndiv.recipe-image>img {\n    width: 100%;\n    min-height: 100%\n}\n\ndiv.recipe-description {\n    width: 220px;\n    height: 100px;\n    text-align: left;\n    word-wrap: break-word;\n    padding: 15px;\n    background-color: white;\n}\n\ndiv.recipe-description>h3 {\n    margin: 0 auto 0 0;\n}\n\ndiv.recipe-description>p {\n    margin: 10px 0 10px 0;\n}\n\ndiv.category-tags {\n    display: block;\n    margin-top: 10px;\n}\n\ndiv.recipe-ratings {\n    margin: 5px auto auto auto;\n    color: #59821e;\n}\n"

/***/ }),

/***/ "./src/app/components/recipe-preview/recipe-preview.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/recipe-preview/recipe-preview.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"recipe-preview\" routerLink=\"/recipe/{{recipe._id}}\">\n\n  <div class=\"recipe-preview-content\">\n    <div class=\"recipe-image\">\n      <img src={{recipe.image}}>\n    </div>\n\n    <div class=\"recipe-description\">\n      <h3>{{recipe.title}}</h3>\n\n      <div class=\"recipe-ratings\">\n        <i class=\"fas fa-star\"></i>\n        <i class=\"fas fa-star\"></i>\n        <i class=\"fas fa-star\"></i>\n        <i class=\"far fa-star\"></i>\n        <i class=\"far fa-star\"></i>\n      </div>\n      \n      <div class=\"category-tags\">\n        <app-category-tag *ngFor=\"let tag of recipe.tags\" [category]=\"tag\"></app-category-tag>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/recipe-preview/recipe-preview.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/recipe-preview/recipe-preview.component.ts ***!
  \***********************************************************************/
/*! exports provided: RecipePreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipePreviewComponent", function() { return RecipePreviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_recipe_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/recipe.service.client */ "./src/app/services/recipe.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RecipePreviewComponent = /** @class */ (function () {
    function RecipePreviewComponent(recipeService, activatedRoute) {
        this.recipeService = recipeService;
        this.activatedRoute = activatedRoute;
        this.recipeId = {};
        this.recipe = {
            _id: String,
            title: String,
            image: String,
            tags: [String]
        };
        //this.activatedRoute.params.subscribe(params => this.loadRecipeData(params['recipeId']));
    }
    RecipePreviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.recipeService.findRecipeById(this.recipeId)
            .then(function (recipe) { return _this.recipe = recipe; });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], RecipePreviewComponent.prototype, "recipeId", void 0);
    RecipePreviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-recipe-preview',
            template: __webpack_require__(/*! ./recipe-preview.component.html */ "./src/app/components/recipe-preview/recipe-preview.component.html"),
            styles: [__webpack_require__(/*! ./recipe-preview.component.css */ "./src/app/components/recipe-preview/recipe-preview.component.css")]
        }),
        __metadata("design:paramtypes", [_services_recipe_service_client__WEBPACK_IMPORTED_MODULE_1__["RecipeServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], RecipePreviewComponent);
    return RecipePreviewComponent;
}());



/***/ }),

/***/ "./src/app/components/recipe-review/recipe-review.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/recipe-review/recipe-review.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.recipe-review {\n    border: 1px solid #e4e6e8;\n    display: inline-block;\n    margin: auto auto 20px auto;\n    cursor: pointer;\n    background-color: white;\n    width: 100%;  \n}\n\ndiv.recipe-review-content {\n    display: block;\n    padding: 25px;\n    text-align: left;\n}\n\ndiv.review-heading>h5 {\n    float: right;\n}\n\ndiv.user-ratings {\n    display: inline-block;\n}\n\ndiv.recipe-ratings {\n    color: #59821e;\n}\n\ndiv.user-image, div.recipe-image {\n    height: 25px;\n    width: 25px;\n    overflow: hidden;\n    display: inline-block;\n    vertical-align: middle;\n    margin: 10px;\n}\n\ndiv.user-image>img, div.recipe-image>img {\n    width: 100%;\n    min-height: 100%;\n}\n\ndiv.user-image, div.user>h4, div.recipe-image, div.recipe-title>h4 {\n    display: inline-block;\n}\n\ndiv.hide {\n    display: none;\n}"

/***/ }),

/***/ "./src/app/components/recipe-review/recipe-review.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/recipe-review/recipe-review.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"recipe-review\" routerLink=\"/recipe/placeholderRecipeId\">\n  <div class=\"recipe-review-content\">\n    <div class=\"review-heading\">\n      <div class=\"user-ratings\">\n        <div class=\"user\" [ngClass]=\"{'hide' : isNotCurrentPage('recipe')}\">\n          <div class=\"user-image\">\n            <img src=\"https://www.softpaws.com/template/images/landing_page/july_cat_image.jpg\">\n          </div>\n          <h4>Shady Cat</h4>\n        </div>\n\n        <div class=\"recipe-title\" [ngClass]=\"{'hide' : isNotCurrentPage('profile')}\">\n          <div class=\"recipe-image\">\n            <img src=\"https://images-gmi-pmc.edge-generalmills.com/c4ad5042-70b6-403e-ba6f-286926657953.jpg\">\n          </div>\n          <h4>Piggy Pancakes</h4>\n        </div>\n\n        <div class=\"recipe-ratings\">\n          <i class=\"fas fa-star\"></i>\n          <i class=\"fas fa-star\"></i>\n          <i class=\"fas fa-star\"></i>\n          <i class=\"far fa-star\"></i>\n          <i class=\"far fa-star\"></i>\n        </div>\n      </div>\n\n      <h5>09/6/2018</h5>\n    </div>\n      <p>Served these as an appetizer for Christmas Eve and they were absolutely delicious!! Also,\n        very very easy to make!! Make way ahead of time and refrigerate until you're ready to serve\n        them!! Will definitely make again!</p>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/recipe-review/recipe-review.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/recipe-review/recipe-review.component.ts ***!
  \*********************************************************************/
/*! exports provided: RecipeReviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeReviewComponent", function() { return RecipeReviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RecipeReviewComponent = /** @class */ (function () {
    function RecipeReviewComponent() {
    }
    RecipeReviewComponent.prototype.ngOnInit = function () {
    };
    RecipeReviewComponent.prototype.isNotCurrentPage = function (pageType) {
        if (pageType !== this.currPage) {
            return true;
        }
        else {
            return false;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], RecipeReviewComponent.prototype, "currPage", void 0);
    RecipeReviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-recipe-review',
            template: __webpack_require__(/*! ./recipe-review.component.html */ "./src/app/components/recipe-review/recipe-review.component.html"),
            styles: [__webpack_require__(/*! ./recipe-review.component.css */ "./src/app/components/recipe-review/recipe-review.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RecipeReviewComponent);
    return RecipeReviewComponent;
}());



/***/ }),

/***/ "./src/app/my-app/my-app.component.css":
/*!*********************************************!*\
  !*** ./src/app/my-app/my-app.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/my-app/my-app.component.html":
/*!**********************************************!*\
  !*** ./src/app/my-app/my-app.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/my-app/my-app.component.ts":
/*!********************************************!*\
  !*** ./src/app/my-app/my-app.component.ts ***!
  \********************************************/
/*! exports provided: MyAppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAppComponent", function() { return MyAppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MyAppComponent = /** @class */ (function () {
    function MyAppComponent() {
    }
    MyAppComponent.prototype.ngOnInit = function () {
    };
    MyAppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-my-app',
            template: __webpack_require__(/*! ./my-app.component.html */ "./src/app/my-app/my-app.component.html"),
            styles: [__webpack_require__(/*! ./my-app.component.css */ "./src/app/my-app/my-app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MyAppComponent);
    return MyAppComponent;
}());



/***/ }),

/***/ "./src/app/pages/create-recipe-page/create-recipe-page.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/pages/create-recipe-page/create-recipe-page.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.create-recipe-form {\n    width: 85%;\n    background-color: white;\n    border: 1px solid #e4e6e8;\n    padding: 50px 0 140px 0;\n    margin: 30px auto;\n}\n\nh1 {\n    margin: auto auto 10px auto;\n}\n\nform {\n    margin: auto;\n    width: 85%;\n}\n\n.create-btn {\n    background-color: #59821e;\n    color: white;\n}"

/***/ }),

/***/ "./src/app/pages/create-recipe-page/create-recipe-page.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/pages/create-recipe-page/create-recipe-page.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <app-nav-bar></app-nav-bar>\n\n  <div class=\"create-recipe-form\">\n    <form>\n      <h1>Create New Recipe</h1>\n\n      <div class=\"form-group\">\n        <label for=\"titleFld\">Recipe Title</label>\n        <input class=\"form-control user-fields\" [(ngModel)]=\"title\"\n               name=\"title\" id=\"titleFld\">\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"imageFld\">Image Link</label>\n        <input class=\"form-control user-fields\" [(ngModel)]=\"image\"\n               name=\"image\" id=\"imageFld\" placeholder=\"http://cupofsugarpinchofsalt.s3.amazonaws.com/2.jpg\"/>\n      </div>\n\n        <div class=\"form-group\">\n            <label for=\"imageFld\">Prep Time</label>\n            <input class=\"form-control user-fields\" [(ngModel)]=\"prepTime\"\n                   name=\"image\" id=\"prepTimeFld\" placeholder=\"Enter as a number.\"/>\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"imageFld\">Cook Time</label>\n            <input class=\"form-control user-fields\" [(ngModel)]=\"cookTime\"\n                   name=\"image\" id=\"cookTimeFld\" placeholder=\"Enter as a number.\"/>\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"imageFld\"># Servings</label>\n            <input class=\"form-control user-fields\" [(ngModel)]=\"numServings\"\n                   name=\"image\" id=\"numServingsFld\" placeholder=\"Enter as a number.\"/>\n        </div>\n\n      <div class=\"form-group\">\n        <label for=\"descriptionFld\">Description</label>\n        <textarea [(ngModel)]=\"description\"\n                  class=\"form-control user-fields\" name=\"description\"\n               id=\"descriptionFld\" rows=\"4\">\n        </textarea>\n      </div>\n\n      <div class=\"form-group\">\n      <label for=\"ingredientsFld\">Ingredients</label>\n      <textarea [(ngModel)]=\"ingredients\"\n                class=\"form-control user-fields\" name=\"ingredients\"\n                id=\"ingredientsFld\" rows=\"8\" placeholder=\"Write each ingredient on its own line.\">\n        </textarea>\n    </div>\n\n      <div class=\"form-group\">\n        <label for=\"directionsFld\">Directions</label>\n        <textarea [(ngModel)]=\"directions\"\n                  class=\"form-control user-fields\"  name=\"directions\"\n                  id=\"directionsFld\" rows=\"8\" placeholder=\"Write each direction on its own line.\">\n        </textarea>\n      </div>\n      <div class=\"create-cancel-btns\">\n        <span class=\"float-right\">\n          <button (click)=\"createRecipe()\" class=\"btn cancel-btn btn-dark\">Cancel</button>\n          &nbsp;\n          <button (click)=\"createRecipe()\" class=\"btn custom-btn create-btn\">Create</button>\n        </span>\n      </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/create-recipe-page/create-recipe-page.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/create-recipe-page/create-recipe-page.component.ts ***!
  \**************************************************************************/
/*! exports provided: CreateRecipePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateRecipePageComponent", function() { return CreateRecipePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_recipe_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/recipe.service.client */ "./src/app/services/recipe.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user.service.client */ "./src/app/services/user.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CreateRecipePageComponent = /** @class */ (function () {
    function CreateRecipePageComponent(router, userService, recipeService) {
        this.router = router;
        this.userService = userService;
        this.recipeService = recipeService;
        this.user = {
            _id: String
        };
        this.title = '';
        this.image = '';
        this.description = '';
        this.ingredients = '';
        this.directions = '';
        this.prepTime = '';
        this.cookTime = '';
        this.numServings = '';
    }
    CreateRecipePageComponent.prototype.createRecipe = function () {
        this.directionsList = this.directions.split('\n');
        this.ingredientsList = this.ingredients.split('\n');
        var recipe = {
            title: this.title,
            description: this.description,
            creator: this.user._id,
            createdAt: new Date(),
            updatedAt: new Date(),
            ingredients: this.ingredientsList,
            directions: this.directionsList,
            prepTime: Number(this.prepTime),
            cookTime: Number(this.cookTime),
            numServings: Number(this.numServings),
            tags: ['NONE'],
        };
        this.recipeService.createRecipe(recipe);
    };
    CreateRecipePageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.profile().then(function (user) { return _this.user = user; });
    };
    CreateRecipePageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-recipe-page',
            template: __webpack_require__(/*! ./create-recipe-page.component.html */ "./src/app/pages/create-recipe-page/create-recipe-page.component.html"),
            styles: [__webpack_require__(/*! ./create-recipe-page.component.css */ "./src/app/pages/create-recipe-page/create-recipe-page.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_user_service_client__WEBPACK_IMPORTED_MODULE_3__["UserServiceClient"],
            _services_recipe_service_client__WEBPACK_IMPORTED_MODULE_1__["RecipeServiceClient"]])
    ], CreateRecipePageComponent);
    return CreateRecipePageComponent;
}());



/***/ }),

/***/ "./src/app/pages/home-page/home-page.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pages/home-page/home-page.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.home-page-tip {\n    margin: 30px auto;\n    width: 50%;\n    height: 20%;\n    background-color: white;\n}\n\ndiv.featured-recipes {\n    display: block;\n    margin: 30px auto;\n    text-align: center;\n}\n\ndiv.featured-recipes>h3 {\n    margin: 20px auto;\n}\n\nul.featured-recipes-list {\n    width: 90%;\n    margin: auto;\n    padding-left: 0;\n}\n\nul.featured-recipes-list>li {\n    margin: auto;\n    list-style-type: none;\n}\n\nul.featured-recipes-list>li {\n    display: inline-block;\n    margin: auto 2.5% 5% 2.5%;\n}"

/***/ }),

/***/ "./src/app/pages/home-page/home-page.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/home-page/home-page.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <app-nav-bar></app-nav-bar>\n\n    <div class=\"home-page-tip\">\n        <p>Did you know?...</p>\n    </div>\n\n    <div class=\"featured-recipes\">\n        <h3>Featured Recipes</h3>\n        <ul >\n            <li >\n                <app-recipe-preview *ngFor=\"let recipe of recipes\" [recipeId]=\"recipe._id\"></app-recipe-preview>\n                <app-category-tag *ngFor=\"let recipe of recipes\" [category]=\"recipe.tag\"></app-category-tag>\n            </li>\n        </ul>\n    </div>\n\n    <app-page-footer></app-page-footer>\n</div>"

/***/ }),

/***/ "./src/app/pages/home-page/home-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/home-page/home-page.component.ts ***!
  \********************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_recipe_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/recipe.service.client */ "./src/app/services/recipe.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePageComponent = /** @class */ (function () {
    function HomePageComponent(recipeService) {
        this.recipeService = recipeService;
    }
    HomePageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.recipeService.findAllRecipes()
            .then(function (recipes) { return _this.recipes = recipes; });
    };
    HomePageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home-page',
            template: __webpack_require__(/*! ./home-page.component.html */ "./src/app/pages/home-page/home-page.component.html"),
            styles: [__webpack_require__(/*! ./home-page.component.css */ "./src/app/pages/home-page/home-page.component.css")]
        }),
        __metadata("design:paramtypes", [_services_recipe_service_client__WEBPACK_IMPORTED_MODULE_1__["RecipeServiceClient"]])
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "./src/app/pages/login-page/login-page.component.css":
/*!***********************************************************!*\
  !*** ./src/app/pages/login-page/login-page.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".alert {\n    padding: 10px 10px 10px 10px;\n    border-radius: 2px;\n    background-color: #d3d6cd;\n    border: 1px solid transparent;\n    color: black;\n    position: relative;\n    margin-bottom: 1rem;\n}\n\ndiv.alert.hide {\n    display: none;\n}\n\n.container {\n    justify-content: center;\n    display: flex;\n}\n\n.control-label {\n    padding-top: 8px;\n}\n\n.loginBtn {\n    background: #59821e;\n    color: white;\n}\n\n.no-account {\n    padding-top: 40px;\n}\n"

/***/ }),

/***/ "./src/app/pages/login-page/login-page.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/login-page/login-page.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav-bar></app-nav-bar>\n\n<div class=\"container\">\n    <div class=\"col-sm-12 col-md-10 col-lg-8 justify-content-center align-content-center\">\n\n        <h2>Sign In</h2>\n\n        <div class=\"alert col-sm-10 offset-sm-2\" *ngIf=\"usernameAlert\">\n            This user does not exist. Please try again.\n        </div>\n\n        <div class=\"alert col-sm-10 offset-sm-2\" *ngIf=\"fieldsAlertUsername\">\n            Please enter a username\n        </div>\n\n        <div class=\"alert col-sm-10 offset-sm-2\" *ngIf=\"fieldsAlertPassword\">\n            Please enter a password\n        </div>\n\n        <div class=\"form-group row\">\n            <label class=\"control-label col-2\" for=\"username\">\n                Username\n            </label>\n            <div class=\"col-sm-10\">\n                <input type=\"text\" class=\"form-control user-fields\"\n                       [(ngModel)]=\"username\" id=\"username\"/>\n            </div>\n        </div>\n\n        <div class =\"form-group row\">\n            <label class=\"control-label col-2\" for=\"password\">\n                Password\n            </label>\n            <div class=\"col-sm-10\">\n                <input type=\"password\" class=\"form-control user-fields\"\n                       id=\"password\" [(ngModel)]=\"password\"/>\n            </div>\n        </div>\n\n        <div class =\"form-group row\">\n            <div class=\"col-sm-10 offset-0 offset-sm-2\">\n                <button class=\"btn custom-button loginBtn\"\n                        id=\"loginBtn\" type=\"button\"\n                        (click)=\"login(username, password)\">\n                    Sign In\n                </button>\n            </div>\n        </div>\n\n        <div class=\"form-group row no-account\">\n            <label class=\"col-sm-10 offset-0 offset-sm-2 \">\n                Don't have an Account?\n                <a class=\"btn custom-button btn-dark\" id=\"registerBtn\" routerLink=\"/register\" >\n                    Register\n                </a>\n            </label>\n        </div>\n    </div>\n</div>\n\n<app-page-footer></app-page-footer>"

/***/ }),

/***/ "./src/app/pages/login-page/login-page.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/login-page/login-page.component.ts ***!
  \**********************************************************/
/*! exports provided: LoginPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageComponent", function() { return LoginPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginPageComponent = /** @class */ (function () {
    function LoginPageComponent(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    LoginPageComponent.prototype.ngOnInit = function () {
        this.clearAlerts();
    };
    LoginPageComponent.prototype.clearAlerts = function () {
        this.usernameAlert = false;
        this.fieldsAlertUsername = false;
        this.fieldsAlertPassword = false;
    };
    LoginPageComponent.prototype.login = function (username, password) {
        var _this = this;
        this.clearAlerts();
        if (username === undefined || username === '') {
            this.fieldsAlertUsername = true;
        }
        else if (password === undefined || password === '') {
            this.fieldsAlertPassword = true;
        }
        else {
            if (username === 'admin' && password === 'admin') {
                this.userService.login(username, password)
                    .then(function () { return _this.router.navigate(['admin']); }, function () { return _this.usernameAlert = true; });
            }
            else {
                this.userService.login(username, password)
                    .then(function () { return _this.router.navigate(['profile']); }, function () { return _this.usernameAlert = true; });
            }
        }
    };
    LoginPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login-page',
            template: __webpack_require__(/*! ./login-page.component.html */ "./src/app/pages/login-page/login-page.component.html"),
            styles: [__webpack_require__(/*! ./login-page.component.css */ "./src/app/pages/login-page/login-page.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_user_service_client__WEBPACK_IMPORTED_MODULE_1__["UserServiceClient"]])
    ], LoginPageComponent);
    return LoginPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/profile-page/profile-page.component.css":
/*!***************************************************************!*\
  !*** ./src/app/pages/profile-page/profile-page.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "aside.profile-nav-bar {\n    background-color: #ecede9;\n    width: 25%;\n    height: 100%;\n    position: absolute;\n    text-align: center;\n}\n\ndiv.profile-img {\n    width: 150px;\n    height: 150px;\n    overflow: hidden;\n    margin: 40px auto 15px auto;\n}\n\ndiv.profile-img>img {\n    width: 100%;\n    min-height: 100%;\n}\n\ndiv.profile-bio {\n    padding: 15px;\n    max-height: 85px;\n    word-wrap: break-word;\n}\n\ndiv.profile-bio>h3 {\n    margin: 0 auto;\n}\n\nul.profile-tabs-list {\n    margin: 30px auto;\n    padding-left: 0;\n    width: 100%;\n}\n\nul.profile-tabs-list>li {\n\n    margin: auto;\n    background-color: #e0eaf3;\n    border-bottom: 1px solid #e6e6e6;\n    list-style-type: none;\n    padding: 20px 0;\n}\n\nul.profile-tabs-list>li:hover {\n\n    background-color: #cedeec;\n    cursor: pointer;\n}\n\nul.profile-tabs-list>li.active {\n    background-color: #cedeec;\n}\n\ndiv.settings-view, div.friends-view, div.my-recipes-view, div.favorites-view, div.reviews-view {\n    width: 75%;\n    float: right;\n    margin: 30px auto;\n}\n\ndiv.hide {\n    display: none;\n}\n\nul.review-list, ul.favorites-list ul.my-recipes-list, ul.friends-list {\n    width: 90%;\n    margin: auto;\n    padding-left: 0;\n}\n\nul.review-list>li, ul.favorites-list>li, ul.my-recipes-list>li, ul.friends-list>li {\n    margin: auto;\n    list-style-type: none;\n}\n\nul.favorites-list>li, ul.my-recipes-list>li {\n    display: inline-block;\n    margin: auto 5% 5% auto;\n}\n\nul.friends-list>li {\n    display: inline-block;\n    margin: auto 2% 2% auto;\n}\n\ndiv.create-recipe {\n    border: 1px solid #e4e6e8;\n    display: inline-block;\n    margin: auto;\n    cursor: pointer;\n    height: 380px;\n    width: 250px;\n    overflow: hidden;\n    background-color: white;\n    text-align: center;\n}\n\ndiv.create-recipe>h3 {\n    display: block;\n}\n"

/***/ }),

/***/ "./src/app/pages/profile-page/profile-page.component.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/profile-page/profile-page.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <app-nav-bar></app-nav-bar>\n\n\n  <aside class=\"profile-nav-bar\">\n    <div class=\"profile-img\">\n      <img src=\"http://allpetmagazine.com/wp-content/uploads/2016/09/cat-bread-facebook-min.png\">\n    </div>\n\n    <div class=\"profile-bio\">\n        <b>{{user.username}}</b>\n  </div>\n\n      <ul class=\"profile-tabs-list\">\n        <li [ngClass]=\"{'active': selectedTab == 'Settings'}\"\n            (click)=\"selectTab('Settings')\">\n          Settings\n        </li>\n        <li [ngClass]=\"{'active': selectedTab == 'Friends'}\"\n            (click)=\"selectTab('Friends')\">\n          Friends\n        </li>\n        <li [ngClass]=\"{'active': selectedTab == 'My Recipes'}\"\n            (click)=\"selectTab('My Recipes')\">\n          My Recipes\n        </li>\n        <li [ngClass]=\"{'active': selectedTab == 'Favorites'}\"\n            (click)=\"selectTab('Favorites')\">\n          Favorites\n        </li>\n        <li [ngClass]=\"{'active': selectedTab == 'Reviews'}\"\n            (click)=\"selectTab('Reviews')\">\n          Reviews\n        </li>\n      </ul>\n  </aside>\n\n  <div class=\"settings-view\" *ngIf=\"selectedTab === 'Settings'\">\n    <app-profile-settings></app-profile-settings>\n  </div>\n\n  <div class=\"friends-view\" *ngIf=\"selectedTab === 'Friends'\">\n    <ul class=\"friends-list\">\n      <li><app-friend-preview></app-friend-preview></li>\n      <li><app-friend-preview></app-friend-preview></li>\n      <li><app-friend-preview></app-friend-preview></li>\n    </ul>\n  </div>\n\n  <div class=\"my-recipes-view\" *ngIf=\"selectedTab === 'My Recipes'\">\n    <ul class=\"my-recipes-list\">\n      <li>\n        <div class=\"create-recipe\" routerLink=\"/newRecipe\">\n            <i class=\"fa fa-plus\"></i>\n            <h3>Create a new recipe</h3>\n        </div>\n      </li>\n      <li><app-recipe-preview *ngFor=\"let recipe of myRecipes\" [recipeId]=\"recipe._id\"></app-recipe-preview></li>\n    </ul>\n  </div>\n\n  <div class=\"favorites-view\" *ngIf=\"selectedTab === 'Favorites'\">\n    <ul class=\"favorites-list\">\n      <li><app-recipe-preview *ngFor=\"let recipe of faveRecipes\" [recipeId]=\"recipe._id\"></app-recipe-preview></li>\n    </ul>\n  </div>\n\n  <div class=\"reviews-view\" *ngIf=\"selectedTab === 'Reviews'\">\n    <ul class=\"review-list\">\n      <li><app-recipe-review [currPage]=\"'profile'\"></app-recipe-review></li>\n      <li><app-recipe-review [currPage]=\"'profile'\"></app-recipe-review></li>\n      <li><app-recipe-review [currPage]=\"'profile'\"></app-recipe-review></li>\n    </ul>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/pages/profile-page/profile-page.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/profile-page/profile-page.component.ts ***!
  \**************************************************************/
/*! exports provided: ProfilePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageComponent", function() { return ProfilePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _services_recipe_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/recipe.service.client */ "./src/app/services/recipe.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfilePageComponent = /** @class */ (function () {
    function ProfilePageComponent(router, userService, recipeService) {
        var _this = this;
        this.router = router;
        this.userService = userService;
        this.recipeService = recipeService;
        this.selectedTab = '';
        this.user = {
            username: String
        };
        this.selectTab = function (tab) {
            _this.selectedTab = tab;
        };
    }
    ProfilePageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.profile().then(function (user) {
            _this.user = user;
            _this.faveRecipes = user.favoriteRecipes;
            _this.myRecipes = user.myRecipes;
        });
    };
    ProfilePageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile-page',
            template: __webpack_require__(/*! ./profile-page.component.html */ "./src/app/pages/profile-page/profile-page.component.html"),
            styles: [__webpack_require__(/*! ./profile-page.component.css */ "./src/app/pages/profile-page/profile-page.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__["UserServiceClient"],
            _services_recipe_service_client__WEBPACK_IMPORTED_MODULE_3__["RecipeServiceClient"]])
    ], ProfilePageComponent);
    return ProfilePageComponent;
}());



/***/ }),

/***/ "./src/app/pages/recipe-page/recipe-page.component.css":
/*!*************************************************************!*\
  !*** ./src/app/pages/recipe-page/recipe-page.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.recipe {\n    width: 95%;\n    background-color: white;\n    border: 1px solid #e4e6e8;\n    padding: 40px 0;\n}\n\ndiv.recipe-header-row {\n    margin: auto;\n    width: 95%;\n    padding-bottom: 40px;\n    border-bottom: 2px solid #ecede9;\n}\n\ndiv.recipe-reviews-row {\n    width: 95%;\n    padding-bottom: 20px;\n    margin: 30px auto 0 auto;\n}\n\ndiv.recipe-title-description {\n    display: inline-block;\n    width: 40%;\n}\n\ndiv.recipe-ingredients-nutrition-row {\n    margin: 10px auto 0 auto;\n}\n\ndiv.recipe-directions-row {\n    margin: 30px auto 0 auto;\n}\n\ndiv.recipe-ingredients, div.recipe-nutrition {\n    display: inline-block;\n    text-align: center;\n    vertical-align: top;\n    width: 30%;\n    margin: auto 5%;\n}\n\ndiv.recipe-ratings {\n    color: #59821e;\n}\n\ndiv.recipe-description {\n    text-align: left;\n    margin: auto 5%;\n    vertical-align: top;\n}\n\ndiv.recipe-image {\n    display: inline-block;\n    width: 40%;\n    margin: auto 5%;\n    vertical-align: top;\n}\n\ndiv.recipe-image>img {\n    max-width: 100%;\n}\n\ndiv.recipe-directions, div.recipe-reviews {\n    margin: auto;\n    width: 85%;\n}\n\ndiv.recipe {\n    margin: 40px auto;\n    text-align: center;\n}\n\nul.recipe-ingredients-list, ul.recipe-nutrition-list, ol.recipe-direction-list, ul.recipe-review-list {\n    padding-left: 0;\n    width: 100%;\n}\n\nul.recipe-ingredients-list>li, ul.recipe-nutrition-list>li, ul.recipe-review-list>li,\nul.recipe-review-list>li {\n    margin: auto;\n    list-style-type: none;\n    padding: 0 0 15px 0;\n}\n\nol.recipe-direction-list>li {\n    margin: auto;\n    list-style-position: inside;\n    padding: 0 0 30px 0;\n}\n\ndiv.recipe-ingredients>h2, ul.recipe-ingredients-list>li, div.recipe-nutrition>h2,\nul.recipe-nutrition-list>li, div.recipe-directions>h2, ol.recipe-direction-list>li,\ndiv.recipe-reviews>h2, ul.recipe-review-list>li {\n    text-align: left;\n}\n\ndiv.submit-btn {\n    float: right;\n    cursor: pointer;\n    text-align: center;\n    margin: 20px 0;\n    background-color: #59821e;\n    color: white;\n    padding: 0px 20px;\n}\n\ndiv.recipe-review-input {\n    margin: auto auto 40px auto;\n    padding-bottom: 75px;\n}\n\ndiv.recipe-review-input>textarea {\n    width: 100%;\n}"

/***/ }),

/***/ "./src/app/pages/recipe-page/recipe-page.component.html":
/*!**************************************************************!*\
  !*** ./src/app/pages/recipe-page/recipe-page.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <app-nav-bar></app-nav-bar>\n\n  <span *ngIf=\"userCreator\" class=\"row float-right\">\n    <button (click)=\"deleteRecipe()\" class=\"btn sm-btn btn-dark\">\n      Delete\n    </button>\n    <button (click()=\"updateRecipe()\" class=\"btn sm-btn btn-light\">\n      Update\n    </button>\n  </span>\n\n  <div class=\"recipe\">\n    <div class=\"recipe-header-row\">\n      <div class=\"recipe-title-description\">\n        <h2>{{recipe.title}}</h2>\n        <h4>{{creator.username}}</h4>\n        <h5>Created on {{fixDate(recipe.createdAt)}}</h5>\n        <h5>Updated on {{fixDate(recipe.updatedAt)}}</h5>\n\n        <div class=\"recipe-ratings\">\n          <i class=\"fas fa-star\"></i>\n\n        </div>\n\n        <div class=\"recipe-description\">\n          <h2>Description</h2>\n          {{recipe.description}}\n        </div>\n\n        <div class=\"category-tags\">\n          <app-category-tag *ngFor=\"let tag of recipe.tags\" [category]=\"tag\"></app-category-tag>\n        </div>\n      </div>\n\n      <div class=\"recipe-image\">\n        <img src=\"{{recipe.image}}\">\n      </div>\n    </div>\n\n    <div class=\"\">\n      <div class=\"\">\n        <h2>Information</h2>\n        <ul class=\"\">\n          <li>\n            Prep Time: {{recipe.prepTime}} Minutes\n          </li>\n          <li>\n            Cook Time: {{recipe.cookTime}} Minutes\n          </li>\n          <li>\n           Number Servings: {{recipe.numServings}}\n          </li>\n        </ul>\n      </div>\n    </div>\n\n    <div class=\"\">\n      <div class=\"\">\n        <h2>Ingredients</h2>\n        <ul class=\"\"\n            *ngFor=\"let ingredient of recipe.ingredients\">\n          <li>\n            {{ingredient}}\n          </li>\n        </ul>\n      </div>\n    </div>\n\n    <div class=\"\">\n      <h2>Directions</h2>\n      <ol class=\"\">\n        <li class=\" webdev\"\n            *ngFor=\"let item of recipe.directions\">\n          {{item}}\n        </li>\n      </ol>\n    </div>\n\n    <div class=\"recipe-reviews-row\">\n      <div class=\"recipe-reviews\">\n        <h2>Reviews</h2>\n\n        <div class=\"recipe-review-input\">\n          <textarea rows=\"8\"></textarea>\n          <div class=\"submit-btn\">\n            <p (click)=\"submit()\">Submit</p>\n          </div>\n        </div>\n\n        <ul class=\"recipe-review-list\">\n          <li><app-recipe-review [currPage]=\"'recipe'\"></app-recipe-review></li>\n          <li><app-recipe-review [currPage]=\"'recipe'\"></app-recipe-review></li>\n          <li><app-recipe-review [currPage]=\"'recipe'\"></app-recipe-review></li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/recipe-page/recipe-page.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/recipe-page/recipe-page.component.ts ***!
  \************************************************************/
/*! exports provided: RecipePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipePageComponent", function() { return RecipePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _services_recipe_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/recipe.service.client */ "./src/app/services/recipe.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RecipePageComponent = /** @class */ (function () {
    function RecipePageComponent(route, userService, recipeService) {
        var _this = this;
        this.route = route;
        this.userService = userService;
        this.recipeService = recipeService;
        this.userCreator = false;
        this.creator = {
            username: String
        };
        this.recipe = {
            _id: String,
            title: String,
            image: String,
            creator: String,
            description: String,
            ingredients: [String],
            directions: [String],
            prepTime: Number,
            cookTime: Number,
            createdAt: Date,
            updatedAt: Date,
            numServings: Number,
            tags: [String]
        };
        this.fixDate = function (date) {
            return new Date(date).toLocaleString();
        };
        this.updateRecipe = function () {
            alert('Need to update recipe');
        };
        this.deleteRecipe = function () {
            _this.recipeService.deleteRecipe(_this.recipe._id);
        };
        this.findRecipeById = function (recipeId) {
            _this.recipeService.findRecipeById(recipeId)
                .then(function (recipe) {
                _this.recipe = recipe;
                _this.userService.findUserById(recipe.creator)
                    .then(function (user) { return _this.creator = user; });
            });
            console.log(recipeId);
            console.log(_this.recipe.title);
        };
        this.route.params.subscribe(function (params) { return _this.findRecipeById(params['recipeId']); });
    }
    RecipePageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.profile()
            .then(function (loggedInUser) {
            _this.userCreator = (_this.recipe.creator === loggedInUser._id);
        });
    };
    RecipePageComponent.prototype.submit = function () {
        // some create review function
    };
    RecipePageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-recipe-page',
            template: __webpack_require__(/*! ./recipe-page.component.html */ "./src/app/pages/recipe-page/recipe-page.component.html"),
            styles: [__webpack_require__(/*! ./recipe-page.component.css */ "./src/app/pages/recipe-page/recipe-page.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_user_service_client__WEBPACK_IMPORTED_MODULE_1__["UserServiceClient"],
            _services_recipe_service_client__WEBPACK_IMPORTED_MODULE_2__["RecipeServiceClient"]])
    ], RecipePageComponent);
    return RecipePageComponent;
}());



/***/ }),

/***/ "./src/app/pages/register-page/register-page.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/pages/register-page/register-page.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.alert {\n    padding: 10px 10px 10px 10px;\n    border-radius: 2px;\n    background-color: #d3d6cd;\n    border: 1px solid transparent;\n    color: black;\n    position: relative;\n    margin-bottom: 1rem;\n}\n\ndiv.alert.hide {\n    display: none;\n}\n\n.container {\n    justify-content: center;\n    display: flex;\n}\n\n.control-label {\n    padding-top: 8px;\n}\n\n.registerBtn {\n    background: #59821e;\n    color: white;\n}\n\n.no-account {\n    padding-top: 40px;\n}\n"

/***/ }),

/***/ "./src/app/pages/register-page/register-page.component.html":
/*!******************************************************************!*\
  !*** ./src/app/pages/register-page/register-page.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav-bar></app-nav-bar>\n\n<div class=\"container\">\n    <div class=\"col-sm-12 col-md-10 col-lg-8 justify-content-center align-content-center\">\n\n        <h2>Create an Account</h2>\n\n        <div class=\"alert col-sm-10 offset-sm-2\" *ngIf=\"usernameAlert\" role=\"alert\">\n            Username is already taken.\n        </div>\n\n        <div class=\"alert col-sm-10 offset-sm-2\" *ngIf=\"passwordAlert\" role=\"alert\" >\n            Passwords do not match.\n        </div>\n\n        <div class=\"alert col-sm-10 offset-sm-2\" *ngIf=\"fieldsAlertUsername\" role=\"alert\">\n            Please enter a username.\n        </div>\n\n        <div class=\"alert col-sm-10 offset-sm-2\" *ngIf=\"fieldsAlertPassword1\" role=\"alert\">\n            Please enter a password.\n        </div>\n\n        <div class=\"alert col-sm-10 offset-sm-2\" *ngIf=\"fieldsAlertPassword2\" role=\"alert\">\n            Please confirm your password.\n        </div>\n\n        <div class =\"form-group row col-12\">\n            <label class=\"control-label col-sm-2\" for=\"firstName\">\n                First Name\n            </label>\n            <div class=\"col-sm-10\">\n                <input [(ngModel)]=\"firstName\" type=\"text\" class=\"form-control user-fields\" id=\"firstName\"/>\n            </div>\n        </div>\n\n        <div class =\"form-group row col-12\">\n            <label class=\"control-label col-sm-2\" for=\"lastName\">\n                Last Name\n            </label>\n            <div class=\"col-sm-10\">\n                <input [(ngModel)]=\"lastName\" type=\"text\" class=\"form-control user-fields\" id=\"lastName\"/>\n            </div>\n        </div>\n\n        <div class =\"form-group row col-12\">\n            <label class=\"control-label col-sm-2\" for=\"email\">\n                Email\n            </label>\n            <div class=\"col-sm-10\">\n                <input [(ngModel)]=\"email\" type=\"text\" class=\"form-control user-fields\" id=\"email\"/>\n            </div>\n        </div>\n\n        <br>\n\n        <div class=\"form-group row col-12\">\n            <label class=\"control-label col-sm-2\"for=\"username\">\n                Username\n            </label>\n            <div class=\"col-sm-10\">\n                <input [(ngModel)]=\"username\" type=\"text\" class=\"form-control user-fields\" id=\"username\"/>\n            </div>\n        </div>\n\n        <div class =\"form-group row col-12\">\n            <label class=\"control-label col-sm-2\" for=\"password\">\n                Password\n            </label>\n            <div class=\"col-sm-10\">\n                <input [(ngModel)]=\"password\" type=\"password\" class=\"form-control user-fields\" id=\"password\"/>\n            </div>\n        </div>\n\n        <div class =\"form-group row col-12\">\n            <label class=\"control-label col-sm-2\" for=\"password2\">\n                Validate Password\n            </label>\n            <div class=\"col-sm-10\">\n                <input [(ngModel)]=\"password2\" type=\"password\" class=\"form-control user-fields\" id=\"password2\"/>\n            </div>\n        </div>\n\n        <div class=\"form-group row col-12\">\n            <div class=\"col-sm-10 offset-sm-2\">\n                <button (click)=\"register()\"\n                        class=\"btn custom-button registerBtn\"\n                        id=\"registerBtn\"\n                        type=\"button\">\n                    Register\n                </button>\n            </div>\n        </div>\n\n        <div class=\"form-group row col-12 already-registered\">\n            <label class=\"col-sm-10 offset-sm-2\">Already have an account?\n                <a class=\"bbtn btn-dark custom-button loginBtn\" id=\"loginBtn\" routerLink=\"/login\">\n                    Login\n                </a>\n            </label>\n        </div>\n    </div>\n</div>\n<app-page-footer></app-page-footer>\n"

/***/ }),

/***/ "./src/app/pages/register-page/register-page.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/register-page/register-page.component.ts ***!
  \****************************************************************/
/*! exports provided: RegisterPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageComponent", function() { return RegisterPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service.client */ "./src/app/services/user.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterPageComponent = /** @class */ (function () {
    function RegisterPageComponent(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    RegisterPageComponent.prototype.ngOnInit = function () {
        this.clearAlerts();
    };
    RegisterPageComponent.prototype.clearAlerts = function () {
        this.fieldsAlertUsername = false;
        this.fieldsAlertPassword1 = false;
        this.fieldsAlertPassword2 = false;
        this.passwordAlert = false;
        this.usernameAlert = false;
    };
    RegisterPageComponent.prototype.register = function () {
        var _this = this;
        this.clearAlerts();
        if (this.username === undefined) {
            this.fieldsAlertUsername = true;
        }
        else if (this.password === undefined) {
            this.fieldsAlertPassword1 = true;
        }
        else if (this.password2 === undefined) {
            this.fieldsAlertPassword2 = true;
        }
        else if (this.password !== this.password2) {
            this.passwordAlert = true;
        }
        else {
            var newUser = {
                username: this.username,
                password: this.password,
                firstName: this.firstName,
                lastName: this.lastName,
                email: this.email,
            };
            this.userService.register(newUser)
                .then(function (response) {
                if (response.status === 401) {
                    _this.usernameAlert = true;
                }
                else {
                    _this.router.navigate(['profile']);
                }
            });
        }
    };
    RegisterPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register-page',
            template: __webpack_require__(/*! ./register-page.component.html */ "./src/app/pages/register-page/register-page.component.html"),
            styles: [__webpack_require__(/*! ./register-page.component.css */ "./src/app/pages/register-page/register-page.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__["UserServiceClient"]])
    ], RegisterPageComponent);
    return RegisterPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/search-results-page/search-results-page.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/search-results-page/search-results-page.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.search-results {\n    display: block;\n    margin: 30px auto;\n    text-align: center;\n}"

/***/ }),

/***/ "./src/app/pages/search-results-page/search-results-page.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/pages/search-results-page/search-results-page.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <app-nav-bar></app-nav-bar>\n\n  <div class=\"search-results\">\n    <app-recipe-preview></app-recipe-preview>\n    <app-recipe-preview></app-recipe-preview>\n    <app-recipe-preview></app-recipe-preview>\n    <app-recipe-preview></app-recipe-preview>\n    <app-recipe-preview></app-recipe-preview>\n    <app-recipe-preview></app-recipe-preview>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/search-results-page/search-results-page.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/search-results-page/search-results-page.component.ts ***!
  \****************************************************************************/
/*! exports provided: SearchResultsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchResultsPageComponent", function() { return SearchResultsPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchResultsPageComponent = /** @class */ (function () {
    function SearchResultsPageComponent() {
    }
    SearchResultsPageComponent.prototype.ngOnInit = function () {
    };
    SearchResultsPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search-results-page',
            template: __webpack_require__(/*! ./search-results-page.component.html */ "./src/app/pages/search-results-page/search-results-page.component.html"),
            styles: [__webpack_require__(/*! ./search-results-page.component.css */ "./src/app/pages/search-results-page/search-results-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SearchResultsPageComponent);
    return SearchResultsPageComponent;
}());



/***/ }),

/***/ "./src/app/services/recipe.service.client.ts":
/*!***************************************************!*\
  !*** ./src/app/services/recipe.service.client.ts ***!
  \***************************************************/
/*! exports provided: RecipeServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeServiceClient", function() { return RecipeServiceClient; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LOCAL_URL = 'http://localhost:3000/api/';
var HEROKU_URL = 'https://community-cookings-server.herokuapp.com/api/';
var RecipeServiceClient = /** @class */ (function () {
    function RecipeServiceClient() {
        this.getRandomRecipe = function (tag) {
            return fetch(LOCAL_URL + 'randomRecipe/' + tag)
                .then(function (response) { return response.json(); });
        };
        this.findAllRecipes = function () {
            return fetch(LOCAL_URL + 'recipe', {
                method: 'get',
                credentials: 'include'
            }).then(function (response) { return response.json(); });
        };
        this.findRecipeById = function (recipeId) {
            return fetch(LOCAL_URL + 'recipe/' + recipeId, {
                method: 'get',
                credentials: 'include'
            }).then(function (response) { return response.json(); });
        };
        this.createRecipe = function (recipe) {
            return fetch(LOCAL_URL + 'recipe', {
                method: 'post',
                body: JSON.stringify(recipe),
                credentials: 'include',
                headers: {
                    'content-type': 'application/json'
                }
            });
        };
        this.deleteRecipe = function (recipeId) {
            return fetch(LOCAL_URL + 'recipe/' + recipeId, {
                method: 'delete',
                credentials: 'include',
                headers: {
                    'content-type': 'application/json'
                }
            });
        };
    }
    RecipeServiceClient = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], RecipeServiceClient);
    return RecipeServiceClient;
}());



/***/ }),

/***/ "./src/app/services/user.service.client.ts":
/*!*************************************************!*\
  !*** ./src/app/services/user.service.client.ts ***!
  \*************************************************/
/*! exports provided: UserServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserServiceClient", function() { return UserServiceClient; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LOCAL_URL = 'http://localhost:3000/api/';
var HEROKU_URL = 'https://community-cookings-server.herokuapp.com/api/';
var UserServiceClient = /** @class */ (function () {
    function UserServiceClient() {
    }
    UserServiceClient.prototype.findUserById = function (userId) {
        return fetch(LOCAL_URL + 'user/' + userId)
            .then(function (response) { return response.json(); });
    };
    UserServiceClient.prototype.register = function (user) {
        return fetch(LOCAL_URL + 'register', {
            method: 'post',
            body: JSON.stringify(user),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        });
    };
    UserServiceClient.prototype.login = function (username, password) {
        var user = {
            username: username,
            password: password
        };
        return fetch(LOCAL_URL + 'login', {
            method: 'post',
            body: JSON.stringify(user),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        }).then(function (response) { return response.json(); });
    };
    UserServiceClient.prototype.logout = function () {
        return fetch(LOCAL_URL + 'logout', {
            method: 'post',
            credentials: 'include'
        });
    };
    UserServiceClient.prototype.profile = function () {
        return fetch(LOCAL_URL + 'profile', {
            credentials: 'include',
        }).then(function (response) { return response.json(); });
    };
    UserServiceClient.prototype.deleteProfile = function () {
        return fetch(LOCAL_URL + 'user/delete', {
            method: 'delete',
            credentials: 'include',
        });
    };
    UserServiceClient.prototype.updateProfile = function (newProfile) {
        return fetch(LOCAL_URL + 'user/update', {
            method: 'put',
            body: JSON.stringify(newProfile),
            credentials: 'include',
        }).then(function (response) { return response.json(); });
    };
    UserServiceClient.prototype.currentUser = function () {
        return fetch(LOCAL_URL + 'currentUser', {
            credentials: 'include'
        }).then(function (response) { return (response.json()); }, function (error) {
            console.log('Error is because there is no current user.');
        });
    };
    UserServiceClient = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], UserServiceClient);
    return UserServiceClient;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/melinasayegh/Documents/Northeastern/year 4/Summer 2/WebDev/cs4550-summer2-final-project/cs4550-summer2-final-project/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map