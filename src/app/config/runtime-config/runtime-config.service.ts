import { Injectable, inject } from '@angular/core';
import { RuntimeConfig } from './runtime-config.model';
import { BrandingEngine } from '../branding/branding.engine';

@Injectable({ providedIn: 'root' })
export class RuntimeConfigService {
  private config!: RuntimeConfig;
  private branding = inject(BrandingEngine);

  async load(): Promise<void> {
    const response = await fetch('/assets/runtime-config.json');
    this.config = await response.json();
    this.branding.init(this.config.branding);
  }

  get(): RuntimeConfig {
    return this.config;
  }
}