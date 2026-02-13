export type PluginArea = 'admin' | 'user';

export interface PluginSidebarItem {
  label: string;
  icon: string;
  order: number;
  group?: string;
}

export interface PluginDefinition {
  key: string;

  // route
  path: string;
  loadComponent: () => Promise<any>;

  // layout target
  area: PluginArea;

  // permissions
  permissions?: string[];

  // sidebar
  sidebar?: PluginSidebarItem;
}