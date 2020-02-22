export interface Article {
  date: Date;
  modified: Date;
  excerpt: {
    rendered: string;
  };
  id: number;
  slug: string;
  title: {
    rendered: string;
  };
}
