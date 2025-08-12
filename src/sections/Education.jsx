// src/sections/Education.jsx
export default function Education() {
  const courses = [
    "Data Structures",
    "Algorithms and Complexity",
    "Object-Oriented Programming",
    "Computer Architecture",
    "Software Engineering",
    "Machine Learning",
    "Operating Systems",
    "Linear Algebra",
    "Discrete Mathematics",
  ];

  return (
    <section id="education" className="scroll-mt-24 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl font-semibold text-base-content">Education</h2>

        <div className="mt-6 rounded-2xl border border-base-300 p-5">
          <div className="flex items-baseline justify-between gap-4">
            <h3 className="font-medium text-base-content">
              University of Texas at Austin — B.S. Computer Science
            </h3>
            <span className="text-sm text-base-content/70">
              Expected December 2026
            </span>
          </div>

          <div className="mt-4">
            <p className="text-sm font-semibold text-base-content/80">
              Coursework
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              {courses.map((c) => (
                <span
                  key={c}
                  className="text-xs rounded-full border border-base-300 px-2 py-1"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
