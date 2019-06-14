import React from "react";
import PropTypes from "prop-types";
import Highlight from "react-highlight";

function Code(props) {
  const { language, code, ...divProps } = props;

  return (
    <div {...divProps}>
      <Highlight className={language}>{code}</Highlight>
    </div>
  );
}

Code.propTypes = {
  language: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired
};

export default Code;
