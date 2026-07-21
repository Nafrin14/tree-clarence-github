import midMountains from "../assets/images/tree-mid.png";
import foreGrass from "../assets/images/tree-fore.png";
import treeHero from "../assets/images/tree-hero.webp";
import treeHero960 from "../assets/images/tree-hero-960.webp";

const leaves = [
  { id: 1, left: 4, delay: 1, duration: 18, size: 6, sway: 42 },
  { id: 2, left: 10, delay: 5, duration: 21, size: 8, sway: -55 },
  { id: 3, left: 16, delay: 2, duration: 19, size: 5, sway: 67 },
  { id: 4, left: 22, delay: 8, duration: 23, size: 7, sway: -36 },
  { id: 5, left: 28, delay: 3, duration: 20, size: 9, sway: 58 },
  { id: 6, left: 34, delay: 10, duration: 24, size: 6, sway: -62 },
  { id: 7, left: 40, delay: 4, duration: 17, size: 5, sway: 39 },
  { id: 8, left: 46, delay: 7, duration: 22, size: 8, sway: -48 },
  { id: 9, left: 52, delay: 1.5, duration: 19, size: 6, sway: 64 },
  { id: 10, left: 58, delay: 9, duration: 25, size: 7, sway: -40 },
  { id: 11, left: 64, delay: 2.5, duration: 18, size: 5, sway: 51 },
  { id: 12, left: 70, delay: 6, duration: 23, size: 9, sway: -66 },
  { id: 13, left: 76, delay: 11, duration: 21, size: 6, sway: 44 },
  { id: 14, left: 82, delay: 3.5, duration: 20, size: 8, sway: -52 },
  { id: 15, left: 88, delay: 8.5, duration: 24, size: 5, sway: 61 },
  { id: 16, left: 94, delay: 4.5, duration: 18, size: 7, sway: -43 },
];

function FloatingLeaves() {
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
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };

  return (
    <section
      id="top"
      className="hero-section relative min-h-screen w-full overflow-hidden"
    >
      {/* Main hero background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={treeHero960}
          srcSet={`${treeHero960} 960w, ${treeHero} 1920w`}
          sizes="100vw"
          alt="Ancient oak tree at sunrise in Clarence Center, New York"
          width="1920"
          height="1280"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="h-full w-full object-cover object-center"
        />
      </div>

      {/* Soft dark overlay for text visibility */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-black/10 via-black/15 to-black/45"
      />

      {/* Distant mountain layer */}
      <img
        src={midMountains}
        alt=""
        aria-hidden="true"
        width="1920"
        height="1080"
        loading="eager"
        decoding="async"
        className="pointer-events-none absolute inset-0 z-[5] h-full w-full select-none object-cover object-bottom opacity-45"
      />

      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10"
      >
        <div className="hero-glow absolute left-1/2 top-[18%] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#a4d38b]/25 blur-3xl" />
      </div>

      <FloatingLeaves />

      {/* Foreground grass */}
      <img
        src={foreGrass}
        alt=""
        aria-hidden="true"
        width="1920"
        height="600"
        loading="eager"
        decoding="async"
        className="pointer-events-none absolute bottom-[-35px] left-[-15%] z-[25] w-[130%] max-w-none select-none"
      />

      {/* Hero content */}
      <div className="relative z-30 flex min-h-screen flex-col items-center justify-center px-6 pb-24 pt-28 text-center md:pb-20 md:pt-32">
        <p className="hero-fade-up hero-delay-1 mb-6 text-xs uppercase tracking-[0.4em] text-[#dcefd4]">
          Quality Tree Services
        </p>

        <h1 className="hero-fade-up hero-delay-2 max-w-5xl font-serif text-5xl font-semibold leading-[0.95] text-[#f7fbf4] drop-shadow-lg md:text-7xl lg:text-8xl">
          Buffalo&apos;s{" "}
          <span className="hero-gradient italic">
            Premier
          </span>
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
          className="hero-pop-in hero-delay-4 mt-10 rounded-full border border-white/40 bg-black/20 px-6 py-3 text-sm text-white backdrop-blur-sm transition hover:bg-white/15"
        >
          View Our Services ↓
        </a>
      </div>
    </section>
  );
}

export default Hero;