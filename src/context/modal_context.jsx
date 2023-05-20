import { createContext, useState } from "react";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleOpen = () => setShowModal(!showModal);
  const close = () => setShowModal(false);

  return (
    <ModalContext.Provider value={{ showModal, toggleOpen, close }}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContext;
