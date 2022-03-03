import { Column } from "react-table";
import { River } from "type";
import { attribute } from "../criteria";

type WeightDataProps = {
  criteria: string;
  attribute: attribute;
  value: number;
};

type RankRiverDataProps = Pick<River, "no" | "name"> & {
  rank: number;
  total: number;
};

const calculateWeightColumns: ReadonlyArray<Column<WeightDataProps>> = [
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

const normalizeDataColumns: ReadonlyArray<Column<River>> = [
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
    accessor: "temprature",
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

const rankingRiverColumns: ReadonlyArray<Column<RankRiverDataProps>> = [
  {
    Header: "No",
    accessor: "no",
    width: "10%",
  },
  {
    Header: "River Name",
    accessor: "name",
    width: "30%",
  },
  {
    Header: "Total",
    accessor: "total",
    width: "30%",
  },
  {
    Header: "Rank",
    accessor: "rank",
    width: "30%",
  },
];

export { calculateWeightColumns, normalizeDataColumns, rankingRiverColumns };
export type { WeightDataProps, RankRiverDataProps };
