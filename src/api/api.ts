// "https://gridtalk.nl/wp-json/wp/v2/posts?_fields=id,date,modified,slug,title.rendered,excerpt.rendered,x_author,x_featured_media_medium,x_featured_media_large&page=1&per_page=50";

import { Article } from "@/types/article";

export const DummyContent: Article[] = [
  {
    id: 4348,
    date: new Date("2020-02-22T12:00:00"),
    modified: new Date("2020-02-22T00:24:42"),
    slug: "albon-en-verstappen-tevreden-na-eerste-testdagen",
    title: { rendered: "Albon en Verstappen tevreden na eerste testdagen" },
    excerpt: {
      rendered:
        '<p>Na de eerste drie testdagen zijn Alexander Albon en Max Verstappen beide tevreden met de resultaten. In totaal reden de twee 471 rondjes. &#8221;We reden niet<span class="excerpt-hellip"> [\u2026]</span></p>\n'
    }
  },
  {
    id: 4339,
    date: new Date("2020-02-22T09:00:00"),
    modified: new Date("2020-02-22T01:33:27"),
    slug: "binotto-we-zijn-nog-niet-zo-snel-als-mercedes",
    title: {
      rendered: "Binotto: &#8221;We zijn nog niet zo snel als Mercedes&#8221;"
    },
    excerpt: {
      rendered:
        '<p>De teambaas van Ferrari, Mattia Binotto, ziet de eerste races van het seizoen nog niet zo rooskleurig in voor zijn team. Hij concludeert na de eerste<span class="excerpt-hellip"> [\u2026]</span></p>\n'
    }
  },
  {
    id: 4362,
    date: new Date("2020-02-21T20:00:00"),
    modified: new Date("2020-02-22T00:19:38"),
    slug: "pirelli-test-speciale-back-up-band-voor-zandvoort",
    title: {
      rendered:
        "Pirelli test speciale &#8216;back-up&#8217; band voor Zandvoort"
    },
    excerpt: {
      rendered:
        '<p>Pirelli, de bandenleverancier van alle Formule 1 teams, gaat tijdens de tweede testweek in Barcelona aankomende week een speciale band aanbieden aan de teams om deze<span class="excerpt-hellip"> [\u2026]</span></p>\n'
    }
  },
  {
    id: 4333,
    date: new Date("2020-02-21T08:30:00"),
    modified: new Date("2020-02-21T22:31:46"),
    slug: "liveblog-de-derde-testdag-in-barcelona",
    title: { rendered: "Lees terug: de derde testdag in Barcelona" },
    excerpt: {
      rendered:
        "<p>Vandaag was de derde testdag voorafgaand aan het seizoen op het Circuit de Barcelona-Catalunya. Lees hier de ontwikkelingen terug in de liveblog die wij bijhielden!</p>\n"
    }
  },
  {
    id: 4325,
    date: new Date("2020-02-20T08:30:00"),
    modified: new Date("2020-02-21T22:31:05"),
    slug: "liveblog-tweede-testdag-formule-1",
    title: { rendered: "Lees terug: tweede testdag Formule 1" },
    excerpt: {
      rendered:
        "<p>Vandaag was de tweede testdag voorafgaand aan het seizoen op het Circuit de Barcelona-Catalunya. Lees de ontwikkelingen van vandaag hier terug!</p>\n"
    }
  }
];
