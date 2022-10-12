import gql from "graphql-tag";

const EXPERIENCE_QUERY=gql`
query experience_query {
  experiences{
  	id
    Title
    description
  }
}`;

export default EXPERIENCE_QUERY;
