import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'senha',
  database: 'loginFace',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
  logging: false,
  migrationsTableName: 'MigrationsTable',
  migrations: [__dirname + '/../migration/*.{js,ts}'],
  cli: {
    migrationsDir: '/../migration',
  },
  migrationsRun: false,
};
