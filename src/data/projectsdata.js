// src/data/projectsData.js

/** @typedef {{title:string, blurb:string, tech:string[], highlights:string[], links?:{demo?:string, github?:string}}} Project */

/** @type {Project[]} */
export const projects = [
  {
    title: "Hermes Messaging Platform",
    blurb:
      "Full-stack messaging app with secure auth, DMs, group chat, and a clean UI.",
    tech: ["React", "Node.js", "Express", "MongoDB", "REST APIs", "UI/UX"],
    highlights: [
      "Collaborated with a team of 6 to build a secure messaging web app with user authentication, direct messages, and group chats.",
      "Designed and implemented core frontend features including login, sign-up, and the messaging dashboard.",
      "Won a head-to-head class competition based on functionality and design.",
    ],
    links: { github: "https://github.com/shivansigdel/Hermes" },
  },
  {
    title: "Filmly — Movie Recommendation Web Application",
    blurb:
      "Personalized movie recommendations using collaborative filtering (Truncated SVD) with nightly retraining.",
    tech: ["React", "Express", "Node.js", "MongoDB", "Docker", "AWS (EC2, S3)"],
    highlights: [
      "Built a full-stack app: React frontend, Node.js/Express API, MongoDB for users and movie ratings.",
      "Implemented collaborative filtering with Truncated SVD (scikit-learn) to return up to 20 personalized recommendations per request.",
      "Dockerized training pipeline on AWS (EC2 + S3) with a nightly schedule; hot-reloaded latent factors into the running API via an admin endpoint for zero-downtime updates.",
    ],
    links: { github: "https://github.com/shivansigdel/Filmly" },
  },
];
