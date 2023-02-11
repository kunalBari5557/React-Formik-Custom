import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";

function Textarea(props) {
  const { lable, name, ...rest } = props;
  return (
    <div className="form-control">
      <lable htmlfor={name}>{lable}</lable>
      <Field as="textarea" id={name} name={name} {...rest} />
      <ErrorMessage as="textarea" name={name} component={TextError} />
    </div>
  );
}

export default Textarea;
