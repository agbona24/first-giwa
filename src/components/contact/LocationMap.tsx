"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { COMPANY } from "@/lib/constants";

export default function LocationMap() {
  return (
    <Section background="default" className="relative overflow-hidden">
      {/* Gradient background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-sm font-semibold text-primary">Visit Our Location</span>
          </motion.div>

          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-text-dark">
            Find Us in{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Odogbolu
            </span>
          </h2>
          <p className="text-lg text-text-muted">
            Visit our facility to see our operations firsthand and discuss your agricultural feed requirements
          </p>
        </motion.div>

        {/* Map and Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Map Container */}
          <motion.div
            className="lg:col-span-2 relative group"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative backdrop-blur-xl bg-white/90 rounded-3xl overflow-hidden border border-neutral-200/50 shadow-2xl">
              {/* Map */}
              <div className="relative overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.0!2d3.7!3d6.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNDgnMDAuMCJOIDPCsDQyJzAwLjAiRQ!5e0!3m2!1sen!2sng!4v1700000000000!5m2!1sen!2sng"
                  width="100%"
                  height="500"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="First-Giwa Feeds Location"
                  className="w-full transition-all duration-500 group-hover:scale-105"
                />
              </div>

              {/* Gradient border */}
              <div className="h-2 bg-gradient-to-r from-primary via-accent to-secondary" />

              {/* Floating address card */}
              <motion.div
                className="absolute bottom-8 left-8 right-8 backdrop-blur-2xl bg-white/95 rounded-2xl p-6 shadow-xl border border-neutral-200/50"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading font-bold text-text-dark mb-1">Our Address</h3>
                    <p className="text-text-muted text-sm leading-relaxed">{COMPANY.address}</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Decorative corner accents */}
            <div className="absolute -top-3 -right-3 w-20 h-20 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-3 -left-3 w-20 h-20 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-2xl" />
          </motion.div>

          {/* Quick Info Cards */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Directions Card */}
            <motion.a
              href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(COMPANY.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block backdrop-blur-xl bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-6 border border-primary/20 hover:border-primary/40 transition-all duration-300 group"
              whileHover={{ scale: 1.02, y: -4 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="font-heading font-bold text-text-dark group-hover:text-primary transition-colors">Get Directions</h3>
                  <p className="text-xs text-text-muted">Open in Google Maps</p>
                </div>
                <svg className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </motion.a>

            {/* Business Hours Card */}
            <motion.div
              className="backdrop-blur-xl bg-white/90 rounded-2xl p-6 border border-neutral-200/50 shadow-lg"
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-primary flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-text-dark">Business Hours</h3>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-text-muted">Monday - Friday</span>
                  <span className="font-semibold text-text-dark">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-muted">Saturday</span>
                  <span className="font-semibold text-text-dark">9:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-muted">Sunday</span>
                  <span className="font-semibold text-text-dark">Closed</span>
                </div>
              </div>
              {/* Live status indicator */}
              <div className="mt-4 pt-4 border-t border-neutral-200/50 flex items-center gap-2">
                <div className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </div>
                <span className="text-xs font-medium text-green-600">Open Now</span>
              </div>
            </motion.div>

            {/* Quick Contact Card */}
            <motion.div
              className="backdrop-blur-xl bg-gradient-to-br from-accent/5 to-secondary/5 rounded-2xl p-6 border border-accent/20"
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-secondary flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-text-dark">Call Us</h3>
              </div>
              <div className="space-y-1 mb-2">
                <a href={`tel:${COMPANY.phone}`} className="text-sm font-bold text-primary hover:text-accent transition-colors block">
                  {COMPANY.phone}
                </a>
                <a href={`tel:${COMPANY.phone2}`} className="text-sm font-bold text-primary hover:text-accent transition-colors block">
                  {COMPANY.phone2}
                </a>
                <a href={`tel:${COMPANY.phone3}`} className="text-sm font-bold text-primary hover:text-accent transition-colors block">
                  {COMPANY.phone3}
                </a>
              </div>
              <p className="text-xs text-text-muted">We're here to help with your feed requirements</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom CTA Strip */}
        <motion.div
          className="mt-12 backdrop-blur-xl bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 rounded-3xl p-8 border border-primary/20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-heading text-xl md:text-2xl font-bold text-text-dark mb-2">Planning a Visit?</h3>
              <p className="text-text-muted">Schedule an appointment for a guided tour of our facility and product demonstrations</p>
            </div>
            <motion.a
              href="/contact"
              className="flex-shrink-0 px-8 py-4 bg-gradient-to-r from-primary to-accent text-white font-bold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Appointment
            </motion.a>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
