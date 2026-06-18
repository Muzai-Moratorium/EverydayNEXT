export interface NavItem {
  name: string;
  href: string;
}

export const navItems: NavItem[] = [
  { name: "홈", href: "/" },
  { name: "소개", href: "/about" },
  { name: "게시판", href: "/board" },
];
