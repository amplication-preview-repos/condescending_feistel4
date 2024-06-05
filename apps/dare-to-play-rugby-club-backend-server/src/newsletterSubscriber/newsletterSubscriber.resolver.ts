import * as graphql from "@nestjs/graphql";
import { NewsletterSubscriberResolverBase } from "./base/newsletterSubscriber.resolver.base";
import { NewsletterSubscriber } from "./base/NewsletterSubscriber";
import { NewsletterSubscriberService } from "./newsletterSubscriber.service";

@graphql.Resolver(() => NewsletterSubscriber)
export class NewsletterSubscriberResolver extends NewsletterSubscriberResolverBase {
  constructor(protected readonly service: NewsletterSubscriberService) {
    super(service);
  }
}
