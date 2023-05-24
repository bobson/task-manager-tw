import LogoDark from "../../assets/logo-dark.svg";
import LogoLight from "../../assets/logo-light.svg";
import LogoMobile from "../../assets/logo-mobile.svg";
import ChevronDown from "../../assets/icon-chevron-down.svg";
import ChevronUp from "../../assets/icon-chevron-up.svg";
import AddTaskMobile from "../../assets/icon-add-task-mobile.svg";
import VerticalDots from "../../assets/icon-vertical-ellipsis.svg";

import useNavigationContext from "../../hooks/useNavigationContext";
import useThemeContext from "../../hooks/useThemeContext";
import Button from "../Button";
import useModal from "../../hooks/useModal";
import Modal from "../Modal";
import Sidebar from "../Sidebar";

function AppBar({ showSidebar }) {
  const { activePage } = useNavigationContext();
  const { dark } = useThemeContext();
  const [showModal, toggleModal, closeModal] = useModal();

  return (
    <div className="h-16  sm:h-24 flex sticky left-0 bg-white dark:bg-dark-gray items-center border-b-2  border-lines-light dark:border-lines-dark">
      {showSidebar && (
        <div className="h-full hidden sm:flex items-center border-r-2 border-lines-light dark:border-lines-dark px-7">
          <img src={dark ? LogoLight : LogoDark} alt="logo" />
        </div>
      )}

      <img className="pl-7 sm:hidden" src={LogoMobile} alt="logo-mobile" />

      <div className="flex justify-between px-7 w-full h-full items-center">
        <div className="flex gap-3 items-center">
          <h2 className="dark:text-white">{activePage}</h2>
          <div className="sm:hidden cursor-pointer" onClick={toggleModal}>
            {!showModal ? (
              <img src={ChevronDown} alt="down arrow" />
            ) : (
              <img src={ChevronUp} alt="down arrow" />
            )}
          </div>
        </div>

        <div className="flex items-center gap-6">
          <Button className="sm:flex hidden" primary>
            +Add New Task
          </Button>
          <Button className="sm:hidden px-5" primary>
            <img src={AddTaskMobile} alt="add-task" />
          </Button>
          <img src={VerticalDots} alt="dots" />
        </div>
      </div>
      {showModal && (
        <Modal className="sm:hidden mt-16 items-start" onClose={closeModal}>
          <Sidebar modal />
        </Modal>
      )}
    </div>
  );
}

export default AppBar;
