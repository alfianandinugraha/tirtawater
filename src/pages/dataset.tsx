import DataTable from "@/components/data-table";
import { datasetColumns } from "@/data/columns";
import dataset from "@/data/dataset";
import useTitlePage from "@/hooks/use-title-page";
import DashboardLayout from "@/layouts/dashboard";
import { FiFilePlus } from "react-icons/fi";
import { Button } from "@chakra-ui/react";

const DatasetPage = () => {
  useTitlePage("Dataset");

  return (
    <DashboardLayout
      title="Dataset"
      action={
        <Button colorScheme="blue" leftIcon={<FiFilePlus />}>
          Add Data
        </Button>
      }
    >
      <DataTable data={dataset} columns={datasetColumns} />
    </DashboardLayout>
  );
};

export default DatasetPage;
