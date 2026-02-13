import { Injectable } from '@angular/core';
import { Store } from './store';
import { PluginDefinition } from '../core/plugins/plugin.model';

export interface PluginStateModel {
  routes: PluginDefinition[];
}

@Injectable({ providedIn: 'root' })
export class PluginState extends Store<PluginStateModel> {

  constructor() {
    super();
    this.reset({ routes: [] });
  }

  setRoutes(routes: PluginDefinition[]) {
    this.set({ routes });
  }

}