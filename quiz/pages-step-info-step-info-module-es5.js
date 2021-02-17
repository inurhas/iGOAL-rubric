function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-step-info-step-info-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/step-info/dialog/criteria-dialog/criteria-dialog.component.html":
  /*!*****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/step-info/dialog/criteria-dialog/criteria-dialog.component.html ***!
    \*****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesStepInfoDialogCriteriaDialogCriteriaDialogComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h2 mat-dialog-title>\n\tSupporting Criteria\n\n\t<button type=\"button\"\n\t\tclass=\"close ml-auto\"\n\t\taria-label=\"Close\"\n\t\tmat-dialog-close>\n\t\t<span aria-hidden=\"true\">&times;</span>\n\t</button>\n</h2>\n<mat-dialog-content class=\"mat-typography\">\n\t<p [innerHTML]=\"content\"\n\t\tclass=\"line-height-2\"></p>\n</mat-dialog-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/step-info/page/step-info/step-info.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/step-info/page/step-info/step-info.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesStepInfoPageStepInfoStepInfoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"step-info h-100\">\n\t<div class=\"information\">\n\t\t<div class=\"information-container\">\n\n\t\t\t<div class=\"my-auto\">\n\t\t\t\t<p class=\"font-36px font-xs-18px font-bold mx-5\">\n\t\t\t\t\tPlease select a statement\n\t\t\t\t\tfrom the drop-down menu of\n\t\t\t\t\teach competence that fits more\n\t\t\t\t\tclosely to what you think about\n\t\t\t\t\tyour current state on the competence.\n\t\t\t\t</p>\n\n\t\t\t\t<button mat-flat-button\n\t\t\t\t\tclass=\"font-20px font-xs-16px rounded-25px bg-info text-white py-2 px-4 mx-5 mb-4\"\n\t\t\t\t\t(click)=\"navigateToQuiz()\">Next</button>\n\t\t\t</div>\n\n\t\t</div>\n\t</div>\n\t<div class=\"level\">\n\n\t\t<div class=\"mx-5 mb-4\">\n\t\t\t<mat-card class=\"rounded-15px bg-info mt-4\">\n\t\t\t\t<ul class=\"font-24px font-xs-20px text-white\">\n\t\t\t\t\t<li class=\"mb-2 font-italic\">\n\t\t\t\t\t\t<span class=\"font-sbold\"><u>None</u></span>:\n\t\t\t\t\t\t\"For us, the competence is a new approach for the startups success\n\t\t\t\t\t\tin the iGOAL context, .. Have/has a limited understanding or experience\n\t\t\t\t\t\tof the competence and have not yet demonstrated the competence for\n\t\t\t\t\t\tstartups in the iGOAL context\". -\n\t\t\t\t\t\t<span class=\"text-primary pointer\"\n\t\t\t\t\t\t\t(click)=\"openCriteriaDialog('none')\">Criteria</span>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"mb-2 font-italic\">\n\t\t\t\t\t\t<span class=\"font-sbold\"><u>Basic</u></span>:\n\t\t\t\t\t\t\".. understand the basic knowledge to discuss the competence and ..\n\t\t\t\t\t\tbelieve that the underlying concept of competence has a positive effect\n\t\t\t\t\t\ton the success of the start in the iGOAL context\". -\n\t\t\t\t\t\t<span class=\"text-primary pointer\"\n\t\t\t\t\t\t\t(click)=\"openCriteriaDialog('basic')\">Criteria</span>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"mb-2 font-italic\">\n\t\t\t\t\t\t<span class=\"font-sbold\"><u>Advanced</u></span>:\n\t\t\t\t\t\t\".. have/has demonstrated the competence in iGOAL settings that\n\t\t\t\t\t\tcontribute positively to the start-up internationalization and ..\n\t\t\t\t\t\tappreciate the importance of competence in relation to\n\t\t\t\t\t\tmy start-up journey\". -\n\t\t\t\t\t\t<span class=\"text-primary pointer\"\n\t\t\t\t\t\t\t(click)=\"openCriteriaDialog('advanced')\">Criteria</span>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"mb-2 font-italic\">\n\t\t\t\t\t\t<span class=\"font-sbold\"><u>Expert</u></span>:\n\t\t\t\t\t\t\".. have/has successfully contributed the expertise to several global\n\t\t\t\t\t\tstart-up projects, happy to pass on the expertise on competence and ..\n\t\t\t\t\t\thelp other start-ups to be globally innovative through\n\t\t\t\t\t\tintergenerational collaboration\". -\n\t\t\t\t\t\t<span class=\"text-primary pointer\"\n\t\t\t\t\t\t\t(click)=\"openCriteriaDialog('expert')\">Criteria</span>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</mat-card>\n\t\t</div>\n\n\t</div>\n</div>\n";
    /***/
  },

  /***/
  "./src/app/pages/step-info/dialog/criteria-dialog/criteria-dialog.component.scss":
  /*!***************************************************************************************!*\
    !*** ./src/app/pages/step-info/dialog/criteria-dialog/criteria-dialog.component.scss ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesStepInfoDialogCriteriaDialogCriteriaDialogComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N0ZXAtaW5mby9kaWFsb2cvY3JpdGVyaWEtZGlhbG9nL2NyaXRlcmlhLWRpYWxvZy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/step-info/dialog/criteria-dialog/criteria-dialog.component.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/pages/step-info/dialog/criteria-dialog/criteria-dialog.component.ts ***!
    \*************************************************************************************/

  /*! exports provided: CriteriaDialogComponent */

  /***/
  function srcAppPagesStepInfoDialogCriteriaDialogCriteriaDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CriteriaDialogComponent", function () {
      return CriteriaDialogComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var CriteriaDialogComponent = /*#__PURE__*/function () {
      function CriteriaDialogComponent(data) {
        _classCallCheck(this, CriteriaDialogComponent);

        this.data = data;
      }

      _createClass(CriteriaDialogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.content = this.data.content;
        }
      }]);

      return CriteriaDialogComponent;
    }();

    CriteriaDialogComponent.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
        }]
      }];
    };

    CriteriaDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-criteria-dialog',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./criteria-dialog.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/step-info/dialog/criteria-dialog/criteria-dialog.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./criteria-dialog.component.scss */
      "./src/app/pages/step-info/dialog/criteria-dialog/criteria-dialog.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))], CriteriaDialogComponent);
    /***/
  },

  /***/
  "./src/app/pages/step-info/dialog/criteria-dialog/index.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/step-info/dialog/criteria-dialog/index.ts ***!
    \*****************************************************************/

  /*! exports provided: CriteriaDialogComponent */

  /***/
  function srcAppPagesStepInfoDialogCriteriaDialogIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _criteria_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./criteria-dialog.component */
    "./src/app/pages/step-info/dialog/criteria-dialog/criteria-dialog.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CriteriaDialogComponent", function () {
      return _criteria_dialog_component__WEBPACK_IMPORTED_MODULE_1__["CriteriaDialogComponent"];
    });
    /***/

  },

  /***/
  "./src/app/pages/step-info/page/step-info/index.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/step-info/page/step-info/index.ts ***!
    \*********************************************************/

  /*! exports provided: StepInfoComponent */

  /***/
  function srcAppPagesStepInfoPageStepInfoIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _step_info_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./step-info.component */
    "./src/app/pages/step-info/page/step-info/step-info.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "StepInfoComponent", function () {
      return _step_info_component__WEBPACK_IMPORTED_MODULE_1__["StepInfoComponent"];
    });
    /***/

  },

  /***/
  "./src/app/pages/step-info/page/step-info/step-info.component.scss":
  /*!*************************************************************************!*\
    !*** ./src/app/pages/step-info/page/step-info/step-info.component.scss ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesStepInfoPageStepInfoStepInfoComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".step-info {\n  position: fixed;\n  display: flex;\n  flex-direction: row;\n}\n.step-info .information {\n  width: 100%;\n  height: 100%;\n  max-height: 100%;\n  flex-basis: 50%;\n  background: url('background01.jpg') no-repeat left center fixed;\n  background-position: right 100% bottom 50%;\n}\n.step-info .information-container {\n  height: 100%;\n  display: flex;\n  align-items: center;\n  background-color: rgba(192, 192, 192, 0.6);\n}\n.step-info .level {\n  width: 100%;\n  height: 100%;\n  max-height: 100%;\n  flex-basis: 50%;\n  overflow-y: scroll;\n}\n@media (max-width: 575.98px) {\n  .step-info {\n    flex-direction: column;\n  }\n  .step-info .information {\n    flex-basis: unset;\n  }\n  .step-info .level {\n    flex-basis: unset;\n  }\n}\n/* ----------------------------------------------\n * Generated by Animista on 2021-2-16 20:23:47\n * Licensed under FreeBSD License.\n * See http://animista.net/license for more info.\n * w: http://animista.net, t: @cssanimista\n * ---------------------------------------------- */\n/**\n * ----------------------------------------\n * animation slide-top\n * ----------------------------------------\n */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc3RlcC1pbmZvL3BhZ2Uvc3RlcC1pbmZvL0M6XFxVc2Vyc1xcaXJhd2FuLm51cmhhc1xcRG9jdW1lbnRzXFxwcm9ncmFtbWluZ1xcaUdPQUwtUnVicmljXFxSdWJyaWNBc3NlbW50LW1hc3Rlci0yMDIxMDIxMC9zcmNcXGFwcFxccGFnZXNcXHN0ZXAtaW5mb1xccGFnZVxcc3RlcC1pbmZvXFxzdGVwLWluZm8uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3N0ZXAtaW5mby9wYWdlL3N0ZXAtaW5mby9zdGVwLWluZm8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDQ0Q7QURDQztFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsK0RBQUE7RUFFQSwwQ0FBQTtBQ0FGO0FERUU7RUFDQyxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMENBQUE7QUNBSDtBRElDO0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0ZGO0FET0E7RUFDQztJQUNDLHNCQUFBO0VDSkE7RURNQTtJQUNDLGlCQUFBO0VDSkQ7RURPQTtJQUNDLGlCQUFBO0VDTEQ7QUFDRjtBRFNBOzs7OzttREFBQTtBQU1BOzs7O0VBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zdGVwLWluZm8vcGFnZS9zdGVwLWluZm8vc3RlcC1pbmZvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0ZXAtaW5mbyB7XG5cdHBvc2l0aW9uOiBmaXhlZDtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IHJvdztcblxuXHQuaW5mb3JtYXRpb24ge1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdGhlaWdodDogMTAwJTtcblx0XHRtYXgtaGVpZ2h0OiAxMDAlO1xuXHRcdGZsZXgtYmFzaXM6IDUwJTtcblx0XHRiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZDAxLmpwZycpXG5cdFx0XHRuby1yZXBlYXQgbGVmdCBjZW50ZXIgZml4ZWQ7XG5cdFx0YmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgMTAwJSBib3R0b20gNTAlO1xuXG5cdFx0Ji1jb250YWluZXIge1xuXHRcdFx0aGVpZ2h0OiAxMDAlO1xuXHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE5MiwgMTkyLCAxOTIsIDAuNik7XG5cdFx0fVxuXHR9XG5cblx0LmxldmVsIHtcblx0XHR3aWR0aDogMTAwJTtcblx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0bWF4LWhlaWdodDogMTAwJTtcblx0XHRmbGV4LWJhc2lzOiA1MCU7XG5cdFx0b3ZlcmZsb3cteTogc2Nyb2xsO1xuXHR9XG59XG5cbi8vIEV4dHJhIHNtYWxsIGRldmljZXMgKHBvcnRyYWl0IHBob25lcywgbGVzcyB0aGFuIDU3NnB4KVxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NS45OHB4KSB7XG5cdC5zdGVwLWluZm8ge1xuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cblx0XHQuaW5mb3JtYXRpb24ge1xuXHRcdFx0ZmxleC1iYXNpczogdW5zZXQ7XG5cdFx0fVxuXG5cdFx0LmxldmVsIHtcblx0XHRcdGZsZXgtYmFzaXM6IHVuc2V0O1xuXHRcdH1cblx0fVxufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBHZW5lcmF0ZWQgYnkgQW5pbWlzdGEgb24gMjAyMS0yLTE2IDIwOjIzOjQ3XG4gKiBMaWNlbnNlZCB1bmRlciBGcmVlQlNEIExpY2Vuc2UuXG4gKiBTZWUgaHR0cDovL2FuaW1pc3RhLm5ldC9saWNlbnNlIGZvciBtb3JlIGluZm8uXG4gKiB3OiBodHRwOi8vYW5pbWlzdGEubmV0LCB0OiBAY3NzYW5pbWlzdGFcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogYW5pbWF0aW9uIHNsaWRlLXRvcFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG4iLCIuc3RlcC1pbmZvIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuLnN0ZXAtaW5mbyAuaW5mb3JtYXRpb24ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xuICBmbGV4LWJhc2lzOiA1MCU7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZDAxLmpwZ1wiKSBuby1yZXBlYXQgbGVmdCBjZW50ZXIgZml4ZWQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IDEwMCUgYm90dG9tIDUwJTtcbn1cbi5zdGVwLWluZm8gLmluZm9ybWF0aW9uLWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxOTIsIDE5MiwgMTkyLCAwLjYpO1xufVxuLnN0ZXAtaW5mbyAubGV2ZWwge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xuICBmbGV4LWJhc2lzOiA1MCU7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NS45OHB4KSB7XG4gIC5zdGVwLWluZm8ge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgLnN0ZXAtaW5mbyAuaW5mb3JtYXRpb24ge1xuICAgIGZsZXgtYmFzaXM6IHVuc2V0O1xuICB9XG4gIC5zdGVwLWluZm8gLmxldmVsIHtcbiAgICBmbGV4LWJhc2lzOiB1bnNldDtcbiAgfVxufVxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogR2VuZXJhdGVkIGJ5IEFuaW1pc3RhIG9uIDIwMjEtMi0xNiAyMDoyMzo0N1xuICogTGljZW5zZWQgdW5kZXIgRnJlZUJTRCBMaWNlbnNlLlxuICogU2VlIGh0dHA6Ly9hbmltaXN0YS5uZXQvbGljZW5zZSBmb3IgbW9yZSBpbmZvLlxuICogdzogaHR0cDovL2FuaW1pc3RhLm5ldCwgdDogQGNzc2FuaW1pc3RhXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGFuaW1hdGlvbiBzbGlkZS10b3BcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqLyJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/step-info/page/step-info/step-info.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/pages/step-info/page/step-info/step-info.component.ts ***!
    \***********************************************************************/

  /*! exports provided: StepInfoComponent */

  /***/
  function srcAppPagesStepInfoPageStepInfoStepInfoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StepInfoComponent", function () {
      return StepInfoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _dialog_criteria_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../dialog/criteria-dialog */
    "./src/app/pages/step-info/dialog/criteria-dialog/index.ts");
    /* harmony import */


    var _shared_const__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../shared/const */
    "./src/app/pages/step-info/shared/const/index.ts");

    var StepInfoComponent = /*#__PURE__*/function () {
      function StepInfoComponent(router, dialog) {
        _classCallCheck(this, StepInfoComponent);

        this.router = router;
        this.dialog = dialog;
      }

      _createClass(StepInfoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.subscribers = [];
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscribers.forEach(function (each) {
            return each.unsubscribe();
          });
        }
      }, {
        key: "openCriteriaDialog",
        value: function openCriteriaDialog(criteria) {
          this.criteriaText(criteria);
          var subs = this.dialog.open(_dialog_criteria_dialog__WEBPACK_IMPORTED_MODULE_4__["CriteriaDialogComponent"], {
            width: '500px',
            data: {
              content: this.content
            }
          }).afterClosed().subscribe();
          this.subscribers.push(subs);
        }
      }, {
        key: "criteriaText",
        value: function criteriaText(criteria) {
          switch (criteria) {
            case 'none':
              this.content = _shared_const__WEBPACK_IMPORTED_MODULE_5__["CriteriaNoneConst"];
              break;

            case 'basic':
              this.content = _shared_const__WEBPACK_IMPORTED_MODULE_5__["CriteriaBasicConst"];
              break;

            case 'advanced':
              this.content = _shared_const__WEBPACK_IMPORTED_MODULE_5__["CriteriaAdvancedConst"];
              break;

            case 'expert':
              this.content = _shared_const__WEBPACK_IMPORTED_MODULE_5__["CriteriaExpertConst"];
              break;

            default:
              break;
          }
        }
      }, {
        key: "navigateToQuiz",
        value: function navigateToQuiz() {
          this.router.navigate(['/assessment']);
        }
      }]);

      return StepInfoComponent;
    }();

    StepInfoComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
      }];
    };

    StepInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-step-info',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./step-info.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/step-info/page/step-info/step-info.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./step-info.component.scss */
      "./src/app/pages/step-info/page/step-info/step-info.component.scss"))["default"]]
    })], StepInfoComponent);
    /***/
  },

  /***/
  "./src/app/pages/step-info/shared/const/index.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/step-info/shared/const/index.ts ***!
    \*******************************************************/

  /*! exports provided: CriteriaNoneConst, CriteriaBasicConst, CriteriaAdvancedConst, CriteriaExpertConst */

  /***/
  function srcAppPagesStepInfoSharedConstIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _step_info_criteria_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./step-info-criteria.const */
    "./src/app/pages/step-info/shared/const/step-info-criteria.const.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CriteriaNoneConst", function () {
      return _step_info_criteria_const__WEBPACK_IMPORTED_MODULE_1__["CriteriaNoneConst"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CriteriaBasicConst", function () {
      return _step_info_criteria_const__WEBPACK_IMPORTED_MODULE_1__["CriteriaBasicConst"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CriteriaAdvancedConst", function () {
      return _step_info_criteria_const__WEBPACK_IMPORTED_MODULE_1__["CriteriaAdvancedConst"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CriteriaExpertConst", function () {
      return _step_info_criteria_const__WEBPACK_IMPORTED_MODULE_1__["CriteriaExpertConst"];
    });
    /***/

  },

  /***/
  "./src/app/pages/step-info/shared/const/step-info-criteria.const.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/pages/step-info/shared/const/step-info-criteria.const.ts ***!
    \**************************************************************************/

  /*! exports provided: CriteriaNoneConst, CriteriaBasicConst, CriteriaAdvancedConst, CriteriaExpertConst */

  /***/
  function srcAppPagesStepInfoSharedConstStepInfoCriteriaConstTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CriteriaNoneConst", function () {
      return CriteriaNoneConst;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CriteriaBasicConst", function () {
      return CriteriaBasicConst;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CriteriaAdvancedConst", function () {
      return CriteriaAdvancedConst;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CriteriaExpertConst", function () {
      return CriteriaExpertConst;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var CriteriaNoneConst = "\"limited to no understanding or experience of competence for\ngeneral purposes (not specific to innovation in intergenerational and global contexts). <br />\nNo use of the competence or the value required for start-up innovation in the intergenerational\nand global context.\"";
    var CriteriaBasicConst = "\"Basic understanding or knowledge related to the competence\nrequired for innovation in the intergenerational and global context. <br/>\nUnderstands and is willing to discuss terminology and concepts related to competence.\nHave basic or sufficient knowledge to perform routine tasks for the competence. \"";
    var CriteriaAdvancedConst = "\"Highly detailed knowledge, understanding, an application\nof competence to be successful start-ups in the iGOAL context. <br/>\nRequires minimal guidance or supervision / can work independently. <br/>\nShows continuous success in implementing the competence in the start-up iGOAL context. <br/>\nAbility to assist others in the application of competence. <br/>\nAbility to prioritize issues, problems, challenges and tasks related to the competences and values\"";
    var CriteriaExpertConst = "\"Is able to coach or train others about the competence/values. <br/>\nIn-depth knowledge, understanding and application of the competence required for successful start-ups in the iGOAL context.\nCan apply the competence across multiple projects or functions in the iGOAL context. <br/>\nRecognized by others as an expert in the competence area. <br/>\nCan create new applications or processes. <br/>\nAbility to identify and explain problems related to broader organizational issues.\"\n";
    /***/
  },

  /***/
  "./src/app/pages/step-info/step-info-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/step-info/step-info-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: StepInfoRoutingModule */

  /***/
  function srcAppPagesStepInfoStepInfoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StepInfoRoutingModule", function () {
      return StepInfoRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _page_step_info__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./page/step-info */
    "./src/app/pages/step-info/page/step-info/index.ts");

    var routes = [{
      path: '',
      component: _page_step_info__WEBPACK_IMPORTED_MODULE_3__["StepInfoComponent"]
    }];

    var StepInfoRoutingModule = function StepInfoRoutingModule() {
      _classCallCheck(this, StepInfoRoutingModule);
    };

    StepInfoRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], StepInfoRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/step-info/step-info.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/step-info/step-info.module.ts ***!
    \*****************************************************/

  /*! exports provided: StepInfoModule */

  /***/
  function srcAppPagesStepInfoStepInfoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StepInfoModule", function () {
      return StepInfoModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _dialog_criteria_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./dialog/criteria-dialog */
    "./src/app/pages/step-info/dialog/criteria-dialog/index.ts");
    /* harmony import */


    var _page_step_info__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./page/step-info */
    "./src/app/pages/step-info/page/step-info/index.ts");
    /* harmony import */


    var _step_info_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./step-info-routing.module */
    "./src/app/pages/step-info/step-info-routing.module.ts");

    var StepInfoModule = function StepInfoModule() {
      _classCallCheck(this, StepInfoModule);
    };

    StepInfoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_page_step_info__WEBPACK_IMPORTED_MODULE_5__["StepInfoComponent"], _dialog_criteria_dialog__WEBPACK_IMPORTED_MODULE_4__["CriteriaDialogComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _step_info_routing_module__WEBPACK_IMPORTED_MODULE_6__["StepInfoRoutingModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"]],
      entryComponents: [_dialog_criteria_dialog__WEBPACK_IMPORTED_MODULE_4__["CriteriaDialogComponent"]]
    })], StepInfoModule);
    /***/
  }
}]);
//# sourceMappingURL=pages-step-info-step-info-module-es5.js.map