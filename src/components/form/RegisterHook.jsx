import React from "react";
// import InputHook from "../input/InputHook";
import { useForm } from "react-hook-form";
import InputHook from "../input/InputHook";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import RadioHook from "../radio/RadioHook";
import CheckboxHook from "../checkbox/CheckboxHook";
import DropdownHook from "../dropdown/DropdownHook";

const dropdownData = [
  {
    id: 1,
    name: "teacher",
    text: "Teacher",
  },
  {
    id: 2,
    name: "student",
    text: "Student",
  },
  {
    id: 3,
    name: "doctor",
    text: "Doctor",
  },
];

const schema = yup
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

const RegisterHook = () => {
  const {
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    control,
    setValue,
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  console.log(errors);

  const onSubmitHandler = (values) => {
    if (!isValid) return;
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("values: ", values);
        resolve();
        reset({
          username: "",
          email: "",
          password: "",
          gender: "",
          job: "",
          term: false,
        });
      }, 3000);
    });
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmitHandler)}
      className=" max-w-[300px] mx-auto my-10"
    >
      <div className="flex flex-col gap-3 mb-5">
        <label htmlFor="username" className=" cursor-pointer">
          Username
        </label>
        <InputHook
          name="username"
          placeholder="Enter your username"
          id="username"
          control={control}
          type="text"
        ></InputHook>
        {errors.username && (
          <p className=" text-red-500 text-sm">{errors.username.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-3 mb-5">
        <label htmlFor="email" className=" cursor-pointer">
          Email
        </label>
        <InputHook
          name="email"
          placeholder="Enter your email"
          id="email"
          control={control}
          type="email"
        ></InputHook>
        {errors.email && (
          <p className=" text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-3 mb-5">
        <label htmlFor="password" className=" cursor-pointer">
          Password
        </label>
        <InputHook
          name="password"
          placeholder="Enter your password"
          id="password"
          control={control}
          type="password"
        ></InputHook>
        {errors.password && (
          <p className=" text-red-500 text-sm">{errors.password.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-3 mb-5">
        <label className=" cursor-pointer">Gender</label>
        <div className=" flex gap-5 items-center">
          <div className="flex items-center gap-x-3">
            <RadioHook name="gender" control={control} value="male"></RadioHook>
            <span>Nam</span>
          </div>
          <div className="flex items-center gap-x-3">
            <RadioHook
              name="gender"
              control={control}
              value="female"
            ></RadioHook>
            <span>Nữ</span>
          </div>
        </div>
        {errors.gender && (
          <p className=" text-red-500 text-sm">{errors.gender.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-3 mb-5">
        <label>Are you</label>
        <DropdownHook
          control={control}
          setValue={setValue}
          name="job"
          data={dropdownData}
          //   dropdownLabel="Select your job"
        ></DropdownHook>
        {<p className=" text-red-500 text-sm">{errors?.job?.message}</p>}
      </div>
      <div className="flex flex-col gap-3 mb-5">
        <CheckboxHook
          control={control}
          text="I accept the terms and conditions"
          name="term"
        ></CheckboxHook>
        {<p className=" text-red-500 text-sm">{errors?.term?.message}</p>}
      </div>
      <button
        className={`w-full p-5 bg-blue-500 text-white rounded-lg mt-5 font-semibold ${
          isSubmitting ? "opacity-5-" : ""
        }`}
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <div className="w-5 h-5 rounded-full border-2 border-t-2 border-t-transparent animate-spin mx-auto"></div>
        ) : (
          "Submit"
        )}
      </button>
    </form>
  );
};

export default RegisterHook;
