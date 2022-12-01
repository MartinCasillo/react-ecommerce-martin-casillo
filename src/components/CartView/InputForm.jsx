import React from "react";

function InputForm(props) {
  return (
    <>
      <input
        placeholder={props.title}
        className="row my-5 "
        required={true}
        value={props.value}
        name={props.name}
        type="text"
        onChange={props.onInputChange}
      />
    </>
  );
}

export default InputForm;