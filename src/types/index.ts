export interface NavLink {
  label: string;
  href: string;
}

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

export interface ProductItem {
  id: string;
  name: string;
  category: "poultry" | "fish" | "livestock";
  description: string;
  sizes: string[];
}

export interface TeamMember {
  name: string;
  title: string;
}
