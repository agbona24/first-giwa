interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: "default" | "alt" | "primary" | "surface";
}

const bgMap = {
  default: "bg-background",
  alt: "bg-background-alt",
  primary: "bg-primary",
  surface: "bg-surface",
};

export default function Section({
  children,
  className = "",
  id,
  background = "default",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`py-16 md:py-24 ${bgMap[background]} ${className}`}
    >
      {children}
    </section>
  );
}
