import { retry } from 'rxjs/operators';

export const httpRetry = retry({
  count: 2,
  delay: 1000,
});