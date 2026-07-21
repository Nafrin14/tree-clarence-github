import { useEffect, useRef, useState } from "react";

const services = [
  {
    title: "Tree Trimming & Pruning",
    icon: "✂️",
    description:
      "Expert shaping and pruning to promote healthy growth, enhance curb appeal, and maintain the beauty of your landscape.",
  },
  {
    title: "Tree Removal",
    icon: "🪓",
    description:
      "Safe and efficient removal of hazardous, dead, or unwanted trees. We handle all sizes with industry-leading equipment.",
  },
  {
    title: "Stump Grinding",
    icon: "⚙️",
    description:
      "Complete stump removal that eliminates tripping hazards and frees your yard for replanting, landscaping, or lawn expansion.",
  },
  {
    title: "Emergency Tree Service",
    icon: "🚨",
    description:
      "Round-the-clock emergency response for storm-damaged or fallen trees. We're ready to protect your property at any hour.",
    badge: "24/7",
  },
];

function useInView() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

function ServiceCard({ service, index }) {
  const { ref, visible } = useInView();

  return (
    <article
      ref={ref}
      className={`service-card ${
        visible ? "service-card-visible" : ""
      }`}
      style={{
        transitionDelay: `${index * 120}ms`,
      }}
    >
      <div className="service-card-glow" />

      <div className="relative z-10">
        <div className="mb-7 flex items-start justify-between">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#77996c]/15 text-4xl">
            {service.icon}
          </div>

          {service.badge && (
            <span className="rounded-full bg-red-500/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-red-300">
              {service.badge}
            </span>
          )}
        </div>

        <h3 className="mb-4 font-serif text-3xl font-semibold text-white">
          {service.title}
        </h3>

        <p className="mb-8 leading-7 text-white/60">
          {service.description}
        </p>

        <a
          href="#contact"
          className="service-link inline-flex items-center gap-2 text-sm font-medium text-[#95b88b]"
        >
          Get a Quote
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </article>
  );
}

function ServicesSection() {
  const heading = useInView();

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#28362f] px-6 py-28 text-white md:px-12 md:py-32"
    >
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-[#628059]/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl">
        <div
          ref={heading.ref}
          className={`service-heading mb-16 text-center ${
            heading.visible ? "service-heading-visible" : ""
          }`}
        >
          <p className="mb-4 text-xs uppercase tracking-[0.4em] text-[#8aab80]">
            What We Do
          </p>

          <h2 className="mb-6 font-serif text-4xl font-semibold md:text-6xl">
            Our{" "}
            <span className="services-gradient italic">
              Services
            </span>
          </h2>

          <p className="mx-auto max-w-2xl text-base leading-7 text-white/60 md:text-lg">
            From routine maintenance to emergency response, we handle all your
            tree care needs with expertise and professionalism.
          </p>

          <div className="mx-auto mt-10 h-64 w-full max-w-4xl overflow-hidden rounded-[2rem]">
            <img
              src="/service_tree_trimming.webp"
              alt="Professional tree trimming"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;