import { NewsletterSubscriberWhereInput } from "./NewsletterSubscriberWhereInput";
import { NewsletterSubscriberOrderByInput } from "./NewsletterSubscriberOrderByInput";

export type NewsletterSubscriberFindManyArgs = {
  where?: NewsletterSubscriberWhereInput;
  orderBy?: Array<NewsletterSubscriberOrderByInput>;
  skip?: number;
  take?: number;
};
