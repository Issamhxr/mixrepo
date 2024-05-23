import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const ProfileCard = ({ imageSrc, username, email, description }) => {
  const [loading, setLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  return (
    <div className="card h-44 min-h-32 max-w-96 bg-base-100 lg:block my-4 mx-2 hidden lg:sticky shadow-xl">
      <figure className="px-10 pt-10">
      <div className="form-control flex-col right-2 ">
          <label className="label cursor-pointer flex justify-between ">
          <div className='flex1'>  <span className="label-text ">IA
               </span> </div>
            <input type="checkbox" defaultChecked className="checkbox avatar rounded-full" />
          </label>
          <label className="label cursor-pointer flex justify-between">
            <div className='flex1'><span className="label-text">
              Software   </span> </div>
            <input type="checkbox" defaultChecked className="checkbox avatar rounded-full" />
          </label>
          <label className="label cursor-pointer flex justify-between">
           <div><span className="label-text">
              Networks  
               </span> </div> 
            <input type="checkbox" defaultChecked className="checkbox avatar rounded-full" />
          </label>
          </div>
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-xl font-semibold">{username}</h2>
        <p className="text-sm text-gray-600">{email}</p>
        <h6 className="text-sm text-gray-600">{description}</h6>
       
      </div>
    </div>
  );
};

ProfileCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  description: PropTypes.string
};
