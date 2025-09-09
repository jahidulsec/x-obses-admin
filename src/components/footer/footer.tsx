import Link from "next/link";
import React from "react";

const DashboardFooter = () => {
  return (
    <footer className="text-center text-xs md:text-sm">
      Designed & Developed by{" "}
      <em className="font-bold not-italic">
        <Link href={"https://impalaintech.com"} target="_blank">
          Impala Intech Limited
        </Link>
      </em>
    </footer>
  );
};

export { DashboardFooter };
