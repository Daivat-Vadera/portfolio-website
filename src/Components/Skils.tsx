import React from "react";
import skills from "../data/Skils.json";

const Skills = () => {
  return (
    <section className='text-center' id='skills'>
      <div className='inner-wrap'>
        <div className='container mx-auto px-8'>
          <div className='intro-wrap'>
            <div className='title-wrap'>
              <h2>
                My <span className='font-extrabold'>Skills</span>
              </h2>
            </div>
          </div>
          <div className='content-wrap mt-5 py-5'>
            <div className='skill-wrap flex justify-center items-center flex-wrap flex-row gap-8 lg:gap-16 xl:gap-20'>
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className='skill-item lg:w-[16%] w-[43%] sm:w-[30%] p-6 flex flex-col items-center rounded border-2 border-black transition-all duration-300 group'
                >
                  <div
                    className='skill-icon'
                    dangerouslySetInnerHTML={{ __html: skill.icon }}
                  />
                  <div className='skill-content'>
                    <h3 className='mt-8 font-bold text-xl leading-6'>
                      {skill.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
