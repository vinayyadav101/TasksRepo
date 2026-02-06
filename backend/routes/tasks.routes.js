import express from "express";
import { authenticate } from "../middlewares/auth.middleware.js";
import { authorize } from "../middlewares/role.middleware.js";
import {
  createTask,
  deleteTask,
  getMyTasks,
  updateStatus,
} from "../controllers/task.controller.js";

const taskRoutes = express.Router();

taskRoutes.post("/", authenticate, authorize("admin"), createTask);
taskRoutes.delete("/:id", authenticate, authorize("admin"), deleteTask);

taskRoutes.get("/", authenticate, authorize("employee","admin"), getMyTasks);
taskRoutes.patch("/:id", authenticate, authorize("employee"), updateStatus);

export default taskRoutes;
