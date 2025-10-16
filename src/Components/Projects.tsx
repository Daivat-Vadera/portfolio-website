"use client";
import Image from "next/image";
import FirstProjectImage01 from "../../public/Project_01_Images/01.png";
import FirstProjectImage02 from "../../public/Project_01_Images/02.png";
import FirstProjectImage03 from "../../public/Project_01_Images/03.png";
import FirstProjectImage04 from "../../public/Project_01_Images/04.png";
import FirstProjectImage05 from "../../public/Project_01_Images/05.png";
import FirstProjectImage06 from "../../public/Project_01_Images/06.png";
import FirstProjectImage07 from "../../public/Project_01_Images/07.png";
import FirstProjectImage08 from "../../public/Project_01_Images/08.png";
import FirstProjectImage09 from "../../public/Project_01_Images/09.png";

import SecondProjectImage01 from "../../public/Project_02_Images/01.png";
import SecondProjectImage02 from "../../public/Project_02_Images/02.png";
import SecondProjectImage03 from "../../public/Project_02_Images/03.png";
import SecondProjectImage04 from "../../public/Project_02_Images/04.png";
import SecondProjectImage05 from "../../public/Project_02_Images/05.png";
import SecondProjectImage06 from "../../public/Project_02_Images/06.png";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const Projects = () => {
  const FirstProjectImages = [
    FirstProjectImage01,
    FirstProjectImage02,
    FirstProjectImage03,
    FirstProjectImage04,
    FirstProjectImage05,
    FirstProjectImage06,
    FirstProjectImage07,
    FirstProjectImage08,
    FirstProjectImage09,
  ];
  const SecondProjectImages = [
    SecondProjectImage01,
    SecondProjectImage02,
    SecondProjectImage03,
    SecondProjectImage04,
    SecondProjectImage05,
    SecondProjectImage06,
  ];
  return (
    <section className="text-center bg-black" id="projects">
      <div className="inner-wrap">
        <div className="container mx-auto px-8">
          <div className="intro-wrap">
            <div className="title-wrap">
              <h2 className="text-white">
                My <span className="font-extrabold">Projects</span>
              </h2>
            </div>
          </div>
          <div className="content-wrap mt-5 py-5 text-left">
            <div className="project-wrap overflow-hidden flex flex-col lg:flex-row gap-12 lg:gap-16 flex-wrap">
              <div className="project-item w-full">
                <div className="project-content">
                  <div className="flex justify-between items-center flex-col lg:flex-row gap-12">
                    <div className="w-full lg:w-7/12">
                      <Swiper
                        navigation={false}
                        autoplay={true}
                        modules={[Navigation, Autoplay]}
                        className="mySwiper"
                      >
                        {FirstProjectImages.map((image, index) => (
                          <SwiperSlide key={index}>
                            <Image
                              src={image}
                              alt={`Project ${index + 1}`}
                              className="w-full h-auto"
                            />
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>
                    <div className="w-full lg:w-5/12 flex items-center">
                      <div className="project-info flex flex-col gap-6 lg:gap-7">
                        <h2 className="text-5xl font-extrabold text-white">
                          01
                        </h2>
                        <h3 className="text-white font-bold text-[32px]">
                          Book Wise (Library Management System)
                        </h3>
                        <p className="text-zinc-300 font-normal text-base leading-6 !mt-0">
                          {/* Book Wise is a library management system that allows
                          users to manage their library collections, including
                          adding, removing, and searching for books. It provides
                          a simple and intuitive interface for users to view and
                          manage their library collections, and it is easy to
                          use and understand. It is a great tool for anyone who
                          needs to keep track of their library collections. */}
                          A modern, full‑stack library management platform that
                          streamlines catalog browsing, borrowing, returns,
                          receipts, and admin operations for a university. Built
                          with Next.js 15 (App Router) and React 19, it delivers
                          a fast, accessible, and secure experience for students
                          and admins.{" "}
                        </p>
                        {/* <p className="text-zinc-300 font-normal text-base leading-6 !mt-0">
                          What it does Catalog browsing and discovery with rich
                          book details, cover art, embedded trailers, and
                          summaries. Borrow and return workflow with due dates,
                          status tracking, and receipts. User onboarding and
                          verification including account requests, role‑based
                          access, and profile management. Admin dashboard to
                          manage books, users, and incoming requests with full
                          CRUD and moderation.
                        </p> */}
                        <p className="text-zinc-300 font-normal text-base leading-6 !mt-0">
                          Tech stack : Next.js, TypeScript, React, Tailwind
                          CSS,shadcn, Drizzle + PostgreSQL , Clerk, React
                          Hook Form, Zod,
                        </p>
                        {/* <div className="text-zinc-300">
                          <h4>Core Technologies</h4>
                          <ul>
                            <li>
                              Frontend Framework: Next.js 15.1.4 (React 19) with
                              TypeScript{" "}
                            </li>
                            <li>
                              Styling: Tailwind CSS with custom theming and
                              animations{" "}
                            </li>
                            <li>
                              UI Components: Radix UI primitives with custom
                              shadcn/ui components{" "}
                            </li>
                            <li>
                              Database:PostgreSQL with Drizzle ORM
                              Authentication:NextAuth.js (v5 beta) Deployment:
                              Vercel (indicated by Next.js and Vercel-specific
                              packages){" "}
                            </li>
                          </ul>
                          <h4>Frontend UI</h4>
                          <ul>
                            <li>UI Framework: React 19 with TypeScript </li>
                            <li>
                              Styling:
                              <ul>
                                <li>Tailwind CSS for utility-first styling</li>
                                <li>
                                  Tailwind Merge for class name composition
                                </li>
                                <li>
                                  Class Variance Authority for component
                                  variants
                                </li>
                              </ul>
                            </li>
                            <li>
                              UI Components:
                              <ul>
                                <li>
                                  Radix UI primitives (Dialog, Dropdown, Toast,
                                  etc.)
                                </li>
                                <li>Custom shadcn/ui components</li>
                                <li>Lucide React for icons</li>
                                <li>React Colorful for color picking</li>
                              </ul>
                            </li>
                            <li>
                              Form Handling:React Hook Form with Zod validation
                            </li>
                            <li>PDF Generation: @react-pdf/renderer</li>
                            <li>Date Handling: date-fns and dayjs</li>
                          </ul>
                          <h4>Backend</h4>
                          <ul>
                            <li>Runtime: Node.js (via Next.js API routes)</li>
                            <li>
                              Database:
                              <ul>
                                <li>PostgreSQL (hosted on Neon) </li>
                                <li>
                                  Drizzle ORM for database operations and
                                  migrations
                                </li>
                              </ul>
                              <li>
                                Authentication: NextAuth.js with custom
                                credentials provider{" "}
                              </li>
                              <li>Rate Limiting: Upstash Redis</li>
                              <li>Email: Nodemailer for email functionality</li>
                              <li>
                                File Storage: ImageKit.io for image management
                              </li>
                              <h4>Development Tools </h4>
                              <li>
                                Build Tool: Turbopack (enabled in dev mode)
                                <li>Type Checking: TypeScript 5</li>
                                <li>
                                  Linting: ESLint with Next.js configuration
                                </li>
                                <li>Code Formatting: Prettier</li>
                                <li>
                                  Environment Management: dotenv for environment
                                  variables{" "}
                                </li>
                                <h4>Key Features</h4>
                                <li>
                                  Server-side rendering (SSR) and static site
                                  generation (SSG) with Next.js{" "}
                                </li>
                                <li>Type-safe API routes </li>
                                <li>Database migrations with Drizzle Kit</li>
                                <li>
                                  Modern React patterns (hooks, server
                                  components)
                                </li>
                                <li>Responsive design with Tailwind CSS</li>
                              </li>
                            </li>
                          </ul>
                        </div> */}
                        <div className="flex gap-5">
                          <a
                            href="https://university-library-rosy-eight.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <button className="btn btn-primary bg-zinc-500 border-zinc-500 text-white hover:bg-zinc-300 hover:border-zinc-300 hover:text-black shadow-none">
                              View Live
                            </button>
                          </a>
                          <a
                            href="https://github.com/Daivat-Vadera/university-library"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <button className="btn btn-primary bg-transparent border-white text-white hover:bg-zinc-500 hover:border-zinc-500 hover:text-white shadow-none">
                              View Code
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="project-item w-full">
                <div className="project-content">
                  <div className="flex justify-between items-center flex-col lg:flex-row gap-12">
                    <div className="w-full lg:w-7/12 order-1 lg:order-2">
                      <Swiper
                        navigation={false}
                        autoplay={true}
                        modules={[Navigation, Autoplay]}
                        className="mySwiper"
                      >
                        {SecondProjectImages.map((image, index) => (
                          <SwiperSlide key={index}>
                            <Image
                              src={image}
                              alt={`Project ${index + 1}`}
                              className="w-full h-auto"
                            />
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>
                    <div className="w-full lg:w-5/12 flex items-center  order-2 lg:order-1">
                      <div className="project-info flex flex-col gap-6 lg:gap-7">
                        <h2 className="text-5xl font-extrabold text-white">
                          02
                        </h2>
                        <h3 className="text-white font-bold text-[32px]">
                          Calen Sync
                        </h3>
                        <p className="text-zinc-300 font-normal text-base leading-6 !mt-0">
                          {/* Calendar Sync is a web application that allows users
                          to sync their Google Calendar events with their local
                          calendar. It provides a simple and intuitive interface
                          for users to view and manage their events, and it is
                          easy to use and understand. It is a great tool for
                          anyone who needs to keep track of their events and
                          appointments. */}
                          Calen Sync is a scheduling and calendar-sync
                          application that helps users create, manage, and share
                          meetings seamlessly. It integrates with Google
                          Calendar to keep events synchronized, handles time
                          zones elegantly, and automates email notifications for
                          confirmations and reminders. Built with a type-safe,
                          full-stack React/Next.js architecture, it prioritizes
                          performance, accessibility, and developer ergonomics.
                        </p>
                        <p className="text-zinc-300 font-normal text-base leading-6 !mt-0">
                          Tech stack : Next.js, TypeScript,React, Tailwind CSS,
                          shadcn, Prisma + MongoDB, NextAuth.js, Clerk, Zod
                        </p>
                        <div className="flex gap-5">
                          <a
                            href="https://calen-sync-ecru.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <button className="btn btn-primary bg-zinc-500 border-zinc-500 text-white hover:bg-zinc-300 hover:border-zinc-300 hover:text-black shadow-none">
                              View Live
                            </button>
                          </a>
                          <a
                            href="https://github.com/Daivat-Vadera/calen-sync"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <button className="btn btn-primary bg-transparent border-white text-white hover:bg-zinc-500 hover:border-zinc-500 hover:text-white shadow-none">
                              View Code
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="project-item">
                <div className="project-content">
                  <div className="flex justify-between items-center flex-col lg:flex-row">
                    <div className="w-full lg:w-6/12">
                      <Image
                        src={ThirdProjectImage01}
                        alt="Project"
                        width={530}
                        height={400}
                        className="w-full h-auto"
                      />
                    </div>
                    <div className="w-full lg:w-6/12 flex items-center">
                      <div className="project-info flex flex-col gap-6 lg:gap-7">
                        <h2 className="text-5xl font-extrabold text-white">
                          03
                        </h2>
                        <h3 className="text-white font-bold text-[32px]">
                          Blog Website Template
                        </h3>
                        <p className="text-zinc-300 font-normal text-base leading-6 !mt-0">
                          I&apos;mm Evren Shah Lorem Ipsum is simply dummy text
                          of the printing and typesetting industry. Lorem Ipsum
                          has been the industry&apos;ms standard dummy text ever
                          since the 1500s, when an unknown printer took a galley
                          of type and scrambled it to specimen book.
                        </p>
                        <div className="flex gap-5">
                          <a
                            href="https://github.com/evrenshah/crypto-screener"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <button className="btn btn-primary bg-zinc-500 border-zinc-500 text-white hover:bg-zinc-300 hover:border-zinc-300 hover:text-black">
                              View Project
                            </button>
                          </a>
                          <a
                            href="https://github.com/evrenshah/crypto-screener"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <button className="btn btn-primary bg-transparent border-white text-white hover:bg-zinc-500 hover:border-zinc-500 hover:text-white">
                              View Code
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
