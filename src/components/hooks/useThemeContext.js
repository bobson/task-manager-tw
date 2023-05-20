import { useContext } from "react";
import ThemeContext from "../../context/theme_context";

const useThemeContext = () => {
  return useContext(ThemeContext);
};

export default useThemeContext;
