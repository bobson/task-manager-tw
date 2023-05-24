import { useState } from "react";

import AppBar from "./AppBar";

import Sidebar from "../Sidebar";
import Button from "../Button";
import ShowSidebar from "../../assets/icon-show-sidebar.svg";

function Layout({ children }) {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleShowSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="flex h-screen">
      <Sidebar
        showSidebar={showSidebar}
        handleShowSidebar={handleShowSidebar}
      />
      <div className="flex-3 overflow-scroll dark:bg-dark-bg bg-light-bg items-center">
        <AppBar showSidebar={showSidebar} />
        <main className="flex relative w-full p-5 gap-4">
          {children}
          {showSidebar && (
            <Button
              className="fixed pl-6 hidden sm:block left-[-20px] bottom-20"
              onClick={handleShowSidebar}
              primary
            >
              <img src={ShowSidebar} alt="show-sidebar" />
            </Button>
          )}
        </main>
      </div>
    </div>
  );
}

export default Layout;
