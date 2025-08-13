"use client";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

interface TextboxProps {
  id: string;
  placeholder?: string;
  type?: string;
  formik: any;
  label?: any;
  className?: any;
  labelStyle?: any;
  input_className?: any;
  disabled?: any;
  hideError?: boolean;
  min?: any;
  maxLength?: any;
  onChange?: (values: any) => void;
  required?: boolean;
}

const TextBox = ({
  id,
  placeholder,
  type = "text",
  formik,
  label,
  input_className,
  disabled = false,
  hideError = false,
  min,
  maxLength,
  onChange,
  labelStyle = " text-labelText font-poppins font-normal text-sm 2xl:text-base 3xl:font-medium ",
  className = " relative rounded flex items-center justify-between pl-2 py-1 3xl:p-4 w-full border",
  required = false,
}: TextboxProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const formValue = formik?.values[id] || formik?.getFieldProps(id)?.value;
  const error = formik?.errors[id];
  const touched = formik?.touched[id];
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (value: any) => {
    if (onChange) {
      onChange(value); // Call the custom onChange handler if provided
    } else {
      const filteredValue = value.replace(/[^\x00-\x7F]/g, "");
      formik?.setFieldValue(id, filteredValue); // Update Formik's value
    }
  };

  return (
    <div className={`sm:space-y-1  `}>
      {label && (
        <label
          className={`${labelStyle} flex text-nowrap sm:text-lg  `}
          htmlFor={id}
        >
          {label}
          {required && <p className="text-red-500">*</p>}
        </label>
      )}

      <div
        className={`${className}   bg-white ${
          touched && error ? "border " : ""
        }`}
      >
        {type !== "color" &&
          (type !== "textarea" ? (
            <input
              type={
                type === "password"
                  ? !showPassword
                    ? "password"
                    : "text"
                  : type
              }
              value={formValue}
              disabled={disabled}
              min={min}
              maxLength={maxLength}
              onChange={(e: any) => handleChange(e?.target?.value)}
              onBlur={formik?.handleBlur(id)}
              placeholder={placeholder}
              className={` ${input_className} placeholder:text-gray-700 text-gray-800 outline-none w-full 3xl:text-2xl`}
            />
          ) : (
            <textarea
              disabled={disabled}
              className={` ${input_className} text-black outline-none w-full 3xl:text-2xl`}
              rows={4}
              onChange={(e: any) => handleChange(e?.target?.value)}
              onBlur={formik?.handleBlur(id)}
              placeholder={placeholder}
              value={formValue}
            />
          ))}
        {type === "password" && (
          <button type="button" onClick={handleTogglePassword}>
            {showPassword ? (
              <FaEye className="text-black 2xl:text-xl   mr-2" />
            ) : (
              <FaEyeSlash className=" text-black 2xl:text-xl mr-2" />
            )}
          </button>
        )}
        {type == "color" && (
          <div className="flex justify-between w-full ">
            <input
              type="color"
              value={formValue}
              onChange={(e: any) => handleChange(e?.target?.value)}
              className="border w-1/3"
            />
            <p>{formValue}</p>
          </div>
        )}
      </div>
      {touched && error && !hideError && (
        <p className=" text-sm  text-red-500 3xl:text-lg">{error}</p>
      )}
    </div>
  );
};

export default TextBox;
