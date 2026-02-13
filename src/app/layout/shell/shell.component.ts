import { Component } from '@angular/core';
import { SharedUiImports } from '../../shared/shared-ui.imports';

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [SharedUiImports],
  templateUrl: './shell.component.html',
})
export class ShellComponent {}