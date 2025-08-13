"use client";
import React, { useEffect, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { useAppointment } from "../../context/CreateContaxt";
import Form from "./Form";

interface ModalProps {
  closeOnOutsideClick?: boolean;
  title?: any;
}

const FormModal: React.FC<ModalProps> = ({
  closeOnOutsideClick = true,
  title = "Enquire Now",
}) => {
  const [show, setShow] = useState(false);
  const { setAppointmentForm, appointmentForm }: any = useAppointment();

  useEffect(() => {
    if (appointmentForm) {
      setShow(true);
      document.body.style.overflow = "hidden";
    } else {
      const timer = setTimeout(() => {
        setShow(false);
        document.body.style.overflow = "auto";
      }, 300);
      return () => clearTimeout(timer);
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [appointmentForm]);

  if (!appointmentForm && !show) return null;

  return (
    <div
      className={`fixed inset-0 w-full   z-[999] flex items-center justify-center  bg-black/50 transition-opacity duration-300  ${
        appointmentForm ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={
        closeOnOutsideClick ? () => setAppointmentForm(false) : undefined
      }
    >
      <div
        className={`relative bg-white shadow-lg rounded transform transition-transform duration-300 ${
          appointmentForm
            ? "translate-y-0 opacity-100"
            : "translate-y-4 opacity-0"
        } w-full max-w-xl mx-4 sm:mx-0`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <div className="truncate text-center w-full font-semibold text-lg">
            {title}
          </div>
          {setAppointmentForm && (
            <button
              className="text-red-500 hover:text-red-600 cursor-pointer"
              onClick={() => setAppointmentForm(false)}
            >
              <RxCross1 size={20} />
            </button>
          )}
        </div>
        <div className="p-4 overflow-y-auto max-h-[80vh] md:max-h-[90vh] w-full">
          <Form
            className={"grid grid-cols-1  xl:grid-cols-2 gap-x-8 gap-y-1 "}
            setAppointmentForm={setAppointmentForm}
          />
        </div>
      </div>
    </div>
  );
};

export default FormModal;
