import { Column } from "react-table";
import { River } from "type";
import { attribute } from "../criteria";

const datasetColumns: ReadonlyArray<Column<River>> = [
  {
    Header: "No",
    accessor: "no",
    width: "10%",
  },
  {
    Header: "River Name",
    accessor: "name",
    width: "20%",
  },
  {
    Header: "Temprature",
    accessor: "tempature",
    width: "17.5%",
  },
  {
    Header: "Turbidity",
    accessor: "turbidity",
    width: "17.5%",
  },
  {
    Header: "Solid",
    accessor: "solid",
    width: "17.5%",
  },
  {
    Header: "Distance",
    accessor: "distance",
    width: "17.5%",
  },
];

export { datasetColumns };
