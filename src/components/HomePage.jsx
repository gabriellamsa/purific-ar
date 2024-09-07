import React from "react";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-blue-700 text-white flex flex-col justify-center items-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to Purific.Ar</h1>
        <p className="text-lg mb-8">
          Your solution for healthier and more comfortable environments.
        </p>
        <button className="bg-white text-blue-700 font-semibold py-2 px-4 rounded shadow-lg hover:bg-gray-100 transition duration-300">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default HomePage;
