import { DateFormat } from "@/types/date-format";

export const Date = (value: Date, format: DateFormat): string => {
  const hours = value.getHours();
  const minutes = value.getMinutes();

  switch (format) {
    case "date":
      return "poep";

    case "full":
      return "plas";

    case "time":
      return `${hours}:${minutes}`;
  }
};
