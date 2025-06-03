import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center p-4">
      <h1 className="text-6xl font-bold text-red-600">404</h1>
      <p className="text-xl mt-2 text-gray-700">Oops! Page not found.</p>
      <p className="text-gray-500 mb-6">The page you're looking for doesn't exist or has been moved.</p>
      <Link
        to="/"
        className="px-6 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
