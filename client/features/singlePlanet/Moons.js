import React from "react";
import { Link } from "react-router-dom";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Tooltip,
  Accordion,
  Grid,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { ColumnContainer } from "../../styled-components/Containers";

const StyledCell = styled(TableCell)`
  color: #ccc;
`;

const StyledTable = styled(Table)`
  width: 60%;
  margin: auto;
`;
const StyledLink = styled(Link)`
  color: #ccc;
  font-weight: bold;
`;

const Moons = (props) => {
  const moons = props.planet.moons;
  const units = props.units;

  console.log(units);

  return (
    <ColumnContainer width="30vw">
      <Grid mb="30px">
        {moons && moons.length ? (
          <>
            {" "}
            <StyledTable>
              <TableHead>
                <TableRow>
                  <StyledCell align="left">Name</StyledCell>
                  <StyledCell align="left">Origin of Name</StyledCell>
                  {units === "kilometers" ? (
                    <StyledCell align="left">Radius in Kilometers</StyledCell>
                  ) : (
                    <StyledCell align="left">Radius in Miles</StyledCell>
                  )}
                </TableRow>
              </TableHead>

              <TableBody>
                {moons.map((moon) => {
                  let num = +moon.radiusInMiles;
                  let radiusKm = (num * 1.609344).toLocaleString("en-US");

                  return (
                    <TableRow key={moon.id}>
                      <StyledCell>
                        <Tooltip title="Learn more!">
                          <StyledLink to={`/moons/${moon.id}`}>
                            {moon.name}
                          </StyledLink>
                        </Tooltip>
                      </StyledCell>
                      <StyledCell>{moon.history}</StyledCell>
                      {units === "kilometers" ? (
                        <StyledCell>{radiusKm}</StyledCell>
                      ) : (
                        <StyledCell>{moon.radiusInMiles}</StyledCell>
                      )}
                    </TableRow>
                  );
                })}
              </TableBody>
            </StyledTable>
            <p>*Some moon radii may vary depending on moon shape*</p>
          </>
        ) : (
          <h2>This planet has no moons!</h2>
        )}
      </Grid>
    </ColumnContainer>
  );
};

export default Moons;
