import { Request, Response } from 'express';
import { AdminService } from '../services/admin.service';

export class AdminController {
  constructor(private adminService: AdminService) {}

  async getUsers(req: Request, res: Response) {
    try {
      const users = await this.adminService.getAllUsers();
      res.json({ users });
    } catch (error) {
      res.status(400).json({ message: (error as Error).message });
    }
  }

  async updateUserRole(req: Request, res: Response) {
    try {
      const { userId, role } = req.body;
      const user = await this.adminService.updateUserRole(userId, role);
      res.json({ user });
    } catch (error) {
      res.status(400).json({ message: (error as Error).message });
    }
  }
}