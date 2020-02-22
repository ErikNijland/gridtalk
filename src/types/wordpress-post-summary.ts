import { WordpressPost } from "@/types/wordpress-post";

export type WordpressPostSummary = Pick<
  WordpressPost,
  "id" | "date" | "slug" | "excerpt" | "title" | "x_featured_media_medium"
>;
