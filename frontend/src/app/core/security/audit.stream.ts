import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface AuditEvent {
  action: string;
  metadata?: any;
  timestamp: number;
}

@Injectable({ providedIn: 'root' })
export class AuditStream {
  private stream$ = new Subject<AuditEvent>();

  emit(event: AuditEvent) {
    this.stream$.next(event);
  }

  events() {
    return this.stream$.asObservable();
  }
}