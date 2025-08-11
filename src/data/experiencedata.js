/** @typedef {{company:string, role:string, start:string, end:string|null, location?:string, highlights:string[], tech?:string[], links?:{site?:string, github?:string}}} WorkItem */

/** @type {WorkItem[]} */
export const work = [
  {
    company: "Lower Colorado River Authority",
    role: "Frontend Developer Intern",
    start: "2025-05",
    end: "2025-08",
    location: "Austin, TX",
    highlights: [
      "Developed a responsive contingency-playbook tool with Next.js, React, TypeScript, and Tailwind CSS; built reusable components and an in-app alert banner; authored Jest + React Testing Library tests to reach 95% coverage.",
      "Cut initial load time by 40% via lazy loading and code splitting; collaborated via pull requests to integrate features smoothly.",
    ],
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Jest",
      "React Testing Library",
    ],
  },
  {
    company: "Lower Colorado River Authority",
    role: "Software Developer Intern",
    start: "2024-05",
    end: "2024-08",
    location: "Austin, TX",
    highlights: [
      "Implemented RSA, DSA, and ECDSA encryption/decryption services using the Java BouncyCastle API, replacing manual PGP workflows; automated signing/verification; improved throughput by 80%, reducing file processing from 5 min to 1 min.",
      "Streamlined dependency management and automated builds with Maven integrated into CI pipelines; deployed via JDeveloper to enhance testing workflows and ensure secure, seamless feature integration.",
    ],
    tech: ["Java", "BouncyCastle", "Maven", "JDeveloper"],
  },
  {
    company: "Hook'd Magazine",
    role: "Web Developer",
    start: "2024-08",
    end: "2025-05",
    location: "Austin, TX",
    highlights: [
      "Collaborated with peers to transform Figma designs into a fully responsive WordPress site by customizing PHP themes and using HTML, CSS, and JavaScript.",
      "Developed UI/UX enhancements to ensure consistent functionality and a seamless user experience across devices and browsers.",
    ],
    tech: ["WordPress", "PHP", "HTML", "CSS", "JavaScript", "Figma"],
  },
  {
    company: "Texas Spacecraft Laboratory",
    role: "Reaction Wheel Team Member",
    start: "2024-03",
    end: "2025-05",
    location: "Austin, TX",
    highlights: [
      "Developed control algorithms using Arduino and C to program reaction wheels, focusing on angular momentum utilization for fuel-less satellite orientation (Newton’s third law).",
      "Used MATLAB and Python to process and visualize magnetometer data, enhancing satellite navigation accuracy through precise magnetic field measurement and algorithm optimization.",
    ],
    tech: ["Arduino", "C", "MATLAB", "Python"],
  },
];

export const fmtRange = (start, end) => {
  const parseYM = (ym) => {
    const [y, m] = ym.split("-").map(Number);
    return new Date(Date.UTC(y, m - 1, 15)); // mid-month avoids DST edges
  };
  const opts = { month: "short", year: "numeric", timeZone: "UTC" };
  const s = parseYM(start).toLocaleString("en-US", opts);
  const e = end ? parseYM(end).toLocaleString("en-US", opts) : "Present";
  return `${s} – ${e}`;
};
