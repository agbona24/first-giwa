export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const COMPANY = {
  name: "First-Giwa Feeds & Agro Tech Ltd",
  shortName: "First-Giwa Feeds",
  phone: "+234706 896 4154",
  phone2: "+234705 986 7340",
  phone3: "+234813 194 9352",
  phone4: "+234706 971 6822",
  whatsapp: "2347068964154",
  whatsapp2: "2347069716822",
  email: "info@firstgiwa.com",
  address: "Giwa Feedmill bus-stop Ikangba, Along Agoro Road, Odogbolu, Ogun State",
  addressLabel: "Head Office",
  hours: "Mon – Sat: 8:00 AM – 6:00 PM",
  yearFounded: 2015,
} as const;

export const STATS = [
  { value: 10, suffix: "+", label: "Years Experience" },
  { value: 5000, suffix: "+", label: "Tonnes Delivered" },
  { value: 200, suffix: "+", label: "Farm Partners" },
  { value: 15, suffix: "+", label: "Product Lines" },
] as const;
