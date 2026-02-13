export interface BrandingTheme {
  logoUrl: string;
  primaryColor: string;
  accentColor: string;
  sidebarBg: string;
  headerBg: string;
  fontFamily: string;
}

export interface TenantBranding {
  tenantId: string;
  appName: string;
  theme: BrandingTheme;
}