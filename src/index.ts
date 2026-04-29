// src/index.ts
import { Hono } from 'hono';
import { serve } from '@hono/node-server';
import { userRoutes } from './routes/user.routes';
import { postRoutes } from './routes/post.routes';
import { commentRoutes } from './routes/comment.routes';

const app = new Hono();

// Global middleware/error handling could go here

// Integrate Modular Routes
app.route('/api/users', userRoutes);
app.route('/api/posts', postRoutes);
app.route('/api/comments', commentRoutes);

const port = 3000;
console.log(`Server is running on http://localhost:${port}`);

serve({
  fetch: app.fetch,
  port
});