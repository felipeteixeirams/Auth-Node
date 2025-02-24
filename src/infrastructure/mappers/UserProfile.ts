import { RequestUserDTO } from "@applications/dtos/User/RequestUserDTO";
import User from "@domain/entities/User";
import { hashPassword } from "@shared/utils/passwordUtils";

export class UserProfile {
  getMappingFunction<TSouce, TDestination>(source: TSouce, destinationType: new () => TDestination) {
    if (this.isRequestUserDTO(source) && destinationType === User) {
      return this.mapRequestUserDTOToUser;
    }

    return null;
  }

  private isRequestUserDTO(dto: any): dto is RequestUserDTO {
    return dto && typeof dto.fullName === "string"
      && typeof dto.email === "string"
      && typeof dto.password === "string";
  }
  private async mapRequestUserDTOToUser(dto: RequestUserDTO): Promise<User> {
    const passwordHashed = await hashPassword(dto.password);
    return new User(dto.fullName, dto.email, passwordHashed);
  }
}