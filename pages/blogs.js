import Link from "next/link";
import Card from "../components/Card";

export default function Blogs() {
  return (
    <main className="mt-24">
      <h2 className="text-dark-green text-4xl font-bold text-center my-3">
        Latest Blogs
      </h2>
      <section className="flex flex-col items-center my-5">
        
        <div className="flex flex-wrap justify-center items-center">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        
      </section>
    </main>
  );
}
