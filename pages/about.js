import Image from "next/image";
import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

export default function About() {
  return (
    <main className="mt-24">
      <h2 className="text-dark-green text-4xl font-bold text-center my-3">
        All About &quot;Dive Into Skills&quot;
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-center mx-4 my-5">
        <p className="text-dark-green text-justify text-2xl m-3 px-3 w-full md:w-1/2">
          <b>&quot;Dive Into Skills&quot;</b> is a platform where you can learn
          about <b>software development.</b> The purpose behind &quot;Dive Into
          Skills&quot; is to educate people about Programming and technology and
          to raise awareness of <b>skills.</b> Here I will share knowledgeable
          content about &quot;free courses on different platforms, tutorials on
          different topics related to software development&quot;. I hope by
          using this platform, you will learn many valuable skills.
        </p>
        <Image
          className="m-2"
          src="/images/diveintoskills.webp"
          alt="Dive Into Skills"
          width={350}
          height={350}
        />
      </div>
      <h2 className="text-dark-green text-4xl font-bold text-center my-10">
        Master Mind behind &quot;Dive Into Skills&quot;
      </h2>
      <div className="flex flex-col md:flex-row items-center mx-4 justify-center">
        <div className="w-full md:w-1/2 m-3 px-3">
          <h3 className="text-dark-green text-2xl font-bold my-2">
            <Link href="https://ahmadraza365.diveintoskills.com/">
              <a target="_blank">Ahmad Raza</a>
            </Link>
          </h3>
          <p className="text-dark-green text-justify text-2xl ">
            I am Ahmad Raza. I am a student of bachelors of Software Engineering
            and also a MERN Stack Developer, UI/UX Designer and Content Creator.
            I&apos;m also a community mentor at Dive Into Skills and iConnect
            Pakistan.{" "}
            <Link href="https://ahmadraza365.diveintoskills.com/">
              <a target="_blank" className=" underline ">
                Know More
              </a>
            </Link>
          </p>
        </div>
        <Image
          className="m-2"
          src="/images/ahmadraza365.webp"
          alt="AhmadRaza365"
          width={350}
          height={350}
        />
      </div>

      <div className="my-10">
        <h3 className="text-dark-green text-3xl md:text-4xl font-bold text-center ">
          Follow Ahmad Raza on social media platforms
        </h3>
        <ul className="flex justify-center my-3 ">
          <a
            href="https://www.facebook.com/AhmadRaza365"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <FaFacebook className="text-4xl md:text-6xl mx-2 text-dark-green   cursor-pointer   " />{" "}
          </a>
          <a
            href="https://www.instagram.com/ahmadraza_365"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <FaInstagram className="text-4xl md:text-6xl mx-2 text-dark-green   cursor-pointer   " />{" "}
          </a>
          <a
            href="https://twitter.com/AhmadRaza365"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <FaTwitter className="text-4xl md:text-6xl mx-2 text-dark-green   cursor-pointer   " />{" "}
          </a>
          <a
            href="https://www.linkedin.com/in/ahmadraza365/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <FaLinkedin className="text-4xl md:text-6xl mx-2 text-dark-green   cursor-pointer   " />{" "}
          </a>
          <a
            href="http://github.com/AhmadRaza365"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <FaGithub className="text-4xl md:text-6xl mx-2 text-dark-green   cursor-pointer   " />
          </a>
        </ul>
      </div>
    </main>
  );
}
