"use client";

import React, { useState } from "react";
import { social } from "../../constants";
import Image from "next/image";
import Link from "next/link";
import { WavyBackground } from "@/components/ui/wavy-background";
import { sendMessage } from "@/actions";
import { enqueueSnackbar } from "notistack";
import { MessageType } from "../../new-types";

const Contact: React.FC = () => {
  const [message, setMessage] = useState<MessageType>({
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setMessage({
      ...message,
      [name]: value,
    });
  };

  const handleSendBtnValid = (): boolean => {
    return Object.keys(message).every(
      (key) => message[key as keyof MessageType].trim() !== ""
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = await sendMessage(message);
    if (result?.success) {
      setMessage({
        email: "",
        subject: "",
        message: "",
      });
      enqueueSnackbar(result.message, { variant: "success" });
    } else {
      enqueueSnackbar(result?.message, { variant: "error" });
    }
  };

  return (
    <section
      id="contact"
      className="h-max lg:p-14 md:p-6 p-4 w-screen bg-black text-white relative"
    >
      <WavyBackground>
        <h1 className="text-2xl lg:text-6xl md:text-4xl md:text-left lg:text-left text-center font-extrabold leading-relaxed">
          Contact
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-12 lg:mt-8 mt-2">
          <div className="col-span-6 text-center lg:place-self-start md:place-self-start place-self-center sm:text-left sm:justify-self-start">
            <h3 className="lg:text-2xl text-lg font-bold">Lets Connect</h3>
            <p className="text-sm leading-5 lg:w-[60%] text-slate-200 mt-2">
              I&apos;m currently looking for new opportunities, my inbox is
              always open. Whether you have a question or just want to say hi,
              I&apos;ll try my best to get back to you!
            </p>
            <div className="flex gap-3 lg:mt-4 mt-2 lg:justify-start md:justify-start justify-center">
              {social.map((soc, idx) => (
                <Link
                  href={soc.href}
                  target="_blank"
                  className="bg-white flex justify-center items-center h-7 w-7 rounded-full"
                  key={idx}
                >
                  <Image src={soc.icon} alt={soc.name} height={25} width={25} />
                </Link>
              ))}
            </div>
          </div>
          <div className="col-span-6">
            <form onSubmit={handleSubmit}>
              <label
                htmlFor="email"
                className="block text-xs font-medium mt-4 mb-2"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={message.email}
                className="block w-full rounded-md p-2 text-sm bg-transparent border border-slate-700 focus:border-1 focus:border-red-500"
                placeholder="johndoe@gmail.com"
                onChange={handleChange}
              />
              <label
                htmlFor="subject"
                className="block text-xs font-medium mt-4 mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={message.subject}
                className="block w-full rounded-md p-2 text-sm bg-transparent border border-slate-700 focus:border-1 focus:border-red-500"
                placeholder="Just saying hi...!"
                onChange={handleChange}
              />
              <label
                htmlFor="message"
                className="block text-xs font-medium mt-4 mb-2"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                value={message.message}
                className="block w-full rounded-md p-2 text-sm bg-transparent border border-slate-700 focus:border-1 focus:border-red-500"
                placeholder="Lets talk about it..."
                onChange={handleChange}
              ></textarea>
              <button
                type="submit"
                disabled={!handleSendBtnValid()}
                className="block w-full p-2 mt-4 font-medium bg-emerald-700 hover:bg-emerald-600 duration-500 rounded-md disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </WavyBackground>
    </section>
  );
};

export default Contact;
