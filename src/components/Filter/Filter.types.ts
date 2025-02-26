export interface FilterProps {
  currentStatus: string;
  statuses: string[];
  onFilter: (filter: string) => void;
}
