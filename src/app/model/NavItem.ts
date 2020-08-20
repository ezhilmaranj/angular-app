interface NavItem {
  id: number;
  text: string;
  link?: string;
  isDefault?: boolean;
  isCurrent?: boolean;
  children?: NavItem[];
}

export default NavItem;
