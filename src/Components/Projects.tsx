import Image from "next/image";
import ProjectImage01 from "../../public/PW_Project_Image_01.svg";
import ProjectImage02 from "../../public/PW_Project_Image_02.svg";
import ProjectImage03 from "../../public/PW_Project_Image_03.svg";

const Projects = () => {
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
            <div className="project-wrap flex flex-col lg:flex-row gap-12 lg:gap-6 flex-wrap">
              <div className="project-item">
                <div className="project-content">
                  <div className="flex justify-between items-center flex-col lg:flex-row">
                    <div className="w-full lg:w-6/12">
                      <Image
                        src={ProjectImage01}
                        alt="Project"
                        width={530}
                        height={400}
                        className="w-full h-auto"
                      />
                    </div>
                    <div className="w-full lg:w-6/12 flex items-center">
                      <div className="project-info flex flex-col gap-6 lg:gap-7">
                        <h2 className="text-5xl font-extrabold text-white">
                          01
                        </h2>
                        <h3 className="text-white font-bold text-[32px]">
                          Crypto Screener Application
                        </h3>
                        <p className="text-zinc-300 font-normal text-base leading-6 !mt-0">
                          I'm Evren Shah Lorem Ipsum is simply dummy text of the
                          printing and typesetting industry. Lorem Ipsum has
                          been the industry's standard dummy text ever since the
                          1500s, when an unknown printer took a galley of type
                          and scrambled it to specimen book.
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
              </div>
              <div className="project-item">
                <div className="project-content">
                  <div className="flex justify-between items-center flex-col lg:flex-row">
                    <div className="w-full lg:w-6/12 order-1 lg:order-2">
                      <Image
                        src={ProjectImage02}
                        alt="Project"
                        width={530}
                        height={400}
                        className="w-full h-auto"
                      />
                    </div>
                    <div className="w-full lg:w-6/12 flex items-center  order-2 lg:order-1">
                      <div className="project-info flex flex-col gap-6 lg:gap-7">
                        <h2 className="text-5xl font-extrabold text-white">
                          02
                        </h2>
                        <h3 className="text-white font-bold text-[32px]">
                          Euphoria - Ecommerce (Apparels) Website Template
                        </h3>
                        <p className="text-zinc-300 font-normal text-base leading-6 !mt-0">
                          I'm Evren Shah Lorem Ipsum is simply dummy text of the
                          printing and typesetting industry. Lorem Ipsum has
                          been the industry's standard dummy text ever since the
                          1500s, when an unknown printer took a galley of type
                          and scrambled it to specimen book. when an unknown
                          printer took a galley of type and scrambled it to
                          specimen book.
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
              </div>
              <div className="project-item">
                <div className="project-content">
                  <div className="flex justify-between items-center flex-col lg:flex-row">
                    <div className="w-full lg:w-6/12">
                      <Image
                        src={ProjectImage03}
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
                          I'm Evren Shah Lorem Ipsum is simply dummy text of the
                          printing and typesetting industry. Lorem Ipsum has
                          been the industry's standard dummy text ever since the
                          1500s, when an unknown printer took a galley of type
                          and scrambled it to specimen book.
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
