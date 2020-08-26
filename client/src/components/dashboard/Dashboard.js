import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';

import DashBoardActions from './DashBoardActions';
import Experience from './Experience';
import Education from './Education';
import Spinner from '../common/Spinner';

import { getCurrentProfile, deleteAccount } from '../../actions/profile';
import { getProfileRequest } from '../../saga-implementation/actions/profile';

function Dashboard({
  auth: { user },
  profile: { profile, loading },
  getCurrentProfile,
  deleteAccount,
}) {
  const dispatch = useDispatch(getProfileRequest);

  useEffect(() => {
    getCurrentProfile();
    // saga 
    dispatch(getProfileRequest());
    // saga
  }, [getCurrentProfile]);

  return loading && profile === null ? (
    <Spinner />
  ) : (
    <>
      <p className='lead'>
        <i className='fas fa-user'></i> Welcome {user && user.name}
      </p>
      {profile !== null ? (
        <>
          <DashBoardActions />
          <Experience profileExperiences={profile.experience} />
          <Education profileEducations={profile.education} />
          <div className='my-2'>
            <button className='btn btn-danger' onClick={deleteAccount}>
              <i className='fas fa-user-minus' /> Delete my account
            </button>
          </div>
        </>
      ) : (
        <>
          <p>You have not yet setup a profile, please add some info</p>
          <Link to='/create-profile' className='btn btn-primary my-1'>
            Create Profile
          </Link>
        </>
      )}
    </>
  );
}

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

const mapDispatchToProps = {
  getCurrentProfile,
  deleteAccount,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
