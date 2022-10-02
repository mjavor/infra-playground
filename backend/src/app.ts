import { type Express } from 'express';
import express from 'express';
import {getPosts} from './routes';

export const buildApp = (): Express => {
  const app = express();

  app.get('/posts', getPosts);

  return app;
};