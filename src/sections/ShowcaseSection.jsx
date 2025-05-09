import { useRef } from "react"; // useRef

import gsap from "gsap"; // animation library
import { useGSAP } from "@gsap/react"; // useGsap hook to use it
import { ScrollTrigger } from "gsap/ScrollTrigger"; // plugin that allows us to trigger animations based on scroll position

gsap.registerPlugin(ScrollTrigger); // inialize plugin

const ShowcaseSection = () => {
  const sectionRef = useRef(null); // reference to the section (Dom node(div))
  const project1Ref = useRef(null); // references to each project (dom node which is more divs)
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  // use gsap hook
  useGSAP(() => {
    const projects = [
      // define what projects are with an array of our projects with .current attached (.current comes from useRef to indicate which dom element we're referring to.)
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

  // the JSX structure / implementation of references
  return (
    <section id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {/* LEFT */}
          <div className="first-project-wrapper" ref={project1Ref}>
            <div className="image-wrapper">
              <img src="/images/project1.png" alt="Ryde" />
            </div>
            <div className="text-content">
              <h2>
                On-Demand Rides Made Simple with a Powerful, User-Friendly App
                called Ryde
              </h2>
              <p className="text-white-50 md:text-xl">
                An app built with React Native, Expo, & TailwindCSS for a fast,
                user-friendly experience.
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={project2Ref}>
              <div className="image-wrapper bg-[#ffefdb]">
                <img
                  src="/images/project2.png"
                  alt="Library Management Platform"
                />
              </div>
              <h2>Library Management Platform</h2>
            </div>

            <div className="project" ref={project3Ref}>
              <div className="image-wrapper bg-[#ffe7db]">
                <img src="/images/project3.png" alt="YC Directory" />
              </div>
              <h2>YC Directory - A startup showcase App</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
