import Chip from "@/components/chip";
import DataTable from "@/components/data-table";
import {
  calculateWeightColumns,
  datasetColumns,
  WeightProps,
} from "@/data/columns";
import { criteriaWP, attribute } from "@/data/criteria";
import dataset from "@/data/dataset";
import DashboardLayout from "@/layouts/dashboard";
import { HStack } from "@chakra-ui/layout";
import { useEffect, useMemo, useState } from "react";

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
    value: "NORMALIZE",
  },
  {
    text: "Search S",
    value: "SEARCH",
  },
  {
    text: "Ranking",
    value: "RANKING",
  },
];

const WeightProductPage = () => {
  const [activeChip, setActiveChip] = useState(chipMenu[0]);
  const [calculateWeightData, setCalculateWeightData] = useState<WeightProps[]>(
    []
  );
  const [normalizeWeightData, setNormalizeWeightData] = useState<WeightProps[]>(
    []
  );

  useEffect(() => {
    const totalWeight = criteriaWP.reduce(
      (prev, curr) => prev + curr.weight,
      0
    );
    const weightData = criteriaWP.map((item) => {
      return {
        ...item,
        value: item.weight / totalWeight,
      };
    });
    const normalizeData = weightData.map((item) => {
      return {
        ...item,
        value:
          item.attribute === attribute.BENEFIT
            ? 1 * item.value
            : -1 * item.value,
      };
    });

    setCalculateWeightData(weightData);
    setNormalizeWeightData(normalizeData);
  }, []);

  const calculateWightTableData = useMemo(() => {
    return calculateWeightData.map((item) => {
      return {
        ...item,
        value: item.value.toFixed(3),
        attribute: item.attribute === attribute.BENEFIT ? "BENEFIT" : "COST",
      };
    });
  }, [calculateWeightData]);

  const normalizeWightTableData = useMemo(() => {
    return normalizeWeightData.map((item) => {
      return {
        ...item,
        value: item.value.toFixed(3),
        attribute: item.attribute === attribute.BENEFIT ? "BENEFIT" : "COST",
      };
    });
  }, [normalizeWeightData]);

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
        <DataTable
          data={calculateWightTableData}
          columns={calculateWeightColumns}
        />
      ) : null}
      {activeChip.value === "NORMALIZE" ? (
        <DataTable
          data={normalizeWightTableData}
          columns={calculateWeightColumns}
        />
      ) : null}
    </DashboardLayout>
  );
};

export default WeightProductPage;
