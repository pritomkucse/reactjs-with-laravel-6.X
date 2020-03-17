(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./resources/js/components/SingleProject.js":
/*!**************************************************!*\
  !*** ./resources/js/components/SingleProject.js ***!
  \**************************************************/
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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var SingleProject = /*#__PURE__*/function (_MainActivity) {
  _inherits(SingleProject, _MainActivity);

  function SingleProject(props) {
    var _this;

    _classCallCheck(this, SingleProject);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SingleProject).call(this, props));
    _this.state = {
      project: {},
      tasks: [],
      title: '',
      errors: [],
      complete_task_errors: {},
      loading: true
    };
    _this.handleFieldChange = _this.handleFieldChange.bind(_assertThisInitialized(_this));
    _this.handleAddNewTask = _this.handleAddNewTask.bind(_assertThisInitialized(_this));
    _this.hasErrorFor = _this.hasErrorFor.bind(_assertThisInitialized(_this));
    _this.renderErrorFor = _this.renderErrorFor.bind(_assertThisInitialized(_this));
    _this.handleMarkProjectAsCompleted = _this.handleMarkProjectAsCompleted.bind(_assertThisInitialized(_this));
    _this.renderErrorForTaskComplete = _this.renderErrorForTaskComplete.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(SingleProject, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var projectId = this.props.match.params.id;
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("".concat(this.APP_URL, "/api/projects/").concat(projectId)).then(function (response) {
        _this2.setState({
          project: response.data,
          tasks: response.data.tasks,
          loading: false
        });
      });
    }
  }, {
    key: "handleFieldChange",
    value: function handleFieldChange(event) {
      this.setState({
        title: event.target.value
      });
    }
  }, {
    key: "handleAddNewTask",
    value: function handleAddNewTask(event) {
      var _this3 = this;

      event.preventDefault();
      var task = {
        title: this.state.title,
        project_id: this.state.project.id
      };
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("".concat(this.APP_URL, "/api/tasks"), task).then(function (response) {
        // clear form input
        _this3.setState({
          title: ''
        }); // add new task to list of tasks


        _this3.setState(function (prevState) {
          return {
            tasks: prevState.tasks.concat(response.data)
          };
        });
      })["catch"](function (error) {
        _this3.setState({
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
    key: "handleMarkProjectAsCompleted",
    value: function handleMarkProjectAsCompleted() {
      var history = this.props.history;
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("".concat(this.APP_URL, "/api/projects/").concat(this.state.project.id)).then(function (response) {
        return history.push('/');
      });
    }
  }, {
    key: "handleMarkTaskAsCompleted",
    value: function handleMarkTaskAsCompleted(taskId) {
      var _this4 = this;

      this.setState(function (prevState) {
        return {
          complete_task_errors: {}
        };
      });
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("".concat(this.APP_URL, "/api/tasks/").concat(taskId)).then(function (response) {
        _this4.setState(function (prevState) {
          return {
            tasks: prevState.tasks.filter(function (task) {
              return task.id !== taskId;
            })
          };
        });
      })["catch"](function (error) {
        var data = {};
        data[taskId] = error.response.data;

        _this4.setState(function (prevState) {
          return {
            complete_task_errors: data
          };
        });
      });
    }
  }, {
    key: "renderErrorForTaskComplete",
    value: function renderErrorForTaskComplete(taskId) {
      if (!this.state.complete_task_errors[taskId]) {
        return;
      }

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, this.state.complete_task_errors[taskId]));
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      if (this.state.loading) {
        return this.loader();
      }

      var _this$state = this.state,
          project = _this$state.project,
          tasks = _this$state.tasks;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "container py-4"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "row justify-content-center"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "col-md-8"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "card"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "card-header"
      }, project.name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "card-body"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Description:", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), project.description), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        className: "btn btn-primary btn-sm",
        onClick: this.handleMarkProjectAsCompleted
      }, "Mark as completed"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
        onSubmit: this.handleAddNewTask
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "input-group"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        type: "text",
        name: "title",
        autoComplete: "off",
        className: "form-control ".concat(this.hasErrorFor('title') ? 'is-invalid' : ''),
        placeholder: "Task title",
        value: this.state.title,
        onChange: this.handleFieldChange
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "input-group-append"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        className: "btn btn-primary"
      }, "Add")), this.renderErrorFor('title'))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        className: "list-group mt-3"
      }, tasks.map(function (task) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
          className: "list-group-item d-flex justify-content-between align-items-center",
          key: task.id
        }, task.title, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
          className: "btn btn-primary btn-sm",
          onClick: _this5.handleMarkTaskAsCompleted.bind(_this5, task.id)
        }, "Mark as completed"), _this5.renderErrorForTaskComplete(task.id));
      })))))));
    }
  }]);

  return SingleProject;
}(_MainActivity__WEBPACK_IMPORTED_MODULE_2__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (SingleProject);

/***/ })

}]);