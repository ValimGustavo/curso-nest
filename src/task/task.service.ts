import { Injectable } from '@nestjs/common';
import { Task, statusTask } from './task.interface';
import {v4 as uuidv4} from "uuid";
import { CreateTaskDTO} from "./dto/create-task.dto";
import { UpdateTaskDTO } from './dto/updateTaskDTO.dto';

@Injectable()
export class TaskService {
    private tasks: Task[] = [];

    getAllTask(){
        return this.tasks;
    }

    createTask(createTaskDTO:CreateTaskDTO):Task{
        const {title, description} = createTaskDTO;
        const task: Task = {
            id: uuidv4(),
            title,
            description,
            status: statusTask.OPEN
        }        
        this.tasks.push(task);
        return task;
    }

    getTaskById(id: string):Task{
       return this.tasks.find( elem => elem.id === id)
    }

    deleteById(id: string): Task {
        //encontra indice
        let index = this.tasks.findIndex((task => task.id === id ))
        //remove indice
        const task:Task[] = this.tasks.splice(index,1);
        return task[0];
    }

    updateStatus(id: string, updateTaskDTO:UpdateTaskDTO): Task{

        let index = this.tasks.findIndex((task) => task.id === id )

        this.tasks[index].status = updateTaskDTO.status;

        console.log(this.tasks[index]);
        return this.tasks[index];
    }
}
