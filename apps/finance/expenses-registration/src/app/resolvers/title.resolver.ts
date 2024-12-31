import { ResolveFn } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router';

export const titleResolver: ResolveFn<string> = (
  route: ActivatedRouteSnapshot
) => route.routeConfig?.path?.replace('-', ' ') ?? '';
