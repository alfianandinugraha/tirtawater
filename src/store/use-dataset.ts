import create from "zustand";
import dataset from "@/data/dataset";
import { River } from "type";

type UseDatasetProps = {
  rivers: River[];
  push: (river: Omit<River, "no">) => void;
};

const useDataset = create<UseDatasetProps>((set) => {
  return {
    rivers: dataset,
    push: (river) => {
      set((store) => {
        const newRivers = store.rivers.map((item, idx) => ({
          ...item,
          no: idx + 1,
        }));

        const lastNum = newRivers[newRivers.length - 1].no;
        newRivers.push({ ...river, no: lastNum + 1 });

        return {
          rivers: newRivers,
        };
      });
    },
  };
});

export default useDataset;
