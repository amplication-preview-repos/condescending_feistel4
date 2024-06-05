import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ArchiveService } from "./archive.service";
import { ArchiveControllerBase } from "./base/archive.controller.base";

@swagger.ApiTags("archives")
@common.Controller("archives")
export class ArchiveController extends ArchiveControllerBase {
  constructor(protected readonly service: ArchiveService) {
    super(service);
  }
}
