import FadeUp from "@/components/motion/FadeUp";

export default function LocationMap() {
  return (
    <FadeUp delay={0.2}>
      <div className="rounded-xl overflow-hidden shadow-card mt-6">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.0!2d3.7!3d6.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNDgnMDAuMCJOIDPCsDQyJzAwLjAiRQ!5e0!3m2!1sen!2sng!4v1700000000000!5m2!1sen!2sng"
          width="100%"
          height="250"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="First-Giwa Feeds Location"
          className="w-full"
        />
      </div>
    </FadeUp>
  );
}
