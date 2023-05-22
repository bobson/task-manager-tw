import { Link } from "react-router-dom";
import useNavigationContext from "./hooks/useNavigationContext";
import useModalContext from "./hooks/useModalContext";
import useThemeContext from "./hooks/useThemeContext";
import classNames from "classnames";

import MenuItemIcon from "../assets/icon-board.svg";
import LogoDark from "../assets/logo-dark.svg";
import LogoLight from "../assets/logo-light.svg";
import IconLightTheme from "../assets/icon-light-theme.svg";
import IconDarkTheme from "../assets/icon-dark-theme.svg";
import HideSidebar from "../assets/icon-hide-sidebar.svg";

import Button from "./Button";

function Sidebar({ handleCollapse, collapse, modal }) {
  const { dark, toggleTheme } = useThemeContext();
  const { activePage, handleActivePage, menuItems } = useNavigationContext();
  const { close } = useModalContext();

  let classes;
  if (modal)
    classes =
      "flex flex-col rounded-md p-7 bg-white margin-auto dark:bg-dark-gray sm:hidden";
  else
    classes = classNames(
      "sm:flex flex-col justify-between w-72 p-7 gap-4 bg-white overflow-hidden dark:bg-dark-gray hidden",
      {
        "sm:hidden": collapse,
      }
    );

  const renderMenuPages = menuItems.map((item) => {
    let activePageClass = "";
    if (item.label === activePage)
      activePageClass = "bg-purple p-5 ml-[-28px] rounded-e-full text-white";

    return (
      <Link
        key={item.label}
        to={item.link}
        onClick={() => {
          handleActivePage(item.label);
        }}
        className="w-full"
      >
        <li
          className={`${activePageClass}  flex items-center w-full py-3.5 cursor-pointer`}
        >
          <img
            className={activePageClass ? "text-white mr-4" : "mr-4 ml-[-8px]"}
            src={MenuItemIcon}
            alt="icon-board"
          />
          <h4
            className={
              activePageClass ? "text-white align-middle" : "align-middle"
            }
          >
            {item.label}
          </h4>
        </li>
      </Link>
    );
  });

  let ToggleThemeButtonClass;
  if (dark) ToggleThemeButtonClass = "justify-self-end";
  else ToggleThemeButtonClass = "justify-self-start";

  return (
    <aside className={classes}>
      <div className="flex flex-col pt-2 gap-10">
        <img
          className="hidden w-32 sm:block"
          src={dark ? LogoLight : LogoDark}
          alt="dark logo"
        />

        <ul className="flex flex-col gap-1">
          <h4 className="py-4">ALL BOARDS (3)</h4>
          {renderMenuPages}
          <li className={`flex items-center w-full py-3.5 cursor-pointer`}>
            <img
              className="mr-4 ml-[-8px]"
              src={MenuItemIcon}
              alt="icon-board"
            />
            <h4 className="align-middle text-purple">+Create New Board</h4>
          </li>
        </ul>
      </div>

      <div>
        <div className="bg-light-bg dark:bg-dark-bg flex items-center justify-center p-3 mt-8 gap-5 rounded">
          <img src={IconLightTheme} alt="icon-light-theme" />
          <Button
            onClick={() => {
              toggleTheme();
              close();
            }}
            primary
            className="h-5 w-10 py-1 px-1"
          >
            <div className="w-8 grid">
              <span
                className={`${ToggleThemeButtonClass} bg-white w-3.5 h-3.5 rounded-full`}
              ></span>
            </div>
          </Button>
          <img src={IconDarkTheme} alt="icon-light-theme" />
        </div>
        <div
          onClick={handleCollapse}
          className="my-7 hidden sm:flex items-center gap-3 cursor-pointer"
        >
          <img src={HideSidebar} alt="hide" />
          <h4>Hide Sidebar</h4>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
