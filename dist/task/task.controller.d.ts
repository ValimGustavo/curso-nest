import { TaskService } from './task.service';
import { Task } from './task.interface';
import { CreateTaskDTO } from './dto/create-task.dto';
import { UpdateTaskDTO } from './dto/updateTaskDTO.dto';
export declare class TaskController {
    private taskService;
    constructor(taskService: TaskService);
    getAllTask(): Task[];
    getTaskById(id: any): Task;
    createTask(createTaskDTO: CreateTaskDTO): Task;
    deleteById(id: string): Task;
    updateStatus(id: any, body: UpdateTaskDTO): Task;
}
