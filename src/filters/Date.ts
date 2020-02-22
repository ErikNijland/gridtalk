import { DateFormat } from "@/types/date-format";

export const DateFilter = (value: string, format: DateFormat): string => {
  const date = new Date(value);

  const hours = date.getHours();
  const minutes = date.getMinutes();

  const hoursWithLeadingZero = String(hours).padStart(2, "0");
  const minutesWithLeadingZero = String(minutes).padStart(2, "0");

  switch (format) {
    case "date":
      return "poep";

    case "full":
      return "plas";

    case "time":
      return `${hoursWithLeadingZero}:${minutesWithLeadingZero}`;
  }
};
