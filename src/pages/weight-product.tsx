import Chip from "@/components/chip";
import DataTable from "@/components/data-table";
import { datasetColumns } from "@/data/columns";
import { calculateWeightColumns } from "@/data/columns/product-weight";
import { criteriaWP } from "@/data/criteria";
import dataset from "@/data/dataset";
import useTitlePage from "@/hooks/use-title-page";
import useWeightProduct from "@/hooks/use-weight-product";
import DashboardLayout from "@/layouts/dashboard";
import { HStack } from "@chakra-ui/layout";
import { useState } from "react";

const chipMenu = [
  {
    text: "Dataset",
    value: "DATASET",
  },
  {
    text: "Criteria",
    value: "CRITERIA",
  },
  {
    text: "Calculate Criteria Weight",
    value: "CALCULATE",
  },
  {
    text: "Normalize Criteria Weight",
    value: "NORMALIZE_WEIGHT",
  },
  {
    text: "Normalize Data",
    value: "NORMALIZE_DATA",
  },
  {
    text: "Ranking",
    value: "RANKING",
  },
];

const WeightProductPage = () => {
  useTitlePage("Weight Product");
  const [activeChip, setActiveChip] = useState(chipMenu[0]);
  const calculate = useWeightProduct({ dataset });

  return (
    <DashboardLayout title="Weight Product Method">
      <HStack spacing="2" mb={3}>
        {chipMenu.map((item) => {
          return (
            <Chip
              key={item.value}
              text={item.text}
              active={item.value === activeChip.value}
              onClick={() => {
                setActiveChip(item);
              }}
            />
          );
        })}
      </HStack>
      {activeChip.value === "DATASET" ? (
        <DataTable data={dataset} columns={datasetColumns} />
      ) : null}
      {activeChip.value === "CRITERIA" ? (
        <DataTable
          data={criteriaWP.map((item) => ({ ...item, value: item.weight }))}
          columns={calculateWeightColumns}
        />
      ) : null}
      {activeChip.value === "CALCULATE" ? (
        <DataTable {...calculate.calculateWeight} />
      ) : null}
      {activeChip.value === "NORMALIZE_WEIGHT" ? (
        <DataTable {...calculate.normalizeWeight} />
      ) : null}
      {activeChip.value === "NORMALIZE_DATA" ? (
        <DataTable {...calculate.normalizeData} />
      ) : null}
      {activeChip.value === "RANKING" ? (
        <DataTable {...calculate.rankData} />
      ) : null}
    </DashboardLayout>
  );
};

export default WeightProductPage;
