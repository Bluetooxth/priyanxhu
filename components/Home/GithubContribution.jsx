"use client";
import React from "react";

import GitHubCalendar from "react-github-calendar";

const GithubContribution = () => {
  return (
    <section className="w-[95vw] md:w-[80vw] lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw] px-2 md:px-0 text-white">
      <GitHubCalendar
        username="bluetooxth"
        colorScheme="dark"
        fontSize={16}
        blockSize={12}
        theme={{
          dark: ["#212121", "#0e4429", "#146d32", "#26a641", "#39d353"],
        }}
      />
    </section>
  );
};

export default GithubContribution;
