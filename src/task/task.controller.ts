import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';
import { TaskService } from './task.service';
import { Task } from './task.interface';
import { CreateTaskDTO } from './dto/create-task.dto';
import { UpdateTaskDTO } from './dto/updateTaskDTO.dto';
import { identity } from 'rxjs';

@Controller('task')
export class TaskController {
    constructor(private taskService:TaskService){}

    @Get()
    getAllTask():Task[]{
        return this.taskService.getAllTask();
    }

    @Get(':id')
    getTaskById(@Param('id') id):Task{
        return this.taskService.getTaskById(id);
    }

    @Post("createTask")
    createTask(@Body() createTaskDTO: CreateTaskDTO):Task{
       return this.taskService.createTask(createTaskDTO);
    }


    @Delete(":id")
    deleteById( @Param("id") id: string ):Task{
        return this.taskService.deleteById(id);
    }

    @Patch(":id/status")
    updateStatus(@Param("id") id, @Body() body: UpdateTaskDTO){
        return this.taskService.updateStatus(id, body);
    }

}

