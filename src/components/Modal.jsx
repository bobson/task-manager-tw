import { useEffect, useRef } from "react";
import ReactDOM from "react-dom";

const Modal = ({ children, className, onClose }) => {
  const ref = useRef();

  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  const handleClick = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      onClose();
    }
    console.log(e.target);
  };

  return ReactDOM.createPortal(
    <div
      className={`fixed pt-4 justify-center flex inset-0 bg-[rgba(0,0,0,0.6)] ${className}`}
      onClick={(e) => handleClick(e)}
    >
      <div
        className="w-[480px] bg-white dark:bg-dark-gray rounded-md p-7 m-7"
        ref={ref}
      >
        {children}
      </div>
    </div>,
    document.querySelector(".modal-container")
  );
};

export default Modal;
