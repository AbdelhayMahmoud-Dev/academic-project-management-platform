import csurf from 'csurf';

export const csrfMiddleware = csurf({
  cookie: true,
});