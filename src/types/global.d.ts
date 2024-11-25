export type User = 'USER' | 'MODERATOR' | 'ADMIN';

export interface UserPayload {
  id: string;
  role: UserRole;
}