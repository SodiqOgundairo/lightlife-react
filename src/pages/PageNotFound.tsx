// src/pages/NotFound.tsx
import { Link } from "react-router-dom";
import CloudinaryImage from "../utils/ImageItem";

const NotFound = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-light/20 to-gold-low/20 p-4 md:p-8">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-8 md:gap-12">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <CloudinaryImage
            imageKey="error404"
            className="w-full max-w-md rounded-lg hover:scale-105 transition-all duration-300 ease-linear"
            alt="404 Not Found"
          />
        </div>

        {/* Content Section */}
        <div className="w-full md:w-1/2 flex flex-col gap-6 text-center md:text-left">
          {/* <h1 className="text-5xl md:text-7xl font-bold purple-gradient">
            404
          </h1> */}
          <h2 className="text-3xl md:text-4xl font-semibold text-darkPurple">
            Oops! Page Not Found
          </h2>
          <p className="text-lg text-darkPurple/80 italic">
            The page you're looking for doesn't exist or has been moved. 
            Don't worry, let's get you back on track.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              to="/"
              className="btn-pry px-6 py-3 text-center hover:scale-105 transform transition-all duration-300 ease-linear"
            >
              Return Home
            </Link>
            <Link
              to="/contact"
              className="btn-outline px-6 py-3 text-center hover:scale-105 transform transition-all duration-300 ease-linear"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NotFound;