export const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

// Verification
if (typeof window !== "undefined") {
  console.log("navconfig loaded:", navItems);
}
