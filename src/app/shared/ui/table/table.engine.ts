export class TableEngine<T> {
  private original: T[] = [];
  private filtered: T[] = [];

  constructor(data: T[] = []) {
    this.setData(data);
  }

  setData(data: T[]) {
    this.original = data ?? [];
    this.filtered = [...this.original];
  }

  get rows(): T[] {
    return this.filtered;
  }

  setFilter(predicate: (row: T) => boolean) {
    this.filtered = this.original.filter(predicate);
  }

  reset() {
    this.filtered = [...this.original];
  }
}