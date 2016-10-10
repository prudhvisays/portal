import React from "react";
import classnames from "classnames";

const TextFieldGroup = ({ field, value, label, type, onChange}) => {
  return (
    <div className="form">
      <input onChange={onChange}
             value={value}
             type={type}
             name={field}
             placeholder={label}
             className="txtInput">
             </input>
    </div>
  );
}

TextFieldGroup.propTypes = {
  field: React.PropTypes.string.isRequired,
  value: React.PropTypes.string.isRequired,
  type : React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired
}

TextFieldGroup.defaultProps = {
  type: 'text'
}

export default TextFieldGroup;
