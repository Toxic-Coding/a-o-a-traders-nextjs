import Image from "next/image";
import React from "react";

const Empty = () => {
  return (
    <div className="w-full flex items-center justify-center">
      <Image alt="empty" src={"/empty-box.png"} width={200} height={200} />
    </div>
  );
};

export default Empty;
