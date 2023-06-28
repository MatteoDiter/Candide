import express, { Router, Request, Response } from 'express';
import path from 'path';
import * as controller from '../controller/sampleController';

const router: Router = express.Router();

// Serve index.html for all other routes to enable client-side routing
router.get('/', (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, '../../client/index.html'));
});

export default router