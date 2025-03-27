import { format } from "date-fns";

export default function DateComponent({
  dateString,
}: {
  dateString: string | undefined;
}) {
  if (!dateString) {
    return null;
  }

  return (
    <time dateTime={dateString}>
      {format(new Date(dateString), "dd.MM.yyyy")}
    </time>
  );
}
