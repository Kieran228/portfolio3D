const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  // {
  //   name: "Testimonials",
  //   link: "#testimonials",
  // },
];

const words = [
  { text: "Ideas", imgPath: "./images/ideas.svg" },
  { text: "Concepts", imgPath: "./images/concepts.svg" },
  { text: "Designs", imgPath: "./images/designs.svg" },
  { text: "Code", imgPath: "./images/code.svg" },
  { text: "Concepts", imgPath: "./images/concepts.svg" },
  { text: "Designs", imgPath: "./images/designs.svg" },
  { text: "Code", imgPath: "./images/code.svg" },
];

const counterItems = [
  { value: 3, suffix: "+", label: "Years of Experience" },
  { value: 5, suffix: "+", label: "Satisfied Clients" },
  { value: 50, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "./images/logos/company-logo-1.png",
  },
  {
    imgPath: "./images/logos/company-logo-2.png",
  },
  {
    imgPath: "./images/logos/company-logo-3.png",
  },
  {
    imgPath: "./images/logos/company-logo-4.png",
  },
  {
    imgPath: "./images/logos/company-logo-5.png",
  },
  {
    imgPath: "./images/logos/company-logo-6.png",
  },
  {
    imgPath: "./images/logos/company-logo-7.png",
  },
  {
    imgPath: "./images/logos/company-logo-8.png",
  },
  {
    imgPath: "./images/logos/company-logo-9.png",
  },
  {
    imgPath: "./images/logos/company-logo-10.png",
  },
  {
    imgPath: "./images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "./images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "./images/chat.png",
    title: "Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "./images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

// Backup images if 3d models don't work

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "./images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "./images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "./images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "./images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "./images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "./models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "C++ Developer",
    modelPath: "./models/c-transformed.glb",
    scale: 0.08,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "./models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "./models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "./models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    quote:
      " “The best frontend developers don’t just code—they craft experiences.” ",
    quoteAuthor: "— Nahar Singh",
    logoPath: "./images/color_pallete_smaller.png",
    title: "Frontend Developer",
    date: "January 2023 - Present",
    flappyBirdCodeLink: "https://github.com/Kieran228/FlappyBirdJS",
    flapyBirdLiveLink: "https://kieran228.github.io/FlappyBirdJS/",
    skills: [
      "Building interactive UIs, managing state, and using component-based architectures.",
      "Crafting accessible, pixel-perfect layouts across devices and screen sizes.",
      "Using tools like Webpack, Vite, or Babel; optimizing performance, lazy loading, and asset bundling",
    ],
  },
  {
    quote:
      "“The backend is the backbone of any application. It's where the data lives, and ensuring its integrity and accessibility is paramount.”",
    quoteAuthor: "— Martin Fowler",
    logoPath: "./images/toolbox_smaller.png",
    title: "Backend Developer",
    date: "June 2020 - Present",
    spaceInvadersCodeLink: "https://github.com/Kieran228/SpaceInvaders",
    spaceInvadersLiveLink: "https://kieran228.github.io/SpaceInvaders/",
    skills: [
      "Handling logic, routing, and business processes efficiently and securely.",
      "Designing schemas, writing performant queries, and ensuring data integrity.",
      "RESTful/GraphQL API creation, OAuth/JWT-based authentication, and security best practices.",
    ],
  },
  {
    quote:
      "“Great software is built by teams that communicate well, respect each other's expertise, and learn continuously.”",
    quoteAuthor: "— Kent Beck",
    logoPath: "./images/laptop_smaller.png",
    title: "Collaboration & Learning",
    date: "Always",
    connect4CodeLink: "https://github.com/Kieran228/Connect4",
    connect4LiveLink: "https://kieran228.github.io/Connect4/",
    skills: [
      "Creating clean commits, resolving merge conflicts, using branches effectively.",
      "Explaining technical decisions clearly, giving/receiving code reviews respectfully, and syncing well with designers/devs.",
      "Picking up new tools, patterns, or languages quickly and having the eagerness to learn how to implement them optimally.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "./images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "./images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "./images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Kieran. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "./images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Kieran was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "./images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Kieran was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Kieran's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Kieran is the ideal partner.",
    imgPath: "./images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Kieran was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "./images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Kieran’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "./images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Kieran was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "./images/client6.png",
  },
];

const socialImgs = [
  // {
  //   name: "insta",
  //   imgPath: "/images/insta.png",
  // },
  // {
  //   name: "fb",
  //   imgPath: "/images/fb.png",
  // },
  // {
  //   name: "x",
  //   imgPath: "/images/x.png",
  // },
  {
    name: "linkedin",
    imgPath: "./images/linkedin.png",
    url: "https://www.linkedin.com/in/kieran-caraway-b7406b2a6/",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
