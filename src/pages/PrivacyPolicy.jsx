import { Link } from "react-router-dom";

const sections = [
  {
    title: "1. Information We Collect",
    content: (
      <>
        <p>
          We may collect personal information that you voluntarily provide
          when requesting an estimate, contacting us, or using our website.
        </p>

        <p>This information may include:</p>

        <ul>
          <li>Your name</li>
          <li>Phone number</li>
          <li>Email address</li>
          <li>Property or service address</li>
          <li>Details about the tree services you require</li>
          <li>Any information submitted through our contact form</li>
        </ul>
      </>
    ),
  },
  {
    title: "2. How We Use Your Information",
    content: (
      <>
        <p>We may use the information we collect to:</p>

        <ul>
          <li>Respond to enquiries and estimate requests</li>
          <li>Schedule tree care services</li>
          <li>Communicate about your requested service</li>
          <li>Provide customer support</li>
          <li>Improve our website and services</li>
          <li>Maintain business and service records</li>
          <li>Comply with legal obligations</li>
        </ul>
      </>
    ),
  },
  {
    title: "3. Sharing of Information",
    content: (
      <>
        <p>
          We do not sell, rent, or trade your personal information. We may
          share limited information with trusted service providers when
          necessary to operate our business, maintain the website, process
          enquiries, or provide requested services.
        </p>

        <p>
          Information may also be disclosed when required by law or when
          necessary to protect our legal rights, customers, employees, or
          property.
        </p>
      </>
    ),
  },
  {
    title: "4. Contact Forms and Communications",
    content: (
      <>
        <p>
          When you submit information through our website contact form, the
          details are used to respond to your request and provide information
          about our tree services.
        </p>

        <p>
          By providing your phone number or email address, you agree that Tree
          Clarence may contact you regarding your enquiry, estimate, scheduled
          service, or related customer support.
        </p>
      </>
    ),
  },
  {
    title: "5. Cookies and Website Data",
    content: (
      <>
        <p>
          Our website may use cookies or similar technologies to improve
          functionality, understand website usage, and provide a better visitor
          experience.
        </p>

        <p>
          You may control or disable cookies using your browser settings.
          Disabling cookies may affect some website functionality.
        </p>
      </>
    ),
  },
  {
    title: "6. Data Security",
    content: (
      <p>
        We take reasonable administrative and technical measures to protect
        personal information from unauthorized access, misuse, loss, or
        disclosure. However, no internet transmission or electronic storage
        system can be guaranteed to be completely secure.
      </p>
    ),
  },
  {
    title: "7. Third-Party Services",
    content: (
      <p>
        Our website may use third-party services for forms, hosting, analytics,
        communication, or other website functions. These providers may process
        information according to their own privacy policies and security
        practices.
      </p>
    ),
  },
  {
    title: "8. Your Privacy Rights",
    content: (
      <>
        <p>
          Depending on applicable law, you may request access to, correction
          of, or deletion of personal information we hold about you.
        </p>

        <p>
          To make a request, contact us using the information provided at the
          bottom of this policy.
        </p>
      </>
    ),
  },
  {
    title: "9. Changes to This Privacy Policy",
    content: (
      <p>
        We may update this Privacy Policy periodically. Any updated version
        will be posted on this page with a revised last-updated date. Continued
        use of the website after changes are posted constitutes acceptance of
        the updated policy.
      </p>
    ),
  },
];

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#32463c] px-6 pb-24 pt-36 text-white md:px-12">
      {/* Background decorations */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-20 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-[#77996c]/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-5xl">
        {/* Heading */}
        <header className="mb-14 text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.4em] text-[#8aab80]">
            Legal Information
          </p>

          <h1 className="font-serif text-4xl font-semibold sm:text-5xl md:text-6xl">
            Privacy{" "}
            <span className="services-gradient italic">Policy</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/60 md:text-lg">
            This Privacy Policy explains how Tree Clarence collects, uses, and
            protects your information.
          </p>

          <p className="mt-4 text-sm text-white/40">
            Last updated: July 2026
          </p>
        </header>

        {/* Policy card */}
        <article className="legal-page-card">
          <div className="legal-introduction">
            <p>
              Tree Clarence, operated by KD Associates Buffalo INC., respects
              your privacy and is committed to protecting the personal
              information you share with us.
            </p>

            <p>
              This policy applies to information collected through this
              website, contact forms, phone calls, emails, and enquiries about
              our services.
            </p>
          </div>

          <div className="mt-10 space-y-10">
            {sections.map((section) => (
              <section key={section.title} className="legal-section">
                <h2>{section.title}</h2>

                <div className="legal-content">{section.content}</div>
              </section>
            ))}

            <section className="legal-section">
              <h2>10. Contact Information</h2>

              <div className="legal-content">
                <p>
                  For questions or concerns regarding this Privacy Policy,
                  please contact us:
                </p>

                <div className="legal-contact-card">
                  <p>
                    <strong>Company:</strong> Tree Clarence
                  </p>

                  <p>
                    <strong>Operator:</strong> KD Associates Buffalo INC.
                  </p>

                  <p>
                    <strong>Address:</strong> 9950 County Rd, Clarence Center,
                    NY 14032
                  </p>

                  <p>
                    <strong>Phone:</strong>{" "}
                    <a href="tel:+17167108864">716-710-8864</a>
                  </p>

                  <p>
                    <strong>Email:</strong>{" "}
                    <a href="mailto:kdassociatebfinc@gmail.com">
                      kdassociatebfinc@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </section>
          </div>
        </article>

        <div className="mt-10 text-center">
          <Link
            to="/"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#97ba8d]/40 bg-[#97ba8d]/10 px-7 font-semibold text-[#a6c79c] transition hover:bg-[#97ba8d] hover:text-[#28362f]"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}