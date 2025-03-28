import { HTMLAttributes } from "react";

import { format } from "date-fns";

type TProps = {
  dateString: string | undefined;
  className?: HTMLAttributes<HTMLTimeElement>["className"];
};

const DateComponent: React.FC<TProps> = ({ dateString, className }) => {
  if (!dateString) {
    return null;
  }

  return (
    <time className={className} dateTime={dateString}>
      {format(new Date(dateString), "dd.MM.yyyy")}
    </time>
  );
};

export default DateComponent;
