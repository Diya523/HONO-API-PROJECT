// src/services/post.service.ts
import { db } from '../db';
import { posts } from '../db/schema';
import { eq } from 'drizzle-orm';

export const PostService = {
  async createPost(title: string, content: string, authorId: number) {
    const result = await db.insert(posts).values({ title, content, authorId }).returning();
    return result[0];
  },

  async getAllPosts() {
    return await db.select().from(posts);
  },

  // Specific requirement: Fetching posts for a specific user
  async getPostsByUser(authorId: number) {
    return await db.select().from(posts).where(eq(posts.authorId, authorId));
  }
};