import express, { Express, Request, Response, NextFunction } from 'express';
import path from 'path';
import router from './router/router';

const app: Express = express();

const PORT: number = 3000;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './dist')));

// API routes
app.use('/', router);

// Catch all route handler
app.use((req: Request, res: Response) => res.status(404).send("This is not the page you're looking for..."));

// Error handling middleware
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = { ...defaultErr, ...err };
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

// Export app
export default app