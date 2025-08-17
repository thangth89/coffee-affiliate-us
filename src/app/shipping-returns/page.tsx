import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shipping & Returns – VeloraBrew",
  description:
    "Learn about our shipping policy, delivery times, and returns process. VeloraBrew is an affiliate website and all transactions are handled by AliExpress.",
};

export default function ShippingAndReturnsPage() {
  return (
    <div className="bg-white rounded-lg my-2 mx-auto px-4 py-8 text-gray-800" style={{ fontSize: 14, lineHeight: 1.6, color: "#4a4a4a" }}>
      <article className="max-w-3xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold text-center text-green-700 mb-6">
          Shipping & Returns – VeloraBrew
        </h1>

        <section className="mb-6">
          <p className="leading-relaxed">
            Welcome to the Shipping & Returns page for VeloraBrew. As an affiliate website, all products you purchase are sold and shipped by **AliExpress.com** and its sellers. We are here to provide general guidance, but for specific questions about your order, you must contact the seller directly through the AliExpress platform.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">1. Shipping Policy</h2>
          <p className="leading-relaxed">
            **Order Processing & Shipping:** All orders are processed and shipped by the respective sellers on AliExpress. Shipping times and costs vary depending on the seller&apos;s location, the item&apos;s destination, and the chosen shipping method.
          </p>
          <ul className="list-disc list-inside leading-relaxed mt-2">
            <li>
              **Estimated Delivery Time:** Delivery times can range from a few days to several weeks. Please check the estimated delivery date provided by AliExpress at the time of your purchase.
            </li>
            <li>
              **Tracking:** Once your order is shipped, AliExpress will provide a tracking number. You can track your package&apos;s status directly on the AliExpress website.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">2. Returns & Refunds Policy</h2>
          <p className="leading-relaxed">
            The returns and refunds policy is managed entirely by AliExpress and the individual sellers.
          </p>
          <ul className="list-disc list-inside leading-relaxed mt-2">
            <li>
              **Dispute Resolution:** If an item you received is not as described, damaged, or did not arrive, you should open a dispute on the AliExpress platform.
            </li>
            <li>
              **AliExpress Buyer Protection:** AliExpress offers a &quot;Buyer Protection&quot; program which guarantees a refund if you don&apos;t receive your item or if it&apos;s significantly not as described.
            </li>
            <li>
              **Return Shipping:** If a return is necessary, the terms (who pays for return shipping, etc.) will be outlined in the seller&apos;s specific policy.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">3. Our Role as an Affiliate</h2>
          <p className="leading-relaxed">
            As an affiliate website, VeloraBrew does not handle, store, or ship any products. Our role is to provide recommendations and direct you to the products. We cannot assist with direct customer service issues regarding an order you placed.
          </p>
        </section>
        
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">4. Contact Information</h2>
          <p className="leading-relaxed">
            For questions about this policy, you can contact us at **[Your Email Address]**. For all order-related inquiries, please contact the seller on AliExpress directly.
          </p>
        </section>
      </article>
    </div>
  );
}
