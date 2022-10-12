import gql from "graphql-tag";

const PROGRAMMINGLANG_QUERY=gql`
query programming_lang_query{
  skill{
    id
    Programming_lang{
      id
      Name
      Percentage
    }
  }
}`;

export default PROGRAMMINGLANG_QUERY;
