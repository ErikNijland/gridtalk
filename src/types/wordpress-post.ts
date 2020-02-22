export interface WordpressPost {
  id: number;
  date: string;
  modified: string;
  slug: string;
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  title: {
    rendered: string;
  };
  x_featured_media_medium: string;
  x_featured_media_large: string;
}