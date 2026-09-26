"use client";

import React from "react";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-950 text-gray-100 flex items-center justify-center min-h-screen p-4">
        <div className="max-w-md w-full bg-gray-900 border border-gray-800 rounded-2xl p-8 text-center shadow-lg">
          <h2 className="text-3xl font-extrabold mb-2">Application Error</h2>
          <p className="text-sm text-gray-400 mb-6">
            A critical error occurred. Click below to reload the app.
          </p>
          <button
            onClick={() => reset()}
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-colors cursor-pointer"
          >
            Reload App
          </button>
        </div>
      </body>
    </html>
  );
}
