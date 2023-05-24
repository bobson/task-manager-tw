import ReactDOM from "react-dom";

const Modal = ({ children, className, onClose }) => {
  return ReactDOM.createPortal(
    <>
      <div
        // onClick={onClose}
        className={`absolute pt-4 justify-center h-full flex inset-0 bg-[rgba(0,0,0,0.6)]  ${className}`}
      >
        <div
          tabIndex="1"
          className="w-[480px] bg-white dark:bg-dark-gray rounded-md p-7 m-7"
        >
          {children}
        </div>
      </div>
    </>,
    document.querySelector(".modal-container")
  );
};

export default Modal;
