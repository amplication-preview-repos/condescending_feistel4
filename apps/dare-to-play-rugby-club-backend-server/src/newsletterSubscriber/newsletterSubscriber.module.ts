import { Module } from "@nestjs/common";
import { NewsletterSubscriberModuleBase } from "./base/newsletterSubscriber.module.base";
import { NewsletterSubscriberService } from "./newsletterSubscriber.service";
import { NewsletterSubscriberController } from "./newsletterSubscriber.controller";
import { NewsletterSubscriberResolver } from "./newsletterSubscriber.resolver";

@Module({
  imports: [NewsletterSubscriberModuleBase],
  controllers: [NewsletterSubscriberController],
  providers: [NewsletterSubscriberService, NewsletterSubscriberResolver],
  exports: [NewsletterSubscriberService],
})
export class NewsletterSubscriberModule {}
