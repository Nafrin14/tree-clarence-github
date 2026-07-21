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
    return localStorage.getItem("theme") || "dark";
  });

  useEffect(() => {
    const root = document.documentElement;
    const isDark = theme === "dark";

    root.classList.toggle("dark", isDark);
    root.style.colorScheme = isDark ? "dark" : "light";
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => {
      const nextTheme =
        currentTheme === "dark" ? "light" : "dark";

      localStorage.setItem("theme", nextTheme);

      return nextTheme;
    });
  };

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={
        isDark
          ? "Switch to light mode"
          : "Switch to dark mode"
      }
      aria-pressed={isDark}
      className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-white/20"
    >
      <Sun
        aria-hidden="true"
        className={`h-5 w-5 transition-transform duration-300 ${
          isDark
            ? "-rotate-90 scale-0"
            : "rotate-0 scale-100"
        }`}
      />

      <Moon
        aria-hidden="true"
        className={`absolute h-5 w-5 transition-transform duration-300 ${
          isDark
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

    if (sections.length === 0) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (first, second) =>
              Math.abs(first.boundingClientRect.top) -
              Math.abs(second.boundingClientRect.top)
          );

        const nextActive = visibleSections[0]?.target.id;

        if (nextActive) {
          setActive((currentActive) =>
            currentActive === nextActive
              ? currentActive
              : nextActive
          );
        }
      },
      {
        root: null,
        rootMargin: "-40% 0px -55% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const activeIndex = Math.max(
    0,
    navItems.findIndex((item) => item.id === active)
  );

  const ActiveIcon = navItems[activeIndex].icon;

  const handleNavigation = (id) => {
    const targetSection = document.getElementById(id);

    if (!targetSection) {
      return;
    }

    setActive(id);

    targetSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      {/* Mobile logo */}
      <button
        type="button"
        onClick={() => handleNavigation("top")}
        aria-label="Go to homepage"
        className="fixed left-4 top-4 z-50 flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-white/20 bg-white shadow-xl md:hidden"
      >
        <img
          src={logo}
          alt="Clarence Arborcare and Landscaping logo"
          width="48"
          height="48"
          loading="eager"
          decoding="async"
          className="h-full w-full scale-125 object-cover"
        />
      </button>

      <header className="fixed inset-x-0 bottom-4 z-50 flex justify-center px-3 md:bottom-auto md:top-9">
        <div className="flex items-center gap-3">
          {/* Desktop logo */}
          <button
            type="button"
            onClick={() => handleNavigation("top")}
            aria-label="Go to homepage"
            className="hidden h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full border border-white/20 bg-white shadow-xl md:flex"
          >
            <img
              src={logo}
              alt="Clarence Arborcare and Landscaping logo"
              width="48"
              height="48"
              loading="eager"
              decoding="async"
              className="h-full w-full scale-125 object-cover"
            />
          </button>

          <div
            className="nav-frame relative"
            style={{ "--nav-index": activeIndex }}
          >
            <nav
              aria-label="Primary navigation"
              className="nav-notch flex items-end rounded-full border border-white/15 bg-black/20 px-2 shadow-xl backdrop-blur-md"
            >
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = active === item.id;

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() =>
                      handleNavigation(item.id)
                    }
                    aria-current={
                      isActive ? "page" : undefined
                    }
                    className="relative flex h-16 w-16 flex-col items-center justify-end pb-2 md:w-28"
                  >
                    <span
                      aria-hidden="true"
                      className={`mb-1 text-white/70 transition-opacity duration-300 ${
                        isActive
                          ? "opacity-0"
                          : "opacity-100"
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

            <span
              aria-hidden="true"
              className="nav-bubble pointer-events-none absolute top-0 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/30 text-white shadow-lg backdrop-blur-md"
            >
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