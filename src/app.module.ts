import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FooModule } from './modules/foo.module';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class ChildAppModule {}

const imports = [
  ChildAppModule,
  RouterModule.register([
    {
      path: 'root',
      module: ChildAppModule,
    },
  ]),
  FooModule,
];

@Module({
  imports,
  controllers: [],
  providers: [],
})
export class AppModule {}
