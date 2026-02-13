import { CORE_PROVIDERS } from './core.providers';
import { ENGINES_PROVIDERS } from './engines.providers';
import { GUARDS_PROVIDERS } from './guards.providers';


export const CORE_ALL_PROVIDERS = [
  ...CORE_PROVIDERS,
  ...ENGINES_PROVIDERS,
  ...GUARDS_PROVIDERS,

];