"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import SectionHeading from "@/components/ui/SectionHeading";

const team = [
  {
    name: "Alhaji Garba Wahab Adisa",
    title: "Chief Executive Officer",
    icon: <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>,
    featured: true,
    gradient: "from-primary to-primary-dark",
    bgGlow: "bg-primary/20",
  },
  {
    name: "Management Team",
    title: "Operations & Logistics",
    icon: <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" /></svg>,
    featured: false,
    gradient: "from-blue-500 to-cyan-600",
    bgGlow: "bg-blue-500/20",
  },
  {
    name: "Technical Team",
    title: "Feed Formulation & Quality",
    icon: <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" /></svg>,
    featured: false,
    gradient: "from-purple-500 to-pink-600",
    bgGlow: "bg-purple-500/20",
  },
];

export default function Leadership() {
  return (
    <Section background="surface">
      <Container>
        <SectionHeading
          eyebrow="Leadership"
          heading="The Team Behind First-Giwa"
          description="Experienced professionals committed to delivering quality feed solutions."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {team.map((member, index) => {
            return (
              <motion.div
                key={member.name}
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  delay: index * 0.1, 
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1]
                }}
              >
                {/* Card */}
                <motion.div
                  className={`relative backdrop-blur-xl bg-white/80 rounded-3xl p-6 md:p-8 border border-neutral-200/50 text-center overflow-hidden ${
                    member.featured ? "ring-2 ring-primary/20" : ""
                  }`}
                  whileHover={{ 
                    y: -8,
                    scale: 1.02,
                    transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] }
                  }}
                >
                  {/* Glow effect on hover */}
                  <motion.div
                    className={`absolute inset-0 ${member.bgGlow} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  {/* Gradient border reveal */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
                    style={{
                      background: `linear-gradient(135deg, transparent, ${member.gradient.includes('primary') ? '#2D5016' : member.gradient.includes('blue') ? '#3b82f6' : '#a855f7'}10)`,
                    }}
                  />

                  <div className="relative z-10">
                    {/* Profile photo placeholder with gradient */}
                    <motion.div
                      className={`relative w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${member.gradient} p-0.5`}
                      whileHover={{ rotate: [0, -5, 5, -5, 0], scale: 1.05 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center">
                        <div className={`bg-gradient-to-br ${member.gradient} bg-clip-text text-transparent`}>{member.icon}</div>
                      </div>

                      {/* Pulsing ring */}
                      <motion.div
                        className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${member.gradient} opacity-30`}
                        animate={{
                          scale: [1, 1.15, 1],
                          opacity: [0.3, 0, 0.3],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </motion.div>

                    {/* Name */}
                    <h3 className={`font-heading font-bold mb-2 ${
                      member.featured ? "text-xl" : "text-lg"
                    }`}>
                      {member.name}
                    </h3>

                    {/* Title */}
                    <p className={`text-text-muted mb-4 ${
                      member.featured ? "text-base" : "text-sm"
                    }`}>
                      {member.title}
                    </p>

                    {/* Featured badge */}
                    {member.featured && (
                      <motion.div
                        className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                      >
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        Leadership
                      </motion.div>
                    )}

                    {/* Decorative underline */}
                    <motion.div
                      className={`mt-4 h-1 mx-auto bg-gradient-to-r ${member.gradient} rounded-full`}
                      initial={{ width: 0 }}
                      whileInView={{ width: "40px" }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4, duration: 0.6 }}
                    />
                  </div>

                  {/* Shine effect on hover */}
                  <motion.div
                    className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/30 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.5 }}
                  />
                </motion.div>

                {/* Floating orb decoration */}
                <motion.div
                  className={`absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br ${member.gradient} rounded-full blur-3xl opacity-0 group-hover:opacity-20`}
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </motion.div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
