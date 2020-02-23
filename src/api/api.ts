import { apiConfig } from "@/api/api-config";
import { ArticlesCache } from "@/types/articles-cache";
import { WordpressPostArticle } from "@/types/wordpress-post-article";
import { WordpressPostList } from "@/types/wordpress-post-list";

const articlesCache: ArticlesCache = {};

export function getArticles(page = 1): Promise<WordpressPostList> {
  if (!articlesCache[String(page)]) {
    const { baseUrl } = apiConfig;
    const fields = apiConfig.fields.summary.join();

    articlesCache[page] = fetch(
      `${baseUrl}posts?_fields=${fields}&page=${page}&per_page=50`
    ).then(response => {
      return response.json().then(data => ({
        meta: {
          numberOfPages: Number(response.headers.get("x-wp-totalpages"))
        },
        data
      }));
    });
  }

  return articlesCache[page];
}

export function getArticle(slug: string): Promise<WordpressPostArticle> {
  const { baseUrl } = apiConfig;
  const fields = apiConfig.fields.article.join();

  return fetch(`${baseUrl}posts?_fields=${fields}&slug=${slug}`)
    .then(response => response.json())
    .then(articles => articles[0]);
}
