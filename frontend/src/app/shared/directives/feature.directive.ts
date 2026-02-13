import { Directive, Input, TemplateRef, ViewContainerRef, inject } from '@angular/core';
import { FeatureEngine } from '../../core/feature-flags/feature.engine';

@Directive({
  selector: '[dsFeature]',
  standalone: true,
})
export class FeatureDirective {
  private tpl = inject(TemplateRef<any>);
  private vc = inject(ViewContainerRef);
  private feature = inject(FeatureEngine);

  @Input() set dsFeature(key: string) {
    this.vc.clear();
    if (this.feature.isEnabled(key)) {
      this.vc.createEmbeddedView(this.tpl);
    }
  }
}