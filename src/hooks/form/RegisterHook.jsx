import React from "react";
// import InputHook from "../input/InputHook";
import { useForm } from "react-hook-form";
import InputHook from "../input/InputHook";

const RegisterHook = () => {
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const onSubmitHandler = (values) => {
    console.log(values);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmitHandler)}
      className=" max-w-[300px] mx-auto my-10"
    >
      <div className="flex flex-col gap-3">
        <label htmlFor="username" className=" cursor-pointer">
          Username
        </label>
        <InputHook name="username" placeholder="Enter your username" id="username" control={control}></InputHook>
        {/* <input
          type="text"
          placeholder="Enter your username"
          id="username"
          className="p-4 transition-all bg-white border border-gray-100 rounded-lg outline-none focus:border-blue-500"
        /> */}
        <p className=" text-red-500 text-sm">Please enter your username</p>
        <button className="w-full p-5 bg-blue-500 text-white rounded-lg mt-5 font-semibold">
            Submit
        </button>
      </div>
    </form>
  );
};

export default RegisterHook;
