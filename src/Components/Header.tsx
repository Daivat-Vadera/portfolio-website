"use client";
import { useState, useEffect } from "react";
import { scrollToSection } from "@/utils/smoothScroll";
const Header = () => {
  const [activeLink, setActiveLink] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    section: string
  ) => {
    setActiveLink(section);
    scrollToSection(e);
  };
  return (
    <div className='container mx-auto fixed top-0 left-0 right-0 z-50 max-w-full'>
      <div
        className={`navbar bg-base-100 px-8 flex justify-center lg:hidden transition-all duration-300 ${isScrolled ? "rounded-b-2xl navbar-custom-shadow py-3" : "py-6"}`}
      >
        <a
          href='#home'
          className={`btn btn-ghost font-ms-madi hover:bg-transparent hover:outline-none hover:border-none hover:shadow-none transition-all duration-300 ${isScrolled ? "text-3xl xl:text-4xl 2xl:text-5xl" : "text-4xl xl:text-5xl 2xl:text-6xl"}`}
          onClick={(e) => handleNavClick(e, "home")}
        >
          Daivat Vadera
        </a>
      </div>
      <div
        className={`navbar bg-base-100 px-8 hidden lg:flex transition-all duration-300 ${isScrolled ? "rounded-b-2xl navbar-custom-shadow py-3" : "shadow-none py-6"}`}
      >
        <div className='navbar-start'>
          {/* <div className="dropdown">
            <div
              tabIndex={0}
              role='button'
              className='btn btn-ghost lg:hidden hover:bg-transparent'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                {" "}
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h8m-8 6h16'
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow gap-2'
            >
              <li>
                <a
                  href='#skills'
                  onClick={(e) => handleNavClick(e, "skills")}
                  className={
                    activeLink === "skills"
                      ? "text-xl px-4 py-2.5 bg-neutral text-white"
                      : "text-xl px-4 py-2.5"
                  }
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href='#experience'
                  onClick={(e) => handleNavClick(e, "experience")}
                  className={
                    activeLink === "experience"
                      ? "text-xl px-4 py-2.5 bg-neutral text-white"
                      : "text-xl px-4 py-2.5"
                  }
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href='#about-me'
                  onClick={(e) => handleNavClick(e, "about-me")}
                  className={
                    activeLink === "about-me"
                      ? "text-xl px-4 py-2.5 bg-neutral text-white"
                      : "text-xl px-4 py-2.5"
                  }
                >
                  About Me
                </a>
              </li>
              <li>
                <a
                  href='#projects'
                  onClick={(e) => handleNavClick(e, "projects")}
                  className={
                    activeLink === "projects"
                      ? "text-xl px-4 py-2.5 bg-neutral text-white"
                      : "text-xl px-4 py-2.5"
                  }
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href='#contact-me'
                  onClick={(e) => handleNavClick(e, "contact-me")}
                  className={
                    activeLink === "contact-me"
                      ? "text-xl px-4 py-2.5 bg-neutral text-white"
                      : "text-xl px-4 py-2.5"
                  }
                >
                  Contact Me
                </a>
              </li>
            </ul>
          </div> */}
          <a
            href='#home'
            className={`btn btn-ghost font-ms-madi hover:bg-transparent hover:outline-none hover:border-none hover:shadow-none transition-all duration-300 ${isScrolled ? "text-3xl xl:text-4xl 2xl:text-5xl" : "text-4xl xl:text-5xl 2xl:text-6xl"}`}
            onClick={(e) => handleNavClick(e, "home")}
          >
            Daivat Vadera
          </a>
        </div>
        <div className='navbar-center hidden lg:flex'>
          <ul className='menu menu-horizontal px-1 gap-2'>
            <li>
              <a
                href='#skills'
                onClick={(e) => handleNavClick(e, "skills")}
                className={`${
                  activeLink === "skills" ? "bg-neutral text-white" : ""
                } transition-all duration-300 ${
                  isScrolled
                    ? "xl:text-lg text-sm px-3 py-1.5"
                    : "xl:text-xl text-base px-4 py-2.5"
                }`}
              >
                Skills
              </a>
            </li>

            <li>
              <a
                href='#experience'
                onClick={(e) => handleNavClick(e, "experience")}
                className={`${
                  activeLink === "experience" ? "bg-neutral text-white" : ""
                } transition-all duration-300 ${
                  isScrolled
                    ? "xl:text-lg text-sm px-3 py-1.5"
                    : "xl:text-xl text-base px-4 py-2.5"
                }`}
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href='#about-me'
                onClick={(e) => handleNavClick(e, "about-me")}
                className={`${
                  activeLink === "about-me" ? "bg-neutral text-white" : ""
                } transition-all duration-300 ${
                  isScrolled
                    ? "xl:text-lg text-sm px-3 py-1.5"
                    : "xl:text-xl text-base px-4 py-2.5"
                }`}
              >
                About Me
              </a>
            </li>
            <li>
              <a
                href='#projects'
                onClick={(e) => handleNavClick(e, "projects")}
                className={`${
                  activeLink === "projects" ? "bg-neutral text-white" : ""
                } transition-all duration-300 ${
                  isScrolled
                    ? "xl:text-lg text-sm px-3 py-1.5"
                    : "xl:text-xl text-base px-4 py-2.5"
                }`}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href='#contact-me'
                onClick={(e) => handleNavClick(e, "contact-me")}
                className={`${
                  activeLink === "contact-me" ? "bg-neutral text-white" : ""
                } transition-all duration-300 ${
                  isScrolled
                    ? "xl:text-lg text-sm px-3 py-1.5"
                    : "xl:text-xl text-base px-4 py-2.5"
                }`}
              >
                Contact Me
              </a>
            </li>
          </ul>
        </div>
        <div className='navbar-end'>
          <a
            target='_blank'
            href='../../Daivat_Vadera_Full_Stack_Web_Developer_Resume.pdf'
            className='btn btn-neutral text-base-100 lg:text-xl text-base leading-6 lg:py-4 py-2 lg:px-5 px-3 inline-block h-auto rounded-sm hover:bg-zinc-500 hover:border-zinc-500'
          >
            Resume{" "}
            <span className='ml-2 inline-block vertical-align-middle  '>
              <svg
                width='20'
                height='20'
                viewBox='0 0 20 20'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M17.5 12.5V13.5C17.5 14.9001 17.5 15.6002 17.2275 16.135C16.9878 16.6054 16.6054 16.9878 16.135 17.2275C15.6002 17.5 14.9001 17.5 13.5 17.5H6.5C5.09987 17.5 4.3998 17.5 3.86502 17.2275C3.39462 16.9878 3.01217 16.6054 2.77248 16.135C2.5 15.6002 2.5 14.9001 2.5 13.5V12.5M14.1667 8.33333L10 12.5M10 12.5L5.83333 8.33333M10 12.5V2.5'
                  stroke='white'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
