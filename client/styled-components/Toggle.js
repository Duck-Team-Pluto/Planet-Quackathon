import styled from "styled-components";
import React from "react";



const Toggle = (props) => {

  return (
    <label className="switch">
        <input type="checkbox" name="distance" />
        <span className="slider"></span>
    </label>
  )
}

export default Toggle
