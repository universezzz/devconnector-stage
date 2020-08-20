import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ProfileItem from './ProfileItem';
import Spinner from '../common/Spinner';
import { getProfiles } from '../../thunks/profile';

function Profiles({ getProfiles, profile: { loading, profiles } }) {
  useEffect(() => {
    getProfiles();
  }, [getProfiles]);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <h1 className='large text-primary'>Developers</h1>
          <div className='lead'>
            <i className='fab fa-connectdevelop' /> Browse and connect with
            developers
            <div className='profiles'>
              {profiles.length > 0 ? (
                profiles.map((profile) => (
                  <ProfileItem key={profile._id} profile={profile} />
                ))
              ) : (
                <h4>No profiles found</h4>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
}

Profiles.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

const mapDispatchToProps = {
  getProfiles,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profiles);
