interface NavItemType {
  id: number;
  name: string;
  src: string;
}

export const NavItem: NavItemType[] = [
  { id: 1, name: "Home", src: "/day-6" },
  { id: 2, name: "About", src: "/day-6/about" },
  { id: 3, name: "Services", src: "/day-6/services" },
  { id: 4, name: "Gallery", src: "/day-6/gallery" },
  { id: 5, name: "Contact", src: "/day-6/contact" },
] as const;
