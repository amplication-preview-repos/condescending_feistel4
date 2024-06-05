import { Archive as TArchive } from "../api/archive/Archive";

export const ARCHIVE_TITLE_FIELD = "id";

export const ArchiveTitle = (record: TArchive): string => {
  return record.id?.toString() || String(record.id);
};
