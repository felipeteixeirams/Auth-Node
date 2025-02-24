import { AppError } from "@shared/erros/AppError";
import { UserProfile } from "./UserProfile";
import { StatusCodes } from "@shared/enum/StatusCodes";

class MapperService {
  private profiles: any[] = [];

  constructor() {
    this.profiles.push(new UserProfile());
  }

  public map<TSource, TDestination>(
    source: TSource,
    destinationType: new (...args: any[]) => TDestination
  ): TDestination {
    for (const profile of this.profiles) {
      const mappingFunction = profile.getMappingFunction(source, destinationType);
      if (mappingFunction) {
        return mappingFunction(source);
      }
    }

    const sourceName = source && typeof source === "object" ? source.constructor.name : "Unknown";

    throw new AppError(
      `Mapping not found for ${sourceName} to ${destinationType.name}`,
      StatusCodes.Status400BadRequest
    );
  }
}

export const mapperService = new MapperService();