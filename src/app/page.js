"use client";
import GetInTouch from "@/components/Home/GetInTouch";
import Hero from "@/components/Home/Hero";
import Projects from "@/components/Home/Projects";
import Skills from "@/components/Home/Skills";
import React, { useEffect } from "react";
import axios from "axios";

const LandingPage = () => {
  useEffect(() => {
    try {
      axios.post("/api/views");
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <main className="space-y-12 py-10">
        <Hero />
        <Skills />
        <Projects />
        <GetInTouch />
      </main>
    </>
  );
};

export default LandingPage;
