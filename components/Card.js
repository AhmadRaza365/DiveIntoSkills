import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Card(props) {
    return (
        <div className="bg-light-yellow shadow-md w-72 rounded-2xl mx-3 my-2">
      
        <Image
        className="rounded-t-2xl"
          src={props.image}
          alt={props.title}
          width={670}
          height={436}
        />
        <div className="bg-dark-green relative -top-16 left-0 text-yellow w-fit px-5 py-2 rounded-r-full">Category</div>
      <div className="px-4 pb-4 -mt-8">
        <h2 className="text-dark-green font-bold text-xl cursor-pointer ">
      <Link href={`/posts/${props.slug}`}>
          {props.title} 
        </Link>
        </h2>
        <p className="text-green text-lg my-2">
          {props.description}
        </p>
        <div className="text-light-green text-base flex justify-between ">
            <time>{props.date}</time>
            <p>By: Ahmad Raza</p>
        </div>
      </div>
    </div>
  );
}
