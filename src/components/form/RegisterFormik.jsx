import React from "react";
import InputFormik from "../input/InputFormik";
import { Formik } from "formik";
import * as yup from "yup";

const validationSchema = yup
  .object({
    username: yup.string().required("Please enter your username"),
    email: yup
      .string()
      .email("Please enter valid email")
      .required("Please enter your email"),
    password: yup
      .string()
      .min(8, "Your password must be at least 8 characters or greater"),
    // .matches(
    //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    //   {
    //     message:
    //       "Your password must have at least 1 uppercase, 1 lowercase, 1 special character",
    //   }
    // ).required("Please enter your password"),
    gender: yup
      .string()
      .required("Please select your gender")
      .oneOf(["male", "female"], "You can only select male or female"),
    job: yup
      .string()
      .required("Please select your job")
      .oneOf(
        ["teacher", "student", "doctor"],
        "You can only select teacher, student or doctor"
      ),
    term: yup
      .boolean()
      .required("Please accept the terms and conditions")
      .oneOf([true], "You must accept the terms and conditions"),
  })
  .required();

const RegisterFormik = () => {
  return (
    <Formik
      initialValues={{
        username: "",
        email: "",
        password: "",
        gender: "male",
        job: "",
        term: false,
      }}
    //   validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 500);
      }}
    >
      {(formik) => (
        <form
          onSubmit={formik.handleSubmit}
          className="max-w-[300px] mx-auto my-10"
        >
          <div className="flex flex-col gap-3 mb-5">
            <label htmlFor="username" className=" cursor-pointer">
              Username
            </label>
            <InputFormik name="username" type="text" label="Username"></InputFormik>
            {/* <input
              className="p-4 transition-all bg-white border border-gray-100 rounded-lg outline-none focus:border-blue-500"
              {...formik.getFieldProps("username")}
            ></input> */}
            {formik.touched.username && formik.errors.username && (
              <p className=" text-red-500 text-sm">{formik.errors.username}</p>
            )}
          </div>
          <button className="w-full p-5 bg-blue-500 text-white rounded-lg mt-5 font-semibold">
            {formik.isSubmitting ? (
              <div className="w-5 h-5 rounded-full border-2 border-t-2 border-t-transparent animate-spin mx-auto"></div>
            ) : (
              "Submit"
            )}
          </button>
        </form>
      )}
    </Formik>
  );
};

export default RegisterFormik;
