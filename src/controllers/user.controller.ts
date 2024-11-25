import { Request, Response } from 'express';
import { UserService } from '../services/user.service';

export class UserController {
  constructor(private userService: UserService) {}

  async getProfile(req: Request, res: Response) {
    try {
      const user = await this.userService.getUserProfile(req.user!.userId);
      res.json({ user });
    } catch (error) {
      res.status(400).json({ message: (error as Error).message });
    }
  }

  async updateProfile(req: Request, res: Response) {
    try {
      const user = await this.userService.updateProfile(req.user!.userId, req.body);
      res.json({ user });
    } catch (error) {
      res.status(400).json({ message: (error as Error).message });
    }
  }
}