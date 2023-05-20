import ReactDOM from "react-dom";

const Modal = ({ children, className }) => {
  return ReactDOM.createPortal(
    <>
      <div
        className={`absolute inset-0 mt-16 bg-black opacity-60 ${className}`}
      />
      <div
        className={`absolute inset-0 mt-10 w-screen p-10 bg-transparent  ${className}`}
      >
        {children}
      </div>
    </>,
    document.querySelector(".modal-container")
  );
};

export default Modal;
