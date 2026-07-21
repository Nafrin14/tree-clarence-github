import { FaCheckCircle } from "react-icons/fa";

const features = [
  "Certified Arborists",
  "Fully Licensed & Insured",
  "24/7 Emergency Response",
  "Residential & Commercial",
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#2a3a32] px-6 py-28 text-white md:px-12"
    >
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-[#6b8a61]/10 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-2">
        {/* LEFT SIDE */}
        <div>
          <span className="inline-block rounded-full border border-[#77996c]/30 bg-[#77996c]/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-[#a3c299]">
            About Tree Clarence
          </span>

          <h2 className="mt-7 font-serif text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            Professional Tree Care
            <span className="services-gradient block">
              You Can Trust
            </span>
          </h2>

          <p className="mt-8 max-w-xl text-base leading-8 text-white/65 md:text-lg">
            Tree Clarence provides professional tree removal, pruning,
            emergency tree services, and complete tree care using modern
            equipment and experienced crews. Our goal is to keep every
            property safe, clean, and beautiful.
          </p>

          <a
            href="#contact"
            className="mt-10 inline-flex rounded-full border border-[#77996c]/40 bg-[#77996c]/10 px-8 py-4 font-medium text-[#cce0c5] transition hover:border-[#8aab80]/70 hover:bg-[#77996c]/20"
          >
            Learn More
          </a>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-6">
          <div className="relative h-64 w-full overflow-hidden rounded-[2rem]">
            <img
              src="/about_tree_care.webp"
              alt="Professional tree care arborist"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="service-card service-card-visible">
            <h3 className="font-serif text-5xl font-bold text-[#cce0c5] md:text-6xl">
              15+
            </h3>

            <p className="mt-3 text-base text-white/60">
              Years of Professional Experience
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {features.map((item) => (
              <div
                key={item}
                className="service-card service-card-visible flex min-h-[130px] items-center gap-4"
              >
                <FaCheckCircle
                  className="shrink-0 text-[#8aab80]"
                  size={22}
                />

                <span className="font-medium text-white/85">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}