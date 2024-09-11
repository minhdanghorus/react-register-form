import React from "react";
// import InputHook from "../input/InputHook";
import { useForm } from "react-hook-form";
import InputHook from "../input/InputHook";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import RadioHook from "../radio/RadioHook";

const schema = yup
  .object({
    username: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
  })
  .required();

const RegisterHook = () => {
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitHandler = (values) => {
    console.log(values);
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
        {errors.email && (
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
            <RadioHook name="gender" control={control} value="female"></RadioHook>
            <span>Nữ</span>
          </div>
        </div>
      </div>
      <button className="w-full p-5 bg-blue-500 text-white rounded-lg mt-5 font-semibold">
        Submit
      </button>
    </form>
  );
};

export default RegisterHook;
