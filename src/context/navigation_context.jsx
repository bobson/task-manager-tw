import { createContext, useState } from "react";
import { boards } from "../../data.json";

const NavigationContext = createContext();

export const NavigationProvider = ({ children }) => {
  const [activePage, setActive] = useState(boards[0].name);

  const handleActive = (value) => {
    setActive(value);
  };

  const menuItems = boards.map((item, i) => {
    let link;
    if (i === 0) link = "/";
    else if (i === 1) link = "marketing";
    else link = "roadmap";
    return {
      label: item.name,
      link,
    };
  });

  return (
    <NavigationContext.Provider value={{ activePage, handleActive, menuItems }}>
      {children}
    </NavigationContext.Provider>
  );
};

export default NavigationContext;
