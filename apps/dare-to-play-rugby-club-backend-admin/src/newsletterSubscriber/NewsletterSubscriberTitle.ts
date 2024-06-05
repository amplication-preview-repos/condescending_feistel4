import { NewsletterSubscriber as TNewsletterSubscriber } from "../api/newsletterSubscriber/NewsletterSubscriber";

export const NEWSLETTERSUBSCRIBER_TITLE_FIELD = "id";

export const NewsletterSubscriberTitle = (
  record: TNewsletterSubscriber
): string => {
  return record.id?.toString() || String(record.id);
};
