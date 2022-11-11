export interface DTOable<DTO, MODEL> {
  toDTO(): DTO;
  toModel(dto: DTO): MODEL;
}
