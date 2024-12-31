import { Route } from '@angular/router';
import { titleResolver } from './resolvers/title.resolver';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'expenses-overview',
  },
  {
    path: 'expenses-overview',
    loadComponent: () =>
      import(
        './pages/expenses-overview-page/expenses-overview-page.component'
      ).then((m) => m.ExpensesOverviewPageComponent),
    title: titleResolver,
  },
  {
    path: 'expenses-approval',
    loadComponent: () =>
      import(
        './pages/expenses-approval-page/expenses-approval-page.component'
      ).then((m) => m.ExpensesApprovalPageComponent),
    title: titleResolver,
  },
  {
    path: '**',
    redirectTo: '/expenses-overview',
    pathMatch: 'full',
  },
];
