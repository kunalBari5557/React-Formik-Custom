import React from "react";
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  FieldArray,
  FastField,
} from "formik";
import * as Yup from "yup";
import TextError from "./TextError";

export default function YoutubeForm() {
  const initialValues = {
    name: "kunal",
    email: "",
    channel: "",
    comments: "",
    address: "",
    social: {
      facebook: "",
      twitter: "",
    },
    phoneNumbers: ["", ""],
    phNumbers: [""],
  };

  const onSubmit = (values, onSubmitProps) => {
    console.log("formData", values);
    console.log("submit props", onSubmitProps);
    onSubmitProps.setSubmitting(false);
    onSubmitProps.resetForm();
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email format").required("Required"),
    channel: Yup.string().required("Required"),
  });

  const validateCommets = (value) => {
    let error;
    if (!value) {
      error = "Required";
    }
    return error;
  };
  return (
    <Formik
      className="App"
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      validateOnMount
    >
      {(formik) => {
        console.log("formik props", formik);
        return (
          <Form>
            <div className="form-control">
              <lable htmlFor="name">Name</lable>
              <Field type="text" id="name" name="name" />
              <ErrorMessage name="name" component={TextError} />
            </div>

            <div className="form-control">
              <lable htmlFor="email">E-mail</lable>
              <Field type="email" id="email" name="email" />
              <ErrorMessage name="email">
                {(errorMsg) => <div className="error">{errorMsg}</div>}
              </ErrorMessage>
            </div>

            <div className="form-control">
              <lable htmlFor="Channel">Channel</lable>
              <Field
                type="text"
                id="channel"
                name="channel"
                placeholder="Youtube channel name"
              />
              <ErrorMessage name="name" component={TextError} />
            </div>

            <div className="form-control">
              <lable htmlFor="comments">comments</lable>
              <Field
                as="textarea"
                id="comments"
                name="comments"
                placeholder="type about yourself"
                validate={validateCommets}
              />
              <ErrorMessage name="comments" component={TextError} />
            </div>

            <div className="form-control">
              <lable htmlFor="comments">Address</lable>
              <FastField name="address">
                {(props) => {
                  // console.log("renderrrr");
                  const { field, form, meta } = props;
                  // console.log("Render props", props);
                  return (
                    <div>
                      <input type="text" id="address" {...field} />
                      {meta.touched && meta.error ? (
                        <div>{meta.error}</div>
                      ) : null}
                    </div>
                  );
                }}
              </FastField>
              <ErrorMessage name="name" component={TextError} />
            </div>

            <div className="form-control">
              <lable htmlFor="facebook">Facebook Profile</lable>
              <Field type="text" id="facebook" name="social.facebook"></Field>
            </div>

            <div className="form-control">
              <lable htmlFor="twitter">Twitter Profile</lable>
              <Field type="text" id="twitter" name="social.twitter"></Field>
            </div>

            <div className="form-control">
              <lable htmlFor="twitter">Primary Phone Number</lable>
              <Field type="text" id="primaryPh" name="phoneNumbers[0]"></Field>
            </div>

            <div className="form-control">
              <lable htmlFor="twitter">Secondary Phone Number</lable>
              <Field
                type="text"
                id="secondaryPh"
                name="phoneNumbers[1]"
              ></Field>
            </div>

            <div className="form-control">
              <lable>List of phone numbers</lable>
              <FieldArray name="phNumbers">
                {(fieldArrayProps) => {
                  console.log("fieldArrayProps", fieldArrayProps);
                  const { push, remove, form } = fieldArrayProps;
                  const { values } = form;
                  const { phNumbers } = values;
                  return (
                    <div>
                      {phNumbers.map((phNumber, index) => (
                        <div key={index}>
                          <Field name={`phNumbers[${index}]`} />
                          {index > 0 && (
                            <button type="button" onClick={() => remove(index)}>
                              {""}-{""}
                            </button>
                          )}
                          <button type="button" onClick={() => push("")}>
                            {""}+{""}
                          </button>
                        </div>
                      ))}
                    </div>
                  );
                }}
              </FieldArray>
            </div>
            <button
              type="button"
              onClick={() => formik.validateField("comments")}
            >
              Visited Comments
            </button>
            <button type="button" onClick={() => formik.validateForm()}>
              validate all
            </button>
            <button
              type="button"
              onClick={() => formik.setFieldTouched("comments")}
            >
              Visit Comments
            </button>
            <button
              type="button"
              onClick={() =>
                formik.setTouched({
                  name: true,
                  email: true,
                  channel: true,
                  comments: true,
                })
              }
            >
              Visit fields
            </button>
            <button type="reset">Reset</button>
            <button disabled={!formik.isValid || formik.isSubmitting}>
              Submit
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}
