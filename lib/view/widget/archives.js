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
 * Archives widget JSX component.
 * @module view/widget/archives
 */
var _require = require('inferno'),
  Component = _require.Component;
var _require2 = require('hexo/lib/plugins/helper/date'),
  toMomentLocale = _require2.toMomentLocale;
var _require3 = require('../../util/cache'),
  cacheComponent = _require3.cacheComponent;

/**
 * Archives widget JSX component.
 *
 * @example
 * <Archives
 *     title="Widget title"
 *     showCount={true}
 *     items={[
 *         {
 *             url: '/path/to/archive/page',
 *             name: 'Archive name',
 *             count: 1
 *         }
 *     ]} />
 */
var Archives = /*#__PURE__*/function (_Component) {
  function Archives() {
    _classCallCheck(this, Archives);
    return _callSuper(this, Archives, arguments);
  }
  _inherits(Archives, _Component);
  return _createClass(Archives, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        items = _this$props.items,
        title = _this$props.title,
        showCount = _this$props.showCount;
      return (0, _inferno.createVNode)(1, "div", "card widget", (0, _inferno.createVNode)(1, "div", "card-content", (0, _inferno.createVNode)(1, "div", "menu", [(0, _inferno.createVNode)(1, "h3", "menu-label", title, 0), (0, _inferno.createVNode)(1, "ul", "menu-list", items.map(function (archive) {
        return (0, _inferno.createVNode)(1, "li", null, (0, _inferno.createVNode)(1, "a", "level is-mobile", [(0, _inferno.createVNode)(1, "span", "level-start", (0, _inferno.createVNode)(1, "span", "level-item", archive.name, 0), 2), showCount ? (0, _inferno.createVNode)(1, "span", "level-end", (0, _inferno.createVNode)(1, "span", "level-item tag", archive.count, 0), 2) : null], 0, {
          "href": archive.url
        }), 2);
      }), 0)], 4), 2), 2, {
        "data-type": "archives"
      });
    }
  }]);
}(Component);
/**
 * Cacheable archives widget JSX component.
 * <p>
 * This class is supposed to be used in combination with the <code>locals</code> hexo filter
 * ({@link module:hexo/filter/locals}).
 *
 * @see module:util/cache.cacheComponent
 * @see https://github.com/hexojs/hexo/blob/4.2.0/lib/plugins/helper/list_archives.js
 * @example
 * <Archives.Cacheable
 *     site={{ posts: {...} }}
 *     config={{
 *         language: 'en_US',
 *         timezone: 'UTC',
 *         archive_dir: '/path/to/archive'
 *     }}
 *     page={{
 *         lang: 'en_US',
 *         language: 'en_US'
 *     }}
 *     helper={{
 *         url_for: function() {...},
 *         _p: function() {...}
 *     }}
 *     group_by="monthly"
 *     order={-1}
 *     showCount={true}
 *     format="MMMM YYYY" />
 */
Archives.Cacheable = cacheComponent(Archives, 'widget.archives', function (props) {
  var site = props.site,
    config = props.config,
    page = props.page,
    helper = props.helper,
    widget = props.widget;
  var _widget$group_by = widget.group_by,
    group_by = _widget$group_by === void 0 ? 'monthly' : _widget$group_by,
    _widget$order = widget.order,
    order = _widget$order === void 0 ? -1 : _widget$order,
    _widget$showCount = widget.showCount,
    showCount = _widget$showCount === void 0 ? true : _widget$showCount,
    _widget$format = widget.format,
    format = _widget$format === void 0 ? null : _widget$format;
  var url_for = helper.url_for,
    _p = helper._p;
  var posts = site.posts.sort('date', order);
  if (!posts.length) {
    return null;
  }
  var language = toMomentLocale(page.lang || page.language || config.language);
  var data = [];
  var length = 0;
  posts.forEach(function (post) {
    // Clone the date object to avoid pollution
    var date = post.date.clone();
    if (config.timezone) {
      date = date.tz(config.timezone);
    }
    if (language) {
      date = date.locale(language);
    }
    var year = date.year();
    var month = date.month() + 1;
    var name = date.format(format || (group_by === 'monthly' ? 'MMMM YYYY' : 'YYYY'));
    var lastData = data[length - 1];
    var path = post.path;
    if (!lastData || lastData.name !== name) {
      length = data.push({
        name: name,
        year: year,
        month: month,
        path: path,
        count: 1
      });
    } else {
      lastData.count++;
    }
  });
  var link = function link(item) {
    var url = "".concat(config.archive_dir, "/").concat(item.year, "/");
    if (group_by === 'monthly') {
      if (item.month < 10) url += '0';
      url += "".concat(item.month, "/");
    }
    return url_for(url);
  };
  return {
    items: data.map(function (item) {
      return {
        name: item.name,
        count: item.count,
        year: item.year,
        month: item.month,
        path: item.path,
        url: link(item)
      };
    }),
    title: _p('common.archive', Infinity),
    showCount: showCount
  };
});
module.exports = Archives;