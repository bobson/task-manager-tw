import { useState } from "react";
import useModalContext from "../hooks/useModalContext";

import AppBar from "./AppBar";
import Modal from "../Modal";
import Sidebar from "../Sidebar";

function Layout({ children }) {
  const [collapse, setCollapse] = useState(false);
  const { showModal } = useModalContext();

  const handleCollapse = () => {
    setCollapse(!collapse);
  };

  return (
    <div className="flex h-full">
      <Sidebar handleCollapse={handleCollapse} collapse={collapse} />
      <main className="flex-3 overflow-scroll min-h-screen h-full dark:bg-dark-bg bg-light-bg items-center">
        <AppBar collapse={collapse} />
        {collapse && <button onClick={handleCollapse}>Hide</button>}
        <div className="flex min-h-screen h-full p-5 gap-4 border-l-2  border-lines-light dark:border-lines-dark">
          {children}
        </div>
      </main>
      {showModal && (
        <Modal className="sm:hidden">
          <Sidebar modal />
        </Modal>
      )}
    </div>
  );
}

export default Layout;
