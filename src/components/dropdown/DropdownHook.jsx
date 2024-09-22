import React, { useEffect } from "react";
import useClickOutSide from "../../hooks/useClickOutSide";
import { useWatch } from "react-hook-form";

// const data = [
//   {
//     id: 1,
//     name: "teacher",
//     text: "Teacher",
//   },
//   {
//     id: 2,
//     name: "student",
//     text: "Student",
//   },
//   {
//     id: 3,
//     name: "doctor",
//     text: "Doctor",
//   },
// ];

const DropdownHook = ({
  control,
  setValue,
  name,
  data,
  dropdownLabel = "Select your job",
}) => {
  const { show, setShow, nodeRef } = useClickOutSide();

  const jobValue = useWatch({
    control,
    name: "job",
    defaultValue: "",
  });

  //   console.log(jobValue);

  const handleClickDropdownItem = (e) => {
    setValue(name, e.target.dataset.value);
    setLabel(e.target.textContent);
    setShow(false);
  };

  const [label, setLabel] = React.useState(dropdownLabel);
  useEffect(() => {
    if (jobValue === "") setLabel(dropdownLabel);
  }, [jobValue]);
  return (
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
        {/* <div
          className="p-5 cursor-pointer hover:bg-gray-100"
          onClick={handleClickDropdownItem}
          data-value="teacher"
        >
          Teacher
        </div>
        <div
          className="p-5 cursor-pointer hover:bg-gray-100"
          onClick={handleClickDropdownItem}
          data-value="student"
        >
          Student
        </div>
        <div
          className="p-5 cursor-pointer hover:bg-gray-100"
          onClick={handleClickDropdownItem}
          data-value="doctor"
        >
          Doctor
        </div> */}

        {data.map((item, index) => (
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
  );
};

export default DropdownHook;
 