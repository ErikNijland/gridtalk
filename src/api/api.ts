import { apiConfig } from "@/api/api-config";
import { WordpressPostSummary } from "@/types/wordpress-post-summary";
import { ArticlesCache } from "@/types/articles-cache";

const articlesCache: ArticlesCache = {};

export function getArticles(page = 1): Promise<WordpressPostSummary[]> {
  if (!articlesCache[String(page)]) {
    const { baseUrl } = apiConfig;
    const fields = apiConfig.fields.summary.join();

    articlesCache[page] = fetch(
      `${baseUrl}posts?_fields=${fields}&page=${page}&per_page=50`
    ).then(response => response.json());
  }

  return articlesCache[page];
}
