// src/routes/comment.routes.ts
import { Hono } from 'hono';
import { CommentService } from '../services/comment.service';

export const commentRoutes = new Hono();

commentRoutes.post('/', async (c) => {
  const body = await c.req.json();
  const comment = await CommentService.createComment(body.text, body.postId);
  return c.json(comment, 201);
});

commentRoutes.get('/', async (c) => {
  const comments = await CommentService.getAllComments();
  return c.json(comments);
});