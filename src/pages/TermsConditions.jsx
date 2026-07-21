import { Link } from "react-router-dom";

const sections = [
  {
    title: "1. Acceptance of Terms",
    content: (
      <p>
        By accessing or using the Tree Clarence website, submitting a service
        request, or engaging our services, you agree to these Terms of Service.
        Do not use this website or our services if you do not agree with these
        terms.
      </p>
    ),
  },
  {
    title: "2. Services",
    content: (
      <>
        <p>Tree Clarence provides services that may include:</p>

        <ul>
          <li>Tree trimming and pruning</li>
          <li>Tree removal</li>
          <li>Stump grinding</li>
          <li>Emergency tree services</li>
          <li>Residential and commercial tree care</li>
          <li>Related property cleanup services</li>
        </ul>

        <p>
          Service availability may depend on location, weather, property
          conditions, accessibility, equipment requirements, and safety
          considerations.
        </p>
      </>
    ),
  },
  {
    title: "3. Estimates and Pricing",
    content: (
      <>
        <p>
          Estimates are based on the information available at the time of
          inspection or enquiry. An estimate may change if the scope of work,
          tree condition, access, hazards, equipment requirements, or site
          conditions differ from what was initially described.
        </p>

        <p>
          Any significant change in price or scope will be communicated before
          additional work is performed.
        </p>
      </>
    ),
  },
  {
    title: "4. Scheduling and Access",
    content: (
      <>
        <p>
          Customers are responsible for providing safe and reasonable access to
          the service location. Vehicles, furniture, decorations, pets, and
          other obstacles should be removed from the work area before the
          scheduled service.
        </p>

        <p>
          Service dates may be changed because of unsafe weather, emergencies,
          equipment issues, staffing availability, or conditions beyond our
          reasonable control.
        </p>
      </>
    ),
  },
  {
    title: "5. Customer Responsibilities",
    content: (
      <>
        <p>The customer is responsible for:</p>

        <ul>
          <li>Providing accurate property and service information</li>
          <li>Identifying property lines where necessary</li>
          <li>Obtaining required property-owner approval</li>
          <li>Disclosing known underground or overhead hazards</li>
          <li>Securing pets and keeping people away from the work area</li>
          <li>Obtaining permits unless otherwise agreed in writing</li>
        </ul>
      </>
    ),
  },
  {
    title: "6. Safety",
    content: (
      <p>
        Tree care work may involve dangerous equipment, falling branches,
        vehicles, wood debris, and other hazards. Customers and visitors must
        remain outside designated work areas and follow all safety instructions
        provided by our team.
      </p>
    ),
  },
  {
    title: "7. Payment",
    content: (
      <>
        <p>
          Payment terms will be provided through an estimate, invoice, or
          service agreement. Unless otherwise agreed, payment is due when the
          work is completed.
        </p>

        <p>
          Customers are responsible for applicable taxes, approved additional
          work, and any fees stated in the service agreement.
        </p>
      </>
    ),
  },
  {
    title: "8. Cancellations",
    content: (
      <p>
        Customers should provide reasonable notice when cancelling or
        rescheduling an appointment. A cancellation fee may apply when
        equipment, personnel, permits, or special arrangements have already
        been committed to the job.
      </p>
    ),
  },
  {
    title: "9. Property Conditions and Damage",
    content: (
      <>
        <p>
          We take reasonable care while performing services. However, Tree
          Clarence is not responsible for damage caused by undisclosed,
          concealed, fragile, deteriorated, incorrectly marked, or pre-existing
          property conditions.
        </p>

        <p>
          These conditions may include underground utilities, irrigation
          systems, septic components, unstable surfaces, hidden structures, or
          pre-existing damage.
        </p>
      </>
    ),
  },
  {
    title: "10. Emergency Services",
    content: (
      <p>
        Emergency services are subject to availability, weather, accessibility,
        safety, and local conditions. Emergency pricing may differ from
        standard scheduled service because of urgency, after-hours work,
        additional personnel, or specialized equipment.
      </p>
    ),
  },
  {
    title: "11. Website Use",
    content: (
      <>
        <p>
          Website content is provided for general informational purposes. You
          may not copy, misuse, damage, interfere with, or attempt unauthorized
          access to this website or its systems.
        </p>

        <p>
          Website information should not be considered a substitute for an
          on-site tree inspection or professional safety assessment.
        </p>
      </>
    ),
  },
  {
    title: "12. Intellectual Property",
    content: (
      <p>
        Website text, graphics, branding, logos, design, and other original
        content are owned by or licensed to Tree Clarence and may not be copied,
        reproduced, or distributed without prior written permission.
      </p>
    ),
  },
  {
    title: "13. Limitation of Liability",
    content: (
      <p>
        To the maximum extent permitted by law, Tree Clarence and KD Associates
        Buffalo INC. will not be liable for indirect, incidental, special, or
        consequential losses arising from website use, service delays, or
        circumstances beyond our reasonable control.
      </p>
    ),
  },
  {
    title: "14. Changes to These Terms",
    content: (
      <p>
        We may update these Terms of Service from time to time. The revised
        terms will be posted on this page. Continued use of the website or
        services after an update constitutes acceptance of the revised terms.
      </p>
    ),
  },
];

export default function TermsConditions() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#32463c] px-6 pb-24 pt-36 text-white md:px-12">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-20 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-[#77996c]/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-5xl">
        <header className="mb-14 text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.4em] text-[#8aab80]">
            Legal Information
          </p>

          <h1 className="font-serif text-4xl font-semibold sm:text-5xl md:text-6xl">
            Terms of{" "}
            <span className="services-gradient italic">Service</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/60 md:text-lg">
            These terms govern your use of the Tree Clarence website and our
            professional tree care services.
          </p>

          <p className="mt-4 text-sm text-white/40">
            Last updated: July 2026
          </p>
        </header>

        <article className="legal-page-card">
          <div className="legal-introduction">
            <p>
              These Terms of Service form an agreement between you and Tree
              Clarence, operated by KD Associates Buffalo INC.
            </p>

            <p>
              Specific estimates, invoices, or written service agreements may
              contain additional terms relating to a particular project.
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
              <h2>15. Contact Information</h2>

              <div className="legal-content">
                <p>
                  For questions regarding these Terms of Service, contact:
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