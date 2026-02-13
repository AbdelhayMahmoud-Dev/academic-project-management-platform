import {
  Component,
  OnInit,
  inject,
  signal,
  TemplateRef,
  ViewChild,
  ChangeDetectionStrategy,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { firstValueFrom } from 'rxjs';

import { SharedUiImports } from '../../../../shared/shared-ui.imports';
import { TableColumn } from '../../../../shared/ui/table/table.types';
import { TableEngine } from '../../../../shared/ui/table/table.engine';

import { ApiService } from '../../../../infra/api/api.service';
import { ToastService } from '../../../../shared/ui/toast/toast.service';
import { ModalService } from '../../../../shared/ui/modal/modal.service';

interface UserRow {
  id: string;
  name: string;
  email: string;
  role: string;
}

@Component({
  standalone: true,
  imports: [
    CommonModule,
    SharedUiImports,
  ],
  templateUrl: './users-list.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersListPage implements OnInit {
  private api = inject(ApiService);
  private toast = inject(ToastService);
  private modal = inject(ModalService);

  @ViewChild('detailsTpl') detailsTpl!: TemplateRef<UserRow>;

  loading = signal(false);
  selected = signal<UserRow | null>(null);
  query = signal('');

  engine = new TableEngine<UserRow>([]);

  columns: TableColumn<UserRow>[] = [
    { key: 'name', label: 'Name' },
    { key: 'email', label: 'Email' },
    { key: 'role', label: 'Role' },
  ];

  async ngOnInit() {
    await this.loadUsers();
  }

  async loadUsers() {
    try {
      this.loading.set(true);

      const users = await firstValueFrom(
        this.api.get<UserRow[]>('/admin/users')
      );

      this.engine.setData(users ?? []);
    } catch {
      this.toast.show('Failed to load users');
    } finally {
      this.loading.set(false);
    }
  }

  onSearch(value: string) {
    this.query.set(value.toLowerCase());

    const q = this.query();

    const filtered = this.engine.rows.filter(row =>
      row.name.toLowerCase().includes(q) ||
      row.email.toLowerCase().includes(q) ||
      row.role.toLowerCase().includes(q)
    );

    this.engine.setData(filtered);
  }

  onRowClick(row: UserRow) {
    this.selected.set(row);

    this.modal.open({
      title: 'User Details',
      content: this.detailsTpl,
    });
  }
}