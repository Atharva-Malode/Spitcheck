import React from "react";
import { useNavigate } from "react-router-dom";
function HomePage() {
  const navigate = useNavigate();
  const nextPage = () => {
    navigate("/face-register");
  };
  const faceMatchingPage = () => {
    navigate("/face-compare");
  };
  const detectionPage = () => {
    navigate("/detection");
  }

  return (
    <div className="text-center p-4 mx-4">
      <h1 className="font-serif text-4xl font-bold text-indigo-600 dark:text-white leading-tight">
        Spit Check
      </h1>

      <h2 className="font-sans text-2xl font-medium text-gray-700 dark:text-white leading-snug w-full">
        An End-to-end solution for spitting in metro premises
      </h2>

      <p className="font-sans text-gray-500 dark:text-white text-lg italic mt-2">
      Pure Commutes Unfold
      </p>


      <div className="flex justify-center mt-2 gap-4">
        <button
          className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-6 rounded-full mt-6"
          onClick={nextPage}
        >
            Photo+QR
        </button>

        <button
          className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-6 rounded-full mt-6"
          onClick={detectionPage}
        >
          Spitting Detection
        </button>
        <button
          className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-6 rounded-full mt-6"
          onClick={faceMatchingPage}
        >
          Face Matching
        </button>
      </div>
    </div>
  );
}

export default HomePage;