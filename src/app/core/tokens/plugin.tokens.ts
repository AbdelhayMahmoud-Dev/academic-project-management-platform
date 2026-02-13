import { InjectionToken } from '@angular/core';
import { PluginDefinition } from '../plugins/plugin.model';

export const PLUGIN_ROUTES = new InjectionToken<PluginDefinition[]>(
  'PLUGIN_ROUTES',
  {
    factory: () => [],
  }
);