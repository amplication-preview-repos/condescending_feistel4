import { Module } from "@nestjs/common";
import { MerchandiseModuleBase } from "./base/merchandise.module.base";
import { MerchandiseService } from "./merchandise.service";
import { MerchandiseController } from "./merchandise.controller";
import { MerchandiseResolver } from "./merchandise.resolver";

@Module({
  imports: [MerchandiseModuleBase],
  controllers: [MerchandiseController],
  providers: [MerchandiseService, MerchandiseResolver],
  exports: [MerchandiseService],
})
export class MerchandiseModule {}
