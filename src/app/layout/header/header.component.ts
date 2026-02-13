import { Component } from '@angular/core';
import { SharedUiImports } from '../../shared/shared-ui.imports';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SharedUiImports],
  templateUrl: './header.component.html',
})
export class HeaderComponent {}