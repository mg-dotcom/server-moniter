export interface Log {
  id: number;
  status: "UP" | "DOWN";
  detail: string;
  createdAt: string;
}