import React from 'react';

const Smurf = props => {
  return (
    <div className="smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <section className="smurf-acts">
        <button onClick={_ => props.deleteSmurf(props.id)}>
          DELETE
        </button>
      </section>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

