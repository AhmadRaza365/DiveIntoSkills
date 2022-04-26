import React from "react";
import { useState } from "react";
import { MdOutlineMenu, MdOutlineClose } from "react-icons/md";
import { BiCodeBlock } from "react-icons/bi";
import Link from "next/link";

const Header = () => {
  let Links = [
    { name: "Home", path: "/" },
    { name: "Blogs", path: "/blogs" },
    { name: "Courses", path: "/courses" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const [open, setOpen] = useState(false);
  

  return (
    <nav className={`w-full bg-gradient-to-r from-dark-green to-green backdrop-blur-sm shadow-md z-20 fixed top-0 left-0 right-0`}>
      <div className="md:flex items-center justify-between  py-4 md:px-15 px-7 ">
      
      <Link href="/">
          <a className="font-bold  cursor-pointer flex items-center	md:z-auto">
          <h1 className="text-2xl text-yellow mx-2"> Dive Into Skills</h1>
          </a>
        </Link>
      
        <div
          onClick={() => setOpen(!open)}
          className="text-4xl absolute right-8 top-4 text-lighter-yellow items-center cursor-pointer md:hidden"
        >
          <span>{open ? <MdOutlineClose /> : <MdOutlineMenu />}</span>
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute bg-gradient-to-r from-dark-green to-green md:bg-none md:static md:z-auto z-10 left-0 w-full h-screen md:h-auto md:w-auto pl-0 transition-all duration-200 ease-in ${
            open
              ? "top-16  opacity-100 backdrop-blur-sm"
              : "top-[-100vh] md:opacity-100 opacity-0"
          }`}
          onClick={() => setOpen(!open)}
        >
          {Links.map((path) => {
            return (
              <li key={path.name} className=" md:ml-8 text-xl md:my-0 my-7 text-center">
                <Link
                  href={path.path}
                  
                >
                  <a className="text-lighter-yellow hover:text-yellow  duration-500">
                  {path.name}
                  </a>
                </Link>
              </li>
            );
          })}
         
        </ul>
      </div>
    </nav>
  );
};

export default Header;