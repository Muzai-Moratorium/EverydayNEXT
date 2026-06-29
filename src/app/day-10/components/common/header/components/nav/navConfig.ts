interface NavItemTypes {
  id: number;
  title: string;
  src: string;
}

export const NavItem: NavItemTypes[] = [
  { id: 1, title: "Home", src: "/day-10" },
  { id: 2, title: "About", src: "#" },
] as const;
