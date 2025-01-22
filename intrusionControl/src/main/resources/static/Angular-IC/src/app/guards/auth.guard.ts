//import { CanActivateFn, Router } from '@angular/router';
//import { inject } from '@angular/core';
//
//export const authGuard: CanActivateFn = (route, state) => {
//  const router = inject(Router);
//  const isLoggedIn = localStorage.getItem('isLoggedIn');
//
//  if (isLoggedIn) {
//    return true; // Permite o acesso se o usuário estiver logado
//  } else {
//    router.navigate(['/login']); // Redireciona para o login se não estiver logado
//    return false;
//  }
//};


//import { Injectable } from '@angular/core';
//import { CanActivate, Router } from '@angular/router';
//
//@Injectable({
//  providedIn: 'root'
//})
//export class AuthGuard implements CanActivate {
//
//  constructor(private router: Router) {}
//
//  canActivate(): boolean {
//    const token = localStorage.getItem('token');
//
//    if (token) {
//      return true; // Se o token estiver presente, a rota é permitida
//    } else {
//      this.router.navigate(['/login']); // Se não estiver, redireciona para a tela de login
//      return false;
//    }
//  }
//}

import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const token = localStorage.getItem('token');

  if (token) {
    // Token encontrado, o usuário pode acessar a rota
    return true;
  } else {
    // Token não encontrado, redirecionar para login
    alert('Você precisa estar logado para acessar esta página.');
    router.navigate(['/login']);
    return false;
  }
};