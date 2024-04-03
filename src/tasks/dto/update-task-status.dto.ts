import { IsEnum } from 'class-validator';
import { TaskStatus } from '../task.model';

export class UpdadeTaskStatusDto {
  @IsEnum(TaskStatus)
  status: TaskStatus;
}
