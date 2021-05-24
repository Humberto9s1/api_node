import Sequelize from 'sequelize';
import databaseConfig from '../config/database';

import ClientsUsers from '../models/ClientsUsers';

const models = [ClientsUsers];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
