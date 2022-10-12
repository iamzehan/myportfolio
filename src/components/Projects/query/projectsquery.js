import gql from "graphql-tag";

const THUMBNAIL_IMG_QUERY=gql`
query thumbnail_img_query {
  projects{
    id
    Category
    Name
    URL
    Thumbnail{
      id
      url
    }
  }
}`;

export default THUMBNAIL_IMG_QUERY;
