import { CanActivateFn, Router } from '@angular/router';
import { authTokenKey } from '../app.constants';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (_route, _state) => {
  const token = localStorage.getItem(authTokenKey);

  if (token == null) return inject(Router).createUrlTree(['/']);

  return true;
};
