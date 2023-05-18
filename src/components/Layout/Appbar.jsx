import { useProSidebar } from "react-pro-sidebar";
import LogoDark from "../../assets/logo-dark.svg";
import classNames from "classnames";

function Appbar({ title, collapse }) {
  return (
    <div className="h-24 flex bg-white gap-6  border-b-2  border-[#e4ebfa] items-center">
      {collapse && (
        <>
          <div className="ml-7">
            <img src={LogoDark} alt="dark logo" />
          </div>
        </>
      )}
      <div className="w-[2px] h-24 bg-[#e4ebfa]"></div>
      <div>
        <h2>{title}</h2>
      </div>
    </div>
  );
}

export default Appbar;
