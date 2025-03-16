import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Application security",
          "Full Stack Developer",
          "React Native Developer",
          "Cybersecurity Enthusiast",
          "Blockchain Developer",
          "AI Engineer"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
