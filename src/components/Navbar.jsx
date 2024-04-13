import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between font-bold text-2xl p-6 ">
        <div className="flex gap-14">
          <button>NepalCompass</button>
          <div className="flex gap-3 font-thin text-blue-500">
            <a href="#">Sulav</a>
            <a href="#">Suraj</a>
            <a href="#">GithubLink</a>
            <a href="#">ToBeDetermined</a>
          </div>
        </div>

        <div className="flex gap-5">
          <button>Theme</button>
          <button>Login</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
