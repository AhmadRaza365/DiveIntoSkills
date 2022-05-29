import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

import Image from "next/image";
import Link from "next/link";

import Head from "next/head";
import Subscribe from "../../components/Subscribe";

export default function Posts({
  frontmatter: {
    title,
    date,
    cover_image,
    description,
    keywords,
    author,
    slug,
    type,
  },
  post,
  content,
}) {
  return (
    <main className="mt-24">
      <Head>
        {/* Title, Desc, Keywords, Author, image and Robots tags */}
        <title>{title}</title>
        <meta name="description" content={description} />

        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <meta name="robots" content="index, follow" />
        <meta
          name="image"
          content={`https://diveintoskills.com${cover_image}`}
        />
        {/* og Tags */}
        <meta property="og:title" content={title} />
        <meta property="og:site_name" content="Dive Into Skills" />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content={`https://diveintoskills.com/${slug}`}
        />
        <meta property="og:locale" content="en_US" />
        <meta
          property="og:image"
          content={`https://diveintoskills.com${cover_image}`}
        />
        <meta property="og:description" content={description} />

        {/* Twitter Card Tags */}

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@DiveIntoSkills" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:creator" content="@AhmadRaza365" />
        <meta name="twitter:description" content={description} />
        <meta
          name="twitter:image"
          content={`https://diveintoskills.com${cover_image}`}
        />
        <script
          async
          src="https://platform.twitter.com/widgets.js"
          charset="utf-8"
        ></script>
      </Head>
      <article className="mx-2 md:mx-16">
        <h1 className="text-dark-green text-xl md:text-4xl font-bold text-left my-3">
          {title}
        </h1>
        <div className="flex items-center justify-between mx-2 md:mx-10">
          <div className="flex items-center gap-2">
            <div className="w-14 md:w-16">
              <Image
                className="rounded-full object-fill object-center"
                src="/images/author/ahmadraza365.jpg"
                alt="AhmadRaza365"
                width={150}
                height={150}
              />
            </div>
            <h3 className="text-dark-green text-lg md:text-2xl font-bold">
              <Link href='https://ahmadraza365.diveintoskills.com/'><a target='_blank'>{author}</a></Link>
            </h3>
          </div>
          <time className="text-lg">{date}</time>
        </div>
        <Image
          className="rounded-md object-cover object-top"
          src={cover_image}
          alt={title}
          width={1280}
          height={620}
        />
        <div
          className="mx-2 my-5 prose prose-slate md:prose-lg max-w-none prose-img:rounded-xl prose-img:m-auto"
          dangerouslySetInnerHTML={{ __html: marked(content) }}
        ></div>
      </article>

      <div className="flex justify-center">
        <button className="bg-dark-green m-auto hover:bg-transparent border-2 border-dark-green text-yellow hover:text-dark-green shadow-md rounded-xl px-5 py-2 text-xl my-3">
          <Link href={type === "course" ? "/courses" : "/blogs"}>
            Get More Related Content
          </Link>
        </button>
      </div>
      <Subscribe />
    </main>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("postsData"));
  const paths = files.map((filename) => ({
    params: {
      post: filename.replace(".md", ""),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { post } }) {
  const markdownWithMetadata = fs.readFileSync(
    path.join("postsData", post + ".md"),
    "utf8"
  );
  const { data: frontmatter, content } = matter(markdownWithMetadata);

  return {
    props: {
      frontmatter,
      post,
      content,
    },
  };
}
