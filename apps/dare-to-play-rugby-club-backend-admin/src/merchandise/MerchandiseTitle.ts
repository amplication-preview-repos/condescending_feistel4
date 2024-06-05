import { Merchandise as TMerchandise } from "../api/merchandise/Merchandise";

export const MERCHANDISE_TITLE_FIELD = "id";

export const MerchandiseTitle = (record: TMerchandise): string => {
  return record.id?.toString() || String(record.id);
};
