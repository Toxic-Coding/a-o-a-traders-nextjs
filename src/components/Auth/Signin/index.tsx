"use client";
import { emailLogin } from "@/app/actions/auth";
import { useAuth } from "@/app/context/authProvider";
import { useResponseHandler } from "@/app/hooks/useResponseHandler";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Button from "@/components/Common/button";
import FormInput from "@/components/Common/input/form-input";
import { loginSchema } from "@/helpers/schemas";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import MagicLink from "../megic-link";
import { endpoints } from "@/helpers/endpoints";

interface loginFormData {
  email: string;
  password: string;
}

const Signin = () => {
  const { push, replace } = useRouter();
  const { refresh: authRefresh } = useAuth();
  const methods = useForm({
    mode: "all",
    resolver: yupResolver(loginSchema),
  });

  const { loading, handleResponse } = useResponseHandler();
  const handleSubmit = async (data: loginFormData) => {
    await handleResponse(
      emailLogin,
      { data },
      (res: { data: { user_role: string } }) => {
        authRefresh();
        if (res.data.user_role === "admin") {
          window.location.href = "/admin";
        } else if (res.data.user_role === "supplier") {
          window.location.href = "/supplier";
        } else {
          window.location.href = "/";
        }
      },
      "Authorization success"
    );
  };

  return (
    <>
      <Breadcrumb title={"Signin"} pages={["Signin"]} />
      <section className="overflow-hidden bg-app_bg py-[80px] px-[10px] sm:px-[20px]">
        <div className="max-w-[1500px] w-full mx-auto">
          <div className="max-w-[570px] w-full mx-auto rounded-xl bg-white shadow-1 p-4 sm:p-7.5 xl:p-11">
            <div className="text-center mb-11">
              <h2 className="font-semibold text-xl sm:text-2xl xl:text-heading-5 text-app_text mb-1.5">
                Sign In to Your Account
              </h2>
              <p>Enter your detail below</p>
            </div>

            <div>
              <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(handleSubmit)}>
                  <div className="mb-5">
                    <FormInput
                      name="email"
                      type="email"
                      label="Email"
                      autoFocus
                      required
                    />
                  </div>

                  <div className="mb-5">
                    <FormInput
                      name="password"
                      type="password"
                      label="Password"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-app_text hover:bg-app_blue"
                    isLoading={loading}
                  >
                    Sign in to account
                  </Button>

                  <span className="relative z-1 block font-medium text-center mt-4.5">
                    <span className="block absolute -z-1 left-0 top-1/2 h-px w-full bg-gray-3"></span>
                    <span className="inline-block px-3 bg-white">Or</span>
                  </span>

                  <MagicLink email={methods.getValues("email") || null} />
                  <a
                    href="#"
                    className="block text-center text-app_text mt-4.5 ease-out duration-200 hover:text-app_text"
                  >
                    Forget your password?
                  </a>

                  <span className="relative z-1 block font-medium text-center mt-4.5">
                    <span className="block absolute -z-1 left-0 top-1/2 h-px w-full bg-gray-3"></span>
                    <span className="inline-block px-3 bg-white">Or</span>
                  </span>

                  <div className="flex flex-col items-center justify-center gap-4.5 mt-4.5">
                    <Link
                      className="w-full"
                      href={`${process.env.NEXT_PUBLIC_BASE_URL}${endpoints.auth.google}`}
                    >
                      <button className="flex justify-center w-full items-center bg-white dark:bg-gray-900 border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 dark:text-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                        <svg
                          className="h-6 w-6 mr-2"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          width="800px"
                          height="800px"
                          viewBox="-0.5 0 48 48"
                          version="1.1"
                        >
                          <title>Google-color</title>
                          <desc>Created with Sketch.</desc>
                          <defs></defs>
                          <g
                            id="Icons"
                            stroke="none"
                            strokeWidth="1"
                            fill="none"
                            fillRule="evenodd"
                          >
                            <g
                              id="Color-"
                              transform="translate(-401.000000, -860.000000)"
                            >
                              <g
                                id="Google"
                                transform="translate(401.000000, 860.000000)"
                              >
                                <path
                                  d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
                                  id="Fill-1"
                                  fill="#FBBC05"
                                ></path>
                                <path
                                  d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
                                  id="Fill-2"
                                  fill="#EB4335"
                                ></path>
                                <path
                                  d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
                                  id="Fill-3"
                                  fill="#34A853"
                                ></path>
                                <path
                                  d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
                                  id="Fill-4"
                                  fill="#4285F4"
                                ></path>
                              </g>
                            </g>
                          </g>
                        </svg>
                        <span>Continue with Google</span>
                      </button>
                    </Link>
                  </div>

                  <p className="text-center mt-6">
                    Don&apos;t have an account?
                    <Link
                      href="/signup"
                      className="text-app_text ease-out duration-200 hover:text-orange pl-2"
                    >
                      Sign Up Now!
                    </Link>
                  </p>
                </form>
              </FormProvider>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signin;
