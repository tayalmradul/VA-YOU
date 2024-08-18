import { useParams } from "react-router-dom";
import PersonalProfile from "./PersonalProfile";
import Investment from "./Investment";
import Roi from "./Roi";
import Kyc from "./Kyc";
import Recommendation from "./Recommendation";
import Allocation from "./Allocation";
import Layout from "../layout/Layout";

const DataPages = () => {
  const { id } = useParams();

  return (
    <Layout>
      {id == 0 && <Investment />}
      {id == 1 && <Roi />}
      {id == 2 && <PersonalProfile />}
      {id == 3 && <Kyc />}
      {id == 4 && <Recommendation />}
      {id == 5 && <Allocation />}
    </Layout>
  );
};

export default DataPages;
