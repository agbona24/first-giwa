"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/layout/Container";

const testimonials = [
  {
    id: 1,
    name: "Chief Adebayo Ogunleye",
    role: "Commercial Poultry Farm Owner",
    company: "Ayo Farms Ltd",
    location: "Abeokuta, Ogun State",
    image: "/images/testimonials/avatar1.jpg",
    rating: 5,
    text: "First-Giwa Feeds has been instrumental in scaling our poultry operations. Their consistency in quality and timely delivery has helped us achieve a 40% increase in production. The nutritional balance in their feeds shows in our birds' health and weight gain.",
    metric: "40% growth",
  },
  {
    id: 2,
    name: "Mrs. Folake Adeyemi",
    role: "Fish Farm Manager",
    company: "AquaLife Farms",
    location: "Ifo, Ogun State",
    image: "/images/testimonials/avatar2.jpg",
    rating: 5,
    text: "As a fish farmer, feed quality directly impacts my bottom line. First-Giwa's aqua feeds have dramatically reduced our mortality rate and improved growth cycles. Their technical support team is always available to help optimize our feeding program.",
    metric: "30% better survival",
  },
  {
    id: 3,
    name: "Alhaji Musa Ibrahim",
    role: "Cattle Ranch Owner",
    company: "Ibrahim Livestock Estate",
    location: "Otta, Ogun State",
    image: "/images/testimonials/avatar3.jpg",
    rating: 5,
    text: "We've tried several feed suppliers, but First-Giwa stands out. Their cattle feeds are properly formulated, and I've noticed significant improvement in milk production and overall herd health. Excellent value for money.",
    metric: "25% more milk",
  },
  {
    id: 4,
    name: "Mr. Chukwudi Okafor",
    role: "Feed Miller",
    company: "Okafor Agro Industries",
    location: "Sagamu, Ogun State",
    image: "/images/testimonials/avatar4.jpg",
    rating: 5,
    text: "First-Giwa supplies us with premium raw ingredients for our feed milling operations. Their maize, soya, and additives are always of consistent quality. Reliable partner for over 3 years now.",
    metric: "3+ years partnership",
  },
  {
    id: 5,
    name: "Dr. Funmi Adeleke",
    role: "Veterinarian & Farm Consultant",
    company: "AgriVet Solutions",
    location: "Mowe, Ogun State",
    image: "/images/testimonials/avatar5.jpg",
    rating: 5,
    text: "I recommend First-Giwa Feeds to all my clients. Their products are scientifically formulated and meet international standards. The farms using their feeds consistently show better FCR and healthier livestock.",
    metric: "Top recommendation",
  },
  {
    id: 6,
    name: "Mr. Samuel Oladipo",
    role: "Smallholder Farmer",
    company: "Oladipo Farms",
    location: "Ijebu-Ode, Ogun State",
    image: "/images/testimonials/avatar6.jpg",
    rating: 5,
    text: "Even as a small-scale farmer, First-Giwa treats me with the same respect as their large clients. Their smaller pack sizes make quality feed accessible to farmers like me. My birds are healthier than ever!",
    metric: "Affordable quality",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => {
      const next = prev + newDirection;
      if (next < 0) return testimonials.length - 1;
      if (next >= testimonials.length) return 0;
      return next;
    });
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-background to-neutral-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10">
        {/* Section header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
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
            transition={{ delay: 0.2 }}
          >
            <span className="text-2xl">⭐</span>
            <span className="text-sm font-semibold text-primary">Client Testimonials</span>
          </motion.div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-dark mb-4">
            Trusted by Farmers Across{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Ogun State
            </span>
          </h2>
          <p className="text-lg text-text-muted">
            Hear from our satisfied customers who've transformed their farming operations with our premium feeds
          </p>
        </motion.div>

        {/* Main testimonial card */}
        <div className="max-w-5xl mx-auto">
          <div className="relative h-[500px] md:h-[400px]">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="absolute inset-0"
              >
                <div className="backdrop-blur-xl bg-white/90 rounded-3xl p-8 md:p-12 border border-neutral-200/50 shadow-2xl h-full flex flex-col">
                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {Array.from({ length: currentTestimonial.rating }).map((_, i) => (
                      <motion.svg
                        key={i}
                        className="w-6 h-6 text-amber-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 + i * 0.1 }}
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </motion.svg>
                    ))}
                  </div>

                  {/* Quote */}
                  <motion.div
                    className="flex-1 mb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <svg className="w-12 h-12 text-primary/20 mb-4" fill="currentColor" viewBox="0 0 32 32">
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    <p className="text-lg md:text-xl text-text-dark leading-relaxed font-medium">
                      {currentTestimonial.text}
                    </p>
                  </motion.div>

                  {/* Author info */}
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center gap-4">
                      <motion.div
                        className="relative w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent p-0.5"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.4, type: "spring" }}
                      >
                        <div className="w-full h-full rounded-full bg-neutral-200 flex items-center justify-center text-2xl font-bold text-white">
                          {currentTestimonial.name.charAt(0)}
                        </div>
                      </motion.div>
                      <div>
                        <h4 className="font-bold text-text-dark text-lg">{currentTestimonial.name}</h4>
                        <p className="text-sm text-text-muted">{currentTestimonial.role}</p>
                        <p className="text-xs text-primary font-semibold">{currentTestimonial.company}</p>
                      </div>
                    </div>

                    {/* Metric badge */}
                    <motion.div
                      className="px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <span className="text-sm font-bold text-primary">{currentTestimonial.metric}</span>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <motion.button
              onClick={() => paginate(-1)}
              className="w-12 h-12 rounded-full backdrop-blur-xl bg-white/80 border border-neutral-200/50 shadow-lg flex items-center justify-center text-primary hover:bg-white transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className="group relative"
                >
                  <motion.div
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "bg-primary w-8"
                        : "bg-neutral-300 group-hover:bg-primary/50"
                    }`}
                    layoutId={index === currentIndex ? "activeIndicator" : undefined}
                  />
                </button>
              ))}
            </div>

            <motion.button
              onClick={() => paginate(1)}
              className="w-12 h-12 rounded-full backdrop-blur-xl bg-white/80 border border-neutral-200/50 shadow-lg flex items-center justify-center text-primary hover:bg-white transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>
        </div>

        {/* Bottom stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {[
            { value: "500+", label: "Happy Clients" },
            { value: "98%", label: "Satisfaction Rate" },
            { value: "8+", label: "Years Experience" },
            { value: "24/7", label: "Support Available" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-6 rounded-2xl backdrop-blur-xl bg-white/60 border border-neutral-200/50"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -4 }}
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-text-muted font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
