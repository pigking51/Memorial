import { createContext, useState } from "react";
import { Outlet } from "react-router-dom";

export const MenuContext = createContext();

export function MenuWrapper() {
  const [category, setCategory] = useState();
  return (
    <>
      <MenuContext.Provider value={(category, setCategory)}>
        <Outlet />
      </MenuContext.Provider>
    </>
  );
}
