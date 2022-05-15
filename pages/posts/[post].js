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

export default function Posts() {
  return (
    <main className="mt-24">
      <article className="mx-2 md:mx-16">
        <h1 className="text-dark-green text-xl md:text-4xl font-bold text-left my-3">
          There is no one who loves pain itself, who seeks after it and wants to
          have it, because it is pain
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
          <p className="text-lg">22/02/22</p>
        </div>
        <Image
          className="rounded-md"
          src="https://images.unsplash.com/photo-1637637126621-ae60cdea68a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="AhmadRaza365"
          width={1280}
          height={520}
        />
        <div>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit odio
            excepturi, inventore obcaecati dicta quas voluptates animi eius in
            ex labore dolorem alias similique ratione corporis voluptatum minima
            deleniti, dolores possimus fugiat assumenda, architecto illo eos
            est? Repudiandae ducimus necessitatibus, assumenda veritatis
            obcaecati, omnis accusamus consequuntur aliquam odio voluptates
            maxime nostrum! Facere temporibus est suscipit saepe corporis
            perferendis deleniti reprehenderit ratione amet totam quo, labore
            iusto molestiae repudiandae esse accusamus sapiente eligendi.
            Ratione, impedit. Doloribus reprehenderit corrupti, asperiores, quae
            amet ab omnis quo odit quaerat ullam veniam quis odio iste libero.
            Numquam rem labore, vitae odio porro sed officia culpa,
            reprehenderit consequuntur nisi repudiandae natus quae dicta
            perspiciatis sunt molestias doloribus necessitatibus! Nostrum
            architecto, necessitatibus id, aperiam voluptate facere velit rem
            quia eligendi, sed explicabo consequuntur saepe ratione assumenda
            laborum quaerat tempora possimus inventore quod sequi beatae ipsa?
            Corrupti eos omnis ipsam. Sed quae suscipit omnis tempora modi ad
            voluptas repellat officiis voluptatum tenetur. Necessitatibus
            exercitationem quaerat eos eveniet facilis deleniti dolorum quo at
            repellat voluptatem delectus, odio enim reiciendis consectetur
            praesentium tenetur harum earum nobis commodi esse pariatur non
            repudiandae provident? Repellendus autem mollitia ut, suscipit vel
            voluptate ipsum eos reprehenderit aliquid, veniam quas iure enim
            illo velit voluptates?
          </p>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit odio
            excepturi, inventore obcaecati dicta quas voluptates animi eius in
            ex labore dolorem alias similique ratione corporis voluptatum minima
            deleniti, dolores possimus fugiat assumenda, architecto illo eos
            est? Repudiandae ducimus necessitatibus, assumenda veritatis
            obcaecati, omnis accusamus consequuntur aliquam odio voluptates
            maxime nostrum! Facere temporibus est suscipit saepe corporis
            perferendis deleniti reprehenderit ratione amet totam quo, labore
            iusto molestiae repudiandae esse accusamus sapiente eligendi.
            Ratione, impedit. Doloribus reprehenderit corrupti, asperiores, quae
            amet ab omnis quo odit quaerat ullam veniam quis odio iste libero.
            Numquam rem labore, vitae odio porro sed officia culpa,
            reprehenderit consequuntur nisi repudiandae natus quae dicta
            perspiciatis sunt molestias doloribus necessitatibus! Nostrum
            architecto, necessitatibus id, aperiam voluptate facere velit rem
            quia eligendi, sed explicabo consequuntur saepe ratione assumenda
            laborum quaerat tempora possimus inventore quod sequi beatae ipsa?
            Corrupti eos omnis ipsam. Sed quae suscipit omnis tempora modi ad
            voluptas repellat officiis voluptatum tenetur. Necessitatibus
            exercitationem quaerat eos eveniet facilis deleniti dolorum quo at
            repellat voluptatem delectus, odio enim reiciendis consectetur
            praesentium tenetur harum earum nobis commodi esse pariatur non
            repudiandae provident? Repellendus autem mollitia ut, suscipit vel
            voluptate ipsum eos reprehenderit aliquid, veniam quas iure enim
            illo velit voluptates?
          </p>
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
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
       
      </section>
    </main>
  );
}
