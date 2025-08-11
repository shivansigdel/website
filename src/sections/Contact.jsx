// src/sections/Contact.jsx
import { useState } from "react";

const GETFORM_ENDPOINT = "https://getform.io/f/ajjrezva";
const MY_EMAIL = "shivansigdel@utexas.edu";

export default function Contact() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("sending");

    try {
      const res = await fetch(GETFORM_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("ok");
        form.reset();
      } else setStatus("err");
    } catch {
      setStatus("err");
    }
  };

  return (
    <section id="contact" className="scroll-mt-24 py-16">
      <div className="mx-auto max-w-3xl px-4">
        <h2 className="text-2xl font-semibold text-base-content text-center">
          Contact
        </h2>

        {/* center the whole form */}
        <form onSubmit={handleSubmit} className="mt-6 flex justify-center">
          <fieldset className="fieldset w-full max-w-lg rounded-2xl border border-base-300 p-6 shadow-sm mx-auto">
            <legend className="fieldset-legend mx-auto text-base font-semibold text-base-content">
              Send a message
            </legend>

            <label className="label">Name</label>
            <input
              name="name"
              type="text"
              className="input input-bordered w-full"
              placeholder="Your name"
              required
            />

            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input input-bordered w-full"
              placeholder="you@example.com"
              required
            />

            <label className="label">Message</label>
            <textarea
              name="message"
              className="textarea textarea-bordered w-full h-32"
              placeholder="How can I help?"
              required
            />

            <input
              type="text"
              name="_gotcha"
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
            />

            <div className="mt-4 flex justify-center">
              <button
                type="submit"
                className="btn btn-neutral px-6"
                disabled={status === "sending"}
              >
                {status === "sending" ? "Sending…" : "Send"}
              </button>
            </div>

            {status === "ok" && (
              <p className="mt-2 text-center text-success">
                Thanks! I’ll get back to you soon.
              </p>
            )}
            {status === "err" && (
              <p className="mt-2 text-center text-error">
                Something went wrong. You can email me directly at{" "}
                <a className="underline" href={`mailto:${MY_EMAIL}`}>
                  {MY_EMAIL}
                </a>
                .
              </p>
            )}
          </fieldset>
        </form>

        <div className="mt-6 text-sm text-base-content/80 text-center">
          <p>
            Email:{" "}
            <a className="underline" href={`mailto:${MY_EMAIL}`}>
              {MY_EMAIL}
            </a>{" "}
            ·{" "}
            <a
              className="underline"
              href="https://github.com/shivansigdel"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>{" "}
            ·{" "}
            <a
              className="underline"
              href="https://www.linkedin.com/in/shivansigdel"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
