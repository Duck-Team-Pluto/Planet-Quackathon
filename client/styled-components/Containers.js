import styled from "styled-components";

export const RowContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
position: relative;
flex-direction: row;
`
export const ColumnContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
position: relative;
flex-direction: column;
`

export const SinglePlanetImageContainer = styled.div`
position: relative;`

export const PlanetListContainer = styled.div`
  position: relative;
  margin-top: 80vh;
  padding: 1%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  width: 130vh;
  height: 13vh;
  color: #ccc;
  border: 1px solid rgba(150, 150, 150, 0.5);
  border-radius: 30px;

`

export const PlanetListItem = styled.div`
display: flex;
padding: 1rem;
align-items: center;
flex-direction: column;
justify-content: space-around;
`
