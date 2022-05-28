import DatasetPage from "@/pages/dataset";
import TopsisPage from '@/pages/topsis';
import WeightProductPage from "@/pages/weight-product";

const mainRouter = [
  {
    path: "weight-product",
    element: <WeightProductPage />,
  },
    {
    path: "topsis",
    element: <TopsisPage />,
  },
  {
    path: "",
    element: <DatasetPage />,
  },
];

export default mainRouter;
