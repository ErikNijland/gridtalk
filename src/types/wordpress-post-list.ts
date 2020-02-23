import { WordpressPostSummary } from "@/types/wordpress-post-summary";

export interface WordpressPostList {
  meta: {
    numberOfPages: number;
  };
  data: WordpressPostSummary[];
}
