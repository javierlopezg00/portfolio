export interface NavLink {
  href: string;
  label: string;
}

// Anchors point at homepage sections landing in later phases — clicking
// one before its section exists is a harmless no-op.
export const navLinks: NavLink[] = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#lab", label: "Lab" },
  { href: "#about", label: "About" },
];

export const primaryCtaHref = "#configurator";
