// "https://gridtalk.nl/wp-json/wp/v2/posts?_fields=id,date,modified,slug,title.rendered,excerpt.rendered,x_author,x_featured_media_medium,x_featured_media_large&page=1&per_page=50";

import { apiConfig } from "@/api/api-config";
import { WordpressPostSummary } from "@/types/wordpress-post-summary";

export function getArticles(page = 1): Promise<WordpressPostSummary[]> {
  const { baseUrl } = apiConfig;
  const fields = apiConfig.fields.summary.join();

  return fetch(
    `${baseUrl}posts?_fields=${fields}&page=${page}&per_page=50`
  ).then(response => response.json());
}
