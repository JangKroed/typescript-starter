import { Inject } from '@nestjs/common';
import {
  FindMembersInboundPort,
  FindMembersInboundPortInputDto,
  FindMembersInboundPortOutputDto,
} from '../inbound-port/find-members.inbound-port';
import { FIND_MEMBERS_OUTBOUND_PORT } from '../outbound-port/find-members.outbound-port';

export class FindMembersService implements FindMembersInboundPort {
    constructor(
        @Inject(FIND_MEMBERS_OUTBOUND_PORT)
        private readonly findMembers
    )
  async execute(
    prams: FindMembersInboundPortInputDto,
  ): Promise<FindMembersInboundPortOutputDto> {
    return MemoryDatabase.findMembers();
  }
}