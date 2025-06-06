import Button from "../components/Button.jsx";
import HeroExperience from "../components/HeroModels/HeroExperience.jsx";
import { words } from "../constants/index.js";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import AnimatedCounter from "../components/AnimatedCounter.jsx";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      {
        y: 50,
        opacity: 0,
      },
      {
        // the text transitions from 50 to 0 on y axis, fades in with opacity, and stagger/duration is timing with the ease being the animation style
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        ease: "Power2.inOut",
      }
    );
  });

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="./images/bg.png" alt="background" />
      </div>

      <div className="hero-layout">
        {/* LEFT: HERO CONTENT */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Shaping
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word) => (
                      <span
                        key={word.text}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt={word.text}
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into Real Projects</h1>
              <h1>that Deliver Results</h1>
            </div>
            <div className="max-w-md">
              <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
                Hi, I'm Kieran, a developer with a passion for creating
                innovative solutions, and a knack for turning ideas into
                reality.
              </p>
            </div>
            <div className="md:w-80 md:h-16 w-60 h-12">
            <Button
              className="md:w-80 md:h-16 w-60 h-12"
              id="button"
              text="See my work"
            />

            </div>
          </div>
        </header>
        {/* RIGHT: 3D MODEL */}
        <figure>
          <div className="hero-3d-layout">
            <HeroExperience />
          </div>
        </figure>
      </div>
      <AnimatedCounter />
    </section>
  );
};

export default Hero;
