import { Link } from "react-router-dom";
import logo from "../assets/images/logo.webp";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#050b08] border-t border-white/10 text-white">
      {/* CTA */}
      <section className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-14 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-center lg:text-left">
            <h2 className="text-4xl font-serif font-semibold">
              Ready to Transform Your Property?
            </h2>

            <p className="mt-4 text-white/60 max-w-xl">
              Professional tree care, landscaping and emergency tree services
              you can trust. Contact us today for your free estimate.
            </p>
          </div>

          <a
            href="#contact"
            className="rounded-full bg-[#97ba8d] px-8 py-4 font-semibold text-[#28362f] transition hover:bg-[#b8dc90]"
          >
            Get Free Quote
          </a>
        </div>
      </section>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        {/* Company */}
        <div>
          <img
            src={logo}
            alt="Clarence Arborcare & Landscaping"
            width="240"
            height="96"
            loading="lazy"
            className="h-24 w-auto object-contain"
          />

          <p className="mt-5 leading-7 text-white/60">
            Clarence Arborcare & Landscaping provides professional tree
            removal, trimming, pruning, landscaping, and emergency tree
            services throughout Clarence Center and surrounding areas.
          </p>

          <div className="flex gap-4 mt-6">
            <a
              href="#"
              aria-label="Facebook"
              className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#97ba8d] hover:text-black transition"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              aria-label="Instagram"
              className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#97ba8d] hover:text-black transition"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-6">Quick Links</h3>

          <ul className="space-y-3 text-white/60">
            <li>
              <a href="#home" className="hover:text-[#97ba8d] transition">
                Home
              </a>
            </li>

            <li>
              <a href="#services" className="hover:text-[#97ba8d] transition">
                Services
              </a>
            </li>

            <li>
              <a href="#about" className="hover:text-[#97ba8d] transition">
                About
              </a>
            </li>

            <li>
              <a href="#gallery" className="hover:text-[#97ba8d] transition">
                Gallery
              </a>
            </li>

            <li>
              <a href="#contact" className="hover:text-[#97ba8d] transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-semibold mb-6">Our Services</h3>

          <ul className="space-y-3 text-white/60">
            <li>Tree Removal</li>
            <li>Tree Trimming</li>
            <li>Tree Pruning</li>
            <li>Stump Grinding</li>
            <li>Emergency Tree Service</li>
            <li>Landscaping</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-6">Contact Us</h3>

          <div className="space-y-5 text-white/60">
            <div className="flex gap-3">
              <FaPhoneAlt className="mt-1 shrink-0 text-[#97ba8d]" />

              <a
                href="tel:+17167108864"
                className="hover:text-[#97ba8d] transition"
              >
                (716) 710-8864
              </a>
            </div>

            <div className="flex gap-3">
              <FaEnvelope className="mt-1 shrink-0 text-[#97ba8d]" />

              <a
                href="mailto:kdassociatebfinc@gmail.com"
                className="break-all hover:text-[#97ba8d] transition"
              >
                kdassociatebfinc@gmail.com
              </a>
            </div>

            <div className="flex gap-3">
              <FaMapMarkerAlt className="mt-1 shrink-0 text-[#97ba8d]" />

              <address className="not-italic">
                9950 County Rd
                <br />
                Clarence Center,
                <br />
                NY 14032
              </address>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} Clarence Arborcare & Landscaping. All
            Rights Reserved.
          </p>

          <div className="flex gap-6">
            <Link
              to="/privacy-policy"
              className="hover:text-[#97ba8d] transition"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms"
              className="hover:text-[#97ba8d] transition"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
