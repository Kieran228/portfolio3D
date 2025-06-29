import { useRef } from "react"; // useRef

import gsap from "gsap"; // animation library
import { useGSAP } from "@gsap/react"; // useGsap hook to use it
import { ScrollTrigger } from "gsap/ScrollTrigger"; // plugin that allows us to trigger animations based on scroll position

import TitleHeader from "../components/TitleHeader";
import { expCards } from "../constants";
import ClickableGlowCard from "../components/ClickableGlowCard";

gsap.registerPlugin(ScrollTrigger); // inialize plugin

const ShowcaseSection = () => {
  const sectionRef = useRef(null); // reference to the section (Dom node(div))
  const project1Ref = useRef(null); // references to each project (dom node which is more divs)
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  // flappy bird data variables
  const flappyBirdData = expCards.find((card) => card.flappyBirdCodeLink);
  const flappyBirdLive = expCards.find((card) => card.flapyBirdLiveLink);

  // flappy bird data variables
  const spaceInvadersCode = expCards.find((card) => card.spaceInvadersCodeLink);
  const spaceInvadersLive = expCards.find((card) => card.spaceInvadersLiveLink);

  // flappy bird data variables
  const connect4Code = expCards.find((card) => card.connect4CodeLink);
  const connect4Live = expCards.find((card) => card.connect4LiveLink);

  // use gsap hook
  useGSAP(() => {
    const projects = [
      // define what projects are with an array of our projects with .current attached (.current comes from useRef to indicate which dom element we're referring to while looping.)
      project1Ref.current,
      project2Ref.current,
      project3Ref.current,
    ];

    // for each card, animate the cards from/how "x" to/how "y" with the scroll trigger plugin telling when to trigger the animations.
    projects.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });

    gsap.fromTo(
      // same hook applied to the section reference
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );
    // the empty array below tells the useGsap hook to only run ONCE when the component mounts.
  }, []);

  // the JSX structure / implementation of references / tailwindcss custom layouts
  return (
    <section id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <TitleHeader title="2D Games" sub="🛠️ Javascript Projects" />
        <div className="showcaselayout py-5">
          {/* LEFT */}
          <div className="first-project-wrapper" ref={project1Ref}>
            <div className="image-wrapper">
              <img
                src="./images/flappybird_cover_rounded.png"
                alt="FlappyBird"
              />
            </div>
            <div className="lg:columns-2 md:columns-2 columns-1 mt-8">
              <a href={flappyBirdData.flappyBirdCodeLink} target="_blank">
                <ClickableGlowCard>
                  <div className="text-green-400 text-center">Code</div>
                </ClickableGlowCard>
              </a>

              <a href={flappyBirdLive.flapyBirdLiveLink} target="_blank">
                <ClickableGlowCard>
                  <div className="text-blue-500 text-center">
                    <p>Live</p>
                  </div>
                </ClickableGlowCard>
              </a>
            </div>

            <div className="text-content">
              <h2 className="text-center">Flappy Bird Clone 🐤🪣</h2>
              <p className="text-white-50 md:text-xl">
                Built with vanilla JavaScript and HTML canvas, this Flappy Bird
                clone handles real-time rendering, physics simulation (gravity,
                velocity), and procedural pipe generation. It features
                sprite-based rendering, event-driven controls, collision
                detection via AABB logic, and a persistent game loop using
                requestAnimationFrame for smooth animation and input
                responsiveness.
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={project2Ref}>
              <div className="image-wrapper bg-[#ffefdb]">
                <img
                  src="./images/spaceInvadersCoverRounded.png"
                  alt="Space Invaders"
                />
              </div>

              <div className="lg:columns-2 md:columns-2 columns-1 mt-8">
                <a
                  target="_blank"
                  href={spaceInvadersCode.spaceInvadersCodeLink}
                >
                  <ClickableGlowCard>
                    <div className="text-green-500 text-center">Code</div>
                  </ClickableGlowCard>
                </a>
                <a
                  target="_blank"
                  href={spaceInvadersLive.spaceInvadersLiveLink}
                >
                  <ClickableGlowCard>
                    <div className="text-blue-500 text-center">Live</div>
                  </ClickableGlowCard>
                </a>
              </div>

              <h2 className="text-center">Space Invaders Clone 👾👽</h2>
              <p className="text-white-50">
                Also built using vanilla JavaScript and Canvas, the game
                features real-time rendering, object movement, keyboard
                controls, collision detection, and a dynamic level system. Game
                state is updated on each animation frame to simulate classic
                Space Invaders-style gameplay.
              </p>
            </div>

            <div className="project" ref={project3Ref}>
              <div className="image-wrapper bg-[#ffe7db]">
                <img
                  src="./images/connect4Cover2rounded.png"
                  alt="YC Directory"
                />
              </div>

              <div className="lg:columns-2 md:columns-2 columns-1 mt-8">
                <a target="_blank" href={connect4Code.connect4CodeLink}>
                  <ClickableGlowCard>
                    <div className="text-green-500 text-center">Code</div>
                  </ClickableGlowCard>
                </a>
                <a target="_blank" href={connect4Live.connect4LiveLink}>
                  <ClickableGlowCard>
                    <div className="text-blue-500 text-center">Live</div>
                  </ClickableGlowCard>
                </a>
              </div>

              <h2 className="text-center">Connect 4 Clone 🔴🟡</h2>
              <p className="text-white-50">
                You guessed it, more vanilla JavaScript and DOM manipulation.
                This game dynamically generates a 6×7 grid and manages
                two-player turn logic, piece tracking with a 2D array, column
                height tracking, and win detection through pattern checks in
                four directions. Event listeners handle real-time interaction
                for a responsive browser-based Connect 4 experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
