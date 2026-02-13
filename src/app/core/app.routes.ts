import { Routes } from '@angular/router';
import { inject } from '@angular/core';
import { PluginRegistry } from './plugins/plugin.registry';

export function buildRoutes(): Routes {
  const registry = inject(PluginRegistry);

  return [
    ...registry.buildAngularRoutes(),
    { path: '', redirectTo: 'profile', pathMatch: 'full' },
  ];
}