"use client";
import { sendMagicLink } from "@/app/actions/auth";
import useResponseHandler from "@/app/hooks/useResponseHandler";
import Button from "@/components/Common/button";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const MagicLink = ({
  title,
  email,
}: {
  title?: string;
  email: string | null;
}) => {
  const [buttonTitle, setButtonTitle] = useState(title);
  const { replace } = useRouter();

  const { isLoading, submit, data } = useResponseHandler({
    serverAction: sendMagicLink,
    successCallBack: (data) => {
      email && setButtonTitle("Resent Login Link");
      console.log(data);
    },
    customMessage: "Magic link sent",
  });
  return (
    <Button
      type="button"
      className="w-full !bg-app_orange hover:!bg-app_orange/90 my-3"
      isLoading={isLoading}
      onClick={() => submit({ email })}
      disabled={!email}
    >
      {buttonTitle ?? "Get Login Link"}
    </Button>
  );
};

export default MagicLink;
