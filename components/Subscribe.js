import React, { useRef, useState, useEffect } from "react";

import Image from "next/image";

const Subscribe = () => {
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
    <div className="bg-dark-green w-full m-auto flex flex-col items-center ">
      <div className="flex flex-col md:flex-row items-center m-5">
        <div className="w-1/2 md:w-full lg:w-1/2 flex justify-center items-center">
        <Image
          src="/emailIcon.svg"
          alt="Email Icon"
          className=""
          width={543}
          height={490}
          />
          </div>
        <div className="mx-5">
          <h3 className="text-5xl text-center my-3 font-bold text-yellow">
            Subscribe to our Newsletter
          </h3>
          <p className="text-lighter-yellow text-justify text-2xl my-3">
            Master web Development with amazing resources that are available for
            free! Join our Newsletter and get alert when new articles, topics,
            or courses are published.
          </p>
          <form
            onSubmit={subscribeUser}
            className="flex flex-row max-w-sm my-5 m-auto"
          >
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
          <p className="text-yellow pl-4 my-2 text-center">
            {subscribeMsg}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
