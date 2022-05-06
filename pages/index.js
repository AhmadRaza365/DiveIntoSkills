import React, { useRef, useState, useEffect } from "react";

import Head from "next/head";
import Script from "next/script";
import Image from "next/image";
import Card from "../components/Card";
import Subscribe from "../components/Subscribe";
import Link from "next/link";
export default function Home() {
  const [subscribeMsg, setSubscribeMsg] = useState("");
  const inputEl = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setSubscribeMsg("");
    }, 5000);
  }, [subscribeMsg]);

  const subscribeUser = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/subscribe", {
      body: JSON.stringify({
        email: inputEl.current.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { error } = await res.json();

    if (error) {
      setSubscribeMsg(error);

      return;
    }

    inputEl.current.value = "";
  };

  return (
    <div className="mt-12">
      {/* Hero section */}
      <section className="bg-gradient-to-r from-dark-green to-green py-16 px-5 md:px-10 flex flex-col-reverse md:flex-row items-center justify-center">
        <div className="w-full md:w-1/2 flex flex-col sm:justify-start items-center sm:items-start">
          <h1 className="text-3xl my-3 font-bold text-yellow">
            The latest articles and courses to help you upgrade your skills.
          </h1>
          <p className="text-lighter-yellow text-lg my-3">
            Master Web Development with amazing resources that are available for
            free! Join our Newsletter and get alerted when new articles, topics
            or courses are published.
          </p>
          <form className="flex flex-row max-w-sm " onSubmit={subscribeUser}>
            <input
              className="py-2 px-4 md:px-5 grow border-2 text-yellow border-yellow bg-transparent rounded-3xl text-base md:text-lg outline-none"
              type="email"
              ref={inputEl}
              placeholder="Email Address"
              required
            />
            <button
              className="bg-yellow border-2 border-yellow px-4 md:px-5 py-2 rounded-3xl -ml-10 text-base md:text-lg"
              type="submit"
            >
              Subscribe
            </button>
          </form>
          <p className="text-yellow pl-4 my-2">{subscribeMsg}</p>
        </div>
        <Image
          src="/heroImage.svg"
          alt="Boy using laptop"
          width={670}
          height={436}
        />
      </section>
      <section className="flex flex-col items-center my-5">
        <h2 className="text-dark-green text-4xl font-bold text-center my-3">
          Latest Blogs
        </h2>
        <div className="flex flex-wrap justify-center items-center">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <button className="bg-dark-green text-yellow rounded-xl px-5 py-2 text-xl my-3">
         <Link href="/blogs">
          Read More
         </Link>
        </button>
      </section>
      <section className="flex flex-col items-center my-5">
        <h2 className="text-dark-green text-4xl font-bold text-center my-3">
          Latest Courses
        </h2>
        <div className="flex flex-wrap justify-center items-center">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <button className="bg-dark-green text-yellow rounded-xl px-5 py-2 text-xl my-3">
        <Link href="/courses">
          View More
         </Link>
        </button>
      </section>
      
      <Subscribe />
    </div>
  );
}
