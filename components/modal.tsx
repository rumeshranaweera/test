"use client";
import React, { useState } from "react";

interface ModalProps {
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ onClose }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
    onClose();
  };

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      handleClose();
    }
  };

  return isOpen ? (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      onClick={handleOverlayClick}
    >
      <div className="bg-white w-full max-w-[1024px] max-h-[720px] p-4 rounded-lg shadow-lg">
        <button
          className="absolute text-gray-500 top-2 right-2 hover:text-gray-700"
          onClick={handleClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="flex flex-col md:flex-row">
          <div className="p-4">
            <h2 className="mb-4 text-lg font-semibold">Left Section</h2>
            <p className="mb-4">
              This is the text section in the left side of the modal.
            </p>
            <button className="px-4 py-2 text-white bg-blue-500 rounded">
              Button
            </button>
          </div>
          <div className="flex-shrink-0 p-4">
            <div className="h-full bg-gray-200">Image</div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default Modal;
