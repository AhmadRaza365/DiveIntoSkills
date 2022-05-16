import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

import Image from "next/image";
import Link from "next/link";
import Card from "../../components/Card";

import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

export default function Posts({frontmatter:{title, date, cover_image}, post, content}) {
  return (
    <main className="mt-24">
      <article className="mx-2 md:mx-16">
        <h1 className="text-dark-green text-xl md:text-4xl font-bold text-left my-3">
          {title}
        </h1>
        <div className="flex items-center justify-between mx-2 md:mx-10">
          <div className="flex items-center gap-2">
            <div className="w-14 md:w-20">
              <Image
                className="rounded-full "
                src="/images/ahmadraza365.webp"
                alt="AhmadRaza365"
                width={150}
                height={150}
              />
            </div>
            <h3 className="text-dark-green text-lg md:text-2xl font-bold">
              Ahmad Raza
            </h3>
          </div>
          <p className="text-lg">{date}</p>
        </div>
        <Image
          className="rounded-md"
          // src="https://images.unsplash.com/photo-1637637126621-ae60cdea68a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          src={cover_image}
          alt="AhmadRaza365"
          width={1280}
          height={520}
        />
        <div dangerouslySetInnerHTML={{__html: marked(content)}} >
          
        </div>
      </article>
      <div className="my-10">
        <h3 className="text-dark-green text-3xl md:text-4xl font-bold text-center ">
        Sharing is Caring
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
      <section className="flex flex-col items-center my-5">
        <h2 className="text-dark-green text-4xl font-bold text-center my-3">
        Read Related Blogs
        </h2>
        <div className="flex flex-wrap justify-center items-center">
          {/* <Card />
          <Card />
          <Card />
          <Card /> */}
        </div>
       
      </section>
    </main>
  );
}

   export async function getStaticPaths() {
    const files = fs.readdirSync(path.join('postsData'))
    const paths = files.map(filename => ({
          params: {
            post: filename.replace('.md', '')
          }
        }))
    return {
      paths,
      fallback: false,
    };
  }

export async function getStaticProps({params: {post}}) {
 
  const markdownWithMetadata = fs.readFileSync(path.join('postsData', post + '.md'), 'utf8')
  const {data: frontmatter,content} = matter(markdownWithMetadata)

  return {
    props:{
      frontmatter,
      post,
      content,
    },
  }
}