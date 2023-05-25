import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PsychologistModule } from './psychologist/psychologist.module';
import { UserModule } from './user/user.module';
import { PatientModule } from './patient/patient.module';
import { ProjectModule } from './project/project.module';
import { PsychologistModule } from './psychologist/psychologist.module';

@Module({
  imports: [PsychologistModule, ProjectModule, PatientModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
