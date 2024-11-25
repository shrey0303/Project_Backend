import prisma from '../config/database';
import { User, Role } from '@prisma/client';

export class AdminService {
  async getAllUsers(): Promise<User[]> {
    return prisma.user.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  async updateUserRole(userId: string, role: Role): Promise<User> {
    return prisma.user.update({
      where: { id: userId },
      data: { role },
    });
  }
}