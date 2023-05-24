import { useState } from "react";

const useModal = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal(!showModal);
  const closeModal = () => setShowModal(false);

  return [showModal, toggleModal, closeModal];
};

export default useModal;
