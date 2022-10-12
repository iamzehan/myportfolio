import gql from "graphql-tag";

const PROFILE_IMG_QUERY=gql`
query profile_img_query {
  profile{
  	 id
    p_image{
      url
    }
  }
}`;

export default PROFILE_IMG_QUERY;
