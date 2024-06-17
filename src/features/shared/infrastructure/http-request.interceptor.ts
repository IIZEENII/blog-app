import { HttpInterceptorFn } from '@angular/common/http';

// TODO: not working with fetch api, use other alternative
export const httpRequestInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('access_token');
  const clonedRequest = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`,
    },
  });
  return next(clonedRequest);
};
