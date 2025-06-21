"use server";

import { endpoints } from "@/helpers/endpoints";
import { getSession } from "@/lib/session";
import { redirect } from "next/navigation";

interface signupData {
  username: string;
  email: string;
  password: string;
  confirm_password: string;
}

export const signUpAction = async (userData: signupData) => {
  console.log(userData);

  try {
    const response = await fetch(
      `${process.env.BASE_URL}${endpoints.auth.register}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      }
    );

    const responseData = await response.json();
    if (!response.ok) {
      const errorDetail = Array.isArray(responseData.detail)
        ? responseData.detail.map((err: any) => err.msg).join(", ")
        : responseData.detail;
      throw new Error(errorDetail || "An unknown error occurred");
    }
    return {
      type: "success",
      message: "Account created successfully",
      result: responseData,
    };
  } catch (error) {
    console.error("Error signing up:", error);
    return {
      type: "error",
      message: error.message || "Something went wrong during login.",
    };
  }
};

// Email/Password Login
interface loginData {
  email: string;
  password: string;
}
export async function emailLogin(formData: loginData) {
  const session = await getSession();

  try {
    const response = await fetch(
      `${process.env.BASE_URL}${endpoints.auth.login}`,
      {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const responseData = await response.json();

    if (!response.ok) {
      const errorDetail = Array.isArray(responseData.detail)
        ? responseData.detail.map((err: any) => err.msg).join(", ")
        : responseData.detail;
      throw new Error(errorDetail || "An unknown error occurred");
    }

    const { access_token, refresh_token, user_id, user_role } = responseData;

    session.user = {
      user_id: user_id,
      user_role: user_role,
      access_token,
      refresh_token,
      expiresAt: Date.now() + 55 * 60 * 1000, // Token expires in 55 minutes,
      email: formData.email,
    };

    await session.save();
    return {
      type: "success",
      message: "Logged in successfully",
      result: responseData,
    };
  } catch (error) {
    console.error("Error signing in:", error);
    return {
      type: "error",
      message: error.message || "Something went wrong during login.",
    };
  }
}

// magicLinkLogin Login
interface magicLinkLogin {
  email: string;
}
export async function sendMagicLink(formData: magicLinkLogin) {
  try {
    const response = await fetch(
      `${process.env.BASE_URL}${endpoints.auth.megicLinkLogin}?email=${formData.email}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const responseData = await response.json();

    if (!response.ok) {
      const errorDetail = Array.isArray(responseData.detail)
        ? responseData.detail.map((err: any) => err.msg).join(", ")
        : responseData.detail;
      throw new Error(errorDetail || "An unknown error occurred");
    }
    return {
      type: "success",
      message: "Magic link sent successfully",
      result: responseData,
    };
  } catch (error) {
    console.error("Error sending magic link:", error);
    return {
      type: "error",
      message: error.message || "Something went wrong.",
    };
  }
}

// Magic Link Login
// export async function sendMagicLink(email: string) {
//   const session = await getSession();

//   try {
//     const response = await fetch(`${process.env.API_URL}/auth/magic-link`, {
//       method: "POST",
//       body: JSON.stringify({ email }),
//     });

//     const { token } = await response.json();
//     session.magicToken = token;
//     await session.save();

//     // Send email with magic link (implementation depends on your email service)
//     await sendMagicLinkEmail(email, token);

//     return { success: true };
//   } catch (error) {
//     return { error: error.message };
//   }
// }

// Google Login
// export async function handleGoogleLogin() {
//   const session = await getSession();
//   const state = generateState();

//   session.oauthState = state;
//   await session.save();

//   const googleAuthUrl = new URL(process.env.API_URL + "/auth/google");
//   googleAuthUrl.searchParams.set(
//     "redirect_uri",
//     `${process.env.NEXTAUTH_URL}/api/auth/callback/google`
//   );
//   googleAuthUrl.searchParams.set("state", state);

//   redirect(googleAuthUrl.toString());
// }
