// src/components/ExperienceItem.jsx
export default function ExperienceItem({ item }) {
  return (
    <article className="rounded-2xl border border-base-300 p-5">
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="font-medium text-base-content">
          {item.company} — {item.role}
        </h3>
        <span className="text-sm text-base-content/70">{item.range}</span>
      </div>

      {(item.location || item.links?.site) && (
        <p className="mt-1 text-sm text-base-content/70">
          {item.location}
          {item.location && item.links?.site ? " · " : ""}
          {item.links?.site && (
            <a
              className="underline"
              href={item.links.site}
              target="_blank"
              rel="noreferrer"
            >
              Website
            </a>
          )}
        </p>
      )}

      {item.highlights?.length ? (
        <ul className="mt-2 list-disc pl-5 text-base-content/80">
          {item.highlights.map((h, i) => (
            <li key={i}>{h}</li>
          ))}
        </ul>
      ) : null}

      {item.tech?.length ? (
        <div className="mt-3 flex flex-wrap gap-2">
          {item.tech.map((t) => (
            <span
              key={t}
              className="text-xs rounded-full border border-base-300 px-2 py-1"
            >
              {t}
            </span>
          ))}
        </div>
      ) : null}
    </article>
  );
}
