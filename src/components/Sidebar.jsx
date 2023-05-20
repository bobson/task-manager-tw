import { Link } from "react-router-dom";
import useNavigationContext from "./hooks/useNavigationContext";

import MenuItemIcon from "../assets/icon-board.svg";
import LogoDark from "../assets/logo-dark.svg";
import LogoLight from "../assets/logo-light.svg";
import useModalContext from "./hooks/useModalContext";
import classNames from "classnames";
import { useEffect, useState } from "react";
import useThemeContext from "./hooks/useThemeContext";

function Sidebar({ handleCollapse, collapse, modal }) {
  const { dark, toggleTheme } = useThemeContext();
  const { handleActive, menuItems } = useNavigationContext();
  const { close } = useModalContext();

  console.log(dark);

  useEffect(() => {
    // if (dark) document.html.classList.add("dark");
    // else document.html.classList.remove("dark");
    const html = document.getElementsByTagName("html")[0];
    if (dark) {
      html.classList.add("dark");
    } else html.classList.remove("dark");
    // console.log(html[0].classList);

    // return () => document.body.classList.remove("dark");
  }, [dark]);

  let classes;

  if (modal)
    classes =
      "flex flex-col rounded-md p-5 bg-white dark:bg-dark-gray sm:hidden";
  else
    classes = classNames(
      "sm:flex flex-col lg:min-w-[300px] min-w-[260px] pl-7 pt-[34px] bg-white dark:bg-dark-gray hidden",
      {
        "sm:hidden": collapse,
      }
    );

  const renderMenuItems = menuItems.map((item) => {
    return (
      <Link
        key={item.label}
        to={item.link}
        onClick={() => {
          if (modal) close();
          handleActive(item.label);
        }}
      >
        <li className="flex cursor-pointer items-end">
          <img className="mr-4" src={MenuItemIcon} alt="dark logo" />
          <h4>{item.label}</h4>
        </li>
      </Link>
    );
  });

  return (
    <aside className={classes}>
      <img
        className="mb-8 w-[153px] hidden sm:block"
        src={dark ? LogoLight : LogoDark}
        alt="dark logo"
      />
      <h4 className="mb-5">ALL BOARDS (3)</h4>
      <ul className="flex flex-col gap-3 justify-start items-start">
        {renderMenuItems}
      </ul>
      <button className="hidden sm:block" onClick={handleCollapse}>
        Hide
      </button>
      <button
        onClick={() => {
          toggleTheme();
          // close();
        }}
      >
        Theme
      </button>
    </aside>
  );
}

export default Sidebar;
