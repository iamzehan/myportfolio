import gql from "graphql-tag";

const CV_QUERY=gql`
query cv_query{
  cv{
    	id
      sec_title
      desc_text
      file_url
    }
}`;

export default CV_QUERY;
