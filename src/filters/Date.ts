import { DateFormat } from "@/types/date-format";

const formattedDays = [
  "zondag",
  "maandag",
  "dinsdag",
  "woensdag",
  "donderdag",
  "vrijdag",
  "zaterdag"
];

const formattedMonths = [
  "januari",
  "februari",
  "maart",
  "april",
  "mei",
  "juni",
  "juli",
  "augustus",
  "september",
  "oktober",
  "november",
  "december"
];

export const DateFilter = (value: string, format: DateFormat): string => {
  const date = new Date(value);

  const dayOfTheWeek = formattedDays[date.getDay()];
  const day = date.getDate();
  const month = formattedMonths[date.getMonth()];
  const year = date.getFullYear();

  const hours = date.getHours();
  const minutes = date.getMinutes();

  const hoursWithLeadingZero = String(hours).padStart(2, "0");
  const minutesWithLeadingZero = String(minutes).padStart(2, "0");

  const formattedDate = `${dayOfTheWeek} ${day} ${month} ${year}`;
  const formattedTime = `${hoursWithLeadingZero}:${minutesWithLeadingZero}`;

  switch (format) {
    case "date":
      return formattedDate;

    case "full":
      return `${formattedDate} om ${formattedTime}`;

    case "time":
      return formattedTime;
  }
};
