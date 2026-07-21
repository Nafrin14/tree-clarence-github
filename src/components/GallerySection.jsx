import treeRemovalImg from "../assets/images/gallery_tree_removal.webp";
import treeTrimmingImg from "../assets/images/service_tree_trimming.webp";
import emergencyTreeImg from "../assets/images/gallery_emergency_tree.webp";
import stumpGrindingImg from "../assets/images/gallery_stump_grinding.webp";

export default function GallerySection() {
  const items = [
    {
      title: "Tree Removal",
      subtitle: "Safe & Professional",
      image: treeRemovalImg
    },
    {
      title: "Tree Trimming",
      subtitle: "Healthy Growth",
      image: treeTrimmingImg
    },
    {
      title: "Emergency Service",
      subtitle: "24/7 Response",
      image: emergencyTreeImg
    },
    {
      title: "Stump Grinding",
      subtitle: "Complete Cleanup",
      image: stumpGrindingImg
    },
  ];

  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-[#2c3e35] px-6 py-28 text-white md:px-12"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <span className="rounded-full border border-[#77996c]/30 bg-[#77996c]/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-[#a3c299]">
            Gallery
          </span>

          <h2 className="mt-6 font-serif text-5xl font-semibold">
            Our <span className="services-gradient">Recent Work</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-white/60">
            A showcase of our professional tree care services and completed
            projects.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.title}
              className="service-card service-card-visible group aspect-[4/5] flex flex-col justify-end overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#28362f] via-[#28362f]/60 to-transparent" />

              <div className="relative z-10 p-6">
                <h3 className="font-serif text-2xl">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm text-white/70">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}