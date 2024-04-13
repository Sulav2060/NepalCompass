import React from "react";

const Navbar = () => {
  return (
    <div className="fixed top-0 z-10 w-full bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center h-16 px-6">
        <div className="flex items-center">
          <button className="text-xl font-semibold text-blue-600">
            NepalCompass
          </button>
          <div className="ml-6 space-x-3 text-blue-500">
            <a href="#">Sulav</a>
            <a href="#">Suraj</a>
            <a href="#">GithubLink</a>
            <a href="#">ToBeDetermined</a>
          </div>
        </div>
        <div>
          <button className="mr-4">Theme</button>
          <button>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
