"use client";
import React from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
      <p className="mb-6 text-gray-600">
        {error.message || "An unexpected error occurred."}
      </p>
      <button
        className="px-4 py-2 bg-blue-600 text-app_blue rounded hover:bg-blue-700 transition"
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
}
