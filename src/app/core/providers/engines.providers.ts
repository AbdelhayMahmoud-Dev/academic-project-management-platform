import { Provider } from '@angular/core';
import { FeatureEngine } from '../feature-flags/feature.engine';
import { PermissionService } from '../permissions/permission.service';

export const ENGINES_PROVIDERS: Provider[] = [
  FeatureEngine,
  PermissionService
];