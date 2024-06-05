import { ArchiveWhereInput } from "./ArchiveWhereInput";
import { ArchiveOrderByInput } from "./ArchiveOrderByInput";

export type ArchiveFindManyArgs = {
  where?: ArchiveWhereInput;
  orderBy?: Array<ArchiveOrderByInput>;
  skip?: number;
  take?: number;
};
