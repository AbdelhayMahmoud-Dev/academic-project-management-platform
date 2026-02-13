export interface TableColumn<T = any> {
  key: keyof T | string;
  label: string;
  width?: string;
  render?: (row: T) => string;
}