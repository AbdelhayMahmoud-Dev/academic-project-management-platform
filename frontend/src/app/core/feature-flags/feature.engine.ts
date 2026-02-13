import { Injectable, inject } from '@angular/core';
import { RuntimeConfigService } from '../../config/runtime-config/runtime-config.service';
import { REQUIRED_FEATURE_FLAG } from '../tokens/feature.tokens';

@Injectable({ providedIn: 'root' })
export class FeatureEngine {
  private runtime = inject(RuntimeConfigService);

  isEnabled(flag: string): boolean {
    return this.runtime.get().features[flag] ?? false;
  }

  fromToken(): boolean {
    const flag = inject(REQUIRED_FEATURE_FLAG, { optional: true });
    if (!flag) return true;
    return this.isEnabled(flag);
  }
}