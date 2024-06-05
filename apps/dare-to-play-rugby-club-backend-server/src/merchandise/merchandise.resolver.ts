import * as graphql from "@nestjs/graphql";
import { MerchandiseResolverBase } from "./base/merchandise.resolver.base";
import { Merchandise } from "./base/Merchandise";
import { MerchandiseService } from "./merchandise.service";

@graphql.Resolver(() => Merchandise)
export class MerchandiseResolver extends MerchandiseResolverBase {
  constructor(protected readonly service: MerchandiseService) {
    super(service);
  }
}
