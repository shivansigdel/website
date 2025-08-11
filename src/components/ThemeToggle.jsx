// src/components/ThemeToggle.jsx
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(
    () => (localStorage.getItem("theme") || "light") === "dark"
  );

  useEffect(() => {
    const t = dark ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", t);
    localStorage.setItem("theme", t);
  }, [dark]);

  return (
    <label className="flex cursor-pointer items-center gap-2">
      {/* sun */}
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
      >
        <circle cx="12" cy="12" r="5" />
        <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
      </svg>

      <input
        type="checkbox"
        className="toggle"
        checked={dark}
        onChange={(e) => setDark(e.target.checked)}
        aria-label="Toggle dark mode"
      />

      {/* moon */}
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
      >
        <path d="M21.64 13a9 9 0 1 1-10.5-10.5A8 8 0 0 0 21.64 13z" />
      </svg>
    </label>
  );
}
