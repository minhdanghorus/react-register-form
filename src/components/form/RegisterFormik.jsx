import React from "react";
import InputFormik from "../input/InputFormik";

const RegisterFormik = () => {
  return (
    <form className="max-w-[300px] mx-auto my-10">
      <div className="flex flex-col gap-3 mb-5">
        <label htmlFor="username" className=" cursor-pointer">
          Username
        </label>
        <InputFormik></InputFormik>
        <p className=" text-red-500 text-sm">lỗi sml</p>
      </div>
      <button className="w-full p-5 bg-blue-500 text-white rounded-lg mt-5 font-semibold">
        Submit
      </button>
    </form>
  );
};

export default RegisterFormik;
