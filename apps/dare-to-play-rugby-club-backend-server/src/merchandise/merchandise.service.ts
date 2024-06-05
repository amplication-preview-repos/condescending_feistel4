import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MerchandiseServiceBase } from "./base/merchandise.service.base";

@Injectable()
export class MerchandiseService extends MerchandiseServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
