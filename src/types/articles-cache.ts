import { WordpressPostSummary } from "@/types/wordpress-post-summary";

export interface ArticlesCache {
  [key: string]: Promise<WordpressPostSummary[]>;
}
