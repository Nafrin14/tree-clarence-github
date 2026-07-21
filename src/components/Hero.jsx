import { useEffect, useState } from "react";

import midMountains from "../assets/images/tree-mid.png";
import foreGrass from "../assets/images/tree-fore.png";

const leavesCount = 20;

function FloatingLeaves() {
  const [leaves, setLeaves] = useState([]);

  useEffect(() => {
    const generatedLeaves = Array.from(
      { length: leavesCount },
      (_, index) => ({
        id: index,
        left: Math.random() * 100,
        delay: Math.random() * 12,
        duration: Math.random() * 10 + 12,
        size: Math.random() * 7 + 4,
        sway: Math.random() * 140 - 70,
      })
    );

    setLeaves(generatedLeaves);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-20 overflow-hidden"
    >
      {leaves.map((leaf) => (
        <span
          key={leaf.id}
          className="hero-leaf absolute -top-5 rounded-full bg-[#9aca83]/45 blur-[1px]"
          style={{
            left: `${leaf.left}%`,
            width: `${leaf.size}px`,
            height: `${leaf.size}px`,
            animationDelay: `${leaf.delay}s`,
            animationDuration: `${leaf.duration}s`,
            "--leaf-sway": `${leaf.sway}px`,
          }}
        />
      ))}
    </div>
  );
}

function Hero() {
  const scrollToServices = (event) => {
    event.preventDefault();

    document
      .getElementById("services")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="top"
      className="hero-section relative min-h-screen w-full overflow-hidden"
    >
      <FloatingLeaves />

      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="hero-glow absolute left-1/2 top-[18%] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#a4d38b]/35 blur-3xl" />
      </div>

      {/* Distant mountains */}
      <img
        src={midMountains}
        alt=""
        aria-hidden="true"
        width="1920"
        height="1080"
        decoding="async"
        fetchPriority="high"
        className="hero-mountains pointer-events-none absolute bottom-0 left-0 h-full w-full select-none object-cover object-bottom opacity-90"
      />

      {/* Main hero tree */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="/tree-hero.webp"
          srcSet="/tree-hero-960.webp 960w, /tree-hero.webp 1920w"
          sizes="100vw"
          alt="Ancient oak tree silhouette at sunrise"
          width="1920"
          height="1280"
          decoding="async"
          loading="eager"
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover object-bottom"
        />
      </div>

      {/* Foreground grass */}
      <img
        src={foreGrass}
        alt=""
        aria-hidden="true"
        width="1920"
        height="600"
        decoding="async"
        className="hero-grass pointer-events-none absolute bottom-[-35px] left-[-15%] z-[5] w-[130%] max-w-none select-none"
      />

      {/* Hero content */}
      <div className="relative z-30 flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <p className="hero-fade-up hero-delay-1 mb-6 text-xs uppercase tracking-[0.4em] text-[#dcefd4]">
          Quality Tree Services
        </p>

        <h1 className="hero-fade-up hero-delay-2 max-w-5xl font-serif text-5xl font-semibold leading-[0.95] text-[#f7fbf4] drop-shadow-lg md:text-7xl lg:text-8xl">
          Buffalo&apos;s{" "}
          <span className="hero-gradient italic">Premier</span>
          <br />
          Tree Experts.
        </h1>

        <p className="hero-fade-up hero-delay-3 mt-6 max-w-xl text-base leading-7 text-white/85 drop-shadow md:text-lg">
          Locally owned and operated tree service company committed to the
          highest standards of care, safety, and customer satisfaction.
        </p>

        <a
          href="#services"
          onClick={scrollToServices}
          className="hero-pop-in hero-delay-4 mt-10 rounded-full border border-white/40 bg-black/10 px-6 py-3 text-sm text-white backdrop-blur-sm transition hover:bg-white/15"
        >
          View Our Services ↓
        </a>
      </div>
    </section>
  );
}

export default Hero;