import { Component, Input } from '@angular/core';
import { SharedUiImports } from '../../shared-ui.imports';

@Component({
  selector: 'ds-button',
  standalone: true,
  imports: [SharedUiImports],
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Input() variant: 'primary' | 'ghost' | 'danger' = 'primary';
  @Input() type: 'button' | 'submit' = 'button';
  @Input() loading = false;
}