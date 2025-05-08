"use client";

import Spinner from "@/components/Common/spinner";
import { endpoints } from "@/helpers/endpoints";
import React, { useEffect } from "react";

const Page = () => {
    useEffect(() => {
        const openGoogleLogin = async () => {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_BASE_URL}${endpoints.auth.google}`,
                {
                    method: "GET",
                }
            );

            const googleLoginUrl = await response.text();
            console.log(googleLoginUrl);

            // Open the Google login URL in a new popup window
            window.open(googleLoginUrl, "_blank", "width=500,height=600");
        };

        openGoogleLogin();
    }, []);

    return (
        <div>
            <Spinner size="large" />
        </div>
    );
};

export default Page;
