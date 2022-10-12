import gql from "graphql-tag";

const SKILL_ABOUT_QUERY=gql`
query skill_about_query{
  skill{
    id
    About
  }
}`;

export default SKILL_ABOUT_QUERY;
