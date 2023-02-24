import { Request, Response } from 'npm:express'
import Task from '../models/task.model.ts';

export const getTasks = async (req: Request, res: Response) => {
    const tasks = await Task.find(req.body);
    res.json(tasks);
};

export const getTask = async (req: Request, res: Response) => {
    const task = await Task.findById(req.params.id);
    res.json(task);
};

export const createTask = async (req: Request, res: Response) => {
    const newTask = await Task.create(req.body);
    res.json(newTask);
};

export const deleteTask = async (req: Request, res: Response) => {
    const taskDeleted = await Task.findByIdAndDelete(req.params.id);
    res.json(taskDeleted);
};

export const updateTask = async (req: Request, res: Response) => {
    const taskUpdated = await Task.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    });
    return res.json(taskUpdated);
};