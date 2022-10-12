import gql from "graphql-tag";

const TOOLS_QUERY=gql`
query tools_query{
  tool{
    id
    Tools{
      id
      Name
      Percentage
    }
  }
}`;

export default TOOLS_QUERY;
