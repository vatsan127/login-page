import React from "react";

function FormInput(props) {
  return (
    <div className="mb-3">
      <input
        type={props.type}
        className={props.class}
        placeholder={props.placeholder}
      />
    </div>
  );
}

export default FormInput;
