"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _inferno = require("inferno");
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
 * Insight search plugin JSX component.
 * @module view/search/insight
 */
var _require = require('inferno'),
  Component = _require.Component;
var _require2 = require('../../util/cache'),
  cacheComponent = _require2.cacheComponent;

/**
 * Algolia search engine JSX component.
 *
 * @example
 * <Insight
 *     translation={{
 *         hint: '******',
 *         untitled: '******',
 *         posts: '******',
 *         pages: '******',
 *         categories: '******',
 *         tags: '******'
 *     }}
 *     contentUrl="/path/to/content.json"
 *     jsUrl="/path/to/insight.js" />
 */
var Insight = /*#__PURE__*/function (_Component) {
  function Insight() {
    _classCallCheck(this, Insight);
    return _callSuper(this, Insight, arguments);
  }
  _inherits(Insight, _Component);
  return _createClass(Insight, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        translation = _this$props.translation,
        contentUrl = _this$props.contentUrl,
        jsUrl = _this$props.jsUrl;
      var js = "document.addEventListener('DOMContentLoaded', function () {\n            loadInsight(".concat(JSON.stringify({
        contentUrl: contentUrl
      }), ", ").concat(JSON.stringify(translation), ");\n        });");
      return (0, _inferno.createFragment)([(0, _inferno.createVNode)(1, "div", "searchbox thiennguyen-custom-searchbox", (0, _inferno.createVNode)(1, "div", "searchbox-container", [(0, _inferno.createVNode)(1, "div", "searchbox-header", [(0, _inferno.createVNode)(1, "div", "searchbox-input-container", (0, _inferno.createVNode)(64, "input", "searchbox-input", null, 1, {
        "type": "text",
        "placeholder": translation.hint
      }), 2), (0, _inferno.createVNode)(1, "div", "searchbox-cmd-k-shortcut thiennguyen-custom-cmdk", (0, _inferno.createVNode)(1, "span", "cmdk-label px-1 mx-1", "\u2318 K", 16), 2, {
        "id": "cmdKshortcut"
      }), (0, _inferno.createVNode)(1, "a", "searchbox-close", "\xD7", 16, {
        "href": "javascript:;"
      })], 4), (0, _inferno.createVNode)(1, "div", "searchbox-body")], 4), 2), (0, _inferno.createVNode)(1, "script", null, null, 1, {
        "src": jsUrl,
        "defer": true
      }), (0, _inferno.createVNode)(1, "script", null, null, 1, {
        "dangerouslySetInnerHTML": {
          __html: js
        }
      })], 4);
    }
  }]);
}(Component);
/**
 * Cacheable Insight search plugin JSX component.
 * <p>
 * This class is supposed to be used in combination with the <code>locals</code> hexo filter
 * ({@link module:hexo/filter/locals}).
 *
 * @see module:util/cache.cacheComponent
 * @example
 * <Insight.Cacheable
 *     helper={{
 *         __: function() {...},
 *         cdn: function() {...},
 *         url_for: function() {...}
 *     }} />
 */
Insight.Cacheable = cacheComponent(Insight, 'search.insight', function (props) {
  var helper = props.helper;
  return {
    translation: {
      hint: helper.__('search.hint'),
      untitled: helper.__('search.untitled'),
      posts: helper._p('common.post', Infinity),
      pages: helper._p('common.page', Infinity),
      categories: helper._p('common.category', Infinity),
      tags: helper._p('common.tag', Infinity)
    },
    contentUrl: helper.url_for('/content.json'),
    jsUrl: helper.url_for('/js/insight.js')
  };
});
module.exports = Insight;