// Purpose: Defines recurring and historical event data shapes.
export interface RecurringEvent {
  id?: string;
  month: number;
  day: number;
  year: number;
}

export interface NotableEvent extends RecurringEvent {
  source: string;
  description: string;
  pageCount?: number;
}
