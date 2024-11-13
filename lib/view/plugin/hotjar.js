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
 * Hotjar user feedback plugin JSX component.
 * @module view/plugin/hotjar
 */
var _require = require('inferno'),
  Component = _require.Component;
var _require2 = require('../../util/cache'),
  cacheComponent = _require2.cacheComponent;

/**
 * Hotjar user feedback plugin JSX component.
 *
 * @see https://help.hotjar.com/hc/en-us/sections/115002608787-Installation-Guides
 * @example
 * <Hotjar siteId="******" />
 */
var Hotjar = /*#__PURE__*/function (_Component) {
  function Hotjar() {
    _classCallCheck(this, Hotjar);
    return _callSuper(this, Hotjar, arguments);
  }
  _inherits(Hotjar, _Component);
  return _createClass(Hotjar, [{
    key: "render",
    value: function render() {
      var siteId = this.props.siteId;
      var js = "(function(h,o,t,j,a,r){\n            h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};\n            h._hjSettings={hjid:".concat(siteId, ",hjsv:6};\n            a=o.getElementsByTagName('head')[0];\n            r=o.createElement('script');r.async=1;\n            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;\n            a.appendChild(r);\n        })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');");
      return (0, _inferno.createFragment)([(0, _inferno.createVNode)(1, "script", null, null, 1, {
        "dangerouslySetInnerHTML": {
          __html: js
        }
      })], 4);
    }
  }]);
}(Component);
/**
 * Cacheable Hotjar user feedback plugin JSX component.
 * <p>
 * This class is supposed to be used in combination with the <code>locals</code> hexo filter
 * ({@link module:hexo/filter/locals}).
 *
 * @see module:util/cache.cacheComponent
 * @example
 * <Hotjar.Cacheable
 *     head={true}
 *     plugin={{ site_id: '*******' }} />
 */
Hotjar.Cacheable = cacheComponent(Hotjar, 'plugin.hotjar', function (props) {
  var head = props.head,
    plugin = props.plugin;
  if (!head || !plugin.site_id) {
    return null;
  }
  return {
    siteId: plugin.site_id
  };
});
module.exports = Hotjar;