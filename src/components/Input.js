import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";

function Input(props) {
  const { lable, name, ...rest } = props;
  return (
    <div className="form-control">
      <lable htmlfor={name}>{lable}</lable>
      <Field id={name} name={name} {...rest} />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}

export default Input;
