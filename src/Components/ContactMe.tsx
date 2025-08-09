"use client";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
export const contactFormSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.email("Invalid email").min(1, "Email is required"),
    message: z.string().min(1, "Message is required"),
  });


const ContactMe = () => {
    const { register, handleSubmit } = useForm<z.infer<typeof contactFormSchema>>({
        resolver: zodResolver(contactFormSchema),
      });
      const onSubmit = (data: z.infer<typeof contactFormSchema>) => {
        console.log(data);
      };
  return (
    <section className="text-left" id="contact-me">
      <div className="inner-wrap">
        <div className="container mx-auto">
          <div className="flex items-center justify-center gap-12 px-8 lg:px-0 flex-col lg:flex-row">
            <div className="w-full lg:w-6/12">
              <form action="" className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input w-full input-xl rounded-sm border-2 border-black"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="input w-full input-xl rounded-sm border-2 border-black"
                />
                <textarea
                  rows={5}
                  placeholder="How can I help you?"
                  className="textarea w-full resize-none textarea-xl rounded-sm border-2 border-black"
                ></textarea>
                <button className="btn btn-neutral text-base-100 lg:text-xl text-base leading-6 lg:py-4 py-2 lg:px-5 px-3 inline-block h-auto rounded-sm w-fit hover:bg-zinc-500 hover:border-zinc-500">
                  Get in touch
                </button>
              </form>
            </div>
            <div className="w-full lg:w-6/12">
              <div className="intro-wrap">
                <div className="title-wrap">
                  <h2 className="text-black !font-extrabold text-5xl leading-14 !p-0">
                    Let’s{" "}
                    <div className="relative inline-block">
                      <span className="font-extrabold outline-heading text-stroke ">
                        talk
                      </span>
                      <span className="font-extrabold outline-heading text-fill ">
                        talk
                      </span>
                    </div>{" "}
                    for <br />
                    Something special
                  </h2>
                </div>
              </div>
              <div className="content-wrap">
                <p className="description text-base font-normal text-zinc-500 mt-8">
                  I seek to push the limits of creativity to create
                  high-engaging, user-friendly, and memorable interactive
                  experiences.
                </p>
                <div className="mt-10 flex flex-col gap-4">
                  <a
                    href="mailto:daivatvadera18@gmail.com"
                    className="text-3xl font-semibold block"
                  >
                    daivatvadera18@gmail.com
                  </a>
                  <a
                    href="tel:+91 9033168588"
                    className="text-3xl font-semibold block"
                  >
                    +91 90331 68588
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
