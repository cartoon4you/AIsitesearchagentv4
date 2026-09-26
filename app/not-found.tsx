import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 flex flex-col items-center justify-center p-4 text-center">
      <div className="max-w-md w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-8 shadow-sm">
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100 mb-2">404</h2>
        <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4">Page Not Found</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
          The page or resource you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
