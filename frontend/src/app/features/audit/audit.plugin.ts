import { inject } from '@angular/core';
import { PluginRegistry } from '../../core/plugins/plugin.registry';
import { PluginDefinition } from '../../core/plugins/plugin.model';

export const AUDIT_PLUGIN: PluginDefinition = {
  key: 'audit',
  path: 'audit',
  area: 'admin',
  loadComponent: () =>
    import('./pages/audit-logs/audit-logs.page').then(m => m.AuditLogsPage),

  permissions: ['ADMIN'],
  order: 3,
};

// 🔥 أهم سطر في الملف كله
inject(PluginRegistry).register(AUDIT_PLUGIN);