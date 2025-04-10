import { SquareActivity } from "lucide-react";
import React from "react";

const Logo = ({ size = 24 }: { size?: number }) => {
  return (
    <div className="text-primary">
      <SquareActivity size={size} />
    </div>
  );
};

export { Logo };
