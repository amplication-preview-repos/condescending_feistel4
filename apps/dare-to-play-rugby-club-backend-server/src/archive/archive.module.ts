import { Module } from "@nestjs/common";
import { ArchiveModuleBase } from "./base/archive.module.base";
import { ArchiveService } from "./archive.service";
import { ArchiveController } from "./archive.controller";
import { ArchiveResolver } from "./archive.resolver";

@Module({
  imports: [ArchiveModuleBase],
  controllers: [ArchiveController],
  providers: [ArchiveService, ArchiveResolver],
  exports: [ArchiveService],
})
export class ArchiveModule {}
