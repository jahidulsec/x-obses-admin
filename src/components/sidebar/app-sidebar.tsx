import React from "react";
import { Sidebar } from "./sidebar";
import { NavMain } from "./nav-main";
import { NavUser } from "./nav-user";

const AppSidebar = () => {
  return (
    <Sidebar>
      {/* top */}
      <NavMain />

      {/* bottom */}
      <NavUser />
    </Sidebar>
  );
};

export { AppSidebar };
