import { randomUUID } from "crypto";
import { db } from "../config/db.js";

export const createTask = async (req, res, next) => {

  try {
    const uniqueId = randomUUID();
    const {title, description, assigned_user } = req.body;
    await db.query(
      "INSERT INTO tasks (id,title,description,assigned_user) VALUES (?,?,?)",
      [uniqueId,title, description, assigned_user]
    );
    res.status(201).json({ message: "Task created" });
  } catch (err) {
    next(err);
  }
};

export const deleteTask = async (req, res, next) => {
  try {
    const [result] = await db.query("DELETE FROM tasks WHERE id=?", [req.params.id]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.status(200).json({ message: "Task deleted" });
  } catch (err) {
    next(err);
  }
};

export const getMyTasks = async (req, res, next) => {
  try {
    const [tasks] = await db.query(
      "SELECT * FROM tasks WHERE assigned_user=?",
      [req.user.id]
    );
    res.status(200).json(tasks);
  } catch (err) {
    next(err);
  }
};

export const updateStatus = async (req, res, next) => {
  try {
    console.log(req.body.status, req.params.id, req.user.id);
    
    const [result] = await db.query(
      "UPDATE tasks SET status=? WHERE id=? AND assigned_user=?",
      [req.body.status, req.params.id, req.user.id]
    );
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.status(200).json({ message: "Status updated" });
  } catch (err) {
    next(err);
  }
};
