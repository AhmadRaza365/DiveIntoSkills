import Head from "next/head";
import Image from "next/image";
export default function Home() {
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
          <form className="flex flex-row max-w-sm ">
            <input
              className="py-2 px-2 md:px-5 grow border-2 border-yellow bg-transparent rounded-3xl text-base md:text-lg outline-none"
              type="email"
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
        </div>
        <Image
          src="/heroImage.svg"
          alt="Boy using laptop"
          width={670}
          height={436}
        />
      </section>
    </div>
  );
}
