import Chip from "@/components/chip";
import DataTable from "@/components/data-table";
import { datasetColumns } from "@/data/columns";
import dataset from "@/data/dataset";
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
    text: "Calculate Weight",
    value: "CALCULATE",
  },
  {
    text: "Normalize Weight",
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
      {activeChip.value === "CALCULATE" ? (
        <DataTable {...calculate.calculateWeight} />
      ) : null}
      {activeChip.value === "NORMALIZE_WEIGHT" ? (
        <DataTable {...calculate.normalizeWeight} />
      ) : null}
      {activeChip.value === "NORMALIZE_DATA" ? (
        <DataTable {...calculate.normalizeData} />
      ) : null}
    </DashboardLayout>
  );
};

export default WeightProductPage;
