import React from "react";
import InputFormik from "../input/InputFormik";
import { Formik } from "formik";
import * as yup from "yup";
import RadioFomik from "../radio/RadioFomik";

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
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 500);
      }}
    >
      {(formik) => {
        const watchGender = formik.values.gender;
        {/* console.log("watchGender: ", watchGender); */}
        console.log("value: ", formik.values);
        return (
          <form
            onSubmit={formik.handleSubmit}
            className="max-w-[300px] mx-auto my-10"
          >
            <InputFormik
              name="username"
              type="text"
              label="Username"
              placeholder="Enter your username"
            ></InputFormik>
            <InputFormik
              name="email"
              type="email"
              label="Email"
              placeholder="Enter your email"
            ></InputFormik>
            <InputFormik
              name="password"
              type="password"
              label="Password"
              placeholder="Enter your password"
            ></InputFormik>
            <div className="flex flex-col gap-3 mb-5">
              <label className=" cursor-pointer">Gender</label>
              <div className=" flex gap-5 items-center">
                <div className="flex items-center gap-x-3">
                  <RadioFomik name="gender" value="male" checked={watchGender === 'male'}></RadioFomik>
                  <span>Nam</span>
                </div>
                <div className="flex items-center gap-x-3">
                  <RadioFomik name="gender" value="female" checked={watchGender === 'female'}></RadioFomik>
                  <span>Nữ</span>
                </div>
              </div>
            </div>
            <button className="w-full p-5 bg-blue-500 text-white rounded-lg mt-5 font-semibold">
              {formik.isSubmitting ? (
                <div className="w-5 h-5 rounded-full border-2 border-t-2 border-t-transparent animate-spin mx-auto"></div>
              ) : (
                "Submit"
              )}
            </button>
          </form>
        );
      }}
    </Formik>
  );
};

export default RegisterFormik;
