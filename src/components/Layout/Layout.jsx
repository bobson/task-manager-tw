import { Link } from "react-router-dom";

import LogoDark from "../../assets/logo-dark.svg";
import MenuItemIcon from "../../assets/icon-board.svg";
import Appbar from "./Appbar";
import { useState } from "react";
import classNames from "classnames";

function Layout({ children, data }) {
  const [active, setActive] = useState(data[0].name);
  const [collapse, setCollapse] = useState(false);

  const menuItems = data.map((item, i) => {
    let link;
    if (i === 0) link = "/";
    else if (i === 1) link = "marketing";
    else link = "roadmap";
    return {
      label: item.name,
      link,
    };
  });

  const handleActive = (value) => {
    setActive(value);
  };

  const handleCollapse = () => {
    setCollapse(!collapse);
  };

  const className = classNames(
    "sm:flex flex-col lg:min-w-[300px] min-w-[260px] p-9 transition-[width] ease-linear hidden",
    {
      "md:hidden": collapse,
    }
  );
  const renderMinuItems = menuItems.map((item) => {
    return (
      <Link
        key={item.label}
        to={item.link}
        onClick={() => handleActive(item.label)}
      >
        <li className="flex cursor-pointer items-end">
          <img className="mr-4" src={MenuItemIcon} alt="dark logo" />
          <h4>{item.label}</h4>
        </li>
      </Link>
    );
  });
  return (
    <div className="flex w-full relative min-h-screen h-full">
      <aside className={className}>
        <div className="mb-5">
          <img src={LogoDark} alt="dark logo" />
        </div>
        <ul className="flex flex-col gap-3 justify-start items-start">
          {renderMinuItems}
        </ul>
        <button onClick={handleCollapse}>Hide</button>
      </aside>

      <main className="flex-3 bg-[#F4F7FD]">
        <Appbar title={active} collapse={collapse} />
        {collapse && <button onClick={handleCollapse}>Hide</button>}
        {children}
      </main>
    </div>
  );
}

export default Layout;
