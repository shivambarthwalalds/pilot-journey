"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { FaCross } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

interface PopupMessageProps {
  type: "success" | "error";
  message: string;
  description?: string;
  onClose: () => void;
  autoClose?: boolean;
  duration?: number;
}

export default function ContactModal({
  type,
  message,
  description,
  onClose,
  autoClose = true,
  duration = 5000,
}: PopupMessageProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (autoClose) {
      const timer = setTimeout(() => {
        handleClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [autoClose, duration]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      onClose();
    }, 300); // Wait for animation to complete
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm transition-opacity
       ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}
      `}
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="popup-title"
    >
      <div
        className={`w-80 aspect-square rounded-lg shadow-xl transition-all duration-300 transform bg-white
          ${isVisible ? "scale-100" : "scale-95"}`}
      >
        <div className="relative h-full flex flex-col items-center justify-center p-6 text-center">
          <button
            type="button"
            className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 rounded-full p-1"
            onClick={handleClose}
            aria-label="Close"
          >
            <IoClose className="w-5 h-5" />
          </button>

          <div className="mb-4">
            {type === "success" ? (
              <svg
                className="w-24 h-24 mx-auto"
                viewBox="0 0 120 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="60" cy="60" r="55" fill="#E6F7EF" />
                <circle cx="60" cy="60" r="40" fill="#10B981" />
                <path
                  d="M45 60L55 70L75 50"
                  stroke="white"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                className="w-24 h-24 mx-auto"
                viewBox="0 0 120 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="60" cy="60" r="55" fill="#FEE2E2" />
                <circle cx="60" cy="60" r="40" fill="#EF4444" />
                <path
                  d="M45 45L75 75M45 75L75 45"
                  stroke="white"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </div>

          <h3
            id="popup-title"
            className={`text-xl font-bold mb-2 ${
              type === "success" ? "text-green-800" : "text-red-800"
            }`}
          >
            {message}
          </h3>

          {description && (
            <p className="text-sm text-gray-600">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
}
