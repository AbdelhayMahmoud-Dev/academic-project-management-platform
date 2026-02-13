import { Component, Input } from '@angular/core';
import { SharedUiImports } from '../shared-ui.imports';

@Component({
  selector: 'ds-page-wrapper',
  standalone: true,
  imports: [SharedUiImports],
  templateUrl: './page-wrapper.component.html',
})
export class PageWrapperComponent {
  @Input() title = '';
  @Input() subtitle = '';
  @Input() loading = false;
  @Input() empty = false;
  @Input() error = false;
}