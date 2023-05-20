import { useContext } from "react";
import ModalContext from "../../context/modal_context";

const useModalContext = () => {
  return useContext(ModalContext);
};

export default useModalContext;
