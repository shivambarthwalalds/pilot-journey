"use client";
import React, { useEffect, useState } from "react";
import { RxCross1 } from "react-icons/rx";

interface ModalProps {
  isOpen: boolean;
  onClose?: () => void;
  closeOnOutsideClick?: boolean;
  children: React.ReactNode;
  title?: any;
  setopen?: any;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  closeOnOutsideClick = true,
  children,
  title,
  setopen,
}) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isOpen) {
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
  }, [isOpen]);

  if (!isOpen && !show) return null;

  return (
    <div
      className={`fixed inset-0   z-[999] flex items-center justify-center  bg-black/50 transition-opacity duration-300  ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={closeOnOutsideClick ? () => setopen(false) : undefined}
    >
      <div
        className={`relative bg-white shadow-lg rounded transform transition-transform duration-300 ${
          isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        } w-full max-w-xl mx-4 sm:mx-0`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <div className="truncate text-center w-full font-semibold text-lg">
            {title}
          </div>
          {onClose && (
            <button
              className="text-red-500  hover:text-red-600 cursor-pointer"
              onClick={onClose}
            >
              <RxCross1 size={20} />
            </button>
          )}
        </div>

        {/* Modal Body with scroll */}
        <div className="p-4 overflow-y-auto max-h-[90vh]">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
