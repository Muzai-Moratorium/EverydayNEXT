export const navItems = [
  { name: "Home", href: "/day-1" },
  { name: "About", href: "/day-1/about" },
  { name: "Contact", href: "/day-1/contact" },
];

// Verification
if (typeof window !== "undefined") {
  console.log("navconfig loaded:", navItems);
}
