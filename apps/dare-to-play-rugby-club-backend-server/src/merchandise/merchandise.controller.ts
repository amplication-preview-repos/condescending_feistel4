import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MerchandiseService } from "./merchandise.service";
import { MerchandiseControllerBase } from "./base/merchandise.controller.base";

@swagger.ApiTags("merchandises")
@common.Controller("merchandises")
export class MerchandiseController extends MerchandiseControllerBase {
  constructor(protected readonly service: MerchandiseService) {
    super(service);
  }
}
