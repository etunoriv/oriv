import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Privacy · Oriv",
  description:
    "Oriv Privacy Policy. How Oriv, Inc. collects, uses, discloses, and safeguards your information.",
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-3xl px-6 pt-32 pb-24 md:px-10 md:pt-40">
        <p className="eyebrow mb-5">Last updated: May 13, 2026</p>
        <h1 className="headline-xl mb-10 text-[var(--on-surface)]">
          Oriv Privacy Policy
        </h1>

        <div className="space-y-10 text-[var(--on-surface)]">
          <section>
            <h2 className="headline-sm mb-3">01 Introduction</h2>
            <p className="body-md text-[var(--on-surface-variant)]">
              Oriv, Inc. (&ldquo;Company,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is committed
              to protecting your privacy. This Privacy Policy explains how we collect,
              use, disclose, and safeguard your information when you use our product
              or service.
            </p>
          </section>

          <section>
            <h2 className="headline-sm mb-3">02 General Principles</h2>
            <p className="mb-3 body-md text-[var(--on-surface-variant)]">
              The organization adheres to these principles during data processing:
            </p>
            <ul className="space-y-2 body-md text-[var(--on-surface-variant)]">
              <li>— Fair, lawful, and transparent processing</li>
              <li>— Data collection for specific, explicit, and legitimate purposes</li>
              <li>— Data minimization, accuracy, and storage limitation</li>
              <li>— Ensuring data security and integrity</li>
            </ul>
          </section>

          <section>
            <h2 className="headline-sm mb-3">03 Information We Collect</h2>
            <p className="mb-3 body-md text-[var(--on-surface-variant)]">
              Personal information categories include:
            </p>
            <ul className="space-y-2 body-md text-[var(--on-surface-variant)]">
              <li>— Contact information (e.g., name, address, email, phone number)</li>
              <li>— Account credentials</li>
              <li>— Payment information</li>
              <li>— Usage data and preferences</li>
              <li>— Device information and identifiers</li>
              <li>— Information provided through online contact forms</li>
              <li>— Profile information if you create an account with us</li>
            </ul>
          </section>

          <section>
            <h2 className="headline-sm mb-3">04 How We Use Your Information</h2>
            <ul className="space-y-2 body-md text-[var(--on-surface-variant)]">
              <li>— Providing, maintaining, and improving products/services</li>
              <li>— Processing transactions and sending related information</li>
              <li>— Responding to your comments and questions</li>
              <li>— Sending technical notices, updates, and marketing communications</li>
              <li>— Protecting against fraudulent or illegal activity</li>
              <li>— Personalizing website content and search</li>
              <li>— Creating and pursuing business leads</li>
              <li>— Complying with applicable laws</li>
            </ul>
          </section>

          <section>
            <h2 className="headline-sm mb-3">05 Legal Basis for Processing</h2>
            <ul className="space-y-2 body-md text-[var(--on-surface-variant)]">
              <li>— Your consent</li>
              <li>— Performance of a contract</li>
              <li>— Compliance with a legal obligation</li>
              <li>— Legitimate interests pursued by us or a third party</li>
            </ul>
          </section>

          <section>
            <h2 className="headline-sm mb-3">06 Information Sharing and Disclosure</h2>
            <ul className="space-y-2 body-md text-[var(--on-surface-variant)]">
              <li>— Service providers who help operate our business</li>
              <li>— Legal authorities when required by law</li>
              <li>— Affiliated companies as part of regular business operations</li>
              <li>— In the event of a merger, sale, or other business transfer</li>
            </ul>
          </section>

          <section>
            <h2 className="headline-sm mb-3">07 Data Transfers</h2>
            <p className="body-md text-[var(--on-surface-variant)]">
              As a Delaware C-Corp, we may transfer data internationally. We ensure
              appropriate safeguards are in place for transfers outside the EU/EEA,
              such as Standard Contractual Clauses.
            </p>
          </section>

          <section>
            <h2 className="headline-sm mb-3">08 Your Privacy Rights</h2>
            <ul className="space-y-2 body-md text-[var(--on-surface-variant)]">
              <li>— Access your personal information</li>
              <li>— Correct inaccurate information</li>
              <li>— Delete your personal information</li>
              <li>— Object to certain processing activities</li>
              <li>— Restrict processing</li>
              <li>— Data portability</li>
              <li>— Withdraw consent</li>
            </ul>
          </section>

          <section>
            <h2 className="headline-sm mb-3">09 Security Measures</h2>
            <p className="body-md text-[var(--on-surface-variant)]">
              We implement appropriate technical and organizational measures to
              protect your personal information from unauthorized access, loss, or
              alteration.
            </p>
          </section>

          <section>
            <h2 className="headline-sm mb-3">10 Cookies and Similar Technologies</h2>
            <p className="body-md text-[var(--on-surface-variant)]">
              We use cookies and similar technologies. Please refer to our separate
              Cookie Policy for more information.
            </p>
          </section>

          <section>
            <h2 className="headline-sm mb-3">11 Changes to This Policy</h2>
            <p className="body-md text-[var(--on-surface-variant)]">
              Updates may occur periodically with notification via posting on the
              website.
            </p>
          </section>

          <section>
            <h2 className="headline-sm mb-3">12 Contact Us</h2>
            <p className="mb-2 body-md text-[var(--on-surface-variant)]">
              <strong className="text-[var(--on-surface)]">Oriv, Inc.</strong>
              <br />
              STE 86243
              <br />
              2261 Market Street
              <br />
              San Francisco, CA 94114
            </p>
            <p className="body-md text-[var(--on-surface-variant)]">
              Contact via{" "}
              <a
                href="mailto:contact@oriv.io"
                className="underline underline-offset-4 hover:text-[var(--on-surface)]"
              >
                contact form
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="headline-sm mb-3">13 Complaints</h2>
            <p className="body-md text-[var(--on-surface-variant)]">
              Individuals may contact the organization or lodge complaints with local
              data protection authorities.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
