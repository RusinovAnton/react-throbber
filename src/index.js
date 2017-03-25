import React, { PropTypes } from 'react'


const ReactThrobber = ({ color = '#1ba3dc', inline, padding = 0, size = 15, spinner, path, style }) => {
  const pathStyle = { stroke: color, ...path };
  const spinnerStyle = { height: size, width: size, ...spinner };
  const wrapperStyle = { padding, ...style };

  return (
    <span
      className={`ReactThrobber ${inline ? 'ReactThrobber--inline' : 'ReactThrobber--block'}`}
      style={wrapperStyle}
    >
      <svg className="ReactThrobber__spinner"
           viewBox="0 0 66 66"
           xmlns="http://www.w3.org/2000/svg"
           style={spinnerStyle}>
         <circle
           className="ReactThrobber__path"
           fill="none"
           strokeWidth="6"
           strokeLinecap="round"
           cx="33"
           cy="33"
           r="30"
           style={pathStyle}
         />
      </svg>
    </span>
  )
};

ReactThrobber.propTypes = {
  color: PropTypes.string,
  inline: PropTypes.bool,
  padding: PropTypes.string,
  path: PropTypes.object,
  size: PropTypes.string,
  spinner: PropTypes.object,
};

export default ReactThrobber
