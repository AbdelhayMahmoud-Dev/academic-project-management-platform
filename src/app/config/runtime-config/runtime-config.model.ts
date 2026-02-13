import { TenantBranding } from '../branding/branding.model';

export interface RuntimeConfig {
  apiBaseUrl: string;
  environment: 'dev' | 'staging' | 'prod';
  branding: TenantBranding;
  features: Record<string, boolean>;
}