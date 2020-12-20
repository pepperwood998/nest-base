import { Controller, Get } from '@nestjs/common';
import { AppConfigService } from '#configs/app/app-config.service';

@Controller('comments')
export class CommentsController {
  constructor(private readonly appConfigService: AppConfigService) {}

  @Get()
  some() {
    return this.appConfigService.name;
  }
}
