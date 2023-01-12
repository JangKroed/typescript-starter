import { Module } from '@nestjs/common';
import { GetMembersController } from './controller/get-members.controller';
import { FIND_MEMBERS_INBOUND_PORT } from './inbound-port/find-members.inbound-port';
import { FindMembersService } from './service/find-members.service';

// 오늘 할 것: member의 리스트를 조회하는 API 작성
@Module({
  controllers: [GetMembersController],
  providers: [
    {
      provide: FIND_MEMBERS_INBOUND_PORT,
      useClass: FindMembersService,
    },
  ],
})
export class MemberModule {}
