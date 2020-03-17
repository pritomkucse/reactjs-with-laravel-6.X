(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./resources/js/components/NewProject.js":
/*!***********************************************!*\
  !*** ./resources/js/components/NewProject.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MainActivity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MainActivity */ "./resources/js/components/MainActivity.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var NewProject = /*#__PURE__*/function (_MainActivity) {
  _inherits(NewProject, _MainActivity);

  function NewProject(props) {
    var _this;

    _classCallCheck(this, NewProject);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(NewProject).call(this, props));
    _this.state = {
      name: '',
      description: '',
      errors: []
    };
    _this.handleFieldChange = _this.handleFieldChange.bind(_assertThisInitialized(_this));
    _this.handleCreateNewProject = _this.handleCreateNewProject.bind(_assertThisInitialized(_this));
    _this.hasErrorFor = _this.hasErrorFor.bind(_assertThisInitialized(_this));
    _this.renderErrorFor = _this.renderErrorFor.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(NewProject, [{
    key: "handleFieldChange",
    value: function handleFieldChange(event) {
      this.setState(_defineProperty({}, event.target.name, event.target.value));
    }
  }, {
    key: "handleCreateNewProject",
    value: function handleCreateNewProject(event) {
      var _this2 = this;

      event.preventDefault();
      var history = this.props.history;
      var project = {
        name: this.state.name,
        description: this.state.description
      };
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("".concat(this.APP_URL, "/api/projects"), project).then(function (response) {
        // redirect to the homepage
        history.push('/');
      })["catch"](function (error) {
        _this2.setState({
          errors: error.response.data.errors
        });
      });
    }
  }, {
    key: "hasErrorFor",
    value: function hasErrorFor(field) {
      return !!this.state.errors[field];
    }
  }, {
    key: "renderErrorFor",
    value: function renderErrorFor(field) {
      if (this.hasErrorFor(field)) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
          className: "invalid-feedback"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, this.state.errors[field][0]));
      }
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "container py-4"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "row justify-content-center"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "col-md-6"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "card"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "card-header"
      }, "Create New Project"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "card-body"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
        onSubmit: this.handleCreateNewProject
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "form-group"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
        htmlFor: "name"
      }, "Project name"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        id: "name",
        type: "text",
        className: "form-control ".concat(this.hasErrorFor('name') ? 'is-invalid' : ''),
        name: "name",
        autoComplete: 'off',
        value: this.state.name,
        onChange: this.handleFieldChange
      }), this.renderErrorFor('name')), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "form-group"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
        htmlFor: "description"
      }, "Project description"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("textarea", {
        id: "description",
        className: "form-control ".concat(this.hasErrorFor('description') ? 'is-invalid' : ''),
        name: "description",
        rows: "10",
        value: this.state.description,
        onChange: this.handleFieldChange
      }), this.renderErrorFor('description')), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        className: "btn btn-primary"
      }, "Create")))))));
    }
  }]);

  return NewProject;
}(_MainActivity__WEBPACK_IMPORTED_MODULE_2__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (NewProject);

/***/ })

}]);