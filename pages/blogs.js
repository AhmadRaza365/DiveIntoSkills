import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { sortByDate } from "../utils";

import Link from "next/link";
import Card from "../components/Card";
import Head from "next/head";

export default function Blogs({ posts }) {
  return (
    <main className="mt-24">
      <Head>
        {/* Favicons */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicons/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#ffed0e" />
        <meta name="theme-color" content="#ffed0e" />

        {/* Title, Desc, Keywords, Author and Robots tags */}
        <title>
           Latest Articles to Upgrade Skills - Dive Into Skills
        </title>
        <meta
          name="description"
          content="Want to Master Web Development? DiveIntoSkills is here to help you with amazing resources that are available for free!"
        />

        <meta
          name="keywords"
          content="Dive Into Skills, DiveIntoSkills,Free Courses, Latest Articles, Blog Posts, Blogs, Posts, Skill, Skills, Web Development, Development, Programming"
        />
        <meta name="author" content="AhmadRaza365" />
        <meta name="robots" content="index, follow" />

        {/* og Tags */}
        <meta
          property="og:title"
          content="Latest Articles to Upgrade Skills - Dive Into Skills"
        />
        <meta property="og:site_name" content="Dive Into Skills" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://diveintoskills.com/blogs" />
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
        <meta name="twitter:title" content="Read Latest Articles to Upgrade Skills - Dive Into Skills" />
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

      <h1 className="text-dark-green text-4xl font-bold text-center my-3">
        Latest Blogs
      </h1>

      <section className="flex flex-col items-center my-5">
        <div className="flex flex-wrap justify-center items-center">
          {posts
            .filter((post, index) => post.postMeta.type == "post")
            .map((post, index) => (
              <Card
                key={post.slug}
                title={post.postMeta.title}
                slug={post.slug}
                image={post.postMeta.cover_image}
                description={post.postMeta.excerpt}
                date={post.postMeta.date}
              />
            ))}
        </div>
      </section>
    </main>
  );
}

// Fetching Posts
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
