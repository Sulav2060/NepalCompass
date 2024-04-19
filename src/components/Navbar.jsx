import React from "react";

const Navbar = () => {
  return (
    <div className="fixed top-0 z-10 w-full bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center h-16 px-6">
        <div className="flex items-center">
          <button className="text-2xl font-bold text-blue-600 hover:text-blue-700">
            NepalCompass
          </button>
        </div>
        <div className="flex justify-center space-x-3 text-blue-500">
          <a href="#" className="hover:underline">Sulav</a>
          <a href="#" className="hover:underline">Suraj</a>
          <a href="#" className="hover:underline">GithubLink</a>
          <a href="#" className="hover:underline">ToBeDetermined</a>
        </div>
        <div>
          <button className="mr-4 bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600">Theme</button>
          <button className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;