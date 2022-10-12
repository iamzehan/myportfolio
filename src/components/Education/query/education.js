import gql from "graphql-tag";

const EDUCATION_QUERY=gql`
query almamaters_query{
  almaMaters{
  	id
    degree
    topic
    session
    institute
    location
  }
}`;

export default EDUCATION_QUERY;
