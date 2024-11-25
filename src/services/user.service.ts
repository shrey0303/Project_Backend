import prisma from '../config/database';
import { User } from '@prisma/client';

export class UserService {
  async getUserProfile(userId: string): Promise<User> {
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new Error('User not found');
    }

    return user;
  }

  async updateProfile(userId: string, data: Partial<User>): Promise<User> {
    // Prevent updating sensitive fields
    const { password, role, ...updateData } = data;

    return prisma.user.update({
      where: { id: userId },
      data: updateData,
    });
  }
}
