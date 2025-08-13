"use client";
import { useFormik } from "formik";
import moment from "moment";
import { usePathname } from "next/navigation";
import { useState } from "react";
import * as Yup from "yup";
import Button from "./Button";
import ContactModal from "./ContactModal";
import DropDown from "./CustomDropDown";
import TextBox from "./Textbox";

interface SideboxProps {
  className?: any;
  setAppointmentForm?: any;
}

export default function Form({ className, setAppointmentForm }: SideboxProps) {
  const pathname = usePathname();

  const isHomePage = pathname === "/contact-us";

  const [popup, setPopup] = useState<any>(null);
  const chooseOptions = [
    { label: "Courses ", value: "courses" },
    { label: "Others", value: "others" },
  ];
  const courseOptions = [
    {
      label: "PPL (Ground Training + Flight Training) ",
      value: "PPL (Ground Training + Flight Training)",
    },
    { label: "CPL Ground Training", value: "CPL Ground Training" },
    { label: "CPL Flight Training", value: "CPL Flight Training" },
    { label: "Flight Simulator", value: "Flight Simulator" },
    { label: "Airline preparation", value: "Airline preparation" },
  ];

  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      number: "",
      options: "",
      course: "",
      availability: "",
      message: "",
      state: "",
      city: "",
      is_12th_completed: "",
      error: "",
    },
    validationSchema: Yup.object({
      first_name: Yup.string().required("First name is required"),
      last_name: Yup.string().required("Last name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      number: Yup.string()
        .required("Contact number is required")
        .matches(/^\d+$/, "Only numbers are allowed")
        .length(10, "Number must be exactly 10 digits"),
      options: Yup.string().required("Option is required"),
      course: Yup.string().when("options", {
        is: (val: string) => val === "courses",
        then: (schema) => schema.required("Course is required"),
        otherwise: (schema) => schema.notRequired(),
      }),
      message: Yup.string().when("options", {
        is: (val: string) => val === "others",
        then: (schema) => schema.required("Message is required"),
        otherwise: (schema) => schema.notRequired(),
      }),
      availability: Yup.string().required("Availability is required"),
      state: Yup.string().required("State is required"),
      city: Yup.string().required("City is required"),
      is_12th_completed: Yup.string().required("Please select an option"),
    }),

    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },

          body: JSON.stringify({
            ...values,
            availability: moment(values?.availability).format(
              "MMMM Do YYYY, h:mm A"
            ),
          }),
        });

        if (response.ok) {
          const result = await response.json();

          const create_lead = await fetch("/api/create-lead", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              name: `${values?.first_name + " " + values?.last_name}`,
              contact_name: `${values?.first_name + " " + values?.last_name}`,
              email_from: values?.email,
              phone: values?.number,
              state: values.state,
              city: values.city,
              availability: values?.availability,
              course: values?.course,
              message: values?.message,
              is_12th_completed: values?.is_12th_completed,
              options: values?.options,
            }),
          });
          if (create_lead.status !== 200) throw create_lead;
          setPopup({
            type: "success",
            message: "Submission Successful",
            description: result.message,
          });
          setTimeout(() => {
            setAppointmentForm(false);
          }, 300);
          resetForm();
        } else {
          throw response;
        }
      } catch (error: any) {
        setPopup({
          type: "error",
          message: "Submission Failed",
          description: error.statusText,
        });
      }
    },
  });
  const optionsValue = formik.values.options;
  const currentDateTime = new Date();
  const formattedDateTime = currentDateTime.toISOString().slice(0, 16);
  const formFields = [
    {
      id: "first_name",
      type: "text",
      placeholder: "Your First Name",
      label: "First Name",
    },
    {
      id: "last_name",
      type: "text",
      placeholder: "Your Last Name",
      label: "Last Name",
    },
    {
      id: "email",
      type: "email",
      placeholder: "Email",
      label: "Email",
    },
    {
      id: "number",
      type: "number",
      placeholder: "Phone Number",
      label: "Contact No",
    },
    {
      id: "availability",
      type: "datetime-local",
      min: formattedDateTime,
      label: "Availability Time",
    },
    {
      id: "state",
      type: "text",
      placeholder: "Enter your state",
      label: "State",
    },
    {
      id: "city",
      type: "text",
      placeholder: "Enter your city",
      label: "City",
    },
  ];
  return (
    <div className=" h-fit rounded-xl relative z-50  text-gray-700">
      <form onSubmit={formik.handleSubmit}>
        <div className={className}>
          {formFields.map(({ id, type, placeholder, min, label }) => (
            <div key={id} className="space-y-2">
              <p className="font-medium text-gray-600">{label}</p>
              <TextBox
                disabled={formik.isSubmitting}
                formik={formik}
                id={id}
                type={type}
                min={min}
                placeholder={placeholder}
                input_className={
                  formik.isSubmitting ? "cursor-not-allowed opacity-50" : ""
                }
                className={`w-full p-3 border border-lightBrown outline-none rounded-lg ${
                  formik.isSubmitting ? "cursor-not-allowed opacity-50" : ""
                }
                  `}
              />
            </div>
          ))}

          {/* Options Dropdown */}
          <div className="space-y-2  ">
            <p className="font-medium text-gray-600">Choose Options</p>
            <DropDown
              onSelect={(e: any) => formik.setFieldValue("options", e?.value)}
              options={chooseOptions}
              formik={formik}
              id="options"
              placeholder="Reason"
              inputClassName="w-full p-3 border border-lightBrown outline-none rounded-lg"
            />
          </div>

          {/* Conditional Fields */}
          {optionsValue === "courses" && (
            <div className="space-y-2">
              <DropDown
                onSelect={(e: any) => formik.setFieldValue("course", e?.value)}
                options={courseOptions}
                formik={formik}
                id="course"
                placeholder="Courses"
                inputClassName="w-full p-3 border border-lightBrown outline-none rounded-lg"
              />
            </div>
          )}

          {/* Submit Button */}
        </div>
        {optionsValue === "others" && (
          <div className="space-y-2 mt-5 ">
            <TextBox
              disabled={formik.isSubmitting}
              formik={formik}
              id="message"
              type="textarea"
              placeholder="Your Message"
              className={`w-full p-3 border border-lightBrown outline-none rounded-lg   ${
                formik.isSubmitting ? "cursor-not-allowed opacity-50" : ""
              }
                  `}
            />
          </div>
        )}
        {/* Physics and Maths Radio Group */}
        <div className="space-y-2 py-5">
          <p className="font-medium text-gray-600">
            Have you completed 12th with Physics and Maths?
          </p>
          <div className="flex gap-4">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="is_12th_completed"
                value="yes"
                onChange={formik.handleChange}
                checked={formik.values.is_12th_completed === "yes"}
                disabled={formik.isSubmitting}
              />
              Yes
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="is_12th_completed"
                value="no"
                onChange={formik.handleChange}
                checked={formik.values.is_12th_completed === "no"}
                disabled={formik.isSubmitting}
              />
              No
            </label>
          </div>
          {formik.touched.is_12th_completed &&
            formik.errors.is_12th_completed && (
              <div className="text-red-500 text-sm">
                {formik.errors.is_12th_completed}
              </div>
            )}
        </div>
        <div className=" flex justify-end">
          <Button
            type="button"
            loaderType="white-loader"
            onClick={formik.handleSubmit}
            disabled={formik.isSubmitting}
            loading={formik.isSubmitting}
            className={` cursor-pointer text-white font-medium bg-lightBrown px-10   p-3  rounded-full   ${
              formik.isSubmitting ? "cursor-not-allowed bg-lightBrown/30" : ""
            } `}
            text="Submit"
          />
        </div>
      </form>
      {popup && <ContactModal {...popup} onClose={() => setPopup(null)} />}
    </div>
  );
}
