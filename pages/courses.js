import fs from "fs";
import path from "path";
import matter from "gray-matter";
import {sortByDate} from '../utils';
import Link from "next/link";
import Card from "../components/Card";

export default function Courses({ posts }) {
  return (
    <main className="mt-24">
      <h2 className="text-dark-green text-4xl font-bold text-center my-3">
        Latest Courses
      </h2>

      <section className="flex flex-col items-center my-5">
        <div className="flex flex-wrap justify-center items-center">
        {posts.filter((post, index) => post.postMeta.type == 'course').map((post, index) => (
        <Card
          key={post.slug}
          title = {post.postMeta.title}
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

// Fetching Data
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
