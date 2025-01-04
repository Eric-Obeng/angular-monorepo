import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarItem } from '../model/navbar.model';
import addHome from '../utils/navbar.util';

@Component({
  selector: 'lib-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  // private _navItems: NavbarItem[] = [];

  // @Input()
  // set navbarItems(value: NavbarItem[]) {
  //   this._navItems = [{ label: 'home', route: '/' }, ...value];
  // }

  // get navbarItems(): NavbarItem[] {
  //   return this._navItems;
  // }

  @Input({ transform: addHome, required: true }) navbarItems!: NavbarItem[];
}
