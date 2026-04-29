// src/services/comment.service.ts
import { db } from '../db';
import { comments } from '../db/schema';
import { eq } from 'drizzle-orm';

export const CommentService = {
  async createComment(text: string, postId: number) {
    const result = await db.insert(comments).values({ text, postId }).returning();
    return result[0];
  },

  async getAllComments() {
    return await db.select().from(comments);
  },

  // Specific requirement: Fetching comments for a specific post
  async getCommentsByPost(postId: number) {
    return await db.select().from(comments).where(eq(comments.postId, postId));
  }
};