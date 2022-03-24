import React from "react";
import styled from 'styled-components';


export default function Checkbox ({ id, name, checked, label, onChange }) {
  return (
    <CheckboxCont>
      <input className="checkbox" type="checkbox" id={id} name={name} checked={checked} onChange={e => onChange(e.target.checked)}></input>
      <label className="label" htmlFor={id}>{label}</label>
    </CheckboxCont>
  )
}

const CheckboxCont = styled.div`
  margin-bottom: 5px;
  font-size:14px;
  font-weight: 300;
  
  .label{
    margin-left: 8px;
  }
`
