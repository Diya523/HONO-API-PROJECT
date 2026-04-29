// src/routes/user.routes.ts
import { Hono } from 'hono';
import { UserService } from '../services/user.service';
import { PostService } from '../services/post.service';

export const userRoutes = new Hono();

userRoutes.post('/', async (c) => {
  const body = await c.req.json();
  const user = await UserService.createUser(body.name, body.email);
  return c.json(user, 201);
});

userRoutes.get('/', async (c) => {
  const users = await UserService.getAllUsers();
  return c.json(users);
});

// Specific requirement: Fetch posts for a specific user
userRoutes.get('/:id/posts', async (c) => {
  const userId = parseInt(c.req.param('id'));
  const posts = await PostService.getPostsByUser(userId);
  return c.json(posts);
});