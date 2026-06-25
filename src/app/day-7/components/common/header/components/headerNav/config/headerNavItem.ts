import type { HeaderNavItemTypes } from "./hederNavTypes";

export const HeaderNavItem: HeaderNavItemTypes[] = [
  { id: 1, name: "Home", src: "/day-7" },
  { id: 2, name: "About", src: "#" },
  {
    id: 3,
    name: "Content",
    src: "#",
  },
] as const;
