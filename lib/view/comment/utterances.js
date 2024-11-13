"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _inferno = require("inferno");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
/**
 * Utterances comment JSX component.
 * @module view/comment/utterances
 */
var _require = require('inferno'),
  Component = _require.Component;
var _require2 = require('../../util/cache'),
  cacheComponent = _require2.cacheComponent;

/**
 * Utterances comment JSX component.
 *
 * @see https://utteranc.es/
 * @example
 * <Utterances
 *     repo="******"
 *     issueTerm="******"
 *     issueNumber={123}
 *     label="******"
 *     theme="******" />
 */
var Utterances = /*#__PURE__*/function (_Component) {
  function Utterances() {
    _classCallCheck(this, Utterances);
    return _callSuper(this, Utterances, arguments);
  }
  _inherits(Utterances, _Component);
  return _createClass(Utterances, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        repo = _this$props.repo,
        issueTerm = _this$props.issueTerm,
        issueNumber = _this$props.issueNumber,
        label = _this$props.label,
        theme = _this$props.theme;
      if (!repo || !issueTerm && !issueNumber) {
        return (0, _inferno.createVNode)(1, "div", "notification is-danger", [(0, _inferno.createTextVNode)("You forgot to set the "), (0, _inferno.createVNode)(1, "code", null, "repo", 16), (0, _inferno.createTextVNode)(", "), (0, _inferno.createVNode)(1, "code", null, "issue_term", 16), (0, _inferno.createTextVNode)(", or"), (0, _inferno.createTextVNode)(' '), (0, _inferno.createVNode)(1, "code", null, "issue_number", 16), (0, _inferno.createTextVNode)(" for Utterances. Please set it in "), (0, _inferno.createVNode)(1, "code", null, "_config.yml", 16), (0, _inferno.createTextVNode)(".")], 0);
      }
      var config = {
        repo: repo
      };
      if (issueTerm) {
        config['issue-term'] = issueTerm;
      } else {
        config['issue-number'] = issueNumber;
      }
      if (label) {
        config.label = label;
      }
      if (theme) {
        config.theme = theme;
      }
      return (0, _inferno.normalizeProps)((0, _inferno.createVNode)(1, "script", null, null, 1, _objectSpread(_objectSpread({
        "src": "https://utteranc.es/client.js"
      }, config), {}, {
        "crossorigin": "anonymous",
        "async": true
      })));
    }
  }]);
}(Component);
/**
 * Cacheable Utterances comment JSX component.
 * <p>
 * This class is supposed to be used in combination with the <code>locals</code> hexo filter
 * ({@link module:hexo/filter/locals}).
 *
 * @see module:util/cache.cacheComponent
 * @example
 * <Utterances.Cacheable
 *     comment={{
 *         repo: "******",
 *         issue_term: "******"
 *         issue_number: {123}
 *         label: "******"
 *         theme: "******"
 *     }} />
 */
Utterances.Cacheable = cacheComponent(Utterances, 'comment.utterances', function (props) {
  var _props$comment = props.comment,
    repo = _props$comment.repo,
    issue_term = _props$comment.issue_term,
    issue_number = _props$comment.issue_number,
    label = _props$comment.label,
    theme = _props$comment.theme;
  return {
    repo: repo,
    issueTerm: issue_term,
    issueNumber: issue_number,
    label: label,
    theme: theme
  };
});
module.exports = Utterances;