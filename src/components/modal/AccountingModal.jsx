import React from "react";
import { IconButton } from "..";
import { IoMdClose } from "react-icons/io";

const AccountingModal = ({ onClose, children }) => {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-[2px]
        flex justify-center items-center z-50"
    >
      <div className="w-[95%] md:w-[80%] lg:w-[60%] max-w-2xl">
        <div className="flex flex-col justify-center p-4 bg-p w-full rounded-3xl">
          <span className="place-self-end m-1">
            <IconButton
              value={
                <IoMdClose
                  onClick={() => {
                    onClose();
                  }}
                  size={50}
                />
              }
            />
          </span>
          <div className="px-8 w-full">{children}</div>
        </div>
      </div>
    </div>
  );
};
export default AccountingModal;
