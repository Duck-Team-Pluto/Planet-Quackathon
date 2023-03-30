import styled from "styled-components";

export const RowContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
position: relative;
flex-direction: row;
border: ${(props) => props.border ? `1px solid rgba(150, 150, 150, 0.5)` : null };
border-radius: 5vh;
margin: 1vh;
`
export const ColumnContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
position: relative;
flex-direction: column;
border: ${(props) => props.border ? `1px solid rgba(150, 150, 150, 0.5)` : null };
border-radius: 5vh;
`

export const SinglePlanetImageContainer = styled.div`
position: relative;`
