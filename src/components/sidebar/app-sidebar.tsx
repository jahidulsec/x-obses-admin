import React from "react";
import { Sidebar, SidebarTopSection } from "./sidebar";

const AppSidebar = () => {
  return (
    <Sidebar>
      {/* top */}
      <SidebarTopSection />

      {/* bottom */}
      <div className="bottom">bottom</div>
    </Sidebar>
  );
};

export { AppSidebar };
