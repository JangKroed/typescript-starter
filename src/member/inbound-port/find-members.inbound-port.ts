export type FindMembersInboundPortInputDto = void;

export type FindMembersInboundPortOutputDto = Array<{
  name: string;
  email: string;
  phone: string;
}>;

// Token
export const FIND_MEMBERS_INBOUND_PORT = 'FIND_MEMBERS_INBOUND_PORT' as const;

export interface FindMembersInboundPort {
  execute(
    prams: FindMembersInboundPortInputDto,
  ): Promise<FindMembersInboundPortOutputDto>;
}
