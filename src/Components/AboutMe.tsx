import Image from "next/image";
import AboutMeImage from "../../public/PW_About_Me_Image.svg";
const AboutMe = () => {
  //calculate experience
  const startDate = new Date("2022-08-01");
  const endDate = new Date();
  const experience = endDate.getFullYear() - startDate.getFullYear();
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
                  <h2 className="text-black !pt-0">
                    About <span className="font-extrabold">Me</span>
                  </h2>
                </div>
              </div>
              <div className="content-wrap">
                <p>
                  I&apos;m Daivat Vadera, a Full Stack Developer who turns product ideas into polished, production-ready web apps. I work across the stack — from pixel-perfect frontends with React / Next.js and Tailwind to robust backends using Node.js or .NET and databases like MongoDB and SQL. I care deeply about performance, accessibility, and maintainable code so the apps I build are fast, reliable, and easy for teams to extend.
                </p>
                <p>
                  I began my journey as a web developer in Aug 2022, and since then,
                  I&apos;mve continued to grow and evolve as a developer, taking on
                  new challenges and learning the latest technologies along the
                  way.  {experience} years after starting my web development journey, I&apos;m building cutting-edge web
                  applications using modern technologies such as Next.js, React js, TypeScript, Tailwindcss, Bootstrap and much more.
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
