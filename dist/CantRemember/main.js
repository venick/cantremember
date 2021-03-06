(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _score_sheet_score_sheet_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./score-sheet/score-sheet.component */ "./src/app/score-sheet/score-sheet.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AppComponent {
    constructor() {
        this.title = "Can't Remember";
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, consts: [[1, "page-container"], ["role", "main", 1, "content"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "score-sheet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
    } }, directives: [_score_sheet_score_sheet_component__WEBPACK_IMPORTED_MODULE_1__["ScoreSheetComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: [".toolbar[_ngcontent-%COMP%] {\n  color: white;\n  background-color: #555353;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n.toolbar[_ngcontent-%COMP%]   .spacer[_ngcontent-%COMP%] {\n  flex-grow: 10;\n}\n.logo[_ngcontent-%COMP%] {\n  transform: scale(1.5);\n  padding: 8px 12px;\n}\n.page-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  background-color: #4b4a4a;\n}\n.content[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 600px;\n  background-color: #424242;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFDRjtBQUNFO0VBQ0UsYUFBQTtBQUNKO0FBR0E7RUFDRSxxQkFBQTtFQUNBLGlCQUFBO0FBQUY7QUFFQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0FBQ0Y7QUFDQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FBRUYiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9vbGJhciB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig4NSwgODMsIDgzKTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgLnNwYWNlciB7XHJcbiAgICBmbGV4LWdyb3c6IDEwO1xyXG4gIH1cclxufVxyXG5cclxuLmxvZ28ge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcclxuICBwYWRkaW5nOiA4cHggMTJweDtcclxufVxyXG4ucGFnZS1jb250YWluZXJ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzUsIDc0LCA3NCk7XHJcbn1cclxuLmNvbnRlbnR7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiA2MDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAgIzQyNDI0MjtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _score_sheet_delete_hand_dialog_delete_hand_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./score-sheet/delete-hand-dialog/delete-hand-dialog */ "./src/app/score-sheet/delete-hand-dialog/delete-hand-dialog.ts");
/* harmony import */ var _score_sheet_new_game_dialog_new_game_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./score-sheet/new-game-dialog/new-game-dialog */ "./src/app/score-sheet/new-game-dialog/new-game-dialog.ts");
/* harmony import */ var _score_sheet_score_sheet_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./score-sheet/score-sheet.component */ "./src/app/score-sheet/score-sheet.component.ts");
/* harmony import */ var _score_sheet_team_name_change_dialog_team_name_change_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./score-sheet/team-name-change-dialog/team-name-change-dialog */ "./src/app/score-sheet/team-name-change-dialog/team-name-change-dialog.ts");
/* harmony import */ var _state_game_reducer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./state/game.reducer */ "./src/app/state/game.reducer.ts");
















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["StoreModule"].forRoot({ game: _state_game_reducer__WEBPACK_IMPORTED_MODULE_13__["gameReducer"] }, {}),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
        _score_sheet_score_sheet_component__WEBPACK_IMPORTED_MODULE_11__["ScoreSheetComponent"],
        _score_sheet_delete_hand_dialog_delete_hand_dialog__WEBPACK_IMPORTED_MODULE_9__["DeleteHandDialog"],
        _score_sheet_new_game_dialog_new_game_dialog__WEBPACK_IMPORTED_MODULE_10__["NewGameDialog"],
        _score_sheet_team_name_change_dialog_team_name_change_dialog__WEBPACK_IMPORTED_MODULE_12__["TeamNameChangeDialog"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        _material_module__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["StoreRootModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                    _score_sheet_score_sheet_component__WEBPACK_IMPORTED_MODULE_11__["ScoreSheetComponent"],
                    _score_sheet_delete_hand_dialog_delete_hand_dialog__WEBPACK_IMPORTED_MODULE_9__["DeleteHandDialog"],
                    _score_sheet_new_game_dialog_new_game_dialog__WEBPACK_IMPORTED_MODULE_10__["NewGameDialog"],
                    _score_sheet_team_name_change_dialog_team_name_change_dialog__WEBPACK_IMPORTED_MODULE_12__["TeamNameChangeDialog"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
                    _material_module__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["StoreModule"].forRoot({ game: _state_game_reducer__WEBPACK_IMPORTED_MODULE_13__["gameReducer"] }, {}),
                ],
                exports: [],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");









class MaterialModule {
}
MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MaterialModule_Factory(t) { return new (t || MaterialModule)(); }, imports: [
        // A11yModule,
        // ClipboardModule,
        // CdkStepperModule,
        // CdkTableModule,
        // CdkTreeModule,
        // DragDropModule,
        // MatAutocompleteModule,
        // MatBadgeModule,
        // MatBottomSheetModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"],
        // MatCardModule,
        // MatCheckboxModule,
        // MatChipsModule,
        // MatStepperModule,
        // MatDatepickerModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
        // MatDividerModule,
        // MatExpansionModule,
        // MatGridListModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
        // MatListModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
        // MatNativeDateModule,
        // MatPaginatorModule,
        // MatProgressBarModule,
        // MatProgressSpinnerModule,
        // MatRadioModule,
        // MatRippleModule,
        // MatSelectModule,
        // MatSidenavModule,
        // MatSliderModule,
        // MatSlideToggleModule,
        // MatSnackBarModule,
        // MatSortModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, { exports: [
        // A11yModule,
        // ClipboardModule,
        // CdkStepperModule,
        // CdkTableModule,
        // CdkTreeModule,
        // DragDropModule,
        // MatAutocompleteModule,
        // MatBadgeModule,
        // MatBottomSheetModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"],
        // MatCardModule,
        // MatCheckboxModule,
        // MatChipsModule,
        // MatStepperModule,
        // MatDatepickerModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
        // MatDividerModule,
        // MatExpansionModule,
        // MatGridListModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
        // MatListModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
        // MatNativeDateModule,
        // MatPaginatorModule,
        // MatProgressBarModule,
        // MatProgressSpinnerModule,
        // MatRadioModule,
        // MatRippleModule,
        // MatSelectModule,
        // MatSidenavModule,
        // MatSliderModule,
        // MatSlideToggleModule,
        // MatSnackBarModule,
        // MatSortModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                exports: [
                    // A11yModule,
                    // ClipboardModule,
                    // CdkStepperModule,
                    // CdkTableModule,
                    // CdkTreeModule,
                    // DragDropModule,
                    // MatAutocompleteModule,
                    // MatBadgeModule,
                    // MatBottomSheetModule,
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"],
                    // MatCardModule,
                    // MatCheckboxModule,
                    // MatChipsModule,
                    // MatStepperModule,
                    // MatDatepickerModule,
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
                    // MatDividerModule,
                    // MatExpansionModule,
                    // MatGridListModule,
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                    // MatListModule,
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
                    // MatNativeDateModule,
                    // MatPaginatorModule,
                    // MatProgressBarModule,
                    // MatProgressSpinnerModule,
                    // MatRadioModule,
                    // MatRippleModule,
                    // MatSelectModule,
                    // MatSidenavModule,
                    // MatSliderModule,
                    // MatSlideToggleModule,
                    // MatSnackBarModule,
                    // MatSortModule,
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/score-sheet/delete-hand-dialog/delete-hand-dialog.ts":
/*!**********************************************************************!*\
  !*** ./src/app/score-sheet/delete-hand-dialog/delete-hand-dialog.ts ***!
  \**********************************************************************/
/*! exports provided: DeleteHandDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteHandDialog", function() { return DeleteHandDialog; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");




class DeleteHandDialog {
}
DeleteHandDialog.ɵfac = function DeleteHandDialog_Factory(t) { return new (t || DeleteHandDialog)(); };
DeleteHandDialog.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DeleteHandDialog, selectors: [["delete-hand-dialog"]], decls: 10, vars: 1, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["mat-dialog-actions", ""], ["mat-button", "", "mat-dialog-close", ""], ["mat-button", "", "cdkFocusInitial", "", 3, "mat-dialog-close"]], template: function DeleteHandDialog_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Delete Hand");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Are you sure you wish to delete this hand?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]], styles: [".mat-dialog-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2NvcmUtc2hlZXQvZGVsZXRlLWhhbmQtZGlhbG9nL2RlbGV0ZS1oYW5kLWRpYWxvZy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3Njb3JlLXNoZWV0L2RlbGV0ZS1oYW5kLWRpYWxvZy9kZWxldGUtaGFuZC1kaWFsb2cuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtZGlhbG9nLWFjdGlvbnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kOyBcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DeleteHandDialog, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'delete-hand-dialog',
                templateUrl: './delete-hand-dialog.html',
                styleUrls: ['./delete-hand-dialog.scss'],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/score-sheet/new-game-dialog/new-game-dialog.ts":
/*!****************************************************************!*\
  !*** ./src/app/score-sheet/new-game-dialog/new-game-dialog.ts ***!
  \****************************************************************/
/*! exports provided: NewGameDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewGameDialog", function() { return NewGameDialog; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");




class NewGameDialog {
}
NewGameDialog.ɵfac = function NewGameDialog_Factory(t) { return new (t || NewGameDialog)(); };
NewGameDialog.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NewGameDialog, selectors: [["new-game-dialog"]], decls: 10, vars: 1, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["mat-dialog-actions", ""], ["mat-button", "", "mat-dialog-close", ""], ["mat-button", "", "cdkFocusInitial", "", 3, "mat-dialog-close"]], template: function NewGameDialog_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "New Game");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Are you sure sure you wish to start a new game?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "New Game");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]], styles: [".mat-dialog-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2NvcmUtc2hlZXQvbmV3LWdhbWUtZGlhbG9nL25ldy1nYW1lLWRpYWxvZy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3Njb3JlLXNoZWV0L25ldy1nYW1lLWRpYWxvZy9uZXctZ2FtZS1kaWFsb2cuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtZGlhbG9nLWFjdGlvbnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kOyBcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewGameDialog, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'new-game-dialog',
                templateUrl: './new-game-dialog.html',
                styleUrls: ['./new-game-dialog.scss'],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/score-sheet/score-sheet.component.ts":
/*!******************************************************!*\
  !*** ./src/app/score-sheet/score-sheet.component.ts ***!
  \******************************************************/
/*! exports provided: ScoreSheetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScoreSheetComponent", function() { return ScoreSheetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var app_state_game_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/state/game.actions */ "./src/app/state/game.actions.ts");
/* harmony import */ var app_state_game_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/state/game.utils */ "./src/app/state/game.utils.ts");
/* harmony import */ var _delete_hand_dialog_delete_hand_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./delete-hand-dialog/delete-hand-dialog */ "./src/app/score-sheet/delete-hand-dialog/delete-hand-dialog.ts");
/* harmony import */ var _new_game_dialog_new_game_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./new-game-dialog/new-game-dialog */ "./src/app/score-sheet/new-game-dialog/new-game-dialog.ts");
/* harmony import */ var _team_name_change_dialog_team_name_change_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./team-name-change-dialog/team-name-change-dialog */ "./src/app/score-sheet/team-name-change-dialog/team-name-change-dialog.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");















function ScoreSheetComponent_mat_header_cell_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-header-cell");
} }
function ScoreSheetComponent_mat_cell_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r21 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r21 + 1);
} }
function ScoreSheetComponent_mat_header_cell_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.leftTeam == null ? null : ctx_r3.leftTeam.name, " ");
} }
function ScoreSheetComponent_mat_cell_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r22 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r4.isLeft(row_r22) ? row_r22 == null ? null : row_r22.total : "", " ");
} }
function ScoreSheetComponent_mat_header_cell_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.toWinLoseLeft);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.toWinLoseLeft.startsWith("-") ? "to lose" : "to win");
} }
const _c0 = function (a0, a1) { return { win: a0, loss: a1 }; };
function ScoreSheetComponent_mat_cell_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r23 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c0, ctx_r6.isLeft(row_r23) && (row_r23 == null ? null : row_r23.delta) > 0, ctx_r6.isLeft(row_r23) && (row_r23 == null ? null : row_r23.delta) < 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r6.isLeft(row_r23) ? ctx_r6.printBid(row_r23 == null ? null : row_r23.bid) : "", " ");
} }
function ScoreSheetComponent_mat_header_cell_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.toWinLoseRight);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.toWinLoseRight.startsWith("-") ? "to lose" : "to win");
} }
function ScoreSheetComponent_mat_cell_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r24 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c0, ctx_r8.isRight(row_r24) && (row_r24 == null ? null : row_r24.delta) > 0, ctx_r8.isRight(row_r24) && (row_r24 == null ? null : row_r24.delta) < 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r8.isRight(row_r24) ? ctx_r8.printBid(row_r24 == null ? null : row_r24.bid) : "", " ");
} }
function ScoreSheetComponent_mat_header_cell_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r9.rightTeam == null ? null : ctx_r9.rightTeam.name, " ");
} }
function ScoreSheetComponent_mat_cell_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r25 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r10.isRight(row_r25) ? row_r25 == null ? null : row_r25.total : "", " ");
} }
function ScoreSheetComponent_mat_header_row_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-header-row");
} }
function ScoreSheetComponent_mat_row_33_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-row", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScoreSheetComponent_mat_row_33_Template_mat_row_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const row_r26 = ctx.$implicit; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r27.selectedRow = row_r26; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r26 = ctx.$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected-row", ctx_r12.selectedRow == row_r26);
} }
function ScoreSheetComponent_button_104_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScoreSheetComponent_button_104_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r29.onNewHandClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " New Hand ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r18.isNewHandPermitted);
} }
function ScoreSheetComponent_button_105_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScoreSheetComponent_button_105_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r31.onEndGameClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Next Game ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r19.isNewHandPermitted);
} }
class ScoreSheetComponent {
    constructor(dialog, store) {
        this.dialog = dialog;
        this.store = store;
        this.displayedColumns = [
            'handNo',
            'leftTotal',
            'leftBid',
            'rightBid',
            'rightTotal',
        ];
        this.selectedRow = null;
        this.dataSource = [];
        this.game$ = store.select('game');
    }
    ngOnInit() {
        this.game$.subscribe((x) => {
            this.dataSource = x.hands;
            this.leftTeam = x.leftTeam;
            this.rightTeam = x.rightTeam;
            if (x.hands.length > 0) {
                this.selectedRow = x.hands.find((x) => { var _a; return x.id === ((_a = this.selectedRow) === null || _a === void 0 ? void 0 : _a.id); });
                if (!this.selectedRow) {
                    this.selectedRow = x.hands[x.hands.length - 1];
                }
            }
        });
    }
    isLeft(hand) {
        var _a, _b;
        return ((_a = hand === null || hand === void 0 ? void 0 : hand.team) === null || _a === void 0 ? void 0 : _a.name) == ((_b = this.leftTeam) === null || _b === void 0 ? void 0 : _b.name) && this.isRowValid(hand);
    }
    isRight(hand) {
        var _a, _b;
        return ((_a = hand === null || hand === void 0 ? void 0 : hand.team) === null || _a === void 0 ? void 0 : _a.name) == ((_b = this.rightTeam) === null || _b === void 0 ? void 0 : _b.name) && this.isRowValid(hand);
    }
    get toWinLoseLeft() {
        const rev = this.dataSource
            .filter((x) => { var _a, _b; return ((_a = x.team) === null || _a === void 0 ? void 0 : _a.name) == ((_b = this.leftTeam) === null || _b === void 0 ? void 0 : _b.name); })
            .reverse();
        return rev.length > 0 && rev[0].total
            ? rev[0].total > 0
                ? Object(app_state_game_utils__WEBPACK_IMPORTED_MODULE_2__["scoreToWinLose"])(500 - rev[0].total)
                : Object(app_state_game_utils__WEBPACK_IMPORTED_MODULE_2__["scoreToWinLose"])(-500 - rev[0].total)
            : Object(app_state_game_utils__WEBPACK_IMPORTED_MODULE_2__["scoreToWinLose"])(500);
    }
    get toWinLoseRight() {
        const rev = this.dataSource
            .filter((x) => { var _a, _b; return ((_a = x.team) === null || _a === void 0 ? void 0 : _a.name) == ((_b = this.rightTeam) === null || _b === void 0 ? void 0 : _b.name); })
            .reverse();
        return rev.length > 0 && rev[0].total
            ? rev[0].total > 0
                ? Object(app_state_game_utils__WEBPACK_IMPORTED_MODULE_2__["scoreToWinLose"])(500 - rev[0].total)
                : Object(app_state_game_utils__WEBPACK_IMPORTED_MODULE_2__["scoreToWinLose"])(-500 - rev[0].total)
            : Object(app_state_game_utils__WEBPACK_IMPORTED_MODULE_2__["scoreToWinLose"])(500);
    }
    onTeamNameClick() {
        const dialogRef = this.dialog.open(_team_name_change_dialog_team_name_change_dialog__WEBPACK_IMPORTED_MODULE_5__["TeamNameChangeDialog"], {
            width: '260px',
            data: {
                left: this.leftTeam,
                right: this.rightTeam,
            },
        });
        dialogRef.afterClosed().subscribe((result) => {
            var _a, _b;
            if (result) {
                this.leftTeam = (_a = result.left.name) !== null && _a !== void 0 ? _a : 'Left';
                this.rightTeam = (_b = result.right.name) !== null && _b !== void 0 ? _b : 'Right';
            }
        });
    }
    get isNewHandPermitted() {
        if (this.dataSource.length === 0)
            return true;
        const last = this.dataSource[this.dataSource.length - 1];
        return this.isRowValid(last);
    }
    isRowValid(row) {
        var _a, _b;
        return (row && ((_a = row.bid) === null || _a === void 0 ? void 0 : _a.hands) && ((_b = row.bid) === null || _b === void 0 ? void 0 : _b.suit) &&
            row.team &&
            (row.win === true || row.win === false));
    }
    printBid(bid) {
        return Object(app_state_game_utils__WEBPACK_IMPORTED_MODULE_2__["printBid"])(bid);
    }
    get selectedTeam() {
        var _a, _b, _c, _d, _e, _f;
        return ((_b = (_a = this.selectedRow) === null || _a === void 0 ? void 0 : _a.team) === null || _b === void 0 ? void 0 : _b.name) === ((_c = this.leftTeam) === null || _c === void 0 ? void 0 : _c.name)
            ? 'left'
            : ((_e = (_d = this.selectedRow) === null || _d === void 0 ? void 0 : _d.team) === null || _e === void 0 ? void 0 : _e.name) === ((_f = this.rightTeam) === null || _f === void 0 ? void 0 : _f.name)
                ? 'right'
                : null;
    }
    onTeamChange(team) {
        if (this.selectedRow && team) {
            this.store.dispatch(Object(app_state_game_actions__WEBPACK_IMPORTED_MODULE_1__["updateHand"])({
                hand: {
                    id: this.selectedRow.id,
                    team: team === 'left' ? this.leftTeam : this.rightTeam,
                },
            }));
        }
    }
    get selectedHands() {
        var _a, _b, _c;
        return (_c = (_b = (_a = this.selectedRow) === null || _a === void 0 ? void 0 : _a.bid) === null || _b === void 0 ? void 0 : _b.hands) === null || _c === void 0 ? void 0 : _c.toString();
    }
    onHandsChange(handCount) {
        if (this.selectedRow) {
            this.store.dispatch(Object(app_state_game_actions__WEBPACK_IMPORTED_MODULE_1__["updateHand"])({
                hand: {
                    id: this.selectedRow.id,
                    bid: { hands: parseInt(handCount) },
                },
            }));
        }
    }
    get selectedSuit() {
        var _a, _b;
        return (_b = (_a = this.selectedRow) === null || _a === void 0 ? void 0 : _a.bid) === null || _b === void 0 ? void 0 : _b.suit;
    }
    onSuitChange(suit) {
        if (this.selectedRow && suit) {
            this.store.dispatch(Object(app_state_game_actions__WEBPACK_IMPORTED_MODULE_1__["updateHand"])({
                hand: {
                    id: this.selectedRow.id,
                    bid: { suit },
                },
            }));
        }
    }
    get selectedOutcome() {
        var _a, _b;
        return (_b = (_a = this.selectedRow) === null || _a === void 0 ? void 0 : _a.win) === null || _b === void 0 ? void 0 : _b.toString();
    }
    onOutcomeChange(outcome) {
        if (this.selectedRow) {
            this.store.dispatch(Object(app_state_game_actions__WEBPACK_IMPORTED_MODULE_1__["updateHand"])({
                hand: { id: this.selectedRow.id, win: outcome === 'true' },
            }));
        }
    }
    get selectedHandsWon() {
        var _a, _b;
        return (_b = (_a = this.selectedRow) === null || _a === void 0 ? void 0 : _a.handsWon) === null || _b === void 0 ? void 0 : _b.toString();
    }
    onHandsWonChange(handsWon) {
        if (this.selectedRow) {
            this.store.dispatch(Object(app_state_game_actions__WEBPACK_IMPORTED_MODULE_1__["updateHand"])({
                hand: { id: this.selectedRow.id, handsWon: parseInt(handsWon) },
            }));
        }
    }
    onNewHandClick() {
        if (this.isNewHandPermitted) {
            this.selectedRow = null;
            this.store.dispatch(Object(app_state_game_actions__WEBPACK_IMPORTED_MODULE_1__["newHand"])());
        }
    }
    onDeleteClick() {
        if (this.selectedRow) {
            const dialogRef = this.dialog.open(_delete_hand_dialog_delete_hand_dialog__WEBPACK_IMPORTED_MODULE_3__["DeleteHandDialog"], {
                width: '260px',
                data: {},
            });
            dialogRef.afterClosed().subscribe((result) => {
                if (result) {
                    this.store.dispatch(Object(app_state_game_actions__WEBPACK_IMPORTED_MODULE_1__["deleteHand"])({ handId: this.selectedRow.id }));
                }
            });
        }
    }
    get isGameComplete() {
        return (this.dataSource.findIndex((x) => x.total >= 500 || x.total <= -500) >= 0);
    }
    onEndGameClick() {
        const dialogRef = this.dialog.open(_new_game_dialog_new_game_dialog__WEBPACK_IMPORTED_MODULE_4__["NewGameDialog"], {
            width: '260px',
            data: {},
        });
        dialogRef.afterClosed().subscribe((result) => {
            if (result) {
                this.store.dispatch(Object(app_state_game_actions__WEBPACK_IMPORTED_MODULE_1__["endGame"])());
            }
        });
    }
}
ScoreSheetComponent.ɵfac = function ScoreSheetComponent_Factory(t) { return new (t || ScoreSheetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"])); };
ScoreSheetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ScoreSheetComponent, selectors: [["score-sheet"]], decls: 109, vars: 15, consts: [["role", "banner", 1, "toolbar"], ["src", "assets/cards.png", 1, "icon-img"], [1, "spacer"], ["mat-icon-button", "", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", "", "disabled", "", 3, "click"], ["mat-menu-item", "", 3, "click"], [1, "container"], [1, "content"], [3, "dataSource"], ["matColumnDef", "handNo"], [4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "leftTotal"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "leftBid"], ["mat-cell", "", 3, "ngClass", 4, "matCellDef"], ["matColumnDef", "rightBid"], ["matColumnDef", "rightTotal"], [4, "matHeaderRowDef", "matHeaderRowDefSticky"], [3, "selected-row", "click", 4, "matRowDef", "matRowDefColumns"], [1, "footer"], [1, "footer-row"], [3, "value", "change"], ["teamGroup", "matButtonToggleGroup"], ["value", "left"], ["value", "right"], ["name", "bidHands", 3, "value", "change"], ["handsGroup", "matButtonToggleGroup"], ["value", "6"], ["value", "7"], ["value", "8"], ["value", "9"], ["value", "10"], ["name", "bidSuit", 3, "value", "change"], ["suitGroup", "matButtonToggleGroup"], ["value", "N"], ["value", "H"], ["value", "D"], ["value", "C"], ["value", "S"], ["name", "outcome", 3, "value", "change"], ["outcomeGroup", "matButtonToggleGroup"], ["value", "true"], ["value", "false"], ["name", "handsWon", 3, "value", "change"], ["handsWonGroup", "matButtonToggleGroup"], ["value", "0"], ["value", "1"], ["value", "2"], ["value", "3"], ["value", "4"], ["value", "5"], ["mat-flat-button", "", 3, "disabled", "click"], ["mat-flat-button", "", "color", "primary", "class", "wide", 3, "disabled", "click", 4, "ngIf"], ["mat-flat-button", "", "color", "primary", "class", "wide end-game", 3, "disabled", "click", 4, "ngIf"], ["mat-flat-button", "", "disabled", ""], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-cell", "", 3, "ngClass"], [3, "click"], ["mat-flat-button", "", "color", "primary", 1, "wide", 3, "disabled", "click"], ["mat-flat-button", "", "color", "primary", 1, "wide", "end-game", 3, "disabled", "click"]], template: function ScoreSheetComponent_Template(rf, ctx) { if (rf & 1) {
        const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Can't Remember");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "more_vert");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-menu", null, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScoreSheetComponent_Template_button_click_10_listener() { return ctx.onTeamNameClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Team Names");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScoreSheetComponent_Template_button_click_12_listener() { return ctx.onEndGameClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "New Game");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-table", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](17, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ScoreSheetComponent_mat_header_cell_18_Template, 1, 0, "mat-header-cell", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ScoreSheetComponent_mat_cell_19_Template, 2, 1, "mat-cell", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](20, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ScoreSheetComponent_mat_header_cell_21_Template, 2, 1, "mat-header-cell", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ScoreSheetComponent_mat_cell_22_Template, 2, 1, "mat-cell", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](23, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ScoreSheetComponent_mat_header_cell_24_Template, 5, 2, "mat-header-cell", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ScoreSheetComponent_mat_cell_25_Template, 2, 5, "mat-cell", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](26, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, ScoreSheetComponent_mat_header_cell_27_Template, 5, 2, "mat-header-cell", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ScoreSheetComponent_mat_cell_28_Template, 2, 5, "mat-cell", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](29, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, ScoreSheetComponent_mat_header_cell_30_Template, 2, 1, "mat-header-cell", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, ScoreSheetComponent_mat_cell_31_Template, 2, 1, "mat-cell", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, ScoreSheetComponent_mat_header_row_32_Template, 1, 0, "mat-header-row", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, ScoreSheetComponent_mat_row_33_Template, 1, 2, "mat-row", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-button-toggle-group", 24, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ScoreSheetComponent_Template_mat_button_toggle_group_change_36_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](37); return ctx.onTeamChange(_r13.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-button-toggle", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-button-toggle", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-button-toggle-group", 28, 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ScoreSheetComponent_Template_mat_button_toggle_group_change_43_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](44); return ctx.onHandsChange(_r14.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-button-toggle", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-button-toggle", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-button-toggle", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-button-toggle", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-button-toggle", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-button-toggle-group", 35, 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ScoreSheetComponent_Template_mat_button_toggle_group_change_56_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](57); return ctx.onSuitChange(_r15.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "mat-button-toggle", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "\u2297");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "mat-button-toggle", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "\u2661");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "mat-button-toggle", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "\u2662");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "mat-button-toggle", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "\u2667");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "mat-button-toggle", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "\u2664");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "mat-button-toggle-group", 42, 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ScoreSheetComponent_Template_mat_button_toggle_group_change_69_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](70); return ctx.onOutcomeChange(_r16.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "mat-button-toggle", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Success");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "mat-button-toggle", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Failure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "mat-button-toggle-group", 46, 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ScoreSheetComponent_Template_mat_button_toggle_group_change_76_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](77); return ctx.onHandsWonChange(_r17.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "mat-button-toggle", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "mat-button-toggle", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "mat-button-toggle", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "mat-button-toggle", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "mat-button-toggle", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "mat-button-toggle", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "mat-button-toggle", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "mat-button-toggle", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "mat-button-toggle", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "mat-button-toggle", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "mat-button-toggle", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "button", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScoreSheetComponent_Template_button_click_101_listener() { return ctx.onDeleteClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](104, ScoreSheetComponent_button_104_Template, 2, 1, "button", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](105, ScoreSheetComponent_button_105_Template, 2, 1, "button", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "button", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "history");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns)("matHeaderRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.selectedTeam);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.leftTeam == null ? null : ctx.leftTeam.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.rightTeam == null ? null : ctx.rightTeam.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.selectedHands);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.selectedSuit);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.selectedOutcome);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.selectedHandsWon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.selectedRow || ctx.dataSource.length < 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isGameComplete);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isGameComplete);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuTrigger"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuItem"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatRowDef"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_12__["MatButtonToggleGroup"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_12__["MatButtonToggle"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatCell"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgClass"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatRow"]], styles: [".icon-img[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  margin-top: -4px;\n  padding: 0 4px;\n}\n\nmat-table[_ngcontent-%COMP%] {\n  min-width: 250px;\n  max-width: 100%;\n  padding-bottom: 40px;\n}\n\n.content[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n\nmat-cell[_ngcontent-%COMP%], mat-header-cell[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n\n.mat-column-handNo[_ngcontent-%COMP%] {\n  font-size: 10px;\n  min-width: 8px;\n  max-width: 16px;\n  padding: 0 16px;\n}\n\n.mat-header-cell[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\n.mat-header-cell.mat-column-leftBid[_ngcontent-%COMP%], .mat-header-cell.mat-column-rightBid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  font-size: 10px;\n  line-height: 12px;\n}\n\n.mat-column-leftBid[_ngcontent-%COMP%], .mat-column-rightBid[_ngcontent-%COMP%] {\n  line-height: 32px;\n  min-width: 36px;\n  max-width: 36px;\n  padding: 0;\n  margin: 4px;\n  min-height: unset;\n}\n\nmat-row[_ngcontent-%COMP%], mat-footer-row[_ngcontent-%COMP%] {\n  min-height: 40px;\n}\n\n.win[_ngcontent-%COMP%] {\n  background-color: #2e682e;\n}\n\n.loss[_ngcontent-%COMP%] {\n  background-color: #700d0d;\n}\n\n.end-game[_ngcontent-%COMP%] {\n  background-color: #700d0d;\n}\n\n.footer[_ngcontent-%COMP%] {\n  background: #686868;\n  color: white;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n}\n\n.toolbar[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  width: 100%;\n  max-width: 600px;\n}\n\n.content[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 40px;\n  max-height: calc(100vh - 40px - 290px);\n  min-height: calc(100vh - 40px - 290px);\n  width: 100%;\n  max-width: 600px;\n  overflow-y: scroll;\n}\n\n.footer[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  max-width: 600px;\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 2px 1px;\n}\n\nmat-button-toggle-group[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  align-items: stretch;\n  align-content: stretch;\n}\n\nmat-button-toggle[_ngcontent-%COMP%] {\n  flex-basis: 50px;\n  flex-grow: 5;\n}\n\n.mat-button-toggle-checked[_ngcontent-%COMP%] {\n  background-color: #550955;\n}\n\n.footer-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n\n.wide[_ngcontent-%COMP%] {\n  flex-grow: 10;\n}\n\n.selected-row[_ngcontent-%COMP%] {\n  background-color: #555454;\n}\n\n.toolbar[_ngcontent-%COMP%] {\n  color: white;\n  background-color: #555353;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n\n.toolbar[_ngcontent-%COMP%]   .spacer[_ngcontent-%COMP%] {\n  flex-grow: 10;\n}\n\n.logo[_ngcontent-%COMP%] {\n  transform: scale(1.5);\n  padding: 8px 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2NvcmUtc2hlZXQvc2NvcmUtc2hlZXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUNBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7QUFFRjs7QUFBQTtFQUNFLG1CQUFBO0FBR0Y7O0FBREE7O0VBRUUsdUJBQUE7QUFJRjs7QUFEQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUFJRjs7QUFGQTtFQUNFLGVBQUE7QUFLRjs7QUFIQTs7RUFFRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQU1GOztBQUhBOztFQUVFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBTUY7O0FBSkE7O0VBRUUsZ0JBQUE7QUFPRjs7QUFKQTtFQUNFLHlCQUFBO0FBT0Y7O0FBTEE7RUFDRSx5QkFBQTtBQVFGOztBQU5BO0VBRUUseUJBQUE7QUFRRjs7QUFOQTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBU0Y7O0FBTkE7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQVNGOztBQUxBO0VBQ0UsZUFBQTtFQUNBLFNBQUE7RUFDQSxzQ0FBQTtFQUNBLHNDQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFRRjs7QUFMQTtFQUNFLGVBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBUUY7O0FBTEE7RUFDRSxlQUFBO0FBUUY7O0FBTEE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLHNCQUFBO0FBUUY7O0FBTkE7RUFDRSxnQkFBQTtFQUNBLFlBQUE7QUFTRjs7QUFQQTtFQUNFLHlCQUFBO0FBVUY7O0FBUkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFXRjs7QUFUQTtFQUNFLGFBQUE7QUFZRjs7QUFUQTtFQUNFLHlCQUFBO0FBWUY7O0FBVkE7RUFDRSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQWFGOztBQVhFO0VBQ0UsYUFBQTtBQWFKOztBQVRBO0VBQ0UscUJBQUE7RUFDQSxpQkFBQTtBQVlGIiwiZmlsZSI6InNyYy9hcHAvc2NvcmUtc2hlZXQvc2NvcmUtc2hlZXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaWNvbi1pbWd7XHJcbiAgd2lkdGg6IDMycHg7XHJcbiAgaGVpZ2h0OiAzMnB4O1xyXG4gIG1hcmdpbi10b3A6IC00cHg7XHJcbiAgcGFkZGluZzogMCA0cHg7XHJcbn1cclxubWF0LXRhYmxlIHtcclxuICBtaW4td2lkdGg6IDI1MHB4O1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBwYWRkaW5nLWJvdHRvbTogNDBweDtcclxufVxyXG4uY29udGVudCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzJweDtcclxufVxyXG5tYXQtY2VsbCxcclxubWF0LWhlYWRlci1jZWxsIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLm1hdC1jb2x1bW4taGFuZE5vIHtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgbWluLXdpZHRoOiA4cHg7XHJcbiAgbWF4LXdpZHRoOiAxNnB4O1xyXG4gIHBhZGRpbmc6IDAgMTZweDtcclxufVxyXG4ubWF0LWhlYWRlci1jZWxsIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuLm1hdC1oZWFkZXItY2VsbC5tYXQtY29sdW1uLWxlZnRCaWQsXHJcbi5tYXQtaGVhZGVyLWNlbGwubWF0LWNvbHVtbi1yaWdodEJpZCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBsaW5lLWhlaWdodDogMTJweDtcclxufVxyXG5cclxuLm1hdC1jb2x1bW4tbGVmdEJpZCxcclxuLm1hdC1jb2x1bW4tcmlnaHRCaWQge1xyXG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xyXG4gIG1pbi13aWR0aDogMzZweDtcclxuICBtYXgtd2lkdGg6IDM2cHg7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDRweDtcclxuICBtaW4taGVpZ2h0OiB1bnNldDtcclxufVxyXG5tYXQtcm93LFxyXG5tYXQtZm9vdGVyLXJvdyB7XHJcbiAgbWluLWhlaWdodDogNDBweDtcclxufVxyXG5cclxuLndpbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ2LCAxMDQsIDQ2KTtcclxufVxyXG4ubG9zcyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDExMiwgMTMsIDEzKTtcclxufVxyXG4uZW5kLWdhbWVcclxue1xyXG4gIGJhY2tncm91bmQtY29sb3I6cmdiKDExMiwgMTMsIDEzKTtcclxufVxyXG4uZm9vdGVyIHtcclxuICBiYWNrZ3JvdW5kOiAjNjg2ODY4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4udG9vbGJhciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtd2lkdGg6IDYwMHB4O1xyXG59XHJcblxyXG5cclxuLmNvbnRlbnQge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDQwcHg7XHJcbiAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDQwcHggLSAyOTBweCk7XHJcbiAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDQwcHggLSAyOTBweCk7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiA2MDBweDtcclxuICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgLy8gaGVpZ2h0OiAxOHJlbTtcclxufVxyXG4uZm9vdGVyIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogNjAwcHg7XHJcbiAgLy8gaGVpZ2h0OiAxOHJlbTtcclxufVxyXG5idXR0b257XHJcbiAgbWFyZ2luOiAycHggMXB4O1xyXG59XHJcblxyXG5tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gIGFsaWduLWNvbnRlbnQ6IHN0cmV0Y2g7XHJcbn1cclxubWF0LWJ1dHRvbi10b2dnbGUge1xyXG4gIGZsZXgtYmFzaXM6IDUwcHg7XHJcbiAgZmxleC1ncm93OiA1O1xyXG59XHJcbi5tYXQtYnV0dG9uLXRvZ2dsZS1jaGVja2VkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODUsIDksIDg1KTtcclxufVxyXG4uZm9vdGVyLXJvdyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcbi53aWRlIHtcclxuICBmbGV4LWdyb3c6IDEwO1xyXG59XHJcblxyXG4uc2VsZWN0ZWQtcm93IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODUsIDg0LCA4NCk7XHJcbn1cclxuLnRvb2xiYXIge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODUsIDgzLCA4Myk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIC5zcGFjZXIge1xyXG4gICAgZmxleC1ncm93OiAxMDtcclxuICB9XHJcbn1cclxuXHJcbi5sb2dvIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XHJcbiAgcGFkZGluZzogOHB4IDEycHg7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScoreSheetComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'score-sheet',
                templateUrl: './score-sheet.component.html',
                styleUrls: ['./score-sheet.component.scss'],
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"] }]; }, null); })();


/***/ }),

/***/ "./src/app/score-sheet/team-name-change-dialog/team-name-change-dialog.ts":
/*!********************************************************************************!*\
  !*** ./src/app/score-sheet/team-name-change-dialog/team-name-change-dialog.ts ***!
  \********************************************************************************/
/*! exports provided: TeamNameChangeDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamNameChangeDialog", function() { return TeamNameChangeDialog; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");









class TeamNameChangeDialog {
    constructor(data) {
        var _a, _b;
        this.data = data;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            leftTeam: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]((_a = data === null || data === void 0 ? void 0 : data.left) === null || _a === void 0 ? void 0 : _a.name, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1)),
            rightTeam: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]((_b = data === null || data === void 0 ? void 0 : data.right) === null || _b === void 0 ? void 0 : _b.name),
        });
    }
}
TeamNameChangeDialog.ɵfac = function TeamNameChangeDialog_Factory(t) { return new (t || TeamNameChangeDialog)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])); };
TeamNameChangeDialog.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TeamNameChangeDialog, selectors: [["team-name-change-dialog"]], decls: 17, vars: 2, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], [3, "formGroup"], ["appearance", "fill"], ["matInput", "", "formControlName", "leftTeam"], ["matInput", "", "formControlName", "rightTeam"], ["mat-dialog-actions", ""], ["mat-button", "", "mat-dialog-close", ""], ["mat-button", "", "cdkFocusInitial", "", 3, "mat-dialog-close"]], template: function TeamNameChangeDialog_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Change Team Names");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Left Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Right Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "OK");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", ctx.data);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogClose"]], styles: [".mat-dialog-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2NvcmUtc2hlZXQvdGVhbS1uYW1lLWNoYW5nZS1kaWFsb2cvdGVhbS1uYW1lLWNoYW5nZS1kaWFsb2cuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zY29yZS1zaGVldC90ZWFtLW5hbWUtY2hhbmdlLWRpYWxvZy90ZWFtLW5hbWUtY2hhbmdlLWRpYWxvZy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1kaWFsb2ctYWN0aW9ucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7IFxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeamNameChangeDialog, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'team-name-change-dialog',
                templateUrl: './team-name-change-dialog.html',
                styleUrls: ['./team-name-change-dialog.scss'],
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/state/game.actions.ts":
/*!***************************************!*\
  !*** ./src/app/state/game.actions.ts ***!
  \***************************************/
/*! exports provided: newHand, endGame, deleteHand, updateHand */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newHand", function() { return newHand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "endGame", function() { return endGame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteHand", function() { return deleteHand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateHand", function() { return updateHand; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");

const newHand = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('Game-NewHand');
const endGame = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('Game-EndGame');
const deleteHand = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('Game-DeleteHand', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const updateHand = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('Game-UpdateHand', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "./src/app/state/game.reducer.ts":
/*!***************************************!*\
  !*** ./src/app/state/game.reducer.ts ***!
  \***************************************/
/*! exports provided: initialState, gameReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gameReducer", function() { return gameReducer; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var _game_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game.actions */ "./src/app/state/game.actions.ts");
/* harmony import */ var _game_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game.utils */ "./src/app/state/game.utils.ts");



const initialLeft = {
    name: 'Team 1',
    players: ['Pleayer 1', 'Player 2']
};
const initialRight = {
    name: 'Team 2',
    players: ['Pleayer 3', 'Player 4']
};
const initialGameState = {
    hands: [
        {
            id: 1,
            bid: { hands: null, suit: null },
            handsWon: null,
            team: null,
            win: null,
        },
    ],
    leftTeam: initialLeft,
    rightTeam: initialRight,
};
const saveSate = (state) => {
    localStorage.setItem('game', JSON.stringify(state));
};
const loadSate = () => {
    const state = localStorage.getItem('game');
    try {
        if (state) {
            const gameState = JSON.parse(state);
            return gameState;
        }
    }
    catch (_a) { }
    return initialGameState;
};
const initialState = loadSate();
const _gameReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_game_actions__WEBPACK_IMPORTED_MODULE_1__["newHand"], (state) => {
    const maxNo = state.hands.length > 0
        ? Math.max.apply(Math, state.hands.map((o) => o.id))
        : 0;
    const newState = Object.assign(Object.assign({}, state), { hands: state.hands.concat({ id: maxNo + 1, bid: {} }) });
    saveSate(newState);
    return newState;
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_game_actions__WEBPACK_IMPORTED_MODULE_1__["endGame"], (state) => {
    saveSate(initialGameState);
    return Object.assign({}, initialGameState);
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_game_actions__WEBPACK_IMPORTED_MODULE_1__["deleteHand"], (state, props) => {
    var _a;
    if (props === null || props === void 0 ? void 0 : props.handId) {
        const newState = Object.assign(Object.assign({}, state), { hands: recalculate(state.hands.filter((x) => x.id !== props.handId), (_a = state.leftTeam) === null || _a === void 0 ? void 0 : _a.name) });
        saveSate(newState);
        return newState;
    }
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_game_actions__WEBPACK_IMPORTED_MODULE_1__["updateHand"], (state, props) => {
    var _a, _b;
    const newHand = props === null || props === void 0 ? void 0 : props.hand;
    let index = state.hands.findIndex((x) => x.id === props.hand.id);
    let hand = state.hands[index];
    if (((_a = newHand.bid) === null || _a === void 0 ? void 0 : _a.hands) != null) {
        if (!hand.bid)
            hand.bid = {};
        hand = Object.assign(Object.assign({}, hand), { bid: Object.assign(Object.assign({}, hand.bid), { hands: newHand.bid.hands }) });
    }
    if (((_b = newHand.bid) === null || _b === void 0 ? void 0 : _b.suit) != null) {
        if (!hand.bid)
            hand.bid = {};
        hand = Object.assign(Object.assign({}, hand), { bid: Object.assign(Object.assign({}, hand.bid), { suit: newHand.bid.suit }) });
    }
    if (newHand.handsWon != null) {
        hand = Object.assign(Object.assign({}, hand), { handsWon: newHand.handsWon });
    }
    if (newHand.team != null) {
        hand = Object.assign(Object.assign({}, hand), { team: newHand.team });
    }
    if (newHand.win != null) {
        hand = Object.assign(Object.assign({}, hand), { win: newHand.win });
    }
    const hands = state.hands.map((x) => x);
    hands[index] = hand;
    const newState = Object.assign(Object.assign({}, state), { hands: recalculate(hands, state.leftTeam.name) });
    saveSate(newState);
    return newState;
}));
const recalculate = (oldHands, leftTeamName) => {
    var _a;
    let leftTotal = 0;
    let rightTotal = 0;
    let hands = [];
    for (let i = 0; i < oldHands.length; i++) {
        const hand = Object.assign({}, oldHands[i]);
        if (isHandValid(hand)) {
            hand.delta = (hand.win ? 1 : -1) * Object(_game_utils__WEBPACK_IMPORTED_MODULE_2__["bidToScore"])(hand.bid);
            if (hand.handsWon === 10 && hand.win) {
                hand.delta = Math.max(hand.delta, 250);
            }
            if (((_a = hand.team) === null || _a === void 0 ? void 0 : _a.name) === leftTeamName) {
                leftTotal += hand.delta;
                hand.total = leftTotal;
            }
            else {
                rightTotal += hand.delta;
                hand.total = rightTotal;
            }
        }
        hands.push(hand);
    }
    return hands;
};
const isHandValid = (hand) => {
    return (hand && hand.bid && hand.team && (hand.win === true || hand.win === false));
};
function gameReducer(state, action) {
    return _gameReducer(state, action);
}


/***/ }),

/***/ "./src/app/state/game.utils.ts":
/*!*************************************!*\
  !*** ./src/app/state/game.utils.ts ***!
  \*************************************/
/*! exports provided: scoreToWinLose, scoreToBid, bidToScore, printBid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scoreToWinLose", function() { return scoreToWinLose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scoreToBid", function() { return scoreToBid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bidToScore", function() { return bidToScore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "printBid", function() { return printBid; });
function scoreToWinLose(score) {
    const bid = scoreToBid(score < 0 ? -score : score);
    return `${score < 0 ? '-' : ''}${printBid(bid)}`;
}
function scoreToBid(score) {
    score = Math.max(score, 40);
    const mod = (score - 40) % 100;
    const hands = Math.floor((score - 40) / 100) + 6;
    let suit = null;
    if (mod > 60)
        suit = 'N';
    else if (mod > 40)
        suit = 'H';
    else if (mod > 20)
        suit = 'D';
    else if (mod > 0)
        suit = 'C';
    else
        suit = 'S';
    return { hands: hands, suit };
}
function bidToScore(bid) {
    let mod = 0;
    switch (bid.suit) {
        case 'N':
            mod = 20;
            break;
        case 'H':
            mod = 0;
            break;
        case 'D':
            mod = -20;
            break;
        case 'C':
            mod = -40;
            break;
        case 'S':
            mod = -60;
            break;
    }
    return (bid.hands - 5) * 100 + mod;
}
function printBid(bid) {
    if (!bid || !bid.hands || !bid.suit)
        return null;
    switch (bid.suit) {
        case 'N':
            return `${bid.hands}⊗`;
        case 'H':
            return `${bid.hands}♡`;
        case 'D':
            return `${bid.hands}♢`;
        case 'C':
            return `${bid.hands}♧`;
        case 'S':
            return `${bid.hands}♤`;
    }
}


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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Kristian\Source\repos\cantremember\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map