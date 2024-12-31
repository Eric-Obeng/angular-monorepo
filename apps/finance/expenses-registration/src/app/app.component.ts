import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '@angular-monorepo/navbar';
import { NavbarItem } from '@angular-monorepo/common-components/model/navbar.model';

@Component({
  standalone: true,
  imports: [RouterModule, NavbarComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'expenses-registration';

  navbarItems: NavbarItem[] = [
    { label: 'expenses approval', route: '/expenses-approval' },
  ];
}
