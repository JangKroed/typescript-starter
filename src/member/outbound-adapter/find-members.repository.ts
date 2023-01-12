import { MemoryDatabase } from 'src/lib/memory-database';
import {
  FindMembersInboundPort,
  FindMembersInboundPortOutputDto,
} from '../inbound-port/find-members.inbound-port';

export class FindMembersRepository implements FindMembersInboundPort {
  async execute(prams: void): Promise<FindMembersInboundPortOutputDto> {
    return MemoryDatabase.findMembers();
  }
}
