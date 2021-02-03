import { Request, Router } from 'express';

import { C7zResponse } from '../class/response';
import * as File from '../model/file';

export const router = Router();

router.post('/api/file', async (req: Request, res: C7zResponse, next: any) => {
  try {
    const data = await File.buildUpload(req);
    res.send(data);
  } catch (error) {
    return next(error);
  }
});
