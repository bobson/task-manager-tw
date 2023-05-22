import { useState } from "react";
import useModalContext from "../hooks/useModalContext";

import AppBar from "./AppBar";
import Modal from "../Modal";
import Sidebar from "../Sidebar";
import Button from "../Button";
import ShowSidebar from "../../assets/icon-show-sidebar.svg";

function Layout({ children }) {
  const [collapse, setCollapse] = useState(false);
  const { showModal } = useModalContext();

  const handleCollapse = () => {
    setCollapse(!collapse);
  };

  return (
    <div className="flex h-full">
      <Sidebar collapse={collapse} handleCollapse={handleCollapse} />
      <div className="flex-3 overflow-scroll min-h-screen h-full dark:bg-dark-bg bg-light-bg items-center">
        <AppBar collapse={collapse} handleCollapse={handleCollapse} />
        <main className="flex relative min-h-screen h-full w-full p-5 gap-4 border-l-2 border-t-2  border-lines-light dark:border-lines-dark">
          {children}
          {collapse && (
            <Button
              className="absolute pl-6 hidden sm:block left-[-20px] bottom-10"
              onClick={handleCollapse}
              primary
            >
              <img src={ShowSidebar} alt="show-sidebar" />
            </Button>
          )}
        </main>
      </div>
      {showModal && (
        <Modal className="sm:hidden mt-16">
          <Sidebar modal />
        </Modal>
      )}
    </div>
  );
}

export default Layout;
