import React, {Component, lazy , Suspense} from 'react';
import Query from '../Query';
import PROFILE_IMG_QUERY from './query/ProfileImg';
const ProfileImage= ()=>{
    return(
      <Query query={PROFILE_IMG_QUERY} id={null}>
      {({ data: { profile } }) => {
        return(
          <div data-aos="zoom-in" data-aos-delay="100">
          {profile.p_image.map((items,i)=>{
            return(
              <img src={items.url} className="img-fluid rounded-circle" alt="profile_image" />
            );
          }
          )}
        </div>
      );
    }
      }
      </Query>
  );
}
export default ProfileImage;
