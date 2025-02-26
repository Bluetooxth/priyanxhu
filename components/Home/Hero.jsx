import React from "react";
import { AiOutlineGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { GoDotFill } from "react-icons/go";
import Link from "next/link";

const Hero = () => {
  const socials = [
    {
      name: "Github",
      link: "https://github.com/bluetooxth",
      icon: <AiOutlineGithub />,
    },
    {
      name: "LeetCode",
      link: "https://leetcode.com/u/bluetooxth",
      icon: <SiLeetcode />,
    },
    {
      name: "Twitter",
      link: "https://twitter.com/bluetooxth",
      icon: <FaSquareXTwitter />,
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/priyannxhuu",
      icon: <FaLinkedin />,
    },
    {
      name: "Discord",
      link: "https://discord.com/users/bluetooxth",
      icon: <FaDiscord />,
    },
    {
      name: "YouTube",
      link: "https://www.youtube.com/@bluetooxth",
      icon: <FaYoutube />,
    },
  ];

  return (
    <section className="flex justify-center items-center w-full">
      <div className="flex flex-col-reverse md:grid md:grid-cols-2 justify-start items-start w-[95vw] md:w-[80vw] lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw] px-2 md:px-0 gap-2">
        <div className="md:grid-cols-1 flex flex-col">
          <h2 className="text-2xl font-medium text-white font-[family-name:var(--font-primary)]">
            <span>{`I'm Priyanshu Chahar`}</span>
          </h2>
          <p className="text-md text-slate-200">
            {`3rd-year CS student with specialization in AiML, passionate about devlopment, problem-solving and learning new things.`}
          </p>
          <div className="flex flex-wrap justify-start items-center gap-3 mt-2">
            {socials.map((social, index) => (
              <Link
                key={index}
                href={social.link}
                className="text-2xl text-white p-2 rounded-lg bg-[#111113] border md:border-2 border-[#212121] hover:border-green-500 transition-colors duration-300 ease-in-out font-normal"
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </div>
        <div className="h-40 w-40 rounded-xl overflow-hidden flex justify-center items-center">
          <img
            src="https://avatars.githubusercontent.com/u/165533860?v=4"
            alt=""
            draggable="false"
            className="h-full w-full rounded-xl object-cover grayscale hover:grayscale-0
            transition-all duration-300 ease-in-out"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
