import { Column } from "react-table";
import { River } from "type";
import { attribute } from "./criteria";

type WeightProps = {
  criteria: string;
  attribute: attribute;
  value: number;
};

type WeightTableProps = {
  criteria: string;
  attribute: string;
  value: string;
};

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

const calculateWeightColumns: ReadonlyArray<Column<WeightTableProps>> = [
  {
    Header: "Criteria",
    accessor: "criteria",
    width: "33%",
  },
  {
    Header: "Attribute",
    accessor: "attribute",
    width: "33%",
  },
  {
    Header: "Weight",
    accessor: "value",
    width: "33%",
  },
];

export { datasetColumns, calculateWeightColumns };
export type { WeightProps };
