import {
  Controller,
  Post,
  UseGuards,
  Request,
  Get,
  Param,
  ParseIntPipe,
  HttpStatus,
} from '@nestjs/common';
import { AppService } from './app.service';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { Public } from './decoretor/public.decorator';
import { AuthService } from './auth/auth.service';
import { ForbiddenException } from 'filters/forbidden.exception';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private authService: AuthService,
  ) {}

  @UseGuards(LocalAuthGuard)
  @Public()
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  @Get('all/:id')
  @Public()
  async findAll(
    @Param('id', ParseIntPipe)
    id: number,
  ) {
    return id;
  }
}
