import { DataSource } from "typeorm";

export const databaseProviders = [
  {
    provide: "DATA_SOURCE",
    useFactory: async () => {
      const dataSource = new DataSource({
        type: "mysql",
        host: "localhost",
        port: 3306,
        username: "root",
        password: "226311xx",
        database: "xx",
        entities: [__dirname + "/**/*.entity{.ts,.js}"],
        synchronize: true,
      });
      return dataSource.initialize();
    },
  },
];
