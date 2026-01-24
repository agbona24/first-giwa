import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import LocationMap from "@/components/contact/LocationMap";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with First-Giwa Feeds for quotes, bulk orders, and partnership inquiries. Located in Odogbolu, Ogun State, Nigeria.",
};

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-primary pt-32 pb-16 md:pt-36 md:pb-20">
        <Container>
          <p className="text-white/60 text-sm mb-2">Home / Contact</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-heading">
            Contact Us
          </h1>
          <p className="text-white/80 text-lg mt-4 max-w-xl">
            Ready to place an order or have questions? Reach out and we&apos;ll respond within 24 hours.
          </p>
        </Container>
      </section>

      <Section background="surface">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <h2 className="font-heading text-2xl font-semibold mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>
            <div className="lg:col-span-2">
              <h2 className="font-heading text-2xl font-semibold mb-6">Get in Touch</h2>
              <ContactInfo />
              <LocationMap />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
