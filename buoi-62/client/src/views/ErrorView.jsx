import { Link } from "react-router-dom";

const ErrorView = () => {
  return (
    <div className="grid h-screen place-content-center bg-white">
      <div className="text-center">
        <strong className="text-9xl font-black text-gray-200">404</strong>
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Uh-oh!
        </h1>
        <p className="mt-4 text-gray-500">We can't find that page.</p>
        <Link
          to="/"
          className="mt-6 inline-block rounded bg-indigo-600 px-5 py-3 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorView;
