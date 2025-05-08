import "next-auth";

declare module "next-auth" {
  interface Session {
    error?: any;
    user: {
      access_token?: string;
      refresh_token?: string;
      token_type?: string;
      user_role?: string;
      user_id: number | string;
    } & DefaultSession["user"];
  }

  interface User {
    access_token?: string;
    refresh_token?: string;
    token_type?: string;
    user_role?: string;
    user_id: number | string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    access_token?: string;
    refresh_token?: string;
    token_type?: string;
    user_role?: string;
    user_id: number | string;
    error?: any;
  }
}
