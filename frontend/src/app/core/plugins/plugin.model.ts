import { Type } from '@angular/core';

export interface PluginSidebarItem {
  label: string;
  icon: string;
  order: number;
  group: string;   
}

export interface PluginDefinition {
  key: string;
  path: string;
  loadComponent: () => Promise<Type<unknown>>;

  area: 'admin' | 'user';

  permissions?: string[];
  featureFlag?: string;

  sidebar?: PluginSidebarItem;

  order?: number;   
}