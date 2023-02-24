import { Request, Response } from 'npm:express'
import Check_In from '../models/check_in.model.ts';

export const getChecks_In = async (req: Request, res: Response) => {
    const checks_in = await Check_In.find(req.body);
    res.json(checks_in);
};

export const getCheck_In = async (req: Request, res: Response) => {
    const check_in = await Check_In.findById(req.params.id);
    res.json(check_in);
};

export const createCheck_In = async (req: Request, res: Response) => {
    const newCheck_in = await Check_In.create(req.body);
    res.json(newCheck_in);
};

export const deleteCheck_In = async (req: Request, res: Response) => {
    const check_inDeleted = await Check_In.findByIdAndDelete(req.params.id);
    res.json(check_inDeleted);
};

export const updateCheck_In = async (req: Request, res: Response) => {
    const check_inUpdated = await Check_In.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    });
    return res.json(check_inUpdated);
};