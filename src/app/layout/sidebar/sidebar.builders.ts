import { inject } from '@angular/core';
import { PluginRegistry } from '../../core/plugins/plugin.registry';

export interface SidebarItem {
  label: string;
  icon: string;
  route: string;
}

export const buildSidebarItems = (): SidebarItem[] => {
  const registry = inject(PluginRegistry);

  return registry
    .getAll()
    .filter(p => !!p.sidebar)
    .sort((a, b) => (a.sidebar!.order ?? 0) - (b.sidebar!.order ?? 0))
    .map(p => ({
      label: p.sidebar!.label,
      icon: p.sidebar!.icon,
      route: p.path,
    }));
};