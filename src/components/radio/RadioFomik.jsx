import { useField } from "formik";
import React from "react";

const RadioFomik = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="flex items-center gap-x-3">
      <label className="cursor-pointer custom-radio">
        <input type="radio" {...field} {...props} className=" hidden" />
        <div className="w-full h-full bg-white rounded-full"></div>
      </label>
      <span>{label}</span>
    </div>
  );
};

export default RadioFomik;
