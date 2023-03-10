import { vishal } from '../users.entity';
import { Sequelize } from 'sequelize-typescript';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'vishal',
        password: 'yourpassword',
        database: 'Employee',
      });
      sequelize.addModels([vishal]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
