import { useState } from "react";

import PropTypes from "prop-types";

TextExpander.prototype = {
  isExpand: PropTypes.bool,
  collapsedNumWords: PropTypes.number,
  expandButtonText: PropTypes.string,
  collapseButtonText: PropTypes.string,
  buttonColor: PropTypes.string,
  className: PropTypes.string,
};

export default function TextExpander({
  children,
  isExpand = false,
  collapsedNumWords = 20,
  expandButtonText = "Show more",
  collapseButtonText = "Show less",
  buttonColor = "#ff6622",
  className = "",
}) {
  const [expander, setExpander] = useState(isExpand);
  function handleExpendText() {
    setExpander((exp) => !exp);
  }
  const buttonStyle = {
    backgroundColor: "white",
    color: buttonColor,
    border: "none",
    fontSize: "inherit",
    cursor: "pointer",
  };
  const expenderText = !expander
    ? children
    : children.split(" ").slice(0, collapsedNumWords).join(" ") + "...";
  return (
    <div className={className}>
      {expenderText}
      <button style={buttonStyle} onClick={handleExpendText}>
        {expander ? expandButtonText : collapseButtonText}
      </button>
    </div>
  );
}
