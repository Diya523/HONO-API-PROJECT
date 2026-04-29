// src/services/user.service.ts
import { db } from '../db';
import { users } from '../db/schema';
import { eq } from 'drizzle-orm';

export const UserService = {
  async createUser(name: string, email: string) {
    const result = await db.insert(users).values({ name, email }).returning();
    return result[0];
  },

  async getAllUsers() {
    return await db.select().from(users);
  },

  async getUserById(id: number) {
    const result = await db.select().from(users).where(eq(users.id, id));
    return result[0];
  }
};