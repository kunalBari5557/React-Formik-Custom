//using useFormik
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function OldYoutubeForm() {
  const initialValues = {
    name: "kunal",
    email: "",
    channel: "",
  };

  const onSubmit = (values) => {
    console.log("initialData", values);
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email format").required("Required"),
    channel: Yup.string().required("Required"),
  });
  // const validate = (values) => {
  //   let errors = {};
  //   if (!values.name) {
  //     errors.name = "Required";
  //   }
  //   if (!values.email) {
  //     errors.email = "Required";
  //   } else if (/^[A-Z0-9+_.-]+@[A-Z0-9.-]+$/.test(values.email)) {
  //     errors.email = "Invalid email format";
  //   }
  //   if (!values.channel) {
  //     errors.channel = "Required";
  //   }
  //   return errors;
  // };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });
  console.log("Form erors", formik.errors);
  return (
    <div className="App">
      <form onSubmit={formik.handleSubmit}>
        <div className="form-control">
          <lable htmlFor="name">Name</lable>
          <input
            type="text"
            id="name"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="error">{formik.errors.name}</div>
          ) : null}
        </div>
        <div className="form-control">
          <lable htmlFor="email">E-mail</lable>
          <input
            type="email"
            id="email"
            name="email"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="error">{formik.errors.email}</div>
          ) : null}
        </div>
        <div className="form-control">
          <lable htmlFor="Channel">Channel</lable>
          <input
            type="text"
            id="channel"
            name="channel"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.channel}
          />
          {formik.touched.channel && formik.errors.channel ? (
            <div className="error">{formik.errors.channel}</div>
          ) : null}
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}
