// src/sections/About.jsx

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 py-16">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <img
          src="/shivan.jpg"
          alt="Shivan Sigdel"
          className="mx-auto mb-6 size-48 sm:size-56 md:size-64 rounded-full object-cover ring-2 ring-base-300 shadow-sm"
          loading="lazy"
        />

        <h1 className="text-3xl md:text-4xl font-bold text-base-content">
          Shivan Sigdel
        </h1>
        <p className="mt-2 text-sm text-neutral-500">
          CS @ UT Austin • Full-stack & ML
        </p>

        <p className="mt-6 text-base-content leading-relaxed">
          I’m a computer science student at the University of Texas at Austin
          with a passion for building efficient, scalable web applications and
          exploring machine learning. I’m seeking a software engineering
          internship where I can put my full-stack skills to work on real-world
          challenges. When I’m not coding, I’m playing basketball, lifting at
          the gym, or out for a run.
        </p>
      </div>
    </section>
  );
}
