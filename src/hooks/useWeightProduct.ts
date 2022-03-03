import {
  WeightProps,
  calculateWeightColumns,
  datasetColumns,
} from "@/data/columns";
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
  const [normalizeData, setNormalizeData] = useState<any[]>([]);

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

  const normalizeDataTableData = useMemo(() => {
    return normalizeData.map((item) => {
      return {
        ...item,
        tempature: item.tempature.toFixed(3),
        turbidity: item.turbidity.toFixed(3),
        solid: item.solid.toFixed(3),
        distance: item.distance.toFixed(3),
      };
    });
  }, [normalizeData]);

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
        total: Object.keys(criteria).reduce(
          (prev, curr) => prev * criteria[curr],
          1
        ),
      };
    });

    setNormalizeData(datasetRank);
    setCalculateWeightData(weightData);
    setNormalizeWeightData(normalizeWeightData);
    console.log(datasetRank);
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
    normalizeData: {
      columns: datasetColumns as any,
      data: normalizeDataTableData,
    },
  };
};

export default useWeightProduct;
