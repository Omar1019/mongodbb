import { Router } from "express";
import {
    createTask,
    deleteTask,
    renderTasks,
    taskToggleDone,
    renderTaskEdit,
    editTask,
    renderMenu
} from "../controller/tasks.controllers";


const router = Router();

router.get("/",renderTasks);
router.get("/menu",renderMenu);
router.post("/tasks/add",createTask);
router.get("/tasks/:id/toggleDone", taskToggleDone);
router.get("/tasks/:id/edit", renderTaskEdit);
router.post("/tasks/:id/edit",editTask);
router.get("/tasks/:id/delete",deleteTask);

export default router;
