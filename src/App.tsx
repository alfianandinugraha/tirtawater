import { Container, Heading } from "@chakra-ui/layout";
import { ReactLocation, Router } from "react-location";
import mainRouter from "./router/main";

const reactLocation = new ReactLocation();

function App() {
  return <Router routes={mainRouter} location={reactLocation} />;
}

export default App;
