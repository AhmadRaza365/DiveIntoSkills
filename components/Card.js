import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Card() {
    return (
        <div className="bg-light-yellow w-72 rounded-2xl mx-3 my-2">
      
        <Image
        className="rounded-t-2xl"
          src="https://images.unsplash.com/photo-1650894134653-a8d754d29f60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt="Boy using laptop"
          width={670}
          height={436}
        />
        <div className="bg-dark-green relative -top-16 left-0 text-yellow w-fit px-5 py-2 rounded-r-full">Category</div>
      <div className="px-4 pb-4 -mt-8">
        <h2 className="text-dark-green font-bold text-xl cursor-pointer ">
      <Link href="/work">
          Lorem ipsum dolor sit amet consect adipisicing elit. Laboriosam,
          ab?
        </Link>
        </h2>
        <p className="text-green text-lg my-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
          itaque minima. Ut, veniam molestiae voluptatem eum pariatur quaerat
          unde laudantium!
        </p>
        <div className="text-light-green text-base flex justify-between ">
            <p>22/02/2022</p>
            <p>By: Ahmad Raza</p>
        </div>
      </div>
    </div>
  );
}
