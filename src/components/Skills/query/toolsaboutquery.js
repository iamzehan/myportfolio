import gql from "graphql-tag";

const TOOLS_ABOUT_QUERY=gql`
query tools_about_query{
  tool{
    id
    About
  }
}`;

export default TOOLS_ABOUT_QUERY;
