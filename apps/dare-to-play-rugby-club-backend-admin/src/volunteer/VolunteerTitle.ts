import { Volunteer as TVolunteer } from "../api/volunteer/Volunteer";

export const VOLUNTEER_TITLE_FIELD = "id";

export const VolunteerTitle = (record: TVolunteer): string => {
  return record.id?.toString() || String(record.id);
};
