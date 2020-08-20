import NavItem from './NavItem';

interface Nav {
  id: number;
  text: string;
  isDefault?: boolean;
  isCurrent?: boolean;
  link?: string;
  submenus?: NavItem[];
}

export default Nav;
