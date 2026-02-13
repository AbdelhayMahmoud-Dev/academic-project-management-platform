import { Injectable } from '@angular/core';
import { TenantBranding } from './branding.model';

@Injectable({ providedIn: 'root' })
export class BrandingEngine {
  private branding!: TenantBranding;

  init(branding: TenantBranding) {
    this.branding = branding;
    this.applyTheme();
  }

  getBranding(): TenantBranding {
    return this.branding;
  }

  private applyTheme() {
    const root = document.documentElement;

    root.style.setProperty('--ds-primary', this.branding.theme.primaryColor);
    root.style.setProperty('--ds-accent', this.branding.theme.accentColor);
    root.style.setProperty('--ds-sidebar-bg', this.branding.theme.sidebarBg);
    root.style.setProperty('--ds-header-bg', this.branding.theme.headerBg);
    root.style.setProperty('--ds-font', this.branding.theme.fontFamily);
  }
}