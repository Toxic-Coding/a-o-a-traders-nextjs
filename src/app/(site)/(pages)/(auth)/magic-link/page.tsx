import { endpoints } from "@/helpers/endpoints";

async function verifyMagicLink(token: string) {
  const response = await fetch(
    `${process.env.BASE_URL}${endpoints.auth.megicLinkLoginVerify}?token=${token}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );


  if (!response.ok) {
    throw new Error("Failed to verify magic link");
  }

  return response.json();
}

export default async function VerifyMagicLinkPage({
  searchParams,
}: {
  searchParams: Promise<{ token: string }>;
}) {
  const { token } = await searchParams;

  if (!token) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="p-6 bg-white rounded shadow-md">
          <h1 className="text-xl font-semibold text-red-600">
            Invalid or Missing Token
          </h1>
          <p className="mt-2 text-gray-600">
            Please check your email for a valid magic link.
          </p>
        </div>
      </div>
    );
  }

  try {
    const result = await verifyMagicLink(token);
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="p-6 bg-white rounded shadow-md">
          <h1 className="text-xl font-semibold text-green-600">
            Magic Link Verified Successfully
          </h1>
          <p className="mt-2 text-gray-600">
            Welcome back! Your login was successful.
          </p>
          <pre className="mt-4 p-4 bg-gray-200 rounded text-sm text-gray-800">
            {JSON.stringify(result, null, 2)}
          </pre>
        </div>
      </div>
    );
  } catch (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="p-6 bg-white rounded shadow-md">
          <h1 className="text-xl font-semibold text-red-600">
            Error Verifying Magic Link
          </h1>
          <p className="mt-2 text-gray-600">{error.message}</p>
        </div>
      </div>
    );
  }
}

