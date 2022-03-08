import Chip from "@/components/chip";
import DataTable from "@/components/data-table";
import { datasetColumns } from "@/data/columns";
import useTitlePage from "@/hooks/use-title-page";
import DashboardLayout from "@/layouts/dashboard";
import useDataset from "@/store/use-dataset";
import { HStack } from "@chakra-ui/layout";
import { useState } from "react";

const chipMenu = [
  {
    text: "Dataset",
    value: "DATASET",
  },
];

const TopsisPage = () => {
  useTitlePage("TOPSIS");
  const [activeChip, setActiveChip] = useState(chipMenu[0]);
  const dataset = useDataset((store) => store.rivers);

  return (
    <DashboardLayout title="TOPSIS Method">
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
    </DashboardLayout>
  );
};

export default TopsisPage;
