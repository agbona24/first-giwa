import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import ContactHero from "@/components/contact/ContactHero";
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
      <ContactHero />

      <Section background="surface">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            <div className="lg:col-span-3">
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-2 text-text-dark">Send Us a Message</h2>
              <p className="text-text-muted mb-6">Fill out the form and our team will get back to you within 24 hours.</p>
              <ContactForm />
            </div>
            <div className="lg:col-span-2">
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-2 text-text-dark">Get in Touch</h2>
              <p className="text-text-muted mb-6">Prefer direct contact? Reach us through any of these channels.</p>
              <ContactInfo />
              <LocationMap />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
