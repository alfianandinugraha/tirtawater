import {
  calculateWeightColumns,
  WeightDataProps,
  normalizeDataColumns,
} from "@/data/columns/product-weight";
import { attribute, criteriaWP } from "@/data/criteria";
import { useEffect, useState } from "react";
import { River } from "type";

type UseWeightProductProps = {
  dataset: River[];
};

const useWeightProduct = (props: UseWeightProductProps) => {
  const [calculateWeightData, setCalculateWeightData] = useState<
    WeightDataProps[]
  >([]);
  const [normalizeWeightData, setNormalizeWeightData] = useState<
    WeightDataProps[]
  >([]);
  const [normalizeData, setNormalizeData] = useState<River[]>([]);

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
    const normalizeWeightData = weightData.map((item) => {
      return {
        ...item,
        value:
          item.attribute === attribute.BENEFIT
            ? 1 * item.value
            : -1 * item.value,
      };
    });

    const normalizeDataObj: any = {};
    normalizeWeightData.forEach((item) => {
      normalizeDataObj[item.criteria] = { ...item };
    });

    const datasetRank = props.dataset.map((item) => {
      const criteria: Record<string, number> = {
        tempature: Math.pow(item.tempature, normalizeDataObj.tempature.value),
        turbidity: Math.pow(item.turbidity, normalizeDataObj.turbidity.value),
        solid: Math.pow(item.solid, normalizeDataObj.solid.value),
        distance: Math.pow(item.distance, normalizeDataObj.distance.value),
      };
      return {
        ...item,
        ...criteria,
      };
    });

    setNormalizeData(datasetRank);
    setCalculateWeightData(weightData);
    setNormalizeWeightData(normalizeWeightData);
  }, []);

  return {
    calculateWeight: {
      columns: calculateWeightColumns,
      data: calculateWeightData,
    },
    normalizeWeight: {
      columns: calculateWeightColumns,
      data: normalizeWeightData,
    },
    normalizeData: {
      columns: normalizeDataColumns,
      data: normalizeData,
    },
  };
};

export default useWeightProduct;
