import React from 'react';
import { Link } from 'react-router-dom';

const Smurf = smurf => {
  const { id,
          name,
          age,
          height,
          deleteSmurf,
          selectSmurf } = smurf;

  return (
    <div className="smurf">
      <h3>{name}</h3>
      <strong>{height} tall</strong>
      <p>{age} smurf years old</p>
      <section className="smurf-acts">
        <button onClick={_ => deleteSmurf(id)}>
          DELETE
        </button>
        <button onClick={_ => selectSmurf({ name, age, height })}>
          <Link to={`/smurf-form/update/${id}`}>
            UPDATE
          </Link>
        </button>
      </section>
    </div>
  );
}

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;
