import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy – VeloraBrew",
  description:
    "Learn how VeloraBrew collects, uses, and protects your personal information. We are committed to transparency, security, and compliance.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white rounded-lg my-2 mx-auto px-4 py-8 text-gray-800" style={{ fontSize: 14, lineHeight: 1.6, color: "#4a4a4a" }}>
      <article className="max-w-3xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold text-center text-green-700 mb-6">
          Privacy Policy – VeloraBrew
        </h1>

        <section className="mb-6">
          <p className="leading-relaxed">
            At **VeloraBrew**, we are committed to providing you with a safe and secure way to explore our curated coffee gear. Protecting your **personal information** is a core part of that commitment.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">1. Information We Collect</h2>
          <p className="leading-relaxed">
            We collect personal information from you when you interact with our Site. This includes your IP address and information about your device, browser, and how you use our Site. This data is collected primarily for analytical purposes to help us understand how our Site is being used and to improve your experience.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">2. Use of Cookies and Affiliate Links</h2>
          <p className="leading-relaxed">
            Our Site uses cookies and similar tracking technologies to track your activity. Cookies are small data files placed on your device or computer. We use cookies to track your clicks on our affiliate links.
          </p>
          <p className="leading-relaxed mt-2">
            When you click on a product link, you will be directed to the third-party website, **AliExpress.com**. We do not collect your personal payment information or other sensitive data. **All transactions, personal data collection, and processing are handled by AliExpress.com, which has its own Privacy Policy.**
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">3. Your Rights and Choices</h2>
          <p className="leading-relaxed">
            Depending on your location, you may have the right to access the personal information we hold about you, to ask that your personal information be corrected, or to request that your personal information be erased.
          </p>
          <p className="leading-relaxed mt-2">
            If you would like to exercise these rights, please contact us through the contact information provided below.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">4. Changes to This Privacy Policy</h2>
          <p className="leading-relaxed">
            We may update this Privacy Policy from time to time in order to reflect changes to our practices or for other operational, legal, or regulatory reasons. Any updated information will be posted on **[Your Website Name]**. Your continued use of the service after any update means you agree to the new terms.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">5. Contact Information</h2>
          <p className="leading-relaxed">
            For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by email at **[Your Email Address]**.
          </p>
        </section>
      </article>
    </div>
  );
}
