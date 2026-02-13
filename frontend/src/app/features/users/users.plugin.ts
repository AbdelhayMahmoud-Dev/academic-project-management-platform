import { inject } from '@angular/core';
import { PluginRegistry } from '../../core/plugins/plugin.registry';
import { PluginDefinition } from '../../core/plugins/plugin.model';

export const USERS_PLUGIN: PluginDefinition = {
  key: 'users',
  path: 'users',
  area: 'admin',
  loadComponent: () =>
    import('./pages/users-list/users-list.page').then(m => m.UsersListPage),

  permissions: ['ADMIN'],
  order: 2,
};

// 🔥 أهم سطر في الملف كله
inject(PluginRegistry).register(USERS_PLUGIN);