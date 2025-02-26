
import { ITask } from "../TaskManager/TaskManager.types";

export interface TaskItemProps { 
  task: ITask; 
  onToggle: (id: number) => void; 
  onDelete: (id: number) => void; 
}
