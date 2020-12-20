import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
import { MySQLConfigModule } from '#configs/databases/mysql/mysql-config.module';
import { MySQLConfigService } from '#configs/databases/mysql/mysql-config.service';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [MySQLConfigModule],
      useFactory: async (mysqlConfigService: MySQLConfigService) => ({
        type: 'mysql',
        host: mysqlConfigService.host,
        port: mysqlConfigService.port,
        username: mysqlConfigService.username,
        password: mysqlConfigService.password,
        database: mysqlConfigService.database
      }),
      inject: [MySQLConfigService]
    } as TypeOrmModuleAsyncOptions)
  ]
})
export class MySQLProviderModule {}
