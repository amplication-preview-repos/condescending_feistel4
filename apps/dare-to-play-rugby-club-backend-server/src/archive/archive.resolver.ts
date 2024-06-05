import * as graphql from "@nestjs/graphql";
import { ArchiveResolverBase } from "./base/archive.resolver.base";
import { Archive } from "./base/Archive";
import { ArchiveService } from "./archive.service";

@graphql.Resolver(() => Archive)
export class ArchiveResolver extends ArchiveResolverBase {
  constructor(protected readonly service: ArchiveService) {
    super(service);
  }
}
