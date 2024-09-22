import React from "react";
import { useController } from "react-hook-form";

const RadioHook = ({ control, ...props }) => {
  const { field } = useController({
    name: props.name,
    control,
    defaultValue: props.value,
  });
  console.log("radio field", field);
  
  return (
    <label className="cursor-pointer custom-radio">
      <input type="radio" {...field} {...props} className=" hidden" />
      <div className="w-full h-full bg-white rounded-full"></div>
    </label>
  );
};

export default RadioHook;
