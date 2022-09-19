import React, { useState } from "react";
import "./buttonFilter.css";

const tiposCode = [
  {value:"all", text: "All", fill:"#ffffff", stroke: "#AA1E1E"},
  {value:"10x", text: "10X", fill:"#CBC7FF", stroke: "#120A68"},
  {value:"20x", text: "20X", fill:"#AAE9AC", stroke: "#083F0E"},
  {value:"30x", text: "30X", fill:"#F2F3A6", stroke: "#7D8610"},
  {value:"40x", text: "40X", fill:"#FFD699", stroke: "#8B4410"},
  {value:"50x", text: "50X", fill:"#FACACA", stroke: "#AA1E1E"}
]

const ButtonFilter = () => {

  const [state, setState] = useState(tiposCode[0]);

  const handleChange = (event) => {
    setState({value: event.target.value});
  }
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
            style={{border: `2px solid ${tipo.stroke}`, backgroundColor: `${tipo.fill}`}}
            className="btn-code"
          >
            {tipo.text}
          </button>
          )
        )
      }
      
    </div>

  );
};

export { ButtonFilter } ;
