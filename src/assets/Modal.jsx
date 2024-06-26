import React from "react";
import { useState } from "react";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(true);

  //   const toggleModal = () => {
  //     setIsOpen(!isOpen);
  //   };

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div>
      {/* <button
        onClick={toggleModal}
        data-modal-target="static-modal"
        data-modal-toggle="static-modal"
        className="block text-white text-lg bg-green-500 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 font-montserrat font-medium"
        type="button"
      >
        Developer Notification
      </button>
      {isOpen && <Modal handleClose={toggleModal} />} */}
      <div
        id="static-modal"
        tabIndex="-1"
        aria-hidden="true"
        className={`overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full ${
          isOpen ? "" : "hidden"
        }`}
      >
        <div class="relative p-4 w-full max-w-xl max-h-full font-montserrat font-medium">
          <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                Notification
              </h3>
              <button
                onClick={handleClose}
                type="button"
                class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center  dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="static-modal"
              >
                <svg
                  class="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span class="sr-only">Close modal</span>
              </button>
            </div>

            <div class="p-4 md:p-5 space-y-4">
              <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                This application is currently in the user testing phase. As
                such, you may encounter some bugs and updates may be required. I
                appreciate your understanding and patience.
              </p>
              <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                If you have any feedback or suggestions, I'd love to hear from
                you. Thank you for supporting Find My Puzzle Piece!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
