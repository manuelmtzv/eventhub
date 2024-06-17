import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { OrmModule } from './modules/orm/orm.module';
import * as path from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [path.resolve('.env')],
      isGlobal: true,
    }),
    OrmModule,
  ],
})
export class AppModule {}
