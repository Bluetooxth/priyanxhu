"use client";

import React from "react";
import { skills } from "@/data/Skills";

export default function Skills() {
  return (
    <section className="flex justify-center items-center w-full">
      <div className="flex flex-col justify-start items-start w-full px-3 md:w-4xl gap-7">
        <h2 className="text-2xl font-medium underline underline-offset-8 decoration-2 decoration-green-500/80">
          What i Know
        </h2>
        <div className="flex flex-wrap justify-start items-start gap-2">
          {skills.map((skill) => (
            <div
              key={skill.skillName}
              className="flex justify-center items-center gap-2 border border-white/10 rounded-lg px-3 py-1.5 bg-neutral-900"
            >
              <span className="text-md">{skill.icon}</span>
              <p className="text-md font-normal">{skill.skillName}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
