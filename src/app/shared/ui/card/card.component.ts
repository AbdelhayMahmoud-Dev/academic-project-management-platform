import { Component } from '@angular/core';
import { SharedUiImports } from '../../shared-ui.imports';

@Component({
  standalone: true,
  selector: 'ds-card',
  imports: [SharedUiImports],
  templateUrl: './card.component.html',
})
export class CardComponent {}