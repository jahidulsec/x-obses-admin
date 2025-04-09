"use client";

import Image from "next/image";
import React from "react";

const UserImage = ({ imagePath }: { imagePath: string }) => {
  return (
    <>
      <div className="relative w-8 h-8 rounded-full border border-primary overflow-hidden">
        <Image
          fill
          objectFit="cover"
          src={imagePath || "/images/user.png"}
          alt={""}
        />
      </div>
    </>
  );
};

export { UserImage };
