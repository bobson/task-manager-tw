import { useContext } from "react";
import NavigationContext from "../context/navigation_context";

const useNavigationContext = () => {
  return useContext(NavigationContext);
};

export default useNavigationContext;
