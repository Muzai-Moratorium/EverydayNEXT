export interface NavItem {
  name: string;
  href: string;
}

export const navItems: NavItem[] = [
  { name: "홈", href: "/day-2" },
  { name: "소개", href: "/day-2/about" },
  { name: "게시판", href: "/day-2/board" },
];
