import { Routes } from '@angular/router';
import { inject } from '@angular/core';
import { PluginRegistry } from '../core/plugins/plugin.registry';
import { PermissionService } from '../core/permissions/permission.service';
import { FeatureEngine } from '../core/feature-flags/feature.engine';
import { CURRENT_LAYOUT_AREA } from '../core/tokens/layout.tokens';

export const appRoutes = (): Routes => {
  const registry = inject(PluginRegistry);
const permissions = inject(PermissionService);
const features = inject(FeatureEngine);
  const area = inject(CURRENT_LAYOUT_AREA);

  return registry.getAll()
    .filter(route =>
      route.area === area &&
      (!route.permissions || permissions.hasAny(route.permissions)) &&
      (!route.featureFlag || features.isEnabled(route.featureFlag))
    )
    .map(route => ({
      path: route.path,
      loadComponent: route.loadComponent,
    }));
};