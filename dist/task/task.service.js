"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const task_interface_1 = require("./task.interface");
const uuid_1 = require("uuid");
let TaskService = class TaskService {
    constructor() {
        this.tasks = [];
    }
    getAllTask() {
        return this.tasks;
    }
    createTask(createTaskDTO) {
        const { title, description } = createTaskDTO;
        const task = {
            id: uuid_1.v4(),
            title,
            description,
            status: task_interface_1.statusTask.OPEN
        };
        this.tasks.push(task);
        return task;
    }
    getTaskById(id) {
        return this.tasks.find(elem => elem.id === id);
    }
    deleteById(id) {
        let index = this.tasks.findIndex((task => task.id === id));
        const task = this.tasks.splice(index, 1);
        return task[0];
    }
    updateStatus(id, updateTaskDTO) {
        let index = this.tasks.findIndex((task) => task.id === id);
        this.tasks[index].status = updateTaskDTO.status;
        console.log(this.tasks[index]);
        return this.tasks[index];
    }
};
TaskService = __decorate([
    common_1.Injectable()
], TaskService);
exports.TaskService = TaskService;
//# sourceMappingURL=task.service.js.map