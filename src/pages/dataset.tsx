import DataTable from "@/components/data-table";
import { datasetColumns } from "@/data/columns";
import dataset from "@/data/dataset";
import useTitlePage from "@/hooks/use-title-page";
import DashboardLayout from "@/layouts/dashboard";
import { FiFilePlus } from "react-icons/fi";
import { Button, useBoolean } from "@chakra-ui/react";
import AddDataModal from "@/templates/add-data-modal";
import useDataset from "@/store/use-dataset";

const DatasetPage = () => {
  const [isModalShow, modalController] = useBoolean(false);
  const dataset = useDataset((store) => store.rivers);
  useTitlePage("Dataset");

  return (
    <>
      <AddDataModal open={isModalShow} onClose={modalController.off} />
      <DashboardLayout
        title="Dataset"
        action={
          <Button
            colorScheme="blue"
            leftIcon={<FiFilePlus />}
            onClick={modalController.on}
          >
            Add Data
          </Button>
        }
      >
        <DataTable data={dataset} columns={datasetColumns} />
      </DashboardLayout>
    </>
  );
};

export default DatasetPage;
