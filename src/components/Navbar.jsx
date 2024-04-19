import React from "react";
import { Button } from "antd";
import { BulbOutlined, BulbFilled } from "@ant-design/icons";
import { useMediaQuery } from "react-responsive";

const Navbar = ({ darkMode, toggleTheme }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  // const [darkMode, setDarkMode] = useState(false);
  // const toggleTheme = () => {
  //   setDarkMode(!darkMode);
  //   // You can add logic here to toggle the theme in your application
  //   console.log("Theme toggled", darkMode);
  // };
  if (!isMobile) {
    return (
      <div
        className={`fixed top-0 z-10 w-full ${
          darkMode ? "bg-black" : "bg-white"
        } shadow-md text-${darkMode ? "white" : "black"}`}
      >
        <div className="container mx-auto flex justify-between items-center h-16 px-6 ">
          <div className="flex items-center">
            <button
              className={`text-2xl font-bold ${
                darkMode ? "text-white" : "text-black"
              } hover:text-blue-500`}
            >
              NepalCompass
            </button>
          </div>
          <div
            className={`flex justify-center space-x-3 ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            <a href="#" className={`hover:text-blue-500`}>
              Sulav
            </a>
            <a href="#" className={`hover:text-blue-500`}>
              Suraj
            </a>
            <a href="#" className={`hover:text-blue-500`}>
              GithubLink
            </a>
            <a href="#" className={`hover:text-blue-500`}>
              ToBeDetermined
            </a>
          </div>
          <div>
            <Button
              className={`mr-4 ${darkMode ? "bg-black" : "bg-white"} text-${
                darkMode ? "white" : "black"
              } rounded-full p-2 hover:bg-blue-100`}
              onClick={toggleTheme}
              icon={darkMode ? <BulbFilled /> : <BulbOutlined />}
            />
          </div>
        </div>
      </div>
    );
  }
};

export default Navbar;
