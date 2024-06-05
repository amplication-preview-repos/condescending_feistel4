import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { NewsletterSubscriberService } from "./newsletterSubscriber.service";
import { NewsletterSubscriberControllerBase } from "./base/newsletterSubscriber.controller.base";

@swagger.ApiTags("newsletterSubscribers")
@common.Controller("newsletterSubscribers")
export class NewsletterSubscriberController extends NewsletterSubscriberControllerBase {
  constructor(protected readonly service: NewsletterSubscriberService) {
    super(service);
  }
}
