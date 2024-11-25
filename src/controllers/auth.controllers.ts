import { Request, Response } from 'express';
import { AuthService } from '../services/auth.service';

export class AuthController {
  constructor(private authService: AuthService) {}

  async register(req: Request, res: Response) {
    try {
      const user = await this.authService.register(req.body);
      res.status(201).json({ user });
    } catch (error) {
      res.status(400).json({ message: (error as Error).message });
    }
  }

  async login(req: Request, res: Response) {
    try {
      const { user, accessToken, refreshToken } = await this.authService.login(req.body);
      res.json({ user, accessToken, refreshToken });
    } catch (error) {
      res.status(401).json({ message: (error as Error).message });
    }
  }
}