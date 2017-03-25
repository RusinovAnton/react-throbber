'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ReactThrobber = function ReactThrobber(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === undefined ? '#1ba3dc' : _ref$color,
      inline = _ref.inline,
      _ref$padding = _ref.padding,
      padding = _ref$padding === undefined ? 0 : _ref$padding,
      _ref$size = _ref.size,
      size = _ref$size === undefined ? 15 : _ref$size,
      spinner = _ref.spinner,
      path = _ref.path,
      style = _ref.style;

  var pathStyle = _extends({ stroke: color }, path);
  var spinnerStyle = _extends({ height: size, width: size }, spinner);
  var wrapperStyle = _extends({ padding: padding }, style);

  return _react2.default.createElement(
    'span',
    {
      className: 'ReactThrobber ' + (inline ? 'ReactThrobber--inline' : 'ReactThrobber--block'),
      style: wrapperStyle
    },
    _react2.default.createElement(
      'svg',
      { className: 'ReactThrobber__spinner',
        viewBox: '0 0 66 66',
        xmlns: 'http://www.w3.org/2000/svg',
        style: spinnerStyle },
      _react2.default.createElement('circle', {
        className: 'ReactThrobber__path',
        fill: 'none',
        strokeWidth: '6',
        strokeLinecap: 'round',
        cx: '33',
        cy: '33',
        r: '30',
        style: pathStyle
      })
    )
  );
};

ReactThrobber.propTypes = {
  color: _react.PropTypes.string,
  inline: _react.PropTypes.bool,
  padding: _react.PropTypes.number,
  path: _react.PropTypes.object,
  size: _react.PropTypes.number,
  spinner: _react.PropTypes.object
};

exports.default = ReactThrobber;