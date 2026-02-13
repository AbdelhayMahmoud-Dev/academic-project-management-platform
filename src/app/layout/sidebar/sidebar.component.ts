import { Component } from '@angular/core';
import { SharedUiImports } from '../../shared/shared-ui.imports';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [SharedUiImports],
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {}