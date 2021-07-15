import { Body, Controller, Get } from '@nestjs/common';
import { FooDto } from './foo.dto';
import { FooService } from './foo.service';

@Controller('/foo')
export class FooController {
  constructor(private readonly fooService: FooService) {}

  @Get('/')
  getHello(@Body() body: FooDto): string {
    return this.fooService.getHello();
  }
}
