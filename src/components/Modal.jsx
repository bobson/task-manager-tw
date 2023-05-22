import ReactDOM from "react-dom";

const Modal = ({ children, className }) => {
  return ReactDOM.createPortal(
    <>
      <div
        className={`absolute pt-4 justify-center h-full flex inset-0 bg-[rgba(0,0,0,0.6)]  ${className}`}
      >
        <div className="w-4/5">{children}</div>
      </div>
    </>,
    document.querySelector(".modal-container")
  );
};

export default Modal;
