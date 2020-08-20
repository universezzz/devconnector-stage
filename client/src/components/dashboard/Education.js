import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { connect } from 'react-redux';

import { deleteEducation } from '../../thunks/profile';

function Education({ profileEducations, deleteEducation }) {
  const educations = profileEducations.map((edu) => (
    <tr key={edu._id}>
      <td>{edu.school}</td>
      <td className='hide-sm'>{edu.degree}</td>
      <td>
        <Moment format='YYYY/MM/DD'>{edu.from}</Moment> -
        {edu.to === null ? (
          ' Now'
        ) : (
          <Moment format='YYYY/MM/DD'>{edu.to}</Moment>
        )}
      </td>
      <td>
        <button
          className='btn btn-danger'
          onClick={() => deleteEducation(edu._id)}
        >
          Delete
        </button>
      </td>
    </tr>
  ));

  return (
    <section>
      <h2 className='my-2'>Education Credentials</h2>
      <table className='table'>
        <thead>
          <tr>
            <th>School</th>
            <th className='hide-sm'>Degree</th>
            <th className='hide-sm'>Years</th>
            <th />
          </tr>
        </thead>
        <tbody>{educations}</tbody>
      </table>
    </section>
  );
}

Education.propTypes = {
  profileEducations: PropTypes.array.isRequired,
  deleteEducation: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  deleteEducation,
};

export default connect(null, mapDispatchToProps)(Education);
