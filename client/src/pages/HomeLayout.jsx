import React from "react";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <>
      <Outlet /> {/*act as a placeholder for the content of the child routes*/}
    </>
  );
};

export default HomeLayout;
