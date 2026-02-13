import {
  Directive,
  Input,
  TemplateRef,
  ViewContainerRef,
  inject,
  effect,
  Signal,
} from '@angular/core';
import { PermissionsEngine } from '../../core/security/permissions.engine';

@Directive({
  selector: '[dsPermission]',
  standalone: true,
})
export class PermissionDirective {
  private readonly tpl = inject(TemplateRef<unknown>);
  private readonly vc = inject(ViewContainerRef);
  private readonly permissions = inject(PermissionsEngine);

  private permissionSignal?: Signal<boolean>;

  @Input()
  set dsPermission(permission: string) {
    this.vc.clear();

    this.permissionSignal = this.permissions.has(permission);

    effect(() => {
      const allowed = this.permissionSignal!();

      this.vc.clear();

      if (allowed) {
        this.vc.createEmbeddedView(this.tpl);
      }
    });
  }
}