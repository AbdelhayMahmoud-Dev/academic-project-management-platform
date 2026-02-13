import { Injectable } from '@angular/core';
import { Routes } from '@angular/router';
import { PluginDefinition } from './plugin.model';

@Injectable({ providedIn: 'root' })
export class PluginRegistry {
  private plugins: PluginDefinition[] = [];

  register(plugin: PluginDefinition) {
    this.plugins.push(plugin);
  }

  getAll(): PluginDefinition[] {
    return this.plugins.sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
  }

  buildAngularRoutes(): Routes {
    return this.getAll().map(p => ({
      path: p.path,
      loadComponent: p.loadComponent,
    }));
  }
}