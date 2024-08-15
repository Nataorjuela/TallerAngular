import { HttpInterceptorFn } from '@angular/common/http';

export const loggingInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('logginInterceptor');
  console.log(req);
  var newreq= req.clone({setHeaders: {'X-Request-ID':'123'}});
  console.log(newreq);
  return next(newreq);
};
