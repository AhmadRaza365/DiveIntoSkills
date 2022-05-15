import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FiMail } from "react-icons/fi";
import {
  FaWhatsapp,
  FaTelegramPlane,
  FaFacebookMessenger,
} from "react-icons/fa";

export default function Blogs() {
  const [sendSuccess, showSendSuccess] = useState(false);
  const [sendError, showSendError] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          showSendSuccess(true);
        },
        (error) => {
          showSendError(true);
        }
      );
    e.target.reset();
  };

  setTimeout(() => {
    showSendSuccess(false);
    showSendError(false);
  }, 5000);

  useEffect(() => {
    document.title = "Ahmad Raza - Contact Me";
  }, []);

  return (
    <main className="mt-16 w-screen bg-green ">
      <div className="flex flex-wrap w-screen justify-center divide-y md:divide-y-0 md:divide-x">
        <div className="border-white w-full md:w-2/5  p-4 flex flex-col justify-center">
          <h3 className="text-light-yellow my-3 text-2xl md:text-4xl font-bold">
            Have a Query in Mind?
          </h3>
          <p className="text-light-yellow text-2xl md:text-2xl ">
            You can reach out to me via email or social media platforms to
            discuss the query.
          </p>

          <ul className="flex justify-start my-4 ">
            <a
              href="https://wa.me/message/S7HD2AAX3EYED1"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <FaWhatsapp className="text-4xl md:text-6xl mx-2 text-light-yellow hover:text-yellow   cursor-pointer   " />{" "}
            </a>
            <a
              href="https://www.facebook.com/DiveIntoSkills"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <FaFacebookMessenger className="text-4xl md:text-6xl mx-2 text-light-yellow hover:text-yellow   cursor-pointer   " />{" "}
            </a>
            <a
              href="https://t.me/AhmadRaza365"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <FaTelegramPlane className="text-4xl md:text-6xl mx-2 text-light-yellow hover:text-yellow   cursor-pointer   " />{" "}
            </a>
            <a
              href="mailto:diveintoskills@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <FiMail className="text-4xl md:text-6xl mx-2 text-light-yellow hover:text-yellow   cursor-pointer   " />{" "}
            </a>
          </ul>
        </div>
        <div className="w-full md:w-1/2 p-4">
          <h3 className="text-light-yellow my-3 text-2xl md:text-4xl font-bold">
            Send Me Email
          </h3>
          <form
            className="flex flex-col justify-center gap-2"
            ref={form}
            onSubmit={sendEmail}
          >
            <input
              type="text"
              className="py-2 px-4 md:px-5 grow border-2 text-light-yellow border-light-yellow bg-transparent rounded-3xl placeholder-light-yellow text-base md:text-lg outline-none"
              name="name"
              id="name"
              placeholder="Name"
              required
            />
            <input
              type="email"
              className="py-2 px-4 md:px-5 grow border-2 text-light-yellow border-light-yellow bg-transparent rounded-3xl placeholder-light-yellow text-base md:text-lg outline-none"
              name="email"
              id="email"
              placeholder="Email"
              required
            />
            <input
              type="text"
              className="py-2 px-4 md:px-5 grow border-2 text-light-yellow border-light-yellow bg-transparent rounded-3xl placeholder-light-yellow file:text-base md:text-lg outline-none"
              name="subject"
              id="subject"
              placeholder="Subject"
              required
            />
            <textarea
              name="mail_body"
              className="py-2 px-4 md:px-5 grow border-2 text-light-yellow border-light-yellow bg-transparent rounded-3xl placeholder-light-yellow text-base md:text-lg outline-none"
              id="body"
              cols="30"
              rows="10"
              placeholder="Body"
            ></textarea>
            <button
              type="submit"
              className="bg-light-yellow text-dark-green mx-auto hover:text-light-yellow hover:bg-transparent border-2  border-light-yellow  px-4 py-2 my-2 text-xl font-bold rounded-md transition-all duration-300 ease-in"
            >
              Send
            </button>
          </form>
          {sendSuccess ? (
            <p className="text-center text-dark-green text-xl my-2">
              Message has been sent successfully. I will get back to you as soon
              as possible.
              <br />
              If due to any technical issue, I couldn&apos;t send you response
              then you can also contact me via other options.
            </p>
          ) : null}
          {sendError ? (
            <p className="text-center text-[#dc2626] text-xl my-2">
              Error while sending the message. Please try again.
            </p>
          ) : null}
        </div>
      </div>
    </main>
  );
}
