import { WordpressPost } from "@/types/wordpress-post";

export type WordpressPostArticle = Pick<
  WordpressPost,
  | "date"
  | "modified"
  | "content"
  | "excerpt"
  | "title"
  | "x_featured_media_large"
>;
