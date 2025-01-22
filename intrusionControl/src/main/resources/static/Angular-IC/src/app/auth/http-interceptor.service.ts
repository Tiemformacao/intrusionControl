import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

export const meuhttpInterceptor: HttpInterceptorFn = (request, next) => {

  let router = inject(Router);

  //Inclui o token do localstorage em cada requisição http, mas especificamente no header;
  let token = localStorage.getItem('token');
  if (token && !router.url.includes('/login')) {
    request = request.clone({
      setHeaders: { Authorization: 'Bearer ' + token },
    });
  }

  //Tratamentos dos responses... podemos tratar os erros genericamente aqui;
  return next(request).pipe(
    catchError((err: any) => {
      if (err instanceof HttpErrorResponse) {
	  
	  
        if (err.status === 401) {
          alert('Sua sessão expirou ou suas credenciais estão incorretas. Por favor, faça login novamente.');
          router.navigate(['/login']);
        } else if (err.status === 403) {
          alert('Você não tem permissão para acessar este recurso. Por favor, entre em contato com o administrador.');
		  router.navigate(['/login']);
        } else {
          console.error('Erro de comunicação com o servidor:', err);
		  alert('Ocorreu um erro inesperado. Por favor, tente novamente mais tarde.');
        }
		
		
      } else {
        console.error('An error occurred:', err);
      }

      return throwError(() => err);
    })
  );
};
