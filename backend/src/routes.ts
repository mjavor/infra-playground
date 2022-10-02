import { Request, Response } from 'express';
import {connection} from './database';

export const getPosts = async (request: Request, response: Response): Promise<void> => {
  const posts = await connection.from('posts');

  response.status(200).json(posts);
};