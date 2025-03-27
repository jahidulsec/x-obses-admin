import { Activity } from "lucide-react";
import React from "react";

const Logo = ({
    size=24
}: {size?:number}) => {
  return (
    <div className="text-primary">
      <Activity size={size} />
    </div>
  );
};

export { Logo };
