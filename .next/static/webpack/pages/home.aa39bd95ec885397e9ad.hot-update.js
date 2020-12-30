webpackHotUpdate_N_E("pages/home",{

/***/ "./component/pages/home/contact-us/index.js":
/*!**************************************************!*\
  !*** ./component/pages/home/contact-us/index.js ***!
  \**************************************************/
/*! exports provided: ContactUs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUs", function() { return ContactUs; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var simple_react_validator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! simple-react-validator */ "./node_modules/simple-react-validator/dist/simple-react-validator.min.js");
/* harmony import */ var simple_react_validator__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(simple_react_validator__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _service_toast__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../service/toast */ "./service/toast.js");







var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

// import './banner.scss'



var ContactUs = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(ContactUs, _React$Component);

  var _super = _createSuper(ContactUs);

  function ContactUs(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ContactUs);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleInputChange", function (event) {
      var target = event.target;
      var value = target.type === 'checkbox' ? target.checked : target.value;
      var name = target.name;

      _this.setState({
        email: _objectSpread(_objectSpread({}, _this.state.email), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({}, name, value))
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "sendEmail", function () {
      var email = _this.state.email;

      if (_this.validator.allValid()) {
        _this.setState({
          isSendLoder: true
        });

        console.log(JSON.stringify(email), email.body);

        _this.validator.hideMessages();

        Email.send({
          Host: "smtp.gmail.com",
          Username: "nsrchicken2020@gmail.com",
          Password: "nsr2020@123",
          To: email.toId,
          From: "nsrchicken2020@gmail.com",
          Subject: "Customer number: " + email.phone,
          Body: email.body
        }).then(function (message) {
          var email = {
            name: '',
            toId: '',
            phone: '',
            body: ''
          };
          Object(_service_toast__WEBPACK_IMPORTED_MODULE_9__["Toast"])({
            type: 'success',
            message: 'mail sent successfully',
            title: 'success'
          });

          _this.setState({
            isSendLoder: false,
            email: email
          });
        })["catch"](function (error) {
          Object(_service_toast__WEBPACK_IMPORTED_MODULE_9__["Toast"])({
            type: 'danger',
            message: 'mail server error',
            title: 'Error'
          });

          _this.setState({
            isSendLoder: false
          });
        });
      } else {
        _this.validator.showMessages();
      }
    });

    _this.state = {
      email: {
        name: '',
        toId: '',
        phone: '',
        body: ''
      },
      isSendLoder: false
    };
    _this.validator = new simple_react_validator__WEBPACK_IMPORTED_MODULE_8___default.a({
      element: function element(message) {
        return __jsx("span", {
          className: "error-message text-danger validNo fs14"
        }, message);
      },
      autoForceUpdate: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this)
    });
    return _this;
  } // componentDidMount() {
  //     this.validator = new SimpleReactValidator({
  //         element: message => (
  //             <span className="error-message text-danger validNo fs14">{message}</span>
  //         ),
  //         autoForceUpdate: this,
  //     });
  // }


  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ContactUs, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          email = _this$state.email,
          isSendLoder = _this$state.isSendLoder;
      return (// <!-- Contact Section-->
        __jsx("section", {
          className: "page-section",
          id: "contact"
        }, __jsx("div", {
          className: "container"
        }, __jsx("h2", {
          className: "page-section-heading text-center text-uppercase text-secondary mb-0"
        }, "CONTACT US"), __jsx("div", {
          className: "divider-custom"
        }, __jsx("div", {
          className: "divider-custom-line"
        }), __jsx("div", {
          className: "divider-custom-icon"
        }, __jsx("i", {
          className: "fas fa-star"
        })), __jsx("div", {
          className: "divider-custom-line"
        })), __jsx("div", {
          className: "row"
        }, __jsx("div", {
          className: "col-lg-8 mx-auto"
        }, __jsx("div", {
          className: "control-group"
        }, __jsx("div", {
          className: "form-group floating-label-form-group controls mb-0 pb-2"
        }, __jsx("label", null, "Name"), __jsx("input", {
          className: "form-control",
          type: "text",
          placeholder: "Name",
          value: email.name,
          name: "name",
          onChange: this.handleInputChange
        })), this.validator.message('Name', email.name, 'required|max:15')), __jsx("div", {
          className: "control-group"
        }, __jsx("div", {
          className: "form-group floating-label-form-group controls mb-0 pb-2"
        }, __jsx("label", null, "Email Address"), __jsx("input", {
          className: "form-control",
          id: "email",
          type: "email",
          value: email.toId,
          name: "toId",
          onChange: this.handleInputChange,
          placeholder: "Email Address",
          required: "required"
        })), this.validator.message('Email', email.toId, 'required|email')), __jsx("div", {
          className: "control-group"
        }, __jsx("div", {
          className: "form-group floating-label-form-group controls mb-0 pb-2"
        }, __jsx("label", null, "Phone Number"), __jsx("input", {
          className: "form-control",
          id: "phone",
          type: "text",
          value: email.phone,
          name: "phone",
          onChange: this.handleInputChange,
          placeholder: "Phone Number"
        })), this.validator.message('Phone', email.phone, 'required')), __jsx("div", {
          className: "control-group"
        }, __jsx("div", {
          className: "form-group floating-label-form-group controls mb-0 pb-2"
        }, __jsx("label", null, "Message"), __jsx("textarea", {
          className: "form-control",
          id: "message",
          rows: "5",
          placeholder: "Message",
          value: email.body,
          onChange: this.handleInputChange,
          name: "body"
        })), this.validator.message('body', email.body, 'required|max:3000')), __jsx("br", null), __jsx("div", {
          id: "success"
        }), __jsx("div", {
          className: "form-group"
        }, __jsx("button", {
          onClick: this.sendEmail,
          className: "btn btn-primary btn-xl",
          id: "sendMessageButton",
          type: "submit"
        }, isSendLoder ? __jsx("span", {
          className: "spinner-border spinner-border-sm",
          role: "status",
          "aria-hidden": "true"
        }) : "", " Send"))))))
      );
    }
  }]);

  return ContactUs;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L3BhZ2VzL2hvbWUvY29udGFjdC11cy9pbmRleC5qcyJdLCJuYW1lcyI6WyJDb250YWN0VXMiLCJwcm9wcyIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJ0eXBlIiwiY2hlY2tlZCIsIm5hbWUiLCJzZXRTdGF0ZSIsImVtYWlsIiwic3RhdGUiLCJ2YWxpZGF0b3IiLCJhbGxWYWxpZCIsImlzU2VuZExvZGVyIiwiY29uc29sZSIsImxvZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJib2R5IiwiaGlkZU1lc3NhZ2VzIiwiRW1haWwiLCJzZW5kIiwiSG9zdCIsIlVzZXJuYW1lIiwiUGFzc3dvcmQiLCJUbyIsInRvSWQiLCJGcm9tIiwiU3ViamVjdCIsInBob25lIiwiQm9keSIsInRoZW4iLCJtZXNzYWdlIiwiVG9hc3QiLCJ0aXRsZSIsImVycm9yIiwic2hvd01lc3NhZ2VzIiwiU2ltcGxlUmVhY3RWYWxpZGF0b3IiLCJlbGVtZW50IiwiYXV0b0ZvcmNlVXBkYXRlIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJzZW5kRW1haWwiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNPLElBQU1BLFNBQWI7QUFBQTs7QUFBQTs7QUFFSSxxQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFOOztBQURlLDROQWtDQyxVQUFDQyxLQUFELEVBQVc7QUFDM0IsVUFBTUMsTUFBTSxHQUFHRCxLQUFLLENBQUNDLE1BQXJCO0FBQ0EsVUFBTUMsS0FBSyxHQUFHRCxNQUFNLENBQUNFLElBQVAsS0FBZ0IsVUFBaEIsR0FBNkJGLE1BQU0sQ0FBQ0csT0FBcEMsR0FBOENILE1BQU0sQ0FBQ0MsS0FBbkU7QUFDQSxVQUFNRyxJQUFJLEdBQUdKLE1BQU0sQ0FBQ0ksSUFBcEI7O0FBQ0EsWUFB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LEVBQUMsUUFBeEQ7QUFBaUUseUJBQVk7QUFBN0UsVUFBSCxHQUFpRyxFQURuRyxVQUE1QixDQXRDSixDQURKLENBVkosQ0FESjtBQUZKO0FBNERIO0FBMUpMOztBQUFBO0FBQUEsRUFBK0I2Qiw0Q0FBSyxDQUFDQyxTQUFyQyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9ob21lLmFhMzliZDk1ZWM4ODUzOTdlOWFkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgJy4vYmFubmVyLnNjc3MnXHJcblxyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBTaW1wbGVSZWFjdFZhbGlkYXRvciBmcm9tICdzaW1wbGUtcmVhY3QtdmFsaWRhdG9yJztcclxuaW1wb3J0IHsgVG9hc3QgfSBmcm9tIFwiLi4vLi4vLi4vLi4vc2VydmljZS90b2FzdFwiO1xyXG5leHBvcnQgY2xhc3MgQ29udGFjdFVzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBlbWFpbDoge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICB0b0lkOiAnJyxcclxuICAgICAgICAgICAgICAgIHBob25lOiAnJyxcclxuICAgICAgICAgICAgICAgIGJvZHk6ICcnXHJcblxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpc1NlbmRMb2RlcjogZmFsc2VcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudmFsaWRhdG9yID0gbmV3IFNpbXBsZVJlYWN0VmFsaWRhdG9yKHtcclxuICAgICAgICAgICAgZWxlbWVudDogbWVzc2FnZSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJlcnJvci1tZXNzYWdlIHRleHQtZGFuZ2VyIHZhbGlkTm8gZnMxNFwiPnttZXNzYWdlfTwvc3Bhbj5cclxuICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgYXV0b0ZvcmNlVXBkYXRlOiB0aGlzLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgLy8gY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAvLyAgICAgdGhpcy52YWxpZGF0b3IgPSBuZXcgU2ltcGxlUmVhY3RWYWxpZGF0b3Ioe1xyXG4gICAgLy8gICAgICAgICBlbGVtZW50OiBtZXNzYWdlID0+IChcclxuICAgIC8vICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImVycm9yLW1lc3NhZ2UgdGV4dC1kYW5nZXIgdmFsaWRObyBmczE0XCI+e21lc3NhZ2V9PC9zcGFuPlxyXG4gICAgLy8gICAgICAgICApLFxyXG4gICAgLy8gICAgICAgICBhdXRvRm9yY2VVcGRhdGU6IHRoaXMsXHJcbiAgICAvLyAgICAgfSk7XHJcblxyXG4gICAgLy8gfVxyXG5cclxuXHJcbiAgICBoYW5kbGVJbnB1dENoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IHRhcmdldC50eXBlID09PSAnY2hlY2tib3gnID8gdGFyZ2V0LmNoZWNrZWQgOiB0YXJnZXQudmFsdWU7XHJcbiAgICAgICAgY29uc3QgbmFtZSA9IHRhcmdldC5uYW1lO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBlbWFpbDoge1xyXG4gICAgICAgICAgICAgICAgLi4udGhpcy5zdGF0ZS5lbWFpbCxcclxuICAgICAgICAgICAgICAgIFtuYW1lXTogdmFsdWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIHNlbmRFbWFpbCA9ICgpID0+IHtcclxuICAgICAgICBsZXQgeyBlbWFpbCB9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMudmFsaWRhdG9yLmFsbFZhbGlkKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzU2VuZExvZGVyOiB0cnVlIH0pXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGVtYWlsKSxlbWFpbC5ib2R5KVxyXG4gICAgICAgICAgICB0aGlzLnZhbGlkYXRvci5oaWRlTWVzc2FnZXMoKTtcclxuICAgICAgICAgICAgRW1haWwuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICBIb3N0OiBcInNtdHAuZ21haWwuY29tXCIsXHJcbiAgICAgICAgICAgICAgICBVc2VybmFtZTogXCJuc3JjaGlja2VuMjAyMEBnbWFpbC5jb21cIixcclxuICAgICAgICAgICAgICAgIFBhc3N3b3JkOiBcIm5zcjIwMjBAMTIzXCIsXHJcbiAgICAgICAgICAgICAgICBUbzogZW1haWwudG9JZCxcclxuICAgICAgICAgICAgICAgIEZyb206IFwibnNyY2hpY2tlbjIwMjBAZ21haWwuY29tXCIsXHJcbiAgICAgICAgICAgICAgICBTdWJqZWN0OiBcIkN1c3RvbWVyIG51bWJlcjogXCIgKyBlbWFpbC5waG9uZSxcclxuICAgICAgICAgICAgICAgIEJvZHk6IGVtYWlsLmJvZHksXHJcbiAgICAgICAgICAgIH0pLnRoZW4oKG1lc3NhZ2UpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBlbWFpbCA9IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICB0b0lkOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBwaG9uZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9keTogJydcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBUb2FzdCh7IHR5cGU6ICdzdWNjZXNzJywgbWVzc2FnZTogJ21haWwgc2VudCBzdWNjZXNzZnVsbHknLCB0aXRsZTogJ3N1Y2Nlc3MnIH0pXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNTZW5kTG9kZXI6IGZhbHNlLCBlbWFpbCB9KVxyXG4gICAgICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgIFRvYXN0KHsgdHlwZTogJ2RhbmdlcicsIG1lc3NhZ2U6ICdtYWlsIHNlcnZlciBlcnJvcicsIHRpdGxlOiAnRXJyb3InIH0pXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNTZW5kTG9kZXI6IGZhbHNlIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy52YWxpZGF0b3Iuc2hvd01lc3NhZ2VzKCk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGxldCB7IGVtYWlsLCBpc1NlbmRMb2RlciB9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgLy8gPCEtLSBDb250YWN0IFNlY3Rpb24tLT5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicGFnZS1zZWN0aW9uXCIgaWQ9XCJjb250YWN0XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8IS0tIENvbnRhY3QgU2VjdGlvbiBIZWFkaW5nLS0+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJwYWdlLXNlY3Rpb24taGVhZGluZyB0ZXh0LWNlbnRlciB0ZXh0LXVwcGVyY2FzZSB0ZXh0LXNlY29uZGFyeSBtYi0wXCI+Q09OVEFDVCBVUzwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDwhLS0gSWNvbiBEaXZpZGVyLS0+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2aWRlci1jdXN0b21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXZpZGVyLWN1c3RvbS1saW5lXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2aWRlci1jdXN0b20taWNvblwiPjxpIGNsYXNzTmFtZT1cImZhcyBmYS1zdGFyXCI+PC9pPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdmlkZXItY3VzdG9tLWxpbmVcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB7LyogPCEtLSBDb250YWN0IFNlY3Rpb24gRm9ybS0tPiAqL31cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy04IG14LWF1dG9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8IS0tIFRvIGNvbmZpZ3VyZSB0aGUgY29udGFjdCBmb3JtIGVtYWlsIGFkZHJlc3MsIGdvIHRvIG1haWwvY29udGFjdF9tZS5waHAgYW5kIHVwZGF0ZSB0aGUgZW1haWwgYWRkcmVzcyBpbiB0aGUgUEhQIGZpbGUgb24gbGluZSAxOS4tLT4gKi99XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250cm9sLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGZsb2F0aW5nLWxhYmVsLWZvcm0tZ3JvdXAgY29udHJvbHMgbWItMCBwYi0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5OYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJOYW1lXCIgdmFsdWU9e2VtYWlsLm5hbWV9IG5hbWU9XCJuYW1lXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXRDaGFuZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMudmFsaWRhdG9yLm1lc3NhZ2UoJ05hbWUnLCBlbWFpbC5uYW1lLCAncmVxdWlyZWR8bWF4OjE1Jyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udHJvbC1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBmbG9hdGluZy1sYWJlbC1mb3JtLWdyb3VwIGNvbnRyb2xzIG1iLTAgcGItMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+RW1haWwgQWRkcmVzczwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBpZD1cImVtYWlsXCIgdHlwZT1cImVtYWlsXCIgdmFsdWU9e2VtYWlsLnRvSWR9IG5hbWU9XCJ0b0lkXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXRDaGFuZ2V9IHBsYWNlaG9sZGVyPVwiRW1haWwgQWRkcmVzc1wiIHJlcXVpcmVkPVwicmVxdWlyZWRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnZhbGlkYXRvci5tZXNzYWdlKCdFbWFpbCcsIGVtYWlsLnRvSWQsICdyZXF1aXJlZHxlbWFpbCcpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRyb2wtZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgZmxvYXRpbmctbGFiZWwtZm9ybS1ncm91cCBjb250cm9scyBtYi0wIHBiLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlBob25lIE51bWJlcjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBpZD1cInBob25lXCIgdHlwZT1cInRleHRcIiB2YWx1ZT17ZW1haWwucGhvbmV9IG5hbWU9XCJwaG9uZVwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0Q2hhbmdlfSBwbGFjZWhvbGRlcj1cIlBob25lIE51bWJlclwiIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnZhbGlkYXRvci5tZXNzYWdlKCdQaG9uZScsIGVtYWlsLnBob25lLCAncmVxdWlyZWQnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250cm9sLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGZsb2F0aW5nLWxhYmVsLWZvcm0tZ3JvdXAgY29udHJvbHMgbWItMCBwYi0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5NZXNzYWdlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIGlkPVwibWVzc2FnZVwiIHJvd3M9XCI1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTWVzc2FnZVwiIHZhbHVlPXtlbWFpbC5ib2R5fSBvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dENoYW5nZX0gbmFtZT1cImJvZHlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC90ZXh0YXJlYT5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnZhbGlkYXRvci5tZXNzYWdlKCdib2R5JywgZW1haWwuYm9keSwgJ3JlcXVpcmVkfG1heDozMDAwJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cInN1Y2Nlc3NcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPjxidXR0b24gb25DbGljaz17dGhpcy5zZW5kRW1haWx9IGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4teGxcIiBpZD1cInNlbmRNZXNzYWdlQnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCI+e2lzU2VuZExvZGVyID8gPHNwYW4gY2xhc3NOYW1lPVwic3Bpbm5lci1ib3JkZXIgc3Bpbm5lci1ib3JkZXItc21cIiByb2xlPVwic3RhdHVzXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9zcGFuPiA6IFwiXCJ9IFNlbmQ8L2J1dHRvbj48L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=