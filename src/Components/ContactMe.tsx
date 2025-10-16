"use client";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
export const contactFormSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.email("Invalid email").min(1, "Email is required"),
    message: z.string().min(1, "Message is required"),
  });


const ContactMe = () => {
  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false);
  const [isSubmitFailed, setIsSubmitFailed] = useState(false);
    const { handleSubmit,register ,setValue, formState: { errors }, formState: { isSubmitting }} = useForm<z.infer<typeof contactFormSchema>>({
        resolver: zodResolver(contactFormSchema),
      });
      const onSubmit = async (data: z.infer<typeof contactFormSchema>) => {
        const response = await fetch('/api/sendEmail/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        })
        if(response.ok){
          setIsSubmitSuccessful(true);
          setIsSubmitFailed(false);
          setValue('name', '');
          setValue('email', '');
          setValue('message', '');
        }else{
          setIsSubmitSuccessful(false);
          setIsSubmitFailed(true);
          setValue('name', '');
          setValue('email', '');
          setValue('message', '');
        }
      };
  return (
    <section className="text-left" id="contact-me">
      <div className="inner-wrap">
        <div className="container mx-auto px-8">
          <div className="flex items-center justify-center gap-12 px-8 lg:px-0 flex-col lg:flex-row">
            <div className="w-full lg:w-6/12">
              <form action="" className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
                <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input w-full input-xl rounded-sm border-2 border-black"
                  {...register('name')}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                </div>
                <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="input w-full input-xl rounded-sm border-2 border-black"
                  {...register('email')}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                </div>
               <div>
                <textarea
                  rows={5}
                  placeholder="How can I help you?"
                  className="textarea w-full resize-none textarea-xl rounded-sm border-2 border-black"
                  {...register('message')}
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
                </div>
                <div className="flex items-center justify-between gap-4">
                <button type="submit" className="btn btn-neutral text-base-100 lg:text-xl text-base leading-6 lg:py-4 py-2 lg:px-5 px-3 inline-block h-auto rounded-sm w-fit hover:bg-zinc-500 hover:border-zinc-500" disabled={isSubmitting}>
                  Get in touch
                  {isSubmitting && <span className="loading loading-spinner ml-4 inline-block align-middle"><svg fill="#000000FF" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"><animateTransform attributeName="transform" type="rotate" dur="0.75s" values="0 12 12;360 12 12" repeatCount="indefinite"/></path></svg></span>}
                </button> 
                {isSubmitSuccessful && <p className="text-green-500 text-sm !mt-0">Thank you for submitting your message! I will get back to you as soon as possible.</p>}
                {isSubmitFailed && <p className="text-red-500 text-sm !mt-0">Something went wrong. Please try again.</p>}
                </div>
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
                Looking to hire a Full Stack Developer for a project or long-term role? Tell me about the scope, timeline, and budget — I&apos;ll review and get back with next steps and availability.
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
