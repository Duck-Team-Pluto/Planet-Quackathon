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
  AccordionSummary,
  AccordionDetails,
  Grid,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

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
  const dispatch = useDispatch;
  const moons = props.planet.moons;
  const planetName = props.planet.planetName;
  const units = props.units;
  console.log(moons);

  useEffect(() => {}, [dispatch]);

  return (
    <>
      <div>
        <table id="moon-table">
          <tr>
            <th className="head">Name</th>
            <th className="head">Origin of Name</th>
            {units === "kilometers" ? (
              <th className="head">Radius in Kilometers</th>
            ) : (
              <th className="head">Radius in Miles</th>
            )}
          </tr>

          {moons.map((moon) => {
            let num = +moon.radiusInMiles;
            let radiusKm = (num * 1.609344).toLocaleString("en-US");

            return (
              <tr key={moon.id}>
                <td>
                  <Tooltip title="Learn more!">
                    <StyledLink to={`/moons/${moon.id}`}>
                      {moon.name}
                    </StyledLink>
                  </Tooltip>
                </td>
                <td>{moon.history}</td>
                {units === "kilometers" ? (
                  <td>{radiusKm}</td>
                ) : (
                  <td>{moon.radiusInMiles}</td>
                )}
              </tr>
            );
          })}
        </table>

        <p>*Some moon radii may vary depending on moon shape*</p>
      </div>
    </>
  );
};

export default Moons;
