import express from 'express';

import dotenv from 'dotenv';

dotenv.config();

import './src/database';
import ClientsUsersRoutes from './src/routes/ClientsUsersRoutes';
import TokenRoutes from './src/routes/TokenRoutes';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/clientsUsers/', ClientsUsersRoutes);
    this.app.use('/tokens/', TokenRoutes);
  }
}
export default new App().app;
