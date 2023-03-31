import styled from "styled-components";

export const TableHead = styled.table``;

export const Table = styled.table`
   {
    table,
    th,
    td {
      border: 1px solid black;
      border-collapse: collapse;
      padding-bottom: 40px;
    }
    th,
    td,
    tr {
      padding: 5px;
      display: inline-flex;
      flex-direction: row;
    }
    th {
      text-align: left;
    }
    table {
      width: 100%;
    }
  }
`;
