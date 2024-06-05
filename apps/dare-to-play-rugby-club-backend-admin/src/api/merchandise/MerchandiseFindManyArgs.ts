import { MerchandiseWhereInput } from "./MerchandiseWhereInput";
import { MerchandiseOrderByInput } from "./MerchandiseOrderByInput";

export type MerchandiseFindManyArgs = {
  where?: MerchandiseWhereInput;
  orderBy?: Array<MerchandiseOrderByInput>;
  skip?: number;
  take?: number;
};
