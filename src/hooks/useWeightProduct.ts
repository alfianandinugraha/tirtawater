import { WeightProps, calculateWeightColumns } from "@/data/columns";
import { attribute, criteriaWP } from "@/data/criteria";
import { useEffect, useMemo, useState } from "react";
import { River } from "type";

type UseWeightProductProps = {
  dataset: River[];
};

const useWeightProduct = (props: UseWeightProductProps) => {
  const [calculateWeightData, setCalculateWeightData] = useState<WeightProps[]>(
    []
  );
  const [normalizeWeightData, setNormalizeWeightData] = useState<WeightProps[]>(
    []
  );

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

  return {
    calculateWeight: {
      columns: calculateWeightColumns,
      data: calculateWightTableData,
    },
    normalizeWeight: {
      columns: calculateWeightColumns,
      data: normalizeWightTableData,
    },
  };
};

export default useWeightProduct;
