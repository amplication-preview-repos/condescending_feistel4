import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { NewsletterSubscriberServiceBase } from "./base/newsletterSubscriber.service.base";

@Injectable()
export class NewsletterSubscriberService extends NewsletterSubscriberServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
