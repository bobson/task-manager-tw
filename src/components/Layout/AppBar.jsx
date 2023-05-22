import LogoDark from "../../assets/logo-dark.svg";
import LogoLight from "../../assets/logo-light.svg";
import LogoMobile from "../../assets/logo-mobile.svg";
import ChevronDown from "../../assets/icon-chevron-down.svg";
import ChevronUp from "../../assets/icon-chevron-up.svg";
import AddTaskMobile from "../../assets/icon-add-task-mobile.svg";
import VerticalDots from "../../assets/icon-vertical-ellipsis.svg";

import useModalContext from "../hooks/useModalContext";
import useNavigationContext from "../hooks/useNavigationContext";
import useThemeContext from "../hooks/useThemeContext";
import Button from "../Button";

function AppBar({ collapse }) {
  const { showModal, toggleOpen } = useModalContext();
  const { activePage } = useNavigationContext();
  const { dark } = useThemeContext();

  return (
    <div className="h-16  sm:h-24 flex sticky left-0 bg-white dark:bg-dark-gray  items-center">
      {collapse && (
        <div className="h-full flex items-center mx-7">
          <img src={dark ? LogoLight : LogoDark} alt="logo" />
        </div>
      )}

      <img className="ml-7 sm:hidden" src={LogoMobile} alt="logo-mobile" />

      <div className="flex justify-between w-full px-5 h-full  sm:border-l-2 border-light-lines dark:border-lines-dark items-center">
        <div className="flex gap-3 items-center">
          <h2 className="dark:text-white">{activePage}</h2>
          <div className="sm:hidden cursor-pointer" onClick={toggleOpen}>
            {!showModal ? (
              <img src={ChevronDown} alt="down arrow" />
            ) : (
              <img src={ChevronUp} alt="down arrow" />
            )}
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Button className="sm:flex hidden" primary>
            +Add New Task
          </Button>
          <Button className="sm:hidden px-5" primary>
            <img src={AddTaskMobile} alt="add-task" />
          </Button>
          <img src={VerticalDots} alt="dots" />
        </div>
      </div>
    </div>
  );
}

export default AppBar;
