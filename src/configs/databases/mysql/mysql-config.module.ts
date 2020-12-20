import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from '@hapi/joi';
import configuration from './mysql-config';
import { MySQLConfigService } from './mysql-config.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      validationSchema: Joi.object({
        DB_MYSQL_HOST: Joi.string().default('localhost'),
        DB_MYSQL_PORT: Joi.number().default(3306),
        DB_MYSQL_USERNAME: Joi.string().default('root'),
        DB_MYSQL_PASSWORD: Joi.string().default('1234'),
        DB_MYSQL_DATABASE: Joi.string().default('nest_base')
      })
    })
  ],
  providers: [MySQLConfigService],
  exports: [MySQLConfigService]
})
export class MySQLConfigModule {}
