import { createContext, useState } from "react";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleShowModal = () => setShowModal(!showModal);
  const onClose = () => setShowModal(false);

  return (
    <ModalContext.Provider value={{ showModal, toggleShowModal, onClose }}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContext;
