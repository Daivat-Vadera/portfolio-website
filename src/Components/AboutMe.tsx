import Image from "next/image";
import AboutMeImage from "../../public/PW_About_Me_Image.svg";
const AboutMe = () => {
  return (
    <section className="text-left" id="about-me">
      <div className="inner-wrap">
        <div className="container mx-auto">
          <div className="flex items-center justify-center flex-col lg:flex-row gap-12 px-8">
            <div className=" w-full lg:w-5/12">
              <Image
                src={AboutMeImage}
                alt="About Me"
                width={525}
                height={572}
                className="w-full h-auto"
              />
            </div>
            <div className="w-full lg:w-7/12">
              <div className="intro-wrap">
                <div className="title-wrap">
                  <h2 className="text-black">
                    About <span className="font-extrabold">Me</span>
                  </h2>
                </div>
              </div>
              <div className="content-wrap">
                <p>
                  I&apos;mm a passionate, self-proclaimed designer who specializes in
                  full stack development (React.js & Node.js). I am very
                  enthusiastic about bringing the technical and visual aspects
                  of digital products to life. User experience, pixel perfect
                  design, and writing clear, readable, highly performant code
                  matters to me.
                </p>
                <p>
                  I began my journey as a web developer in 2015, and since then,
                  I&apos;mve continued to grow and evolve as a developer, taking on
                  new challenges and learning the latest technologies along the
                  way. Now, in my early thirties, 7 years after starting my web
                  development journey, I&apos;mm building cutting-edge web
                  applications using modern technologies such as Next.js,
                  TypeScript, Nestjs, Tailwindcss, Supabase and much more.
                </p>
                <p>
                  When I&apos;mm not in full-on developer mode, you can find me
                  hovering around on twitter or on indie hacker, witnessing the
                  journey of early startups or enjoying some free time. You can
                  follow me on Twitter where I share tech-related bites and
                  build in public, or you can follow me on GitHub.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
