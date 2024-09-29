import React, { useEffect } from "react";
import useClickOutSide from "../../hooks/useClickOutSide";
import { useField } from "formik";

const DropdownFomik = ({
  labelText,
  setValue,
  name,
  data,
  dropdownLabel = "Select your job",
  ...props
}) => {
  const { show, setShow, nodeRef } = useClickOutSide();
  const [field, meta] = useField(props);
  //   console.log(jobValue);

  const handleClickDropdownItem = (e) => {
    setValue(name, e.target.dataset.value);
    setLabel(e.target.textContent);
    setShow(false);
  };

  const [label, setLabel] = React.useState(dropdownLabel);
  //   useEffect(() => {
  //     if (jobValue === "") setLabel(dropdownLabel);
  //   }, [jobValue]);
  return (
    <div className="flex flex-col gap-3 mb-5">
      <label htmlFor={props.id} className=" cursor-pointer">
        {labelText}
      </label>
      <div className=" relative" ref={nodeRef}>
        <div
          className="p-5 rounded-lg border border-gray-100 bg-white flex items-center justify-between cursor-pointer"
          onClick={() => setShow(!show)}
        >
          <span>{label}</span>
        </div>
        <div
          className={`absolute top-full left-0 w-full rounded-lg bg-white ${
            show ? "" : "opacity-0 invisible"
          }`}
        >
          {data &&
            data.length > 0 &&
            data.map((item, index) => (
              <div
                key={item.id}
                className={`p-5 cursor-pointer hover:bg-gray-100 ${
                  index === 0
                    ? "rounded-t-lg"
                    : index === data.length - 1
                    ? "rounded-b-lg"
                    : ""
                }`}
                onClick={handleClickDropdownItem}
                data-value={item.name}
              >
                {item.text}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default DropdownFomik;
