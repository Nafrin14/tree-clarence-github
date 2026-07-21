import { useEffect, useState } from "react";
import {
  Home,
  Image,
  Mail,
  Moon,
  Sun,
  TreePine,
  Users,
} from "lucide-react";

import logo from "../assets/images/logo.png";

const navItems = [
  { id: "top", label: "Home", icon: Home },
  { id: "services", label: "Services", icon: TreePine },
  { id: "about", label: "About", icon: Users },
  { id: "gallery", label: "Gallery", icon: Image },
  { id: "contact", label: "Contact", icon: Mail },
];

function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      return savedTheme;
    }

    return "dark";
  });

  useEffect(() => {
    document.documentElement.classList.toggle(
      "dark",
      theme === "dark"
    );
  }, [theme]);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";

    localStorage.setItem("theme", nextTheme);
    setTheme(nextTheme);
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={
        theme === "dark"
          ? "Switch to light mode"
          : "Switch to dark mode"
      }
      className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white shadow-xl backdrop-blur-xl transition hover:bg-white/20"
    >
      <Sun
        className={`h-5 w-5 transition-all duration-300 ${
          theme === "dark"
            ? "-rotate-90 scale-0"
            : "rotate-0 scale-100"
        }`}
      />

      <Moon
        className={`absolute h-5 w-5 transition-all duration-300 ${
          theme === "dark"
            ? "rotate-0 scale-100"
            : "rotate-90 scale-0"
        }`}
      />
    </button>
  );
}

function Navbar() {
  const [active, setActive] = useState("top");

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries.filter(
          (entry) => entry.isIntersecting
        );

        if (visibleSections.length === 0) return;

        const topSection = visibleSections.reduce((first, second) =>
          first.boundingClientRect.top <
          second.boundingClientRect.top
            ? first
            : second
        );

        setActive(topSection.target.id);
      },
      {
        rootMargin: "-40% 0px -59% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const activeIndex = Math.max(
    0,
    navItems.findIndex((item) => item.id === active)
  );

  const ActiveIcon = navItems[activeIndex].icon;

  const handleNavigation = (id) => {
    setActive(id);

    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Mobile logo */}
      <button
        type="button"
        onClick={() => handleNavigation("top")}
        aria-label="Tree Clarence home"
        className="fixed left-4 top-4 z-50 flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-white/20 bg-white shadow-xl md:hidden"
      >
        <img
          src={logo}
          alt="Tree Clarence logo"
          width="48"
          height="48"
          className="h-full w-full scale-125 object-cover"
        />
      </button>

      <header className="fixed inset-x-0 bottom-4 z-50 flex justify-center px-3 md:bottom-auto md:top-9">
        <div className="flex items-center gap-3">
          {/* Desktop logo */}
          <button
            type="button"
            onClick={() => handleNavigation("top")}
            aria-label="Tree Clarence home"
            className="hidden h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full border border-white/20 bg-white shadow-xl md:flex"
          >
            <img
              src={logo}
              alt="Tree Clarence logo"
              width="48"
              height="48"
              className="h-full w-full scale-125 object-cover"
            />
          </button>

          <div
            className="nav-frame relative"
            style={{ "--nav-index": activeIndex }}
          >
            <nav className="nav-notch flex items-end rounded-full border border-white/15 bg-black/20 px-2 shadow-xl backdrop-blur-xl">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = active === item.id;

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleNavigation(item.id)}
                    aria-current={isActive ? "page" : undefined}
                    className="relative flex h-16 w-16 flex-col items-center justify-end pb-2 md:w-28"
                  >
                    <span
                      className={`mb-1 text-white/70 transition-opacity duration-300 ${
                        isActive ? "opacity-0" : "opacity-100"
                      }`}
                    >
                      <Icon
                        className="h-5 w-5"
                        strokeWidth={1.7}
                      />
                    </span>

                    <span
                      className={`text-[11px] tracking-wide transition-colors duration-300 ${
                        isActive
                          ? "font-semibold text-white"
                          : "text-white/70"
                      }`}
                    >
                      {item.label}
                    </span>
                  </button>
                );
              })}
            </nav>

            <span className="nav-bubble pointer-events-none absolute top-0 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/30 text-white shadow-lg backdrop-blur-xl">
              <ActiveIcon
                className="h-5 w-5"
                strokeWidth={2.2}
              />
            </span>
          </div>

          <ThemeToggle />
        </div>
      </header>
    </>
  );
}

export default Navbar;