import gql from "graphql-tag";

const FRAMEWORK_QUERY=gql`
query framework_query{
  skill{
    id
    Framework{
      id
      Name
      Percentage
    }
  }
}`;

export default FRAMEWORK_QUERY;
