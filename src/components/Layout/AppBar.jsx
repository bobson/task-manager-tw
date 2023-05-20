import LogoDark from "../../assets/logo-dark.svg";
import LogoLight from "../../assets/logo-light.svg";
import LogoMobile from "../../assets/logo-mobile.svg";
import ChevronDown from "../../assets/icon-chevron-down.svg";
import ChevronUp from "../../assets/icon-chevron-up.svg";

import useModalContext from "../hooks/useModalContext";
import useNavigationContext from "../hooks/useNavigationContext";
import useThemeContext from "../hooks/useThemeContext";
import Button from "../Button";

function AppBar({ collapse }) {
  const { showModal, toggleOpen } = useModalContext();
  const { activePage } = useNavigationContext();
  const { dark } = useThemeContext();

  return (
    <div className="h-16 sm:h-24 flex sticky left-0 border-b-2 border-lines-light dark:border-lines-dark bg-white dark:bg-dark-gray gap-6 items-center">
      {collapse && (
        <img
          className="ml-7 hidden sm:block "
          src={dark ? LogoLight : LogoDark}
          alt="dark logo"
        />
      )}

      <img className="ml-7 sm:hidden" src={LogoMobile} alt="logo-mobile" />

      <div className="flex justify-between w-full px-5 h-full border-l-2 border-light-lines dark:border-lines-dark items-center">
        <h2 className="dark:text-white">{activePage}</h2>
        <div className="sm:hidden cursor-pointer" onClick={toggleOpen}>
          {!showModal ? (
            <img src={ChevronDown} alt="down arrow" />
          ) : (
            <img src={ChevronUp} alt="down arrow" />
          )}
        </div>

        <Button>+Add New Task</Button>
      </div>
    </div>
  );
}

export default AppBar;
