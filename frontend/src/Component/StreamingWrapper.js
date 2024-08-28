import { createContext, useState } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

export const StreamingContext = createContext();

export function StreamingWrapper() {
  const [category, setCategory] = useState();
  return (
    <>
      <StreamingContext.Provider value={(category, setCategory)}>
        <Outlet />
      </StreamingContext.Provider>
    </>
  );
}
