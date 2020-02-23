import { WordpressPostList } from "@/types/wordpress-post-list";

export interface ArticlesCache {
  [page: string]: Promise<WordpressPostList>;
}
