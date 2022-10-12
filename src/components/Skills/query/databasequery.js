import gql from "graphql-tag";

const DATABASE_QUERY=gql`
query database_query{
  skill{
    id
    Database{
      id
      Name
      Percentage
    }
  }
}`;

export default DATABASE_QUERY;
