export interface IPaginatedResponse<T = unknown> {
  count: number;
  next: string;
  previous: string;
  results: T[];
}
