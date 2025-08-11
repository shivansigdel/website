// src/components/ProjectItem.jsx
export default function ProjectItem({ project }) {
  const {
    title,
    blurb,
    tech = [],
    highlights = [],
    links = {},
  } = project || {};

  return (
    <article className="rounded-2xl border border-base-300 p-5">
      <h3 className="font-medium text-base-content">{title}</h3>

      {blurb && <p className="mt-2 text-base-content/80">{blurb}</p>}

      {tech.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {tech.map((t) => (
            <span
              key={t}
              className="text-xs rounded-full border border-base-300 px-2 py-1"
            >
              {t}
            </span>
          ))}
        </div>
      )}

      {highlights.length > 0 && (
        <ul className="mt-4 list-disc pl-5 text-base-content/80">
          {highlights.map((h, i) => (
            <li key={i}>{h}</li>
          ))}
        </ul>
      )}

      {links.github && (
        <div className="mt-4">
          <a
            className="underline"
            href={links.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      )}
    </article>
  );
}
