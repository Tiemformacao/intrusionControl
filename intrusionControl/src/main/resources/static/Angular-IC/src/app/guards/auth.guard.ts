import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const isLoggedIn = localStorage.getItem('isLoggedIn');

  if (isLoggedIn) {
    return true; // Permite o acesso se o usuário estiver logado
  } else {
    router.navigate(['/login']); // Redireciona para o login se não estiver logado
    return false;
  }
};
