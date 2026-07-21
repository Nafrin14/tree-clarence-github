import { useEffect, useRef, useState } from "react";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

const FORM_SRC =
  "https://link.kdlead.com/widget/form/PfCYLIwBwBPyLIV9h4Gl";

const FORM_SCRIPT =
  "https://link.kdlead.com/js/form_embed.js";

const contactItems = [
  {
    icon: <FaPhoneAlt aria-hidden="true" />,
    title: "Call Us Anytime",
    lines: [
      "716-710-8864",
      "Available 24/7 for emergencies",
    ],
    link: "tel:+17167108864",
  },
  {
    icon: <FaMapMarkerAlt aria-hidden="true" />,
    title: "Our Location",
    lines: [
      "9950 County Rd",
      "Clarence Center, NY 14032",
      "United States",
    ],
  },
  {
    icon: <FaClock aria-hidden="true" />,
    title: "Business Hours",
    lines: [
      "Mon – Sat: 7:00 AM – 7:00 PM",
      "Emergency: 24/7",
    ],
  },
];

export default function ContactSection() {
  const formShellRef = useRef(null);

  const [shouldLoadForm, setShouldLoadForm] =
    useState(false);

  const [loaded, setLoaded] = useState(false);

  const [showFallback, setShowFallback] =
    useState(false);

  /*
   * Contact form viewportக்கு அருகில் வந்த பிறகு மட்டும்
   * iframe render ஆகும்.
   */
  useEffect(() => {
    const formShell = formShellRef.current;

    if (!formShell || shouldLoadForm) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return;
        }

        setShouldLoadForm(true);
        observer.disconnect();
      },
      {
        root: null,

        /*
         * Contact form screenக்கு வருவதற்கு 200px முன்னால்
         * loading ஆரம்பிக்கும்.
         */
        rootMargin: "200px 0px",

        threshold: 0.01,
      }
    );

    observer.observe(formShell);

    return () => {
      observer.disconnect();
    };
  }, [shouldLoadForm]);

  /*
   * Form load ஆக வேண்டிய நேரத்தில் மட்டும்
   * GHL embed script சேர்க்கப்படும்.
   */
  useEffect(() => {
    if (!shouldLoadForm) {
      return undefined;
    }

    const scriptId = "ghl-form-embed-script";

    const existingScript =
      document.getElementById(scriptId);

    if (!existingScript) {
      const script = document.createElement("script");

      script.id = scriptId;
      script.src = FORM_SCRIPT;
      script.async = true;
      script.defer = true;

      document.body.appendChild(script);
    }

    return undefined;
  }, [shouldLoadForm]);

  /*
   * Form render ஆன பிறகும் 12 secondsக்குள்
   * load ஆகவில்லை என்றால் fallback காட்டும்.
   */
  useEffect(() => {
    if (!shouldLoadForm || loaded) {
      return undefined;
    }

    const fallbackTimer = window.setTimeout(() => {
      setShowFallback(true);
    }, 12000);

    return () => {
      window.clearTimeout(fallbackTimer);
    };
  }, [shouldLoadForm, loaded]);

  const handleFormLoad = () => {
    setLoaded(true);
    setShowFallback(false);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#28362f] px-6 py-28 text-white md:px-12"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#83a961]/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.4em] text-[#8aab80]">
            Get In Touch
          </p>

          <h2 className="font-serif text-4xl font-semibold sm:text-5xl md:text-6xl">
            Request a{" "}
            <span className="services-gradient italic">
              Free Quote
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/60 md:text-lg">
            Tell us about your tree care needs and our team will
            contact you as soon as possible.
          </p>
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Left contact details */}
          <div className="space-y-5">
            {contactItems.map((item) => (
              <article
                key={item.title}
                className="contact-info-card"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#77996c]/15 text-xl text-[#95b88b]">
                  {item.icon}
                </div>

                <div>
                  <h3 className="font-serif text-2xl font-semibold text-white">
                    {item.title}
                  </h3>

                  <div className="mt-3 space-y-1">
                    {item.lines.map((line, index) =>
                      item.link && index === 0 ? (
                        <a
                          key={line}
                          href={item.link}
                          className="block font-semibold text-[#a6c79c] transition hover:text-[#cce0c5]"
                        >
                          {line}
                        </a>
                      ) : (
                        <p
                          key={line}
                          className="leading-6 text-white/55"
                        >
                          {line}
                        </p>
                      )
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Right GHL form */}
          <div
            ref={formShellRef}
            className="contact-form-shell min-h-[891px]"
          >
            {!shouldLoadForm && (
              <div className="contact-loading">
                <div className="contact-loading-line w-1/3" />
                <div className="contact-loading-line w-full" />
                <div className="contact-loading-line w-full" />
                <div className="contact-loading-line w-2/3" />
                <div className="contact-loading-box" />

                <p className="mt-6 text-center text-sm text-white/45">
                  Contact form will load when you reach this
                  section.
                </p>
              </div>
            )}

            {shouldLoadForm &&
              !loaded &&
              !showFallback && (
                <div className="contact-loading">
                  <div className="contact-loading-line w-1/3" />
                  <div className="contact-loading-line w-full" />
                  <div className="contact-loading-line w-full" />
                  <div className="contact-loading-line w-2/3" />
                  <div className="contact-loading-box" />

                  <p className="mt-6 text-center text-sm text-white/45">
                    Loading contact form...
                  </p>
                </div>
              )}

            {shouldLoadForm &&
              showFallback &&
              !loaded && (
                <div className="flex min-h-[891px] flex-col items-center justify-center px-8 text-center">
                  <h3 className="font-serif text-2xl font-semibold">
                    Contact form is taking longer to load
                  </h3>

                  <p className="mt-4 max-w-md leading-7 text-white/55">
                    Please refresh the page or contact us directly
                    by phone.
                  </p>

                  <a
                    href="tel:+17167108864"
                    className="mt-7 rounded-full bg-[#97ba8d] px-7 py-3 font-semibold text-[#28362f] transition hover:bg-[#b8dc90]"
                  >
                    Call 716-710-8864
                  </a>
                </div>
              )}

            {shouldLoadForm && (
              <iframe
                src={FORM_SRC}
                id="inline-PfCYLIwBwBPyLIV9h4Gl"
                title="Request a free tree service quote"
                width="100%"
                height="891"
                loading="lazy"
                sandbox="allow-scripts allow-forms allow-same-origin allow-popups allow-storage-access-by-user-activation"
                allow="storage-access"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Form 0"
                data-height="891"
                data-layout-iframe-id="inline-PfCYLIwBwBPyLIV9h4Gl"
                data-form-id="PfCYLIwBwBPyLIV9h4Gl"
                onLoad={handleFormLoad}
                style={{
                  width: "100%",
                  height: "891px",
                  border: "none",
                  borderRadius: "8px",
                  display:
                    showFallback && !loaded
                      ? "none"
                      : "block",
                }}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}