"use client";

import { useState } from "react";
import { Input } from "../ui/input";
import { Eye, EyeOff } from "lucide-react";

const PasswordInput = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative">
      <Input
        type={!showPassword ? "password" : "text"}
        name="password"
        id="password"
      />
      <span
        className="eye absolute top-2.5 right-3 cursor-pointer"
        onClick={() => {
          setShowPassword(!showPassword);
        }}
      >
        {showPassword ? (
          <Eye className="size-4" />
        ) : (
          <EyeOff className="size-4" />
        )}
      </span>
    </div>
  );
};

export { PasswordInput };
