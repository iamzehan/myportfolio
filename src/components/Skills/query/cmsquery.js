import gql from "graphql-tag";

const CMS_QUERY=gql`
query cms_query{
  tool{
    id
    CMS{
      id
      Name
      Percentage
    }
  }
}`;

export default CMS_QUERY;
