import { Task } from './task.interface';
import { CreateTaskDTO } from "./dto/create-task.dto";
import { UpdateTaskDTO } from './dto/updateTaskDTO.dto';
export declare class TaskService {
    private tasks;
    getAllTask(): Task[];
    createTask(createTaskDTO: CreateTaskDTO): Task;
    getTaskById(id: string): Task;
    deleteById(id: string): Task;
    updateStatus(id: string, updateTaskDTO: UpdateTaskDTO): Task;
}
