import PropTypes from 'prop-types';
import { useState } from 'react';
import './buttonFilter.css';

const tiposCode = [
  { value: '', text: 'Todos', fill: '#ffffff', stroke: '#AA1E1E', color: '#AA1E1E' },
  { value: '1', text: '10X', fill: '#CBC7FF', stroke: '#120A68', color: '#000000' },
  { value: '2', text: '20X', fill: '#AAE9AC', stroke: '#083F0E', color: '#000000' },
  { value: '3', text: '30X', fill: '#F2F3A6', stroke: '#7D8610', color: '#000000' },
  { value: '4', text: '40X', fill: '#FFD699', stroke: '#8B4410', color: '#000000' },
  { value: '5', text: '50X', fill: '#FACACA', stroke: '#AA1E1E', color: '#000000' }
];

const ButtonFilter = ({ onClick }) => {
  const [state, setState] = useState(tiposCode[0]);

  const handleChange = (event) => {
    onClick(event.target.value, false);
    setState({ value: event.target.value });
  };
  return (
    <div className="codes">
      <select
        value={state.value}
        onChange={handleChange}
      >
        {tiposCode.map((tipo, key) => (
          <option
            value={tipo.value}
            key={key}
          >
            {tipo.text}
          </option>
        ))
        }
      </select>

      {
        tiposCode.map(tipo => (
          <button
            key={tipo.value}
            style={{ border: `2px solid ${tipo.stroke}`, backgroundColor: `${tipo.fill}`, color: `${tipo.color}` }}
            className="btn-code"
            onClick={() => onClick(tipo.value)}
          >
            {tipo.text}
          </button>
        )
        )
      }

    </div>

  );
};

ButtonFilter.propTypes = {
  onClick: PropTypes.func
};

export { ButtonFilter };
