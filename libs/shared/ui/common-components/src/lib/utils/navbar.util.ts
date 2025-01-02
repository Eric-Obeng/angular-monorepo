import { NavbarItem } from '../model/navbar.model';

export default function addHome(items: NavbarItem[]) {
  return [{ label: 'home', route: '/' }, ...items];
}
