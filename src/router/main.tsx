import DatasetPage from "@/pages/dataset";
import WeightProductPage from "@/pages/weight-product";

const mainRouter = [
  {
    path: "weight-product",
    element: <WeightProductPage />,
  },
  {
    path: "",
    element: <DatasetPage />,
  },
];

export default mainRouter;
