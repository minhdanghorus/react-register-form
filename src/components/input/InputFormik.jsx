import { useField } from "formik";
import React from "react";

const InputFormik = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <input
      className="p-4 transition-all bg-white border border-gray-100 rounded-lg outline-none focus:border-blue-500"
      {...field}
      {...props}
    ></input>
  );
};

export default InputFormik;
