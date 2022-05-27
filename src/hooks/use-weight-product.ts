import {
  calculateWeightColumns,
  WeightDataProps,
  normalizeDataColumns,
  RankRiverDataProps,
  rankingRiverColumns,
} from "@/data/columns/product-weight";
import { attribute, criteriaWP } from "@/data/criteria";
import useDataset from "@/store/use-dataset";
import { useEffect, useState } from "react";
import { River } from "type";

const useWeightProduct = () => {
  const dataset = useDataset((store) => store.rivers);
  const [calculateWeightData, setCalculateWeightData] = useState<
    WeightDataProps[]
  >([]);
  const [normalizeWeightData, setNormalizeWeightData] = useState<
    WeightDataProps[]
  >([]);
  const [normalizeData, setNormalizeData] = useState<River[]>([]);
  const [rankData, setRankData] = useState<RankRiverDataProps[]>([]);

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

    const newNormalizeData = dataset.map((item) => {
      const criteria: Record<string, number> = {
        temprature: Math.pow(
          item.temprature,
          normalizeDataObj.temprature.value
        ),
        turbidity: Math.pow(item.turbidity, normalizeDataObj.turbidity.value),
        solid: Math.pow(item.solid, normalizeDataObj.solid.value),
        distance: Math.pow(item.distance, normalizeDataObj.distance.value),
        terrain: Math.pow(item.terrain, normalizeDataObj.terrain.value),
        debit: Math.pow(item.debit, normalizeDataObj.debit.value),
      };
      return {
        ...item,
        ...criteria,
      };
    });

    let newRankData = newNormalizeData.map<RankRiverDataProps>((item) => {
      const criteria: Record<string, number> = {
        temprature: item.temprature,
        turbidity: item.turbidity,
        solid: item.solid,
        distance: item.distance,
        terrain: item.terrain,
        debit: item.debit,
      };

      return {
        ...item,
        rank: 1,
        total: Object.keys(criteria).reduce(
          (prev, curr) => prev * criteria[curr],
          1
        ),
      };
    });

    var sorted = newRankData.slice().sort(function (a, b) {
      return b.total - a.total;
    });
    var ranks = newRankData.map(function (v) {
      return sorted.indexOf(v) + 1;
    });
    newRankData = ranks.map<RankRiverDataProps>((rank, idx) => {
      return {
        ...newRankData[idx],
        rank,
      };
    });
    newRankData = newRankData.map((item) => {
      const isRankFound = newRankData.find((data) => data.total === item.total);
      return {
        ...item,
        rank: isRankFound ? isRankFound.rank : item.rank,
      };
    });

    setNormalizeData(newNormalizeData);
    setCalculateWeightData(weightData);
    setNormalizeWeightData(normalizeWeightData);
    setRankData(newRankData);
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
    rankData: {
      columns: rankingRiverColumns,
      data: rankData,
    },
  };
};

export default useWeightProduct;
