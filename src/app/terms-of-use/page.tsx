import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use – VeloraBrew",
  description:
    "Review the terms and conditions for using the VeloraBrew website. This includes our affiliate disclosure, intellectual property rights, and limitation of liability.",
};

export default function TermsOfUsePage() {
  return (
    <div className="bg-white rounded-lg my-2 mx-auto px-4 py-8 text-gray-800" style={{ fontSize: 14, lineHeight: 1.6, color: "#4a4a4a" }}>
      <article className="max-w-3xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold text-center text-green-700 mb-6">
          Terms of Use – VeloraBrew
        </h1>

        <section className="mb-6">
          <p className="leading-relaxed">
            Welcome to **VeloraBrew**! These Terms of Use govern your access and use of our website. By accessing or using the Site, you agree to be bound by these Terms of Use and our Privacy Policy. If you do not agree, you must not use this Site.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">1. Affiliate Disclosure</h2>
          <p className="leading-relaxed">
            VeloraBrew is a participant in the AliExpress Affiliate Program, an affiliate advertising program designed to provide a means for us to earn fees by linking to AliExpress.com and other affiliated sites. This means that if you click on a product link on our Site and make a purchase, we may receive a commission. This does not affect the price you pay for any product. We only recommend products we genuinely believe in and that provide value to our users.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">2. Intellectual Property Rights</h2>
          <p className="leading-relaxed">
            All content on this Site, including text, graphics, logos, images, and the overall design, is the property of VeloraBrew or its content suppliers and is protected by copyright laws. You may not reproduce, distribute, or otherwise use any content from this Site without our prior written permission.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">3. Limitation of Liability</h2>
          <p className="leading-relaxed">
            The information and products on this Site are provided "as is" without any warranties of any kind. VeloraBrew is an affiliate site and does not sell or ship products directly. We are not responsible for any issues with the products you purchase, including shipping, quality, or returns. Any issues should be addressed with the third-party seller (AliExpress.com) directly.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">4. Governing Law</h2>
          <p className="leading-relaxed">
            These Terms of Use and your use of the Site are governed by and construed in accordance with the laws of the United States. Any disputes relating to these terms shall be subject to the exclusive jurisdiction of the courts of the United States.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">5. Changes to the Terms</h2>
          <p className="leading-relaxed">
            We reserve the right to modify these Terms of Use at any time. Any changes will be posted on this page. Your continued use of the Site after any such changes constitutes your acceptance of the new Terms.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">6. Contact Information</h2>
          <p className="leading-relaxed">
            If you have any questions about these Terms, please contact us at **[Your Email Address]**.
          </p>
        </section>
      </article>
    </div>
  );
}
