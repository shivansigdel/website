// src/components/Navbar.jsx
export default function Navbar() {
  return (
    <div
      className="navbar sticky top-0 z-40
                 bg-gradient-to-b from-base-300 to-base-200
                 border-b border-base-300/80
                 text-base-content px-4 shadow"
    >
      <div className="navbar-center w-full">
        <ul className="menu menu-horizontal justify-center w-full px-1 gap-4 text-sm max-[380px]:text-xs">
          <li>
            <a
              href="#about"
              className="text-base-content/90 hover:text-base-content hover:underline underline-offset-4"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#education"
              className="text-base-content/90 hover:text-base-content hover:underline underline-offset-4"
            >
              Education
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className="text-base-content/90 hover:text-base-content hover:underline underline-offset-4"
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="text-base-content/90 hover:text-base-content hover:underline underline-offset-4"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-base-content/90 hover:text-base-content hover:underline underline-offset-4"
            >
              Contact
            </a>
          </li>
          <li>
            <label className="flex cursor-pointer items-center gap-2">
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
                value="dark"
                className="toggle theme-controller"
                aria-label="Toggle dark mode"
              />
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
          </li>
        </ul>
      </div>
    </div>
  );
}
