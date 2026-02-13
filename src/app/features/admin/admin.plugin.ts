import { inject } from '@angular/core';
import { PluginRegistry } from '../../core/plugins/plugin.registry';
import { PluginDefinition } from '../../core/plugins/plugin.model';

export const ADMIN_PLUGIN: PluginDefinition = {
  key: 'admin_dashboard',
  path: 'admin',
  area: 'admin',
  loadComponent: () =>
    import('./pages/dashboard/admin-dashboard.page').then(m => m.AdminDashboardPage),
  permissions: ['ADMIN'],
  featureFlag: 'admin_dashboard',
  order: 1,
};

// 🔥 التسجيل الذاتي وقت الاستيراد
inject(PluginRegistry).register(ADMIN_PLUGIN);