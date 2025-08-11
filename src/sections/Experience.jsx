// src/sections/Experience.jsx
import { work, fmtRange } from "../data/experiencedata";
import ExperienceItem from "../components/ExperienceItem";

export default function Experience() {
  const toDate = (ym) => {
    if (!ym) return null;
    const [y, m] = ym.split("-").map(Number);
    return new Date(Date.UTC(y, (m || 1) - 1, 1));
  };

  const priority = new Set(["Lower Colorado River Authority"]);

  const sorted = [...work].sort((a, b) => {
    const pa = priority.has(a.company) ? 0 : 1;
    const pb = priority.has(b.company) ? 0 : 1;
    if (pa !== pb) return pa - pb;
    const aEnd = toDate(a.end) ?? new Date(8640000000000000);
    const bEnd = toDate(b.end) ?? new Date(8640000000000000);
    return bEnd - aEnd || toDate(b.start) - toDate(a.start);
  });

  const items = sorted.map((w) => ({ ...w, range: fmtRange(w.start, w.end) }));

  return (
    <section id="experience" className="scroll-mt-24 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl font-semibold text-base-content">Experience</h2>
        <div className="mt-6 space-y-6">
          {items.map((item, i) => (
            <ExperienceItem
              key={`${item.company}-${item.role}-${i}`}
              item={item}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
