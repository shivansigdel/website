// src/sections/Projects.jsx
import { projects } from "../data/projectsdata";
import ProjectItem from "../components/ProjectItem";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl font-semibold text-base-content">Projects</h2>

        {projects.length === 0 ? (
          <p className="mt-6 text-base-content/70">Projects coming soon.</p>
        ) : (
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {projects.map((p, i) => (
              <div
                key={`${p.title}-${i}`}
                className={
                  i === projects.length - 1 && projects.length % 2 !== 0
                    ? "sm:col-span-2 flex justify-center"
                    : ""
                }
              >
                <ProjectItem project={p} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
