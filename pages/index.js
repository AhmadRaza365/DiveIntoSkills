import React, { useRef, useState, useEffect } from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

import Head from "next/head";
import Script from "next/script";
import Image from "next/image";
import Card from "../components/Card";
import Subscribe from "../components/Subscribe";
import Link from "next/link";
import { sortByDate } from "../utils";
export default function Home({ posts }) {
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
    <main className="mt-12">
      <Head>
        {/* Title, Desc, Keywords, Author and Robots tags */}
        <title>
          Dive Into Skills - Latest Articles and Courses to upgrade Skills
        </title>
        <meta
          name="description"
          content="Want to Master Web Development? DiveIntoSkills is here to help you with amazing resources that are available for free!"
        />
        <link rel="canonical" href="https://diveintoskills.com/" />
        <meta
          name="keywords"
          content="Dive Into Skills, DiveIntoSkills,Free Courses, Skill, Skills, Web Development, Development, Programming"
        />
        <meta name="author" content="AhmadRaza365" />
        <meta name="robots" content="index, follow" />

        {/* og Tags */}
        <meta
          property="og:title"
          content="Dive Into Skills - Latest Articles and Courses to upgrade Skills"
        />
        <meta property="og:site_name" content="Dive Into Skills" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://diveintoskills.com/" />
        <meta property="og:locale" content="en_US" />
        <meta
          property="og:image"
          content="https://diveintoskills.com/images/diveintoskills.png"
        />
        <meta
          property="og:description"
          content="Want to Master Web Development? DiveIntoSkills is here to help you with amazing resources that are available for free!"
        />

        {/* Twitter Card Tags */}

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@DiveIntoSkills" />
        <meta name="twitter:title" content="Dive Into Skills" />
        <meta name="twitter:creator" content="@AhmadRaza365" />
        <meta
          name="twitter:description"
          content="Want to Master Web Development? DiveIntoSkills is here to help you with amazing resources that are available for free!"
        />
        <meta
          name="twitter:image"
          content="https://diveintoskills.com/images/diveintoskills.png"
        />
      </Head>
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
          {posts
            .filter((post, index) => post.postMeta.type == "post")
            .filter((post, index) => index < 4)
            .map((post, index) => (
              <Card
                key={post.slug}
                title={post.postMeta.title}
                slug={post.slug}
                image={post.postMeta.cover_image}
                description={post.postMeta.description}
                date={post.postMeta.date}
                category={post.postMeta.category}
              />
            ))}
        </div>
        <button className="bg-dark-green hover:bg-transparent border-2 border-dark-green text-yellow hover:text-dark-green shadow-md rounded-xl px-5 py-2 text-xl my-3">
          <Link href="/blogs">Read More</Link>
        </button>
      </section>
      <section className="flex flex-col items-center my-5">
        <h2 className="text-dark-green text-4xl font-bold text-center my-3">
          Latest Courses
        </h2>
        <div className="flex flex-wrap justify-center items-center">
          {posts
            .filter((post, index) => post.postMeta.type == "course")
            .filter((post, index) => index < 4)
            .map((post, index) => (
              <Card
                key={post.slug}
                title={post.postMeta.title}
                slug={post.slug}
                image={post.postMeta.cover_image}
                description={post.postMeta.description}
                date={post.postMeta.date}
                category={post.postMeta.category}
              />
            ))}
        </div>
        <button className="bg-dark-green hover:bg-transparent border-2 border-dark-green text-yellow hover:text-dark-green shadow-md rounded-xl px-5 py-2 text-xl my-3">
          <Link href="/courses">View More</Link>
        </button>
      </section>

      <Subscribe />
    </main>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("postsData"));

  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "");

    const frontmatter = fs.readFileSync(
      path.join("postsData", filename),
      "utf8"
    );

    const { data: postMeta } = matter(frontmatter);

    return {
      slug,
      postMeta,
    };
  });

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  };
}
