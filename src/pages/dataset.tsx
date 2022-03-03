import DataTable from "@/components/data-table";
import { datasetColumns } from "@/data/columns";
import dataset from "@/data/dataset";
import DashboardLayout from "@/layouts/dashboard";

const DatasetPage = () => {
  return (
    <DashboardLayout title="Dataset">
      <DataTable data={dataset} columns={datasetColumns} />
    </DashboardLayout>
  );
};

export default DatasetPage;
