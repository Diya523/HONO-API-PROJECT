// src/routes/post.routes.ts
import { Hono } from 'hono';
import { PostService } from '../services/post.service';
import { CommentService } from '../services/comment.service';

export const postRoutes = new Hono();

postRoutes.post('/', async (c) => {
  const body = await c.req.json();
  const post = await PostService.createPost(body.title, body.content, body.authorId);
  return c.json(post, 201);
});

postRoutes.get('/', async (c) => {
  const posts = await PostService.getAllPosts();
  return c.json(posts);
});

// Specific requirement: Fetch comments for a specific post
postRoutes.get('/:id/comments', async (c) => {
  const postId = parseInt(c.req.param('id'));
  const comments = await CommentService.getCommentsByPost(postId);
  return c.json(comments);
});