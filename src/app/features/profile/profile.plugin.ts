import { inject } from '@angular/core';
import { PluginRegistry } from '../../core/plugins/plugin.registry';
import { PluginDefinition } from '../../core/plugins/plugin.model';

export const PROFILE_PLUGIN: PluginDefinition = {
  key: 'profile',
  path: 'profile',
  area: 'user',
  loadComponent: () =>
    import('./pages/profile/profile.page').then(m => m.ProfilePage),
  order: 1,
};

// 🔥 التسجيل الذاتي وقت الاستيراد
inject(PluginRegistry).register(PROFILE_PLUGIN);