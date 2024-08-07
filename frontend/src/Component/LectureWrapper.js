import { createContext, useState } from "react";
import { Outlet } from "react-router-dom";

export const LectureContext = createContext();

export function LectureWrapper() {
  const [category, setCategory] = useState(0);
  return (
    <>
      <LectureContext.Provider value={(category, setCategory)}>
        <Outlet />
      </LectureContext.Provider>
    </>
  );
}
