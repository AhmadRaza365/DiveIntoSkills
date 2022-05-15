import React from "react";
import { useState } from "react";
import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  const [open, setOpen] = useState(false);

  return (
    <footer className="w-full bg-gradient-to-r from-dark-green to-green py-4 px-4 mt-5">
      <div className="flex flex-col md:flex-row ">
        <div className="w-full md:w-2/5">
          <h1 className="text-4xl text-yellow mx-2 font-bold">
            Dive Into Skills
          </h1>
          <p className="text-light-yellow text-lg my-3">
            The latest articles and courses to help you upgrade your skills and
            learn the latest trends. Master web Development with these amazing
            resources that are available for free!
          </p>
        </div>
        <div className="flex items-center justify-evenly w-full md:w-3/5">
          <ul>
            <li className="text-xl text-center">
              <Link href="/">
                <a className="text-light-yellow hover:text-yellow  duration-500">
                  Home
                </a>
              </Link>
            </li>
            <li className="text-xl text-center">
              <Link href="/blogs">
                <a className="text-light-yellow hover:text-yellow  duration-500">
                  Blogs
                </a>
              </Link>
            </li>
            <li className="text-xl text-center">
              <Link href="/courses">
                <a className="text-light-yellow hover:text-yellow  duration-500">
                  Courses
                </a>
              </Link>
            </li>
            <li className="text-xl text-center">
              <Link href="https://youtube.com/c/DiveIntoSkills">
                <a
                  target="_blank"
                  className="text-light-yellow hover:text-yellow  duration-500"
                >
                  YouTube
                </a>
              </Link>
            </li>
          </ul>

          <ul>
            <li className="text-xl text-center">
              <Link href="/about">
                <a className="text-light-yellow hover:text-yellow  duration-500">
                  About
                </a>
              </Link>
            </li>
            <li className="text-xl text-center">
              <Link href="/contact">
                <a className="text-light-yellow hover:text-yellow  duration-500">
                  Contact
                </a>
              </Link>
            </li>
            <li className="text-xl text-center">
              <Link href="/privacy-policy">
                <a className="text-light-yellow hover:text-yellow  duration-500">
                  Privacy Policy
                </a>
              </Link>
            </li>
            <li className="text-xl text-center">
              <Link href="/terms-of-use">
                <a className="text-light-yellow hover:text-yellow  duration-500">
                  Terms of Use
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <ul className="flex justify-center my-3 ">
        <a
          href="https://www.facebook.com/AhmadRaza365"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <FaFacebook className="text-4xl md:text-6xl mx-2 text-light-yellow hover:text-yellow  cursor-pointer   " />{" "}
        </a>
        <a
          href="https://www.instagram.com/ahmadraza_365"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <FaInstagram className="text-4xl md:text-6xl mx-2 text-light-yellow hover:text-yellow   cursor-pointer   " />{" "}
        </a>
        <a
          href="https://twitter.com/AhmadRaza365"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <FaTwitter className="text-4xl md:text-6xl mx-2 text-light-yellow hover:text-yellow   cursor-pointer   " />{" "}
        </a>
        <a
          href="https://www.linkedin.com/in/ahmadraza365/"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <FaLinkedin className="text-4xl md:text-6xl mx-2 text-light-yellow hover:text-yellow   cursor-pointer   " />{" "}
        </a>
        <a
          href="http://github.com/AhmadRaza365"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <FaGithub className="text-4xl md:text-6xl mx-2 text-light-yellow hover:text-yellow   cursor-pointer   " />
        </a>
      </ul>
      <div className="text-light-yellow text-lg flex flex-wrap justify-evenly">
        <p>COPYRIGHT@2022 Dive Into Skills</p>
        <p>
          Developed By:&#160;
          <Link href="/ahmadraza">
            <a className="text-light-yellow hover:text-yellow">Ahmad Raza</a>
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
