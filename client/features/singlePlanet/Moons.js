import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Tooltip,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
} from "@mui/material";
import { styled } from "@mui/material/styles";

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

const StyledAccordion = styled(Accordion)`
  background: transparent;
  margin-bottom: 40px;
`;

const Moons = (props) => {
  const moons = props.moons;
  const planetName = props.planetName;
  const units = props.units;
  console.log(moons);

  return (
    <Grid mb="30px">
      <StyledAccordion>
        <AccordionSummary sx={{ color: "#ccc" }}>
          Click to see {planetName}'s Moons:
        </AccordionSummary>
        <AccordionDetails>
          <StyledTable>
            <TableHead>
              <TableRow>
                <StyledCell align="left">Name</StyledCell>
                <StyledCell align="left">Origin of Name</StyledCell>
                {units==="kilometers" ? (
                  <StyledCell align="left">Radius in Kilometers</StyledCell>
                ) : (
                  <StyledCell align="left">Radius in Miles</StyledCell>
                )}
              </TableRow>
            </TableHead>

            <TableBody>
              {moons.map((moon) => {
                let num = +moon.radiusInMiles;
                let radiusKm = (num * 1.609344).toFixed(3);

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
                    {units==="kilometers" ? (
                      <StyledCell>{radiusKm}</StyledCell>
                    ) : (
                      <StyledCell>{moon.radiusInMiles}</StyledCell>
                    )}
                  </TableRow>
                );
              })}
            </TableBody>
          </StyledTable>
        </AccordionDetails>
      </StyledAccordion>
      <p>*Some moon radii may vary depending on moon shape*</p>
    </Grid>
  );
};

export default Moons;
