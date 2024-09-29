import { useField } from "formik";
import React from "react";

const RadioFomik = (props) => {
  const [field, meta] = useField(props);
  return (
    <label className="cursor-pointer custom-radio">
      <input type="radio" {...field} {...props} className=" hidden" />
      <div className="w-full h-full bg-white rounded-full"></div>
    </label>
  );
};

export default RadioFomik;
