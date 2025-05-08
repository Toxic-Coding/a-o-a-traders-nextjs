import Spinner from "@/components/Common/spinner";
import React from "react";

const Loading = () => {
  return (
    <div className="w-full min-h-[60vh] flex items-center justify-center">
      <Spinner color="orange" />
    </div>
  );
};

export default Loading;
