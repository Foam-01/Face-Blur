import { Module } from '@nestjs/common';
import { FaceController } from './face.controller';

@Module({
  imports: [],
  controllers: [FaceController],
  providers: [],
})
export class AppModule {}
