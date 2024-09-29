import { useField } from "formik";
import React from "react";

const InputFormik = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  //   console.log("input field: ", field);

  return (
    <div className="flex flex-col gap-3 mb-5">
      <label htmlFor={props.name} className=" cursor-pointer">
        {label}
      </label>
      <input
        className="p-4 transition-all bg-white border border-gray-100 rounded-lg outline-none focus:border-blue-500"
        {...field}
        {...props}
      />
      {meta.touched && meta.error && (
        <p className=" text-red-500 text-sm">{meta.error}</p>
      )}
    </div>
  );
};

export default InputFormik;
