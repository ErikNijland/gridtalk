import { DateFormat } from "@/types/date-format";

export const DateFilter = (value: string, format: DateFormat): string => {
  const date = new Date(value);
  const hours = date.getHours();
  const minutes = date.getMinutes();

  switch (format) {
    case "date":
      return "poep";

    case "full":
      return "plas";

    case "time":
      return `${hours}:${minutes}`;
  }
};
