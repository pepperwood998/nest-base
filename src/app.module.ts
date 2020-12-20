import { Module } from '@nestjs/common';
import { AppConfigModule } from '#configs/app/app-config.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { CommentsModule } from './modules/comments/comments.module';
import { MySQLProviderModule } from './providers/database/mysql/mysql-provider.module';

@Module({
  imports: [AppConfigModule, MySQLProviderModule, UsersModule, CommentsModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
