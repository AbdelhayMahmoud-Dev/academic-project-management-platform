import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { TableColumn } from './table.types';

@Component({
  selector: 'ds-table',
  standalone: true,
  imports: [CommonModule, NgFor, NgIf],
  templateUrl: './table.component.html',
})
export class TableComponent<T = any> {
  @Input() columns: TableColumn<T>[] = [];
  @Input() data: T[] = [];

  @Output() rowClick = new EventEmitter<T>();

  onRowClick(row: T) {
    this.rowClick.emit(row);
  }

  renderCell(row: T, column: TableColumn<T>): string {
    if (column.render) {
      return column.render(row);
    }
    return String((row as any)[column.key] ?? '');
  }
}