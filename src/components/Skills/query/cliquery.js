import gql from "graphql-tag";

const CLI_QUERY=gql`
query cli_query{
  tool{
    id
    CLI{
      id
      Name
      Percentage
    }
  }
}`;

export default CLI_QUERY;
