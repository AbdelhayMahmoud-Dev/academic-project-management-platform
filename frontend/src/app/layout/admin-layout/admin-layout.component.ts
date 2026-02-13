import { Component } from '@angular/core';
import { SharedUiImports } from '../../shared/shared-ui.imports';

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [SharedUiImports],
  templateUrl: './admin-layout.component.html',
})
export class AdminLayoutComponent {}