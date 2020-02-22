export const apiConfig = {
  baseUrl: "https://gridtalk.nl/wp-json/wp/v2/",
  fields: {
    article: [
      "content.rendered",
      "date",
      "excerpt.rendered",
      "modified",
      "title.rendered",
      "x_author",
      "x_featured_media_large"
    ],
    summary: [
      "date",
      "excerpt.rendered",
      "id",
      "slug",
      "title.rendered",
      "x_author",
      "x_featured_media_medium"
    ]
  }
};
