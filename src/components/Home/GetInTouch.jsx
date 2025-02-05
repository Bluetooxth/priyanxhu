"use client";
import React, { useState } from "react";
import { LuSendHorizontal } from "react-icons/lu";
import axios from "axios";
import Link from "next/link";

const GetInTouch = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [button, setButton] = useState("Send");

  const handleSubmit = async (e) => {
    if (name === "" || email === "" || message === "") {
      setButton("Error");
      return;
    }

    e.preventDefault();
    try {
      await axios.post("/api/contact", {
        name,
        email,
        message,
      });
      setButton("Sent");
    } catch (error) {
      setButton("Failed");
    }
  };

  return (
    <section className="flex justify-center items-center w-full">
      <div className="flex flex-col justify-start items-start w-[95vw] md:w-[80vw] lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw] px-3 md:px-0 gap-4">
        <h3 className="text-2xl font-normal text-zinc-300 underline underline-offset-8 decoration-wavy decoration-cyan-500">
          Get in touch
        </h3>
        <div className="flex flex-col justify-start items-start gap-2">
          <p className="text-sm font-normal text-zinc-400">
            {`Have a question or want to work together?`}
          </p>
          <p className="text-sm font-normal text-zinc-400">
            {`Feel free to reach out to me.`}
          </p>
          <p className="text-sm font-normal text-zinc-400">
            {`You can also email me at `}
            <Link
              href="mailto:bluetooxth@gmail.com"
              className="text-cyan-500 underline underline-offset-8"
            >
              {`Bluetooxth@gmail.com`}
            </Link>
          </p>
        </div>
        <p className="text-sm font-normal text-zinc-400">
          {`Or you can fill out the form below and I will get back to you as soon as possible.`}
        </p>
        <form
          action=""
          method="post"
          className="flex flex-col justify-start items-start gap-2 w-full"
        >
          <div className="flex flex-col justify-start items-start gap-2 w-full">
            <label htmlFor="" className="text-lg font-normal text-zinc-300">
              Name
            </label>
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-3 py-2 border md:border-2 border-zinc-800 rounded-md bg-zinc-900 text-zinc-300 transition-all duration-300 ease-in-out outline-hidden focus:border-cyan-600 text-md font-normal"
            />
          </div>
          <div className="flex flex-col justify-start items-start gap-2 w-full">
            <label htmlFor="" className="text-lg font-normal text-zinc-300">
              Email
            </label>
            <input
              type="email"
              placeholder="youremail@example.com"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border md:border-2 border-zinc-800 rounded-md bg-zinc-900 text-zinc-300 transition-all duration-300 ease-in-out outline-hidden focus:border-cyan-600 text-md font-normal"
            />
          </div>
          <div className="flex flex-col justify-start items-start gap-2 w-full">
            <label htmlFor="" className="text-lg font-normal text-zinc-300">
              Message
            </label>
            <textarea
              name=""
              id=""
              cols=""
              rows="3"
              placeholder="Your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="w-full px-3 py-2 border md:border-2 border-zinc-800 rounded-md bg-zinc-900 text-zinc-300 transition-all duration-300 ease-in-out outline-hidden focus:border-cyan-600 text-md font-normal resize-none"
            ></textarea>
          </div>
          <button
            type="submit"
            onClick={handleSubmit}
            className="px-5 py-2 rounded-md bg-zinc-900 hover:bg-zinc-900 text-zinc-300 text-md font-normal transition-all duration-300 ease-in-out flex items-center gap-2 border md:border-2 border-zinc-800 cursor-pointer"
          >
            {button} <LuSendHorizontal />
          </button>
        </form>
      </div>
    </section>
  );
};

export default GetInTouch;
